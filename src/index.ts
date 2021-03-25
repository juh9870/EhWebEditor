import * as $ from "jquery";
import {EditorTab} from "./ui/EditorTab";
import {TreeTab} from "./ui/TreeTab";
import {ZipFiles} from "./zipFiles";
import {Database} from "./database";


(global as any).jQuery = (global as any).$ = $;

$(async ()=>{
    let db = new Database();
    await EditorTab.init(db);
    let zf =new ZipFiles(db)
    await TreeTab.init(zf,db);
});