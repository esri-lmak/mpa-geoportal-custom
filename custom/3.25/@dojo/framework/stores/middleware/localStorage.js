//>>built
(function(a){"object"===typeof module&&"object"===typeof module.exports?(a=a(require,exports),void 0!==a&&(module.exports=a)):"function"===typeof define&&define.amd&&define(["require","exports","../../shim/global","../process","../state/operations"],a)})(function(a,d){Object.defineProperty(d,"__esModule",{value:!0});var f=a("../../shim/global"),g=a("../process"),h=a("../state/operations");d.collector=function(a,b){return function(){return{after:function(c,e){c=b(e.store.path).map(function(a){var b=
e.get(a);return{meta:{path:a.path},state:b}});f.default.localStorage.setItem(a,JSON.stringify(c))}}}};d.load=function(a,b){if(a=f.default.localStorage.getItem(a))try{var c=JSON.parse(a).map(function(a){return h.add(b.path(a.meta.path),a.state)});g.processExecutor("local-storage-load",[function(){return c}],b,void 0,void 0,void 0)({})}catch(e){}}});