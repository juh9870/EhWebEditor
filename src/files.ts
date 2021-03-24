import {FileEntry} from "./types";

export abstract class Files {
    public abstract init(files:File[]):Promise<void>;
    public abstract readFile(path:string):Promise<string>;
    public abstract writeFile(path: string,data:string):Promise<any>;
    public abstract treeData():Promise<object>;
    public abstract getPathFromSelection(selection:string):Promise<string>;
    public abstract save():Promise<void>;
    public abstract allFiles():Promise<FileEntry[]>
}