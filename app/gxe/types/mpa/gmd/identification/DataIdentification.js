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

define(["dojo/_base/declare", 
		"dojo/_base/lang", 
		"dijit/_TemplatedMixin",
		"dojo/has", 
		"app/gxe/types/mpa/base/MpaDescriptor", 
		"esri/dijit/metadata/form/Tabs", 
		"esri/dijit/metadata/form/iso/AbstractObject", 
		"esri/dijit/metadata/form/iso/CodeListReference", 
		"esri/dijit/metadata/form/iso/ObjectReference", 
		"app/gxe/types/mpa/gmd/citation/ResourceCitation",
		"app/gxe/types/mpa/gmd/identification/ResourceDescription", 
		"esri/dijit/metadata/types/iso/gmd/citation/ResourceContact", 
		"esri/dijit/metadata/types/iso/gmd/identification/ResourceThumbnail", 
		"esri/dijit/metadata/types/inspire/gmd/identification/DataResourceKeywords", 
		"app/gxe/types/mpa/gmd/constraints/ResourceConstraints", 
		"./DataResourceTab", 
		"dojo/text!./templates/DataIdentification.html"],
function (declare, lang, _TemplatedMixin, has, Descriptor, a, b, c, d, e, f, g, h, i, j, k, template) {
	
    var oThisClass = declare([Descriptor, _TemplatedMixin], {
        templateString: template
    });
    return oThisClass
});