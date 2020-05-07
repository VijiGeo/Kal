(function () {/*

  Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  
   Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  
  Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
  This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
  The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
  The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
  Code distributed by Google as part of the polymer project is also
  subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
  */
  'use strict'; var hb = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
  (function () {
    function k() { var a = this; this.m = {}; this.g = document.documentElement; var b = new ta; b.rules = []; this.h = r.set(this.g, new r(b)); this.i = !1; this.b = this.a = null; ib(function () { a.c() }) } function C() { this.customStyles = []; this.enqueued = !1 } function jb() { } function aa(a) { this.cache = {}; this.c = void 0 === a ? 100 : a } function p() { } function r(a, b, c, d, e) { this.D = a || null; this.b = b || null; this.ia = c || []; this.L = null; this.T = e || ""; this.a = this.w = this.H = null } function q() { } function ta() {
    this.end = this.start = 0; this.rules = this.parent =
      this.previous = null; this.cssText = this.parsedCssText = ""; this.atRule = !1; this.type = 0; this.parsedSelector = this.selector = this.keyframesName = ""
    } function Pc(a) {
      function b(b, c) {
        Object.defineProperty(b, "innerHTML", {
          enumerable: c.enumerable, configurable: !0, get: c.get, set: function (b) {
            var d = this, e = void 0; n(this) && (e = [], K(this, function (a) { a !== d && e.push(a) })); c.set.call(this, b); if (e) for (var f = 0; f < e.length; f++) { var g = e[f]; 1 === g.__CE_state && a.disconnectedCallback(g) } this.ownerDocument.__CE_hasRegistry ? a.c(this) : a.j(this);
            return b
          }
        })
      } function c(b, c) { x(b, "insertAdjacentElement", function (b, d) { var e = n(d); b = c.call(this, b, d); e && a.a(d); n(b) && a.b(d); return b }) } kb ? x(Element.prototype, "attachShadow", function (a) { return this.__CE_shadowRoot = a = kb.call(this, a) }) : console.warn("Custom Elements: `Element#attachShadow` was not patched."); if (ua && ua.get) b(Element.prototype, ua); else if (va && va.get) b(HTMLElement.prototype, va); else {
        var d = wa.call(document, "div"); a.o(function (a) {
          b(a, {
            enumerable: !0, configurable: !0, get: function () {
              return lb.call(this,
                !0).innerHTML
            }, set: function (a) { var b = "template" === this.localName ? this.content : this; for (d.innerHTML = a; 0 < b.childNodes.length;)xa.call(b, b.childNodes[0]); for (; 0 < d.childNodes.length;)ca.call(b, d.childNodes[0]) }
          })
        })
      } x(Element.prototype, "setAttribute", function (b, c) { if (1 !== this.__CE_state) return mb.call(this, b, c); var d = ya.call(this, b); mb.call(this, b, c); c = ya.call(this, b); a.attributeChangedCallback(this, b, d, c, null) }); x(Element.prototype, "setAttributeNS", function (b, c, d) {
        if (1 !== this.__CE_state) return nb.call(this,
          b, c, d); var e = da.call(this, b, c); nb.call(this, b, c, d); d = da.call(this, b, c); a.attributeChangedCallback(this, c, e, d, b)
      }); x(Element.prototype, "removeAttribute", function (b) { if (1 !== this.__CE_state) return ob.call(this, b); var c = ya.call(this, b); ob.call(this, b); null !== c && a.attributeChangedCallback(this, b, c, null, null) }); x(Element.prototype, "removeAttributeNS", function (b, c) {
        if (1 !== this.__CE_state) return pb.call(this, b, c); var d = da.call(this, b, c); pb.call(this, b, c); var e = da.call(this, b, c); d !== e && a.attributeChangedCallback(this,
          c, d, e, b)
      }); qb ? c(HTMLElement.prototype, qb) : rb ? c(Element.prototype, rb) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched."); sb(a, Element.prototype, { xa: Qc, append: Rc }); Sc(a, { Qa: Tc, Pa: Uc, Za: Vc, remove: Wc })
    } function Sc(a, b) {
      var c = Element.prototype; c.before = function (c) {
        for (var d = [], f = 0; f < arguments.length; ++f)d[f - 0] = arguments[f]; f = d.filter(function (a) { return a instanceof Node && n(a) }); b.Qa.apply(this, d); for (var g = 0; g < f.length; g++)a.a(f[g]); if (n(this)) for (f = 0; f < d.length; f++)g = d[f],
          g instanceof Element && a.b(g)
      }; c.after = function (c) { for (var d = [], f = 0; f < arguments.length; ++f)d[f - 0] = arguments[f]; f = d.filter(function (a) { return a instanceof Node && n(a) }); b.Pa.apply(this, d); for (var g = 0; g < f.length; g++)a.a(f[g]); if (n(this)) for (f = 0; f < d.length; f++)g = d[f], g instanceof Element && a.b(g) }; c.replaceWith = function (c) {
        for (var d = [], f = 0; f < arguments.length; ++f)d[f - 0] = arguments[f]; f = d.filter(function (a) { return a instanceof Node && n(a) }); var g = n(this); b.Za.apply(this, d); for (var h = 0; h < f.length; h++)a.a(f[h]);
        if (g) for (a.a(this), f = 0; f < d.length; f++)g = d[f], g instanceof Element && a.b(g)
      }; c.remove = function () { var c = n(this); b.remove.call(this); c && a.a(this) }
    } function Xc(a) {
      function b(b, d) { Object.defineProperty(b, "textContent", { enumerable: d.enumerable, configurable: !0, get: d.get, set: function (b) { if (this.nodeType === Node.TEXT_NODE) d.set.call(this, b); else { var c = void 0; if (this.firstChild) { var e = this.childNodes, h = e.length; if (0 < h && n(this)) { c = Array(h); for (var m = 0; m < h; m++)c[m] = e[m] } } d.set.call(this, b); if (c) for (b = 0; b < c.length; b++)a.a(c[b]) } } }) }
      x(Node.prototype, "insertBefore", function (b, d) { if (b instanceof DocumentFragment) { var c = Array.prototype.slice.apply(b.childNodes); b = tb.call(this, b, d); if (n(this)) for (d = 0; d < c.length; d++)a.b(c[d]); return b } c = n(b); d = tb.call(this, b, d); c && a.a(b); n(this) && a.b(b); return d }); x(Node.prototype, "appendChild", function (b) {
        if (b instanceof DocumentFragment) { var c = Array.prototype.slice.apply(b.childNodes); b = ca.call(this, b); if (n(this)) for (var e = 0; e < c.length; e++)a.b(c[e]); return b } c = n(b); e = ca.call(this, b); c && a.a(b); n(this) &&
          a.b(b); return e
      }); x(Node.prototype, "cloneNode", function (b) { b = lb.call(this, b); this.ownerDocument.__CE_hasRegistry ? a.c(b) : a.j(b); return b }); x(Node.prototype, "removeChild", function (b) { var c = n(b), e = xa.call(this, b); c && a.a(b); return e }); x(Node.prototype, "replaceChild", function (b, d) {
        if (b instanceof DocumentFragment) { var c = Array.prototype.slice.apply(b.childNodes); b = ub.call(this, b, d); if (n(this)) for (a.a(d), d = 0; d < c.length; d++)a.b(c[d]); return b } c = n(b); var f = ub.call(this, b, d), g = n(this); g && a.a(d); c && a.a(b); g &&
          a.b(b); return f
      }); za && za.get ? b(Node.prototype, za) : a.o(function (a) { b(a, { enumerable: !0, configurable: !0, get: function () { for (var a = [], b = 0; b < this.childNodes.length; b++)a.push(this.childNodes[b].textContent); return a.join("") }, set: function (a) { for (; this.firstChild;)xa.call(this, this.firstChild); ca.call(this, document.createTextNode(a)) } }) })
    } function Yc(a) {
      x(Document.prototype, "createElement", function (b) { if (this.__CE_hasRegistry) { var c = a.f(b); if (c) return new c.constructor } b = wa.call(this, b); a.g(b); return b });
      x(Document.prototype, "importNode", function (b, c) { b = Zc.call(this, b, c); this.__CE_hasRegistry ? a.c(b) : a.j(b); return b }); x(Document.prototype, "createElementNS", function (b, c) { if (this.__CE_hasRegistry && (null === b || "http://www.w3.org/1999/xhtml" === b)) { var d = a.f(c); if (d) return new d.constructor } b = $c.call(this, b, c); a.g(b); return b }); sb(a, Document.prototype, { xa: ad, append: bd })
    } function sb(a, b, c) {
    b.prepend = function (b) {
      for (var d = [], f = 0; f < arguments.length; ++f)d[f - 0] = arguments[f]; f = d.filter(function (a) {
        return a instanceof
          Node && n(a)
      }); c.xa.apply(this, d); for (var g = 0; g < f.length; g++)a.a(f[g]); if (n(this)) for (f = 0; f < d.length; f++)g = d[f], g instanceof Element && a.b(g)
    }; b.append = function (b) { for (var d = [], f = 0; f < arguments.length; ++f)d[f - 0] = arguments[f]; f = d.filter(function (a) { return a instanceof Node && n(a) }); c.append.apply(this, d); for (var g = 0; g < f.length; g++)a.a(f[g]); if (n(this)) for (f = 0; f < d.length; f++)g = d[f], g instanceof Element && a.b(g) }
    } function cd(a) {
    window.HTMLElement = function () {
      function b() {
        var b = this.constructor, d = a.A(b); if (!d) throw Error("The custom element being constructed was not registered with `customElements`.");
        var e = d.constructionStack; if (!e.length) return e = wa.call(document, d.localName), Object.setPrototypeOf(e, b.prototype), e.__CE_state = 1, e.__CE_definition = d, a.g(e), e; d = e.length - 1; var f = e[d]; if (f === vb) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times."); e[d] = vb; Object.setPrototypeOf(f, b.prototype); a.g(f); return f
      } b.prototype = dd.prototype; return b
    }()
    } function v(a) {
    this.f = !1; this.a = a; this.h = new Map; this.g = function (a) { return a() }; this.b = !1; this.c =
      []; this.i = new Aa(a, document)
    } function wb() { var a = this; this.b = this.a = void 0; this.f = new Promise(function (b) { a.b = b; a.a && b(a.a) }) } function Aa(a, b) { this.b = a; this.a = b; this.K = void 0; this.b.c(this.a); "loading" === this.a.readyState && (this.K = new MutationObserver(this.f.bind(this)), this.K.observe(this.a, { childList: !0, subtree: !0 })) } function y() { this.m = new Map; this.l = new Map; this.i = []; this.h = !1 } function l(a, b, c) {
      if (a !== xb) throw new TypeError("Illegal constructor"); a = document.createDocumentFragment(); a.__proto__ =
        l.prototype; a.B(b, c); return a
    } function ea(a) { if (!a.__shady || void 0 === a.__shady.firstChild) { a.__shady = a.__shady || {}; a.__shady.firstChild = Ba(a); a.__shady.lastChild = Ca(a); yb(a); for (var b = a.__shady.childNodes = O(a), c = 0, d; c < b.length && (d = b[c]); c++)d.__shady = d.__shady || {}, d.__shady.parentNode = a, d.__shady.nextSibling = b[c + 1] || null, d.__shady.previousSibling = b[c - 1] || null, zb(d) } } function ed(a) { var b = a && a.K; b && (b.W.delete(a.Ka), b.W.size || (a.La.__shady.R = null)) } function fd(a, b) {
    a.__shady = a.__shady || {}; a.__shady.R ||
      (a.__shady.R = new fa); a.__shady.R.W.add(b); var c = a.__shady.R; return { Ka: b, K: c, La: a, takeRecords: function () { return c.takeRecords() } }
    } function fa() { this.a = !1; this.addedNodes = []; this.removedNodes = []; this.W = new Set } function P(a) { return a.__shady && void 0 !== a.__shady.firstChild } function E(a) { return "ShadyRoot" === a.Ga } function U(a) { a = a.getRootNode(); if (E(a)) return a } function Da(a, b) {
      if (a && b) for (var c = Object.getOwnPropertyNames(b), d = 0, e; d < c.length && (e = c[d]); d++) {
        var f = Object.getOwnPropertyDescriptor(b, e); f &&
          Object.defineProperty(a, e, f)
      }
    } function Ea(a, b) { for (var c = [], d = 1; d < arguments.length; ++d)c[d - 1] = arguments[d]; for (d = 0; d < c.length; d++)Da(a, c[d]); return a } function gd(a, b) { for (var c in b) a[c] = b[c] } function Ab(a) { Fa.push(a); Ga.textContent = Bb++ } function Cb(a) { Ha || (Ha = !0, Ab(ha)); V.push(a) } function ha() { Ha = !1; for (var a = !!V.length; V.length;)V.shift()(); return a } function hd(a, b) {
      var c = b.getRootNode(); return a.map(function (a) {
        var b = c === a.target.getRootNode(); if (b && a.addedNodes) {
          if (b = Array.from(a.addedNodes).filter(function (a) {
            return c ===
              a.getRootNode()
          }), b.length) return a = Object.create(a), Object.defineProperty(a, "addedNodes", { value: b, configurable: !0 }), a
        } else if (b) return a
      }).filter(function (a) { return a })
    } function Db(a) { switch (a) { case "&": return "&amp;"; case "<": return "&lt;"; case ">": return "&gt;"; case '"': return "&quot;"; case "\u00a0": return "&nbsp;" } } function Eb(a) { for (var b = {}, c = 0; c < a.length; c++)b[a[c]] = !0; return b } function Ia(a, b) {
    "template" === a.localName && (a = a.content); for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, g; e < f && (g = d[e]); e++) {
      a: {
        var h =
          g; var m = a; var k = b; switch (h.nodeType) { case Node.ELEMENT_NODE: for (var ba = h.localName, l = "<" + ba, n = h.attributes, p = 0; m = n[p]; p++)l += " " + m.name + '="' + m.value.replace(id, Db) + '"'; l += ">"; h = jd[ba] ? l : l + Ia(h, k) + "</" + ba + ">"; break a; case Node.TEXT_NODE: h = h.data; h = m && kd[m.localName] ? h : h.replace(ld, Db); break a; case Node.COMMENT_NODE: h = "\x3c!--" + h.data + "--\x3e"; break a; default: throw window.console.error(h), Error("not implemented"); }
      } c += h
    } return c
    } function Q(a) { z.currentNode = a; return z.parentNode() } function Ba(a) {
    z.currentNode =
      a; return z.firstChild()
    } function Ca(a) { z.currentNode = a; return z.lastChild() } function Fb(a) { z.currentNode = a; return z.previousSibling() } function Gb(a) { z.currentNode = a; return z.nextSibling() } function O(a) { var b = []; z.currentNode = a; for (a = z.firstChild(); a;)b.push(a), a = z.nextSibling(); return b } function Hb(a) { A.currentNode = a; return A.parentNode() } function Ib(a) { A.currentNode = a; return A.firstChild() } function Jb(a) { A.currentNode = a; return A.lastChild() } function Kb(a) { A.currentNode = a; return A.previousSibling() }
    function Lb(a) { A.currentNode = a; return A.nextSibling() } function Mb(a) { var b = []; A.currentNode = a; for (a = A.firstChild(); a;)b.push(a), a = A.nextSibling(); return b } function Nb(a) { return Ia(a, function (a) { return O(a) }) } function Ob(a) { switch (a.nodeType) { case Node.ELEMENT_NODE: case Node.DOCUMENT_FRAGMENT_NODE: a = document.createTreeWalker(a, NodeFilter.SHOW_TEXT, null, !1); for (var b = "", c; c = a.nextNode();)b += c.nodeValue; return b; default: return a.nodeValue } } function H(a, b, c) {
      for (var d in b) {
        var e = Object.getOwnPropertyDescriptor(a,
          d); e && e.configurable || !e && c ? Object.defineProperty(a, d, b[d]) : c && console.warn("Could not define", d, "on", a)
      }
    } function L(a) { H(a, Pb); H(a, Ja); H(a, Ka) } function Qb(a, b, c) {
      zb(a); c = c || null; a.__shady = a.__shady || {}; b.__shady = b.__shady || {}; c && (c.__shady = c.__shady || {}); a.__shady.previousSibling = c ? c.__shady.previousSibling : b.lastChild; var d = a.__shady.previousSibling; d && d.__shady && (d.__shady.nextSibling = a); (d = a.__shady.nextSibling = c) && d.__shady && (d.__shady.previousSibling = a); a.__shady.parentNode = b; c ? c === b.__shady.firstChild &&
        (b.__shady.firstChild = a) : (b.__shady.lastChild = a, b.__shady.firstChild || (b.__shady.firstChild = a)); b.__shady.childNodes = null
    } function La(a, b, c) {
      if (b === a) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent."); if (c) { var d = c.__shady && c.__shady.parentNode; if (void 0 !== d && d !== a || void 0 === d && Q(c) !== a) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node."); } if (c === b) return b; b.parentNode &&
        Ma(b.parentNode, b); d = U(a); var e; if (e = d) a: { if (!b.__noInsertionPoint) { var f; "slot" === b.localName ? f = [b] : b.querySelectorAll && (f = b.querySelectorAll("slot")); if (f && f.length) { e = f; break a } } e = void 0 } f = e; d && ("slot" === a.localName || f) && d.J(); if (P(a)) {
          e = c; yb(a); a.__shady = a.__shady || {}; void 0 !== a.__shady.firstChild && (a.__shady.childNodes = null); if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            for (var g = b.childNodes, h = 0; h < g.length; h++)Qb(g[h], a, e); b.__shady = b.__shady || {}; e = void 0 !== b.__shady.firstChild ? null : void 0; b.__shady.firstChild =
              b.__shady.lastChild = e; b.__shady.childNodes = e
          } else Qb(b, a, e); if (Na(a)) { a.__shady.root.J(); var m = !0 } else a.__shady.root && (m = !0)
        } m || (m = E(a) ? a.host : a, c ? (c = Rb(c), Oa.call(m, b, c)) : Sb.call(m, b)); Tb(a, b); f && d.Ja(f); return b
    } function Ma(a, b) {
      if (b.parentNode !== a) throw Error("The node to be removed is not a child of this node: " + b); var c = U(b); if (P(a)) {
      b.__shady = b.__shady || {}; a.__shady = a.__shady || {}; b === a.__shady.firstChild && (a.__shady.firstChild = b.__shady.nextSibling); b === a.__shady.lastChild && (a.__shady.lastChild =
        b.__shady.previousSibling); var d = b.__shady.previousSibling; var e = b.__shady.nextSibling; d && (d.__shady = d.__shady || {}, d.__shady.nextSibling = e); e && (e.__shady = e.__shady || {}, e.__shady.previousSibling = d); b.__shady.parentNode = b.__shady.previousSibling = b.__shady.nextSibling = void 0; void 0 !== a.__shady.childNodes && (a.__shady.childNodes = null); if (Na(a)) { a.__shady.root.J(); var f = !0 }
      } Ub(b); c && ((e = a && "slot" === a.localName) && (f = !0), ((d = c.Ma(b)) || e) && c.J()); f || (f = E(a) ? a.host : a, (!a.__shady.root && "slot" !== b.localName ||
        f === Q(b)) && W.call(f, b)); Tb(a, null, b); return b
    } function Ub(a) { if (a.__shady && void 0 !== a.__shady.ja) for (var b = a.childNodes, c = 0, d = b.length, e; c < d && (e = b[c]); c++)Ub(e); a.__shady && (a.__shady.ja = void 0) } function Rb(a) { var b = a; a && "slot" === a.localName && (b = (b = a.__shady && a.__shady.O) && b.length ? b[0] : Rb(a.nextSibling)); return b } function Na(a) { return (a = a && a.__shady && a.__shady.root) && a.oa() } function Vb(a, b) {
      "slot" === b ? (a = a.parentNode, Na(a) && a.__shady.root.J()) : "slot" === a.localName && "name" === b && (b = U(a)) && (b.Oa(a),
        b.J())
    } function Tb(a, b, c) { if (a = a.__shady && a.__shady.R) b && a.addedNodes.push(b), c && a.removedNodes.push(c), a.ab() } function Wb(a) { if (a && a.nodeType) { a.__shady = a.__shady || {}; var b = a.__shady.ja; void 0 === b && (E(a) ? b = a : b = (b = a.parentNode) ? Wb(b) : a, document.documentElement.contains(a) && (a.__shady.ja = b)); return b } } function ia(a, b, c) { var d = []; Xb(a.childNodes, b, c, d); return d } function Xb(a, b, c, d) {
      for (var e = 0, f = a.length, g; e < f && (g = a[e]); e++) {
        var h; if (h = g.nodeType === Node.ELEMENT_NODE) {
          h = g; var m = b, k = c, l = d, n = m(h); n && l.push(h);
          k && k(n) ? h = n : (Xb(h.childNodes, m, k, l), h = void 0)
        } if (h) break
      }
    } function Yb(a) { a = a.getRootNode(); E(a) && a.qa() } function Zb(a, b, c) { ja || (ja = window.ShadyCSS && window.ShadyCSS.ScopingShim); ja && "class" === b ? ja.setElementClass(a, c) : ($b.call(a, b, c), Vb(a, b)) } function ac(a, b) { if (a.ownerDocument !== document) return Pa.call(document, a, b); var c = Pa.call(document, a, !1); if (b) { a = a.childNodes; b = 0; for (var d; b < a.length; b++)d = ac(a[b], !0), c.appendChild(d) } return c } function Qa(a, b) {
      var c = [], d = a; for (a = a === window ? window : a.getRootNode(); d;)c.push(d),
        d = d.assignedSlot ? d.assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d.host : d.parentNode; c[c.length - 1] === document && c.push(window); return c
    } function bc(a, b) { if (!E) return a; a = Qa(a, !0); for (var c = 0, d, e, f, g; c < b.length; c++)if (d = b[c], f = d === window ? window : d.getRootNode(), f !== e && (g = a.indexOf(f), e = f), !E(f) || -1 < g) return d } function Ra(a) { function b(b, d) { b = new a(b, d); b.da = d && !!d.composed; return b } gd(b, a); b.prototype = a.prototype; return b } function cc(a, b, c) {
      if (c = b.__handlers && b.__handlers[a.type] &&
        b.__handlers[a.type][c]) for (var d = 0, e; (e = c[d]) && a.target !== a.relatedTarget && (e.call(b, a), !a.Ea); d++);
    } function md(a) {
      var b = a.composedPath(); Object.defineProperty(a, "currentTarget", { get: function () { return d }, configurable: !0 }); for (var c = b.length - 1; 0 <= c; c--) { var d = b[c]; cc(a, d, "capture"); if (a.ea) return } Object.defineProperty(a, "eventPhase", { get: function () { return Event.AT_TARGET } }); var e; for (c = 0; c < b.length; c++) {
        d = b[c]; var f = d.__shady && d.__shady.root; if (!c || f && f === e) if (cc(a, d, "bubble"), d !== window && (e = d.getRootNode()),
          a.ea) break
      }
    } function dc(a, b, c, d, e, f) { for (var g = 0; g < a.length; g++) { var h = a[g], m = h.type, k = h.capture, l = h.once, n = h.passive; if (b === h.node && c === m && d === k && e === l && f === n) return g } return -1 } function ec(a, b, c) {
      if (b) {
        if ("object" === typeof c) { var d = !!c.capture; var e = !!c.once; var f = !!c.passive } else d = !!c, f = e = !1; var g = c && c.fa || this, h = b.U; if (h) { if (-1 < dc(h, g, a, d, e, f)) return } else b.U = []; h = function (d) {
          e && this.removeEventListener(a, b, c); d.__target || fc(d); if (g !== this) {
            var f = Object.getOwnPropertyDescriptor(d, "currentTarget");
            Object.defineProperty(d, "currentTarget", { get: function () { return g }, configurable: !0 })
          } if (d.composed || -1 < d.composedPath().indexOf(g)) if (d.target === d.relatedTarget) d.eventPhase === Event.BUBBLING_PHASE && d.stopImmediatePropagation(); else if (d.eventPhase === Event.CAPTURING_PHASE || d.bubbles || d.target === g) { var h = "object" === typeof b && b.handleEvent ? b.handleEvent(d) : b.call(g, d); g !== this && (f ? (Object.defineProperty(d, "currentTarget", f), f = null) : delete d.currentTarget); return h }
        }; b.U.push({
          node: this, type: a, capture: d,
          once: e, passive: f, eb: h
        }); Sa[a] ? (this.__handlers = this.__handlers || {}, this.__handlers[a] = this.__handlers[a] || { capture: [], bubble: [] }, this.__handlers[a][d ? "capture" : "bubble"].push(h)) : (this instanceof Window ? gc : hc).call(this, a, h, c)
      }
    } function ic(a, b, c) {
      if (b) {
        if ("object" === typeof c) { var d = !!c.capture; var e = !!c.once; var f = !!c.passive } else d = !!c, f = e = !1; var g = c && c.fa || this, h = void 0; var m = null; try { m = b.U } catch (Xd) { } m && (e = dc(m, g, a, d, e, f), -1 < e && (h = m.splice(e, 1)[0].eb, m.length || (b.U = void 0))); (this instanceof Window ?
          jc : kc).call(this, a, h || b, c); h && Sa[a] && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][d ? "capture" : "bubble"], h = a.indexOf(h), -1 < h && a.splice(h, 1))
      }
    } function nd() { for (var a in Sa) window.addEventListener(a, function (a) { a.__target || (fc(a), md(a)) }, !0) } function fc(a) { a.__target = a.target; a.ma = a.relatedTarget; if (B.P) { var b = lc, c = Object.getPrototypeOf(a); if (!c.hasOwnProperty("__patchProto")) { var d = Object.create(c); d.gb = c; Da(d, b); c.__patchProto = d } a.__proto__ = c.__patchProto } else Da(a, lc) } function X(a,
      b) { return { index: a, S: [], V: b } } function od(a, b, c, d) {
        var e = 0, f = 0, g = 0, h = 0, m = Math.min(b - e, d - f); if (0 == e && 0 == f) a: { for (g = 0; g < m; g++)if (a[g] !== c[g]) break a; g = m } if (b == a.length && d == c.length) { h = a.length; for (var k = c.length, l = 0; l < m - g && pd(a[--h], c[--k]);)l++; h = l } e += g; f += g; b -= h; d -= h; if (!(b - e || d - f)) return []; if (e == b) { for (b = X(e, 0); f < d;)b.S.push(c[f++]); return [b] } if (f == d) return [X(e, b - e)]; m = e; g = f; d = d - g + 1; h = b - m + 1; b = Array(d); for (k = 0; k < d; k++)b[k] = Array(h), b[k][0] = k; for (k = 0; k < h; k++)b[0][k] = k; for (k = 1; k < d; k++)for (l = 1; l < h; l++)if (a[m +
          l - 1] === c[g + k - 1]) b[k][l] = b[k - 1][l - 1]; else { var n = b[k - 1][l] + 1, p = b[k][l - 1] + 1; b[k][l] = n < p ? n : p } m = b.length - 1; g = b[0].length - 1; d = b[m][g]; for (a = []; 0 < m || 0 < g;)m ? g ? (h = b[m - 1][g - 1], k = b[m - 1][g], l = b[m][g - 1], n = k < l ? k < h ? k : h : l < h ? l : h, n == h ? (h == d ? a.push(0) : (a.push(1), d = h), m--, g--) : n == k ? (a.push(3), m--, d = k) : (a.push(2), g--, d = l)) : (a.push(3), m--) : (a.push(2), g--); a.reverse(); b = void 0; m = []; for (g = 0; g < a.length; g++)switch (a[g]) {
            case 0: b && (m.push(b), b = void 0); e++; f++; break; case 1: b || (b = X(e, 0)); b.V++; e++; b.S.push(c[f]); f++; break; case 2: b ||
              (b = X(e, 0)); b.V++; e++; break; case 3: b || (b = X(e, 0)), b.S.push(c[f]), f++
          }b && m.push(b); return m
      } function pd(a, b) { return a === b } function mc(a) { var b = []; do b.unshift(a); while (a = a.parentNode); return b } function nc(a) { Yb(a); return a.__shady && a.__shady.assignedSlot || null } function I(a, b) { for (var c = Object.getOwnPropertyNames(b), d = 0; d < c.length; d++) { var e = c[d], f = Object.getOwnPropertyDescriptor(b, e); f.value ? a[e] = f.value : Object.defineProperty(a, e, f) } } function qd() {
        var a = window.customElements && window.customElements.nativeHTMLElement ||
          HTMLElement; I(window.Node.prototype, rd); I(window.Window.prototype, sd); I(window.Text.prototype, td); I(window.DocumentFragment.prototype, Ta); I(window.Element.prototype, oc); I(window.Document.prototype, pc); window.HTMLSlotElement && I(window.HTMLSlotElement.prototype, qc); I(a.prototype, ud); B.P && (L(window.Node.prototype), L(window.Text.prototype), L(window.DocumentFragment.prototype), L(window.Element.prototype), L(a.prototype), L(window.Document.prototype), window.HTMLSlotElement && L(window.HTMLSlotElement.prototype))
      }
    function rc(a) { var b = vd.has(a); a = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a); return !b && a } function n(a) { var b = a.isConnected; if (void 0 !== b) return b; for (; a && !(a.__CE_isImportDocument || a instanceof Document);)a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0); return !(!a || !(a.__CE_isImportDocument || a instanceof Document)) } function Ua(a, b) { for (; b && b !== a && !b.nextSibling;)b = b.parentNode; return b && b !== a ? b.nextSibling : null } function K(a, b, c) {
      c = c ? c : new Set; for (var d = a; d;) {
        if (d.nodeType ===
          Node.ELEMENT_NODE) { var e = d; b(e); var f = e.localName; if ("link" === f && "import" === e.getAttribute("rel")) { d = e.import; if (d instanceof Node && !c.has(d)) for (c.add(d), d = d.firstChild; d; d = d.nextSibling)K(d, b, c); d = Ua(a, e); continue } else if ("template" === f) { d = Ua(a, e); continue } if (e = e.__CE_shadowRoot) for (e = e.firstChild; e; e = e.nextSibling)K(e, b, c) } d = d.firstChild ? d.firstChild : Ua(a, d)
      }
    } function x(a, b, c) { a[b] = c } function Va(a) {
      a = a.replace(D.Sa, "").replace(D.port, ""); var b = sc, c = a, d = new ta; d.start = 0; d.end = c.length; for (var e =
        d, f = 0, g = c.length; f < g; f++)if ("{" === c[f]) { e.rules || (e.rules = []); var h = e, k = h.rules[h.rules.length - 1] || null; e = new ta; e.start = f + 1; e.parent = h; e.previous = k; h.rules.push(e) } else "}" === c[f] && (e.end = f + 1, e = e.parent || d); return b(d, a)
    } function sc(a, b) {
      var c = b.substring(a.start, a.end - 1); a.parsedCssText = a.cssText = c.trim(); a.parent && ((c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = wd(c), c = c.replace(D.wa, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = !c.indexOf("@"),
        a.atRule) ? c.indexOf("@media") ? c.match(D.Wa) && (a.type = G.ca, a.keyframesName = a.selector.split(D.wa).pop()) : a.type = G.MEDIA_RULE : a.type = c.indexOf("--") ? G.STYLE_RULE : G.ka); if (c = a.rules) for (var d = 0, e = c.length, f; d < e && (f = c[d]); d++)sc(f, b); return a
    } function wd(a) { return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (a, c) { a = c; for (c = 6 - a.length; c--;)a = "0" + a; return "\\" + a }) } function tc(a, b, c) {
      c = void 0 === c ? "" : c; var d = ""; if (a.cssText || a.rules) {
        var e = a.rules, f; if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));
        if (f) { f = 0; for (var g = e.length, h; f < g && (h = e[f]); f++)d = tc(h, b, d) } else b ? b = a.cssText : (b = a.cssText, b = b.replace(D.ra, "").replace(D.va, ""), b = b.replace(D.Xa, "").replace(D.cb, "")), (d = b.trim()) && (d = "  " + d + "\n")
      } d && (a.selector && (c += a.selector + " {\n"), c += d, a.selector && (c += "}\n\n")); return c
    } function uc(a) { w = a && a.shimcssproperties ? !1 : u || !(navigator.userAgent.match("AppleWebKit/601") || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)")) } function R(a, b) {
      if (!a) return ""; "string" === typeof a &&
        (a = Va(a)); b && S(a, b); return tc(a, w)
    } function ka(a) { !a.__cssRules && a.textContent && (a.__cssRules = Va(a.textContent)); return a.__cssRules || null } function vc(a) { return !!a.parent && a.parent.type === G.ca } function S(a, b, c, d) { if (a) { var e = !1, f = a.type; if (d && f === G.MEDIA_RULE) { var g = a.selector.match(xd); g && (window.matchMedia(g[1]).matches || (e = !0)) } f === G.STYLE_RULE ? b(a) : c && f === G.ca ? c(a) : f === G.ka && (e = !0); if ((a = a.rules) && !e) { e = 0; f = a.length; for (var h; e < f && (h = a[e]); e++)S(h, b, c, d) } } } function Wa(a, b, c, d) {
      var e = document.createElement("style");
      b && e.setAttribute("scope", b); e.textContent = a; wc(e, c, d); return e
    } function wc(a, b, c) { b = b || document.head; b.insertBefore(a, c && c.nextSibling || b.firstChild); M ? a.compareDocumentPosition(M) === Node.DOCUMENT_POSITION_PRECEDING && (M = a) : M = a } function xc(a, b) {
      var c = a.indexOf("var("); if (-1 === c) return b(a, "", "", ""); a: { var d = 0; var e = c + 3; for (var f = a.length; e < f; e++)if ("(" === a[e]) d++; else if (")" === a[e] && !--d) break a; e = -1 } d = a.substring(c + 4, e); c = a.substring(0, c); a = xc(a.substring(e + 1), b); e = d.indexOf(","); return -1 === e ? b(c,
        d.trim(), "", a) : b(c, d.substring(0, e).trim(), d.substring(e + 1).trim(), a)
    } function la(a, b) { u ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b) } function N(a) { var b = a.localName, c = ""; b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, c = a.extends); return { is: b, T: c } } function yc(a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b]; if (c.target !== document.documentElement && c.target !== document.head) for (var d = 0; d < c.addedNodes.length; d++) {
          var e = c.addedNodes[d];
          if (e.nodeType === Node.ELEMENT_NODE) { var f = e.getRootNode(); var g = e; var h = []; g.classList ? h = Array.from(g.classList) : g instanceof window.SVGElement && g.hasAttribute("class") && (h = g.getAttribute("class").split(/\s+/)); g = h; h = g.indexOf(t.c); (g = -1 < h ? g[h + 1] : "") && f === e.ownerDocument ? t.a(e, g, !0) : f.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (f = f.host) && (f = N(f).is, g !== f && (g && t.a(e, g, !0), t.a(e, f))) }
        }
      }
    } function yd(a) {
      if (a = ma[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion ||
        0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1
    } function zc(a) { return a._applyShimCurrentVersion === a._applyShimNextVersion } function zd(a) { a._applyShimValidatingVersion = a._applyShimNextVersion; a.b || (a.b = !0, Ad.then(function () { a._applyShimCurrentVersion = a._applyShimNextVersion; a.b = !1 })) } function ib(a) {
      requestAnimationFrame(function () {
        Ac ? Ac(a) : (Xa || (Xa = new Promise(function (a) { Ya = a }), "complete" === document.readyState ? Ya() : document.addEventListener("readystatechange", function () {
        "complete" === document.readyState &&
          Ya()
        })), Xa.then(function () { a && a() }))
      })
    } var B = window.ShadyDOM || {}; B.Ta = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode); var Za = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild"); B.P = !!(Za && Za.configurable && Za.get); B.ua = B.force || !B.Ta; var T = Element.prototype, Bc = T.matches || T.matchesSelector || T.mozMatchesSelector || T.msMatchesSelector || T.oMatchesSelector || T.webkitMatchesSelector, Ga = document.createTextNode(""), Bb = 0, Fa = []; (new MutationObserver(function () {
      for (; Fa.length;)try { Fa.shift()() } catch (a) {
        throw Ga.textContent =
        Bb++, a;
      }
    })).observe(Ga, { characterData: !0 }); var V = [], Ha; ha.list = V; fa.prototype.ab = function () { var a = this; this.a || (this.a = !0, Ab(function () { a.b() })) }; fa.prototype.b = function () { if (this.a) { this.a = !1; var a = this.takeRecords(); a.length && this.W.forEach(function (b) { b(a) }) } }; fa.prototype.takeRecords = function () { if (this.addedNodes.length || this.removedNodes.length) { var a = [{ addedNodes: this.addedNodes, removedNodes: this.removedNodes }]; this.addedNodes = []; this.removedNodes = []; return a } return [] }; var Sb = Element.prototype.appendChild,
      Oa = Element.prototype.insertBefore, W = Element.prototype.removeChild, $b = Element.prototype.setAttribute, Cc = Element.prototype.removeAttribute, $a = Element.prototype.cloneNode, Pa = Document.prototype.importNode, hc = Element.prototype.addEventListener, kc = Element.prototype.removeEventListener, gc = Window.prototype.addEventListener, jc = Window.prototype.removeEventListener, ab = Element.prototype.dispatchEvent, Bd = Object.freeze({
        appendChild: Sb, insertBefore: Oa, removeChild: W, setAttribute: $b, removeAttribute: Cc, cloneNode: $a,
        importNode: Pa, addEventListener: hc, removeEventListener: kc, kb: gc, lb: jc, dispatchEvent: ab, querySelector: Element.prototype.querySelector, querySelectorAll: Element.prototype.querySelectorAll
      }), id = /[&\u00A0"]/g, ld = /[&\u00A0<>]/g, jd = Eb("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")), kd = Eb("style script xmp iframe noembed noframes plaintext noscript".split(" ")), z = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1), A = document.createTreeWalker(document,
        NodeFilter.SHOW_ELEMENT, null, !1), Cd = Object.freeze({ parentNode: Q, firstChild: Ba, lastChild: Ca, previousSibling: Fb, nextSibling: Gb, childNodes: O, parentElement: Hb, firstElementChild: Ib, lastElementChild: Jb, previousElementSibling: Kb, nextElementSibling: Lb, children: Mb, innerHTML: Nb, textContent: Ob }), bb = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML") || Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML"), na = document.implementation.createHTMLDocument("inert").createElement("div"), cb = Object.getOwnPropertyDescriptor(Document.prototype,
          "activeElement"), Pb = {
            parentElement: { get: function () { var a = this.__shady && this.__shady.parentNode; a && a.nodeType !== Node.ELEMENT_NODE && (a = null); return void 0 !== a ? a : Hb(this) }, configurable: !0 }, parentNode: { get: function () { var a = this.__shady && this.__shady.parentNode; return void 0 !== a ? a : Q(this) }, configurable: !0 }, nextSibling: { get: function () { var a = this.__shady && this.__shady.nextSibling; return void 0 !== a ? a : Gb(this) }, configurable: !0 }, previousSibling: {
              get: function () {
                var a = this.__shady && this.__shady.previousSibling;
                return void 0 !== a ? a : Fb(this)
              }, configurable: !0
            }, className: { get: function () { return this.getAttribute("class") || "" }, set: function (a) { this.setAttribute("class", a) }, configurable: !0 }, nextElementSibling: { get: function () { if (this.__shady && void 0 !== this.__shady.nextSibling) { for (var a = this.nextSibling; a && a.nodeType !== Node.ELEMENT_NODE;)a = a.nextSibling; return a } return Lb(this) }, configurable: !0 }, previousElementSibling: {
              get: function () {
                if (this.__shady && void 0 !== this.__shady.previousSibling) {
                  for (var a = this.previousSibling; a &&
                    a.nodeType !== Node.ELEMENT_NODE;)a = a.previousSibling; return a
                } return Kb(this)
              }, configurable: !0
            }
          }, Ja = {
            childNodes: { get: function () { if (P(this)) { if (!this.__shady.childNodes) { this.__shady.childNodes = []; for (var a = this.firstChild; a; a = a.nextSibling)this.__shady.childNodes.push(a) } var b = this.__shady.childNodes } else b = O(this); b.item = function (a) { return b[a] }; return b }, configurable: !0 }, childElementCount: { get: function () { return this.children.length }, configurable: !0 }, firstChild: {
              get: function () {
                var a = this.__shady &&
                  this.__shady.firstChild; return void 0 !== a ? a : Ba(this)
              }, configurable: !0
            }, lastChild: { get: function () { var a = this.__shady && this.__shady.lastChild; return void 0 !== a ? a : Ca(this) }, configurable: !0 }, textContent: {
              get: function () { if (P(this)) { for (var a = [], b = 0, c = this.childNodes, d; d = c[b]; b++)d.nodeType !== Node.COMMENT_NODE && a.push(d.textContent); return a.join("") } return Ob(this) }, set: function (a) {
                switch (this.nodeType) {
                  case Node.ELEMENT_NODE: case Node.DOCUMENT_FRAGMENT_NODE: for (; this.firstChild;)this.removeChild(this.firstChild);
                    this.appendChild(document.createTextNode(a)); break; default: this.nodeValue = a
                }
              }, configurable: !0
            }, firstElementChild: { get: function () { if (this.__shady && void 0 !== this.__shady.firstChild) { for (var a = this.firstChild; a && a.nodeType !== Node.ELEMENT_NODE;)a = a.nextSibling; return a } return Ib(this) }, configurable: !0 }, lastElementChild: { get: function () { if (this.__shady && void 0 !== this.__shady.lastChild) { for (var a = this.lastChild; a && a.nodeType !== Node.ELEMENT_NODE;)a = a.previousSibling; return a } return Jb(this) }, configurable: !0 },
            children: { get: function () { var a; P(this) ? a = Array.prototype.filter.call(this.childNodes, function (a) { return a.nodeType === Node.ELEMENT_NODE }) : a = Mb(this); a.item = function (b) { return a[b] }; return a }, configurable: !0 }, innerHTML: {
              get: function () { var a = "template" === this.localName ? this.content : this; return P(this) ? Ia(a) : Nb(a) }, set: function (a) { for (var b = "template" === this.localName ? this.content : this; b.firstChild;)b.removeChild(b.firstChild); for (bb && bb.set ? bb.set.call(na, a) : na.innerHTML = a; na.firstChild;)b.appendChild(na.firstChild) },
              configurable: !0
            }
          }, Dc = { shadowRoot: { get: function () { return this.__shady && this.__shady.Ya || null }, configurable: !0 } }, Ka = { activeElement: { get: function () { var a = cb && cb.get ? cb.get.call(document) : B.P ? void 0 : document.activeElement; if (a && a.nodeType) { var b = !!E(this); if (this === document || b && this.host !== a && this.host.contains(a)) { for (b = U(a); b && b !== this;)a = b.host, b = U(a); a = this === document ? b ? null : a : b === this ? a : null } else a = null } else a = null; return a }, set: function () { }, configurable: !0 } }, zb = B.P ? function () { } : function (a) {
          a.__shady &&
            a.__shady.Ha || (a.__shady = a.__shady || {}, a.__shady.Ha = !0, H(a, Pb, !0))
          }, yb = B.P ? function () { } : function (a) { a.__shady && a.__shady.Fa || (a.__shady = a.__shady || {}, a.__shady.Fa = !0, H(a, Ja, !0), H(a, Dc, !0)) }, ja = null, Dd = {
            blur: !0, focus: !0, focusin: !0, focusout: !0, click: !0, dblclick: !0, mousedown: !0, mouseenter: !0, mouseleave: !0, mousemove: !0, mouseout: !0, mouseover: !0, mouseup: !0, wheel: !0, beforeinput: !0, input: !0, keydown: !0, keyup: !0, compositionstart: !0, compositionupdate: !0, compositionend: !0, touchstart: !0, touchend: !0, touchmove: !0,
            touchcancel: !0, pointerover: !0, pointerenter: !0, pointerdown: !0, pointermove: !0, pointerup: !0, pointercancel: !0, pointerout: !0, pointerleave: !0, gotpointercapture: !0, lostpointercapture: !0, dragstart: !0, drag: !0, dragenter: !0, dragleave: !0, dragover: !0, drop: !0, dragend: !0, DOMActivate: !0, DOMFocusIn: !0, DOMFocusOut: !0, keypress: !0
          }, lc = {
            get composed() { !1 !== this.isTrusted && void 0 === this.da && (this.da = Dd[this.type]); return this.da || !1 }, composedPath: function () { this.la || (this.la = Qa(this.__target, this.composed)); return this.la },
            get target() { return bc(this.currentTarget, this.composedPath()) }, get relatedTarget() { if (!this.ma) return null; this.na || (this.na = Qa(this.ma, !0)); return bc(this.currentTarget, this.na) }, stopPropagation: function () { Event.prototype.stopPropagation.call(this); this.ea = !0 }, stopImmediatePropagation: function () { Event.prototype.stopImmediatePropagation.call(this); this.ea = this.Ea = !0 }
          }, Sa = { focus: !0, blur: !0 }, Ed = Ra(window.Event), Fd = Ra(window.CustomEvent), Gd = Ra(window.MouseEvent), xb = {}; l.prototype = Object.create(DocumentFragment.prototype);
    l.prototype.B = function (a, b) { this.Ga = "ShadyRoot"; ea(a); ea(this); this.host = a; this.I = b && b.mode; a.__shady = a.__shady || {}; a.__shady.root = this; a.__shady.Ya = "closed" !== this.I ? this : null; this.N = !1; this.b = []; this.a = null; b = O(a); for (var c = 0, d = b.length; c < d; c++)W.call(a, b[c]) }; l.prototype.J = function () { var a = this; this.N || (this.N = !0, Cb(function () { return a.qa() })) }; l.prototype.A = function () { for (var a = this, b = this; b;)b.N && (a = b), b = b.Na(); return a }; l.prototype.Na = function () {
      var a = this.host.getRootNode(); if (E(a)) for (var b =
        this.host.childNodes, c = 0, d; c < b.length; c++)if (d = b[c], this.h(d)) return a
    }; l.prototype.qa = function () { this.N && this.A()._renderRoot() }; l.prototype._renderRoot = function () { this.N = !1; this.u(); this.m() }; l.prototype.u = function () {
      for (var a = 0, b; a < this.b.length; a++)b = this.b[a], this.l(b); for (b = this.host.firstChild; b; b = b.nextSibling)this.f(b); for (a = 0; a < this.b.length; a++) {
        b = this.b[a]; if (!b.__shady.assignedNodes.length) for (var c = b.firstChild; c; c = c.nextSibling)this.f(c, b); c = b.parentNode; (c = c.__shady && c.__shady.root) &&
          c.oa() && c._renderRoot(); this.c(b.__shady.O, b.__shady.assignedNodes); if (c = b.__shady.pa) { for (var d = 0; d < c.length; d++)c[d].__shady.ga = null; b.__shady.pa = null; c.length > b.__shady.assignedNodes.length && (b.__shady.ha = !0) } b.__shady.ha && (b.__shady.ha = !1, this.g(b))
      }
    }; l.prototype.f = function (a, b) {
    a.__shady = a.__shady || {}; var c = a.__shady.ga; a.__shady.ga = null; b || (b = (b = this.a[a.slot || "__catchall"]) && b[0]); b ? (b.__shady.assignedNodes.push(a), a.__shady.assignedSlot = b) : a.__shady.assignedSlot = void 0; c !== a.__shady.assignedSlot &&
      a.__shady.assignedSlot && (a.__shady.assignedSlot.__shady.ha = !0)
    }; l.prototype.l = function (a) { var b = a.__shady.assignedNodes; a.__shady.assignedNodes = []; a.__shady.O = []; if (a.__shady.pa = b) for (var c = 0; c < b.length; c++) { var d = b[c]; d.__shady.ga = d.__shady.assignedSlot; d.__shady.assignedSlot === a && (d.__shady.assignedSlot = null) } }; l.prototype.c = function (a, b) { for (var c = 0, d; c < b.length && (d = b[c]); c++)"slot" == d.localName ? this.c(a, d.__shady.assignedNodes) : a.push(b[c]) }; l.prototype.g = function (a) {
      ab.call(a, new Event("slotchange"));
      a.__shady.assignedSlot && this.g(a.__shady.assignedSlot)
    }; l.prototype.m = function () { for (var a = this.b, b = [], c = 0; c < a.length; c++) { var d = a[c].parentNode; d.__shady && d.__shady.root || !(0 > b.indexOf(d)) || b.push(d) } for (a = 0; a < b.length; a++)c = b[a], this.G(c === this ? this.host : c, this.o(c)) }; l.prototype.o = function (a) { var b = []; a = a.childNodes; for (var c = 0; c < a.length; c++) { var d = a[c]; if (this.h(d)) { d = d.__shady.O; for (var e = 0; e < d.length; e++)b.push(d[e]) } else b.push(d) } return b }; l.prototype.h = function (a) { return "slot" == a.localName };
    l.prototype.G = function (a, b) { for (var c = O(a), d = od(b, b.length, c, c.length), e = 0, f = 0, g; e < d.length && (g = d[e]); e++) { for (var h = 0, k; h < g.S.length && (k = g.S[h]); h++)Q(k) === a && W.call(a, k), c.splice(g.index + f, 1); f -= g.V } for (e = 0; e < d.length && (g = d[e]); e++)for (f = c[g.index], h = g.index; h < g.index + g.V; h++)k = b[h], Oa.call(a, k, f), c.splice(h, 0, k) }; l.prototype.Ja = function (a) {
    this.a = this.a || {}; this.b = this.b || []; for (var b = 0; b < a.length; b++) {
      var c = a[b]; c.__shady = c.__shady || {}; ea(c); ea(c.parentNode); var d = this.i(c); if (this.a[d]) {
        var e =
          e || {}; e[d] = !0; this.a[d].push(c)
      } else this.a[d] = [c]; this.b.push(c)
    } if (e) for (var f in e) this.a[f] = this.j(this.a[f])
    }; l.prototype.i = function (a) { var b = a.name || a.getAttribute("name") || "__catchall"; return a.Ia = b }; l.prototype.j = function (a) { return a.sort(function (a, c) { a = mc(a); for (var b = mc(c), e = 0; e < a.length; e++) { c = a[e]; var f = b[e]; if (c !== f) return a = Array.from(c.parentNode.childNodes), a.indexOf(c) - a.indexOf(f) } }) }; l.prototype.Ma = function (a) {
    this.a = this.a || {}; this.b = this.b || []; var b = this.a, c; for (c in b) for (var d =
      b[c], e = 0; e < d.length; e++) { var f = d[e], g; a: { for (g = f; g;) { if (g == a) { g = !0; break a } g = g.parentNode } g = void 0 } if (g) { d.splice(e, 1); var h = this.b.indexOf(f); 0 <= h && this.b.splice(h, 1); e--; this.F(f); h = !0 } } return h
    }; l.prototype.Oa = function (a) { var b = a.Ia, c = this.i(a); if (c !== b) { b = this.a[b]; var d = b.indexOf(a); 0 <= d && b.splice(d, 1); b = this.a[c] || (this.a[c] = []); b.push(a); 1 < b.length && (this.a[c] = this.j(b)) } }; l.prototype.F = function (a) { if (a = a.__shady.O) for (var b = 0; b < a.length; b++) { var c = a[b], d = Q(c); d && W.call(d, c) } }; l.prototype.oa =
      function () { return !!this.b.length }; l.prototype.addEventListener = function (a, b, c) { "object" !== typeof c && (c = { capture: !!c }); c.fa = this; this.host.addEventListener(a, b, c) }; l.prototype.removeEventListener = function (a, b, c) { "object" !== typeof c && (c = { capture: !!c }); c.fa = this; this.host.removeEventListener(a, b, c) }; l.prototype.getElementById = function (a) { return ia(this, function (b) { return b.id == a }, function (a) { return !!a })[0] || null }; (function (a) { H(a, Ja, !0); H(a, Ka, !0) })(l.prototype); var sd = {
        addEventListener: ec.bind(window),
        removeEventListener: ic.bind(window)
      }, rd = {
        addEventListener: ec, removeEventListener: ic, appendChild: function (a) { return La(this, a) }, insertBefore: function (a, b) { return La(this, a, b) }, removeChild: function (a) { return Ma(this, a) }, replaceChild: function (a, b) { La(this, a, b); Ma(this, b); return a }, cloneNode: function (a) { if ("template" == this.localName) var b = $a.call(this, a); else if (b = $a.call(this, !1), a) { a = this.childNodes; for (var c = 0, d; c < a.length; c++)d = a[c].cloneNode(!0), b.appendChild(d) } return b }, getRootNode: function () { return Wb(this) },
        get isConnected() { var a = this.ownerDocument; if (a && a.contains && a.contains(this) || (a = a.documentElement) && a.contains && a.contains(this)) return !0; for (a = this; a && !(a instanceof Document);)a = a.parentNode || (a instanceof l ? a.host : void 0); return !!(a && a instanceof Document) }, dispatchEvent: function (a) { ha(); return ab.call(this, a) }
      }, td = { get assignedSlot() { return nc(this) } }, Ta = {
        querySelector: function (a) { return ia(this, function (b) { return Bc.call(b, a) }, function (a) { return !!a })[0] || null }, querySelectorAll: function (a) {
          return ia(this,
            function (b) { return Bc.call(b, a) })
        }
      }, qc = { assignedNodes: function (a) { if ("slot" === this.localName) return Yb(this), this.__shady ? (a && a.flatten ? this.__shady.O : this.__shady.assignedNodes) || [] : [] } }, oc = Ea({ setAttribute: function (a, b) { Zb(this, a, b) }, removeAttribute: function (a) { Cc.call(this, a); Vb(this, a) }, attachShadow: function (a) { if (!this) throw "Must provide a host."; if (!a) throw "Not enough arguments."; return new l(xb, this, a) }, get slot() { return this.getAttribute("slot") }, set slot(a) { Zb(this, "slot", a) }, get assignedSlot() { return nc(this) } },
        Ta, qc); Object.defineProperties(oc, Dc); var pc = Ea({ importNode: function (a, b) { return ac(a, b) }, getElementById: function (a) { return ia(this, function (b) { return b.id == a }, function (a) { return !!a })[0] || null } }, Ta); Object.defineProperties(pc, { _activeElement: Ka.activeElement }); var Hd = HTMLElement.prototype.blur, ud = Ea({ blur: function () { var a = this.__shady && this.__shady.root; (a = a && a.activeElement) ? a.blur() : Hd.call(this) } }); B.ua && (window.ShadyDOM = {
          inUse: B.ua, patch: function (a) { return a }, isShadyRoot: E, enqueue: Cb, flush: ha,
          settings: B, filterMutations: hd, observeChildren: fd, unobserveChildren: ed, nativeMethods: Bd, nativeTree: Cd
        }, window.Event = Ed, window.CustomEvent = Fd, window.MouseEvent = Gd, nd(), qd(), window.ShadowRoot = l); var vd = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" ")); y.prototype.B = function (a, b) { this.m.set(a, b); this.l.set(b.constructor, b) }; y.prototype.f = function (a) { return this.m.get(a) }; y.prototype.A = function (a) { return this.l.get(a) };
    y.prototype.o = function (a) { this.h = !0; this.i.push(a) }; y.prototype.j = function (a) { var b = this; this.h && K(a, function (a) { return b.g(a) }) }; y.prototype.g = function (a) { if (this.h && !a.__CE_patched) { a.__CE_patched = !0; for (var b = 0; b < this.i.length; b++)this.i[b](a) } }; y.prototype.b = function (a) { var b = []; K(a, function (a) { return b.push(a) }); for (a = 0; a < b.length; a++) { var c = b[a]; 1 === c.__CE_state ? this.connectedCallback(c) : this.u(c) } }; y.prototype.a = function (a) {
      var b = []; K(a, function (a) { return b.push(a) }); for (a = 0; a < b.length; a++) {
        var c =
          b[a]; 1 === c.__CE_state && this.disconnectedCallback(c)
      }
    }; y.prototype.c = function (a, b) {
      var c = this; b = b ? b : new Set; var d = []; K(a, function (a) { if ("link" === a.localName && "import" === a.getAttribute("rel")) { var e = a.import; e instanceof Node && "complete" === e.readyState ? (e.__CE_isImportDocument = !0, e.__CE_hasRegistry = !0) : a.addEventListener("load", function () { var d = a.import; d.__CE_documentLoadHandled || (d.__CE_documentLoadHandled = !0, d.__CE_isImportDocument = !0, d.__CE_hasRegistry = !0, b.delete(d), c.c(d, b)) }) } else d.push(a) },
        b); if (this.h) for (a = 0; a < d.length; a++)this.g(d[a]); for (a = 0; a < d.length; a++)this.u(d[a])
    }; y.prototype.u = function (a) {
      if (void 0 === a.__CE_state) {
        var b = this.f(a.localName); if (b) {
          b.constructionStack.push(a); var c = b.constructor; try { try { if (new c !== a) throw Error("The custom element constructor did not produce the element being upgraded."); } finally { b.constructionStack.pop() } } catch (f) { throw a.__CE_state = 2, f; } a.__CE_state = 1; a.__CE_definition = b; if (b.attributeChangedCallback) for (b = b.observedAttributes, c = 0; c < b.length; c++) {
            var d =
              b[c], e = a.getAttribute(d); null !== e && this.attributeChangedCallback(a, d, null, e, null)
          } n(a) && this.connectedCallback(a)
        }
      }
    }; y.prototype.connectedCallback = function (a) { var b = a.__CE_definition; b.connectedCallback && b.connectedCallback.call(a) }; y.prototype.disconnectedCallback = function (a) { var b = a.__CE_definition; b.disconnectedCallback && b.disconnectedCallback.call(a) }; y.prototype.attributeChangedCallback = function (a, b, c, d, e) {
      var f = a.__CE_definition; f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b) &&
        f.attributeChangedCallback.call(a, b, c, d, e)
    }; Aa.prototype.c = function () { this.K && this.K.disconnect() }; Aa.prototype.f = function (a) { var b = this.a.readyState; "interactive" !== b && "complete" !== b || this.c(); for (b = 0; b < a.length; b++)for (var c = a[b].addedNodes, d = 0; d < c.length; d++)this.b.c(c[d]) }; wb.prototype.c = function () { if (this.a) throw Error("Already resolved."); this.a = void 0; this.b && this.b(void 0) }; v.prototype.define = function (a, b) {
      var c = this; if (!(b instanceof Function)) throw new TypeError("Custom element constructors must be functions.");
      if (!rc(a)) throw new SyntaxError("The element name '" + a + "' is not valid."); if (this.a.f(a)) throw Error("A custom element with name '" + a + "' has already been defined."); if (this.f) throw Error("A custom element is already being defined."); this.f = !0; try {
        var d = function (a) { var b = e[a]; if (void 0 !== b && !(b instanceof Function)) throw Error("The '" + a + "' callback must be a function."); return b }, e = b.prototype; if (!(e instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");
        var f = d("connectedCallback"); var g = d("disconnectedCallback"); var h = d("adoptedCallback"); var k = d("attributeChangedCallback"); var l = b.observedAttributes || []
      } catch (ba) { return } finally { this.f = !1 } this.a.B(a, { localName: a, constructor: b, connectedCallback: f, disconnectedCallback: g, adoptedCallback: h, attributeChangedCallback: k, observedAttributes: l, constructionStack: [] }); this.c.push(a); this.b || (this.b = !0, this.g(function () { return c.j() }))
    }; v.prototype.j = function () {
      if (!1 !== this.b) for (this.b = !1, this.a.c(document); 0 <
        this.c.length;) { var a = this.c.shift(); (a = this.h.get(a)) && a.c() }
    }; v.prototype.get = function (a) { if (a = this.a.f(a)) return a.constructor }; v.prototype.whenDefined = function (a) { if (!rc(a)) return Promise.reject(new SyntaxError("'" + a + "' is not a valid custom element name.")); var b = this.h.get(a); if (b) return b.f; b = new wb; this.h.set(a, b); this.a.f(a) && -1 === this.c.indexOf(a) && b.c(); return b.f }; v.prototype.l = function (a) { this.i.c(); var b = this.g; this.g = function (c) { return a(function () { return b(c) }) } }; window.CustomElementRegistry =
      v; v.prototype.define = v.prototype.define; v.prototype.get = v.prototype.get; v.prototype.whenDefined = v.prototype.whenDefined; v.prototype.polyfillWrapFlushCallback = v.prototype.l; var wa = window.Document.prototype.createElement, $c = window.Document.prototype.createElementNS, Zc = window.Document.prototype.importNode, ad = window.Document.prototype.prepend, bd = window.Document.prototype.append, lb = window.Node.prototype.cloneNode, ca = window.Node.prototype.appendChild, tb = window.Node.prototype.insertBefore, xa = window.Node.prototype.removeChild,
        ub = window.Node.prototype.replaceChild, za = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"), kb = window.Element.prototype.attachShadow, ua = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"), ya = window.Element.prototype.getAttribute, mb = window.Element.prototype.setAttribute, ob = window.Element.prototype.removeAttribute, da = window.Element.prototype.getAttributeNS, nb = window.Element.prototype.setAttributeNS, pb = window.Element.prototype.removeAttributeNS, rb = window.Element.prototype.insertAdjacentElement,
        Qc = window.Element.prototype.prepend, Rc = window.Element.prototype.append, Tc = window.Element.prototype.before, Uc = window.Element.prototype.after, Vc = window.Element.prototype.replaceWith, Wc = window.Element.prototype.remove, dd = window.HTMLElement, va = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"), qb = window.HTMLElement.prototype.insertAdjacentElement, vb = new function () { }, oa = window.customElements; if (!oa || oa.forcePolyfill || "function" != typeof oa.define || "function" != typeof oa.get) {
          var Y =
            new y; cd(Y); Yc(Y); Xc(Y); Pc(Y); document.__CE_hasRegistry = !0; var Id = new v(Y); Object.defineProperty(window, "customElements", { configurable: !0, enumerable: !0, value: Id })
        } var G = { STYLE_RULE: 1, ca: 7, MEDIA_RULE: 4, ka: 1E3 }, D = {
          Sa: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim, port: /@import[^;]*;/gim, ra: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim, va: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim, Xa: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim, cb: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim, Wa: /^@[^\s]*keyframes/,
          wa: /\s+/g
        }, u = !(window.ShadyDOM && window.ShadyDOM.inUse); if (window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss) var w = window.ShadyCSS.nativeCss; else window.ShadyCSS ? (uc(window.ShadyCSS), window.ShadyCSS = void 0) : uc(window.WebComponents && window.WebComponents.flags); var pa = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi, qa = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi, Jd = /(--[\w-]+)\s*([:,;)]|$)/gi, Kd = /(animation\s*:)|(animation-name\s*:)/,
          xd = /@media\s(.*)/, Ld = /\{[^}]*\}/g, M = null; q.prototype.a = function (a, b, c) { a.__styleScoped ? a.__styleScoped = null : this.i(a, b || "", c) }; q.prototype.i = function (a, b, c) { a.nodeType === Node.ELEMENT_NODE && this.u(a, b, c); if (a = "template" === a.localName ? (a.content || a.hb).childNodes : a.children || a.childNodes) for (var d = 0; d < a.length; d++)this.i(a[d], b, c) }; q.prototype.u = function (a, b, c) {
            if (b) if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b)); else if (a.getAttribute) {
              var d =
                a.getAttribute(Md); c ? d && (b = d.replace("style-scope", "").replace(b, ""), la(a, b)) : la(a, (d ? d + " " : "") + "style-scope " + b)
            }
          }; q.prototype.b = function (a, b, c) { var d = a.__cssBuild; u || "shady" === d ? b = R(b, c) : (a = N(a), b = this.F(b, a.is, a.T, c) + "\n\n"); return b.trim() }; q.prototype.F = function (a, b, c, d) { var e = this.f(b, c); b = this.h(b); var f = this; return R(a, function (a) { a.c || (f.M(a, b, e), a.c = !0); d && d(a, b, e) }) }; q.prototype.h = function (a) { return a ? Nd + a : "" }; q.prototype.f = function (a, b) { return b ? "[is=" + a + "]" : a }; q.prototype.M = function (a,
            b, c) { this.j(a, this.g, b, c) }; q.prototype.j = function (a, b, c, d) { a.selector = a.v = this.l(a, b, c, d) }; q.prototype.l = function (a, b, c, d) { var e = a.selector.split(Ec); if (!vc(a)) { a = 0; for (var f = e.length, g; a < f && (g = e[a]); a++)e[a] = b.call(this, g, c, d) } return e.join(Ec) }; q.prototype.g = function (a, b, c) { var d = this, e = !1; a = a.trim(); a = a.replace(Od, function (a, b, c) { return ":" + b + "(" + c.replace(/\s/g, "") + ")" }); a = a.replace(Pd, db + " $1"); return a = a.replace(Qd, function (a, g, h) { e || (a = d.A(h, g, b, c), e = e || a.stop, g = a.Ra, h = a.value); return g + h }) };
    q.prototype.A = function (a, b, c, d) { var e = a.indexOf(eb); 0 <= a.indexOf(db) ? a = this.I(a, d) : 0 !== e && (a = c ? this.m(a, c) : a); c = !1; 0 <= e && (b = "", c = !0); if (c) { var f = !0; c && (a = a.replace(Rd, function (a, b) { return " > " + b })) } a = a.replace(Sd, function (a, b, c) { return '[dir="' + c + '"] ' + b + ", " + b + '[dir="' + c + '"]' }); return { value: a, Ra: b, stop: f } }; q.prototype.m = function (a, b) { a = a.split(Fc); a[0] += b; return a.join(Fc) }; q.prototype.I = function (a, b) {
      var c = a.match(Gc); return (c = c && c[2].trim() || "") ? c[0].match(Hc) ? a.replace(Gc, function (a, c, f) {
        return b +
          f
      }) : c.split(Hc)[0] === b ? c : Td : a.replace(db, b)
    }; q.prototype.G = function (a) { a.selector = a.parsedSelector; this.o(a); this.j(a, this.B) }; q.prototype.o = function (a) { a.selector === Ud && (a.selector = "html") }; q.prototype.B = function (a) { return a.match(eb) ? this.g(a, Ic) : this.m(a.trim(), Ic) }; hb.Object.defineProperties(q.prototype, { c: { configurable: !0, enumerable: !0, get: function () { return "style-scope" } } }); var Od = /:(nth[-\w]+)\(([^)]+)\)/, Ic = ":not(.style-scope)", Ec = ",", Qd = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g, Hc = /[[.:#*]/,
      db = ":host", Ud = ":root", eb = "::slotted", Pd = new RegExp("^(" + eb + ")"), Gc = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, Rd = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, Sd = /(.*):dir\((?:(ltr|rtl))\)/, Nd = ".", Fc = ":", Md = "class", Td = "should_not_match", t = new q; r.get = function (a) { return a ? a.__styleInfo : null }; r.set = function (a, b) { return a.__styleInfo = b }; r.prototype.c = function () { return this.D }; r.prototype._getStyleRules = r.prototype.c; var Jc = function (a) {
        return a.matches || a.matchesSelector || a.mozMatchesSelector || a.msMatchesSelector ||
          a.oMatchesSelector || a.webkitMatchesSelector
      }(window.Element.prototype), Vd = navigator.userAgent.match("Trident"); p.prototype.M = function (a) { var b = this, c = {}, d = [], e = 0; S(a, function (a) { b.c(a); a.index = e++; b.G(a.s.cssText, c) }, function (a) { d.push(a) }); a.b = d; a = []; for (var f in c) a.push(f); return a }; p.prototype.c = function (a) { if (!a.s) { var b = {}, c = {}; this.b(a, c) && (b.C = c, a.rules = null); b.cssText = this.F(a); a.s = b } }; p.prototype.b = function (a, b) {
        var c = a.s; if (c) { if (c.C) return Object.assign(b, c.C), !0 } else {
          c = a.parsedCssText;
          for (var d; a = pa.exec(c);) { d = (a[2] || a[3]).trim(); if ("inherit" !== d || "unset" !== d) b[a[1].trim()] = d; d = !0 } return d
        }
      }; p.prototype.F = function (a) { return this.I(a.parsedCssText) }; p.prototype.I = function (a) { return a.replace(Ld, "").replace(pa, "") }; p.prototype.G = function (a, b) { for (var c; c = Jd.exec(a);) { var d = c[1]; ":" !== c[2] && (b[d] = !0) } }; p.prototype.$ = function (a) { for (var b = Object.getOwnPropertyNames(a), c = 0, d; c < b.length; c++)d = b[c], a[d] = this.a(a[d], a) }; p.prototype.a = function (a, b) {
        if (a) if (0 <= a.indexOf(";")) a = this.f(a,
          b); else { var c = this; a = xc(a, function (a, e, f, g) { if (!e) return a + g; (e = c.a(b[e], b)) && "initial" !== e ? "apply-shim-inherit" === e && (e = "inherit") : e = c.a(b[f] || f, b) || f; return a + (e || "") + g }) } return a && a.trim() || ""
      }; p.prototype.f = function (a, b) { a = a.split(";"); for (var c = 0, d, e; c < a.length; c++)if (d = a[c]) { qa.lastIndex = 0; if (e = qa.exec(d)) d = this.a(b[e[1]], b); else if (e = d.indexOf(":"), -1 !== e) { var f = d.substring(e); f = f.trim(); f = this.a(f, b) || f; d = d.substring(0, e) + f } a[c] = d && d.lastIndexOf(";") === d.length - 1 ? d.slice(0, -1) : d || "" } return a.join(";") };
    p.prototype.B = function (a, b) { var c = ""; a.s || this.c(a); a.s.cssText && (c = this.f(a.s.cssText, b)); a.cssText = c }; p.prototype.A = function (a, b) { var c = a.cssText, d = a.cssText; null == a.ta && (a.ta = Kd.test(c)); if (a.ta) if (null == a.X) { a.X = []; for (var e in b) d = b[e], d = d(c), c !== d && (c = d, a.X.push(e)) } else { for (e = 0; e < a.X.length; ++e)d = b[a.X[e]], c = d(c); d = c } a.cssText = d }; p.prototype.Z = function (a, b) {
      var c = {}, d = this, e = []; S(a, function (a) {
      a.s || d.c(a); var f = a.v || a.parsedSelector; b && a.s.C && f && Jc.call(b, f) && (d.b(a, c), a = a.index, f = parseInt(a /
        32, 10), e[f] = (e[f] || 0) | 1 << a % 32)
      }, null, !0); return { C: c, key: e }
    }; p.prototype.ba = function (a, b, c, d) { b.s || this.c(b); if (b.s.C) { var e = N(a); a = e.is; e = e.T; e = a ? t.f(a, e) : "html"; var f = b.parsedSelector, g = ":host > *" === f || "html" === f, h = 0 === f.indexOf(":host") && !g; "shady" === c && (g = f === e + " > *." + e || -1 !== f.indexOf("html"), h = !g && 0 === f.indexOf(e)); "shadow" === c && (g = ":host > *" === f || "html" === f, h = h && !g); if (g || h) c = e, h && (u && !b.v && (b.v = t.l(b, t.g, t.h(a), e)), c = b.v || e), d({ bb: c, Va: h, jb: g }) } }; p.prototype.Y = function (a, b) {
      var c = {}, d = {},
      e = this, f = b && b.__cssBuild; S(b, function (b) { e.ba(a, b, f, function (f) { Jc.call(a.ib || a, f.bb) && (f.Va ? e.b(b, c) : e.b(b, d)) }) }, null, !0); return { $a: d, Ua: c }
    }; p.prototype.aa = function (a, b, c) { var d = this, e = N(a), f = t.f(e.is, e.T), g = new RegExp("(?:^|[^.#[:])" + (a.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])"); e = r.get(a).D; var h = this.h(e, c); return t.b(a, e, function (a) { d.B(a, b); u || vc(a) || !a.cssText || (d.A(a, h), d.l(a, g, f, c)) }) }; p.prototype.h = function (a, b) {
      a = a.b; var c = {}; if (!u && a) for (var d = 0, e = a[d]; d < a.length; e = a[++d])this.j(e,
        b), c[e.keyframesName] = this.i(e); return c
    }; p.prototype.i = function (a) { return function (b) { return b.replace(a.f, a.a) } }; p.prototype.j = function (a, b) { a.f = new RegExp(a.keyframesName, "g"); a.a = a.keyframesName + "-" + b; a.v = a.v || a.selector; a.selector = a.v.replace(a.keyframesName, a.a) }; p.prototype.l = function (a, b, c, d) { a.v = a.v || a.selector; d = "." + d; for (var e = a.v.split(","), f = 0, g = e.length, h; f < g && (h = e[f]); f++)e[f] = h.match(b) ? h.replace(c, d) : d + " " + h; a.selector = e.join(",") }; p.prototype.o = function (a, b, c) {
      var d = a.getAttribute("class") ||
        "", e = d; c && (e = d.replace(new RegExp("\\s*x-scope\\s*" + c + "\\s*", "g"), " ")); e += (e ? " " : "") + "x-scope " + b; d !== e && la(a, e)
    }; p.prototype.u = function (a, b, c, d) {
      b = d ? d.textContent || "" : this.aa(a, b, c); var e = r.get(a), f = e.a; f && !u && f !== d && (f._useCount--, 0 >= f._useCount && f.parentNode && f.parentNode.removeChild(f)); u ? e.a ? (e.a.textContent = b, d = e.a) : b && (d = Wa(b, c, a.shadowRoot, e.b)) : d ? d.parentNode || (Vd && -1 < b.indexOf("@media") && (d.textContent = b), wc(d, null, e.b)) : b && (d = Wa(b, c, null, e.b)); d && (d._useCount = d._useCount || 0, e.a != d && d._useCount++,
        e.a = d); return d
    }; p.prototype.m = function (a, b) { var c = ka(a), d = this; a.textContent = R(c, function (a) { var c = a.cssText = a.parsedCssText; a.s && a.s.cssText && (c = c.replace(D.ra, "").replace(D.va, ""), a.cssText = d.f(c, b)) }) }; hb.Object.defineProperties(p.prototype, { g: { configurable: !0, enumerable: !0, get: function () { return "x-scope" } } }); var J = new p, fb = {}, ra = window.customElements; if (ra && !u) {
      var Wd = ra.define; ra.define = function (a, b, c) {
        var d = document.createComment(" Shady DOM styles for " + a + " "), e = document.head; e.insertBefore(d,
          (M ? M.nextSibling : null) || e.firstChild); M = d; fb[a] = d; return Wd.call(ra, a, b, c)
      }
    } aa.prototype.a = function (a, b, c) { for (var d = 0; d < c.length; d++) { var e = c[d]; if (a.C[e] !== b[e]) return !1 } return !0 }; aa.prototype.b = function (a, b, c, d) { var e = this.cache[a] || []; e.push({ C: b, styleElement: c, w: d }); e.length > this.c && e.shift(); this.cache[a] = e }; aa.prototype.fetch = function (a, b, c) { if (a = this.cache[a]) for (var d = a.length - 1; 0 <= d; d--) { var e = a[d]; if (this.a(e, b, c)) return e } }; if (!u) {
      var Kc = new MutationObserver(yc), Lc = function (a) {
        Kc.observe(a,
          { childList: !0, subtree: !0 })
      }; if (window.customElements && !window.customElements.polyfillWrapFlushCallback) Lc(document); else { var gb = function () { Lc(document.body) }; window.HTMLImports ? window.HTMLImports.whenReady(gb) : requestAnimationFrame(function () { if ("loading" === document.readyState) { var a = function () { gb(); document.removeEventListener("readystatechange", a) }; document.addEventListener("readystatechange", a) } else gb() }) } jb = function () { yc(Kc.takeRecords()) }
    } var ma = {}, Ad = Promise.resolve(), Xa = null, Ac = window.HTMLImports &&
      window.HTMLImports.whenReady || null, Ya, sa = null, Z = null; C.prototype.sa = function () { !this.enqueued && Z && (this.enqueued = !0, ib(Z)) }; C.prototype.b = function (a) { a.__seenByShadyCSS || (a.__seenByShadyCSS = !0, this.customStyles.push(a), this.sa()) }; C.prototype.a = function (a) { return a.__shadyCSSCachedStyle ? a.__shadyCSSCachedStyle : a.getStyle ? a.getStyle() : a }; C.prototype.c = function () {
        for (var a = this.customStyles, b = 0; b < a.length; b++) {
          var c = a[b]; if (!c.__shadyCSSCachedStyle) {
            var d = this.a(c); d && (d = d.__appliedElement || d, sa && sa(d),
              c.__shadyCSSCachedStyle = d)
          }
        } return a
      }; C.prototype.addCustomStyle = C.prototype.b; C.prototype.getStyleForCustomStyle = C.prototype.a; C.prototype.processStyles = C.prototype.c; Object.defineProperties(C.prototype, { transformCallback: { get: function () { return sa }, set: function (a) { sa = a } }, validateCallback: { get: function () { return Z }, set: function (a) { var b = !1; Z || (b = !0); Z = a; b && this.sa() } } }); var Mc = new aa; k.prototype.A = function () { jb() }; k.prototype.Y = function (a) { var b = this.m[a] = (this.m[a] || 0) + 1; return a + "-" + b }; k.prototype.Ba =
        function (a) { return ka(a) }; k.prototype.Da = function (a) { return R(a) }; k.prototype.M = function (a) { a = a.content.querySelectorAll("style"); for (var b = [], c = 0; c < a.length; c++) { var d = a[c]; b.push(d.textContent); d.parentNode.removeChild(d) } return b.join("").trim() }; k.prototype.$ = function (a) { return (a = a.content.querySelector("style")) ? a.getAttribute("css-build") || "" : "" }; k.prototype.prepareTemplate = function (a, b, c) {
          if (!a.f) {
          a.f = !0; a.name = b; a.extends = c; ma[b] = a; var d = this.$(a), e = this.M(a); c = { is: b, extends: c, fb: d }; u || t.a(a.content,
            b); this.c(); var f = qa.test(e) || pa.test(e); qa.lastIndex = 0; pa.lastIndex = 0; e = Va(e); f && w && this.a && this.a.transformRules(e, b); a._styleAst = e; a.g = d; d = []; w || (d = J.M(a._styleAst)); if (!d.length || w) b = this.Z(c, a._styleAst, u ? a.content : null, fb[b]), a.a = b; a.c = d
          }
        }; k.prototype.Z = function (a, b, c, d) { b = t.b(a, b); if (b.length) return Wa(b, a.is, c, d) }; k.prototype.ba = function (a) { var b = N(a), c = b.is; b = b.T; var d = fb[c]; c = ma[c]; if (c) { var e = c._styleAst; var f = c.c } return r.set(a, new r(e, d, f, 0, b)) }; k.prototype.F = function () {
        !this.a && window.ShadyCSS &&
          window.ShadyCSS.ApplyShim && (this.a = window.ShadyCSS.ApplyShim, this.a.invalidCallback = yd)
        }; k.prototype.G = function () { var a = this; !this.b && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (this.b = window.ShadyCSS.CustomStyleInterface, this.b.transformCallback = function (b) { a.u(b) }, this.b.validateCallback = function () { requestAnimationFrame(function () { (a.b.enqueued || a.i) && a.f() }) }) }; k.prototype.c = function () { this.F(); this.G() }; k.prototype.f = function () {
          this.c(); if (this.b) {
            var a = this.b.processStyles(); this.b.enqueued &&
              (w ? this.za(a) : (this.o(this.g, this.h), this.B(a)), this.b.enqueued = !1, this.i && !w && this.styleDocument())
          }
        }; k.prototype.styleElement = function (a, b) {
          var c = N(a).is, d = r.get(a); d || (d = this.ba(a)); this.j(a) || (this.i = !0); b && (d.L = d.L || {}, Object.assign(d.L, b)); if (w) {
            if (d.L) { b = d.L; for (var e in b) null === e ? a.style.removeProperty(e) : a.style.setProperty(e, b[e]) } if (((e = ma[c]) || this.j(a)) && e && e.a && !zc(e)) {
              if (zc(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion) this.c(), this.a && this.a.transformRules(e._styleAst,
                c), e.a.textContent = t.b(a, d.D), zd(e); u && (c = a.shadowRoot) && (c.querySelector("style").textContent = t.b(a, d.D)); d.D = e._styleAst
            }
          } else this.o(a, d), d.ia && d.ia.length && this.I(a, d)
        }; k.prototype.l = function (a) { return (a = a.getRootNode().host) ? r.get(a) ? a : this.l(a) : this.g }; k.prototype.j = function (a) { return a === this.g }; k.prototype.I = function (a, b) { var c = N(a).is, d = Mc.fetch(c, b.H, b.ia), e = d ? d.styleElement : null, f = b.w; b.w = d && d.w || this.Y(c); e = J.u(a, b.H, b.w, e); u || J.o(a, b.w, f); d || Mc.b(c, b.H, e, b.w) }; k.prototype.o = function (a,
          b) { var c = this.l(a), d = r.get(c); c = Object.create(d.H || null); var e = J.Y(a, b.D); a = J.Z(d.D, a).C; Object.assign(c, e.Ua, a, e.$a); this.aa(c, b.L); J.$(c); b.H = c }; k.prototype.aa = function (a, b) { for (var c in b) { var d = b[c]; if (d || 0 === d) a[c] = d } }; k.prototype.styleDocument = function (a) { this.styleSubtree(this.g, a) }; k.prototype.styleSubtree = function (a, b) {
            var c = a.shadowRoot; (c || this.j(a)) && this.styleElement(a, b); if (b = c && (c.children || c.childNodes)) for (a = 0; a < b.length; a++)this.styleSubtree(b[a]); else if (a = a.children || a.childNodes) for (b =
              0; b < a.length; b++)this.styleSubtree(a[b])
          }; k.prototype.za = function (a) { for (var b = 0; b < a.length; b++) { var c = this.b.getStyleForCustomStyle(a[b]); c && this.ya(c) } }; k.prototype.B = function (a) { for (var b = 0; b < a.length; b++) { var c = this.b.getStyleForCustomStyle(a[b]); c && J.m(c, this.h.H) } }; k.prototype.u = function (a) { var b = this, c = ka(a); S(c, function (a) { u ? t.o(a) : t.G(a); w && (b.c(), b.a && b.a.transformRule(a)) }); w ? a.textContent = R(c) : this.h.D.rules.push(c) }; k.prototype.ya = function (a) {
            if (w && this.a) {
              var b = ka(a); this.c(); this.a.transformRules(b);
              a.textContent = R(b)
            }
          }; k.prototype.getComputedStyleValue = function (a, b) { var c; w || (c = (r.get(a) || r.get(this.l(a))).H[b]); return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : "" }; k.prototype.Ca = function (a, b) { var c = a.getRootNode(); b = b ? b.split(/\s/) : []; c = c.host && c.host.localName; if (!c) { var d = a.getAttribute("class"); if (d) { d = d.split(/\s/); for (var e = 0; e < d.length; e++)if (d[e] === t.c) { c = d[e + 1]; break } } } c && b.push(t.c, c); w || (c = r.get(a)) && c.w && b.push(J.g, c.w); la(a, b.join(" ")) }; k.prototype.Aa = function (a) { return r.get(a) };
    k.prototype.flush = k.prototype.A; k.prototype.prepareTemplate = k.prototype.prepareTemplate; k.prototype.styleElement = k.prototype.styleElement; k.prototype.styleDocument = k.prototype.styleDocument; k.prototype.styleSubtree = k.prototype.styleSubtree; k.prototype.getComputedStyleValue = k.prototype.getComputedStyleValue; k.prototype.setElementClass = k.prototype.Ca; k.prototype._styleInfoForNode = k.prototype.Aa; k.prototype.transformCustomStyleForDocument = k.prototype.u; k.prototype.getStyleAst = k.prototype.Ba; k.prototype.styleAstToString =
      k.prototype.Da; k.prototype.flushCustomStyles = k.prototype.f; Object.defineProperties(k.prototype, { nativeShadow: { get: function () { return u } }, nativeCss: { get: function () { return w } } }); var F = new k; if (window.ShadyCSS) { var Nc = window.ShadyCSS.ApplyShim; var Oc = window.ShadyCSS.CustomStyleInterface } window.ShadyCSS = {
        ScopingShim: F, prepareTemplate: function (a, b, c) { F.f(); F.prepareTemplate(a, b, c) }, styleSubtree: function (a, b) { F.f(); F.styleSubtree(a, b) }, styleElement: function (a) { F.f(); F.styleElement(a) }, styleDocument: function (a) {
          F.f();
          F.styleDocument(a)
        }, getComputedStyleValue: function (a, b) { return F.getComputedStyleValue(a, b) }, nativeCss: w, nativeShadow: u
      }; Nc && (window.ShadyCSS.ApplyShim = Nc); Oc && (window.ShadyCSS.CustomStyleInterface = Oc); (function () {
        function a() { requestAnimationFrame(function () { window.WebComponents.ready = !0; window.document.dispatchEvent(new CustomEvent("WebComponentsReady", { bubbles: !0 })) }) } function b() { a(); c.removeEventListener("readystatechange", b) } var c = window.document; window.WebComponents = window.WebComponents || {};
        "loading" !== c.readyState ? a() : c.addEventListener("readystatechange", b)
      })()
  })();
}).call(this);