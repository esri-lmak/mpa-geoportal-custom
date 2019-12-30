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

define(["require","exports","../../../../core/tsSupport/assignHelper","dojo/has","../../../../core/libs/gl-matrix/mat4","./enums","./GeometryUtils","./MaterialManager","./Utils","./brushes/WGLBrushInfo","./brushes/WGLBrushStencil","./brushes/WGLGeometryBrushFill","./brushes/WGLGeometryBrushLabel","./brushes/WGLGeometryBrushLine","./brushes/WGLGeometryBrushMarker","./brushes/WGLGeometryBrushText","./painter/WGLHighlightPainter","./../../../webgl/FramebufferObject"],function(t,e,s,r,i,a,n,h,o,u,_,d,l,c,p,f,w,g){Object.defineProperty(e,"__esModule",{value:!0});var P=function(){function t(){this._initialized=!1}return t.prototype.registerPass=function(t,e){this._initialize();for(var s=0,r=e;s<r.length;s++){var i=r[s];this._passMap.set(i,t)}return this},t.prototype.getPaintPassTs=function(t){return this._initialize(),this._passMap.has(t)?[this._passMap.get(t)]:[]},t.prototype._initialize=function(){this._initialized||(this._passMap=new Map,this._initialized=!0)},t}();e.WGLPainterOptions=P;var b=new Uint8Array(4*o.C_HITTEST_SEARCH_SIZE*o.C_HITTEST_SEARCH_SIZE),x=new Uint32Array(b.buffer),L=function(){function t(){this._hlPainter=new w,this._extrudeMatrix=new Float32Array(16),this._extrudeNoRotationMatrix=new Float32Array(16),this._extrudeRotateVector=new Float32Array([0,0,1]),this._extrudeScaleVector=new Float32Array([1,1,1]),this._state={rotation:0,width:0,height:0},this._cachedWidth=0,this._cachedHeight=0,this._cachedRotation=0,this.materialManager=new h}return t.allGeometryPhases=function(){return[a.WGLDrawPhase.FILL,a.WGLDrawPhase.LINE,a.WGLDrawPhase.MARKER,a.WGLDrawPhase.TEXT]},t.toWGLDrawPhases=function(t){for(var e,s=[],r=0;r<a.WGLDrawPhase.NUM_DRAW_PHASES;r++)(e=1<<r)&t&&s.push(e);return s},Object.defineProperty(t.prototype,"extrudeMatrix",{get:function(){return this._extrudeMatrix},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"extrudeNoRotationMatrix",{get:function(){return this._extrudeNoRotationMatrix},enumerable:!0,configurable:!0}),t.prototype.dispose=function(){this.materialManager.dispose(),this.textureManager=null,this._hlPainter&&(this._hlPainter.dispose(),this._hlPainter=null),this._hittestFBO&&(this._hittestFBO.dispose(),this._hittestFBO=null),this._passes&&(this._passes.forEach(function(t){return t.dispose()}),this._passes.clear()),this._brushes&&(this._brushes.forEach(function(t){return t.forEach(function(t){return t.dispose()})}),this._brushes.clear())},t.prototype.initialize=function(t){this.materialManager.initialize(t)},t.prototype.update=function(t,e){this._state=t,this._state.width===this._cachedWidth&&this._state.height===this._cachedHeight&&this._state.rotation===this._cachedRotation||(this._extrudeScaleVector[0]=2/t.width,this._extrudeScaleVector[1]=-2/t.height,i.identity(this._extrudeMatrix),i.rotate(this._extrudeMatrix,this._extrudeMatrix,-t.rotation*n.C_DEG_TO_RAD,this._extrudeRotateVector),i.scale(this._extrudeMatrix,this._extrudeMatrix,this._extrudeScaleVector),i.transpose(this._extrudeMatrix,this._extrudeMatrix),i.identity(this._extrudeNoRotationMatrix),i.scale(this._extrudeNoRotationMatrix,this._extrudeNoRotationMatrix,this._extrudeScaleVector),i.transpose(this._extrudeNoRotationMatrix,this._extrudeNoRotationMatrix),this._cachedWidth=this._state.width,this._cachedHeight=this._state.height,this._cachedRotation=this._state.rotation)},t.prototype.getBrushes=function(t){if(!this._brushes){var e=new d.default,s=new p.default,r=new c.default,i=new f.default,n=new l.default,h=new u.default,o=new _.default;this._brushes=new Map,this._brushes.set(a.WGLDrawPhase.FILL,[e]),this._brushes.set(a.WGLDrawPhase.MARKER,[s]),this._brushes.set(a.WGLDrawPhase.LINE,[r]),this._brushes.set(a.WGLDrawPhase.TEXT,[i]),this._brushes.set(a.WGLDrawPhase.LABEL,[n]),this._brushes.set(a.WGLDrawPhase.LABEL_ALPHA,[n]),this._brushes.set(a.WGLDrawPhase.HITTEST,[e,s,r,i]),this._brushes.set(a.WGLDrawPhase.HIGHLIGHT,[e,s,r,i]),this._brushes.set(a.WGLDrawPhase.CLIP,[o]),this._brushes.set(a.WGLDrawPhase.DEBUG,[h])}if(!this._brushes.has(t))throw new Error("WGLPainter: Tried to get brush for unknown phase: "+t);return this._brushes.get(t)},t.prototype.bindTextureManager=function(t){this.textureManager=t},t.prototype.draw=function(t,e,s,r){s[0]===a.WGLDrawPhase.LABEL_ALPHA&&s[0]===a.WGLDrawPhase.LABEL||this._drawClippingRects(t,e);var i=t.context;i.setBlendingEnabled(!0),i.setStencilWriteMask(0),i.setBlendFunctionSeparate(1,771,1,771),this._drawPhases(t,e,s,r),this._debugTiles(t,e)},t.prototype.setHighlightOptions=function(t){this._hlPainter.setHighlightOptions(t)},t.prototype.highlight=function(t,e){var s=t.context,r=s.getViewport();this._hlPainter.setup(s,r.width,r.height),this._hlPainter.startMaskDraw(s),this._drawClippingRects(t,e),s.setBlendingEnabled(!0),s.setStencilWriteMask(0),s.setBlendFunctionSeparate(1,771,1,771),this._drawPhases(t,e,[a.WGLDrawPhase.HIGHLIGHT]),this._hlPainter.draw(s)},t.prototype.hitTest=function(t,e){var s=o.C_HITTEST_SEARCH_SIZE,r=[0,0],i=[0,0],n=t.state;if(n.toMap(r,[0,0]),n.toMap(i,[s,s]),0===e.filter(function(t){return!(r[0]>t.bounds[2]||i[0]<t.bounds[0]||r[1]<t.bounds[1]||i[1]>t.bounds[3])}).length)return[];var h=t.context;this._hittestFBO||(this._hittestFBO=g.create(h,{colorTarget:0,depthStencilTarget:3,width:s,height:s}));var u=h.getViewport(),_=h.getBoundFramebufferObject();h.bindFramebuffer(this._hittestFBO),h.setViewport(0,0,s,s),this._drawClippingRects(t,e);var d=h.gl;h.setClearColor(1,1,1,1),h.clear(d.COLOR_BUFFER_BIT),h.setBlendingEnabled(!1),h.setStencilWriteMask(0),this._drawPhases(t,e,[a.WGLDrawPhase.HITTEST]),h.setBlendingEnabled(!0),this._hittestFBO.readPixels(0,0,s,s,6408,5121,b);for(var l=s*s,c=new Set,p=0;p<l;p++){var f=x[p];4294967295!==f&&c.add(f)}h.bindFramebuffer(_),h.setViewport(u.x,u.y,u.width,u.height);var w=[];return c.forEach(function(t){w.push(t)}),w},t.prototype._getPaintPass=function(t){if(this._passes||(this._passes=new Map),!this._passes.has(t))try{this._passes.set(t,new t)}catch(e){throw new Error("Tried to instantiate WGLPaintPass with unknown constructor: "+t+",\n"+e)}return this._passes.get(t)},t.prototype._getPaintPasses=function(t,e){var s=this;return e.getPaintPassTs(t).map(function(t){return s._getPaintPass(t)})},t.prototype._drawPhases=function(t,e,r,i){t.context.setStencilTestEnabled(!0);for(var a=0,n=r;a<n.length;a++){var h=n[a],o=i?this._getPaintPasses(h,i):[],u=s({},t,{drawPhase:h});o.forEach(function(e){return e.preRender(t,t.rendererInfo)});for(var _=0,d=e;_<d.length;_++){d[_].doRender(u)}o.reverse().forEach(function(e){return e.postRender(t,t.rendererInfo)})}t.context.setStencilTestEnabled(!1)},t.prototype._debugTiles=function(t,e){r("esri-feature-tiles-debug")&&this._drawPhases(t,e,[a.WGLDrawPhase.DEBUG])},t.prototype._drawClippingRects=function(t,e){if(0!==e.length){var s=t.context;s.setDepthWriteEnabled(!1),s.setDepthTestEnabled(!1),s.setStencilTestEnabled(!0),s.setBlendingEnabled(!1),s.setColorMask(!1,!1,!1,!1),s.setStencilOp(7680,7680,7681),s.setClearStencil(0),s.clear(s.gl.STENCIL_BUFFER_BIT),s.setStencilWriteMask(255);for(var r=0,i=e.length;r<e.length;r++,i--){var n=e[r];n.attached&&(n.stencilRef=i)}this._drawPhases(t,e,[a.WGLDrawPhase.CLIP]),t.context.setColorMask(!0,!0,!0,!0)}},t}();e.default=L});