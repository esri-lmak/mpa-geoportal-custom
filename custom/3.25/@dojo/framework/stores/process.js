//>>built
(function(c){"object"===typeof module&&"object"===typeof module.exports?(c=c(require,exports),void 0!==c&&(module.exports=c)):"function"===typeof define&&define.amd&&define("require exports tslib ../shim/Promise ../shim/Map ../has/has".split(" "),c)})(function(c,d){function q(b,h,a,e,c,A){function B(b,e,c){return b(a)(e)}var k=this,z=a.apply,d=a.get,v=a.path,w=a.at;return function(q){return l.__awaiter(k,void 0,void 0,function(){var k,y,r,m,x,p,n,g,t,u;return l.__generator(this,function(f){switch(f.label){case 0:return k=
[],y=l.__spread(h),r=[],m=y.shift(),x=null,p=A?A(q):q,e?(n=e(p,a))?[4,n]:[3,2]:[3,2];case 1:f.sent(),f.label=2;case 2:f.trys.push([2,10,,11]),f.label=3;case 3:if(!m)return[3,9];g=[];if(!Array.isArray(m))return[3,5];g=m.map(function(a){return a({at:w,get:d,path:v,payload:p})});return[4,Promise.all(g)];case 4:return g=f.sent(),[3,8];case 5:return n=m({at:w,get:d,path:v,payload:p}),D.isThenable(n)?[4,n]:[3,7];case 6:n=f.sent(),f.label=7;case 7:g=[n],f.label=8;case 8:for(t=0;t<g.length;t++)k.push.apply(k,
l.__spread(g[t])),r=l.__spread(z(g[t]),r);a.invalidate();m=y.shift();return[3,3];case 9:return[3,11];case 10:return u=f.sent(),x={error:u,command:m},[3,11];case 11:return c&&c(x,{undoOperations:r,store:a,id:b,operations:k,apply:z,at:w,get:d,path:v,executor:B,payload:p}),[2,Promise.resolve({store:a,undoOperations:r,id:b,error:x,operations:k,apply:z,at:w,get:d,path:v,executor:B,payload:p})]}})})}}function u(b,c,a){a=Array.isArray(a)?a:a?[a]:[];a=(a=a.length?a.reduce(function(a,b){return E(b)(a)}):void 0)?
a():{};var e=a.before,d=void 0===e?void 0:e;a=a.after;var h=void 0===a?void 0:a;C.set(b,[b,c,d,h]);return function(a,e){return q(b,c,a,d,h,e)}}function E(b){b=b();var c=b.before,a=b.after;return function(b){b=b?b():{};var d=b.before,e=void 0===d?void 0:d;b=b.after;var h=void 0===b?void 0:b;return function(){return{after:function(b,c){h&&h(b,c);a&&a(b,c)},before:function(a,b){e&&e(a,b);c&&c(a,b)}}}}}Object.defineProperty(d,"__esModule",{value:!0});var l=c("tslib"),D=c("../shim/Promise"),F=c("../shim/Map"),
G=c("../has/has");d.createCommandFactory=function(){return function(b){return b}};var C=new F.default;d.getProcess=function(b){return C.get(b)};d.processExecutor=q;d.createProcess=u;d.createProcessFactoryWith=function(b){return function(c,a,d){return u(c,a,d?l.__spread(b,[d]):b)}};d.createCallbackDecorator=function(b){G.default("dojo-debug")&&console.warn("Process using the the legacy middleware API. Please update to use the latest API, see https://github.com/dojo/framework/blob/master/docs/V5-Migration-Guide.md for details.");
var c=function(){return{after:b}};return function(a){void 0===a&&(a=[]);return l.__spread([c],a)}}});