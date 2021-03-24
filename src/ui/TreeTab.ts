import * as $ from "jquery";
import {Files} from "../files";
import {EditorTab} from "./EditorTab";
import {DatabaseFile} from "../types";
import equal = require("deep-equal");
import {Database} from "../database";
require("jstree");

let treeBase:JQuery
let tree:JSTree;
let curPath="";
let prevData:DatabaseFile;
let eventLocked = false;
export class TreeTab {
    private static files:Files;
    private static database:Database;

    public static init(files: Files,database:Database) {
        TreeTab.files = files;
        TreeTab.database = database;
        let holder = $("#treeHolder");
        let folderInput = $(`<input type="file" webkitdirectory multiple>`) as JQuery<HTMLInputElement>;
        let saveButton = $(`<input type="button" value="Save database">`) as JQuery<HTMLInputElement>;
        holder.append(folderInput);
        holder.append(saveButton);
        treeBase = $(`<div></div>`);
        holder.append(treeBase);
        holder.on("change", async (event) => {
            if(eventLocked)return;
            eventLocked=true;
            let _files = Array.from(folderInput[0].files as FileList);
            await TreeTab.files.init(_files);
            await TreeTab.redrawTree();
            eventLocked=false;
        });
        saveButton.on('click',async ()=>{
            if(eventLocked)return;
            eventLocked=true;
            await TreeTab.save();
            await TreeTab.files.save();
            eventLocked=false;
        });
    }

    public static async redrawTree(){
        if(tree)tree.destroy(false);
        tree=treeBase.jstree({
            core:{
                data:await TreeTab.files.treeData(),
                error: console.error,
                multiple:false,
            },
            types:{
                json:{
                    icon:"assets/json.png",
                    max_children:0
                }
            },
            plugins:["search","types","wholerow"]
        } as JSTreeStaticDefaults).jstree(true);
        TreeTab.createEvents();
    }

    public static async save(){
        if(!curPath.length)return;
        let curData:DatabaseFile = EditorTab.getData();

        if(!equal(curData,prevData,{strict:true})) {
            if(!await TreeTab.database.tryApplyChanges(prevData,curData)){
                return;
            }
            let curDataStr = JSON.stringify(curData);
            await TreeTab.files.writeFile(curPath, curDataStr);
        }
    }

    public static createEvents(){
        treeBase.on('changed.jstree',async function (e,data){
            if(eventLocked)return;
            if(data?.node?.type!=="json")return;
            eventLocked=true;
            await TreeTab.save();
            curPath=await TreeTab.files.getPathFromSelection(data.selected);
            let selected = await TreeTab.files.readFile(curPath);
            prevData=JSON.parse(selected);
            EditorTab.feedData(prevData);
            eventLocked=false;
        });
    }
}