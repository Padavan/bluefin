"use strict";
(() => {
  // node_modules/preact/dist/preact.module.js
  var n;
  var l;
  var u;
  var i;
  var t;
  var r;
  var o;
  var f;
  var e;
  var c = {};
  var s = [];
  var a = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function h(n2, l3) {
    for (var u3 in l3)
      n2[u3] = l3[u3];
    return n2;
  }
  function v(n2) {
    var l3 = n2.parentNode;
    l3 && l3.removeChild(n2);
  }
  function y(l3, u3, i3) {
    var t3, r3, o4, f3 = {};
    for (o4 in u3)
      "key" == o4 ? t3 = u3[o4] : "ref" == o4 ? r3 = u3[o4] : f3[o4] = u3[o4];
    if (arguments.length > 2 && (f3.children = arguments.length > 3 ? n.call(arguments, 2) : i3), "function" == typeof l3 && null != l3.defaultProps)
      for (o4 in l3.defaultProps)
        void 0 === f3[o4] && (f3[o4] = l3.defaultProps[o4]);
    return p(l3, f3, t3, r3, null);
  }
  function p(n2, i3, t3, r3, o4) {
    var f3 = { type: n2, props: i3, key: t3, ref: r3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o4 ? ++u : o4 };
    return null == o4 && null != l.vnode && l.vnode(f3), f3;
  }
  function _(n2) {
    return n2.children;
  }
  function k(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function b(n2, l3) {
    if (null == l3)
      return n2.__ ? b(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
    for (var u3; l3 < n2.__k.length; l3++)
      if (null != (u3 = n2.__k[l3]) && null != u3.__e)
        return u3.__e;
    return "function" == typeof n2.type ? b(n2) : null;
  }
  function g(n2) {
    var l3, u3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++)
        if (null != (u3 = n2.__k[l3]) && null != u3.__e) {
          n2.__e = n2.__c.base = u3.__e;
          break;
        }
      return g(n2);
    }
  }
  function m(n2) {
    (!n2.__d && (n2.__d = true) && t.push(n2) && !w.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)(w);
  }
  function w() {
    var n2, l3, u3, i3, r3, o4, e3, c3;
    for (t.sort(f); n2 = t.shift(); )
      n2.__d && (l3 = t.length, i3 = void 0, r3 = void 0, e3 = (o4 = (u3 = n2).__v).__e, (c3 = u3.__P) && (i3 = [], (r3 = h({}, o4)).__v = o4.__v + 1, L(c3, o4, r3, u3.__n, void 0 !== c3.ownerSVGElement, null != o4.__h ? [e3] : null, i3, null == e3 ? b(o4) : e3, o4.__h), M(i3, o4), o4.__e != e3 && g(o4)), t.length > l3 && t.sort(f));
    w.__r = 0;
  }
  function x(n2, l3, u3, i3, t3, r3, o4, f3, e3, a3) {
    var h4, v3, y2, d2, k3, g3, m3, w3 = i3 && i3.__k || s, x2 = w3.length;
    for (u3.__k = [], h4 = 0; h4 < l3.length; h4++)
      if (null != (d2 = u3.__k[h4] = null == (d2 = l3[h4]) || "boolean" == typeof d2 || "function" == typeof d2 ? null : "string" == typeof d2 || "number" == typeof d2 || "bigint" == typeof d2 ? p(null, d2, null, null, d2) : Array.isArray(d2) ? p(_, { children: d2 }, null, null, null) : d2.__b > 0 ? p(d2.type, d2.props, d2.key, d2.ref ? d2.ref : null, d2.__v) : d2)) {
        if (d2.__ = u3, d2.__b = u3.__b + 1, null === (y2 = w3[h4]) || y2 && d2.key == y2.key && d2.type === y2.type)
          w3[h4] = void 0;
        else
          for (v3 = 0; v3 < x2; v3++) {
            if ((y2 = w3[v3]) && d2.key == y2.key && d2.type === y2.type) {
              w3[v3] = void 0;
              break;
            }
            y2 = null;
          }
        L(n2, d2, y2 = y2 || c, t3, r3, o4, f3, e3, a3), k3 = d2.__e, (v3 = d2.ref) && y2.ref != v3 && (m3 || (m3 = []), y2.ref && m3.push(y2.ref, null, d2), m3.push(v3, d2.__c || k3, d2)), null != k3 ? (null == g3 && (g3 = k3), "function" == typeof d2.type && d2.__k === y2.__k ? d2.__d = e3 = A(d2, e3, n2) : e3 = C(n2, d2, y2, w3, k3, e3), "function" == typeof u3.type && (u3.__d = e3)) : e3 && y2.__e == e3 && e3.parentNode != n2 && (e3 = b(y2));
      }
    for (u3.__e = g3, h4 = x2; h4--; )
      null != w3[h4] && ("function" == typeof u3.type && null != w3[h4].__e && w3[h4].__e == u3.__d && (u3.__d = $(i3).nextSibling), S(w3[h4], w3[h4]));
    if (m3)
      for (h4 = 0; h4 < m3.length; h4++)
        O(m3[h4], m3[++h4], m3[++h4]);
  }
  function A(n2, l3, u3) {
    for (var i3, t3 = n2.__k, r3 = 0; t3 && r3 < t3.length; r3++)
      (i3 = t3[r3]) && (i3.__ = n2, l3 = "function" == typeof i3.type ? A(i3, l3, u3) : C(u3, i3, i3, t3, i3.__e, l3));
    return l3;
  }
  function C(n2, l3, u3, i3, t3, r3) {
    var o4, f3, e3;
    if (void 0 !== l3.__d)
      o4 = l3.__d, l3.__d = void 0;
    else if (null == u3 || t3 != r3 || null == t3.parentNode)
      n:
        if (null == r3 || r3.parentNode !== n2)
          n2.appendChild(t3), o4 = null;
        else {
          for (f3 = r3, e3 = 0; (f3 = f3.nextSibling) && e3 < i3.length; e3 += 1)
            if (f3 == t3)
              break n;
          n2.insertBefore(t3, r3), o4 = r3;
        }
    return void 0 !== o4 ? o4 : t3.nextSibling;
  }
  function $(n2) {
    var l3, u3, i3;
    if (null == n2.type || "string" == typeof n2.type)
      return n2.__e;
    if (n2.__k) {
      for (l3 = n2.__k.length - 1; l3 >= 0; l3--)
        if ((u3 = n2.__k[l3]) && (i3 = $(u3)))
          return i3;
    }
    return null;
  }
  function H(n2, l3, u3, i3, t3) {
    var r3;
    for (r3 in u3)
      "children" === r3 || "key" === r3 || r3 in l3 || T(n2, r3, null, u3[r3], i3);
    for (r3 in l3)
      t3 && "function" != typeof l3[r3] || "children" === r3 || "key" === r3 || "value" === r3 || "checked" === r3 || u3[r3] === l3[r3] || T(n2, r3, l3[r3], u3[r3], i3);
  }
  function I(n2, l3, u3) {
    "-" === l3[0] ? n2.setProperty(l3, null == u3 ? "" : u3) : n2[l3] = null == u3 ? "" : "number" != typeof u3 || a.test(l3) ? u3 : u3 + "px";
  }
  function T(n2, l3, u3, i3, t3) {
    var r3;
    n:
      if ("style" === l3)
        if ("string" == typeof u3)
          n2.style.cssText = u3;
        else {
          if ("string" == typeof i3 && (n2.style.cssText = i3 = ""), i3)
            for (l3 in i3)
              u3 && l3 in u3 || I(n2.style, l3, "");
          if (u3)
            for (l3 in u3)
              i3 && u3[l3] === i3[l3] || I(n2.style, l3, u3[l3]);
        }
      else if ("o" === l3[0] && "n" === l3[1])
        r3 = l3 !== (l3 = l3.replace(/Capture$/, "")), l3 = l3.toLowerCase() in n2 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = u3, u3 ? i3 || n2.addEventListener(l3, r3 ? z : j, r3) : n2.removeEventListener(l3, r3 ? z : j, r3);
      else if ("dangerouslySetInnerHTML" !== l3) {
        if (t3)
          l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" !== l3 && "height" !== l3 && "href" !== l3 && "list" !== l3 && "form" !== l3 && "tabIndex" !== l3 && "download" !== l3 && l3 in n2)
          try {
            n2[l3] = null == u3 ? "" : u3;
            break n;
          } catch (n3) {
          }
        "function" == typeof u3 || (null == u3 || false === u3 && "-" !== l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, u3));
      }
  }
  function j(n2) {
    return this.l[n2.type + false](l.event ? l.event(n2) : n2);
  }
  function z(n2) {
    return this.l[n2.type + true](l.event ? l.event(n2) : n2);
  }
  function L(n2, u3, i3, t3, r3, o4, f3, e3, c3) {
    var s3, a3, v3, y2, p2, d2, b3, g3, m3, w3, A2, P, C2, $2, H2, I2 = u3.type;
    if (void 0 !== u3.constructor)
      return null;
    null != i3.__h && (c3 = i3.__h, e3 = u3.__e = i3.__e, u3.__h = null, o4 = [e3]), (s3 = l.__b) && s3(u3);
    try {
      n:
        if ("function" == typeof I2) {
          if (g3 = u3.props, m3 = (s3 = I2.contextType) && t3[s3.__c], w3 = s3 ? m3 ? m3.props.value : s3.__ : t3, i3.__c ? b3 = (a3 = u3.__c = i3.__c).__ = a3.__E : ("prototype" in I2 && I2.prototype.render ? u3.__c = a3 = new I2(g3, w3) : (u3.__c = a3 = new k(g3, w3), a3.constructor = I2, a3.render = q), m3 && m3.sub(a3), a3.props = g3, a3.state || (a3.state = {}), a3.context = w3, a3.__n = t3, v3 = a3.__d = true, a3.__h = [], a3._sb = []), null == a3.__s && (a3.__s = a3.state), null != I2.getDerivedStateFromProps && (a3.__s == a3.state && (a3.__s = h({}, a3.__s)), h(a3.__s, I2.getDerivedStateFromProps(g3, a3.__s))), y2 = a3.props, p2 = a3.state, a3.__v = u3, v3)
            null == I2.getDerivedStateFromProps && null != a3.componentWillMount && a3.componentWillMount(), null != a3.componentDidMount && a3.__h.push(a3.componentDidMount);
          else {
            if (null == I2.getDerivedStateFromProps && g3 !== y2 && null != a3.componentWillReceiveProps && a3.componentWillReceiveProps(g3, w3), !a3.__e && null != a3.shouldComponentUpdate && false === a3.shouldComponentUpdate(g3, a3.__s, w3) || u3.__v === i3.__v) {
              for (u3.__v !== i3.__v && (a3.props = g3, a3.state = a3.__s, a3.__d = false), a3.__e = false, u3.__e = i3.__e, u3.__k = i3.__k, u3.__k.forEach(function(n3) {
                n3 && (n3.__ = u3);
              }), A2 = 0; A2 < a3._sb.length; A2++)
                a3.__h.push(a3._sb[A2]);
              a3._sb = [], a3.__h.length && f3.push(a3);
              break n;
            }
            null != a3.componentWillUpdate && a3.componentWillUpdate(g3, a3.__s, w3), null != a3.componentDidUpdate && a3.__h.push(function() {
              a3.componentDidUpdate(y2, p2, d2);
            });
          }
          if (a3.context = w3, a3.props = g3, a3.__P = n2, P = l.__r, C2 = 0, "prototype" in I2 && I2.prototype.render) {
            for (a3.state = a3.__s, a3.__d = false, P && P(u3), s3 = a3.render(a3.props, a3.state, a3.context), $2 = 0; $2 < a3._sb.length; $2++)
              a3.__h.push(a3._sb[$2]);
            a3._sb = [];
          } else
            do {
              a3.__d = false, P && P(u3), s3 = a3.render(a3.props, a3.state, a3.context), a3.state = a3.__s;
            } while (a3.__d && ++C2 < 25);
          a3.state = a3.__s, null != a3.getChildContext && (t3 = h(h({}, t3), a3.getChildContext())), v3 || null == a3.getSnapshotBeforeUpdate || (d2 = a3.getSnapshotBeforeUpdate(y2, p2)), H2 = null != s3 && s3.type === _ && null == s3.key ? s3.props.children : s3, x(n2, Array.isArray(H2) ? H2 : [H2], u3, i3, t3, r3, o4, f3, e3, c3), a3.base = u3.__e, u3.__h = null, a3.__h.length && f3.push(a3), b3 && (a3.__E = a3.__ = null), a3.__e = false;
        } else
          null == o4 && u3.__v === i3.__v ? (u3.__k = i3.__k, u3.__e = i3.__e) : u3.__e = N(i3.__e, u3, i3, t3, r3, o4, f3, c3);
      (s3 = l.diffed) && s3(u3);
    } catch (n3) {
      u3.__v = null, (c3 || null != o4) && (u3.__e = e3, u3.__h = !!c3, o4[o4.indexOf(e3)] = null), l.__e(n3, u3, i3);
    }
  }
  function M(n2, u3) {
    l.__c && l.__c(u3, n2), n2.some(function(u4) {
      try {
        n2 = u4.__h, u4.__h = [], n2.some(function(n3) {
          n3.call(u4);
        });
      } catch (n3) {
        l.__e(n3, u4.__v);
      }
    });
  }
  function N(l3, u3, i3, t3, r3, o4, f3, e3) {
    var s3, a3, h4, y2 = i3.props, p2 = u3.props, d2 = u3.type, _3 = 0;
    if ("svg" === d2 && (r3 = true), null != o4) {
      for (; _3 < o4.length; _3++)
        if ((s3 = o4[_3]) && "setAttribute" in s3 == !!d2 && (d2 ? s3.localName === d2 : 3 === s3.nodeType)) {
          l3 = s3, o4[_3] = null;
          break;
        }
    }
    if (null == l3) {
      if (null === d2)
        return document.createTextNode(p2);
      l3 = r3 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), o4 = null, e3 = false;
    }
    if (null === d2)
      y2 === p2 || e3 && l3.data === p2 || (l3.data = p2);
    else {
      if (o4 = o4 && n.call(l3.childNodes), a3 = (y2 = i3.props || c).dangerouslySetInnerHTML, h4 = p2.dangerouslySetInnerHTML, !e3) {
        if (null != o4)
          for (y2 = {}, _3 = 0; _3 < l3.attributes.length; _3++)
            y2[l3.attributes[_3].name] = l3.attributes[_3].value;
        (h4 || a3) && (h4 && (a3 && h4.__html == a3.__html || h4.__html === l3.innerHTML) || (l3.innerHTML = h4 && h4.__html || ""));
      }
      if (H(l3, p2, y2, r3, e3), h4)
        u3.__k = [];
      else if (_3 = u3.props.children, x(l3, Array.isArray(_3) ? _3 : [_3], u3, i3, t3, r3 && "foreignObject" !== d2, o4, f3, o4 ? o4[0] : i3.__k && b(i3, 0), e3), null != o4)
        for (_3 = o4.length; _3--; )
          null != o4[_3] && v(o4[_3]);
      e3 || ("value" in p2 && void 0 !== (_3 = p2.value) && (_3 !== l3.value || "progress" === d2 && !_3 || "option" === d2 && _3 !== y2.value) && T(l3, "value", _3, y2.value, false), "checked" in p2 && void 0 !== (_3 = p2.checked) && _3 !== l3.checked && T(l3, "checked", _3, y2.checked, false));
    }
    return l3;
  }
  function O(n2, u3, i3) {
    try {
      "function" == typeof n2 ? n2(u3) : n2.current = u3;
    } catch (n3) {
      l.__e(n3, i3);
    }
  }
  function S(n2, u3, i3) {
    var t3, r3;
    if (l.unmount && l.unmount(n2), (t3 = n2.ref) && (t3.current && t3.current !== n2.__e || O(t3, null, u3)), null != (t3 = n2.__c)) {
      if (t3.componentWillUnmount)
        try {
          t3.componentWillUnmount();
        } catch (n3) {
          l.__e(n3, u3);
        }
      t3.base = t3.__P = null, n2.__c = void 0;
    }
    if (t3 = n2.__k)
      for (r3 = 0; r3 < t3.length; r3++)
        t3[r3] && S(t3[r3], u3, i3 || "function" != typeof n2.type);
    i3 || null == n2.__e || v(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
  }
  function q(n2, l3, u3) {
    return this.constructor(n2, u3);
  }
  function B(u3, i3, t3) {
    var r3, o4, f3;
    l.__ && l.__(u3, i3), o4 = (r3 = "function" == typeof t3) ? null : t3 && t3.__k || i3.__k, f3 = [], L(i3, u3 = (!r3 && t3 || i3).__k = y(_, null, [u3]), o4 || c, c, void 0 !== i3.ownerSVGElement, !r3 && t3 ? [t3] : o4 ? null : i3.firstChild ? n.call(i3.childNodes) : null, f3, !r3 && t3 ? t3 : o4 ? o4.__e : i3.firstChild, r3), M(f3, u3);
  }
  n = s.slice, l = { __e: function(n2, l3, u3, i3) {
    for (var t3, r3, o4; l3 = l3.__; )
      if ((t3 = l3.__c) && !t3.__)
        try {
          if ((r3 = t3.constructor) && null != r3.getDerivedStateFromError && (t3.setState(r3.getDerivedStateFromError(n2)), o4 = t3.__d), null != t3.componentDidCatch && (t3.componentDidCatch(n2, i3 || {}), o4 = t3.__d), o4)
            return t3.__E = t3;
        } catch (l4) {
          n2 = l4;
        }
    throw n2;
  } }, u = 0, i = function(n2) {
    return null != n2 && void 0 === n2.constructor;
  }, k.prototype.setState = function(n2, l3) {
    var u3;
    u3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof n2 && (n2 = n2(h({}, u3), this.props)), n2 && h(u3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), m(this));
  }, k.prototype.forceUpdate = function(n2) {
    this.__v && (this.__e = true, n2 && this.__h.push(n2), m(this));
  }, k.prototype.render = _, t = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f = function(n2, l3) {
    return n2.__v.__b - l3.__v.__b;
  }, w.__r = 0, e = 0;

  // node_modules/preact/hooks/dist/hooks.module.js
  var t2;
  var r2;
  var u2;
  var i2;
  var o2 = 0;
  var f2 = [];
  var c2 = [];
  var e2 = l.__b;
  var a2 = l.__r;
  var v2 = l.diffed;
  var l2 = l.__c;
  var m2 = l.unmount;
  function d(t3, u3) {
    l.__h && l.__h(r2, t3, o2 || u3), o2 = 0;
    var i3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return t3 >= i3.__.length && i3.__.push({ __V: c2 }), i3.__[t3];
  }
  function h2(n2) {
    return o2 = 1, s2(B2, n2);
  }
  function s2(n2, u3, i3) {
    var o4 = d(t2++, 2);
    if (o4.t = n2, !o4.__c && (o4.__ = [i3 ? i3(u3) : B2(void 0, u3), function(n3) {
      var t3 = o4.__N ? o4.__N[0] : o4.__[0], r3 = o4.t(t3, n3);
      t3 !== r3 && (o4.__N = [r3, o4.__[1]], o4.__c.setState({}));
    }], o4.__c = r2, !r2.u)) {
      var f3 = function(n3, t3, r3) {
        if (!o4.__c.__H)
          return true;
        var u4 = o4.__c.__H.__.filter(function(n4) {
          return n4.__c;
        });
        if (u4.every(function(n4) {
          return !n4.__N;
        }))
          return !c3 || c3.call(this, n3, t3, r3);
        var i4 = false;
        return u4.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), !(!i4 && o4.__c.props === n3) && (!c3 || c3.call(this, n3, t3, r3));
      };
      r2.u = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u4 = c3;
          c3 = void 0, f3(n3, t3, r3), c3 = u4;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f3;
    }
    return o4.__N || o4.__;
  }
  function b2() {
    for (var t3; t3 = f2.shift(); )
      if (t3.__P && t3.__H)
        try {
          t3.__H.__h.forEach(k2), t3.__H.__h.forEach(w2), t3.__H.__h = [];
        } catch (r3) {
          t3.__H.__h = [], l.__e(r3, t3.__v);
        }
  }
  l.__b = function(n2) {
    r2 = null, e2 && e2(n2);
  }, l.__r = function(n2) {
    a2 && a2(n2), t2 = 0;
    var i3 = (r2 = n2.__c).__H;
    i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
      n3.__N && (n3.__ = n3.__N), n3.__V = c2, n3.__N = n3.i = void 0;
    })) : (i3.__h.forEach(k2), i3.__h.forEach(w2), i3.__h = [])), u2 = r2;
  }, l.diffed = function(t3) {
    v2 && v2(t3);
    var o4 = t3.__c;
    o4 && o4.__H && (o4.__H.__h.length && (1 !== f2.push(o4) && i2 === l.requestAnimationFrame || ((i2 = l.requestAnimationFrame) || j2)(b2)), o4.__H.__.forEach(function(n2) {
      n2.i && (n2.__H = n2.i), n2.__V !== c2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c2;
    })), u2 = r2 = null;
  }, l.__c = function(t3, r3) {
    r3.some(function(t4) {
      try {
        t4.__h.forEach(k2), t4.__h = t4.__h.filter(function(n2) {
          return !n2.__ || w2(n2);
        });
      } catch (u3) {
        r3.some(function(n2) {
          n2.__h && (n2.__h = []);
        }), r3 = [], l.__e(u3, t4.__v);
      }
    }), l2 && l2(t3, r3);
  }, l.unmount = function(t3) {
    m2 && m2(t3);
    var r3, u3 = t3.__c;
    u3 && u3.__H && (u3.__H.__.forEach(function(n2) {
      try {
        k2(n2);
      } catch (n3) {
        r3 = n3;
      }
    }), u3.__H = void 0, r3 && l.__e(r3, u3.__v));
  };
  var g2 = "function" == typeof requestAnimationFrame;
  function j2(n2) {
    var t3, r3 = function() {
      clearTimeout(u3), g2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u3 = setTimeout(r3, 100);
    g2 && (t3 = requestAnimationFrame(r3));
  }
  function k2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function w2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function B2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }

  // node_modules/preact/jsx-runtime/dist/jsxRuntime.module.js
  var _2 = 0;
  function o3(o4, e3, n2, t3, f3, l3) {
    var s3, u3, a3 = {};
    for (u3 in e3)
      "ref" == u3 ? s3 = e3[u3] : a3[u3] = e3[u3];
    var i3 = { type: o4, props: a3, key: n2, ref: s3, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: --_2, __source: f3, __self: l3 };
    if ("function" == typeof o4 && (s3 = o4.defaultProps))
      for (u3 in s3)
        void 0 === a3[u3] && (a3[u3] = s3[u3]);
    return l.vnode && l.vnode(i3), i3;
  }

  // src/App.tsx
  var App = () => {
    const [value, setValue] = h2(0);
    return /* @__PURE__ */ o3("div", { children: [
      /* @__PURE__ */ o3("div", { children: [
        "Counter: ",
        value
      ] }),
      /* @__PURE__ */ o3("button", { onClick: () => setValue(value + 1), children: "Increment" }),
      /* @__PURE__ */ o3("button", { onClick: () => setValue(value - 1), children: "Decrement" })
    ] });
  };

  // src/index.tsx
  new EventSource("/esbuild").addEventListener("change", () => location.reload());
  B(/* @__PURE__ */ o3(App, {}), document.body);
})();
