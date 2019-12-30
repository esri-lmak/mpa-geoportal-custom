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

define(["../../kernel","./AnalysisRegistry","./RasterAnalysisMixin","./ItemTypes","./utils","dijit/_FocusMixin","dijit/_OnDijitClickMixin","dijit/_TemplatedMixin","dijit/_WidgetBase","dijit/_WidgetsInTemplateMixin","esri/layers/ArcGISImageServiceLayer","dojo/_base/array","dojo/_base/declare","dojo/_base/json","dojo/_base/lang","dojo/dom-style","dojo/has","dojo/i18n!./nls/CalculateDistance","dojo/text!./templates/CalculateDistance.html"],function(t,e,i,s,a,n,r,u,o,l,c,h,p,d,m,y,_,g,A){var L=p([o,u,l,r,n,i],{declaredClass:"esri.dijit.analysis.CalculateDistance",templateString:A,widgetsInTemplate:!0,browseType:[s.IS,s.FS],checkGeometries:[e.GeometryTypes.Point,e.GeometryTypes.MultiPoint,e.GeometryTypes.Line],tags:["point","line"],inputLayer:null,allocationField:null,maximumDistance:{},outputCellSize:{},distanceMethod:"",toolName:"CalculateDistance",helpFileName:"CalculateDistance",toolNlsName:g,rasterGPToolName:"CalculateDistance",outputName:"outputDistanceName",resultParameter:["outputDistanceRaster","outputDirectionRaster","outputAllocationRaster","outputBackDirectionRaster"],secondaryOutputs:["outputDirectionRaster","outputAllocationRaster","outputBackDirectionRaster"],secondaryOutputNames:["outputDirectionName","outputAllocationName","outputBackDirectionName"],constructor:function(t,e){this._pbConnects=[],t.containerNode&&(this.container=t.containerNode),t.rerun||(this.set("maximumDistance",{units:t.distanceDefaultUnits}),this.set("outputCellSize",{units:t.distanceDefaultUnits}))},_getJobParameters:function(){var t=a.constructAnalysisInputLyrObj(this.get("inputLayer"));this.get("inputLayer").drawnLayer&&(t.drawnLayer=this.get("inputLayer").drawnLayer);var e={inputSourceRasterOrFeatures:d.toJson(t),inputBarrierRasterOrFeatures:d.toJson(a.constructAnalysisInputLyrObj(this.get("inputBarrierRasterOrFeatures"))),maximumDistance:this.get("maximumDistance")&&d.toJson(this.get("maximumDistance")),outputCellSize:this.get("outputCellSize")&&d.toJson(this.get("outputCellSize")),outputDistanceName:this.get("outputDistanceName")},i=this.get("distanceMethod");return i&&"0"!==i&&(e.distanceMethod=i),this.get("allocationField")&&(e.allocationField=this.get("allocationField")),e},_handleAllocationFieldChange:function(t){this.set("allocationField",t)},getLengthMeasureUnit:function(){return[{value:"Miles",label:this.i18n.miles},{value:"Feet",label:this.i18n.feet},{type:"separator"},{value:"Kilometers",label:this.i18n.kilometers},{value:"Meters",label:this.i18n.meters}]},_setDefaultInputs:function(){this.inputBarrierRasterOrFeatures&&this.inputCostRasters&&!a.isLayerInLayers(this.inputBarrierRasterOrFeatures,this.inputCostRasters)&&this.inputCostRasters.push(this.inputBarrierRasterOrFeatures),this._distanceUnitsSelect.addOption(this.getLengthMeasureUnit()),this._cellSizeUnitsSelect.addOption(this.getLengthMeasureUnit()),this._distanceMethodSelect.addOption(this._getDistanceMethods(this.get("distanceMethod"))),this._addInputCostRasterLayerOptions(),this._setDefaultInputCostRaster(),this._distanceUnitsSelect.set("value",this.maximumDistance.units),this._cellSizeUnitsSelect.set("value",this.outputCellSize.units),this._distanceInput.set("value",this.maximumDistance.distance),this._cellSizeInput.set("value",this.outputCellSize.distance),this._outputLayerInput.set("value",this.outputDistanceName&&this.outputDistanceName.serviceProperties.name),this._outputDirectionLayerInput.set("value",this.outputDirectionName&&this.outputDirectionName.serviceProperties.name),this._outputAllocationLayerInput.set("value",this.outputAllocationName&&this.outputAllocationName.serviceProperties.name),this._allocationField.set("value",this.allocationField),this._outputBackDirectionNameInput.set("value",this.outputBackDirectionName&&this.outputBackDirectionName.serviceProperties.name),this._allocationField.set("value",this.allocationField),this.addPointAnalysisLayer()},_setDefaultInputCostRaster:function(){this.inputBarrierRasterOrFeatures||(this.inputBarrierRasterOrFeatures=this.inputCostRasters[0])},_getDistanceMethods:function(t){return[{value:"Planar",label:this.i18n.planar,selected:"Planar"===t||!t},{value:"Geodesic",label:this.i18n.geodesic,selected:"Geodesic"===t}]},addBrowseOption:function(){a.addReadyToUseLayerOption(this,[{disableLAAL:!0,select:this._inputRasterSelect}])},_addInputCostRasterLayerOptions:function(){var t=[];this._inputRasterSelect.removeOption(this._inputRasterSelect.getOptions()),h.forEach(this.inputCostRasters,m.hitch(this,function(e,i){a.isSameLayer(this.inputBarrierRasterOrFeatures,this.inputLayer)||t.push({label:e.name,value:i,selected:a.isSameLayer(e,this.inputBarrierRasterOrFeatures)})})),this._inputRasterSelect.addOption(t),this._handleInputRasterChange(this._inputRasterSelect.get("value"))},_handleInputRasterChange:function(t){"browselayers"===t||"browse"===t?(this._isAnalysisSelect=!1,this.defaultItemTypes=[],this._createBrowseItems({browseValue:t,disableLAAL:!0,disableBoundary:!0,disabledSubResources:[this.inputLayer]},{},this._inputRasterSelect)):t>=0&&this.set("inputBarrierRasterOrFeatures",this.inputCostRasters[t])},_handleBrowseItemsSelect:function(t,e){t&&t.selection&&a.addAnalysisReadyLayer({item:t.selection,layers:this._isAnalysisSelect?this.inputLayers:this.inputCostRasters,layersSelect:this._isAnalysisSelect?this._analysisSelect:this._inputRasterSelect,browseDialog:this._browseLyrsdlg,widget:this},e).always(m.hitch(this,function(){this._isAnalysisSelect?this._handleAnalysisLayerChange(this._analysisSelect.get("value")):this._handleInputRasterChange(this._inputRasterSelect.get("value"))}))},_onChangeOfResultAllocationLayer:function(t){""!==t&&t?(this.inputLayer&&this._addAllocationFieldOptions(),y.set(this._allocationFieldTr,"display","block")):y.set(this._allocationFieldTr,"display","none")},_addAllocationFieldOptions:function(){var t=[];this._allocationField.removeOption(this._allocationField.getOptions());var e;e=this.isImageServiceLayer(this.inputLayer)?this.inputLayer.hasRasterAttributeTable?this.inputLayer._rasterAttributeTableFields:[{value:"VALUE",label:"VALUE"}]:this.inputLayer.fields,h.forEach(e,m.hitch(this,function(e){this._isNumberType(e.type)&&t.push({value:e.name,label:e.alias,selected:e.name===this.allocationField})})),!this.allocationField&&t&&t[0]&&this.set("allocationField",t[0].value),this._allocationField.addOption(t)},_resetUI:function(){this._onChangeOfResultAllocationLayer(this.get("outputAllocationName"))},_isNumberType:function(t){return t===e.FieldTypes.Integer},_setInputLayerAttr:function(t){this.inputLayer=t},_getInputLayerAttr:function(){return this.inputLayer},_setInputLayersAttr:function(t){this.inputLayers=h.filter(t,function(t){return t&&t.geometryType===e.GeometryTypes.Point||t.geometryType===e.GeometryTypes.Polygon||t.geometryType===e.GeometryTypes.Line||t.geometryType===e.GeometryTypes.MultiPoint||this.isImageServiceLayer(t)},this),this.set("inputCostRasters",this.inputLayers)},_getInputLayersAttr:function(t){return this.inputLayers},_setMaximumDistanceAttr:function(t){this.maximumDistance=t},_getMaximumDistanceAttr:function(){return this._distanceInput.get("value")?{distance:this._distanceInput.get("value"),units:this._distanceUnitsSelect.get("value")}:null},_setOutputCellSizeAttr:function(t){this.outputCellSize=t},_getOutputCellSizeAttr:function(){if(this._cellSizeInput.get("value"))return{distance:this._cellSizeInput.get("value"),units:this._cellSizeUnitsSelect.get("value")}},_setAllocationFieldAttr:function(t){this.allocationField=t},_getAllocationFieldAttr:function(){return this.allocationField},_setOutputDistanceNameAttr:function(t){this.outputDistanceName=t},_getOutputDistanceNameAttr:function(){return this._outputLayerInput.get("value")},_setOutputDirectionNameAttr:function(t){this.outputDirectionName=t},_getOutputDirectionNameAttr:function(){return this._outputDirectionLayerInput.get("value")},_setOutputAllocationNameAttr:function(t){this.outputAllocationName=t},_getOutputAllocationNameAttr:function(){return this._outputAllocationLayerInput.get("value")},_setOutputBackDirectionNameAttr:function(t){this.outputBackDirectionName=t},_getOutputBackDirectionNameAttr:function(){return this._outputBackDirectionNameInput.get("value")},_setInputCostRastersAttr:function(t){this.inputCostRasters=h.filter(t,function(t){return this.isImageServiceLayer(t)},this)},_setInputBarrierRasterOrFeaturesAttr:function(t){this.isImageServiceLayer(t)&&(this.inputBarrierRasterOrFeatures=t)},_getInputBarrierRasterOrFeaturesAttr:function(){return this.inputBarrierRasterOrFeatures},_setDistanceMethodAttr:function(t){this.distanceMethod=t},_getDistanceMethodAttr:function(){return this._distanceMethodSelect.get("value")||this.distanceMethod}});return _("extend-esri")&&m.setObject("dijit.analysis.CalculateDistance",L,t),L});