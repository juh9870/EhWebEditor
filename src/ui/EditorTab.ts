import * as $ from "jquery";
import {DatabaseFile, ItemType, ItemTypesMap, NumberMap} from "../types";
import {schemaForType} from "../schema/schema";
import {clone, values} from "../utils";

// const JSONEditor = require("@json-editor/json-editor").JSONEditor;
// declare global {
//     const JSONEditor:any;
// }
let swr = (obj: any, r: boolean) => {
    for (let key of Object.getOwnPropertyNames(obj)) {
        let val = obj[key];
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

let editors: NumberMap<JSONEditor> = {};
let holders: NumberMap<JQuery<HTMLElement>> = {};
let current: ItemType = ItemType.Undefined;
let curData: object;

export class EditorTab {
    public static async init() {
        let root = $("#contentHolder");

        for (let editor of values(editors)) {
            editor.destroy();
        }
        holders = {};
        root.empty();

        for (let type of values(ItemTypesMap)) {
            let typeSchema = schemaForType(type);
            let holder = $(`<div id="editor_holder" data-theme="html"></div>`);
            root.append(holder);
            holders[type] = holder;
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
        holders[type].hide();
    }

    public static show(type: ItemType) {
        EditorTab.close(current);
        current = type;

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
        editors[current].setValue(curData);
    }

    public static getData() {
        let data = editors[current].getValue();
        return swr(clone(data), true);
    }
}