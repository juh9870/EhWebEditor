import * as $ from "jquery";
import {EditorTab} from "./ui/EditorTab";
import {TreeTab} from "./ui/TreeTab";
import {Files} from "./files";
import {ZipFiles} from "./zipFiles";
import {Database} from "./database";

$(async ()=>{
    let db = new Database();
    await EditorTab.init();
    let zf =new ZipFiles(db)
    await TreeTab.init(zf,db);
});