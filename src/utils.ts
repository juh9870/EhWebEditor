import * as _clone from "rfdc";
export const clone = _clone({
    proto:true,
    circles:true
})
export const keys = <T>(o:T) : (keyof T)[] => Object.getOwnPropertyNames(o) as any;
export const values = <T>(o: T) : T[keyof T][] => keys(o).map(e => o[e]) as any;
