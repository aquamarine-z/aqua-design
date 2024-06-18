(function(g,j){typeof exports=="object"&&typeof module<"u"?j(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],j):(g=typeof globalThis<"u"?globalThis:g||self,j(g["aqua-ui"]={},g.react))})(this,function(g,j){"use strict";var G={exports:{}},F={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var te;function je(){if(te)return F;te=1;var _=j,f=Symbol.for("react.element"),y=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,P=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,w={key:!0,ref:!0,__self:!0,__source:!0};function C(b,c,k){var h,T={},O=null,M=null;k!==void 0&&(O=""+k),c.key!==void 0&&(O=""+c.key),c.ref!==void 0&&(M=c.ref);for(h in c)E.call(c,h)&&!w.hasOwnProperty(h)&&(T[h]=c[h]);if(b&&b.defaultProps)for(h in c=b.defaultProps,c)T[h]===void 0&&(T[h]=c[h]);return{$$typeof:f,type:b,key:O,ref:M,props:T,_owner:P.current}}return F.Fragment=y,F.jsx=C,F.jsxs=C,F}var I={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ne;function Pe(){return ne||(ne=1,process.env.NODE_ENV!=="production"&&function(){var _=j,f=Symbol.for("react.element"),y=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),P=Symbol.for("react.strict_mode"),w=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),b=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),h=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),M=Symbol.for("react.offscreen"),ae=Symbol.iterator,$e="@@iterator";function Le(e){if(e===null||typeof e!="object")return null;var r=ae&&e[ae]||e[$e];return typeof r=="function"?r:null}var A=_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function d(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Me("error",e,t)}}function Me(e,r,t){{var n=A.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Ne=!1,Ve=!1,Ue=!1,Be=!1,Ge=!1,oe;oe=Symbol.for("react.module.reference");function Je(e){return!!(typeof e=="string"||typeof e=="function"||e===E||e===w||Ge||e===P||e===k||e===h||Be||e===M||Ne||Ve||Ue||typeof e=="object"&&e!==null&&(e.$$typeof===O||e.$$typeof===T||e.$$typeof===C||e.$$typeof===b||e.$$typeof===c||e.$$typeof===oe||e.getModuleId!==void 0))}function Ke(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function ie(e){return e.displayName||"Context"}function R(e){if(e==null)return null;if(typeof e.tag=="number"&&d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case E:return"Fragment";case y:return"Portal";case w:return"Profiler";case P:return"StrictMode";case k:return"Suspense";case h:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case b:var r=e;return ie(r)+".Consumer";case C:var t=e;return ie(t._context)+".Provider";case c:return Ke(e,e.render,"ForwardRef");case T:var n=e.displayName||null;return n!==null?n:R(e.type)||"Memo";case O:{var i=e,u=i._payload,o=i._init;try{return R(o(u))}catch{return null}}}return null}var x=Object.assign,W=0,ue,se,le,fe,ce,de,ve;function _e(){}_e.__reactDisabledLog=!0;function ze(){{if(W===0){ue=console.log,se=console.info,le=console.warn,fe=console.error,ce=console.group,de=console.groupCollapsed,ve=console.groupEnd;var e={configurable:!0,enumerable:!0,value:_e,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}W++}}function Xe(){{if(W--,W===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:x({},e,{value:ue}),info:x({},e,{value:se}),warn:x({},e,{value:le}),error:x({},e,{value:fe}),group:x({},e,{value:ce}),groupCollapsed:x({},e,{value:de}),groupEnd:x({},e,{value:ve})})}W<0&&d("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var J=A.ReactCurrentDispatcher,K;function N(e,r,t){{if(K===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);K=n&&n[1]||""}return`
`+K+e}}var z=!1,V;{var He=typeof WeakMap=="function"?WeakMap:Map;V=new He}function pe(e,r){if(!e||z)return"";{var t=V.get(e);if(t!==void 0)return t}var n;z=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=J.current,J.current=null,ze();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(p){n=p}Reflect.construct(e,[],o)}else{try{o.call()}catch(p){n=p}e.call(o.prototype)}}else{try{throw Error()}catch(p){n=p}e()}}catch(p){if(p&&n&&typeof p.stack=="string"){for(var a=p.stack.split(`
`),v=n.stack.split(`
`),s=a.length-1,l=v.length-1;s>=1&&l>=0&&a[s]!==v[l];)l--;for(;s>=1&&l>=0;s--,l--)if(a[s]!==v[l]){if(s!==1||l!==1)do if(s--,l--,l<0||a[s]!==v[l]){var m=`
`+a[s].replace(" at new "," at ");return e.displayName&&m.includes("<anonymous>")&&(m=m.replace("<anonymous>",e.displayName)),typeof e=="function"&&V.set(e,m),m}while(s>=1&&l>=0);break}}}finally{z=!1,J.current=u,Xe(),Error.prepareStackTrace=i}var D=e?e.displayName||e.name:"",S=D?N(D):"";return typeof e=="function"&&V.set(e,S),S}function Qe(e,r,t){return pe(e,!1)}function Ze(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function U(e,r,t){if(e==null)return"";if(typeof e=="function")return pe(e,Ze(e));if(typeof e=="string")return N(e);switch(e){case k:return N("Suspense");case h:return N("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case c:return Qe(e.render);case T:return U(e.type,r,t);case O:{var n=e,i=n._payload,u=n._init;try{return U(u(i),r,t)}catch{}}}return""}var Y=Object.prototype.hasOwnProperty,he={},me=A.ReactDebugCurrentFrame;function B(e){if(e){var r=e._owner,t=U(e.type,e._source,r?r.type:null);me.setExtraStackFrame(t)}else me.setExtraStackFrame(null)}function er(e,r,t,n,i){{var u=Function.call.bind(Y);for(var o in e)if(u(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var v=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw v.name="Invariant Violation",v}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(B(i),d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),B(null)),a instanceof Error&&!(a.message in he)&&(he[a.message]=!0,B(i),d("Failed %s type: %s",t,a.message),B(null))}}}var rr=Array.isArray;function X(e){return rr(e)}function tr(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function nr(e){try{return ye(e),!1}catch{return!0}}function ye(e){return""+e}function ge(e){if(nr(e))return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",tr(e)),ye(e)}var $=A.ReactCurrentOwner,ar={key:!0,ref:!0,__self:!0,__source:!0},be,Re,H;H={};function or(e){if(Y.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function ir(e){if(Y.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function ur(e,r){if(typeof e.ref=="string"&&$.current&&r&&$.current.stateNode!==r){var t=R($.current.type);H[t]||(d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',R($.current.type),e.ref),H[t]=!0)}}function sr(e,r){{var t=function(){be||(be=!0,d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function lr(e,r){{var t=function(){Re||(Re=!0,d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var fr=function(e,r,t,n,i,u,o){var a={$$typeof:f,type:e,key:r,ref:t,props:o,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function cr(e,r,t,n,i){{var u,o={},a=null,v=null;t!==void 0&&(ge(t),a=""+t),ir(r)&&(ge(r.key),a=""+r.key),or(r)&&(v=r.ref,ur(r,i));for(u in r)Y.call(r,u)&&!ar.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)o[u]===void 0&&(o[u]=s[u])}if(a||v){var l=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&sr(o,l),v&&lr(o,l)}return fr(e,a,v,i,n,$.current,o)}}var Q=A.ReactCurrentOwner,Ee=A.ReactDebugCurrentFrame;function q(e){if(e){var r=e._owner,t=U(e.type,e._source,r?r.type:null);Ee.setExtraStackFrame(t)}else Ee.setExtraStackFrame(null)}var Z;Z=!1;function ee(e){return typeof e=="object"&&e!==null&&e.$$typeof===f}function Te(){{if(Q.current){var e=R(Q.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function dr(e){return""}var we={};function vr(e){{var r=Te();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Ce(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=vr(r);if(we[t])return;we[t]=!0;var n="";e&&e._owner&&e._owner!==Q.current&&(n=" It was passed a child from "+R(e._owner.type)+"."),q(e),d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),q(null)}}function Oe(e,r){{if(typeof e!="object")return;if(X(e))for(var t=0;t<e.length;t++){var n=e[t];ee(n)&&Ce(n,r)}else if(ee(e))e._store&&(e._store.validated=!0);else if(e){var i=Le(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)ee(o.value)&&Ce(o.value,r)}}}function _r(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===c||r.$$typeof===T))t=r.propTypes;else return;if(t){var n=R(r);er(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!Z){Z=!0;var i=R(r);d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function pr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){q(e),d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),q(null);break}}e.ref!==null&&(q(e),d("Invalid attribute `ref` supplied to `React.Fragment`."),q(null))}}var xe={};function Se(e,r,t,n,i,u){{var o=Je(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var v=dr();v?a+=v:a+=Te();var s;e===null?s="null":X(e)?s="array":e!==void 0&&e.$$typeof===f?(s="<"+(R(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var l=cr(e,r,t,i,u);if(l==null)return l;if(o){var m=r.children;if(m!==void 0)if(n)if(X(m)){for(var D=0;D<m.length;D++)Oe(m[D],e);Object.freeze&&Object.freeze(m)}else d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Oe(m,e)}if(Y.call(r,"key")){var S=R(e),p=Object.keys(r).filter(function(Rr){return Rr!=="key"}),re=p.length>0?"{key: someKey, "+p.join(": ..., ")+": ...}":"{key: someKey}";if(!xe[S+re]){var br=p.length>0?"{"+p.join(": ..., ")+": ...}":"{}";d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,re,S,br,S),xe[S+re]=!0}}return e===E?pr(l):_r(l),l}}function hr(e,r,t){return Se(e,r,t,!0)}function mr(e,r,t){return Se(e,r,t,!1)}var yr=mr,gr=hr;I.Fragment=E,I.jsx=yr,I.jsxs=gr}()),I}process.env.NODE_ENV==="production"?G.exports=je():G.exports=Pe();var L=G.exports;const ke={aq_flex:"AqFlex-module__aq_flex___IapMH"};function Ae(_){var f=_.flexDirection,y=f===void 0?"row":f,E=_.justifyContent,P=E===void 0?"flex-start":E,w=_.alignItems,C=w===void 0?"flex-start":w,b=_.children,c=b===void 0?null:b;return L.jsx("div",{style:{display:"flex",flexDirection:y,justifyContent:P,alignItems:C},className:ke.aq_flex,children:c})}const qe={aq_column:"AqColumn-module__aq_column___B1cj8"};function De(_){var f=_.children,y=f===void 0?null:f;return L.jsx("div",{className:qe.aq_column,children:y})}const Fe={aq_row:"AqRow-module__aq_row___a9P1Y"};function Ie(_){var f=_.children,y=f===void 0?null:f;return L.jsx("div",{className:Fe.aq_row,children:y})}const We={aq_glass_theme:"AqGlassTheme-module__aq_glass_theme___QRCrE"};function Ye(_){var f=_.children,y=f===void 0?null:f;return L.jsx("div",{className:We.aq_glass_theme,children:y})}g.AqColumn=De,g.AqFlex=Ae,g.AqGlassTheme=Ye,g.AqRow=Ie,Object.defineProperty(g,Symbol.toStringTag,{value:"Module"})});
