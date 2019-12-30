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

/*
* Copyright (c) 2012 Brandon Jones, Colin MacKenzie IV
*
* This software is provided 'as-is', without any express or implied
* warranty. In no event will the authors be held liable for any damages
* arising from the use of this software.
*
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
*
* 1. The origin of this software must not be misrepresented; you must not
* claim that you wrote the original software. If you use this software
* in a product, an acknowledgment in the product documentation would be
* appreciated but is not required.
*
* 2. Altered source versions must be plainly marked as such, and must not
* be misrepresented as being the original software.
*
* 3. This notice may not be removed or altered from any source
* distribution.
*/

define([],function(){var t={};return function(t,r){r(t,!0),r(t,!1)}(t,function(t,r){"use strict";var n={};!function(){if("undefined"!=typeof Float32Array){var t=new Float32Array(1),r=new Int32Array(t.buffer);n.invsqrt=function(n){var e=.5*n;t[0]=n;r[0]=1597463007-(r[0]>>1);var u=t[0];return u*(1.5-e*u*u)}}else n.invsqrt=function(t){return 1/Math.sqrt(t)}}();var e=Array;"undefined"!=typeof Float32Array&&(e=r?Float32Array:Array);var u={};u.create=function(t){var r=new e(3);return t?(r[0]=t[0],r[1]=t[1],r[2]=t[2]):r[0]=r[1]=r[2]=0,r},u.createFrom=function(t,r,n){var u=new e(3);return u[0]=t,u[1]=r,u[2]=n,u},u.set=function(t,r){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r},u.set3=function(t,r,n,e){return e[0]=t,e[1]=r,e[2]=n,e},u.add=function(t,r,n){return n&&t!==n?(n[0]=t[0]+r[0],n[1]=t[1]+r[1],n[2]=t[2]+r[2],n):(t[0]+=r[0],t[1]+=r[1],t[2]+=r[2],t)},u.subtract=function(t,r,n){return n&&t!==n?(n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],n):(t[0]-=r[0],t[1]-=r[1],t[2]-=r[2],t)},u.multiply=function(t,r,n){return n&&t!==n?(n[0]=t[0]*r[0],n[1]=t[1]*r[1],n[2]=t[2]*r[2],n):(t[0]*=r[0],t[1]*=r[1],t[2]*=r[2],t)},u.max=function(t,r,n){return n[0]=Math.max(t[0],r[0]),n[1]=Math.max(t[1],r[1]),n[2]=Math.max(t[2],r[2]),n},u.min=function(t,r,n){return n[0]=Math.min(t[0],r[0]),n[1]=Math.min(t[1],r[1]),n[2]=Math.min(t[2],r[2]),n},u.negate=function(t,r){return r||(r=t),r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r},u.scale=function(t,r,n){return n&&t!==n?(n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n):(t[0]*=r,t[1]*=r,t[2]*=r,t)},u.normalize=function(t,r){r||(r=t);var n=t[0],e=t[1],u=t[2],a=Math.sqrt(n*n+e*e+u*u);return a?1===a?(r[0]=n,r[1]=e,r[2]=u,r):(a=1/a,r[0]=n*a,r[1]=e*a,r[2]=u*a,r):(r[0]=0,r[1]=0,r[2]=0,r)},u.cross=function(t,r,n){n||(n=t);var e=t[0],u=t[1],a=t[2],i=r[0],o=r[1],c=r[2];return n[0]=u*c-a*o,n[1]=a*i-e*c,n[2]=e*o-u*i,n},u.length=function(t){var r=t[0],n=t[1],e=t[2];return Math.sqrt(r*r+n*n+e*e)},u.length2=function(t){var r=t[0],n=t[1],e=t[2];return r*r+n*n+e*e},u.dot=function(t,r){return t[0]*r[0]+t[1]*r[1]+t[2]*r[2]},u.direction=function(t,r,n){n||(n=t);var e=t[0]-r[0],u=t[1]-r[1],a=t[2]-r[2],i=Math.sqrt(e*e+u*u+a*a);return i?(i=1/i,n[0]=e*i,n[1]=u*i,n[2]=a*i,n):(n[0]=0,n[1]=0,n[2]=0,n)},u.lerp=function(t,r,n,e){return e||(e=t),e[0]=t[0]+n*(r[0]-t[0]),e[1]=t[1]+n*(r[1]-t[1]),e[2]=t[2]+n*(r[2]-t[2]),e},u.dist=function(t,r){var n=r[0]-t[0],e=r[1]-t[1],u=r[2]-t[2];return Math.sqrt(n*n+e*e+u*u)},u.dist2=function(t,r){var n=r[0]-t[0],e=r[1]-t[1],u=r[2]-t[2];return n*n+e*e+u*u};var a=null,i=new e(4);u.unproject=function(t,r,n,e,u){u||(u=t),a||(a=M.create());var o=a,c=i;return c[0]=2*(t[0]-e[0])/e[2]-1,c[1]=2*(t[1]-e[1])/e[3]-1,c[2]=2*t[2]-1,c[3]=1,M.multiply(n,r,o),M.inverse(o)?(M.multiplyVec4(o,c),0===c[3]?null:(u[0]=c[0]/c[3],u[1]=c[1]/c[3],u[2]=c[2]/c[3],u)):null};var o=u.createFrom(1,0,0),c=u.createFrom(0,1,0),f=u.createFrom(0,0,1);u.rotationTo=function(t,r,n){n||(n=h.create());var e=u.dot(t,r),a=u.create();if(e>=1)h.set(m,n);else if(e<1e-6-1)u.cross(o,t,a),a.length<1e-6&&u.cross(c,t,a),a.length<1e-6&&u.cross(f,t,a),u.normalize(a),h.fromAxisAngle(a,Math.PI,n);else{var i=Math.sqrt(2*(1+e)),s=1/i;u.cross(t,r,a),n[0]=a[0]*s,n[1]=a[1]*s,n[2]=a[2]*s,n[3]=.5*i,h.normalize(n)}return n[3]>1?n[3]=1:n[3]<-1&&(n[3]=-1),n};var s=u.create(),v=u.create();u.project=function(t,r,n,e){e||(e=t),u.direction(r,n,s),u.subtract(t,r,v);var a=u.dot(s,v);u.scale(s,a,e),u.add(e,r,e)},u.str=function(t){return"["+t[0]+", "+t[1]+", "+t[2]+"]"};var l={};l.create=function(t){var r=new e(9);return t?(r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8]):r[0]=r[1]=r[2]=r[3]=r[4]=r[5]=r[6]=r[7]=r[8]=0,r},l.createFrom=function(t,r,n,u,a,i,o,c,f){var s=new e(9);return s[0]=t,s[1]=r,s[2]=n,s[3]=u,s[4]=a,s[5]=i,s[6]=o,s[7]=c,s[8]=f,s},l.determinant=function(t){var r=t[0],n=t[1],e=t[2],u=t[3],a=t[4],i=t[5],o=t[6],c=t[7],f=t[8];return r*(f*a-i*c)+n*(-f*u+i*o)+e*(c*u-a*o)},l.inverse=function(t,r){var n,e=t[0],u=t[1],a=t[2],i=t[3],o=t[4],c=t[5],f=t[6],s=t[7],v=t[8],M=v*o-c*s,h=-v*i+c*f,m=s*i-o*f,d=e*M+u*h+a*m;return d?(n=1/d,r||(r=l.create()),r[0]=M*n,r[1]=(-v*u+a*s)*n,r[2]=(c*u-a*o)*n,r[3]=h*n,r[4]=(v*e-a*f)*n,r[5]=(-c*e+a*i)*n,r[6]=m*n,r[7]=(-s*e+u*f)*n,r[8]=(o*e-u*i)*n,r):null},l.multiply=function(t,r,n){n||(n=t);var e=t[0],u=t[1],a=t[2],i=t[3],o=t[4],c=t[5],f=t[6],s=t[7],v=t[8],l=r[0],M=r[1],h=r[2],m=r[3],d=r[4],y=r[5],p=r[6],q=r[7],w=r[8];return n[0]=l*e+M*i+h*f,n[1]=l*u+M*o+h*s,n[2]=l*a+M*c+h*v,n[3]=m*e+d*i+y*f,n[4]=m*u+d*o+y*s,n[5]=m*a+d*c+y*v,n[6]=p*e+q*i+w*f,n[7]=p*u+q*o+w*s,n[8]=p*a+q*c+w*v,n},l.multiplyVec2=function(t,r,n){n||(n=r);var e=r[0],u=r[1];return n[0]=e*t[0]+u*t[3]+t[6],n[1]=e*t[1]+u*t[4]+t[7],n},l.multiplyVec3=function(t,r,n){n||(n=r);var e=r[0],u=r[1],a=r[2];return n[0]=e*t[0]+u*t[3]+a*t[6],n[1]=e*t[1]+u*t[4]+a*t[7],n[2]=e*t[2]+u*t[5]+a*t[8],n},l.set=function(t,r){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r},l.identity=function(t){return t||(t=l.create()),t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1,t},l.transpose=function(t,r){if(!r||t===r){var n=t[1],e=t[2],u=t[5];return t[1]=t[3],t[2]=t[6],t[3]=n,t[5]=t[7],t[6]=e,t[7]=u,t}return r[0]=t[0],r[1]=t[3],r[2]=t[6],r[3]=t[1],r[4]=t[4],r[5]=t[7],r[6]=t[2],r[7]=t[5],r[8]=t[8],r},l.toMat4=function(t,r){return r||(r=M.create()),r[15]=1,r[14]=0,r[13]=0,r[12]=0,r[11]=0,r[10]=t[8],r[9]=t[7],r[8]=t[6],r[7]=0,r[6]=t[5],r[5]=t[4],r[4]=t[3],r[3]=0,r[2]=t[2],r[1]=t[1],r[0]=t[0],r},l.str=function(t){return"["+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+"]"};var M={};M.create=function(t){var r=new e(16);return 4===arguments.length?(r[0]=arguments[0],r[1]=arguments[1],r[2]=arguments[2],r[3]=arguments[3],r[4]=arguments[4],r[5]=arguments[5],r[6]=arguments[6],r[7]=arguments[7],r[8]=arguments[8],r[9]=arguments[9],r[10]=arguments[10],r[11]=arguments[11],r[12]=arguments[12],r[13]=arguments[13],r[14]=arguments[14],r[15]=arguments[15]):t&&(r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15]),r},M.createFrom=function(t,r,n,u,a,i,o,c,f,s,v,l,M,h,m,d){var y=new e(16);return y[0]=t,y[1]=r,y[2]=n,y[3]=u,y[4]=a,y[5]=i,y[6]=o,y[7]=c,y[8]=f,y[9]=s,y[10]=v,y[11]=l,y[12]=M,y[13]=h,y[14]=m,y[15]=d,y},M.createFromMatrixRowMajor=function(t){var r=new e(16);return r[0]=t[0],r[4]=t[1],r[8]=t[2],r[12]=t[3],r[1]=t[4],r[5]=t[5],r[9]=t[6],r[13]=t[7],r[2]=t[8],r[6]=t[9],r[10]=t[10],r[14]=t[11],r[3]=t[12],r[7]=t[13],r[11]=t[14],r[15]=t[15],r},M.createFromMatrix=function(t){var r=new e(16);return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r},M.set=function(t,r){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=t[12],r[13]=t[13],r[14]=t[14],r[15]=t[15],r},M.setRowMajor=function(t,r){return r[0]=t[0],r[4]=t[1],r[8]=t[2],r[12]=t[3],r[1]=t[4],r[5]=t[5],r[9]=t[6],r[13]=t[7],r[2]=t[8],r[6]=t[9],r[10]=t[10],r[14]=t[11],r[3]=t[12],r[7]=t[13],r[11]=t[14],r[15]=t[15],r},M.identity=function(t){return t||(t=M.create()),t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=1,t[6]=0,t[7]=0,t[8]=0,t[9]=0,t[10]=1,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,t},M.transpose=function(t,r){if(!r||t===r){var n=t[1],e=t[2],u=t[3],a=t[6],i=t[7],o=t[11];return t[1]=t[4],t[2]=t[8],t[3]=t[12],t[4]=n,t[6]=t[9],t[7]=t[13],t[8]=e,t[9]=a,t[11]=t[14],t[12]=u,t[13]=i,t[14]=o,t}return r[0]=t[0],r[1]=t[4],r[2]=t[8],r[3]=t[12],r[4]=t[1],r[5]=t[5],r[6]=t[9],r[7]=t[13],r[8]=t[2],r[9]=t[6],r[10]=t[10],r[11]=t[14],r[12]=t[3],r[13]=t[7],r[14]=t[11],r[15]=t[15],r},M.determinant=function(t){var r=t[0],n=t[1],e=t[2],u=t[3],a=t[4],i=t[5],o=t[6],c=t[7],f=t[8],s=t[9],v=t[10],l=t[11],M=t[12],h=t[13],m=t[14],d=t[15];return M*s*o*u-f*h*o*u-M*i*v*u+a*h*v*u+f*i*m*u-a*s*m*u-M*s*e*c+f*h*e*c+M*n*v*c-r*h*v*c-f*n*m*c+r*s*m*c+M*i*e*l-a*h*e*l-M*n*o*l+r*h*o*l+a*n*m*l-r*i*m*l-f*i*e*d+a*s*e*d+f*n*o*d-r*s*o*d-a*n*v*d+r*i*v*d},M.inverse=function(t,r){r||(r=t);var n,e=t[0],u=t[1],a=t[2],i=t[3],o=t[4],c=t[5],f=t[6],s=t[7],v=t[8],l=t[9],M=t[10],h=t[11],m=t[12],d=t[13],y=t[14],p=t[15],q=e*c-u*o,w=e*f-a*o,x=e*s-i*o,F=u*f-a*c,g=u*s-i*c,A=a*s-i*f,b=v*d-l*m,R=v*y-M*m,V=v*p-h*m,j=l*y-M*d,z=l*p-h*d,I=M*p-h*y,N=q*I-w*z+x*j+F*V-g*R+A*b;return N?(n=1/N,r[0]=(c*I-f*z+s*j)*n,r[1]=(-u*I+a*z-i*j)*n,r[2]=(d*A-y*g+p*F)*n,r[3]=(-l*A+M*g-h*F)*n,r[4]=(-o*I+f*V-s*R)*n,r[5]=(e*I-a*V+i*R)*n,r[6]=(-m*A+y*x-p*w)*n,r[7]=(v*A-M*x+h*w)*n,r[8]=(o*z-c*V+s*b)*n,r[9]=(-e*z+u*V-i*b)*n,r[10]=(m*g-d*x+p*q)*n,r[11]=(-v*g+l*x-h*q)*n,r[12]=(-o*j+c*R-f*b)*n,r[13]=(e*j-u*R+a*b)*n,r[14]=(-m*F+d*w-y*q)*n,r[15]=(v*F-l*w+M*q)*n,r):null},M.toRotationMat=function(t,r){return r||(r=M.create()),r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r[4]=t[4],r[5]=t[5],r[6]=t[6],r[7]=t[7],r[8]=t[8],r[9]=t[9],r[10]=t[10],r[11]=t[11],r[12]=0,r[13]=0,r[14]=0,r[15]=1,r},M.toMat3=function(t,r){return r||(r=l.create()),r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[4],r[4]=t[5],r[5]=t[6],r[6]=t[8],r[7]=t[9],r[8]=t[10],r},M.toInverseMat3=function(t,r){var n,e=t[0],u=t[1],a=t[2],i=t[4],o=t[5],c=t[6],f=t[8],s=t[9],v=t[10],M=v*o-c*s,h=-v*i+c*f,m=s*i-o*f,d=e*M+u*h+a*m;return d?(n=1/d,r||(r=l.create()),r[0]=M*n,r[1]=(-v*u+a*s)*n,r[2]=(c*u-a*o)*n,r[3]=h*n,r[4]=(v*e-a*f)*n,r[5]=(-c*e+a*i)*n,r[6]=m*n,r[7]=(-s*e+u*f)*n,r[8]=(o*e-u*i)*n,r):null},M.multiply=function(t,r,n){n||(n=t);var e=t[0],u=t[1],a=t[2],i=t[3],o=t[4],c=t[5],f=t[6],s=t[7],v=t[8],l=t[9],M=t[10],h=t[11],m=t[12],d=t[13],y=t[14],p=t[15],q=r[0],w=r[1],x=r[2],F=r[3],g=r[4],A=r[5],b=r[6],R=r[7],V=r[8],j=r[9],z=r[10],I=r[11],N=r[12],P=r[13],T=r[14],_=r[15];return n[0]=q*e+w*o+x*v+F*m,n[1]=q*u+w*c+x*l+F*d,n[2]=q*a+w*f+x*M+F*y,n[3]=q*i+w*s+x*h+F*p,n[4]=g*e+A*o+b*v+R*m,n[5]=g*u+A*c+b*l+R*d,n[6]=g*a+A*f+b*M+R*y,n[7]=g*i+A*s+b*h+R*p,n[8]=V*e+j*o+z*v+I*m,n[9]=V*u+j*c+z*l+I*d,n[10]=V*a+j*f+z*M+I*y,n[11]=V*i+j*s+z*h+I*p,n[12]=N*e+P*o+T*v+_*m,n[13]=N*u+P*c+T*l+_*d,n[14]=N*a+P*f+T*M+_*y,n[15]=N*i+P*s+T*h+_*p,n},M.multiplyVec3=function(t,r,n){n||(n=r);var e=r[0],u=r[1],a=r[2];return n[0]=t[0]*e+t[4]*u+t[8]*a+t[12],n[1]=t[1]*e+t[5]*u+t[9]*a+t[13],n[2]=t[2]*e+t[6]*u+t[10]*a+t[14],n},M.multiplyVec4=function(t,r,n){n||(n=r);var e=r[0],u=r[1],a=r[2],i=r[3];return n[0]=t[0]*e+t[4]*u+t[8]*a+t[12]*i,n[1]=t[1]*e+t[5]*u+t[9]*a+t[13]*i,n[2]=t[2]*e+t[6]*u+t[10]*a+t[14]*i,n[3]=t[3]*e+t[7]*u+t[11]*a+t[15]*i,n},M.translate=function(t,r,n){var e,u,a,i,o,c,f,s,v,l,M,h,m=r[0],d=r[1],y=r[2];return n&&t!==n?(e=t[0],u=t[1],a=t[2],i=t[3],o=t[4],c=t[5],f=t[6],s=t[7],v=t[8],l=t[9],M=t[10],h=t[11],n[0]=e,n[1]=u,n[2]=a,n[3]=i,n[4]=o,n[5]=c,n[6]=f,n[7]=s,n[8]=v,n[9]=l,n[10]=M,n[11]=h,n[12]=e*m+o*d+v*y+t[12],n[13]=u*m+c*d+l*y+t[13],n[14]=a*m+f*d+M*y+t[14],n[15]=i*m+s*d+h*y+t[15],n):(t[12]=t[0]*m+t[4]*d+t[8]*y+t[12],t[13]=t[1]*m+t[5]*d+t[9]*y+t[13],t[14]=t[2]*m+t[6]*d+t[10]*y+t[14],t[15]=t[3]*m+t[7]*d+t[11]*y+t[15],t)},M.scale=function(t,r,n){var e=r[0],u=r[1],a=r[2];return n&&t!==n?(n[0]=t[0]*e,n[1]=t[1]*e,n[2]=t[2]*e,n[3]=t[3]*e,n[4]=t[4]*u,n[5]=t[5]*u,n[6]=t[6]*u,n[7]=t[7]*u,n[8]=t[8]*a,n[9]=t[9]*a,n[10]=t[10]*a,n[11]=t[11]*a,n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15],n):(t[0]*=e,t[1]*=e,t[2]*=e,t[3]*=e,t[4]*=u,t[5]*=u,t[6]*=u,t[7]*=u,t[8]*=a,t[9]*=a,t[10]*=a,t[11]*=a,t)},M.maxScale=function(t){var r=Math.sqrt(t[0]*t[0]+t[4]*t[4]+t[8]*t[8]),n=Math.sqrt(t[1]*t[1]+t[5]*t[5]+t[9]*t[9]),e=Math.sqrt(t[2]*t[2]+t[6]*t[6]+t[10]*t[10]);return Math.max(Math.max(r,n),e)},M.rotate=function(t,r,n,e){var u,a,i,o,c,f,s,v,l,M,h,m,d,y,p,q,w,x,F,g,A,b,R,V,j=n[0],z=n[1],I=n[2],N=Math.sqrt(j*j+z*z+I*I);return N?(1!==N&&(N=1/N,j*=N,z*=N,I*=N),u=Math.sin(r),a=Math.cos(r),i=1-a,o=t[0],c=t[1],f=t[2],s=t[3],v=t[4],l=t[5],M=t[6],h=t[7],m=t[8],d=t[9],y=t[10],p=t[11],q=j*j*i+a,w=z*j*i+I*u,x=I*j*i-z*u,F=j*z*i-I*u,g=z*z*i+a,A=I*z*i+j*u,b=j*I*i+z*u,R=z*I*i-j*u,V=I*I*i+a,e?t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]):e=t,e[0]=o*q+v*w+m*x,e[1]=c*q+l*w+d*x,e[2]=f*q+M*w+y*x,e[3]=s*q+h*w+p*x,e[4]=o*F+v*g+m*A,e[5]=c*F+l*g+d*A,e[6]=f*F+M*g+y*A,e[7]=s*F+h*g+p*A,e[8]=o*b+v*R+m*V,e[9]=c*b+l*R+d*V,e[10]=f*b+M*R+y*V,e[11]=s*b+h*R+p*V,e):null},M.rotateX=function(t,r,n){var e=Math.sin(r),u=Math.cos(r),a=t[4],i=t[5],o=t[6],c=t[7],f=t[8],s=t[9],v=t[10],l=t[11];return n?t!==n&&(n[0]=t[0],n[1]=t[1],n[2]=t[2],n[3]=t[3],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]):n=t,n[4]=a*u+f*e,n[5]=i*u+s*e,n[6]=o*u+v*e,n[7]=c*u+l*e,n[8]=a*-e+f*u,n[9]=i*-e+s*u,n[10]=o*-e+v*u,n[11]=c*-e+l*u,n},M.rotateY=function(t,r,n){var e=Math.sin(r),u=Math.cos(r),a=t[0],i=t[1],o=t[2],c=t[3],f=t[8],s=t[9],v=t[10],l=t[11];return n?t!==n&&(n[4]=t[4],n[5]=t[5],n[6]=t[6],n[7]=t[7],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]):n=t,n[0]=a*u+f*-e,n[1]=i*u+s*-e,n[2]=o*u+v*-e,n[3]=c*u+l*-e,n[8]=a*e+f*u,n[9]=i*e+s*u,n[10]=o*e+v*u,n[11]=c*e+l*u,n},M.rotateZ=function(t,r,n){var e=Math.sin(r),u=Math.cos(r),a=t[0],i=t[1],o=t[2],c=t[3],f=t[4],s=t[5],v=t[6],l=t[7];return n?t!==n&&(n[8]=t[8],n[9]=t[9],n[10]=t[10],n[11]=t[11],n[12]=t[12],n[13]=t[13],n[14]=t[14],n[15]=t[15]):n=t,n[0]=a*u+f*e,n[1]=i*u+s*e,n[2]=o*u+v*e,n[3]=c*u+l*e,n[4]=a*-e+f*u,n[5]=i*-e+s*u,n[6]=o*-e+v*u,n[7]=c*-e+l*u,n},M.frustum=function(t,r,n,e,u,a,i){i||(i=M.create());var o=r-t,c=e-n,f=a-u;return i[0]=2*u/o,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2*u/c,i[6]=0,i[7]=0,i[8]=(r+t)/o,i[9]=(e+n)/c,i[10]=-(a+u)/f,i[11]=-1,i[12]=0,i[13]=0,i[14]=-a*u*2/f,i[15]=0,i},M.perspective=function(t,r,n,e,u){var a=n*Math.tan(t*Math.PI/360),i=a*r;return M.frustum(-i,i,-a,a,n,e,u)},M.ortho=function(t,r,n,e,u,a,i){i||(i=M.create());var o=r-t,c=e-n,f=a-u;return i[0]=2/o,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=2/c,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=-2/f,i[11]=0,i[12]=-(t+r)/o,i[13]=-(e+n)/c,i[14]=-(a+u)/f,i[15]=1,i},M.lookAt=function(t,r,n,e){e||(e=M.create());var u,a,i,o,c,f,s,v,l,h,m=t[0],d=t[1],y=t[2],p=n[0],q=n[1],w=n[2],x=r[0],F=r[1],g=r[2];return m===x&&d===F&&y===g?M.identity(e):(s=m-x,v=d-F,l=y-g,h=1/Math.sqrt(s*s+v*v+l*l),s*=h,v*=h,l*=h,u=q*l-w*v,a=w*s-p*l,i=p*v-q*s,h=Math.sqrt(u*u+a*a+i*i),h?(h=1/h,u*=h,a*=h,i*=h):(u=0,a=0,i=0),o=v*i-l*a,c=l*u-s*i,f=s*a-v*u,h=Math.sqrt(o*o+c*c+f*f),h?(h=1/h,o*=h,c*=h,f*=h):(o=0,c=0,f=0),e[0]=u,e[1]=o,e[2]=s,e[3]=0,e[4]=a,e[5]=c,e[6]=v,e[7]=0,e[8]=i,e[9]=f,e[10]=l,e[11]=0,e[12]=-(u*m+a*d+i*y),e[13]=-(o*m+c*d+f*y),e[14]=-(s*m+v*d+l*y),e[15]=1,e)},M.fromRotationTranslation=function(t,r,n){n||(n=M.create());var e=t[0],u=t[1],a=t[2],i=t[3],o=e+e,c=u+u,f=a+a,s=e*o,v=e*c,l=e*f,h=u*c,m=u*f,d=a*f,y=i*o,p=i*c,q=i*f;return n[0]=1-(h+d),n[1]=v+q,n[2]=l-p,n[3]=0,n[4]=v-q,n[5]=1-(s+d),n[6]=m+y,n[7]=0,n[8]=l+p,n[9]=m-y,n[10]=1-(s+h),n[11]=0,n[12]=r[0],n[13]=r[1],n[14]=r[2],n[15]=1,n},M.str=function(t){return"["+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+", "+t[6]+", "+t[7]+", "+t[8]+", "+t[9]+", "+t[10]+", "+t[11]+", "+t[12]+", "+t[13]+", "+t[14]+", "+t[15]+"]"};var h={};h.create=function(t){var r=new e(4);return t?(r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3]):r[0]=r[1]=r[2]=r[3]=0,r},h.createFrom=function(t,r,n,u){var a=new e(4);return a[0]=t,a[1]=r,a[2]=n,a[3]=u,a},h.set=function(t,r){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r},h.identity=function(t){return t||(t=h.create()),t[0]=0,t[1]=0,t[2]=0,t[3]=1,t};var m=h.identity();h.calculateW=function(t,r){var n=t[0],e=t[1],u=t[2];return r&&t!==r?(r[0]=n,r[1]=e,r[2]=u,r[3]=-Math.sqrt(Math.abs(1-n*n-e*e-u*u)),r):(t[3]=-Math.sqrt(Math.abs(1-n*n-e*e-u*u)),t)},h.dot=function(t,r){return t[0]*r[0]+t[1]*r[1]+t[2]*r[2]+t[3]*r[3]},h.inverse=function(t,r){var n=t[0],e=t[1],u=t[2],a=t[3],i=n*n+e*e+u*u+a*a,o=i?1/i:0;return r&&t!==r?(r[0]=-t[0]*o,r[1]=-t[1]*o,r[2]=-t[2]*o,r[3]=t[3]*o,r):(t[0]*=-o,t[1]*=-o,t[2]*=-o,t[3]*=o,t)},h.conjugate=function(t,r){return r&&t!==r?(r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=t[3],r):(t[0]*=-1,t[1]*=-1,t[2]*=-1,t)},h.length=function(t){var r=t[0],n=t[1],e=t[2],u=t[3];return Math.sqrt(r*r+n*n+e*e+u*u)},h.normalize=function(t,r){r||(r=t);var n=t[0],e=t[1],u=t[2],a=t[3],i=Math.sqrt(n*n+e*e+u*u+a*a);return 0===i?(r[0]=0,r[1]=0,r[2]=0,r[3]=0,r):(i=1/i,r[0]=n*i,r[1]=e*i,r[2]=u*i,r[3]=a*i,r)},h.add=function(t,r,n){return n&&t!==n?(n[0]=t[0]+r[0],n[1]=t[1]+r[1],n[2]=t[2]+r[2],n[3]=t[3]+r[3],n):(t[0]+=r[0],t[1]+=r[1],t[2]+=r[2],t[3]+=r[3],t)},h.multiply=function(t,r,n){n||(n=t);var e=t[0],u=t[1],a=t[2],i=t[3],o=r[0],c=r[1],f=r[2],s=r[3];return n[0]=e*s+i*o+u*f-a*c,n[1]=u*s+i*c+a*o-e*f,n[2]=a*s+i*f+e*c-u*o,n[3]=i*s-e*o-u*c-a*f,n},h.multiplyVec3=function(t,r,n){n||(n=r);var e=r[0],u=r[1],a=r[2],i=t[0],o=t[1],c=t[2],f=t[3],s=f*e+o*a-c*u,v=f*u+c*e-i*a,l=f*a+i*u-o*e,M=-i*e-o*u-c*a;return n[0]=s*f+M*-i+v*-c-l*-o,n[1]=v*f+M*-o+l*-i-s*-c,n[2]=l*f+M*-c+s*-o-v*-i,n},h.scale=function(t,r,n){return n&&t!==n?(n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n[3]=t[3]*r,n):(t[0]*=r,t[1]*=r,t[2]*=r,t[3]*=r,t)},h.toMat3=function(t,r){r||(r=l.create());var n=t[0],e=t[1],u=t[2],a=t[3],i=n+n,o=e+e,c=u+u,f=n*i,s=n*o,v=n*c,M=e*o,h=e*c,m=u*c,d=a*i,y=a*o,p=a*c;return r[0]=1-(M+m),r[1]=s+p,r[2]=v-y,r[3]=s-p,r[4]=1-(f+m),r[5]=h+d,r[6]=v+y,r[7]=h-d,r[8]=1-(f+M),r},h.toMat4=function(t,r){r||(r=M.create());var n=t[0],e=t[1],u=t[2],a=t[3],i=n+n,o=e+e,c=u+u,f=n*i,s=n*o,v=n*c,l=e*o,h=e*c,m=u*c,d=a*i,y=a*o,p=a*c;return r[0]=1-(l+m),r[1]=s+p,r[2]=v-y,r[3]=0,r[4]=s-p,r[5]=1-(f+m),r[6]=h+d,r[7]=0,r[8]=v+y,r[9]=h-d,r[10]=1-(f+l),r[11]=0,r[12]=0,r[13]=0,r[14]=0,r[15]=1,r},h.slerp=function(t,r,n,e){e||(e=t);var u,a,i,o,c=t[0]*r[0]+t[1]*r[1]+t[2]*r[2]+t[3]*r[3];return Math.abs(c)>=1?(e!==t&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3]),e):(u=Math.acos(c),a=Math.sqrt(1-c*c),Math.abs(a)<.001?(e[0]=.5*t[0]+.5*r[0],e[1]=.5*t[1]+.5*r[1],e[2]=.5*t[2]+.5*r[2],e[3]=.5*t[3]+.5*r[3],e):(i=Math.sin((1-n)*u)/a,o=Math.sin(n*u)/a,e[0]=t[0]*i+r[0]*o,e[1]=t[1]*i+r[1]*o,e[2]=t[2]*i+r[2]*o,e[3]=t[3]*i+r[3]*o,e))},h.fromRotationMatrix=function(t,r){r||(r=h.create());var n,e=t[0]+t[4]+t[8];if(e>0)n=Math.sqrt(e+1),r[3]=.5*n,n=.5/n,r[0]=(t[7]-t[5])*n,r[1]=(t[2]-t[6])*n,r[2]=(t[3]-t[1])*n;else{var u=h.fromRotationMatrix.s_iNext=h.fromRotationMatrix.s_iNext||[1,2,0],a=0;t[4]>t[0]&&(a=1),t[8]>t[3*a+a]&&(a=2);var i=u[a],o=u[i];n=Math.sqrt(t[3*a+a]-t[3*i+i]-t[3*o+o]+1),r[a]=.5*n,n=.5/n,r[3]=(t[3*o+i]-t[3*i+o])*n,r[i]=(t[3*i+a]+t[3*a+i])*n,r[o]=(t[3*o+a]+t[3*a+o])*n}return r},l.toQuat4=h.fromRotationMatrix,function(){var t=l.create();h.fromAxes=function(r,n,e,u){return t[0]=n[0],t[3]=n[1],t[6]=n[2],t[1]=e[0],t[4]=e[1],t[7]=e[2],t[2]=r[0],t[5]=r[1],t[8]=r[2],h.fromRotationMatrix(t,u)}}(),h.identity=function(t){return t||(t=h.create()),t[0]=0,t[1]=0,t[2]=0,t[3]=1,t},h.fromAngleAxis=function(t,r,n){n||(n=h.create());var e=.5*t,u=Math.sin(e);return n[3]=Math.cos(e),n[0]=u*r[0],n[1]=u*r[1],n[2]=u*r[2],n},h.toAngleAxis=function(t,r){r||(r=t);var e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2];if(e>0){r[3]=2*Math.acos(t[3]);var u=n.invsqrt(e);r[0]=t[0]*u,r[1]=t[1]*u,r[2]=t[2]*u}else r[3]=0,r[0]=1,r[1]=0,r[2]=0;return r},h.str=function(t){return"["+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+"]"};var d={};d.create=function(t){var r=new e(2);return t?(r[0]=t[0],r[1]=t[1]):(r[0]=0,r[1]=0),r},d.createFrom=function(t,r){var n=new e(2);return n[0]=t,n[1]=r,n},d.add=function(t,r,n){return n||(n=r),n[0]=t[0]+r[0],n[1]=t[1]+r[1],n},d.subtract=function(t,r,n){return n||(n=r),n[0]=t[0]-r[0],n[1]=t[1]-r[1],n},d.multiply=function(t,r,n){return n||(n=r),n[0]=t[0]*r[0],n[1]=t[1]*r[1],n},d.divide=function(t,r,n){return n||(n=r),n[0]=t[0]/r[0],n[1]=t[1]/r[1],n},d.scale=function(t,r,n){return n||(n=t),n[0]=t[0]*r,n[1]=t[1]*r,n},d.dist=function(t,r){var n=r[0]-t[0],e=r[1]-t[1];return Math.sqrt(n*n+e*e)},d.dist2=function(t,r){var n=r[0]-t[0],e=r[1]-t[1];return n*n+e*e},d.set=function(t,r){return r[0]=t[0],r[1]=t[1],r},d.set2=function(t,r,n){return n[0]=t,n[1]=r,n},d.negate=function(t,r){return r||(r=t),r[0]=-t[0],r[1]=-t[1],r},d.normalize=function(t,r){r||(r=t);var n=t[0]*t[0]+t[1]*t[1];return n>0?(n=Math.sqrt(n),r[0]=t[0]/n,r[1]=t[1]/n):r[0]=r[1]=0,r},d.cross=function(t,r,n){var e=t[0]*r[1]-t[1]*r[0];return n?(n[0]=n[1]=0,n[2]=e,n):e},d.length=function(t){var r=t[0],n=t[1];return Math.sqrt(r*r+n*n)},d.dot=function(t,r){return t[0]*r[0]+t[1]*r[1]},d.direction=function(t,r,n){n||(n=t);var e=t[0]-r[0],u=t[1]-r[1],a=e*e+u*u;return a?(a=1/Math.sqrt(a),n[0]=e*a,n[1]=u*a,n):(n[0]=0,n[1]=0,n[2]=0,n)},d.lerp=function(t,r,n,e){return e||(e=t),e[0]=t[0]+n*(r[0]-t[0]),e[1]=t[1]+n*(r[1]-t[1]),e},d.str=function(t){return"["+t[0]+", "+t[1]+"]"};var y={};y.create=function(t){var r=new e(4);return t?(r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3]):r[0]=r[1]=r[2]=r[3]=0,r},y.createFrom=function(t,r,n,u){var a=new e(4);return a[0]=t,a[1]=r,a[2]=n,a[3]=u,a},y.set=function(t,r){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r},y.identity=function(t){return t||(t=y.create()),t[0]=1,t[1]=0,t[2]=0,t[3]=1,t},y.transpose=function(t,r){if(!r||t===r){var n=t[1];return t[1]=t[2],t[2]=n,t}return r[0]=t[0],r[1]=t[2],r[2]=t[1],r[3]=t[3],r},y.determinant=function(t){return t[0]*t[3]-t[2]*t[1]},y.inverse=function(t,r){r||(r=t);var n=t[0],e=t[1],u=t[2],a=t[3],i=n*a-u*e;return i?(i=1/i,r[0]=a*i,r[1]=-e*i,r[2]=-u*i,r[3]=n*i,r):null},y.multiply=function(t,r,n){n||(n=t);var e=t[0],u=t[1],a=t[2],i=t[3];return n[0]=e*r[0]+u*r[2],n[1]=e*r[1]+u*r[3],n[2]=a*r[0]+i*r[2],n[3]=a*r[1]+i*r[3],n},y.rotate=function(t,r,n){n||(n=t);var e=t[0],u=t[1],a=t[2],i=t[3],o=Math.sin(r),c=Math.cos(r);return n[0]=e*c+u*o,n[1]=e*-o+u*c,n[2]=a*c+i*o,n[3]=a*-o+i*c,n},y.multiplyVec2=function(t,r,n){n||(n=r);var e=r[0],u=r[1];return n[0]=e*t[0]+u*t[1],n[1]=e*t[2]+u*t[3],n},y.scale=function(t,r,n){n||(n=t);var e=t[0],u=t[1],a=t[2],i=t[3],o=r[0],c=r[1];return n[0]=e*o,n[1]=u*c,n[2]=a*o,n[3]=i*c,n},y.str=function(t){return"["+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+"]"};var p={};p.create=function(t){var r=new e(4);return t?(r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3]):(r[0]=0,r[1]=0,r[2]=0,r[3]=0),r},p.createFrom=function(t,r,n,u){var a=new e(4);return a[0]=t,a[1]=r,a[2]=n,a[3]=u,a},p.add=function(t,r,n){return n||(n=r),n[0]=t[0]+r[0],n[1]=t[1]+r[1],n[2]=t[2]+r[2],n[3]=t[3]+r[3],n},p.subtract=function(t,r,n){return n||(n=r),n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],n[3]=t[3]-r[3],n},p.multiply=function(t,r,n){return n||(n=r),n[0]=t[0]*r[0],n[1]=t[1]*r[1],n[2]=t[2]*r[2],n[3]=t[3]*r[3],n},p.divide=function(t,r,n){return n||(n=r),n[0]=t[0]/r[0],n[1]=t[1]/r[1],n[2]=t[2]/r[2],n[3]=t[3]/r[3],n},p.scale=function(t,r,n){return n||(n=t),n[0]=t[0]*r,n[1]=t[1]*r,n[2]=t[2]*r,n[3]=t[3]*r,n},p.dot=function(t,r){return t[0]*r[0]+t[1]*r[1]+t[2]*r[2]+t[3]*r[3]},p.set=function(t,r){return r[0]=t[0],r[1]=t[1],r[2]=t[2],r[3]=t[3],r},p.set4=function(t,r,n,e,u){return u[0]=t,u[1]=r,u[2]=n,u[3]=e,u},p.negate=function(t,r){return r||(r=t),r[0]=-t[0],r[1]=-t[1],r[2]=-t[2],r[3]=-t[3],r},p.lerp=function(t,r,n,e){return e||(e=t),e[0]=t[0]+n*(r[0]-t[0]),e[1]=t[1]+n*(r[1]-t[1]),e[2]=t[2]+n*(r[2]-t[2]),e[3]=t[3]+n*(r[3]-t[3]),e},p.str=function(t){return"["+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+"]"};var q=r?"":"d";t["glMath"+q]=n,t["vec2"+q]=d,t["vec3"+q]=u,t["vec4"+q]=p,t["mat2"+q]=y,t["mat3"+q]=l,t["mat4"+q]=M,t["quat4"+q]=h}),t});