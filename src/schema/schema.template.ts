import {ItemType, ItemTypesMapRev} from "../types";
import {Database} from "../database";

let trav = (obj: any,d:Database) => {
    for (let key of Object.getOwnPropertyNames(obj)) {
        let val = obj[key];
        if (val && typeof val === "object" || Array.isArray(val)) {
            trav(val,d);
        }

        if(typeof val==="string"){
            if(val.startsWith("$enumSource_")){
                obj[key]=d.getIds(Number(val.replace("$enumSource_","")));
                obj[key].unshift(Database.deleteNumber);
            }
        }
    }
    return obj;
}
export function schemaForType$template$(type:ItemType,d:Database){
    let base = {/*!!!SCHEMA!!!*/} as any;
    trav(base,d);
    base.$ref=`#/definitions/itype_${type}`;
    base.title=ItemTypesMapRev[type];
    return base;
}