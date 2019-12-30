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

define(["require","exports","./Attachment","./Dictionary","./Feature","./FunctionWrapper","./ImmutablePathArray","./ImmutablePointArray","./languageUtils","./treeAnalysis","./functions/date","./functions/geometry","./functions/geomsync","./functions/maths","./functions/stats","./functions/string","../geometry/Extent","../geometry/Geometry","../geometry/Multipoint","../geometry/Point","../geometry/Polygon","../geometry/Polyline","../SpatialReference"],function(e,r,t,n,o,a,i,s,u,l,c,f,p,d,h,g,v,m,E,w,N,y,I){"use strict";function b(e,r){for(var t=[],n=0;n<r.arguments.length;n++)t.push(O(e,r.arguments[n]));return t}function R(e,r,t){try{return t(e,r,b(e,r))}catch(e){throw e}}function O(e,r){try{switch(r.type){case"EmptyStatement":return u.voidOperation;case"VariableDeclarator":return V(e,r);case"VariableDeclaration":return B(e,r);case"BlockStatement":return L(e,r);case"FunctionDeclaration":return _(e,r);case"ReturnStatement":return k(e,r);case"IfStatement":return D(e,r);case"ExpressionStatement":return P(e,r);case"AssignmentExpression":return x(e,r);case"UpdateExpression":return F(e,r);case"BreakStatement":return u.breakResult;case"ContinueStatement":return u.continueResult;case"ForStatement":return A(e,r);case"ForInStatement":return M(e,r);case"Identifier":return Z(e,r);case"MemberExpression":return G(e,r);case"Literal":return r.value;case"CallExpression":return W(e,r);case"UnaryExpression":return j(e,r);case"BinaryExpression":return z(e,r);case"LogicalExpression":return H(e,r);case"ConditionalExpression":throw new Error(l.nodeErrorMessage(r,"RUNTIME","NOTSUPPORTED"));case"ArrayExpression":return q(e,r);case"ObjectExpression":return S(e,r);case"Property":return T(e,r);default:throw new Error(l.nodeErrorMessage(r,"RUNTIME","UNREOGNISED"))}}catch(e){throw e}}function S(e,r){for(var t={},o=0;o<r.properties.length;o++){var a=O(e,r.properties[o]);if(u.isFunctionParameter(a.value))throw new Error("Illegal Argument");if(!1===u.isString(a.key))throw new Error("Illegal Argument");a.value===u.voidOperation?t[a.key.toString()]=null:t[a.key.toString()]=a.value}var i=new n(t);return i.immutable=!1,i}function T(e,r){return{key:"Identifier"===r.key.type?r.key.name:O(e,r.key),value:O(e,r.value)}}function M(e,r){var t=O(e,r.right);"VariableDeclaration"===r.left.type&&O(e,r.left);var a=null,i="";if("VariableDeclaration"===r.left.type){var s=r.left.declarations[0].id;"Identifier"===s.type&&(i=s.name)}else"Identifier"===r.left.type&&(i=r.left.name);if(!i)throw new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDVARIABLE"));if(i=i.toLowerCase(),null!==e.localScope&&void 0!==e.localScope[i]&&(a=e.localScope[i]),null===a&&void 0!==e.globalScope[i]&&(a=e.globalScope[i]),null===a)throw new Error(l.nodeErrorMessage(r,"RUNTIME","VARIABLENOTDECLARED"));if(u.isArray(t)||u.isString(t)){for(var c=t.length,f=0;f<c;f++){a.value=f;var p=O(e,r.body);if(p===u.breakResult)break;if(p instanceof u.ReturnResult)return p}return u.voidOperation}if(u.isImmutableArray(t)){for(var f=0;f<t.length();f++){a.value=f;var p=O(e,r.body);if(p===u.breakResult)break;if(p instanceof u.ReturnResult)return p}return u.voidOperation}if(!(t instanceof n||t instanceof o))return u.voidOperation;for(var d=t.keys(),h=0;h<d.length;h++){a.value=d[h];var p=O(e,r.body);if(p===u.breakResult)break;if(p instanceof u.ReturnResult)return p}}function A(e,r){null!==r.init&&O(e,r.init);var t={testResult:!0,lastAction:u.voidOperation};do{C(e,r,t)}while(!0===t.testResult);return t.lastAction instanceof u.ReturnResult?t.lastAction:u.voidOperation}function C(e,r,t){if(null!==r.test){if(t.testResult=O(e,r.test),!1===t.testResult)return;if(!0!==t.testResult)throw new Error(l.nodeErrorMessage(r,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"))}return t.lastAction=O(e,r.body),t.lastAction===u.breakResult?void(t.testResult=!1):t.lastAction instanceof u.ReturnResult?void(t.testResult=!1):void(null!==r.update&&O(e,r.update))}function F(e,r){var t,a=null,i="";if("MemberExpression"===r.argument.type){if(a=O(e,r.argument.object),!0===r.argument.computed?i=O(e,r.argument.property):"Identifier"===r.argument.property.type&&(i=r.argument.property.name),u.isArray(a)){if(!u.isNumber(i))throw new Error("Invalid Parameter");if(i<0&&(i=a.length+i),i<0||i>=a.length)throw new Error("Assignment outside of array bounds");t=u.toNumber(a[i]),a[i]="++"===r.operator?t+1:t-1}else if(a instanceof n){if(!1===u.isString(i))throw new Error("Dictionary accessor must be a string");if(!0!==a.hasField(i))throw new Error("Invalid Parameter");t=u.toNumber(a.field(i)),a.setField(i,"++"===r.operator?t+1:t-1)}else{if(!(a instanceof o))throw u.isImmutableArray(a)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===u.isString(i))throw new Error("Feature accessor must be a string");if(!0!==a.hasField(i))throw new Error("Invalid Parameter");t=u.toNumber(a.field(i)),a.setField(i,"++"===r.operator?t+1:t-1)}return!1===r.prefix?t:"++"===r.operator?t+1:t-1}if(!(a="Identifier"===r.argument.type?r.argument.name.toLowerCase():""))throw new Error("Invalid identifier");if(null!==e.localScope&&void 0!==e.localScope[a])return t=u.toNumber(e.localScope[a].value),e.localScope[a]={value:"++"===r.operator?t+1:t-1,valueset:!0,node:r},!1===r.prefix?t:"++"===r.operator?t+1:t-1;if(void 0!==e.globalScope[a])return t=u.toNumber(e.globalScope[a].value),e.globalScope[a]={value:"++"===r.operator?t+1:t-1,valueset:!0,node:r},!1===r.prefix?t:"++"===r.operator?t+1:t-1;throw new Error("Variable not recognised")}function U(e,r,t,n){switch(r){case"=":return e===u.voidOperation?null:e;case"/=":return u.toNumber(t)/u.toNumber(e);case"*=":return u.toNumber(t)*u.toNumber(e);case"-=":return u.toNumber(t)-u.toNumber(e);case"+=":return u.isString(t)||u.isString(e)?u.toString(t)+u.toString(e):u.toNumber(t)+u.toNumber(e);case"%=":return u.toNumber(t)%u.toNumber(e);default:throw new Error(l.nodeErrorMessage(n,"RUNTIME","OPERATORNOTRECOGNISED"))}}function x(e,r){var t=O(e,r.right),a=null,i="";if("MemberExpression"===r.left.type){if(a=O(e,r.left.object),!0===r.left.computed?i=O(e,r.left.property):"Identifier"===r.left.property.type&&(i=r.left.property.name),u.isArray(a)){if(!u.isNumber(i))throw new Error("Invalid Parameter");if(i<0&&(i=a.length+i),i<0||i>a.length)throw new Error("Assignment outside of array bounds");if(i===a.length){if("="!==r.operator)throw new Error("Invalid Parameter");a[i]=U(t,r.operator,a[i],r)}else a[i]=U(t,r.operator,a[i],r)}else if(a instanceof n){if(!1===u.isString(i))throw new Error("Dictionary accessor must be a string");if(!0===a.hasField(i))a.setField(i,U(t,r.operator,a.field(i),r));else{if("="!==r.operator)throw new Error("Invalid Parameter");a.setField(i,U(t,r.operator,null,r))}}else{if(!(a instanceof o))throw u.isImmutableArray(a)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===u.isString(i))throw new Error("Feature accessor must be a string");if(!0===a.hasField(i))a.setField(i,U(t,r.operator,a.field(i),r));else{if("="!==r.operator)throw new Error("Invalid Parameter");a.setField(i,U(t,r.operator,null,r))}}return u.voidOperation}if(a=r.left.name.toLowerCase(),null!==e.localScope&&void 0!==e.localScope[a])return e.localScope[a]={value:U(t,r.operator,e.localScope[a].value,r),valueset:!0,node:r.right},u.voidOperation;if(void 0!==e.globalScope[a])return e.globalScope[a]={value:U(t,r.operator,e.globalScope[a].value,r),valueset:!0,node:r.right},u.voidOperation;throw new Error("Variable not recognised")}function P(e,r){if("AssignmentExpression"===r.expression.type||"UpdateExpression"===r.expression.type)return O(e,r.expression);if("CallExpression"===r.expression.type){var t=O(e,r.expression);return t===u.voidOperation?u.voidOperation:new u.ImplicitResult(t)}var t=O(e,r.expression);return t===u.voidOperation?u.voidOperation:new u.ImplicitResult(t)}function D(e,r){if("AssignmentExpression"===r.test.type||"UpdateExpression"===r.test.type)throw new Error(l.nodeErrorMessage(r.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));var t=O(e,r.test);if(!0===t)return O(e,r.consequent);if(!1===t)return null!==r.alternate?O(e,r.alternate):u.voidOperation;throw new Error(l.nodeErrorMessage(r,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"))}function L(e,r){for(var t=u.voidOperation,n=0;n<r.body.length;n++)if((t=O(e,r.body[n]))instanceof u.ReturnResult||t===u.breakResult||t===u.continueResult)return t;return t}function k(e,r){if(null===r.argument)return new u.ReturnResult(u.voidOperation);var t=O(e,r.argument);return new u.ReturnResult(t)}function _(e,r){var t=r.id.name.toLowerCase();return e.globalScope[t]={valueset:!0,node:null,value:new a(r,e)},u.voidOperation}function B(e,r){for(var t=0;t<r.declarations.length;t++)O(e,r.declarations[t]);return u.voidOperation}function V(e,r){var t=null===r.init?null:O(e,r.init);if(t===u.voidOperation&&(t=null),"Identifier"!==r.id.type)throw new Error("Can only assign a regular variable");var n=r.id.name.toLowerCase();return null!==e.localScope?e.localScope[n]={value:t,valueset:!0,node:r.init}:e.globalScope[n]={value:t,valueset:!0,node:r.init},u.voidOperation}function Y(e,r,t,o){var a;switch(r=r.toLowerCase()){case"hasz":var u=e.hasZ;return void 0!==u&&u;case"hasm":var c=e.hasM;return void 0!==c&&c;case"spatialreference":var f=e.spatialReference._arcadeCacheId;if(void 0===f){var p=!0;Object.freeze&&Object.isFrozen(e.spatialReference)&&(p=!1),p&&(pe++,e.spatialReference._arcadeCacheId=pe,f=pe)}var d=new n({wkt:e.spatialReference.wkt,wkid:e.spatialReference.wkid});return void 0!==f&&(d._arcadeCacheId="SPREF"+f.toString()),d}switch(e.type){case"extent":switch(r){case"xmin":case"xmax":case"ymin":case"ymax":case"zmin":case"zmax":case"mmin":case"mmax":var h=e[r];return void 0!==h?h:null;case"type":return"Extent"}break;case"polygon":switch(r){case"rings":a=e.getCacheValue("_arcadeCacheId"),void 0===a&&(pe++,a=pe,e.setCacheValue("_arcadeCacheId",a));var g=new i(e.rings,e.spatialReference,!0===e.hasZ,!0===e.hasM,a);return g;case"type":return"Polygon"}break;case"point":switch(r){case"x":case"y":case"z":case"m":return void 0!==e[r]?e[r]:null;case"type":return"Point"}break;case"polyline":switch(r){case"paths":a=e.getCacheValue("_arcadeCacheId"),void 0===a&&(pe++,a=pe,e.setCacheValue("_arcadeCacheId",a));var g=new i(e.paths,e.spatialReference,!0===e.hasZ,!0===e.hasM,a);return g;case"type":return"Polyline"}break;case"multipoint":switch(r){case"points":a=e.getCacheValue("_arcadeCacheId"),void 0===a&&(pe++,a=pe,e.setCacheValue("_arcadeCacheId",a));var g=new s(e.points,e.spatialReference,!0===e.hasZ,!0===e.hasM,a,1);return g;case"type":return"Multipoint"}}throw new Error(l.nodeErrorMessage(o,"RUNTIME","PROPERTYNOTFOUND"))}function G(e,r){try{var t=O(e,r.object);if(null===t)throw new Error(l.nodeErrorMessage(r,"RUNTIME","NOTFOUND"));if(!1===r.computed){if("Identifier"===r.property.type){if(t instanceof n||t instanceof o)return t.field(r.property.name);if(t instanceof m)return Y(t,r.property.name,e,r)}throw new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE"))}var a=O(e,r.property);if(t instanceof n||t instanceof o){if(u.isString(a))return t.field(a);throw new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE"))}if(t instanceof m){if(u.isString(a))return Y(t,a,e,r);throw new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE"))}if(u.isArray(t)){if(u.isNumber(a)&&isFinite(a)&&Math.floor(a)===a){if(a<0&&(a=t.length+a),a>=t.length||a<0)throw new Error(l.nodeErrorMessage(r,"RUNTIME","OUTOFBOUNDS"));return t[a]}throw new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE"))}if(u.isString(t)){if(u.isNumber(a)&&isFinite(a)&&Math.floor(a)===a){if(a<0&&(a=t.length+a),a>=t.length||a<0)throw new Error(l.nodeErrorMessage(r,"RUNTIME","OUTOFBOUNDS"));return t[a]}throw new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE"))}if(u.isImmutableArray(t)){if(u.isNumber(a)&&isFinite(a)&&Math.floor(a)===a){if(a<0&&(a=t.length()+a),a>=t.length()||a<0)throw new Error(l.nodeErrorMessage(r,"RUNTIME","OUTOFBOUNDS"));return t.get(a)}throw new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE"))}throw new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE"))}catch(e){throw e}}function j(e,r){try{var t=O(e,r.argument);if(u.isBoolean(t)){if("!"===r.operator)return!t;if("-"===r.operator)return-1*u.toNumber(t);if("+"===r.operator)return 1*u.toNumber(t);throw new Error(l.nodeErrorMessage(r,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"))}if("-"===r.operator)return-1*u.toNumber(t);if("+"===r.operator)return 1*u.toNumber(t);throw new Error(l.nodeErrorMessage(r,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"))}catch(e){throw e}}function q(e,r){try{for(var t=[],n=0;n<r.elements.length;n++){var o=O(e,r.elements[n]);if(u.isFunctionParameter(o))throw new Error(l.nodeErrorMessage(r,"RUNTIME","FUNCTIONCONTEXTILLEGAL"));o===u.voidOperation?t.push(null):t.push(o)}return t}catch(e){throw e}}function z(e,r){try{var t=[O(e,r.left),O(e,r.right)],n=t[0],o=t[1];switch(r.operator){case"==":return u.equalityTest(n,o);case"!=":return!u.equalityTest(n,o);case"<":case">":case"<=":case">=":return u.greaterThanLessThan(n,o,r.operator);case"+":return u.isString(n)||u.isString(o)?u.toString(n)+u.toString(o):u.toNumber(n)+u.toNumber(o);case"-":return u.toNumber(n)-u.toNumber(o);case"*":return u.toNumber(n)*u.toNumber(o);case"/":return u.toNumber(n)/u.toNumber(o);case"%":return u.toNumber(n)%u.toNumber(o);default:throw new Error(l.nodeErrorMessage(r,"RUNTIME","OPERATORNOTRECOGNISED"))}}catch(e){throw e}}function H(e,r){try{if("AssignmentExpression"===r.left.type||"UpdateExpression"===r.left.type)throw new Error(l.nodeErrorMessage(r.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));if("AssignmentExpression"===r.right.type||"UpdateExpression"===r.right.type)throw new Error(l.nodeErrorMessage(r.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));var t=O(e,r.left);if(u.isBoolean(t))switch(r.operator){case"||":if(!0===t)return t;var n=O(e,r.right);if(u.isBoolean(n))return n;throw new Error(l.nodeErrorMessage(r,"RUNTIME","ONLYORORAND"));case"&&":if(!1===t)return t;var n=O(e,r.right);if(u.isBoolean(n))return n;throw new Error(l.nodeErrorMessage(r,"RUNTIME","ONLYORORAND"));default:throw new Error(l.nodeErrorMessage(r,"RUNTIME","ONLYORORAND"))}throw new Error(l.nodeErrorMessage(r,"RUNTIME","ONLYBOOLEAN"))}catch(e){throw e}}function Z(e,r){var t;try{var n=r.name.toLowerCase();if(null!==e.localScope&&void 0!==e.localScope[n])return t=e.localScope[n],!0===t.valueset?t.value:(t.value=O(e,t.node),t.valueset=!0,t.value);if(void 0!==e.globalScope[n])return t=e.globalScope[n],!0===t.valueset?t.value:(t.value=O(e,t.node),t.valueset=!0,t.value);throw new Error(l.nodeErrorMessage(r,"RUNTIME","VARIABLENOTFOUND"))}catch(e){throw e}}function W(e,r){try{if("Identifier"!==r.callee.type)throw new Error(l.nodeErrorMessage(r,"RUNTIME","ONLYNODESSUPPORTED"));if(null!==e.localScope&&void 0!==e.localScope[r.callee.name.toLowerCase()]){var t=e.localScope[r.callee.name.toLowerCase()];if(t.value instanceof u.NativeFunction)return t.value.fn(e,r);if(t.value instanceof a)return re(e,r,t.value.definition);throw new Error(l.nodeErrorMessage(r,"RUNTIME","NOTAFUNCTION"))}if(void 0!==e.globalScope[r.callee.name.toLowerCase()]){var t=e.globalScope[r.callee.name.toLowerCase()];if(t.value instanceof u.NativeFunction)return t.value.fn(e,r);if(t.value instanceof a)return re(e,r,t.value.definition);throw new Error(l.nodeErrorMessage(r,"RUNTIME","NOTAFUNCTION"))}throw new Error(l.nodeErrorMessage(r,"RUNTIME","NOTFOUND"))}catch(e){throw e}}function K(e){return null==e?"":u.isArray(e)?"Array":u.isImmutableArray(e)?"Array":u.isDate(e)?"Date":u.isString(e)?"String":u.isBoolean(e)?"Boolean":u.isNumber(e)?"Number":e instanceof t?"Attachment":e instanceof n?"Dictionary":e instanceof o?"Feature":e instanceof w?"Point":e instanceof N?"Polygon":e instanceof y?"Polyline":e instanceof E?"Multipoint":e instanceof v?"Extent":u.isFunctionParameter(e)?"Function":u.isFeatureSet(e)?"FeatureSet":u.isFeatureSetCollection(e)?"FeatureSetCollection":e===u.voidOperation?"":"number"==typeof e&&isNaN(e)?"Number":"Unrecognised Type"}function X(e,r,t,n){try{var o=O(e,r.arguments[t]);if(u.equalityTest(o,n))return O(e,r.arguments[t+1]);var a=r.arguments.length-t;return 1===a?O(e,r.arguments[t]):2===a?null:3===a?O(e,r.arguments[t+2]):X(e,r,t+2,n)}catch(e){throw e}}function J(e,r,t,n){try{if(!0===n)return O(e,r.arguments[t+1]);if(3===r.arguments.length-t)return O(e,r.arguments[t+2]);var o=O(e,r.arguments[t+2]);if(!1===u.isBoolean(o))throw new Error("WHEN needs boolean test conditions");return J(e,r,t+2,o)}catch(e){throw e}}function Q(e,r){var t=e.length,n=Math.floor(t/2);return 0===t?[]:1===t?[e[0]]:$(Q(e.slice(0,n),r),Q(e.slice(n,t),r),r)}function $(e,r,t){for(var n=[];e.length>0||r.length>0;)if(e.length>0&&r.length>0){var o=t(e[0],r[0]);isNaN(o)&&(o=0),o<=0?(n.push(e[0]),e=e.slice(1)):(n.push(r[0]),r=r.slice(1))}else e.length>0?(n.push(e[0]),e=e.slice(1)):r.length>0&&(n.push(r[0]),r=r.slice(1));return n}function ee(e,r,t){try{var n=e.body;if(t.length!==e.params.length)throw new Error("Invalid Parameter calls to function.");for(var o=0;o<t.length;o++)r.localScope[e.params[o].name.toLowerCase()]={value:t[o],valueset:!0,node:null};var a=O(r,n);if(a instanceof u.ReturnResult)return a.value;if(a===u.breakResult)throw new Error("Cannot Break from a Function");if(a===u.continueResult)throw new Error("Cannot Continue from a Function");return a instanceof u.ImplicitResult?a.value:a}catch(e){throw e}}function re(e,r,t){return R(e,r,function(r,n,o){var a={spatialReference:e.spatialReference,globalScope:e.globalScope,depthCounter:e.depthCounter+1,console:e.console,lrucache:e.lrucache,localScope:{}};if(a.depthCounter>64)throw new Error("Exceeded maximum function depth");return ee(t,a,o)})}function te(e){return function(){var r={spatialReference:e.context.spatialReference,console:e.context.console,lrucache:e.context.lrucache,localScope:{},depthCounter:e.context.depthCounter+1,globalScope:e.context.globalScope};if(r.depthCounter>64)throw new Error("Exceeded maximum function depth");return ee(e.definition,r,arguments)}}function ne(e,r){var t=new ge;e||(e={}),r||(r={});var a=new n({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});a.immutable=!1,t.textformatting={value:a,valueset:!0,node:null};for(var i in r)t[i]={value:new u.NativeFunction(r[i]),native:!0,valueset:!0,node:null};for(var i in e)e[i]&&"esri.Graphic"===e[i].declaredClass?t[i]={value:o.createFromGraphic(e[i]),valueset:!0,node:null}:t[i]={value:e[i],valueset:!0,node:null};return t}function oe(e){console.log(e)}function ae(e){for(var r={mode:"sync",compiled:!1,functions:{},signatures:[],standardFunction:R,evaluateIdentifier:Z,arcadeCustomFunctionHandler:te},t=0;t<e.length;t++)e[t].registerFunctions(r);for(var n in r.functions)de[n]={value:new u.NativeFunction(r.functions[n]),valueset:!0,node:null},ge.prototype[n]=de[n];for(var t=0;t<r.signatures.length;t++)l.addFunctionDeclaration(r.signatures[t],"async")}function ie(e,r){var t=r.spatialReference;null!==t&&void 0!==t||(t=new I({wkid:102100}));var n=ne(r.vars,r.customfunctions),o={spatialReference:t,globalScope:n,localScope:null,console:r.console?r.console:oe,lrucache:r.lrucache,depthCounter:1},i=O(o,e.body[0].body);if(i instanceof u.ReturnResult&&(i=i.value),i instanceof u.ImplicitResult&&(i=i.value),i===u.voidOperation&&(i=null),i===u.breakResult)throw new Error("Cannot return BREAK");if(i===u.continueResult)throw new Error("Cannot return CONTINUE");if(i instanceof a)throw new Error("Cannot return FUNCTION");if(i instanceof u.NativeFunction)throw new Error("Cannot return FUNCTION");return i}function se(e,r){return void 0===r&&(r=!1),l.findFieldLiterals(e,r)}function ue(e,r){return l.validateScript(e,r,"simple")}function le(e,r){return l.referencesMember(e,r)}function ce(e,r){return l.referencesFunction(e,r)}function fe(e){return l.findFunctionCalls(e,!1)}Object.defineProperty(r,"__esModule",{value:!0});var pe=0,de={};c.registerFunctions(de,R),g.registerFunctions(de,R),d.registerFunctions(de,R),f.registerFunctions(de,R),h.registerFunctions(de,R),p.registerFunctions(de,R),de.typeof=function(e,r){return R(e,r,function(e,r,t){u.pcCheck(t,1,1);var n=K(t[0]);if("Unrecognised Type"===n)throw new Error("Unrecognised Type");return n})},de.iif=function(e,r){try{u.pcCheck(null===r.arguments?[]:r.arguments,3,3);var t=O(e,r.arguments[0]);if(!1===u.isBoolean(t))throw new Error("IF Function must have a boolean test condition");var n=O(e,r.arguments[1]),o=O(e,r.arguments[2]);return!0===t?n:o}catch(e){throw e}},de.decode=function(e,r){try{if(r.arguments.length<2)throw new Error("Missing Parameters");if(2===r.arguments.length)return O(e,r.arguments[1]);if((r.arguments.length-1)%2==0)throw new Error("Must have a default value result.");return X(e,r,1,O(e,r.arguments[0]))}catch(e){throw e}},de.when=function(e,r){try{if(r.arguments.length<3)throw new Error("Missing Parameters");if(r.arguments.length%2==0)throw new Error("Must have a default value result.");var t=O(e,r.arguments[0]);if(!1===u.isBoolean(t))throw new Error("WHEN needs boolean test conditions");return J(e,r,0,t)}catch(e){throw e}},de.top=function(e,r){return R(e,r,function(e,r,t){if(u.pcCheck(t,2,2),u.isArray(t[0]))return u.toNumber(t[1])>=t[0].length?t[0].slice(0):t[0].slice(0,u.toNumber(t[1]));if(u.isImmutableArray(t[0]))return u.toNumber(t[1])>=t[0].length()?t[0].slice(0):t[0].slice(0,u.toNumber(t[1]));throw new Error("Top cannot accept this parameter type")})},de.first=function(e,r){return R(e,r,function(e,r,t){return u.pcCheck(t,1,1),u.isArray(t[0])?0===t[0].length?null:t[0][0]:u.isImmutableArray(t[0])?0===t[0].length()?null:t[0].get(0):null})},de.sort=function(e,r){return R(e,r,function(e,r,t){u.pcCheck(t,1,2);var n=t[0];if(u.isImmutableArray(n)&&(n=n.toArray()),!1===u.isArray(n))throw new Error("Illegal Argument");if(t.length>1){if(!1===u.isFunctionParameter(t[1]))throw new Error("Illegal Argument");var o=n,a=te(t[1]);return o=Q(o,function(e,r){return a(e,r)})}var o=n;if(0===o.length)return[];for(var i={},s=0;s<o.length;s++){var l=K(o[s]);""!==l&&(i[l]=!0)}if(!0===i.Array||!0===i.Dictionary||!0===i.Feature||!0===i.Point||!0===i.Polygon||!0===i.Polyline||!0===i.Multipoint||!0===i.Extent||!0===i.Function)return o.slice(0);var c=0,f="";for(var p in i)c++,f=p;return o=c>1||"String"===f?Q(o,function(e,r){if(null===e||void 0===e||e===u.voidOperation)return null===r||void 0===r||r===u.voidOperation?0:1;if(null===r||void 0===r||r===u.voidOperation)return-1;var t=u.toString(e),n=u.toString(r);return t<n?-1:t===n?0:1}):"Number"===f?Q(o,function(e,r){return e-r}):"Boolean"===f?Q(o,function(e,r){return e===r?0:r?-1:1}):"Date"===f?Q(o,function(e,r){return r-e}):o.slice(0)})};for(var he in de)de[he]={value:new u.NativeFunction(de[he]),valueset:!0,node:null};var ge=function(){};ge.prototype=de,ge.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},ge.prototype.pi={value:Math.PI,valueset:!0,node:null};var ve={fixSpatialReference:u.fixSpatialReference,parseArguments:b,standardFunction:R};r.functionHelper=ve,r.extend=ae,r.executeScript=ie,r.extractFieldLiterals=se,r.validateScript=ue,r.referencesMember=le,r.referencesFunction=ce,r.findFunctionCalls=fe});