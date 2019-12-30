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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/sniff","dojo/_base/kernel","dojo/has","dojo/dom-style","dojo/dom-construct","../kernel","../lang","../domUtils","../layers/InheritedDomain","../layers/FeatureLayer","dojo/i18n!../nls/jsapi","dojo/fx","dojox/gfx","dijit/_Widget","dijit/_Templated","dijit/Editor","dijit/_editor/plugins/LinkDialog","dijit/_editor/plugins/TextColor","./_EventedWidget","./editing/AttachmentEditor","./editing/Util","../tasks/query","dijit/form/DateTextBox","dijit/form/TextBox","dijit/form/NumberTextBox","dijit/form/FilteringSelect","dijit/form/NumberSpinner","dijit/form/Button","dijit/form/SimpleTextarea","dijit/form/ValidationTextBox","dijit/form/TimeTextBox","dijit/Tooltip","dojo/data/ItemFileReadStore","dojox/date/islamic","dojox/date/islamic/Date","dojox/date/islamic/locale","dojo/text!./templates/AttributeInspector.html"],function(e,t,i,s,n,a,r,l,o,d,u,h,c,f,_,m,F,I,p,y,g,T,b,v,L,E,x,N,j,D,C,S,V,w,A,O,R,k,P,B,q){var U=e([b,I,p],{declaredClass:"esri.dijit.AttributeInspector",widgetsInTemplate:!0,templateString:q,onUpdate:function(){},onDelete:function(){},onAttributeChange:function(){},onNext:function(){},onReset:function(){},onCancel:function(){},_navMessage:"( ${idx} ${of} ${numFeatures} )",_currentAttributeFieldName:null,_aiConnects:[],_selection:[],_toolTips:[],_numFeatures:0,_featureIdx:0,_currentLInfo:null,_currentFeature:null,_rollbackInfo:null,_eventMap:{update:!0,delete:["feature"],"attribute-change":["feature","fieldName","fieldValue"],next:["feature"],reset:!0,cancel:!0},_defaultRichTextPlugins:["bold","italic","underline","foreColor","hiliteColor","|","justifyLeft","justifyCenter","justifyRight","justifyFull","|","insertOrderedList","insertUnorderedList","indent","outdent","|","createLink"],css:{label:"atiLabel",field:"atiField",textArea:"atiTextAreaField",richText:"atiRichTextField",attachmentEditor:"atiAttachmentEditor",red:"atiRequiredField"},constructor:function(e,s){t.mixin(this,_.widgets.attributeInspector),e=e||{},e.featureLayer||e.layerInfos||console.error("esri.AttributeInspector: please provide correct parameter in the constructor"),this._datePackage=this._getDatePackage(e),this._layerInfos=e.layerInfos||[{featureLayer:e.featureLayer,options:e.options||[]}],this._layerInfos=i.filter(this._layerInfos,function(e){return!e.disableAttributeUpdate}),this._hideNavButtons=e.hideNavButtons||!1},postCreate:function(){if(i.every(this._layerInfos,function(e){return e.featureLayer.loaded}))this._initLayerInfos(),this._createAttachmentEditor(),this.onFirstFeature();else{var e=this._layerInfos.length;i.forEach(this._layerInfos,function(t){var i=t.featureLayer;if(i.loaded)e--;else var n=s.connect(i,"onLoad",this,function(t){s.disconnect(n),n=null,--e||(this._initLayerInfos(),this._createAttachmentEditor(),this.onFirstFeature())})},this)}},destroy:function(){this._destroyAttributeTable(),i.forEach(this._aiConnects,s.disconnect),delete this._aiConnects,this._attachmentEditor&&(this._attachmentEditor.destroy(),delete this._attachmentEditor),delete this._layerInfos,this._selection=this._currentFeature=this._currentLInfo=this._attributes=this._layerInfos=null,this.inherited(arguments)},refresh:function(){this._updateSelection()},first:function(){this.onFirstFeature()},last:function(){this.onLastFeature()},next:function(){this.onNextFeature()},previous:function(){this.onPreviousFeature()},showFeature:function(e,t){t&&(this._createOnlyFirstTime=!0),this._updateSelection([e],t),this._updateUI()},onLayerSelectionChange:function(e,t,i){this._createOnlyFirstTime=!1,this._featureIdx=i===f.SELECTION_NEW?0:this._featureIdx,this._updateSelection(),this._updateUI()},onLayerSelectionClear:function(){!this._selection||this._selection.length<=0||(this._numFeatures=0,this._featureIdx=0,this._selection=[],this._currentFeature=null,this._currentLInfo=null,this._updateUI())},onLayerUpdateEnd:function(e,t,i,s){},onLayerError:function(e,t,i,s){},onLayerEditsError:function(e,t,i,s){},onLayerEditsComplete:function(e,s,n,a){if(a=a||[],a.length){var r=this._selection,l=e.featureLayer.objectIdField;i.forEach(a,t.hitch(this,function(e){i.some(r,t.hitch(this,function(t,i){return t.attributes[l]===e.objectId&&(this._selection.splice(i,1),!0)}))}))}s=s||[],s.length&&(this._selection=L.findFeatures(s,e.featureLayer),this._featureIdx=0),this._selection=L.sortFeaturesById(this._layerInfos,this._selection);var o=this._numFeatures=this._selection?this._selection.length:0;if(s.length){var d=o?this._selection[this._featureIdx]:null;if(d){var u=d.getLayer(),h=u.getEditCapabilities();h.canCreate&&!h.canUpdate||this._showFeature(d)}this._updateUI()}if(n=n||[],n.length){var c=this._rollbackInfo;i.forEach(n,function(t){var s=L.findFeatures(n,e.featureLayer)[0];if(!t.success&&s.attributes[e.featureLayer.objectIdField]===t.objectId&&c){var a=c.field,r=c.graphic,l=r.attributes[a.name],o=i.filter(this._currentLInfo.fieldInfos,function(e){return e.fieldName===a.name},this)[0],d=o.dijit;s.attributes[a.name]=l,"esriFieldTypeDate"===a.type&&(l=new Date(l)),this._setValue(d,l)}},this)}this._rollbackInfo=null},onFieldValueChange:function(e,t){var s=e.field,n=e.dijit,a=this._currentFeature,r=this._currentLInfo,l=s.name,o=this._isFieldRequired(s,e);if(""!==n.displayedValue&&"dijit.form.ValidationTextBox"===n.declaredClass&&!n.isValid())return void this._setValue(n,a.attributes[s.name]);if(""!==n.displayedValue&&n.displayedValue!==t&&n.isValid&&!n.isValid())return void this._setValue(n,a.attributes[s.name]);var d=!("esriFieldTypeInteger"!==s.type&&"esriFieldTypeSmallInteger"!==s.type&&"esriFieldTypeSingle"!==s.type&&"esriFieldTypeDouble"!==s.type);if(o&&(null===t||""===t||void 0===t||d&&isNaN(t))){var u=a.attributes[s.name];return"esriFieldTypeDate"===s.type&&(u=new Date(u),n instanceof Array)?(this._setValue(n[0],u),void this._setValue(n[1],u)):void this._setValue(n,u)}if(d&&((isNaN(t)||""===t)&&(t=null),d&&null!==t&&(t=Number(t))),"esriFieldTypeDate"===s.type){if(n instanceof Array){var h=n[0].getValue(),c=n[1].getValue();t=h&&c?new Date(h.getFullYear(),h.getMonth(),h.getDate(),c.getHours(),c.getMinutes(),c.getSeconds(),c.getMilliseconds()):h||c||null}else t=n.getValue(),s.domain&&(t=Number(t));t=t&&t.getTime?t.getTime():t&&t.toGregorian?t.toGregorian().getTime():t}if(this._currentFeature.attributes[s.name]!==t){if(l===r.typeIdField){var f=this._findFirst(r.types,"id",t),_=r.fieldInfos;i.forEach(_,function(e){if((s=e.field)&&s.name!==r.typeIdField){var t=e.dijit;this._setFieldDomain(t,f,s)&&t&&(this._setValue(t,a.attributes[s.name]+""),!1===t.isValid()&&this._setValue(t,null))}},this)}this.onAttributeChange(a,l,t)}},onDeleteBtn:function(e){this._deleteFeature()},onNextFeature:function(e){this._onNextFeature(1)},onPreviousFeature:function(e){this._onNextFeature(-1)},onFirstFeature:function(e){this._onNextFeature(-1*this._featureIdx)},onLastFeature:function(e){this._onNextFeature(this._numFeatures-1-this._featureIdx)},_initLayerInfos:function(){var e=this._layerInfos;this._editorTrackingInfos={},i.forEach(e,this._initLayerInfo,this)},_initLayerInfo:function(e){var s,n,a=e.featureLayer;this._userIds={};var r=a.id;a.credential&&(this._userIds[r]=a.credential.userId),e.userId&&(this._userIds[r]=e.userId),this._connect(a,"onSelectionComplete",t.hitch(this,"onLayerSelectionChange",e)),this._connect(a,"onSelectionClear",t.hitch(this,"onLayerSelectionClear",e)),this._connect(a,"onEditsComplete",t.hitch(this,"onLayerEditsComplete",e)),this._connect(a,"error",t.hitch(this,"onLayerError",e)),this._connect(a,"onUpdateEnd",t.hitch(this,"onLayerUpdateEnd",e)),e.showAttachments=!!a.hasAttachments&&(!u.isDefined(e.showAttachments)||e.showAttachments),e.hideFields=e.hideFields||[],e.htmlFields=e.htmlFields||[],e.isEditable=!!a.isEditable()&&(!u.isDefined(e.isEditable)||e.isEditable),e.typeIdField=a.typeIdField,e.layerId=a.id,e.types=a.types,a.globalIdField&&((s=this._findFirst(e.fieldInfos,"fieldName",a.globalIdField))||e.showGlobalID||e.hideFields.push(a.globalIdField)),(n=this._findFirst(e.fieldInfos,"fieldName",a.objectIdField))||e.showObjectID||e.hideFields.push(a.objectIdField);var l=this._getFields(e.featureLayer);if(l){var o=e.fieldInfos||[];o=i.map(o,function(e){return t.mixin({},e)}),o.length?e.fieldInfos=i.filter(i.map(o,t.hitch(this,function(i){var s=i.stringFieldOption||(this._isInFields(i.fieldName,e.htmlFields)?U.STRING_FIELD_OPTION_RICHTEXT:U.STRING_FIELD_OPTION_TEXTBOX);return t.mixin(i,{field:this._findFirst(l,"name",i.fieldName),stringFieldOption:s})})),"return item.field;"):(l=i.filter(l,t.hitch(this,function(t){return!this._isInFields(t.name,e.hideFields)})),e.fieldInfos=i.map(l,t.hitch(this,function(t){var i=this._isInFields(t.name,e.htmlFields)?U.STRING_FIELD_OPTION_RICHTEXT:U.STRING_FIELD_OPTION_TEXTBOX;return{fieldName:t.name,field:t,stringFieldOption:i}}))),e.showGlobalID&&!s&&o.push(this._findFirst(l,"name",a.globalIdField)),e.showObjectID&&!n&&o.push(this._findFirst(l,"name",a.objectIdField));var d=[];a.editFieldsInfo&&(a.editFieldsInfo.creatorField&&d.push(a.editFieldsInfo.creatorField),a.editFieldsInfo.creationDateField&&d.push(a.editFieldsInfo.creationDateField),a.editFieldsInfo.editorField&&d.push(a.editFieldsInfo.editorField),a.editFieldsInfo.editDateField&&d.push(a.editFieldsInfo.editDateField)),this._editorTrackingInfos[a.id]=d}},_createAttachmentEditor:function(){this._attachmentEditor=null;var e=this._layerInfos,t=i.filter(e,function(e){return e.showAttachments});t&&t.length&&(this._attachmentEditor=new v({class:this.css.attachmentEditor},this.attachmentEditor),this._attachmentEditor.startup())},_setCurrentLInfo:function(e){var t=this._currentLInfo?this._currentLInfo.featureLayer:null,i=e.featureLayer;if(t&&t.id===i.id&&!t.ownershipBasedAccessControlForFeatures){var s=i.getEditCapabilities();if(!s.canCreate||s.canUpdate)return}this._currentLInfo=e,this._createTable()},_updateSelection:function(e,t){this._selection=e||[];var s=this._layerInfos;i.forEach(s,this._getSelection,this),this._selection=L.sortFeaturesById(this._layerInfos,this._selection),this._numFeatures=this._selection.length;var n=this._numFeatures?this._selection[this._featureIdx]:null;this._showFeature(n,t)},_getSelection:function(e){var t=e.featureLayer.getSelectedFeatures();this._selection=this._selection.concat(t)},_updateUI:function(){var e=this._numFeatures,t=this._currentLInfo;this.layerName.innerHTML=t&&0!==e?t.featureLayer?t.featureLayer.name:"":this.NLS_noFeaturesSelected,l.set(this.attributeTable,"display",e?"":"none"),l.set(this.editButtons,"display",e?"":"none"),l.set(this.navButtons,"display",!this._hideNavButtons&&e>1?"":"none"),this.navMessage.innerHTML=u.substitute({idx:this._featureIdx+1,of:this.NLS_of,numFeatures:this._numFeatures},this._navMessage),this._attachmentEditor&&l.set(this._attachmentEditor.domNode,"display",t&&t.showAttachments&&e?"":"none");var i=!(t&&!1===t.showDeleteButton||!this._canDelete);l.set(this.deleteBtn.domNode,"display",i?"":"none"),this.domNode.parentNode&&this.domNode.parentNode.scrollTop>0&&(this.domNode.parentNode.scrollTop=0)},_onNextFeature:function(e){this._featureIdx+=e,this._featureIdx<0?this._featureIdx=this._numFeatures-1:this._featureIdx>=this._numFeatures&&(this._featureIdx=0);var t=this._selection.length?this._selection[this._featureIdx]:null;this._showFeature(t),this._updateUI(),this.onNext(t)},_deleteFeature:function(){this.onDelete(this._currentFeature)},_showFeature:function(e,s){if(e){this._currentFeature=e;var n=s||e.getLayer(),a=n.getEditCapabilities({feature:e,userId:this._userIds[n.id]});this._canUpdate=a.canUpdate,this._canDelete=a.canDelete;var r=this._getLInfoFromFeatureLayer(n);if(r){this._setCurrentLInfo(r);var l=e.attributes,o=this._findFirst(r.types,"id",l[r.typeIdField]),d=null,c=r.fieldInfos;i.forEach(c,function(e){d=e.field;var s=[];e.dijit&&e.dijit.length>1?i.forEach(e.dijit,function(e){s.push(e)}):s.push(e.dijit),i.forEach(s,t.hitch(this,function(e){if(e){var t=this._setFieldDomain(e,o,d),i=l[d.name];i=i&&t&&t.codedValues&&t.codedValues.length&&t.codedValues[i]?t.codedValues[i].name:i,u.isDefined(i)||(i=""),"dijit.form.DateTextBox"===e.declaredClass||"dijit.form.TimeTextBox"===e.declaredClass?i=""===i?null:new Date(i):"dijit.form.FilteringSelect"===e.declaredClass&&(e._lastValueReported=null,i=l[d.name]+"");try{this._setValue(e,i),"dijit.form.FilteringSelect"===e.declaredClass&&!1===e.isValid()&&this._setValue(e,null)}catch(t){e.set("displayedValue",this.NLS_errorInvalid,!1)}}}))},this),this._attachmentEditor&&r.showAttachments&&this._attachmentEditor.showAttachments(this._currentFeature,n);var f=n.getEditSummary(e);f?(this.editorTrackingInfoDiv.innerHTML=f,h.show(this.editorTrackingInfoDiv)):h.hide(this.editorTrackingInfoDiv)}}},_setFieldDomain:function(e,t,s){if(!e)return null;var n=s.domain;return t&&t.domains&&t.domains[s.name]&&t.domains[s.name]instanceof c==!1&&(n=t.domains[s.name]),n?(n.codedValues&&n.codedValues.length>0?(e.set("store",this._toStore(i.map(n.codedValues,function(e){return{id:e.code+="",name:e.name}}))),this._setValue(e,n.codedValues[0].code)):(e.constraints={min:u.isDefined(n.minValue)?n.minValue:Number.MIN_VALUE,max:u.isDefined(n.maxValue)?n.maxValue:Number.MAX_VALUE},this._setValue(e,e.constraints.min)),n):null},_setValue:function(e,t){e.set&&(e._onChangeActive=!1,e.set("value",t,!0),e._onChangeActive=!0)},_getFields:function(e){var s=e._getOutFields();if(!s)return null;var n=e.fields;return"*"==s?n:i.filter(i.map(s,t.hitch(this,"_findFirst",n,"name")),u.isDefined)},_isInFields:function(e,t){return!(!e||!t&&!t.length)&&i.some(t,function(t){return t.toLowerCase()===e.toLowerCase()})},_isFieldNullable:function(e,t){return!(!1===e.nullable||t.field&&!1===t.field.nullable)},_isFieldRequired:function(e,t){return!1!==e.editable&&!1!==t.isEditable&&!this._isFieldNullable(e,t)},_findFirst:function(e,t,s){var n=i.filter(e,function(e){return e.hasOwnProperty(t)&&e[t]===s});return n&&n.length?n[0]:null},_getLInfoFromFeatureLayer:function(e){var t=e?e.id:null;return this._findFirst(this._layerInfos,"layerId",t)},_createTable:function(){this._destroyAttributeTable(),this.attributeTable.innerHTML="",this._attributes=o.create("table",{cellspacing:"0",cellpadding:"0"},this.attributeTable);var e=o.create("tbody",null,this._attributes),s=this._currentFeature,n=this._currentLInfo,a=this._findFirst(n.types,"id",s.attributes[n.typeIdField]),r=n.fieldInfos;i.forEach(r,t.hitch(this,"_createField",a,e),this),this._createOnlyFirstTime=!1},_createField:function(e,i,s){var n=this._currentLInfo,a=s.field;if(!this._isInFields(a.name,n.hideFields)&&!this._isInFields(a.name,this._editorTrackingInfos[n.featureLayer.id])){var r,l,d,u,h,c,f,_=!1;if(r=o.create("tr",null,i),l=o.create("td",{innerHTML:s.label||a.alias||a.name,class:this.css.label,"data-fieldname":a.name},r),this._isFieldRequired(a,s)&&o.create("span",{class:this.css.red,innerHTML:" *"},l),d=o.create("td",null,r),s.customField?(o.place(s.customField.domNode||s.customField,o.create("div",null,d),"first"),u=s.customField):!1!==n.isEditable&&!1!==a.editable&&!1!==s.isEditable&&"esriFieldTypeOID"!==a.type&&"esriFieldTypeGlobalID"!==a.type&&(this._canUpdate||this._createOnlyFirstTime)||(_=!0),c=n.typeIdField&&a.name.toLowerCase()==n.typeIdField.toLowerCase(),f=!!this._getDomainForField(a,e),!u&&c?u=this._createTypeField(a,s,d):!u&&f&&(u=this._createDomainField(a,s,e,d)),!u)switch(a.type){case"esriFieldTypeString":u=this._createStringField(a,s,d);break;case"esriFieldTypeDate":u=this._createDateField(a,s,d),s.format&&s.format.time&&(h=this._createTimeField(a,s,d));break;case"esriFieldTypeInteger":case"esriFieldTypeSmallInteger":u=this._createIntField(a,s,d);break;case"esriFieldTypeSingle":case"esriFieldTypeDouble":u=this._createFltField(a,s,d);break;default:u=this._createStringField(a,s,d)}s.tooltip&&s.tooltip.length&&this._toolTips.push(new O({connectId:[u.id],label:s.tooltip})),u.onChange=t.hitch(this,"onFieldValueChange",s),u.set("disabled",_),h?(s.dijit=[u,h],h.onChange=t.hitch(this,"onFieldValueChange",s),h.set("disabled",_)):s.dijit=u}},_createTypeField:function(e,t,s){var n=o.create("div",null,s),a=e.domain;return a&&"range"===a.type&&a.minValue===a.maxValue?new w({class:this.css.field,trim:!0,maxLength:e.length,name:e.alias||e.name,required:this._isFieldRequired(e,t)},n):new D({class:this.css.field,name:e.alias||e.name,required:this._isFieldRequired(e,t),store:this._toStore(i.map(this._currentLInfo.types,function(e){return{id:e.id,name:e.name}})),searchAttr:"name"},n)},_getDomainForField:function(e,t){var i=e.domain,s=e.name;return s&&t&&t.domains&&t.domains[s]&&t.domains[s]instanceof c==!1&&(i=t.domains[s]),i||null},_createDomainField:function(e,t,i,s){var n=this._getDomainForField(e,i),a=o.create("div",null,s);return n.codedValues?new D({class:this.css.field,name:e.alias||e.name,searchAttr:"name",required:this._isFieldRequired(e,t)},a):new C({class:this.css.field},a)},_createStringField:function(e,t,i){var s=o.create("div",null,i),n={trim:!0,maxLength:e.length,required:this._isFieldRequired(e,t)};if(t.stringFieldOption===U.STRING_FIELD_OPTION_TEXTAREA)return n.class=this.css.field+" "+this.css.textArea,new V(n,s);if(t.stringFieldOption===U.STRING_FIELD_OPTION_RICHTEXT){n.class=this.css.field+" "+this.css.richText,n.height="100%",n.width="100%",n.plugins=t.richTextPlugins||this._defaultRichTextPlugins;var a=new y(n,s);return a.startup(),a}var r=this;return n.validator=function(i,s){return this._maskValidSubsetError=!1,this._hasBeenBlurred=!0,r._isFieldNullable(e,t)||!(""===i||null===i)},new w(n,s)},_createTimeField:function(e,t,i){var s=o.create("div",null,i),n={class:this.css.field,trim:!0,required:this._isFieldRequired(e,t),constraints:{formatLength:"medium"}};return this._datePackage&&(n.datePackage=this._datePackage),new A(n,s)},_createDateField:function(e,t,i){var s=o.create("div",null,i),n={class:this.css.field,trim:!0,required:this._isFieldRequired(e,t)};return this._datePackage&&(n.datePackage=this._datePackage),new x(n,s)},_createIntField:function(e,t,i){var s,n=o.create("div",null,i);return s="esriFieldTypeSmallInteger"===e.type?{min:-32768,max:32767,places:0}:{places:0},new j({class:this.css.field,constraints:s,trim:!0,invalidMessage:this.NLS_validationInt,required:this._isFieldRequired(e,t)},n)},_createFltField:function(e,t,i){var s=o.create("div",null,i);return new j({class:this.css.field,constraints:{max:1/0,min:-1/0,places:"0,20"},trim:!0,invalidMessage:this.NLS_validationFlt,required:this._isFieldRequired(e,t)},s)},_toStore:function(e){return new R({data:{identifier:"id",label:"name",items:e}})},_connect:function(e,t,i){this._aiConnects.push(s.connect(e,t,i))},_getDatePackage:function(e){return null===e.datePackage?null:e.datePackage?e.datePackage:"ar"===a.locale?"dojox.date.islamic":null},_destroyAttributeTable:function(){var e=this._layerInfos;i.forEach(e,function(e){var s=e.fieldInfos;i.forEach(s,function(e){var s=e.dijit;if(s){if(s._onChangeHandle=null,e.customField)return;s instanceof Array?i.forEach(s,t.hitch(this,function(e){e.destroyRecursive?e.destroyRecursive():e.destroy&&e.destroy(),e._onChangeHandle=null})):s.destroyRecursive?s.destroyRecursive():s.destroy&&s.destroy()}e.dijit=null},this)},this);var s=this._toolTips;i.forEach(s,function(e){e.destroy()}),this._toolTips=[],this._attributes&&o.destroy(this._attributes)}});return t.mixin(U,{STRING_FIELD_OPTION_RICHTEXT:"richtext",STRING_FIELD_OPTION_TEXTAREA:"textarea",STRING_FIELD_OPTION_TEXTBOX:"textbox"}),r("extend-esri")&&t.setObject("dijit.AttributeInspector",U,d),U});