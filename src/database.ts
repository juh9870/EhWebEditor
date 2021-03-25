import {DatabaseFile, FileEntry, ItemType, ItemTypesMap, ItemTypesMapRev, NumberMap} from "./types";
import {keys, values} from "./utils";
import {TypeMappings} from "./schema/typeMappings";
import {Files} from "./files";

export type DatabaseFileEntry = FileEntry & DatabaseFile

let mapps = TypeMappings.getMappings();

export class Database {
    public static deleteNumber = 2 ** 32 - 9870;
    public mappings: NumberMap<NumberMap<DatabaseFileEntry>> = {};
    public errors: string[];

    public constructor() {
        for (let type of values(ItemTypesMap)) {
            this.mappings[type] = {};
        }
        this.errors = [];
    }

    private static changeIdRecursive(targ: any, type: ItemType, oldId: number, newId: number): boolean {
        let changed = false;
        for (let key of keys(targ)) {
            let val = targ[key];
            if (val && (typeof val === "object" || Array.isArray(val))) {
                changed = changed || Database.changeIdRecursive(val, type, oldId, newId);
            }
            if (Array.isArray(val) && val.length > 0 && typeof val[0] === "number") {
                let _type = TypeMappings.fieldType(this, key.toString());
                if (_type !== type) continue;
                // debugger;
                for (let i = 0; i < val.length; i++) {
                    if (val[i] === oldId) val[i] = newId;
                    changed = true;
                }
            } else if (typeof val === "number" && val === oldId) {
                let _type = TypeMappings.fieldType(targ, key.toString());
                if (_type !== type) continue;
                // debugger;
                targ[key] = newId;
                changed = true;
            }
        }
        return changed;
    }

    public async tryAddFile(path: string, data: string): Promise<boolean> {
        try {
            let json = JSON.parse(data);
            if (!json.ItemType) return false;

            let old = this.mappings[json.ItemType][json.Id ?? 0];

            if (old) {
                this.errors.push(`${path} have same ID as ${old.path}`);
                return true;
            }
            this.mappings[json.ItemType][json.Id ?? 0] = {
                ItemType: json.ItemType,
                Id: json.Id ?? 0,
                path: path,
                value: data
            }
            return true;
        } catch (e) {
            return false;
        }
    }

    public async tryApplyChanges(old: DatabaseFile, changed: DatabaseFile, files: Files): Promise<boolean> {
        old.Id = old.Id ?? 0;
        changed.Id = changed.Id ?? 0;
        if (old.Id != changed.Id) {
            if (changed.Id > 2 ** 31 - 1) {
                this.err(`Id ${changed.Id} is too large, it must be ${2**31-1} at most!`);
                changed.Id = old.Id;
            } else {
                let targ = this.mappings[changed.ItemType][changed.Id];
                if (targ) {
                    this.err(`Id ${ItemTypesMapRev[changed.ItemType]}.${changed.Id} is already occupied by ${targ.path}`);
                    changed.Id = old.Id;
                } else {
                    this.mappings[changed.ItemType][changed.Id] = this.mappings[changed.ItemType][old.Id];
                    delete this.mappings[changed.ItemType][old.Id];
                    await this.changeIds(files, changed.ItemType, old.Id, changed.Id);
                }
            }
        }
        return true;
    }

    public async changeIds(files: Files, type: ItemType, oldId: number, newId: number) {
        for (let file of (await files.allFiles())) {
            let data = JSON.parse(file.value);
            if (Database.changeIdRecursive(data, type, oldId, newId)) {
                await files.writeFile(file.path, JSON.stringify(data, undefined, "\t"));
            }
        }
    }

    public getIds(type: ItemType): number[] {
        return keys(this.mappings[type]).map(e => Number(e));
    }

    private err(message: string) {
        console.warn(message);
        alert(message);
    }
}