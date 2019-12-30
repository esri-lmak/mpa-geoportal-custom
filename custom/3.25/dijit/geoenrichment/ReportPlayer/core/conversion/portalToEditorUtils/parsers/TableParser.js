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

define(["dojo/_base/lang","esri/dijit/geoenrichment/utils/JsonXmlConverter","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/FieldInfoBuilder","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/templateJsonUtils/fieldInfo/RichTextJsonUtil","../../../supportClasses/DocumentOptions","../../ConversionUtil","../../../sections/SectionTypes","./AlignParser","./_HiddenCellsCollector","esri/dijit/geoenrichment/utils/ColorUtil"],function(e,t,r,a,i,s,n,o,l,u){var d={parseTableCellAttributes:function(t,r,a){var i=a.tableDefaultStyles;if(r=r||{},t.overrideStyle&&(r.overrideStyle=t.overrideStyle),t.pad&&(r.horizontalPadding=s.ptToPx(t.pad)),t.vpad&&(r.verticalPadding=s.ptToPx(t.vpad)),t.angle&&(r.angle=Number(t.angle)||0),o.parseAlign(t,r),t.width&&(r.width=s.ptToPx(t.width)),t.height&&(r.height=s.ptToPx(t.height)),e.mixin(r,s.ptToPxObj(s.parseStyleString(t.style))),r.overrideStyle&&i){var n=i.getStyle(r.overrideStyle);for(var l in n)delete r[l]}return d._parseBorderProperties(t,r),r},_SIDES:["Top","Right","Bottom","Left"],_parseBorderProperties:function(e,t){function r(r){if(e["border"+r+"Width"]){e["border"+r+"Color"]&&(t["border"+r+"Color"]=e["border"+r+"Color"]),e["border"+r+"Width"]&&(t["border"+r+"Width"]=s.ptToPx(e["border"+r+"Width"])),e["border"+r+"Style"]&&(t["border"+r+"Style"]=e["border"+r+"Style"]);var a=e["border"+r+"Opacity"];t["border"+r+"Opacity"]=a?Number(a):1}}d._SIDES.forEach(r)}},g={getElement:function(e,t,r){var a=g._processTableColumns(e,t.templateJson,r),i=Number(e.attributes.fixedColumns)||0,n=Number(e.attributes.dynamicColumns)||0,o=g._getTableOuterTags(e,t),u=o.trTags,p=o.bgTag,c=o.fgTag,f=o.backgroundFloatingPanelsTag,b=o.foregroundFloatingPanelsTag,h=o.filterTag;if(u){var T=u.map(function(){return{style:{fields:{}},fieldInfos:{}}}),m=l.collectHiddenCells(u,t);u.forEach(function(e,r){var o=T[r];if(e.attributes&&e.attributes.height&&(o.style.height=s.ptToPx(e.attributes.height)),e.tags&&e.tags.length){var u=0;if(n){var p=[],c=[],f=0;e.tags.forEach(function(e){for(;l.isHidden(m,f,r);)f++;f<i?p.push(e):c.push(e),f++});var b=Math.round((a.length-i)/n);e.tags=p;for(var h=0;h<b;h++)e.tags=e.tags.concat(c)}e.tags.forEach(function(e){for(;l.isHidden(m,u,r);)u++;if(a[u]){var i=a[u].field,s=e.attributes||{},n=o.style.fields[i]={};d.parseTableCellAttributes(s,n,t),s.width&&g._parseSpannedCellsDimentions(s,T,a,r,u);var p=Number(s.colspan),c=Number(s.rowspan);p&&(o.columnSpans=o.columnSpans||{},o.columnSpans[i]=p),c&&(o.rowSpans=o.rowSpans||{},o.rowSpans[i]=c);try{g._parseCellContent(e,o,i,n,t)}catch(e){console.log(e)}u++}})}})}var y={id:"table",customName:e.attributes.customName,backgroundSectionJson:p&&g._parseTableBackgroundForeground(p,t,!0),foregroundSectionJson:c&&g._parseTableBackgroundForeground(c,t,!1),backgroundFloatingTablesSectionJson:f&&g._parseFloatingPanels(f,t,!0),foregroundFloatingTablesSectionJson:b&&g._parseFloatingPanels(b,t,!1),data:{columns:a,data:T||[]},style:{width:s.ptToPx(e.attributes.width),left:s.ptToPx(e.attributes.left),spaceBefore:s.ptToPx(e.attributes.spaceBefore),spaceAfter:s.ptToPx(e.attributes.spaceAfter),alternatingStyle:e.attributes.alternatingStyle,opacity:e.attributes.opacity?Number(e.attributes.opacity):void 0,fixedCellsOpacity:e.attributes.fixedCellsOpacity?Number(e.attributes.fixedCellsOpacity):void 0},attributes:{},filter:h&&t.parsers.getParser("filter").getFilter(h)};return i&&(y.attributes.fixedColumns=i),n&&(y.attributes.dynamicColumns=n),e.attributes.fixedRows&&(y.attributes.fixedRows=Number(e.attributes.fixedRows)||0),e.attributes.dynamicRows&&(y.attributes.dynamicRows=Number(e.attributes.dynamicRows)||0),y.attributes.inSectionRole=e.attributes.inSectionRole,y},_processTableColumns:function(e,t,r){if(r&&r.fixTableWidthsForPage){var a=s.pxToPt(i.getPageBox(t.documentOptions).contentW);if(e.attributes.widths&&Number(e.attributes.width)>a){var n=s.splitTrim(e.attributes.widths,";",!0),o=Number(e.attributes.width)-a,l=Number(n[n.length-1]);l>o&&(l-=o,n[n.length-1]=l,e.attributes.widths=n.join(";"),e.attributes.width=a)}}var u=0;return e.attributes.widths?s.splitTrim(e.attributes.widths,";",!0).map(function(e){return{field:"field"+u++,style:{width:s.ptToPx(e)}}}):[]},_getTableOuterTags:function(e,t){var r,a,i,s,o,l=[];return t.revisionVersion>=1.1?e.tags&&e.tags.forEach(function(e){if("tr"===e.name)return void l.push(e);if("filter"===e.name)return void(o=e);switch(e.attributes.type){case n.TABLE_BACKGROUND:r=e;break;case n.TABLE_FOREGROUND:a=e;break;case n.TABLE_BACKGROUND_FLOATING_PANELS:i=e;break;case n.TABLE_FOREGROUND_FLOATING_PANELS:case n.TABLE_FLOATING_PANELS:s=e}}):e.tags&&e.tags.forEach(function(e){"tr"===e.name?l.push(e):"background"===e.name?r=e:"foreground"===e.name?a=e:"floatingElements"===e.name&&(s=e)}),{trTags:l,bgTag:r,fgTag:a,backgroundFloatingPanelsTag:i,foregroundFloatingPanelsTag:s,filterTag:o}},_processTdContent:function(e,t){function r(e){var a=e.tags&&1===e.tags.length&&e.tags[0];return a&&a.tags?("b"===a.name?t.fontWeight="bold":"i"===a.name?t.fontStyle="italic":"u"===a.name&&(t.textDecoration="underline"),"b"===a.name||"i"===a.name||"u"===a.name?r(a)||{tag:a.tags[0],parentTag:a}:null):null}var a,i,s;if(e.tags&&e.tags.length)if(s=e.tags.filter(function(e){return"br"!==e.name}),(i=s[0])&&"trigger"===i.name&&s[1]&&"d"===s[1].name)a=i,i=s[1];else{var n=r(e);i=n&&n.tag||s[0],e=n&&n.parentTag||e}return{firstTag:i,triggerTag:a,parentTag:e,hasMultipleTags:s&&s.length>1}},_parseSpannedCellsDimentions:function(e,t,r,a,i){if(e.spannedWidths||e.spannedHeights)for(var n=e.spannedWidths?e.spannedWidths.split(";").map(function(e){return s.ptToPx(e)}):[s.ptToPx(e.width)],o=e.spannedHeights?e.spannedHeights.split(";").map(function(e){return s.ptToPx(e)}):[s.ptToPx(e.height)],l=0;l<n.length;l++)for(var u=0;u<o.length;u++){var d=r[i+l],g=t[a+u],p=g.style.fields[d.field]=g.style.fields[d.field]||{};p.width=n[l],p.height=o[u]}},_parseCellContent:function(e,i,n,o,l){function d(e){t.isRichText(e)?i.fieldInfos[n]=a.createFieldInfoFromRichText(e):i[n]=t.unrichHTML(e)}var p,c=g._processTdContent(e,o),f=c.firstTag,b=c.parentTag,h=c.triggerTag,T=c.hasMultipleTags;if(T&&!h){var m=l.parsers.getParser("field").parseRichTextTag(b,l);m&&(i.fieldInfos[n]=m,p=!0)}if(f&&!p){l.isGraphicReport&&"section"===f.name&&!f.attributes.style&&o.backgroundColor&&!u.isTransparent(o.backgroundColor)&&(f.attributes.style=s.composeStyleString({backgroundColor:o.backgroundColor}),delete o.backgroundColor);var y;try{y=l.parsers.getParser("field").parseField(f,b,h,l)}catch(e){console.log(e),y=r.createFieldInfoForUnsupportedContent()}if(!1===y)p=!0;else if("number"==typeof y)i[n]=y+"",p=!0;else if(y)i.fieldInfos[n]=y,p=!0;else if("chart"===f.name)p=!0;else if("img"===f.name)p=!0;else if("mapImage"===f.name)p=!0;else if("text"===f.name)i[n]=f.attributes.name,p=!0;else if("a"===f.name&&f.tags&&f.tags[0].text){var v=f.attributes.href;v&&(i.urls=i.urls||{},i.urls[n]=v,i[n]=f.tags[0].text,p=!0)}else f.text&&!T&&(d(f.text),p=!0)}p||d(t.getInnerHTML(b))},_parseTableBackgroundForeground:function(e,t,r){return e.attributes=e.attributes||{},e.attributes.type=r?n.TABLE_BACKGROUND:n.TABLE_FOREGROUND,t.parsers.getParser("section").parseSection(e,t)},_parseFloatingPanels:function(e,t,r){return e.attributes=e.attributes||{},e.attributes.type=r?n.TABLE_BACKGROUND_FLOATING_PANELS:n.TABLE_FOREGROUND_FLOATING_PANELS,t.parsers.getParser("section").parseSection(e,t)}};return g.parseTableCellAttributes=d.parseTableCellAttributes,g});