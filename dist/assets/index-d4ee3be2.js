(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $a="151",Ti={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ei={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ou=0,xo=1,lu=2,yc=1,cu=2,Es=3,In=0,jt=1,Ye=2,Xn=0,Zi=1,So=2,Mo=3,bo=4,uu=5,qi=100,hu=101,du=102,wo=103,To=104,fu=200,pu=201,mu=202,gu=203,_c=204,vc=205,yu=206,_u=207,vu=208,xu=209,Su=210,Mu=0,bu=1,wu=2,Na=3,Tu=4,Eu=5,Au=6,Cu=7,Ja=0,Lu=1,Ru=2,Rn=0,Iu=1,Pu=2,Du=3,Uu=4,Ou=5,xc=300,ts=301,ns=302,Fa=303,Ba=304,Ar=306,is=1e3,nn=1001,wr=1002,Ct=1003,za=1004,Sr=1005,qt=1006,Sc=1007,di=1008,fi=1009,Nu=1010,Fu=1011,Mc=1012,Bu=1013,oi=1014,Wn=1015,Rs=1016,zu=1017,ku=1018,Yi=1020,Hu=1021,sn=1023,Gu=1024,Vu=1025,ui=1026,ss=1027,Wu=1028,Xu=1029,qu=1030,ju=1031,Ku=1033,Jr=33776,Qr=33777,ea=33778,ta=33779,Eo=35840,Ao=35841,Co=35842,Lo=35843,Zu=36196,Ro=37492,Io=37496,Po=37808,Do=37809,Uo=37810,Oo=37811,No=37812,Fo=37813,Bo=37814,zo=37815,ko=37816,Ho=37817,Go=37818,Vo=37819,Wo=37820,Xo=37821,na=36492,Yu=36283,qo=36284,jo=36285,Ko=36286,Is=2300,rs=2301,ia=2302,Zo=2400,Yo=2401,$o=2402,$u=2500,Ju=0,bc=1,ka=2,pi=3e3,Qe=3001,Qu=3200,eh=3201,Qa=0,th=1,mn="srgb",Ps="srgb-linear",wc="display-p3",sa=7680,nh=519,Ha=35044,Jo="300 es",Ga=1035;class _i{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}}const Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Qo=1234567;const $i=Math.PI/180,as=180/Math.PI;function un(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[a&255]+Ut[a>>8&255]+Ut[a>>16&255]+Ut[a>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Rt(a,e,t){return Math.max(e,Math.min(t,a))}function eo(a,e){return(a%e+e)%e}function ih(a,e,t,n,i){return n+(a-e)*(i-n)/(t-e)}function sh(a,e,t){return a!==e?(t-a)/(e-a):0}function Ls(a,e,t){return(1-t)*a+t*e}function rh(a,e,t,n){return Ls(a,e,1-Math.exp(-t*n))}function ah(a,e=1){return e-Math.abs(eo(a,e*2)-e)}function oh(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*(3-2*a))}function lh(a,e,t){return a<=e?0:a>=t?1:(a=(a-e)/(t-e),a*a*a*(a*(a*6-15)+10))}function ch(a,e){return a+Math.floor(Math.random()*(e-a+1))}function uh(a,e){return a+Math.random()*(e-a)}function hh(a){return a*(.5-Math.random())}function dh(a){a!==void 0&&(Qo=a);let e=Qo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fh(a){return a*$i}function ph(a){return a*as}function Va(a){return(a&a-1)===0&&a!==0}function Tc(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))}function Ec(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))}function mh(a,e,t,n,i){const s=Math.cos,o=Math.sin,r=s(t/2),u=o(t/2),c=s((e+n)/2),h=o((e+n)/2),d=s((e-n)/2),f=o((e-n)/2),m=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":a.set(r*h,u*d,u*f,r*c);break;case"YZY":a.set(u*f,r*h,u*d,r*c);break;case"ZXZ":a.set(u*d,u*f,r*h,r*c);break;case"XZX":a.set(r*h,u*g,u*m,r*c);break;case"YXY":a.set(u*m,r*h,u*g,r*c);break;case"ZYZ":a.set(u*g,u*m,r*h,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ln(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("Invalid component type.")}}function it(a,e){switch(e.constructor){case Float32Array:return a;case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("Invalid component type.")}}const gh={DEG2RAD:$i,RAD2DEG:as,generateUUID:un,clamp:Rt,euclideanModulo:eo,mapLinear:ih,inverseLerp:sh,lerp:Ls,damp:rh,pingpong:ah,smoothstep:oh,smootherstep:lh,randInt:ch,randFloat:uh,randFloatSpread:hh,seededRandom:dh,degToRad:fh,radToDeg:ph,isPowerOfTwo:Va,ceilPowerOfTwo:Tc,floorPowerOfTwo:Ec,setQuaternionFromProperEuler:mh,normalize:it,denormalize:Ln};class De{constructor(e=0,t=0){De.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,i,s,o,r,u,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=r,h[3]=t,h[4]=s,h[5]=u,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],r=n[3],u=n[6],c=n[1],h=n[4],d=n[7],f=n[2],m=n[5],g=n[8],y=i[0],p=i[3],l=i[6],E=i[1],w=i[4],S=i[7],T=i[2],D=i[5],O=i[8];return s[0]=o*y+r*E+u*T,s[3]=o*p+r*w+u*D,s[6]=o*l+r*S+u*O,s[1]=c*y+h*E+d*T,s[4]=c*p+h*w+d*D,s[7]=c*l+h*S+d*O,s[2]=f*y+m*E+g*T,s[5]=f*p+m*w+g*D,s[8]=f*l+m*S+g*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],u=e[6],c=e[7],h=e[8];return t*o*h-t*r*c-n*s*h+n*r*u+i*s*c-i*o*u}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],u=e[6],c=e[7],h=e[8],d=h*o-r*c,f=r*u-h*s,m=c*s-o*u,g=t*d+n*f+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=d*y,e[1]=(i*c-h*n)*y,e[2]=(r*n-i*o)*y,e[3]=f*y,e[4]=(h*t-i*u)*y,e[5]=(i*s-r*t)*y,e[6]=m*y,e[7]=(n*u-c*t)*y,e[8]=(o*t-n*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,r){const u=Math.cos(s),c=Math.sin(s);return this.set(n*u,n*c,-n*(u*o+c*r)+o+e,-i*c,i*u,-i*(-c*o+u*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(ra.makeScale(e,t)),this}rotate(e){return this.premultiply(ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(ra.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ra=new qe;function Ac(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function Ds(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Ji(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function aa(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}const yh=new qe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),_h=new qe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function vh(a){return a.convertSRGBToLinear().applyMatrix3(_h)}function xh(a){return a.applyMatrix3(yh).convertLinearToSRGB()}const Sh={[Ps]:a=>a,[mn]:a=>a.convertSRGBToLinear(),[wc]:vh},Mh={[Ps]:a=>a,[mn]:a=>a.convertLinearToSRGB(),[wc]:xh},Zt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(a){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!a},get workingColorSpace(){return Ps},set workingColorSpace(a){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(a,e,t){if(this.enabled===!1||e===t||!e||!t)return a;const n=Sh[e],i=Mh[t];if(n===void 0||i===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return i(n(a))},fromWorkingColorSpace:function(a,e){return this.convert(a,this.workingColorSpace,e)},toWorkingColorSpace:function(a,e){return this.convert(a,e,this.workingColorSpace)}};let Ai;class Cc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ai===void 0&&(Ai=Ds("canvas")),Ai.width=e.width,Ai.height=e.height;const n=Ai.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ai}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ds("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ji(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ji(t[n]/255)*255):t[n]=Ji(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Lc{constructor(e=null){this.isSource=!0,this.uuid=un(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,r=i.length;o<r;o++)i[o].isDataTexture?s.push(oa(i[o].image)):s.push(oa(i[o]))}else s=oa(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function oa(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Cc.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bh=0;class It extends _i{constructor(e=It.DEFAULT_IMAGE,t=It.DEFAULT_MAPPING,n=nn,i=nn,s=qt,o=di,r=sn,u=fi,c=It.DEFAULT_ANISOTROPY,h=pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bh++}),this.uuid=un(),this.name="",this.source=new Lc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=u,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case is:e.x=e.x-Math.floor(e.x);break;case nn:e.x=e.x<0?0:1;break;case wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case is:e.y=e.y-Math.floor(e.y);break;case nn:e.y=e.y<0?0:1;break;case wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}It.DEFAULT_IMAGE=null;It.DEFAULT_MAPPING=xc;It.DEFAULT_ANISOTROPY=1;class st{constructor(e=0,t=0,n=0,i=1){st.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const u=e.elements,c=u[0],h=u[4],d=u[8],f=u[1],m=u[5],g=u[9],y=u[2],p=u[6],l=u[10];if(Math.abs(h-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(c+m+l-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,S=(m+1)/2,T=(l+1)/2,D=(h+f)/4,O=(d+y)/4,B=(g+p)/4;return w>S&&w>T?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=D/n,s=O/n):S>T?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=D/i,s=B/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=O/s,i=B/s),this.set(n,i,s,t),this}let E=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(d-y)/E,this.z=(f-h)/E,this.w=Math.acos((c+m+l-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mi extends _i{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new st(0,0,e,t),this.scissorTest=!1,this.viewport=new st(0,0,e,t);const i={width:e,height:t,depth:1};this.texture=new It(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:qt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Lc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rc extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wh extends It{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,r){let u=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3];const f=s[o+0],m=s[o+1],g=s[o+2],y=s[o+3];if(r===0){e[t+0]=u,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(r===1){e[t+0]=f,e[t+1]=m,e[t+2]=g,e[t+3]=y;return}if(d!==y||u!==f||c!==m||h!==g){let p=1-r;const l=u*f+c*m+h*g+d*y,E=l>=0?1:-1,w=1-l*l;if(w>Number.EPSILON){const T=Math.sqrt(w),D=Math.atan2(T,l*E);p=Math.sin(p*D)/T,r=Math.sin(r*D)/T}const S=r*E;if(u=u*p+f*S,c=c*p+m*S,h=h*p+g*S,d=d*p+y*S,p===1-r){const T=1/Math.sqrt(u*u+c*c+h*h+d*d);u*=T,c*=T,h*=T,d*=T}}e[t]=u,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,o){const r=n[i],u=n[i+1],c=n[i+2],h=n[i+3],d=s[o],f=s[o+1],m=s[o+2],g=s[o+3];return e[t]=r*g+h*d+u*m-c*f,e[t+1]=u*g+h*f+c*d-r*m,e[t+2]=c*g+h*m+r*f-u*d,e[t+3]=h*g-r*d-u*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,i=e._y,s=e._z,o=e._order,r=Math.cos,u=Math.sin,c=r(n/2),h=r(i/2),d=r(s/2),f=u(n/2),m=u(i/2),g=u(s/2);switch(o){case"XYZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"YXZ":this._x=f*h*d+c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"ZXY":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d-f*m*g;break;case"ZYX":this._x=f*h*d-c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d+f*m*g;break;case"YZX":this._x=f*h*d+c*m*g,this._y=c*m*d+f*h*g,this._z=c*h*g-f*m*d,this._w=c*h*d-f*m*g;break;case"XZY":this._x=f*h*d-c*m*g,this._y=c*m*d-f*h*g,this._z=c*h*g+f*m*d,this._w=c*h*d+f*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],r=t[5],u=t[9],c=t[2],h=t[6],d=t[10],f=n+r+d;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(h-u)*m,this._y=(s-c)*m,this._z=(o-i)*m}else if(n>r&&n>d){const m=2*Math.sqrt(1+n-r-d);this._w=(h-u)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(s+c)/m}else if(r>d){const m=2*Math.sqrt(1+r-n-d);this._w=(s-c)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(u+h)/m}else{const m=2*Math.sqrt(1+d-n-r);this._w=(o-i)/m,this._x=(s+c)/m,this._y=(u+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,r=t._x,u=t._y,c=t._z,h=t._w;return this._x=n*h+o*r+i*c-s*u,this._y=i*h+o*u+s*r-n*c,this._z=s*h+o*c+n*u-i*r,this._w=o*h-n*r-i*u-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let r=o*e._w+n*e._x+i*e._y+s*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const u=1-r*r;if(u<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(u),h=Math.atan2(c,r),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=i*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(s),n*Math.cos(s),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(el.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(el.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,r=e.z,u=e.w,c=u*t+o*i-r*n,h=u*n+r*t-s*i,d=u*i+s*n-o*t,f=-s*t-o*n-r*i;return this.x=c*u+f*-s+h*-r-d*-o,this.y=h*u+f*-o+d*-s-c*-r,this.z=d*u+f*-r+c*-o-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,r=t.y,u=t.z;return this.x=i*u-s*r,this.y=s*o-n*u,this.z=n*r-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return la.copy(this).projectOnVector(e),this.sub(la)}reflect(e){return this.sub(la.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const la=new P,el=new _n;class Dn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ci.copy(e.boundingBox),Ci.applyMatrix4(e.matrixWorld),this.union(Ci);else{const i=e.geometry;if(i!==void 0)if(t&&i.attributes!==void 0&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,r=s.count;o<r;o++)Mn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Mn)}else i.boundingBox===null&&i.computeBoundingBox(),Ci.copy(i.boundingBox),Ci.applyMatrix4(e.matrixWorld),this.union(Ci)}const n=e.children;for(let i=0,s=n.length;i<s;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Mn),Mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ys),Vs.subVectors(this.max,ys),Li.subVectors(e.a,ys),Ri.subVectors(e.b,ys),Ii.subVectors(e.c,ys),Fn.subVectors(Ri,Li),Bn.subVectors(Ii,Ri),Qn.subVectors(Li,Ii);let t=[0,-Fn.z,Fn.y,0,-Bn.z,Bn.y,0,-Qn.z,Qn.y,Fn.z,0,-Fn.x,Bn.z,0,-Bn.x,Qn.z,0,-Qn.x,-Fn.y,Fn.x,0,-Bn.y,Bn.x,0,-Qn.y,Qn.x,0];return!ca(t,Li,Ri,Ii,Vs)||(t=[1,0,0,0,1,0,0,0,1],!ca(t,Li,Ri,Ii,Vs))?!1:(Ws.crossVectors(Fn,Bn),t=[Ws.x,Ws.y,Ws.z],ca(t,Li,Ri,Ii,Vs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Sn=[new P,new P,new P,new P,new P,new P,new P,new P],Mn=new P,Ci=new Dn,Li=new P,Ri=new P,Ii=new P,Fn=new P,Bn=new P,Qn=new P,ys=new P,Vs=new P,Ws=new P,ei=new P;function ca(a,e,t,n,i){for(let s=0,o=a.length-3;s<=o;s+=3){ei.fromArray(a,s);const r=i.x*Math.abs(ei.x)+i.y*Math.abs(ei.y)+i.z*Math.abs(ei.z),u=e.dot(ei),c=t.dot(ei),h=n.dot(ei);if(Math.max(-Math.max(u,c,h),Math.min(u,c,h))>r)return!1}return!0}const Th=new Dn,_s=new P,ua=new P;class Un{constructor(e=new P,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Th.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_s.subVectors(e,this.center);const t=_s.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(_s,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ua.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_s.copy(e.center).add(ua)),this.expandByPoint(_s.copy(e.center).sub(ua))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new P,ha=new P,Xs=new P,zn=new P,da=new P,qs=new P,fa=new P;class Cr{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,t),bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ha.copy(e).add(t).multiplyScalar(.5),Xs.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(ha);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Xs),r=zn.dot(this.direction),u=-zn.dot(Xs),c=zn.lengthSq(),h=Math.abs(1-o*o);let d,f,m,g;if(h>0)if(d=o*u-r,f=o*r-u,g=s*h,d>=0)if(f>=-g)if(f<=g){const y=1/h;d*=y,f*=y,m=d*(d+o*f+2*r)+f*(o*d+f+2*u)+c}else f=s,d=Math.max(0,-(o*f+r)),m=-d*d+f*(f+2*u)+c;else f=-s,d=Math.max(0,-(o*f+r)),m=-d*d+f*(f+2*u)+c;else f<=-g?(d=Math.max(0,-(-o*s+r)),f=d>0?-s:Math.min(Math.max(-s,-u),s),m=-d*d+f*(f+2*u)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-u),s),m=f*(f+2*u)+c):(d=Math.max(0,-(o*s+r)),f=d>0?s:Math.min(Math.max(-s,-u),s),m=-d*d+f*(f+2*u)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+r)),m=-d*d+f*(f+2*u)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ha).addScaledVector(Xs,f),m}intersectSphere(e,t){bn.subVectors(e.center,this.origin);const n=bn.dot(this.direction),i=bn.dot(bn)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),r=n-o,u=n+o;return u<0?null:r<0?this.at(u,t):this.at(r,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,r,u;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(r=(e.min.z-f.z)*d,u=(e.max.z-f.z)*d):(r=(e.max.z-f.z)*d,u=(e.min.z-f.z)*d),n>u||r>i)||((r>n||n!==n)&&(n=r),(u<i||i!==i)&&(i=u),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,n,i,s){da.subVectors(t,e),qs.subVectors(n,e),fa.crossVectors(da,qs);let o=this.direction.dot(fa),r;if(o>0){if(i)return null;r=1}else if(o<0)r=-1,o=-o;else return null;zn.subVectors(this.origin,e);const u=r*this.direction.dot(qs.crossVectors(zn,qs));if(u<0)return null;const c=r*this.direction.dot(da.cross(zn));if(c<0||u+c>o)return null;const h=-r*zn.dot(fa);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,i,s,o,r,u,c,h,d,f,m,g,y,p){const l=this.elements;return l[0]=e,l[4]=t,l[8]=n,l[12]=i,l[1]=s,l[5]=o,l[9]=r,l[13]=u,l[2]=c,l[6]=h,l[10]=d,l[14]=f,l[3]=m,l[7]=g,l[11]=y,l[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Pi.setFromMatrixColumn(e,0).length(),s=1/Pi.setFromMatrixColumn(e,1).length(),o=1/Pi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),r=Math.sin(n),u=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*h,m=o*d,g=r*h,y=r*d;t[0]=u*h,t[4]=-u*d,t[8]=c,t[1]=m+g*c,t[5]=f-y*c,t[9]=-r*u,t[2]=y-f*c,t[6]=g+m*c,t[10]=o*u}else if(e.order==="YXZ"){const f=u*h,m=u*d,g=c*h,y=c*d;t[0]=f+y*r,t[4]=g*r-m,t[8]=o*c,t[1]=o*d,t[5]=o*h,t[9]=-r,t[2]=m*r-g,t[6]=y+f*r,t[10]=o*u}else if(e.order==="ZXY"){const f=u*h,m=u*d,g=c*h,y=c*d;t[0]=f-y*r,t[4]=-o*d,t[8]=g+m*r,t[1]=m+g*r,t[5]=o*h,t[9]=y-f*r,t[2]=-o*c,t[6]=r,t[10]=o*u}else if(e.order==="ZYX"){const f=o*h,m=o*d,g=r*h,y=r*d;t[0]=u*h,t[4]=g*c-m,t[8]=f*c+y,t[1]=u*d,t[5]=y*c+f,t[9]=m*c-g,t[2]=-c,t[6]=r*u,t[10]=o*u}else if(e.order==="YZX"){const f=o*u,m=o*c,g=r*u,y=r*c;t[0]=u*h,t[4]=y-f*d,t[8]=g*d+m,t[1]=d,t[5]=o*h,t[9]=-r*h,t[2]=-c*h,t[6]=m*d+g,t[10]=f-y*d}else if(e.order==="XZY"){const f=o*u,m=o*c,g=r*u,y=r*c;t[0]=u*h,t[4]=-d,t[8]=c*h,t[1]=f*d+y,t[5]=o*h,t[9]=m*d-g,t[2]=g*d-m,t[6]=r*h,t[10]=y*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Eh,e,Ah)}lookAt(e,t,n){const i=this.elements;return Yt.subVectors(e,t),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),kn.crossVectors(n,Yt),kn.lengthSq()===0&&(Math.abs(n.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),kn.crossVectors(n,Yt)),kn.normalize(),js.crossVectors(Yt,kn),i[0]=kn.x,i[4]=js.x,i[8]=Yt.x,i[1]=kn.y,i[5]=js.y,i[9]=Yt.y,i[2]=kn.z,i[6]=js.z,i[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],r=n[4],u=n[8],c=n[12],h=n[1],d=n[5],f=n[9],m=n[13],g=n[2],y=n[6],p=n[10],l=n[14],E=n[3],w=n[7],S=n[11],T=n[15],D=i[0],O=i[4],B=i[8],M=i[12],C=i[1],ee=i[5],Y=i[9],N=i[13],k=i[2],V=i[6],ne=i[10],ie=i[14],J=i[3],oe=i[7],re=i[11],Ie=i[15];return s[0]=o*D+r*C+u*k+c*J,s[4]=o*O+r*ee+u*V+c*oe,s[8]=o*B+r*Y+u*ne+c*re,s[12]=o*M+r*N+u*ie+c*Ie,s[1]=h*D+d*C+f*k+m*J,s[5]=h*O+d*ee+f*V+m*oe,s[9]=h*B+d*Y+f*ne+m*re,s[13]=h*M+d*N+f*ie+m*Ie,s[2]=g*D+y*C+p*k+l*J,s[6]=g*O+y*ee+p*V+l*oe,s[10]=g*B+y*Y+p*ne+l*re,s[14]=g*M+y*N+p*ie+l*Ie,s[3]=E*D+w*C+S*k+T*J,s[7]=E*O+w*ee+S*V+T*oe,s[11]=E*B+w*Y+S*ne+T*re,s[15]=E*M+w*N+S*ie+T*Ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],r=e[5],u=e[9],c=e[13],h=e[2],d=e[6],f=e[10],m=e[14],g=e[3],y=e[7],p=e[11],l=e[15];return g*(+s*u*d-i*c*d-s*r*f+n*c*f+i*r*m-n*u*m)+y*(+t*u*m-t*c*f+s*o*f-i*o*m+i*c*h-s*u*h)+p*(+t*c*d-t*r*m-s*o*d+n*o*m+s*r*h-n*c*h)+l*(-i*r*h-t*u*d+t*r*f+i*o*d-n*o*f+n*u*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],r=e[5],u=e[6],c=e[7],h=e[8],d=e[9],f=e[10],m=e[11],g=e[12],y=e[13],p=e[14],l=e[15],E=d*p*c-y*f*c+y*u*m-r*p*m-d*u*l+r*f*l,w=g*f*c-h*p*c-g*u*m+o*p*m+h*u*l-o*f*l,S=h*y*c-g*d*c+g*r*m-o*y*m-h*r*l+o*d*l,T=g*d*u-h*y*u-g*r*f+o*y*f+h*r*p-o*d*p,D=t*E+n*w+i*S+s*T;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/D;return e[0]=E*O,e[1]=(y*f*s-d*p*s-y*i*m+n*p*m+d*i*l-n*f*l)*O,e[2]=(r*p*s-y*u*s+y*i*c-n*p*c-r*i*l+n*u*l)*O,e[3]=(d*u*s-r*f*s-d*i*c+n*f*c+r*i*m-n*u*m)*O,e[4]=w*O,e[5]=(h*p*s-g*f*s+g*i*m-t*p*m-h*i*l+t*f*l)*O,e[6]=(g*u*s-o*p*s-g*i*c+t*p*c+o*i*l-t*u*l)*O,e[7]=(o*f*s-h*u*s+h*i*c-t*f*c-o*i*m+t*u*m)*O,e[8]=S*O,e[9]=(g*d*s-h*y*s-g*n*m+t*y*m+h*n*l-t*d*l)*O,e[10]=(o*y*s-g*r*s+g*n*c-t*y*c-o*n*l+t*r*l)*O,e[11]=(h*r*s-o*d*s-h*n*c+t*d*c+o*n*m-t*r*m)*O,e[12]=T*O,e[13]=(h*y*i-g*d*i+g*n*f-t*y*f-h*n*p+t*d*p)*O,e[14]=(g*r*i-o*y*i-g*n*u+t*y*u+o*n*p-t*r*p)*O,e[15]=(o*d*i-h*r*i+h*n*u-t*d*u-o*n*f+t*r*f)*O,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,r=e.y,u=e.z,c=s*o,h=s*r;return this.set(c*o+n,c*r-i*u,c*u+i*r,0,c*r+i*u,h*r+n,h*u-i*o,0,c*u-i*r,h*u+i*o,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,r=t._z,u=t._w,c=s+s,h=o+o,d=r+r,f=s*c,m=s*h,g=s*d,y=o*h,p=o*d,l=r*d,E=u*c,w=u*h,S=u*d,T=n.x,D=n.y,O=n.z;return i[0]=(1-(y+l))*T,i[1]=(m+S)*T,i[2]=(g-w)*T,i[3]=0,i[4]=(m-S)*D,i[5]=(1-(f+l))*D,i[6]=(p+E)*D,i[7]=0,i[8]=(g+w)*O,i[9]=(p-E)*O,i[10]=(1-(f+y))*O,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Pi.set(i[0],i[1],i[2]).length();const o=Pi.set(i[4],i[5],i[6]).length(),r=Pi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],on.copy(this);const c=1/s,h=1/o,d=1/r;return on.elements[0]*=c,on.elements[1]*=c,on.elements[2]*=c,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=d,on.elements[9]*=d,on.elements[10]*=d,t.setFromRotationMatrix(on),n.x=s,n.y=o,n.z=r,this}makePerspective(e,t,n,i,s,o){const r=this.elements,u=2*s/(t-e),c=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i),f=-(o+s)/(o-s),m=-2*o*s/(o-s);return r[0]=u,r[4]=0,r[8]=h,r[12]=0,r[1]=0,r[5]=c,r[9]=d,r[13]=0,r[2]=0,r[6]=0,r[10]=f,r[14]=m,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(e,t,n,i,s,o){const r=this.elements,u=1/(t-e),c=1/(n-i),h=1/(o-s),d=(t+e)*u,f=(n+i)*c,m=(o+s)*h;return r[0]=2*u,r[4]=0,r[8]=0,r[12]=-d,r[1]=0,r[5]=2*c,r[9]=0,r[13]=-f,r[2]=0,r[6]=0,r[10]=-2*h,r[14]=-m,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Pi=new P,on=new He,Eh=new P(0,0,0),Ah=new P(1,1,1),kn=new P,js=new P,Yt=new P,tl=new He,nl=new _n;class Lr{constructor(e=0,t=0,n=0,i=Lr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],r=i[8],u=i[1],c=i[5],h=i[9],d=i[2],f=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(Rt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(r,m),this._z=Math.atan2(u,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Rt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Rt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(r,m));break;case"XZY":this._z=Math.asin(-Rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(r,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nl.setFromEuler(this),this.setFromQuaternion(nl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Lr.DEFAULT_ORDER="XYZ";class to{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ch=0;const il=new P,Di=new _n,wn=new He,Ks=new P,vs=new P,Lh=new P,Rh=new _n,sl=new P(1,0,0),rl=new P(0,1,0),al=new P(0,0,1),Ih={type:"added"},ol={type:"removed"};class ot extends _i{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ot.DEFAULT_UP.clone();const e=new P,t=new Lr,n=new _n,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new He},normalMatrix:{value:new qe}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=ot.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new to,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(sl,e)}rotateY(e){return this.rotateOnAxis(rl,e)}rotateZ(e){return this.rotateOnAxis(al,e)}translateOnAxis(e,t){return il.copy(e).applyQuaternion(this.quaternion),this.position.add(il.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sl,e)}translateY(e){return this.translateOnAxis(rl,e)}translateZ(e){return this.translateOnAxis(al,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ks.copy(e):Ks.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(vs,Ks,this.up):wn.lookAt(Ks,vs,this.up),this.quaternion.setFromRotationMatrix(wn),i&&(wn.extractRotation(i.matrixWorld),Di.setFromRotationMatrix(wn),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Ih)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ol)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(ol)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wn.multiply(e.parent.matrixWorld)),e.applyMatrix4(wn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectsByProperty(e,t);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,e,Lh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,Rh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++){const r=i[s];r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function s(r,u){return r[u.uuid]===void 0&&(r[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const u=r.shapes;if(Array.isArray(u))for(let c=0,h=u.length;c<h;c++){const d=u[c];s(e.shapes,d)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let u=0,c=this.material.length;u<c;u++)r.push(s(e.materials,this.material[u]));i.material=r}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let r=0;r<this.children.length;r++)i.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let r=0;r<this.animations.length;r++){const u=this.animations[r];i.animations.push(s(e.animations,u))}}if(t){const r=o(e.geometries),u=o(e.materials),c=o(e.textures),h=o(e.images),d=o(e.shapes),f=o(e.skeletons),m=o(e.animations),g=o(e.nodes);r.length>0&&(n.geometries=r),u.length>0&&(n.materials=u),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(r){const u=[];for(const c in r){const h=r[c];delete h.metadata,u.push(h)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ot.DEFAULT_UP=new P(0,1,0);ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ln=new P,Tn=new P,pa=new P,En=new P,Ui=new P,Oi=new P,ll=new P,ma=new P,ga=new P,ya=new P;let Zs=!1;class tn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ln.subVectors(e,t),i.cross(ln);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ln.subVectors(i,t),Tn.subVectors(n,t),pa.subVectors(e,t);const o=ln.dot(ln),r=ln.dot(Tn),u=ln.dot(pa),c=Tn.dot(Tn),h=Tn.dot(pa),d=o*c-r*r;if(d===0)return s.set(-2,-1,-1);const f=1/d,m=(c*u-r*h)*f,g=(o*h-r*u)*f;return s.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,En),En.x>=0&&En.y>=0&&En.x+En.y<=1}static getUV(e,t,n,i,s,o,r,u){return Zs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zs=!0),this.getInterpolation(e,t,n,i,s,o,r,u)}static getInterpolation(e,t,n,i,s,o,r,u){return this.getBarycoord(e,t,n,i,En),u.setScalar(0),u.addScaledVector(s,En.x),u.addScaledVector(o,En.y),u.addScaledVector(r,En.z),u}static isFrontFacing(e,t,n,i){return ln.subVectors(n,t),Tn.subVectors(e,t),ln.cross(Tn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ln.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),ln.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return tn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,s){return Zs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Zs=!0),tn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}getInterpolation(e,t,n,i,s){return tn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,r;Ui.subVectors(i,n),Oi.subVectors(s,n),ma.subVectors(e,n);const u=Ui.dot(ma),c=Oi.dot(ma);if(u<=0&&c<=0)return t.copy(n);ga.subVectors(e,i);const h=Ui.dot(ga),d=Oi.dot(ga);if(h>=0&&d<=h)return t.copy(i);const f=u*d-h*c;if(f<=0&&u>=0&&h<=0)return o=u/(u-h),t.copy(n).addScaledVector(Ui,o);ya.subVectors(e,s);const m=Ui.dot(ya),g=Oi.dot(ya);if(g>=0&&m<=g)return t.copy(s);const y=m*c-u*g;if(y<=0&&c>=0&&g<=0)return r=c/(c-g),t.copy(n).addScaledVector(Oi,r);const p=h*g-m*d;if(p<=0&&d-h>=0&&m-g>=0)return ll.subVectors(s,i),r=(d-h)/(d-h+(m-g)),t.copy(i).addScaledVector(ll,r);const l=1/(p+y+f);return o=y*l,r=f*l,t.copy(n).addScaledVector(Ui,o).addScaledVector(Oi,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Ph=0;class hn extends _i{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=un(),this.name="",this.type="Material",this.blending=Zi,this.side=In,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=_c,this.blendDst=vc,this.blendEquation=qi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Na,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sa,this.stencilZFail=sa,this.stencilZPass=sa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==In&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const r in s){const u=s[r];delete u.metadata,o.push(u)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cn={h:0,s:0,l:0},Ys={h:0,s:0,l:0};function _a(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Zt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Zt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Zt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Zt.workingColorSpace){if(e=eo(e,1),t=Rt(t,0,1),n=Rt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=_a(o,s,e+1/3),this.g=_a(o,s,e),this.b=_a(o,s,e-1/3)}return Zt.toWorkingColorSpace(this,i),this}setStyle(e,t=mn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],r=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Zt.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Zt.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r)){const u=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return n(s[4]),this.setHSL(u,c,h,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mn){const n=Ic[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=aa(e.r),this.g=aa(e.g),this.b=aa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mn){return Zt.fromWorkingColorSpace(Ot.copy(this),e),Rt(Ot.r*255,0,255)<<16^Rt(Ot.g*255,0,255)<<8^Rt(Ot.b*255,0,255)<<0}getHexString(e=mn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Ot.copy(this),t);const n=Ot.r,i=Ot.g,s=Ot.b,o=Math.max(n,i,s),r=Math.min(n,i,s);let u,c;const h=(r+o)/2;if(r===o)u=0,c=0;else{const d=o-r;switch(c=h<=.5?d/(o+r):d/(2-o-r),o){case n:u=(i-s)/d+(i<s?6:0);break;case i:u=(s-n)/d+2;break;case s:u=(n-i)/d+4;break}u/=6}return e.h=u,e.s=c,e.l=h,e}getRGB(e,t=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=mn){Zt.fromWorkingColorSpace(Ot.copy(this),e);const t=Ot.r,n=Ot.g,i=Ot.b;return e!==mn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${t*255|0},${n*255|0},${i*255|0})`}offsetHSL(e,t,n){return this.getHSL(cn),cn.h+=e,cn.s+=t,cn.l+=n,this.setHSL(cn.h,cn.s,cn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cn),e.getHSL(Ys);const n=Ls(cn.h,Ys.h,t),i=Ls(cn.s,Ys.s,t),s=Ls(cn.l,Ys.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ot=new Le;Le.NAMES=Ic;class li extends hn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new P,$s=new De;class Gt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ha,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$s.fromBufferAttribute(this,t),$s.applyMatrix3(e),this.setXY(t,$s.x,$s.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ln(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ln(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ln(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ln(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ha&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Pc extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Dc extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Nt extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dh=0;const Qt=new He,va=new ot,Ni=new P,$t=new Dn,xs=new Dn,At=new P;class bt extends _i{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dh++}),this.uuid=un(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ac(e)?Dc:Pc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qt.makeRotationFromQuaternion(e),this.applyMatrix4(Qt),this}rotateX(e){return Qt.makeRotationX(e),this.applyMatrix4(Qt),this}rotateY(e){return Qt.makeRotationY(e),this.applyMatrix4(Qt),this}rotateZ(e){return Qt.makeRotationZ(e),this.applyMatrix4(Qt),this}translate(e,t,n){return Qt.makeTranslation(e,t,n),this.applyMatrix4(Qt),this}scale(e,t,n){return Qt.makeScale(e,t,n),this.applyMatrix4(Qt),this}lookAt(e){return va.lookAt(e),va.updateMatrix(),this.applyMatrix4(va.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];$t.setFromBufferAttribute(s),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const r=t[s];xs.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors($t.min,xs.min),$t.expandByPoint(At),At.addVectors($t.max,xs.max),$t.expandByPoint(At)):($t.expandByPoint(xs.min),$t.expandByPoint(xs.max))}$t.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)At.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(At));if(t)for(let s=0,o=t.length;s<o;s++){const r=t[s],u=this.morphTargetsRelative;for(let c=0,h=r.count;c<h;c++)At.fromBufferAttribute(r,c),u&&(Ni.fromBufferAttribute(e,c),At.add(Ni)),i=Math.max(i,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,s=t.normal.array,o=t.uv.array,r=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*r),4));const u=this.getAttribute("tangent").array,c=[],h=[];for(let C=0;C<r;C++)c[C]=new P,h[C]=new P;const d=new P,f=new P,m=new P,g=new De,y=new De,p=new De,l=new P,E=new P;function w(C,ee,Y){d.fromArray(i,C*3),f.fromArray(i,ee*3),m.fromArray(i,Y*3),g.fromArray(o,C*2),y.fromArray(o,ee*2),p.fromArray(o,Y*2),f.sub(d),m.sub(d),y.sub(g),p.sub(g);const N=1/(y.x*p.y-p.x*y.y);isFinite(N)&&(l.copy(f).multiplyScalar(p.y).addScaledVector(m,-y.y).multiplyScalar(N),E.copy(m).multiplyScalar(y.x).addScaledVector(f,-p.x).multiplyScalar(N),c[C].add(l),c[ee].add(l),c[Y].add(l),h[C].add(E),h[ee].add(E),h[Y].add(E))}let S=this.groups;S.length===0&&(S=[{start:0,count:n.length}]);for(let C=0,ee=S.length;C<ee;++C){const Y=S[C],N=Y.start,k=Y.count;for(let V=N,ne=N+k;V<ne;V+=3)w(n[V+0],n[V+1],n[V+2])}const T=new P,D=new P,O=new P,B=new P;function M(C){O.fromArray(s,C*3),B.copy(O);const ee=c[C];T.copy(ee),T.sub(O.multiplyScalar(O.dot(ee))).normalize(),D.crossVectors(B,ee);const N=D.dot(h[C])<0?-1:1;u[C*4]=T.x,u[C*4+1]=T.y,u[C*4+2]=T.z,u[C*4+3]=N}for(let C=0,ee=S.length;C<ee;++C){const Y=S[C],N=Y.start,k=Y.count;for(let V=N,ne=N+k;V<ne;V+=3)M(n[V+0]),M(n[V+1]),M(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);const i=new P,s=new P,o=new P,r=new P,u=new P,c=new P,h=new P,d=new P;if(e)for(let f=0,m=e.count;f<m;f+=3){const g=e.getX(f+0),y=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,p),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),r.fromBufferAttribute(n,g),u.fromBufferAttribute(n,y),c.fromBufferAttribute(n,p),r.add(h),u.add(h),c.add(h),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(y,u.x,u.y,u.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(r,u){const c=r.array,h=r.itemSize,d=r.normalized,f=new c.constructor(u.length*h);let m=0,g=0;for(let y=0,p=u.length;y<p;y++){r.isInterleavedBufferAttribute?m=u[y]*r.data.stride+r.offset:m=u[y]*h;for(let l=0;l<h;l++)f[g++]=c[m++]}return new Gt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new bt,n=this.index.array,i=this.attributes;for(const r in i){const u=i[r],c=e(u,n);t.setAttribute(r,c)}const s=this.morphAttributes;for(const r in s){const u=[],c=s[r];for(let h=0,d=c.length;h<d;h++){const f=c[h],m=e(f,n);u.push(m)}t.morphAttributes[r]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let r=0,u=o.length;r<u;r++){const c=o[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const c in u)u[c]!==void 0&&(e[c]=u[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const c=n[u];e.data.attributes[u]=c.toJSON(e.data)}const i={};let s=!1;for(const u in this.morphAttributes){const c=this.morphAttributes[u],h=[];for(let d=0,f=c.length;d<f;d++){const m=c[d];h.push(m.toJSON(e.data))}h.length>0&&(i[u]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere={center:r.center.toArray(),radius:r.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,m=d.length;f<m;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cl=new He,pn=new Cr,Js=new Un,ul=new P,Fi=new P,Bi=new P,zi=new P,xa=new P,Qs=new P,er=new De,tr=new De,nr=new De,hl=new P,dl=new P,fl=new P,ir=new P,sr=new P;class Fe extends ot{constructor(e=new bt,t=new li){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const r=this.morphTargetInfluences;if(s&&r){Qs.set(0,0,0);for(let u=0,c=s.length;u<c;u++){const h=r[u],d=s[u];h!==0&&(xa.fromBufferAttribute(d,e),o?Qs.addScaledVector(xa,h):Qs.addScaledVector(xa.sub(t),h))}t.add(Qs)}return this.isSkinnedMesh&&this.applyBoneTransform(e,t),t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),Js.copy(n.boundingSphere),Js.applyMatrix4(s),pn.copy(e.ray).recast(e.near),Js.containsPoint(pn.origin)===!1&&(pn.intersectSphere(Js,ul)===null||pn.origin.distanceToSquared(ul)>(e.far-e.near)**2))||(cl.copy(s).invert(),pn.copy(e.ray).applyMatrix4(cl),n.boundingBox!==null&&pn.intersectsBox(n.boundingBox)===!1))return;let o;const r=n.index,u=n.attributes.position,c=n.attributes.uv,h=n.attributes.uv2,d=n.attributes.normal,f=n.groups,m=n.drawRange;if(r!==null)if(Array.isArray(i))for(let g=0,y=f.length;g<y;g++){const p=f[g],l=i[p.materialIndex],E=Math.max(p.start,m.start),w=Math.min(r.count,Math.min(p.start+p.count,m.start+m.count));for(let S=E,T=w;S<T;S+=3){const D=r.getX(S),O=r.getX(S+1),B=r.getX(S+2);o=rr(this,l,e,pn,c,h,d,D,O,B),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const g=Math.max(0,m.start),y=Math.min(r.count,m.start+m.count);for(let p=g,l=y;p<l;p+=3){const E=r.getX(p),w=r.getX(p+1),S=r.getX(p+2);o=rr(this,i,e,pn,c,h,d,E,w,S),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}else if(u!==void 0)if(Array.isArray(i))for(let g=0,y=f.length;g<y;g++){const p=f[g],l=i[p.materialIndex],E=Math.max(p.start,m.start),w=Math.min(u.count,Math.min(p.start+p.count,m.start+m.count));for(let S=E,T=w;S<T;S+=3){const D=S,O=S+1,B=S+2;o=rr(this,l,e,pn,c,h,d,D,O,B),o&&(o.faceIndex=Math.floor(S/3),o.face.materialIndex=p.materialIndex,t.push(o))}}else{const g=Math.max(0,m.start),y=Math.min(u.count,m.start+m.count);for(let p=g,l=y;p<l;p+=3){const E=p,w=p+1,S=p+2;o=rr(this,i,e,pn,c,h,d,E,w,S),o&&(o.faceIndex=Math.floor(p/3),t.push(o))}}}}function Uh(a,e,t,n,i,s,o,r){let u;if(e.side===jt?u=n.intersectTriangle(o,s,i,!0,r):u=n.intersectTriangle(i,s,o,e.side===In,r),u===null)return null;sr.copy(r),sr.applyMatrix4(a.matrixWorld);const c=t.ray.origin.distanceTo(sr);return c<t.near||c>t.far?null:{distance:c,point:sr.clone(),object:a}}function rr(a,e,t,n,i,s,o,r,u,c){a.getVertexPosition(r,Fi),a.getVertexPosition(u,Bi),a.getVertexPosition(c,zi);const h=Uh(a,e,t,n,Fi,Bi,zi,ir);if(h){i&&(er.fromBufferAttribute(i,r),tr.fromBufferAttribute(i,u),nr.fromBufferAttribute(i,c),h.uv=tn.getInterpolation(ir,Fi,Bi,zi,er,tr,nr,new De)),s&&(er.fromBufferAttribute(s,r),tr.fromBufferAttribute(s,u),nr.fromBufferAttribute(s,c),h.uv2=tn.getInterpolation(ir,Fi,Bi,zi,er,tr,nr,new De)),o&&(hl.fromBufferAttribute(o,r),dl.fromBufferAttribute(o,u),fl.fromBufferAttribute(o,c),h.normal=tn.getInterpolation(ir,Fi,Bi,zi,hl,dl,fl,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:r,b:u,c,normal:new P,materialIndex:0};tn.getNormal(Fi,Bi,zi,d.normal),h.face=d}return h}class cs extends bt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const r=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const u=[],c=[],h=[],d=[];let f=0,m=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(u),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(d,2));function g(y,p,l,E,w,S,T,D,O,B,M){const C=S/O,ee=T/B,Y=S/2,N=T/2,k=D/2,V=O+1,ne=B+1;let ie=0,J=0;const oe=new P;for(let re=0;re<ne;re++){const Ie=re*ee-N;for(let ce=0;ce<V;ce++){const X=ce*C-Y;oe[y]=X*E,oe[p]=Ie*w,oe[l]=k,c.push(oe.x,oe.y,oe.z),oe[y]=0,oe[p]=0,oe[l]=D>0?1:-1,h.push(oe.x,oe.y,oe.z),d.push(ce/O),d.push(1-re/B),ie+=1}}for(let re=0;re<B;re++)for(let Ie=0;Ie<O;Ie++){const ce=f+Ie+V*re,X=f+Ie+V*(re+1),Q=f+(Ie+1)+V*(re+1),de=f+(Ie+1)+V*re;u.push(ce,X,de),u.push(X,Q,de),J+=6}r.addGroup(m,J,M),m+=J,f+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function os(a){const e={};for(const t in a){e[t]={};for(const n in a[t]){const i=a[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function kt(a){const e={};for(let t=0;t<a.length;t++){const n=os(a[t]);for(const i in n)e[i]=n[i]}return e}function Oh(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function Uc(a){return a.getRenderTarget()===null&&a.outputEncoding===Qe?mn:Ps}const Nh={clone:os,merge:kt};var Fh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gi extends hn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fh,this.fragmentShader=Bh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=Oh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class no extends ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ht extends no{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=as*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($i*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return as*2*Math.atan(Math.tan($i*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($i*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/u,t-=o.offsetY*n/c,i*=o.width/u,n*=o.height/c}const r=this.filmOffset;r!==0&&(s+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ki=-90,Hi=1;class zh extends ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Ht(ki,Hi,e,t);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const s=new Ht(ki,Hi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new Ht(ki,Hi,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const r=new Ht(ki,Hi,e,t);r.layers=this.layers,r.up.set(0,0,1),r.lookAt(0,-1,0),this.add(r);const u=new Ht(ki,Hi,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,1),this.add(u);const c=new Ht(ki,Hi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,s,o,r,u,c]=this.children,h=e.getRenderTarget(),d=e.toneMapping,f=e.xr.enabled;e.toneMapping=Rn,e.xr.enabled=!1;const m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,i),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,r),e.setRenderTarget(n,4),e.render(t,u),n.texture.generateMipmaps=m,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=d,e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}}class Oc extends It{constructor(e,t,n,i,s,o,r,u,c,h){e=e!==void 0?e:[],t=t!==void 0?t:ts,super(e,t,n,i,s,o,r,u,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kh extends mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Oc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new cs(5,5,5),s=new gi({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jt,blending:Xn});s.uniforms.tEquirect.value=t;const o=new Fe(i,s),r=t.minFilter;return t.minFilter===di&&(t.minFilter=qt),new zh(1,10,this).update(e,o),t.minFilter=r,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}const Sa=new P,Hh=new P,Gh=new qe;class ii{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Sa.subVectors(n,t).cross(Hh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Sa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Gh.getNormalMatrix(e),i=this.coplanarPoint(Sa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ti=new Un,ar=new P;class io{constructor(e=new ii,t=new ii,n=new ii,i=new ii,s=new ii,o=new ii){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(i),r[4].copy(s),r[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,i=n[0],s=n[1],o=n[2],r=n[3],u=n[4],c=n[5],h=n[6],d=n[7],f=n[8],m=n[9],g=n[10],y=n[11],p=n[12],l=n[13],E=n[14],w=n[15];return t[0].setComponents(r-i,d-u,y-f,w-p).normalize(),t[1].setComponents(r+i,d+u,y+f,w+p).normalize(),t[2].setComponents(r+s,d+c,y+m,w+l).normalize(),t[3].setComponents(r-s,d-c,y-m,w-l).normalize(),t[4].setComponents(r-o,d-h,y-g,w-E).normalize(),t[5].setComponents(r+o,d+h,y+g,w+E).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ti)}intersectsSprite(e){return ti.center.set(0,0,0),ti.radius=.7071067811865476,ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(ti)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ar.x=i.normal.x>0?e.max.x:e.min.x,ar.y=i.normal.y>0?e.max.y:e.min.y,ar.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ar)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nc(){let a=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=a.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=a.requestAnimationFrame(i),e=!0)},stop:function(){a.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){a=s}}}function Vh(a,e){const t=e.isWebGL2,n=new WeakMap;function i(c,h){const d=c.array,f=c.usage,m=a.createBuffer();a.bindBuffer(h,m),a.bufferData(h,d,f),c.onUploadCallback();let g;if(d instanceof Float32Array)g=5126;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(d instanceof Int16Array)g=5122;else if(d instanceof Uint32Array)g=5125;else if(d instanceof Int32Array)g=5124;else if(d instanceof Int8Array)g=5120;else if(d instanceof Uint8Array)g=5121;else if(d instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:m,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,d){const f=h.array,m=h.updateRange;a.bindBuffer(d,c),m.count===-1?a.bufferSubData(d,0,f):(t?a.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):a.bufferSubData(d,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function r(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h&&(a.deleteBuffer(h.buffer),n.delete(c))}function u(c,h){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);d===void 0?n.set(c,i(c,h)):d.version<c.version&&(s(d.buffer,c,h),d.version=c.version)}return{get:o,remove:r,update:u}}class qn extends bt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,r=Math.floor(n),u=Math.floor(i),c=r+1,h=u+1,d=e/r,f=t/u,m=[],g=[],y=[],p=[];for(let l=0;l<h;l++){const E=l*f-o;for(let w=0;w<c;w++){const S=w*d-s;g.push(S,-E,0),y.push(0,0,1),p.push(w/r),p.push(1-l/u)}}for(let l=0;l<u;l++)for(let E=0;E<r;E++){const w=E+c*l,S=E+c*(l+1),T=E+1+c*(l+1),D=E+1+c*l;m.push(w,S,D),m.push(S,T,D)}this.setIndex(m),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(y,3)),this.setAttribute("uv",new Nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Wh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qh=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,jh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yh="vec3 transformed = vec3( position );",$h=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Qh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ed=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,td=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,cd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ud=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hd=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,dd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,md=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gd="gl_FragColor = linearToOutputTexel( gl_FragColor );",yd=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_d=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,vd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,xd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Td=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ed=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ad=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ld=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Dd=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,Ud=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Od=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Fd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif`,zd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Vd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,jd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Yd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ef=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,tf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,nf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,rf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,of=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,hf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,df=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ff=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,gf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_f=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,bf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ef=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Af=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Cf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Rf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,If=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Df=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,Of=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Nf=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ff=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_UV2
	attribute vec2 uv2;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bf=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,zf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const kf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qf=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Kf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$f=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Jf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ep=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ip=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,op=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,mp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,_p=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ke={alphamap_fragment:Wh,alphamap_pars_fragment:Xh,alphatest_fragment:qh,alphatest_pars_fragment:jh,aomap_fragment:Kh,aomap_pars_fragment:Zh,begin_vertex:Yh,beginnormal_vertex:$h,bsdfs:Jh,iridescence_fragment:Qh,bumpmap_pars_fragment:ed,clipping_planes_fragment:td,clipping_planes_pars_fragment:nd,clipping_planes_pars_vertex:id,clipping_planes_vertex:sd,color_fragment:rd,color_pars_fragment:ad,color_pars_vertex:od,color_vertex:ld,common:cd,cube_uv_reflection_fragment:ud,defaultnormal_vertex:hd,displacementmap_pars_vertex:dd,displacementmap_vertex:fd,emissivemap_fragment:pd,emissivemap_pars_fragment:md,encodings_fragment:gd,encodings_pars_fragment:yd,envmap_fragment:_d,envmap_common_pars_fragment:vd,envmap_pars_fragment:xd,envmap_pars_vertex:Sd,envmap_physical_pars_fragment:Dd,envmap_vertex:Md,fog_vertex:bd,fog_pars_vertex:wd,fog_fragment:Td,fog_pars_fragment:Ed,gradientmap_pars_fragment:Ad,lightmap_fragment:Cd,lightmap_pars_fragment:Ld,lights_lambert_fragment:Rd,lights_lambert_pars_fragment:Id,lights_pars_begin:Pd,lights_toon_fragment:Ud,lights_toon_pars_fragment:Od,lights_phong_fragment:Nd,lights_phong_pars_fragment:Fd,lights_physical_fragment:Bd,lights_physical_pars_fragment:zd,lights_fragment_begin:kd,lights_fragment_maps:Hd,lights_fragment_end:Gd,logdepthbuf_fragment:Vd,logdepthbuf_pars_fragment:Wd,logdepthbuf_pars_vertex:Xd,logdepthbuf_vertex:qd,map_fragment:jd,map_pars_fragment:Kd,map_particle_fragment:Zd,map_particle_pars_fragment:Yd,metalnessmap_fragment:$d,metalnessmap_pars_fragment:Jd,morphcolor_vertex:Qd,morphnormal_vertex:ef,morphtarget_pars_vertex:tf,morphtarget_vertex:nf,normal_fragment_begin:sf,normal_fragment_maps:rf,normal_pars_fragment:af,normal_pars_vertex:of,normal_vertex:lf,normalmap_pars_fragment:cf,clearcoat_normal_fragment_begin:uf,clearcoat_normal_fragment_maps:hf,clearcoat_pars_fragment:df,iridescence_pars_fragment:ff,output_fragment:pf,packing:mf,premultiplied_alpha_fragment:gf,project_vertex:yf,dithering_fragment:_f,dithering_pars_fragment:vf,roughnessmap_fragment:xf,roughnessmap_pars_fragment:Sf,shadowmap_pars_fragment:Mf,shadowmap_pars_vertex:bf,shadowmap_vertex:wf,shadowmask_pars_fragment:Tf,skinbase_vertex:Ef,skinning_pars_vertex:Af,skinning_vertex:Cf,skinnormal_vertex:Lf,specularmap_fragment:Rf,specularmap_pars_fragment:If,tonemapping_fragment:Pf,tonemapping_pars_fragment:Df,transmission_fragment:Uf,transmission_pars_fragment:Of,uv_pars_fragment:Nf,uv_pars_vertex:Ff,uv_vertex:Bf,worldpos_vertex:zf,background_vert:kf,background_frag:Hf,backgroundCube_vert:Gf,backgroundCube_frag:Vf,cube_vert:Wf,cube_frag:Xf,depth_vert:qf,depth_frag:jf,distanceRGBA_vert:Kf,distanceRGBA_frag:Zf,equirect_vert:Yf,equirect_frag:$f,linedashed_vert:Jf,linedashed_frag:Qf,meshbasic_vert:ep,meshbasic_frag:tp,meshlambert_vert:np,meshlambert_frag:ip,meshmatcap_vert:sp,meshmatcap_frag:rp,meshnormal_vert:ap,meshnormal_frag:op,meshphong_vert:lp,meshphong_frag:cp,meshphysical_vert:up,meshphysical_frag:hp,meshtoon_vert:dp,meshtoon_frag:fp,points_vert:pp,points_frag:mp,shadow_vert:gp,shadow_frag:yp,sprite_vert:_p,sprite_frag:vp},he={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaTest:{value:0}}},yn={basic:{uniforms:kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Le(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:kt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:kt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:kt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Le(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:kt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:kt([he.points,he.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:kt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:kt([he.common,he.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:kt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:kt([he.sprite,he.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:kt([he.common,he.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:kt([he.lights,he.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};yn.physical={uniforms:kt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const or={r:0,b:0,g:0};function xp(a,e,t,n,i,s,o){const r=new Le(0);let u=s===!0?0:1,c,h,d=null,f=0,m=null;function g(p,l){let E=!1,w=l.isScene===!0?l.background:null;w&&w.isTexture&&(w=(l.backgroundBlurriness>0?t:e).get(w));const S=a.xr,T=S.getSession&&S.getSession();T&&T.environmentBlendMode==="additive"&&(w=null),w===null?y(r,u):w&&w.isColor&&(y(w,1),E=!0),(a.autoClear||E)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Ar)?(h===void 0&&(h=new Fe(new cs(1,1,1),new gi({name:"BackgroundCubeMaterial",uniforms:os(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,O,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=l.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=l.backgroundIntensity,h.material.toneMapped=w.encoding!==Qe,(d!==w||f!==w.version||m!==a.toneMapping)&&(h.material.needsUpdate=!0,d=w,f=w.version,m=a.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Fe(new qn(2,2),new gi({name:"BackgroundMaterial",uniforms:os(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=l.backgroundIntensity,c.material.toneMapped=w.encoding!==Qe,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||m!==a.toneMapping)&&(c.material.needsUpdate=!0,d=w,f=w.version,m=a.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function y(p,l){p.getRGB(or,Uc(a)),n.buffers.color.setClear(or.r,or.g,or.b,l,o)}return{getClearColor:function(){return r},setClearColor:function(p,l=1){r.set(p),u=l,y(r,u)},getClearAlpha:function(){return u},setClearAlpha:function(p){u=p,y(r,u)},render:g}}function Sp(a,e,t,n){const i=a.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,r={},u=p(null);let c=u,h=!1;function d(k,V,ne,ie,J){let oe=!1;if(o){const re=y(ie,ne,V);c!==re&&(c=re,m(c.object)),oe=l(k,ie,ne,J),oe&&E(k,ie,ne,J)}else{const re=V.wireframe===!0;(c.geometry!==ie.id||c.program!==ne.id||c.wireframe!==re)&&(c.geometry=ie.id,c.program=ne.id,c.wireframe=re,oe=!0)}J!==null&&t.update(J,34963),(oe||h)&&(h=!1,B(k,V,ne,ie),J!==null&&a.bindBuffer(34963,t.get(J).buffer))}function f(){return n.isWebGL2?a.createVertexArray():s.createVertexArrayOES()}function m(k){return n.isWebGL2?a.bindVertexArray(k):s.bindVertexArrayOES(k)}function g(k){return n.isWebGL2?a.deleteVertexArray(k):s.deleteVertexArrayOES(k)}function y(k,V,ne){const ie=ne.wireframe===!0;let J=r[k.id];J===void 0&&(J={},r[k.id]=J);let oe=J[V.id];oe===void 0&&(oe={},J[V.id]=oe);let re=oe[ie];return re===void 0&&(re=p(f()),oe[ie]=re),re}function p(k){const V=[],ne=[],ie=[];for(let J=0;J<i;J++)V[J]=0,ne[J]=0,ie[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ne,attributeDivisors:ie,object:k,attributes:{},index:null}}function l(k,V,ne,ie){const J=c.attributes,oe=V.attributes;let re=0;const Ie=ne.getAttributes();for(const ce in Ie)if(Ie[ce].location>=0){const Q=J[ce];let de=oe[ce];if(de===void 0&&(ce==="instanceMatrix"&&k.instanceMatrix&&(de=k.instanceMatrix),ce==="instanceColor"&&k.instanceColor&&(de=k.instanceColor)),Q===void 0||Q.attribute!==de||de&&Q.data!==de.data)return!0;re++}return c.attributesNum!==re||c.index!==ie}function E(k,V,ne,ie){const J={},oe=V.attributes;let re=0;const Ie=ne.getAttributes();for(const ce in Ie)if(Ie[ce].location>=0){let Q=oe[ce];Q===void 0&&(ce==="instanceMatrix"&&k.instanceMatrix&&(Q=k.instanceMatrix),ce==="instanceColor"&&k.instanceColor&&(Q=k.instanceColor));const de={};de.attribute=Q,Q&&Q.data&&(de.data=Q.data),J[ce]=de,re++}c.attributes=J,c.attributesNum=re,c.index=ie}function w(){const k=c.newAttributes;for(let V=0,ne=k.length;V<ne;V++)k[V]=0}function S(k){T(k,0)}function T(k,V){const ne=c.newAttributes,ie=c.enabledAttributes,J=c.attributeDivisors;ne[k]=1,ie[k]===0&&(a.enableVertexAttribArray(k),ie[k]=1),J[k]!==V&&((n.isWebGL2?a:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](k,V),J[k]=V)}function D(){const k=c.newAttributes,V=c.enabledAttributes;for(let ne=0,ie=V.length;ne<ie;ne++)V[ne]!==k[ne]&&(a.disableVertexAttribArray(ne),V[ne]=0)}function O(k,V,ne,ie,J,oe){n.isWebGL2===!0&&(ne===5124||ne===5125)?a.vertexAttribIPointer(k,V,ne,J,oe):a.vertexAttribPointer(k,V,ne,ie,J,oe)}function B(k,V,ne,ie){if(n.isWebGL2===!1&&(k.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const J=ie.attributes,oe=ne.getAttributes(),re=V.defaultAttributeValues;for(const Ie in oe){const ce=oe[Ie];if(ce.location>=0){let X=J[Ie];if(X===void 0&&(Ie==="instanceMatrix"&&k.instanceMatrix&&(X=k.instanceMatrix),Ie==="instanceColor"&&k.instanceColor&&(X=k.instanceColor)),X!==void 0){const Q=X.normalized,de=X.itemSize,ye=t.get(X);if(ye===void 0)continue;const G=ye.buffer,Ue=ye.type,Re=ye.bytesPerElement;if(X.isInterleavedBufferAttribute){const ue=X.data,Ae=ue.stride,Je=X.offset;if(ue.isInstancedInterleavedBuffer){for(let be=0;be<ce.locationSize;be++)T(ce.location+be,ue.meshPerAttribute);k.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let be=0;be<ce.locationSize;be++)S(ce.location+be);a.bindBuffer(34962,G);for(let be=0;be<ce.locationSize;be++)O(ce.location+be,de/ce.locationSize,Ue,Q,Ae*Re,(Je+de/ce.locationSize*be)*Re)}else{if(X.isInstancedBufferAttribute){for(let ue=0;ue<ce.locationSize;ue++)T(ce.location+ue,X.meshPerAttribute);k.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let ue=0;ue<ce.locationSize;ue++)S(ce.location+ue);a.bindBuffer(34962,G);for(let ue=0;ue<ce.locationSize;ue++)O(ce.location+ue,de/ce.locationSize,Ue,Q,de*Re,de/ce.locationSize*ue*Re)}}else if(re!==void 0){const Q=re[Ie];if(Q!==void 0)switch(Q.length){case 2:a.vertexAttrib2fv(ce.location,Q);break;case 3:a.vertexAttrib3fv(ce.location,Q);break;case 4:a.vertexAttrib4fv(ce.location,Q);break;default:a.vertexAttrib1fv(ce.location,Q)}}}}D()}function M(){Y();for(const k in r){const V=r[k];for(const ne in V){const ie=V[ne];for(const J in ie)g(ie[J].object),delete ie[J];delete V[ne]}delete r[k]}}function C(k){if(r[k.id]===void 0)return;const V=r[k.id];for(const ne in V){const ie=V[ne];for(const J in ie)g(ie[J].object),delete ie[J];delete V[ne]}delete r[k.id]}function ee(k){for(const V in r){const ne=r[V];if(ne[k.id]===void 0)continue;const ie=ne[k.id];for(const J in ie)g(ie[J].object),delete ie[J];delete ne[k.id]}}function Y(){N(),h=!0,c!==u&&(c=u,m(c.object))}function N(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:N,dispose:M,releaseStatesOfGeometry:C,releaseStatesOfProgram:ee,initAttributes:w,enableAttribute:S,disableUnusedAttributes:D}}function Mp(a,e,t,n){const i=n.isWebGL2;let s;function o(c){s=c}function r(c,h){a.drawArrays(s,c,h),t.update(h,s,1)}function u(c,h,d){if(d===0)return;let f,m;if(i)f=a,m="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,c,h,d),t.update(h,s,d)}this.setMode=o,this.render=r,this.renderInstances=u}function bp(a,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");n=a.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(O){if(O==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&a.constructor.name==="WebGL2RenderingContext";let r=t.precision!==void 0?t.precision:"highp";const u=s(r);u!==r&&(console.warn("THREE.WebGLRenderer:",r,"not supported, using",u,"instead."),r=u);const c=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,d=a.getParameter(34930),f=a.getParameter(35660),m=a.getParameter(3379),g=a.getParameter(34076),y=a.getParameter(34921),p=a.getParameter(36347),l=a.getParameter(36348),E=a.getParameter(36349),w=f>0,S=o||e.has("OES_texture_float"),T=w&&S,D=o?a.getParameter(36183):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:r,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:g,maxAttributes:y,maxVertexUniforms:p,maxVaryings:l,maxFragmentUniforms:E,vertexTextures:w,floatFragmentTextures:S,floatVertexTextures:T,maxSamples:D}}function wp(a){const e=this;let t=null,n=0,i=!1,s=!1;const o=new ii,r=new qe,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const m=d.length!==0||f||n!==0||i;return i=f,n=d.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,m){const g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,l=a.get(d);if(!i||g===null||g.length===0||s&&!p)s?h(null):c();else{const E=s?0:n,w=E*4;let S=l.clippingState||null;u.value=S,S=h(g,f,w,m);for(let T=0;T!==w;++T)S[T]=t[T];l.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=E}};function c(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,m,g){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=u.value,g!==!0||p===null){const l=m+y*4,E=f.matrixWorldInverse;r.getNormalMatrix(E),(p===null||p.length<l)&&(p=new Float32Array(l));for(let w=0,S=m;w!==y;++w,S+=4)o.copy(d[w]).applyMatrix4(E,r),o.normal.toArray(p,S),p[S+3]=o.constant}u.value=p,u.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}function Tp(a){let e=new WeakMap;function t(o,r){return r===Fa?o.mapping=ts:r===Ba&&(o.mapping=ns),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const r=o.mapping;if(r===Fa||r===Ba)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const c=new kh(u.height/2);return c.fromEquirectangularTexture(a,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const r=o.target;r.removeEventListener("dispose",i);const u=e.get(r);u!==void 0&&(e.delete(r),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class so extends no{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,r=i+t,u=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,r-=h*this.view.offsetY,u=r-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,r,u,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ji=4,pl=[.125,.215,.35,.446,.526,.582],ai=20,Ma=new so,ml=new Le;let ba=null;const si=(1+Math.sqrt(5))/2,Gi=1/si,gl=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,si,Gi),new P(0,si,-Gi),new P(Gi,0,si),new P(-Gi,0,si),new P(si,Gi,0),new P(-si,Gi,0)];class yl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ba=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ba),e.scissorTest=!1,lr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ts||e.mapping===ns?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ba=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Rs,format:sn,encoding:pi,depthBuffer:!1},i=_l(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_l(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ep(s)),this._blurMaterial=Ap(s,e,t)}return i}_compileMaterial(e){const t=new Fe(this._lodPlanes[0],e);this._renderer.compile(t,Ma)}_sceneToCubeUV(e,t,n,i){const r=new Ht(90,1,t,n),u=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(ml),h.toneMapping=Rn,h.autoClear=!1;const m=new li({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),g=new Fe(new cs,m);let y=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,y=!0):(m.color.copy(ml),y=!0);for(let l=0;l<6;l++){const E=l%3;E===0?(r.up.set(0,u[l],0),r.lookAt(c[l],0,0)):E===1?(r.up.set(0,0,u[l]),r.lookAt(0,c[l],0)):(r.up.set(0,u[l],0),r.lookAt(0,0,c[l]));const w=this._cubeSize;lr(i,E*w,l>2?w:0,w,w),h.setRenderTarget(i),y&&h.render(g,r),h.render(e,r)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ts||e.mapping===ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Fe(this._lodPlanes[0],s),r=s.uniforms;r.envMap.value=e;const u=this._cubeSize;lr(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(o,Ma)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const s=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=gl[(i-1)%gl.length];this._blur(e,i-1,i,s,o)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,r){const u=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Fe(this._lodPlanes[i],c),f=c.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ai-1),y=s/g,p=isFinite(s)?1+Math.floor(h*y):ai;p>ai&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ai}`);const l=[];let E=0;for(let O=0;O<ai;++O){const B=O/y,M=Math.exp(-B*B/2);l.push(M),O===0?E+=M:O<p&&(E+=2*M)}for(let O=0;O<l.length;O++)l[O]=l[O]/E;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=l,f.latitudinal.value=o==="latitudinal",r&&(f.poleAxis.value=r);const{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-n;const S=this._sizeLods[i],T=3*S*(i>w-ji?i-w+ji:0),D=4*(this._cubeSize-S);lr(t,T,D,3*S,2*S),u.setRenderTarget(t),u.render(d,Ma)}}function Ep(a){const e=[],t=[],n=[];let i=a;const s=a-ji+1+pl.length;for(let o=0;o<s;o++){const r=Math.pow(2,i);t.push(r);let u=1/r;o>a-ji?u=pl[o-a+ji-1]:o===0&&(u=0),n.push(u);const c=1/(r-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],m=6,g=6,y=3,p=2,l=1,E=new Float32Array(y*g*m),w=new Float32Array(p*g*m),S=new Float32Array(l*g*m);for(let D=0;D<m;D++){const O=D%3*2/3-1,B=D>2?0:-1,M=[O,B,0,O+2/3,B,0,O+2/3,B+1,0,O,B,0,O+2/3,B+1,0,O,B+1,0];E.set(M,y*g*D),w.set(f,p*g*D);const C=[D,D,D,D,D,D];S.set(C,l*g*D)}const T=new bt;T.setAttribute("position",new Gt(E,y)),T.setAttribute("uv",new Gt(w,p)),T.setAttribute("faceIndex",new Gt(S,l)),e.push(T),i>ji&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function _l(a,e,t){const n=new mi(a,e,t);return n.texture.mapping=Ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lr(a,e,t,n,i){a.viewport.set(e,t,n,i),a.scissor.set(e,t,n,i)}function Ap(a,e,t){const n=new Float32Array(ai),i=new P(0,1,0);return new gi({name:"SphericalGaussianBlur",defines:{n:ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function vl(){return new gi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function xl(){return new gi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ro(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xn,depthTest:!1,depthWrite:!1})}function ro(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Cp(a){let e=new WeakMap,t=null;function n(r){if(r&&r.isTexture){const u=r.mapping,c=u===Fa||u===Ba,h=u===ts||u===ns;if(c||h)if(r.isRenderTargetTexture&&r.needsPMREMUpdate===!0){r.needsPMREMUpdate=!1;let d=e.get(r);return t===null&&(t=new yl(a)),d=c?t.fromEquirectangular(r,d):t.fromCubemap(r,d),e.set(r,d),d.texture}else{if(e.has(r))return e.get(r).texture;{const d=r.image;if(c&&d&&d.height>0||h&&d&&i(d)){t===null&&(t=new yl(a));const f=c?t.fromEquirectangular(r):t.fromCubemap(r);return e.set(r,f),r.addEventListener("dispose",s),f.texture}else return null}}}return r}function i(r){let u=0;const c=6;for(let h=0;h<c;h++)r[h]!==void 0&&u++;return u===c}function s(r){const u=r.target;u.removeEventListener("dispose",s);const c=e.get(u);c!==void 0&&(e.delete(u),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Lp(a){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=a.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Rp(a,e,t,n){const i={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function r(d,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function u(d){const f=d.attributes;for(const g in f)e.update(f[g],34962);const m=d.morphAttributes;for(const g in m){const y=m[g];for(let p=0,l=y.length;p<l;p++)e.update(y[p],34962)}}function c(d){const f=[],m=d.index,g=d.attributes.position;let y=0;if(m!==null){const E=m.array;y=m.version;for(let w=0,S=E.length;w<S;w+=3){const T=E[w+0],D=E[w+1],O=E[w+2];f.push(T,D,D,O,O,T)}}else{const E=g.array;y=g.version;for(let w=0,S=E.length/3-1;w<S;w+=3){const T=w+0,D=w+1,O=w+2;f.push(T,D,D,O,O,T)}}const p=new(Ac(f)?Dc:Pc)(f,1);p.version=y;const l=s.get(d);l&&e.remove(l),s.set(d,p)}function h(d){const f=s.get(d);if(f){const m=d.index;m!==null&&f.version<m.version&&c(d)}else c(d);return s.get(d)}return{get:r,update:u,getWireframeAttribute:h}}function Ip(a,e,t,n){const i=n.isWebGL2;let s;function o(f){s=f}let r,u;function c(f){r=f.type,u=f.bytesPerElement}function h(f,m){a.drawElements(s,m,r,f*u),t.update(m,s,1)}function d(f,m,g){if(g===0)return;let y,p;if(i)y=a,p="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[p](s,m,r,f*u,g),t.update(m,s,g)}this.setMode=o,this.setIndex=c,this.render=h,this.renderInstances=d}function Pp(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,r){switch(t.calls++,o){case 4:t.triangles+=r*(s/3);break;case 1:t.lines+=r*(s/2);break;case 3:t.lines+=r*(s-1);break;case 2:t.lines+=r*s;break;case 0:t.points+=r*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Dp(a,e){return a[0]-e[0]}function Up(a,e){return Math.abs(e[1])-Math.abs(a[1])}function Op(a,e,t){const n={},i=new Float32Array(8),s=new WeakMap,o=new st,r=[];for(let c=0;c<8;c++)r[c]=[c,0];function u(c,h,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,y=g!==void 0?g.length:0;let p=s.get(h);if(p===void 0||p.count!==y){let V=function(){N.dispose(),s.delete(h),h.removeEventListener("dispose",V)};var m=V;p!==void 0&&p.texture.dispose();const w=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,T=h.morphAttributes.color!==void 0,D=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],B=h.morphAttributes.color||[];let M=0;w===!0&&(M=1),S===!0&&(M=2),T===!0&&(M=3);let C=h.attributes.position.count*M,ee=1;C>e.maxTextureSize&&(ee=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const Y=new Float32Array(C*ee*4*y),N=new Rc(Y,C,ee,y);N.type=Wn,N.needsUpdate=!0;const k=M*4;for(let ne=0;ne<y;ne++){const ie=D[ne],J=O[ne],oe=B[ne],re=C*ee*4*ne;for(let Ie=0;Ie<ie.count;Ie++){const ce=Ie*k;w===!0&&(o.fromBufferAttribute(ie,Ie),Y[re+ce+0]=o.x,Y[re+ce+1]=o.y,Y[re+ce+2]=o.z,Y[re+ce+3]=0),S===!0&&(o.fromBufferAttribute(J,Ie),Y[re+ce+4]=o.x,Y[re+ce+5]=o.y,Y[re+ce+6]=o.z,Y[re+ce+7]=0),T===!0&&(o.fromBufferAttribute(oe,Ie),Y[re+ce+8]=o.x,Y[re+ce+9]=o.y,Y[re+ce+10]=o.z,Y[re+ce+11]=oe.itemSize===4?o.w:1)}}p={count:y,texture:N,size:new De(C,ee)},s.set(h,p),h.addEventListener("dispose",V)}let l=0;for(let w=0;w<f.length;w++)l+=f[w];const E=h.morphTargetsRelative?1:1-l;d.getUniforms().setValue(a,"morphTargetBaseInfluence",E),d.getUniforms().setValue(a,"morphTargetInfluences",f),d.getUniforms().setValue(a,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(a,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let y=n[h.id];if(y===void 0||y.length!==g){y=[];for(let S=0;S<g;S++)y[S]=[S,0];n[h.id]=y}for(let S=0;S<g;S++){const T=y[S];T[0]=S,T[1]=f[S]}y.sort(Up);for(let S=0;S<8;S++)S<g&&y[S][1]?(r[S][0]=y[S][0],r[S][1]=y[S][1]):(r[S][0]=Number.MAX_SAFE_INTEGER,r[S][1]=0);r.sort(Dp);const p=h.morphAttributes.position,l=h.morphAttributes.normal;let E=0;for(let S=0;S<8;S++){const T=r[S],D=T[0],O=T[1];D!==Number.MAX_SAFE_INTEGER&&O?(p&&h.getAttribute("morphTarget"+S)!==p[D]&&h.setAttribute("morphTarget"+S,p[D]),l&&h.getAttribute("morphNormal"+S)!==l[D]&&h.setAttribute("morphNormal"+S,l[D]),i[S]=O,E+=O):(p&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),l&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),i[S]=0)}const w=h.morphTargetsRelative?1:1-E;d.getUniforms().setValue(a,"morphTargetBaseInfluence",w),d.getUniforms().setValue(a,"morphTargetInfluences",i)}}return{update:u}}function Np(a,e,t,n){let i=new WeakMap;function s(u){const c=n.render.frame,h=u.geometry,d=e.get(u,h);return i.get(d)!==c&&(e.update(d),i.set(d,c)),u.isInstancedMesh&&(u.hasEventListener("dispose",r)===!1&&u.addEventListener("dispose",r),t.update(u.instanceMatrix,34962),u.instanceColor!==null&&t.update(u.instanceColor,34962)),d}function o(){i=new WeakMap}function r(u){const c=u.target;c.removeEventListener("dispose",r),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Fc=new It,Bc=new Rc,zc=new wh,kc=new Oc,Sl=[],Ml=[],bl=new Float32Array(16),wl=new Float32Array(9),Tl=new Float32Array(4);function us(a,e,t){const n=a[0];if(n<=0||n>0)return a;const i=e*t;let s=Sl[i];if(s===void 0&&(s=new Float32Array(i),Sl[i]=s),e!==0){n.toArray(s,0);for(let o=1,r=0;o!==e;++o)r+=t,a[o].toArray(s,r)}return s}function wt(a,e){if(a.length!==e.length)return!1;for(let t=0,n=a.length;t<n;t++)if(a[t]!==e[t])return!1;return!0}function Tt(a,e){for(let t=0,n=e.length;t<n;t++)a[t]=e[t]}function Rr(a,e){let t=Ml[e];t===void 0&&(t=new Int32Array(e),Ml[e]=t);for(let n=0;n!==e;++n)t[n]=a.allocateTextureUnit();return t}function Fp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function Bp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;a.uniform2fv(this.addr,e),Tt(t,e)}}function zp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;a.uniform3fv(this.addr,e),Tt(t,e)}}function kp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;a.uniform4fv(this.addr,e),Tt(t,e)}}function Hp(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;Tl.set(n),a.uniformMatrix2fv(this.addr,!1,Tl),Tt(t,n)}}function Gp(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;wl.set(n),a.uniformMatrix3fv(this.addr,!1,wl),Tt(t,n)}}function Vp(a,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;bl.set(n),a.uniformMatrix4fv(this.addr,!1,bl),Tt(t,n)}}function Wp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function Xp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;a.uniform2iv(this.addr,e),Tt(t,e)}}function qp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;a.uniform3iv(this.addr,e),Tt(t,e)}}function jp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;a.uniform4iv(this.addr,e),Tt(t,e)}}function Kp(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function Zp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;a.uniform2uiv(this.addr,e),Tt(t,e)}}function Yp(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;a.uniform3uiv(this.addr,e),Tt(t,e)}}function $p(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;a.uniform4uiv(this.addr,e),Tt(t,e)}}function Jp(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2D(e||Fc,i)}function Qp(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||zc,i)}function em(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||kc,i)}function tm(a,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(a.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Bc,i)}function nm(a){switch(a){case 5126:return Fp;case 35664:return Bp;case 35665:return zp;case 35666:return kp;case 35674:return Hp;case 35675:return Gp;case 35676:return Vp;case 5124:case 35670:return Wp;case 35667:case 35671:return Xp;case 35668:case 35672:return qp;case 35669:case 35673:return jp;case 5125:return Kp;case 36294:return Zp;case 36295:return Yp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return Jp;case 35679:case 36299:case 36307:return Qp;case 35680:case 36300:case 36308:case 36293:return em;case 36289:case 36303:case 36311:case 36292:return tm}}function im(a,e){a.uniform1fv(this.addr,e)}function sm(a,e){const t=us(e,this.size,2);a.uniform2fv(this.addr,t)}function rm(a,e){const t=us(e,this.size,3);a.uniform3fv(this.addr,t)}function am(a,e){const t=us(e,this.size,4);a.uniform4fv(this.addr,t)}function om(a,e){const t=us(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function lm(a,e){const t=us(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function cm(a,e){const t=us(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function um(a,e){a.uniform1iv(this.addr,e)}function hm(a,e){a.uniform2iv(this.addr,e)}function dm(a,e){a.uniform3iv(this.addr,e)}function fm(a,e){a.uniform4iv(this.addr,e)}function pm(a,e){a.uniform1uiv(this.addr,e)}function mm(a,e){a.uniform2uiv(this.addr,e)}function gm(a,e){a.uniform3uiv(this.addr,e)}function ym(a,e){a.uniform4uiv(this.addr,e)}function _m(a,e,t){const n=this.cache,i=e.length,s=Rr(t,i);wt(n,s)||(a.uniform1iv(this.addr,s),Tt(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Fc,s[o])}function vm(a,e,t){const n=this.cache,i=e.length,s=Rr(t,i);wt(n,s)||(a.uniform1iv(this.addr,s),Tt(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||zc,s[o])}function xm(a,e,t){const n=this.cache,i=e.length,s=Rr(t,i);wt(n,s)||(a.uniform1iv(this.addr,s),Tt(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||kc,s[o])}function Sm(a,e,t){const n=this.cache,i=e.length,s=Rr(t,i);wt(n,s)||(a.uniform1iv(this.addr,s),Tt(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Bc,s[o])}function Mm(a){switch(a){case 5126:return im;case 35664:return sm;case 35665:return rm;case 35666:return am;case 35674:return om;case 35675:return lm;case 35676:return cm;case 5124:case 35670:return um;case 35667:case 35671:return hm;case 35668:case 35672:return dm;case 35669:case 35673:return fm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return Sm}}class bm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=nm(t.type)}}class wm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Mm(t.type)}}class Tm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const r=i[s];r.setValue(e,t[r.id],n)}}}const wa=/(\w+)(\])?(\[|\.)?/g;function El(a,e){a.seq.push(e),a.map[e.id]=e}function Em(a,e,t){const n=a.name,i=n.length;for(wa.lastIndex=0;;){const s=wa.exec(n),o=wa.lastIndex;let r=s[1];const u=s[2]==="]",c=s[3];if(u&&(r=r|0),c===void 0||c==="["&&o+2===i){El(t,c===void 0?new bm(r,a,e):new wm(r,a,e));break}else{let d=t.map[r];d===void 0&&(d=new Tm(r),El(t,d)),t=d}}}class Mr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);Em(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const r=t[s],u=n[r.id];u.needsUpdate!==!1&&r.setValue(e,u.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function Al(a,e,t){const n=a.createShader(e);return a.shaderSource(n,t),a.compileShader(n),n}let Am=0;function Cm(a,e){const t=a.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const r=o+1;n.push(`${r===e?">":" "} ${r}: ${t[o]}`)}return n.join(`
`)}function Lm(a){switch(a){case pi:return["Linear","( value )"];case Qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Cl(a,e,t){const n=a.getShaderParameter(e,35713),i=a.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Cm(a.getShaderSource(e),o)}else return i}function Rm(a,e){const t=Lm(e);return"vec4 "+a+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Im(a,e){let t;switch(e){case Iu:t="Linear";break;case Pu:t="Reinhard";break;case Du:t="OptimizedCineon";break;case Uu:t="ACESFilmic";break;case Ou:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Pm(a){return[a.extensionDerivatives||a.envMapCubeUVHeight||a.bumpMap||a.normalMapTangentSpace||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap||a.transmission)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(As).join(`
`)}function Dm(a){const e=[];for(const t in a){const n=a[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Um(a,e){const t={},n=a.getProgramParameter(e,35721);for(let i=0;i<n;i++){const s=a.getActiveAttrib(e,i),o=s.name;let r=1;s.type===35674&&(r=2),s.type===35675&&(r=3),s.type===35676&&(r=4),t[o]={type:s.type,location:a.getAttribLocation(e,o),locationSize:r}}return t}function As(a){return a!==""}function Ll(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rl(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Om=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wa(a){return a.replace(Om,Nm)}function Nm(a,e){const t=ke[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Wa(t)}const Fm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Il(a){return a.replace(Fm,Bm)}function Bm(a,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Pl(a){let e="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function zm(a){let e="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===yc?e="SHADOWMAP_TYPE_PCF":a.shadowMapType===cu?e="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===Es&&(e="SHADOWMAP_TYPE_VSM"),e}function km(a){let e="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case ts:case ns:e="ENVMAP_TYPE_CUBE";break;case Ar:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hm(a){let e="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case ns:e="ENVMAP_MODE_REFRACTION";break}return e}function Gm(a){let e="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case Ja:e="ENVMAP_BLENDING_MULTIPLY";break;case Lu:e="ENVMAP_BLENDING_MIX";break;case Ru:e="ENVMAP_BLENDING_ADD";break}return e}function Vm(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Wm(a,e,t,n){const i=a.getContext(),s=t.defines;let o=t.vertexShader,r=t.fragmentShader;const u=zm(t),c=km(t),h=Hm(t),d=Gm(t),f=Vm(t),m=t.isWebGL2?"":Pm(t),g=Dm(s),y=i.createProgram();let p,l,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[g].filter(As).join(`
`),p.length>0&&(p+=`
`),l=[m,g].filter(As).join(`
`),l.length>0&&(l+=`
`)):(p=[Pl(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),l=[m,Pl(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs2?"#define USE_UV2":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rn?"#define TONE_MAPPING":"",t.toneMapping!==Rn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Rn?Im("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.encodings_pars_fragment,Rm("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(As).join(`
`)),o=Wa(o),o=Ll(o,t),o=Rl(o,t),r=Wa(r),r=Ll(r,t),r=Rl(r,t),o=Il(o),r=Il(r),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,l=["#define varying in",t.glslVersion===Jo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+l);const w=E+p+o,S=E+l+r,T=Al(i,35633,w),D=Al(i,35632,S);if(i.attachShader(y,T),i.attachShader(y,D),t.index0AttributeName!==void 0?i.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(y,0,"position"),i.linkProgram(y),a.debug.checkShaderErrors){const M=i.getProgramInfoLog(y).trim(),C=i.getShaderInfoLog(T).trim(),ee=i.getShaderInfoLog(D).trim();let Y=!0,N=!0;if(i.getProgramParameter(y,35714)===!1)if(Y=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(i,y,T,D);else{const k=Cl(i,T,"vertex"),V=Cl(i,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(y,35715)+`

Program Info Log: `+M+`
`+k+`
`+V)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(C===""||ee==="")&&(N=!1);N&&(this.diagnostics={runnable:Y,programLog:M,vertexShader:{log:C,prefix:p},fragmentShader:{log:ee,prefix:l}})}i.deleteShader(T),i.deleteShader(D);let O;this.getUniforms=function(){return O===void 0&&(O=new Mr(i,y)),O};let B;return this.getAttributes=function(){return B===void 0&&(B=Um(i,y)),B},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(y),this.program=void 0},this.name=t.shaderName,this.id=Am++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=D,this}let Xm=0;class qm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new jm(e),t.set(e,n)),n}}class jm{constructor(e){this.id=Xm++,this.code=e,this.usedTimes=0}}function Km(a,e,t,n,i,s,o){const r=new to,u=new qm,c=[],h=i.isWebGL2,d=i.logarithmicDepthBuffer,f=i.vertexTextures;let m=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===1?"uv2":"uv"}function p(M,C,ee,Y,N){const k=Y.fog,V=N.geometry,ne=M.isMeshStandardMaterial?Y.environment:null,ie=(M.isMeshStandardMaterial?t:e).get(M.envMap||ne),J=ie&&ie.mapping===Ar?ie.image.height:null,oe=g[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const re=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ie=re!==void 0?re.length:0;let ce=0;V.morphAttributes.position!==void 0&&(ce=1),V.morphAttributes.normal!==void 0&&(ce=2),V.morphAttributes.color!==void 0&&(ce=3);let X,Q,de,ye;if(oe){const ve=yn[oe];X=ve.vertexShader,Q=ve.fragmentShader}else X=M.vertexShader,Q=M.fragmentShader,u.update(M),de=u.getVertexShaderID(M),ye=u.getFragmentShaderID(M);const G=a.getRenderTarget(),Ue=N.isInstancedMesh===!0,Re=!!M.map,ue=!!M.matcap,Ae=!!ie,Je=!!M.aoMap,be=!!M.lightMap,Be=!!M.bumpMap,dt=!!M.normalMap,lt=!!M.displacementMap,_t=!!M.emissiveMap,pt=!!M.metalnessMap,$e=!!M.roughnessMap,rt=M.clearcoat>0,Pt=M.iridescence>0,A=M.sheen>0,x=M.transmission>0,W=rt&&!!M.clearcoatMap,te=rt&&!!M.clearcoatNormalMap,ae=rt&&!!M.clearcoatRoughnessMap,fe=Pt&&!!M.iridescenceMap,R=Pt&&!!M.iridescenceThicknessMap,$=A&&!!M.sheenColorMap,H=A&&!!M.sheenRoughnessMap,pe=!!M.specularMap,xe=!!M.specularColorMap,Me=!!M.specularIntensityMap,_e=x&&!!M.transmissionMap,Se=x&&!!M.thicknessMap,Oe=!!M.gradientMap,Ge=!!M.alphaMap,mt=M.alphaTest>0,U=!!M.extensions,j=!!V.attributes.uv2;return{isWebGL2:h,shaderID:oe,shaderName:M.type,vertexShader:X,fragmentShader:Q,defines:M.defines,customVertexShaderID:de,customFragmentShaderID:ye,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:Ue,instancingColor:Ue&&N.instanceColor!==null,supportsVertexTextures:f,outputEncoding:G===null?a.outputEncoding:G.isXRRenderTarget===!0?G.texture.encoding:pi,map:Re,matcap:ue,envMap:Ae,envMapMode:Ae&&ie.mapping,envMapCubeUVHeight:J,aoMap:Je,lightMap:be,bumpMap:Be,normalMap:dt,displacementMap:f&&lt,emissiveMap:_t,normalMapObjectSpace:dt&&M.normalMapType===th,normalMapTangentSpace:dt&&M.normalMapType===Qa,decodeVideoTexture:Re&&M.map.isVideoTexture===!0&&M.map.encoding===Qe,metalnessMap:pt,roughnessMap:$e,clearcoat:rt,clearcoatMap:W,clearcoatNormalMap:te,clearcoatRoughnessMap:ae,iridescence:Pt,iridescenceMap:fe,iridescenceThicknessMap:R,sheen:A,sheenColorMap:$,sheenRoughnessMap:H,specularMap:pe,specularColorMap:xe,specularIntensityMap:Me,transmission:x,transmissionMap:_e,thicknessMap:Se,gradientMap:Oe,opaque:M.transparent===!1&&M.blending===Zi,alphaMap:Ge,alphaTest:mt,combine:M.combine,mapUv:Re&&y(M.map.channel),aoMapUv:Je&&y(M.aoMap.channel),lightMapUv:be&&y(M.lightMap.channel),bumpMapUv:Be&&y(M.bumpMap.channel),normalMapUv:dt&&y(M.normalMap.channel),displacementMapUv:lt&&y(M.displacementMap.channel),emissiveMapUv:_t&&y(M.emissiveMap.channel),metalnessMapUv:pt&&y(M.metalnessMap.channel),roughnessMapUv:$e&&y(M.roughnessMap.channel),clearcoatMapUv:W&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:te&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:R&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:$&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:H&&y(M.sheenRoughnessMap.channel),specularMapUv:pe&&y(M.specularMap.channel),specularColorMapUv:xe&&y(M.specularColorMap.channel),specularIntensityMapUv:Me&&y(M.specularIntensityMap.channel),transmissionMapUv:_e&&y(M.transmissionMap.channel),thicknessMapUv:Se&&y(M.thicknessMap.channel),alphaMapUv:Ge&&y(M.alphaMap.channel),vertexTangents:dt&&!!V.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUvs2:j,pointsUvs:N.isPoints===!0&&!!V.attributes.uv&&(Re||Ge),fog:!!k,useFog:M.fog===!0,fogExp2:k&&k.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:N.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:ce,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:a.shadowMap.enabled&&ee.length>0,shadowMapType:a.shadowMap.type,toneMapping:M.toneMapped?a.toneMapping:Rn,useLegacyLights:a.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ye,flipSided:M.side===jt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:U&&M.extensions.derivatives===!0,extensionFragDepth:U&&M.extensions.fragDepth===!0,extensionDrawBuffers:U&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:U&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function l(M){const C=[];if(M.shaderID?C.push(M.shaderID):(C.push(M.customVertexShaderID),C.push(M.customFragmentShaderID)),M.defines!==void 0)for(const ee in M.defines)C.push(ee),C.push(M.defines[ee]);return M.isRawShaderMaterial===!1&&(E(C,M),w(C,M),C.push(a.outputEncoding)),C.push(M.customProgramCacheKey),C.join()}function E(M,C){M.push(C.precision),M.push(C.outputEncoding),M.push(C.envMapMode),M.push(C.envMapCubeUVHeight),M.push(C.mapUv),M.push(C.alphaMapUv),M.push(C.lightMapUv),M.push(C.aoMapUv),M.push(C.bumpMapUv),M.push(C.normalMapUv),M.push(C.displacementMapUv),M.push(C.emissiveMapUv),M.push(C.metalnessMapUv),M.push(C.roughnessMapUv),M.push(C.clearcoatMapUv),M.push(C.clearcoatNormalMapUv),M.push(C.clearcoatRoughnessMapUv),M.push(C.iridescenceMapUv),M.push(C.iridescenceThicknessMapUv),M.push(C.sheenColorMapUv),M.push(C.sheenRoughnessMapUv),M.push(C.specularMapUv),M.push(C.specularColorMapUv),M.push(C.specularIntensityMapUv),M.push(C.transmissionMapUv),M.push(C.thicknessMapUv),M.push(C.combine),M.push(C.fogExp2),M.push(C.sizeAttenuation),M.push(C.morphTargetsCount),M.push(C.morphAttributeCount),M.push(C.numDirLights),M.push(C.numPointLights),M.push(C.numSpotLights),M.push(C.numSpotLightMaps),M.push(C.numHemiLights),M.push(C.numRectAreaLights),M.push(C.numDirLightShadows),M.push(C.numPointLightShadows),M.push(C.numSpotLightShadows),M.push(C.numSpotLightShadowsWithMaps),M.push(C.shadowMapType),M.push(C.toneMapping),M.push(C.numClippingPlanes),M.push(C.numClipIntersection),M.push(C.depthPacking)}function w(M,C){r.disableAll(),C.isWebGL2&&r.enable(0),C.supportsVertexTextures&&r.enable(1),C.instancing&&r.enable(2),C.instancingColor&&r.enable(3),C.matcap&&r.enable(4),C.envMap&&r.enable(5),C.normalMapObjectSpace&&r.enable(6),C.normalMapTangentSpace&&r.enable(7),C.clearcoat&&r.enable(8),C.iridescence&&r.enable(9),C.alphaTest&&r.enable(10),C.vertexColors&&r.enable(11),C.vertexAlphas&&r.enable(12),C.vertexUvs2&&r.enable(13),C.vertexTangents&&r.enable(14),M.push(r.mask),r.disableAll(),C.fog&&r.enable(0),C.useFog&&r.enable(1),C.flatShading&&r.enable(2),C.logarithmicDepthBuffer&&r.enable(3),C.skinning&&r.enable(4),C.morphTargets&&r.enable(5),C.morphNormals&&r.enable(6),C.morphColors&&r.enable(7),C.premultipliedAlpha&&r.enable(8),C.shadowMapEnabled&&r.enable(9),C.useLegacyLights&&r.enable(10),C.doubleSided&&r.enable(11),C.flipSided&&r.enable(12),C.useDepthPacking&&r.enable(13),C.dithering&&r.enable(14),C.transmission&&r.enable(15),C.sheen&&r.enable(16),C.decodeVideoTexture&&r.enable(17),C.opaque&&r.enable(18),C.pointsUvs&&r.enable(19),M.push(r.mask)}function S(M){const C=g[M.type];let ee;if(C){const Y=yn[C];ee=Nh.clone(Y.uniforms)}else ee=M.uniforms;return ee}function T(M,C){let ee;for(let Y=0,N=c.length;Y<N;Y++){const k=c[Y];if(k.cacheKey===C){ee=k,++ee.usedTimes;break}}return ee===void 0&&(ee=new Wm(a,C,M,s),c.push(ee)),ee}function D(M){if(--M.usedTimes===0){const C=c.indexOf(M);c[C]=c[c.length-1],c.pop(),M.destroy()}}function O(M){u.remove(M)}function B(){u.dispose()}return{getParameters:p,getProgramCacheKey:l,getUniforms:S,acquireProgram:T,releaseProgram:D,releaseShaderCache:O,programs:c,dispose:B}}function Zm(){let a=new WeakMap;function e(s){let o=a.get(s);return o===void 0&&(o={},a.set(s,o)),o}function t(s){a.delete(s)}function n(s,o,r){a.get(s)[o]=r}function i(){a=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function Ym(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.z!==e.z?a.z-e.z:a.id-e.id}function Dl(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function Ul(){const a=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(d,f,m,g,y,p){let l=a[e];return l===void 0?(l={id:d.id,object:d,geometry:f,material:m,groupOrder:g,renderOrder:d.renderOrder,z:y,group:p},a[e]=l):(l.id=d.id,l.object=d,l.geometry=f,l.material=m,l.groupOrder=g,l.renderOrder=d.renderOrder,l.z=y,l.group=p),e++,l}function r(d,f,m,g,y,p){const l=o(d,f,m,g,y,p);m.transmission>0?n.push(l):m.transparent===!0?i.push(l):t.push(l)}function u(d,f,m,g,y,p){const l=o(d,f,m,g,y,p);m.transmission>0?n.unshift(l):m.transparent===!0?i.unshift(l):t.unshift(l)}function c(d,f){t.length>1&&t.sort(d||Ym),n.length>1&&n.sort(f||Dl),i.length>1&&i.sort(f||Dl)}function h(){for(let d=e,f=a.length;d<f;d++){const m=a[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:r,unshift:u,finish:h,sort:c}}function $m(){let a=new WeakMap;function e(n,i){const s=a.get(n);let o;return s===void 0?(o=new Ul,a.set(n,[o])):i>=s.length?(o=new Ul,s.push(o)):o=s[i],o}function t(){a=new WeakMap}return{get:e,dispose:t}}function Jm(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Le};break;case"SpotLight":t={position:new P,direction:new P,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new P,halfWidth:new P,halfHeight:new P};break}return a[e.id]=t,t}}}function Qm(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let eg=0;function tg(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function ng(a,e){const t=new Jm,n=Qm(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)i.probe.push(new P);const s=new P,o=new He,r=new He;function u(h,d){let f=0,m=0,g=0;for(let ee=0;ee<9;ee++)i.probe[ee].set(0,0,0);let y=0,p=0,l=0,E=0,w=0,S=0,T=0,D=0,O=0,B=0;h.sort(tg);const M=d===!0?Math.PI:1;for(let ee=0,Y=h.length;ee<Y;ee++){const N=h[ee],k=N.color,V=N.intensity,ne=N.distance,ie=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=k.r*V*M,m+=k.g*V*M,g+=k.b*V*M;else if(N.isLightProbe)for(let J=0;J<9;J++)i.probe[J].addScaledVector(N.sh.coefficients[J],V);else if(N.isDirectionalLight){const J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity*M),N.castShadow){const oe=N.shadow,re=n.get(N);re.shadowBias=oe.bias,re.shadowNormalBias=oe.normalBias,re.shadowRadius=oe.radius,re.shadowMapSize=oe.mapSize,i.directionalShadow[y]=re,i.directionalShadowMap[y]=ie,i.directionalShadowMatrix[y]=N.shadow.matrix,S++}i.directional[y]=J,y++}else if(N.isSpotLight){const J=t.get(N);J.position.setFromMatrixPosition(N.matrixWorld),J.color.copy(k).multiplyScalar(V*M),J.distance=ne,J.coneCos=Math.cos(N.angle),J.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),J.decay=N.decay,i.spot[l]=J;const oe=N.shadow;if(N.map&&(i.spotLightMap[O]=N.map,O++,oe.updateMatrices(N),N.castShadow&&B++),i.spotLightMatrix[l]=oe.matrix,N.castShadow){const re=n.get(N);re.shadowBias=oe.bias,re.shadowNormalBias=oe.normalBias,re.shadowRadius=oe.radius,re.shadowMapSize=oe.mapSize,i.spotShadow[l]=re,i.spotShadowMap[l]=ie,D++}l++}else if(N.isRectAreaLight){const J=t.get(N);J.color.copy(k).multiplyScalar(V),J.halfWidth.set(N.width*.5,0,0),J.halfHeight.set(0,N.height*.5,0),i.rectArea[E]=J,E++}else if(N.isPointLight){const J=t.get(N);if(J.color.copy(N.color).multiplyScalar(N.intensity*M),J.distance=N.distance,J.decay=N.decay,N.castShadow){const oe=N.shadow,re=n.get(N);re.shadowBias=oe.bias,re.shadowNormalBias=oe.normalBias,re.shadowRadius=oe.radius,re.shadowMapSize=oe.mapSize,re.shadowCameraNear=oe.camera.near,re.shadowCameraFar=oe.camera.far,i.pointShadow[p]=re,i.pointShadowMap[p]=ie,i.pointShadowMatrix[p]=N.shadow.matrix,T++}i.point[p]=J,p++}else if(N.isHemisphereLight){const J=t.get(N);J.skyColor.copy(N.color).multiplyScalar(V*M),J.groundColor.copy(N.groundColor).multiplyScalar(V*M),i.hemi[w]=J,w++}}E>0&&(e.isWebGL2||a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):a.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=g;const C=i.hash;(C.directionalLength!==y||C.pointLength!==p||C.spotLength!==l||C.rectAreaLength!==E||C.hemiLength!==w||C.numDirectionalShadows!==S||C.numPointShadows!==T||C.numSpotShadows!==D||C.numSpotMaps!==O)&&(i.directional.length=y,i.spot.length=l,i.rectArea.length=E,i.point.length=p,i.hemi.length=w,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=D,i.spotShadowMap.length=D,i.directionalShadowMatrix.length=S,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=D+O-B,i.spotLightMap.length=O,i.numSpotLightShadowsWithMaps=B,C.directionalLength=y,C.pointLength=p,C.spotLength=l,C.rectAreaLength=E,C.hemiLength=w,C.numDirectionalShadows=S,C.numPointShadows=T,C.numSpotShadows=D,C.numSpotMaps=O,i.version=eg++)}function c(h,d){let f=0,m=0,g=0,y=0,p=0;const l=d.matrixWorldInverse;for(let E=0,w=h.length;E<w;E++){const S=h[E];if(S.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(l),f++}else if(S.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(l),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(l),g++}else if(S.isRectAreaLight){const T=i.rectArea[y];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(l),r.identity(),o.copy(S.matrixWorld),o.premultiply(l),r.extractRotation(o),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(r),T.halfHeight.applyMatrix4(r),y++}else if(S.isPointLight){const T=i.point[m];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(l),m++}else if(S.isHemisphereLight){const T=i.hemi[p];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(l),p++}}}return{setup:u,setupView:c,state:i}}function Ol(a,e){const t=new ng(a,e),n=[],i=[];function s(){n.length=0,i.length=0}function o(d){n.push(d)}function r(d){i.push(d)}function u(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:s,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:u,setupLightsView:c,pushLight:o,pushShadow:r}}function ig(a,e){let t=new WeakMap;function n(s,o=0){const r=t.get(s);let u;return r===void 0?(u=new Ol(a,e),t.set(s,[u])):o>=r.length?(u=new Ol(a,e),r.push(u)):u=r[o],u}function i(){t=new WeakMap}return{get:n,dispose:i}}class sg extends hn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class rg extends hn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,og=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lg(a,e,t){let n=new io;const i=new De,s=new De,o=new st,r=new sg({depthPacking:eh}),u=new rg,c={},h=t.maxTextureSize,d={[In]:jt,[jt]:In,[Ye]:Ye},f=new gi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:ag,fragmentShader:og}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const g=new bt;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Fe(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yc,this.render=function(S,T,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||S.length===0)return;const O=a.getRenderTarget(),B=a.getActiveCubeFace(),M=a.getActiveMipmapLevel(),C=a.state;C.setBlending(Xn),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);for(let ee=0,Y=S.length;ee<Y;ee++){const N=S[ee],k=N.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);const V=k.getFrameExtents();if(i.multiply(V),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/V.x),i.x=s.x*V.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/V.y),i.y=s.y*V.y,k.mapSize.y=s.y)),k.map===null){const ie=this.type!==Es?{minFilter:Ct,magFilter:Ct}:{};k.map=new mi(i.x,i.y,ie),k.map.texture.name=N.name+".shadowMap",k.camera.updateProjectionMatrix()}a.setRenderTarget(k.map),a.clear();const ne=k.getViewportCount();for(let ie=0;ie<ne;ie++){const J=k.getViewport(ie);o.set(s.x*J.x,s.y*J.y,s.x*J.z,s.y*J.w),C.viewport(o),k.updateMatrices(N,ie),n=k.getFrustum(),w(T,D,k.camera,N,this.type)}k.isPointLightShadow!==!0&&this.type===Es&&l(k,D),k.needsUpdate=!1}p.needsUpdate=!1,a.setRenderTarget(O,B,M)};function l(S,T){const D=e.update(y);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new mi(i.x,i.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,a.setRenderTarget(S.mapPass),a.clear(),a.renderBufferDirect(T,null,D,f,y,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value=S.mapSize,m.uniforms.radius.value=S.radius,a.setRenderTarget(S.map),a.clear(),a.renderBufferDirect(T,null,D,m,y,null)}function E(S,T,D,O){let B=null;const M=D.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(M!==void 0)B=M;else if(B=D.isPointLight===!0?u:r,a.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const C=B.uuid,ee=T.uuid;let Y=c[C];Y===void 0&&(Y={},c[C]=Y);let N=Y[ee];N===void 0&&(N=B.clone(),Y[ee]=N),B=N}if(B.visible=T.visible,B.wireframe=T.wireframe,O===Es?B.side=T.shadowSide!==null?T.shadowSide:T.side:B.side=T.shadowSide!==null?T.shadowSide:d[T.side],B.alphaMap=T.alphaMap,B.alphaTest=T.alphaTest,B.map=T.map,B.clipShadows=T.clipShadows,B.clippingPlanes=T.clippingPlanes,B.clipIntersection=T.clipIntersection,B.displacementMap=T.displacementMap,B.displacementScale=T.displacementScale,B.displacementBias=T.displacementBias,B.wireframeLinewidth=T.wireframeLinewidth,B.linewidth=T.linewidth,D.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const C=a.properties.get(B);C.light=D}return B}function w(S,T,D,O,B){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&B===Es)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,S.matrixWorld);const ee=e.update(S),Y=S.material;if(Array.isArray(Y)){const N=ee.groups;for(let k=0,V=N.length;k<V;k++){const ne=N[k],ie=Y[ne.materialIndex];if(ie&&ie.visible){const J=E(S,ie,O,B);a.renderBufferDirect(D,null,ee,J,S,ne)}}}else if(Y.visible){const N=E(S,Y,O,B);a.renderBufferDirect(D,null,ee,N,S,null)}}const C=S.children;for(let ee=0,Y=C.length;ee<Y;ee++)w(C[ee],T,D,O,B)}}function cg(a,e,t){const n=t.isWebGL2;function i(){let U=!1;const j=new st;let se=null;const ve=new st(0,0,0,0);return{setMask:function(we){se!==we&&!U&&(a.colorMask(we,we,we,we),se=we)},setLocked:function(we){U=we},setClear:function(we,at,ct,Dt,Nn){Nn===!0&&(we*=Dt,at*=Dt,ct*=Dt),j.set(we,at,ct,Dt),ve.equals(j)===!1&&(a.clearColor(we,at,ct,Dt),ve.copy(j))},reset:function(){U=!1,se=null,ve.set(-1,0,0,0)}}}function s(){let U=!1,j=null,se=null,ve=null;return{setTest:function(we){we?G(2929):Ue(2929)},setMask:function(we){j!==we&&!U&&(a.depthMask(we),j=we)},setFunc:function(we){if(se!==we){switch(we){case Mu:a.depthFunc(512);break;case bu:a.depthFunc(519);break;case wu:a.depthFunc(513);break;case Na:a.depthFunc(515);break;case Tu:a.depthFunc(514);break;case Eu:a.depthFunc(518);break;case Au:a.depthFunc(516);break;case Cu:a.depthFunc(517);break;default:a.depthFunc(515)}se=we}},setLocked:function(we){U=we},setClear:function(we){ve!==we&&(a.clearDepth(we),ve=we)},reset:function(){U=!1,j=null,se=null,ve=null}}}function o(){let U=!1,j=null,se=null,ve=null,we=null,at=null,ct=null,Dt=null,Nn=null;return{setTest:function(gt){U||(gt?G(2960):Ue(2960))},setMask:function(gt){j!==gt&&!U&&(a.stencilMask(gt),j=gt)},setFunc:function(gt,Jt,fn){(se!==gt||ve!==Jt||we!==fn)&&(a.stencilFunc(gt,Jt,fn),se=gt,ve=Jt,we=fn)},setOp:function(gt,Jt,fn){(at!==gt||ct!==Jt||Dt!==fn)&&(a.stencilOp(gt,Jt,fn),at=gt,ct=Jt,Dt=fn)},setLocked:function(gt){U=gt},setClear:function(gt){Nn!==gt&&(a.clearStencil(gt),Nn=gt)},reset:function(){U=!1,j=null,se=null,ve=null,we=null,at=null,ct=null,Dt=null,Nn=null}}}const r=new i,u=new s,c=new o,h=new WeakMap,d=new WeakMap;let f={},m={},g=new WeakMap,y=[],p=null,l=!1,E=null,w=null,S=null,T=null,D=null,O=null,B=null,M=!1,C=null,ee=null,Y=null,N=null,k=null;const V=a.getParameter(35661);let ne=!1,ie=0;const J=a.getParameter(7938);J.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(J)[1]),ne=ie>=1):J.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),ne=ie>=2);let oe=null,re={};const Ie=a.getParameter(3088),ce=a.getParameter(2978),X=new st().fromArray(Ie),Q=new st().fromArray(ce);function de(U,j,se){const ve=new Uint8Array(4),we=a.createTexture();a.bindTexture(U,we),a.texParameteri(U,10241,9728),a.texParameteri(U,10240,9728);for(let at=0;at<se;at++)a.texImage2D(j+at,0,6408,1,1,0,6408,5121,ve);return we}const ye={};ye[3553]=de(3553,3553,1),ye[34067]=de(34067,34069,6),r.setClear(0,0,0,1),u.setClear(1),c.setClear(0),G(2929),u.setFunc(Na),lt(!1),_t(xo),G(2884),Be(Xn);function G(U){f[U]!==!0&&(a.enable(U),f[U]=!0)}function Ue(U){f[U]!==!1&&(a.disable(U),f[U]=!1)}function Re(U,j){return m[U]!==j?(a.bindFramebuffer(U,j),m[U]=j,n&&(U===36009&&(m[36160]=j),U===36160&&(m[36009]=j)),!0):!1}function ue(U,j){let se=y,ve=!1;if(U)if(se=g.get(j),se===void 0&&(se=[],g.set(j,se)),U.isWebGLMultipleRenderTargets){const we=U.texture;if(se.length!==we.length||se[0]!==36064){for(let at=0,ct=we.length;at<ct;at++)se[at]=36064+at;se.length=we.length,ve=!0}}else se[0]!==36064&&(se[0]=36064,ve=!0);else se[0]!==1029&&(se[0]=1029,ve=!0);ve&&(t.isWebGL2?a.drawBuffers(se):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(se))}function Ae(U){return p!==U?(a.useProgram(U),p=U,!0):!1}const Je={[qi]:32774,[hu]:32778,[du]:32779};if(n)Je[wo]=32775,Je[To]=32776;else{const U=e.get("EXT_blend_minmax");U!==null&&(Je[wo]=U.MIN_EXT,Je[To]=U.MAX_EXT)}const be={[fu]:0,[pu]:1,[mu]:768,[_c]:770,[Su]:776,[vu]:774,[yu]:772,[gu]:769,[vc]:771,[xu]:775,[_u]:773};function Be(U,j,se,ve,we,at,ct,Dt){if(U===Xn){l===!0&&(Ue(3042),l=!1);return}if(l===!1&&(G(3042),l=!0),U!==uu){if(U!==E||Dt!==M){if((w!==qi||D!==qi)&&(a.blendEquation(32774),w=qi,D=qi),Dt)switch(U){case Zi:a.blendFuncSeparate(1,771,1,771);break;case So:a.blendFunc(1,1);break;case Mo:a.blendFuncSeparate(0,769,0,1);break;case bo:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Zi:a.blendFuncSeparate(770,771,1,771);break;case So:a.blendFunc(770,1);break;case Mo:a.blendFuncSeparate(0,769,0,1);break;case bo:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,T=null,O=null,B=null,E=U,M=Dt}return}we=we||j,at=at||se,ct=ct||ve,(j!==w||we!==D)&&(a.blendEquationSeparate(Je[j],Je[we]),w=j,D=we),(se!==S||ve!==T||at!==O||ct!==B)&&(a.blendFuncSeparate(be[se],be[ve],be[at],be[ct]),S=se,T=ve,O=at,B=ct),E=U,M=!1}function dt(U,j){U.side===Ye?Ue(2884):G(2884);let se=U.side===jt;j&&(se=!se),lt(se),U.blending===Zi&&U.transparent===!1?Be(Xn):Be(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),u.setFunc(U.depthFunc),u.setTest(U.depthTest),u.setMask(U.depthWrite),r.setMask(U.colorWrite);const ve=U.stencilWrite;c.setTest(ve),ve&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),$e(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?G(32926):Ue(32926)}function lt(U){C!==U&&(U?a.frontFace(2304):a.frontFace(2305),C=U)}function _t(U){U!==ou?(G(2884),U!==ee&&(U===xo?a.cullFace(1029):U===lu?a.cullFace(1028):a.cullFace(1032))):Ue(2884),ee=U}function pt(U){U!==Y&&(ne&&a.lineWidth(U),Y=U)}function $e(U,j,se){U?(G(32823),(N!==j||k!==se)&&(a.polygonOffset(j,se),N=j,k=se)):Ue(32823)}function rt(U){U?G(3089):Ue(3089)}function Pt(U){U===void 0&&(U=33984+V-1),oe!==U&&(a.activeTexture(U),oe=U)}function A(U,j,se){se===void 0&&(oe===null?se=33984+V-1:se=oe);let ve=re[se];ve===void 0&&(ve={type:void 0,texture:void 0},re[se]=ve),(ve.type!==U||ve.texture!==j)&&(oe!==se&&(a.activeTexture(se),oe=se),a.bindTexture(U,j||ye[U]),ve.type=U,ve.texture=j)}function x(){const U=re[oe];U!==void 0&&U.type!==void 0&&(a.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function W(){try{a.compressedTexImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{a.compressedTexImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{a.texSubImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{a.texSubImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function R(){try{a.compressedTexSubImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function $(){try{a.compressedTexSubImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function H(){try{a.texStorage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function pe(){try{a.texStorage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xe(){try{a.texImage2D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{a.texImage3D.apply(a,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function _e(U){X.equals(U)===!1&&(a.scissor(U.x,U.y,U.z,U.w),X.copy(U))}function Se(U){Q.equals(U)===!1&&(a.viewport(U.x,U.y,U.z,U.w),Q.copy(U))}function Oe(U,j){let se=d.get(j);se===void 0&&(se=new WeakMap,d.set(j,se));let ve=se.get(U);ve===void 0&&(ve=a.getUniformBlockIndex(j,U.name),se.set(U,ve))}function Ge(U,j){const ve=d.get(j).get(U);h.get(j)!==ve&&(a.uniformBlockBinding(j,ve,U.__bindingPointIndex),h.set(j,ve))}function mt(){a.disable(3042),a.disable(2884),a.disable(2929),a.disable(32823),a.disable(3089),a.disable(2960),a.disable(32926),a.blendEquation(32774),a.blendFunc(1,0),a.blendFuncSeparate(1,0,1,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(513),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(519,0,4294967295),a.stencilOp(7680,7680,7680),a.clearStencil(0),a.cullFace(1029),a.frontFace(2305),a.polygonOffset(0,0),a.activeTexture(33984),a.bindFramebuffer(36160,null),n===!0&&(a.bindFramebuffer(36009,null),a.bindFramebuffer(36008,null)),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),f={},oe=null,re={},m={},g=new WeakMap,y=[],p=null,l=!1,E=null,w=null,S=null,T=null,D=null,O=null,B=null,M=!1,C=null,ee=null,Y=null,N=null,k=null,X.set(0,0,a.canvas.width,a.canvas.height),Q.set(0,0,a.canvas.width,a.canvas.height),r.reset(),u.reset(),c.reset()}return{buffers:{color:r,depth:u,stencil:c},enable:G,disable:Ue,bindFramebuffer:Re,drawBuffers:ue,useProgram:Ae,setBlending:Be,setMaterial:dt,setFlipSided:lt,setCullFace:_t,setLineWidth:pt,setPolygonOffset:$e,setScissorTest:rt,activeTexture:Pt,bindTexture:A,unbindTexture:x,compressedTexImage2D:W,compressedTexImage3D:te,texImage2D:xe,texImage3D:Me,updateUBOMapping:Oe,uniformBlockBinding:Ge,texStorage2D:H,texStorage3D:pe,texSubImage2D:ae,texSubImage3D:fe,compressedTexSubImage2D:R,compressedTexSubImage3D:$,scissor:_e,viewport:Se,reset:mt}}function ug(a,e,t,n,i,s,o){const r=i.isWebGL2,u=i.maxTextures,c=i.maxCubemapSize,h=i.maxTextureSize,d=i.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let y;const p=new WeakMap;let l=!1;try{l=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(A,x){return l?new OffscreenCanvas(A,x):Ds("canvas")}function w(A,x,W,te){let ae=1;if((A.width>te||A.height>te)&&(ae=te/Math.max(A.width,A.height)),ae<1||x===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const fe=x?Ec:Math.floor,R=fe(ae*A.width),$=fe(ae*A.height);y===void 0&&(y=E(R,$));const H=W?E(R,$):y;return H.width=R,H.height=$,H.getContext("2d").drawImage(A,0,0,R,$),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+R+"x"+$+")."),H}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function S(A){return Va(A.width)&&Va(A.height)}function T(A){return r?!1:A.wrapS!==nn||A.wrapT!==nn||A.minFilter!==Ct&&A.minFilter!==qt}function D(A,x){return A.generateMipmaps&&x&&A.minFilter!==Ct&&A.minFilter!==qt}function O(A){a.generateMipmap(A)}function B(A,x,W,te,ae=!1){if(r===!1)return x;if(A!==null){if(a[A]!==void 0)return a[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let fe=x;return x===6403&&(W===5126&&(fe=33326),W===5131&&(fe=33325),W===5121&&(fe=33321)),x===33319&&(W===5126&&(fe=33328),W===5131&&(fe=33327),W===5121&&(fe=33323)),x===6408&&(W===5126&&(fe=34836),W===5131&&(fe=34842),W===5121&&(fe=te===Qe&&ae===!1?35907:32856),W===32819&&(fe=32854),W===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function M(A,x,W){return D(A,W)===!0||A.isFramebufferTexture&&A.minFilter!==Ct&&A.minFilter!==qt?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){return A===Ct||A===za||A===Sr?9728:9729}function ee(A){const x=A.target;x.removeEventListener("dispose",ee),N(x),x.isVideoTexture&&g.delete(x)}function Y(A){const x=A.target;x.removeEventListener("dispose",Y),V(x)}function N(A){const x=n.get(A);if(x.__webglInit===void 0)return;const W=A.source,te=p.get(W);if(te){const ae=te[x.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&k(A),Object.keys(te).length===0&&p.delete(W)}n.remove(A)}function k(A){const x=n.get(A);a.deleteTexture(x.__webglTexture);const W=A.source,te=p.get(W);delete te[x.__cacheKey],o.memory.textures--}function V(A){const x=A.texture,W=n.get(A),te=n.get(x);if(te.__webglTexture!==void 0&&(a.deleteTexture(te.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)a.deleteFramebuffer(W.__webglFramebuffer[ae]),W.__webglDepthbuffer&&a.deleteRenderbuffer(W.__webglDepthbuffer[ae]);else{if(a.deleteFramebuffer(W.__webglFramebuffer),W.__webglDepthbuffer&&a.deleteRenderbuffer(W.__webglDepthbuffer),W.__webglMultisampledFramebuffer&&a.deleteFramebuffer(W.__webglMultisampledFramebuffer),W.__webglColorRenderbuffer)for(let ae=0;ae<W.__webglColorRenderbuffer.length;ae++)W.__webglColorRenderbuffer[ae]&&a.deleteRenderbuffer(W.__webglColorRenderbuffer[ae]);W.__webglDepthRenderbuffer&&a.deleteRenderbuffer(W.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ae=0,fe=x.length;ae<fe;ae++){const R=n.get(x[ae]);R.__webglTexture&&(a.deleteTexture(R.__webglTexture),o.memory.textures--),n.remove(x[ae])}n.remove(x),n.remove(A)}let ne=0;function ie(){ne=0}function J(){const A=ne;return A>=u&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+u),ne+=1,A}function oe(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.encoding),x.join()}function re(A,x){const W=n.get(A);if(A.isVideoTexture&&rt(A),A.isRenderTargetTexture===!1&&A.version>0&&W.__version!==A.version){const te=A.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(W,A,x);return}}t.bindTexture(3553,W.__webglTexture,33984+x)}function Ie(A,x){const W=n.get(A);if(A.version>0&&W.__version!==A.version){Ue(W,A,x);return}t.bindTexture(35866,W.__webglTexture,33984+x)}function ce(A,x){const W=n.get(A);if(A.version>0&&W.__version!==A.version){Ue(W,A,x);return}t.bindTexture(32879,W.__webglTexture,33984+x)}function X(A,x){const W=n.get(A);if(A.version>0&&W.__version!==A.version){Re(W,A,x);return}t.bindTexture(34067,W.__webglTexture,33984+x)}const Q={[is]:10497,[nn]:33071,[wr]:33648},de={[Ct]:9728,[za]:9984,[Sr]:9986,[qt]:9729,[Sc]:9985,[di]:9987};function ye(A,x,W){if(W?(a.texParameteri(A,10242,Q[x.wrapS]),a.texParameteri(A,10243,Q[x.wrapT]),(A===32879||A===35866)&&a.texParameteri(A,32882,Q[x.wrapR]),a.texParameteri(A,10240,de[x.magFilter]),a.texParameteri(A,10241,de[x.minFilter])):(a.texParameteri(A,10242,33071),a.texParameteri(A,10243,33071),(A===32879||A===35866)&&a.texParameteri(A,32882,33071),(x.wrapS!==nn||x.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(A,10240,C(x.magFilter)),a.texParameteri(A,10241,C(x.minFilter)),x.minFilter!==Ct&&x.minFilter!==qt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Ct||x.minFilter!==Sr&&x.minFilter!==di||x.type===Wn&&e.has("OES_texture_float_linear")===!1||r===!1&&x.type===Rs&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||n.get(x).__currentAnisotropy)&&(a.texParameterf(A,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy)}}function G(A,x){let W=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",ee));const te=x.source;let ae=p.get(te);ae===void 0&&(ae={},p.set(te,ae));const fe=oe(x);if(fe!==A.__cacheKey){ae[fe]===void 0&&(ae[fe]={texture:a.createTexture(),usedTimes:0},o.memory.textures++,W=!0),ae[fe].usedTimes++;const R=ae[A.__cacheKey];R!==void 0&&(ae[A.__cacheKey].usedTimes--,R.usedTimes===0&&k(x)),A.__cacheKey=fe,A.__webglTexture=ae[fe].texture}return W}function Ue(A,x,W){let te=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=35866),x.isData3DTexture&&(te=32879);const ae=G(A,x),fe=x.source;t.bindTexture(te,A.__webglTexture,33984+W);const R=n.get(fe);if(fe.version!==R.__version||ae===!0){t.activeTexture(33984+W),a.pixelStorei(37440,x.flipY),a.pixelStorei(37441,x.premultiplyAlpha),a.pixelStorei(3317,x.unpackAlignment),a.pixelStorei(37443,0);const $=T(x)&&S(x.image)===!1;let H=w(x.image,$,!1,h);H=Pt(x,H);const pe=S(H)||r,xe=s.convert(x.format,x.encoding);let Me=s.convert(x.type),_e=B(x.internalFormat,xe,Me,x.encoding,x.isVideoTexture);ye(te,x,pe);let Se;const Oe=x.mipmaps,Ge=r&&x.isVideoTexture!==!0,mt=R.__version===void 0||ae===!0,U=M(x,H,pe);if(x.isDepthTexture)_e=6402,r?x.type===Wn?_e=36012:x.type===oi?_e=33190:x.type===Yi?_e=35056:_e=33189:x.type===Wn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===ui&&_e===6402&&x.type!==Mc&&x.type!==oi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=oi,Me=s.convert(x.type)),x.format===ss&&_e===6402&&(_e=34041,x.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Yi,Me=s.convert(x.type))),mt&&(Ge?t.texStorage2D(3553,1,_e,H.width,H.height):t.texImage2D(3553,0,_e,H.width,H.height,0,xe,Me,null));else if(x.isDataTexture)if(Oe.length>0&&pe){Ge&&mt&&t.texStorage2D(3553,U,_e,Oe[0].width,Oe[0].height);for(let j=0,se=Oe.length;j<se;j++)Se=Oe[j],Ge?t.texSubImage2D(3553,j,0,0,Se.width,Se.height,xe,Me,Se.data):t.texImage2D(3553,j,_e,Se.width,Se.height,0,xe,Me,Se.data);x.generateMipmaps=!1}else Ge?(mt&&t.texStorage2D(3553,U,_e,H.width,H.height),t.texSubImage2D(3553,0,0,0,H.width,H.height,xe,Me,H.data)):t.texImage2D(3553,0,_e,H.width,H.height,0,xe,Me,H.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ge&&mt&&t.texStorage3D(35866,U,_e,Oe[0].width,Oe[0].height,H.depth);for(let j=0,se=Oe.length;j<se;j++)Se=Oe[j],x.format!==sn?xe!==null?Ge?t.compressedTexSubImage3D(35866,j,0,0,0,Se.width,Se.height,H.depth,xe,Se.data,0,0):t.compressedTexImage3D(35866,j,_e,Se.width,Se.height,H.depth,0,Se.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage3D(35866,j,0,0,0,Se.width,Se.height,H.depth,xe,Me,Se.data):t.texImage3D(35866,j,_e,Se.width,Se.height,H.depth,0,xe,Me,Se.data)}else{Ge&&mt&&t.texStorage2D(3553,U,_e,Oe[0].width,Oe[0].height);for(let j=0,se=Oe.length;j<se;j++)Se=Oe[j],x.format!==sn?xe!==null?Ge?t.compressedTexSubImage2D(3553,j,0,0,Se.width,Se.height,xe,Se.data):t.compressedTexImage2D(3553,j,_e,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?t.texSubImage2D(3553,j,0,0,Se.width,Se.height,xe,Me,Se.data):t.texImage2D(3553,j,_e,Se.width,Se.height,0,xe,Me,Se.data)}else if(x.isDataArrayTexture)Ge?(mt&&t.texStorage3D(35866,U,_e,H.width,H.height,H.depth),t.texSubImage3D(35866,0,0,0,0,H.width,H.height,H.depth,xe,Me,H.data)):t.texImage3D(35866,0,_e,H.width,H.height,H.depth,0,xe,Me,H.data);else if(x.isData3DTexture)Ge?(mt&&t.texStorage3D(32879,U,_e,H.width,H.height,H.depth),t.texSubImage3D(32879,0,0,0,0,H.width,H.height,H.depth,xe,Me,H.data)):t.texImage3D(32879,0,_e,H.width,H.height,H.depth,0,xe,Me,H.data);else if(x.isFramebufferTexture){if(mt)if(Ge)t.texStorage2D(3553,U,_e,H.width,H.height);else{let j=H.width,se=H.height;for(let ve=0;ve<U;ve++)t.texImage2D(3553,ve,_e,j,se,0,xe,Me,null),j>>=1,se>>=1}}else if(Oe.length>0&&pe){Ge&&mt&&t.texStorage2D(3553,U,_e,Oe[0].width,Oe[0].height);for(let j=0,se=Oe.length;j<se;j++)Se=Oe[j],Ge?t.texSubImage2D(3553,j,0,0,xe,Me,Se):t.texImage2D(3553,j,_e,xe,Me,Se);x.generateMipmaps=!1}else Ge?(mt&&t.texStorage2D(3553,U,_e,H.width,H.height),t.texSubImage2D(3553,0,0,0,xe,Me,H)):t.texImage2D(3553,0,_e,xe,Me,H);D(x,pe)&&O(te),R.__version=fe.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function Re(A,x,W){if(x.image.length!==6)return;const te=G(A,x),ae=x.source;t.bindTexture(34067,A.__webglTexture,33984+W);const fe=n.get(ae);if(ae.version!==fe.__version||te===!0){t.activeTexture(33984+W),a.pixelStorei(37440,x.flipY),a.pixelStorei(37441,x.premultiplyAlpha),a.pixelStorei(3317,x.unpackAlignment),a.pixelStorei(37443,0);const R=x.isCompressedTexture||x.image[0].isCompressedTexture,$=x.image[0]&&x.image[0].isDataTexture,H=[];for(let j=0;j<6;j++)!R&&!$?H[j]=w(x.image[j],!1,!0,c):H[j]=$?x.image[j].image:x.image[j],H[j]=Pt(x,H[j]);const pe=H[0],xe=S(pe)||r,Me=s.convert(x.format,x.encoding),_e=s.convert(x.type),Se=B(x.internalFormat,Me,_e,x.encoding),Oe=r&&x.isVideoTexture!==!0,Ge=fe.__version===void 0||te===!0;let mt=M(x,pe,xe);ye(34067,x,xe);let U;if(R){Oe&&Ge&&t.texStorage2D(34067,mt,Se,pe.width,pe.height);for(let j=0;j<6;j++){U=H[j].mipmaps;for(let se=0;se<U.length;se++){const ve=U[se];x.format!==sn?Me!==null?Oe?t.compressedTexSubImage2D(34069+j,se,0,0,ve.width,ve.height,Me,ve.data):t.compressedTexImage2D(34069+j,se,Se,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?t.texSubImage2D(34069+j,se,0,0,ve.width,ve.height,Me,_e,ve.data):t.texImage2D(34069+j,se,Se,ve.width,ve.height,0,Me,_e,ve.data)}}}else{U=x.mipmaps,Oe&&Ge&&(U.length>0&&mt++,t.texStorage2D(34067,mt,Se,H[0].width,H[0].height));for(let j=0;j<6;j++)if($){Oe?t.texSubImage2D(34069+j,0,0,0,H[j].width,H[j].height,Me,_e,H[j].data):t.texImage2D(34069+j,0,Se,H[j].width,H[j].height,0,Me,_e,H[j].data);for(let se=0;se<U.length;se++){const we=U[se].image[j].image;Oe?t.texSubImage2D(34069+j,se+1,0,0,we.width,we.height,Me,_e,we.data):t.texImage2D(34069+j,se+1,Se,we.width,we.height,0,Me,_e,we.data)}}else{Oe?t.texSubImage2D(34069+j,0,0,0,Me,_e,H[j]):t.texImage2D(34069+j,0,Se,Me,_e,H[j]);for(let se=0;se<U.length;se++){const ve=U[se];Oe?t.texSubImage2D(34069+j,se+1,0,0,Me,_e,ve.image[j]):t.texImage2D(34069+j,se+1,Se,Me,_e,ve.image[j])}}}D(x,xe)&&O(34067),fe.__version=ae.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function ue(A,x,W,te,ae){const fe=s.convert(W.format,W.encoding),R=s.convert(W.type),$=B(W.internalFormat,fe,R,W.encoding);n.get(x).__hasExternalTextures||(ae===32879||ae===35866?t.texImage3D(ae,0,$,x.width,x.height,x.depth,0,fe,R,null):t.texImage2D(ae,0,$,x.width,x.height,0,fe,R,null)),t.bindFramebuffer(36160,A),$e(x)?f.framebufferTexture2DMultisampleEXT(36160,te,ae,n.get(W).__webglTexture,0,pt(x)):(ae===3553||ae>=34069&&ae<=34074)&&a.framebufferTexture2D(36160,te,ae,n.get(W).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ae(A,x,W){if(a.bindRenderbuffer(36161,A),x.depthBuffer&&!x.stencilBuffer){let te=33189;if(W||$e(x)){const ae=x.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Wn?te=36012:ae.type===oi&&(te=33190));const fe=pt(x);$e(x)?f.renderbufferStorageMultisampleEXT(36161,fe,te,x.width,x.height):a.renderbufferStorageMultisample(36161,fe,te,x.width,x.height)}else a.renderbufferStorage(36161,te,x.width,x.height);a.framebufferRenderbuffer(36160,36096,36161,A)}else if(x.depthBuffer&&x.stencilBuffer){const te=pt(x);W&&$e(x)===!1?a.renderbufferStorageMultisample(36161,te,35056,x.width,x.height):$e(x)?f.renderbufferStorageMultisampleEXT(36161,te,35056,x.width,x.height):a.renderbufferStorage(36161,34041,x.width,x.height),a.framebufferRenderbuffer(36160,33306,36161,A)}else{const te=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let ae=0;ae<te.length;ae++){const fe=te[ae],R=s.convert(fe.format,fe.encoding),$=s.convert(fe.type),H=B(fe.internalFormat,R,$,fe.encoding),pe=pt(x);W&&$e(x)===!1?a.renderbufferStorageMultisample(36161,pe,H,x.width,x.height):$e(x)?f.renderbufferStorageMultisampleEXT(36161,pe,H,x.width,x.height):a.renderbufferStorage(36161,H,x.width,x.height)}}a.bindRenderbuffer(36161,null)}function Je(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),re(x.depthTexture,0);const te=n.get(x.depthTexture).__webglTexture,ae=pt(x);if(x.depthTexture.format===ui)$e(x)?f.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ae):a.framebufferTexture2D(36160,36096,3553,te,0);else if(x.depthTexture.format===ss)$e(x)?f.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ae):a.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function be(A){const x=n.get(A),W=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Je(x.__webglFramebuffer,A)}else if(W){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]=a.createRenderbuffer(),Ae(x.__webglDepthbuffer[te],A,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=a.createRenderbuffer(),Ae(x.__webglDepthbuffer,A,!1);t.bindFramebuffer(36160,null)}function Be(A,x,W){const te=n.get(A);x!==void 0&&ue(te.__webglFramebuffer,A,A.texture,36064,3553),W!==void 0&&be(A)}function dt(A){const x=A.texture,W=n.get(A),te=n.get(x);A.addEventListener("dispose",Y),A.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=a.createTexture()),te.__version=x.version,o.memory.textures++);const ae=A.isWebGLCubeRenderTarget===!0,fe=A.isWebGLMultipleRenderTargets===!0,R=S(A)||r;if(ae){W.__webglFramebuffer=[];for(let $=0;$<6;$++)W.__webglFramebuffer[$]=a.createFramebuffer()}else{if(W.__webglFramebuffer=a.createFramebuffer(),fe)if(i.drawBuffers){const $=A.texture;for(let H=0,pe=$.length;H<pe;H++){const xe=n.get($[H]);xe.__webglTexture===void 0&&(xe.__webglTexture=a.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(r&&A.samples>0&&$e(A)===!1){const $=fe?x:[x];W.__webglMultisampledFramebuffer=a.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,W.__webglMultisampledFramebuffer);for(let H=0;H<$.length;H++){const pe=$[H];W.__webglColorRenderbuffer[H]=a.createRenderbuffer(),a.bindRenderbuffer(36161,W.__webglColorRenderbuffer[H]);const xe=s.convert(pe.format,pe.encoding),Me=s.convert(pe.type),_e=B(pe.internalFormat,xe,Me,pe.encoding,A.isXRRenderTarget===!0),Se=pt(A);a.renderbufferStorageMultisample(36161,Se,_e,A.width,A.height),a.framebufferRenderbuffer(36160,36064+H,36161,W.__webglColorRenderbuffer[H])}a.bindRenderbuffer(36161,null),A.depthBuffer&&(W.__webglDepthRenderbuffer=a.createRenderbuffer(),Ae(W.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(36160,null)}}if(ae){t.bindTexture(34067,te.__webglTexture),ye(34067,x,R);for(let $=0;$<6;$++)ue(W.__webglFramebuffer[$],A,x,36064,34069+$);D(x,R)&&O(34067),t.unbindTexture()}else if(fe){const $=A.texture;for(let H=0,pe=$.length;H<pe;H++){const xe=$[H],Me=n.get(xe);t.bindTexture(3553,Me.__webglTexture),ye(3553,xe,R),ue(W.__webglFramebuffer,A,xe,36064+H,3553),D(xe,R)&&O(3553)}t.unbindTexture()}else{let $=3553;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(r?$=A.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture($,te.__webglTexture),ye($,x,R),ue(W.__webglFramebuffer,A,x,36064,$),D(x,R)&&O($),t.unbindTexture()}A.depthBuffer&&be(A)}function lt(A){const x=S(A)||r,W=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let te=0,ae=W.length;te<ae;te++){const fe=W[te];if(D(fe,x)){const R=A.isWebGLCubeRenderTarget?34067:3553,$=n.get(fe).__webglTexture;t.bindTexture(R,$),O(R),t.unbindTexture()}}}function _t(A){if(r&&A.samples>0&&$e(A)===!1){const x=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],W=A.width,te=A.height;let ae=16384;const fe=[],R=A.stencilBuffer?33306:36096,$=n.get(A),H=A.isWebGLMultipleRenderTargets===!0;if(H)for(let pe=0;pe<x.length;pe++)t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+pe,36161,null),t.bindFramebuffer(36160,$.__webglFramebuffer),a.framebufferTexture2D(36009,36064+pe,3553,null,0);t.bindFramebuffer(36008,$.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,$.__webglFramebuffer);for(let pe=0;pe<x.length;pe++){fe.push(36064+pe),A.depthBuffer&&fe.push(R);const xe=$.__ignoreDepthValues!==void 0?$.__ignoreDepthValues:!1;if(xe===!1&&(A.depthBuffer&&(ae|=256),A.stencilBuffer&&(ae|=1024)),H&&a.framebufferRenderbuffer(36008,36064,36161,$.__webglColorRenderbuffer[pe]),xe===!0&&(a.invalidateFramebuffer(36008,[R]),a.invalidateFramebuffer(36009,[R])),H){const Me=n.get(x[pe]).__webglTexture;a.framebufferTexture2D(36009,36064,3553,Me,0)}a.blitFramebuffer(0,0,W,te,0,0,W,te,ae,9728),m&&a.invalidateFramebuffer(36008,fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),H)for(let pe=0;pe<x.length;pe++){t.bindFramebuffer(36160,$.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064+pe,36161,$.__webglColorRenderbuffer[pe]);const xe=n.get(x[pe]).__webglTexture;t.bindFramebuffer(36160,$.__webglFramebuffer),a.framebufferTexture2D(36009,36064+pe,3553,xe,0)}t.bindFramebuffer(36009,$.__webglMultisampledFramebuffer)}}function pt(A){return Math.min(d,A.samples)}function $e(A){const x=n.get(A);return r&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function rt(A){const x=o.render.frame;g.get(A)!==x&&(g.set(A,x),A.update())}function Pt(A,x){const W=A.encoding,te=A.format,ae=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===Ga||W!==pi&&(W===Qe?r===!1?e.has("EXT_sRGB")===!0&&te===sn?(A.format=Ga,A.minFilter=qt,A.generateMipmaps=!1):x=Cc.sRGBToLinear(x):(te!==sn||ae!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",W)),x}this.allocateTextureUnit=J,this.resetTextureUnits=ie,this.setTexture2D=re,this.setTexture2DArray=Ie,this.setTexture3D=ce,this.setTextureCube=X,this.rebindTextures=Be,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=$e}function hg(a,e,t){const n=t.isWebGL2;function i(s,o=null){let r;if(s===fi)return 5121;if(s===zu)return 32819;if(s===ku)return 32820;if(s===Nu)return 5120;if(s===Fu)return 5122;if(s===Mc)return 5123;if(s===Bu)return 5124;if(s===oi)return 5125;if(s===Wn)return 5126;if(s===Rs)return n?5131:(r=e.get("OES_texture_half_float"),r!==null?r.HALF_FLOAT_OES:null);if(s===Hu)return 6406;if(s===sn)return 6408;if(s===Gu)return 6409;if(s===Vu)return 6410;if(s===ui)return 6402;if(s===ss)return 34041;if(s===Ga)return r=e.get("EXT_sRGB"),r!==null?r.SRGB_ALPHA_EXT:null;if(s===Wu)return 6403;if(s===Xu)return 36244;if(s===qu)return 33319;if(s===ju)return 33320;if(s===Ku)return 36249;if(s===Jr||s===Qr||s===ea||s===ta)if(o===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(s===Jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(s===Jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Eo||s===Ao||s===Co||s===Lo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(s===Eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Ao)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Lo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Zu)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Ro||s===Io)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(s===Ro)return o===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(s===Io)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Po||s===Do||s===Uo||s===Oo||s===No||s===Fo||s===Bo||s===zo||s===ko||s===Ho||s===Go||s===Vo||s===Wo||s===Xo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(s===Po)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Do)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Uo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Oo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===No)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Fo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Bo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===zo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ko)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ho)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Go)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Vo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Xo)return o===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===na)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(s===na)return o===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Yu||s===qo||s===jo||s===Ko)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(s===na)return r.COMPRESSED_RED_RGTC1_EXT;if(s===qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===jo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ko)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Yi?n?34042:(r=e.get("WEBGL_depth_texture"),r!==null?r.UNSIGNED_INT_24_8_WEBGL:null):a[s]!==void 0?a[s]:null}return{convert:i}}class dg extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let ci=class extends ot{constructor(){super(),this.isGroup=!0,this.type="Group"}};const fg={type:"move"};class Ta{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const r=this._targetRay,u=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const p=t.getJointPose(y,n),l=this._getHandJoint(c,y);p!==null&&(l.matrix.fromArray(p.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.jointRadius=p.radius),l.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),m=.02,g=.005;c.inputState.pinching&&f>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));r!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(r.matrix.fromArray(i.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),i.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(i.linearVelocity)):r.hasLinearVelocity=!1,i.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(i.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(fg)))}return r!==null&&(r.visible=i!==null),u!==null&&(u.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ci;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class pg extends It{constructor(e,t,n,i,s,o,r,u,c,h){if(h=h!==void 0?h:ui,h!==ui&&h!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ui&&(n=oi),n===void 0&&h===ss&&(n=Yi),super(null,i,s,o,r,u,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=r!==void 0?r:Ct,this.minFilter=u!==void 0?u:Ct,this.flipY=!1,this.generateMipmaps=!1}}class mg extends _i{constructor(e,t){super();const n=this;let i=null,s=1,o=null,r="local-floor",u=1,c=null,h=null,d=null,f=null,m=null,g=null;const y=t.getContextAttributes();let p=null,l=null;const E=[],w=[],S=new Set,T=new Map,D=new Ht;D.layers.enable(1),D.viewport=new st;const O=new Ht;O.layers.enable(2),O.viewport=new st;const B=[D,O],M=new dg;M.layers.enable(1),M.layers.enable(2);let C=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=E[X];return Q===void 0&&(Q=new Ta,E[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=E[X];return Q===void 0&&(Q=new Ta,E[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=E[X];return Q===void 0&&(Q=new Ta,E[X]=Q),Q.getHandSpace()};function Y(X){const Q=w.indexOf(X.inputSource);if(Q===-1)return;const de=E[Q];de!==void 0&&de.dispatchEvent({type:X.type,data:X.inputSource})}function N(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",k);for(let X=0;X<E.length;X++){const Q=w[X];Q!==null&&(w[X]=null,E[X].disconnect(Q))}C=null,ee=null,e.setRenderTarget(p),m=null,f=null,d=null,i=null,l=null,ce.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",N),i.addEventListener("inputsourceschange",k),y.xrCompatible!==!0&&await t.makeXRCompatible(),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:i.renderState.layers===void 0?y.antialias:!0,alpha:y.alpha,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(i,t,Q),i.updateRenderState({baseLayer:m}),l=new mi(m.framebufferWidth,m.framebufferHeight,{format:sn,type:fi,encoding:e.outputEncoding,stencilBuffer:y.stencil})}else{let Q=null,de=null,ye=null;y.depth&&(ye=y.stencil?35056:33190,Q=y.stencil?ss:ui,de=y.stencil?Yi:oi);const G={colorFormat:32856,depthFormat:ye,scaleFactor:s};d=new XRWebGLBinding(i,t),f=d.createProjectionLayer(G),i.updateRenderState({layers:[f]}),l=new mi(f.textureWidth,f.textureHeight,{format:sn,type:fi,depthTexture:new pg(f.textureWidth,f.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:y.stencil,encoding:e.outputEncoding,samples:y.antialias?4:0});const Ue=e.properties.get(l);Ue.__ignoreDepthValues=f.ignoreDepthValues}l.isXRRenderTarget=!0,this.setFoveation(u),c=null,o=await i.requestReferenceSpace(r),ce.setContext(i),ce.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function k(X){for(let Q=0;Q<X.removed.length;Q++){const de=X.removed[Q],ye=w.indexOf(de);ye>=0&&(w[ye]=null,E[ye].disconnect(de))}for(let Q=0;Q<X.added.length;Q++){const de=X.added[Q];let ye=w.indexOf(de);if(ye===-1){for(let Ue=0;Ue<E.length;Ue++)if(Ue>=w.length){w.push(de),ye=Ue;break}else if(w[Ue]===null){w[Ue]=de,ye=Ue;break}if(ye===-1)break}const G=E[ye];G&&G.connect(de)}}const V=new P,ne=new P;function ie(X,Q,de){V.setFromMatrixPosition(Q.matrixWorld),ne.setFromMatrixPosition(de.matrixWorld);const ye=V.distanceTo(ne),G=Q.projectionMatrix.elements,Ue=de.projectionMatrix.elements,Re=G[14]/(G[10]-1),ue=G[14]/(G[10]+1),Ae=(G[9]+1)/G[5],Je=(G[9]-1)/G[5],be=(G[8]-1)/G[0],Be=(Ue[8]+1)/Ue[0],dt=Re*be,lt=Re*Be,_t=ye/(-be+Be),pt=_t*-be;Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(pt),X.translateZ(_t),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const $e=Re+_t,rt=ue+_t,Pt=dt-pt,A=lt+(ye-pt),x=Ae*ue/rt*$e,W=Je*ue/rt*$e;X.projectionMatrix.makePerspective(Pt,A,x,W,$e,rt),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function J(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;M.near=O.near=D.near=X.near,M.far=O.far=D.far=X.far,(C!==M.near||ee!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,ee=M.far);const Q=X.parent,de=M.cameras;J(M,Q);for(let ye=0;ye<de.length;ye++)J(de[ye],Q);de.length===2?ie(M,D,O):M.projectionMatrix.copy(D.projectionMatrix),oe(X,M,Q)};function oe(X,Q,de){de===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(de.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0);const ye=X.children;for(let G=0,Ue=ye.length;G<Ue;G++)ye[G].updateMatrixWorld(!0);X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=as*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&m===null))return u},this.setFoveation=function(X){u=X,f!==null&&(f.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.getPlanes=function(){return S};let re=null;function Ie(X,Q){if(h=Q.getViewerPose(c||o),g=Q,h!==null){const de=h.views;m!==null&&(e.setRenderTargetFramebuffer(l,m.framebuffer),e.setRenderTarget(l));let ye=!1;de.length!==M.cameras.length&&(M.cameras.length=0,ye=!0);for(let G=0;G<de.length;G++){const Ue=de[G];let Re=null;if(m!==null)Re=m.getViewport(Ue);else{const Ae=d.getViewSubImage(f,Ue);Re=Ae.viewport,G===0&&(e.setRenderTargetTextures(l,Ae.colorTexture,f.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(l))}let ue=B[G];ue===void 0&&(ue=new Ht,ue.layers.enable(G),ue.viewport=new st,B[G]=ue),ue.matrix.fromArray(Ue.transform.matrix),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.projectionMatrix.fromArray(Ue.projectionMatrix),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert(),ue.viewport.set(Re.x,Re.y,Re.width,Re.height),G===0&&(M.matrix.copy(ue.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ye===!0&&M.cameras.push(ue)}}for(let de=0;de<E.length;de++){const ye=w[de],G=E[de];ye!==null&&G!==void 0&&G.update(ye,Q,c||o)}if(re&&re(X,Q),Q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Q.detectedPlanes});let de=null;for(const ye of S)Q.detectedPlanes.has(ye)||(de===null&&(de=[]),de.push(ye));if(de!==null)for(const ye of de)S.delete(ye),T.delete(ye),n.dispatchEvent({type:"planeremoved",data:ye});for(const ye of Q.detectedPlanes)if(!S.has(ye))S.add(ye),T.set(ye,Q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:ye});else{const G=T.get(ye);ye.lastChangedTime>G&&(T.set(ye,ye.lastChangedTime),n.dispatchEvent({type:"planechanged",data:ye}))}}g=null}const ce=new Nc;ce.setAnimationLoop(Ie),this.setAnimationLoop=function(X){re=X},this.dispose=function(){}}}function gg(a,e){function t(p,l){p.matrixAutoUpdate===!0&&p.updateMatrix(),l.value.copy(p.matrix)}function n(p,l){l.color.getRGB(p.fogColor.value,Uc(a)),l.isFog?(p.fogNear.value=l.near,p.fogFar.value=l.far):l.isFogExp2&&(p.fogDensity.value=l.density)}function i(p,l,E,w,S){l.isMeshBasicMaterial||l.isMeshLambertMaterial?s(p,l):l.isMeshToonMaterial?(s(p,l),d(p,l)):l.isMeshPhongMaterial?(s(p,l),h(p,l)):l.isMeshStandardMaterial?(s(p,l),f(p,l),l.isMeshPhysicalMaterial&&m(p,l,S)):l.isMeshMatcapMaterial?(s(p,l),g(p,l)):l.isMeshDepthMaterial?s(p,l):l.isMeshDistanceMaterial?(s(p,l),y(p,l)):l.isMeshNormalMaterial?s(p,l):l.isLineBasicMaterial?(o(p,l),l.isLineDashedMaterial&&r(p,l)):l.isPointsMaterial?u(p,l,E,w):l.isSpriteMaterial?c(p,l):l.isShadowMaterial?(p.color.value.copy(l.color),p.opacity.value=l.opacity):l.isShaderMaterial&&(l.uniformsNeedUpdate=!1)}function s(p,l){p.opacity.value=l.opacity,l.color&&p.diffuse.value.copy(l.color),l.emissive&&p.emissive.value.copy(l.emissive).multiplyScalar(l.emissiveIntensity),l.map&&(p.map.value=l.map,t(l.map,p.mapTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap,t(l.alphaMap,p.alphaMapTransform)),l.bumpMap&&(p.bumpMap.value=l.bumpMap,t(l.bumpMap,p.bumpMapTransform),p.bumpScale.value=l.bumpScale,l.side===jt&&(p.bumpScale.value*=-1)),l.normalMap&&(p.normalMap.value=l.normalMap,t(l.normalMap,p.normalMapTransform),p.normalScale.value.copy(l.normalScale),l.side===jt&&p.normalScale.value.negate()),l.displacementMap&&(p.displacementMap.value=l.displacementMap,t(l.displacementMap,p.displacementMapTransform),p.displacementScale.value=l.displacementScale,p.displacementBias.value=l.displacementBias),l.emissiveMap&&(p.emissiveMap.value=l.emissiveMap,t(l.emissiveMap,p.emissiveMapTransform)),l.specularMap&&(p.specularMap.value=l.specularMap,t(l.specularMap,p.specularMapTransform)),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest);const E=e.get(l).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=l.reflectivity,p.ior.value=l.ior,p.refractionRatio.value=l.refractionRatio),l.lightMap){p.lightMap.value=l.lightMap;const w=a.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=l.lightMapIntensity*w,t(l.lightMap,p.lightMapTransform)}l.aoMap&&(p.aoMap.value=l.aoMap,p.aoMapIntensity.value=l.aoMapIntensity,t(l.aoMap,p.aoMapTransform))}function o(p,l){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,l.map&&(p.map.value=l.map,t(l.map,p.mapTransform))}function r(p,l){p.dashSize.value=l.dashSize,p.totalSize.value=l.dashSize+l.gapSize,p.scale.value=l.scale}function u(p,l,E,w){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,p.size.value=l.size*E,p.scale.value=w*.5,l.map&&(p.map.value=l.map,t(l.map,p.uvTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest)}function c(p,l){p.diffuse.value.copy(l.color),p.opacity.value=l.opacity,p.rotation.value=l.rotation,l.map&&(p.map.value=l.map,t(l.map,p.mapTransform)),l.alphaMap&&(p.alphaMap.value=l.alphaMap),l.alphaTest>0&&(p.alphaTest.value=l.alphaTest)}function h(p,l){p.specular.value.copy(l.specular),p.shininess.value=Math.max(l.shininess,1e-4)}function d(p,l){l.gradientMap&&(p.gradientMap.value=l.gradientMap)}function f(p,l){p.metalness.value=l.metalness,l.metalnessMap&&(p.metalnessMap.value=l.metalnessMap,t(l.metalnessMap,p.metalnessMapTransform)),p.roughness.value=l.roughness,l.roughnessMap&&(p.roughnessMap.value=l.roughnessMap,t(l.roughnessMap,p.roughnessMapTransform)),e.get(l).envMap&&(p.envMapIntensity.value=l.envMapIntensity)}function m(p,l,E){p.ior.value=l.ior,l.sheen>0&&(p.sheenColor.value.copy(l.sheenColor).multiplyScalar(l.sheen),p.sheenRoughness.value=l.sheenRoughness,l.sheenColorMap&&(p.sheenColorMap.value=l.sheenColorMap,t(l.sheenColorMap,p.sheenColorMapTransform)),l.sheenRoughnessMap&&(p.sheenRoughnessMap.value=l.sheenRoughnessMap,t(l.sheenRoughnessMap,p.sheenRoughnessMapTransform))),l.clearcoat>0&&(p.clearcoat.value=l.clearcoat,p.clearcoatRoughness.value=l.clearcoatRoughness,l.clearcoatMap&&(p.clearcoatMap.value=l.clearcoatMap,t(l.clearcoatMap,p.clearcoatMapTransform)),l.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=l.clearcoatRoughnessMap,t(l.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),l.clearcoatNormalMap&&(p.clearcoatNormalMap.value=l.clearcoatNormalMap,t(l.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(l.clearcoatNormalScale),l.side===jt&&p.clearcoatNormalScale.value.negate())),l.iridescence>0&&(p.iridescence.value=l.iridescence,p.iridescenceIOR.value=l.iridescenceIOR,p.iridescenceThicknessMinimum.value=l.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=l.iridescenceThicknessRange[1],l.iridescenceMap&&(p.iridescenceMap.value=l.iridescenceMap,t(l.iridescenceMap,p.iridescenceMapTransform)),l.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=l.iridescenceThicknessMap,t(l.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),l.transmission>0&&(p.transmission.value=l.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),l.transmissionMap&&(p.transmissionMap.value=l.transmissionMap,t(l.transmissionMap,p.transmissionMapTransform)),p.thickness.value=l.thickness,l.thicknessMap&&(p.thicknessMap.value=l.thicknessMap,t(l.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=l.attenuationDistance,p.attenuationColor.value.copy(l.attenuationColor)),p.specularIntensity.value=l.specularIntensity,p.specularColor.value.copy(l.specularColor),l.specularColorMap&&(p.specularColorMap.value=l.specularColorMap,t(l.specularColorMap,p.specularColorMapTransform)),l.specularIntensityMap&&(p.specularIntensityMap.value=l.specularIntensityMap,t(l.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,l){l.matcap&&(p.matcap.value=l.matcap)}function y(p,l){const E=e.get(l).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yg(a,e,t,n){let i={},s={},o=[];const r=t.isWebGL2?a.getParameter(35375):0;function u(E,w){const S=w.program;n.uniformBlockBinding(E,S)}function c(E,w){let S=i[E.id];S===void 0&&(g(E),S=h(E),i[E.id]=S,E.addEventListener("dispose",p));const T=w.program;n.updateUBOMapping(E,T);const D=e.render.frame;s[E.id]!==D&&(f(E),s[E.id]=D)}function h(E){const w=d();E.__bindingPointIndex=w;const S=a.createBuffer(),T=E.__size,D=E.usage;return a.bindBuffer(35345,S),a.bufferData(35345,T,D),a.bindBuffer(35345,null),a.bindBufferBase(35345,w,S),S}function d(){for(let E=0;E<r;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const w=i[E.id],S=E.uniforms,T=E.__cache;a.bindBuffer(35345,w);for(let D=0,O=S.length;D<O;D++){const B=S[D];if(m(B,D,T)===!0){const M=B.__offset,C=Array.isArray(B.value)?B.value:[B.value];let ee=0;for(let Y=0;Y<C.length;Y++){const N=C[Y],k=y(N);typeof N=="number"?(B.__data[0]=N,a.bufferSubData(35345,M+ee,B.__data)):N.isMatrix3?(B.__data[0]=N.elements[0],B.__data[1]=N.elements[1],B.__data[2]=N.elements[2],B.__data[3]=N.elements[0],B.__data[4]=N.elements[3],B.__data[5]=N.elements[4],B.__data[6]=N.elements[5],B.__data[7]=N.elements[0],B.__data[8]=N.elements[6],B.__data[9]=N.elements[7],B.__data[10]=N.elements[8],B.__data[11]=N.elements[0]):(N.toArray(B.__data,ee),ee+=k.storage/Float32Array.BYTES_PER_ELEMENT)}a.bufferSubData(35345,M,B.__data)}}a.bindBuffer(35345,null)}function m(E,w,S){const T=E.value;if(S[w]===void 0){if(typeof T=="number")S[w]=T;else{const D=Array.isArray(T)?T:[T],O=[];for(let B=0;B<D.length;B++)O.push(D[B].clone());S[w]=O}return!0}else if(typeof T=="number"){if(S[w]!==T)return S[w]=T,!0}else{const D=Array.isArray(S[w])?S[w]:[S[w]],O=Array.isArray(T)?T:[T];for(let B=0;B<D.length;B++){const M=D[B];if(M.equals(O[B])===!1)return M.copy(O[B]),!0}}return!1}function g(E){const w=E.uniforms;let S=0;const T=16;let D=0;for(let O=0,B=w.length;O<B;O++){const M=w[O],C={boundary:0,storage:0},ee=Array.isArray(M.value)?M.value:[M.value];for(let Y=0,N=ee.length;Y<N;Y++){const k=ee[Y],V=y(k);C.boundary+=V.boundary,C.storage+=V.storage}if(M.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=S,O>0){D=S%T;const Y=T-D;D!==0&&Y-C.boundary<0&&(S+=T-D,M.__offset=S)}S+=C.storage}return D=S%T,D>0&&(S+=T-D),E.__size=S,E.__cache={},this}function y(E){const w={boundary:0,storage:0};return typeof E=="number"?(w.boundary=4,w.storage=4):E.isVector2?(w.boundary=8,w.storage=8):E.isVector3||E.isColor?(w.boundary=16,w.storage=12):E.isVector4?(w.boundary=16,w.storage=16):E.isMatrix3?(w.boundary=48,w.storage=48):E.isMatrix4?(w.boundary=64,w.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),w}function p(E){const w=E.target;w.removeEventListener("dispose",p);const S=o.indexOf(w.__bindingPointIndex);o.splice(S,1),a.deleteBuffer(i[w.id]),delete i[w.id],delete s[w.id]}function l(){for(const E in i)a.deleteBuffer(i[E]);o=[],i={},s={}}return{bind:u,update:c,dispose:l}}function _g(){const a=Ds("canvas");return a.style.display="block",a}class Hc{constructor(e={}){const{canvas:t=_g(),context:n=null,depth:i=!0,stencil:s=!0,alpha:o=!1,antialias:r=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let m=null,g=null;const y=[],p=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=pi,this.useLegacyLights=!0,this.toneMapping=Rn,this.toneMappingExposure=1;const l=this;let E=!1,w=0,S=0,T=null,D=-1,O=null;const B=new st,M=new st;let C=null,ee=t.width,Y=t.height,N=1,k=null,V=null;const ne=new st(0,0,ee,Y),ie=new st(0,0,ee,Y);let J=!1;const oe=new io;let re=!1,Ie=!1,ce=null;const X=new He,Q=new P,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ye(){return T===null?N:1}let G=n;function Ue(b,z){for(let q=0;q<b.length;q++){const F=b[q],K=t.getContext(F,z);if(K!==null)return K}return null}try{const b={alpha:!0,depth:i,stencil:s,antialias:r,premultipliedAlpha:u,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$a}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Oe,!1),t.addEventListener("webglcontextcreationerror",Ge,!1),G===null){const z=["webgl2","webgl","experimental-webgl"];if(l.isWebGL1Renderer===!0&&z.shift(),G=Ue(z,b),G===null)throw Ue(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Re,ue,Ae,Je,be,Be,dt,lt,_t,pt,$e,rt,Pt,A,x,W,te,ae,fe,R,$,H,pe,xe;function Me(){Re=new Lp(G),ue=new bp(G,Re,e),Re.init(ue),H=new hg(G,Re,ue),Ae=new cg(G,Re,ue),Je=new Pp,be=new Zm,Be=new ug(G,Re,Ae,be,ue,H,Je),dt=new Tp(l),lt=new Cp(l),_t=new Vh(G,ue),pe=new Sp(G,Re,_t,ue),pt=new Rp(G,_t,Je,pe),$e=new Np(G,pt,_t,Je),fe=new Op(G,ue,Be),W=new wp(be),rt=new Km(l,dt,lt,Re,ue,pe,W),Pt=new gg(l,be),A=new $m,x=new ig(Re,ue),ae=new xp(l,dt,lt,Ae,$e,f,u),te=new lg(l,$e,ue),xe=new yg(G,Je,ue,Ae),R=new Mp(G,Re,Je,ue),$=new Ip(G,Re,Je,ue),Je.programs=rt.programs,l.capabilities=ue,l.extensions=Re,l.properties=be,l.renderLists=A,l.shadowMap=te,l.state=Ae,l.info=Je}Me();const _e=new mg(l,G);this.xr=_e,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const b=Re.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Re.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(b){b!==void 0&&(N=b,this.setSize(ee,Y,!1))},this.getSize=function(b){return b.set(ee,Y)},this.setSize=function(b,z,q=!0){if(_e.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ee=b,Y=z,t.width=Math.floor(b*N),t.height=Math.floor(z*N),q===!0&&(t.style.width=b+"px",t.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(ee*N,Y*N).floor()},this.setDrawingBufferSize=function(b,z,q){ee=b,Y=z,N=q,t.width=Math.floor(b*q),t.height=Math.floor(z*q),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(B)},this.getViewport=function(b){return b.copy(ne)},this.setViewport=function(b,z,q,F){b.isVector4?ne.set(b.x,b.y,b.z,b.w):ne.set(b,z,q,F),Ae.viewport(B.copy(ne).multiplyScalar(N).floor())},this.getScissor=function(b){return b.copy(ie)},this.setScissor=function(b,z,q,F){b.isVector4?ie.set(b.x,b.y,b.z,b.w):ie.set(b,z,q,F),Ae.scissor(M.copy(ie).multiplyScalar(N).floor())},this.getScissorTest=function(){return J},this.setScissorTest=function(b){Ae.setScissorTest(J=b)},this.setOpaqueSort=function(b){k=b},this.setTransparentSort=function(b){V=b},this.getClearColor=function(b){return b.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(b=!0,z=!0,q=!0){let F=0;b&&(F|=16384),z&&(F|=256),q&&(F|=1024),G.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Oe,!1),t.removeEventListener("webglcontextcreationerror",Ge,!1),A.dispose(),x.dispose(),be.dispose(),dt.dispose(),lt.dispose(),$e.dispose(),pe.dispose(),xe.dispose(),rt.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",we),_e.removeEventListener("sessionend",at),ce&&(ce.dispose(),ce=null),ct.stop()};function Se(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Oe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=Je.autoReset,z=te.enabled,q=te.autoUpdate,F=te.needsUpdate,K=te.type;Me(),Je.autoReset=b,te.enabled=z,te.autoUpdate=q,te.needsUpdate=F,te.type=K}function Ge(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function mt(b){const z=b.target;z.removeEventListener("dispose",mt),U(z)}function U(b){j(b),be.remove(b)}function j(b){const z=be.get(b).programs;z!==void 0&&(z.forEach(function(q){rt.releaseProgram(q)}),b.isShaderMaterial&&rt.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,q,F,K,Ee){z===null&&(z=de);const Pe=K.isMesh&&K.matrixWorld.determinant()<0,Ne=iu(b,z,q,F,K);Ae.setMaterial(F,Pe);let ze=q.index,Ve=1;F.wireframe===!0&&(ze=pt.getWireframeAttribute(q),Ve=2);const We=q.drawRange,Xe=q.attributes.position;let nt=We.start*Ve,Ft=(We.start+We.count)*Ve;Ee!==null&&(nt=Math.max(nt,Ee.start*Ve),Ft=Math.min(Ft,(Ee.start+Ee.count)*Ve)),ze!==null?(nt=Math.max(nt,0),Ft=Math.min(Ft,ze.count)):Xe!=null&&(nt=Math.max(nt,0),Ft=Math.min(Ft,Xe.count));const an=Ft-nt;if(an<0||an===1/0)return;pe.setup(K,F,Ne,q,ze);let Yn,vt=R;if(ze!==null&&(Yn=_t.get(ze),vt=$,vt.setIndex(Yn)),K.isMesh)F.wireframe===!0?(Ae.setLineWidth(F.wireframeLinewidth*ye()),vt.setMode(1)):vt.setMode(4);else if(K.isLine){let je=F.linewidth;je===void 0&&(je=1),Ae.setLineWidth(je*ye()),K.isLineSegments?vt.setMode(1):K.isLineLoop?vt.setMode(2):vt.setMode(3)}else K.isPoints?vt.setMode(0):K.isSprite&&vt.setMode(4);if(K.isInstancedMesh)vt.renderInstances(nt,an,K.count);else if(q.isInstancedBufferGeometry){const je=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Kr=Math.min(q.instanceCount,je);vt.renderInstances(nt,an,Kr)}else vt.render(nt,an)},this.compile=function(b,z){function q(F,K,Ee){F.transparent===!0&&F.side===Ye&&F.forceSinglePass===!1?(F.side=jt,F.needsUpdate=!0,Gs(F,K,Ee),F.side=In,F.needsUpdate=!0,Gs(F,K,Ee),F.side=Ye):Gs(F,K,Ee)}g=x.get(b),g.init(),p.push(g),b.traverseVisible(function(F){F.isLight&&F.layers.test(z.layers)&&(g.pushLight(F),F.castShadow&&g.pushShadow(F))}),g.setupLights(l.useLegacyLights),b.traverse(function(F){const K=F.material;if(K)if(Array.isArray(K))for(let Ee=0;Ee<K.length;Ee++){const Pe=K[Ee];q(Pe,b,F)}else q(K,b,F)}),p.pop(),g=null};let se=null;function ve(b){se&&se(b)}function we(){ct.stop()}function at(){ct.start()}const ct=new Nc;ct.setAnimationLoop(ve),typeof self<"u"&&ct.setContext(self),this.setAnimationLoop=function(b){se=b,_e.setAnimationLoop(b),b===null?ct.stop():ct.start()},_e.addEventListener("sessionstart",we),_e.addEventListener("sessionend",at),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(z),z=_e.getCamera()),b.isScene===!0&&b.onBeforeRender(l,b,z,T),g=x.get(b,p.length),g.init(),p.push(g),X.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),oe.setFromProjectionMatrix(X),Ie=this.localClippingEnabled,re=W.init(this.clippingPlanes,Ie),m=A.get(b,y.length),m.init(),y.push(m),Dt(b,z,0,l.sortObjects),m.finish(),l.sortObjects===!0&&m.sort(k,V),re===!0&&W.beginShadows();const q=g.state.shadowsArray;if(te.render(q,b,z),re===!0&&W.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(m,b),g.setupLights(l.useLegacyLights),z.isArrayCamera){const F=z.cameras;for(let K=0,Ee=F.length;K<Ee;K++){const Pe=F[K];Nn(m,b,Pe,Pe.viewport)}}else Nn(m,b,z);T!==null&&(Be.updateMultisampleRenderTarget(T),Be.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(l,b,z),pe.resetDefaultState(),D=-1,O=null,p.pop(),p.length>0?g=p[p.length-1]:g=null,y.pop(),y.length>0?m=y[y.length-1]:m=null};function Dt(b,z,q,F){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||oe.intersectsSprite(b)){F&&Q.setFromMatrixPosition(b.matrixWorld).applyMatrix4(X);const Pe=$e.update(b),Ne=b.material;Ne.visible&&m.push(b,Pe,Ne,q,Q.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(b.isSkinnedMesh&&b.skeleton.frame!==Je.render.frame&&(b.skeleton.update(),b.skeleton.frame=Je.render.frame),!b.frustumCulled||oe.intersectsObject(b))){F&&Q.setFromMatrixPosition(b.matrixWorld).applyMatrix4(X);const Pe=$e.update(b),Ne=b.material;if(Array.isArray(Ne)){const ze=Pe.groups;for(let Ve=0,We=ze.length;Ve<We;Ve++){const Xe=ze[Ve],nt=Ne[Xe.materialIndex];nt&&nt.visible&&m.push(b,Pe,nt,q,Q.z,Xe)}}else Ne.visible&&m.push(b,Pe,Ne,q,Q.z,null)}}const Ee=b.children;for(let Pe=0,Ne=Ee.length;Pe<Ne;Pe++)Dt(Ee[Pe],z,q,F)}function Nn(b,z,q,F){const K=b.opaque,Ee=b.transmissive,Pe=b.transparent;g.setupLightsView(q),re===!0&&W.setGlobalState(l.clippingPlanes,q),Ee.length>0&&gt(K,Ee,z,q),F&&Ae.viewport(B.copy(F)),K.length>0&&Jt(K,z,q),Ee.length>0&&Jt(Ee,z,q),Pe.length>0&&Jt(Pe,z,q),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function gt(b,z,q,F){if(ce===null){const Ne=ue.isWebGL2;ce=new mi(1024,1024,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?Rs:fi,minFilter:di,samples:Ne&&r===!0?4:0})}const K=l.getRenderTarget();l.setRenderTarget(ce),l.clear();const Ee=l.toneMapping;l.toneMapping=Rn,Jt(b,q,F),Be.updateMultisampleRenderTarget(ce),Be.updateRenderTargetMipmap(ce);let Pe=!1;for(let Ne=0,ze=z.length;Ne<ze;Ne++){const Ve=z[Ne],We=Ve.object,Xe=Ve.geometry,nt=Ve.material,Ft=Ve.group;if(nt.side===Ye&&We.layers.test(F.layers)){const an=nt.side;nt.side=jt,nt.needsUpdate=!0,fn(We,q,F,Xe,nt,Ft),nt.side=an,nt.needsUpdate=!0,Pe=!0}}Pe===!0&&(Be.updateMultisampleRenderTarget(ce),Be.updateRenderTargetMipmap(ce)),l.setRenderTarget(K),l.toneMapping=Ee}function Jt(b,z,q){const F=z.isScene===!0?z.overrideMaterial:null;for(let K=0,Ee=b.length;K<Ee;K++){const Pe=b[K],Ne=Pe.object,ze=Pe.geometry,Ve=F===null?Pe.material:F,We=Pe.group;Ne.layers.test(q.layers)&&fn(Ne,z,q,ze,Ve,We)}}function fn(b,z,q,F,K,Ee){b.onBeforeRender(l,z,q,F,K,Ee),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),K.onBeforeRender(l,z,q,F,b,Ee),K.transparent===!0&&K.side===Ye&&K.forceSinglePass===!1?(K.side=jt,K.needsUpdate=!0,l.renderBufferDirect(q,z,F,K,b,Ee),K.side=In,K.needsUpdate=!0,l.renderBufferDirect(q,z,F,K,b,Ee),K.side=Ye):l.renderBufferDirect(q,z,F,K,b,Ee),b.onAfterRender(l,z,q,F,K,Ee)}function Gs(b,z,q){z.isScene!==!0&&(z=de);const F=be.get(b),K=g.state.lights,Ee=g.state.shadowsArray,Pe=K.state.version,Ne=rt.getParameters(b,K.state,Ee,z,q),ze=rt.getProgramCacheKey(Ne);let Ve=F.programs;F.environment=b.isMeshStandardMaterial?z.environment:null,F.fog=z.fog,F.envMap=(b.isMeshStandardMaterial?lt:dt).get(b.envMap||F.environment),Ve===void 0&&(b.addEventListener("dispose",mt),Ve=new Map,F.programs=Ve);let We=Ve.get(ze);if(We!==void 0){if(F.currentProgram===We&&F.lightsStateVersion===Pe)return yo(b,Ne),We}else Ne.uniforms=rt.getUniforms(b),b.onBuild(q,Ne,l),b.onBeforeCompile(Ne,l),We=rt.acquireProgram(Ne,ze),Ve.set(ze,We),F.uniforms=Ne.uniforms;const Xe=F.uniforms;(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Xe.clippingPlanes=W.uniform),yo(b,Ne),F.needsLights=ru(b),F.lightsStateVersion=Pe,F.needsLights&&(Xe.ambientLightColor.value=K.state.ambient,Xe.lightProbe.value=K.state.probe,Xe.directionalLights.value=K.state.directional,Xe.directionalLightShadows.value=K.state.directionalShadow,Xe.spotLights.value=K.state.spot,Xe.spotLightShadows.value=K.state.spotShadow,Xe.rectAreaLights.value=K.state.rectArea,Xe.ltc_1.value=K.state.rectAreaLTC1,Xe.ltc_2.value=K.state.rectAreaLTC2,Xe.pointLights.value=K.state.point,Xe.pointLightShadows.value=K.state.pointShadow,Xe.hemisphereLights.value=K.state.hemi,Xe.directionalShadowMap.value=K.state.directionalShadowMap,Xe.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Xe.spotShadowMap.value=K.state.spotShadowMap,Xe.spotLightMatrix.value=K.state.spotLightMatrix,Xe.spotLightMap.value=K.state.spotLightMap,Xe.pointShadowMap.value=K.state.pointShadowMap,Xe.pointShadowMatrix.value=K.state.pointShadowMatrix);const nt=We.getUniforms(),Ft=Mr.seqWithValue(nt.seq,Xe);return F.currentProgram=We,F.uniformsList=Ft,We}function yo(b,z){const q=be.get(b);q.outputEncoding=z.outputEncoding,q.instancing=z.instancing,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function iu(b,z,q,F,K){z.isScene!==!0&&(z=de),Be.resetTextureUnits();const Ee=z.fog,Pe=F.isMeshStandardMaterial?z.environment:null,Ne=T===null?l.outputEncoding:T.isXRRenderTarget===!0?T.texture.encoding:pi,ze=(F.isMeshStandardMaterial?lt:dt).get(F.envMap||Pe),Ve=F.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,We=!!F.normalMap&&!!q.attributes.tangent,Xe=!!q.morphAttributes.position,nt=!!q.morphAttributes.normal,Ft=!!q.morphAttributes.color,an=F.toneMapped?l.toneMapping:Rn,Yn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,vt=Yn!==void 0?Yn.length:0,je=be.get(F),Kr=g.state.lights;if(re===!0&&(Ie===!0||b!==O)){const Kt=b===O&&F.id===D;W.setState(F,b,Kt)}let Et=!1;F.version===je.__version?(je.needsLights&&je.lightsStateVersion!==Kr.state.version||je.outputEncoding!==Ne||K.isInstancedMesh&&je.instancing===!1||!K.isInstancedMesh&&je.instancing===!0||K.isSkinnedMesh&&je.skinning===!1||!K.isSkinnedMesh&&je.skinning===!0||je.envMap!==ze||F.fog===!0&&je.fog!==Ee||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==W.numPlanes||je.numIntersection!==W.numIntersection)||je.vertexAlphas!==Ve||je.vertexTangents!==We||je.morphTargets!==Xe||je.morphNormals!==nt||je.morphColors!==Ft||je.toneMapping!==an||ue.isWebGL2===!0&&je.morphTargetsCount!==vt)&&(Et=!0):(Et=!0,je.__version=F.version);let $n=je.currentProgram;Et===!0&&($n=Gs(F,z,K));let _o=!1,gs=!1,Zr=!1;const Bt=$n.getUniforms(),Jn=je.uniforms;if(Ae.useProgram($n.program)&&(_o=!0,gs=!0,Zr=!0),F.id!==D&&(D=F.id,gs=!0),_o||O!==b){if(Bt.setValue(G,"projectionMatrix",b.projectionMatrix),ue.logarithmicDepthBuffer&&Bt.setValue(G,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),O!==b&&(O=b,gs=!0,Zr=!0),F.isShaderMaterial||F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshStandardMaterial||F.envMap){const Kt=Bt.map.cameraPosition;Kt!==void 0&&Kt.setValue(G,Q.setFromMatrixPosition(b.matrixWorld))}(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&Bt.setValue(G,"isOrthographic",b.isOrthographicCamera===!0),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial||F.isShadowMaterial||K.isSkinnedMesh)&&Bt.setValue(G,"viewMatrix",b.matrixWorldInverse)}if(K.isSkinnedMesh){Bt.setOptional(G,K,"bindMatrix"),Bt.setOptional(G,K,"bindMatrixInverse");const Kt=K.skeleton;Kt&&(ue.floatVertexTextures?(Kt.boneTexture===null&&Kt.computeBoneTexture(),Bt.setValue(G,"boneTexture",Kt.boneTexture,Be),Bt.setValue(G,"boneTextureSize",Kt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Yr=q.morphAttributes;if((Yr.position!==void 0||Yr.normal!==void 0||Yr.color!==void 0&&ue.isWebGL2===!0)&&fe.update(K,q,$n),(gs||je.receiveShadow!==K.receiveShadow)&&(je.receiveShadow=K.receiveShadow,Bt.setValue(G,"receiveShadow",K.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Jn.envMap.value=ze,Jn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),gs&&(Bt.setValue(G,"toneMappingExposure",l.toneMappingExposure),je.needsLights&&su(Jn,Zr),Ee&&F.fog===!0&&Pt.refreshFogUniforms(Jn,Ee),Pt.refreshMaterialUniforms(Jn,F,N,Y,ce),Mr.upload(G,je.uniformsList,Jn,Be)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(Mr.upload(G,je.uniformsList,Jn,Be),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&Bt.setValue(G,"center",K.center),Bt.setValue(G,"modelViewMatrix",K.modelViewMatrix),Bt.setValue(G,"normalMatrix",K.normalMatrix),Bt.setValue(G,"modelMatrix",K.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const Kt=F.uniformsGroups;for(let $r=0,au=Kt.length;$r<au;$r++)if(ue.isWebGL2){const vo=Kt[$r];xe.update(vo,$n),xe.bind(vo,$n)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return $n}function su(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function ru(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,z,q){be.get(b.texture).__webglTexture=z,be.get(b.depthTexture).__webglTexture=q;const F=be.get(b);F.__hasExternalTextures=!0,F.__hasExternalTextures&&(F.__autoAllocateDepthBuffer=q===void 0,F.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,z){const q=be.get(b);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,q=0){T=b,w=z,S=q;let F=!0,K=null,Ee=!1,Pe=!1;if(b){const ze=be.get(b);ze.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(36160,null),F=!1):ze.__webglFramebuffer===void 0?Be.setupRenderTarget(b):ze.__hasExternalTextures&&Be.rebindTextures(b,be.get(b.texture).__webglTexture,be.get(b.depthTexture).__webglTexture);const Ve=b.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Pe=!0);const We=be.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(K=We[z],Ee=!0):ue.isWebGL2&&b.samples>0&&Be.useMultisampledRTT(b)===!1?K=be.get(b).__webglMultisampledFramebuffer:K=We,B.copy(b.viewport),M.copy(b.scissor),C=b.scissorTest}else B.copy(ne).multiplyScalar(N).floor(),M.copy(ie).multiplyScalar(N).floor(),C=J;if(Ae.bindFramebuffer(36160,K)&&ue.drawBuffers&&F&&Ae.drawBuffers(b,K),Ae.viewport(B),Ae.scissor(M),Ae.setScissorTest(C),Ee){const ze=be.get(b.texture);G.framebufferTexture2D(36160,36064,34069+z,ze.__webglTexture,q)}else if(Pe){const ze=be.get(b.texture),Ve=z||0;G.framebufferTextureLayer(36160,36064,ze.__webglTexture,q||0,Ve)}D=-1},this.readRenderTargetPixels=function(b,z,q,F,K,Ee,Pe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=be.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ne=Ne[Pe]),Ne){Ae.bindFramebuffer(36160,Ne);try{const ze=b.texture,Ve=ze.format,We=ze.type;if(Ve!==sn&&H.convert(Ve)!==G.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Xe=We===Rs&&(Re.has("EXT_color_buffer_half_float")||ue.isWebGL2&&Re.has("EXT_color_buffer_float"));if(We!==fi&&H.convert(We)!==G.getParameter(35738)&&!(We===Wn&&(ue.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!Xe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-F&&q>=0&&q<=b.height-K&&G.readPixels(z,q,F,K,H.convert(Ve),H.convert(We),Ee)}finally{const ze=T!==null?be.get(T).__webglFramebuffer:null;Ae.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(b,z,q=0){const F=Math.pow(2,-q),K=Math.floor(z.image.width*F),Ee=Math.floor(z.image.height*F);Be.setTexture2D(z,0),G.copyTexSubImage2D(3553,q,0,0,b.x,b.y,K,Ee),Ae.unbindTexture()},this.copyTextureToTexture=function(b,z,q,F=0){const K=z.image.width,Ee=z.image.height,Pe=H.convert(q.format),Ne=H.convert(q.type);Be.setTexture2D(q,0),G.pixelStorei(37440,q.flipY),G.pixelStorei(37441,q.premultiplyAlpha),G.pixelStorei(3317,q.unpackAlignment),z.isDataTexture?G.texSubImage2D(3553,F,b.x,b.y,K,Ee,Pe,Ne,z.image.data):z.isCompressedTexture?G.compressedTexSubImage2D(3553,F,b.x,b.y,z.mipmaps[0].width,z.mipmaps[0].height,Pe,z.mipmaps[0].data):G.texSubImage2D(3553,F,b.x,b.y,Pe,Ne,z.image),F===0&&q.generateMipmaps&&G.generateMipmap(3553),Ae.unbindTexture()},this.copyTextureToTexture3D=function(b,z,q,F,K=0){if(l.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ee=b.max.x-b.min.x+1,Pe=b.max.y-b.min.y+1,Ne=b.max.z-b.min.z+1,ze=H.convert(F.format),Ve=H.convert(F.type);let We;if(F.isData3DTexture)Be.setTexture3D(F,0),We=32879;else if(F.isDataArrayTexture)Be.setTexture2DArray(F,0),We=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(37440,F.flipY),G.pixelStorei(37441,F.premultiplyAlpha),G.pixelStorei(3317,F.unpackAlignment);const Xe=G.getParameter(3314),nt=G.getParameter(32878),Ft=G.getParameter(3316),an=G.getParameter(3315),Yn=G.getParameter(32877),vt=q.isCompressedTexture?q.mipmaps[0]:q.image;G.pixelStorei(3314,vt.width),G.pixelStorei(32878,vt.height),G.pixelStorei(3316,b.min.x),G.pixelStorei(3315,b.min.y),G.pixelStorei(32877,b.min.z),q.isDataTexture||q.isData3DTexture?G.texSubImage3D(We,K,z.x,z.y,z.z,Ee,Pe,Ne,ze,Ve,vt.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(We,K,z.x,z.y,z.z,Ee,Pe,Ne,ze,vt.data)):G.texSubImage3D(We,K,z.x,z.y,z.z,Ee,Pe,Ne,ze,Ve,vt),G.pixelStorei(3314,Xe),G.pixelStorei(32878,nt),G.pixelStorei(3316,Ft),G.pixelStorei(3315,an),G.pixelStorei(32877,Yn),K===0&&F.generateMipmaps&&G.generateMipmap(We),Ae.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?Be.setTextureCube(b,0):b.isData3DTexture?Be.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Be.setTexture2DArray(b,0):Be.setTexture2D(b,0),Ae.unbindTexture()},this.resetState=function(){w=0,S=0,T=null,Ae.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}}class vg extends Hc{}vg.prototype.isWebGL1Renderer=!0;class ao{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=n}clone(){return new ao(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class xg extends ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Sg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ha,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=un()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=un()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const zt=new P;class oo{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyMatrix4(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.applyNormalMatrix(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)zt.fromBufferAttribute(this,t),zt.transformDirection(e),this.setXYZ(t,zt.x,zt.y,zt.z);return this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ln(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ln(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ln(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ln(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),i=it(i,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new oo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Nl=new P,Fl=new st,Bl=new st,Mg=new P,zl=new He,Vi=new P;class bg extends Fe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new He,this.bindMatrixInverse=new He,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Dn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Vi.fromBufferAttribute(t,n),this.applyBoneTransform(n,Vi),this.boundingBox.expandByPoint(Vi)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Un),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Vi.fromBufferAttribute(t,n),this.applyBoneTransform(n,Vi),this.boundingSphere.expandByPoint(Vi)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new st,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Fl.fromBufferAttribute(i.attributes.skinIndex,e),Bl.fromBufferAttribute(i.attributes.skinWeight,e),Nl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Bl.getComponent(s);if(o!==0){const r=Fl.getComponent(s);zl.multiplyMatrices(n.bones[r].matrixWorld,n.boneInverses[r]),t.addScaledVector(Mg.copy(Nl).applyMatrix4(zl),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Gc extends ot{constructor(){super(),this.isBone=!0,this.type="Bone"}}class wg extends It{constructor(e=null,t=1,n=1,i,s,o,r,u,c=Ct,h=Ct,d,f){super(null,o,r,u,c,h,i,s,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const kl=new He,Tg=new He;class lo{constructor(e=[],t=[]){this.uuid=un(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new He)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new He;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const r=e[s]?e[s].matrixWorld:Tg;kl.multiplyMatrices(r,t[s]),kl.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new lo(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Tc(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new wg(t,e,e,sn,Wn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Gc),this.bones.push(o),this.boneInverses.push(new He().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const o=t[i];e.bones.push(o.uuid);const r=n[i];e.boneInverses.push(r.toArray())}return e}}class Hl extends Gt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Wi=new He,Gl=new He,cr=[],Vl=new Dn,Eg=new He,Ss=new Fe,Ms=new Un;class Ag extends Fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Hl(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Eg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),Vl.copy(e.boundingBox).applyMatrix4(Wi),this.boundingBox.union(Vl)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Wi),Ms.copy(e.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(Ms)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Ss.geometry=this.geometry,Ss.material=this.material,Ss.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ms.copy(this.boundingSphere),Ms.applyMatrix4(n),e.ray.intersectsSphere(Ms)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Wi),Gl.multiplyMatrices(n,Wi),Ss.matrixWorld=Gl,Ss.raycast(e,cr);for(let o=0,r=cr.length;o<r;o++){const u=cr[o];u.instanceId=s,u.object=this,t.push(u)}cr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Hl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class rn extends hn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Wl=new P,Xl=new P,ql=new He,Ea=new Cr,ur=new Un;class Pn extends ot{constructor(e=new bt,t=new rn){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)Wl.fromBufferAttribute(t,i-1),Xl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Wl.distanceTo(Xl);e.setAttribute("lineDistance",new Nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(i),ur.radius+=s,e.ray.intersectsSphere(ur)===!1)return;ql.copy(i).invert(),Ea.copy(e.ray).applyMatrix4(ql);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=r*r,c=new P,h=new P,d=new P,f=new P,m=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const l=Math.max(0,o.start),E=Math.min(g.count,o.start+o.count);for(let w=l,S=E-1;w<S;w+=m){const T=g.getX(w),D=g.getX(w+1);if(c.fromBufferAttribute(p,T),h.fromBufferAttribute(p,D),Ea.distanceSqToSegment(c,h,f,d)>u)continue;f.applyMatrix4(this.matrixWorld);const B=e.ray.origin.distanceTo(f);B<e.near||B>e.far||t.push({distance:B,point:d.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const l=Math.max(0,o.start),E=Math.min(p.count,o.start+o.count);for(let w=l,S=E-1;w<S;w+=m){if(c.fromBufferAttribute(p,w),h.fromBufferAttribute(p,w+1),Ea.distanceSqToSegment(c,h,f,d)>u)continue;f.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(f);D<e.near||D>e.far||t.push({distance:D,point:d.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}const jl=new P,Kl=new P;class jn extends Pn{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)jl.fromBufferAttribute(t,i),Kl.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+jl.distanceTo(Kl);e.setAttribute("lineDistance",new Nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cg extends Pn{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Vc extends hn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Zl=new He,Xa=new Cr,hr=new Un,dr=new P;class Lg extends ot{constructor(e=new bt,t=new Vc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere),hr.applyMatrix4(i),hr.radius+=s,e.ray.intersectsSphere(hr)===!1)return;Zl.copy(i).invert(),Xa.copy(e.ray).applyMatrix4(Zl);const r=s/((this.scale.x+this.scale.y+this.scale.z)/3),u=r*r,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=f,y=m;g<y;g++){const p=c.getX(g);dr.fromBufferAttribute(d,p),Yl(dr,p,u,i,e,t,this)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let g=f,y=m;g<y;g++)dr.fromBufferAttribute(d,g),Yl(dr,g,u,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const r=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=s}}}}}function Yl(a,e,t,n,i,s,o){const r=Xa.distanceSqToPoint(a);if(r<t){const u=new P;Xa.closestPointToPoint(a,u),u.applyMatrix4(n);const c=i.ray.origin.distanceTo(u);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(r),point:u,index:e,face:null,object:o})}}const fr=new P,pr=new P,Aa=new P,mr=new tn;class Rg extends bt{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const i=Math.pow(10,4),s=Math.cos($i*t),o=e.getIndex(),r=e.getAttribute("position"),u=o?o.count:r.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),f={},m=[];for(let g=0;g<u;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:y,b:p,c:l}=mr;if(y.fromBufferAttribute(r,c[0]),p.fromBufferAttribute(r,c[1]),l.fromBufferAttribute(r,c[2]),mr.getNormal(Aa),d[0]=`${Math.round(y.x*i)},${Math.round(y.y*i)},${Math.round(y.z*i)}`,d[1]=`${Math.round(p.x*i)},${Math.round(p.y*i)},${Math.round(p.z*i)}`,d[2]=`${Math.round(l.x*i)},${Math.round(l.y*i)},${Math.round(l.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let E=0;E<3;E++){const w=(E+1)%3,S=d[E],T=d[w],D=mr[h[E]],O=mr[h[w]],B=`${S}_${T}`,M=`${T}_${S}`;M in f&&f[M]?(Aa.dot(f[M].normal)<=s&&(m.push(D.x,D.y,D.z),m.push(O.x,O.y,O.z)),f[M]=null):B in f||(f[B]={index0:c[E],index1:c[w],normal:Aa.clone()})}}for(const g in f)if(f[g]){const{index0:y,index1:p}=f[g];fr.fromBufferAttribute(r,y),pr.fromBufferAttribute(r,p),m.push(fr.x,fr.y,fr.z),m.push(pr.x,pr.y,pr.z)}this.setAttribute("position",new Nt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class On extends hn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qa,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vi extends On{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new De(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ht extends hn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qa,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ja,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ig extends rn{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Hn(a,e,t){return Wc(a)?new a.constructor(a.subarray(e,t!==void 0?t:a.length)):a.slice(e,t)}function gr(a,e,t){return!a||!t&&a.constructor===e?a:typeof e.BYTES_PER_ELEMENT=="number"?new e(a):Array.prototype.slice.call(a)}function Wc(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)}function Pg(a){function e(i,s){return a[i]-a[s]}const t=a.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function $l(a,e,t){const n=a.length,i=new a.constructor(n);for(let s=0,o=0;o!==n;++s){const r=t[s]*e;for(let u=0;u!==e;++u)i[o++]=a[r+u]}return i}function Xc(a,e,t,n){let i=1,s=a[0];for(;s!==void 0&&s[n]===void 0;)s=a[i++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=a[i++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=a[i++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=a[i++];while(s!==void 0)}class Bs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let r=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===r)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){const r=t[1];e<r&&(n=2,s=r);for(let u=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===u)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){const r=n+o>>>1;e<t[r]?o=r:n=r+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Dg extends Bs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zo,endingEnd:Zo}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,o=e+1,r=i[s],u=i[o];if(r===void 0)switch(this.getSettings_().endingStart){case Yo:s=e,r=2*t-n;break;case $o:s=i.length-2,r=t+i[s]-i[s+1];break;default:s=e,r=n}if(u===void 0)switch(this.getSettings_().endingEnd){case Yo:o=e,u=2*n-t;break;case $o:o=1,u=n+i[1]-i[0];break;default:o=e-1,u=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-r),this._weightNext=c/(u-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,r=this.valueSize,u=e*r,c=u-r,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),y=g*g,p=y*g,l=-f*p+2*f*y-f*g,E=(1+f)*p+(-1.5-2*f)*y+(-.5+f)*g+1,w=(-1-m)*p+(1.5+m)*y+.5*g,S=m*p-m*y;for(let T=0;T!==r;++T)s[T]=l*o[h+T]+E*o[c+T]+w*o[u+T]+S*o[d+T];return s}}class Ug extends Bs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,r=this.valueSize,u=e*r,c=u-r,h=(n-t)/(i-t),d=1-h;for(let f=0;f!==r;++f)s[f]=o[c+f]*d+o[u+f]*h;return s}}class Og extends Bs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class xn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gr(t,this.TimeBufferType),this.values=gr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gr(e.times,Array),values:gr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Og(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ug(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dg(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Is:t=this.InterpolantFactoryMethodDiscrete;break;case rs:t=this.InterpolantFactoryMethodLinear;break;case ia:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Is;case this.InterpolantFactoryMethodLinear:return rs;case this.InterpolantFactoryMethodSmooth:return ia}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);const r=this.getValueSize();this.times=Hn(n,s,o),this.values=Hn(this.values,s*r,o*r)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let r=0;r!==s;r++){const u=n[r];if(typeof u=="number"&&isNaN(u)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,r,u),e=!1;break}if(o!==null&&o>u){console.error("THREE.KeyframeTrack: Out of order keys.",this,r,u,o),e=!1;break}o=u}if(i!==void 0&&Wc(i))for(let r=0,u=i.length;r!==u;++r){const c=i[r];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,r,c),e=!1;break}}return e}optimize(){const e=Hn(this.times),t=Hn(this.values),n=this.getValueSize(),i=this.getInterpolation()===ia,s=e.length-1;let o=1;for(let r=1;r<s;++r){let u=!1;const c=e[r],h=e[r+1];if(c!==h&&(r!==1||c!==e[0]))if(i)u=!0;else{const d=r*n,f=d-n,m=d+n;for(let g=0;g!==n;++g){const y=t[d+g];if(y!==t[f+g]||y!==t[m+g]){u=!0;break}}}if(u){if(r!==o){e[o]=e[r];const d=r*n,f=o*n;for(let m=0;m!==n;++m)t[f+m]=t[d+m]}++o}}if(s>0){e[o]=e[s];for(let r=s*n,u=o*n,c=0;c!==n;++c)t[u+c]=t[r+c];++o}return o!==e.length?(this.times=Hn(e,0,o),this.values=Hn(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=Hn(this.times,0),t=Hn(this.values,0),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=rs;class hs extends xn{}hs.prototype.ValueTypeName="bool";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Is;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;class qc extends xn{}qc.prototype.ValueTypeName="color";class Us extends xn{}Us.prototype.ValueTypeName="number";class Ng extends Bs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,r=this.valueSize,u=(n-t)/(i-t);let c=e*r;for(let h=c+r;c!==h;c+=4)_n.slerpFlat(s,0,o,c-r,o,c,u);return s}}class yi extends xn{InterpolantFactoryMethodLinear(e){return new Ng(this.times,this.values,this.getValueSize(),e)}}yi.prototype.ValueTypeName="quaternion";yi.prototype.DefaultInterpolation=rs;yi.prototype.InterpolantFactoryMethodSmooth=void 0;class ds extends xn{}ds.prototype.ValueTypeName="string";ds.prototype.ValueBufferType=Array;ds.prototype.DefaultInterpolation=Is;ds.prototype.InterpolantFactoryMethodLinear=void 0;ds.prototype.InterpolantFactoryMethodSmooth=void 0;class Os extends xn{}Os.prototype.ValueTypeName="vector";class Fg{constructor(e,t=-1,n,i=$u){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=un(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,r=n.length;o!==r;++o)t.push(zg(n[o]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(xn.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,o=[];for(let r=0;r<s;r++){let u=[],c=[];u.push((r+s-1)%s,r,(r+1)%s),c.push(0,1,0);const h=Pg(u);u=$l(u,1,h),c=$l(c,1,h),!i&&u[0]===0&&(u.push(s),c.push(c[0])),o.push(new Us(".morphTargetInfluences["+t[r].name+"]",u,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let r=0,u=e.length;r<u;r++){const c=e[r],h=c.name.match(s);if(h&&h.length>1){const d=h[1];let f=i[d];f||(i[d]=f=[]),f.push(c)}}const o=[];for(const r in i)o.push(this.CreateFromMorphTargetSequence(r,i[r],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,f,m,g,y){if(m.length!==0){const p=[],l=[];Xc(m,p,l,g),p.length!==0&&y.push(new d(f,p,l))}},i=[],s=e.name||"default",o=e.fps||30,r=e.blendMode;let u=e.length||-1;const c=e.hierarchy||[];for(let d=0;d<c.length;d++){const f=c[d].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const m={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let y=0;y<f[g].morphTargets.length;y++)m[f[g].morphTargets[y]]=-1;for(const y in m){const p=[],l=[];for(let E=0;E!==f[g].morphTargets.length;++E){const w=f[g];p.push(w.time),l.push(w.morphTarget===y?1:0)}i.push(new Us(".morphTargetInfluence["+y+"]",p,l))}u=m.length*o}else{const m=".bones["+t[d].name+"]";n(Os,m+".position",f,"pos",i),n(yi,m+".quaternion",f,"rot",i),n(Os,m+".scale",f,"scl",i)}}return i.length===0?null:new this(s,u,i,r)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Bg(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Us;case"vector":case"vector2":case"vector3":case"vector4":return Os;case"color":return qc;case"quaternion":return yi;case"bool":case"boolean":return hs;case"string":return ds}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function zg(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Bg(a.type);if(a.times===void 0){const t=[],n=[];Xc(a.keys,t,n,"value"),a.times=t,a.values=n}return e.parse!==void 0?e.parse(a):new e(a.name,a.times,a.values,a.interpolation)}const ls={enabled:!1,files:{},add:function(a,e){this.enabled!==!1&&(this.files[a]=e)},get:function(a){if(this.enabled!==!1)return this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};class kg{constructor(e,t,n){const i=this;let s=!1,o=0,r=0,u;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){r++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,r),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,r),o===r&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return u?u(h):h},this.setURLModifier=function(h){return u=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const m=c[d],g=c[d+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}}const Hg=new kg;class zs{constructor(e){this.manager=e!==void 0?e:Hg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const An={};class Gg extends Error{constructor(e,t){super(e),this.response=t}}class jc extends zs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ls.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(An[e]!==void 0){An[e].push({onLoad:t,onProgress:n,onError:i});return}An[e]=[],An[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),r=this.mimeType,u=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=An[e],d=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),m=f?parseInt(f):0,g=m!==0;let y=0;const p=new ReadableStream({start(l){E();function E(){d.read().then(({done:w,value:S})=>{if(w)l.close();else{y+=S.byteLength;const T=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:m});for(let D=0,O=h.length;D<O;D++){const B=h[D];B.onProgress&&B.onProgress(T)}l.enqueue(S),E()}})}}});return new Response(p)}else throw new Gg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(u){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,r));case"json":return c.json();default:if(r===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(r),f=d&&d[1]?d[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{ls.add(e,c);const h=An[e];delete An[e];for(let d=0,f=h.length;d<f;d++){const m=h[d];m.onLoad&&m.onLoad(c)}}).catch(c=>{const h=An[e];if(h===void 0)throw this.manager.itemError(e),c;delete An[e];for(let d=0,f=h.length;d<f;d++){const m=h[d];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Vg extends zs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ls.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const r=Ds("img");function u(){h(),ls.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(d){h(),i&&i(d),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){r.removeEventListener("load",u,!1),r.removeEventListener("error",c,!1)}return r.addEventListener("load",u,!1),r.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),s.manager.itemStart(e),r.src=e,r}}class tt extends zs{constructor(e){super(e)}load(e,t,n,i){const s=new It,o=new Vg(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(r){s.image=r,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Ir extends ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ca=new He,Jl=new P,Ql=new P;class co{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new io,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new st(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Jl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jl),Ql.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ql),t.updateMatrixWorld(),Ca.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ca),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ca)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Wg extends co{constructor(){super(new Ht(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=as*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class uo extends Ir{constructor(e,t,n=0,i=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Wg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ec=new He,bs=new P,La=new P;class Xg extends co{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new De(4,2),this._viewportCount=6,this._viewports=[new st(2,1,1,1),new st(0,1,1,1),new st(3,1,1,1),new st(1,1,1,1),new st(3,0,1,1),new st(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),bs.setFromMatrixPosition(e.matrixWorld),n.position.copy(bs),La.copy(n.position),La.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(La),n.updateMatrixWorld(),i.makeTranslation(-bs.x,-bs.y,-bs.z),ec.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ec)}}class qg extends Ir{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Xg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jg extends co{constructor(){super(new so(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kc extends Ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ot.DEFAULT_UP),this.updateMatrix(),this.target=new ot,this.shadow=new jg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kg extends Ir{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class qa{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Zg extends zs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ls.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const r={};r.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",r.headers=this.requestHeader,fetch(e,r).then(function(u){return u.blob()}).then(function(u){return createImageBitmap(u,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(u){ls.add(e,u),t&&t(u),s.manager.itemEnd(e)}).catch(function(u){i&&i(u),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const ho="\\[\\]\\.:\\/",Yg=new RegExp("["+ho+"]","g"),fo="[^"+ho+"]",$g="[^"+ho.replace("\\.","")+"]",Jg=/((?:WC+[\/:])*)/.source.replace("WC",fo),Qg=/(WCOD+)?/.source.replace("WCOD",$g),e0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fo),t0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fo),n0=new RegExp("^"+Jg+Qg+e0+t0+"$"),i0=["material","materials","bones","map"];class s0{constructor(e,t,n){const i=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class et{constructor(e,t,n){this.path=t,this.parsedPath=n||et.parseTrackName(t),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new et.Composite(e,t,n):new et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yg,"")}static parseTrackName(e){const t=n0.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);i0.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const r=s[o];if(r.name===t||r.uuid===t)return r;const u=n(r.children);if(u)return u}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let r=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?r=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(r=this.Versioning.MatrixWorldNeedsUpdate);let u=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}u=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(u=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(u=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[u],this.setValue=this.SetterByBindingTypeAndVersioning[u][r]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=s0;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Zc{constructor(e,t,n=0,i=1/0){this.ray=new Cr(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new to,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return ja(e,this,n,t),n.sort(tc),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ja(e[i],this,n,t);return n.sort(tc),n}}function tc(a,e){return a.distance-e.distance}function ja(a,e,t,n){if(a.layers.test(e.layers)&&a.raycast(e,t),n===!0){const i=a.children;for(let s=0,o=i.length;s<o;s++)ja(i[s],e,t,!0)}}class nc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Rt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ic=new P,yr=new P,sc=new P;class r0 extends ot{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let i=new bt;i.setAttribute("position",new Nt([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new rn({fog:!1,toneMapped:!1});this.lightPlane=new Pn(i,s),this.add(this.lightPlane),i=new bt,i.setAttribute("position",new Nt([0,0,0,0,0,1],3)),this.targetLine=new Pn(i,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),ic.setFromMatrixPosition(this.light.matrixWorld),yr.setFromMatrixPosition(this.light.target.matrixWorld),sc.subVectors(yr,ic),this.lightPlane.lookAt(yr),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(yr),this.targetLine.scale.z=sc.length()}}const _r=new P,ft=new no;class a0 extends jn{constructor(e){const t=new bt,n=new rn({color:16777215,vertexColors:!0,toneMapped:!1}),i=[],s=[],o={};r("n1","n2"),r("n2","n4"),r("n4","n3"),r("n3","n1"),r("f1","f2"),r("f2","f4"),r("f4","f3"),r("f3","f1"),r("n1","f1"),r("n2","f2"),r("n3","f3"),r("n4","f4"),r("p","n1"),r("p","n2"),r("p","n3"),r("p","n4"),r("u1","u2"),r("u2","u3"),r("u3","u1"),r("c","t"),r("p","c"),r("cn1","cn2"),r("cn3","cn4"),r("cf1","cf2"),r("cf3","cf4");function r(g,y){u(g),u(y)}function u(g){i.push(0,0,0),s.push(0,0,0),o[g]===void 0&&(o[g]=[]),o[g].push(i.length/3-1)}t.setAttribute("position",new Nt(i,3)),t.setAttribute("color",new Nt(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=o,this.update();const c=new Le(16755200),h=new Le(16711680),d=new Le(43775),f=new Le(16777215),m=new Le(3355443);this.setColors(c,h,d,f,m)}setColors(e,t,n,i,s){const r=this.geometry.getAttribute("color");r.setXYZ(0,e.r,e.g,e.b),r.setXYZ(1,e.r,e.g,e.b),r.setXYZ(2,e.r,e.g,e.b),r.setXYZ(3,e.r,e.g,e.b),r.setXYZ(4,e.r,e.g,e.b),r.setXYZ(5,e.r,e.g,e.b),r.setXYZ(6,e.r,e.g,e.b),r.setXYZ(7,e.r,e.g,e.b),r.setXYZ(8,e.r,e.g,e.b),r.setXYZ(9,e.r,e.g,e.b),r.setXYZ(10,e.r,e.g,e.b),r.setXYZ(11,e.r,e.g,e.b),r.setXYZ(12,e.r,e.g,e.b),r.setXYZ(13,e.r,e.g,e.b),r.setXYZ(14,e.r,e.g,e.b),r.setXYZ(15,e.r,e.g,e.b),r.setXYZ(16,e.r,e.g,e.b),r.setXYZ(17,e.r,e.g,e.b),r.setXYZ(18,e.r,e.g,e.b),r.setXYZ(19,e.r,e.g,e.b),r.setXYZ(20,e.r,e.g,e.b),r.setXYZ(21,e.r,e.g,e.b),r.setXYZ(22,e.r,e.g,e.b),r.setXYZ(23,e.r,e.g,e.b),r.setXYZ(24,t.r,t.g,t.b),r.setXYZ(25,t.r,t.g,t.b),r.setXYZ(26,t.r,t.g,t.b),r.setXYZ(27,t.r,t.g,t.b),r.setXYZ(28,t.r,t.g,t.b),r.setXYZ(29,t.r,t.g,t.b),r.setXYZ(30,t.r,t.g,t.b),r.setXYZ(31,t.r,t.g,t.b),r.setXYZ(32,n.r,n.g,n.b),r.setXYZ(33,n.r,n.g,n.b),r.setXYZ(34,n.r,n.g,n.b),r.setXYZ(35,n.r,n.g,n.b),r.setXYZ(36,n.r,n.g,n.b),r.setXYZ(37,n.r,n.g,n.b),r.setXYZ(38,i.r,i.g,i.b),r.setXYZ(39,i.r,i.g,i.b),r.setXYZ(40,s.r,s.g,s.b),r.setXYZ(41,s.r,s.g,s.b),r.setXYZ(42,s.r,s.g,s.b),r.setXYZ(43,s.r,s.g,s.b),r.setXYZ(44,s.r,s.g,s.b),r.setXYZ(45,s.r,s.g,s.b),r.setXYZ(46,s.r,s.g,s.b),r.setXYZ(47,s.r,s.g,s.b),r.setXYZ(48,s.r,s.g,s.b),r.setXYZ(49,s.r,s.g,s.b),r.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,i=1;ft.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),yt("c",t,e,ft,0,0,-1),yt("t",t,e,ft,0,0,1),yt("n1",t,e,ft,-n,-i,-1),yt("n2",t,e,ft,n,-i,-1),yt("n3",t,e,ft,-n,i,-1),yt("n4",t,e,ft,n,i,-1),yt("f1",t,e,ft,-n,-i,1),yt("f2",t,e,ft,n,-i,1),yt("f3",t,e,ft,-n,i,1),yt("f4",t,e,ft,n,i,1),yt("u1",t,e,ft,n*.7,i*1.1,-1),yt("u2",t,e,ft,-n*.7,i*1.1,-1),yt("u3",t,e,ft,0,i*2,-1),yt("cf1",t,e,ft,-n,0,1),yt("cf2",t,e,ft,n,0,1),yt("cf3",t,e,ft,0,-i,1),yt("cf4",t,e,ft,0,i,1),yt("cn1",t,e,ft,-n,0,-1),yt("cn2",t,e,ft,n,0,-1),yt("cn3",t,e,ft,0,-i,-1),yt("cn4",t,e,ft,0,i,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function yt(a,e,t,n,i,s,o){_r.set(i,s,o).unproject(n);const r=e[a];if(r!==void 0){const u=t.getAttribute("position");for(let c=0,h=r.length;c<h;c++)u.setXYZ(r[c],_r.x,_r.y,_r.z)}}class o0 extends jn{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new bt;i.setAttribute("position",new Nt(t,3)),i.setAttribute("color",new Nt(n,3));const s=new rn({vertexColors:!0,toneMapped:!1});super(i,s),this.type="AxesHelper"}setColors(e,t,n){const i=new Le,s=this.geometry.attributes.color.array;return i.set(e),i.toArray(s,0),i.toArray(s,3),i.set(t),i.toArray(s,6),i.toArray(s,9),i.set(n),i.toArray(s,12),i.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$a}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$a);var I=Object.freeze({Linear:Object.freeze({None:function(a){return a},In:function(a){return this.None(a)},Out:function(a){return this.None(a)},InOut:function(a){return this.None(a)}}),Quadratic:Object.freeze({In:function(a){return a*a},Out:function(a){return a*(2-a)},InOut:function(a){return(a*=2)<1?.5*a*a:-.5*(--a*(a-2)-1)}}),Cubic:Object.freeze({In:function(a){return a*a*a},Out:function(a){return--a*a*a+1},InOut:function(a){return(a*=2)<1?.5*a*a*a:.5*((a-=2)*a*a+2)}}),Quartic:Object.freeze({In:function(a){return a*a*a*a},Out:function(a){return 1- --a*a*a*a},InOut:function(a){return(a*=2)<1?.5*a*a*a*a:-.5*((a-=2)*a*a*a-2)}}),Quintic:Object.freeze({In:function(a){return a*a*a*a*a},Out:function(a){return--a*a*a*a*a+1},InOut:function(a){return(a*=2)<1?.5*a*a*a*a*a:.5*((a-=2)*a*a*a*a+2)}}),Sinusoidal:Object.freeze({In:function(a){return 1-Math.sin((1-a)*Math.PI/2)},Out:function(a){return Math.sin(a*Math.PI/2)},InOut:function(a){return .5*(1-Math.sin(Math.PI*(.5-a)))}}),Exponential:Object.freeze({In:function(a){return a===0?0:Math.pow(1024,a-1)},Out:function(a){return a===1?1:1-Math.pow(2,-10*a)},InOut:function(a){return a===0?0:a===1?1:(a*=2)<1?.5*Math.pow(1024,a-1):.5*(-Math.pow(2,-10*(a-1))+2)}}),Circular:Object.freeze({In:function(a){return 1-Math.sqrt(1-a*a)},Out:function(a){return Math.sqrt(1- --a*a)},InOut:function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)}}),Elastic:Object.freeze({In:function(a){return a===0?0:a===1?1:-Math.pow(2,10*(a-1))*Math.sin((a-1.1)*5*Math.PI)},Out:function(a){return a===0?0:a===1?1:Math.pow(2,-10*a)*Math.sin((a-.1)*5*Math.PI)+1},InOut:function(a){return a===0?0:a===1?1:(a*=2,a<1?-.5*Math.pow(2,10*(a-1))*Math.sin((a-1.1)*5*Math.PI):.5*Math.pow(2,-10*(a-1))*Math.sin((a-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(a){var e=1.70158;return a===1?1:a*a*((e+1)*a-e)},Out:function(a){var e=1.70158;return a===0?0:--a*a*((e+1)*a+e)+1},InOut:function(a){var e=2.5949095;return(a*=2)<1?.5*(a*a*((e+1)*a-e)):.5*((a-=2)*a*((e+1)*a+e)+2)}}),Bounce:Object.freeze({In:function(a){return 1-I.Bounce.Out(1-a)},Out:function(a){return a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375},InOut:function(a){return a<.5?I.Bounce.In(a*2)*.5:I.Bounce.Out(a*2-1)*.5+.5}}),generatePow:function(a){return a===void 0&&(a=4),a=a<Number.EPSILON?Number.EPSILON:a,a=a>1e4?1e4:a,{In:function(e){return Math.pow(e,a)},Out:function(e){return 1-Math.pow(1-e,a)},InOut:function(e){return e<.5?Math.pow(e*2,a)/2:(1-Math.pow(2-e*2,a))/2+.5}}}}),Cs=function(){return performance.now()},l0=function(){function a(){this._tweens={},this._tweensAddedDuringUpdate={}}return a.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(t){return e._tweens[t]})},a.prototype.removeAll=function(){this._tweens={}},a.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},a.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},a.prototype.update=function(e,t){e===void 0&&(e=Cs()),t===void 0&&(t=!1);var n=Object.keys(this._tweens);if(n.length===0)return!1;for(;n.length>0;){this._tweensAddedDuringUpdate={};for(var i=0;i<n.length;i++){var s=this._tweens[n[i]],o=!t;s&&s.update(e,o)===!1&&!t&&delete this._tweens[n[i]]}n=Object.keys(this._tweensAddedDuringUpdate)}return!0},a}(),Ki={Linear:function(a,e){var t=a.length-1,n=t*e,i=Math.floor(n),s=Ki.Utils.Linear;return e<0?s(a[0],a[1],n):e>1?s(a[t],a[t-1],t-n):s(a[i],a[i+1>t?t:i+1],n-i)},Bezier:function(a,e){for(var t=0,n=a.length-1,i=Math.pow,s=Ki.Utils.Bernstein,o=0;o<=n;o++)t+=i(1-e,n-o)*i(e,o)*a[o]*s(n,o);return t},CatmullRom:function(a,e){var t=a.length-1,n=t*e,i=Math.floor(n),s=Ki.Utils.CatmullRom;return a[0]===a[t]?(e<0&&(i=Math.floor(n=t*(1+e))),s(a[(i-1+t)%t],a[i],a[(i+1)%t],a[(i+2)%t],n-i)):e<0?a[0]-(s(a[0],a[0],a[1],a[1],-n)-a[0]):e>1?a[t]-(s(a[t],a[t],a[t-1],a[t-1],n-t)-a[t]):s(a[i?i-1:0],a[i],a[t<i+1?t:i+1],a[t<i+2?t:i+2],n-i)},Utils:{Linear:function(a,e,t){return(e-a)*t+a},Bernstein:function(a,e){var t=Ki.Utils.Factorial;return t(a)/t(e)/t(a-e)},Factorial:function(){var a=[1];return function(e){var t=1;if(a[e])return a[e];for(var n=e;n>1;n--)t*=n;return a[e]=t,t}}(),CatmullRom:function(a,e,t,n,i){var s=(t-a)*.5,o=(n-e)*.5,r=i*i,u=i*r;return(2*e-2*t+s+o)*u+(-3*e+3*t-2*s-o)*r+s*i+e}}},c0=function(){function a(){}return a.nextId=function(){return a._nextId++},a._nextId=0,a}(),Ka=new l0,L=function(){function a(e,t){t===void 0&&(t=Ka),this._object=e,this._group=t,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=I.Linear.None,this._interpolationFunction=Ki.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=c0.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return a.prototype.getId=function(){return this._id},a.prototype.isPlaying=function(){return this._isPlaying},a.prototype.isPaused=function(){return this._isPaused},a.prototype.to=function(e,t){if(t===void 0&&(t=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=t,this},a.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e,this},a.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},a.prototype.start=function(e,t){if(e===void 0&&(e=Cs()),t===void 0&&(t=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var n in this._valuesStartRepeat)this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||t){if(this._propertiesAreSetUp=!0,!this._isDynamic){var i={};for(var s in this._valuesEnd)i[s]=this._valuesEnd[s];this._valuesEnd=i}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,t)}return this},a.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},a.prototype._setupProperties=function(e,t,n,i,s){for(var o in n){var r=e[o],u=Array.isArray(r),c=u?"array":typeof r,h=!u&&Array.isArray(n[o]);if(!(c==="undefined"||c==="function")){if(h){var d=n[o];if(d.length===0)continue;for(var f=[r],m=0,g=d.length;m<g;m+=1){var y=this._handleRelativeValue(r,d[m]);if(isNaN(y)){h=!1,console.warn("Found invalid interpolation list. Skipping.");break}f.push(y)}h&&(n[o]=f)}if((c==="object"||u)&&r&&!h){t[o]=u?[]:{};var p=r;for(var l in p)t[o][l]=p[l];i[o]=u?[]:{};var d=n[o];if(!this._isDynamic){var E={};for(var l in d)E[l]=d[l];n[o]=d=E}this._setupProperties(p,t[o],d,i[o],s)}else(typeof t[o]>"u"||s)&&(t[o]=r),u||(t[o]*=1),h?i[o]=n[o].slice().reverse():i[o]=t[o]||0}}},a.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},a.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},a.prototype.pause=function(e){return e===void 0&&(e=Cs()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},a.prototype.resume=function(e){return e===void 0&&(e=Cs()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},a.prototype.stopChainedTweens=function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop();return this},a.prototype.group=function(e){return e===void 0&&(e=Ka),this._group=e,this},a.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},a.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},a.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},a.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},a.prototype.easing=function(e){return e===void 0&&(e=I.Linear.None),this._easingFunction=e,this},a.prototype.interpolation=function(e){return e===void 0&&(e=Ki.Linear),this._interpolationFunction=e,this},a.prototype.chain=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return this._chainedTweens=e,this},a.prototype.onStart=function(e){return this._onStartCallback=e,this},a.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},a.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},a.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},a.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},a.prototype.onStop=function(e){return this._onStopCallback=e,this},a.prototype.update=function(e,t){if(e===void 0&&(e=Cs()),t===void 0&&(t=!0),this._isPaused)return!0;var n,i,s=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>s)return!1;t&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0),i=(e-this._startTime)/this._duration,i=this._duration===0||i>1?1:i;var o=this._easingFunction(i);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,o),this._onUpdateCallback&&this._onUpdateCallback(this._object,i),i===1)if(this._repeat>0){isFinite(this._repeat)&&this._repeat--;for(n in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[n]=="string"&&(this._valuesStartRepeat[n]=this._valuesStartRepeat[n]+parseFloat(this._valuesEnd[n])),this._yoyo&&this._swapEndStartRepeatValues(n),this._valuesStart[n]=this._valuesStartRepeat[n];return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var r=0,u=this._chainedTweens.length;r<u;r++)this._chainedTweens[r].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},a.prototype._updateProperties=function(e,t,n,i){for(var s in n)if(t[s]!==void 0){var o=t[s]||0,r=n[s],u=Array.isArray(e[s]),c=Array.isArray(r),h=!u&&c;h?e[s]=this._interpolationFunction(r,i):typeof r=="object"&&r?this._updateProperties(e[s],o,r,i):(r=this._handleRelativeValue(o,r),typeof r=="number"&&(e[s]=o+(r-o)*i))}},a.prototype._handleRelativeValue=function(e,t){return typeof t!="string"?t:t.charAt(0)==="+"||t.charAt(0)==="-"?e+parseFloat(t):parseFloat(t)},a.prototype._swapEndStartRepeatValues=function(e){var t=this._valuesStartRepeat[e],n=this._valuesEnd[e];typeof n=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(n):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=t},a}(),vn=Ka;vn.getAll.bind(vn);vn.removeAll.bind(vn);vn.add.bind(vn);vn.remove.bind(vn);var u0=vn.update.bind(vn);const rc={type:"change"},Ra={type:"start"},ac={type:"end"};class h0 extends _i{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ti.ROTATE,MIDDLE:Ti.DOLLY,RIGHT:Ti.PAN},this.touches={ONE:Ei.ROTATE,TWO:Ei.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return r.phi},this.getAzimuthalAngle=function(){return r.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",rt),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",rt),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(rc),n.update(),s=i.NONE},this.update=function(){const R=new P,$=new _n().setFromUnitVectors(e.up,new P(0,1,0)),H=$.clone().invert(),pe=new P,xe=new _n,Me=2*Math.PI;return function(){const Se=n.object.position;R.copy(Se).sub(n.target),R.applyQuaternion($),r.setFromVector3(R),n.autoRotate&&s===i.NONE&&M(O()),n.enableDamping?(r.theta+=u.theta*n.dampingFactor,r.phi+=u.phi*n.dampingFactor):(r.theta+=u.theta,r.phi+=u.phi);let Oe=n.minAzimuthAngle,Ge=n.maxAzimuthAngle;return isFinite(Oe)&&isFinite(Ge)&&(Oe<-Math.PI?Oe+=Me:Oe>Math.PI&&(Oe-=Me),Ge<-Math.PI?Ge+=Me:Ge>Math.PI&&(Ge-=Me),Oe<=Ge?r.theta=Math.max(Oe,Math.min(Ge,r.theta)):r.theta=r.theta>(Oe+Ge)/2?Math.max(Oe,r.theta):Math.min(Ge,r.theta)),r.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,r.phi)),r.makeSafe(),r.radius*=c,r.radius=Math.max(n.minDistance,Math.min(n.maxDistance,r.radius)),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),R.setFromSpherical(r),R.applyQuaternion(H),Se.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),h.set(0,0,0)),c=1,d||pe.distanceToSquared(n.object.position)>o||8*(1-xe.dot(n.object.quaternion))>o?(n.dispatchEvent(rc),pe.copy(n.object.position),xe.copy(n.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",x),n.domElement.removeEventListener("pointerdown",Be),n.domElement.removeEventListener("pointercancel",lt),n.domElement.removeEventListener("wheel",$e),n.domElement.removeEventListener("pointermove",dt),n.domElement.removeEventListener("pointerup",lt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",rt),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const o=1e-6,r=new nc,u=new nc;let c=1;const h=new P;let d=!1;const f=new De,m=new De,g=new De,y=new De,p=new De,l=new De,E=new De,w=new De,S=new De,T=[],D={};function O(){return 2*Math.PI/60/60*n.autoRotateSpeed}function B(){return Math.pow(.95,n.zoomSpeed)}function M(R){u.theta-=R}function C(R){u.phi-=R}const ee=function(){const R=new P;return function(H,pe){R.setFromMatrixColumn(pe,0),R.multiplyScalar(-H),h.add(R)}}(),Y=function(){const R=new P;return function(H,pe){n.screenSpacePanning===!0?R.setFromMatrixColumn(pe,1):(R.setFromMatrixColumn(pe,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(H),h.add(R)}}(),N=function(){const R=new P;return function(H,pe){const xe=n.domElement;if(n.object.isPerspectiveCamera){const Me=n.object.position;R.copy(Me).sub(n.target);let _e=R.length();_e*=Math.tan(n.object.fov/2*Math.PI/180),ee(2*H*_e/xe.clientHeight,n.object.matrix),Y(2*pe*_e/xe.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(ee(H*(n.object.right-n.object.left)/n.object.zoom/xe.clientWidth,n.object.matrix),Y(pe*(n.object.top-n.object.bottom)/n.object.zoom/xe.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function k(R){n.object.isPerspectiveCamera?c/=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*R)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(R){n.object.isPerspectiveCamera?c*=R:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/R)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function ne(R){f.set(R.clientX,R.clientY)}function ie(R){E.set(R.clientX,R.clientY)}function J(R){y.set(R.clientX,R.clientY)}function oe(R){m.set(R.clientX,R.clientY),g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const $=n.domElement;M(2*Math.PI*g.x/$.clientHeight),C(2*Math.PI*g.y/$.clientHeight),f.copy(m),n.update()}function re(R){w.set(R.clientX,R.clientY),S.subVectors(w,E),S.y>0?k(B()):S.y<0&&V(B()),E.copy(w),n.update()}function Ie(R){p.set(R.clientX,R.clientY),l.subVectors(p,y).multiplyScalar(n.panSpeed),N(l.x,l.y),y.copy(p),n.update()}function ce(R){R.deltaY<0?V(B()):R.deltaY>0&&k(B()),n.update()}function X(R){let $=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?C(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,n.keyPanSpeed),$=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?C(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(0,-n.keyPanSpeed),$=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?M(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(n.keyPanSpeed,0),$=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?M(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):N(-n.keyPanSpeed,0),$=!0;break}$&&(R.preventDefault(),n.update())}function Q(){if(T.length===1)f.set(T[0].pageX,T[0].pageY);else{const R=.5*(T[0].pageX+T[1].pageX),$=.5*(T[0].pageY+T[1].pageY);f.set(R,$)}}function de(){if(T.length===1)y.set(T[0].pageX,T[0].pageY);else{const R=.5*(T[0].pageX+T[1].pageX),$=.5*(T[0].pageY+T[1].pageY);y.set(R,$)}}function ye(){const R=T[0].pageX-T[1].pageX,$=T[0].pageY-T[1].pageY,H=Math.sqrt(R*R+$*$);E.set(0,H)}function G(){n.enableZoom&&ye(),n.enablePan&&de()}function Ue(){n.enableZoom&&ye(),n.enableRotate&&Q()}function Re(R){if(T.length==1)m.set(R.pageX,R.pageY);else{const H=fe(R),pe=.5*(R.pageX+H.x),xe=.5*(R.pageY+H.y);m.set(pe,xe)}g.subVectors(m,f).multiplyScalar(n.rotateSpeed);const $=n.domElement;M(2*Math.PI*g.x/$.clientHeight),C(2*Math.PI*g.y/$.clientHeight),f.copy(m)}function ue(R){if(T.length===1)p.set(R.pageX,R.pageY);else{const $=fe(R),H=.5*(R.pageX+$.x),pe=.5*(R.pageY+$.y);p.set(H,pe)}l.subVectors(p,y).multiplyScalar(n.panSpeed),N(l.x,l.y),y.copy(p)}function Ae(R){const $=fe(R),H=R.pageX-$.x,pe=R.pageY-$.y,xe=Math.sqrt(H*H+pe*pe);w.set(0,xe),S.set(0,Math.pow(w.y/E.y,n.zoomSpeed)),k(S.y),E.copy(w)}function Je(R){n.enableZoom&&Ae(R),n.enablePan&&ue(R)}function be(R){n.enableZoom&&Ae(R),n.enableRotate&&Re(R)}function Be(R){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",dt),n.domElement.addEventListener("pointerup",lt)),W(R),R.pointerType==="touch"?Pt(R):_t(R))}function dt(R){n.enabled!==!1&&(R.pointerType==="touch"?A(R):pt(R))}function lt(R){te(R),T.length===0&&(n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",dt),n.domElement.removeEventListener("pointerup",lt)),n.dispatchEvent(ac),s=i.NONE}function _t(R){let $;switch(R.button){case 0:$=n.mouseButtons.LEFT;break;case 1:$=n.mouseButtons.MIDDLE;break;case 2:$=n.mouseButtons.RIGHT;break;default:$=-1}switch($){case Ti.DOLLY:if(n.enableZoom===!1)return;ie(R),s=i.DOLLY;break;case Ti.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;J(R),s=i.PAN}else{if(n.enableRotate===!1)return;ne(R),s=i.ROTATE}break;case Ti.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;ne(R),s=i.ROTATE}else{if(n.enablePan===!1)return;J(R),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ra)}function pt(R){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;oe(R);break;case i.DOLLY:if(n.enableZoom===!1)return;re(R);break;case i.PAN:if(n.enablePan===!1)return;Ie(R);break}}function $e(R){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(R.preventDefault(),n.dispatchEvent(Ra),ce(R),n.dispatchEvent(ac))}function rt(R){n.enabled===!1||n.enablePan===!1||X(R)}function Pt(R){switch(ae(R),T.length){case 1:switch(n.touches.ONE){case Ei.ROTATE:if(n.enableRotate===!1)return;Q(),s=i.TOUCH_ROTATE;break;case Ei.PAN:if(n.enablePan===!1)return;de(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Ei.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;G(),s=i.TOUCH_DOLLY_PAN;break;case Ei.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ue(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(Ra)}function A(R){switch(ae(R),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Re(R),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ue(R),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Je(R),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;be(R),n.update();break;default:s=i.NONE}}function x(R){n.enabled!==!1&&R.preventDefault()}function W(R){T.push(R)}function te(R){delete D[R.pointerId];for(let $=0;$<T.length;$++)if(T[$].pointerId==R.pointerId){T.splice($,1);return}}function ae(R){let $=D[R.pointerId];$===void 0&&($=new De,D[R.pointerId]=$),$.set(R.pageX,R.pageY)}function fe(R){const $=R.pointerId===T[0].pointerId?T[1]:T[0];return D[$.pointerId]}n.domElement.addEventListener("contextmenu",x),n.domElement.addEventListener("pointerdown",Be),n.domElement.addEventListener("pointercancel",lt),n.domElement.addEventListener("wheel",$e,{passive:!1}),this.update()}}function oc(a,e){if(e===Ju)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),a;if(e===ka||e===bc){let t=a.getIndex();if(t===null){const o=[],r=a.getAttribute("position");if(r!==void 0){for(let u=0;u<r.count;u++)o.push(u);a.setIndex(o),t=a.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),a}const n=t.count-2,i=[];if(e===ka)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=a.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),a}class fs extends zs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new g0(t)}),this.register(function(t){return new b0(t)}),this.register(function(t){return new w0(t)}),this.register(function(t){return new T0(t)}),this.register(function(t){return new _0(t)}),this.register(function(t){return new v0(t)}),this.register(function(t){return new x0(t)}),this.register(function(t){return new S0(t)}),this.register(function(t){return new m0(t)}),this.register(function(t){return new M0(t)}),this.register(function(t){return new y0(t)}),this.register(function(t){return new f0(t)}),this.register(function(t){return new E0(t)}),this.register(function(t){return new A0(t)})}load(e,t,n,i){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=qa.extractUrlBase(e),this.manager.itemStart(e);const r=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},u=new jc(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(c){try{s.parse(c,o,function(h){t(h),s.manager.itemEnd(e)},r)}catch(h){r(h)}},n,r)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const o={},r={},u=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(u.decode(new Uint8Array(e,0,4))===Yc){try{o[Ze.KHR_BINARY_GLTF]=new C0(e)}catch(d){i&&i(d);return}s=JSON.parse(o[Ze.KHR_BINARY_GLTF].content)}else s=JSON.parse(u.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new H0(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const d=this.pluginCallbacks[h](c);r[d.name]=d,o[d.name]=!0}if(s.extensionsUsed)for(let h=0;h<s.extensionsUsed.length;++h){const d=s.extensionsUsed[h],f=s.extensionsRequired||[];switch(d){case Ze.KHR_MATERIALS_UNLIT:o[d]=new p0;break;case Ze.KHR_DRACO_MESH_COMPRESSION:o[d]=new L0(s,this.dracoLoader);break;case Ze.KHR_TEXTURE_TRANSFORM:o[d]=new R0;break;case Ze.KHR_MESH_QUANTIZATION:o[d]=new I0;break;default:f.indexOf(d)>=0&&r[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}c.setExtensions(o),c.setPlugins(r),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function d0(){let a={};return{get:function(e){return a[e]},add:function(e,t){a[e]=t},remove:function(e){delete a[e]},removeAll:function(){a={}}}}const Ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class f0{constructor(e){this.parser=e,this.name=Ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,u=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Le(16777215);u.color!==void 0&&h.fromArray(u.color);const d=u.range!==void 0?u.range:0;switch(u.type){case"directional":c=new Kc(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new qg(h),c.distance=d;break;case"spot":c=new uo(h),c.distance=d,u.spot=u.spot||{},u.spot.innerConeAngle=u.spot.innerConeAngle!==void 0?u.spot.innerConeAngle:0,u.spot.outerConeAngle=u.spot.outerConeAngle!==void 0?u.spot.outerConeAngle:Math.PI/4,c.angle=u.spot.outerConeAngle,c.penumbra=1-u.spot.innerConeAngle/u.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+u.type)}return c.position.set(0,0,0),c.decay=2,Vn(c,u),u.intensity!==void 0&&(c.intensity=u.intensity),c.name=t.createUniqueName(u.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],r=(s.extensions&&s.extensions[this.name]||{}).light;return r===void 0?null:this._loadLight(r).then(function(u){return n._getNodeRef(t.cache,r,u)})}}class p0{constructor(){this.name=Ze.KHR_MATERIALS_UNLIT}getMaterialType(){return li}extendParams(e,t,n){const i=[];e.color=new Le(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,Qe))}return Promise.all(i)}}class m0{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class g0{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const r=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new De(r,r)}return Promise.all(s)}}class y0{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class _0{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Qe)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class v0{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class x0{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const r=o.attenuationColor||[1,1,1];return t.attenuationColor=new Le(r[0],r[1],r[2]),Promise.all(s)}}class S0{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=i.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class M0{constructor(e){this.parser=e,this.name=Ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:vi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const s=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const r=o.specularColorFactor||[1,1,1];return t.specularColor=new Le(r[0],r[1],r[2]),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Qe)),Promise.all(s)}}class b0{constructor(e){this.parser=e,this.name=Ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class w0{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],r=i.images[o.source];let u=n.textureLoader;if(r.uri){const c=n.options.manager.getHandler(r.uri);c!==null&&(u=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,u);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class T0{constructor(e){this.parser=e,this.name=Ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],r=i.images[o.source];let u=n.textureLoader;if(r.uri){const c=n.options.manager.getHandler(r.uri);c!==null&&(u=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,u);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class E0{constructor(e){this.name=Ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(r){const u=i.byteOffset||0,c=i.byteLength||0,h=i.count,d=i.byteStride,f=new Uint8Array(r,u,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,d,f,i.mode,i.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(h*d);return o.decodeGltfBuffer(new Uint8Array(m),h,d,f,i.mode,i.filter),m})})}else return null}}class A0{constructor(e){this.name=Ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==en.TRIANGLES&&c.mode!==en.TRIANGLE_STRIP&&c.mode!==en.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,r=[],u={};for(const c in o)r.push(this.parser.getDependency("accessor",o[c]).then(h=>(u[c]=h,u[c])));return r.length<1?null:(r.push(this.parser.createNodeMesh(e)),Promise.all(r).then(c=>{const h=c.pop(),d=h.isGroup?h.children:[h],f=c[0].count,m=[];for(const g of d){const y=new He,p=new P,l=new _n,E=new P(1,1,1),w=new Ag(g.geometry,g.material,f);for(let S=0;S<f;S++)u.TRANSLATION&&p.fromBufferAttribute(u.TRANSLATION,S),u.ROTATION&&l.fromBufferAttribute(u.ROTATION,S),u.SCALE&&E.fromBufferAttribute(u.SCALE,S),w.setMatrixAt(S,y.compose(p,l,E));for(const S in u)S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,u[S]);ot.prototype.copy.call(w,g),this.parser.assignFinalMaterial(w),m.push(w)}return h.isGroup?(h.clear(),h.add(...m),h):m[0]}))}}const Yc="glTF",ws=12,lc={JSON:1313821514,BIN:5130562};class C0{constructor(e){this.name=Ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ws),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Yc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ws,s=new DataView(e,ws);let o=0;for(;o<i;){const r=s.getUint32(o,!0);o+=4;const u=s.getUint32(o,!0);if(o+=4,u===lc.JSON){const c=new Uint8Array(e,ws+o,r);this.content=n.decode(c)}else if(u===lc.BIN){const c=ws+o;this.body=e.slice(c,c+r)}o+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class L0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,r={},u={},c={};for(const h in o){const d=Za[h]||h.toLowerCase();r[d]=o[h]}for(const h in e.attributes){const d=Za[h]||h.toLowerCase();if(o[h]!==void 0){const f=n.accessors[e.attributes[h]],m=Qi[f.componentType];c[d]=m.name,u[d]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(d){i.decodeDracoFile(h,function(f){for(const m in f.attributes){const g=f.attributes[m],y=u[m];y!==void 0&&(g.normalized=y)}d(f)},r,c)})})}}class R0{constructor(){this.name=Ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class I0{constructor(){this.name=Ze.KHR_MESH_QUANTIZATION}}class $c extends Bs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,o=this.sampleValues,r=this.valueSize,u=r*2,c=r*3,h=i-t,d=(n-t)/h,f=d*d,m=f*d,g=e*c,y=g-c,p=-2*m+3*f,l=m-f,E=1-p,w=l-f+d;for(let S=0;S!==r;S++){const T=o[y+S+r],D=o[y+S+u]*h,O=o[g+S+r],B=o[g+S]*h;s[S]=E*T+w*D+p*O+l*B}return s}}const P0=new _n;class D0 extends $c{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return P0.fromArray(s).normalize().toArray(s),s}}const en={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Qi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},cc={9728:Ct,9729:qt,9984:za,9985:Sc,9986:Sr,9987:di},uc={33071:nn,33648:wr,10497:is},Ia={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Za={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Gn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},U0={CUBICSPLINE:void 0,LINEAR:rs,STEP:Is},Pa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function O0(a){return a.DefaultMaterial===void 0&&(a.DefaultMaterial=new On({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:In})),a.DefaultMaterial}function Ts(a,e,t){for(const n in t.extensions)a[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Vn(a,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(a.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function N0(a,e,t){let n=!1,i=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const d=e[c];if(d.POSITION!==void 0&&(n=!0),d.NORMAL!==void 0&&(i=!0),d.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(a);const o=[],r=[],u=[];for(let c=0,h=e.length;c<h;c++){const d=e[c];if(n){const f=d.POSITION!==void 0?t.getDependency("accessor",d.POSITION):a.attributes.position;o.push(f)}if(i){const f=d.NORMAL!==void 0?t.getDependency("accessor",d.NORMAL):a.attributes.normal;r.push(f)}if(s){const f=d.COLOR_0!==void 0?t.getDependency("accessor",d.COLOR_0):a.attributes.color;u.push(f)}}return Promise.all([Promise.all(o),Promise.all(r),Promise.all(u)]).then(function(c){const h=c[0],d=c[1],f=c[2];return n&&(a.morphAttributes.position=h),i&&(a.morphAttributes.normal=d),s&&(a.morphAttributes.color=f),a.morphTargetsRelative=!0,a})}function F0(a,e){if(a.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)a.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(a.morphTargetInfluences.length===t.length){a.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)a.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function B0(a){const e=a.extensions&&a.extensions[Ze.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+hc(e.attributes):t=a.indices+":"+hc(a.attributes)+":"+a.mode,t}function hc(a){let e="";const t=Object.keys(a).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+a[t[n]]+";";return e}function Ya(a){switch(a){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function z0(a){return a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0?"image/jpeg":a.search(/\.webp($|\?)/i)>0||a.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const k0=new He;class H0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new d0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,s=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&s<98?this.textureLoader=new tt(this.options.manager):this.textureLoader=new Zg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const r={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};Ts(s,r,i),Vn(r,i),Promise.all(n._invokeAll(function(u){return u.afterRoot&&u.afterRoot(r)})).then(function(){e(r)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const o=t[i].joints;for(let r=0,u=o.length;r<u;r++)e[o[r]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(o,r)=>{const u=this.associations.get(o);u!=null&&this.associations.set(r,u);for(const[c,h]of o.children.entries())s(h,r.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,o){n.load(qa.resolveURL(t.uri,i.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ia[i.type],r=Qi[i.componentType],u=i.normalized===!0,c=new r(i.count*o);return Promise.resolve(new Gt(c,o,u))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(o){const r=o[0],u=Ia[i.type],c=Qi[i.componentType],h=c.BYTES_PER_ELEMENT,d=h*u,f=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let y,p;if(m&&m!==d){const l=Math.floor(f/m),E="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+l+":"+i.count;let w=t.cache.get(E);w||(y=new c(r,l*m,i.count*m/h),w=new Sg(y,m/h),t.cache.add(E,w)),p=new oo(w,u,f%m/h,g)}else r===null?y=new c(i.count*u):y=new c(r,f,i.count*u),p=new Gt(y,u,g);if(i.sparse!==void 0){const l=Ia.SCALAR,E=Qi[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,S=i.sparse.values.byteOffset||0,T=new E(o[1],w,i.sparse.count*l),D=new c(o[2],S,i.sparse.count*u);r!==null&&(p=new Gt(p.array.slice(),p.itemSize,p.normalized));for(let O=0,B=T.length;O<B;O++){const M=T[O];if(p.setX(M,D[O*u]),u>=2&&p.setY(M,D[O*u+1]),u>=3&&p.setZ(M,D[O*u+2]),u>=4&&p.setW(M,D[O*u+3]),u>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let r=this.textureLoader;if(o.uri){const u=n.manager.getHandler(o.uri);u!==null&&(r=u)}return this.loadTextureImage(e,s,r)}loadTextureImage(e,t,n){const i=this,s=this.json,o=s.textures[e],r=s.images[t],u=(r.uri||r.bufferView)+":"+o.sampler;if(this.textureCache[u])return this.textureCache[u];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||r.name||"",h.name===""&&typeof r.uri=="string"&&r.uri.startsWith("data:image/")===!1&&(h.name=r.uri);const f=(s.samplers||{})[o.sampler]||{};return h.magFilter=cc[f.magFilter]||qt,h.minFilter=cc[f.minFilter]||di,h.wrapS=uc[f.wrapS]||is,h.wrapT=uc[f.wrapT]||is,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[u]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());const o=i.images[e],r=self.URL||self.webkitURL;let u=o.uri||"",c=!1;if(o.bufferView!==void 0)u=n.getDependency("bufferView",o.bufferView).then(function(d){c=!0;const f=new Blob([d],{type:o.mimeType});return u=r.createObjectURL(f),u});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(u).then(function(d){return new Promise(function(f,m){let g=f;t.isImageBitmapLoader===!0&&(g=function(y){const p=new It(y);p.needsUpdate=!0,f(p)}),t.load(qa.resolveURL(d,s.path),g,void 0,m)})}).then(function(d){return c===!0&&r.revokeObjectURL(u),d.userData.mimeType=o.mimeType||z0(o.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",u),d});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),s.extensions[Ze.KHR_TEXTURE_TRANSFORM]){const r=n.extensions!==void 0?n.extensions[Ze.KHR_TEXTURE_TRANSFORM]:void 0;if(r){const u=s.associations.get(o);o=s.extensions[Ze.KHR_TEXTURE_TRANSFORM].extendTexture(o,r),s.associations.set(o,u)}}return i!==void 0&&(o.encoding=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const r="PointsMaterial:"+n.uuid;let u=this.cache.get(r);u||(u=new Vc,hn.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,u.sizeAttenuation=!1,this.cache.add(r,u)),n=u}else if(e.isLine){const r="LineBasicMaterial:"+n.uuid;let u=this.cache.get(r);u||(u=new rn,hn.prototype.copy.call(u,n),u.color.copy(n.color),u.map=n.map,this.cache.add(r,u)),n=u}if(i||s||o){let r="ClonedMaterial:"+n.uuid+":";i&&(r+="derivative-tangents:"),s&&(r+="vertex-colors:"),o&&(r+="flat-shading:");let u=this.cache.get(r);u||(u=n.clone(),s&&(u.vertexColors=!0),o&&(u.flatShading=!0),i&&(u.normalScale&&(u.normalScale.y*=-1),u.clearcoatNormalScale&&(u.clearcoatNormalScale.y*=-1)),this.cache.add(r,u),this.associations.set(u,this.associations.get(n))),n=u}e.material=n}getMaterialType(){return On}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let o;const r={},u=s.extensions||{},c=[];if(u[Ze.KHR_MATERIALS_UNLIT]){const d=i[Ze.KHR_MATERIALS_UNLIT];o=d.getMaterialType(),c.push(d.extendParams(r,s,t))}else{const d=s.pbrMetallicRoughness||{};if(r.color=new Le(1,1,1),r.opacity=1,Array.isArray(d.baseColorFactor)){const f=d.baseColorFactor;r.color.fromArray(f),r.opacity=f[3]}d.baseColorTexture!==void 0&&c.push(t.assignTexture(r,"map",d.baseColorTexture,Qe)),r.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,r.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(r,"metalnessMap",d.metallicRoughnessTexture)),c.push(t.assignTexture(r,"roughnessMap",d.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,r)})))}s.doubleSided===!0&&(r.side=Ye);const h=s.alphaMode||Pa.OPAQUE;if(h===Pa.BLEND?(r.transparent=!0,r.depthWrite=!1):(r.transparent=!1,h===Pa.MASK&&(r.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==li&&(c.push(t.assignTexture(r,"normalMap",s.normalTexture)),r.normalScale=new De(1,1),s.normalTexture.scale!==void 0)){const d=s.normalTexture.scale;r.normalScale.set(d,d)}return s.occlusionTexture!==void 0&&o!==li&&(c.push(t.assignTexture(r,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(r.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==li&&(r.emissive=new Le().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==li&&c.push(t.assignTexture(r,"emissiveMap",s.emissiveTexture,Qe)),Promise.all(c).then(function(){const d=new o(r);return s.name&&(d.name=s.name),Vn(d,s),t.associations.set(d,{materials:e}),s.extensions&&Ts(i,d,s),d})}createUniqueName(e){const t=et.sanitizeNodeName(e||"");let n=t;for(let i=1;this.nodeNamesUsed[n];++i)n=t+"_"+i;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(r){return n[Ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(r,t).then(function(u){return dc(u,r,t)})}const o=[];for(let r=0,u=e.length;r<u;r++){const c=e[r],h=B0(c),d=i[h];if(d)o.push(d.promise);else{let f;c.extensions&&c.extensions[Ze.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=dc(new bt,c,t),i[h]={primitive:c,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],o=s.primitives,r=[];for(let u=0,c=o.length;u<c;u++){const h=o[u].material===void 0?O0(this.cache):this.getDependency("material",o[u].material);r.push(h)}return r.push(t.loadGeometries(o)),Promise.all(r).then(function(u){const c=u.slice(0,u.length-1),h=u[u.length-1],d=[];for(let m=0,g=h.length;m<g;m++){const y=h[m],p=o[m];let l;const E=c[m];if(p.mode===en.TRIANGLES||p.mode===en.TRIANGLE_STRIP||p.mode===en.TRIANGLE_FAN||p.mode===void 0)l=s.isSkinnedMesh===!0?new bg(y,E):new Fe(y,E),l.isSkinnedMesh===!0&&l.normalizeSkinWeights(),p.mode===en.TRIANGLE_STRIP?l.geometry=oc(l.geometry,bc):p.mode===en.TRIANGLE_FAN&&(l.geometry=oc(l.geometry,ka));else if(p.mode===en.LINES)l=new jn(y,E);else if(p.mode===en.LINE_STRIP)l=new Pn(y,E);else if(p.mode===en.LINE_LOOP)l=new Cg(y,E);else if(p.mode===en.POINTS)l=new Lg(y,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(l.geometry.morphAttributes).length>0&&F0(l,s),l.name=t.createUniqueName(s.name||"mesh_"+e),Vn(l,s),p.extensions&&Ts(i,l,p),t.assignFinalMaterial(l),d.push(l)}for(let m=0,g=d.length;m<g;m++)t.associations.set(d[m],{meshes:e,primitives:m});if(d.length===1)return d[0];const f=new ci;t.associations.set(f,{meshes:e});for(let m=0,g=d.length;m<g;m++)f.add(d[m]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Ht(gh.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new so(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Vn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),o=i,r=[],u=[];for(let c=0,h=o.length;c<h;c++){const d=o[c];if(d){r.push(d);const f=new He;s!==null&&f.fromArray(s.array,c*16),u.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new lo(r,u)})}loadAnimation(e){const n=this.json.animations[e],i=n.name?n.name:"animation_"+e,s=[],o=[],r=[],u=[],c=[];for(let h=0,d=n.channels.length;h<d;h++){const f=n.channels[h],m=n.samplers[f.sampler],g=f.target,y=g.node,p=n.parameters!==void 0?n.parameters[m.input]:m.input,l=n.parameters!==void 0?n.parameters[m.output]:m.output;g.node!==void 0&&(s.push(this.getDependency("node",y)),o.push(this.getDependency("accessor",p)),r.push(this.getDependency("accessor",l)),u.push(m),c.push(g))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(r),Promise.all(u),Promise.all(c)]).then(function(h){const d=h[0],f=h[1],m=h[2],g=h[3],y=h[4],p=[];for(let l=0,E=d.length;l<E;l++){const w=d[l],S=f[l],T=m[l],D=g[l],O=y[l];if(w===void 0)continue;w.updateMatrix();let B;switch(Gn[O.path]){case Gn.weights:B=Us;break;case Gn.rotation:B=yi;break;case Gn.position:case Gn.scale:default:B=Os;break}const M=w.name?w.name:w.uuid,C=D.interpolation!==void 0?U0[D.interpolation]:rs,ee=[];Gn[O.path]===Gn.weights?w.traverse(function(N){N.morphTargetInfluences&&ee.push(N.name?N.name:N.uuid)}):ee.push(M);let Y=T.array;if(T.normalized){const N=Ya(Y.constructor),k=new Float32Array(Y.length);for(let V=0,ne=Y.length;V<ne;V++)k[V]=Y[V]*N;Y=k}for(let N=0,k=ee.length;N<k;N++){const V=new B(ee[N]+"."+Gn[O.path],S.array,Y,C);D.interpolation==="CUBICSPLINE"&&(V.createInterpolant=function(ie){const J=this instanceof yi?D0:$c;return new J(this.times,this.values,this.getValueSize()/3,ie)},V.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(V)}}return new Fg(i,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&o.traverse(function(r){if(r.isMesh)for(let u=0,c=i.weights.length;u<c;u++)r.morphTargetInfluences[u]=i.weights[u]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),o=[],r=i.children||[];for(let c=0,h=r.length;c<h;c++)o.push(n.getDependency("node",r[c]));const u=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(o),u]).then(function(c){const h=c[0],d=c[1],f=c[2];f!==null&&h.traverse(function(m){m.isSkinnedMesh&&m.bind(f,k0)});for(let m=0,g=d.length;m<g;m++)h.add(d[m]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?i.createUniqueName(s.name):"",r=[],u=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return u&&r.push(u),s.camera!==void 0&&r.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){r.push(c)}),this.nodeCache[e]=Promise.all(r).then(function(c){let h;if(s.isBone===!0?h=new Gc:c.length>1?h=new ci:c.length===1?h=c[0]:h=new ot,h!==c[0])for(let d=0,f=c.length;d<f;d++)h.add(c[d]);if(s.name&&(h.userData.name=s.name,h.name=o),Vn(h,s),s.extensions&&Ts(n,h,s),s.matrix!==void 0){const d=new He;d.fromArray(s.matrix),h.applyMatrix4(d)}else s.translation!==void 0&&h.position.fromArray(s.translation),s.rotation!==void 0&&h.quaternion.fromArray(s.rotation),s.scale!==void 0&&h.scale.fromArray(s.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new ci;n.name&&(s.name=i.createUniqueName(n.name)),Vn(s,n),n.extensions&&Ts(t,s,n);const o=n.nodes||[],r=[];for(let u=0,c=o.length;u<c;u++)r.push(i.getDependency("node",o[u]));return Promise.all(r).then(function(u){for(let h=0,d=u.length;h<d;h++)s.add(u[h]);const c=h=>{const d=new Map;for(const[f,m]of i.associations)(f instanceof hn||f instanceof It)&&d.set(f,m);return h.traverse(f=>{const m=i.associations.get(f);m!=null&&d.set(f,m)}),d};return i.associations=c(s),s})}}function G0(a,e,t){const n=e.attributes,i=new Dn;if(n.POSITION!==void 0){const r=t.json.accessors[n.POSITION],u=r.min,c=r.max;if(u!==void 0&&c!==void 0){if(i.set(new P(u[0],u[1],u[2]),new P(c[0],c[1],c[2])),r.normalized){const h=Ya(Qi[r.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const r=new P,u=new P;for(let c=0,h=s.length;c<h;c++){const d=s[c];if(d.POSITION!==void 0){const f=t.json.accessors[d.POSITION],m=f.min,g=f.max;if(m!==void 0&&g!==void 0){if(u.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),u.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),u.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),f.normalized){const y=Ya(Qi[f.componentType]);u.multiplyScalar(y)}r.max(u)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(r)}a.boundingBox=i;const o=new Un;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,a.boundingSphere=o}function dc(a,e,t){const n=e.attributes,i=[];function s(o,r){return t.getDependency("accessor",o).then(function(u){a.setAttribute(r,u)})}for(const o in n){const r=Za[o]||o.toLowerCase();r in a.attributes||i.push(s(n[o],r))}if(e.indices!==void 0&&!a.index){const o=t.getDependency("accessor",e.indices).then(function(r){a.setIndex(r)});i.push(o)}return Vn(a,e),G0(a,e,t),Promise.all(i).then(function(){return e.targets!==void 0?N0(a,e.targets,t):a})}class V0 extends ot{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new De(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const Xi=new P,fc=new He,pc=new He,mc=new P,gc=new P;class W0{constructor(e={}){const t=this;let n,i,s,o;const r={objects:new WeakMap},u=e.element!==void 0?e.element:document.createElement("div");u.style.overflow="hidden",this.domElement=u,this.getSize=function(){return{width:n,height:i}},this.render=function(m,g){m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),fc.copy(g.matrixWorldInverse),pc.multiplyMatrices(g.projectionMatrix,fc),c(m,m,g),f(m)},this.setSize=function(m,g){n=m,i=g,s=n/2,o=i/2,u.style.width=m+"px",u.style.height=g+"px"};function c(m,g,y){if(m.isCSS2DObject){Xi.setFromMatrixPosition(m.matrixWorld),Xi.applyMatrix4(pc);const p=m.visible===!0&&Xi.z>=-1&&Xi.z<=1&&m.layers.test(y.layers)===!0;if(m.element.style.display=p===!0?"":"none",p===!0){m.onBeforeRender(t,g,y);const E=m.element;E.style.transform="translate("+-100*m.center.x+"%,"+-100*m.center.y+"%)translate("+(Xi.x*s+s)+"px,"+(-Xi.y*o+o)+"px)",E.parentNode!==u&&u.appendChild(E),m.onAfterRender(t,g,y)}const l={distanceToCameraSquared:h(y,m)};r.objects.set(m,l)}for(let p=0,l=m.children.length;p<l;p++)c(m.children[p],g,y)}function h(m,g){return mc.setFromMatrixPosition(m.matrixWorld),gc.setFromMatrixPosition(g.matrixWorld),mc.distanceToSquared(gc)}function d(m){const g=[];return m.traverse(function(y){y.isCSS2DObject&&g.push(y)}),g}function f(m){const g=d(m).sort(function(p,l){if(p.renderOrder!==l.renderOrder)return l.renderOrder-p.renderOrder;const E=r.objects.get(p).distanceToCameraSquared,w=r.objects.get(l).distanceToCameraSquared;return E-w}),y=g.length;for(let p=0,l=g.length;p<l;p++)g[p].element.style.zIndex=y-p}}}const xi=new Hc({antialias:!0,alpha:!0});xi.shadowMap.enabled=!0;xi.setSize(window.innerWidth,window.innerHeight);xi.setClearColor(13421772,1);document.body.appendChild(xi.domElement);const Te=new xg;Te.fog=new ao(13421772,0,300);const Lt=new Ht(15,window.innerWidth/window.innerHeight,1,500);Lt.position.set(26.4,39.8,35.8);const ut=new h0(Lt,xi.domElement);ut.enableDamping=!0;ut.dampingFactor=.025;ut.screenSpacePanning=!1;ut.maxZoom=5;ut.minZoom=.5;ut.minPolarAngle=0;ut.maxPolarAngle=Math.PI/2.05;ut.minDistance=10;ut.maxDistance=100;ut.target=new P(-6.5,0,1.5);new o0(5);const St=new qn(1,1),X0=new On({color:15658734,side:Ye,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1}),ks=new Fe(St,X0);Te.add(ks);ks.position.set(0,0,0);ks.rotateX(Math.PI/2);ks.scale.set(500,500,1);ks.receiveShadow=!0;const q0=new Kg(7829367);Te.add(q0);const Si=new uo(16777215,.25);Si.position.set(15,20,15);Si.castShadow=!0;Si.angle=1;Si.penumbra=1;Si.shadow.mapSize.width=1024;Si.shadow.mapSize.height=1024;Te.add(Si);const dn=new uo(16777215,.55);dn.position.set(0,25,0);dn.castShadow=!0;dn.angle=.5;dn.penumbra=1;dn.shadow.mapSize.width=1024;dn.shadow.mapSize.height=1024;Te.add(dn);const Kn=new Kc(16777215,.15);Kn.position.set(5,7.5,5);Kn.shadow.camera.scale.x=5;Kn.shadow.camera.scale.y=5;Kn.shadow.mapSize.width=1024;Kn.shadow.mapSize.height=1024;Te.add(Kn);new r0(Kn);new a0(Kn.shadow.camera);const j0=new tt().load("./A.png"),K0=new ht({map:j0,side:Ye,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,transparent:!0}),Pr=new Fe(St,K0);Pr.position.set(-3.5,.001,4.5);Pr.rotateX(-Math.PI/2);Pr.receiveShadow=!0;Te.add(Pr);const Z0=new tt().load("./B.png"),Y0=new ht({map:Z0,side:Ye,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,transparent:!0}),Dr=new Fe(St,Y0);Dr.position.set(-2.5,.001,4.5);Dr.rotateX(-Math.PI/2);Dr.receiveShadow=!0;Te.add(Dr);const $0=new tt().load("./C.png"),J0=new ht({map:$0,side:Ye,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,transparent:!0}),Ur=new Fe(St,J0);Ur.position.set(-1.5,.001,4.5);Ur.rotateX(-Math.PI/2);Ur.receiveShadow=!0;Te.add(Ur);const Q0=new tt().load("./D.png"),ey=new ht({map:Q0,side:Ye,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,transparent:!0}),Or=new Fe(St,ey);Or.position.set(-.5,.001,4.5);Or.rotateX(-Math.PI/2);Or.receiveShadow=!0;Te.add(Or);const ty=new tt().load("./E.png"),ny=new ht({map:ty,side:Ye,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,transparent:!0}),Nr=new Fe(St,ny);Nr.position.set(.5,.001,4.5);Nr.rotateX(-Math.PI/2);Nr.receiveShadow=!0;Te.add(Nr);const iy=new tt().load("./F.png"),sy=new ht({map:iy,side:Ye,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,transparent:!0}),Fr=new Fe(St,sy);Fr.position.set(1.5,.001,4.5);Fr.rotateX(-Math.PI/2);Fr.receiveShadow=!0;Te.add(Fr);const ry=new tt().load("./G.png"),ay=new ht({map:ry,side:Ye,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,transparent:!0}),Br=new Fe(St,ay);Br.position.set(2.5,.001,4.5);Br.rotateX(-Math.PI/2);Br.receiveShadow=!0;Te.add(Br);const oy=new tt().load("./H.png"),ly=new ht({map:oy,side:Ye,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,transparent:!0}),zr=new Fe(St,ly);zr.position.set(3.5,.001,4.5);zr.rotateX(-Math.PI/2);zr.receiveShadow=!0;Te.add(zr);const cy=new tt().load("./1.png"),uy=new ht({map:cy,side:Ye,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,transparent:!0}),kr=new Fe(St,uy);kr.position.set(4.5,.001,3.5);kr.rotateX(-Math.PI/2);kr.receiveShadow=!0;Te.add(kr);const hy=new tt().load("./2.png"),dy=new ht({map:hy,side:Ye,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,transparent:!0}),Hr=new Fe(St,dy);Hr.position.set(4.5,.001,2.5);Hr.rotateX(-Math.PI/2);Hr.receiveShadow=!0;Te.add(Hr);const fy=new tt().load("./3.png"),py=new ht({map:fy,side:Ye,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,transparent:!0}),Gr=new Fe(St,py);Gr.position.set(4.5,.001,1.5);Gr.rotateX(-Math.PI/2);Gr.receiveShadow=!0;Te.add(Gr);const my=new tt().load("./4.png"),gy=new ht({map:my,side:Ye,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,transparent:!0}),Vr=new Fe(St,gy);Vr.position.set(4.5,.001,.5);Vr.rotateX(-Math.PI/2);Vr.receiveShadow=!0;Te.add(Vr);const yy=new tt().load("./5.png"),_y=new ht({map:yy,side:Ye,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,transparent:!0}),Wr=new Fe(St,_y);Wr.position.set(4.5,.001,-.5);Wr.rotateX(-Math.PI/2);Wr.receiveShadow=!0;Te.add(Wr);const vy=new tt().load("./6.png"),xy=new ht({map:vy,side:Ye,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,transparent:!0}),Xr=new Fe(St,xy);Xr.position.set(4.5,.001,-1.5);Xr.rotateX(-Math.PI/2);Xr.receiveShadow=!0;Te.add(Xr);const Sy=new tt().load("./7.png"),My=new ht({map:Sy,side:Ye,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,transparent:!0}),qr=new Fe(St,My);qr.position.set(4.5,.001,-2.5);qr.rotateX(-Math.PI/2);qr.receiveShadow=!0;Te.add(qr);const by=new tt().load("./8.png"),wy=new ht({map:by,side:Ye,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,transparent:!0}),jr=new Fe(St,wy);jr.position.set(4.5,.001,-3.5);jr.rotateX(-Math.PI/2);jr.receiveShadow=!0;Te.add(jr);var vr="mix",Ce=0;const ps=new cs,Hs=new Rg(ps);var Mt=[[[.2,.2,.4,.7,.7,.6,.2,.2],[.3,.3,.7,.8,.9,.7,.5,.3],[.5,.5,1.2,1.3,1.2,1.1,.5,.6],[.7,.8,.8,1.7,1.6,.9,.9,.6],[.5,.8,.9,1.5,1.4,1,.9,.6],[.8,.4,1.3,.9,.9,1.4,.4,.9],[.6,.5,.7,.7,.8,.7,.6,.6],[.2,.2,.4,.6,.5,.4,.2,.2]],[[.2,.2,.6,.9,.5,.3,.2,.1],[.5,.4,1,.8,.9,.4,.3,.2],[.8,.8,1.8,1.6,.8,.6,.3,.2],[1.1,1.3,1.2,2.3,1.4,.6,.4,.3],[.9,1.3,1.5,1.8,1.3,.5,.3,.2],[1.5,.6,2.2,1.2,.8,.6,.3,.2],[1.1,.8,1.1,.8,.9,.3,.2,.1],[.3,.3,.7,.8,.4,.3,.2,.1]],[[.2,.3,.3,.4,.9,.9,.2,.3],[.1,.3,.4,.9,.9,1,.6,.5],[.2,.3,.6,.9,1.7,1.7,.6,1],[.2,.3,.5,1.2,1.9,1.3,1.5,1],[.2,.3,.4,1.1,1.6,1.6,1.5,1],[.2,.2,.4,.6,1.1,2.3,.6,1.6],[.1,.2,.2,.6,.7,1.1,.9,1.2],[.1,.1,.2,.4,.6,.6,.3,.3]]],v=new Array(8);for(var _=0;_<8;_++)v[_]=new Array(8);for(var _=0;_<8;_++)for(var le=0;le<8;le++)v[_][le]=new Array(2);for(var _=0;_<8;_++)for(var le=0;le<8;le++)v[_][le][0]=new Fe(ps,new On({color:16777215,flatShading:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1})),v[_][le][0].castShadow=!0,v[_][le][0].receiveShadow=!0,v[_][le][0].userData={color:1,internalValue:Mt[Ce][_][le],colorChange:-1},v[_][le][0].position.set(-3.5+_,0,3.5-le),_==0?v[_][le][0].name="A"+(le+1).toString():_===1?v[_][le][0].name="B"+(le+1).toString():_===2?v[_][le][0].name="C"+(le+1).toString():_===3?v[_][le][0].name="D"+(le+1).toString():_===4?v[_][le][0].name="E"+(le+1).toString():_===5?v[_][le][0].name="F"+(le+1).toString():_===6?v[_][le][0].name="G"+(le+1).toString():_===7&&(v[_][le][0].name="H"+(le+1).toString()),Te.add(v[_][le][0]);for(var _=0;_<8;_++)for(var le=0;le<8;le++)v[_][le][1]=new jn(Hs,new rn({color:0})),v[_][le][1].position.set(-3.5+_,0,3.5-le),_==0?v[_][le][1].name="A"+(le+1).toString()+"Edge":_===1?v[_][le][1].name="B"+(le+1).toString()+"Edge":_===2?v[_][le][1].name="C"+(le+1).toString()+"Edge":_===3?v[_][le][1].name="D"+(le+1).toString()+"Edge":_===4?v[_][le][1].name="E"+(le+1).toString()+"Edge":_===5?v[_][le][1].name="F"+(le+1).toString()+"Edge":_===6?v[_][le][1].name="G"+(le+1).toString()+"Edge":_===7&&(v[_][le][1].name="H"+(le+1).toString()+"Edge"),Te.add(v[_][le][1]);for(var _=0;_<8;_++)for(var le=0;le<8;le++)v[_][le][1].position.y=(2*Mt[Ce][_][le]-v[_][le][1].geometry.parameters.geometry.parameters.height*Mt[Ce][_][le])/2,v[_][le][1].scale.y=Mt[Ce][_][le],Mt[Ce][_][le]>.5&&Mt[Ce][_][le]<=.8?(v[_][le][0].material.color.set(10526880),v[_][le][0].userData.color=.6275):Mt[Ce][_][le]>.8&&Mt[Ce][_][le]<=1.1?(v[_][le][0].material.color.set(6710886),v[_][le][0].userData.color=.4):Mt[Ce][_][le]>1.1&&Mt[Ce][_][le]<=1.4?(v[_][le][0].material.color.set(3355443),v[_][le][0].userData.color=.2):Mt[Ce][_][le]>1.4&&Mt[Ce][_][le]<=1.7&&(v[_][le][0].material.color.set(1710618),v[_][le][0].userData.color=.102),v[_][le][0].scale.y=Mt[Ce][_][le],v[_][le][0].position.y=(2*Mt[Ce][_][le]-v[_][le][0].geometry.parameters.height*Mt[Ce][_][le])/2;const Ty=new tt().load("./SquareUtilization.png"),Ey=new ht({map:Ty,side:Ye,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,transparent:!0,opacity:0}),Mi=new Fe(new qn(3,3),Ey);Mi.position.set(5.5,.001,5.5);Mi.rotateX(-Math.PI/2);Mi.name="Annotation";Mi.userData={Annotation_type:"Square_Utilization"};Te.add(Mi);var Ke=new Array(6);for(var _=0;_<6;_++)Ke[_]=new Array(3);for(var _=0;_<6;_++){Ke[_][0]=new Fe(ps,new On({color:16777215,flatShading:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1})),Ke[_][0].castShadow=!0,Ke[_][0].receiveShadow=!0,Ke[_][0].position.set(6.5,.5,2-_),Ke[_][0].userData={color5:"",color6:""},Te.add(Ke[_][0]),Ke[_][1]=new jn(Hs,new rn({color:0})),Ke[_][1].position.set(6.5,.5,2-_),Te.add(Ke[_][1]),_==5&&(Ke[_][0].position.y=-1,Ke[_][1].position.y=-1);var ni;_==0?ni=new tt().load("HM02.png"):_==1?ni=new tt().load("HM05.png"):_==2?ni=new tt().load("HM08.png"):_==3?ni=new tt().load("HM11.png"):_==4?ni=new tt().load("HM14.png"):_==5&&(ni=new tt().load("HM17.png"));var Ay=new ht({map:ni,side:Ye,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,transparent:!0});Ke[_][2]=new Fe(St,Ay),Ke[_][2].position.set(7.5,.001,2.5-_),Ke[_][2].rotateX(-Math.PI/2),Ke[_][2].rotateZ(Math.PI/2),Te.add(Ke[_][2])}for(var _=0;_<5;_++)Ke[_][0].scale.y=.2+_*.3,Ke[_][0].position.y=(2*Ke[_][0].scale.y-Ke[_][0].geometry.parameters.height*Ke[_][0].scale.y)/2,Ke[_][1].scale.y=.2+_*.3,Ke[_][1].position.y=(2*Ke[_][1].scale.y-Ke[_][1].geometry.parameters.geometry.parameters.height*Ke[_][1].scale.y)/2;Ke[0][0].userData.color5=16777215;Ke[1][0].userData.color5=10526880;Ke[2][0].userData.color5=6710886;Ke[3][0].userData.color5=3355443;Ke[4][0].userData.color5=1710618;for(var _=0;_<5;_++)Ke[_][0].material.color.set(Ke[_][0].userData.color5);var Wt=[[.6,.6,1.7,2.7,2.6,2,.7,.6],[.6,1.7,2.7,2.6,2,.7,.6,.6],[1.7,2.7,2.6,2,.7,.6,.6,.6]],Tr=Wt[Ce].reduce((a,e)=>Math.max(a,e),-1/0),me=new Array(8);for(var _=0;_<8;_++)me[_]=new Array(2);for(var _=0;_<8;_++)me[_][0]=new Fe(ps,new On({color:16777215,flatShading:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1})),me[_][0].castShadow=!0,me[_][0].receiveShadow=!0,me[_][0].position.set(-5.5,0,3.5-_),me[_][0].scale.x=.25,me[_][0].userData={internalValue:Wt[Ce][_],internalSquare:"Rank"},me[_][0].name="barChart",Te.add(me[_][0]),me[_][1]=new jn(Hs,new rn({color:0})),me[_][1].position.set(-5.5,0,3.5-_),me[_][1].scale.x=.25,Te.add(me[_][1]);for(var _=0;_<8;_++)_==0?me[_][0].userData.internalSquare="1st Rank: ":_==1?me[_][0].userData.internalSquare="2nd Rank: ":_==2?me[_][0].userData.internalSquare="3rd Rank: ":_==3?me[_][0].userData.internalSquare="4th Rank: ":_==4?me[_][0].userData.internalSquare="5th Rank: ":_==5?me[_][0].userData.internalSquare="6th Rank: ":_==6?me[_][0].userData.internalSquare="7th Rank: ":_==7&&(me[_][0].userData.internalSquare="8th Rank: ");for(var _=0;_<8;_++)me[_][0].position.y=(2*Wt[Ce][_]-me[_][0].geometry.parameters.height*Wt[Ce][_])/2*2.5,me[_][0].scale.y=Wt[Ce][_]*2.5,me[_][1].position.y=(2*Wt[Ce][_]-me[_][1].geometry.parameters.geometry.parameters.height*Wt[Ce][_])/2*2.5,me[_][1].scale.y=Wt[Ce][_]*2.5,Wt[Ce][_]==Tr&&me[_][0].material.color.set(16758528);var po=[];po.push(new P(-5.375,0,4.25));po.push(new P(-5.375,7.5,4.25));const Cy=new bt().setFromPoints(po),Jc=new rn({color:0}),Ly=new Pn(Cy,Jc);Te.add(Ly);var xr=new Array(8);for(var _=0;_<8;_++){const e=new tt().load("./LeftRuler"+_.toString()+".png"),t=new ht({map:e,side:Ye,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,transparent:!0});xr[_]=new Fe(St,t),xr[_].position.set(-5.375,.275+_,4.75),xr[_].rotateY(Math.PI/2),Te.add(xr[_])}var Da=new Array(7);const Qc=new Ig({color:0,dashSize:.125,gapSize:.05});for(var _=0;_<7;_++){var hi=[];hi.push(new P(-5.375,1+_,4.25)),hi.push(new P(-5.375,1+_,-4.25));const e=new bt().setFromPoints(hi);Da[_]=new Pn(e,Qc),Da[_].computeLineDistances(),Te.add(Da[_])}const Ry=new tt().load("./PieceCapture.png"),Iy=new ht({map:Ry,side:Ye,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,transparent:!0,opacity:0}),Zn=new Fe(new qn(4,1),Iy);Zn.position.set(-5.385,.275,7);Zn.scale.set(1.25,1.25,1.25);Zn.rotateY(Math.PI/2);Zn.name="Annotation";Zn.userData={Annotation_type:"Piece_Capture"};Te.add(Zn);var Xt=[[.3,.6,1.4,2,1.7,1.5,.8,.2],[.6,1.4,2,1.7,1.5,.8,.2,.3],[1.4,2,1.7,1.5,.8,.2,.3,.6]],Er=Xt[Ce].reduce((a,e)=>Math.max(a,e),-1/0),ge=new Array(8);for(var _=0;_<8;_++)ge[_]=new Array(2);for(var _=0;_<8;_++)ge[_][0]=new Fe(ps,new On({color:16777215,flatShading:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1})),ge[_][0].castShadow=!0,ge[_][0].receiveShadow=!0,ge[_][0].position.set(-3.5+_,0,-5.5),ge[_][0].scale.z=.25,ge[_][0].userData={internalValue:Xt[Ce][_],internalSquare:"File"},ge[_][0].name="barChart",Te.add(ge[_][0]),ge[_][1]=new jn(Hs,new rn({color:0})),ge[_][1].position.set(-3.5+_,0,-5.5),ge[_][1].scale.z=.25,Te.add(ge[_][1]);for(var _=0;_<8;_++)_==0?ge[_][0].userData.internalSquare="A File: ":_==1?ge[_][0].userData.internalSquare="B File: ":_==2?ge[_][0].userData.internalSquare="C File: ":_==3?ge[_][0].userData.internalSquare="D File: ":_==4?ge[_][0].userData.internalSquare="E File: ":_==5?ge[_][0].userData.internalSquare="F File: ":_==6?ge[_][0].userData.internalSquare="G File: ":_==7&&(ge[_][0].userData.internalSquare="H File: ");for(var _=0;_<8;_++)ge[_][0].position.y=(2*Xt[Ce][_]-ge[_][0].geometry.parameters.height*Xt[Ce][_])/2*3.325,ge[_][0].scale.y=Xt[Ce][_]*3.325,ge[_][1].position.y=(2*Xt[Ce][_]-ge[_][1].geometry.parameters.geometry.parameters.height*Xt[Ce][_])/2*3.325,ge[_][1].scale.y=Xt[Ce][_]*3.325,Xt[Ce][_]==Er&&ge[_][0].material.color.set(16758528);var mo=[];mo.push(new P(4.25,0,-5.375));mo.push(new P(4.25,7.5,-5.375));const Py=new bt().setFromPoints(mo),Dy=new Pn(Py,Jc);Te.add(Dy);var Ua=new Array(8);for(var _=0;_<8;_++){const e=new tt().load("./RightRuler"+_.toString()+".png"),t=new ht({map:e,side:Ye,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,transparent:!0});Ua[_]=new Fe(St,t),Ua[_].position.set(4.75,.275+_,-5.375),Te.add(Ua[_])}var Oa=new Array(7);for(var _=0;_<7;_++){var hi=[];hi.push(new P(-4.25,1+_,-5.375)),hi.push(new P(4.25,1+_,-5.375));const t=new bt().setFromPoints(hi);Oa[_]=new Pn(t,Qc),Oa[_].computeLineDistances(),Te.add(Oa[_])}const Uy=new tt().load("./RookPlacement.png"),Oy=new ht({map:Uy,side:Ye,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,transparent:!0,opacity:0}),bi=new Fe(new qn(4,1),Oy);bi.position.set(7.25,.275,-5.385);bi.scale.set(1.25,1.25,1.25);bi.name="Annotation";bi.userData={Annotation_type:"Rook_Placement"};Te.add(bi);var Ny={A1:[31.7,21.2,17.8,12.7,9.4,7.2],A2:[31.7,21.2,17.8,12.7,9.4,7.2],A3:[31.7,21.2,17.8,12.7,9.4,7.2],A4:[31.7,21.2,17.8,12.7,9.4,7.2],A5:[31.7,21.2,17.8,12.7,9.4,7.2],A6:[31.7,21.2,17.8,12.7,9.4,7.2],A7:[31.7,21.2,17.8,12.7,9.4,7.2],A8:[31.7,21.2,17.8,12.7,9.4,7.2],B1:[31.7,21.2,17.8,12.7,9.4,7.2],B2:[31.7,21.2,17.8,12.7,9.4,7.2],B3:[31.7,21.2,17.8,12.7,9.4,7.2],B4:[31.7,21.2,17.8,12.7,9.4,7.2],B5:[31.7,21.2,17.8,12.7,9.4,7.2],B6:[31.7,21.2,17.8,12.7,9.4,7.2],B7:[31.7,21.2,17.8,12.7,9.4,7.2],B8:[31.7,21.2,17.8,12.7,9.4,7.2],C1:[31.7,21.2,17.8,12.7,9.4,7.2],C2:[31.7,21.2,17.8,12.7,9.4,7.2],C3:[31.7,21.2,17.8,12.7,9.4,7.2],C4:[31.7,21.2,17.8,12.7,9.4,7.2],C5:[31.7,21.2,17.8,12.7,9.4,7.2],C6:[31.7,21.2,17.8,12.7,9.4,7.2],C7:[31.7,21.2,17.8,12.7,9.4,7.2],C8:[31.7,21.2,17.8,12.7,9.4,7.2],D1:[31.7,21.2,17.8,12.7,9.4,7.2],D2:[31.7,21.2,17.8,12.7,9.4,7.2],D3:[31.7,21.2,17.8,12.7,9.4,7.2],D4:[31.7,21.2,17.8,12.7,9.4,7.2],D5:[31.7,21.2,17.8,12.7,9.4,7.2],D6:[31.7,21.2,17.8,12.7,9.4,7.2],D7:[31.7,21.2,17.8,12.7,9.4,7.2],D8:[31.7,21.2,17.8,12.7,9.4,7.2],E1:[31.7,21.2,17.8,12.7,9.4,7.2],E2:[31.7,21.2,17.8,12.7,9.4,7.2],E3:[31.7,21.2,17.8,12.7,9.4,7.2],E4:[21.2,17.8,12.7,9.4,7.2,31.7],E5:[31.7,21.2,17.8,12.7,9.4,7.2],E6:[31.7,21.2,17.8,12.7,9.4,7.2],E7:[31.7,21.2,17.8,12.7,9.4,7.2],E8:[31.7,21.2,17.8,12.7,9.4,7.2],F1:[31.7,21.2,17.8,12.7,9.4,7.2],F2:[31.7,21.2,17.8,12.7,9.4,7.2],F3:[31.7,21.2,17.8,12.7,9.4,7.2],F4:[31.7,21.2,17.8,12.7,9.4,7.2],F5:[31.7,21.2,17.8,12.7,9.4,7.2],F6:[31.7,21.2,17.8,12.7,9.4,7.2],F7:[31.7,21.2,17.8,12.7,9.4,7.2],F8:[31.7,21.2,17.8,12.7,9.4,7.2],G1:[31.7,21.2,17.8,12.7,9.4,7.2],G2:[31.7,21.2,17.8,12.7,9.4,7.2],G3:[31.7,21.2,17.8,12.7,9.4,7.2],G4:[31.7,21.2,17.8,12.7,9.4,7.2],G5:[31.7,21.2,17.8,12.7,9.4,7.2],G6:[31.7,21.2,17.8,12.7,9.4,7.2],G7:[31.7,21.2,17.8,12.7,9.4,7.2],G8:[31.7,21.2,17.8,12.7,9.4,7.2],H1:[31.7,21.2,17.8,12.7,9.4,7.2],H2:[31.7,21.2,17.8,12.7,9.4,7.2],H3:[31.7,21.2,17.8,12.7,9.4,7.2],H4:[31.7,21.2,17.8,12.7,9.4,7.2],H5:[31.7,21.2,17.8,12.7,9.4,7.2],H6:[31.7,21.2,17.8,12.7,9.4,7.2],H7:[31.7,21.2,17.8,12.7,9.4,7.2],H8:[31.7,21.2,17.8,12.7,9.4,7.2]};const Fy=new URL("/pawn_alt.glb",self.location),By=new URL("/knight_alt.glb",self.location),zy=new URL("/bishop_alt.glb",self.location),ky=new URL("/rook_alt.glb",self.location),Hy=new URL("/queen_alt.glb",self.location),Gy=new URL("/king_alt.glb",self.location),Vy=new fs;Vy.load(Fy.href,function(a){a.scene.traverse(function(t){t.isMesh&&(t.castShadow=!0,t.name="Unclickable")});const e=a.scene;Te.add(e),e.position.set(-2.5,0,7.5),e.scale.set(.25,.25,.25)},void 0,function(a){console.error(a)});const Wy=new fs;Wy.load(By.href,function(a){a.scene.traverse(function(t){t.isMesh&&(t.castShadow=!0,t.name="Unclickable")});const e=a.scene;Te.add(e),e.position.set(-1.5,0,7.5),e.scale.set(.2,.2,.2),e.rotateY(Math.PI)},void 0,function(a){console.error(a)});const Xy=new fs;Xy.load(zy.href,function(a){a.scene.traverse(function(t){t.isMesh&&(t.castShadow=!0,t.name="Unclickable")});const e=a.scene;Te.add(e),e.position.set(-.5,0,7.5),e.scale.set(.2,.2,.2)},void 0,function(a){console.error(a)});const qy=new fs;qy.load(ky.href,function(a){a.scene.traverse(function(t){t.isMesh&&(t.castShadow=!0,t.name="Unclickable")});const e=a.scene;Te.add(e),e.position.set(.5,0,7.5),e.scale.set(.2,.2,.2)},void 0,function(a){console.error(a)});const jy=new fs;jy.load(Hy.href,function(a){a.scene.traverse(function(t){t.isMesh&&(t.castShadow=!0,t.name="Unclickable")});const e=a.scene;Te.add(e),e.position.set(1.5,0,7.5),e.scale.set(.21,.21,.21)},void 0,function(a){console.error(a)});const Ky=new fs;Ky.load(Gy.href,function(a){a.scene.traverse(function(t){t.isMesh&&(t.castShadow=!0,t.name="Unclickable")});const e=a.scene;Te.add(e),e.position.set(2.5,0,7.5),e.scale.set(.18,.18,.18)},void 0,function(a){console.error(a)});var Vt=[1,1,1,1,1,1],br,Z=new Array(6);for(var _=0;_<6;_++)Z[_]=new Array(2);for(var _=0;_<6;_++)Z[_][0]=new Fe(ps,new On({color:16777215,flatShading:!0,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1})),Z[_][0].castShadow=!0,Z[_][0].receiveShadow=!0,Z[_][0].position.set(-2.5+_,0,6.5),Z[_][0].scale.z=.5,Z[_][0].userData={internalValue:0,pieceType:""},Z[_][0].name="Piece_Act",Te.add(Z[_][0]),Z[_][1]=new jn(Hs,new rn({color:0})),Z[_][1].position.set(-2.5+_,0,6.5),Z[_][1].scale.z=.5,Te.add(Z[_][1]);for(var _=0;_<6;_++)Z[_][0].position.y=(2*Vt[_]-Z[_][0].geometry.parameters.height*Vt[_])/2,Z[_][0].scale.y=Vt[_],Z[_][1].position.y=(2*Vt[_]-Z[_][1].geometry.parameters.geometry.parameters.height*Vt[_])/2,Z[_][1].scale.y=Vt[_];Z[0][0].userData.pieceType="Pawn";Z[1][0].userData.pieceType="Knight";Z[2][0].userData.pieceType="Bishop";Z[3][0].userData.pieceType="Rook";Z[4][0].userData.pieceType="Queen";Z[5][0].userData.pieceType="King";const Zy=new tt().load("./PieceActivity.png"),Yy=new ht({map:Zy,side:Ye,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:1,transparent:!0,opacity:0}),wi=new Fe(new qn(4,1),Yy);wi.position.set(0,.275,8.5);wi.scale.set(1.25,1.25,1.25);wi.name="Annotation";wi.userData={Annotation_type:"Piece_Activity"};Te.add(wi);const ms=new W0;ms.setSize(window.innerWidth,window.innerHeight);ms.domElement.style.position="absolute";ms.domElement.style.top="0px";ms.domElement.style.pointerEvents="none";document.body.appendChild(ms.domElement);var Ns=!1;const $y=document.getElementById("explore");$y.addEventListener("click",Jy);function Jy(){if(Ns!=!0){eu();var a=new L({angle:dn.angle}).to({angle:1},2e3).onUpdate(s=>{dn.angle=s.angle}).delay(3e3).easing(I.Cubic.InOut);a.start();var e=new L({opacity:0}).to({opacity:1},1e3).onUpdate(s=>{Mi.material.opacity=s.opacity}).delay(3e3),t=new L({opacity:0}).to({opacity:1},1e3).onUpdate(s=>{wi.material.opacity=s.opacity}).delay(3e3),n=new L({opacity:0}).to({opacity:1},1e3).onUpdate(s=>{bi.material.opacity=s.opacity}).delay(3e3),i=new L({opacity:0}).to({opacity:1},1e3).onUpdate(s=>{Zn.material.opacity=s.opacity}).delay(3e3);e.start(),t.start(),n.start(),i.start(),Ns=!0}}const Qy=document.getElementById("resetButton");Qy.addEventListener("click",eu);function eu(){var a=new L({x:Lt.position.x,y:Lt.position.y,z:Lt.position.z}).to({x:35,y:38,z:35},3e3).onUpdate(t=>{Lt.position.x=t.x,Lt.position.y=t.y,Lt.position.z=t.z}).easing(I.Cubic.InOut),e=new L({x:ut.target.x,y:ut.target.y,z:ut.target.z}).to({x:-2,y:0,z:-2},3e3).onUpdate(t=>{ut.target.x=t.x,ut.target.y=t.y,ut.target.z=t.z}).easing(I.Cubic.InOut);a.start(),e.start()}function tu(){if(Fs){gn.material.color.r=gn.userData.color,gn.material.color.g=gn.userData.color,gn.material.color.b=gn.userData.color,Fs=!1;var a=new L({y:Z[0][0].position.y,yScale:Z[0][0].scale.y}).to({y:.5,yScale:1},1e3).onUpdate(r=>{Z[0][0].position.y=r.y,Z[0][0].scale.y=r.yScale}).easing(I.Cubic.InOut);a.start();var e=new L({y:Z[1][0].position.y,yScale:Z[1][0].scale.y}).to({y:.5,yScale:1},1e3).onUpdate(r=>{Z[1][0].position.y=r.y,Z[1][0].scale.y=r.yScale}).easing(I.Cubic.InOut);e.start();var t=new L({y:Z[2][0].position.y,yScale:Z[2][0].scale.y}).to({y:.5,yScale:1},1e3).onUpdate(r=>{Z[2][0].position.y=r.y,Z[2][0].scale.y=r.yScale}).easing(I.Cubic.InOut);t.start();var n=new L({y:Z[3][0].position.y,yScale:Z[3][0].scale.y}).to({y:.5,yScale:1},1e3).onUpdate(r=>{Z[3][0].position.y=r.y,Z[3][0].scale.y=r.yScale}).easing(I.Cubic.InOut);n.start();var i=new L({y:Z[4][0].position.y,yScale:Z[4][0].scale.y}).to({y:.5,yScale:1},1e3).onUpdate(r=>{Z[4][0].position.y=r.y,Z[4][0].scale.y=r.yScale}).easing(I.Cubic.InOut);i.start();var s=new L({y:Z[5][0].position.y,yScale:Z[5][0].scale.y}).to({y:.5,yScale:1},1e3).onUpdate(r=>{Z[5][0].position.y=r.y,Z[5][0].scale.y=r.yScale}).easing(I.Cubic.InOut);s.start();var a=new L({y:Z[0][1].position.y,yScale:Z[0][1].scale.y}).to({y:.5,yScale:1},1e3).onUpdate(r=>{Z[0][1].position.y=r.y,Z[0][1].scale.y=r.yScale}).easing(I.Cubic.InOut);a.start();var e=new L({y:Z[1][1].position.y,yScale:Z[1][1].scale.y}).to({y:.5,yScale:1},1e3).onUpdate(r=>{Z[1][1].position.y=r.y,Z[1][1].scale.y=r.yScale}).easing(I.Cubic.InOut);e.start();var t=new L({y:Z[2][1].position.y,yScale:Z[2][1].scale.y}).to({y:.5,yScale:1},1e3).onUpdate(r=>{Z[2][1].position.y=r.y,Z[2][1].scale.y=r.yScale}).easing(I.Cubic.InOut);t.start();var n=new L({y:Z[3][1].position.y,yScale:Z[3][1].scale.y}).to({y:.5,yScale:1},1e3).onUpdate(r=>{Z[3][1].position.y=r.y,Z[3][1].scale.y=r.yScale}).easing(I.Cubic.InOut);n.start();var i=new L({y:Z[4][1].position.y,yScale:Z[4][1].scale.y}).to({y:.5,yScale:1},1e3).onUpdate(r=>{Z[4][1].position.y=r.y,Z[4][1].scale.y=r.yScale}).easing(I.Cubic.InOut);i.start();var s=new L({y:Z[5][1].position.y,yScale:Z[5][1].scale.y}).to({y:.5,yScale:1},1e3).onUpdate(r=>{Z[5][1].position.y=r.y,Z[5][1].scale.y=r.yScale}).easing(I.Cubic.InOut);s.start();for(var o=0;o<6;o++)if(Z[o][0].userData.internalValue==br){var a=new L({r:1,g:.7216,b:0}).to({r:1,g:1,b:1},1e3).onUpdate(u=>{Z[o][0].material.color.r=u.r,Z[o][0].material.color.g=u.g,Z[o][0].material.color.b=u.b}).easing(I.Cubic.InOut);a.start();break}gn=!1}}const e_=document.getElementById("homeButton");e_.addEventListener("click",t_);function t_(){document.getElementById("sideCredits").style.left="-450px",es!=null&&(document.getElementById(es).style.right="-450px");var a=new L({angle:dn.angle}).to({angle:.5},2e3).onUpdate(r=>{dn.angle=r.angle}).delay(3e3).easing(I.Cubic.InOut);a.start(),tu();var e=new L({opacity:1}).to({opacity:0},1e3).onUpdate(r=>{Mi.material.opacity=r.opacity}),t=new L({opacity:1}).to({opacity:0},1e3).onUpdate(r=>{wi.material.opacity=r.opacity}),n=new L({opacity:1}).to({opacity:0},1e3).onUpdate(r=>{bi.material.opacity=r.opacity}),i=new L({opacity:1}).to({opacity:0},1e3).onUpdate(r=>{Zn.material.opacity=r.opacity});e.start(),t.start(),n.start(),i.start();var s=new L({x:Lt.position.x,y:Lt.position.y,z:Lt.position.z}).to({x:26.4,y:39.8,z:35.8},3e3).onUpdate(r=>{Lt.position.x=r.x,Lt.position.y=r.y,Lt.position.z=r.z}).easing(I.Cubic.InOut),o=new L({x:ut.target.x,y:ut.target.y,z:ut.target.z}).to({x:-6.5,y:0,z:1.5},3e3).onUpdate(r=>{ut.target.x=r.x,ut.target.y=r.y,ut.target.z=r.z}).easing(I.Cubic.InOut);s.start(),o.start(),es=void 0,Ns=!1}const Cn=document.createElement("p");Cn.className="tooltip";const nu=document.createElement("div");nu.appendChild(Cn);const ri=new V0(nu);Te.add(ri);window.addEventListener("mousemove",n_);function n_(a){if(Ns){var e=new De(a.clientX/window.innerWidth*2-1,-(a.clientY/window.innerHeight)*2+1),t=new Zc;t.linePrecision=.1,t.setFromCamera(e,Lt);var n=t.intersectObjects(Te.children);if(n.length>0)for(var i=0;i<n.length;i++)if(n[i].object.name=="Annotation"){document.body.style.cursor="pointer";break}else if(n[i].object.name=="barChart"){Cn.className="tooltip show";var s=n[i].object.position;ri.position.set(s.x,s.y,s.z),ri.position.y=n[i].object.geometry.parameters.height*n[i].object.scale.y+.75,Cn.textContent=n[i].object.userData.internalSquare.toString()+n[i].object.userData.internalValue.toString();break}else if(n[i].object.name.length==2){document.body.style.cursor="pointer",Cn.className="tooltip show";var s=n[i].object.position;ri.position.set(s.x,s.y,s.z),ri.position.y=n[i].object.geometry.parameters.height*n[i].object.scale.y+.75,Cn.textContent=n[i].object.name.toString()+": "+n[i].object.userData.internalValue.toString();break}else if(n[i].object.name=="Piece_Act"){if(Fs){Cn.className="tooltip show";var s=n[i].object.position;ri.position.set(s.x,s.y,s.z),ri.position.y=n[i].object.geometry.parameters.height*n[i].object.scale.y+.75,Cn.textContent=n[i].object.userData.pieceType+": "+n[i].object.userData.internalValue.toString()}break}else Cn.className="tooltip hide",document.body.style.cursor="default"}}document.getElementById("mix").addEventListener("click",go);document.getElementById("white").addEventListener("click",go);document.getElementById("black").addEventListener("click",go);function i_(){for(var a=0;a<8;a++)if(me[a][0].userData.internalValue==Tr){var e=new L({r:1,g:.7216,b:0}).to({r:1,g:1,b:1},1e3).onUpdate(t=>{me[a][0].material.color.r=t.r,me[a][0].material.color.g=t.g,me[a][0].material.color.b=t.b}).easing(I.Cubic.InOut);e.start();break}}function s_(){for(var a=0;a<8;a++)if(ge[a][0].userData.internalValue==Er){var e=new L({r:1,g:.7216,b:0}).to({r:1,g:1,b:1},1e3).onUpdate(t=>{ge[a][0].material.color.r=t.r,ge[a][0].material.color.g=t.g,ge[a][0].material.color.b=t.b}).easing(I.Cubic.InOut);e.start();break}}function go(){var a=document.getElementsByClassName("activeData");if(a[0].id!=vr){a[0].id=="mix"?(vr="mix",Ce=0):a[0].id=="white"?(vr="white",Ce=1):a[0].id=="black"&&(vr="black",Ce=2),i_();for(var e=0;e<8;e++){var t=me[e][0].geometry.parameters.height*me[e][0].scale.y/2,n=me[e][0].scale.y,i=(2*Wt[Ce][e]-me[e][0].geometry.parameters.height*Wt[Ce][e])/2*2.5,s=Wt[Ce][e]*2.5;if(e==0){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(h=>{me[0][0].position.y=h.y,me[0][0].scale.y=h.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(h=>{me[0][1].position.y=h.y,me[0][1].scale.y=h.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==1){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(f=>{me[1][0].position.y=f.y,me[1][0].scale.y=f.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(f=>{me[1][1].position.y=f.y,me[1][1].scale.y=f.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==2){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(f=>{me[2][0].position.y=f.y,me[2][0].scale.y=f.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(f=>{me[2][1].position.y=f.y,me[2][1].scale.y=f.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==3){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(f=>{me[3][0].position.y=f.y,me[3][0].scale.y=f.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(f=>{me[3][1].position.y=f.y,me[3][1].scale.y=f.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==4){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(f=>{me[4][0].position.y=f.y,me[4][0].scale.y=f.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(f=>{me[4][1].position.y=f.y,me[4][1].scale.y=f.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==5){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(f=>{me[5][0].position.y=f.y,me[5][0].scale.y=f.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(f=>{me[5][1].position.y=f.y,me[5][1].scale.y=f.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==6){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(f=>{me[6][0].position.y=f.y,me[6][0].scale.y=f.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(f=>{me[6][1].position.y=f.y,me[6][1].scale.y=f.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==7){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(f=>{me[7][0].position.y=f.y,me[7][0].scale.y=f.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(f=>{me[7][1].position.y=f.y,me[7][1].scale.y=f.yScale}).easing(I.Cubic.InOut);r.start()}}Tr=Wt[Ce].reduce((h,d)=>Math.max(h,d),-1/0);for(var u=0;u<8;u++)if(me[u][0].userData.internalValue=Wt[Ce][u],me[u][0].userData.internalValue==Tr){var o=new L({r:1,g:1,b:1}).to({r:1,g:.7216,b:0},1e3).onUpdate(d=>{me[u][0].material.color.r=d.r,me[u][0].material.color.g=d.g,me[u][0].material.color.b=d.b}).easing(I.Cubic.InOut).delay(1e3);o.start();break}s_();for(var e=0;e<8;e++){var t=ge[e][0].geometry.parameters.height*ge[e][0].scale.y/2,n=ge[e][0].scale.y,i=(2*Xt[Ce][e]-ge[e][0].geometry.parameters.height*Xt[Ce][e])/2*3.325,s=Xt[Ce][e]*3.325;if(e==0){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{ge[0][0].position.y=l.y,ge[0][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{ge[0][1].position.y=l.y,ge[0][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==1){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{ge[1][0].position.y=l.y,ge[1][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{ge[1][1].position.y=l.y,ge[1][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==2){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{ge[2][0].position.y=l.y,ge[2][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{ge[2][1].position.y=l.y,ge[2][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==3){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{ge[3][0].position.y=l.y,ge[3][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{ge[3][1].position.y=l.y,ge[3][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==4){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{ge[4][0].position.y=l.y,ge[4][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{ge[4][1].position.y=l.y,ge[4][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==5){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{ge[5][0].position.y=l.y,ge[5][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{ge[5][1].position.y=l.y,ge[5][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==6){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{ge[6][0].position.y=l.y,ge[6][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{ge[6][1].position.y=l.y,ge[6][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==7){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{ge[7][0].position.y=l.y,ge[7][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{ge[7][1].position.y=l.y,ge[7][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}}Er=Xt[Ce].reduce((h,d)=>Math.max(h,d),-1/0);for(var u=0;u<8;u++)if(ge[u][0].userData.internalValue=Xt[Ce][u],ge[u][0].userData.internalValue==Er){var o=new L({r:1,g:1,b:1}).to({r:1,g:.7216,b:0},1e3).onUpdate(f=>{ge[u][0].material.color.r=f.r,ge[u][0].material.color.g=f.g,ge[u][0].material.color.b=f.b}).easing(I.Cubic.InOut).delay(1e3);o.start();break}tu();for(var e=0;e<8;e++)for(var c=0;c<8;c++){v[e][c][0].userData.internalValue=Mt[Ce][e][c];var t=v[e][c][0].geometry.parameters.height*v[e][c][0].scale.y/2,n=v[e][c][0].scale.y,i=(2*Mt[Ce][e][c]-v[e][c][0].geometry.parameters.height*Mt[Ce][e][c])/2,s=Mt[Ce][e][c];if(e==0&&c==0){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[0][0][0].position.y=l.y,v[0][0][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[0][0][1].position.y=l.y,v[0][0][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==0&&c==1){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[0][1][0].position.y=l.y,v[0][1][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[0][1][1].position.y=l.y,v[0][1][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==0&&c==2){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[0][2][0].position.y=l.y,v[0][2][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[0][2][1].position.y=l.y,v[0][2][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==0&&c==3){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[0][3][0].position.y=l.y,v[0][3][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[0][3][1].position.y=l.y,v[0][3][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==0&&c==4){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[0][4][0].position.y=l.y,v[0][4][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[0][4][1].position.y=l.y,v[0][4][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==0&&c==5){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[0][5][0].position.y=l.y,v[0][5][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[0][5][1].position.y=l.y,v[0][5][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==0&&c==6){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[0][6][0].position.y=l.y,v[0][6][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[0][6][1].position.y=l.y,v[0][6][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==0&&c==7){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[0][7][0].position.y=l.y,v[0][7][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[0][7][1].position.y=l.y,v[0][7][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==1&&c==0){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[1][0][0].position.y=l.y,v[1][0][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[1][0][1].position.y=l.y,v[1][0][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==1&&c==1){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[1][1][0].position.y=l.y,v[1][1][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[1][1][1].position.y=l.y,v[1][1][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==1&&c==2){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[1][2][0].position.y=l.y,v[1][2][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[1][2][1].position.y=l.y,v[1][2][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==1&&c==3){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[1][3][0].position.y=l.y,v[1][3][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[1][3][1].position.y=l.y,v[1][3][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==1&&c==4){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[1][4][0].position.y=l.y,v[1][4][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[1][4][1].position.y=l.y,v[1][4][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==1&&c==5){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[1][5][0].position.y=l.y,v[1][5][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[1][5][1].position.y=l.y,v[1][5][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==1&&c==6){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[1][6][0].position.y=l.y,v[1][6][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[1][6][1].position.y=l.y,v[1][6][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==1&&c==7){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[1][7][0].position.y=l.y,v[1][7][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[1][7][1].position.y=l.y,v[1][7][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==2&&c==0){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[2][0][0].position.y=l.y,v[2][0][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[2][0][1].position.y=l.y,v[2][0][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==2&&c==1){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[2][1][0].position.y=l.y,v[2][1][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[2][1][1].position.y=l.y,v[2][1][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==2&&c==2){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[2][2][0].position.y=l.y,v[2][2][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[2][2][1].position.y=l.y,v[2][2][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==2&&c==3){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[2][3][0].position.y=l.y,v[2][3][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[2][3][1].position.y=l.y,v[2][3][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==2&&c==4){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[2][4][0].position.y=l.y,v[2][4][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[2][4][1].position.y=l.y,v[2][4][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==2&&c==5){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[2][5][0].position.y=l.y,v[2][5][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[2][5][1].position.y=l.y,v[2][5][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==2&&c==6){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[2][6][0].position.y=l.y,v[2][6][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[2][6][1].position.y=l.y,v[2][6][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==2&&c==7){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[2][7][0].position.y=l.y,v[2][7][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[2][7][1].position.y=l.y,v[2][7][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==3&&c==0){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[3][0][0].position.y=l.y,v[3][0][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[3][0][1].position.y=l.y,v[3][0][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==3&&c==1){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[3][1][0].position.y=l.y,v[3][1][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[3][1][1].position.y=l.y,v[3][1][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==3&&c==2){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[3][2][0].position.y=l.y,v[3][2][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[3][2][1].position.y=l.y,v[3][2][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==3&&c==3){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[3][3][0].position.y=l.y,v[3][3][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[3][3][1].position.y=l.y,v[3][3][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==3&&c==4){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[3][4][0].position.y=l.y,v[3][4][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[3][4][1].position.y=l.y,v[3][4][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==3&&c==5){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[3][5][0].position.y=l.y,v[3][5][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[3][5][1].position.y=l.y,v[3][5][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==3&&c==6){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[3][6][0].position.y=l.y,v[3][6][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[3][6][1].position.y=l.y,v[3][6][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==3&&c==7){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[3][7][0].position.y=l.y,v[3][7][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[3][7][1].position.y=l.y,v[3][7][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==4&&c==0){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[4][0][0].position.y=l.y,v[4][0][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[4][0][1].position.y=l.y,v[4][0][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==4&&c==1){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[4][1][0].position.y=l.y,v[4][1][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[4][1][1].position.y=l.y,v[4][1][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==4&&c==2){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[4][2][0].position.y=l.y,v[4][2][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[4][2][1].position.y=l.y,v[4][2][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==4&&c==3){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[4][3][0].position.y=l.y,v[4][3][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[4][3][1].position.y=l.y,v[4][3][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==4&&c==4){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[4][4][0].position.y=l.y,v[4][4][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[4][4][1].position.y=l.y,v[4][4][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==4&&c==5){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[4][5][0].position.y=l.y,v[4][5][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[4][5][1].position.y=l.y,v[4][5][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==4&&c==6){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[4][6][0].position.y=l.y,v[4][6][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[4][6][1].position.y=l.y,v[4][6][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==4&&c==7){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[4][7][0].position.y=l.y,v[4][7][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[4][7][1].position.y=l.y,v[4][7][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==5&&c==0){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[5][0][0].position.y=l.y,v[5][0][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[5][0][1].position.y=l.y,v[5][0][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==5&&c==1){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[5][1][0].position.y=l.y,v[5][1][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[5][1][1].position.y=l.y,v[5][1][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==5&&c==2){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[5][2][0].position.y=l.y,v[5][2][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[5][2][1].position.y=l.y,v[5][2][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==5&&c==3){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[5][3][0].position.y=l.y,v[5][3][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[5][3][1].position.y=l.y,v[5][3][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==5&&c==4){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[5][4][0].position.y=l.y,v[5][4][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[5][4][1].position.y=l.y,v[5][4][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==5&&c==5){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[5][5][0].position.y=l.y,v[5][5][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[5][5][1].position.y=l.y,v[5][5][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==5&&c==6){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[5][6][0].position.y=l.y,v[5][6][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[5][6][1].position.y=l.y,v[5][6][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==5&&c==7){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[5][7][0].position.y=l.y,v[5][7][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[5][7][1].position.y=l.y,v[5][7][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==6&&c==0){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[6][0][0].position.y=l.y,v[6][0][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[6][0][1].position.y=l.y,v[6][0][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==6&&c==1){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[6][1][0].position.y=l.y,v[6][1][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[6][1][1].position.y=l.y,v[6][1][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==6&&c==2){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[6][2][0].position.y=l.y,v[6][2][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[6][2][1].position.y=l.y,v[6][2][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==6&&c==3){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[6][3][0].position.y=l.y,v[6][3][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[6][3][1].position.y=l.y,v[6][3][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==6&&c==4){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[6][4][0].position.y=l.y,v[6][4][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[6][4][1].position.y=l.y,v[6][4][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==6&&c==5){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[6][5][0].position.y=l.y,v[6][5][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[6][5][1].position.y=l.y,v[6][5][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==6&&c==6){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[6][6][0].position.y=l.y,v[6][6][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[6][6][1].position.y=l.y,v[6][6][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==6&&c==7){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[6][7][0].position.y=l.y,v[6][7][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[6][7][1].position.y=l.y,v[6][7][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==7&&c==0){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[7][0][0].position.y=l.y,v[7][0][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[7][0][1].position.y=l.y,v[7][0][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==7&&c==1){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[7][1][0].position.y=l.y,v[7][1][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[7][1][1].position.y=l.y,v[7][1][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==7&&c==2){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[7][2][0].position.y=l.y,v[7][2][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[7][2][1].position.y=l.y,v[7][2][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==7&&c==3){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[7][3][0].position.y=l.y,v[7][3][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[7][3][1].position.y=l.y,v[7][3][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==7&&c==4){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[7][4][0].position.y=l.y,v[7][4][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[7][4][1].position.y=l.y,v[7][4][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==7&&c==5){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[7][5][0].position.y=l.y,v[7][5][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[7][5][1].position.y=l.y,v[7][5][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==7&&c==6){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[7][6][0].position.y=l.y,v[7][6][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[7][6][1].position.y=l.y,v[7][6][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}else if(e==7&&c==7){var o=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[7][7][0].position.y=l.y,v[7][7][0].scale.y=l.yScale}).easing(I.Cubic.InOut);o.start();var r=new L({y:t,yScale:n}).to({y:i,yScale:s},1e3).onUpdate(l=>{v[7][7][1].position.y=l.y,v[7][7][1].scale.y=l.yScale}).easing(I.Cubic.InOut);r.start()}}}}document.getElementById("Piece_Activity_X").addEventListener("click",function(){document.getElementById("Piece_Activity").style.right="-450px"});document.getElementById("Piece_Capture_X").addEventListener("click",function(){document.getElementById("Piece_Capture").style.right="-450px"});document.getElementById("Square_Utilization_X").addEventListener("click",function(){document.getElementById("Square_Utilization").style.right="-450px"});document.getElementById("Rook_Placement_X").addEventListener("click",function(){document.getElementById("Rook_Placement").style.right="-450px"});var Fs=!1,gn,es;document.addEventListener("click",r_);function r_(a){if(Ns){a.preventDefault();var e=new De(a.clientX/window.innerWidth*2-1,-(a.clientY/window.innerHeight)*2+1),t=new Zc;t.linePrecision=.1,t.setFromCamera(e,Lt);var n=t.intersectObjects(Te.children);if(n.length>0){console.log(n);for(var i=0;i<n.length;i++)if(n[i].object.isMesh===!0&&n[i].object.name.length>0&&n[i].object.material.opacity>0){if(n[i].object.name=="Annotation"){var s=document.getElementById(n[i].object.userData.Annotation_type).firstElementChild.lastElementChild.previousElementSibling.src;document.getElementById(n[i].object.userData.Annotation_type).firstElementChild.lastElementChild.previousElementSibling.src="#",document.getElementById(n[i].object.userData.Annotation_type).firstElementChild.lastElementChild.previousElementSibling.src=s,es==null||(document.getElementById(es).style.right="-450px"),document.getElementById(n[i].object.userData.Annotation_type).style.right="0",es=n[i].object.userData.Annotation_type;break}else if(n[i].object.name.length==2){if(Fs){gn.material.color.set(gn.userData.color);for(var o=0;o<6;o++)if(Z[o][0].userData.internalValue==br){var r=new L({r:1,g:.7216,b:0}).to({r:1,g:1,b:1},1e3).onUpdate(g=>{Z[o][0].material.color.r=g.r,Z[o][0].material.color.g=g.g,Z[o][0].material.color.b=g.b}).easing(I.Cubic.InOut);r.start();break}}gn=n[i].object,Fs=!0,n[i].object.material.color.set(16758528),Vt=Ny[n[i].object.name],br=Vt.reduce((g,y)=>Math.max(g,y),-1/0);for(var i=0;i<6;i++){Z[i][0].userData.internalValue=Vt[i];for(var u=0;u<2;u++){var c,h=Z[i][u].scale.y,d,f=Vt[i]*.1;if(u==0){if(c=Z[i][u].geometry.parameters.height*Z[i][u].scale.y/2,d=(2*Vt[i]-Z[i][u].geometry.parameters.height*Vt[i])/2*.1,i==0){var r=new L({y:c,yScale:h}).to({y:d,yScale:f},1e3).onUpdate(p=>{Z[0][0].position.y=p.y,Z[0][0].scale.y=p.yScale}).easing(I.Cubic.InOut);r.start()}else if(i==1){var r=new L({y:c,yScale:h}).to({y:d,yScale:f},1e3).onUpdate(p=>{Z[1][0].position.y=p.y,Z[1][0].scale.y=p.yScale}).easing(I.Cubic.InOut);r.start()}else if(i==2){var r=new L({y:c,yScale:h}).to({y:d,yScale:f},1e3).onUpdate(p=>{Z[2][0].position.y=p.y,Z[2][0].scale.y=p.yScale}).easing(I.Cubic.InOut);r.start()}else if(i==3){var r=new L({y:c,yScale:h}).to({y:d,yScale:f},1e3).onUpdate(p=>{Z[3][0].position.y=p.y,Z[3][0].scale.y=p.yScale}).easing(I.Cubic.InOut);r.start()}else if(i==4){var r=new L({y:c,yScale:h}).to({y:d,yScale:f},1e3).onUpdate(p=>{Z[4][0].position.y=p.y,Z[4][0].scale.y=p.yScale}).easing(I.Cubic.InOut);r.start()}else if(i==5){var r=new L({y:c,yScale:h}).to({y:d,yScale:f},1e3).onUpdate(p=>{Z[5][0].position.y=p.y,Z[5][0].scale.y=p.yScale}).easing(I.Cubic.InOut);r.start()}if(Z[i][0].userData.internalValue==br){var m=new Le(1,1,1);Z[i][0].material.color=m;var r=new L({r:1,g:1,b:1}).to({r:1,g:.7216,b:0},1e3).onUpdate(p=>{m.r=p.r,m.g=p.g,m.b=p.b}).easing(I.Cubic.InOut);r.start()}}else if(u==1){if(c=Z[i][u].geometry.parameters.geometry.parameters.height*Z[i][u].scale.y/2,d=(2*Vt[i]-Z[i][u].geometry.parameters.geometry.parameters.height*Vt[i])/2*.1,i==0){var r=new L({y:c,yScale:h}).to({y:d,yScale:f},1e3).onUpdate(p=>{Z[0][1].position.y=p.y,Z[0][1].scale.y=p.yScale}).easing(I.Cubic.InOut);r.start()}else if(i==1){var r=new L({y:c,yScale:h}).to({y:d,yScale:f},1e3).onUpdate(p=>{Z[1][1].position.y=p.y,Z[1][1].scale.y=p.yScale}).easing(I.Cubic.InOut);r.start()}else if(i==2){var r=new L({y:c,yScale:h}).to({y:d,yScale:f},1e3).onUpdate(p=>{Z[2][1].position.y=p.y,Z[2][1].scale.y=p.yScale}).easing(I.Cubic.InOut);r.start()}else if(i==3){var r=new L({y:c,yScale:h}).to({y:d,yScale:f},1e3).onUpdate(p=>{Z[3][1].position.y=p.y,Z[3][1].scale.y=p.yScale}).easing(I.Cubic.InOut);r.start()}else if(i==4){var r=new L({y:c,yScale:h}).to({y:d,yScale:f},1e3).onUpdate(p=>{Z[4][1].position.y=p.y,Z[4][1].scale.y=p.yScale}).easing(I.Cubic.InOut);r.start()}else if(i==5){var r=new L({y:c,yScale:h}).to({y:d,yScale:f},1e3).onUpdate(p=>{Z[5][1].position.y=p.y,Z[5][1].scale.y=p.yScale}).easing(I.Cubic.InOut);r.start()}}}}break}}}}}function a_(){xi.render(Te,Lt),ut.update(),u0(),ms.render(Te,Lt)}xi.setAnimationLoop(a_);
