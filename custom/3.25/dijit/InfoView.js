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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/kernel","dojo/has","dojo/query","dojo/dom","dojo/dom-class","dojo/dom-construct","dojo/dom-geometry","../kernel","./_TouchBase"],function(t,e,i,s,n,o,h,c,a,r,l,_,f){var d=t(null,{declaredClass:"esri.dijit.InfoView",_items:[],_top:null,_sections:[],_isDecelerate:!1,constructor:function(t,e){var i;if(this.container=c.byId(e),this._touchBase=f(this.container,null),this._slideDiv=r.create("div",null,this.container,"first"),this.events=[],this._items=t.items,t.sections&&(this._sections=t.sections),a.add(this.container,"esriMobileInfoView"),0===this._sections.length)r.create("div",{},this._slideDiv);else for(i=0;i<this._sections.length;i++){var s=r.create("div",{class:"esriMobileInfoViewSection"},this._slideDiv);r.create("div",{innerHTML:this._sections[i].title},s)}for(i=0;i<this._items.length;i++){var n,o,h=0;switch(this._items[i].section&&(h=this._items[i].section),this._items[i].type){case"div":o=r.create("div",{class:"esriMobileInfoViewItem",style:this._items[i].style},this._slideDiv.childNodes[h]),n=r.create("div",{innerHTML:this._items[i].text},o)}this._items[i].className&&a.add(n,this._items[i].className),n._index=i,n._item=this._items[i],this._items[i]._node=n}this.startTouchY=0},startup:function(){this.onCreate(this._items),this._animateTo(0)},destroy:function(){i.forEach(this.events,s.disconnect),this._touchBase=null,n.query("img",this.container).forEach(function(t){t._index=null,t._item=null,r.destroy(t),t=null}),this._items=null,r.destroy(this._slideDiv),r.destroy(this.container),this.container=this._slideDiv=null},getItems:function(){return this._items},setPreventDefault:function(t){this._touchBase.setPreventDefault(t)},enableTouchScroll:function(){this._touchBase.setPreventDefault(!0),this.events.push(s.connect(this._touchBase,"onTouchStart",this,this._onTouchStartHandler)),this.events.push(s.connect(this._touchBase,"onTouchMove",this,this._onTouchMoveHandler)),this.events.push(s.connect(this._touchBase,"onTouchEnd",this,this._onTouchEndHandler)),this._slideDiv.style.webkitTransform="translate3d(0,"+this._top+"px, 0)"},disableTouchScroll:function(){s.disconnect(this.events.pop()),s.disconnect(this.events.pop()),s.disconnect(this.events.pop()),this._touchBase.setPreventDefault(!1),this._slideDiv.style.webkitTransform="translate3d(0, 0px, 0)"},animateTo:function(){this._slideDiv.style.WebkitTransitionDuration="0s",this._animateTo(0)},onSelect:function(t){},onUnSelect:function(t){},onCreate:function(t){},onClick:function(t){},onSwipeLeft:function(){},onSwipeRight:function(){},_onTouchStartHandler:function(t){this._slideDiv.style.WebkitTransitionDuration="0s",this._moveDirection=null,this._startTime=new Date,this.startTouchY=t.touches[0].clientY,this.contentStartOffsetY=this.contentOffsetY},_onTouchMoveHandler:function(t){if(this._moveDirection||(Math.abs(t.curY)>Math.abs(t.curX)?this._moveDirection="vertical":this._moveDirection="horizontal"),"horizontal"!==this._moveDirection&&"vertical"===this._moveDirection){var e=t.touches[0].clientY,i=e-this.startTouchY,s=i+this.contentStartOffsetY;this._animateTo(s)}},_onTouchEndHandler:function(t){this._endTime=new Date,this._deltaMovement=t.curY,"vertical"===this._moveDirection?this._shouldStartMomentum()?this._doMomentum():this._snapToBounds():"horizontal"===this._moveDirection&&("left"===t.swipeDirection?this.onSwipeLeft():"right"===t.swipeDirection&&this.onSwipeRight())},_shouldStartMomentum:function(){return this._diff=this._endTime-this._startTime,this._velocity=this._deltaMovement/this._diff,Math.abs(this._velocity)>.2&&this._diff<200},_doMomentum:function(){var t,e,i=l.getContentBox(this.container),s=this._velocity<0?.001:-.001,n=-this._velocity*this._velocity/(2*s),o=-this._velocity/s,h={x:0,y:0},c={x:0,y:.3},a={x:.6,y:1},r={x:1,y:1},_=3*(c.x-h.x),f=3*(a.x-c.x)-_,d=r.x-h.x-_-f,u=0,v=0;if(i.h>this._slideDiv.scrollHeight)this.contentOffsetY=0,v=300;else if(this.contentOffsetY+n>0){for(t=0,e=Math.floor(o/20);t<e;t++)if(u=(d*(20*t)^3)+(f*(20*t)^2)+_*(20*t)+h.x,u=this._velocity<0?-u:u,this.contentOffsetY+u>0){v=20*t;break}0===v&&(v=300),this.contentOffsetY=0}else if(Math.abs(this.contentOffsetY+n)+i.h>this._slideDiv.scrollHeight){for(this.contentOffsetY=i.h-this._slideDiv.scrollHeight,t=0,e=Math.floor(o/20);t<e;t++)if(u=(d*(20*t)^3)+(f*(20*t)^2)+_*(20*t)+h.x,u=this._velocity<0?-u:u,Math.abs(this.contentOffsetY+u)>this._slideDiv.scrollHeight){v=20*t;break}}else v=o,this.contentOffsetY=this.contentOffsetY+n;this._slideDiv.style.webkitTransition="-webkit-transform "+v+"ms cubic-bezier(0, 0.3, 0.6, 1)",this._animateTo(this.contentOffsetY)},_snapToBounds:function(){var t=l.getContentBox(this.container);t.h>this._slideDiv.scrollHeight?this.contentOffsetY=0:this.contentOffsetY>0?this.contentOffsetY=0:Math.abs(this.contentOffsetY)+t.h>this._slideDiv.scrollHeight&&(this.contentOffsetY=t.h-this._slideDiv.scrollHeight),this._slideDiv.style.WebkitTransitionDuration="0.5s",this._animateTo(this.contentOffsetY)},_animateTo:function(t){this.contentOffsetY=t,this._slideDiv.style.webkitTransform="translate3d(0, "+t+"px, 0)"},_stopMomentum:function(){if(this._isDecelerating()){var t=document.defaultView.getComputedStyle(this._slideDiv,null),e=new WebKitCSSMatrix(t.webkitTransform);this._slideDiv.style.webkitTransition="",this.animateTo(e.m42)}},_isDecelerating:function(){return!!this.isDecelerate},_toggleNode:function(t,e){"ON"===e.toggleState?(e.toggleState="OFF",e.src&&(t.src=e.src.toString()),this.onUnSelect(e)):(e.toggleState="ON",e.srcAlt&&(t.src=e.srcAlt),this.onSelect(e))}});return o("extend-esri")&&e.setObject("dijit.InfoView",d,_),d});