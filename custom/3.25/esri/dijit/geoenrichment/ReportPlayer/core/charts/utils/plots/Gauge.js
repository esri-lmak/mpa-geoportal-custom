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

define(["dojo/_base/declare","dojox/gfx","dojox/gfx/matrix","./Donut","./animation/_GaugeAnimation","./labelsRendering/LabelsUtil","./supportClasses/GaugeLabelPlacements","esri/dijit/geoenrichment/utils/ObjectUtil"],function(e,t,a,o,n,r,i,s){var l={INSIDE_LABEL_DEFAULT_FONT_SIZE:30,OUTSIDE_LABEL_DEFAULT_FONT_SIZE:30,FROM_TO_LABEL_DEFAULT_FONT_SIZE:20,getMainLabelInfo:function(e,t,a,o,n,r,s){var l=s?e[0].tooltip.formatFunc(e[0].tooltip.value*s.progress):e[0].tooltip.valueLabel;return t.series.gaugeMainLabelPosition===i.INSIDE?this._getMainLabelInfoInside(e,t,a,o,l,s):this._getMainLabelInfoOutside(e,t,a,o,n,r,l,s)},_getMainLabelInfoInside:function(e,a,o,n,i,s){var u=(a.series.donutHolePercent||0)/100,g=o*u*1.5;a.series.donutShowIcons&&(g/=2);var h,c=a.series.gaugeMainLabelFont||a.series.dataLabelsFont;h=a.series.gaugeMainLabelFontColorFromConditionalStyling?e[0].fill:a.series.gaugeMainLabelFontColor||a.series.dataLabelsColor;var b=s&&s.fontSize||function(){var e=l.INSIDE_LABEL_DEFAULT_FONT_SIZE;if(a.series.gaugeMainLabelFontSize)return a.series.gaugeMainLabelFontSize;c=c.replace(/\s\w*px/," "+e+"px");var o=t._base._getTextBox(i,{font:c}),n=Math.max(o.w,o.h);return Math.min(100,Math.max(30,e*g/n))}(),L=r.getSimpleLabelInfo({text:i,font:c,fontSize:b,fontColor:h,textDecoration:a.series.gaugeMainLabelTextDecoration}),f=n.cx-L.box.w/2,x=n.cy-L.box.h/2,_=0;if(a.series.donutShowIcons){var d=a.series.donutArcPercent/100;_=-g/(1.25-(1-d)),x=n.cy+L.box.h*(1.75*d-1)}else 50===a.series.donutArcPercent&&(x=n.cy-L.box.h/1.2);return{iconSize:g,iconShift:_,x:f,y:x,text:L.text,fontSize:b}},_getMainLabelInfoOutside:function(e,t,o,n,i,s,l,u){var g,h=t.series.gaugeMainLabelFont||t.series.dataLabelsFont;g=t.series.gaugeMainLabelFontColorFromConditionalStyling?e[0].fill:t.series.gaugeMainLabelFontColor||t.series.dataLabelsColor;var c=u&&u.fontSize||t.series.gaugeMainLabelFontSize||this.OUTSIDE_LABEL_DEFAULT_FONT_SIZE,b=r.getSimpleLabelInfo({text:l,font:h,fontColor:g,fontSize:c,textDecoration:t.series.gaugeMainLabelTextDecoration}),L=a._degToRad(s),f=L+2*i*Math.PI,x=t.series.gaugeShowArrowIndicator?f:(L+f)/2,_=n.cx+(o+10)*Math.cos(x)-(b.box.w/2-b.box.w/2*Math.cos(x)),d=n.cy+(o+10)*Math.sin(x)-(b.box.h/2-b.box.h/2*Math.sin(x)),M=0;return pushY=0,_<n.cx-o?M=n.cx-o-_:_+b.box.w>n.cx+o&&(M=n.cx+o-(_+b.box.w)),d<n.cy-o?pushY=n.cy-o-d:d+b.box.h>n.cy+o&&(pushY=n.cy+o-(d+b.box.h)),{x:_,y:d,pushX:M,pushY:pushY,text:b.text,fontSize:c}},getFromLabelInfo:function(e,t,o,n,i,l,u,g){var h=r.getSimpleLabelInfo({text:s.formatNumber(g),font:t.series.gaugeFromLabelFont||t.series.dataLabelsFont,fontColor:t.series.gaugeFromLabelFontColor||t.series.dataLabelsColor,fontSize:t.series.gaugeFromLabelFontSize||this.FROM_TO_LABEL_DEFAULT_FONT_SIZE,textDecoration:t.series.gaugeFromLabelTextDecoration}),c=a._degToRad(l),b=i.cx+o*Math.cos(c)+(o-n-h.box.w)/2,L=i.cy+o*Math.sin(c),f=t.series.donutArcPercent<55?0:-h.box.h,x=0;return t.series.donutArcPercent>65?x=0:b<i.cx-o&&(x=i.cx-o-b),{x:b,y:L,pushX:x,pushY:f,text:h.text}},getToLabelInfo:function(e,t,o,n,i,l,u,g){var h=r.getSimpleLabelInfo({text:s.formatNumber(g),font:t.series.gaugeToLabelFont||t.series.dataLabelsFont,fontColor:t.series.gaugeToLabelFontColor||t.series.dataLabelsColor,fontSize:t.series.gaugeToLabelFontSize||this.FROM_TO_LABEL_DEFAULT_FONT_SIZE,textDecoration:t.series.gaugeToLabelTextDecoration}),c=a._degToRad(l)+2*u*Math.PI,b=i.cx+o*Math.cos(c)-h.box.w+(h.box.w-(o-n))/2,L=i.cy+o*Math.sin(c),f=t.series.donutArcPercent<55?0:-h.box.h,x=0;return t.series.donutArcPercent>65?x=0:b+h.box.w>i.cx+o&&(x=i.cx+o-(b+h.box.w)),{x:b,y:L,pushX:x,pushY:f,text:h.text}}},u={renderMainLabel:function(e,t,a,o,n,r,i,s){var u,g=function(n,s){s&&(u=u||l.getMainLabelInfo(t,a,o,r,n,i).fontSize,s.fontSize=u);var g=l.getMainLabelInfo(t,a,o,r,n,i,s);return{labelInfo:g,element:e.renderLabel(g)}};return s&&s.push({isLabel:!0,func:g}),g},renderFromLabel:function(e,t,a,o,n,r,i,s,u){var g=l.getFromLabelInfo(t,a,o,n,r,i,s,u);return{labelInfo:g,element:e.renderLabel(g)}},renderToLabel:function(e,t,a,o,n,r,i,s,u){var g=l.getToLabelInfo(t,a,o,n,r,i,s,u);return{labelInfo:g,element:e.renderLabel(g)}}},g={renderArrow:function(e,t,o,n,r,i){var s=function(i){var s=a._degToRad(r),l=s+2*i*Math.PI,u=[];return u.push({x:n.cx+5*Math.cos(l+Math.PI/2),y:n.cy+5*Math.sin(l+Math.PI/2)}),u.push({x:n.cx+5*Math.cos(l+Math.PI),y:n.cy+5*Math.sin(l+Math.PI)}),u.push({x:n.cx+5*Math.cos(l-Math.PI/2),y:n.cy+5*Math.sin(l-Math.PI/2)}),u.push({x:n.cx+o*Math.cos(l),y:n.cy+o*Math.sin(l)}),{shape:e.createPath().moveTo(u[0].x,u[0].y).lineTo(u[1].x,u[1].y).lineTo(u[2].x,u[2].y).lineTo(u[3].x,u[3].y).lineTo(u[0].x,u[0].y).setStroke(t.series.gaugeArrowIndicatorLineColor).setFill(t.series.gaugeArrowIndicatorFillColor)}};return i.push({isArrow:!0,func:s}),s}};return e([o,n],{startAngleOffset:-90,_preprocessParams:function(e,t,a,o,n,r,s,u){if(t.series.gaugeMainLabelPosition===i.OUTSIDE){var g=l.getMainLabelInfo(e,t,a,s,this._getSliceValueAt(u,0,t),this._getStartAngle(t)),h=a;n-=Math.abs(g.pushX/2),r-=Math.abs(g.pushY/2),a=Math.min(n,r),a=Math.max(a,h/2),s.cx+=g.pushX/2,s.cy+=g.pushY/2,this._lastRenderResults.chartShiftX=g.pushX/2,this._lastRenderResults.chartShiftY=g.pushY/2}if(t.series.gaugeShowFromToLabels){var c=l.getFromLabelInfo(e,t,a,o,s,this._getStartAngle(t),this._getSliceValueAt(u,0,t),t.series.gaugeFromLabelValue),b=l.getToLabelInfo(e,t,a,o,s,this._getStartAngle(t),this._getSliceValueAt(u,0,t)+(this._getSliceValueAt(u,1,t)||0),t.series.gaugeToLabelValue),L=(Math.abs(c.pushX)+Math.abs(b.pushX))/2,f=Math.max(Math.abs(c.pushY),Math.abs(b.pushY))/2,h=a;n-=L,r-=f,a=Math.min(n,r),a=Math.max(a,h/2),s.cy-=f,this._lastRenderResults.chartShiftY=-f}return{circle:s,r:a}},_renderAdditionalElements:function(e,t,a,o,n,r,i){this._lastRenderResults.ryMultiplier=this._getRYMultiplier(a),this._renderGaugeDataLabel(e,a,o,n,r,i),this._renderGaugeFromToLabels(e,a,o,n,r,i),this._renderGaugeArrowIndicator(e,t,a,o,n,r,i)},gaugeLabelElement:null,_renderGaugeDataLabel:function(e,t,a,o,n,r){if(t.series.gaugeMainLabelPosition!==i.NONE){var s=u.renderMainLabel(this,e,t,a,o,n,this._getStartAngle(t),this._animationInfos)(this._getSliceValueAt(r,0,t));this.gaugeLabelElement=s.element,t.series.gaugeMainLabelPosition===i.INSIDE&&(this._lastRenderResults.maxIconSize=s.labelInfo.iconSize,this._lastRenderResults.chartIconOffset=s.labelInfo.iconShift)}},gaugeFromLabelElement:null,gaugeToLabelElement:null,_renderGaugeFromToLabels:function(e,t,a,o,n,r){if(t.series.gaugeShowFromToLabels){var i=u.renderFromLabel(this,e,t,a,o,n,this._getStartAngle(t),this._getSliceValueAt(r,0,t),t.series.gaugeFromLabelValue);this.gaugeFromLabelElement=i.element;var i=u.renderToLabel(this,e,t,a,o,n,this._getStartAngle(t),this._getSliceValueAt(r,0,t)+(this._getSliceValueAt(r,1,t)||0),t.series.gaugeToLabelValue);this.gaugeToLabelElement=i.element}},_renderGaugeArrowIndicator:function(e,t,a,o,n,r,i){a.series.gaugeShowArrowIndicator&&g.renderArrow(t,a,o,r,this._getStartAngle(a),this._animationInfos)(this._getSliceValueAt(i,0,a))}})});