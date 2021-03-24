"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemTypesMapRev = exports.ItemTypesMap = exports.ItemType = void 0;
var ItemType;
(function (ItemType) {
    ItemType[ItemType["Undefined"] = 0] = "Undefined";
    ItemType[ItemType["Component"] = 1] = "Component";
    ItemType[ItemType["Device"] = 2] = "Device";
    ItemType[ItemType["Weapon"] = 3] = "Weapon";
    ItemType[ItemType["AmmunitionObsolete"] = 4] = "AmmunitionObsolete";
    ItemType[ItemType["DroneBay"] = 5] = "DroneBay";
    ItemType[ItemType["Ship"] = 6] = "Ship";
    ItemType[ItemType["Satellite"] = 7] = "Satellite";
    ItemType[ItemType["ShipBuild"] = 8] = "ShipBuild";
    ItemType[ItemType["SatelliteBuild"] = 9] = "SatelliteBuild";
    ItemType[ItemType["Technology"] = 10] = "Technology";
    ItemType[ItemType["ComponentStats"] = 11] = "ComponentStats";
    ItemType[ItemType["ComponentMod"] = 12] = "ComponentMod";
    ItemType[ItemType["Skill"] = 13] = "Skill";
    ItemType[ItemType["Faction"] = 14] = "Faction";
    ItemType[ItemType["Quest"] = 15] = "Quest";
    ItemType[ItemType["Loot"] = 16] = "Loot";
    ItemType[ItemType["Fleet"] = 18] = "Fleet";
    ItemType[ItemType["Character"] = 19] = "Character";
    ItemType[ItemType["QuestItem"] = 20] = "QuestItem";
    ItemType[ItemType["Ammunition"] = 25] = "Ammunition";
    ItemType[ItemType["VisualEffect"] = 26] = "VisualEffect";
    ItemType[ItemType["BulletPrefab"] = 27] = "BulletPrefab";
    ItemType[ItemType["ShipSettings"] = 100] = "ShipSettings";
    ItemType[ItemType["GalaxySettings"] = 101] = "GalaxySettings";
    ItemType[ItemType["DatabaseSettings"] = 102] = "DatabaseSettings";
    ItemType[ItemType["ExplorationSettings"] = 103] = "ExplorationSettings";
})(ItemType = exports.ItemType || (exports.ItemType = {}));
;
exports.ItemTypesMap = Object.freeze({
    "Undefined": 0,
    "Component": 1,
    "Device": 2,
    "Weapon": 3,
    "AmmunitionObsolete": 4,
    "DroneBay": 5,
    "Ship": 6,
    "Satellite": 7,
    "ShipBuild": 8,
    "SatelliteBuild": 9,
    "Technology": 10,
    "ComponentStats": 11,
    "ComponentMod": 12,
    "Skill": 13,
    "Faction": 14,
    "Quest": 15,
    "Loot": 16,
    "Fleet": 18,
    "Character": 19,
    "QuestItem": 20,
    "Ammunition": 25,
    "VisualEffect": 26,
    "BulletPrefab": 27,
    "ShipSettings": 100,
    "GalaxySettings": 101,
    "DatabaseSettings": 102,
    "ExplorationSettings": 103,
});
exports.ItemTypesMapRev = Object.freeze({
    0: "Undefined",
    1: "Component",
    2: "Device",
    3: "Weapon",
    4: "AmmunitionObsolete",
    5: "DroneBay",
    6: "Ship",
    7: "Satellite",
    8: "ShipBuild",
    9: "SatelliteBuild",
    10: "Technology",
    11: "ComponentStats",
    12: "ComponentMod",
    13: "Skill",
    14: "Faction",
    15: "Quest",
    16: "Loot",
    18: "Fleet",
    19: "Character",
    20: "QuestItem",
    25: "Ammunition",
    26: "VisualEffect",
    27: "BulletPrefab",
    100: "ShipSettings",
    101: "GalaxySettings",
    102: "DatabaseSettings",
    103: "ExplorationSettings",
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxJQUFZLFFBNEJYO0FBNUJELFdBQVksUUFBUTtJQUNoQixpREFBZSxDQUFBO0lBQ2YsaURBQWUsQ0FBQTtJQUNmLDJDQUFZLENBQUE7SUFDWiwyQ0FBWSxDQUFBO0lBQ1osbUVBQXdCLENBQUE7SUFDeEIsK0NBQWMsQ0FBQTtJQUNkLHVDQUFVLENBQUE7SUFDVixpREFBZSxDQUFBO0lBQ2YsaURBQWUsQ0FBQTtJQUNmLDJEQUFvQixDQUFBO0lBQ3BCLG9EQUFpQixDQUFBO0lBQ2pCLDREQUFxQixDQUFBO0lBQ3JCLHdEQUFtQixDQUFBO0lBQ25CLDBDQUFZLENBQUE7SUFDWiw4Q0FBYyxDQUFBO0lBQ2QsMENBQVksQ0FBQTtJQUNaLHdDQUFXLENBQUE7SUFDWCwwQ0FBWSxDQUFBO0lBQ1osa0RBQWdCLENBQUE7SUFDaEIsa0RBQWdCLENBQUE7SUFDaEIsb0RBQWlCLENBQUE7SUFDakIsd0RBQW1CLENBQUE7SUFDbkIsd0RBQW1CLENBQUE7SUFDbkIseURBQW9CLENBQUE7SUFDcEIsNkRBQXNCLENBQUE7SUFDdEIsaUVBQXdCLENBQUE7SUFDeEIsdUVBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQTVCVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQTRCbkI7QUFBQSxDQUFDO0FBRVcsUUFBQSxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN0QyxXQUFXLEVBQUUsQ0FBQztJQUNkLFdBQVcsRUFBRSxDQUFDO0lBQ2QsUUFBUSxFQUFFLENBQUM7SUFDWCxRQUFRLEVBQUUsQ0FBQztJQUNYLG9CQUFvQixFQUFFLENBQUM7SUFDdkIsVUFBVSxFQUFFLENBQUM7SUFDYixNQUFNLEVBQUUsQ0FBQztJQUNULFdBQVcsRUFBRSxDQUFDO0lBQ2QsV0FBVyxFQUFFLENBQUM7SUFDZCxnQkFBZ0IsRUFBRSxDQUFDO0lBQ25CLFlBQVksRUFBRSxFQUFFO0lBQ2hCLGdCQUFnQixFQUFFLEVBQUU7SUFDcEIsY0FBYyxFQUFFLEVBQUU7SUFDbEIsT0FBTyxFQUFFLEVBQUU7SUFDWCxTQUFTLEVBQUUsRUFBRTtJQUNiLE9BQU8sRUFBRSxFQUFFO0lBQ1gsTUFBTSxFQUFFLEVBQUU7SUFDVixPQUFPLEVBQUUsRUFBRTtJQUNYLFdBQVcsRUFBRSxFQUFFO0lBQ2YsV0FBVyxFQUFFLEVBQUU7SUFDZixZQUFZLEVBQUUsRUFBRTtJQUNoQixjQUFjLEVBQUUsRUFBRTtJQUNsQixjQUFjLEVBQUUsRUFBRTtJQUNsQixjQUFjLEVBQUUsR0FBRztJQUNuQixnQkFBZ0IsRUFBRSxHQUFHO0lBQ3JCLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIscUJBQXFCLEVBQUUsR0FBRztDQUNSLENBQUMsQ0FBQztBQUVYLFFBQUEsZUFBZSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7SUFDekMsQ0FBQyxFQUFFLFdBQVc7SUFDZCxDQUFDLEVBQUUsV0FBVztJQUNkLENBQUMsRUFBRSxRQUFRO0lBQ1gsQ0FBQyxFQUFFLFFBQVE7SUFDWCxDQUFDLEVBQUUsb0JBQW9CO0lBQ3ZCLENBQUMsRUFBRSxVQUFVO0lBQ2IsQ0FBQyxFQUFFLE1BQU07SUFDVCxDQUFDLEVBQUUsV0FBVztJQUNkLENBQUMsRUFBRSxXQUFXO0lBQ2QsQ0FBQyxFQUFFLGdCQUFnQjtJQUNuQixFQUFFLEVBQUUsWUFBWTtJQUNoQixFQUFFLEVBQUUsZ0JBQWdCO0lBQ3BCLEVBQUUsRUFBRSxjQUFjO0lBQ2xCLEVBQUUsRUFBRSxPQUFPO0lBQ1gsRUFBRSxFQUFFLFNBQVM7SUFDYixFQUFFLEVBQUUsT0FBTztJQUNYLEVBQUUsRUFBRSxNQUFNO0lBQ1YsRUFBRSxFQUFFLE9BQU87SUFDWCxFQUFFLEVBQUUsV0FBVztJQUNmLEVBQUUsRUFBRSxXQUFXO0lBQ2YsRUFBRSxFQUFFLFlBQVk7SUFDaEIsRUFBRSxFQUFFLGNBQWM7SUFDbEIsRUFBRSxFQUFFLGNBQWM7SUFDbEIsR0FBRyxFQUFFLGNBQWM7SUFDbkIsR0FBRyxFQUFFLGdCQUFnQjtJQUNyQixHQUFHLEVBQUUsa0JBQWtCO0lBQ3ZCLEdBQUcsRUFBRSxxQkFBcUI7Q0FDUixDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdHlwZSBTdHJpbmdNYXA8VD4gPSB7IFtrZXk6IHN0cmluZ106IFQgfTtcclxuZXhwb3J0IHR5cGUgTnVtYmVyTWFwPFQ+ID0geyBba2V5OiBudW1iZXJdOiBUIH07XHJcbmV4cG9ydCB0eXBlIEZpbGVFbnRyeSA9IHtwYXRoOnN0cmluZyx2YWx1ZTpzdHJpbmd9O1xyXG5cclxuZXhwb3J0IGVudW0gSXRlbVR5cGUge1xyXG4gICAgXCJVbmRlZmluZWRcIiA9IDAsXHJcbiAgICBcIkNvbXBvbmVudFwiID0gMSxcclxuICAgIFwiRGV2aWNlXCIgPSAyLFxyXG4gICAgXCJXZWFwb25cIiA9IDMsXHJcbiAgICBcIkFtbXVuaXRpb25PYnNvbGV0ZVwiID0gNCxcclxuICAgIFwiRHJvbmVCYXlcIiA9IDUsXHJcbiAgICBcIlNoaXBcIiA9IDYsXHJcbiAgICBcIlNhdGVsbGl0ZVwiID0gNyxcclxuICAgIFwiU2hpcEJ1aWxkXCIgPSA4LFxyXG4gICAgXCJTYXRlbGxpdGVCdWlsZFwiID0gOSxcclxuICAgIFwiVGVjaG5vbG9neVwiID0gMTAsXHJcbiAgICBcIkNvbXBvbmVudFN0YXRzXCIgPSAxMSxcclxuICAgIFwiQ29tcG9uZW50TW9kXCIgPSAxMixcclxuICAgIFwiU2tpbGxcIiA9IDEzLFxyXG4gICAgXCJGYWN0aW9uXCIgPSAxNCxcclxuICAgIFwiUXVlc3RcIiA9IDE1LFxyXG4gICAgXCJMb290XCIgPSAxNixcclxuICAgIFwiRmxlZXRcIiA9IDE4LFxyXG4gICAgXCJDaGFyYWN0ZXJcIiA9IDE5LFxyXG4gICAgXCJRdWVzdEl0ZW1cIiA9IDIwLFxyXG4gICAgXCJBbW11bml0aW9uXCIgPSAyNSxcclxuICAgIFwiVmlzdWFsRWZmZWN0XCIgPSAyNixcclxuICAgIFwiQnVsbGV0UHJlZmFiXCIgPSAyNyxcclxuICAgIFwiU2hpcFNldHRpbmdzXCIgPSAxMDAsXHJcbiAgICBcIkdhbGF4eVNldHRpbmdzXCIgPSAxMDEsXHJcbiAgICBcIkRhdGFiYXNlU2V0dGluZ3NcIiA9IDEwMixcclxuICAgIFwiRXhwbG9yYXRpb25TZXR0aW5nc1wiID0gMTAzLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEl0ZW1UeXBlc01hcCA9IE9iamVjdC5mcmVlemUoe1xyXG4gICAgXCJVbmRlZmluZWRcIjogMCxcclxuICAgIFwiQ29tcG9uZW50XCI6IDEsXHJcbiAgICBcIkRldmljZVwiOiAyLFxyXG4gICAgXCJXZWFwb25cIjogMyxcclxuICAgIFwiQW1tdW5pdGlvbk9ic29sZXRlXCI6IDQsXHJcbiAgICBcIkRyb25lQmF5XCI6IDUsXHJcbiAgICBcIlNoaXBcIjogNixcclxuICAgIFwiU2F0ZWxsaXRlXCI6IDcsXHJcbiAgICBcIlNoaXBCdWlsZFwiOiA4LFxyXG4gICAgXCJTYXRlbGxpdGVCdWlsZFwiOiA5LFxyXG4gICAgXCJUZWNobm9sb2d5XCI6IDEwLFxyXG4gICAgXCJDb21wb25lbnRTdGF0c1wiOiAxMSxcclxuICAgIFwiQ29tcG9uZW50TW9kXCI6IDEyLFxyXG4gICAgXCJTa2lsbFwiOiAxMyxcclxuICAgIFwiRmFjdGlvblwiOiAxNCxcclxuICAgIFwiUXVlc3RcIjogMTUsXHJcbiAgICBcIkxvb3RcIjogMTYsXHJcbiAgICBcIkZsZWV0XCI6IDE4LFxyXG4gICAgXCJDaGFyYWN0ZXJcIjogMTksXHJcbiAgICBcIlF1ZXN0SXRlbVwiOiAyMCxcclxuICAgIFwiQW1tdW5pdGlvblwiOiAyNSxcclxuICAgIFwiVmlzdWFsRWZmZWN0XCI6IDI2LFxyXG4gICAgXCJCdWxsZXRQcmVmYWJcIjogMjcsXHJcbiAgICBcIlNoaXBTZXR0aW5nc1wiOiAxMDAsXHJcbiAgICBcIkdhbGF4eVNldHRpbmdzXCI6IDEwMSxcclxuICAgIFwiRGF0YWJhc2VTZXR0aW5nc1wiOiAxMDIsXHJcbiAgICBcIkV4cGxvcmF0aW9uU2V0dGluZ3NcIjogMTAzLFxyXG59IGFzIFN0cmluZ01hcDxudW1iZXI+KTtcclxuXHJcbmV4cG9ydCBjb25zdCBJdGVtVHlwZXNNYXBSZXYgPSBPYmplY3QuZnJlZXplKHtcclxuICAgIDA6IFwiVW5kZWZpbmVkXCIsXHJcbiAgICAxOiBcIkNvbXBvbmVudFwiLFxyXG4gICAgMjogXCJEZXZpY2VcIixcclxuICAgIDM6IFwiV2VhcG9uXCIsXHJcbiAgICA0OiBcIkFtbXVuaXRpb25PYnNvbGV0ZVwiLFxyXG4gICAgNTogXCJEcm9uZUJheVwiLFxyXG4gICAgNjogXCJTaGlwXCIsXHJcbiAgICA3OiBcIlNhdGVsbGl0ZVwiLFxyXG4gICAgODogXCJTaGlwQnVpbGRcIixcclxuICAgIDk6IFwiU2F0ZWxsaXRlQnVpbGRcIixcclxuICAgIDEwOiBcIlRlY2hub2xvZ3lcIixcclxuICAgIDExOiBcIkNvbXBvbmVudFN0YXRzXCIsXHJcbiAgICAxMjogXCJDb21wb25lbnRNb2RcIixcclxuICAgIDEzOiBcIlNraWxsXCIsXHJcbiAgICAxNDogXCJGYWN0aW9uXCIsXHJcbiAgICAxNTogXCJRdWVzdFwiLFxyXG4gICAgMTY6IFwiTG9vdFwiLFxyXG4gICAgMTg6IFwiRmxlZXRcIixcclxuICAgIDE5OiBcIkNoYXJhY3RlclwiLFxyXG4gICAgMjA6IFwiUXVlc3RJdGVtXCIsXHJcbiAgICAyNTogXCJBbW11bml0aW9uXCIsXHJcbiAgICAyNjogXCJWaXN1YWxFZmZlY3RcIixcclxuICAgIDI3OiBcIkJ1bGxldFByZWZhYlwiLFxyXG4gICAgMTAwOiBcIlNoaXBTZXR0aW5nc1wiLFxyXG4gICAgMTAxOiBcIkdhbGF4eVNldHRpbmdzXCIsXHJcbiAgICAxMDI6IFwiRGF0YWJhc2VTZXR0aW5nc1wiLFxyXG4gICAgMTAzOiBcIkV4cGxvcmF0aW9uU2V0dGluZ3NcIixcclxufSBhcyBOdW1iZXJNYXA8c3RyaW5nPik7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhdGFiYXNlRmlsZSB7XHJcbiAgICBJZDogbnVtYmVyO1xyXG4gICAgSXRlbVR5cGU6IEl0ZW1UeXBlO1xyXG59Il19