import {Files} from "./files";
import {FS, ZipDirectoryEntry, ZipEntry, ZipFileEntry} from "@zip.js/zip.js";
import * as download from "downloadjs";
import {FileEntry} from "./types";
import {Database} from "./database";

const zip = require("../lib/zip-fs-full.min");
declare global {
    interface File {
        readonly webkitRelativePath: string;
    }
}

export class ZipFiles extends Files {
    private fs!: FS & { entries: ZipEntry[] };
    private hide: Set<number> = new Set<number>();
    private unchangedDir!: ZipDirectoryEntry;
    private database: Database;


    constructor(database: Database) {
        super();
        this.database = database;
    }

    private static isZipDirectoryEntry(object: ZipEntry): object is ZipDirectoryEntry {
        return object && 'getChildByName' in object;
    }

    private static isZipFileEntry(object: ZipEntry): object is ZipFileEntry {
        return object && 'getText' in object;
    }

    async init(files: File[]) {
        this.fs = new zip.fs.FS();
        let unName = "__UNCHANGED#" + (Math.random() * 0xFFFFFFFFFFFFF).toString(16);
        await Promise.all(files.map(async file => {
            if (!file.webkitRelativePath) return;
            if (!file.webkitRelativePath.toLowerCase().endsWith(".json")) return;
            let text = await file.text();
            if (!await this.database.tryAddFile(file.webkitRelativePath, text)) return;
            await this.writeFile(unName + "/" + file.webkitRelativePath, text);
        }));

        this.unchangedDir = this.getDirByPath(unName);

        (window as any).fs = this.fs
        this.hide.add(this.unchangedDir.id);
    }

    async readFile(path: string): Promise<string> {
        let data = await this.getFileByPath(path);
        if (data == null) throw new Error("File not found: " + path);
        return data.getText();
    }

    async writeFile(path: string, data: string): Promise<ZipEntry> {
        let _p = path.split(/[/\\]/);
        while (_p[0].length === 0) _p.shift();
        let filename = _p.pop() as string;
        let dir = this.getDirByPath(_p);
        let c = dir.getChildByName(filename);
        if (ZipFiles.isZipFileEntry(c)) {
            c.replaceText(data);
        } else {
            c = dir.addText(filename, data);
        }

        if (this.unchangedDir && _p[0] == this.unchangedDir.name) {
            _p[0] = "";
            this.hide.add((await this.writeFile(_p.join("/") + "/" + filename, data)).id);
        }
        return c;
    }

    async treeData(): Promise<object> {
        let files = [];
        for (let child of this.fs.entries) {
            if (this.hide.has(child.id)) continue;
            if (!child.parent) continue;
            let el = ZipFiles.isZipFileEntry(child);
            files.push({
                id: child.id,
                parent: child.parent.name !== this.unchangedDir.name ? child.parent.id : "#",
                text: child.name,
                state: {
                    opened: !child.parent
                },
                type: ZipFiles.isZipFileEntry(child) ? "json" : undefined
            });
        }
        return files;
    }

    async getPathFromSelection(selection: string): Promise<string> {
        return this.entryToPath(this.fs.getById(Number(selection))).join("/");
    }

    async save(): Promise<void> {
        let dir = this.fs.children[1];
        if (!ZipFiles.isZipDirectoryEntry(dir)) {
            alert("No changes to save");
            return;
        }
        let blob = await dir.exportBlob();
        await download(blob, dir.name + ".zip", "application/zip");
    }

    async allFiles(): Promise<FileEntry[]> {
        let ret: FileEntry[] = [];
        for (let entry of this.fs.entries) {
            if (this.hide.has(entry.id)) continue;
            if (!ZipFiles.isZipFileEntry(entry)) continue;
            let path = (await this.getPathFromSelection(entry.id.toString())).replace(this.unchangedDir.name, "").replace(/\/\//g, "");
            ret.push({path: path, value: await entry.getText()});
        }
        return ret;
    }

    private getDirByPath(path: string | string[]): ZipDirectoryEntry {
        if (typeof path === "string") path = path.split(/[/\\]/);
        let cur: ZipDirectoryEntry = this.fs.root;
        for (let i = 0; i < path.length; i++) {
            if (!path[i] || path[i].length === 0) continue;
            let c = cur.getChildByName(path[i]);
            if (ZipFiles.isZipDirectoryEntry(c)) {
                cur = c;
            } else {
                cur = cur.addDirectory(path[i]);
            }
        }
        return cur;
    }

    private entryToPath(node: ZipEntry): string[] {
        let arr: string[] = [];
        if (node.parent) {
            arr = this.entryToPath(node.parent);
        }
        arr.push(node.name);
        return arr;
    }

    private getFileByPath(path: string | string[]): ZipFileEntry | null {
        if (typeof path === "string") path = path.split(/[/\\]/);
        path = [...path];
        let filename = path.pop() as string;
        let dir = this.getDirByPath(path);
        let c = dir.getChildByName(filename);
        if (ZipFiles.isZipFileEntry(c)) return c;
        return null;
    }
}