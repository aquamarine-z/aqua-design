import ve, { useRef as yn, useDebugValue as Jr, createElement as wn, useContext as xn, createRef as Sn, useState as We } from "react";
const kn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
var be = function() {
  return be = Object.assign || function(r) {
    for (var t, o = 1, a = arguments.length; o < a; o++) {
      t = arguments[o];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, be.apply(this, arguments);
};
function Ne(e, r) {
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
  var e = ve, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(d, l, p) {
    var f, m = {}, b = null, w = null;
    p !== void 0 && (b = "" + p), l.key !== void 0 && (b = "" + l.key), l.ref !== void 0 && (w = l.ref);
    for (f in l)
      o.call(l, f) && !i.hasOwnProperty(f) && (m[f] = l[f]);
    if (d && d.defaultProps)
      for (f in l = d.defaultProps, l)
        m[f] === void 0 && (m[f] = l[f]);
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
    var e = ve, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), d = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), O = Symbol.iterator, j = "@@iterator";
    function L(n) {
      if (n === null || typeof n != "object")
        return null;
      var s = O && n[O] || n[j];
      return typeof s == "function" ? s : null;
    }
    var E = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(n) {
      {
        for (var s = arguments.length, u = new Array(s > 1 ? s - 1 : 0), h = 1; h < s; h++)
          u[h - 1] = arguments[h];
        T("error", n, u);
      }
    }
    function T(n, s, u) {
      {
        var h = E.ReactDebugCurrentFrame, R = h.getStackAddendum();
        R !== "" && (s += "%s", u = u.concat([R]));
        var A = u.map(function(k) {
          return String(k);
        });
        A.unshift("Warning: " + s), Function.prototype.apply.call(console[n], console, A);
      }
    }
    var _ = !1, P = !1, x = !1, g = !1, W = !1, J;
    J = Symbol.for("react.module.reference");
    function Me(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === o || n === i || W || n === a || n === p || n === f || g || n === w || _ || P || x || typeof n == "object" && n !== null && (n.$$typeof === b || n.$$typeof === m || n.$$typeof === c || n.$$typeof === d || n.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === J || n.getModuleId !== void 0));
    }
    function xe(n, s, u) {
      var h = n.displayName;
      if (h)
        return h;
      var R = s.displayName || s.name || "";
      return R !== "" ? u + "(" + R + ")" : u;
    }
    function Se(n) {
      return n.displayName || "Context";
    }
    function I(n) {
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
        case p:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case d:
            var s = n;
            return Se(s) + ".Consumer";
          case c:
            var u = n;
            return Se(u._context) + ".Provider";
          case l:
            return xe(n, n.render, "ForwardRef");
          case m:
            var h = n.displayName || null;
            return h !== null ? h : I(n.type) || "Memo";
          case b: {
            var R = n, A = R._payload, k = R._init;
            try {
              return I(k(A));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, U = 0, ne, ie, Le, G, se, ce, V;
    function ke() {
    }
    ke.__reactDisabledLog = !0;
    function ze() {
      {
        if (U === 0) {
          ne = console.log, ie = console.info, Le = console.warn, G = console.error, se = console.group, ce = console.groupCollapsed, V = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: ke,
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
        U++;
      }
    }
    function Ee() {
      {
        if (U--, U === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, n, {
              value: ne
            }),
            info: z({}, n, {
              value: ie
            }),
            warn: z({}, n, {
              value: Le
            }),
            error: z({}, n, {
              value: G
            }),
            group: z({}, n, {
              value: se
            }),
            groupCollapsed: z({}, n, {
              value: ce
            }),
            groupEnd: z({}, n, {
              value: V
            })
          });
        }
        U < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = E.ReactCurrentDispatcher, le;
    function Z(n, s, u) {
      {
        if (le === void 0)
          try {
            throw Error();
          } catch (R) {
            var h = R.stack.trim().match(/\n( *(at )?)/);
            le = h && h[1] || "";
          }
        return `
` + le + n;
      }
    }
    var Q = !1, ue;
    {
      var _e = typeof WeakMap == "function" ? WeakMap : Map;
      ue = new _e();
    }
    function ee(n, s) {
      if (!n || Q)
        return "";
      {
        var u = ue.get(n);
        if (u !== void 0)
          return u;
      }
      var h;
      Q = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var A;
      A = oe.current, oe.current = null, ze();
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
            } catch (q) {
              h = q;
            }
            Reflect.construct(n, [], k);
          } else {
            try {
              k.call();
            } catch (q) {
              h = q;
            }
            n.call(k.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (q) {
            h = q;
          }
          n();
        }
      } catch (q) {
        if (q && h && typeof q.stack == "string") {
          for (var S = q.stack.split(`
`), Y = h.stack.split(`
`), N = S.length - 1, $ = Y.length - 1; N >= 1 && $ >= 0 && S[N] !== Y[$]; )
            $--;
          for (; N >= 1 && $ >= 0; N--, $--)
            if (S[N] !== Y[$]) {
              if (N !== 1 || $ !== 1)
                do
                  if (N--, $--, $ < 0 || S[N] !== Y[$]) {
                    var H = `
` + S[N].replace(" at new ", " at ");
                    return n.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", n.displayName)), typeof n == "function" && ue.set(n, H), H;
                  }
                while (N >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        Q = !1, oe.current = A, Ee(), Error.prepareStackTrace = R;
      }
      var Ce = n ? n.displayName || n.name : "", pe = Ce ? Z(Ce) : "";
      return typeof n == "function" && ue.set(n, pe), pe;
    }
    function Ht(n, s, u) {
      return ee(n, !1);
    }
    function Xt(n) {
      var s = n.prototype;
      return !!(s && s.isReactComponent);
    }
    function He(n, s, u) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return ee(n, Xt(n));
      if (typeof n == "string")
        return Z(n);
      switch (n) {
        case p:
          return Z("Suspense");
        case f:
          return Z("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case l:
            return Ht(n.render);
          case m:
            return He(n.type, s, u);
          case b: {
            var h = n, R = h._payload, A = h._init;
            try {
              return He(A(R), s, u);
            } catch {
            }
          }
        }
      return "";
    }
    var Ve = Object.prototype.hasOwnProperty, Mr = {}, Lr = E.ReactDebugCurrentFrame;
    function Xe(n) {
      if (n) {
        var s = n._owner, u = He(n.type, n._source, s ? s.type : null);
        Lr.setExtraStackFrame(u);
      } else
        Lr.setExtraStackFrame(null);
    }
    function Kt(n, s, u, h, R) {
      {
        var A = Function.call.bind(Ve);
        for (var k in n)
          if (A(n, k)) {
            var S = void 0;
            try {
              if (typeof n[k] != "function") {
                var Y = Error((h || "React class") + ": " + u + " type `" + k + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[k] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Y.name = "Invariant Violation", Y;
              }
              S = n[k](s, k, h, u, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              S = N;
            }
            S && !(S instanceof Error) && (Xe(R), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", u, k, typeof S), Xe(null)), S instanceof Error && !(S.message in Mr) && (Mr[S.message] = !0, Xe(R), v("Failed %s type: %s", u, S.message), Xe(null));
          }
      }
    }
    var Jt = Array.isArray;
    function fr(n) {
      return Jt(n);
    }
    function Zt(n) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, u = s && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return u;
      }
    }
    function Qt(n) {
      try {
        return zr(n), !1;
      } catch {
        return !0;
      }
    }
    function zr(n) {
      return "" + n;
    }
    function Vr(n) {
      if (Qt(n))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Zt(n)), zr(n);
    }
    var Ye = E.ReactCurrentOwner, en = {
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
        var u = I(Ye.current.type);
        hr[u] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(Ye.current.type), n.ref), hr[u] = !0);
      }
    }
    function on(n, s) {
      {
        var u = function() {
          Yr || (Yr = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: u,
          configurable: !0
        });
      }
    }
    function an(n, s) {
      {
        var u = function() {
          Wr || (Wr = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        u.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: u,
          configurable: !0
        });
      }
    }
    var sn = function(n, s, u, h, R, A, k) {
      var S = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: n,
        key: s,
        ref: u,
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
        value: R
      }), Object.freeze && (Object.freeze(S.props), Object.freeze(S)), S;
    };
    function cn(n, s, u, h, R) {
      {
        var A, k = {}, S = null, Y = null;
        u !== void 0 && (Vr(u), S = "" + u), tn(s) && (Vr(s.key), S = "" + s.key), rn(s) && (Y = s.ref, nn(s, R));
        for (A in s)
          Ve.call(s, A) && !en.hasOwnProperty(A) && (k[A] = s[A]);
        if (n && n.defaultProps) {
          var N = n.defaultProps;
          for (A in N)
            k[A] === void 0 && (k[A] = N[A]);
        }
        if (S || Y) {
          var $ = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          S && on(k, $), Y && an(k, $);
        }
        return sn(n, S, Y, R, h, Ye.current, k);
      }
    }
    var gr = E.ReactCurrentOwner, qr = E.ReactDebugCurrentFrame;
    function Re(n) {
      if (n) {
        var s = n._owner, u = He(n.type, n._source, s ? s.type : null);
        qr.setExtraStackFrame(u);
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
          var n = I(gr.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function ln(n) {
      return "";
    }
    var Ur = {};
    function un(n) {
      {
        var s = Br();
        if (!s) {
          var u = typeof n == "string" ? n : n.displayName || n.name;
          u && (s = `

Check the top-level render call using <` + u + ">.");
        }
        return s;
      }
    }
    function Gr(n, s) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var u = un(s);
        if (Ur[u])
          return;
        Ur[u] = !0;
        var h = "";
        n && n._owner && n._owner !== gr.current && (h = " It was passed a child from " + I(n._owner.type) + "."), Re(n), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', u, h), Re(null);
      }
    }
    function Hr(n, s) {
      {
        if (typeof n != "object")
          return;
        if (fr(n))
          for (var u = 0; u < n.length; u++) {
            var h = n[u];
            vr(h) && Gr(h, s);
          }
        else if (vr(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var R = L(n);
          if (typeof R == "function" && R !== n.entries)
            for (var A = R.call(n), k; !(k = A.next()).done; )
              vr(k.value) && Gr(k.value, s);
        }
      }
    }
    function dn(n) {
      {
        var s = n.type;
        if (s == null || typeof s == "string")
          return;
        var u;
        if (typeof s == "function")
          u = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === m))
          u = s.propTypes;
        else
          return;
        if (u) {
          var h = I(s);
          Kt(u, n.props, "prop", h, n);
        } else if (s.PropTypes !== void 0 && !mr) {
          mr = !0;
          var R = I(s);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pn(n) {
      {
        for (var s = Object.keys(n.props), u = 0; u < s.length; u++) {
          var h = s[u];
          if (h !== "children" && h !== "key") {
            Re(n), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), Re(null);
            break;
          }
        }
        n.ref !== null && (Re(n), v("Invalid attribute `ref` supplied to `React.Fragment`."), Re(null));
      }
    }
    var Xr = {};
    function Kr(n, s, u, h, R, A) {
      {
        var k = Me(n);
        if (!k) {
          var S = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (S += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Y = ln();
          Y ? S += Y : S += Br();
          var N;
          n === null ? N = "null" : fr(n) ? N = "array" : n !== void 0 && n.$$typeof === r ? (N = "<" + (I(n.type) || "Unknown") + " />", S = " Did you accidentally export a JSX literal instead of a component?") : N = typeof n, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, S);
        }
        var $ = cn(n, s, u, R, A);
        if ($ == null)
          return $;
        if (k) {
          var H = s.children;
          if (H !== void 0)
            if (h)
              if (fr(H)) {
                for (var Ce = 0; Ce < H.length; Ce++)
                  Hr(H[Ce], n);
                Object.freeze && Object.freeze(H);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Hr(H, n);
        }
        if (Ve.call(s, "key")) {
          var pe = I(n), q = Object.keys(s).filter(function(bn) {
            return bn !== "key";
          }), br = q.length > 0 ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Xr[pe + br]) {
            var vn = q.length > 0 ? "{" + q.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, br, pe, vn, pe), Xr[pe + br] = !0;
          }
        }
        return n === o ? pn($) : dn($), $;
      }
    }
    function fn(n, s, u) {
      return Kr(n, s, u, !0);
    }
    function hn(n, s, u) {
      return Kr(n, s, u, !1);
    }
    var gn = hn, mn = fn;
    Be.Fragment = o, Be.jsx = gn, Be.jsxs = mn;
  }()), Be;
}
process.env.NODE_ENV === "production" ? kr.exports = En() : kr.exports = _n();
var X = kr.exports, B = function() {
  return B = Object.assign || function(r) {
    for (var t, o = 1, a = arguments.length; o < a; o++) {
      t = arguments[o];
      for (var i in t)
        Object.prototype.hasOwnProperty.call(t, i) && (r[i] = t[i]);
    }
    return r;
  }, B.apply(this, arguments);
};
function Oe(e, r, t) {
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
), D = "-ms-", Ge = "-moz-", C = "-webkit-", kt = "comm", sr = "rule", jr = "decl", On = "@import", Et = "@keyframes", Pn = "@layer", _t = Math.abs, Dr = String.fromCharCode, Er = Object.assign;
function An(e, r) {
  return M(e, 0) ^ 45 ? (((r << 2 ^ M(e, 0)) << 2 ^ M(e, 1)) << 2 ^ M(e, 2)) << 2 ^ M(e, 3) : 0;
}
function Rt(e) {
  return e.trim();
}
function ae(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function y(e, r, t) {
  return e.replace(r, t);
}
function er(e, r, t) {
  return e.indexOf(r, t);
}
function M(e, r) {
  return e.charCodeAt(r) | 0;
}
function Pe(e, r, t) {
  return e.slice(r, t);
}
function te(e) {
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
    return !ae(t, r);
  });
}
var cr = 1, Ae = 1, Tt = 0, K = 0, F = 0, $e = "";
function lr(e, r, t, o, a, i, c, d) {
  return { value: e, root: r, parent: t, type: o, props: a, children: i, line: cr, column: Ae, length: c, return: "", siblings: d };
}
function de(e, r) {
  return Er(lr("", null, null, "", null, null, 0, e.siblings), e, { length: -e.length }, r);
}
function Te(e) {
  for (; e.root; )
    e = de(e.root, { children: [e] });
  Ue(e, e.siblings);
}
function Dn() {
  return F;
}
function In() {
  return F = K > 0 ? M($e, --K) : 0, Ae--, F === 10 && (Ae = 1, cr--), F;
}
function re() {
  return F = K < Tt ? M($e, K++) : 0, Ae++, F === 10 && (Ae = 1, cr++), F;
}
function ge() {
  return M($e, K);
}
function rr() {
  return K;
}
function ur(e, r) {
  return Pe($e, e, r);
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
  return cr = Ae = 1, Tt = te($e = e), K = 0, [];
}
function $n(e) {
  return $e = "", e;
}
function yr(e) {
  return Rt(ur(K - 1, Rr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Fn(e) {
  for (; (F = ge()) && F < 33; )
    re();
  return _r(e) > 2 || _r(F) > 3 ? "" : " ";
}
function Mn(e, r) {
  for (; --r && re() && !(F < 48 || F > 102 || F > 57 && F < 65 || F > 70 && F < 97); )
    ;
  return ur(e, rr() + (r < 6 && ge() == 32 && re() == 32));
}
function Rr(e) {
  for (; re(); )
    switch (F) {
      case e:
        return K;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Rr(F);
        break;
      case 40:
        e === 41 && Rr(e);
        break;
      case 92:
        re();
        break;
    }
  return K;
}
function Ln(e, r) {
  for (; re() && e + F !== 57; )
    if (e + F === 84 && ge() === 47)
      break;
  return "/*" + ur(r, K - 1) + "*" + Dr(e === 47 ? e : re());
}
function zn(e) {
  for (; !_r(ge()); )
    re();
  return ur(e, K);
}
function Vn(e) {
  return $n(tr("", null, null, null, [""], e = Nn(e), 0, [0], e));
}
function tr(e, r, t, o, a, i, c, d, l) {
  for (var p = 0, f = 0, m = c, b = 0, w = 0, O = 0, j = 1, L = 1, E = 1, v = 0, T = "", _ = a, P = i, x = o, g = T; L; )
    switch (O = v, v = re()) {
      case 40:
        if (O != 108 && M(g, m - 1) == 58) {
          er(g += y(yr(v), "&", "&\f"), "&\f", _t(p ? d[p - 1] : 0)) != -1 && (E = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        g += yr(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        g += Fn(O);
        break;
      case 92:
        g += Mn(rr() - 1, 7);
        continue;
      case 47:
        switch (ge()) {
          case 42:
          case 47:
            Ue(Yn(Ln(re(), rr()), r, t, l), l);
            break;
          default:
            g += "/";
        }
        break;
      case 123 * j:
        d[p++] = te(g) * E;
      case 125 * j:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            L = 0;
          case 59 + f:
            E == -1 && (g = y(g, /\f/g, "")), w > 0 && te(g) - m && Ue(w > 32 ? tt(g + ";", o, t, m - 1, l) : tt(y(g, " ", "") + ";", o, t, m - 2, l), l);
            break;
          case 59:
            g += ";";
          default:
            if (Ue(x = rt(g, r, t, p, f, a, d, T, _ = [], P = [], m, i), i), v === 123)
              if (f === 0)
                tr(g, r, x, x, _, i, m, d, P);
              else
                switch (b === 99 && M(g, 3) === 110 ? 100 : b) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    tr(e, x, x, o && Ue(rt(e, x, x, 0, 0, a, d, T, a, _ = [], m, P), P), a, P, m, d, o ? _ : P);
                    break;
                  default:
                    tr(g, x, x, x, [""], P, 0, d, P);
                }
        }
        p = f = w = 0, j = E = 1, T = g = "", m = c;
        break;
      case 58:
        m = 1 + te(g), w = O;
      default:
        if (j < 1) {
          if (v == 123)
            --j;
          else if (v == 125 && j++ == 0 && In() == 125)
            continue;
        }
        switch (g += Dr(v), v * j) {
          case 38:
            E = f > 0 ? 1 : (g += "\f", -1);
            break;
          case 44:
            d[p++] = (te(g) - 1) * E, E = 1;
            break;
          case 64:
            ge() === 45 && (g += yr(re())), b = ge(), f = m = te(T = g += zn(rr())), v++;
            break;
          case 45:
            O === 45 && te(g) == 2 && (j = 0);
        }
    }
  return i;
}
function rt(e, r, t, o, a, i, c, d, l, p, f, m) {
  for (var b = a - 1, w = a === 0 ? i : [""], O = Ct(w), j = 0, L = 0, E = 0; j < o; ++j)
    for (var v = 0, T = Pe(e, b + 1, b = _t(L = c[j])), _ = e; v < O; ++v)
      (_ = Rt(L > 0 ? w[v] + " " + T : y(T, /&\f/g, w[v]))) && (l[E++] = _);
  return lr(e, r, t, a === 0 ? sr : d, l, p, f, m);
}
function Yn(e, r, t, o) {
  return lr(e, r, t, kt, Dr(Dn()), Pe(e, 2, -2), 0, o);
}
function tt(e, r, t, o, a) {
  return lr(e, r, t, jr, Pe(e, 0, o), Pe(e, o + 1, -1), o, a);
}
function Ot(e, r, t) {
  switch (An(e, r)) {
    case 5103:
      return C + "print-" + e + e;
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
      return C + e + e;
    case 4789:
      return Ge + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return C + e + Ge + e + D + e + e;
    case 5936:
      switch (M(e, r + 11)) {
        case 114:
          return C + e + D + y(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return C + e + D + y(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return C + e + D + y(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
    case 6828:
    case 4268:
    case 2903:
      return C + e + D + e + e;
    case 6165:
      return C + e + D + "flex-" + e + e;
    case 5187:
      return C + e + y(e, /(\w+).+(:[^]+)/, C + "box-$1$2" + D + "flex-$1$2") + e;
    case 5443:
      return C + e + D + "flex-item-" + y(e, /flex-|-self/g, "") + (ae(e, /flex-|baseline/) ? "" : D + "grid-row-" + y(e, /flex-|-self/g, "")) + e;
    case 4675:
      return C + e + D + "flex-line-pack" + y(e, /align-content|flex-|-self/g, "") + e;
    case 5548:
      return C + e + D + y(e, "shrink", "negative") + e;
    case 5292:
      return C + e + D + y(e, "basis", "preferred-size") + e;
    case 6060:
      return C + "box-" + y(e, "-grow", "") + C + e + D + y(e, "grow", "positive") + e;
    case 4554:
      return C + y(e, /([^-])(transform)/g, "$1" + C + "$2") + e;
    case 6187:
      return y(y(y(e, /(zoom-|grab)/, C + "$1"), /(image-set)/, C + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return y(e, /(image-set\([^]*)/, C + "$1$`$1");
    case 4968:
      return y(y(e, /(.+:)(flex-)?(.*)/, C + "box-pack:$3" + D + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + C + e + e;
    case 4200:
      if (!ae(e, /flex-|baseline/))
        return D + "grid-column-align" + Pe(e, r) + e;
      break;
    case 2592:
    case 3360:
      return D + y(e, "template-", "") + e;
    case 4384:
    case 3616:
      return t && t.some(function(o, a) {
        return r = a, ae(o.props, /grid-\w+-end/);
      }) ? ~er(e + (t = t[r].value), "span", 0) ? e : D + y(e, "-start", "") + e + D + "grid-row-span:" + (~er(t, "span", 0) ? ae(t, /\d+/) : +ae(t, /\d+/) - +ae(e, /\d+/)) + ";" : D + y(e, "-start", "") + e;
    case 4896:
    case 4128:
      return t && t.some(function(o) {
        return ae(o.props, /grid-\w+-start/);
      }) ? e : D + y(y(e, "-end", "-span"), "span ", "") + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return y(e, /(.+)-inline(.+)/, C + "$1$2") + e;
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
      if (te(e) - 1 - r > 6)
        switch (M(e, r + 1)) {
          case 109:
            if (M(e, r + 4) !== 45)
              break;
          case 102:
            return y(e, /(.+:)(.+)-([^]+)/, "$1" + C + "$2-$3$1" + Ge + (M(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~er(e, "stretch", 0) ? Ot(y(e, "stretch", "fill-available"), r, t) + e : e;
        }
      break;
    case 5152:
    case 5920:
      return y(e, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(o, a, i, c, d, l, p) {
        return D + a + ":" + i + p + (c ? D + a + "-span:" + (d ? l : +l - +i) + p : "") + e;
      });
    case 4949:
      if (M(e, r + 6) === 121)
        return y(e, ":", ":" + C) + e;
      break;
    case 6444:
      switch (M(e, M(e, 14) === 45 ? 18 : 11)) {
        case 120:
          return y(e, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + C + (M(e, 14) === 45 ? "inline-" : "") + "box$3$1" + C + "$2$3$1" + D + "$2box$3") + e;
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
      if (!te(e.value = e.props.join(",")))
        return "";
  }
  return te(t = ar(e.children, o)) ? e.return = e.value + "{" + t + "}" : "";
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
        return ar([de(e, { value: y(e.value, "@", "@" + C) })], o);
      case sr:
        if (e.length)
          return jn(t = e.props, function(a) {
            switch (ae(a, o = /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                Te(de(e, { props: [y(a, /:(read-\w+)/, ":" + Ge + "$1")] })), Te(de(e, { props: [a] })), Er(e, { props: et(t, o) });
                break;
              case "::placeholder":
                Te(de(e, { props: [y(a, /:(plac\w+)/, ":" + C + "input-$1")] })), Te(de(e, { props: [y(a, /:(plac\w+)/, ":" + Ge + "$1")] })), Te(de(e, { props: [y(a, /:(plac\w+)/, D + "input-$1")] })), Te(de(e, { props: [a] })), Er(e, { props: et(t, o) });
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
}, ye = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Pt = "active", At = "data-styled-version", dr = "6.1.11", Ir = `/*!sc*/
`, Nr = typeof window < "u" && "HTMLElement" in window, Hn = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production"), nt = /invalid hook call/i, Ke = /* @__PURE__ */ new Set(), Xn = function(e, r) {
  if (process.env.NODE_ENV !== "production") {
    var t = r ? ' with the id of "'.concat(r, '"') : "", o = "The component ".concat(e).concat(t, ` has been created dynamically.
`) + `You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, a = console.error;
    try {
      var i = !0;
      console.error = function(c) {
        for (var d = [], l = 1; l < arguments.length; l++)
          d[l - 1] = arguments[l];
        nt.test(c) ? (i = !1, Ke.delete(o)) : a.apply(void 0, Oe([c], d, !1));
      }, yn(), i && !Ke.has(o) && (console.warn(o), Ke.add(o));
    } catch (c) {
      nt.test(c.message) && Ke.delete(o);
    } finally {
      console.error = a;
    }
  }
}, pr = Object.freeze([]), je = Object.freeze({});
function Kn(e, r, t) {
  return t === void 0 && (t = je), e.theme !== t.theme && e.theme || r || t.theme;
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
var wr, jt = 5381, fe = function(e, r) {
  for (var t = r.length; t; )
    e = 33 * e ^ r.charCodeAt(--t);
  return e;
}, Dt = function(e) {
  return fe(jt, e);
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
      var l = a[d];
      if (!(l in no || t && t[l] || c && l in c || i && l in i)) {
        var p = so(r, l);
        try {
          ao(e, l, p);
        } catch {
        }
      }
    }
  }
  return e;
}
function De(e) {
  return typeof e == "function";
}
function $r(e) {
  return typeof e == "object" && "styledComponentId" in e;
}
function he(e, r) {
  return e && r ? "".concat(e, " ").concat(r) : e || r || "";
}
function lt(e, r) {
  if (e.length === 0)
    return "";
  for (var t = e[0], o = 1; o < e.length; o++)
    t += e[o];
  return t;
}
function Ie(e) {
  return e !== null && typeof e == "object" && e.constructor.name === Object.name && !("props" in e && e.$$typeof);
}
function Or(e, r, t) {
  if (t === void 0 && (t = !1), !t && !Ie(e) && !Array.isArray(e))
    return r;
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      e[o] = Or(e[o], r[o]);
  else if (Ie(r))
    for (var o in r)
      e[o] = Or(e[o], r[o]);
  return e;
}
function Fr(e, r) {
  Object.defineProperty(e, "toString", { value: r });
}
var lo = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

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
function uo() {
  for (var e = [], r = 0; r < arguments.length; r++)
    e[r] = arguments[r];
  for (var t = e[0], o = [], a = 1, i = e.length; a < i; a += 1)
    o.push(e[a]);
  return o.forEach(function(c) {
    t = t.replace(/%[a-z]/, c);
  }), t;
}
function Fe(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  return process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e, " for more information.").concat(r.length > 0 ? " Args: ".concat(r.join(", ")) : "")) : new Error(uo.apply(void 0, Oe([lo[e]], r, !1)).trim());
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
          throw Fe(16, "".concat(r));
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var c = a; c < i; c++)
        this.groupSizes[c] = 0;
    }
    for (var d = this.indexOfGroup(r + 1), l = (c = 0, t.length); c < l; c++)
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
    throw Fe(16, "".concat(r));
  return nr.set(e, r), ir.set(r, e), r;
}, ho = function(e, r) {
  or = r + 1, nr.set(e, r), ir.set(r, e);
}, go = "style[".concat(ye, "][").concat(At, '="').concat(dr, '"]'), mo = new RegExp("^".concat(ye, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), vo = function(e, r, t) {
  for (var o, a = t.split(","), i = 0, c = a.length; i < c; i++)
    (o = a[i]) && e.registerName(r, o);
}, bo = function(e, r) {
  for (var t, o = ((t = r.textContent) !== null && t !== void 0 ? t : "").split(Ir), a = [], i = 0, c = o.length; i < c; i++) {
    var d = o[i].trim();
    if (d) {
      var l = d.match(mo);
      if (l) {
        var p = 0 | parseInt(l[1], 10), f = l[2];
        p !== 0 && (ho(f, p), vo(e, f, l[3]), e.getTag().insertRules(p, a)), a.length = 0;
      } else
        a.push(d);
    }
  }
};
function yo() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var Lt = function(e) {
  var r = document.head, t = e || r, o = document.createElement("style"), a = function(d) {
    var l = Array.from(d.querySelectorAll("style[".concat(ye, "]")));
    return l[l.length - 1];
  }(t), i = a !== void 0 ? a.nextSibling : null;
  o.setAttribute(ye, Pt), o.setAttribute(At, dr);
  var c = yo();
  return c && o.setAttribute("nonce", c), t.insertBefore(o, i), o;
}, wo = function() {
  function e(r) {
    this.element = Lt(r), this.element.appendChild(document.createTextNode("")), this.sheet = function(t) {
      if (t.sheet)
        return t.sheet;
      for (var o = document.styleSheets, a = 0, i = o.length; a < i; a++) {
        var c = o[a];
        if (c.ownerNode === t)
          return c;
      }
      throw Fe(17);
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
    this.element = Lt(r), this.nodes = this.element.childNodes, this.length = 0;
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
}(), ut = Nr, ko = { isServer: !Nr, useCSSOMInjection: !Hn }, zt = function() {
  function e(r, t, o) {
    r === void 0 && (r = je), t === void 0 && (t = {});
    var a = this;
    this.options = B(B({}, ko), r), this.gs = t, this.names = new Map(o), this.server = !!r.isServer, !this.server && Nr && ut && (ut = !1, function(i) {
      for (var c = document.querySelectorAll(go), d = 0, l = c.length; d < l; d++) {
        var p = c[d];
        p && p.getAttribute(ye) !== Pt && (bo(i, p), p.parentNode && p.parentNode.removeChild(p));
      }
    }(this)), Fr(this, function() {
      return function(i) {
        for (var c = i.getTag(), d = c.length, l = "", p = function(m) {
          var b = function(E) {
            return ir.get(E);
          }(m);
          if (b === void 0)
            return "continue";
          var w = i.names.get(b), O = c.getGroup(m);
          if (w === void 0 || O.length === 0)
            return "continue";
          var j = "".concat(ye, ".g").concat(m, '[id="').concat(b, '"]'), L = "";
          w !== void 0 && w.forEach(function(E) {
            E.length > 0 && (L += "".concat(E, ","));
          }), l += "".concat(O).concat(j, '{content:"').concat(L, '"}').concat(Ir);
        }, f = 0; f < d; f++)
          p(f);
        return l;
      }(a);
    });
  }
  return e.registerId = function(r) {
    return Ze(r);
  }, e.prototype.reconstructWithOptions = function(r, t) {
    return t === void 0 && (t = !0), new e(B(B({}, this.options), r), this.gs, t && this.names || void 0);
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
  var r, t, o, a = je, i = a.options, c = i === void 0 ? je : i, d = a.plugins, l = d === void 0 ? pr : d, p = function(b, w, O) {
    return O.startsWith(t) && O.endsWith(t) && O.replaceAll(t, "").length > 0 ? ".".concat(r) : b;
  }, f = l.slice();
  f.push(function(b) {
    b.type === sr && b.value.includes("&") && (b.props[0] = b.props[0].replace(Eo, t).replace(o, p));
  }), c.prefix && f.push(Un), f.push(Wn);
  var m = function(b, w, O, j) {
    w === void 0 && (w = ""), O === void 0 && (O = ""), j === void 0 && (j = "&"), r = j, t = w, o = new RegExp("\\".concat(t, "\\b"), "g");
    var L = b.replace(_o, ""), E = Vn(O || w ? "".concat(O, " ").concat(w, " { ").concat(L, " }") : L);
    c.namespace && (E = Vt(E, c.namespace));
    var v = [];
    return ar(E, qn(f.concat(Bn(function(T) {
      return v.push(T);
    })))), v;
  };
  return m.hash = l.length ? l.reduce(function(b, w) {
    return w.name || Fe(15), fe(b, w.name);
  }, jt).toString() : "", m;
}
var Co = new zt(), Pr = Ro(), Yt = ve.createContext({ shouldForwardProp: void 0, styleSheet: Co, stylis: Pr });
Yt.Consumer;
ve.createContext(void 0);
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
      throw Fe(12, String(o.name));
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
    e.hasOwnProperty(a) && !Wt(i) && (Array.isArray(i) && i.isCss || De(i) ? o.push("".concat(ft(a), ":"), i, ";") : Ie(i) ? o.push.apply(o, Oe(Oe(["".concat(a, " {")], qt(i), !1), ["}"], !1)) : o.push("".concat(ft(a), ": ").concat((r = a, (t = i) == null || typeof t == "boolean" || t === "" ? "" : typeof t != "number" || t === 0 || r in Gn || r.startsWith("--") ? String(t).trim() : "".concat(t, "px")), ";")));
  }
  return o;
};
function me(e, r, t, o) {
  if (Wt(e))
    return [];
  if ($r(e))
    return [".".concat(e.styledComponentId)];
  if (De(e)) {
    if (!De(i = e) || i.prototype && i.prototype.isReactComponent || !r)
      return [e];
    var a = e(r);
    return process.env.NODE_ENV === "production" || typeof a != "object" || Array.isArray(a) || a instanceof pt || Ie(a) || a === null || console.error("".concat(It(e), " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.")), me(a, r, t, o);
  }
  var i;
  return e instanceof pt ? t ? (e.inject(t, o), [e.getName(o)]) : [e] : Ie(e) ? qt(e) : Array.isArray(e) ? Array.prototype.concat.apply(pr, e.map(function(c) {
    return me(c, r, t, o);
  })) : [e.toString()];
}
function Oo(e) {
  for (var r = 0; r < e.length; r += 1) {
    var t = e[r];
    if (De(t) && !$r(t))
      return !1;
  }
  return !0;
}
var Po = Dt(dr), Ao = function() {
  function e(r, t, o) {
    this.rules = r, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (o === void 0 || o.isStatic) && Oo(r), this.componentId = t, this.baseHash = fe(Po, t), this.baseStyle = o, zt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(r, t, o) {
    var a = this.baseStyle ? this.baseStyle.generateAndInjectStyles(r, t, o) : "";
    if (this.isStatic && !o.hash)
      if (this.staticRulesId && t.hasNameForId(this.componentId, this.staticRulesId))
        a = he(a, this.staticRulesId);
      else {
        var i = lt(me(this.rules, r, t, o)), c = Tr(fe(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(this.componentId, c)) {
          var d = o(i, ".".concat(c), void 0, this.componentId);
          t.insertRules(this.componentId, c, d);
        }
        a = he(a, c), this.staticRulesId = c;
      }
    else {
      for (var l = fe(this.baseHash, o.hash), p = "", f = 0; f < this.rules.length; f++) {
        var m = this.rules[f];
        if (typeof m == "string")
          p += m, process.env.NODE_ENV !== "production" && (l = fe(l, m));
        else if (m) {
          var b = lt(me(m, r, t, o));
          l = fe(l, b + f), p += b;
        }
      }
      if (p) {
        var w = Tr(l >>> 0);
        t.hasNameForId(this.componentId, w) || t.insertRules(this.componentId, w, o(p, ".".concat(w), void 0, this.componentId)), a = he(a, w);
      }
    }
    return a;
  }, e;
}(), Bt = ve.createContext(void 0);
Bt.Consumer;
var Sr = {}, ht = /* @__PURE__ */ new Set();
function jo(e, r, t) {
  var o = $r(e), a = e, i = !xr(e), c = r.attrs, d = c === void 0 ? pr : c, l = r.componentId, p = l === void 0 ? function(_, P) {
    var x = typeof _ != "string" ? "sc" : ot(_);
    Sr[x] = (Sr[x] || 0) + 1;
    var g = "".concat(x, "-").concat(eo(dr + x + Sr[x]));
    return P ? "".concat(P, "-").concat(g) : g;
  }(r.displayName, r.parentComponentId) : l, f = r.displayName, m = f === void 0 ? function(_) {
    return xr(_) ? "styled.".concat(_) : "Styled(".concat(It(_), ")");
  }(e) : f, b = r.displayName && r.componentId ? "".concat(ot(r.displayName), "-").concat(r.componentId) : r.componentId || p, w = o && a.attrs ? a.attrs.concat(d).filter(Boolean) : d, O = r.shouldForwardProp;
  if (o && a.shouldForwardProp) {
    var j = a.shouldForwardProp;
    if (r.shouldForwardProp) {
      var L = r.shouldForwardProp;
      O = function(_, P) {
        return j(_, P) && L(_, P);
      };
    } else
      O = j;
  }
  var E = new Ao(t, b, o ? a.componentStyle : void 0);
  function v(_, P) {
    return function(x, g, W) {
      var J = x.attrs, Me = x.componentStyle, xe = x.defaultProps, Se = x.foldedComponentIds, I = x.styledComponentId, z = x.target, U = ve.useContext(Bt), ne = dt(), ie = x.shouldForwardProp || ne.shouldForwardProp;
      process.env.NODE_ENV !== "production" && Jr(I);
      var Le = Kn(g, U, xe) || je, G = function(Ee, oe, le) {
        for (var Z, Q = B(B({}, oe), { className: void 0, theme: le }), ue = 0; ue < Ee.length; ue += 1) {
          var _e = De(Z = Ee[ue]) ? Z(Q) : Z;
          for (var ee in _e)
            Q[ee] = ee === "className" ? he(Q[ee], _e[ee]) : ee === "style" ? B(B({}, Q[ee]), _e[ee]) : _e[ee];
        }
        return oe.className && (Q.className = he(Q.className, oe.className)), Q;
      }(J, g, Le), se = G.as || z, ce = {};
      for (var V in G)
        G[V] === void 0 || V[0] === "$" || V === "as" || V === "theme" && G.theme === Le || (V === "forwardedAs" ? ce.as = G.forwardedAs : ie && !ie(V, se) || (ce[V] = G[V], ie || process.env.NODE_ENV !== "development" || Tn(V) || ht.has(V) || !Cr.has(se) || (ht.add(V), console.warn('styled-components: it looks like an unknown prop "'.concat(V, '" is being sent through to the DOM, which will likely trigger a React console error. If you would like automatic filtering of unknown props, you can opt-into that behavior via `<StyleSheetManager shouldForwardProp={...}>` (connect an API like `@emotion/is-prop-valid`) or consider using transient props (`$` prefix for automatic filtering.)')))));
      var ke = function(Ee, oe) {
        var le = dt(), Z = Ee.generateAndInjectStyles(oe, le.styleSheet, le.stylis);
        return process.env.NODE_ENV !== "production" && Jr(Z), Z;
      }(Me, G);
      process.env.NODE_ENV !== "production" && x.warnTooManyClasses && x.warnTooManyClasses(ke);
      var ze = he(Se, I);
      return ke && (ze += " " + ke), G.className && (ze += " " + G.className), ce[xr(se) && !Cr.has(se) ? "class" : "className"] = ze, ce.ref = W, wn(se, ce);
    }(T, _, P);
  }
  v.displayName = m;
  var T = ve.forwardRef(v);
  return T.attrs = w, T.componentStyle = E, T.displayName = m, T.shouldForwardProp = O, T.foldedComponentIds = o ? he(a.foldedComponentIds, a.styledComponentId) : "", T.styledComponentId = b, T.target = o ? a.target : e, Object.defineProperty(T, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(_) {
    this._foldedDefaultProps = o ? function(P) {
      for (var x = [], g = 1; g < arguments.length; g++)
        x[g - 1] = arguments[g];
      for (var W = 0, J = x; W < J.length; W++)
        Or(P, J[W], !0);
      return P;
    }({}, a.defaultProps, _) : _;
  } }), process.env.NODE_ENV !== "production" && (Xn(m, b), T.warnTooManyClasses = /* @__PURE__ */ function(_, P) {
    var x = {}, g = !1;
    return function(W) {
      if (!g && (x[W] = !0, Object.keys(x).length >= 200)) {
        var J = P ? ' with the id of "'.concat(P, '"') : "";
        console.warn("Over ".concat(200, " classes were generated for component ").concat(_).concat(J, `.
`) + `Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), g = !0, x = {};
      }
    };
  }(m, b)), Fr(T, function() {
    return ".".concat(T.styledComponentId);
  }), i && Mt(T, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), T;
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
  if (De(e) || Ie(e))
    return mt(me(gt(pr, Oe([e], r, !0))));
  var o = e;
  return r.length === 0 && o.length === 1 && typeof o[0] == "string" ? me(o) : mt(me(gt(o, r)));
}
function Ar(e, r, t) {
  if (t === void 0 && (t = je), !r)
    throw Fe(1, r);
  var o = function(a) {
    for (var i = [], c = 1; c < arguments.length; c++)
      i[c - 1] = arguments[c];
    return e(r, t, Do.apply(void 0, Oe([a], i, !1)));
  };
  return o.attrs = function(a) {
    return Ar(e, r, B(B({}, t), { attrs: Array.prototype.concat(t.attrs, a).filter(Boolean) }));
  }, o.withConfig = function(a) {
    return Ar(e, r, B(B({}, t), a));
  }, o;
}
var Ut = function(e) {
  return Ar(jo, e);
}, we = Ut;
Cr.forEach(function(e) {
  we[e] = Ut(e);
});
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`);
var Qe = "__sc-".concat(ye, "__");
process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window[Qe] || (window[Qe] = 0), window[Qe] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window[Qe] += 1);
function Vo(e) {
  var r = e.flexDirection, t = r === void 0 ? "row" : r, o = e.justifyContent, a = o === void 0 ? "flex-start" : o, i = e.alignItems, c = i === void 0 ? "flex-start" : i, d = e.children, l = d === void 0 ? null : d, p = e.style, f = p === void 0 ? {} : p;
  return X.jsx(Io, { style: be({ display: "flex", flexDirection: t, justifyContent: a, alignItems: c }, f), children: l });
}
var Io = we.div(vt || (vt = Ne([`
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
  var r = e.children, t = r === void 0 ? null : r, o = e.style, a = o === void 0 ? {} : o;
  return X.jsx(No, { style: be({}, a), children: t });
}
var No = we.div(bt || (bt = Ne([`
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
  var r = e.children, t = r === void 0 ? null : r, o = e.style, a = o === void 0 ? {} : o;
  return X.jsx($o, { style: be({}, a), children: t });
}
var $o = we.div(yt || (yt = Ne([`
    display: flex;
    width: fit-content;
    height: 100%;
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
    width: fit-content;
    height: 100%;
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
  var r = e.children, t = e.position, o = t === void 0 ? "fixed" : t, a = e.originalPosition, i = a === void 0 ? { left: 0, top: 0 } : a, c = e.style, d = c === void 0 ? {} : c, l = Sn(), p = We(i.left), f = p[0], m = p[1], b = We(i.top), w = b[0], O = b[1], j = We(!1), L = j[0], E = j[1], v = We(0), T = v[0], _ = v[1], P = We(0), x = P[0], g = P[1], W;
  o === "fixed" ? W = function(I) {
    return [I.clientX, I.clientY];
  } : o === "absolute" && (W = function(I) {
    return [I.pageX, I.pageY];
  });
  var J = function(I) {
    E(!0);
    var z = W(I), U = z[0], ne = z[1];
    _(U), g(ne);
  }, Me = function(I) {
    if (L) {
      var z = W(I), U = z[0], ne = z[1], ie = function() {
        _(U), g(ne), m(f + U - T), O(w + ne - x);
      };
      requestAnimationFrame(ie);
    }
  }, xe = function() {
    E(!1), _(0), g(0);
  }, Se = function() {
    xe();
  };
  return X.jsx(Fo, { style: be(be({}, d), { position: o, left: f + "px", top: w + "px" }), onMouseDown: J, onMouseOut: Se, onMouseMove: Me, onMouseUp: xe, ref: l, children: r });
}
Gt.defaultProps = {
  originalPosition: {
    left: 0,
    top: 0
  },
  style: null
};
var Fo = we.div(wt || (wt = Ne([`
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
  return t ? X.jsx(X.Fragment, { children: X.jsx(Mo, { style: { zIndex: d }, children: X.jsx(Gt, { position: "fixed", originalPosition: { left: i, top: c }, style: { transform: "translateX(-50%) translateY(-50%)" }, children: X.jsx("div", { className: "aq_modal_dialog", children: a }) }) }) }) : X.jsx(X.Fragment, {});
}
var Mo = we.div(xt || (xt = Ne([`
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
  return X.jsx(Lo, { children: r });
}
var Lo = we.div(St || (St = Ne([`
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
