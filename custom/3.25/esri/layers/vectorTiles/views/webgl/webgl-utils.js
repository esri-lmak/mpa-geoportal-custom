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

/*
   * Copyright 2010, Google Inc.
   * All rights reserved.
   *
   * Redistribution and use in source and binary forms, with or without
   * modification, are permitted provided that the following conditions are
   * met:
   *
   *   * Redistributions of source code must retain the above copyright
   * notice, this list of conditions and the following disclaimer.
   *   * Redistributions in binary form must reproduce the above
   * copyright notice, this list of conditions and the following disclaimer
   * in the documentation and/or other materials provided with the
   * distribution.
   *   * Neither the name of Google Inc. nor the names of its
   * contributors may be used to endorse or promote products derived from
   * this software without specific prior written permission.
   *
   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
   * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
   * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
   * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
   * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
   * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
   * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
   * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
   * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
   * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
   * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   */

define([],function(){var e=function(e){return'<table style="background-color: #8CE; width: 100%; height: 100%;"><tr><td align="center"><div style="display: table-cell; vertical-align: middle;"><div style="">'+e+"</div></div></td></tr></table>"},t='This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to upgrade your browser.</a>',r='It doesn\'t appear your computer can support WebGL.<br/><a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>',n=function(n,a){function E(t){var r=n.parentNode;r&&(r.innerHTML=e(t))}if(!window.WebGLRenderingContext)return E(t),[null,t];var i=o(n,a);return i?[i]:(E(r),[null,r])},a=function(){var e=function(){try{return window.WebGLRenderingContext}catch(e){return[!1,0]}}(),t=function(){try{return o(document.createElement("canvas"))}catch(e){return[!1,1]}}();return e?t?[!0,E(t)]:[!1,1]:[!1,0]},E=function(e){return{VERSION:e.getParameter(e.VERSION),SHADING_LANGUAGE_VERSION:e.getParameter(e.SHADING_LANGUAGE_VERSION),VENDOR:e.getParameter(e.VENDOR),RENDERER:e.getParameter(e.RENDERER),EXTENSIONS:e.getSupportedExtensions(),MAX_TEXTURE_SIZE:e.getParameter(e.MAX_TEXTURE_SIZE),MAX_RENDERBUFFER_SIZE:e.getParameter(e.MAX_RENDERBUFFER_SIZE),MAX_VERTEX_TEXTURE_IMAGE_UNITS:e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)}},o=function(e,t){for(var r=["webgl","experimental-webgl","webkit-3d","moz-webgl"],n=null,a=0;a<r.length;++a){try{n=e.getContext(r[a],t)}catch(e){}if(n)break}return n};return{create3DContext:o,setupWebGL:n,detectWebGL:a}});