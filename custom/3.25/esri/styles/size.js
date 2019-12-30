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

define(["dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../Color"],function(o,a,i,e,r){function t(o,a){var i,e,t;if(o)switch(i={},a){case"point":i.color=new r(o.color),i.noDataColor=new r(o.noDataColor),i.outline={color:new r(o.outline.color),width:o.outline.width},i.size=o.size,i.noDataSize=o.noDataSize,i.minSize=o.minSize,i.maxSize=o.maxSize,i.opacity=o.opacity||1;break;case"line":i.color=new r(o.color),i.noDataColor=new r(o.noDataColor),i.width=o.width,i.noDataWidth=o.noDataWidth,i.minWidth=o.minWidth,i.maxWidth=o.maxWidth,i.opacity=o.opacity||1;break;case"polygon":e=o.marker,t=o.background,i.marker={color:new r(e.color),noDataColor:new r(e.noDataColor),outline:{color:new r(e.outline.color),width:e.outline.width},size:e.size,noDataSize:e.noDataSize,minSize:e.minSize,maxSize:e.maxSize},i.background={color:new r(t.color),outline:{color:new r(t.outline.color),width:t.outline.width}},i.opacity=o.opacity||1,delete i.marker.opacity}return i}function n(o){var i;return o&&(i=a.mixin({},o),i.color&&(i.color=new r(i.color)),i.noDataColor&&(i.noDataColor=new r(i.noDataColor)),i.outline&&(i.outline={color:i.outline.color&&new r(i.outline.color),width:i.outline.width})),i}function c(o){var a=o;return"esriGeometryPoint"===a||"esriGeometryMultipoint"===a?a="point":"esriGeometryPolyline"===a?a="line":"esriGeometryPolygon"!==a&&"esriGeometryMultiPatch"!==a||(a="polygon"),a}var l=[128,128,128,1],d=[128,128,128,1],m={primary:{color:[227,139,79,1],noDataColor:l,outline:{color:[255,255,255,.25],width:1},noDataSize:4,size:12,minSize:8,maxSize:50,opacity:.8},secondary:[{color:[128,128,128,1],noDataColor:l,outline:{color:[255,255,255,.25],width:1},noDataSize:4,size:12,minSize:8,maxSize:50,opacity:.8},{color:[255,255,255,1],noDataColor:l,outline:{color:[128,128,128,.25],width:1},noDataSize:4,size:12,minSize:8,maxSize:50,opacity:.8}]},s={primary:{color:[227,139,79,1],noDataColor:d,outline:{color:[92,92,92,.25],width:1},noDataSize:4,size:12,minSize:8,maxSize:50,opacity:.8},secondary:[{color:[178,178,178,1],noDataColor:d,outline:{color:[92,92,92,.25],width:1},noDataSize:4,size:12,minSize:8,maxSize:50,opacity:.8},{color:[26,26,26,1],noDataColor:d,outline:{color:[128,128,128,.25],width:1},noDataSize:4,size:12,minSize:8,maxSize:50,opacity:.8}]},h={r:0,g:0,b:0,a:0},y={color:h,outline:{color:{r:166,g:166,b:166,a:.25},width:1}},p={color:h,outline:{color:{r:153,g:153,b:153,a:.25},width:1}},u={default:{name:"default",label:"Default",description:"Default theme for visualizing features by varying their size to show data.",basemapGroups:{light:["streets","gray","topo","terrain","national-geographic","oceans","osm"],dark:["satellite","hybrid","dark-gray"]},pointSchemes:{light:m,dark:s},lineSchemes:{light:{primary:{color:[226,119,40,1],noDataColor:l,noDataWidth:1,width:1,minWidth:1,maxWidth:18},secondary:[{color:[77,77,77,1],noDataColor:l,noDataWidth:1,width:1,minWidth:1,maxWidth:18},{color:[153,153,153,1],noDataColor:l,noDataWidth:1,width:1,minWidth:1,maxWidth:18}]},dark:{primary:{color:[226,119,40,1],noDataColor:d,noDataWidth:1,width:1,minWidth:1,maxWidth:18},secondary:[{color:[255,255,255,1],noDataColor:d,noDataWidth:1,width:1,minWidth:1,maxWidth:18},{color:[153,153,153,1],noDataColor:d,noDataWidth:1,width:1,minWidth:1,maxWidth:18}]}},polygonSchemes:{light:{primary:{marker:m.primary,background:p,opacity:m.primary.opacity},secondary:[{marker:m.secondary[0],background:p,opacity:m.secondary[0].opacity},{marker:m.secondary[1],background:p,opacity:m.secondary[1].opacity}]},dark:{primary:{marker:s.primary,background:y,opacity:s.primary.opacity},secondary:[{marker:s.secondary[0],background:y,opacity:s.secondary[0].opacity},{marker:s.secondary[1],background:y,opacity:s.secondary[1].opacity}]}}}},z={};!function(){var o,a,i,e,r,t,n,c;for(o in u){a=u[o],i=a.basemapGroups,r=z[o]={basemaps:[].concat(i.light).concat(i.dark),point:{},line:{},polygon:{}};for(e in i)for(t=i[e],n=0;n<t.length;n++)c=t[n],a.pointSchemes&&(r.point[c]=a.pointSchemes[e]),a.lineSchemes&&(r.line[c]=a.lineSchemes[e]),a.polygonSchemes&&(r.polygon[c]=a.polygonSchemes[e])}}();var S={getAvailableThemes:function(a){var i,e,r,t=[];for(i in u)e=u[i],r=z[i],a&&-1===o.indexOf(r.basemaps,a)||t.push({name:e.name,label:e.label,description:e.description,basemaps:r.basemaps.slice(0)});return t},getSchemes:function(a){var i,e,r=a.theme,n=a.basemap,l=c(a.geometryType),d=z[r];return i=d&&d[l],i=i&&i[n],i&&(e={primaryScheme:t(i.primary,l),secondarySchemes:o.map(i.secondary,function(o){return t(o,l)})}),e},cloneScheme:function(o){var a;return o&&(a=n(o),a.marker&&(a.marker=n(a.marker)),a.background&&(a.background=n(a.background))),a}};return i("extend-esri")&&a.setObject("styles.size",S,e),S});