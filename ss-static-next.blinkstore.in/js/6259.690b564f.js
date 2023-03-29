"use strict";
(self["webpackChunkblinkui"] = self["webpackChunkblinkui"] || []).push([
    [6259], {
        667: function(t, e, i) {
            i.d(e, {
                Z: function() {
                    return d
                }
            });
            var n = i(33983),
                s = i(57697),
                r = i(46504),
                o = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "tw-flex tw-justify-center tw-items-center"
                    }, [e(n.Z, t._g({
                        staticClass: "tw-w-full",
                        attrs: {
                            src: t.src,
                            alt: t.alt,
                            "aspect-ratio": t.aspectRatio,
                            "max-width": "100%",
                            "content-class": "tw-w-full imp"
                        },
                        scopedSlots: t._u([{
                            key: "placeholder",
                            fn: function() {
                                return [e(r.Z, {
                                    staticClass: "row fill-height ma-0 align-center justify-center tw-h-full",
                                    attrs: {
                                        align: "center",
                                        justify: "center"
                                    }
                                }, [e(s.Z, {
                                    attrs: {
                                        indeterminate: "",
                                        color: t.progressColor
                                    }
                                })], 1)]
                            },
                            proxy: !0
                        }])
                    }, t.$listeners))], 1)
                },
                h = [],
                a = {
                    name: "BlinkImage",
                    props: {
                        click: {},
                        src: {
                            type: String
                        },
                        alt: {},
                        width: {},
                        height: {},
                        aspectRatio: {
                            type: Number,
                            default: .8
                        },
                        progressColor: {
                            type: String,
                            default: "#9e9e9e"
                        }
                    },
                    data() {
                        return {
                            loaded: !1,
                            error: !1
                        }
                    },
                    computed: {
                        style({
                            width: t,
                            height: e
                        }) {
                            return {
                                width: t,
                                height: e,
                                objectFit: "contain"
                            }
                        }
                    },
                    mounted() {},
                    methods: {
                        onLoaded() {
                            this.loaded = !0
                        },
                        onError() {
                            this.error = !0
                        }
                    }
                },
                u = a,
                l = i(79917),
                c = (0, l.Z)(u, o, h, !1, null, null, null),
                d = c.exports
        },
        36259: function(t, e, i) {
            i.r(e), i.d(e, {
                default: function() {
                    return Bs
                }
            });
            var n = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        directives: [{
                            name: "observe-visibility",
                            rawName: "v-observe-visibility",
                            value: t.visibilityChanged,
                            expression: "visibilityChanged"
                        }],
                        staticClass: "tw-relative"
                    }, [t.show ? e("div", [t.customMockups.length && !t.forceMocky ? e("div", [e("BlinkImage", {
                        attrs: {
                            src: t.getImg(t.customMockups[0]),
                            alt: t.data.name
                        }
                    })], 1) : e("Mock", {
                        attrs: {
                            data: {
                                design: t.design,
                                color: t.color,
                                id: `mock-${t.data._id||t.data.id}`
                            },
                            mockup: t.mockup
                        }
                    }), t.data && t.extraFeat.show ? e("div", {
                        staticClass: "tw-absolute tw-text-sm extra-feat",
                        class: t.extraFeat.small ? "tw-w-full tw-flex tw-justify-center small tw-flex-wrap" : "right"
                    }, t._l(t.getExtraFeature(t.data.of.bku), (function(i) {
                        return e("div", {
                            key: i,
                            staticClass: "tw-bg-white tw-px-2 tw-rounded tw-text-gray-87 tw-mt-1"
                        }, [t._v(" " + t._s(i) + " ")])
                    })), 0) : t._e()], 1) : t._e()])
                },
                s = [],
                r = i(29172),
                o = i(87416),
                h = function() {
                    var t = this,
                        e = t._self._c;
                    return t.data ? e("div", {
                        staticClass: "tw-w-full"
                    }, [e("div", {
                        attrs: {
                            id: t.id
                        }
                    })]) : t._e()
                },
                a = [];
            const u = {},
                l = [];

            function c(t, e) {
                if (Array.isArray(t))
                    for (const i of t) c(i, e);
                else if ("object" !== typeof t) m(Object.getOwnPropertyNames(e)), u[t] = Object.assign(u[t] || {}, e);
                else
                    for (const i in t) c(i, t[i])
            }

            function d(t) {
                return u[t] || {}
            }

            function f() {
                return [...new Set(l)]
            }

            function m(t) {
                l.push(...t)
            }

            function p(t, e) {
                let i;
                const n = t.length,
                    s = [];
                for (i = 0; i < n; i++) s.push(e(t[i]));
                return s
            }

            function g(t, e) {
                let i;
                const n = t.length,
                    s = [];
                for (i = 0; i < n; i++) e(t[i]) && s.push(t[i]);
                return s
            }

            function y(t) {
                return t % 360 * Math.PI / 180
            }

            function w(t) {
                return t.toLowerCase().replace(/-(.)/g, (function(t, e) {
                    return e.toUpperCase()
                }))
            }

            function x(t) {
                return t.replace(/([A-Z])/g, (function(t, e) {
                    return "-" + e.toLowerCase()
                }))
            }

            function _(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }

            function b(t, e, i, n) {
                return null != e && null != i || (n = n || t.bbox(), null == e ? e = n.width / n.height * i : null == i && (i = n.height / n.width * e)), {
                    width: e,
                    height: i
                }
            }

            function v(t, e) {
                const i = t.origin;
                let n = null != t.ox ? t.ox : null != t.originX ? t.originX : "center",
                    s = null != t.oy ? t.oy : null != t.originY ? t.originY : "center";
                null != i && ([n, s] = Array.isArray(i) ? i : "object" === typeof i ? [i.x, i.y] : [i, i]);
                const r = "string" === typeof n,
                    o = "string" === typeof s;
                if (r || o) {
                    const {
                        height: t,
                        width: i,
                        x: h,
                        y: a
                    } = e.bbox();
                    r && (n = n.includes("left") ? h : n.includes("right") ? h + i : h + i / 2), o && (s = s.includes("top") ? a : s.includes("bottom") ? a + t : a + t / 2)
                }
                return [n, s]
            }
            const k = "http://www.w3.org/2000/svg",
                z = "http://www.w3.org/1999/xhtml",
                M = "http://www.w3.org/2000/xmlns/",
                S = "http://www.w3.org/1999/xlink",
                C = "http://svgjs.dev/svgjs";
            const O = {
                window: "undefined" === typeof window ? null : window,
                document: "undefined" === typeof document ? null : document
            };
            class A {}
            const T = {},
                j = "___SYMBOL___ROOT___";

            function N(t, e = k) {
                return O.document.createElementNS(e, t)
            }

            function E(t, e = !1) {
                if (t instanceof A) return t;
                if ("object" === typeof t) return D(t);
                if (null == t) return new T[j];
                if ("string" === typeof t && "<" !== t.charAt(0)) return D(O.document.querySelector(t));
                const i = e ? O.document.createElement("div") : N("svg");
                return i.innerHTML = t, t = D(i.firstChild), i.removeChild(i.firstChild), t
            }

            function I(t, e) {
                return e && e.ownerDocument && e instanceof e.ownerDocument.defaultView.Node ? e : N(t)
            }

            function R(t) {
                if (!t) return null;
                if (t.instance instanceof A) return t.instance;
                if ("#document-fragment" === t.nodeName) return new T.Fragment(t);
                let e = _(t.nodeName || "Dom");
                return "LinearGradient" === e || "RadialGradient" === e ? e = "Gradient" : T[e] || (e = "Dom"), new T[e](t)
            }
            let D = R;

            function F(t, e = t.name, i = !1) {
                return T[e] = t, i && (T[j] = t), m(Object.getOwnPropertyNames(t.prototype)), t
            }

            function L(t) {
                return T[t]
            }
            let P = 1e3;

            function $(t) {
                return "Svgjs" + _(t) + P++
            }

            function q(t) {
                for (let e = t.children.length - 1; e >= 0; e--) q(t.children[e]);
                return t.id ? (t.id = $(t.nodeName), t) : t
            }

            function B(t, e) {
                let i, n;
                for (t = Array.isArray(t) ? t : [t], n = t.length - 1; n >= 0; n--)
                    for (i in e) t[n].prototype[i] = e[i]
            }

            function X(t) {
                return function(...e) {
                    const i = e[e.length - 1];
                    return !i || i.constructor !== Object || i instanceof Array ? t.apply(this, e) : t.apply(this, e.slice(0, -1)).attr(i)
                }
            }

            function Y() {
                return this.parent().children()
            }

            function H() {
                return this.parent().index(this)
            }

            function Z() {
                return this.siblings()[this.position() + 1]
            }

            function G() {
                return this.siblings()[this.position() - 1]
            }

            function V() {
                const t = this.position(),
                    e = this.parent();
                return e.add(this.remove(), t + 1), this
            }

            function W() {
                const t = this.position(),
                    e = this.parent();
                return e.add(this.remove(), t ? t - 1 : 0), this
            }

            function U() {
                const t = this.parent();
                return t.add(this.remove()), this
            }

            function Q() {
                const t = this.parent();
                return t.add(this.remove(), 0), this
            }

            function J(t) {
                t = E(t), t.remove();
                const e = this.position();
                return this.parent().add(t, e), this
            }

            function K(t) {
                t = E(t), t.remove();
                const e = this.position();
                return this.parent().add(t, e + 1), this
            }

            function tt(t) {
                return t = E(t), t.before(this), this
            }

            function et(t) {
                return t = E(t), t.after(this), this
            }
            c("Dom", {
                siblings: Y,
                position: H,
                next: Z,
                prev: G,
                forward: V,
                backward: W,
                front: U,
                back: Q,
                before: J,
                after: K,
                insertBefore: tt,
                insertAfter: et
            });
            const it = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,
                nt = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,
                st = /rgb\((\d+),(\d+),(\d+)\)/,
                rt = /(#[a-z_][a-z0-9\-_]*)/i,
                ot = /\)\s*,?\s*/,
                ht = /\s/g,
                at = /^#[a-f0-9]{3}$|^#[a-f0-9]{6}$/i,
                ut = /^rgb\(/,
                lt = /^(\s+)?$/,
                ct = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
                dt = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,
                ft = /[\s,]+/,
                mt = /[MLHVCSQTAZ]/i;

            function pt() {
                const t = this.attr("class");
                return null == t ? [] : t.trim().split(ft)
            }

            function gt(t) {
                return -1 !== this.classes().indexOf(t)
            }

            function yt(t) {
                if (!this.hasClass(t)) {
                    const e = this.classes();
                    e.push(t), this.attr("class", e.join(" "))
                }
                return this
            }

            function wt(t) {
                return this.hasClass(t) && this.attr("class", this.classes().filter((function(e) {
                    return e !== t
                })).join(" ")), this
            }

            function xt(t) {
                return this.hasClass(t) ? this.removeClass(t) : this.addClass(t)
            }

            function _t(t, e) {
                const i = {};
                if (0 === arguments.length) return this.node.style.cssText.split(/\s*;\s*/).filter((function(t) {
                    return !!t.length
                })).forEach((function(t) {
                    const e = t.split(/\s*:\s*/);
                    i[e[0]] = e[1]
                })), i;
                if (arguments.length < 2) {
                    if (Array.isArray(t)) {
                        for (const e of t) {
                            const t = w(e);
                            i[e] = this.node.style[t]
                        }
                        return i
                    }
                    if ("string" === typeof t) return this.node.style[w(t)];
                    if ("object" === typeof t)
                        for (const e in t) this.node.style[w(e)] = null == t[e] || lt.test(t[e]) ? "" : t[e]
                }
                return 2 === arguments.length && (this.node.style[w(t)] = null == e || lt.test(e) ? "" : e), this
            }

            function bt() {
                return this.css("display", "")
            }

            function vt() {
                return this.css("display", "none")
            }

            function kt() {
                return "none" !== this.css("display")
            }

            function zt(t, e, i) {
                if (null == t) return this.data(p(g(this.node.attributes, (t => 0 === t.nodeName.indexOf("data-"))), (t => t.nodeName.slice(5))));
                if (t instanceof Array) {
                    const e = {};
                    for (const i of t) e[i] = this.data(i);
                    return e
                }
                if ("object" === typeof t)
                    for (e in t) this.data(e, t[e]);
                else if (arguments.length < 2) try {
                    return JSON.parse(this.attr("data-" + t))
                } catch (n) {
                    return this.attr("data-" + t)
                } else this.attr("data-" + t, null === e ? null : !0 === i || "string" === typeof e || "number" === typeof e ? e : JSON.stringify(e));
                return this
            }

            function Mt(t, e) {
                if ("object" === typeof arguments[0])
                    for (const i in t) this.remember(i, t[i]);
                else {
                    if (1 === arguments.length) return this.memory()[t];
                    this.memory()[t] = e
                }
                return this
            }

            function St() {
                if (0 === arguments.length) this._memory = {};
                else
                    for (let t = arguments.length - 1; t >= 0; t--) delete this.memory()[arguments[t]];
                return this
            }

            function Ct() {
                return this._memory = this._memory || {}
            }

            function Ot(t) {
                return 4 === t.length ? ["#", t.substring(1, 2), t.substring(1, 2), t.substring(2, 3), t.substring(2, 3), t.substring(3, 4), t.substring(3, 4)].join("") : t
            }

            function At(t) {
                const e = Math.round(t),
                    i = Math.max(0, Math.min(255, e)),
                    n = i.toString(16);
                return 1 === n.length ? "0" + n : n
            }

            function Tt(t, e) {
                for (let i = e.length; i--;)
                    if (null == t[e[i]]) return !1;
                return !0
            }

            function jt(t, e) {
                const i = Tt(t, "rgb") ? {
                    _a: t.r,
                    _b: t.g,
                    _c: t.b,
                    _d: 0,
                    space: "rgb"
                } : Tt(t, "xyz") ? {
                    _a: t.x,
                    _b: t.y,
                    _c: t.z,
                    _d: 0,
                    space: "xyz"
                } : Tt(t, "hsl") ? {
                    _a: t.h,
                    _b: t.s,
                    _c: t.l,
                    _d: 0,
                    space: "hsl"
                } : Tt(t, "lab") ? {
                    _a: t.l,
                    _b: t.a,
                    _c: t.b,
                    _d: 0,
                    space: "lab"
                } : Tt(t, "lch") ? {
                    _a: t.l,
                    _b: t.c,
                    _c: t.h,
                    _d: 0,
                    space: "lch"
                } : Tt(t, "cmyk") ? {
                    _a: t.c,
                    _b: t.m,
                    _c: t.y,
                    _d: t.k,
                    space: "cmyk"
                } : {
                    _a: 0,
                    _b: 0,
                    _c: 0,
                    space: "rgb"
                };
                return i.space = e || i.space, i
            }

            function Nt(t) {
                return "lab" === t || "xyz" === t || "lch" === t
            }

            function Et(t, e, i) {
                return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
            }
            c("Dom", {
                classes: pt,
                hasClass: gt,
                addClass: yt,
                removeClass: wt,
                toggleClass: xt
            }), c("Dom", {
                css: _t,
                show: bt,
                hide: vt,
                visible: kt
            }), c("Dom", {
                data: zt
            }), c("Dom", {
                remember: Mt,
                forget: St,
                memory: Ct
            });
            class It {
                constructor(...t) {
                    this.init(...t)
                }
                static isColor(t) {
                    return t && (t instanceof It || this.isRgb(t) || this.test(t))
                }
                static isRgb(t) {
                    return t && "number" === typeof t.r && "number" === typeof t.g && "number" === typeof t.b
                }
                static random(t = "vibrant", e, i) {
                    const {
                        random: n,
                        round: s,
                        sin: r,
                        PI: o
                    } = Math;
                    if ("vibrant" === t) {
                        const t = 24 * n() + 57,
                            e = 38 * n() + 45,
                            i = 360 * n(),
                            s = new It(t, e, i, "lch");
                        return s
                    }
                    if ("sine" === t) {
                        e = null == e ? n() : e;
                        const t = s(80 * r(2 * o * e / .5 + .01) + 150),
                            i = s(50 * r(2 * o * e / .5 + 4.6) + 200),
                            h = s(100 * r(2 * o * e / .5 + 2.3) + 150),
                            a = new It(t, i, h);
                        return a
                    }
                    if ("pastel" === t) {
                        const t = 8 * n() + 86,
                            e = 17 * n() + 9,
                            i = 360 * n(),
                            s = new It(t, e, i, "lch");
                        return s
                    }
                    if ("dark" === t) {
                        const t = 10 + 10 * n(),
                            e = 50 * n() + 86,
                            i = 360 * n(),
                            s = new It(t, e, i, "lch");
                        return s
                    }
                    if ("rgb" === t) {
                        const t = 255 * n(),
                            e = 255 * n(),
                            i = 255 * n(),
                            s = new It(t, e, i);
                        return s
                    }
                    if ("lab" === t) {
                        const t = 100 * n(),
                            e = 256 * n() - 128,
                            i = 256 * n() - 128,
                            s = new It(t, e, i, "lab");
                        return s
                    }
                    if ("grey" === t) {
                        const t = 255 * n(),
                            e = new It(t, t, t);
                        return e
                    }
                    throw new Error("Unsupported random color mode")
                }
                static test(t) {
                    return "string" === typeof t && (at.test(t) || ut.test(t))
                }
                cmyk() {
                    const {
                        _a: t,
                        _b: e,
                        _c: i
                    } = this.rgb(), [n, s, r] = [t, e, i].map((t => t / 255)), o = Math.min(1 - n, 1 - s, 1 - r);
                    if (1 === o) return new It(0, 0, 0, 1, "cmyk");
                    const h = (1 - n - o) / (1 - o),
                        a = (1 - s - o) / (1 - o),
                        u = (1 - r - o) / (1 - o),
                        l = new It(h, a, u, o, "cmyk");
                    return l
                }
                hsl() {
                    const {
                        _a: t,
                        _b: e,
                        _c: i
                    } = this.rgb(), [n, s, r] = [t, e, i].map((t => t / 255)), o = Math.max(n, s, r), h = Math.min(n, s, r), a = (o + h) / 2, u = o === h, l = o - h, c = u ? 0 : a > .5 ? l / (2 - o - h) : l / (o + h), d = u ? 0 : o === n ? ((s - r) / l + (s < r ? 6 : 0)) / 6 : o === s ? ((r - n) / l + 2) / 6 : o === r ? ((n - s) / l + 4) / 6 : 0, f = new It(360 * d, 100 * c, 100 * a, "hsl");
                    return f
                }
                init(t = 0, e = 0, i = 0, n = 0, s = "rgb") {
                    if (t = t || 0, this.space)
                        for (const l in this.space) delete this[this.space[l]];
                    if ("number" === typeof t) s = "string" === typeof n ? n : s, n = "string" === typeof n ? 0 : n, Object.assign(this, {
                        _a: t,
                        _b: e,
                        _c: i,
                        _d: n,
                        space: s
                    });
                    else if (t instanceof Array) this.space = e || ("string" === typeof t[3] ? t[3] : t[4]) || "rgb", Object.assign(this, {
                        _a: t[0],
                        _b: t[1],
                        _c: t[2],
                        _d: t[3] || 0
                    });
                    else if (t instanceof Object) {
                        const i = jt(t, e);
                        Object.assign(this, i)
                    } else if ("string" === typeof t)
                        if (ut.test(t)) {
                            const e = t.replace(ht, ""),
                                [i, n, s] = st.exec(e).slice(1, 4).map((t => parseInt(t)));
                            Object.assign(this, {
                                _a: i,
                                _b: n,
                                _c: s,
                                _d: 0,
                                space: "rgb"
                            })
                        } else {
                            if (!at.test(t)) throw Error("Unsupported string format, can't construct Color"); {
                                const e = t => parseInt(t, 16),
                                    [, i, n, s] = nt.exec(Ot(t)).map(e);
                                Object.assign(this, {
                                    _a: i,
                                    _b: n,
                                    _c: s,
                                    _d: 0,
                                    space: "rgb"
                                })
                            }
                        }
                    const {
                        _a: r,
                        _b: o,
                        _c: h,
                        _d: a
                    } = this, u = "rgb" === this.space ? {
                        r: r,
                        g: o,
                        b: h
                    } : "xyz" === this.space ? {
                        x: r,
                        y: o,
                        z: h
                    } : "hsl" === this.space ? {
                        h: r,
                        s: o,
                        l: h
                    } : "lab" === this.space ? {
                        l: r,
                        a: o,
                        b: h
                    } : "lch" === this.space ? {
                        l: r,
                        c: o,
                        h: h
                    } : "cmyk" === this.space ? {
                        c: r,
                        m: o,
                        y: h,
                        k: a
                    } : {};
                    Object.assign(this, u)
                }
                lab() {
                    const {
                        x: t,
                        y: e,
                        z: i
                    } = this.xyz(), n = 116 * e - 16, s = 500 * (t - e), r = 200 * (e - i), o = new It(n, s, r, "lab");
                    return o
                }
                lch() {
                    const {
                        l: t,
                        a: e,
                        b: i
                    } = this.lab(), n = Math.sqrt(e ** 2 + i ** 2);
                    let s = 180 * Math.atan2(i, e) / Math.PI;
                    s < 0 && (s *= -1, s = 360 - s);
                    const r = new It(t, n, s, "lch");
                    return r
                }
                rgb() {
                    if ("rgb" === this.space) return this;
                    if (Nt(this.space)) {
                        let {
                            x: t,
                            y: e,
                            z: i
                        } = this;
                        if ("lab" === this.space || "lch" === this.space) {
                            let {
                                l: n,
                                a: s,
                                b: r
                            } = this;
                            if ("lch" === this.space) {
                                const {
                                    c: t,
                                    h: e
                                } = this, i = Math.PI / 180;
                                s = t * Math.cos(i * e), r = t * Math.sin(i * e)
                            }
                            const o = (n + 16) / 116,
                                h = s / 500 + o,
                                a = o - r / 200,
                                u = 16 / 116,
                                l = .008856,
                                c = 7.787;
                            t = .95047 * (h ** 3 > l ? h ** 3 : (h - u) / c), e = 1 * (o ** 3 > l ? o ** 3 : (o - u) / c), i = 1.08883 * (a ** 3 > l ? a ** 3 : (a - u) / c)
                        }
                        const n = 3.2406 * t + -1.5372 * e + -.4986 * i,
                            s = -.9689 * t + 1.8758 * e + .0415 * i,
                            r = .0557 * t + -.204 * e + 1.057 * i,
                            o = Math.pow,
                            h = .0031308,
                            a = n > h ? 1.055 * o(n, 1 / 2.4) - .055 : 12.92 * n,
                            u = s > h ? 1.055 * o(s, 1 / 2.4) - .055 : 12.92 * s,
                            l = r > h ? 1.055 * o(r, 1 / 2.4) - .055 : 12.92 * r,
                            c = new It(255 * a, 255 * u, 255 * l);
                        return c
                    }
                    if ("hsl" === this.space) {
                        let {
                            h: t,
                            s: e,
                            l: i
                        } = this;
                        if (t /= 360, e /= 100, i /= 100, 0 === e) {
                            i *= 255;
                            const t = new It(i, i, i);
                            return t
                        }
                        const n = i < .5 ? i * (1 + e) : i + e - i * e,
                            s = 2 * i - n,
                            r = 255 * Et(s, n, t + 1 / 3),
                            o = 255 * Et(s, n, t),
                            h = 255 * Et(s, n, t - 1 / 3),
                            a = new It(r, o, h);
                        return a
                    }
                    if ("cmyk" === this.space) {
                        const {
                            c: t,
                            m: e,
                            y: i,
                            k: n
                        } = this, s = 255 * (1 - Math.min(1, t * (1 - n) + n)), r = 255 * (1 - Math.min(1, e * (1 - n) + n)), o = 255 * (1 - Math.min(1, i * (1 - n) + n)), h = new It(s, r, o);
                        return h
                    }
                    return this
                }
                toArray() {
                    const {
                        _a: t,
                        _b: e,
                        _c: i,
                        _d: n,
                        space: s
                    } = this;
                    return [t, e, i, n, s]
                }
                toHex() {
                    const [t, e, i] = this._clamped().map(At);
                    return `#${t}${e}${i}`
                }
                toRgb() {
                    const [t, e, i] = this._clamped(), n = `rgb(${t},${e},${i})`;
                    return n
                }
                toString() {
                    return this.toHex()
                }
                xyz() {
                    const {
                        _a: t,
                        _b: e,
                        _c: i
                    } = this.rgb(), [n, s, r] = [t, e, i].map((t => t / 255)), o = n > .04045 ? Math.pow((n + .055) / 1.055, 2.4) : n / 12.92, h = s > .04045 ? Math.pow((s + .055) / 1.055, 2.4) : s / 12.92, a = r > .04045 ? Math.pow((r + .055) / 1.055, 2.4) : r / 12.92, u = (.4124 * o + .3576 * h + .1805 * a) / .95047, l = (.2126 * o + .7152 * h + .0722 * a) / 1, c = (.0193 * o + .1192 * h + .9505 * a) / 1.08883, d = u > .008856 ? Math.pow(u, 1 / 3) : 7.787 * u + 16 / 116, f = l > .008856 ? Math.pow(l, 1 / 3) : 7.787 * l + 16 / 116, m = c > .008856 ? Math.pow(c, 1 / 3) : 7.787 * c + 16 / 116, p = new It(d, f, m, "xyz");
                    return p
                }
                _clamped() {
                    const {
                        _a: t,
                        _b: e,
                        _c: i
                    } = this.rgb(), {
                        max: n,
                        min: s,
                        round: r
                    } = Math, o = t => n(0, s(r(t), 255));
                    return [t, e, i].map(o)
                }
            }
            class Rt {
                constructor(...t) {
                    this.init(...t)
                }
                clone() {
                    return new Rt(this)
                }
                init(t, e) {
                    const i = {
                            x: 0,
                            y: 0
                        },
                        n = Array.isArray(t) ? {
                            x: t[0],
                            y: t[1]
                        } : "object" === typeof t ? {
                            x: t.x,
                            y: t.y
                        } : {
                            x: t,
                            y: e
                        };
                    return this.x = null == n.x ? i.x : n.x, this.y = null == n.y ? i.y : n.y, this
                }
                toArray() {
                    return [this.x, this.y]
                }
                transform(t) {
                    return this.clone().transformO(t)
                }
                transformO(t) {
                    Lt.isMatrixLike(t) || (t = new Lt(t));
                    const {
                        x: e,
                        y: i
                    } = this;
                    return this.x = t.a * e + t.c * i + t.e, this.y = t.b * e + t.d * i + t.f, this
                }
            }

            function Dt(t, e) {
                return new Rt(t, e).transform(this.screenCTM().inverse())
            }

            function Ft(t, e, i) {
                return Math.abs(e - t) < (i || 1e-6)
            }
            class Lt {
                constructor(...t) {
                    this.init(...t)
                }
                static formatTransforms(t) {
                    const e = "both" === t.flip || !0 === t.flip,
                        i = t.flip && (e || "x" === t.flip) ? -1 : 1,
                        n = t.flip && (e || "y" === t.flip) ? -1 : 1,
                        s = t.skew && t.skew.length ? t.skew[0] : isFinite(t.skew) ? t.skew : isFinite(t.skewX) ? t.skewX : 0,
                        r = t.skew && t.skew.length ? t.skew[1] : isFinite(t.skew) ? t.skew : isFinite(t.skewY) ? t.skewY : 0,
                        o = t.scale && t.scale.length ? t.scale[0] * i : isFinite(t.scale) ? t.scale * i : isFinite(t.scaleX) ? t.scaleX * i : i,
                        h = t.scale && t.scale.length ? t.scale[1] * n : isFinite(t.scale) ? t.scale * n : isFinite(t.scaleY) ? t.scaleY * n : n,
                        a = t.shear || 0,
                        u = t.rotate || t.theta || 0,
                        l = new Rt(t.origin || t.around || t.ox || t.originX, t.oy || t.originY),
                        c = l.x,
                        d = l.y,
                        f = new Rt(t.position || t.px || t.positionX || NaN, t.py || t.positionY || NaN),
                        m = f.x,
                        p = f.y,
                        g = new Rt(t.translate || t.tx || t.translateX, t.ty || t.translateY),
                        y = g.x,
                        w = g.y,
                        x = new Rt(t.relative || t.rx || t.relativeX, t.ry || t.relativeY),
                        _ = x.x,
                        b = x.y;
                    return {
                        scaleX: o,
                        scaleY: h,
                        skewX: s,
                        skewY: r,
                        shear: a,
                        theta: u,
                        rx: _,
                        ry: b,
                        tx: y,
                        ty: w,
                        ox: c,
                        oy: d,
                        px: m,
                        py: p
                    }
                }
                static fromArray(t) {
                    return {
                        a: t[0],
                        b: t[1],
                        c: t[2],
                        d: t[3],
                        e: t[4],
                        f: t[5]
                    }
                }
                static isMatrixLike(t) {
                    return null != t.a || null != t.b || null != t.c || null != t.d || null != t.e || null != t.f
                }
                static matrixMultiply(t, e, i) {
                    const n = t.a * e.a + t.c * e.b,
                        s = t.b * e.a + t.d * e.b,
                        r = t.a * e.c + t.c * e.d,
                        o = t.b * e.c + t.d * e.d,
                        h = t.e + t.a * e.e + t.c * e.f,
                        a = t.f + t.b * e.e + t.d * e.f;
                    return i.a = n, i.b = s, i.c = r, i.d = o, i.e = h, i.f = a, i
                }
                around(t, e, i) {
                    return this.clone().aroundO(t, e, i)
                }
                aroundO(t, e, i) {
                    const n = t || 0,
                        s = e || 0;
                    return this.translateO(-n, -s).lmultiplyO(i).translateO(n, s)
                }
                clone() {
                    return new Lt(this)
                }
                decompose(t = 0, e = 0) {
                    const i = this.a,
                        n = this.b,
                        s = this.c,
                        r = this.d,
                        o = this.e,
                        h = this.f,
                        a = i * r - n * s,
                        u = a > 0 ? 1 : -1,
                        l = u * Math.sqrt(i * i + n * n),
                        c = Math.atan2(u * n, u * i),
                        d = 180 / Math.PI * c,
                        f = Math.cos(c),
                        m = Math.sin(c),
                        p = (i * s + n * r) / a,
                        g = s * l / (p * i - n) || r * l / (p * n + i),
                        y = o - t + t * f * l + e * (p * f * l - m * g),
                        w = h - e + t * m * l + e * (p * m * l + f * g);
                    return {
                        scaleX: l,
                        scaleY: g,
                        shear: p,
                        rotate: d,
                        translateX: y,
                        translateY: w,
                        originX: t,
                        originY: e,
                        a: this.a,
                        b: this.b,
                        c: this.c,
                        d: this.d,
                        e: this.e,
                        f: this.f
                    }
                }
                equals(t) {
                    if (t === this) return !0;
                    const e = new Lt(t);
                    return Ft(this.a, e.a) && Ft(this.b, e.b) && Ft(this.c, e.c) && Ft(this.d, e.d) && Ft(this.e, e.e) && Ft(this.f, e.f)
                }
                flip(t, e) {
                    return this.clone().flipO(t, e)
                }
                flipO(t, e) {
                    return "x" === t ? this.scaleO(-1, 1, e, 0) : "y" === t ? this.scaleO(1, -1, 0, e) : this.scaleO(-1, -1, t, e || t)
                }
                init(t) {
                    const e = Lt.fromArray([1, 0, 0, 1, 0, 0]);
                    return t = t instanceof we ? t.matrixify() : "string" === typeof t ? Lt.fromArray(t.split(ft).map(parseFloat)) : Array.isArray(t) ? Lt.fromArray(t) : "object" === typeof t && Lt.isMatrixLike(t) ? t : "object" === typeof t ? (new Lt).transform(t) : 6 === arguments.length ? Lt.fromArray([].slice.call(arguments)) : e, this.a = null != t.a ? t.a : e.a, this.b = null != t.b ? t.b : e.b, this.c = null != t.c ? t.c : e.c, this.d = null != t.d ? t.d : e.d, this.e = null != t.e ? t.e : e.e, this.f = null != t.f ? t.f : e.f, this
                }
                inverse() {
                    return this.clone().inverseO()
                }
                inverseO() {
                    const t = this.a,
                        e = this.b,
                        i = this.c,
                        n = this.d,
                        s = this.e,
                        r = this.f,
                        o = t * n - e * i;
                    if (!o) throw new Error("Cannot invert " + this);
                    const h = n / o,
                        a = -e / o,
                        u = -i / o,
                        l = t / o,
                        c = -(h * s + u * r),
                        d = -(a * s + l * r);
                    return this.a = h, this.b = a, this.c = u, this.d = l, this.e = c, this.f = d, this
                }
                lmultiply(t) {
                    return this.clone().lmultiplyO(t)
                }
                lmultiplyO(t) {
                    const e = this,
                        i = t instanceof Lt ? t : new Lt(t);
                    return Lt.matrixMultiply(i, e, this)
                }
                multiply(t) {
                    return this.clone().multiplyO(t)
                }
                multiplyO(t) {
                    const e = this,
                        i = t instanceof Lt ? t : new Lt(t);
                    return Lt.matrixMultiply(e, i, this)
                }
                rotate(t, e, i) {
                    return this.clone().rotateO(t, e, i)
                }
                rotateO(t, e = 0, i = 0) {
                    t = y(t);
                    const n = Math.cos(t),
                        s = Math.sin(t),
                        {
                            a: r,
                            b: o,
                            c: h,
                            d: a,
                            e: u,
                            f: l
                        } = this;
                    return this.a = r * n - o * s, this.b = o * n + r * s, this.c = h * n - a * s, this.d = a * n + h * s, this.e = u * n - l * s + i * s - e * n + e, this.f = l * n + u * s - e * s - i * n + i, this
                }
                scale(t, e, i, n) {
                    return this.clone().scaleO(...arguments)
                }
                scaleO(t, e = t, i = 0, n = 0) {
                    3 === arguments.length && (n = i, i = e, e = t);
                    const {
                        a: s,
                        b: r,
                        c: o,
                        d: h,
                        e: a,
                        f: u
                    } = this;
                    return this.a = s * t, this.b = r * e, this.c = o * t, this.d = h * e, this.e = a * t - i * t + i, this.f = u * e - n * e + n, this
                }
                shear(t, e, i) {
                    return this.clone().shearO(t, e, i)
                }
                shearO(t, e = 0, i = 0) {
                    const {
                        a: n,
                        b: s,
                        c: r,
                        d: o,
                        e: h,
                        f: a
                    } = this;
                    return this.a = n + s * t, this.c = r + o * t, this.e = h + a * t - i * t, this
                }
                skew(t, e, i, n) {
                    return this.clone().skewO(...arguments)
                }
                skewO(t, e = t, i = 0, n = 0) {
                    3 === arguments.length && (n = i, i = e, e = t), t = y(t), e = y(e);
                    const s = Math.tan(t),
                        r = Math.tan(e),
                        {
                            a: o,
                            b: h,
                            c: a,
                            d: u,
                            e: l,
                            f: c
                        } = this;
                    return this.a = o + h * s, this.b = h + o * r, this.c = a + u * s, this.d = u + a * r, this.e = l + c * s - n * s, this.f = c + l * r - i * r, this
                }
                skewX(t, e, i) {
                    return this.skew(t, 0, e, i)
                }
                skewY(t, e, i) {
                    return this.skew(0, t, e, i)
                }
                toArray() {
                    return [this.a, this.b, this.c, this.d, this.e, this.f]
                }
                toString() {
                    return "matrix(" + this.a + "," + this.b + "," + this.c + "," + this.d + "," + this.e + "," + this.f + ")"
                }
                transform(t) {
                    if (Lt.isMatrixLike(t)) {
                        const e = new Lt(t);
                        return e.multiplyO(this)
                    }
                    const e = Lt.formatTransforms(t),
                        i = this,
                        {
                            x: n,
                            y: s
                        } = new Rt(e.ox, e.oy).transform(i),
                        r = (new Lt).translateO(e.rx, e.ry).lmultiplyO(i).translateO(-n, -s).scaleO(e.scaleX, e.scaleY).skewO(e.skewX, e.skewY).shearO(e.shear).rotateO(e.theta).translateO(n, s);
                    if (isFinite(e.px) || isFinite(e.py)) {
                        const t = new Rt(n, s).transform(r),
                            i = isFinite(e.px) ? e.px - t.x : 0,
                            o = isFinite(e.py) ? e.py - t.y : 0;
                        r.translateO(i, o)
                    }
                    return r.translateO(e.tx, e.ty), r
                }
                translate(t, e) {
                    return this.clone().translateO(t, e)
                }
                translateO(t, e) {
                    return this.e += t || 0, this.f += e || 0, this
                }
                valueOf() {
                    return {
                        a: this.a,
                        b: this.b,
                        c: this.c,
                        d: this.d,
                        e: this.e,
                        f: this.f
                    }
                }
            }

            function Pt() {
                return new Lt(this.node.getCTM())
            }

            function $t() {
                if ("function" === typeof this.isRoot && !this.isRoot()) {
                    const t = this.rect(1, 1),
                        e = t.node.getScreenCTM();
                    return t.remove(), new Lt(e)
                }
                return new Lt(this.node.getScreenCTM())
            }

            function qt() {
                if (!qt.nodes) {
                    const t = E().size(2, 0);
                    t.node.style.cssText = ["opacity: 0", "position: absolute", "left: -100%", "top: -100%", "overflow: hidden"].join(";"), t.attr("focusable", "false"), t.attr("aria-hidden", "true");
                    const e = t.path().node;
                    qt.nodes = {
                        svg: t,
                        path: e
                    }
                }
                if (!qt.nodes.svg.node.parentNode) {
                    const t = O.document.body || O.document.documentElement;
                    qt.nodes.svg.addTo(t)
                }
                return qt.nodes
            }

            function Bt(t) {
                return !t.width && !t.height && !t.x && !t.y
            }

            function Xt(t) {
                return t === O.document || (O.document.documentElement.contains || function(t) {
                    while (t.parentNode) t = t.parentNode;
                    return t === O.document
                }).call(O.document.documentElement, t)
            }
            F(Lt, "Matrix");
            class Yt {
                constructor(...t) {
                    this.init(...t)
                }
                addOffset() {
                    return this.x += O.window.pageXOffset, this.y += O.window.pageYOffset, new Yt(this)
                }
                init(t) {
                    const e = [0, 0, 0, 0];
                    return t = "string" === typeof t ? t.split(ft).map(parseFloat) : Array.isArray(t) ? t : "object" === typeof t ? [null != t.left ? t.left : t.x, null != t.top ? t.top : t.y, t.width, t.height] : 4 === arguments.length ? [].slice.call(arguments) : e, this.x = t[0] || 0, this.y = t[1] || 0, this.width = this.w = t[2] || 0, this.height = this.h = t[3] || 0, this.x2 = this.x + this.w, this.y2 = this.y + this.h, this.cx = this.x + this.w / 2, this.cy = this.y + this.h / 2, this
                }
                isNulled() {
                    return Bt(this)
                }
                merge(t) {
                    const e = Math.min(this.x, t.x),
                        i = Math.min(this.y, t.y),
                        n = Math.max(this.x + this.width, t.x + t.width) - e,
                        s = Math.max(this.y + this.height, t.y + t.height) - i;
                    return new Yt(e, i, n, s)
                }
                toArray() {
                    return [this.x, this.y, this.width, this.height]
                }
                toString() {
                    return this.x + " " + this.y + " " + this.width + " " + this.height
                }
                transform(t) {
                    t instanceof Lt || (t = new Lt(t));
                    let e = 1 / 0,
                        i = -1 / 0,
                        n = 1 / 0,
                        s = -1 / 0;
                    const r = [new Rt(this.x, this.y), new Rt(this.x2, this.y), new Rt(this.x, this.y2), new Rt(this.x2, this.y2)];
                    return r.forEach((function(r) {
                        r = r.transform(t), e = Math.min(e, r.x), i = Math.max(i, r.x), n = Math.min(n, r.y), s = Math.max(s, r.y)
                    })), new Yt(e, n, i - e, s - n)
                }
            }

            function Ht(t, e, i) {
                let n;
                try {
                    if (n = e(t.node), Bt(n) && !Xt(t.node)) throw new Error("Element not in the dom")
                } catch (s) {
                    n = i(t)
                }
                return n
            }

            function Zt() {
                const t = t => t.getBBox(),
                    e = t => {
                        try {
                            const e = t.clone().addTo(qt().svg).show(),
                                i = e.node.getBBox();
                            return e.remove(), i
                        } catch (e) {
                            throw new Error(`Getting bbox of element "${t.node.nodeName}" is not possible: ${e.toString()}`)
                        }
                    },
                    i = Ht(this, t, e),
                    n = new Yt(i);
                return n
            }

            function Gt(t) {
                const e = t => t.getBoundingClientRect(),
                    i = t => {
                        throw new Error(`Getting rbox of element "${t.node.nodeName}" is not possible`)
                    },
                    n = Ht(this, e, i),
                    s = new Yt(n);
                return t ? s.transform(t.screenCTM().inverseO()) : s.addOffset()
            }

            function Vt(t, e) {
                const i = this.bbox();
                return t > i.x && e > i.y && t < i.x + i.width && e < i.y + i.height
            }
            c({
                viewbox: {
                    viewbox(t, e, i, n) {
                        return null == t ? new Yt(this.attr("viewBox")) : this.attr("viewBox", new Yt(t, e, i, n))
                    },
                    zoom(t, e) {
                        let {
                            width: i,
                            height: n
                        } = this.attr(["width", "height"]);
                        if ((i || n) && "string" !== typeof i && "string" !== typeof n || (i = this.node.clientWidth, n = this.node.clientHeight), !i || !n) throw new Error("Impossible to get absolute width and height. Please provide an absolute width and height attribute on the zooming element");
                        const s = this.viewbox(),
                            r = i / s.width,
                            o = n / s.height,
                            h = Math.min(r, o);
                        if (null == t) return h;
                        let a = h / t;
                        a === 1 / 0 && (a = Number.MAX_SAFE_INTEGER / 100), e = e || new Rt(i / 2 / r + s.x, n / 2 / o + s.y);
                        const u = new Yt(s).transform(new Lt({
                            scale: a,
                            origin: e
                        }));
                        return this.viewbox(u)
                    }
                }
            }), F(Yt, "Box");
            class Wt extends Array {
                constructor(t = [], ...e) {
                    if (super(t, ...e), "number" === typeof t) return this;
                    this.length = 0, this.push(...t)
                }
            }
            B([Wt], {
                each(t, ...e) {
                    return "function" === typeof t ? this.map(((e, i, n) => t.call(e, e, i, n))) : this.map((i => i[t](...e)))
                },
                toArray() {
                    return Array.prototype.concat.apply([], this)
                }
            });
            const Ut = ["toArray", "constructor", "each"];

            function Qt(t, e) {
                return new Wt(p((e || O.document).querySelectorAll(t), (function(t) {
                    return R(t)
                })))
            }

            function Jt(t) {
                return Qt(t, this.node)
            }

            function Kt(t) {
                return R(this.node.querySelector(t))
            }
            Wt.extend = function(t) {
                t = t.reduce(((t, e) => (Ut.includes(e) || "_" === e[0] || (t[e] = function(...t) {
                    return this.each(e, ...t)
                }), t)), {}), B([Wt], t)
            };
            let te = 0;
            const ee = {};

            function ie(t) {
                let e = t.getEventHolder();
                return e === O.window && (e = ee), e.events || (e.events = {}), e.events
            }

            function ne(t) {
                return t.getEventTarget()
            }

            function se(t) {
                let e = t.getEventHolder();
                e === O.window && (e = ee), e.events && (e.events = {})
            }

            function re(t, e, i, n, s) {
                const r = i.bind(n || t),
                    o = E(t),
                    h = ie(o),
                    a = ne(o);
                e = Array.isArray(e) ? e : e.split(ft), i._svgjsListenerId || (i._svgjsListenerId = ++te), e.forEach((function(t) {
                    const e = t.split(".")[0],
                        n = t.split(".")[1] || "*";
                    h[e] = h[e] || {}, h[e][n] = h[e][n] || {}, h[e][n][i._svgjsListenerId] = r, a.addEventListener(e, r, s || !1)
                }))
            }

            function oe(t, e, i, n) {
                const s = E(t),
                    r = ie(s),
                    o = ne(s);
                ("function" !== typeof i || (i = i._svgjsListenerId, i)) && (e = Array.isArray(e) ? e : (e || "").split(ft), e.forEach((function(t) {
                    const e = t && t.split(".")[0],
                        h = t && t.split(".")[1];
                    let a, u;
                    if (i) r[e] && r[e][h || "*"] && (o.removeEventListener(e, r[e][h || "*"][i], n || !1), delete r[e][h || "*"][i]);
                    else if (e && h) {
                        if (r[e] && r[e][h]) {
                            for (u in r[e][h]) oe(o, [e, h].join("."), u);
                            delete r[e][h]
                        }
                    } else if (h)
                        for (t in r)
                            for (a in r[t]) h === a && oe(o, [t, h].join("."));
                    else if (e) {
                        if (r[e]) {
                            for (a in r[e]) oe(o, [e, a].join("."));
                            delete r[e]
                        }
                    } else {
                        for (t in r) oe(o, t);
                        se(s)
                    }
                })))
            }

            function he(t, e, i, n) {
                const s = ne(t);
                return e instanceof O.window.Event || (e = new O.window.CustomEvent(e, {
                    detail: i,
                    cancelable: !0,
                    ...n
                })), s.dispatchEvent(e), e
            }
            class ae extends A {
                addEventListener() {}
                dispatch(t, e, i) {
                    return he(this, t, e, i)
                }
                dispatchEvent(t) {
                    const e = this.getEventHolder().events;
                    if (!e) return !0;
                    const i = e[t.type];
                    for (const n in i)
                        for (const e in i[n]) i[n][e](t);
                    return !t.defaultPrevented
                }
                fire(t, e, i) {
                    return this.dispatch(t, e, i), this
                }
                getEventHolder() {
                    return this
                }
                getEventTarget() {
                    return this
                }
                off(t, e, i) {
                    return oe(this, t, e, i), this
                }
                on(t, e, i, n) {
                    return re(this, t, e, i, n), this
                }
                removeEventListener() {}
            }

            function ue() {}
            F(ae, "EventTarget");
            const le = {
                    duration: 400,
                    ease: ">",
                    delay: 0
                },
                ce = {
                    "fill-opacity": 1,
                    "stroke-opacity": 1,
                    "stroke-width": 0,
                    "stroke-linejoin": "miter",
                    "stroke-linecap": "butt",
                    fill: "#000000",
                    stroke: "#000000",
                    opacity: 1,
                    x: 0,
                    y: 0,
                    cx: 0,
                    cy: 0,
                    width: 0,
                    height: 0,
                    r: 0,
                    rx: 0,
                    ry: 0,
                    offset: 0,
                    "stop-opacity": 1,
                    "stop-color": "#000000",
                    "text-anchor": "start"
                };
            class de extends Array {
                constructor(...t) {
                    super(...t), this.init(...t)
                }
                clone() {
                    return new this.constructor(this)
                }
                init(t) {
                    return "number" === typeof t || (this.length = 0, this.push(...this.parse(t))), this
                }
                parse(t = []) {
                    return t instanceof Array ? t : t.trim().split(ft).map(parseFloat)
                }
                toArray() {
                    return Array.prototype.concat.apply([], this)
                }
                toSet() {
                    return new Set(this)
                }
                toString() {
                    return this.join(" ")
                }
                valueOf() {
                    const t = [];
                    return t.push(...this), t
                }
            }
            class fe {
                constructor(...t) {
                    this.init(...t)
                }
                convert(t) {
                    return new fe(this.value, t)
                }
                divide(t) {
                    return t = new fe(t), new fe(this / t, this.unit || t.unit)
                }
                init(t, e) {
                    return e = Array.isArray(t) ? t[1] : e, t = Array.isArray(t) ? t[0] : t, this.value = 0, this.unit = e || "", "number" === typeof t ? this.value = isNaN(t) ? 0 : isFinite(t) ? t : t < 0 ? -34e37 : 34e37 : "string" === typeof t ? (e = t.match(it), e && (this.value = parseFloat(e[1]), "%" === e[5] ? this.value /= 100 : "s" === e[5] && (this.value *= 1e3), this.unit = e[5])) : t instanceof fe && (this.value = t.valueOf(), this.unit = t.unit), this
                }
                minus(t) {
                    return t = new fe(t), new fe(this - t, this.unit || t.unit)
                }
                plus(t) {
                    return t = new fe(t), new fe(this + t, this.unit || t.unit)
                }
                times(t) {
                    return t = new fe(t), new fe(this * t, this.unit || t.unit)
                }
                toArray() {
                    return [this.value, this.unit]
                }
                toJSON() {
                    return this.toString()
                }
                toString() {
                    return ("%" === this.unit ? ~~(1e8 * this.value) / 1e6 : "s" === this.unit ? this.value / 1e3 : this.value) + this.unit
                }
                valueOf() {
                    return this.value
                }
            }
            const me = [];

            function pe(t) {
                me.push(t)
            }

            function ge(t, e, i) {
                if (null == t) {
                    t = {}, e = this.node.attributes;
                    for (const i of e) t[i.nodeName] = ct.test(i.nodeValue) ? parseFloat(i.nodeValue) : i.nodeValue;
                    return t
                }
                if (t instanceof Array) return t.reduce(((t, e) => (t[e] = this.attr(e), t)), {});
                if ("object" === typeof t && t.constructor === Object)
                    for (e in t) this.attr(e, t[e]);
                else if (null === e) this.node.removeAttribute(t);
                else {
                    if (null == e) return e = this.node.getAttribute(t), null == e ? ce[t] : ct.test(e) ? parseFloat(e) : e;
                    e = me.reduce(((e, i) => i(t, e, this)), e), "number" === typeof e ? e = new fe(e) : It.isColor(e) ? e = new It(e) : e.constructor === Array && (e = new de(e)), "leading" === t ? this.leading && this.leading(e) : "string" === typeof i ? this.node.setAttributeNS(i, t, e.toString()) : this.node.setAttribute(t, e.toString()), !this.rebuild || "font-size" !== t && "x" !== t || this.rebuild()
                }
                return this
            }
            class ye extends ae {
                constructor(t, e) {
                    super(), this.node = t, this.type = t.nodeName, e && t !== e && this.attr(e)
                }
                add(t, e) {
                    return t = E(t), t.removeNamespace && this.node instanceof O.window.SVGElement && t.removeNamespace(), null == e ? this.node.appendChild(t.node) : t.node !== this.node.childNodes[e] && this.node.insertBefore(t.node, this.node.childNodes[e]), this
                }
                addTo(t, e) {
                    return E(t).put(this, e)
                }
                children() {
                    return new Wt(p(this.node.children, (function(t) {
                        return R(t)
                    })))
                }
                clear() {
                    while (this.node.hasChildNodes()) this.node.removeChild(this.node.lastChild);
                    return this
                }
                clone(t = !0) {
                    return this.writeDataToDom(), new this.constructor(q(this.node.cloneNode(t)))
                }
                each(t, e) {
                    const i = this.children();
                    let n, s;
                    for (n = 0, s = i.length; n < s; n++) t.apply(i[n], [n, i]), e && i[n].each(t, e);
                    return this
                }
                element(t, e) {
                    return this.put(new ye(N(t), e))
                }
                first() {
                    return R(this.node.firstChild)
                }
                get(t) {
                    return R(this.node.childNodes[t])
                }
                getEventHolder() {
                    return this.node
                }
                getEventTarget() {
                    return this.node
                }
                has(t) {
                    return this.index(t) >= 0
                }
                html(t, e) {
                    return this.xml(t, e, z)
                }
                id(t) {
                    return "undefined" !== typeof t || this.node.id || (this.node.id = $(this.type)), this.attr("id", t)
                }
                index(t) {
                    return [].slice.call(this.node.childNodes).indexOf(t.node)
                }
                last() {
                    return R(this.node.lastChild)
                }
                matches(t) {
                    const e = this.node,
                        i = e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector || null;
                    return i && i.call(e, t)
                }
                parent(t) {
                    let e = this;
                    if (!e.node.parentNode) return null;
                    if (e = R(e.node.parentNode), !t) return e;
                    do {
                        if ("string" === typeof t ? e.matches(t) : e instanceof t) return e
                    } while (e = R(e.node.parentNode));
                    return e
                }
                put(t, e) {
                    return t = E(t), this.add(t, e), t
                }
                putIn(t, e) {
                    return E(t).add(this, e)
                }
                remove() {
                    return this.parent() && this.parent().removeElement(this), this
                }
                removeElement(t) {
                    return this.node.removeChild(t.node), this
                }
                replace(t) {
                    return t = E(t), this.node.parentNode && this.node.parentNode.replaceChild(t.node, this.node), t
                }
                round(t = 2, e = null) {
                    const i = 10 ** t,
                        n = this.attr(e);
                    for (const s in n) "number" === typeof n[s] && (n[s] = Math.round(n[s] * i) / i);
                    return this.attr(n), this
                }
                svg(t, e) {
                    return this.xml(t, e, k)
                }
                toString() {
                    return this.id()
                }
                words(t) {
                    return this.node.textContent = t, this
                }
                wrap(t) {
                    const e = this.parent();
                    if (!e) return this.addTo(t);
                    const i = e.index(this);
                    return e.put(t, i).put(this)
                }
                writeDataToDom() {
                    return this.each((function() {
                        this.writeDataToDom()
                    })), this
                }
                xml(t, e, i) {
                    if ("boolean" === typeof t && (i = e, e = t, t = null), null == t || "function" === typeof t) {
                        e = null == e || e, this.writeDataToDom();
                        let i = this;
                        if (null != t) {
                            if (i = R(i.node.cloneNode(!0)), e) {
                                const e = t(i);
                                if (i = e || i, !1 === e) return ""
                            }
                            i.each((function() {
                                const e = t(this),
                                    i = e || this;
                                !1 === e ? this.remove() : e && this !== i && this.replace(i)
                            }), !0)
                        }
                        return e ? i.node.outerHTML : i.node.innerHTML
                    }
                    e = null != e && e;
                    const n = N("wrapper", i),
                        s = O.document.createDocumentFragment();
                    n.innerHTML = t;
                    for (let o = n.children.length; o--;) s.appendChild(n.firstElementChild);
                    const r = this.parent();
                    return e ? this.replace(s) && r : this.add(s)
                }
            }
            B(ye, {
                attr: ge,
                find: Jt,
                findOne: Kt
            }), F(ye, "Dom");
            class we extends ye {
                constructor(t, e) {
                    super(t, e), this.dom = {}, this.node.instance = this, t.hasAttribute("svgjs:data") && this.setData(JSON.parse(t.getAttribute("svgjs:data")) || {})
                }
                center(t, e) {
                    return this.cx(t).cy(e)
                }
                cx(t) {
                    return null == t ? this.x() + this.width() / 2 : this.x(t - this.width() / 2)
                }
                cy(t) {
                    return null == t ? this.y() + this.height() / 2 : this.y(t - this.height() / 2)
                }
                defs() {
                    const t = this.root();
                    return t && t.defs()
                }
                dmove(t, e) {
                    return this.dx(t).dy(e)
                }
                dx(t = 0) {
                    return this.x(new fe(t).plus(this.x()))
                }
                dy(t = 0) {
                    return this.y(new fe(t).plus(this.y()))
                }
                getEventHolder() {
                    return this
                }
                height(t) {
                    return this.attr("height", t)
                }
                move(t, e) {
                    return this.x(t).y(e)
                }
                parents(t = this.root()) {
                    const e = "string" === typeof t;
                    e || (t = E(t));
                    const i = new Wt;
                    let n = this;
                    while ((n = n.parent()) && n.node !== O.document && "#document-fragment" !== n.nodeName) {
                        if (i.push(n), !e && n.node === t.node) break;
                        if (e && n.matches(t)) break;
                        if (n.node === this.root().node) return null
                    }
                    return i
                }
                reference(t) {
                    if (t = this.attr(t), !t) return null;
                    const e = (t + "").match(rt);
                    return e ? E(e[1]) : null
                }
                root() {
                    const t = this.parent(L(j));
                    return t && t.root()
                }
                setData(t) {
                    return this.dom = t, this
                }
                size(t, e) {
                    const i = b(this, t, e);
                    return this.width(new fe(i.width)).height(new fe(i.height))
                }
                width(t) {
                    return this.attr("width", t)
                }
                writeDataToDom() {
                    return this.node.removeAttribute("svgjs:data"), Object.keys(this.dom).length && this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)), super.writeDataToDom()
                }
                x(t) {
                    return this.attr("x", t)
                }
                y(t) {
                    return this.attr("y", t)
                }
            }
            B(we, {
                bbox: Zt,
                rbox: Gt,
                inside: Vt,
                point: Dt,
                ctm: Pt,
                screenCTM: $t
            }), F(we, "Element");
            const xe = {
                stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"],
                fill: ["color", "opacity", "rule"],
                prefix: function(t, e) {
                    return "color" === e ? t : t + "-" + e
                }
            };
            ["fill", "stroke"].forEach((function(t) {
                const e = {};
                let i;
                e[t] = function(e) {
                    if ("undefined" === typeof e) return this.attr(t);
                    if ("string" === typeof e || e instanceof It || It.isRgb(e) || e instanceof we) this.attr(t, e);
                    else
                        for (i = xe[t].length - 1; i >= 0; i--) null != e[xe[t][i]] && this.attr(xe.prefix(t, xe[t][i]), e[xe[t][i]]);
                    return this
                }, c(["Element", "Runner"], e)
            })), c(["Element", "Runner"], {
                matrix: function(t, e, i, n, s, r) {
                    return null == t ? new Lt(this) : this.attr("transform", new Lt(t, e, i, n, s, r))
                },
                rotate: function(t, e, i) {
                    return this.transform({
                        rotate: t,
                        ox: e,
                        oy: i
                    }, !0)
                },
                skew: function(t, e, i, n) {
                    return 1 === arguments.length || 3 === arguments.length ? this.transform({
                        skew: t,
                        ox: e,
                        oy: i
                    }, !0) : this.transform({
                        skew: [t, e],
                        ox: i,
                        oy: n
                    }, !0)
                },
                shear: function(t, e, i) {
                    return this.transform({
                        shear: t,
                        ox: e,
                        oy: i
                    }, !0)
                },
                scale: function(t, e, i, n) {
                    return 1 === arguments.length || 3 === arguments.length ? this.transform({
                        scale: t,
                        ox: e,
                        oy: i
                    }, !0) : this.transform({
                        scale: [t, e],
                        ox: i,
                        oy: n
                    }, !0)
                },
                translate: function(t, e) {
                    return this.transform({
                        translate: [t, e]
                    }, !0)
                },
                relative: function(t, e) {
                    return this.transform({
                        relative: [t, e]
                    }, !0)
                },
                flip: function(t = "both", e = "center") {
                    return -1 === "xybothtrue".indexOf(t) && (e = t, t = "both"), this.transform({
                        flip: t,
                        origin: e
                    }, !0)
                },
                opacity: function(t) {
                    return this.attr("opacity", t)
                }
            }), c("radius", {
                radius: function(t, e = t) {
                    const i = (this._element || this).type;
                    return "radialGradient" === i ? this.attr("r", new fe(t)) : this.rx(t).ry(e)
                }
            }), c("Path", {
                length: function() {
                    return this.node.getTotalLength()
                },
                pointAt: function(t) {
                    return new Rt(this.node.getPointAtLength(t))
                }
            }), c(["Element", "Runner"], {
                font: function(t, e) {
                    if ("object" === typeof t) {
                        for (e in t) this.font(e, t[e]);
                        return this
                    }
                    return "leading" === t ? this.leading(e) : "anchor" === t ? this.attr("text-anchor", e) : "size" === t || "family" === t || "weight" === t || "stretch" === t || "variant" === t || "style" === t ? this.attr("font-" + t, e) : this.attr(t, e)
                }
            });
            const _e = ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "mouseenter", "mouseleave", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"].reduce((function(t, e) {
                const i = function(t) {
                    return null === t ? this.off(e) : this.on(e, t), this
                };
                return t[e] = i, t
            }), {});

            function be() {
                return this.attr("transform", null)
            }

            function ve() {
                const t = (this.attr("transform") || "").split(ot).slice(0, -1).map((function(t) {
                    const e = t.trim().split("(");
                    return [e[0], e[1].split(ft).map((function(t) {
                        return parseFloat(t)
                    }))]
                })).reverse().reduce((function(t, e) {
                    return "matrix" === e[0] ? t.lmultiply(Lt.fromArray(e[1])) : t[e[0]].apply(t, e[1])
                }), new Lt);
                return t
            }

            function ke(t, e) {
                if (this === t) return this;
                const i = this.screenCTM(),
                    n = t.screenCTM().inverse();
                return this.addTo(t, e).untransform().transform(n.multiply(i)), this
            }

            function ze(t) {
                return this.toParent(this.root(), t)
            }

            function Me(t, e) {
                if (null == t || "string" === typeof t) {
                    const e = new Lt(this).decompose();
                    return null == t ? e : e[t]
                }
                Lt.isMatrixLike(t) || (t = { ...t,
                    origin: v(t, this)
                });
                const i = !0 === e ? this : e || !1,
                    n = new Lt(i).transform(t);
                return this.attr("transform", n)
            }
            c("Element", _e), c("Element", {
                untransform: be,
                matrixify: ve,
                toParent: ke,
                toRoot: ze,
                transform: Me
            });
            class Se extends we {
                flatten(t = this, e) {
                    return this.each((function() {
                        if (this instanceof Se) return this.flatten().ungroup()
                    })), this
                }
                ungroup(t = this.parent(), e = t.index(this)) {
                    return e = -1 === e ? t.children().length : e, this.each((function(i, n) {
                        return n[n.length - i - 1].toParent(t, e)
                    })), this.remove()
                }
            }
            F(Se, "Container");
            class Ce extends Se {
                constructor(t, e = t) {
                    super(I("defs", t), e)
                }
                flatten() {
                    return this
                }
                ungroup() {
                    return this
                }
            }
            F(Ce, "Defs");
            class Oe extends we {}

            function Ae(t) {
                return this.attr("rx", t)
            }

            function Te(t) {
                return this.attr("ry", t)
            }

            function je(t) {
                return null == t ? this.cx() - this.rx() : this.cx(t + this.rx())
            }

            function Ne(t) {
                return null == t ? this.cy() - this.ry() : this.cy(t + this.ry())
            }

            function Ee(t) {
                return this.attr("cx", t)
            }

            function Ie(t) {
                return this.attr("cy", t)
            }

            function Re(t) {
                return null == t ? 2 * this.rx() : this.rx(new fe(t).divide(2))
            }

            function De(t) {
                return null == t ? 2 * this.ry() : this.ry(new fe(t).divide(2))
            }
            F(Oe, "Shape");
            var Fe = {
                __proto__: null,
                rx: Ae,
                ry: Te,
                x: je,
                y: Ne,
                cx: Ee,
                cy: Ie,
                width: Re,
                height: De
            };
            class Le extends Oe {
                constructor(t, e = t) {
                    super(I("ellipse", t), e)
                }
                size(t, e) {
                    const i = b(this, t, e);
                    return this.rx(new fe(i.width).divide(2)).ry(new fe(i.height).divide(2))
                }
            }
            B(Le, Fe), c("Container", {
                ellipse: X((function(t = 0, e = t) {
                    return this.put(new Le).size(t, e).move(0, 0)
                }))
            }), F(Le, "Ellipse");
            class Pe extends ye {
                constructor(t = O.document.createDocumentFragment()) {
                    super(t)
                }
                xml(t, e, i) {
                    if ("boolean" === typeof t && (i = e, e = t, t = null), null == t || "function" === typeof t) {
                        const t = new ye(N("wrapper", i));
                        return t.add(this.node.cloneNode(!0)), t.xml(!1, i)
                    }
                    return super.xml(t, !1, i)
                }
            }

            function $e(t, e) {
                return "radialGradient" === (this._element || this).type ? this.attr({
                    fx: new fe(t),
                    fy: new fe(e)
                }) : this.attr({
                    x1: new fe(t),
                    y1: new fe(e)
                })
            }

            function qe(t, e) {
                return "radialGradient" === (this._element || this).type ? this.attr({
                    cx: new fe(t),
                    cy: new fe(e)
                }) : this.attr({
                    x2: new fe(t),
                    y2: new fe(e)
                })
            }
            F(Pe, "Fragment");
            var Be = {
                __proto__: null,
                from: $e,
                to: qe
            };
            class Xe extends Se {
                constructor(t, e) {
                    super(I(t + "Gradient", "string" === typeof t ? null : t), e)
                }
                attr(t, e, i) {
                    return "transform" === t && (t = "gradientTransform"), super.attr(t, e, i)
                }
                bbox() {
                    return new Yt
                }
                targets() {
                    return Qt('svg [fill*="' + this.id() + '"]')
                }
                toString() {
                    return this.url()
                }
                update(t) {
                    return this.clear(), "function" === typeof t && t.call(this, this), this
                }
                url() {
                    return 'url("#' + this.id() + '")'
                }
            }
            B(Xe, Be), c({
                Container: {
                    gradient(...t) {
                        return this.defs().gradient(...t)
                    }
                },
                Defs: {
                    gradient: X((function(t, e) {
                        return this.put(new Xe(t)).update(e)
                    }))
                }
            }), F(Xe, "Gradient");
            class Ye extends Se {
                constructor(t, e = t) {
                    super(I("pattern", t), e)
                }
                attr(t, e, i) {
                    return "transform" === t && (t = "patternTransform"), super.attr(t, e, i)
                }
                bbox() {
                    return new Yt
                }
                targets() {
                    return Qt('svg [fill*="' + this.id() + '"]')
                }
                toString() {
                    return this.url()
                }
                update(t) {
                    return this.clear(), "function" === typeof t && t.call(this, this), this
                }
                url() {
                    return 'url("#' + this.id() + '")'
                }
            }
            c({
                Container: {
                    pattern(...t) {
                        return this.defs().pattern(...t)
                    }
                },
                Defs: {
                    pattern: X((function(t, e, i) {
                        return this.put(new Ye).update(i).attr({
                            x: 0,
                            y: 0,
                            width: t,
                            height: e,
                            patternUnits: "userSpaceOnUse"
                        })
                    }))
                }
            }), F(Ye, "Pattern");
            class He extends Oe {
                constructor(t, e = t) {
                    super(I("image", t), e)
                }
                load(t, e) {
                    if (!t) return this;
                    const i = new O.window.Image;
                    return re(i, "load", (function(t) {
                        const n = this.parent(Ye);
                        0 === this.width() && 0 === this.height() && this.size(i.width, i.height), n instanceof Ye && 0 === n.width() && 0 === n.height() && n.size(this.width(), this.height()), "function" === typeof e && e.call(this, t)
                    }), this), re(i, "load error", (function() {
                        oe(i)
                    })), this.attr("href", i.src = t, S)
                }
            }
            pe((function(t, e, i) {
                return "fill" !== t && "stroke" !== t || dt.test(e) && (e = i.root().defs().image(e)), e instanceof He && (e = i.root().defs().pattern(0, 0, (t => {
                    t.add(e)
                }))), e
            })), c({
                Container: {
                    image: X((function(t, e) {
                        return this.put(new He).size(0, 0).load(t, e)
                    }))
                }
            }), F(He, "Image");
            class Ze extends de {
                bbox() {
                    let t = -1 / 0,
                        e = -1 / 0,
                        i = 1 / 0,
                        n = 1 / 0;
                    return this.forEach((function(s) {
                        t = Math.max(s[0], t), e = Math.max(s[1], e), i = Math.min(s[0], i), n = Math.min(s[1], n)
                    })), new Yt(i, n, t - i, e - n)
                }
                move(t, e) {
                    const i = this.bbox();
                    if (t -= i.x, e -= i.y, !isNaN(t) && !isNaN(e))
                        for (let n = this.length - 1; n >= 0; n--) this[n] = [this[n][0] + t, this[n][1] + e];
                    return this
                }
                parse(t = [0, 0]) {
                    const e = [];
                    t = t instanceof Array ? Array.prototype.concat.apply([], t) : t.trim().split(ft).map(parseFloat), t.length % 2 !== 0 && t.pop();
                    for (let i = 0, n = t.length; i < n; i += 2) e.push([t[i], t[i + 1]]);
                    return e
                }
                size(t, e) {
                    let i;
                    const n = this.bbox();
                    for (i = this.length - 1; i >= 0; i--) n.width && (this[i][0] = (this[i][0] - n.x) * t / n.width + n.x), n.height && (this[i][1] = (this[i][1] - n.y) * e / n.height + n.y);
                    return this
                }
                toLine() {
                    return {
                        x1: this[0][0],
                        y1: this[0][1],
                        x2: this[1][0],
                        y2: this[1][1]
                    }
                }
                toString() {
                    const t = [];
                    for (let e = 0, i = this.length; e < i; e++) t.push(this[e].join(","));
                    return t.join(" ")
                }
                transform(t) {
                    return this.clone().transformO(t)
                }
                transformO(t) {
                    Lt.isMatrixLike(t) || (t = new Lt(t));
                    for (let e = this.length; e--;) {
                        const [i, n] = this[e];
                        this[e][0] = t.a * i + t.c * n + t.e, this[e][1] = t.b * i + t.d * n + t.f
                    }
                    return this
                }
            }
            const Ge = Ze;

            function Ve(t) {
                return null == t ? this.bbox().x : this.move(t, this.bbox().y)
            }

            function We(t) {
                return null == t ? this.bbox().y : this.move(this.bbox().x, t)
            }

            function Ue(t) {
                const e = this.bbox();
                return null == t ? e.width : this.size(t, e.height)
            }

            function Qe(t) {
                const e = this.bbox();
                return null == t ? e.height : this.size(e.width, t)
            }
            var Je = {
                __proto__: null,
                MorphArray: Ge,
                x: Ve,
                y: We,
                width: Ue,
                height: Qe
            };
            class Ke extends Oe {
                constructor(t, e = t) {
                    super(I("line", t), e)
                }
                array() {
                    return new Ze([
                        [this.attr("x1"), this.attr("y1")],
                        [this.attr("x2"), this.attr("y2")]
                    ])
                }
                move(t, e) {
                    return this.attr(this.array().move(t, e).toLine())
                }
                plot(t, e, i, n) {
                    return null == t ? this.array() : (t = "undefined" !== typeof e ? {
                        x1: t,
                        y1: e,
                        x2: i,
                        y2: n
                    } : new Ze(t).toLine(), this.attr(t))
                }
                size(t, e) {
                    const i = b(this, t, e);
                    return this.attr(this.array().size(i.width, i.height).toLine())
                }
            }
            B(Ke, Je), c({
                Container: {
                    line: X((function(...t) {
                        return Ke.prototype.plot.apply(this.put(new Ke), null != t[0] ? t : [0, 0, 0, 0])
                    }))
                }
            }), F(Ke, "Line");
            class ti extends Se {
                constructor(t, e = t) {
                    super(I("marker", t), e)
                }
                height(t) {
                    return this.attr("markerHeight", t)
                }
                orient(t) {
                    return this.attr("orient", t)
                }
                ref(t, e) {
                    return this.attr("refX", t).attr("refY", e)
                }
                toString() {
                    return "url(#" + this.id() + ")"
                }
                update(t) {
                    return this.clear(), "function" === typeof t && t.call(this, this), this
                }
                width(t) {
                    return this.attr("markerWidth", t)
                }
            }

            function ei(t, e) {
                return function(i) {
                    return null == i ? this[t] : (this[t] = i, e && e.call(this), this)
                }
            }
            c({
                Container: {
                    marker(...t) {
                        return this.defs().marker(...t)
                    }
                },
                Defs: {
                    marker: X((function(t, e, i) {
                        return this.put(new ti).size(t, e).ref(t / 2, e / 2).viewbox(0, 0, t, e).attr("orient", "auto").update(i)
                    }))
                },
                marker: {
                    marker(t, e, i, n) {
                        let s = ["marker"];
                        return "all" !== t && s.push(t), s = s.join("-"), t = arguments[1] instanceof ti ? arguments[1] : this.defs().marker(e, i, n), this.attr(s, t)
                    }
                }
            }), F(ti, "Marker");
            const ii = {
                "-": function(t) {
                    return t
                },
                "<>": function(t) {
                    return -Math.cos(t * Math.PI) / 2 + .5
                },
                ">": function(t) {
                    return Math.sin(t * Math.PI / 2)
                },
                "<": function(t) {
                    return 1 - Math.cos(t * Math.PI / 2)
                },
                bezier: function(t, e, i, n) {
                    return function(s) {
                        return s < 0 ? t > 0 ? e / t * s : i > 0 ? n / i * s : 0 : s > 1 ? i < 1 ? (1 - n) / (1 - i) * s + (n - i) / (1 - i) : t < 1 ? (1 - e) / (1 - t) * s + (e - t) / (1 - t) : 1 : 3 * s * (1 - s) ** 2 * e + 3 * s ** 2 * (1 - s) * n + s ** 3
                    }
                },
                steps: function(t, e = "end") {
                    e = e.split("-").reverse()[0];
                    let i = t;
                    return "none" === e ? --i : "both" === e && ++i, (n, s = !1) => {
                        let r = Math.floor(n * t);
                        const o = n * r % 1 === 0;
                        return "start" !== e && "both" !== e || ++r, s && o && --r, n >= 0 && r < 0 && (r = 0), n <= 1 && r > i && (r = i), r / i
                    }
                }
            };
            class ni {
                done() {
                    return !1
                }
            }
            class si extends ni {
                constructor(t = le.ease) {
                    super(), this.ease = ii[t] || t
                }
                step(t, e, i) {
                    return "number" !== typeof t ? i < 1 ? t : e : t + (e - t) * this.ease(i)
                }
            }
            class ri extends ni {
                constructor(t) {
                    super(), this.stepper = t
                }
                done(t) {
                    return t.done
                }
                step(t, e, i, n) {
                    return this.stepper(t, e, i, n)
                }
            }

            function oi() {
                const t = (this._duration || 500) / 1e3,
                    e = this._overshoot || 0,
                    i = 1e-10,
                    n = Math.PI,
                    s = Math.log(e / 100 + i),
                    r = -s / Math.sqrt(n * n + s * s),
                    o = 3.9 / (r * t);
                this.d = 2 * r * o, this.k = o * o
            }
            class hi extends ri {
                constructor(t = 500, e = 0) {
                    super(), this.duration(t).overshoot(e)
                }
                step(t, e, i, n) {
                    if ("string" === typeof t) return t;
                    if (n.done = i === 1 / 0, i === 1 / 0) return e;
                    if (0 === i) return t;
                    i > 100 && (i = 16), i /= 1e3;
                    const s = n.velocity || 0,
                        r = -this.d * s - this.k * (t - e),
                        o = t + s * i + r * i * i / 2;
                    return n.velocity = s + r * i, n.done = Math.abs(e - o) + Math.abs(s) < .002, n.done ? e : o
                }
            }
            B(hi, {
                duration: ei("_duration", oi),
                overshoot: ei("_overshoot", oi)
            });
            class ai extends ri {
                constructor(t = .1, e = .01, i = 0, n = 1e3) {
                    super(), this.p(t).i(e).d(i).windup(n)
                }
                step(t, e, i, n) {
                    if ("string" === typeof t) return t;
                    if (n.done = i === 1 / 0, i === 1 / 0) return e;
                    if (0 === i) return t;
                    const s = e - t;
                    let r = (n.integral || 0) + s * i;
                    const o = (s - (n.error || 0)) / i,
                        h = this._windup;
                    return !1 !== h && (r = Math.max(-h, Math.min(r, h))), n.error = s, n.integral = r, n.done = Math.abs(s) < .001, n.done ? e : t + (this.P * s + this.I * r + this.D * o)
                }
            }
            B(ai, {
                windup: ei("_windup"),
                p: ei("P"),
                i: ei("I"),
                d: ei("D")
            });
            const ui = {
                    M: 2,
                    L: 2,
                    H: 1,
                    V: 1,
                    C: 6,
                    S: 4,
                    Q: 4,
                    T: 2,
                    A: 7,
                    Z: 0
                },
                li = {
                    M: function(t, e, i) {
                        return e.x = i.x = t[0], e.y = i.y = t[1], ["M", e.x, e.y]
                    },
                    L: function(t, e) {
                        return e.x = t[0], e.y = t[1], ["L", t[0], t[1]]
                    },
                    H: function(t, e) {
                        return e.x = t[0], ["H", t[0]]
                    },
                    V: function(t, e) {
                        return e.y = t[0], ["V", t[0]]
                    },
                    C: function(t, e) {
                        return e.x = t[4], e.y = t[5], ["C", t[0], t[1], t[2], t[3], t[4], t[5]]
                    },
                    S: function(t, e) {
                        return e.x = t[2], e.y = t[3], ["S", t[0], t[1], t[2], t[3]]
                    },
                    Q: function(t, e) {
                        return e.x = t[2], e.y = t[3], ["Q", t[0], t[1], t[2], t[3]]
                    },
                    T: function(t, e) {
                        return e.x = t[0], e.y = t[1], ["T", t[0], t[1]]
                    },
                    Z: function(t, e, i) {
                        return e.x = i.x, e.y = i.y, ["Z"]
                    },
                    A: function(t, e) {
                        return e.x = t[5], e.y = t[6], ["A", t[0], t[1], t[2], t[3], t[4], t[5], t[6]]
                    }
                },
                ci = "mlhvqtcsaz".split("");
            for (let Xs = 0, Ys = ci.length; Xs < Ys; ++Xs) li[ci[Xs]] = function(t) {
                return function(e, i, n) {
                    if ("H" === t) e[0] = e[0] + i.x;
                    else if ("V" === t) e[0] = e[0] + i.y;
                    else if ("A" === t) e[5] = e[5] + i.x, e[6] = e[6] + i.y;
                    else
                        for (let t = 0, s = e.length; t < s; ++t) e[t] = e[t] + (t % 2 ? i.y : i.x);
                    return li[t](e, i, n)
                }
            }(ci[Xs].toUpperCase());

            function di(t) {
                const e = t.segment[0];
                return li[e](t.segment.slice(1), t.p, t.p0)
            }

            function fi(t) {
                return t.segment.length && t.segment.length - 1 === ui[t.segment[0].toUpperCase()]
            }

            function mi(t, e) {
                t.inNumber && pi(t, !1);
                const i = mt.test(e);
                if (i) t.segment = [e];
                else {
                    const e = t.lastCommand,
                        i = e.toLowerCase(),
                        n = e === i;
                    t.segment = ["m" === i ? n ? "l" : "L" : e]
                }
                return t.inSegment = !0, t.lastCommand = t.segment[0], i
            }

            function pi(t, e) {
                if (!t.inNumber) throw new Error("Parser Error");
                t.number && t.segment.push(parseFloat(t.number)), t.inNumber = e, t.number = "", t.pointSeen = !1, t.hasExponent = !1, fi(t) && gi(t)
            }

            function gi(t) {
                t.inSegment = !1, t.absolute && (t.segment = di(t)), t.segments.push(t.segment)
            }

            function yi(t) {
                if (!t.segment.length) return !1;
                const e = "A" === t.segment[0].toUpperCase(),
                    i = t.segment.length;
                return e && (4 === i || 5 === i)
            }

            function wi(t) {
                return "E" === t.lastToken.toUpperCase()
            }

            function xi(t, e = !0) {
                let i = 0,
                    n = "";
                const s = {
                    segment: [],
                    inNumber: !1,
                    number: "",
                    lastToken: "",
                    inSegment: !1,
                    segments: [],
                    pointSeen: !1,
                    hasExponent: !1,
                    absolute: e,
                    p0: new Rt,
                    p: new Rt
                };
                while (s.lastToken = n, n = t.charAt(i++))
                    if (s.inSegment || !mi(s, n))
                        if ("." !== n)
                            if (isNaN(parseInt(n)))
                                if (" " !== n && "," !== n)
                                    if ("-" !== n)
                                        if ("E" !== n.toUpperCase()) {
                                            if (mt.test(n)) {
                                                if (s.inNumber) pi(s, !1);
                                                else {
                                                    if (!fi(s)) throw new Error("parser Error");
                                                    gi(s)
                                                }--i
                                            }
                                        } else s.number += n, s.hasExponent = !0;
                else {
                    if (s.inNumber && !wi(s)) {
                        pi(s, !1), --i;
                        continue
                    }
                    s.number += n, s.inNumber = !0
                } else s.inNumber && pi(s, !1);
                else {
                    if ("0" === s.number || yi(s)) {
                        s.inNumber = !0, s.number = n, pi(s, !0);
                        continue
                    }
                    s.inNumber = !0, s.number += n
                } else {
                    if (s.pointSeen || s.hasExponent) {
                        pi(s, !1), --i;
                        continue
                    }
                    s.inNumber = !0, s.pointSeen = !0, s.number += n
                }
                return s.inNumber && pi(s, !1), s.inSegment && fi(s) && gi(s), s.segments
            }

            function _i(t) {
                let e = "";
                for (let i = 0, n = t.length; i < n; i++) e += t[i][0], null != t[i][1] && (e += t[i][1], null != t[i][2] && (e += " ", e += t[i][2], null != t[i][3] && (e += " ", e += t[i][3], e += " ", e += t[i][4], null != t[i][5] && (e += " ", e += t[i][5], e += " ", e += t[i][6], null != t[i][7] && (e += " ", e += t[i][7])))));
                return e + " "
            }
            class bi extends de {
                bbox() {
                    return qt().path.setAttribute("d", this.toString()), new Yt(qt.nodes.path.getBBox())
                }
                move(t, e) {
                    const i = this.bbox();
                    if (t -= i.x, e -= i.y, !isNaN(t) && !isNaN(e))
                        for (let n, s = this.length - 1; s >= 0; s--) n = this[s][0], "M" === n || "L" === n || "T" === n ? (this[s][1] += t, this[s][2] += e) : "H" === n ? this[s][1] += t : "V" === n ? this[s][1] += e : "C" === n || "S" === n || "Q" === n ? (this[s][1] += t, this[s][2] += e, this[s][3] += t, this[s][4] += e, "C" === n && (this[s][5] += t, this[s][6] += e)) : "A" === n && (this[s][6] += t, this[s][7] += e);
                    return this
                }
                parse(t = "M0 0") {
                    return Array.isArray(t) && (t = Array.prototype.concat.apply([], t).toString()), xi(t)
                }
                size(t, e) {
                    const i = this.bbox();
                    let n, s;
                    for (i.width = 0 === i.width ? 1 : i.width, i.height = 0 === i.height ? 1 : i.height, n = this.length - 1; n >= 0; n--) s = this[n][0], "M" === s || "L" === s || "T" === s ? (this[n][1] = (this[n][1] - i.x) * t / i.width + i.x, this[n][2] = (this[n][2] - i.y) * e / i.height + i.y) : "H" === s ? this[n][1] = (this[n][1] - i.x) * t / i.width + i.x : "V" === s ? this[n][1] = (this[n][1] - i.y) * e / i.height + i.y : "C" === s || "S" === s || "Q" === s ? (this[n][1] = (this[n][1] - i.x) * t / i.width + i.x, this[n][2] = (this[n][2] - i.y) * e / i.height + i.y, this[n][3] = (this[n][3] - i.x) * t / i.width + i.x, this[n][4] = (this[n][4] - i.y) * e / i.height + i.y, "C" === s && (this[n][5] = (this[n][5] - i.x) * t / i.width + i.x, this[n][6] = (this[n][6] - i.y) * e / i.height + i.y)) : "A" === s && (this[n][1] = this[n][1] * t / i.width, this[n][2] = this[n][2] * e / i.height, this[n][6] = (this[n][6] - i.x) * t / i.width + i.x, this[n][7] = (this[n][7] - i.y) * e / i.height + i.y);
                    return this
                }
                toString() {
                    return _i(this)
                }
            }
            const vi = t => {
                const e = typeof t;
                return "number" === e ? fe : "string" === e ? It.isColor(t) ? It : ft.test(t) ? mt.test(t) ? bi : de : it.test(t) ? fe : zi : Oi.indexOf(t.constructor) > -1 ? t.constructor : Array.isArray(t) ? de : "object" === e ? Ci : zi
            };
            class ki {
                constructor(t) {
                    this._stepper = t || new si("-"), this._from = null, this._to = null, this._type = null, this._context = null, this._morphObj = null
                }
                at(t) {
                    return this._morphObj.morph(this._from, this._to, t, this._stepper, this._context)
                }
                done() {
                    const t = this._context.map(this._stepper.done).reduce((function(t, e) {
                        return t && e
                    }), !0);
                    return t
                }
                from(t) {
                    return null == t ? this._from : (this._from = this._set(t), this)
                }
                stepper(t) {
                    return null == t ? this._stepper : (this._stepper = t, this)
                }
                to(t) {
                    return null == t ? this._to : (this._to = this._set(t), this)
                }
                type(t) {
                    return null == t ? this._type : (this._type = t, this)
                }
                _set(t) {
                    this._type || this.type(vi(t));
                    let e = new this._type(t);
                    return this._type === It && (e = this._to ? e[this._to[4]]() : this._from ? e[this._from[4]]() : e), this._type === Ci && (e = this._to ? e.align(this._to) : this._from ? e.align(this._from) : e), e = e.toConsumable(), this._morphObj = this._morphObj || new this._type, this._context = this._context || Array.apply(null, Array(e.length)).map(Object).map((function(t) {
                        return t.done = !0, t
                    })), e
                }
            }
            class zi {
                constructor(...t) {
                    this.init(...t)
                }
                init(t) {
                    return t = Array.isArray(t) ? t[0] : t, this.value = t, this
                }
                toArray() {
                    return [this.value]
                }
                valueOf() {
                    return this.value
                }
            }
            class Mi {
                constructor(...t) {
                    this.init(...t)
                }
                init(t) {
                    return Array.isArray(t) && (t = {
                        scaleX: t[0],
                        scaleY: t[1],
                        shear: t[2],
                        rotate: t[3],
                        translateX: t[4],
                        translateY: t[5],
                        originX: t[6],
                        originY: t[7]
                    }), Object.assign(this, Mi.defaults, t), this
                }
                toArray() {
                    const t = this;
                    return [t.scaleX, t.scaleY, t.shear, t.rotate, t.translateX, t.translateY, t.originX, t.originY]
                }
            }
            Mi.defaults = {
                scaleX: 1,
                scaleY: 1,
                shear: 0,
                rotate: 0,
                translateX: 0,
                translateY: 0,
                originX: 0,
                originY: 0
            };
            const Si = (t, e) => t[0] < e[0] ? -1 : t[0] > e[0] ? 1 : 0;
            class Ci {
                constructor(...t) {
                    this.init(...t)
                }
                align(t) {
                    const e = this.values;
                    for (let i = 0, n = e.length; i < n; ++i) {
                        if (e[i + 1] === t[i + 1]) {
                            if (e[i + 1] === It && t[i + 7] !== e[i + 7]) {
                                const e = t[i + 7],
                                    n = new It(this.values.splice(i + 3, 5))[e]().toArray();
                                this.values.splice(i + 3, 0, ...n)
                            }
                            i += e[i + 2] + 2;
                            continue
                        }
                        if (!t[i + 1]) return this;
                        const n = (new t[i + 1]).toArray(),
                            s = e[i + 2] + 3;
                        e.splice(i, s, t[i], t[i + 1], t[i + 2], ...n), i += e[i + 2] + 2
                    }
                    return this
                }
                init(t) {
                    if (this.values = [], Array.isArray(t)) return void(this.values = t.slice());
                    t = t || {};
                    const e = [];
                    for (const i in t) {
                        const n = vi(t[i]),
                            s = new n(t[i]).toArray();
                        e.push([i, n, s.length, ...s])
                    }
                    return e.sort(Si), this.values = e.reduce(((t, e) => t.concat(e)), []), this
                }
                toArray() {
                    return this.values
                }
                valueOf() {
                    const t = {},
                        e = this.values;
                    while (e.length) {
                        const i = e.shift(),
                            n = e.shift(),
                            s = e.shift(),
                            r = e.splice(0, s);
                        t[i] = new n(r)
                    }
                    return t
                }
            }
            const Oi = [zi, Mi, Ci];

            function Ai(t = []) {
                Oi.push(...[].concat(t))
            }

            function Ti() {
                B(Oi, {
                    to(t) {
                        return (new ki).type(this.constructor).from(this.toArray()).to(t)
                    },
                    fromArray(t) {
                        return this.init(t), this
                    },
                    toConsumable() {
                        return this.toArray()
                    },
                    morph(t, e, i, n, s) {
                        const r = function(t, r) {
                            return n.step(t, e[r], i, s[r], s)
                        };
                        return this.fromArray(t.map(r))
                    }
                })
            }
            class ji extends Oe {
                constructor(t, e = t) {
                    super(I("path", t), e)
                }
                array() {
                    return this._array || (this._array = new bi(this.attr("d")))
                }
                clear() {
                    return delete this._array, this
                }
                height(t) {
                    return null == t ? this.bbox().height : this.size(this.bbox().width, t)
                }
                move(t, e) {
                    return this.attr("d", this.array().move(t, e))
                }
                plot(t) {
                    return null == t ? this.array() : this.clear().attr("d", "string" === typeof t ? t : this._array = new bi(t))
                }
                size(t, e) {
                    const i = b(this, t, e);
                    return this.attr("d", this.array().size(i.width, i.height))
                }
                width(t) {
                    return null == t ? this.bbox().width : this.size(t, this.bbox().height)
                }
                x(t) {
                    return null == t ? this.bbox().x : this.move(t, this.bbox().y)
                }
                y(t) {
                    return null == t ? this.bbox().y : this.move(this.bbox().x, t)
                }
            }

            function Ni() {
                return this._array || (this._array = new Ze(this.attr("points")))
            }

            function Ei() {
                return delete this._array, this
            }

            function Ii(t, e) {
                return this.attr("points", this.array().move(t, e))
            }

            function Ri(t) {
                return null == t ? this.array() : this.clear().attr("points", "string" === typeof t ? t : this._array = new Ze(t))
            }

            function Di(t, e) {
                const i = b(this, t, e);
                return this.attr("points", this.array().size(i.width, i.height))
            }
            ji.prototype.MorphArray = bi, c({
                Container: {
                    path: X((function(t) {
                        return this.put(new ji).plot(t || new bi)
                    }))
                }
            }), F(ji, "Path");
            var Fi = {
                __proto__: null,
                array: Ni,
                clear: Ei,
                move: Ii,
                plot: Ri,
                size: Di
            };
            class Li extends Oe {
                constructor(t, e = t) {
                    super(I("polygon", t), e)
                }
            }
            c({
                Container: {
                    polygon: X((function(t) {
                        return this.put(new Li).plot(t || new Ze)
                    }))
                }
            }), B(Li, Je), B(Li, Fi), F(Li, "Polygon");
            class Pi extends Oe {
                constructor(t, e = t) {
                    super(I("polyline", t), e)
                }
            }
            c({
                Container: {
                    polyline: X((function(t) {
                        return this.put(new Pi).plot(t || new Ze)
                    }))
                }
            }), B(Pi, Je), B(Pi, Fi), F(Pi, "Polyline");
            class $i extends Oe {
                constructor(t, e = t) {
                    super(I("rect", t), e)
                }
            }
            B($i, {
                rx: Ae,
                ry: Te
            }), c({
                Container: {
                    rect: X((function(t, e) {
                        return this.put(new $i).size(t, e)
                    }))
                }
            }), F($i, "Rect");
            class qi {
                constructor() {
                    this._first = null, this._last = null
                }
                first() {
                    return this._first && this._first.value
                }
                last() {
                    return this._last && this._last.value
                }
                push(t) {
                    const e = "undefined" !== typeof t.next ? t : {
                        value: t,
                        next: null,
                        prev: null
                    };
                    return this._last ? (e.prev = this._last, this._last.next = e, this._last = e) : (this._last = e, this._first = e), e
                }
                remove(t) {
                    t.prev && (t.prev.next = t.next), t.next && (t.next.prev = t.prev), t === this._last && (this._last = t.prev), t === this._first && (this._first = t.next), t.prev = null, t.next = null
                }
                shift() {
                    const t = this._first;
                    return t ? (this._first = t.next, this._first && (this._first.prev = null), this._last = this._first ? this._last : null, t.value) : null
                }
            }
            const Bi = {
                    nextDraw: null,
                    frames: new qi,
                    timeouts: new qi,
                    immediates: new qi,
                    timer: () => O.window.performance || O.window.Date,
                    transforms: [],
                    frame(t) {
                        const e = Bi.frames.push({
                            run: t
                        });
                        return null === Bi.nextDraw && (Bi.nextDraw = O.window.requestAnimationFrame(Bi._draw)), e
                    },
                    timeout(t, e) {
                        e = e || 0;
                        const i = Bi.timer().now() + e,
                            n = Bi.timeouts.push({
                                run: t,
                                time: i
                            });
                        return null === Bi.nextDraw && (Bi.nextDraw = O.window.requestAnimationFrame(Bi._draw)), n
                    },
                    immediate(t) {
                        const e = Bi.immediates.push(t);
                        return null === Bi.nextDraw && (Bi.nextDraw = O.window.requestAnimationFrame(Bi._draw)), e
                    },
                    cancelFrame(t) {
                        null != t && Bi.frames.remove(t)
                    },
                    clearTimeout(t) {
                        null != t && Bi.timeouts.remove(t)
                    },
                    cancelImmediate(t) {
                        null != t && Bi.immediates.remove(t)
                    },
                    _draw(t) {
                        let e = null;
                        const i = Bi.timeouts.last();
                        while (e = Bi.timeouts.shift())
                            if (t >= e.time ? e.run() : Bi.timeouts.push(e), e === i) break;
                        let n = null;
                        const s = Bi.frames.last();
                        while (n !== s && (n = Bi.frames.shift())) n.run(t);
                        let r = null;
                        while (r = Bi.immediates.shift()) r();
                        Bi.nextDraw = Bi.timeouts.first() || Bi.frames.first() ? O.window.requestAnimationFrame(Bi._draw) : null
                    }
                },
                Xi = function(t) {
                    const e = t.start,
                        i = t.runner.duration(),
                        n = e + i;
                    return {
                        start: e,
                        duration: i,
                        end: n,
                        runner: t.runner
                    }
                },
                Yi = function() {
                    const t = O.window;
                    return (t.performance || t.Date).now()
                };
            class Hi extends ae {
                constructor(t = Yi) {
                    super(), this._timeSource = t, this._startTime = 0, this._speed = 1, this._persist = 0, this._nextFrame = null, this._paused = !0, this._runners = [], this._runnerIds = [], this._lastRunnerId = -1, this._time = 0, this._lastSourceTime = 0, this._lastStepTime = 0, this._step = this._stepFn.bind(this, !1), this._stepImmediate = this._stepFn.bind(this, !0)
                }
                active() {
                    return !!this._nextFrame
                }
                finish() {
                    return this.time(this.getEndTimeOfTimeline() + 1), this.pause()
                }
                getEndTime() {
                    const t = this.getLastRunnerInfo(),
                        e = t ? t.runner.duration() : 0,
                        i = t ? t.start : this._time;
                    return i + e
                }
                getEndTimeOfTimeline() {
                    const t = this._runners.map((t => t.start + t.runner.duration()));
                    return Math.max(0, ...t)
                }
                getLastRunnerInfo() {
                    return this.getRunnerInfoById(this._lastRunnerId)
                }
                getRunnerInfoById(t) {
                    return this._runners[this._runnerIds.indexOf(t)] || null
                }
                pause() {
                    return this._paused = !0, this._continue()
                }
                persist(t) {
                    return null == t ? this._persist : (this._persist = t, this)
                }
                play() {
                    return this._paused = !1, this.updateTime()._continue()
                }
                reverse(t) {
                    const e = this.speed();
                    if (null == t) return this.speed(-e);
                    const i = Math.abs(e);
                    return this.speed(t ? -i : i)
                }
                schedule(t, e, i) {
                    if (null == t) return this._runners.map(Xi);
                    let n = 0;
                    const s = this.getEndTime();
                    if (e = e || 0, null == i || "last" === i || "after" === i) n = s;
                    else if ("absolute" === i || "start" === i) n = e, e = 0;
                    else if ("now" === i) n = this._time;
                    else if ("relative" === i) {
                        const i = this.getRunnerInfoById(t.id);
                        i && (n = i.start + e, e = 0)
                    } else {
                        if ("with-last" !== i) throw new Error('Invalid value for the "when" parameter'); {
                            const t = this.getLastRunnerInfo(),
                                e = t ? t.start : this._time;
                            n = e
                        }
                    }
                    t.unschedule(), t.timeline(this);
                    const r = t.persist(),
                        o = {
                            persist: null === r ? this._persist : r,
                            start: n + e,
                            runner: t
                        };
                    return this._lastRunnerId = t.id, this._runners.push(o), this._runners.sort(((t, e) => t.start - e.start)), this._runnerIds = this._runners.map((t => t.runner.id)), this.updateTime()._continue(), this
                }
                seek(t) {
                    return this.time(this._time + t)
                }
                source(t) {
                    return null == t ? this._timeSource : (this._timeSource = t, this)
                }
                speed(t) {
                    return null == t ? this._speed : (this._speed = t, this)
                }
                stop() {
                    return this.time(0), this.pause()
                }
                time(t) {
                    return null == t ? this._time : (this._time = t, this._continue(!0))
                }
                unschedule(t) {
                    const e = this._runnerIds.indexOf(t.id);
                    return e < 0 || (this._runners.splice(e, 1), this._runnerIds.splice(e, 1), t.timeline(null)), this
                }
                updateTime() {
                    return this.active() || (this._lastSourceTime = this._timeSource()), this
                }
                _continue(t = !1) {
                    return Bi.cancelFrame(this._nextFrame), this._nextFrame = null, t ? this._stepImmediate() : (this._paused || (this._nextFrame = Bi.frame(this._step)), this)
                }
                _stepFn(t = !1) {
                    const e = this._timeSource();
                    let i = e - this._lastSourceTime;
                    t && (i = 0);
                    const n = this._speed * i + (this._time - this._lastStepTime);
                    this._lastSourceTime = e, t || (this._time += n, this._time = this._time < 0 ? 0 : this._time), this._lastStepTime = this._time, this.fire("time", this._time);
                    for (let r = this._runners.length; r--;) {
                        const t = this._runners[r],
                            e = t.runner,
                            i = this._time - t.start;
                        i <= 0 && e.reset()
                    }
                    let s = !1;
                    for (let r = 0, o = this._runners.length; r < o; r++) {
                        const t = this._runners[r],
                            e = t.runner;
                        let i = n;
                        const h = this._time - t.start;
                        if (h <= 0) {
                            s = !0;
                            continue
                        }
                        if (h < i && (i = h), !e.active()) continue;
                        const a = e.step(i).done;
                        if (a) {
                            if (!0 !== t.persist) {
                                const i = e.duration() - e.time() + this._time;
                                i + t.persist < this._time && (e.unschedule(), --r, --o)
                            }
                        } else s = !0
                    }
                    return s && !(this._speed < 0 && 0 === this._time) || this._runnerIds.length && this._speed < 0 && this._time > 0 ? this._continue() : (this.pause(), this.fire("finished")), this
                }
            }
            c({
                Element: {
                    timeline: function(t) {
                        return null == t ? (this._timeline = this._timeline || new Hi, this._timeline) : (this._timeline = t, this)
                    }
                }
            });
            class Zi extends ae {
                constructor(t) {
                    super(), this.id = Zi.id++, t = null == t ? le.duration : t, t = "function" === typeof t ? new ri(t) : t, this._element = null, this._timeline = null, this.done = !1, this._queue = [], this._duration = "number" === typeof t && t, this._isDeclarative = t instanceof ri, this._stepper = this._isDeclarative ? t : new si, this._history = {}, this.enabled = !0, this._time = 0, this._lastTime = 0, this._reseted = !0, this.transforms = new Lt, this.transformId = 1, this._haveReversed = !1, this._reverse = !1, this._loopsDone = 0, this._swing = !1, this._wait = 0, this._times = 1, this._frameId = null, this._persist = !!this._isDeclarative || null
                }
                static sanitise(t, e, i) {
                    let n = 1,
                        s = !1,
                        r = 0;
                    return t = t || le.duration, e = e || le.delay, i = i || "last", "object" !== typeof t || t instanceof ni || (e = t.delay || e, i = t.when || i, s = t.swing || s, n = t.times || n, r = t.wait || r, t = t.duration || le.duration), {
                        duration: t,
                        delay: e,
                        swing: s,
                        times: n,
                        wait: r,
                        when: i
                    }
                }
                active(t) {
                    return null == t ? this.enabled : (this.enabled = t, this)
                }
                addTransform(t, e) {
                    return this.transforms.lmultiplyO(t), this
                }
                after(t) {
                    return this.on("finished", t)
                }
                animate(t, e, i) {
                    const n = Zi.sanitise(t, e, i),
                        s = new Zi(n.duration);
                    return this._timeline && s.timeline(this._timeline), this._element && s.element(this._element), s.loop(n).schedule(n.delay, n.when)
                }
                clearTransform() {
                    return this.transforms = new Lt, this
                }
                clearTransformsFromQueue() {
                    this.done && this._timeline && this._timeline._runnerIds.includes(this.id) || (this._queue = this._queue.filter((t => !t.isTransform)))
                }
                delay(t) {
                    return this.animate(0, t)
                }
                duration() {
                    return this._times * (this._wait + this._duration) - this._wait
                }
                during(t) {
                    return this.queue(null, t)
                }
                ease(t) {
                    return this._stepper = new si(t), this
                }
                element(t) {
                    return null == t ? this._element : (this._element = t, t._prepareRunner(), this)
                }
                finish() {
                    return this.step(1 / 0)
                }
                loop(t, e, i) {
                    return "object" === typeof t && (e = t.swing, i = t.wait, t = t.times), this._times = t || 1 / 0, this._swing = e || !1, this._wait = i || 0, !0 === this._times && (this._times = 1 / 0), this
                }
                loops(t) {
                    const e = this._duration + this._wait;
                    if (null == t) {
                        const t = Math.floor(this._time / e),
                            i = this._time - t * e,
                            n = i / this._duration;
                        return Math.min(t + n, this._times)
                    }
                    const i = Math.floor(t),
                        n = t % 1,
                        s = e * i + this._duration * n;
                    return this.time(s)
                }
                persist(t) {
                    return null == t ? this._persist : (this._persist = t, this)
                }
                position(t) {
                    const e = this._time,
                        i = this._duration,
                        n = this._wait,
                        s = this._times,
                        r = this._swing,
                        o = this._reverse;
                    let h;
                    if (null == t) {
                        const t = function(t) {
                                const e = r * Math.floor(t % (2 * (n + i)) / (n + i)),
                                    s = e && !o || !e && o,
                                    h = Math.pow(-1, s) * (t % (n + i)) / i + s,
                                    a = Math.max(Math.min(h, 1), 0);
                                return a
                            },
                            a = s * (n + i) - n;
                        return h = e <= 0 ? Math.round(t(1e-5)) : e < a ? t(e) : Math.round(t(a - 1e-5)), h
                    }
                    const a = Math.floor(this.loops()),
                        u = r && a % 2 === 0,
                        l = u && !o || o && u;
                    return h = a + (l ? t : 1 - t), this.loops(h)
                }
                progress(t) {
                    return null == t ? Math.min(1, this._time / this.duration()) : this.time(t * this.duration())
                }
                queue(t, e, i, n) {
                    this._queue.push({
                        initialiser: t || ue,
                        runner: e || ue,
                        retarget: i,
                        isTransform: n,
                        initialised: !1,
                        finished: !1
                    });
                    const s = this.timeline();
                    return s && this.timeline()._continue(), this
                }
                reset() {
                    return this._reseted || (this.time(0), this._reseted = !0), this
                }
                reverse(t) {
                    return this._reverse = null == t ? !this._reverse : t, this
                }
                schedule(t, e, i) {
                    if (t instanceof Hi || (i = e, e = t, t = this.timeline()), !t) throw Error("Runner cannot be scheduled without timeline");
                    return t.schedule(this, e, i), this
                }
                step(t) {
                    if (!this.enabled) return this;
                    t = null == t ? 16 : t, this._time += t;
                    const e = this.position(),
                        i = this._lastPosition !== e && this._time >= 0;
                    this._lastPosition = e;
                    const n = this.duration(),
                        s = this._lastTime <= 0 && this._time > 0,
                        r = this._lastTime < n && this._time >= n;
                    this._lastTime = this._time, s && this.fire("start", this);
                    const o = this._isDeclarative;
                    this.done = !o && !r && this._time >= n, this._reseted = !1;
                    let h = !1;
                    return (i || o) && (this._initialise(i), this.transforms = new Lt, h = this._run(o ? t : e), this.fire("step", this)), this.done = this.done || h && o, r && this.fire("finished", this), this
                }
                time(t) {
                    if (null == t) return this._time;
                    const e = t - this._time;
                    return this.step(e), this
                }
                timeline(t) {
                    return "undefined" === typeof t ? this._timeline : (this._timeline = t, this)
                }
                unschedule() {
                    const t = this.timeline();
                    return t && t.unschedule(this), this
                }
                _initialise(t) {
                    if (t || this._isDeclarative)
                        for (let e = 0, i = this._queue.length; e < i; ++e) {
                            const i = this._queue[e],
                                n = this._isDeclarative || !i.initialised && t;
                            t = !i.finished, n && t && (i.initialiser.call(this), i.initialised = !0)
                        }
                }
                _rememberMorpher(t, e) {
                    if (this._history[t] = {
                            morpher: e,
                            caller: this._queue[this._queue.length - 1]
                        }, this._isDeclarative) {
                        const t = this.timeline();
                        t && t.play()
                    }
                }
                _run(t) {
                    let e = !0;
                    for (let i = 0, n = this._queue.length; i < n; ++i) {
                        const n = this._queue[i],
                            s = n.runner.call(this, t);
                        n.finished = n.finished || !0 === s, e = e && n.finished
                    }
                    return e
                }
                _tryRetarget(t, e, i) {
                    if (this._history[t]) {
                        if (!this._history[t].caller.initialised) {
                            const e = this._queue.indexOf(this._history[t].caller);
                            return this._queue.splice(e, 1), !1
                        }
                        this._history[t].caller.retarget ? this._history[t].caller.retarget.call(this, e, i) : this._history[t].morpher.to(e), this._history[t].caller.finished = !1;
                        const n = this.timeline();
                        return n && n.play(), !0
                    }
                    return !1
                }
            }
            Zi.id = 0;
            class Gi {
                constructor(t = new Lt, e = -1, i = !0) {
                    this.transforms = t, this.id = e, this.done = i
                }
                clearTransformsFromQueue() {}
            }
            B([Zi, Gi], {
                mergeWith(t) {
                    return new Gi(t.transforms.lmultiply(this.transforms), t.id)
                }
            });
            const Vi = (t, e) => t.lmultiplyO(e),
                Wi = t => t.transforms;

            function Ui() {
                const t = this._transformationRunners.runners,
                    e = t.map(Wi).reduce(Vi, new Lt);
                this.transform(e), this._transformationRunners.merge(), 1 === this._transformationRunners.length() && (this._frameId = null)
            }
            class Qi {
                constructor() {
                    this.runners = [], this.ids = []
                }
                add(t) {
                    if (this.runners.includes(t)) return;
                    const e = t.id + 1;
                    return this.runners.push(t), this.ids.push(e), this
                }
                clearBefore(t) {
                    const e = this.ids.indexOf(t + 1) || 1;
                    return this.ids.splice(0, e, 0), this.runners.splice(0, e, new Gi).forEach((t => t.clearTransformsFromQueue())), this
                }
                edit(t, e) {
                    const i = this.ids.indexOf(t + 1);
                    return this.ids.splice(i, 1, t + 1), this.runners.splice(i, 1, e), this
                }
                getByID(t) {
                    return this.runners[this.ids.indexOf(t + 1)]
                }
                length() {
                    return this.ids.length
                }
                merge() {
                    let t = null;
                    for (let e = 0; e < this.runners.length; ++e) {
                        const i = this.runners[e],
                            n = t && i.done && t.done && (!i._timeline || !i._timeline._runnerIds.includes(i.id)) && (!t._timeline || !t._timeline._runnerIds.includes(t.id));
                        if (n) {
                            this.remove(i.id);
                            const n = i.mergeWith(t);
                            this.edit(t.id, n), t = n, --e
                        } else t = i
                    }
                    return this
                }
                remove(t) {
                    const e = this.ids.indexOf(t + 1);
                    return this.ids.splice(e, 1), this.runners.splice(e, 1), this
                }
            }
            c({
                Element: {
                    animate(t, e, i) {
                        const n = Zi.sanitise(t, e, i),
                            s = this.timeline();
                        return new Zi(n.duration).loop(n).element(this).timeline(s.play()).schedule(n.delay, n.when)
                    },
                    delay(t, e) {
                        return this.animate(0, t, e)
                    },
                    _clearTransformRunnersBefore(t) {
                        this._transformationRunners.clearBefore(t.id)
                    },
                    _currentTransform(t) {
                        return this._transformationRunners.runners.filter((e => e.id <= t.id)).map(Wi).reduce(Vi, new Lt)
                    },
                    _addRunner(t) {
                        this._transformationRunners.add(t), Bi.cancelImmediate(this._frameId), this._frameId = Bi.immediate(Ui.bind(this))
                    },
                    _prepareRunner() {
                        null == this._frameId && (this._transformationRunners = (new Qi).add(new Gi(new Lt(this))))
                    }
                }
            });
            const Ji = (t, e) => t.filter((t => !e.includes(t)));
            B(Zi, {
                attr(t, e) {
                    return this.styleAttr("attr", t, e)
                },
                css(t, e) {
                    return this.styleAttr("css", t, e)
                },
                styleAttr(t, e, i) {
                    if ("string" === typeof e) return this.styleAttr(t, {
                        [e]: i
                    });
                    let n = e;
                    if (this._tryRetarget(t, n)) return this;
                    let s = new ki(this._stepper).to(n),
                        r = Object.keys(n);
                    return this.queue((function() {
                        s = s.from(this.element()[t](r))
                    }), (function(e) {
                        return this.element()[t](s.at(e).valueOf()), s.done()
                    }), (function(e) {
                        const i = Object.keys(e),
                            o = Ji(i, r);
                        if (o.length) {
                            const e = this.element()[t](o),
                                i = new Ci(s.from()).valueOf();
                            Object.assign(i, e), s.from(i)
                        }
                        const h = new Ci(s.to()).valueOf();
                        Object.assign(h, e), s.to(h), r = i, n = e
                    })), this._rememberMorpher(t, s), this
                },
                zoom(t, e) {
                    if (this._tryRetarget("zoom", t, e)) return this;
                    let i = new ki(this._stepper).to(new fe(t));
                    return this.queue((function() {
                        i = i.from(this.element().zoom())
                    }), (function(t) {
                        return this.element().zoom(i.at(t), e), i.done()
                    }), (function(t, n) {
                        e = n, i.to(t)
                    })), this._rememberMorpher("zoom", i), this
                },
                transform(t, e, i) {
                    if (e = t.relative || e, this._isDeclarative && !e && this._tryRetarget("transform", t)) return this;
                    const n = Lt.isMatrixLike(t);
                    i = null != t.affine ? t.affine : null != i ? i : !n;
                    const s = new ki(this._stepper).type(i ? Mi : Lt);
                    let r, o, h, a, u;

                    function l() {
                        o = o || this.element(), r = r || v(t, o), u = new Lt(e ? void 0 : o), o._addRunner(this), e || o._clearTransformRunnersBefore(this)
                    }

                    function c(l) {
                        e || this.clearTransform();
                        const {
                            x: c,
                            y: d
                        } = new Rt(r).transform(o._currentTransform(this));
                        let f = new Lt({ ...t,
                                origin: [c, d]
                            }),
                            m = this._isDeclarative && h ? h : u;
                        if (i) {
                            f = f.decompose(c, d), m = m.decompose(c, d);
                            const t = f.rotate,
                                e = m.rotate,
                                i = [t - 360, t, t + 360],
                                n = i.map((t => Math.abs(t - e))),
                                s = Math.min(...n),
                                r = n.indexOf(s);
                            f.rotate = i[r]
                        }
                        e && (n || (f.rotate = t.rotate || 0), this._isDeclarative && a && (m.rotate = a)), s.from(m), s.to(f);
                        const p = s.at(l);
                        return a = p.rotate, h = new Lt(p), this.addTransform(h), o._addRunner(this), s.done()
                    }

                    function d(e) {
                        (e.origin || "center").toString() !== (t.origin || "center").toString() && (r = v(e, o)), t = { ...e,
                            origin: r
                        }
                    }
                    return this.queue(l, c, d, !0), this._isDeclarative && this._rememberMorpher("transform", s), this
                },
                x(t, e) {
                    return this._queueNumber("x", t)
                },
                y(t) {
                    return this._queueNumber("y", t)
                },
                dx(t = 0) {
                    return this._queueNumberDelta("x", t)
                },
                dy(t = 0) {
                    return this._queueNumberDelta("y", t)
                },
                dmove(t, e) {
                    return this.dx(t).dy(e)
                },
                _queueNumberDelta(t, e) {
                    if (e = new fe(e), this._tryRetarget(t, e)) return this;
                    const i = new ki(this._stepper).to(e);
                    let n = null;
                    return this.queue((function() {
                        n = this.element()[t](), i.from(n), i.to(n + e)
                    }), (function(e) {
                        return this.element()[t](i.at(e)), i.done()
                    }), (function(t) {
                        i.to(n + new fe(t))
                    })), this._rememberMorpher(t, i), this
                },
                _queueObject(t, e) {
                    if (this._tryRetarget(t, e)) return this;
                    const i = new ki(this._stepper).to(e);
                    return this.queue((function() {
                        i.from(this.element()[t]())
                    }), (function(e) {
                        return this.element()[t](i.at(e)), i.done()
                    })), this._rememberMorpher(t, i), this
                },
                _queueNumber(t, e) {
                    return this._queueObject(t, new fe(e))
                },
                cx(t) {
                    return this._queueNumber("cx", t)
                },
                cy(t) {
                    return this._queueNumber("cy", t)
                },
                move(t, e) {
                    return this.x(t).y(e)
                },
                center(t, e) {
                    return this.cx(t).cy(e)
                },
                size(t, e) {
                    let i;
                    return t && e || (i = this._element.bbox()), t || (t = i.width / i.height * e), e || (e = i.height / i.width * t), this.width(t).height(e)
                },
                width(t) {
                    return this._queueNumber("width", t)
                },
                height(t) {
                    return this._queueNumber("height", t)
                },
                plot(t, e, i, n) {
                    if (4 === arguments.length) return this.plot([t, e, i, n]);
                    if (this._tryRetarget("plot", t)) return this;
                    const s = new ki(this._stepper).type(this._element.MorphArray).to(t);
                    return this.queue((function() {
                        s.from(this._element.array())
                    }), (function(t) {
                        return this._element.plot(s.at(t)), s.done()
                    })), this._rememberMorpher("plot", s), this
                },
                leading(t) {
                    return this._queueNumber("leading", t)
                },
                viewbox(t, e, i, n) {
                    return this._queueObject("viewbox", new Yt(t, e, i, n))
                },
                update(t) {
                    return "object" !== typeof t ? this.update({
                        offset: arguments[0],
                        color: arguments[1],
                        opacity: arguments[2]
                    }) : (null != t.opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color", t.color), null != t.offset && this.attr("offset", t.offset), this)
                }
            }), B(Zi, {
                rx: Ae,
                ry: Te,
                from: $e,
                to: qe
            }), F(Zi, "Runner");
            class Ki extends Se {
                constructor(t, e = t) {
                    super(I("svg", t), e), this.namespace()
                }
                defs() {
                    return this.isRoot() ? R(this.node.querySelector("defs")) || this.put(new Ce) : this.root().defs()
                }
                isRoot() {
                    return !this.node.parentNode || !(this.node.parentNode instanceof O.window.SVGElement) && "#document-fragment" !== this.node.parentNode.nodeName
                }
                namespace() {
                    return this.isRoot() ? this.attr({
                        xmlns: k,
                        version: "1.1"
                    }).attr("xmlns:xlink", S, M).attr("xmlns:svgjs", C, M) : this.root().namespace()
                }
                removeNamespace() {
                    return this.attr({
                        xmlns: null,
                        version: null
                    }).attr("xmlns:xlink", null, M).attr("xmlns:svgjs", null, M)
                }
                root() {
                    return this.isRoot() ? this : super.root()
                }
            }
            c({
                Container: {
                    nested: X((function() {
                        return this.put(new Ki)
                    }))
                }
            }), F(Ki, "Svg", !0);
            class tn extends Se {
                constructor(t, e = t) {
                    super(I("symbol", t), e)
                }
            }

            function en(t) {
                return !1 === this._build && this.clear(), this.node.appendChild(O.document.createTextNode(t)), this
            }

            function nn() {
                return this.node.getComputedTextLength()
            }

            function sn(t, e = this.bbox()) {
                return null == t ? e.x : this.attr("x", this.attr("x") + t - e.x)
            }

            function rn(t, e = this.bbox()) {
                return null == t ? e.y : this.attr("y", this.attr("y") + t - e.y)
            }

            function on(t, e, i = this.bbox()) {
                return this.x(t, i).y(e, i)
            }

            function hn(t, e = this.bbox()) {
                return null == t ? e.cx : this.attr("x", this.attr("x") + t - e.cx)
            }

            function an(t, e = this.bbox()) {
                return null == t ? e.cy : this.attr("y", this.attr("y") + t - e.cy)
            }

            function un(t, e, i = this.bbox()) {
                return this.cx(t, i).cy(e, i)
            }

            function ln(t) {
                return this.attr("x", t)
            }

            function cn(t) {
                return this.attr("y", t)
            }

            function dn(t, e) {
                return this.ax(t).ay(e)
            }

            function fn(t) {
                return this._build = !!t, this
            }
            c({
                Container: {
                    symbol: X((function() {
                        return this.put(new tn)
                    }))
                }
            }), F(tn, "Symbol");
            var mn = {
                __proto__: null,
                plain: en,
                length: nn,
                x: sn,
                y: rn,
                move: on,
                cx: hn,
                cy: an,
                center: un,
                ax: ln,
                ay: cn,
                amove: dn,
                build: fn
            };
            class pn extends Oe {
                constructor(t, e = t) {
                    super(I("text", t), e), this.dom.leading = new fe(1.3), this._rebuild = !0, this._build = !1
                }
                leading(t) {
                    return null == t ? this.dom.leading : (this.dom.leading = new fe(t), this.rebuild())
                }
                rebuild(t) {
                    if ("boolean" === typeof t && (this._rebuild = t), this._rebuild) {
                        const t = this;
                        let e = 0;
                        const i = this.dom.leading;
                        this.each((function(n) {
                            const s = O.window.getComputedStyle(this.node).getPropertyValue("font-size"),
                                r = i * new fe(s);
                            this.dom.newLined && (this.attr("x", t.attr("x")), "\n" === this.text() ? e += r : (this.attr("dy", n ? r + e : 0), e = 0))
                        })), this.fire("rebuild")
                    }
                    return this
                }
                setData(t) {
                    return this.dom = t, this.dom.leading = new fe(t.leading || 1.3), this
                }
                text(t) {
                    if (void 0 === t) {
                        const e = this.node.childNodes;
                        let i = 0;
                        t = "";
                        for (let n = 0, s = e.length; n < s; ++n) "textPath" !== e[n].nodeName ? (n !== i && 3 !== e[n].nodeType && !0 === R(e[n]).dom.newLined && (t += "\n"), t += e[n].textContent) : 0 === n && (i = 1);
                        return t
                    }
                    if (this.clear().build(!0), "function" === typeof t) t.call(this, this);
                    else {
                        t = (t + "").split("\n");
                        for (let e = 0, i = t.length; e < i; e++) this.newLine(t[e])
                    }
                    return this.build(!1).rebuild()
                }
            }
            B(pn, mn), c({
                Container: {
                    text: X((function(t = "") {
                        return this.put(new pn).text(t)
                    })),
                    plain: X((function(t = "") {
                        return this.put(new pn).plain(t)
                    }))
                }
            }), F(pn, "Text");
            class gn extends Oe {
                constructor(t, e = t) {
                    super(I("tspan", t), e), this._build = !1
                }
                dx(t) {
                    return this.attr("dx", t)
                }
                dy(t) {
                    return this.attr("dy", t)
                }
                newLine() {
                    this.dom.newLined = !0;
                    const t = this.parent();
                    if (!(t instanceof pn)) return this;
                    const e = t.index(this),
                        i = O.window.getComputedStyle(this.node).getPropertyValue("font-size"),
                        n = t.dom.leading * new fe(i);
                    return this.dy(e ? n : 0).attr("x", t.x())
                }
                text(t) {
                    return null == t ? this.node.textContent + (this.dom.newLined ? "\n" : "") : ("function" === typeof t ? (this.clear().build(!0), t.call(this, this), this.build(!1)) : this.plain(t), this)
                }
            }
            B(gn, mn), c({
                Tspan: {
                    tspan: X((function(t = "") {
                        const e = new gn;
                        return this._build || this.clear(), this.put(e).text(t)
                    }))
                },
                Text: {
                    newLine: function(t = "") {
                        return this.tspan(t).newLine()
                    }
                }
            }), F(gn, "Tspan");
            class yn extends Oe {
                constructor(t, e = t) {
                    super(I("circle", t), e)
                }
                radius(t) {
                    return this.attr("r", t)
                }
                rx(t) {
                    return this.attr("r", t)
                }
                ry(t) {
                    return this.rx(t)
                }
                size(t) {
                    return this.radius(new fe(t).divide(2))
                }
            }
            B(yn, {
                x: je,
                y: Ne,
                cx: Ee,
                cy: Ie,
                width: Re,
                height: De
            }), c({
                Container: {
                    circle: X((function(t = 0) {
                        return this.put(new yn).size(t).move(0, 0)
                    }))
                }
            }), F(yn, "Circle");
            class wn extends Se {
                constructor(t, e = t) {
                    super(I("clipPath", t), e)
                }
                remove() {
                    return this.targets().forEach((function(t) {
                        t.unclip()
                    })), super.remove()
                }
                targets() {
                    return Qt('svg [clip-path*="' + this.id() + '"]')
                }
            }
            c({
                Container: {
                    clip: X((function() {
                        return this.defs().put(new wn)
                    }))
                },
                Element: {
                    clipper() {
                        return this.reference("clip-path")
                    },
                    clipWith(t) {
                        const e = t instanceof wn ? t : this.parent().clip().add(t);
                        return this.attr("clip-path", 'url("#' + e.id() + '")')
                    },
                    unclip() {
                        return this.attr("clip-path", null)
                    }
                }
            }), F(wn, "ClipPath");
            class xn extends we {
                constructor(t, e = t) {
                    super(I("foreignObject", t), e)
                }
            }

            function _n(t, e) {
                return this.children().forEach(((i, n) => {
                    let s;
                    try {
                        s = i.bbox()
                    } catch (a) {
                        return
                    }
                    const r = new Lt(i),
                        o = r.translate(t, e).transform(r.inverse()),
                        h = new Rt(s.x, s.y).transform(o);
                    i.move(h.x, h.y)
                })), this
            }

            function bn(t) {
                return this.dmove(t, 0)
            }

            function vn(t) {
                return this.dmove(0, t)
            }

            function kn(t, e = this.bbox()) {
                return null == t ? e.height : this.size(e.width, t, e)
            }

            function zn(t = 0, e = 0, i = this.bbox()) {
                const n = t - i.x,
                    s = e - i.y;
                return this.dmove(n, s)
            }

            function Mn(t, e, i = this.bbox()) {
                const n = b(this, t, e, i),
                    s = n.width / i.width,
                    r = n.height / i.height;
                return this.children().forEach(((t, e) => {
                    const n = new Rt(i).transform(new Lt(t).inverse());
                    t.scale(s, r, n.x, n.y)
                })), this
            }

            function Sn(t, e = this.bbox()) {
                return null == t ? e.width : this.size(t, e.height, e)
            }

            function Cn(t, e = this.bbox()) {
                return null == t ? e.x : this.move(t, e.y, e)
            }

            function On(t, e = this.bbox()) {
                return null == t ? e.y : this.move(e.x, t, e)
            }
            c({
                Container: {
                    foreignObject: X((function(t, e) {
                        return this.put(new xn).size(t, e)
                    }))
                }
            }), F(xn, "ForeignObject");
            var An = {
                __proto__: null,
                dmove: _n,
                dx: bn,
                dy: vn,
                height: kn,
                move: zn,
                size: Mn,
                width: Sn,
                x: Cn,
                y: On
            };
            class Tn extends Se {
                constructor(t, e = t) {
                    super(I("g", t), e)
                }
            }
            B(Tn, An), c({
                Container: {
                    group: X((function() {
                        return this.put(new Tn)
                    }))
                }
            }), F(Tn, "G");
            class jn extends Se {
                constructor(t, e = t) {
                    super(I("a", t), e)
                }
                target(t) {
                    return this.attr("target", t)
                }
                to(t) {
                    return this.attr("href", t, S)
                }
            }
            B(jn, An), c({
                Container: {
                    link: X((function(t) {
                        return this.put(new jn).to(t)
                    }))
                },
                Element: {
                    unlink() {
                        const t = this.linker();
                        if (!t) return this;
                        const e = t.parent();
                        if (!e) return this.remove();
                        const i = e.index(t);
                        return e.add(this, i), t.remove(), this
                    },
                    linkTo(t) {
                        let e = this.linker();
                        return e || (e = new jn, this.wrap(e)), "function" === typeof t ? t.call(e, e) : e.to(t), this
                    },
                    linker() {
                        const t = this.parent();
                        return t && "a" === t.node.nodeName.toLowerCase() ? t : null
                    }
                }
            }), F(jn, "A");
            class Nn extends Se {
                constructor(t, e = t) {
                    super(I("mask", t), e)
                }
                remove() {
                    return this.targets().forEach((function(t) {
                        t.unmask()
                    })), super.remove()
                }
                targets() {
                    return Qt('svg [mask*="' + this.id() + '"]')
                }
            }
            c({
                Container: {
                    mask: X((function() {
                        return this.defs().put(new Nn)
                    }))
                },
                Element: {
                    masker() {
                        return this.reference("mask")
                    },
                    maskWith(t) {
                        const e = t instanceof Nn ? t : this.parent().mask().add(t);
                        return this.attr("mask", 'url("#' + e.id() + '")')
                    },
                    unmask() {
                        return this.attr("mask", null)
                    }
                }
            }), F(Nn, "Mask");
            class En extends we {
                constructor(t, e = t) {
                    super(I("stop", t), e)
                }
                update(t) {
                    return ("number" === typeof t || t instanceof fe) && (t = {
                        offset: arguments[0],
                        color: arguments[1],
                        opacity: arguments[2]
                    }), null != t.opacity && this.attr("stop-opacity", t.opacity), null != t.color && this.attr("stop-color", t.color), null != t.offset && this.attr("offset", new fe(t.offset)), this
                }
            }

            function In(t, e) {
                if (!t) return "";
                if (!e) return t;
                let i = t + "{";
                for (const n in e) i += x(n) + ":" + e[n] + ";";
                return i += "}", i
            }
            c({
                Gradient: {
                    stop: function(t, e, i) {
                        return this.put(new En).update(t, e, i)
                    }
                }
            }), F(En, "Stop");
            class Rn extends we {
                constructor(t, e = t) {
                    super(I("style", t), e)
                }
                addText(t = "") {
                    return this.node.textContent += t, this
                }
                font(t, e, i = {}) {
                    return this.rule("@font-face", {
                        fontFamily: t,
                        src: e,
                        ...i
                    })
                }
                rule(t, e) {
                    return this.addText(In(t, e))
                }
            }
            c("Dom", {
                style(t, e) {
                    return this.put(new Rn).rule(t, e)
                },
                fontface(t, e, i) {
                    return this.put(new Rn).font(t, e, i)
                }
            }), F(Rn, "Style");
            class Dn extends pn {
                constructor(t, e = t) {
                    super(I("textPath", t), e)
                }
                array() {
                    const t = this.track();
                    return t ? t.array() : null
                }
                plot(t) {
                    const e = this.track();
                    let i = null;
                    return e && (i = e.plot(t)), null == t ? i : this
                }
                track() {
                    return this.reference("href")
                }
            }
            c({
                Container: {
                    textPath: X((function(t, e) {
                        return t instanceof pn || (t = this.text(t)), t.path(e)
                    }))
                },
                Text: {
                    path: X((function(t, e = !0) {
                        const i = new Dn;
                        let n;
                        if (t instanceof ji || (t = this.defs().path(t)), i.attr("href", "#" + t, S), e)
                            while (n = this.node.firstChild) i.node.appendChild(n);
                        return this.put(i)
                    })),
                    textPath() {
                        return this.findOne("textPath")
                    }
                },
                Path: {
                    text: X((function(t) {
                        return t instanceof pn || (t = (new pn).addTo(this.parent()).text(t)), t.path(this)
                    })),
                    targets() {
                        return Qt("svg textPath").filter((t => (t.attr("href") || "").includes(this.id())))
                    }
                }
            }), Dn.prototype.MorphArray = bi, F(Dn, "TextPath");
            class Fn extends Oe {
                constructor(t, e = t) {
                    super(I("use", t), e)
                }
                use(t, e) {
                    return this.attr("href", (e || "") + "#" + t, S)
                }
            }
            c({
                Container: {
                    use: X((function(t, e) {
                        return this.put(new Fn).use(t, e)
                    }))
                }
            }), F(Fn, "Use");
            const Ln = E;
            B([Ki, tn, He, Ye, ti], d("viewbox")), B([Ke, Pi, Li, ji], d("marker")), B(pn, d("Text")), B(ji, d("Path")), B(Ce, d("Defs")), B([pn, gn], d("Tspan")), B([$i, Le, Xe, Zi], d("radius")), B(ae, d("EventTarget")), B(ye, d("Dom")), B(we, d("Element")), B(Oe, d("Shape")), B([Se, Pe], d("Container")), B(Xe, d("Gradient")), B(Zi, d("Runner")), Wt.extend(f()), Ai([fe, It, Yt, Lt, de, Ze, bi, Rt]), Ti();
            var Pn = {
                    name: "Mock",
                    props: {
                        data: Object,
                        mockup: Object
                    },
                    data() {
                        return {
                            draw: null
                        }
                    },
                    computed: {
                        id() {
                            return (0, r.lV)(this.data.id)
                        }
                    },
                    watch: {
                        "data.color": function() {
                            this.updateBackground()
                        },
                        "data.design": function() {
                            this.updateDesign()
                        },
                        mockup: function() {
                            this.updateMockup()
                        }
                    },
                    async mounted() {
                        this.draw = Ln().addTo(`#${this.id}`).size("100%", "100%").attr({
                            viewBox: `0 0 ${this.mockup.size.width} ${this.mockup.size.height}`
                        }), this.initMock()
                    },
                    methods: {
                        async initMock() {
                            this.addBackground(), this.mockup.onTop ? (await this.addMockup(), this.addDesign()) : (this.addDesign(), await this.addMockup())
                        },
                        async clearMock(t) {
                            Ln(`#${t}`).clear()
                        },
                        updateMock() {
                            this.clearMock(this.id), this.initMock()
                        },
                        async addMockup() {
                            this.draw.image(this.mockup.url).width(this.mockup.size.width).height(this.mockup.size.height).addClass(`mockup-${this.id}`)
                        },
                        addBackground() {
                            this.draw.rect(this.mockup.size.width, this.mockup.size.height).addClass(`bg-${this.id}`).fill(this.data.color)
                        },
                        addDesign() {
                            this.draw.image(this.data.design).addClass(`design-${this.id} ${this.mockup.design.class&&this.mockup.design.class}`).move(this.mockup.design.position.x, this.mockup.design.position.y).width(this.mockup.design.size.width).height(this.mockup.design.size.height).transform(this.mockup.design.transform)
                        },
                        updateBackground() {
                            var t = Ln(`#${this.id}`).findOne(`.bg-${this.id}`);
                            t.fill(this.data.color)
                        },
                        updateDesign() {
                            var t = Ln(`#${this.id}`).findOne(`.design-${this.id}`);
                            t && t.load(this.data.design)
                        },
                        updateMockup() {
                            var t = Ln(`#${this.id}`).findOne(`.mockup-${this.id}`);
                            t && t.load(this.mockup.url)
                        }
                    }
                },
                $n = Pn,
                qn = i(79917),
                Bn = (0, qn.Z)($n, h, a, !1, null, null, null),
                Xn = Bn.exports,
                Yn = i(667),
                Hn = i(77989),
                Zn = i(60303),
                Gn = i(81042),
                Vn = i(44011),
                Wn = i(14551),
                Un = i(49749),
                Qn = i(38393),
                Jn = i(90335),
                Kn = i(7077),
                ts = i(91327),
                es = i(75589),
                is = i(60190),
                ns = i(60115),
                ss = i(10209),
                rs = i(39918),
                os = i(3005),
                hs = i(21078),
                as = i(2734),
                us = i(31450),
                ls = i(47646),
                cs = i(91296),
                ds = i(25694),
                fs = i(92696),
                ms = i(95622),
                ps = i(53860),
                gs = i(4373),
                ys = i(66257),
                ws = i(83068),
                xs = i(85424),
                _s = i(93140),
                bs = i(1631),
                vs = i(7416),
                ks = i(24088),
                zs = i(88986),
                Ms = i(83281),
                Ss = i(55140),
                Cs = i(81146),
                Os = i(93695),
                As = i(12326),
                Ts = i(84991),
                js = i(70683),
                Ns = i(93848),
                Es = i(84374),
                Is = i(96088);
            const Rs = {
                "dtg-ml-rnhs": {
                    id: "dtg-ml-rnhs",
                    name: "noface-man",
                    front: {
                        url: Hn,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 120,
                                y: 165
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 192.75,
                                width: 150
                            }
                        }
                    },
                    back: {
                        url: Zn,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 128,
                                y: 138
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 192.75,
                                width: 150
                            }
                        }
                    }
                },
                "dtf-ml-rnhs": {
                    id: "dtg-ml-rnhs",
                    name: "noface-man",
                    front: {
                        url: Hn,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 120,
                                y: 165
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 192.75,
                                width: 150
                            }
                        }
                    },
                    back: {
                        url: Zn,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 128,
                                y: 138
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 192.75,
                                width: 150
                            }
                        }
                    }
                },
                "dtg-ml-rnfs": {
                    id: "dtg-ml-rnfs",
                    name: "noface-man",
                    front: {
                        url: Gn,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 127,
                                y: 162.5
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 192.75,
                                width: 150
                            }
                        }
                    }
                },
                "dtg-ml-plhs": {
                    id: "dtg-ml-plhs",
                    name: "hoodie",
                    front: {
                        url: Vn,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 230,
                                y: 172
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 40,
                                width: 40
                            }
                        }
                    }
                },
                "dtg-ml-lgcu": {
                    id: "dtg-ml-lgcu",
                    name: "noface-man",
                    front: {
                        url: Wn,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 129,
                                y: 130
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 173.4,
                                width: 135
                            }
                        }
                    }
                },
                "dtg-fm-rnhs": {
                    id: "dtg-fm-rnhs",
                    name: "noface-man",
                    front: {
                        url: Un,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 125,
                                y: 180
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 192.75,
                                width: 150
                            }
                        }
                    },
                    back: {
                        url: Qn,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 129,
                                y: 140
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 192.75,
                                width: 150
                            }
                        }
                    }
                },
                "dtg-fm-ct": {
                    id: "dtg-fm-ct",
                    name: "noface-man",
                    front: {
                        url: Jn,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 133,
                                y: 195
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 156,
                                width: 130
                            }
                        }
                    }
                },
                "dtg-fm-chd": {
                    id: "dtg-fm-chd",
                    name: "noface-man",
                    front: {
                        url: Kn,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 145,
                                y: 207
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 126,
                                width: 105
                            }
                        }
                    }
                },
                "dtg-fm-css": {
                    id: "dtg-fm-css",
                    name: "noface-man",
                    front: {
                        url: ts,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 147,
                                y: 206
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 95,
                                width: 95
                            }
                        }
                    }
                },
                "dtg-by-rnhs": {
                    id: "dtg-by-rnhs",
                    name: "noface-man",
                    front: {
                        url: es,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 137,
                                y: 175
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 150,
                                width: 125
                            }
                        }
                    }
                },
                "dtg-gl-rnhs": {
                    id: "dtg-gl-rnhs",
                    name: "noface-man",
                    front: {
                        url: is,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 150,
                                y: 190
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 134.4,
                                width: 112
                            }
                        }
                    }
                },
                "dtg-kd-hd": {
                    id: "dtg-kd-hd",
                    name: "kid's hoodie",
                    front: {
                        url: ds,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 145,
                                y: 220
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 113,
                                width: 100
                            }
                        }
                    }
                },
                "dtg-ux-rnhs": {
                    id: "dtg-ux-rnhs",
                    name: "noface-man",
                    front: {
                        url: Hn,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 120,
                                y: 165
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 192.75,
                                width: 150
                            }
                        }
                    },
                    back: {
                        url: Zn,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 128,
                                y: 138
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 192.75,
                                width: 150
                            }
                        }
                    }
                },
                "dtf-ux-rnhs": {
                    id: "dtg-ux-rnhs",
                    name: "noface-man",
                    front: {
                        url: Hn,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 120,
                                y: 165
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 192.75,
                                width: 150
                            }
                        }
                    },
                    back: {
                        url: Zn,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 128,
                                y: 138
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 192.75,
                                width: 150
                            }
                        }
                    }
                },
                "dtg-ux-os": {
                    id: "dtg-ux-os",
                    name: "oversized  tshirt",
                    front: {
                        url: ns,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 131,
                                y: 165
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 176,
                                width: 137
                            }
                        }
                    },
                    back: {
                        url: ss,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 126,
                                y: 132
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 193,
                                width: 150
                            }
                        }
                    }
                },
                "dtg-ux-hd": {
                    id: "dtg-ux-hd",
                    name: "hoodie",
                    front: {
                        url: rs,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 150,
                                y: 196
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 118.6,
                                width: 105
                            }
                        }
                    },
                    back: {
                        url: os,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 132.5,
                                y: 185
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 170,
                                width: 132
                            }
                        }
                    }
                },
                "dtg-ux-ss": {
                    id: "dtg-ux-ss",
                    name: "hoodie",
                    front: {
                        url: hs,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 130,
                                y: 150
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 176,
                                width: 137
                            }
                        }
                    },
                    back: {
                        url: as,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 135,
                                y: 130
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 176,
                                width: 137
                            }
                        }
                    }
                },
                "dtg-ux-jg": {
                    id: "dtg-ux-jg",
                    name: "hoodie",
                    front: {
                        url: us,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 235,
                                y: 125
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 40,
                                width: 40
                            }
                        }
                    }
                },
                "dtg-fm-mths": {
                    id: "dtg-fm-mths",
                    name: "noface-man",
                    front: {
                        url: ls,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 115,
                                y: 200
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 224,
                                width: 175
                            }
                        }
                    }
                },
                "dtg-kd-rnpm": {
                    id: "dtg-kd-rnpm",
                    name: "noface-man",
                    front: {
                        url: cs,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 141,
                                y: 153
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 142,
                                width: 125
                            }
                        }
                    }
                },
                "sbl-hm-frps": {
                    id: "sbl-hm-frps",
                    name: "framed poster",
                    front: {
                        url: fs,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 94,
                                y: 95
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 304,
                                width: 214
                            }
                        }
                    }
                },
                "sbl-hm-cosq": {
                    id: "sbl-hm-cosq",
                    name: "Coaster Square",
                    front: {
                        url: js,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 138,
                                y: 63
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 169,
                                width: 169
                            }
                        }
                    }
                },
                "sbl-hm-coro": {
                    id: "sbl-hm-coro",
                    name: "Coaster Circle",
                    front: {
                        url: Ns,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 44,
                                y: 145.5
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 173.5,
                                width: 173.5
                            }
                        }
                    }
                },
                "sbl-hm-cc": {
                    id: "sbl-hm-cc",
                    name: "Pillow Cover",
                    front: {
                        url: Es,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 47,
                                y: 95
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 312,
                                width: 312
                            }
                        }
                    }
                },
                "sbl-hm-ca8x12": {
                    id: "sbl-hm-ca8x12",
                    name: "Canvas 8x12",
                    front: {
                        url: ws,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 185,
                                y: 84
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 283,
                                width: 188
                            }
                        }
                    }
                },
                "sbl-hm-ca8x8": {
                    id: "sbl-hm-ca8x8",
                    name: "Canvas 8x12",
                    front: {
                        url: xs,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 165,
                                y: 110
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 179,
                                width: 179
                            }
                        }
                    }
                },
                "sbl-hm-frps12x12": {
                    id: "sbl-hm-frps12x12",
                    name: "Framed Poster 12x12 Inchers",
                    front: {
                        url: ys,
                        onTop: !0,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 115.5,
                                y: 88
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 174.5,
                                width: 174.5
                            }
                        }
                    }
                },
                "sbl-hm-frps8x8": {
                    id: "sbl-hm-frps8x8",
                    name: "Framed Poster 8x8 Inchers",
                    front: {
                        url: gs,
                        onTop: !0,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 128.5,
                                y: 105
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 148,
                                width: 148
                            }
                        }
                    }
                },
                "sbl-hm-frpsa3": {
                    id: "sbl-hm-frpsa3",
                    name: "Framed Poster A3",
                    front: {
                        url: ps,
                        onTop: !0,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 165.5,
                                y: 81.7
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 218,
                                width: 154.5
                            }
                        }
                    }
                },
                "sbl-hm-frpsa4": {
                    id: "sbl-hm-frpsa4",
                    name: "Framed Poster A4",
                    front: {
                        url: ms,
                        onTop: !0,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 190.5,
                                y: 75.7
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 190.5,
                                width: 133
                            }
                        }
                    }
                },
                "sbl-hm-ps": {
                    id: "sbl-hm-ps",
                    name: "Poster",
                    front: {
                        url: vs,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 89,
                                y: 92
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 306,
                                width: 216
                            }
                        }
                    }
                },
                "sbl-hm-npa5": {
                    id: "sbl-hm-npa5",
                    name: "Notepad",
                    front: {
                        url: _s,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 108,
                                y: 92
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 323,
                                width: 229
                            }
                        }
                    },
                    back: {
                        url: bs,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 71,
                                y: 92
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 325.8,
                                width: 231
                            }
                        }
                    }
                },
                "sbl-ac-pc": {
                    id: "sbl-ac-pc",
                    name: "Phone Cover",
                    front: {
                        url: ks,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 97,
                                y: 61
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 384,
                                width: 221.5
                            }
                        }
                    }
                },
                "sbl-ac-tb": {
                    id: "sbl-ac-tb",
                    name: "Tote Bag",
                    front: {
                        url: zs,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 135,
                                y: 215
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 175,
                                width: 134
                            }
                        }
                    }
                },
                "sbl-ac-tbz": {
                    id: "sbl-ac-tb",
                    name: "Tote Bag",
                    front: {
                        url: zs,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 135,
                                y: 215
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 175,
                                width: 134
                            }
                        }
                    }
                },
                "sbl-ac-mp": {
                    id: "sbl-ac-mp",
                    name: "Mouse Pad",
                    front: {
                        url: Os,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 81,
                                y: 137
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 197,
                                width: 234
                            }
                        }
                    }
                },
                "sbl-ac-gp": {
                    id: "sbl-ac-gp",
                    name: "Gaming Pad",
                    front: {
                        url: As,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 16.5,
                                y: 135.5
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 138.5,
                                width: 367
                            }
                        }
                    }
                },
                "sbl-ac-pg": {
                    id: "sbl-ac-pg",
                    name: "Pop Grip",
                    front: {
                        url: Ms,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 156,
                                y: 180
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 112,
                                width: 112
                            }
                        }
                    }
                },
                "sbl-ac-bb": {
                    id: "sbl-ac-bb",
                    name: "Button Badge",
                    front: {
                        url: Ss,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 115,
                                y: 61
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 174,
                                width: 174
                            }
                        }
                    }
                },
                "sbl-hm-cmw": {
                    id: "sbl-hm-cmw",
                    name: "Coffee Mug",
                    front: {
                        url: Cs,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 132,
                                y: 185
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 152,
                                width: 127
                            }
                        }
                    }
                },
                "sbl-hm-cmb": {
                    id: "sbl-hm-cmw",
                    name: "Coffee Mug",
                    front: {
                        url: Cs,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 132,
                                y: 185
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 152,
                                width: 127
                            }
                        }
                    }
                },
                "sbl-hm-sb": {
                    id: "sbl-hm-sb",
                    name: "Sipper Bottle",
                    front: {
                        url: Ts,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 140.5,
                                y: 175
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 274,
                                width: 124
                            }
                        }
                    }
                },
                "vnl-hm-dcst": {
                    id: "vnl-hm-dcst",
                    name: "Stickers",
                    front: {
                        url: Is,
                        onTop: !0,
                        size: {
                            width: 400,
                            height: 500
                        },
                        design: {
                            position: {
                                x: 185,
                                y: 205
                            },
                            transform: {
                                rotate: 0
                            },
                            size: {
                                height: 140,
                                width: 140
                            },
                            class: "sticker-outline"
                        }
                    }
                }
            };
            var Ds = Rs;

            function Fs(t) {
                let e = Ls(t),
                    i = t.pku ? t.pku : t.of.bku;
                return t.variant ? Ds[i][t.variant] : Ds[i][e]
            }

            function Ls(t) {
                if (t.variant) return t.variant;
                let e = Object.keys(t.of.design);
                return e.length && 1 == e.length ? e[0] : "front"
            }
            var Ps = {
                    name: "Mocky",
                    components: {
                        Mock: Xn,
                        BlinkImage: Yn.Z
                    },
                    props: {
                        data: {
                            type: Object,
                            default: () => ({
                                images: [],
                                pku: "dtg-ml-rnhs",
                                color: "#FFFFFF",
                                variant: "front"
                            })
                        },
                        extraFeat: {
                            type: Object,
                            default: () => ({
                                show: !1,
                                small: !1
                            })
                        },
                        forceMocky: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data() {
                        return {
                            design: null,
                            mockup: Fs(this.data),
                            show: !1,
                            isVisible: !1,
                            customMockups: []
                        }
                    },
                    watch: {
                        data(t) {
                            this.mockup = Fs(t)
                        }
                    },
                    computed: {
                        color() {
                            if (this.data && (0, o.$n)(this.data.bku)) {
                                let t = (0, o.z1)(this.data.bku);
                                return t.hex
                            }
                            if (this.data && this.data.variants && this.data.variants.color) {
                                let t = (0, r.VQ)(this.data.variants.color);
                                return t.hex
                            }
                            return this.data.color
                        }
                    },
                    async created() {
                        this.data.of && this.data.of.design && (this.customMockups = (0, r.Wz)(this.data));
                        let t = Ls(this.data);
                        if (t && this.data.images && this.data.images[t]) this.design = this.data.images && this.data.images[t].thumbnail;
                        else {
                            if (!this.data.images || !this.data.images.primary || "front" != t) return; {
                                let t = this.data.images.primary,
                                    e = t && t.thumbnail ? t.thumbnail : this.data.design;
                                e && (this.design = await this.getImg(e), this.isLoaded = !0)
                            }
                        }
                    },
                    methods: {
                        getExtraFeature: o.W7,
                        visibilityChanged(t, e) {
                            this.show || (this.show = t, this.isVisible = t)
                        }
                    }
                },
                $s = Ps,
                qs = (0, qn.Z)($s, n, s, !1, null, "2a1f1c85", null),
                Bs = qs.exports
        },
        46504: function(t, e, i) {
            i.d(e, {
                Z: function() {
                    return x
                }
            });
            var n = i(26427),
                s = i(1616),
                r = i(69507);
            const o = ["sm", "md", "lg", "xl"],
                h = ["start", "end", "center"];

            function a(t, e) {
                return o.reduce(((i, n) => (i[t + (0, r.jC)(n)] = e(), i)), {})
            }
            const u = t => [...h, "baseline", "stretch"].includes(t),
                l = a("align", (() => ({
                    type: String,
                    default: null,
                    validator: u
                }))),
                c = t => [...h, "space-between", "space-around"].includes(t),
                d = a("justify", (() => ({
                    type: String,
                    default: null,
                    validator: c
                }))),
                f = t => [...h, "space-between", "space-around", "stretch"].includes(t),
                m = a("alignContent", (() => ({
                    type: String,
                    default: null,
                    validator: f
                }))),
                p = {
                    align: Object.keys(l),
                    justify: Object.keys(d),
                    alignContent: Object.keys(m)
                },
                g = {
                    align: "align",
                    justify: "justify",
                    alignContent: "align-content"
                };

            function y(t, e, i) {
                let n = g[t];
                if (null != i) {
                    if (e) {
                        const i = e.replace(t, "");
                        n += `-${i}`
                    }
                    return n += `-${i}`, n.toLowerCase()
                }
            }
            const w = new Map;
            var x = n["default"].extend({
                name: "v-row",
                functional: !0,
                props: {
                    tag: {
                        type: String,
                        default: "div"
                    },
                    dense: Boolean,
                    noGutters: Boolean,
                    align: {
                        type: String,
                        default: null,
                        validator: u
                    },
                    ...l,
                    justify: {
                        type: String,
                        default: null,
                        validator: c
                    },
                    ...d,
                    alignContent: {
                        type: String,
                        default: null,
                        validator: f
                    },
                    ...m
                },
                render(t, {
                    props: e,
                    data: i,
                    children: n
                }) {
                    let r = "";
                    for (const s in e) r += String(e[s]);
                    let o = w.get(r);
                    if (!o) {
                        let t;
                        for (t in o = [], p) p[t].forEach((i => {
                            const n = e[i],
                                s = y(t, i, n);
                            s && o.push(s)
                        }));
                        o.push({
                            "no-gutters": e.noGutters,
                            "row--dense": e.dense,
                            [`align-${e.align}`]: e.align,
                            [`justify-${e.justify}`]: e.justify,
                            [`align-content-${e.alignContent}`]: e.alignContent
                        }), w.set(r, o)
                    }
                    return t(e.tag, (0, s.ZP)(i, {
                        staticClass: "row",
                        class: o
                    }), n)
                }
            })
        },
        33983: function(t, e, i) {
            i.d(e, {
                Z: function() {
                    return f
                }
            });
            var n = i(43115),
                s = i(71898),
                r = i(95529),
                o = i(69507),
                h = (0, r.Z)(s.Z).extend({
                    name: "v-responsive",
                    props: {
                        aspectRatio: [String, Number],
                        contentClass: String
                    },
                    computed: {
                        computedAspectRatio() {
                            return Number(this.aspectRatio)
                        },
                        aspectStyle() {
                            return this.computedAspectRatio ? {
                                paddingBottom: 1 / this.computedAspectRatio * 100 + "%"
                            } : void 0
                        },
                        __cachedSizer() {
                            return this.aspectStyle ? this.$createElement("div", {
                                style: this.aspectStyle,
                                staticClass: "v-responsive__sizer"
                            }) : []
                        }
                    },
                    methods: {
                        genContent() {
                            return this.$createElement("div", {
                                staticClass: "v-responsive__content",
                                class: this.contentClass
                            }, (0, o.z9)(this))
                        }
                    },
                    render(t) {
                        return t("div", {
                            staticClass: "v-responsive",
                            style: this.measurableStyles,
                            on: this.$listeners
                        }, [this.__cachedSizer, this.genContent()])
                    }
                }),
                a = h,
                u = i(52632),
                l = i(1616),
                c = i(96871);
            const d = "undefined" !== typeof window && "IntersectionObserver" in window;
            var f = (0, r.Z)(a, u.Z).extend({
                name: "v-img",
                directives: {
                    intersect: n.Z
                },
                props: {
                    alt: String,
                    contain: Boolean,
                    eager: Boolean,
                    gradient: String,
                    lazySrc: String,
                    options: {
                        type: Object,
                        default: () => ({
                            root: void 0,
                            rootMargin: void 0,
                            threshold: void 0
                        })
                    },
                    position: {
                        type: String,
                        default: "center center"
                    },
                    sizes: String,
                    src: {
                        type: [String, Object],
                        default: ""
                    },
                    srcset: String,
                    transition: {
                        type: [Boolean, String],
                        default: "fade-transition"
                    }
                },
                data() {
                    return {
                        currentSrc: "",
                        image: null,
                        isLoading: !0,
                        calculatedAspectRatio: void 0,
                        naturalWidth: void 0,
                        hasError: !1
                    }
                },
                computed: {
                    computedAspectRatio() {
                        return Number(this.normalisedSrc.aspect || this.calculatedAspectRatio)
                    },
                    normalisedSrc() {
                        return this.src && "object" === typeof this.src ? {
                            src: this.src.src,
                            srcset: this.srcset || this.src.srcset,
                            lazySrc: this.lazySrc || this.src.lazySrc,
                            aspect: Number(this.aspectRatio || this.src.aspect)
                        } : {
                            src: this.src,
                            srcset: this.srcset,
                            lazySrc: this.lazySrc,
                            aspect: Number(this.aspectRatio || 0)
                        }
                    },
                    __cachedImage() {
                        if (!(this.normalisedSrc.src || this.normalisedSrc.lazySrc || this.gradient)) return [];
                        const t = [],
                            e = this.isLoading ? this.normalisedSrc.lazySrc : this.currentSrc;
                        this.gradient && t.push(`linear-gradient(${this.gradient})`), e && t.push(`url("${e}")`);
                        const i = this.$createElement("div", {
                            staticClass: "v-image__image",
                            class: {
                                "v-image__image--preload": this.isLoading, "v-image__image--contain": this.contain, "v-image__image--cover": !this.contain
                            },
                            style: {
                                backgroundImage: t.join(", "),
                                backgroundPosition: this.position
                            },
                            key: +this.isLoading
                        });
                        return this.transition ? this.$createElement("transition", {
                            attrs: {
                                name: this.transition,
                                mode: "in-out"
                            }
                        }, [i]) : i
                    }
                },
                watch: {
                    src() {
                        this.isLoading ? this.loadImage() : this.init(void 0, void 0, !0)
                    },
                    "$vuetify.breakpoint.width": "getSrc"
                },
                mounted() {
                    this.init()
                },
                methods: {
                    init(t, e, i) {
                        if (!d || i || this.eager) {
                            if (this.normalisedSrc.lazySrc) {
                                const t = new Image;
                                t.src = this.normalisedSrc.lazySrc, this.pollForSize(t, null)
                            }
                            this.normalisedSrc.src && this.loadImage()
                        }
                    },
                    onLoad() {
                        this.getSrc(), this.isLoading = !1, this.$emit("load", this.src), this.image && (this.normalisedSrc.src.endsWith(".svg") || this.normalisedSrc.src.startsWith("data:image/svg+xml")) && (this.image.naturalHeight && this.image.naturalWidth ? (this.naturalWidth = this.image.naturalWidth, this.calculatedAspectRatio = this.image.naturalWidth / this.image.naturalHeight) : this.calculatedAspectRatio = 1)
                    },
                    onError() {
                        this.hasError = !0, this.$emit("error", this.src)
                    },
                    getSrc() {
                        this.image && (this.currentSrc = this.image.currentSrc || this.image.src)
                    },
                    loadImage() {
                        const t = new Image;
                        this.image = t, t.onload = () => {
                            t.decode ? t.decode().catch((t => {
                                (0, c.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}` + (t.message ? `\nOriginal error: ${t.message}` : ""), this)
                            })).then(this.onLoad) : this.onLoad()
                        }, t.onerror = this.onError, this.hasError = !1, this.sizes && (t.sizes = this.sizes), this.normalisedSrc.srcset && (t.srcset = this.normalisedSrc.srcset), t.src = this.normalisedSrc.src, this.$emit("loadstart", this.normalisedSrc.src), this.aspectRatio || this.pollForSize(t), this.getSrc()
                    },
                    pollForSize(t, e = 100) {
                        const i = () => {
                            const {
                                naturalHeight: n,
                                naturalWidth: s
                            } = t;
                            n || s ? (this.naturalWidth = s, this.calculatedAspectRatio = s / n) : t.complete || !this.isLoading || this.hasError || null == e || setTimeout(i, e)
                        };
                        i()
                    },
                    genContent() {
                        const t = a.options.methods.genContent.call(this);
                        return this.naturalWidth && this._b(t.data, "div", {
                            style: {
                                width: `${this.naturalWidth}px`
                            }
                        }), t
                    },
                    __genPlaceholder() {
                        const t = (0, o.z9)(this, "placeholder");
                        if (t) {
                            const e = this.isLoading ? [this.$createElement("div", {
                                staticClass: "v-image__placeholder"
                            }, t)] : [];
                            return this.transition ? this.$createElement("transition", {
                                props: {
                                    appear: !0,
                                    name: this.transition
                                }
                            }, e) : e[0]
                        }
                    }
                },
                render(t) {
                    const e = a.options.render.call(this, t),
                        i = (0, l.ZP)(e.data, {
                            staticClass: "v-image",
                            attrs: {
                                "aria-label": this.alt,
                                role: this.alt ? "img" : void 0
                            },
                            class: this.themeClasses,
                            directives: d ? [{
                                name: "intersect",
                                modifiers: {
                                    once: !0
                                },
                                value: {
                                    handler: this.init,
                                    options: this.options
                                }
                            }] : void 0
                        });
                    return e.children = [this.__cachedSizer, this.__cachedImage, this.__genPlaceholder(), this.genContent()], t(e.tag, i, e.children)
                }
            })
        }
    }
]);