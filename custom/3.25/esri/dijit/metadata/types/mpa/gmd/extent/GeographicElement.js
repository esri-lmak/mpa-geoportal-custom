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

define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../../base/Descriptor","../../../../form/Element","../../../../form/InputNumber","../../../../form/iso/AbstractObject","../../../../form/iso/GcoElement","../../../../form/iso/GeoExtentTool","../../../../form/iso/ObjectReference","dojo/text!./templates/GeographicElement.html","../../../../../../kernel"],function(e,t,o,r,m,n,a,i,s,c,l,d){var f=e(r,{templateString:l});return o("extend-esri")&&t.setObject("dijit.metadata.types.gemini.gmd.extent.GeographicElement",f,d),f});