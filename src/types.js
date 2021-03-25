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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxJQUFZLFFBNEJYO0FBNUJELFdBQVksUUFBUTtJQUNoQixpREFBZSxDQUFBO0lBQ2YsaURBQWUsQ0FBQTtJQUNmLDJDQUFZLENBQUE7SUFDWiwyQ0FBWSxDQUFBO0lBQ1osbUVBQXdCLENBQUE7SUFDeEIsK0NBQWMsQ0FBQTtJQUNkLHVDQUFVLENBQUE7SUFDVixpREFBZSxDQUFBO0lBQ2YsaURBQWUsQ0FBQTtJQUNmLDJEQUFvQixDQUFBO0lBQ3BCLG9EQUFpQixDQUFBO0lBQ2pCLDREQUFxQixDQUFBO0lBQ3JCLHdEQUFtQixDQUFBO0lBQ25CLDBDQUFZLENBQUE7SUFDWiw4Q0FBYyxDQUFBO0lBQ2QsMENBQVksQ0FBQTtJQUNaLHdDQUFXLENBQUE7SUFDWCwwQ0FBWSxDQUFBO0lBQ1osa0RBQWdCLENBQUE7SUFDaEIsa0RBQWdCLENBQUE7SUFDaEIsb0RBQWlCLENBQUE7SUFDakIsd0RBQW1CLENBQUE7SUFDbkIsd0RBQW1CLENBQUE7SUFDbkIseURBQW9CLENBQUE7SUFDcEIsNkRBQXNCLENBQUE7SUFDdEIsaUVBQXdCLENBQUE7SUFDeEIsdUVBQTJCLENBQUE7QUFDL0IsQ0FBQyxFQTVCVyxRQUFRLEdBQVIsZ0JBQVEsS0FBUixnQkFBUSxRQTRCbkI7QUFFWSxRQUFBLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO0lBQ3RDLFdBQVcsRUFBRSxDQUFDO0lBQ2QsV0FBVyxFQUFFLENBQUM7SUFDZCxRQUFRLEVBQUUsQ0FBQztJQUNYLFFBQVEsRUFBRSxDQUFDO0lBQ1gsb0JBQW9CLEVBQUUsQ0FBQztJQUN2QixVQUFVLEVBQUUsQ0FBQztJQUNiLE1BQU0sRUFBRSxDQUFDO0lBQ1QsV0FBVyxFQUFFLENBQUM7SUFDZCxXQUFXLEVBQUUsQ0FBQztJQUNkLGdCQUFnQixFQUFFLENBQUM7SUFDbkIsWUFBWSxFQUFFLEVBQUU7SUFDaEIsZ0JBQWdCLEVBQUUsRUFBRTtJQUNwQixjQUFjLEVBQUUsRUFBRTtJQUNsQixPQUFPLEVBQUUsRUFBRTtJQUNYLFNBQVMsRUFBRSxFQUFFO0lBQ2IsT0FBTyxFQUFFLEVBQUU7SUFDWCxNQUFNLEVBQUUsRUFBRTtJQUNWLE9BQU8sRUFBRSxFQUFFO0lBQ1gsV0FBVyxFQUFFLEVBQUU7SUFDZixXQUFXLEVBQUUsRUFBRTtJQUNmLFlBQVksRUFBRSxFQUFFO0lBQ2hCLGNBQWMsRUFBRSxFQUFFO0lBQ2xCLGNBQWMsRUFBRSxFQUFFO0lBQ2xCLGNBQWMsRUFBRSxHQUFHO0lBQ25CLGdCQUFnQixFQUFFLEdBQUc7SUFDckIsa0JBQWtCLEVBQUUsR0FBRztJQUN2QixxQkFBcUIsRUFBRSxHQUFHO0NBQ04sQ0FBQyxDQUFDO0FBRWIsUUFBQSxlQUFlLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQztJQUN6QyxDQUFDLEVBQUUsV0FBVztJQUNkLENBQUMsRUFBRSxXQUFXO0lBQ2QsQ0FBQyxFQUFFLFFBQVE7SUFDWCxDQUFDLEVBQUUsUUFBUTtJQUNYLENBQUMsRUFBRSxvQkFBb0I7SUFDdkIsQ0FBQyxFQUFFLFVBQVU7SUFDYixDQUFDLEVBQUUsTUFBTTtJQUNULENBQUMsRUFBRSxXQUFXO0lBQ2QsQ0FBQyxFQUFFLFdBQVc7SUFDZCxDQUFDLEVBQUUsZ0JBQWdCO0lBQ25CLEVBQUUsRUFBRSxZQUFZO0lBQ2hCLEVBQUUsRUFBRSxnQkFBZ0I7SUFDcEIsRUFBRSxFQUFFLGNBQWM7SUFDbEIsRUFBRSxFQUFFLE9BQU87SUFDWCxFQUFFLEVBQUUsU0FBUztJQUNiLEVBQUUsRUFBRSxPQUFPO0lBQ1gsRUFBRSxFQUFFLE1BQU07SUFDVixFQUFFLEVBQUUsT0FBTztJQUNYLEVBQUUsRUFBRSxXQUFXO0lBQ2YsRUFBRSxFQUFFLFdBQVc7SUFDZixFQUFFLEVBQUUsWUFBWTtJQUNoQixFQUFFLEVBQUUsY0FBYztJQUNsQixFQUFFLEVBQUUsY0FBYztJQUNsQixHQUFHLEVBQUUsY0FBYztJQUNuQixHQUFHLEVBQUUsZ0JBQWdCO0lBQ3JCLEdBQUcsRUFBRSxrQkFBa0I7SUFDdkIsR0FBRyxFQUFFLHFCQUFxQjtDQUNSLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB0eXBlIFN0cmluZ01hcDxUPiA9IHsgW2tleTogc3RyaW5nXTogVCB9O1xyXG5leHBvcnQgdHlwZSBOdW1iZXJNYXA8VD4gPSB7IFtrZXk6IG51bWJlcl06IFQgfTtcclxuZXhwb3J0IHR5cGUgRmlsZUVudHJ5ID0ge3BhdGg6c3RyaW5nLHZhbHVlOnN0cmluZ307XHJcblxyXG5leHBvcnQgZW51bSBJdGVtVHlwZSB7XHJcbiAgICBcIlVuZGVmaW5lZFwiID0gMCxcclxuICAgIFwiQ29tcG9uZW50XCIgPSAxLFxyXG4gICAgXCJEZXZpY2VcIiA9IDIsXHJcbiAgICBcIldlYXBvblwiID0gMyxcclxuICAgIFwiQW1tdW5pdGlvbk9ic29sZXRlXCIgPSA0LFxyXG4gICAgXCJEcm9uZUJheVwiID0gNSxcclxuICAgIFwiU2hpcFwiID0gNixcclxuICAgIFwiU2F0ZWxsaXRlXCIgPSA3LFxyXG4gICAgXCJTaGlwQnVpbGRcIiA9IDgsXHJcbiAgICBcIlNhdGVsbGl0ZUJ1aWxkXCIgPSA5LFxyXG4gICAgXCJUZWNobm9sb2d5XCIgPSAxMCxcclxuICAgIFwiQ29tcG9uZW50U3RhdHNcIiA9IDExLFxyXG4gICAgXCJDb21wb25lbnRNb2RcIiA9IDEyLFxyXG4gICAgXCJTa2lsbFwiID0gMTMsXHJcbiAgICBcIkZhY3Rpb25cIiA9IDE0LFxyXG4gICAgXCJRdWVzdFwiID0gMTUsXHJcbiAgICBcIkxvb3RcIiA9IDE2LFxyXG4gICAgXCJGbGVldFwiID0gMTgsXHJcbiAgICBcIkNoYXJhY3RlclwiID0gMTksXHJcbiAgICBcIlF1ZXN0SXRlbVwiID0gMjAsXHJcbiAgICBcIkFtbXVuaXRpb25cIiA9IDI1LFxyXG4gICAgXCJWaXN1YWxFZmZlY3RcIiA9IDI2LFxyXG4gICAgXCJCdWxsZXRQcmVmYWJcIiA9IDI3LFxyXG4gICAgXCJTaGlwU2V0dGluZ3NcIiA9IDEwMCxcclxuICAgIFwiR2FsYXh5U2V0dGluZ3NcIiA9IDEwMSxcclxuICAgIFwiRGF0YWJhc2VTZXR0aW5nc1wiID0gMTAyLFxyXG4gICAgXCJFeHBsb3JhdGlvblNldHRpbmdzXCIgPSAxMDMsXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBJdGVtVHlwZXNNYXAgPSBPYmplY3QuZnJlZXplKHtcclxuICAgIFwiVW5kZWZpbmVkXCI6IDAsXHJcbiAgICBcIkNvbXBvbmVudFwiOiAxLFxyXG4gICAgXCJEZXZpY2VcIjogMixcclxuICAgIFwiV2VhcG9uXCI6IDMsXHJcbiAgICBcIkFtbXVuaXRpb25PYnNvbGV0ZVwiOiA0LFxyXG4gICAgXCJEcm9uZUJheVwiOiA1LFxyXG4gICAgXCJTaGlwXCI6IDYsXHJcbiAgICBcIlNhdGVsbGl0ZVwiOiA3LFxyXG4gICAgXCJTaGlwQnVpbGRcIjogOCxcclxuICAgIFwiU2F0ZWxsaXRlQnVpbGRcIjogOSxcclxuICAgIFwiVGVjaG5vbG9neVwiOiAxMCxcclxuICAgIFwiQ29tcG9uZW50U3RhdHNcIjogMTEsXHJcbiAgICBcIkNvbXBvbmVudE1vZFwiOiAxMixcclxuICAgIFwiU2tpbGxcIjogMTMsXHJcbiAgICBcIkZhY3Rpb25cIjogMTQsXHJcbiAgICBcIlF1ZXN0XCI6IDE1LFxyXG4gICAgXCJMb290XCI6IDE2LFxyXG4gICAgXCJGbGVldFwiOiAxOCxcclxuICAgIFwiQ2hhcmFjdGVyXCI6IDE5LFxyXG4gICAgXCJRdWVzdEl0ZW1cIjogMjAsXHJcbiAgICBcIkFtbXVuaXRpb25cIjogMjUsXHJcbiAgICBcIlZpc3VhbEVmZmVjdFwiOiAyNixcclxuICAgIFwiQnVsbGV0UHJlZmFiXCI6IDI3LFxyXG4gICAgXCJTaGlwU2V0dGluZ3NcIjogMTAwLFxyXG4gICAgXCJHYWxheHlTZXR0aW5nc1wiOiAxMDEsXHJcbiAgICBcIkRhdGFiYXNlU2V0dGluZ3NcIjogMTAyLFxyXG4gICAgXCJFeHBsb3JhdGlvblNldHRpbmdzXCI6IDEwMyxcclxufSBhcyBTdHJpbmdNYXA8SXRlbVR5cGU+KTtcclxuXHJcbmV4cG9ydCBjb25zdCBJdGVtVHlwZXNNYXBSZXYgPSBPYmplY3QuZnJlZXplKHtcclxuICAgIDA6IFwiVW5kZWZpbmVkXCIsXHJcbiAgICAxOiBcIkNvbXBvbmVudFwiLFxyXG4gICAgMjogXCJEZXZpY2VcIixcclxuICAgIDM6IFwiV2VhcG9uXCIsXHJcbiAgICA0OiBcIkFtbXVuaXRpb25PYnNvbGV0ZVwiLFxyXG4gICAgNTogXCJEcm9uZUJheVwiLFxyXG4gICAgNjogXCJTaGlwXCIsXHJcbiAgICA3OiBcIlNhdGVsbGl0ZVwiLFxyXG4gICAgODogXCJTaGlwQnVpbGRcIixcclxuICAgIDk6IFwiU2F0ZWxsaXRlQnVpbGRcIixcclxuICAgIDEwOiBcIlRlY2hub2xvZ3lcIixcclxuICAgIDExOiBcIkNvbXBvbmVudFN0YXRzXCIsXHJcbiAgICAxMjogXCJDb21wb25lbnRNb2RcIixcclxuICAgIDEzOiBcIlNraWxsXCIsXHJcbiAgICAxNDogXCJGYWN0aW9uXCIsXHJcbiAgICAxNTogXCJRdWVzdFwiLFxyXG4gICAgMTY6IFwiTG9vdFwiLFxyXG4gICAgMTg6IFwiRmxlZXRcIixcclxuICAgIDE5OiBcIkNoYXJhY3RlclwiLFxyXG4gICAgMjA6IFwiUXVlc3RJdGVtXCIsXHJcbiAgICAyNTogXCJBbW11bml0aW9uXCIsXHJcbiAgICAyNjogXCJWaXN1YWxFZmZlY3RcIixcclxuICAgIDI3OiBcIkJ1bGxldFByZWZhYlwiLFxyXG4gICAgMTAwOiBcIlNoaXBTZXR0aW5nc1wiLFxyXG4gICAgMTAxOiBcIkdhbGF4eVNldHRpbmdzXCIsXHJcbiAgICAxMDI6IFwiRGF0YWJhc2VTZXR0aW5nc1wiLFxyXG4gICAgMTAzOiBcIkV4cGxvcmF0aW9uU2V0dGluZ3NcIixcclxufSBhcyBOdW1iZXJNYXA8c3RyaW5nPik7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhdGFiYXNlRmlsZSB7XHJcbiAgICBJZDogbnVtYmVyO1xyXG4gICAgSXRlbVR5cGU6IEl0ZW1UeXBlO1xyXG59Il19