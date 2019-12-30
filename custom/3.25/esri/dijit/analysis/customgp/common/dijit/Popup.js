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

///////////////////////////////////////////////////////////////////////////
// Copyright © 2014 - 2016 Esri. All Rights Reserved.
//
// Licensed under the Apache License Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
///////////////////////////////////////////////////////////////////////////

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/html","dojo/_base/fx","dojo/on","dojo/sniff","dojo/touch","dojo/query","dojo/dnd/move","dijit/_WidgetBase"],function(t,e,i,n,o,s,h,a,l,d,c){var u=0;return t(c,{declaredClass:"esri.dijit.analysis.customgp.common.dijit.Popup",baseClass:"jimu-popup",titleLabel:"",content:null,container:null,buttons:[],enabledButtons:[],disabledButtons:[],onClose:null,_fixedHeight:!1,autoHeight:!1,maxHeight:800,maxWidth:1024,constructor:function(){this.buttons=[],this.enabledButtons=[],this.disabledButtons=[],this.pauseKeyHandles=[],this.container=jimuConfig.layoutId},postCreate:function(){this._preProcessing(),this.inherited(arguments),this._initDomNode(),this._positioning(),n.place(this.domNode,this.container),setTimeout(e.hitch(this,function(){this._moveToMiddle()}),50),this.own(s(window,"resize",e.hitch(this,function(){if(this._fixedHeight||this.autoHeight)return this._calculatePosition(),void this._moveToMiddle();this._positioning()}))),this.overlayNode=n.create("div",{class:"jimu-overlay"},this.container),this._increaseZIndex(),o.animateProperty({node:this.domNode,properties:{opacity:1},duration:200}).play(),this.domNode.focus()},_preProcessing:function(){"number"==typeof this.height&&(this._fixedHeight=!0,this.autoHeight=!1),this.autoHeight&&(this.maxHeight=598)},_createTitleNode:function(){this.titleNode=n.create("div",{class:"title"},this.domNode),this.titleLabeNode=n.create("span",{class:"title-label jimu-float-leading",innerHTML:this.titleLabel||"&nbsp"},this.titleNode),this.closeBtnNode=n.create("div",{class:"close-btn jimu-icon jimu-icon-close jimu-float-trailing"},this.titleNode);var t=null;t="ontouchstart"in document?a.press:"click",this.own(s(this.closeBtnNode,t,e.hitch(this,this.close)))},_initDomNode:function(){this._createTitleNode(),this.contentContainerNode=n.create("div",{class:"content"},this.domNode),this.content&&("string"==typeof this.content?this.contentContainerNode.innerHTML=this.content:this.content.domNode?(this.content.placeAt(this.contentContainerNode),this.content.popup=this):1===this.content.nodeType&&n.place(this.content,this.contentContainerNode)),this.buttonContainer=n.create("div",{class:"button-container"},this.domNode),0===this.buttons.length&&n.setStyle(this.buttonContainer,"display","none");for(var t=this.buttons.length-1;t>-1;t--)this._createButton(this.buttons[t]),this.buttons[t].disable&&this.disableButton(t)},_limitButtonsMaxWidth:function(){var t=this.enabledButtons.length;if(0!==t){var o=n.getContentBox(this.buttonContainer),s=n.getMarginExtents(this.enabledButtons[0]),a=n.getPadBorderExtents(this.enabledButtons[0]),l=0,d=8===h("ie")?a.l+a.r:0;l=(o.w-(s.l+s.r+d)*t)/t,l>0&&(i.forEach(this.enabledButtons,e.hitch(this,function(t){n.setStyle(t,"maxWidth",l+"px")})),i.forEach(this.disabledButtons,e.hitch(this,function(t){n.setStyle(t,"maxWidth",l+"px")})))}},_moveableNode:function(t,i){this.moveable&&(this.moveable.destroy(),this.moveable=null);var o=n.getMarginBox(this.container);o.l=o.l-t+i,o.w=o.w+2*(t-i),this.moveable=new d.boxConstrainedMoveable(this.domNode,{box:o,handle:this.titleNode||this.contentContainerNode,within:!0}),this.own(s(this.moveable,"Moving",e.hitch(this,this.onMoving))),this.own(s(this.moveable,"MoveStop",e.hitch(this,this.onMoveStop)))},_getHeaderBox:function(){return 0===l("#header").length?{t:0,l:0,w:0,h:0}:n.getMarginBox("header")},_getFooterBox:function(){return 0===l(".footer",this.container).length?{t:0,l:0,w:0,h:0}:n.getMarginBox(l(".footer",this.container)[0])},_calculatePosition:function(){var t=n.getContentBox(this.container),e=this._getHeaderBox(),i=this._getFooterBox(),o=t.h-e.h-i.h-40,s=0;this._fixedHeight?s=this.height:this.autoHeight?s=o-200:(this.height=o>this.maxHeight?this.maxHeight:o,s=this.height);var h=(o-s)/2+e.h+20;h=h<e.h?e.h:h,this.width=this.width||this.maxWidth;var a=(t.w-this.width)/2;n.setStyle(this.domNode,{left:a+"px",top:h+"px",width:this.width+"px"})},_calculateHeight:function(){this.autoHeight?(n.setStyle(this.domNode,"height","auto"),n.addClass(this.contentContainerNode,"content-static"),0===this.buttons.length&&n.setStyle(this.contentContainerNode,{marginBottom:"15px"})):(n.setStyle(this.domNode,"height",this.height+"px"),n.addClass(this.contentContainerNode,"content-absolute"),n.addClass(this.buttonContainer,"button-container-absolute"),0===this.buttons.length&&n.setStyle(this.contentContainerNode,{bottom:"15px"})),this._moveableNode(this.width,100)},_moveToMiddle:function(){if(this.autoHeight){var t=n.getMarginBox(this.domNode),e=n.getContentBox(this.container),i=this._getHeaderBox(),o=this._getFooterBox(),s=e.h-i.h-o.h-40,h=0;h=t.h||s-200;var a=(s-h)/2+i.h+20;a=a<i.h?i.h:a;var l=(e.w-this.width)/2;n.setStyle(this.domNode,{left:l+"px",top:a+"px",width:this.width+"px"})}},_positioning:function(){this._calculatePosition(),this._calculateHeight()},_increaseZIndex:function(){n.setStyle(this.domNode,"zIndex",u+200+1),n.setStyle(this.overlayNode,"zIndex",u+200),u++},setTitleLabel:function(t){this.titleNode.innerHTML=t},onMoving:function(t){n.setStyle(t.node,"opacity",.9)},onMoveStop:function(t){n.setStyle(t.node,"opacity",1)},close:function(){if(!this.onClose||!1!==this.onClose()){var t=this.domNode.parentNode,i=e.clone(this.domNode);n.setStyle(this.domNode,"display","none"),n.destroy(this.overlayNode),this.destroy(),this.moveable.destroy(),n.place(i,t),o.animateProperty({node:i,properties:{opacity:0},duration:200,onEnd:function(){n.destroy(i)}}).play()}},addButton:function(t){this._createButton(t)},_createButton:function(t){var i=" ";t.classNames&&t.classNames.length>0&&"function"==typeof t.classNames.join&&(i+=t.classNames.join(" "));var o=n.create("div",{class:"jimu-btn jimu-popup-action-btn jimu-float-trailing jimu-trailing-margin1 "+i,innerHTML:t.label,title:t.title||t.label},this.buttonContainer);this.enabledButtons.unshift(o);var h=n.create("div",{class:"jimu-btn jimu-state-disabled jimu-float-trailing jimu-trailing-margin1 "+i,title:t.title||t.label,innerHTML:t.label,style:{display:"none"}},this.buttonContainer);this.disabledButtons.unshift(h),this.own(s(o,"click",e.hitch(this,function(e){t.onClick?t.onClick(e):this.close()})))},setButtonProps:function(t,e){if("number"==typeof t&&isFinite(t)?t=t:(e=t,t=0),e&&0!==this.enabledButtons.length)for(var i in e)"title"===i?(n.setAttr(this.enabledButtons[t],"title",e[i]),n.setAttr(this.disabledButtons[t],"title",e[i])):"label"===i&&(n.setProp(this.enabledButtons[t],"innerHTML",e[i]),n.setProp(this.disabledButtons[t],"innerHTML",e[i]))},enableButton:function(t){"number"==typeof t&&isFinite(t)&&t<this.enabledButtons.length?(n.setStyle(this.enabledButtons[t],"display","inline-block"),n.setStyle(this.disabledButtons[t],"display","none")):(i.forEach(this.enabledButtons[t],e.hitch(this,function(t){n.setStyle(t,"display","inline-block")})),i.forEach(this.disabledButtons[t],e.hitch(this,function(t){n.setStyle(t,"display","none")})))},disableButton:function(t){"number"==typeof t&&isFinite(t)&&t<this.disabledButtons.length?(n.setStyle(this.disabledButtons[t],"display","inline-block"),n.setStyle(this.enabledButtons[t],"display","none")):(i.forEach(this.disabledButtons,e.hitch(this,function(t){n.setStyle(t,"display","inline-block")})),i.forEach(this.enabledButtons,e.hitch(this,function(t){n.setStyle(t,"display","none")})))},showButton:function(t){this.enableButton(t)},hideButton:function(t){"number"==typeof t&&isFinite(t)&&t<this.disabledButtons.length?(n.setStyle(this.disabledButtons[t],"display","none"),n.setStyle(this.enabledButtons[t],"display","none")):(i.forEach(this.disabledButtons,e.hitch(this,function(t){n.setStyle(t,"display","none")})),i.forEach(this.enabledButtons,e.hitch(this,function(t){n.setStyle(t,"display","none")})))}})});