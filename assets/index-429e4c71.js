function kx(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in t)){const a=Object.getOwnPropertyDescriptor(i,r);a&&Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();function zx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Xo={},Bx={get exports(){return Xo},set exports(t){Xo=t}},Tu={},we={},Hx={get exports(){return we},set exports(t){we=t}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vs=Symbol.for("react.element"),Gx=Symbol.for("react.portal"),Vx=Symbol.for("react.fragment"),Wx=Symbol.for("react.strict_mode"),Xx=Symbol.for("react.profiler"),jx=Symbol.for("react.provider"),Yx=Symbol.for("react.context"),$x=Symbol.for("react.forward_ref"),qx=Symbol.for("react.suspense"),Kx=Symbol.for("react.memo"),Zx=Symbol.for("react.lazy"),gp=Symbol.iterator;function Qx(t){return t===null||typeof t!="object"?null:(t=gp&&t[gp]||t["@@iterator"],typeof t=="function"?t:null)}var Hv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gv=Object.assign,Vv={};function oo(t,e,n){this.props=t,this.context=e,this.refs=Vv,this.updater=n||Hv}oo.prototype.isReactComponent={};oo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};oo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Wv(){}Wv.prototype=oo.prototype;function Kd(t,e,n){this.props=t,this.context=e,this.refs=Vv,this.updater=n||Hv}var Zd=Kd.prototype=new Wv;Zd.constructor=Kd;Gv(Zd,oo.prototype);Zd.isPureReactComponent=!0;var vp=Array.isArray,Xv=Object.prototype.hasOwnProperty,Qd={current:null},jv={key:!0,ref:!0,__self:!0,__source:!0};function Yv(t,e,n){var i,r={},a=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(a=""+e.key),e)Xv.call(e,i)&&!jv.hasOwnProperty(i)&&(r[i]=e[i]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)r[i]===void 0&&(r[i]=s[i]);return{$$typeof:vs,type:t,key:a,ref:o,props:r,_owner:Qd.current}}function Jx(t,e){return{$$typeof:vs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Jd(t){return typeof t=="object"&&t!==null&&t.$$typeof===vs}function eS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var _p=/\/+/g;function uc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?eS(""+t.key):e.toString(36)}function Rl(t,e,n,i,r){var a=typeof t;(a==="undefined"||a==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(a){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case vs:case Gx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+uc(o,0):i,vp(r)?(n="",t!=null&&(n=t.replace(_p,"$&/")+"/"),Rl(r,e,n,"",function(u){return u})):r!=null&&(Jd(r)&&(r=Jx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(_p,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",vp(t))for(var s=0;s<t.length;s++){a=t[s];var l=i+uc(a,s);o+=Rl(a,e,n,l,r)}else if(l=Qx(t),typeof l=="function")for(t=l.call(t),s=0;!(a=t.next()).done;)a=a.value,l=i+uc(a,s++),o+=Rl(a,e,n,l,r);else if(a==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ds(t,e,n){if(t==null)return t;var i=[],r=0;return Rl(t,i,"","",function(a){return e.call(n,a,r++)}),i}function tS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Jt={current:null},Cl={transition:null},nS={ReactCurrentDispatcher:Jt,ReactCurrentBatchConfig:Cl,ReactCurrentOwner:Qd};He.Children={map:Ds,forEach:function(t,e,n){Ds(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ds(t,function(){e++}),e},toArray:function(t){return Ds(t,function(e){return e})||[]},only:function(t){if(!Jd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};He.Component=oo;He.Fragment=Vx;He.Profiler=Xx;He.PureComponent=Kd;He.StrictMode=Wx;He.Suspense=qx;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nS;He.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Gv({},t.props),r=t.key,a=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(a=e.ref,o=Qd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)Xv.call(e,l)&&!jv.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}return{$$typeof:vs,type:t.type,key:r,ref:a,props:i,_owner:o}};He.createContext=function(t){return t={$$typeof:Yx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:jx,_context:t},t.Consumer=t};He.createElement=Yv;He.createFactory=function(t){var e=Yv.bind(null,t);return e.type=t,e};He.createRef=function(){return{current:null}};He.forwardRef=function(t){return{$$typeof:$x,render:t}};He.isValidElement=Jd;He.lazy=function(t){return{$$typeof:Zx,_payload:{_status:-1,_result:t},_init:tS}};He.memo=function(t,e){return{$$typeof:Kx,type:t,compare:e===void 0?null:e}};He.startTransition=function(t){var e=Cl.transition;Cl.transition={};try{t()}finally{Cl.transition=e}};He.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};He.useCallback=function(t,e){return Jt.current.useCallback(t,e)};He.useContext=function(t){return Jt.current.useContext(t)};He.useDebugValue=function(){};He.useDeferredValue=function(t){return Jt.current.useDeferredValue(t)};He.useEffect=function(t,e){return Jt.current.useEffect(t,e)};He.useId=function(){return Jt.current.useId()};He.useImperativeHandle=function(t,e,n){return Jt.current.useImperativeHandle(t,e,n)};He.useInsertionEffect=function(t,e){return Jt.current.useInsertionEffect(t,e)};He.useLayoutEffect=function(t,e){return Jt.current.useLayoutEffect(t,e)};He.useMemo=function(t,e){return Jt.current.useMemo(t,e)};He.useReducer=function(t,e,n){return Jt.current.useReducer(t,e,n)};He.useRef=function(t){return Jt.current.useRef(t)};He.useState=function(t){return Jt.current.useState(t)};He.useSyncExternalStore=function(t,e,n){return Jt.current.useSyncExternalStore(t,e,n)};He.useTransition=function(){return Jt.current.useTransition()};He.version="18.2.0";(function(t){t.exports=He})(Hx);const jn=zx(we),Mf=kx({__proto__:null,default:jn},[we]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iS=we,rS=Symbol.for("react.element"),aS=Symbol.for("react.fragment"),oS=Object.prototype.hasOwnProperty,sS=iS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,lS={key:!0,ref:!0,__self:!0,__source:!0};function $v(t,e,n){var i,r={},a=null,o=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)oS.call(e,i)&&!lS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:rS,type:t,key:a,ref:o,props:r,_owner:sS.current}}Tu.Fragment=aS;Tu.jsx=$v;Tu.jsxs=$v;(function(t){t.exports=Tu})(Bx);const qv=Xo.Fragment,Ee=Xo.jsx,$t=Xo.jsxs;var wf={},Tf={},uS={get exports(){return Tf},set exports(t){Tf=t}},yn={},bf={},cS={get exports(){return bf},set exports(t){bf=t}},Kv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,B){var k=N.length;N.push(B);e:for(;0<k;){var fe=k-1>>>1,ee=N[fe];if(0<r(ee,B))N[fe]=B,N[k]=ee,k=fe;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var B=N[0],k=N.pop();if(k!==B){N[0]=k;e:for(var fe=0,ee=N.length,H=ee>>>1;fe<H;){var Z=2*(fe+1)-1,oe=N[Z],se=Z+1,L=N[se];if(0>r(oe,k))se<ee&&0>r(L,oe)?(N[fe]=L,N[se]=k,fe=se):(N[fe]=oe,N[Z]=k,fe=Z);else if(se<ee&&0>r(L,k))N[fe]=L,N[se]=k,fe=se;else break e}}return B}function r(N,B){var k=N.sortIndex-B.sortIndex;return k!==0?k:N.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;t.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();t.unstable_now=function(){return o.now()-s}}var l=[],u=[],c=1,d=null,h=3,p=!1,g=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(N){for(var B=n(u);B!==null;){if(B.callback===null)i(u);else if(B.startTime<=N)i(u),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(u)}}function E(N){if(v=!1,y(N),!g)if(n(l)!==null)g=!0,te(S);else{var B=n(u);B!==null&&Q(E,B.startTime-N)}}function S(N,B){g=!1,v&&(v=!1,f(P),P=-1),p=!0;var k=h;try{for(y(B),d=n(l);d!==null&&(!(d.expirationTime>B)||N&&!Y());){var fe=d.callback;if(typeof fe=="function"){d.callback=null,h=d.priorityLevel;var ee=fe(d.expirationTime<=B);B=t.unstable_now(),typeof ee=="function"?d.callback=ee:d===n(l)&&i(l),y(B)}else i(l);d=n(l)}if(d!==null)var H=!0;else{var Z=n(u);Z!==null&&Q(E,Z.startTime-B),H=!1}return H}finally{d=null,h=k,p=!1}}var b=!1,R=null,P=-1,x=5,w=-1;function Y(){return!(t.unstable_now()-w<x)}function $(){if(R!==null){var N=t.unstable_now();w=N;var B=!0;try{B=R(!0,N)}finally{B?U():(b=!1,R=null)}}else b=!1}var U;if(typeof _=="function")U=function(){_($)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,j=G.port2;G.port1.onmessage=$,U=function(){j.postMessage(null)}}else U=function(){m($,0)};function te(N){R=N,b||(b=!0,U())}function Q(N,B){P=m(function(){N(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,te(S))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):x=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(h){case 1:case 2:case 3:var B=3;break;default:B=h}var k=h;h=B;try{return N()}finally{h=k}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,B){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var k=h;h=N;try{return B()}finally{h=k}},t.unstable_scheduleCallback=function(N,B,k){var fe=t.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?fe+k:fe):k=fe,N){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=k+ee,N={id:c++,callback:B,priorityLevel:N,startTime:k,expirationTime:ee,sortIndex:-1},k>fe?(N.sortIndex=k,e(u,N),n(l)===null&&N===n(u)&&(v?(f(P),P=-1):v=!0,Q(E,k-fe))):(N.sortIndex=ee,e(l,N),g||p||(g=!0,te(S))),N},t.unstable_shouldYield=Y,t.unstable_wrapCallback=function(N){var B=h;return function(){var k=h;h=B;try{return N.apply(this,arguments)}finally{h=k}}}})(Kv);(function(t){t.exports=Kv})(cS);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zv=we,_n=bf;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qv=new Set,jo={};function Zr(t,e){Ya(t,e),Ya(t+"Capture",e)}function Ya(t,e){for(jo[t]=e,t=0;t<e.length;t++)Qv.add(e[t])}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Af=Object.prototype.hasOwnProperty,fS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yp={},xp={};function dS(t){return Af.call(xp,t)?!0:Af.call(yp,t)?!1:fS.test(t)?xp[t]=!0:(yp[t]=!0,!1)}function hS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function pS(t,e,n,i){if(e===null||typeof e>"u"||hS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,i,r,a,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=a,this.removeEmptyString=o}var Ot={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ot[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ot[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ot[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ot[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ot[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ot[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ot[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ot[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ot[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var eh=/[\-:]([a-z])/g;function th(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(eh,th);Ot[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(eh,th);Ot[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(eh,th);Ot[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ot[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});Ot.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ot[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function nh(t,e,n,i){var r=Ot.hasOwnProperty(e)?Ot[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(pS(e,n,r,i)&&(n=null),i||r===null?dS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Li=Zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ns=Symbol.for("react.element"),xa=Symbol.for("react.portal"),Sa=Symbol.for("react.fragment"),ih=Symbol.for("react.strict_mode"),Rf=Symbol.for("react.profiler"),Jv=Symbol.for("react.provider"),e0=Symbol.for("react.context"),rh=Symbol.for("react.forward_ref"),Cf=Symbol.for("react.suspense"),Pf=Symbol.for("react.suspense_list"),ah=Symbol.for("react.memo"),Gi=Symbol.for("react.lazy"),t0=Symbol.for("react.offscreen"),Sp=Symbol.iterator;function po(t){return t===null||typeof t!="object"?null:(t=Sp&&t[Sp]||t["@@iterator"],typeof t=="function"?t:null)}var ct=Object.assign,cc;function Ao(t){if(cc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);cc=e&&e[1]||""}return`
`+cc+t}var fc=!1;function dc(t,e){if(!t||fc)return"";fc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),a=i.stack.split(`
`),o=r.length-1,s=a.length-1;1<=o&&0<=s&&r[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(r[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||r[o]!==a[s]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=s);break}}}finally{fc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ao(t):""}function mS(t){switch(t.tag){case 5:return Ao(t.type);case 16:return Ao("Lazy");case 13:return Ao("Suspense");case 19:return Ao("SuspenseList");case 0:case 2:case 15:return t=dc(t.type,!1),t;case 11:return t=dc(t.type.render,!1),t;case 1:return t=dc(t.type,!0),t;default:return""}}function Lf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Sa:return"Fragment";case xa:return"Portal";case Rf:return"Profiler";case ih:return"StrictMode";case Cf:return"Suspense";case Pf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case e0:return(t.displayName||"Context")+".Consumer";case Jv:return(t._context.displayName||"Context")+".Provider";case rh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ah:return e=t.displayName||null,e!==null?e:Lf(t.type)||"Memo";case Gi:e=t._payload,t=t._init;try{return Lf(t(e))}catch{}}return null}function gS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lf(e);case 8:return e===ih?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function n0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function vS(t){var e=n0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,a=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,a.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Us(t){t._valueTracker||(t._valueTracker=vS(t))}function i0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=n0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Df(t,e){var n=e.checked;return ct({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ep(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function r0(t,e){e=e.checked,e!=null&&nh(t,"checked",e,!1)}function Nf(t,e){r0(t,e);var n=lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Uf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Uf(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Mp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Uf(t,e,n){(e!=="number"||Yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ro=Array.isArray;function Oa(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function If(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return ct({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(Ro(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function a0(t,e){var n=lr(e.value),i=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Tp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function o0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Of(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?o0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Is,s0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Is=Is||document.createElement("div"),Is.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Is.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Yo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var No={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_S=["Webkit","ms","Moz","O"];Object.keys(No).forEach(function(t){_S.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),No[e]=No[t]})});function l0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||No.hasOwnProperty(t)&&No[t]?(""+e).trim():e+"px"}function u0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=l0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var yS=ct({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ff(t,e){if(e){if(yS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function kf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zf=null;function oh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Bf=null,Fa=null,ka=null;function bp(t){if(t=xs(t)){if(typeof Bf!="function")throw Error(re(280));var e=t.stateNode;e&&(e=Pu(e),Bf(t.stateNode,t.type,e))}}function c0(t){Fa?ka?ka.push(t):ka=[t]:Fa=t}function f0(){if(Fa){var t=Fa,e=ka;if(ka=Fa=null,bp(t),e)for(t=0;t<e.length;t++)bp(e[t])}}function d0(t,e){return t(e)}function h0(){}var hc=!1;function p0(t,e,n){if(hc)return t(e,n);hc=!0;try{return d0(t,e,n)}finally{hc=!1,(Fa!==null||ka!==null)&&(h0(),f0())}}function $o(t,e){var n=t.stateNode;if(n===null)return null;var i=Pu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var Hf=!1;if(wi)try{var mo={};Object.defineProperty(mo,"passive",{get:function(){Hf=!0}}),window.addEventListener("test",mo,mo),window.removeEventListener("test",mo,mo)}catch{Hf=!1}function xS(t,e,n,i,r,a,o,s,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Uo=!1,$l=null,ql=!1,Gf=null,SS={onError:function(t){Uo=!0,$l=t}};function ES(t,e,n,i,r,a,o,s,l){Uo=!1,$l=null,xS.apply(SS,arguments)}function MS(t,e,n,i,r,a,o,s,l){if(ES.apply(this,arguments),Uo){if(Uo){var u=$l;Uo=!1,$l=null}else throw Error(re(198));ql||(ql=!0,Gf=u)}}function Qr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function m0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ap(t){if(Qr(t)!==t)throw Error(re(188))}function wS(t){var e=t.alternate;if(!e){if(e=Qr(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var a=r.alternate;if(a===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===a.child){for(a=r.child;a;){if(a===n)return Ap(r),t;if(a===i)return Ap(r),e;a=a.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=a;else{for(var o=!1,s=r.child;s;){if(s===n){o=!0,n=r,i=a;break}if(s===i){o=!0,i=r,n=a;break}s=s.sibling}if(!o){for(s=a.child;s;){if(s===n){o=!0,n=a,i=r;break}if(s===i){o=!0,i=a,n=r;break}s=s.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function g0(t){return t=wS(t),t!==null?v0(t):null}function v0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=v0(t);if(e!==null)return e;t=t.sibling}return null}var _0=_n.unstable_scheduleCallback,Rp=_n.unstable_cancelCallback,TS=_n.unstable_shouldYield,bS=_n.unstable_requestPaint,vt=_n.unstable_now,AS=_n.unstable_getCurrentPriorityLevel,sh=_n.unstable_ImmediatePriority,y0=_n.unstable_UserBlockingPriority,Kl=_n.unstable_NormalPriority,RS=_n.unstable_LowPriority,x0=_n.unstable_IdlePriority,bu=null,ri=null;function CS(t){if(ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(bu,t,void 0,(t.current.flags&128)===128)}catch{}}var Yn=Math.clz32?Math.clz32:DS,PS=Math.log,LS=Math.LN2;function DS(t){return t>>>=0,t===0?32:31-(PS(t)/LS|0)|0}var Os=64,Fs=4194304;function Co(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Zl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,a=t.pingedLanes,o=n&268435455;if(o!==0){var s=o&~r;s!==0?i=Co(s):(a&=o,a!==0&&(i=Co(a)))}else o=n&~r,o!==0?i=Co(o):a!==0&&(i=Co(a));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,a=e&-e,r>=a||r===16&&(a&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Yn(e),r=1<<n,i|=t[n],e&=~r;return i}function NS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function US(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,a=t.pendingLanes;0<a;){var o=31-Yn(a),s=1<<o,l=r[o];l===-1?(!(s&n)||s&i)&&(r[o]=NS(s,e)):l<=e&&(t.expiredLanes|=s),a&=~s}}function Vf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function S0(){var t=Os;return Os<<=1,!(Os&4194240)&&(Os=64),t}function pc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function _s(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yn(e),t[e]=n}function IS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Yn(n),a=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~a}}function lh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Yn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var qe=0;function E0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var M0,uh,w0,T0,b0,Wf=!1,ks=[],Zi=null,Qi=null,Ji=null,qo=new Map,Ko=new Map,Wi=[],OS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cp(t,e){switch(t){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":qo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(e.pointerId)}}function go(t,e,n,i,r,a){return t===null||t.nativeEvent!==a?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:a,targetContainers:[r]},e!==null&&(e=xs(e),e!==null&&uh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function FS(t,e,n,i,r){switch(e){case"focusin":return Zi=go(Zi,t,e,n,i,r),!0;case"dragenter":return Qi=go(Qi,t,e,n,i,r),!0;case"mouseover":return Ji=go(Ji,t,e,n,i,r),!0;case"pointerover":var a=r.pointerId;return qo.set(a,go(qo.get(a)||null,t,e,n,i,r)),!0;case"gotpointercapture":return a=r.pointerId,Ko.set(a,go(Ko.get(a)||null,t,e,n,i,r)),!0}return!1}function A0(t){var e=Rr(t.target);if(e!==null){var n=Qr(e);if(n!==null){if(e=n.tag,e===13){if(e=m0(n),e!==null){t.blockedOn=e,b0(t.priority,function(){w0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);zf=i,n.target.dispatchEvent(i),zf=null}else return e=xs(n),e!==null&&uh(e),t.blockedOn=n,!1;e.shift()}return!0}function Pp(t,e,n){Pl(t)&&n.delete(e)}function kS(){Wf=!1,Zi!==null&&Pl(Zi)&&(Zi=null),Qi!==null&&Pl(Qi)&&(Qi=null),Ji!==null&&Pl(Ji)&&(Ji=null),qo.forEach(Pp),Ko.forEach(Pp)}function vo(t,e){t.blockedOn===e&&(t.blockedOn=null,Wf||(Wf=!0,_n.unstable_scheduleCallback(_n.unstable_NormalPriority,kS)))}function Zo(t){function e(r){return vo(r,t)}if(0<ks.length){vo(ks[0],t);for(var n=1;n<ks.length;n++){var i=ks[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Zi!==null&&vo(Zi,t),Qi!==null&&vo(Qi,t),Ji!==null&&vo(Ji,t),qo.forEach(e),Ko.forEach(e),n=0;n<Wi.length;n++)i=Wi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Wi.length&&(n=Wi[0],n.blockedOn===null);)A0(n),n.blockedOn===null&&Wi.shift()}var za=Li.ReactCurrentBatchConfig,Ql=!0;function zS(t,e,n,i){var r=qe,a=za.transition;za.transition=null;try{qe=1,ch(t,e,n,i)}finally{qe=r,za.transition=a}}function BS(t,e,n,i){var r=qe,a=za.transition;za.transition=null;try{qe=4,ch(t,e,n,i)}finally{qe=r,za.transition=a}}function ch(t,e,n,i){if(Ql){var r=Xf(t,e,n,i);if(r===null)wc(t,e,i,Jl,n),Cp(t,i);else if(FS(r,t,e,n,i))i.stopPropagation();else if(Cp(t,i),e&4&&-1<OS.indexOf(t)){for(;r!==null;){var a=xs(r);if(a!==null&&M0(a),a=Xf(t,e,n,i),a===null&&wc(t,e,i,Jl,n),a===r)break;r=a}r!==null&&i.stopPropagation()}else wc(t,e,i,null,n)}}var Jl=null;function Xf(t,e,n,i){if(Jl=null,t=oh(i),t=Rr(t),t!==null)if(e=Qr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=m0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Jl=t,null}function R0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(AS()){case sh:return 1;case y0:return 4;case Kl:case RS:return 16;case x0:return 536870912;default:return 16}default:return 16}}var ji=null,fh=null,Ll=null;function C0(){if(Ll)return Ll;var t,e=fh,n=e.length,i,r="value"in ji?ji.value:ji.textContent,a=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[a-i];i++);return Ll=r.slice(t,1<i?1-i:void 0)}function Dl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function zs(){return!0}function Lp(){return!1}function xn(t){function e(n,i,r,a,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=a,this.target=o,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(n=t[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?zs:Lp,this.isPropagationStopped=Lp,this}return ct(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=zs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=zs)},persist:function(){},isPersistent:zs}),e}var so={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dh=xn(so),ys=ct({},so,{view:0,detail:0}),HS=xn(ys),mc,gc,_o,Au=ct({},ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==_o&&(_o&&t.type==="mousemove"?(mc=t.screenX-_o.screenX,gc=t.screenY-_o.screenY):gc=mc=0,_o=t),mc)},movementY:function(t){return"movementY"in t?t.movementY:gc}}),Dp=xn(Au),GS=ct({},Au,{dataTransfer:0}),VS=xn(GS),WS=ct({},ys,{relatedTarget:0}),vc=xn(WS),XS=ct({},so,{animationName:0,elapsedTime:0,pseudoElement:0}),jS=xn(XS),YS=ct({},so,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$S=xn(YS),qS=ct({},so,{data:0}),Np=xn(qS),KS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ZS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},QS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function JS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=QS[t])?!!e[t]:!1}function hh(){return JS}var eE=ct({},ys,{key:function(t){if(t.key){var e=KS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Dl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ZS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hh,charCode:function(t){return t.type==="keypress"?Dl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Dl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tE=xn(eE),nE=ct({},Au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Up=xn(nE),iE=ct({},ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hh}),rE=xn(iE),aE=ct({},so,{propertyName:0,elapsedTime:0,pseudoElement:0}),oE=xn(aE),sE=ct({},Au,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lE=xn(sE),uE=[9,13,27,32],ph=wi&&"CompositionEvent"in window,Io=null;wi&&"documentMode"in document&&(Io=document.documentMode);var cE=wi&&"TextEvent"in window&&!Io,P0=wi&&(!ph||Io&&8<Io&&11>=Io),Ip=String.fromCharCode(32),Op=!1;function L0(t,e){switch(t){case"keyup":return uE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function D0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ea=!1;function fE(t,e){switch(t){case"compositionend":return D0(e);case"keypress":return e.which!==32?null:(Op=!0,Ip);case"textInput":return t=e.data,t===Ip&&Op?null:t;default:return null}}function dE(t,e){if(Ea)return t==="compositionend"||!ph&&L0(t,e)?(t=C0(),Ll=fh=ji=null,Ea=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return P0&&e.locale!=="ko"?null:e.data;default:return null}}var hE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!hE[t.type]:e==="textarea"}function N0(t,e,n,i){c0(i),e=eu(e,"onChange"),0<e.length&&(n=new dh("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Oo=null,Qo=null;function pE(t){W0(t,0)}function Ru(t){var e=Ta(t);if(i0(e))return t}function mE(t,e){if(t==="change")return e}var U0=!1;if(wi){var _c;if(wi){var yc="oninput"in document;if(!yc){var kp=document.createElement("div");kp.setAttribute("oninput","return;"),yc=typeof kp.oninput=="function"}_c=yc}else _c=!1;U0=_c&&(!document.documentMode||9<document.documentMode)}function zp(){Oo&&(Oo.detachEvent("onpropertychange",I0),Qo=Oo=null)}function I0(t){if(t.propertyName==="value"&&Ru(Qo)){var e=[];N0(e,Qo,t,oh(t)),p0(pE,e)}}function gE(t,e,n){t==="focusin"?(zp(),Oo=e,Qo=n,Oo.attachEvent("onpropertychange",I0)):t==="focusout"&&zp()}function vE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ru(Qo)}function _E(t,e){if(t==="click")return Ru(e)}function yE(t,e){if(t==="input"||t==="change")return Ru(e)}function xE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qn=typeof Object.is=="function"?Object.is:xE;function Jo(t,e){if(qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Af.call(e,r)||!qn(t[r],e[r]))return!1}return!0}function Bp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hp(t,e){var n=Bp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Bp(n)}}function O0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?O0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function F0(){for(var t=window,e=Yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Yl(t.document)}return e}function mh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function SE(t){var e=F0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&O0(n.ownerDocument.documentElement,n)){if(i!==null&&mh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,a=Math.min(i.start,r);i=i.end===void 0?a:Math.min(i.end,r),!t.extend&&a>i&&(r=i,i=a,a=r),r=Hp(n,a);var o=Hp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),a>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var EE=wi&&"documentMode"in document&&11>=document.documentMode,Ma=null,jf=null,Fo=null,Yf=!1;function Gp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yf||Ma==null||Ma!==Yl(i)||(i=Ma,"selectionStart"in i&&mh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Fo&&Jo(Fo,i)||(Fo=i,i=eu(jf,"onSelect"),0<i.length&&(e=new dh("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ma)))}function Bs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var wa={animationend:Bs("Animation","AnimationEnd"),animationiteration:Bs("Animation","AnimationIteration"),animationstart:Bs("Animation","AnimationStart"),transitionend:Bs("Transition","TransitionEnd")},xc={},k0={};wi&&(k0=document.createElement("div").style,"AnimationEvent"in window||(delete wa.animationend.animation,delete wa.animationiteration.animation,delete wa.animationstart.animation),"TransitionEvent"in window||delete wa.transitionend.transition);function Cu(t){if(xc[t])return xc[t];if(!wa[t])return t;var e=wa[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in k0)return xc[t]=e[n];return t}var z0=Cu("animationend"),B0=Cu("animationiteration"),H0=Cu("animationstart"),G0=Cu("transitionend"),V0=new Map,Vp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(t,e){V0.set(t,e),Zr(e,[t])}for(var Sc=0;Sc<Vp.length;Sc++){var Ec=Vp[Sc],ME=Ec.toLowerCase(),wE=Ec[0].toUpperCase()+Ec.slice(1);pr(ME,"on"+wE)}pr(z0,"onAnimationEnd");pr(B0,"onAnimationIteration");pr(H0,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(G0,"onTransitionEnd");Ya("onMouseEnter",["mouseout","mouseover"]);Ya("onMouseLeave",["mouseout","mouseover"]);Ya("onPointerEnter",["pointerout","pointerover"]);Ya("onPointerLeave",["pointerout","pointerover"]);Zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TE=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function Wp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,MS(i,e,void 0,t),t.currentTarget=null}function W0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var a=void 0;if(e)for(var o=i.length-1;0<=o;o--){var s=i[o],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&r.isPropagationStopped())break e;Wp(r,s,u),a=l}else for(o=0;o<i.length;o++){if(s=i[o],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&r.isPropagationStopped())break e;Wp(r,s,u),a=l}}}if(ql)throw t=Gf,ql=!1,Gf=null,t}function nt(t,e){var n=e[Qf];n===void 0&&(n=e[Qf]=new Set);var i=t+"__bubble";n.has(i)||(X0(e,t,2,!1),n.add(i))}function Mc(t,e,n){var i=0;e&&(i|=4),X0(n,t,i,e)}var Hs="_reactListening"+Math.random().toString(36).slice(2);function es(t){if(!t[Hs]){t[Hs]=!0,Qv.forEach(function(n){n!=="selectionchange"&&(TE.has(n)||Mc(n,!1,t),Mc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Hs]||(e[Hs]=!0,Mc("selectionchange",!1,e))}}function X0(t,e,n,i){switch(R0(e)){case 1:var r=zS;break;case 4:r=BS;break;default:r=ch}n=r.bind(null,e,n,t),r=void 0,!Hf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function wc(t,e,n,i,r){var a=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var s=i.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;s!==null;){if(o=Rr(s),o===null)return;if(l=o.tag,l===5||l===6){i=a=o;continue e}s=s.parentNode}}i=i.return}p0(function(){var u=a,c=oh(n),d=[];e:{var h=V0.get(t);if(h!==void 0){var p=dh,g=t;switch(t){case"keypress":if(Dl(n)===0)break e;case"keydown":case"keyup":p=tE;break;case"focusin":g="focus",p=vc;break;case"focusout":g="blur",p=vc;break;case"beforeblur":case"afterblur":p=vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Dp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=VS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=rE;break;case z0:case B0:case H0:p=jS;break;case G0:p=oE;break;case"scroll":p=HS;break;case"wheel":p=lE;break;case"copy":case"cut":case"paste":p=$S;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Up}var v=(e&4)!==0,m=!v&&t==="scroll",f=v?h!==null?h+"Capture":null:h;v=[];for(var _=u,y;_!==null;){y=_;var E=y.stateNode;if(y.tag===5&&E!==null&&(y=E,f!==null&&(E=$o(_,f),E!=null&&v.push(ts(_,E,y)))),m)break;_=_.return}0<v.length&&(h=new p(h,g,null,n,c),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==zf&&(g=n.relatedTarget||n.fromElement)&&(Rr(g)||g[Ti]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Rr(g):null,g!==null&&(m=Qr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(v=Dp,E="onMouseLeave",f="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(v=Up,E="onPointerLeave",f="onPointerEnter",_="pointer"),m=p==null?h:Ta(p),y=g==null?h:Ta(g),h=new v(E,_+"leave",p,n,c),h.target=m,h.relatedTarget=y,E=null,Rr(c)===u&&(v=new v(f,_+"enter",g,n,c),v.target=y,v.relatedTarget=m,E=v),m=E,p&&g)t:{for(v=p,f=g,_=0,y=v;y;y=ea(y))_++;for(y=0,E=f;E;E=ea(E))y++;for(;0<_-y;)v=ea(v),_--;for(;0<y-_;)f=ea(f),y--;for(;_--;){if(v===f||f!==null&&v===f.alternate)break t;v=ea(v),f=ea(f)}v=null}else v=null;p!==null&&Xp(d,h,p,v,!1),g!==null&&m!==null&&Xp(d,m,g,v,!0)}}e:{if(h=u?Ta(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var S=mE;else if(Fp(h))if(U0)S=yE;else{S=vE;var b=gE}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=_E);if(S&&(S=S(t,u))){N0(d,S,n,c);break e}b&&b(t,h,u),t==="focusout"&&(b=h._wrapperState)&&b.controlled&&h.type==="number"&&Uf(h,"number",h.value)}switch(b=u?Ta(u):window,t){case"focusin":(Fp(b)||b.contentEditable==="true")&&(Ma=b,jf=u,Fo=null);break;case"focusout":Fo=jf=Ma=null;break;case"mousedown":Yf=!0;break;case"contextmenu":case"mouseup":case"dragend":Yf=!1,Gp(d,n,c);break;case"selectionchange":if(EE)break;case"keydown":case"keyup":Gp(d,n,c)}var R;if(ph)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ea?L0(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(P0&&n.locale!=="ko"&&(Ea||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ea&&(R=C0()):(ji=c,fh="value"in ji?ji.value:ji.textContent,Ea=!0)),b=eu(u,P),0<b.length&&(P=new Np(P,t,null,n,c),d.push({event:P,listeners:b}),R?P.data=R:(R=D0(n),R!==null&&(P.data=R)))),(R=cE?fE(t,n):dE(t,n))&&(u=eu(u,"onBeforeInput"),0<u.length&&(c=new Np("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=R))}W0(d,e)})}function ts(t,e,n){return{instance:t,listener:e,currentTarget:n}}function eu(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,a=r.stateNode;r.tag===5&&a!==null&&(r=a,a=$o(t,n),a!=null&&i.unshift(ts(t,a,r)),a=$o(t,e),a!=null&&i.push(ts(t,a,r))),t=t.return}return i}function ea(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xp(t,e,n,i,r){for(var a=e._reactName,o=[];n!==null&&n!==i;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===i)break;s.tag===5&&u!==null&&(s=u,r?(l=$o(n,a),l!=null&&o.unshift(ts(n,l,s))):r||(l=$o(n,a),l!=null&&o.push(ts(n,l,s)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var bE=/\r\n?/g,AE=/\u0000|\uFFFD/g;function jp(t){return(typeof t=="string"?t:""+t).replace(bE,`
`).replace(AE,"")}function Gs(t,e,n){if(e=jp(e),jp(t)!==e&&n)throw Error(re(425))}function tu(){}var $f=null,qf=null;function Kf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Zf=typeof setTimeout=="function"?setTimeout:void 0,RE=typeof clearTimeout=="function"?clearTimeout:void 0,Yp=typeof Promise=="function"?Promise:void 0,CE=typeof queueMicrotask=="function"?queueMicrotask:typeof Yp<"u"?function(t){return Yp.resolve(null).then(t).catch(PE)}:Zf;function PE(t){setTimeout(function(){throw t})}function Tc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Zo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Zo(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $p(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var lo=Math.random().toString(36).slice(2),ti="__reactFiber$"+lo,ns="__reactProps$"+lo,Ti="__reactContainer$"+lo,Qf="__reactEvents$"+lo,LE="__reactListeners$"+lo,DE="__reactHandles$"+lo;function Rr(t){var e=t[ti];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ti]||n[ti]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$p(t);t!==null;){if(n=t[ti])return n;t=$p(t)}return e}t=n,n=t.parentNode}return null}function xs(t){return t=t[ti]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ta(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function Pu(t){return t[ns]||null}var Jf=[],ba=-1;function mr(t){return{current:t}}function rt(t){0>ba||(t.current=Jf[ba],Jf[ba]=null,ba--)}function tt(t,e){ba++,Jf[ba]=t.current,t.current=e}var ur={},Wt=mr(ur),rn=mr(!1),Br=ur;function $a(t,e){var n=t.type.contextTypes;if(!n)return ur;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},a;for(a in n)r[a]=e[a];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function nu(){rt(rn),rt(Wt)}function qp(t,e,n){if(Wt.current!==ur)throw Error(re(168));tt(Wt,e),tt(rn,n)}function j0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,gS(t)||"Unknown",r));return ct({},n,i)}function iu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,Br=Wt.current,tt(Wt,t),tt(rn,rn.current),!0}function Kp(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=j0(t,e,Br),i.__reactInternalMemoizedMergedChildContext=t,rt(rn),rt(Wt),tt(Wt,t)):rt(rn),tt(rn,n)}var vi=null,Lu=!1,bc=!1;function Y0(t){vi===null?vi=[t]:vi.push(t)}function NE(t){Lu=!0,Y0(t)}function gr(){if(!bc&&vi!==null){bc=!0;var t=0,e=qe;try{var n=vi;for(qe=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}vi=null,Lu=!1}catch(r){throw vi!==null&&(vi=vi.slice(t+1)),_0(sh,gr),r}finally{qe=e,bc=!1}}return null}var Aa=[],Ra=0,ru=null,au=0,wn=[],Tn=0,Hr=null,yi=1,xi="";function Mr(t,e){Aa[Ra++]=au,Aa[Ra++]=ru,ru=t,au=e}function $0(t,e,n){wn[Tn++]=yi,wn[Tn++]=xi,wn[Tn++]=Hr,Hr=t;var i=yi;t=xi;var r=32-Yn(i)-1;i&=~(1<<r),n+=1;var a=32-Yn(e)+r;if(30<a){var o=r-r%5;a=(i&(1<<o)-1).toString(32),i>>=o,r-=o,yi=1<<32-Yn(e)+r|n<<r|i,xi=a+t}else yi=1<<a|n<<r|i,xi=t}function gh(t){t.return!==null&&(Mr(t,1),$0(t,1,0))}function vh(t){for(;t===ru;)ru=Aa[--Ra],Aa[Ra]=null,au=Aa[--Ra],Aa[Ra]=null;for(;t===Hr;)Hr=wn[--Tn],wn[Tn]=null,xi=wn[--Tn],wn[Tn]=null,yi=wn[--Tn],wn[Tn]=null}var gn=null,mn=null,ot=!1,Hn=null;function q0(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Zp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,mn=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Hr!==null?{id:yi,overflow:xi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,mn=null,!0):!1;default:return!1}}function ed(t){return(t.mode&1)!==0&&(t.flags&128)===0}function td(t){if(ot){var e=mn;if(e){var n=e;if(!Zp(t,e)){if(ed(t))throw Error(re(418));e=er(n.nextSibling);var i=gn;e&&Zp(t,e)?q0(i,n):(t.flags=t.flags&-4097|2,ot=!1,gn=t)}}else{if(ed(t))throw Error(re(418));t.flags=t.flags&-4097|2,ot=!1,gn=t}}}function Qp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function Vs(t){if(t!==gn)return!1;if(!ot)return Qp(t),ot=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Kf(t.type,t.memoizedProps)),e&&(e=mn)){if(ed(t))throw K0(),Error(re(418));for(;e;)q0(t,e),e=er(e.nextSibling)}if(Qp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=gn?er(t.stateNode.nextSibling):null;return!0}function K0(){for(var t=mn;t;)t=er(t.nextSibling)}function qa(){mn=gn=null,ot=!1}function _h(t){Hn===null?Hn=[t]:Hn.push(t)}var UE=Li.ReactCurrentBatchConfig;function zn(t,e){if(t&&t.defaultProps){e=ct({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ou=mr(null),su=null,Ca=null,yh=null;function xh(){yh=Ca=su=null}function Sh(t){var e=ou.current;rt(ou),t._currentValue=e}function nd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ba(t,e){su=t,yh=Ca=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(nn=!0),t.firstContext=null)}function Ln(t){var e=t._currentValue;if(yh!==t)if(t={context:t,memoizedValue:e,next:null},Ca===null){if(su===null)throw Error(re(308));Ca=t,su.dependencies={lanes:0,firstContext:t}}else Ca=Ca.next=t;return e}var Cr=null;function Eh(t){Cr===null?Cr=[t]:Cr.push(t)}function Z0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Eh(e)):(n.next=r.next,r.next=n),e.interleaved=n,bi(t,i)}function bi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vi=!1;function Mh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Q0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Si(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,bi(t,n)}return r=i.interleaved,r===null?(e.next=e,Eh(i)):(e.next=r.next,r.next=e),i.interleaved=e,bi(t,n)}function Nl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,lh(t,n)}}function Jp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?r=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?r=a=e:a=a.next=e}else r=a=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:a,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function lu(t,e,n,i){var r=t.updateQueue;Vi=!1;var a=r.firstBaseUpdate,o=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var l=s,u=l.next;l.next=null,o===null?a=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==o&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var d=r.baseState;o=0,c=u=l=null,s=a;do{var h=s.lane,p=s.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=t,v=s;switch(h=e,p=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(p,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,h=typeof g=="function"?g.call(p,d,h):g,h==null)break e;d=ct({},d,h);break e;case 2:Vi=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[s]:h.push(s))}else p={eventTime:p,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=h;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;h=s,s=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else a===null&&(r.shared.lanes=0);Vr|=o,t.lanes=o,t.memoizedState=d}}function em(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var J0=new Zv.Component().refs;function id(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:ct({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Du={isMounted:function(t){return(t=t._reactInternals)?Qr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=ir(t),a=Si(i,r);a.payload=e,n!=null&&(a.callback=n),e=tr(t,a,r),e!==null&&($n(e,t,r,i),Nl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Qt(),r=ir(t),a=Si(i,r);a.tag=1,a.payload=e,n!=null&&(a.callback=n),e=tr(t,a,r),e!==null&&($n(e,t,r,i),Nl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Qt(),i=ir(t),r=Si(n,i);r.tag=2,e!=null&&(r.callback=e),e=tr(t,r,i),e!==null&&($n(e,t,i,n),Nl(e,t,i))}};function tm(t,e,n,i,r,a,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,a,o):e.prototype&&e.prototype.isPureReactComponent?!Jo(n,i)||!Jo(r,a):!0}function e_(t,e,n){var i=!1,r=ur,a=e.contextType;return typeof a=="object"&&a!==null?a=Ln(a):(r=an(e)?Br:Wt.current,i=e.contextTypes,a=(i=i!=null)?$a(t,r):ur),e=new e(n,a),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Du,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=a),e}function nm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Du.enqueueReplaceState(e,e.state,null)}function rd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs=J0,Mh(t);var a=e.contextType;typeof a=="object"&&a!==null?r.context=Ln(a):(a=an(e)?Br:Wt.current,r.context=$a(t,a)),r.state=t.memoizedState,a=e.getDerivedStateFromProps,typeof a=="function"&&(id(t,e,a,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Du.enqueueReplaceState(r,r.state,null),lu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function yo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,a=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===a?e.ref:(e=function(o){var s=r.refs;s===J0&&(s=r.refs={}),o===null?delete s[a]:s[a]=o},e._stringRef=a,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function Ws(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function im(t){var e=t._init;return e(t._payload)}function t_(t){function e(f,_){if(t){var y=f.deletions;y===null?(f.deletions=[_],f.flags|=16):y.push(_)}}function n(f,_){if(!t)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=rr(f,_),f.index=0,f.sibling=null,f}function a(f,_,y){return f.index=y,t?(y=f.alternate,y!==null?(y=y.index,y<_?(f.flags|=2,_):y):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function s(f,_,y,E){return _===null||_.tag!==6?(_=Nc(y,f.mode,E),_.return=f,_):(_=r(_,y),_.return=f,_)}function l(f,_,y,E){var S=y.type;return S===Sa?c(f,_,y.props.children,E,y.key):_!==null&&(_.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Gi&&im(S)===_.type)?(E=r(_,y.props),E.ref=yo(f,_,y),E.return=f,E):(E=zl(y.type,y.key,y.props,null,f.mode,E),E.ref=yo(f,_,y),E.return=f,E)}function u(f,_,y,E){return _===null||_.tag!==4||_.stateNode.containerInfo!==y.containerInfo||_.stateNode.implementation!==y.implementation?(_=Uc(y,f.mode,E),_.return=f,_):(_=r(_,y.children||[]),_.return=f,_)}function c(f,_,y,E,S){return _===null||_.tag!==7?(_=Or(y,f.mode,E,S),_.return=f,_):(_=r(_,y),_.return=f,_)}function d(f,_,y){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Nc(""+_,f.mode,y),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ns:return y=zl(_.type,_.key,_.props,null,f.mode,y),y.ref=yo(f,null,_),y.return=f,y;case xa:return _=Uc(_,f.mode,y),_.return=f,_;case Gi:var E=_._init;return d(f,E(_._payload),y)}if(Ro(_)||po(_))return _=Or(_,f.mode,y,null),_.return=f,_;Ws(f,_)}return null}function h(f,_,y,E){var S=_!==null?_.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return S!==null?null:s(f,_,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ns:return y.key===S?l(f,_,y,E):null;case xa:return y.key===S?u(f,_,y,E):null;case Gi:return S=y._init,h(f,_,S(y._payload),E)}if(Ro(y)||po(y))return S!==null?null:c(f,_,y,E,null);Ws(f,y)}return null}function p(f,_,y,E,S){if(typeof E=="string"&&E!==""||typeof E=="number")return f=f.get(y)||null,s(_,f,""+E,S);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Ns:return f=f.get(E.key===null?y:E.key)||null,l(_,f,E,S);case xa:return f=f.get(E.key===null?y:E.key)||null,u(_,f,E,S);case Gi:var b=E._init;return p(f,_,y,b(E._payload),S)}if(Ro(E)||po(E))return f=f.get(y)||null,c(_,f,E,S,null);Ws(_,E)}return null}function g(f,_,y,E){for(var S=null,b=null,R=_,P=_=0,x=null;R!==null&&P<y.length;P++){R.index>P?(x=R,R=null):x=R.sibling;var w=h(f,R,y[P],E);if(w===null){R===null&&(R=x);break}t&&R&&w.alternate===null&&e(f,R),_=a(w,_,P),b===null?S=w:b.sibling=w,b=w,R=x}if(P===y.length)return n(f,R),ot&&Mr(f,P),S;if(R===null){for(;P<y.length;P++)R=d(f,y[P],E),R!==null&&(_=a(R,_,P),b===null?S=R:b.sibling=R,b=R);return ot&&Mr(f,P),S}for(R=i(f,R);P<y.length;P++)x=p(R,f,P,y[P],E),x!==null&&(t&&x.alternate!==null&&R.delete(x.key===null?P:x.key),_=a(x,_,P),b===null?S=x:b.sibling=x,b=x);return t&&R.forEach(function(Y){return e(f,Y)}),ot&&Mr(f,P),S}function v(f,_,y,E){var S=po(y);if(typeof S!="function")throw Error(re(150));if(y=S.call(y),y==null)throw Error(re(151));for(var b=S=null,R=_,P=_=0,x=null,w=y.next();R!==null&&!w.done;P++,w=y.next()){R.index>P?(x=R,R=null):x=R.sibling;var Y=h(f,R,w.value,E);if(Y===null){R===null&&(R=x);break}t&&R&&Y.alternate===null&&e(f,R),_=a(Y,_,P),b===null?S=Y:b.sibling=Y,b=Y,R=x}if(w.done)return n(f,R),ot&&Mr(f,P),S;if(R===null){for(;!w.done;P++,w=y.next())w=d(f,w.value,E),w!==null&&(_=a(w,_,P),b===null?S=w:b.sibling=w,b=w);return ot&&Mr(f,P),S}for(R=i(f,R);!w.done;P++,w=y.next())w=p(R,f,P,w.value,E),w!==null&&(t&&w.alternate!==null&&R.delete(w.key===null?P:w.key),_=a(w,_,P),b===null?S=w:b.sibling=w,b=w);return t&&R.forEach(function($){return e(f,$)}),ot&&Mr(f,P),S}function m(f,_,y,E){if(typeof y=="object"&&y!==null&&y.type===Sa&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ns:e:{for(var S=y.key,b=_;b!==null;){if(b.key===S){if(S=y.type,S===Sa){if(b.tag===7){n(f,b.sibling),_=r(b,y.props.children),_.return=f,f=_;break e}}else if(b.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Gi&&im(S)===b.type){n(f,b.sibling),_=r(b,y.props),_.ref=yo(f,b,y),_.return=f,f=_;break e}n(f,b);break}else e(f,b);b=b.sibling}y.type===Sa?(_=Or(y.props.children,f.mode,E,y.key),_.return=f,f=_):(E=zl(y.type,y.key,y.props,null,f.mode,E),E.ref=yo(f,_,y),E.return=f,f=E)}return o(f);case xa:e:{for(b=y.key;_!==null;){if(_.key===b)if(_.tag===4&&_.stateNode.containerInfo===y.containerInfo&&_.stateNode.implementation===y.implementation){n(f,_.sibling),_=r(_,y.children||[]),_.return=f,f=_;break e}else{n(f,_);break}else e(f,_);_=_.sibling}_=Uc(y,f.mode,E),_.return=f,f=_}return o(f);case Gi:return b=y._init,m(f,_,b(y._payload),E)}if(Ro(y))return g(f,_,y,E);if(po(y))return v(f,_,y,E);Ws(f,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,_!==null&&_.tag===6?(n(f,_.sibling),_=r(_,y),_.return=f,f=_):(n(f,_),_=Nc(y,f.mode,E),_.return=f,f=_),o(f)):n(f,_)}return m}var Ka=t_(!0),n_=t_(!1),Ss={},ai=mr(Ss),is=mr(Ss),rs=mr(Ss);function Pr(t){if(t===Ss)throw Error(re(174));return t}function wh(t,e){switch(tt(rs,e),tt(is,t),tt(ai,Ss),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Of(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Of(e,t)}rt(ai),tt(ai,e)}function Za(){rt(ai),rt(is),rt(rs)}function i_(t){Pr(rs.current);var e=Pr(ai.current),n=Of(e,t.type);e!==n&&(tt(is,t),tt(ai,n))}function Th(t){is.current===t&&(rt(ai),rt(is))}var lt=mr(0);function uu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Ac=[];function bh(){for(var t=0;t<Ac.length;t++)Ac[t]._workInProgressVersionPrimary=null;Ac.length=0}var Ul=Li.ReactCurrentDispatcher,Rc=Li.ReactCurrentBatchConfig,Gr=0,ut=null,Et=null,Pt=null,cu=!1,ko=!1,as=0,IE=0;function zt(){throw Error(re(321))}function Ah(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!qn(t[n],e[n]))return!1;return!0}function Rh(t,e,n,i,r,a){if(Gr=a,ut=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ul.current=t===null||t.memoizedState===null?zE:BE,t=n(i,r),ko){a=0;do{if(ko=!1,as=0,25<=a)throw Error(re(301));a+=1,Pt=Et=null,e.updateQueue=null,Ul.current=HE,t=n(i,r)}while(ko)}if(Ul.current=fu,e=Et!==null&&Et.next!==null,Gr=0,Pt=Et=ut=null,cu=!1,e)throw Error(re(300));return t}function Ch(){var t=as!==0;return as=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Pt===null?ut.memoizedState=Pt=t:Pt=Pt.next=t,Pt}function Dn(){if(Et===null){var t=ut.alternate;t=t!==null?t.memoizedState:null}else t=Et.next;var e=Pt===null?ut.memoizedState:Pt.next;if(e!==null)Pt=e,Et=t;else{if(t===null)throw Error(re(310));Et=t,t={memoizedState:Et.memoizedState,baseState:Et.baseState,baseQueue:Et.baseQueue,queue:Et.queue,next:null},Pt===null?ut.memoizedState=Pt=t:Pt=Pt.next=t}return Pt}function os(t,e){return typeof e=="function"?e(t):e}function Cc(t){var e=Dn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=Et,r=i.baseQueue,a=n.pending;if(a!==null){if(r!==null){var o=r.next;r.next=a.next,a.next=o}i.baseQueue=r=a,n.pending=null}if(r!==null){a=r.next,i=i.baseState;var s=o=null,l=null,u=a;do{var c=u.lane;if((Gr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,o=i):l=l.next=d,ut.lanes|=c,Vr|=c}u=u.next}while(u!==null&&u!==a);l===null?o=i:l.next=s,qn(i,e.memoizedState)||(nn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do a=r.lane,ut.lanes|=a,Vr|=a,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pc(t){var e=Dn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,a=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do a=t(a,o.action),o=o.next;while(o!==r);qn(a,e.memoizedState)||(nn=!0),e.memoizedState=a,e.baseQueue===null&&(e.baseState=a),n.lastRenderedState=a}return[a,i]}function r_(){}function a_(t,e){var n=ut,i=Dn(),r=e(),a=!qn(i.memoizedState,r);if(a&&(i.memoizedState=r,nn=!0),i=i.queue,Ph(l_.bind(null,n,i,t),[t]),i.getSnapshot!==e||a||Pt!==null&&Pt.memoizedState.tag&1){if(n.flags|=2048,ss(9,s_.bind(null,n,i,r,e),void 0,null),Lt===null)throw Error(re(349));Gr&30||o_(n,e,r)}return r}function o_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function s_(t,e,n,i){e.value=n,e.getSnapshot=i,u_(e)&&c_(t)}function l_(t,e,n){return n(function(){u_(e)&&c_(t)})}function u_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qn(t,n)}catch{return!0}}function c_(t){var e=bi(t,1);e!==null&&$n(e,t,1,-1)}function rm(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:os,lastRenderedState:t},e.queue=t,t=t.dispatch=kE.bind(null,ut,t),[e.memoizedState,t]}function ss(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=ut.updateQueue,e===null?(e={lastEffect:null,stores:null},ut.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function f_(){return Dn().memoizedState}function Il(t,e,n,i){var r=Jn();ut.flags|=t,r.memoizedState=ss(1|e,n,void 0,i===void 0?null:i)}function Nu(t,e,n,i){var r=Dn();i=i===void 0?null:i;var a=void 0;if(Et!==null){var o=Et.memoizedState;if(a=o.destroy,i!==null&&Ah(i,o.deps)){r.memoizedState=ss(e,n,a,i);return}}ut.flags|=t,r.memoizedState=ss(1|e,n,a,i)}function am(t,e){return Il(8390656,8,t,e)}function Ph(t,e){return Nu(2048,8,t,e)}function d_(t,e){return Nu(4,2,t,e)}function h_(t,e){return Nu(4,4,t,e)}function p_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function m_(t,e,n){return n=n!=null?n.concat([t]):null,Nu(4,4,p_.bind(null,e,t),n)}function Lh(){}function g_(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ah(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function v_(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ah(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function __(t,e,n){return Gr&21?(qn(n,e)||(n=S0(),ut.lanes|=n,Vr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,nn=!0),t.memoizedState=n)}function OE(t,e){var n=qe;qe=n!==0&&4>n?n:4,t(!0);var i=Rc.transition;Rc.transition={};try{t(!1),e()}finally{qe=n,Rc.transition=i}}function y_(){return Dn().memoizedState}function FE(t,e,n){var i=ir(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},x_(t))S_(e,n);else if(n=Z0(t,e,n,i),n!==null){var r=Qt();$n(n,t,i,r),E_(n,e,i)}}function kE(t,e,n){var i=ir(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(x_(t))S_(e,r);else{var a=t.alternate;if(t.lanes===0&&(a===null||a.lanes===0)&&(a=e.lastRenderedReducer,a!==null))try{var o=e.lastRenderedState,s=a(o,n);if(r.hasEagerState=!0,r.eagerState=s,qn(s,o)){var l=e.interleaved;l===null?(r.next=r,Eh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Z0(t,e,r,i),n!==null&&(r=Qt(),$n(n,t,i,r),E_(n,e,i))}}function x_(t){var e=t.alternate;return t===ut||e!==null&&e===ut}function S_(t,e){ko=cu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function E_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,lh(t,n)}}var fu={readContext:Ln,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useInsertionEffect:zt,useLayoutEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useMutableSource:zt,useSyncExternalStore:zt,useId:zt,unstable_isNewReconciler:!1},zE={readContext:Ln,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:Ln,useEffect:am,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Il(4194308,4,p_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Il(4194308,4,t,e)},useInsertionEffect:function(t,e){return Il(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=FE.bind(null,ut,t),[i.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:rm,useDebugValue:Lh,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=rm(!1),e=t[0];return t=OE.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=ut,r=Jn();if(ot){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Lt===null)throw Error(re(349));Gr&30||o_(i,e,n)}r.memoizedState=n;var a={value:n,getSnapshot:e};return r.queue=a,am(l_.bind(null,i,a,t),[t]),i.flags|=2048,ss(9,s_.bind(null,i,a,n,e),void 0,null),n},useId:function(){var t=Jn(),e=Lt.identifierPrefix;if(ot){var n=xi,i=yi;n=(i&~(1<<32-Yn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=as++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=IE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},BE={readContext:Ln,useCallback:g_,useContext:Ln,useEffect:Ph,useImperativeHandle:m_,useInsertionEffect:d_,useLayoutEffect:h_,useMemo:v_,useReducer:Cc,useRef:f_,useState:function(){return Cc(os)},useDebugValue:Lh,useDeferredValue:function(t){var e=Dn();return __(e,Et.memoizedState,t)},useTransition:function(){var t=Cc(os)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:r_,useSyncExternalStore:a_,useId:y_,unstable_isNewReconciler:!1},HE={readContext:Ln,useCallback:g_,useContext:Ln,useEffect:Ph,useImperativeHandle:m_,useInsertionEffect:d_,useLayoutEffect:h_,useMemo:v_,useReducer:Pc,useRef:f_,useState:function(){return Pc(os)},useDebugValue:Lh,useDeferredValue:function(t){var e=Dn();return Et===null?e.memoizedState=t:__(e,Et.memoizedState,t)},useTransition:function(){var t=Pc(os)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:r_,useSyncExternalStore:a_,useId:y_,unstable_isNewReconciler:!1};function Qa(t,e){try{var n="",i=e;do n+=mS(i),i=i.return;while(i);var r=n}catch(a){r=`
Error generating stack: `+a.message+`
`+a.stack}return{value:t,source:e,stack:r,digest:null}}function Lc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ad(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var GE=typeof WeakMap=="function"?WeakMap:Map;function M_(t,e,n){n=Si(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){hu||(hu=!0,md=i),ad(t,e)},n}function w_(t,e,n){n=Si(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ad(t,e)}}var a=t.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){ad(t,e),typeof i!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function om(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new GE;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=nM.bind(null,t,e,n),e.then(t,t))}function sm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Si(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t)}var VE=Li.ReactCurrentOwner,nn=!1;function qt(t,e,n,i){e.child=t===null?n_(e,null,n,i):Ka(e,t.child,n,i)}function um(t,e,n,i,r){n=n.render;var a=e.ref;return Ba(e,r),i=Rh(t,e,n,i,a,r),n=Ch(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ai(t,e,r)):(ot&&n&&gh(e),e.flags|=1,qt(t,e,i,r),e.child)}function cm(t,e,n,i,r){if(t===null){var a=n.type;return typeof a=="function"&&!zh(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=a,T_(t,e,a,i,r)):(t=zl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(a=t.child,!(t.lanes&r)){var o=a.memoizedProps;if(n=n.compare,n=n!==null?n:Jo,n(o,i)&&t.ref===e.ref)return Ai(t,e,r)}return e.flags|=1,t=rr(a,i),t.ref=e.ref,t.return=e,e.child=t}function T_(t,e,n,i,r){if(t!==null){var a=t.memoizedProps;if(Jo(a,i)&&t.ref===e.ref)if(nn=!1,e.pendingProps=i=a,(t.lanes&r)!==0)t.flags&131072&&(nn=!0);else return e.lanes=t.lanes,Ai(t,e,r)}return od(t,e,n,i,r)}function b_(t,e,n){var i=e.pendingProps,r=i.children,a=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(La,pn),pn|=n;else{if(!(n&1073741824))return t=a!==null?a.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,tt(La,pn),pn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=a!==null?a.baseLanes:n,tt(La,pn),pn|=i}else a!==null?(i=a.baseLanes|n,e.memoizedState=null):i=n,tt(La,pn),pn|=i;return qt(t,e,r,n),e.child}function A_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function od(t,e,n,i,r){var a=an(n)?Br:Wt.current;return a=$a(e,a),Ba(e,r),n=Rh(t,e,n,i,a,r),i=Ch(),t!==null&&!nn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ai(t,e,r)):(ot&&i&&gh(e),e.flags|=1,qt(t,e,n,r),e.child)}function fm(t,e,n,i,r){if(an(n)){var a=!0;iu(e)}else a=!1;if(Ba(e,r),e.stateNode===null)Ol(t,e),e_(e,n,i),rd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,s=e.memoizedProps;o.props=s;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ln(u):(u=an(n)?Br:Wt.current,u=$a(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==i||l!==u)&&nm(e,o,i,u),Vi=!1;var h=e.memoizedState;o.state=h,lu(e,i,o,r),l=e.memoizedState,s!==i||h!==l||rn.current||Vi?(typeof c=="function"&&(id(e,n,c,i),l=e.memoizedState),(s=Vi||tm(e,n,s,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=s):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Q0(t,e),s=e.memoizedProps,u=e.type===e.elementType?s:zn(e.type,s),o.props=u,d=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ln(l):(l=an(n)?Br:Wt.current,l=$a(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(s!==d||h!==l)&&nm(e,o,i,l),Vi=!1,h=e.memoizedState,o.state=h,lu(e,i,o,r);var g=e.memoizedState;s!==d||h!==g||rn.current||Vi?(typeof p=="function"&&(id(e,n,p,i),g=e.memoizedState),(u=Vi||tm(e,n,u,i,h,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return sd(t,e,n,i,a,r)}function sd(t,e,n,i,r,a){A_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Kp(e,n,!1),Ai(t,e,a);i=e.stateNode,VE.current=e;var s=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ka(e,t.child,null,a),e.child=Ka(e,null,s,a)):qt(t,e,s,a),e.memoizedState=i.state,r&&Kp(e,n,!0),e.child}function R_(t){var e=t.stateNode;e.pendingContext?qp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qp(t,e.context,!1),wh(t,e.containerInfo)}function dm(t,e,n,i,r){return qa(),_h(r),e.flags|=256,qt(t,e,n,i),e.child}var ld={dehydrated:null,treeContext:null,retryLane:0};function ud(t){return{baseLanes:t,cachePool:null,transitions:null}}function C_(t,e,n){var i=e.pendingProps,r=lt.current,a=!1,o=(e.flags&128)!==0,s;if((s=o)||(s=t!==null&&t.memoizedState===null?!1:(r&2)!==0),s?(a=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),tt(lt,r&1),t===null)return td(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,a?(i=e.mode,a=e.child,o={mode:"hidden",children:o},!(i&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Ou(o,i,0,null),t=Or(t,i,n,null),a.return=e,t.return=e,a.sibling=t,e.child=a,e.child.memoizedState=ud(n),e.memoizedState=ld,t):Dh(e,o));if(r=t.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return WE(t,e,o,i,s,r,n);if(a){a=i.fallback,o=e.mode,r=t.child,s=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=rr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),s!==null?a=rr(s,a):(a=Or(a,o,n,null),a.flags|=2),a.return=e,i.return=e,i.sibling=a,e.child=i,i=a,a=e.child,o=t.child.memoizedState,o=o===null?ud(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=t.childLanes&~n,e.memoizedState=ld,i}return a=t.child,t=a.sibling,i=rr(a,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Dh(t,e){return e=Ou({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Xs(t,e,n,i){return i!==null&&_h(i),Ka(e,t.child,null,n),t=Dh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function WE(t,e,n,i,r,a,o){if(n)return e.flags&256?(e.flags&=-257,i=Lc(Error(re(422))),Xs(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(a=i.fallback,r=e.mode,i=Ou({mode:"visible",children:i.children},r,0,null),a=Or(a,r,o,null),a.flags|=2,i.return=e,a.return=e,i.sibling=a,e.child=i,e.mode&1&&Ka(e,t.child,null,o),e.child.memoizedState=ud(o),e.memoizedState=ld,a);if(!(e.mode&1))return Xs(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var s=i.dgst;return i=s,a=Error(re(419)),i=Lc(a,i,void 0),Xs(t,e,o,i)}if(s=(o&t.childLanes)!==0,nn||s){if(i=Lt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==a.retryLane&&(a.retryLane=r,bi(t,r),$n(i,t,r,-1))}return kh(),i=Lc(Error(re(421))),Xs(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=iM.bind(null,t),r._reactRetry=e,null):(t=a.treeContext,mn=er(r.nextSibling),gn=e,ot=!0,Hn=null,t!==null&&(wn[Tn++]=yi,wn[Tn++]=xi,wn[Tn++]=Hr,yi=t.id,xi=t.overflow,Hr=e),e=Dh(e,i.children),e.flags|=4096,e)}function hm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),nd(t.return,e,n)}function Dc(t,e,n,i,r){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r)}function P_(t,e,n){var i=e.pendingProps,r=i.revealOrder,a=i.tail;if(qt(t,e,i.children,n),i=lt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hm(t,n,e);else if(t.tag===19)hm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(tt(lt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&uu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Dc(e,!1,r,n,a);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&uu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Dc(e,!0,n,null,a);break;case"together":Dc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ol(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ai(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Vr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function XE(t,e,n){switch(e.tag){case 3:R_(e),qa();break;case 5:i_(e);break;case 1:an(e.type)&&iu(e);break;case 4:wh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;tt(ou,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(lt,lt.current&1),e.flags|=128,null):n&e.child.childLanes?C_(t,e,n):(tt(lt,lt.current&1),t=Ai(t,e,n),t!==null?t.sibling:null);tt(lt,lt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return P_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),tt(lt,lt.current),i)break;return null;case 22:case 23:return e.lanes=0,b_(t,e,n)}return Ai(t,e,n)}var L_,cd,D_,N_;L_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};cd=function(){};D_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Pr(ai.current);var a=null;switch(n){case"input":r=Df(t,r),i=Df(t,i),a=[];break;case"select":r=ct({},r,{value:void 0}),i=ct({},i,{value:void 0}),a=[];break;case"textarea":r=If(t,r),i=If(t,i),a=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=tu)}Ff(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var s=r[u];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(jo.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in i){var l=i[u];if(s=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(o in s)!s.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&s[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(jo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&nt("scroll",t),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(e.updateQueue=u)&&(e.flags|=4)}};N_=function(t,e,n,i){n!==i&&(e.flags|=4)};function xo(t,e){if(!ot)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Bt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function jE(t,e,n){var i=e.pendingProps;switch(vh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Bt(e),null;case 1:return an(e.type)&&nu(),Bt(e),null;case 3:return i=e.stateNode,Za(),rt(rn),rt(Wt),bh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Vs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(_d(Hn),Hn=null))),cd(t,e),Bt(e),null;case 5:Th(e);var r=Pr(rs.current);if(n=e.type,t!==null&&e.stateNode!=null)D_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return Bt(e),null}if(t=Pr(ai.current),Vs(e)){i=e.stateNode,n=e.type;var a=e.memoizedProps;switch(i[ti]=e,i[ns]=a,t=(e.mode&1)!==0,n){case"dialog":nt("cancel",i),nt("close",i);break;case"iframe":case"object":case"embed":nt("load",i);break;case"video":case"audio":for(r=0;r<Po.length;r++)nt(Po[r],i);break;case"source":nt("error",i);break;case"img":case"image":case"link":nt("error",i),nt("load",i);break;case"details":nt("toggle",i);break;case"input":Ep(i,a),nt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!a.multiple},nt("invalid",i);break;case"textarea":wp(i,a),nt("invalid",i)}Ff(n,a),r=null;for(var o in a)if(a.hasOwnProperty(o)){var s=a[o];o==="children"?typeof s=="string"?i.textContent!==s&&(a.suppressHydrationWarning!==!0&&Gs(i.textContent,s,t),r=["children",s]):typeof s=="number"&&i.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&Gs(i.textContent,s,t),r=["children",""+s]):jo.hasOwnProperty(o)&&s!=null&&o==="onScroll"&&nt("scroll",i)}switch(n){case"input":Us(i),Mp(i,a,!0);break;case"textarea":Us(i),Tp(i);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(i.onclick=tu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=o0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ti]=e,t[ns]=i,L_(t,e,!1,!1),e.stateNode=t;e:{switch(o=kf(n,i),n){case"dialog":nt("cancel",t),nt("close",t),r=i;break;case"iframe":case"object":case"embed":nt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Po.length;r++)nt(Po[r],t);r=i;break;case"source":nt("error",t),r=i;break;case"img":case"image":case"link":nt("error",t),nt("load",t),r=i;break;case"details":nt("toggle",t),r=i;break;case"input":Ep(t,i),r=Df(t,i),nt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=ct({},i,{value:void 0}),nt("invalid",t);break;case"textarea":wp(t,i),r=If(t,i),nt("invalid",t);break;default:r=i}Ff(n,r),s=r;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?u0(t,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&s0(t,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Yo(t,l):typeof l=="number"&&Yo(t,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(jo.hasOwnProperty(a)?l!=null&&a==="onScroll"&&nt("scroll",t):l!=null&&nh(t,a,l,o))}switch(n){case"input":Us(t),Mp(t,i,!1);break;case"textarea":Us(t),Tp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+lr(i.value));break;case"select":t.multiple=!!i.multiple,a=i.value,a!=null?Oa(t,!!i.multiple,a,!1):i.defaultValue!=null&&Oa(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=tu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Bt(e),null;case 6:if(t&&e.stateNode!=null)N_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Pr(rs.current),Pr(ai.current),Vs(e)){if(i=e.stateNode,n=e.memoizedProps,i[ti]=e,(a=i.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:Gs(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Gs(i.nodeValue,n,(t.mode&1)!==0)}a&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ti]=e,e.stateNode=i}return Bt(e),null;case 13:if(rt(lt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ot&&mn!==null&&e.mode&1&&!(e.flags&128))K0(),qa(),e.flags|=98560,a=!1;else if(a=Vs(e),i!==null&&i.dehydrated!==null){if(t===null){if(!a)throw Error(re(318));if(a=e.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(re(317));a[ti]=e}else qa(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Bt(e),a=!1}else Hn!==null&&(_d(Hn),Hn=null),a=!0;if(!a)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||lt.current&1?Mt===0&&(Mt=3):kh())),e.updateQueue!==null&&(e.flags|=4),Bt(e),null);case 4:return Za(),cd(t,e),t===null&&es(e.stateNode.containerInfo),Bt(e),null;case 10:return Sh(e.type._context),Bt(e),null;case 17:return an(e.type)&&nu(),Bt(e),null;case 19:if(rt(lt),a=e.memoizedState,a===null)return Bt(e),null;if(i=(e.flags&128)!==0,o=a.rendering,o===null)if(i)xo(a,!1);else{if(Mt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=uu(t),o!==null){for(e.flags|=128,xo(a,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)a=n,t=i,a.flags&=14680066,o=a.alternate,o===null?(a.childLanes=0,a.lanes=t,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=o.childLanes,a.lanes=o.lanes,a.child=o.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=o.memoizedProps,a.memoizedState=o.memoizedState,a.updateQueue=o.updateQueue,a.type=o.type,t=o.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return tt(lt,lt.current&1|2),e.child}t=t.sibling}a.tail!==null&&vt()>Ja&&(e.flags|=128,i=!0,xo(a,!1),e.lanes=4194304)}else{if(!i)if(t=uu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xo(a,!0),a.tail===null&&a.tailMode==="hidden"&&!o.alternate&&!ot)return Bt(e),null}else 2*vt()-a.renderingStartTime>Ja&&n!==1073741824&&(e.flags|=128,i=!0,xo(a,!1),e.lanes=4194304);a.isBackwards?(o.sibling=e.child,e.child=o):(n=a.last,n!==null?n.sibling=o:e.child=o,a.last=o)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=vt(),e.sibling=null,n=lt.current,tt(lt,i?n&1|2:n&1),e):(Bt(e),null);case 22:case 23:return Fh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pn&1073741824&&(Bt(e),e.subtreeFlags&6&&(e.flags|=8192)):Bt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function YE(t,e){switch(vh(e),e.tag){case 1:return an(e.type)&&nu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Za(),rt(rn),rt(Wt),bh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Th(e),null;case 13:if(rt(lt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));qa()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return rt(lt),null;case 4:return Za(),null;case 10:return Sh(e.type._context),null;case 22:case 23:return Fh(),null;case 24:return null;default:return null}}var js=!1,Vt=!1,$E=typeof WeakSet=="function"?WeakSet:Set,ge=null;function Pa(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){dt(t,e,i)}else n.current=null}function fd(t,e,n){try{n()}catch(i){dt(t,e,i)}}var pm=!1;function qE(t,e){if($f=Ql,t=F0(),mh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,a=i.focusNode;i=i.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var o=0,s=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(s=o+r),d!==a||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++u===r&&(s=o),h===a&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qf={focusedElem:t,selectionRange:n},Ql=!1,ge=e;ge!==null;)if(e=ge,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ge=t;else for(;ge!==null;){e=ge;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,m=g.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?v:zn(e.type,v),m);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(E){dt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}return g=pm,pm=!1,g}function zo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var a=r.destroy;r.destroy=void 0,a!==void 0&&fd(e,n,a)}r=r.next}while(r!==i)}}function Uu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function dd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function U_(t){var e=t.alternate;e!==null&&(t.alternate=null,U_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ti],delete e[ns],delete e[Qf],delete e[LE],delete e[DE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function I_(t){return t.tag===5||t.tag===3||t.tag===4}function mm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function hd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tu));else if(i!==4&&(t=t.child,t!==null))for(hd(t,e,n),t=t.sibling;t!==null;)hd(t,e,n),t=t.sibling}function pd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(pd(t,e,n),t=t.sibling;t!==null;)pd(t,e,n),t=t.sibling}var Nt=null,Bn=!1;function Ii(t,e,n){for(n=n.child;n!==null;)O_(t,e,n),n=n.sibling}function O_(t,e,n){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(bu,n)}catch{}switch(n.tag){case 5:Vt||Pa(n,e);case 6:var i=Nt,r=Bn;Nt=null,Ii(t,e,n),Nt=i,Bn=r,Nt!==null&&(Bn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(Bn?(t=Nt,n=n.stateNode,t.nodeType===8?Tc(t.parentNode,n):t.nodeType===1&&Tc(t,n),Zo(t)):Tc(Nt,n.stateNode));break;case 4:i=Nt,r=Bn,Nt=n.stateNode.containerInfo,Bn=!0,Ii(t,e,n),Nt=i,Bn=r;break;case 0:case 11:case 14:case 15:if(!Vt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var a=r,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&fd(n,e,o),r=r.next}while(r!==i)}Ii(t,e,n);break;case 1:if(!Vt&&(Pa(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(s){dt(n,e,s)}Ii(t,e,n);break;case 21:Ii(t,e,n);break;case 22:n.mode&1?(Vt=(i=Vt)||n.memoizedState!==null,Ii(t,e,n),Vt=i):Ii(t,e,n);break;default:Ii(t,e,n)}}function gm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new $E),e.forEach(function(i){var r=rM.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var a=t,o=e,s=o;e:for(;s!==null;){switch(s.tag){case 5:Nt=s.stateNode,Bn=!1;break e;case 3:Nt=s.stateNode.containerInfo,Bn=!0;break e;case 4:Nt=s.stateNode.containerInfo,Bn=!0;break e}s=s.return}if(Nt===null)throw Error(re(160));O_(a,o,r),Nt=null,Bn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){dt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)F_(e,t),e=e.sibling}function F_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),Zn(t),i&4){try{zo(3,t,t.return),Uu(3,t)}catch(v){dt(t,t.return,v)}try{zo(5,t,t.return)}catch(v){dt(t,t.return,v)}}break;case 1:Un(e,t),Zn(t),i&512&&n!==null&&Pa(n,n.return);break;case 5:if(Un(e,t),Zn(t),i&512&&n!==null&&Pa(n,n.return),t.flags&32){var r=t.stateNode;try{Yo(r,"")}catch(v){dt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var a=t.memoizedProps,o=n!==null?n.memoizedProps:a,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&r0(r,a),kf(s,o);var u=kf(s,a);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?u0(r,d):c==="dangerouslySetInnerHTML"?s0(r,d):c==="children"?Yo(r,d):nh(r,c,d,u)}switch(s){case"input":Nf(r,a);break;case"textarea":a0(r,a);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!a.multiple;var p=a.value;p!=null?Oa(r,!!a.multiple,p,!1):h!==!!a.multiple&&(a.defaultValue!=null?Oa(r,!!a.multiple,a.defaultValue,!0):Oa(r,!!a.multiple,a.multiple?[]:"",!1))}r[ns]=a}catch(v){dt(t,t.return,v)}}break;case 6:if(Un(e,t),Zn(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,a=t.memoizedProps;try{r.nodeValue=a}catch(v){dt(t,t.return,v)}}break;case 3:if(Un(e,t),Zn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Zo(e.containerInfo)}catch(v){dt(t,t.return,v)}break;case 4:Un(e,t),Zn(t);break;case 13:Un(e,t),Zn(t),r=t.child,r.flags&8192&&(a=r.memoizedState!==null,r.stateNode.isHidden=a,!a||r.alternate!==null&&r.alternate.memoizedState!==null||(Ih=vt())),i&4&&gm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Vt=(u=Vt)||c,Un(e,t),Vt=u):Un(e,t),Zn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(ge=t,c=t.child;c!==null;){for(d=ge=c;ge!==null;){switch(h=ge,p=h.child,h.tag){case 0:case 11:case 14:case 15:zo(4,h,h.return);break;case 1:Pa(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){dt(i,n,v)}}break;case 5:Pa(h,h.return);break;case 22:if(h.memoizedState!==null){_m(d);continue}}p!==null?(p.return=h,ge=p):_m(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=l0("display",o))}catch(v){dt(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){dt(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Un(e,t),Zn(t),i&4&&gm(t);break;case 21:break;default:Un(e,t),Zn(t)}}function Zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(I_(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Yo(r,""),i.flags&=-33);var a=mm(t);pd(t,a,r);break;case 3:case 4:var o=i.stateNode.containerInfo,s=mm(t);hd(t,s,o);break;default:throw Error(re(161))}}catch(l){dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function KE(t,e,n){ge=t,k_(t)}function k_(t,e,n){for(var i=(t.mode&1)!==0;ge!==null;){var r=ge,a=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||js;if(!o){var s=r.alternate,l=s!==null&&s.memoizedState!==null||Vt;s=js;var u=Vt;if(js=o,(Vt=l)&&!u)for(ge=r;ge!==null;)o=ge,l=o.child,o.tag===22&&o.memoizedState!==null?ym(r):l!==null?(l.return=o,ge=l):ym(r);for(;a!==null;)ge=a,k_(a),a=a.sibling;ge=r,js=s,Vt=u}vm(t)}else r.subtreeFlags&8772&&a!==null?(a.return=r,ge=a):vm(t)}}function vm(t){for(;ge!==null;){var e=ge;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Vt||Uu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Vt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var a=e.updateQueue;a!==null&&em(e,a,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}em(e,o,n)}break;case 5:var s=e.stateNode;if(n===null&&e.flags&4){n=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Zo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Vt||e.flags&512&&dd(e)}catch(h){dt(e,e.return,h)}}if(e===t){ge=null;break}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}}function _m(t){for(;ge!==null;){var e=ge;if(e===t){ge=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ge=n;break}ge=e.return}}function ym(t){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Uu(4,e)}catch(l){dt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){dt(e,r,l)}}var a=e.return;try{dd(e)}catch(l){dt(e,a,l)}break;case 5:var o=e.return;try{dd(e)}catch(l){dt(e,o,l)}}}catch(l){dt(e,e.return,l)}if(e===t){ge=null;break}var s=e.sibling;if(s!==null){s.return=e.return,ge=s;break}ge=e.return}}var ZE=Math.ceil,du=Li.ReactCurrentDispatcher,Nh=Li.ReactCurrentOwner,Cn=Li.ReactCurrentBatchConfig,je=0,Lt=null,St=null,It=0,pn=0,La=mr(0),Mt=0,ls=null,Vr=0,Iu=0,Uh=0,Bo=null,tn=null,Ih=0,Ja=1/0,gi=null,hu=!1,md=null,nr=null,Ys=!1,Yi=null,pu=0,Ho=0,gd=null,Fl=-1,kl=0;function Qt(){return je&6?vt():Fl!==-1?Fl:Fl=vt()}function ir(t){return t.mode&1?je&2&&It!==0?It&-It:UE.transition!==null?(kl===0&&(kl=S0()),kl):(t=qe,t!==0||(t=window.event,t=t===void 0?16:R0(t.type)),t):1}function $n(t,e,n,i){if(50<Ho)throw Ho=0,gd=null,Error(re(185));_s(t,n,i),(!(je&2)||t!==Lt)&&(t===Lt&&(!(je&2)&&(Iu|=n),Mt===4&&Xi(t,It)),on(t,i),n===1&&je===0&&!(e.mode&1)&&(Ja=vt()+500,Lu&&gr()))}function on(t,e){var n=t.callbackNode;US(t,e);var i=Zl(t,t===Lt?It:0);if(i===0)n!==null&&Rp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Rp(n),e===1)t.tag===0?NE(xm.bind(null,t)):Y0(xm.bind(null,t)),CE(function(){!(je&6)&&gr()}),n=null;else{switch(E0(i)){case 1:n=sh;break;case 4:n=y0;break;case 16:n=Kl;break;case 536870912:n=x0;break;default:n=Kl}n=j_(n,z_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function z_(t,e){if(Fl=-1,kl=0,je&6)throw Error(re(327));var n=t.callbackNode;if(Ha()&&t.callbackNode!==n)return null;var i=Zl(t,t===Lt?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=mu(t,i);else{e=i;var r=je;je|=2;var a=H_();(Lt!==t||It!==e)&&(gi=null,Ja=vt()+500,Ir(t,e));do try{eM();break}catch(s){B_(t,s)}while(1);xh(),du.current=a,je=r,St!==null?e=0:(Lt=null,It=0,e=Mt)}if(e!==0){if(e===2&&(r=Vf(t),r!==0&&(i=r,e=vd(t,r))),e===1)throw n=ls,Ir(t,0),Xi(t,i),on(t,vt()),n;if(e===6)Xi(t,i);else{if(r=t.current.alternate,!(i&30)&&!QE(r)&&(e=mu(t,i),e===2&&(a=Vf(t),a!==0&&(i=a,e=vd(t,a))),e===1))throw n=ls,Ir(t,0),Xi(t,i),on(t,vt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:wr(t,tn,gi);break;case 3:if(Xi(t,i),(i&130023424)===i&&(e=Ih+500-vt(),10<e)){if(Zl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Zf(wr.bind(null,t,tn,gi),e);break}wr(t,tn,gi);break;case 4:if(Xi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Yn(i);a=1<<o,o=e[o],o>r&&(r=o),i&=~a}if(i=r,i=vt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ZE(i/1960))-i,10<i){t.timeoutHandle=Zf(wr.bind(null,t,tn,gi),i);break}wr(t,tn,gi);break;case 5:wr(t,tn,gi);break;default:throw Error(re(329))}}}return on(t,vt()),t.callbackNode===n?z_.bind(null,t):null}function vd(t,e){var n=Bo;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=mu(t,e),t!==2&&(e=tn,tn=n,e!==null&&_d(e)),t}function _d(t){tn===null?tn=t:tn.push.apply(tn,t)}function QE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],a=r.getSnapshot;r=r.value;try{if(!qn(a(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xi(t,e){for(e&=~Uh,e&=~Iu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yn(e),i=1<<n;t[n]=-1,e&=~i}}function xm(t){if(je&6)throw Error(re(327));Ha();var e=Zl(t,0);if(!(e&1))return on(t,vt()),null;var n=mu(t,e);if(t.tag!==0&&n===2){var i=Vf(t);i!==0&&(e=i,n=vd(t,i))}if(n===1)throw n=ls,Ir(t,0),Xi(t,e),on(t,vt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,wr(t,tn,gi),on(t,vt()),null}function Oh(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&(Ja=vt()+500,Lu&&gr())}}function Wr(t){Yi!==null&&Yi.tag===0&&!(je&6)&&Ha();var e=je;je|=1;var n=Cn.transition,i=qe;try{if(Cn.transition=null,qe=1,t)return t()}finally{qe=i,Cn.transition=n,je=e,!(je&6)&&gr()}}function Fh(){pn=La.current,rt(La)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,RE(n)),St!==null)for(n=St.return;n!==null;){var i=n;switch(vh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&nu();break;case 3:Za(),rt(rn),rt(Wt),bh();break;case 5:Th(i);break;case 4:Za();break;case 13:rt(lt);break;case 19:rt(lt);break;case 10:Sh(i.type._context);break;case 22:case 23:Fh()}n=n.return}if(Lt=t,St=t=rr(t.current,null),It=pn=e,Mt=0,ls=null,Uh=Iu=Vr=0,tn=Bo=null,Cr!==null){for(e=0;e<Cr.length;e++)if(n=Cr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,a=n.pending;if(a!==null){var o=a.next;a.next=r,i.next=o}n.pending=i}Cr=null}return t}function B_(t,e){do{var n=St;try{if(xh(),Ul.current=fu,cu){for(var i=ut.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}cu=!1}if(Gr=0,Pt=Et=ut=null,ko=!1,as=0,Nh.current=null,n===null||n.return===null){Mt=1,ls=e,St=null;break}e:{var a=t,o=n.return,s=n,l=e;if(e=It,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=sm(o);if(p!==null){p.flags&=-257,lm(p,o,s,a,e),p.mode&1&&om(a,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){om(a,u,e),kh();break e}l=Error(re(426))}}else if(ot&&s.mode&1){var m=sm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),lm(m,o,s,a,e),_h(Qa(l,s));break e}}a=l=Qa(l,s),Mt!==4&&(Mt=2),Bo===null?Bo=[a]:Bo.push(a),a=o;do{switch(a.tag){case 3:a.flags|=65536,e&=-e,a.lanes|=e;var f=M_(a,l,e);Jp(a,f);break e;case 1:s=l;var _=a.type,y=a.stateNode;if(!(a.flags&128)&&(typeof _.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(nr===null||!nr.has(y)))){a.flags|=65536,e&=-e,a.lanes|=e;var E=w_(a,s,e);Jp(a,E);break e}}a=a.return}while(a!==null)}V_(n)}catch(S){e=S,St===n&&n!==null&&(St=n=n.return);continue}break}while(1)}function H_(){var t=du.current;return du.current=fu,t===null?fu:t}function kh(){(Mt===0||Mt===3||Mt===2)&&(Mt=4),Lt===null||!(Vr&268435455)&&!(Iu&268435455)||Xi(Lt,It)}function mu(t,e){var n=je;je|=2;var i=H_();(Lt!==t||It!==e)&&(gi=null,Ir(t,e));do try{JE();break}catch(r){B_(t,r)}while(1);if(xh(),je=n,du.current=i,St!==null)throw Error(re(261));return Lt=null,It=0,Mt}function JE(){for(;St!==null;)G_(St)}function eM(){for(;St!==null&&!TS();)G_(St)}function G_(t){var e=X_(t.alternate,t,pn);t.memoizedProps=t.pendingProps,e===null?V_(t):St=e,Nh.current=null}function V_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=YE(n,e),n!==null){n.flags&=32767,St=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Mt=6,St=null;return}}else if(n=jE(n,e,pn),n!==null){St=n;return}if(e=e.sibling,e!==null){St=e;return}St=e=t}while(e!==null);Mt===0&&(Mt=5)}function wr(t,e,n){var i=qe,r=Cn.transition;try{Cn.transition=null,qe=1,tM(t,e,n,i)}finally{Cn.transition=r,qe=i}return null}function tM(t,e,n,i){do Ha();while(Yi!==null);if(je&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var a=n.lanes|n.childLanes;if(IS(t,a),t===Lt&&(St=Lt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ys||(Ys=!0,j_(Kl,function(){return Ha(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Cn.transition,Cn.transition=null;var o=qe;qe=1;var s=je;je|=4,Nh.current=null,qE(t,n),F_(n,t),SE(qf),Ql=!!$f,qf=$f=null,t.current=n,KE(n),bS(),je=s,qe=o,Cn.transition=a}else t.current=n;if(Ys&&(Ys=!1,Yi=t,pu=r),a=t.pendingLanes,a===0&&(nr=null),CS(n.stateNode),on(t,vt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(hu)throw hu=!1,t=md,md=null,t;return pu&1&&t.tag!==0&&Ha(),a=t.pendingLanes,a&1?t===gd?Ho++:(Ho=0,gd=t):Ho=0,gr(),null}function Ha(){if(Yi!==null){var t=E0(pu),e=Cn.transition,n=qe;try{if(Cn.transition=null,qe=16>t?16:t,Yi===null)var i=!1;else{if(t=Yi,Yi=null,pu=0,je&6)throw Error(re(331));var r=je;for(je|=4,ge=t.current;ge!==null;){var a=ge,o=a.child;if(ge.flags&16){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(ge=u;ge!==null;){var c=ge;switch(c.tag){case 0:case 11:case 15:zo(8,c,a)}var d=c.child;if(d!==null)d.return=c,ge=d;else for(;ge!==null;){c=ge;var h=c.sibling,p=c.return;if(U_(c),c===u){ge=null;break}if(h!==null){h.return=p,ge=h;break}ge=p}}}var g=a.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}ge=a}}if(a.subtreeFlags&2064&&o!==null)o.return=a,ge=o;else e:for(;ge!==null;){if(a=ge,a.flags&2048)switch(a.tag){case 0:case 11:case 15:zo(9,a,a.return)}var f=a.sibling;if(f!==null){f.return=a.return,ge=f;break e}ge=a.return}}var _=t.current;for(ge=_;ge!==null;){o=ge;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,ge=y;else e:for(o=_;ge!==null;){if(s=ge,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:Uu(9,s)}}catch(S){dt(s,s.return,S)}if(s===o){ge=null;break e}var E=s.sibling;if(E!==null){E.return=s.return,ge=E;break e}ge=s.return}}if(je=r,gr(),ri&&typeof ri.onPostCommitFiberRoot=="function")try{ri.onPostCommitFiberRoot(bu,t)}catch{}i=!0}return i}finally{qe=n,Cn.transition=e}}return!1}function Sm(t,e,n){e=Qa(n,e),e=M_(t,e,1),t=tr(t,e,1),e=Qt(),t!==null&&(_s(t,1,e),on(t,e))}function dt(t,e,n){if(t.tag===3)Sm(t,t,n);else for(;e!==null;){if(e.tag===3){Sm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(nr===null||!nr.has(i))){t=Qa(n,t),t=w_(e,t,1),e=tr(e,t,1),t=Qt(),e!==null&&(_s(e,1,t),on(e,t));break}}e=e.return}}function nM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Qt(),t.pingedLanes|=t.suspendedLanes&n,Lt===t&&(It&n)===n&&(Mt===4||Mt===3&&(It&130023424)===It&&500>vt()-Ih?Ir(t,0):Uh|=n),on(t,e)}function W_(t,e){e===0&&(t.mode&1?(e=Fs,Fs<<=1,!(Fs&130023424)&&(Fs=4194304)):e=1);var n=Qt();t=bi(t,e),t!==null&&(_s(t,e,n),on(t,n))}function iM(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),W_(t,n)}function rM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),W_(t,n)}var X_;X_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||rn.current)nn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return nn=!1,XE(t,e,n);nn=!!(t.flags&131072)}else nn=!1,ot&&e.flags&1048576&&$0(e,au,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ol(t,e),t=e.pendingProps;var r=$a(e,Wt.current);Ba(e,n),r=Rh(null,e,i,t,r,n);var a=Ch();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(a=!0,iu(e)):a=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Mh(e),r.updater=Du,e.stateNode=r,r._reactInternals=e,rd(e,i,t,n),e=sd(null,e,i,!0,a,n)):(e.tag=0,ot&&a&&gh(e),qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ol(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=oM(i),t=zn(i,t),r){case 0:e=od(null,e,i,t,n);break e;case 1:e=fm(null,e,i,t,n);break e;case 11:e=um(null,e,i,t,n);break e;case 14:e=cm(null,e,i,zn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),od(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),fm(t,e,i,r,n);case 3:e:{if(R_(e),t===null)throw Error(re(387));i=e.pendingProps,a=e.memoizedState,r=a.element,Q0(t,e),lu(e,i,null,n);var o=e.memoizedState;if(i=o.element,a.isDehydrated)if(a={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=a,e.memoizedState=a,e.flags&256){r=Qa(Error(re(423)),e),e=dm(t,e,i,n,r);break e}else if(i!==r){r=Qa(Error(re(424)),e),e=dm(t,e,i,n,r);break e}else for(mn=er(e.stateNode.containerInfo.firstChild),gn=e,ot=!0,Hn=null,n=n_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(qa(),i===r){e=Ai(t,e,n);break e}qt(t,e,i,n)}e=e.child}return e;case 5:return i_(e),t===null&&td(e),i=e.type,r=e.pendingProps,a=t!==null?t.memoizedProps:null,o=r.children,Kf(i,r)?o=null:a!==null&&Kf(i,a)&&(e.flags|=32),A_(t,e),qt(t,e,o,n),e.child;case 6:return t===null&&td(e),null;case 13:return C_(t,e,n);case 4:return wh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ka(e,null,i,n):qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),um(t,e,i,r,n);case 7:return qt(t,e,e.pendingProps,n),e.child;case 8:return qt(t,e,e.pendingProps.children,n),e.child;case 12:return qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,a=e.memoizedProps,o=r.value,tt(ou,i._currentValue),i._currentValue=o,a!==null)if(qn(a.value,o)){if(a.children===r.children&&!rn.current){e=Ai(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var s=a.dependencies;if(s!==null){o=a.child;for(var l=s.firstContext;l!==null;){if(l.context===i){if(a.tag===1){l=Si(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),nd(a.return,n,e),s.lanes|=n;break}l=l.next}}else if(a.tag===10)o=a.type===e.type?null:a.child;else if(a.tag===18){if(o=a.return,o===null)throw Error(re(341));o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),nd(o,n,e),o=a.sibling}else o=a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ba(e,n),r=Ln(r),i=i(r),e.flags|=1,qt(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),cm(t,e,i,r,n);case 15:return T_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Ol(t,e),e.tag=1,an(i)?(t=!0,iu(e)):t=!1,Ba(e,n),e_(e,i,r),rd(e,i,r,n),sd(null,e,i,!0,t,n);case 19:return P_(t,e,n);case 22:return b_(t,e,n)}throw Error(re(156,e.tag))};function j_(t,e){return _0(t,e)}function aM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,i){return new aM(t,e,n,i)}function zh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oM(t){if(typeof t=="function")return zh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===rh)return 11;if(t===ah)return 14}return 2}function rr(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function zl(t,e,n,i,r,a){var o=2;if(i=t,typeof t=="function")zh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Sa:return Or(n.children,r,a,e);case ih:o=8,r|=8;break;case Rf:return t=Rn(12,n,e,r|2),t.elementType=Rf,t.lanes=a,t;case Cf:return t=Rn(13,n,e,r),t.elementType=Cf,t.lanes=a,t;case Pf:return t=Rn(19,n,e,r),t.elementType=Pf,t.lanes=a,t;case t0:return Ou(n,r,a,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jv:o=10;break e;case e0:o=9;break e;case rh:o=11;break e;case ah:o=14;break e;case Gi:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Rn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=a,e}function Or(t,e,n,i){return t=Rn(7,t,i,e),t.lanes=n,t}function Ou(t,e,n,i){return t=Rn(22,t,i,e),t.elementType=t0,t.lanes=n,t.stateNode={isHidden:!1},t}function Nc(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function Uc(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function sM(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pc(0),this.expirationTimes=pc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Bh(t,e,n,i,r,a,o,s,l){return t=new sM(t,e,n,s,l),e===1?(e=1,a===!0&&(e|=8)):e=0,a=Rn(3,null,null,e),t.current=a,a.stateNode=t,a.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mh(a),t}function lM(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xa,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Y_(t){if(!t)return ur;t=t._reactInternals;e:{if(Qr(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(an(n))return j0(t,n,e)}return e}function $_(t,e,n,i,r,a,o,s,l){return t=Bh(n,i,!0,t,r,a,o,s,l),t.context=Y_(null),n=t.current,i=Qt(),r=ir(n),a=Si(i,r),a.callback=e??null,tr(n,a,r),t.current.lanes=r,_s(t,r,i),on(t,i),t}function Fu(t,e,n,i){var r=e.current,a=Qt(),o=ir(r);return n=Y_(n),e.context===null?e.context=n:e.pendingContext=n,e=Si(a,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=tr(r,e,o),t!==null&&($n(t,r,o,a),Nl(t,r,o)),o}function gu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Em(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Hh(t,e){Em(t,e),(t=t.alternate)&&Em(t,e)}function uM(){return null}var q_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gh(t){this._internalRoot=t}ku.prototype.render=Gh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));Fu(t,e,null,null)};ku.prototype.unmount=Gh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){Fu(null,t,null,null)}),e[Ti]=null}};function ku(t){this._internalRoot=t}ku.prototype.unstable_scheduleHydration=function(t){if(t){var e=T0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wi.length&&e!==0&&e<Wi[n].priority;n++);Wi.splice(n,0,t),n===0&&A0(t)}};function Vh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function zu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Mm(){}function cM(t,e,n,i,r){if(r){if(typeof i=="function"){var a=i;i=function(){var u=gu(o);a.call(u)}}var o=$_(e,i,t,0,null,!1,!1,"",Mm);return t._reactRootContainer=o,t[Ti]=o.current,es(t.nodeType===8?t.parentNode:t),Wr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var s=i;i=function(){var u=gu(l);s.call(u)}}var l=Bh(t,0,!1,null,null,!1,!1,"",Mm);return t._reactRootContainer=l,t[Ti]=l.current,es(t.nodeType===8?t.parentNode:t),Wr(function(){Fu(e,l,n,i)}),l}function Bu(t,e,n,i,r){var a=n._reactRootContainer;if(a){var o=a;if(typeof r=="function"){var s=r;r=function(){var l=gu(o);s.call(l)}}Fu(e,o,t,r)}else o=cM(n,e,t,r,i);return gu(o)}M0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Co(e.pendingLanes);n!==0&&(lh(e,n|1),on(e,vt()),!(je&6)&&(Ja=vt()+500,gr()))}break;case 13:Wr(function(){var i=bi(t,1);if(i!==null){var r=Qt();$n(i,t,1,r)}}),Hh(t,1)}};uh=function(t){if(t.tag===13){var e=bi(t,134217728);if(e!==null){var n=Qt();$n(e,t,134217728,n)}Hh(t,134217728)}};w0=function(t){if(t.tag===13){var e=ir(t),n=bi(t,e);if(n!==null){var i=Qt();$n(n,t,e,i)}Hh(t,e)}};T0=function(){return qe};b0=function(t,e){var n=qe;try{return qe=t,e()}finally{qe=n}};Bf=function(t,e,n){switch(e){case"input":if(Nf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Pu(i);if(!r)throw Error(re(90));i0(i),Nf(i,r)}}}break;case"textarea":a0(t,n);break;case"select":e=n.value,e!=null&&Oa(t,!!n.multiple,e,!1)}};d0=Oh;h0=Wr;var fM={usingClientEntryPoint:!1,Events:[xs,Ta,Pu,c0,f0,Oh]},So={findFiberByHostInstance:Rr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},dM={bundleType:So.bundleType,version:So.version,rendererPackageName:So.rendererPackageName,rendererConfig:So.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Li.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=g0(t),t===null?null:t.stateNode},findFiberByHostInstance:So.findFiberByHostInstance||uM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $s=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$s.isDisabled&&$s.supportsFiber)try{bu=$s.inject(dM),ri=$s}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fM;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vh(e))throw Error(re(200));return lM(t,e,null,n)};yn.createRoot=function(t,e){if(!Vh(t))throw Error(re(299));var n=!1,i="",r=q_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Bh(t,1,!1,null,null,n,!1,i,r),t[Ti]=e.current,es(t.nodeType===8?t.parentNode:t),new Gh(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=g0(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return Wr(t)};yn.hydrate=function(t,e,n){if(!zu(e))throw Error(re(200));return Bu(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!Vh(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,a="",o=q_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=$_(e,null,t,1,n??null,r,!1,a,o),t[Ti]=e.current,es(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ku(e)};yn.render=function(t,e,n){if(!zu(e))throw Error(re(200));return Bu(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!zu(t))throw Error(re(40));return t._reactRootContainer?(Wr(function(){Bu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1};yn.unstable_batchedUpdates=Oh;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!zu(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return Bu(t,e,n,!1,i)};yn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=yn})(uS);var wm=Tf;wf.createRoot=wm.createRoot,wf.hydrateRoot=wm.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vu(){return vu=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},vu.apply(this,arguments)}var $i;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})($i||($i={}));const Tm="popstate";function hM(t){t===void 0&&(t={});function e(i,r){let{pathname:a,search:o,hash:s}=i.location;return yd("",{pathname:a,search:o,hash:s},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(i,r){return typeof r=="string"?r:K_(r)}return mM(e,n,null,t)}function un(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Wh(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function pM(){return Math.random().toString(36).substr(2,8)}function bm(t,e){return{usr:t.state,key:t.key,idx:e}}function yd(t,e,n,i){return n===void 0&&(n=null),vu({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Hu(e):e,{state:n,key:e&&e.key||i||pM()})}function K_(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Hu(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function mM(t,e,n,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:a=!1}=i,o=r.history,s=$i.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(vu({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){s=$i.Pop;let m=c(),f=m==null?null:m-u;u=m,l&&l({action:s,location:v.location,delta:f})}function h(m,f){s=$i.Push;let _=yd(v.location,m,f);n&&n(_,m),u=c()+1;let y=bm(_,u),E=v.createHref(_);try{o.pushState(y,"",E)}catch{r.location.assign(E)}a&&l&&l({action:s,location:v.location,delta:1})}function p(m,f){s=$i.Replace;let _=yd(v.location,m,f);n&&n(_,m),u=c();let y=bm(_,u),E=v.createHref(_);o.replaceState(y,"",E),a&&l&&l({action:s,location:v.location,delta:0})}function g(m){let f=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof m=="string"?m:K_(m);return un(f,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,f)}let v={get action(){return s},get location(){return t(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Tm,d),l=m,()=>{r.removeEventListener(Tm,d),l=null}},createHref(m){return e(r,m)},createURL:g,encodeLocation(m){let f=g(m);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:p,go(m){return o.go(m)}};return v}var Am;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Am||(Am={}));function gM(t,e,n){n===void 0&&(n="/");let i=typeof e=="string"?Hu(e):e,r=J_(i.pathname||"/",n);if(r==null)return null;let a=Z_(t);vM(a);let o=null;for(let s=0;o==null&&s<a.length;++s)o=bM(a[s],CM(r));return o}function Z_(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let r=(a,o,s)=>{let l={relativePath:s===void 0?a.path||"":s,caseSensitive:a.caseSensitive===!0,childrenIndex:o,route:a};l.relativePath.startsWith("/")&&(un(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=Ga([i,l.relativePath]),c=n.concat(l);a.children&&a.children.length>0&&(un(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Z_(a.children,e,c,u)),!(a.path==null&&!a.index)&&e.push({path:u,score:wM(u,a.index),routesMeta:c})};return t.forEach((a,o)=>{var s;if(a.path===""||!((s=a.path)!=null&&s.includes("?")))r(a,o);else for(let l of Q_(a.path))r(a,o,l)}),e}function Q_(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,r=n.endsWith("?"),a=n.replace(/\?$/,"");if(i.length===0)return r?[a,""]:[a];let o=Q_(i.join("/")),s=[];return s.push(...o.map(l=>l===""?a:[a,l].join("/"))),r&&s.push(...o),s.map(l=>t.startsWith("/")&&l===""?"/":l)}function vM(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:TM(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const _M=/^:\w+$/,yM=3,xM=2,SM=1,EM=10,MM=-2,Rm=t=>t==="*";function wM(t,e){let n=t.split("/"),i=n.length;return n.some(Rm)&&(i+=MM),e&&(i+=xM),n.filter(r=>!Rm(r)).reduce((r,a)=>r+(_M.test(a)?yM:a===""?SM:EM),i)}function TM(t,e){return t.length===e.length&&t.slice(0,-1).every((i,r)=>i===e[r])?t[t.length-1]-e[e.length-1]:0}function bM(t,e){let{routesMeta:n}=t,i={},r="/",a=[];for(let o=0;o<n.length;++o){let s=n[o],l=o===n.length-1,u=r==="/"?e:e.slice(r.length)||"/",c=AM({path:s.relativePath,caseSensitive:s.caseSensitive,end:l},u);if(!c)return null;Object.assign(i,c.params);let d=s.route;a.push({params:i,pathname:Ga([r,c.pathname]),pathnameBase:LM(Ga([r,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(r=Ga([r,c.pathnameBase]))}return a}function AM(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=RM(t.path,t.caseSensitive,t.end),r=e.match(n);if(!r)return null;let a=r[0],o=a.replace(/(.)\/+$/,"$1"),s=r.slice(1);return{params:i.reduce((u,c,d)=>{if(c==="*"){let h=s[d]||"";o=a.slice(0,a.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=PM(s[d]||"",c),u},{}),pathname:a,pathnameBase:o,pattern:t}}function RM(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Wh(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],r="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,s)=>(i.push(s),"/([^\\/]+)"));return t.endsWith("*")?(i.push("*"),r+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?r+="\\/*$":t!==""&&t!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function CM(t){try{return decodeURI(t)}catch(e){return Wh(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function PM(t,e){try{return decodeURIComponent(t)}catch(n){return Wh(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function J_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}const Ga=t=>t.join("/").replace(/\/\/+/g,"/"),LM=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/");function DM(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function NM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const UM=typeof Object.is=="function"?Object.is:NM,{useState:IM,useEffect:OM,useLayoutEffect:FM,useDebugValue:kM}=Mf;function zM(t,e,n){const i=e(),[{inst:r},a]=IM({inst:{value:i,getSnapshot:e}});return FM(()=>{r.value=i,r.getSnapshot=e,Ic(r)&&a({inst:r})},[t,i,e]),OM(()=>(Ic(r)&&a({inst:r}),t(()=>{Ic(r)&&a({inst:r})})),[t]),kM(i),i}function Ic(t){const e=t.getSnapshot,n=t.value;try{const i=e();return!UM(n,i)}catch{return!0}}function BM(t,e,n){return e()}const HM=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",GM=!HM,VM=GM?BM:zM;"useSyncExternalStore"in Mf&&(t=>t.useSyncExternalStore)(Mf);const ey=we.createContext(null),ty=we.createContext(null),ny=we.createContext(null),Gu=we.createContext(null),Vu=we.createContext({outlet:null,matches:[]}),iy=we.createContext(null);function xd(){return xd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},xd.apply(this,arguments)}function Xh(){return we.useContext(Gu)!=null}function WM(){return Xh()||un(!1),we.useContext(Gu).location}function XM(t,e){Xh()||un(!1);let{navigator:n}=we.useContext(ny),i=we.useContext(ty),{matches:r}=we.useContext(Vu),a=r[r.length-1],o=a?a.params:{};a&&a.pathname;let s=a?a.pathnameBase:"/";a&&a.route;let l=WM(),u;if(e){var c;let v=typeof e=="string"?Hu(e):e;s==="/"||(c=v.pathname)!=null&&c.startsWith(s)||un(!1),u=v}else u=l;let d=u.pathname||"/",h=s==="/"?d:d.slice(s.length)||"/",p=gM(t,{pathname:h}),g=qM(p&&p.map(v=>Object.assign({},v,{params:Object.assign({},o,v.params),pathname:Ga([s,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?s:Ga([s,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),r,i||void 0);return e&&g?we.createElement(Gu.Provider,{value:{location:xd({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:$i.Pop}},g):g}function jM(){let t=JM(),e=DM(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},a=null;return we.createElement(we.Fragment,null,we.createElement("h2",null,"Unexpected Application Error!"),we.createElement("h3",{style:{fontStyle:"italic"}},e),n?we.createElement("pre",{style:r},n):null,a)}class YM extends we.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?we.createElement(Vu.Provider,{value:this.props.routeContext},we.createElement(iy.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $M(t){let{routeContext:e,match:n,children:i}=t,r=we.useContext(ey);return r&&r.static&&r.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=n.route.id),we.createElement(Vu.Provider,{value:e},i)}function qM(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let i=t,r=n==null?void 0:n.errors;if(r!=null){let a=i.findIndex(o=>o.route.id&&(r==null?void 0:r[o.route.id]));a>=0||un(!1),i=i.slice(0,Math.min(i.length,a+1))}return i.reduceRight((a,o,s)=>{let l=o.route.id?r==null?void 0:r[o.route.id]:null,u=null;n&&(o.route.ErrorBoundary?u=we.createElement(o.route.ErrorBoundary,null):o.route.errorElement?u=o.route.errorElement:u=we.createElement(jM,null));let c=e.concat(i.slice(0,s+1)),d=()=>{let h=a;return l?h=u:o.route.Component?h=we.createElement(o.route.Component,null):o.route.element&&(h=o.route.element),we.createElement($M,{match:o,routeContext:{outlet:a,matches:c},children:h})};return n&&(o.route.ErrorBoundary||o.route.errorElement||s===0)?we.createElement(YM,{location:n.location,component:u,error:l,children:d(),routeContext:{outlet:null,matches:c}}):d()},null)}var Cm;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(Cm||(Cm={}));var _u;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(_u||(_u={}));function KM(t){let e=we.useContext(ty);return e||un(!1),e}function ZM(t){let e=we.useContext(Vu);return e||un(!1),e}function QM(t){let e=ZM(),n=e.matches[e.matches.length-1];return n.route.id||un(!1),n.route.id}function JM(){var t;let e=we.useContext(iy),n=KM(_u.UseRouteError),i=QM(_u.UseRouteError);return e||((t=n.errors)==null?void 0:t[i])}function Sd(t){un(!1)}function e1(t){let{basename:e="/",children:n=null,location:i,navigationType:r=$i.Pop,navigator:a,static:o=!1}=t;Xh()&&un(!1);let s=e.replace(/^\/*/,"/"),l=we.useMemo(()=>({basename:s,navigator:a,static:o}),[s,a,o]);typeof i=="string"&&(i=Hu(i));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:p="default"}=i,g=we.useMemo(()=>{let v=J_(u,s);return v==null?null:{location:{pathname:v,search:c,hash:d,state:h,key:p},navigationType:r}},[s,u,c,d,h,p,r]);return g==null?null:we.createElement(ny.Provider,{value:l},we.createElement(Gu.Provider,{children:n,value:g}))}function t1(t){let{children:e,location:n}=t,i=we.useContext(ey),r=i&&!e?i.router.routes:Ed(e);return XM(r,n)}var Pm;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Pm||(Pm={}));new Promise(()=>{});function Ed(t,e){e===void 0&&(e=[]);let n=[];return we.Children.forEach(t,(i,r)=>{if(!we.isValidElement(i))return;let a=[...e,r];if(i.type===we.Fragment){n.push.apply(n,Ed(i.props.children,a));return}i.type!==Sd&&un(!1),!i.props.index||!i.props.children||un(!1);let o={id:i.props.id||a.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Ed(i.props.children,a)),n.push(o)}),n}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function n1(t){let{basename:e,children:n,window:i}=t,r=we.useRef();r.current==null&&(r.current=hM({window:i,v5Compat:!0}));let a=r.current,[o,s]=we.useState({action:a.action,location:a.location});return we.useLayoutEffect(()=>a.listen(s),[a]),we.createElement(e1,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:a})}var Lm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Lm||(Lm={}));var Dm;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Dm||(Dm={}));we.createContext(null);const i1="/FL-Variant/assets/logo-23ce3f19.png";function Nm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function me(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Nm(Object(n),!0).forEach(function(i){wt(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Nm(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function yu(t){return yu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},yu(t)}function r1(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Um(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a1(t,e,n){return e&&Um(t.prototype,e),n&&Um(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function wt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function jh(t,e){return s1(t)||u1(t,e)||ry(t,e)||f1()}function Es(t){return o1(t)||l1(t)||ry(t)||c1()}function o1(t){if(Array.isArray(t))return Md(t)}function s1(t){if(Array.isArray(t))return t}function l1(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function u1(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i=[],r=!0,a=!1,o,s;try{for(n=n.call(t);!(r=(o=n.next()).done)&&(i.push(o.value),!(e&&i.length===e));r=!0);}catch(l){a=!0,s=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(a)throw s}}return i}}function ry(t,e){if(t){if(typeof t=="string")return Md(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Md(t,e)}}function Md(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function c1(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function f1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Im=function(){},Yh={},ay={},oy=null,sy={mark:Im,measure:Im};try{typeof window<"u"&&(Yh=window),typeof document<"u"&&(ay=document),typeof MutationObserver<"u"&&(oy=MutationObserver),typeof performance<"u"&&(sy=performance)}catch{}var d1=Yh.navigator||{},Om=d1.userAgent,Fm=Om===void 0?"":Om,cr=Yh,at=ay,km=oy,qs=sy;cr.document;var Di=!!at.documentElement&&!!at.head&&typeof at.addEventListener=="function"&&typeof at.createElement=="function",ly=~Fm.indexOf("MSIE")||~Fm.indexOf("Trident/"),Ks,Zs,Qs,Js,el,Ri="___FONT_AWESOME___",wd=16,uy="fa",cy="svg-inline--fa",Xr="data-fa-i2svg",Td="data-fa-pseudo-element",h1="data-fa-pseudo-element-pending",$h="data-prefix",qh="data-icon",zm="fontawesome-i2svg",p1="async",m1=["HTML","HEAD","STYLE","SCRIPT"],fy=function(){try{return!0}catch{return!1}}(),it="classic",ht="sharp",Kh=[it,ht];function Ms(t){return new Proxy(t,{get:function(n,i){return i in n?n[i]:n[it]}})}var us=Ms((Ks={},wt(Ks,it,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),wt(Ks,ht,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Ks)),cs=Ms((Zs={},wt(Zs,it,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),wt(Zs,ht,{solid:"fass",regular:"fasr",light:"fasl"}),Zs)),fs=Ms((Qs={},wt(Qs,it,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),wt(Qs,ht,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Qs)),g1=Ms((Js={},wt(Js,it,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),wt(Js,ht,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Js)),v1=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,dy="fa-layers-text",_1=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,y1=Ms((el={},wt(el,it,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),wt(el,ht,{900:"fass",400:"fasr",300:"fasl"}),el)),hy=[1,2,3,4,5,6,7,8,9,10],x1=hy.concat([11,12,13,14,15,16,17,18,19,20]),S1=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Lr={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ds=new Set;Object.keys(cs[it]).map(ds.add.bind(ds));Object.keys(cs[ht]).map(ds.add.bind(ds));var E1=[].concat(Kh,Es(ds),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Lr.GROUP,Lr.SWAP_OPACITY,Lr.PRIMARY,Lr.SECONDARY]).concat(hy.map(function(t){return"".concat(t,"x")})).concat(x1.map(function(t){return"w-".concat(t)})),Go=cr.FontAwesomeConfig||{};function M1(t){var e=at.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function w1(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(at&&typeof at.querySelector=="function"){var T1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];T1.forEach(function(t){var e=jh(t,2),n=e[0],i=e[1],r=w1(M1(n));r!=null&&(Go[i]=r)})}var py={styleDefault:"solid",familyDefault:"classic",cssPrefix:uy,replacementClass:cy,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Go.familyPrefix&&(Go.cssPrefix=Go.familyPrefix);var eo=me(me({},py),Go);eo.autoReplaceSvg||(eo.observeMutations=!1);var _e={};Object.keys(py).forEach(function(t){Object.defineProperty(_e,t,{enumerable:!0,set:function(n){eo[t]=n,Vo.forEach(function(i){return i(_e)})},get:function(){return eo[t]}})});Object.defineProperty(_e,"familyPrefix",{enumerable:!0,set:function(e){eo.cssPrefix=e,Vo.forEach(function(n){return n(_e)})},get:function(){return eo.cssPrefix}});cr.FontAwesomeConfig=_e;var Vo=[];function b1(t){return Vo.push(t),function(){Vo.splice(Vo.indexOf(t),1)}}var Oi=wd,ni={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function A1(t){if(!(!t||!Di)){var e=at.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=at.head.childNodes,i=null,r=n.length-1;r>-1;r--){var a=n[r],o=(a.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(i=a)}return at.head.insertBefore(e,i),t}}var R1="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function hs(){for(var t=12,e="";t-- >0;)e+=R1[Math.random()*62|0];return e}function uo(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Zh(t){return t.classList?uo(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function my(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function C1(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(my(t[n]),'" ')},"").trim()}function Wu(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function Qh(t){return t.size!==ni.size||t.x!==ni.x||t.y!==ni.y||t.rotate!==ni.rotate||t.flipX||t.flipY}function P1(t){var e=t.transform,n=t.containerWidth,i=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},a="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(a," ").concat(o," ").concat(s)},u={transform:"translate(".concat(i/2*-1," -256)")};return{outer:r,inner:l,path:u}}function L1(t){var e=t.transform,n=t.width,i=n===void 0?wd:n,r=t.height,a=r===void 0?wd:r,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&ly?l+="translate(".concat(e.x/Oi-i/2,"em, ").concat(e.y/Oi-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/Oi,"em), calc(-50% + ").concat(e.y/Oi,"em)) "):l+="translate(".concat(e.x/Oi,"em, ").concat(e.y/Oi,"em) "),l+="scale(".concat(e.size/Oi*(e.flipX?-1:1),", ").concat(e.size/Oi*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var D1=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function gy(){var t=uy,e=cy,n=_e.cssPrefix,i=_e.replacementClass,r=D1;if(n!==t||i!==e){var a=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(a,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(i))}return r}var Bm=!1;function Oc(){_e.autoAddCss&&!Bm&&(A1(gy()),Bm=!0)}var N1={mixout:function(){return{dom:{css:gy,insertCss:Oc}}},hooks:function(){return{beforeDOMElementCreation:function(){Oc()},beforeI2svg:function(){Oc()}}}},Ci=cr||{};Ci[Ri]||(Ci[Ri]={});Ci[Ri].styles||(Ci[Ri].styles={});Ci[Ri].hooks||(Ci[Ri].hooks={});Ci[Ri].shims||(Ci[Ri].shims=[]);var Xn=Ci[Ri],vy=[],U1=function t(){at.removeEventListener("DOMContentLoaded",t),xu=1,vy.map(function(e){return e()})},xu=!1;Di&&(xu=(at.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(at.readyState),xu||at.addEventListener("DOMContentLoaded",U1));function I1(t){Di&&(xu?setTimeout(t,0):vy.push(t))}function ws(t){var e=t.tag,n=t.attributes,i=n===void 0?{}:n,r=t.children,a=r===void 0?[]:r;return typeof t=="string"?my(t):"<".concat(e," ").concat(C1(i),">").concat(a.map(ws).join(""),"</").concat(e,">")}function Hm(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var O1=function(e,n){return function(i,r,a,o){return e.call(n,i,r,a,o)}},Fc=function(e,n,i,r){var a=Object.keys(e),o=a.length,s=r!==void 0?O1(n,r):n,l,u,c;for(i===void 0?(l=1,c=e[a[0]]):(l=0,c=i);l<o;l++)u=a[l],c=s(c,e[u],u,e);return c};function F1(t){for(var e=[],n=0,i=t.length;n<i;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var a=t.charCodeAt(n++);(a&64512)==56320?e.push(((r&1023)<<10)+(a&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function bd(t){var e=F1(t);return e.length===1?e[0].toString(16):null}function k1(t,e){var n=t.length,i=t.charCodeAt(e),r;return i>=55296&&i<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(i-55296)*1024+r-56320+65536:i}function Gm(t){return Object.keys(t).reduce(function(e,n){var i=t[n],r=!!i.icon;return r?e[i.iconName]=i.icon:e[n]=i,e},{})}function Ad(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.skipHooks,r=i===void 0?!1:i,a=Gm(e);typeof Xn.hooks.addPack=="function"&&!r?Xn.hooks.addPack(t,Gm(e)):Xn.styles[t]=me(me({},Xn.styles[t]||{}),a),t==="fas"&&Ad("fa",e)}var tl,nl,il,Da=Xn.styles,z1=Xn.shims,B1=(tl={},wt(tl,it,Object.values(fs[it])),wt(tl,ht,Object.values(fs[ht])),tl),Jh=null,_y={},yy={},xy={},Sy={},Ey={},H1=(nl={},wt(nl,it,Object.keys(us[it])),wt(nl,ht,Object.keys(us[ht])),nl);function G1(t){return~E1.indexOf(t)}function V1(t,e){var n=e.split("-"),i=n[0],r=n.slice(1).join("-");return i===t&&r!==""&&!G1(r)?r:null}var My=function(){var e=function(a){return Fc(Da,function(o,s,l){return o[l]=Fc(s,a,{}),o},{})};_y=e(function(r,a,o){if(a[3]&&(r[a[3]]=o),a[2]){var s=a[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){r[l.toString(16)]=o})}return r}),yy=e(function(r,a,o){if(r[o]=o,a[2]){var s=a[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){r[l]=o})}return r}),Ey=e(function(r,a,o){var s=a[2];return r[o]=o,s.forEach(function(l){r[l]=o}),r});var n="far"in Da||_e.autoFetchSvg,i=Fc(z1,function(r,a){var o=a[0],s=a[1],l=a[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:l}),r},{names:{},unicodes:{}});xy=i.names,Sy=i.unicodes,Jh=Xu(_e.styleDefault,{family:_e.familyDefault})};b1(function(t){Jh=Xu(t.styleDefault,{family:_e.familyDefault})});My();function ep(t,e){return(_y[t]||{})[e]}function W1(t,e){return(yy[t]||{})[e]}function Dr(t,e){return(Ey[t]||{})[e]}function wy(t){return xy[t]||{prefix:null,iconName:null}}function X1(t){var e=Sy[t],n=ep("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function fr(){return Jh}var tp=function(){return{prefix:null,iconName:null,rest:[]}};function Xu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,i=n===void 0?it:n,r=us[i][t],a=cs[i][t]||cs[i][r],o=t in Xn.styles?t:null;return a||o||null}var Vm=(il={},wt(il,it,Object.keys(fs[it])),wt(il,ht,Object.keys(fs[ht])),il);function ju(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.skipLookups,r=i===void 0?!1:i,a=(e={},wt(e,it,"".concat(_e.cssPrefix,"-").concat(it)),wt(e,ht,"".concat(_e.cssPrefix,"-").concat(ht)),e),o=null,s=it;(t.includes(a[it])||t.some(function(u){return Vm[it].includes(u)}))&&(s=it),(t.includes(a[ht])||t.some(function(u){return Vm[ht].includes(u)}))&&(s=ht);var l=t.reduce(function(u,c){var d=V1(_e.cssPrefix,c);if(Da[c]?(c=B1[s].includes(c)?g1[s][c]:c,o=c,u.prefix=c):H1[s].indexOf(c)>-1?(o=c,u.prefix=Xu(c,{family:s})):d?u.iconName=d:c!==_e.replacementClass&&c!==a[it]&&c!==a[ht]&&u.rest.push(c),!r&&u.prefix&&u.iconName){var h=o==="fa"?wy(u.iconName):{},p=Dr(u.prefix,u.iconName);h.prefix&&(o=null),u.iconName=h.iconName||p||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!Da.far&&Da.fas&&!_e.autoFetchSvg&&(u.prefix="fas")}return u},tp());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===ht&&(Da.fass||_e.autoFetchSvg)&&(l.prefix="fass",l.iconName=Dr(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=fr()||"fas"),l}var j1=function(){function t(){r1(this,t),this.definitions={}}return a1(t,[{key:"add",value:function(){for(var n=this,i=arguments.length,r=new Array(i),a=0;a<i;a++)r[a]=arguments[a];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=me(me({},n.definitions[s]||{}),o[s]),Ad(s,o[s]);var l=fs[it][s];l&&Ad(l,o[s]),My()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,i){var r=i.prefix&&i.iconName&&i.icon?{0:i}:i;return Object.keys(r).map(function(a){var o=r[a],s=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[s]||(n[s]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[s][d]=u)}),n[s][l]=u}),n}}]),t}(),Wm=[],Na={},Va={},Y1=Object.keys(Va);function $1(t,e){var n=e.mixoutsTo;return Wm=t,Na={},Object.keys(Va).forEach(function(i){Y1.indexOf(i)===-1&&delete Va[i]}),Wm.forEach(function(i){var r=i.mixout?i.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(n[o]=r[o]),yu(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=r[o][s]})}),i.hooks){var a=i.hooks();Object.keys(a).forEach(function(o){Na[o]||(Na[o]=[]),Na[o].push(a[o])})}i.provides&&i.provides(Va)}),n}function Rd(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),r=2;r<n;r++)i[r-2]=arguments[r];var a=Na[t]||[];return a.forEach(function(o){e=o.apply(null,[e].concat(i))}),e}function jr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];var r=Na[t]||[];r.forEach(function(a){a.apply(null,n)})}function Pi(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Va[t]?Va[t].apply(null,e):void 0}function Cd(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||fr();if(e)return e=Dr(n,e)||e,Hm(Ty.definitions,n,e)||Hm(Xn.styles,n,e)}var Ty=new j1,q1=function(){_e.autoReplaceSvg=!1,_e.observeMutations=!1,jr("noAuto")},K1={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Di?(jr("beforeI2svg",e),Pi("pseudoElements2svg",e),Pi("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;_e.autoReplaceSvg===!1&&(_e.autoReplaceSvg=!0),_e.observeMutations=!0,I1(function(){Q1({autoReplaceSvgRoot:n}),jr("watch",e)})}},Z1={icon:function(e){if(e===null)return null;if(yu(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Dr(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],i=Xu(e[0]);return{prefix:i,iconName:Dr(i,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(_e.cssPrefix,"-"))>-1||e.match(v1))){var r=ju(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||fr(),iconName:Dr(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var a=fr();return{prefix:a,iconName:Dr(a,e)||e}}}},Sn={noAuto:q1,config:_e,dom:K1,parse:Z1,library:Ty,findIconDefinition:Cd,toHtml:ws},Q1=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,i=n===void 0?at:n;(Object.keys(Xn.styles).length>0||_e.autoFetchSvg)&&Di&&_e.autoReplaceSvg&&Sn.dom.i2svg({node:i})};function Yu(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(i){return ws(i)})}}),Object.defineProperty(t,"node",{get:function(){if(Di){var i=at.createElement("div");return i.innerHTML=t.html,i.children}}}),t}function J1(t){var e=t.children,n=t.main,i=t.mask,r=t.attributes,a=t.styles,o=t.transform;if(Qh(o)&&n.found&&!i.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};r.style=Wu(me(me({},a),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function ew(t){var e=t.prefix,n=t.iconName,i=t.children,r=t.attributes,a=t.symbol,o=a===!0?"".concat(e,"-").concat(_e.cssPrefix,"-").concat(n):a;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:me(me({},r),{},{id:o}),children:i}]}]}function np(t){var e=t.icons,n=e.main,i=e.mask,r=t.prefix,a=t.iconName,o=t.transform,s=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,h=t.watchable,p=h===void 0?!1:h,g=i.found?i:n,v=g.width,m=g.height,f=r==="fak",_=[_e.replacementClass,a?"".concat(_e.cssPrefix,"-").concat(a):""].filter(function(x){return d.classes.indexOf(x)===-1}).filter(function(x){return x!==""||!!x}).concat(d.classes).join(" "),y={children:[],attributes:me(me({},d.attributes),{},{"data-prefix":r,"data-icon":a,class:_,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(m)})},E=f&&!~d.classes.indexOf("fa-fw")?{width:"".concat(v/m*16*.0625,"em")}:{};p&&(y.attributes[Xr]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(c||hs())},children:[l]}),delete y.attributes.title);var S=me(me({},y),{},{prefix:r,iconName:a,main:n,mask:i,maskId:u,transform:o,symbol:s,styles:me(me({},E),d.styles)}),b=i.found&&n.found?Pi("generateAbstractMask",S)||{children:[],attributes:{}}:Pi("generateAbstractIcon",S)||{children:[],attributes:{}},R=b.children,P=b.attributes;return S.children=R,S.attributes=P,s?ew(S):J1(S)}function Xm(t){var e=t.content,n=t.width,i=t.height,r=t.transform,a=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,u=me(me(me({},o.attributes),a?{title:a}:{}),{},{class:o.classes.join(" ")});l&&(u[Xr]="");var c=me({},o.styles);Qh(r)&&(c.transform=L1({transform:r,startCentered:!0,width:n,height:i}),c["-webkit-transform"]=c.transform);var d=Wu(c);d.length>0&&(u.style=d);var h=[];return h.push({tag:"span",attributes:u,children:[e]}),a&&h.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),h}function tw(t){var e=t.content,n=t.title,i=t.extra,r=me(me(me({},i.attributes),n?{title:n}:{}),{},{class:i.classes.join(" ")}),a=Wu(i.styles);a.length>0&&(r.style=a);var o=[];return o.push({tag:"span",attributes:r,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var kc=Xn.styles;function Pd(t){var e=t[0],n=t[1],i=t.slice(4),r=jh(i,1),a=r[0],o=null;return Array.isArray(a)?o={tag:"g",attributes:{class:"".concat(_e.cssPrefix,"-").concat(Lr.GROUP)},children:[{tag:"path",attributes:{class:"".concat(_e.cssPrefix,"-").concat(Lr.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(_e.cssPrefix,"-").concat(Lr.PRIMARY),fill:"currentColor",d:a[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:n,icon:o}}var nw={found:!1,width:512,height:512};function iw(t,e){!fy&&!_e.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Ld(t,e){var n=e;return e==="fa"&&_e.styleDefault!==null&&(e=fr()),new Promise(function(i,r){if(Pi("missingIconAbstract"),n==="fa"){var a=wy(t)||{};t=a.iconName||t,e=a.prefix||e}if(t&&e&&kc[e]&&kc[e][t]){var o=kc[e][t];return i(Pd(o))}iw(t,e),i(me(me({},nw),{},{icon:_e.showMissingIcons&&t?Pi("missingIconAbstract")||{}:{}}))})}var jm=function(){},Dd=_e.measurePerformance&&qs&&qs.mark&&qs.measure?qs:{mark:jm,measure:jm},Lo='FA "6.4.0"',rw=function(e){return Dd.mark("".concat(Lo," ").concat(e," begins")),function(){return by(e)}},by=function(e){Dd.mark("".concat(Lo," ").concat(e," ends")),Dd.measure("".concat(Lo," ").concat(e),"".concat(Lo," ").concat(e," begins"),"".concat(Lo," ").concat(e," ends"))},ip={begin:rw,end:by},Bl=function(){};function Ym(t){var e=t.getAttribute?t.getAttribute(Xr):null;return typeof e=="string"}function aw(t){var e=t.getAttribute?t.getAttribute($h):null,n=t.getAttribute?t.getAttribute(qh):null;return e&&n}function ow(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(_e.replacementClass)}function sw(){if(_e.autoReplaceSvg===!0)return Hl.replace;var t=Hl[_e.autoReplaceSvg];return t||Hl.replace}function lw(t){return at.createElementNS("http://www.w3.org/2000/svg",t)}function uw(t){return at.createElement(t)}function Ay(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,i=n===void 0?t.tag==="svg"?lw:uw:n;if(typeof t=="string")return at.createTextNode(t);var r=i(t.tag);Object.keys(t.attributes||[]).forEach(function(o){r.setAttribute(o,t.attributes[o])});var a=t.children||[];return a.forEach(function(o){r.appendChild(Ay(o,{ceFn:i}))}),r}function cw(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Hl={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(Ay(r),n)}),n.getAttribute(Xr)===null&&_e.keepOriginalSource){var i=at.createComment(cw(n));n.parentNode.replaceChild(i,n)}else n.remove()},nest:function(e){var n=e[0],i=e[1];if(~Zh(n).indexOf(_e.replacementClass))return Hl.replace(e);var r=new RegExp("".concat(_e.cssPrefix,"-.*"));if(delete i[0].attributes.id,i[0].attributes.class){var a=i[0].attributes.class.split(" ").reduce(function(s,l){return l===_e.replacementClass||l.match(r)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});i[0].attributes.class=a.toSvg.join(" "),a.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",a.toNode.join(" "))}var o=i.map(function(s){return ws(s)}).join(`
`);n.setAttribute(Xr,""),n.innerHTML=o}};function $m(t){t()}function Ry(t,e){var n=typeof e=="function"?e:Bl;if(t.length===0)n();else{var i=$m;_e.mutateApproach===p1&&(i=cr.requestAnimationFrame||$m),i(function(){var r=sw(),a=ip.begin("mutate");t.map(r),a(),n()})}}var rp=!1;function Cy(){rp=!0}function Nd(){rp=!1}var Su=null;function qm(t){if(km&&_e.observeMutations){var e=t.treeCallback,n=e===void 0?Bl:e,i=t.nodeCallback,r=i===void 0?Bl:i,a=t.pseudoElementsCallback,o=a===void 0?Bl:a,s=t.observeMutationsRoot,l=s===void 0?at:s;Su=new km(function(u){if(!rp){var c=fr();uo(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Ym(d.addedNodes[0])&&(_e.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&_e.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Ym(d.target)&&~S1.indexOf(d.attributeName))if(d.attributeName==="class"&&aw(d.target)){var h=ju(Zh(d.target)),p=h.prefix,g=h.iconName;d.target.setAttribute($h,p||c),g&&d.target.setAttribute(qh,g)}else ow(d.target)&&r(d.target)})}}),Di&&Su.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function fw(){Su&&Su.disconnect()}function dw(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(i,r){var a=r.split(":"),o=a[0],s=a.slice(1);return o&&s.length>0&&(i[o]=s.join(":").trim()),i},{})),n}function hw(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),i=t.innerText!==void 0?t.innerText.trim():"",r=ju(Zh(t));return r.prefix||(r.prefix=fr()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&i.length>0&&(r.iconName=W1(r.prefix,t.innerText)||ep(r.prefix,bd(t.innerText))),!r.iconName&&_e.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function pw(t){var e=uo(t.attributes).reduce(function(r,a){return r.name!=="class"&&r.name!=="style"&&(r[a.name]=a.value),r},{}),n=t.getAttribute("title"),i=t.getAttribute("data-fa-title-id");return _e.autoA11y&&(n?e["aria-labelledby"]="".concat(_e.replacementClass,"-title-").concat(i||hs()):(e["aria-hidden"]="true",e.focusable="false")),e}function mw(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ni,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Km(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=hw(t),i=n.iconName,r=n.prefix,a=n.rest,o=pw(t),s=Rd("parseNodeAttributes",{},t),l=e.styleParser?dw(t):[];return me({iconName:i,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:ni,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:a,styles:l,attributes:o}},s)}var gw=Xn.styles;function Py(t){var e=_e.autoReplaceSvg==="nest"?Km(t,{styleParser:!1}):Km(t);return~e.extra.classes.indexOf(dy)?Pi("generateLayersText",t,e):Pi("generateSvgReplacementMutation",t,e)}var dr=new Set;Kh.map(function(t){dr.add("fa-".concat(t))});Object.keys(us[it]).map(dr.add.bind(dr));Object.keys(us[ht]).map(dr.add.bind(dr));dr=Es(dr);function Zm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Di)return Promise.resolve();var n=at.documentElement.classList,i=function(d){return n.add("".concat(zm,"-").concat(d))},r=function(d){return n.remove("".concat(zm,"-").concat(d))},a=_e.autoFetchSvg?dr:Kh.map(function(c){return"fa-".concat(c)}).concat(Object.keys(gw));a.includes("fa")||a.push("fa");var o=[".".concat(dy,":not([").concat(Xr,"])")].concat(a.map(function(c){return".".concat(c,":not([").concat(Xr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=uo(t.querySelectorAll(o))}catch{}if(s.length>0)i("pending"),r("complete");else return Promise.resolve();var l=ip.begin("onTree"),u=s.reduce(function(c,d){try{var h=Py(d);h&&c.push(h)}catch(p){fy||p.name==="MissingIcon"&&console.error(p)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(h){Ry(h,function(){i("active"),i("complete"),r("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(h){l(),d(h)})})}function vw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Py(t).then(function(n){n&&Ry([n],e)})}function _w(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=(e||{}).icon?e:Cd(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Cd(r||{})),t(i,me(me({},n),{},{mask:r}))}}var yw=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=n.transform,r=i===void 0?ni:i,a=n.symbol,o=a===void 0?!1:a,s=n.mask,l=s===void 0?null:s,u=n.maskId,c=u===void 0?null:u,d=n.title,h=d===void 0?null:d,p=n.titleId,g=p===void 0?null:p,v=n.classes,m=v===void 0?[]:v,f=n.attributes,_=f===void 0?{}:f,y=n.styles,E=y===void 0?{}:y;if(e){var S=e.prefix,b=e.iconName,R=e.icon;return Yu(me({type:"icon"},e),function(){return jr("beforeDOMElementCreation",{iconDefinition:e,params:n}),_e.autoA11y&&(h?_["aria-labelledby"]="".concat(_e.replacementClass,"-title-").concat(g||hs()):(_["aria-hidden"]="true",_.focusable="false")),np({icons:{main:Pd(R),mask:l?Pd(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:b,transform:me(me({},ni),r),symbol:o,title:h,maskId:c,titleId:g,extra:{attributes:_,styles:E,classes:m}})})}},xw={mixout:function(){return{icon:_w(yw)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Zm,n.nodeCallback=vw,n}}},provides:function(e){e.i2svg=function(n){var i=n.node,r=i===void 0?at:i,a=n.callback,o=a===void 0?function(){}:a;return Zm(r,o)},e.generateSvgReplacementMutation=function(n,i){var r=i.iconName,a=i.title,o=i.titleId,s=i.prefix,l=i.transform,u=i.symbol,c=i.mask,d=i.maskId,h=i.extra;return new Promise(function(p,g){Promise.all([Ld(r,s),c.iconName?Ld(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var m=jh(v,2),f=m[0],_=m[1];p([n,np({icons:{main:f,mask:_},prefix:s,iconName:r,transform:l,symbol:u,maskId:d,title:a,titleId:o,extra:h,watchable:!0})])}).catch(g)})},e.generateAbstractIcon=function(n){var i=n.children,r=n.attributes,a=n.main,o=n.transform,s=n.styles,l=Wu(s);l.length>0&&(r.style=l);var u;return Qh(o)&&(u=Pi("generateAbstractTransformGrouping",{main:a,transform:o,containerWidth:a.width,iconWidth:a.width})),i.push(u||a.icon),{children:i,attributes:r}}}},Sw={mixout:function(){return{layer:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.classes,a=r===void 0?[]:r;return Yu({type:"layer"},function(){jr("beforeDOMElementCreation",{assembler:n,params:i});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(_e.cssPrefix,"-layers")].concat(Es(a)).join(" ")},children:o}]})}}}},Ew={mixout:function(){return{counter:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.title,a=r===void 0?null:r,o=i.classes,s=o===void 0?[]:o,l=i.attributes,u=l===void 0?{}:l,c=i.styles,d=c===void 0?{}:c;return Yu({type:"counter",content:n},function(){return jr("beforeDOMElementCreation",{content:n,params:i}),tw({content:n.toString(),title:a,extra:{attributes:u,styles:d,classes:["".concat(_e.cssPrefix,"-layers-counter")].concat(Es(s))}})})}}}},Mw={mixout:function(){return{text:function(n){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=i.transform,a=r===void 0?ni:r,o=i.title,s=o===void 0?null:o,l=i.classes,u=l===void 0?[]:l,c=i.attributes,d=c===void 0?{}:c,h=i.styles,p=h===void 0?{}:h;return Yu({type:"text",content:n},function(){return jr("beforeDOMElementCreation",{content:n,params:i}),Xm({content:n,transform:me(me({},ni),a),title:s,extra:{attributes:d,styles:p,classes:["".concat(_e.cssPrefix,"-layers-text")].concat(Es(u))}})})}}},provides:function(e){e.generateLayersText=function(n,i){var r=i.title,a=i.transform,o=i.extra,s=null,l=null;if(ly){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();s=c.width/u,l=c.height/u}return _e.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Xm({content:n.innerHTML,width:s,height:l,transform:a,title:r,extra:o,watchable:!0})])}}},ww=new RegExp('"',"ug"),Qm=[1105920,1112319];function Tw(t){var e=t.replace(ww,""),n=k1(e,0),i=n>=Qm[0]&&n<=Qm[1],r=e.length===2?e[0]===e[1]:!1;return{value:bd(r?e[0]:e),isSecondary:i||r}}function Jm(t,e){var n="".concat(h1).concat(e.replace(":","-"));return new Promise(function(i,r){if(t.getAttribute(n)!==null)return i();var a=uo(t.children),o=a.filter(function(R){return R.getAttribute(Td)===e})[0],s=cr.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(_1),u=s.getPropertyValue("font-weight"),c=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),i();if(l&&c!=="none"&&c!==""){var d=s.getPropertyValue("content"),h=~["Sharp"].indexOf(l[2])?ht:it,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?cs[h][l[2].toLowerCase()]:y1[h][u],g=Tw(d),v=g.value,m=g.isSecondary,f=l[0].startsWith("FontAwesome"),_=ep(p,v),y=_;if(f){var E=X1(v);E.iconName&&E.prefix&&(_=E.iconName,p=E.prefix)}if(_&&!m&&(!o||o.getAttribute($h)!==p||o.getAttribute(qh)!==y)){t.setAttribute(n,y),o&&t.removeChild(o);var S=mw(),b=S.extra;b.attributes[Td]=e,Ld(_,p).then(function(R){var P=np(me(me({},S),{},{icons:{main:R,mask:tp()},prefix:p,iconName:y,extra:b,watchable:!0})),x=at.createElement("svg");e==="::before"?t.insertBefore(x,t.firstChild):t.appendChild(x),x.outerHTML=P.map(function(w){return ws(w)}).join(`
`),t.removeAttribute(n),i()}).catch(r)}else i()}else i()})}function bw(t){return Promise.all([Jm(t,"::before"),Jm(t,"::after")])}function Aw(t){return t.parentNode!==document.head&&!~m1.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Td)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function eg(t){if(Di)return new Promise(function(e,n){var i=uo(t.querySelectorAll("*")).filter(Aw).map(bw),r=ip.begin("searchPseudoElements");Cy(),Promise.all(i).then(function(){r(),Nd(),e()}).catch(function(){r(),Nd(),n()})})}var Rw={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=eg,n}}},provides:function(e){e.pseudoElements2svg=function(n){var i=n.node,r=i===void 0?at:i;_e.searchPseudoElements&&eg(r)}}},tg=!1,Cw={mixout:function(){return{dom:{unwatch:function(){Cy(),tg=!0}}}},hooks:function(){return{bootstrap:function(){qm(Rd("mutationObserverCallbacks",{}))},noAuto:function(){fw()},watch:function(n){var i=n.observeMutationsRoot;tg?Nd():qm(Rd("mutationObserverCallbacks",{observeMutationsRoot:i}))}}}},ng=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(i,r){var a=r.toLowerCase().split("-"),o=a[0],s=a.slice(1).join("-");if(o&&s==="h")return i.flipX=!0,i;if(o&&s==="v")return i.flipY=!0,i;if(s=parseFloat(s),isNaN(s))return i;switch(o){case"grow":i.size=i.size+s;break;case"shrink":i.size=i.size-s;break;case"left":i.x=i.x-s;break;case"right":i.x=i.x+s;break;case"up":i.y=i.y-s;break;case"down":i.y=i.y+s;break;case"rotate":i.rotate=i.rotate+s;break}return i},n)},Pw={mixout:function(){return{parse:{transform:function(n){return ng(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-transform");return r&&(n.transform=ng(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var i=n.main,r=n.transform,a=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(a/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),u="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),c="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},h={transform:"translate(".concat(o/2*-1," -256)")},p={outer:s,inner:d,path:h};return{tag:"g",attributes:me({},p.outer),children:[{tag:"g",attributes:me({},p.inner),children:[{tag:i.icon.tag,children:i.icon.children,attributes:me(me({},i.icon.attributes),p.path)}]}]}}}},zc={x:0,y:0,width:"100%",height:"100%"};function ig(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Lw(t){return t.tag==="g"?t.children:[t]}var Dw={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-mask"),a=r?ju(r.split(" ").map(function(o){return o.trim()})):tp();return a.prefix||(a.prefix=fr()),n.mask=a,n.maskId=i.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var i=n.children,r=n.attributes,a=n.main,o=n.mask,s=n.maskId,l=n.transform,u=a.width,c=a.icon,d=o.width,h=o.icon,p=P1({transform:l,containerWidth:d,iconWidth:u}),g={tag:"rect",attributes:me(me({},zc),{},{fill:"white"})},v=c.children?{children:c.children.map(ig)}:{},m={tag:"g",attributes:me({},p.inner),children:[ig(me({tag:c.tag,attributes:me(me({},c.attributes),p.path)},v))]},f={tag:"g",attributes:me({},p.outer),children:[m]},_="mask-".concat(s||hs()),y="clip-".concat(s||hs()),E={tag:"mask",attributes:me(me({},zc),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[g,f]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:Lw(h)},E]};return i.push(S,{tag:"rect",attributes:me({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(_,")")},zc)}),{children:i,attributes:r}}}},Nw={provides:function(e){var n=!1;cr.matchMedia&&(n=cr.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var i=[],r={fill:"currentColor"},a={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};i.push({tag:"path",attributes:me(me({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=me(me({},a),{},{attributeName:"opacity"}),s={tag:"circle",attributes:me(me({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:me(me({},a),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:me(me({},o),{},{values:"1;0;1;1;0;1;"})}),i.push(s),i.push({tag:"path",attributes:me(me({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:me(me({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||i.push({tag:"path",attributes:me(me({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:me(me({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:i}}}},Uw={hooks:function(){return{parseNodeAttributes:function(n,i){var r=i.getAttribute("data-fa-symbol"),a=r===null?!1:r===""?!0:r;return n.symbol=a,n}}}},Iw=[N1,xw,Sw,Ew,Mw,Rw,Cw,Pw,Dw,Nw,Uw];$1(Iw,{mixoutsTo:Sn});Sn.noAuto;Sn.config;Sn.library;Sn.dom;var Ud=Sn.parse;Sn.findIconDefinition;Sn.toHtml;var Ow=Sn.icon;Sn.layer;Sn.text;Sn.counter;var Ie={},Fw={get exports(){return Ie},set exports(t){Ie=t}},kw="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",zw=kw,Bw=zw;function Ly(){}function Dy(){}Dy.resetWarningCache=Ly;var Hw=function(){function t(i,r,a,o,s,l){if(l!==Bw){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Dy,resetWarningCache:Ly};return n.PropTypes=n,n};Fw.exports=Hw();function rg(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function qi(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?rg(Object(n),!0).forEach(function(i){Ua(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rg(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function Eu(t){return Eu=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Eu(t)}function Ua(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Gw(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,a;for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function Vw(t,e){if(t==null)return{};var n=Gw(t,e),i,r;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)i=a[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function Id(t){return Ww(t)||Xw(t)||jw(t)||Yw()}function Ww(t){if(Array.isArray(t))return Od(t)}function Xw(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function jw(t,e){if(t){if(typeof t=="string")return Od(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Od(t,e)}}function Od(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Yw(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function $w(t){var e,n=t.beat,i=t.fade,r=t.beatFade,a=t.bounce,o=t.shake,s=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,h=t.fixedWidth,p=t.inverse,g=t.border,v=t.listItem,m=t.flip,f=t.size,_=t.rotation,y=t.pull,E=(e={"fa-beat":n,"fa-fade":i,"fa-beat-fade":r,"fa-bounce":a,"fa-shake":o,"fa-flash":s,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":p,"fa-border":g,"fa-li":v,"fa-flip":m===!0,"fa-flip-horizontal":m==="horizontal"||m==="both","fa-flip-vertical":m==="vertical"||m==="both"},Ua(e,"fa-".concat(f),typeof f<"u"&&f!==null),Ua(e,"fa-rotate-".concat(_),typeof _<"u"&&_!==null&&_!==0),Ua(e,"fa-pull-".concat(y),typeof y<"u"&&y!==null),Ua(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(E).map(function(S){return E[S]?S:null}).filter(function(S){return S})}function qw(t){return t=t-0,t===t}function Ny(t){return qw(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var Kw=["style"];function Zw(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Qw(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var i=n.indexOf(":"),r=Ny(n.slice(0,i)),a=n.slice(i+1).trim();return r.startsWith("webkit")?e[Zw(r)]=a:e[r]=a,e},{})}function Uy(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(l){return Uy(t,l)}),r=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=Qw(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Ny(u)]=c}return l},{attrs:{}}),a=n.style,o=a===void 0?{}:a,s=Vw(n,Kw);return r.attrs.style=qi(qi({},r.attrs.style),o),t.apply(void 0,[e.tag,qi(qi({},r.attrs),s)].concat(Id(i)))}var Iy=!1;try{Iy=!0}catch{}function Jw(){if(!Iy&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ag(t){if(t&&Eu(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Ud.icon)return Ud.icon(t);if(t===null)return null;if(t&&Eu(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Bc(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ua({},t,e):{}}var $u=jn.forwardRef(function(t,e){var n=t.icon,i=t.mask,r=t.symbol,a=t.className,o=t.title,s=t.titleId,l=t.maskId,u=ag(n),c=Bc("classes",[].concat(Id($w(t)),Id(a.split(" ")))),d=Bc("transform",typeof t.transform=="string"?Ud.transform(t.transform):t.transform),h=Bc("mask",ag(i)),p=Ow(u,qi(qi(qi(qi({},c),d),h),{},{symbol:r,title:o,titleId:s,maskId:l}));if(!p)return Jw("Could not find icon",u),null;var g=p.abstract,v={ref:e};return Object.keys(t).forEach(function(m){$u.defaultProps.hasOwnProperty(m)||(v[m]=t[m])}),eT(g[0],v)});$u.displayName="FontAwesomeIcon";$u.propTypes={beat:Ie.bool,border:Ie.bool,beatFade:Ie.bool,bounce:Ie.bool,className:Ie.string,fade:Ie.bool,flash:Ie.bool,mask:Ie.oneOfType([Ie.object,Ie.array,Ie.string]),maskId:Ie.string,fixedWidth:Ie.bool,inverse:Ie.bool,flip:Ie.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Ie.oneOfType([Ie.object,Ie.array,Ie.string]),listItem:Ie.bool,pull:Ie.oneOf(["right","left"]),pulse:Ie.bool,rotation:Ie.oneOf([0,90,180,270]),shake:Ie.bool,size:Ie.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Ie.bool,spinPulse:Ie.bool,spinReverse:Ie.bool,symbol:Ie.oneOfType([Ie.bool,Ie.string]),title:Ie.string,titleId:Ie.string,transform:Ie.oneOfType([Ie.string,Ie.object]),swapOpacity:Ie.bool};$u.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var eT=Uy.bind(null,jn.createElement);const Oy=t=>$t("nav",{id:"nav",className:"nav",children:[Ee("img",{className:"logo",src:i1}),Ee("div",{className:"nav-items",children:$t("ul",{className:"nav-list",children:[Ee("li",{className:`nav-item ${t.class=="1"?"yes":"no"}`,children:"Upload"}),Ee("li",{className:`nav-item ${t.class=="2"?"yes":"no"}`,children:"Filter"}),Ee("li",{className:`nav-item ${t.class=="3"?"yes":"no"}`,children:"Visuals"})]})})]});var Fy={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},og=jn.createContext&&jn.createContext(Fy),ar=globalThis&&globalThis.__assign||function(){return ar=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++){e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t},ar.apply(this,arguments)},tT=globalThis&&globalThis.__rest||function(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n};function ky(t){return t&&t.map(function(e,n){return jn.createElement(e.tag,ar({key:n},e.attr),ky(e.child))})}function zy(t){return function(e){return jn.createElement(nT,ar({attr:ar({},t.attr)},e),ky(t.child))}}function nT(t){var e=function(n){var i=t.attr,r=t.size,a=t.title,o=tT(t,["attr","size","title"]),s=r||n.size||"1em",l;return n.className&&(l=n.className),t.className&&(l=(l?l+" ":"")+t.className),jn.createElement("svg",ar({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,o,{className:l,style:ar(ar({color:t.color||n.color},n.style),t.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),a&&jn.createElement("title",null,a),t.children)};return og!==void 0?jn.createElement(og.Consumer,null,function(n){return e(n)}):e(Fy)}function sg(t){return zy({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}},{tag:"polyline",attr:{points:"15 3 21 3 21 9"}},{tag:"line",attr:{x1:"10",y1:"14",x2:"21",y2:"3"}}]})(t)}function lg(t){return zy({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"}}]})(t)}const iT=()=>Ee("footer",{id:"footer",className:"footer",children:Ee("div",{className:"footer-items",children:$t("ul",{className:"footer-list",children:[Ee("li",{className:"footer-item li-link ",children:Ee("a",{href:"#",children:Ee(lg,{})})}),Ee("li",{className:"footer-item li-link",children:Ee("a",{href:"#",children:Ee(sg,{})})}),Ee("li",{children:Ee("p",{className:"footer-item copy",children:"@Copyright 2023 FL Variant"})}),Ee("li",{className:"footer-item li-link",children:Ee("a",{href:"#",children:Ee(sg,{})})}),Ee("li",{className:"footer-item li-link",children:Ee("a",{href:"#",children:Ee(lg,{})})})]})})});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ap="152",ta={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},na={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},rT=0,ug=1,aT=2,By=1,oT=2,mi=3,hr=0,sn=1,_i=2,or=0,Wa=1,cg=2,fg=3,dg=4,sT=5,ya=100,lT=101,uT=102,hg=103,pg=104,cT=200,fT=201,dT=202,hT=203,Hy=204,Gy=205,pT=206,mT=207,gT=208,vT=209,_T=210,yT=0,xT=1,ST=2,Fd=3,ET=4,MT=5,wT=6,TT=7,Vy=0,bT=1,AT=2,Ei=0,RT=1,CT=2,PT=3,LT=4,DT=5,Wy=300,to=301,no=302,kd=303,zd=304,qu=306,Bd=1e3,Vn=1001,Hd=1002,Kt=1003,mg=1004,Hc=1005,bn=1006,NT=1007,ps=1008,Yr=1009,UT=1010,IT=1011,Xy=1012,OT=1013,Nr=1014,Ur=1015,ms=1016,FT=1017,kT=1018,Xa=1020,zT=1021,Wn=1023,BT=1024,HT=1025,Fr=1026,io=1027,GT=1028,VT=1029,WT=1030,XT=1031,jT=1033,Gc=33776,Vc=33777,Wc=33778,Xc=33779,gg=35840,vg=35841,_g=35842,yg=35843,YT=36196,xg=37492,Sg=37496,Eg=37808,Mg=37809,wg=37810,Tg=37811,bg=37812,Ag=37813,Rg=37814,Cg=37815,Pg=37816,Lg=37817,Dg=37818,Ng=37819,Ug=37820,Ig=37821,jc=36492,$T=36283,Og=36284,Fg=36285,kg=36286,jy=3e3,kr=3001,qT=3200,KT=3201,ZT=0,QT=1,zr="",De="srgb",si="srgb-linear",Yy="display-p3",Yc=7680,JT=519,zg=35044,Bg="300 es",Gd=1035;class Jr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const a=r.indexOf(n);a!==-1&&r.splice(a,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let a=0,o=r.length;a<o;a++)r[a].call(this,e);e.target=null}}}const Ht=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],$c=Math.PI/180,Vd=180/Math.PI;function Ts(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ht[t&255]+Ht[t>>8&255]+Ht[t>>16&255]+Ht[t>>24&255]+"-"+Ht[e&255]+Ht[e>>8&255]+"-"+Ht[e>>16&15|64]+Ht[e>>24&255]+"-"+Ht[n&63|128]+Ht[n>>8&255]+"-"+Ht[n>>16&255]+Ht[n>>24&255]+Ht[i&255]+Ht[i>>8&255]+Ht[i>>16&255]+Ht[i>>24&255]).toLowerCase()}function Zt(t,e,n){return Math.max(e,Math.min(n,t))}function eb(t,e){return(t%e+e)%e}function qc(t,e,n){return(1-n)*t+n*e}function Hg(t){return(t&t-1)===0&&t!==0}function tb(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function rl(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function fn(t,e){switch(e.constructor){case Float32Array:return t;case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,n=0){Ve.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),a=this.x-e.x,o=this.y-e.y;return this.x=a*i-o*r+e.x,this.y=a*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,n,i,r,a,o,s,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=s,c[3]=n,c[4]=a,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,o=i[0],s=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],p=i[5],g=i[8],v=r[0],m=r[3],f=r[6],_=r[1],y=r[4],E=r[7],S=r[2],b=r[5],R=r[8];return a[0]=o*v+s*_+l*S,a[3]=o*m+s*y+l*b,a[6]=o*f+s*E+l*R,a[1]=u*v+c*_+d*S,a[4]=u*m+c*y+d*b,a[7]=u*f+c*E+d*R,a[2]=h*v+p*_+g*S,a[5]=h*m+p*y+g*b,a[8]=h*f+p*E+g*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*s*u-i*a*c+i*s*l+r*a*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],c=e[8],d=c*o-s*u,h=s*l-c*a,p=u*a-o*l,g=n*d+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*u-c*i)*v,e[2]=(s*i-r*o)*v,e[3]=h*v,e[4]=(c*n-r*l)*v,e[5]=(r*a-s*n)*v,e[6]=p*v,e[7]=(i*l-u*n)*v,e[8]=(o*n-i*a)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,a,o,s){const l=Math.cos(a),u=Math.sin(a);return this.set(i*l,i*u,-i*(l*o+u*s)+o+e,-r*u,r*l,-r*(-u*o+l*s)+s+n,0,0,1),this}scale(e,n){return this.premultiply(Kc.makeScale(e,n)),this}rotate(e){return this.premultiply(Kc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Kc.makeTranslation(e,n)),this}makeTranslation(e,n){return this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Kc=new Ge;function $y(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Mu(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Gg={};function Wo(t){t in Gg||(Gg[t]=!0,console.warn(t))}function ja(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Zc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const nb=new Ge().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ib=new Ge().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function rb(t){return t.convertSRGBToLinear().applyMatrix3(ib)}function ab(t){return t.applyMatrix3(nb).convertLinearToSRGB()}const ob={[si]:t=>t,[De]:t=>t.convertSRGBToLinear(),[Yy]:rb},sb={[si]:t=>t,[De]:t=>t.convertLinearToSRGB(),[Yy]:ab},In={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return si},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ob[e],r=sb[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let ia;class qy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ia===void 0&&(ia=Mu("canvas")),ia.width=e.width,ia.height=e.height;const i=ia.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ia}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Mu("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),a=r.data;for(let o=0;o<a.length;o++)a[o]=ja(a[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ja(n[i]/255)*255):n[i]=ja(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Ky{constructor(e=null){this.isSource=!0,this.uuid=Ts(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let o=0,s=r.length;o<s;o++)r[o].isDataTexture?a.push(Qc(r[o].image)):a.push(Qc(r[o]))}else a=Qc(r);i.url=a}return n||(e.images[this.uuid]=i),i}}function Qc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?qy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lb=0;class vn extends Jr{constructor(e=vn.DEFAULT_IMAGE,n=vn.DEFAULT_MAPPING,i=Vn,r=Vn,a=bn,o=ps,s=Wn,l=Yr,u=vn.DEFAULT_ANISOTROPY,c=zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=Ts(),this.name="",this.source=new Ky(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=a,this.minFilter=o,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Wo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===kr?De:zr),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wy)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bd:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case Hd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bd:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case Hd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Wo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===De?kr:jy}set encoding(e){Wo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===kr?De:zr}}vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Wy;vn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,n=0,i=0,r=1){Ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*a,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*a,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*a,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,a;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,E=(p+1)/2,S=(f+1)/2,b=(c+h)/4,R=(d+v)/4,P=(g+m)/4;return y>E&&y>S?y<.01?(i=0,r=.707106781,a=.707106781):(i=Math.sqrt(y),r=b/i,a=R/i):E>S?E<.01?(i=.707106781,r=0,a=.707106781):(r=Math.sqrt(E),i=b/r,a=P/r):S<.01?(i=.707106781,r=.707106781,a=0):(a=Math.sqrt(S),i=R/a,r=P/a),this.set(i,r,a,n),this}let _=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-c)*(h-c));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-v)/_,this.z=(h-c)/_,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class $r extends Jr{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ut(0,0,e,n),this.scissorTest=!1,this.viewport=new Ut(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(Wo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===kr?De:zr),this.texture=new vn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:bn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Ky(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zy extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ub extends vn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,a,o,s){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=a[o+0],p=a[o+1],g=a[o+2],v=a[o+3];if(s===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(s===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=v;return}if(d!==v||l!==h||u!==p||c!==g){let m=1-s;const f=l*h+u*p+c*g+d*v,_=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const S=Math.sqrt(y),b=Math.atan2(S,f*_);m=Math.sin(m*b)/S,s=Math.sin(s*b)/S}const E=s*_;if(l=l*m+h*E,u=u*m+p*E,c=c*m+g*E,d=d*m+v*E,m===1-s){const S=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=S,u*=S,c*=S,d*=S}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,a,o){const s=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=a[o],h=a[o+1],p=a[o+2],g=a[o+3];return e[n]=s*g+c*d+l*p-u*h,e[n+1]=l*g+c*h+u*d-s*p,e[n+2]=u*g+c*p+s*h-l*d,e[n+3]=c*g-s*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,a=e._z,o=e._order,s=Math.cos,l=Math.sin,u=s(i/2),c=s(r/2),d=s(a/2),h=l(i/2),p=l(r/2),g=l(a/2);switch(o){case"XYZ":this._x=h*c*d+u*p*g,this._y=u*p*d-h*c*g,this._z=u*c*g+h*p*d,this._w=u*c*d-h*p*g;break;case"YXZ":this._x=h*c*d+u*p*g,this._y=u*p*d-h*c*g,this._z=u*c*g-h*p*d,this._w=u*c*d+h*p*g;break;case"ZXY":this._x=h*c*d-u*p*g,this._y=u*p*d+h*c*g,this._z=u*c*g+h*p*d,this._w=u*c*d-h*p*g;break;case"ZYX":this._x=h*c*d-u*p*g,this._y=u*p*d+h*c*g,this._z=u*c*g-h*p*d,this._w=u*c*d+h*p*g;break;case"YZX":this._x=h*c*d+u*p*g,this._y=u*p*d+h*c*g,this._z=u*c*g-h*p*d,this._w=u*c*d-h*p*g;break;case"XZY":this._x=h*c*d-u*p*g,this._y=u*p*d-h*c*g,this._z=u*c*g+h*p*d,this._w=u*c*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],a=n[8],o=n[1],s=n[5],l=n[9],u=n[2],c=n[6],d=n[10],h=i+s+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(a-u)*p,this._z=(o-r)*p}else if(i>s&&i>d){const p=2*Math.sqrt(1+i-s-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(a+u)/p}else if(s>d){const p=2*Math.sqrt(1+s-i-d);this._w=(a-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-s);this._w=(o-r)/p,this._x=(a+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,a=e._z,o=e._w,s=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*s+r*u-a*l,this._y=r*c+o*l+a*s-i*u,this._z=a*c+o*u+i*l-r*s,this._w=o*c-i*s-r*l-a*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,a=this._z,o=this._w;let s=o*e._w+i*e._x+r*e._y+a*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=o,this._x=i,this._y=r,this._z=a,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*a+n*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,s),d=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=a*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),a=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(a),i*Math.cos(a),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,n=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Vg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Vg.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[3]*i+a[6]*r,this.y=a[1]*n+a[4]*i+a[7]*r,this.z=a[2]*n+a[5]*i+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,a=e.elements,o=1/(a[3]*n+a[7]*i+a[11]*r+a[15]);return this.x=(a[0]*n+a[4]*i+a[8]*r+a[12])*o,this.y=(a[1]*n+a[5]*i+a[9]*r+a[13])*o,this.z=(a[2]*n+a[6]*i+a[10]*r+a[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,a=e.x,o=e.y,s=e.z,l=e.w,u=l*n+o*r-s*i,c=l*i+s*n-a*r,d=l*r+a*i-o*n,h=-a*n-o*i-s*r;return this.x=u*l+h*-a+c*-s-d*-o,this.y=c*l+h*-o+d*-a-u*-s,this.z=d*l+h*-s+u*-o-c*-a,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r,this.y=a[1]*n+a[5]*i+a[9]*r,this.z=a[2]*n+a[6]*i+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,a=e.z,o=n.x,s=n.y,l=n.z;return this.x=r*l-a*s,this.y=a*o-i*l,this.z=i*s-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Jc.copy(this).projectOnVector(e),this.sub(Jc)}reflect(e){return this.sub(Jc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jc=new F,Vg=new qr;class bs{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ci.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ci.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ci.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ra.copy(e.boundingBox),ra.applyMatrix4(e.matrixWorld),this.union(ra);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const a=r.attributes.position;for(let o=0,s=a.count;o<s;o++)ci.fromBufferAttribute(a,o).applyMatrix4(e.matrixWorld),this.expandByPoint(ci)}else r.boundingBox===null&&r.computeBoundingBox(),ra.copy(r.boundingBox),ra.applyMatrix4(e.matrixWorld),this.union(ra)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ci),ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Eo),al.subVectors(this.max,Eo),aa.subVectors(e.a,Eo),oa.subVectors(e.b,Eo),sa.subVectors(e.c,Eo),Fi.subVectors(oa,aa),ki.subVectors(sa,oa),xr.subVectors(aa,sa);let n=[0,-Fi.z,Fi.y,0,-ki.z,ki.y,0,-xr.z,xr.y,Fi.z,0,-Fi.x,ki.z,0,-ki.x,xr.z,0,-xr.x,-Fi.y,Fi.x,0,-ki.y,ki.x,0,-xr.y,xr.x,0];return!ef(n,aa,oa,sa,al)||(n=[1,0,0,0,1,0,0,0,1],!ef(n,aa,oa,sa,al))?!1:(ol.crossVectors(Fi,ki),n=[ol.x,ol.y,ol.z],ef(n,aa,oa,sa,al))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new F,new F,new F,new F,new F,new F,new F,new F],ci=new F,ra=new bs,aa=new F,oa=new F,sa=new F,Fi=new F,ki=new F,xr=new F,Eo=new F,al=new F,ol=new F,Sr=new F;function ef(t,e,n,i,r){for(let a=0,o=t.length-3;a<=o;a+=3){Sr.fromArray(t,a);const s=r.x*Math.abs(Sr.x)+r.y*Math.abs(Sr.y)+r.z*Math.abs(Sr.z),l=e.dot(Sr),u=n.dot(Sr),c=i.dot(Sr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>s)return!1}return!0}const cb=new bs,Mo=new F,tf=new F;class Ku{constructor(e=new F,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):cb.setFromPoints(e).getCenter(i);let r=0;for(let a=0,o=e.length;a<o;a++)r=Math.max(r,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mo.subVectors(e,this.center);const n=Mo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Mo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mo.copy(e.center).add(tf)),this.expandByPoint(Mo.copy(e.center).sub(tf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new F,nf=new F,sl=new F,zi=new F,rf=new F,ll=new F,af=new F;class Qy{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,n),fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){nf.copy(e).add(n).multiplyScalar(.5),sl.copy(n).sub(e).normalize(),zi.copy(this.origin).sub(nf);const a=e.distanceTo(n)*.5,o=-this.direction.dot(sl),s=zi.dot(this.direction),l=-zi.dot(sl),u=zi.lengthSq(),c=Math.abs(1-o*o);let d,h,p,g;if(c>0)if(d=o*l-s,h=o*s-l,g=a*c,d>=0)if(h>=-g)if(h<=g){const v=1/c;d*=v,h*=v,p=d*(d+o*h+2*s)+h*(o*d+h+2*l)+u}else h=a,d=Math.max(0,-(o*h+s)),p=-d*d+h*(h+2*l)+u;else h=-a,d=Math.max(0,-(o*h+s)),p=-d*d+h*(h+2*l)+u;else h<=-g?(d=Math.max(0,-(-o*a+s)),h=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+h*(h+2*l)+u):h<=g?(d=0,h=Math.min(Math.max(-a,-l),a),p=h*(h+2*l)+u):(d=Math.max(0,-(o*a+s)),h=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+h*(h+2*l)+u);else h=o>0?-a:a,d=Math.max(0,-(o*h+s)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(nf).addScaledVector(sl,h),p}intersectSphere(e,n){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,a=e.radius*e.radius;if(r>a)return null;const o=Math.sqrt(a-r),s=i-o,l=i+o;return l<0?null:s<0?this.at(l,n):this.at(s,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,a,o,s,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(a=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(a=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||a>r||((a>i||isNaN(i))&&(i=a),(o<r||isNaN(r))&&(r=o),d>=0?(s=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(s=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,n,i,r,a){rf.subVectors(n,e),ll.subVectors(i,e),af.crossVectors(rf,ll);let o=this.direction.dot(af),s;if(o>0){if(r)return null;s=1}else if(o<0)s=-1,o=-o;else return null;zi.subVectors(this.origin,e);const l=s*this.direction.dot(ll.crossVectors(zi,ll));if(l<0)return null;const u=s*this.direction.dot(rf.cross(zi));if(u<0||l+u>o)return null;const c=-s*zi.dot(af);return c<0?null:this.at(c/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,n,i,r,a,o,s,l,u,c,d,h,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=a,f[5]=o,f[9]=s,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/la.setFromMatrixColumn(e,0).length(),a=1/la.setFromMatrixColumn(e,1).length(),o=1/la.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*a,n[5]=i[5]*a,n[6]=i[6]*a,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,a=e.z,o=Math.cos(i),s=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const h=o*c,p=o*d,g=s*c,v=s*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=p+g*u,n[5]=h-v*u,n[9]=-s*l,n[2]=v-h*u,n[6]=g+p*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*d,g=u*c,v=u*d;n[0]=h+v*s,n[4]=g*s-p,n[8]=o*u,n[1]=o*d,n[5]=o*c,n[9]=-s,n[2]=p*s-g,n[6]=v+h*s,n[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*d,g=u*c,v=u*d;n[0]=h-v*s,n[4]=-o*d,n[8]=g+p*s,n[1]=p+g*s,n[5]=o*c,n[9]=v-h*s,n[2]=-o*u,n[6]=s,n[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*d,g=s*c,v=s*d;n[0]=l*c,n[4]=g*u-p,n[8]=h*u+v,n[1]=l*d,n[5]=v*u+h,n[9]=p*u-g,n[2]=-u,n[6]=s*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,g=s*l,v=s*u;n[0]=l*c,n[4]=v-h*d,n[8]=g*d+p,n[1]=d,n[5]=o*c,n[9]=-s*c,n[2]=-u*c,n[6]=p*d+g,n[10]=h-v*d}else if(e.order==="XZY"){const h=o*l,p=o*u,g=s*l,v=s*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=h*d+v,n[5]=o*c,n[9]=p*d-g,n[2]=g*d-p,n[6]=s*c,n[10]=v*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fb,e,db)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),Bi.crossVectors(i,dn),Bi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),Bi.crossVectors(i,dn)),Bi.normalize(),ul.crossVectors(dn,Bi),r[0]=Bi.x,r[4]=ul.x,r[8]=dn.x,r[1]=Bi.y,r[5]=ul.y,r[9]=dn.y,r[2]=Bi.z,r[6]=ul.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,a=this.elements,o=i[0],s=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],_=i[3],y=i[7],E=i[11],S=i[15],b=r[0],R=r[4],P=r[8],x=r[12],w=r[1],Y=r[5],$=r[9],U=r[13],G=r[2],j=r[6],te=r[10],Q=r[14],N=r[3],B=r[7],k=r[11],fe=r[15];return a[0]=o*b+s*w+l*G+u*N,a[4]=o*R+s*Y+l*j+u*B,a[8]=o*P+s*$+l*te+u*k,a[12]=o*x+s*U+l*Q+u*fe,a[1]=c*b+d*w+h*G+p*N,a[5]=c*R+d*Y+h*j+p*B,a[9]=c*P+d*$+h*te+p*k,a[13]=c*x+d*U+h*Q+p*fe,a[2]=g*b+v*w+m*G+f*N,a[6]=g*R+v*Y+m*j+f*B,a[10]=g*P+v*$+m*te+f*k,a[14]=g*x+v*U+m*Q+f*fe,a[3]=_*b+y*w+E*G+S*N,a[7]=_*R+y*Y+E*j+S*B,a[11]=_*P+y*$+E*te+S*k,a[15]=_*x+y*U+E*Q+S*fe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],a=e[12],o=e[1],s=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+a*l*d-r*u*d-a*s*h+i*u*h+r*s*p-i*l*p)+v*(+n*l*p-n*u*h+a*o*h-r*o*p+r*u*c-a*l*c)+m*(+n*u*d-n*s*p-a*o*d+i*o*p+a*s*c-i*u*c)+f*(-r*s*c-n*l*d+n*s*h+r*o*d-i*o*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],a=e[3],o=e[4],s=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],_=d*m*u-v*h*u+v*l*p-s*m*p-d*l*f+s*h*f,y=g*h*u-c*m*u-g*l*p+o*m*p+c*l*f-o*h*f,E=c*v*u-g*d*u+g*s*p-o*v*p-c*s*f+o*d*f,S=g*d*l-c*v*l-g*s*h+o*v*h+c*s*m-o*d*m,b=n*_+i*y+r*E+a*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=_*R,e[1]=(v*h*a-d*m*a-v*r*p+i*m*p+d*r*f-i*h*f)*R,e[2]=(s*m*a-v*l*a+v*r*u-i*m*u-s*r*f+i*l*f)*R,e[3]=(d*l*a-s*h*a-d*r*u+i*h*u+s*r*p-i*l*p)*R,e[4]=y*R,e[5]=(c*m*a-g*h*a+g*r*p-n*m*p-c*r*f+n*h*f)*R,e[6]=(g*l*a-o*m*a-g*r*u+n*m*u+o*r*f-n*l*f)*R,e[7]=(o*h*a-c*l*a+c*r*u-n*h*u-o*r*p+n*l*p)*R,e[8]=E*R,e[9]=(g*d*a-c*v*a-g*i*p+n*v*p+c*i*f-n*d*f)*R,e[10]=(o*v*a-g*s*a+g*i*u-n*v*u-o*i*f+n*s*f)*R,e[11]=(c*s*a-o*d*a-c*i*u+n*d*u+o*i*p-n*s*p)*R,e[12]=S*R,e[13]=(c*v*r-g*d*r+g*i*h-n*v*h-c*i*m+n*d*m)*R,e[14]=(g*s*r-o*v*r-g*i*l+n*v*l+o*i*m-n*s*m)*R,e[15]=(o*d*r-c*s*r+c*i*l-n*d*l-o*i*h+n*s*h)*R,this}scale(e){const n=this.elements,i=e.x,r=e.y,a=e.z;return n[0]*=i,n[4]*=r,n[8]*=a,n[1]*=i,n[5]*=r,n[9]*=a,n[2]*=i,n[6]*=r,n[10]*=a,n[3]*=i,n[7]*=r,n[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),a=1-i,o=e.x,s=e.y,l=e.z,u=a*o,c=a*s;return this.set(u*o+i,u*s-r*l,u*l+r*s,0,u*s+r*l,c*s+i,c*l-r*o,0,u*l-r*s,c*l+r*o,a*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,a,o){return this.set(1,i,a,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,a=n._x,o=n._y,s=n._z,l=n._w,u=a+a,c=o+o,d=s+s,h=a*u,p=a*c,g=a*d,v=o*c,m=o*d,f=s*d,_=l*u,y=l*c,E=l*d,S=i.x,b=i.y,R=i.z;return r[0]=(1-(v+f))*S,r[1]=(p+E)*S,r[2]=(g-y)*S,r[3]=0,r[4]=(p-E)*b,r[5]=(1-(h+f))*b,r[6]=(m+_)*b,r[7]=0,r[8]=(g+y)*R,r[9]=(m-_)*R,r[10]=(1-(h+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let a=la.set(r[0],r[1],r[2]).length();const o=la.set(r[4],r[5],r[6]).length(),s=la.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],On.copy(this);const u=1/a,c=1/o,d=1/s;return On.elements[0]*=u,On.elements[1]*=u,On.elements[2]*=u,On.elements[4]*=c,On.elements[5]*=c,On.elements[6]*=c,On.elements[8]*=d,On.elements[9]*=d,On.elements[10]*=d,n.setFromRotationMatrix(On),i.x=a,i.y=o,i.z=s,this}makePerspective(e,n,i,r,a,o){const s=this.elements,l=2*a/(n-e),u=2*a/(i-r),c=(n+e)/(n-e),d=(i+r)/(i-r),h=-(o+a)/(o-a),p=-2*o*a/(o-a);return s[0]=l,s[4]=0,s[8]=c,s[12]=0,s[1]=0,s[5]=u,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=h,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,n,i,r,a,o){const s=this.elements,l=1/(n-e),u=1/(i-r),c=1/(o-a),d=(n+e)*l,h=(i+r)*u,p=(o+a)*c;return s[0]=2*l,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*u,s[9]=0,s[13]=-h,s[2]=0,s[6]=0,s[10]=-2*c,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const la=new F,On=new Dt,fb=new F(0,0,0),db=new F(1,1,1),Bi=new F,ul=new F,dn=new F,Wg=new Dt,Xg=new qr;class Zu{constructor(e=0,n=0,i=0,r=Zu.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,a=r[0],o=r[4],s=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Zt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-Zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(s,a)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Wg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Xg.setFromEuler(this),this.setFromQuaternion(Xg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zu.DEFAULT_ORDER="XYZ";class Jy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hb=0;const jg=new F,ua=new qr,di=new Dt,cl=new F,wo=new F,pb=new F,mb=new qr,Yg=new F(1,0,0),$g=new F(0,1,0),qg=new F(0,0,1),gb={type:"added"},Kg={type:"removed"};class ln extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hb++}),this.uuid=Ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ln.DEFAULT_UP.clone();const e=new F,n=new Zu,i=new qr,r=new F(1,1,1);function a(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new Ge}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Jy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ua.setFromAxisAngle(e,n),this.quaternion.multiply(ua),this}rotateOnWorldAxis(e,n){return ua.setFromAxisAngle(e,n),this.quaternion.premultiply(ua),this}rotateX(e){return this.rotateOnAxis(Yg,e)}rotateY(e){return this.rotateOnAxis($g,e)}rotateZ(e){return this.rotateOnAxis(qg,e)}translateOnAxis(e,n){return jg.copy(e).applyQuaternion(this.quaternion),this.position.add(jg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Yg,e)}translateY(e){return this.translateOnAxis($g,e)}translateZ(e){return this.translateOnAxis(qg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?cl.copy(e):cl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(wo,cl,this.up):di.lookAt(cl,wo,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),ua.setFromRotationMatrix(di),this.quaternion.premultiply(ua.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(gb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Kg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Kg)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,a=this.children.length;r<a;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,pb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,mb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const a=n[i];(a.matrixWorldAutoUpdate===!0||e===!0)&&a.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++){const s=r[a];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function a(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,u=this.material.length;l<u;l++)s.push(a(e.materials,this.material[l]));r.material=s}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(a(e.animations,l))}}if(n){const s=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(s){const l=[];for(const u in s){const c=s[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ln.DEFAULT_UP=new F(0,1,0);ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fn=new F,hi=new F,of=new F,pi=new F,ca=new F,fa=new F,Zg=new F,sf=new F,lf=new F,uf=new F;let fl=!1;class Gn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Fn.subVectors(e,n),r.cross(Fn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,n,i,r,a){Fn.subVectors(r,n),hi.subVectors(i,n),of.subVectors(e,n);const o=Fn.dot(Fn),s=Fn.dot(hi),l=Fn.dot(of),u=hi.dot(hi),c=hi.dot(of),d=o*u-s*s;if(d===0)return a.set(-2,-1,-1);const h=1/d,p=(u*l-s*c)*h,g=(o*c-s*l)*h;return a.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,pi),pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getUV(e,n,i,r,a,o,s,l){return fl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fl=!0),this.getInterpolation(e,n,i,r,a,o,s,l)}static getInterpolation(e,n,i,r,a,o,s,l){return this.getBarycoord(e,n,i,r,pi),l.setScalar(0),l.addScaledVector(a,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(s,pi.z),l}static isFrontFacing(e,n,i,r){return Fn.subVectors(i,n),hi.subVectors(e,n),Fn.cross(hi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Fn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,a){return fl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),fl=!0),Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}getInterpolation(e,n,i,r,a){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,a)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,a=this.c;let o,s;ca.subVectors(r,i),fa.subVectors(a,i),sf.subVectors(e,i);const l=ca.dot(sf),u=fa.dot(sf);if(l<=0&&u<=0)return n.copy(i);lf.subVectors(e,r);const c=ca.dot(lf),d=fa.dot(lf);if(c>=0&&d<=c)return n.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(ca,o);uf.subVectors(e,a);const p=ca.dot(uf),g=fa.dot(uf);if(g>=0&&p<=g)return n.copy(a);const v=p*u-l*g;if(v<=0&&u>=0&&g<=0)return s=u/(u-g),n.copy(i).addScaledVector(fa,s);const m=c*g-p*d;if(m<=0&&d-c>=0&&p-g>=0)return Zg.subVectors(a,r),s=(d-c)/(d-c+(p-g)),n.copy(r).addScaledVector(Zg,s);const f=1/(m+v+h);return o=v*f,s=h*f,n.copy(i).addScaledVector(ca,o).addScaledVector(fa,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let vb=0;class As extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vb++}),this.uuid=Ts(),this.name="",this.type="Material",this.blending=Wa,this.side=hr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Hy,this.blendDst=Gy,this.blendEquation=ya,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Fd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=JT,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yc,this.stencilZFail=Yc,this.stencilZPass=Yc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Wa&&(i.blending=this.blending),this.side!==hr&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(a){const o=[];for(const s in a){const l=a[s];delete l.metadata,o.push(l)}return o}if(n){const a=r(e.textures),o=r(e.images);a.length>0&&(i.textures=a),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let a=0;a!==r;++a)i[a]=n[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ex={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},dl={h:0,s:0,l:0};function cf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class et{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,n===void 0&&i===void 0?this.set(e):this.setRGB(e,n,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=De){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,In.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=In.workingColorSpace){return this.r=e,this.g=n,this.b=i,In.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=In.workingColorSpace){if(e=eb(e,1),n=Zt(n,0,1),i=Zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+n):i+n-i*n,o=2*i-a;this.r=cf(o,a,e+1/3),this.g=cf(o,a,e),this.b=cf(o,a,e-1/3)}return In.toWorkingColorSpace(this,r),this}setStyle(e,n=De){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const o=r[1],s=r[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,n);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,n);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(a,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=De){const i=ex[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ja(e.r),this.g=ja(e.g),this.b=ja(e.b),this}copyLinearToSRGB(e){return this.r=Zc(e.r),this.g=Zc(e.g),this.b=Zc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=De){return In.fromWorkingColorSpace(Gt.copy(this),e),Math.round(Zt(Gt.r*255,0,255))*65536+Math.round(Zt(Gt.g*255,0,255))*256+Math.round(Zt(Gt.b*255,0,255))}getHexString(e=De){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=In.workingColorSpace){In.fromWorkingColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,a=Gt.b,o=Math.max(i,r,a),s=Math.min(i,r,a);let l,u;const c=(s+o)/2;if(s===o)l=0,u=0;else{const d=o-s;switch(u=c<=.5?d/(o+s):d/(2-o-s),o){case i:l=(r-a)/d+(r<a?6:0);break;case r:l=(a-i)/d+2;break;case a:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=In.workingColorSpace){return In.fromWorkingColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=De){In.fromWorkingColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==De?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(kn),kn.h+=e,kn.s+=n,kn.l+=i,this.setHSL(kn.h,kn.s,kn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(kn),e.getHSL(dl);const i=qc(kn.h,dl.h,n),r=qc(kn.s,dl.s,n),a=qc(kn.l,dl.l,n);return this.setHSL(i,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,a=e.elements;return this.r=a[0]*n+a[3]*i+a[6]*r,this.g=a[1]*n+a[4]*i+a[7]*r,this.b=a[2]*n+a[5]*i+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new et;et.NAMES=ex;class tx extends As{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Vy,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const xt=new F,hl=new Ve;class oi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=zg,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)hl.fromBufferAttribute(this,n),hl.applyMatrix3(e),this.setXY(n,hl.x,hl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix3(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyMatrix4(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.applyNormalMatrix(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)xt.fromBufferAttribute(this,n),xt.transformDirection(e),this.setXYZ(n,xt.x,xt.y,xt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=rl(n,this.array)),n}setX(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=rl(n,this.array)),n}setY(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=rl(n,this.array)),n}setZ(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=rl(n,this.array)),n}setW(e,n){return this.normalized&&(n=fn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,a){return e*=this.itemSize,this.normalized&&(n=fn(n,this.array),i=fn(i,this.array),r=fn(r,this.array),a=fn(a,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zg&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class nx extends oi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ix extends oi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class sr extends oi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let _b=0;const Mn=new Dt,ff=new ln,da=new F,hn=new bs,To=new bs,Ct=new F;class Ni extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=Ts(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($y(e)?ix:nx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ge().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return ff.lookAt(e),ff.updateMatrix(),this.applyMatrix4(ff.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(da).negate(),this.translate(da.x,da.y,da.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new sr(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const a=n[i];hn.setFromBufferAttribute(a),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ku);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let a=0,o=n.length;a<o;a++){const s=n[a];To.setFromBufferAttribute(s),this.morphTargetsRelative?(Ct.addVectors(hn.min,To.min),hn.expandByPoint(Ct),Ct.addVectors(hn.max,To.max),hn.expandByPoint(Ct)):(hn.expandByPoint(To.min),hn.expandByPoint(To.max))}hn.getCenter(i);let r=0;for(let a=0,o=e.count;a<o;a++)Ct.fromBufferAttribute(e,a),r=Math.max(r,i.distanceToSquared(Ct));if(n)for(let a=0,o=n.length;a<o;a++){const s=n[a],l=this.morphTargetsRelative;for(let u=0,c=s.count;u<c;u++)Ct.fromBufferAttribute(s,u),l&&(da.fromBufferAttribute(e,u),Ct.add(da)),r=Math.max(r,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,a=n.normal.array,o=n.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let w=0;w<s;w++)u[w]=new F,c[w]=new F;const d=new F,h=new F,p=new F,g=new Ve,v=new Ve,m=new Ve,f=new F,_=new F;function y(w,Y,$){d.fromArray(r,w*3),h.fromArray(r,Y*3),p.fromArray(r,$*3),g.fromArray(o,w*2),v.fromArray(o,Y*2),m.fromArray(o,$*2),h.sub(d),p.sub(d),v.sub(g),m.sub(g);const U=1/(v.x*m.y-m.x*v.y);isFinite(U)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(U),_.copy(p).multiplyScalar(v.x).addScaledVector(h,-m.x).multiplyScalar(U),u[w].add(f),u[Y].add(f),u[$].add(f),c[w].add(_),c[Y].add(_),c[$].add(_))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let w=0,Y=E.length;w<Y;++w){const $=E[w],U=$.start,G=$.count;for(let j=U,te=U+G;j<te;j+=3)y(i[j+0],i[j+1],i[j+2])}const S=new F,b=new F,R=new F,P=new F;function x(w){R.fromArray(a,w*3),P.copy(R);const Y=u[w];S.copy(Y),S.sub(R.multiplyScalar(R.dot(Y))).normalize(),b.crossVectors(P,Y);const U=b.dot(c[w])<0?-1:1;l[w*4]=S.x,l[w*4+1]=S.y,l[w*4+2]=S.z,l[w*4+3]=U}for(let w=0,Y=E.length;w<Y;++w){const $=E[w],U=$.start,G=$.count;for(let j=U,te=U+G;j<te;j+=3)x(i[j+0]),x(i[j+1]),x(i[j+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new oi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new F,a=new F,o=new F,s=new F,l=new F,u=new F,c=new F,d=new F;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),a.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),c.subVectors(o,a),d.subVectors(r,a),c.cross(d),s.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,m),s.add(c),l.add(c),u.add(c),i.setXYZ(g,s.x,s.y,s.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),a.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),c.subVectors(o,a),d.subVectors(r,a),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ct.fromBufferAttribute(e,n),Ct.normalize(),e.setXYZ(n,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(s,l){const u=s.array,c=s.itemSize,d=s.normalized,h=new u.constructor(l.length*c);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){s.isInterleavedBufferAttribute?p=l[v]*s.data.stride+s.offset:p=l[v]*c;for(let f=0;f<c;f++)h[g++]=u[p++]}return new oi(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ni,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],u=e(l,i);n.setAttribute(s,u)}const a=this.morphAttributes;for(const s in a){const l=[],u=a[s];for(let c=0,d=u.length;c<d;c++){const h=u[c],p=e(h,i);l.push(p)}n.morphAttributes[s]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let s=0,l=o.length;s<l;s++){const u=o[s];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let a=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const a=e.morphAttributes;for(const u in a){const c=[],d=a[u];for(let h=0,p=d.length;h<p;h++)c.push(d[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qg=new Dt,Qn=new Qy,pl=new Ku,Jg=new F,ha=new F,pa=new F,ma=new F,df=new F,ml=new F,gl=new Ve,vl=new Ve,_l=new Ve,ev=new F,tv=new F,nv=new F,yl=new F,xl=new F;class Ki extends ln{constructor(e=new Ni,n=new tx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,a=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(a&&s){ml.set(0,0,0);for(let l=0,u=a.length;l<u;l++){const c=s[l],d=a[l];c!==0&&(df.fromBufferAttribute(d,e),o?ml.addScaledVector(df,c):ml.addScaledVector(df.sub(n),c))}n.add(ml)}return n}raycast(e,n){const i=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),pl.copy(i.boundingSphere),pl.applyMatrix4(a),Qn.copy(e.ray).recast(e.near),!(pl.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(pl,Jg)===null||Qn.origin.distanceToSquared(Jg)>(e.far-e.near)**2))&&(Qg.copy(a).invert(),Qn.copy(e.ray).applyMatrix4(Qg),!(i.boundingBox!==null&&Qn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n)))}_computeIntersections(e,n){let i;const r=this.geometry,a=this.material,o=r.index,s=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,c=r.attributes.normal,d=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,g=d.length;p<g;p++){const v=d[p],m=a[v.materialIndex],f=Math.max(v.start,h.start),_=Math.min(o.count,Math.min(v.start+v.count,h.start+h.count));for(let y=f,E=_;y<E;y+=3){const S=o.getX(y),b=o.getX(y+1),R=o.getX(y+2);i=Sl(this,m,e,Qn,l,u,c,S,b,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=v.materialIndex,n.push(i))}}else{const p=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let v=p,m=g;v<m;v+=3){const f=o.getX(v),_=o.getX(v+1),y=o.getX(v+2);i=Sl(this,a,e,Qn,l,u,c,f,_,y),i&&(i.faceIndex=Math.floor(v/3),n.push(i))}}else if(s!==void 0)if(Array.isArray(a))for(let p=0,g=d.length;p<g;p++){const v=d[p],m=a[v.materialIndex],f=Math.max(v.start,h.start),_=Math.min(s.count,Math.min(v.start+v.count,h.start+h.count));for(let y=f,E=_;y<E;y+=3){const S=y,b=y+1,R=y+2;i=Sl(this,m,e,Qn,l,u,c,S,b,R),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=v.materialIndex,n.push(i))}}else{const p=Math.max(0,h.start),g=Math.min(s.count,h.start+h.count);for(let v=p,m=g;v<m;v+=3){const f=v,_=v+1,y=v+2;i=Sl(this,a,e,Qn,l,u,c,f,_,y),i&&(i.faceIndex=Math.floor(v/3),n.push(i))}}}}function yb(t,e,n,i,r,a,o,s){let l;if(e.side===sn?l=i.intersectTriangle(o,a,r,!0,s):l=i.intersectTriangle(r,a,o,e.side===hr,s),l===null)return null;xl.copy(s),xl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(xl);return u<n.near||u>n.far?null:{distance:u,point:xl.clone(),object:t}}function Sl(t,e,n,i,r,a,o,s,l,u){t.getVertexPosition(s,ha),t.getVertexPosition(l,pa),t.getVertexPosition(u,ma);const c=yb(t,e,n,i,ha,pa,ma,yl);if(c){r&&(gl.fromBufferAttribute(r,s),vl.fromBufferAttribute(r,l),_l.fromBufferAttribute(r,u),c.uv=Gn.getInterpolation(yl,ha,pa,ma,gl,vl,_l,new Ve)),a&&(gl.fromBufferAttribute(a,s),vl.fromBufferAttribute(a,l),_l.fromBufferAttribute(a,u),c.uv1=Gn.getInterpolation(yl,ha,pa,ma,gl,vl,_l,new Ve),c.uv2=c.uv1),o&&(ev.fromBufferAttribute(o,s),tv.fromBufferAttribute(o,l),nv.fromBufferAttribute(o,u),c.normal=Gn.getInterpolation(yl,ha,pa,ma,ev,tv,nv,new F),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a:s,b:l,c:u,normal:new F,materialIndex:0};Gn.getNormal(ha,pa,ma,d.normal),c.face=d}return c}class Rs extends Ni{constructor(e=1,n=1,i=1,r=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:a,depthSegments:o};const s=this;r=Math.floor(r),a=Math.floor(a),o=Math.floor(o);const l=[],u=[],c=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,o,a,0),g("z","y","x",1,-1,i,n,-e,o,a,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,a,4),g("x","y","z",-1,-1,e,n,-i,r,a,5),this.setIndex(l),this.setAttribute("position",new sr(u,3)),this.setAttribute("normal",new sr(c,3)),this.setAttribute("uv",new sr(d,2));function g(v,m,f,_,y,E,S,b,R,P,x){const w=E/R,Y=S/P,$=E/2,U=S/2,G=b/2,j=R+1,te=P+1;let Q=0,N=0;const B=new F;for(let k=0;k<te;k++){const fe=k*Y-U;for(let ee=0;ee<j;ee++){const H=ee*w-$;B[v]=H*_,B[m]=fe*y,B[f]=G,u.push(B.x,B.y,B.z),B[v]=0,B[m]=0,B[f]=b>0?1:-1,c.push(B.x,B.y,B.z),d.push(ee/R),d.push(1-k/P),Q+=1}}for(let k=0;k<P;k++)for(let fe=0;fe<R;fe++){const ee=h+fe+j*k,H=h+fe+j*(k+1),Z=h+(fe+1)+j*(k+1),oe=h+(fe+1)+j*k;l.push(ee,H,oe),l.push(H,Z,oe),N+=6}s.addGroup(p,N,x),p+=N,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ro(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Yt(t){const e={};for(let n=0;n<t.length;n++){const i=ro(t[n]);for(const r in i)e[r]=i[r]}return e}function xb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function rx(t){return t.getRenderTarget()===null?t.outputColorSpace:si}const Sb={clone:ro,merge:Yt};var Eb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kr extends As{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Eb,this.fragmentShader=Mb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=xb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ax extends ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class An extends ax{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Vd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vd*2*Math.atan(Math.tan($c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,a,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan($c*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,a=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;a+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const s=this.filmOffset;s!==0&&(a+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,n,n-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const ga=-90,va=1;class wb extends ln{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new An(ga,va,e,n);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const a=new An(ga,va,e,n);a.layers=this.layers,a.up.set(0,1,0),a.lookAt(-1,0,0),this.add(a);const o=new An(ga,va,e,n);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const s=new An(ga,va,e,n);s.layers=this.layers,s.up.set(0,0,1),s.lookAt(0,-1,0),this.add(s);const l=new An(ga,va,e,n);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const u=new An(ga,va,e,n);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,-1),this.add(u)}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,a,o,s,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=Ei,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,a),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,s),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(n,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class ox extends vn{constructor(e,n,i,r,a,o,s,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:to,super(e,n,i,r,a,o,s,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tb extends $r{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(Wo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===kr?De:zr),this.texture=new ox(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:bn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Rs(5,5,5),a=new Kr({name:"CubemapFromEquirect",uniforms:ro(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:or});a.uniforms.tEquirect.value=n;const o=new Ki(r,a),s=n.minFilter;return n.minFilter===ps&&(n.minFilter=bn),new wb(1,10,this).update(e,o),n.minFilter=s,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const a=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(a)}}const hf=new F,bb=new F,Ab=new Ge;class Tr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=hf.subVectors(i,n).cross(bb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(hf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:n.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ab.getNormalMatrix(e),r=this.coplanarPoint(hf).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Er=new Ku,El=new F;class sx{constructor(e=new Tr,n=new Tr,i=new Tr,r=new Tr,a=new Tr,o=new Tr){this.planes=[e,n,i,r,a,o]}set(e,n,i,r,a,o){const s=this.planes;return s[0].copy(e),s[1].copy(n),s[2].copy(i),s[3].copy(r),s[4].copy(a),s[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],s=i[3],l=i[4],u=i[5],c=i[6],d=i[7],h=i[8],p=i[9],g=i[10],v=i[11],m=i[12],f=i[13],_=i[14],y=i[15];return n[0].setComponents(s-r,d-l,v-h,y-m).normalize(),n[1].setComponents(s+r,d+l,v+h,y+m).normalize(),n[2].setComponents(s+a,d+u,v+p,y+f).normalize(),n[3].setComponents(s-a,d-u,v-p,y-f).normalize(),n[4].setComponents(s-o,d-c,v-g,y-_).normalize(),n[5].setComponents(s+o,d+c,v+g,y+_).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Er.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Er)}intersectsSprite(e){return Er.center.set(0,0,0),Er.radius=.7071067811865476,Er.applyMatrix4(e.matrixWorld),this.intersectsSphere(Er)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let a=0;a<6;a++)if(n[a].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(El.x=r.normal.x>0?e.max.x:e.min.x,El.y=r.normal.y>0?e.max.y:e.min.y,El.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(El)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lx(){let t=null,e=!1,n=null,i=null;function r(a,o){n(a,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){n=a},setContext:function(a){t=a}}}function Rb(t,e){const n=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,p=t.createBuffer();t.bindBuffer(c,p),t.bufferData(c,d,h),u.onUploadCallback();let g;if(d instanceof Float32Array)g=t.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(n)g=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)g=t.SHORT;else if(d instanceof Uint32Array)g=t.UNSIGNED_INT;else if(d instanceof Int32Array)g=t.INT;else if(d instanceof Int8Array)g=t.BYTE;else if(d instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:g,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function a(u,c,d){const h=c.array,p=c.updateRange;t.bindBuffer(d,u),p.count===-1?t.bufferSubData(d,0,h):(n?t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):t.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function s(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(t.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(a(d.buffer,u,c),d.version=u.version)}return{get:o,remove:s,update:l}}class op extends Ni{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const a=e/2,o=n/2,s=Math.floor(i),l=Math.floor(r),u=s+1,c=l+1,d=e/s,h=n/l,p=[],g=[],v=[],m=[];for(let f=0;f<c;f++){const _=f*h-o;for(let y=0;y<u;y++){const E=y*d-a;g.push(E,-_,0),v.push(0,0,1),m.push(y/s),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<s;_++){const y=_+u*f,E=_+u*(f+1),S=_+1+u*(f+1),b=_+1+u*f;p.push(y,E,b),p.push(E,S,b)}this.setIndex(p),this.setAttribute("position",new sr(g,3)),this.setAttribute("normal",new sr(v,3)),this.setAttribute("uv",new sr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new op(e.width,e.height,e.widthSegments,e.heightSegments)}}var Cb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Db=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ub=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ib="vec3 transformed = vec3( position );",Ob=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kb=`#ifdef USE_IRIDESCENCE
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
#endif`,zb=`#ifdef USE_BUMPMAP
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
#endif`,Bb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Wb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Yb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$b=`#define PI 3.141592653589793
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
} // validated`,qb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Kb=`vec3 transformedNormal = objectNormal;
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
#endif`,Zb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tA="gl_FragColor = linearToOutputTexel( gl_FragColor );",nA=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iA=`#ifdef USE_ENVMAP
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
#endif`,rA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,aA=`#ifdef USE_ENVMAP
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
#endif`,oA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sA=`#ifdef USE_ENVMAP
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
#endif`,lA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dA=`#ifdef USE_GRADIENTMAP
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
}`,hA=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,pA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vA=`uniform bool receiveShadow;
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
#endif`,_A=`#if defined( USE_ENVMAP )
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
#endif`,yA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,EA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MA=`PhysicalMaterial material;
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
#endif`,wA=`struct PhysicalMaterial {
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
}`,TA=`
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
#endif`,bA=`#if defined( RE_IndirectDiffuse )
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
#endif`,AA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,RA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CA=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,LA=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,DA=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,NA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,UA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,IA=`#if defined( USE_POINTS_UV )
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
#endif`,OA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kA=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zA=`#ifdef USE_MORPHNORMALS
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
#endif`,BA=`#ifdef USE_MORPHTARGETS
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
#endif`,HA=`#ifdef USE_MORPHTARGETS
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
#endif`,GA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,VA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,WA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YA=`#ifdef USE_NORMALMAP
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
#endif`,$A=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,qA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,uR=`float getShadowMask() {
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
}`,cR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fR=`#ifdef USE_SKINNING
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
#endif`,dR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hR=`#ifdef USE_SKINNING
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
#endif`,pR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_R=`#ifdef USE_TRANSMISSION
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
#endif`,yR=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
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
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
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
#endif`,xR=`#ifdef USE_UV
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
#endif`,SR=`#ifdef USE_UV
	varying vec2 vUv;
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
#endif`,ER=`#ifdef USE_UV
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
#endif`,MR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,TR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,bR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,RR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,PR=`#include <common>
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
}`,LR=`#if DEPTH_PACKING == 3200
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
}`,DR=`#define DISTANCE
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
}`,NR=`#define DISTANCE
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
}`,UR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,OR=`uniform float scale;
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
}`,FR=`uniform vec3 diffuse;
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
}`,kR=`#include <common>
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
}`,zR=`uniform vec3 diffuse;
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
}`,BR=`#define LAMBERT
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
}`,HR=`#define LAMBERT
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
}`,GR=`#define MATCAP
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
}`,VR=`#define MATCAP
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
}`,WR=`#define NORMAL
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
}`,XR=`#define NORMAL
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
}`,jR=`#define PHONG
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
}`,YR=`#define PHONG
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
}`,$R=`#define STANDARD
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
}`,qR=`#define STANDARD
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
}`,KR=`#define TOON
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
}`,ZR=`#define TOON
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
}`,QR=`uniform float size;
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
}`,JR=`uniform vec3 diffuse;
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
}`,eC=`#include <common>
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
}`,tC=`uniform vec3 color;
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
}`,nC=`uniform float rotation;
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
}`,iC=`uniform vec3 diffuse;
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
}`,Oe={alphamap_fragment:Cb,alphamap_pars_fragment:Pb,alphatest_fragment:Lb,alphatest_pars_fragment:Db,aomap_fragment:Nb,aomap_pars_fragment:Ub,begin_vertex:Ib,beginnormal_vertex:Ob,bsdfs:Fb,iridescence_fragment:kb,bumpmap_pars_fragment:zb,clipping_planes_fragment:Bb,clipping_planes_pars_fragment:Hb,clipping_planes_pars_vertex:Gb,clipping_planes_vertex:Vb,color_fragment:Wb,color_pars_fragment:Xb,color_pars_vertex:jb,color_vertex:Yb,common:$b,cube_uv_reflection_fragment:qb,defaultnormal_vertex:Kb,displacementmap_pars_vertex:Zb,displacementmap_vertex:Qb,emissivemap_fragment:Jb,emissivemap_pars_fragment:eA,encodings_fragment:tA,encodings_pars_fragment:nA,envmap_fragment:iA,envmap_common_pars_fragment:rA,envmap_pars_fragment:aA,envmap_pars_vertex:oA,envmap_physical_pars_fragment:_A,envmap_vertex:sA,fog_vertex:lA,fog_pars_vertex:uA,fog_fragment:cA,fog_pars_fragment:fA,gradientmap_pars_fragment:dA,lightmap_fragment:hA,lightmap_pars_fragment:pA,lights_lambert_fragment:mA,lights_lambert_pars_fragment:gA,lights_pars_begin:vA,lights_toon_fragment:yA,lights_toon_pars_fragment:xA,lights_phong_fragment:SA,lights_phong_pars_fragment:EA,lights_physical_fragment:MA,lights_physical_pars_fragment:wA,lights_fragment_begin:TA,lights_fragment_maps:bA,lights_fragment_end:AA,logdepthbuf_fragment:RA,logdepthbuf_pars_fragment:CA,logdepthbuf_pars_vertex:PA,logdepthbuf_vertex:LA,map_fragment:DA,map_pars_fragment:NA,map_particle_fragment:UA,map_particle_pars_fragment:IA,metalnessmap_fragment:OA,metalnessmap_pars_fragment:FA,morphcolor_vertex:kA,morphnormal_vertex:zA,morphtarget_pars_vertex:BA,morphtarget_vertex:HA,normal_fragment_begin:GA,normal_fragment_maps:VA,normal_pars_fragment:WA,normal_pars_vertex:XA,normal_vertex:jA,normalmap_pars_fragment:YA,clearcoat_normal_fragment_begin:$A,clearcoat_normal_fragment_maps:qA,clearcoat_pars_fragment:KA,iridescence_pars_fragment:ZA,output_fragment:QA,packing:JA,premultiplied_alpha_fragment:eR,project_vertex:tR,dithering_fragment:nR,dithering_pars_fragment:iR,roughnessmap_fragment:rR,roughnessmap_pars_fragment:aR,shadowmap_pars_fragment:oR,shadowmap_pars_vertex:sR,shadowmap_vertex:lR,shadowmask_pars_fragment:uR,skinbase_vertex:cR,skinning_pars_vertex:fR,skinning_vertex:dR,skinnormal_vertex:hR,specularmap_fragment:pR,specularmap_pars_fragment:mR,tonemapping_fragment:gR,tonemapping_pars_fragment:vR,transmission_fragment:_R,transmission_pars_fragment:yR,uv_pars_fragment:xR,uv_pars_vertex:SR,uv_vertex:ER,worldpos_vertex:MR,background_vert:wR,background_frag:TR,backgroundCube_vert:bR,backgroundCube_frag:AR,cube_vert:RR,cube_frag:CR,depth_vert:PR,depth_frag:LR,distanceRGBA_vert:DR,distanceRGBA_frag:NR,equirect_vert:UR,equirect_frag:IR,linedashed_vert:OR,linedashed_frag:FR,meshbasic_vert:kR,meshbasic_frag:zR,meshlambert_vert:BR,meshlambert_frag:HR,meshmatcap_vert:GR,meshmatcap_frag:VR,meshnormal_vert:WR,meshnormal_frag:XR,meshphong_vert:jR,meshphong_frag:YR,meshphysical_vert:$R,meshphysical_frag:qR,meshtoon_vert:KR,meshtoon_frag:ZR,points_vert:QR,points_frag:JR,shadow_vert:eC,shadow_frag:tC,sprite_vert:nC,sprite_frag:iC},ue={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaTest:{value:0}}},ei={basic:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new et(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:Yt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:Yt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:Yt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new et(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:Yt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:Yt([ue.points,ue.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:Yt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:Yt([ue.common,ue.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:Yt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:Yt([ue.sprite,ue.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:Yt([ue.common,ue.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:Yt([ue.lights,ue.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ei.physical={uniforms:Yt([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Ml={r:0,b:0,g:0};function rC(t,e,n,i,r,a,o){const s=new et(0);let l=a===!0?0:1,u,c,d=null,h=0,p=null;function g(m,f){let _=!1,y=f.isScene===!0?f.background:null;switch(y&&y.isTexture&&(y=(f.backgroundBlurriness>0?n:e).get(y)),y===null?v(s,l):y&&y.isColor&&(v(y,1),_=!0),t.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),_=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),_=!0;break}(t.autoClear||_)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),y&&(y.isCubeTexture||y.mapping===qu)?(c===void 0&&(c=new Ki(new Rs(1,1,1),new Kr({name:"BackgroundCubeMaterial",uniforms:ro(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=y.colorSpace!==De,(d!==y||h!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=y,h=y.version,p=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new Ki(new op(2,2),new Kr({name:"BackgroundMaterial",uniforms:ro(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:hr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=y.colorSpace!==De,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||h!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=y,h=y.version,p=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function v(m,f){m.getRGB(Ml,rx(t)),i.buffers.color.setClear(Ml.r,Ml.g,Ml.b,f,o)}return{getClearColor:function(){return s},setClearColor:function(m,f=1){s.set(m),l=f,v(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(s,l)},render:g}}function aC(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),a=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||a!==null,s={},l=m(null);let u=l,c=!1;function d(G,j,te,Q,N){let B=!1;if(o){const k=v(Q,te,j);u!==k&&(u=k,p(u.object)),B=f(G,Q,te,N),B&&_(G,Q,te,N)}else{const k=j.wireframe===!0;(u.geometry!==Q.id||u.program!==te.id||u.wireframe!==k)&&(u.geometry=Q.id,u.program=te.id,u.wireframe=k,B=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(B||c)&&(c=!1,P(G,j,te,Q),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function h(){return i.isWebGL2?t.createVertexArray():a.createVertexArrayOES()}function p(G){return i.isWebGL2?t.bindVertexArray(G):a.bindVertexArrayOES(G)}function g(G){return i.isWebGL2?t.deleteVertexArray(G):a.deleteVertexArrayOES(G)}function v(G,j,te){const Q=te.wireframe===!0;let N=s[G.id];N===void 0&&(N={},s[G.id]=N);let B=N[j.id];B===void 0&&(B={},N[j.id]=B);let k=B[Q];return k===void 0&&(k=m(h()),B[Q]=k),k}function m(G){const j=[],te=[],Q=[];for(let N=0;N<r;N++)j[N]=0,te[N]=0,Q[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:te,attributeDivisors:Q,object:G,attributes:{},index:null}}function f(G,j,te,Q){const N=u.attributes,B=j.attributes;let k=0;const fe=te.getAttributes();for(const ee in fe)if(fe[ee].location>=0){const Z=N[ee];let oe=B[ee];if(oe===void 0&&(ee==="instanceMatrix"&&G.instanceMatrix&&(oe=G.instanceMatrix),ee==="instanceColor"&&G.instanceColor&&(oe=G.instanceColor)),Z===void 0||Z.attribute!==oe||oe&&Z.data!==oe.data)return!0;k++}return u.attributesNum!==k||u.index!==Q}function _(G,j,te,Q){const N={},B=j.attributes;let k=0;const fe=te.getAttributes();for(const ee in fe)if(fe[ee].location>=0){let Z=B[ee];Z===void 0&&(ee==="instanceMatrix"&&G.instanceMatrix&&(Z=G.instanceMatrix),ee==="instanceColor"&&G.instanceColor&&(Z=G.instanceColor));const oe={};oe.attribute=Z,Z&&Z.data&&(oe.data=Z.data),N[ee]=oe,k++}u.attributes=N,u.attributesNum=k,u.index=Q}function y(){const G=u.newAttributes;for(let j=0,te=G.length;j<te;j++)G[j]=0}function E(G){S(G,0)}function S(G,j){const te=u.newAttributes,Q=u.enabledAttributes,N=u.attributeDivisors;te[G]=1,Q[G]===0&&(t.enableVertexAttribArray(G),Q[G]=1),N[G]!==j&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,j),N[G]=j)}function b(){const G=u.newAttributes,j=u.enabledAttributes;for(let te=0,Q=j.length;te<Q;te++)j[te]!==G[te]&&(t.disableVertexAttribArray(te),j[te]=0)}function R(G,j,te,Q,N,B){i.isWebGL2===!0&&(te===t.INT||te===t.UNSIGNED_INT)?t.vertexAttribIPointer(G,j,te,N,B):t.vertexAttribPointer(G,j,te,Q,N,B)}function P(G,j,te,Q){if(i.isWebGL2===!1&&(G.isInstancedMesh||Q.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const N=Q.attributes,B=te.getAttributes(),k=j.defaultAttributeValues;for(const fe in B){const ee=B[fe];if(ee.location>=0){let H=N[fe];if(H===void 0&&(fe==="instanceMatrix"&&G.instanceMatrix&&(H=G.instanceMatrix),fe==="instanceColor"&&G.instanceColor&&(H=G.instanceColor)),H!==void 0){const Z=H.normalized,oe=H.itemSize,se=n.get(H);if(se===void 0)continue;const L=se.buffer,Ce=se.type,Re=se.bytesPerElement;if(H.isInterleavedBufferAttribute){const le=H.data,be=le.stride,$e=H.offset;if(le.isInstancedInterleavedBuffer){for(let Me=0;Me<ee.locationSize;Me++)S(ee.location+Me,le.meshPerAttribute);G.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Me=0;Me<ee.locationSize;Me++)E(ee.location+Me);t.bindBuffer(t.ARRAY_BUFFER,L);for(let Me=0;Me<ee.locationSize;Me++)R(ee.location+Me,oe/ee.locationSize,Ce,Z,be*Re,($e+oe/ee.locationSize*Me)*Re)}else{if(H.isInstancedBufferAttribute){for(let le=0;le<ee.locationSize;le++)S(ee.location+le,H.meshPerAttribute);G.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let le=0;le<ee.locationSize;le++)E(ee.location+le);t.bindBuffer(t.ARRAY_BUFFER,L);for(let le=0;le<ee.locationSize;le++)R(ee.location+le,oe/ee.locationSize,Ce,Z,oe*Re,oe/ee.locationSize*le*Re)}}else if(k!==void 0){const Z=k[fe];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(ee.location,Z);break;case 3:t.vertexAttrib3fv(ee.location,Z);break;case 4:t.vertexAttrib4fv(ee.location,Z);break;default:t.vertexAttrib1fv(ee.location,Z)}}}}b()}function x(){$();for(const G in s){const j=s[G];for(const te in j){const Q=j[te];for(const N in Q)g(Q[N].object),delete Q[N];delete j[te]}delete s[G]}}function w(G){if(s[G.id]===void 0)return;const j=s[G.id];for(const te in j){const Q=j[te];for(const N in Q)g(Q[N].object),delete Q[N];delete j[te]}delete s[G.id]}function Y(G){for(const j in s){const te=s[j];if(te[G.id]===void 0)continue;const Q=te[G.id];for(const N in Q)g(Q[N].object),delete Q[N];delete te[G.id]}}function $(){U(),c=!0,u!==l&&(u=l,p(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:$,resetDefaultState:U,dispose:x,releaseStatesOfGeometry:w,releaseStatesOfProgram:Y,initAttributes:y,enableAttribute:E,disableUnusedAttributes:b}}function oC(t,e,n,i){const r=i.isWebGL2;let a;function o(u){a=u}function s(u,c){t.drawArrays(a,u,c),n.update(c,a,1)}function l(u,c,d){if(d===0)return;let h,p;if(r)h=t,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](a,u,c,d),n.update(c,a,d)}this.setMode=o,this.render=s,this.renderInstances=l}function sC(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let s=n.precision!==void 0?n.precision:"highp";const l=a(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const u=o||e.has("WEBGL_draw_buffers"),c=n.logarithmicDepthBuffer===!0,d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),f=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),y=h>0,E=o||e.has("OES_texture_float"),S=y&&E,b=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:a,precision:s,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:y,floatFragmentTextures:E,floatVertexTextures:S,maxSamples:b}}function lC(t){const e=this;let n=null,i=0,r=!1,a=!1;const o=new Tr,s=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){a=!0,c(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,h){n=c(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||g===null||g.length===0||a&&!m)a?c(null):u();else{const _=a?0:i,y=_*4;let E=f.clippingState||null;l.value=E,E=c(g,h,y,p);for(let S=0;S!==y;++S)E[S]=n[S];f.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,_=h.matrixWorldInverse;s.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,E=p;y!==v;++y,E+=4)o.copy(d[y]).applyMatrix4(_,s),o.normal.toArray(m,E),m[E+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function uC(t){let e=new WeakMap;function n(o,s){return s===kd?o.mapping=to:s===zd&&(o.mapping=no),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const s=o.mapping;if(s===kd||s===zd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new Tb(l.height/2);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const s=o.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class cC extends ax{constructor(e=-1,n=1,i=1,r=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=i-e,o=i+e,s=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=u*this.view.offsetX,o=a+u*this.view.width,s-=c*this.view.offsetY,l=s-c*this.view.height}this.projectionMatrix.makeOrthographic(a,o,s,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ia=4,iv=[.125,.215,.35,.446,.526,.582],Ar=20,pf=new cC,rv=new et;let mf=null;const br=(1+Math.sqrt(5))/2,_a=1/br,av=[new F(1,1,1),new F(-1,1,1),new F(1,1,-1),new F(-1,1,-1),new F(0,br,_a),new F(0,br,-_a),new F(_a,0,br),new F(-_a,0,br),new F(br,_a,0),new F(-br,_a,0)];class ov{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){mf=this._renderer.getRenderTarget(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,r,a),n>0&&this._blur(a,0,0,n),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mf),e.scissorTest=!1,wl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===to||e.mapping===no?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mf=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:ms,format:Wn,colorSpace:si,depthBuffer:!1},r=sv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sv(e,n,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fC(a)),this._blurMaterial=dC(a,e,n)}return r}_compileMaterial(e){const n=new Ki(this._lodPlanes[0],e);this._renderer.compile(n,pf)}_sceneToCubeUV(e,n,i,r){const s=new An(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(rv),c.toneMapping=Ei,c.autoClear=!1;const p=new tx({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new Ki(new Rs,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(rv),v=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(s.up.set(0,l[f],0),s.lookAt(u[f],0,0)):_===1?(s.up.set(0,0,l[f]),s.lookAt(0,u[f],0)):(s.up.set(0,l[f],0),s.lookAt(0,0,u[f]));const y=this._cubeSize;wl(r,_*y,f>2?y:0,y,y),c.setRenderTarget(r),v&&c.render(g,s),c.render(e,s)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===to||e.mapping===no;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lv());const a=r?this._cubemapMaterial:this._equirectMaterial,o=new Ki(this._lodPlanes[0],a),s=a.uniforms;s.envMap.value=e;const l=this._cubeSize;wl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,pf)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=av[(r-1)%av.length];this._blur(e,r-1,r,a,o)}n.autoClear=i}_blur(e,n,i,r,a){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",a),this._halfBlur(o,e,i,i,r,"longitudinal",a)}_halfBlur(e,n,i,r,a,o,s){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Ki(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Ar-1),v=a/g,m=isFinite(a)?1+Math.floor(c*v):Ar;m>Ar&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ar}`);const f=[];let _=0;for(let R=0;R<Ar;++R){const P=R/v,x=Math.exp(-P*P/2);f.push(x),R===0?_+=x:R<m&&(_+=2*x)}for(let R=0;R<f.length;R++)f[R]=f[R]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:y}=this;h.dTheta.value=g,h.mipInt.value=y-i;const E=this._sizeLods[r],S=3*E*(r>y-Ia?r-y+Ia:0),b=4*(this._cubeSize-E);wl(n,S,b,3*E,2*E),l.setRenderTarget(n),l.render(d,pf)}}function fC(t){const e=[],n=[],i=[];let r=t;const a=t-Ia+1+iv.length;for(let o=0;o<a;o++){const s=Math.pow(2,r);n.push(s);let l=1/s;o>t-Ia?l=iv[o-t+Ia-1]:o===0&&(l=0),i.push(l);const u=1/(s-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,g=6,v=3,m=2,f=1,_=new Float32Array(v*g*p),y=new Float32Array(m*g*p),E=new Float32Array(f*g*p);for(let b=0;b<p;b++){const R=b%3*2/3-1,P=b>2?0:-1,x=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];_.set(x,v*g*b),y.set(h,m*g*b);const w=[b,b,b,b,b,b];E.set(w,f*g*b)}const S=new Ni;S.setAttribute("position",new oi(_,v)),S.setAttribute("uv",new oi(y,m)),S.setAttribute("faceIndex",new oi(E,f)),e.push(S),r>Ia&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function sv(t,e,n){const i=new $r(t,e,n);return i.texture.mapping=qu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function wl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function dC(t,e,n){const i=new Float32Array(Ar),r=new F(0,1,0);return new Kr({name:"SphericalGaussianBlur",defines:{n:Ar,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:sp(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function lv(){return new Kr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sp(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function uv(){return new Kr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function sp(){return`

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
	`}function hC(t){let e=new WeakMap,n=null;function i(s){if(s&&s.isTexture){const l=s.mapping,u=l===kd||l===zd,c=l===to||l===no;if(u||c)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let d=e.get(s);return n===null&&(n=new ov(t)),d=u?n.fromEquirectangular(s,d):n.fromCubemap(s,d),e.set(s,d),d.texture}else{if(e.has(s))return e.get(s).texture;{const d=s.image;if(u&&d&&d.height>0||c&&d&&r(d)){n===null&&(n=new ov(t));const h=u?n.fromEquirectangular(s):n.fromCubemap(s);return e.set(s,h),s.addEventListener("dispose",a),h.texture}else return null}}}return s}function r(s){let l=0;const u=6;for(let c=0;c<u;c++)s[c]!==void 0&&l++;return l===u}function a(s){const l=s.target;l.removeEventListener("dispose",a);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function pC(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function mC(t,e,n,i){const r={},a=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const p=a.get(h);p&&(e.remove(p),a.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function s(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],t.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const _=p.array;v=p.version;for(let y=0,E=_.length;y<E;y+=3){const S=_[y+0],b=_[y+1],R=_[y+2];h.push(S,b,b,R,R,S)}}else{const _=g.array;v=g.version;for(let y=0,E=_.length/3-1;y<E;y+=3){const S=y+0,b=y+1,R=y+2;h.push(S,b,b,R,R,S)}}const m=new($y(h)?ix:nx)(h,1);m.version=v;const f=a.get(d);f&&e.remove(f),a.set(d,m)}function c(d){const h=a.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return a.get(d)}return{get:s,update:l,getWireframeAttribute:c}}function gC(t,e,n,i){const r=i.isWebGL2;let a;function o(h){a=h}let s,l;function u(h){s=h.type,l=h.bytesPerElement}function c(h,p){t.drawElements(a,p,s,h*l),n.update(p,a,1)}function d(h,p,g){if(g===0)return;let v,m;if(r)v=t,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](a,p,s,h*l,g),n.update(p,a,g)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function vC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,o,s){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=s*(a/3);break;case t.LINES:n.lines+=s*(a/2);break;case t.LINE_STRIP:n.lines+=s*(a-1);break;case t.LINE_LOOP:n.lines+=s*a;break;case t.POINTS:n.points+=s*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.frame++,n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function _C(t,e){return t[0]-e[0]}function yC(t,e){return Math.abs(e[1])-Math.abs(t[1])}function xC(t,e,n){const i={},r=new Float32Array(8),a=new WeakMap,o=new Ut,s=[];for(let u=0;u<8;u++)s[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const g=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,v=g!==void 0?g.length:0;let m=a.get(c);if(m===void 0||m.count!==v){let j=function(){U.dispose(),a.delete(c),c.removeEventListener("dispose",j)};var p=j;m!==void 0&&m.texture.dispose();const y=c.morphAttributes.position!==void 0,E=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,b=c.morphAttributes.position||[],R=c.morphAttributes.normal||[],P=c.morphAttributes.color||[];let x=0;y===!0&&(x=1),E===!0&&(x=2),S===!0&&(x=3);let w=c.attributes.position.count*x,Y=1;w>e.maxTextureSize&&(Y=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const $=new Float32Array(w*Y*4*v),U=new Zy($,w,Y,v);U.type=Ur,U.needsUpdate=!0;const G=x*4;for(let te=0;te<v;te++){const Q=b[te],N=R[te],B=P[te],k=w*Y*4*te;for(let fe=0;fe<Q.count;fe++){const ee=fe*G;y===!0&&(o.fromBufferAttribute(Q,fe),$[k+ee+0]=o.x,$[k+ee+1]=o.y,$[k+ee+2]=o.z,$[k+ee+3]=0),E===!0&&(o.fromBufferAttribute(N,fe),$[k+ee+4]=o.x,$[k+ee+5]=o.y,$[k+ee+6]=o.z,$[k+ee+7]=0),S===!0&&(o.fromBufferAttribute(B,fe),$[k+ee+8]=o.x,$[k+ee+9]=o.y,$[k+ee+10]=o.z,$[k+ee+11]=B.itemSize===4?o.w:1)}}m={count:v,texture:U,size:new Ve(w,Y)},a.set(c,m),c.addEventListener("dispose",j)}let f=0;for(let y=0;y<h.length;y++)f+=h[y];const _=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(t,"morphTargetBaseInfluence",_),d.getUniforms().setValue(t,"morphTargetInfluences",h),d.getUniforms().setValue(t,"morphTargetsTexture",m.texture,n),d.getUniforms().setValue(t,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let v=i[c.id];if(v===void 0||v.length!==g){v=[];for(let E=0;E<g;E++)v[E]=[E,0];i[c.id]=v}for(let E=0;E<g;E++){const S=v[E];S[0]=E,S[1]=h[E]}v.sort(yC);for(let E=0;E<8;E++)E<g&&v[E][1]?(s[E][0]=v[E][0],s[E][1]=v[E][1]):(s[E][0]=Number.MAX_SAFE_INTEGER,s[E][1]=0);s.sort(_C);const m=c.morphAttributes.position,f=c.morphAttributes.normal;let _=0;for(let E=0;E<8;E++){const S=s[E],b=S[0],R=S[1];b!==Number.MAX_SAFE_INTEGER&&R?(m&&c.getAttribute("morphTarget"+E)!==m[b]&&c.setAttribute("morphTarget"+E,m[b]),f&&c.getAttribute("morphNormal"+E)!==f[b]&&c.setAttribute("morphNormal"+E,f[b]),r[E]=R,_+=R):(m&&c.hasAttribute("morphTarget"+E)===!0&&c.deleteAttribute("morphTarget"+E),f&&c.hasAttribute("morphNormal"+E)===!0&&c.deleteAttribute("morphNormal"+E),r[E]=0)}const y=c.morphTargetsRelative?1:1-_;d.getUniforms().setValue(t,"morphTargetBaseInfluence",y),d.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function SC(t,e,n,i){let r=new WeakMap;function a(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER)),d}function o(){r=new WeakMap}function s(l){const u=l.target;u.removeEventListener("dispose",s),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}const ux=new vn,cx=new Zy,fx=new ub,dx=new ox,cv=[],fv=[],dv=new Float32Array(16),hv=new Float32Array(9),pv=new Float32Array(4);function co(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let a=cv[r];if(a===void 0&&(a=new Float32Array(r),cv[r]=a),e!==0){i.toArray(a,0);for(let o=1,s=0;o!==e;++o)s+=n,t[o].toArray(a,s)}return a}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Qu(t,e){let n=fv[e];n===void 0&&(n=new Int32Array(e),fv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function EC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function MC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function wC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function TC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function bC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Tt(n,i))return;pv.set(i),t.uniformMatrix2fv(this.addr,!1,pv),bt(n,i)}}function AC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Tt(n,i))return;hv.set(i),t.uniformMatrix3fv(this.addr,!1,hv),bt(n,i)}}function RC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Tt(n,i))return;dv.set(i),t.uniformMatrix4fv(this.addr,!1,dv),bt(n,i)}}function CC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function PC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function LC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function DC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function NC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function UC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function IC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function OC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function FC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||ux,r)}function kC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||fx,r)}function zC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||dx,r)}function BC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||cx,r)}function HC(t){switch(t){case 5126:return EC;case 35664:return MC;case 35665:return wC;case 35666:return TC;case 35674:return bC;case 35675:return AC;case 35676:return RC;case 5124:case 35670:return CC;case 35667:case 35671:return PC;case 35668:case 35672:return LC;case 35669:case 35673:return DC;case 5125:return NC;case 36294:return UC;case 36295:return IC;case 36296:return OC;case 35678:case 36198:case 36298:case 36306:case 35682:return FC;case 35679:case 36299:case 36307:return kC;case 35680:case 36300:case 36308:case 36293:return zC;case 36289:case 36303:case 36311:case 36292:return BC}}function GC(t,e){t.uniform1fv(this.addr,e)}function VC(t,e){const n=co(e,this.size,2);t.uniform2fv(this.addr,n)}function WC(t,e){const n=co(e,this.size,3);t.uniform3fv(this.addr,n)}function XC(t,e){const n=co(e,this.size,4);t.uniform4fv(this.addr,n)}function jC(t,e){const n=co(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function YC(t,e){const n=co(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function $C(t,e){const n=co(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function qC(t,e){t.uniform1iv(this.addr,e)}function KC(t,e){t.uniform2iv(this.addr,e)}function ZC(t,e){t.uniform3iv(this.addr,e)}function QC(t,e){t.uniform4iv(this.addr,e)}function JC(t,e){t.uniform1uiv(this.addr,e)}function e2(t,e){t.uniform2uiv(this.addr,e)}function t2(t,e){t.uniform3uiv(this.addr,e)}function n2(t,e){t.uniform4uiv(this.addr,e)}function i2(t,e,n){const i=this.cache,r=e.length,a=Qu(n,r);Tt(i,a)||(t.uniform1iv(this.addr,a),bt(i,a));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||ux,a[o])}function r2(t,e,n){const i=this.cache,r=e.length,a=Qu(n,r);Tt(i,a)||(t.uniform1iv(this.addr,a),bt(i,a));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||fx,a[o])}function a2(t,e,n){const i=this.cache,r=e.length,a=Qu(n,r);Tt(i,a)||(t.uniform1iv(this.addr,a),bt(i,a));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||dx,a[o])}function o2(t,e,n){const i=this.cache,r=e.length,a=Qu(n,r);Tt(i,a)||(t.uniform1iv(this.addr,a),bt(i,a));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||cx,a[o])}function s2(t){switch(t){case 5126:return GC;case 35664:return VC;case 35665:return WC;case 35666:return XC;case 35674:return jC;case 35675:return YC;case 35676:return $C;case 5124:case 35670:return qC;case 35667:case 35671:return KC;case 35668:case 35672:return ZC;case 35669:case 35673:return QC;case 5125:return JC;case 36294:return e2;case 36295:return t2;case 36296:return n2;case 35678:case 36198:case 36298:case 36306:case 35682:return i2;case 35679:case 36299:case 36307:return r2;case 35680:case 36300:case 36308:case 36293:return a2;case 36289:case 36303:case 36311:case 36292:return o2}}class l2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=HC(n.type)}}class u2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=s2(n.type)}}class c2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let a=0,o=r.length;a!==o;++a){const s=r[a];s.setValue(e,n[s.id],i)}}}const gf=/(\w+)(\])?(\[|\.)?/g;function mv(t,e){t.seq.push(e),t.map[e.id]=e}function f2(t,e,n){const i=t.name,r=i.length;for(gf.lastIndex=0;;){const a=gf.exec(i),o=gf.lastIndex;let s=a[1];const l=a[2]==="]",u=a[3];if(l&&(s=s|0),u===void 0||u==="["&&o+2===r){mv(n,u===void 0?new l2(s,t,e):new u2(s,t,e));break}else{let d=n.map[s];d===void 0&&(d=new c2(s),mv(n,d)),n=d}}}class Gl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const a=e.getActiveUniform(n,r),o=e.getUniformLocation(n,a.name);f2(a,o,this)}}setValue(e,n,i,r){const a=this.map[n];a!==void 0&&a.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let a=0,o=n.length;a!==o;++a){const s=n[a],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,a=e.length;r!==a;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function gv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let d2=0;function h2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),a=Math.min(e+6,n.length);for(let o=r;o<a;o++){const s=o+1;i.push(`${s===e?">":" "} ${s}: ${n[o]}`)}return i.join(`
`)}function p2(t){switch(t){case si:return["Linear","( value )"];case De:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function vv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+h2(t.getShaderSource(e),o)}else return r}function m2(t,e){const n=p2(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function g2(t,e){let n;switch(e){case RT:n="Linear";break;case CT:n="Reinhard";break;case PT:n="OptimizedCineon";break;case LT:n="ACESFilmic";break;case DT:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function v2(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Do).join(`
`)}function _2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function y2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const a=t.getActiveAttrib(e,r),o=a.name;let s=1;a.type===t.FLOAT_MAT2&&(s=2),a.type===t.FLOAT_MAT3&&(s=3),a.type===t.FLOAT_MAT4&&(s=4),n[o]={type:a.type,location:t.getAttribLocation(e,o),locationSize:s}}return n}function Do(t){return t!==""}function _v(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const x2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wd(t){return t.replace(x2,S2)}function S2(t,e){const n=Oe[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Wd(n)}const E2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xv(t){return t.replace(E2,M2)}function M2(t,e,n,i){let r="";for(let a=parseInt(e);a<parseInt(n);a++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Sv(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function w2(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===By?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===oT?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function T2(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case to:case no:e="ENVMAP_TYPE_CUBE";break;case qu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b2(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case no:e="ENVMAP_MODE_REFRACTION";break}return e}function A2(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Vy:e="ENVMAP_BLENDING_MULTIPLY";break;case bT:e="ENVMAP_BLENDING_MIX";break;case AT:e="ENVMAP_BLENDING_ADD";break}return e}function R2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function C2(t,e,n,i){const r=t.getContext(),a=n.defines;let o=n.vertexShader,s=n.fragmentShader;const l=w2(n),u=T2(n),c=b2(n),d=A2(n),h=R2(n),p=n.isWebGL2?"":v2(n),g=_2(a),v=r.createProgram();let m,f,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=[g].filter(Do).join(`
`),m.length>0&&(m+=`
`),f=[p,g].filter(Do).join(`
`),f.length>0&&(f+=`
`)):(m=[Sv(n),"#define SHADER_NAME "+n.shaderName,g,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),f=[p,Sv(n),"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ei?"#define TONE_MAPPING":"",n.toneMapping!==Ei?Oe.tonemapping_pars_fragment:"",n.toneMapping!==Ei?g2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,m2("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Do).join(`
`)),o=Wd(o),o=_v(o,n),o=yv(o,n),s=Wd(s),s=_v(s,n),s=yv(s,n),o=xv(o),s=xv(s),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===Bg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Bg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=_+m+o,E=_+f+s,S=gv(r,r.VERTEX_SHADER,y),b=gv(r,r.FRAGMENT_SHADER,E);if(r.attachShader(v,S),r.attachShader(v,b),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),t.debug.checkShaderErrors){const x=r.getProgramInfoLog(v).trim(),w=r.getShaderInfoLog(S).trim(),Y=r.getShaderInfoLog(b).trim();let $=!0,U=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,S,b);else{const G=vv(r,S,"vertex"),j=vv(r,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+G+`
`+j)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(w===""||Y==="")&&(U=!1);U&&(this.diagnostics={runnable:$,programLog:x,vertexShader:{log:w,prefix:m},fragmentShader:{log:Y,prefix:f}})}r.deleteShader(S),r.deleteShader(b);let R;this.getUniforms=function(){return R===void 0&&(R=new Gl(r,v)),R};let P;return this.getAttributes=function(){return P===void 0&&(P=y2(r,v)),P},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.name=n.shaderName,this.id=d2++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=b,this}let P2=0;class L2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),a=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new D2(e),n.set(e,i)),i}}class D2{constructor(e){this.id=P2++,this.code=e,this.usedTimes=0}}function N2(t,e,n,i,r,a,o){const s=new Jy,l=new L2,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return x===1?"uv1":x===2?"uv2":x===3?"uv3":"uv"}function m(x,w,Y,$,U){const G=$.fog,j=U.geometry,te=x.isMeshStandardMaterial?$.environment:null,Q=(x.isMeshStandardMaterial?n:e).get(x.envMap||te),N=Q&&Q.mapping===qu?Q.image.height:null,B=g[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const k=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,fe=k!==void 0?k.length:0;let ee=0;j.morphAttributes.position!==void 0&&(ee=1),j.morphAttributes.normal!==void 0&&(ee=2),j.morphAttributes.color!==void 0&&(ee=3);let H,Z,oe,se;if(B){const Ze=ei[B];H=Ze.vertexShader,Z=Ze.fragmentShader}else H=x.vertexShader,Z=x.fragmentShader,l.update(x),oe=l.getVertexShaderID(x),se=l.getFragmentShaderID(x);const L=t.getRenderTarget(),Ce=U.isInstancedMesh===!0,Re=!!x.map,le=!!x.matcap,be=!!Q,$e=!!x.aoMap,Me=!!x.lightMap,Ne=!!x.bumpMap,ft=!!x.normalMap,st=!!x.displacementMap,_t=!!x.emissiveMap,pt=!!x.metalnessMap,Ye=!!x.roughnessMap,Je=x.clearcoat>0,Ft=x.iridescence>0,A=x.sheen>0,M=x.transmission>0,V=Je&&!!x.clearcoatMap,ne=Je&&!!x.clearcoatNormalMap,ae=Je&&!!x.clearcoatRoughnessMap,ce=Ft&&!!x.iridescenceMap,C=Ft&&!!x.iridescenceThicknessMap,J=A&&!!x.sheenColorMap,z=A&&!!x.sheenRoughnessMap,de=!!x.specularMap,ve=!!x.specularColorMap,xe=!!x.specularIntensityMap,he=M&&!!x.transmissionMap,ye=M&&!!x.thicknessMap,Pe=!!x.gradientMap,Fe=!!x.alphaMap,mt=x.alphaTest>0,D=!!x.extensions,W=!!j.attributes.uv1,ie=!!j.attributes.uv2,pe=!!j.attributes.uv3;return{isWebGL2:c,shaderID:B,shaderName:x.type,vertexShader:H,fragmentShader:Z,defines:x.defines,customVertexShaderID:oe,customFragmentShaderID:se,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:Ce,instancingColor:Ce&&U.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:L===null?t.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:si,map:Re,matcap:le,envMap:be,envMapMode:be&&Q.mapping,envMapCubeUVHeight:N,aoMap:$e,lightMap:Me,bumpMap:Ne,normalMap:ft,displacementMap:h&&st,emissiveMap:_t,normalMapObjectSpace:ft&&x.normalMapType===QT,normalMapTangentSpace:ft&&x.normalMapType===ZT,metalnessMap:pt,roughnessMap:Ye,clearcoat:Je,clearcoatMap:V,clearcoatNormalMap:ne,clearcoatRoughnessMap:ae,iridescence:Ft,iridescenceMap:ce,iridescenceThicknessMap:C,sheen:A,sheenColorMap:J,sheenRoughnessMap:z,specularMap:de,specularColorMap:ve,specularIntensityMap:xe,transmission:M,transmissionMap:he,thicknessMap:ye,gradientMap:Pe,opaque:x.transparent===!1&&x.blending===Wa,alphaMap:Fe,alphaTest:mt,combine:x.combine,mapUv:Re&&v(x.map.channel),aoMapUv:$e&&v(x.aoMap.channel),lightMapUv:Me&&v(x.lightMap.channel),bumpMapUv:Ne&&v(x.bumpMap.channel),normalMapUv:ft&&v(x.normalMap.channel),displacementMapUv:st&&v(x.displacementMap.channel),emissiveMapUv:_t&&v(x.emissiveMap.channel),metalnessMapUv:pt&&v(x.metalnessMap.channel),roughnessMapUv:Ye&&v(x.roughnessMap.channel),clearcoatMapUv:V&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:C&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:J&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:z&&v(x.sheenRoughnessMap.channel),specularMapUv:de&&v(x.specularMap.channel),specularColorMapUv:ve&&v(x.specularColorMap.channel),specularIntensityMapUv:xe&&v(x.specularIntensityMap.channel),transmissionMapUv:he&&v(x.transmissionMap.channel),thicknessMapUv:ye&&v(x.thicknessMap.channel),alphaMapUv:Fe&&v(x.alphaMap.channel),vertexTangents:ft&&!!j.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUv1s:W,vertexUv2s:ie,vertexUv3s:pe,pointsUvs:U.isPoints===!0&&!!j.attributes.uv&&(Re||Fe),fog:!!G,useFog:x.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&Y.length>0,shadowMapType:t.shadowMap.type,toneMapping:x.toneMapped?t.toneMapping:Ei,useLegacyLights:t.useLegacyLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===_i,flipSided:x.side===sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:D&&x.extensions.derivatives===!0,extensionFragDepth:D&&x.extensions.fragDepth===!0,extensionDrawBuffers:D&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:D&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function f(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const Y in x.defines)w.push(Y),w.push(x.defines[Y]);return x.isRawShaderMaterial===!1&&(_(w,x),y(w,x),w.push(t.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function _(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function y(x,w){s.disableAll(),w.isWebGL2&&s.enable(0),w.supportsVertexTextures&&s.enable(1),w.instancing&&s.enable(2),w.instancingColor&&s.enable(3),w.matcap&&s.enable(4),w.envMap&&s.enable(5),w.normalMapObjectSpace&&s.enable(6),w.normalMapTangentSpace&&s.enable(7),w.clearcoat&&s.enable(8),w.iridescence&&s.enable(9),w.alphaTest&&s.enable(10),w.vertexColors&&s.enable(11),w.vertexAlphas&&s.enable(12),w.vertexUv1s&&s.enable(13),w.vertexUv2s&&s.enable(14),w.vertexUv3s&&s.enable(15),w.vertexTangents&&s.enable(16),x.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.useLegacyLights&&s.enable(10),w.doubleSided&&s.enable(11),w.flipSided&&s.enable(12),w.useDepthPacking&&s.enable(13),w.dithering&&s.enable(14),w.transmission&&s.enable(15),w.sheen&&s.enable(16),w.opaque&&s.enable(17),w.pointsUvs&&s.enable(18),x.push(s.mask)}function E(x){const w=g[x.type];let Y;if(w){const $=ei[w];Y=Sb.clone($.uniforms)}else Y=x.uniforms;return Y}function S(x,w){let Y;for(let $=0,U=u.length;$<U;$++){const G=u[$];if(G.cacheKey===w){Y=G,++Y.usedTimes;break}}return Y===void 0&&(Y=new C2(t,w,x,a),u.push(Y)),Y}function b(x){if(--x.usedTimes===0){const w=u.indexOf(x);u[w]=u[u.length-1],u.pop(),x.destroy()}}function R(x){l.remove(x)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:E,acquireProgram:S,releaseProgram:b,releaseShaderCache:R,programs:u,dispose:P}}function U2(){let t=new WeakMap;function e(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function n(a){t.delete(a)}function i(a,o,s){t.get(a)[o]=s}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function I2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Ev(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Mv(){const t=[];let e=0;const n=[],i=[],r=[];function a(){e=0,n.length=0,i.length=0,r.length=0}function o(d,h,p,g,v,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=m),e++,f}function s(d,h,p,g,v,m){const f=o(d,h,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,g,v,m){const f=o(d,h,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function u(d,h){n.length>1&&n.sort(d||I2),i.length>1&&i.sort(h||Ev),r.length>1&&r.sort(h||Ev)}function c(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:a,push:s,unshift:l,finish:c,sort:u}}function O2(){let t=new WeakMap;function e(i,r){const a=t.get(i);let o;return a===void 0?(o=new Mv,t.set(i,[o])):r>=a.length?(o=new Mv,a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function F2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new et};break;case"SpotLight":n={position:new F,direction:new F,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new et,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new et,groundColor:new et};break;case"RectAreaLight":n={color:new et,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function k2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let z2=0;function B2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function H2(t,e){const n=new F2,i=k2(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new F);const a=new F,o=new Dt,s=new Dt;function l(c,d){let h=0,p=0,g=0;for(let Y=0;Y<9;Y++)r.probe[Y].set(0,0,0);let v=0,m=0,f=0,_=0,y=0,E=0,S=0,b=0,R=0,P=0;c.sort(B2);const x=d===!0?Math.PI:1;for(let Y=0,$=c.length;Y<$;Y++){const U=c[Y],G=U.color,j=U.intensity,te=U.distance,Q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=G.r*j*x,p+=G.g*j*x,g+=G.b*j*x;else if(U.isLightProbe)for(let N=0;N<9;N++)r.probe[N].addScaledVector(U.sh.coefficients[N],j);else if(U.isDirectionalLight){const N=n.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity*x),U.castShadow){const B=U.shadow,k=i.get(U);k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,r.directionalShadow[v]=k,r.directionalShadowMap[v]=Q,r.directionalShadowMatrix[v]=U.shadow.matrix,E++}r.directional[v]=N,v++}else if(U.isSpotLight){const N=n.get(U);N.position.setFromMatrixPosition(U.matrixWorld),N.color.copy(G).multiplyScalar(j*x),N.distance=te,N.coneCos=Math.cos(U.angle),N.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),N.decay=U.decay,r.spot[f]=N;const B=U.shadow;if(U.map&&(r.spotLightMap[R]=U.map,R++,B.updateMatrices(U),U.castShadow&&P++),r.spotLightMatrix[f]=B.matrix,U.castShadow){const k=i.get(U);k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,r.spotShadow[f]=k,r.spotShadowMap[f]=Q,b++}f++}else if(U.isRectAreaLight){const N=n.get(U);N.color.copy(G).multiplyScalar(j),N.halfWidth.set(U.width*.5,0,0),N.halfHeight.set(0,U.height*.5,0),r.rectArea[_]=N,_++}else if(U.isPointLight){const N=n.get(U);if(N.color.copy(U.color).multiplyScalar(U.intensity*x),N.distance=U.distance,N.decay=U.decay,U.castShadow){const B=U.shadow,k=i.get(U);k.shadowBias=B.bias,k.shadowNormalBias=B.normalBias,k.shadowRadius=B.radius,k.shadowMapSize=B.mapSize,k.shadowCameraNear=B.camera.near,k.shadowCameraFar=B.camera.far,r.pointShadow[m]=k,r.pointShadowMap[m]=Q,r.pointShadowMatrix[m]=U.shadow.matrix,S++}r.point[m]=N,m++}else if(U.isHemisphereLight){const N=n.get(U);N.skyColor.copy(U.color).multiplyScalar(j*x),N.groundColor.copy(U.groundColor).multiplyScalar(j*x),r.hemi[y]=N,y++}}_>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=g;const w=r.hash;(w.directionalLength!==v||w.pointLength!==m||w.spotLength!==f||w.rectAreaLength!==_||w.hemiLength!==y||w.numDirectionalShadows!==E||w.numPointShadows!==S||w.numSpotShadows!==b||w.numSpotMaps!==R)&&(r.directional.length=v,r.spot.length=f,r.rectArea.length=_,r.point.length=m,r.hemi.length=y,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=b+R-P,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=P,w.directionalLength=v,w.pointLength=m,w.spotLength=f,w.rectAreaLength=_,w.hemiLength=y,w.numDirectionalShadows=E,w.numPointShadows=S,w.numSpotShadows=b,w.numSpotMaps=R,r.version=z2++)}function u(c,d){let h=0,p=0,g=0,v=0,m=0;const f=d.matrixWorldInverse;for(let _=0,y=c.length;_<y;_++){const E=c[_];if(E.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(f),h++}else if(E.isSpotLight){const S=r.spot[g];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(f),g++}else if(E.isRectAreaLight){const S=r.rectArea[v];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(f),s.identity(),o.copy(E.matrixWorld),o.premultiply(f),s.extractRotation(o),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),v++}else if(E.isPointLight){const S=r.point[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(f),p++}else if(E.isHemisphereLight){const S=r.hemi[m];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:l,setupView:u,state:r}}function wv(t,e){const n=new H2(t,e),i=[],r=[];function a(){i.length=0,r.length=0}function o(d){i.push(d)}function s(d){r.push(d)}function l(d){n.setup(i,d)}function u(d){n.setupView(i,d)}return{init:a,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:s}}function G2(t,e){let n=new WeakMap;function i(a,o=0){const s=n.get(a);let l;return s===void 0?(l=new wv(t,e),n.set(a,[l])):o>=s.length?(l=new wv(t,e),s.push(l)):l=s[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class V2 extends As{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class W2 extends As{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const X2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,j2=`uniform sampler2D shadow_pass;
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
}`;function Y2(t,e,n){let i=new sx;const r=new Ve,a=new Ve,o=new Ut,s=new V2({depthPacking:KT}),l=new W2,u={},c=n.maxTextureSize,d={[hr]:sn,[sn]:hr,[_i]:_i},h=new Kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:X2,fragmentShader:j2}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ni;g.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ki(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=By;let f=this.type;this.render=function(S,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const P=t.getRenderTarget(),x=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),Y=t.state;Y.setBlending(or),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const $=f!==mi&&this.type===mi,U=f===mi&&this.type!==mi;for(let G=0,j=S.length;G<j;G++){const te=S[G],Q=te.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;r.copy(Q.mapSize);const N=Q.getFrameExtents();if(r.multiply(N),a.copy(Q.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(a.x=Math.floor(c/N.x),r.x=a.x*N.x,Q.mapSize.x=a.x),r.y>c&&(a.y=Math.floor(c/N.y),r.y=a.y*N.y,Q.mapSize.y=a.y)),Q.map===null||$===!0||U===!0){const k=this.type!==mi?{minFilter:Kt,magFilter:Kt}:{};Q.map!==null&&Q.map.dispose(),Q.map=new $r(r.x,r.y,k),Q.map.texture.name=te.name+".shadowMap",Q.camera.updateProjectionMatrix()}t.setRenderTarget(Q.map),t.clear();const B=Q.getViewportCount();for(let k=0;k<B;k++){const fe=Q.getViewport(k);o.set(a.x*fe.x,a.y*fe.y,a.x*fe.z,a.y*fe.w),Y.viewport(o),Q.updateMatrices(te,k),i=Q.getFrustum(),E(b,R,Q.camera,te,this.type)}Q.isPointLightShadow!==!0&&this.type===mi&&_(Q,R),Q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(P,x,w)};function _(S,b){const R=e.update(v);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new $r(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(b,null,R,h,v,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(b,null,R,p,v,null)}function y(S,b,R,P){let x=null;const w=R.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)x=w;else if(x=R.isPointLight===!0?l:s,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const Y=x.uuid,$=b.uuid;let U=u[Y];U===void 0&&(U={},u[Y]=U);let G=U[$];G===void 0&&(G=x.clone(),U[$]=G),x=G}if(x.visible=b.visible,x.wireframe=b.wireframe,P===mi?x.side=b.shadowSide!==null?b.shadowSide:b.side:x.side=b.shadowSide!==null?b.shadowSide:d[b.side],x.alphaMap=b.alphaMap,x.alphaTest=b.alphaTest,x.map=b.map,x.clipShadows=b.clipShadows,x.clippingPlanes=b.clippingPlanes,x.clipIntersection=b.clipIntersection,x.displacementMap=b.displacementMap,x.displacementScale=b.displacementScale,x.displacementBias=b.displacementBias,x.wireframeLinewidth=b.wireframeLinewidth,x.linewidth=b.linewidth,R.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const Y=t.properties.get(x);Y.light=R}return x}function E(S,b,R,P,x){if(S.visible===!1)return;if(S.layers.test(b.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&x===mi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,S.matrixWorld);const $=e.update(S),U=S.material;if(Array.isArray(U)){const G=$.groups;for(let j=0,te=G.length;j<te;j++){const Q=G[j],N=U[Q.materialIndex];if(N&&N.visible){const B=y(S,N,P,x);t.renderBufferDirect(R,null,$,B,S,Q)}}}else if(U.visible){const G=y(S,U,P,x);t.renderBufferDirect(R,null,$,G,S,null)}}const Y=S.children;for(let $=0,U=Y.length;$<U;$++)E(Y[$],b,R,P,x)}}function $2(t,e,n){const i=n.isWebGL2;function r(){let D=!1;const W=new Ut;let ie=null;const pe=new Ut(0,0,0,0);return{setMask:function(Se){ie!==Se&&!D&&(t.colorMask(Se,Se,Se,Se),ie=Se)},setLocked:function(Se){D=Se},setClear:function(Se,Ze,Qe,kt,Ui){Ui===!0&&(Se*=kt,Ze*=kt,Qe*=kt),W.set(Se,Ze,Qe,kt),pe.equals(W)===!1&&(t.clearColor(Se,Ze,Qe,kt),pe.copy(W))},reset:function(){D=!1,ie=null,pe.set(-1,0,0,0)}}}function a(){let D=!1,W=null,ie=null,pe=null;return{setTest:function(Se){Se?L(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(Se){W!==Se&&!D&&(t.depthMask(Se),W=Se)},setFunc:function(Se){if(ie!==Se){switch(Se){case yT:t.depthFunc(t.NEVER);break;case xT:t.depthFunc(t.ALWAYS);break;case ST:t.depthFunc(t.LESS);break;case Fd:t.depthFunc(t.LEQUAL);break;case ET:t.depthFunc(t.EQUAL);break;case MT:t.depthFunc(t.GEQUAL);break;case wT:t.depthFunc(t.GREATER);break;case TT:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ie=Se}},setLocked:function(Se){D=Se},setClear:function(Se){pe!==Se&&(t.clearDepth(Se),pe=Se)},reset:function(){D=!1,W=null,ie=null,pe=null}}}function o(){let D=!1,W=null,ie=null,pe=null,Se=null,Ze=null,Qe=null,kt=null,Ui=null;return{setTest:function(gt){D||(gt?L(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(gt){W!==gt&&!D&&(t.stencilMask(gt),W=gt)},setFunc:function(gt,En,Kn){(ie!==gt||pe!==En||Se!==Kn)&&(t.stencilFunc(gt,En,Kn),ie=gt,pe=En,Se=Kn)},setOp:function(gt,En,Kn){(Ze!==gt||Qe!==En||kt!==Kn)&&(t.stencilOp(gt,En,Kn),Ze=gt,Qe=En,kt=Kn)},setLocked:function(gt){D=gt},setClear:function(gt){Ui!==gt&&(t.clearStencil(gt),Ui=gt)},reset:function(){D=!1,W=null,ie=null,pe=null,Se=null,Ze=null,Qe=null,kt=null,Ui=null}}}const s=new r,l=new a,u=new o,c=new WeakMap,d=new WeakMap;let h={},p={},g=new WeakMap,v=[],m=null,f=!1,_=null,y=null,E=null,S=null,b=null,R=null,P=null,x=!1,w=null,Y=null,$=null,U=null,G=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,Q=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(N)[1]),te=Q>=1):N.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),te=Q>=2);let B=null,k={};const fe=t.getParameter(t.SCISSOR_BOX),ee=t.getParameter(t.VIEWPORT),H=new Ut().fromArray(fe),Z=new Ut().fromArray(ee);function oe(D,W,ie,pe){const Se=new Uint8Array(4),Ze=t.createTexture();t.bindTexture(D,Ze),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Qe=0;Qe<ie;Qe++)i&&(D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY)?t.texImage3D(W,0,t.RGBA,1,1,pe,0,t.RGBA,t.UNSIGNED_BYTE,Se):t.texImage2D(W+Qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Se);return Ze}const se={};se[t.TEXTURE_2D]=oe(t.TEXTURE_2D,t.TEXTURE_2D,1),se[t.TEXTURE_CUBE_MAP]=oe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(se[t.TEXTURE_2D_ARRAY]=oe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),se[t.TEXTURE_3D]=oe(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),u.setClear(0),L(t.DEPTH_TEST),l.setFunc(Fd),st(!1),_t(ug),L(t.CULL_FACE),Ne(or);function L(D){h[D]!==!0&&(t.enable(D),h[D]=!0)}function Ce(D){h[D]!==!1&&(t.disable(D),h[D]=!1)}function Re(D,W){return p[D]!==W?(t.bindFramebuffer(D,W),p[D]=W,i&&(D===t.DRAW_FRAMEBUFFER&&(p[t.FRAMEBUFFER]=W),D===t.FRAMEBUFFER&&(p[t.DRAW_FRAMEBUFFER]=W)),!0):!1}function le(D,W){let ie=v,pe=!1;if(D)if(ie=g.get(W),ie===void 0&&(ie=[],g.set(W,ie)),D.isWebGLMultipleRenderTargets){const Se=D.texture;if(ie.length!==Se.length||ie[0]!==t.COLOR_ATTACHMENT0){for(let Ze=0,Qe=Se.length;Ze<Qe;Ze++)ie[Ze]=t.COLOR_ATTACHMENT0+Ze;ie.length=Se.length,pe=!0}}else ie[0]!==t.COLOR_ATTACHMENT0&&(ie[0]=t.COLOR_ATTACHMENT0,pe=!0);else ie[0]!==t.BACK&&(ie[0]=t.BACK,pe=!0);pe&&(n.isWebGL2?t.drawBuffers(ie):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ie))}function be(D){return m!==D?(t.useProgram(D),m=D,!0):!1}const $e={[ya]:t.FUNC_ADD,[lT]:t.FUNC_SUBTRACT,[uT]:t.FUNC_REVERSE_SUBTRACT};if(i)$e[hg]=t.MIN,$e[pg]=t.MAX;else{const D=e.get("EXT_blend_minmax");D!==null&&($e[hg]=D.MIN_EXT,$e[pg]=D.MAX_EXT)}const Me={[cT]:t.ZERO,[fT]:t.ONE,[dT]:t.SRC_COLOR,[Hy]:t.SRC_ALPHA,[_T]:t.SRC_ALPHA_SATURATE,[gT]:t.DST_COLOR,[pT]:t.DST_ALPHA,[hT]:t.ONE_MINUS_SRC_COLOR,[Gy]:t.ONE_MINUS_SRC_ALPHA,[vT]:t.ONE_MINUS_DST_COLOR,[mT]:t.ONE_MINUS_DST_ALPHA};function Ne(D,W,ie,pe,Se,Ze,Qe,kt){if(D===or){f===!0&&(Ce(t.BLEND),f=!1);return}if(f===!1&&(L(t.BLEND),f=!0),D!==sT){if(D!==_||kt!==x){if((y!==ya||b!==ya)&&(t.blendEquation(t.FUNC_ADD),y=ya,b=ya),kt)switch(D){case Wa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case cg:t.blendFunc(t.ONE,t.ONE);break;case fg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Wa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case cg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case fg:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}E=null,S=null,R=null,P=null,_=D,x=kt}return}Se=Se||W,Ze=Ze||ie,Qe=Qe||pe,(W!==y||Se!==b)&&(t.blendEquationSeparate($e[W],$e[Se]),y=W,b=Se),(ie!==E||pe!==S||Ze!==R||Qe!==P)&&(t.blendFuncSeparate(Me[ie],Me[pe],Me[Ze],Me[Qe]),E=ie,S=pe,R=Ze,P=Qe),_=D,x=!1}function ft(D,W){D.side===_i?Ce(t.CULL_FACE):L(t.CULL_FACE);let ie=D.side===sn;W&&(ie=!ie),st(ie),D.blending===Wa&&D.transparent===!1?Ne(or):Ne(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),s.setMask(D.colorWrite);const pe=D.stencilWrite;u.setTest(pe),pe&&(u.setMask(D.stencilWriteMask),u.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),u.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ye(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?L(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function st(D){w!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),w=D)}function _t(D){D!==rT?(L(t.CULL_FACE),D!==Y&&(D===ug?t.cullFace(t.BACK):D===aT?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),Y=D}function pt(D){D!==$&&(te&&t.lineWidth(D),$=D)}function Ye(D,W,ie){D?(L(t.POLYGON_OFFSET_FILL),(U!==W||G!==ie)&&(t.polygonOffset(W,ie),U=W,G=ie)):Ce(t.POLYGON_OFFSET_FILL)}function Je(D){D?L(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function Ft(D){D===void 0&&(D=t.TEXTURE0+j-1),B!==D&&(t.activeTexture(D),B=D)}function A(D,W,ie){ie===void 0&&(B===null?ie=t.TEXTURE0+j-1:ie=B);let pe=k[ie];pe===void 0&&(pe={type:void 0,texture:void 0},k[ie]=pe),(pe.type!==D||pe.texture!==W)&&(B!==ie&&(t.activeTexture(ie),B=ie),t.bindTexture(D,W||se[D]),pe.type=D,pe.texture=W)}function M(){const D=k[B];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function V(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function C(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function z(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function he(D){H.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),H.copy(D))}function ye(D){Z.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Z.copy(D))}function Pe(D,W){let ie=d.get(W);ie===void 0&&(ie=new WeakMap,d.set(W,ie));let pe=ie.get(D);pe===void 0&&(pe=t.getUniformBlockIndex(W,D.name),ie.set(D,pe))}function Fe(D,W){const pe=d.get(W).get(D);c.get(W)!==pe&&(t.uniformBlockBinding(W,pe,D.__bindingPointIndex),c.set(W,pe))}function mt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),h={},B=null,k={},p={},g=new WeakMap,v=[],m=null,f=!1,_=null,y=null,E=null,S=null,b=null,R=null,P=null,x=!1,w=null,Y=null,$=null,U=null,G=null,H.set(0,0,t.canvas.width,t.canvas.height),Z.set(0,0,t.canvas.width,t.canvas.height),s.reset(),l.reset(),u.reset()}return{buffers:{color:s,depth:l,stencil:u},enable:L,disable:Ce,bindFramebuffer:Re,drawBuffers:le,useProgram:be,setBlending:Ne,setMaterial:ft,setFlipSided:st,setCullFace:_t,setLineWidth:pt,setPolygonOffset:Ye,setScissorTest:Je,activeTexture:Ft,bindTexture:A,unbindTexture:M,compressedTexImage2D:V,compressedTexImage3D:ne,texImage2D:ve,texImage3D:xe,updateUBOMapping:Pe,uniformBlockBinding:Fe,texStorage2D:z,texStorage3D:de,texSubImage2D:ae,texSubImage3D:ce,compressedTexSubImage2D:C,compressedTexSubImage3D:J,scissor:he,viewport:ye,reset:mt}}function q2(t,e,n,i,r,a,o){const s=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,M){return f?new OffscreenCanvas(A,M):Mu("canvas")}function y(A,M,V,ne){let ae=1;if((A.width>ne||A.height>ne)&&(ae=ne/Math.max(A.width,A.height)),ae<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const ce=M?tb:Math.floor,C=ce(ae*A.width),J=ce(ae*A.height);v===void 0&&(v=_(C,J));const z=V?_(C,J):v;return z.width=C,z.height=J,z.getContext("2d").drawImage(A,0,0,C,J),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+C+"x"+J+")."),z}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function E(A){return Hg(A.width)&&Hg(A.height)}function S(A){return s?!1:A.wrapS!==Vn||A.wrapT!==Vn||A.minFilter!==Kt&&A.minFilter!==bn}function b(A,M){return A.generateMipmaps&&M&&A.minFilter!==Kt&&A.minFilter!==bn}function R(A){t.generateMipmap(A)}function P(A,M,V,ne,ae=!1){if(s===!1)return M;if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ce=M;return M===t.RED&&(V===t.FLOAT&&(ce=t.R32F),V===t.HALF_FLOAT&&(ce=t.R16F),V===t.UNSIGNED_BYTE&&(ce=t.R8)),M===t.RG&&(V===t.FLOAT&&(ce=t.RG32F),V===t.HALF_FLOAT&&(ce=t.RG16F),V===t.UNSIGNED_BYTE&&(ce=t.RG8)),M===t.RGBA&&(V===t.FLOAT&&(ce=t.RGBA32F),V===t.HALF_FLOAT&&(ce=t.RGBA16F),V===t.UNSIGNED_BYTE&&(ce=ne===De&&ae===!1?t.SRGB8_ALPHA8:t.RGBA8),V===t.UNSIGNED_SHORT_4_4_4_4&&(ce=t.RGBA4),V===t.UNSIGNED_SHORT_5_5_5_1&&(ce=t.RGB5_A1)),(ce===t.R16F||ce===t.R32F||ce===t.RG16F||ce===t.RG32F||ce===t.RGBA16F||ce===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function x(A,M,V){return b(A,V)===!0||A.isFramebufferTexture&&A.minFilter!==Kt&&A.minFilter!==bn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function w(A){return A===Kt||A===mg||A===Hc?t.NEAREST:t.LINEAR}function Y(A){const M=A.target;M.removeEventListener("dispose",Y),U(M),M.isVideoTexture&&g.delete(M)}function $(A){const M=A.target;M.removeEventListener("dispose",$),j(M)}function U(A){const M=i.get(A);if(M.__webglInit===void 0)return;const V=A.source,ne=m.get(V);if(ne){const ae=ne[M.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&G(A),Object.keys(ne).length===0&&m.delete(V)}i.remove(A)}function G(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const V=A.source,ne=m.get(V);delete ne[M.__cacheKey],o.memory.textures--}function j(A){const M=A.texture,V=i.get(A),ne=i.get(M);if(ne.__webglTexture!==void 0&&(t.deleteTexture(ne.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++)t.deleteFramebuffer(V.__webglFramebuffer[ae]),V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer[ae]);else{if(t.deleteFramebuffer(V.__webglFramebuffer),V.__webglDepthbuffer&&t.deleteRenderbuffer(V.__webglDepthbuffer),V.__webglMultisampledFramebuffer&&t.deleteFramebuffer(V.__webglMultisampledFramebuffer),V.__webglColorRenderbuffer)for(let ae=0;ae<V.__webglColorRenderbuffer.length;ae++)V.__webglColorRenderbuffer[ae]&&t.deleteRenderbuffer(V.__webglColorRenderbuffer[ae]);V.__webglDepthRenderbuffer&&t.deleteRenderbuffer(V.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let ae=0,ce=M.length;ae<ce;ae++){const C=i.get(M[ae]);C.__webglTexture&&(t.deleteTexture(C.__webglTexture),o.memory.textures--),i.remove(M[ae])}i.remove(M),i.remove(A)}let te=0;function Q(){te=0}function N(){const A=te;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),te+=1,A}function B(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function k(A,M){const V=i.get(A);if(A.isVideoTexture&&Je(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const ne=A.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(V,A,M);return}}n.bindTexture(t.TEXTURE_2D,V.__webglTexture,t.TEXTURE0+M)}function fe(A,M){const V=i.get(A);if(A.version>0&&V.__version!==A.version){Ce(V,A,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,V.__webglTexture,t.TEXTURE0+M)}function ee(A,M){const V=i.get(A);if(A.version>0&&V.__version!==A.version){Ce(V,A,M);return}n.bindTexture(t.TEXTURE_3D,V.__webglTexture,t.TEXTURE0+M)}function H(A,M){const V=i.get(A);if(A.version>0&&V.__version!==A.version){Re(V,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,V.__webglTexture,t.TEXTURE0+M)}const Z={[Bd]:t.REPEAT,[Vn]:t.CLAMP_TO_EDGE,[Hd]:t.MIRRORED_REPEAT},oe={[Kt]:t.NEAREST,[mg]:t.NEAREST_MIPMAP_NEAREST,[Hc]:t.NEAREST_MIPMAP_LINEAR,[bn]:t.LINEAR,[NT]:t.LINEAR_MIPMAP_NEAREST,[ps]:t.LINEAR_MIPMAP_LINEAR};function se(A,M,V){if(V?(t.texParameteri(A,t.TEXTURE_WRAP_S,Z[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,Z[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,Z[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,oe[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,oe[M.minFilter])):(t.texParameteri(A,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(A,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(M.wrapS!==Vn||M.wrapT!==Vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(A,t.TEXTURE_MAG_FILTER,w(M.magFilter)),t.texParameteri(A,t.TEXTURE_MIN_FILTER,w(M.minFilter)),M.minFilter!==Kt&&M.minFilter!==bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===Kt||M.minFilter!==Hc&&M.minFilter!==ps||M.type===Ur&&e.has("OES_texture_float_linear")===!1||s===!1&&M.type===ms&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||i.get(M).__currentAnisotropy)&&(t.texParameterf(A,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy)}}function L(A,M){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",Y));const ne=M.source;let ae=m.get(ne);ae===void 0&&(ae={},m.set(ne,ae));const ce=B(M);if(ce!==A.__cacheKey){ae[ce]===void 0&&(ae[ce]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,V=!0),ae[ce].usedTimes++;const C=ae[A.__cacheKey];C!==void 0&&(ae[A.__cacheKey].usedTimes--,C.usedTimes===0&&G(M)),A.__cacheKey=ce,A.__webglTexture=ae[ce].texture}return V}function Ce(A,M,V){let ne=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ne=t.TEXTURE_3D);const ae=L(A,M),ce=M.source;n.bindTexture(ne,A.__webglTexture,t.TEXTURE0+V);const C=i.get(ce);if(ce.version!==C.__version||ae===!0){n.activeTexture(t.TEXTURE0+V),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const J=S(M)&&E(M.image)===!1;let z=y(M.image,J,!1,c);z=Ft(M,z);const de=E(z)||s,ve=a.convert(M.format,M.colorSpace);let xe=a.convert(M.type),he=P(M.internalFormat,ve,xe,M.colorSpace);se(ne,M,de);let ye;const Pe=M.mipmaps,Fe=s&&M.isVideoTexture!==!0,mt=C.__version===void 0||ae===!0,D=x(M,z,de);if(M.isDepthTexture)he=t.DEPTH_COMPONENT,s?M.type===Ur?he=t.DEPTH_COMPONENT32F:M.type===Nr?he=t.DEPTH_COMPONENT24:M.type===Xa?he=t.DEPTH24_STENCIL8:he=t.DEPTH_COMPONENT16:M.type===Ur&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Fr&&he===t.DEPTH_COMPONENT&&M.type!==Xy&&M.type!==Nr&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Nr,xe=a.convert(M.type)),M.format===io&&he===t.DEPTH_COMPONENT&&(he=t.DEPTH_STENCIL,M.type!==Xa&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Xa,xe=a.convert(M.type))),mt&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,he,z.width,z.height):n.texImage2D(t.TEXTURE_2D,0,he,z.width,z.height,0,ve,xe,null));else if(M.isDataTexture)if(Pe.length>0&&de){Fe&&mt&&n.texStorage2D(t.TEXTURE_2D,D,he,Pe[0].width,Pe[0].height);for(let W=0,ie=Pe.length;W<ie;W++)ye=Pe[W],Fe?n.texSubImage2D(t.TEXTURE_2D,W,0,0,ye.width,ye.height,ve,xe,ye.data):n.texImage2D(t.TEXTURE_2D,W,he,ye.width,ye.height,0,ve,xe,ye.data);M.generateMipmaps=!1}else Fe?(mt&&n.texStorage2D(t.TEXTURE_2D,D,he,z.width,z.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,z.width,z.height,ve,xe,z.data)):n.texImage2D(t.TEXTURE_2D,0,he,z.width,z.height,0,ve,xe,z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Fe&&mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,D,he,Pe[0].width,Pe[0].height,z.depth);for(let W=0,ie=Pe.length;W<ie;W++)ye=Pe[W],M.format!==Wn?ve!==null?Fe?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,ye.width,ye.height,z.depth,ve,ye.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,he,ye.width,ye.height,z.depth,0,ye.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,ye.width,ye.height,z.depth,ve,xe,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,he,ye.width,ye.height,z.depth,0,ve,xe,ye.data)}else{Fe&&mt&&n.texStorage2D(t.TEXTURE_2D,D,he,Pe[0].width,Pe[0].height);for(let W=0,ie=Pe.length;W<ie;W++)ye=Pe[W],M.format!==Wn?ve!==null?Fe?n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,ye.width,ye.height,ve,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,W,he,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?n.texSubImage2D(t.TEXTURE_2D,W,0,0,ye.width,ye.height,ve,xe,ye.data):n.texImage2D(t.TEXTURE_2D,W,he,ye.width,ye.height,0,ve,xe,ye.data)}else if(M.isDataArrayTexture)Fe?(mt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,D,he,z.width,z.height,z.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,z.width,z.height,z.depth,ve,xe,z.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,he,z.width,z.height,z.depth,0,ve,xe,z.data);else if(M.isData3DTexture)Fe?(mt&&n.texStorage3D(t.TEXTURE_3D,D,he,z.width,z.height,z.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,z.width,z.height,z.depth,ve,xe,z.data)):n.texImage3D(t.TEXTURE_3D,0,he,z.width,z.height,z.depth,0,ve,xe,z.data);else if(M.isFramebufferTexture){if(mt)if(Fe)n.texStorage2D(t.TEXTURE_2D,D,he,z.width,z.height);else{let W=z.width,ie=z.height;for(let pe=0;pe<D;pe++)n.texImage2D(t.TEXTURE_2D,pe,he,W,ie,0,ve,xe,null),W>>=1,ie>>=1}}else if(Pe.length>0&&de){Fe&&mt&&n.texStorage2D(t.TEXTURE_2D,D,he,Pe[0].width,Pe[0].height);for(let W=0,ie=Pe.length;W<ie;W++)ye=Pe[W],Fe?n.texSubImage2D(t.TEXTURE_2D,W,0,0,ve,xe,ye):n.texImage2D(t.TEXTURE_2D,W,he,ve,xe,ye);M.generateMipmaps=!1}else Fe?(mt&&n.texStorage2D(t.TEXTURE_2D,D,he,z.width,z.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,xe,z)):n.texImage2D(t.TEXTURE_2D,0,he,ve,xe,z);b(M,de)&&R(ne),C.__version=ce.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Re(A,M,V){if(M.image.length!==6)return;const ne=L(A,M),ae=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+V);const ce=i.get(ae);if(ae.version!==ce.__version||ne===!0){n.activeTexture(t.TEXTURE0+V),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const C=M.isCompressedTexture||M.image[0].isCompressedTexture,J=M.image[0]&&M.image[0].isDataTexture,z=[];for(let W=0;W<6;W++)!C&&!J?z[W]=y(M.image[W],!1,!0,u):z[W]=J?M.image[W].image:M.image[W],z[W]=Ft(M,z[W]);const de=z[0],ve=E(de)||s,xe=a.convert(M.format,M.colorSpace),he=a.convert(M.type),ye=P(M.internalFormat,xe,he,M.colorSpace),Pe=s&&M.isVideoTexture!==!0,Fe=ce.__version===void 0||ne===!0;let mt=x(M,de,ve);se(t.TEXTURE_CUBE_MAP,M,ve);let D;if(C){Pe&&Fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,mt,ye,de.width,de.height);for(let W=0;W<6;W++){D=z[W].mipmaps;for(let ie=0;ie<D.length;ie++){const pe=D[ie];M.format!==Wn?xe!==null?Pe?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ie,0,0,pe.width,pe.height,xe,pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ie,ye,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ie,0,0,pe.width,pe.height,xe,he,pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ie,ye,pe.width,pe.height,0,xe,he,pe.data)}}}else{D=M.mipmaps,Pe&&Fe&&(D.length>0&&mt++,n.texStorage2D(t.TEXTURE_CUBE_MAP,mt,ye,z[0].width,z[0].height));for(let W=0;W<6;W++)if(J){Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,z[W].width,z[W].height,xe,he,z[W].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,ye,z[W].width,z[W].height,0,xe,he,z[W].data);for(let ie=0;ie<D.length;ie++){const Se=D[ie].image[W].image;Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ie+1,0,0,Se.width,Se.height,xe,he,Se.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ie+1,ye,Se.width,Se.height,0,xe,he,Se.data)}}else{Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,0,0,xe,he,z[W]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,0,ye,xe,he,z[W]);for(let ie=0;ie<D.length;ie++){const pe=D[ie];Pe?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ie+1,0,0,xe,he,pe.image[W]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+W,ie+1,ye,xe,he,pe.image[W])}}}b(M,ve)&&R(t.TEXTURE_CUBE_MAP),ce.__version=ae.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function le(A,M,V,ne,ae){const ce=a.convert(V.format,V.colorSpace),C=a.convert(V.type),J=P(V.internalFormat,ce,C,V.colorSpace);i.get(M).__hasExternalTextures||(ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,J,M.width,M.height,M.depth,0,ce,C,null):n.texImage2D(ae,0,J,M.width,M.height,0,ce,C,null)),n.bindFramebuffer(t.FRAMEBUFFER,A),Ye(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,ae,i.get(V).__webglTexture,0,pt(M)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,ae,i.get(V).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function be(A,M,V){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let ne=t.DEPTH_COMPONENT16;if(V||Ye(M)){const ae=M.depthTexture;ae&&ae.isDepthTexture&&(ae.type===Ur?ne=t.DEPTH_COMPONENT32F:ae.type===Nr&&(ne=t.DEPTH_COMPONENT24));const ce=pt(M);Ye(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,ne,M.width,M.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,ne,M.width,M.height)}else t.renderbufferStorage(t.RENDERBUFFER,ne,M.width,M.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const ne=pt(M);V&&Ye(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,M.width,M.height):Ye(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,t.DEPTH24_STENCIL8,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,A)}else{const ne=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let ae=0;ae<ne.length;ae++){const ce=ne[ae],C=a.convert(ce.format,ce.colorSpace),J=a.convert(ce.type),z=P(ce.internalFormat,C,J,ce.colorSpace),de=pt(M);V&&Ye(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,z,M.width,M.height):Ye(M)?h.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,z,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,z,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function $e(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),k(M.depthTexture,0);const ne=i.get(M.depthTexture).__webglTexture,ae=pt(M);if(M.depthTexture.format===Fr)Ye(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(M.depthTexture.format===io)Ye(M)?h.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,ae):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Me(A){const M=i.get(A),V=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");$e(M.__webglFramebuffer,A)}else if(V){M.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ne]),M.__webglDepthbuffer[ne]=t.createRenderbuffer(),be(M.__webglDepthbuffer[ne],A,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=t.createRenderbuffer(),be(M.__webglDepthbuffer,A,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(A,M,V){const ne=i.get(A);M!==void 0&&le(ne.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),V!==void 0&&Me(A)}function ft(A){const M=A.texture,V=i.get(A),ne=i.get(M);A.addEventListener("dispose",$),A.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=M.version,o.memory.textures++);const ae=A.isWebGLCubeRenderTarget===!0,ce=A.isWebGLMultipleRenderTargets===!0,C=E(A)||s;if(ae){V.__webglFramebuffer=[];for(let J=0;J<6;J++)V.__webglFramebuffer[J]=t.createFramebuffer()}else{if(V.__webglFramebuffer=t.createFramebuffer(),ce)if(r.drawBuffers){const J=A.texture;for(let z=0,de=J.length;z<de;z++){const ve=i.get(J[z]);ve.__webglTexture===void 0&&(ve.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&A.samples>0&&Ye(A)===!1){const J=ce?M:[M];V.__webglMultisampledFramebuffer=t.createFramebuffer(),V.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let z=0;z<J.length;z++){const de=J[z];V.__webglColorRenderbuffer[z]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,V.__webglColorRenderbuffer[z]);const ve=a.convert(de.format,de.colorSpace),xe=a.convert(de.type),he=P(de.internalFormat,ve,xe,de.colorSpace,A.isXRRenderTarget===!0),ye=pt(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,ye,he,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+z,t.RENDERBUFFER,V.__webglColorRenderbuffer[z])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=t.createRenderbuffer(),be(V.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),se(t.TEXTURE_CUBE_MAP,M,C);for(let J=0;J<6;J++)le(V.__webglFramebuffer[J],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J);b(M,C)&&R(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){const J=A.texture;for(let z=0,de=J.length;z<de;z++){const ve=J[z],xe=i.get(ve);n.bindTexture(t.TEXTURE_2D,xe.__webglTexture),se(t.TEXTURE_2D,ve,C),le(V.__webglFramebuffer,A,ve,t.COLOR_ATTACHMENT0+z,t.TEXTURE_2D),b(ve,C)&&R(t.TEXTURE_2D)}n.unbindTexture()}else{let J=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(s?J=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(J,ne.__webglTexture),se(J,M,C),le(V.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,J),b(M,C)&&R(J),n.unbindTexture()}A.depthBuffer&&Me(A)}function st(A){const M=E(A)||s,V=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let ne=0,ae=V.length;ne<ae;ne++){const ce=V[ne];if(b(ce,M)){const C=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,J=i.get(ce).__webglTexture;n.bindTexture(C,J),R(C),n.unbindTexture()}}}function _t(A){if(s&&A.samples>0&&Ye(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],V=A.width,ne=A.height;let ae=t.COLOR_BUFFER_BIT;const ce=[],C=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=i.get(A),z=A.isWebGLMultipleRenderTargets===!0;if(z)for(let de=0;de<M.length;de++)n.bindFramebuffer(t.FRAMEBUFFER,J.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,J.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,J.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,J.__webglFramebuffer);for(let de=0;de<M.length;de++){ce.push(t.COLOR_ATTACHMENT0+de),A.depthBuffer&&ce.push(C);const ve=J.__ignoreDepthValues!==void 0?J.__ignoreDepthValues:!1;if(ve===!1&&(A.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),z&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,J.__webglColorRenderbuffer[de]),ve===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[C]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[C])),z){const xe=i.get(M[de]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,xe,0)}t.blitFramebuffer(0,0,V,ne,0,0,V,ne,ae,t.NEAREST),p&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ce)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),z)for(let de=0;de<M.length;de++){n.bindFramebuffer(t.FRAMEBUFFER,J.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,J.__webglColorRenderbuffer[de]);const ve=i.get(M[de]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,J.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,J.__webglMultisampledFramebuffer)}}function pt(A){return Math.min(d,A.samples)}function Ye(A){const M=i.get(A);return s&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Je(A){const M=o.render.frame;g.get(A)!==M&&(g.set(A,M),A.update())}function Ft(A,M){const V=A.colorSpace,ne=A.format,ae=A.type;return A.isCompressedTexture===!0||A.format===Gd||V!==si&&V!==zr&&(V===De?s===!1?e.has("EXT_sRGB")===!0&&ne===Wn?(A.format=Gd,A.minFilter=bn,A.generateMipmaps=!1):M=qy.sRGBToLinear(M):(ne!==Wn||ae!==Yr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}this.allocateTextureUnit=N,this.resetTextureUnits=Q,this.setTexture2D=k,this.setTexture2DArray=fe,this.setTexture3D=ee,this.setTextureCube=H,this.rebindTextures=Ne,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=st,this.updateMultisampleRenderTarget=_t,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=le,this.useMultisampledRTT=Ye}function K2(t,e,n){const i=n.isWebGL2;function r(a,o=zr){let s;if(a===Yr)return t.UNSIGNED_BYTE;if(a===FT)return t.UNSIGNED_SHORT_4_4_4_4;if(a===kT)return t.UNSIGNED_SHORT_5_5_5_1;if(a===UT)return t.BYTE;if(a===IT)return t.SHORT;if(a===Xy)return t.UNSIGNED_SHORT;if(a===OT)return t.INT;if(a===Nr)return t.UNSIGNED_INT;if(a===Ur)return t.FLOAT;if(a===ms)return i?t.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(a===zT)return t.ALPHA;if(a===Wn)return t.RGBA;if(a===BT)return t.LUMINANCE;if(a===HT)return t.LUMINANCE_ALPHA;if(a===Fr)return t.DEPTH_COMPONENT;if(a===io)return t.DEPTH_STENCIL;if(a===Gd)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(a===GT)return t.RED;if(a===VT)return t.RED_INTEGER;if(a===WT)return t.RG;if(a===XT)return t.RG_INTEGER;if(a===jT)return t.RGBA_INTEGER;if(a===Gc||a===Vc||a===Wc||a===Xc)if(o===De)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(a===Gc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Wc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Xc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(a===Gc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Vc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Wc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Xc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===gg||a===vg||a===_g||a===yg)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(a===gg)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===vg)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===_g)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===yg)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===YT)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(a===xg||a===Sg)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(a===xg)return o===De?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(a===Sg)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(a===Eg||a===Mg||a===wg||a===Tg||a===bg||a===Ag||a===Rg||a===Cg||a===Pg||a===Lg||a===Dg||a===Ng||a===Ug||a===Ig)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(a===Eg)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Mg)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===wg)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Tg)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===bg)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ag)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Rg)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Cg)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Pg)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Lg)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Dg)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Ng)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Ug)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Ig)return o===De?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===jc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(a===jc)return o===De?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(a===$T||a===Og||a===Fg||a===kg)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(a===jc)return s.COMPRESSED_RED_RGTC1_EXT;if(a===Og)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Fg)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===kg)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Xa?i?t.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):t[a]!==void 0?t[a]:null}return{convert:r}}class Z2 extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Tl extends ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Q2={type:"move"};class vf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,a=null,o=null;const s=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),f=this._getHandJoint(u,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),p=.02,g=.005;u.inputState.pinching&&h>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=n.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&a!==null&&(r=a),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(Q2)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=a!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Tl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class J2 extends vn{constructor(e,n,i,r,a,o,s,l,u,c){if(c=c!==void 0?c:Fr,c!==Fr&&c!==io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Fr&&(i=Nr),i===void 0&&c===io&&(i=Xa),super(null,r,a,o,s,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=s!==void 0?s:Kt,this.minFilter=l!==void 0?l:Kt,this.flipY=!1,this.generateMipmaps=!1}}class eP extends Jr{constructor(e,n){super();const i=this;let r=null,a=1,o=null,s="local-floor",l=1,u=null,c=null,d=null,h=null,p=null,g=null;const v=n.getContextAttributes();let m=null,f=null;const _=[],y=[],E=new Set,S=new Map,b=new An;b.layers.enable(1),b.viewport=new Ut;const R=new An;R.layers.enable(2),R.viewport=new Ut;const P=[b,R],x=new Z2;x.layers.enable(1),x.layers.enable(2);let w=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Z=_[H];return Z===void 0&&(Z=new vf,_[H]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(H){let Z=_[H];return Z===void 0&&(Z=new vf,_[H]=Z),Z.getGripSpace()},this.getHand=function(H){let Z=_[H];return Z===void 0&&(Z=new vf,_[H]=Z),Z.getHandSpace()};function $(H){const Z=y.indexOf(H.inputSource);if(Z===-1)return;const oe=_[Z];oe!==void 0&&(oe.update(H.inputSource,H.frame,u||o),oe.dispatchEvent({type:H.type,data:H.inputSource}))}function U(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",U),r.removeEventListener("inputsourceschange",G);for(let H=0;H<_.length;H++){const Z=y[H];Z!==null&&(y[H]=null,_[H].disconnect(Z))}w=null,Y=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,f=null,ee.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(H){u=H},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(H){if(r=H,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",U),r.addEventListener("inputsourceschange",G),v.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Z={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,n,Z),r.updateRenderState({baseLayer:p}),f=new $r(p.framebufferWidth,p.framebufferHeight,{format:Wn,type:Yr,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let Z=null,oe=null,se=null;v.depth&&(se=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Z=v.stencil?io:Fr,oe=v.stencil?Xa:Nr);const L={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:a};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(L),r.updateRenderState({layers:[h]}),f=new $r(h.textureWidth,h.textureHeight,{format:Wn,type:Yr,depthTexture:new J2(h.textureWidth,h.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const Ce=e.properties.get(f);Ce.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(s),ee.setContext(r),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function G(H){for(let Z=0;Z<H.removed.length;Z++){const oe=H.removed[Z],se=y.indexOf(oe);se>=0&&(y[se]=null,_[se].disconnect(oe))}for(let Z=0;Z<H.added.length;Z++){const oe=H.added[Z];let se=y.indexOf(oe);if(se===-1){for(let Ce=0;Ce<_.length;Ce++)if(Ce>=y.length){y.push(oe),se=Ce;break}else if(y[Ce]===null){y[Ce]=oe,se=Ce;break}if(se===-1)break}const L=_[se];L&&L.connect(oe)}}const j=new F,te=new F;function Q(H,Z,oe){j.setFromMatrixPosition(Z.matrixWorld),te.setFromMatrixPosition(oe.matrixWorld);const se=j.distanceTo(te),L=Z.projectionMatrix.elements,Ce=oe.projectionMatrix.elements,Re=L[14]/(L[10]-1),le=L[14]/(L[10]+1),be=(L[9]+1)/L[5],$e=(L[9]-1)/L[5],Me=(L[8]-1)/L[0],Ne=(Ce[8]+1)/Ce[0],ft=Re*Me,st=Re*Ne,_t=se/(-Me+Ne),pt=_t*-Me;Z.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX(pt),H.translateZ(_t),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const Ye=Re+_t,Je=le+_t,Ft=ft-pt,A=st+(se-pt),M=be*le/Je*Ye,V=$e*le/Je*Ye;H.projectionMatrix.makePerspective(Ft,A,M,V,Ye,Je),H.projectionMatrixInverse.copy(H.projectionMatrix).invert()}function N(H,Z){Z===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Z.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(r===null)return;x.near=R.near=b.near=H.near,x.far=R.far=b.far=H.far,(w!==x.near||Y!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,Y=x.far);const Z=H.parent,oe=x.cameras;N(x,Z);for(let se=0;se<oe.length;se++)N(oe[se],Z);oe.length===2?Q(x,b,R):x.projectionMatrix.copy(b.projectionMatrix),B(H,x,Z)};function B(H,Z,oe){oe===null?H.matrix.copy(Z.matrixWorld):(H.matrix.copy(oe.matrixWorld),H.matrix.invert(),H.matrix.multiply(Z.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0);const se=H.children;for(let L=0,Ce=se.length;L<Ce;L++)se[L].updateMatrixWorld(!0);H.projectionMatrix.copy(Z.projectionMatrix),H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=Vd*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(H){l=H,h!==null&&(h.fixedFoveation=H),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=H)},this.getPlanes=function(){return E};let k=null;function fe(H,Z){if(c=Z.getViewerPose(u||o),g=Z,c!==null){const oe=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let se=!1;oe.length!==x.cameras.length&&(x.cameras.length=0,se=!0);for(let L=0;L<oe.length;L++){const Ce=oe[L];let Re=null;if(p!==null)Re=p.getViewport(Ce);else{const be=d.getViewSubImage(h,Ce);Re=be.viewport,L===0&&(e.setRenderTargetTextures(f,be.colorTexture,h.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(f))}let le=P[L];le===void 0&&(le=new An,le.layers.enable(L),le.viewport=new Ut,P[L]=le),le.matrix.fromArray(Ce.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(Ce.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Re.x,Re.y,Re.width,Re.height),L===0&&(x.matrix.copy(le.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),se===!0&&x.cameras.push(le)}}for(let oe=0;oe<_.length;oe++){const se=y[oe],L=_[oe];se!==null&&L!==void 0&&L.update(se,Z,u||o)}if(k&&k(H,Z),Z.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:Z.detectedPlanes});let oe=null;for(const se of E)Z.detectedPlanes.has(se)||(oe===null&&(oe=[]),oe.push(se));if(oe!==null)for(const se of oe)E.delete(se),S.delete(se),i.dispatchEvent({type:"planeremoved",data:se});for(const se of Z.detectedPlanes)if(!E.has(se))E.add(se),S.set(se,Z.lastChangedTime),i.dispatchEvent({type:"planeadded",data:se});else{const L=S.get(se);se.lastChangedTime>L&&(S.set(se,se.lastChangedTime),i.dispatchEvent({type:"planechanged",data:se}))}}g=null}const ee=new lx;ee.setAnimationLoop(fe),this.setAnimationLoop=function(H){k=H},this.dispose=function(){}}}function tP(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,rx(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,y,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),d(m,f)):f.isMeshPhongMaterial?(a(m,f),c(m,f)):f.isMeshStandardMaterial?(a(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,E)):f.isMeshMatcapMaterial?(a(m,f),g(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),v(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&s(m,f)):f.isPointsMaterial?l(m,f,_,y):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===sn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===sn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const y=t.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*y,n(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function s(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=y*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===sn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nP(t,e,n,i){let r={},a={},o=[];const s=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,y){const E=y.program;i.uniformBlockBinding(_,E)}function u(_,y){let E=r[_.id];E===void 0&&(g(_),E=c(_),r[_.id]=E,_.addEventListener("dispose",m));const S=y.program;i.updateUBOMapping(_,S);const b=e.render.frame;a[_.id]!==b&&(h(_),a[_.id]=b)}function c(_){const y=d();_.__bindingPointIndex=y;const E=t.createBuffer(),S=_.__size,b=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,S,b),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,y,E),E}function d(){for(let _=0;_<s;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const y=r[_.id],E=_.uniforms,S=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let b=0,R=E.length;b<R;b++){const P=E[b];if(p(P,b,S)===!0){const x=P.__offset,w=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let $=0;$<w.length;$++){const U=w[$],G=v(U);typeof U=="number"?(P.__data[0]=U,t.bufferSubData(t.UNIFORM_BUFFER,x+Y,P.__data)):U.isMatrix3?(P.__data[0]=U.elements[0],P.__data[1]=U.elements[1],P.__data[2]=U.elements[2],P.__data[3]=U.elements[0],P.__data[4]=U.elements[3],P.__data[5]=U.elements[4],P.__data[6]=U.elements[5],P.__data[7]=U.elements[0],P.__data[8]=U.elements[6],P.__data[9]=U.elements[7],P.__data[10]=U.elements[8],P.__data[11]=U.elements[0]):(U.toArray(P.__data,Y),Y+=G.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,x,P.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(_,y,E){const S=_.value;if(E[y]===void 0){if(typeof S=="number")E[y]=S;else{const b=Array.isArray(S)?S:[S],R=[];for(let P=0;P<b.length;P++)R.push(b[P].clone());E[y]=R}return!0}else if(typeof S=="number"){if(E[y]!==S)return E[y]=S,!0}else{const b=Array.isArray(E[y])?E[y]:[E[y]],R=Array.isArray(S)?S:[S];for(let P=0;P<b.length;P++){const x=b[P];if(x.equals(R[P])===!1)return x.copy(R[P]),!0}}return!1}function g(_){const y=_.uniforms;let E=0;const S=16;let b=0;for(let R=0,P=y.length;R<P;R++){const x=y[R],w={boundary:0,storage:0},Y=Array.isArray(x.value)?x.value:[x.value];for(let $=0,U=Y.length;$<U;$++){const G=Y[$],j=v(G);w.boundary+=j.boundary,w.storage+=j.storage}if(x.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=E,R>0){b=E%S;const $=S-b;b!==0&&$-w.boundary<0&&(E+=S-b,x.__offset=E)}E+=w.storage}return b=E%S,b>0&&(E+=S-b),_.__size=E,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const E=o.indexOf(y.__bindingPointIndex);o.splice(E,1),t.deleteBuffer(r[y.id]),delete r[y.id],delete a[y.id]}function f(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},a={}}return{bind:l,update:u,dispose:f}}function iP(){const t=Mu("canvas");return t.style.display="block",t}class hx{constructor(e={}){const{canvas:n=iP(),context:i=null,depth:r=!0,stencil:a=!0,alpha:o=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;let p=null,g=null;const v=[],m=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=De,this.useLegacyLights=!0,this.toneMapping=Ei,this.toneMappingExposure=1;const f=this;let _=!1,y=0,E=0,S=null,b=-1,R=null;const P=new Ut,x=new Ut;let w=null,Y=n.width,$=n.height,U=1,G=null,j=null;const te=new Ut(0,0,Y,$),Q=new Ut(0,0,Y,$);let N=!1;const B=new sx;let k=!1,fe=!1,ee=null;const H=new Dt,Z=new F,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function se(){return S===null?U:1}let L=i;function Ce(T,O){for(let X=0;X<T.length;X++){const I=T[X],K=n.getContext(I,O);if(K!==null)return K}return null}try{const T={alpha:!0,depth:r,stencil:a,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ap}`),n.addEventListener("webglcontextlost",ye,!1),n.addEventListener("webglcontextrestored",Pe,!1),n.addEventListener("webglcontextcreationerror",Fe,!1),L===null){const O=["webgl2","webgl","experimental-webgl"];if(f.isWebGL1Renderer===!0&&O.shift(),L=Ce(O,T),L===null)throw Ce(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}L.getShaderPrecisionFormat===void 0&&(L.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Re,le,be,$e,Me,Ne,ft,st,_t,pt,Ye,Je,Ft,A,M,V,ne,ae,ce,C,J,z,de,ve;function xe(){Re=new pC(L),le=new sC(L,Re,e),Re.init(le),z=new K2(L,Re,le),be=new $2(L,Re,le),$e=new vC(L),Me=new U2,Ne=new q2(L,Re,be,Me,le,z,$e),ft=new uC(f),st=new hC(f),_t=new Rb(L,le),de=new aC(L,Re,_t,le),pt=new mC(L,_t,$e,de),Ye=new SC(L,pt,_t,$e),ce=new xC(L,le,Ne),V=new lC(Me),Je=new N2(f,ft,st,Re,le,de,V),Ft=new tP(f,Me),A=new O2,M=new G2(Re,le),ae=new rC(f,ft,st,be,Ye,h,l),ne=new Y2(f,Ye,le),ve=new nP(L,$e,le,be),C=new oC(L,Re,$e,le),J=new gC(L,Re,$e,le),$e.programs=Je.programs,f.capabilities=le,f.extensions=Re,f.properties=Me,f.renderLists=A,f.shadowMap=ne,f.state=be,f.info=$e}xe();const he=new eP(f,L);this.xr=he,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const T=Re.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Re.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(T){T!==void 0&&(U=T,this.setSize(Y,$,!1))},this.getSize=function(T){return T.set(Y,$)},this.setSize=function(T,O,X=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,$=O,n.width=Math.floor(T*U),n.height=Math.floor(O*U),X===!0&&(n.style.width=T+"px",n.style.height=O+"px"),this.setViewport(0,0,T,O)},this.getDrawingBufferSize=function(T){return T.set(Y*U,$*U).floor()},this.setDrawingBufferSize=function(T,O,X){Y=T,$=O,U=X,n.width=Math.floor(T*X),n.height=Math.floor(O*X),this.setViewport(0,0,T,O)},this.getCurrentViewport=function(T){return T.copy(P)},this.getViewport=function(T){return T.copy(te)},this.setViewport=function(T,O,X,I){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,O,X,I),be.viewport(P.copy(te).multiplyScalar(U).floor())},this.getScissor=function(T){return T.copy(Q)},this.setScissor=function(T,O,X,I){T.isVector4?Q.set(T.x,T.y,T.z,T.w):Q.set(T,O,X,I),be.scissor(x.copy(Q).multiplyScalar(U).floor())},this.getScissorTest=function(){return N},this.setScissorTest=function(T){be.setScissorTest(N=T)},this.setOpaqueSort=function(T){G=T},this.setTransparentSort=function(T){j=T},this.getClearColor=function(T){return T.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor.apply(ae,arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha.apply(ae,arguments)},this.clear=function(T=!0,O=!0,X=!0){let I=0;T&&(I|=L.COLOR_BUFFER_BIT),O&&(I|=L.DEPTH_BUFFER_BIT),X&&(I|=L.STENCIL_BUFFER_BIT),L.clear(I)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ye,!1),n.removeEventListener("webglcontextrestored",Pe,!1),n.removeEventListener("webglcontextcreationerror",Fe,!1),A.dispose(),M.dispose(),Me.dispose(),ft.dispose(),st.dispose(),Ye.dispose(),de.dispose(),ve.dispose(),Je.dispose(),he.dispose(),he.removeEventListener("sessionstart",Se),he.removeEventListener("sessionend",Ze),ee&&(ee.dispose(),ee=null),Qe.stop()};function ye(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const T=$e.autoReset,O=ne.enabled,X=ne.autoUpdate,I=ne.needsUpdate,K=ne.type;xe(),$e.autoReset=T,ne.enabled=O,ne.autoUpdate=X,ne.needsUpdate=I,ne.type=K}function Fe(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function mt(T){const O=T.target;O.removeEventListener("dispose",mt),D(O)}function D(T){W(T),Me.remove(T)}function W(T){const O=Me.get(T).programs;O!==void 0&&(O.forEach(function(X){Je.releaseProgram(X)}),T.isShaderMaterial&&Je.releaseShaderCache(T))}this.renderBufferDirect=function(T,O,X,I,K,Te){O===null&&(O=oe);const Ae=K.isMesh&&K.matrixWorld.determinant()<0,Le=Ux(T,O,X,I,K);be.setMaterial(I,Ae);let Ue=X.index,ke=1;I.wireframe===!0&&(Ue=pt.getWireframeAttribute(X),ke=2);const ze=X.drawRange,Be=X.attributes.position;let Ke=ze.start*ke,Xt=(ze.start+ze.count)*ke;Te!==null&&(Ke=Math.max(Ke,Te.start*ke),Xt=Math.min(Xt,(Te.start+Te.count)*ke)),Ue!==null?(Ke=Math.max(Ke,0),Xt=Math.min(Xt,Ue.count)):Be!=null&&(Ke=Math.max(Ke,0),Xt=Math.min(Xt,Be.count));const Nn=Xt-Ke;if(Nn<0||Nn===1/0)return;de.setup(K,I,Le,X,Ue);let vr,yt=C;if(Ue!==null&&(vr=_t.get(Ue),yt=J,yt.setIndex(vr)),K.isMesh)I.wireframe===!0?(be.setLineWidth(I.wireframeLinewidth*se()),yt.setMode(L.LINES)):yt.setMode(L.TRIANGLES);else if(K.isLine){let We=I.linewidth;We===void 0&&(We=1),be.setLineWidth(We*se()),K.isLineSegments?yt.setMode(L.LINES):K.isLineLoop?yt.setMode(L.LINE_LOOP):yt.setMode(L.LINE_STRIP)}else K.isPoints?yt.setMode(L.POINTS):K.isSprite&&yt.setMode(L.TRIANGLES);if(K.isInstancedMesh)yt.renderInstances(Ke,Nn,K.count);else if(X.isInstancedBufferGeometry){const We=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ac=Math.min(X.instanceCount,We);yt.renderInstances(Ke,Nn,ac)}else yt.render(Ke,Nn)},this.compile=function(T,O){function X(I,K,Te){I.transparent===!0&&I.side===_i&&I.forceSinglePass===!1?(I.side=sn,I.needsUpdate=!0,Ls(I,K,Te),I.side=hr,I.needsUpdate=!0,Ls(I,K,Te),I.side=_i):Ls(I,K,Te)}g=M.get(T),g.init(),m.push(g),T.traverseVisible(function(I){I.isLight&&I.layers.test(O.layers)&&(g.pushLight(I),I.castShadow&&g.pushShadow(I))}),g.setupLights(f.useLegacyLights),T.traverse(function(I){const K=I.material;if(K)if(Array.isArray(K))for(let Te=0;Te<K.length;Te++){const Ae=K[Te];X(Ae,T,I)}else X(K,T,I)}),m.pop(),g=null};let ie=null;function pe(T){ie&&ie(T)}function Se(){Qe.stop()}function Ze(){Qe.start()}const Qe=new lx;Qe.setAnimationLoop(pe),typeof self<"u"&&Qe.setContext(self),this.setAnimationLoop=function(T){ie=T,he.setAnimationLoop(T),T===null?Qe.stop():Qe.start()},he.addEventListener("sessionstart",Se),he.addEventListener("sessionend",Ze),this.render=function(T,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(O),O=he.getCamera()),T.isScene===!0&&T.onBeforeRender(f,T,O,S),g=M.get(T,m.length),g.init(),m.push(g),H.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),B.setFromProjectionMatrix(H),fe=this.localClippingEnabled,k=V.init(this.clippingPlanes,fe),p=A.get(T,v.length),p.init(),v.push(p),kt(T,O,0,f.sortObjects),p.finish(),f.sortObjects===!0&&p.sort(G,j),k===!0&&V.beginShadows();const X=g.state.shadowsArray;if(ne.render(X,T,O),k===!0&&V.endShadows(),this.info.autoReset===!0&&this.info.reset(),ae.render(p,T),g.setupLights(f.useLegacyLights),O.isArrayCamera){const I=O.cameras;for(let K=0,Te=I.length;K<Te;K++){const Ae=I[K];Ui(p,T,Ae,Ae.viewport)}}else Ui(p,T,O);S!==null&&(Ne.updateMultisampleRenderTarget(S),Ne.updateRenderTargetMipmap(S)),T.isScene===!0&&T.onAfterRender(f,T,O),de.resetDefaultState(),b=-1,R=null,m.pop(),m.length>0?g=m[m.length-1]:g=null,v.pop(),v.length>0?p=v[v.length-1]:p=null};function kt(T,O,X,I){if(T.visible===!1)return;if(T.layers.test(O.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(O);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||B.intersectsSprite(T)){I&&Z.setFromMatrixPosition(T.matrixWorld).applyMatrix4(H);const Ae=Ye.update(T),Le=T.material;Le.visible&&p.push(T,Ae,Le,X,Z.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||B.intersectsObject(T))){T.isSkinnedMesh&&T.skeleton.frame!==$e.render.frame&&(T.skeleton.update(),T.skeleton.frame=$e.render.frame);const Ae=Ye.update(T),Le=T.material;if(I&&(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Z.copy(Ae.boundingSphere.center).applyMatrix4(T.matrixWorld).applyMatrix4(H)),Array.isArray(Le)){const Ue=Ae.groups;for(let ke=0,ze=Ue.length;ke<ze;ke++){const Be=Ue[ke],Ke=Le[Be.materialIndex];Ke&&Ke.visible&&p.push(T,Ae,Ke,X,Z.z,Be)}}else Le.visible&&p.push(T,Ae,Le,X,Z.z,null)}}const Te=T.children;for(let Ae=0,Le=Te.length;Ae<Le;Ae++)kt(Te[Ae],O,X,I)}function Ui(T,O,X,I){const K=T.opaque,Te=T.transmissive,Ae=T.transparent;g.setupLightsView(X),k===!0&&V.setGlobalState(f.clippingPlanes,X),Te.length>0&&gt(K,Te,O,X),I&&be.viewport(P.copy(I)),K.length>0&&En(K,O,X),Te.length>0&&En(Te,O,X),Ae.length>0&&En(Ae,O,X),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function gt(T,O,X,I){if(ee===null){const Le=le.isWebGL2;ee=new $r(1024,1024,{generateMipmaps:!0,type:Re.has("EXT_color_buffer_half_float")?ms:Yr,minFilter:ps,samples:Le&&s===!0?4:0})}const K=f.getRenderTarget();f.setRenderTarget(ee),f.clear();const Te=f.toneMapping;f.toneMapping=Ei,En(T,X,I),Ne.updateMultisampleRenderTarget(ee),Ne.updateRenderTargetMipmap(ee);let Ae=!1;for(let Le=0,Ue=O.length;Le<Ue;Le++){const ke=O[Le],ze=ke.object,Be=ke.geometry,Ke=ke.material,Xt=ke.group;if(Ke.side===_i&&ze.layers.test(I.layers)){const Nn=Ke.side;Ke.side=sn,Ke.needsUpdate=!0,Kn(ze,X,I,Be,Ke,Xt),Ke.side=Nn,Ke.needsUpdate=!0,Ae=!0}}Ae===!0&&(Ne.updateMultisampleRenderTarget(ee),Ne.updateRenderTargetMipmap(ee)),f.setRenderTarget(K),f.toneMapping=Te}function En(T,O,X){const I=O.isScene===!0?O.overrideMaterial:null;for(let K=0,Te=T.length;K<Te;K++){const Ae=T[K],Le=Ae.object,Ue=Ae.geometry,ke=I===null?Ae.material:I,ze=Ae.group;Le.layers.test(X.layers)&&Kn(Le,O,X,Ue,ke,ze)}}function Kn(T,O,X,I,K,Te){T.onBeforeRender(f,O,X,I,K,Te),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),K.onBeforeRender(f,O,X,I,T,Te),K.transparent===!0&&K.side===_i&&K.forceSinglePass===!1?(K.side=sn,K.needsUpdate=!0,f.renderBufferDirect(X,O,I,K,T,Te),K.side=hr,K.needsUpdate=!0,f.renderBufferDirect(X,O,I,K,T,Te),K.side=_i):f.renderBufferDirect(X,O,I,K,T,Te),T.onAfterRender(f,O,X,I,K,Te)}function Ls(T,O,X){O.isScene!==!0&&(O=oe);const I=Me.get(T),K=g.state.lights,Te=g.state.shadowsArray,Ae=K.state.version,Le=Je.getParameters(T,K.state,Te,O,X),Ue=Je.getProgramCacheKey(Le);let ke=I.programs;I.environment=T.isMeshStandardMaterial?O.environment:null,I.fog=O.fog,I.envMap=(T.isMeshStandardMaterial?st:ft).get(T.envMap||I.environment),ke===void 0&&(T.addEventListener("dispose",mt),ke=new Map,I.programs=ke);let ze=ke.get(Ue);if(ze!==void 0){if(I.currentProgram===ze&&I.lightsStateVersion===Ae)return hp(T,Le),ze}else Le.uniforms=Je.getUniforms(T),T.onBuild(X,Le,f),T.onBeforeCompile(Le,f),ze=Je.acquireProgram(Le,Ue),ke.set(Ue,ze),I.uniforms=Le.uniforms;const Be=I.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=V.uniform),hp(T,Le),I.needsLights=Ox(T),I.lightsStateVersion=Ae,I.needsLights&&(Be.ambientLightColor.value=K.state.ambient,Be.lightProbe.value=K.state.probe,Be.directionalLights.value=K.state.directional,Be.directionalLightShadows.value=K.state.directionalShadow,Be.spotLights.value=K.state.spot,Be.spotLightShadows.value=K.state.spotShadow,Be.rectAreaLights.value=K.state.rectArea,Be.ltc_1.value=K.state.rectAreaLTC1,Be.ltc_2.value=K.state.rectAreaLTC2,Be.pointLights.value=K.state.point,Be.pointLightShadows.value=K.state.pointShadow,Be.hemisphereLights.value=K.state.hemi,Be.directionalShadowMap.value=K.state.directionalShadowMap,Be.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Be.spotShadowMap.value=K.state.spotShadowMap,Be.spotLightMatrix.value=K.state.spotLightMatrix,Be.spotLightMap.value=K.state.spotLightMap,Be.pointShadowMap.value=K.state.pointShadowMap,Be.pointShadowMatrix.value=K.state.pointShadowMatrix);const Ke=ze.getUniforms(),Xt=Gl.seqWithValue(Ke.seq,Be);return I.currentProgram=ze,I.uniformsList=Xt,ze}function hp(T,O){const X=Me.get(T);X.outputColorSpace=O.outputColorSpace,X.instancing=O.instancing,X.skinning=O.skinning,X.morphTargets=O.morphTargets,X.morphNormals=O.morphNormals,X.morphColors=O.morphColors,X.morphTargetsCount=O.morphTargetsCount,X.numClippingPlanes=O.numClippingPlanes,X.numIntersection=O.numClipIntersection,X.vertexAlphas=O.vertexAlphas,X.vertexTangents=O.vertexTangents,X.toneMapping=O.toneMapping}function Ux(T,O,X,I,K){O.isScene!==!0&&(O=oe),Ne.resetTextureUnits();const Te=O.fog,Ae=I.isMeshStandardMaterial?O.environment:null,Le=S===null?f.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:si,Ue=(I.isMeshStandardMaterial?st:ft).get(I.envMap||Ae),ke=I.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,ze=!!I.normalMap&&!!X.attributes.tangent,Be=!!X.morphAttributes.position,Ke=!!X.morphAttributes.normal,Xt=!!X.morphAttributes.color,Nn=I.toneMapped?f.toneMapping:Ei,vr=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,yt=vr!==void 0?vr.length:0,We=Me.get(I),ac=g.state.lights;if(k===!0&&(fe===!0||T!==R)){const cn=T===R&&I.id===b;V.setState(I,T,cn)}let Rt=!1;I.version===We.__version?(We.needsLights&&We.lightsStateVersion!==ac.state.version||We.outputColorSpace!==Le||K.isInstancedMesh&&We.instancing===!1||!K.isInstancedMesh&&We.instancing===!0||K.isSkinnedMesh&&We.skinning===!1||!K.isSkinnedMesh&&We.skinning===!0||We.envMap!==Ue||I.fog===!0&&We.fog!==Te||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==V.numPlanes||We.numIntersection!==V.numIntersection)||We.vertexAlphas!==ke||We.vertexTangents!==ze||We.morphTargets!==Be||We.morphNormals!==Ke||We.morphColors!==Xt||We.toneMapping!==Nn||le.isWebGL2===!0&&We.morphTargetsCount!==yt)&&(Rt=!0):(Rt=!0,We.__version=I.version);let _r=We.currentProgram;Rt===!0&&(_r=Ls(I,O,K));let pp=!1,ho=!1,oc=!1;const jt=_r.getUniforms(),yr=We.uniforms;if(be.useProgram(_r.program)&&(pp=!0,ho=!0,oc=!0),I.id!==b&&(b=I.id,ho=!0),pp||R!==T){if(jt.setValue(L,"projectionMatrix",T.projectionMatrix),le.logarithmicDepthBuffer&&jt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),R!==T&&(R=T,ho=!0,oc=!0),I.isShaderMaterial||I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshStandardMaterial||I.envMap){const cn=jt.map.cameraPosition;cn!==void 0&&cn.setValue(L,Z.setFromMatrixPosition(T.matrixWorld))}(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial)&&jt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),(I.isMeshPhongMaterial||I.isMeshToonMaterial||I.isMeshLambertMaterial||I.isMeshBasicMaterial||I.isMeshStandardMaterial||I.isShaderMaterial||I.isShadowMaterial||K.isSkinnedMesh)&&jt.setValue(L,"viewMatrix",T.matrixWorldInverse)}if(K.isSkinnedMesh){jt.setOptional(L,K,"bindMatrix"),jt.setOptional(L,K,"bindMatrixInverse");const cn=K.skeleton;cn&&(le.floatVertexTextures?(cn.boneTexture===null&&cn.computeBoneTexture(),jt.setValue(L,"boneTexture",cn.boneTexture,Ne),jt.setValue(L,"boneTextureSize",cn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const sc=X.morphAttributes;if((sc.position!==void 0||sc.normal!==void 0||sc.color!==void 0&&le.isWebGL2===!0)&&ce.update(K,X,_r),(ho||We.receiveShadow!==K.receiveShadow)&&(We.receiveShadow=K.receiveShadow,jt.setValue(L,"receiveShadow",K.receiveShadow)),I.isMeshGouraudMaterial&&I.envMap!==null&&(yr.envMap.value=Ue,yr.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),ho&&(jt.setValue(L,"toneMappingExposure",f.toneMappingExposure),We.needsLights&&Ix(yr,oc),Te&&I.fog===!0&&Ft.refreshFogUniforms(yr,Te),Ft.refreshMaterialUniforms(yr,I,U,$,ee),Gl.upload(L,We.uniformsList,yr,Ne)),I.isShaderMaterial&&I.uniformsNeedUpdate===!0&&(Gl.upload(L,We.uniformsList,yr,Ne),I.uniformsNeedUpdate=!1),I.isSpriteMaterial&&jt.setValue(L,"center",K.center),jt.setValue(L,"modelViewMatrix",K.modelViewMatrix),jt.setValue(L,"normalMatrix",K.normalMatrix),jt.setValue(L,"modelMatrix",K.matrixWorld),I.isShaderMaterial||I.isRawShaderMaterial){const cn=I.uniformsGroups;for(let lc=0,Fx=cn.length;lc<Fx;lc++)if(le.isWebGL2){const mp=cn[lc];ve.update(mp,_r),ve.bind(mp,_r)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return _r}function Ix(T,O){T.ambientLightColor.needsUpdate=O,T.lightProbe.needsUpdate=O,T.directionalLights.needsUpdate=O,T.directionalLightShadows.needsUpdate=O,T.pointLights.needsUpdate=O,T.pointLightShadows.needsUpdate=O,T.spotLights.needsUpdate=O,T.spotLightShadows.needsUpdate=O,T.rectAreaLights.needsUpdate=O,T.hemisphereLights.needsUpdate=O}function Ox(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return y},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(T,O,X){Me.get(T.texture).__webglTexture=O,Me.get(T.depthTexture).__webglTexture=X;const I=Me.get(T);I.__hasExternalTextures=!0,I.__hasExternalTextures&&(I.__autoAllocateDepthBuffer=X===void 0,I.__autoAllocateDepthBuffer||Re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),I.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,O){const X=Me.get(T);X.__webglFramebuffer=O,X.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(T,O=0,X=0){S=T,y=O,E=X;let I=!0,K=null,Te=!1,Ae=!1;if(T){const Ue=Me.get(T);Ue.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(L.FRAMEBUFFER,null),I=!1):Ue.__webglFramebuffer===void 0?Ne.setupRenderTarget(T):Ue.__hasExternalTextures&&Ne.rebindTextures(T,Me.get(T.texture).__webglTexture,Me.get(T.depthTexture).__webglTexture);const ke=T.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ae=!0);const ze=Me.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(K=ze[O],Te=!0):le.isWebGL2&&T.samples>0&&Ne.useMultisampledRTT(T)===!1?K=Me.get(T).__webglMultisampledFramebuffer:K=ze,P.copy(T.viewport),x.copy(T.scissor),w=T.scissorTest}else P.copy(te).multiplyScalar(U).floor(),x.copy(Q).multiplyScalar(U).floor(),w=N;if(be.bindFramebuffer(L.FRAMEBUFFER,K)&&le.drawBuffers&&I&&be.drawBuffers(T,K),be.viewport(P),be.scissor(x),be.setScissorTest(w),Te){const Ue=Me.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ue.__webglTexture,X)}else if(Ae){const Ue=Me.get(T.texture),ke=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ue.__webglTexture,X||0,ke)}b=-1},this.readRenderTargetPixels=function(T,O,X,I,K,Te,Ae){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Me.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Le=Le[Ae]),Le){be.bindFramebuffer(L.FRAMEBUFFER,Le);try{const Ue=T.texture,ke=Ue.format,ze=Ue.type;if(ke!==Wn&&z.convert(ke)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=ze===ms&&(Re.has("EXT_color_buffer_half_float")||le.isWebGL2&&Re.has("EXT_color_buffer_float"));if(ze!==Yr&&z.convert(ze)!==L.getParameter(L.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ze===Ur&&(le.isWebGL2||Re.has("OES_texture_float")||Re.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=T.width-I&&X>=0&&X<=T.height-K&&L.readPixels(O,X,I,K,z.convert(ke),z.convert(ze),Te)}finally{const Ue=S!==null?Me.get(S).__webglFramebuffer:null;be.bindFramebuffer(L.FRAMEBUFFER,Ue)}}},this.copyFramebufferToTexture=function(T,O,X=0){const I=Math.pow(2,-X),K=Math.floor(O.image.width*I),Te=Math.floor(O.image.height*I);Ne.setTexture2D(O,0),L.copyTexSubImage2D(L.TEXTURE_2D,X,0,0,T.x,T.y,K,Te),be.unbindTexture()},this.copyTextureToTexture=function(T,O,X,I=0){const K=O.image.width,Te=O.image.height,Ae=z.convert(X.format),Le=z.convert(X.type);Ne.setTexture2D(X,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,X.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,X.unpackAlignment),O.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,I,T.x,T.y,K,Te,Ae,Le,O.image.data):O.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,I,T.x,T.y,O.mipmaps[0].width,O.mipmaps[0].height,Ae,O.mipmaps[0].data):L.texSubImage2D(L.TEXTURE_2D,I,T.x,T.y,Ae,Le,O.image),I===0&&X.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(T,O,X,I,K=0){if(f.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Te=T.max.x-T.min.x+1,Ae=T.max.y-T.min.y+1,Le=T.max.z-T.min.z+1,Ue=z.convert(I.format),ke=z.convert(I.type);let ze;if(I.isData3DTexture)Ne.setTexture3D(I,0),ze=L.TEXTURE_3D;else if(I.isDataArrayTexture)Ne.setTexture2DArray(I,0),ze=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const Be=L.getParameter(L.UNPACK_ROW_LENGTH),Ke=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Xt=L.getParameter(L.UNPACK_SKIP_PIXELS),Nn=L.getParameter(L.UNPACK_SKIP_ROWS),vr=L.getParameter(L.UNPACK_SKIP_IMAGES),yt=X.isCompressedTexture?X.mipmaps[0]:X.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,yt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,yt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,T.min.x),L.pixelStorei(L.UNPACK_SKIP_ROWS,T.min.y),L.pixelStorei(L.UNPACK_SKIP_IMAGES,T.min.z),X.isDataTexture||X.isData3DTexture?L.texSubImage3D(ze,K,O.x,O.y,O.z,Te,Ae,Le,Ue,ke,yt.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),L.compressedTexSubImage3D(ze,K,O.x,O.y,O.z,Te,Ae,Le,Ue,yt.data)):L.texSubImage3D(ze,K,O.x,O.y,O.z,Te,Ae,Le,Ue,ke,yt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Be),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ke),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Xt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Nn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,vr),K===0&&I.generateMipmaps&&L.generateMipmap(ze),be.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ne.setTextureCube(T,0):T.isData3DTexture?Ne.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ne.setTexture2DArray(T,0):Ne.setTexture2D(T,0),be.unbindTexture()},this.resetState=function(){y=0,E=0,S=null,be.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===De?kr:jy}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===kr?De:si}}class rP extends hx{}rP.prototype.isWebGL1Renderer=!0;class aP extends ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class px extends As{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tv=new Dt,Xd=new Qy,bl=new Ku,Al=new F;class oP extends ln{constructor(e=new Ni,n=new px){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),bl.copy(i.boundingSphere),bl.applyMatrix4(r),bl.radius+=a,e.ray.intersectsSphere(bl)===!1)return;Tv.copy(r).invert(),Xd.copy(e.ray).applyMatrix4(Tv);const s=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,u=i.index,d=i.attributes.position;if(u!==null){const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=h,v=p;g<v;g++){const m=u.getX(g);Al.fromBufferAttribute(d,m),bv(Al,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=h,v=p;g<v;g++)Al.fromBufferAttribute(d,g),bv(Al,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=r.length;a<o;a++){const s=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=a}}}}}function bv(t,e,n,i,r,a,o){const s=Xd.distanceSqToPoint(t);if(s<n){const l=new F;Xd.closestPointToPoint(t,l),l.applyMatrix4(i);const u=r.ray.origin.distanceTo(l);if(u<r.near||u>r.far)return;a.push({distance:u,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:o})}}class Av{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Zt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ap}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ap);const Rv={type:"change"},_f={type:"start"},Cv={type:"end"};class sP extends Jr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ta.ROTATE,MIDDLE:ta.DOLLY,RIGHT:ta.PAN},this.touches={ONE:na.ROTATE,TWO:na.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",Je),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Je),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Rv),i.update(),a=r.NONE},this.update=function(){const C=new F,J=new qr().setFromUnitVectors(e.up,new F(0,1,0)),z=J.clone().invert(),de=new F,ve=new qr,xe=2*Math.PI;return function(){const ye=i.object.position;C.copy(ye).sub(i.target),C.applyQuaternion(J),s.setFromVector3(C),i.autoRotate&&a===r.NONE&&x(R()),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Pe=i.minAzimuthAngle,Fe=i.maxAzimuthAngle;return isFinite(Pe)&&isFinite(Fe)&&(Pe<-Math.PI?Pe+=xe:Pe>Math.PI&&(Pe-=xe),Fe<-Math.PI?Fe+=xe:Fe>Math.PI&&(Fe-=xe),Pe<=Fe?s.theta=Math.max(Pe,Math.min(Fe,s.theta)):s.theta=s.theta>(Pe+Fe)/2?Math.max(Pe,s.theta):Math.min(Fe,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),s.radius*=u,s.radius=Math.max(i.minDistance,Math.min(i.maxDistance,s.radius)),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),C.setFromSpherical(s),C.applyQuaternion(z),ye.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,d||de.distanceToSquared(i.object.position)>o||8*(1-ve.dot(i.object.quaternion))>o?(i.dispatchEvent(Rv),de.copy(i.object.position),ve.copy(i.object.quaternion),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",M),i.domElement.removeEventListener("pointerdown",Ne),i.domElement.removeEventListener("pointercancel",st),i.domElement.removeEventListener("wheel",Ye),i.domElement.removeEventListener("pointermove",ft),i.domElement.removeEventListener("pointerup",st),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Je),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=r.NONE;const o=1e-6,s=new Av,l=new Av;let u=1;const c=new F;let d=!1;const h=new Ve,p=new Ve,g=new Ve,v=new Ve,m=new Ve,f=new Ve,_=new Ve,y=new Ve,E=new Ve,S=[],b={};function R(){return 2*Math.PI/60/60*i.autoRotateSpeed}function P(){return Math.pow(.95,i.zoomSpeed)}function x(C){l.theta-=C}function w(C){l.phi-=C}const Y=function(){const C=new F;return function(z,de){C.setFromMatrixColumn(de,0),C.multiplyScalar(-z),c.add(C)}}(),$=function(){const C=new F;return function(z,de){i.screenSpacePanning===!0?C.setFromMatrixColumn(de,1):(C.setFromMatrixColumn(de,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(z),c.add(C)}}(),U=function(){const C=new F;return function(z,de){const ve=i.domElement;if(i.object.isPerspectiveCamera){const xe=i.object.position;C.copy(xe).sub(i.target);let he=C.length();he*=Math.tan(i.object.fov/2*Math.PI/180),Y(2*z*he/ve.clientHeight,i.object.matrix),$(2*de*he/ve.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Y(z*(i.object.right-i.object.left)/i.object.zoom/ve.clientWidth,i.object.matrix),$(de*(i.object.top-i.object.bottom)/i.object.zoom/ve.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function G(C){i.object.isPerspectiveCamera?u/=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*C)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function j(C){i.object.isPerspectiveCamera?u*=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/C)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function te(C){h.set(C.clientX,C.clientY)}function Q(C){_.set(C.clientX,C.clientY)}function N(C){v.set(C.clientX,C.clientY)}function B(C){p.set(C.clientX,C.clientY),g.subVectors(p,h).multiplyScalar(i.rotateSpeed);const J=i.domElement;x(2*Math.PI*g.x/J.clientHeight),w(2*Math.PI*g.y/J.clientHeight),h.copy(p),i.update()}function k(C){y.set(C.clientX,C.clientY),E.subVectors(y,_),E.y>0?G(P()):E.y<0&&j(P()),_.copy(y),i.update()}function fe(C){m.set(C.clientX,C.clientY),f.subVectors(m,v).multiplyScalar(i.panSpeed),U(f.x,f.y),v.copy(m),i.update()}function ee(C){C.deltaY<0?j(P()):C.deltaY>0&&G(P()),i.update()}function H(C){let J=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?w(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,i.keyPanSpeed),J=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?w(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(0,-i.keyPanSpeed),J=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?x(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(i.keyPanSpeed,0),J=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?x(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):U(-i.keyPanSpeed,0),J=!0;break}J&&(C.preventDefault(),i.update())}function Z(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const C=.5*(S[0].pageX+S[1].pageX),J=.5*(S[0].pageY+S[1].pageY);h.set(C,J)}}function oe(){if(S.length===1)v.set(S[0].pageX,S[0].pageY);else{const C=.5*(S[0].pageX+S[1].pageX),J=.5*(S[0].pageY+S[1].pageY);v.set(C,J)}}function se(){const C=S[0].pageX-S[1].pageX,J=S[0].pageY-S[1].pageY,z=Math.sqrt(C*C+J*J);_.set(0,z)}function L(){i.enableZoom&&se(),i.enablePan&&oe()}function Ce(){i.enableZoom&&se(),i.enableRotate&&Z()}function Re(C){if(S.length==1)p.set(C.pageX,C.pageY);else{const z=ce(C),de=.5*(C.pageX+z.x),ve=.5*(C.pageY+z.y);p.set(de,ve)}g.subVectors(p,h).multiplyScalar(i.rotateSpeed);const J=i.domElement;x(2*Math.PI*g.x/J.clientHeight),w(2*Math.PI*g.y/J.clientHeight),h.copy(p)}function le(C){if(S.length===1)m.set(C.pageX,C.pageY);else{const J=ce(C),z=.5*(C.pageX+J.x),de=.5*(C.pageY+J.y);m.set(z,de)}f.subVectors(m,v).multiplyScalar(i.panSpeed),U(f.x,f.y),v.copy(m)}function be(C){const J=ce(C),z=C.pageX-J.x,de=C.pageY-J.y,ve=Math.sqrt(z*z+de*de);y.set(0,ve),E.set(0,Math.pow(y.y/_.y,i.zoomSpeed)),G(E.y),_.copy(y)}function $e(C){i.enableZoom&&be(C),i.enablePan&&le(C)}function Me(C){i.enableZoom&&be(C),i.enableRotate&&Re(C)}function Ne(C){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",ft),i.domElement.addEventListener("pointerup",st)),V(C),C.pointerType==="touch"?Ft(C):_t(C))}function ft(C){i.enabled!==!1&&(C.pointerType==="touch"?A(C):pt(C))}function st(C){ne(C),S.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",ft),i.domElement.removeEventListener("pointerup",st)),i.dispatchEvent(Cv),a=r.NONE}function _t(C){let J;switch(C.button){case 0:J=i.mouseButtons.LEFT;break;case 1:J=i.mouseButtons.MIDDLE;break;case 2:J=i.mouseButtons.RIGHT;break;default:J=-1}switch(J){case ta.DOLLY:if(i.enableZoom===!1)return;Q(C),a=r.DOLLY;break;case ta.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;N(C),a=r.PAN}else{if(i.enableRotate===!1)return;te(C),a=r.ROTATE}break;case ta.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;te(C),a=r.ROTATE}else{if(i.enablePan===!1)return;N(C),a=r.PAN}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(_f)}function pt(C){switch(a){case r.ROTATE:if(i.enableRotate===!1)return;B(C);break;case r.DOLLY:if(i.enableZoom===!1)return;k(C);break;case r.PAN:if(i.enablePan===!1)return;fe(C);break}}function Ye(C){i.enabled===!1||i.enableZoom===!1||a!==r.NONE||(C.preventDefault(),i.dispatchEvent(_f),ee(C),i.dispatchEvent(Cv))}function Je(C){i.enabled===!1||i.enablePan===!1||H(C)}function Ft(C){switch(ae(C),S.length){case 1:switch(i.touches.ONE){case na.ROTATE:if(i.enableRotate===!1)return;Z(),a=r.TOUCH_ROTATE;break;case na.PAN:if(i.enablePan===!1)return;oe(),a=r.TOUCH_PAN;break;default:a=r.NONE}break;case 2:switch(i.touches.TWO){case na.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;L(),a=r.TOUCH_DOLLY_PAN;break;case na.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ce(),a=r.TOUCH_DOLLY_ROTATE;break;default:a=r.NONE}break;default:a=r.NONE}a!==r.NONE&&i.dispatchEvent(_f)}function A(C){switch(ae(C),a){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Re(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;le(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;$e(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Me(C),i.update();break;default:a=r.NONE}}function M(C){i.enabled!==!1&&C.preventDefault()}function V(C){S.push(C)}function ne(C){delete b[C.pointerId];for(let J=0;J<S.length;J++)if(S[J].pointerId==C.pointerId){S.splice(J,1);return}}function ae(C){let J=b[C.pointerId];J===void 0&&(J=new Ve,b[C.pointerId]=J),J.set(C.pageX,C.pageY)}function ce(C){const J=C.pointerId===S[0].pointerId?S[1]:S[0];return b[J.pointerId]}i.domElement.addEventListener("contextmenu",M),i.domElement.addEventListener("pointerdown",Ne),i.domElement.addEventListener("pointercancel",st),i.domElement.addEventListener("wheel",Ye,{passive:!1}),this.update()}}const lP=()=>(we.useEffect(()=>{let t,e,n,i;const r={innerWidth:600,innerHeight:400},{sin:a,cos:o}=Math,s=16,l=120;let u=[];const c=[],d=P=>P/180*Math.PI,h=()=>s*Math.random()-s/2,p=P=>Array(P).fill(0).map((x,w)=>w),g=(P,x,w)=>(P-x)/(w-x),v=(P,x,w)=>(w-x)*P+x,m=(P,x,w,Y,$)=>v(g(P,x,w),Y,$),f=()=>{t=new hx,t.setSize(r.innerWidth,r.innerHeight),console.log(window.innerWidth,window.innerHeight),document.getElementById("container").appendChild(t.domElement),i=new An(15,r.innerWidth/r.innerHeight,1,5e3),i.position.z=2500,e=new aP,e.background=new et(14216191),new sP(i,t.domElement)},_=P=>{const x=new Ni,w=[];P.forEach(U=>{w.push(U.x,U.y,U.z)});const Y=new sr(w,3);x.setAttribute("position",Y);const $=new px({size:2,opacity:.4,alphaTest:.4,transparent:!0});$.color.setHSL(.6,1,.1),n=new oP(x,$),e.add(n)},y=P=>{const{x,y:w,z:Y}=P;return p(100).map(()=>({x:x+h(),y:w+h(),z:Y+h()}))},E=P=>{const x=d(P),w=100,Y=w*a(x),$=w*o(x);return{x:Y,z:$}},S=({pa:P,pb:x})=>{const Y=p(100).reduce(($,U)=>[...$,...y({x:m(U,0,100,P.x,x.x),y:P.y,z:m(U,0,100,P.z,x.z)})],[]);u=u.concat(Y)},b=()=>{p(360).forEach(P=>{const x={...E(P),y:1.5*(P-180)},w={...E(P+l),y:1.5*(P-180)};u=u.concat(y(x)),u=u.concat(y(w)),P%36===0&&c.push({pa:x,pb:w})}),c.map(P=>S(P))};f(),b(),_(u);const R=()=>{n.rotation.y+=.01,requestAnimationFrame(R),t.render(e,i)};return R(),()=>{document.getElementById("container").removeChild(t.domElement)}},[]),Ee("div",{id:"container"}));function mx(t,e){return function(){return t.apply(e,arguments)}}const{toString:uP}=Object.prototype,{getPrototypeOf:lp}=Object,Ju=(t=>e=>{const n=uP.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),li=t=>(t=t.toLowerCase(),e=>Ju(e)===t),ec=t=>e=>typeof e===t,{isArray:fo}=Array,gs=ec("undefined");function cP(t){return t!==null&&!gs(t)&&t.constructor!==null&&!gs(t.constructor)&&Pn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const gx=li("ArrayBuffer");function fP(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&gx(t.buffer),e}const dP=ec("string"),Pn=ec("function"),vx=ec("number"),tc=t=>t!==null&&typeof t=="object",hP=t=>t===!0||t===!1,Vl=t=>{if(Ju(t)!=="object")return!1;const e=lp(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},pP=li("Date"),mP=li("File"),gP=li("Blob"),vP=li("FileList"),_P=t=>tc(t)&&Pn(t.pipe),yP=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Pn(t.append)&&((e=Ju(t))==="formdata"||e==="object"&&Pn(t.toString)&&t.toString()==="[object FormData]"))},xP=li("URLSearchParams"),SP=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Cs(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),fo(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{const a=n?Object.getOwnPropertyNames(t):Object.keys(t),o=a.length;let s;for(i=0;i<o;i++)s=a[i],e.call(null,t[s],s,t)}}function _x(t,e){e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const yx=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),xx=t=>!gs(t)&&t!==yx;function jd(){const{caseless:t}=xx(this)&&this||{},e={},n=(i,r)=>{const a=t&&_x(e,r)||r;Vl(e[a])&&Vl(i)?e[a]=jd(e[a],i):Vl(i)?e[a]=jd({},i):fo(i)?e[a]=i.slice():e[a]=i};for(let i=0,r=arguments.length;i<r;i++)arguments[i]&&Cs(arguments[i],n);return e}const EP=(t,e,n,{allOwnKeys:i}={})=>(Cs(e,(r,a)=>{n&&Pn(r)?t[a]=mx(r,n):t[a]=r},{allOwnKeys:i}),t),MP=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),wP=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},TP=(t,e,n,i)=>{let r,a,o;const s={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),a=r.length;a-- >0;)o=r[a],(!i||i(o,t,e))&&!s[o]&&(e[o]=t[o],s[o]=!0);t=n!==!1&&lp(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},bP=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},AP=t=>{if(!t)return null;if(fo(t))return t;let e=t.length;if(!vx(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},RP=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&lp(Uint8Array)),CP=(t,e)=>{const i=(t&&t[Symbol.iterator]).call(t);let r;for(;(r=i.next())&&!r.done;){const a=r.value;e.call(t,a[0],a[1])}},PP=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},LP=li("HTMLFormElement"),DP=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),Pv=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),NP=li("RegExp"),Sx=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};Cs(n,(r,a)=>{e(r,a,t)!==!1&&(i[a]=r)}),Object.defineProperties(t,i)},UP=t=>{Sx(t,(e,n)=>{if(Pn(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const i=t[n];if(Pn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},IP=(t,e)=>{const n={},i=r=>{r.forEach(a=>{n[a]=!0})};return fo(t)?i(t):i(String(t).split(e)),n},OP=()=>{},FP=(t,e)=>(t=+t,Number.isFinite(t)?t:e),yf="abcdefghijklmnopqrstuvwxyz",Lv="0123456789",Ex={DIGIT:Lv,ALPHA:yf,ALPHA_DIGIT:yf+yf.toUpperCase()+Lv},kP=(t=16,e=Ex.ALPHA_DIGIT)=>{let n="";const{length:i}=e;for(;t--;)n+=e[Math.random()*i|0];return n};function zP(t){return!!(t&&Pn(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const BP=t=>{const e=new Array(10),n=(i,r)=>{if(tc(i)){if(e.indexOf(i)>=0)return;if(!("toJSON"in i)){e[r]=i;const a=fo(i)?[]:{};return Cs(i,(o,s)=>{const l=n(o,r+1);!gs(l)&&(a[s]=l)}),e[r]=void 0,a}}return i};return n(t,0)},HP=li("AsyncFunction"),GP=t=>t&&(tc(t)||Pn(t))&&Pn(t.then)&&Pn(t.catch),q={isArray:fo,isArrayBuffer:gx,isBuffer:cP,isFormData:yP,isArrayBufferView:fP,isString:dP,isNumber:vx,isBoolean:hP,isObject:tc,isPlainObject:Vl,isUndefined:gs,isDate:pP,isFile:mP,isBlob:gP,isRegExp:NP,isFunction:Pn,isStream:_P,isURLSearchParams:xP,isTypedArray:RP,isFileList:vP,forEach:Cs,merge:jd,extend:EP,trim:SP,stripBOM:MP,inherits:wP,toFlatObject:TP,kindOf:Ju,kindOfTest:li,endsWith:bP,toArray:AP,forEachEntry:CP,matchAll:PP,isHTMLForm:LP,hasOwnProperty:Pv,hasOwnProp:Pv,reduceDescriptors:Sx,freezeMethods:UP,toObjectSet:IP,toCamelCase:DP,noop:OP,toFiniteNumber:FP,findKey:_x,global:yx,isContextDefined:xx,ALPHABET:Ex,generateString:kP,isSpecCompliantForm:zP,toJSONObject:BP,isAsyncFn:HP,isThenable:GP};function Xe(t,e,n,i,r){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}q.inherits(Xe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:q.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Mx=Xe.prototype,wx={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{wx[t]={value:t}});Object.defineProperties(Xe,wx);Object.defineProperty(Mx,"isAxiosError",{value:!0});Xe.from=(t,e,n,i,r,a)=>{const o=Object.create(Mx);return q.toFlatObject(t,o,function(l){return l!==Error.prototype},s=>s!=="isAxiosError"),Xe.call(o,t.message,e,n,i,r),o.cause=t,o.name=t.name,a&&Object.assign(o,a),o};const VP=null;function Yd(t){return q.isPlainObject(t)||q.isArray(t)}function Tx(t){return q.endsWith(t,"[]")?t.slice(0,-2):t}function Dv(t,e,n){return t?t.concat(e).map(function(r,a){return r=Tx(r),!n&&a?"["+r+"]":r}).join(n?".":""):e}function WP(t){return q.isArray(t)&&!t.some(Yd)}const XP=q.toFlatObject(q,{},null,function(e){return/^is[A-Z]/.test(e)});function nc(t,e,n){if(!q.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=q.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,m){return!q.isUndefined(m[v])});const i=n.metaTokens,r=n.visitor||c,a=n.dots,o=n.indexes,l=(n.Blob||typeof Blob<"u"&&Blob)&&q.isSpecCompliantForm(e);if(!q.isFunction(r))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(q.isDate(g))return g.toISOString();if(!l&&q.isBlob(g))throw new Xe("Blob is not supported. Use a Buffer instead.");return q.isArrayBuffer(g)||q.isTypedArray(g)?l&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function c(g,v,m){let f=g;if(g&&!m&&typeof g=="object"){if(q.endsWith(v,"{}"))v=i?v:v.slice(0,-2),g=JSON.stringify(g);else if(q.isArray(g)&&WP(g)||(q.isFileList(g)||q.endsWith(v,"[]"))&&(f=q.toArray(g)))return v=Tx(v),f.forEach(function(y,E){!(q.isUndefined(y)||y===null)&&e.append(o===!0?Dv([v],E,a):o===null?v:v+"[]",u(y))}),!1}return Yd(g)?!0:(e.append(Dv(m,v,a),u(g)),!1)}const d=[],h=Object.assign(XP,{defaultVisitor:c,convertValue:u,isVisitable:Yd});function p(g,v){if(!q.isUndefined(g)){if(d.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));d.push(g),q.forEach(g,function(f,_){(!(q.isUndefined(f)||f===null)&&r.call(e,f,q.isString(_)?_.trim():_,v,h))===!0&&p(f,v?v.concat(_):[_])}),d.pop()}}if(!q.isObject(t))throw new TypeError("data must be an object");return p(t),e}function Nv(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(i){return e[i]})}function up(t,e){this._pairs=[],t&&nc(t,this,e)}const bx=up.prototype;bx.append=function(e,n){this._pairs.push([e,n])};bx.toString=function(e){const n=e?function(i){return e.call(this,i,Nv)}:Nv;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function jP(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ax(t,e,n){if(!e)return t;const i=n&&n.encode||jP,r=n&&n.serialize;let a;if(r?a=r(e,n):a=q.isURLSearchParams(e)?e.toString():new up(e,n).toString(i),a){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+a}return t}class YP{constructor(){this.handlers=[]}use(e,n,i){return this.handlers.push({fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){q.forEach(this.handlers,function(i){i!==null&&e(i)})}}const Uv=YP,Rx={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},$P=typeof URLSearchParams<"u"?URLSearchParams:up,qP=typeof FormData<"u"?FormData:null,KP=typeof Blob<"u"?Blob:null,ZP=(()=>{let t;return typeof navigator<"u"&&((t=navigator.product)==="ReactNative"||t==="NativeScript"||t==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),QP=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),ii={isBrowser:!0,classes:{URLSearchParams:$P,FormData:qP,Blob:KP},isStandardBrowserEnv:ZP,isStandardBrowserWebWorkerEnv:QP,protocols:["http","https","file","blob","url","data"]};function JP(t,e){return nc(t,new ii.classes.URLSearchParams,Object.assign({visitor:function(n,i,r,a){return ii.isNode&&q.isBuffer(n)?(this.append(i,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},e))}function eL(t){return q.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function tL(t){const e={},n=Object.keys(t);let i;const r=n.length;let a;for(i=0;i<r;i++)a=n[i],e[a]=t[a];return e}function Cx(t){function e(n,i,r,a){let o=n[a++];const s=Number.isFinite(+o),l=a>=n.length;return o=!o&&q.isArray(r)?r.length:o,l?(q.hasOwnProp(r,o)?r[o]=[r[o],i]:r[o]=i,!s):((!r[o]||!q.isObject(r[o]))&&(r[o]=[]),e(n,i,r[o],a)&&q.isArray(r[o])&&(r[o]=tL(r[o])),!s)}if(q.isFormData(t)&&q.isFunction(t.entries)){const n={};return q.forEachEntry(t,(i,r)=>{e(eL(i),r,n,0)}),n}return null}const nL={"Content-Type":void 0};function iL(t,e,n){if(q.isString(t))try{return(e||JSON.parse)(t),q.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const ic={transitional:Rx,adapter:["xhr","http"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,a=q.isObject(e);if(a&&q.isHTMLForm(e)&&(e=new FormData(e)),q.isFormData(e))return r&&r?JSON.stringify(Cx(e)):e;if(q.isArrayBuffer(e)||q.isBuffer(e)||q.isStream(e)||q.isFile(e)||q.isBlob(e))return e;if(q.isArrayBufferView(e))return e.buffer;if(q.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(a){if(i.indexOf("application/x-www-form-urlencoded")>-1)return JP(e,this.formSerializer).toString();if((s=q.isFileList(e))||i.indexOf("multipart/form-data")>-1){const l=this.env&&this.env.FormData;return nc(s?{"files[]":e}:e,l&&new l,this.formSerializer)}}return a||r?(n.setContentType("application/json",!1),iL(e)):e}],transformResponse:[function(e){const n=this.transitional||ic.transitional,i=n&&n.forcedJSONParsing,r=this.responseType==="json";if(e&&q.isString(e)&&(i&&!this.responseType||r)){const o=!(n&&n.silentJSONParsing)&&r;try{return JSON.parse(e)}catch(s){if(o)throw s.name==="SyntaxError"?Xe.from(s,Xe.ERR_BAD_RESPONSE,this,null,this.response):s}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ii.classes.FormData,Blob:ii.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};q.forEach(["delete","get","head"],function(e){ic.headers[e]={}});q.forEach(["post","put","patch"],function(e){ic.headers[e]=q.merge(nL)});const cp=ic,rL=q.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),aL=t=>{const e={};let n,i,r;return t&&t.split(`
`).forEach(function(o){r=o.indexOf(":"),n=o.substring(0,r).trim().toLowerCase(),i=o.substring(r+1).trim(),!(!n||e[n]&&rL[n])&&(n==="set-cookie"?e[n]?e[n].push(i):e[n]=[i]:e[n]=e[n]?e[n]+", "+i:i)}),e},Iv=Symbol("internals");function bo(t){return t&&String(t).trim().toLowerCase()}function Wl(t){return t===!1||t==null?t:q.isArray(t)?t.map(Wl):String(t)}function oL(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const sL=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function xf(t,e,n,i,r){if(q.isFunction(i))return i.call(this,e,n);if(r&&(e=n),!!q.isString(e)){if(q.isString(i))return e.indexOf(i)!==-1;if(q.isRegExp(i))return i.test(e)}}function lL(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function uL(t,e){const n=q.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{value:function(r,a,o){return this[i].call(this,e,r,a,o)},configurable:!0})})}class rc{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function a(s,l,u){const c=bo(l);if(!c)throw new Error("header name must be a non-empty string");const d=q.findKey(r,c);(!d||r[d]===void 0||u===!0||u===void 0&&r[d]!==!1)&&(r[d||l]=Wl(s))}const o=(s,l)=>q.forEach(s,(u,c)=>a(u,c,l));return q.isPlainObject(e)||e instanceof this.constructor?o(e,n):q.isString(e)&&(e=e.trim())&&!sL(e)?o(aL(e),n):e!=null&&a(n,e,i),this}get(e,n){if(e=bo(e),e){const i=q.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return oL(r);if(q.isFunction(n))return n.call(this,r,i);if(q.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=bo(e),e){const i=q.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||xf(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function a(o){if(o=bo(o),o){const s=q.findKey(i,o);s&&(!n||xf(i,i[s],s,n))&&(delete i[s],r=!0)}}return q.isArray(e)?e.forEach(a):a(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const a=n[i];(!e||xf(this,this[a],a,e,!0))&&(delete this[a],r=!0)}return r}normalize(e){const n=this,i={};return q.forEach(this,(r,a)=>{const o=q.findKey(i,a);if(o){n[o]=Wl(r),delete n[a];return}const s=e?lL(a):String(a).trim();s!==a&&delete n[a],n[s]=Wl(r),i[s]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return q.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&q.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Iv]=this[Iv]={accessors:{}}).accessors,r=this.prototype;function a(o){const s=bo(o);i[s]||(uL(r,o),i[s]=!0)}return q.isArray(e)?e.forEach(a):a(e),this}}rc.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);q.freezeMethods(rc.prototype);q.freezeMethods(rc);const Mi=rc;function Sf(t,e){const n=this||cp,i=e||n,r=Mi.from(i.headers);let a=i.data;return q.forEach(t,function(s){a=s.call(n,a,r.normalize(),e?e.status:void 0)}),r.normalize(),a}function Px(t){return!!(t&&t.__CANCEL__)}function Ps(t,e,n){Xe.call(this,t??"canceled",Xe.ERR_CANCELED,e,n),this.name="CanceledError"}q.inherits(Ps,Xe,{__CANCEL__:!0});function cL(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new Xe("Request failed with status code "+n.status,[Xe.ERR_BAD_REQUEST,Xe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const fL=ii.isStandardBrowserEnv?function(){return{write:function(n,i,r,a,o,s){const l=[];l.push(n+"="+encodeURIComponent(i)),q.isNumber(r)&&l.push("expires="+new Date(r).toGMTString()),q.isString(a)&&l.push("path="+a),q.isString(o)&&l.push("domain="+o),s===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(n){const i=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return i?decodeURIComponent(i[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function dL(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function hL(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function Lx(t,e){return t&&!dL(e)?hL(t,e):e}const pL=ii.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let i;function r(a){let o=a;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return i=r(window.location.href),function(o){const s=q.isString(o)?r(o):o;return s.protocol===i.protocol&&s.host===i.host}}():function(){return function(){return!0}}();function mL(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function gL(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,a=0,o;return e=e!==void 0?e:1e3,function(l){const u=Date.now(),c=i[a];o||(o=u),n[r]=l,i[r]=u;let d=a,h=0;for(;d!==r;)h+=n[d++],d=d%t;if(r=(r+1)%t,r===a&&(a=(a+1)%t),u-o<e)return;const p=c&&u-c;return p?Math.round(h*1e3/p):void 0}}function Ov(t,e){let n=0;const i=gL(50,250);return r=>{const a=r.loaded,o=r.lengthComputable?r.total:void 0,s=a-n,l=i(s),u=a<=o;n=a;const c={loaded:a,total:o,progress:o?a/o:void 0,bytes:s,rate:l||void 0,estimated:l&&o&&u?(o-a)/l:void 0,event:r};c[e?"download":"upload"]=!0,t(c)}}const vL=typeof XMLHttpRequest<"u",_L=vL&&function(t){return new Promise(function(n,i){let r=t.data;const a=Mi.from(t.headers).normalize(),o=t.responseType;let s;function l(){t.cancelToken&&t.cancelToken.unsubscribe(s),t.signal&&t.signal.removeEventListener("abort",s)}q.isFormData(r)&&(ii.isStandardBrowserEnv||ii.isStandardBrowserWebWorkerEnv?a.setContentType(!1):a.setContentType("multipart/form-data;",!1));let u=new XMLHttpRequest;if(t.auth){const p=t.auth.username||"",g=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";a.set("Authorization","Basic "+btoa(p+":"+g))}const c=Lx(t.baseURL,t.url);u.open(t.method.toUpperCase(),Ax(c,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function d(){if(!u)return;const p=Mi.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),v={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:p,config:t,request:u};cL(function(f){n(f),l()},function(f){i(f),l()},v),u=null}if("onloadend"in u?u.onloadend=d:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(d)},u.onabort=function(){u&&(i(new Xe("Request aborted",Xe.ECONNABORTED,t,u)),u=null)},u.onerror=function(){i(new Xe("Network Error",Xe.ERR_NETWORK,t,u)),u=null},u.ontimeout=function(){let g=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const v=t.transitional||Rx;t.timeoutErrorMessage&&(g=t.timeoutErrorMessage),i(new Xe(g,v.clarifyTimeoutError?Xe.ETIMEDOUT:Xe.ECONNABORTED,t,u)),u=null},ii.isStandardBrowserEnv){const p=(t.withCredentials||pL(c))&&t.xsrfCookieName&&fL.read(t.xsrfCookieName);p&&a.set(t.xsrfHeaderName,p)}r===void 0&&a.setContentType(null),"setRequestHeader"in u&&q.forEach(a.toJSON(),function(g,v){u.setRequestHeader(v,g)}),q.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),o&&o!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",Ov(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Ov(t.onUploadProgress)),(t.cancelToken||t.signal)&&(s=p=>{u&&(i(!p||p.type?new Ps(null,t,u):p),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(s),t.signal&&(t.signal.aborted?s():t.signal.addEventListener("abort",s)));const h=mL(c);if(h&&ii.protocols.indexOf(h)===-1){i(new Xe("Unsupported protocol "+h+":",Xe.ERR_BAD_REQUEST,t));return}u.send(r||null)})},Xl={http:VP,xhr:_L};q.forEach(Xl,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const yL={getAdapter:t=>{t=q.isArray(t)?t:[t];const{length:e}=t;let n,i;for(let r=0;r<e&&(n=t[r],!(i=q.isString(n)?Xl[n.toLowerCase()]:n));r++);if(!i)throw i===!1?new Xe(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(q.hasOwnProp(Xl,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`);if(!q.isFunction(i))throw new TypeError("adapter is not a function");return i},adapters:Xl};function Ef(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Ps(null,t)}function Fv(t){return Ef(t),t.headers=Mi.from(t.headers),t.data=Sf.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),yL.getAdapter(t.adapter||cp.adapter)(t).then(function(i){return Ef(t),i.data=Sf.call(t,t.transformResponse,i),i.headers=Mi.from(i.headers),i},function(i){return Px(i)||(Ef(t),i&&i.response&&(i.response.data=Sf.call(t,t.transformResponse,i.response),i.response.headers=Mi.from(i.response.headers))),Promise.reject(i)})}const kv=t=>t instanceof Mi?t.toJSON():t;function ao(t,e){e=e||{};const n={};function i(u,c,d){return q.isPlainObject(u)&&q.isPlainObject(c)?q.merge.call({caseless:d},u,c):q.isPlainObject(c)?q.merge({},c):q.isArray(c)?c.slice():c}function r(u,c,d){if(q.isUndefined(c)){if(!q.isUndefined(u))return i(void 0,u,d)}else return i(u,c,d)}function a(u,c){if(!q.isUndefined(c))return i(void 0,c)}function o(u,c){if(q.isUndefined(c)){if(!q.isUndefined(u))return i(void 0,u)}else return i(void 0,c)}function s(u,c,d){if(d in e)return i(u,c);if(d in t)return i(void 0,u)}const l={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:s,headers:(u,c)=>r(kv(u),kv(c),!0)};return q.forEach(Object.keys(Object.assign({},t,e)),function(c){const d=l[c]||r,h=d(t[c],e[c],c);q.isUndefined(h)&&d!==s||(n[c]=h)}),n}const Dx="1.4.0",fp={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{fp[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const zv={};fp.transitional=function(e,n,i){function r(a,o){return"[Axios v"+Dx+"] Transitional option '"+a+"'"+o+(i?". "+i:"")}return(a,o,s)=>{if(e===!1)throw new Xe(r(o," has been removed"+(n?" in "+n:"")),Xe.ERR_DEPRECATED);return n&&!zv[o]&&(zv[o]=!0,console.warn(r(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(a,o,s):!0}};function xL(t,e,n){if(typeof t!="object")throw new Xe("options must be an object",Xe.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const a=i[r],o=e[a];if(o){const s=t[a],l=s===void 0||o(s,a,t);if(l!==!0)throw new Xe("option "+a+" must be "+l,Xe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new Xe("Unknown option "+a,Xe.ERR_BAD_OPTION)}}const $d={assertOptions:xL,validators:fp},Hi=$d.validators;class wu{constructor(e){this.defaults=e,this.interceptors={request:new Uv,response:new Uv}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=ao(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:a}=n;i!==void 0&&$d.assertOptions(i,{silentJSONParsing:Hi.transitional(Hi.boolean),forcedJSONParsing:Hi.transitional(Hi.boolean),clarifyTimeoutError:Hi.transitional(Hi.boolean)},!1),r!=null&&(q.isFunction(r)?n.paramsSerializer={serialize:r}:$d.assertOptions(r,{encode:Hi.function,serialize:Hi.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o;o=a&&q.merge(a.common,a[n.method]),o&&q.forEach(["delete","get","head","post","put","patch","common"],g=>{delete a[g]}),n.headers=Mi.concat(o,a);const s=[];let l=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(l=l&&v.synchronous,s.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let c,d=0,h;if(!l){const g=[Fv.bind(this),void 0];for(g.unshift.apply(g,s),g.push.apply(g,u),h=g.length,c=Promise.resolve(n);d<h;)c=c.then(g[d++],g[d++]);return c}h=s.length;let p=n;for(d=0;d<h;){const g=s[d++],v=s[d++];try{p=g(p)}catch(m){v.call(this,m);break}}try{c=Fv.call(this,p)}catch(g){return Promise.reject(g)}for(d=0,h=u.length;d<h;)c=c.then(u[d++],u[d++]);return c}getUri(e){e=ao(this.defaults,e);const n=Lx(e.baseURL,e.url);return Ax(n,e.params,e.paramsSerializer)}}q.forEach(["delete","get","head","options"],function(e){wu.prototype[e]=function(n,i){return this.request(ao(i||{},{method:e,url:n,data:(i||{}).data}))}});q.forEach(["post","put","patch"],function(e){function n(i){return function(a,o,s){return this.request(ao(s||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:o}))}}wu.prototype[e]=n(),wu.prototype[e+"Form"]=n(!0)});const jl=wu;class dp{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const i=this;this.promise.then(r=>{if(!i._listeners)return;let a=i._listeners.length;for(;a-- >0;)i._listeners[a](r);i._listeners=null}),this.promise.then=r=>{let a;const o=new Promise(s=>{i.subscribe(s),a=s}).then(r);return o.cancel=function(){i.unsubscribe(a)},o},e(function(a,o,s){i.reason||(i.reason=new Ps(a,o,s),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new dp(function(r){e=r}),cancel:e}}}const SL=dp;function EL(t){return function(n){return t.apply(null,n)}}function ML(t){return q.isObject(t)&&t.isAxiosError===!0}const qd={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(qd).forEach(([t,e])=>{qd[e]=t});const wL=qd;function Nx(t){const e=new jl(t),n=mx(jl.prototype.request,e);return q.extend(n,jl.prototype,e,{allOwnKeys:!0}),q.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return Nx(ao(t,r))},n}const At=Nx(cp);At.Axios=jl;At.CanceledError=Ps;At.CancelToken=SL;At.isCancel=Px;At.VERSION=Dx;At.toFormData=nc;At.AxiosError=Xe;At.Cancel=At.CanceledError;At.all=function(e){return Promise.all(e)};At.spread=EL;At.isAxiosError=ML;At.mergeConfig=ao;At.AxiosHeaders=Mi;At.formToJSON=t=>Cx(q.isHTMLForm(t)?new FormData(t):t);At.HttpStatusCode=wL;At.default=At;const Bv=At,TL="/FL-Variant/assets/science-bfced9fe.png",bL=()=>{const t=we.useRef(null),[e,n]=we.useState([]),i=a=>{const o=new FormData;o.append("file",a),Bv.post("api",o,{headers:{"Content-Type":"multipart/form-data"}}).then(s=>{console.log(s.data)})},r=()=>{t.current.click()};return we.useEffect(()=>{Bv.get("api").then(a=>n(a.data)).catch(a=>{console.error(a)})},[]),$t(qv,{children:[Ee(Oy,{class:"1"}),$t("div",{className:"home",children:[$t("div",{className:"main",children:[$t("div",{className:"upload-section",children:[Ee("h1",{className:"title",children:"Variant analysis & visualization dashboard"}),Ee("br",{}),Ee("p",{className:"text",children:"Welcome to our website dedicated to data visualization, providing you with an interactive and user-friendly experience to explore and understand the world of genetic variations."}),Ee("br",{}),Ee("p",{children:"get started by uploading your file now!"}),Ee("button",{type:"button",onClick:r,className:"submit",children:"Upload VCF file"}),Ee("input",{ref:t,type:"file",onChange:a=>i(a.target.files[0]),accept:".vcf",placeholder:"upload file"})]}),Ee("div",{className:"animation-section",children:Ee(lP,{})})]}),$t("div",{className:"about",children:[Ee("h2",{children:"About FL Variant"}),$t("div",{className:"section",children:[Ee("div",{className:"text",children:Ee("p",{children:"With FL Variant, you can easily upload data from multiple patients and gain comprehensive insights into mutation types for each individual. The dashboard allows you to filter results based on various criteria such as genes, mutation types, or genomic impact."})}),Ee("div",{className:"img",children:Ee("img",{src:TL,alt:"science"})}),Ee("div",{className:"text",children:Ee("p",{children:"At FL Variant, we prioritize data visualization to enhance your understanding. Through interactive graphs and visual schematics, you can explore key information including genes, mutations (SNP/indel), and chromosomes."})})]}),Ee("h2",{children:"Key features in FL Variant"}),$t("div",{className:"section",children:[$t("div",{className:"text",children:[Ee("h3",{children:"Interactives charts"}),Ee("p",{children:"Gain valuable insights and make informed decisions as you navigate through the interactive charts on FL Variant"})]}),$t("div",{className:"text",children:[Ee("h3",{children:"Personalized filters"}),Ee("p",{children:"With personalized filters, you can refine and narrow down your analysis based on specific criteria such as genes, mutation types, genomic impacts. Tailor the data view to suit your research needs and focus on the aspects that matter most."})]}),$t("div",{className:"text",children:[Ee("h3",{children:"Reports"}),Ee("p",{children:"With the reports feature of the FL Variant website, you can efficiently communicate your analysis outcomes and contribute to the advancement of genomic understanding."})]})]})]})]}),Ee(iT,{})]})},AL=()=>$t(qv,{children:[Ee(Oy,{}),Ee("div",{children:"me"})]});function RL(){return Ee(n1,{children:$t(t1,{children:[Ee(Sd,{exact:!0,path:"/FL-Variant",element:Ee(bL,{})}),Ee(Sd,{exact:!0,path:"/FL-Variant/result",element:Ee(AL,{})})]})})}wf.createRoot(document.getElementById("root")).render(Ee(jn.StrictMode,{children:Ee(RL,{})}));
