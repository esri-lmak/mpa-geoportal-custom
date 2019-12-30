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

define(["dojo/_base/array","dojo/_base/lang","dojo/has","../kernel","../Color","./colors","./utils"],function(e,r,g,i,t,l,a){function h(r,g){return e.map(r,function(e){var r=new t(e);return null!=g&&(r.a=g),r})}function n(r,g){var i,t;if(t=a.haveIdenticalColors(g,r.colors))i=t>0?r:x.flipColors(r,!0);else{var l;e.some(r.colorsForClassBreaks,function(e){return e.numClasses===g.length&&(l=e.colors),!!l}),l&&(t=a.haveIdenticalColors(g,l))&&(i=t>0?r:x.flipColors(r,!0))}return i}function o(r,g){var i,t,l=r&&r.basemapGroups,a=r&&r.basemaps;if(l)for(i in l)if(a=l[i],e.indexOf(a,g)>-1){t=i;break}return t=t||g,r&&t?r.schemes[t]:null}function b(e){var r,g=e.basemapGroups,i=e.basemaps,t=[];if(g)for(r in g)t=t.concat(g[r]);else i&&(t=t.concat(i));return t}function s(r,g,i,a,n){var o,b,s,d=l[r];if(d){o={id:a+"/"+n+"/"+r,theme:a},s=g.fillOpacity,null==s&&-1!==e.indexOf(v,r)&&(s=.8),o.opacity=s||1,o.colors=h(d.stops),o.colorsForClassBreaks=[];for(b in d)"stops"!==b&&(b=+b,o.colorsForClassBreaks.push({numClasses:b,colors:h(d[b])}));switch(o.noDataColor=new t(-1!==e.indexOf(v,r)?p:m),i){case"point":o.outline={color:new t(g.outline.color),width:g.outline.width},o.size=g.size;break;case"line":o.width=g.width;break;case"polygon":o.outline={color:new t(g.outline.color),width:g.outline.width}}}return o}function d(e){var r=e;return"esriGeometryPoint"===r||"esriGeometryMultipoint"===r?r="point":"esriGeometryPolyline"===r?r="line":"esriGeometryPolygon"!==r&&"esriGeometryMultiPatch"!==r||(r="polygon"),r}var y={light:{color:[153,153,153,.25],width:.5},lighter:{color:[194,194,194,.25],width:.5},lightest:{color:[153,153,153,.25],width:.5}},u={lightBasemaps:{outline:y.lighter,fillOpacity:.8,width:2,size:8},darkBasemaps:{outline:y.light,fillOpacity:.6,width:2,size:8},test:{outline:y.lightest,fillOpacity:.8,width:2,size:8}},m="#aaaaaa",p="#ffffff",v=["highlight-orange-gray","highlight-bluegreen-gray","highlight-purple-gray","highlight-pink-gray","highlight-blue-gray","highlight-red-gray","highlight-orange-gray-dark","highlight-blue-gray-dark","highlight-orange-gray-bright","highlight-blue-gray-bright","extremes-orange-gray","extremes-bluegreen-gray","extremes-purple-gray","extremes-pink-gray","extremes-blue-gray","extremes-red-gray","extremes-orange-gray-dark","extremes-blue-gray-dark","extremes-orange-gray-bright","extremes-blue-gray-bright"],c=["seq-single-blues","seq-single-greens","seq-single-grays","seq-single-oranges","seq-single-purples","seq-single-reds","seq-multi-bugn","seq-multi-bupu","seq-multi-gnbu","seq-multi-orrd","seq-multi-pubu","seq-multi-pubugn","seq-multi-purd","seq-multi-rdpu","seq-multi-ylgn","seq-multi-ylgnbu","seq-multi-ylorbr","seq-multi-ylorrd"],q=["div-brbg","div-piyg","div-prgn","div-puor","div-rdbu","div-rdgy","div-rdylbu","div-rdylgn","div-spectral"],w=["tropical-bliss","desert-blooms","under-the-sea","vibrant-rainbow","ocean-bay","prairie-summer","pastel-chalk"],k={"high-to-low":{name:"high-to-low",label:"TODO",description:"TODO",basemaps:["streets","gray","topo","terrain","national-geographic","oceans","osm","satellite","hybrid","dark-gray"],schemes:{streets:{common:u.lightBasemaps,primary:"seq-yellow-red-purple",secondary:["seq-yellow-orange-red","seq-yellow-pink-purple","seq-yellow-purple-blue","seq-yellow-green-blue","seq-teal-lightgreen-bright","seq-green-lightgray-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"].concat(c)},gray:{common:u.test,primary:"seq-yellow-red-purple",secondary:["seq-orange-red-light","seq-yellow-orange-red","seq-yellow-pink-purple","seq-yellow-purple-blue","seq-teal-lightgreen-bright","seq-green-lightgray-bright","seq-red-lightgray-bright","seq-blue-lightgray-bright","seq-orange-lightgray-bright","seq-blue-red-yellow-bright","seq-blue-tan-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-blues-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"].concat(c)},topo:{common:u.lightBasemaps,primary:"seq-yellow-green-blue",secondary:["seq-yellow-pink-purple","seq-yellow-purple-blue","seq-yellow-red-purple","seq-yellow-orange-red","seq-teal-lightgreen-bright","seq-green-lightgray-bright","seq-blue-lightgray-bright","seq-orange-lightgray-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"].concat(c)},terrain:{common:u.lightBasemaps,primary:"seq-pink-red",secondary:["seq-yellow-pink-purple","seq-yellow-red-purple","seq-yellow-orange-red","seq-orange-red-light","seq-teal-lightgreen-bright","seq-green-lightgray-bright","seq-red-lightgray-bright","seq-blue-lightgray-bright","seq-orange-lightgray-bright","seq-blue-red-yellow-bright","seq-blue-tan-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-blues-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"].concat(c)},"national-geographic":{common:u.lightBasemaps,primary:"seq-yellow-orange-red",secondary:["seq-yellow-red-purple","seq-yellow-pink-purple","seq-yellow-purple-blue","seq-yellow-green-blue","seq-teal-lightgreen-bright","seq-blue-lightgray-bright","seq-reds-bright","seq-purples-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"].concat(c)},oceans:{common:u.lightBasemaps,primary:"seq-yellow-green-blue",secondary:["seq-yellow-red-purple","seq-yellow-orange-red","seq-yellow-pink-purple","seq-yellow-purple-blue","seq-teal-lightgreen-bright","seq-green-lightgray-bright","seq-red-lightgray-bright","seq-blue-lightgray-bright","seq-blue-red-yellow-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"].concat(c)},osm:{common:u.lightBasemaps,primary:"seq-red-blue-green",secondary:["seq-yellow-pink-purple","seq-yellow-red-purple","seq-yellow-purple-blue","seq-teal-lightgreen-bright","seq-blue-lightgray-bright","seq-blue-red-yellow-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright"].concat(c)},satellite:{common:u.darkBasemaps,primary:"seq-orange-red-dark",secondary:["seq-yellow-green-blue","seq-red-blue-green","seq-yellow-purple-blue","seq-teal-lightgreen-bright","seq-blue-lightgray-bright","seq-gray-lightgreen-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-blues-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright","seq-lightmagenta-darkgray-bright","seq-lightblue-darkgray-bright"].concat(c)},hybrid:{common:u.darkBasemaps,primary:"seq-orange-red-dark",secondary:["seq-yellow-green-blue","seq-red-blue-green","seq-yellow-purple-blue","seq-teal-lightgreen-bright","seq-blue-lightgray-bright","seq-gray-lightgreen-bright","seq-teal-lightbrown-bright","seq-reds-bright","seq-purples-bright","seq-blues-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-blue-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-lightred-darkgray-bright","seq-lightmagenta-darkgray-bright","seq-lightblue-darkgray-bright"].concat(c)},"dark-gray":{common:u.test,primary:"seq-dark-to-light-blue-bright",secondary:["seq-blue-lightgray-bright","seq-gray-lightgreen-bright","seq-reds-bright","seq-purples-bright","seq-blues-bright","seq-greens-bright","seq-browns-bright","seq-dark-to-light-magenta-bright","seq-dark-to-light-purple-bright","seq-dark-to-light-green-bright","seq-brown-to-tan-bright","seq-lightgray-blue-bright","seq-lightgray-green-bright","seq-lightgray-darkmagenta-bright","seq-yellow-darkblue-bright","seq-teal-lightgreen-bright","seq-lightred-darkgray-bright","seq-lightmagenta-darkgray-bright","seq-lightblue-darkgray-bright"].concat(c)}}},"above-and-below":{name:"above-and-below",label:"TODO",description:"TODO",basemaps:["streets","gray","topo","terrain","national-geographic","oceans","osm","satellite","hybrid","dark-gray"],schemes:{streets:{common:u.lightBasemaps,primary:"div-bluegreen-yellow-orange",secondary:["div-orange-yellow-blue-light","div-green-yellow-redpurple","div-green-yellow-orange","div-green-gray-bright","div-red-blue-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightred-gray-bright"].concat(q)},gray:{common:u.test,primary:"div-bluegreen-orange",secondary:["div-orange-purple","div-bluegreen-purple","div-orange-pink","div-blue-yellow-red-bright","div-green-gray-bright","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-blue-green-bright","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(q)},topo:{common:u.lightBasemaps,primary:"div-orange-pink",secondary:["div-redpurple-blue","div-orange-blue","div-green-pink","div-blue-yellow-red-bright","div-green-gray-bright","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-blue-green-bright","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(q)},terrain:{common:u.lightBasemaps,primary:"div-bluegreen-orange",secondary:["div-bluegreen-redpurple","div-green-redpurple","div-green-orange","div-blue-yellow-red-bright","div-green-gray-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-blue-green-bright","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(q)},"national-geographic":{common:u.lightBasemaps,primary:"div-orange-yellow-blue-light",secondary:["div-bluegreen-yellow-orange","div-green-yellow-redpurple","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-blue-green-bright","div-purple-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightred-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(q)},oceans:{common:u.lightBasemaps,primary:"div-red-yellow-pink",secondary:["div-blue-green","div-bluegreen-yellow-redpurple","div-bluegreen-yellow-orange","div-blue-yellow-red-bright","div-green-gray-bright","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-blue-green-bright","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(q)},osm:{common:u.lightBasemaps,primary:"div-bluegreen-pink",secondary:["div-bluegreen-redpurple","div-bluegreen-orange","div-orange-pink","div-green-gray-bright","div-red-blue-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-blue-green-bright","div-purple-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightred-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(q)},satellite:{common:u.darkBasemaps,primary:"div-blue-green-bright",secondary:["div-red-yellow-purple","div-orange-yellow-pink","div-orange-yellow-blue-light","div-green-gray-bright","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-orange-yellow-blue-dark","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-lightmagenta-gray-bright","div-yellow-green-bright","div-lightblue-yellow-bright","div-green-darkgray-bright"].concat(q)},hybrid:{common:u.darkBasemaps,primary:"div-blue-green-bright",secondary:["div-red-yellow-purple","div-orange-yellow-pink","div-orange-yellow-blue-light","div-green-gray-bright","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-orange-yellow-blue-dark","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-green-teal-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-lightmagenta-gray-bright","div-yellow-green-bright","div-lightblue-yellow-bright","div-green-darkgray-bright"].concat(q)},"dark-gray":{common:u.test,primary:"div-blue-green-bright",secondary:["div-yellow-gray-purple","div-lightblue-yellow-bright","div-red-gray-blue","div-green-gray-purple","div-orange-gray-blue","div-green-gray-bright","div-red-green-bright","div-red-blue-bright","div-orange-gray-bright","div-blue-orange-bright","div-blue-lightgreen-bright","div-red-gray-bright","div-blue-gray-bright","div-red-lightgreen-bright","div-green-teal-bright","div-purple-brown-bright","div-blue-brown-bright","div-teal-brown-bright","div-lightgreen-yellow-bright","div-lightblue-gray-bright","div-lightgreen-gray-bright","div-lightred-gray-bright","div-lightmagenta-gray-bright","div-yellow-green-bright","div-green-darkgray-bright"].concat(q)}}},"centered-on":{name:"centered-on",label:"TODO",description:"TODO",basemaps:["streets","gray","topo","terrain","national-geographic","oceans","osm","satellite","hybrid","dark-gray"],schemes:{streets:{common:{outline:y.lighter,width:2,size:8},primary:"highlight-orange",secondary:["highlight-bluegreen","highlight-orange-gray","highlight-bluegreen-gray"]},gray:{common:{outline:y.lighter,width:2,size:8},primary:"highlight-orange",secondary:["highlight-purple","highlight-orange-gray","highlight-purple-gray"]},topo:{common:{outline:y.lighter,width:2,size:8},primary:"highlight-orange",secondary:["highlight-pink","highlight-orange-gray","highlight-pink-gray"]},terrain:{common:{outline:y.lighter,width:2,size:8},primary:"highlight-orange",secondary:["highlight-bluegreen","highlight-orange-gray","highlight-bluegreen-gray"]},"national-geographic":{common:{outline:y.lighter,width:2,size:8},primary:"highlight-orange",secondary:["highlight-blue","highlight-orange-gray","highlight-blue-gray"]},oceans:{common:{outline:y.lighter,width:2,size:8},primary:"highlight-red",secondary:["highlight-pink","highlight-red-gray","highlight-pink-gray"]},osm:{common:{outline:y.lighter,width:2,size:8},primary:"highlight-pink",secondary:["highlight-bluegreen","highlight-pink-gray","highlight-bluegreen-gray"]},satellite:{common:{outline:y.light,width:2,size:8},primary:"highlight-orange-dark",secondary:["highlight-blue-dark","highlight-orange-gray-dark","highlight-blue-gray-dark"]},hybrid:{common:{outline:y.light,width:2,size:8},primary:"highlight-orange-dark",secondary:["highlight-blue-dark","highlight-orange-gray-dark","highlight-blue-gray-dark"]},"dark-gray":{common:{outline:y.light,width:2,size:8},primary:"highlight-orange-bright",secondary:["highlight-blue-bright","highlight-orange-gray-bright","highlight-blue-gray-bright"]}}},extremes:{name:"extremes",label:"TODO",description:"TODO",basemaps:["streets","gray","topo","terrain","national-geographic","oceans","osm","satellite","hybrid","dark-gray"],schemes:{streets:{common:{outline:y.lighter,width:2,size:8},primary:"extremesdiv-bluegreen-yellow-orange",secondary:["extremesdiv-orange-yellow-blue-light","extremesdiv-green-yellow-redpurple","extremesdiv-green-yellow-orange","extremes-orange","extremes-bluegreen","extremes-orange-gray","extremes-bluegreen-gray"]},gray:{common:{outline:y.lighter,width:2,size:8},primary:"extremesdiv-orange-purple",secondary:["extremesdiv-bluegreen-purple","extremesdiv-bluegreen-orange","extremesdiv-orange-pink","extremes-orange","extremes-purple","extremes-orange-gray","extremes-purple-gray"]},topo:{common:{outline:y.lighter,width:2,size:8},primary:"extremesdiv-orange-pink",secondary:["extremesdiv-redpurple-blue","extremesdiv-orange-blue","extremesdiv-green-pink","extremes-orange","extremes-pink","extremes-orange-gray","extremes-pink-gray"]},terrain:{common:{outline:y.lighter,width:2,size:8},primary:"extremesdiv-bluegreen-orange",secondary:["extremesdiv-bluegreen-redpurple","extremesdiv-green-redpurple","extremesdiv-green-orange","extremes-orange","extremes-bluegreen","extremes-orange-gray","extremes-bluegreen-gray"]},"national-geographic":{common:{outline:y.lighter,width:2,size:8},primary:"extremesdiv-orange-yellow-blue-light",secondary:["extremesdiv-bluegreen-yellow-orange","extremesdiv-green-yellow-redpurple","extremes-orange","extremes-blue","extremes-orange-gray","extremes-blue-gray"]},oceans:{common:{outline:y.lighter,width:2,size:8},primary:"extremesdiv-red-yellow-pink",secondary:["extremesdiv-blue-green","extremesdiv-bluegreen-yellow-redpurple","extremesdiv-bluegreen-yellow-orange","extremes-red","extremes-pink","extremes-red-gray","extremes-pink-gray"]},osm:{common:{outline:y.lighter,width:2,size:8},primary:"extremesdiv-bluegreen-pink",secondary:["extremesdiv-bluegreen-redpurple","extremesdiv-bluegreen-orange","extremesdiv-orange-pink","extremes-pink","extremes-bluegreen","extremes-pink-gray","extremes-bluegreen-gray"]},satellite:{common:{outline:y.light,width:2,size:8},primary:"extremesdiv-orange-yellow-blue-dark",secondary:["extremesdiv-red-yellow-purple","extremesdiv-orange-yellow-pink","extremesdiv-orange-yellow-blue-light","extremes-orange-dark","extremes-blue-dark","extremes-orange-gray-dark","extremes-blue-gray-dark"]},hybrid:{common:{outline:y.light,width:2,size:8},primary:"extremesdiv-orange-yellow-blue-dark",secondary:["extremesdiv-red-yellow-purple","extremesdiv-orange-yellow-pink","extremesdiv-orange-yellow-blue-light","extremes-orange-dark","extremes-blue-dark","extremes-orange-gray-dark","extremes-blue-gray-dark"]},"dark-gray":{common:{outline:y.light,width:2,size:8},primary:"extremesdiv-orange-gray-blue",secondary:["extremesdiv-yellow-gray-purple","extremesdiv-red-gray-blue","extremesdiv-green-gray-purple","extremes-orange-bright","extremes-blue-bright","extremes-orange-gray-bright","extremes-blue-gray-bright"]}}},"group-similar":{name:"group-similar",label:"TODO",description:"TODO",basemapGroups:{light:["streets","gray","topo","terrain","national-geographic","oceans","osm"],dark:["satellite","hybrid","dark-gray"]},schemes:{light:{common:u.lightBasemaps,primary:"spectral",secondary:["cat-dark","cat-light"].concat(w)},dark:{common:u.darkBasemaps,primary:"spectral",secondary:["cat-dark","cat-light"].concat(w)}}}},x={};return r.mixin(x,{getAvailableThemes:function(r){var g,i,t,l=[];for(g in k)i=k[g],t=b(i),r&&-1===e.indexOf(t,r)||l.push({name:i.name,label:i.label,description:i.description,basemaps:t});return l},getSchemes:function(r){var g,i,t=r.theme,l=r.basemap,a=d(r.geometryType),h=k[t];return g=o(h,l),g&&(i={primaryScheme:s(g.primary,g.common,a,t,l),secondarySchemes:e.map(g.secondary,function(e){return s(e,g.common,a,t,l)})}),i},getSchemeById:function(e){var r,g,i,t,l,a=e.id,h=d(e.geometryType);return a&&(a=a.split("/"))&&(g=a[0],i=a[1],t=a[2]),l=o(k[g],i),l&&(r=s(t,l.common,h,g,i)),r},cloneScheme:function(g){var i;return g&&(i=r.mixin({},g),i.colors=h(i.colors),i.colorsForClassBreaks=e.map(i.colorsForClassBreaks,function(e){return{numClasses:e.numClasses,colors:h(e.colors)}}),i.noDataColor&&(i.noDataColor=new t(i.noDataColor)),i.outline&&(i.outline={color:i.outline.color&&new t(i.outline.color),width:i.outline.width})),i},flipColors:function(r,g){var i=g?r:x.cloneScheme(r);return i.colors.reverse(),e.forEach(i.colorsForClassBreaks,function(e){e.colors.reverse()}),i},getMatchingSchemes:function(r){var g,i=r.theme,t=d(r.geometryType),l=r.colors,a=k[i],h=b(a),y=[];return e.forEach(h,function(r){var h=o(a,r);h&&(g=n(s(h.primary,h.common,t,i,r),l),g&&y.push(g),e.forEach(h.secondary,function(e){(g=n(s(e,h.common,t,i,r),l))&&y.push(g)}))}),y}}),g("extend-esri")&&r.setObject("styles.choropleth",x,i),x});