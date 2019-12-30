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

define(["dojo/_base/lang","esri/layers/CodedValueDomain","esri/dijit/geoenrichment/utils/DateUtil","esri/dijit/geoenrichment/utils/ObjectUtil"],function(e,a,t,i){var r={};return r.composeAttributesFromFieldInfos=function(e,a){function t(e){return e&&e.dateFormat?"esriFieldTypeDate":e&&void 0!==e.places?e.places>0?"esriFieldTypeDouble":"esriFieldTypeInteger":"esriFieldTypeString"}return e&&e.filter(function(e){return e.visible}).map(function(e){return{name:e.fieldName,alias:e.label,places:e.format&&e.format.places,digitSeparator:e.format&&e.format.digitSeparator,dateFormat:e.format&&e.format.dateFormat,value:a[e.fieldName],type:t(e.format),domain:null,length:void 0}})},r.formatAttributeValue=function(e,r){r=r||{};var o=r.hasOwnProperty("unavailableDataValue")?r.unavailableDataValue:"";if(!e||null===e.value||void 0===e.value)return o;if(!r.skipFormattedValue&&e.formattedValue&&e.formattedValue!==o)return e.formattedValue;var l,n=e.domain&&"codedValue"===e.domain.type?new a(e.domain):null;if(n)(l=n.getName(e.value))||(l=e.value+"");else if("esriFieldTypeString"===e.type)l=e.value;else if("esriFieldTypeDate"===e.type){var u=new Date;u.setTime(e.value),l=t.formatDateShort(u)}else{var d=r.format;l=i.formatNumber(e.value,{places:d&&void 0!==d.decimals?d.decimals:e.places,noSeparator:d&&void 0!==d.useThousandsSeparator?!d.useThousandsSeparator:!1===e.digitSeparator})}return null===l||void 0===l?o:l},r.attributeToJson=function(a){return{name:a.name,alias:a.alias,type:a.type,value:a.value,domain:a.domain&&(a.domain.toJson?a.domain.toJson():e.clone(a.domain)),places:a.places,digitSeparator:a.digitSeparator,dateFormat:a.dateFormat,length:a.length}},r.attributeFromJson=function(e){return{name:e.name,alias:e.alias,type:e.type,value:e.value,domain:e.domain,places:e.places,digitSeparator:e.digitSeparator,dateFormat:e.dateFormat,length:e.length}},r});