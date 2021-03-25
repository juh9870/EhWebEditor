import {ItemType, StringMap} from "../types";

let map: StringMap<TypeMappingEntry>;

export class TypeMappings {
    public static getMappings(): StringMap<TypeMappingEntry> {
        return map ?? (map = require("./typesMaps.json") as StringMap<TypeMappingEntry>);
    }

    public static resolveConflict(target: any, entry: TypeMappingComplexEntry): ItemType {
        let targ = "";
        //LootContent
        if ("MinAmount" in target || "MaxAmount" in target) {
            targ = "LootContent";
        } else if (target.ItemType === ItemType.Technology) {
            targ = "Technology";
        } else {
            targ = "Requirement";
        }

        let val = entry[targ];
        let sw = Number(target[val[0].caseVar] || 0);
        let node = val.find(e => e.cases.includes(sw)) as TypeMappingComplexEntryValue;
        return node.type;
    }

    public static fieldType(targ:any,fieldName:string){
        let map = TypeMappings.getMappings();
        let e = map[fieldName] ?? -1;
        if(typeof e==="number")return e;
        return TypeMappings.resolveConflict(targ,e);
    }
}

export type TypeMappingEntry = number | TypeMappingComplexEntry;
export type TypeMappingComplexEntry = StringMap<TypeMappingComplexEntryValue[]>;
export type TypeMappingComplexEntryValue = {
    type: ItemType,
    cases: number[],
    caseVar: string,
}