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

define(["../../../../kernel","../../utils","../../AnalysisRegistry","dijit/form/Select","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/Tooltip","dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/has","dojo/dom-construct","dojo/Evented","dojo/on","dojo/i18n!../../nls/AddExplanatoryFields","dojo/i18n!../../../../nls/jsapi","dojo/text!./AddExplanatoryFields.html"],function(e,t,i,a,n,l,o,s,d,r,c,h,p,u,g,y,_){var f=s([n,l,p],{declaredClass:"esri.dijit.analysis.components.AddExplanatoryFields.AddExplanatoryFields",templateString:_,i18n:{},featuresToPredict:{},explanatoryVariableMatching:[],value:[],_hidden:!0,_allRowWidgets:[],constructor:function(e){},postMixInProperties:function(){this.inherited(arguments),d.mixin(this.i18n,g),d.mixin(this.i18n,y.analysisTools)},postCreate:function(){this.inherited(arguments),this._loadConnections()},destroy:function(){this.inherited(arguments)},startup:function(){this.inherited(arguments)},enable:function(){this._hidden=!1,r.remove(this._componentWidget,"hide")},disable:function(){this._hidden=!0,r.add(this._componentWidget,"hide")},_loadConnections:function(){this.own(u(this._warningIcon,"click",d.hitch(this,function(e){this._displayWarningMessage(!0)})),u(this._warningIcon,"blur",d.hitch(this,function(e){this._displayWarningMessage(!1)})))},addRows:function(e){var t,i;this.removeAllRows(),e.forEach(function(e){t=h.create("tr",null,this._emptyRow,"before"),this._createExplanatoryField(t,e.label),i=this._createMatchingField({trElement:t,explanatoryFieldName:e.value,explanatoryFieldType:e.type}),this._allRowWidgets.push({trElement:t,selectWidget:i,explanatoryFieldLabel:e.label,explanatoryFieldName:e.value})},this),this.validate()},_createExplanatoryField:function(e,t){h.create("td",{class:"padTop05 width-50"},e).innerHTML=t},_createMatchingField:function(e){var n,l;if(e.trElement&&e.explanatoryFieldName&&e.explanatoryFieldType)return n=h.create("td",{class:"padTop05 width-50"},e.trElement),l=new a({class:"attrSelect esriTableFixedLayout esriMediumlabel2"},h.create("select",null,n)),l.startup(),t.addAttributeOptions({selectWidget:l,layer:this.featuresToPredict,allowSelectLabel:!1,priorityChange:!1,allowStringType:e.explanatoryFieldType===i.PseudoFieldTypes.String,allowNumericType:e.explanatoryFieldType===i.PseudoFieldTypes.Number,allowDateType:e.explanatoryFieldType===i.PseudoFieldTypes.Date}),l.set("value",e.explanatoryFieldName),l},removeAllRows:function(){this._allRowWidgets.forEach(function(e){this._removeRow(e,!0)},this),this._allRowWidgets=[]},_removeRow:function(e,t){e&&e.selectWidget&&e.trElement&&(e.selectWidget.destroyRecursive(),h.destroy(e.trElement),t||this._updateAllRowWidgetsArray(e.explanatoryFieldName))},_updateAllRowWidgetsArray:function(e){var t;for(t=0;t<this._allRowWidgets.length;t++)if(this._allRowWidgets[t].explanatoryFieldName===e){this._allRowWidgets.splice(t,1);break}},_updateSelectOptions:function(e){this._allRowWidgets.forEach(function(i){t.addAttributeOptions({selectWidget:i.selectWidget,layer:e,allowSelectLabel:!1}),i.selectWidget.set("value",i.explanatoryField)})},_setExplanatoryVariableMatchingAttr:function(e){e&&this._allRowWidgets.forEach(function(t,i){t.selectWidget.set("value",e[i].predictionLayerField)})},_getExplanatoryVariableMatchingAttr:function(){var e,t=[];return this._hidden||this._allRowWidgets.forEach(function(i){(e=i.selectWidget.get("value"))&&t.push({predictionLayerField:e,trainingLayerField:i.explanatoryFieldName})}),t},validate:function(){var e,t=this.get("explanatoryVariableMatching");return e=this._hidden||t.length===this._allRowWidgets.length,this._displayWarningIcon(!e),e},focus:function(){var e;for(e=0;e<this._allRowWidgets.length;e++)if(!this._allRowWidgets[e].selectWidget.get("value"))return void this._allRowWidgets[e].selectWidget.focus()},_displayWarningMessage:function(e){e?o.show(this.i18n.requiredValue,this._warningIcon):o.hide(this._warningIcon)},_displayWarningIcon:function(e){r.toggle(this._warningIcon,"hide",!e)}});return c("extend-esri")&&d.setObject("esri.dijit.analysis.components.AddExplanatoryFields.AddExplanatoryFields",f,e),f});