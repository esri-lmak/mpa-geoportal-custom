// COPYRIGHT � 201 Esri
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

define(["dojo/_base/declare", "dojo/_base/lang", "dojo/has", "./Options", "dojo/text!./templates/MpaMarineDataThemeLevel3Options.html", "dojo/i18n!../nls/i18nIso", "../../../kernel"], function (e, t, o, i, n, s, a) { var r = e([i], { i18nIso: s, templateString: n, _escapeSingleQuotes: !0, postCreate: function () { this.inherited(arguments) } }); return o("extend-esri") && t.setObject("dijit.metadata.form.MpaMarineDataThemeLevel3Options", r, a), r });