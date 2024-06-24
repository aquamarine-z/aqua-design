import we, { useRef as yn, useDebugValue as Jr, createElement as wn, useContext as xn, createRef as Sn, useState as We } from "react";
const kn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
var Pe = function() {
  return Pe = Object.assign || function(r) {
    for (var t, o = 1, a = arguments.length; o < a; o++) {
      t = arguments[o];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, Pe.apply(this, arguments);
};
function Fe(e, r) {
  return Object.defineProperty ? Object.defineProperty(e, "raw", { value: r }) : e.raw = r, e;
}
var kr = { exports: {} }, qe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zr;
function En() {
  if (Zr)
    return qe;
  Zr = 1;
  var e = we, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(d, u, g) {
    var p, m = {}, b = null, w = null;
    g !== void 0 && (b = "" + g), u.key !== void 0 && (b = "" + u.key), u.ref !== void 0 && (w = u.ref);
    for (p in u)
      o.call(u, p) && !i.hasOwnProperty(p) && (m[p] = u[p]);
    if (d && d.defaultProps)
      for (p in u = d.defaultProps, u)
        m[p] === void 0 && (m[p] = u[p]);
    return { $$typeof: r, type: d, key: b, ref: w, props: m, _owner: a.current };
  }
  return qe.Fragment = t, qe.jsx = c, qe.jsxs = c, qe;
}
var Be = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qr;
function _n() {
  return Qr || (Qr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = we, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), d = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), O = Symbol.iterator, j = "@@iterator";
    function M(n) {
      if (n === null || typeof n != "object")
        return null;
      var s = O && n[O] || n[j];
      return typeof s == "function" ? s : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(n) {
      {
        for (var s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), h = 1; h < s; h++)
          l[h - 1] = arguments[h];
        R("error", n, l);
      }
    }
    function R(n, s, l) {
      {
        var h = _.ReactDebugCurrentFrame, C = h.getStackAddendum();
        C !== "" && (s += "%s", l = l.concat([C]));
        var A = l.map(function(k) {
          return String(k);
        });
        A.unshift("Warning: " + s), Function.prototype.apply.call(console[n], console, A);
      }
    }
    var E = !1, P = !1, x = !1, f = !1, q = !1, B;
    B = Symbol.for("react.module.reference");
    function ke(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === o || n === i || q || n === a || n === g || n === p || f || n === w || E || P || x || typeof n == "object" && n !== null && (n.$$typeof === b || n.$$typeof === m || n.$$typeof === c || n.$$typeof === d || n.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === B || n.getModuleId !== void 0));
    }
    function fe(n, s, l) {
      var h = n.displayName;
      if (h)
        return h;
      var C = s.displayName || s.name || "";
      return C !== "" ? l + "(" + C + ")" : l;
    }
    function he(n) {
      return n.displayName || "Context";
    }
    function F(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case o:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case g:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case d:
            var s = n;
            return he(s) + ".Consumer";
          case c:
            var l = n;
            return he(l._context) + ".Provider";
          case u:
            return fe(n, n.render, "ForwardRef");
          case m:
            var h = n.displayName || null;
            return h !== null ? h : F(n.type) || "Memo";
          case b: {
            var C = n, A = C._payload, k = C._init;
            try {
              return F(k(A));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var G = Object.assign, re = 0, te, oe, se, H, ce, ue, L;
    function Ee() {
    }
    Ee.__reactDisabledLog = !0;
    function Le() {
      {
        if (re === 0) {
          te = console.log, oe = console.info, se = console.warn, H = console.error, ce = console.group, ue = console.groupCollapsed, L = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: Ee,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        re++;
      }
    }
    function _e() {
      {
        if (re--, re === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: G({}, n, {
              value: te
            }),
            info: G({}, n, {
              value: oe
            }),
            warn: G({}, n, {
              value: se
            }),
            error: G({}, n, {
              value: H
            }),
            group: G({}, n, {
              value: ce
            }),
            groupCollapsed: G({}, n, {
              value: ue
            }),
            groupEnd: G({}, n, {
              value: L
            })
          });
        }
        re < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ae = _.ReactCurrentDispatcher, le;
    function J(n, s, l) {
      {
        if (le === void 0)
          try {
            throw Error();
          } catch (C) {
            var h = C.stack.trim().match(/\n( *(at )?)/);
            le = h && h[1] || "";
          }
        return `
` + le + n;
      }
    }
    var Z = !1, de;
    {
      var Re = typeof WeakMap == "function" ? WeakMap : Map;
      de = new Re();
    }
    function Q(n, s) {
      if (!n || Z)
        return "";
      {
        var l = de.get(n);
        if (l !== void 0)
          return l;
      }
      var h;
      Z = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var A;
      A = ae.current, ae.current = null, Le();
      try {
        if (s) {
          var k = function() {
            throw Error();
          };
          if (Object.defineProperty(k.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(k, []);
            } catch (Y) {
              h = Y;
            }
            Reflect.construct(n, [], k);
          } else {
            try {
              k.call();
            } catch (Y) {
              h = Y;
            }
            n.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Y) {
            h = Y;
          }
          n();
        }
      } catch (Y) {
        if (Y && h && typeof Y.stack == "string") {
          for (var S = Y.stack.split(`
`), V = h.stack.split(`
`), I = S.length - 1, N = V.length - 1; I >= 1 && N >= 0 && S[I] !== V[N]; )
            N--;
          for (; I >= 1 && N >= 0; I--, N--)
            if (S[I] !== V[N]) {
              if (I !== 1 || N !== 1)
                do
                  if (I--, N--, N < 0 || S[I] !== V[N]) {
                    var X = `
` + S[I].replace(" at new ", " at ");
                    return n.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", n.displayName)), typeof n == "function" && de.set(n, X), X;
                  }
                while (I >= 1 && N >= 0);
              break;
            }
        }
      } finally {
        Z = !1, ae.current = A, _e(), Error.prepareStackTrace = C;
      }
      var Te = n ? n.displayName || n.name : "", ge = Te ? J(Te) : "";
      return typeof n == "function" && de.set(n, ge), ge;
    }
    function Ht(n, s, l) {
      return Q(n, !1);
    }
    function Xt(n) {
      var s = n.prototype;
      return !!(s && s.isReactComponent);
    }
    function He(n, s, l) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Q(n, Xt(n));
      if (typeof n == "string")
        return J(n);
      switch (n) {
        case g:
          return J("Suspense");
        case p:
          return J("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case u:
            return Ht(n.render);
          case m:
            return He(n.type, s, l);
          case b: {
            var h = n, C = h._payload, A = h._init;
            try {
              return He(A(C), s, l);
            } catch {
            }
          }
        }
      return "";
    }
    var Ve = Object.prototype.hasOwnProperty, Mr = {}, zr = _.ReactDebugCurrentFrame;
    function Xe(n) {
      if (n) {
        var s = n._owner, l = He(n.type, n._source, s ? s.type : null);
        zr.setExtraStackFrame(l);
      } else
        zr.setExtraStackFrame(null);
    }
    function Kt(n, s, l, h, C) {
      {
        var A = Function.call.bind(Ve);
        for (var k in n)
          if (A(n, k)) {
            var S = void 0;
            try {
              if (typeof n[k] != "function") {
                var V = Error((h || "React class") + ": " + l + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw V.name = "Invariant Violation", V;
              }
              S = n[k](s, k, h, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (I) {
              S = I;
            }
            S && !(S instanceof Error) && (Xe(C), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", l, k, typeof S), Xe(null)), S instanceof Error && !(S.message in Mr) && (Mr[S.message] = !0, Xe(C), v("Failed %s type: %s", l, S.message), Xe(null));
          }
      }
    }
    var Jt = Array.isArray;
    function fr(n) {
      return Jt(n);
    }
    function Zt(n) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, l = s && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return l;
      }
    }
    function Qt(n) {
      try {
        return Lr(n), !1;
      } catch {
        return !0;
      }
    }
    function Lr(n) {
      return "" + n;
    }
    function Vr(n) {
      if (Qt(n))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Zt(n)), Lr(n);
    }
    var Ye = _.ReactCurrentOwner, en = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Yr, Wr, hr;
    hr = {};
    function rn(n) {
      if (Ve.call(n, "ref")) {
        var s = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function tn(n) {
      if (Ve.call(n, "key")) {
        var s = Object.getOwnPropertyDescriptor(n, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function nn(n, s) {
      if (typeof n.ref == "string" && Ye.current && s && Ye.current.stateNode !== s) {
        var l = F(Ye.current.type);
        hr[l] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(Ye.current.type), n.ref), hr[l] = !0);
      }
    }
    function on(n, s) {
      {
        var l = function() {
          Yr || (Yr = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        l.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function an(n, s) {
      {
        var l = function() {
          Wr || (Wr = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        l.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var sn = function(n, s, l, h, C, A, k) {
      var S = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: n,
        key: s,
        ref: l,
        props: k,
        // Record the component responsible for creating this element.
        _owner: A
      };
      return S._store = {}, Object.defineProperty(S._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(S, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.defineProperty(S, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    };
    function cn(n, s, l, h, C) {
      {
        var A, k = {}, S = null, V = null;
        l !== void 0 && (Vr(l), S = "" + l), tn(s) && (Vr(s.key), S = "" + s.key), rn(s) && (V = s.ref, nn(s, C));
        for (A in s)
          Ve.call(s, A) && !en.hasOwnProperty(A) && (k[A] = s[A]);
        if (n && n.defaultProps) {
          var I = n.defaultProps;
          for (A in I)
            k[A] === void 0 && (k[A] = I[A]);
        }
        if (S || V) {
          var N = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          S && on(k, N), V && an(k, N);
        }
        return sn(n, S, V, C, h, Ye.current, k);
      }
    }
    var gr = _.ReactCurrentOwner, qr = _.ReactDebugCurrentFrame;
    function Ce(n) {
      if (n) {
        var s = n._owner, l = He(n.type, n._source, s ? s.type : null);
        qr.setExtraStackFrame(l);
      } else
        qr.setExtraStackFrame(null);
    }
    var mr;
    mr = !1;
    function vr(n) {
      return typeof n == "object" && n !== null && n.$$typeof === r;
    }
    function Br() {
      {
        if (gr.current) {
          var n = F(gr.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function un(n) {
      return "";
    }
    var Ur = {};
    function ln(n) {
      {
        var s = Br();
        if (!s) {
          var l = typeof n == "string" ? n : n.displayName || n.name;
          l && (s = `

Check the top-level render call using <` + l + ">.");
        }
        return s;
      }
    }
    function Gr(n, s) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var l = ln(s);
        if (Ur[l])
          return;
        Ur[l] = !0;
        var h = "";
        n && n._owner && n._owner !== gr.current && (h = " It was passed a child from " + F(n._owner.type) + "."), Ce(n), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, h), Ce(null);
      }
    }
    function Hr(n, s) {
      {
        if (typeof n != "object")
          return;
        if (fr(n))
          for (var l = 0; l < n.length; l++) {
            var h = n[l];
            vr(h) && Gr(h, s);
          }
        else if (vr(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var C = M(n);
          if (typeof C == "function" && C !== n.entries)
            for (var A = C.call(n), k; !(k = A.next()).done; )
              vr(k.value) && Gr(k.value, s);
        }
      }
    }
    function dn(n) {
      {
        var s = n.type;
        if (s == null || typeof s == "string")
          return;
        var l;
        if (typeof s == "function")
          l = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === m))
          l = s.propTypes;
        else
          return;
        if (l) {
          var h = F(s);
          Kt(l, n.props, "prop", h, n);
        } else if (s.PropTypes !== void 0 && !mr) {
          mr = !0;
          var C = F(s);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pn(n) {
      {
        for (var s = Object.keys(n.props), l = 0; l < s.length; l++) {
          var h = s[l];
          if (h !== "children" && h !== "key") {
            Ce(n), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), Ce(null);
            break;
          }
        }
        n.ref !== null && (Ce(n), v("Invalid attribute `ref` supplied to `React.Fragment`."), Ce(null));
      }
    }
    var Xr = {};
    function Kr(n, s, l, h, C, A) {
      {
        var k = ke(n);
        if (!k) {
          var S = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var V = un();
          V ? S += V : S += Br();
          var I;
          n === null ? I = "null" : fr(n) ? I = "array" : n !== void 0 && n.$$typeof === r ? (I = "<" + (F(n.type) || "Unknown") + " />", S = " Did you accidentally export a JSX literal instead of a component?") : I = typeof n, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", I, S);
        }
        var N = cn(n, s, l, C, A);
        if (N == null)
          return N;
        if (k) {
          var X = s.children;
          if (X !== void 0)
            if (h)
              if (fr(X)) {
                for (var Te = 0; Te < X.length; Te++)
                  Hr(X[Te], n);
                Object.freeze && Object.freeze(X);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Hr(X, n);
        }
        if (Ve.call(s, "key")) {
          var ge = F(n), Y = Object.keys(s).filter(function(bn) {
            return bn !== "key";
          }), br = Y.length > 0 ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Xr[ge + br]) {
            var vn = Y.length > 0 ? "{" + Y.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, br, ge, vn, ge), Xr[ge + br] = !0;
          }
        }
        return n === o ? pn(N) : dn(N), N;
      }
    }
    function fn(n, s, l) {
      return Kr(n, s, l, !0);
    }
    function hn(n, s, l) {
      return Kr(n, s, l, !1);
    }
    var gn = hn, mn = fn;
    Be.Fragment = o, Be.jsx = gn, Be.jsxs = mn;
  }()), Be;
}
process.env.NODE_ENV === "production" ? kr.exports = En() : kr.exports = _n();
var U = kr.exports, W = function() {
  return W = Object.assign || function(r) {
    for (var t, o = 1, a = arguments.length; o < a; o++) {
      t = arguments[o];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, W.apply(this, arguments);
};
function Ae(e, r, t) {
  if (t || arguments.length === 2)
    for (var o = 0, a = r.length, i; o < a; o++)
      (i || !(o in r)) && (i || (i = Array.prototype.slice.call(r, 0, o)), i[o] = r[o]);
  return e.concat(i || Array.prototype.slice.call(r));
}
function Rn(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Cn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Tn = /* @__PURE__ */ Rn(
  function(e) {
    return Cn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), D = "-ms-", Ge = "-moz-", T = "-webkit-", kt = "comm", sr = "rule", jr = "decl", On = "@import", Et = "@keyframes", Pn = "@layer", _t = Math.abs, Dr = String.fromCharCode, Er = Object.assign;
function An(e, r) {
  return z(e, 0) ^ 45 ? (((r << 2 ^ z(e, 0)) << 2 ^ z(e, 1)) << 2 ^ z(e, 2)) << 2 ^ z(e, 3) : 0;
}
function Rt(e) {
  return e.trim();
}
function ie(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function y(e, r, t) {
  return e.replace(r, t);
}
function er(e, r, t) {
  return e.indexOf(r, t);
}
function z(e, r) {
  return e.charCodeAt(r) | 0;
}
function je(e, r, t) {
  return e.slice(r, t);
}
function ne(e) {
  return e.length;
}
function Ct(e) {
  return e.length;
}
function Ue(e, r) {
  return r.push(e), e;
}
function jn(e, r) {
  return e.map(r).join("");
}
function et(e, r) {
  return e.filter(function(t) {
    return !ie(t, r);
  });
}
var cr = 1, De = 1, Tt = 0, K = 0, $ = 0, Me = "";
function ur(e, r, t, o, a, i, c, d) {
  return { value: e, root: r, parent: t, type: o, props: a, children: i, line: cr, column: De, length: c, return: "", siblings: d };
}
function pe(e, r) {
  return Er(ur("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, r);
}
function Oe(e) {
  for (; e.root; )
    e = pe(e.root, { children: [e] });
  Ue(e, e.siblings);
}
function Dn() {
  return $;
}
function In() {
  return $ = K > 0 ? z(Me, --K) : 0, De--, $ === 10 && (De = 1, cr--), $;
}
function ee() {
  return $ = K < Tt ? z(Me, K++) : 0, De++, $ === 10 && (De = 1, cr++), $;
}
function be() {
  return z(Me, K);
}
function rr() {
  return K;
}
function lr(e, r) {
  return je(Me, e, r);
}
function _r(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Nn(e) {
  return cr = De = 1, Tt = ne(Me = e), K = 0, [];
}
function $n(e) {
  return Me = "", e;
}
function yr(e) {
  return Rt(lr(K - 1, Rr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Fn(e) {
  for (; ($ = be()) && $ < 33; )
    ee();
  return _r(e) > 2 || _r($) > 3 ? "" : " ";
}
function Mn(e, r) {
  for (; --r && ee() && !($ < 48 || $ > 102 || $ > 57 && $ < 65 || $ > 70 && $ < 97); )
    ;
  return lr(e, rr() + (r < 6 && be() == 32 && ee() == 32));
}
function Rr(e) {
  for (; ee(); )
    switch ($) {
      case e:
        return K;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Rr($);
        break;
      case 40:
        e === 41 && Rr(e);
        break;
      case 92:
        ee();
        break;
    }
  return K;
}
function zn(e, r) {
  for (; ee() && e + $ !== 57; )
    if (e + $ === 84 && be() === 47)
      break;
  return "/*" + lr(r, K - 1) + "*" + Dr(e === 47 ? e : ee());
}
function Ln(e) {
  for (; !_r(be()); )
    ee();
  return lr(e, K);
}
function Vn(e) {
  return $n(tr("", null, null, null, [""], e = Nn(e), 0, [0], e));
}
function tr(e, r, t, o, a, i, c, d, u) {
  for (var g = 0, p = 0, m = c, b = 0, w = 0, O = 0, j = 1, M = 1, _ = 1, v = 0, R = "", E = a, P = i, x = o, f = R; M; )
    switch (O = v, v = ee()) {
      case 40:
        if (O != 108 && z(f, m - 1) == 58) {
          er(f += y(yr(v), "&", "&\f"), "&\f", _t(g ? d[g - 1] : 0)) != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        f += yr(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        f += Fn(O);
        break;
      case 92:
        f += Mn(rr() - 1, 7);
        continue;
      case 47:
        switch (be()) {
          case 42:
          case 47:
            Ue(Yn(zn(ee(), rr()), r, t, u), u);
            break;
          default:
            f += "/";
        }
        break;
      case 123 * j:
        d[g++] = ne(f) * _;
      case 125 * j:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            M = 0;
          case 59 + p:
            _ == -1 && (f = y(f, /\f/g, "")), w > 0 && ne(f) - m && Ue(w > 32 ? tt(f + ";", o, t, m - 1, u) : tt(y(f, " ", "") + ";", o, t, m - 2, u), u);
            break;
          case 59:
            f += ";";
          default:
            if (Ue(x = rt(f, r, t, g, p, a, d, R, E = [], P = [], m, i), i), v === 123)
              if (p === 0)
                tr(f, r, x, x, E, i, m, d, P);
              else
                switch (b === 99 && z(f, 3) === 110 ? 100 : b) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    tr(e, x, x, o && Ue(rt(e, x, x, 0, 0, a, d, R, a, E = [], m, P), P), a, P, m, d, o ? E : P);
                    break;
                  default:
                    tr(f, x, x, x, [""], P, 0, d, P);
                }
        }
        g = p = w = 0, j = _ = 1, R = f = "", m = c;
        break;
      case 58:
        m = 1 + ne(f), w = O;
      default:
        if (j < 1) {
          if (v == 123)
            --j;
          else if (v == 125 && j++ == 0 && In() == 125)
            continue;
        }
        switch (f += Dr(v), v * j) {
          case 38:
            _ = p > 0 ? 1 : (f += "\f", -1);
            break;
          case 44:
            d[g++] = (ne(f) - 1) * _, _ = 1;
            break;
          case 64:
            be() === 45 && (f += yr(ee())), b = be(), p = m = ne(R = f += Ln(rr())), v++;
            break;
          case 45:
            O === 45 && ne(f) == 2 && (j = 0);
        }
    }
  return i;
}
function rt(e, r, t, o, a, i, c, d, u, g, p, m) {
  for (var b = a - 1, w = a === 0 ? i : [""], O = Ct(w), j = 0, M = 0, _ = 0; j < o; ++j)
    for (var v = 0, R = je(e, b + 1, b = _t(M = c[j])), E = e; v < O; ++v)
      (E = Rt(M > 0 ? w[v] + " " + R : y(R, /&\f/g, w[v]))) && (u[_++] = E);
  return ur(e, r, t, a === 0 ? sr : d, u, g, p, m);
}
function Yn(e, r, t, o) {
  return ur(e, r, t, kt, Dr(Dn()), je(e, 2, -2), 0, o);
}
function tt(e, r, t, o, a) {
  return ur(e, r, t, jr, je(e, 0, o), je(e, o + 1, -1), o, a);
}
function Ot(e, r, t) {
  switch (An(e, r)) {
    case 5103:
      return T + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return T + e + e;
    case 4789:
      return Ge + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return T + e + Ge + e + D + e + e;
    case 5936:
      switch (z(e, r + 11)) {
        case 114:
          return T + e + D + y(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return T + e + D + y(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return T + e + D + y(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return T + e + D + e + e;
    case 6165:
      return T + e + D + "flex-" + e + e;
    case 5187:
      return T + e + y(e, /(\w+).+(:[^]+)/, T + "box-$1$2" + D + "flex-$1$2") + e;
    case 5443:
      return T + e + D + "flex-item-" + y(e, /flex-|-self/g, "") + (ie(e, /flex-|baseline/) ? "" : D + "grid-row-" + y(e, /flex-|-self/g, "")) + e;
    case 4675:
      return T + e + D + "flex-line-pack" + y(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return T + e + D + y(e, "shrink", "negative") + e;
    case 5292:
      return T + e + D + y(e, "basis", "preferred-size") + e;
    case 6060:
      return T + "box-" + y(e, "-grow", "") + T + e + D + y(e, "grow", "positive") + e;
    case 4554:
      return T + y(e, /([^-])(transform)/g, "$1" + T + "$2") + e;
    case 6187:
      return y(y(y(e, /(zoom-|grab)/, T + "$1"), /(image-set)/, T + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return y(e, /(image-set\([^]*)/, T + "$1$`$1");
    case 4968:
      return y(y(e, /(.+:)(flex-)?(.*)/, T + "box-pack:$3" + D + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + T + e + e;
    case 4200:
      if (!ie(e, /flex-|baseline/))
        return D + "grid-column-align" + je(e, r) + e;
      break;
    case 2592:
    case 3360:
      return D + y(e, "template-", "") + e;
    case 4384:
    case 3616:
      return t && t.some(function(o, a) {
        return r = a, ie(o.props, /grid-\w+-end/);
      }) ? ~er(e + (t = t[r].value), "span", 0) ? e : D + y(e, "-start", "") + e + D + "grid-row-span:" + (~er(t, "span", 0) ? ie(t, /\d+/) : +ie(t, /\d+/) - +ie(e, /\d+/)) + ";" : D + y(e, "-start", "") + e;
    case 4896:
    case 4128:
      return t && t.some(function(o) {
        return ie(o.props, /grid-\w+-start/);
      }) ? e : D + y(y(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return y(e, /(.+)-inline(.+)/, T + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ne(e) - 1 - r > 6)
        switch (z(e, r + 1)) {
          case 109:
            if (z(e, r + 4) !== 45)
              break;
          case 102:
            return y(e, /(.+:)(.+)-([^]+)/, "$1" + T + "$2-$3$1" + Ge + (z(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~er(e, "stretch", 0) ? Ot(y(e, "stretch", "fill-available"), r, t) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return y(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(o, a, i, c, d, u, g) {
        return D + a + ":" + i + g + (c ? D + a + "-span:" + (d ? u : +u - +i) + g : "") + e;
      });
    case 4949:
      if (z(e, r + 6) === 121)
        return y(e, ":", ":" + T) + e;
      break;
    case 6444:
      switch (z(e, z(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return y(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + T + (z(e, 14) === 45 ? "inline-" : "") + "box$3$1" + T + "$2$3$1" + D + "$2box$3") + e;
        case 100:
          return y(e, ":", ":" + D) + e;
      }
      break;
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return y(e, "scroll-", "scroll-snap-") + e;
  }
  return e;
}
function ar(e, r) {
  for (var t = "", o = 0; o < e.length; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function Wn(e, r, t, o) {
  switch (e.type) {
    case Pn:
      if (e.children.length)
        break;
    case On:
    case jr:
      return e.return = e.return || e.value;
    case kt:
      return "";
    case Et:
      return e.return = e.value + "{" + ar(e.children, o) + "}";
    case sr:
      if (!ne(e.value = e.props.join(",")))
        return "";
  }
  return ne(t = ar(e.children, o)) ? e.return = e.value + "{" + t + "}" : "";
}
function qn(e) {
  var r = Ct(e);
  return function(t, o, a, i) {
    for (var c = "", d = 0; d < r; d++)
      c += e[d](t, o, a, i) || "";
    return c;
  };
}
function Bn(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function Un(e, r, t, o) {
  if (e.length > -1 && !e.return)
    switch (e.type) {
      case jr:
        e.return = Ot(e.value, e.length, t);
        return;
      case Et:
        return ar([pe(e, { value: y(e.value, "@", "@" + T) })], o);
      case sr:
        if (e.length)
          return jn(t = e.props, function(a) {
            switch (ie(a, o = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Oe(pe(e, { props: [y(a, /:(read-\w+)/, ":" + Ge + "$1")] })), Oe(pe(e, { props: [a] })), Er(e, { props: et(t, o) });
                break;
              case "::placeholder":
                Oe(pe(e, { props: [y(a, /:(plac\w+)/, ":" + T + "input-$1")] })), Oe(pe(e, { props: [y(a, /:(plac\w+)/, ":" + Ge + "$1")] })), Oe(pe(e, { props: [y(a, /:(plac\w+)/, D + "input-$1")] })), Oe(pe(e, { props: [a] })), Er(e, { props: et(t, o) });
                break;
            }
            return "";
          });
    }
}
var Gn = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, xe = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Pt = "active", At = "data-styled-version", dr = "6.1.11", Ir = `/*!sc*/
`, Nr = typeof window < "u" && "HTMLElement" in window, Hn = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), nt = /invalid hook call/i, Ke = /* @__PURE__ */ new Set(), Xn = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = r ? ' with the id of "'.concat(r, '"') : "", o = "The component ".concat(e).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, a = console.error;
    try {
      var i = !0;
      console.error = function(c) {
        for (var d = [], u = 1; u < arguments.length; u++)
          d[u - 1] = arguments[u];
        nt.test(c) ? (i = !1, Ke.delete(o)) : a.apply(void 0, Ae([c], d, !1));
      }, yn(), i && !Ke.has(o) && (console.warn(o), Ke.add(o));
    } catch (c) {
      nt.test(c.message) && Ke.delete(o);
    } finally {
      console.error = a;
    }
  }
}, pr = Object.freeze([]), Ie = Object.freeze({});
function Kn(e, r, t) {
  return t === void 0 && (t = Ie), e.theme !== t.theme && e.theme || r || t.theme;
}
var Cr = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), Jn = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, Zn = /(^-|-$)/g;
function ot(e) {
  return e.replace(Jn, "-").replace(Zn, "");
}
var Qn = /(a)(d)/gi, Je = 52, at = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Tr(e) {
  var r, t = "";
  for (r = Math.abs(e); r > Je; r = r / Je | 0)
    t = at(r % Je) + t;
  return (at(r % Je) + t).replace(Qn, "$1-$2");
}
var wr, jt = 5381, me = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Dt = function(e) {
  return me(jt, e);
};
function eo(e) {
  return Tr(Dt(e) >>> 0);
}
function It(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function xr(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Nt = typeof Symbol == "function" && Symbol.for, $t = Nt ? Symbol.for("react.memo") : 60115, ro = Nt ? Symbol.for("react.forward_ref") : 60112, to = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, no = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, Ft = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, oo = ((wr = {})[ro] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, wr[$t] = Ft, wr);
function it(e) {
  return ("type" in (r = e) && r.type.$$typeof) === $t ? Ft : "$$typeof" in e ? oo[e.$$typeof] : to;
  var r;
}
var ao = Object.defineProperty, io = Object.getOwnPropertyNames, st = Object.getOwnPropertySymbols, so = Object.getOwnPropertyDescriptor, co = Object.getPrototypeOf, ct = Object.prototype;
function Mt(e, r, t) {
  if (typeof r != "string") {
    if (ct) {
      var o = co(r);
      o && o !== ct && Mt(e, o, t);
    }
    var a = io(r);
    st && (a = a.concat(st(r)));
    for (var i = it(e), c = it(r), d = 0; d < a.length; ++d) {
      var u = a[d];
      if (!(u in no || t && t[u] || c && u in c || i && u in i)) {
        var g = so(r, u);
        try {
          ao(e, u, g);
        } catch {
        }
      }
    }
  }
  return e;
}
function Ne(e) {
  return typeof e == "function";
}
function $r(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function ve(e, r) {
  return e && r ? "".concat(e, " ").concat(r) : e || r || "";
}
function ut(e, r) {
  if (e.length === 0)
    return "";
  for (var t = e[0], o = 1; o < e.length; o++)
    t += e[o];
  return t;
}
function $e(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Or(e, r, t) {
  if (t === void 0 && (t = !1), !t && !$e(e) && !Array.isArray(e))
    return r;
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      e[o] = Or(e[o], r[o]);
  else if ($e(r))
    for (var o in r)
      e[o] = Or(e[o], r[o]);
  return e;
}
function Fr(e, r) {
  Object.defineProperty(e, "toString", { value: r });
}
var uo = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
`, 18: "ThemeProvider: Please make sure your useTheme hook is within a `<ThemeProvider>`" } : {};
function lo() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  for (var t = e[0], o = [], a = 1, i = e.length; a < i; a += 1)
    o.push(e[a]);
  return o.forEach(function(c) {
    t = t.replace(/%[a-z]/, c);
  }), t;
}
function ze(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(r.length > 0 ? " Args: ".concat(r.join(", ")) : "")) : new Error(lo.apply(void 0, Ae([uo[e]], r, !1)).trim());
}
var po = function() {
  function e(r) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = r;
  }
  return e.prototype.indexOfGroup = function(r) {
    for (var t = 0, o = 0; o < r; o++)
      t += this.groupSizes[o];
    return t;
  }, e.prototype.insertRules = function(r, t) {
    if (r >= this.groupSizes.length) {
      for (var o = this.groupSizes, a = o.length, i = a; r >= i; )
        if ((i <<= 1) < 0)
          throw ze(16, "".concat(r));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var c = a; c < i; c++)
        this.groupSizes[c] = 0;
    }
    for (var d = this.indexOfGroup(r + 1), u = (c = 0, t.length); c < u; c++)
      this.tag.insertRule(d, t[c]) && (this.groupSizes[r]++, d++);
  }, e.prototype.clearGroup = function(r) {
    if (r < this.length) {
      var t = this.groupSizes[r], o = this.indexOfGroup(r), a = o + t;
      this.groupSizes[r] = 0;
      for (var i = o; i < a; i++)
        this.tag.deleteRule(o);
    }
  }, e.prototype.getGroup = function(r) {
    var t = "";
    if (r >= this.length || this.groupSizes[r] === 0)
      return t;
    for (var o = this.groupSizes[r], a = this.indexOfGroup(r), i = a + o, c = a; c < i; c++)
      t += "".concat(this.tag.getRule(c)).concat(Ir);
    return t;
  }, e;
}(), fo = 1 << 30, nr = /* @__PURE__ */ new Map(), ir = /* @__PURE__ */ new Map(), or = 1, Ze = function(e) {
  if (nr.has(e))
    return nr.get(e);
  for (; ir.has(or); )
    or++;
  var r = or++;
  if (process.env.NODE_ENV !== "production" && ((0 | r) < 0 || r > fo))
    throw ze(16, "".concat(r));
  return nr.set(e, r), ir.set(r, e), r;
}, ho = function(e, r) {
  or = r + 1, nr.set(e, r), ir.set(r, e);
}, go = "style[".concat(xe, "][").concat(At, '="').concat(dr, '"]'), mo = new RegExp("^".concat(xe, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), vo = function(e, r, t) {
  for (var o, a = t.split(","), i = 0, c = a.length; i < c; i++)
    (o = a[i]) && e.registerName(r, o);
}, bo = function(e, r) {
  for (var t, o = ((t = r.textContent) !== null && t !== void 0 ? t : "").split(Ir), a = [], i = 0, c = o.length; i < c; i++) {
    var d = o[i].trim();
    if (d) {
      var u = d.match(mo);
      if (u) {
        var g = 0 | parseInt(u[1], 10), p = u[2];
        g !== 0 && (ho(p, g), vo(e, p, u[3]), e.getTag().insertRules(g, a)), a.length = 0;
      } else
        a.push(d);
    }
  }
};
function yo() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var zt = function(e) {
  var r = document.head, t = e || r, o = document.createElement("style"), a = function(d) {
    var u = Array.from(d.querySelectorAll("style[".concat(xe, "]")));
    return u[u.length - 1];
  }(t), i = a !== void 0 ? a.nextSibling : null;
  o.setAttribute(xe, Pt), o.setAttribute(At, dr);
  var c = yo();
  return c && o.setAttribute("nonce", c), t.insertBefore(o, i), o;
}, wo = function() {
  function e(r) {
    this.element = zt(r), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet)
        return t.sheet;
      for (var o = document.styleSheets, a = 0, i = o.length; a < i; a++) {
        var c = o[a];
        if (c.ownerNode === t)
          return c;
      }
      throw ze(17);
    }(this.element), this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    try {
      return this.sheet.insertRule(t, r), this.length++, !0;
    } catch {
      return !1;
    }
  }, e.prototype.deleteRule = function(r) {
    this.sheet.deleteRule(r), this.length--;
  }, e.prototype.getRule = function(r) {
    var t = this.sheet.cssRules[r];
    return t && t.cssText ? t.cssText : "";
  }, e;
}(), xo = function() {
  function e(r) {
    this.element = zt(r), this.nodes = this.element.childNodes, this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    if (r <= this.length && r >= 0) {
      var o = document.createTextNode(t);
      return this.element.insertBefore(o, this.nodes[r] || null), this.length++, !0;
    }
    return !1;
  }, e.prototype.deleteRule = function(r) {
    this.element.removeChild(this.nodes[r]), this.length--;
  }, e.prototype.getRule = function(r) {
    return r < this.length ? this.nodes[r].textContent : "";
  }, e;
}(), So = function() {
  function e(r) {
    this.rules = [], this.length = 0;
  }
  return e.prototype.insertRule = function(r, t) {
    return r <= this.length && (this.rules.splice(r, 0, t), this.length++, !0);
  }, e.prototype.deleteRule = function(r) {
    this.rules.splice(r, 1), this.length--;
  }, e.prototype.getRule = function(r) {
    return r < this.length ? this.rules[r] : "";
  }, e;
}(), lt = Nr, ko = { isServer: !Nr, useCSSOMInjection: !Hn }, Lt = function() {
  function e(r, t, o) {
    r === void 0 && (r = Ie), t === void 0 && (t = {});
    var a = this;
    this.options = W(W({}, ko), r), this.gs = t, this.names = new Map(o), this.server = !!r.isServer, !this.server && Nr && lt && (lt = !1, function(i) {
      for (var c = document.querySelectorAll(go), d = 0, u = c.length; d < u; d++) {
        var g = c[d];
        g && g.getAttribute(xe) !== Pt && (bo(i, g), g.parentNode && g.parentNode.removeChild(g));
      }
    }(this)), Fr(this, function() {
      return function(i) {
        for (var c = i.getTag(), d = c.length, u = "", g = function(m) {
          var b = function(_) {
            return ir.get(_);
          }(m);
          if (b === void 0)
            return "continue";
          var w = i.names.get(b), O = c.getGroup(m);
          if (w === void 0 || O.length === 0)
            return "continue";
          var j = "".concat(xe, ".g").concat(m, '[id="').concat(b, '"]'), M = "";
          w !== void 0 && w.forEach(function(_) {
            _.length > 0 && (M += "".concat(_, ","));
          }), u += "".concat(O).concat(j, '{content:"').concat(M, '"}').concat(Ir);
        }, p = 0; p < d; p++)
          g(p);
        return u;
      }(a);
    });
  }
  return e.registerId = function(r) {
    return Ze(r);
  }, e.prototype.reconstructWithOptions = function(r, t) {
    return t === void 0 && (t = !0), new e(W(W({}, this.options), r), this.gs, t && this.names || void 0);
  }, e.prototype.allocateGSInstance = function(r) {
    return this.gs[r] = (this.gs[r] || 0) + 1;
  }, e.prototype.getTag = function() {
    return this.tag || (this.tag = (r = function(t) {
      var o = t.useCSSOMInjection, a = t.target;
      return t.isServer ? new So(a) : o ? new wo(a) : new xo(a);
    }(this.options), new po(r)));
    var r;
  }, e.prototype.hasNameForId = function(r, t) {
    return this.names.has(r) && this.names.get(r).has(t);
  }, e.prototype.registerName = function(r, t) {
    if (Ze(r), this.names.has(r))
      this.names.get(r).add(t);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(t), this.names.set(r, o);
    }
  }, e.prototype.insertRules = function(r, t, o) {
    this.registerName(r, t), this.getTag().insertRules(Ze(r), o);
  }, e.prototype.clearNames = function(r) {
    this.names.has(r) && this.names.get(r).clear();
  }, e.prototype.clearRules = function(r) {
    this.getTag().clearGroup(Ze(r)), this.clearNames(r);
  }, e.prototype.clearTag = function() {
    this.tag = void 0;
  }, e;
}(), Eo = /&/g, _o = /^\s*\/\/.*$/gm;
function Vt(e, r) {
  return e.map(function(t) {
    return t.type === "rule" && (t.value = "".concat(r, " ").concat(t.value), t.value = t.value.replaceAll(",", ",".concat(r, " ")), t.props = t.props.map(function(o) {
      return "".concat(r, " ").concat(o);
    })), Array.isArray(t.children) && t.type !== "@keyframes" && (t.children = Vt(t.children, r)), t;
  });
}
function Ro(e) {
  var r, t, o, a = Ie, i = a.options, c = i === void 0 ? Ie : i, d = a.plugins, u = d === void 0 ? pr : d, g = function(b, w, O) {
    return O.startsWith(t) && O.endsWith(t) && O.replaceAll(t, "").length > 0 ? ".".concat(r) : b;
  }, p = u.slice();
  p.push(function(b) {
    b.type === sr && b.value.includes("&") && (b.props[0] = b.props[0].replace(Eo, t).replace(o, g));
  }), c.prefix && p.push(Un), p.push(Wn);
  var m = function(b, w, O, j) {
    w === void 0 && (w = ""), O === void 0 && (O = ""), j === void 0 && (j = "&"), r = j, t = w, o = new RegExp("\\".concat(t, "\\b"), "g");
    var M = b.replace(_o, ""), _ = Vn(O || w ? "".concat(O, " ").concat(w, " { ").concat(M, " }") : M);
    c.namespace && (_ = Vt(_, c.namespace));
    var v = [];
    return ar(_, qn(p.concat(Bn(function(R) {
      return v.push(R);
    })))), v;
  };
  return m.hash = u.length ? u.reduce(function(b, w) {
    return w.name || ze(15), me(b, w.name);
  }, jt).toString() : "", m;
}
var Co = new Lt(), Pr = Ro(), Yt = we.createContext({ shouldForwardProp: void 0, styleSheet: Co, stylis: Pr });
Yt.Consumer;
we.createContext(void 0);
function dt() {
  return xn(Yt);
}
var pt = function() {
  function e(r, t) {
    var o = this;
    this.inject = function(a, i) {
      i === void 0 && (i = Pr);
      var c = o.name + i.hash;
      a.hasNameForId(o.id, c) || a.insertRules(o.id, c, i(o.rules, c, "@keyframes"));
    }, this.name = r, this.id = "sc-keyframes-".concat(r), this.rules = t, Fr(this, function() {
      throw ze(12, String(o.name));
    });
  }
  return e.prototype.getName = function(r) {
    return r === void 0 && (r = Pr), this.name + r.hash;
  }, e;
}(), To = function(e) {
  return e >= "A" && e <= "Z";
};
function ft(e) {
  for (var r = "", t = 0; t < e.length; t++) {
    var o = e[t];
    if (t === 1 && o === "-" && e[0] === "-")
      return e;
    To(o) ? r += "-" + o.toLowerCase() : r += o;
  }
  return r.startsWith("ms-") ? "-" + r : r;
}
var Wt = function(e) {
  return e == null || e === !1 || e === "";
}, qt = function(e) {
  var r, t, o = [];
  for (var a in e) {
    var i = e[a];
    e.hasOwnProperty(a) && !Wt(i) && (Array.isArray(i) && i.isCss || Ne(i) ? o.push("".concat(ft(a), ":"), i, ";") : $e(i) ? o.push.apply(o, Ae(Ae(["".concat(a, " {")], qt(i), !1), ["}"], !1)) : o.push("".concat(ft(a), ": ").concat((r = a, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || r in Gn || r.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return o;
};
function ye(e, r, t, o) {
  if (Wt(e))
    return [];
  if ($r(e))
    return [".".concat(e.styledComponentId)];
  if (Ne(e)) {
    if (!Ne(i = e) || i.prototype && i.prototype.isReactComponent || !r)
      return [e];
    var a = e(r);
    return process.env.NODE_ENV === "production" || typeof a != "object" || Array.isArray(a) || a instanceof pt || $e(a) || a === null || console.error("".concat(It(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), ye(a, r, t, o);
  }
  var i;
  return e instanceof pt ? t ? (e.inject(t, o), [e.getName(o)]) : [e] : $e(e) ? qt(e) : Array.isArray(e) ? Array.prototype.concat.apply(pr, e.map(function(c) {
    return ye(c, r, t, o);
  })) : [e.toString()];
}
function Oo(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (Ne(t) && !$r(t))
      return !1;
  }
  return !0;
}
var Po = Dt(dr), Ao = function() {
  function e(r, t, o) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (o === void 0 || o.isStatic) && Oo(r), this.componentId = t, this.baseHash = me(Po, t), this.baseStyle = o, Lt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, o) {
    var a = this.baseStyle ? this.baseStyle.generateAndInjectStyles(r, t, o) : "";
    if (this.isStatic && !o.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId))
        a = ve(a, this.staticRulesId);
      else {
        var i = ut(ye(this.rules, r, t, o)), c = Tr(me(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(this.componentId, c)) {
          var d = o(i, ".".concat(c), void 0, this.componentId);
          t.insertRules(this.componentId, c, d);
        }
        a = ve(a, c), this.staticRulesId = c;
      }
    else {
      for (var u = me(this.baseHash, o.hash), g = "", p = 0; p < this.rules.length; p++) {
        var m = this.rules[p];
        if (typeof m == "string")
          g += m, process.env.NODE_ENV !== "production" && (u = me(u, m));
        else if (m) {
          var b = ut(ye(m, r, t, o));
          u = me(u, b + p), g += b;
        }
      }
      if (g) {
        var w = Tr(u >>> 0);
        t.hasNameForId(this.componentId, w) || t.insertRules(this.componentId, w, o(g, ".".concat(w), void 0, this.componentId)), a = ve(a, w);
      }
    }
    return a;
  }, e;
}(), Bt = we.createContext(void 0);
Bt.Consumer;
var Sr = {}, ht = /* @__PURE__ */ new Set();
function jo(e, r, t) {
  var o = $r(e), a = e, i = !xr(e), c = r.attrs, d = c === void 0 ? pr : c, u = r.componentId, g = u === void 0 ? function(E, P) {
    var x = typeof E != "string" ? "sc" : ot(E);
    Sr[x] = (Sr[x] || 0) + 1;
    var f = "".concat(x, "-").concat(eo(dr + x + Sr[x]));
    return P ? "".concat(P, "-").concat(f) : f;
  }(r.displayName, r.parentComponentId) : u, p = r.displayName, m = p === void 0 ? function(E) {
    return xr(E) ? "styled.".concat(E) : "Styled(".concat(It(E), ")");
  }(e) : p, b = r.displayName && r.componentId ? "".concat(ot(r.displayName), "-").concat(r.componentId) : r.componentId || g, w = o && a.attrs ? a.attrs.concat(d).filter(Boolean) : d, O = r.shouldForwardProp;
  if (o && a.shouldForwardProp) {
    var j = a.shouldForwardProp;
    if (r.shouldForwardProp) {
      var M = r.shouldForwardProp;
      O = function(E, P) {
        return j(E, P) && M(E, P);
      };
    } else
      O = j;
  }
  var _ = new Ao(t, b, o ? a.componentStyle : void 0);
  function v(E, P) {
    return function(x, f, q) {
      var B = x.attrs, ke = x.componentStyle, fe = x.defaultProps, he = x.foldedComponentIds, F = x.styledComponentId, G = x.target, re = we.useContext(Bt), te = dt(), oe = x.shouldForwardProp || te.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Jr(F);
      var se = Kn(f, re, fe) || Ie, H = function(_e, ae, le) {
        for (var J, Z = W(W({}, ae), { className: void 0, theme: le }), de = 0; de < _e.length; de += 1) {
          var Re = Ne(J = _e[de]) ? J(Z) : J;
          for (var Q in Re)
            Z[Q] = Q === "className" ? ve(Z[Q], Re[Q]) : Q === "style" ? W(W({}, Z[Q]), Re[Q]) : Re[Q];
        }
        return ae.className && (Z.className = ve(Z.className, ae.className)), Z;
      }(B, f, se), ce = H.as || G, ue = {};
      for (var L in H)
        H[L] === void 0 || L[0] === "$" || L === "as" || L === "theme" && H.theme === se || (L === "forwardedAs" ? ue.as = H.forwardedAs : oe && !oe(L, ce) || (ue[L] = H[L], oe || process.env.NODE_ENV !== "development" || Tn(L) || ht.has(L) || !Cr.has(ce) || (ht.add(L), console.warn('styled-components: it looks like an unknown prop "'.concat(L, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var Ee = function(_e, ae) {
        var le = dt(), J = _e.generateAndInjectStyles(ae, le.styleSheet, le.stylis);
        return process.env.NODE_ENV !== "production" && Jr(J), J;
      }(ke, H);
      process.env.NODE_ENV !== "production" && x.warnTooManyClasses && x.warnTooManyClasses(Ee);
      var Le = ve(he, F);
      return Ee && (Le += " " + Ee), H.className && (Le += " " + H.className), ue[xr(ce) && !Cr.has(ce) ? "class" : "className"] = Le, ue.ref = q, wn(ce, ue);
    }(R, E, P);
  }
  v.displayName = m;
  var R = we.forwardRef(v);
  return R.attrs = w, R.componentStyle = _, R.displayName = m, R.shouldForwardProp = O, R.foldedComponentIds = o ? ve(a.foldedComponentIds, a.styledComponentId) : "", R.styledComponentId = b, R.target = o ? a.target : e, Object.defineProperty(R, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(E) {
    this._foldedDefaultProps = o ? function(P) {
      for (var x = [], f = 1; f < arguments.length; f++)
        x[f - 1] = arguments[f];
      for (var q = 0, B = x; q < B.length; q++)
        Or(P, B[q], !0);
      return P;
    }({}, a.defaultProps, E) : E;
  } }), process.env.NODE_ENV !== "production" && (Xn(m, b), R.warnTooManyClasses = /* @__PURE__ */ function(E, P) {
    var x = {}, f = !1;
    return function(q) {
      if (!f && (x[q] = !0, Object.keys(x).length >= 200)) {
        var B = P ? ' with the id of "'.concat(P, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(E).concat(B, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), f = !0, x = {};
      }
    };
  }(m, b)), Fr(R, function() {
    return ".".concat(R.styledComponentId);
  }), i && Mt(R, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), R;
}
function gt(e, r) {
  for (var t = [e[0]], o = 0, a = r.length; o < a; o += 1)
    t.push(r[o], e[o + 1]);
  return t;
}
var mt = function(e) {
  return Object.assign(e, { isCss: !0 });
};
function Do(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  if (Ne(e) || $e(e))
    return mt(ye(gt(pr, Ae([e], r, !0))));
  var o = e;
  return r.length === 0 && o.length === 1 && typeof o[0] == "string" ? ye(o) : mt(ye(gt(o, r)));
}
function Ar(e, r, t) {
  if (t === void 0 && (t = Ie), !r)
    throw ze(1, r);
  var o = function(a) {
    for (var i = [], c = 1; c < arguments.length; c++)
      i[c - 1] = arguments[c];
    return e(r, t, Do.apply(void 0, Ae([a], i, !1)));
  };
  return o.attrs = function(a) {
    return Ar(e, r, W(W({}, t), { attrs: Array.prototype.concat(t.attrs, a).filter(Boolean) }));
  }, o.withConfig = function(a) {
    return Ar(e, r, W(W({}, t), a));
  }, o;
}
var Ut = function(e) {
  return Ar(jo, e);
}, Se = Ut;
Cr.forEach(function(e) {
  Se[e] = Ut(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Qe = "__sc-".concat(xe, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Qe] || (window[Qe] = 0), window[Qe] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Qe] += 1);
function Vo(e) {
  var r = e.flexDirection, t = r === void 0 ? "row" : r, o = e.justifyContent, a = o === void 0 ? "flex-start" : o, i = e.alignItems, c = i === void 0 ? "flex-start" : i, d = e.children, u = d === void 0 ? null : d;
  return U.jsx(Io, { style: {
    display: "flex",
    flexDirection: t,
    justifyContent: a,
    alignItems: c
  }, children: u });
}
var Io = Se.div(vt || (vt = Fe([`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background:none !important;
    border: none !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    backdrop-filter: none !important;
  `], [`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background:none !important;
    border: none !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    backdrop-filter: none !important;
  `]))), vt;
function Yo(e) {
  var r = e.children, t = r === void 0 ? null : r;
  return U.jsx(No, { children: t });
}
var No = Se.div(bt || (bt = Fe([`
    display: flex;
    flex-direction: column;
    width: 100%;
    height:fit-content;
    padding: 0;
    margin: 0;
    align-items: center;
    background:none !important;
    border: none !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    backdrop-filter: none !important;
  `], [`
    display: flex;
    flex-direction: column;
    width: 100%;
    height:fit-content;
    padding: 0;
    margin: 0;
    align-items: center;
    background:none !important;
    border: none !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    backdrop-filter: none !important;
  `]))), bt;
function Wo(e) {
  var r = e.children, t = r === void 0 ? null : r;
  return U.jsx($o, { children: t });
}
var $o = Se.div(yt || (yt = Fe([`
    display: flex;
    width: 100%;
    height: fit-content;
    flex-direction: row;
    padding: 0;
    margin: 0;
    align-items: center;
    background:none !important;
    border: none !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    backdrop-filter: none !important;
`], [`
    display: flex;
    width: 100%;
    height: fit-content;
    flex-direction: row;
    padding: 0;
    margin: 0;
    align-items: center;
    background:none !important;
    border: none !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    backdrop-filter: none !important;
`]))), yt;
function Gt(e) {
  var r = e.children, t = e.position, o = t === void 0 ? "fixed" : t, a = e.originalPosition, i = a === void 0 ? { left: 0, top: 0 } : a, c = e.style, d = c === void 0 ? {} : c, u = Sn(), g = We(i.left), p = g[0], m = g[1], b = We(i.top), w = b[0], O = b[1], j = We(!1), M = j[0], _ = j[1], v = We(0), R = v[0], E = v[1], P = We(0), x = P[0], f = P[1];
  if (o === "fixed") {
    var q = function(F) {
      _(!0), E(F.pageX), f(F.pageY);
    }, B = function(F) {
      if (M) {
        var G = F.pageX, re = F.pageY;
        E(G), f(re), m(p + G - R), O(w + re - x);
      }
    }, ke = function() {
      _(!1), E(0), f(0);
    }, fe = function() {
      ke();
    };
    return U.jsx("div", { style: Pe(Pe({}, d), { position: "fixed", left: p + "px", top: w + "px" }), onMouseDown: q, onMouseOut: fe, onMouseMove: B, onMouseUp: ke, ref: u, children: r });
  } else {
    var q = function(te) {
      _(!0), E(te.clientX), f(te.clientY);
    }, B = function(te) {
      if (M) {
        var oe = te.clientX, se = te.clientY;
        E(oe), f(se), m(p + oe - R), O(w + se - x);
      }
    }, he = function() {
      _(!1), E(0), f(0);
    }, fe = function() {
      he();
    };
    return U.jsx(Fo, { style: Pe(Pe({}, d), { position: "absolute", left: p + "px", top: w + "px" }), onMouseDown: q, onMouseOut: fe, onMouseMove: B, onMouseUp: he, ref: u, children: r });
  }
}
Gt.defaultProps = {
  originalPosition: {
    left: 0,
    top: 0
  },
  style: null
};
var Fo = Se.div(wt || (wt = Fe([`
    padding: 0;
    margin: 0;
    background-color: transparent !important;
    transition: left 0s ,top 0s !important;
`], [`
    padding: 0;
    margin: 0;
    background-color: transparent !important;
    transition: left 0s ,top 0s !important;
`]))), wt;
function qo(e) {
  var r = e.visible, t = r === void 0 ? !1 : r, o = e.children, a = o === void 0 ? null : o, i = document.documentElement.clientWidth / 2, c = document.documentElement.clientHeight / 2, d = 29;
  return t ? U.jsx(U.Fragment, { children: U.jsx(Mo, { style: { zIndex: d }, children: U.jsx(Gt, { position: "fixed", originalPosition: { left: i, top: c }, style: { transform: "translateX(-50%) translateY(-50%)" }, children: U.jsx("div", { className: "aq_modal_dialog", children: a }) }) }) }) : U.jsx(U.Fragment, {});
}
var Mo = Se.div(xt || (xt = Fe([`
    position: fixed;
    z-index: calc(pow(2,31));
    left: 0;
    top:0;
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(15px) !important;
    background: transparent !important;
    border: none !important;
    user-select: none !important;
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    box-shadow:none !important;
    div.aq_modal_dialog,View.aq_modal_dialog{
        height: fit-content;
        width: fit-content;
        z-index: calc(pow(2,31));
        border: none !important;
        user-select: none !important;
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        box-shadow:none !important;
        backdrop-filter: none !important;
        background: transparent !important;
    }
    `], [`
    position: fixed;
    z-index: calc(pow(2,31));
    left: 0;
    top:0;
    height: 100vh;
    width: 100vw;
    backdrop-filter: blur(15px) !important;
    background: transparent !important;
    border: none !important;
    user-select: none !important;
    -webkit-user-select: none !important;
    -moz-user-select: none !important;
    -ms-user-select: none !important;
    box-shadow:none !important;
    div.aq_modal_dialog,View.aq_modal_dialog{
        height: fit-content;
        width: fit-content;
        z-index: calc(pow(2,31));
        border: none !important;
        user-select: none !important;
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        box-shadow:none !important;
        backdrop-filter: none !important;
        background: transparent !important;
    }
    `]))), xt;
function Bo(e) {
  var r = e.children;
  return U.jsx(zo, { children: r });
}
var zo = Se.div(St || (St = Fe([`
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
`], [`
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
`]))), St, Uo = /* @__PURE__ */ Object.assign({}), Go = /* @__PURE__ */ Object.assign({ "./style.css": kn });
export {
  Yo as AqColumn,
  Gt as AqDraggable,
  Vo as AqFlex,
  Bo as AqGlassTheme,
  qo as AqModalDialog,
  Wo as AqRow,
  Go as css,
  Uo as less
};
