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

define(["dojo/string","./utils","./FieldInfoPreviewSampleUtil","./FieldInfoPreviewAttributeUtil","../../conditionalStyling/ConditionalStyleUtil","esri/dijit/geoenrichment/utils/ObjectUtil","esri/dijit/geoenrichment/utils/DateUtil","esri/dijit/geoenrichment/ReportPlayer/countryConfig","../../../sections/dynamicSettings/supportClasses/FilterUtil","dojo/i18n!esri/nls/jsapi","../../../../_devConfig"],function(e,t,r,i,a,n,l,u,s,o,m){function c(e){return e.variableID?e.variableID:e.script&&P[e.script.alias]}o=o.geoenrichment.dijit.ReportPlayer.FieldInfoPreview;var f={percent:[10,15,20,25,33,46,72,90,95],percentSmall:[2,3,4,5,6,7],index:[80,99,105,111,113,118,121,130],number:[1150,2013,5006,10135,20456,36813],numberSep:[1150,2013,5006,10135,20456,36813],numberSmall:[10,5,3,7,15]},d=/^MEDAGE|^AVGHHSZ|^UNEMPRT|ECYHSZAVG|ECYPTAMED/,S={percent:{MP19013a_B:72,MP19014a_B:70,EMP_TO_POP:25,NOHS:10,HSG:20,SC:30,BGPD:40},percentSmall:{UNEMPRT_CY:5},index:{},number:{MEDHINC_CY:55650,TOTPOP_CY:20456,TOTHH_CY:8546,MEDDI_CY:38290,S01_BUS:11256,S01_EMP:60382,PCI_CY:30382,MEDNW_CY:88548,MEDVAL_CY:352430,X3004_A:5682,ACSMEDCRNT:1227,X5001_A:1762,X1003_A:4073,X4100_A:543,X8001_A:4538,X1130_A:3465,X7001_A:1568,X9008_A:246,X9073_A:158,X9074_A:326,X9045_A:42,POPGRWCYCY:1.05,POPGRWCYFY:1.12,ECYPTAPOP:20456,ECYHNIMED:55650},numberSep:{MEDHINC_CY:55650,TOTPOP_CY:20456,TOTHH_CY:8546,MEDDI_CY:38290,S01_BUS:11256,S01_EMP:60382,PCI_CY:30382,MEDNW_CY:88548,MEDVAL_CY:352430,X3004_A:5682,ACSMEDCRNT:1227,X5001_A:1762,X1003_A:4073,X4100_A:543,X8001_A:4538,X1130_A:3465,X7001_A:1568,X9008_A:246,X9073_A:158,X9074_A:326,X9045_A:42,ECYPTAPOP:20456,ECYHNIMED:55650},numberSmall:{AVGHHSZ_CY:2,MEDAGE_CY:36,ECYHSZAVG:2,ECYPTAMED:36},string:{TSEGNAME:"Bright Young Professionals",TLIFECODE:"L8",TLIFENAME:"Middle Ground",TSEGCODE:"8A",CONAME:"Coffee",NAICS:"1234",SIC:"5678",ADDR:"380 New York St, Redlands, CA",STATE:"CA",STATE_NAME:"California",ZIP:"92373",ZIP4:"92373",CITY:"Redlands",STREET:"New York st.",DIRECTION:"SW",FRNCOD:"24"}},P={"Employee/ Population Ratio":"EMP_TO_POP","No High School Diploma":"NOHS","High School Graduate":"HSG","Some College":"SC","Bachelors/Grad/Prof Degree":"BGPD"},p={},C=.5432123456789;return{getValuePreview:function(e,t){return e.hasVariable||e.script?this._getVariableOrScriptPreview(e,t):this._getNonVariablePreview(e,t)},_getVariableOrScriptPreview:function(e,t){function a(e){return{formattedValue:e,value:e,formatFunction:null,isUnavailableData:!1}}function u(t,r){function i(t){return e.decimals>0?t+=C:t=Math.round(t),n.formatNumber(t,{places:e.decimals||0,noSeparator:!e.useThousandsSeparator})}var a=t;return e.decimals>0?(a+=C,a=Number(a.toFixed(e.decimals))):a=Math.round(a),{formattedValue:i(t),value:a,formatFunction:function(e){return i(e)},isUnavailableData:!1}}var s=this._getSampleCacheType(e);if(m.preview.bigValues&&("number"===s||"numberSep"===s))return u(1e12,s);if(t.getPreviewValueFunction){s=0===s.indexOf("percent")?"percent":"number";var d=t.getPreviewValueFunction();return d=d.fields&&d.fields[e.name]||d,u(d[s],s)}var P=r.findNonEmptySample(e);if("string"==typeof P)return a(P);if("number"==typeof P)return u(P,s);var A=e.type||e.isSiteAttribute&&e.attribute.type,_=e.isSiteAttribute&&i.getAttributePreviewValue(e.attribute);if("esriFieldTypeDate"===A){var g=new Date;return _&&g.setTime(_),a(l.formatDateShort(g))}if("esriFieldTypeString"===A){var v=e.isDataLayerAttribute?e.attribute.name:e.variableID;return a(S.string[v]||_||o.sampleTextValue)}if("number"==typeof _)return u(_,s);var E=p[s]=p[s]||{},b=e.name+";"+e.decimals,D=E[b];if(!D){if(!(D=S[s][c(e)])){var T=f[s];D=T[Math.round((T.length-1)*Math.random())]}D=E[b]=D}return u(D,s)},_getSampleCacheType:function(e){var t=e.statefulName?"p"===e.statefulName.charAt(0):e.showPercent,r=e.statefulName&&"i"===e.statefulName.charAt(0),i=e.hasVariable&&d.test(e.variableID);return t?i?"percentSmall":"percent":r?"index":i?"numberSmall":e.useThousandsSeparator?"numberSep":"number"},_getNonVariablePreview:function(r,i){var a;if(i.getPreviewValueFunction){var n=i.getPreviewValueFunction();n=n.fields&&n.fields[r.name]||n,a=n.formattedValue||n.number}else if("headers.AREA_DESC"===r.name&&i.currentFeatureIndex>-1){var l=1+2*i.currentFeatureIndex;a=1===l?u.getSingleUnits()?"1 "+u.getSingleUnits():e.substitute(o.fieldPreviewAreaDescWithRadiusSingular,{radius:l}):u.getPluralUnits()?l+" "+u.getPluralUnits():e.substitute(o.fieldPreviewAreaDescWithRadiusPlural,{radius:l})}else a=t.fields.getPreview(r.name,i.isGraphicReport,i.isMultiFeature)||r.alias;return{formattedValue:a,value:a,formatFunction:null,isUnavailableData:!1}},getConditionalStylePreview:function(e,t){if(e.triggerJson&&void 0!==t.rowIndex){var r=e.triggerJson.cases[t.rowIndex%e.triggerJson.cases.length];if(r){var i,n=a.styleFromSetters(r.setters);if(1===r.compareInfos.length){i=Number(r.compareInfos[0].value);var l=r.compareInfos[0].operator;">"===l?i++:"<"===l&&i--}else 2===r.compareInfos.length&&(i=(Number(r.compareInfos[1].value)+Number(r.compareInfos[0].value))/2);return{style:n,value:i}}return null}return null},getRangeFilterPreview:function(e){if(e.presetFilter&&s.isRangeType(e.presetFilter.method)){if(e.presetFilter.columnIndex!==e.columnIndex)return null;var t=s.getRangeStatistics(e.presetFilter.ranges),r=t.min,i=t.max;isFinite(r)||isFinite(i)?isFinite(i)?isFinite(r)||(r=0===i?0:i>0?i/2:2*i):i=0!==r?Math.abs(2*r):100:(r=0,i=100);return{value:r+(i-r)/e.numRows*e.rowIndex}}}}});