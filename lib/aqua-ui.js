import Ne, { createRef as Tr, useState as X } from "react";
const Le = "AqColumn-module__aq_column___B1cj8", Ue = {
  aq_column: Le
}, Pr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  aq_column: Le,
  default: Ue
}, Symbol.toStringTag, { value: "Module" })), Ve = "AqDraggable-module__aq_draggable___JeMIa", me = {
  aq_draggable: Ve
}, wr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  aq_draggable: Ve,
  default: me
}, Symbol.toStringTag, { value: "Module" })), ze = "AqFlex-module__aq_flex___IapMH", Ge = {
  aq_flex: ze
}, Cr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  aq_flex: ze,
  default: Ge
}, Symbol.toStringTag, { value: "Module" })), Be = "AqModalDialog-module__aq_modal_dialog_layer___aj202", Je = "AqModalDialog-module__aq_modal_dialog___GRSj2", be = {
  aq_modal_dialog_layer: Be,
  aq_modal_dialog: Je
}, qr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  aq_modal_dialog: Je,
  aq_modal_dialog_layer: Be,
  default: be
}, Symbol.toStringTag, { value: "Module" })), Xe = "AqRow-module__aq_row___a9P1Y", Ke = {
  aq_row: Xe
}, Ar = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  aq_row: Xe,
  default: Ke
}, Symbol.toStringTag, { value: "Module" })), He = "AqGlassTheme-module__aq_glass_theme___QRCrE", Ze = {
  aq_glass_theme: He
}, Dr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  aq_glass_theme: He,
  default: Ze
}, Symbol.toStringTag, { value: "Module" })), kr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null
}, Symbol.toStringTag, { value: "Module" }));
var ye = { exports: {} }, K = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function Fr() {
  if (Ye)
    return K;
  Ye = 1;
  var u = Ne, s = Symbol.for("react.element"), c = Symbol.for("react.fragment"), p = Object.prototype.hasOwnProperty, E = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, m = { key: !0, ref: !0, __self: !0, __source: !0 };
  function O(y, d, C) {
    var g, S = {}, P = null, q = null;
    C !== void 0 && (P = "" + C), d.key !== void 0 && (P = "" + d.key), d.ref !== void 0 && (q = d.ref);
    for (g in d)
      p.call(d, g) && !m.hasOwnProperty(g) && (S[g] = d[g]);
    if (y && y.defaultProps)
      for (g in d = y.defaultProps, d)
        S[g] === void 0 && (S[g] = d[g]);
    return { $$typeof: s, type: y, key: P, ref: q, props: S, _owner: E.current };
  }
  return K.Fragment = c, K.jsx = O, K.jsxs = O, K;
}
var H = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var We;
function Mr() {
  return We || (We = 1, process.env.NODE_ENV !== "production" && function() {
    var u = Ne, s = Symbol.for("react.element"), c = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), m = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), y = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), q = Symbol.for("react.offscreen"), N = Symbol.iterator, Z = "@@iterator";
    function Q(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = N && e[N] || e[Z];
      return typeof r == "function" ? r : null;
    }
    var T = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ee("error", e, t);
      }
    }
    function ee(e, r, t) {
      {
        var n = T.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var l = t.map(function(o) {
          return String(o);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var A = !1, re = !1, te = !1, D = !1, L = !1, I;
    I = Symbol.for("react.module.reference");
    function ne(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === p || e === m || L || e === E || e === C || e === g || D || e === q || A || re || te || typeof e == "object" && e !== null && (e.$$typeof === P || e.$$typeof === S || e.$$typeof === O || e.$$typeof === y || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === I || e.getModuleId !== void 0));
    }
    function U(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function V(e) {
      return e.displayName || "Context";
    }
    function b(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case p:
          return "Fragment";
        case c:
          return "Portal";
        case m:
          return "Profiler";
        case E:
          return "StrictMode";
        case C:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return V(r) + ".Consumer";
          case O:
            var t = e;
            return V(t._context) + ".Provider";
          case d:
            return U(e, e.render, "ForwardRef");
          case S:
            var n = e.displayName || null;
            return n !== null ? n : b(e.type) || "Memo";
          case P: {
            var i = e, l = i._payload, o = i._init;
            try {
              return b(o(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, k = 0, F, z, G, he, Re, Ee, je;
    function Oe() {
    }
    Oe.__reactDisabledLog = !0;
    function er() {
      {
        if (k === 0) {
          F = console.log, z = console.info, G = console.warn, he = console.error, Re = console.group, Ee = console.groupCollapsed, je = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Oe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        k++;
      }
    }
    function rr() {
      {
        if (k--, k === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: F
            }),
            info: w({}, e, {
              value: z
            }),
            warn: w({}, e, {
              value: G
            }),
            error: w({}, e, {
              value: he
            }),
            group: w({}, e, {
              value: Re
            }),
            groupCollapsed: w({}, e, {
              value: Ee
            }),
            groupEnd: w({}, e, {
              value: je
            })
          });
        }
        k < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var se = T.ReactCurrentDispatcher, ue;
    function ae(e, r, t) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            ue = n && n[1] || "";
          }
        return `
` + ue + e;
      }
    }
    var ce = !1, oe;
    {
      var tr = typeof WeakMap == "function" ? WeakMap : Map;
      oe = new tr();
    }
    function Se(e, r) {
      if (!e || ce)
        return "";
      {
        var t = oe.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ce = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = se.current, se.current = null, er();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (R) {
              n = R;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (R) {
              n = R;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            n = R;
          }
          e();
        }
      } catch (R) {
        if (R && n && typeof R.stack == "string") {
          for (var a = R.stack.split(`
`), h = n.stack.split(`
`), f = a.length - 1, v = h.length - 1; f >= 1 && v >= 0 && a[f] !== h[v]; )
            v--;
          for (; f >= 1 && v >= 0; f--, v--)
            if (a[f] !== h[v]) {
              if (f !== 1 || v !== 1)
                do
                  if (f--, v--, v < 0 || a[f] !== h[v]) {
                    var x = `
` + a[f].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && oe.set(e, x), x;
                  }
                while (f >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        ce = !1, se.current = l, rr(), Error.prepareStackTrace = i;
      }
      var Y = e ? e.displayName || e.name : "", M = Y ? ae(Y) : "";
      return typeof e == "function" && oe.set(e, M), M;
    }
    function nr(e, r, t) {
      return Se(e, !1);
    }
    function ar(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ie(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Se(e, ar(e));
      if (typeof e == "string")
        return ae(e);
      switch (e) {
        case C:
          return ae("Suspense");
        case g:
          return ae("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return nr(e.render);
          case S:
            return ie(e.type, r, t);
          case P: {
            var n = e, i = n._payload, l = n._init;
            try {
              return ie(l(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, xe = {}, Te = T.ReactDebugCurrentFrame;
    function le(e) {
      if (e) {
        var r = e._owner, t = ie(e.type, e._source, r ? r.type : null);
        Te.setExtraStackFrame(t);
      } else
        Te.setExtraStackFrame(null);
    }
    function or(e, r, t, n, i) {
      {
        var l = Function.call.bind(B);
        for (var o in e)
          if (l(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var h = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw h.name = "Invariant Violation", h;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              a = f;
            }
            a && !(a instanceof Error) && (le(i), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), le(null)), a instanceof Error && !(a.message in xe) && (xe[a.message] = !0, le(i), _("Failed %s type: %s", t, a.message), le(null));
          }
      }
    }
    var ir = Array.isArray;
    function fe(e) {
      return ir(e);
    }
    function lr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function sr(e) {
      try {
        return Pe(e), !1;
      } catch {
        return !0;
      }
    }
    function Pe(e) {
      return "" + e;
    }
    function we(e) {
      if (sr(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", lr(e)), Pe(e);
    }
    var J = T.ReactCurrentOwner, ur = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, qe, de;
    de = {};
    function cr(e) {
      if (B.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function fr(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function dr(e, r) {
      if (typeof e.ref == "string" && J.current && r && J.current.stateNode !== r) {
        var t = b(J.current.type);
        de[t] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b(J.current.type), e.ref), de[t] = !0);
      }
    }
    function vr(e, r) {
      {
        var t = function() {
          Ce || (Ce = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function _r(e, r) {
      {
        var t = function() {
          qe || (qe = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var pr = function(e, r, t, n, i, l, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: l
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function gr(e, r, t, n, i) {
      {
        var l, o = {}, a = null, h = null;
        t !== void 0 && (we(t), a = "" + t), fr(r) && (we(r.key), a = "" + r.key), cr(r) && (h = r.ref, dr(r, i));
        for (l in r)
          B.call(r, l) && !ur.hasOwnProperty(l) && (o[l] = r[l]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (l in f)
            o[l] === void 0 && (o[l] = f[l]);
        }
        if (a || h) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && vr(o, v), h && _r(o, v);
        }
        return pr(e, a, h, i, n, J.current, o);
      }
    }
    var ve = T.ReactCurrentOwner, Ae = T.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var r = e._owner, t = ie(e.type, e._source, r ? r.type : null);
        Ae.setExtraStackFrame(t);
      } else
        Ae.setExtraStackFrame(null);
    }
    var _e;
    _e = !1;
    function pe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function De() {
      {
        if (ve.current) {
          var e = b(ve.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function mr(e) {
      return "";
    }
    var ke = {};
    function br(e) {
      {
        var r = De();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Fe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = br(r);
        if (ke[t])
          return;
        ke[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ve.current && (n = " It was passed a child from " + b(e._owner.type) + "."), $(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), $(null);
      }
    }
    function Me(e, r) {
      {
        if (typeof e != "object")
          return;
        if (fe(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            pe(n) && Fe(n, r);
          }
        else if (pe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = Q(e);
          if (typeof i == "function" && i !== e.entries)
            for (var l = i.call(e), o; !(o = l.next()).done; )
              pe(o.value) && Fe(o.value, r);
        }
      }
    }
    function yr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === S))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = b(r);
          or(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !_e) {
          _e = !0;
          var i = b(r);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            $(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    var Ie = {};
    function $e(e, r, t, n, i, l) {
      {
        var o = ne(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var h = mr();
          h ? a += h : a += De();
          var f;
          e === null ? f = "null" : fe(e) ? f = "array" : e !== void 0 && e.$$typeof === s ? (f = "<" + (b(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, a);
        }
        var v = gr(e, r, t, i, l);
        if (v == null)
          return v;
        if (o) {
          var x = r.children;
          if (x !== void 0)
            if (n)
              if (fe(x)) {
                for (var Y = 0; Y < x.length; Y++)
                  Me(x[Y], e);
                Object.freeze && Object.freeze(x);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Me(x, e);
        }
        if (B.call(r, "key")) {
          var M = b(e), R = Object.keys(r).filter(function(xr) {
            return xr !== "key";
          }), ge = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ie[M + ge]) {
            var Sr = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ge, M, Sr, M), Ie[M + ge] = !0;
          }
        }
        return e === p ? hr(v) : yr(v), v;
      }
    }
    function Rr(e, r, t) {
      return $e(e, r, t, !0);
    }
    function Er(e, r, t) {
      return $e(e, r, t, !1);
    }
    var jr = Er, Or = Rr;
    H.Fragment = p, H.jsx = jr, H.jsxs = Or;
  }()), H;
}
process.env.NODE_ENV === "production" ? ye.exports = Fr() : ye.exports = Mr();
var j = ye.exports;
function $r(u) {
  var s = u.flexDirection, c = s === void 0 ? "row" : s, p = u.justifyContent, E = p === void 0 ? "flex-start" : p, m = u.alignItems, O = m === void 0 ? "flex-start" : m, y = u.children, d = y === void 0 ? null : y;
  return j.jsx("div", { style: {
    display: "flex",
    flexDirection: c,
    justifyContent: E,
    alignItems: O
  }, className: Ge.aq_flex, children: d });
}
function Yr(u) {
  var s = u.children, c = s === void 0 ? null : s;
  return j.jsx("div", { className: Ue.aq_column, children: c });
}
function Wr(u) {
  var s = u.children, c = s === void 0 ? null : s;
  return j.jsx("div", { className: Ke.aq_row, children: c });
}
var W = function() {
  return W = Object.assign || function(s) {
    for (var c, p = 1, E = arguments.length; p < E; p++) {
      c = arguments[p];
      for (var m in c)
        Object.prototype.hasOwnProperty.call(c, m) && (s[m] = c[m]);
    }
    return s;
  }, W.apply(this, arguments);
};
function Qe(u) {
  var s = u.children, c = u.position, p = c === void 0 ? "fixed" : c, E = u.originalPosition, m = E === void 0 ? { left: 0, top: 0 } : E, O = u.style, y = O === void 0 ? {} : O, d = Tr(), C = X(m.left), g = C[0], S = C[1], P = X(m.top), q = P[0], N = P[1], Z = X(!1), Q = Z[0], T = Z[1], _ = X(0), ee = _[0], A = _[1], re = X(0), te = re[0], D = re[1];
  if (p === "fixed") {
    var L = function(b) {
      T(!0), A(b.pageX), D(b.pageY);
    }, I = function(b) {
      if (Q) {
        var w = b.pageX, k = b.pageY;
        A(w), D(k), S(g + w - ee), N(q + k - te);
      }
    }, ne = function() {
      T(!1), A(0), D(0);
    }, U = function() {
      ne();
    };
    return j.jsx("div", { style: W(W({}, y), { position: "fixed", left: g + "px", top: q + "px" }), onMouseDown: L, onMouseOut: U, onMouseMove: I, onMouseUp: ne, className: me.aq_draggable, ref: d, children: s });
  } else {
    var L = function(F) {
      T(!0), A(F.clientX), D(F.clientY);
    }, I = function(F) {
      if (Q) {
        var z = F.clientX, G = F.clientY;
        A(z), D(G), S(g + z - ee), N(q + G - te);
      }
    }, V = function() {
      T(!1), A(0), D(0);
    }, U = function() {
      V();
    };
    return j.jsx("div", { style: W(W({}, y), { position: "absolute", left: g + "px", top: q + "px" }), onMouseDown: L, onMouseOut: U, onMouseMove: I, onMouseUp: V, className: me.aq_draggable, ref: d, children: s });
  }
}
Qe.defaultProps = {
  originalPosition: {
    left: 0,
    top: 0
  },
  style: null
};
function Nr(u) {
  var s = u.visible, c = s === void 0 ? !1 : s, p = u.children, E = p === void 0 ? null : p, m = document.documentElement.clientWidth / 2, O = document.documentElement.clientHeight / 2, y = 29;
  return c ? j.jsx(j.Fragment, { children: j.jsx("div", { className: be.aq_modal_dialog_layer, style: { zIndex: y }, children: j.jsx(Qe, { position: "fixed", originalPosition: { left: m, top: O }, style: { transform: "translateX(-50%) translateY(-50%)" }, children: j.jsx("div", { className: be.aq_modal_dialog, children: E }) }) }) }) : j.jsx(j.Fragment, {});
}
function Lr(u) {
  var s = u.children, c = s === void 0 ? null : s;
  return j.jsx("div", { className: Ze.aq_glass_theme, children: c });
}
var Ur = /* @__PURE__ */ Object.assign({ "./components/AqColumn/AqColumn.module.less": Pr, "./components/AqDraggable/AqDraggable.module.less": wr, "./components/AqFlex/AqFlex.module.less": Cr, "./components/AqModalDialog/AqModalDialog.module.less": qr, "./components/AqRow/AqRow.module.less": Ar, "./themes/AqGlassTheme/AqGlassTheme.module.less": Dr }), Vr = /* @__PURE__ */ Object.assign({ "./style.css": kr });
export {
  Yr as AqColumn,
  Qe as AqDraggable,
  $r as AqFlex,
  Lr as AqGlassTheme,
  Nr as AqModalDialog,
  Wr as AqRow,
  Vr as css,
  Ur as less
};
