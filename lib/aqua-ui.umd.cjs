(function(V,I){typeof exports=="object"&&typeof module<"u"?I(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],I):(V=typeof globalThis<"u"?globalThis:V||self,I(V["aqua-ui"]={},V.react))})(this,function(V,I){"use strict";const Fr="AqColumn-module__aq_column___B1cj8",Lr={aq_column:Fr},Zt=Object.freeze(Object.defineProperty({__proto__:null,aq_column:Fr,default:Lr},Symbol.toStringTag,{value:"Module"})),zr="AqDraggable-module__aq_draggable___JeMIa",dr={aq_draggable:zr},Qt=Object.freeze(Object.defineProperty({__proto__:null,aq_draggable:zr,default:dr},Symbol.toStringTag,{value:"Module"})),Yr="AqFlex-module__aq_flex___IapMH",Vr={aq_flex:Yr},en=Object.freeze(Object.defineProperty({__proto__:null,aq_flex:Yr,default:Vr},Symbol.toStringTag,{value:"Module"})),Wr="AqModalDialog-module__aq_modal_dialog_layer___aj202",Br="AqModalDialog-module__aq_modal_dialog___GRSj2",fr={aq_modal_dialog_layer:Wr,aq_modal_dialog:Br},rn=Object.freeze(Object.defineProperty({__proto__:null,aq_modal_dialog:Br,aq_modal_dialog_layer:Wr,default:fr},Symbol.toStringTag,{value:"Module"})),Ur="AqRow-module__aq_row___a9P1Y",Gr={aq_row:Ur},tn=Object.freeze(Object.defineProperty({__proto__:null,aq_row:Ur,default:Gr},Symbol.toStringTag,{value:"Module"})),nn=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));var pr={exports:{}},Fe={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hr;function on(){if(Hr)return Fe;Hr=1;var e=I,r=Symbol.for("react.element"),t=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(d,l,g){var f,m={},b=null,_=null;g!==void 0&&(b=""+g),l.key!==void 0&&(b=""+l.key),l.ref!==void 0&&(_=l.ref);for(f in l)o.call(l,f)&&!i.hasOwnProperty(f)&&(m[f]=l[f]);if(d&&d.defaultProps)for(f in l=d.defaultProps,l)m[f]===void 0&&(m[f]=l[f]);return{$$typeof:r,type:d,key:b,ref:_,props:m,_owner:a.current}}return Fe.Fragment=t,Fe.jsx=c,Fe.jsxs=c,Fe}var Le={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xr;function an(){return Xr||(Xr=1,process.env.NODE_ENV!=="production"&&function(){var e=I,r=Symbol.for("react.element"),t=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),_=Symbol.for("react.offscreen"),O=Symbol.iterator,j="@@iterator";function L(n){if(n===null||typeof n!="object")return null;var s=O&&n[O]||n[j];return typeof s=="function"?s:null}var k=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function v(n){{for(var s=arguments.length,u=new Array(s>1?s-1:0),h=1;h<s;h++)u[h-1]=arguments[h];T("error",n,u)}}function T(n,s,u){{var h=k.ReactDebugCurrentFrame,C=h.getStackAddendum();C!==""&&(s+="%s",u=u.concat([C]));var A=u.map(function(S){return String(S)});A.unshift("Warning: "+s),Function.prototype.apply.call(console[n],console,A)}}var E=!1,P=!1,w=!1,p=!1,G=!1,H;H=Symbol.for("react.module.reference");function De(n){return!!(typeof n=="string"||typeof n=="function"||n===o||n===i||G||n===a||n===g||n===f||p||n===_||E||P||w||typeof n=="object"&&n!==null&&(n.$$typeof===b||n.$$typeof===m||n.$$typeof===c||n.$$typeof===d||n.$$typeof===l||n.$$typeof===H||n.getModuleId!==void 0))}function _e(n,s,u){var h=n.displayName;if(h)return h;var C=s.displayName||s.name||"";return C!==""?u+"("+C+")":u}function we(n){return n.displayName||"Context"}function q(n){if(n==null)return null;if(typeof n.tag=="number"&&v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case o:return"Fragment";case t:return"Portal";case i:return"Profiler";case a:return"StrictMode";case g:return"Suspense";case f:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case d:var s=n;return we(s)+".Consumer";case c:var u=n;return we(u._context)+".Provider";case l:return _e(n,n.render,"ForwardRef");case m:var h=n.displayName||null;return h!==null?h:q(n.type)||"Memo";case b:{var C=n,A=C._payload,S=C._init;try{return q(S(A))}catch{return null}}}return null}var K=Object.assign,oe=0,ae,se,ue,J,de,fe,z;function Ie(){}Ie.__reactDisabledLog=!0;function Ve(){{if(oe===0){ae=console.log,se=console.info,ue=console.warn,J=console.error,de=console.group,fe=console.groupCollapsed,z=console.groupEnd;var n={configurable:!0,enumerable:!0,value:Ie,writable:!0};Object.defineProperties(console,{info:n,log:n,warn:n,error:n,group:n,groupCollapsed:n,groupEnd:n})}oe++}}function Ne(){{if(oe--,oe===0){var n={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:K({},n,{value:ae}),info:K({},n,{value:se}),warn:K({},n,{value:ue}),error:K({},n,{value:J}),group:K({},n,{value:de}),groupCollapsed:K({},n,{value:fe}),groupEnd:K({},n,{value:z})})}oe<0&&v("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var ce=k.ReactCurrentDispatcher,pe;function ee(n,s,u){{if(pe===void 0)try{throw Error()}catch(C){var h=C.stack.trim().match(/\n( *(at )?)/);pe=h&&h[1]||""}return`
`+pe+n}}var re=!1,he;{var $e=typeof WeakMap=="function"?WeakMap:Map;he=new $e}function te(n,s){if(!n||re)return"";{var u=he.get(n);if(u!==void 0)return u}var h;re=!0;var C=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var A;A=ce.current,ce.current=null,Ve();try{if(s){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(B){h=B}Reflect.construct(n,[],S)}else{try{S.call()}catch(B){h=B}n.call(S.prototype)}}else{try{throw Error()}catch(B){h=B}n()}}catch(B){if(B&&h&&typeof B.stack=="string"){for(var x=B.stack.split(`
`),Y=h.stack.split(`
`),N=x.length-1,M=Y.length-1;N>=1&&M>=0&&x[N]!==Y[M];)M--;for(;N>=1&&M>=0;N--,M--)if(x[N]!==Y[M]){if(N!==1||M!==1)do if(N--,M--,M<0||x[N]!==Y[M]){var Z=`
`+x[N].replace(" at new "," at ");return n.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",n.displayName)),typeof n=="function"&&he.set(n,Z),Z}while(N>=1&&M>=0);break}}}finally{re=!1,ce.current=A,Ne(),Error.prepareStackTrace=C}var qe=n?n.displayName||n.name:"",xe=qe?ee(qe):"";return typeof n=="function"&&he.set(n,xe),xe}function Eo(n,s,u){return te(n,!1)}function ko(n){var s=n.prototype;return!!(s&&s.isReactComponent)}function lr(n,s,u){if(n==null)return"";if(typeof n=="function")return te(n,ko(n));if(typeof n=="string")return ee(n);switch(n){case g:return ee("Suspense");case f:return ee("SuspenseList")}if(typeof n=="object")switch(n.$$typeof){case l:return Eo(n.render);case m:return lr(n.type,s,u);case b:{var h=n,C=h._payload,A=h._init;try{return lr(A(C),s,u)}catch{}}}return""}var We=Object.prototype.hasOwnProperty,Ft={},Lt=k.ReactDebugCurrentFrame;function ur(n){if(n){var s=n._owner,u=lr(n.type,n._source,s?s.type:null);Lt.setExtraStackFrame(u)}else Lt.setExtraStackFrame(null)}function Ro(n,s,u,h,C){{var A=Function.call.bind(We);for(var S in n)if(A(n,S)){var x=void 0;try{if(typeof n[S]!="function"){var Y=Error((h||"React class")+": "+u+" type `"+S+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof n[S]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw Y.name="Invariant Violation",Y}x=n[S](s,S,h,u,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(N){x=N}x&&!(x instanceof Error)&&(ur(C),v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",h||"React class",u,S,typeof x),ur(null)),x instanceof Error&&!(x.message in Ft)&&(Ft[x.message]=!0,ur(C),v("Failed %s type: %s",u,x.message),ur(null))}}}var To=Array.isArray;function Dr(n){return To(n)}function Co(n){{var s=typeof Symbol=="function"&&Symbol.toStringTag,u=s&&n[Symbol.toStringTag]||n.constructor.name||"Object";return u}}function Oo(n){try{return zt(n),!1}catch{return!0}}function zt(n){return""+n}function Yt(n){if(Oo(n))return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Co(n)),zt(n)}var Be=k.ReactCurrentOwner,Po={key:!0,ref:!0,__self:!0,__source:!0},Vt,Wt,Ir;Ir={};function Ao(n){if(We.call(n,"ref")){var s=Object.getOwnPropertyDescriptor(n,"ref").get;if(s&&s.isReactWarning)return!1}return n.ref!==void 0}function jo(n){if(We.call(n,"key")){var s=Object.getOwnPropertyDescriptor(n,"key").get;if(s&&s.isReactWarning)return!1}return n.key!==void 0}function Do(n,s){if(typeof n.ref=="string"&&Be.current&&s&&Be.current.stateNode!==s){var u=q(Be.current.type);Ir[u]||(v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',q(Be.current.type),n.ref),Ir[u]=!0)}}function Io(n,s){{var u=function(){Vt||(Vt=!0,v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",s))};u.isReactWarning=!0,Object.defineProperty(n,"key",{get:u,configurable:!0})}}function No(n,s){{var u=function(){Wt||(Wt=!0,v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",s))};u.isReactWarning=!0,Object.defineProperty(n,"ref",{get:u,configurable:!0})}}var $o=function(n,s,u,h,C,A,S){var x={$$typeof:r,type:n,key:s,ref:u,props:S,_owner:A};return x._store={},Object.defineProperty(x._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(x,"_self",{configurable:!1,enumerable:!1,writable:!1,value:h}),Object.defineProperty(x,"_source",{configurable:!1,enumerable:!1,writable:!1,value:C}),Object.freeze&&(Object.freeze(x.props),Object.freeze(x)),x};function Mo(n,s,u,h,C){{var A,S={},x=null,Y=null;u!==void 0&&(Yt(u),x=""+u),jo(s)&&(Yt(s.key),x=""+s.key),Ao(s)&&(Y=s.ref,Do(s,C));for(A in s)We.call(s,A)&&!Po.hasOwnProperty(A)&&(S[A]=s[A]);if(n&&n.defaultProps){var N=n.defaultProps;for(A in N)S[A]===void 0&&(S[A]=N[A])}if(x||Y){var M=typeof n=="function"?n.displayName||n.name||"Unknown":n;x&&Io(S,M),Y&&No(S,M)}return $o(n,x,Y,C,h,Be.current,S)}}var Nr=k.ReactCurrentOwner,Bt=k.ReactDebugCurrentFrame;function Me(n){if(n){var s=n._owner,u=lr(n.type,n._source,s?s.type:null);Bt.setExtraStackFrame(u)}else Bt.setExtraStackFrame(null)}var $r;$r=!1;function Mr(n){return typeof n=="object"&&n!==null&&n.$$typeof===r}function Ut(){{if(Nr.current){var n=q(Nr.current.type);if(n)return`

Check the render method of \``+n+"`."}return""}}function qo(n){return""}var Gt={};function Fo(n){{var s=Ut();if(!s){var u=typeof n=="string"?n:n.displayName||n.name;u&&(s=`

Check the top-level render call using <`+u+">.")}return s}}function Ht(n,s){{if(!n._store||n._store.validated||n.key!=null)return;n._store.validated=!0;var u=Fo(s);if(Gt[u])return;Gt[u]=!0;var h="";n&&n._owner&&n._owner!==Nr.current&&(h=" It was passed a child from "+q(n._owner.type)+"."),Me(n),v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',u,h),Me(null)}}function Xt(n,s){{if(typeof n!="object")return;if(Dr(n))for(var u=0;u<n.length;u++){var h=n[u];Mr(h)&&Ht(h,s)}else if(Mr(n))n._store&&(n._store.validated=!0);else if(n){var C=L(n);if(typeof C=="function"&&C!==n.entries)for(var A=C.call(n),S;!(S=A.next()).done;)Mr(S.value)&&Ht(S.value,s)}}}function Lo(n){{var s=n.type;if(s==null||typeof s=="string")return;var u;if(typeof s=="function")u=s.propTypes;else if(typeof s=="object"&&(s.$$typeof===l||s.$$typeof===m))u=s.propTypes;else return;if(u){var h=q(s);Ro(u,n.props,"prop",h,n)}else if(s.PropTypes!==void 0&&!$r){$r=!0;var C=q(s);v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",C||"Unknown")}typeof s.getDefaultProps=="function"&&!s.getDefaultProps.isReactClassApproved&&v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function zo(n){{for(var s=Object.keys(n.props),u=0;u<s.length;u++){var h=s[u];if(h!=="children"&&h!=="key"){Me(n),v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",h),Me(null);break}}n.ref!==null&&(Me(n),v("Invalid attribute `ref` supplied to `React.Fragment`."),Me(null))}}var Kt={};function Jt(n,s,u,h,C,A){{var S=De(n);if(!S){var x="";(n===void 0||typeof n=="object"&&n!==null&&Object.keys(n).length===0)&&(x+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var Y=qo();Y?x+=Y:x+=Ut();var N;n===null?N="null":Dr(n)?N="array":n!==void 0&&n.$$typeof===r?(N="<"+(q(n.type)||"Unknown")+" />",x=" Did you accidentally export a JSX literal instead of a component?"):N=typeof n,v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",N,x)}var M=Mo(n,s,u,C,A);if(M==null)return M;if(S){var Z=s.children;if(Z!==void 0)if(h)if(Dr(Z)){for(var qe=0;qe<Z.length;qe++)Xt(Z[qe],n);Object.freeze&&Object.freeze(Z)}else v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Xt(Z,n)}if(We.call(s,"key")){var xe=q(n),B=Object.keys(s).filter(function(Go){return Go!=="key"}),qr=B.length>0?"{key: someKey, "+B.join(": ..., ")+": ...}":"{key: someKey}";if(!Kt[xe+qr]){var Uo=B.length>0?"{"+B.join(": ..., ")+": ...}":"{}";v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,qr,xe,Uo,xe),Kt[xe+qr]=!0}}return n===o?zo(M):Lo(M),M}}function Yo(n,s,u){return Jt(n,s,u,!0)}function Vo(n,s,u){return Jt(n,s,u,!1)}var Wo=Vo,Bo=Yo;Le.Fragment=o,Le.jsx=Wo,Le.jsxs=Bo}()),Le}process.env.NODE_ENV==="production"?pr.exports=on():pr.exports=an();var U=pr.exports;function sn(e){var r=e.flexDirection,t=r===void 0?"row":r,o=e.justifyContent,a=o===void 0?"flex-start":o,i=e.alignItems,c=i===void 0?"flex-start":i,d=e.children,l=d===void 0?null:d;return U.jsx("div",{style:{display:"flex",flexDirection:t,justifyContent:a,alignItems:c},className:Vr.aq_flex,children:l})}function cn(e){var r=e.children,t=r===void 0?null:r;return U.jsx("div",{className:Lr.aq_column,children:t})}function ln(e){var r=e.children,t=r===void 0?null:r;return U.jsx("div",{className:Gr.aq_row,children:t})}var Se=function(){return Se=Object.assign||function(r){for(var t,o=1,a=arguments.length;o<a;o++){t=arguments[o];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},Se.apply(this,arguments)};function un(e,r){return Object.defineProperty?Object.defineProperty(e,"raw",{value:r}):e.raw=r,e}typeof SuppressedError=="function"&&SuppressedError;function hr(e){var r=e.children,t=e.position,o=t===void 0?"fixed":t,a=e.originalPosition,i=a===void 0?{left:0,top:0}:a,c=e.style,d=c===void 0?{}:c,l=I.createRef(),g=I.useState(i.left),f=g[0],m=g[1],b=I.useState(i.top),_=b[0],O=b[1],j=I.useState(!1),L=j[0],k=j[1],v=I.useState(0),T=v[0],E=v[1],P=I.useState(0),w=P[0],p=P[1];if(o==="fixed"){var G=function(q){k(!0),E(q.pageX),p(q.pageY)},H=function(q){if(L){var K=q.pageX,oe=q.pageY;E(K),p(oe),m(f+K-T),O(_+oe-w)}},De=function(){k(!1),E(0),p(0)},_e=function(){De()};return U.jsx("div",{style:Se(Se({},d),{position:"fixed",left:f+"px",top:_+"px"}),onMouseDown:G,onMouseOut:_e,onMouseMove:H,onMouseUp:De,className:dr.aq_draggable,ref:l,children:r})}else{var G=function(ae){k(!0),E(ae.clientX),p(ae.clientY)},H=function(ae){if(L){var se=ae.clientX,ue=ae.clientY;E(se),p(ue),m(f+se-T),O(_+ue-w)}},we=function(){k(!1),E(0),p(0)},_e=function(){we()};return U.jsx("div",{style:Se(Se({},d),{position:"absolute",left:f+"px",top:_+"px"}),onMouseDown:G,onMouseOut:_e,onMouseMove:H,onMouseUp:we,className:dr.aq_draggable,ref:l,children:r})}}hr.defaultProps={originalPosition:{left:0,top:0},style:null};function dn(e){var r=e.visible,t=r===void 0?!1:r,o=e.children,a=o===void 0?null:o,i=document.documentElement.clientWidth/2,c=document.documentElement.clientHeight/2,d=29;return t?U.jsx(U.Fragment,{children:U.jsx("div",{className:fr.aq_modal_dialog_layer,style:{zIndex:d},children:U.jsx(hr,{position:"fixed",originalPosition:{left:i,top:c},style:{transform:"translateX(-50%) translateY(-50%)"},children:U.jsx("div",{className:fr.aq_modal_dialog,children:a})})})}):U.jsx(U.Fragment,{})}var W=function(){return W=Object.assign||function(r){for(var t,o=1,a=arguments.length;o<a;o++){t=arguments[o];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},W.apply(this,arguments)};function Ee(e,r,t){if(t||arguments.length===2)for(var o=0,a=r.length,i;o<a;o++)(i||!(o in r))&&(i||(i=Array.prototype.slice.call(r,0,o)),i[o]=r[o]);return e.concat(i||Array.prototype.slice.call(r))}typeof SuppressedError=="function"&&SuppressedError;function fn(e){var r=Object.create(null);return function(t){return r[t]===void 0&&(r[t]=e(t)),r[t]}}var pn=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,hn=fn(function(e){return pn.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),D="-ms-",ze="-moz-",R="-webkit-",Kr="comm",Ue="rule",gr="decl",gn="@import",Jr="@keyframes",mn="@layer",Zr=Math.abs,mr=String.fromCharCode,vr=Object.assign;function vn(e,r){return F(e,0)^45?(((r<<2^F(e,0))<<2^F(e,1))<<2^F(e,2))<<2^F(e,3):0}function Qr(e){return e.trim()}function ie(e,r){return(e=r.exec(e))?e[0]:e}function y(e,r,t){return e.replace(r,t)}function Ge(e,r,t){return e.indexOf(r,t)}function F(e,r){return e.charCodeAt(r)|0}function ke(e,r,t){return e.slice(r,t)}function ne(e){return e.length}function et(e){return e.length}function Ye(e,r){return r.push(e),e}function yn(e,r){return e.map(r).join("")}function rt(e,r){return e.filter(function(t){return!ie(t,r)})}var He=1,Re=1,tt=0,X=0,$=0,Te="";function Xe(e,r,t,o,a,i,c,d){return{value:e,root:r,parent:t,type:o,props:a,children:i,line:He,column:Re,length:c,return:"",siblings:d}}function le(e,r){return vr(Xe("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},r)}function Ce(e){for(;e.root;)e=le(e.root,{children:[e]});Ye(e,e.siblings)}function bn(){return $}function _n(){return $=X>0?F(Te,--X):0,Re--,$===10&&(Re=1,He--),$}function Q(){return $=X<tt?F(Te,X++):0,Re++,$===10&&(Re=1,He++),$}function ge(){return F(Te,X)}function Ke(){return X}function Je(e,r){return ke(Te,e,r)}function yr(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wn(e){return He=Re=1,tt=ne(Te=e),X=0,[]}function xn(e){return Te="",e}function br(e){return Qr(Je(X-1,_r(e===91?e+2:e===40?e+1:e)))}function Sn(e){for(;($=ge())&&$<33;)Q();return yr(e)>2||yr($)>3?"":" "}function En(e,r){for(;--r&&Q()&&!($<48||$>102||$>57&&$<65||$>70&&$<97););return Je(e,Ke()+(r<6&&ge()==32&&Q()==32))}function _r(e){for(;Q();)switch($){case e:return X;case 34:case 39:e!==34&&e!==39&&_r($);break;case 40:e===41&&_r(e);break;case 92:Q();break}return X}function kn(e,r){for(;Q()&&e+$!==57;)if(e+$===84&&ge()===47)break;return"/*"+Je(r,X-1)+"*"+mr(e===47?e:Q())}function Rn(e){for(;!yr(ge());)Q();return Je(e,X)}function Tn(e){return xn(Ze("",null,null,null,[""],e=wn(e),0,[0],e))}function Ze(e,r,t,o,a,i,c,d,l){for(var g=0,f=0,m=c,b=0,_=0,O=0,j=1,L=1,k=1,v=0,T="",E=a,P=i,w=o,p=T;L;)switch(O=v,v=Q()){case 40:if(O!=108&&F(p,m-1)==58){Ge(p+=y(br(v),"&","&\f"),"&\f",Zr(g?d[g-1]:0))!=-1&&(k=-1);break}case 34:case 39:case 91:p+=br(v);break;case 9:case 10:case 13:case 32:p+=Sn(O);break;case 92:p+=En(Ke()-1,7);continue;case 47:switch(ge()){case 42:case 47:Ye(Cn(kn(Q(),Ke()),r,t,l),l);break;default:p+="/"}break;case 123*j:d[g++]=ne(p)*k;case 125*j:case 59:case 0:switch(v){case 0:case 125:L=0;case 59+f:k==-1&&(p=y(p,/\f/g,"")),_>0&&ne(p)-m&&Ye(_>32?ot(p+";",o,t,m-1,l):ot(y(p," ","")+";",o,t,m-2,l),l);break;case 59:p+=";";default:if(Ye(w=nt(p,r,t,g,f,a,d,T,E=[],P=[],m,i),i),v===123)if(f===0)Ze(p,r,w,w,E,i,m,d,P);else switch(b===99&&F(p,3)===110?100:b){case 100:case 108:case 109:case 115:Ze(e,w,w,o&&Ye(nt(e,w,w,0,0,a,d,T,a,E=[],m,P),P),a,P,m,d,o?E:P);break;default:Ze(p,w,w,w,[""],P,0,d,P)}}g=f=_=0,j=k=1,T=p="",m=c;break;case 58:m=1+ne(p),_=O;default:if(j<1){if(v==123)--j;else if(v==125&&j++==0&&_n()==125)continue}switch(p+=mr(v),v*j){case 38:k=f>0?1:(p+="\f",-1);break;case 44:d[g++]=(ne(p)-1)*k,k=1;break;case 64:ge()===45&&(p+=br(Q())),b=ge(),f=m=ne(T=p+=Rn(Ke())),v++;break;case 45:O===45&&ne(p)==2&&(j=0)}}return i}function nt(e,r,t,o,a,i,c,d,l,g,f,m){for(var b=a-1,_=a===0?i:[""],O=et(_),j=0,L=0,k=0;j<o;++j)for(var v=0,T=ke(e,b+1,b=Zr(L=c[j])),E=e;v<O;++v)(E=Qr(L>0?_[v]+" "+T:y(T,/&\f/g,_[v])))&&(l[k++]=E);return Xe(e,r,t,a===0?Ue:d,l,g,f,m)}function Cn(e,r,t,o){return Xe(e,r,t,Kr,mr(bn()),ke(e,2,-2),0,o)}function ot(e,r,t,o,a){return Xe(e,r,t,gr,ke(e,0,o),ke(e,o+1,-1),o,a)}function at(e,r,t){switch(vn(e,r)){case 5103:return R+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return R+e+e;case 4789:return ze+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return R+e+ze+e+D+e+e;case 5936:switch(F(e,r+11)){case 114:return R+e+D+y(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return R+e+D+y(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return R+e+D+y(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return R+e+D+e+e;case 6165:return R+e+D+"flex-"+e+e;case 5187:return R+e+y(e,/(\w+).+(:[^]+)/,R+"box-$1$2"+D+"flex-$1$2")+e;case 5443:return R+e+D+"flex-item-"+y(e,/flex-|-self/g,"")+(ie(e,/flex-|baseline/)?"":D+"grid-row-"+y(e,/flex-|-self/g,""))+e;case 4675:return R+e+D+"flex-line-pack"+y(e,/align-content|flex-|-self/g,"")+e;case 5548:return R+e+D+y(e,"shrink","negative")+e;case 5292:return R+e+D+y(e,"basis","preferred-size")+e;case 6060:return R+"box-"+y(e,"-grow","")+R+e+D+y(e,"grow","positive")+e;case 4554:return R+y(e,/([^-])(transform)/g,"$1"+R+"$2")+e;case 6187:return y(y(y(e,/(zoom-|grab)/,R+"$1"),/(image-set)/,R+"$1"),e,"")+e;case 5495:case 3959:return y(e,/(image-set\([^]*)/,R+"$1$`$1");case 4968:return y(y(e,/(.+:)(flex-)?(.*)/,R+"box-pack:$3"+D+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+R+e+e;case 4200:if(!ie(e,/flex-|baseline/))return D+"grid-column-align"+ke(e,r)+e;break;case 2592:case 3360:return D+y(e,"template-","")+e;case 4384:case 3616:return t&&t.some(function(o,a){return r=a,ie(o.props,/grid-\w+-end/)})?~Ge(e+(t=t[r].value),"span",0)?e:D+y(e,"-start","")+e+D+"grid-row-span:"+(~Ge(t,"span",0)?ie(t,/\d+/):+ie(t,/\d+/)-+ie(e,/\d+/))+";":D+y(e,"-start","")+e;case 4896:case 4128:return t&&t.some(function(o){return ie(o.props,/grid-\w+-start/)})?e:D+y(y(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return y(e,/(.+)-inline(.+)/,R+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(ne(e)-1-r>6)switch(F(e,r+1)){case 109:if(F(e,r+4)!==45)break;case 102:return y(e,/(.+:)(.+)-([^]+)/,"$1"+R+"$2-$3$1"+ze+(F(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~Ge(e,"stretch",0)?at(y(e,"stretch","fill-available"),r,t)+e:e}break;case 5152:case 5920:return y(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,a,i,c,d,l,g){return D+a+":"+i+g+(c?D+a+"-span:"+(d?l:+l-+i)+g:"")+e});case 4949:if(F(e,r+6)===121)return y(e,":",":"+R)+e;break;case 6444:switch(F(e,F(e,14)===45?18:11)){case 120:return y(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+R+(F(e,14)===45?"inline-":"")+"box$3$1"+R+"$2$3$1"+D+"$2box$3")+e;case 100:return y(e,":",":"+D)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return y(e,"scroll-","scroll-snap-")+e}return e}function Qe(e,r){for(var t="",o=0;o<e.length;o++)t+=r(e[o],o,e,r)||"";return t}function On(e,r,t,o){switch(e.type){case mn:if(e.children.length)break;case gn:case gr:return e.return=e.return||e.value;case Kr:return"";case Jr:return e.return=e.value+"{"+Qe(e.children,o)+"}";case Ue:if(!ne(e.value=e.props.join(",")))return""}return ne(t=Qe(e.children,o))?e.return=e.value+"{"+t+"}":""}function Pn(e){var r=et(e);return function(t,o,a,i){for(var c="",d=0;d<r;d++)c+=e[d](t,o,a,i)||"";return c}}function An(e){return function(r){r.root||(r=r.return)&&e(r)}}function jn(e,r,t,o){if(e.length>-1&&!e.return)switch(e.type){case gr:e.return=at(e.value,e.length,t);return;case Jr:return Qe([le(e,{value:y(e.value,"@","@"+R)})],o);case Ue:if(e.length)return yn(t=e.props,function(a){switch(ie(a,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Ce(le(e,{props:[y(a,/:(read-\w+)/,":"+ze+"$1")]})),Ce(le(e,{props:[a]})),vr(e,{props:rt(t,o)});break;case"::placeholder":Ce(le(e,{props:[y(a,/:(plac\w+)/,":"+R+"input-$1")]})),Ce(le(e,{props:[y(a,/:(plac\w+)/,":"+ze+"$1")]})),Ce(le(e,{props:[y(a,/:(plac\w+)/,D+"input-$1")]})),Ce(le(e,{props:[a]})),vr(e,{props:rt(t,o)});break}return""})}}var Dn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},me=typeof process<"u"&&process.env!==void 0&&(process.env.REACT_APP_SC_ATTR||process.env.SC_ATTR)||"data-styled",it="active",st="data-styled-version",er="6.1.11",wr=`/*!sc*/
`,xr=typeof window<"u"&&"HTMLElement"in window,In=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&process.env.REACT_APP_SC_DISABLE_SPEEDY!==""?process.env.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&process.env.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&process.env.SC_DISABLE_SPEEDY!==void 0&&process.env.SC_DISABLE_SPEEDY!==""?process.env.SC_DISABLE_SPEEDY!=="false"&&process.env.SC_DISABLE_SPEEDY:process.env.NODE_ENV!=="production"),ct=/invalid hook call/i,rr=new Set,Nn=function(e,r){if(process.env.NODE_ENV!=="production"){var t=r?' with the id of "'.concat(r,'"'):"",o="The component ".concat(e).concat(t,` has been created dynamically.
`)+`You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`,a=console.error;try{var i=!0;console.error=function(c){for(var d=[],l=1;l<arguments.length;l++)d[l-1]=arguments[l];ct.test(c)?(i=!1,rr.delete(o)):a.apply(void 0,Ee([c],d,!1))},I.useRef(),i&&!rr.has(o)&&(console.warn(o),rr.add(o))}catch(c){ct.test(c.message)&&rr.delete(o)}finally{console.error=a}}},tr=Object.freeze([]),Oe=Object.freeze({});function $n(e,r,t){return t===void 0&&(t=Oe),e.theme!==t.theme&&e.theme||r||t.theme}var Sr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Mn=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,qn=/(^-|-$)/g;function lt(e){return e.replace(Mn,"-").replace(qn,"")}var Fn=/(a)(d)/gi,nr=52,ut=function(e){return String.fromCharCode(e+(e>25?39:97))};function Er(e){var r,t="";for(r=Math.abs(e);r>nr;r=r/nr|0)t=ut(r%nr)+t;return(ut(r%nr)+t).replace(Fn,"$1-$2")}var kr,dt=5381,ve=function(e,r){for(var t=r.length;t;)e=33*e^r.charCodeAt(--t);return e},ft=function(e){return ve(dt,e)};function Ln(e){return Er(ft(e)>>>0)}function pt(e){return process.env.NODE_ENV!=="production"&&typeof e=="string"&&e||e.displayName||e.name||"Component"}function Rr(e){return typeof e=="string"&&(process.env.NODE_ENV==="production"||e.charAt(0)===e.charAt(0).toLowerCase())}var ht=typeof Symbol=="function"&&Symbol.for,gt=ht?Symbol.for("react.memo"):60115,zn=ht?Symbol.for("react.forward_ref"):60112,Yn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Vn={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},mt={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Wn=((kr={})[zn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},kr[gt]=mt,kr);function vt(e){return("type"in(r=e)&&r.type.$$typeof)===gt?mt:"$$typeof"in e?Wn[e.$$typeof]:Yn;var r}var Bn=Object.defineProperty,Un=Object.getOwnPropertyNames,yt=Object.getOwnPropertySymbols,Gn=Object.getOwnPropertyDescriptor,Hn=Object.getPrototypeOf,bt=Object.prototype;function _t(e,r,t){if(typeof r!="string"){if(bt){var o=Hn(r);o&&o!==bt&&_t(e,o,t)}var a=Un(r);yt&&(a=a.concat(yt(r)));for(var i=vt(e),c=vt(r),d=0;d<a.length;++d){var l=a[d];if(!(l in Vn||t&&t[l]||c&&l in c||i&&l in i)){var g=Gn(r,l);try{Bn(e,l,g)}catch{}}}}return e}function Pe(e){return typeof e=="function"}function Tr(e){return typeof e=="object"&&"styledComponentId"in e}function ye(e,r){return e&&r?"".concat(e," ").concat(r):e||r||""}function wt(e,r){if(e.length===0)return"";for(var t=e[0],o=1;o<e.length;o++)t+=e[o];return t}function Ae(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Cr(e,r,t){if(t===void 0&&(t=!1),!t&&!Ae(e)&&!Array.isArray(e))return r;if(Array.isArray(r))for(var o=0;o<r.length;o++)e[o]=Cr(e[o],r[o]);else if(Ae(r))for(var o in r)e[o]=Cr(e[o],r[o]);return e}function Or(e,r){Object.defineProperty(e,"toString",{value:r})}var Xn=process.env.NODE_ENV!=="production"?{1:`Cannot create styled-component for component: %s.

`,2:`Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`,3:`Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`,4:`The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`,5:`The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`,6:`Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`,7:'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',8:`ThemeProvider: Please make your "theme" prop an object.

`,9:"Missing document `<head>`\n\n",10:`Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`,11:`_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`,12:"It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",13:`%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`,14:`ThemeProvider: "theme" prop is required.

`,15:"A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",16:`Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`,17:`CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`,18:"ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`"}:{};function Kn(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var t=e[0],o=[],a=1,i=e.length;a<i;a+=1)o.push(e[a]);return o.forEach(function(c){t=t.replace(/%[a-z]/,c)}),t}function je(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];return process.env.NODE_ENV==="production"?new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):"")):new Error(Kn.apply(void 0,Ee([Xn[e]],r,!1)).trim())}var Jn=function(){function e(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return e.prototype.indexOfGroup=function(r){for(var t=0,o=0;o<r;o++)t+=this.groupSizes[o];return t},e.prototype.insertRules=function(r,t){if(r>=this.groupSizes.length){for(var o=this.groupSizes,a=o.length,i=a;r>=i;)if((i<<=1)<0)throw je(16,"".concat(r));this.groupSizes=new Uint32Array(i),this.groupSizes.set(o),this.length=i;for(var c=a;c<i;c++)this.groupSizes[c]=0}for(var d=this.indexOfGroup(r+1),l=(c=0,t.length);c<l;c++)this.tag.insertRule(d,t[c])&&(this.groupSizes[r]++,d++)},e.prototype.clearGroup=function(r){if(r<this.length){var t=this.groupSizes[r],o=this.indexOfGroup(r),a=o+t;this.groupSizes[r]=0;for(var i=o;i<a;i++)this.tag.deleteRule(o)}},e.prototype.getGroup=function(r){var t="";if(r>=this.length||this.groupSizes[r]===0)return t;for(var o=this.groupSizes[r],a=this.indexOfGroup(r),i=a+o,c=a;c<i;c++)t+="".concat(this.tag.getRule(c)).concat(wr);return t},e}(),Zn=1<<30,or=new Map,ar=new Map,ir=1,sr=function(e){if(or.has(e))return or.get(e);for(;ar.has(ir);)ir++;var r=ir++;if(process.env.NODE_ENV!=="production"&&((0|r)<0||r>Zn))throw je(16,"".concat(r));return or.set(e,r),ar.set(r,e),r},Qn=function(e,r){ir=r+1,or.set(e,r),ar.set(r,e)},eo="style[".concat(me,"][").concat(st,'="').concat(er,'"]'),ro=new RegExp("^".concat(me,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),to=function(e,r,t){for(var o,a=t.split(","),i=0,c=a.length;i<c;i++)(o=a[i])&&e.registerName(r,o)},no=function(e,r){for(var t,o=((t=r.textContent)!==null&&t!==void 0?t:"").split(wr),a=[],i=0,c=o.length;i<c;i++){var d=o[i].trim();if(d){var l=d.match(ro);if(l){var g=0|parseInt(l[1],10),f=l[2];g!==0&&(Qn(f,g),to(e,f,l[3]),e.getTag().insertRules(g,a)),a.length=0}else a.push(d)}}};function oo(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var xt=function(e){var r=document.head,t=e||r,o=document.createElement("style"),a=function(d){var l=Array.from(d.querySelectorAll("style[".concat(me,"]")));return l[l.length-1]}(t),i=a!==void 0?a.nextSibling:null;o.setAttribute(me,it),o.setAttribute(st,er);var c=oo();return c&&o.setAttribute("nonce",c),t.insertBefore(o,i),o},ao=function(){function e(r){this.element=xt(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var o=document.styleSheets,a=0,i=o.length;a<i;a++){var c=o[a];if(c.ownerNode===t)return c}throw je(17)}(this.element),this.length=0}return e.prototype.insertRule=function(r,t){try{return this.sheet.insertRule(t,r),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},e.prototype.getRule=function(r){var t=this.sheet.cssRules[r];return t&&t.cssText?t.cssText:""},e}(),io=function(){function e(r){this.element=xt(r),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(r,t){if(r<=this.length&&r>=0){var o=document.createTextNode(t);return this.element.insertBefore(o,this.nodes[r]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},e.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},e}(),so=function(){function e(r){this.rules=[],this.length=0}return e.prototype.insertRule=function(r,t){return r<=this.length&&(this.rules.splice(r,0,t),this.length++,!0)},e.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},e.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},e}(),St=xr,co={isServer:!xr,useCSSOMInjection:!In},Et=function(){function e(r,t,o){r===void 0&&(r=Oe),t===void 0&&(t={});var a=this;this.options=W(W({},co),r),this.gs=t,this.names=new Map(o),this.server=!!r.isServer,!this.server&&xr&&St&&(St=!1,function(i){for(var c=document.querySelectorAll(eo),d=0,l=c.length;d<l;d++){var g=c[d];g&&g.getAttribute(me)!==it&&(no(i,g),g.parentNode&&g.parentNode.removeChild(g))}}(this)),Or(this,function(){return function(i){for(var c=i.getTag(),d=c.length,l="",g=function(m){var b=function(k){return ar.get(k)}(m);if(b===void 0)return"continue";var _=i.names.get(b),O=c.getGroup(m);if(_===void 0||O.length===0)return"continue";var j="".concat(me,".g").concat(m,'[id="').concat(b,'"]'),L="";_!==void 0&&_.forEach(function(k){k.length>0&&(L+="".concat(k,","))}),l+="".concat(O).concat(j,'{content:"').concat(L,'"}').concat(wr)},f=0;f<d;f++)g(f);return l}(a)})}return e.registerId=function(r){return sr(r)},e.prototype.reconstructWithOptions=function(r,t){return t===void 0&&(t=!0),new e(W(W({},this.options),r),this.gs,t&&this.names||void 0)},e.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(r=function(t){var o=t.useCSSOMInjection,a=t.target;return t.isServer?new so(a):o?new ao(a):new io(a)}(this.options),new Jn(r)));var r},e.prototype.hasNameForId=function(r,t){return this.names.has(r)&&this.names.get(r).has(t)},e.prototype.registerName=function(r,t){if(sr(r),this.names.has(r))this.names.get(r).add(t);else{var o=new Set;o.add(t),this.names.set(r,o)}},e.prototype.insertRules=function(r,t,o){this.registerName(r,t),this.getTag().insertRules(sr(r),o)},e.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},e.prototype.clearRules=function(r){this.getTag().clearGroup(sr(r)),this.clearNames(r)},e.prototype.clearTag=function(){this.tag=void 0},e}(),lo=/&/g,uo=/^\s*\/\/.*$/gm;function kt(e,r){return e.map(function(t){return t.type==="rule"&&(t.value="".concat(r," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(r," ")),t.props=t.props.map(function(o){return"".concat(r," ").concat(o)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=kt(t.children,r)),t})}function fo(e){var r,t,o,a=Oe,i=a.options,c=i===void 0?Oe:i,d=a.plugins,l=d===void 0?tr:d,g=function(b,_,O){return O.startsWith(t)&&O.endsWith(t)&&O.replaceAll(t,"").length>0?".".concat(r):b},f=l.slice();f.push(function(b){b.type===Ue&&b.value.includes("&")&&(b.props[0]=b.props[0].replace(lo,t).replace(o,g))}),c.prefix&&f.push(jn),f.push(On);var m=function(b,_,O,j){_===void 0&&(_=""),O===void 0&&(O=""),j===void 0&&(j="&"),r=j,t=_,o=new RegExp("\\".concat(t,"\\b"),"g");var L=b.replace(uo,""),k=Tn(O||_?"".concat(O," ").concat(_," { ").concat(L," }"):L);c.namespace&&(k=kt(k,c.namespace));var v=[];return Qe(k,Pn(f.concat(An(function(T){return v.push(T)})))),v};return m.hash=l.length?l.reduce(function(b,_){return _.name||je(15),ve(b,_.name)},dt).toString():"",m}var po=new Et,Pr=fo(),Rt=I.createContext({shouldForwardProp:void 0,styleSheet:po,stylis:Pr});Rt.Consumer,I.createContext(void 0);function Tt(){return I.useContext(Rt)}var Ct=function(){function e(r,t){var o=this;this.inject=function(a,i){i===void 0&&(i=Pr);var c=o.name+i.hash;a.hasNameForId(o.id,c)||a.insertRules(o.id,c,i(o.rules,c,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=t,Or(this,function(){throw je(12,String(o.name))})}return e.prototype.getName=function(r){return r===void 0&&(r=Pr),this.name+r.hash},e}(),ho=function(e){return e>="A"&&e<="Z"};function Ot(e){for(var r="",t=0;t<e.length;t++){var o=e[t];if(t===1&&o==="-"&&e[0]==="-")return e;ho(o)?r+="-"+o.toLowerCase():r+=o}return r.startsWith("ms-")?"-"+r:r}var Pt=function(e){return e==null||e===!1||e===""},At=function(e){var r,t,o=[];for(var a in e){var i=e[a];e.hasOwnProperty(a)&&!Pt(i)&&(Array.isArray(i)&&i.isCss||Pe(i)?o.push("".concat(Ot(a),":"),i,";"):Ae(i)?o.push.apply(o,Ee(Ee(["".concat(a," {")],At(i),!1),["}"],!1)):o.push("".concat(Ot(a),": ").concat((r=a,(t=i)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||r in Dn||r.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return o};function be(e,r,t,o){if(Pt(e))return[];if(Tr(e))return[".".concat(e.styledComponentId)];if(Pe(e)){if(!Pe(i=e)||i.prototype&&i.prototype.isReactComponent||!r)return[e];var a=e(r);return process.env.NODE_ENV==="production"||typeof a!="object"||Array.isArray(a)||a instanceof Ct||Ae(a)||a===null||console.error("".concat(pt(e)," is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")),be(a,r,t,o)}var i;return e instanceof Ct?t?(e.inject(t,o),[e.getName(o)]):[e]:Ae(e)?At(e):Array.isArray(e)?Array.prototype.concat.apply(tr,e.map(function(c){return be(c,r,t,o)})):[e.toString()]}function go(e){for(var r=0;r<e.length;r+=1){var t=e[r];if(Pe(t)&&!Tr(t))return!1}return!0}var mo=ft(er),vo=function(){function e(r,t,o){this.rules=r,this.staticRulesId="",this.isStatic=process.env.NODE_ENV==="production"&&(o===void 0||o.isStatic)&&go(r),this.componentId=t,this.baseHash=ve(mo,t),this.baseStyle=o,Et.registerId(t)}return e.prototype.generateAndInjectStyles=function(r,t,o){var a=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,t,o):"";if(this.isStatic&&!o.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))a=ye(a,this.staticRulesId);else{var i=wt(be(this.rules,r,t,o)),c=Er(ve(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,c)){var d=o(i,".".concat(c),void 0,this.componentId);t.insertRules(this.componentId,c,d)}a=ye(a,c),this.staticRulesId=c}else{for(var l=ve(this.baseHash,o.hash),g="",f=0;f<this.rules.length;f++){var m=this.rules[f];if(typeof m=="string")g+=m,process.env.NODE_ENV!=="production"&&(l=ve(l,m));else if(m){var b=wt(be(m,r,t,o));l=ve(l,b+f),g+=b}}if(g){var _=Er(l>>>0);t.hasNameForId(this.componentId,_)||t.insertRules(this.componentId,_,o(g,".".concat(_),void 0,this.componentId)),a=ye(a,_)}}return a},e}(),jt=I.createContext(void 0);jt.Consumer;var Ar={},Dt=new Set;function yo(e,r,t){var o=Tr(e),a=e,i=!Rr(e),c=r.attrs,d=c===void 0?tr:c,l=r.componentId,g=l===void 0?function(E,P){var w=typeof E!="string"?"sc":lt(E);Ar[w]=(Ar[w]||0)+1;var p="".concat(w,"-").concat(Ln(er+w+Ar[w]));return P?"".concat(P,"-").concat(p):p}(r.displayName,r.parentComponentId):l,f=r.displayName,m=f===void 0?function(E){return Rr(E)?"styled.".concat(E):"Styled(".concat(pt(E),")")}(e):f,b=r.displayName&&r.componentId?"".concat(lt(r.displayName),"-").concat(r.componentId):r.componentId||g,_=o&&a.attrs?a.attrs.concat(d).filter(Boolean):d,O=r.shouldForwardProp;if(o&&a.shouldForwardProp){var j=a.shouldForwardProp;if(r.shouldForwardProp){var L=r.shouldForwardProp;O=function(E,P){return j(E,P)&&L(E,P)}}else O=j}var k=new vo(t,b,o?a.componentStyle:void 0);function v(E,P){return function(w,p,G){var H=w.attrs,De=w.componentStyle,_e=w.defaultProps,we=w.foldedComponentIds,q=w.styledComponentId,K=w.target,oe=I.useContext(jt),ae=Tt(),se=w.shouldForwardProp||ae.shouldForwardProp;process.env.NODE_ENV!=="production"&&I.useDebugValue(q);var ue=$n(p,oe,_e)||Oe,J=function(Ne,ce,pe){for(var ee,re=W(W({},ce),{className:void 0,theme:pe}),he=0;he<Ne.length;he+=1){var $e=Pe(ee=Ne[he])?ee(re):ee;for(var te in $e)re[te]=te==="className"?ye(re[te],$e[te]):te==="style"?W(W({},re[te]),$e[te]):$e[te]}return ce.className&&(re.className=ye(re.className,ce.className)),re}(H,p,ue),de=J.as||K,fe={};for(var z in J)J[z]===void 0||z[0]==="$"||z==="as"||z==="theme"&&J.theme===ue||(z==="forwardedAs"?fe.as=J.forwardedAs:se&&!se(z,de)||(fe[z]=J[z],se||process.env.NODE_ENV!=="development"||hn(z)||Dt.has(z)||!Sr.has(de)||(Dt.add(z),console.warn('styled-components: it looks like an unknown prop "'.concat(z,'" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));var Ie=function(Ne,ce){var pe=Tt(),ee=Ne.generateAndInjectStyles(ce,pe.styleSheet,pe.stylis);return process.env.NODE_ENV!=="production"&&I.useDebugValue(ee),ee}(De,J);process.env.NODE_ENV!=="production"&&w.warnTooManyClasses&&w.warnTooManyClasses(Ie);var Ve=ye(we,q);return Ie&&(Ve+=" "+Ie),J.className&&(Ve+=" "+J.className),fe[Rr(de)&&!Sr.has(de)?"class":"className"]=Ve,fe.ref=G,I.createElement(de,fe)}(T,E,P)}v.displayName=m;var T=I.forwardRef(v);return T.attrs=_,T.componentStyle=k,T.displayName=m,T.shouldForwardProp=O,T.foldedComponentIds=o?ye(a.foldedComponentIds,a.styledComponentId):"",T.styledComponentId=b,T.target=o?a.target:e,Object.defineProperty(T,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=o?function(P){for(var w=[],p=1;p<arguments.length;p++)w[p-1]=arguments[p];for(var G=0,H=w;G<H.length;G++)Cr(P,H[G],!0);return P}({},a.defaultProps,E):E}}),process.env.NODE_ENV!=="production"&&(Nn(m,b),T.warnTooManyClasses=function(E,P){var w={},p=!1;return function(G){if(!p&&(w[G]=!0,Object.keys(w).length>=200)){var H=P?' with the id of "'.concat(P,'"'):"";console.warn("Over ".concat(200," classes were generated for component ").concat(E).concat(H,`.
`)+`Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`),p=!0,w={}}}}(m,b)),Or(T,function(){return".".concat(T.styledComponentId)}),i&&_t(T,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),T}function It(e,r){for(var t=[e[0]],o=0,a=r.length;o<a;o+=1)t.push(r[o],e[o+1]);return t}var Nt=function(e){return Object.assign(e,{isCss:!0})};function bo(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];if(Pe(e)||Ae(e))return Nt(be(It(tr,Ee([e],r,!0))));var o=e;return r.length===0&&o.length===1&&typeof o[0]=="string"?be(o):Nt(be(It(o,r)))}function jr(e,r,t){if(t===void 0&&(t=Oe),!r)throw je(1,r);var o=function(a){for(var i=[],c=1;c<arguments.length;c++)i[c-1]=arguments[c];return e(r,t,bo.apply(void 0,Ee([a],i,!1)))};return o.attrs=function(a){return jr(e,r,W(W({},t),{attrs:Array.prototype.concat(t.attrs,a).filter(Boolean)}))},o.withConfig=function(a){return jr(e,r,W(W({},t),a))},o}var $t=function(e){return jr(yo,e)},Mt=$t;Sr.forEach(function(e){Mt[e]=$t(e)}),process.env.NODE_ENV!=="production"&&typeof navigator<"u"&&navigator.product==="ReactNative"&&console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);var cr="__sc-".concat(me,"__");process.env.NODE_ENV!=="production"&&process.env.NODE_ENV!=="test"&&typeof window<"u"&&(window[cr]||(window[cr]=0),window[cr]===1&&console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`),window[cr]+=1);var _o=Mt.div(qt||(qt=un([`
    margin: 0;
    padding: 0;
    background: transparent;
    height: fit-content;
    width: fit-content;
    div, View {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        backdrop-filter: blur(5px);
        box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    h1, Text {

        color: #00000066;
    }

    h2, Text {
        color: #00000066;
    }

    h3, Text {
        color: #00000066;
    }

    h4, Text {
        color: #00000066;
    }

    h5, Text {
        color: #00000066;
    }

    h6, Text {
        color: #00000066;
    }

    p, Text {
        color: #00000066;
    }

    button, Button {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        backdrop-filter: blur(5px);
        box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        color: #00000066;
        transition: all 0.25s ease-in-out;
        user-select: none;

        &:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.05);
            cursor: pointer;
        }

        &:active {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(0.95);
        }
    }

    input[type='text'], input[type='password'] {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        backdrop-filter: blur(5px);
        box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        color: #00000066;
        transition: all 0.25s ease-in-out;
        font-size: 16px;

        &::placeholder {
            color: rgba(128, 128, 128, 0.6);
        }

        &:focus {
            background: rgba(255, 255, 255, 0.4);
        }

        &:hover {
            background: rgba(255, 255, 255, 0.3);
        }

        outline: none;
    }

    input[type='submit'], input[type='button'] {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        backdrop-filter: blur(5px);
        box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        color: #00000066;
        transition: all 0.25s ease-in-out;
        user-select: none;

        &:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.05);
            cursor: pointer;
        }

        &:active {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(0.95);
        }
    }

    input[type="checkbox"] {
        &:hover {
            cursor: pointer;
        }
    }

    a {
        transition: 0.25s ease-in-out;
        text-decoration: underline;
        color: #00000066;

        &:hover {
            color: #33333366;
            text-decoration: underline;
            cursor: pointer;
            transform: scale(1.05);
        }

        &:active {
            color: #33333366;
            transform: scale(0.95);
        }

        &:visited {
            color: #00000088;
        }
    }
`],[`
    margin: 0;
    padding: 0;
    background: transparent;
    height: fit-content;
    width: fit-content;
    div, View {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        backdrop-filter: blur(5px);
        box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    h1, Text {

        color: #00000066;
    }

    h2, Text {
        color: #00000066;
    }

    h3, Text {
        color: #00000066;
    }

    h4, Text {
        color: #00000066;
    }

    h5, Text {
        color: #00000066;
    }

    h6, Text {
        color: #00000066;
    }

    p, Text {
        color: #00000066;
    }

    button, Button {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        backdrop-filter: blur(5px);
        box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        color: #00000066;
        transition: all 0.25s ease-in-out;
        user-select: none;

        &:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.05);
            cursor: pointer;
        }

        &:active {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(0.95);
        }
    }

    input[type='text'], input[type='password'] {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        backdrop-filter: blur(5px);
        box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        color: #00000066;
        transition: all 0.25s ease-in-out;
        font-size: 16px;

        &::placeholder {
            color: rgba(128, 128, 128, 0.6);
        }

        &:focus {
            background: rgba(255, 255, 255, 0.4);
        }

        &:hover {
            background: rgba(255, 255, 255, 0.3);
        }

        outline: none;
    }

    input[type='submit'], input[type='button'] {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        backdrop-filter: blur(5px);
        box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.5);
        border-right: 1px solid rgba(255, 255, 255, 0.2);
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        color: #00000066;
        transition: all 0.25s ease-in-out;
        user-select: none;

        &:hover {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(1.05);
            cursor: pointer;
        }

        &:active {
            background: rgba(255, 255, 255, 0.2);
            transform: scale(0.95);
        }
    }

    input[type="checkbox"] {
        &:hover {
            cursor: pointer;
        }
    }

    a {
        transition: 0.25s ease-in-out;
        text-decoration: underline;
        color: #00000066;

        &:hover {
            color: #33333366;
            text-decoration: underline;
            cursor: pointer;
            transform: scale(1.05);
        }

        &:active {
            color: #33333366;
            transform: scale(0.95);
        }

        &:visited {
            color: #00000088;
        }
    }
`])));function wo(e){var r=e.children;return U.jsx(_o,{children:r})}var qt,xo=Object.assign({"./components/AqColumn/AqColumn.module.less":Zt,"./components/AqDraggable/AqDraggable.module.less":Qt,"./components/AqFlex/AqFlex.module.less":en,"./components/AqModalDialog/AqModalDialog.module.less":rn,"./components/AqRow/AqRow.module.less":tn}),So=Object.assign({"./style.css":nn});V.AqColumn=cn,V.AqDraggable=hr,V.AqFlex=sn,V.AqGlassTheme=wo,V.AqModalDialog=dn,V.AqRow=ln,V.css=So,V.less=xo,Object.defineProperty(V,Symbol.toStringTag,{value:"Module"})});
