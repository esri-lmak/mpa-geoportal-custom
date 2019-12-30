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

define(["require","exports","../Dictionary","../Feature","../ImmutablePointArray","../languageUtils","../../geometry/Extent","../../geometry/Geometry","../../geometry/Multipoint","../../geometry/Point","../../geometry/Polygon","../../geometry/Polyline","./centroid","../../geometry/jsonUtils"],function(e,r,n,t,i,a,o,l,f,s,c,u,m,g){"use strict";function p(e,r){e.ringisclockwise=function(e,n){return r(e,n,function(e,r,n){a.pcCheck(n,1,1);var t=[];if(null===n[0])return!1;if(a.isArray(n[0])){for(var o=0,l=n[0];o<l.length;o++){var f=l[o];if(!(f instanceof s))throw new Error("Invalid Argument");t.push([f.x,f.y])}t.length>0&&(n[0][0].hasZ,n[0][0].hasM)}else if(n[0]instanceof i)t=n[0]._elements,t.length>0&&(n[0]._hasZ,n[0]._hasM);else{if(!a.isImmutableArray(n[0]))throw new Error("Invalid Argument");for(var u=0,m=n[0].toArray();u<m.length;u++){var f=m[u];if(!(f instanceof s))throw new Error("Invalid Argument");t.push([f.x,f.y])}t.length>0&&(n[0].get(0).hasZ,n[0].get(0).hasM)}return!(t.length<3)&&new c({rings:[],spatialReference:{wkid:4326}}).isClockwise(t)})},e.polygon=function(e,i){return r(e,i,function(r,i,o){a.pcCheck(o,1,1);var l=null;if(o[0]instanceof n){if((l=a.fixSpatialReference(t.parseGeometryFromDictionary(o[0]),e.spatialReference))instanceof c==!1)throw new Error("Illegal Parameter")}else l=o[0]instanceof c?g.fromJson(o[0].toJson()):a.fixSpatialReference(new c(JSON.parse(o[0])),e.spatialReference);if(null!==l&&!1===l.spatialReference.equals(e.spatialReference))throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");return a.fixNullGeometry(l)})},e.polyline=function(e,i){return r(e,i,function(r,i,o){a.pcCheck(o,1,1);var l=null;if(o[0]instanceof n){if((l=a.fixSpatialReference(t.parseGeometryFromDictionary(o[0]),e.spatialReference))instanceof u==!1)throw new Error("Illegal Parameter")}else l=o[0]instanceof u?g.fromJson(o[0].toJson()):a.fixSpatialReference(new u(JSON.parse(o[0])),e.spatialReference);if(null!==l&&!1===l.spatialReference.equals(e.spatialReference))throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");return a.fixNullGeometry(l)})},e.point=function(e,i){return r(e,i,function(r,i,o){a.pcCheck(o,1,1);var l=null;if(o[0]instanceof n){if((l=a.fixSpatialReference(t.parseGeometryFromDictionary(o[0]),e.spatialReference))instanceof s==!1)throw new Error("Illegal Parameter")}else l=o[0]instanceof s?g.fromJson(o[0].toJson()):a.fixSpatialReference(new s(JSON.parse(o[0])),e.spatialReference);if(null!==l&&!1===l.spatialReference.equals(e.spatialReference))throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");return a.fixNullGeometry(l)})},e.multipoint=function(e,i){return r(e,i,function(r,i,o){a.pcCheck(o,1,1);var l=null;if(o[0]instanceof n){if((l=a.fixSpatialReference(t.parseGeometryFromDictionary(o[0]),e.spatialReference))instanceof f==!1)throw new Error("Illegal Parameter")}else l=o[0]instanceof f?g.fromJson(o[0].toJson()):a.fixSpatialReference(new f(JSON.parse(o[0])),e.spatialReference);if(null!==l&&!1===l.spatialReference.equals(e.spatialReference))throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");return a.fixNullGeometry(l)})},e.extent=function(e,i){return r(e,i,function(r,i,l){l=a.autoCastFeatureToGeometry(l),a.pcCheck(l,1,1);var m=null;if(l[0]instanceof n)m=a.fixSpatialReference(t.parseGeometryFromDictionary(l[0]),e.spatialReference);else if(l[0]instanceof s){var p={xmin:l[0].x,ymin:l[0].y,xmax:l[0].x,ymax:l[0].y,spatialReference:l[0].spatialReference.toJson()};l[0].hasZ?(p.zmin=l[0].z,p.zmax=l[0].z):l[0].hasM&&(p.mmin=l[0].m,p.mmax=l[0].m),m=g.fromJson(p)}else m=l[0]instanceof c?g.fromJson(l[0].getExtent().toJson()):l[0]instanceof u?g.fromJson(l[0].getExtent().toJson()):l[0]instanceof f?g.fromJson(l[0].getExtent().toJson()):l[0]instanceof o?g.fromJson(l[0].toJson()):a.fixSpatialReference(new o(JSON.parse(l[0])),e.spatialReference);if(null!==m&&!1===m.spatialReference.equals(e.spatialReference))throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");return a.fixNullGeometry(m)})},e.geometry=function(e,i){return r(e,i,function(r,i,o){a.pcCheck(o,1,1);var l=null;if(null!==(l=o[0]instanceof t?a.fixSpatialReference(o[0].geometry(),e.spatialReference):o[0]instanceof n?a.fixSpatialReference(t.parseGeometryFromDictionary(o[0]),e.spatialReference):a.fixSpatialReference(g.fromJson(JSON.parse(o[0])),e.spatialReference))&&!1===l.spatialReference.equals(e.spatialReference))throw new Error("Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.");return a.fixNullGeometry(l)})},e.setgeometry=function(e,n){return r(e,n,function(e,r,n){if(a.pcCheck(n,2,2),!(n[0]instanceof t))throw new Error("Illegal Argument");if(!0===n[0].immutable)throw new Error("Feature is Immutable");if(!(n[1]instanceof l||null===n[1]))throw new Error("Illegal Argument");return n[0]._geometry=n[1],a.voidOperation})},e.feature=function(e,i){return r(e,i,function(r,i,o){if(0===o.length)throw new Error("Missing Parameters");var f=null;if(1===o.length)if(a.isString(o[0]))f=t.fromJson(JSON.parse(o[0]));else if(o[0]instanceof t)f=t.createFromArcadeFeature(o[0]);else if(o[0]instanceof l)f=t.createFromGraphicLikeObject(o[0],null,null);else{if(!(o[0]instanceof n))throw new Error("Illegal Argument");var s=o[0].hasField("geometry")?o[0].field("geometry"):null,c=o[0].hasField("attributes")?o[0].field("attributes"):null;null!==s&&s instanceof n&&(s=t.parseGeometryFromDictionary(s)),null!==c&&(c=t.parseAttributesFromDictionary(c)),f=t.createFromGraphicLikeObject(s,c,null)}else if(2===o.length){var s=null,c=null;if(null!==o[0])if(o[0]instanceof l)s=o[0];else{if(!(s instanceof n))throw new Error("Illegal Argument");s=t.parseGeometryFromDictionary(o[0])}if(null!==o[1]){if(!(o[1]instanceof n))throw new Error("Illegal Argument");c=t.parseAttributesFromDictionary(o[1])}f=t.createFromGraphicLikeObject(s,c,null)}else{var s=null,c={};if(null!==o[0])if(o[0]instanceof l)s=o[0];else{if(!(s instanceof n))throw new Error("Illegal Argument");s=t.parseGeometryFromDictionary(o[0])}for(var u=1;u<o.length;u+=2){var m=a.toString(o[u]),g=o[u+1];if(!(null===g||void 0===g||a.isString(g)||isNaN(g)||a.isDate(g)||a.isNumber(g)||a.isBoolean(g)))throw new Error("Illegal Argument");if(a.isFunctionParameter(g)||!1===a.isSimpleType(g))throw new Error("Illegal Argument");g===a.voidOperation?c[m]=null:c[m]=g}f=t.createFromGraphicLikeObject(s,c,null)}return f._geometry=a.fixSpatialReference(f.geometry(),e.spatialReference),f.immutable=!1,f})},e.dictionary=function(e,t){return r(e,t,function(e,r,t){if(0===t.length)throw new Error("Missing Parameters");if(t.length%2!=0)throw new Error("Missing Parameters");for(var i={},o=0;o<t.length;o+=2){var l=a.toString(t[o]),f=t[o+1];if(!(null===f||void 0===f||a.isString(f)||isNaN(f)||a.isDate(f)||a.isNumber(f)||a.isBoolean(f)||a.isArray(f)||a.isImmutableArray(f)))throw new Error("Illegal Argument");if(a.isFunctionParameter(f))throw new Error("Illegal Argument");f===a.voidOperation?i[l]=null:i[l]=f}var s=new n(i);return s.immutable=!1,s})},e.haskey=function(e,i){return r(e,i,function(e,r,i){a.pcCheck(i,2,2);var o=a.toString(i[1]);if(i[0]instanceof t)return i[0].hasField(o);if(i[0]instanceof n)return i[0].hasField(o);throw new Error("Illegal Argument")})},e.indexof=function(e,n){return r(e,n,function(e,r,n){a.pcCheck(n,2,2);var t=n[1];if(a.isArray(n[0])){for(var i=0;i<n[0].length;i++)if(a.equalityTest(t,n[0][i]))return i;return-1}if(a.isImmutableArray(n[0])){for(var o=n[0].length(),i=0;i<o;i++)if(a.equalityTest(t,n[0].get(i)))return i;return-1}throw new Error("Illegal Argument")})},e.angle=function(e,n){return r(e,n,function(e,r,n){if(n=a.autoCastFeatureToGeometry(n),a.pcCheck(n,2,3),!(n[0]instanceof s))throw new Error("Illegal Argument");if(!(n[1]instanceof s))throw new Error("Illegal Argument");if(n.length>2&&!(n[2]instanceof s))throw new Error("Illegal Argument");return 2===n.length?m.angle2D(n[0],n[1]):m.angleBetween2D(n[0],n[1],n[2])})},e.bearing=function(e,n){return r(e,n,function(e,r,n){if(n=a.autoCastFeatureToGeometry(n),a.pcCheck(n,2,3),!(n[0]instanceof s))throw new Error("Illegal Argument");if(!(n[1]instanceof s))throw new Error("Illegal Argument");if(n.length>2&&!(n[2]instanceof s))throw new Error("Illegal Argument");return 2===n.length?m.bearing2D(n[0],n[1]):m.bearingBetween2D(n[0],n[1],n[2])})}}Object.defineProperty(r,"__esModule",{value:!0}),r.registerFunctions=p});