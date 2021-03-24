"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const $ = require("jquery");
const EditorTab_1 = require("./ui/EditorTab");
const TreeTab_1 = require("./ui/TreeTab");
const zipFiles_1 = require("./zipFiles");
const database_1 = require("./database");
$(async () => {
    let db = new database_1.Database();
    await EditorTab_1.EditorTab.init();
    let zf = new zipFiles_1.ZipFiles(db);
    await TreeTab_1.TreeTab.init(zf, db);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDRCQUE0QjtBQUM1Qiw4Q0FBeUM7QUFDekMsMENBQXFDO0FBRXJDLHlDQUFvQztBQUNwQyx5Q0FBb0M7QUFFcEMsQ0FBQyxDQUFDLEtBQUssSUFBRyxFQUFFO0lBQ1IsSUFBSSxFQUFFLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7SUFDeEIsTUFBTSxxQkFBUyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLElBQUksRUFBRSxHQUFFLElBQUksbUJBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUN4QixNQUFNLGlCQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQztBQUM5QixDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xyXG5pbXBvcnQge0VkaXRvclRhYn0gZnJvbSBcIi4vdWkvRWRpdG9yVGFiXCI7XHJcbmltcG9ydCB7VHJlZVRhYn0gZnJvbSBcIi4vdWkvVHJlZVRhYlwiO1xyXG5pbXBvcnQge0ZpbGVzfSBmcm9tIFwiLi9maWxlc1wiO1xyXG5pbXBvcnQge1ppcEZpbGVzfSBmcm9tIFwiLi96aXBGaWxlc1wiO1xyXG5pbXBvcnQge0RhdGFiYXNlfSBmcm9tIFwiLi9kYXRhYmFzZVwiO1xyXG5cclxuJChhc3luYyAoKT0+e1xyXG4gICAgbGV0IGRiID0gbmV3IERhdGFiYXNlKCk7XHJcbiAgICBhd2FpdCBFZGl0b3JUYWIuaW5pdCgpO1xyXG4gICAgbGV0IHpmID1uZXcgWmlwRmlsZXMoZGIpXHJcbiAgICBhd2FpdCBUcmVlVGFiLmluaXQoemYsZGIpO1xyXG59KTsiXX0=