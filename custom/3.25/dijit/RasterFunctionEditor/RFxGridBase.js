// COPYRIGHT © 201 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/has","../../kernel","dojo/text!../../layers/support/rasterFunctionResources.json","dgrid/OnDemandGrid","dgrid/Keyboard","dgrid/editor","dojo/store/Memory","dojo/store/Observable","dojo/on","dojo/_base/lang","dojo/Evented","dojo/_base/array","dojo/json","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/form/CheckBox","dijit/form/NumberTextBox","esri/lang","./EditableGridMixin","./RFxColorInput","./RFxFieldSelect","./RFxScaleSelect","./RFxRasterInput","./utils"],function(e,t,i,r,a,s,o,n,d,l,c,h,u,g,f,b,_,p,y,v,j,A,m,x,T,O){var E=e([a,s]),w=g.parse(r).dataTypes,R=e("RFxGridBase",[f,b,_,h,j],{templateString:"<div class='esriRFxGridBase'><div data-dojo-attach-point='gridNode'></div></div>",declaredClass:"esri.dijit.RasterFunctionEditor.RFxGridBase",schema:[],data:[],hasIdColumn:!1,idProperty:void 0,isExtensible:!0,isEditable:!0,editorDataTypes:[w.string,w.boolean,w.long,w.double,w.longArray,w.doubleArray],renderCellDataTypes:[w.color,w.field,w.scale,w.raster],value:[],_store:null,_grid:null,postCreate:function(){this.inherited(arguments),this._initStore(this.data),this._initGrid(this.schema),this.attachGridEvents(),this.on("change",c.hitch(this,this._onGridChange))},_getGridColumns:function(e){var t=[];if(this.hasIdColumn){var i={label:"ID",field:"idNum",sortable:!1};t.push(i)}return e.forEach(function(e){var r={label:e.label,field:e.name,autoSave:!0,sortable:!1},a=void 0===e.isEditable?this.isEditable:e.isEditable;a||(r.canEdit=a),this.editorDataTypes.indexOf(e.dataType)>-1?a?(r.editor=this._getEditor(e.dataType),r.editOn="checkbox"===r.editor?r.editOn:"click",this._isFloatingDataType(e.dataType)&&(r.editorArgs={constraints:{fractional:!0,places:"0,20"}}),e.constraints&&(r.editorArgs={constraints:e.constraints}),i=o(r)):i=r:this.renderCellDataTypes.indexOf(e.dataType)>-1&&(i=r,i.renderCell=this._getRenderer(e.dataType)),t.push(i)},this),t},_initStore:function(e){this.idProperty="id",e.forEach(function(e,t){e.id=t+1,e.idNum=t+1}),this._store=new n({data:e,idProperty:this.idProperty}),this._store=d(this._store)},_initGrid:function(e){this._grid=new E({store:this._store,columns:this._getGridColumns(e),className:"dgrid-autoheight",showHeader:!0,selectionMode:"single"},this.gridNode),this.isExtensible?this._addBlankObject():this._grid.refresh()},_onGridChange:function(){if(this._store&&this._grid){var e=this._store.data;this.emit("grid-data-change",e)}},_getEditor:function(e){var t;switch(e){case w.doubleArray:case w.double:case w.long:case w.longArray:t=y;break;case w.boolean:t=p;break;default:t="text"}return t},_getRenderer:function(e){return e===w.color?c.hitch(this,function(e,t,i){var r=new A({colorObject:e.colorObject});r.placeAt(i),r.startup(),r.on("change-color",c.hitch(this,function(t){t.id=t.id||e.id-1;var i=this._store.data;u.some(i,c.hitch(this,function(e){if(e.colorObject&&e.colorObject.id===t.id||!v.isDefined(e.colorObject.id))return e.colorObject={r:t.r,g:t.g,b:t.b,a:t.a,id:t.id}})),this._addNewRowToGrid(e),this.emit("grid-data-change",i)}))}):e===w.field?c.hitch(this,function(e,t,i){var r=e.layerArg,a=new m({layerArg:r,isInGrid:!0});a.placeAt(i),a.startup(),e.fieldArg=a,a.on("change",function(e){e.field=e.fieldArg.value,this.emit("change")}.bind(this,e)),""!==t&&(a.set("value",t,!1),a.selectedValue=t)}):e===w.raster?c.hitch(this,function(e,t,i){var r=new T({inputLayers:this.inputLayers,allowScalar:this.allowScalar,selectDefault:!1,browseProperties:this.browseProperties});r.placeAt(i),r.startup(),e.layerArg={input:r},r.set("rfxVariable",t,!1),r.on("change",this._onLayerChange.bind(this,e))}):e===w.scale?c.hitch(this,function(e,t,i){var r;"*"!==e.idNum&&(r=e.scaleArg&&e.scaleArg.evalValues,t=t||"NODATA");var a=new x({evalValues:r,value:t});a.placeAt(i),a.startup(),e.scaleArg=a,a.on("change",this._onScaleChange.bind(this,e))}):void 0},_onLayerChange:function(e){e.fieldArg.setFieldOptions();var t=e.layerArg.input.rfxVariable;t||(t=c.clone(O.defaultRasterNodeProps)),t.value=e.layerArg.input.get("value"),e.layer=t,this.isExtensible&&this._addNewRowToGrid(e),this.emit("change")},_onScaleChange:function(e){e.scale=e.scaleArg.value,this.emit("change")},updateStoreValue:function(e){this._initStore(e),this.isExtensible&&this._addBlankObject(),this._grid.set("store",this._store),this._grid.refresh()},getStoreValue:function(){return this._grid.store.data},_addNewRowToGrid:function(e){"*"===e.idNum&&(this._addBlankObject(),this._grid.refresh())},_isNumericDataType:function(e){return[w.long,w.longArray,w.double,w.doubleArray].indexOf(e)>-1},_isFloatingDataType:function(e){return[w.double,w.doubleArray].indexOf(e)>-1}});return t("extend-esri")&&c.setObject("dijit.RasterFunctionEditor.RFxGridBase",R,i),R.DATA_TYPES=w,R});