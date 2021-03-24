import {ItemType, ItemTypesMap, ItemTypesMapRev} from "../types";

export function schemaForType(type:ItemType){
    let base = {/*!!!SCHEMA!!!*/} as any;
    base.$ref=`#/definitions/itype_${type}`;
    base.title=ItemTypesMapRev[type];
    return base;
}