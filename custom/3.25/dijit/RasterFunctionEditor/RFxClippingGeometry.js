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

define(["dojo/_base/declare","dojo/has","../../kernel","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/_base/lang","dojo/_base/Color","dojo/dom-construct","dojo/_base/array","dojo/dom-class","dojo/dom-style","dojo/store/Memory","dojo/data/ObjectStore","dojo/text!./templates/RFxClippingGeometry.html","dojo/i18n!../../nls/jsapi","dijit/form/Select","dijit/form/ToggleButton","./utils","../../symbols/SimpleFillSymbol","../../symbols/SimpleLineSymbol","../../toolbars/draw","../../graphic"],function(t,e,i,s,r,a,o,l,n,p,h,c,g,y,d,u,m,_,b,R,v,w,S){var f=t("esriRFxClippingGeometry",[s,r,a],{declaredClass:"esri.dijit.RasterFunctionEditor.RFxClippingGeometry",templateString:d,clippingTypes:{clippingRaster:"clippingRaster",clippingGeometry:"clippingGeometry",currentExtent:"currentExtent"},inputArgs:{},rasterArgs:{},inputLayers:[],map:null,constructor:function(){this.inherited(arguments),this._i18n=u.widgets.rasterFunctionEditor},postCreate:function(){this.inherited(arguments),this.map=this.browseProperties.map,this._setLabels(),this._populateRasterSelect(),this._createDrawToolbar(),this.own(this.map.on("extent-change",o.hitch(this,this._setExtentArgValue)))},destroy:function(){this._clearGeometry(),this._toolbar&&(this._toolbar.deactivate(),this.emit("drawtool-deactivate",{})),this.inherited(arguments)},_populateRasterSelect:function(){this.clippingRasterSelect.set("browseProperties",this.browseProperties),this.clippingRasterSelect.set("selectDefault",!1),this.clippingRasterSelect.set("allowScalar",this.allowScalar),this.clippingRasterSelect.set("inputLayers",this.inputLayers),this.own(this.clippingRasterSelect.on("change",o.hitch(this,this._setClippingRasterArgValue))),this.onGeometryTypeChange()},_createDrawToolbar:function(){this._toolbar=new w(this.map),this.own(this._toolbar.on("draw-end",o.hitch(this,this._addGeometry)))},_addGeometry:function(t){var e=t&&t.geometry;if(e){this._toolbar&&(this._toolbar.deactivate(),this.emit("drawtool-deactivate",{})),this._clearGeometry();var i=new R(R.STYLE_NULL,new v(v.STYLE_SOLID,new l([0,0,0]),4)),s=new S(e,i);this.map.graphics.add(s),this.graphic=s,this.map.setExtent(e.getExtent(),!0),this.geometry=e,this._setClippingGeometryArgValue()}},_clearGeometry:function(){this.graphic&&this.map.graphics.remove(this.graphic)},onGeometryTypeChange:function(){var t=this.geometryTypeSelect.value;switch(this._clearGeometryArgValues(),t){case this.clippingTypes.clippingRaster:this._setRasterSelectVisibility(!0),this._setDrawToolVisibility(!1),this._setClippingRasterArgValue();break;case this.clippingTypes.clippingGeometry:this._setRasterSelectVisibility(!1),this._setDrawToolVisibility(!0);break;case this.clippingTypes.currentExtent:this._setRasterSelectVisibility(!1),this._setDrawToolVisibility(!1),this._setExtentArgValue()}},_setRasterSelectVisibility:function(t){var e=t?"table-row":"none";c.set(this.clippingRasterLabelRow,"display",e),c.set(this.clippingRasterWidgetRow,"display",e)},_setDrawToolVisibility:function(t){var e=t?"table-cell":"none";c.set(this.polyDrawBtnTd,"display",e),!t&&this._toolbar&&(this._toolbar.deactivate(),this.emit("drawtool-deactivate",{}),this._clearGeometry())},_handlePolyBtnChange:function(t){t?(this.emit("drawtool-activate",{}),this._toolbar.activate(w.POLYGON),this._clearGeometry()):(this._toolbar.deactivate(),this.emit("drawtool-deactivate",{}))},_clearGeometryArgValues:function(){var t=["Extent","ClippingGeometry","ClippingRaster"];p.forEach(t,function(t){var e=this.inputArgs&&this.inputArgs[t];e&&(e.value=null)},this)},_setExtentArgValue:function(){var t=this.map.extent;if(this.geometryTypeSelect.value===this.clippingTypes.currentExtent){var e=this.inputArgs&&this.inputArgs.Extent;e&&(e.value=t.toJson())}},_setClippingGeometryArgValue:function(){var t=this.geometry;if(this.geometryTypeSelect.value===this.clippingTypes.clippingGeometry){var e=this.inputArgs&&this.inputArgs.ClippingGeometry;e&&(e.value=t.toJson())}},_setClippingRasterArgValue:function(){if(this.geometryTypeSelect.value===this.clippingTypes.clippingRaster){var t=this.clippingRasterSelect.getSelectedLayer(),e=this.inputArgs&&this.inputArgs.ClippingRaster;e&&(e.value=b.getRasterJsonFromLayer(t))}},_setLabels:function(){this.inputArgs&&(this.clippingGeometryLabel.innerHTML=this.inputArgs.ClippingGeometry.displayName,this.clippingRasterLabel.innerHTML=this.inputArgs.ClippingRaster.displayName)}});return e("extend-esri")&&o.setObject("dijit.RasterFunctionEditor.RFxClippingGeometry",f,i),f});