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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/connect","dojo/_base/array","dojo/sniff","dojo/dom-construct","dojo/dom-style","dojo/on","dojox/gfx/matrix","dojo/when","../kernel","../config","../lang","../domUtils","../urlUtils","../geometry/Extent","../SpatialReference","../geometry/Point","./Field","./PixelBlock","./ImageServiceLayerMixin","./rasterLib/raster/rasterFactory","./rasterLib/raster/rasterProjectionHelper","./rasterLib/renderer/rasterRendererHelper","./rasterLib/tile/RasterTileInfo","./rasterLib/tile/RasterTileManager","./rasterLib/tile/RasterHandler","./layer"],function(t,e,i,s,a,n,r,h,l,o,c,d,_,u,p,m,x,g,f,y,R,b,v,w,M,D,P,I){var T=d.defaults.map.zoomDuration;return t([I],{declaredClass:"esri.layers.RasterXLayer",managedSuspension:!0,opacity:1,tileMode:!0,useWebGL:!0,drawMode:!0,_eventMap:{"raster-change":!0,"renderer-change":!0},constructor:function(t,i){i=i||{},this.tileMode=null!=i.tileMode?i.tileMode:this.tileMode,this.useWebGL=null!=i.useWebGL?i.useWebGL:this.useWebGL,this.roaming=null!=i.roaming?i.roaming:this.roaming,this.drawMode=null!=i.drawMode?i.drawMode:this.drawMode,this.renderer=i.renderer,this._customModules=i.customModules,this.drawMode||(this._contextType=i._contextType||i.drawType),this._supportLegacyPropMethods=!(!i.legacySupport&&!i.pixelFilter),this._rasterHandler=new P({customModules:this._customModules}),this._workInitPromise=this._rasterHandler.start(),this.pixelData=null,this._initialize(t,i),h(this,"load",e.hitch(this,function(){o(this._rasterHandler._connected||this._rasterHandler._connectionPromise,e.hitch(this,function(){this._rasterHandler.setLayer({layerId:this.id,raster:{rasterInfo:this.raster.rasterInfo,rasterFunction:this.raster.rasterFunction&&this.raster.rasterFunction.toJson()},bandCount:this.raster.rasterInfo.bandCount}),this.raster.rasterFunction&&this._rasterHandler.setRasterFunction({layerId:this.id,data:this.raster.rasterFunction.toJson(!0)}),this._rasterRenderer&&this._rasterHandler.setRasterRenderer({layerId:this.id,data:this._rasterRenderer.toJson(!0)})}))})),this._animatePan2d=e.hitch(this,this._animatePan2d)},setOpacity:function(t){this.opacity!==t&&(this.opacity=t,this.onOpacityChange(t))},onOpacityChange:function(){},onRendererChange:function(){},refresh:function(){if(!this._canDraw()||a("ie")<10)return void this.onError(new Error("Unable to refresh. This layer is not supported in the current browser."));this._map&&this._extentChangeHandler(this._map.extent)},clear:function(t,e,i,s){this._canDraw()&&(this.useWebGL||(i?this._context.clearRect(t,e,i,s):this._context.clearRect(0,0,this._map.width,this._map.height)))},getContext:function(){return this._context},onResume:function(){if(this.inherited(arguments),this._toggleTime(),"css-transforms"===this._map.navigationMode){var t=this._map.__visibleDelta;this._left=this._tdx=t.x,this._top=this._tdy=t.y,r.set(this._div,c._css.names.transform,c._css.translate(this._left,this._top))}this._displayTimer=this._displayTimer||setTimeout(e.hitch(this,function(){this._extentChangeHandler(this._map.extent,null,!0)}),0)},onSuspend:function(){this.inherited(arguments),this._toggleTime(),clearTimeout(this._displayTimer),this._displayTimer=null},redraw:function(){this.useWebGL&&this._glSetting&&(this._glSetting.hasNewTexture=!1);var t,e,i=this.tileMode?this.tileManager.originalPixelData:this.originalPixelData,s=!!(this.tileMode?i&&(i.src||i.texture):i);s&&(this.tileMode?this.useWebGL?this._updateAllTilesOnce(i):(this.tileManager.tiles.forEach(function(t){t&&(t.update=null,t.completed=!1,t.processedPixelBlock=null,t.renderedPixelBlock=null)}),i.processedPixelBlock=null,t=this.raster.rasterFunction?this.raster.rasterFunction.read(i):{extent:i.extent,pixelBlock:i.src[this.tileManager.identifiers[0]]&&i.src[this.tileManager.identifiers[0]].pixelBlock},i.renderedPixelBlock=null,e=this._rasterRenderer?this._rasterRenderer.draw(t):t,this._drawOneFrame(e)):this._supportLegacyPropMethods&&this.pixelFilter?this._setPixelData(this.originalPixelData):(i.processedPixelBlock=null,t=this.raster.rasterFunction?this.raster.rasterFunction.read(i):{extent:i.extent,pixelBlock:i.src[this.tileManager.identifiers[0]]&&i.src[this.tileManager.identifiers[0]].pixelBlock},i.renderedPixelBlock=null,e=this._rasterRenderer?this._rasterRenderer.draw(t):t,this._drawOneFrame(e)))},getCurrentResolution:function(){var t=this._map.extent;return new g((t.xmax-t.xmin)/this._map.width,(t.ymax-t.ymin)/this._map.height,t.spatialReference)},setRenderer:function(t,i){if(t&&(this.renderer=t,t=e.clone(t.toJson?t.toJson():t),"rasterStretch"===t.type&&(t.bandIndex&&t.bandIndex.length>1?t.type="rgb":!t.bandIndex&&this.raster&&this.raster.rasterInfo.bandCount>1&&(t.type="rgb")),this._rasterRenderer=w.create(t),this.loaded)){this._rasterRenderer.bind({layer:this});var s;this.loaded&&this._rasterHandler._connected&&(s=this._rasterHandler.setRasterRenderer({layerId:this.id,data:this._rasterRenderer.toJson(!0)}),this._updateTilingEffects()),i||(s?s.then(e.hitch(this,function(){this.redraw()})):this.redraw()),this.onRendererChange()}},getPixelData:function(t){return this.tileMode?t?this.tileManager.originalPixelData.src&&this.tileManager.originalPixelData.src[this.tileManager.identifiers[0]]:null:this.inherited(arguments)},_getProjectedFullExtent:function(t){return this.raster.getProjectedFullExtent(t).then(e.hitch(this,function(t){this.projectedFullExtent=t}))},_initialize:function(t,i){i=i||{},this._supportLegacyPropMethods&&this.constructor._onMap&&(this.constructor._onMap["rendering-change"]={method:"onRenderingChange"},this.constructor._onMap["mosaic-rule-change"]={method:"onMosaicRuleChange"},this.constructor._onMap["spatial-reference-change"]={method:"onSpatialReferenceChange"}),this.raster={};var s=e.hitch(this,function(){this.loaded=!0,this.raster._setRasterHandler(this._rasterHandler),this.onLoad(this);var t=this._loadCallback;t&&(delete this._loadCallback,t(this))});(t?b.create(e.mixin({url:t},i)):i.raster&&i.raster.open()).then(e.hitch(this,function(e){if(!e)return void console.error("cannot create rasterx layer as the raster data source cannot be opened");this.raster=e;var a=this._getSourceImageServiceRaster();this.url||(this.url=a&&a.url),this.url&&(this._url=p.urlToObject(t)),a&&"ImageService"===a.sourceType&&this._supportLegacyPropMethods&&this._addLegacySupport(t,i),this.initialExtent=this.fullExtent=this.extent=this.raster.rasterInfo.extent,this.spatialReference=this.extent.spatialReference,this.timeInfo=this.raster.rasterInfo.timeInfo,this.rasterAttributeTable=this.raster.rasterInfo.vat,this._multidimensionalInfo=this.raster.rasterInfo.multidimensionalInfo,null==this.minScale||this._hasMin||this.setMinScale(this.minScale),null==this.maxScale||this._hasMax||this.setMaxScale(this.maxScale),this._workInitPromise?this._workInitPromise.then(s,s):s()}),this._errorHandler)},_getSourceImageServiceRaster:function(){var t="Function"===this.raster.sourceType?1===this.raster.getMemberRasters().length?this.raster.getMemberRasters()[0]:null:this.raster;if(t&&"ImageService"===t.sourceType)return t},_addLegacySupport:function(t,i){this._url=p.urlToObject(t),i=i||{};var s=i.imageServiceParameters;this.format=s&&s.format,this.compressionTolerance=s&&s.compressionTolerance?s.compressionTolerance:.01,this.interpolation=s?s.interpolation:null,this.compressionQuality=s?s.compressionQuality:null,this.bandIds=s?s.bandIds:null,this.mosaicRule=s?s.mosaicRule:null,this.renderingRule=s?s.renderingRule:null,this.useMapDimensionValue=!i.hasOwnProperty("useMapDimensionValue")||!!i.useMapDimensionValue,this.hasImageFilter=i.hasImageFilter,this.activeMapDimensions=i.activeMapDimensions,this._params=e.mixin({},this._url.query,{f:"image",interpolation:this.interpolation,format:this.format,compressionQuality:this.compressionQuality,bandIds:this.bandIds?this.bandIds.join(","):null},s?s.toJson():{}),this.pixelFilter=i.pixelFilter,this.pixelData=null,this.originalPixelData=null,this._queryVisibleRastersHandler=e.hitch(this,this._queryVisibleRastersHandler);var a=this._getSourceImageServiceRaster();if(a){Object.keys(a.serviceInfo).forEach(function(t){null==this[t]&&(this[t]=a.serviceInfo[t])}.bind(this)),this.pixelSizeX=parseFloat(this.pixelSizeX),this.pixelSizeY=parseFloat(this.pixelSizeY),this.bands=a.rasterInfo.statistics;var n,r=[];for(this.fields=this.fields||[],n=0;n<this.fields.length;n++)r.push(new f(this.fields[n]));this.fields=r,this.version=this.currentVersion,this.defaultMosaicRule=a.serviceInfo.defaultMosaicRule}this._useRenderingRuleAttributeTable=!1,this._rasterFunctionTemplateInfos={},this._customRenderingRuleId={},this._setDefaultFilter=function(){};var h,l={setInterpolation:"interpolation",setCompressionQuality:"compressionQuality",setCompressionTolerance:"compressionTolerance",setBandIds:"bandIds",setDefaultBandIds:"bandIds",setMosaicRule:"mosaicRule",setRenderingRule:"renderingRule",setImageFormat:"format"},o=new R;Object.keys(l).forEach(e.hitch(this,function(t){this[t]=e.hitch(this,function(e,i){h={},h[l[t]]=e,this.raster.setFetchParameters(h),o[t].bind(this)(e,i)})})),this.setDisableClientCaching=function(t){o.setDisableClientCaching.bind(this)(t);var e=this._getSourceImageServiceRaster();e&&(e.disableClientCaching=t)}.bind(this),this.setDefinitionExpression=o.setDefinitionExpression.bind(this),this.setPixelFilter=o.setPixelFilter.bind(this),this.getHistograms=o.getHistograms.bind(this),this.getRasterFunctionInfos=o.getRasterFunctionInfos.bind(this),this.getKeyProperties=o.getKeyProperties.bind(this),this.getRasterAttributeTable=o.getRasterAttributeTable.bind(this),this.getRenderingRuleServiceInfo=o.getRenderingRuleServiceInfo.bind(this),this._getRenderingRuleId=o._getRenderingRuleId.bind(this),this._isRenderingRuleAProcessingTemplate=o._isRenderingRuleAProcessingTemplate.bind(this),this.handleSpatialReferenceChange=o.handleSpatialReferenceChange.bind(this),this.onRenderingChange=this.onRenderingChange||function(){},this.onSpatialReferenceChange=this.onSpatialReferenceChange||function(){},this.onMosaicRuleChange=this.onMosaicRuleChange||function(t){},this.setRasterRenderer=this.setRenderer},_setDefaultRenderer:function(){if(this.loaded&&this._canvas&&!this._rasterRenderer&&!this.pixelFilter){var t=w.createDefaultRenderer(this);this.setRenderer(t,!0)}},_toggleTime:function(){},_updateTilingEffects:function(){this._hasTilingEffects=this._rasterRenderer&&this._rasterRenderer.hasTilingEffects()||this.raster&&this.raster.rasterFunction&&this.raster.rasterFunction.hasTilingEffects(),this._hasTilingEffects&&this._map&&this.tileMode&&this.useWebGL&&this.tileManager&&this.tileManager.xformSetting.requireProjection&&(this._hasTilingEffects=!1)},_setMap:function(t,e){this.inherited(arguments);var s;t.spatialReference&&(t.spatialReference.ics||t.spatialReference.icsId)&&(this.tileMode=!1,this.useWebGL=!1,this.roaming=!1),this.tileMode&&(this.virtualTileInfo=new M(null,{refTileInfo:t.tileInfo,spatialReference:t.spatialReference,extent:this.raster.rasterInfo.extent}),s=this.raster.tileInfo&&(["Elevation","Raster"].indexOf(this.raster.tileInfo.tileType)>-1||3===this.raster.rasterInfo.bandCount&&"U8"===this.raster.rasterInfo.pixelType)?this.raster.tileInfo:this.virtualTileInfo,this._tileParams=this._tileParams||{},this._tileParams.size=s.cols+","+s.rows,this.tileManager=new D({tileInfo:s,layer:this,mapSR:t.spatialReference})),this._dragOrigin={x:0,y:0};var a=this._div=n.create("div",null,e),h={width:t.width+"px",height:t.height+"px",position:"absolute"};"css-transforms"===t.navigationMode?this.roaming&&this.tileMode&&this.useWebGL||(h[c._css.names.transform]=c._css.translate(t.__visibleDelta.x,t.__visibleDelta.y),this._left=t.__visibleDelta.x,this._top=t.__visibleDelta.y):this._left=this._top=0,r.set(a,h),this._canvas=n.create("canvas",{width:t.width+"px",height:t.height+"px",style:"position: absolute;"},a),_.isDefined(this.opacity)&&r.set(a,"opacity",this.opacity);if(this._contextType?(this._context=this._canvas.getContext(this._contextType,null),this.useWebGL=this._context instanceof WebGLRenderingContext):this.useWebGL?(this._context=this._canvas.getContext("webgl",null)||this._canvas.getContext("experimental-webgl",null),this.drawMode=!1):(this._context=this._canvas.getContext("2d"),this.drawMode=!0),this._context||console.error("Unable to create the context. This browser might not support <canvas> elements."),this.useWebGL&&(this._glSetting={gl:this._context,branchCount:this.raster.rasterFunction?this.raster.rasterFunction.branchCount:0,pingpong:null,branches:null,drawMesh:this._drawMesh}),this.raster.rasterFunction&&(this._updateTilingEffects(),this.raster.setProcessingContext({layer:this})),this.setRenderer(this.renderer,!0),this._rasterRenderer||this._setDefaultRenderer(),this._mapWidth=t.width,this._mapHeight=t.height,this._connects=[],this._connects.push(i.connect(t,"onPan",this,this._panHandler)),this._connects.push(i.connect(t,"onPanEnd",this,this._panEndHandler)),"css-transforms"===t.navigationMode?this._connects.push(i.connect(t,"onScale",this,this._onScaleHandler)):(this._connects.push(i.connect(t,"onZoom",this,this._onZoomHandler)),this._connects.push(i.connect(t,"onZoomEnd",this,this._onZoomEndHandler))),this._connects.push(i.connect(t,"onResize",this,this._onResizeHandler)),this._connects.push(i.connect(t,"onExtentChange",this,this._extentChangeHandler)),this._connects.push(i.connect(this,"onVisibilityChange",this,this._visibilityChangeHandler)),this._connects.push(i.connect(this,"onOpacityChange",this,this._opacityChangeHandler)),this._startRect={left:0,top:0,width:t.width,height:t.height},this.evaluateSuspension(),this.suspended&&!t.loaded)var l=i.connect(t,"onLoad",this,function(){i.disconnect(l),l=null,this.evaluateSuspension()});return a},_unsetMap:function(t,e){s.forEach(this._connects,i.disconnect,this);var a=this._div;a&&(e.removeChild(a),n.destroy(a)),this._map=this._canvas=this._context=this.data=this._connects=null,clearTimeout(this._displayTimer),this._displayTimer=null,this.inherited(arguments)},_canDraw:function(){return!!(this._map&&this._canvas&&this._context)},_requestDataErrorHandler:function(t){"CancelError"!==t.name&&(this.clear(),this.onError(t))},_clonePixelData:function(t){if(null===t)return t;if(t.texture)return t;var i={};t.extent&&(i.extent=e.clone(t.extent));var s=t.pixelBlock;return null!=s&&(i.pixelBlock=s.clone()),i.texture=t.texture,i},_setPixelData:function(t){if(t){var e=this._clonePixelData(t);if(this.pixelFilter?(this.pixelFilter.filter?(this.pixelFilter.renderTexture=!0,this.pixelFilter.filter(e)):this.pixelFilter(e),this.pixelData=e):this.pixelData=e,this._rasterReadPromise&&this._rasterReadPromise.isCanceled())return;this._drawPixelData()}this._rasterReadPromise=null},_requestData:function(t,i,s){this._rasterReadPromise&&this._rasterReadPromise.cancel(),t=e.clone(t)._normalize(!0);var a={extent:t,width:this._map.width,height:this._map.height};return this._rasterReadPromise=this.raster.read(a),this._rasterReadPromise.then(e.hitch(this,function(t){this._rasterReadPromise&&this._rasterReadPromise.isCanceled()||(this.originalPixelData=t&&t.srcData?{extent:t.extent,src:t.srcData}:t,this.useWebGL&&this._glSetting&&(this._glSetting.hasNewTexture=!0),this._setPixelData(t))}),e.hitch(this,this._requestDataErrorHandler)),this._rasterReadPromise},_drawPixelData:function(t){if(r.set(this._canvas,{left:"0px",top:"0px",width:this._map.width+"px",height:this._map.height+"px"}),this._startRect={left:0,top:0,width:this._map.width,height:this._map.height},this.drawMode||"css-transforms"===this._map.navigationMode&&(this._tdx=this._left,this._tdy=this._top,this._multiply=null,r.set(this._div,c._css.names.transform,c._css.translate(this._left,this._top)),r.set(this._canvas,c._css.names.transform,c._css.translate(-this._left,-this._top)),this._dragOrigin={x:0,y:0}),this.useWebGL&&this._rasterRenderer&&this._rasterRenderer.draw(this.pixelData),this._canDraw()&&this.drawMode&&this.drawMode&&(t=t||this.pixelData)&&t.pixelBlock){var e=this.pixelFilter?this.pixelData:this._rasterRenderer?this._rasterRenderer.draw(t):t,i=e.pixelBlock,s=this._context,a=s.createImageData(i.width,i.height);a.data.set(i.getAsRGBA());var n=e.extent,h=this._map.extent,l=this.getCurrentResolution(),o={x:0,y:0};Math.abs(n.xmin-h.xmin)>l.x&&(o.x=Math.round((n.xmin-h.xmin)/l.x)),Math.abs(h.ymax-n.ymax)>l.y&&(o.y=Math.round((h.ymax-n.ymax)/l.y)),"css-transforms"===this._map.navigationMode?(this._tdx=this._left,this._tdy=this._top,this._multiply=null,r.set(this._div,c._css.names.transform,c._css.translate(this._left,this._top)),r.set(this._canvas,c._css.names.transform,c._css.translate(-this._left,-this._top))):(r.set(this._div,{left:"0px",top:"0px",width:this._map.width+"px",height:this._map.height+"px"}),r.set(this._canvas,{left:"0px",top:"0px",width:this._map.width+"px",height:this._map.height+"px"})),this._dragOrigin={x:0,y:0},this.tileMode?this.clear(o.x,o.y,i.width,i.height):this.clear(),s.putImageData(a,o.x,o.y,0,0,i.width,i.height),this._fireUpdateEnd()}},_animatePan2d:function(){this._oldDelta&&this._delta.x===this._oldDelta.x&&this._delta.y===this._oldDelta.y||(this.tileManager.updateTile(this.tileManager.originalPixelData,!0),this._oldDelta={x:this._delta.x,y:this._delta.y}),this._roamingAnimation&&this.tileMode&&this.useWebGL&&(this._roamingAnimation=requestAnimationFrame(this._animatePan2d))},_cancelAnimation:function(){this._animation&&(cancelAnimationFrame(this._animation),this._animation=null)},_updateAllTilesOnce:function(t,i){return this.tileManager.updateTile(t,!0).then(e.hitch(this,function(t){(this._hasTilingEffects||this.useWebGL||i)&&this._drawOneFrame(t)}))},_drawOneFrame:function(t,e){if(!this.suspended&&this._map&&(!this.tileMode||this._drawTile)){if(this.tileMode&&this.useWebGL&&this.tileManager.originalPixelData.isEmpty&&this._context.clear(this._context.COLOR_BUFFER_BIT),this._resetCss&&!this._levelChange||(this._levelChange=!1,this._resetDrawing()),!t||!t.renderedPixelBlock&&!t.pixelBlock||!this._canDraw()||!this.drawMode)return void this._fireUpdateEnd();var i=t.extent,s=this._map.extent;if(!this._isExtentOutSide(i,s)){var a=t.pixelBlock||t.renderedPixelBlock,n=this._context,r=n.createImageData(a.width,a.height);r.data.set((t.renderedPixelBlock||t.pixelBlock).getAsRGBA());var h=this.getCurrentResolution(),l={x:0,y:0};Math.abs(i.xmin-s.xmin)>h.x&&(l.x=Math.round((i.xmin-s.xmin)/h.x)),Math.abs(s.ymax-i.ymax)>h.y&&(l.y=Math.round((s.ymax-i.ymax)/h.y)),n.putImageData(r,l.x,l.y,0,0,a.width,a.height)}}},_isExtentOutSide:function(t,e){return t.xmax<=e.xmin||t.xmin>=e.xmax||t.ymax<=e.ymin||t.ymin>=e.ymax},_resetDrawing:function(){if(this._resetCss=!0,!this.useWebGL)if(this._multiply||this._startRect.width!==this._map.width||this._startRect.height!==this._map.height)this.clear();else{var t=this._context.getImageData(0,0,this._map.width,this._map.height);this.clear(),this._context.putImageData(t,this._startRect.left,this._startRect.top)}this._dragOrigin={x:0,y:0},this._startRect={left:0,top:0,width:this._map.width,height:this._map.height},r.set(this._canvas,{left:"0px",top:"0px",width:this._map.width+"px",height:this._map.height+"px"}),"css-transforms"===this._map.navigationMode?(this.roaming&&this.tileMode&&this.useWebGL&&(this._delta=null),this._tdx=this._left,this._tdy=this._top,this._multiply=null,r.set(this._div,c._css.names.transform,c._css.translate(this._left,this._top)),r.set(this._canvas,c._css.names.transform,c._css.translate(-this._left,-this._top))):(r.set(this._div,{left:"0px",top:"0px",width:this._map.width+"px",height:this._map.height+"px"}),r.set(this._canvas,{left:"0px",top:"0px",width:this._map.width+"px",height:this._map.height+"px"}))},_drawAllFrames:function(){if(!this.suspended&&this._map&&(!this.tileMode||this._drawTile)){if(!this._resetCss)return this._resetDrawing(),void(this._animation=requestAnimationFrame(e.hitch(this,this._drawAllFrames)));var t,i,s=this._frames,a=0;for(t=0;t<s.length;t++)if(s[t].completed)a++;else{if(s[t].tileData.renderedPixelBlock){s[t].completed=!0,i=s[t].tileData;break}if(s[t].tileData._fetched&&!s[t].tileData.src){s[t].completed=!0;break}if(s[t].tileData.update&&s[t].tileData.update.isFulfilled()&&!s[t].tileData.renderedPixelBlock){s[t].completed=!0;break}s[t].tileData.fetch&&(!0===s[t].tileData.fetch||s[t].tileData.fetch.isCanceled()||s[t].tileData.fetch.isRejected())?(s[t].completed=!0,a++):this._isExtentOutSide(s[t].tileData.extent,this._map.extent)&&(s[t].completed=!0,a++)}if(i){a++;var n=i.extent,r=this._map.extent,h=this.getCurrentResolution(),l={x:0,y:0};if(Math.abs(n.xmin-r.xmin)>h.x&&(l.x=Math.round((n.xmin-r.xmin)/h.x)),Math.abs(r.ymax-n.ymax)>h.y&&(l.y=Math.round((r.ymax-n.ymax)/h.y)),i.renderedPixelBlock){var o=i.renderedPixelBlock,c=this._context,d=c.createImageData(o.width,o.height);d.data.set(i.renderedPixelBlock.getAsRGBA()),this._context.putImageData(d,l.x,l.y,0,0,o.width,o.height)}else this.clear(l.x,l.y,i.width,i.height)}a===s.length?(this._animation=null,this._fireUpdateEnd()):this._animation=requestAnimationFrame(e.hitch(this,this._drawAllFrames))}},_fetchTiles:function(t,i){if(!this.suspended&&this.loaded){this._cancelAnimation();var s=this.tileManager,a=!(s.xformSetting.requireProjection&&s.xformSetting.requirePE)||v.load();o(a,e.hitch(this,function(){s.updateExtent(t,this.getCurrentResolution()),this._resetCss=!1,s.fetchTiles(i),i&&(this._hasTilingEffects||this.useWebGL?this.useWebGL?(s._validateRawPixelBlocks(s.originalPixelData)?this._updateAllTilesOnce(s.originalPixelData):s.originalPixelData&&s.originalPixelData.src&&s.tiles.some(function(t){return t.filled})&&this._context.clear(this._context.COLOR_BUFFER_BIT),s.tiles.forEach(e.hitch(this,function(t){t.update&&!t.filled&&t.update.then(function(e){t.filled=!0,(this._hasTilingEffects||this.useWebGL)&&this._drawOneFrame(e)}.bind(this))}))):this._hasTilingEffects&&o(s.fetchAllCompleted.isResolved()||s.fetchAllCompleted,e.hitch(this,function(){this._updateAllTilesOnce(s.originalPixelData)})):(this._frames=s.tiles.map(function(t){return{completed:!1,tileData:t}}),this._drawAllFrames()))}))}},_redrawTiles:function(){this._fetchTiles(this._map.extent,!0)},_panHandler:function(t,e){this._drawTile=!1,"css-transforms"===this._map.navigationMode?this.roaming&&this.tileMode&&this.useWebGL?(this._delta=e,!this._roamingAnimation&&this.tileMode&&(this._roamingAnimation=requestAnimationFrame(this._animatePan2d))):(this._left=this._map.__visibleDelta.x+e.x,this._top=this._map.__visibleDelta.y+e.y,r.set(this._div,c._css.names.transform,c._css.translate(this._left,this._top))):r.set(this._div,{left:this._startRect.left+e.x+"px",top:this._startRect.top+e.y+"px"}),this.tileMode&&this._fetchTiles(t)},_panEndHandler:function(t,e){e&&(this._startRect.left+=e.x,this._startRect.top+=e.y),this.oldData=null,this._roamingAnimation&&(cancelAnimationFrame(this._roamingAnimation),this._roamingAnimation=null,this._oldDelta=null)},_onScaleHandler:function(t,e){var i={},s=c._css.names;r.set(this._canvas,s.transition,e?"none":s.transformName+" "+T+"ms ease"),this._matrix=t,t=this._multiply?l.multiply(t,this._multiply):t,(this._tdx||this._tdy)&&(t=l.multiply(t,{xx:1,xy:0,yx:0,yy:1,dx:-this._tdx,dy:-this._tdy})),i[s.transform]=c._css.matrix(t),r.set(this._canvas,i)},_onZoomHandler:function(t,e,i){var s=this._startRect,a=s.width*e,n=s.height*e,h=s.left-(a-s.width)*(i.x-s.left)/s.width,l=s.top-(n-s.height)*(i.y-s.top)/s.height;r.set(this._canvas,{left:h+"px",top:l+"px",width:a+"px",height:n+"px"}),this._endRect={left:h,top:l,width:a,height:n}},_onZoomEndHandler:function(){this._endRect&&(this._startRect=this._endRect)},_onResizeHandler:function(t,e,i){r.set(this._div,{width:e+"px",height:i+"px"}),r.set(this._canvas,{width:e+"px",height:i+"px"}),this._startRect.width=this._canvas.width=e,this._startRect.height=this._canvas.height=i,this.useWebGL&&this._glSetting&&(this._glSetting.pingpong=null,this._glSetting.branches=null)},_extentChangeHandler:function(t,i,s,a){if(this._drawTile=!0,this.loaded&&!this.suspended&&(!i||0!==i.x||0!==i.y||s)){"css-transforms"===this._map.navigationMode&&(i&&(this._dragOrigin.x+=i.x,this._dragOrigin.y+=i.y),this._left=this._map.__visibleDelta.x,this._top=this._map.__visibleDelta.y,this.roaming&&this.tileMode&&this.useWebGL||s||r.set(this._div,c._css.names.transform,c._css.translate(this._left,this._top)),s&&(r.set(this._canvas,c._css.names.transition,"none"),this._multiply=this._multiply?l.multiply(this._matrix,this._multiply):this._matrix,this._levelChange=!0)),this._fireUpdateStart();var n=this._map,h=this.raster.rasterFunction?this.raster.getMemberRasters().map(function(t){return t._rasterId}):[this.raster._rasterId],o={};this.tileMode?((this.roaming||this.useWebGL)&&this.tileMode||(h.forEach(function(t,e){o[t]={extent:n.extent,pixelBlock:new y({width:n.width,height:n.height,pixels:[],pixelType:"",mask:null,statistics:[]})}}),this.tileManager.originalPixelData={extent:n.extent,src:o}),this.projectedFullExtent?this._fetchTiles(t,!0):this._getProjectedFullExtent(n.spatialReference).then(e.hitch(this,function(){this._fetchTiles(t,!0)}))):this._requestData(n.extent,n.width,n.height)}},_visibilityChangeHandler:function(t){t?u.show(this._div):u.hide(this._div)},_opacityChangeHandler:function(t){r.set(this._div,"opacity",t)}})});