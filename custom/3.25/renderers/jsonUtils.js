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

define(["dojo/_base/array","dojo/_base/lang","dojo/has","dojox/gfx/_base","../kernel","../Color","../symbols/jsonUtils","./SimpleRenderer","./UniqueValueRenderer","./ClassBreaksRenderer","./VectorFieldRenderer","./DotDensityRenderer","./ScaleDependentRenderer","./TimeClassBreaksAger","./TimeRampAger","./TemporalRenderer","./HeatmapRenderer","./StretchRenderer"],function(e,r,o,n,a,s,t,i,l,c,d,m,g,u,p,h,R,k){var f={fromJson:function(e){var r,o=e.type||"";switch(o){case"simple":r=new i(e);break;case"uniqueValue":r=new l(e);break;case"classBreaks":r=new c(e);break;case"vectorField":r=new d(e);break;case"scaleDependent":r=this._scaleDependentFromJson(e);break;case"dotDensity":r=this._dotDensityFromJson(e);break;case"temporal":r=this._temporalFromJson(e);break;case"heatmap":r=this._heatmapFromJson(e);break;case"rasterStretch":r=new k(e)}return r},_scaleDependentFromJson:function(r){var o={},n=r.minScale,a=r.rendererInfos;return o.rendererInfos=e.map(a,function(e){var r=e.maxScale,o={minScale:n,maxScale:r,renderer:e.renderer&&this.fromJson(e.renderer)};return n=r,o},this),new g(o)},_dotDensityFromJson:function(o){return o.backgroundColor&&r.isArray(o.backgroundColor)&&(o.backgroundColor=s.toDojoColor(o.backgroundColor)),o.dotSize>0&&(o.dotSize=n.pt2px(o.dotSize)),o.fields&&e.forEach(o.fields,function(e){e&&r.isArray(e.color)&&(e.color=s.toDojoColor(e.color))}),o.legendOptions&&(o.legendOptions.backgroundColor&&r.isArray(o.legendOptions.backgroundColor)&&(o.legendOptions.backgroundColor=s.toDojoColor(o.legendOptions.backgroundColor)),o.legendOptions.outline&&(o.legendOptions.outline=t.fromJson(o.legendOptions.outline))),o.outline&&(o.outline=t.fromJson(o.outline)),new m(o)},_temporalFromJson:function(e){var r,o,n,a;return e=e||{},r=this.fromJson(e.observationRenderer),o=e.latestObservationRenderer?this.fromJson(e.latestObservationRenderer):null,n=e.trackRenderer?this.fromJson(e.trackRenderer):null,a=this._agerFromJson(e.observationAger),new h(r,o,n,a)},_agerFromJson:function(e){var r;return e=e||{},e.colorRange||e.sizeRange||e.alphaRange?r=this._timeRampFromJson(e):e.agerClassBreakInfos&&(r=this._timeClassBreaksFromJson(e)),r},_timeRampFromJson:function(e){var r,o,n;return e.colorRange&&e.colorRange.length>1&&(r=[s.toDojoColor(e.colorRange[0]),s.toDojoColor(e.colorRange[1])]),e.sizeRange&&e.sizeRange.length>1&&(o=[e.sizeRange[0],e.sizeRange[1]]),e.alphaRange&&e.alphaRange.length>1&&(n=[e.alphaRange[0]/255,e.alphaRange[1]/255]),new p(r,o,n)},_timeClassBreaksFromJson:function(e){var r,o,n,a,t=e.agerClassBreakInfos,i=[];for(o=function(e){var r=u.UNIT_DAYS;switch(e){case"esriTimeUnitsSeconds":r=u.UNIT_SECONDS;break;case"esriTimeUnitsMilliseconds":r=u.UNIT_MILLISECONDS;break;case"esriTimeUnitsHours":r=u.UNIT_HOURS;break;case"esriTimeUnitsMinutes":r=u.UNIT_MINUTES;break;case"esriTimeUnitsMonths":r=u.UNIT_MONTHS;break;case"esriTimeUnitsWeeks":r=u.UNIT_WEEKS;break;case"esriTimeUnitsYears":r=u.UNIT_YEARS}return r}(e.timeUnits),a=0;a<t.length;a+=1)r=t[a],n={minAge:0,maxAge:r.oldestAge||1/0},r.color&&(n.color=s.toDojoColor(r.color)),r.alpha&&(n.alpha=r.alpha/255),n.size=r.size,i[a]=n;return new u(i,o)},_heatmapFromJson:function(r){var o=r.colorStops;return o&&o instanceof Array&&e.forEach(o,function(e){e.color=s.toDojoColor(e.color)}),new R(r)}};return o("extend-esri")&&r.mixin(r.getObject("renderer",!0,a),f),f});