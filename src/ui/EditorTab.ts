import * as $ from "jquery";
import {DatabaseFile, ItemType, ItemTypesMap, NumberMap} from "../types";
import {schemaForType} from "../schema/schema";
import {clone, values} from "../utils";
import {Database} from "../database";

require("select2");

const JSONEditor = require("@json-editor/json-editor").JSONEditor;
// declare global {
//     const JSONEditor:any;
// }

let swr = (obj: any, r: boolean) => {
    for (let key of Object.getOwnPropertyNames(obj)) {
        let val = obj[key];
        if (r && (key.startsWith("$") || val === Database.deleteNumber)) {
            delete obj[key];
            continue;
        }
        if (typeof val === "string") {
            if (val.match(/^#[0-9a-fA-F]{8}$/)) {
                let split = val.match(/[0-9a-fA-F]{2}/g) as string[];
                if (r) {
                    split.unshift(split.pop() as string);
                } else {
                    split.push(split.shift() as string);
                }
                obj[key] = "#" + split.join("");
            }
        } else if (val && typeof val === "object" || Array.isArray(val)) {
            swr(val, r);
        }
    }
    return obj;
}

let editors: NumberMap<JSONEditor> = (window as any).editors = {};
let holders: NumberMap<JQuery<HTMLElement>> = {};
let current: ItemType = ItemType.Undefined;
let curData: object;
let database: Database;
let root: JQuery<HTMLElement>;
let ready=false;
let readyAwaiters:((...args:any[])=>void)[] = []

// debugger;

JSONEditor.defaults.callbacks.template = {}
for (let type of values(ItemTypesMap)) {
    let keyT = type + "_EnumTitleCB";
    let keyV = type + "_EnumValueCB";

    JSONEditor.defaults.callbacks.template[keyT] = (jseditor: any, e: any) => {
        if(e.item===Database.deleteNumber)return "None"
        return database.mappings[type][e.item].path;

    };
    JSONEditor.defaults.callbacks.template[keyV] = (jseditor: any, e: any) => {
        return e.item;
    };

}

export class EditorTab {
    public static async init(_database: Database) {
        database = _database;
        root = $("#contentHolder");

        for (let editor of values(editors)) {
            editor.destroy();
        }
        holders = {};
        root.empty();

        for (let type of values(ItemTypesMap)) {
        }
        EditorTab.closeAll();
    }

    public static closeAll() {
        for (let type of values(ItemTypesMap)) {
            EditorTab.close(type);
        }
    }

    public static close(type: ItemType) {
        // editors[type].disable();
        // holders[type].hide();
        editors[type]?.destroy()
    }

    public static show(type: ItemType) {
        EditorTab.close(current);
        current = type;


        let typeSchema = schemaForType(type, database);
        let holder = $(`<div id="editor_holder" data-theme="html"></div>`);
        root.append(holder);
        holders[type] = holder;
        ready=false;
        editors[type] = new JSONEditor(holder[0], {
            schema: typeSchema,
            "template": "default",
            "show_errors": "always",
            "required_by_default": 1,
            "show_opt_in": 1,
            "disable_properties": 1,
            "enable_array_copy": 1,
            "disable_array_delete_all_rows": 1,
            "disable_array_delete_last_row": 1,
            "prompt_before_delete": 1
        });
        editors[current].on("ready",()=> {
            ready=true;
            for (let readyAwaiter of readyAwaiters) {
                readyAwaiter();
            }
        });

            // editors[type].enable();
        holders[type].show();
    }

    public static feedData(data: DatabaseFile) {
        let type = data.ItemType;
        EditorTab.show(type);
        editors[current].setValue({});
        // let hold = $(editors[current].element);
        // let inp = hold.find(".je-switcher")[0] as HTMLSelectElement;
        // inp.value=ItemTypesMapRev[type];
        // let ev = new Event('change');
        // inp.dispatchEvent(ev);
        curData = swr(clone(data), false);
        EditorTab.populateTech(curData);
        editors[current].setValue(curData);
    }

    public static async getData() {
        await EditorTab.waitTillReady();
        let data = editors[current].getValue();
        data=swr(clone(data), true)
        EditorTab.depopulateTech(data);
        return data as DatabaseFile;
    }

    private static waitTillReady(){
        if(ready){
            return Promise.resolve()
        }
        return new Promise((resolve,reject)=>{
            readyAwaiters.push(resolve);
        });
    }

    private static populateTech(targ: any) {
        if(targ.ItemType==ItemType.Component){
            targ.AmmunitionIdObsolete=targ.AmmunitionId;
        }
    }
    private static depopulateTech(targ: any) {
        if(targ.ItemType==ItemType.Component){
            targ.AmmunitionId=targ.AmmunitionId??targ.AmmunitionIdObsolete;
            delete targ.AmmunitionIdObsolete;
        }
    }
}