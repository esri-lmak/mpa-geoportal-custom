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

define(["dojo/_base/declare","esri/dijit/geoenrichment/promise/all","esri/dijit/geoenrichment/when","dojo/dom-class","dojo/dom-construct","dijit/_WidgetBase","dijit/_TemplatedMixin","../themes/BackgroundThemeUtil","esri/dijit/geoenrichment/utils/async/AsyncQueue","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ElementUsageTypes","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/ViewModes","../supportClasses/templateJsonUtils/query/TemplateJsonQueryUtil","../sections/sectionUtils/SectionJsonUtil","esri/dijit/geoenrichment/utils/ColorUtil","dojo/i18n!esri/nls/jsapi"],function(e,t,i,n,s,o,a,r,c,l,h,u,d,g,m){function p(e){var t=u.getParentBox(e);return t&&t.w?t:d.calcSectionJsonBox(e)}m=m.geoenrichment.dijit.ReportPlayer.Infographics;return e([o,a],{templateString:"<div class='esriGEReportPlayer_infographicsPageStack'></div>",nls:m,viewModel:null,theme:null,parentWidget:null,currentFeatureIndex:null,scaleSectionsToFit:!0,isVertical:!0,_asyncQueue:null,_sections:null,_maxWidth:0,_maxHeight:0,_panelIndexToScaleCache:null,postCreate:function(){this.inherited(arguments),this._sections=[],this._panelIndexToScaleCache={},!this.isVertical&&n.add(this.domNode,"isHorizontal")},getRenderPromise:function(){return this._asyncQueue&&this._asyncQueue.getPromise()},setItems:function(e){var t=this;return this._destroySections(),this._asyncQueue=new c,this._calcMaxSectionSize(e),e.forEach(function(e,i){t._asyncQueue.add(function(){t._createPanel(e,i)},{delayAfter:0})}),this.getRenderPromise()},_calcMaxSectionSize:function(e){this._maxWidth=0,this._maxHeight=0,e.forEach(function(e){var t=p(e);t&&(this._maxWidth=Math.max(this._maxWidth,t.w),this._maxHeight=Math.max(this._maxHeight,t.h))},this)},_createPanel:function(e,t){var i=s.create("div",{class:"infographicPageStack_infographicRow "+(this.isVertical?"":"dijitInline")},this.domNode),n=s.create("div",{class:"infographicPageStack_infographicSectionNode"},i),o=p(e);n.style.width=o.w+"px",n.style.height=o.h+"px";var a={};a.class="adjustableGrid_inCellSection",a.json=e,a.viewModel=this.viewModel,a.theme=this.theme,a.parentWidget=this,a.initialWidth=o.w,a.initialHeight=o.h,a.currentFeatureIndex=this.currentFeatureIndex,a.elementUsageType=l.PAGE_PANEL_SECTION,a.initialViewMode=h.PREVIEW_VALUES;var r=this.viewModel.layoutBuilder.createElement("section",a,n);this._sections.push(r),this.scaleSectionsToFit?this._scaleSectionToFit(i,n,o,t):n.style.margin="10px",this._renderPanelBackground(n,e,o),this.onSectionCreated(r)},_scaleSectionToFit:function(e,t,i,n){var s;this.isVertical?(s=(this._maxWidth+2)/(i.w+2),e.style.width=this._maxWidth+"px",e.style.height=(i.h+2)*s+"px",e.style.marginBottom="10px"):(s=(this._maxHeight+2)/(i.h+2),e.style.width=(i.w+2)*s+"px",e.style.height=this._maxHeight+"px",e.style.marginRight="10px"),t.style.transform="scale("+s+")",t.style.webkitTransform="scale("+s+")",t.style.position="absolute",t.style.left="0px",t.style.top="0px",t.style.margin="0px",this._panelIndexToScaleCache[n]=s||1},_renderPanelBackground:function(e,t,i){var n=u.getParentStyle(t),o=this.viewModel.getDocumentDefaultStyles(this.theme),a=s.create("div",{class:"esriGEAbsoluteStretched"},e,"first");a.style.backgroundColor=n&&n.backgroundColor&&!g.isTransparent(n.backgroundColor)?n.backgroundColor:o.backgroundColor,o&&r.renderThemeBackgroundImage(a,o.backgroundImage,{documentOptions:this.parentWidget.documentOptions,pos:i})},getSections:function(){return this._sections},getPanelScaleAt:function(e){return this._panelIndexToScaleCache[e]||1},onSectionCreated:function(e){},notifyShown:function(){this._sections.forEach(function(e){e.notifyShown()})},getVisualState:function(){return{type:"infographicsPageStack",sections:this._sections.map(function(e){return e.getVisualState()})}},setVisualState:function(e){var n=this;if(e&&e.sections&&e.sections.length===this._sections.length)return i(this.getRenderPromise(),function(){return t(e.sections.map(function(e,t){var i=n._sections[t];return i&&i.setVisualState(e)}))})},_destroySections:function(){this._asyncQueue&&this._asyncQueue.destroy(),this._asyncQueue=null,this._sections.forEach(function(e){e.destroy()}),this._sections.length=0,s.empty(this.domNode)},destroy:function(){this._destroySections(),this.inherited(arguments)}})});