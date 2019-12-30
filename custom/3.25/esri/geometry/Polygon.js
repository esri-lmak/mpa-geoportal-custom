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

define(["dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../lang","../SpatialReference","./Geometry","./Point","./Extent","./mathUtils","../srUtils"],function(n,t,e,i,r,s,a,o,l,h,c,g){function u(){}function f(){}var p={type:"polygon",rings:null},y=n(o,{declaredClass:"esri.geometry.Polygon",type:"polygon",rings:null,constructor:function(n){this.rings=[],this._ring=0,n&&(e.isArray(n)?this.rings=e.isArray(n[0][0])?n:[n]:n.rings?s.mixin(this,n):this.spatialReference=n,this.spatialReference&&(this.spatialReference=g.createSpatialReference(this.spatialReference))),this.verifySR()},addRing:function(n){return this.clearCache(),this._ring=this.rings.length,this.rings[this._ring]=[],e.isArray(n[0])?t.forEach(n,this._addPointArr,this):t.forEach(n,this._addPoint,this),this},_addPointArr:function(n){this.rings[this._ring].push(n)},_addPoint:function(n){this.rings[this._ring].push([n.x,n.y])},_insertPoints:function(n,e){this.clearCache(),this._ring=e,this.rings[this._ring]||(this.rings[this._ring]=[]),t.forEach(n,this._addPoint,this)},_validateInputs:function(n,t){return(null===n||void 0===n||!(n<0||n>=this.rings.length))&&(null===t||void 0===n||!(t<0||t>=this.rings[n].length))},getPoint:function(n,t){if(this._validateInputs(n,t))return new l(this.rings[n][t],this.spatialReference)},setPoint:function(n,t,e){if(this._validateInputs(n,t))return this.clearCache(),this.rings[n][t]=[e.x,e.y],this},insertPoint:function(n,t,e){if(this._validateInputs(n)&&null!=t&&t>=0&&t<=this.rings[n].length)return this.clearCache(),this.rings[n].splice(t,0,[e.x,e.y]),this},removeRing:function(n){if(this._validateInputs(n,null)){this.clearCache();var t,e=this.rings.splice(n,1)[0],i=e.length,r=this.spatialReference;for(t=0;t<i;t++)e[t]=new l(e[t],r);return e}},removePoint:function(n,t){if(this._validateInputs(n,t))return this.clearCache(),new l(this.rings[n].splice(t,1)[0],this.spatialReference)},getExtent:function(){var n,t=this.getCacheValue("_extent"),e=this.getCacheValue("_partwise");if(t)return n=new h(t),n._partwise=e,n;var i=this.rings,r=i.length;if(r&&i[0].length){var s,a,o,l,c,g,u,f,p,y,d,x,_,m=c=i[0][0][0],v=g=i[0][0][1],C=Math.min,R=Math.max,P=this.spatialReference,w=[];for(u=0;u<r;u++){for(s=i[u],y=d=s[0]&&s[0][0],x=_=s[0]&&s[0][1],p=s.length,f=0;f<p;f++)a=s[f],o=a[0],l=a[1],m=C(m,o),v=C(v,l),c=R(c,o),g=R(g,l),y=C(y,o),x=C(x,l),d=R(d,o),_=R(_,l);w.push(new h({xmin:y,ymin:x,xmax:d,ymax:_,spatialReference:P?P.toJson():null}))}return t={xmin:m,ymin:v,xmax:c,ymax:g,spatialReference:P?P.toJson():null},e=w.length>1?w:null,this.setCacheValue("_extent",t),this.setCacheValue("_partwise",e),n=new h(t),n._partwise=e,n}},contains:function(n){var t,e,i,r,s,a,o,h,c=this.rings,g=!1,u=c.length,f=this.spatialReference,p=n.spatialReference,y=n.x,d=n.y;for(f&&p&&!f.equals(p)&&f._canProject(p)&&(h=f.isWebMercator()?l.lngLatToXY(y,d):l.xyToLngLat(y,d,!0),y=h[0],d=h[1]),o=0;o<u;o++)for(t=c[o],r=t.length,s=0,a=0;a<r;a++)s++,s===r&&(s=0),e=t[a],i=t[s],(e[1]<d&&i[1]>=d||i[1]<d&&e[1]>=d)&&e[0]+(d-e[1])/(i[1]-e[1])*(i[0]-e[0])<y&&(g=!g);return g},getCentroid:function(){var n=this.getCacheValue("_centroid");if(void 0!==n)return n;var e,i,r,s,a,o,h=this.rings,c=[],g=1/0,u=-1/0,f=1/0,p=-1/0;if(t.forEach(h,function(n){e=i=r=0,t.forEach(n,function(t,s){s<n.length-1&&(a=n[s+1],o=t[0]*a[1]-a[0]*t[1],e+=(t[0]+a[0])*o,i+=(t[1]+a[1])*o,r+=o,t[0]<g&&(g=t[0]),t[0]>u&&(u=t[0]),t[1]<f&&(f=t[1]),t[1]>p&&(p=t[1]))}),r>0&&(r*=-1),r&&c.push([e,i,r/2])}),c.sort(function(n,t){return n[2]-t[2]}),e=i=void 0,c[0]&&(s=6*c[0][2],e=c[0][0]/s,i=c[0][1]/s,(e<g||e>u||i<f||i>p)&&(e=i=void 0)),void 0===e||void 0===i){var y=h[0]&&h[0].length?this._getLineCentroid(h[0]):null;y&&(e=y.x,i=y.y)}return n=isNaN(e)||isNaN(i)?null:new l(e,i,this.spatialReference),this.setCacheValue("_centroid",n),n},_getLineCentroid:function(n){var t,e,i,r,s,a,o=0,l=0,h=0,g={x:0,y:0},u={x:0,y:0},f=n.length;for(r=0;r<f-1;r++)e=n[r],i=n[r+1],e&&i&&(g.x=e[0],g.y=e[1],u.x=i[0],u.y=i[1],(t=c.getLength(g,u))>0&&(o+=t,s=c.getMidpoint(e,i),l+=t*s[0],h+=t*s[1]));return o>0?a={x:l/o,y:h/o}:n[0]&&(a={x:n[0][0],y:n[0][1]}),a},isClockwise:function(n){var t,i=0,r=n.length,s=e.isArray(n[0])?function(n,t){return n[0]*t[1]-t[0]*n[1]}:function(n,t){return n.x*t.y-t.x*n.y};for(t=0;t<r;t++)i+=s(n[t],n[(t+1)%r]);return i/2<=0},isSelfIntersecting:function(n){n=n||this;var t,e,i,r,s,a,o,l,h,g=n.rings.length;for(i=0;i<g;i++){for(t=0;t<n.rings[i].length-1;t++)for(s=[[n.rings[i][t][0],n.rings[i][t][1]],[n.rings[i][t+1][0],n.rings[i][t+1][1]]],e=i+1;e<g;e++)for(r=0;r<n.rings[e].length-1;r++)if(a=[[n.rings[e][r][0],n.rings[e][r][1]],[n.rings[e][r+1][0],n.rings[e][r+1][1]]],(o=c._getLineIntersection2(s,a))&&!(o[0]===s[0][0]&&o[1]===s[0][1]||o[0]===a[0][0]&&o[1]===a[0][1]||o[0]===s[1][0]&&o[1]===s[1][1]||o[0]===a[1][0]&&o[1]===a[1][1]))return!0;if(!((l=n.rings[i].length)<=4))for(t=0;t<l-3;t++)for(h=l-1,0===t&&(h=l-2),s=[[n.rings[i][t][0],n.rings[i][t][1]],[n.rings[i][t+1][0],n.rings[i][t+1][1]]],e=t+2;e<h;e++)if(a=[[n.rings[i][e][0],n.rings[i][e][1]],[n.rings[i][e+1][0],n.rings[i][e+1][1]]],(o=c._getLineIntersection2(s,a))&&!(o[0]===s[0][0]&&o[1]===s[0][1]||o[0]===a[0][0]&&o[1]===a[0][1]||o[0]===s[1][0]&&o[1]===s[1][1]||o[0]===a[1][0]&&o[1]===a[1][1]))return!0}return!1},toJson:function(){var n={rings:s.clone3DArray(this.rings)},t=this.spatialReference;return t&&(n.spatialReference=t.toJson()),n}});return u.prototype=y.prototype,f.prototype=new u,Object.defineProperty(f.prototype,"rings",{get:function(){return this._unquantizeFn&&(this._ringsVal=this._unquantizeFn({rings:s.clone3DArray(this._ringsVal)}).rings,this._unquantizeFn=null),this._ringsVal},set:function(n){this._ringsVal=n}}),f.prototype.setupLazyUnquantization=function(n,t){this._unquantizeFn=n,this._ringsVal=t.rings},y.simpleConstructor=u,y.accessorConstructor=f,y.defaultProps=p,y.createEllipse=function(n){var t,e,i,r,s,a=n.center.x,o=n.center.y,l=n.longAxis,h=n.shortAxis,c=n.numberOfPoints,g=n.map,u=[],f=2*Math.PI/c;for(e=0;e<c;e++)i=Math.cos(e*f),r=Math.sin(e*f),t=g.toMap({x:l*i+a,y:h*r+o}),u.push(t);return u.push(u[0]),s=new y(g.spatialReference),s.addRing(u),s},y.createCircle=function(n){var t={center:n.center,longAxis:n.r,shortAxis:n.r,numberOfPoints:n.numberOfPoints,map:n.map};return y.createEllipse(t)},y.fromExtent=function(n){var e=n.normalize(),i=n.spatialReference;return new y({rings:t.map(e,function(n){return[[n.xmin,n.ymin],[n.xmin,n.ymax],[n.xmax,n.ymax],[n.xmax,n.ymin],[n.xmin,n.ymin]]}),spatialReference:i?i.toJson():null})},i("extend-esri")&&(e.setObject("geometry.Polygon",y,r),r.geometry.defaultPolygon=p,r.geometry.createEllipse=y.createEllipse,r.geometry.createCircle=y.createCircle,r.geometry.isClockwise=y.prototype.isClockwise,r.geometry.polygonSelfIntersecting=y.prototype.isSelfIntersecting),y});