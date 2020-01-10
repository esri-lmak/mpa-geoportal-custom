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

define(["dojo/_base/declare", 
		"dijit/_TemplatedMixin", 
		"dojo/_base/lang", 
		"dojo/has", 
		"app/gxe/types/mpa/base/MpaDescriptor", 
		"esri/dijit/metadata/form/InputSelectOne", 
		"esri/dijit/metadata/form/Options", 
		"esri/dijit/metadata/form/Option", 
		"esri/dijit/metadata/form/iso/CodeListAttribute", 
		"esri/dijit/metadata/form/iso/CodeListValueAttribute", 
		"esri/dijit/metadata/form/iso/CodeListElement", 
		"esri/dijit/metadata/form/iso/CodeSpaceAttribute", 
		"dojo/text!./templates/DataThemeCode.html"], 
function (e, _TemplatedMixin, t, o, Descriptor, r, s, a, d, n, m, p, f, template) {
	
    var oThisClass = e([Descriptor, _TemplatedMixin], {
        templateString: template
    });
    return oThisClass
});