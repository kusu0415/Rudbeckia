function $yubin(e) { AjaxZip3.callback(e) }! function(e, t) { "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) { if (!e.document) throw new Error("jQuery requires a window with a document"); return t(e) } : t(e) }("undefined" != typeof window ? window : this, function(h, e) {
    function t(e, t) { return t.toUpperCase() } var f = [],
        c = f.slice,
        m = f.concat,
        s = f.push,
        r = f.indexOf,
        n = {},
        i = n.toString,
        g = n.hasOwnProperty,
        v = {},
        o = "1.11.1",
        T = function(e, t) { return new T.fn.init(e, t) },
        a = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        l = /^-ms-/,
        u = /-([\da-z])/gi;

    function d(e) { var t = e.length,
            n = T.type(e); return "function" !== n && !T.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)) }
    T.fn = T.prototype = { jquery: o, constructor: T, selector: "", length: 0, toArray: function() { return c.call(this) }, get: function(e) { return null != e ? e < 0 ? this[e + this.length] : this[e] : c.call(this) }, pushStack: function(e) { var t = T.merge(this.constructor(), e); return t.prevObject = this, t.context = this.context, t }, each: function(e, t) { return T.each(this, e, t) }, map: function(n) { return this.pushStack(T.map(this, function(e, t) { return n.call(e, t, e) })) }, slice: function() { return this.pushStack(c.apply(this, arguments)) }, first: function() { return this.eq(0) }, last: function() { return this.eq(-1) }, eq: function(e) { var t = this.length,
                n = +e + (e < 0 ? t : 0); return this.pushStack(0 <= n && n < t ? [this[n]] : []) }, end: function() { return this.prevObject || this.constructor(null) }, push: s, sort: f.sort, splice: f.splice }, T.extend = T.fn.extend = function() { var e, t, n, i, r, o, a = arguments[0] || {},
            s = 1,
            l = arguments.length,
            u = !1; for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || T.isFunction(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
            if (null != (r = arguments[s]))
                for (i in r) e = a[i], a !== (n = r[i]) && (u && n && (T.isPlainObject(n) || (t = T.isArray(n))) ? (o = t ? (t = !1, e && T.isArray(e) ? e : []) : e && T.isPlainObject(e) ? e : {}, a[i] = T.extend(u, o, n)) : void 0 !== n && (a[i] = n));
        return a }, T.extend({ expando: "jQuery" + (o + Math.random()).replace(/\D/g, ""), isReady: !0, error: function(e) { throw new Error(e) }, noop: function() {}, isFunction: function(e) { return "function" === T.type(e) }, isArray: Array.isArray || function(e) { return "array" === T.type(e) }, isWindow: function(e) { return null != e && e == e.window }, isNumeric: function(e) { return !T.isArray(e) && 0 <= e - parseFloat(e) }, isEmptyObject: function(e) { var t; for (t in e) return !1; return !0 }, isPlainObject: function(e) { var t; if (!e || "object" !== T.type(e) || e.nodeType || T.isWindow(e)) return !1; try { if (e.constructor && !g.call(e, "constructor") && !g.call(e.constructor.prototype, "isPrototypeOf")) return !1 } catch (e) { return !1 } if (v.ownLast)
                for (t in e) return g.call(e, t); for (t in e); return void 0 === t || g.call(e, t) }, type: function(e) { return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e }, globalEval: function(e) { e && T.trim(e) && (h.execScript || function(e) { h.eval.call(h, e) })(e) }, camelCase: function(e) { return e.replace(l, "ms-").replace(u, t) }, nodeName: function(e, t) { return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase() }, each: function(e, t, n) { var i = 0,
                r = e.length,
                o = d(e); if (n) { if (o)
                    for (; i < r && !1 !== t.apply(e[i], n); i++);
                else
                    for (i in e)
                        if (!1 === t.apply(e[i], n)) break } else if (o)
                for (; i < r && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break; return e }, trim: function(e) { return null == e ? "" : (e + "").replace(a, "") }, makeArray: function(e, t) { var n = t || []; return null != e && (d(Object(e)) ? T.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n }, inArray: function(e, t, n) { var i; if (t) { if (r) return r.call(t, e, n); for (i = t.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                    if (n in t && t[n] === e) return n } return -1 }, merge: function(e, t) { for (var n = +t.length, i = 0, r = e.length; i < n;) e[r++] = t[i++]; if (n != n)
                for (; void 0 !== t[i];) e[r++] = t[i++]; return e.length = r, e }, grep: function(e, t, n) { for (var i = [], r = 0, o = e.length, a = !n; r < o; r++) !t(e[r], r) != a && i.push(e[r]); return i }, map: function(e, t, n) { var i, r = 0,
                o = e.length,
                a = []; if (d(e))
                for (; r < o; r++) null != (i = t(e[r], r, n)) && a.push(i);
            else
                for (r in e) null != (i = t(e[r], r, n)) && a.push(i); return m.apply([], a) }, guid: 1, proxy: function(e, t) { var n, i, r; return "string" == typeof t && (r = e[t], t = e, e = r), T.isFunction(e) ? (n = c.call(arguments, 2), (i = function() { return e.apply(t || this, n.concat(c.call(arguments))) }).guid = e.guid = e.guid || T.guid++, i) : void 0 }, now: function() { return +new Date }, support: v }), T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) { n["[object " + t + "]"] = t.toLowerCase() }); var p = function(n) {
        function f(e, t, n) { var i = "0x" + t - 65536; return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320) } var e, h, b, o, i, m, d, g, w, u, c, v, A, r, y, x, a, s, T, C = "sizzle" + -new Date,
            E = n.document,
            N = 0,
            p = 0,
            l = re(),
            j = re(),
            k = re(),
            S = function(e, t) { return e === t && (c = !0), 0 },
            D = "undefined",
            L = {}.hasOwnProperty,
            t = [],
            H = t.pop,
            F = t.push,
            q = t.push,
            M = t.slice,
            P = t.indexOf || function(e) { for (var t = 0, n = this.length; t < n; t++)
                    if (this[t] === e) return t;
                return -1 },
            O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            B = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            _ = B.replace("w", "w#"),
            z = "\\[" + R + "*(" + B + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + _ + "))|)" + R + "*\\]",
            Z = ":(" + B + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + z + ")*)|.*)\\)|)",
            W = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            I = new RegExp("^" + R + "*," + R + "*"),
            $ = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            X = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]", "g"),
            U = new RegExp(Z),
            V = new RegExp("^" + _ + "$"),
            J = { ID: new RegExp("^#(" + B + ")"), CLASS: new RegExp("^\\.(" + B + ")"), TAG: new RegExp("^(" + B.replace("w", "w*") + ")"), ATTR: new RegExp("^" + z), PSEUDO: new RegExp("^" + Z), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"), bool: new RegExp("^(?:" + O + ")$", "i"), needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i") },
            Y = /^(?:input|select|textarea|button)$/i,
            G = /^h\d$/i,
            Q = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = /'|\\/g,
            ne = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"); try { q.apply(t = M.call(E.childNodes), E.childNodes), t[E.childNodes.length].nodeType } catch (e) { q = { apply: t.length ? function(e, t) { F.apply(e, M.call(t)) } : function(e, t) { for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1 } } }

        function ie(e, t, n, i) { var r, o, a, s, l, u, c, f, d, p; if ((t ? t.ownerDocument || t : E) !== A && v(t), n = n || [], !e || "string" != typeof e) return n; if (1 !== (s = (t = t || A).nodeType) && 9 !== s) return []; if (y && !i) { if (r = K.exec(e))
                    if (a = r[1]) { if (9 === s) { if (!(o = t.getElementById(a)) || !o.parentNode) return n; if (o.id === a) return n.push(o), n } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && T(t, o) && o.id === a) return n.push(o), n } else { if (r[2]) return q.apply(n, t.getElementsByTagName(e)), n; if ((a = r[3]) && h.getElementsByClassName && t.getElementsByClassName) return q.apply(n, t.getElementsByClassName(a)), n }
                if (h.qsa && (!x || !x.test(e))) { if (f = c = C, d = t, p = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) { for (u = m(e), (c = t.getAttribute("id")) ? f = c.replace(te, "\\$&") : t.setAttribute("id", f), f = "[id='" + f + "'] ", l = u.length; l--;) u[l] = f + he(u[l]);
                        d = ee.test(e) && de(t.parentNode) || t, p = u.join(",") } if (p) try { return q.apply(n, d.querySelectorAll(p)), n } catch (e) {} finally { c || t.removeAttribute("id") } } } return g(e.replace(W, "$1"), t, n, i) }

        function re() { var i = []; return function e(t, n) { return i.push(t + " ") > b.cacheLength && delete e[i.shift()], e[t + " "] = n } }

        function oe(e) { return e[C] = !0, e }

        function ae(e) { var t = A.createElement("div"); try { return !!e(t) } catch (e) { return !1 } finally { t.parentNode && t.parentNode.removeChild(t), t = null } }

        function se(e, t) { for (var n = e.split("|"), i = e.length; i--;) b.attrHandle[n[i]] = t }

        function le(e, t) { var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31); if (i) return i; if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1 }

        function ue(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

        function ce(n) { return function(e) { var t = e.nodeName.toLowerCase(); return ("input" === t || "button" === t) && e.type === n } }

        function fe(a) { return oe(function(o) { return o = +o, oe(function(e, t) { for (var n, i = a([], e.length, o), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n])) }) }) }

        function de(e) { return e && typeof e.getElementsByTagName !== D && e } for (e in h = ie.support = {}, i = ie.isXML = function(e) { var t = e && (e.ownerDocument || e).documentElement; return !!t && "HTML" !== t.nodeName }, v = ie.setDocument = function(e) { var t, l = e ? e.ownerDocument || e : E,
                    n = l.defaultView; return l !== A && 9 === l.nodeType && l.documentElement ? (r = (A = l).documentElement, y = !i(l), n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", function() { v() }, !1) : n.attachEvent && n.attachEvent("onunload", function() { v() })), h.attributes = ae(function(e) { return e.className = "i", !e.getAttribute("className") }), h.getElementsByTagName = ae(function(e) { return e.appendChild(l.createComment("")), !e.getElementsByTagName("*").length }), h.getElementsByClassName = Q.test(l.getElementsByClassName) && ae(function(e) { return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length }), h.getById = ae(function(e) { return r.appendChild(e).id = C, !l.getElementsByName || !l.getElementsByName(C).length }), h.getById ? (b.find.ID = function(e, t) { if (typeof t.getElementById !== D && y) { var n = t.getElementById(e); return n && n.parentNode ? [n] : [] } }, b.filter.ID = function(e) { var t = e.replace(ne, f); return function(e) { return e.getAttribute("id") === t } }) : (delete b.find.ID, b.filter.ID = function(e) { var n = e.replace(ne, f); return function(e) { var t = typeof e.getAttributeNode !== D && e.getAttributeNode("id"); return t && t.value === n } }), b.find.TAG = h.getElementsByTagName ? function(e, t) { return typeof t.getElementsByTagName !== D ? t.getElementsByTagName(e) : void 0 } : function(e, t) { var n, i = [],
                        r = 0,
                        o = t.getElementsByTagName(e); if ("*" !== e) return o; for (; n = o[r++];) 1 === n.nodeType && i.push(n); return i }, b.find.CLASS = h.getElementsByClassName && function(e, t) { return typeof t.getElementsByClassName !== D && y ? t.getElementsByClassName(e) : void 0 }, a = [], x = [], (h.qsa = Q.test(l.querySelectorAll)) && (ae(function(e) { e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && x.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || x.push("\\[" + R + "*(?:value|" + O + ")"), e.querySelectorAll(":checked").length || x.push(":checked") }), ae(function(e) { var t = l.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && x.push("name" + R + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || x.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), x.push(",.*:") })), (h.matchesSelector = Q.test(s = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.oMatchesSelector || r.msMatchesSelector)) && ae(function(e) { h.disconnectedMatch = s.call(e, "div"), s.call(e, "[s!='']:x"), a.push("!=", Z) }), x = x.length && new RegExp(x.join("|")), a = a.length && new RegExp(a.join("|")), t = Q.test(r.compareDocumentPosition), T = t || Q.test(r.contains) ? function(e, t) { var n = 9 === e.nodeType ? e.documentElement : e,
                        i = t && t.parentNode; return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i))) } : function(e, t) { if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1 }, S = t ? function(e, t) { if (e === t) return c = !0, 0; var n = !e.compareDocumentPosition - !t.compareDocumentPosition; return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === l || e.ownerDocument === E && T(E, e) ? -1 : t === l || t.ownerDocument === E && T(E, t) ? 1 : u ? P.call(u, e) - P.call(u, t) : 0 : 4 & n ? -1 : 1) } : function(e, t) { if (e === t) return c = !0, 0; var n, i = 0,
                        r = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t]; if (!r || !o) return e === l ? -1 : t === l ? 1 : r ? -1 : o ? 1 : u ? P.call(u, e) - P.call(u, t) : 0; if (r === o) return le(e, t); for (n = e; n = n.parentNode;) a.unshift(n); for (n = t; n = n.parentNode;) s.unshift(n); for (; a[i] === s[i];) i++; return i ? le(a[i], s[i]) : a[i] === E ? -1 : s[i] === E ? 1 : 0 }, l) : A }, ie.matches = function(e, t) { return ie(e, null, null, t) }, ie.matchesSelector = function(e, t) { if ((e.ownerDocument || e) !== A && v(e), t = t.replace(X, "='$1']"), !(!h.matchesSelector || !y || a && a.test(t) || x && x.test(t))) try { var n = s.call(e, t); if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n } catch (e) {}
                return 0 < ie(t, A, null, [e]).length }, ie.contains = function(e, t) { return (e.ownerDocument || e) !== A && v(e), T(e, t) }, ie.attr = function(e, t) {
                (e.ownerDocument || e) !== A && v(e); var n = b.attrHandle[t.toLowerCase()],
                    i = n && L.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !y) : void 0; return void 0 !== i ? i : h.attributes || !y ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }, ie.error = function(e) { throw new Error("Syntax error, unrecognized expression: " + e) }, ie.uniqueSort = function(e) { var t, n = [],
                    i = 0,
                    r = 0; if (c = !h.detectDuplicates, u = !h.sortStable && e.slice(0), e.sort(S), c) { for (; t = e[r++];) t === e[r] && (i = n.push(r)); for (; i--;) e.splice(n[i], 1) } return u = null, e }, o = ie.getText = function(e) { var t, n = "",
                    i = 0,
                    r = e.nodeType; if (r) { if (1 === r || 9 === r || 11 === r) { if ("string" == typeof e.textContent) return e.textContent; for (e = e.firstChild; e; e = e.nextSibling) n += o(e) } else if (3 === r || 4 === r) return e.nodeValue } else
                    for (; t = e[i++];) n += o(t); return n }, (b = ie.selectors = { cacheLength: 50, createPseudo: oe, match: J, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e) { return e[1] = e[1].replace(ne, f), e[3] = (e[3] || e[4] || e[5] || "").replace(ne, f), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4) }, CHILD: function(e) { return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ie.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ie.error(e[0]), e }, PSEUDO: function(e) { var t, n = !e[6] && e[2]; return J.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && U.test(n) && (t = m(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3)) } }, filter: { TAG: function(e) { var t = e.replace(ne, f).toLowerCase(); return "*" === e ? function() { return !0 } : function(e) { return e.nodeName && e.nodeName.toLowerCase() === t } }, CLASS: function(e) { var t = l[e + " "]; return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && l(e, function(e) { return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== D && e.getAttribute("class") || "") }) }, ATTR: function(n, i, r) { return function(e) { var t = ie.attr(e, n); return null == t ? "!=" === i : !i || (t += "", "=" === i ? t === r : "!=" === i ? t !== r : "^=" === i ? r && 0 === t.indexOf(r) : "*=" === i ? r && -1 < t.indexOf(r) : "$=" === i ? r && t.slice(-r.length) === r : "~=" === i ? -1 < (" " + t + " ").indexOf(r) : "|=" === i && (t === r || t.slice(0, r.length + 1) === r + "-")) } }, CHILD: function(p, e, t, h, m) { var g = "nth" !== p.slice(0, 3),
                            v = "last" !== p.slice(-4),
                            y = "of-type" === e; return 1 === h && 0 === m ? function(e) { return !!e.parentNode } : function(e, t, n) { var i, r, o, a, s, l, u = g != v ? "nextSibling" : "previousSibling",
                                c = e.parentNode,
                                f = y && e.nodeName.toLowerCase(),
                                d = !n && !y; if (c) { if (g) { for (; u;) { for (o = e; o = o[u];)
                                            if (y ? o.nodeName.toLowerCase() === f : 1 === o.nodeType) return !1;
                                        l = u = "only" === p && !l && "nextSibling" } return !0 } if (l = [v ? c.firstChild : c.lastChild], v && d) { for (s = (i = (r = c[C] || (c[C] = {}))[p] || [])[0] === N && i[1], a = i[0] === N && i[2], o = s && c.childNodes[s]; o = ++s && o && o[u] || (a = s = 0) || l.pop();)
                                        if (1 === o.nodeType && ++a && o === e) { r[p] = [N, s, a]; break } } else if (d && (i = (e[C] || (e[C] = {}))[p]) && i[0] === N) a = i[1];
                                else
                                    for (;
                                        (o = ++s && o && o[u] || (a = s = 0) || l.pop()) && ((y ? o.nodeName.toLowerCase() !== f : 1 !== o.nodeType) || !++a || (d && ((o[C] || (o[C] = {}))[p] = [N, a]), o !== e));); return (a -= m) === h || a % h == 0 && 0 <= a / h } } }, PSEUDO: function(e, o) { var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || ie.error("unsupported pseudo: " + e); return a[C] ? a(o) : 1 < a.length ? (t = [e, e, "", o], b.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, t) { for (var n, i = a(e, o), r = i.length; r--;) e[n = P.call(e, i[r])] = !(t[n] = i[r]) }) : function(e) { return a(e, 0, t) }) : a } }, pseudos: { not: oe(function(e) { var i = [],
                            r = [],
                            s = d(e.replace(W, "$1")); return s[C] ? oe(function(e, t, n, i) { for (var r, o = s(e, null, i, []), a = e.length; a--;)(r = o[a]) && (e[a] = !(t[a] = r)) }) : function(e, t, n) { return i[0] = e, s(i, null, n, r), !r.pop() } }), has: oe(function(t) { return function(e) { return 0 < ie(t, e).length } }), contains: oe(function(t) { return function(e) { return -1 < (e.textContent || e.innerText || o(e)).indexOf(t) } }), lang: oe(function(n) { return V.test(n || "") || ie.error("unsupported lang: " + n), n = n.replace(ne, f).toLowerCase(),
                            function(e) { var t;
                                do { if (t = y ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-") } while ((e = e.parentNode) && 1 === e.nodeType); return !1 } }), target: function(e) { var t = n.location && n.location.hash; return t && t.slice(1) === e.id }, root: function(e) { return e === r }, focus: function(e) { return e === A.activeElement && (!A.hasFocus || A.hasFocus()) && !!(e.type || e.href || ~e.tabIndex) }, enabled: function(e) { return !1 === e.disabled }, disabled: function(e) { return !0 === e.disabled }, checked: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && !!e.checked || "option" === t && !!e.selected }, selected: function(e) { return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected }, empty: function(e) { for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0 }, parent: function(e) { return !b.pseudos.empty(e) }, header: function(e) { return G.test(e.nodeName) }, input: function(e) { return Y.test(e.nodeName) }, button: function(e) { var t = e.nodeName.toLowerCase(); return "input" === t && "button" === e.type || "button" === t }, text: function(e) { var t; return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase()) }, first: fe(function() { return [0] }), last: fe(function(e, t) { return [t - 1] }), eq: fe(function(e, t, n) { return [n < 0 ? n + t : n] }), even: fe(function(e, t) { for (var n = 0; n < t; n += 2) e.push(n); return e }), odd: fe(function(e, t) { for (var n = 1; n < t; n += 2) e.push(n); return e }), lt: fe(function(e, t, n) { for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i); return e }), gt: fe(function(e, t, n) { for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i); return e }) } }).pseudos.nth = b.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) b.pseudos[e] = ue(e); for (e in { submit: !0, reset: !0 }) b.pseudos[e] = ce(e);

        function pe() {}

        function he(e) { for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value; return i }

        function me(a, e, t) { var s = e.dir,
                l = t && "parentNode" === s,
                u = p++; return e.first ? function(e, t, n) { for (; e = e[s];)
                    if (1 === e.nodeType || l) return a(e, t, n) } : function(e, t, n) { var i, r, o = [N, u]; if (n) { for (; e = e[s];)
                        if ((1 === e.nodeType || l) && a(e, t, n)) return !0 } else
                    for (; e = e[s];)
                        if (1 === e.nodeType || l) { if ((i = (r = e[C] || (e[C] = {}))[s]) && i[0] === N && i[1] === u) return o[2] = i[2]; if ((r[s] = o)[2] = a(e, t, n)) return !0 } } }

        function ge(r) { return 1 < r.length ? function(e, t, n) { for (var i = r.length; i--;)
                    if (!r[i](e, t, n)) return !1;
                return !0 } : r[0] }

        function ve(e, t, n, i, r) { for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++) !(o = e[s]) || n && !n(o, i, r) || (a.push(o), u && t.push(s)); return a }

        function ye(p, h, m, g, v, e) { return g && !g[C] && (g = ye(g)), v && !v[C] && (v = ye(v, e)), oe(function(e, t, n, i) { var r, o, a, s = [],
                    l = [],
                    u = t.length,
                    c = e || function(e, t, n) { for (var i = 0, r = t.length; i < r; i++) ie(e, t[i], n); return n }(h || "*", n.nodeType ? [n] : n, []),
                    f = !p || !e && h ? c : ve(c, s, p, n, i),
                    d = m ? v || (e ? p : u || g) ? [] : t : f; if (m && m(f, d, n, i), g)
                    for (r = ve(d, l), g(r, [], n, i), o = r.length; o--;)(a = r[o]) && (d[l[o]] = !(f[l[o]] = a)); if (e) { if (v || p) { if (v) { for (r = [], o = d.length; o--;)(a = d[o]) && r.push(f[o] = a);
                            v(null, d = [], r, i) } for (o = d.length; o--;)(a = d[o]) && -1 < (r = v ? P.call(e, a) : s[o]) && (e[r] = !(t[r] = a)) } } else d = ve(d === t ? d.splice(u, d.length) : d), v ? v(null, t, d, i) : q.apply(t, d) }) }

        function xe(e) { for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, l = me(function(e) { return e === i }, a, !0), u = me(function(e) { return -1 < P.call(i, e) }, a, !0), c = [function(e, t, n) { return !o && (n || t !== w) || ((i = t).nodeType ? l(e, t, n) : u(e, t, n)) }]; s < r; s++)
                if (t = b.relative[e[s].type]) c = [me(ge(c), t)];
                else { if ((t = b.filter[e[s].type].apply(null, e[s].matches))[C]) { for (n = ++s; n < r && !b.relative[e[n].type]; n++); return ye(1 < s && ge(c), 1 < s && he(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(W, "$1"), t, s < n && xe(e.slice(s, n)), n < r && xe(e = e.slice(n)), n < r && he(e)) }
                    c.push(t) }
            return ge(c) } return pe.prototype = b.filters = b.pseudos, b.setFilters = new pe, m = ie.tokenize = function(e, t) { var n, i, r, o, a, s, l, u = j[e + " "]; if (u) return t ? 0 : u.slice(0); for (a = e, s = [], l = b.preFilter; a;) { for (o in n && !(i = I.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(r = [])), n = !1, (i = $.exec(a)) && (n = i.shift(), r.push({ value: n, type: i[0].replace(W, " ") }), a = a.slice(n.length)), b.filter) !(i = J[o].exec(a)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({ value: n, type: o, matches: i }), a = a.slice(n.length)); if (!n) break } return t ? a.length : a ? ie.error(e) : j(e, s).slice(0) }, d = ie.compile = function(e, t) { var n, i = [],
                r = [],
                o = k[e + " "]; if (!o) { for (n = (t = t || m(e)).length; n--;)(o = xe(t[n]))[C] ? i.push(o) : r.push(o);
                (o = k(e, function(g, v) {
                    function e(e, t, n, i, r) { var o, a, s, l = 0,
                            u = "0",
                            c = e && [],
                            f = [],
                            d = w,
                            p = e || x && b.find.TAG("*", r),
                            h = N += null == d ? 1 : Math.random() || .1,
                            m = p.length; for (r && (w = t !== A && t); u !== m && null != (o = p[u]); u++) { if (x && o) { for (a = 0; s = g[a++];)
                                    if (s(o, t, n)) { i.push(o); break }
                                r && (N = h) }
                            y && ((o = !s && o) && l--, e && c.push(o)) } if (l += u, y && u !== l) { for (a = 0; s = v[a++];) s(c, f, t, n); if (e) { if (0 < l)
                                    for (; u--;) c[u] || f[u] || (f[u] = H.call(i));
                                f = ve(f) }
                            q.apply(i, f), r && !e && 0 < f.length && 1 < l + v.length && ie.uniqueSort(i) } return r && (N = h, w = d), c } var y = 0 < v.length,
                        x = 0 < g.length; return y ? oe(e) : e }(r, i))).selector = e } return o }, g = ie.select = function(e, t, n, i) { var r, o, a, s, l, u = "function" == typeof e && e,
                c = !i && m(e = u.selector || e); if (n = n || [], 1 === c.length) { if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && h.getById && 9 === t.nodeType && y && b.relative[o[1].type]) { if (!(t = (b.find.ID(a.matches[0].replace(ne, f), t) || [])[0])) return n;
                    u && (t = t.parentNode), e = e.slice(o.shift().value.length) } for (r = J.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r], !b.relative[s = a.type]);)
                    if ((l = b.find[s]) && (i = l(a.matches[0].replace(ne, f), ee.test(o[0].type) && de(t.parentNode) || t))) { if (o.splice(r, 1), !(e = i.length && he(o))) return q.apply(n, i), n; break } } return (u || d(e, c))(i, t, !y, n, ee.test(e) && de(t.parentNode) || t), n }, h.sortStable = C.split("").sort(S).join("") === C, h.detectDuplicates = !!c, v(), h.sortDetached = ae(function(e) { return 1 & e.compareDocumentPosition(A.createElement("div")) }), ae(function(e) { return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href") }) || se("type|href|height|width", function(e, t, n) { return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2) }), h.attributes && ae(function(e) { return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value") }) || se("value", function(e, t, n) { return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue }), ae(function(e) { return null == e.getAttribute("disabled") }) || se(O, function(e, t, n) { var i; return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null }), ie }(h);
    T.find = p, T.expr = p.selectors, T.expr[":"] = T.expr.pseudos, T.unique = p.uniqueSort, T.text = p.getText, T.isXMLDoc = p.isXML, T.contains = p.contains; var y = T.expr.match.needsContext,
        x = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        b = /^.[^:#\[\.,]*$/;

    function w(e, n, i) { if (T.isFunction(n)) return T.grep(e, function(e, t) { return !!n.call(e, t, e) !== i }); if (n.nodeType) return T.grep(e, function(e) { return e === n !== i }); if ("string" == typeof n) { if (b.test(n)) return T.filter(n, e, i);
            n = T.filter(n, e) } return T.grep(e, function(e) { return 0 <= T.inArray(e, n) !== i }) }
    T.filter = function(e, t, n) { var i = t[0]; return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? T.find.matchesSelector(i, e) ? [i] : [] : T.find.matches(e, T.grep(t, function(e) { return 1 === e.nodeType })) }, T.fn.extend({ find: function(e) { var t, n = [],
                i = this,
                r = i.length; if ("string" != typeof e) return this.pushStack(T(e).filter(function() { for (t = 0; t < r; t++)
                    if (T.contains(i[t], this)) return !0 })); for (t = 0; t < r; t++) T.find(e, i[t], n); return (n = this.pushStack(1 < r ? T.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n }, filter: function(e) { return this.pushStack(w(this, e || [], !1)) }, not: function(e) { return this.pushStack(w(this, e || [], !0)) }, is: function(e) { return !!w(this, "string" == typeof e && y.test(e) ? T(e) : e || [], !1).length } }); var A, C = h.document,
        E = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (T.fn.init = function(e, t) { var n, i; if (!e) return this; if ("string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : T.isFunction(e) ? void 0 !== A.ready ? A.ready(e) : e(T) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), T.makeArray(e, this)); if (!(n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && 3 <= e.length ? [null, e, null] : E.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || A).find(e) : this.constructor(t).find(e); if (n[1]) { if (t = t instanceof T ? t[0] : t, T.merge(this, T.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : C, !0)), x.test(n[1]) && T.isPlainObject(t))
                for (n in t) T.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]); return this } if ((i = C.getElementById(n[2])) && i.parentNode) { if (i.id !== n[2]) return A.find(e);
            this.length = 1, this[0] = i } return this.context = C, this.selector = e, this }).prototype = T.fn, A = T(C); var N = /^(?:parents|prev(?:Until|All))/,
        j = { children: !0, contents: !0, next: !0, prev: !0 };

    function k(e, t) { for (;
            (e = e[t]) && 1 !== e.nodeType;); return e }
    T.extend({ dir: function(e, t, n) { for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !T(r).is(n));) 1 === r.nodeType && i.push(r), r = r[t]; return i }, sibling: function(e, t) { for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e); return n } }), T.fn.extend({ has: function(e) { var t, n = T(e, this),
                i = n.length; return this.filter(function() { for (t = 0; t < i; t++)
                    if (T.contains(this, n[t])) return !0 }) }, closest: function(e, t) { for (var n, i = 0, r = this.length, o = [], a = y.test(e) || "string" != typeof e ? T(e, t || this.context) : 0; i < r; i++)
                for (n = this[i]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && T.find.matchesSelector(n, e))) { o.push(n); break }
            return this.pushStack(1 < o.length ? T.unique(o) : o) }, index: function(e) { return e ? "string" == typeof e ? T.inArray(this[0], T(e)) : T.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 }, add: function(e, t) { return this.pushStack(T.unique(T.merge(this.get(), T(e, t)))) }, addBack: function(e) { return this.add(null == e ? this.prevObject : this.prevObject.filter(e)) } }), T.each({ parent: function(e) { var t = e.parentNode; return t && 11 !== t.nodeType ? t : null }, parents: function(e) { return T.dir(e, "parentNode") }, parentsUntil: function(e, t, n) { return T.dir(e, "parentNode", n) }, next: function(e) { return k(e, "nextSibling") }, prev: function(e) { return k(e, "previousSibling") }, nextAll: function(e) { return T.dir(e, "nextSibling") }, prevAll: function(e) { return T.dir(e, "previousSibling") }, nextUntil: function(e, t, n) { return T.dir(e, "nextSibling", n) }, prevUntil: function(e, t, n) { return T.dir(e, "previousSibling", n) }, siblings: function(e) { return T.sibling((e.parentNode || {}).firstChild, e) }, children: function(e) { return T.sibling(e.firstChild) }, contents: function(e) { return T.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : T.merge([], e.childNodes) } }, function(i, r) { T.fn[i] = function(e, t) { var n = T.map(this, r, e); return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = T.filter(t, n)), 1 < this.length && (j[i] || (n = T.unique(n)), N.test(i) && (n = n.reverse())), this.pushStack(n) } }); var S, D = /\S+/g,
        L = {};

    function H() { C.addEventListener ? (C.removeEventListener("DOMContentLoaded", F, !1), h.removeEventListener("load", F, !1)) : (C.detachEvent("onreadystatechange", F), h.detachEvent("onload", F)) }

    function F() {!C.addEventListener && "load" !== event.type && "complete" !== C.readyState || (H(), T.ready()) }
    T.Callbacks = function(r) { r = "string" == typeof r ? L[r] || function(e) { var n = L[e] = {}; return T.each(e.match(D) || [], function(e, t) { n[t] = !0 }), n }(r) : T.extend({}, r); var i, t, n, o, a, s, l = [],
            u = !r.once && [],
            c = function(e) { for (t = r.memory && e, n = !0, a = s || 0, s = 0, o = l.length, i = !0; l && a < o; a++)
                    if (!1 === l[a].apply(e[0], e[1]) && r.stopOnFalse) { t = !1; break }
                i = !1, l && (u ? u.length && c(u.shift()) : t ? l = [] : f.disable()) },
            f = { add: function() { if (l) { var e = l.length;! function i(e) { T.each(e, function(e, t) { var n = T.type(t); "function" === n ? r.unique && f.has(t) || l.push(t) : t && t.length && "string" !== n && i(t) }) }(arguments), i ? o = l.length : t && (s = e, c(t)) } return this }, remove: function() { return l && T.each(arguments, function(e, t) { for (var n; - 1 < (n = T.inArray(t, l, n));) l.splice(n, 1), i && (n <= o && o--, n <= a && a--) }), this }, has: function(e) { return e ? -1 < T.inArray(e, l) : !(!l || !l.length) }, empty: function() { return l = [], o = 0, this }, disable: function() { return l = u = t = void 0, this }, disabled: function() { return !l }, lock: function() { return u = void 0, t || f.disable(), this }, locked: function() { return !u }, fireWith: function(e, t) { return !l || n && !u || (t = [e, (t = t || []).slice ? t.slice() : t], i ? u.push(t) : c(t)), this }, fire: function() { return f.fireWith(this, arguments), this }, fired: function() { return !!n } }; return f }, T.extend({ Deferred: function(e) { var o = [
                    ["resolve", "done", T.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", T.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", T.Callbacks("memory")]
                ],
                r = "pending",
                a = { state: function() { return r }, always: function() { return s.done(arguments).fail(arguments), this }, then: function() { var r = arguments; return T.Deferred(function(i) { T.each(o, function(e, t) { var n = T.isFunction(r[e]) && r[e];
                                s[t[1]](function() { var e = n && n.apply(this, arguments);
                                    e && T.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[t[0] + "With"](this === a ? i.promise() : this, n ? [e] : arguments) }) }), r = null }).promise() }, promise: function(e) { return null != e ? T.extend(e, a) : a } },
                s = {}; return a.pipe = a.then, T.each(o, function(e, t) { var n = t[2],
                    i = t[3];
                a[t[1]] = n.add, i && n.add(function() { r = i }, o[1 ^ e][2].disable, o[2][2].lock), s[t[0]] = function() { return s[t[0] + "With"](this === s ? a : this, arguments), this }, s[t[0] + "With"] = n.fireWith }), a.promise(s), e && e.call(s, s), s }, when: function(e) {
            function t(t, n, i) { return function(e) { n[t] = this, i[t] = 1 < arguments.length ? c.call(arguments) : e, i === r ? u.notifyWith(n, i) : --l || u.resolveWith(n, i) } } var r, n, i, o = 0,
                a = c.call(arguments),
                s = a.length,
                l = 1 !== s || e && T.isFunction(e.promise) ? s : 0,
                u = 1 === l ? e : T.Deferred(); if (1 < s)
                for (r = new Array(s), n = new Array(s), i = new Array(s); o < s; o++) a[o] && T.isFunction(a[o].promise) ? a[o].promise().done(t(o, i, a)).fail(u.reject).progress(t(o, n, r)) : --l; return l || u.resolveWith(i, a), u.promise() } }), T.fn.ready = function(e) { return T.ready.promise().done(e), this }, T.extend({ isReady: !1, readyWait: 1, holdReady: function(e) { e ? T.readyWait++ : T.ready(!0) }, ready: function(e) { if (!0 === e ? !--T.readyWait : !T.isReady) { if (!C.body) return setTimeout(T.ready);
                (T.isReady = !0) !== e && 0 < --T.readyWait || (S.resolveWith(C, [T]), T.fn.triggerHandler && (T(C).triggerHandler("ready"), T(C).off("ready"))) } } }), T.ready.promise = function(e) { if (!S)
            if (S = T.Deferred(), "complete" === C.readyState) setTimeout(T.ready);
            else if (C.addEventListener) C.addEventListener("DOMContentLoaded", F, !1), h.addEventListener("load", F, !1);
        else { C.attachEvent("onreadystatechange", F), h.attachEvent("onload", F); var n = !1; try { n = null == h.frameElement && C.documentElement } catch (e) {}
            n && n.doScroll && ! function t() { if (!T.isReady) { try { n.doScroll("left") } catch (e) { return setTimeout(t, 50) }
                    H(), T.ready() } }() } return S.promise(e) }; var q, M = "undefined"; for (q in T(v)) break;
    v.ownLast = "0" !== q, v.inlineBlockNeedsLayout = !1, T(function() { var e, t, n, i;
            (n = C.getElementsByTagName("body")[0]) && n.style && (t = C.createElement("div"), (i = C.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(t), typeof t.style.zoom !== M && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", v.inlineBlockNeedsLayout = e = 3 === t.offsetWidth, e && (n.style.zoom = 1)), n.removeChild(i)) }),
        function() { var e = C.createElement("div"); if (null == v.deleteExpando) { v.deleteExpando = !0; try { delete e.test } catch (e) { v.deleteExpando = !1 } }
            e = null }(), T.acceptData = function(e) { var t = T.noData[(e.nodeName + " ").toLowerCase()],
                n = +e.nodeType || 1; return (1 === n || 9 === n) && (!t || !0 !== t && e.getAttribute("classid") === t) }; var P = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function R(e, t, n) { if (void 0 === n && 1 === e.nodeType) { var i = "data-" + t.replace(O, "-$1").toLowerCase(); if ("string" == typeof(n = e.getAttribute(i))) { try { n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : P.test(n) ? T.parseJSON(n) : n) } catch (e) {}
                T.data(e, t, n) } else n = void 0 } return n }

    function B(e) { var t; for (t in e)
            if (("data" !== t || !T.isEmptyObject(e[t])) && "toJSON" !== t) return !1;
        return !0 }

    function _(e, t, n, i) { if (T.acceptData(e)) { var r, o, a = T.expando,
                s = e.nodeType,
                l = s ? T.cache : e,
                u = s ? e[a] : e[a] && a; if (u && l[u] && (i || l[u].data) || void 0 !== n || "string" != typeof t) return l[u = u || (s ? e[a] = f.pop() || T.guid++ : a)] || (l[u] = s ? {} : { toJSON: T.noop }), "object" != typeof t && "function" != typeof t || (i ? l[u] = T.extend(l[u], t) : l[u].data = T.extend(l[u].data, t)), o = l[u], i || (o.data || (o.data = {}), o = o.data), void 0 !== n && (o[T.camelCase(t)] = n), "string" == typeof t ? null == (r = o[t]) && (r = o[T.camelCase(t)]) : r = o, r } }

    function z(e, t, n) { if (T.acceptData(e)) { var i, r, o = e.nodeType,
                a = o ? T.cache : e,
                s = o ? e[T.expando] : T.expando; if (a[s]) { if (t && (i = n ? a[s] : a[s].data)) { r = (t = T.isArray(t) ? t.concat(T.map(t, T.camelCase)) : t in i ? [t] : (t = T.camelCase(t)) in i ? [t] : t.split(" ")).length; for (; r--;) delete i[t[r]]; if (n ? !B(i) : !T.isEmptyObject(i)) return }(n || (delete a[s].data, B(a[s]))) && (o ? T.cleanData([e], !0) : v.deleteExpando || a != a.window ? delete a[s] : a[s] = null) } } }
    T.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(e) { return !!(e = e.nodeType ? T.cache[e[T.expando]] : e[T.expando]) && !B(e) }, data: function(e, t, n) { return _(e, t, n) }, removeData: function(e, t) { return z(e, t) }, _data: function(e, t, n) { return _(e, t, n, !0) }, _removeData: function(e, t) { return z(e, t, !0) } }), T.fn.extend({ data: function(e, t) { var n, i, r, o = this[0],
                a = o && o.attributes; if (void 0 !== e) return "object" == typeof e ? this.each(function() { T.data(this, e) }) : 1 < arguments.length ? this.each(function() { T.data(this, e, t) }) : o ? R(o, e, T.data(o, e)) : void 0; if (this.length && (r = T.data(o), 1 === o.nodeType && !T._data(o, "parsedAttrs"))) { for (n = a.length; n--;) a[n] && (0 === (i = a[n].name).indexOf("data-") && R(o, i = T.camelCase(i.slice(5)), r[i]));
                T._data(o, "parsedAttrs", !0) } return r }, removeData: function(e) { return this.each(function() { T.removeData(this, e) }) } }), T.extend({ queue: function(e, t, n) { var i; return e ? (t = (t || "fx") + "queue", i = T._data(e, t), n && (!i || T.isArray(n) ? i = T._data(e, t, T.makeArray(n)) : i.push(n)), i || []) : void 0 }, dequeue: function(e, t) { t = t || "fx"; var n = T.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = T._queueHooks(e, t); "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, function() { T.dequeue(e, t) }, o)), !i && o && o.empty.fire() }, _queueHooks: function(e, t) { var n = t + "queueHooks"; return T._data(e, n) || T._data(e, n, { empty: T.Callbacks("once memory").add(function() { T._removeData(e, t + "queue"), T._removeData(e, n) }) }) } }), T.fn.extend({ queue: function(t, n) { var e = 2; return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? T.queue(this[0], t) : void 0 === n ? this : this.each(function() { var e = T.queue(this, t, n);
                T._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && T.dequeue(this, t) }) }, dequeue: function(e) { return this.each(function() { T.dequeue(this, e) }) }, clearQueue: function(e) { return this.queue(e || "fx", []) }, promise: function(e, t) {
            function n() {--r || o.resolveWith(a, [a]) } var i, r = 1,
                o = T.Deferred(),
                a = this,
                s = this.length; for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; s--;)(i = T._data(a[s], e + "queueHooks")) && i.empty && (r++, i.empty.add(n)); return n(), o.promise(t) } });

    function Z(e, t) { return e = t || e, "none" === T.css(e, "display") || !T.contains(e.ownerDocument, e) } var W = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        I = ["Top", "Right", "Bottom", "Left"],
        $ = T.access = function(e, t, n, i, r, o, a) { var s = 0,
                l = e.length,
                u = null == n; if ("object" === T.type(n))
                for (s in r = !0, n) T.access(e, t, s, n[s], !0, o, a);
            else if (void 0 !== i && (r = !0, T.isFunction(i) || (a = !0), u && (t = a ? (t.call(e, i), null) : (u = t, function(e, t, n) { return u.call(T(e), n) })), t))
                for (; s < l; s++) t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n))); return r ? e : u ? t.call(e) : l ? t(e[0], n) : o },
        X = /^(?:checkbox|radio)$/i;! function() { var e = C.createElement("input"),
            t = C.createElement("div"),
            n = C.createDocumentFragment(); if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", v.leadingWhitespace = 3 === t.firstChild.nodeType, v.tbody = !t.getElementsByTagName("tbody").length, v.htmlSerialize = !!t.getElementsByTagName("link").length, v.html5Clone = "<:nav></:nav>" !== C.createElement("nav").cloneNode(!0).outerHTML, e.type = "checkbox", e.checked = !0, n.appendChild(e), v.appendChecked = e.checked, t.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue, n.appendChild(t), t.innerHTML = "<input type='radio' checked='checked' name='t'/>", v.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, v.noCloneEvent = !0, t.attachEvent && (t.attachEvent("onclick", function() { v.noCloneEvent = !1 }), t.cloneNode(!0).click()), null == v.deleteExpando) { v.deleteExpando = !0; try { delete t.test } catch (e) { v.deleteExpando = !1 } } }(),
    function() { var e, t, n = C.createElement("div"); for (e in { submit: !0, change: !0, focusin: !0 }) t = "on" + e, (v[e + "Bubbles"] = t in h) || (n.setAttribute(t, "t"), v[e + "Bubbles"] = !1 === n.attributes[t].expando);
        n = null }(); var U = /^(?:input|select|textarea)$/i,
        V = /^key/,
        J = /^(?:mouse|pointer|contextmenu)|click/,
        Y = /^(?:focusinfocus|focusoutblur)$/,
        G = /^([^.]*)(?:\.(.+)|)$/;

    function Q() { return !0 }

    function K() { return !1 }

    function ee() { try { return C.activeElement } catch (e) {} }

    function te(e) { var t = ne.split("|"),
            n = e.createDocumentFragment(); if (n.createElement)
            for (; t.length;) n.createElement(t.pop()); return n }
    T.event = { global: {}, add: function(e, t, n, i, r) { var o, a, s, l, u, c, f, d, p, h, m, g = T._data(e); if (g) { for (n.handler && (n = (l = n).handler, r = l.selector), n.guid || (n.guid = T.guid++), (a = g.events) || (a = g.events = {}), (c = g.handle) || ((c = g.handle = function(e) { return typeof T === M || e && T.event.triggered === e.type ? void 0 : T.event.dispatch.apply(c.elem, arguments) }).elem = e), s = (t = (t || "").match(D) || [""]).length; s--;) p = m = (o = G.exec(t[s]) || [])[1], h = (o[2] || "").split(".").sort(), p && (u = T.event.special[p] || {}, p = (r ? u.delegateType : u.bindType) || p, u = T.event.special[p] || {}, f = T.extend({ type: p, origType: m, data: i, handler: n, guid: n.guid, selector: r, needsContext: r && T.expr.match.needsContext.test(r), namespace: h.join(".") }, l), (d = a[p]) || ((d = a[p] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, i, h, c) || (e.addEventListener ? e.addEventListener(p, c, !1) : e.attachEvent && e.attachEvent("on" + p, c))), u.add && (u.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, f) : d.push(f), T.event.global[p] = !0);
                e = null } }, remove: function(e, t, n, i, r) { var o, a, s, l, u, c, f, d, p, h, m, g = T.hasData(e) && T._data(e); if (g && (c = g.events)) { for (u = (t = (t || "").match(D) || [""]).length; u--;)
                    if (p = m = (s = G.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), p) { for (f = T.event.special[p] || {}, d = c[p = (i ? f.delegateType : f.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = d.length; o--;) a = d[o], !r && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || i && i !== a.selector && ("**" !== i || !a.selector) || (d.splice(o, 1), a.selector && d.delegateCount--, f.remove && f.remove.call(e, a));
                        l && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, g.handle) || T.removeEvent(e, p, g.handle), delete c[p]) } else
                        for (p in c) T.event.remove(e, p + t[u], n, i, !0);
                T.isEmptyObject(c) && (delete g.handle, T._removeData(e, "events")) } }, trigger: function(e, t, n, i) { var r, o, a, s, l, u, c, f = [n || C],
                d = g.call(e, "type") ? e.type : e,
                p = g.call(e, "namespace") ? e.namespace.split(".") : []; if (a = u = n = n || C, 3 !== n.nodeType && 8 !== n.nodeType && !Y.test(d + T.event.triggered) && (0 <= d.indexOf(".") && (d = (p = d.split(".")).shift(), p.sort()), o = d.indexOf(":") < 0 && "on" + d, (e = e[T.expando] ? e : new T.Event(d, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = p.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : T.makeArray(t, [e]), l = T.event.special[d] || {}, i || !l.trigger || !1 !== l.trigger.apply(n, t))) { if (!i && !l.noBubble && !T.isWindow(n)) { for (s = l.delegateType || d, Y.test(s + d) || (a = a.parentNode); a; a = a.parentNode) f.push(a), u = a;
                    u === (n.ownerDocument || C) && f.push(u.defaultView || u.parentWindow || h) } for (c = 0;
                    (a = f[c++]) && !e.isPropagationStopped();) e.type = 1 < c ? s : l.bindType || d, (r = (T._data(a, "events") || {})[e.type] && T._data(a, "handle")) && r.apply(a, t), (r = o && a[o]) && r.apply && T.acceptData(a) && (e.result = r.apply(a, t), !1 === e.result && e.preventDefault()); if (e.type = d, !i && !e.isDefaultPrevented() && (!l._default || !1 === l._default.apply(f.pop(), t)) && T.acceptData(n) && o && n[d] && !T.isWindow(n)) {
                    (u = n[o]) && (n[o] = null), T.event.triggered = d; try { n[d]() } catch (e) {}
                    T.event.triggered = void 0, u && (n[o] = u) } return e.result } }, dispatch: function(e) { e = T.event.fix(e); var t, n, i, r, o, a = [],
                s = c.call(arguments),
                l = (T._data(this, "events") || {})[e.type] || [],
                u = T.event.special[e.type] || {}; if ((s[0] = e).delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) { for (a = T.event.handlers.call(this, e, l), t = 0;
                    (r = a[t++]) && !e.isPropagationStopped();)
                    for (e.currentTarget = r.elem, o = 0;
                        (i = r.handlers[o++]) && !e.isImmediatePropagationStopped();) e.namespace_re && !e.namespace_re.test(i.namespace) || (e.handleObj = i, e.data = i.data, void 0 !== (n = ((T.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, s)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation())); return u.postDispatch && u.postDispatch.call(this, e), e.result } }, handlers: function(e, t) { var n, i, r, o, a = [],
                s = t.delegateCount,
                l = e.target; if (s && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) { for (r = [], o = 0; o < s; o++) void 0 === r[n = (i = t[o]).selector + " "] && (r[n] = i.needsContext ? 0 <= T(n, this).index(l) : T.find(n, this, null, [l]).length), r[n] && r.push(i);
                        r.length && a.push({ elem: l, handlers: r }) }
            return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a }, fix: function(e) { if (e[T.expando]) return e; var t, n, i, r = e.type,
                o = e,
                a = this.fixHooks[r]; for (a || (this.fixHooks[r] = a = J.test(r) ? this.mouseHooks : V.test(r) ? this.keyHooks : {}), i = a.props ? this.props.concat(a.props) : this.props, e = new T.Event(o), t = i.length; t--;) e[n = i[t]] = o[n]; return e.target || (e.target = o.srcElement || C), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(e, t) { return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function(e, t) { var n, i, r, o = t.button,
                    a = t.fromElement; return null == e.pageX && null != t.clientX && (r = (i = e.target.ownerDocument || C).documentElement, n = i.body, e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !e.relatedTarget && a && (e.relatedTarget = a === e.target ? t.toElement : a), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e } }, special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== ee() && this.focus) try { return this.focus(), !1 } catch (e) {} }, delegateType: "focusin" }, blur: { trigger: function() { return this === ee() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return T.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function(e) { return T.nodeName(e.target, "a") } }, beforeunload: { postDispatch: function(e) { void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result) } } }, simulate: function(e, t, n, i) { var r = T.extend(new T.Event, n, { type: e, isSimulated: !0, originalEvent: {} });
            i ? T.event.trigger(r, null, t) : T.event.dispatch.call(t, r), r.isDefaultPrevented() && n.preventDefault() } }, T.removeEvent = C.removeEventListener ? function(e, t, n) { e.removeEventListener && e.removeEventListener(t, n, !1) } : function(e, t, n) { var i = "on" + t;
        e.detachEvent && (typeof e[i] === M && (e[i] = null), e.detachEvent(i, n)) }, T.Event = function(e, t) { return this instanceof T.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Q : K) : this.type = e, t && T.extend(this, t), this.timeStamp = e && e.timeStamp || T.now(), void(this[T.expando] = !0)) : new T.Event(e, t) }, T.Event.prototype = { isDefaultPrevented: K, isPropagationStopped: K, isImmediatePropagationStopped: K, preventDefault: function() { var e = this.originalEvent;
            this.isDefaultPrevented = Q, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1) }, stopPropagation: function() { var e = this.originalEvent;
            this.isPropagationStopped = Q, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0) }, stopImmediatePropagation: function() { var e = this.originalEvent;
            this.isImmediatePropagationStopped = Q, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation() } }, T.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e, r) { T.event.special[e] = { delegateType: r, bindType: r, handle: function(e) { var t, n = e.relatedTarget,
                    i = e.handleObj; return n && (n === this || T.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t } } }), v.submitBubbles || (T.event.special.submit = { setup: function() { return !T.nodeName(this, "form") && void T.event.add(this, "click._submit keypress._submit", function(e) { var t = e.target,
                    n = T.nodeName(t, "input") || T.nodeName(t, "button") ? t.form : void 0;
                n && !T._data(n, "submitBubbles") && (T.event.add(n, "submit._submit", function(e) { e._submit_bubble = !0 }), T._data(n, "submitBubbles", !0)) }) }, postDispatch: function(e) { e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && T.event.simulate("submit", this.parentNode, e, !0)) }, teardown: function() { return !T.nodeName(this, "form") && void T.event.remove(this, "._submit") } }), v.changeBubbles || (T.event.special.change = { setup: function() { return U.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (T.event.add(this, "propertychange._change", function(e) { "checked" === e.originalEvent.propertyName && (this._just_changed = !0) }), T.event.add(this, "click._change", function(e) { this._just_changed && !e.isTrigger && (this._just_changed = !1), T.event.simulate("change", this, e, !0) })), !1) : void T.event.add(this, "beforeactivate._change", function(e) { var t = e.target;
                U.test(t.nodeName) && !T._data(t, "changeBubbles") && (T.event.add(t, "change._change", function(e) {!this.parentNode || e.isSimulated || e.isTrigger || T.event.simulate("change", this.parentNode, e, !0) }), T._data(t, "changeBubbles", !0)) }) }, handle: function(e) { var t = e.target; return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0 }, teardown: function() { return T.event.remove(this, "._change"), !U.test(this.nodeName) } }), v.focusinBubbles || T.each({ focus: "focusin", blur: "focusout" }, function(n, i) {
        function r(e) { T.event.simulate(i, e.target, T.event.fix(e), !0) }
        T.event.special[i] = { setup: function() { var e = this.ownerDocument || this,
                    t = T._data(e, i);
                t || e.addEventListener(n, r, !0), T._data(e, i, (t || 0) + 1) }, teardown: function() { var e = this.ownerDocument || this,
                    t = T._data(e, i) - 1;
                t ? T._data(e, i, t) : (e.removeEventListener(n, r, !0), T._removeData(e, i)) } } }), T.fn.extend({ on: function(e, t, n, i, r) { var o, a; if ("object" == typeof e) { for (o in "string" != typeof t && (n = n || t, t = void 0), e) this.on(o, t, n, e[o], r); return this } if (null == n && null == i ? (i = t, n = t = void 0) : null == i && ("string" == typeof t ? (i = n, n = void 0) : (i = n, n = t, t = void 0)), !1 === i) i = K;
            else if (!i) return this; return 1 === r && (a = i, (i = function(e) { return T().off(e), a.apply(this, arguments) }).guid = a.guid || (a.guid = T.guid++)), this.each(function() { T.event.add(this, e, i, n, t) }) }, one: function(e, t, n, i) { return this.on(e, t, n, i, 1) }, off: function(e, t, n) { var i, r; if (e && e.preventDefault && e.handleObj) return i = e.handleObj, T(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this; if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = K), this.each(function() { T.event.remove(this, e, n, t) }); for (r in e) this.off(r, t, e[r]); return this }, trigger: function(e, t) { return this.each(function() { T.event.trigger(e, t, this) }) }, triggerHandler: function(e, t) { var n = this[0]; return n ? T.event.trigger(e, t, n, !0) : void 0 } }); var ne = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        ie = / jQuery\d+="(?:null|\d+)"/g,
        re = new RegExp("<(?:" + ne + ")[\\s/>]", "i"),
        oe = /^\s+/,
        ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        se = /<([\w:]+)/,
        le = /<tbody/i,
        ue = /<|&#?\w+;/,
        ce = /<(?:script|style|link)/i,
        fe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        de = /^$|\/(?:java|ecma)script/i,
        pe = /^true\/(.*)/,
        he = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        me = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: v.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
        ge = te(C).appendChild(C.createElement("div"));

    function ve(e, t) { var n, i, r = 0,
            o = typeof e.getElementsByTagName !== M ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== M ? e.querySelectorAll(t || "*") : void 0; if (!o)
            for (o = [], n = e.childNodes || e; null != (i = n[r]); r++) !t || T.nodeName(i, t) ? o.push(i) : T.merge(o, ve(i, t)); return void 0 === t || t && T.nodeName(e, t) ? T.merge([e], o) : o }

    function ye(e) { X.test(e.type) && (e.defaultChecked = e.checked) }

    function xe(e, t) { return T.nodeName(e, "table") && T.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e }

    function be(e) { return e.type = (null !== T.find.attr(e, "type")) + "/" + e.type, e }

    function we(e) { var t = pe.exec(e.type); return t ? e.type = t[1] : e.removeAttribute("type"), e }

    function Ae(e, t) { for (var n, i = 0; null != (n = e[i]); i++) T._data(n, "globalEval", !t || T._data(t[i], "globalEval")) }

    function Te(e, t) { if (1 === t.nodeType && T.hasData(e)) { var n, i, r, o = T._data(e),
                a = T._data(t, o),
                s = o.events; if (s)
                for (n in delete a.handle, a.events = {}, s)
                    for (i = 0, r = s[n].length; i < r; i++) T.event.add(t, n, s[n][i]);
            a.data && (a.data = T.extend({}, a.data)) } }

    function Ce(e, t) { var n, i, r; if (1 === t.nodeType) { if (n = t.nodeName.toLowerCase(), !v.noCloneEvent && t[T.expando]) { for (i in (r = T._data(t)).events) T.removeEvent(t, i, r.handle);
                t.removeAttribute(T.expando) } "script" === n && t.text !== e.text ? (be(t).text = e.text, we(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), v.html5Clone && e.innerHTML && !T.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && X.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue) } }
    me.optgroup = me.option, me.tbody = me.tfoot = me.colgroup = me.caption = me.thead, me.th = me.td, T.extend({ clone: function(e, t, n) { var i, r, o, a, s, l = T.contains(e.ownerDocument, e); if (v.html5Clone || T.isXMLDoc(e) || !re.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (ge.innerHTML = e.outerHTML, ge.removeChild(o = ge.firstChild)), !(v.noCloneEvent && v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || T.isXMLDoc(e)))
                for (i = ve(o), s = ve(e), a = 0; null != (r = s[a]); ++a) i[a] && Ce(r, i[a]); if (t)
                if (n)
                    for (s = s || ve(e), i = i || ve(o), a = 0; null != (r = s[a]); a++) Te(r, i[a]);
                else Te(e, o);
            return 0 < (i = ve(o, "script")).length && Ae(i, !l && ve(e, "script")), i = s = r = null, o }, buildFragment: function(e, t, n, i) { for (var r, o, a, s, l, u, c, f = e.length, d = te(t), p = [], h = 0; h < f; h++)
                if ((o = e[h]) || 0 === o)
                    if ("object" === T.type(o)) T.merge(p, o.nodeType ? [o] : o);
                    else if (ue.test(o)) { for (s = s || d.appendChild(t.createElement("div")), l = (se.exec(o) || ["", ""])[1].toLowerCase(), c = me[l] || me._default, s.innerHTML = c[1] + o.replace(ae, "<$1></$2>") + c[2], r = c[0]; r--;) s = s.lastChild; if (!v.leadingWhitespace && oe.test(o) && p.push(t.createTextNode(oe.exec(o)[0])), !v.tbody)
                    for (r = (o = "table" !== l || le.test(o) ? "<table>" !== c[1] || le.test(o) ? 0 : s : s.firstChild) && o.childNodes.length; r--;) T.nodeName(u = o.childNodes[r], "tbody") && !u.childNodes.length && o.removeChild(u); for (T.merge(p, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
                s = d.lastChild } else p.push(t.createTextNode(o)); for (s && d.removeChild(s), v.appendChecked || T.grep(ve(p, "input"), ye), h = 0; o = p[h++];)
                if ((!i || -1 === T.inArray(o, i)) && (a = T.contains(o.ownerDocument, o), s = ve(d.appendChild(o), "script"), a && Ae(s), n))
                    for (r = 0; o = s[r++];) de.test(o.type || "") && n.push(o);
            return s = null, d }, cleanData: function(e, t) { for (var n, i, r, o, a = 0, s = T.expando, l = T.cache, u = v.deleteExpando, c = T.event.special; null != (n = e[a]); a++)
                if ((t || T.acceptData(n)) && (o = (r = n[s]) && l[r])) { if (o.events)
                        for (i in o.events) c[i] ? T.event.remove(n, i) : T.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r], u ? delete n[s] : typeof n.removeAttribute !== M ? n.removeAttribute(s) : n[s] = null, f.push(r)) } } }), T.fn.extend({ text: function(e) { return $(this, function(e) { return void 0 === e ? T.text(this) : this.empty().append((this[0] && this[0].ownerDocument || C).createTextNode(e)) }, null, e, arguments.length) }, append: function() { return this.domManip(arguments, function(e) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || xe(this, e).appendChild(e) }) }, prepend: function() { return this.domManip(arguments, function(e) { if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) { var t = xe(this, e);
                    t.insertBefore(e, t.firstChild) } }) }, before: function() { return this.domManip(arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this) }) }, after: function() { return this.domManip(arguments, function(e) { this.parentNode && this.parentNode.insertBefore(e, this.nextSibling) }) }, remove: function(e, t) { for (var n, i = e ? T.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || T.cleanData(ve(n)), n.parentNode && (t && T.contains(n.ownerDocument, n) && Ae(ve(n, "script")), n.parentNode.removeChild(n)); return this }, empty: function() { for (var e, t = 0; null != (e = this[t]); t++) { for (1 === e.nodeType && T.cleanData(ve(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && T.nodeName(e, "select") && (e.options.length = 0) } return this }, clone: function(e, t) { return e = null != e && e, t = null == t ? e : t, this.map(function() { return T.clone(this, e, t) }) }, html: function(e) { return $(this, function(e) { var t = this[0] || {},
                    n = 0,
                    i = this.length; if (void 0 === e) return 1 === t.nodeType ? t.innerHTML.replace(ie, "") : void 0; if (!("string" != typeof e || ce.test(e) || !v.htmlSerialize && re.test(e) || !v.leadingWhitespace && oe.test(e) || me[(se.exec(e) || ["", ""])[1].toLowerCase()])) { e = e.replace(ae, "<$1></$2>"); try { for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (T.cleanData(ve(t, !1)), t.innerHTML = e);
                        t = 0 } catch (e) {} }
                t && this.empty().append(e) }, null, e, arguments.length) }, replaceWith: function() { var t = arguments[0]; return this.domManip(arguments, function(e) { t = this.parentNode, T.cleanData(ve(this)), t && t.replaceChild(e, this) }), t && (t.length || t.nodeType) ? this : this.remove() }, detach: function(e) { return this.remove(e, !0) }, domManip: function(n, i) { n = m.apply([], n); var e, t, r, o, a, s, l = 0,
                u = this.length,
                c = this,
                f = u - 1,
                d = n[0],
                p = T.isFunction(d); if (p || 1 < u && "string" == typeof d && !v.checkClone && fe.test(d)) return this.each(function(e) { var t = c.eq(e);
                p && (n[0] = d.call(this, e, t.html())), t.domManip(n, i) }); if (u && (e = (s = T.buildFragment(n, this[0].ownerDocument, !1, this)).firstChild, 1 === s.childNodes.length && (s = e), e)) { for (r = (o = T.map(ve(s, "script"), be)).length; l < u; l++) t = s, l !== f && (t = T.clone(t, !0, !0), r && T.merge(o, ve(t, "script"))), i.call(this[l], t, l); if (r)
                    for (a = o[o.length - 1].ownerDocument, T.map(o, we), l = 0; l < r; l++) t = o[l], de.test(t.type || "") && !T._data(t, "globalEval") && T.contains(a, t) && (t.src ? T._evalUrl && T._evalUrl(t.src) : T.globalEval((t.text || t.textContent || t.innerHTML || "").replace(he, "")));
                s = e = null } return this } }), T.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e, a) { T.fn[e] = function(e) { for (var t, n = 0, i = [], r = T(e), o = r.length - 1; n <= o; n++) t = n === o ? this : this.clone(!0), T(r[n])[a](t), s.apply(i, t.get()); return this.pushStack(i) } }); var Ee, Ne, je = {};

    function ke(e, t) { var n, i = T(t.createElement(e)).appendTo(t.body),
            r = h.getDefaultComputedStyle && (n = h.getDefaultComputedStyle(i[0])) ? n.display : T.css(i[0], "display"); return i.detach(), r }

    function Se(e) { var t = C,
            n = je[e]; return n || ("none" !== (n = ke(e, t)) && n || ((t = ((Ee = (Ee || T("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentWindow || Ee[0].contentDocument).document).write(), t.close(), n = ke(e, t), Ee.detach()), je[e] = n), n }
    v.shrinkWrapBlocks = function() { return null != Ne ? Ne : (Ne = !1, (t = C.getElementsByTagName("body")[0]) && t.style ? (e = C.createElement("div"), (n = C.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), typeof e.style.zoom !== M && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(C.createElement("div")).style.width = "5px", Ne = 3 !== e.offsetWidth), t.removeChild(n), Ne) : void 0); var e, t, n }; var De, Le, He = /^margin/,
        Fe = new RegExp("^(" + W + ")(?!px)[a-z%]+$", "i"),
        qe = /^(top|right|bottom|left)$/;

    function Me(t, n) { return { get: function() { var e = t(); if (null != e) return e ? void delete this.get : (this.get = n).apply(this, arguments) } } }
    h.getComputedStyle ? (De = function(e) { return e.ownerDocument.defaultView.getComputedStyle(e, null) }, Le = function(e, t, n) { var i, r, o, a, s = e.style; return a = (n = n || De(e)) ? n.getPropertyValue(t) || n[t] : void 0, n && ("" !== a || T.contains(e.ownerDocument, e) || (a = T.style(e, t)), Fe.test(a) && He.test(t) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 === a ? a : a + "" }) : C.documentElement.currentStyle && (De = function(e) { return e.currentStyle }, Le = function(e, t, n) { var i, r, o, a, s = e.style; return null == (a = (n = n || De(e)) ? n[t] : void 0) && s && s[t] && (a = s[t]), Fe.test(a) && !qe.test(t) && (i = s.left, (o = (r = e.runtimeStyle) && r.left) && (r.left = e.currentStyle.left), s.left = "fontSize" === t ? "1em" : a, a = s.pixelLeft + "px", s.left = i, o && (r.left = o)), void 0 === a ? a : a + "" || "auto" }),
        function() { var e, t, n, r, o, a, s; if ((e = C.createElement("div")).innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", t = (n = e.getElementsByTagName("a")[0]) && n.style) {
                function i() { var e, t, n, i;
                    (t = C.getElementsByTagName("body")[0]) && t.style && (e = C.createElement("div"), (n = C.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", t.appendChild(n).appendChild(e), e.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", r = o = !1, s = !0, h.getComputedStyle && (r = "1%" !== (h.getComputedStyle(e, null) || {}).top, o = "4px" === (h.getComputedStyle(e, null) || { width: "4px" }).width, (i = e.appendChild(C.createElement("div"))).style.cssText = e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", e.style.width = "1px", s = !parseFloat((h.getComputedStyle(i, null) || {}).marginRight)), e.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", (i = e.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (a = 0 === i[0].offsetHeight) && (i[0].style.display = "", i[1].style.display = "none", a = 0 === i[0].offsetHeight), t.removeChild(n)) }
                t.cssText = "float:left;opacity:.5", v.opacity = "0.5" === t.opacity, v.cssFloat = !!t.cssFloat, e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === e.style.backgroundClip, v.boxSizing = "" === t.boxSizing || "" === t.MozBoxSizing || "" === t.WebkitBoxSizing, T.extend(v, { reliableHiddenOffsets: function() { return null == a && i(), a }, boxSizingReliable: function() { return null == o && i(), o }, pixelPosition: function() { return null == r && i(), r }, reliableMarginRight: function() { return null == s && i(), s } }) } }(), T.swap = function(e, t, n, i) { var r, o, a = {}; for (o in t) a[o] = e.style[o], e.style[o] = t[o]; for (o in r = n.apply(e, i || []), t) e.style[o] = a[o]; return r }; var Pe = /alpha\([^)]*\)/i,
        Oe = /opacity\s*=\s*([^)]*)/,
        Re = /^(none|table(?!-c[ea]).+)/,
        Be = new RegExp("^(" + W + ")(.*)$", "i"),
        _e = new RegExp("^([+-])=(" + W + ")", "i"),
        ze = { position: "absolute", visibility: "hidden", display: "block" },
        Ze = { letterSpacing: "0", fontWeight: "400" },
        We = ["Webkit", "O", "Moz", "ms"];

    function Ie(e, t) { if (t in e) return t; for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = We.length; r--;)
            if ((t = We[r] + n) in e) return t;
        return i }

    function $e(e, t) { for (var n, i, r, o = [], a = 0, s = e.length; a < s; a++)(i = e[a]).style && (o[a] = T._data(i, "olddisplay"), n = i.style.display, t ? (o[a] || "none" !== n || (i.style.display = ""), "" === i.style.display && Z(i) && (o[a] = T._data(i, "olddisplay", Se(i.nodeName)))) : (r = Z(i), (n && "none" !== n || !r) && T._data(i, "olddisplay", r ? n : T.css(i, "display")))); for (a = 0; a < s; a++)(i = e[a]).style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[a] || "" : "none")); return e }

    function Xe(e, t, n) { var i = Be.exec(t); return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t }

    function Ue(e, t, n, i, r) { for (var o = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += T.css(e, n + I[o], !0, r)), i ? ("content" === n && (a -= T.css(e, "padding" + I[o], !0, r)), "margin" !== n && (a -= T.css(e, "border" + I[o] + "Width", !0, r))) : (a += T.css(e, "padding" + I[o], !0, r), "padding" !== n && (a += T.css(e, "border" + I[o] + "Width", !0, r))); return a }

    function Ve(e, t, n) { var i = !0,
            r = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = De(e),
            a = v.boxSizing && "border-box" === T.css(e, "boxSizing", !1, o); if (r <= 0 || null == r) { if (((r = Le(e, t, o)) < 0 || null == r) && (r = e.style[t]), Fe.test(r)) return r;
            i = a && (v.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0 } return r + Ue(e, t, n || (a ? "border" : "content"), i, o) + "px" }

    function Je(e, t, n, i, r) { return new Je.prototype.init(e, t, n, i, r) }
    T.extend({ cssHooks: { opacity: { get: function(e, t) { if (t) { var n = Le(e, "opacity"); return "" === n ? "1" : n } } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: v.cssFloat ? "cssFloat" : "styleFloat" }, style: function(e, t, n, i) { if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) { var r, o, a, s = T.camelCase(t),
                    l = e.style; if (t = T.cssProps[s] || (T.cssProps[s] = Ie(l, s)), a = T.cssHooks[t] || T.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(e, !1, i)) ? r : l[t]; if ("string" === (o = typeof n) && (r = _e.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(T.css(e, t)), o = "number"), null != n && n == n && ("number" !== o || T.cssNumber[s] || (n += "px"), v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), !(a && "set" in a && void 0 === (n = a.set(e, n, i))))) try { l[t] = n } catch (e) {} } }, css: function(e, t, n, i) { var r, o, a, s = T.camelCase(t); return t = T.cssProps[s] || (T.cssProps[s] = Ie(e.style, s)), (a = T.cssHooks[t] || T.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = Le(e, t, i)), "normal" === o && t in Ze && (o = Ze[t]), "" === n || n ? (r = parseFloat(o), !0 === n || T.isNumeric(r) ? r || 0 : o) : o } }), T.each(["height", "width"], function(e, r) { T.cssHooks[r] = { get: function(e, t, n) { return t ? Re.test(T.css(e, "display")) && 0 === e.offsetWidth ? T.swap(e, ze, function() { return Ve(e, r, n) }) : Ve(e, r, n) : void 0 }, set: function(e, t, n) { var i = n && De(e); return Xe(0, t, n ? Ue(e, r, n, v.boxSizing && "border-box" === T.css(e, "boxSizing", !1, i), i) : 0) } } }), v.opacity || (T.cssHooks.opacity = { get: function(e, t) { return Oe.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "" }, set: function(e, t) { var n = e.style,
                i = e.currentStyle,
                r = T.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
                o = i && i.filter || n.filter || "";
            ((n.zoom = 1) <= t || "" === t) && "" === T.trim(o.replace(Pe, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = Pe.test(o) ? o.replace(Pe, r) : o + " " + r) } }), T.cssHooks.marginRight = Me(v.reliableMarginRight, function(e, t) { return t ? T.swap(e, { display: "inline-block" }, Le, [e, "marginRight"]) : void 0 }), T.each({ margin: "", padding: "", border: "Width" }, function(r, o) { T.cssHooks[r + o] = { expand: function(e) { for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + I[t] + o] = i[t] || i[t - 2] || i[0]; return n } }, He.test(r) || (T.cssHooks[r + o].set = Xe) }), T.fn.extend({ css: function(e, t) { return $(this, function(e, t, n) { var i, r, o = {},
                    a = 0; if (T.isArray(t)) { for (i = De(e), r = t.length; a < r; a++) o[t[a]] = T.css(e, t[a], !1, i); return o } return void 0 !== n ? T.style(e, t, n) : T.css(e, t) }, e, t, 1 < arguments.length) }, show: function() { return $e(this, !0) }, hide: function() { return $e(this) }, toggle: function(e) { return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() { Z(this) ? T(this).show() : T(this).hide() }) } }), ((T.Tween = Je).prototype = { constructor: Je, init: function(e, t, n, i, r, o) { this.elem = e, this.prop = n, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = o || (T.cssNumber[n] ? "" : "px") }, cur: function() { var e = Je.propHooks[this.prop]; return e && e.get ? e.get(this) : Je.propHooks._default.get(this) }, run: function(e) { var t, n = Je.propHooks[this.prop]; return this.pos = t = this.options.duration ? T.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Je.propHooks._default.set(this), this } }).init.prototype = Je.prototype, (Je.propHooks = { _default: { get: function(e) { var t; return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = T.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop] }, set: function(e) { T.fx.step[e.prop] ? T.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[T.cssProps[e.prop]] || T.cssHooks[e.prop]) ? T.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now } } }).scrollTop = Je.propHooks.scrollLeft = { set: function(e) { e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now) } }, T.easing = { linear: function(e) { return e }, swing: function(e) { return .5 - Math.cos(e * Math.PI) / 2 } }, T.fx = Je.prototype.init, T.fx.step = {}; var Ye, Ge, Qe, Ke, et, tt, nt, it = /^(?:toggle|show|hide)$/,
        rt = new RegExp("^(?:([+-])=|)(" + W + ")([a-z%]*)$", "i"),
        ot = /queueHooks$/,
        at = [function(t, e, n) { var i, r, o, a, s, l, u, c = this,
                f = {},
                d = t.style,
                p = t.nodeType && Z(t),
                h = T._data(t, "fxshow"); for (i in n.queue || (null == (s = T._queueHooks(t, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function() { s.unqueued || l() }), s.unqueued++, c.always(function() { c.always(function() { s.unqueued--, T.queue(t, "fx").length || s.empty.fire() }) })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], u = T.css(t, "display"), "inline" === ("none" === u ? T._data(t, "olddisplay") || Se(t.nodeName) : u) && "none" === T.css(t, "float") && (v.inlineBlockNeedsLayout && "inline" !== Se(t.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", v.shrinkWrapBlocks() || c.always(function() { d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2] })), e)
                if (r = e[i], it.exec(r)) { if (delete e[i], o = o || "toggle" === r, r === (p ? "hide" : "show")) { if ("show" !== r || !h || void 0 === h[i]) continue;
                        p = !0 }
                    f[i] = h && h[i] || T.style(t, i) } else u = void 0;
            if (T.isEmptyObject(f)) "inline" === ("none" === u ? Se(t.nodeName) : u) && (d.display = u);
            else
                for (i in h ? "hidden" in h && (p = h.hidden) : h = T._data(t, "fxshow", {}), o && (h.hidden = !p), p ? T(t).show() : c.done(function() { T(t).hide() }), c.done(function() { var e; for (e in T._removeData(t, "fxshow"), f) T.style(t, e, f[e]) }), f) a = ct(p ? h[i] : 0, i, c), i in h || (h[i] = a.start, p && (a.end = a.start, a.start = "width" === i || "height" === i ? 1 : 0)) }],
        st = { "*": [function(e, t) { var n = this.createTween(e, t),
                    i = n.cur(),
                    r = rt.exec(t),
                    o = r && r[3] || (T.cssNumber[e] ? "" : "px"),
                    a = (T.cssNumber[e] || "px" !== o && +i) && rt.exec(T.css(n.elem, e)),
                    s = 1,
                    l = 20; if (a && a[3] !== o)
                    for (o = o || a[3], r = r || [], a = +i || 1; a /= s = s || ".5", T.style(n.elem, e, a + o), s !== (s = n.cur() / i) && 1 !== s && --l;); return r && (a = n.start = +a || +i || 0, n.unit = o, n.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), n }] };

    function lt() { return setTimeout(function() { Ye = void 0 }), Ye = T.now() }

    function ut(e, t) { var n, i = { height: e },
            r = 0; for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = I[r])] = i["padding" + n] = e; return t && (i.opacity = i.width = e), i }

    function ct(e, t, n) { for (var i, r = (st[t] || []).concat(st["*"]), o = 0, a = r.length; o < a; o++)
            if (i = r[o].call(n, t, e)) return i }

    function ft(o, e, t) { var n, a, i = 0,
            r = at.length,
            s = T.Deferred().always(function() { delete l.elem }),
            l = function() { if (a) return !1; for (var e = Ye || lt(), t = Math.max(0, u.startTime + u.duration - e), n = 1 - (t / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++) u.tweens[i].run(n); return s.notifyWith(o, [u, n, t]), n < 1 && r ? t : (s.resolveWith(o, [u]), !1) },
            u = s.promise({ elem: o, props: T.extend({}, e), opts: T.extend(!0, { specialEasing: {} }, t), originalProperties: e, originalOptions: t, startTime: Ye || lt(), duration: t.duration, tweens: [], createTween: function(e, t) { var n = T.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing); return u.tweens.push(n), n }, stop: function(e) { var t = 0,
                        n = e ? u.tweens.length : 0; if (a) return this; for (a = !0; t < n; t++) u.tweens[t].run(1); return e ? s.resolveWith(o, [u, e]) : s.rejectWith(o, [u, e]), this } }),
            c = u.props; for (function(e, t) { var n, i, r, o, a; for (n in e)
                    if (r = t[i = T.camelCase(n)], o = e[n], T.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), (a = T.cssHooks[i]) && "expand" in a)
                        for (n in o = a.expand(o), delete e[i], o) n in e || (e[n] = o[n], t[n] = r);
                    else t[i] = r }(c, u.opts.specialEasing); i < r; i++)
            if (n = at[i].call(u, o, c, u.opts)) return n;
        return T.map(c, ct, u), T.isFunction(u.opts.start) && u.opts.start.call(o, u), T.fx.timer(T.extend(l, { elem: o, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always) }
    T.Animation = T.extend(ft, { tweener: function(e, t) { for (var n, i = 0, r = (e = T.isFunction(e) ? (t = e, ["*"]) : e.split(" ")).length; i < r; i++) n = e[i], st[n] = st[n] || [], st[n].unshift(t) }, prefilter: function(e, t) { t ? at.unshift(e) : at.push(e) } }), T.speed = function(e, t, n) { var i = e && "object" == typeof e ? T.extend({}, e) : { complete: n || !n && t || T.isFunction(e) && e, duration: e, easing: n && t || t && !T.isFunction(t) && t }; return i.duration = T.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in T.fx.speeds ? T.fx.speeds[i.duration] : T.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() { T.isFunction(i.old) && i.old.call(this), i.queue && T.dequeue(this, i.queue) }, i }, T.fn.extend({ fadeTo: function(e, t, n, i) { return this.filter(Z).css("opacity", 0).show().end().animate({ opacity: t }, e, n, i) }, animate: function(t, e, n, i) {
            function r() { var e = ft(this, T.extend({}, t), a);
                (o || T._data(this, "finish")) && e.stop(!0) } var o = T.isEmptyObject(t),
                a = T.speed(e, n, i); return r.finish = r, o || !1 === a.queue ? this.each(r) : this.queue(a.queue, r) }, stop: function(r, e, o) {
            function a(e) { var t = e.stop;
                delete e.stop, t(o) } return "string" != typeof r && (o = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function() { var e = !0,
                    t = null != r && r + "queueHooks",
                    n = T.timers,
                    i = T._data(this); if (t) i[t] && i[t].stop && a(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && ot.test(t) && a(i[t]); for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o), e = !1, n.splice(t, 1));!e && o || T.dequeue(this, r) }) }, finish: function(a) { return !1 !== a && (a = a || "fx"), this.each(function() { var e, t = T._data(this),
                    n = t[a + "queue"],
                    i = t[a + "queueHooks"],
                    r = T.timers,
                    o = n ? n.length : 0; for (t.finish = !0, T.queue(this, a, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === a && (r[e].anim.stop(!0), r.splice(e, 1)); for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish }) } }), T.each(["toggle", "show", "hide"], function(e, i) { var r = T.fn[i];
        T.fn[i] = function(e, t, n) { return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(ut(i, !0), e, t, n) } }), T.each({ slideDown: ut("show"), slideUp: ut("hide"), slideToggle: ut("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e, i) { T.fn[e] = function(e, t, n) { return this.animate(i, e, t, n) } }), T.timers = [], T.fx.tick = function() { var e, t = T.timers,
            n = 0; for (Ye = T.now(); n < t.length; n++)(e = t[n])() || t[n] !== e || t.splice(n--, 1);
        t.length || T.fx.stop(), Ye = void 0 }, T.fx.timer = function(e) { T.timers.push(e), e() ? T.fx.start() : T.timers.pop() }, T.fx.interval = 13, T.fx.start = function() { Ge = Ge || setInterval(T.fx.tick, T.fx.interval) }, T.fx.stop = function() { clearInterval(Ge), Ge = null }, T.fx.speeds = { slow: 600, fast: 200, _default: 400 }, T.fn.delay = function(i, e) { return i = T.fx && T.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) { var n = setTimeout(e, i);
            t.stop = function() { clearTimeout(n) } }) }, (Ke = C.createElement("div")).setAttribute("className", "t"), Ke.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", tt = Ke.getElementsByTagName("a")[0], nt = (et = C.createElement("select")).appendChild(C.createElement("option")), Qe = Ke.getElementsByTagName("input")[0], tt.style.cssText = "top:1px", v.getSetAttribute = "t" !== Ke.className, v.style = /top/.test(tt.getAttribute("style")), v.hrefNormalized = "/a" === tt.getAttribute("href"), v.checkOn = !!Qe.value, v.optSelected = nt.selected, v.enctype = !!C.createElement("form").enctype, et.disabled = !0, v.optDisabled = !nt.disabled, (Qe = C.createElement("input")).setAttribute("value", ""), v.input = "" === Qe.getAttribute("value"), Qe.value = "t", Qe.setAttribute("type", "radio"), v.radioValue = "t" === Qe.value; var dt = /\r/g;
    T.fn.extend({ val: function(n) { var i, e, r, t = this[0]; return arguments.length ? (r = T.isFunction(n), this.each(function(e) { var t;
                1 === this.nodeType && (null == (t = r ? n.call(this, e, T(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : T.isArray(t) && (t = T.map(t, function(e) { return null == e ? "" : e + "" })), (i = T.valHooks[this.type] || T.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, t, "value") || (this.value = t)) })) : t ? (i = T.valHooks[t.type] || T.valHooks[t.nodeName.toLowerCase()]) && "get" in i && void 0 !== (e = i.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(dt, "") : null == e ? "" : e : void 0 } }), T.extend({ valHooks: { option: { get: function(e) { var t = T.find.attr(e, "value"); return null != t ? t : T.trim(T.text(e)) } }, select: { get: function(e) { for (var t, n, i = e.options, r = e.selectedIndex, o = "select-one" === e.type || r < 0, a = o ? null : [], s = o ? r + 1 : i.length, l = r < 0 ? s : o ? r : 0; l < s; l++)
                        if (!(!(n = i[l]).selected && l !== r || (v.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && T.nodeName(n.parentNode, "optgroup"))) { if (t = T(n).val(), o) return t;
                            a.push(t) }
                    return a }, set: function(e, t) { for (var n, i, r = e.options, o = T.makeArray(t), a = r.length; a--;)
                        if (i = r[a], 0 <= T.inArray(T.valHooks.option.get(i), o)) try { i.selected = n = !0 } catch (e) { i.scrollHeight } else i.selected = !1;
                    return n || (e.selectedIndex = -1), r } } } }), T.each(["radio", "checkbox"], function() { T.valHooks[this] = { set: function(e, t) { return T.isArray(t) ? e.checked = 0 <= T.inArray(T(e).val(), t) : void 0 } }, v.checkOn || (T.valHooks[this].get = function(e) { return null === e.getAttribute("value") ? "on" : e.value }) }); var pt, ht, mt = T.expr.attrHandle,
        gt = /^(?:checked|selected)$/i,
        vt = v.getSetAttribute,
        yt = v.input;
    T.fn.extend({ attr: function(e, t) { return $(this, T.attr, e, t, 1 < arguments.length) }, removeAttr: function(e) { return this.each(function() { T.removeAttr(this, e) }) } }), T.extend({ attr: function(e, t, n) { var i, r, o = e.nodeType; if (e && 3 !== o && 8 !== o && 2 !== o) return typeof e.getAttribute === M ? T.prop(e, t, n) : (1 === o && T.isXMLDoc(e) || (t = t.toLowerCase(), i = T.attrHooks[t] || (T.expr.match.bool.test(t) ? ht : pt)), void 0 === n ? i && "get" in i && null !== (r = i.get(e, t)) ? r : null == (r = T.find.attr(e, t)) ? void 0 : r : null !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : void T.removeAttr(e, t)) }, removeAttr: function(e, t) { var n, i, r = 0,
                o = t && t.match(D); if (o && 1 === e.nodeType)
                for (; n = o[r++];) i = T.propFix[n] || n, T.expr.match.bool.test(n) ? yt && vt || !gt.test(n) ? e[i] = !1 : e[T.camelCase("default-" + n)] = e[i] = !1 : T.attr(e, n, ""), e.removeAttribute(vt ? n : i) }, attrHooks: { type: { set: function(e, t) { if (!v.radioValue && "radio" === t && T.nodeName(e, "input")) { var n = e.value; return e.setAttribute("type", t), n && (e.value = n), t } } } } }), ht = { set: function(e, t, n) { return !1 === t ? T.removeAttr(e, n) : yt && vt || !gt.test(n) ? e.setAttribute(!vt && T.propFix[n] || n, n) : e[T.camelCase("default-" + n)] = e[n] = !0, n } }, T.each(T.expr.match.bool.source.match(/\w+/g), function(e, t) { var o = mt[t] || T.find.attr;
        mt[t] = yt && vt || !gt.test(t) ? function(e, t, n) { var i, r; return n || (r = mt[t], mt[t] = i, i = null != o(e, t, n) ? t.toLowerCase() : null, mt[t] = r), i } : function(e, t, n) { return n ? void 0 : e[T.camelCase("default-" + t)] ? t.toLowerCase() : null } }), yt && vt || (T.attrHooks.value = { set: function(e, t, n) { return T.nodeName(e, "input") ? void(e.defaultValue = t) : pt && pt.set(e, t, n) } }), vt || (pt = { set: function(e, t, n) { var i = e.getAttributeNode(n); return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)), i.value = t += "", "value" === n || t === e.getAttribute(n) ? t : void 0 } }, mt.id = mt.name = mt.coords = function(e, t, n) { var i; return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null }, T.valHooks.button = { get: function(e, t) { var n = e.getAttributeNode(t); return n && n.specified ? n.value : void 0 }, set: pt.set }, T.attrHooks.contenteditable = { set: function(e, t, n) { pt.set(e, "" !== t && t, n) } }, T.each(["width", "height"], function(e, n) { T.attrHooks[n] = { set: function(e, t) { return "" === t ? (e.setAttribute(n, "auto"), t) : void 0 } } })), v.style || (T.attrHooks.style = { get: function(e) { return e.style.cssText || void 0 }, set: function(e, t) { return e.style.cssText = t + "" } }); var xt = /^(?:input|select|textarea|button|object)$/i,
        bt = /^(?:a|area)$/i;
    T.fn.extend({ prop: function(e, t) { return $(this, T.prop, e, t, 1 < arguments.length) }, removeProp: function(e) { return e = T.propFix[e] || e, this.each(function() { try { this[e] = void 0, delete this[e] } catch (e) {} }) } }), T.extend({ propFix: { for: "htmlFor", class: "className" }, prop: function(e, t, n) { var i, r, o = e.nodeType; if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !T.isXMLDoc(e)) && (t = T.propFix[t] || t, r = T.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t] }, propHooks: { tabIndex: { get: function(e) { var t = T.find.attr(e, "tabindex"); return t ? parseInt(t, 10) : xt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1 } } } }), v.hrefNormalized || T.each(["href", "src"], function(e, t) { T.propHooks[t] = { get: function(e) { return e.getAttribute(t, 4) } } }), v.optSelected || (T.propHooks.selected = { get: function(e) { var t = e.parentNode; return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null } }), T.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { T.propFix[this.toLowerCase()] = this }), v.enctype || (T.propFix.enctype = "encoding"); var wt = /[\t\r\n\f]/g;
    T.fn.extend({ addClass: function(t) { var e, n, i, r, o, a, s = 0,
                l = this.length,
                u = "string" == typeof t && t; if (T.isFunction(t)) return this.each(function(e) { T(this).addClass(t.call(this, e, this.className)) }); if (u)
                for (e = (t || "").match(D) || []; s < l; s++)
                    if (i = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(wt, " ") : " ")) { for (o = 0; r = e[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        a = T.trim(i), n.className !== a && (n.className = a) }
            return this }, removeClass: function(t) { var e, n, i, r, o, a, s = 0,
                l = this.length,
                u = 0 === arguments.length || "string" == typeof t && t; if (T.isFunction(t)) return this.each(function(e) { T(this).removeClass(t.call(this, e, this.className)) }); if (u)
                for (e = (t || "").match(D) || []; s < l; s++)
                    if (i = 1 === (n = this[s]).nodeType && (n.className ? (" " + n.className + " ").replace(wt, " ") : "")) { for (o = 0; r = e[o++];)
                            for (; 0 <= i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                        a = t ? T.trim(i) : "", n.className !== a && (n.className = a) }
            return this }, toggleClass: function(r, t) { var o = typeof r; return "boolean" == typeof t && "string" == o ? t ? this.addClass(r) : this.removeClass(r) : this.each(T.isFunction(r) ? function(e) { T(this).toggleClass(r.call(this, e, this.className, t), t) } : function() { if ("string" == o)
                    for (var e, t = 0, n = T(this), i = r.match(D) || []; e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else o !== M && "boolean" != o || (this.className && T._data(this, "__className__", this.className), this.className = this.className || !1 === r ? "" : T._data(this, "__className__") || "") }) }, hasClass: function(e) { for (var t = " " + e + " ", n = 0, i = this.length; n < i; n++)
                if (1 === this[n].nodeType && 0 <= (" " + this[n].className + " ").replace(wt, " ").indexOf(t)) return !0;
            return !1 } }), T.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, n) { T.fn[n] = function(e, t) { return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n) } }), T.fn.extend({ hover: function(e, t) { return this.mouseenter(e).mouseleave(t || e) }, bind: function(e, t, n) { return this.on(e, null, t, n) }, unbind: function(e, t) { return this.off(e, null, t) }, delegate: function(e, t, n, i) { return this.on(t, e, n, i) }, undelegate: function(e, t, n) { return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n) } }); var At = T.now(),
        Tt = /\?/,
        Ct = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    T.parseJSON = function(e) { if (h.JSON && h.JSON.parse) return h.JSON.parse(e + ""); var r, o = null,
            t = T.trim(e + ""); return t && !T.trim(t.replace(Ct, function(e, t, n, i) { return r && t && (o = 0), 0 === o ? e : (r = n || t, o += !i - !n, "") })) ? Function("return " + t)() : T.error("Invalid JSON: " + e) }, T.parseXML = function(e) { var t; if (!e || "string" != typeof e) return null; try { h.DOMParser ? t = (new DOMParser).parseFromString(e, "text/xml") : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e)) } catch (e) { t = void 0 } return t && t.documentElement && !t.getElementsByTagName("parsererror").length || T.error("Invalid XML: " + e), t }; var Et, Nt, jt = /#.*$/,
        kt = /([?&])_=[^&]*/,
        St = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Dt = /^(?:GET|HEAD)$/,
        Lt = /^\/\//,
        Ht = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Ft = {},
        qt = {},
        Mt = "*/".concat("*"); try { Nt = location.href } catch (e) {
        (Nt = C.createElement("a")).href = "", Nt = Nt.href }

    function Pt(o) { return function(e, t) { "string" != typeof e && (t = e, e = "*"); var n, i = 0,
                r = e.toLowerCase().match(D) || []; if (T.isFunction(t))
                for (; n = r[i++];) "+" === n.charAt(0) ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t) } }

    function Ot(t, r, o, a) { var s = {},
            l = t === qt;

        function u(e) { var i; return s[e] = !0, T.each(t[e] || [], function(e, t) { var n = t(r, o, a); return "string" != typeof n || l || s[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), u(n), !1) }), i } return u(r.dataTypes[0]) || !s["*"] && u("*") }

    function Rt(e, t) { var n, i, r = T.ajaxSettings.flatOptions || {}; for (i in t) void 0 !== t[i] && ((r[i] ? e : n = n || {})[i] = t[i]); return n && T.extend(!0, e, n), e }
    Et = Ht.exec(Nt.toLowerCase()) || [], T.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Nt, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Mt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": T.parseJSON, "text xml": T.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function(e, t) { return t ? Rt(Rt(e, T.ajaxSettings), t) : Rt(T.ajaxSettings, e) }, ajaxPrefilter: Pt(Ft), ajaxTransport: Pt(qt), ajax: function(e, t) { "object" == typeof e && (t = e, e = void 0), t = t || {}; var n, i, c, f, d, p, h, r, m = T.ajaxSetup({}, t),
                g = m.context || m,
                v = m.context && (g.nodeType || g.jquery) ? T(g) : T.event,
                y = T.Deferred(),
                x = T.Callbacks("once memory"),
                b = m.statusCode || {},
                o = {},
                a = {},
                w = 0,
                s = "canceled",
                A = { readyState: 0, getResponseHeader: function(e) { var t; if (2 === w) { if (!r)
                                for (r = {}; t = St.exec(f);) r[t[1].toLowerCase()] = t[2];
                            t = r[e.toLowerCase()] } return null == t ? null : t }, getAllResponseHeaders: function() { return 2 === w ? f : null }, setRequestHeader: function(e, t) { var n = e.toLowerCase(); return w || (e = a[n] = a[n] || e, o[e] = t), this }, overrideMimeType: function(e) { return w || (m.mimeType = e), this }, statusCode: function(e) { var t; if (e)
                            if (w < 2)
                                for (t in e) b[t] = [b[t], e[t]];
                            else A.always(e[A.status]);
                        return this }, abort: function(e) { var t = e || s; return h && h.abort(t), l(0, t), this } }; if (y.promise(A).complete = x.add, A.success = A.done, A.error = A.fail, m.url = ((e || m.url || Nt) + "").replace(jt, "").replace(Lt, Et[1] + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = T.trim(m.dataType || "*").toLowerCase().match(D) || [""], null == m.crossDomain && (n = Ht.exec(m.url.toLowerCase()), m.crossDomain = !(!n || n[1] === Et[1] && n[2] === Et[2] && (n[3] || ("http:" === n[1] ? "80" : "443")) === (Et[3] || ("http:" === Et[1] ? "80" : "443")))), m.data && m.processData && "string" != typeof m.data && (m.data = T.param(m.data, m.traditional)), Ot(Ft, m, t, A), 2 === w) return A; for (i in (p = m.global) && 0 == T.active++ && T.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Dt.test(m.type), c = m.url, m.hasContent || (m.data && (c = m.url += (Tt.test(c) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = kt.test(c) ? c.replace(kt, "$1_=" + At++) : c + (Tt.test(c) ? "&" : "?") + "_=" + At++)), m.ifModified && (T.lastModified[c] && A.setRequestHeader("If-Modified-Since", T.lastModified[c]), T.etag[c] && A.setRequestHeader("If-None-Match", T.etag[c])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && A.setRequestHeader("Content-Type", m.contentType), A.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Mt + "; q=0.01" : "") : m.accepts["*"]), m.headers) A.setRequestHeader(i, m.headers[i]); if (m.beforeSend && (!1 === m.beforeSend.call(g, A, m) || 2 === w)) return A.abort(); for (i in s = "abort", { success: 1, error: 1, complete: 1 }) A[i](m[i]); if (h = Ot(qt, m, t, A)) { A.readyState = 1, p && v.trigger("ajaxSend", [A, m]), m.async && 0 < m.timeout && (d = setTimeout(function() { A.abort("timeout") }, m.timeout)); try { w = 1, h.send(o, l) } catch (e) { if (!(w < 2)) throw e;
                    l(-1, e) } } else l(-1, "No Transport");

            function l(e, t, n, i) { var r, o, a, s, l, u = t;
                2 !== w && (w = 2, d && clearTimeout(d), h = void 0, f = i || "", A.readyState = 0 < e ? 4 : 0, r = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) { for (var i, r, o, a, s = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type")); if (r)
                        for (a in s)
                            if (s[a] && s[a].test(r)) { l.unshift(a); break }
                    if (l[0] in n) o = l[0];
                    else { for (a in n) { if (!l[0] || e.converters[a + " " + l[0]]) { o = a; break }
                            i = i || a }
                        o = o || i } return o ? (o !== l[0] && l.unshift(o), n[o]) : void 0 }(m, A, n)), s = function(e, t, n, i) { var r, o, a, s, l, u = {},
                        c = e.dataTypes.slice(); if (c[1])
                        for (a in e.converters) u[a.toLowerCase()] = e.converters[a]; for (o = c.shift(); o;)
                        if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())
                            if ("*" === o) o = l;
                            else if ("*" !== l && l !== o) { if (!(a = u[l + " " + o] || u["* " + o]))
                            for (r in u)
                                if ((s = r.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {!0 === a ? a = u[r] : !0 !== u[r] && (o = s[0], c.unshift(s[1])); break }
                        if (!0 !== a)
                            if (a && e.throws) t = a(t);
                            else try { t = a(t) } catch (e) { return { state: "parsererror", error: a ? e : "No conversion from " + l + " to " + o } } } return { state: "success", data: t } }(m, s, A, r), r ? (m.ifModified && ((l = A.getResponseHeader("Last-Modified")) && (T.lastModified[c] = l), (l = A.getResponseHeader("etag")) && (T.etag[c] = l)), 204 === e || "HEAD" === m.type ? u = "nocontent" : 304 === e ? u = "notmodified" : (u = s.state, o = s.data, r = !(a = s.error))) : (a = u, !e && u || (u = "error", e < 0 && (e = 0))), A.status = e, A.statusText = (t || u) + "", r ? y.resolveWith(g, [o, u, A]) : y.rejectWith(g, [A, u, a]), A.statusCode(b), b = void 0, p && v.trigger(r ? "ajaxSuccess" : "ajaxError", [A, m, r ? o : a]), x.fireWith(g, [A, u]), p && (v.trigger("ajaxComplete", [A, m]), --T.active || T.event.trigger("ajaxStop"))) } return A }, getJSON: function(e, t, n) { return T.get(e, t, n, "json") }, getScript: function(e, t) { return T.get(e, void 0, t, "script") } }), T.each(["get", "post"], function(e, r) { T[r] = function(e, t, n, i) { return T.isFunction(t) && (i = i || n, n = t, t = void 0), T.ajax({ url: e, type: r, dataType: i, data: t, success: n }) } }), T.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) { T.fn[t] = function(e) { return this.on(t, e) } }), T._evalUrl = function(e) { return T.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 }) }, T.fn.extend({ wrapAll: function(t) { if (T.isFunction(t)) return this.each(function(e) { T(this).wrapAll(t.call(this, e)) }); if (this[0]) { var e = T(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function() { for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild; return e }).append(this) } return this }, wrapInner: function(n) { return this.each(T.isFunction(n) ? function(e) { T(this).wrapInner(n.call(this, e)) } : function() { var e = T(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n) }) }, wrap: function(t) { var n = T.isFunction(t); return this.each(function(e) { T(this).wrapAll(n ? t.call(this, e) : t) }) }, unwrap: function() { return this.parent().each(function() { T.nodeName(this, "body") || T(this).replaceWith(this.childNodes) }).end() } }), T.expr.filters.hidden = function(e) { return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !v.reliableHiddenOffsets() && "none" === (e.style && e.style.display || T.css(e, "display")) }, T.expr.filters.visible = function(e) { return !T.expr.filters.hidden(e) }; var Bt = /%20/g,
        _t = /\[\]$/,
        zt = /\r?\n/g,
        Zt = /^(?:submit|button|image|reset|file)$/i,
        Wt = /^(?:input|select|textarea|keygen)/i;

    function It(n, e, i, r) { var t; if (T.isArray(e)) T.each(e, function(e, t) { i || _t.test(n) ? r(n, t) : It(n + "[" + ("object" == typeof t ? e : "") + "]", t, i, r) });
        else if (i || "object" !== T.type(e)) r(n, e);
        else
            for (t in e) It(n + "[" + t + "]", e[t], i, r) }
    T.param = function(e, t) {
        function n(e, t) { t = T.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t) } var i, r = []; if (void 0 === t && (t = T.ajaxSettings && T.ajaxSettings.traditional), T.isArray(e) || e.jquery && !T.isPlainObject(e)) T.each(e, function() { n(this.name, this.value) });
        else
            for (i in e) It(i, e[i], t, n); return r.join("&").replace(Bt, "+") }, T.fn.extend({ serialize: function() { return T.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var e = T.prop(this, "elements"); return e ? T.makeArray(e) : this }).filter(function() { var e = this.type; return this.name && !T(this).is(":disabled") && Wt.test(this.nodeName) && !Zt.test(e) && (this.checked || !X.test(e)) }).map(function(e, t) { var n = T(this).val(); return null == n ? null : T.isArray(n) ? T.map(n, function(e) { return { name: t.name, value: e.replace(zt, "\r\n") } }) : { name: t.name, value: n.replace(zt, "\r\n") } }).get() } }), T.ajaxSettings.xhr = void 0 !== h.ActiveXObject ? function() { return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Vt() || function() { try { return new h.ActiveXObject("Microsoft.XMLHTTP") } catch (e) {} }() } : Vt; var $t = 0,
        Xt = {},
        Ut = T.ajaxSettings.xhr();

    function Vt() { try { return new h.XMLHttpRequest } catch (e) {} }
    h.ActiveXObject && T(h).on("unload", function() { for (var e in Xt) Xt[e](void 0, !0) }), v.cors = !!Ut && "withCredentials" in Ut, (Ut = v.ajax = !!Ut) && T.ajaxTransport(function(l) { var u; if (!l.crossDomain || v.cors) return { send: function(e, o) { var t, a = l.xhr(),
                    s = ++$t; if (a.open(l.type, l.url, l.async, l.username, l.password), l.xhrFields)
                    for (t in l.xhrFields) a[t] = l.xhrFields[t]; for (t in l.mimeType && a.overrideMimeType && a.overrideMimeType(l.mimeType), l.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) void 0 !== e[t] && a.setRequestHeader(t, e[t] + "");
                a.send(l.hasContent && l.data || null), u = function(e, t) { var n, i, r; if (u && (t || 4 === a.readyState))
                        if (delete Xt[s], u = void 0, a.onreadystatechange = T.noop, t) 4 !== a.readyState && a.abort();
                        else { r = {}, n = a.status, "string" == typeof a.responseText && (r.text = a.responseText); try { i = a.statusText } catch (e) { i = "" }
                            n || !l.isLocal || l.crossDomain ? 1223 === n && (n = 204) : n = r.text ? 200 : 404 }
                    r && o(n, i, r, a.getAllResponseHeaders()) }, l.async ? 4 === a.readyState ? setTimeout(u) : a.onreadystatechange = Xt[s] = u : u() }, abort: function() { u && u(void 0, !0) } } }), T.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(e) { return T.globalEval(e), e } } }), T.ajaxPrefilter("script", function(e) { void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1) }), T.ajaxTransport("script", function(t) { if (t.crossDomain) { var i, r = C.head || T("head")[0] || C.documentElement; return { send: function(e, n) {
                    (i = C.createElement("script")).async = !0, t.scriptCharset && (i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function(e, t) {!t && i.readyState && !/loaded|complete/.test(i.readyState) || (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, t || n(200, "success")) }, r.insertBefore(i, r.firstChild) }, abort: function() { i && i.onload(void 0, !0) } } } }); var Jt = [],
        Yt = /(=)\?(?=&|$)|\?\?/;
    T.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var e = Jt.pop() || T.expando + "_" + At++; return this[e] = !0, e } }), T.ajaxPrefilter("json jsonp", function(e, t, n) { var i, r, o, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data"); return a || "jsonp" === e.dataTypes[0] ? (i = e.jsonpCallback = T.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Yt, "$1" + i) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() { return o || T.error(i + " was not called"), o[0] }, e.dataTypes[0] = "json", r = h[i], h[i] = function() { o = arguments }, n.always(function() { h[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, Jt.push(i)), o && T.isFunction(r) && r(o[0]), o = r = void 0 }), "script") : void 0 }), T.parseHTML = function(e, t, n) { if (!e || "string" != typeof e) return null; "boolean" == typeof t && (n = t, t = !1), t = t || C; var i = x.exec(e),
            r = !n && []; return i ? [t.createElement(i[1])] : (i = T.buildFragment([e], t, r), r && r.length && T(r).remove(), T.merge([], i.childNodes)) }; var Gt = T.fn.load;
    T.fn.load = function(e, t, n) { if ("string" != typeof e && Gt) return Gt.apply(this, arguments); var i, r, o, a = this,
            s = e.indexOf(" "); return 0 <= s && (i = T.trim(e.slice(s, e.length)), e = e.slice(0, s)), T.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), 0 < a.length && T.ajax({ url: e, type: o, dataType: "html", data: t }).done(function(e) { r = arguments, a.html(i ? T("<div>").append(T.parseHTML(e)).find(i) : e) }).complete(n && function(e, t) { a.each(n, r || [e.responseText, t, e]) }), this }, T.expr.filters.animated = function(t) { return T.grep(T.timers, function(e) { return t === e.elem }).length }; var Qt = h.document.documentElement;

    function Kt(e) { return T.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow) }
    T.offset = { setOffset: function(e, t, n) { var i, r, o, a, s, l, u = T.css(e, "position"),
                c = T(e),
                f = {}; "static" === u && (e.style.position = "relative"), s = c.offset(), o = T.css(e, "top"), l = T.css(e, "left"), r = ("absolute" === u || "fixed" === u) && -1 < T.inArray("auto", [o, l]) ? (a = (i = c.position()).top, i.left) : (a = parseFloat(o) || 0, parseFloat(l) || 0), T.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + r), "using" in t ? t.using.call(e, f) : c.css(f) } }, T.fn.extend({ offset: function(t) { if (arguments.length) return void 0 === t ? this : this.each(function(e) { T.offset.setOffset(this, t, e) }); var e, n, i = { top: 0, left: 0 },
                r = this[0],
                o = r && r.ownerDocument; return o ? (e = o.documentElement, T.contains(e, r) ? (typeof r.getBoundingClientRect !== M && (i = r.getBoundingClientRect()), n = Kt(o), { top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0), left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0) }) : i) : void 0 }, position: function() { if (this[0]) { var e, t, n = { top: 0, left: 0 },
                    i = this[0]; return "fixed" === T.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), T.nodeName(e[0], "html") || (n = e.offset()), n.top += T.css(e[0], "borderTopWidth", !0), n.left += T.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - T.css(i, "marginTop", !0), left: t.left - n.left - T.css(i, "marginLeft", !0) } } }, offsetParent: function() { return this.map(function() { for (var e = this.offsetParent || Qt; e && !T.nodeName(e, "html") && "static" === T.css(e, "position");) e = e.offsetParent; return e || Qt }) } }), T.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, r) { var o = /Y/.test(r);
        T.fn[t] = function(e) { return $(this, function(e, t, n) { var i = Kt(e); return void 0 === n ? i ? r in i ? i[r] : i.document.documentElement[t] : e[t] : void(i ? i.scrollTo(o ? T(i).scrollLeft() : n, o ? n : T(i).scrollTop()) : e[t] = n) }, t, e, arguments.length, null) } }), T.each(["top", "left"], function(e, n) { T.cssHooks[n] = Me(v.pixelPosition, function(e, t) { return t ? (t = Le(e, n), Fe.test(t) ? T(e).position()[n] + "px" : t) : void 0 }) }), T.each({ Height: "height", Width: "width" }, function(o, a) { T.each({ padding: "inner" + o, content: a, "": "outer" + o }, function(i, e) { T.fn[e] = function(e, t) { var n = arguments.length && (i || "boolean" != typeof e),
                    r = i || (!0 === e || !0 === t ? "margin" : "border"); return $(this, function(e, t, n) { var i; return T.isWindow(e) ? e.document.documentElement["client" + o] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + o], i["scroll" + o], e.body["offset" + o], i["offset" + o], i["client" + o])) : void 0 === n ? T.css(e, t, r) : T.style(e, t, n, r) }, a, n ? e : void 0, n, null) } }) }), T.fn.size = function() { return this.length }, T.fn.andSelf = T.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return T }); var en = h.jQuery,
        tn = h.$; return T.noConflict = function(e) { return h.$ === T && (h.$ = tn), e && h.jQuery === T && (h.jQuery = en), T }, typeof e === M && (h.jQuery = h.$ = T), T }), AjaxZip3 = function() {}, AjaxZip3.VERSION = "0.51", AjaxZip3.JSONDATA = "https://yubinbango.github.io/yubinbango-data/data", AjaxZip3.CACHE = [], AjaxZip3.prev = "", AjaxZip3.nzip = "", AjaxZip3.fzip1 = "", AjaxZip3.fzip2 = "", AjaxZip3.fpref = "", AjaxZip3.addr = "", AjaxZip3.fstrt = "", AjaxZip3.farea = "", AjaxZip3.ffocus = !0, AjaxZip3.onSuccess = null, AjaxZip3.onFailure = null, AjaxZip3.PREFMAP = [null, "北海道", "青森県", "岩手県", "宮城県", "秋田県", "山形県", "福島県", "茨城県", "栃木県", "群馬県", "埼玉県", "千葉県", "東京都", "神奈川県", "新潟県", "富山県", "石川県", "福井県", "山梨県", "長野県", "岐阜県", "静岡県", "愛知県", "三重県", "滋賀県", "京都府", "大阪府", "兵庫県", "奈良県", "和歌山県", "鳥取県", "島根県", "岡山県", "広島県", "山口県", "徳島県", "香川県", "愛媛県", "高知県", "福岡県", "佐賀県", "長崎県", "熊本県", "大分県", "宮崎県", "鹿児島県", "沖縄県"], AjaxZip3.zip2addr = function(e, t, n, i, r, o, a) { if (AjaxZip3.fzip1 = AjaxZip3.getElementByName(e), AjaxZip3.fzip2 = AjaxZip3.getElementByName(t, AjaxZip3.fzip1), AjaxZip3.fpref = AjaxZip3.getElementByName(n, AjaxZip3.fzip1), AjaxZip3.faddr = AjaxZip3.getElementByName(i, AjaxZip3.fzip1), AjaxZip3.fstrt = AjaxZip3.getElementByName(o, AjaxZip3.fzip1), AjaxZip3.farea = AjaxZip3.getElementByName(r, AjaxZip3.fzip1), AjaxZip3.ffocus = void 0 === a || a, AjaxZip3.fzip1 && AjaxZip3.fpref && AjaxZip3.faddr) { var s = AjaxZip3.fzip1.value; if (AjaxZip3.fzip2 && AjaxZip3.fzip2.value && (s += AjaxZip3.fzip2.value), s) { AjaxZip3.nzip = ""; for (var l = 0; l < s.length; l++) { var u = s.charCodeAt(l);
                u < 48 || 57 < u || (AjaxZip3.nzip += s.charAt(l)) } if (!(AjaxZip3.nzip.length < 7)) { var c = AjaxZip3.nzip.substr(0, 3),
                    f = AjaxZip3.CACHE[c]; if (f) return AjaxZip3.callback(f);
                AjaxZip3.zipjsonpquery() } } } }, AjaxZip3.callback = function(e) {
    function t() { "function" == typeof AjaxZip3.onFailure && AjaxZip3.onFailure() } var n = e[AjaxZip3.nzip],
        i = AjaxZip3.nzip - 0 + 4278190080 + ""; if (!n && e[i] && (n = e[i]), n) { var r = n[0]; if (r) { var o = AjaxZip3.PREFMAP[r]; if (o) { var a = n[1];
                a = a || ""; var s = n[2];
                s = s || ""; var l = n[3];
                l = l || ""; var u = AjaxZip3.faddr,
                    c = a; if ("select-one" == AjaxZip3.fpref.type || "select-multiple" == AjaxZip3.fpref.type)
                    for (var f = AjaxZip3.fpref.options, d = 0; d < f.length; d++) { var p = f[d].value,
                            h = f[d].text;
                        f[d].selected = p == r || p == o || h == o } else AjaxZip3.fpref.name == AjaxZip3.faddr.name ? c = o + c : AjaxZip3.fpref.value = o; if (AjaxZip3.farea ? (u = AjaxZip3.farea, AjaxZip3.farea.value = s) : c += s, AjaxZip3.fstrt && (u = AjaxZip3.fstrt, AjaxZip3.faddr.name == AjaxZip3.fstrt.name ? c += l : l && (AjaxZip3.fstrt.value = l)), AjaxZip3.faddr.value = c, "function" == typeof AjaxZip3.onSuccess && AjaxZip3.onSuccess(), AjaxZip3.ffocus && u && u.value) { var m = u.value.length; if (u.focus(), u.createTextRange) { var g = u.createTextRange();
                        g.move("character", m), g.select() } else u.setSelectionRange && u.setSelectionRange(m, m) } } else t() } else t() } else t() }, AjaxZip3.getResponseText = function(e) { var t = e.responseText; if (-1 < navigator.appVersion.indexOf("KHTML")) { var n = escape(t);
        n.indexOf("%u") < 0 && -1 < n.indexOf("%") && (t = decodeURIComponent(n)) } return t }, AjaxZip3.getElementByName = function(e, t) { if ("string" == typeof e) { var n = document.getElementsByName(e); if (!n) return null; if (!(1 < n.length && t && t.form)) return n[0]; for (var i = t.form.elements, r = 0; r < i.length; r++)
            if (i[r].name == e) return i[r] } return e }, AjaxZip3.zipjsonpquery = function() { var e = AjaxZip3.JSONDATA + "/" + AjaxZip3.nzip.substr(0, 3) + ".js",
        t = document.createElement("script");
    t.setAttribute("type", "text/javascript"), t.setAttribute("charset", "UTF-8"), t.setAttribute("src", e), document.getElementsByTagName("head").item(0).appendChild(t) };
var clickSpark = function() { "use strict"; var S = jQuery,
        D = { particleImagePath: "", particleCount: 35, particleSpeed: 12, particleDuration: 400, particleSize: 12, particleRotationSpeed: 0, animationType: "explosion", callback: null };
    S.fn.clickSpark = function(t) { t = S.extend({}, D, t), S(this).on("click", function(e) { n.setParticleImagePath(t.particleImagePath), n.setParticleCount(t.particleCount), n.setParticleSpeed(t.particleSpeed), n.setParticleDuration(t.particleDuration), n.setParticleSize(t.particleSize), n.setParticleRotationSpeed(t.particleRotationSpeed), n.setAnimationType(t.animationType), n.setCallback(t.callback), n.stdFuncOCl(e) }) }; var n = function() { var n, i, r, o, a, s, l, u, c, f, t = D.particleImagePath,
            d = D.particleCount,
            p = D.particleSpeed,
            h = D.particleDuration,
            m = D.particleRotationSpeed,
            g = D.animationType,
            v = D.particleSize,
            y = D.callback,
            x = 0,
            b = !1,
            w = [],
            e = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAMAAABFjsb+AAAAMFBMVEU7g/M9h/49jP8+if9Ah/89if88if87if87jP89iP87iP87iP87iP87iP87iP87iP8qdBigAAAAD3RSTlMAETM+RFBymaq7zNrd7viqvuNnAAAABnRFWHRUaXRsZQCo7tInAAAAB3RFWHRBdXRob3IAqa7MSAAAAAx0RVh0RGVzY3JpcHRpb24AEwkhIwAAAAp0RVh0Q29weXJpZ2h0AKwPzDoAAAAHdEVYdEUtbWFpbAB9CJvVAAAABHRFWHRVUkwAeKPTDwAAAFxJREFUeNptkFsKwEAIA3URtGEl979tn9B2dT6H4CNyouZIJtxUHkZgJsmciHEr2/iy2ZUCv+BIavBPqBgWBxPPxaULioMkV1JY6XLdvG5vd1/7R/237aXvr/a8AxnaEEw0I4SzAAAAAElFTkSuQmCC",
            A = 20;

        function T() { n = c[0], (f = new Image).src = t || e, n && "function" == typeof n.getContext && ((i = n.getContext("2d")).canvas.width = document.body.clientWidth, i.canvas.height = document.body.clientHeight),
                function() { for (var e = 0; e < d; e++) w.push((t = void 0, t = {}, n && (t.x = r, t.y = o, t.rotation = 0), t.speed = j(0, p), t.angle = j(0, 360) * (Math.PI / 180), t.rotationSpeed = j(-1 * m, m), t.size = v, t)); var t }() }
        S(document).ready(function() { a = S("body"), s = S(document), l = S(window), c = S('<canvas id="cs-particle-canvas"></canvas>'), (u = S('<div class="cs-canvas-container"></div>')).append(c), a.append(u), u.hide(), c.hide(), u.css({ position: "absolute", zIndex: 99999, width: "100%", height: "100%", top: window.pageYOffset, left: window.pageXOffset }) }); var C = { explosion: function(e) { e.x += e.speed * Math.cos(e.angle), e.y += e.speed * Math.sin(e.angle) }, splash: function(e) { e.x -= Math.tan(e.angle), e.y += -2 * e.speed }, falloff: function(e) { e.x -= Math.tan(e.angle), e.y -= -2 * e.speed }, blowright: function(e) { e.x -= -2 * e.speed, e.y -= Math.tan(e.angle / 8) }, blowleft: function(e) { e.x += -2 * e.speed, e.y -= Math.tan(e.angle / 8) } };

        function E() { i.clearRect(0, 0, window.innerWidth, window.innerHeight); var t = C[g] || C[DEFAULT_ANIMATION];
            w.forEach(function(e) { t(e),
                    function(e) { e.size *= .96 + j(1, 10) / 100, e.rotation += e.rotationSpeed, i.save(), i.translate(e.x, e.y), i.rotate(e.rotation * Math.PI / 180), f.width = A, f.height = A, i.drawImage(f, -f.width / 2, -f.height / 2, e.size, e.size), i.restore() }(e) }) }

        function N() { if (b) { var e = x;
                x = Date.now(), requestAnimationFrame(N, x - e), E() } }

        function j(e, t) { return Math.random() * (t - e) + e }

        function k(e) {
            function t() { c.hide(), u.hide(), a.css({ overflow: "inherit" }), b = !1, "function" == typeof y && y.call(this) }
            x = Date.now(), o = "click" === e.type ? (r = e.pageX - window.pageXOffset, e.pageY - window.pageYOffset) : (r = e.offset().left + e.width() / 2 - window.pageXOffset, e.offset().top + e.height() / 2 - window.pageYOffset), w = [], T(), s.height() > l.height() ? a.css("overflow-y", "inherit") : a.css("overflow-y", "hidden"), s.width() > l.width() ? a.css("overflow-x", "inherit") : a.css("overflow-x", "hidden"), u.css({ top: window.pageYOffset, left: window.pageXOffset }), c.css({ top: 0, left: 0 }), u.show(), c.show(), window.setTimeout(function() { c.fadeOut(t) }, h), b = !0, N() } return window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e, t) { var n = 1e3 / 60;
            n < t && (n -= t - n) < 0 && (n = 0), window.setTimeout(e, n) }, { setParticleImagePath: function(e) {! function(e) { void 0 !== e && (t = e) }(e) }, setParticleCount: function(e) {! function(e) { void 0 !== e && (d = e) }(e) }, setParticleSpeed: function(e) {! function(e) { void 0 !== e && (p = e) }(e) }, setParticleDuration: function(e) {! function(e) { void 0 !== e && (h = e) }(e) }, setParticleSize: function(e) {! function(e) { void 0 !== e && (v = e) }(e) }, setParticleRotationSpeed: function(e) {! function(e) { void 0 !== e && (m = e) }(e) }, setAnimationType: function(e) {! function(e) { void 0 !== e && (g = e) }(e) }, setCallback: function(e) {! function(e) { void 0 !== e && (y = e) }(e) }, init: function(e) { k(element) }, fireParticles: function(e) { k(e) }, stdFuncOCl: function(e) { k(e) } } }(); return n }();