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
let eventLocked = false;
let to: any;
let folderInput: JQuery<HTMLInputElement>;
let saveButton: JQuery<HTMLInputElement>;
let searchInput: JQuery<HTMLInputElement>;

export class TreeTab {
    private static files: Files;
    private static database: Database;

    public static init(files: Files, database: Database) {
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
        saveButton.prop("disabled",true);
        searchInput.prop("disabled",true);
        treeBase = $(`<div></div>`);
        holder.append(treeBase);
        holder.on("change", async (event) => {
            if (eventLocked) return;
            eventLocked = true;
            let _files = Array.from(folderInput[0].files as FileList);
            await TreeTab.files.init(_files);
            await TreeTab.redrawTree();
            eventLocked = false;
        });
        saveButton.on('click', async () => {
            if (eventLocked) return;
            eventLocked = true;
            await TreeTab.save();
            await TreeTab.files.save();
            eventLocked = false;
        });
        searchInput.on('keyup', () => {
            if (!tree) return;
            if (to) clearTimeout(to);
            to = setTimeout(function () {
                let v = searchInput.val() as string;
                tree.search(v);
            }, 250);
        });
    }

    public static async redrawTree() {
        if (tree) tree.destroy(false);
        saveButton.prop("disabled",true);
        searchInput.prop("disabled",true);
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
            search:{
                show_only_matches:true,
                show_only_matches_children:true
            },
            plugins: ["search", "types", "wholerow"]
        } as JSTreeStaticDefaults).jstree(true);
        TreeTab.createEvents();
        saveButton.prop("disabled",false);
        searchInput.prop("disabled",false);
    }

    public static async save() {
        if (!curPath.length) return;
        let curData: DatabaseFile = EditorTab.getData();

        if (!equal(curData, prevData, {strict: true})) {
            if (!await TreeTab.database.tryApplyChanges(prevData, curData)) {
                return;
            }
            let curDataStr = JSON.stringify(curData);
            await TreeTab.files.writeFile(curPath, curDataStr);
        }
    }

    public static createEvents() {
        treeBase.on('changed.jstree', async function (e, data) {
            if (eventLocked) return;
            if (data?.node?.type !== "json") return;
            eventLocked = true;
            await TreeTab.save();
            curPath = await TreeTab.files.getPathFromSelection(data.selected);
            let selected = await TreeTab.files.readFile(curPath);
            prevData = JSON.parse(selected);
            EditorTab.feedData(prevData);
            eventLocked = false;
        });
    }
}