import Oe from "react";
var Z = { exports: {} }, D = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function dr() {
  if (Ce)
    return D;
  Ce = 1;
  var y = Oe, w = Symbol.for("react.element"), V = Symbol.for("react.fragment"), T = Object.prototype.hasOwnProperty, I = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, $ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function P(m, c, C) {
    var p, h = {}, b = null, W = null;
    C !== void 0 && (b = "" + C), c.key !== void 0 && (b = "" + c.key), c.ref !== void 0 && (W = c.ref);
    for (p in c)
      T.call(c, p) && !$.hasOwnProperty(p) && (h[p] = c[p]);
    if (m && m.defaultProps)
      for (p in c = m.defaultProps, c)
        h[p] === void 0 && (h[p] = c[p]);
    return { $$typeof: w, type: m, key: b, ref: W, props: h, _owner: I.current };
  }
  return D.Fragment = V, D.jsx = P, D.jsxs = P, D;
}
var F = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function vr() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && function() {
    var y = Oe, w = Symbol.for("react.element"), V = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), I = Symbol.for("react.strict_mode"), $ = Symbol.for("react.profiler"), P = Symbol.for("react.provider"), m = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), C = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), Q = Symbol.iterator, Pe = "@@iterator";
    function je(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Q && e[Q] || e[Pe];
      return typeof r == "function" ? r : null;
    }
    var x = y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function f(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var n = x.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Ae = !1, De = !1, Fe = !1, Ie = !1, $e = !1, ee;
    ee = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === T || e === $ || $e || e === I || e === C || e === p || Ie || e === W || Ae || De || Fe || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === h || e.$$typeof === P || e.$$typeof === m || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function g(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case T:
          return "Fragment";
        case V:
          return "Portal";
        case $:
          return "Profiler";
        case I:
          return "StrictMode";
        case C:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return re(r) + ".Consumer";
          case P:
            var t = e;
            return re(t._context) + ".Provider";
          case c:
            return Ye(e, e.render, "ForwardRef");
          case h:
            var n = e.displayName || null;
            return n !== null ? n : g(e.type) || "Memo";
          case b: {
            var o = e, u = o._payload, i = o._init;
            try {
              return g(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var E = Object.assign, j = 0, te, ne, ae, ie, oe, ue, se;
    function le() {
    }
    le.__reactDisabledLog = !0;
    function qe() {
      {
        if (j === 0) {
          te = console.log, ne = console.info, ae = console.warn, ie = console.error, oe = console.group, ue = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: le,
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
        j++;
      }
    }
    function Le() {
      {
        if (j--, j === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: E({}, e, {
              value: te
            }),
            info: E({}, e, {
              value: ne
            }),
            warn: E({}, e, {
              value: ae
            }),
            error: E({}, e, {
              value: ie
            }),
            group: E({}, e, {
              value: oe
            }),
            groupCollapsed: E({}, e, {
              value: ue
            }),
            groupEnd: E({}, e, {
              value: se
            })
          });
        }
        j < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = x.ReactCurrentDispatcher, N;
    function Y(e, r, t) {
      {
        if (N === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            N = n && n[1] || "";
          }
        return `
` + N + e;
      }
    }
    var B = !1, q;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      q = new Me();
    }
    function fe(e, r) {
      if (!e || B)
        return "";
      {
        var t = q.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      B = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = U.current, U.current = null, qe();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (v) {
              n = v;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (v) {
              n = v;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (v) {
            n = v;
          }
          e();
        }
      } catch (v) {
        if (v && n && typeof v.stack == "string") {
          for (var a = v.stack.split(`
`), d = n.stack.split(`
`), s = a.length - 1, l = d.length - 1; s >= 1 && l >= 0 && a[s] !== d[l]; )
            l--;
          for (; s >= 1 && l >= 0; s--, l--)
            if (a[s] !== d[l]) {
              if (s !== 1 || l !== 1)
                do
                  if (s--, l--, l < 0 || a[s] !== d[l]) {
                    var _ = `
` + a[s].replace(" at new ", " at ");
                    return e.displayName && _.includes("<anonymous>") && (_ = _.replace("<anonymous>", e.displayName)), typeof e == "function" && q.set(e, _), _;
                  }
                while (s >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        B = !1, U.current = u, Le(), Error.prepareStackTrace = o;
      }
      var S = e ? e.displayName || e.name : "", R = S ? Y(S) : "";
      return typeof e == "function" && q.set(e, R), R;
    }
    function Ve(e, r, t) {
      return fe(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, Ue(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case C:
          return Y("Suspense");
        case p:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ve(e.render);
          case h:
            return L(e.type, r, t);
          case b: {
            var n = e, o = n._payload, u = n._init;
            try {
              return L(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var k = Object.prototype.hasOwnProperty, ce = {}, de = x.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function Ne(e, r, t, n, o) {
      {
        var u = Function.call.bind(k);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var d = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw d.name = "Invariant Violation", d;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              a = s;
            }
            a && !(a instanceof Error) && (M(o), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), M(null)), a instanceof Error && !(a.message in ce) && (ce[a.message] = !0, M(o), f("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var Be = Array.isArray;
    function J(e) {
      return Be(e);
    }
    function Je(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ke(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function pe(e) {
      if (Ke(e))
        return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Je(e)), ve(e);
    }
    var A = x.ReactCurrentOwner, Ge = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, ye, K;
    K = {};
    function ze(e) {
      if (k.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Xe(e) {
      if (k.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function He(e, r) {
      if (typeof e.ref == "string" && A.current && r && A.current.stateNode !== r) {
        var t = g(A.current.type);
        K[t] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', g(A.current.type), e.ref), K[t] = !0);
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          _e || (_e = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          ye || (ye = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var er = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: w,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
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
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function rr(e, r, t, n, o) {
      {
        var u, i = {}, a = null, d = null;
        t !== void 0 && (pe(t), a = "" + t), Xe(r) && (pe(r.key), a = "" + r.key), ze(r) && (d = r.ref, He(r, o));
        for (u in r)
          k.call(r, u) && !Ge.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (u in s)
            i[u] === void 0 && (i[u] = s[u]);
        }
        if (a || d) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ze(i, l), d && Qe(i, l);
        }
        return er(e, a, d, o, n, A.current, i);
      }
    }
    var G = x.ReactCurrentOwner, ge = x.ReactDebugCurrentFrame;
    function O(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === w;
    }
    function he() {
      {
        if (G.current) {
          var e = g(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function tr(e) {
      return "";
    }
    var me = {};
    function nr(e) {
      {
        var r = he();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function be(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = nr(r);
        if (me[t])
          return;
        me[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + g(e._owner.type) + "."), O(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), O(null);
      }
    }
    function Ee(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            X(n) && be(n, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = je(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              X(i.value) && be(i.value, r);
        }
      }
    }
    function ar(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === h))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = g(r);
          Ne(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var o = g(r);
          f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ir(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            O(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), O(null);
            break;
          }
        }
        e.ref !== null && (O(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), O(null));
      }
    }
    var Re = {};
    function Te(e, r, t, n, o, u) {
      {
        var i = We(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var d = tr();
          d ? a += d : a += he();
          var s;
          e === null ? s = "null" : J(e) ? s = "array" : e !== void 0 && e.$$typeof === w ? (s = "<" + (g(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, f("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, a);
        }
        var l = rr(e, r, t, o, u);
        if (l == null)
          return l;
        if (i) {
          var _ = r.children;
          if (_ !== void 0)
            if (n)
              if (J(_)) {
                for (var S = 0; S < _.length; S++)
                  Ee(_[S], e);
                Object.freeze && Object.freeze(_);
              } else
                f("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ee(_, e);
        }
        if (k.call(r, "key")) {
          var R = g(e), v = Object.keys(r).filter(function(cr) {
            return cr !== "key";
          }), H = v.length > 0 ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Re[R + H]) {
            var fr = v.length > 0 ? "{" + v.join(": ..., ") + ": ...}" : "{}";
            f(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, H, R, fr, R), Re[R + H] = !0;
          }
        }
        return e === T ? ir(l) : ar(l), l;
      }
    }
    function or(e, r, t) {
      return Te(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Te(e, r, t, !1);
    }
    var sr = ur, lr = or;
    F.Fragment = T, F.jsx = sr, F.jsxs = lr;
  }()), F;
}
process.env.NODE_ENV === "production" ? Z.exports = dr() : Z.exports = vr();
var Se = Z.exports;
const pr = "AqFlex-module__aq_flex___IapMH", _r = {
  aq_flex: pr
};
function we(y) {
  return /* @__PURE__ */ Se.jsx(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: y.flexDirection,
        justifyContent: y.justifyContent,
        alignItems: y.alignItems
      },
      className: _r.aq_flex,
      children: y.children
    }
  );
}
we.defaultProps = {
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  children: []
};
const yr = "AqColumn-module__aq_column___B1cj8", gr = {
  aq_column: yr
};
function hr(y) {
  return /* @__PURE__ */ Se.jsx("div", { className: gr.aq_column, children: y.children });
}
const mr = { AqColumn: hr }, Er = {
  AqFlex: we,
  AqColumn: mr
};
export {
  Er as default
};
