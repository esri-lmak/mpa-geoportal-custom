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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/Deferred","dojo/_base/json","dojo/has","dojo/io-query","../kernel","../request","../deferredUtils","../geometry/normalizeUtils","./Task","./FeatureSet","./JobInfo","./GPMessage","./LinearUnit","./DataFile","./RasterData","./Date","./ParameterValue","./GPResultImageLayer","../layers/ArcGISDynamicMapServiceLayer","../layers/MapImage"],function(e,t,a,n,r,s,l,o,i,u,c,d,h,f,p,_,m,b,g,S,R,v,y){var j=e(d,{declaredClass:"esri.tasks.Geoprocessor",_eventMap:{"execute-complete":["results","messages"],"get-result-data-complete":["result"],"get-result-image-complete":["mapImage"],"get-result-image-layer-complete":["layer"],"job-cancel":["jobInfo"],"job-complete":["jobInfo"],"status-update":["jobInfo"]},constructor:function(e){this._jobUpdateHandler=t.hitch(this,this._jobUpdateHandler),this._getJobStatus=t.hitch(this,this._getJobStatus),this._getResultDataHandler=t.hitch(this,this._getResultDataHandler),this._getResultImageHandler=t.hitch(this,this._getResultImageHandler),this._executeHandler=t.hitch(this,this._executeHandler),this._updateTimers=[],this.registerConnectEvents()},updateDelay:1e3,processSpatialReference:null,outputSpatialReference:null,outSpatialReference:null,setUpdateDelay:function(e){this.updateDelay=e},setProcessSpatialReference:function(e){this.processSpatialReference=e},setOutputSpatialReference:function(e){this._setOutSR(e)},setOutSpatialReference:function(e){this._setOutSR(e)},__msigns:[{n:"execute",c:3,a:[{i:0,p:["*"]}],e:2,f:1},{n:"submitJob",c:4,a:[{i:0,p:["*"]}],e:3}],_setOutSR:function(e){this.outSpatialReference=this.outputSpatialReference=e},_getOutSR:function(){return this.outSpatialReference||this.outputSpatialReference},_gpEncode:function(e,n,s){var l;for(l in e){var o=e[l];t.isArray(o)?e[l]=r.toJson(a.map(o,function(e){return this._gpEncode({item:e},!0).item},this)):o instanceof Date&&(e[l]=o.getTime())}return this._encode(e,n,s)},_decode:function(e){var n,r=e.dataType,s=new S(e);if(-1!==a.indexOf(["GPBoolean","GPDouble","GPLong","GPString"],r))return s;if("GPLinearUnit"===r)s.value=new _(s.value);else if("GPFeatureRecordSetLayer"===r||"GPRecordSet"===r)s.value=new h(s.value);else if("GPDataFile"===r)s.value=new m(s.value);else if("GPDate"===r)n=s.value,t.isString(n)?s.value=new g({date:n}):s.value=new Date(n);else if("GPRasterData"===r||"GPRasterDataLayer"===r){var l=e.value.mapImage;s.value=l?new y(l):new b(s.value)}else if(-1!==r.indexOf("GPMultiValue:")){var o=r.split(":")[1];n=s.value,s.value=a.map(n,function(e){return this._decode({paramName:"_name",dataType:o,value:e}).value},this)}else console.log(this.declaredClass+" : GP Data type not handled. : "+s.dataType),s=null;return s},submitJob:function(e,a,n,s,l){var o=this._getOutSR(),u=l.assembly,c=this._gpEncode(t.mixin({},this._url.query,{f:"json","env:outSR":o?o.wkid||r.toJson(o.toJson()):null,"env:processSR":this.processSpatialReference?this.processSpatialReference.wkid||r.toJson(this.processSpatialReference.toJson()):null},e),null,u&&u[0]),d=this._jobUpdateHandler,h=this._errorHandler;return i({url:this._url.path+"/submitJob",content:c,callbackParamName:"callback",load:function(e,t){d(e,t,!1,a,n,l.dfd)},error:function(e){h(e,s,l.dfd)}})},_jobUpdateHandler:function(e,t,a,n,r,s){var l=e.jobId,o=new f(e);if(this._successHandler([o],"onStatusUpdate",r,a&&s),!a)switch(clearTimeout(this._updateTimers[l]),this._updateTimers[l]=null,s&&s.progress(o),e.jobStatus){case f.STATUS_SUBMITTED:case f.STATUS_EXECUTING:case f.STATUS_WAITING:case f.STATUS_NEW:var i=this._getJobStatus;this._updateTimers[l]=setTimeout(function(){i(l,a,n,r,s)},this.updateDelay);break;default:this._successHandler([o],"onJobComplete",n,s)}},_getJobStatus:function(e,a,n,r,s){var l=this._jobUpdateHandler;i({url:this._url.path+"/jobs/"+e,content:t.mixin({},this._url.query,{f:"json"}),callbackParamName:"callback",load:function(){l(arguments[0],arguments[1],a,n,r,s)},error:this._errorHandler})},_getResultDataHandler:function(e,t,a,n,r){try{var s=this._decode(e);this._successHandler([s],"onGetResultDataComplete",a,r)}catch(e){this._errorHandler(e,n,r)}},getResultData:function(e,a,r,s){var l=this._getResultDataHandler,o=this._errorHandler,c=new n(u._dfdCanceller);return c._pendingDfd=i({url:this._url.path+"/jobs/"+e+"/results/"+a,content:t.mixin({},this._url.query,{f:"json",returnType:"data"}),callbackParamName:"callback",load:function(e,t){l(e,t,r,s,c)},error:function(e){o(e,s,c)}}),c},checkJobStatus:function(e,a,r){var s=this._jobUpdateHandler,l=this._errorHandler,o=new n(u._dfdCanceller);return o._pendingDfd=i({url:this._url.path+"/jobs/"+e,content:t.mixin({},this._url.query,{f:"json"}),callbackParamName:"callback",load:function(e,t){s(e,t,!0,null,a,o)},error:function(e){l(e,r,o)}}),o},cancelJob:function(e,a,r){var s=this._errorHandler,l=new n(u._dfdCanceller);return l._pendingDfd=i({url:this._url.path+"/jobs/"+e+"/cancel",content:t.mixin({},this._url.query,{f:"json"}),callbackParamName:"callback",load:t.hitch(this,function(e,t){this._successHandler([e],"onJobCancel",a,l)}),error:function(e){s(e,r,l)}}),l},execute:function(e,a,n,s){var l=this._getOutSR(),o=s.assembly,u=this._gpEncode(t.mixin({},this._url.query,{f:"json","env:outSR":l?l.wkid||r.toJson(l.toJson()):null,"env:processSR":this.processSpatialReference?this.processSpatialReference.wkid||r.toJson(this.processSpatialReference.toJson()):null},e),null,o&&o[0]),c=this._executeHandler,d=this._errorHandler;return i({url:this._url.path+"/execute",content:u,callbackParamName:"callback",load:function(e,t){c(e,t,a,n,s.dfd)},error:function(e){d(e,n,s.dfd)}})},_executeHandler:function(e,t,a,n,r){try{var s,l,o=e.results,i=e.messages;for(s=0,l=o.length;s<l;s++)o[s]=this._decode(o[s]);for(s=0,l=i.length;s<l;s++)i[s]=new p(i[s]);this._successHandler([o,i],"onExecuteComplete",a,r)}catch(e){this._errorHandler(e,n,r)}},_getResultImageHandler:function(e,t,a,n,r){try{var s=this._decode(e);this._successHandler([s],"onGetResultImageComplete",a,r)}catch(e){this._errorHandler(e,n,r)}},getResultImage:function(e,a,r,s,l){var o=this._getResultImageHandler,c=this._errorHandler,d=this._gpEncode(t.mixin({},this._url.query,{f:"json"},r.toJson())),h=new n(u._dfdCanceller);return h._pendingDfd=i({url:this._url.path+"/jobs/"+e+"/results/"+a,content:d,callbackParamName:"callback",load:function(e,t){o(e,t,s,l,h)},error:function(e){c(e,l,h)}}),h},cancelJobStatusUpdates:function(e){clearTimeout(this._updateTimers[e]),this._updateTimers[e]=null},getResultImageLayer:function(e,t,a,n){var r,s;if(null==t){var o=this._url.path.indexOf("/GPServer/");r=this._url.path.substring(0,o)+"/MapServer/jobs/"+e}else r=this._url.path+"/jobs/"+e+"/results/"+t;return this._url.query&&(r+="?"+l.objectToQuery(this._url.query)),s=null==t?new v(r,{imageParameters:a}):new R(r,{imageParameters:a},!0),this.onGetResultImageLayerComplete(s),n&&n(s),s},onStatusUpdate:function(){},onJobComplete:function(){},onExecuteComplete:function(){},onGetResultDataComplete:function(){},onGetResultImageComplete:function(){},onGetResultImageLayerComplete:function(){},onJobCancel:function(){}});return c._createWrappers(j),s("extend-esri")&&t.setObject("tasks.Geoprocessor",j,o),j});