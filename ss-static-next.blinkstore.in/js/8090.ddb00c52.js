(self["webpackChunkblinkui"] = self["webpackChunkblinkui"] || []).push([
    [8090], {
        98090: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                i18n: function() {
                    return Ft
                }
            });
            var o = n(59312),
                r = n(80610),
                i = n(72212);

            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? Object(arguments[e]) : {},
                        o = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && o.push.apply(o, Object.getOwnPropertySymbols(n).filter((function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))), o.forEach((function(e) {
                        (0, i.Z)(t, e, n[e])
                    }))
                }
                return t
            }
            var s = n(65805),
                u = n(68129);

            function l(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function c(t, e) {
                if (e && ("object" === (0, r.Z)(e) || "function" === typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return l(t)
            }

            function f(t) {
                return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, f(t)
            }

            function p(t, e) {
                return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, p(t, e)
            }

            function h(t, e) {
                if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), e && p(t, e)
            }
            var d = {
                    type: "logger",
                    log: function(t) {
                        this.output("log", t)
                    },
                    warn: function(t) {
                        this.output("warn", t)
                    },
                    error: function(t) {
                        this.output("error", t)
                    },
                    output: function(t, e) {
                        console && console[t] && console[t].apply(console, e)
                    }
                },
                g = function() {
                    function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        (0, s.Z)(this, t), this.init(e, n)
                    }
                    return (0, u.Z)(t, [{
                        key: "init",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            this.prefix = e.prefix || "i18next:", this.logger = t || d, this.options = e, this.debug = e.debug
                        }
                    }, {
                        key: "setDebug",
                        value: function(t) {
                            this.debug = t
                        }
                    }, {
                        key: "log",
                        value: function() {
                            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            return this.forward(e, "log", "", !0)
                        }
                    }, {
                        key: "warn",
                        value: function() {
                            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            return this.forward(e, "warn", "", !0)
                        }
                    }, {
                        key: "error",
                        value: function() {
                            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            return this.forward(e, "error", "")
                        }
                    }, {
                        key: "deprecate",
                        value: function() {
                            for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                            return this.forward(e, "warn", "WARNING DEPRECATED: ", !0)
                        }
                    }, {
                        key: "forward",
                        value: function(t, e, n, o) {
                            return o && !this.debug ? null : ("string" === typeof t[0] && (t[0] = "".concat(n).concat(this.prefix, " ").concat(t[0])), this.logger[e](t))
                        }
                    }, {
                        key: "create",
                        value: function(e) {
                            return new t(this.logger, a({}, {
                                prefix: "".concat(this.prefix, ":").concat(e, ":")
                            }, this.options))
                        }
                    }]), t
                }(),
                y = new g,
                v = function() {
                    function t() {
                        (0, s.Z)(this, t), this.observers = {}
                    }
                    return (0, u.Z)(t, [{
                        key: "on",
                        value: function(t, e) {
                            var n = this;
                            return t.split(" ").forEach((function(t) {
                                n.observers[t] = n.observers[t] || [], n.observers[t].push(e)
                            })), this
                        }
                    }, {
                        key: "off",
                        value: function(t, e) {
                            this.observers[t] && (e ? this.observers[t] = this.observers[t].filter((function(t) {
                                return t !== e
                            })) : delete this.observers[t])
                        }
                    }, {
                        key: "emit",
                        value: function(t) {
                            for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) n[o - 1] = arguments[o];
                            if (this.observers[t]) {
                                var r = [].concat(this.observers[t]);
                                r.forEach((function(t) {
                                    t.apply(void 0, n)
                                }))
                            }
                            if (this.observers["*"]) {
                                var i = [].concat(this.observers["*"]);
                                i.forEach((function(e) {
                                    e.apply(e, [t].concat(n))
                                }))
                            }
                        }
                    }]), t
                }();

            function m() {
                var t, e, n = new Promise((function(n, o) {
                    t = n, e = o
                }));
                return n.resolve = t, n.reject = e, n
            }

            function b(t) {
                return null == t ? "" : "" + t
            }

            function w(t, e, n) {
                t.forEach((function(t) {
                    e[t] && (n[t] = e[t])
                }))
            }

            function k(t, e, n) {
                function o(t) {
                    return t && t.indexOf("###") > -1 ? t.replace(/###/g, ".") : t
                }

                function r() {
                    return !t || "string" === typeof t
                }
                var i = "string" !== typeof e ? [].concat(e) : e.split(".");
                while (i.length > 1) {
                    if (r()) return {};
                    var a = o(i.shift());
                    !t[a] && n && (t[a] = new n), t = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : {}
                }
                return r() ? {} : {
                    obj: t,
                    k: o(i.shift())
                }
            }

            function x(t, e, n) {
                var o = k(t, e, Object),
                    r = o.obj,
                    i = o.k;
                r[i] = n
            }

            function S(t, e, n, o) {
                var r = k(t, e, Object),
                    i = r.obj,
                    a = r.k;
                i[a] = i[a] || [], o && (i[a] = i[a].concat(n)), o || i[a].push(n)
            }

            function O(t, e) {
                var n = k(t, e),
                    o = n.obj,
                    r = n.k;
                if (o) return o[r]
            }

            function L(t, e, n) {
                var o = O(t, n);
                return void 0 !== o ? o : O(e, n)
            }

            function E(t, e, n) {
                for (var o in e) "__proto__" !== o && "constructor" !== o && (o in t ? "string" === typeof t[o] || t[o] instanceof String || "string" === typeof e[o] || e[o] instanceof String ? n && (t[o] = e[o]) : E(t[o], e[o], n) : t[o] = e[o]);
                return t
            }

            function P(t) {
                return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }
            var j = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;"
            };

            function R(t) {
                return "string" === typeof t ? t.replace(/[&<>"'\/]/g, (function(t) {
                    return j[t]
                })) : t
            }
            var N = "undefined" !== typeof window && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1;

            function T(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ".";
                if (t) {
                    if (t[e]) return t[e];
                    for (var o = e.split(n), r = t, i = 0; i < o.length; ++i) {
                        if (!r) return;
                        if ("string" === typeof r[o[i]] && i + 1 < o.length) return;
                        if (void 0 === r[o[i]]) {
                            var a = 2,
                                s = o.slice(i, i + a).join(n),
                                u = r[s];
                            while (void 0 === u && o.length > i + a) a++, s = o.slice(i, i + a).join(n), u = r[s];
                            if (void 0 === u) return;
                            if ("string" === typeof u) return u;
                            if (s && "string" === typeof u[s]) return u[s];
                            var l = o.slice(i + a).join(n);
                            return l ? T(u, l, n) : void 0
                        }
                        r = r[o[i]]
                    }
                    return r
                }
            }
            var C = function(t) {
                    function e(t) {
                        var n, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            ns: ["translation"],
                            defaultNS: "translation"
                        };
                        return (0, s.Z)(this, e), n = c(this, f(e).call(this)), N && v.call(l(n)), n.data = t || {}, n.options = o, void 0 === n.options.keySeparator && (n.options.keySeparator = "."), void 0 === n.options.ignoreJSONStructure && (n.options.ignoreJSONStructure = !0), n
                    }
                    return h(e, t), (0, u.Z)(e, [{
                        key: "addNamespaces",
                        value: function(t) {
                            this.options.ns.indexOf(t) < 0 && this.options.ns.push(t)
                        }
                    }, {
                        key: "removeNamespaces",
                        value: function(t) {
                            var e = this.options.ns.indexOf(t);
                            e > -1 && this.options.ns.splice(e, 1)
                        }
                    }, {
                        key: "getResource",
                        value: function(t, e, n) {
                            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                r = void 0 !== o.keySeparator ? o.keySeparator : this.options.keySeparator,
                                i = void 0 !== o.ignoreJSONStructure ? o.ignoreJSONStructure : this.options.ignoreJSONStructure,
                                a = [t, e];
                            n && "string" !== typeof n && (a = a.concat(n)), n && "string" === typeof n && (a = a.concat(r ? n.split(r) : n)), t.indexOf(".") > -1 && (a = t.split("."));
                            var s = O(this.data, a);
                            return s || !i || "string" !== typeof n ? s : T(this.data && this.data[t] && this.data[t][e], n, r)
                        }
                    }, {
                        key: "addResource",
                        value: function(t, e, n, o) {
                            var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                                    silent: !1
                                },
                                i = this.options.keySeparator;
                            void 0 === i && (i = ".");
                            var a = [t, e];
                            n && (a = a.concat(i ? n.split(i) : n)), t.indexOf(".") > -1 && (a = t.split("."), o = e, e = a[1]), this.addNamespaces(e), x(this.data, a, o), r.silent || this.emit("added", t, e, n, o)
                        }
                    }, {
                        key: "addResources",
                        value: function(t, e, n) {
                            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                                silent: !1
                            };
                            for (var r in n) "string" !== typeof n[r] && "[object Array]" !== Object.prototype.toString.apply(n[r]) || this.addResource(t, e, r, n[r], {
                                silent: !0
                            });
                            o.silent || this.emit("added", t, e, n)
                        }
                    }, {
                        key: "addResourceBundle",
                        value: function(t, e, n, o, r) {
                            var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                                    silent: !1
                                },
                                s = [t, e];
                            t.indexOf(".") > -1 && (s = t.split("."), o = n, n = e, e = s[1]), this.addNamespaces(e);
                            var u = O(this.data, s) || {};
                            o ? E(u, n, r) : u = a({}, u, n), x(this.data, s, u), i.silent || this.emit("added", t, e, n)
                        }
                    }, {
                        key: "removeResourceBundle",
                        value: function(t, e) {
                            this.hasResourceBundle(t, e) && delete this.data[t][e], this.removeNamespaces(e), this.emit("removed", t, e)
                        }
                    }, {
                        key: "hasResourceBundle",
                        value: function(t, e) {
                            return void 0 !== this.getResource(t, e)
                        }
                    }, {
                        key: "getResourceBundle",
                        value: function(t, e) {
                            return e || (e = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? a({}, {}, this.getResource(t, e)) : this.getResource(t, e)
                        }
                    }, {
                        key: "getDataByLanguage",
                        value: function(t) {
                            return this.data[t]
                        }
                    }, {
                        key: "toJSON",
                        value: function() {
                            return this.data
                        }
                    }]), e
                }(v),
                A = {
                    processors: {},
                    addPostProcessor: function(t) {
                        this.processors[t.name] = t
                    },
                    handle: function(t, e, n, o, r) {
                        var i = this;
                        return t.forEach((function(t) {
                            i.processors[t] && (e = i.processors[t].process(e, n, o, r))
                        })), e
                    }
                },
                F = {},
                M = function(t) {
                    function e(t) {
                        var n, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return (0, s.Z)(this, e), n = c(this, f(e).call(this)), N && v.call(l(n)), w(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], t, l(n)), n.options = o, void 0 === n.options.keySeparator && (n.options.keySeparator = "."), n.logger = y.create("translator"), n
                    }
                    return h(e, t), (0, u.Z)(e, [{
                        key: "changeLanguage",
                        value: function(t) {
                            t && (this.language = t)
                        }
                    }, {
                        key: "exists",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                interpolation: {}
                            };
                            if (void 0 === t || null === t) return !1;
                            var n = this.resolve(t, e);
                            return n && void 0 !== n.res
                        }
                    }, {
                        key: "extractFromKey",
                        value: function(t, e) {
                            var n = void 0 !== e.nsSeparator ? e.nsSeparator : this.options.nsSeparator;
                            void 0 === n && (n = ":");
                            var o = void 0 !== e.keySeparator ? e.keySeparator : this.options.keySeparator,
                                r = e.ns || this.options.defaultNS;
                            if (n && t.indexOf(n) > -1) {
                                var i = t.match(this.interpolator.nestingRegexp);
                                if (i && i.length > 0) return {
                                    key: t,
                                    namespaces: r
                                };
                                var a = t.split(n);
                                (n !== o || n === o && this.options.ns.indexOf(a[0]) > -1) && (r = a.shift()), t = a.join(o)
                            }
                            return "string" === typeof r && (r = [r]), {
                                key: t,
                                namespaces: r
                            }
                        }
                    }, {
                        key: "translate",
                        value: function(t, n, o) {
                            var i = this;
                            if ("object" !== (0, r.Z)(n) && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), n || (n = {}), void 0 === t || null === t) return "";
                            Array.isArray(t) || (t = [String(t)]);
                            var s = void 0 !== n.keySeparator ? n.keySeparator : this.options.keySeparator,
                                u = this.extractFromKey(t[t.length - 1], n),
                                l = u.key,
                                c = u.namespaces,
                                f = c[c.length - 1],
                                p = n.lng || this.language,
                                h = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                            if (p && "cimode" === p.toLowerCase()) {
                                if (h) {
                                    var d = n.nsSeparator || this.options.nsSeparator;
                                    return f + d + l
                                }
                                return l
                            }
                            var g = this.resolve(t, n),
                                y = g && g.res,
                                v = g && g.usedKey || l,
                                m = g && g.exactUsedKey || l,
                                b = Object.prototype.toString.apply(y),
                                w = ["[object Number]", "[object Function]", "[object RegExp]"],
                                k = void 0 !== n.joinArrays ? n.joinArrays : this.options.joinArrays,
                                x = !this.i18nFormat || this.i18nFormat.handleAsObject,
                                S = "string" !== typeof y && "boolean" !== typeof y && "number" !== typeof y;
                            if (x && y && S && w.indexOf(b) < 0 && ("string" !== typeof k || "[object Array]" !== b)) {
                                if (!n.returnObjects && !this.options.returnObjects) return this.options.returnedObjectHandler || this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, y, a({}, n, {
                                    ns: c
                                })) : "key '".concat(l, " (").concat(this.language, ")' returned an object instead of string.");
                                if (s) {
                                    var O = "[object Array]" === b,
                                        L = O ? [] : {},
                                        E = O ? m : v;
                                    for (var P in y)
                                        if (Object.prototype.hasOwnProperty.call(y, P)) {
                                            var j = "".concat(E).concat(s).concat(P);
                                            L[P] = this.translate(j, a({}, n, {
                                                joinArrays: !1,
                                                ns: c
                                            })), L[P] === j && (L[P] = y[P])
                                        }
                                    y = L
                                }
                            } else if (x && "string" === typeof k && "[object Array]" === b) y = y.join(k), y && (y = this.extendTranslation(y, t, n, o));
                            else {
                                var R = !1,
                                    N = !1,
                                    T = void 0 !== n.count && "string" !== typeof n.count,
                                    C = e.hasDefaultValue(n),
                                    A = T ? this.pluralResolver.getSuffix(p, n.count) : "",
                                    F = n["defaultValue".concat(A)] || n.defaultValue;
                                !this.isValidLookup(y) && C && (R = !0, y = F), this.isValidLookup(y) || (N = !0, y = l);
                                var M = n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey,
                                    D = M && N ? void 0 : y,
                                    _ = C && F !== y && this.options.updateMissing;
                                if (N || R || _) {
                                    if (this.logger.log(_ ? "updateKey" : "missingKey", p, f, l, _ ? F : y), s) {
                                        var I = this.resolve(l, a({}, n, {
                                            keySeparator: !1
                                        }));
                                        I && I.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                                    }
                                    var H = [],
                                        U = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
                                    if ("fallback" === this.options.saveMissingTo && U && U[0])
                                        for (var B = 0; B < U.length; B++) H.push(U[B]);
                                    else "all" === this.options.saveMissingTo ? H = this.languageUtils.toResolveHierarchy(n.lng || this.language) : H.push(n.lng || this.language);
                                    var q = function(t, e, o) {
                                        i.options.missingKeyHandler ? i.options.missingKeyHandler(t, f, e, _ ? o : D, _, n) : i.backendConnector && i.backendConnector.saveMissing && i.backendConnector.saveMissing(t, f, e, _ ? o : D, _, n), i.emit("missingKey", t, f, e, y)
                                    };
                                    this.options.saveMissing && (this.options.saveMissingPlurals && T ? H.forEach((function(t) {
                                        i.pluralResolver.getSuffixes(t).forEach((function(e) {
                                            q([t], l + e, n["defaultValue".concat(e)] || F)
                                        }))
                                    })) : q(H, l, F))
                                }
                                y = this.extendTranslation(y, t, n, g, o), N && y === l && this.options.appendNamespaceToMissingKey && (y = "".concat(f, ":").concat(l)), (N || R) && this.options.parseMissingKeyHandler && (y = this.options.parseMissingKeyHandler(y))
                            }
                            return y
                        }
                    }, {
                        key: "extendTranslation",
                        value: function(t, e, n, o, r) {
                            var i = this;
                            if (this.i18nFormat && this.i18nFormat.parse) t = this.i18nFormat.parse(t, n, o.usedLng, o.usedNS, o.usedKey, {
                                resolved: o
                            });
                            else if (!n.skipInterpolation) {
                                n.interpolation && this.interpolator.init(a({}, n, {
                                    interpolation: a({}, this.options.interpolation, n.interpolation)
                                }));
                                var s, u = n.interpolation && n.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                                if (u) {
                                    var l = t.match(this.interpolator.nestingRegexp);
                                    s = l && l.length
                                }
                                var c = n.replace && "string" !== typeof n.replace ? n.replace : n;
                                if (this.options.interpolation.defaultVariables && (c = a({}, this.options.interpolation.defaultVariables, c)), t = this.interpolator.interpolate(t, c, n.lng || this.language, n), u) {
                                    var f = t.match(this.interpolator.nestingRegexp),
                                        p = f && f.length;
                                    s < p && (n.nest = !1)
                                }!1 !== n.nest && (t = this.interpolator.nest(t, (function() {
                                    for (var t = arguments.length, o = new Array(t), a = 0; a < t; a++) o[a] = arguments[a];
                                    return r && r[0] === o[0] && !n.context ? (i.logger.warn("It seems you are nesting recursively key: ".concat(o[0], " in key: ").concat(e[0])), null) : i.translate.apply(i, o.concat([e]))
                                }), n)), n.interpolation && this.interpolator.reset()
                            }
                            var h = n.postProcess || this.options.postProcess,
                                d = "string" === typeof h ? [h] : h;
                            return void 0 !== t && null !== t && d && d.length && !1 !== n.applyPostProcessor && (t = A.handle(d, t, e, this.options && this.options.postProcessPassResolved ? a({
                                i18nResolved: o
                            }, n) : n, this)), t
                        }
                    }, {
                        key: "resolve",
                        value: function(t) {
                            var e, n, o, r, i, a = this,
                                s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return "string" === typeof t && (t = [t]), t.forEach((function(t) {
                                if (!a.isValidLookup(e)) {
                                    var u = a.extractFromKey(t, s),
                                        l = u.key;
                                    n = l;
                                    var c = u.namespaces;
                                    a.options.fallbackNS && (c = c.concat(a.options.fallbackNS));
                                    var f = void 0 !== s.count && "string" !== typeof s.count,
                                        p = void 0 !== s.context && ("string" === typeof s.context || "number" === typeof s.context) && "" !== s.context,
                                        h = s.lngs ? s.lngs : a.languageUtils.toResolveHierarchy(s.lng || a.language, s.fallbackLng);
                                    c.forEach((function(t) {
                                        a.isValidLookup(e) || (i = t, !F["".concat(h[0], "-").concat(t)] && a.utils && a.utils.hasLoadedNamespace && !a.utils.hasLoadedNamespace(i) && (F["".concat(h[0], "-").concat(t)] = !0, a.logger.warn('key "'.concat(n, '" for languages "').concat(h.join(", "), '" won\'t get resolved as namespace "').concat(i, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), h.forEach((function(n) {
                                            if (!a.isValidLookup(e)) {
                                                r = n;
                                                var i, u, c = l,
                                                    h = [c];
                                                if (a.i18nFormat && a.i18nFormat.addLookupKeys) a.i18nFormat.addLookupKeys(h, l, n, t, s);
                                                else f && (i = a.pluralResolver.getSuffix(n, s.count)), f && p && h.push(c + i), p && h.push(c += "".concat(a.options.contextSeparator).concat(s.context)), f && h.push(c += i);
                                                while (u = h.pop()) a.isValidLookup(e) || (o = u, e = a.getResource(n, t, u, s))
                                            }
                                        })))
                                    }))
                                }
                            })), {
                                res: e,
                                usedKey: n,
                                exactUsedKey: o,
                                usedLng: r,
                                usedNS: i
                            }
                        }
                    }, {
                        key: "isValidLookup",
                        value: function(t) {
                            return void 0 !== t && !(!this.options.returnNull && null === t) && !(!this.options.returnEmptyString && "" === t)
                        }
                    }, {
                        key: "getResource",
                        value: function(t, e, n) {
                            var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                            return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(t, e, n, o) : this.resourceStore.getResource(t, e, n, o)
                        }
                    }], [{
                        key: "hasDefaultValue",
                        value: function(t) {
                            var e = "defaultValue";
                            for (var n in t)
                                if (Object.prototype.hasOwnProperty.call(t, n) && e === n.substring(0, e.length) && void 0 !== t[n]) return !0;
                            return !1
                        }
                    }]), e
                }(v);

            function D(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }
            var _ = function() {
                    function t(e) {
                        (0, s.Z)(this, t), this.options = e, this.whitelist = this.options.supportedLngs || !1, this.supportedLngs = this.options.supportedLngs || !1, this.logger = y.create("languageUtils")
                    }
                    return (0, u.Z)(t, [{
                        key: "getScriptPartFromCode",
                        value: function(t) {
                            if (!t || t.indexOf("-") < 0) return null;
                            var e = t.split("-");
                            return 2 === e.length ? null : (e.pop(), "x" === e[e.length - 1].toLowerCase() ? null : this.formatLanguageCode(e.join("-")))
                        }
                    }, {
                        key: "getLanguagePartFromCode",
                        value: function(t) {
                            if (!t || t.indexOf("-") < 0) return t;
                            var e = t.split("-");
                            return this.formatLanguageCode(e[0])
                        }
                    }, {
                        key: "formatLanguageCode",
                        value: function(t) {
                            if ("string" === typeof t && t.indexOf("-") > -1) {
                                var e = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                                    n = t.split("-");
                                return this.options.lowerCaseLng ? n = n.map((function(t) {
                                    return t.toLowerCase()
                                })) : 2 === n.length ? (n[0] = n[0].toLowerCase(), n[1] = n[1].toUpperCase(), e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = D(n[1].toLowerCase()))) : 3 === n.length && (n[0] = n[0].toLowerCase(), 2 === n[1].length && (n[1] = n[1].toUpperCase()), "sgn" !== n[0] && 2 === n[2].length && (n[2] = n[2].toUpperCase()), e.indexOf(n[1].toLowerCase()) > -1 && (n[1] = D(n[1].toLowerCase())), e.indexOf(n[2].toLowerCase()) > -1 && (n[2] = D(n[2].toLowerCase()))), n.join("-")
                            }
                            return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t
                        }
                    }, {
                        key: "isWhitelisted",
                        value: function(t) {
                            return this.logger.deprecate("languageUtils.isWhitelisted", 'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.'), this.isSupportedCode(t)
                        }
                    }, {
                        key: "isSupportedCode",
                        value: function(t) {
                            return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1
                        }
                    }, {
                        key: "getBestMatchFromCodes",
                        value: function(t) {
                            var e, n = this;
                            return t ? (t.forEach((function(t) {
                                if (!e) {
                                    var o = n.formatLanguageCode(t);
                                    n.options.supportedLngs && !n.isSupportedCode(o) || (e = o)
                                }
                            })), !e && this.options.supportedLngs && t.forEach((function(t) {
                                if (!e) {
                                    var o = n.getLanguagePartFromCode(t);
                                    if (n.isSupportedCode(o)) return e = o;
                                    e = n.options.supportedLngs.find((function(t) {
                                        if (0 === t.indexOf(o)) return t
                                    }))
                                }
                            })), e || (e = this.getFallbackCodes(this.options.fallbackLng)[0]), e) : null
                        }
                    }, {
                        key: "getFallbackCodes",
                        value: function(t, e) {
                            if (!t) return [];
                            if ("function" === typeof t && (t = t(e)), "string" === typeof t && (t = [t]), "[object Array]" === Object.prototype.toString.apply(t)) return t;
                            if (!e) return t["default"] || [];
                            var n = t[e];
                            return n || (n = t[this.getScriptPartFromCode(e)]), n || (n = t[this.formatLanguageCode(e)]), n || (n = t[this.getLanguagePartFromCode(e)]), n || (n = t["default"]), n || []
                        }
                    }, {
                        key: "toResolveHierarchy",
                        value: function(t, e) {
                            var n = this,
                                o = this.getFallbackCodes(e || this.options.fallbackLng || [], t),
                                r = [],
                                i = function(t) {
                                    t && (n.isSupportedCode(t) ? r.push(t) : n.logger.warn("rejecting language code not found in supportedLngs: ".concat(t)))
                                };
                            return "string" === typeof t && t.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && i(this.formatLanguageCode(t)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && i(this.getScriptPartFromCode(t)), "currentOnly" !== this.options.load && i(this.getLanguagePartFromCode(t))) : "string" === typeof t && i(this.formatLanguageCode(t)), o.forEach((function(t) {
                                r.indexOf(t) < 0 && i(n.formatLanguageCode(t))
                            })), r
                        }
                    }]), t
                }(),
                I = [{
                    lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "tl", "ti", "tr", "uz", "wa"],
                    nr: [1, 2],
                    fc: 1
                }, {
                    lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kk", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
                    nr: [1, 2],
                    fc: 2
                }, {
                    lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
                    nr: [1],
                    fc: 3
                }, {
                    lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
                    nr: [1, 2, 5],
                    fc: 4
                }, {
                    lngs: ["ar"],
                    nr: [0, 1, 2, 3, 11, 100],
                    fc: 5
                }, {
                    lngs: ["cs", "sk"],
                    nr: [1, 2, 5],
                    fc: 6
                }, {
                    lngs: ["csb", "pl"],
                    nr: [1, 2, 5],
                    fc: 7
                }, {
                    lngs: ["cy"],
                    nr: [1, 2, 3, 8],
                    fc: 8
                }, {
                    lngs: ["fr"],
                    nr: [1, 2],
                    fc: 9
                }, {
                    lngs: ["ga"],
                    nr: [1, 2, 3, 7, 11],
                    fc: 10
                }, {
                    lngs: ["gd"],
                    nr: [1, 2, 3, 20],
                    fc: 11
                }, {
                    lngs: ["is"],
                    nr: [1, 2],
                    fc: 12
                }, {
                    lngs: ["jv"],
                    nr: [0, 1],
                    fc: 13
                }, {
                    lngs: ["kw"],
                    nr: [1, 2, 3, 4],
                    fc: 14
                }, {
                    lngs: ["lt"],
                    nr: [1, 2, 10],
                    fc: 15
                }, {
                    lngs: ["lv"],
                    nr: [1, 2, 0],
                    fc: 16
                }, {
                    lngs: ["mk"],
                    nr: [1, 2],
                    fc: 17
                }, {
                    lngs: ["mnk"],
                    nr: [0, 1, 2],
                    fc: 18
                }, {
                    lngs: ["mt"],
                    nr: [1, 2, 11, 20],
                    fc: 19
                }, {
                    lngs: ["or"],
                    nr: [2, 1],
                    fc: 2
                }, {
                    lngs: ["ro"],
                    nr: [1, 2, 20],
                    fc: 20
                }, {
                    lngs: ["sl"],
                    nr: [5, 1, 2, 3],
                    fc: 21
                }, {
                    lngs: ["he", "iw"],
                    nr: [1, 2, 20, 21],
                    fc: 22
                }],
                H = {
                    1: function(t) {
                        return Number(t > 1)
                    },
                    2: function(t) {
                        return Number(1 != t)
                    },
                    3: function(t) {
                        return 0
                    },
                    4: function(t) {
                        return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
                    },
                    5: function(t) {
                        return Number(0 == t ? 0 : 1 == t ? 1 : 2 == t ? 2 : t % 100 >= 3 && t % 100 <= 10 ? 3 : t % 100 >= 11 ? 4 : 5)
                    },
                    6: function(t) {
                        return Number(1 == t ? 0 : t >= 2 && t <= 4 ? 1 : 2)
                    },
                    7: function(t) {
                        return Number(1 == t ? 0 : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
                    },
                    8: function(t) {
                        return Number(1 == t ? 0 : 2 == t ? 1 : 8 != t && 11 != t ? 2 : 3)
                    },
                    9: function(t) {
                        return Number(t >= 2)
                    },
                    10: function(t) {
                        return Number(1 == t ? 0 : 2 == t ? 1 : t < 7 ? 2 : t < 11 ? 3 : 4)
                    },
                    11: function(t) {
                        return Number(1 == t || 11 == t ? 0 : 2 == t || 12 == t ? 1 : t > 2 && t < 20 ? 2 : 3)
                    },
                    12: function(t) {
                        return Number(t % 10 != 1 || t % 100 == 11)
                    },
                    13: function(t) {
                        return Number(0 !== t)
                    },
                    14: function(t) {
                        return Number(1 == t ? 0 : 2 == t ? 1 : 3 == t ? 2 : 3)
                    },
                    15: function(t) {
                        return Number(t % 10 == 1 && t % 100 != 11 ? 0 : t % 10 >= 2 && (t % 100 < 10 || t % 100 >= 20) ? 1 : 2)
                    },
                    16: function(t) {
                        return Number(t % 10 == 1 && t % 100 != 11 ? 0 : 0 !== t ? 1 : 2)
                    },
                    17: function(t) {
                        return Number(1 == t || t % 10 == 1 && t % 100 != 11 ? 0 : 1)
                    },
                    18: function(t) {
                        return Number(0 == t ? 0 : 1 == t ? 1 : 2)
                    },
                    19: function(t) {
                        return Number(1 == t ? 0 : 0 == t || t % 100 > 1 && t % 100 < 11 ? 1 : t % 100 > 10 && t % 100 < 20 ? 2 : 3)
                    },
                    20: function(t) {
                        return Number(1 == t ? 0 : 0 == t || t % 100 > 0 && t % 100 < 20 ? 1 : 2)
                    },
                    21: function(t) {
                        return Number(t % 100 == 1 ? 1 : t % 100 == 2 ? 2 : t % 100 == 3 || t % 100 == 4 ? 3 : 0)
                    },
                    22: function(t) {
                        return Number(1 == t ? 0 : 2 == t ? 1 : (t < 0 || t > 10) && t % 10 == 0 ? 2 : 3)
                    }
                };

            function U() {
                var t = {};
                return I.forEach((function(e) {
                    e.lngs.forEach((function(n) {
                        t[n] = {
                            numbers: e.nr,
                            plurals: H[e.fc]
                        }
                    }))
                })), t
            }
            var B = function() {
                    function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        (0, s.Z)(this, t), this.languageUtils = e, this.options = n, this.logger = y.create("pluralResolver"), this.rules = U()
                    }
                    return (0, u.Z)(t, [{
                        key: "addRule",
                        value: function(t, e) {
                            this.rules[t] = e
                        }
                    }, {
                        key: "getRule",
                        value: function(t) {
                            return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
                        }
                    }, {
                        key: "needsPlural",
                        value: function(t) {
                            var e = this.getRule(t);
                            return e && e.numbers.length > 1
                        }
                    }, {
                        key: "getPluralFormsOfKey",
                        value: function(t, e) {
                            return this.getSuffixes(t).map((function(t) {
                                return e + t
                            }))
                        }
                    }, {
                        key: "getSuffixes",
                        value: function(t) {
                            var e = this,
                                n = this.getRule(t);
                            return n ? n.numbers.map((function(n) {
                                return e.getSuffix(t, n)
                            })) : []
                        }
                    }, {
                        key: "getSuffix",
                        value: function(t, e) {
                            var n = this,
                                o = this.getRule(t);
                            if (o) {
                                var r = o.noAbs ? o.plurals(e) : o.plurals(Math.abs(e)),
                                    i = o.numbers[r];
                                this.options.simplifyPluralSuffix && 2 === o.numbers.length && 1 === o.numbers[0] && (2 === i ? i = "plural" : 1 === i && (i = ""));
                                var a = function() {
                                    return n.options.prepend && i.toString() ? n.options.prepend + i.toString() : i.toString()
                                };
                                return "v1" === this.options.compatibilityJSON ? 1 === i ? "" : "number" === typeof i ? "_plural_".concat(i.toString()) : a() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === o.numbers.length && 1 === o.numbers[0] ? a() : this.options.prepend && r.toString() ? this.options.prepend + r.toString() : r.toString()
                            }
                            return this.logger.warn("no plural rule found for: ".concat(t)), ""
                        }
                    }]), t
                }(),
                q = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        (0, s.Z)(this, t), this.logger = y.create("interpolator"), this.options = e, this.format = e.interpolation && e.interpolation.format || function(t) {
                            return t
                        }, this.init(e)
                    }
                    return (0, u.Z)(t, [{
                        key: "init",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            t.interpolation || (t.interpolation = {
                                escapeValue: !0
                            });
                            var e = t.interpolation;
                            this.escape = void 0 !== e.escape ? e.escape : R, this.escapeValue = void 0 === e.escapeValue || e.escapeValue, this.useRawValueToEscape = void 0 !== e.useRawValueToEscape && e.useRawValueToEscape, this.prefix = e.prefix ? P(e.prefix) : e.prefixEscaped || "{{", this.suffix = e.suffix ? P(e.suffix) : e.suffixEscaped || "}}", this.formatSeparator = e.formatSeparator ? e.formatSeparator : e.formatSeparator || ",", this.unescapePrefix = e.unescapeSuffix ? "" : e.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : e.unescapeSuffix || "", this.nestingPrefix = e.nestingPrefix ? P(e.nestingPrefix) : e.nestingPrefixEscaped || P("$t("), this.nestingSuffix = e.nestingSuffix ? P(e.nestingSuffix) : e.nestingSuffixEscaped || P(")"), this.nestingOptionsSeparator = e.nestingOptionsSeparator ? e.nestingOptionsSeparator : e.nestingOptionsSeparator || ",", this.maxReplaces = e.maxReplaces ? e.maxReplaces : 1e3, this.alwaysFormat = void 0 !== e.alwaysFormat && e.alwaysFormat, this.resetRegExp()
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this.options && this.init(this.options)
                        }
                    }, {
                        key: "resetRegExp",
                        value: function() {
                            var t = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                            this.regexp = new RegExp(t, "g");
                            var e = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                            this.regexpUnescape = new RegExp(e, "g");
                            var n = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                            this.nestingRegexp = new RegExp(n, "g")
                        }
                    }, {
                        key: "interpolate",
                        value: function(t, e, n, o) {
                            var r, i, s, u = this,
                                l = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

                            function c(t) {
                                return t.replace(/\$/g, "$$$$")
                            }
                            var f = function(t) {
                                if (t.indexOf(u.formatSeparator) < 0) {
                                    var r = L(e, l, t);
                                    return u.alwaysFormat ? u.format(r, void 0, n, a({}, o, e, {
                                        interpolationkey: t
                                    })) : r
                                }
                                var i = t.split(u.formatSeparator),
                                    s = i.shift().trim(),
                                    c = i.join(u.formatSeparator).trim();
                                return u.format(L(e, l, s), c, n, a({}, o, e, {
                                    interpolationkey: s
                                }))
                            };
                            this.resetRegExp();
                            var p = o && o.missingInterpolationHandler || this.options.missingInterpolationHandler,
                                h = o && o.interpolation && o.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables,
                                d = [{
                                    regex: this.regexpUnescape,
                                    safeValue: function(t) {
                                        return c(t)
                                    }
                                }, {
                                    regex: this.regexp,
                                    safeValue: function(t) {
                                        return u.escapeValue ? c(u.escape(t)) : c(t)
                                    }
                                }];
                            return d.forEach((function(e) {
                                s = 0;
                                while (r = e.regex.exec(t)) {
                                    if (i = f(r[1].trim()), void 0 === i)
                                        if ("function" === typeof p) {
                                            var n = p(t, r, o);
                                            i = "string" === typeof n ? n : ""
                                        } else {
                                            if (h) {
                                                i = r[0];
                                                continue
                                            }
                                            u.logger.warn("missed to pass in variable ".concat(r[1], " for interpolating ").concat(t)), i = ""
                                        }
                                    else "string" === typeof i || u.useRawValueToEscape || (i = b(i));
                                    var a = e.safeValue(i);
                                    if (t = t.replace(r[0], a), h ? (e.regex.lastIndex += a.length, e.regex.lastIndex -= r[0].length) : e.regex.lastIndex = 0, s++, s >= u.maxReplaces) break
                                }
                            })), t
                        }
                    }, {
                        key: "nest",
                        value: function(t, e) {
                            var n, o, r = this,
                                i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                s = a({}, i);

                            function u(t, e) {
                                var n = this.nestingOptionsSeparator;
                                if (t.indexOf(n) < 0) return t;
                                var o = t.split(new RegExp("".concat(n, "[ ]*{"))),
                                    r = "{".concat(o[1]);
                                t = o[0], r = this.interpolate(r, s), r = r.replace(/'/g, '"');
                                try {
                                    s = JSON.parse(r), e && (s = a({}, e, s))
                                } catch (i) {
                                    return this.logger.warn("failed parsing options string in nesting for key ".concat(t), i), "".concat(t).concat(n).concat(r)
                                }
                                return delete s.defaultValue, t
                            }
                            s.applyPostProcessor = !1, delete s.defaultValue;
                            while (n = this.nestingRegexp.exec(t)) {
                                var l = [],
                                    c = !1;
                                if (-1 !== n[0].indexOf(this.formatSeparator) && !/{.*}/.test(n[1])) {
                                    var f = n[1].split(this.formatSeparator).map((function(t) {
                                        return t.trim()
                                    }));
                                    n[1] = f.shift(), l = f, c = !0
                                }
                                if (o = e(u.call(this, n[1].trim(), s), s), o && n[0] === t && "string" !== typeof o) return o;
                                "string" !== typeof o && (o = b(o)), o || (this.logger.warn("missed to resolve ".concat(n[1], " for nesting ").concat(t)), o = ""), c && (o = l.reduce((function(t, e) {
                                    return r.format(t, e, i.lng, a({}, i, {
                                        interpolationkey: n[1].trim()
                                    }))
                                }), o.trim())), t = t.replace(n[0], o), this.regexp.lastIndex = 0
                            }
                            return t
                        }
                    }]), t
                }();

            function V(t, e) {
                var n = t.indexOf(e);
                while (-1 !== n) t.splice(n, 1), n = t.indexOf(e)
            }
            var K = function(t) {
                function e(t, n, o) {
                    var r, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return (0, s.Z)(this, e), r = c(this, f(e).call(this)), N && v.call(l(r)), r.backend = t, r.store = n, r.services = o, r.languageUtils = o.languageUtils, r.options = i, r.logger = y.create("backendConnector"), r.state = {}, r.queue = [], r.backend && r.backend.init && r.backend.init(o, i.backend, i), r
                }
                return h(e, t), (0, u.Z)(e, [{
                    key: "queueLoad",
                    value: function(t, e, n, o) {
                        var r = this,
                            i = [],
                            a = [],
                            s = [],
                            u = [];
                        return t.forEach((function(t) {
                            var o = !0;
                            e.forEach((function(e) {
                                var s = "".concat(t, "|").concat(e);
                                !n.reload && r.store.hasResourceBundle(t, e) ? r.state[s] = 2 : r.state[s] < 0 || (1 === r.state[s] ? a.indexOf(s) < 0 && a.push(s) : (r.state[s] = 1, o = !1, a.indexOf(s) < 0 && a.push(s), i.indexOf(s) < 0 && i.push(s), u.indexOf(e) < 0 && u.push(e)))
                            })), o || s.push(t)
                        })), (i.length || a.length) && this.queue.push({
                            pending: a,
                            loaded: {},
                            errors: [],
                            callback: o
                        }), {
                            toLoad: i,
                            pending: a,
                            toLoadLanguages: s,
                            toLoadNamespaces: u
                        }
                    }
                }, {
                    key: "loaded",
                    value: function(t, e, n) {
                        var o = t.split("|"),
                            r = o[0],
                            i = o[1];
                        e && this.emit("failedLoading", r, i, e), n && this.store.addResourceBundle(r, i, n), this.state[t] = e ? -1 : 2;
                        var a = {};
                        this.queue.forEach((function(n) {
                            S(n.loaded, [r], i), V(n.pending, t), e && n.errors.push(e), 0 !== n.pending.length || n.done || (Object.keys(n.loaded).forEach((function(t) {
                                a[t] || (a[t] = []), n.loaded[t].length && n.loaded[t].forEach((function(e) {
                                    a[t].indexOf(e) < 0 && a[t].push(e)
                                }))
                            })), n.done = !0, n.errors.length ? n.callback(n.errors) : n.callback())
                        })), this.emit("loaded", a), this.queue = this.queue.filter((function(t) {
                            return !t.done
                        }))
                    }
                }, {
                    key: "read",
                    value: function(t, e, n) {
                        var o = this,
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 350,
                            a = arguments.length > 5 ? arguments[5] : void 0;
                        return t.length ? this.backend[n](t, e, (function(s, u) {
                            s && u && r < 5 ? setTimeout((function() {
                                o.read.call(o, t, e, n, r + 1, 2 * i, a)
                            }), i) : a(s, u)
                        })) : a(null, {})
                    }
                }, {
                    key: "prepareLoading",
                    value: function(t, e) {
                        var n = this,
                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            r = arguments.length > 3 ? arguments[3] : void 0;
                        if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), r && r();
                        "string" === typeof t && (t = this.languageUtils.toResolveHierarchy(t)), "string" === typeof e && (e = [e]);
                        var i = this.queueLoad(t, e, o, r);
                        if (!i.toLoad.length) return i.pending.length || r(), null;
                        i.toLoad.forEach((function(t) {
                            n.loadOne(t)
                        }))
                    }
                }, {
                    key: "load",
                    value: function(t, e, n) {
                        this.prepareLoading(t, e, {}, n)
                    }
                }, {
                    key: "reload",
                    value: function(t, e, n) {
                        this.prepareLoading(t, e, {
                            reload: !0
                        }, n)
                    }
                }, {
                    key: "loadOne",
                    value: function(t) {
                        var e = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            o = t.split("|"),
                            r = o[0],
                            i = o[1];
                        this.read(r, i, "read", void 0, void 0, (function(o, a) {
                            o && e.logger.warn("".concat(n, "loading namespace ").concat(i, " for language ").concat(r, " failed"), o), !o && a && e.logger.log("".concat(n, "loaded namespace ").concat(i, " for language ").concat(r), a), e.loaded(t, o, a)
                        }))
                    }
                }, {
                    key: "saveMissing",
                    value: function(t, e, n, o, r) {
                        var i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                        this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(e) ? this.logger.warn('did not save key "'.concat(n, '" as the namespace "').concat(e, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : void 0 !== n && null !== n && "" !== n && (this.backend && this.backend.create && this.backend.create(t, e, n, o, null, a({}, i, {
                            isUpdate: r
                        })), t && t[0] && this.store.addResource(t[0], e, n, o))
                    }
                }]), e
            }(v);

            function Z() {
                return {
                    debug: !1,
                    initImmediate: !0,
                    ns: ["translation"],
                    defaultNS: ["translation"],
                    fallbackLng: ["dev"],
                    fallbackNS: !1,
                    whitelist: !1,
                    nonExplicitWhitelist: !1,
                    supportedLngs: !1,
                    nonExplicitSupportedLngs: !1,
                    load: "all",
                    preload: !1,
                    simplifyPluralSuffix: !0,
                    keySeparator: ".",
                    nsSeparator: ":",
                    pluralSeparator: "_",
                    contextSeparator: "_",
                    partialBundledLanguages: !1,
                    saveMissing: !1,
                    updateMissing: !1,
                    saveMissingTo: "fallback",
                    saveMissingPlurals: !0,
                    missingKeyHandler: !1,
                    missingInterpolationHandler: !1,
                    postProcess: !1,
                    postProcessPassResolved: !1,
                    returnNull: !0,
                    returnEmptyString: !0,
                    returnObjects: !1,
                    joinArrays: !1,
                    returnedObjectHandler: !1,
                    parseMissingKeyHandler: !1,
                    appendNamespaceToMissingKey: !1,
                    appendNamespaceToCIMode: !1,
                    overloadTranslationOptionHandler: function(t) {
                        var e = {};
                        if ("object" === (0, r.Z)(t[1]) && (e = t[1]), "string" === typeof t[1] && (e.defaultValue = t[1]), "string" === typeof t[2] && (e.tDescription = t[2]), "object" === (0, r.Z)(t[2]) || "object" === (0, r.Z)(t[3])) {
                            var n = t[3] || t[2];
                            Object.keys(n).forEach((function(t) {
                                e[t] = n[t]
                            }))
                        }
                        return e
                    },
                    interpolation: {
                        escapeValue: !0,
                        format: function(t, e, n, o) {
                            return t
                        },
                        prefix: "{{",
                        suffix: "}}",
                        formatSeparator: ",",
                        unescapePrefix: "-",
                        nestingPrefix: "$t(",
                        nestingSuffix: ")",
                        nestingOptionsSeparator: ",",
                        maxReplaces: 1e3,
                        skipOnVariables: !1
                    }
                }
            }

            function J(t) {
                return "string" === typeof t.ns && (t.ns = [t.ns]), "string" === typeof t.fallbackLng && (t.fallbackLng = [t.fallbackLng]), "string" === typeof t.fallbackNS && (t.fallbackNS = [t.fallbackNS]), t.whitelist && (t.whitelist && t.whitelist.indexOf("cimode") < 0 && (t.whitelist = t.whitelist.concat(["cimode"])), t.supportedLngs = t.whitelist), t.nonExplicitWhitelist && (t.nonExplicitSupportedLngs = t.nonExplicitWhitelist), t.supportedLngs && t.supportedLngs.indexOf("cimode") < 0 && (t.supportedLngs = t.supportedLngs.concat(["cimode"])), t
            }

            function Y() {}
            var z = function(t) {
                    function e() {
                        var t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            o = arguments.length > 1 ? arguments[1] : void 0;
                        if ((0, s.Z)(this, e), t = c(this, f(e).call(this)), N && v.call(l(t)), t.options = J(n), t.services = {}, t.logger = y, t.modules = {
                                external: []
                            }, o && !t.isInitialized && !n.isClone) {
                            if (!t.options.initImmediate) return t.init(n, o), c(t, l(t));
                            setTimeout((function() {
                                t.init(n, o)
                            }), 0)
                        }
                        return t
                    }
                    return h(e, t), (0, u.Z)(e, [{
                        key: "init",
                        value: function() {
                            var t = this,
                                e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = arguments.length > 1 ? arguments[1] : void 0;

                            function o(t) {
                                return t ? "function" === typeof t ? new t : t : null
                            }
                            if ("function" === typeof e && (n = e, e = {}), e.whitelist && !e.supportedLngs && this.logger.deprecate("whitelist", 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'), e.nonExplicitWhitelist && !e.nonExplicitSupportedLngs && this.logger.deprecate("whitelist", 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'), this.options = a({}, Z(), this.options, J(e)), this.format = this.options.interpolation.format, n || (n = Y), !this.options.isClone) {
                                this.modules.logger ? y.init(o(this.modules.logger), this.options) : y.init(null, this.options);
                                var r = new _(this.options);
                                this.store = new C(this.options.resources, this.options);
                                var i = this.services;
                                i.logger = y, i.resourceStore = this.store, i.languageUtils = r, i.pluralResolver = new B(r, {
                                    prepend: this.options.pluralSeparator,
                                    compatibilityJSON: this.options.compatibilityJSON,
                                    simplifyPluralSuffix: this.options.simplifyPluralSuffix
                                }), i.interpolator = new q(this.options), i.utils = {
                                    hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                                }, i.backendConnector = new K(o(this.modules.backend), i.resourceStore, i, this.options), i.backendConnector.on("*", (function(e) {
                                    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
                                    t.emit.apply(t, [e].concat(o))
                                })), this.modules.languageDetector && (i.languageDetector = o(this.modules.languageDetector), i.languageDetector.init(i, this.options.detection, this.options)), this.modules.i18nFormat && (i.i18nFormat = o(this.modules.i18nFormat), i.i18nFormat.init && i.i18nFormat.init(this)), this.translator = new M(this.services, this.options), this.translator.on("*", (function(e) {
                                    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) o[r - 1] = arguments[r];
                                    t.emit.apply(t, [e].concat(o))
                                })), this.modules.external.forEach((function(e) {
                                    e.init && e.init(t)
                                }))
                            }
                            if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                                var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                                s.length > 0 && "dev" !== s[0] && (this.options.lng = s[0])
                            }
                            this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
                            var u = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
                            u.forEach((function(e) {
                                t[e] = function() {
                                    var n;
                                    return (n = t.store)[e].apply(n, arguments)
                                }
                            }));
                            var l = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
                            l.forEach((function(e) {
                                t[e] = function() {
                                    var n;
                                    return (n = t.store)[e].apply(n, arguments), t
                                }
                            }));
                            var c = m(),
                                f = function() {
                                    var e = function(e, o) {
                                        t.isInitialized && !t.initializedStoreOnce && t.logger.warn("init: i18next is already initialized. You should call init just once!"), t.isInitialized = !0, t.options.isClone || t.logger.log("initialized", t.options), t.emit("initialized", t.options), c.resolve(o), n(e, o)
                                    };
                                    if (t.languages && "v1" !== t.options.compatibilityAPI && !t.isInitialized) return e(null, t.t.bind(t));
                                    t.changeLanguage(t.options.lng, e)
                                };
                            return this.options.resources || !this.options.initImmediate ? f() : setTimeout(f, 0), c
                        }
                    }, {
                        key: "loadResources",
                        value: function(t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Y,
                                o = n,
                                r = "string" === typeof t ? t : this.language;
                            if ("function" === typeof t && (o = t), !this.options.resources || this.options.partialBundledLanguages) {
                                if (r && "cimode" === r.toLowerCase()) return o();
                                var i = [],
                                    a = function(t) {
                                        if (t) {
                                            var n = e.services.languageUtils.toResolveHierarchy(t);
                                            n.forEach((function(t) {
                                                i.indexOf(t) < 0 && i.push(t)
                                            }))
                                        }
                                    };
                                if (r) a(r);
                                else {
                                    var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                                    s.forEach((function(t) {
                                        return a(t)
                                    }))
                                }
                                this.options.preload && this.options.preload.forEach((function(t) {
                                    return a(t)
                                })), this.services.backendConnector.load(i, this.options.ns, o)
                            } else o(null)
                        }
                    }, {
                        key: "reloadResources",
                        value: function(t, e, n) {
                            var o = m();
                            return t || (t = this.languages), e || (e = this.options.ns), n || (n = Y), this.services.backendConnector.reload(t, e, (function(t) {
                                o.resolve(), n(t)
                            })), o
                        }
                    }, {
                        key: "use",
                        value: function(t) {
                            if (!t) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                            if (!t.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                            return "backend" === t.type && (this.modules.backend = t), ("logger" === t.type || t.log && t.warn && t.error) && (this.modules.logger = t), "languageDetector" === t.type && (this.modules.languageDetector = t), "i18nFormat" === t.type && (this.modules.i18nFormat = t), "postProcessor" === t.type && A.addPostProcessor(t), "3rdParty" === t.type && this.modules.external.push(t), this
                        }
                    }, {
                        key: "changeLanguage",
                        value: function(t, e) {
                            var n = this;
                            this.isLanguageChangingTo = t;
                            var o = m();
                            this.emit("languageChanging", t);
                            var r = function(t, r) {
                                    r ? (n.language = r, n.languages = n.services.languageUtils.toResolveHierarchy(r), n.translator.changeLanguage(r), n.isLanguageChangingTo = void 0, n.emit("languageChanged", r), n.logger.log("languageChanged", r)) : n.isLanguageChangingTo = void 0, o.resolve((function() {
                                        return n.t.apply(n, arguments)
                                    })), e && e(t, (function() {
                                        return n.t.apply(n, arguments)
                                    }))
                                },
                                i = function(e) {
                                    t || e || !n.services.languageDetector || (e = []);
                                    var o = "string" === typeof e ? e : n.services.languageUtils.getBestMatchFromCodes(e);
                                    o && (n.language || (n.language = o, n.languages = n.services.languageUtils.toResolveHierarchy(o)), n.translator.language || n.translator.changeLanguage(o), n.services.languageDetector && n.services.languageDetector.cacheUserLanguage(o)), n.loadResources(o, (function(t) {
                                        r(t, o)
                                    }))
                                };
                            return t || !this.services.languageDetector || this.services.languageDetector.async ? !t && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(i) : i(t) : i(this.services.languageDetector.detect()), o
                        }
                    }, {
                        key: "getFixedT",
                        value: function(t, e, n) {
                            var o = this,
                                i = function t(e, i) {
                                    var s;
                                    if ("object" !== (0, r.Z)(i)) {
                                        for (var u = arguments.length, l = new Array(u > 2 ? u - 2 : 0), c = 2; c < u; c++) l[c - 2] = arguments[c];
                                        s = o.options.overloadTranslationOptionHandler([e, i].concat(l))
                                    } else s = a({}, i);
                                    s.lng = s.lng || t.lng, s.lngs = s.lngs || t.lngs, s.ns = s.ns || t.ns;
                                    var f = o.options.keySeparator || ".",
                                        p = n ? "".concat(n).concat(f).concat(e) : e;
                                    return o.t(p, s)
                                };
                            return "string" === typeof t ? i.lng = t : i.lngs = t, i.ns = e, i.keyPrefix = n, i
                        }
                    }, {
                        key: "t",
                        value: function() {
                            var t;
                            return this.translator && (t = this.translator).translate.apply(t, arguments)
                        }
                    }, {
                        key: "exists",
                        value: function() {
                            var t;
                            return this.translator && (t = this.translator).exists.apply(t, arguments)
                        }
                    }, {
                        key: "setDefaultNamespace",
                        value: function(t) {
                            this.options.defaultNS = t
                        }
                    }, {
                        key: "hasLoadedNamespace",
                        value: function(t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                            if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                            var o = this.languages[0],
                                r = !!this.options && this.options.fallbackLng,
                                i = this.languages[this.languages.length - 1];
                            if ("cimode" === o.toLowerCase()) return !0;
                            var a = function(t, n) {
                                var o = e.services.backendConnector.state["".concat(t, "|").concat(n)];
                                return -1 === o || 2 === o
                            };
                            if (n.precheck) {
                                var s = n.precheck(this, a);
                                if (void 0 !== s) return s
                            }
                            return !!this.hasResourceBundle(o, t) || (!this.services.backendConnector.backend || !(!a(o, t) || r && !a(i, t)))
                        }
                    }, {
                        key: "loadNamespaces",
                        value: function(t, e) {
                            var n = this,
                                o = m();
                            return this.options.ns ? ("string" === typeof t && (t = [t]), t.forEach((function(t) {
                                n.options.ns.indexOf(t) < 0 && n.options.ns.push(t)
                            })), this.loadResources((function(t) {
                                o.resolve(), e && e(t)
                            })), o) : (e && e(), Promise.resolve())
                        }
                    }, {
                        key: "loadLanguages",
                        value: function(t, e) {
                            var n = m();
                            "string" === typeof t && (t = [t]);
                            var o = this.options.preload || [],
                                r = t.filter((function(t) {
                                    return o.indexOf(t) < 0
                                }));
                            return r.length ? (this.options.preload = o.concat(r), this.loadResources((function(t) {
                                n.resolve(), e && e(t)
                            })), n) : (e && e(), Promise.resolve())
                        }
                    }, {
                        key: "dir",
                        value: function(t) {
                            if (t || (t = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), !t) return "rtl";
                            var e = ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"];
                            return e.indexOf(this.services.languageUtils.getLanguagePartFromCode(t)) >= 0 ? "rtl" : "ltr"
                        }
                    }, {
                        key: "createInstance",
                        value: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                n = arguments.length > 1 ? arguments[1] : void 0;
                            return new e(t, n)
                        }
                    }, {
                        key: "cloneInstance",
                        value: function() {
                            var t = this,
                                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Y,
                                r = a({}, this.options, n, {
                                    isClone: !0
                                }),
                                i = new e(r),
                                s = ["store", "services", "language"];
                            return s.forEach((function(e) {
                                i[e] = t[e]
                            })), i.services = a({}, this.services), i.services.utils = {
                                hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                            }, i.translator = new M(i.services, i.options), i.translator.on("*", (function(t) {
                                for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), o = 1; o < e; o++) n[o - 1] = arguments[o];
                                i.emit.apply(i, [t].concat(n))
                            })), i.init(r, o), i.translator.options = i.options, i.translator.backendConnector.services.utils = {
                                hasLoadedNamespace: i.hasLoadedNamespace.bind(i)
                            }, i
                        }
                    }, {
                        key: "toJSON",
                        value: function() {
                            return {
                                options: this.options,
                                store: this.store,
                                language: this.language,
                                languages: this.languages
                            }
                        }
                    }]), e
                }(v),
                X = new z,
                G = X;

            function W(t) {
                return W = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, W(t)
            }
            var $ = [],
                Q = $.forEach,
                tt = $.slice;

            function et(t) {
                return Q.call(tt.call(arguments, 1), (function(e) {
                    if (e)
                        for (var n in e) void 0 === t[n] && (t[n] = e[n])
                })), t
            }

            function nt() {
                return "function" === typeof XMLHttpRequest || "object" === ("undefined" === typeof XMLHttpRequest ? "undefined" : W(XMLHttpRequest))
            }

            function ot(t) {
                return !!t && "function" === typeof t.then
            }

            function rt(t) {
                return ot(t) ? t : Promise.resolve(t)
            }
            var it, at, st, ut = n(40036),
                lt = n.t(ut, 2);

            function ct(t) {
                return ct = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, ct(t)
            }
            "function" === typeof fetch && (it = "undefined" !== typeof global && global.fetch ? global.fetch : "undefined" !== typeof window && window.fetch ? window.fetch : fetch), nt() && ("undefined" !== typeof global && global.XMLHttpRequest ? at = global.XMLHttpRequest : "undefined" !== typeof window && window.XMLHttpRequest && (at = window.XMLHttpRequest)), "function" === typeof ActiveXObject && ("undefined" !== typeof global && global.ActiveXObject ? st = global.ActiveXObject : "undefined" !== typeof window && window.ActiveXObject && (st = window.ActiveXObject)), it || !lt || at || st || (it = ut || lt), "function" !== typeof it && (it = void 0);
            var ft = function(t, e) {
                    if (e && "object" === ct(e)) {
                        var n = "";
                        for (var o in e) n += "&" + encodeURIComponent(o) + "=" + encodeURIComponent(e[o]);
                        if (!n) return t;
                        t = t + (-1 !== t.indexOf("?") ? "&" : "?") + n.slice(1)
                    }
                    return t
                },
                pt = function(t, e, n) {
                    it(t, e).then((function(t) {
                        if (!t.ok) return n(t.statusText || "Error", {
                            status: t.status
                        });
                        t.text().then((function(e) {
                            n(null, {
                                status: t.status,
                                data: e
                            })
                        })).catch(n)
                    })).catch(n)
                },
                ht = !1,
                dt = function(t, e, n, o) {
                    t.queryStringParams && (e = ft(e, t.queryStringParams));
                    var r = et({}, "function" === typeof t.customHeaders ? t.customHeaders() : t.customHeaders);
                    n && (r["Content-Type"] = "application/json");
                    var i = "function" === typeof t.requestOptions ? t.requestOptions(n) : t.requestOptions,
                        a = et({
                            method: n ? "POST" : "GET",
                            body: n ? t.stringify(n) : void 0,
                            headers: r
                        }, ht ? {} : i);
                    try {
                        pt(e, a, o)
                    } catch (s) {
                        if (!i || 0 === Object.keys(i).length || !s.message || s.message.indexOf("not implemented") < 0) return o(s);
                        try {
                            Object.keys(i).forEach((function(t) {
                                delete a[t]
                            })), pt(e, a, o), ht = !0
                        } catch (u) {
                            o(u)
                        }
                    }
                },
                gt = function(t, e, n, o) {
                    n && "object" === ct(n) && (n = ft("", n).slice(1)), t.queryStringParams && (e = ft(e, t.queryStringParams));
                    try {
                        var r;
                        r = at ? new at : new st("MSXML2.XMLHTTP.3.0"), r.open(n ? "POST" : "GET", e, 1), t.crossDomain || r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.withCredentials = !!t.withCredentials, n && r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), r.overrideMimeType && r.overrideMimeType("application/json");
                        var i = t.customHeaders;
                        if (i = "function" === typeof i ? i() : i, i)
                            for (var a in i) r.setRequestHeader(a, i[a]);
                        r.onreadystatechange = function() {
                            r.readyState > 3 && o(r.status >= 400 ? r.statusText : null, {
                                status: r.status,
                                data: r.responseText
                            })
                        }, r.send(n)
                    } catch (s) {
                        console && console.log(s)
                    }
                },
                yt = function(t, e, n, o) {
                    return "function" === typeof n && (o = n, n = void 0), o = o || function() {}, it ? dt(t, e, n, o) : nt() || "function" === typeof ActiveXObject ? gt(t, e, n, o) : void o(new Error("No fetch and no xhr implementation found!"))
                },
                vt = yt;

            function mt(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function bt(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var o = e[n];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                }
            }

            function wt(t, e, n) {
                return e && bt(t.prototype, e), n && bt(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function kt(t, e, n) {
                return e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var xt = function() {
                    return {
                        loadPath: "/locales/{{lng}}/{{ns}}.json",
                        addPath: "/locales/add/{{lng}}/{{ns}}",
                        allowMultiLoading: !1,
                        parse: function(t) {
                            return JSON.parse(t)
                        },
                        stringify: JSON.stringify,
                        parsePayload: function(t, e, n) {
                            return kt({}, e, n || "")
                        },
                        request: vt,
                        reloadInterval: "undefined" === typeof window && 36e5,
                        customHeaders: {},
                        queryStringParams: {},
                        crossDomain: !1,
                        withCredentials: !1,
                        overrideMimeType: !1,
                        requestOptions: {
                            mode: "cors",
                            credentials: "same-origin",
                            cache: "default"
                        }
                    }
                },
                St = function() {
                    function t(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        mt(this, t), this.services = e, this.options = n, this.allOptions = o, this.type = "backend", this.init(e, n, o)
                    }
                    return wt(t, [{
                        key: "init",
                        value: function(t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            this.services = t, this.options = et(n, this.options || {}, xt()), this.allOptions = o, this.services && this.options.reloadInterval && setInterval((function() {
                                return e.reload()
                            }), this.options.reloadInterval)
                        }
                    }, {
                        key: "readMulti",
                        value: function(t, e, n) {
                            this._readAny(t, t, e, e, n)
                        }
                    }, {
                        key: "read",
                        value: function(t, e, n) {
                            this._readAny([t], t, [e], e, n)
                        }
                    }, {
                        key: "_readAny",
                        value: function(t, e, n, o, r) {
                            var i = this,
                                a = this.options.loadPath;
                            "function" === typeof this.options.loadPath && (a = this.options.loadPath(t, n)), a = rt(a), a.then((function(a) {
                                if (!a) return r(null, {});
                                var s = i.services.interpolator.interpolate(a, {
                                    lng: t.join("+"),
                                    ns: n.join("+")
                                });
                                i.loadUrl(s, r, e, o)
                            }))
                        }
                    }, {
                        key: "loadUrl",
                        value: function(t, e, n, o) {
                            var r = this;
                            this.options.request(this.options, t, void 0, (function(i, a) {
                                if (a && (a.status >= 500 && a.status < 600 || !a.status)) return e("failed loading " + t + "; status code: " + a.status, !0);
                                if (a && a.status >= 400 && a.status < 500) return e("failed loading " + t + "; status code: " + a.status, !1);
                                if (!a && i && i.message && i.message.indexOf("Failed to fetch") > -1) return e("failed loading " + t + ": " + i.message, !0);
                                if (i) return e(i, !1);
                                var s, u;
                                try {
                                    s = "string" === typeof a.data ? r.options.parse(a.data, n, o) : a.data
                                } catch (l) {
                                    u = "failed parsing " + t + " to json"
                                }
                                if (u) return e(u, !1);
                                e(null, s)
                            }))
                        }
                    }, {
                        key: "create",
                        value: function(t, e, n, o, r) {
                            var i = this;
                            if (this.options.addPath) {
                                "string" === typeof t && (t = [t]);
                                var a = this.options.parsePayload(e, n, o),
                                    s = 0,
                                    u = [],
                                    l = [];
                                t.forEach((function(n) {
                                    var o = i.options.addPath;
                                    "function" === typeof i.options.addPath && (o = i.options.addPath(n, e));
                                    var c = i.services.interpolator.interpolate(o, {
                                        lng: n,
                                        ns: e
                                    });
                                    i.options.request(i.options, c, a, (function(e, n) {
                                        s += 1, u.push(e), l.push(n), s === t.length && r && r(u, l)
                                    }))
                                }))
                            }
                        }
                    }, {
                        key: "reload",
                        value: function() {
                            var t = this,
                                e = this.services,
                                n = e.backendConnector,
                                o = e.languageUtils,
                                r = e.logger,
                                i = n.language;
                            if (!i || "cimode" !== i.toLowerCase()) {
                                var a = [],
                                    s = function(t) {
                                        var e = o.toResolveHierarchy(t);
                                        e.forEach((function(t) {
                                            a.indexOf(t) < 0 && a.push(t)
                                        }))
                                    };
                                s(i), this.allOptions.preload && this.allOptions.preload.forEach((function(t) {
                                    return s(t)
                                })), a.forEach((function(e) {
                                    t.allOptions.ns.forEach((function(t) {
                                        n.read(e, t, "read", null, null, (function(o, i) {
                                            o && r.warn("loading namespace ".concat(t, " for language ").concat(e, " failed"), o), !o && i && r.log("loaded namespace ".concat(t, " for language ").concat(e), i), n.loaded("".concat(e, "|").concat(t), o, i)
                                        }))
                                    }))
                                }))
                            }
                        }
                    }]), t
                }();
            St.type = "backend";
            var Ot = St,
                Lt = n(25178),
                Et = n.n(Lt),
                Pt = n(27693),
                jt = n.n(Pt),
                Rt = n(87815),
                Nt = n.n(Rt),
                Tt = n(93655),
                Ct = function(t) {
                    function e() {
                        var e = t.call(this) || this;
                        e.fNumber = function(t) {
                            return isNaN(parseFloat(t)) ? "" : e.numberFormatter.format(t)
                        }, e.fCurrency = function(t) {
                            return isNaN(parseFloat(t)) ? "" : e.currencyFormatter.format(t)
                        };
                        var n = "en-IN";
                        return e.numberFormatter = new Intl.NumberFormat(n), e.currencyFormatter = new Intl.NumberFormat(n, {
                            style: "currency",
                            currency: "INR"
                        }), e
                    }
                    return (0, o.ZT)(e, t), e.prototype.compare = function(t, e) {}, e.prototype.fName = function(t, e, n) {}, e.prototype.fDate = function(t) {
                        return t ? jt()(t).format("DD/MM/YY") : " - "
                    }, e.prototype.fDateLong = function(t) {
                        return t ? jt()(t).format("DD MMM YYYY") : " - "
                    }, e.prototype.fTime = function(t) {
                        return t ? jt()(t).format("HH:mm") : " - "
                    }, e.prototype.fDateTime = function(t) {
                        return t ? jt()(t).format("DD/MM/YY HH:mm") : " - "
                    }, e.prototype.fDateTimeLong = function(t) {
                        return t ? jt()(t).format("DD MMM YYYY HH:mm:ss") : " - "
                    }, e.prototype.fDateShort = function(t) {
                        return t ? jt()(t).format("DD MMM YYYY") : " - "
                    }, e.prototype.fRelativeTime = function(t) {
                        return t ? (jt().extend(Nt()), jt()(t).fromNow()) : " - "
                    }, e.prototype.getForNamespace = function(t) {
                        return new At(t)
                    }, e
                }(function() {
                    function t() {
                        this.i18n = G, this.l = this.l.bind(this), this.lang = this.lang.bind(this)
                    }
                    return t.prototype.initialize = function(t) {
                        return void 0 === t && (t = {}), (0, o.mG)(this, void 0, void 0, (function() {
                            var e;
                            return (0, o.Jh)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        this.i18n.use(Ot).use(Et()), n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, this.i18n.init({
                                            ns: ["default"],
                                            lng: Tt.k["SESSION.LANG"],
                                            supportedLngs: Tt.k["APP.LANGS"],
                                            fallbackLng: Tt.k["SESSION.LANG"],
                                            defaultNS: "default",
                                            backend: {
                                                loadPath: t.loadPath || "/locales/{{ns}}/{{lng}}.json"
                                            }
                                        })];
                                    case 2:
                                        return n.sent(), [3, 4];
                                    case 3:
                                        return e = n.sent(), console.log(e), [2, !1];
                                    case 4:
                                        return [2, !0]
                                }
                            }))
                        }))
                    }, t.prototype.getI18N = function() {
                        return this.i18n
                    }, t.prototype.setLanguage = function(t) {
                        Tt.k.update({
                            "SESSION.LANG": t
                        })
                    }, t.prototype.isLanguage = function(t) {}, t.prototype.loadLanguage = function() {
                        return (0, o.mG)(this, void 0, void 0, (function() {
                            return (0, o.Jh)(this, (function(t) {
                                return [2]
                            }))
                        }))
                    }, t.prototype.loadNamespaces = function(t) {
                        return (0, o.mG)(this, void 0, void 0, (function() {
                            return (0, o.Jh)(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, this.i18n.loadNamespaces(t)];
                                    case 1:
                                        return [2, e.sent()]
                                }
                            }))
                        }))
                    }, t.prototype.lang = function(t, e, n) {
                        return this.i18n.t("".concat(t, ":").concat(e), n)
                    }, t.prototype.l = function(t, e, n) {
                        return void 0 === e ? this.i18n.t(t, n) : this.i18n.t("".concat(t, ":").concat(e), n)
                    }, t.prototype.getMethodFor = function(t, e) {
                        return G.getFixedT(t, e)
                    }, t.prototype.exists = function() {}, t.prototype.extend = function() {}, t.prototype.unset = function() {}, t
                }()),
                At = function() {
                    function t(t) {
                        this.nsT = G.getFixedT(null, t)
                    }
                    return t.prototype.lang = function(t, e) {
                        return this.nsT(t, e)
                    }, t.prototype.l = function(t, e) {
                        return this.nsT(t, e)
                    }, t
                }(),
                Ft = new Ct
        },
        89372: function(t, e) {
            var n = "undefined" !== typeof self ? self : this,
                o = function() {
                    function t() {
                        this.fetch = !1, this.DOMException = n.DOMException
                    }
                    return t.prototype = n, new t
                }();
            (function(t) {
                (function(e) {
                    var n = {
                        searchParams: "URLSearchParams" in t,
                        iterable: "Symbol" in t && "iterator" in Symbol,
                        blob: "FileReader" in t && "Blob" in t && function() {
                            try {
                                return new Blob, !0
                            } catch (t) {
                                return !1
                            }
                        }(),
                        formData: "FormData" in t,
                        arrayBuffer: "ArrayBuffer" in t
                    };

                    function o(t) {
                        return t && DataView.prototype.isPrototypeOf(t)
                    }
                    if (n.arrayBuffer) var r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                        i = ArrayBuffer.isView || function(t) {
                            return t && r.indexOf(Object.prototype.toString.call(t)) > -1
                        };

                    function a(t) {
                        if ("string" !== typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
                        return t.toLowerCase()
                    }

                    function s(t) {
                        return "string" !== typeof t && (t = String(t)), t
                    }

                    function u(t) {
                        var e = {
                            next: function() {
                                var e = t.shift();
                                return {
                                    done: void 0 === e,
                                    value: e
                                }
                            }
                        };
                        return n.iterable && (e[Symbol.iterator] = function() {
                            return e
                        }), e
                    }

                    function l(t) {
                        this.map = {}, t instanceof l ? t.forEach((function(t, e) {
                            this.append(e, t)
                        }), this) : Array.isArray(t) ? t.forEach((function(t) {
                            this.append(t[0], t[1])
                        }), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
                            this.append(e, t[e])
                        }), this)
                    }

                    function c(t) {
                        if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
                        t.bodyUsed = !0
                    }

                    function f(t) {
                        return new Promise((function(e, n) {
                            t.onload = function() {
                                e(t.result)
                            }, t.onerror = function() {
                                n(t.error)
                            }
                        }))
                    }

                    function p(t) {
                        var e = new FileReader,
                            n = f(e);
                        return e.readAsArrayBuffer(t), n
                    }

                    function h(t) {
                        var e = new FileReader,
                            n = f(e);
                        return e.readAsText(t), n
                    }

                    function d(t) {
                        for (var e = new Uint8Array(t), n = new Array(e.length), o = 0; o < e.length; o++) n[o] = String.fromCharCode(e[o]);
                        return n.join("")
                    }

                    function g(t) {
                        if (t.slice) return t.slice(0);
                        var e = new Uint8Array(t.byteLength);
                        return e.set(new Uint8Array(t)), e.buffer
                    }

                    function y() {
                        return this.bodyUsed = !1, this._initBody = function(t) {
                            this._bodyInit = t, t ? "string" === typeof t ? this._bodyText = t : n.blob && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : n.formData && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : n.searchParams && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : n.arrayBuffer && n.blob && o(t) ? (this._bodyArrayBuffer = g(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : n.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(t) || i(t)) ? this._bodyArrayBuffer = g(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" === typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : n.searchParams && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                        }, n.blob && (this.blob = function() {
                            var t = c(this);
                            if (t) return t;
                            if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                            if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                            return Promise.resolve(new Blob([this._bodyText]))
                        }, this.arrayBuffer = function() {
                            return this._bodyArrayBuffer ? c(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(p)
                        }), this.text = function() {
                            var t = c(this);
                            if (t) return t;
                            if (this._bodyBlob) return h(this._bodyBlob);
                            if (this._bodyArrayBuffer) return Promise.resolve(d(this._bodyArrayBuffer));
                            if (this._bodyFormData) throw new Error("could not read FormData body as text");
                            return Promise.resolve(this._bodyText)
                        }, n.formData && (this.formData = function() {
                            return this.text().then(w)
                        }), this.json = function() {
                            return this.text().then(JSON.parse)
                        }, this
                    }
                    l.prototype.append = function(t, e) {
                        t = a(t), e = s(e);
                        var n = this.map[t];
                        this.map[t] = n ? n + ", " + e : e
                    }, l.prototype["delete"] = function(t) {
                        delete this.map[a(t)]
                    }, l.prototype.get = function(t) {
                        return t = a(t), this.has(t) ? this.map[t] : null
                    }, l.prototype.has = function(t) {
                        return this.map.hasOwnProperty(a(t))
                    }, l.prototype.set = function(t, e) {
                        this.map[a(t)] = s(e)
                    }, l.prototype.forEach = function(t, e) {
                        for (var n in this.map) this.map.hasOwnProperty(n) && t.call(e, this.map[n], n, this)
                    }, l.prototype.keys = function() {
                        var t = [];
                        return this.forEach((function(e, n) {
                            t.push(n)
                        })), u(t)
                    }, l.prototype.values = function() {
                        var t = [];
                        return this.forEach((function(e) {
                            t.push(e)
                        })), u(t)
                    }, l.prototype.entries = function() {
                        var t = [];
                        return this.forEach((function(e, n) {
                            t.push([n, e])
                        })), u(t)
                    }, n.iterable && (l.prototype[Symbol.iterator] = l.prototype.entries);
                    var v = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                    function m(t) {
                        var e = t.toUpperCase();
                        return v.indexOf(e) > -1 ? e : t
                    }

                    function b(t, e) {
                        e = e || {};
                        var n = e.body;
                        if (t instanceof b) {
                            if (t.bodyUsed) throw new TypeError("Already read");
                            this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new l(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, n || null == t._bodyInit || (n = t._bodyInit, t.bodyUsed = !0)
                        } else this.url = String(t);
                        if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new l(e.headers)), this.method = m(e.method || this.method || "GET"), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
                        this._initBody(n)
                    }

                    function w(t) {
                        var e = new FormData;
                        return t.trim().split("&").forEach((function(t) {
                            if (t) {
                                var n = t.split("="),
                                    o = n.shift().replace(/\+/g, " "),
                                    r = n.join("=").replace(/\+/g, " ");
                                e.append(decodeURIComponent(o), decodeURIComponent(r))
                            }
                        })), e
                    }

                    function k(t) {
                        var e = new l,
                            n = t.replace(/\r?\n[\t ]+/g, " ");
                        return n.split(/\r?\n/).forEach((function(t) {
                            var n = t.split(":"),
                                o = n.shift().trim();
                            if (o) {
                                var r = n.join(":").trim();
                                e.append(o, r)
                            }
                        })), e
                    }

                    function x(t, e) {
                        e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new l(e.headers), this.url = e.url || "", this._initBody(t)
                    }
                    b.prototype.clone = function() {
                        return new b(this, {
                            body: this._bodyInit
                        })
                    }, y.call(b.prototype), y.call(x.prototype), x.prototype.clone = function() {
                        return new x(this._bodyInit, {
                            status: this.status,
                            statusText: this.statusText,
                            headers: new l(this.headers),
                            url: this.url
                        })
                    }, x.error = function() {
                        var t = new x(null, {
                            status: 0,
                            statusText: ""
                        });
                        return t.type = "error", t
                    };
                    var S = [301, 302, 303, 307, 308];
                    x.redirect = function(t, e) {
                        if (-1 === S.indexOf(e)) throw new RangeError("Invalid status code");
                        return new x(null, {
                            status: e,
                            headers: {
                                location: t
                            }
                        })
                    }, e.DOMException = t.DOMException;
                    try {
                        new e.DOMException
                    } catch (L) {
                        e.DOMException = function(t, e) {
                            this.message = t, this.name = e;
                            var n = Error(t);
                            this.stack = n.stack
                        }, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException
                    }

                    function O(t, o) {
                        return new Promise((function(r, i) {
                            var a = new b(t, o);
                            if (a.signal && a.signal.aborted) return i(new e.DOMException("Aborted", "AbortError"));
                            var s = new XMLHttpRequest;

                            function u() {
                                s.abort()
                            }
                            s.onload = function() {
                                var t = {
                                    status: s.status,
                                    statusText: s.statusText,
                                    headers: k(s.getAllResponseHeaders() || "")
                                };
                                t.url = "responseURL" in s ? s.responseURL : t.headers.get("X-Request-URL");
                                var e = "response" in s ? s.response : s.responseText;
                                r(new x(e, t))
                            }, s.onerror = function() {
                                i(new TypeError("Network request failed"))
                            }, s.ontimeout = function() {
                                i(new TypeError("Network request failed"))
                            }, s.onabort = function() {
                                i(new e.DOMException("Aborted", "AbortError"))
                            }, s.open(a.method, a.url, !0), "include" === a.credentials ? s.withCredentials = !0 : "omit" === a.credentials && (s.withCredentials = !1), "responseType" in s && n.blob && (s.responseType = "blob"), a.headers.forEach((function(t, e) {
                                s.setRequestHeader(e, t)
                            })), a.signal && (a.signal.addEventListener("abort", u), s.onreadystatechange = function() {
                                4 === s.readyState && a.signal.removeEventListener("abort", u)
                            }), s.send("undefined" === typeof a._bodyInit ? null : a._bodyInit)
                        }))
                    }
                    O.polyfill = !0, t.fetch || (t.fetch = O, t.Headers = l, t.Request = b, t.Response = x), e.Headers = l, e.Request = b, e.Response = x, e.fetch = O, Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                })({})
            })(o), o.fetch.ponyfill = !0, delete o.fetch.polyfill;
            var r = o;
            e = r.fetch, e["default"] = r.fetch, e.fetch = r.fetch, e.Headers = r.Headers, e.Request = r.Request, e.Response = r.Response, t.exports = e
        },
        87815: function(t) {
            ! function(e, n) {
                t.exports = n()
            }(0, (function() {
                "use strict";
                return function(t, e, n) {
                    t = t || {};
                    var o = e.prototype,
                        r = {
                            future: "in %s",
                            past: "%s ago",
                            s: "a few seconds",
                            m: "a minute",
                            mm: "%d minutes",
                            h: "an hour",
                            hh: "%d hours",
                            d: "a day",
                            dd: "%d days",
                            M: "a month",
                            MM: "%d months",
                            y: "a year",
                            yy: "%d years"
                        };

                    function i(t, e, n, r) {
                        return o.fromToBase(t, e, n, r)
                    }
                    n.en.relativeTime = r, o.fromToBase = function(e, o, i, a, s) {
                        for (var u, l, c, f = i.$locale().relativeTime || r, p = t.thresholds || [{
                                l: "s",
                                r: 44,
                                d: "second"
                            }, {
                                l: "m",
                                r: 89
                            }, {
                                l: "mm",
                                r: 44,
                                d: "minute"
                            }, {
                                l: "h",
                                r: 89
                            }, {
                                l: "hh",
                                r: 21,
                                d: "hour"
                            }, {
                                l: "d",
                                r: 35
                            }, {
                                l: "dd",
                                r: 25,
                                d: "day"
                            }, {
                                l: "M",
                                r: 45
                            }, {
                                l: "MM",
                                r: 10,
                                d: "month"
                            }, {
                                l: "y",
                                r: 17
                            }, {
                                l: "yy",
                                d: "year"
                            }], h = p.length, d = 0; d < h; d += 1) {
                            var g = p[d];
                            g.d && (u = a ? n(e).diff(i, g.d, !0) : i.diff(e, g.d, !0));
                            var y = (t.rounding || Math.round)(Math.abs(u));
                            if (c = u > 0, y <= g.r || !g.r) {
                                y <= 1 && d > 0 && (g = p[d - 1]);
                                var v = f[g.l];
                                s && (y = s("" + y)), l = "string" == typeof v ? v.replace("%d", y) : v(y, o, g.l, c);
                                break
                            }
                        }
                        if (o) return l;
                        var m = c ? f.future : f.past;
                        return "function" == typeof m ? m(l) : m.replace("%s", l)
                    }, o.to = function(t, e) {
                        return i(t, e, this, !0)
                    }, o.from = function(t, e) {
                        return i(t, e, this)
                    };
                    var a = function(t) {
                        return t.$u ? n.utc() : n()
                    };
                    o.toNow = function(t) {
                        return this.to(a(this), t)
                    }, o.fromNow = function(t) {
                        return this.from(a(this), t)
                    }
                }
            }))
        },
        6649: function(t, e, n) {
            "use strict";
            var o = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                        }
                    }
                    return function(e, n, o) {
                        return n && t(e.prototype, n), o && t(e, o), e
                    }
                }(),
                r = n(18794),
                i = a(r);

            function a(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e.default = t, e
            }

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            var u = {
                setItem: function(t, e) {
                    if (window.localStorage) try {
                        window.localStorage.setItem(t, e)
                    } catch (n) {}
                },
                getItem: function(t, e) {
                    if (window.localStorage) try {
                        return window.localStorage.getItem(t, e)
                    } catch (n) {}
                }
            };

            function l() {
                return {
                    enabled: !1,
                    prefix: "i18next_res_",
                    expirationTime: 6048e5,
                    versions: {}
                }
            }
            var c = function() {
                function t(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    s(this, t), this.init(e, n), this.type = "cache", this.debouncedStore = i.debounce(this.store, 1e4)
                }
                return o(t, [{
                    key: "init",
                    value: function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.services = t, this.options = i.defaults(e, this.options || {}, l())
                    }
                }, {
                    key: "load",
                    value: function(t, e) {
                        var n = this,
                            o = {},
                            r = (new Date).getTime();
                        if (!window.localStorage || !t.length) return e(null, null);
                        var i = t.length;
                        t.forEach((function(t) {
                            var a = u.getItem(n.options.prefix + t);
                            a && (a = JSON.parse(a), a.i18nStamp && a.i18nStamp + n.options.expirationTime > r && n.options.versions[t] === a.i18nVersion && (delete a.i18nVersion, o[t] = a)), i -= 1, 0 === i && e(null, o)
                        }))
                    }
                }, {
                    key: "store",
                    value: function(t) {
                        var e = t;
                        if (window.localStorage)
                            for (var n in e) e[n].i18nStamp = (new Date).getTime(), this.options.versions[n] && (e[n].i18nVersion = this.options.versions[n]), u.setItem(this.options.prefix + n, JSON.stringify(e[n]))
                    }
                }, {
                    key: "save",
                    value: function(t) {
                        this.debouncedStore(t)
                    }
                }]), t
            }();
            c.type = "cache", e["default"] = c
        },
        18794: function(t, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.defaults = i, e.extend = a, e.debounce = s;
            var n = [],
                o = n.forEach,
                r = n.slice;

            function i(t) {
                return o.call(r.call(arguments, 1), (function(e) {
                    if (e)
                        for (var n in e) void 0 === t[n] && (t[n] = e[n])
                })), t
            }

            function a(t) {
                return o.call(r.call(arguments, 1), (function(e) {
                    if (e)
                        for (var n in e) t[n] = e[n]
                })), t
            }

            function s(t, e, n) {
                var o;
                return function() {
                    var r = this,
                        i = arguments,
                        a = function() {
                            o = null, n || t.apply(r, i)
                        },
                        s = n && !o;
                    clearTimeout(o), o = setTimeout(a, e), s && t.apply(r, i)
                }
            }
        },
        25178: function(t, e, n) {
            t.exports = n(6649)["default"]
        },
        40036: function(t, e, n) {
            var o;
            if ("function" === typeof fetch && (o = "undefined" !== typeof n.g && n.g.fetch ? n.g.fetch : "undefined" !== typeof window && window.fetch ? window.fetch : fetch), "undefined" === typeof window || "undefined" === typeof window.document) {
                var r = o || n(89372);
                r.default && (r = r.default), e["default"] = r, t.exports = e.default
            }
        }
    }
]);