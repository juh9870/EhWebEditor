import * as $ from "jquery";
import {Files} from "../files";
import {EditorTab} from "./EditorTab";
import {DatabaseFile} from "../types";
import {Database} from "../database";
import equal = require("deep-equal");

require("jstree");

let treeBase: JQuery
let tree: JSTree;
let curPath = "";
let prevData: DatabaseFile;
let eventLocked: boolean;
let to: any;
let folderInput: JQuery<HTMLInputElement>;
let saveButton: JQuery<HTMLInputElement>;
let searchInput: JQuery<HTMLInputElement>;
let ready = false;
let cover: JQuery<HTMLElement>;

let lockEvents = (text: string) => {
    cover.find("div")[0].textContent=text;
    if (eventLocked) {
        return;
    }
    eventLocked = true;
    cover.show(0.5);
}

let unlockEvents = () => {
    if (!eventLocked) return;
    eventLocked = false;
    cover.hide(0.5);
}

export class TreeTab {
    private static files: Files;
    private static database: Database;

    public static init(files: Files, database: Database) {
        cover = $(`<div class="cover"><div></div><div class="loader"></div></div>`);
        $("body").append(cover);
        lockEvents("Editor is starting");
        TreeTab.files = files;
        TreeTab.database = database;
        let holder = $("#treeHolder");
        let r1 = $("<div class='r1'></div>");
        let r2 = $("<div class='r2'></div>");
        holder.append(r1);
        holder.append(r2);
        folderInput = $(`<input type="file" webkitdirectory multiple>`);
        saveButton = $(`<input type="button" value="Save database">`);
        let searchLabel = $(`<label for="tree-search">Search: </label>`)
        searchInput = $(`<input id="tree-search" type="search">`);
        r1.append(folderInput);
        r1.append(saveButton);
        r2.append(searchLabel);
        r2.append(searchInput);
        saveButton.prop("disabled", true);
        searchInput.prop("disabled", true);
        treeBase = $(`<div></div>`);
        holder.append(treeBase);
        folderInput.on("change", async (event) => {
            if (eventLocked) return;
            lockEvents("Loading database");
            if (ready && prompt("Save before changing database?")) {
                await TreeTab.saveDatabase();
                lockEvents("Loading database");
            }
            await TreeTab.close();
            let _files = Array.from(folderInput[0].files as FileList);
            await TreeTab.files.init(_files);
            await TreeTab.redrawTree();
            ready = true;
            unlockEvents();
        });
        saveButton.on('click', async () => {
            if (eventLocked) return;
            lockEvents("Saving database (this might take some time on larger database)");
            await TreeTab.saveDatabase();
            unlockEvents();
        });
        searchInput.on('keyup', () => {
            if (!tree) return;
            if (to) clearTimeout(to);
            to = setTimeout(function () {
                let v = searchInput.val() as string;
                tree.search(v);
            }, 250);
        });
        unlockEvents();
    }

    public static async saveDatabase() {
        lockEvents("Archiving database (this might take some time on larger database)");
        await TreeTab.close();

        lockEvents("Preparing download (if this step takes too long, something might b wrong with your device)");
        await TreeTab.files.save();
    }

    public static async redrawTree() {
        if (tree) tree.destroy(false);
        saveButton.prop("disabled", true);
        searchInput.prop("disabled", true);
        tree = treeBase.jstree({
            core: {
                data: await TreeTab.files.treeData(),
                error: console.error,
                multiple: false,
            },
            types: {
                json: {
                    icon: "assets/json.png",
                    max_children: 0
                }
            },
            search: {
                show_only_matches: true,
                show_only_matches_children: true
            },
            plugins: ["search", "types", "wholerow"]
        } as JSTreeStaticDefaults).jstree(true);
        TreeTab.createEvents();
        saveButton.prop("disabled", false);
        searchInput.prop("disabled", false);
    }

    public static async save() {
        try {
            if (!curPath.length) return;
            let curData: DatabaseFile = await EditorTab.getData();

            if (!equal(curData, prevData, {strict: true})) {
                if (!await TreeTab.database.tryApplyChanges(prevData, curData, this.files)) {
                    return;
                }
                let curDataStr = JSON.stringify(curData);
                await TreeTab.files.writeFile(curPath, curDataStr);
            }
        } catch (e) {
            return;
        }
    }

    public static async close() {
        await TreeTab.save();
        EditorTab.closeAll();
    }

    public static createEvents() {
        treeBase.on('changed.jstree', async function (e, data) {
            if (eventLocked) return;
            if (data?.node?.type !== "json") return;
            lockEvents("Saving current file.");
            await TreeTab.save();
            curPath = await TreeTab.files.getPathFromSelection(data.selected);
            let selected = await TreeTab.files.readFile(curPath);
            prevData = JSON.parse(selected);
            lockEvents("Opening new file.");
            EditorTab.feedData(prevData);
            unlockEvents();
        });
    }
}