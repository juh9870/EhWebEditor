import {DatabaseFile, FileEntry, ItemType, ItemTypesMap, ItemTypesMapRev, NumberMap} from "./types";
import {keys, values} from "./utils";

export type DatabaseFileEntry = FileEntry & DatabaseFile

export class Database {
    public static deleteNumber = 2 ** 32 - 9870;
    public mappings: NumberMap<NumberMap<DatabaseFileEntry>> = {};
    public errors:string[];
    public constructor() {
        for (let type of values(ItemTypesMap)) {
            this.mappings[type]={};
        }
        this.errors=[];
    }

    public async tryAddFile(path:string,data:string):Promise<boolean> {
        try {
            let json = JSON.parse(data);
            if (!json.ItemType) return false;

            let old = this.mappings[json.ItemType][json.Id??0];

            if(old){
                this.errors.push(`${path} have same ID as ${old.path}`);
                return true;
            }
            this.mappings[json.ItemType][json.Id??0]={
                ItemType:json.ItemType,
                Id:json.Id??0,
                path:path,
                value:data
            }
            return true;
        } catch (e){
            return false;
        }
    }

    private err(message:string){
        console.warn(message);
        alert(message);
    }

    public async tryApplyChanges(old:DatabaseFile,changed:DatabaseFile):Promise<boolean>{
        if(old.Id!=changed.Id){
            let targ = this.mappings[changed.ItemType][changed.Id];
            if(targ){
                this.err(`Id ${ItemTypesMapRev[changed.ItemType]}.${changed.Id} is already occupied by ${targ.path}`);
                changed.Id=old.Id;
            } else {
                this.mappings[changed.ItemType][changed.Id]=this.mappings[changed.ItemType][old.Id];
                delete this.mappings[changed.ItemType][old.Id];
            }
        }
        return true;
    }

    public getIds(type:ItemType):number[]{
        return keys(this.mappings[type]).map(e=>Number(e));
    }
}