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

define(["dojo/_base/declare","dojo/aspect","esri/dijit/geoenrichment/promise/all","./core/layout/LayoutBuilder","./core/themes/ThemeLibrary","./core/themes/ReportThemes","./core/supportClasses/map/layers/locator/LocatorPointsController","./core/supportClasses/map/layers/std/StdPolygonsController","./core/supportClasses/map/layers/thisAreas/ThisAreasHighlightController","./core/supportClasses/EditorUnits","../utils/ColorUtil"],function(t,e,o,r,n,i,l,s,a,h,u){return t(null,{isGraphicStyle:!1,layoutBuilder:null,dynamicReportInfo:null,animationAllowed:!1,enableDataDrilling:!1,showDataDrillingInsidePanel:!1,preInitialize:function(){return this.layoutBuilder=this.layoutBuilder||new r,this.layoutBuilder.initCoreComponents()},initialize:function(t,e){return this.preInitialize(),this.layoutBuilder[t?"initClassicComponents":"initGraphicComponents"](e)},_theme:null,getCurrentTheme:function(t){return t||this._theme},setTheme:function(t){this._theme=t||n.getReportThemeById(i.GRAPHIC)},getTableDefaultStyles:function(t,e){var o=this.getCurrentTheme(t).table.overrideStyles;return e?o[e]:o},getChartDefaultStyles:function(t){return this.getCurrentTheme(t).chart},getDocumentDefaultStyles:function(t){return this.getCurrentTheme(t).document},getInfographicDefaultStyles:function(t){return this.getCurrentTheme(t).infographic},getStaticInfographicDefaultStyles:function(t){var e=this.getInfographicDefaultStyles(t);return e&&e.staticInfographic},isLightDocumentTheme:function(t){return u.isLightColor(this.getCurrentTheme(t).document.backgroundColor)},setDynamicReportInfo:function(t){this.dynamicReportInfo=t,this.isGraphicStyle=!t.isClassic},getDynamicImageFunc:function(t,e,o){},enrichFieldData:function(t){},_locatorPointsControllers:null,getLocatorPointsController:function(t,o){var r=t.calculatorName+"_"+o;this._locatorPointsControllers=this._locatorPointsControllers||{};var n=this._locatorPointsControllers[r];return n||(n=this._locatorPointsControllers[r]=new l(t,this.dynamicReportInfo.fieldData,this.dynamicReportInfo.isMultiFeature,o),e.after(n,"destroy",function(){delete this._locatorPointsControllers[r]}.bind(this))),n},_stdPolygonsControllers:null,getStdPolygonsController:function(t,o){this._stdPolygonsControllers=this._stdPolygonsControllers||{};var r=t+"_"+(o||0),n=this._stdPolygonsControllers[r];return n||(n=this._stdPolygonsControllers[r]=new s(r),e.after(n,"destroy",function(){delete this._stdPolygonsControllers[r]}.bind(this))),n},loadAllStdFeatures:function(){var t=[];for(var e in this._stdPolygonsControllers)t.push(this._stdPolygonsControllers[e].loadAllFeatures());return o(t)},_thisAreasHighlightController:null,getThisAreasHighlightController:function(){return this._thisAreasHighlightController||(this._thisAreasHighlightController=new a,e.after(this._thisAreasHighlightController,"destroy",function(){this._thisAreasHighlightController=null}.bind(this))),this._thisAreasHighlightController},reset:function(){[this._locatorPointsControllers,this._stdPolygonsControllers].forEach(function(t){t&&Object.keys(t).forEach(function(e){var o=t[e];o&&o.destroy()})}),this._locatorPointsControllers=null,this._stdPolygonsControllers=null,this._thisAreasHighlightController&&this._thisAreasHighlightController.destroy(),this._thisAreasHighlightController=null},canExportToExcel:function(){return!1},exportToExcel:function(t){},pepareExportToExcelParameters:function(t){},getUnits:function(){return"px"},provideUnits:function(t){return h.provideUnits(t,this.getUnits())},roundForUnits:function(t){return h.round(t,this.getUnits())}})});