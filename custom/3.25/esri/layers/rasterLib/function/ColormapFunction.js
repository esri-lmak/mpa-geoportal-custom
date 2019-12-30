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

define(["dojo/_base/declare","dojo/_base/lang","../../../renderers/colorRampGenerator","./RasterFunctionX","./pixelShaders","./RasterFunctionWebGLMixin","./rasterUtils"],function(e,t,r,o,i,n,a){return e([o,n],{declaredClass:"esri.layers.rasterLib.function.ColormapFunction",functionName:"Colormap",pixelType:"U8",renderTexture:!1,supportWebGL:!0,support2D:!0,constructor:function(e){var t={colormap:null,colorRampName:null,colorRamp:null,colorMapName:null,raster:null};this.functionArguments=this.mixinIgnoreCase(t,e),this.invert=e&&e.invert;var r,o,i,n,a,l,s,u,m,p,c=e.colormap||e.Colormap;if(c){if(c.features||c[0].attributes){if(r=c.features||c,o=Object.keys(r[0].attributes),n=o.filter(function(e){return"alpha"===e.toLowerCase()})[0],i=o.filter(function(e){return"value"===e.toLowerCase()})[0],a=o.filter(function(e){return"red"===e.toLowerCase()})[0],l=o.filter(function(e){return"green"===e.toLowerCase()})[0],s=o.filter(function(e){return"blue"===e.toLowerCase()})[0],!(i&&a&&l&&s))throw"invalid colormap";if(c=r.map(function(e){return n?[e.attributes[i],e.attributes[a],e.attributes[l],e.attributes[s],e.attributes[n]]:[e.attributes[i],e.attributes[a],e.attributes[l],e.attributes[s]]}),u=Math.max.apply(null,c.map(function(e){return e[1]}))<1.1,m=n&&Math.max.apply(null,c.map(function(e){return e[4]}))<1.1,u)for(p=0;p<c.length;p++)c[p][1]=Math.round(255*c[p][1]),c[p][2]=Math.round(255*c[p][2]),c[p][3]=Math.round(255*c[p][3]),m&&(c[p][4]=Math.round(255*c[p][4]))}this.functionArguments.colormap=this._sortClr(c)}this._initialize()},bind:function(e){this._initialize();var r=this.getSourceRasterInfo(e);return r.raster&&"F32"!==r.raster.pixelType?(this.rasterInfo=t.mixin(r.raster,{bandCount:3,pixelType:this._calculatePixelType(this.pixelType,"U8"),statistics:null,histogram:null}),this.rasterInfo.keyProperties=this.rasterInfo.keyProperties||{},this.rasterInfo.keyProperties.DataType="Processed",!0):new Error("The raster input to colormap function is invalid. It must be integer type.")},read2D:function(e){return this._colorize(e.raster)},readGL:function(e){return this._colorizeGL(e.raster)},_colorize:function(e){this._performance.start();var t=a.colorize(e.pixelBlock,{indexedColormap:this._indexedColormap,indexedColormapOffset:this._indexedColormapOffset,indexed2DColormap:this._indexed2DColormap,alphaSpecified:this._alphaSpecified});return this._addPerformanceMetric(this._performance.elapsed()),{extent:e.extent,pixelBlock:t}},_binarySearchClr:function(e,t){for(var r=0,o=e.length-1,i=0,n=0;r<o;)if(i=Math.floor((r+o)/2),n=e[i],n[0]<t)r=i;else{if(!(n[0]>t))return n.slice(1);o=i}return null},_sortClr:function(e,t){var r,o,i,n=[];for(r=0;r<e.length;r++)n.push(e[r]);for(r=0;r<n.length-1;r++)for(i=n[r],o=r+1;o<n.length;o++)i[0]>n[o][0]&&(i=n[o],n[o]=n[r],n[r]=i);if(t)for(r=0;r<n.length/2;r++)i=n[r],n[n.length-1-r]=n[r],n[r]=i;return n},_invertColorRamp:function(e){if(!e)return e;var t={type:e.type};return"random"===e.type?t=e:"multipart"===e.type?t.colorRamps=e.colorRamps.map(function(e){return{fromColor:e.toColor,toColor:e.fromColor}}).reverse():(t.fromColor=e.toColor,t.toColor=e.fromColor),t},_initialize:function(){if(this._indexedColormapOffset=0,this.functionArguments.colormap){var e=a.buildIndexedColormap(this.functionArguments.colormap);this._alphaSpecified=e&&e.alphaSpecified,this._indexedColormap=e&&e.indexedColormap,this._indexedColormapOffset=e&&e.offset,this._indexedColormap||(this._indexed2DColormap=this._getIndexed2DColormap())}else this.functionArguments.colorRamp?"multipart"===this.functionArguments.colorRamp.type?this.invert?this._indexedColormap=r.createMultiPartColorRamp(this._invertColorRamp(this.functionArguments.colorRamp)):this._indexedColormap=r.createMultiPartColorRamp(this.functionArguments.colorRamp):this.invert?this._indexedColormap=r.createAlgorithmicColorRamp(this._invertColorRamp(this.functionArguments.colorRamp)):this._indexedColormap=r.createAlgorithmicColorRamp(this.functionArguments.colorRamp):this.functionArguments.colormapName&&"random"===this.functionArguments.colormapName.toLowerCase()&&(this._indexedColormap=r.createRandomColorRamp())},_getIndexed2DColormap:function(){var e=this.functionArguments.colormap;if(!e)return null;var t=0;e[0][0]<0&&(t=e[0][0]);var r,o=[],i=5===e[0].length;for(r=0;r<e.length;r++)o[e[r][0]-t]=i?e[r].slice(1):e[r].slice(1).concat([255]);return o},_colorizeGL:function(e){this._performance.start(),this._initializeProgram({fragment:i.colormap,fragmentName:"Colormap"});var t=this._indexedColormap,r=this._indexedColormapOffset;this._clrTexture||(this._clrTexture=this._setupColormapTexture(t));var o=this._clrTexture,n=this.gl,a=this.bindFrameBuffer(),l=n.getUniformLocation(this.rasterProgram,"u_image"),s=n.getUniformLocation(this.rasterProgram,"u_image1");n.uniform1i(l,0),n.uniform1i(s,1);var u=this._setupTextureData(e);return n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,u.texture),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,o),this._setUniforms({u_indexedColormapOffset:r,u_indexedColormapMaxIndex:t.length/4-1}),this._drawGL(),{extent:u.extent,texture:a.texture}},_setupColormapTexture:function(e){var t,r=this._createTexture(),o=this.gl,i=e.length/4,n=new Float32Array(e.length),a=this.renderTexture?255:1;for(t=0;t<e.length;t++)n[t]=e[t]/a;return o.getExtension("OES_texture_float"),o.texImage2D(o.TEXTURE_2D,0,o.RGBA,i,1,0,o.RGBA,o.FLOAT,n),r}})});