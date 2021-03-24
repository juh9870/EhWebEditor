"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.values = exports.keys = exports.clone = void 0;
const _clone = require("rfdc");
exports.clone = _clone({
    proto: true,
    circles: true
});
const keys = (o) => Object.getOwnPropertyNames(o);
exports.keys = keys;
const values = (o) => exports.keys(o).map(e => o[e]);
exports.values = values;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBK0I7QUFDbEIsUUFBQSxLQUFLLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLEtBQUssRUFBQyxJQUFJO0lBQ1YsT0FBTyxFQUFDLElBQUk7Q0FDZixDQUFDLENBQUE7QUFDSyxNQUFNLElBQUksR0FBRyxDQUFJLENBQUcsRUFBZ0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQVEsQ0FBQztBQUF0RSxRQUFBLElBQUksUUFBa0U7QUFDNUUsTUFBTSxNQUFNLEdBQUcsQ0FBSSxDQUFJLEVBQWlCLEVBQUUsQ0FBQyxZQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFRLENBQUM7QUFBbkUsUUFBQSxNQUFNLFVBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgX2Nsb25lIGZyb20gXCJyZmRjXCI7XHJcbmV4cG9ydCBjb25zdCBjbG9uZSA9IF9jbG9uZSh7XHJcbiAgICBwcm90bzp0cnVlLFxyXG4gICAgY2lyY2xlczp0cnVlXHJcbn0pXHJcbmV4cG9ydCBjb25zdCBrZXlzID0gPFQ+KG86VCkgOiAoa2V5b2YgVClbXSA9PiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvKSBhcyBhbnk7XHJcbmV4cG9ydCBjb25zdCB2YWx1ZXMgPSA8VD4obzogVCkgOiBUW2tleW9mIFRdW10gPT4ga2V5cyhvKS5tYXAoZSA9PiBvW2VdKSBhcyBhbnk7XHJcbiJdfQ==