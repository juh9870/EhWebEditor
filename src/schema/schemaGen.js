const fs = require("fs-extra");
const path = require('path');
const parser = require('fast-xml-parser');

const getCircularReplacer = () => {
	const seen = new WeakSet();
	return (key, value) => {
		if (typeof value === "object" && value !== null) {
			if (seen.has(value)) {
				return "[circular]";
			}
			seen.add(value);
		}
		return value;
	};
};

const parse = function(data) {
	try {
		data=fs.readFileSync(data).toString();
	} catch(e){}

	return parser.parse(data,{
		ignoreAttributes:false,
		attributeNamePrefix:"",
		textNodeName:"text"
	});
}

const walkSync = function(dir, filelist) {
	var path = path || require('path');
	var fs = fs || require('fs'),
		files = fs.readdirSync(dir);
	filelist = filelist || [];
	files.forEach(function(file) {
		if (fs.statSync(path.join(dir, file)).isDirectory()) {
			filelist = walkSync(path.join(dir, file), filelist);
		}
		else {
			filelist.push(path.join(dir, file));
		}
	});
	return filelist;
};

class DbObject {
	constructor(raw){

		this.name="";
		this.type="";
		this.typeid="";
		this.member=[];
		this.switch="";

		for(let key of Object.getOwnPropertyNames(raw)){
			switch(key){
				case "name":
				case "type":
				case "typeid":
				case "member":
				case "switch":
					this[key]=raw[key];
					break;
				case "alias":
				case "options":
					//ignore
					break;
				default:
					throw new Error("Unknown object field "+key);
			}
		}
		if(Array.isArray(this.member)){
			this.member=this.member.map(e=>new DbObjectMember(e,this));
		} else {
			this.member=[new DbObjectMember(this.member,this)];
		}
	}

	schema(){
		let ret = {
			data:{
				"type": "object",
				"format": "grid",
				"title": this.name,
				"additionalProperties": false,
				"options": {
				  "keep_oneof_values": false
				},
				"properties":{
				}
			},
			key:""
		};

		if(headers[this.name]){
			ret.data.headerTemplate=headers[this.name];
		}

		switch (this.type) {
			case "object":
			case "settings":
				let type = typeIdToType(this.typeid);
				ret.key="itype_"+type.value;
				ret.data.properties.ItemType={
					"type":"integer",
					"enum": [
						type.value
					],
					"options": {
					  "hidden": true
					}
				};
				ret.data.properties.Id={
					"type":"integer"
				};
				break;
			case "struct":
				ret.key=this.name
				ret.data.options.disable_edit_json=true;
				ret.data.options.disable_properties=true;
				break;
			default:
				break;
		}
		if(this.switch){

			ret.data.additionalProperties=true;

			let switchVal = this.member.find(e=>e.name==this.switch);
			if(switchVal.type!=="enum")throw new Error("Invalid switch variable type "+switchVal.type+" in "+this.name);
			let switchEnum = enums[switchVal.typeid];
			ret.data.oneOf=[];

			ret.data.properties[switchVal.name]={
				"type":switchEnum.type,
				"options":{
					"hidden":true
				}
			}
			
			switchEnum.entries.forEach(entry=>{
				let oneOf = {
					"title":entry.name,
					"type":"object",
					"format": "grid",
					"properties": {
						...ret.data.properties,
						[switchVal.name]:{
							"type":switchEnum.type,
							"enum":[entry.value],
							"options": {
								"hidden": true
							}
						}
					}
				}
				let vars = this.member.filter(e=>{
					if(e===switchVal)return false;
					if(e.case.length>0){
						return e.case.includes(entry.name);
					}
					return true;
				});
				vars.forEach(mem=>{
					let s = mem.schema();
					if(mem.case && !mem.case.includes(entry.name)){
						// if(oneOf.properties[s.key])return;
						// oneOf.properties[s.key]=s.data;
						// oneOf.properties[s.key].options=oneOf.properties[s.key].options||{};
						// oneOf.properties[s.key].options.hidden=true;
					} else {
						oneOf.properties[s.key]=s.data;
					}
				});
				ret.data.oneOf.push(oneOf);
			});

			// this.member.forEach(mem=>{
			// 	if(mem===switchVal)return;
			// 	let s = mem.schema();
			// 	ret.data.properties[s.key]=s.data;
			// });
		} else {
			this.member.forEach(mem=>{
				let s = mem.schema();
				ret.data.properties[s.key]=s.data;
			});
		}
		return ret;
	}
}

class DbObjectMember {
	constructor(raw,parent){
		this.parent=parent;
		this.name="";				
		this.type="";			
		this.typeid="";			
		this.minvalue=null;			
		this.maxvalue=null;			
		this.alias="";		
		this.notnull=false;		
		this.case="";		
		
		for(let key of Object.getOwnPropertyNames(raw)){
			switch(key){
				case "name":
				case "type":
				case "typeid":
				case "minvalue":
				case "maxvalue":
				case "alias":
				case "case":
					this[key]=raw[key];
					break;
				case "options":
					switch(raw[key]){
						case "notnull":
							this.notnull=true;
							break;
						case "obsolete":
							break;
						default: throw new Error("Unknown option "+raw[key]);
					}
					break;
				case "_":
					//ignore
					break;
				default:
					throw new Error("Unknown object field "+key);
			}
		}
		if(this.minvalue!==null)this.minvalue=Number(this.minvalue);
		if(this.maxvalue!==null)this.maxvalue=Number(this.maxvalue);
	}

	addMinMax(targ){
		if(this.minvalue!==null)targ.minimum=this.minvalue;
		if(this.maxvalue!==null)targ.maximum=this.maxvalue;
	}

	schema(){
		let data = {
			"title":this.alias?this.alias:this.name,
			//"additionalProperties": false,
		}
		let type = this.type.replace(/(_list)|(_flags)/g,"");
		let arrWrap = type!==this.type;

		switch(type){
			case "object":
				let type = typeIdToType(this.typeid);
				data.type="integer"
				data.options={
					itemType:type.value
				};
				break;
			case "struct":
			case "enum":
				data.$ref="#/definitions/"+this.typeid
				break;
			case "float":
				data.type="number";
				this.addMinMax(data);
				break;
				break;
			case "int":
				data.type="integer";
				this.addMinMax(data);
				break;
			case "vector":
				data.$ref="#/definitions/vector"
				break;
			case "bool":
				data.type="boolean";
				data.format="checkbox";
				break;
			case "color":
				data.type="string";
				data.format="color";
				data.options=data.options||{};
				data.options.colorpicker={
					"alpha":true,
				}
				break;
			case "audioclip":
			case "prefab":
			case "string":
			case "image":
			case "layout":
				data.type="string";
				break;
			default:
				throw new Error("Unkown type "+this.type);
		}
		if(arrWrap){
			let oldData = data;
			data={
				"type": "array",
				"title":oldData.title,
				"items":oldData,
				"format": "tabs-top",
			}

			if(this.type==="enum_flags"){
				data.items=enumToSchema(enums[this.typeid]);
				delete data.format;
			}
			if(this.type.endsWith("_flags"))data.uniqueItems=true;
			delete oldData.title;
		}

		return {
			key:this.name,
			data:data
		};
	}
}

class DbEnum {
	constructor(raw){
		this.entries=[];
		this.type="integer";
		this.entries=raw.item.map((e,i)=>new DbEnumEntry(e,this,i));
		if(this.type==="string"){
			this.entries.forEach(e=>{
				if(typeof(e.value)==="number"){
					e.value="";
				} else {
					e.value=e.value.replace(/^'|'$/g,"");
				}
			})
		}
	}
}
class DbEnumEntry {
	constructor(raw,parent,index){
		this.parent=parent;
		this.name=raw.name;
		this.value=raw.text===undefined?index:raw.text;
		if(typeof(this.value)==="string")parent.type="string";
	}
}

let files = walkSync("./Objects/");
let enums = {};
let objects = {};
let headers = fs.readJSONSync("./headers.json");

files.forEach((file,i)=>{
	if(!file.endsWith(".xml"))return;
	//console.log(file);

	let data = parse(file).data;
	if(!data)throw file;
	fs.outputJson(path.join("json",file.replace(".xml",".json")),data,{spaces:"\t"});

	switch(data.type){
		case "enum":
			enums[data.name]=new DbEnum(data);
			break;
		case "object":
		case "struct":
		case "settings":
			objects[data.name]=new DbObject(data);
			break;
		default:	
			throw file;
	}
});

fs.outputFileSync("./enums.json",JSON.stringify(enums,getCircularReplacer(),"\t"));
fs.outputFileSync("./objects.json",JSON.stringify(objects,getCircularReplacer(),"\t"));

let schemaBase = {
	//"$schema": "https://json-schema.org/draft/2020-12/schema",
	"$id": "https://juh9870.cf/EhMod.json",
	"title": "EH Mod",
	"description": "Event Horizon mod file",
	"type": "object",
	"format": "grid",
	"options": {
	  "keep_oneof_values": false
	},
	//"$ref":"#/definitions/itype_6",
	"properties": {
	  "ItemType": {
		"type": "integer",
		"options": {
		  "hidden": true
		}
	  },
	},
	"oneOf": [
	],
	"definitions":{
		"itype_0":{
			"type": "object",
			"format": "grid",
			"additionalProperties": false,
			"properties":{
				"ItemType":{
					"type":"integer",
					"enum": [
						0
					],
					"options": {
					"hidden": true
					}
				}
			}
		},
		"vector":{
			"type": "object",
			"format": "grid",
			"additionalProperties": false,
			"properties":{
				"x":{
					"type":"number"
				},
				"y":{
					"type":"number"
				}
			}
		}
	}
}

function enumToSchema(enumData){
	return {
		"type":enumData.type,
		"enum":enumData.entries.map(e=>e.value),
		"options": {
		  "enum_titles": enumData.entries.map(e=>e.name)
		}
	}
}
function enumToSchema2(enumData){
	return {
		"oneOf":enumData.entries.map(e=>({
			"enum":[e.value],
			"title":e.name
		}))
	}
}

enums.ItemType.entries.forEach(e=>{
	schemaBase.oneOf.push({
		"title": e.name,
		"$ref": "#/definitions/itype_"+e.value
	});
});

Object.getOwnPropertyNames(enums).forEach(key=>{
	schemaBase.definitions[key]=enumToSchema(enums[key]);
});

function typeIdToType(typeid){
	let ret = enums.ItemType.entries.find(e=>e.name===typeid);
	if(!ret)throw new Error("Unknown type: "+ typeid+", "+typeid.length);
	return ret;
}
Object.getOwnPropertyNames(objects).forEach(key=>{
	let data = objects[key].schema();
	schemaBase.definitions[data.key]=data.data;
});

fs.outputFileSync("./globalSchema.ts",`export const GlobalSchema=`+JSON.stringify(schemaBase,null,""));


delete schemaBase.oneOf;
delete schemaBase.properties;

let templ = fs.readFileSync("./schema.template.tst").toString();
templ=templ.replace("{/*!!!SCHEMA!!!*/}",JSON.stringify(schemaBase,null,""));



fs.outputFileSync("./schema.ts",templ);
//inspect(schemaBase);