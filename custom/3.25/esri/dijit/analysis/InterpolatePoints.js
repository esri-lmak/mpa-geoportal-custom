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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/Color","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/number","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/Button","dijit/form/CheckBox","dijit/form/Form","dijit/form/Select","dijit/form/TextBox","dijit/form/NumberSpinner","dijit/form/ValidationTextBox","dijit/layout/ContentPane","dijit/form/FilteringSelect","dijit/Dialog","../../kernel","../../lang","./AnalysisBase","./_AnalysisOptions","../../symbols/SimpleFillSymbol","../../symbols/SimpleLineSymbol","../../toolbars/draw","../PopupTemplate","../../layers/FeatureLayer","../../graphic","./utils","./AnalysisRegistry","./CreditEstimator","../../symbols/PictureMarkerSymbol","dijit/form/HorizontalSlider","dijit/form/HorizontalRule","dijit/form/HorizontalRuleLabels","dojo/i18n!../../nls/jsapi","dojo/text!./templates/InterpolatePoints.html"],function(t,e,i,s,n,o,a,r,l,h,u,c,d,p,y,_,g,m,f,L,P,b,v,A,C,S,w,O,I,k,B,j,N,x,E,T,D,F,M,R,G,z,J,U,H,V,W,q,K,Y,Q){var X=e([g,m,f,L,P,T,E],{declaredClass:"esri.dijit.analysis.InterpolatePoints",templateString:Q,widgetsInTemplate:!0,inputLayer:null,field:null,interpolateOption:5,classificationType:"GeometricalInterval",numClasses:10,maxClasses:32,minClasses:3,boundingPolygonLayer:null,predictAtPointLayer:null,outputPredictionError:!1,outputLayerName:null,classBreaks:null,i18n:null,map:null,toolName:"InterpolatePoints",helpFileName:"InterpolatePoints",resultParameter:"resultLayer",constructor:function(t,e){this._pbConnects=[],t.containerNode&&(this.container=t.containerNode)},destroy:function(){this.inherited(arguments),s.forEach(this._pbConnects,n.disconnect),delete this._pbConnects},postMixInProperties:function(){this.inherited(arguments),i.mixin(this.i18n,Y.findHotSpotsTool),i.mixin(this.i18n,Y.interpolatePointsTool),this.set("drawLayerName",this.i18n.blayerName),this.set("drawPointLayerName",this.i18n.pointlayerName)},postCreate:function(){this.inherited(arguments),y.add(this._form.domNode,"esriSimpleForm"),this._outputLayerInput.set("validator",i.hitch(this,this.validateServiceName)),this._classBreaksInput.set("validator",i.hitch(this,this.validateClassBreaks)),this._buildUI()},startup:function(){},_handleModeCrumbClick:function(t){t.preventDefault(),this._onClose(!0)},_onClose:function(t){t&&(this._featureLayer&&(this.map.removeLayer(this._featureLayer),s.forEach(this.boundingPolygonLayers,function(t,e){if(t===this._featureLayer)return this._boundingAreaSelect.removeOption({value:e+1,label:this._featureLayer.name}),void this.boundingPolygonLayers.splice(e,1)},this)),this._pointfeatureLayer&&(this.map.removeLayer(this._pointfeatureLayer),s.forEach(this.predictAtPointLayers,function(t,e){if(t===this._pointfeatureLayer)return this._predictPointSelect.removeOption({value:e+1,label:this._pointfeatureLayer.name}),void this.predictAtPointLayers.splice(e,1)},this))),this._handleBoundingBtnChange(!1),this._handlePredictPointChange(!1),this.emit("close",{save:!t})},clear:function(){this._featureLayer&&(this.map.removeLayer(this._featureLayer),s.forEach(this.boundingPolygonLayers,function(t,e){if(t===this._featureLayer)return this._boundingAreaSelect.removeOption({value:e+1,label:this._featureLayer.name}),void this.boundingPolygonLayers.splice(e,1)},this)),this._pointfeatureLayer&&(this.map.removeLayer(this._pointfeatureLayer),s.forEach(this.predictAtPointLayers,function(t,e){if(t===this._pointfeatureLayer)return this._predictPointSelect.removeOption({value:e+1,label:this._pointfeatureLayer.name}),void this.predictAtPointLayers.splice(e,1)},this)),this._handleBoundingBtnChange(!1),this._handlePredictPointChange(!1)},_handleShowCreditsClick:function(t){t.preventDefault();var e={};this._form.validate()&&(e.inputLayer=a.toJson(this.constructAnalysisInputLyrObj(this.get("inputLayer"))),e.field=this.get("field"),e.interpolateOption=this.get("interpolateOption"),e.classificationType=this.get("classificationType"),"Manual"!==this.classificationType?e.numClasses=this.get("numClasses"):e.classBreaks=this.get("classBreaks"),this.get("boundingPolygonLayer")&&(e.boundingPolygonLayer=a.toJson(this.constructAnalysisInputLyrObj(this.boundingPolygonLayer))),this.get("predictAtPointLayer")&&(e.predictAtPointLayer=a.toJson(this.constructAnalysisInputLyrObj(this.predictAtPointLayer))),e.outputPredictionError=this.get("outputPredictionError"),this.returnFeatureCollection||(e.OutputName=a.toJson({serviceProperties:{name:this.get("outputLayerName")}})),this.showChooseExtent&&this._useExtentCheck.get("checked")&&(e.context=a.toJson({extent:this.map.extent._normalize(!0)})),this.getCreditsEstimate(this.toolName,e).then(i.hitch(this,function(t){this._usageForm.set("content",t),this._usageDialog.show()})))},_handleSaveBtnClick:function(t){if(this._form.validate()){this._saveBtn.set("disabled",!0);var e,i={},s={};i.inputLayer=a.toJson(this.constructAnalysisInputLyrObj(this.get("inputLayer"))),i.field=this.get("field"),i.interpolateOption=this.get("interpolateOption"),i.classificationType=this.get("classificationType"),"Manual"!==this.classificationType?i.numClasses=this.get("numClasses"):i.classBreaks=this.get("classBreaks"),this.get("boundingPolygonLayer")&&(i.boundingPolygonLayer=a.toJson(this.constructAnalysisInputLyrObj(this.boundingPolygonLayer))),this.get("predictAtPointLayer")&&(i.predictAtPointLayer=a.toJson(this.constructAnalysisInputLyrObj(this.predictAtPointLayer))),i.outputPredictionError=this.get("outputPredictionError"),this.predictAtPointLayer&&this.get("outputPredictionError")?this.resultParameter=["predictedPointLayer","resultLayer","predictionError"]:this.predictAtPointLayer&&!this.get("outputPredictionError")?this.resultParameter=["predictedPointLayer","resultLayer"]:!this.predictAtPointLayer&&this.get("outputPredictionError")&&(this.resultParameter=["resultLayer","predictionError"]),this.returnFeatureCollection||(i.OutputName=a.toJson({serviceProperties:{name:this.get("outputLayerName")}})),this.showChooseExtent&&!this.get("DisableExtent")&&this._useExtentCheck.get("checked")&&(i.context=a.toJson({extent:this.map.extent._normalize(!0)})),this.returnFeatureCollection&&(e={outSR:this.map.spatialReference},this.showChooseExtent&&this._useExtentCheck.get("checked")&&(e.extent=this.map.extent._normalize(!0)),i.context=a.toJson(e)),i.returnFeatureCollection=this.returnFeatureCollection,s.jobParams=i,s.itemParams={description:this.i18n.itemDescription,tags:h.substitute(this.i18n.itemTags,{layername:this.inputLayer.name,fieldname:i.field?i.field:""}),snippet:this.i18n.itemSnippet},this.showSelectFolder&&(s.itemParams.folder=this.get("folderId")),this.execute(s)}},_save:function(){},_buildUI:function(){var t,e=!0;if(this._loadConnections(),this.signInPromise.then(i.hitch(this,J.initHelpLinks,this.domNode,this.showHelp,{analysisGpServer:this.analysisGpServer})),this.inputLayers&&this.inputLayer&&!J.isLayerInLayers(this.inputLayer,this.inputLayers)&&this.inputLayers.push(this.inputLayer),this.boundingPolygonLayers&&this.boundingPolygonLayer&&!J.isLayerInLayers(this.boundingPolygonLayer,this.boundingPolygonLayers)&&this.boundingPolygonLayers.push(this.boundingPolygonLayer),this.predictAtPointLayer&&this.predictAtPointLayers&&!J.isLayerInLayers(this.predictAtPointLayer,this.predictAtPointLayers)&&this.predictAtPointLayers.push(this.predictAtPointLayer),this.get("showSelectAnalysisLayer")&&(this.get("inputLayer")||!this.get("inputLayers")||this.rerun||this.set("inputLayer",this.inputLayers[0]),J.populateAnalysisLayers(this,"inputLayer","inputLayers")),this.outputLayerName&&(this._outputLayerInput.set("value",this.outputLayerName),e=!1),this.inputLayer&&this._updateAnalysisLayerUI(e),this.classificationType&&this._classifySelect.set("value",this.classificationType),this.outputPredictionError&&this._outoutPredictionsErrCheck.set("checked",this.outputPredictionError),this.boundingPolygonLayers){var n=[{value:"-1",label:this.i18n.defaultBoundingOption,selected:!this.boundingPolygonLayer}],o=!1;s.forEach(this.boundingPolygonLayers,function(t,e){t.geometryType===U.GeometryTypes.Polygon&&(o=this.boundingPolygonLayer&&(this.boundingPolygonLayer.url===t.url||this.boundingPolygonLayer.name===t.name),n.push({value:e+1,label:t.name,selected:o}))},this),this._boundingAreaSelect.addOption(n)}J.addReadyToUseLayerOption(this,[this._analysisSelect,this._boundingAreaSelect,this._predictPointSelect]),this.classBreaks&&this._classBreaksInput.set("value",this.classBreaks.join().replace(/,/g," ")),this.maxClasses&&(t=this._numClassesInput.get("constraints"),t.max=this.maxClasses,this._numClassesInput.set("constraints",t)),this.minClasses&&(t=this._numClassesInput.get("constraints"),t.min=this.minClasses,this._numClassesInput.set("constraints",t)),this.numClasses&&this._numClassesInput.set("value",this.numClass),(10!==this.numClasses||this.predictAtPointLayer||this.boundingPolygonLayer||"GeometricalInterval"!==this.classificationType)&&this._handleOptionsBtnClick(),this.interpolateOption&&this._optimizeSlider.set("value",this.interpolateOption),u.set(this._chooseFolderRow,"display",!0===this.showSelectFolder?"block":"none"),this.showSelectFolder&&this.getFolderStore().then(i.hitch(this,function(t){this.folderStore=t,J.setupFoldersUI({folderStore:this.folderStore,folderId:this.folderId,folderName:this.folderName,folderSelect:this._webMapFolderSelect,username:this.portalUser?this.portalUser.username:""})})),u.set(this._chooseExtentDiv,"display",!0===this.showChooseExtent?"inline-block":"none"),u.set(this._showCreditsLink,"display",!0===this.showCredits?"block":"none")},_updateAnalysisLayerUI:function(t){var e,i,n=[];this.inputLayer&&(c.set(this._interpolateToolDescription,"innerHTML",h.substitute(this.i18n.toolDefine,{layername:this.inputLayer.name})),t&&(this.outputLayerName=h.substitute(this.i18n.outputLayerName,{layername:this.inputLayer.name})),this._outputLayerInput.set("value",this.outputLayerName),this.set("fields",this.inputLayer),this.predictAtPointLayers&&(e=s.some(this._predictPointSelect.getOptions(),function(t){return"browse"===t.value},this),i=s.some(this._predictPointSelect.getOptions(),function(t){return"browselayers"===t.value},this),this._predictPointSelect.removeOption(this._predictPointSelect.getOptions()),n.push({value:"-1",label:this.i18n.choosePointLayer,selected:!this.predictAtPointLayer}),s.forEach(this.predictAtPointLayers,function(t,e){var i=!0;if(t.url&&this.inputLayer.url&&t.url!==this.inputLayer.url?i=!1:this.inputLayer===t||t.analysisReady&&this.inputLayer.analysisReady||(i=!1),t.geometryType===U.GeometryTypes.Point&&!i){var s=this.predictAtPointLayer&&(this.predictAtPointLayer.name===t.name||this.predictAtPointLayer.url===t.url);n.push({value:e+1,label:t.name,selected:s})}},this),(this.get("showReadyToUseLayers")||this.get("showBrowseLayers")||e||i)&&n.push({type:"separator",value:""}),this._predictPointSelect.addOption(n),J.addBrowseOptionForTool({select:this._predictPointSelect,disableLAAL:!1},this)))},_handleAnalysisLayerChange:function(t){this._selectedwidget=0,this._isAnalysisSelect=!0,"browse"===t||"browselayers"===t?this._createBrowseItems({browseValue:t,disabledSubResources:[this.inputLayer]},{tags:["point"],geometryTypes:[U.GeometryTypes.Point,U.GeometryTypes.MultiPoint]},this._analysisSelect):(this.inputLayer=this.inputLayers[t],this._updateAnalysisLayerUI(!0))},_handleBrowseItemsSelect:function(t,e){var s={};t&&t.selection&&x.isDefined(this._selectedwidget)&&(0===this._selectedwidget?(s.layers=this.inputLayers,s.layersSelect=this._analysisSelect):1===this._selectedwidget?(s.layers=this.boundingPolygonLayers,s.layersSelect=this._boundingAreaSelect,s.posIncrement=1):2===this._selectedwidget&&(s.layers=this.predictAtPointLayers,s.layersSelect=this._predictPointSelect,s.posIncrement=1),s.item=t.selection,s.browseDialog=t.dialog||this._browsedlg,s.widget=this,J.addAnalysisReadyLayer(s,e).always(i.hitch(this,function(){0===this._selectedwidget&&this._handleAnalysisLayerChange(this._analysisSelect.get("value"))})))},_handleMethodChange:function(t){"NN"===t?(y.add(this._optionsDiv,"disabled"),y.contains(this._optionsDiv,"optionsOpen")&&(y.remove(this._optionsDiv,"optionsOpen"),y.add(this._optionsDiv,"optionsClose"))):(y.contains(this._optionsDiv,"disabled")&&y.remove(this._optionsDiv,"disabled"),"KG"===t?(u.set(this._barrierLabelRow,"display","none"),u.set(this._barrierSelectRow,"display","none"),u.set(this._speedLabelRow,"display",""),u.set(this._speedSliderRow,"display","")):"LP"===t&&(u.set(this._barrierLabelRow,"display",""),u.set(this._barrierSelectRow,"display",""),u.set(this._speedLabelRow,"display","none"),u.set(this._speedSliderRow,"display","none")))},_handleOptimizeSliderChange:function(t){this.set("interpolateOption",this._optimizeSlider.get("value"))},_handleFieldChange:function(t){},_handleOptionsBtnClick:function(){y.contains(this._optionsDiv,"disabled")||(y.contains(this._optionsDiv,"optionsClose")?(y.remove(this._optionsDiv,"optionsClose"),y.add(this._optionsDiv,"optionsOpen")):y.contains(this._optionsDiv,"optionsOpen")&&(y.remove(this._optionsDiv,"optionsOpen"),y.add(this._optionsDiv,"optionsClose")))},_handleBoundingSelectChange:function(t){this._selectedwidget=1,"browse"!==t&&"browselayers"!==t||this._createBrowseItems({browseValue:t},{tags:["polygon"],geometryTypes:[U.GeometryTypes.Polygon]},this._boundingAreaSelect)},_handleClick:function(t){},_handlePredictPointSelectChange:function(t){this._selectedwidget=2,"browse"!==t&&"browselayers"!==t||this._createBrowseItems({browseValue:t},{tags:["point"],geometryTypes:[U.GeometryTypes.Point,U.GeometryTypes.MultiPoint]},this._predictPointSelect)},_handleBoundingBtnChange:function(t){t?(this.emit("drawtool-activate",{}),this._featureLayer||this._createBoundingPolyFeatColl(),this._predictPointDrawBtn.set("checked",!1),this._toolbar.activate(M.POLYGON)):(this._toolbar.deactivate(),this._predictPointDrawBtn.get("checked")||this.emit("drawtool-deactivate",{}))},_handlePredictPointChange:function(t){t?(this.emit("drawtool-activate",{}),this._pointfeatureLayer||this._createPointFeatColl(),this._pointtoolbar.activate(M.POINT),this._bndgPolyDrawBtn.set("checked",!1)):(this._pointtoolbar.deactivate(),this._bndgPolyDrawBtn.get("checked")||this.emit("drawtool-deactivate",{}))},_handleClassifySelectChange:function(t){u.set(this._classifyOtherOptionLabelRow,"display","Manual"===t?"none":"block"),u.set(this._classifyOtherOptionInputRow,"display","Manual"===t?"none":"block"),u.set(this._manualOptionInputRow,"display","Manual"===t?"block":"none"),u.set(this._manualOptionLabelRow,"display","Manual"===t?"block":"none")},_loadConnections:function(){this.on("start",i.hitch(this,"_onClose",!1)),this._connect(this._closeBtn,"onclick",i.hitch(this,"_onClose",!0))},_createBoundingPolyFeatColl:function(){var t=J.createPolygonFeatureCollection(this.drawLayerName);this._featureLayer=new G(t,{id:this.drawLayerName}),this.map.addLayer(this._featureLayer),n.connect(this._featureLayer,"onClick",i.hitch(this,function(t){this.map.infoWindow.setFeatures([t.graphic])}))},_addFeatures:function(t){var e=[],i={},n=new z(t);if(i.description="blayer desc",i.title="blayer",n.setAttributes(i),e.push(n),this._featureLayer.applyEdits(e,null,null),0===this.boundingPolygonLayers.length||this.boundingPolygonLayers[this.boundingPolygonLayers.length-1]!==this._featureLayer){var o=this.boundingPolygonLayers.push(this._featureLayer),a=this._boundingAreaSelect.getOptions();this._boundingAreaSelect.removeOption(a),a=s.map(a,function(t){return t.selected=!1,t}),a.push({value:o,label:this._featureLayer.name,selected:!0}),this._boundingAreaSelect.addOption(a)}},_createPointFeatColl:function(){var t=J.createPointFeatureCollection(this.drawPointLayerName);this._pointfeatureLayer=new G(t,{id:this.drawPointLayerName}),this.map.addLayer(this._pointfeatureLayer),n.connect(this._pointfeatureLayer,"onClick",i.hitch(this,function(t){this.map.infoWindow.setFeatures([t.graphic])}))},_addPointFeatures:function(t){var e=[],i={},n=new z(t);if(i.description="blayer desc",i.title="blayer",n.setAttributes(i),e.push(n),this._pointfeatureLayer.applyEdits(e,null,null),0===this.predictAtPointLayers.length||this.predictAtPointLayers[this.predictAtPointLayers.length-1]!==this._pointfeatureLayer){var o=this.predictAtPointLayers.push(this._pointfeatureLayer),a=this._predictPointSelect.getOptions();this._predictPointSelect.removeOption(a),a=s.map(a,function(t){return t.selected=!1,t}),this._predictPointSelect.addOption({value:o,label:this._pointfeatureLayer.name,selected:!0}),this._predictPointSelect.addOption(a)}},validateServiceName:function(t){return J.validateServiceName(t,{textInput:this._outputLayerInput,isItem:!this.returnFeatureCollection})},validateClassBreaks:function(){var t,e,n,o=[],a=[];return t=i.trim(this._classBreaksInput.get("value")).split(" "),"Manual"!==this.get("classificationType")||!(!t&&"Manual"===this.get("classificationType"))&&(!(t.length<2||t.length>this.maxClasses)&&(s.some(t,function(r,l){return r=_.parse(r),isNaN(r)?(o.push(0),!1):a[t[l]]?(a[t[l]]=!1,o.push(0),!1):(a[t[l]]=!0,e=_.format(r,{locale:"root"}),x.isDefined(e)?x.isDefined(e)||(e=_.format(r,{locale:"en-us"})):e=_.format(r,{locale:"en"}),x.isDefined(e)&&(n=i.trim(e).match(/\D/g)),void(n&&n.length>0&&n&&s.forEach(n,function(t,e){"."===t||","===t||"-"===t&&0===e?o.push(1):o.push(0)})))}),-1===s.indexOf(o,0)))},_setAnalysisGpServerAttr:function(t){t&&(this.analysisGpServer=t,this.set("toolServiceUrl",this.analysisGpServer+"/"+this.toolName))},_setInputLayerAttr:function(t){this.inputLayer=t},_getInputLayerAttr:function(){return this.inputLayer},_setInputLayersAttr:function(t){this.inputLayers=t||[]},_setFieldsAttr:function(t){var e,i,n=t.fields;this._fieldSelect&&this._fieldSelect.removeOption(this._fieldSelect.getOptions()),s.forEach(n,function(n,o){n.name!==t.objectIdField&&-1!==s.indexOf(["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],n.type)&&(e={value:n.name,label:x.isDefined(n.alias)&&""!==n.alias?n.alias:n.name},this.field&&e.value===this.field&&(e.selected=!0,i=n.name),this._fieldSelect.addOption(e))},this),i&&this._fieldSelect.set("value",i)},_setFieldAttr:function(t){this.field=t},_getFieldAttr:function(){return this._fieldSelect&&(this.field=this._fieldSelect.get("value")),this.field},_setInterpolateOptionAttr:function(t){this.interpolateOption=t},_getInterpolateOptionAttr:function(){return this._optimizeSlider&&(this.interpolateOption=Math.floor(this._optimizeSlider.get("value"))),this.interpolateOption},_setClassificationTypeAttr:function(t){this.classificationType=t},_getClassificationTypeAttr:function(){return this._classifySelect&&(this.classificationType=this._classifySelect.get("value")),this.classificationType},_getNumClassesAttr:function(){return this._numClassesInput&&(this.numClasses=this._numClassesInput.get("value")),this.numClasses},_setNumClassesAttr:function(t){this.numClasses=t},_setMaxClassesAttr:function(t){this.maxClasses=t},_getMaxClassesAttr:function(){return this.maxClasses},_setMinClassesAttr:function(t){this.minClasses=t},_getMinClassesAttr:function(){return this.minClasses},_getClassBreaksAttr:function(){if(this._classBreaksInput){var t=i.trim(this._classBreaksInput.get("value")).split(" "),e=[];s.forEach(t,function(t){e.push(_.parse(t))}),this.classBreaks=e}return this.classBreaks},_setClassBreaksAttr:function(t){t&&(this.classBreaks=t)},_getBoundingPolygonLayerAttr:function(){return this._boundingAreaSelect&&(this.boundingPolygonLayer=null,"-1"!==this._boundingAreaSelect.get("value")&&(this.boundingPolygonLayer=this.boundingPolygonLayers[this._boundingAreaSelect.get("value")-1])),this.boundingPolygonLayer},_setBoundingPolygonLayerAttr:function(t){this.boundingPolygonLayer=t},_setBoundingPolygonLayersAttr:function(t){this.boundingPolygonLayers=t||[]},_getPredictAtPointLayerAttr:function(){return this._predictPointSelect&&(this.predictAtPointLayer=null,"-1"!==this._predictPointSelect.get("value")&&(this.predictAtPointLayer=this.predictAtPointLayers[this._predictPointSelect.get("value")-1])),this.predictAtPointLayer},_setPredictAtPointLayerAttr:function(t){this.predictAtPointLayer=t},_setPredictAtPointLayersAttr:function(t){this.predictAtPointLayers=t||[]},_getOutputPredictionErrorAttr:function(){return this._outoutPredictionsErrCheck&&(this.outputPredictionError=this._outoutPredictionsErrCheck.get("checked")),this.outputPredictionError},_setOutputPredictionErrorAttr:function(t){this.outputPredictionError=t},_getOutputLayerNameAttr:function(){return this._outputLayerInput&&(this.outputLayerName=this._outputLayerInput.get("value")),this.outputLayerName},_setOutputLayerNameAttr:function(t){this.outputLayerName=t},_setMapAttr:function(t){this.map=t,this._toolbar=new M(this.map),n.connect(this._toolbar,"onDrawEnd",i.hitch(this,this._addFeatures)),this._pointtoolbar=new M(this.map),n.connect(this._pointtoolbar,"onDrawEnd",i.hitch(this,this._addPointFeatures))},_getMapAttr:function(){return this.map},_setDrawLayerNameAttr:function(t){this.drawLayerName=t},_getDrawLayerNameAttr:function(){return this._featureLayer.name},_setDrawPointLayerNameAttr:function(t){this.drawPointLayerName=t},_getDrawPointLayerNameAttr:function(){return this._pointfeatureLayer.name},_setDisableRunAnalysisAttr:function(t){this._saveBtn.set("disabled",t)},_getDrawLayerAttr:function(){var t=[];return this._featureLayer&&t.push(this._featureLayer),this._pointfeatureLayer&&t.push(this._pointfeatureLayer),t},_setDisableExtentAttr:function(t){this._useExtentCheck.set("checked",!t),this._useExtentCheck.set("disabled",t)},_getDisableExtentAttr:function(){this._useExtentCheck.get("disabled")},_connect:function(t,e,i){this._pbConnects.push(n.connect(t,e,i))}});return r("extend-esri")&&i.setObject("dijit.analysis.InterpolatePoints",X,N),X});