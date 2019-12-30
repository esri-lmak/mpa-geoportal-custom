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

define(["dojo/_base/declare","dojo/_base/connect","dojo/_base/array","dojo/_base/Color","dojo/_base/lang","dojo/Deferred","dojo/has","dojo/io-query","dojo/on","dojo/aspect","../kernel","../request","../graphic","./FeatureLayer","./StreamMode","./StreamTrackManager","../geometry/jsonUtils","../symbols/SimpleFillSymbol","../symbols/SimpleLineSymbol","../symbols/SimpleMarkerSymbol","../renderers/SimpleRenderer","./PurgeOptions"],function(e,t,r,i,n,o,s,a,c,h,l,u,d,_,f,m,p,g,k,y,v,F){var b=e([_],{declaredClass:"esri.layers.StreamLayer",_preventInit:!0,constructor:function(e,t){if(t=t||{},t.mode&&t.mode!==_.MODE_STREAM||(this._isStream=!0,this.mode=_.MODE_STREAM,this.currentMode=_.MODE_STREAM,this._mode=new f(this)),this.purgeOptions=new F(this,t.purgeOptions||{}),this.purgeInterval=t.purgeInterval||0,this._reconnectAttempts=0,this.maxReconnectAttempts=10,this._reconnectTimeoutId=null,this.socket=null,this._keepLatestQueried=!1,this._keepLatestUrl=null,this._relatedQueried=!1,this._relatedUrl=null,this._joinField=null,this._refreshing=!1,this._attemptReconnect=n.hitch(this,this._attemptReconnect),this._purge=n.hitch(this,this._purge),this._processServiceJson=n.hitch(this,this._processServiceJson),n.isObject(e)&&e.layerDefinition)this._initFeatureLayer(e,t);else{var r=this;u({url:e,content:n.mixin({f:"json"}),callbackParamName:"callback"}).then(function(e){r._processServiceJson(e,t)},function(e){r._errorHandler(e)})}},_processServiceJson:function(e,t){var i=this;e.relatedFeatures&&e.relatedFeatures.featuresUrl&&e.relatedFeatures.joinField?(this._relatedUrl=e.relatedFeatures.featuresUrl,this._joinField=e.relatedFeatures.joinField,this.objectIdField=this._joinField,u({url:this._relatedUrl,content:{f:"json"},callbackParamName:"callback"}).then(function(n){var o=n.fields||[],s=r.map(e.fields,function(e){return e.name.toLowerCase()});r.forEach(o,function(t){-1===r.indexOf(s,t.name.toLowerCase())&&e.fields.push(t)}),t.resourceInfo=e,i._initFeatureLayer(i._url,t)},function(e){i.onError({error:e})})):(t.resourceInfo=e,this._initFeatureLayer(this._url,t))},_initLayer:function(e,t){if(this.inherited(arguments),e){var r;if(e.layerDefinition)this.purgeOptions=new F(this,this._params.purgeOptions||{}),this.socketUrl=this._params.socketUrl||e.layerDefinition.socketUrl||void 0;else{if(this._params.socketUrl)this.socketUrl=this._params.socketUrl;else{var i,n=this._getWebsocketConnectionInfo(e),o=n.urls;o&&o.length?(this._socketUrls=o,this.socketUrl=o[0],this.socketDirection="broadcast"===this._params.socketDirection?"broadcast":"subscribe",this.socketUrl+="/"+this.socketDirection,this._websocketToken=n.token,o.length>this.maxReconnectAttempts&&(this.maxReconnectAttempts=o.length)):(this.socketUrl=void 0,i="No web socket urls were retrieved from the Stream Service. Layer will not attempt to connect.","https:"===location.protocol&&(i+=" An insecure web socket connection cannot be made from a secure web page."),this.onError(new Error(i)))}if(this._params.filter)try{r=this._makeFilter(this._params.filter),this._filter=r}catch(e){this.onError(new Error("Error trying to create filter object: "+e+". Layer will not have filter applied")),this._filter=null}if(this._params.geometryDefinition||this._outFields||this._defnExpr){r=r||{},r.geometry=this._params.geometryDefinition,r.outFields=this._outFields,r.where=this._defnExpr;try{r=this._makeFilter(r),this._filter=r}catch(e){this.onError(new Error("Error trying to create filter object: "+e+". Layer will not have filter applied")),this._filter=null}}}this.maximumTrackPoints=this._params.maximumTrackPoints||0===this._params.maximumTrackPoints?this._params.maximumTrackPoints:1,(this._params.refreshRate||0===this._params.refreshRate)&&this._mode&&this._mode._setRefreshRate&&this._mode._setRefreshRate(this._params.refreshRate),this._keepLatestUrl=e.keepLatestArchive?e.keepLatestArchive.featuresUrl:null,e.relatedFeatures&&e.relatedFeatures.featuresUrl&&e.relatedFeatures.joinField&&(this._relatedUrl=e.relatedFeatures.featuresUrl,this._joinField=e.relatedFeatures.joinField,this.objectIdField=this._joinField),this.objectIdField||this._makeObjectIdField(),this._map&&this.socketUrl&&!this._connected&&this.connect()}},_isWebGLCompatible:function(){return!1},_setMap:function(e){var t=this.inherited(arguments),r=this._getRenderer();return this.timeInfo&&(this._trackIdField||r&&(r.latestObservationRenderer||r.trackRenderer))&&(this._trackManager=new m(this),this._trackManager.initialize(e)),this.socketUrl&&!this._connected&&this._map&&this.connect(),t},_unsetMap:function(e,i){r.forEach(this._connects,t.disconnect),(this._connected||this._reconnecting||this.socket)&&this.disconnect(),this._togglePurgeT(),this.inherited(arguments),this._map=null},_suspend:function(){this._togglePurgeT(),this.inherited(arguments)},_resume:function(){this.inherited(arguments),this._togglePurgeT(!0)},clear:function(){try{this._mode&&this._mode._clearDrawBuffer&&this._mode._clearDrawBuffer(),this._mode&&this._mode._clearTimeBin&&this._mode._clearTimeBin(),this._mode&&this._mode._clearFeatureMap&&this._mode._clearFeatureMap(),this._trackManager&&this._trackManager.clearTracks()}catch(e){}this.inherited(arguments),this._trackManager&&this._trackManager.createTracklineContainer()},redraw:function(){this._mode&&this._mode._flushDrawBuffer&&this._mode._flushDrawBuffer(),this.inherited(arguments)},setDefinitionExpression:function(e){this.setFilter({where:e})},getDefinitionExpression:function(){var e;return this._filter&&(e=this._filter.where),e},destroy:function(){this.disconnect(),this.inherited(arguments)},onResume:function(e){this.inherited(arguments)},setGeometryDefinition:function(e){this.setFilter({geometry:e})},getGeometryDefinition:function(){var e;return this._filter&&(e=this._filter.geometry),e},connect:function(e){var t,r,i,n=new o,s={},c=this._filter,h=this.socketUrl;try{this._connected||this._connecting?n.reject(new Error("Cannot start new connection process. Layer is connecting.")):(this._connecting=!0,this._getRelatedFeatures().then(function(){return this._getKeepLatestFeatures()}.bind(this)).then(function(){if(this._websocketToken&&(s.token=this._websocketToken),this._map&&this._map.spatialReference&&this.spatialReference&&this._map.spatialReference.wkid!==this.spatialReference.wkid&&(s.outSR=this._map.spatialReference.wkid),c)for(r in c)null!==c[r]&&(t="geometry"===r?JSON.stringify(c[r]):c[r],s[r]=t);h+="?"+a.objectToQuery(s),i=this._createConnection(h,e),n.resolve(i)}.bind(this)).otherwise(function(e){n.reject(e)}))}catch(t){e&&(e(t,!1),n.reject(t)),this.onConnectionError({error:t})}return n.promise},disconnect:function(e){var t=this._refreshing?"Disconnecting as part of layer refresh cycle":"Connection closed from client",r=!!this._refreshing;this._reconnectTimeoutId&&clearTimeout(this._reconnectTimeoutId),this._connected=!1,this._connecting=!1,this._reconnecting=!1,this._refreshing=!1,this.socket&&this.socket.close(),this.onDisconnect({willReconnect:r,message:t}),e&&e(null,!0)},setFilter:function(e){var t,r,i;if(this._collection)return this.onError("Filter can only be set when the source of the layer is a Stream Service"),!1;try{if(void 0!==e.outFields)return i=new Error("Outfields property cannot be changed after layer is created"),this.onFilterChange({filter:this.getFilter(),error:i}),!1;t=this._makeFilter(e)}catch(e){return i=new Error(e),this.onFilterChange({filter:this.getFilter(),error:i}),!1}return this.socket?(r={filter:t},this.socket.send(JSON.stringify(r))):c.once(this,"connect",function(e){this.setFilter(t)}),!0},getFilter:function(){var e=this._filter,t={},i=["geometry","outFields","where"];return e&&r.forEach(i,function(r){var i=e[r];i&&("geometry"===r?i=p.fromJson(i):"outFields"===r&&(i=i.split(",")),t[r]=i)}),t},setMaximumTrackPoints:function(e){if(!e&&0!==e)return!1;this.maximumTrackPoints=e,this._mode.propertyChangeHandler(3)},getUniqueValues:function(e){var t,i,n={},o=[];return(t=this._getField(e,!0))?(e=t.name,i=this.graphics||[],r.forEach(i,function(t){var r=t.attributes||{},i=r[e];void 0!==i&&(n[i]||(n[i]=1,o.push(i)))}),o.sort(function(e,t){return e<t?-1:e>t?1:0}),o):o},getLatestObservations:function(){return this._trackManager?this._trackManager.getLatestObservations():this.graphics},setPurgeInterval:function(e){var t=this.purgeInterval;return this.purgeInterval=e,this._togglePurgeT(),e&&this._togglePurgeT(!0),t!==e&&this.onPurgeIntervalChange(),this},_togglePurgeT:function(e){if(e&&this.purgeInterval){var t=this;clearTimeout(this._purgeT),this._mode&&this._mode._flushDrawBuffer&&(this._purgeT=setTimeout(function(){t.updating||t.suspended||(t._mode._flushDrawBuffer(),t._togglePurgeT(!0))},60*this.purgeInterval*1e3))}else this._purgeT&&(clearTimeout(this._purgeT),this._purgeT=null)},onMessage:function(){},onConnect:function(){},onDisconnect:function(){},onFilterChange:function(){},onAttemptReconnect:function(){},onConnectionError:function(){},onPurgeIntervalChange:function(){},_createConnection:function(e,t){var r=this,i=new WebSocket(e);return i.onopen=function(){r.socket=i,r._connected=!0,r._connecting=!1,r._reconnecting=!1,r._reconnectAttempts=0,r._bind(),r.onConnect(),t&&t(null,!0)},i.onclose=function(e){var t,i=!0,n=r._connected,o=null;r._connected||r._reconnecting?(e.code&&(t="Connection failed: ",1001===e.code?(t+=e.reason||"Service is going away.",i=!1):4400===e.code?(t+=e.reason||"Invalid url parameters. Check filter properties.",i=!1):4404===e.code?(t+="Service not found",i=!1):4401!==e.code&&4403!==e.code||(t+="Not authorized",i=!1)),i&&(r._reconnectAttempts+=1,r._reconnectAttempts>r.maxReconnectAttempts&&(t="Maximum reconnect attempts exceeded",i=!1,n=!0)),r._connected=!1,n&&(t&&(o=new Error(t)),r.onDisconnect({error:o,willReconnect:i})),i?r._attemptReconnect():r.socket=null):(r.socket||(o=new Error("Could not make connection to service"),r.onConnectionError({error:o})),r.socket=null,r._connected=!1)},i.onerror=function(e){console.log("Socket error")},i},_getKeepLatestFeatures:function(){var e=new o;return this._map&&this._keepLatestUrl&&!this._keepLatestQueried&&this._mode._fetchArchive?this._mode._fetchArchive(this._keepLatestUrl).then(function(){e.resolve()}.bind(this)).otherwise(function(t){e.reject(t)}).always(function(){this._keepLatestQueried=!0}.bind(this)):e.resolve(),e.promise},_getRelatedFeatures:function(){var e=new o;return this._map&&this._relatedUrl&&!this._relatedQueried&&this._mode._fetchArchive?this._mode._fetchArchive(this._relatedUrl).then(function(){e.resolve()}.bind(this)).otherwise(function(t){e.reject(t)}).always(function(){this._relatedQueried=!0}.bind(this)):e.resolve(),e.promise},_purge:function(){var e,t,r=[];if(this.purgeOptions.displayCount&&this.graphics.length>this.purgeOptions.displayCount)for(e=0;e<this.graphics.length-this.purgeOptions.displayCount;e++)t=this.graphics[e],r.push(t);r.length>0&&(this._mode._removeFeatures(r),this._trackManager&&this._trackManager.removeFeatures(r))},_bind:function(){var e=this;this.socket.onmessage=function(t){e._onMessage(JSON.parse(t.data))}},_onMessage:function(e){var t=this;this.onMessage(e);var r={create:function(e){t._create(e)},update:function(e){t._update(e)},delete:function(e){t._delete(e)}};e.type?r[e.type](e.feature):e.hasOwnProperty("filter")?t._handleFilterMessage(e):this._create(e)},_create:function(e){function t(e){var t;if(!r._featureHasOID(e,i)){if(!e.geometry)return!1;e.attributes=e.attributes||{},e.attributes[i]=r._nextId++}t=e.declaredClass?e:new d(e),r._mode.drawFeature(t)}var r=this,i=r.objectIdField;e.length?e.forEach(function(e){e&&t(e)}):e&&t(e)},_delete:function(e){var t=this,r=e[t.objectIdField]||e.attributes[t.objectIdField],i=!1;this.graphics.forEach(function(e){e.attributes[t.objectIdField]==r&&(i=e)}),i&&this.remove(i)},_update:function(e){var t=this,r=!1;this.graphics.forEach(function(i){i.attributes[t.objectIdField]==e.attributes[t.objectIdField]&&(r=i)}),r&&(e.attributes&&r.setAttributes(e.attributes),e.geometry&&r.setGeometry(p.fromJson(e.geometry)))},_makeFilter:function(e){var t,r,i,n=null;if(e=e||{},void 0!==e.geometry)if(n=n||{},null===e.geometry)n.geometry=null;else{if(!(t="string"==typeof e.geometry?p.fromJson(JSON.parse(e.geometry)):e.geometry.declaredClass?e.geometry:p.fromJson(e.geometry))||"point"===t.type)throw"Query object contains invalid geometry";if("extent"!==t.type&&(t=t.getExtent()),!t||0===t.getHeight()&&0===t.getWidth())throw"Invalid filter geometry: Extent cannot have a height and width of 0";n.spatialRel="esriSpatialRelIntersects",n.geometryType="esriGeometryEnvelope",n.geometry=t.toJson()}if(void 0!==e.where&&(n=n||{},n.where=e.where),void 0!==e.outFields&&(n=n||{},r="string"==typeof e.outFields?"*"===e.outFields?null:e.outFields.replace(/,\s+/g,",").split(","):null===e.outFields?null:e.outFields,i=this._makeOutFields(r))){if(i.errors&&i.errors.length>0)throw"Invalid filter outFields. "+i.errors.join(",");n.outFields=i.fields?i.fields.join(","):null}return n},_makeOutFields:function(e){var t,i=this,n=[],o=[],s={fields:null};return e&&0!==e.length?(r.forEach(e,function(e){if("*"===e)return s;var t=i._getField(e,!0);t?n.push(t.name):o.push("Field named "+e+" not found in schema.")}),t=i._getOutFields(),r.forEach(t,function(e){i._getField(e)&&-1===r.indexOf(n,e)&&n.push(e)}),s.fields=n,s.errors=o,s):s},_handleFilterMessage:function(e){var t,r;e.error?(r=new Error(e.error.join(",")),this.onFilterChange({filter:this.getFilter(),error:r})):(t=e.filter,t.geometry&&"string"==typeof t.geometry&&(t.geometry=JSON.parse(t.geometry)),this._filter=t,this.onFilterChange({filter:this.getFilter()}))},_getWebsocketConnectionInfo:function(e){var t,i,n,o,s,a={urls:[]},c=[],h=[];if(e.streamUrls&&r.forEach(e.streamUrls,function(e){"ws"===e.transport&&(t=e.urls,a.token=e.token)}),!t)return a;if(r.forEach(t,function(e){0===e.lastIndexOf("wss",0)?h.push(e):c.push(e)}),i="https:"===location.protocol||0===this.url.lastIndexOf("https:",0)?h:0===c.length?h:c,i.length>1)for(n=0;n<i.length-1;n++)o=n+Math.floor(Math.random()*(i.length-n)),s=i[o],i[o]=i[n],i[n]=s;return a.urls=i,a},_attemptReconnect:function(){var e,t,r,i=this;return this._reconnectTimeoutId=null,i._connected=!1,!!i._socketUrls&&(!i._collection&&!i._reconnecting&&i.socket&&i.credential?(i._reconnecting=!0,i._getServiceConnectionMetadata(i._attemptReconnect),!1):(i._reconnecting=!0,i.socket=null,i._reconnectAttempts>i.maxReconnectAttempts?(i._reconnecting=!1,!1):(e=i._reconnectAttempts>i._socketUrls.length-1?i._reconnectAttempts%i._socketUrls.length:i._reconnectAttempts,i.socketUrl=i._socketUrls[e],i.socketUrl+="/"+i.socketDirection,r=i._randomIntFromInterval(0,1e3),t=1e3*i._reconnectAttempts+r,void(this._reconnectTimeoutId=setTimeout(function(){i.onAttemptReconnect({count:i._reconnectAttempts,url:i.socketUrl}),i.connect()},t)))))},_getServiceConnectionMetadata:function(e){var t,r=this,i=r._url.path;e="function"==typeof e?e:null,t=u({url:i,content:n.mixin({f:"json"},this._url.query),callbackParamName:"callback"}),t.then(function(t){var i=r._getWebsocketConnectionInfo(t);r._websocketToken=i.token,e&&e()},function(e){r.onError(new Error(e))})},_setDefaultRenderer:function(){var e,t=this.geometryType,r=new i([5,112,176,.8]),n=new i([255,255,255]),o=new k(k.STYLE_SOLID,n,1);"esriGeometryPoint"===t||"esriGeometryMultipoint"===t?e=new y(y.STYLE_CIRCLE,10,o,r):"esriGeometryPolyline"===t?e=new k(k.STYLE_SOLID,r,2):"esriGeometryPolygon"!==t&&"esriGeometryEnvelope"!==t||(r=new i([5,112,176,.2]),n=new i([5,112,176,.8]),o=new k(k.STYLE_SOLID,n,1),e=new g(g.STYLE_SOLID,o,r)),e&&this.setRenderer(new v(e))},_makeObjectIdField:function(){var e,t,i=1,n=[];if(!this.objectIdField){for(e=this.fields.length,t=0;t<e;t++)n.push(this.fields[t].name.toLowerCase());for(;-1!==r.indexOf(n,"objectid_"+i);)i+=1;this.objectIdField="objectid_"+i,this.fields.push({name:"objectid_"+i,type:"esriFieldTypeOID",alias:"objectid_"+i,nullable:!1})}},_featureHasOID:function(e,t){return e.attributes&&(e.attributes[t]||0===e.attributes[t])},_randomIntFromInterval:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}});return s("extend-esri")&&n.setObject("layers.StreamLayer",b,l),b});