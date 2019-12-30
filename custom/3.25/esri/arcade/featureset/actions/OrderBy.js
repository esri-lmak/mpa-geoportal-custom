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

var __extends=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();define(["require","exports","../support/FeatureSet","../support/IdSet","../support/OrderbyClause","../../polyfill/promiseUtils"],function(e,t,n,r,o,i){"use strict";var u=function(e){function t(t){var n=e.call(this,t)||this;return n._orderbyclause=null,n.declaredClass="esri.arcade.featureset.actions.OrderBy",n._maxProcessing=100,n._orderbyclause=t.orderbyclause,n._parent=t.parentfeatureset,n}return __extends(t,e),t.prototype._getSet=function(e){var t=this;return null===this._wset?this._ensureLoaded().then(function(){return t._getFilteredSet("",null,null,t._orderbyclause,e)}).then(function(n){return t._checkCancelled(e),t._wset=n,t._wset}):i.resolve(this._wset)},t.prototype.manualOrderSet=function(e,t){var n=this;return this.getIdColumnDictionary(e,[],-1,t).then(function(e){n._orderbyclause.order(e);for(var t=new r([],[],!0,null),o=0;o<e.length;o++)t._known.push(e[o].id);return t})},t.prototype.getIdColumnDictionary=function(e,t,n,r){var o=this;if(n<e._known.length-1){var u=this._maxQueryRate();return"GETPAGES"===e._known[n+1]?this._parent._expandPagedSet(e,u,0,0,r).then(function(i){return o.getIdColumnDictionary(e,t,n,r)}):this._parent._getFeature(e,e._known[n+1],r).then(function(i){return n+=1,o._checkCancelled(r),t.push({id:e._known[n],feature:i}),o.getIdColumnDictionary(e,t,n,r)})}return e._candidates.length>0?this._refineSetBlock(e,this._maxProcessingRate(),r).then(function(){return o._checkCancelled(r),o.getIdColumnDictionary(e,t,n,r)}):i.resolve(t)},t.prototype._isInFeatureSet=function(e){return this._parent._isInFeatureSet(e)},t.prototype._getFeatures=function(e,t,n,r){return this._parent._getFeatures(e,t,n,r)},t.prototype._featureFromCache=function(e){if(void 0===this._featureCache[e]){var t=this._parent._featureFromCache(e);if(void 0===t)return;return null===t?null:(this._featureCache[e]=t,t)}return this._featureCache[e]},t.prototype._fetchAndRefineFeatures=function(e,t,n){return i.reject(new Error("Fetch and Refine should not be called in this featureset"))},t.prototype._getFilteredSet=function(e,t,n,o,i){var u=this;return this._ensureLoaded().then(function(){return u._parent._getFilteredSet(e,t,n,null===o?u._orderbyclause:o,i)}).then(function(e){u._checkCancelled(i);var o;o=new r(e._candidates.slice(0),e._known.slice(0),e._ordered,u._clonePageDefinition(e.pagesDefinition));var a=!0;return e._candidates.length>0&&(a=!1),!1===o._ordered?u.manualOrderSet(o,i).then(function(e){return!1===a&&(null===t&&null===n||(e=new r(e._candidates.slice(0).concat(e._known.slice(0)),[],e._ordered,u._clonePageDefinition(e.pagesDefinition)))),e}):o})},t}(n);return n._featuresetFunctions.orderBy=function(e){return""===e?this:new u({parentfeatureset:this,orderbyclause:new o(e)})},u});