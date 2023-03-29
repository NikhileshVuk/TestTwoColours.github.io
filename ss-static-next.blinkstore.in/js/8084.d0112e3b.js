"use strict";
(self["webpackChunkblinkui"] = self["webpackChunkblinkui"] || []).push([
    [8084], {
        95055: function(t, e, n) {
            n.d(e, {
                b: function() {
                    return a
                }
            });
            var r = n(59312),
                i = n(92245),
                o = n(57578),
                s = n(16849),
                a = function(t) {
                    function e() {
                        var e = t.call(this) || this;
                        return e.globalEvents = o.Events.getInstance(), e
                    }
                    return (0, r.ZT)(e, t), e.getInstance = function() {
                        var t = (0, s.Jj)();
                        return this._instance || (t.TIK = t.TIK || {}, t.TIK.INSTANCES = t.TIK.INSTANCES || {}), this._instance ? this._instance : this._instance = t.TIK.INSTANCES.API = t.TIK.INSTANCES.API || new e
                    }, e.prototype.setHTTPAPI = function(t) {
                        this.httpAPI = t
                    }, e.prototype.get = function(t, e) {
                        return (0, r.mG)(this, void 0, void 0, (function() {
                            var n, i, o = this;
                            return (0, r.Jh)(this, (function(r) {
                                if (n = e, "string" == typeof t) return i = {}, "object" == typeof n ? i[t] = n : void 0 === n && (i[t] = {}), n = i, [2, this.httpAPI.send(n).then((function(t) {
                                    return t[0]
                                })).then((function(t) {
                                    return o.resultEvents(t), t
                                }))];
                                if ("object" == typeof t) {
                                    if (Array.isArray(t)) throw new Error("array argument is not supported in API request.");
                                    if ("function" == typeof n) n = t;
                                    else {
                                        if ("object" == typeof n) throw new Error("You cannot pass first & second arg both as object. Valid signatures are get(api,data,cb), get(apis,cb).");
                                        n = t
                                    }
                                    return [2, this.httpAPI.send(n).then((function(t) {
                                        for (var e = {}, r = Object.keys(n), i = 0; i < r.length; ++i) e[r[i]] = t[i], o.resultEvents(t[i]);
                                        return e
                                    }))]
                                }
                                return [2, Promise.reject(new Error("not valid path parameter."))]
                            }))
                        }))
                    }, e.prototype.resultEvents = function(t) {
                        t && t.body && t.body.error && "UnAuthenticated" === t.body.error.code && this.globalEvents.emit("api", "unauthenticated", t)
                    }, e.prototype.getOne = function(t, e, n) {
                        return (0, r.mG)(this, void 0, void 0, (function() {
                            var i;
                            return (0, r.Jh)(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        if ("string" != typeof t) throw new Error("path has to be string. Cannot accept " + typeof t + " in getOne.");
                                        return "function" == typeof e && void 0 === n && (n = e, e = {}, console.warn("getOne is used as getOne(path, callback) while correct parameters are getOne(path, options, callback).")), (i = {})[t] = e, [4, this.get(i)];
                                    case 1:
                                        return [2, r.sent()[t].body]
                                }
                            }))
                        }))
                    }, e.prototype.send = function() {
                        throw new Error("not implemented")
                    }, e.prototype.subscribe = function() {
                        throw new Error("not implemented")
                    }, e
                }(i.v)
        },
        94850: function(t, e, n) {
            n.r(e), n.d(e, {
                API: function() {
                    return r.b
                },
                APIProvider: function() {
                    return c
                },
                HTTPAPI: function() {
                    return a
                }
            });
            var r = n(95055),
                i = n(59312),
                o = function() {},
                s = n(48011),
                a = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.headers = {}, n.setConfig(e), n.fetchConfig = {
                            method: "POST",
                            credentials: "same-origin"
                        }, n.headers = {
                            "Content-Type": "application/json"
                        }, n
                    }
                    return (0, i.ZT)(e, t), e.prototype.setConfig = function(t) {
                        this.config = t, this.baseURL = t.SERVER_URL
                    }, e.prototype.setHeaders = function(t) {
                        this.headers = (0, i.pi)((0, i.pi)({}, this.headers), t)
                    }, e.prototype.send = function(t) {
                        return (0, i.mG)(this, void 0, void 0, (function() {
                            var e, n = this;
                            return (0, i.Jh)(this, (function(r) {
                                return e = [], Object.keys(t).forEach((function(r) {
                                    e.push(fetch(n.baseURL + r + "?_=" + +new Date, (0, i.pi)((0, i.pi)({}, n.fetchConfig), {
                                        headers: n.headers,
                                        body: JSON.stringify(t[r])
                                    })).then((function(t) {
                                        var e = t.headers.get("content-type");
                                        return (e && -1 !== e.indexOf("application/json") ? t.json() : t.text()).then((function(e) {
                                            return t.status > 400 && t.status < 600 && ("object" != typeof e || e.error || (e.error = {
                                                code: t.status
                                            })), {
                                                body: e
                                            }
                                        }))
                                    })))
                                })), [2, Promise.all(e)]
                            }))
                        }))
                    }, e.prototype.isConnected = function() {
                        return (0, s.isOnline)()
                    }, e
                }(o),
                c = function() {
                    function t(t, e) {
                        this.moduleName = t, this.exportsName = e
                    }
                    return t.prototype.beforeRequest = function(t, e) {
                        return (0, i.mG)(this, void 0, void 0, (function() {
                            return (0, i.Jh)(this, (function(t) {
                                return [2, null]
                            }))
                        }))
                    }, t.prototype.handler = function(t, e) {
                        return (0, i.mG)(this, void 0, void 0, (function() {
                            var n, o, s;
                            return (0, i.Jh)(this, (function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.beforeRequest(t, e)];
                                    case 1:
                                        return (n = i.sent()) ? [2, n] : (o = "".concat(this.moduleName, "/").concat(this.exportsName, "/").concat(t), [4, r.b.getInstance().getOne(o, e)]);
                                    case 2:
                                        if ((s = i.sent()).error) throw new Error("".concat(o, " failed. code ").concat(s.error.code));
                                        return [2, s]
                                }
                            }))
                        }))
                    }, t
                }()
        },
        40582: function(t, e, n) {
            n.r(e), n.d(e, {
                CalendarType: function() {
                    return r
                },
                SESSION_EVENTS: function() {
                    return i
                },
                Session: function() {
                    return d
                }
            });
            var r, i, o = n(59312),
                s = n(92245),
                a = n(93655),
                c = n(16849),
                u = n(97035),
                l = n(72135);
            ! function(t) {
                t[t.Gregorian = 0] = "Gregorian", t[t.Hijri = 1] = "Hijri"
            }(r || (r = {})),
            function(t) {
                t.AUTHENTICATED = "authenticated", t.UNAUTHENTICATED = "unauthenticated", t.UPDATED = "updated"
            }(i || (i = {}));
            var d = function(t) {
                function e() {
                    var e = t.call(this) || this;
                    return e.owner = null, e.sessionPromise = Promise.resolve(!1), e.loadedAsync = !1, e.data = {
                        calendarType: r.Gregorian,
                        currency: "USD",
                        currencySymbol: "$",
                        dateFormat: "dd/mm/yyyy",
                        shortDateFormat: "dd/mm/yyyy",
                        longDateFormat: "dd/mm/yyyy",
                        features: {},
                        language: "en",
                        permissions: [],
                        rtl: !1,
                        timeFormat: "hh:mm",
                        timezone: (new Date).getTimezoneOffset(),
                        org: null
                    }, e.validKeys = Object.keys(e.data), e.syncConfig(), e
                }
                return (0, o.ZT)(e, t), e.getInstance = function() {
                    var t = (0, c.Jj)();
                    return this._instance || (t.TIK = t.TIK || {}, t.TIK.INSTANCES = t.TIK.INSTANCES || {}), this._instance ? this._instance : this._instance = t.TIK.INSTANCES.Session = t.TIK.INSTANCES.Session || new e
                }, e.prototype.syncConfig = function() {
                    var t = a.Z.getInstance(),
                        e = new l.e({
                            domain: t["SESSION.DOMAIN"]
                        });
                    if (this.context) this.context.sessionID && t["SESSION.SESSION_ID"] !== this.context.sessionID && t.update({
                        "SESSION.SESSION_ID": this.context.sessionID
                    });
                    else {
                        var n = t["SESSION.SESSION_ID"] || e.getValueRaw("UNI_SESSION");
                        this.context = {
                            scope: "def",
                            sessionID: n
                        }
                    }
                    e.getValueRaw("UNI_SESSION") || e.setValueRaw("UNI_SESSION", this.context.sessionID), this.data.language = t["SESSION.LANG"], this.data.rtl = t["SESSION.RTL"]
                }, e.prototype.isValidKey = function(t) {
                    return -1 !== this.validKeys.indexOf(t)
                }, e.prototype.set = function(t, e) {
                    return !!this.isValidKey(t) && (this.data[t] = e, !0)
                }, e.prototype.get = function(t, e) {
                    return this.isValidKey(t) && void 0 !== this.data[t] ? this.data[t] : e
                }, e.prototype.isAuthenticated = function() {
                    return this._isAuthenticated()
                }, e.prototype._isAuthenticated = function() {
                    return !(!this.owner || !this.owner.username) && this.owner.username !== u.Qq
                }, e.prototype.isAuthenticatedAsync = function() {
                    return (0, o.mG)(this, void 0, void 0, (function() {
                        return (0, o.Jh)(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.sessionPromise];
                                case 1:
                                    return t.sent(), [2, this._isAuthenticated()]
                            }
                        }))
                    }))
                }, e.prototype.getUsername = function() {
                    return this.owner ? this.owner.username : null
                }, e.prototype.getUsernameAsync = function() {
                    return (0, o.mG)(this, void 0, void 0, (function() {
                        return (0, o.Jh)(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.sessionPromise];
                                case 1:
                                    return t.sent(), [2, this.getUsername()]
                            }
                        }))
                    }))
                }, e.prototype.hasPermission = function(t) {
                    return this.owner && this.owner.permissions && this.owner.permissions[t] || !1
                }, e.prototype.hasPermissionAsync = function(t) {
                    return (0, o.mG)(this, void 0, void 0, (function() {
                        return (0, o.Jh)(this, (function(e) {
                            switch (e.label) {
                                case 0:
                                    return [4, this.sessionPromise];
                                case 1:
                                    return e.sent(), [2, this.hasPermission(t)]
                            }
                        }))
                    }))
                }, e.prototype.loadAsync = function(t) {
                    return (0, o.mG)(this, void 0, void 0, (function() {
                        var e;
                        return (0, o.Jh)(this, (function(n) {
                            switch (n.label) {
                                case 0:
                                    return e = this.load, [4, t];
                                case 1:
                                    return [4, e.apply(this, [n.sent()])];
                                case 2:
                                    return n.sent(), this.loadedAsync = !0, [2, !0]
                            }
                        }))
                    }))
                }, e.prototype.load = function(t) {
                    var e, n;
                    return (0, o.mG)(this, void 0, void 0, (function() {
                        return (0, o.Jh)(this, (function(r) {
                            return this.sessionPromise = Promise.resolve(!0), t && (t.session && (this.owner = (null === (e = t.session) || void 0 === e ? void 0 : e.owner) || null, this.context = (null === (n = t.session) || void 0 === n ? void 0 : n.context) || null), t.config && a.Z.getInstance().update(t.config)), this.syncConfig(), this.emit(i.UPDATED), this._isAuthenticated() ? this.emit(i.AUTHENTICATED) : this.emit(i.UNAUTHENTICATED), [2, !0]
                        }))
                    }))
                }, e.prototype.isInitialized = function() {
                    return null === this.owner
                }, e.prototype.destroy = function() {
                    return (0, o.mG)(this, void 0, void 0, (function() {
                        return (0, o.Jh)(this, (function(t) {
                            switch (t.label) {
                                case 0:
                                    return [4, this.load({
                                        config: {
                                            "SESSION.SESSION_ID": null
                                        },
                                        session: {
                                            context: {
                                                scope: "def"
                                            },
                                            owner: {
                                                username: u.Qq
                                            }
                                        }
                                    })];
                                case 1:
                                    return t.sent(), [2]
                            }
                        }))
                    }))
                }, e.prototype.getPublicUserID = function() {
                    return (0, o.mG)(this, void 0, void 0, (function() {
                        var t;
                        return (0, o.Jh)(this, (function(e) {
                            return (t = (0, c.$o)().getItem("public-uid")) || (0, c.$o)().setItem("public-uid", t = Math.random().toString(32).substr(2)), [2, t]
                        }))
                    }))
                }, e
            }(s.v)
        },
        41900: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, {
                ResLoader: function() {
                    return ResLoader
                }
            });
            var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59312),
                _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(92245),
                _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48011),
                _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16849),
                ResLoader = function(_super) {
                    function ResLoader() {
                        var t = _super.call(this) || this;
                        return t.cannedResponse = {}, t.cannedResponseAsync = {}, t.pending = {}, t.loaded = {}, t.toLoad = [], t.maxNumOfWorkers = 4, t.isQueueProcessing = !1, t
                    }
                    return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.ZT)(ResLoader, _super), ResLoader.getInstance = function() {
                        var t = (0, _types__WEBPACK_IMPORTED_MODULE_1__.Jj)();
                        return this._instance || (t.TIK = t.TIK || {}, t.TIK.INSTANCES = t.TIK.INSTANCES || {}), this._instance ? this._instance : this._instance = t.TIK.INSTANCES.ResLoader = t.TIK.INSTANCES.ResLoader || new ResLoader
                    }, ResLoader.prototype.preload = function(t) {
                        throw new Error("Not Implemented")
                    }, ResLoader.prototype._loadJS = function(response, text) {
                        if (response.ok) {
                            try {
                                eval(text)
                            } catch (e) {
                                console.error("Failed to load " + response.url), console.log(e)
                            }
                            return !0
                        }
                        return !1
                    }, ResLoader.prototype._loadCSS = function(t, e) {
                        return !!t.ok
                    }, ResLoader.prototype._processQueue = function() {
                        var t = this;
                        if (this.isQueueProcessing) return !1;
                        this.isQueueProcessing = !0;
                        var e = 0,
                            n = function(n) {
                                return function(i) {
                                    var o = "loaded-" + n;
                                    i.text().then((function(e) {
                                        var r = !1;
                                        "js" === (0, _utils__WEBPACK_IMPORTED_MODULE_2__.getFileExtension)(n) && (r = t._loadJS(i, e)), t.emit(o, i, r), t.removeAllListeners(o)
                                    })), e--, r()
                                }
                            },
                            r = function() {
                                if (e < t.maxNumOfWorkers && t.toLoad.length) {
                                    var i = t.toLoad.shift();
                                    fetch(i).then(n(i)).catch(n(i)), e++, r()
                                } else 0 === t.toLoad.length && 0 === e && (t.isQueueProcessing = !1)
                            };
                        return r()
                    }, ResLoader.prototype.setResourceRoot = function(t) {
                        t || (console.log("".concat(t, " provided, setting to auto.")), t = window.location.protocol + "//" + window.location.host + "/"), "/" !== t[t.length - 1] && (console.warn("Resource Root should have a trailing slash. ".concat(t, " provided.")), t += "/"), this.resourceRoot = t
                    }, ResLoader.prototype.getURL = function(t) {
                        var e = t.substr(0, "http://".length);
                        return "http://" === e || "https:/" === e ? t : ("/" === t[0] && (t = t.substr(1)), this.resourceRoot + t)
                    }, ResLoader.prototype.load = function(t, e) {
                        "string" == typeof t && (t = [t]);
                        var n = 0;

                        function r() {
                            if (0 === --n) return e && e()
                        }
                        for (var i = 0, o = t; i < o.length; i++) {
                            var s = o[i];
                            if (!this.loaded[s]) {
                                this.pending[s] || this.toLoad.push(s), this.pending[s] = !0, n++;
                                var a = "loaded-" + s;
                                this.on(a, r)
                            }
                        }
                        return 0 === n ? e && e() : this._processQueue()
                    }, ResLoader.prototype.register = function(t) {
                        for (var e = 0, n = Object.keys(t); e < n.length; e++)
                            for (var r = n[e], i = 0, o = Object.keys(t[r]); i < o.length; i++) {
                                var s = o[i];
                                this.cannedResponseAsync["/" + r + "/" + s] = t[r][s]
                            }
                    }, ResLoader.prototype.setCannedResponse = function(t, e) {
                        this.cannedResponse[t] = e
                    }, ResLoader.prototype.fetch = function(t) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.mG)(this, void 0, void 0, (function() {
                            var e, n, r, i, o, s = this;
                            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.Jh)(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return this.cannedResponse[t] ? [2, JSON.parse(JSON.stringify(this.cannedResponse[t]))] : this.cannedResponseAsync[t] ? (o = {}, n = (e = JSON).parse, i = (r = JSON).stringify, [4, this.cannedResponseAsync[t]()]) : [3, 2];
                                    case 1:
                                        return [2, (o.body = n.apply(e, [i.apply(r, [a.sent().default])]), o.status = 200, o)];
                                    case 2:
                                        return [2, fetch(this.getURL(t)).then((function(t) {
                                            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.mG)(s, void 0, void 0, (function() {
                                                var e;
                                                return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.Jh)(this, (function(n) {
                                                    switch (n.label) {
                                                        case 0:
                                                            return e = {}, [4, t.text()];
                                                        case 1:
                                                            return [2, (e.body = n.sent(), e.status = t.status, e)]
                                                    }
                                                }))
                                            }))
                                        }))]
                                }
                            }))
                        }))
                    }, ResLoader
                }(_events__WEBPACK_IMPORTED_MODULE_3__.v)
        },
        79407: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            __webpack_require__.d(__webpack_exports__, {
                CH: function() {
                    return AdaptiveCard
                },
                RA: function() {
                    return HTMLCard
                }
            });
            var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59312),
                preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61432),
                _ui_app_Component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(91540),
                micromustache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52175),
                _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41900),
                _utils_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48011),
                _i18n_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(98090),
                preact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10473),
                CSSClasses;
            ! function(t) {
                t.LOADING_CARD = "xui-card--loading", t.LOADING_CARD_BODY = "hidden", t.CARD_BODY = "xui-card__body", t.CARD_ERROR = "error"
            }(CSSClasses || (CSSClasses = {}));
            var BaseCard = function(_super) {
                    function BaseCard(t) {
                        var e = _super.call(this, t) || this;
                        return e.params = {}, e.cardStorage = {}, e.scripts = [], e.unloads = [], e.timeouts = [], e.intervals = [], e.DEBUG = !0, e.cardID = Math.random().toString(36).substr(2), e.idPrefix = "tik-rnd-" + Math.random().toString(36).substring(2) + "-", e.element = null, e.params = t.data, e
                    }
                    return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.ZT)(BaseCard, _super), BaseCard.prototype.getCardID = function(t) {
                        return t.replace(/\W+/g, "-") + "-" + Math.random().toString(36).substr(2)
                    }, BaseCard.prototype.clearState = function() {
                        this.scripts = [], this.timeouts = [], this.intervals = [], this.unloads = []
                    }, BaseCard.prototype.fetch = function(t) {
                        var e = this.config.pathPrefix + t + this.config.suffix;
                        return _loader__WEBPACK_IMPORTED_MODULE_4__.ResLoader.getInstance().fetch(e).then((function(t) {
                            var e = t.body;
                            if (e && "{" === e[0]) {
                                var n = null;
                                try {
                                    n = JSON.parse(e)
                                } catch (t) {}
                                if (null !== n) return n
                            }
                            return {
                                html: e
                            }
                        })).catch((function(t) {
                            throw console.log("Error loading card " + e + ", Please check below response: "), console.log(t), t
                        }))
                    }, BaseCard.prototype.unload = function() {
                        var t = this;
                        console.log("Unloading " + this.cardID), this.timeouts.forEach((function(t) {
                            return clearTimeout(t)
                        })), this.intervals.forEach((function(t) {
                            return clearInterval(t)
                        })), this.unloads.forEach((function(e) {
                            try {
                                "function" == typeof e ? e() : console.error(t.cardID, " Unable to call ", e, " during unload, it's not a function.")
                            } catch (e) {
                                console.error(t.cardID, " Error in unload method."), console.error(e)
                            }
                        }))
                    }, BaseCard.prototype.update = function(t) {
                        return this.reload({
                            params: t
                        })
                    }, BaseCard.prototype.reload = function(t) {
                        this.unload(), this.clearState(), this.load(t)
                    }, BaseCard.prototype.cardLoaded = function() {
                        var t = this.element.getElementsByClassName(this.config.loadingSpinnerClass + this.cardID)[0];
                        t && t.remove(), this.element.getElementsByClassName(this.config.prefixWrapperBody + this.cardID)[0].classList.remove("hidden")
                    }, BaseCard.prototype.getRandomScriptMethodName = function() {
                        return "tik-callback-" + Math.random().toString(36).substr(2)
                    }, BaseCard.prototype.loadScripts = function(readyHTML, extraParams) {
                        var _this = this;
                        if (0 !== this.scripts.length) {
                            this.timeouts = [], this.intervals = [], this.unloads = [];
                            var self = this,
                                reminderTimer = null,
                                parameters = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.pi)({
                                    console: {
                                        log: function() {
                                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                            t.unshift("[" + self.cardID + "]"), console.log.apply(console, t)
                                        },
                                        warn: function() {
                                            var t = Array.prototype.slice.call(arguments);
                                            t.unshift("[" + self.cardID + "]"), console.warn.apply(console, t)
                                        }
                                    },
                                    setTimeout: function() {
                                        var t = setTimeout.apply(this, arguments);
                                        return self.timeouts.push(t), t
                                    },
                                    setInterval: function() {
                                        var t = setInterval.apply(this, arguments);
                                        return parameters.console.log("Registered an interval "), self.intervals.push(t), t
                                    },
                                    i18n: {
                                        t: _i18n_i18n__WEBPACK_IMPORTED_MODULE_5__.i18n.getMethodFor(null, self.namespace)
                                    },
                                    XCard: {
                                        cardElement: this.element,
                                        params: this.params,
                                        CardStorage: {
                                            set: function(t, e) {
                                                self.cardStorage[t] = e
                                            },
                                            get: function(t) {
                                                return self.cardStorage[t]
                                            },
                                            list: function() {
                                                return self.cardStorage
                                            }
                                        },
                                        registerOnUnload: function(t) {
                                            return _this.unloads.push(t)
                                        },
                                        ready: function(t, e) {
                                            if (!this.readyCalled) {
                                                var n = readyHTML,
                                                    r = self.element.getElementsByClassName(self.config.prefixWrapperBody + self.cardID)[0];
                                                if ("string" == typeof n)
                                                    if ("object" == typeof t || n.indexOf("__t") >= 0) {
                                                        var i = {
                                                            __t: parameters.i18n.t
                                                        };
                                                        r.innerHTML = (0, micromustache__WEBPACK_IMPORTED_MODULE_1__.Q8)(n, (function(t, e) {
                                                            var n = t.match(/(\w+)\(([^)]*)\)/);
                                                            if (n) {
                                                                var r = n[1],
                                                                    o = n[2].split(",").map((function(t) {
                                                                        return t.trim()
                                                                    })).map((function(t) {
                                                                        return (0, micromustache__WEBPACK_IMPORTED_MODULE_1__.U2)(e, t) || t
                                                                    }));
                                                                return i[r].apply(i, o)
                                                            }
                                                            return ""
                                                        }), t || {})
                                                    } else r.innerHTML = n;
                                                else "object" == typeof n && n instanceof Element && (r.innerHTML = "", r.appendChild(n));
                                                this.readyCalled = !0
                                            }
                                            return clearTimeout(reminderTimer), e && e(), self.cardLoaded()
                                        },
                                        getElementById: function(t) {
                                            return _this.element.querySelector("#" + _this.idPrefix + t)
                                        }
                                    }
                                }, extraParams);
                            parameters.XCard.ready = parameters.XCard.ready.bind(parameters.XCard), this.DEBUG && (reminderTimer = setTimeout((function() {
                                console.warn("Hi Dev, For card " + self.cardID + " card body hasn't been parsed " + self.config.reminderTimeout + "ms have passed since card loaded. If this is expected ignore this message else You should call _parseBody or _ready.")
                            }), self.config.reminderTimeout));
                            var parametersOrder = Object.keys(parameters),
                                parametersInOrder = Object.keys(parameters).map((function(t) {
                                    return parameters[t]
                                }));
                            return this.scripts.forEach((function(tag) {
                                _this.DEBUG && console.log("Calling " + tag.name), tag.method = eval("(function(" + parametersOrder.join(",") + "){" + tag.string + " //Card : " + self.cardID + "\n //# sourceURL=tik.virtual." + tag.name + ".js \n })"), tag.method.apply(null, parametersInOrder)
                            }))
                        }
                    }, BaseCard
                }(_ui_app_Component__WEBPACK_IMPORTED_MODULE_6__.w),
                HTMLCardProvider = function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return n.componentName = "HTMLCardProvider", n.clearState(), n.config = {
                            pathPrefix: "/",
                            suffix: ".html",
                            storageKey: "CardsCallbackStorage",
                            loadingSpinnerClass: "card-loading-spinner",
                            prefixWrapperBody: "card-body-wrapper",
                            prefixWrapperBodyTemplate: "card-body-wrapper-template",
                            preLoad: function(t) {},
                            postLoad: function(t) {},
                            reminderTimeout: 1e4
                        }, n.cardStorage = {}, n.ref = (0, preact__WEBPACK_IMPORTED_MODULE_2__.Vf)(), n
                    }
                    return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.ZT)(e, t), e.prototype._getCardLoading = function() {
                        return '<div class="'.concat(CSSClasses.LOADING_CARD, " ").concat(this.config.loadingSpinnerClass + this.cardID, " ").concat(this.config.loadingSpinnerClass, '">Loading Card...</div>')
                    }, e.prototype.getCardBodyWithLoading = function() {
                        return this._getCardLoading() + '<div class="'.concat(CSSClasses.LOADING_CARD_BODY, " ").concat(this.config.prefixWrapperBody + this.cardID, " ").concat(this.config.prefixWrapperBody, '"></div>')
                    }, e.prototype.load = function(t, e, n) {
                        return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.mG)(this, void 0, void 0, (function() {
                            var r, i;
                            return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.Jh)(this, (function(o) {
                                return "function" == typeof e && void 0 === n && (n = e, e = {}), e = e || {}, r = this, this.cardPath = t.getAttribute("data-card") || this.props.path, this.cardPath ? (this.namespace = this.cardPath.substr(0, this.cardPath.indexOf("/")), this.element = t, i = this.cardID, 0 === t.querySelectorAll(".xui-card__body").length && (t.innerHTML = t.innerHTML + '<div class="'.concat(CSSClasses.CARD_BODY, '"></div>\n')), t.querySelector(".".concat(CSSClasses.CARD_BODY)).innerHTML = this.getCardBodyWithLoading(), [2, Promise.all([_i18n_i18n__WEBPACK_IMPORTED_MODULE_5__.i18n.loadNamespaces(this.namespace), r.fetch(this.cardPath)]).then((function(t) {
                                    var o = t[1],
                                        s = r.processCardScript(o.html);
                                    return r.loadScripts(s, e.cardVars || {}), n && n(null, i)
                                })).catch((function(e) {
                                    if (e) return r.renderErroredJSONCard(t, e, (function() {
                                        return n && n(null, i, null)
                                    }))
                                }))]) : (t.innerHTML = "No card path defined. Not executing the card.", [2])
                            }))
                        }))
                    }, e.prototype.renderErroredJSONCard = function(t, e, n) {
                        if (e && e.stack && e.message) t.innerHTML = "<div class='".concat(CSSClasses.CARD_ERROR, "'>Error loading card.<br/>").concat(this.DEBUG ? "<code>".concat(e.message, "<br/>").concat(e.stack, "</code>") : "Please contact support.", ".</div>");
                        else {
                            var r = e.error;
                            101 === r.code && r.permission && (console.log("Not loading card you don't have permission " + r.permission), t.attr("data-d-permission") ? t.closest(t.attr("data-d-permission")).remove() : t[0].parentNode.removeChild(t[0]))
                        }
                    }, e.prototype.processCardScript = function(t) {
                        var e, n = this,
                            r = document.createElement("div");
                        r.innerHTML = t;
                        var i = r.querySelectorAll("script");
                        i.length || (r.innerHTML = t + "<script>XCard.ready();<\/script>", i = r.querySelectorAll("script"));
                        for (var o = 0, s = i.length; o < s; ++o) {
                            var a = i[o].innerHTML,
                                c = i[o].getAttribute("type");
                            if (c) switch (c || "") {
                                case "":
                                case "text/javascript":
                                    break;
                                case "text/babel":
                                    if (!(0, _utils_common__WEBPACK_IMPORTED_MODULE_7__.isES6Supported)()) {
                                        if (!window.Babel) {
                                            console.error("babel script cannot be loaded as babel loader is not present. This can lead to unintended behaviour.");
                                            continue
                                        }
                                        a = window.Babel.transform(a, {
                                            babelrc: !1,
                                            filename: "repl",
                                            presets: ["es2015"],
                                            plugins: ["transform-regenerator"],
                                            sourceMap: !1
                                        }).code
                                    }
                                    break;
                                default:
                                    continue
                            }
                            e = this.getRandomScriptMethodName(), i[o].setAttribute("tik-callback-name", e), this.scripts.push({
                                name: e,
                                string: a
                            }), i[o].innerHTML = "//Content moved " + (this.DEBUG ? "to " + e : "")
                        }
                        return r.querySelectorAll("[id]").forEach((function(t) {
                            if (t.getAttribute("id")) return t.setAttribute("id", n.idPrefix + t.getAttribute("id"))
                        })), r.innerHTML
                    }, e.prototype.shouldComponentUpdate = function(t, e) {
                        return !1
                    }, e.prototype.componentDidMount = function() {
                        return this.load(this.ref.current, this.props.options)
                    }, e.prototype.componentWillUnmount = function() {
                        this.unload(), this.ref.current.innerHTML = ""
                    }, e.prototype.componentDidUpdate = function(t, e, n) {
                        this.load(this.ref.current, this.props.options)
                    }, e.prototype.render = function(t) {
                        return (0, preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)("div", {
                            id: this.cardID,
                            ref: this.ref,
                            "data-card": t.path
                        })
                    }, e
                }(BaseCard),
                HTMLCard = function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return n.componentName = "HTMLCard", n.state = {
                            props: e,
                            key: Math.random()
                        }, n
                    }
                    return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.ZT)(e, t), e.prototype.shouldComponentUpdate = function(t, e) {
                        var n = this;
                        return JSON.stringify(this.state.props) !== JSON.stringify(t) && this.setState({
                            props: t,
                            key: Math.random()
                        }, (function() {
                            n.forceUpdate()
                        })), this.state.key !== e.key
                    }, e.prototype.componentDidMount = function() {}, e.prototype.componentWillUnmount = function() {}, e.prototype.componentDidUpdate = function(t, e, n) {}, e.prototype.render = function(t, e) {
                        return (0, preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)(HTMLCardProvider, (0, tslib__WEBPACK_IMPORTED_MODULE_3__.pi)({}, e.props), e.key)
                    }, e
                }(_ui_app_Component__WEBPACK_IMPORTED_MODULE_6__.w),
                AdaptiveCard = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.componentName = "AdaptiveCard", e
                    }
                    return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.ZT)(e, t), e.renderSchema = function(t, e, n, r) {
                        void 0 === n && (n = {});
                        var i = window.AdaptiveCards;
                        if (void 0 !== i) {
                            var o = new window.ACData.Template((0, tslib__WEBPACK_IMPORTED_MODULE_3__.pi)({
                                    type: "AdaptiveCard",
                                    version: "1.0"
                                }, e)).expand({
                                    $root: (0, tslib__WEBPACK_IMPORTED_MODULE_3__.pi)({}, n)
                                }),
                                s = new i.AdaptiveCard;
                            return s.hostConfig = new i.HostConfig({
                                fontFamily: "Segoe UI, Helvetica Neue, sans-serif"
                            }), s.onExecuteAction = function(t) {
                                alert("Ow!")
                            }, s.parse(o), t.innerHTML = "", t.appendChild(s.render()), s
                        }
                        t.innerHTML = "AdaptiveCards library is not loaded."
                    }, e.prototype.load = function(t, e, n) {
                        var r = window.AdaptiveCards;
                        if (void 0 !== r) {
                            var i = new r.AdaptiveCard;
                            i.hostConfig = new r.HostConfig({
                                fontFamily: "Segoe UI, Helvetica Neue, sans-serif"
                            }), i.onExecuteAction = function(t) {
                                alert("Ow!")
                            }, i.parse((0, tslib__WEBPACK_IMPORTED_MODULE_3__.pi)({
                                $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
                                type: "AdaptiveCard",
                                version: "1.0"
                            }, this.props.schema));
                            var o = i.render();
                            t.innerHTML = "", t.appendChild(o)
                        } else t.innerHTML = "AdaptiveCards library is not loaded."
                    }, e.prototype.onMount = function(t) {
                        return this.load(t, this.props.options)
                    }, e.prototype.render = function() {
                        return (0, preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)("div", {
                            id: this.cardID,
                            "data-card": this.props.path || ""
                        })
                    }, e
                }(BaseCard)
        },
        88605: function(t, e, n) {
            n.r(e), n.d(e, {
                Route: function() {
                    return f
                }
            });
            var r = n(59312),
                i = n(92245),
                o = n(93655),
                s = n(40582),
                a = n(16849),
                c = n(97035),
                u = n(72135),
                l = function() {
                    function t() {}
                    return t.getJsonFromUrl = function(t, e) {
                        var n = {};
                        return void 0 === e && (e = "&"), (t || "").split(e).forEach((function(t) {
                            var e = t.split("=");
                            e.length && e[0] && e[0].length && (n[e[0]] = 2 === e.length ? decodeURIComponent(e[1]) : null)
                        })), n
                    }, t.parseUrl = function(t, e, n) {
                        void 0 === n && (n = null), e && ("#" === t[0] ? t = -1 !== e.url.indexOf("#") ? e.url.substr(0, e.url.indexOf("#")) + t : e.url : "/" === t[0] ? t = e.protocol + "//" + e.host + t : "http:" !== t.substr(0, "http:".length) && "https:" !== t.substr(0, "https:".length) && (t = e.protocol + "//" + e.host + e.pathName.substr(0, e.pathName.lastIndexOf("/")) + "/" + t));
                        var r = new URL(t),
                            i = this.getJsonFromUrl(r.search.substr(1)),
                            o = !0;
                        n && n.length && (r.pathname.substr(0, n.length) === n ? r.pathname = r.pathname.substr(n.length - 1) : (r.pathname = "/unifx-not-valid-app-root", o = !1));
                        var s = (0, a.Jj)();
                        return {
                            hash: r.hash,
                            params: i,
                            protocol: r.protocol,
                            host: r.host,
                            url: s.location.protocol + "//" + s.location.host + r.pathname + r.search,
                            pathName: r.pathname,
                            withoutHashURL: r.pathname + r.search,
                            validRoot: o
                        }
                    }, t.updateParsedUrl = function(t, e, n) {
                        var i = (0, r.pi)((0, r.pi)({}, t.params), e),
                            o = void 0 === n ? t.hash : n,
                            s = [];
                        i && Object.keys(i || {}).map((function(t) {
                            return t && t.length && s.push(t + (null !== i[t] ? "=" + encodeURIComponent(i[t]) : ""))
                        }));
                        var a = t.pathName + (s.length ? "?" + s.join("&") : "");
                        return {
                            hash: o,
                            params: i,
                            url: a + (o ? "#" + o : ""),
                            protocol: t.protocol,
                            host: t.host,
                            pathName: t.pathName,
                            withoutHashURL: a
                        }
                    }, t
                }(),
                d = function() {
                    function t() {}
                    return t.prototype.onChange = function(t) {}, t
                }(),
                p = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return a.DM ? (console.log("No default route set in ROUTE"), n) : (n.base = l.parseUrl(window.location.href), n)
                    }
                    return (0, r.ZT)(e, t), e.prototype.initialize = function() {
                        window.addEventListener("beforeunload", this.onUnload.bind(this), !1), window.addEventListener("popstate", this.onPop.bind(this), !1)
                    }, e.prototype.onUnload = function() {
                        return this.setURL(this.title, this.getURL())
                    }, e.prototype.onPop = function() {
                        return this.setURL(this.title, this.getURL())
                    }, e.prototype.setURL = function(t, e) {
                        return (!this.current || this.current.withoutHashURL != e.withoutHashURL) && (this.current = e, this.title = t, history.pushState(null, t, e.withoutHashURL), this.onChange(e))
                    }, e.prototype.getURL = function() {
                        return l.parseUrl(window.location.href)
                    }, e.prototype.goTo = function(t, e, n, r) {
                        if (void 0 === r && (r = "get"), "get" === (r = r.toLowerCase())) {
                            var i = l.parseUrl(t, this.base),
                                o = l.updateParsedUrl(i, n);
                            return this.setURL(e, o)
                        }
                        var s = document.createElement("form");
                        for (var a in s.style.visibility = "hidden", s.method = "POST", s.action = t, Object.keys(n)) {
                            var c = document.createElement("input");
                            c.name = a, c.value = n[a], s.appendChild(c)
                        }
                        return null == document.getElementById("content") ? (console.error("element with id #content is not found, not navigating."), !1) : (s.appendChild(s), s.submit(), !0)
                    }, e
                }(d),
                h = function(t) {
                    function e() {
                        var e = t.call(this) || this,
                            n = (0, a.Jj)();
                        return e.base = l.parseUrl("/", l.parseUrl(n.location.protocol + "//" + n.location.host + "/")), e
                    }
                    return (0, r.ZT)(e, t), e.prototype.initialize = function() {
                        window.addEventListener("hashchange", this.onHashChange.bind(this), !1)
                    }, e.prototype.onHashChange = function() {
                        this.onChange(l.parseUrl(window.location.hash.substr(1), this.base))
                    }, e.prototype.setURL = function(t, e) {
                        return (!this.current || this.current.withoutHashURL != e.withoutHashURL) && (this.current = e, window.location.hash = e.withoutHashURL, this.onChange(e))
                    }, e.prototype.getURL = function() {
                        return l.parseUrl(window.location.hash.substr(1) || "/", this.base)
                    }, e.prototype.goTo = function(t, e, n) {
                        var r = l.parseUrl(t, this.current || this.base),
                            i = l.updateParsedUrl(r, n);
                        return this.setURL(e, i)
                    }, e
                }(d),
                f = function(t) {
                    function e() {
                        var e = t.call(this) || this;
                        switch (e.routeAliases = {}, e.session = s.Session.getInstance(), e.config = o.Z.getInstance(), e.TITLE_DELIMITER = e.config["ROUTE.TITLE_DELIMITER"], e.TITLE_PREFIX = e.config["ROUTE.TITLE_PREFIX"], e.TITLE_POSTFIX = e.config["ROUTE.TITLE_POSTFIX"], e.appRoot = e.config["ROUTE.APP_ROOT"], e.config["ROUTE.PROVIDER"]) {
                            default: console.warn("Unknown route provider ".concat(e.config["ROUTE.PROVIDER"], ", using location provider."));
                            case "location":
                                    e.routeProvider = new p("/");
                                break;
                            case "hash":
                                    e.routeProvider = new h
                        }
                        return e.postAuthentication = e.postAuthentication.bind(e), a.DM ? (console.log("No route init in SSR."), e) : (e.initialize(), e)
                    }
                    return (0, r.ZT)(e, t), e.getInstance = function() {
                        var t = (0, a.Jj)();
                        return this._instance || (t.TIK = t.TIK || {}, t.TIK.INSTANCES = t.TIK.INSTANCES || {}), this._instance ? this._instance : this._instance = t.TIK.INSTANCES.Route = t.TIK.INSTANCES.Route || new e
                    }, e.prototype.setCurrentURL = function(t) {
                        if (!this.currentUrl) return this.currentUrl = t;
                        t.url.length && this.currentUrl.url !== t.url && (this.currentUrl = t, this.emit("locationChange", this.currentUrl))
                    }, e.prototype.interceptClickEvent = function(t) {
                        var e, n = (t.target || t.srcElement).closest("a");
                        if (n && "A" === n.tagName) {
                            var r = n.getAttribute("target");
                            if (r && "_self" !== r) return !1;
                            if (console.log(n.closest(".".concat(c.Oe))), !n.closest(".".concat(c.Oe))) return !1;
                            if (t.preventDefault(), !(e = n.getAttribute("href")) || !e.length) return !1;
                            var i = n.getAttribute("title") || n.textContent;
                            return i.length > 30 && (i = i.substr(0, 30)), this.routeProvider.goTo(e, i)
                        }
                    }, e.prototype.initialize = function() {
                        var t = this;
                        window.addEventListener("DOMContentLoaded", (function(e) {
                            t.emit("ready", t.currentUrl)
                        })), /complete|interactive|loaded/.test(document.readyState) && setTimeout((function() {
                            t.emit("ready", t.currentUrl)
                        }), 50), this.routeProvider.initialize(), this.routeProvider.onChange = this.setCurrentURL.bind(this);
                        var e = this.routeProvider.getURL();
                        e.firstLoad = !0, this.setCurrentURL(e)
                    }, e.prototype.bindAppElement = function(t) {
                        t.addEventListener("click", this.interceptClickEvent.bind(this))
                    }, e.prototype.getTitle = function() {
                        return window.document.title
                    }, e.prototype.setTitle = function(t) {
                        return !(!t || 0 === t.length) && (window.document.title = "".concat(this.TITLE_PREFIX ? this.TITLE_PREFIX + this.TITLE_DELIMITER : "").concat(t).concat(this.TITLE_POSTFIX ? this.TITLE_DELIMITER + this.TITLE_POSTFIX : ""))
                    }, e.prototype.getCurrentURL = function() {
                        return this.currentUrl
                    }, e.prototype.getLocation = function() {
                        return this.currentUrl.url
                    }, e.prototype.getHash = function() {
                        return this.currentUrl.hash
                    }, e.prototype.getURLParams = function(t) {
                        return t ? this.currentUrl.params[t] : this.currentUrl.params
                    }, e.prototype.setURLParams = function(t) {
                        return this.routeProvider.setURL(this.getTitle(), l.updateParsedUrl(this.currentUrl, t))
                    }, e.prototype.goBack = function() {
                        return history.back()
                    }, e.prototype.goForward = function() {
                        return history.forward()
                    }, e.prototype.goTo = function(t, e, n, r) {
                        return void 0 === r && (r = "get"), this.setTitle(e), this.routeProvider.goTo(t, e, n)
                    }, e.prototype.requireAuthentication = function(t) {
                        if (void 0 === t && (t = !1), this.session.isAuthenticated()) return !1;
                        if (t) {
                            var e = this.getCurrentURL();
                            u.e.getInstance().setValueRaw("REDIRECT", e.withoutHashURL)
                        }
                        return this.goTo(this.config["ROUTE.UNAUTHENTICATED"], "Authenticate"), !0
                    }, e.prototype.postAuthentication = function() {
                        if (this.session.isAuthenticated()) {
                            var t = u.e.getInstance();
                            if (t.getValueRaw("REDIRECT")) {
                                var e = t.getValueRaw("REDIRECT");
                                return console.log(e), t.remove("REDIRECT"), this.goTo(e, "Redirecting...")
                            }
                            return this.goTo(this.config["ROUTE.POST_LOGIN"], "Redirecting...")
                        }
                        return this.goTo(this.config["ROUTE.UNAUTHENTICATED"], "Authenticate")
                    }, e
                }(i.v)
        },
        97035: function(t, e, n) {
            n.d(e, {
                Oe: function() {
                    return i
                },
                Qq: function() {
                    return o
                },
                Z6: function() {
                    return r
                }
            });
            var r, i = "unilink",
                o = "us:public";
            ! function(t) {
                t.SESSION_INFO = "sys/auth/info", t.PAGE_GET = "sys/page/get"
            }(r || (r = {}))
        },
        10501: function(t, e, n) {
            n.r(e), n.d(e, {
                toast: function() {
                    return c
                }
            });
            var r = n(59312),
                i = n(16849),
                o = {
                    autopush: !0,
                    zindex: 9999,
                    timeout: 2e3,
                    fps: 30,
                    position: "top-right",
                    direction: "top",
                    success: {
                        classes: "unitoast-success",
                        textColor: "#155724",
                        borderColor: "#c3e6cb",
                        backgroundColor: "#d4edda",
                        progressColor: "#155724",
                        iconColor: "#155724",
                        closeButtonColor: "#155724",
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"><path d="M6.41 0l-.69.72-2.78 2.78-.81-.78-.72-.72-1.41 1.41.72.72 1.5 1.5.69.72.72-.72 3.5-3.5.72-.72-1.44-1.41z" transform="translate(0 1)" /></svg>'
                    },
                    error: {
                        classes: "unitoast-danger",
                        textColor: "#721c24",
                        borderColor: "#f5c6cb",
                        backgroundColor: "#f8d7da",
                        progressColor: "#721c24",
                        iconColor: "#721c24",
                        closeButtonColor: "#721c24",
                        icon: '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ban" class="svg-inline--fa fa-ban fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#741f27" d="M256 8C119.034 8 8 119.033 8 256s111.034 248 248 248 248-111.034 248-248S392.967 8 256 8zm130.108 117.892c65.448 65.448 70 165.481 20.677 235.637L150.47 105.216c70.204-49.356 170.226-44.735 235.638 20.676zM125.892 386.108c-65.448-65.448-70-165.481-20.677-235.637L361.53 406.784c-70.203 49.356-170.226 44.736-235.638-20.676z"></path></svg>'
                    },
                    warning: {
                        classes: "unitoast-warning",
                        textColor: "#856404",
                        borderColor: "#fff3cd",
                        backgroundColor: "#ffeeba",
                        progressColor: "#856404",
                        iconColor: "#856404",
                        closeButtonColor: "#856404",
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"><path d="M3.09 0c-.06 0-.1.04-.13.09l-2.94 6.81c-.02.05-.03.13-.03.19v.81c0 .05.04.09.09.09h6.81c.05 0 .09-.04.09-.09v-.81c0-.05-.01-.14-.03-.19l-2.94-6.81c-.02-.05-.07-.09-.13-.09h-.81zm-.09 3h1v2h-1v-2zm0 3h1v1h-1v-1z" /></svg>'
                    },
                    info: {
                        classes: "unitoast-info",
                        textColor: "#0c5460",
                        borderColor: "#d1ecf1",
                        backgroundColor: "#bee5eb",
                        progressColor: "#0c5460",
                        iconColor: "#0c5460",
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"><path d="M3 0c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1zm-1.5 2.5c-.83 0-1.5.67-1.5 1.5h1c0-.28.22-.5.5-.5s.5.22.5.5-1 1.64-1 2.5c0 .86.67 1.5 1.5 1.5s1.5-.67 1.5-1.5h-1c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-.36 1-1.84 1-2.5 0-.81-.67-1.5-1.5-1.5z" transform="translate(2)"/></svg>'
                    }
                },
                s = function() {
                    function t(t, e, n, r, i, o) {
                        var s = this;
                        if (this.pushed = !1, this.element = document.createElement("div"), this.element.className = n.classes || "", this.element.style.display = "none", this.element.style.position = "relative", this.element.style.padding = "1em 2em 1em 2.5em", "top" === t.options.direction ? this.element.style.marginTop = "0.5em" : this.element.style.marginBottom = "0.5em", this.element.style.width = "100%", this.element.style.borderWidth = "1px", this.element.style.borderStyle = "solid", this.element.style.boxSizing = "border-box", this.element.style.borderColor = n.borderColor, this.element.style.backgroundColor = n.backgroundColor, void 0 !== n.icon) {
                            var a = document.createElement("div");
                            a.style.position = "absolute", a.style.top = "50%", a.style.left = "10px", a.style.transform = "translateY(-50%)", a.innerHTML = n.icon;
                            var c = a.childNodes[0]; - 1 != n.icon.indexOf("<img") ? (c.style.width = "16px", c.style.height = "16px") : -1 != n.icon.indexOf("<svg ") && (c.style.width = "16px", c.style.height = "16px", void 0 !== n.iconColor && (c.style.fill = n.iconColor)), void 0 !== n.iconClasses && (c.className += n.iconClasses), this.element.appendChild(a)
                        }
                        var u = document.createElement("span");
                        u.style.color = n.textColor, u.innerHTML = e, this.element.appendChild(u);
                        var l = document.createElement("p");
                        l.className = "progress", l.style.position = "absolute", l.style.right = "100%", l.style.height = "2px", l.style.content = " ", l.style.backgroundColor = n.progressColor, l.style.bottom = String(0), l.style.left = String(0), l.style.marginBottom = String(0), this.element.appendChild(l), this.progress = l;
                        var d = document.createElement("button");
                        d.className = "close-button", d.style.position = "absolute", d.style.top = "0px", d.style.right = "0px", d.style.height = "100%", d.style.padding = "0 0.7em", d.style.backgroundColor = "#0000000f", d.style.outline = "0", d.style.border = "0", d.style.cursor = "pointer", d.style.color = n.closeButtonColor, d.innerHTML = "&#x2715;", this.element.appendChild(d), d.addEventListener("click", (function() {
                            s.destroy()
                        })), "top" === t.options.direction ? t.container.insertBefore(this.element, t.container.childNodes[0]) : t.container.appendChild(this.element), this.callback = o, this.fps = i, this.timeout = r
                    }
                    return t.prototype.push = function() {
                        var t = this;
                        if (!this.pushed) {
                            this.pushed = !0;
                            var e = 0,
                                n = 1e3 / this.fps;
                            this.element.style.display = "block", this.interval = setInterval((function() {
                                e++;
                                var r = 100 * (1 - n * e / t.timeout);
                                t.progress.style.right = r + "%", r <= 0 && ("function" == typeof t.callback && t.callback(), t.clear())
                            }), n)
                        }
                    }, t.prototype.clear = function() {
                        var t = this;
                        if (this.pushed) {
                            var e = 1e3 / this.fps,
                                n = 1 / (this.timeout / e),
                                r = 1;
                            void 0 !== this.interval && clearInterval(this.interval), this.interval = setInterval((function() {
                                r -= n, t.element.style.opacity = String(r), r <= 0 && (clearInterval(t.interval), t.destroy())
                            }), e)
                        }
                    }, t.prototype.destroy = function() {
                        this.pushed && (this.pushed = !1, void 0 !== this.interval && clearInterval(this.interval), null !== a.container && a.container.removeChild(this.element))
                    }, t
                }(),
                a = new(function() {
                    function t(t) {
                        if (this.options = (0, r.pi)((0, r.pi)({}, o), t), i.DM) console.log("No toast in SSR.");
                        else if (this.container = document.getElementById("unitoast-container-" + this.options.position), null === this.container) {
                            switch (this.container = document.createElement("div"), this.container.id = "unitoast-container-" + this.options.position, this.container.style.zIndex = this.options.zindex, this.container.style.position = "fixed", this.container.style.maxWidth = "304px", this.container.style.width = "100%", this.options.position) {
                                case "top-left":
                                    this.container.style.top = String(0), this.container.style.left = "0.5em";
                                    break;
                                case "top-right":
                                    this.container.style.top = String(0), this.container.style.right = "0.5em";
                                    break;
                                case "bottom-left":
                                    this.container.style.bottom = String(0), this.container.style.left = "0.5em";
                                    break;
                                case "bottom-center":
                                    this.container.style.bottom = String(0), this.container.style.margin = "0 auto";
                                    break;
                                default:
                                    this.container.style.bottom = String(0), this.container.style.right = "0.5em"
                            }
                            document.getElementsByTagName("body")[0].appendChild(this.container)
                        }
                    }
                    return t.prototype.notify = function(t, e, n, r) {
                        if (void 0 !== this.options[t]) {
                            void 0 === n && (n = this.options.timeout);
                            var i = new s(this, e, this.options[t], n, this.options.fps, r);
                            return this.options.autopush && i.push(), i
                        }
                        console.error("UniToast.js: Error, undefined '" + t + "' notification type")
                    }, t.prototype.error = function(t, e) {
                        return this.notify("error", e)
                    }, t.prototype.success = function(t, e) {
                        return this.notify("success", e)
                    }, t.prototype.warning = function(t, e) {
                        return this.notify("warning", e)
                    }, t
                }())({}),
                c = a;
            i.DM || (window.noti = a)
        },
        40780: function(t, e, n) {
            n.r(e), n.d(e, {
                App: function() {
                    return J
                }
            });
            var r = {};
            n.r(r), n.d(r, {
                AdaptiveCard: function() {
                    return M
                },
                Column: function() {
                    return R
                },
                Container: function() {
                    return P
                },
                Div: function() {
                    return D
                },
                HTMLCard: function() {
                    return U
                },
                NavBar: function() {
                    return B
                },
                Row: function() {
                    return k
                },
                TextBlock: function() {
                    return L
                },
                Vue: function() {
                    return K
                },
                Workflow: function() {
                    return Z
                }
            });
            var i = n(59312),
                o = n(61432),
                s = n(10473),
                a = n(91540),
                c = function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return n.componentName = "JSONUI", n.elements = {}, n.data = {}, n.elements = e.components, n.renderSchema = n.renderSchema.bind(n), n
                    }
                    return (0, i.ZT)(e, t), e.prototype.renderSchema = function(t) {
                        var e = this;
                        if ("object" != typeof t) return !1;
                        if (Array.isArray(t)) return t.map((function(t) {
                            return e.renderSchema(t)
                        })).filter((function(t) {
                            return t
                        }));
                        var n = t.type;
                        if (!n) return console.log("Wrong type provided in schema."), !1;
                        var r = this.elements[n];
                        if (void 0 === r) return console.warn("".concat(n, " type not found in registered elements in JSONUI")), !1;
                        var o = [];
                        if (t.child)
                            for (var a = 0, c = t.child; a < c.length; a++) {
                                var u = c[a];
                                o.push(this.renderSchema(u))
                            }
                        return s.h.apply(void 0, (0, i.ev)([r, t], o, !1))
                    }, e.prototype.render = function(t) {
                        return this.renderSchema(t.schema)
                    }, e
                }(a.w),
                u = n(95055),
                l = n(79407),
                d = n(88605),
                p = n(10501);

            function h(t, e, n) {
                return (0, o.tZ)("div", (0, i.pi)({
                    className: "xui-row"
                }, {
                    children: (0, o.tZ)("div", (0, i.pi)({
                        className: "xui-col-md-12"
                    }, {
                        children: (0, o.tZ)("div", (0, i.pi)({
                            className: "xui-error-page-wrapper"
                        }, {
                            children: (0, o.BX)("div", (0, i.pi)({
                                className: "http-error-page server-error"
                            }, {
                                children: [(0, o.tZ)("div", {
                                    className: "error-image"
                                }), (0, o.tZ)("h1", (0, i.pi)({
                                    className: "error-number"
                                }, {
                                    children: t
                                })), (0, o.tZ)("p", (0, i.pi)({
                                    className: "error-text"
                                }, {
                                    children: (0, o.tZ)("b", {
                                        children: n || "Something unexpected happened"
                                    })
                                })), (0, o.tZ)("p", (0, i.pi)({
                                    className: "error-text"
                                }, {
                                    children: e
                                })), (0, o.tZ)("div", (0, i.pi)({
                                    className: "action"
                                }, {
                                    children: (0, o.tZ)("button", (0, i.pi)({
                                        onClick: function() {
                                            return window.history.go(-1), !1
                                        },
                                        className: "xui-btn xui-btn--emphasized"
                                    }, {
                                        children: "Go back"
                                    }))
                                }))]
                            }))
                        }))
                    }))
                }))
            }

            function f(t, e) {
                return void 0 === e && (e = ""), (0, o.tZ)("div", (0, i.pi)({
                    className: "xui-row"
                }, {
                    children: (0, o.tZ)("div", (0, i.pi)({
                        className: "xui-col-md-12"
                    }, {
                        children: (0, o.tZ)("div", (0, i.pi)({
                            className: "xui-error-page-wrapper"
                        }, {
                            children: (0, o.BX)("div", (0, i.pi)({
                                className: "http-error-page client-error"
                            }, {
                                children: [(0, o.tZ)("div", {
                                    className: "error-image"
                                }), (0, o.tZ)("h1", (0, i.pi)({
                                    className: "error-number"
                                }, {
                                    children: "404"
                                })), (0, o.BX)("p", (0, i.pi)({
                                    className: "error-text"
                                }, {
                                    children: ["The requested resource ", (0, o.tZ)("b", {
                                        children: t.pathName
                                    }), " was not found on this server."]
                                })), (0, o.tZ)("p", (0, i.pi)({
                                    className: "error-text"
                                }, {
                                    children: e
                                })), (0, o.tZ)("div", (0, i.pi)({
                                    className: "action"
                                }, {
                                    children: (0, o.tZ)("button", (0, i.pi)({
                                        onClick: function() {
                                            return window.history.go(-1), !1
                                        },
                                        className: "xui-btn xui-btn--emphasized"
                                    }, {
                                        children: "Go back"
                                    }))
                                }))]
                            }))
                        }))
                    }))
                }))
            }

            function _() {
                return (0, o.tZ)("div", (0, i.pi)({
                    className: "xui-card--loading"
                }, {
                    children: "Loading..."
                }))
            }
            var m, v = n(40582),
                g = n(93655);
            ! function(t) {
                t.CONTROLS = "controls xui-wizard--footer", t.NEXT_BUTTON = "xui-btn xui-btn--emphasized "
            }(m || (m = {}));
            var y, w, b = {
                    HTMLCard: l.RA,
                    AdaptiveCard: l.CH
                },
                E = {
                    Redirect: function(t) {
                        window.location.href = g.k["RESLOADER.SERVER_URL"] + g.k["ROUTE.POST_LOGIN"]
                    },
                    RedirectLogin: function(t) {
                        window.location.href = g.k["RESLOADER.SERVER_URL"] + g.k["ROUTE.UNAUTHENTICATED"]
                    },
                    ShowMessage: function(t) {
                        var e = "Thank you for submitting the application. We are waiting for approval. You will be notified of the application status soon.";
                        return t.altOptions && t.altOptions.message && (e = t.altOptions.message), (0, o.tZ)("div", (0, i.pi)({
                            class: "",
                            style: "\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n"
                        }, {
                            children: (0, o.BX)("div", (0, i.pi)({
                                class: "xui-text-center"
                            }, {
                                children: [(0, o.tZ)("i", {
                                    class: "fas fa-magic xui-text-color--ghost fa-3x xui-mb-2"
                                }), (0, o.tZ)("h4", {
                                    children: e
                                })]
                            }))
                        }))
                    }
                },
                C = d.Route.getInstance();
            ! function(t) {
                t[t.LOADING = 0] = "LOADING", t[t.DOES_NOT_EXIST = 1] = "DOES_NOT_EXIST"
            }(y || (y = {})),
            function(t) {
                t.HORIZONTAL = "hori", t.VERTICAL = "vert"
            }(w || (w = {}));
            var S = {
                    next: {
                        title: "Next >",
                        position: "right"
                    },
                    previous: {
                        title: "< Previous",
                        position: "left"
                    }
                },
                I = function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return n.componentName = "Workflow", n.activeStage = y.LOADING, n.flowUI = [], n.flowCurrentStepIndex = 0, n.publicUID = null, n.api = u.b.getInstance(), n.state = {
                            enabledButtons: [],
                            activeStage: y.LOADING
                        }, n.props = e, n.init(), n
                    }
                    return (0, i.ZT)(e, t), e.prototype.getApi = function(t, e, n) {
                        return void 0 === n && (n = {}), (0, i.mG)(this, void 0, void 0, (function() {
                            var r;
                            return (0, i.Jh)(this, (function(o) {
                                return r = (0, i.pi)({
                                    action: t,
                                    data: e,
                                    wfID: this.wfID
                                }, n), this.publicUID && (r.publicUID = this.publicUID), [2, this.api.get(this.props.handler, r).then((function(t) {
                                    return t.body
                                }))]
                            }))
                        }))
                    }, e.prototype.init = function() {
                        return (0, i.mG)(this, void 0, void 0, (function() {
                            var t, e, n = this;
                            return (0, i.Jh)(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return this.setState({}), [4, (t = v.Session.getInstance()).isAuthenticatedAsync()];
                                    case 1:
                                        return r.sent() ? [3, 3] : (e = this, [4, t.getPublicUserID()]);
                                    case 2:
                                        e.publicUID = r.sent(), r.label = 3;
                                    case 3:
                                        return this.wfID = C.getURLParams("wf"), [2, this.getApi("getStage", {}).then((function(t) {
                                            return n.wf = t, n.onLoad()
                                        }))]
                                }
                            }))
                        }))
                    }, e.prototype.onAction = function(t) {
                        return (0, i.mG)(this, void 0, void 0, (function() {
                            var e;
                            return (0, i.Jh)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        switch (t) {
                                            case "previous":
                                                return [3, 1];
                                            case "next":
                                                return [3, 6]
                                        }
                                        return [3, 7];
                                    case 1:
                                        return [4, this.getApi("getStage", {}, {
                                            stageID: this.activeStage.previousStageID
                                        })];
                                    case 2:
                                        return (e = n.sent()).returnedStage !== this.activeStage.previousStageID ? [3, 4] : [4, this.loadStage(e.ui[e.returnedStage])];
                                    case 3:
                                        return n.sent(), [3, 5];
                                    case 4:
                                        throw new Error("I think backend API has gone nuts, requested ".concat(this.activeStage.previousStageID, " but got ").concat(e.returnedStage, "."));
                                    case 5:
                                    case 7:
                                        return [2];
                                    case 6:
                                        if ("function" != typeof this.activeCardOptions.cardVars.XWorkflow.onNext) throw new Error("action should have cb");
                                        return [2, this.activeCardOptions.cardVars.XWorkflow.onNext()]
                                }
                            }))
                        }))
                    }, e.prototype.updateFlowUI = function() {
                        var t = this.wf.ui.flow || [];
                        this.flowUI = t;
                        for (var e = 0; e < t.length; ++e)
                            if (t[e] && t[e].stages && t[e].stages.indexOf(this.activeStageID) >= 0) {
                                this.flowCurrentStepIndex = e;
                                break
                            }
                    }, e.prototype.loadStage = function(t) {
                        return (0, i.mG)(this, void 0, void 0, (function() {
                            var e = this;
                            return (0, i.Jh)(this, (function(n) {
                                return this.setState({
                                    enabledButtons: [],
                                    activeStage: y.LOADING
                                }), this.activeStageID = t.id, this.activeStageName = t.name, this.updateFlowUI(), this.activeCardOptions = {
                                    cardVars: {
                                        XWorkflow: {
                                            options: t.options,
                                            uiData: t.uiData,
                                            sharedData: this.sharedData,
                                            enableNext: function(t) {
                                                if (void 0 === t && (t = !0), -1 !== e.state.enabledButtons.indexOf("next")) {
                                                    if (t) return !1;
                                                    e.setState({
                                                        enabledButtons: e.state.enabledButtons.filter((function(t) {
                                                            return "next" !== t
                                                        }))
                                                    })
                                                } else {
                                                    if (!t) return !1;
                                                    e.setState({
                                                        enabledButtons: (0, i.ev)((0, i.ev)([], e.state.enabledButtons, !0), ["next"], !1)
                                                    })
                                                }
                                            },
                                            onNext: function() {
                                                return alert("Next is not handled by current stage.")
                                            },
                                            submit: function(n) {
                                                return e.getApi("submit", n, {
                                                    stageID: t.id
                                                })
                                            },
                                            done: function(n) {
                                                return (0, i.mG)(e, void 0, void 0, (function() {
                                                    var e;
                                                    return (0, i.Jh)(this, (function(r) {
                                                        switch (r.label) {
                                                            case 0:
                                                                return [4, this.getApi("done", n, {
                                                                    stageID: t.id
                                                                })];
                                                            case 1:
                                                                return (e = r.sent()) && e.next ? (this.wfID || this.wfID == e.next.wfID || (this.wfID = e.next.wfID, C.setURLParams({
                                                                    wf: this.wfID
                                                                })), this.currentStageID = e.next.ui.id, [4, this.loadStage(e.next.ui)]) : [3, 3];
                                                            case 2:
                                                                return r.sent(), [3, 4];
                                                            case 3:
                                                                e && e.error && p.toast.error(e.error.code, e.error.message), r.label = 4;
                                                            case 4:
                                                                return [2, e]
                                                        }
                                                    }))
                                                }))
                                            },
                                            renderAdaptive: l.CH.renderSchema
                                        }
                                    }
                                }, [2, this.setState({
                                    enabledButtons: [],
                                    activeStage: t
                                })]
                            }))
                        }))
                    }, e.prototype.onLoad = function() {
                        return (0, i.mG)(this, void 0, void 0, (function() {
                            var t;
                            return (0, i.Jh)(this, (function(e) {
                                switch (e.label) {
                                    case 0:
                                        return this.wf ? this.wf.ui ? (t = this.wf.ui.stages[this.wf.currentStage], this.currentStageID = this.wf.currentStage, [4, this.loadStage(t)]) : [2, this.setState({
                                            activeStage: y.DOES_NOT_EXIST
                                        })] : [2, this.setState({
                                            activeStage: y.LOADING
                                        })];
                                    case 1:
                                        return e.sent(), [2]
                                }
                            }))
                        }))
                    }, e.prototype.render = function(t, e) {
                        var n = this;
                        if (e.dynamicComponent) return e.dynamicComponent;
                        var r = e.activeStage;
                        if (r === y.LOADING) return _();
                        if (r === y.DOES_NOT_EXIST) return (0, o.tZ)("div", {
                            children: "The requested Workflow doesn't exist."
                        });
                        if (!r) return (0, o.BX)("div", {
                            children: ["Some unknown state ", r]
                        });
                        var s = this.flowUI.length && !t.hideUIFlow,
                            a = C.getURLParams("o") ? C.getURLParams("o") : "vert",
                            c = a == w.HORIZONTAL ? "xui-wizard-wrapper--horizontal" : "xui-wizard-wrapper",
                            u = a == w.HORIZONTAL ? "12" : "3",
                            l = a == w.HORIZONTAL ? "12" : "9";
                        if (s || (l = "12"), !b[r.type]) return E[r.type] || E[r.type] ? E[r.type](r) : (0, o.BX)("div", {
                            children: ["Unknown stage UI $", r.type, " for $", r]
                        });
                        var d = t.designUIFlow,
                            p = " xui-wizard-design-" + d,
                            h = [{
                                title: "Benefits",
                                list: ["Make a type specimen", "Editors now use modern components", "Center alignment text option available", "Array data is accepted to populate form", "Multiple WF Design available"]
                            }] || 0,
                            f = b[r.type];
                        return (0, o.BX)("div", (0, i.pi)({
                            className: "xui-row " + c + p
                        }, {
                            children: [s ? (0, o.BX)("div", (0, i.pi)({
                                className: "xui-col-md-" + u + " xui-wizard-left xui-mt-0" + (this.props.noStepper ? "hidden" : ""),
                                style: 1 === d ? "--total-steps:" + this.flowUI.length + ";--steps-completed:" + this.flowCurrentStepIndex + ";" : ""
                            }, {
                                children: [(0, o.tZ)("ul", (0, i.pi)({
                                    class: "xui-wizard__sidebar__steps xui-list--nostyle "
                                }, {
                                    children: this.flowUI.map((function(t, e) {
                                        var r = "xui-list__item xui-wizard__sidebar__steps--step ";
                                        return e < n.flowCurrentStepIndex ? r += "xui-wizard__sidebar__steps--step--visited" : e == n.flowCurrentStepIndex && (r += "xui-wizard__sidebar__steps--step--active"), (0, o.tZ)("li", (0, i.pi)({
                                            class: r
                                        }, {
                                            children: (0, o.tZ)("a", (0, i.pi)({
                                                href: "#",
                                                class: ""
                                            }, {
                                                children: t.title
                                            }))
                                        }))
                                    }))
                                })), 2 === d && 0 !== h.length ? (0, o.BX)("div", (0, i.pi)({
                                    className: "xui-wizard__sidebar__info"
                                }, {
                                    children: [(0, o.tZ)("div", {
                                        className: "xui-wizard__sidebar__info--image"
                                    }), (0, o.tZ)("h1", (0, i.pi)({
                                        className: "xui-wizard__sidebar__info--heading"
                                    }, {
                                        children: h[0].title
                                    })), (0, o.tZ)("ul", (0, i.pi)({
                                        class: "xui-list--nostyle xui-wizard__sidebar__info--list"
                                    }, {
                                        children: h[0].list.map((function(t) {
                                            return (0, o.BX)("li", {
                                                children: [" ", (0, o.tZ)("i", {
                                                    className: "xui-text-color--positive fa fa-check-circle xui-mr-1"
                                                }), (0, o.tZ)("div", {
                                                    children: t
                                                })]
                                            })
                                        }))
                                    }))]
                                })) : ""]
                            })) : "", (0, o.BX)("div", (0, i.pi)({
                                className: (2 === d ? "xui-col " : "xui-col-md-" + l) + " xui-wizard-right xui-mt-0",
                                style: 2 === d ? "--total-steps:" + this.flowUI.length + ";--steps-completed:" + this.flowCurrentStepIndex + ";" : ""
                            }, {
                                children: [this.activeStageName ? (0, o.tZ)("div", (0, i.pi)({
                                    className: "xui-wizard--header"
                                }, {
                                    children: this.activeStageName
                                })) : "", (0, o.tZ)("div", (0, i.pi)({
                                    className: "xui-wizard--body"
                                }, {
                                    children: (0, o.tZ)(f, (0, i.pi)({}, r, {
                                        forceUpdate: !1,
                                        options: this.activeCardOptions
                                    }))
                                }))]
                            })), (0, o.tZ)("div", (0, i.pi)({
                                className: m.CONTROLS
                            }, {
                                children: e.enabledButtons.map((function(t) {
                                    var e = S[t];
                                    return (0, o.tZ)("button", (0, i.pi)({
                                        className: "".concat(m.NEXT_BUTTON, " float-").concat(e.position),
                                        onClick: function() {
                                            return n.onAction(t)
                                        }
                                    }, {
                                        children: e.title
                                    }))
                                }))
                            }))]
                        }))
                    }, e
                }(a.w),
                T = n(97035);

            function x(t, e) {
                return e = e || "", t.map((function(t, n) {
                    var r = e + ("/" === e.substr(-1) ? "" : "/") + ("/" === t.path.substr(0, 1) ? t.path.substr(1, t.path.length - 1) : t.path);
                    return (0, o.BX)("li", (0, i.pi)({
                        class: "".concat("", " ").concat(t.sub && t.sub.length ? "sidebar-dropdown" : "")
                    }, {
                        children: [(0, o.BX)("a", (0, i.pi)({
                            "data-key": t.key,
                            href: t.disabled ? "" : r,
                            title: t.name,
                            class: "nav-link " + (t.disabled ? " disabled " : "") + (t.classes || ""),
                            target: t.target || ""
                        }, {
                            children: [t.icon ? (0, o.tZ)("i", {
                                class: t.icon
                            }) : (0, o.tZ)("span", {}), t.name]
                        })), t.description ? (0, o.tZ)("span", (0, i.pi)({
                            class: "menu-description"
                        }, {
                            children: t.description
                        })) : "", !t.disabled && t.sub && t.sub.length ? (0, o.tZ)("ul", (0, i.pi)({
                            class: "sub-menu"
                        }, {
                            children: x(t.sub, r)
                        })) : ""]
                    }))
                }))
            }
            var N = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e, n) || this;
                        return r.componentName = "NavBar", r.render = r.render.bind(r), r
                    }
                    return (0, i.ZT)(e, t), e.prototype.onMount = function(t) {
                        this.element = t
                    }, e.prototype.highlightSelected = function() {}, e.prototype.load = function(t) {
                        this.props.menu = t, this.rerender(), this.highlightSelected()
                    }, e.prototype.getInitials = function(t) {
                        for (var e = t.split(" "), n = "", r = 0; r < e.length; r++) e[r].length > 0 && "" !== e[r] && (n += e[r][0]);
                        return n.toLocaleUpperCase()
                    }, e.prototype.render = function(t, e) {
                        return (0, o.tZ)("div", {
                            children: t.menu ? (0, o.BX)("div", {
                                children: [(0, o.BX)("nav", (0, i.pi)({
                                    id: "menu"
                                }, {
                                    children: [(0, o.tZ)("div", (0, i.pi)({
                                        className: "xui-sidebar-item sidebar-brand"
                                    }, {
                                        children: (0, o.tZ)("img", {
                                            src: "/assets/img/Logo.png",
                                            alt: "",
                                            style: "height:inherit"
                                        })
                                    })), (0, o.BX)("label", (0, i.pi)({
                                        htmlFor: "tm",
                                        id: "toggle-menu"
                                    }, {
                                        children: ["Navigation ", (0, o.tZ)("span", (0, i.pi)({
                                            className: "drop-icon"
                                        }, {
                                            children: "▾"
                                        }))]
                                    })), (0, o.tZ)("input", {
                                        type: "checkbox",
                                        id: "tm"
                                    }), (n = t.menu, (0, o.tZ)("ul", (0, i.pi)({
                                        class: void 0 === r ? "main-menu clearfix" : "sub-menu"
                                    }, {
                                        children: x(n, r)
                                    })))]
                                })), (0, o.tZ)("div", (0, i.pi)({
                                    class: "xui-topbar",
                                    style: "margin: -8px 0px"
                                }, {
                                    children: t && t.username && (0, o.BX)("div", (0, i.pi)({
                                        class: "xui-userinfo xui-ml-auto"
                                    }, {
                                        children: [(0, o.tZ)("figure", (0, i.pi)({
                                            class: "xui-avatar xui-avatar--sm"
                                        }, {
                                            children: (0, o.tZ)("div", (0, i.pi)({
                                                class: "xui-avatar__name",
                                                title: t.username
                                            }, {
                                                children: this.getInitials(t.username)
                                            }))
                                        })), (0, o.tZ)("span", (0, i.pi)({
                                            class: "xui-username"
                                        }, {
                                            children: (0, o.BX)("strong", {
                                                children: ["@", t.username.split("@")[0]]
                                            })
                                        })), (0, o.tZ)("div", (0, i.pi)({
                                            class: "xui-user-dropdown",
                                            style: "z-index : 2"
                                        }, {
                                            children: (0, o.BX)("ul", (0, i.pi)({
                                                class: "xui-list--menu"
                                            }, {
                                                children: [(0, o.tZ)("li", (0, i.pi)({
                                                    class: "xui-list--menu__item"
                                                }, {
                                                    children: (0, o.BX)("a", (0, i.pi)({
                                                        href: "/tiket/profile",
                                                        className: T.Oe
                                                    }, {
                                                        children: [(0, o.tZ)("span", (0, i.pi)({
                                                            class: "xui-icon"
                                                        }, {
                                                            children: (0, o.tZ)("i", {
                                                                class: "fas fa-user-cog"
                                                            })
                                                        })), "My Profile"]
                                                    }))
                                                })), (0, o.tZ)("li", (0, i.pi)({
                                                    class: "xui-list--menu__item"
                                                }, {
                                                    children: (0, o.BX)("a", (0, i.pi)({
                                                        href: "/tiket/support",
                                                        className: T.Oe
                                                    }, {
                                                        children: [(0, o.tZ)("span", (0, i.pi)({
                                                            class: "xui-icon"
                                                        }, {
                                                            children: (0, o.tZ)("i", {
                                                                class: "far fa-life-ring"
                                                            })
                                                        })), "Support"]
                                                    }))
                                                })), (0, o.tZ)("li", (0, i.pi)({
                                                    class: "xui-list--menu__item"
                                                }, {
                                                    children: (0, o.BX)("a", (0, i.pi)({
                                                        href: "/sys/logout",
                                                        className: T.Oe
                                                    }, {
                                                        children: [(0, o.tZ)("span", (0, i.pi)({
                                                            class: "xui-icon"
                                                        }, {
                                                            children: (0, o.tZ)("i", {
                                                                class: "fas fa-sign-out-alt"
                                                            })
                                                        })), "Logout "]
                                                    }))
                                                }))]
                                            }))
                                        }))]
                                    }))
                                }))]
                            }) : (0, o.tZ)("span", {})
                        });
                        var n, r
                    }, e
                }(a.w),
                O = n(89387),
                A = function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return n.isMounted = !1, n.ref = (0, s.Vf)(), n.vueComponents = O.z.getInstance(), n
                    }
                    return (0, i.ZT)(e, t), e.prototype.shouldComponentUpdate = function(t, e) {
                        return !1
                    }, e.prototype.componentDidMount = function() {
                        var t = this;
                        return this.props && this.props.name ? (this.isMounted = !0, this.vueComponents.new({
                            el: this.ref.current,
                            template: "\n        <".concat(this.props.name, ' v-bind="$data"/>'),
                            data: this.props.props || this.props.options || {}
                        }).then((function(e) {
                            return t.vm = e
                        }))) : this.ref.current.innerHTML = "Error: name of component is needed."
                    }, e.prototype.componentWillUnmount = function() {
                        this.vm.$destroy(), this.vm.$el.innerHTML = "", this.isMounted = !1
                    }, e.prototype.componentDidUpdate = function(t, e, n) {}, e.prototype.render = function(t, e, n) {
                        return (0, o.tZ)("div", {
                            ref: this.ref,
                            style: "vue-component col-md-" + (this.props.width || 12)
                        })
                    }, e
                }(a.w);

            function P(t) {
                return (0, o.tZ)("div", (0, i.pi)({
                    className: t.class || "xui-container"
                }, {
                    children: t.children
                }))
            }

            function D(t) {
                return (0, o.tZ)("div", (0, i.pi)({
                    className: t.class || ""
                }, {
                    children: t.children
                }))
            }

            function R(t) {
                return (0, o.tZ)("div", (0, i.pi)({
                    className: "xui-col-md-".concat(t.width)
                }, {
                    children: t.children
                }))
            }

            function k(t) {
                return Array.isArray(t.children) ? (0, o.tZ)("div", (0, i.pi)({
                    className: "xui-row"
                }, {
                    children: t.children.map((function(t) {
                        return (0, o.tZ)("div", (0, i.pi)({
                            className: "xui-col-md-".concat(t.props.width || 12)
                        }, {
                            children: t
                        }))
                    }))
                })) : (0, o.tZ)("div", (0, i.pi)({
                    className: "xui-row"
                }, {
                    children: (0, o.tZ)("div", (0, i.pi)({
                        className: "xui-col-md-".concat(t.children.props.width || 12)
                    }, {
                        children: t.children
                    }))
                }))
            }

            function L(t, e) {
                return (0, o.tZ)("textarea", {
                    children: t.text
                })
            }
            var U = l.RA,
                M = l.CH,
                B = N,
                Z = I,
                K = A,
                j = n(41900),
                H = function() {
                    function t() {}
                    return t.prototype.getViewAPI = function(t) {
                        return u.b.getInstance().get(T.Z6.PAGE_GET, {
                            pageID: t
                        }).then((function(t) {
                            return t.body
                        }))
                    }, t.prototype.getViewDirectory = function(t) {
                        return j.ResLoader.getInstance().fetch(t + ".json")
                    }, t.prototype.getAsset = function() {}, t.prototype._parseResponse = function(t) {
                        var e = t;
                        if ("string" == typeof t.body) try {
                            e.body = JSON.parse(e.body)
                        } catch (t) {
                            return console.log(t), e.html = e.body, e
                        } else e.body;
                        return t.error && (e.status = 501), e
                    }, t.prototype.getPage = function(t) {
                        var e = this;
                        return g.k.DEV ? this.getViewDirectory(t).then((function(n) {
                            return 200 !== n.status ? e.getViewAPI(t) : n
                        })).then(this._parseResponse) : this.getViewAPI(t).then((function(n) {
                            return 200 !== n.status ? e.getViewDirectory(t) : n
                        })).then(this._parseResponse)
                    }, t.prototype.getCard = function() {}, t
                }(),
                G = new H,
                W = function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return n.componentName = "Page", n.toLoad = null, n.initialized = !1, n.resLoader = j.ResLoader.getInstance(), n.route = e.route, n.app = e.app, n.load(e.url), n.state = {
                            status: 0,
                            error: null
                        }, n
                    }
                    return (0, i.ZT)(e, t), e.prototype.reload = function() {}, e.prototype.load = function(t) {
                        return (0, i.mG)(this, void 0, void 0, (function() {
                            var e, n = this;
                            return (0, i.Jh)(this, (function(r) {
                                return e = t.pathName, this.setState({
                                    schema: !1,
                                    url: t,
                                    status: 0
                                }, (function() {
                                    n.forceUpdate()
                                })), "/" === e.substr(-1) && (e += "default"), [2, G.getPage(e).then((function(t) {
                                    return (0, i.mG)(n, void 0, void 0, (function() {
                                        var e, n, r, o;
                                        return (0, i.Jh)(this, (function(i) {
                                            switch (i.label) {
                                                case 0:
                                                    return e = t.body, n = t.status, r = t.error, o = e, 200 !== n ? [3, 3] : o.authenticated ? [4, this.route.requireAuthentication(!0)] : [3, 2];
                                                case 1:
                                                    if (i.sent()) return [2];
                                                    i.label = 2;
                                                case 2:
                                                    return o.title && this.route.setTitle(o.title), this.app.setNavVisibility(!o.hideNav), [2, this.setState({
                                                        status: n,
                                                        schema: o.schema
                                                    })];
                                                case 3:
                                                    return this.app.setNavVisibility(!1), [2, this.setState({
                                                        status: n,
                                                        error: r
                                                    })]
                                            }
                                        }))
                                    }))
                                }))]
                            }))
                        }))
                    }, e.prototype.shouldComponentUpdate = function(t, e) {
                        return this.props.url !== t.url && this.load(t.url), !0
                    }, e.prototype.render = function(t, e) {
                        switch (e.status) {
                            case 200:
                                return (0, o.tZ)("div", (0, i.pi)({
                                    className: "xui-page"
                                }, {
                                    children: (0, o.tZ)(c, {
                                        components: r,
                                        schema: e.schema
                                    })
                                }));
                            case 404:
                                return f(e.url);
                            case 501:
                                return h(501, e.error.message);
                            case void 0:
                            case 0:
                                return (0, o.tZ)("div", (0, i.pi)({
                                    className: "xui-page"
                                }, {
                                    children: _()
                                }));
                            default:
                                return (0, o.tZ)("div", (0, i.pi)({
                                    className: "xui-page"
                                }, {
                                    children: "Unknown page status."
                                }))
                        }
                    }, e
                }(a.w),
                z = n(48011),
                J = function(t) {
                    function e(n) {
                        var r = t.call(this, n) || this;
                        return r.sessionState = !1, e.ref = r, r.route = d.Route.getInstance(), r.session = v.Session.getInstance(), r.config = g.Z.getInstance(), r.api = u.b.getInstance(), r.navbarVisible = r.config["APP.NAV"], r.state = {}, r.route.on("ready", r.onDOMReady.bind(r)), r.route.on("locationChange", r.onPageChange.bind(r)), r.route.on("hashChange", r.onHashChange.bind(r)), r
                    }
                    return (0, i.ZT)(e, t), e.getInstance = function() {
                        if (this._instance) return this._instance;
                        if (window.TIK = window.TIK || {}, window.TIK.INSTANCES = window.TIK.INSTANCES || {}, this._instance = window.TIK.INSTANCES.App, !Boolean(this._instance)) {
                            var t = document.getElementById("xui");
                            t.innerHTML = "";
                            var n = (0, s.h)(e);
                            this._instance = window.TIK.INSTANCES.App = e.ref, (0, s.sY)(n, t), d.Route.getInstance().bindAppElement(t)
                        }
                        return this._instance
                    }, e.prototype.getSchema = function(t) {
                        var e = [];
                        return this.state.nav && e.push({
                            type: "Vue",
                            name: "VueUIShell",
                            options: {
                                appName: this.config.APP_NAME,
                                menu: !!this.state.nav && this.config["APP.MENU"],
                                username: this.session.getUsername(),
                                poweredName: this.config.APP_NAME,
                                poweredLink: this.config.APP_LINK,
                                version: this.config.APP_VERSION,
                                langs: this.config["APP.LANGS"],
                                releaseNotes: this.config["APP.RELEASE_NOTES"]
                            }
                        }), e.push({
                            type: "Container",
                            class: "xui-container-fluid xui-page-container",
                            child: [{
                                type: "Page",
                                route: this.route,
                                app: this,
                                url: t
                            }]
                        }), {
                            schema: {
                                type: "Div",
                                class: "xui-app " + (this.state.nav ? "" : " xui-app-sidebar-hide "),
                                child: e
                            }
                        }
                    }, e.prototype.loadSession = function() {
                        return (0, i.mG)(this, void 0, void 0, (function() {
                            return (0, i.Jh)(this, (function(t) {
                                return [2, this.session.loadAsync(u.b.getInstance().getOne(T.Z6.SESSION_INFO))]
                            }))
                        }))
                    }, e.prototype.componentDidMount = function() {
                        return (0, i.mG)(this, void 0, void 0, (function() {
                            var t = this;
                            return (0, i.Jh)(this, (function(e) {
                                return setTimeout((function() {
                                    return (0, i.mG)(t, void 0, void 0, (function() {
                                        return (0, i.Jh)(this, (function(t) {
                                            switch (t.label) {
                                                case 0:
                                                    return [4, this.onDOMReady(this.route.getCurrentURL())];
                                                case 1:
                                                    return t.sent(), [2]
                                            }
                                        }))
                                    }))
                                }), 100), [2]
                            }))
                        }))
                    }, e.prototype.onDOMReady = function(t) {
                        return (0, i.mG)(this, void 0, void 0, (function() {
                            var e;
                            return (0, i.Jh)(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        if (this.currentUrl = t, !1 !== this.sessionState) return [2];
                                        this.sessionState = -1, n.label = 1;
                                    case 1:
                                        return n.trys.push([1, 3, , 4]), [4, this.loadSession()];
                                    case 2:
                                        return n.sent(), [3, 4];
                                    case 3:
                                        return e = n.sent(), this.sessionState = -2, (0, z.isOffline)() ? this.setState({
                                            dynamicElement: h("Offline", "We are not able to reach the server, it seems like your device is not connected to internet.", "You are not connected to internet.")
                                        }) : this.setState({
                                            dynamicElement: h(502, e.message)
                                        }), [2, !1];
                                    case 4:
                                        return this.sessionState = 1, this.setState({
                                            dynamicElement: !1,
                                            url: t
                                        }), [2]
                                }
                            }))
                        }))
                    }, e.prototype.onPageChange = function(t) {
                        console.log("Location Change", t), this.setState({
                            dynamicElement: !1,
                            url: t
                        })
                    }, e.prototype.onHashChange = function(t) {}, e.prototype.setNavVisibility = function(t) {
                        this.setState({
                            nav: !!t && this.config["APP.MENU"]
                        })
                    }, e.prototype.render = function(t, e, n) {
                        return e.url ? (0, o.tZ)(c, {
                            components: {
                                NavBar: B,
                                Page: W,
                                Column: R,
                                Row: k,
                                Container: P,
                                Div: D,
                                Vue: K
                            },
                            schema: this.getSchema(e.url).schema
                        }) : e.dynamicElement ? e.dynamicElement : _()
                    }, e
                }(s.wA)
        },
        91540: function(t, e, n) {
            n.d(e, {
                w: function() {
                    return o
                }
            });
            var r = n(59312),
                i = n(10473),
                o = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.jsonUI = e, r.props = n, r.state = {}, r
                    }
                    return (0, r.ZT)(e, t), e.prototype._onMount = function(t) {
                        return this.element = t, this.onMount(this.element)
                    }, e.prototype._render = function() {
                        return this.currentVDom = this.render()
                    }, e.prototype.rerender = function(t) {
                        var e = this;
                        void 0 === t && (t = !1), !0 !== t && (null !== this.rerenderTimeout && clearTimeout(this.rerenderTimeout), this.rerenderTimeout = setTimeout((function() {
                            return e.rerender(!0)
                        }), 10)), this.element && this.currentVDom
                    }, e.prototype.onMount = function(t) {}, e
                }(i.wA)
        },
        84767: function(t, e, n) {
            n.d(e, {
                B: function() {
                    return i
                }
            });
            var r = n(16849),
                i = function() {
                    function t() {}
                    return t.getInstance = function() {
                        var e = (0, r.Jj)();
                        return this._instance || (e.TIK = e.TIK || {}, e.TIK.INSTANCES = e.TIK.INSTANCES || {}), this._instance ? this._instance : this._instance = e.TIK.INSTANCES.Registry = e.TIK.INSTANCES.Registry || new t
                    }, t.prototype.register = function(e, n, r, i) {
                        return this.isRegistered(e, n) ? (console.log("Component of type ".concat(e, " and name ").concat(n, " is already registered.")), !1) : (t.Store[e + "." + n] = {
                            type: e,
                            ref: r,
                            schema: i
                        }, !0)
                    }, t.prototype.isRegistered = function(e, n) {
                        return void 0 !== t.Store[e + "." + n]
                    }, t.prototype.unregister = function(e, n) {
                        return this.isRegistered(e, n) ? (delete t.Store[e + "." + n], !0) : (console.log("Component of type ".concat(e, " and name ").concat(n, " is not registered.")), !1)
                    }, t.prototype.get = function(e, n) {
                        return t.Store[e + "." + n] || null
                    }, t.prototype.getComponent = function(t, e) {
                        return (this.get(t, e) || {}).ref || null
                    }, t.prototype.getSchema = function(t, e) {
                        return (this.get(t, e) || {}).schema || null
                    }, t.prototype.getComponentsList = function() {
                        return Object.keys(t.Store)
                    }, t.prototype.getCompleteSchema = function() {
                        var e = {};
                        return this.getComponentsList().forEach((function(n) {
                            t.Store[n].schema && (e[n] = t.Store[n].schema)
                        })), {
                            $schema: "http://json-schema.org/draft-06/schema#",
                            type: "object",
                            definitions: e
                        }
                    }, t.Store = {}, t
                }()
        },
        51923: function(t, e, n) {
            n.d(e, {
                z: function() {
                    return i
                }
            });
            var r = n(84767),
                i = function(t) {
                    this.registry = r.B.getInstance(), this.type = t
                }
        },
        89387: function(t, e, n) {
            n.d(e, {
                z: function() {
                    return a
                }
            });
            var r = n(59312);

            function i() {
                return '<div class="xui-card--loading">Loading...</div>'
            }
            var o = n(51923),
                s = n(16849),
                a = function(t) {
                    function e() {
                        var e = t.call(this, "vue") || this;
                        return e.vue = null, e.readyQueue = [], e
                    }
                    return (0, r.ZT)(e, t), e.getInstance = function() {
                        var t = (0, s.Jj)();
                        return this._instance || (t.TIK = t.TIK || {}, t.TIK.INSTANCES = t.TIK.INSTANCES || {}), this._instance ? this._instance : this._instance = t.TIK.INSTANCES.VueComponents = t.TIK.INSTANCES.VueComponents || new e
                    }, e.prototype.new = function(t) {
                        var e = this;
                        if (!this.vue) {
                            console.log("Pushed to ready queue");
                            var n = null;
                            return (n = "string" == typeof t.el ? document.querySelector(t.el) : t.el) && (n.innerHTML = i()), new Promise((function(n) {
                                return e.readyQueue.push({
                                    resolve: n,
                                    props: t
                                })
                            }))
                        }
                        return Promise.resolve(new this.vue((0, r.pi)((0, r.pi)({}, this.defaultParams), t)))
                    }, e.prototype.initialize = function(t, e) {
                        var n = this;
                        return this.vue = t, this.defaultParams = e, this.readyQueue.length && this.readyQueue.forEach((function(t) {
                            var e = t.resolve,
                                r = t.props;
                            return e(new n.vue(r))
                        })), Promise.resolve(null)
                    }, e.prototype.renderComponent = function(t, e) {
                        return (0, r.mG)(this, void 0, void 0, (function() {
                            var n;
                            return (0, r.Jh)(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (null === this.vue) throw Error("Vue components registry is not initialized yet.");
                                        return (t = "string" == typeof t ? this.registry.getComponent(this.type, t) : t) ? "function" != typeof t ? [3, 2] : [4, t()] : [2, null];
                                    case 1:
                                        t = r.sent().default, r.label = 2;
                                    case 2:
                                        return n = this.vue.extend(t), new n({
                                            propsData: e || {}
                                        }), [2]
                                }
                            }))
                        }))
                    }, e.prototype.mountComponent = function(t, e) {
                        if (t = "string" == typeof t ? document.querySelector(t) : t, !e) return t.innerHTML = "Unable to find component. ";
                        e.$mount(), t.innerHTML = "", t.appendChild(e.$el)
                    }, e.prototype.render = function(t, e, n) {
                        return (0, r.mG)(this, void 0, void 0, (function() {
                            return (0, r.Jh)(this, (function(r) {
                                return [2, this.mountComponent(t, this.renderComponent(e, n))]
                            }))
                        }))
                    }, e
                }(o.z)
        },
        3587: function(t, e, n) {
            n.r(e), n.d(e, {
                ComponentsRegistry: function() {
                    return u.B
                },
                PreactComponents: function() {
                    return c
                },
                VueComponents: function() {
                    return r.z
                }
            });
            var r = n(89387),
                i = n(59312),
                o = n(51923),
                s = n(10473),
                a = n(16849),
                c = function(t) {
                    function e() {
                        return t.call(this, "preact") || this
                    }
                    return (0, i.ZT)(e, t), e.getInstance = function() {
                        var t = (0, a.Jj)();
                        return this._instance || (t.TIK = t.TIK || {}, t.TIK.INSTANCES = t.TIK.INSTANCES || {}), this._instance ? this._instance : this._instance = t.TIK.INSTANCES.PreactComponents = t.TIK.INSTANCES.PreactComponents || new e
                    }, e.prototype.initialize = function() {
                        return !0
                    }, e.prototype.renderComponent = function(t, e) {
                        return t = "string" == typeof t ? this.registry.get(this.type, t) : t, (0, s.az)(t.ref, e || {})
                    }, e.prototype.mountComponent = function(t, e) {
                        return t = "string" == typeof t ? document.querySelector(t) : t, (0, s.sY)(e, t)
                    }, e.prototype.render = function(t, e, n) {
                        return this.mountComponent(t, this.renderComponent(e, n))
                    }, e
                }(o.z),
                u = n(84767)
        },
        74015: function(t, e, n) {
            n.r(e), n.d(e, {
                fileUtility: function() {
                    return a
                }
            });
            var r = n(59312),
                i = n(95055),
                o = n(16849),
                s = new(function() {
                    function t() {
                        this.api = i.b.getInstance()
                    }
                    return t.getInstance = function() {
                        var e = (0, o.Jj)();
                        return this._instance || (e.TIK = e.TIK || {}, e.TIK.INSTANCES = e.TIK.INSTANCES || {}), this._instance ? this._instance : this._instance = e.TIK.INSTANCES.FileUtility = e.TIK.INSTANCES.FileUtility || new t
                    }, t.prototype.uploadFile = function(t, e, n) {
                        return void 0 === e && (e = null), void 0 === n && (n = null), (0, r.mG)(this, void 0, void 0, (function() {
                            var i;
                            return (0, r.Jh)(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, this.api.get("xstore/handler/getUploadUrl", {})];
                                    case 1:
                                        return i = r.sent(), [2, new Promise((function(r, o) {
                                            console.log(i);
                                            var s = i.body.formData,
                                                a = new FormData;
                                            s.key += t.name;
                                            for (var c = 0, u = Object.keys(s); c < u.length; c++) {
                                                var l = u[c];
                                                a.append(l, s[l])
                                            }
                                            a.append("file", t), e && e(0);
                                            var d = new XMLHttpRequest;
                                            d.upload.addEventListener("progress", (function(t) {
                                                return t.lengthComputable && e && e(Math.round(100 * t.loaded / t.total))
                                            }), !1), d.addEventListener("loadend", (function(t) {
                                                return 200 !== this.status && 204 !== this.status || e && e(100), r(s.key)
                                            }), !1), d.addEventListener("error", (function() {
                                                return n("failed to upload.") && o()
                                            }), !1), d.addEventListener("abort", (function() {
                                                return n("upload aborted") && o()
                                            }), !1), d.open("POST", i.body.postURL, !0), d.setRequestHeader("Access-Control-Allow-Origin", "*"), d.send(a)
                                        }))]
                                }
                            }))
                        }))
                    }, t.prototype.getFile = function(t) {
                        return (0, r.mG)(this, void 0, void 0, (function() {
                            return (0, r.Jh)(this, (function(e) {
                                return [2, this.api.get("xstore/handler/getObjectUrl", {
                                    identifier: t
                                })]
                            }))
                        }))
                    }, t
                }()),
                a = s
        },
        48011: function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
            function objectExpandDot(t) {
                for (var e in t)
                    if (-1 !== e.indexOf(".")) {
                        var n = e,
                            r = t[e],
                            i = t,
                            o = n.split("."),
                            s = void 0,
                            a = Math.max(1, o.length - 1),
                            c = void 0;
                        for (s = 0; s < a; ++s) i[c = o[s]] = i[c] || {}, i = i[c];
                        i[o[s]] = r, delete t[n]
                    }
                return t
            }

            function objectGetDot(t, e, n) {
                for (var r = e.split("."), i = t, o = 0; o < r.length && null != i; o++) i = i[r[o]];
                return void 0 === i ? n : i
            }

            function objectSetDot(t, e, n) {
                for (var r = e.split("."), i = t, o = r.length - 1; o > 0 && i[r[o]];) i = i[r[o--]];
                return 0 === o && (t[i[o]] = n, !0)
            }

            function getCleanFilePath(t) {
                return t.split(/\#|\?/)[0]
            }

            function getFileExtension(t) {
                return t.split(".").pop().split(/\#|\?/)[0]
            }

            function urlAddToGet(t, e, n) {
                if (2 === (t = t.split(e + "=")).length) {
                    var r = t[1].split("&");
                    r[0] = n, t[1] = r.join("&"), t = t[0] + e + "=" + t[1]
                } else 1 === (t = t[0].split("?")).length ? t.push(e + "=" + n) : t[1] = e + "=" + n + "&" + t[1], t = t.join("?");
                return t
            }

            function urlGetToJSON(t) {
                var e = t.split("?");
                if (1 === e.length) return {};
                e.shift(), e = e.join("?");
                var n = {};
                return e.split("&").forEach((function(t) {
                    var e = t.split("="),
                        r = e[0],
                        i = "";
                    e.length > 1 && (e.shift(), i = decodeURIComponent(e.join("="))), n[r] = i
                })), n
            }

            function isOnline() {
                return window.navigator.onLine
            }

            function isOffline() {
                return !isOnline()
            }

            function isMobile() {}

            function isTablet() {}

            function getDeviceType() {}

            function slugify() {}
            __webpack_require__.r(__webpack_exports__), __webpack_require__.d(__webpack_exports__, {
                debounce: function() {
                    return debounce
                },
                getCleanFilePath: function() {
                    return getCleanFilePath
                },
                getDeviceType: function() {
                    return getDeviceType
                },
                getFileExtension: function() {
                    return getFileExtension
                },
                isES6Supported: function() {
                    return isES6Supported
                },
                isMobile: function() {
                    return isMobile
                },
                isOffline: function() {
                    return isOffline
                },
                isOnline: function() {
                    return isOnline
                },
                isTablet: function() {
                    return isTablet
                },
                objectExpandDot: function() {
                    return objectExpandDot
                },
                objectGetDot: function() {
                    return objectGetDot
                },
                objectSetDot: function() {
                    return objectSetDot
                },
                slugify: function() {
                    return slugify
                },
                urlAddToGet: function() {
                    return urlAddToGet
                },
                urlGetToJSON: function() {
                    return urlGetToJSON
                }
            });
            var isES6SupportedCache = null;

            function isES6Supported() {
                if (null !== isES6SupportedCache) return isES6SupportedCache;
                try {
                    eval("var foo = (x)=>x+1")
                } catch (t) {
                    return isES6SupportedCache = !1
                }
                return isES6SupportedCache = !0
            }

            function debounce(t, e, n) {
                var r;
                return void 0 === e && (e = 100), void 0 === n && (n = !1),
                    function() {
                        var i = this,
                            o = arguments,
                            s = function() {
                                r = null, n || t.apply(i, o)
                            },
                            a = n && !r;
                        clearTimeout(r), r = setTimeout(s, e), a && t.apply(i, o)
                    }
            }
        },
        24001: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return d
                }
            });
            var r = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "tw-bg-white tw-p-16 tw-rounded"
                    }, [e("div", {
                        staticClass: "tw-flex tw-flex-col tw-justify-center tw-items-center"
                    }, [e("div", {
                        staticClass: "tw-text-gray-70 tw-text-base tw-mt-2"
                    }, [t._v(" " + t._s(t.message) + " ")])])])
                },
                i = [],
                o = n(29172),
                s = n(21430),
                a = {
                    name: "Auth",
                    props: {
                        method: String
                    },
                    data: () => ({
                        message: "Verifying tokens (Show a fancy loader here.)",
                        error: !1
                    }),
                    async mounted() {
                        this.$data.message = null, this.$data.error = !1;
                        let {
                            username: t,
                            password: e
                        } = this.$data, n = s.WR ? "prod" : "local", r = await this.$tik.API.getOne("sys/auth/validate", { ...this.$route.query,
                            mode: n,
                            using: this.$props.provider || this.$route.params.provider,
                            action: "signup" === this.$props.method ? "signup" : "login"
                        });
                        if (r.error) this.$data.error = !0, this.$data.message = r.error.message;
                        else {
                            this.$data.error = !1, this.$data.message = "Authenticated, redirecting...";
                            let t = await this.$tik.SESSION.load(r);
                            t ? (0, o.ej)("REDIRECT") ? (this.$router.push((0, o.ej)("REDIRECT")), (0, o.kT)("REDIRECT")) : this.$router.push({
                                name: "home"
                            }) : (this.$data.error = !0, this.$data.message = "Unable to load session.")
                        }
                    }
                },
                c = a,
                u = n(79917),
                l = (0, u.Z)(c, r, i, !1, null, "6a36d484", null),
                d = l.exports
        },
        68745: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var r = n(16783),
                i = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "tw-bg-white tw-p-6 sm:tw-p-8 md:tw-p-12 tw-rounded"
                    }, [e("div", {
                        staticClass: "tw-flex tw-flex-col tw-justify-center tw-items-center"
                    }, [e(r.Z, {
                        staticStyle: {
                            "font-size": "96px"
                        },
                        attrs: {
                            "x-large": "",
                            color: t.theme.colors ? t.theme.colors.primary : "primary"
                        }
                    }, [t._v(" mdi-check-circle-outline ")]), e("h2", {
                        staticClass: "tw-text-xl tw-text-gray-87 tw-mt-8"
                    }, [t._v(" Successfully logged out ")]), e("div", {
                        staticClass: "tw-text-gray-70 tw-text-base tw-mt-2"
                    }, [t._v(" Redirecting… ")])], 1)])
                },
                o = [],
                s = {
                    name: "Auth",
                    props: {
                        mode: String,
                        theme: Object,
                        urlPrefix: {
                            type: String,
                            default: ""
                        }
                    },
                    data: () => ({
                        username: "",
                        password: "",
                        message: null,
                        error: !1
                    }),
                    created: async function() {
                        await this.$xui.API.getOne("sys/auth/logout");
                        await this.$xui.SESSION.destroy(), setTimeout((() => {
                            "/store" == this.urlPrefix ? this.$router.push({
                                name: "home"
                            }) : this.$router.push({
                                name: "signin"
                            })
                        }), 2e3)
                    }
                },
                a = s,
                c = n(79917),
                u = (0, c.Z)(a, i, o, !1, null, "6dc277ba", null),
                l = u.exports
        },
        43870: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return p
                }
            });
            var r = function() {
                    var t = this,
                        e = t._self._c;
                    return t.loading ? t._e() : e("div", {
                        staticClass: "tw-flex tw-flex-col md:tw-flex-row tw-w-screen tw-px-4 sm:tw-px-6 md:tw-px-10 lg:tw-px-0 tw-content-center tw-max-w-5xl tw-mx-auto tw-gap-x-8"
                    }, t._l(t.productMocks, (function(n, r) {
                        return e("div", {
                            key: n,
                            staticClass: "tw-mr-1 md:tw-mr-0 tw-mt-2 tw-mb-2 tw-w-full md:tw-w-1/2 tw-items-center"
                        }, [e("Mocky", {
                            attrs: {
                                forceMocky: !0,
                                data: { ...t.product,
                                    _id: `preview-${t.product.id}-${n}`,
                                    color: t.color,
                                    variant: n
                                }
                            }
                        }), e("div", {
                            staticClass: "tw-text-lg tw-capitalize tw-text-center tw-mt-2"
                        }, [t._v(" " + t._s(n) + " ")])], 1)
                    })), 0)
                },
                i = [],
                o = n(85177),
                s = n(29172),
                a = n(87416),
                c = {
                    name: "DashMockup",
                    components: {
                        Mocky: (0, s.kj)((() => Promise.all([n.e(6259), n.e(407)]).then(n.bind(n, 36259))))
                    },
                    data() {
                        return {
                            product: null,
                            color: null,
                            loading: !0
                        }
                    },
                    computed: {
                        productMocks() {
                            return this.product ? Object.keys((0, s.j7)(this.product.of.bku)) : void 0
                        }
                    },
                    async created() {
                        const {
                            id: t,
                            variantId: e
                        } = this.$route.query, n = await o.Z.getAny({
                            _id: t
                        }), r = e && e.split("-")[3] || "wh";
                        this.color = a.O9[r].hex, this.product = n, this.loading = !1
                    }
                },
                u = c,
                l = n(79917),
                d = (0, l.Z)(u, r, i, !1, null, null, null),
                p = d.exports
        },
        36253: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var r = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", [t.paymentLink ? e("div", [e("form", {
                        ref: "form",
                        staticStyle: {
                            display: "none"
                        },
                        attrs: {
                            action: `${t.paymentLink}`,
                            method: "get",
                            type: "redirect"
                        }
                    }, [e("input", {
                        attrs: {
                            type: "submit"
                        }
                    })])]) : e("div", [t._v(" Failed to initiate payment, please retry. ")])])
                },
                i = [],
                o = {
                    props: {
                        paymentLink: {
                            type: String
                        }
                    },
                    data() {
                        return {}
                    },
                    mounted() {
                        this.paymentLink && this.$refs.form.submit()
                    }
                },
                s = o,
                a = n(79917),
                c = (0, a.Z)(s, r, i, !1, null, null, null),
                u = c.exports
        },
        5475: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var r = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", [e("h1", {
                        staticClass: "tw-text-center tw-mt-2"
                    }, [t._v(" Please do not refresh this page... ")]), e("form", {
                        ref: "form",
                        staticStyle: {
                            display: "none"
                        },
                        attrs: {
                            method: "post",
                            type: "redirect",
                            action: `${t.endpoint}?mid=${t.form.MID}&orderId=${t.form.ORDER_ID}`
                        }
                    }, [t._l(t.form, (function(t, n) {
                        return e("input", {
                            key: n,
                            attrs: {
                                type: "text",
                                name: n
                            },
                            domProps: {
                                value: t
                            }
                        })
                    })), e("input", {
                        attrs: {
                            type: "submit"
                        }
                    })], 2)])
                },
                i = [],
                o = {
                    props: {
                        endpoint: String,
                        form: {
                            type: Object,
                            required: !0
                        }
                    },
                    mounted() {
                        this.$refs.form.submit()
                    }
                },
                s = o,
                a = n(79917),
                c = (0, a.Z)(s, r, i, !1, null, null, null),
                u = c.exports
        },
        16390: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return p
                }
            });
            var r = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticStyle: {
                            "text-align": "center"
                        }
                    }, [t._v(" . . . ")])
                },
                i = [],
                o = n(27439),
                s = n(21430),
                a = n(28367),
                c = {
                    props: {
                        order: {
                            type: Object,
                            required: !0
                        },
                        checkoutOrder: {
                            type: Object
                        },
                        checkoutAddress: {
                            type: Object
                        },
                        updated: Number
                    },
                    watch: {
                        updated() {
                            this.displayRazorPay(this.order)
                        }
                    },
                    mounted() {
                        this.displayRazorPay(this.order)
                    },
                    methods: {
                        async loadRazorPay() {
                            return new Promise((t => {
                                const e = document.createElement("script");
                                e.src = "https://checkout.razorpay.com/v1/checkout.js", e.onload = () => {
                                    t(!0)
                                }, e.onerror = () => {
                                    t(!1)
                                }, document.body.appendChild(e)
                            }))
                        },
                        async displayRazorPay(t) {
                            const e = await this.loadRazorPay();
                            if (!e) return void alert("unable to load payment gateway, please try later.");
                            let n = {
                                    key: t.key,
                                    amount: t.amount,
                                    currency: t.currency,
                                    name: "BlinkStore",
                                    description: "test transaction",
                                    image: "https://blinkstore.in/wp-content/uploads/2021/10/logo-blinkstore.svg",
                                    order_id: t.id,
                                    handler: async function(e) {
                                        let n = {
                                                razorpay_payment_id: e.razorpay_payment_id,
                                                razorpay_order_id: e.razorpay_order_id,
                                                razorpay_signature: e.razorpay_signature,
                                                gateway: "razorpay",
                                                ORDERID: t.ORDERID,
                                                store: a.Z.getters.storeId,
                                                dev: s.H7
                                            },
                                            r = await (0, o.H)("blink/order/callback", n);
                                        window.location = r.Location
                                    },
                                    prefill: {
                                        name: `${this.checkoutAddress.name||""}`,
                                        email: TIK.SESSION.getUsername(),
                                        contact: this.checkoutAddress.phone
                                    },
                                    theme: {
                                        color: "#c3aad5"
                                    }
                                },
                                r = new window.Razorpay(n);
                            r.open(), r.on("payment.failed", (async function(t) {}))
                        }
                    }
                },
                u = c,
                l = n(79917),
                d = (0, l.Z)(u, r, i, !1, null, null, null),
                p = d.exports
        },
        9329: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return u
                }
            });
            var r = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", [e("h1", {
                        staticClass: "tw-text-center tw-mt-2"
                    }, [t._v(" Please do not refresh this page... ")]), e("form", {
                        ref: "form",
                        staticStyle: {
                            display: "none"
                        },
                        attrs: {
                            action: `${t.order.form.url}`,
                            method: "get",
                            type: "redirect"
                        }
                    }, [e("input", {
                        attrs: {
                            type: "submit"
                        }
                    })])])
                },
                i = [],
                o = {
                    props: {
                        store: String,
                        order: {
                            type: Object,
                            required: !0
                        }
                    },
                    mounted() {
                        this.$refs.form.submit()
                    }
                },
                s = o,
                a = n(79917),
                c = (0, a.Z)(s, r, i, !1, null, null, null),
                u = c.exports
        },
        8328: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var r = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "tw-flex tw-flex-col-reverse lg:tw-flex-row"
                    }, [e("sidebar"), e("div", {
                        staticClass: "tw-flex-1 dash-container"
                    }, [e(t.page, {
                        tag: "component"
                    })], 1), e("div", {
                        staticClass: "whatsapp-container tw-fixed tw-hidden md:tw-block tw-text-gray-87 tw-bg-gray-245 tw-rounded-full tw-py-1 tw-pl-4 tw-mr-2 tw-shadow-md"
                    }, [e("a", {
                        staticClass: "tw-flex tw-items-center",
                        attrs: {
                            href: "https://wa.me/919161351816",
                            target: "_blank"
                        }
                    }, [e("div", {
                        staticClass: "tw-text-gray-87 tw-mr-2"
                    }, [t._v("Need support?")]), e("img", {
                        staticClass: "tw-w-8 tw-h-8 tw-rounded-full",
                        attrs: {
                            src: n(63938),
                            alt: ""
                        }
                    })])])], 1)
                },
                i = [],
                o = n(29172),
                s = {
                    name: "DashboardView",
                    props: {
                        page: String
                    },
                    components: {
                        sidebar: (0, o.kj)((() => n.e(3098).then(n.bind(n, 98235)))),
                        home: (0, o.kj)((() => Promise.all([n.e(4886), n.e(5870)]).then(n.bind(n, 51489)))),
                        coupons: (0, o.kj)((() => Promise.all([n.e(2894), n.e(8915)]).then(n.bind(n, 31635)))),
                        analytics: (0, o.kj)((() => Promise.all([n.e(4886), n.e(8008), n.e(2186), n.e(2700), n.e(5126), n.e(664), n.e(5870)]).then(n.bind(n, 19624)))),
                        products: (0, o.kj)((() => n.e(2143).then(n.bind(n, 12143)))),
                        store: (0, o.kj)((() => n.e(3098).then(n.bind(n, 32913)))),
                        storeNew: (0, o.kj)((() => n.e(5614).then(n.bind(n, 26902)))),
                        payout: (0, o.kj)((() => Promise.all([n.e(4886), n.e(3273)]).then(n.bind(n, 22947)))),
                        help: (0, o.kj)((() => n.e(1983).then(n.bind(n, 41983)))),
                        resources: (0, o.kj)((() => n.e(407).then(n.bind(n, 84081)))),
                        settings: (0, o.kj)((() => n.e(8119).then(n.bind(n, 58119))))
                    },
                    data() {
                        return {}
                    },
                    metaInfo: function() {
                        return {
                            title: `${this.page[0].toUpperCase()}${this.page.substring(1,this.page.length)} | Blinkstore`
                        }
                    }
                },
                a = s,
                c = n(79917),
                u = (0, c.Z)(a, r, i, !1, null, "bbe755e8", null),
                l = u.exports
        },
        90909: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var r = n(16783),
                i = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "tw-bg-white tw-min-h-screen"
                    }, [e("div", {
                        staticClass: "tw-px-4 sm:tw-px-8 md:tw-px-10 xl:tw-px-0 tw-max-w-5xl tw-mx-auto"
                    }, [e("div", {
                        staticClass: "tw-py-6 tw-cursor-pointer",
                        on: {
                            click: function(e) {
                                return t.$router.push({
                                    name: "home"
                                })
                            }
                        }
                    }, [e("div", {
                        staticClass: "tw-flex tw-flex-row tw-items-center"
                    }, [e("div", [e(r.Z, {
                        attrs: {
                            color: "black"
                        }
                    }, [t._v(" mdi-arrow-left ")])], 1), e("span", {
                        staticClass: "tw-ml-2 md:tw-ml-3 tw-text-gray-70 tw-text-xl"
                    }, [t._v("Back")])])]), e("h1", {
                        staticClass: "tw-text-primary tw-font-bold tw-text-2xl md:tw-mt-8"
                    }, [t._v(" Create New Order ")]), e("div", {
                        staticClass: "tw-flex tw-flex-col md:tw-flex-row tw-items-start tw-gap-4 md:tw-gap-6 tw-mt-10 md:tw-mt-16"
                    }, [e("router-link", {
                        staticClass: "tw-flex tw-flex-row tw-justify-center tw-items-center tw-px-4 tw-gap-2 tw-bg-gray-245 tw-rounded-md tw-h-40 tw-w-full md:tw-w-68",
                        attrs: {
                            to: {
                                name: "customOrderBag",
                                params: {
                                    initStage: "create"
                                }
                            }
                        }
                    }, [e("div", {
                        staticClass: "tw-flex tw-flex-col tw-items-center tw-gap-3"
                    }, [e("span", {
                        staticClass: "svg-icon product tw-text-gray-87 tw-w-10 tw-h-10"
                    }), e("p", {
                        staticClass: "tw-font-bold tw-text-lg tw-text-gray-87"
                    }, [t._v("New Product")])])]), e("router-link", {
                        staticClass: "tw-flex tw-flex-row tw-justify-center tw-items-center tw-px-4 tw-gap-2 tw-bg-gray-245 tw-rounded-md tw-h-40 tw-w-full md:tw-w-68",
                        attrs: {
                            to: {
                                name: "customOrderBag",
                                params: {
                                    initStage: "add"
                                }
                            }
                        }
                    }, [e("div", {
                        staticClass: "tw-flex tw-flex-col tw-items-center tw-gap-3"
                    }, [e("span", {
                        staticClass: "svg-icon list tw-text-gray-87 tw-w-10 tw-h-10"
                    }), e("p", {
                        staticClass: "tw-font-bold tw-text-gray-87 tw-text-lg"
                    }, [t._v("Add From List")])])]), t.showRecent ? e("router-link", {
                        staticClass: "tw-flex tw-flex-row tw-justify-center tw-items-center tw-px-4 tw-gap-2 tw-bg-gray-245 tw-rounded-md tw-h-40 tw-w-full md:tw-w-68",
                        attrs: {
                            to: {
                                name: "customOrderBag",
                                params: {
                                    initStage: "bag"
                                }
                            }
                        }
                    }, [e("div", {
                        staticClass: "tw-flex tw-flex-col tw-items-center tw-gap-3"
                    }, [e("span", {
                        staticClass: "svg-icon history tw-text-gray-87 tw-w-10 tw-h-10"
                    }), e("p", {
                        staticClass: "tw-font-bold tw-text-gray-87 tw-text-lg"
                    }, [t._v("Go to last order")])])]) : t._e()], 1), e("div", {
                        staticClass: "tw-py-4 md:tw-py-6"
                    })])])
                },
                o = [],
                s = {
                    name: "DashCustomOrder",
                    data() {
                        return {
                            showRecent: !1
                        }
                    },
                    methods: {
                        goBack() {
                            this.$emit("go-back")
                        }
                    },
                    created() {
                        let t = JSON.parse(localStorage.getItem("customOrderItems"));
                        t && t.length > 0 && (this.showRecent = !0)
                    }
                },
                a = s,
                c = n(79917),
                u = (0, c.Z)(a, i, o, !1, null, null, null),
                l = u.exports
        },
        94740: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var r = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", [e("payout-edit")], 1)
                },
                i = [],
                o = n(29172),
                s = {
                    name: "OrderEditView",
                    components: {
                        PayoutEdit: (0, o.kj)((() => n.e(5614).then(n.bind(n, 44133))))
                    }
                },
                a = s,
                c = n(79917),
                u = (0, c.Z)(a, r, i, !1, null, "7f0776de", null),
                l = u.exports
        },
        96135: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var r = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "tw-h-screen"
                    }, [e("ProductCreator", {
                        attrs: {
                            defaultDku: t.$route.params.id,
                            showPreview: !0,
                            defaultStage: "options"
                        },
                        on: {
                            "go-back": function(e) {
                                return t.$router.push({
                                    name: "products"
                                })
                            },
                            "product-published": () => {}
                        }
                    })], 1)
                },
                i = [],
                o = n(29172),
                s = {
                    name: "add-more-product",
                    components: {
                        ProductCreator: (0, o.kj)((() => Promise.all([n.e(6259), n.e(3016), n.e(7810), n.e(8257), n.e(4768), n.e(5686)]).then(n.bind(n, 77716))))
                    }
                },
                a = s,
                c = n(79917),
                u = (0, c.Z)(a, r, i, !1, null, "524d3b22", null),
                l = u.exports
        },
        43224: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var r = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", [e("product-edit", {
                        attrs: {
                            "is-edit": t.isEdit,
                            productID: t.productId
                        },
                        on: {
                            "go-back": function(e) {
                                return t.$router.push({
                                    name: "products"
                                })
                            }
                        }
                    })], 1)
                },
                i = [],
                o = n(29172),
                s = {
                    name: "OrderEditView",
                    props: {
                        isEdit: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    components: {
                        ProductEdit: (0, o.kj)((() => Promise.all([n.e(6259), n.e(3016), n.e(7810), n.e(3695)]).then(n.bind(n, 77810))))
                    },
                    data() {
                        return {
                            productId: this.$route.params.id
                        }
                    }
                },
                a = s,
                c = n(79917),
                u = (0, c.Z)(a, r, i, !1, null, "77fe0cec", null),
                l = u.exports
        },
        64236: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var r = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "tw-h-screen"
                    }, [e("ProductCreator", {
                        attrs: {
                            bku: t.$route.params.id ? t.$route.params.id : "dtg-ml-rnhs",
                            showPreview: !0,
                            proceedToHeadlessCheckout: t.proceedToHeadlessCheckout
                        },
                        on: {
                            "go-back": function(e) {
                                return t.$router.push({
                                    name: "products"
                                })
                            },
                            "product-published": () => {}
                        }
                    })], 1)
                },
                i = [],
                o = n(29172),
                s = {
                    name: "ProductEditor",
                    components: {
                        ProductCreator: (0, o.kj)((() => Promise.all([n.e(6259), n.e(3016), n.e(7810), n.e(8257), n.e(4768), n.e(5686)]).then(n.bind(n, 77716))))
                    },
                    props: {
                        proceedToHeadlessCheckout: Boolean
                    }
                },
                a = s,
                c = n(79917),
                u = (0, c.Z)(a, r, i, !1, null, "18274ced", null),
                l = u.exports
        },
        75436: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return l
                }
            });
            var r = function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", [e("profile-edit")], 1)
                },
                i = [],
                o = n(29172),
                s = {
                    name: "OrderEditView",
                    components: {
                        ProfileEdit: (0, o.kj)((() => n.e(5614).then(n.bind(n, 73822))))
                    }
                },
                a = s,
                c = n(79917),
                u = (0, c.Z)(a, r, i, !1, null, "5d761fc1", null),
                l = u.exports
        },
        10473: function(t, e, n) {
            n.d(e, {
                Vf: function() {
                    return _
                },
                YM: function() {
                    return i
                },
                az: function() {
                    return h
                },
                h: function() {
                    return h
                },
                sY: function() {
                    return U
                },
                wA: function() {
                    return v
                }
            });
            var r, i, o, s, a, c = {},
                u = [],
                l = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

            function d(t, e) {
                for (var n in e) t[n] = e[n];
                return t
            }

            function p(t) {
                var e = t.parentNode;
                e && e.removeChild(t)
            }

            function h(t, e, n) {
                var i, o, s, a = {};
                for (s in e) "key" == s ? i = e[s] : "ref" == s ? o = e[s] : a[s] = e[s];
                if (arguments.length > 2 && (a.children = arguments.length > 3 ? r.call(arguments, 2) : n), "function" == typeof t && null != t.defaultProps)
                    for (s in t.defaultProps) void 0 === a[s] && (a[s] = t.defaultProps[s]);
                return f(t, a, i, o, null)
            }

            function f(t, e, n, r, s) {
                var a = {
                    type: t,
                    props: e,
                    key: n,
                    ref: r,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    __h: null,
                    constructor: void 0,
                    __v: null == s ? ++o : s
                };
                return null == s && null != i.vnode && i.vnode(a), a
            }

            function _() {
                return {
                    current: null
                }
            }

            function m(t) {
                return t.children
            }

            function v(t, e) {
                this.props = t, this.context = e
            }

            function g(t, e) {
                if (null == e) return t.__ ? g(t.__, t.__.__k.indexOf(t) + 1) : null;
                for (var n; e < t.__k.length; e++)
                    if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
                return "function" == typeof t.type ? g(t) : null
            }

            function y(t) {
                var e, n;
                if (null != (t = t.__) && null != t.__c) {
                    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
                        if (null != (n = t.__k[e]) && null != n.__e) {
                            t.__e = t.__c.base = n.__e;
                            break
                        }
                    return y(t)
                }
            }

            function w(t) {
                (!t.__d && (t.__d = !0) && s.push(t) && !b.__r++ || a !== i.debounceRendering) && ((a = i.debounceRendering) || setTimeout)(b)
            }

            function b() {
                for (var t; b.__r = s.length;) t = s.sort((function(t, e) {
                    return t.__v.__b - e.__v.__b
                })), s = [], t.some((function(t) {
                    var e, n, r, i, o, s;
                    t.__d && (o = (i = (e = t).__v).__e, (s = e.__P) && (n = [], (r = d({}, i)).__v = i.__v + 1, A(s, i, r, e.__n, void 0 !== s.ownerSVGElement, null != i.__h ? [o] : null, n, null == o ? g(i) : o, i.__h), P(n, i), i.__e != o && y(i)))
                }))
            }

            function E(t, e, n, r, i, o, s, a, l, d) {
                var p, h, _, v, y, w, b, E = r && r.__k || u,
                    I = E.length;
                for (n.__k = [], p = 0; p < e.length; p++)
                    if (null != (v = n.__k[p] = null == (v = e[p]) || "boolean" == typeof v ? null : "string" == typeof v || "number" == typeof v || "bigint" == typeof v ? f(null, v, null, null, v) : Array.isArray(v) ? f(m, {
                            children: v
                        }, null, null, null) : v.__b > 0 ? f(v.type, v.props, v.key, v.ref ? v.ref : null, v.__v) : v)) {
                        if (v.__ = n, v.__b = n.__b + 1, null === (_ = E[p]) || _ && v.key == _.key && v.type === _.type) E[p] = void 0;
                        else
                            for (h = 0; h < I; h++) {
                                if ((_ = E[h]) && v.key == _.key && v.type === _.type) {
                                    E[h] = void 0;
                                    break
                                }
                                _ = null
                            }
                        A(t, v, _ = _ || c, i, o, s, a, l, d), y = v.__e, (h = v.ref) && _.ref != h && (b || (b = []), _.ref && b.push(_.ref, null, v), b.push(h, v.__c || y, v)), null != y ? (null == w && (w = y), "function" == typeof v.type && v.__k === _.__k ? v.__d = l = C(v, l, t) : l = S(t, v, _, E, y, l), "function" == typeof n.type && (n.__d = l)) : l && _.__e == l && l.parentNode != t && (l = g(_))
                    }
                for (n.__e = w, p = I; p--;) null != E[p] && k(E[p], E[p]);
                if (b)
                    for (p = 0; p < b.length; p++) R(b[p], b[++p], b[++p])
            }

            function C(t, e, n) {
                for (var r, i = t.__k, o = 0; i && o < i.length; o++)(r = i[o]) && (r.__ = t, e = "function" == typeof r.type ? C(r, e, n) : S(n, r, r, i, r.__e, e));
                return e
            }

            function S(t, e, n, r, i, o) {
                var s, a, c;
                if (void 0 !== e.__d) s = e.__d, e.__d = void 0;
                else if (null == n || i != o || null == i.parentNode) t: if (null == o || o.parentNode !== t) t.appendChild(i), s = null;
                    else {
                        for (a = o, c = 0;
                            (a = a.nextSibling) && c < r.length; c += 1)
                            if (a == i) break t;
                        t.insertBefore(i, o), s = o
                    }
                return void 0 !== s ? s : i.nextSibling
            }

            function I(t, e, n, r, i) {
                var o;
                for (o in n) "children" === o || "key" === o || o in e || x(t, o, null, n[o], r);
                for (o in e) i && "function" != typeof e[o] || "children" === o || "key" === o || "value" === o || "checked" === o || n[o] === e[o] || x(t, o, e[o], n[o], r)
            }

            function T(t, e, n) {
                "-" === e[0] ? t.setProperty(e, n) : t[e] = null == n ? "" : "number" != typeof n || l.test(e) ? n : n + "px"
            }

            function x(t, e, n, r, i) {
                var o;
                t: if ("style" === e)
                    if ("string" == typeof n) t.style.cssText = n;
                    else {
                        if ("string" == typeof r && (t.style.cssText = r = ""), r)
                            for (e in r) n && e in n || T(t.style, e, "");
                        if (n)
                            for (e in n) r && n[e] === r[e] || T(t.style, e, n[e])
                    }
                else if ("o" === e[0] && "n" === e[1]) o = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? r || t.addEventListener(e, o ? O : N, o) : t.removeEventListener(e, o ? O : N, o);
                else if ("dangerouslySetInnerHTML" !== e) {
                    if (i) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                    else if ("href" !== e && "list" !== e && "form" !== e && "tabIndex" !== e && "download" !== e && e in t) try {
                        t[e] = null == n ? "" : n;
                        break t
                    } catch (t) {}
                    "function" == typeof n || (null == n || !1 === n && -1 == e.indexOf("-") ? t.removeAttribute(e) : t.setAttribute(e, n))
                }
            }

            function N(t) {
                this.l[t.type + !1](i.event ? i.event(t) : t)
            }

            function O(t) {
                this.l[t.type + !0](i.event ? i.event(t) : t)
            }

            function A(t, e, n, r, o, s, a, c, u) {
                var l, p, h, f, _, g, y, w, b, C, S, I, T, x, N, O = e.type;
                if (void 0 !== e.constructor) return null;
                null != n.__h && (u = n.__h, c = e.__e = n.__e, e.__h = null, s = [c]), (l = i.__b) && l(e);
                try {
                    t: if ("function" == typeof O) {
                        if (w = e.props, b = (l = O.contextType) && r[l.__c], C = l ? b ? b.props.value : l.__ : r, n.__c ? y = (p = e.__c = n.__c).__ = p.__E : ("prototype" in O && O.prototype.render ? e.__c = p = new O(w, C) : (e.__c = p = new v(w, C), p.constructor = O, p.render = L), b && b.sub(p), p.props = w, p.state || (p.state = {}), p.context = C, p.__n = r, h = p.__d = !0, p.__h = [], p._sb = []), null == p.__s && (p.__s = p.state), null != O.getDerivedStateFromProps && (p.__s == p.state && (p.__s = d({}, p.__s)), d(p.__s, O.getDerivedStateFromProps(w, p.__s))), f = p.props, _ = p.state, h) null == O.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), null != p.componentDidMount && p.__h.push(p.componentDidMount);
                        else {
                            if (null == O.getDerivedStateFromProps && w !== f && null != p.componentWillReceiveProps && p.componentWillReceiveProps(w, C), !p.__e && null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(w, p.__s, C) || e.__v === n.__v) {
                                for (p.props = w, p.state = p.__s, e.__v !== n.__v && (p.__d = !1), p.__v = e, e.__e = n.__e, e.__k = n.__k, e.__k.forEach((function(t) {
                                        t && (t.__ = e)
                                    })), S = 0; S < p._sb.length; S++) p.__h.push(p._sb[S]);
                                p._sb = [], p.__h.length && a.push(p);
                                break t
                            }
                            null != p.componentWillUpdate && p.componentWillUpdate(w, p.__s, C), null != p.componentDidUpdate && p.__h.push((function() {
                                p.componentDidUpdate(f, _, g)
                            }))
                        }
                        if (p.context = C, p.props = w, p.__v = e, p.__P = t, I = i.__r, T = 0, "prototype" in O && O.prototype.render) {
                            for (p.state = p.__s, p.__d = !1, I && I(e), l = p.render(p.props, p.state, p.context), x = 0; x < p._sb.length; x++) p.__h.push(p._sb[x]);
                            p._sb = []
                        } else
                            do {
                                p.__d = !1, I && I(e), l = p.render(p.props, p.state, p.context), p.state = p.__s
                            } while (p.__d && ++T < 25);
                        p.state = p.__s, null != p.getChildContext && (r = d(d({}, r), p.getChildContext())), h || null == p.getSnapshotBeforeUpdate || (g = p.getSnapshotBeforeUpdate(f, _)), N = null != l && l.type === m && null == l.key ? l.props.children : l, E(t, Array.isArray(N) ? N : [N], e, n, r, o, s, a, c, u), p.base = e.__e, e.__h = null, p.__h.length && a.push(p), y && (p.__E = p.__ = null), p.__e = !1
                    } else null == s && e.__v === n.__v ? (e.__k = n.__k, e.__e = n.__e) : e.__e = D(n.__e, e, n, r, o, s, a, u);
                    (l = i.diffed) && l(e)
                }
                catch (t) {
                    e.__v = null, (u || null != s) && (e.__e = c, e.__h = !!u, s[s.indexOf(c)] = null), i.__e(t, e, n)
                }
            }

            function P(t, e) {
                i.__c && i.__c(e, t), t.some((function(e) {
                    try {
                        t = e.__h, e.__h = [], t.some((function(t) {
                            t.call(e)
                        }))
                    } catch (t) {
                        i.__e(t, e.__v)
                    }
                }))
            }

            function D(t, e, n, i, o, s, a, u) {
                var l, d, h, f = n.props,
                    _ = e.props,
                    m = e.type,
                    v = 0;
                if ("svg" === m && (o = !0), null != s)
                    for (; v < s.length; v++)
                        if ((l = s[v]) && "setAttribute" in l == !!m && (m ? l.localName === m : 3 === l.nodeType)) {
                            t = l, s[v] = null;
                            break
                        }
                if (null == t) {
                    if (null === m) return document.createTextNode(_);
                    t = o ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, _.is && _), s = null, u = !1
                }
                if (null === m) f === _ || u && t.data === _ || (t.data = _);
                else {
                    if (s = s && r.call(t.childNodes), d = (f = n.props || c).dangerouslySetInnerHTML, h = _.dangerouslySetInnerHTML, !u) {
                        if (null != s)
                            for (f = {}, v = 0; v < t.attributes.length; v++) f[t.attributes[v].name] = t.attributes[v].value;
                        (h || d) && (h && (d && h.__html == d.__html || h.__html === t.innerHTML) || (t.innerHTML = h && h.__html || ""))
                    }
                    if (I(t, _, f, o, u), h) e.__k = [];
                    else if (v = e.props.children, E(t, Array.isArray(v) ? v : [v], e, n, i, o && "foreignObject" !== m, s, a, s ? s[0] : n.__k && g(n, 0), u), null != s)
                        for (v = s.length; v--;) null != s[v] && p(s[v]);
                    u || ("value" in _ && void 0 !== (v = _.value) && (v !== t.value || "progress" === m && !v || "option" === m && v !== f.value) && x(t, "value", v, f.value, !1), "checked" in _ && void 0 !== (v = _.checked) && v !== t.checked && x(t, "checked", v, f.checked, !1))
                }
                return t
            }

            function R(t, e, n) {
                try {
                    "function" == typeof t ? t(e) : t.current = e
                } catch (t) {
                    i.__e(t, n)
                }
            }

            function k(t, e, n) {
                var r, o;
                if (i.unmount && i.unmount(t), (r = t.ref) && (r.current && r.current !== t.__e || R(r, null, e)), null != (r = t.__c)) {
                    if (r.componentWillUnmount) try {
                        r.componentWillUnmount()
                    } catch (t) {
                        i.__e(t, e)
                    }
                    r.base = r.__P = null, t.__c = void 0
                }
                if (r = t.__k)
                    for (o = 0; o < r.length; o++) r[o] && k(r[o], e, n || "function" != typeof t.type);
                n || null == t.__e || p(t.__e), t.__ = t.__e = t.__d = void 0
            }

            function L(t, e, n) {
                return this.constructor(t, n)
            }

            function U(t, e, n) {
                var o, s, a;
                i.__ && i.__(t, e), s = (o = "function" == typeof n) ? null : n && n.__k || e.__k, a = [], A(e, t = (!o && n || e).__k = h(m, null, [t]), s || c, c, void 0 !== e.ownerSVGElement, !o && n ? [n] : s ? null : e.firstChild ? r.call(e.childNodes) : null, a, !o && n ? n : s ? s.__e : e.firstChild, o), P(a, t)
            }
            r = u.slice, i = {
                __e: function(t, e, n, r) {
                    for (var i, o, s; e = e.__;)
                        if ((i = e.__c) && !i.__) try {
                            if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(t)), s = i.__d), null != i.componentDidCatch && (i.componentDidCatch(t, r || {}), s = i.__d), s) return i.__E = i
                        } catch (e) {
                            t = e
                        }
                    throw t
                }
            }, o = 0, v.prototype.setState = function(t, e) {
                var n;
                n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof t && (t = t(d({}, n), this.props)), t && d(n, t), null != t && this.__v && (e && this._sb.push(e), w(this))
            }, v.prototype.forceUpdate = function(t) {
                this.__v && (this.__e = !0, t && this.__h.push(t), w(this))
            }, v.prototype.render = m, s = [], b.__r = 0
        },
        61432: function(t, e, n) {
            n.d(e, {
                BX: function() {
                    return o
                },
                tZ: function() {
                    return o
                }
            });
            var r = n(10473),
                i = 0;

            function o(t, e, n, o, s) {
                var a, c, u = {};
                for (c in e) "ref" == c ? a = e[c] : u[c] = e[c];
                var l = {
                    type: t,
                    props: u,
                    key: n,
                    ref: a,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __d: void 0,
                    __c: null,
                    __h: null,
                    constructor: void 0,
                    __v: --i,
                    __source: s,
                    __self: o
                };
                if ("function" == typeof t && (a = t.defaultProps))
                    for (c in a) void 0 === u[c] && (u[c] = a[c]);
                return r.YM.vnode && r.YM.vnode(l), l
            }
        },
        52175: function(t, e, n) {
            n.d(e, {
                Q8: function() {
                    return S
                },
                U2: function() {
                    return w
                }
            });
            var r = (0).constructor,
                i = r.isFinite,
                o = (r.isInteger, [].constructor.isArray);

            function s(t) {
                return null !== t && "object" === typeof t
            }

            function a(t) {
                return "function" === typeof t
            }

            function c(t, e) {
                return void 0 === e && (e = 0), "string" === typeof t && t.length >= e
            }

            function u(t) {
                return i(t)
            }

            function l(t) {
                return o(t)
            }

            function d(t, e) {
                return s(t) && e in t
            }
            var p = 1e3,
                h = "'\"`",
                f = function() {
                    function t(t) {
                        this.size = t, this.reset()
                    }
                    return t.prototype.reset = function() {
                        this.oldestIndex = 0, this.map = {}, this.cachedKeys = new Array(this.size)
                    }, t.prototype.get = function(t) {
                        return this.map[t]
                    }, t.prototype.set = function(t, e) {
                        this.map[t] = e;
                        var n = this.cachedKeys[this.oldestIndex];
                        void 0 !== n && delete this.map[n], this.cachedKeys[this.oldestIndex] = t, this.oldestIndex++, this.oldestIndex %= this.size
                    }, t
                }(),
                _ = new f(p);

            function m(t) {
                var e = t.charAt(0),
                    n = t.substr(-1);
                if (h.includes(e) || h.includes(n)) {
                    if (t.length < 2 || e !== n) throw new SyntaxError('Mismatching string quotation: "' + t + '"');
                    return t.substring(1, t.length - 1)
                }
                if (t.includes("[")) throw new SyntaxError('Missing ] in varName "' + t + '"');
                return "+" === e ? t.substr(1) : t
            }

            function v(t, e, n) {
                var r = e.trim();
                if ("" === r) return t;
                if (r.startsWith(".")) {
                    if (!n) throw new SyntaxError('Unexpected . at the start of "' + e + '"');
                    if (r = r.substr(1).trim(), "" === r) return t
                } else if (n) throw new SyntaxError('Missing . at the start of "' + e + '"');
                if (r.endsWith(".")) throw new SyntaxError('Unexpected "." at the end of "' + e + '"');
                for (var i = r.split("."), o = 0, s = i; o < s.length; o++) {
                    var a = s[o],
                        c = a.trim();
                    if ("" === c) throw new SyntaxError('Empty prop name when parsing "' + e + '"');
                    t.push(c)
                }
                return t
            }

            function g(t) {
                if (!c(t)) throw new TypeError("Cannot parse path. Expected string. Got a " + typeof t);
                for (var e, n, r, i = 0, o = !1, s = new Array(0), a = 0; a < t.length; a = i) {
                    if (e = t.indexOf("[", a), -1 === e) break;
                    if (i = t.indexOf("]", e), -1 === i) throw new SyntaxError('Missing ] in varName "' + t + '"');
                    if (r = t.substring(e + 1, i).trim(), 0 === r.length) throw new SyntaxError("Unexpected token ]");
                    i++, n = t.substring(a, e), v(s, n, o), s.push(m(r)), o = !0
                }
                var u = t.substring(i);
                return v(s, u, o)
            }

            function y(t) {
                var e = _.get(t);
                return void 0 === e && (e = g(t), _.set(t, e)), e
            }

            function w(t, e, n) {
                if (void 0 === n && (n = {}), !s(n)) throw new TypeError("get expects an object option. Got " + typeof n);
                var r = n.depth,
                    i = void 0 === r ? 10 : r;
                if (!u(i) || i <= 0) throw new RangeError("Expected a positive number for depth. Got " + i);
                var o = Array.isArray(e) ? e : g.cached(e),
                    a = function() {
                        return o.join(" > ")
                    };
                if (o.length > i) throw new ReferenceError("The path cannot be deeper than " + i + ' levels. Got "' + a() + '"');
                for (var c = t, l = 0, p = o; l < p.length; l++) {
                    var h = p[l];
                    if (!d(c, h)) {
                        if (n.propsExist) throw new ReferenceError(h + ' is not defined in the scope at path: "' + a() + '"');
                        return
                    }
                    c = c[h]
                }
                return c
            }
            g.cached = y;
            var b = function() {
                function t(t, e) {
                    var n = this;
                    if (void 0 === e && (e = {}), this.tokens = t, this.options = e, this.render = function(t) {
                            void 0 === t && (t = {});
                            var e = n.tokens.varNames,
                                r = e.length;
                            n.cacheParsedPaths();
                            for (var i = new Array(r), o = 0; o < r; o++) i[o] = w(t, n.toPathCache[o], n.options);
                            return n.stringify(i)
                        }, this.renderFn = function(t, e) {
                            void 0 === e && (e = {});
                            var r = n.resolveVarNames(t, e);
                            return n.stringify(r)
                        }, this.renderFnAsync = function(t, e) {
                            return void 0 === e && (e = {}), Promise.all(n.resolveVarNames(t, e)).then((function(t) {
                                return n.stringify(t)
                            }))
                        }, !s(t) || !l(t.strings) || !l(t.varNames) || t.strings.length !== t.varNames.length + 1) throw new TypeError("Invalid tokens object");
                    if (!s(e)) throw new TypeError("Options should be an object. Got a " + typeof e);
                    e.validateVarNames && this.cacheParsedPaths()
                }
                return t.prototype.cacheParsedPaths = function() {
                    var t = this.tokens.varNames;
                    if (void 0 === this.toPathCache) {
                        this.toPathCache = new Array(t.length);
                        for (var e = 0; e < t.length; e++) this.toPathCache[e] = g.cached(t[e])
                    }
                }, t.prototype.resolveVarNames = function(t, e) {
                    void 0 === e && (e = {});
                    var n = this.tokens.varNames;
                    if (!a(t)) throw new TypeError("Expected a resolver function. Got " + String(t));
                    for (var r = n.length, i = new Array(r), o = 0; o < r; o++) i[o] = t.call(null, n[o], e);
                    return i
                }, t.prototype.stringify = function(t) {
                    for (var e = this.tokens.strings, n = this.options.explicit, r = t.length, i = "", o = 0; o < r; o++) {
                        i += e[o];
                        var s = t[o];
                        (n || null !== s && void 0 !== s) && (i += s)
                    }
                    return i += e[r], i
                }, t
            }();

            function E(t, e) {
                if (void 0 === e && (e = {}), !c(t)) throw new TypeError("The template parameter must be a string. Got a " + typeof t);
                if (!s(e)) throw new TypeError("Options should be an object. Got a " + typeof e);
                var n = e.tags,
                    r = void 0 === n ? ["{{", "}}"] : n,
                    i = e.maxVarNameLength,
                    o = void 0 === i ? 1e3 : i;
                if (!l(r) || 2 !== r.length) throw TypeError("tags should be an array of two elements. Got " + String(r));
                var a = r[0],
                    d = r[1];
                if (!c(a, 1) || !c(d, 1) || a === d) throw new TypeError('The open and close symbols should be two distinct non-empty strings. Got "' + a + '" and "' + d + '"');
                if (!u(o) || o <= 0) throw new Error("Expected a positive number for maxVarNameLength. Got " + o);
                var p, h, f = a.length,
                    _ = d.length,
                    m = 0,
                    v = [],
                    g = [],
                    y = 0;
                while (y < t.length) {
                    if (p = t.indexOf(a, y), -1 === p) break;
                    var w = p + f;
                    if (m = t.substr(w, o + _).indexOf(d), -1 === m) throw new SyntaxError('Missing "' + d + '" in the template for the "' + a + '" at position ' + p + " within " + o + " characters");
                    if (m += w, h = t.substring(w, m).trim(), 0 === h.length) throw new SyntaxError('Unexpected "' + d + '" tag found at position ' + p);
                    if (h.includes(a)) throw new SyntaxError('Variable names cannot have "' + a + '". But at position ' + p + '. Got "' + h + '"');
                    g.push(h), m += _, v.push(t.substring(y, p)), y = m
                }
                return v.push(t.substring(m)), {
                    strings: v,
                    varNames: g
                }
            }

            function C(t, e) {
                void 0 === e && (e = {});
                var n = E(t, e);
                return new b(n, e)
            }

            function S(t, e, n, r) {
                var i = C(t, r);
                return i.renderFn(e, n)
            }
        }
    }
]);