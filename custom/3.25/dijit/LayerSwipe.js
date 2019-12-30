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

define(["dojo/Evented","dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel","dijit/_WidgetBase","dijit/_TemplatedMixin","dojo/on","dojo/text!./templates/LayerSwipe.html","dojo/i18n!../nls/jsapi","dojo/dom-class","dojo/dom-style","dojo/dnd/move","dojo/dnd/Mover","dojo/sniff","dojo/dom-geometry","../geometry/Point","dojo/Deferred","dojo/promise/all"],function(e,t,i,s,a,o,r,h,l,n,p,c,d,y,m,_,u,v,f){var g=t([y],{onFirstMove:function(e){var t,i,s=this.node.style,a=this.host;switch(s.position){case"relative":case"absolute":t=Math.round(parseFloat(s.left))||0,i=Math.round(parseFloat(s.top))||0;break;default:s.position="absolute";var o=_.getMarginBox(this.node);t=o.l,i=o.t}this.marginBox.l=t-this.marginBox.l,this.marginBox.t=i-this.marginBox.t,a&&a.onFirstMove&&a.onFirstMove(this,e),this.events.shift().remove()}}),w=t("esri.dijit.LayerSwipe",[o,r,e],{templateString:l,options:{theme:"LayerSwipe",layers:[],enabled:!0,type:"vertical",invertPlacement:!1,clip:9},constructor:function(e,t){var s=i.mixin({},this.options,e);this.domNode=t,this._i18n=n,this.set("map",s.map),this.set("layers",s.layers),this.set("top",s.top),this.set("left",s.left),this.set("theme",s.theme),this.set("enabled",s.enabled),this.set("type",s.type),this.set("clip",s.clip),this.set("invertPlacement",s.invertPlacement),this.watch("theme",this._updateThemeWatch),this.watch("enabled",this._enabled),this.watch("type",this._type),this.watch("invertPlacement",this._invertPlacement),this._css={handleContainer:"handleContainer",handle:"handle"},this._listeners=[]},startup:function(){this.inherited(arguments),this.map||(this.destroy(),console.log("LayerSwipe::map required")),this.set("layers",this.layers),this.layers.length||(this.destroy(),console.log("LayerSwipe::layer required")),this._allLoaded().then(i.hitch(this,function(){this._init()}),function(e){console.log("LayerSwipe::"+e.message)})},destroy:function(){this._removeEvents(),this._unclipLayers(),this.inherited(arguments)},swipe:function(){this._swipe()},enable:function(){this.set("enabled",!0)},disable:function(){this.set("enabled",!1)},_allLoaded:function(){for(var e=[],t=0;t<this.layers.length;t++){"string"==typeof this.layers[t]&&(this.layers[t]=this.map.getLayer(this.layers[t]),this.layers[t]||console.log("LayerSwipe::Could not get layer by ID"));var s=new v;this.layers[t].loaded?s.resolve("layer loaded"):this._layerLoadedPromise(t,s),e.push(s.promise)}var a=new v;return this.map.loaded?a.resolve("map loaded"):h.once(this.map,"load",i.hitch(this,function(){a.resolve("map loaded")})),e.push(a.promise),f(e)},_layerLoadedPromise:function(e,t){h.once(this.layers[e],"load",function(){t.resolve("layer loaded")})},_mb:function(){var e=_.getMarginBox(this.map.root);return{t:0,l:0,w:e.l+e.w,h:e.h+e.t}},_setInitialPosition:function(){var e,t,i,s,a,o,r;if(e=0,t=0,s=_.getMarginBox(this._moveableNode),i=this.get("type"),a=this.get("top"),o=this.get("left"),r=this.get("invertPlacement"),"scope"===i)t=void 0!==a?a:this.map.height/2-s.h/2,e=void 0!==o?o:this.map.width/2-s.w/2;else if("horizontal"===i){var h=this.map.height/4-s.h/2;t=void 0!==a?a:r?this.map.height-h:h}else{var l=this.map.width/4-s.w/2;e=void 0!==o?o:r?this.map.width-l:l}c.set(this._moveableNode,{top:t+"px",left:e+"px"})},_setSwipeType:function(){var e=this.get("moveable"),t=this.get("type");t&&(e&&e.destroy(),p.add(this._moveableNode,t),e=new d.parentConstrainedMoveable(this._moveableNode,{area:"content",within:!0,handle:this._moveableNode,constraints:i.hitch(this,this._mb),mover:g}),this.set("moveable",e),this._setInitialPosition())},_init:function(){this._setSwipeType(),this._setupEvents(),this._enabled(),this.set("loaded",!0),this.emit("load",{}),this.swipe()},_removeEvents:function(){if(this._listeners&&this._listeners.length)for(var e=0;e<this._listeners.length;e++)this._listeners[e]&&this._listeners[e].remove();this._listeners=[]},_repositionMover:function(){var e=_.getMarginBox(this._moveableNode);e&&(e.t>this.map.height||e.t<0||e.l>this.map.width||e.l<0)&&this._setInitialPosition()},_setupEvents:function(){this._removeEvents(),this._mapResize=h.pausable(this.map,"resize",i.hitch(this,function(){this._repositionMover()})),this._listeners.push(this._mapResize),this._swipeMove=h.pausable(this.moveable,"Move",i.hitch(this,function(){this.swipe()})),this._listeners.push(this._swipeMove),this._swipePanEnd=h.pausable(this.map,"pan-end",i.hitch(this,function(){this._swipe()})),this._listeners.push(this._swipePanEnd),this._mapUpdateStart=h.pausable(this.map,"update-start",i.hitch(this,function(){this._swipe()})),this._listeners.push(this._mapUpdateStart),this._mapUpdateEnd=h.pausable(this.map,"update-end",i.hitch(this,function(){this._swipe()})),this._listeners.push(this._mapUpdateEnd),this._swipePan=h.pausable(this.map,"pan",i.hitch(this,function(){this._swipe()})),this._listeners.push(this._swipePan),this._toolClick=h.pausable(this._moveableNode,"click",i.hitch(this,function(e){if("scope"===this.get("type")){e=this._clickPosition(e);try{e&&this.map.onClick(e,"other")}catch(e){console.log("LayerSwipe::scope click error")}this._clickCoords=null}})),this._listeners.push(this._toolClick),this._toolDblClick=h.pausable(this._moveableNode,"dblclick",i.hitch(this,function(e){if("scope"===this.get("type")){e=this._clickPosition(e);try{e&&this.map.navigationManager.mouseEvents.onDblClick(e,"other")}catch(e){console.log("LayerSwipe::scope dblclick error")}this._clickCoords=null}})),this._listeners.push(this._toolDblClick),this._evtCoords=h.pausable(this.moveable,"MouseDown",i.hitch(this,function(e){"scope"===this.get("type")&&(this._clickCoords={x:e.x,y:e.y})})),this._listeners.push(this._evtCoords)},_clickPosition:function(e){if(this._clickCoords&&this._clickCoords.x===e.x&&this._clickCoords.y===e.y){var t=_.position(this.map.root,!0),i=e.pageX-t.x,s=e.pageY-t.y;return e.x=i,e.y=s,e.screenPoint={x:i,y:s},e.mapPoint=this.map.toMap(new u(i,s,this.map.spatialReference)),e}return null},_getLayerNode:function(e){return e._heatmapManager&&e._heatmapManager.imageLayer&&e._heatmapManager.imageLayer._div||e._div},_positionValues:function(e){var t,i,s,a,o,r,h,l={layer:e,layerNode:this._getLayerNode(e),layerGraphics:e._heatmapManager?null:e.graphics,swipeType:this.get("type"),l:0,r:0,t:0,b:0};return a=this.get("clip"),h=this.get("invertPlacement"),i=_.getMarginBox(this._moveableNode),"vertical"!==l.swipeType&&"horizontal"!==l.swipeType||(l.layerNode&&(t=_.getMarginBox(l.layerNode),o=Math.abs(t.t),r=Math.abs(t.l)),s=_.getMarginBox(this.map.root)),"vertical"===l.swipeType?(h?t&&t.l>0?(l.l=i.l-r,l.r=this.map.width-r):t&&t.l<0?(l.l=i.l+r,l.r=this.map.width+r):(l.l=i.l,l.r=this.map.width):t&&t.l>0?(l.l=0-r,l.r=i.l-r):t&&t.l<0?(l.l=0+r,l.r=i.l+r):(l.l=0,l.r=i.l),t&&t.t>0?(l.t=0-o,l.b=s.h-o):t&&t.t<0?(l.t=0+o,l.b=s.h+o):(l.t=0,l.b=s.h)):"horizontal"===l.swipeType?(h?t&&t.t>0?(l.t=i.t-o,l.b=this.map.height-o):t&&t.t<0?(l.t=i.t+o,l.b=this.map.height+o):(l.t=i.t,l.b=this.map.height):t&&t.t>0?(l.t=0-o,l.b=i.t-o):t&&t.t<0?(l.t=0+o,l.b=i.t+o):(l.t=0,l.b=i.t),t&&t.l>0?(l.l=0-r,l.r=s.w-r):t&&t.l<0?(l.l=0+r,l.r=s.w+r):(l.l=0,l.r=s.w)):"scope"===l.swipeType&&(l.layerGraphics?(l.l=i.l,l.r=i.w,l.t=i.t,l.b=i.h,void 0!==a&&(l.l+=a,l.r+=-2*a,l.t+=a,l.b+=-2*a)):(l.l=i.l,l.r=l.l+i.w,l.t=i.t,l.b=l.t+i.h,void 0!==a&&(l.l+=a,l.r+=-a,l.t+=a,l.b+=-a))),l},_clipLayer:function(e){if(e.layerNode)if(e.layerGraphics){var t=e.layer.getNavigationTransform();t&&(t.hasOwnProperty("dx")&&(e.l+=-t.dx),t.hasOwnProperty("dy")&&(e.t+=-t.dy)),e.layerNode.setClip({x:e.l,y:e.t,width:e.r,height:e.b})}else{var i,s=e.layerNode.style;if(e&&s&&e.hasOwnProperty("r")&&e.hasOwnProperty("l")&&e.hasOwnProperty("t")&&e.hasOwnProperty("b")){if("css-transforms"===this.map.navigationMode){if(s){var a=this._getTransformValue(s);a&&(i=this._parseTransformValue(a),e.l-=i.x,e.r-=i.x,e.t-=i.y,e.b-=i.y)}}else s&&"scope"===e.swipeType&&(i=this._parseScopeStyle(s),e.l-=i.x,e.r-=i.x,e.t-=i.y,e.b-=i.y);var o,r=m("ie");o=r&&r<8?"rect("+e.t+"px "+e.r+"px "+e.b+"px "+e.l+"px)":"rect("+e.t+"px, "+e.r+"px, "+e.b+"px, "+e.l+"px)",c.set(e.layerNode,"clip",o)}}else console.log("LayerSwipe::Invalid layer type")},_swipe:function(){if(this.get("loaded")&&this.get("enabled")){var e={layers:[]};if(this.layers&&this.layers.length)for(var t=0;t<this.layers.length;t++){var i=this._positionValues(this.layers[t]);this._clipLayer(i);var s={layer:this.layers[t],left:i.l,right:i.r,top:i.t,bottom:i.b};e.layers.push(s)}this.emit("swipe",e)}},_getTransformValue:function(e){var t,i;if(e){i=["transform","-webkit-transform","-ms-transform","-moz-transform","-o-transform"];for(var s=0;s<i.length&&!(t=e[i[s]]);s++){try{t=e.getPropertyValue(i[s])}catch(e){}if(t)break}}return t},_parseTransformValue:function(e){var t={x:0,y:0};-1!==e.toLowerCase().indexOf("translate3d")?e=e.replace("translate3d(","").replace(")","").replace(/px/gi,"").replace(/\s/i,"").split(","):-1!==e.toLowerCase().indexOf("translate")&&(e=e.replace("translate(","").replace(")","").replace(/px/gi,"").replace(/\s/i,"").split(","));try{t.x=parseFloat(e[0]),t.y=parseFloat(e[1])}catch(e){console.log("LayerSwipe::Error parsing transform number")}return t},_parseScopeStyle:function(e){var t={x:0,y:0};try{t.x=parseFloat(e.left.replace(/px/gi,"").replace(/\s/i,"")),t.y=parseFloat(e.top.replace(/px/gi,"").replace(/\s/i,""))}catch(e){console.log("LayerSwipe::Error parsing div style float")}return t},_updateThemeWatch:function(){var e=arguments[1],t=arguments[2];p.remove(this.domNode,e),p.add(this.domNode,t)},_type:function(){var e=arguments[1];e&&p.remove(this._moveableNode,e),this._setSwipeType(),this._setupEvents(),this.swipe()},_pauseEvents:function(){if(this._listeners&&this._listeners.length)for(var e=0;e<this._listeners.length;e++)this._listeners[e].pause()},_resumeEvents:function(){if(this._listeners&&this._listeners.length)for(var e=0;e<this._listeners.length;e++)this._listeners[e].resume()},_unclipLayers:function(){if(this.get("loaded")&&this.layers&&this.layers.length)for(var e=0;e<this.layers.length;e++){var t=this._getLayerNode(this.layers[e]),i=this.layers[e].graphics;if(t)if(i){t.setClip&&t.setClip(null);var s=t.rawNode||t;s&&s.hasOwnProperty("setAttribute")&&c.set(s,"clip","")}else{var a,o=m("ie");a=o&&o<8?"rect(auto auto auto auto)":"auto",c.set(t,"clip",a)}}},_invertPlacement:function(){this.swipe()},_enabled:function(){this.get("enabled")?(c.set(this.domNode,"display","block"),this._resumeEvents(),this.swipe()):(this._pauseEvents(),c.set(this.domNode,"display","none"),this._unclipLayers())}});return s("extend-esri")&&i.setObject("dijit.LayerSwipe",w,a),w});