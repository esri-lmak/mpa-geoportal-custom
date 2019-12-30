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

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../lang","../symbols/jsonUtils","./Renderer","../support/expressionUtils"],function(e,i,s,a,t,l,n,o,r){var u=e(o,{declaredClass:"esri.renderer.ClassBreaksRenderer",constructor:function(e,s){if(this.breaks=[],this._symbols={},this.infos=[],this.isMaxInclusive=!0,e&&!e.declaredClass){var a=e;this.attributeField=a.field,this.setValueExpression(a.valueExpression),this.valueExpressionTitle=a.valueExpressionTitle,this.legendOptions=a.legendOptions,e=a.defaultSymbol,this.defaultSymbol=e&&(e.declaredClass?e:n.fromJson(e)),e=a.backgroundFillSymbol,this.backgroundFillSymbol=e&&(e.declaredClass?e:n.fromJson(e)),this._copy(["defaultLabel","classificationMethod:rest","normalizationType:rest","normalizationField","normalizationTotal"],a,this);var t=a.minValue,o=a.classBreakInfos;o&&o[0]&&l.isDefined(o[0].classMaxValue)&&i.forEach(o,function(e){var i=e.classMaxValue;e.minValue=t,e.maxValue=i,t=i},this),i.forEach(o,this._addBreakInfo,this)}else this.defaultSymbol=e,this.attributeField=s},addBreak:function(e,i,a){var t=s.isObject(e)?e:{minValue:e,maxValue:i,symbol:a};this._addBreakInfo(t)},removeBreak:function(e,i){var s,a,t=this.breaks,l=t.length,n=this._symbols;for(a=0;a<l;a++)if(s=t[a],s[0]==e&&s[1]==i){t.splice(a,1),delete n[e+"-"+i],this.infos.splice(a,1);break}},clearBreaks:function(){this.breaks=[],this._symbols={},this.infos=[]},getBreakIndex:function(e){var i,a,t,l=this.attributeField,n=e.attributes,o=this.breaks,r=o.length,u=this.isMaxInclusive;if(this.valueExpression)i=this._getDataValue(e,this._cbInfo,null,this._cache.cbInfo);else if(s.isFunction(l))i=l(e);else{i=parseFloat(n[l]);var f,h,d=this.normalizationType;if(d)if(f=parseFloat(this.normalizationTotal),h=parseFloat(n[this.normalizationField]),"log"===d)i=Math.log(i)*Math.LOG10E;else if("percent-of-total"!==d||isNaN(f)){if("field"===d){if(isNaN(i)||isNaN(h))return-1;i/=h}}else i=i/f*100}if(null!=i&&!isNaN(i)&&"number"==typeof i)for(a=0;a<r;a++)if(t=o[a],t[0]<=i&&(u?i<=t[1]:i<t[1]))return a;return-1},getBreakInfo:function(e){var i=this.getBreakIndex(e);return-1!==i?this.infos[i]:null},getSymbol:function(e){var i=this.breaks[this.getBreakIndex(e)];return i?this._symbols[i[0]+"-"+i[1]]:this.defaultSymbol},setMaxInclusive:function(e){this.isMaxInclusive=e},setValueExpression:function(e){this.valueExpression=e,this._cbInfo={valueExpression:e},this._cache.cbInfo=this._createCache(this._cbInfo)},getFieldsUsedInExpressions:function(){var e=this.inherited(arguments);return this.valueExpression&&(e=e.concat(r.extractFieldNames(this.valueExpression))),e.sort(),i.filter(e,function(i,s){return 0===s||e[s-1]!==i})},isContinuousRenderer:function(){var e=!1;if(this.infos&&1===this.infos.length){var s=this.attributeField,a=this.normalizationField,t=this.valueExpression,l=this.getVisualVariablesForType("colorInfo",!1)||[],n=this.getVisualVariablesForType("sizeInfo",!1)||[],o=this.getVisualVariablesForType("opacityInfo",!1)||[],r=l.concat(n).concat(o);e=i.some(r,function(e){return(e.field===s||e.valueExpression===t)&&e.normalizationField==a})}return e},_normalizationTypeEnums:[["field","esriNormalizeByField"],["log","esriNormalizeByLog"],["percent-of-total","esriNormalizeByPercentOfTotal"]],_classificationMethodEnums:[["natural-breaks","esriClassifyNaturalBreaks"],["equal-interval","esriClassifyEqualInterval"],["quantile","esriClassifyQuantile"],["standard-deviation","esriClassifyStandardDeviation"],["geometrical-interval","esriClassifyGeometricalInterval"],["defined-interval","esriClassifyDefinedInterval"]],_copy:function(e,s,a){i.forEach(e,function(e){var i,t,l,n,o=e.split(":");if(o.length>1&&(e=o[0],i=this["_"+e+"Enums"],"rest"===o[1]?(t="1",l="0"):"sdk"===o[1]&&(t="0",l="1")),void 0!==(n=s[e])&&(a[e]=n,i&&t)){var r,u=i.length;for(r=0;r<u;r++)if(i[r][t]===n){a[e]=i[r][l];break}}},this)},_addBreakInfo:function(e){var i=e.minValue,s=e.maxValue;this.breaks.push([i,s]),this.infos.push(e);var a=e.symbol;a&&(a.declaredClass||(e.symbol=n.fromJson(a))),this._symbols[i+"-"+s]=e.symbol},toJson:function(){var e=this.infos||[],a=l.fixJson,t=e[0]&&e[0].minValue,n=this.backgroundFillSymbol,o=s.mixin(this.inherited(arguments),{type:"classBreaks",field:this.attributeField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,legendOptions:s.clone(this.legendOptions),defaultSymbol:this.defaultSymbol&&this.defaultSymbol.toJson(),backgroundFillSymbol:n&&n.toJson(),minValue:t===-1/0?-Number.MAX_VALUE:t,classBreakInfos:i.map(e,function(e){return e=s.mixin({},e),e.symbol=e.symbol&&e.symbol.toJson(),e.classMaxValue=e.maxValue===1/0?Number.MAX_VALUE:e.maxValue,delete e.minValue,delete e.maxValue,a(e)})});return this._copy(["defaultLabel","classificationMethod:sdk","normalizationType:sdk","normalizationField","normalizationTotal"],this,o),o.hasOwnProperty("normalizationType")&&!o.normalizationType&&delete o.normalizationType,o.hasOwnProperty("classificationMethod")&&!o.classificationMethod&&delete o.classificationMethod,a(o)}});return a("extend-esri")&&s.setObject("renderer.ClassBreaksRenderer",u,t),u});