import Oe from "react";
var Z = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function cr() {
  if (xe)
    return I;
  xe = 1;
  var p = Oe, f = Symbol.for("react.element"), m = Symbol.for("react.fragment"), R = Object.prototype.hasOwnProperty, S = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(y, c, j) {
    var h, E = {}, x = null, W = null;
    j !== void 0 && (x = "" + j), c.key !== void 0 && (x = "" + c.key), c.ref !== void 0 && (W = c.ref);
    for (h in c)
      R.call(c, h) && !T.hasOwnProperty(h) && (E[h] = c[h]);
    if (y && y.defaultProps)
      for (h in c = y.defaultProps, c)
        E[h] === void 0 && (E[h] = c[h]);
    return { $$typeof: f, type: y, key: x, ref: W, props: E, _owner: S.current };
  }
  return I.Fragment = m, I.jsx = w, I.jsxs = w, I;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function dr() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && function() {
    var p = Oe, f = Symbol.for("react.element"), m = Symbol.for("react.portal"), R = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), y = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), ee = Symbol.iterator, Se = "@@iterator";
    function je(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[Se];
      return typeof r == "function" ? r : null;
    }
    var P = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Pe("error", e, t);
      }
    }
    function Pe(e, r, t) {
      {
        var n = P.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var ke = !1, Ae = !1, De = !1, Fe = !1, qe = !1, re;
    re = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === R || e === T || qe || e === S || e === j || e === h || Fe || e === W || ke || Ae || De || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === E || e.$$typeof === w || e.$$typeof === y || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function b(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case R:
          return "Fragment";
        case m:
          return "Portal";
        case T:
          return "Profiler";
        case S:
          return "StrictMode";
        case j:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return te(r) + ".Consumer";
          case w:
            var t = e;
            return te(t._context) + ".Provider";
          case c:
            return $e(e, e.render, "ForwardRef");
          case E:
            var n = e.displayName || null;
            return n !== null ? n : b(e.type) || "Memo";
          case x: {
            var i = e, u = i._payload, o = i._init;
            try {
              return b(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, D = 0, ne, ae, oe, ie, ue, se, le;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function We() {
      {
        if (D === 0) {
          ne = console.log, ae = console.info, oe = console.warn, ie = console.error, ue = console.group, se = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
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
        D++;
      }
    }
    function Ye() {
      {
        if (D--, D === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: ne
            }),
            info: C({}, e, {
              value: ae
            }),
            warn: C({}, e, {
              value: oe
            }),
            error: C({}, e, {
              value: ie
            }),
            group: C({}, e, {
              value: ue
            }),
            groupCollapsed: C({}, e, {
              value: se
            }),
            groupEnd: C({}, e, {
              value: le
            })
          });
        }
        D < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = P.ReactCurrentDispatcher, B;
    function Y(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var J = !1, L;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Le();
    }
    function ce(e, r) {
      if (!e || J)
        return "";
      {
        var t = L.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      J = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = U.current, U.current = null, We();
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
            } catch (_) {
              n = _;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (_) {
              n = _;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            n = _;
          }
          e();
        }
      } catch (_) {
        if (_ && n && typeof _.stack == "string") {
          for (var a = _.stack.split(`
`), v = n.stack.split(`
`), s = a.length - 1, l = v.length - 1; s >= 1 && l >= 0 && a[s] !== v[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== v[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== v[l]) {
                    var g = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, g), g;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        J = !1, U.current = u, Ye(), Error.prepareStackTrace = i;
      }
      var A = e ? e.displayName || e.name : "", O = A ? Y(A) : "";
      return typeof e == "function" && L.set(e, O), O;
    }
    function Me(e, r, t) {
      return ce(e, !1);
    }
    function Ne(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ce(e, Ne(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case j:
          return Y("Suspense");
        case h:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Me(e.render);
          case E:
            return M(e.type, r, t);
          case x: {
            var n = e, i = n._payload, u = n._init;
            try {
              return M(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var F = Object.prototype.hasOwnProperty, de = {}, ve = P.ReactDebugCurrentFrame;
    function N(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Ve(e, r, t, n, i) {
      {
        var u = Function.call.bind(F);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (N(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), N(null)), a instanceof Error && !(a.message in de) && (de[a.message] = !0, N(i), d("Failed %s type: %s", t, a.message), N(null));
          }
      }
    }
    var Ue = Array.isArray;
    function G(e) {
      return Ue(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Je(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function _e(e) {
      if (Je(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), pe(e);
    }
    var q = P.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, ge, K;
    K = {};
    function Ke(e) {
      if (F.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ze(e) {
      if (F.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      if (typeof e.ref == "string" && q.current && r && q.current.stateNode !== r) {
        var t = b(q.current.type);
        K[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b(q.current.type), e.ref), K[t] = !0);
      }
    }
    function He(e, r) {
      {
        var t = function() {
          he || (he = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Qe(e, r) {
      {
        var t = function() {
          ge || (ge = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Ze = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
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
    function er(e, r, t, n, i) {
      {
        var u, o = {}, a = null, v = null;
        t !== void 0 && (_e(t), a = "" + t), ze(r) && (_e(r.key), a = "" + r.key), Ke(r) && (v = r.ref, Xe(r, i));
        for (u in r)
          F.call(r, u) && !Ge.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            o[u] === void 0 && (o[u] = s[u]);
        }
        if (a || v) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && He(o, l), v && Qe(o, l);
        }
        return Ze(e, a, v, i, n, q.current, o);
      }
    }
    var z = P.ReactCurrentOwner, me = P.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var X;
    X = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === f;
    }
    function ye() {
      {
        if (z.current) {
          var e = b(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      return "";
    }
    var be = {};
    function tr(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (be[t])
          return;
        be[t] = !0;
        var n = "";
        e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + b(e._owner.type) + "."), k(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function Ee(e, r) {
      {
        if (typeof e != "object")
          return;
        if (G(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && Re(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = je(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              H(o.value) && Re(o.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = b(r);
          Ve(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !X) {
          X = !0;
          var i = b(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    var Te = {};
    function we(e, r, t, n, i, u) {
      {
        var o = Ie(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = rr();
          v ? a += v : a += ye();
          var s;
          e === null ? s = "null" : G(e) ? s = "array" : e !== void 0 && e.$$typeof === f ? (s = "<" + (b(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = er(e, r, t, i, u);
        if (l == null)
          return l;
        if (o) {
          var g = r.children;
          if (g !== void 0)
            if (n)
              if (G(g)) {
                for (var A = 0; A < g.length; A++)
                  Ee(g[A], e);
                Object.freeze && Object.freeze(g);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ee(g, e);
        }
        if (F.call(r, "key")) {
          var O = b(e), _ = Object.keys(r).filter(function(fr) {
            return fr !== "key";
          }), Q = _.length > 0 ? "{key: someKey, " + _.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[O + Q]) {
            var lr = _.length > 0 ? "{" + _.join(": ..., ") + ": ...}" : "{}";
            d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, O, lr, O), Te[O + Q] = !0;
          }
        }
        return e === R ? ar(l) : nr(l), l;
      }
    }
    function or(e, r, t) {
      return we(e, r, t, !0);
    }
    function ir(e, r, t) {
      return we(e, r, t, !1);
    }
    var ur = ir, sr = or;
    $.Fragment = R, $.jsx = ur, $.jsxs = sr;
  }()), $;
}
process.env.NODE_ENV === "production" ? Z.exports = cr() : Z.exports = dr();
var V = Z.exports;
const vr = "AqFlex-module__aq_flex___IapMH", pr = {
  aq_flex: vr
};
function Er(p) {
  var f = p.flexDirection, m = f === void 0 ? "row" : f, R = p.justifyContent, S = R === void 0 ? "flex-start" : R, T = p.alignItems, w = T === void 0 ? "flex-start" : T, y = p.children, c = y === void 0 ? null : y;
  return V.jsx("div", { style: {
    display: "flex",
    flexDirection: m,
    justifyContent: S,
    alignItems: w
  }, className: pr.aq_flex, children: c });
}
const _r = "AqColumn-module__aq_column___B1cj8", hr = {
  aq_column: _r
};
function Tr(p) {
  var f = p.children, m = f === void 0 ? null : f;
  return V.jsx("div", { className: hr.aq_column, children: m });
}
const gr = "AqRow-module__aq_row___a9P1Y", mr = {
  aq_row: gr
};
function wr(p) {
  var f = p.children, m = f === void 0 ? null : f;
  return V.jsx("div", { className: mr.aq_row, children: m });
}
const yr = "AqGlassTheme-module__aq_glass_theme___QRCrE", br = {
  aq_glass_theme: yr
};
function xr(p) {
  var f = p.children, m = f === void 0 ? null : f;
  return V.jsx("div", { className: br.aq_glass_theme, children: m });
}
export {
  Tr as AqColumn,
  Er as AqFlex,
  xr as AqGlassTheme,
  wr as AqRow
};
