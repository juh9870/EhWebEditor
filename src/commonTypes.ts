declare class JSONEditor {
    constructor(...args:any[]);
    public getValue(): object;

    public setValue(data: object):void;

    public enable(): void;

    public disable(): void;
    public destroy(): void;

    public editors:any
    public element:HTMLElement;

    public on:(event:string,cb:()=>unknown)=>unknown;

    public static defaults: any;
}