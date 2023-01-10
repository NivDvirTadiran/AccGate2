(function () {
  var _templateObject;

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkaccGate"] = self["webpackChunkaccGate"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    19230:
    /*!**********************************************!*\
      !*** ./src/app/_helpers/auth.interceptor.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthInterceptor": function AuthInterceptor() {
          return (
            /* binding */
            _AuthInterceptor
          );
        },

        /* harmony export */
        "authInterceptorProviders": function authInterceptorProviders() {
          return (
            /* binding */
            _authInterceptorProviders
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      40205);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      5304);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      43190);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      45435);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs/operators */
      15257);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_services/token-storage.service */
      93590);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/auth.service */
      88368);

      var TOKEN_HEADER_KEY = 'Authorization'; // for Spring Boot back-end
      //const TOKEN_HEADER_KEY = 'x-access-token';   // for Node.js Express back-end

      var _AuthInterceptor = /*#__PURE__*/function () {
        function _AuthInterceptor(tokenService, authService) {
          _classCallCheck(this, _AuthInterceptor);

          this.tokenService = tokenService;
          this.authService = authService;
          this.isRefreshing = false;
          this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        }

        _createClass(_AuthInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var _this3 = this;

            var authReq = req;
            var token = this.tokenService.getToken();

            if (token != null && !authReq.url.includes('test/')) {
              authReq = this.addTokenHeader(req, token); // for Spring Boot back-end
              // authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
              // for Node.js Express back-end
              //authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
            }

            return next.handle(authReq).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (error) {
              if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse && !authReq.url.includes('auth/signin') && error.status === 401) {
                return _this3.handle401Error(authReq, next);
              }

              return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
            }));
          }
        }, {
          key: "handle401Error",
          value: function handle401Error(request, next) {
            var _this4 = this;

            if (!this.isRefreshing) {
              this.isRefreshing = true;
              this.refreshTokenSubject.next(null);
              var token = this.tokenService.getRefreshToken();
              if (token) return this.authService.refreshToken(token).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(function (token) {
                _this4.isRefreshing = false;

                _this4.tokenService.saveToken(token.accessToken);

                _this4.tokenService.saveRefreshToken(token.refreshToken);

                _this4.refreshTokenSubject.next(token.accessToken);

                return next.handle(_this4.addTokenHeader(request, token.accessToken));
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (err) {
                _this4.isRefreshing = false;

                _this4.tokenService.signOut();

                return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(err);
              }));
            }

            return this.refreshTokenSubject.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(function (token) {
              return token !== null;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(function (token) {
              return next.handle(_this4.addTokenHeader(request, token));
            }));
          }
        }, {
          key: "addTokenHeader",
          value: function addTokenHeader(request, token) {
            /* for Spring Boot back-end */
            return request.clone({
              headers: request.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token)
            });
            /* for Node.js Express back-end */
            //return request.clone({ headers: request.headers.set(TOKEN_HEADER_KEY, token) });
          }
          /*
            public forseRefreshToken2() {
              const token = this.tokenService.getRefreshToken();
              if (token)
                this.authService.refreshToken(token).pipe(
                  switchMap((token: any) => {
                    this.isRefreshing = false;
                    this.tokenService.saveToken(token.accessToken);
                    this.refreshTokenSubject.next(token.accessToken);
          
                    filter(token => token !== null),
                      take(1),
                      switchMap((token) => next.handle(this.addTokenHeader(request, token)))
                  }),
                  catchError((err) => {
                    this.isRefreshing = false;
          
                    this.tokenService.signOut();
                    return throwError(err);
                  })
                );
            }
          */

        }, {
          key: "forseRefreshToken",
          value: function forseRefreshToken() {
            var _this5 = this;

            var token = this.tokenService.getRefreshToken();
            if (token) this.authService.refreshToken(token).subscribe(function (data) {
              _this5.isRefreshing = false;

              _this5.tokenService.saveToken(data.accessToken);

              _this5.refreshTokenSubject.next(data.accessToken);
            }, function (err) {
              _this5.isRefreshing = false;

              _this5.tokenService.signOut();

              return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(err);
            });
          }
        }]);

        return _AuthInterceptor;
      }();

      _AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) {
        return new (t || _AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
      };

      _AuthInterceptor.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
        token: _AuthInterceptor,
        factory: _AuthInterceptor.ɵfac
      });
      var _authInterceptorProviders = [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HTTP_INTERCEPTORS,
        useClass: _AuthInterceptor,
        multi: true
      }];
      /***/
    },

    /***/
    88368:
    /*!*******************************************!*\
      !*** ./src/app/_services/auth.service.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthService": function AuthService() {
          return (
            /* binding */
            _AuthService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../app.config */
      49670);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var AUTH_API = _app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.accServer.ACCWEBServers + '/accGate/auth/';
      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      var _AuthService = /*#__PURE__*/function () {
        function _AuthService(http) {
          _classCallCheck(this, _AuthService);

          this.http = http;
        }

        _createClass(_AuthService, [{
          key: "login",
          value: function login(username, password) {
            return this.http.post(AUTH_API + 'signin', {
              username: username,
              password: password
            }, httpOptions);
          }
        }, {
          key: "registerForm",
          value: function registerForm(username, email, password, phone) {
            return this.http.post(AUTH_API + 'register-form', {
              username: username,
              email: email,
              password: password,
              phone: phone
            }, {
              responseType: 'text'
            });
          }
        }, {
          key: "replacePassForm",
          value: function replacePassForm(username, oldPassword, password, confirmPassword) {
            return this.http.post(AUTH_API + 'replace-pass-form', {
              username: username,
              oldPassword: oldPassword,
              password: password,
              confirmPassword: confirmPassword
            }, {
              responseType: 'text'
            });
          }
        }, {
          key: "register",
          value: function register(username, email, password, roles) {
            return this.http.post(AUTH_API + 'signup', {
              username: username,
              email: email,
              password: password,
              roles: roles
            }, httpOptions);
          }
        }, {
          key: "getToken",
          value: function getToken(url, username, email, password) {
            return this.http.post(url, {
              username: username,
              email: email,
              password: password
            }, httpOptions);
          } // login, register

        }, {
          key: "refreshToken",
          value: function refreshToken(token) {
            return this.http.post(AUTH_API + 'refreshtoken', {
              refreshToken: token
            }, httpOptions);
          } // open app in a new browser tab

        }, {
          key: "webapptab",
          value: function webapptab(token, webapp) {
            return this.http.post(AUTH_API + 'webapptab', {
              refreshToken: token,
              webApp: webapp
            }, httpOptions);
          }
        }, {
          key: "getPassExpireDate",
          value: function getPassExpireDate(token) {
            return this.http.post(AUTH_API + 'passexpdate', {
              accessToken: token
            }, httpOptions);
          }
        }, {
          key: "getPermittedWebAppList",
          value: function getPermittedWebAppList(token) {
            return this.http.post(AUTH_API + 'permitwebapplist', {
              accessToken: token
            }, httpOptions);
          }
        }, {
          key: "getAccountDetails",
          value: function getAccountDetails(token) {
            return this.http.post(AUTH_API + 'accountdetails', {
              accessToken: token
            }, httpOptions);
          }
        }, {
          key: "TSV_ValidateCodeByName",
          value: function TSV_ValidateCodeByName(username, email, code) {
            return this.http.post(AUTH_API + 'tsv_codevalidatebyname', {
              username: username,
              email: email,
              code: code
            }, httpOptions);
          }
        }, {
          key: "TSV_ReplacePassForm",
          value: function TSV_ReplacePassForm(username, oldPassword, password, confirmPassword, pinCodeToken) {
            return this.http.post(AUTH_API + 'tsv_replace-pass-form', {
              username: username,
              oldPassword: oldPassword,
              password: password,
              confirmPassword: confirmPassword,
              pinCodeToken: pinCodeToken
            }, httpOptions);
          }
        }, {
          key: "TSV_GenerateCodeByName",
          value: function TSV_GenerateCodeByName(username, email) {
            return this.http.post(AUTH_API + 'tsv_codegeneratebyname', {
              username: username,
              email: email
            }, httpOptions);
          }
        }, {
          key: "TSV_GenerateCodeByEmail",
          value: function TSV_GenerateCodeByEmail(username, email) {
            return this.http.post(AUTH_API + 'tsv_codegeneratebyemail', {
              username: username,
              email: email
            }, httpOptions);
          }
        }]);

        return _AuthService;
      }();

      _AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || _AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };

      _AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _AuthService,
        factory: _AuthService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    93590:
    /*!****************************************************!*\
      !*** ./src/app/_services/token-storage.service.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TokenStorageService": function TokenStorageService() {
          return (
            /* binding */
            _TokenStorageService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var TOKEN_KEY = 'token';
      var REFRESHTOKEN_KEY = 'auth-refreshtoken';
      var PINCODETOKEN_KEY = 'auth-pincodetoken';
      var USER_KEY = 'user';

      var _TokenStorageService = /*#__PURE__*/function () {
        function _TokenStorageService() {
          _classCallCheck(this, _TokenStorageService);
        }

        _createClass(_TokenStorageService, [{
          key: "signOut",
          value: function signOut() {
            window.sessionStorage.clear();
          }
        }, {
          key: "saveToken",
          value: function saveToken(token) {
            window.sessionStorage.removeItem(TOKEN_KEY);
            window.sessionStorage.setItem(TOKEN_KEY, token);
            var user = this.getUser();

            if (user.id) {
              this.saveUser(Object.assign(Object.assign({}, user), {
                accessToken: token
              }));
            }
          }
        }, {
          key: "getToken",
          value: function getToken() {
            return window.sessionStorage.getItem(TOKEN_KEY);
          }
        }, {
          key: "saveRefreshToken",
          value: function saveRefreshToken(token) {
            window.sessionStorage.removeItem(REFRESHTOKEN_KEY);
            window.sessionStorage.setItem(REFRESHTOKEN_KEY, token);
            var user = this.getUser();

            if (user.id) {
              user.refreshToken = token;
              this.saveUser(user);
            }
          }
        }, {
          key: "getRefreshToken",
          value: function getRefreshToken() {
            return window.sessionStorage.getItem(REFRESHTOKEN_KEY);
          }
        }, {
          key: "savePinCodeToken",
          value: function savePinCodeToken(token) {
            window.sessionStorage.removeItem(PINCODETOKEN_KEY);
            window.sessionStorage.setItem(PINCODETOKEN_KEY, token);
          }
        }, {
          key: "getPinCodeToken",
          value: function getPinCodeToken() {
            return window.sessionStorage.getItem(PINCODETOKEN_KEY);
          }
        }, {
          key: "saveUser",
          value: function saveUser(user) {
            window.sessionStorage.removeItem(USER_KEY);
            window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
          }
        }, {
          key: "getUser",
          value: function getUser() {
            var user = window.sessionStorage.getItem(USER_KEY);

            if (user) {
              return JSON.parse(user);
            }

            return {};
          }
        }, {
          key: "getRoles",
          value: function getRoles() {
            var user = window.sessionStorage.getItem(USER_KEY);

            if (user) {
              return JSON.parse(user);
            }

            return {};
          }
        }]);

        return _TokenStorageService;
      }();

      _TokenStorageService.ɵfac = function TokenStorageService_Factory(t) {
        return new (t || _TokenStorageService)();
      };

      _TokenStorageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _TokenStorageService,
        factory: _TokenStorageService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    55089:
    /*!*******************************************!*\
      !*** ./src/app/_services/user.service.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserService": function UserService() {
          return (
            /* binding */
            _UserService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../app.config */
      49670);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var API_URL = _app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.accServer.ACCWEBServers + '/accGate/test/';
      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      var _UserService = /*#__PURE__*/function () {
        function _UserService(http) {
          _classCallCheck(this, _UserService);

          this.http = http;
        }

        _createClass(_UserService, [{
          key: "getPublicContent",
          value: function getPublicContent() {
            return this.http.get(API_URL + 'all', {
              responseType: 'text'
            });
          }
        }, {
          key: "getAccVersion",
          value: function getAccVersion() {
            return this.http.get(API_URL + 'accversion', {
              responseType: 'text'
            });
          }
        }, {
          key: "isTowStepVerRequired",
          value: function isTowStepVerRequired() {
            return this.http.get(API_URL + 'istsvon', httpOptions);
          }
        }, {
          key: "getUserBoard",
          value: function getUserBoard() {
            return this.http.get(API_URL + 'user', {
              responseType: 'text'
            });
          }
        }, {
          key: "getModeratorBoard",
          value: function getModeratorBoard() {
            return this.http.get(API_URL + 'mod', {
              responseType: 'text'
            });
          }
        }, {
          key: "getAdminBoard",
          value: function getAdminBoard() {
            return this.http.get(API_URL + 'admin', {
              responseType: 'text'
            });
          }
        }, {
          key: "getAccountDetails",
          value: function getAccountDetails() {
            return this.http.get(API_URL + 'accountdetails', {
              responseType: 'text'
            });
          }
        }]);

        return _UserService;
      }();

      _UserService.ɵfac = function UserService_Factory(t) {
        return new (t || _UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };

      _UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _UserService,
        factory: _UserService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    98097:
    /*!**********************************************!*\
      !*** ./src/app/_shared/event-bus.service.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EventBusService": function EventBusService() {
          return (
            /* binding */
            _EventBusService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      45435);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      88002);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _EventBusService = /*#__PURE__*/function () {
        function _EventBusService() {
          _classCallCheck(this, _EventBusService);

          this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
        }

        _createClass(_EventBusService, [{
          key: "emit",
          value: function emit(event) {
            this.subject$.next(event);
          }
        }, {
          key: "on",
          value: function on(eventName, action) {
            return this.subject$.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(function (e) {
              return e.name === eventName;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (e) {
              return e["value"];
            })).subscribe(action);
          }
        }]);

        return _EventBusService;
      }();

      _EventBusService.ɵfac = function EventBusService_Factory(t) {
        return new (t || _EventBusService)();
      };

      _EventBusService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _EventBusService,
        factory: _EventBusService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    79043:
    /*!****************************************!*\
      !*** ./src/app/_shared/event.class.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EventData": function EventData() {
          return (
            /* binding */
            _EventData
          );
        }
        /* harmony export */

      });

      var _EventData = /*#__PURE__*/_createClass(function _EventData(name, value) {
        _classCallCheck(this, _EventData);

        this.name = name;
        this.value = value;
      });
      /***/

    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home/home.component */
      45067);
      /* harmony import */


      var _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./board-user/board-user.component */
      14652);
      /* harmony import */


      var _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./board-moderator/board-moderator.component */
      49586);
      /* harmony import */


      var _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./board-admin/board-admin.component */
      5838);
      /* harmony import */


      var _profile2_profile2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./profile2/profile2.component */
      6592);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716); //import { Login2RoutingModule } from "./login-main/login-main-routing.module";


      var routes = [{
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
      }, {
        path: 'login2',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./login2/login2.module */
          81490)).then(function (m) {
            return m.Login2Module;
          });
        }
      }, //{ path: 'register2', component: Register2Component },
      //{ path: 'registerform2', component: MyAccountForm2Component },
      {
        path: 'profile2',
        component: _profile2_profile2_component__WEBPACK_IMPORTED_MODULE_4__["default"]
        /*, canActivate: [AppRoutingGuard] */

      }, {
        path: 'user',
        component: _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_1__.BoardUserComponent
      }, {
        path: 'mod',
        component: _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_2__.BoardModeratorComponent
      }, {
        path: 'admin',
        component: _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_3__.BoardAdminComponent
      }, {
        path: '',
        redirectTo: 'login2',
        pathMatch: 'full'
      }, {
        path: 'home',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./app.module */
          36747)).then(function (m) {
            return m.AppModule;
          });
        }
      }, {
        path: '**',
        redirectTo: 'login2'
      }];

      var _AppRoutingModule = /*#__PURE__*/_createClass(function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      });

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes
        /*, {useHash: true}*/
        )], _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.config */
      49670);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./_services/token-storage.service */
      93590);
      /* harmony import */


      var _shared_event_bus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./_shared/event-bus.service */
      98097);
      /* harmony import */


      var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_services/user.service */
      55089);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(tokenStorageService, eventBusService, userService, router) {
          _classCallCheck(this, _AppComponent);

          this.tokenStorageService = tokenStorageService;
          this.eventBusService = eventBusService;
          this.userService = userService;
          this.router = router;
          this.roles = [];
          this.isLoggedIn = false;
          this.showAdminBoard = false;
          this.showModeratorBoard = false;
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            this.isLoggedIn = !!this.tokenStorageService.getToken();

            if (this.isLoggedIn) {
              var user = this.tokenStorageService.getUser();
              this.roles = user.roles;
              this.showAdminBoard = this.roles.includes('Admin') || this.roles.includes('SupervisorAdmin');
              this.showModeratorBoard = this.roles.includes('SupervisorMonitor');
              this.username = user.username;
            }

            this.eventBusSub = this.eventBusService.on('logout', function () {
              _this6.logout();
            });
            this.eventBusSub = this.eventBusService.on('is2SVRequired', function () {
              _this6.is2SVRequired();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.eventBusSub) this.eventBusSub.unsubscribe();
          }
        }, {
          key: "logout",
          value: function logout() {
            console.log("logging out");
            this.tokenStorageService.signOut();
            this.isLoggedIn = false;
            this.roles = [];
            this.showAdminBoard = false;
            this.showModeratorBoard = false;
            this.router.navigate(['/login2']);
          }
        }, {
          key: "is2SVRequired",
          value: function is2SVRequired() {
            console.log("is2SVRequired: ");
            this.userService.isTowStepVerRequired().subscribe(function (data) {
              console.log("data.data: " + data.data);
              console.log("data.message: " + data.message);
              _app_config__WEBPACK_IMPORTED_MODULE_0__.workingModeConfiguration.runMode.TSV = data.data;
              console.log("workingModeConfiguration.runMode.TSV: " + _app_config__WEBPACK_IMPORTED_MODULE_0__.workingModeConfiguration.runMode.TSV.toString());
            }, function (err) {
              console.log("Can't detect 2SV operation mode:  " + err.error);
            });
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_event_bus_service__WEBPACK_IMPORTED_MODULE_2__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        consts: [["id", "app"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "router-outlet", 0);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    49670:
    /*!*******************************!*\
      !*** ./src/app/app.config.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "APP_CONFIG": function APP_CONFIG() {
          return (
            /* binding */
            _APP_CONFIG
          );
        },

        /* harmony export */
        "AppConfig": function AppConfig() {
          return (
            /* binding */
            _AppConfig
          );
        },

        /* harmony export */
        "workingModeConfiguration": function workingModeConfiguration() {
          return (
            /* binding */
            _workingModeConfiguration
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716); // parse ful url to ip,port, params


      var parsedUrl = new URL(window.location.href);
      var url = parsedUrl.hostname;
      var port = parsedUrl.port;
      var protocol = parsedUrl.protocol;
      var AUTH_API = protocol + "//" + url + ":" + port;

      var _APP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('app.config');

      var _AppConfig = {
        accServer: {
          ACCWEBServers: AUTH_API //'https://172.28.8.245:8445'

        },
        endpoints: {
          TOKEN_KEY: 'token',
          REFRESHTOKEN_KEY: 'auth-refreshtoken',
          USER_KEY: 'user'
        }
      };
      var _workingModeConfiguration = {
        runMode: {
          TSV: false
        }
      };
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home/home.component */
      45067);
      /* harmony import */


      var _profile2_profile2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile2/profile2.component */
      6592);
      /* harmony import */


      var _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./board-admin/board-admin.component */
      5838);
      /* harmony import */


      var _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./board-moderator/board-moderator.component */
      49586);
      /* harmony import */


      var _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./board-user/board-user.component */
      14652);
      /* harmony import */


      var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./_helpers/auth.interceptor */
      19230);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      72075);
      /* harmony import */


      var mdb_angular_ui_kit_accordion__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! mdb-angular-ui-kit/accordion */
      60415);
      /* harmony import */


      var mdb_angular_ui_kit_carousel__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! mdb-angular-ui-kit/carousel */
      41692);
      /* harmony import */


      var mdb_angular_ui_kit_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! mdb-angular-ui-kit/checkbox */
      98458);
      /* harmony import */


      var mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! mdb-angular-ui-kit/collapse */
      82785);
      /* harmony import */


      var mdb_angular_ui_kit_dropdown__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! mdb-angular-ui-kit/dropdown */
      90210);
      /* harmony import */


      var mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! mdb-angular-ui-kit/forms */
      95095);
      /* harmony import */


      var mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! mdb-angular-ui-kit/modal */
      25303);
      /* harmony import */


      var mdb_angular_ui_kit_popover__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! mdb-angular-ui-kit/popover */
      69147);
      /* harmony import */


      var mdb_angular_ui_kit_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! mdb-angular-ui-kit/radio */
      38754);
      /* harmony import */


      var mdb_angular_ui_kit_range__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! mdb-angular-ui-kit/range */
      10434);
      /* harmony import */


      var mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! mdb-angular-ui-kit/ripple */
      7116);
      /* harmony import */


      var mdb_angular_ui_kit_scrollspy__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! mdb-angular-ui-kit/scrollspy */
      74803);
      /* harmony import */


      var mdb_angular_ui_kit_tabs__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! mdb-angular-ui-kit/tabs */
      78141);
      /* harmony import */


      var mdb_angular_ui_kit_tooltip__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! mdb-angular-ui-kit/tooltip */
      64433);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      75835);
      /* harmony import */


      var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! angular-bootstrap-md */
      49260);
      /* harmony import */


      var _pipes_api_error_message_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./pipes/api-error-message.pipe */
      81582);
      /* harmony import */


      var _pipes_login_error_message_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./pipes/login-error-message.pipe */
      74164);
      /* harmony import */


      var _login2_login2_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./login2/login2.module */
      81490);
      /* harmony import */


      var _storybook_storybook_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./storybook/storybook.module */
      18322);
      /* harmony import */


      var mdb_angular_ui_kit_validation__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! mdb-angular-ui-kit/validation */
      63286);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _my_account_form2_my_account_form2_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./my-account-form2/my-account-form2.component */
      95144);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      37716); //import {ReplacePassForm2Component} from "./login2/login2.module";
      //import {TaskListComponent} from '../stories/task-list/task-list.component'


      var _AppModule = /*#__PURE__*/_createClass(function _AppModule() {
        _classCallCheck(this, _AppModule);
      });

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
        providers: [_helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__.authInterceptorProviders],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDatepickerModule, mdb_angular_ui_kit_accordion__WEBPACK_IMPORTED_MODULE_17__.MdbAccordionModule, mdb_angular_ui_kit_carousel__WEBPACK_IMPORTED_MODULE_18__.MdbCarouselModule, mdb_angular_ui_kit_checkbox__WEBPACK_IMPORTED_MODULE_19__.MdbCheckboxModule, mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_20__.MdbCollapseModule, mdb_angular_ui_kit_dropdown__WEBPACK_IMPORTED_MODULE_21__.MdbDropdownModule, mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_22__.MdbFormsModule, mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_23__.MdbModalModule, mdb_angular_ui_kit_popover__WEBPACK_IMPORTED_MODULE_24__.MdbPopoverModule, mdb_angular_ui_kit_radio__WEBPACK_IMPORTED_MODULE_25__.MdbRadioModule, mdb_angular_ui_kit_range__WEBPACK_IMPORTED_MODULE_26__.MdbRangeModule, mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_27__.MdbRippleModule, mdb_angular_ui_kit_scrollspy__WEBPACK_IMPORTED_MODULE_28__.MdbScrollspyModule, mdb_angular_ui_kit_tabs__WEBPACK_IMPORTED_MODULE_29__.MdbTabsModule, mdb_angular_ui_kit_tooltip__WEBPACK_IMPORTED_MODULE_30__.MdbTooltipModule, mdb_angular_ui_kit_validation__WEBPACK_IMPORTED_MODULE_31__.MdbValidationModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__.BrowserAnimationsModule, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_33__.ModalModule, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_33__.ButtonsModule, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_33__.MDBBootstrapModule.forRoot(), _login2_login2_module__WEBPACK_IMPORTED_MODULE_10__.Login2Module, _storybook_storybook_module__WEBPACK_IMPORTED_MODULE_11__.StorybookModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_35__.MatButtonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _profile2_profile2_component__WEBPACK_IMPORTED_MODULE_3__["default"], _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_4__.BoardAdminComponent, _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_5__.BoardModeratorComponent, _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_6__.BoardUserComponent, _pipes_api_error_message_pipe__WEBPACK_IMPORTED_MODULE_8__.ApiErrorMessagePipe, _pipes_login_error_message_pipe__WEBPACK_IMPORTED_MODULE_9__.LoginErrorMessagePipe, _my_account_form2_my_account_form2_component__WEBPACK_IMPORTED_MODULE_12__["default"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDatepickerModule, mdb_angular_ui_kit_accordion__WEBPACK_IMPORTED_MODULE_17__.MdbAccordionModule, mdb_angular_ui_kit_carousel__WEBPACK_IMPORTED_MODULE_18__.MdbCarouselModule, mdb_angular_ui_kit_checkbox__WEBPACK_IMPORTED_MODULE_19__.MdbCheckboxModule, mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_20__.MdbCollapseModule, mdb_angular_ui_kit_dropdown__WEBPACK_IMPORTED_MODULE_21__.MdbDropdownModule, mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_22__.MdbFormsModule, mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_23__.MdbModalModule, mdb_angular_ui_kit_popover__WEBPACK_IMPORTED_MODULE_24__.MdbPopoverModule, mdb_angular_ui_kit_radio__WEBPACK_IMPORTED_MODULE_25__.MdbRadioModule, mdb_angular_ui_kit_range__WEBPACK_IMPORTED_MODULE_26__.MdbRangeModule, mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_27__.MdbRippleModule, mdb_angular_ui_kit_scrollspy__WEBPACK_IMPORTED_MODULE_28__.MdbScrollspyModule, mdb_angular_ui_kit_tabs__WEBPACK_IMPORTED_MODULE_29__.MdbTabsModule, mdb_angular_ui_kit_tooltip__WEBPACK_IMPORTED_MODULE_30__.MdbTooltipModule, mdb_angular_ui_kit_validation__WEBPACK_IMPORTED_MODULE_31__.MdbValidationModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__.BrowserAnimationsModule, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_33__.ModalModule, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_33__.ButtonsModule, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_33__.MDBRootModule, _login2_login2_module__WEBPACK_IMPORTED_MODULE_10__.Login2Module, _storybook_storybook_module__WEBPACK_IMPORTED_MODULE_11__.StorybookModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_34__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_35__.MatButtonModule]
        });
      })();

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.platformBrowser().bootstrapModule(_AppModule);
      /***/

    },

    /***/
    5838:
    /*!******************************************************!*\
      !*** ./src/app/board-admin/board-admin.component.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BoardAdminComponent": function BoardAdminComponent() {
          return (
            /* binding */
            _BoardAdminComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_services/user.service */
      55089);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/auth.service */
      88368);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      function BoardAdminComponent_form_7_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Username is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function BoardAdminComponent_form_7_div_7_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Username must be at least 3 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function BoardAdminComponent_form_7_div_7_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Username must be at most 20 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function BoardAdminComponent_form_7_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BoardAdminComponent_form_7_div_7_div_1_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BoardAdminComponent_form_7_div_7_div_2_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, BoardAdminComponent_form_7_div_7_div_3_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.errors.maxlength);
        }
      }

      function BoardAdminComponent_form_7_div_13_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Email is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function BoardAdminComponent_form_7_div_13_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email must be a valid email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function BoardAdminComponent_form_7_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BoardAdminComponent_form_7_div_13_div_1_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BoardAdminComponent_form_7_div_13_div_2_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r5.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r5.errors.email);
        }
      }

      function BoardAdminComponent_form_7_div_19_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function BoardAdminComponent_form_7_div_19_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password must be at least 6 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function BoardAdminComponent_form_7_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, BoardAdminComponent_form_7_div_19_div_1_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, BoardAdminComponent_form_7_div_19_div_2_Template, 2, 0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r7.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r7.errors.minlength);
        }
      }

      function BoardAdminComponent_form_7_div_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Signup failed!");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r10.errorMessage, " ");
        }
      }

      function BoardAdminComponent_form_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 7, 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function BoardAdminComponent_form_7_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return _r2.form.valid && ctx_r18.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "input", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BoardAdminComponent_form_7_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r20.form.userName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, BoardAdminComponent_form_7_div_7_Template, 4, 3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BoardAdminComponent_form_7_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r21.form.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, BoardAdminComponent_form_7_div_13_Template, 3, 2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BoardAdminComponent_form_7_Template_input_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r22.form.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, BoardAdminComponent_form_7_div_19_Template, 3, 2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Privilege Level");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "select", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function BoardAdminComponent_form_7_Template_select_ngModelChange_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r19);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r23.form.roles = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "--Please choose an option--");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Moderator");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "option", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "User");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " Roles: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](40, BoardAdminComponent_form_7_div_40_Template, 4, 1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](1);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](6);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](12);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.form.userName);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r3.errors && _r2.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.form.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r5.errors && _r2.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.form.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r7.errors && _r2.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.form.roles);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.rolesList.toString(), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _r2.submitted && ctx_r0.isSignUpFailed);
        }
      }

      function BoardAdminComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Your registration is successful! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _BoardAdminComponent = /*#__PURE__*/function () {
        function _BoardAdminComponent(userService, authService) {
          _classCallCheck(this, _BoardAdminComponent);

          this.userService = userService;
          this.authService = authService;
          this.form = {
            username: null,
            email: null
            /*new FormControl('', Validators.email)*/
            ,
            password: null,
            roles: null
          };
          this.isSuccessful = false;
          this.isSignUpFailed = false;
          this.errorMessage = '';
          this.rolesList = [];
        }

        _createClass(_BoardAdminComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this.userService.getAdminBoard().subscribe(function (data) {
              _this7.content = data;
            }, function (err) {
              _this7.content = JSON.parse(err.error).message;
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this8 = this;

            var _this$form = this.form,
                username = _this$form.username,
                email = _this$form.email,
                password = _this$form.password,
                roles = _this$form.roles;
            this.rolesList.push(roles);
            this.authService.register(username, email, password, this.rolesList).subscribe(function (data) {
              console.log(data);
              _this8.isSuccessful = true;
              _this8.isSignUpFailed = false;
            }, function (err) {
              _this8.errorMessage = err.error.message;
              _this8.isSignUpFailed = true;
            });
          }
        }]);

        return _BoardAdminComponent;
      }();

      _BoardAdminComponent.ɵfac = function BoardAdminComponent_Factory(t) {
        return new (t || _BoardAdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
      };

      _BoardAdminComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _BoardAdminComponent,
        selectors: [["app-board-admin"]],
        decls: 9,
        vars: 3,
        consts: [[1, "container"], [1, "jumbotron"], [1, "col-md-12"], [1, "card", "card-container"], ["id", "profile-img", "src", "//ssl.gstatic.com/accounts/ui/avatar_2x.png", 1, "profile-img-card"], ["name", "form", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "userName"], ["type", "text", "name", "userName", "required", "", "minlength", "3", "maxlength", "20", 1, "form-control", 3, "ngModel", "ngModelChange"], ["userName", "ngModel"], ["class", "alert-danger", 4, "ngIf"], ["for", "email"], ["type", "email", "name", "email", "required", "", "email", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "password"], ["type", "password", "name", "password", "required", "", "minlength", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["for", "privilege"], ["type", "privilege", "name", "privilege", "id", "pet-select", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["roles", "ngModel"], ["value", ""], ["value", "admin"], ["value", "mod"], ["value", "user"], [1, "btn", "btn-primary", "btn-block"], [1, "alert", "alert-warning"], ["class", "alert alert-warning", 4, "ngIf"], [1, "alert-danger"], [4, "ngIf"], [1, "alert", "alert-success"]],
        template: function BoardAdminComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, BoardAdminComponent_form_7_Template, 41, 9, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, BoardAdminComponent_div_8_Template, 2, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.content);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isSuccessful);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSuccessful);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.EmailValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"]],
        styles: ["label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-top: 10px;\r\n}\r\n\r\n.card-container.card[_ngcontent-%COMP%] {\r\n  max-width: 400px !important;\r\n  padding: 40px 40px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  background-color: #f7f7f7;\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.profile-img-card[_ngcontent-%COMP%] {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLWFkbWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUdoQixrQkFBa0I7RUFHbEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztFQUdkLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJib2FyZC1hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lci5jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogNDBweCA0MHB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICBwYWRkaW5nOiAyMHB4IDI1cHggMzBweDtcclxuICBtYXJnaW46IDAgYXV0byAyNXB4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLnByb2ZpbGUtaW1nLWNhcmQge1xyXG4gIHdpZHRoOiA5NnB4O1xyXG4gIGhlaWdodDogOTZweDtcclxuICBtYXJnaW46IDAgYXV0byAxMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    49586:
    /*!**************************************************************!*\
      !*** ./src/app/board-moderator/board-moderator.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BoardModeratorComponent": function BoardModeratorComponent() {
          return (
            /* binding */
            _BoardModeratorComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_services/user.service */
      55089);

      var _BoardModeratorComponent = /*#__PURE__*/function () {
        function _BoardModeratorComponent(userService) {
          _classCallCheck(this, _BoardModeratorComponent);

          this.userService = userService;
        }

        _createClass(_BoardModeratorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this.userService.getModeratorBoard().subscribe(function (data) {
              _this9.content = data;
            }, function (err) {
              _this9.content = JSON.parse(err.error).message;
            });
          }
        }]);

        return _BoardModeratorComponent;
      }();

      _BoardModeratorComponent.ɵfac = function BoardModeratorComponent_Factory(t) {
        return new (t || _BoardModeratorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService));
      };

      _BoardModeratorComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _BoardModeratorComponent,
        selectors: [["app-board-moderator"]],
        decls: 4,
        vars: 1,
        consts: [[1, "container"], [1, "jumbotron"]],
        template: function BoardModeratorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.content);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib2FyZC1tb2RlcmF0b3IuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    14652:
    /*!****************************************************!*\
      !*** ./src/app/board-user/board-user.component.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BoardUserComponent": function BoardUserComponent() {
          return (
            /* binding */
            _BoardUserComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _shared_event_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_shared/event.class */
      79043);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/user.service */
      55089);
      /* harmony import */


      var _shared_event_bus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_shared/event-bus.service */
      98097);

      var _BoardUserComponent = /*#__PURE__*/function () {
        function _BoardUserComponent(userService, eventBusService) {
          _classCallCheck(this, _BoardUserComponent);

          this.userService = userService;
          this.eventBusService = eventBusService;
        }

        _createClass(_BoardUserComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.userService.getUserBoard().subscribe(function (data) {
              _this10.content = data;
            }, function (err) {
              _this10.content = err.error.message || err.error || err.message;
              if (err.status === 403) _this10.eventBusService.emit(new _shared_event_class__WEBPACK_IMPORTED_MODULE_0__.EventData('logout', null));
            });
          }
        }]);

        return _BoardUserComponent;
      }();

      _BoardUserComponent.ɵfac = function BoardUserComponent_Factory(t) {
        return new (t || _BoardUserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_event_bus_service__WEBPACK_IMPORTED_MODULE_2__.EventBusService));
      };

      _BoardUserComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _BoardUserComponent,
        selectors: [["app-board-user"]],
        decls: 23,
        vars: 1,
        consts: [[1, "container"], [1, "background", "jumbotron"], [1, "font_0"], [1, "", 2, "font-size", "44px"], ["type", "text/html", "src", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtrustConstantResourceUrl"](_templateObject || (_templateObject = _taggedTemplateLiteral(["https://www.tadirantele.com/"]))), "height", "300px", "width", "100%"], ["src", "https://localhost:8445/accRealTime", "sandbox", "allow-top-navigation-by-user-activation allow-same-origin allow-scripts allow-popups allow-forms", "name", "iframe_a", "height", "300px", "width", "100%", "title", "Iframe Example"], ["href", "https://172.28.8.245:8443/aeonix/mainForm.jsf", "target", "iframe_a"], ["href", "https://en.wikipedia.org/wiki/Avocado", "id", "testid", "target", "iframe_a"], ["href", "https://172.28.1.130:8445/accRealTime", "target", "iframe_a"]],
        template: function BoardUserComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "embed", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Iframe - Target for a Link");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\n. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "iframe", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "aeonix");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "wikipedia");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "accRealTime");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "When the target attribute of a link matches the name of an iframe, the link will open in the iframe.");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.content);
          }
        },
        styles: [".font_0[_ngcontent-%COMP%] {\r\n  font-size:44px;\r\n  text-align:left;\r\n  color:#FFFFFF;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%], .alert-success[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n}\r\n\r\n.background[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n  background-origin: border-box;\r\n  background-image: url(/assets/images/Background.webp);\r\n  \r\n  background-repeat: no-repeat;\r\n  background-position: top left;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFHQTtFQUNFLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IscURBQXFEO0VBQ3JELDJFQUEyRTtFQUMzRSw0QkFBNEI7RUFDNUIsNkJBQTZCOztBQUUvQjs7QUFFQTs7Ozs7Ozs7O0NBU0MiLCJmaWxlIjoiYm9hcmQtdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb250XzAge1xyXG4gIGZvbnQtc2l6ZTo0NHB4O1xyXG4gIHRleHQtYWxpZ246bGVmdDtcclxuICBjb2xvcjojRkZGRkZGO1xyXG59XHJcblxyXG4uYWxlcnQsIC5hbGVydC1zdWNjZXNzIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5cclxuLmJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1vcmlnaW46IGJvcmRlci1ib3g7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL0JhY2tncm91bmQud2VicCk7XHJcbiAgLypsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMzAsIDc1LCAxMTUsIDEpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTsqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XHJcblxyXG59XHJcblxyXG4vKlxyXG5pZnJhbWUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ub3V0cHV0IHtcclxuICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG59XHJcbiovXHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    45067:
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeComponent": function HomeComponent() {
          return (
            /* binding */
            _HomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_services/user.service */
      55089);
      /* harmony import */


      var _stories_buttons_button_fortest_button_fortest_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../stories/buttons/button-fortest/button-fortest.component */
      65028);

      var _HomeComponent = /*#__PURE__*/function () {
        function _HomeComponent(userService) {
          _classCallCheck(this, _HomeComponent);

          this.userService = userService;
          this.ACC_VERSION = 'ACC_VERSION';
          this.content = 'Aeonix | Tadiran Telecom';
        }

        _createClass(_HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            this.userService.getPublicContent().subscribe(function (data) {
              _this11.content = data;
            }, function (err) {
              _this11.content = JSON.parse(err.error).message;
            });
            this.userService.getAccVersion().subscribe(function (data) {
              _this11.ACC_VERSION = data;
            }, function (err) {
              _this11.ACC_VERSION = JSON.parse(err.error).message;
            });
          }
        }]);

        return _HomeComponent;
      }();

      _HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || _HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService));
      };

      _HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _HomeComponent,
        selectors: [["app-home"]],
        decls: 30,
        vars: 2,
        consts: [[1, "container"], [1, "background", "jumbotron"], [1, "font_0"], [1, "", 2, "font-size", "44px"], [1, "fa-pull-right", "bg-image", "card", "shadow-1-strong", "card-img"], [1, "card-body", "text-white"], [1, "card-title"], [1, "card-text"], ["href", "#!", 1, "btn", "btn-outline-light"], ["role", "alert", 1, "alert", "alert-success"], [1, "alert-heading"], [1, "mb-0"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "dl");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "dt");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "dd");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "storybook-button-fortest");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Card title");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, " Some quick example text to build on the card title and make up the bulk of the card's content. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "h4", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Well done!");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Whenever you need to, be sure to use margin utilities to keep things nice and tidy.");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.content);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.ACC_VERSION);
          }
        },
        directives: [_stories_buttons_button_fortest_button_fortest_component__WEBPACK_IMPORTED_MODULE_1__.ButtonFortestComponent],
        styles: ["._1Q9if[_ngcontent-%COMP%], ._2Hij5[_ngcontent-%COMP%] {\r\n  word-wrap: break-word;\r\n  overflow-wrap: break-word;\r\n  text-align: start;\r\n  pointer-events: none;\r\n}\r\n\r\n._3SQN-[_ngcontent-%COMP%], ._3wnIc[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.multi-bg-example[_ngcontent-%COMP%] {\r\n  width: 980px;\r\n  height: 289px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  -o-object-position: 50% 50%;\r\n     object-position: 50% 50%;\r\n}\r\n\r\n.font_0[_ngcontent-%COMP%] {\r\n  font-size:44px;\r\n  text-align:left;\r\n  color:#FFFFFF;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%], .alert-success[_ngcontent-%COMP%] {\r\n  width: 48%;\r\n}\r\n\r\n.background[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n  background-origin: border-box;\r\n  background-image: url(/assets/images/Background.webp);\r\n  \r\n  background-repeat: no-repeat;\r\n  background-position: top left;\r\n\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%] {\r\n  background-image: url(/assets/images/contact-center.jpg);\r\n  background-position: top right;\r\n  padding-bottom: 100px;\r\n}\r\n\r\naside[_ngcontent-%COMP%] {\r\n  width: 48%;\r\n  padding-left: .1rem;\r\n  margin-left: .1rem;\r\n  float: right;\r\n  box-shadow: inset 5px 0 5px -5px #29627e;\r\n  font-style: italic;\r\n  color: #29627e;\r\n\r\n}\r\n\r\naside[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n  margin: .20rem;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-family: 'Fira Sans', sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQiwyQkFBd0I7S0FBeEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBR0E7RUFDRSxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLHFEQUFxRDtFQUNyRCwyRUFBMkU7RUFDM0UsNEJBQTRCO0VBQzVCLDZCQUE2Qjs7QUFFL0I7O0FBRUE7RUFDRSx3REFBd0Q7RUFDeEQsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGNBQWM7O0FBRWhCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0QyIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuXzFROWlmLCAuXzJIaWo1IHtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLl8zU1FOLSwgLl8zd25JYyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tdWx0aS1iZy1leGFtcGxlIHtcclxuICB3aWR0aDogOTgwcHg7XHJcbiAgaGVpZ2h0OiAyODlweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBvYmplY3QtcG9zaXRpb246IDUwJSA1MCU7XHJcbn1cclxuXHJcbi5mb250XzAge1xyXG4gIGZvbnQtc2l6ZTo0NHB4O1xyXG4gIHRleHQtYWxpZ246bGVmdDtcclxuICBjb2xvcjojRkZGRkZGO1xyXG59XHJcblxyXG4uYWxlcnQsIC5hbGVydC1zdWNjZXNzIHtcclxuICB3aWR0aDogNDglO1xyXG59XHJcblxyXG5cclxuLmJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1vcmlnaW46IGJvcmRlci1ib3g7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL0JhY2tncm91bmQud2VicCk7XHJcbiAgLypsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMzAsIDc1LCAxMTUsIDEpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTsqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XHJcblxyXG59XHJcblxyXG4uYmctaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9jb250YWN0LWNlbnRlci5qcGcpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbmFzaWRlIHtcclxuICB3aWR0aDogNDglO1xyXG4gIHBhZGRpbmctbGVmdDogLjFyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IC4xcmVtO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBib3gtc2hhZG93OiBpbnNldCA1cHggMCA1cHggLTVweCAjMjk2MjdlO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBjb2xvcjogIzI5NjI3ZTtcclxuXHJcbn1cclxuYXNpZGUgPiBwIHtcclxuICBtYXJnaW46IC4yMHJlbTtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    69157:
    /*!***********************************************************!*\
      !*** ./src/app/login2/login-main/login-main.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginMainComponent": function LoginMainComponent() {
          return (
            /* binding */
            _LoginMainComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _register_form2_register_form2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register-form2/register-form2.component */
      71572);
      /* harmony import */


      var _replace_pass_form2_replace_pass_form2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./replace-pass-form2/replace-pass-form2.component */
      25504);
      /* harmony import */


      var _verification_form2_verification_form2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./verification-form2/verification-form2.component */
      50376);
      /* harmony import */


      var _shared_event_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../_shared/event.class */
      79043);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var src_app_shared_event_bus_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_shared/event-bus.service */
      98097);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/_services/auth.service */
      88368);
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../_services/user.service */
      55089);
      /* harmony import */


      var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/_services/token-storage.service */
      93590);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _stories_pages_background1_background1Component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../stories/pages/background1/background1Component */
      23839);
      /* harmony import */


      var _stories_forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../stories/forms/login-form/login-form.component */
      38312); //import * as mStoryInput from "../../../stories/inputs/story-input.stories";


      var _c0 = ["formHeader"];

      var _LoginMainComponent = /*#__PURE__*/function () {
        function _LoginMainComponent(renderer, registerFormDialog, replacePassFormDialog, verificationFormDialog, eventBusService, authService, userService, tokenStorage, router) {
          _classCallCheck(this, _LoginMainComponent);

          this.renderer = renderer;
          this.registerFormDialog = registerFormDialog;
          this.replacePassFormDialog = replacePassFormDialog;
          this.verificationFormDialog = verificationFormDialog;
          this.eventBusService = eventBusService;
          this.authService = authService;
          this.userService = userService;
          this.tokenStorage = tokenStorage;
          this.router = router;
          this.isLoggedIn = false;
          this.isLoginFailed = false;
          this.loginErrorMessage = '';
          this.roles = [];
          this.isLoading = false;
          /**
           * Is this the principal call to action on the login-main?
           */

          this.storyInputsInOrder = [{
            /*...mStoryInput.Default.args?.['storyInput'],*/
            id: '2',
            title: 'username',
            state: 'USER NAME',
            icon: './assets/images/User2ldpi.png',
            type: 'text',
            placeholder: 'Ex.Saul Ramirez',
            hide: false
          }, {
            /*...mStoryInput.Default.args?.['storyInput'],*/
            id: '3',
            title: 'password',
            state: 'PASSWORD',
            icon: './assets/images/LockIcon2ldpi.png',
            type: 'password',
            placeholder: 'your_password',
            hide: false
          }];
          /**
           * Is this the principal call to action on the login-main?
           */

          this.primary = true;
          /**
           * Button contents
           *
           * @required
           */

          this.label = 'Login2Component';
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(2)),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.minLength(2))
          });
        }

        _createClass(_LoginMainComponent, [{
          key: "classes",
          get: function get() {
            var mode = this.primary ? 'storybook-page2--primary' : 'storybook-page2--secondary';
            return ['storybook-page2', mode];
          }
        }, {
          key: "openRegisterForm",
          value: function openRegisterForm() {
            var _this12 = this;

            var registerFormDialogRef = this.registerFormDialog.open(_register_form2_register_form2_component__WEBPACK_IMPORTED_MODULE_0__["default"], {
              data: {
                username: this.getUsernameCurrentFieldValue,
                password: this.getPasswordCurrentFieldValue
              }
            });
            registerFormDialogRef.afterClosed().subscribe(function (result) {
              console.log('The register form dialog was closed');

              if (result.message === 'Registration Complete') {
                _this12.setUsernameCurrentFieldValue(result.email);
              }
            });
            return registerFormDialogRef.afterClosed().toPromise();
          }
        }, {
          key: "openReplacePassForm",
          value: function openReplacePassForm() {
            var _this13 = this;

            var replacePassFormDialogRef = this.replacePassFormDialog.open(_replace_pass_form2_replace_pass_form2_component__WEBPACK_IMPORTED_MODULE_1__.ReplacePassForm2Component, {
              data: {
                username: this.getUsernameCurrentFieldValue,
                password: this.getPasswordCurrentFieldValue
              }
            });
            replacePassFormDialogRef.beforeClosed().subscribe(function (result) {
              console.log('The replace password form dialog before closed');
            }, function (err) {
              console.log(err.error.message);
            });
            replacePassFormDialogRef.afterClosed().subscribe(function (result) {
              console.log('The replace password form dialog after closed');

              if (result.message === 'Replace Password Complete') {
                _this13.setUsernameCurrentFieldValue(result.data.username);

                _this13.setPasswordCurrentFieldValue(result.data.password.toString());
              }
            });
            return replacePassFormDialogRef.afterClosed().toPromise();
          }
        }, {
          key: "openVerificationForm",
          value: function openVerificationForm() {
            var verificationFormDialogRef = this.verificationFormDialog.open(_verification_form2_verification_form2_component__WEBPACK_IMPORTED_MODULE_2__["default"], {
              data: {
                username: this.getUsernameCurrentFieldValue,
                email: "not@inuse.com"
              }
            });
            verificationFormDialogRef.afterClosed().subscribe(function (result) {
              console.log('The register form dialog was closed');
            });
            return verificationFormDialogRef.afterClosed().toPromise();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this.eventBusService.emit(new _shared_event_class__WEBPACK_IMPORTED_MODULE_3__.EventData('is2SVRequired', null));
            this.eventBusSub = this.eventBusService.on('openVerification', function () {
              _this14.openVerificationForm();
            });
          }
        }, {
          key: "getUsernameCurrentFieldValue",
          get: function get() {
            var _a;

            return (_a = this.loginForm.get('username')) === null || _a === void 0 ? void 0 : _a.value;
          }
        }, {
          key: "setUsernameCurrentFieldValue",
          value: function setUsernameCurrentFieldValue(name) {
            var _a;

            (_a = this.loginForm.get('username')) === null || _a === void 0 ? void 0 : _a.setValue(name);
          }
        }, {
          key: "getPasswordCurrentFieldValue",
          get: function get() {
            var _a;

            return (_a = this.loginForm.get('password')) === null || _a === void 0 ? void 0 : _a.value;
          }
        }, {
          key: "setPasswordCurrentFieldValue",
          value: function setPasswordCurrentFieldValue(pass) {
            var _a;

            (_a = this.loginForm.get('password')) === null || _a === void 0 ? void 0 : _a.setValue(pass);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this15 = this;

            console.warn('Login Request from login-main!');
            var _this$loginForm$value = this.loginForm.value,
                username = _this$loginForm$value.username,
                password = _this$loginForm$value.password;
            this.isLoading = true;
            this.authService.login(username, password).subscribe(function (data) {
              _this15.tokenStorage.saveToken(data.accessToken);

              _this15.tokenStorage.saveRefreshToken(data.refreshToken);

              _this15.tokenStorage.saveUser(data);

              _this15.isLoginFailed = false;
              _this15.isLoggedIn = true;
              _this15.roles = _this15.tokenStorage.getUser().roles;

              _this15.profile2();
            }, function (err) {
              switch (err.error.message) {
                case "Error: A registry process should be made!":
                  //this.openRegisterForm().then(() => {this.openReplacePassword()});
                  //toPromise((data) => {this.openReplacePassword()});
                  _this15.openRegisterForm().then(function (val) {
                    console.log(val);

                    switch (val) {
                      case "xbutton":
                        break;

                      case "Registration Complete":
                        _this15.onSubmit();

                        break;

                      case undefined:
                        //this.openReplacePassword();
                        break;

                      default:
                    }

                    return 'done2';
                  }, function (err) {
                    return console.error(err);
                  });

                  break;

                case "User credentials have expired":
                  _this15.openReplacePassForm().then(function (val) {
                    console.log(val);

                    switch (val.message) {
                      case "xbutton":
                        break;

                      case "Replace Password Complete":
                        _this15.onSubmit();

                        break;

                      case undefined:
                        //Handle unknown response
                        break;

                      default:
                    }

                    return 'done2';
                  }, function (err) {
                    return console.error(err);
                  });

                  break;

                default:
                  _this15.loginErrorMessage = err.error.message;
              }

              _this15.isLoginFailed = true;
              _this15.isLoading = false;
            }, function () {
              _this15.isLoading = false;
            });
          }
        }, {
          key: "reloadPage",
          value: function reloadPage() {
            this.router.navigate(['/login-main']).then(function () {
              window.location.reload();
            });
          }
        }, {
          key: "profile2",
          value: function profile2() {
            this.router.navigate(['/profile2']);
          }
        }]);

        return _LoginMainComponent;
      }();

      _LoginMainComponent.ɵfac = function LoginMainComponent_Factory(t) {
        return new (t || _LoginMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_shared_event_bus_service__WEBPACK_IMPORTED_MODULE_4__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_6__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_7__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router));
      };

      _LoginMainComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
        type: _LoginMainComponent,
        selectors: [["login-main"]],
        viewQuery: function LoginMainComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.mainHeader = _t.first);
          }
        },
        inputs: {
          primary: "primary",
          backgroundColor: "backgroundColor",
          background: "background",
          label: "label"
        },
        decls: 6,
        vars: 6,
        consts: [[3, "isLoggedIn", "isLoading", "isLoginFailed", "loginErrorMessage", "mForm", "storyInputs", "sendLoginReq"]],
        template: function LoginMainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "html");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "storybook-background1");

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](5, "storybook-login-form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("sendLoginReq", function LoginMainComponent_Template_storybook_login_form_sendLoginReq_5_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("isLoggedIn", false)("isLoading", ctx.isLoading)("isLoginFailed", ctx.isLoginFailed)("loginErrorMessage", ctx.loginErrorMessage)("mForm", ctx.loginForm)("storyInputs", ctx.storyInputsInOrder);
          }
        },
        directives: [_stories_pages_background1_background1Component__WEBPACK_IMPORTED_MODULE_8__["default"], _stories_forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_9__["default"]],
        styles: [".storybook-login2[_ngcontent-%COMP%] {\n  position: absolute;\n  width: inherit;\n  height: inherit;\n}\n\n.Desktop-1Login-1[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  flex-grow: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLW1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFBRiIsImZpbGUiOiJsb2dpbi1tYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zdG9yeWJvb2stbG9naW4yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcblxyXG4uRGVza3RvcC0xTG9naW4tMSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsZXgtZ3JvdzogMDtcclxufVxyXG5cclxuXHJcblxyXG4iXX0= */", ""]
      });
      /***/
    },

    /***/
    71572:
    /*!******************************************************************************!*\
      !*** ./src/app/login2/login-main/register-form2/register-form2.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            RegisterForm2Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _replace_pass_form2_replace_pass_form2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../replace-pass-form2/replace-pass-form2.component */
      25504);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/_services/auth.service */
      88368);
      /* harmony import */


      var _stories_forms_registry_form_registry_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../stories/forms/registry-form/registry-form.component */
      8111);

      var _c0 = ["form"];

      var RegisterForm2Component = /*#__PURE__*/function () {
        function RegisterForm2Component(authService, renderer, dialogRef, data) {
          _classCallCheck(this, RegisterForm2Component);

          this.authService = authService;
          this.renderer = renderer;
          this.dialogRef = dialogRef;
          this.data = data;
          this.isRegSuccess = false;
          this.isRegFailed = false;
          this.submitted = false;
          this.empList = [];
          this.apiResponse = {
            message: '',
            error: false
          };
          this.errorFieldSubmitted = {};
          this.closeResult = '';
          this.isLoading = false;
          this.validateMail = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          this.storyInputsInOrder = [{
            /*...mStoryInput.Default.args?.['storyInput'],*/
            id: '2',
            title: 'username',
            state: 'USER NAME',
            icon: './assets/images/User2ldpi.png',
            type: 'text',
            placeholder: 'Ex.Saul Ramirez',
            hide: false
          }, {
            /*...mStoryInput.Default.args?.['storyInput'],*/
            id: '3',
            title: 'password',
            state: 'PASSWORD',
            icon: './assets/images/LockIcon2ldpi.png',
            type: 'password',
            placeholder: 'your_password',
            hide: true
          }, {
            /*...mStoryInput.Default.args?.['storyInput'],*/
            id: '5',
            title: 'phone',
            state: 'PHONE NUMBER FOR AUTHENTICATION',
            icon: './assets/images/Phone3ldpi.png',
            type: 'tel',
            placeholder: 'Ex: +972547762084',
            hide: false
          }, {
            /*...mStoryInput.Default.args?.['storyInput'],*/
            id: '4',
            title: 'email',
            state: 'EMAIL',
            icon: './assets/images/AtSign3ldpi.png',
            type: 'email',
            placeholder: 'Ex: abc@example.com',
            hide: false
          }];
          this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(data.username.toString(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(data.password.toString(), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _replace_pass_form2_replace_pass_form2_component__WEBPACK_IMPORTED_MODULE_0__.PasswordValidators.patternValidator(new RegExp("(?=.*[0-9 ]{8})"), {
              requiresPhoneChars: true
            }))
          });
          /*Validators.pattern(new RegExp("[0-9 ]{12}")*/

          this.empList.push("admin");
        }

        _createClass(RegisterForm2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this16 = this;

            if (this.isRegSuccess) {
              this.dialogRef.close({
                message: 'Registration Complete',
                email: this.email.value
              });
            } else {
              this.submitted = true;

              var _this$registerForm$ge = this.registerForm.getRawValue(),
                  username = _this$registerForm$ge.username,
                  password = _this$registerForm$ge.password,
                  email = _this$registerForm$ge.email,
                  phone = _this$registerForm$ge.phone;

              this.isLoading = true;
              this.authService.registerForm(username, email, password, phone).subscribe(function (data) {
                console.log(data);
                _this16.isRegSuccess = true;
                _this16.isRegFailed = false;
                _this16.errorFieldSubmitted = {};
                _this16.apiResponse.error = false;
                _this16.apiResponse.message = 'Successful registration';
              }, function (error) {
                var errorResponse = JSON.parse(error.error);
                _this16.apiResponse.error = true;
                _this16.apiResponse.message = 'Registration error';
                _this16.regErrorMessage = errorResponse;
                _this16.isRegFailed = true;

                if (errorResponse.error && errorResponse.message === 'VALIDATION_FAILED') {
                  _this16.errorFieldSubmitted = errorResponse.data;
                }

                _this16.isLoading = false;
              }, function () {
                _this16.isLoading = false;
                console.log("Registration Complete");
              });
            }
          }
        }, {
          key: "username",
          get: function get() {
            return this.registerForm.get('username');
          }
        }, {
          key: "email",
          get: function get() {
            return this.registerForm.get('email');
          }
        }, {
          key: "password",
          get: function get() {
            return this.registerForm.get('password');
          }
        }, {
          key: "phone",
          get: function get() {
            return this.registerForm.get('phone');
          }
        }]);

        return RegisterForm2Component;
      }();

      RegisterForm2Component.ɵfac = function RegisterForm2Component_Factory(t) {
        return new (t || RegisterForm2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA));
      };

      RegisterForm2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: RegisterForm2Component,
        selectors: [["register-form2"]],
        viewQuery: function RegisterForm2Component_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
          }
        },
        outputs: {
          validateMail: "validateMail"
        },
        decls: 2,
        vars: 6,
        consts: [[3, "isRegSuccess", "isRegFailed", "regErrorMessage", "isLoading", "storyInputs", "mForm", "sendRegReq", "clickXButton"], ["form", ""]],
        template: function RegisterForm2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "storybook-registry-form", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("sendRegReq", function RegisterForm2Component_Template_storybook_registry_form_sendRegReq_0_listener() {
              return ctx.onSubmit();
            })("clickXButton", function RegisterForm2Component_Template_storybook_registry_form_clickXButton_0_listener() {
              return ctx.dialogRef.close("xbutton");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isRegSuccess", ctx.isRegSuccess)("isRegFailed", ctx.isRegFailed)("regErrorMessage", ctx.regErrorMessage)("isLoading", ctx.isLoading)("storyInputs", ctx.storyInputsInOrder)("mForm", ctx.registerForm);
          }
        },
        directives: [_stories_forms_registry_form_registry_form_component__WEBPACK_IMPORTED_MODULE_2__["default"]],
        styles: [".fa[_ngcontent-%COMP%], .fab[_ngcontent-%COMP%], .fad[_ngcontent-%COMP%], .fal[_ngcontent-%COMP%], .far[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%] {\r\n  -moz-osx-font-smoothing:grayscale;\r\n  -webkit-font-smoothing:antialiased;\r\n  display:inline-block;\r\n  font-style:normal;\r\n  font-feature-settings:normal;\r\n  font-variant:normal;\r\n  text-rendering:auto;line-height:1\r\n}\r\n\r\n.fa-lg[_ngcontent-%COMP%] {\r\n  font-size:1.33333em;\r\n  line-height:.75em;\r\n  vertical-align:-.0667em\r\n}\r\n\r\n\r\n\r\n.fa-xs[_ngcontent-%COMP%] {font-size:.75em}\r\n\r\n.fa-sm[_ngcontent-%COMP%] {font-size:.875em}\r\n\r\n.fa-1x[_ngcontent-%COMP%] {font-size:1em}\r\n\r\n.fa-2x[_ngcontent-%COMP%] {font-size:2em}\r\n\r\n.fa-3x[_ngcontent-%COMP%] {font-size:3em}\r\n\r\n.fa-4x[_ngcontent-%COMP%] {font-size:4em}\r\n\r\n.fa-5x[_ngcontent-%COMP%] {font-size:5em}\r\n\r\n.fa-6x[_ngcontent-%COMP%] {font-size:6em}\r\n\r\n.fa-7x[_ngcontent-%COMP%] {font-size:7em}\r\n\r\n.fa-8x[_ngcontent-%COMP%] {font-size:8em}\r\n\r\n.fa-9x[_ngcontent-%COMP%] {font-size:9em}\r\n\r\n.fa-10x[_ngcontent-%COMP%] {font-size:10em}\r\n\r\n.fa-fw[_ngcontent-%COMP%] {text-align:center;width:1.25em}\r\n\r\n.fa-ul[_ngcontent-%COMP%] {list-style-type:none;margin-left:2.5em;padding-left:0}\r\n\r\n.fa-ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {position:relative}\r\n\r\n.fa-li[_ngcontent-%COMP%] {left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}\r\n\r\n.fa-border[_ngcontent-%COMP%] {border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}\r\n\r\n.fa-pull-left[_ngcontent-%COMP%] {float:left}\r\n\r\n.fa-pull-right[_ngcontent-%COMP%] {float:right}\r\n\r\n.fa.fa-pull-left[_ngcontent-%COMP%], .fab.fa-pull-left[_ngcontent-%COMP%], .fal.fa-pull-left[_ngcontent-%COMP%], .far.fa-pull-left[_ngcontent-%COMP%], .fas.fa-pull-left[_ngcontent-%COMP%] {\r\n  margin-right:.3em\r\n}\r\n\r\n.input-with-pre-icon[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {left:36px;right:auto;right:initial}\r\n\r\n.fa.fa-pull-right[_ngcontent-%COMP%], .fab.fa-pull-right[_ngcontent-%COMP%], .fal.fa-pull-right[_ngcontent-%COMP%], .far.fa-pull-right[_ngcontent-%COMP%], .fas.fa-pull-right[_ngcontent-%COMP%] {\r\n  margin-left:.3em\r\n}\r\n\r\n.fa-spin[_ngcontent-%COMP%] {\r\n  animation:fa-spin 2s linear infinite\r\n}\r\n\r\n.fa[_ngcontent-%COMP%], .far[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%] {\r\n  font-family: \"Font Awesome 5 Free\", serif\r\n}\r\n\r\n.fa[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%] {\r\n  font-weight:900\r\n}\r\n\r\n.v-btn__content[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  color: inherit;\r\n  display: flex;\r\n  flex: 1 0 auto;\r\n  justify-content: inherit;\r\n  line-height: normal;\r\n  position: relative;\r\n  transition: inherit;\r\n}\r\n\r\n.form-outline[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus    ~ .form-label[_ngcontent-%COMP%], .form-outline[_ngcontent-%COMP%]   .form-control.active[_ngcontent-%COMP%]    ~ .form-label[_ngcontent-%COMP%] {\r\n  transform: translateY(-1.5rem) translateY(0.1rem) scale(0.8);\r\n}\r\n\r\n\r\n\r\n.v-btn__content[_ngcontent-%COMP%] {\r\n  letter-spacing: normal;\r\n}\r\n\r\nbody#registerFormDialogContainer[_ngcontent-%COMP%] {\r\n  background: #0000ff00;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLWZvcm0yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7RUFDRSxpQ0FBaUM7RUFDakMsa0NBQWtDO0VBQ2xDLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsNEJBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixtQkFBbUIsQ0FBQztBQUN0Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakI7QUFDRjs7QUFDQSxHQUFHOztBQUNILFFBQVEsZUFBZTs7QUFFdkIsUUFBUSxnQkFBZ0I7O0FBRXhCLFFBQVEsYUFBYTs7QUFFckIsUUFBUSxhQUFhOztBQUVyQixRQUFRLGFBQWE7O0FBRXJCLFFBQVEsYUFBYTs7QUFFckIsUUFBUSxhQUFhOztBQUVyQixRQUFRLGFBQWE7O0FBRXJCLFFBQVEsYUFBYTs7QUFFckIsUUFBUSxhQUFhOztBQUVyQixRQUFRLGFBQWE7O0FBRXJCLFNBQVMsY0FBYzs7QUFFdkIsUUFBUSxpQkFBaUIsQ0FBQyxZQUFZOztBQUV0QyxRQUFRLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLGNBQWM7O0FBRTdELFdBQVcsaUJBQWlCOztBQUU1QixRQUFRLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsbUJBQW1COztBQUVuRixZQUFZLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLHdCQUF3Qjs7QUFFL0UsZUFBZSxVQUFVOztBQUV6QixnQkFBZ0IsV0FBVzs7QUFFM0I7RUFDRTtBQUNGOztBQUVBLDRCQUE0QixTQUFTLENBQUMsVUFBWSxDQUFaLGFBQWE7O0FBR25EO0VBQ0U7QUFDRjs7QUFFQTtFQUVFO0FBQ0Y7O0FBSUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFHQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSw0REFBNEQ7QUFDOUQ7O0FBR0E7Ozs7Ozs7Q0FPQzs7QUFDRDtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2QiIsImZpbGUiOiJyZWdpc3Rlci1mb3JtMi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLmZhLC5mYWIsLmZhZCwuZmFsLC5mYXIsLmZhcyB7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zdHlsZTpub3JtYWw7XHJcbiAgZm9udC12YXJpYW50Om5vcm1hbDtcclxuICB0ZXh0LXJlbmRlcmluZzphdXRvO2xpbmUtaGVpZ2h0OjFcclxufVxyXG5cclxuLmZhLWxnIHtcclxuICBmb250LXNpemU6MS4zMzMzM2VtO1xyXG4gIGxpbmUtaGVpZ2h0Oi43NWVtO1xyXG4gIHZlcnRpY2FsLWFsaWduOi0uMDY2N2VtXHJcbn1cclxuLyoqL1xyXG4uZmEteHMge2ZvbnQtc2l6ZTouNzVlbX1cclxuXHJcbi5mYS1zbSB7Zm9udC1zaXplOi44NzVlbX1cclxuXHJcbi5mYS0xeCB7Zm9udC1zaXplOjFlbX1cclxuXHJcbi5mYS0yeCB7Zm9udC1zaXplOjJlbX1cclxuXHJcbi5mYS0zeCB7Zm9udC1zaXplOjNlbX1cclxuXHJcbi5mYS00eCB7Zm9udC1zaXplOjRlbX1cclxuXHJcbi5mYS01eCB7Zm9udC1zaXplOjVlbX1cclxuXHJcbi5mYS02eCB7Zm9udC1zaXplOjZlbX1cclxuXHJcbi5mYS03eCB7Zm9udC1zaXplOjdlbX1cclxuXHJcbi5mYS04eCB7Zm9udC1zaXplOjhlbX1cclxuXHJcbi5mYS05eCB7Zm9udC1zaXplOjllbX1cclxuXHJcbi5mYS0xMHgge2ZvbnQtc2l6ZToxMGVtfVxyXG5cclxuLmZhLWZ3IHt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxLjI1ZW19XHJcblxyXG4uZmEtdWwge2xpc3Qtc3R5bGUtdHlwZTpub25lO21hcmdpbi1sZWZ0OjIuNWVtO3BhZGRpbmctbGVmdDowfVxyXG5cclxuLmZhLXVsPmxpIHtwb3NpdGlvbjpyZWxhdGl2ZX1cclxuXHJcbi5mYS1saSB7bGVmdDotMmVtO3Bvc2l0aW9uOmFic29sdXRlO3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjJlbTtsaW5lLWhlaWdodDppbmhlcml0fVxyXG5cclxuLmZhLWJvcmRlciB7Ym9yZGVyOi4wOGVtIHNvbGlkICNlZWU7Ym9yZGVyLXJhZGl1czouMWVtO3BhZGRpbmc6LjJlbSAuMjVlbSAuMTVlbX1cclxuXHJcbi5mYS1wdWxsLWxlZnQge2Zsb2F0OmxlZnR9XHJcblxyXG4uZmEtcHVsbC1yaWdodCB7ZmxvYXQ6cmlnaHR9XHJcblxyXG4uZmEuZmEtcHVsbC1sZWZ0LC5mYWIuZmEtcHVsbC1sZWZ0LC5mYWwuZmEtcHVsbC1sZWZ0LC5mYXIuZmEtcHVsbC1sZWZ0LC5mYXMuZmEtcHVsbC1sZWZ0IHtcclxuICBtYXJnaW4tcmlnaHQ6LjNlbVxyXG59XHJcblxyXG4uaW5wdXQtd2l0aC1wcmUtaWNvbiBsYWJlbCB7bGVmdDozNnB4O3JpZ2h0OmluaXRpYWx9XHJcblxyXG5cclxuLmZhLmZhLXB1bGwtcmlnaHQsLmZhYi5mYS1wdWxsLXJpZ2h0LC5mYWwuZmEtcHVsbC1yaWdodCwuZmFyLmZhLXB1bGwtcmlnaHQsLmZhcy5mYS1wdWxsLXJpZ2h0IHtcclxuICBtYXJnaW4tbGVmdDouM2VtXHJcbn1cclxuXHJcbi5mYS1zcGluIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjpmYS1zcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb246ZmEtc3BpbiAycyBsaW5lYXIgaW5maW5pdGVcclxufVxyXG5cclxuXHJcblxyXG4uZmEsLmZhciwuZmFzIHtcclxuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCIsIHNlcmlmXHJcbn1cclxuXHJcbi5mYSwuZmFzIHtcclxuICBmb250LXdlaWdodDo5MDBcclxufVxyXG5cclxuXHJcbi52LWJ0bl9fY29udGVudCB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDEgMCBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiBpbmhlcml0O1xyXG59XHJcblxyXG4uZm9ybS1vdXRsaW5lIC5mb3JtLWNvbnRyb2w6Zm9jdXMgfiAuZm9ybS1sYWJlbCwgLmZvcm0tb3V0bGluZSAuZm9ybS1jb250cm9sLmFjdGl2ZSB+IC5mb3JtLWxhYmVsIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNXJlbSkgdHJhbnNsYXRlWSgwLjFyZW0pIHNjYWxlKDAuOCk7XHJcbn1cclxuXHJcblxyXG4vKlxyXG4uZm9ybS1vdXRsaW5lIC5mb3JtLWNvbnRyb2wgfiAuZm9ybS1ub3RjaCBkaXYge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogIzM5YzBlZDtcclxufVxyXG5cclxuKi9cclxuLnYtYnRuX19jb250ZW50IHtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcblxyXG5ib2R5I3JlZ2lzdGVyRm9ybURpYWxvZ0NvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogIzAwMDBmZjAwO1xyXG59XHJcblxyXG5cclxuIl19 */"]
      });
      /***/
    },

    /***/
    25504:
    /*!**************************************************************************************!*\
      !*** ./src/app/login2/login-main/replace-pass-form2/replace-pass-form2.component.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReplacePassForm2Component": function ReplacePassForm2Component() {
          return (
            /* binding */
            _ReplacePassForm2Component
          );
        },

        /* harmony export */
        "PasswordValidators": function PasswordValidators() {
          return (
            /* binding */
            _PasswordValidators
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _shared_event_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../_shared/event.class */
      79043);
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../app.config */
      49670);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_services/auth.service */
      88368);
      /* harmony import */


      var _shared_event_bus_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../_shared/event-bus.service */
      98097);
      /* harmony import */


      var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../_services/token-storage.service */
      93590);
      /* harmony import */


      var _stories_forms_replace_pass_form_replace_pass_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../stories/forms/replace-pass-form/replace-pass-form.component */
      29085);

      var _ReplacePassForm2Component = /*#__PURE__*/function () {
        function _ReplacePassForm2Component(authService, renderer, eventBusService, tokenStorageService, dialogRef, data) {
          _classCallCheck(this, _ReplacePassForm2Component);

          this.authService = authService;
          this.renderer = renderer;
          this.eventBusService = eventBusService;
          this.tokenStorageService = tokenStorageService;
          this.dialogRef = dialogRef;
          this.data = data;
          this.status = {
            isRepSuccess: false,
            isRepFailed: false,
            submitted: false,
            repErrorMessage: {},
            apiResponse: {
              message: '',
              error: false
            },
            errorFieldSubmitted: {},
            closeResult: ''
          };
          this.isLoading = false;
          this.empList = [];
          this.closeResult = '';
          this.storyInputsInOrder = [{
            /*...mStoryInput.Default.args?.['storyInput'],*/
            id: '1',
            title: 'oldPassword',
            state: 'INITIAL PASSWORD',
            icon: './assets/images/LockIcon2ldpi.png',
            type: 'password',
            placeholder: 'your_password',
            hide: false
          }, {
            /*...mStoryInput.Default.args?.['storyInput'],*/
            id: '2',
            title: 'password',
            state: 'NEW PASSWORD',
            icon: './assets/images/LockIcon2ldpi.png',
            type: 'password',
            placeholder: 'your_password',
            hide: false
          }, {
            /*...mStoryInput.Default.args?.['storyInput'],*/
            id: '3',
            title: 'confirmPassword',
            state: 'RE-ENTER NEW PASSWORD',
            icon: './assets/images/LockIcon2ldpi.png',
            type: 'password',
            placeholder: 'your_password',
            hide: false
          }];
          this.replacePassForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data.username, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(data.password, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(1)),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(8), _PasswordValidators.patternValidator(new RegExp("(?=.*[0-9])"), {
              requiresDigit: true
            }), _PasswordValidators.patternValidator(new RegExp("(?=.*[A-Z])"), {
              requiresUppercase: true
            }), _PasswordValidators.patternValidator(new RegExp("(?=.*[a-z])"), {
              requiresLowercase: true
            }), _PasswordValidators.patternValidator(new RegExp("(?=.*[$@^!%*?&#><{}()+~])"), {
              requiresSpecialChars: true
            })])),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(8), _PasswordValidators.patternValidator(new RegExp("(?=.*[0-9])"), {
              requiresDigit: true
            }), _PasswordValidators.patternValidator(new RegExp("(?=.*[A-Z])"), {
              requiresUppercase: true
            }), _PasswordValidators.patternValidator(new RegExp("(?=.*[a-z])"), {
              requiresLowercase: true
            }), _PasswordValidators.patternValidator(new RegExp("(?=.*[$@^!%*?&#><{}()+~])"), {
              requiresSpecialChars: true
            })])
          });
        }

        _createClass(_ReplacePassForm2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this17 = this;

            if (this.status.isRepSuccess) {
              this.dialogRef.close({
                message: 'Replace Password Complete',
                data: this.data
              });
            } else if (_app_config__WEBPACK_IMPORTED_MODULE_1__.workingModeConfiguration.runMode.TSV && this.tokenStorageService.getPinCodeToken() == null) {
              this.eventBusService.emit(new _shared_event_class__WEBPACK_IMPORTED_MODULE_0__.EventData('openVerification', null));
            } else {
              this.status.submitted = true;
              this.isLoading = true;
              this.changePassword().subscribe(function (data) {
                console.log(data);
                _this17.status.isRepSuccess = true;
                _this17.status.isRepFailed = false;
                _this17.status.errorFieldSubmitted = {};
                _this17.status.apiResponse.error = false;
                _this17.status.apiResponse.message = 'Successful registration';
                _this17.data.password = _this17.password.value.toString();
              }, function (error) {
                var errorResponse = JSON.parse(error.error);
                _this17.status.apiResponse.error = true;
                _this17.status.apiResponse.message = 'Replace password error';
                _this17.status.repErrorMessage = errorResponse;
                _this17.status.isRepFailed = true;

                if (errorResponse.error && errorResponse.message === 'VALIDATION_FAILED') {
                  _this17.status.errorFieldSubmitted = errorResponse.data;
                }

                _this17.isLoading = false;
              }, function () {
                _this17.isLoading = false;
                console.log('Replace Password closed');
              });
            }
          }
        }, {
          key: "changePassword",
          value: function changePassword() {
            var _this$replacePassForm = this.replacePassForm.value,
                userName = _this$replacePassForm.userName,
                oldPassword = _this$replacePassForm.oldPassword,
                password = _this$replacePassForm.password,
                confirmPassword = _this$replacePassForm.confirmPassword;
            var pinCodeToken = this.tokenStorageService.getPinCodeToken();

            if (pinCodeToken != null) {
              return this.authService.TSV_ReplacePassForm(userName, oldPassword, password, confirmPassword, pinCodeToken);
            }

            return this.authService.replacePassForm(userName, oldPassword, password, confirmPassword);
          }
        }, {
          key: "userName",
          get: function get() {
            return this.replacePassForm.get('username');
          }
        }, {
          key: "oldPassword",
          get: function get() {
            return this.replacePassForm.get('oldPassword');
          }
        }, {
          key: "password",
          get: function get() {
            return this.replacePassForm.get('password');
          }
        }, {
          key: "confirmPassword",
          get: function get() {
            return this.replacePassForm.get('confirmPassword');
          }
        }]);

        return _ReplacePassForm2Component;
      }();

      _ReplacePassForm2Component.ɵfac = function ReplacePassForm2Component_Factory(t) {
        return new (t || _ReplacePassForm2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_event_bus_service__WEBPACK_IMPORTED_MODULE_3__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_4__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MAT_DIALOG_DATA));
      };

      _ReplacePassForm2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _ReplacePassForm2Component,
        selectors: [["app-modal"]],
        decls: 2,
        vars: 4,
        consts: [[3, "status", "isLoading", "storyInputs", "mForm", "sendRegReq", "clickXButton"], ["form", ""]],
        template: function ReplacePassForm2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "storybook-replace-pass-form", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sendRegReq", function ReplacePassForm2Component_Template_storybook_replace_pass_form_sendRegReq_0_listener() {
              return ctx.onSubmit();
            })("clickXButton", function ReplacePassForm2Component_Template_storybook_replace_pass_form_clickXButton_0_listener() {
              return ctx.dialogRef.close({
                message: "xbutton"
              });
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("status", ctx.status)("isLoading", ctx.isLoading)("storyInputs", ctx.storyInputsInOrder)("mForm", ctx.replacePassForm);
          }
        },
        directives: [_stories_forms_replace_pass_form_replace_pass_form_component__WEBPACK_IMPORTED_MODULE_5__["default"]],
        styles: [".fa[_ngcontent-%COMP%], .fab[_ngcontent-%COMP%], .fad[_ngcontent-%COMP%], .fal[_ngcontent-%COMP%], .far[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%] {\r\n  -moz-osx-font-smoothing:grayscale;\r\n  -webkit-font-smoothing:antialiased;\r\n  display:inline-block;\r\n  font-style:normal;\r\n  font-feature-settings:normal;\r\n  font-variant:normal;\r\n  text-rendering:auto;line-height:1\r\n}\r\n\r\n.fa-lg[_ngcontent-%COMP%] {\r\n  font-size:1.33333em;\r\n  line-height:.75em;\r\n  vertical-align:-.0667em\r\n}\r\n\r\n\r\n\r\n.fa-xs[_ngcontent-%COMP%] {font-size:.75em}\r\n\r\n.fa-sm[_ngcontent-%COMP%] {font-size:.875em}\r\n\r\n.fa-1x[_ngcontent-%COMP%] {font-size:1em}\r\n\r\n.fa-2x[_ngcontent-%COMP%] {font-size:2em}\r\n\r\n.fa-3x[_ngcontent-%COMP%] {font-size:3em}\r\n\r\n.fa-4x[_ngcontent-%COMP%] {font-size:4em}\r\n\r\n.fa-5x[_ngcontent-%COMP%] {font-size:5em}\r\n\r\n.fa-6x[_ngcontent-%COMP%] {font-size:6em}\r\n\r\n.fa-7x[_ngcontent-%COMP%] {font-size:7em}\r\n\r\n.fa-8x[_ngcontent-%COMP%] {font-size:8em}\r\n\r\n.fa-9x[_ngcontent-%COMP%] {font-size:9em}\r\n\r\n.fa-10x[_ngcontent-%COMP%] {font-size:10em}\r\n\r\n.fa-fw[_ngcontent-%COMP%] {text-align:center;width:1.25em}\r\n\r\n.fa-ul[_ngcontent-%COMP%] {list-style-type:none;margin-left:2.5em;padding-left:0}\r\n\r\n.fa-ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {position:relative}\r\n\r\n.fa-li[_ngcontent-%COMP%] {left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}\r\n\r\n.fa-border[_ngcontent-%COMP%] {border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}\r\n\r\n.fa-pull-left[_ngcontent-%COMP%] {float:left}\r\n\r\n.fa-pull-right[_ngcontent-%COMP%] {float:right}\r\n\r\n.fa.fa-pull-left[_ngcontent-%COMP%], .fab.fa-pull-left[_ngcontent-%COMP%], .fal.fa-pull-left[_ngcontent-%COMP%], .far.fa-pull-left[_ngcontent-%COMP%], .fas.fa-pull-left[_ngcontent-%COMP%] {\r\n  margin-right:.3em\r\n}\r\n\r\n.input-with-pre-icon[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {left:36px;right:auto;right:initial}\r\n\r\n.fa.fa-pull-right[_ngcontent-%COMP%], .fab.fa-pull-right[_ngcontent-%COMP%], .fal.fa-pull-right[_ngcontent-%COMP%], .far.fa-pull-right[_ngcontent-%COMP%], .fas.fa-pull-right[_ngcontent-%COMP%] {\r\n  margin-left:.3em\r\n}\r\n\r\n.fa-spin[_ngcontent-%COMP%] {\r\n  animation:fa-spin 2s linear infinite\r\n}\r\n\r\n.fa[_ngcontent-%COMP%], .far[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%] {\r\n  font-family: \"Font Awesome 5 Free\", serif\r\n}\r\n\r\n.fa[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%] {\r\n  font-weight:900\r\n}\r\n\r\n.v-btn__content[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  color: inherit;\r\n  display: flex;\r\n  flex: 1 0 auto;\r\n  justify-content: inherit;\r\n  line-height: normal;\r\n  position: relative;\r\n  transition: inherit;\r\n}\r\n\r\n.v-btn__content[_ngcontent-%COMP%] {\r\n  letter-spacing: normal;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGxhY2UtcGFzcy1mb3JtMi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsa0NBQWtDO0VBQ2xDLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsNEJBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixtQkFBbUIsQ0FBQztBQUN0Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakI7QUFDRjs7QUFDQSxHQUFHOztBQUNILFFBQVEsZUFBZTs7QUFFdkIsUUFBUSxnQkFBZ0I7O0FBRXhCLFFBQVEsYUFBYTs7QUFFckIsUUFBUSxhQUFhOztBQUVyQixRQUFRLGFBQWE7O0FBRXJCLFFBQVEsYUFBYTs7QUFFckIsUUFBUSxhQUFhOztBQUVyQixRQUFRLGFBQWE7O0FBRXJCLFFBQVEsYUFBYTs7QUFFckIsUUFBUSxhQUFhOztBQUVyQixRQUFRLGFBQWE7O0FBRXJCLFNBQVMsY0FBYzs7QUFFdkIsUUFBUSxpQkFBaUIsQ0FBQyxZQUFZOztBQUV0QyxRQUFRLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLGNBQWM7O0FBRTdELFdBQVcsaUJBQWlCOztBQUU1QixRQUFRLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsbUJBQW1COztBQUVuRixZQUFZLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLHdCQUF3Qjs7QUFFL0UsZUFBZSxVQUFVOztBQUV6QixnQkFBZ0IsV0FBVzs7QUFFM0I7RUFDRTtBQUNGOztBQUVBLDRCQUE0QixTQUFTLENBQUMsVUFBWSxDQUFaLGFBQWE7O0FBR25EO0VBQ0U7QUFDRjs7QUFFQTtFQUVFO0FBQ0Y7O0FBSUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFHQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBR0E7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoicmVwbGFjZS1wYXNzLWZvcm0yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5mYSwuZmFiLC5mYWQsLmZhbCwuZmFyLC5mYXMge1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc3R5bGU6bm9ybWFsO1xyXG4gIGZvbnQtdmFyaWFudDpub3JtYWw7XHJcbiAgdGV4dC1yZW5kZXJpbmc6YXV0bztsaW5lLWhlaWdodDoxXHJcbn1cclxuXHJcbi5mYS1sZyB7XHJcbiAgZm9udC1zaXplOjEuMzMzMzNlbTtcclxuICBsaW5lLWhlaWdodDouNzVlbTtcclxuICB2ZXJ0aWNhbC1hbGlnbjotLjA2NjdlbVxyXG59XHJcbi8qKi9cclxuLmZhLXhzIHtmb250LXNpemU6Ljc1ZW19XHJcblxyXG4uZmEtc20ge2ZvbnQtc2l6ZTouODc1ZW19XHJcblxyXG4uZmEtMXgge2ZvbnQtc2l6ZToxZW19XHJcblxyXG4uZmEtMngge2ZvbnQtc2l6ZToyZW19XHJcblxyXG4uZmEtM3gge2ZvbnQtc2l6ZTozZW19XHJcblxyXG4uZmEtNHgge2ZvbnQtc2l6ZTo0ZW19XHJcblxyXG4uZmEtNXgge2ZvbnQtc2l6ZTo1ZW19XHJcblxyXG4uZmEtNngge2ZvbnQtc2l6ZTo2ZW19XHJcblxyXG4uZmEtN3gge2ZvbnQtc2l6ZTo3ZW19XHJcblxyXG4uZmEtOHgge2ZvbnQtc2l6ZTo4ZW19XHJcblxyXG4uZmEtOXgge2ZvbnQtc2l6ZTo5ZW19XHJcblxyXG4uZmEtMTB4IHtmb250LXNpemU6MTBlbX1cclxuXHJcbi5mYS1mdyB7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MS4yNWVtfVxyXG5cclxuLmZhLXVsIHtsaXN0LXN0eWxlLXR5cGU6bm9uZTttYXJnaW4tbGVmdDoyLjVlbTtwYWRkaW5nLWxlZnQ6MH1cclxuXHJcbi5mYS11bD5saSB7cG9zaXRpb246cmVsYXRpdmV9XHJcblxyXG4uZmEtbGkge2xlZnQ6LTJlbTtwb3NpdGlvbjphYnNvbHV0ZTt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoyZW07bGluZS1oZWlnaHQ6aW5oZXJpdH1cclxuXHJcbi5mYS1ib3JkZXIge2JvcmRlcjouMDhlbSBzb2xpZCAjZWVlO2JvcmRlci1yYWRpdXM6LjFlbTtwYWRkaW5nOi4yZW0gLjI1ZW0gLjE1ZW19XHJcblxyXG4uZmEtcHVsbC1sZWZ0IHtmbG9hdDpsZWZ0fVxyXG5cclxuLmZhLXB1bGwtcmlnaHQge2Zsb2F0OnJpZ2h0fVxyXG5cclxuLmZhLmZhLXB1bGwtbGVmdCwuZmFiLmZhLXB1bGwtbGVmdCwuZmFsLmZhLXB1bGwtbGVmdCwuZmFyLmZhLXB1bGwtbGVmdCwuZmFzLmZhLXB1bGwtbGVmdCB7XHJcbiAgbWFyZ2luLXJpZ2h0Oi4zZW1cclxufVxyXG5cclxuLmlucHV0LXdpdGgtcHJlLWljb24gbGFiZWwge2xlZnQ6MzZweDtyaWdodDppbml0aWFsfVxyXG5cclxuXHJcbi5mYS5mYS1wdWxsLXJpZ2h0LC5mYWIuZmEtcHVsbC1yaWdodCwuZmFsLmZhLXB1bGwtcmlnaHQsLmZhci5mYS1wdWxsLXJpZ2h0LC5mYXMuZmEtcHVsbC1yaWdodCB7XHJcbiAgbWFyZ2luLWxlZnQ6LjNlbVxyXG59XHJcblxyXG4uZmEtc3BpbiB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246ZmEtc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOmZhLXNwaW4gMnMgbGluZWFyIGluZmluaXRlXHJcbn1cclxuXHJcblxyXG5cclxuLmZhLC5mYXIsLmZhcyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiLCBzZXJpZlxyXG59XHJcblxyXG4uZmEsLmZhcyB7XHJcbiAgZm9udC13ZWlnaHQ6OTAwXHJcbn1cclxuXHJcblxyXG4udi1idG5fX2NvbnRlbnQge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiAxIDAgYXV0bztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogaW5oZXJpdDtcclxufVxyXG5cclxuXHJcbi52LWJ0bl9fY29udGVudCB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxufVxyXG5cclxuIl19 */"]
      });

      var _PasswordValidators = /*#__PURE__*/function () {
        function _PasswordValidators() {
          _classCallCheck(this, _PasswordValidators);
        }

        _createClass(_PasswordValidators, null, [{
          key: "patternValidator",
          value: function patternValidator(regex, error) {
            return function (control) {
              if (!control.value) {
                // if the control value is empty return no error.
                return null;
              } // test the value of the control against the regexp supplied.


              var valid = regex.test(control.value); // if true, return no error, otherwise return the error object passed in the second parameter.

              return valid ? null : error;
            };
          }
        }]);

        return _PasswordValidators;
      }();
      /***/

    },

    /***/
    50376:
    /*!**************************************************************************************!*\
      !*** ./src/app/login2/login-main/verification-form2/verification-form2.component.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            VerificationForm2Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/_services/auth.service */
      88368);
      /* harmony import */


      var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../_services/token-storage.service */
      93590);
      /* harmony import */


      var _stories_forms_verification_form_verification_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../stories/forms/verification-form/verification-form.component */
      59067);

      var _c0 = ["form"];

      var VerificationForm2Component = /*#__PURE__*/function () {
        function VerificationForm2Component(authService, renderer, tokenStorage, dialogRef, data) {
          _classCallCheck(this, VerificationForm2Component);

          this.authService = authService;
          this.renderer = renderer;
          this.tokenStorage = tokenStorage;
          this.dialogRef = dialogRef;
          this.data = data;
          this.status = {
            isVerSuccess: false,
            isVerFailed: false,
            verErrorMessage: {}
          };
          this.isLoading = false;
          this.submitted = false;
          this.empList = [];
          this.apiResponse = {
            message: '',
            error: false
          };
          this.errorFieldSubmitted = {};
          this.closeResult = '';
          this.storyInputsInOrder = [{
            /*...mStoryInput.Default.args?.['storyInput'],*/
            id: '2',
            title: 'username',
            state: 'USER NAME',
            icon: './assets/images/User2ldpi.png',
            type: 'text',
            placeholder: 'Ex.Saul Ramirez',
            hide: false
          }, {
            /*...mStoryInput.Default.args?.['storyInput'],*/
            id: '3',
            title: 'password',
            state: 'PASSWORD',
            icon: './assets/images/LockIcon2ldpi.png',
            type: 'password',
            placeholder: 'your_password',
            hide: true
          }, {
            /*...mStoryInput.Default.args?.['storyInput'],*/
            id: '5',
            title: 'phone',
            state: 'PHONE NUMBER FOR AUTHENTICATION',
            icon: './assets/images/Phone3ldpi.png',
            type: 'tel',
            placeholder: 'Ex: +972547762084',
            hide: false
          }, {
            /*...mStoryInput.Default.args?.['storyInput'],*/
            id: '4',
            title: 'email',
            state: 'EMAIL',
            icon: './assets/images/AtSign3ldpi.png',
            type: 'email',
            placeholder: 'Ex: abc@example.com',
            hide: false
          }];
          this.verificationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(data.username.toString(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(2)),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(data.email.toString(), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email)
          });
          /*Validators.pattern(new RegExp("[0-9 ]{12}")*/

          this.empList.push("admin");
        }

        _createClass(VerificationForm2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.generateNewCodeFor2SV();
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(code) {
            var _this18 = this;

            this.submitted = true;
            this.isLoading = true;
            this.authService.TSV_ValidateCodeByName(this.data.username, this.data.email, code).subscribe(function (data) {
              console.log(data);

              _this18.tokenStorage.savePinCodeToken(data.pinCodeToken);

              _this18.status.isVerSuccess = true;
              _this18.status.isVerFailed = false;
              _this18.errorFieldSubmitted = {};
              _this18.apiResponse.error = false;
              _this18.apiResponse.message = 'Successful verification';

              _this18.dialogRef.close('User Validate');
            }, function (error) {
              var errorResponse = error.error;
              _this18.apiResponse.error = true;
              _this18.apiResponse.message = 'Verification error';
              _this18.status.verErrorMessage = error.error.message;
              _this18.status.isVerFailed = true;
              _this18.errorFieldSubmitted = errorResponse.message;
              console.log(errorResponse);
              _this18.isLoading = false;
            }, function () {
              _this18.isLoading = false;
              console.log("Validate Code Request Finished");
            });
          }
        }, {
          key: "generateNewCodeFor2SV",
          value: function generateNewCodeFor2SV() {
            var _this19 = this;

            this.isLoading = true;
            this.authService.TSV_GenerateCodeByName(this.data.username, this.data.email).subscribe(function (data) {
              console.log("Generating Code Succeeded", data);
            }, function (error) {
              _this19.isLoading = false;
              console.log("Error: Can't generate code for user ");
            }, function () {
              _this19.isLoading = false;
              console.log("Sending Generation Code Request Complete");
            });
          }
        }, {
          key: "username",
          get: function get() {
            return this.verificationForm.get('username');
          }
        }, {
          key: "email",
          get: function get() {
            return this.verificationForm.get('email');
          }
        }, {
          key: "password",
          get: function get() {
            return this.verificationForm.get('password');
          }
        }, {
          key: "phone",
          get: function get() {
            return this.verificationForm.get('phone');
          }
        }]);

        return VerificationForm2Component;
      }();

      VerificationForm2Component.ɵfac = function VerificationForm2Component_Factory(t) {
        return new (t || VerificationForm2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MAT_DIALOG_DATA));
      };

      VerificationForm2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: VerificationForm2Component,
        selectors: [["verification-form2"]],
        viewQuery: function VerificationForm2Component_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
          }
        },
        decls: 1,
        vars: 2,
        consts: [[3, "status", "isLoading", "sendVerificationReq", "generateNewCodeFor2SV", "clickXButton"]],
        template: function VerificationForm2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "storybook-verification-form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("sendVerificationReq", function VerificationForm2Component_Template_storybook_verification_form_sendVerificationReq_0_listener($event) {
              return ctx.onSubmit($event);
            })("generateNewCodeFor2SV", function VerificationForm2Component_Template_storybook_verification_form_generateNewCodeFor2SV_0_listener() {
              return ctx.generateNewCodeFor2SV();
            })("clickXButton", function VerificationForm2Component_Template_storybook_verification_form_clickXButton_0_listener() {
              return ctx.dialogRef.close({
                message: "xbutton"
              });
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("status", ctx.status)("isLoading", ctx.isLoading);
          }
        },
        directives: [_stories_forms_verification_form_verification_form_component__WEBPACK_IMPORTED_MODULE_2__["default"]],
        styles: [".fa[_ngcontent-%COMP%], .fab[_ngcontent-%COMP%], .fad[_ngcontent-%COMP%], .fal[_ngcontent-%COMP%], .far[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%] {\r\n  -moz-osx-font-smoothing:grayscale;\r\n  -webkit-font-smoothing:antialiased;\r\n  display:inline-block;\r\n  font-style:normal;\r\n  font-feature-settings:normal;\r\n  font-variant:normal;\r\n  text-rendering:auto;line-height:1\r\n}\r\n\r\n.fa-lg[_ngcontent-%COMP%] {\r\n  font-size:1.33333em;\r\n  line-height:.75em;\r\n  vertical-align:-.0667em\r\n}\r\n\r\n\r\n\r\n.fa-xs[_ngcontent-%COMP%] {font-size:.75em}\r\n\r\n.fa-sm[_ngcontent-%COMP%] {font-size:.875em}\r\n\r\n.fa-1x[_ngcontent-%COMP%] {font-size:1em}\r\n\r\n.fa-2x[_ngcontent-%COMP%] {font-size:2em}\r\n\r\n.fa-3x[_ngcontent-%COMP%] {font-size:3em}\r\n\r\n.fa-4x[_ngcontent-%COMP%] {font-size:4em}\r\n\r\n.fa-5x[_ngcontent-%COMP%] {font-size:5em}\r\n\r\n.fa-6x[_ngcontent-%COMP%] {font-size:6em}\r\n\r\n.fa-7x[_ngcontent-%COMP%] {font-size:7em}\r\n\r\n.fa-8x[_ngcontent-%COMP%] {font-size:8em}\r\n\r\n.fa-9x[_ngcontent-%COMP%] {font-size:9em}\r\n\r\n.fa-10x[_ngcontent-%COMP%] {font-size:10em}\r\n\r\n.fa-fw[_ngcontent-%COMP%] {text-align:center;width:1.25em}\r\n\r\n.fa-ul[_ngcontent-%COMP%] {list-style-type:none;margin-left:2.5em;padding-left:0}\r\n\r\n.fa-ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {position:relative}\r\n\r\n.fa-li[_ngcontent-%COMP%] {left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}\r\n\r\n.fa-border[_ngcontent-%COMP%] {border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}\r\n\r\n.fa-pull-left[_ngcontent-%COMP%] {float:left}\r\n\r\n.fa-pull-right[_ngcontent-%COMP%] {float:right}\r\n\r\n.fa.fa-pull-left[_ngcontent-%COMP%], .fab.fa-pull-left[_ngcontent-%COMP%], .fal.fa-pull-left[_ngcontent-%COMP%], .far.fa-pull-left[_ngcontent-%COMP%], .fas.fa-pull-left[_ngcontent-%COMP%] {\r\n  margin-right:.3em\r\n}\r\n\r\n.input-with-pre-icon[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {left:36px;right:auto;right:initial}\r\n\r\n.fa.fa-pull-right[_ngcontent-%COMP%], .fab.fa-pull-right[_ngcontent-%COMP%], .fal.fa-pull-right[_ngcontent-%COMP%], .far.fa-pull-right[_ngcontent-%COMP%], .fas.fa-pull-right[_ngcontent-%COMP%] {\r\n  margin-left:.3em\r\n}\r\n\r\n.fa-spin[_ngcontent-%COMP%] {\r\n  animation:fa-spin 2s linear infinite\r\n}\r\n\r\n.fa[_ngcontent-%COMP%], .far[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%] {\r\n  font-family: \"Font Awesome 5 Free\", serif\r\n}\r\n\r\n.fa[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%] {\r\n  font-weight:900\r\n}\r\n\r\n.v-btn__content[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  color: inherit;\r\n  display: flex;\r\n  flex: 1 0 auto;\r\n  justify-content: inherit;\r\n  line-height: normal;\r\n  position: relative;\r\n  transition: inherit;\r\n}\r\n\r\n.form-outline[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus    ~ .form-label[_ngcontent-%COMP%], .form-outline[_ngcontent-%COMP%]   .form-control.active[_ngcontent-%COMP%]    ~ .form-label[_ngcontent-%COMP%] {\r\n  transform: translateY(-1.5rem) translateY(0.1rem) scale(0.8);\r\n}\r\n\r\n\r\n\r\n.v-btn__content[_ngcontent-%COMP%] {\r\n  letter-spacing: normal;\r\n}\r\n\r\nbody#registerFormDialogContainer[_ngcontent-%COMP%] {\r\n  background: #0000ff00;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmaWNhdGlvbi1mb3JtMi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUdBO0VBQ0UsaUNBQWlDO0VBQ2pDLGtDQUFrQztFQUNsQyxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLDRCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsbUJBQW1CLENBQUM7QUFDdEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCO0FBQ0Y7O0FBQ0EsR0FBRzs7QUFDSCxRQUFRLGVBQWU7O0FBRXZCLFFBQVEsZ0JBQWdCOztBQUV4QixRQUFRLGFBQWE7O0FBRXJCLFFBQVEsYUFBYTs7QUFFckIsUUFBUSxhQUFhOztBQUVyQixRQUFRLGFBQWE7O0FBRXJCLFFBQVEsYUFBYTs7QUFFckIsUUFBUSxhQUFhOztBQUVyQixRQUFRLGFBQWE7O0FBRXJCLFFBQVEsYUFBYTs7QUFFckIsUUFBUSxhQUFhOztBQUVyQixTQUFTLGNBQWM7O0FBRXZCLFFBQVEsaUJBQWlCLENBQUMsWUFBWTs7QUFFdEMsUUFBUSxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjOztBQUU3RCxXQUFXLGlCQUFpQjs7QUFFNUIsUUFBUSxTQUFTLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLG1CQUFtQjs7QUFFbkYsWUFBWSx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0I7O0FBRS9FLGVBQWUsVUFBVTs7QUFFekIsZ0JBQWdCLFdBQVc7O0FBRTNCO0VBQ0U7QUFDRjs7QUFFQSw0QkFBNEIsU0FBUyxDQUFDLFVBQVksQ0FBWixhQUFhOztBQUduRDtFQUNFO0FBQ0Y7O0FBRUE7RUFFRTtBQUNGOztBQUlBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBR0E7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNERBQTREO0FBQzlEOztBQUdBOzs7Ozs7O0NBT0M7O0FBQ0Q7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkIiLCJmaWxlIjoidmVyaWZpY2F0aW9uLWZvcm0yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4uZmEsLmZhYiwuZmFkLC5mYWwsLmZhciwuZmFzIHtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICBmb250LXN0eWxlOm5vcm1hbDtcclxuICBmb250LXZhcmlhbnQ6bm9ybWFsO1xyXG4gIHRleHQtcmVuZGVyaW5nOmF1dG87bGluZS1oZWlnaHQ6MVxyXG59XHJcblxyXG4uZmEtbGcge1xyXG4gIGZvbnQtc2l6ZToxLjMzMzMzZW07XHJcbiAgbGluZS1oZWlnaHQ6Ljc1ZW07XHJcbiAgdmVydGljYWwtYWxpZ246LS4wNjY3ZW1cclxufVxyXG4vKiovXHJcbi5mYS14cyB7Zm9udC1zaXplOi43NWVtfVxyXG5cclxuLmZhLXNtIHtmb250LXNpemU6Ljg3NWVtfVxyXG5cclxuLmZhLTF4IHtmb250LXNpemU6MWVtfVxyXG5cclxuLmZhLTJ4IHtmb250LXNpemU6MmVtfVxyXG5cclxuLmZhLTN4IHtmb250LXNpemU6M2VtfVxyXG5cclxuLmZhLTR4IHtmb250LXNpemU6NGVtfVxyXG5cclxuLmZhLTV4IHtmb250LXNpemU6NWVtfVxyXG5cclxuLmZhLTZ4IHtmb250LXNpemU6NmVtfVxyXG5cclxuLmZhLTd4IHtmb250LXNpemU6N2VtfVxyXG5cclxuLmZhLTh4IHtmb250LXNpemU6OGVtfVxyXG5cclxuLmZhLTl4IHtmb250LXNpemU6OWVtfVxyXG5cclxuLmZhLTEweCB7Zm9udC1zaXplOjEwZW19XHJcblxyXG4uZmEtZncge3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjEuMjVlbX1cclxuXHJcbi5mYS11bCB7bGlzdC1zdHlsZS10eXBlOm5vbmU7bWFyZ2luLWxlZnQ6Mi41ZW07cGFkZGluZy1sZWZ0OjB9XHJcblxyXG4uZmEtdWw+bGkge3Bvc2l0aW9uOnJlbGF0aXZlfVxyXG5cclxuLmZhLWxpIHtsZWZ0Oi0yZW07cG9zaXRpb246YWJzb2x1dGU7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MmVtO2xpbmUtaGVpZ2h0OmluaGVyaXR9XHJcblxyXG4uZmEtYm9yZGVyIHtib3JkZXI6LjA4ZW0gc29saWQgI2VlZTtib3JkZXItcmFkaXVzOi4xZW07cGFkZGluZzouMmVtIC4yNWVtIC4xNWVtfVxyXG5cclxuLmZhLXB1bGwtbGVmdCB7ZmxvYXQ6bGVmdH1cclxuXHJcbi5mYS1wdWxsLXJpZ2h0IHtmbG9hdDpyaWdodH1cclxuXHJcbi5mYS5mYS1wdWxsLWxlZnQsLmZhYi5mYS1wdWxsLWxlZnQsLmZhbC5mYS1wdWxsLWxlZnQsLmZhci5mYS1wdWxsLWxlZnQsLmZhcy5mYS1wdWxsLWxlZnQge1xyXG4gIG1hcmdpbi1yaWdodDouM2VtXHJcbn1cclxuXHJcbi5pbnB1dC13aXRoLXByZS1pY29uIGxhYmVsIHtsZWZ0OjM2cHg7cmlnaHQ6aW5pdGlhbH1cclxuXHJcblxyXG4uZmEuZmEtcHVsbC1yaWdodCwuZmFiLmZhLXB1bGwtcmlnaHQsLmZhbC5mYS1wdWxsLXJpZ2h0LC5mYXIuZmEtcHVsbC1yaWdodCwuZmFzLmZhLXB1bGwtcmlnaHQge1xyXG4gIG1hcmdpbi1sZWZ0Oi4zZW1cclxufVxyXG5cclxuLmZhLXNwaW4ge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOmZhLXNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjpmYS1zcGluIDJzIGxpbmVhciBpbmZpbml0ZVxyXG59XHJcblxyXG5cclxuXHJcbi5mYSwuZmFyLC5mYXMge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIiwgc2VyaWZcclxufVxyXG5cclxuLmZhLC5mYXMge1xyXG4gIGZvbnQtd2VpZ2h0OjkwMFxyXG59XHJcblxyXG5cclxuLnYtYnRuX19jb250ZW50IHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMSAwIGF1dG87XHJcbiAganVzdGlmeS1jb250ZW50OiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5mb3JtLW91dGxpbmUgLmZvcm0tY29udHJvbDpmb2N1cyB+IC5mb3JtLWxhYmVsLCAuZm9ybS1vdXRsaW5lIC5mb3JtLWNvbnRyb2wuYWN0aXZlIH4gLmZvcm0tbGFiZWwge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS41cmVtKSB0cmFuc2xhdGVZKDAuMXJlbSkgc2NhbGUoMC44KTtcclxufVxyXG5cclxuXHJcbi8qXHJcbi5mb3JtLW91dGxpbmUgLmZvcm0tY29udHJvbCB+IC5mb3JtLW5vdGNoIGRpdiB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMzljMGVkO1xyXG59XHJcblxyXG4qL1xyXG4udi1idG5fX2NvbnRlbnQge1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbn1cclxuXHJcbmJvZHkjcmVnaXN0ZXJGb3JtRGlhbG9nQ29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMDAwMGZmMDA7XHJcbn1cclxuXHJcblxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    39570:
    /*!*************************************************!*\
      !*** ./src/app/login2/login2-routing.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Login2RoutingModule": function Login2RoutingModule() {
          return (
            /* binding */
            _Login2RoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _login_main_register_form2_register_form2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login-main/register-form2/register-form2.component */
      71572);
      /* harmony import */


      var _login_main_login_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login-main/login-main.component */
      69157);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: 'login-main',
        component: _login_main_login_main_component__WEBPACK_IMPORTED_MODULE_1__.LoginMainComponent
      },
      /*{ path: 'login2', component: Login2Component },*/
      //{ path: 'storybook-button-fortest', component: AvatarComponent },
      {
        path: 'register-form2',
        component: _login_main_register_form2_register_form2_component__WEBPACK_IMPORTED_MODULE_0__["default"]
      },
      /*{ path: 'register-form2', component: MyAccountForm2Component },*/
      {
        path: 'profile2',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ../app.module */
          36747)).then(function (m) {
            return m.AppModule;
          });
        }
      }, {
        path: '',
        redirectTo: 'login-main',
        pathMatch: 'full'
      }, {
        path: '**',
        redirectTo: 'login-main'
      }];

      var _Login2RoutingModule = /*#__PURE__*/_createClass(function _Login2RoutingModule() {
        _classCallCheck(this, _Login2RoutingModule);
      });

      _Login2RoutingModule.ɵfac = function Login2RoutingModule_Factory(t) {
        return new (t || _Login2RoutingModule)();
      };

      _Login2RoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _Login2RoutingModule
      });
      _Login2RoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_Login2RoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    54634:
    /*!********************************************!*\
      !*** ./src/app/login2/login2.component.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Login2Component": function Login2Component() {
          return (
            /* binding */
            _Login2Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/_services/token-storage.service */
      93590);
      /* harmony import */


      var src_app_shared_event_bus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/_shared/event-bus.service */
      98097);

      var _Login2Component = /*#__PURE__*/function () {
        function _Login2Component(tokenStorageService, eventBusService) {
          _classCallCheck(this, _Login2Component);

          this.tokenStorageService = tokenStorageService;
          this.eventBusService = eventBusService;
          this.roles = [];
          this.isLoggedIn = false;
          this.showAdminBoard = false;
          this.showModeratorBoard = false;
        }

        _createClass(_Login2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            this.isLoggedIn = !!this.tokenStorageService.getToken();

            if (this.isLoggedIn) {
              var user = this.tokenStorageService.getUser();
              this.roles = user.roles;
              this.showAdminBoard = this.roles.includes('Admin') || this.roles.includes('SupervisorAdmin');
              this.showModeratorBoard = this.roles.includes('SupervisorMonitor');
              this.username = user.username;
            }

            this.eventBusSub = this.eventBusService.on('logout', function () {
              _this20.logout();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.eventBusSub) this.eventBusSub.unsubscribe();
          }
        }, {
          key: "logout",
          value: function logout() {
            this.tokenStorageService.signOut();
            this.isLoggedIn = false;
            this.roles = [];
            this.showAdminBoard = false;
            this.showModeratorBoard = false; //window.location.reload();
          }
        }]);

        return _Login2Component;
      }();

      _Login2Component.ɵfac = function Login2Component_Factory(t) {
        return new (t || _Login2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_event_bus_service__WEBPACK_IMPORTED_MODULE_1__.EventBusService));
      };

      _Login2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _Login2Component,
        selectors: [["login2"]],
        decls: 2,
        vars: 0,
        template: function Login2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "login2 works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    81490:
    /*!*****************************************!*\
      !*** ./src/app/login2/login2.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Login2Module": function Login2Module() {
          return (
            /* binding */
            _Login2Module
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _login2_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login2-routing.module */
      39570);
      /* harmony import */


      var _login_main_register_form2_register_form2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login-main/register-form2/register-form2.component */
      71572);
      /* harmony import */


      var _login_main_login_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login-main/login-main.component */
      69157);
      /* harmony import */


      var src_stories_task_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/stories/task/task.component */
      48262);
      /* harmony import */


      var _stories_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../stories/task-list/task-list.component */
      25557);
      /* harmony import */


      var _login2_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login2.component */
      54634);
      /* harmony import */


      var _storybook_storybook_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../storybook/storybook.module */
      18322);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _login_main_replace_pass_form2_replace_pass_form2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./login-main/replace-pass-form2/replace-pass-form2.component */
      25504);
      /* harmony import */


      var _login_main_verification_form2_verification_form2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./login-main/verification-form2/verification-form2.component */
      50376);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _Login2Module = /*#__PURE__*/_createClass(function _Login2Module() {
        _classCallCheck(this, _Login2Module);
      });

      _Login2Module.ɵfac = function Login2Module_Factory(t) {
        return new (t || _Login2Module)();
      };

      _Login2Module.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: _Login2Module,
        bootstrap: [_login2_component__WEBPACK_IMPORTED_MODULE_5__.Login2Component]
      });
      _Login2Module.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        imports: [[_login2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Login2RoutingModule, _storybook_storybook_module__WEBPACK_IMPORTED_MODULE_6__.StorybookModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](_Login2Module, {
          declarations: [_login_main_replace_pass_form2_replace_pass_form2_component__WEBPACK_IMPORTED_MODULE_7__.ReplacePassForm2Component, _login_main_register_form2_register_form2_component__WEBPACK_IMPORTED_MODULE_1__["default"], _login_main_verification_form2_verification_form2_component__WEBPACK_IMPORTED_MODULE_8__["default"], src_stories_task_task_component__WEBPACK_IMPORTED_MODULE_3__.TaskComponent, _stories_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_4__.TaskListComponent, _login2_component__WEBPACK_IMPORTED_MODULE_5__.Login2Component, _login_main_login_main_component__WEBPACK_IMPORTED_MODULE_2__.LoginMainComponent],
          imports: [_login2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Login2RoutingModule, _storybook_storybook_module__WEBPACK_IMPORTED_MODULE_6__.StorybookModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule],
          exports: [_login_main_replace_pass_form2_replace_pass_form2_component__WEBPACK_IMPORTED_MODULE_7__.ReplacePassForm2Component]
        });
      })();
      /***/

    },

    /***/
    95144:
    /*!****************************************************************!*\
      !*** ./src/app/my-account-form2/my-account-form2.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            MyAccountForm2Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _login2_login_main_replace_pass_form2_replace_pass_form2_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../login2/login-main/replace-pass-form2/replace-pass-form2.component */
      25504);
      /* harmony import */


      var _shared_event_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_shared/event.class */
      79043);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      40205);
      /* harmony import */


      var _shared_event_bus_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_shared/event-bus.service */
      98097);
      /* harmony import */


      var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_services/token-storage.service */
      93590);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/_services/auth.service */
      88368);
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_services/user.service */
      55089);
      /* harmony import */


      var _stories_forms_my_account_form_my_account_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../stories/forms/my-account-form/my-account-form.component */
      36483);

      var _c0 = ["form"];
      var _c1 = ["username"];

      var MyAccountForm2Component = /*#__PURE__*/function () {
        function MyAccountForm2Component(eventBusService, token, authService, userService, renderer, dialogRef, data) {
          _classCallCheck(this, MyAccountForm2Component);

          this.eventBusService = eventBusService;
          this.token = token;
          this.authService = authService;
          this.userService = userService;
          this.renderer = renderer;
          this.dialogRef = dialogRef;
          this.data = data;
          this.isRegSuccess = false;
          this.isRegFailed = false;
          this.submitted = false;
          this.empList = [];
          this.apiResponse = {
            message: '',
            error: false
          };
          this.errorFieldSubmitted = {};
          this.closeResult = '';
          this.validateMail = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
          this.storyInputsInOrder = [{
            /*...mStoryInput.Default.args?.['storyInput'],*/
            id: '1',
            title: this.data.currentUser.username,
            state: 'USER NAME',
            icon: '',
            type: 'enable-profile-picture',
            placeholder: '',
            hide: false
          }, {
            /*...mStoryInput.Default.args?.['storyInput'],*/
            id: '2',
            title: 'phone',
            state: 'PHONE NUMBER FOR AUTHENTICATION',
            icon: './assets/images/Phone3ldpi.png',
            type: 'tel',
            placeholder: 'Ex: +972547762084',
            hide: false
          }, {
            /*...mStoryInput.Default.args?.['storyInput'],*/
            id: '3',
            title: 'email',
            state: 'EMAIL',
            icon: './assets/images/AtSign3ldpi.png',
            type: 'email',
            placeholder: 'Ex: abc@example.com',
            hide: false
          }, {
            /*...mStoryInput.Default.args?.['storyInput'],*/
            id: '4',
            title: 'password',
            state: 'PASSWORD',
            icon: './assets/images/LockIcon2ldpi.png',
            type: 'password',
            placeholder: 'your_password',
            hide: false
          }];
          this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl(''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('email', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('0544444444', _login2_login_main_replace_pass_form2_replace_pass_form2_component__WEBPACK_IMPORTED_MODULE_0__.PasswordValidators.patternValidator(new RegExp("(?=.*[0-9 ]{8})"), {
              requiresPhoneChars: true
            }))
          });
          /*Validators.pattern(new RegExp("[0-9 ]{12}")*/

          this.empList.push("admin");
        }

        _createClass(MyAccountForm2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAccountDetails();
            /*this.userService.getAccountDetails().subscribe(
              data => { this.accountDetails = data; },
              err => { this.accountDetails = JSON.parse(err.error).message; }
            );*/
          }
        }, {
          key: "getAccountDetails",
          value: function getAccountDetails() {
            var _this21 = this;

            var token = this.token.getToken();
            if (token) this.authService.getAccountDetails(token).subscribe(function (accountDetails) {
              _this21.accountDetails = accountDetails;

              _this21.setUsername(accountDetails.username);

              _this21.setEmail(accountDetails.email);

              _this21.setPhone(accountDetails.phone);

              console.log('Account Details is received from server.');
            }, function (err) {
              console.log('Can not get user account details');
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_9__.throwError)(err);
            });
          }
        }, {
          key: "doLogout",
          value: function doLogout() {
            console.log("logging out");
            this.eventBusService.emit(new _shared_event_class__WEBPACK_IMPORTED_MODULE_1__.EventData('logout', null));
          }
        }, {
          key: "openChangePassword",
          value: function openChangePassword() {
            this.eventBusService.emit(new _shared_event_class__WEBPACK_IMPORTED_MODULE_1__.EventData('openChangePassword', null));
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this22 = this;

            if (this.isRegSuccess) {
              this.dialogRef.close('Registration Complete');
            } else {
              this.submitted = true;

              var _this$registerForm$ge2 = this.registerForm.getRawValue(),
                  username = _this$registerForm$ge2.username,
                  password = _this$registerForm$ge2.password,
                  email = _this$registerForm$ge2.email,
                  phone = _this$registerForm$ge2.phone;

              this.authService.registerForm(username, email, password, phone).subscribe(function (data) {
                console.log(data);
                _this22.isRegSuccess = true;
                _this22.isRegFailed = false;
                _this22.errorFieldSubmitted = {};
                _this22.apiResponse.error = false;
                _this22.apiResponse.message = 'Successful registration';
              }, function (error) {
                var errorResponse = JSON.parse(error.error);
                _this22.apiResponse.error = true;
                _this22.apiResponse.message = 'Registration error';
                _this22.regErrorMessage = errorResponse;
                _this22.isRegFailed = true;

                if (errorResponse.error && errorResponse.message === 'VALIDATION_FAILED') {
                  _this22.errorFieldSubmitted = errorResponse.data;
                }
              }, function () {
                console.log("Registration Complete");
              });
            }
          }
        }, {
          key: "username",
          get: function get() {
            return this.registerForm.get('username');
          }
        }, {
          key: "setUsername",
          value: function setUsername(name) {
            var _a;

            (_a = this.registerForm.get('username')) === null || _a === void 0 ? void 0 : _a.setValue(name);
          }
        }, {
          key: "email",
          get: function get() {
            return this.registerForm.get('email');
          }
        }, {
          key: "setEmail",
          value: function setEmail(email) {
            var _a;

            return (_a = this.registerForm.get('email')) === null || _a === void 0 ? void 0 : _a.setValue(email);
          }
        }, {
          key: "password",
          get: function get() {
            return this.registerForm.get('password');
          }
        }, {
          key: "phone",
          get: function get() {
            return this.registerForm.get('phone');
          }
        }, {
          key: "setPhone",
          value: function setPhone(phone) {
            var _a;

            return (_a = this.registerForm.get('phone')) === null || _a === void 0 ? void 0 : _a.setValue(phone);
          }
        }]);

        return MyAccountForm2Component;
      }();

      MyAccountForm2Component.ɵfac = function MyAccountForm2Component_Factory(t) {
        return new (t || MyAccountForm2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_event_bus_service__WEBPACK_IMPORTED_MODULE_2__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MAT_DIALOG_DATA));
      };

      MyAccountForm2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: MyAccountForm2Component,
        selectors: [["my-account-form2"]],
        viewQuery: function MyAccountForm2Component_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.form = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.userField = _t.first);
          }
        },
        outputs: {
          validateMail: "validateMail"
        },
        decls: 2,
        vars: 5,
        consts: [[3, "isRegSuccess", "isRegFailed", "regErrorMessage", "storyInputs", "mForm", "sendRegReq", "clickXButton", "onLogout", "changePassword"], ["form", ""]],
        template: function MyAccountForm2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "storybook-my-account-form", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sendRegReq", function MyAccountForm2Component_Template_storybook_my_account_form_sendRegReq_0_listener() {
              return ctx.onSubmit();
            })("clickXButton", function MyAccountForm2Component_Template_storybook_my_account_form_clickXButton_0_listener() {
              return ctx.dialogRef.close("xbutton");
            })("onLogout", function MyAccountForm2Component_Template_storybook_my_account_form_onLogout_0_listener() {
              return ctx.doLogout();
            })("changePassword", function MyAccountForm2Component_Template_storybook_my_account_form_changePassword_0_listener() {
              return ctx.openChangePassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isRegSuccess", ctx.isRegSuccess)("isRegFailed", ctx.isRegFailed)("regErrorMessage", ctx.regErrorMessage)("storyInputs", ctx.storyInputsInOrder)("mForm", ctx.registerForm);
          }
        },
        directives: [_stories_forms_my_account_form_my_account_form_component__WEBPACK_IMPORTED_MODULE_6__["default"]],
        styles: [".fa[_ngcontent-%COMP%], .fab[_ngcontent-%COMP%], .fad[_ngcontent-%COMP%], .fal[_ngcontent-%COMP%], .far[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%] {\r\n  -moz-osx-font-smoothing:grayscale;\r\n  -webkit-font-smoothing:antialiased;\r\n  display:inline-block;\r\n  font-style:normal;\r\n  font-feature-settings:normal;\r\n  font-variant:normal;\r\n  text-rendering:auto;line-height:1\r\n}\r\n\r\n.fa-lg[_ngcontent-%COMP%] {\r\n  font-size:1.33333em;\r\n  line-height:.75em;\r\n  vertical-align:-.0667em\r\n}\r\n\r\n\r\n\r\n.fa-xs[_ngcontent-%COMP%] {font-size:.75em}\r\n\r\n.fa-sm[_ngcontent-%COMP%] {font-size:.875em}\r\n\r\n.fa-1x[_ngcontent-%COMP%] {font-size:1em}\r\n\r\n.fa-2x[_ngcontent-%COMP%] {font-size:2em}\r\n\r\n.fa-3x[_ngcontent-%COMP%] {font-size:3em}\r\n\r\n.fa-4x[_ngcontent-%COMP%] {font-size:4em}\r\n\r\n.fa-5x[_ngcontent-%COMP%] {font-size:5em}\r\n\r\n.fa-6x[_ngcontent-%COMP%] {font-size:6em}\r\n\r\n.fa-7x[_ngcontent-%COMP%] {font-size:7em}\r\n\r\n.fa-8x[_ngcontent-%COMP%] {font-size:8em}\r\n\r\n.fa-9x[_ngcontent-%COMP%] {font-size:9em}\r\n\r\n.fa-10x[_ngcontent-%COMP%] {font-size:10em}\r\n\r\n.fa-fw[_ngcontent-%COMP%] {text-align:center;width:1.25em}\r\n\r\n.fa-ul[_ngcontent-%COMP%] {list-style-type:none;margin-left:2.5em;padding-left:0}\r\n\r\n.fa-ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {position:relative}\r\n\r\n.fa-li[_ngcontent-%COMP%] {left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}\r\n\r\n.fa-border[_ngcontent-%COMP%] {border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}\r\n\r\n.fa-pull-left[_ngcontent-%COMP%] {float:left}\r\n\r\n.fa-pull-right[_ngcontent-%COMP%] {float:right}\r\n\r\n.fa.fa-pull-left[_ngcontent-%COMP%], .fab.fa-pull-left[_ngcontent-%COMP%], .fal.fa-pull-left[_ngcontent-%COMP%], .far.fa-pull-left[_ngcontent-%COMP%], .fas.fa-pull-left[_ngcontent-%COMP%] {\r\n  margin-right:.3em\r\n}\r\n\r\n.input-with-pre-icon[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {left:36px;right:auto;right:initial}\r\n\r\n.fa.fa-pull-right[_ngcontent-%COMP%], .fab.fa-pull-right[_ngcontent-%COMP%], .fal.fa-pull-right[_ngcontent-%COMP%], .far.fa-pull-right[_ngcontent-%COMP%], .fas.fa-pull-right[_ngcontent-%COMP%] {\r\n  margin-left:.3em\r\n}\r\n\r\n.fa-spin[_ngcontent-%COMP%] {\r\n  animation:fa-spin 2s linear infinite\r\n}\r\n\r\n.fa[_ngcontent-%COMP%], .far[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%] {\r\n  font-family: \"Font Awesome 5 Free\", serif\r\n}\r\n\r\n.fa[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%] {\r\n  font-weight:900\r\n}\r\n\r\n.v-btn__content[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  color: inherit;\r\n  display: flex;\r\n  flex: 1 0 auto;\r\n  justify-content: inherit;\r\n  line-height: normal;\r\n  position: relative;\r\n  transition: inherit;\r\n}\r\n\r\n.form-outline[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus    ~ .form-label[_ngcontent-%COMP%], .form-outline[_ngcontent-%COMP%]   .form-control.active[_ngcontent-%COMP%]    ~ .form-label[_ngcontent-%COMP%] {\r\n  transform: translateY(-1.5rem) translateY(0.1rem) scale(0.8);\r\n}\r\n\r\n\r\n\r\n.v-btn__content[_ngcontent-%COMP%] {\r\n  letter-spacing: normal;\r\n}\r\n\r\nbody#registerFormDialogContainer[_ngcontent-%COMP%] {\r\n  background: #0000ff00;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWFjY291bnQtZm9ybTIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtFQUNFLGlDQUFpQztFQUNqQyxrQ0FBa0M7RUFDbEMsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQiw0QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLG1CQUFtQixDQUFDO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQjtBQUNGOztBQUNBLEdBQUc7O0FBQ0gsUUFBUSxlQUFlOztBQUV2QixRQUFRLGdCQUFnQjs7QUFFeEIsUUFBUSxhQUFhOztBQUVyQixRQUFRLGFBQWE7O0FBRXJCLFFBQVEsYUFBYTs7QUFFckIsUUFBUSxhQUFhOztBQUVyQixRQUFRLGFBQWE7O0FBRXJCLFFBQVEsYUFBYTs7QUFFckIsUUFBUSxhQUFhOztBQUVyQixRQUFRLGFBQWE7O0FBRXJCLFFBQVEsYUFBYTs7QUFFckIsU0FBUyxjQUFjOztBQUV2QixRQUFRLGlCQUFpQixDQUFDLFlBQVk7O0FBRXRDLFFBQVEsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsY0FBYzs7QUFFN0QsV0FBVyxpQkFBaUI7O0FBRTVCLFFBQVEsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxtQkFBbUI7O0FBRW5GLFlBQVksdUJBQXVCLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCOztBQUUvRSxlQUFlLFVBQVU7O0FBRXpCLGdCQUFnQixXQUFXOztBQUUzQjtFQUNFO0FBQ0Y7O0FBRUEsNEJBQTRCLFNBQVMsQ0FBQyxVQUFZLENBQVosYUFBYTs7QUFHbkQ7RUFDRTtBQUNGOztBQUVBO0VBRUU7QUFDRjs7QUFJQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUdBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDREQUE0RDtBQUM5RDs7QUFHQTs7Ozs7OztDQU9DOztBQUNEO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6Im15LWFjY291bnQtZm9ybTIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuXHJcbi5mYSwuZmFiLC5mYWQsLmZhbCwuZmFyLC5mYXMge1xyXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOmdyYXlzY2FsZTtcclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOmFudGlhbGlhc2VkO1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc3R5bGU6bm9ybWFsO1xyXG4gIGZvbnQtdmFyaWFudDpub3JtYWw7XHJcbiAgdGV4dC1yZW5kZXJpbmc6YXV0bztsaW5lLWhlaWdodDoxXHJcbn1cclxuXHJcbi5mYS1sZyB7XHJcbiAgZm9udC1zaXplOjEuMzMzMzNlbTtcclxuICBsaW5lLWhlaWdodDouNzVlbTtcclxuICB2ZXJ0aWNhbC1hbGlnbjotLjA2NjdlbVxyXG59XHJcbi8qKi9cclxuLmZhLXhzIHtmb250LXNpemU6Ljc1ZW19XHJcblxyXG4uZmEtc20ge2ZvbnQtc2l6ZTouODc1ZW19XHJcblxyXG4uZmEtMXgge2ZvbnQtc2l6ZToxZW19XHJcblxyXG4uZmEtMngge2ZvbnQtc2l6ZToyZW19XHJcblxyXG4uZmEtM3gge2ZvbnQtc2l6ZTozZW19XHJcblxyXG4uZmEtNHgge2ZvbnQtc2l6ZTo0ZW19XHJcblxyXG4uZmEtNXgge2ZvbnQtc2l6ZTo1ZW19XHJcblxyXG4uZmEtNngge2ZvbnQtc2l6ZTo2ZW19XHJcblxyXG4uZmEtN3gge2ZvbnQtc2l6ZTo3ZW19XHJcblxyXG4uZmEtOHgge2ZvbnQtc2l6ZTo4ZW19XHJcblxyXG4uZmEtOXgge2ZvbnQtc2l6ZTo5ZW19XHJcblxyXG4uZmEtMTB4IHtmb250LXNpemU6MTBlbX1cclxuXHJcbi5mYS1mdyB7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MS4yNWVtfVxyXG5cclxuLmZhLXVsIHtsaXN0LXN0eWxlLXR5cGU6bm9uZTttYXJnaW4tbGVmdDoyLjVlbTtwYWRkaW5nLWxlZnQ6MH1cclxuXHJcbi5mYS11bD5saSB7cG9zaXRpb246cmVsYXRpdmV9XHJcblxyXG4uZmEtbGkge2xlZnQ6LTJlbTtwb3NpdGlvbjphYnNvbHV0ZTt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoyZW07bGluZS1oZWlnaHQ6aW5oZXJpdH1cclxuXHJcbi5mYS1ib3JkZXIge2JvcmRlcjouMDhlbSBzb2xpZCAjZWVlO2JvcmRlci1yYWRpdXM6LjFlbTtwYWRkaW5nOi4yZW0gLjI1ZW0gLjE1ZW19XHJcblxyXG4uZmEtcHVsbC1sZWZ0IHtmbG9hdDpsZWZ0fVxyXG5cclxuLmZhLXB1bGwtcmlnaHQge2Zsb2F0OnJpZ2h0fVxyXG5cclxuLmZhLmZhLXB1bGwtbGVmdCwuZmFiLmZhLXB1bGwtbGVmdCwuZmFsLmZhLXB1bGwtbGVmdCwuZmFyLmZhLXB1bGwtbGVmdCwuZmFzLmZhLXB1bGwtbGVmdCB7XHJcbiAgbWFyZ2luLXJpZ2h0Oi4zZW1cclxufVxyXG5cclxuLmlucHV0LXdpdGgtcHJlLWljb24gbGFiZWwge2xlZnQ6MzZweDtyaWdodDppbml0aWFsfVxyXG5cclxuXHJcbi5mYS5mYS1wdWxsLXJpZ2h0LC5mYWIuZmEtcHVsbC1yaWdodCwuZmFsLmZhLXB1bGwtcmlnaHQsLmZhci5mYS1wdWxsLXJpZ2h0LC5mYXMuZmEtcHVsbC1yaWdodCB7XHJcbiAgbWFyZ2luLWxlZnQ6LjNlbVxyXG59XHJcblxyXG4uZmEtc3BpbiB7XHJcbiAgLXdlYmtpdC1hbmltYXRpb246ZmEtc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgYW5pbWF0aW9uOmZhLXNwaW4gMnMgbGluZWFyIGluZmluaXRlXHJcbn1cclxuXHJcblxyXG5cclxuLmZhLC5mYXIsLmZhcyB7XHJcbiAgZm9udC1mYW1pbHk6IFwiRm9udCBBd2Vzb21lIDUgRnJlZVwiLCBzZXJpZlxyXG59XHJcblxyXG4uZmEsLmZhcyB7XHJcbiAgZm9udC13ZWlnaHQ6OTAwXHJcbn1cclxuXHJcblxyXG4udi1idG5fX2NvbnRlbnQge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiAxIDAgYXV0bztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGluaGVyaXQ7XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNpdGlvbjogaW5oZXJpdDtcclxufVxyXG5cclxuLmZvcm0tb3V0bGluZSAuZm9ybS1jb250cm9sOmZvY3VzIH4gLmZvcm0tbGFiZWwsIC5mb3JtLW91dGxpbmUgLmZvcm0tY29udHJvbC5hY3RpdmUgfiAuZm9ybS1sYWJlbCB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjVyZW0pIHRyYW5zbGF0ZVkoMC4xcmVtKSBzY2FsZSgwLjgpO1xyXG59XHJcblxyXG5cclxuLypcclxuLmZvcm0tb3V0bGluZSAuZm9ybS1jb250cm9sIH4gLmZvcm0tbm90Y2ggZGl2IHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZDtcclxuICBib3JkZXItY29sb3I6ICMzOWMwZWQ7XHJcbn1cclxuXHJcbiovXHJcbi52LWJ0bl9fY29udGVudCB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxufVxyXG5cclxuYm9keSNyZWdpc3RlckZvcm1EaWFsb2dDb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6ICMwMDAwZmYwMDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    81582:
    /*!*************************************************!*\
      !*** ./src/app/pipes/api-error-message.pipe.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApiErrorMessagePipe": function ApiErrorMessagePipe() {
          return (
            /* binding */
            _ApiErrorMessagePipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ApiErrorMessagePipe = /*#__PURE__*/function () {
        function _ApiErrorMessagePipe() {
          _classCallCheck(this, _ApiErrorMessagePipe);
        }

        _createClass(_ApiErrorMessagePipe, [{
          key: "transform",
          value: function transform(message) {
            var dataToArray = message.split(',').map(function (item) {
              return item.trim();
            }); // convert array to string replacing comma with new line

            return dataToArray.join('\n');
          }
        }]);

        return _ApiErrorMessagePipe;
      }();

      _ApiErrorMessagePipe.ɵfac = function ApiErrorMessagePipe_Factory(t) {
        return new (t || _ApiErrorMessagePipe)();
      };

      _ApiErrorMessagePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "apiErrorMessage",
        type: _ApiErrorMessagePipe,
        pure: true
      });
      /***/
    },

    /***/
    74164:
    /*!***************************************************!*\
      !*** ./src/app/pipes/login-error-message.pipe.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginErrorMessagePipe": function LoginErrorMessagePipe() {
          return (
            /* binding */
            _LoginErrorMessagePipe
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _LoginErrorMessagePipe = /*#__PURE__*/function () {
        function _LoginErrorMessagePipe() {
          _classCallCheck(this, _LoginErrorMessagePipe);
        }

        _createClass(_LoginErrorMessagePipe, [{
          key: "transform",
          value: function transform(message) {
            var dataToArray = message.split(',').map(function (item) {
              return item.trim();
            }); // convert array to string replacing comma with new line

            return dataToArray.join('\n');
          }
        }]);

        return _LoginErrorMessagePipe;
      }();

      _LoginErrorMessagePipe.ɵfac = function LoginErrorMessagePipe_Factory(t) {
        return new (t || _LoginErrorMessagePipe)();
      };

      _LoginErrorMessagePipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "loginErrorMessage",
        type: _LoginErrorMessagePipe,
        pure: true
      });
      /***/
    },

    /***/
    6592:
    /*!************************************************!*\
      !*** ./src/app/profile2/profile2.component.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            Profile2Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var C_niv_web_AccGate2_AccGateFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */
      16304);
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../app.config */
      49670);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! rxjs */
      40205);
      /* harmony import */


      var _login2_login_main_replace_pass_form2_replace_pass_form2_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../login2/login-main/replace-pass-form2/replace-pass-form2.component */
      25504);
      /* harmony import */


      var _login2_login_main_verification_form2_verification_form2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../login2/login-main/verification-form2/verification-form2.component */
      50376);
      /* harmony import */


      var _my_account_form2_my_account_form2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../my-account-form2/my-account-form2.component */
      95144);
      /* harmony import */


      var _shared_event_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../_shared/event.class */
      79043);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../_services/auth.service */
      88368);
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../_services/user.service */
      55089);
      /* harmony import */


      var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../_services/token-storage.service */
      93590);
      /* harmony import */


      var _shared_event_bus_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../_shared/event-bus.service */
      98097);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _stories_pages_background1_background1Component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../stories/pages/background1/background1Component */
      23839);
      /* harmony import */


      var _stories_avatars_avatar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../stories/avatars/avatar.component */
      99607);
      /* harmony import */


      var _stories_app_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../stories/app-menu/app-menu.component */
      72751);

      var Profile2Component = /*#__PURE__*/function () {
        function Profile2Component(authService, userService, token, eventBusService, router, myAccountFormDialog, replacePassFormDialog, verificationFormDialog) {
          _classCallCheck(this, Profile2Component);

          this.authService = authService;
          this.userService = userService;
          this.token = token;
          this.eventBusService = eventBusService;
          this.router = router;
          this.myAccountFormDialog = myAccountFormDialog;
          this.replacePassFormDialog = replacePassFormDialog;
          this.verificationFormDialog = verificationFormDialog;
          this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(null);
          this.isLoading = false;
          this.permittedWebAppList = {
            realtime: false,
            scriptDesigner: false,
            agent: false,
            aeonixAdmin: false,
            admin: false
          };
          this.passExp = 0; // By Days

          this.previousAlertPassExp = 0; // By Days

          this.TOKEN_KEY = _app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.endpoints.TOKEN_KEY;
        }

        _createClass(Profile2Component, [{
          key: "isNotify",
          value: function isNotify() {
            return this.passExp < this.previousAlertPassExp;
          }
        }, {
          key: "openMyAccountForm",
          value: function openMyAccountForm() {
            var myAccountFormDialogRef = this.myAccountFormDialog.open(_my_account_form2_my_account_form2_component__WEBPACK_IMPORTED_MODULE_4__["default"], {
              data: {
                currentUser: this.currentUser
              }
            });
            myAccountFormDialogRef.afterClosed().subscribe(function (result) {
              console.log('The register form dialog was closed');
            });
            return myAccountFormDialogRef.afterClosed().toPromise();
          }
        }, {
          key: "openReplacePassForm",
          value: function openReplacePassForm() {
            var _this23 = this;

            var replacePassFormDialogRef = this.replacePassFormDialog.open(_login2_login_main_replace_pass_form2_replace_pass_form2_component__WEBPACK_IMPORTED_MODULE_2__.ReplacePassForm2Component, {
              data: {
                username: this.currentUser.username,
                password: ''
              }
            });
            replacePassFormDialogRef.beforeClosed().subscribe(function (result) {
              console.log('The replace password form dialog before closed');
            }, function (err) {
              console.log(err.error.message);
            });
            replacePassFormDialogRef.afterClosed().subscribe(function (result) {
              console.log('The replace password form dialog after closed');

              if (result.message === 'Replace Password Complete') {
                console.log('Replace Password Complete');

                _this23.setPassExpAlertData();
              }
            });
            return replacePassFormDialogRef.afterClosed().toPromise();
          }
        }, {
          key: "openVerificationForm",
          value: function openVerificationForm() {
            var verificationFormDialogRef = this.verificationFormDialog.open(_login2_login_main_verification_form2_verification_form2_component__WEBPACK_IMPORTED_MODULE_3__["default"], {
              data: {
                username: this.currentUser.username,
                email: this.currentUser.email
              }
            });
            verificationFormDialogRef.afterClosed().subscribe(function (result) {
              console.log('The register form dialog was closed');
            });
            return verificationFormDialogRef.afterClosed().toPromise();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this24 = this;

            this.currentUser = this.token.getUser();
            this.accessToken = this.currentUser.accessToken;
            this.refreshToken = this.currentUser.refreshToken;
            this.setPassExpAlertData();
            this.setPermittedWebAppList();
            this.is2SVRequired();
            this.eventBusSub = this.eventBusService.on('openChangePassword', function () {
              _this24.openReplacePassForm();
            });
            this.eventBusSub = this.eventBusService.on('openVerification', function () {
              _this24.openVerificationForm();
            });
          }
        }, {
          key: "is2SVRequired",
          value: function is2SVRequired() {
            this.eventBusService.emit(new _shared_event_class__WEBPACK_IMPORTED_MODULE_5__.EventData('is2SVRequired', null));
          }
        }, {
          key: "setPassExpAlertData",
          value: function setPassExpAlertData() {
            var _this25 = this;

            var token = this.token.getToken();
            if (token) this.authService.getPassExpireDate(token).subscribe(function (data) {
              _this25.passExp = data.passExp;
              _this25.previousAlertPassExp = data.previousAlertPassExp;
              console.log('Password Expire Date: ' + _this25.passExp);
              console.log('previous Alert To Password Expire Date: ' + _this25.previousAlertPassExp);
            }, function (err) {
              console.log('Password Expire Date: update failed');
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_14__.throwError)(err);
            });
          }
        }, {
          key: "setPermittedWebAppList",
          value: function setPermittedWebAppList() {
            var _this26 = this;

            var token = this.token.getToken();
            if (token) this.authService.getPermittedWebAppList(token).subscribe(function (permittedWebAppList) {
              _this26.permittedWebAppList = permittedWebAppList;
              console.log('Permitted web apps list is received from server.');
            }, function (err) {
              console.log('Can not get server data defining permitted web apps for user');
              return (0, rxjs__WEBPACK_IMPORTED_MODULE_14__.throwError)(err);
            });
          }
        }, {
          key: "openapp",
          value: function openapp() {
            var _this27 = this;

            console.log('window.location.origin.toString():  ' + window.location.origin.toString());
            this.router.navigate([]).then(function (result) {
              _this27.windowObjectReference = window.open(_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.accServer.ACCWEBServers + '/accGCCS/'
              /*window.location.origin.toString()+"/profile"*/
              );
            });
            console.log('window.location.origin.toString():  ' + this.windowObjectReference.window.document.getElementById("profile_title").innerHTML);
            var promise = new Promise(function (resolve, reject) {
              _this27.windowObjectReference.window.document.getElementById("profile_title").innerHTML = "new title";
            });
            console.log('window.location.origin.toString():  ' + this.windowObjectReference.window.document.getElementById("profile_title").innerHTML);
          }
        }, {
          key: "forseRefreshToken",
          value: function forseRefreshToken() {
            var _this28 = this;

            if (!this.isLoading) {
              this.isLoading = true;
              var token = this.token.getRefreshToken();
              if (token) this.authService.refreshToken(token).subscribe(function (data) {
                _this28.isLoading = false;

                _this28.token.saveToken(data.accessToken);

                _this28.token.saveRefreshToken(data.refreshToken);

                _this28.refreshTokenSubject.next(data.accessToken);

                _this28.currentUser = _this28.token.getUser();
                _this28.accessToken = _this28.token.getToken();
                _this28.refreshToken = _this28.token.getRefreshToken();
              }, function (err) {
                _this28.isLoading = false;

                _this28.token.signOut();

                return (0, rxjs__WEBPACK_IMPORTED_MODULE_14__.throwError)(err);
              });
            }
          }
        }, {
          key: "openNewTabForApp",
          value: function openNewTabForApp(appRequest) {
            var _this = this;

            return (0, C_niv_web_AccGate2_AccGateFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              var _appRequest$values, _appRequest$values2, webapp, webappURLPrefix, newAccessToken, newRefreshToken, newCurrentUser, token, timeout, promise, timeoutError;

              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _appRequest$values = appRequest.values(), _appRequest$values2 = _slicedToArray(_appRequest$values, 2), webapp = _appRequest$values2[0], webappURLPrefix = _appRequest$values2[1];
                      newAccessToken = "";
                      newRefreshToken = "";
                      newCurrentUser = "";

                      if (_this.isLoading) {
                        _context2.next = 23;
                        break;
                      }

                      token = _this.token.getRefreshToken();

                      if (!token) {
                        _context2.next = 23;
                        break;
                      }

                      //const timeout = new Promise((res) => setTimeout(() => res("openNewTabForApp - timeout!"), 5000));
                      timeout = function timeout(prom, time, exception) {
                        var timer;
                        return Promise.race([prom, new Promise(function (_r, rej) {
                          return timer = setTimeout(rej, time, exception);
                        })])["finally"](function () {
                          return clearTimeout(timer);
                        });
                      };

                      promise = /*#__PURE__*/function () {
                        var _ref = (0, C_niv_web_AccGate2_AccGateFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
                          return _regeneratorRuntime().wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  new Promise(function (resolve, reject) {
                                    console.log('Spinner Start.');
                                    _this.isLoading = true;
                                    return _this.authService.webapptab(token, webapp).toPromise().then(function (val) {
                                      console.log('Request approved by the server.');
                                      newAccessToken = val.accessToken;
                                      newRefreshToken = val.refreshToken;
                                      newCurrentUser = val;
                                    }).then(function (result) {
                                      _this.router.navigate([]).then(function (result) {
                                        _this.windowObjectReference = window.open(_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.accServer.ACCWEBServers + webappURLPrefix);
                                      }).then(function (result) {
                                        console.log('Plant the secret ingredient.');

                                        _this.windowObjectReference.window.sessionStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.endpoints.TOKEN_KEY, newAccessToken);

                                        _this.windowObjectReference.window.sessionStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.endpoints.REFRESHTOKEN_KEY, newRefreshToken);

                                        _this.windowObjectReference.window.sessionStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.endpoints.USER_KEY, JSON.stringify(newCurrentUser));
                                      }, function (err) {
                                        console.log('failed loading the app webpage.');
                                        reject((0, rxjs__WEBPACK_IMPORTED_MODULE_14__.throwError)(err));
                                      });
                                    }, function (err) {
                                      console.log('cant get a server request appropriate response for opening this webpage ');
                                      reject((0, rxjs__WEBPACK_IMPORTED_MODULE_14__.throwError)(err));
                                    }).then(function () {
                                      console.log('Spinner Stop.');
                                      _this.isLoading = false;
                                      resolve("Success");
                                    }, function (err) {
                                      reject((0, rxjs__WEBPACK_IMPORTED_MODULE_14__.throwError)(err));
                                    });
                                  });

                                case 1:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee);
                        }));

                        return function promise() {
                          return _ref.apply(this, arguments);
                        };
                      }();

                      timeoutError = Symbol();
                      _context2.prev = 10;
                      _context2.next = 13;
                      return timeout(promise(), 5000, timeoutError).then(function () {
                        _this.isLoading = false;
                        console.log('openNewTabForApp: open tab app successfully finished');
                      });

                    case 13:
                      _context2.next = 23;
                      break;

                    case 15:
                      _context2.prev = 15;
                      _context2.t0 = _context2["catch"](10);

                      if (!(_context2.t0 === timeoutError)) {
                        _context2.next = 21;
                        break;
                      }

                      // handle timeout
                      console.log('timeoutError: ' + _context2.t0.error);
                      _context2.next = 23;
                      break;

                    case 21:
                      // other error
                      console.log('Error: ' + _context2.t0.error);
                      throw _context2.t0;

                    case 23:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, null, [[10, 15]]);
            }))();
          }
        }, {
          key: "openNewWinForApp",
          value: function openNewWinForApp(appRequest) {
            var _this2 = this;

            return (0, C_niv_web_AccGate2_AccGateFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var _appRequest$values3, _appRequest$values4, webapp, webappURLPrefix, newAccessToken, newRefreshToken, newCurrentUser, token, timeout, promise, timeoutError;

              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _appRequest$values3 = appRequest.values(), _appRequest$values4 = _slicedToArray(_appRequest$values3, 2), webapp = _appRequest$values4[0], webappURLPrefix = _appRequest$values4[1];
                      newAccessToken = "";
                      newRefreshToken = "";
                      newCurrentUser = "";

                      if (_this2.isLoading) {
                        _context4.next = 26;
                        break;
                      }

                      token = _this2.token.getRefreshToken();

                      if (!token) {
                        _context4.next = 26;
                        break;
                      }

                      timeout = function timeout(prom, time, exception) {
                        var timer;
                        return Promise.race([prom, new Promise(function (_r, rej) {
                          return timer = setTimeout(rej, time, exception);
                        })])["finally"](function () {
                          return clearTimeout(timer);
                        });
                      };

                      promise = /*#__PURE__*/function () {
                        var _ref2 = (0, C_niv_web_AccGate2_AccGateFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
                          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                            while (1) {
                              switch (_context3.prev = _context3.next) {
                                case 0:
                                  new Promise(function (resolve, reject) {
                                    console.log('Spinner Start.');
                                    _this2.isLoading = true;
                                    return _this2.authService.webapptab(token, webapp).toPromise().then(function (val) {
                                      console.log('Request approved by the server.');
                                      newAccessToken = val.accessToken;
                                      newRefreshToken = val.refreshToken;
                                      newCurrentUser = val;
                                    }).then(function (result) {
                                      console.log('Opening new tab/win for the requested page.');

                                      _this2.router.navigate([]).then(function (result) {
                                        console.log('Insert url and loading the page.');
                                        _this2.windowObjectReference = window.open(_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.accServer.ACCWEBServers + webappURLPrefix + 'start.html', 'C-Sharpcorner', 'scrollbars=no');
                                      }).then(function (result) {
                                        console.log('Plant the secret ingredient.');

                                        _this2.windowObjectReference.window.sessionStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.endpoints.TOKEN_KEY, newAccessToken);

                                        _this2.windowObjectReference.window.sessionStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.endpoints.REFRESHTOKEN_KEY, newRefreshToken);

                                        _this2.windowObjectReference.window.sessionStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_1__.AppConfig.endpoints.USER_KEY, JSON.stringify(newCurrentUser));
                                      }, function (err) {
                                        console.log('failed loading the app webpage.');
                                        reject((0, rxjs__WEBPACK_IMPORTED_MODULE_14__.throwError)(err));
                                      });
                                    }, function (err) {
                                      console.log('cant get a server request appropriate response for opening this webpage ');
                                      reject((0, rxjs__WEBPACK_IMPORTED_MODULE_14__.throwError)(err));
                                    }).then(function () {
                                      console.log('Spinner Stop.');
                                      _this2.isLoading = false;
                                      resolve("Success");
                                    }, function (err) {
                                      reject((0, rxjs__WEBPACK_IMPORTED_MODULE_14__.throwError)(err));
                                    });
                                  });

                                case 1:
                                case "end":
                                  return _context3.stop();
                              }
                            }
                          }, _callee3);
                        }));

                        return function promise() {
                          return _ref2.apply(this, arguments);
                        };
                      }();

                      timeoutError = Symbol();
                      _context4.prev = 10;
                      _context4.next = 13;
                      return timeout(promise(), 5000, timeoutError);

                    case 13:
                      _context4.next = 23;
                      break;

                    case 15:
                      _context4.prev = 15;
                      _context4.t0 = _context4["catch"](10);

                      if (!(_context4.t0 === timeoutError)) {
                        _context4.next = 21;
                        break;
                      }

                      // handle timeout
                      console.log('timeoutError: ' + _context4.t0.error);
                      _context4.next = 23;
                      break;

                    case 21:
                      // other error
                      console.log('Error: ' + _context4.t0.error);
                      throw _context4.t0;

                    case 23:
                      _context4.prev = 23;
                      console.log('openNewTabForApp: open tab app successfully finished');
                      return _context4.finish(23);

                    case 26:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, null, [[10, 15, 23, 26]]);
            }))();
          }
        }]);

        return Profile2Component;
      }();

      Profile2Component.ɵfac = function Profile2Component_Factory(t) {
        return new (t || Profile2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_8__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_event_bus_service__WEBPACK_IMPORTED_MODULE_9__.EventBusService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog));
      };

      Profile2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({
        type: Profile2Component,
        selectors: [["profile2"]],
        decls: 7,
        vars: 5,
        consts: [["id", "avatar", 3, "label", "isNotify", "header", "actionButton", "click"], [3, "profileApps", "isLoading", "openNewWinForApp", "openNewTabForApp"]],
        template: function Profile2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "html");

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](1, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](2, "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "storybook-background1");

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](5, "storybook-avatar", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("actionButton", function Profile2Component_Template_storybook_avatar_actionButton_5_listener() {
              return ctx.openReplacePassForm();
            })("click", function Profile2Component_Template_storybook_avatar_click_5_listener() {
              return ctx.openMyAccountForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "storybook-app-menu", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("openNewWinForApp", function Profile2Component_Template_storybook_app_menu_openNewWinForApp_6_listener($event) {
              return ctx.openNewWinForApp($event);
            })("openNewTabForApp", function Profile2Component_Template_storybook_app_menu_openNewTabForApp_6_listener($event) {
              return ctx.openNewTabForApp($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("header", "Your password will expire in " + ctx.passExp + " Days.");

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("label", ctx.currentUser.username)("isNotify", ctx.isNotify());

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("profileApps", ctx.permittedWebAppList)("isLoading", ctx.isLoading);
          }
        },
        directives: [_stories_pages_background1_background1Component__WEBPACK_IMPORTED_MODULE_10__["default"], _stories_avatars_avatar_component__WEBPACK_IMPORTED_MODULE_11__.AvatarComponent, _stories_app_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_12__.AppMenuComponent],
        styles: [".storybook-profile2[_ngcontent-%COMP%] {\n  position: absolute;\n  width: inherit;\n  height: inherit;\n}\n\n.Desktop-1Login-1[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  flex-grow: 0;\n}\n\n#avatar[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 56px;\n  height: calc(57px + 32px + 5px);\n  left: 52px;\n  top: 52px;\n  padding: 0 0 0 0;\n}\n\n\n\n\n\ndiv.relative[_ngcontent-%COMP%] {\n  position: relative;\n  width: inherit;\n  height: inherit;\n}\n\n.Frame-1[_ngcontent-%COMP%] {\n  width: 1920px;\n  height: 1080px;\n  flex-grow: 0;\n}\n\n.fa-pull-left[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.fa-pull-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\nimg.icon-1[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 305.7px;\n  height: 309px;\n  transform: rotate(0deg);\n  background-position: bottom;\n}\n\nimg.icon-2[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 372px;\n  height: 343px;\n  flex-grow: 0;\n}\n\n.storybook-profile2--primary[_ngcontent-%COMP%] {\n  background: linear-gradient(228.37deg, #EFF8FF 22.25%, #B0DCFF 88.18%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQSwrRUFBQTs7QUFFQTs7Ozs7RUFBQTs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFGRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUxGOztBQVFBO0VBQWUsV0FBQTtBQUpmOztBQU1BO0VBQWdCLFlBQUE7QUFGaEI7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQURGOztBQUtBO0VBRUUsc0VBQUE7QUFIRiIsImZpbGUiOiJwcm9maWxlMi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc3Rvcnlib29rLXByb2ZpbGUyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcblxyXG4uRGVza3RvcC0xTG9naW4tMSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGZsZXgtZ3JvdzogMDtcclxufVxyXG5cclxuI2F2YXRhciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA1NnB4O1xyXG4gIGhlaWdodDogY2FsYyg1N3B4ICsgMzJweCArIDVweCk7XHJcbiAgbGVmdDogNTJweDtcclxuICB0b3A6IDUycHg7XHJcbiAgcGFkZGluZzogMCAwIDAgMCA7XHJcbn1cclxuXHJcbi8qYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDIyOC4zN2RlZywgI0VGRjhGRiAyMi4yNSUsICNCMERDRkYgODguMTglKSovXHJcblxyXG4vKi5EZXNrdG9wLTFMb2dpbi0xIHtcclxuICB3aWR0aDogMTkyMHB4O1xyXG4gIGhlaWdodDogMTA4MHB4O1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjI4LjM3ZGVnLCAjRUZGOEZGIDIyLjI1JSwgI0IwRENGRiA4OC4xOCUpO1xyXG59Ki9cclxuXHJcbmRpdi5yZWxhdGl2ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLkZyYW1lLTEge1xyXG4gIHdpZHRoOiAxOTIwcHg7XHJcbiAgaGVpZ2h0OiAxMDgwcHg7XHJcbiAgZmxleC1ncm93OiAwO1xyXG59XHJcblxyXG4uZmEtcHVsbC1sZWZ0IHtmbG9hdDpsZWZ0fVxyXG5cclxuLmZhLXB1bGwtcmlnaHQge2Zsb2F0OnJpZ2h0fVxyXG5cclxuaW1nLmljb24tMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAzMDUuN3B4O1xyXG4gIGhlaWdodDogMzA5cHg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG59XHJcblxyXG5pbWcuaWNvbi0yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAzNzJweDtcclxuICBoZWlnaHQ6IDM0M3B4O1xyXG4gIGZsZXgtZ3JvdzogMDtcclxufVxyXG5cclxuXHJcbi5zdG9yeWJvb2stcHJvZmlsZTItLXByaW1hcnkge1xyXG5cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI4LjM3ZGVnLCAjRUZGOEZGIDIyLjI1JSwgI0IwRENGRiA4OC4xOCUpO1xyXG59XHJcbiJdfQ== */", ""]
      });
      /***/
    },

    /***/
    57074:
    /*!***********************************************************!*\
      !*** ./src/app/storybook/pipes/api-error-message.pipe.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApiErrorMessagePipe": function ApiErrorMessagePipe() {
          return (
            /* binding */
            _ApiErrorMessagePipe2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _api_error_message_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./api-error-message.service */
      39361);

      var _ApiErrorMessagePipe2 = /*#__PURE__*/function () {
        function _ApiErrorMessagePipe2(apiErrorMessageService) {
          _classCallCheck(this, _ApiErrorMessagePipe2);

          this.apiErrorMessageService = apiErrorMessageService;
        }

        _createClass(_ApiErrorMessagePipe2, [{
          key: "transform",
          value: function transform(value, args) {
            this.apiErrorMessageService.language = args.language;
            return this.apiErrorMessageService.apiErrorMessage(value);
          }
        }]);

        return _ApiErrorMessagePipe2;
      }();

      _ApiErrorMessagePipe2.ɵfac = function ApiErrorMessagePipe_Factory(t) {
        return new (t || _ApiErrorMessagePipe2)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_api_error_message_service__WEBPACK_IMPORTED_MODULE_0__.ApiErrorMessageService, 16));
      };

      _ApiErrorMessagePipe2.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefinePipe"]({
        name: "apiErrorMessage",
        type: _ApiErrorMessagePipe2,
        pure: false
      });
      /***/
    },

    /***/
    39361:
    /*!**************************************************************!*\
      !*** ./src/app/storybook/pipes/api-error-message.service.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApiErrorMessageService": function ApiErrorMessageService() {
          return (
            /* binding */
            _ApiErrorMessageService
          );
        },

        /* harmony export */
        "TranslationSet": function TranslationSet() {
          return (
            /* binding */
            _TranslationSet
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ApiErrorMessageService = /*#__PURE__*/function () {
        function _ApiErrorMessageService() {
          _classCallCheck(this, _ApiErrorMessageService);

          this.languages = ['login-main', 'eng'];
          this.language = 'login-main';
          this.dictionary = {
            'login-main': {
              languange: 'login-main',
              values: {
                "example": "Beispiel",
                "must be a well-formed email address": "must be a well-formed email address",
                "Error: A registry process should be made!": "Error: A registry process should be made!",
                "Error: A registry process un valid!": "Incorrect user name",
                "VALIDATION_FAILED": "* A registry process un valid!",
                "Bad credentials": "Incorrect user name or password",
                "Password matches one of %1$s previous passwords.": "Try again with a password you haven’t used before",
                "Passwords do not match!": "* Passwords do not match!",
                "Error: Email is already in use!": "Email is already in use!",
                "Error: Invalidate Pin-Code! User Not Approved": "* The Verification Code does not match"
              }
            },
            eng: {
              languange: 'eng',
              values: {
                "example": "Example"
              }
            }
          };
        }

        _createClass(_ApiErrorMessageService, [{
          key: "apiErrorMessage",
          value: function apiErrorMessage(key) {
            if (this.dictionary[this.language] != null) {
              return this.dictionary[this.language].values[key];
            }
          }
        }]);

        return _ApiErrorMessageService;
      }();

      _ApiErrorMessageService.ɵfac = function ApiErrorMessageService_Factory(t) {
        return new (t || _ApiErrorMessageService)();
      };

      _ApiErrorMessageService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _ApiErrorMessageService,
        factory: _ApiErrorMessageService.ɵfac
      });

      var _TranslationSet = /*#__PURE__*/_createClass(function _TranslationSet() {
        _classCallCheck(this, _TranslationSet);

        this.values = {};
      });
      /***/

    },

    /***/
    18322:
    /*!***********************************************!*\
      !*** ./src/app/storybook/storybook.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StorybookModule": function StorybookModule() {
          return (
            /* binding */
            _StorybookModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _stories_buttons_button_language_button_language_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../stories/buttons/button-language/button-language.component */
      5001);
      /* harmony import */


      var _stories_buttons_button_fortest_button_fortest_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../stories/buttons/button-fortest/button-fortest.component */
      65028);
      /* harmony import */


      var _stories_buttons_button_globe_button_globe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../stories/buttons/button-globe/button-globe.component */
      16867);
      /* harmony import */


      var _stories_pages_background1_background1Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../stories/pages/background1/background1Component */
      23839);
      /* harmony import */


      var _stories_buttons_button_tadiran_button_tadiran_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../stories/buttons/button-tadiran/button-tadiran.component */
      54104);
      /* harmony import */


      var _stories_cards_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../stories/cards/card.component */
      56970);
      /* harmony import */


      var _stories_forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../stories/forms/login-form/login-form.component */
      38312);
      /* harmony import */


      var _stories_forms_registry_form_registry_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../stories/forms/registry-form/registry-form.component */
      8111);
      /* harmony import */


      var _stories_buttons_button_continue_button_continue_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../stories/buttons/button-continue/button-continue.component */
      34591);
      /* harmony import */


      var _stories_buttons_button_ex_button_ex_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../stories/buttons/button-ex/button-ex.component */
      94874);
      /* harmony import */


      var _stories_buttons_button_apps_button_apps_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../stories/buttons/button-apps/button-apps.component */
      83318);
      /* harmony import */


      var _stories_buttons_button_successfully_button_successfully_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../stories/buttons/button-successfully/button-successfully.component */
      80662);
      /* harmony import */


      var _stories_buttons_button_example_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../stories/buttons/button-example/button.component */
      27647);
      /* harmony import */


      var _stories_app_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../stories/app-menu/app-menu.component */
      72751);
      /* harmony import */


      var _stories_inputs_input_story_input_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../stories/inputs/input/story-input.component */
      50899);
      /* harmony import */


      var src_stories_buttons_button_fortest_custom_directive_Highlight_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! src/stories/buttons/button-fortest/custom-directive/Highlight.directive */
      71988);
      /* harmony import */


      var _stories_forms_replace_pass_form_replace_pass_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../../stories/forms/replace-pass-form/replace-pass-form.component */
      29085);
      /* harmony import */


      var _stories_pass_strength_pass_strength_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ../../stories/pass-strength/pass-strength.component */
      479);
      /* harmony import */


      var _pipes_api_error_message_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ./pipes/api-error-message.pipe */
      57074);
      /* harmony import */


      var _stories_avatars_avatar_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../../stories/avatars/avatar.component */
      99607);
      /* harmony import */


      var _stories_directive_dynamic_comp_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../../stories/directive/dynamic-comp.directive */
      50772);
      /* harmony import */


      var _stories_directive_bubble_avatar_popover_directive__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../../stories/directive/bubble-avatar/popover.directive */
      66219);
      /* harmony import */


      var _stories_directive_bubble_avatar_bubble_avatar_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ../../stories/directive/bubble-avatar/bubble-avatar.component */
      42039);
      /* harmony import */


      var _stories_actions_action_avatar_action_avatar_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ../../stories/actions/action-avatar/action-avatar.component */
      93025);
      /* harmony import */


      var _stories_directive_bubble_input_popover_input_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ../../stories/directive/bubble-input/popover-input.directive */
      40019);
      /* harmony import */


      var _stories_directive_bubble_input_bubble_input_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ../../stories/directive/bubble-input/bubble-input.component */
      48771);
      /* harmony import */


      var _stories_actions_action_input_action_input_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ../../stories/actions/action-input/action-input.component */
      61410);
      /* harmony import */


      var mdb_angular_ui_kit_popover__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! mdb-angular-ui-kit/popover */
      69147);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _stories_buttons_button_exclamation_mark_button_exclamation_mark_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ../../stories/buttons/button-exclamation-mark/button-exclamation-mark.component */
      40518);
      /* harmony import */


      var _pipes_api_error_message_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./pipes/api-error-message.service */
      39361);
      /* harmony import */


      var _stories_spinners_spinner1_spinner1_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ../../stories/spinners/spinner1/spinner1.component */
      79899);
      /* harmony import */


      var _stories_forms_verification_form_verification_form_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../../stories/forms/verification-form/verification-form.component */
      59067);
      /* harmony import */


      var _stories_inputs_digitcode_input_digitcode_input_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ../../stories/inputs/digitcode-input/digitcode-input.component */
      13026);
      /* harmony import */


      var _stories_inputs_code_input_code_input_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ../../stories/inputs/code-input/code-input.component */
      16027);
      /* harmony import */


      var _stories_forms_my_account_form_my_account_form_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ../../stories/forms/my-account-form/my-account-form.component */
      36483);
      /* harmony import */


      var _stories_inputs_account_input_account_input_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ../../stories/inputs/account-input/account-input.component */
      22783);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/core */
      37716); //import { BrowserModule } from '@angular/platform-browser';


      var _StorybookModule = /*#__PURE__*/_createClass(function _StorybookModule() {
        _classCallCheck(this, _StorybookModule);
      });

      _StorybookModule.ɵfac = function StorybookModule_Factory(t) {
        return new (t || _StorybookModule)();
      };

      _StorybookModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineNgModule"]({
        type: _StorybookModule,
        bootstrap: [_stories_avatars_avatar_component__WEBPACK_IMPORTED_MODULE_19__.AvatarComponent]
      });
      _StorybookModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵdefineInjector"]({
        providers: [_pipes_api_error_message_service__WEBPACK_IMPORTED_MODULE_28__.ApiErrorMessageService],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_36__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule, mdb_angular_ui_kit_popover__WEBPACK_IMPORTED_MODULE_38__.MdbPopoverModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_39__.MatButtonModule], _angular_common__WEBPACK_IMPORTED_MODULE_36__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_35__["ɵɵsetNgModuleScope"](_StorybookModule, {
          declarations: [_stories_buttons_button_globe_button_globe_component__WEBPACK_IMPORTED_MODULE_2__.ButtonGlobeComponent, _stories_pages_background1_background1Component__WEBPACK_IMPORTED_MODULE_3__["default"], _stories_buttons_button_tadiran_button_tadiran_component__WEBPACK_IMPORTED_MODULE_4__.ButtonTadiranComponent, _stories_buttons_button_language_button_language_component__WEBPACK_IMPORTED_MODULE_0__.ButtonLanguageComponent, _stories_buttons_button_fortest_button_fortest_component__WEBPACK_IMPORTED_MODULE_1__.ButtonFortestComponent, _stories_cards_card_component__WEBPACK_IMPORTED_MODULE_5__["default"], _stories_forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__["default"], _stories_forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__["default"], _stories_forms_registry_form_registry_form_component__WEBPACK_IMPORTED_MODULE_7__["default"], _stories_forms_verification_form_verification_form_component__WEBPACK_IMPORTED_MODULE_30__["default"], _stories_forms_my_account_form_my_account_form_component__WEBPACK_IMPORTED_MODULE_33__["default"], _stories_buttons_button_continue_button_continue_component__WEBPACK_IMPORTED_MODULE_8__.ButtonContinueComponent, _stories_buttons_button_ex_button_ex_component__WEBPACK_IMPORTED_MODULE_9__.ButtonExComponent, _stories_buttons_button_apps_button_apps_component__WEBPACK_IMPORTED_MODULE_10__.ButtonAppsComponent, _stories_buttons_button_successfully_button_successfully_component__WEBPACK_IMPORTED_MODULE_11__.ButtonSuccessfullyComponent, _stories_buttons_button_example_button_component__WEBPACK_IMPORTED_MODULE_12__["default"], _stories_app_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_13__.AppMenuComponent, _stories_inputs_input_story_input_component__WEBPACK_IMPORTED_MODULE_14__.StoryInputComponent, _stories_inputs_digitcode_input_digitcode_input_component__WEBPACK_IMPORTED_MODULE_31__.DigitcodeInputComponent, _stories_inputs_code_input_code_input_component__WEBPACK_IMPORTED_MODULE_32__.CodeInputComponent, _stories_inputs_account_input_account_input_component__WEBPACK_IMPORTED_MODULE_34__.AccountInputComponent, src_stories_buttons_button_fortest_custom_directive_Highlight_directive__WEBPACK_IMPORTED_MODULE_15__.HighlightDirective, _stories_forms_replace_pass_form_replace_pass_form_component__WEBPACK_IMPORTED_MODULE_16__["default"], _stories_pass_strength_pass_strength_component__WEBPACK_IMPORTED_MODULE_17__["default"], _pipes_api_error_message_pipe__WEBPACK_IMPORTED_MODULE_18__.ApiErrorMessagePipe, _stories_avatars_avatar_component__WEBPACK_IMPORTED_MODULE_19__.AvatarComponent, _stories_directive_dynamic_comp_directive__WEBPACK_IMPORTED_MODULE_20__.DynamicCompDirective, _stories_actions_action_avatar_action_avatar_component__WEBPACK_IMPORTED_MODULE_23__.ActionAvatarComponent, _stories_directive_bubble_avatar_popover_directive__WEBPACK_IMPORTED_MODULE_21__.PopoverDirective, _stories_directive_bubble_avatar_bubble_avatar_component__WEBPACK_IMPORTED_MODULE_22__.BubbleAvatarComponent, _stories_actions_action_input_action_input_component__WEBPACK_IMPORTED_MODULE_26__.ActionInputComponent, _stories_directive_bubble_input_popover_input_directive__WEBPACK_IMPORTED_MODULE_24__.PopoverInputDirective, _stories_directive_bubble_input_bubble_input_component__WEBPACK_IMPORTED_MODULE_25__.BubbleInputComponent, _stories_buttons_button_exclamation_mark_button_exclamation_mark_component__WEBPACK_IMPORTED_MODULE_27__.ButtonExclamationMarkComponent, _stories_spinners_spinner1_spinner1_component__WEBPACK_IMPORTED_MODULE_29__.Spinner1Component],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_36__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule, mdb_angular_ui_kit_popover__WEBPACK_IMPORTED_MODULE_38__.MdbPopoverModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_39__.MatButtonModule],
          exports: [_stories_buttons_button_globe_button_globe_component__WEBPACK_IMPORTED_MODULE_2__.ButtonGlobeComponent, _stories_pages_background1_background1Component__WEBPACK_IMPORTED_MODULE_3__["default"], _stories_buttons_button_tadiran_button_tadiran_component__WEBPACK_IMPORTED_MODULE_4__.ButtonTadiranComponent, _stories_buttons_button_language_button_language_component__WEBPACK_IMPORTED_MODULE_0__.ButtonLanguageComponent, _stories_buttons_button_fortest_button_fortest_component__WEBPACK_IMPORTED_MODULE_1__.ButtonFortestComponent, _stories_cards_card_component__WEBPACK_IMPORTED_MODULE_5__["default"], _stories_forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__["default"], _stories_forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__["default"], _stories_forms_registry_form_registry_form_component__WEBPACK_IMPORTED_MODULE_7__["default"], _stories_forms_verification_form_verification_form_component__WEBPACK_IMPORTED_MODULE_30__["default"], _stories_forms_my_account_form_my_account_form_component__WEBPACK_IMPORTED_MODULE_33__["default"], _stories_buttons_button_continue_button_continue_component__WEBPACK_IMPORTED_MODULE_8__.ButtonContinueComponent, _stories_buttons_button_ex_button_ex_component__WEBPACK_IMPORTED_MODULE_9__.ButtonExComponent, _stories_buttons_button_apps_button_apps_component__WEBPACK_IMPORTED_MODULE_10__.ButtonAppsComponent, _stories_buttons_button_successfully_button_successfully_component__WEBPACK_IMPORTED_MODULE_11__.ButtonSuccessfullyComponent, _stories_buttons_button_example_button_component__WEBPACK_IMPORTED_MODULE_12__["default"], _stories_app_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_13__.AppMenuComponent, _stories_inputs_input_story_input_component__WEBPACK_IMPORTED_MODULE_14__.StoryInputComponent, _stories_inputs_digitcode_input_digitcode_input_component__WEBPACK_IMPORTED_MODULE_31__.DigitcodeInputComponent, _stories_inputs_code_input_code_input_component__WEBPACK_IMPORTED_MODULE_32__.CodeInputComponent, _stories_inputs_account_input_account_input_component__WEBPACK_IMPORTED_MODULE_34__.AccountInputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_36__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_37__.ReactiveFormsModule, src_stories_buttons_button_fortest_custom_directive_Highlight_directive__WEBPACK_IMPORTED_MODULE_15__.HighlightDirective, _stories_forms_replace_pass_form_replace_pass_form_component__WEBPACK_IMPORTED_MODULE_16__["default"], _stories_pass_strength_pass_strength_component__WEBPACK_IMPORTED_MODULE_17__["default"], _stories_avatars_avatar_component__WEBPACK_IMPORTED_MODULE_19__.AvatarComponent, _stories_directive_dynamic_comp_directive__WEBPACK_IMPORTED_MODULE_20__.DynamicCompDirective, _stories_actions_action_avatar_action_avatar_component__WEBPACK_IMPORTED_MODULE_23__.ActionAvatarComponent, _stories_directive_bubble_avatar_popover_directive__WEBPACK_IMPORTED_MODULE_21__.PopoverDirective, _stories_directive_bubble_avatar_bubble_avatar_component__WEBPACK_IMPORTED_MODULE_22__.BubbleAvatarComponent, _stories_actions_action_input_action_input_component__WEBPACK_IMPORTED_MODULE_26__.ActionInputComponent, _stories_directive_bubble_input_popover_input_directive__WEBPACK_IMPORTED_MODULE_24__.PopoverInputDirective, _stories_directive_bubble_input_bubble_input_component__WEBPACK_IMPORTED_MODULE_25__.BubbleInputComponent, _stories_buttons_button_exclamation_mark_button_exclamation_mark_component__WEBPACK_IMPORTED_MODULE_27__.ButtonExclamationMarkComponent, _stories_spinners_spinner1_spinner1_component__WEBPACK_IMPORTED_MODULE_29__.Spinner1Component]
        });
      })();
      /***/

    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    93025:
    /*!**********************************************************************!*\
      !*** ./src/stories/actions/action-avatar/action-avatar.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ActionAvatarComponent": function ActionAvatarComponent() {
          return (
            /* binding */
            _ActionAvatarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_stories_buttons_button_fortest_custom_directive_Highlight_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/stories/buttons/button-fortest/custom-directive/Highlight.directive */
      71988);

      var _ActionAvatarComponent = /*#__PURE__*/function () {
        function _ActionAvatarComponent() {
          _classCallCheck(this, _ActionAvatarComponent);

          this.actionHeader = "Your password will expire in 3 Days.";
          this.actionButton = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        }

        _createClass(_ActionAvatarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "setHeader",
          value: function setHeader(actionHeader) {
            this.actionHeader = actionHeader;
          }
        }, {
          key: "setBubbleOn",
          value: function setBubbleOn(bubbleOn) {
            this.bubbleOn = bubbleOn;
          }
        }]);

        return _ActionAvatarComponent;
      }();

      _ActionAvatarComponent.ɵfac = function ActionAvatarComponent_Factory(t) {
        return new (t || _ActionAvatarComponent)();
      };

      _ActionAvatarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ActionAvatarComponent,
        selectors: [["action-avatar"]],
        outputs: {
          actionButton: "actionButton"
        },
        decls: 5,
        vars: 3,
        consts: [[1, "password-alert-text"], [1, "action-text", 3, "highlight", "colorName", "click"]],
        template: function ActionAvatarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ActionAvatarComponent_Template_a_click_3_listener() {
              return ctx.actionButton.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Change it now >");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.actionHeader, "\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("highlight", "red")("colorName", "red");
          }
        },
        directives: [src_stories_buttons_button_fortest_custom_directive_Highlight_directive__WEBPACK_IMPORTED_MODULE_0__.HighlightDirective],
        styles: [".password-alert-text[_ngcontent-%COMP%] {\r\n\r\n  \r\n  text-align: start;\r\n  font-family: Noto Sans, ui-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 17px;\r\n  line-height: 31px;\r\n  \r\n\r\n  letter-spacing: -0.011em;\r\n\r\n  color: #000000;\r\n\r\n}\r\n\r\n.action-text[_ngcontent-%COMP%] {\r\n  -webkit-text-decoration-line: underline;\r\n          text-decoration-line: underline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi1hdmF0YXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTs7RUFFWix3QkFBd0I7O0VBRXhCLGNBQWM7O0FBRWhCOztBQUVBO0VBQ0UsdUNBQStCO1VBQS9CLCtCQUErQjtBQUNqQyIsImZpbGUiOiJhY3Rpb24tYXZhdGFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFzc3dvcmQtYWxlcnQtdGV4dCB7XHJcblxyXG4gIC8qIEQgUmVndWxhciAqL1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIGZvbnQtZmFtaWx5OiBOb3RvIFNhbnMsIHVpLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogMzFweDtcclxuICAvKiBvciAxODMlICovXHJcblxyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMTFlbTtcclxuXHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcblxyXG59XHJcblxyXG4uYWN0aW9uLXRleHQge1xyXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */"]
      });
      /***/
    },

    /***/
    61410:
    /*!********************************************************************!*\
      !*** ./src/stories/actions/action-input/action-input.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ActionInputComponent": function ActionInputComponent() {
          return (
            /* binding */
            _ActionInputComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function ActionInputComponent_tr_7_td_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2714");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionInputComponent_tr_7_td_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "X");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ActionInputComponent_tr_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ActionInputComponent_tr_7_td_1_Template, 2, 0, "td", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ActionInputComponent_tr_7_td_2_Template, 2, 0, "td", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var actionInput_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", actionInput_r1.isFulfilled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !actionInput_r1.isFulfilled);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](actionInput_r1.presentingMessage);
        }
      }

      var _ActionInputComponent = /*#__PURE__*/function () {
        function _ActionInputComponent() {
          _classCallCheck(this, _ActionInputComponent);

          this.actionHeader = "The password must contain:";
        }

        _createClass(_ActionInputComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "setConditions",
          value: function setConditions(actionInputs) {
            this.actionInputs = actionInputs;
          }
        }, {
          key: "setHeader",
          value: function setHeader(actionHeader) {
            this.actionHeader = actionHeader;
          }
        }]);

        return _ActionInputComponent;
      }();

      _ActionInputComponent.ɵfac = function ActionInputComponent_Factory(t) {
        return new (t || _ActionInputComponent)();
      };

      _ActionInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ActionInputComponent,
        selectors: [["action-input"]],
        decls: 8,
        vars: 2,
        consts: [["Style", "text-indent: 27px; padding-bottom: 15px", 1, "password-alert-text"], [4, "ngFor", "ngForOf"], ["Style", "color: green", 4, "ngIf"], ["Style", "color: red", 4, "ngIf"], ["Style", "text-indent: 7px"], ["Style", "color: green"], ["Style", "color: red"]],
        template: function ActionInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ActionInputComponent_tr_7_Template, 5, 3, "tr", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.actionHeader);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.actionInputs);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
        styles: [".password-alert-text[_ngcontent-%COMP%] {\r\n\r\n\r\n  \r\n  font-family: Noto Sans, ui-serif;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 13px;\r\n  line-height: 12px;\r\n  text-align: start;\r\n  \r\n\r\n  letter-spacing: -0.011em;\r\n\r\n  color: #0A0000;\r\n\r\n}\r\n\r\n.password-condition-text[_ngcontent-%COMP%] {\r\n\r\n\r\n  \r\n  font-family: Noto Sans, ui-serif;\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 13px;\r\n  line-height: 25px;\r\n  \r\n\r\n  letter-spacing: -0.011em;\r\n\r\n  color: #0A0000;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbi1pbnB1dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7RUFHRSxjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsV0FBVzs7RUFFWCx3QkFBd0I7O0VBRXhCLGNBQWM7O0FBRWhCOztBQUVBOzs7RUFHRSxjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixXQUFXOztFQUVYLHdCQUF3Qjs7RUFFeEIsY0FBYzs7QUFFaEIiLCJmaWxlIjoiYWN0aW9uLWlucHV0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFzc3dvcmQtYWxlcnQtdGV4dCB7XHJcblxyXG5cclxuICAvKiBEIFJlZ3VsYXIgKi9cclxuICBmb250LWZhbWlseTogTm90byBTYW5zLCB1aS1zZXJpZjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgLyogb3IgOTQlICovXHJcblxyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMTFlbTtcclxuXHJcbiAgY29sb3I6ICMwQTAwMDA7XHJcblxyXG59XHJcblxyXG4ucGFzc3dvcmQtY29uZGl0aW9uLXRleHQge1xyXG5cclxuXHJcbiAgLyogRCBSZWd1bGFyICovXHJcbiAgZm9udC1mYW1pbHk6IE5vdG8gU2FucywgdWktc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gIC8qIG9yIDk0JSAqL1xyXG5cclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDExZW07XHJcblxyXG4gIGNvbG9yOiAjMEEwMDAwO1xyXG5cclxufVxyXG5cclxuIl19 */"]
      });
      /***/
    },

    /***/
    72751:
    /*!****************************************************!*\
      !*** ./src/stories/app-menu/app-menu.component.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppMenuComponent": function AppMenuComponent() {
          return (
            /* binding */
            _AppMenuComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _cards_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../cards/card.component */
      56970);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _buttons_button_apps_button_apps_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../buttons/button-apps/button-apps.component */
      83318);
      /* harmony import */


      var _spinners_spinner1_spinner1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../spinners/spinner1/spinner1.component */
      79899);

      function AppMenuComponent_storybook_spinner1_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "storybook-spinner1");
        }
      }

      var _AppMenuComponent = /*#__PURE__*/function () {
        function _AppMenuComponent() {
          _classCallCheck(this, _AppMenuComponent);

          this.credentials = {
            username: null,
            password: null
          };
          this.isLoginFailed = false;
          this.loginErrorMessage = '';
          /**
           * @ignore
           * Component property to define ordering of tasks
           */

          this.storyInputsInOrder = [];
          this.isLoggedIn = false; // tslint:disable-next-line: no-output-on-prefix

          this.onPinInput = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter(); // tslint:disable-next-line: no-output-on-prefix

          this.onArchiveInput = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          this.openNewWinForApp = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          this.openNewTabForApp = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          this.isLoading = false;
          this.validationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('Telecom2', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)),
            //email: new FormControl(null, Validators.email),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('T@diran2022', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)) //phone: new FormControl(null, Validators.pattern(new RegExp("[0-9 ]{12}")))

          });
        }

        _createClass(_AppMenuComponent, [{
          key: "openReplacePassword",
          value: function openReplacePassword() {//this.replacePassFormService.open(ReplacePassForm2Component);
          }
        }, {
          key: "storyInputs",
          set: function set(arr) {
            var initialTasks = [].concat(_toConsumableArray(arr.filter(function (t) {
              return t.state === 'USER NAME';
            })), _toConsumableArray(arr.filter(function (t) {
              return t.state !== 'USER NAME';
            })));
            var filteredTasks = initialTasks.filter(function (t) {
              return t.type === 'password' || t.state === 'USER NAME';
            });
            this.storyInputsInOrder = filteredTasks.filter(function (t) {
              return t.type === 'password' || t.state === 'USER NAME';
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _a, _b;

            console.warn('Login Request!');
            this.credentials.username = (_a = this.validationForm.get('username')) === null || _a === void 0 ? void 0 : _a.value;
            this.credentials.password = (_b = this.validationForm.get('password')) === null || _b === void 0 ? void 0 : _b.value;
            this.openNewWinForApp.emit(this.credentials);
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "userName",
          get: function get() {
            return this.validationForm.get('username');
          }
        }, {
          key: "email",
          get: function get() {
            return this.validationForm.get('email');
          }
        }, {
          key: "password",
          get: function get() {
            return this.validationForm.get('password');
          }
        }, {
          key: "phone",
          get: function get() {
            return this.validationForm.get('phone');
          }
        }]);

        return _AppMenuComponent;
      }();

      _AppMenuComponent.ɵfac = function AppMenuComponent_Factory(t) {
        return new (t || _AppMenuComponent)();
      };

      _AppMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _AppMenuComponent,
        selectors: [["storybook-app-menu"]],
        inputs: {
          formService: "formService",
          isLoggedIn: "isLoggedIn",
          profileApps: "profileApps",
          isLoading: "isLoading",
          storyInputs: "storyInputs"
        },
        outputs: {
          onPinInput: "onPinInput",
          onArchiveInput: "onArchiveInput",
          openNewWinForApp: "openNewWinForApp",
          openNewTabForApp: "openNewTabForApp"
        },
        decls: 19,
        vars: 6,
        consts: [["id", "main-login-card", 1, "col-md-12"], [1, "card-container"], [1, "h-100", "d-flex", "align-items-center", "justify-content-center"], [1, "Aeonix-App-Center"], [4, "ngIf"], [1, "grid-container"], [1, "item1"], ["application", "Agent", "label", "Continue", "type", "button", "id", "openNewAgentTab", 3, "isDisabled", "click"], [1, "item2"], ["application", "WebRT", "label", "Continue", "type", "button", "id", "openNewWebRTTab", 3, "isDisabled", "click"], [1, "item3"], ["application", "Script-Designer", "label", "Continue", "type", "button", "id", "openNewGccsTab", 3, "isDisabled", "click"], [1, "item4"], ["application", "Admin", "label", "Continue", "type", "button", 3, "isDisabled"], [1, "item5"], ["application", "Aeonix-Admin", "label", "Continue", "type", "button", "id", "openNewGccsTab2", 3, "isDisabled", "click"]],
        template: function AppMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "storybook-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Aeonix App Center");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AppMenuComponent_storybook_spinner1_7_Template, 1, 0, "storybook-spinner1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "storybook-button-apps", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppMenuComponent_Template_storybook_button_apps_click_10_listener() {
              return ctx.openNewWinForApp.emit(["AGENT", "/accAgent/"]);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "storybook-button-apps", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppMenuComponent_Template_storybook_button_apps_click_12_listener() {
              return ctx.openNewTabForApp.emit(["ACCREALTIME", "/accRealTime/"]);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "storybook-button-apps", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppMenuComponent_Template_storybook_button_apps_click_14_listener() {
              return ctx.openNewTabForApp.emit(["GCCS", "/accGCCS/"]);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "storybook-button-apps", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "storybook-button-apps", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AppMenuComponent_Template_storybook_button_apps_click_18_listener() {
              return ctx.openNewTabForApp.emit(["GCCS", "/accGCCS/"]);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isDisabled", !(ctx.profileApps == null ? null : ctx.profileApps.agent));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isDisabled", !(ctx.profileApps == null ? null : ctx.profileApps.realtime));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isDisabled", !(ctx.profileApps == null ? null : ctx.profileApps.scriptDesigner));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isDisabled", !(ctx.profileApps == null ? null : ctx.profileApps.admin));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isDisabled", !(ctx.profileApps == null ? null : ctx.profileApps.aeonixAdmin));
          }
        },
        directives: [_cards_card_component__WEBPACK_IMPORTED_MODULE_0__["default"], _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _buttons_button_apps_button_apps_component__WEBPACK_IMPORTED_MODULE_1__.ButtonAppsComponent, _spinners_spinner1_spinner1_component__WEBPACK_IMPORTED_MODULE_2__.Spinner1Component],
        styles: [".card-container.card[_ngcontent-%COMP%] {\r\n  max-width: 1000px !important;\r\n  padding: 10px 10px;\r\n  \r\n\r\n}\r\n\r\nstorybook-spinner1[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 70px;\r\n  height: 70px;\r\n  left: calc(50% - 75px/2 - 0.25px);\r\n  top: calc(50% - 70px/2 - 0.5px);\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  justify-content: center;\r\n  grid-template-columns: auto auto auto auto auto auto;\r\n  grid-gap: 10%;\r\n  gap: 10%;\r\n  background-color: #2196F3;\r\n  padding: 0px;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  text-align: center;\r\n  padding: 0 0;\r\n  font-size: 30px;\r\n}\r\n\r\n.item1[_ngcontent-%COMP%] {\r\n  grid-area: 1 / 1 / span 1 / span 2;\r\n}\r\n\r\n.item2[_ngcontent-%COMP%] {\r\n  grid-area: 1 / 3 / span 1 / span 2;\r\n}\r\n\r\n.item3[_ngcontent-%COMP%] {\r\n  grid-area: 1 / 5 / span 1 / span 2;\r\n}\r\n\r\n.item4[_ngcontent-%COMP%] {\r\n  grid-area: 2 / 2 / span 1 / span 2;\r\n}\r\n\r\n.item5[_ngcontent-%COMP%] {\r\n  grid-area: 2 / 4 / span 1 / span 2;\r\n}\r\n\r\n.col-md-12[_ngcontent-%COMP%]{\r\n  position: center;\r\n  width: 965px;\r\n  height: 819px;\r\n  left: calc(50% - 965px/2 - 0.25px);\r\n  top: calc(50% - 819px/2 - 0.5px);\r\n  border-radius: 32px;\r\n\r\n}\r\n\r\n.Aeonix-App-Center[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 12.94%;\r\n  bottom: 77.05%;\r\n\r\n  \r\n  height: 82px;\r\n  flex-grow: 0;\r\n  margin: 0 0 19.8px;\r\n  font-family: \"Noto Sans\", ui-serif;\r\n  font-size: 40px;\r\n  font-weight: bolder;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: 45px;\r\n  letter-spacing: -0.011px;\r\n  text-align: left;\r\n  color: #000000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1tZW51LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFHQTtFQUNFLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEI7aUJBQ2U7O0FBRWpCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUNBQWlDO0VBQ2pDLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsb0RBQW9EO0VBQ3BELGFBQVE7RUFBUixRQUFRO0VBQ1IseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBQ0E7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsZ0NBQWdDO0VBQ2hDLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWM7O0VBRWQsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQiIsImZpbGUiOiJhcHAtbWVudS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4uY2FyZC1jb250YWluZXIuY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgLyp0b3A6IDUuMTglO1xyXG4gIGJvdHRvbTogNC43OCU7Ki9cclxuXHJcbn1cclxuXHJcbnN0b3J5Ym9vay1zcGlubmVyMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDc1cHgvMiAtIDAuMjVweCk7XHJcbiAgdG9wOiBjYWxjKDUwJSAtIDcwcHgvMiAtIDAuNXB4KTtcclxufVxyXG5cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XHJcbiAgZ2FwOiAxMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciA+IGRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uaXRlbTEge1xyXG4gIGdyaWQtYXJlYTogMSAvIDEgLyBzcGFuIDEgLyBzcGFuIDI7XHJcbn1cclxuLml0ZW0yIHtcclxuICBncmlkLWFyZWE6IDEgLyAzIC8gc3BhbiAxIC8gc3BhbiAyO1xyXG59XHJcbi5pdGVtMyB7XHJcbiAgZ3JpZC1hcmVhOiAxIC8gNSAvIHNwYW4gMSAvIHNwYW4gMjtcclxufVxyXG5cclxuLml0ZW00IHtcclxuICBncmlkLWFyZWE6IDIgLyAyIC8gc3BhbiAxIC8gc3BhbiAyO1xyXG59XHJcbi5pdGVtNSB7XHJcbiAgZ3JpZC1hcmVhOiAyIC8gNCAvIHNwYW4gMSAvIHNwYW4gMjtcclxufVxyXG5cclxuXHJcbi5jb2wtbWQtMTJ7XHJcbiAgcG9zaXRpb246IGNlbnRlcjtcclxuICB3aWR0aDogOTY1cHg7XHJcbiAgaGVpZ2h0OiA4MTlweDtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDk2NXB4LzIgLSAwLjI1cHgpO1xyXG4gIHRvcDogY2FsYyg1MCUgLSA4MTlweC8yIC0gMC41cHgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XHJcblxyXG59XHJcblxyXG4uQWVvbml4LUFwcC1DZW50ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEyLjk0JTtcclxuICBib3R0b206IDc3LjA1JTtcclxuXHJcbiAgLyp3aWR0aDogNDQ3cHg7Ki9cclxuICBoZWlnaHQ6IDgycHg7XHJcbiAgZmxleC1ncm93OiAwO1xyXG4gIG1hcmdpbjogMCAwIDE5LjhweDtcclxuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIiwgdWktc2VyaWY7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMTFweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    99607:
    /*!*************************************************!*\
      !*** ./src/stories/avatars/avatar.component.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AvatarComponent": function AvatarComponent() {
          return (
            /* binding */
            _AvatarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _actions_action_avatar_action_avatar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../actions/action-avatar/action-avatar.component */
      93025);
      /* harmony import */


      var _directive_bubble_avatar_popover_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../directive/bubble-avatar/popover.directive */
      66219);
      /* harmony import */


      var src_stories_buttons_button_fortest_custom_directive_Highlight_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/stories/buttons/button-fortest/custom-directive/Highlight.directive */
      71988);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _buttons_button_exclamation_mark_button_exclamation_mark_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../buttons/button-exclamation-mark/button-exclamation-mark.component */
      40518);

      function AvatarComponent_storybook_button_exclamation_mark_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "storybook-button-exclamation-mark", 7);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };
      /**/


      var _AvatarComponent = /*#__PURE__*/function () {
        function _AvatarComponent() {
          _classCallCheck(this, _AvatarComponent);

          this.popover = {
            content: _actions_action_avatar_action_avatar_component__WEBPACK_IMPORTED_MODULE_0__.ActionAvatarComponent
          };
          this.actionButton = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
          /**
           * Header contents
           *
           * @required
           */

          this.header = 'header';
          /**
           * Is this the principal call to action on the login-main?
           */

          this.isNotify = false;
          /**
           * Is this the principal call to action on the login-main?
           */

          this.primary = false;
          /**
           * How large should the button be?
           */

          this.size = 'medium';
          /**
           * Button contents
           *
           * @required
           */

          this.label = 'Button';
          /**
           * Optional click handler
           */

          this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        }

        _createClass(_AvatarComponent, [{
          key: "classes",
          get: function get() {
            var mode = this.primary ? 'storybook-avatar--primary' : 'storybook-avatar--secondary';
            return ['storybook-avatar', "storybook-avatar--".concat(this.size), mode];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _AvatarComponent;
      }();

      _AvatarComponent.ɵfac = function AvatarComponent_Factory(t) {
        return new (t || _AvatarComponent)();
      };

      _AvatarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _AvatarComponent,
        selectors: [["storybook-avatar"]],
        inputs: {
          header: "header",
          isNotify: "isNotify",
          primary: "primary",
          backgroundColor: "backgroundColor",
          size: "size",
          label: "label"
        },
        outputs: {
          actionButton: "actionButton",
          onClick: "onClick"
        },
        decls: 8,
        vars: 9,
        consts: [[3, "twPopover", "header", "bubbleOn", "actionButton"], ["highlight", "blue", "colorName", "blue", "type", "button", 1, "main", 3, "ngClass", "ngStyle", "click"], [1, "circle"], ["src", "./assets/images/ProfileIcon-70.svg", "srcset", "./assets/images/ProfileIcon-70@2x.png, ./assets/images/ProfileIcon-70@3x.png", "alt", "profile-image", 1, "Avatar-Icon"], ["class", "exclamation-mark", "size", "small", 4, "ngIf"], [1, "Avatar-Label"], [1, "font"], ["size", "small", 1, "exclamation-mark"]],
        template: function AvatarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("actionButton", function AvatarComponent_Template_div_actionButton_0_listener($event) {
              return ctx.actionButton.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AvatarComponent_Template_button_click_1_listener($event) {
              return ctx.onClick.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AvatarComponent_storybook_button_exclamation_mark_4_Template, 1, 0, "storybook-button-exclamation-mark", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("header", ctx.header);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("twPopover", ctx.popover)("bubbleOn", ctx.isNotify);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", ctx.classes)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c0, ctx.backgroundColor));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isNotify);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.label);
          }
        },
        directives: [_directive_bubble_avatar_popover_directive__WEBPACK_IMPORTED_MODULE_1__.PopoverDirective, src_stories_buttons_button_fortest_custom_directive_Highlight_directive__WEBPACK_IMPORTED_MODULE_2__.HighlightDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _buttons_button_exclamation_mark_button_exclamation_mark_component__WEBPACK_IMPORTED_MODULE_3__.ButtonExclamationMarkComponent],
        styles: [".storybook-avatar[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 114px;\n  height: calc(10px + 58.37px + 32px + 5px);\n}\n\n.main[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 114px;\n  height: calc(58.37px + 32px + 5px);\n  margin: 0 0 0 0;\n  padding: 0;\n  border-color: rgba(46, 138, 0, 0.97);\n  \n}\n\n.circle[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 58px;\n  height: 58px;\n  left: calc(114px/2 - 58px/2);\n  top: 10px;\n  \n  \n  border-radius: 50%;\n  \n  border: 2px solid #3D8ECF;\n}\n\nimg.Avatar-Icon[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 19.95px;\n  height: 23.02px;\n  left: 33.33%;\n  right: 31.67%;\n  top: 28.57%;\n  bottom: 31.05%;\n  \n  -o-object-fit: fill;\n     object-fit: fill;\n  \n}\n\n.Avatar-Label[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 114px;\n  height: 33px;\n  \n  top: calc(10px + 57px + 10px);\n  left: 0;\n}\n\n.a.font[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 114px;\n  height: 32px;\n  bottom: 0;\n  \n  font-family: \"Noto Sans\", ui-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 31px;\n  \n  align-items: start;\n  text-align: center;\n  letter-spacing: -0.011em;\n  color: #000000;\n}\n\n.exclamation-mark[_ngcontent-%COMP%] {\n  position: absolute;\n  \n  top: calc(1px);\n  left: calc(114px/2 + 58px/2 - 35px/2);\n}\n\n.storybook-avatar--primary[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.storybook-avatar--secondary[_ngcontent-%COMP%] {\n  color: #000000;\n  background-color: transparent;\n}\n\n.storybook-avatar--small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n\n.storybook-avatar--medium[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 17px;\n  padding: 0 0;\n}\n\n.storybook-avatar--large[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF2YXRhci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLDZEQUFBO0FBREY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFFQTtrQkFBQTtFQUVBLGtCQUFBO0VBRUEsU0FBQTtFQUNBLHlCQUFBO0FBTEY7O0FBU0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUdBLHdDQUFBO0VBRUEsbUJBQUE7S0FBQSxnQkFBQTtFQUNBLG9EQUFBO0FBVEY7O0FBWUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLE9BQUE7QUFURjs7QUFjQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGNBQUE7QUFYRjs7QUFjQTtFQUNFLGtCQUFBO0VBRUEsdUJBQUE7RUFDQSxjQUFBO0VBQ0EscUNBQUE7QUFaRjs7QUFnQkE7RUFDRSxZQUFBO0FBYkY7O0FBZUE7RUFDRSxjQUFBO0VBQ0EsNkJBQUE7QUFaRjs7QUFjQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQVhGOztBQWFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBVkY7O0FBWUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7QUFURiIsImZpbGUiOiJhdmF0YXIuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uc3Rvcnlib29rLWF2YXRhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDExNHB4O1xuICBoZWlnaHQ6IGNhbGMoMTBweCArIDU4LjM3cHggKyAzMnB4ICsgNXB4KTtcbn1cblxuLm1haW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMTRweDtcbiAgaGVpZ2h0OiBjYWxjKDU4LjM3cHggKyAzMnB4ICsgNXB4KTtcbiAgbWFyZ2luOiAwIDAgMCAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItY29sb3I6IHJnYmEoNDYsIDEzOCwgMCwgMC45Nyk7XG4gIC8qZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMXB4IDFweCByZ2JhKDYxLCAxNDIsIDIwNywgMC45NikpOyovXG5cbn1cblxuXG4uY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNThweDtcbiAgaGVpZ2h0OiA1OHB4O1xuICBsZWZ0OiBjYWxjKDExNHB4LzIgLSA1OHB4LzIpO1xuICB0b3A6IDEwcHg7XG4gIC8qcGFkZGluZzogMnB4OyovXG5cbiAgLyp0b3A6IDA7XG4gIC8qYm90dG9tOiAxLjElOyovXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcblxuICAvKiBCbHVlICovXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzRDhFQ0Y7XG59XG5cblxuaW1nLkF2YXRhci1JY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTkuOTVweDtcbiAgaGVpZ2h0OiAyMy4wMnB4O1xuICBsZWZ0OiAzMy4zMyU7XG4gIHJpZ2h0OiAzMS42NyU7XG4gIHRvcDogMjguNTclO1xuICBib3R0b206IDMxLjA1JTtcblxuXG4gIC8qdHJhbnNmb3JtOiBtYXRyaXgoLTEsIDAsIDAsIDEsIDAsIDApOyovXG5cbiAgb2JqZWN0LWZpdDogZmlsbDtcbiAgLypib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDYxLCAxNDIsIDIwNywgMC4xNSk7Ki9cbn1cblxuLkF2YXRhci1MYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDExNHB4O1xuICBoZWlnaHQ6IDMzcHg7XG4gIC8qaG9yaXotYWxpZ246IGNlbnRlcjsqL1xuICB0b3A6IGNhbGMoMTBweCArIDU3cHggKyAxMHB4KTtcbiAgbGVmdDogMDtcblxufVxuXG5cbi5hLmZvbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMTRweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBib3R0b206IDA7XG4gIC8qd2lkdGg6IDQ0N3B4OyovXG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiLCB1aS1zZXJpZjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xuICAvKmRpc3BsYXk6IGZsZXg7Ki9cbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMTFlbTtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5leGNsYW1hdGlvbi1tYXJrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICAvL2JvcmRlcjogMnB4IHNvbGlkICM0Y2E3YWY7XG4gIC8qaG9yaXotYWxpZ246IGNlbnRlcjsqL1xuICB0b3A6IGNhbGMoMXB4KTtcbiAgbGVmdDogY2FsYygxMTRweC8yICsgNThweC8yIC0gMzVweC8yKTtcblxufVxuXG4uc3Rvcnlib29rLWF2YXRhci0tcHJpbWFyeSB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5zdG9yeWJvb2stYXZhdGFyLS1zZWNvbmRhcnkge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG4uc3Rvcnlib29rLWF2YXRhci0tc21hbGwge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbn1cbi5zdG9yeWJvb2stYXZhdGFyLS1tZWRpdW0ge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBwYWRkaW5nOiAwIDA7XG59XG4uc3Rvcnlib29rLWF2YXRhci0tbGFyZ2Uge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    83318:
    /*!******************************************************************!*\
      !*** ./src/stories/buttons/button-apps/button-apps.component.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ButtonAppsComponent": function ButtonAppsComponent() {
          return (
            /* binding */
            _ButtonAppsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };

      var _ButtonAppsComponent = /*#__PURE__*/function () {
        function _ButtonAppsComponent() {
          _classCallCheck(this, _ButtonAppsComponent);

          /**
           * Is this the principal call to action on the login-main?
           */
          this.isDisabled = false;
          /**
           * Is this the principal call to action on the login-main?
           */

          this.primary = false;
          /**
           * How large should the button be?
           */

          this.size = 'medium';
          /**
           * What application should the button linked to?
           */

          this.application = 'Admin';
          /**
           * Button contents
           *
           * @required
           */

          this.label = 'accGateButton2';
          /**
           * Optional click handler
           */

          this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(_ButtonAppsComponent, [{
          key: "classes",
          get: function get() {
            var mode = this.primary ? 'storybook-button-apps--primary' : 'storybook-button-apps--secondary';
            return ['storybook-button-apps', "storybook-button-apps--".concat(this.application), mode];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ButtonAppsComponent;
      }();

      _ButtonAppsComponent.ɵfac = function ButtonAppsComponent_Factory(t) {
        return new (t || _ButtonAppsComponent)();
      };

      _ButtonAppsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ButtonAppsComponent,
        selectors: [["storybook-button-apps"]],
        inputs: {
          isDisabled: "isDisabled",
          primary: "primary",
          backgroundColor: "backgroundColor",
          size: "size",
          application: "application",
          label: "label"
        },
        outputs: {
          onClick: "onClick"
        },
        decls: 6,
        vars: 7,
        consts: [["id", "button-apps", 1, "container", 3, "disabled"], ["id", "circle", 1, "circle"], ["alt", "apps-button-icon", 1, "Apps-Button-Icon", "center", 3, "ngClass", "ngStyle", "src", "click"], [1, "Button-App-Label"], [1, "center", "mfont"]],
        template: function ButtonAppsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonAppsComponent_Template_img_click_2_listener($event) {
              return ctx.onClick.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/images/", ctx.application == null ? null : ctx.application.toString(), ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classes)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.backgroundColor));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.application.toString(), " ");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
        styles: ["[_ngcontent-%COMP%]:root {\n  --label_width: 30px;\n  --white: #ffffff;\n}\n\nbutton[disabled][_ngcontent-%COMP%] {\n  background-color: rgba(43, 166, 203, 0);\n}\n\nbutton[disabled][_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  background: linear-gradient(151.78deg, rgba(187, 187, 187, 0.76) 13.27%, rgba(98, 97, 97, 0.76) 83.89%);\n}\n\nbutton[disabled][_ngcontent-%COMP%]:hover {\n  background-color: currentcolor;\n}\n\nbutton[disabled][_ngcontent-%COMP%]:hover   .circle[_ngcontent-%COMP%] {\n  background-color: currentcolor;\n}\n\nbutton[disabled][_ngcontent-%COMP%]:active {\n  box-shadow: none;\n  background: currentcolor;\n}\n\nbutton[_ngcontent-%COMP%]:not([disabled]) {\n  background-color: rgba(43, 166, 203, 0);\n}\n\nbutton[_ngcontent-%COMP%]:not([disabled])   .circle[_ngcontent-%COMP%] {\n  background: linear-gradient(151.78deg, #74C1FF 13.27%, #3D8ECF 83.89%);\n}\n\nbutton[_ngcontent-%COMP%]:not([disabled]):hover {\n  background-color: currentcolor;\n}\n\nbutton[_ngcontent-%COMP%]:not([disabled]):hover   .circle[_ngcontent-%COMP%] {\n  background-image: linear-gradient(151.78deg, #58a6f0 13.27%, #275ea8 83.89%);\n}\n\nbutton[_ngcontent-%COMP%]:not([disabled]):active   .circle[_ngcontent-%COMP%] {\n  box-shadow: none;\n  background: linear-gradient(151.78deg, #7EC6FF 2.44%, #ADDBFF 93.73%);\n}\n\n#button-successfully[_ngcontent-%COMP%] {\n  max-width: 155.09px;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 155.09px;\n  height: 189.09px;\n  float: left;\n  padding: 0;\n}\n\nimg.Apps-Button-Icon[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 65.54px;\n  height: 82.79px;\n  left: calc(50% - 65.54px/2);\n  top: calc(50% - 82.79px/2);\n  -o-object-fit: contain;\n     object-fit: contain;\n  \n}\n\n.circle[_ngcontent-%COMP%] {\n  position: relative;\n  height: 155.09px;\n  width: 155.09px;\n  border-radius: 50%;\n}\n\n.center[_ngcontent-%COMP%] {\n  margin: auto;\n  text-align: center;\n}\n\n.mfont[_ngcontent-%COMP%] {\n  \n  font-family: \"Noto Sans\", ui-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 31px;\n  letter-spacing: -0.011em;\n  color: #000000;\n}\n\n.Button-App-Label[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 33px;\n  horiz-align: center;\n}\n\n.a[_ngcontent-%COMP%] {\n  position: relative;\n  width: 129px;\n  height: 33px;\n  \n  font-family: \"Noto Sans\", ui-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 31px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: -0.011em;\n  color: #000000;\n}\n\n.storybook-button-apps--Agent[_ngcontent-%COMP%] {\n  width: 154.09px;\n  height: 154.09px;\n}\n\n.storybook-button-apps--WebRT[_ngcontent-%COMP%] {\n  width: 152.94px;\n  height: 197px;\n}\n\n.storybook-button-apps--Admin[_ngcontent-%COMP%] {\n  width: 154.09px;\n  height: 154.09px;\n}\n\n.storybook-button-apps--Script-Designer[_ngcontent-%COMP%] {\n  width: 154.09px;\n  height: 152.94px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi1hcHBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUNBQUE7QUFDRjs7QUFBRTtFQUNFLHVHQUFBO0FBRUo7O0FBQ0U7RUFDRSw4QkFBQTtBQUNKOztBQUNJO0VBQ0UsOEJBQUE7QUFDTjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0Esd0JBQUE7QUFESjs7QUFNQTtFQUNFLHVDQUFBO0FBSEY7O0FBSUU7RUFDRSxzRUFBQTtBQUZKOztBQUtFO0VBQ0UsOEJBQUE7QUFISjs7QUFLSTtFQUNFLDRFQUFBO0FBSE47O0FBUUk7RUFDRSxnQkFBQTtFQUNBLHFFQUFBO0FBTk47O0FBV0E7RUFDRSxtQkFBQTtBQVJGOztBQVdBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFSRjs7QUFXQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLG9EQUFBO0FBUkY7O0FBV0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBUkY7O0FBYUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUFWRjs7QUFhQTtFQUNFLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FBVkY7O0FBYUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFWRjs7QUFlQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxjQUFBO0FBWkY7O0FBZUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFaRjs7QUFjQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FBWEY7O0FBYUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFWRjs7QUFZQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQVRGIiwiZmlsZSI6ImJ1dHRvbi1hcHBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xyXG4gIC0tbGFiZWxfd2lkdGg6IDMwcHg7XHJcbiAgLS13aGl0ZTogI2ZmZmZmZjtcclxufVxyXG5cclxuYnV0dG9uW2Rpc2FibGVkXSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MywgMTY2LCAyMDMsIDApO1xyXG4gIC5jaXJjbGUge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1MS43OGRlZywgcmdiYSgxODcsIDE4NywgMTg3LCAwLjc2KSAxMy4yNyUsIHJnYmEoOTgsIDk3LCA5NywgMC43NikgODMuODklKTtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudGNvbG9yO1xyXG5cclxuICAgIC5jaXJjbGUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Y29sb3I7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogY3VycmVudGNvbG9yO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmJ1dHRvbjpub3QoW2Rpc2FibGVkXSkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDMsIDE2NiwgMjAzLCAwKTtcclxuICAuY2lyY2xlIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTEuNzhkZWcsICM3NEMxRkYgMTMuMjclLCAjM0Q4RUNGIDgzLjg5JSk7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRjb2xvcjtcclxuXHJcbiAgICAuY2lyY2xlIHtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE1MS43OGRlZywgIzU4YTZmMCAxMy4yNyUsICMyNzVlYTggODMuODklKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIC5jaXJjbGUge1xyXG4gICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTUxLjc4ZGVnLCAjN0VDNkZGIDIuNDQlLCAjQUREQkZGIDkzLjczJSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4jYnV0dG9uLXN1Y2Nlc3NmdWxseSB7XHJcbiAgbWF4LXdpZHRoOiAxNTUuMDlweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogMTU1LjA5cHg7XHJcbiAgaGVpZ2h0OiAxODkuMDlweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pbWcuQXBwcy1CdXR0b24tSWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA2NS41NHB4O1xyXG4gIGhlaWdodDogODIuNzlweDtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDY1LjU0cHgvMik7XHJcbiAgdG9wOiBjYWxjKDUwJSAtIDgyLjc5cHgvMik7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAvKmJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoNjEsIDE0MiwgMjA3LCAwLjE1KTsqL1xyXG59XHJcblxyXG4uY2lyY2xlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxNTUuMDlweDtcclxuICB3aWR0aDogMTU1LjA5cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG5cclxuXHJcbi5jZW50ZXIge1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZm9udCB7XHJcbiAgLyp3aWR0aDogNDQ3cHg7Ki9cclxuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIiwgdWktc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMTFlbTtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLkJ1dHRvbi1BcHAtTGFiZWwge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDMzcHg7XHJcbiAgaG9yaXotYWxpZ246IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcblxyXG4uYSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMjlweDtcclxuICBoZWlnaHQ6IDMzcHg7XHJcbiAgLyp3aWR0aDogNDQ3cHg7Ki9cclxuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIiwgdWktc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMWVtO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4uc3Rvcnlib29rLWJ1dHRvbi1hcHBzLS1BZ2VudCB7XHJcbiAgd2lkdGg6IDE1NC4wOXB4O1xyXG4gIGhlaWdodDogMTU0LjA5cHg7XHJcbn1cclxuLnN0b3J5Ym9vay1idXR0b24tYXBwcy0tV2ViUlQge1xyXG4gIHdpZHRoOiAxNTIuOTRweDtcclxuICBoZWlnaHQ6IDE5N3B4O1xyXG59XHJcbi5zdG9yeWJvb2stYnV0dG9uLWFwcHMtLUFkbWluIHtcclxuICB3aWR0aDogMTU0LjA5cHg7XHJcbiAgaGVpZ2h0OiAxNTQuMDlweDtcclxufVxyXG4uc3Rvcnlib29rLWJ1dHRvbi1hcHBzLS1TY3JpcHQtRGVzaWduZXIge1xyXG4gIHdpZHRoOiAxNTQuMDlweDtcclxuICBoZWlnaHQ6IDE1Mi45NHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    34591:
    /*!**************************************************************************!*\
      !*** ./src/stories/buttons/button-continue/button-continue.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ButtonContinueComponent": function ButtonContinueComponent() {
          return (
            /* binding */
            _ButtonContinueComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };

      var _ButtonContinueComponent = /*#__PURE__*/function () {
        function _ButtonContinueComponent() {
          _classCallCheck(this, _ButtonContinueComponent);

          /**
           * Is this gallery attribute are set?
           */
          this.gallery = false;
          /**
           * Is this the principal call to action on the login-main?
           */

          this.primary = false;
          /**
           * How large should the button be?
           */

          this.size = 'medium';
          /**
           * Button contents
           *
           * @required
           */

          this.label = 'Continue';
          /**
           * Optional click handler
           */

          this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(_ButtonContinueComponent, [{
          key: "classes",
          get: function get() {
            var mode = this.primary ? 'storybook-button-continue--primary' : 'storybook-button-continue--secondary';
            var galleryMode = this.gallery ? 'storybook-button-continue--set-in' : 'storybook-button-continue--set-out';
            return ['storybook-button-continue', "storybook-button-continue--".concat(this.size), mode, galleryMode];
          }
        }]);

        return _ButtonContinueComponent;
      }();

      _ButtonContinueComponent.ɵfac = function ButtonContinueComponent_Factory(t) {
        return new (t || _ButtonContinueComponent)();
      };

      _ButtonContinueComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ButtonContinueComponent,
        selectors: [["storybook-button-continue"]],
        inputs: {
          gallery: "gallery",
          primary: "primary",
          backgroundColor: "backgroundColor",
          size: "size",
          label: "label"
        },
        outputs: {
          onClick: "onClick"
        },
        decls: 2,
        vars: 5,
        consts: [["id", "login-button", 1, "login-button", 3, "ngClass", "ngStyle", "click"]],
        template: function ButtonContinueComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonContinueComponent_Template_button_click_0_listener($event) {
              return ctx.onClick.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classes)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.backgroundColor));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx.label, "\n");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
        styles: [".storybook-button-continue[_ngcontent-%COMP%] {\n  width: 446px;\n  height: 63px;\n  margin: 26px 0 0 1px;\n  padding: 17px 136px 17px 139px;\n  border-radius: 7px;\n  background-image: linear-gradient(180deg, #3D8ECF 0%, #58A6E4 100%);\n  font-family: \"Noto Sans\", ui-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 21px;\n  line-height: 11px;\n}\n.storybook-button-continue[_ngcontent-%COMP%]:hover {\n  background: #3D8ECF;\n}\n.storybook-button-continue[_ngcontent-%COMP%]:active {\n  box-shadow: none;\n  background: linear-gradient(116.01deg, #7EC6FF 2.44%, #ADDBFF 93.73%);\n}\n\n.storybook-button-continue--small[_ngcontent-%COMP%] {\n  font-size: 20.7945px;\n  padding: 10px 16px;\n}\n.storybook-button-continue--medium[_ngcontent-%COMP%] {\n  font-size: 21px;\n  padding: 17px 136px 17px 139px;\n}\n.storybook-button-continue--large[_ngcontent-%COMP%] {\n  font-size: 28px;\n  padding: 17px 136px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi1jb250aW51ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUVBQUE7RUFFQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFWSjtBQWFJO0VBQ0UsbUJBQUE7QUFYTjtBQWNJO0VBQ0UsZ0JBQUE7RUFDQSxxRUFBQTtBQVpOO0FBb0JBOzs7Ozs7Ozs7Ozs7Q0FBQTtBQWNBO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtBQWxCRjtBQW9CQTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtBQWpCRjtBQW1CQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQWhCRiIsImZpbGUiOiJidXR0b24tY29udGludWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5idXR0b24ge1xyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5zdG9yeWJvb2stYnV0dG9uLWNvbnRpbnVlIHtcclxuICAgIHdpZHRoOiA0NDZweDtcclxuICAgIGhlaWdodDogNjNweDtcclxuICAgIG1hcmdpbjogMjZweCAwIDAgMXB4O1xyXG4gICAgcGFkZGluZzogMTdweCAxMzZweCAxN3B4IDEzOXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzNEOEVDRiAwJSwgIzU4QTZFNCAxMDAlKTtcclxuXHJcbiAgICBmb250LWZhbWlseTogJ05vdG8gU2FucycsIHVpLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG4gICAgLy9ib3gtc2hhZG93OiAwIDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzNEOEVDRjtcclxuICAgIH1cclxuXHJcbiAgICAmOmFjdGl2ZSB7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMTYuMDFkZWcsICM3RUM2RkYgMi40NCUsICNBRERCRkYgOTMuNzMlKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8qXHJcbi5zdG9yeWJvb2stYnV0dG9uLWNvbnRpbnVlLS1wcmltYXJ5IHtcclxuICB0b3A6IDUwcHg7XHJcbiAgYm90dG9tOiB1bnNldDtcclxuICBsZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uc3Rvcnlib29rLWJ1dHRvbi1jb250aW51ZS0tc2Vjb25kYXJ5IHtcclxuICB0b3A6IHVuc2V0O1xyXG4gIGJvdHRvbTogNTBweDtcclxuICBsZWZ0OiAzMHB4O1xyXG59XHJcbiovXHJcblxyXG4uc3Rvcnlib29rLWJ1dHRvbi1jb250aW51ZS0tc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogMjAuNzk0NXB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTZweDtcclxufVxyXG4uc3Rvcnlib29rLWJ1dHRvbi1jb250aW51ZS0tbWVkaXVtIHtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbiAgcGFkZGluZzogMTdweCAxMzZweCAxN3B4IDEzOXB4O1xyXG59XHJcbi5zdG9yeWJvb2stYnV0dG9uLWNvbnRpbnVlLS1sYXJnZSB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIHBhZGRpbmc6IDE3cHggMTM2cHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    94874:
    /*!**************************************************************!*\
      !*** ./src/stories/buttons/button-ex/button-ex.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ButtonExComponent": function ButtonExComponent() {
          return (
            /* binding */
            _ButtonExComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };

      var _ButtonExComponent = /*#__PURE__*/function () {
        function _ButtonExComponent() {
          _classCallCheck(this, _ButtonExComponent);

          /**
           * Is this the principal call to action on the login-main?
           */
          this.primary = false;
          /**
           * How large should the button be?
           */

          this.size = 'medium';
          /**
           * Button contents
           *
           * @required
           */

          this.label = 'accGateButton2';
          /**
           * Optional click handler
           */

          this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(_ButtonExComponent, [{
          key: "classes",
          get: function get() {
            var mode = this.primary ? 'storybook-button-ex--primary' : 'storybook-button-ex--secondary';
            return ['storybook-button-ex', "storybook-button-ex--".concat(this.size), mode];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ButtonExComponent;
      }();

      _ButtonExComponent.ɵfac = function ButtonExComponent_Factory(t) {
        return new (t || _ButtonExComponent)();
      };

      _ButtonExComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ButtonExComponent,
        selectors: [["storybook-button-ex"]],
        inputs: {
          primary: "primary",
          backgroundColor: "backgroundColor",
          size: "size",
          label: "label"
        },
        outputs: {
          onClick: "onClick"
        },
        decls: 2,
        vars: 4,
        consts: [[1, "Vector", 3, "click"], ["src", "./assets/images/x_close.png", "alt", "Ex-Icon", 1, "Ex-Icon", 3, "ngClass", "ngStyle"]],
        template: function ButtonExComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonExComponent_Template_button_click_0_listener($event) {
              return ctx.onClick.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classes)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
        styles: ["button.Vector[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 20px;\r\n  height: 20px;\r\n  padding: 0;\r\n  margin: 0;\r\n  background: rgba(255, 255, 255, 0);\r\n}\r\n\r\nimg.Ex-Icon[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 1px;\r\n  right: 1px;\r\n  width: 19px;\r\n  height: 19px;\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  box-shadow: 0 1px 1px 0 rgba(61, 142, 207, 0.15);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi1leC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7RUFDVCxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFtQjtLQUFuQixtQkFBbUI7RUFDbkIsZ0RBQWdEO0FBQ2xEIiwiZmlsZSI6ImJ1dHRvbi1leC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uLlZlY3RvciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG59XHJcblxyXG5pbWcuRXgtSWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMXB4O1xyXG4gIHJpZ2h0OiAxcHg7XHJcbiAgd2lkdGg6IDE5cHg7XHJcbiAgaGVpZ2h0OiAxOXB4O1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSg2MSwgMTQyLCAyMDcsIDAuMTUpO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    27647:
    /*!****************************************************************!*\
      !*** ./src/stories/buttons/button-example/button.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            ButtonComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };

      var ButtonComponent = /*#__PURE__*/function () {
        function ButtonComponent() {
          _classCallCheck(this, ButtonComponent);

          /**
           * Is this the principal call to action on the login-main?
           */
          this.primary = false;
          /**
           * How large should the button be?
           */

          this.size = 'medium';
          /**
           * Button contents
           *
           * @required
           */

          this.label = 'Button';
          /**
           * Optional click handler
           */

          this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(ButtonComponent, [{
          key: "classes",
          get: function get() {
            var mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
            return ['storybook-button', "storybook-button--".concat(this.size), mode];
          }
        }]);

        return ButtonComponent;
      }();

      ButtonComponent.ɵfac = function ButtonComponent_Factory(t) {
        return new (t || ButtonComponent)();
      };

      ButtonComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ButtonComponent,
        selectors: [["storybook-button"]],
        inputs: {
          primary: "primary",
          backgroundColor: "backgroundColor",
          size: "size",
          label: "label"
        },
        outputs: {
          onClick: "onClick"
        },
        decls: 2,
        vars: 5,
        consts: [["type", "button", 3, "ngClass", "ngStyle", "click"]],
        template: function ButtonComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonComponent_Template_button_click_0_listener($event) {
              return ctx.onClick.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classes)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx.backgroundColor));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.label, " ");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
        styles: [".storybook-button[_ngcontent-%COMP%] {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary[_ngcontent-%COMP%] {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwRUFBMEU7RUFDMUUsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLHFEQUFxRDtBQUN2RDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJidXR0b24uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0b3J5Ym9vay1idXR0b24ge1xuICBmb250LWZhbWlseTogJ051bml0byBTYW5zJywgJ0hlbHZldGljYSBOZXVlJywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItcmFkaXVzOiAzZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5zdG9yeWJvb2stYnV0dG9uLS1wcmltYXJ5IHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWVhN2ZkO1xufVxuLnN0b3J5Ym9vay1idXR0b24tLXNlY29uZGFyeSB7XG4gIGNvbG9yOiAjMzMzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAwcHggMHB4IDBweCAxcHggaW5zZXQ7XG59XG4uc3Rvcnlib29rLWJ1dHRvbi0tc21hbGwge1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDEwcHggMTZweDtcbn1cbi5zdG9yeWJvb2stYnV0dG9uLS1tZWRpdW0ge1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDExcHggMjBweDtcbn1cbi5zdG9yeWJvb2stYnV0dG9uLS1sYXJnZSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogMTJweCAyNHB4O1xufVxuIl19 */"]
      });
      /***/
    },

    /***/
    40518:
    /*!******************************************************************************************!*\
      !*** ./src/stories/buttons/button-exclamation-mark/button-exclamation-mark.component.ts ***!
      \******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ButtonExclamationMarkComponent": function ButtonExclamationMarkComponent() {
          return (
            /* binding */
            _ButtonExclamationMarkComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };

      var _ButtonExclamationMarkComponent = /*#__PURE__*/function () {
        function _ButtonExclamationMarkComponent() {
          _classCallCheck(this, _ButtonExclamationMarkComponent);

          /**
           * Is this the principal call to action on the login-main?
           */
          this.primary = false;
          /**
           * How large should the button be?
           */

          this.size = 'medium';
          /**
           * Button contents
           *
           * @required
           */

          this.label = 'accGateButton2';
          /**
           * Optional click handler
           */

          this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(_ButtonExclamationMarkComponent, [{
          key: "classes",
          get: function get() {
            var mode = this.primary ? 'storybook-button-exclamation-mark--primary' : 'storybook-button-exclamation-mark--secondary';
            return ['storybook-button-exclamation-mark', "storybook-button-exclamation-mark--".concat(this.size), mode];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ButtonExclamationMarkComponent;
      }();

      _ButtonExclamationMarkComponent.ɵfac = function ButtonExclamationMarkComponent_Factory(t) {
        return new (t || _ButtonExclamationMarkComponent)();
      };

      _ButtonExclamationMarkComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ButtonExclamationMarkComponent,
        selectors: [["storybook-button-exclamation-mark"]],
        inputs: {
          primary: "primary",
          backgroundColor: "backgroundColor",
          size: "size",
          label: "label"
        },
        outputs: {
          onClick: "onClick"
        },
        decls: 3,
        vars: 4,
        consts: [["id", "button-exclamation-mark", 1, "container"], ["id", "button-exclamation-mark-circle", 1, "circle", 3, "ngClass", "ngStyle", "click"], ["src", "./assets/images/Exclamation.png", "alt", "exclamation-mark-button-icon", 1, "Exclamation-Mark-Icon", "center"]],
        template: function ButtonExclamationMarkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonExclamationMarkComponent_Template_div_click_1_listener($event) {
              return ctx.onClick.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classes)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
        styles: ["[_ngcontent-%COMP%]:root {\n  --label_width: 30px;\n  --white: #ffffff;\n}\n\n.container[_ngcontent-%COMP%] {\n  position: absolute;\n  width: calc(var(--veriable-width));\n  height: calc(var(--veriable-height));\n  float: left;\n  padding: 0;\n}\n\nimg.Exclamation-Mark-Icon[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 83.98px;\n  height: 62.42px;\n  left: calc(50% - 83.98px/2);\n  top: calc(50% - 62.42px/2);\n  -o-object-fit: contain;\n     object-fit: contain;\n  \n}\n\n.circle[_ngcontent-%COMP%] {\n  position: relative;\n  height: 142px;\n  width: 142px;\n  background: linear-gradient(180deg, #FA4F4F 47.92%, #DD3333 100%);\n  border-radius: 50%;\n}\n\n.center[_ngcontent-%COMP%] {\n  margin: auto;\n  text-align: center;\n}\n\n.storybook-button-exclamation-mark--small[_ngcontent-%COMP%] {\n  \n  height: 35px;\n  width: 35px;\n}\n\n.storybook-button-exclamation-mark--small[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  height: 30.27px;\n  width: 5.27px;\n  left: calc(50% - 5.27px/2);\n  top: 5.25%;\n  bottom: 8.26%;\n}\n\n.storybook-button-exclamation-mark--medium[_ngcontent-%COMP%] {\n  height: 142px;\n  width: 142px;\n}\n\n.storybook-button-exclamation-mark--medium[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 83.98px;\n  height: 62.42px;\n  top: 5.25%;\n  bottom: 8.26%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi1leGNsYW1hdGlvbi1tYXJrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUtBO0VBQ0Usa0JBQUE7RUFFQSxrQ0FBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLG9EQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsaUVBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsWUFBQTtFQUVBLGtCQUFBO0FBSkY7O0FBU0E7RUFFRSxVQUFBO0VBR0EsWUFBQTtFQUNBLFdBQUE7QUFURjs7QUFXRTtFQUVFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFFQSxVQUFBO0VBQ0EsYUFBQTtBQVhKOztBQWlCQTtFQUlFLGFBQUE7RUFDQSxZQUFBO0FBakJGOztBQW1CRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBRUEsVUFBQTtFQUNBLGFBQUE7QUFsQkoiLCJmaWxlIjoiYnV0dG9uLWV4Y2xhbWF0aW9uLW1hcmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgLS1sYWJlbF93aWR0aDogMzBweDtcclxuICAtLXdoaXRlOiAjZmZmZmZmO1xyXG59XHJcblxyXG4kaGVpZ2h0OiAxNDJweCAhZGVmYXVsdDtcclxuJHdpZHRoOiAxNDJweCAhZGVmYXVsdDtcclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvL2JvcmRlcjogMnB4IHNvbGlkICM0Q0FGNTA7XHJcbiAgd2lkdGg6IGNhbGModmFyKC0tdmVyaWFibGUtd2lkdGgpKTtcclxuICBoZWlnaHQ6IGNhbGModmFyKC0tdmVyaWFibGUtaGVpZ2h0KSk7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaW1nLkV4Y2xhbWF0aW9uLU1hcmstSWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA4My45OHB4O1xyXG4gIGhlaWdodDogNjIuNDJweDtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDgzLjk4cHgvMik7XHJcbiAgdG9wOiBjYWxjKDUwJSAtIDYyLjQycHgvMik7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAvKmJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoNjEsIDE0MiwgMjA3LCAwLjE1KTsqL1xyXG59XHJcblxyXG4uY2lyY2xlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxNDJweDtcclxuICB3aWR0aDogMTQycHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0ZBNEY0RiA0Ny45MiUsICNERDMzMzMgMTAwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcblxyXG59XHJcblxyXG4uc3Rvcnlib29rLWJ1dHRvbi1leGNsYW1hdGlvbi1tYXJrLS1zbWFsbCB7XHJcblxyXG4gIC8qIC5pbWcgeyovXHJcbiAgJGhlaWdodDogMzVweDtcclxuICAkd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHdpZHRoOiAzNXB4O1xyXG4gIC8vIH1cclxuICA+IGltZyB7XHJcbiAgICAvLyRoaWdodDogMzUuNjhweDtcclxuICAgIGhlaWdodDogMzAuMjdweDtcclxuICAgIHdpZHRoOiA1LjI3cHg7XHJcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDUuMjdweC8yKTtcclxuICAgIC8vdG9wOiBjYWxjKDUwJSAtIHZhcigtLXZlcmlhYmxlLWhlaWdodC8yKSk7XHJcbiAgICB0b3A6IDUuMjUlO1xyXG4gICAgYm90dG9tOiA4LjI2JTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnN0b3J5Ym9vay1idXR0b24tZXhjbGFtYXRpb24tbWFyay0tbWVkaXVtIHtcclxuXHJcbiAgJGhlaWdodDogMTQycHg7XHJcbiAgJHdpZHRoOiAxNDJweDtcclxuICBoZWlnaHQ6IDE0MnB4O1xyXG4gIHdpZHRoOiAxNDJweDtcclxuXHJcbiAgPiBpbWcge1xyXG4gICAgd2lkdGg6IDgzLjk4cHg7XHJcbiAgICBoZWlnaHQ6IDYyLjQycHg7XHJcblxyXG4gICAgdG9wOiA1LjI1JTtcclxuICAgIGJvdHRvbTogOC4yNiU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuIl19 */"]
      });
      /***/
    },

    /***/
    65028:
    /*!************************************************************************!*\
      !*** ./src/stories/buttons/button-fortest/button-fortest.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ButtonFortestComponent": function ButtonFortestComponent() {
          return (
            /* binding */
            _ButtonFortestComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_stories_buttons_button_fortest_custom_directive_Highlight_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/stories/buttons/button-fortest/custom-directive/Highlight.directive */
      71988);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };

      var _ButtonFortestComponent = /*#__PURE__*/function () {
        function _ButtonFortestComponent() {
          _classCallCheck(this, _ButtonFortestComponent);

          /**
           * Is this the principal call to action on the login-main?
           */
          this.primary = false;
          /**
           * How large should the button be?
           */

          this.size = 'medium';
          /**
           * Button contents
           *
           * @required
           */

          this.label = 'Button';
          /**
           * Optional click handler
           */

          this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        }

        _createClass(_ButtonFortestComponent, [{
          key: "classes",
          get: function get() {
            var mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';
            return ['storybook-button', "storybook-button--".concat(this.size), mode];
          }
        }]);

        return _ButtonFortestComponent;
      }();

      _ButtonFortestComponent.ɵfac = function ButtonFortestComponent_Factory(t) {
        return new (t || _ButtonFortestComponent)();
      };

      _ButtonFortestComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _ButtonFortestComponent,
        selectors: [["storybook-button-fortest"]],
        inputs: {
          primary: "primary",
          backgroundColor: "backgroundColor",
          size: "size",
          label: "label"
        },
        outputs: {
          onClick: "onClick"
        },
        decls: 4,
        vars: 5,
        consts: [["highlight", "blue", "colorName", "blue", "type", "button", 3, "ngClass", "ngStyle", "click"]],
        template: function ButtonFortestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Highlight Directive");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ButtonFortestComponent_Template_button_click_2_listener($event) {
              return ctx.onClick.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.classes)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx.backgroundColor));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.label, " ");
          }
        },
        directives: [src_stories_buttons_button_fortest_custom_directive_Highlight_directive__WEBPACK_IMPORTED_MODULE_0__.HighlightDirective, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle],
        styles: [".storybook-button[_ngcontent-%COMP%] {\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\n  font-weight: 700;\n  border: 0;\n  border-radius: 3em;\n  cursor: pointer;\n  display: inline-block;\n  line-height: 1;\n}\n.storybook-button--primary[_ngcontent-%COMP%] {\n  color: white;\n  background-color: #1ea7fd;\n}\n.storybook-button--secondary[_ngcontent-%COMP%] {\n  color: #333;\n  background-color: transparent;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\n}\n.storybook-button--small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 10px 16px;\n}\n.storybook-button--medium[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 11px 20px;\n}\n.storybook-button--large[_ngcontent-%COMP%] {\n  font-size: 16px;\n  padding: 12px 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi1mb3J0ZXN0LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBFQUEwRTtFQUMxRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IscURBQXFEO0FBQ3ZEO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImJ1dHRvbi1mb3J0ZXN0LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdG9yeWJvb2stYnV0dG9uIHtcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLXJhZGl1czogM2VtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG4uc3Rvcnlib29rLWJ1dHRvbi0tcHJpbWFyeSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlYTdmZDtcbn1cbi5zdG9yeWJvb2stYnV0dG9uLS1zZWNvbmRhcnkge1xuICBjb2xvcjogIzMzMztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IDBweCAwcHggMXB4IGluc2V0O1xufVxuLnN0b3J5Ym9vay1idXR0b24tLXNtYWxsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiAxMHB4IDE2cHg7XG59XG4uc3Rvcnlib29rLWJ1dHRvbi0tbWVkaXVtIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAxMXB4IDIwcHg7XG59XG4uc3Rvcnlib29rLWJ1dHRvbi0tbGFyZ2Uge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmc6IDEycHggMjRweDtcbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    71988:
    /*!************************************************************************************!*\
      !*** ./src/stories/buttons/button-fortest/custom-directive/Highlight.directive.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HighlightDirective": function HighlightDirective() {
          return (
            /* binding */
            _HighlightDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _HighlightDirective = /*#__PURE__*/function () {
        function _HighlightDirective(eleRef) {
          _classCallCheck(this, _HighlightDirective);

          this.eleRef = eleRef;
        }

        _createClass(_HighlightDirective, [{
          key: "onMouseOver",
          value: function onMouseOver() {
            this.eleRef.nativeElement.style.color = this.colorName;
          }
        }, {
          key: "onMouseLeave",
          value: function onMouseLeave() {
            this.eleRef.nativeElement.style.color = 'black';
          }
        }]);

        return _HighlightDirective;
      }();

      _HighlightDirective.ɵfac = function HighlightDirective_Factory(t) {
        return new (t || _HighlightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      _HighlightDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _HighlightDirective,
        selectors: [["", "highlight", ""]],
        hostBindings: function HighlightDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function HighlightDirective_mouseover_HostBindingHandler() {
              return ctx.onMouseOver();
            })("mouseleave", function HighlightDirective_mouseleave_HostBindingHandler() {
              return ctx.onMouseLeave();
            });
          }
        },
        inputs: {
          highlight: "highlight",
          colorName: "colorName"
        }
      });
      /***/
    },

    /***/
    16867:
    /*!********************************************************************!*\
      !*** ./src/stories/buttons/button-globe/button-globe.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ButtonGlobeComponent": function ButtonGlobeComponent() {
          return (
            /* binding */
            _ButtonGlobeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };

      var _ButtonGlobeComponent = /*#__PURE__*/function () {
        function _ButtonGlobeComponent() {
          _classCallCheck(this, _ButtonGlobeComponent);

          /**
           * Is this the principal call to action on the login-main?
           */
          this.primary = false;
          /**
           * How large should the button be?
           */

          this.size = 'medium';
          /**
           * Button contents
           *
           * @required
           */

          this.label = 'accGateButton2';
          /**
           * Optional click handler
           */

          this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(_ButtonGlobeComponent, [{
          key: "classes",
          get: function get() {
            var mode = this.primary ? 'storybook-button-tadiran--primary' : 'storybook-button-tadiran--secondary';
            return ['storybook-button-tadiran', "storybook-tadiran-icon--".concat(this.size), mode];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ButtonGlobeComponent;
      }();

      _ButtonGlobeComponent.ɵfac = function ButtonGlobeComponent_Factory(t) {
        return new (t || _ButtonGlobeComponent)();
      };

      _ButtonGlobeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ButtonGlobeComponent,
        selectors: [["storybook-button-globe"]],
        inputs: {
          primary: "primary",
          backgroundColor: "backgroundColor",
          size: "size",
          label: "label"
        },
        outputs: {
          onClick: "onClick"
        },
        decls: 2,
        vars: 4,
        consts: [[1, "Vector"], ["src", "./assets/images/GlobeIcon.png", "alt", "form-desktop-icon", 1, "Language-Desktop-Icon", 3, "ngClass", "ngStyle", "click"]],
        template: function ButtonGlobeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonGlobeComponent_Template_img_click_1_listener($event) {
              return ctx.onClick.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classes)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
        styles: [".Vector[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 49px;\r\n  left: 247px;\r\n  width: 123px;\r\n  height: 45px;\r\n}\r\n\r\nimg.Language-Desktop-Icon[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 1px;\r\n  left: 1px;\r\n  width: 123px;\r\n  height: 45px;\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi1nbG9iZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQW1CO0tBQW5CLG1CQUFtQjtFQUNuQixvREFBb0Q7QUFDdEQiLCJmaWxlIjoiYnV0dG9uLWdsb2JlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuVmVjdG9yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA0OXB4O1xyXG4gIGxlZnQ6IDI0N3B4O1xyXG4gIHdpZHRoOiAxMjNweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbmltZy5MYW5ndWFnZS1EZXNrdG9wLUljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDFweDtcclxuICBsZWZ0OiAxcHg7XHJcbiAgd2lkdGg6IDEyM3B4O1xyXG4gIGhlaWdodDogNDVweDtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIC8qYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSg2MSwgMTQyLCAyMDcsIDAuMTUpOyovXHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    5001:
    /*!**************************************************************************!*\
      !*** ./src/stories/buttons/button-language/button-language.component.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ButtonLanguageComponent": function ButtonLanguageComponent() {
          return (
            /* binding */
            _ButtonLanguageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };

      var _ButtonLanguageComponent = /*#__PURE__*/function () {
        function _ButtonLanguageComponent() {
          _classCallCheck(this, _ButtonLanguageComponent);

          /**
           * Is this the principal call to action on the login-main?
           */
          this.primary = false;
          /**
           * How large should the button be?
           */

          this.size = 'medium';
          /**
           * Button contents
           *
           * @required
           */

          this.label = 'accGateButton2';
          /**
           * Optional click handler
           */

          this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(_ButtonLanguageComponent, [{
          key: "classes",
          get: function get() {
            var mode = this.primary ? 'storybook-button-form--primary' : 'storybook-button-form--secondary';
            return ['storybook-button-form', "storybook-language-icon--".concat(this.size), mode];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ButtonLanguageComponent;
      }();

      _ButtonLanguageComponent.ɵfac = function ButtonLanguageComponent_Factory(t) {
        return new (t || _ButtonLanguageComponent)();
      };

      _ButtonLanguageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ButtonLanguageComponent,
        selectors: [["storybook-button-language"]],
        inputs: {
          primary: "primary",
          backgroundColor: "backgroundColor",
          size: "size",
          label: "label"
        },
        outputs: {
          onClick: "onClick"
        },
        decls: 2,
        vars: 4,
        consts: [[1, "Vector"], ["src", "./assets/images/language-desktop-icon.png", "srcset", "./assets/images/language-desktop-icon@2x.png 2x,\n             /assets/images/language-desktop-icon@3x.png 3x", "alt", "form-desktop-icon", 1, "Language-Desktop-Icon", 3, "ngClass", "ngStyle", "click"]],
        template: function ButtonLanguageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonLanguageComponent_Template_img_click_1_listener($event) {
              return ctx.onClick.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classes)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
        styles: [".Vector[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 54px;\r\n  right: 68px;\r\n  width: 26px;\r\n  height: 26px;\r\n}\r\n\r\nimg.Language-Desktop-Icon[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 1px;\r\n  right: 1px;\r\n  width: 26px;\r\n  height: 26px;\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  box-shadow: 0 1px 1px 0 rgba(61, 142, 207, 0.15);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi1sYW5ndWFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQW1CO0tBQW5CLG1CQUFtQjtFQUNuQixnREFBZ0Q7QUFDbEQiLCJmaWxlIjoiYnV0dG9uLWxhbmd1YWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuVmVjdG9yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1NHB4O1xyXG4gIHJpZ2h0OiA2OHB4O1xyXG4gIHdpZHRoOiAyNnB4O1xyXG4gIGhlaWdodDogMjZweDtcclxufVxyXG5cclxuaW1nLkxhbmd1YWdlLURlc2t0b3AtSWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMXB4O1xyXG4gIHJpZ2h0OiAxcHg7XHJcbiAgd2lkdGg6IDI2cHg7XHJcbiAgaGVpZ2h0OiAyNnB4O1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSg2MSwgMTQyLCAyMDcsIDAuMTUpO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    80662:
    /*!**********************************************************************************!*\
      !*** ./src/stories/buttons/button-successfully/button-successfully.component.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ButtonSuccessfullyComponent": function ButtonSuccessfullyComponent() {
          return (
            /* binding */
            _ButtonSuccessfullyComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };

      var _ButtonSuccessfullyComponent = /*#__PURE__*/function () {
        function _ButtonSuccessfullyComponent() {
          _classCallCheck(this, _ButtonSuccessfullyComponent);

          /**
           * Is this the principal call to action on the login-main?
           */
          this.primary = false;
          /**
           * How large should the button be?
           */

          this.size = 'medium';
          /**
           * Button contents
           *
           * @required
           */

          this.label = 'accGateButton2';
          /**
           * Optional click handler
           */

          this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(_ButtonSuccessfullyComponent, [{
          key: "classes",
          get: function get() {
            var mode = this.primary ? 'storybook-button-successfully--primary' : 'storybook-button-successfully--secondary';
            return ['storybook-button-successfully', "storybook-button-successfully--".concat(this.size), mode];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ButtonSuccessfullyComponent;
      }();

      _ButtonSuccessfullyComponent.ɵfac = function ButtonSuccessfullyComponent_Factory(t) {
        return new (t || _ButtonSuccessfullyComponent)();
      };

      _ButtonSuccessfullyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ButtonSuccessfullyComponent,
        selectors: [["storybook-button-successfully"]],
        inputs: {
          primary: "primary",
          backgroundColor: "backgroundColor",
          size: "size",
          label: "label"
        },
        outputs: {
          onClick: "onClick"
        },
        decls: 3,
        vars: 4,
        consts: [["id", "button-successfully", 1, "container"], [1, "circle"], ["src", "./assets/images/Vee.png", "alt", "successfully-button-icon", 1, "Vee-Icon", "center", 3, "ngClass", "ngStyle", "click"]],
        template: function ButtonSuccessfullyComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonSuccessfullyComponent_Template_img_click_2_listener($event) {
              return ctx.onClick.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classes)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
        styles: ["[_ngcontent-%COMP%]:root {\r\n  --label_width: 30px;\r\n  --white: #ffffff;\r\n}\r\n\r\n#button-successfully[_ngcontent-%COMP%] {\r\n  max-width: 155.09px;\r\n\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  max-width: 155.09px;\r\n  height: 189.09px;\r\n  float: left;\r\n  padding: 0;\r\n}\r\n\r\nimg.Vee-Icon[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 83.98px;\r\n  height: 62.42px;\r\n  left: calc(50% - 83.98px/2);\r\n  top: calc(50% - 62.42px/2);\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  \r\n}\r\n\r\n.circle[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 142px;\r\n  width: 142px;\r\n  background: linear-gradient(180deg, #63EAA1 41.15%, #53CE8C 100%);\r\n  border-radius: 50%;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n\r\n  text-align: center;\r\n\r\n\r\n}\r\n\r\n.storybook-button-successfully--medium[_ngcontent-%COMP%] {\r\n  width: 154.09px;\r\n  height: 154.09px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi1zdWNjZXNzZnVsbHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsc0JBQW1CO0tBQW5CLG1CQUFtQjtFQUNuQixvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWixpRUFBaUU7RUFDakUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTs7RUFFWixrQkFBa0I7OztBQUdwQjs7QUFJQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoiYnV0dG9uLXN1Y2Nlc3NmdWxseS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xyXG4gIC0tbGFiZWxfd2lkdGg6IDMwcHg7XHJcbiAgLS13aGl0ZTogI2ZmZmZmZjtcclxufVxyXG5cclxuI2J1dHRvbi1zdWNjZXNzZnVsbHkge1xyXG4gIG1heC13aWR0aDogMTU1LjA5cHg7XHJcblxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWF4LXdpZHRoOiAxNTUuMDlweDtcclxuICBoZWlnaHQ6IDE4OS4wOXB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmltZy5WZWUtSWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA4My45OHB4O1xyXG4gIGhlaWdodDogNjIuNDJweDtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDgzLjk4cHgvMik7XHJcbiAgdG9wOiBjYWxjKDUwJSAtIDYyLjQycHgvMik7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAvKmJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoNjEsIDE0MiwgMjA3LCAwLjE1KTsqL1xyXG59XHJcblxyXG4uY2lyY2xlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAxNDJweDtcclxuICB3aWR0aDogMTQycHg7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzYzRUFBMSA0MS4xNSUsICM1M0NFOEMgMTAwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5zdG9yeWJvb2stYnV0dG9uLXN1Y2Nlc3NmdWxseS0tbWVkaXVtIHtcclxuICB3aWR0aDogMTU0LjA5cHg7XHJcbiAgaGVpZ2h0OiAxNTQuMDlweDtcclxufVxyXG5cclxuIl19 */"]
      });
      /***/
    },

    /***/
    54104:
    /*!************************************************************************!*\
      !*** ./src/stories/buttons/button-tadiran/button-tadiran.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ButtonTadiranComponent": function ButtonTadiranComponent() {
          return (
            /* binding */
            _ButtonTadiranComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };

      var _ButtonTadiranComponent = /*#__PURE__*/function () {
        function _ButtonTadiranComponent() {
          _classCallCheck(this, _ButtonTadiranComponent);

          /**
           * Is this gallery attribute are set?
           */
          this.gallery = false;
          /**
           * Is this the principal call to action on the login-main?
           */

          this.primary = false;
          /**
           * How large should the button be?
           */

          this.size = 'medium';
          /**
           * Button contents
           *
           * @required
           */

          this.label = 'accGateButton2';
          /**
           * Optional click handler
           */

          this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(_ButtonTadiranComponent, [{
          key: "classes",
          get: function get() {
            var mode = this.primary ? 'storybook-button-tadiran--primary' : 'storybook-button-tadiran--secondary';
            var galleryMode = this.gallery ? 'storybook-button-tadiran--set-in' : 'storybook-button-tadiran--set-out';
            return ['storybook-button-tadiran', "storybook-button-tadiran--".concat(this.size), mode, galleryMode];
          }
        }]);

        return _ButtonTadiranComponent;
      }();

      _ButtonTadiranComponent.ɵfac = function ButtonTadiranComponent_Factory(t) {
        return new (t || _ButtonTadiranComponent)();
      };

      _ButtonTadiranComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _ButtonTadiranComponent,
        selectors: [["storybook-button-tadiran"]],
        inputs: {
          gallery: "gallery",
          primary: "primary",
          backgroundColor: "backgroundColor",
          size: "size",
          label: "label"
        },
        outputs: {
          onClick: "onClick"
        },
        decls: 2,
        vars: 4,
        consts: [[1, "storybook-button-tadiran"], ["src", "./assets/images/img_2.png", "alt", "language-desktop-icon", 1, "Language-Desktop-Icon", 3, "ngClass", "ngStyle", "click"]],
        template: function ButtonTadiranComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ButtonTadiranComponent_Template_img_click_1_listener($event) {
              return ctx.onClick.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classes)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
        styles: [".storybook-button-tadiran[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 50px;\n  left: 30px;\n  width: 151px;\n  height: 39px;\n}\n\nimg.Language-Desktop-Icon[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1px;\n  left: 1px;\n  width: 151px;\n  height: 39px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  \n}\n\n.storybook-button-tadiran--primary[_ngcontent-%COMP%] {\n  top: 50px;\n  bottom: unset;\n  left: 30px;\n}\n\n.storybook-button-tadiran--secondary[_ngcontent-%COMP%] {\n  top: unset;\n  bottom: 50px;\n  left: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi10YWRpcmFuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0Esb0RBQUE7QUFDRjs7QUFHQTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUdBO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBQUYiLCJmaWxlIjoiYnV0dG9uLXRhZGlyYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Rvcnlib29rLWJ1dHRvbi10YWRpcmFuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA1MHB4O1xyXG4gIGxlZnQ6IDMwcHg7XHJcbiAgd2lkdGg6IDE1MXB4O1xyXG4gIGhlaWdodDogMzlweDtcclxufVxyXG5cclxuaW1nLkxhbmd1YWdlLURlc2t0b3AtSWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMXB4O1xyXG4gIGxlZnQ6IDFweDtcclxuICB3aWR0aDogMTUxcHg7XHJcbiAgaGVpZ2h0OiAzOXB4O1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgLypib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDYxLCAxNDIsIDIwNywgMC4xNSk7Ki9cclxufVxyXG5cclxuXHJcbi5zdG9yeWJvb2stYnV0dG9uLXRhZGlyYW4tLXByaW1hcnkge1xyXG4gIHRvcDogNTBweDtcclxuICBib3R0b206IHVuc2V0O1xyXG4gIGxlZnQ6IDMwcHg7XHJcbn1cclxuXHJcbi5zdG9yeWJvb2stYnV0dG9uLXRhZGlyYW4tLXNlY29uZGFyeSB7XHJcbiAgdG9wOiB1bnNldDtcclxuICBib3R0b206IDUwcHg7XHJcbiAgbGVmdDogMzBweDtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    56970:
    /*!*********************************************!*\
      !*** ./src/stories/cards/card.component.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            CardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var CardComponent = /*#__PURE__*/function () {
        function CardComponent() {
          _classCallCheck(this, CardComponent);

          /**
           * Is this the principal call to action on the login-main?
           */
          this.primary = false;
          /**
           * How large should the button be?
           */

          this.size = 'medium';
          /**
           * Button contents
           *
           * @required
           */

          this.label = 'Button';
          /**
           * Optional click handler
           */

          this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(CardComponent, [{
          key: "classes",
          get: function get() {
            var mode = this.primary ? 'storybook-card--primary' : 'storybook-card--secondary';
            return ['storybook-card', "storybook-card--".concat(this.size), mode];
          }
        }]);

        return CardComponent;
      }();

      CardComponent.ɵfac = function CardComponent_Factory(t) {
        return new (t || CardComponent)();
      };

      CardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CardComponent,
        selectors: [["storybook-card"]],
        inputs: {
          primary: "primary",
          backgroundColor: "backgroundColor",
          size: "size",
          label: "label"
        },
        outputs: {
          onClick: "onClick"
        },
        decls: 1,
        vars: 0,
        consts: [[1, "card"]],
        template: function CardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
          }
        },
        styles: [".Vector[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 637.5px;\r\n  height: 819px;\r\n  left: calc(50% - 637.5px/2 - 1.25px);\r\n  top: calc(50% - 819px/2 - 0.5px);\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  \r\n  border-radius: 14px;\r\n  box-shadow: -4px 4px 10px 0 rgba(88, 166, 228, 0.3);\r\n  background-color: #FFFFFF;\r\n}\r\n\r\n.storybook-card[_ngcontent-%COMP%] {\r\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n  border: 0;\r\n  border-radius: 3em;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  line-height: 1;\r\n}\r\n\r\n.storybook-card--primary[_ngcontent-%COMP%] {\r\n  color: white;\r\n  background-color: #1ea7fd;\r\n}\r\n\r\n.storybook-card--secondary[_ngcontent-%COMP%] {\r\n  color: #333;\r\n  background-color: transparent;\r\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\r\n}\r\n\r\n.storybook-card--small[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  padding: 10px 16px;\r\n}\r\n\r\n.storybook-card--medium[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  padding: 11px 20px;\r\n}\r\n\r\n.storybook-card--large[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  padding: 12px 24px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1I7OztxQkFHbUI7RUFDbkIsbUJBQW1CO0VBQ25CLG1EQUFtRDtFQUNuRCx5QkFBeUIsQ0FBQyxHQUFHO0FBQy9COztBQUlBO0VBQ0UsMEVBQTBFO0VBQzFFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsNkJBQTZCO0VBQzdCLHFEQUFxRDtBQUN2RDs7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJjYXJkLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5WZWN0b3Ige1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNjM3LjVweDtcclxuICBoZWlnaHQ6IDgxOXB4O1xyXG4gIGxlZnQ6IGNhbGMoNTAlIC0gNjM3LjVweC8yIC0gMS4yNXB4KTtcclxuICB0b3A6IGNhbGMoNTAlIC0gODE5cHgvMiAtIDAuNXB4KTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgLyogV2lkdGg6IDQyLjY1NjI1JTtcclxuICBsZWZ0OiAyOC42NzE4NzUlO1xyXG4gICByaWdodDogMjguNjcxODc1JTtcclxuICAgV2lkdGg6IDQyLjY1NjI1JTsqL1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgYm94LXNoYWRvdzogLTRweCA0cHggMTBweCAwIHJnYmEoODgsIDE2NiwgMjI4LCAwLjMpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7LyoqL1xyXG59XHJcblxyXG5cclxuXHJcbi5zdG9yeWJvb2stY2FyZCB7XHJcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogM2VtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuLnN0b3J5Ym9vay1jYXJkLS1wcmltYXJ5IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlYTdmZDtcclxufVxyXG4uc3Rvcnlib29rLWNhcmQtLXNlY29uZGFyeSB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAwcHggMHB4IDBweCAxcHggaW5zZXQ7XHJcbn1cclxuLnN0b3J5Ym9vay1jYXJkLS1zbWFsbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTZweDtcclxufVxyXG4uc3Rvcnlib29rLWNhcmQtLW1lZGl1bSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDExcHggMjBweDtcclxufVxyXG4uc3Rvcnlib29rLWNhcmQtLWxhcmdlIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZzogMTJweCAyNHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    42039:
    /*!************************************************************************!*\
      !*** ./src/stories/directive/bubble-avatar/bubble-avatar.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BubbleAvatarComponent": function BubbleAvatarComponent() {
          return (
            /* binding */
            _BubbleAvatarComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _dynamic_comp_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../dynamic-comp.directive */
      50772);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function BubbleAvatarComponent_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.popover);
        }
      }

      function BubbleAvatarComponent_ng_template_2_Template(rf, ctx) {}

      var _c0 = function _c0(a0) {
        return {
          "tooltip-display": a0
        };
      };

      var _BubbleAvatarComponent = /*#__PURE__*/function () {
        function _BubbleAvatarComponent(componentFactoryResolver) {
          _classCallCheck(this, _BubbleAvatarComponent);

          this.componentFactoryResolver = componentFactoryResolver;
          this.show = false;
          this.isDynamic = false;
          this.triggerDetectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.actionButton = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        }

        _createClass(_BubbleAvatarComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this29 = this;

            if (this.options && typeof this.options.content !== "string") {
              this.isDynamic = true;
              var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.options.content);
              var viewContainerRef = this.content.viewContainerRef;
              viewContainerRef.clear();
              this.actionAvatarComponentRef = viewContainerRef.createComponent(componentFactory);
              this.actionAvatarComponentRef.instance.setHeader(this.header);
              this.actionAvatarComponentRef.instance.setBubbleOn(this.bubbleOn);
              this.actionAvatarComponentRef.instance.actionButton.subscribe(function ($event) {
                _this29.actionButton.emit($event);

                console.log("Click: Change it now");
              });
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "showPopup",
          value: function showPopup() {
            if (this.bubbleOn) {
              this.show = true;
              this.triggerDetectionChange.emit();
            }
          }
        }, {
          key: "hidePopup",
          value: function hidePopup() {
            this.show = false;
            this.triggerDetectionChange.emit();
          }
        }, {
          key: "setHeader",
          value: function setHeader(header) {
            var _a;

            this.header = header;
            (_a = this.actionAvatarComponentRef) === null || _a === void 0 ? void 0 : _a.instance.setHeader(this.header);
          }
        }, {
          key: "setBubbleOn",
          value: function setBubbleOn(bubbleOn) {
            this.bubbleOn = bubbleOn;
          }
        }, {
          key: "loadCarComponent",
          value: function loadCarComponent() {
            var _a;

            var _viewContainerRef = this.content.viewContainerRef; //removes all views in that container

            _viewContainerRef.clear();

            var componentFactory = this.componentFactoryResolver.resolveComponentFactory((_a = this.options) === null || _a === void 0 ? void 0 : _a.content); //Create an instance of the component

            var carComponentRef = _viewContainerRef.createComponent(componentFactory);
            /*
                //Pass data to the component
                carComponentRef.instance.image = 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80';
            */

          }
        }]);

        return _BubbleAvatarComponent;
      }();

      _BubbleAvatarComponent.ɵfac = function BubbleAvatarComponent_Factory(t) {
        return new (t || _BubbleAvatarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver));
      };

      _BubbleAvatarComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _BubbleAvatarComponent,
        selectors: [["bubble-avatar"]],
        viewQuery: function BubbleAvatarComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_dynamic_comp_directive__WEBPACK_IMPORTED_MODULE_0__.DynamicCompDirective, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
          }
        },
        inputs: {
          display: "display",
          popover: "popover",
          bubbleOn: "bubbleOn",
          header: "header",
          options: "options"
        },
        outputs: {
          triggerDetectionChange: "triggerDetectionChange",
          actionButton: "actionButton"
        },
        decls: 3,
        vars: 4,
        consts: [[1, "tooltip", 3, "ngClass"], [4, "ngIf"], ["appDynamicComp", ""]],
        template: function BubbleAvatarComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BubbleAvatarComponent_span_1_Template, 2, 1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BubbleAvatarComponent_ng_template_2_Template, 0, 0, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx.show));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isDynamic);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _dynamic_comp_directive__WEBPACK_IMPORTED_MODULE_0__.DynamicCompDirective],
        styles: [".wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  text-align: center;\n  background-color: yellow;\n  cursor: pointer;\n  -webkit-transform: translateZ(0);\n  \n  -webkit-font-smoothing: antialiased;\n  \n}\n\n.tooltip[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  position: absolute;\n  border: 2px solid #3D8ECF;\n  width: 200px;\n  border-radius: 10px;\n  background: #fff;\n  top: 100%;\n  color: #000000;\n  display: block;\n  left: 17px;\n  margin-bottom: 15px;\n  opacity: 0;\n  padding: 20px;\n  pointer-events: none;\n  \n  transform: translateY(10px);\n  transition: all 0.25s ease-out;\n  -ms-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n  -o-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n}\n\n\n\n.tooltip[_ngcontent-%COMP%]:before {\n  border-left: solid transparent 10px;\n  border-right: solid transparent;\n  border-right-width: 10px;\n  border-bottom: solid #3D8ECF 10px;\n  top: -11.5px;\n  content: \"\";\n  height: 7px;\n  left: 20%;\n  margin-left: -13px;\n  position: absolute;\n  width: 0;\n  \n}\n\n\n\n.tooltip[_ngcontent-%COMP%]::after {\n  border-left: solid transparent 10px;\n  border-right: solid transparent;\n  border-right-width: 10px;\n  border-bottom: solid #FFFFFF 10px;\n  \n  top: -9px;\n  content: \"\";\n  height: 7px;\n  left: 20%;\n  margin-left: -13px;\n  position: absolute;\n  width: 0;\n}\n\n.tooltip-display[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateY(0px);\n}\n\n\n\n.lte8[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.lte8[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1YmJsZS1hdmF0YXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUFrQyx1QkFBQTtFQUNsQyxtQ0FBQTtFQUFxQyw4QkFBQTtBQUV2Qzs7QUFDQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFLQSwyQkFBQTtFQUtBLDhCQUFBO0VBR0EsK0NBQUE7RUFDQSw4Q0FBQTtFQUNBLDJDQUFBO0FBRUY7O0FBQ0EsbUZBQUE7O0FBQ0E7RUFDRSxtQ0FBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUdBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBOzs7Ozs7O2VBQUE7QUFPRjs7QUFHQSxzQ0FBQTs7QUFDQTtFQUNFLG1DQUFBO0VBQ0EsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLGlDQUFBO0VBRUE7OEJBQUE7RUFFQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFERjs7QUFTQTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtFQUtBLDBCQUFBO0FBTkY7O0FBU0EsNkNBQUE7O0FBQ0E7RUFDRSxhQUFBO0FBTkY7O0FBU0E7RUFDRSxjQUFBO0FBTkYiLCJmaWxlIjoiYnViYmxlLWF2YXRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcclxuXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTsgLyogd2Via2l0IGZsaWNrZXIgZml4ICovXHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7IC8qIHdlYmtpdCB0ZXh0IHJlbmRlcmluZyBmaXggKi9cclxufVxyXG5cclxuLnRvb2x0aXAge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzRDhFQ0Y7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICB0b3A6IDEwMCU7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbGVmdDogMTdweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAvKndpZHRoOiAxMDAlOyovXHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLW91dDtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1vdXQ7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIC4yNXMgZWFzZS1vdXQ7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjI4KTtcclxuICAtbXMtYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjI4KTtcclxuICAtby1ib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xyXG4gIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XHJcbn1cclxuXHJcbi8qIFRoaXMgYnJpZGdlcyB0aGUgZ2FwIHNvIHlvdSBjYW4gbW91c2UgaW50byB0aGUgdG9vbHRpcCB3aXRob3V0IGl0IGRpc2FwcGVhcmluZyAqL1xyXG4udG9vbHRpcDpiZWZvcmUge1xyXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCB0cmFuc3BhcmVudCAxMHB4O1xyXG4gIGJvcmRlci1yaWdodDogc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAxMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkICAjM0Q4RUNGIDEwcHg7XHJcblxyXG5cclxuICB0b3A6IC0xMS41cHg7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDdweDtcclxuICBsZWZ0OiAyMCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xM3B4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMDtcclxuICAvKlxyXG4gIHRvcDogLTQwcHg7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlOyovXHJcbn1cclxuXHJcbi8qIENTUyBUcmlhbmdsZXMgLSBzZWUgVHJldm9yJ3MgcG9zdCAqL1xyXG4udG9vbHRpcDo6YWZ0ZXIge1xyXG4gIGJvcmRlci1sZWZ0OiBzb2xpZCB0cmFuc3BhcmVudCAxMHB4O1xyXG4gIGJvcmRlci1yaWdodDogc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOjEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgICNGRkZGRkYgMTBweDtcclxuXHJcbiAgLypib3JkZXItYmxvY2stc3RhcnQ6IHNvbGlkO1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCAjM0Q4RUNGOyovXHJcbiAgdG9wOiAtOXB4O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiA3cHg7XHJcbiAgbGVmdDogMjAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTNweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuLnRvb2x0aXAtZGlzcGxheSB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBwb2ludGVyLWV2ZW50czogYXV0bztcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XHJcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG59XHJcblxyXG4vKiBJRSBjYW4ganVzdCBzaG93L2hpZGUgd2l0aCBubyB0cmFuc2l0aW9uICovXHJcbi5sdGU4IC53cmFwcGVyIC50b29sdGlwIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ubHRlOCAud3JhcHBlcjpob3ZlciAudG9vbHRpcCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    66219:
    /*!******************************************************************!*\
      !*** ./src/stories/directive/bubble-avatar/popover.directive.ts ***!
      \******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PopoverDirective": function PopoverDirective() {
          return (
            /* binding */
            _PopoverDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _bubble_avatar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bubble-avatar.component */
      42039);

      var _PopoverDirective = /*#__PURE__*/function () {
        function _PopoverDirective(eleRef, el, viewContainer, componentFactoryResolver) {
          _classCallCheck(this, _PopoverDirective);

          this.eleRef = eleRef;
          this.el = el;
          this.viewContainer = viewContainer;
          this.componentFactoryResolver = componentFactoryResolver;
          this.header = '';
          this.bubbleOn = false;
          this.actionButton = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.avatarButton = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        }

        _createClass(_PopoverDirective, [{
          key: "onMouseOver",
          value: function onMouseOver($event) {
            var _a, _b, _c;

            (_a = this.popoverComponentRef) === null || _a === void 0 ? void 0 : _a.instance.setHeader(this.header);
            (_b = this.popoverComponentRef) === null || _b === void 0 ? void 0 : _b.instance.setBubbleOn(this.bubbleOn);
            (_c = this.popoverComponentRef) === null || _c === void 0 ? void 0 : _c.instance.showPopup(); //this.eleRef.nativeElement.style.color = 'blue';
          }
        }, {
          key: "onLeave",
          value: function onLeave($event) {
            var _a;

            (_a = this.popoverComponentRef) === null || _a === void 0 ? void 0 : _a.instance.hidePopup();
          }
        }, {
          key: "onClick",
          value: function onClick($event) {
            var _a, _b, _c;

            (_a = this.popoverComponentRef) === null || _a === void 0 ? void 0 : _a.instance.setHeader(this.header);
            (_b = this.popoverComponentRef) === null || _b === void 0 ? void 0 : _b.instance.setBubbleOn(this.bubbleOn);
            (_c = this.popoverComponentRef) === null || _c === void 0 ? void 0 : _c.instance.showPopup();
          }
          /*
            @HostListener('mouseover') onMouseOver() {
              this.popoverComponentRef?.instance.showPopup();
              this.eleRef.nativeElement.style.color = this.colorName;
            }*/

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this30 = this;

            var _a;

            var factory = this.componentFactoryResolver.resolveComponentFactory(_bubble_avatar_component__WEBPACK_IMPORTED_MODULE_0__.BubbleAvatarComponent);
            var comp = factory.create(this.viewContainer.injector);
            comp.instance.display = "I test some content";
            comp.instance.popover = (_a = this.popover) === null || _a === void 0 ? void 0 : _a.content;
            comp.instance.options = this.popover;
            comp.instance.header = this.header;
            comp.instance.bubbleOn = this.bubbleOn;
            this.popoverComponentRef = comp;
            this.el.nativeElement.classList.add("wrapper");
            this.el.nativeElement.appendChild(comp.location.nativeElement);
            comp.hostView.detectChanges();
            comp.instance.triggerDetectionChange.subscribe(function () {
              comp.hostView.detectChanges();
            });
            comp.instance.actionButton.subscribe(function ($event) {
              _this30.actionButton.emit($event);
            });
          }
        }]);

        return _PopoverDirective;
      }();

      _PopoverDirective.ɵfac = function PopoverDirective_Factory(t) {
        return new (t || _PopoverDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver));
      };

      _PopoverDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _PopoverDirective,
        selectors: [["", "twPopover", ""]],
        hostBindings: function PopoverDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function PopoverDirective_mouseover_HostBindingHandler($event) {
              return ctx.onMouseOver($event);
            })("mouseleave", function PopoverDirective_mouseleave_HostBindingHandler($event) {
              return ctx.onLeave($event);
            })("click", function PopoverDirective_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            });
          }
        },
        inputs: {
          popover: ["twPopover", "popover"],
          highlight: "highlight",
          header: "header",
          bubbleOn: "bubbleOn"
        },
        outputs: {
          actionButton: "actionButton",
          avatarButton: "avatarButton"
        }
      });
      /***/
    },

    /***/
    48771:
    /*!**********************************************************************!*\
      !*** ./src/stories/directive/bubble-input/bubble-input.component.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BubbleInputComponent": function BubbleInputComponent() {
          return (
            /* binding */
            _BubbleInputComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _dynamic_comp_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../dynamic-comp.directive */
      50772);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function BubbleInputComponent_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.popover);
        }
      }

      function BubbleInputComponent_ng_template_2_Template(rf, ctx) {}

      var _c0 = function _c0(a0) {
        return {
          "tooltip-display": a0
        };
      };

      var _BubbleInputComponent = /*#__PURE__*/function () {
        function _BubbleInputComponent(componentFactoryResolver) {
          _classCallCheck(this, _BubbleInputComponent);

          this.componentFactoryResolver = componentFactoryResolver;
          this.show = false;
          this.isDynamic = false;
          this.triggerDetectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        }

        _createClass(_BubbleInputComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.options && typeof this.options.content !== "string") {
              this.isDynamic = true;
              var componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.options.content);
              var viewContainerRef = this.content.viewContainerRef;
              viewContainerRef.clear();
              this.actionInputComponentRef = viewContainerRef.createComponent(componentFactory);
              this.actionInputComponentRef.instance.setConditions(this.data);
              this.actionInputComponentRef.instance.setHeader(this.header);
            }
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {}
        }, {
          key: "showPopup",
          value: function showPopup() {
            var _a;

            if (this.data != undefined && ((_a = this.data) === null || _a === void 0 ? void 0 : _a.length) > 0) {
              this.show = true;
              this.triggerDetectionChange.emit();
            }
          }
        }, {
          key: "hidePopup",
          value: function hidePopup() {
            this.show = false;
            this.triggerDetectionChange.emit();
          }
        }, {
          key: "setData",
          value: function setData(data) {
            var _a;

            this.data = data;
            (_a = this.actionInputComponentRef) === null || _a === void 0 ? void 0 : _a.instance.setConditions(this.data);
          }
        }, {
          key: "setHeader",
          value: function setHeader(header) {
            var _a;

            this.header = header;
            (_a = this.actionInputComponentRef) === null || _a === void 0 ? void 0 : _a.instance.setHeader(this.header);
          }
        }]);

        return _BubbleInputComponent;
      }();

      _BubbleInputComponent.ɵfac = function BubbleInputComponent_Factory(t) {
        return new (t || _BubbleInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver));
      };

      _BubbleInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _BubbleInputComponent,
        selectors: [["bubble-input"]],
        viewQuery: function BubbleInputComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_dynamic_comp_directive__WEBPACK_IMPORTED_MODULE_0__.DynamicCompDirective, 7);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.content = _t.first);
          }
        },
        inputs: {
          display: "display",
          popover: "popover",
          data: "data",
          header: "header",
          options: "options"
        },
        outputs: {
          triggerDetectionChange: "triggerDetectionChange"
        },
        decls: 3,
        vars: 4,
        consts: [[1, "tooltip", 3, "ngClass"], [4, "ngIf"], ["appDynamicComp", ""]],
        template: function BubbleInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, BubbleInputComponent_span_1_Template, 2, 1, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, BubbleInputComponent_ng_template_2_Template, 0, 0, "ng-template", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx.show));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isDynamic);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _dynamic_comp_directive__WEBPACK_IMPORTED_MODULE_0__.DynamicCompDirective],
        styles: [".wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-block;\n  text-align: center;\n  background-color: yellow;\n  cursor: pointer;\n  -webkit-transform: translateZ(0);\n  \n  -webkit-font-smoothing: antialiased;\n  \n}\n\n.tooltip[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  position: absolute;\n  border: 2px solid #3D8ECF;\n  width: 253px;\n  border-radius: 10px;\n  background: #fff;\n  bottom: 55%;\n  color: #000000;\n  display: block;\n  right: -17px;\n  margin-bottom: 15px;\n  opacity: 0;\n  padding: 20px;\n  pointer-events: none;\n  transform: translateY(10px);\n  transition: all 0.25s ease-out;\n  -ms-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n  -o-box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.28);\n}\n\n\n\n.tooltip[_ngcontent-%COMP%]:before {\n  border-left: solid transparent 10px;\n  border-right: solid transparent 10px;\n  border-top: solid #3D8ECF 10px;\n  bottom: -11.5px;\n  content: \"\";\n  height: 7px;\n  right: 20%;\n  margin-left: -13px;\n  position: absolute;\n  width: 0;\n  \n}\n\n\n\n.tooltip[_ngcontent-%COMP%]::after {\n  border-left: solid transparent 10px;\n  border-right: solid transparent 10px;\n  border-top: solid #FFFFFF 10px;\n  \n  bottom: -9px;\n  content: \"\";\n  height: 7px;\n  right: 20%;\n  margin-left: -13px;\n  position: absolute;\n  width: 0;\n}\n\n.tooltip-display[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n  transform: translateY(0px);\n}\n\n\n\n.lte8[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]   .tooltip[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.lte8[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]:hover   .tooltip[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1YmJsZS1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQWtDLHVCQUFBO0VBQ2xDLG1DQUFBO0VBQXFDLDhCQUFBO0FBRXZDOztBQUNBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBS0EsMkJBQUE7RUFLQSw4QkFBQTtFQUdBLCtDQUFBO0VBQ0EsOENBQUE7RUFDQSwyQ0FBQTtBQUVGOztBQUNBLG1GQUFBOztBQUNBO0VBQ0UsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBR0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0E7Ozs7Ozs7ZUFBQTtBQU9GOztBQUdBLHNDQUFBOztBQUNBO0VBQ0UsbUNBQUE7RUFDQSxvQ0FBQTtFQUNBLDhCQUFBO0VBRUE7OEJBQUE7RUFFQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUFERjs7QUFTQTtFQUNFLFVBQUE7RUFDQSxvQkFBQTtFQUtBLDBCQUFBO0FBTkY7O0FBU0EsNkNBQUE7O0FBQ0E7RUFDRSxhQUFBO0FBTkY7O0FBU0E7RUFDRSxjQUFBO0FBTkYiLCJmaWxlIjoiYnViYmxlLWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xyXG5cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApOyAvKiB3ZWJraXQgZmxpY2tlciBmaXggKi9cclxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDsgLyogd2Via2l0IHRleHQgcmVuZGVyaW5nIGZpeCAqL1xyXG59XHJcblxyXG4udG9vbHRpcCB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgIzNEOEVDRjtcclxuICB3aWR0aDogMjUzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvdHRvbTogNTUlO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHJpZ2h0OiAtMTdweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xyXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTBweCk7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLW91dDtcclxuICAtbW96LXRyYW5zaXRpb246IGFsbCAuMjVzIGVhc2Utb3V0O1xyXG4gIC1tcy10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjI1cyBlYXNlLW91dDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xyXG4gIC1tcy1ib3gtc2hhZG93OiAycHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMjgpO1xyXG4gIC1vLWJveC1zaGFkb3c6IDJweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4yOCk7XHJcbiAgYm94LXNoYWRvdzogMnB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjI4KTtcclxufVxyXG5cclxuLyogVGhpcyBicmlkZ2VzIHRoZSBnYXAgc28geW91IGNhbiBtb3VzZSBpbnRvIHRoZSB0b29sdGlwIHdpdGhvdXQgaXQgZGlzYXBwZWFyaW5nICovXHJcbi50b29sdGlwOmJlZm9yZSB7XHJcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIHRyYW5zcGFyZW50IDEwcHg7XHJcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCB0cmFuc3BhcmVudCAxMHB4O1xyXG4gIGJvcmRlci10b3A6IHNvbGlkICAjM0Q4RUNGIDEwcHg7XHJcblxyXG5cclxuICBib3R0b206IC0xMS41cHg7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDdweDtcclxuICByaWdodDogMjAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTNweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDA7XHJcbiAgLypcclxuICB0b3A6IC00MHB4O1xyXG4gIGNvbnRlbnQ6IFwiIFwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBsZWZ0OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTsqL1xyXG59XHJcblxyXG4vKiBDU1MgVHJpYW5nbGVzIC0gc2VlIFRyZXZvcidzIHBvc3QgKi9cclxuLnRvb2x0aXA6OmFmdGVyIHtcclxuICBib3JkZXItbGVmdDogc29saWQgdHJhbnNwYXJlbnQgMTBweDtcclxuICBib3JkZXItcmlnaHQ6IHNvbGlkIHRyYW5zcGFyZW50IDEwcHg7XHJcbiAgYm9yZGVyLXRvcDogc29saWQgICNGRkZGRkYgMTBweDtcclxuXHJcbiAgLypib3JkZXItYmxvY2stc3RhcnQ6IHNvbGlkO1xyXG4gIGJvcmRlcjogMTBweCBzb2xpZCAjM0Q4RUNGOyovXHJcbiAgYm90dG9tOiAtOXB4O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgaGVpZ2h0OiA3cHg7XHJcbiAgcmlnaHQ6IDIwJTtcclxuICBtYXJnaW4tbGVmdDogLTEzcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAwO1xyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi50b29sdGlwLWRpc3BsYXkge1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcclxufVxyXG5cclxuLyogSUUgY2FuIGp1c3Qgc2hvdy9oaWRlIHdpdGggbm8gdHJhbnNpdGlvbiAqL1xyXG4ubHRlOCAud3JhcHBlciAudG9vbHRpcCB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmx0ZTggLndyYXBwZXI6aG92ZXIgLnRvb2x0aXAge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    40019:
    /*!***********************************************************************!*\
      !*** ./src/stories/directive/bubble-input/popover-input.directive.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PopoverInputDirective": function PopoverInputDirective() {
          return (
            /* binding */
            _PopoverInputDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _bubble_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./bubble-input.component */
      48771);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _PopoverInputDirective = /*#__PURE__*/function () {
        function _PopoverInputDirective(eleRef, el, viewContainer, componentFactoryResolver) {
          _classCallCheck(this, _PopoverInputDirective);

          this.eleRef = eleRef;
          this.el = el;
          this.viewContainer = viewContainer;
          this.componentFactoryResolver = componentFactoryResolver;
          this.header = '';
        }

        _createClass(_PopoverInputDirective, [{
          key: "onMouseOver",
          value: function onMouseOver($event) {
            var _a, _b;

            (_a = this.popoverComponentRef) === null || _a === void 0 ? void 0 : _a.instance.setData(this.data);
            (_b = this.popoverComponentRef) === null || _b === void 0 ? void 0 : _b.instance.showPopup(); //this.eleRef.nativeElement.style.color = 'blue';
          }
        }, {
          key: "onLeave",
          value: function onLeave($event) {
            var _a;

            (_a = this.popoverComponentRef) === null || _a === void 0 ? void 0 : _a.instance.hidePopup();
          }
        }, {
          key: "onClick",
          value: function onClick($event) {
            var _a, _b;

            (_a = this.popoverComponentRef) === null || _a === void 0 ? void 0 : _a.instance.setData(this.data);
            (_b = this.popoverComponentRef) === null || _b === void 0 ? void 0 : _b.instance.showPopup();
          }
        }, {
          key: "onDataChange",
          value: function onDataChange($event) {
            var _a, _b;

            (_a = this.popoverComponentRef) === null || _a === void 0 ? void 0 : _a.instance.setData(this.data);
            (_b = this.popoverComponentRef) === null || _b === void 0 ? void 0 : _b.instance.showPopup();
          }
          /*
            @HostListener('mouseover') onMouseOver() {
              this.popoverComponentRef?.instance.showPopup();
              this.eleRef.nativeElement.style.color = this.colorName;
            }*/

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a;

            var factory = this.componentFactoryResolver.resolveComponentFactory(_bubble_input_component__WEBPACK_IMPORTED_MODULE_0__.BubbleInputComponent);
            var comp = factory.create(this.viewContainer.injector);
            comp.instance.display = "I test some content";
            comp.instance.popover = (_a = this.popover) === null || _a === void 0 ? void 0 : _a.content;
            comp.instance.options = this.popover;
            comp.instance.data = this.data;
            comp.instance.header = this.header;
            this.popoverComponentRef = comp;
            this.el.nativeElement.classList.add("wrapper");
            this.el.nativeElement.appendChild(comp.location.nativeElement);
            comp.hostView.detectChanges();
            comp.instance.triggerDetectionChange.subscribe(function () {
              comp.hostView.detectChanges();
            });
          }
        }]);

        return _PopoverInputDirective;
      }();

      _PopoverInputDirective.ɵfac = function PopoverInputDirective_Factory(t) {
        return new (t || _PopoverInputDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ComponentFactoryResolver));
      };

      _PopoverInputDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _PopoverInputDirective,
        selectors: [["", "inputPopover", ""]],
        hostBindings: function PopoverInputDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseover", function PopoverInputDirective_mouseover_HostBindingHandler($event) {
              return ctx.onMouseOver($event);
            })("mouseleave", function PopoverInputDirective_mouseleave_HostBindingHandler($event) {
              return ctx.onLeave($event);
            })("click", function PopoverInputDirective_click_HostBindingHandler($event) {
              return ctx.onClick($event);
            })("keyup", function PopoverInputDirective_keyup_HostBindingHandler($event) {
              return ctx.onDataChange($event);
            });
          }
        },
        inputs: {
          popover: ["inputPopover", "popover"],
          highlight: "highlight",
          data: "data",
          header: "header"
        }
      });
      /***/
    },

    /***/
    50772:
    /*!*********************************************************!*\
      !*** ./src/stories/directive/dynamic-comp.directive.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DynamicCompDirective": function DynamicCompDirective() {
          return (
            /* binding */
            _DynamicCompDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _DynamicCompDirective = /*#__PURE__*/_createClass(function _DynamicCompDirective(viewContainerRef) {
        _classCallCheck(this, _DynamicCompDirective);

        this.viewContainerRef = viewContainerRef;
      });

      _DynamicCompDirective.ɵfac = function DynamicCompDirective_Factory(t) {
        return new (t || _DynamicCompDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef));
      };

      _DynamicCompDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _DynamicCompDirective,
        selectors: [["", "appDynamicComp", ""]]
      });
      /***/
    },

    /***/
    38312:
    /*!**************************************************************!*\
      !*** ./src/stories/forms/login-form/login-form.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            LoginFormComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _cards_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../cards/card.component */
      56970);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _spinners_spinner1_spinner1_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../spinners/spinner1/spinner1.component */
      79899);
      /* harmony import */


      var _inputs_input_story_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../inputs/input/story-input.component */
      50899);
      /* harmony import */


      var _buttons_button_continue_button_continue_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../buttons/button-continue/button-continue.component */
      34591);
      /* harmony import */


      var _app_storybook_pipes_api_error_message_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../app/storybook/pipes/api-error-message.pipe */
      57074);

      function LoginFormComponent_storybook_spinner1_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "storybook-spinner1");
        }
      }

      function LoginFormComponent_div_10_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "isRegSuccess");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function LoginFormComponent_div_10_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function LoginFormComponent_div_10_p_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "apiErrorMessage");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("* ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](2, 1, ctx_r4.loginErrorMessage, ctx_r4.param), "");
        }
      }

      function LoginFormComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, LoginFormComponent_div_10_div_2_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, LoginFormComponent_div_10_div_3_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "storybook-input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onArchiveInput", function LoginFormComponent_div_10_Template_storybook_input_onArchiveInput_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r5.onArchiveInput.emit($event);
          })("onPinInput", function LoginFormComponent_div_10_Template_storybook_input_onPinInput_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r7.onPinInput.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "storybook-input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onArchiveInput", function LoginFormComponent_div_10_Template_storybook_input_onArchiveInput_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r8.onArchiveInput.emit($event);
          })("onPinInput", function LoginFormComponent_div_10_Template_storybook_input_onPinInput_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r9.onPinInput.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, LoginFormComponent_div_10_p_9_Template, 3, 4, "p", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginFormComponent_div_10_Template_a_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r10.openReplacePassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "storybook-button-continue", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function LoginFormComponent_div_10_Template_storybook_button_continue_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r11.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.isLoggedIn && ctx_r1.storyInputsInOrder.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("storyInput", ctx_r1.storyInputsInOrder[0])("currentForm", ctx_r1.mForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("storyInput", ctx_r1.storyInputsInOrder[1])("currentForm", ctx_r1.mForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.isLoginFailed);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", "Forgot password?", " ");
        }
      } //import {ApiErrorMessageService} from "../../../app/storybook/pipes/api-error-message.service";
      //import {ApiErrorMessageService} from "../../../app/storybook/pipes/api-error-message.service";


      var LoginFormComponent = /*#__PURE__*/function () {
        function LoginFormComponent() {
          _classCallCheck(this, LoginFormComponent);

          this.param = {
            language: 'login-main'
          };
          this.isLoginFailed = false;
          this.loginErrorMessage = '';
          this.isLoading = false;
          /**
           * @ignore
           * Component property to define ordering of tasks
           */

          this.storyInputsInOrder = [];
          this.mForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({});
          this.isLoggedIn = false; // tslint:disable-next-line: no-output-on-prefix

          this.onPinInput = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter(); // tslint:disable-next-line: no-output-on-prefix

          this.onArchiveInput = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
          this.sendLoginReq = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        }

        _createClass(LoginFormComponent, [{
          key: "openReplacePassword",
          value: function openReplacePassword() {//this.replacePassFormService.open(ReplacePassForm2Component);
          }
        }, {
          key: "storyInputs",
          set: function set(arr) {
            var initialTasks = [].concat(_toConsumableArray(arr.filter(function (t) {
              return t.state === 'USER NAME';
            })), _toConsumableArray(arr.filter(function (t) {
              return t.state !== 'USER NAME';
            })));
            var filteredTasks = initialTasks.filter(function (t) {
              return t.type === 'password' || t.state === 'USER NAME';
            });
            this.storyInputsInOrder = filteredTasks.filter(function (t) {
              return t.type === 'password' || t.state === 'USER NAME';
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            console.warn('Login Request!');
            this.sendLoginReq.emit();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "userName",
          get: function get() {
            var _a;

            return (_a = this.mForm) === null || _a === void 0 ? void 0 : _a.get('username');
          }
        }, {
          key: "email",
          get: function get() {
            var _a;

            return (_a = this.mForm) === null || _a === void 0 ? void 0 : _a.get('email');
          }
        }, {
          key: "password",
          get: function get() {
            var _a;

            return (_a = this.mForm) === null || _a === void 0 ? void 0 : _a.get('password');
          }
        }, {
          key: "phone",
          get: function get() {
            var _a;

            return (_a = this.mForm) === null || _a === void 0 ? void 0 : _a.get('phone');
          }
        }]);

        return LoginFormComponent;
      }();

      LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) {
        return new (t || LoginFormComponent)();
      };

      LoginFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: LoginFormComponent,
        selectors: [["storybook-login-form"]],
        inputs: {
          formService: "formService",
          isLoginFailed: "isLoginFailed",
          loginErrorMessage: "loginErrorMessage",
          isLoading: "isLoading",
          mForm: "mForm",
          isLoggedIn: "isLoggedIn",
          storyInputs: "storyInputs"
        },
        outputs: {
          onPinInput: "onPinInput",
          onArchiveInput: "onArchiveInput",
          sendLoginReq: "sendLoginReq"
        },
        decls: 11,
        vars: 3,
        consts: [["id", "main-login-card", 1, "col-md-12"], [1, "card-container"], [1, "h-100", "d-flex", "align-items-center", "justify-content-center"], [1, "form-header"], [4, "ngIf"], ["name", "currentForm", 3, "formGroup"], ["class", "Vector", 4, "ngIf"], [1, "Vector"], [1, "login-button"], [3, "storyInput", "currentForm", "onArchiveInput", "onPinInput"], [1, "thematic-break"], ["role", "alert", 1, "login-failed-message"], ["href", "#/login", 1, "forgot-password", 3, "click"], ["size", "medium", "label", "Continue ", "type", "button", 3, "click"]],
        template: function LoginFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "storybook-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Aeonix App Center");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, LoginFormComponent_storybook_spinner1_7_Template, 1, 0, "storybook-spinner1", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, LoginFormComponent_div_10_Template, 13, 8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoading);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.mForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
          }
        },
        directives: [_cards_card_component__WEBPACK_IMPORTED_MODULE_0__["default"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _spinners_spinner1_spinner1_component__WEBPACK_IMPORTED_MODULE_1__.Spinner1Component, _inputs_input_story_input_component__WEBPACK_IMPORTED_MODULE_2__.StoryInputComponent, _buttons_button_continue_button_continue_component__WEBPACK_IMPORTED_MODULE_3__.ButtonContinueComponent],
        pipes: [_app_storybook_pipes_api_error_message_pipe__WEBPACK_IMPORTED_MODULE_4__.ApiErrorMessagePipe],
        styles: [".Vector[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 637.5px;\r\n  height: 819px;\r\n  left: calc(50% - 637.5px/2 - 1.25px);\r\n  top: calc(50% - 819px/2 - 0.5px);\r\n}\r\n\r\n.form[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 3.18%;\r\n  right: 14.78%;\r\n  top: 0;\r\n  bottom: 0;\r\n  border-radius: 14px;\r\n  box-shadow: -4px 4px 10px 0 rgba(88, 166, 228, 0.3);\r\n  background-color: #fff;\r\n}\r\n\r\nstorybook-spinner1[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 70px;\r\n  height: 70px;\r\n  left: calc(50% - 75px/2 - 0.25px);\r\n  top: calc(50% - 38px/2 - 0.5px);\r\n}\r\n\r\n.card-container.card[_ngcontent-%COMP%] {\r\n  max-width: 400px !important;\r\n  padding: 10px 10px;\r\n}\r\n\r\n.col-md-12[_ngcontent-%COMP%]{\r\n  position: center;\r\n  width: 637.5px;\r\n  height: 819px;\r\n  left: calc(50% - 637.5px/2 - 0.25px);\r\n  top: calc(50% - 819px/2 - 0.5px);\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 5.18%;\r\n  right: 4.78%;\r\n  top: 0;\r\n  bottom: 0;\r\n  border-radius: 14px;\r\n  box-shadow: -4px 4px 10px 0 rgba(88, 166, 228, 0.3);\r\n  background-color: #fff;\r\n}\r\n\r\n.form-header[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 12.94%;\r\n  bottom: 77.05%;\r\n\r\n  width: 447px;\r\n  height: 82px;\r\n  flex-grow: 0;\r\n  margin: 0 0 19.8px;\r\n  font-family: \"Noto Sans\", ui-serif;\r\n  font-size: 40px;\r\n  font-weight: bolder;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: 45px;\r\n  letter-spacing: -0.011px;\r\n  text-align: left;\r\n  color: #000000;\r\n}\r\n\r\n.login-button[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 445px;\r\n  height: 102px;\r\n  left: calc(50% - 445px/2 - 0.5px);\r\n  top: calc(50% - 101.16px/2 - 171.58px);\r\n}\r\n\r\n.forgot-password[_ngcontent-%COMP%] {\r\n  \r\n\r\n  font-family: \"Noto Sans\", ui-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 17px;\r\n  line-height: 31px;\r\n  \r\n\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  letter-spacing: -0.011em;\r\n  -webkit-text-decoration-line: underline;\r\n          text-decoration-line: underline;\r\n\r\n  color: #000000;\r\n}\r\n\r\n.thematic-break[_ngcontent-%COMP%] {\r\n  margin: 20px 2px 16px 2.5px;\r\n  background-color: #3d8ecf;\r\n  border-top-width: 1px;\r\n  border-top-color: rgb(61, 142, 207);\r\n  border-top-style: solid;\r\n\r\n\r\n\r\n}\r\n\r\n.login-failed-message[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 55px;\r\n\r\n\r\n  \r\n  font-family: Noto Sans, ui-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 17px;\r\n  line-height: 31px;\r\n  \r\n\r\n  align-items: start;\r\n  letter-spacing: -0.011em;\r\n\r\n  \r\n\r\n  color: #FA4F4F;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWZvcm0uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLE1BQU07RUFDTixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLG1EQUFtRDtFQUNuRCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixpQ0FBaUM7RUFDakMsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sU0FBUztFQUNULG1CQUFtQjtFQUNuQixtREFBbUQ7RUFDbkQsc0JBQXNCO0FBQ3hCOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxjQUFjOztFQUVkLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixpQ0FBaUM7RUFDakMsc0NBQXNDO0FBQ3hDOztBQUdBO0VBQ0Usd0JBQXdCOztFQUV4QixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFDQUFxQzs7RUFFckMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsd0JBQXdCO0VBQ3hCLHVDQUErQjtVQUEvQiwrQkFBK0I7O0VBRS9CLGNBQWM7QUFDaEI7O0FBSUE7RUFDRSwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsdUJBQXVCOzs7O0FBSXpCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7OztFQUdaLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFDQUFxQzs7RUFFckMsa0JBQWtCO0VBQ2xCLHdCQUF3Qjs7RUFFeEIsUUFBUTs7RUFFUixjQUFjOztBQUVoQiIsImZpbGUiOiJsb2dpbi1mb3JtLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5WZWN0b3Ige1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNjM3LjVweDtcclxuICBoZWlnaHQ6IDgxOXB4O1xyXG4gIGxlZnQ6IGNhbGMoNTAlIC0gNjM3LjVweC8yIC0gMS4yNXB4KTtcclxuICB0b3A6IGNhbGMoNTAlIC0gODE5cHgvMiAtIDAuNXB4KTtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAzLjE4JTtcclxuICByaWdodDogMTQuNzglO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBib3gtc2hhZG93OiAtNHB4IDRweCAxMHB4IDAgcmdiYSg4OCwgMTY2LCAyMjgsIDAuMyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuc3Rvcnlib29rLXNwaW5uZXIxIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIGxlZnQ6IGNhbGMoNTAlIC0gNzVweC8yIC0gMC4yNXB4KTtcclxuICB0b3A6IGNhbGMoNTAlIC0gMzhweC8yIC0gMC41cHgpO1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIuY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxufVxyXG4uY29sLW1kLTEye1xyXG4gIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDYzNy41cHg7XHJcbiAgaGVpZ2h0OiA4MTlweDtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDYzNy41cHgvMiAtIDAuMjVweCk7XHJcbiAgdG9wOiBjYWxjKDUwJSAtIDgxOXB4LzIgLSAwLjVweCk7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNS4xOCU7XHJcbiAgcmlnaHQ6IDQuNzglO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBib3gtc2hhZG93OiAtNHB4IDRweCAxMHB4IDAgcmdiYSg4OCwgMTY2LCAyMjgsIDAuMyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi5mb3JtLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTIuOTQlO1xyXG4gIGJvdHRvbTogNzcuMDUlO1xyXG5cclxuICB3aWR0aDogNDQ3cHg7XHJcbiAgaGVpZ2h0OiA4MnB4O1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBtYXJnaW46IDAgMCAxOS44cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zXCIsIHVpLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogNDVweDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDExcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLmxvZ2luLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA0NDVweDtcclxuICBoZWlnaHQ6IDEwMnB4O1xyXG4gIGxlZnQ6IGNhbGMoNTAlIC0gNDQ1cHgvMiAtIDAuNXB4KTtcclxuICB0b3A6IGNhbGMoNTAlIC0gMTAxLjE2cHgvMiAtIDE3MS41OHB4KTtcclxufVxyXG5cclxuXHJcbi5mb3Jnb3QtcGFzc3dvcmQge1xyXG4gIC8qIEQgVW5kZXJMaW5lIFJlZ3VsYXIgKi9cclxuXHJcbiAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zXCIsIHVpLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogMzFweDtcclxuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMTgzJSAqL1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMTFlbTtcclxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG5cclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuXHJcblxyXG4udGhlbWF0aWMtYnJlYWsge1xyXG4gIG1hcmdpbjogMjBweCAycHggMTZweCAyLjVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2Q4ZWNmO1xyXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcclxuICBib3JkZXItdG9wLWNvbG9yOiByZ2IoNjEsIDE0MiwgMjA3KTtcclxuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcclxuXHJcblxyXG5cclxufVxyXG5cclxuLmxvZ2luLWZhaWxlZC1tZXNzYWdlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG5cclxuXHJcbiAgLyogRCBSZWd1bGFyICovXHJcbiAgZm9udC1mYW1pbHk6IE5vdG8gU2FucywgdWktc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxODMlICovXHJcblxyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDExZW07XHJcblxyXG4gIC8qIFJlZCAqL1xyXG5cclxuICBjb2xvcjogI0ZBNEY0RjtcclxuXHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    36483:
    /*!************************************************************************!*\
      !*** ./src/stories/forms/my-account-form/my-account-form.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            MyAccountFormComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _cards_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../cards/card.component */
      56970);
      /* harmony import */


      var _buttons_button_ex_button_ex_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../buttons/button-ex/button-ex.component */
      94874);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _buttons_button_continue_button_continue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../buttons/button-continue/button-continue.component */
      34591);
      /* harmony import */


      var _buttons_button_successfully_button_successfully_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../buttons/button-successfully/button-successfully.component */
      80662);
      /* harmony import */


      var _inputs_account_input_account_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../inputs/account-input/account-input.component */
      22783);
      /* harmony import */


      var _app_storybook_pipes_api_error_message_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../app/storybook/pipes/api-error-message.pipe */
      57074);

      var _c0 = ["formHeader"];
      var _c1 = ["storybook-input"];

      function MyAccountFormComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "storybook-button-successfully", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function MyAccountFormComponent_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      var _c2 = function _c2() {
        return ["requiresPhone"];
      };

      var _c3 = function _c3() {
        return ["requiresEmail"];
      };

      function MyAccountFormComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "storybook-account-input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onArchiveInput", function MyAccountFormComponent_div_19_Template_storybook_account_input_onArchiveInput_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r5.onArchiveInput.emit($event);
          })("onPinInput", function MyAccountFormComponent_div_19_Template_storybook_account_input_onPinInput_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r7.onPinInput.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "storybook-account-input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onArchiveInput", function MyAccountFormComponent_div_19_Template_storybook_account_input_onArchiveInput_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r8.onArchiveInput.emit($event);
          })("onPinInput", function MyAccountFormComponent_div_19_Template_storybook_account_input_onPinInput_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r9.onPinInput.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "storybook-account-input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onArchiveInput", function MyAccountFormComponent_div_19_Template_storybook_account_input_onArchiveInput_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r10.onArchiveInput.emit($event);
          })("onPinInput", function MyAccountFormComponent_div_19_Template_storybook_account_input_onPinInput_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r11.onPinInput.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "storybook-account-input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onArchiveInput", function MyAccountFormComponent_div_19_Template_storybook_account_input_onArchiveInput_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r12.onArchiveInput.emit($event);
          })("changePassword", function MyAccountFormComponent_div_19_Template_storybook_account_input_changePassword_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r13.changePassword.emit($event);
          })("onPinInput", function MyAccountFormComponent_div_19_Template_storybook_account_input_onPinInput_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r14.onPinInput.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("storyInput", ctx_r3.storyInputsInOrder[0])("currentForm", ctx_r3.mForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("storyInput", ctx_r3.storyInputsInOrder[1])("currentForm", ctx_r3.mForm)("conditionList", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("storyInput", ctx_r3.storyInputsInOrder[2])("currentForm", ctx_r3.mForm)("conditionList", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](11, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("storyInput", ctx_r3.storyInputsInOrder[3])("currentForm", ctx_r3.mForm);
        }
      }

      function MyAccountFormComponent_p_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "apiErrorMessage");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("* ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, ctx_r4.regErrorMessage["message"], ctx_r4.param), "");
        }
      } //import {BehaviorSubject} from "rxjs";
      //import {AccountInputComponent} from "../inputs/input/story-input.component";

      /*
      @Directive({selector: 'storybook-input'})
      export class AccountInput {
        @Input() storyInput!: AccountInput;
      }
      */


      var MyAccountFormComponent = /*#__PURE__*/function () {
        function MyAccountFormComponent(renderer) {
          _classCallCheck(this, MyAccountFormComponent);

          this.renderer = renderer;
          /*
            @ViewChild('storybook-input')
            set mStoryInput(v: AccountInput) {
              setTimeout(() => {
                this.selectedPane = v.id;
                console.log('this.selectedPane'+this.selectedPane.toString())
              }, 30);
            }
            selectedPane: string = '';
            shouldShow = true;
            toggle() {
              this.shouldShow = !this.shouldShow;
            }
          */

          this.onLogout = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
          this.credentials = {
            username: null,
            password: null
          };
          this.isRegFailed = false;
          this.regErrorMessage = {};
          this.param = {
            language: 'login-main'
          };
          this.storyInputsInOrder = [];
          this.mForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({});
          /*username: new FormControl('', Validators.minLength(2)),
          password: new FormControl('T@diran2022', Validators.minLength(2)),
          email: new FormControl('', Validators.email),
          phone: new FormControl(null, Validators.pattern(new RegExp("[0-9 ]{12}")))*/

          this.changeLog = [];
          this.isRegSuccess = false; // tslint:disable-next-line: no-output-on-prefix

          this.onPinInput = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter(); // tslint:disable-next-line: no-output-on-prefix

          this.onArchiveInput = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
          this.sendRegReq = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
          this.clickXButton = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
          this.changePassword = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        }

        _createClass(MyAccountFormComponent, [{
          key: "doLogout",
          value: function doLogout(event) {
            this.onLogout.emit(event);
            this.clickXButton.emit();
          }
        }, {
          key: "openReplacePassword",
          value: function openReplacePassword() {//this.replacePassFormService.open(ReplacePassForm2Component);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.isRegSuccess) {
              if (!changes.isRegSuccess.previousValue && changes.isRegSuccess.currentValue) {
                console.warn('Register Request Succeeded!');
                this.loadSuccessfullyLoggedIn();
              }
            }
            /*if (changes.isRegFailed || changes.regErrorMessage) {
              console.log('isRegFailed' + this.regErrorMessage['message'])
            }*/

          }
        }, {
          key: "storyInputs",
          set: function set(arr) {
            var initialTasks = [].concat(_toConsumableArray(arr.filter(function (t) {
              return t.state === 'USER NAME';
            })), _toConsumableArray(arr.filter(function (t) {
              return t.state !== 'USER NAME';
            })));
            var filteredTasks = initialTasks.filter(function (t) {
              return t.state === 'PASSWORD' || t.state === 'USER NAME' || t.state === 'EMAIL' || t.state === 'PHONE NUMBER FOR AUTHENTICATION';
            });
            this.storyInputsInOrder = filteredTasks.filter(function (t) {
              return t.state === 'PASSWORD' || t.state === 'USER NAME' || t.state === 'EMAIL' || t.state === 'PHONE NUMBER FOR AUTHENTICATION';
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            console.warn('Registry Request Sent!');
            this.sendRegReq.emit();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "userName",
          get: function get() {
            var _a;

            return (_a = this.mForm) === null || _a === void 0 ? void 0 : _a.get('username');
          }
        }, {
          key: "email",
          get: function get() {
            var _a;

            return (_a = this.mForm) === null || _a === void 0 ? void 0 : _a.get('email');
          }
        }, {
          key: "password",
          get: function get() {
            var _a;

            return (_a = this.mForm) === null || _a === void 0 ? void 0 : _a.get('password');
          }
        }, {
          key: "phone",
          get: function get() {
            var _a;

            return (_a = this.mForm) === null || _a === void 0 ? void 0 : _a.get('phone');
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {//console.log(this.childComp?.length)
          }
        }, {
          key: "loadSuccessfullyLoggedIn",
          value: function loadSuccessfullyLoggedIn() {
            var _a;

            this.renderer.setProperty((_a = this.mainHeader) === null || _a === void 0 ? void 0 : _a.nativeElement, 'innerHTML', 'You have successfully complete your registeration!');
          }
        }]);

        return MyAccountFormComponent;
      }();

      MyAccountFormComponent.ɵfac = function MyAccountFormComponent_Factory(t) {
        return new (t || MyAccountFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2));
      };

      MyAccountFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: MyAccountFormComponent,
        selectors: [["storybook-my-account-form"]],
        viewQuery: function MyAccountFormComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.mainHeader = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.storybookInput = _t.first);
          }
        },
        inputs: {
          formService: "formService",
          isRegFailed: "isRegFailed",
          regErrorMessage: "regErrorMessage",
          mForm: "mForm",
          isRegSuccess: "isRegSuccess",
          storyInputs: "storyInputs"
        },
        outputs: {
          onLogout: "onLogout",
          onPinInput: "onPinInput",
          onArchiveInput: "onArchiveInput",
          sendRegReq: "sendRegReq",
          clickXButton: "clickXButton",
          changePassword: "changePassword"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
        decls: 23,
        vars: 5,
        consts: [["id", "main-login-card", 1, "col-md-12"], [1, "card-container"], [1, "h-100", "d-flex", "align-items-center", "justify-content-center"], ["id", "button-ex", 3, "click"], ["id", "button-log-out", 3, "click"], [2, "top", "1px", "display", "inline"], [1, "form-header"], [1, "main-form-header"], ["formHeader", ""], ["name", "currentForm", 3, "formGroup"], [1, "Vector"], ["id", "button-successfully", "style", "", 4, "ngIf"], [1, "login-button"], [4, "ngIf"], ["role", "alert", 1, "login-failed-message"], ["hidden", "", "size", "small", "label", "Continue", "type", "button", 3, "click"], ["id", "button-successfully"], [2, "position", "relative", "margin-bottom", "50px"], [3, "storyInput", "currentForm", "onArchiveInput", "onPinInput"], [1, "thematic-break"], [3, "storyInput", "currentForm", "conditionList", "onArchiveInput", "onPinInput"], [3, "storyInput", "currentForm", "onArchiveInput", "changePassword", "onPinInput"]],
        template: function MyAccountFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "storybook-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "storybook-button-ex", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyAccountFormComponent_Template_storybook_button_ex_click_3_listener() {
              return ctx.clickXButton.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyAccountFormComponent_Template_button_click_4_listener($event) {
              return ctx.doLogout($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Log out");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Log out");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "a", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "My Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, MyAccountFormComponent_div_16_Template, 2, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, MyAccountFormComponent_div_18_Template, 2, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, MyAccountFormComponent_div_19_Template, 8, 12, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, MyAccountFormComponent_p_21_Template, 3, 4, "p", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "storybook-button-continue", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MyAccountFormComponent_Template_storybook_button_continue_click_22_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.mForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isRegSuccess);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isRegSuccess && ctx.storyInputsInOrder.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isRegSuccess);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isRegFailed);
          }
        },
        directives: [_cards_card_component__WEBPACK_IMPORTED_MODULE_0__["default"], _buttons_button_ex_button_ex_component__WEBPACK_IMPORTED_MODULE_1__.ButtonExComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _buttons_button_continue_button_continue_component__WEBPACK_IMPORTED_MODULE_2__.ButtonContinueComponent, _buttons_button_successfully_button_successfully_component__WEBPACK_IMPORTED_MODULE_3__.ButtonSuccessfullyComponent, _inputs_account_input_account_input_component__WEBPACK_IMPORTED_MODULE_4__.AccountInputComponent],
        pipes: [_app_storybook_pipes_api_error_message_pipe__WEBPACK_IMPORTED_MODULE_5__.ApiErrorMessagePipe],
        styles: [".Vector[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 637.5px;\r\n  height: 430px;\r\n  left: calc(50% - 637.5px/2 - 1.25px);\r\n  top: calc(50% - 479px/2 - 0.5px);\r\n}\r\n\r\n.form[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 3.18%;\r\n  right: 14.78%;\r\n  top: 0;\r\n  bottom: 0;\r\n  border-radius: 14px;\r\n  box-shadow: -4px 4px 10px 0 rgba(88, 166, 228, 0.3);\r\n  background-color: #fff;\r\n}\r\n\r\n.card-container.card[_ngcontent-%COMP%] {\r\n  max-width: 400px !important;\r\n  padding: 10px 10px;\r\n}\r\n\r\n.col-md-12[_ngcontent-%COMP%]{\r\n  position: center;\r\n  width: 965px;\r\n  height: 819px;\r\n  left: calc(50% - 965px/2 - 0.25px);\r\n  top: calc(50% - 819px/2 - 0.5px);\r\n  border-radius: 32px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 5.18%;\r\n  right: 4.78%;\r\n  top: 0;\r\n  bottom: 0;\r\n  border-radius: 14px;\r\n  box-shadow: -4px 4px 10px 0 rgba(88, 166, 228, 0.3);\r\n  background-color: #fff;\r\n}\r\n\r\n.form-header[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 12.94%;\r\n  bottom: 77.05%;\r\n\r\n  width: 460px;\r\n  height: 92px;\r\n  flex-grow: 0;\r\n  margin: 0 0 19.8px;\r\n  font-family: \"Noto Sans\", ui-serif;\r\n  font-size: 40px;\r\n  font-weight: bolder;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: 45px;\r\n  letter-spacing: -0.011px;\r\n  text-align: left;\r\n  color: #000000;\r\n}\r\n\r\n.main-form-header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 447px;\r\n  height: 52px;\r\n  flex-grow: 0;\r\n  margin: 0 0 0 0;\r\n  font-family: \"Noto Sans\", ui-serif;\r\n  font-size: 40px;\r\n  font-weight: bolder;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: 45px;\r\n  letter-spacing: -0.011px;\r\n  text-align: left;\r\n  color: #000000;\r\n}\r\n\r\n.login-button[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 445px;\r\n  height: 102px;\r\n  left: calc(50% - 445px/2 - 0.5px);\r\n  top: calc(50% - 101.16px/2 - 171.58px);\r\n}\r\n\r\n.forgot-password[_ngcontent-%COMP%] {\r\n  \r\n\r\n  font-family: \"Noto Sans\", ui-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 17px;\r\n  line-height: 31px;\r\n  \r\n\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  letter-spacing: -0.011em;\r\n  -webkit-text-decoration-line: underline;\r\n          text-decoration-line: underline;\r\n\r\n  color: #000000;\r\n}\r\n\r\n#button-successfully[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%; height:\r\n  102px; margin-top: 50px;\r\n  margin-bottom: 100px;\r\n  left: 0;\r\n}\r\n\r\nstorybook-button-successfully[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: 240px;\r\n}\r\n\r\n#button-ex[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 48px;\r\n  left: 99px;\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 0;\r\n}\r\n\r\n#button-log-out[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 42.5px;\r\n  right: 99px;\r\n  width: 66px;\r\n  height: 31px;\r\n  padding: 1px;\r\n  margin: 0 0 0.25rem;\r\n  background-color: rgba(61, 142, 207, 0);\r\n\r\n\r\n\r\n\r\n\r\n  font-family: Noto Sans, ui-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 17px;\r\n  line-height: 31px;\r\n  text-align: center;\r\n  \r\n\r\n  display: inline;\r\n  align-items: end;\r\n  letter-spacing: -0.011em;\r\n  -webkit-text-decoration-line: underline;\r\n          text-decoration-line: underline;\r\n\r\n  color: #000000;\r\n}\r\n\r\n.login-failed-message[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 55px;\r\n\r\n\r\n  \r\n  font-family: Noto Sans, ui-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 17px;\r\n  line-height: 31px;\r\n  \r\n\r\n  align-items: start;\r\n  letter-spacing: -0.011em;\r\n\r\n  \r\n\r\n  color: #FA4F4F;\r\n\r\n}\r\n\r\n.thematic-break[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  margin: 15px 2px 0 2.5px;\r\n  background-color: #3d8ecf;\r\n  border-top-width: 1px;\r\n  border-top-color: rgb(61, 142, 207);\r\n  border-top-style: solid;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWFjY291bnQtZm9ybS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsTUFBTTtFQUNOLFNBQVM7RUFDVCxtQkFBbUI7RUFDbkIsbURBQW1EO0VBQ25ELHNCQUFzQjtBQUN4Qjs7QUFJQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsZ0NBQWdDO0VBQ2hDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLG1EQUFtRDtFQUNuRCxzQkFBc0I7QUFDeEI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWM7O0VBRWQsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsaUNBQWlDO0VBQ2pDLHNDQUFzQztBQUN4Qzs7QUFHQTtFQUNFLHdCQUF3Qjs7RUFFeEIsa0NBQWtDO0VBQ2xDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixxQ0FBcUM7O0VBRXJDLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4Qix1Q0FBK0I7VUFBL0IsK0JBQStCOztFQUUvQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVcsRUFBRTtPQUNSLEVBQUUsZ0JBQWdCO0VBQ3ZCLG9CQUFvQjtFQUNwQixPQUFPO0FBQ1Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsdUNBQXVDOzs7O0FBSXpDLHdCQUF3Qjs7RUFFdEIsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIscUNBQXFDOztFQUVyQyxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4Qix1Q0FBK0I7VUFBL0IsK0JBQStCOztFQUUvQixjQUFjO0FBQ2hCOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7OztFQUdaLGNBQWM7RUFDZCxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHFDQUFxQzs7RUFFckMsa0JBQWtCO0VBQ2xCLHdCQUF3Qjs7RUFFeEIsUUFBUTs7RUFFUixjQUFjOztBQUVoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixtQ0FBbUM7RUFDbkMsdUJBQXVCOztBQUV6QiIsImZpbGUiOiJteS1hY2NvdW50LWZvcm0uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlZlY3RvciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA2MzcuNXB4O1xyXG4gIGhlaWdodDogNDMwcHg7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSA2MzcuNXB4LzIgLSAxLjI1cHgpO1xyXG4gIHRvcDogY2FsYyg1MCUgLSA0NzlweC8yIC0gMC41cHgpO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDMuMTglO1xyXG4gIHJpZ2h0OiAxNC43OCU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIGJveC1zaGFkb3c6IC00cHggNHB4IDEwcHggMCByZ2JhKDg4LCAxNjYsIDIyOCwgMC4zKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuXHJcbi5jYXJkLWNvbnRhaW5lci5jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG59XHJcbi5jb2wtbWQtMTJ7XHJcbiAgcG9zaXRpb246IGNlbnRlcjtcclxuICB3aWR0aDogOTY1cHg7XHJcbiAgaGVpZ2h0OiA4MTlweDtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDk2NXB4LzIgLSAwLjI1cHgpO1xyXG4gIHRvcDogY2FsYyg1MCUgLSA4MTlweC8yIC0gMC41cHgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNS4xOCU7XHJcbiAgcmlnaHQ6IDQuNzglO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTRweDtcclxuICBib3gtc2hhZG93OiAtNHB4IDRweCAxMHB4IDAgcmdiYSg4OCwgMTY2LCAyMjgsIDAuMyk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcbi5mb3JtLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTIuOTQlO1xyXG4gIGJvdHRvbTogNzcuMDUlO1xyXG5cclxuICB3aWR0aDogNDYwcHg7XHJcbiAgaGVpZ2h0OiA5MnB4O1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBtYXJnaW46IDAgMCAxOS44cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zXCIsIHVpLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogNDVweDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDExcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLm1haW4tZm9ybS1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNDQ3cHg7XHJcbiAgaGVpZ2h0OiA1MnB4O1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBtYXJnaW46IDAgMCAwIDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zXCIsIHVpLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogNDVweDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDExcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLmxvZ2luLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA0NDVweDtcclxuICBoZWlnaHQ6IDEwMnB4O1xyXG4gIGxlZnQ6IGNhbGMoNTAlIC0gNDQ1cHgvMiAtIDAuNXB4KTtcclxuICB0b3A6IGNhbGMoNTAlIC0gMTAxLjE2cHgvMiAtIDE3MS41OHB4KTtcclxufVxyXG5cclxuXHJcbi5mb3Jnb3QtcGFzc3dvcmQge1xyXG4gIC8qIEQgVW5kZXJMaW5lIFJlZ3VsYXIgKi9cclxuXHJcbiAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zXCIsIHVpLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogMzFweDtcclxuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMTgzJSAqL1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMTFlbTtcclxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG5cclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuI2J1dHRvbi1zdWNjZXNzZnVsbHkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTsgaGVpZ2h0OlxyXG4gIDEwMnB4OyBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xyXG4gIGxlZnQ6IDA7XHJcbn1cclxuXHJcbnN0b3J5Ym9vay1idXR0b24tc3VjY2Vzc2Z1bGx5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMjQwcHg7XHJcbn1cclxuXHJcblxyXG4jYnV0dG9uLWV4IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0OHB4O1xyXG4gIGxlZnQ6IDk5cHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2J1dHRvbi1sb2ctb3V0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0Mi41cHg7XHJcbiAgcmlnaHQ6IDk5cHg7XHJcbiAgd2lkdGg6IDY2cHg7XHJcbiAgaGVpZ2h0OiAzMXB4O1xyXG4gIHBhZGRpbmc6IDFweDtcclxuICBtYXJnaW46IDAgMCAwLjI1cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjEsIDE0MiwgMjA3LCAwKTtcclxuXHJcblxyXG5cclxuLyogRCBVbmRlckxpbmUgUmVndWxhciAqL1xyXG5cclxuICBmb250LWZhbWlseTogTm90byBTYW5zLCB1aS1zZXJpZjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxODMlICovXHJcblxyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBhbGlnbi1pdGVtczogZW5kO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMTFlbTtcclxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG5cclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuXHJcbi5sb2dpbi1mYWlsZWQtbWVzc2FnZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNTVweDtcclxuXHJcblxyXG4gIC8qIEQgUmVndWxhciAqL1xyXG4gIGZvbnQtZmFtaWx5OiBOb3RvIFNhbnMsIHVpLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogMzFweDtcclxuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMTgzJSAqL1xyXG5cclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMWVtO1xyXG5cclxuICAvKiBSZWQgKi9cclxuXHJcbiAgY29sb3I6ICNGQTRGNEY7XHJcblxyXG59XHJcblxyXG4udGhlbWF0aWMtYnJlYWsge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDE1cHggMnB4IDAgMi41cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkOGVjZjtcclxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiKDYxLCAxNDIsIDIwNyk7XHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcblxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    8111:
    /*!********************************************************************!*\
      !*** ./src/stories/forms/registry-form/registry-form.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            RegistryFormComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _cards_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../cards/card.component */
      56970);
      /* harmony import */


      var _buttons_button_ex_button_ex_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../buttons/button-ex/button-ex.component */
      94874);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _buttons_button_continue_button_continue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../buttons/button-continue/button-continue.component */
      34591);
      /* harmony import */


      var _buttons_button_successfully_button_successfully_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../buttons/button-successfully/button-successfully.component */
      80662);
      /* harmony import */


      var _inputs_input_story_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../inputs/input/story-input.component */
      50899);
      /* harmony import */


      var _app_storybook_pipes_api_error_message_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../app/storybook/pipes/api-error-message.pipe */
      57074);

      var _c0 = ["formHeader"];
      var _c1 = ["storybook-input"];

      function RegistryFormComponent_a_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "complete the registration by filling the missing info:");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RegistryFormComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "storybook-button-successfully", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function RegistryFormComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      var _c2 = function _c2() {
        return ["requiresPhone"];
      };

      var _c3 = function _c3() {
        return ["requiresEmail"];
      };

      function RegistryFormComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "storybook-input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onArchiveInput", function RegistryFormComponent_div_16_Template_storybook_input_onArchiveInput_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r7.onArchiveInput.emit($event);
          })("onPinInput", function RegistryFormComponent_div_16_Template_storybook_input_onPinInput_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r9.onPinInput.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "storybook-input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onArchiveInput", function RegistryFormComponent_div_16_Template_storybook_input_onArchiveInput_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r10.onArchiveInput.emit($event);
          })("onPinInput", function RegistryFormComponent_div_16_Template_storybook_input_onPinInput_2_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r11.onPinInput.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "storybook-input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onArchiveInput", function RegistryFormComponent_div_16_Template_storybook_input_onArchiveInput_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r12.onArchiveInput.emit($event);
          })("onPinInput", function RegistryFormComponent_div_16_Template_storybook_input_onPinInput_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r13.onPinInput.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "storybook-input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onArchiveInput", function RegistryFormComponent_div_16_Template_storybook_input_onArchiveInput_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r14.onArchiveInput.emit($event);
          })("onPinInput", function RegistryFormComponent_div_16_Template_storybook_input_onPinInput_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r15.onPinInput.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("storyInput", ctx_r4.storyInputsInOrder[0])("currentForm", ctx_r4.mForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("storyInput", ctx_r4.storyInputsInOrder[1])("currentForm", ctx_r4.mForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("storyInput", ctx_r4.storyInputsInOrder[2])("currentForm", ctx_r4.mForm)("conditionList", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("storyInput", ctx_r4.storyInputsInOrder[3])("currentForm", ctx_r4.mForm)("conditionList", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](11, _c3));
        }
      }

      function RegistryFormComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 21);
        }
      }

      function RegistryFormComponent_p_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "apiErrorMessage");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("* ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, ctx_r6.regErrorMessage["message"], ctx_r6.param), "");
        }
      } //import {BehaviorSubject} from "rxjs";
      //import {AccountInputComponent} from "../inputs/input/story-input.component";

      /*
      @Directive({selector: 'storybook-input'})
      export class AccountInput {
        @Input() storyInput!: AccountInput;
      }
      */


      var RegistryFormComponent = /*#__PURE__*/function () {
        function RegistryFormComponent(renderer) {
          _classCallCheck(this, RegistryFormComponent);

          this.renderer = renderer;
          this.credentials = {
            username: null,
            password: null
          };
          this.isRegFailed = false;
          this.regErrorMessage = {};
          this.isLoading = false;
          this.param = {
            language: 'login-main'
          };
          /**
           * @ignore
           * Component property to define ordering of tasks
           */

          this.storyInputsInOrder = [];
          this.mForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({});
          /*username: new FormControl('', Validators.minLength(2)),
          password: new FormControl('T@diran2022', Validators.minLength(2)),
          email: new FormControl('', Validators.email),
          phone: new FormControl(null, Validators.pattern(new RegExp("[0-9 ]{12}")))*/

          this.changeLog = [];
          this.isRegSuccess = false; // tslint:disable-next-line: no-output-on-prefix

          this.onPinInput = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter(); // tslint:disable-next-line: no-output-on-prefix

          this.onArchiveInput = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
          this.sendRegReq = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
          this.clickXButton = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        }

        _createClass(RegistryFormComponent, [{
          key: "openReplacePassword",
          value: function openReplacePassword() {//this.replacePassFormService.open(ReplacePassForm2Component);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.isRegSuccess) {
              if (!changes.isRegSuccess.previousValue && changes.isRegSuccess.currentValue) {
                console.warn('Register Request Succeeded!');
                this.loadSuccessfullyLoggedIn();
              }
            }
            /*if (changes.isRegFailed || changes.regErrorMessage) {
              console.log('isRegFailed' + this.regErrorMessage['message'])
            }*/

          }
        }, {
          key: "storyInputs",
          set: function set(arr) {
            var initialTasks = [].concat(_toConsumableArray(arr.filter(function (t) {
              return t.state === 'USER NAME';
            })), _toConsumableArray(arr.filter(function (t) {
              return t.state !== 'USER NAME';
            })));
            var filteredTasks = initialTasks.filter(function (t) {
              return t.type === 'password' || t.state === 'USER NAME' || t.state === 'EMAIL' || t.state === 'PHONE NUMBER FOR AUTHENTICATION';
            });
            this.storyInputsInOrder = filteredTasks.filter(function (t) {
              return t.type === 'password' || t.state === 'USER NAME' || t.state === 'EMAIL' || t.state === 'PHONE NUMBER FOR AUTHENTICATION';
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            console.warn('Registry Request Sent!'); //this.renderer.setAttribute(this.storybookInput?.nativeElement ,'hidden', 'true');
            //this.renderer.setAttribute(this.mainHeader?.nativeElement ,'hidden', 'true');
            //this.renderer.setProperty(this.mainHeader?.nativeElement ,'innerHTML','You have successfully complete your registeration!');
            //this.renderer.setAttribute(this.storybookInput?.nativeElement ,'innerHTML','true');

            this.sendRegReq.emit();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "userName",
          get: function get() {
            var _a;

            return (_a = this.mForm) === null || _a === void 0 ? void 0 : _a.get('username');
          }
        }, {
          key: "email",
          get: function get() {
            var _a;

            return (_a = this.mForm) === null || _a === void 0 ? void 0 : _a.get('email');
          }
        }, {
          key: "password",
          get: function get() {
            var _a;

            return (_a = this.mForm) === null || _a === void 0 ? void 0 : _a.get('password');
          }
        }, {
          key: "phone",
          get: function get() {
            var _a;

            return (_a = this.mForm) === null || _a === void 0 ? void 0 : _a.get('phone');
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {//console.log(this.childComp?.length)
          }
        }, {
          key: "loadSuccessfullyLoggedIn",
          value: function loadSuccessfullyLoggedIn() {
            var _a;

            this.renderer.setProperty((_a = this.mainHeader) === null || _a === void 0 ? void 0 : _a.nativeElement, 'innerHTML', 'You have successfully complete your registeration!');
          }
        }]);

        return RegistryFormComponent;
      }();

      RegistryFormComponent.ɵfac = function RegistryFormComponent_Factory(t) {
        return new (t || RegistryFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2));
      };

      RegistryFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: RegistryFormComponent,
        selectors: [["storybook-registry-form"]],
        viewQuery: function RegistryFormComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.mainHeader = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.storybookInput = _t.first);
          }
        },
        inputs: {
          formService: "formService",
          isRegFailed: "isRegFailed",
          regErrorMessage: "regErrorMessage",
          isLoading: "isLoading",
          mForm: "mForm",
          isRegSuccess: "isRegSuccess",
          storyInputs: "storyInputs"
        },
        outputs: {
          onPinInput: "onPinInput",
          onArchiveInput: "onArchiveInput",
          sendRegReq: "sendRegReq",
          clickXButton: "clickXButton"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]],
        decls: 21,
        vars: 8,
        consts: [["id", "main-login-card", 1, "col-md-12"], [1, "card-container"], [1, "h-100", "d-flex", "align-items-center", "justify-content-center"], ["id", "button-ex", 3, "click"], [1, "form-header"], [1, "main-form-header"], ["formHeader", ""], ["class", "sub-form-header", 4, "ngIf"], ["name", "currentForm", 3, "formGroup"], [1, "Vector"], ["id", "button-successfully", "style", "", 4, "ngIf"], [1, "login-button"], [4, "ngIf"], ["class", "thematic-break", 4, "ngIf"], ["role", "alert", 1, "login-failed-message"], ["size", "small", "label", "Continue", "type", "button", 3, "label", "click"], [1, "sub-form-header"], ["id", "button-successfully"], [2, "position", "relative", "margin-bottom", "50px"], [3, "storyInput", "currentForm", "onArchiveInput", "onPinInput"], [3, "storyInput", "currentForm", "conditionList", "onArchiveInput", "onPinInput"], [1, "thematic-break"]],
        template: function RegistryFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "storybook-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "storybook-button-ex", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RegistryFormComponent_Template_storybook_button_ex_click_3_listener() {
              return ctx.clickXButton.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "a", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Complete Registration");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, RegistryFormComponent_a_9_Template, 2, 0, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, RegistryFormComponent_div_13_Template, 2, 0, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, RegistryFormComponent_div_15_Template, 2, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, RegistryFormComponent_div_16_Template, 5, 12, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, RegistryFormComponent_div_17_Template, 1, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, RegistryFormComponent_p_19_Template, 3, 4, "p", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "storybook-button-continue", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function RegistryFormComponent_Template_storybook_button_continue_click_20_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isRegSuccess);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.mForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isRegSuccess);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isRegSuccess && ctx.storyInputsInOrder.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isRegSuccess);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isRegSuccess);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isRegFailed);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("label", ctx.isRegSuccess ? "Continue" : "Complete Rgistration");
          }
        },
        directives: [_cards_card_component__WEBPACK_IMPORTED_MODULE_0__["default"], _buttons_button_ex_button_ex_component__WEBPACK_IMPORTED_MODULE_1__.ButtonExComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _buttons_button_continue_button_continue_component__WEBPACK_IMPORTED_MODULE_2__.ButtonContinueComponent, _buttons_button_successfully_button_successfully_component__WEBPACK_IMPORTED_MODULE_3__.ButtonSuccessfullyComponent, _inputs_input_story_input_component__WEBPACK_IMPORTED_MODULE_4__.StoryInputComponent],
        pipes: [_app_storybook_pipes_api_error_message_pipe__WEBPACK_IMPORTED_MODULE_5__.ApiErrorMessagePipe],
        styles: [".Vector[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 637.5px;\r\n  height: 430px;\r\n  left: calc(50% - 637.5px/2 - 1.25px);\r\n  top: calc(50% - 479px/2 - 0.5px);\r\n}\r\n\r\n.form[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 3.18%;\r\n  right: 14.78%;\r\n  top: 0;\r\n  bottom: 0;\r\n  border-radius: 14px;\r\n  box-shadow: -4px 4px 10px 0 rgba(88, 166, 228, 0.3);\r\n  background-color: #fff;\r\n}\r\n\r\n.card-container.card[_ngcontent-%COMP%] {\r\n  max-width: 400px !important;\r\n  padding: 10px 10px;\r\n}\r\n\r\n.col-md-12[_ngcontent-%COMP%]{\r\n  position: center;\r\n  width: 637.5px;\r\n  height: 819px;\r\n  left: calc(50% - 637.5px/2 - 0.25px);\r\n  top: calc(50% - 819px/2 - 0.5px);\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 5.18%;\r\n  right: 4.78%;\r\n  top: 0;\r\n  bottom: 0;\r\n  border-radius: 14px;\r\n  box-shadow: -4px 4px 10px 0 rgba(88, 166, 228, 0.3);\r\n  background-color: #fff;\r\n}\r\n\r\n.form-header[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 12.94%;\r\n  bottom: 77.05%;\r\n\r\n  width: 460px;\r\n  height: 92px;\r\n  flex-grow: 0;\r\n  margin: 0 0 19.8px;\r\n  font-family: \"Noto Sans\", ui-serif;\r\n  font-size: 40px;\r\n  font-weight: bolder;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: 45px;\r\n  letter-spacing: -0.011px;\r\n  text-align: left;\r\n  color: #000000;\r\n}\r\n\r\n.main-form-header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 447px;\r\n  height: 52px;\r\n  flex-grow: 0;\r\n  margin: 0 0 0 0;\r\n  font-family: \"Noto Sans\", ui-serif;\r\n  font-size: 40px;\r\n  font-weight: bolder;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: 45px;\r\n  letter-spacing: -0.011px;\r\n  text-align: left;\r\n  color: #000000;\r\n}\r\n\r\n.sub-form-header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n\r\n\r\n  width: 446px;\r\n  height: 32px;\r\n  flex-grow: 0;\r\n  margin: 0 0 0 0;\r\n  font-family: \"Noto Sans\", ui-serif;\r\n  font-size: 17px;\r\n  font-weight: bolder;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: 31px;\r\n  letter-spacing: -0.011px;\r\n  text-align: left;\r\n  color: #000000;\r\n}\r\n\r\n.login-button[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 445px;\r\n  height: 102px;\r\n  left: calc(50% - 445px/2 - 0.5px);\r\n  top: calc(50% - 101.16px/2 - 171.58px);\r\n}\r\n\r\n.forgot-password[_ngcontent-%COMP%] {\r\n  \r\n\r\n  font-family: \"Noto Sans\", ui-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 17px;\r\n  line-height: 31px;\r\n  \r\n\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  letter-spacing: -0.011em;\r\n  -webkit-text-decoration-line: underline;\r\n          text-decoration-line: underline;\r\n\r\n  color: #000000;\r\n}\r\n\r\n.thematic-break[_ngcontent-%COMP%] {\r\n  margin: 20px 2px 16px 2.5px;\r\n  background-color: #3d8ecf;\r\n  border-top-width: 1px;\r\n  border-top-color: rgb(61, 142, 207);\r\n  border-top-style: solid;\r\n}\r\n\r\n#button-successfully[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%; height:\r\n  102px; margin-top: 50px;\r\n  margin-bottom: 100px;\r\n  left: 0;\r\n}\r\n\r\nstorybook-button-successfully[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: 240px;\r\n}\r\n\r\n#button-ex[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 48px;\r\n  left: 99px;\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 0;\r\n}\r\n\r\n.login-failed-message[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 55px;\r\n\r\n\r\n  \r\n  font-family: Noto Sans, ui-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 17px;\r\n  line-height: 31px;\r\n  \r\n\r\n  align-items: start;\r\n  letter-spacing: -0.011em;\r\n\r\n  \r\n\r\n  color: #FA4F4F;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJ5LWZvcm0uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLE1BQU07RUFDTixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLG1EQUFtRDtFQUNuRCxzQkFBc0I7QUFDeEI7O0FBSUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLG1EQUFtRDtFQUNuRCxzQkFBc0I7QUFDeEI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWM7O0VBRWQsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCOzs7RUFHbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxzQ0FBc0M7QUFDeEM7O0FBR0E7RUFDRSx3QkFBd0I7O0VBRXhCLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUNBQXFDOztFQUVyQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsdUNBQStCO1VBQS9CLCtCQUErQjs7RUFFL0IsY0FBYztBQUNoQjs7QUFJQTtFQUNFLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFFO09BQ1IsRUFBRSxnQkFBZ0I7RUFDdkIsb0JBQW9CO0VBQ3BCLE9BQU87QUFDVDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZOzs7RUFHWixjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixxQ0FBcUM7O0VBRXJDLGtCQUFrQjtFQUNsQix3QkFBd0I7O0VBRXhCLFFBQVE7O0VBRVIsY0FBYzs7QUFFaEIiLCJmaWxlIjoicmVnaXN0cnktZm9ybS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuVmVjdG9yIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDYzNy41cHg7XHJcbiAgaGVpZ2h0OiA0MzBweDtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDYzNy41cHgvMiAtIDEuMjVweCk7XHJcbiAgdG9wOiBjYWxjKDUwJSAtIDQ3OXB4LzIgLSAwLjVweCk7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMy4xOCU7XHJcbiAgcmlnaHQ6IDE0Ljc4JTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgYm94LXNoYWRvdzogLTRweCA0cHggMTBweCAwIHJnYmEoODgsIDE2NiwgMjI4LCAwLjMpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5cclxuLmNhcmQtY29udGFpbmVyLmNhcmQge1xyXG4gIG1heC13aWR0aDogNDAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbn1cclxuLmNvbC1tZC0xMntcclxuICBwb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiA2MzcuNXB4O1xyXG4gIGhlaWdodDogODE5cHg7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSA2MzcuNXB4LzIgLSAwLjI1cHgpO1xyXG4gIHRvcDogY2FsYyg1MCUgLSA4MTlweC8yIC0gMC41cHgpO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUuMTglO1xyXG4gIHJpZ2h0OiA0Ljc4JTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgYm94LXNoYWRvdzogLTRweCA0cHggMTBweCAwIHJnYmEoODgsIDE2NiwgMjI4LCAwLjMpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEyLjk0JTtcclxuICBib3R0b206IDc3LjA1JTtcclxuXHJcbiAgd2lkdGg6IDQ2MHB4O1xyXG4gIGhlaWdodDogOTJweDtcclxuICBmbGV4LWdyb3c6IDA7XHJcbiAgbWFyZ2luOiAwIDAgMTkuOHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiLCB1aS1zZXJpZjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5tYWluLWZvcm0taGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDQ0N3B4O1xyXG4gIGhlaWdodDogNTJweDtcclxuICBmbGV4LWdyb3c6IDA7XHJcbiAgbWFyZ2luOiAwIDAgMCAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiLCB1aS1zZXJpZjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5zdWItZm9ybS1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcblxyXG4gIHdpZHRoOiA0NDZweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgZmxleC1ncm93OiAwO1xyXG4gIG1hcmdpbjogMCAwIDAgMDtcclxuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIiwgdWktc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMTFweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4ubG9naW4tYnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDQ0NXB4O1xyXG4gIGhlaWdodDogMTAycHg7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSA0NDVweC8yIC0gMC41cHgpO1xyXG4gIHRvcDogY2FsYyg1MCUgLSAxMDEuMTZweC8yIC0gMTcxLjU4cHgpO1xyXG59XHJcblxyXG5cclxuLmZvcmdvdC1wYXNzd29yZCB7XHJcbiAgLyogRCBVbmRlckxpbmUgUmVndWxhciAqL1xyXG5cclxuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIiwgdWktc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxODMlICovXHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMWVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcblxyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG5cclxuXHJcbi50aGVtYXRpYy1icmVhayB7XHJcbiAgbWFyZ2luOiAyMHB4IDJweCAxNnB4IDIuNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDhlY2Y7XHJcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYig2MSwgMTQyLCAyMDcpO1xyXG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xyXG59XHJcblxyXG4jYnV0dG9uLXN1Y2Nlc3NmdWxseSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlOyBoZWlnaHQ6XHJcbiAgMTAycHg7IG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XHJcbiAgbGVmdDogMDtcclxufVxyXG5cclxuc3Rvcnlib29rLWJ1dHRvbi1zdWNjZXNzZnVsbHkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAyNDBweDtcclxufVxyXG5cclxuXHJcbiNidXR0b24tZXgge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQ4cHg7XHJcbiAgbGVmdDogOTlweDtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5cclxuLmxvZ2luLWZhaWxlZC1tZXNzYWdlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG5cclxuXHJcbiAgLyogRCBSZWd1bGFyICovXHJcbiAgZm9udC1mYW1pbHk6IE5vdG8gU2FucywgdWktc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxODMlICovXHJcblxyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDExZW07XHJcblxyXG4gIC8qIFJlZCAqL1xyXG5cclxuICBjb2xvcjogI0ZBNEY0RjtcclxuXHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    29085:
    /*!****************************************************************************!*\
      !*** ./src/stories/forms/replace-pass-form/replace-pass-form.component.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            ReplacePassFormComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _actions_action_input_action_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../actions/action-input/action-input.component */
      61410);
      /* harmony import */


      var _cards_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../cards/card.component */
      56970);
      /* harmony import */


      var _buttons_button_ex_button_ex_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../buttons/button-ex/button-ex.component */
      94874);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _buttons_button_continue_button_continue_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../buttons/button-continue/button-continue.component */
      34591);
      /* harmony import */


      var _buttons_button_successfully_button_successfully_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../buttons/button-successfully/button-successfully.component */
      80662);
      /* harmony import */


      var _inputs_input_story_input_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../inputs/input/story-input.component */
      50899);
      /* harmony import */


      var _app_storybook_pipes_api_error_message_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../app/storybook/pipes/api-error-message.pipe */
      57074);

      var _c0 = ["formHeader"];
      var _c1 = ["storybook-input"];

      function ReplacePassFormComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "storybook-button-successfully", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ReplacePassFormComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
      }

      function ReplacePassFormComponent_div_15_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 19);
        }
      }

      var _c2 = function _c2() {
        return ["minLength", "requiresUppercase", "requiresLowercase", "requiresDigit", "requiresSpecialChars"];
      };

      function ReplacePassFormComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "storybook-input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onArchiveInput", function ReplacePassFormComponent_div_15_Template_storybook_input_onArchiveInput_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r6.onArchiveInput.emit($event);
          })("onPinInput", function ReplacePassFormComponent_div_15_Template_storybook_input_onPinInput_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r8.onPinInput.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ReplacePassFormComponent_div_15_div_2_Template, 1, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "storybook-input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onArchiveInput", function ReplacePassFormComponent_div_15_Template_storybook_input_onArchiveInput_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r9.onArchiveInput.emit($event);
          })("onPinInput", function ReplacePassFormComponent_div_15_Template_storybook_input_onPinInput_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r10.onPinInput.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "storybook-input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onArchiveInput", function ReplacePassFormComponent_div_15_Template_storybook_input_onArchiveInput_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r11.onArchiveInput.emit($event);
          })("onPinInput", function ReplacePassFormComponent_div_15_Template_storybook_input_onPinInput_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

            return ctx_r12.onPinInput.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("storyInput", ctx_r3.storyInputsInOrder[0])("currentForm", ctx_r3.mForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r3.status.isRepSuccess);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("storyInput", ctx_r3.storyInputsInOrder[1])("currentForm", ctx_r3.mForm)("conditionList", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](9, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("storyInput", ctx_r3.storyInputsInOrder[2])("currentForm", ctx_r3.mForm)("conditionList", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](10, _c2));
        }
      }

      function ReplacePassFormComponent_table_18_tr_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "apiErrorMessage");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r14 = ctx.$implicit;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 1, message_r14.trim(), ctx_r13.param));
        }
      }

      function ReplacePassFormComponent_table_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "apiErrorMessage");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ReplacePassFormComponent_table_18_tr_4_Template, 3, 4, "tr", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](3, 2, ctx_r4.status == null ? null : ctx_r4.status.repErrorMessage["message"], ctx_r4.param));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r4.status == null ? null : ctx_r4.status.repErrorMessage.data == null ? null : ctx_r4.status.repErrorMessage.data.confirmPassword.split(", "));
        }
      } //import {BehaviorSubject} from "rxjs";
      //import {AccountInputComponent} from "../inputs/input/story-input.component";

      /*
      @Directive({selector: 'storybook-input'})
      export class AccountInput {
        @Input() storyInput!: AccountInput;
      }
      */


      var ReplacePassFormComponent = /*#__PURE__*/function () {
        function ReplacePassFormComponent(renderer) {
          _classCallCheck(this, ReplacePassFormComponent);

          this.renderer = renderer;
          this.popover = {
            content: _actions_action_input_action_input_component__WEBPACK_IMPORTED_MODULE_0__.ActionInputComponent
          };
          this.param = {
            language: 'login-main'
          };
          this.credentials = {
            username: null,
            password: null
          };
          this.isRepFailed = false;
          this.repErrorMessage = '';
          /**
           * @ignore
           * Component property to define ordering of tasks
           */

          this.storyInputsInOrder = [];
          this.mForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({});
          this.changeLog = [];
          this.isLoading = false; // tslint:disable-next-line: no-output-on-prefix

          this.onPinInput = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter(); // tslint:disable-next-line: no-output-on-prefix

          this.onArchiveInput = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
          this.sendRegReq = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
          this.clickXButton = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.EventEmitter();
        }

        _createClass(ReplacePassFormComponent, [{
          key: "openReplacePassword",
          value: function openReplacePassword() {//this.replacePassFormService.open(ReplacePassForm2Component);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.isRegSuccess) {
              if (!changes.isRegSuccess.previousValue && changes.isRegSuccess.currentValue) {
                console.warn('Register Request Succeeded!');
                this.loadSuccessfullyLoggedIn();
              }
            }
          }
        }, {
          key: "storyInputs",
          set: function set(arr) {
            var initialTasks = [].concat(_toConsumableArray(arr.filter(function (t) {
              return t.state === 'USER NAME';
            })), _toConsumableArray(arr.filter(function (t) {
              return t.state !== 'USER NAME';
            })));
            var filteredTasks = initialTasks.filter(function (t) {
              return t.type === 'password' || t.state === 'USER NAME' || t.state === 'EMAIL' || t.state === 'PHONE NUMBER FOR AUTHENTICATION';
            });
            this.storyInputsInOrder = filteredTasks.filter(function (t) {
              return t.type === 'password' || t.state === 'USER NAME' || t.state === 'EMAIL' || t.state === 'PHONE NUMBER FOR AUTHENTICATION';
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            console.warn('ReplacePassForm Request Sent!'); //this.renderer.setAttribute(this.storybookInput?.nativeElement ,'hidden', 'true');
            //this.renderer.setAttribute(this.mainHeader?.nativeElement ,'hidden', 'true');
            //this.renderer.setProperty(this.mainHeader?.nativeElement ,'innerHTML','You have successfully complete your registeration!');
            //this.renderer.setAttribute(this.storybookInput?.nativeElement ,'innerHTML','true');

            this.sendRegReq.emit();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "userName",
          get: function get() {
            var _a;

            return (_a = this.mForm) === null || _a === void 0 ? void 0 : _a.get('username');
          }
        }, {
          key: "oldPassword",
          get: function get() {
            var _a;

            return (_a = this.mForm) === null || _a === void 0 ? void 0 : _a.get('oldPassword');
          }
        }, {
          key: "password",
          get: function get() {
            var _a;

            return (_a = this.mForm) === null || _a === void 0 ? void 0 : _a.get('password');
          }
        }, {
          key: "confirmPassword",
          get: function get() {
            var _a;

            return (_a = this.mForm) === null || _a === void 0 ? void 0 : _a.get('confirmPassword');
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {//console.log(this.childComp?.length)
          }
        }, {
          key: "loadSuccessfullyLoggedIn",
          value: function loadSuccessfullyLoggedIn() {
            var _a;

            this.renderer.setProperty((_a = this.mainHeader) === null || _a === void 0 ? void 0 : _a.nativeElement, 'innerHTML', 'You have successfully changed your password!');
          }
        }]);

        return ReplacePassFormComponent;
      }();

      ReplacePassFormComponent.ɵfac = function ReplacePassFormComponent_Factory(t) {
        return new (t || ReplacePassFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2));
      };

      ReplacePassFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: ReplacePassFormComponent,
        selectors: [["storybook-replace-pass-form"]],
        viewQuery: function ReplacePassFormComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.mainHeader = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.storybookInput = _t.first);
          }
        },
        inputs: {
          formService: "formService",
          isRepFailed: "isRepFailed",
          repErrorMessage: "repErrorMessage",
          mForm: "mForm",
          status: "status",
          isLoading: "isLoading",
          storyInputs: "storyInputs"
        },
        outputs: {
          onPinInput: "onPinInput",
          onArchiveInput: "onArchiveInput",
          sendRegReq: "sendRegReq",
          clickXButton: "clickXButton"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵNgOnChangesFeature"]],
        decls: 20,
        vars: 6,
        consts: [["id", "main-login-card", 1, "col-md-12"], [1, "card-container"], [1, "h-100", "d-flex", "align-items-center", "justify-content-center"], ["id", "button-ex", 3, "click"], [1, "form-header"], [1, "main-form-header"], ["formHeader", ""], ["name", "currentForm", 3, "formGroup"], [1, "Vector"], ["id", "button-successfully", "style", "", 4, "ngIf"], [1, "login-button"], [4, "ngIf"], ["role", "alert", 1, "login-failed-message"], ["size", "small", "label", "Continue", "type", "button", 3, "label", "click"], ["id", "button-successfully"], [2, "position", "relative", "margin-bottom", "50px"], [3, "storyInput", "currentForm", "onArchiveInput", "onPinInput"], ["class", "thematic-break", 4, "ngIf"], [3, "storyInput", "currentForm", "conditionList", "onArchiveInput", "onPinInput"], [1, "thematic-break"], [4, "ngFor", "ngForOf"]],
        template: function ReplacePassFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "storybook-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "storybook-button-ex", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ReplacePassFormComponent_Template_storybook_button_ex_click_3_listener() {
              return ctx.clickXButton.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "a", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Change Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ReplacePassFormComponent_div_12_Template, 2, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ReplacePassFormComponent_div_14_Template, 2, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ReplacePassFormComponent_div_15_Template, 6, 11, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ReplacePassFormComponent_table_18_Template, 5, 5, "table", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "storybook-button-continue", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ReplacePassFormComponent_Template_storybook_button_continue_click_19_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.mForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.status.isRepSuccess);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.status.isRepSuccess && ctx.storyInputsInOrder.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.status.isRepSuccess);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.status == null ? null : ctx.status.isRepFailed);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("label", ctx.status.isRepSuccess ? "Continue" : "Change Password");
          }
        },
        directives: [_cards_card_component__WEBPACK_IMPORTED_MODULE_1__["default"], _buttons_button_ex_button_ex_component__WEBPACK_IMPORTED_MODULE_2__.ButtonExComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _buttons_button_continue_button_continue_component__WEBPACK_IMPORTED_MODULE_3__.ButtonContinueComponent, _buttons_button_successfully_button_successfully_component__WEBPACK_IMPORTED_MODULE_4__.ButtonSuccessfullyComponent, _inputs_input_story_input_component__WEBPACK_IMPORTED_MODULE_5__.StoryInputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf],
        pipes: [_app_storybook_pipes_api_error_message_pipe__WEBPACK_IMPORTED_MODULE_6__.ApiErrorMessagePipe],
        styles: [".Vector[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 637.5px;\r\n  height: 430px;\r\n  left: calc(50% - 637.5px/2 - 1.25px);\r\n  top: calc(50% - 479px/2 - 0.5px);\r\n}\r\n\r\n.form[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 3.18%;\r\n  right: 14.78%;\r\n  top: 0;\r\n  bottom: 0;\r\n  border-radius: 14px;\r\n  box-shadow: -4px 4px 10px 0 rgba(88, 166, 228, 0.3);\r\n  background-color: #fff;\r\n}\r\n\r\n.card-container.card[_ngcontent-%COMP%] {\r\n  max-width: 400px !important;\r\n  padding: 10px 10px;\r\n}\r\n\r\n.col-md-12[_ngcontent-%COMP%]{\r\n  position: center;\r\n  width: 637.5px;\r\n  height: 819px;\r\n  left: calc(50% - 637.5px/2 - 0.25px);\r\n  top: calc(50% - 819px/2 - 0.5px);\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 5.18%;\r\n  right: 4.78%;\r\n  top: 0;\r\n  bottom: 0;\r\n  border-radius: 14px;\r\n  box-shadow: -4px 4px 10px 0 rgba(88, 166, 228, 0.3);\r\n  background-color: #fff;\r\n}\r\n\r\n.form-header[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 12.94%;\r\n  bottom: 77.05%;\r\n\r\n  width: 460px;\r\n  height: 92px;\r\n  flex-grow: 0;\r\n  margin: 0 0 19.8px;\r\n  font-family: \"Noto Sans\", ui-serif;\r\n  font-size: 40px;\r\n  font-weight: bolder;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: 45px;\r\n  letter-spacing: -0.011px;\r\n  text-align: left;\r\n  color: #000000;\r\n}\r\n\r\n.main-form-header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 447px;\r\n  height: 52px;\r\n  flex-grow: 0;\r\n  margin: 0 0 0 0;\r\n  font-family: \"Noto Sans\", ui-serif;\r\n  font-size: 40px;\r\n  font-weight: bolder;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: 45px;\r\n  letter-spacing: -0.011px;\r\n  text-align: left;\r\n  color: #000000;\r\n}\r\n\r\n.login-button[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 445px;\r\n  height: 102px;\r\n  left: calc(50% - 445px/2 - 0.5px);\r\n  top: calc(50% - 101.16px/2 - 171.58px);\r\n}\r\n\r\n.forgot-password[_ngcontent-%COMP%] {\r\n  \r\n\r\n  font-family: \"Noto Sans\", ui-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 17px;\r\n  line-height: 31px;\r\n  \r\n\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  letter-spacing: -0.011em;\r\n  -webkit-text-decoration-line: underline;\r\n          text-decoration-line: underline;\r\n\r\n  color: #000000;\r\n}\r\n\r\n.thematic-break[_ngcontent-%COMP%] {\r\n  margin: 20px 2px 10px 2.5px;\r\n  background-color: #3d8ecf;\r\n  border-top-width: 1px;\r\n  border-top-color: #3d8ecf;\r\n  border-top-style: solid;\r\n}\r\n\r\n#button-successfully[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%; height:\r\n  102px; margin-top: 50px;\r\n  margin-bottom: 100px;\r\n  left: 0;\r\n}\r\n\r\nstorybook-button-successfully[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: 240px;\r\n}\r\n\r\n#button-ex[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 48px;\r\n  left: 99px;\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 0;\r\n}\r\n\r\n.login-failed-message[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 55px;\r\n\r\n\r\n  \r\n  font-family: Noto Sans, ui-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 17px;\r\n  line-height: 31px;\r\n  \r\n\r\n  align-items: start;\r\n  letter-spacing: -0.011em;\r\n\r\n  \r\n\r\n  color: #FA4F4F;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGxhY2UtcGFzcy1mb3JtLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixNQUFNO0VBQ04sU0FBUztFQUNULG1CQUFtQjtFQUNuQixtREFBbUQ7RUFDbkQsc0JBQXNCO0FBQ3hCOztBQUlBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sU0FBUztFQUNULG1CQUFtQjtFQUNuQixtREFBbUQ7RUFDbkQsc0JBQXNCO0FBQ3hCOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxjQUFjOztFQUVkLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFLQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxzQ0FBc0M7QUFDeEM7O0FBR0E7RUFDRSx3QkFBd0I7O0VBRXhCLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUNBQXFDOztFQUVyQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsdUNBQStCO1VBQS9CLCtCQUErQjs7RUFFL0IsY0FBYztBQUNoQjs7QUFJQTtFQUNFLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFFO09BQ1IsRUFBRSxnQkFBZ0I7RUFDdkIsb0JBQW9CO0VBQ3BCLE9BQU87QUFDVDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZOzs7RUFHWixjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixxQ0FBcUM7O0VBRXJDLGtCQUFrQjtFQUNsQix3QkFBd0I7O0VBRXhCLFFBQVE7O0VBRVIsY0FBYzs7QUFFaEIiLCJmaWxlIjoicmVwbGFjZS1wYXNzLWZvcm0uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlZlY3RvciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA2MzcuNXB4O1xyXG4gIGhlaWdodDogNDMwcHg7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSA2MzcuNXB4LzIgLSAxLjI1cHgpO1xyXG4gIHRvcDogY2FsYyg1MCUgLSA0NzlweC8yIC0gMC41cHgpO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDMuMTglO1xyXG4gIHJpZ2h0OiAxNC43OCU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIGJveC1zaGFkb3c6IC00cHggNHB4IDEwcHggMCByZ2JhKDg4LCAxNjYsIDIyOCwgMC4zKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuXHJcbi5jYXJkLWNvbnRhaW5lci5jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG59XHJcbi5jb2wtbWQtMTJ7XHJcbiAgcG9zaXRpb246IGNlbnRlcjtcclxuICB3aWR0aDogNjM3LjVweDtcclxuICBoZWlnaHQ6IDgxOXB4O1xyXG4gIGxlZnQ6IGNhbGMoNTAlIC0gNjM3LjVweC8yIC0gMC4yNXB4KTtcclxuICB0b3A6IGNhbGMoNTAlIC0gODE5cHgvMiAtIDAuNXB4KTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1LjE4JTtcclxuICByaWdodDogNC43OCU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIGJveC1zaGFkb3c6IC00cHggNHB4IDEwcHggMCByZ2JhKDg4LCAxNjYsIDIyOCwgMC4zKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLmZvcm0taGVhZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMi45NCU7XHJcbiAgYm90dG9tOiA3Ny4wNSU7XHJcblxyXG4gIHdpZHRoOiA0NjBweDtcclxuICBoZWlnaHQ6IDkycHg7XHJcbiAgZmxleC1ncm93OiAwO1xyXG4gIG1hcmdpbjogMCAwIDE5LjhweDtcclxuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIiwgdWktc2VyaWY7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMTFweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4ubWFpbi1mb3JtLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA0NDdweDtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgZmxleC1ncm93OiAwO1xyXG4gIG1hcmdpbjogMCAwIDAgMDtcclxuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIiwgdWktc2VyaWY7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMTFweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4ubG9naW4tYnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDQ0NXB4O1xyXG4gIGhlaWdodDogMTAycHg7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSA0NDVweC8yIC0gMC41cHgpO1xyXG4gIHRvcDogY2FsYyg1MCUgLSAxMDEuMTZweC8yIC0gMTcxLjU4cHgpO1xyXG59XHJcblxyXG5cclxuLmZvcmdvdC1wYXNzd29yZCB7XHJcbiAgLyogRCBVbmRlckxpbmUgUmVndWxhciAqL1xyXG5cclxuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIiwgdWktc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxODMlICovXHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMWVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcblxyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG5cclxuXHJcbi50aGVtYXRpYy1icmVhayB7XHJcbiAgbWFyZ2luOiAyMHB4IDJweCAxMHB4IDIuNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDhlY2Y7XHJcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICMzZDhlY2Y7XHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbiNidXR0b24tc3VjY2Vzc2Z1bGx5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7IGhlaWdodDpcclxuICAxMDJweDsgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICBsZWZ0OiAwO1xyXG59XHJcblxyXG5zdG9yeWJvb2stYnV0dG9uLXN1Y2Nlc3NmdWxseSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDI0MHB4O1xyXG59XHJcblxyXG5cclxuI2J1dHRvbi1leCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDhweDtcclxuICBsZWZ0OiA5OXB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5sb2dpbi1mYWlsZWQtbWVzc2FnZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogNTVweDtcclxuXHJcblxyXG4gIC8qIEQgUmVndWxhciAqL1xyXG4gIGZvbnQtZmFtaWx5OiBOb3RvIFNhbnMsIHVpLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogMzFweDtcclxuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMTgzJSAqL1xyXG5cclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMWVtO1xyXG5cclxuICAvKiBSZWQgKi9cclxuXHJcbiAgY29sb3I6ICNGQTRGNEY7XHJcblxyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    59067:
    /*!****************************************************************************!*\
      !*** ./src/stories/forms/verification-form/verification-form.component.ts ***!
      \****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            VerificationFormComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _cards_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../cards/card.component */
      56970);
      /* harmony import */


      var _buttons_button_ex_button_ex_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../buttons/button-ex/button-ex.component */
      94874);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _buttons_button_continue_button_continue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../buttons/button-continue/button-continue.component */
      34591);
      /* harmony import */


      var _buttons_button_successfully_button_successfully_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../buttons/button-successfully/button-successfully.component */
      80662);
      /* harmony import */


      var _inputs_code_input_code_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../inputs/code-input/code-input.component */
      16027);
      /* harmony import */


      var _app_storybook_pipes_api_error_message_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../app/storybook/pipes/api-error-message.pipe */
      57074);

      var _c0 = ["codeInput"];

      function VerificationFormComponent_storybook_button_successfully_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "storybook-button-successfully", 17);
        }
      }

      function VerificationFormComponent_code_input_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "code-input", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("codeChanged", function VerificationFormComponent_code_input_20_Template_code_input_codeChanged_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r5.onCodeChanged($event);
          })("codeCompleted", function VerificationFormComponent_code_input_20_Template_code_input_codeCompleted_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r7.onCodeCompleted($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("codeLength", ctx_r1.codeLength);
        }
      }

      function VerificationFormComponent_table_23_tr_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "apiErrorMessage");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var message_r9 = ctx.$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, message_r9.trim(), ctx_r8.param));
        }
      }

      function VerificationFormComponent_table_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "apiErrorMessage");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, VerificationFormComponent_table_23_tr_4_Template, 3, 4, "tr", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 2, ctx_r2.status == null ? null : ctx_r2.status.verErrorMessage.toString(), ctx_r2.param));

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.status == null ? null : ctx_r2.status.verErrorMessage.data == null ? null : ctx_r2.status.verErrorMessage.data.confirmPassword.split(", "));
        }
      }

      function VerificationFormComponent_a_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VerificationFormComponent_a_25_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r10.generateNewCodeFor2SV.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", "resend the verification code", " ");
        }
      }

      var VerificationFormComponent = /*#__PURE__*/function () {
        function VerificationFormComponent() {
          _classCallCheck(this, VerificationFormComponent);

          this.codeLength = 4;
          this.code = '';
          this.param = {
            language: 'login-main'
          };
          this.isLoading = false; // tslint:disable-next-line: no-output-on-prefix

          this.sendVerificationReq = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
          this.generateNewCodeFor2SV = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
          this.clickXButton = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        }

        _createClass(VerificationFormComponent, [{
          key: "onSubmit",
          value: function onSubmit() {
            console.warn('Send Verification Request!');
            this.sendVerificationReq.emit(this.code);

            if (!this.status.isVerSuccess) {
              this.codeInput.reset();
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {} // this called every time when user changed the code

        }, {
          key: "onCodeChanged",
          value: function onCodeChanged(code) {
            this.code = code; //console.log('code entered: '+ this.code);
          } // this called only if user entered full code

        }, {
          key: "onCodeCompleted",
          value: function onCodeCompleted(code) {//
          }
        }]);

        return VerificationFormComponent;
      }();

      VerificationFormComponent.ɵfac = function VerificationFormComponent_Factory(t) {
        return new (t || VerificationFormComponent)();
      };

      VerificationFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: VerificationFormComponent,
        selectors: [["storybook-verification-form"]],
        viewQuery: function VerificationFormComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.codeInput = _t.first);
          }
        },
        inputs: {
          status: "status",
          isLoading: "isLoading"
        },
        outputs: {
          sendVerificationReq: "sendVerificationReq",
          generateNewCodeFor2SV: "generateNewCodeFor2SV",
          clickXButton: "clickXButton"
        },
        decls: 26,
        vars: 6,
        consts: [["id", "main-login-card", 1, "col-md-12"], [1, "card-container"], [1, "h-100", "d-flex", "align-items-center", "justify-content-center"], ["id", "button-ex", 3, "click"], [1, "form-header"], ["name", "currentForm"], [1, "Vector"], [1, "second-header", 2, "top", "82px"], ["href", "#/login", 1, "second-header-text", 2, "position", "relative", "top", "10px", "text-align", "left"], ["id", "button-successfully"], ["style", "position: relative; top: 15px", 4, "ngIf"], [3, "codeLength", "codeChanged", "codeCompleted", 4, "ngIf"], [1, "login-button"], ["role", "alert", 1, "login-failed-message", 2, "position", "relative", "top", "15px"], [4, "ngIf"], ["size", "medium", "label", "Login ", "type", "button", 2, "position", "relative", "top", "15px", 3, "click"], ["class", "resend-verification", "style", "position: relative; top: 40px;", 3, "click", 4, "ngIf"], [2, "position", "relative", "top", "15px"], [3, "codeLength", "codeChanged", "codeCompleted"], ["codeInput", ""], [4, "ngFor", "ngForOf"], [1, "resend-verification", 2, "position", "relative", "top", "40px", 3, "click"]],
        template: function VerificationFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "storybook-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "storybook-button-ex", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VerificationFormComponent_Template_storybook_button_ex_click_3_listener() {
              return ctx.clickXButton.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Aeonix App Center");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, VerificationFormComponent_storybook_button_successfully_19_Template, 1, 0, "storybook-button-successfully", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, VerificationFormComponent_code_input_20_Template, 2, 1, "code-input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, VerificationFormComponent_table_23_Template, 5, 5, "table", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "storybook-button-continue", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function VerificationFormComponent_Template_storybook_button_continue_click_24_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, VerificationFormComponent_a_25_Template, 2, 1, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", "Please enter the Verification Code", "");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", "you received in your mail:", " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.status.isVerSuccess);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.status.isVerSuccess);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.status == null ? null : ctx.status.isVerFailed);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.status.isVerSuccess);
          }
        },
        directives: [_cards_card_component__WEBPACK_IMPORTED_MODULE_0__["default"], _buttons_button_ex_button_ex_component__WEBPACK_IMPORTED_MODULE_1__.ButtonExComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _buttons_button_continue_button_continue_component__WEBPACK_IMPORTED_MODULE_2__.ButtonContinueComponent, _buttons_button_successfully_button_successfully_component__WEBPACK_IMPORTED_MODULE_3__.ButtonSuccessfullyComponent, _inputs_code_input_code_input_component__WEBPACK_IMPORTED_MODULE_4__.CodeInputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf],
        pipes: [_app_storybook_pipes_api_error_message_pipe__WEBPACK_IMPORTED_MODULE_5__.ApiErrorMessagePipe],
        styles: [".Vector[_ngcontent-%COMP%] {\n  position: relative;\n  width: 637.5px;\n  height: 819px;\n  left: calc(50% - 637.5px/2 - 1.25px);\n  top: calc(50% - 819px/2 - 0.5px);\n}\n\n.form[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 3.18%;\n  right: 14.78%;\n  top: 0;\n  bottom: 0;\n  border-radius: 14px;\n  box-shadow: -4px 4px 10px 0 rgba(88, 166, 228, 0.3);\n  background-color: #fff;\n}\n\n.card-container.card[_ngcontent-%COMP%] {\n  max-width: 400px !important;\n  padding: 10px 10px;\n}\n\n.col-md-12[_ngcontent-%COMP%] {\n  position: center;\n  width: 637.5px;\n  height: 819px;\n  left: calc(50% - 637.5px/2 - 0.25px);\n  top: calc(50% - 819px/2 - 0.5px);\n}\n\n#button-successfully[_ngcontent-%COMP%] {\n  position: relative;\n  width: 445px;\n  height: 102px;\n  margin-top: 50px;\n  margin-bottom: 100px;\n  left: calc(50% - 445px/2 - 0.5px);\n  top: 50px;\n}\n\nstorybook-button-successfully[_ngcontent-%COMP%] {\n  position: relative;\n  left: 140px;\n}\n\n#button-ex[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 48px;\n  left: 99px;\n  width: 20px;\n  height: 20px;\n  margin: 0;\n}\n\n.card[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 5.18%;\n  right: 4.78%;\n  top: 0;\n  bottom: 0;\n  border-radius: 14px;\n  box-shadow: -4px 4px 10px 0 rgba(88, 166, 228, 0.3);\n  background-color: #fff;\n}\n\n.form-header[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12.94%;\n  bottom: 77.05%;\n  width: 447px;\n  height: 82px;\n  flex-grow: 0;\n  margin: 0 0 19.8px;\n  font-family: \"Noto Sans\", ui-serif;\n  font-size: 40px;\n  font-weight: bolder;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 45px;\n  letter-spacing: -0.011px;\n  text-align: left;\n  color: #000000;\n}\n\n#code-input[_ngcontent-%COMP%] {\n  position: relative;\n  width: 445px;\n  height: 102px;\n  left: calc(50% - 445px/2 - 0.5px);\n  top: calc(50% - 101.16px/2 - 171.58px);\n}\n\n.login-button[_ngcontent-%COMP%] {\n  position: relative;\n  width: 445px;\n  height: 102px;\n  left: calc(50% - 445px/2 - 0.5px);\n  top: 0;\n}\n\n.resend-verification[_ngcontent-%COMP%] {\n  \n  font-family: \"Noto Sans\", ui-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 31px;\n  \n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: -0.011em;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #000000;\n}\n\n.second-header-text[_ngcontent-%COMP%] {\n  \n  font-family: \"Noto Sans\", ui-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 31px;\n  \n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: -0.011em;\n  color: #000000;\n}\n\n.login-failed-message[_ngcontent-%COMP%] {\n  \n  font-family: Noto Sans, ui-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 31px;\n  \n  align-items: start;\n  letter-spacing: -0.011em;\n  \n  color: #FA4F4F;\n}\n\ncode-input[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 445px;\n  height: 102px;\n  \n  align-items: start;\n  \n}\n\n.second-header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 445px;\n  height: 82px;\n  left: calc(50% - 445px/2 - 0.5px);\n  top: calc(50% - 51.16px/2 - 221.58px);\n  align-items: start;\n  \n}\n\n.Vector2[_ngcontent-%COMP%] {\n  position: static;\n  box-sizing: border-box;\n  margin-right: 10px;\n  margin-left: 11px;\n  width: 95px;\n  height: 95px;\n  \n  top: 2px;\n  \n  \n  border: 2px solid #3D8ECF;\n  border-radius: 10px;\n  display: inline-block;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlcmlmaWNhdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsbURBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUlBO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtBQURGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0NBQUE7QUFBRjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUNBQUE7RUFDQSxTQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFERjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUFGRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsbURBQUE7RUFDQSxzQkFBQTtBQUhGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUVBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUxGOztBQVNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7QUFORjs7QUFVQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUVBLE1BQUE7QUFSRjs7QUFZQTtFQUNFLHdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtFQUVBLGNBQUE7QUFYRjs7QUFjQTtFQUNFLHdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBR0EsY0FBQTtBQWRGOztBQW9CQTtFQUVFLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUVBLGtCQUFBO0VBQ0Esd0JBQUE7RUFFQSxRQUFBO0VBRUEsY0FBQTtBQXJCRjs7QUF5QkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBRUE7MENBQUE7RUFFQSxrQkFBQTtFQUFtQixHQUFBO0FBdEJyQjs7QUF5QkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBRUEsaUNBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQW1CLEdBQUE7QUF0QnJCOztBQTBCQTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7RUFDQTtnQkFBQTtFQUVBLFFBQUE7RUFDQSxhQUFBO0VBRUEsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBekJGIiwiZmlsZSI6InZlcmlmaWNhdGlvbi1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlZlY3RvciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA2MzcuNXB4O1xyXG4gIGhlaWdodDogODE5cHg7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSA2MzcuNXB4LzIgLSAxLjI1cHgpO1xyXG4gIHRvcDogY2FsYyg1MCUgLSA4MTlweC8yIC0gMC41cHgpO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDMuMTglO1xyXG4gIHJpZ2h0OiAxNC43OCU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIGJveC1zaGFkb3c6IC00cHggNHB4IDEwcHggMCByZ2JhKDg4LCAxNjYsIDIyOCwgMC4zKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuXHJcbi5jYXJkLWNvbnRhaW5lci5jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG59XHJcbi5jb2wtbWQtMTJ7XHJcbiAgcG9zaXRpb246IGNlbnRlcjtcclxuICB3aWR0aDogNjM3LjVweDtcclxuICBoZWlnaHQ6IDgxOXB4O1xyXG4gIGxlZnQ6IGNhbGMoNTAlIC0gNjM3LjVweC8yIC0gMC4yNXB4KTtcclxuICB0b3A6IGNhbGMoNTAlIC0gODE5cHgvMiAtIDAuNXB4KTtcclxufVxyXG5cclxuXHJcbiNidXR0b24tc3VjY2Vzc2Z1bGx5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDQ0NXB4O1xyXG4gIGhlaWdodDogMTAycHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDQ0NXB4LzIgLSAwLjVweCk7XHJcbiAgdG9wOiA1MHB4O1xyXG59XHJcblxyXG5zdG9yeWJvb2stYnV0dG9uLXN1Y2Nlc3NmdWxseSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IDE0MHB4O1xyXG5cclxufVxyXG5cclxuI2J1dHRvbi1leCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDhweDtcclxuICBsZWZ0OiA5OXB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG4uY2FyZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUuMTglO1xyXG4gIHJpZ2h0OiA0Ljc4JTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgYm94LXNoYWRvdzogLTRweCA0cHggMTBweCAwIHJnYmEoODgsIDE2NiwgMjI4LCAwLjMpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEyLjk0JTtcclxuICBib3R0b206IDc3LjA1JTtcclxuXHJcbiAgd2lkdGg6IDQ0N3B4O1xyXG4gIGhlaWdodDogODJweDtcclxuICBmbGV4LWdyb3c6IDA7XHJcbiAgbWFyZ2luOiAwIDAgMTkuOHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiLCB1aS1zZXJpZjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcblxyXG59XHJcblxyXG4jY29kZS1pbnB1dCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA0NDVweDtcclxuICBoZWlnaHQ6IDEwMnB4O1xyXG4gIGxlZnQ6IGNhbGMoNTAlIC0gNDQ1cHgvMiAtIDAuNXB4KTtcclxuICB0b3A6IGNhbGMoNTAlIC0gMTAxLjE2cHgvMiAtIDE3MS41OHB4KTtcclxufVxyXG5cclxuXHJcbi5sb2dpbi1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNDQ1cHg7XHJcbiAgaGVpZ2h0OiAxMDJweDtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDQ0NXB4LzIgLSAwLjVweCk7XHJcbiAgLy90b3A6IGNhbGMoNTAlIC0gMTAxLjE2cHgvMiAtIDE3MS41OHB4KTtcclxuICB0b3A6IDA7XHJcbn1cclxuXHJcblxyXG4ucmVzZW5kLXZlcmlmaWNhdGlvbiB7XHJcbiAgLyogRCBVbmRlckxpbmUgUmVndWxhciAqL1xyXG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiLCB1aS1zZXJpZjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDE4MyUgKi9cclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDExZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxuXHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5zZWNvbmQtaGVhZGVyLXRleHQge1xyXG4gIC8qIEQgVW5kZXJMaW5lIFJlZ3VsYXIgKi9cclxuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIiwgdWktc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxODMlICovXHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMWVtO1xyXG5cclxuXHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5sb2dpbi1mYWlsZWQtbWVzc2FnZSB7XHJcblxyXG4gIC8qIEQgUmVndWxhciAqL1xyXG4gIGZvbnQtZmFtaWx5OiBOb3RvIFNhbnMsIHVpLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogMzFweDtcclxuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMTgzJSAqL1xyXG5cclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMWVtO1xyXG5cclxuICAvKiBSZWQgKi9cclxuXHJcbiAgY29sb3I6ICNGQTRGNEY7XHJcblxyXG59XHJcblxyXG5jb2RlLWlucHV0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDQ0NXB4O1xyXG4gIGhlaWdodDogMTAycHg7XHJcblxyXG4gIC8qbGVmdDogY2FsYyg1MCUgLSA0NDVweC8yIC0gMC41cHgpO1xyXG4gIHRvcDogY2FsYyg1MCUgLSAxMDEuMTZweC8yIC0gMjIxLjU4cHgpOyovXHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0Oy8qKi9cclxufVxyXG5cclxuLnNlY29uZC1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNDQ1cHg7XHJcbiAgaGVpZ2h0OiA4MnB4O1xyXG5cclxuICBsZWZ0OiBjYWxjKDUwJSAtIDQ0NXB4LzIgLSAwLjVweCk7XHJcbiAgdG9wOiBjYWxjKDUwJSAtIDUxLjE2cHgvMiAtIDIyMS41OHB4KTtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7LyoqL1xyXG59XHJcblxyXG5cclxuLlZlY3RvcjIge1xyXG4gIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDExcHg7XHJcblxyXG4gIHdpZHRoOiA5NXB4O1xyXG4gIGhlaWdodDogOTVweDtcclxuICAvKmxlZnQ6IDFweDtcclxuICByaWdodDogMC4wMyU7Ki9cclxuICB0b3A6IDJweDtcclxuICAvKmJvdHRvbTogMDsqL1xyXG5cclxuICAvKiBCbHVlICovXHJcbiAgYm9yZGVyOiAycHggc29saWQgIzNEOEVDRjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    22783:
    /*!*********************************************************************!*\
      !*** ./src/stories/inputs/account-input/account-input.component.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccountInputComponent": function AccountInputComponent() {
          return (
            /* binding */
            _AccountInputComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_stories_actions_action_input_action_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/stories/actions/action-input/action-input.component */
      61410);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _buttons_button_continue_button_continue_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../buttons/button-continue/button-continue.component */
      34591);
      /* harmony import */


      var _directive_bubble_input_popover_input_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../directive/bubble-input/popover-input.directive */
      40019);

      function AccountInputComponent_span_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "storybook-button-continue", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function AccountInputComponent_span_8_Template_storybook_button_continue_onClick_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r3.changePassword.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AccountInputComponent_span_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Enable Profile Picture");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r1.storyInput == null ? null : ctx_r1.storyInput.title, " ");
        }
      }

      function AccountInputComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("for", ctx_r2.storyInput == null ? null : ctx_r2.storyInput.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", (ctx_r2.storyInput == null ? null : ctx_r2.storyInput.id) + "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx_r2.storyInput == null ? null : ctx_r2.storyInput.icon, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("name", ctx_r2.storyInput == null ? null : ctx_r2.storyInput.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("inputPopover", ctx_r2.popover)("data", ctx_r2.getErrorList(ctx_r2.conditionList))("header", ctx_r2.getErrorHeader(ctx_r2.storyInput.title));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("type", ctx_r2.storyInput == null ? null : ctx_r2.storyInput.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", ctx_r2.storyInput == null ? null : ctx_r2.storyInput.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("name", ctx_r2.storyInput == null ? null : ctx_r2.storyInput.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("formControlName", ctx_r2.storyInput == null ? null : ctx_r2.storyInput.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", ctx_r2.storyInput == null ? null : ctx_r2.storyInput.placeholder);
        }
      }

      var _AccountInputComponent = /*#__PURE__*/function () {
        function _AccountInputComponent() {
          _classCallCheck(this, _AccountInputComponent);

          var _a;

          this.popover = {
            content: src_stories_actions_action_input_action_input_component__WEBPACK_IMPORTED_MODULE_0__.ActionInputComponent
          }; // tslint:disable-next-line: no-output-on-prefix

          this.onPinInput = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter(); // tslint:disable-next-line: no-output-on-prefix

          this.onArchiveInput = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          this.changePassword = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          this.hideInput = false;
          this.isStrength = ((_a = this.storyInput) === null || _a === void 0 ? void 0 : _a.state) === 'NEW PASSWORD' ? 'storybook-input--addStrength' : 'storybook-input--clearStrength';
          this.isPasswordTextHide = false;
          this.conditionList = [];
        }
        /*registerForm = new FormGroup({
          username: new FormControl('', Validators.minLength(2)),
          password: new FormControl('zaqwsx', Validators.minLength(2))
        });
          
        get username2(): FormControl  {
          return this.currentForm?.controls.username.get();
        }*/


        _createClass(_AccountInputComponent, [{
          key: "username",
          get: function get() {
            return this.currentForm.get('username');
          }
        }, {
          key: "password",
          get: function get() {
            return this.currentForm.get('password');
          }
        }, {
          key: "getErrorHeader",
          value: function getErrorHeader(controllerType) {
            var header = '';

            switch (controllerType) {
              case "phone":
                header = 'Must contain phone:';
                break;

              case "email":
                header = 'Must contain email:';
                break;

              case "oldPassword":
              case "confirmPassword":
              case "password":
                header = 'The password must contain:';
                break;

              default:
                header = controllerType;
            }

            return header;
          }
        }, {
          key: "getErrorList",
          value: function getErrorList(conditionList) {
            var _this31 = this;

            var passConditions = [];
            var actionInputs = [];
            conditionList.forEach(function (condition) {
              switch (condition) {
                case "minLength":
                  actionInputs.push({
                    "conditionName": "minLengthValid",
                    "presentingMessage": ' A minimum of 8 characters',
                    "isFulfilled": !(_this31.minLengthValid || !(_this31.formControler.value.length > 0))
                  });
                  break;

                case "requiresUppercase":
                  actionInputs.push({
                    "conditionName": "requiresUppercaseValid",
                    "presentingMessage": ' At least 1 Uppercase letters',
                    "isFulfilled": !(_this31.requiresUppercaseValid || !(_this31.formControler.value.length > 0))
                  });
                  break;

                case "requiresLowercase":
                  actionInputs.push({
                    "conditionName": "requiresLowercaseValid",
                    "presentingMessage": ' At least 1 lowercase letters',
                    "isFulfilled": !(_this31.requiresLowercaseValid || !(_this31.formControler.value.length > 0))
                  });
                  break;

                case "requiresDigit":
                  actionInputs.push({
                    "conditionName": "requiresDigitValid",
                    "presentingMessage": ' A number',
                    "isFulfilled": !(_this31.requiresDigitValid || !(_this31.formControler.value.length > 0))
                  });
                  break;

                case "requiresSpecialChars":
                  actionInputs.push({
                    "conditionName": "requiresSpecialCharsValid",
                    "presentingMessage": ' At least 1 special character',
                    "isFulfilled": !(_this31.requiresSpecialCharsValid || !(_this31.formControler.value.length > 0))
                  });
                  break;

                case "requiresEmail":
                  actionInputs.push({
                    "conditionName": "requiresEmailValid",
                    "presentingMessage": ' A well-formed email address',
                    "isFulfilled": !(_this31.requiresEmailValid || !(_this31.formControler.value.length > 0))
                  });
                  break;

                case "requiresPhone":
                  actionInputs.push({
                    "conditionName": "requiresPhoneValid",
                    "presentingMessage": ' A well-formed phone number',
                    "isFulfilled": !(_this31.requiresPhoneValid || !(_this31.formControler.value.length > 0))
                  });
                  break;
              }
            });
            return actionInputs;
          }
        }, {
          key: "passwordValid",
          get: function get() {
            return this.formControler.errors === null;
          }
        }, {
          key: "requiredValid",
          get: function get() {
            return this.formControler.hasError("required");
          }
        }, {
          key: "minLengthValid",
          get: function get() {
            return this.formControler.hasError("minlength");
          }
        }, {
          key: "requiresDigitValid",
          get: function get() {
            return this.formControler.hasError("requiresDigit");
          }
        }, {
          key: "requiresUppercaseValid",
          get: function get() {
            return this.formControler.hasError("requiresUppercase");
          }
        }, {
          key: "requiresLowercaseValid",
          get: function get() {
            return this.formControler.hasError("requiresLowercase");
          }
        }, {
          key: "requiresSpecialCharsValid",
          get: function get() {
            return this.formControler.hasError("requiresSpecialChars");
          }
        }, {
          key: "requiresEmailValid",
          get: function get() {
            return this.formControler.hasError("email");
          }
        }, {
          key: "requiresPhoneValid",
          get: function get() {
            return this.formControler.hasError("requiresPhoneChars");
          }
        }, {
          key: "formControler",
          get: function get() {
            var _a;

            return this.currentForm.get((_a = this.storyInput) === null || _a === void 0 ? void 0 : _a.title.toString());
          }
          /**
           * Component method to trigger the onPin event
           * @param id string
           */

        }, {
          key: "onPin",
          value: function onPin(id) {
            this.onPinInput.emit(id);
          }
          /**
           * Component method to trigger the onArchive event
           * @param id string
           */

        }, {
          key: "onArchive",
          value: function onArchive(id) {
            this.onArchiveInput.emit(id);
          }
        }, {
          key: "classes",
          get: function get() {
            var _a;

            this.isStrength = ((_a = this.storyInput) === null || _a === void 0 ? void 0 : _a.state) === 'NEW PASSWORD' ? 'storybook-input--addStrength' : 'storybook-input--clearStrength';
            return ['storybook-input-strength', this.isStrength];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a;

            this.isPasswordTextHide = (_a = this.storyInput) === null || _a === void 0 ? void 0 : _a.state.includes('PASSWORD');
          }
        }]);

        return _AccountInputComponent;
      }();

      _AccountInputComponent.ɵfac = function AccountInputComponent_Factory(t) {
        return new (t || _AccountInputComponent)();
      };

      _AccountInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _AccountInputComponent,
        selectors: [["storybook-account-input"]],
        inputs: {
          storyInput: "storyInput",
          hideInput: "hideInput",
          currentForm: "currentForm",
          conditionList: "conditionList"
        },
        outputs: {
          onPinInput: "onPinInput",
          onArchiveInput: "onArchiveInput",
          changePassword: "changePassword"
        },
        decls: 11,
        vars: 7,
        consts: [["id", "parent3", 3, "hidden", "ngClass"], ["id", "parent1"], [1, "main", 3, "formGroup"], [1, "user-name", "D-Caps-Regular"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["size", "small", "label", "Change Password", "type", "button", 3, "onClick"], [1, "UserNameType"], [1, "user-checkbox-header"], ["type", "checkbox", 2, "position", "relative", "margin", "0 2px 0 2px", "top", "1px", "right", "3px"], [1, "EnableProfilePicture"], [1, "Vector2", 3, "for"], ["alt", "icon input userName", 1, "icon-input", 3, "src", "name"], [3, "inputPopover", "data", "header"], ["required", "", 1, "inputField", 3, "type", "id", "name", "formControlName", "placeholder"], ["type", "button", 1, "icon-input-edit"], ["src", "./assets/images/EditIconA.png", "alt", "icon input type", 1, "icon-input-edit"]],
        template: function AccountInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "span", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AccountInputComponent_span_8_Template, 2, 0, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AccountInputComponent_span_9_Template, 7, 1, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AccountInputComponent_span_10_Template, 8, 12, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.storyInput == null ? null : ctx.storyInput.hide)("ngClass", ctx.classes);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.currentForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.storyInput == null ? null : ctx.storyInput.state);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx.storyInput == null ? null : ctx.storyInput.type);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "password");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "enable-profile-picture");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchDefault, _buttons_button_continue_button_continue_component__WEBPACK_IMPORTED_MODULE_1__.ButtonContinueComponent, _directive_bubble_input_popover_input_directive__WEBPACK_IMPORTED_MODULE_2__.PopoverInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName],
        styles: [".main[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100px;\n  top: 0;\n  \n  background-color: rgba(255, 255, 255, 0);\n}\n\n#storybook-pass[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 0, 0, 0.11);\n  background-color: rgba(255, 255, 255, 0);\n}\n\n#parent1[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 1px;\n  height: 100px;\n  width: 100%;\n  \n  background-color: rgba(255, 255, 255, 0);\n}\n\n#parent3[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  margin: 10px 0 0 0;\n  \n  \n}\n\n\n\n.user-name[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 300px;\n  height: 35px;\n  left: 0%;\n  right: 82.7%;\n  top: 10%;\n  bottom: 68.37%;\n  \n  display: flex;\n  align-items: center;\n  letter-spacing: -0.011em;\n  text-transform: uppercase;\n  color: #000000;\n}\n\n\n\n.D-Caps-Regular[_ngcontent-%COMP%] {\n  font-family: Noto Sans, ui-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 31px;\n}\n\n.UserNameType[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 228px;\n  height: 32px;\n  left: 0;\n  bottom: 0;\n  margin: 4.2px 1px 2.8px 0;\n  \n  font-family: Noto Sans, ui-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 31px;\n  \n  display: flex;\n  align-items: self-start;\n  letter-spacing: -0.011em;\n  color: #000000;\n}\n\n.inputField[_ngcontent-%COMP%] {\n  position: relative;\n  height: 25px;\n  width: 228px;\n  left: 35px;\n  bottom: -5px;\n  margin: 4.2px 1px 2.8px 20.3px;\n  \n  -o-object-fit: contain;\n     object-fit: contain;\n  font-family: Noto Sans, ui-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 48%;\n  \n  box-shadow: none;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.19px;\n  border-color: rgba(255, 255, 255, 0);\n  color: #000000;\n}\n\n.EnableProfilePicture[_ngcontent-%COMP%] {\n  display: inline;\n  position: relative;\n  margin: 4.2px 1px 2.8px 0;\n  \n  font-family: Noto Sans, ui-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 31px;\n  \n  text-align: right;\n  letter-spacing: -0.011em;\n  color: #000000;\n}\n\n.user-checkbox-header[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 1px;\n  top: 50px;\n  padding: 0;\n  margin: 0;\n  border-bottom-width: 0px;\n  background-color: rgba(45, 148, 55, 0);\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.icon-input-edit[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 18.4px;\n  height: 19.51px;\n  right: 10px;\n  bottom: 11px;\n  padding-top: 0px;\n  margin: 0;\n  border-bottom-width: 0px;\n  background-color: rgba(45, 148, 55, 0);\n}\n\nimg.icon-input-edit[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1px;\n  right: 1px;\n  width: inherit;\n  height: inherit;\n  padding: 0px;\n  margin: 0px;\n  \n}\n\nimg.icon-input[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 22.72px;\n  height: 26.74px;\n  left: 17px;\n  bottom: 7px;\n  transform: rotate(0deg);\n  background-position: bottom;\n}\n\ninput[_ngcontent-%COMP%]:focus {\n  background: #99999900;\n  box-shadow: 0 0 5px #99999900;\n  border-top-color: #99999900;\n  border-left-color: #99999900;\n  border-right-color: #99999900;\n}\n\ninput[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #C8C8C8;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  color: #C8C8C8;\n}\n\ninput[type=password][_ngcontent-%COMP%]:focus {\n  color: #000000;\n  background: #99999900;\n  box-shadow: 0 0 5px #99999900;\n  border-top-color: #99999900;\n  border-left-color: #99999900;\n  border-right-color: #99999900;\n}\n\ninput[type=tel][_ngcontent-%COMP%]:focus {\n  color: #000000;\n  background: #99999900;\n  box-shadow: 0 0 5px #99999900;\n  border-top-color: #99999900;\n  border-left-color: #99999900;\n  border-right-color: #99999900;\n}\n\n.Vector2[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  position: absolute;\n  left: 0.2%;\n  right: 10.03%;\n  top: 42.66%;\n  bottom: 0;\n  \n  border: 2px solid #3D8ECF;\n  border-radius: 10px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n}\n\n.Button-App-Label[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 33px;\n  horiz-align: center;\n}\n\n.storybook-input--addStrength[_ngcontent-%COMP%] {\n  height: 130px;\n}\n\n.storybook-input--clearStrength[_ngcontent-%COMP%] {\n  height: 110px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtaW5wdXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0E7O3VCQUFBO0VBR0Esd0NBQUE7QUFORjs7QUFVQTtFQUNFLHVDQUFBO0VBQ0Esd0NBQUE7QUFQRjs7QUFVQTtFQUNFLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSx3Q0FBQTtBQVBGOztBQVVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQTs7c0JBQUE7RUFHQSw0Q0FBQTtBQVBGOztBQVVBOzs7Ozs7Ozs7Q0FBQTs7QUFZQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EscUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBRUEsY0FBQTtBQVZGOztBQWNBLG1CQUFBOztBQUNBO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBWEY7O0FBY0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSx5QkFBQTtFQUVBLGNBQUE7RUFFQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQ0FBQTtFQUdBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBRUEsY0FBQTtBQWhCRjs7QUFtQkE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUVBLHFCQUFBO0VBQ0Esc0JBQUE7S0FBQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFFQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBRUEsb0NBQUE7RUFDQSxjQUFBO0FBbkJGOztBQXNCQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBR0EsY0FBQTtFQUVBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBR0EsaUJBQUE7RUFDQSx3QkFBQTtFQUVBLGNBQUE7QUF6QkY7O0FBNEJBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUF6QkY7O0FBOEJBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQ0FBQTtBQTNCRjs7QUE4QkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBO29EQUFBO0FBMUJGOztBQW9DQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUVBLHVCQUFBO0VBQ0EsMkJBQUE7QUFsQ0Y7O0FBcUNBO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQWxDRjs7QUFzQ0E7RUFDRSxjQUFBO0FBbkNGOztBQWtDQTtFQUNFLGNBQUE7QUFuQ0Y7O0FBc0NBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFuQ0Y7O0FBc0NBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFuQ0Y7O0FBc0NBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUdBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFFQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQXRDRjs7QUF5Q0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUF0Q0Y7O0FBeUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBdENGOztBQTBDQTtFQUNJLGFBQUE7QUF2Q0o7O0FBNkNBO0VBR0ksYUFBQTtBQTVDSiIsImZpbGUiOiJhY2NvdW50LWlucHV0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5cclxuXHJcbiR0b3R0YWwtaGVpZ2h0OiAxNjBweCAhZGVmYXVsdDtcclxuXHJcbi5tYWluIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB0b3A6IDA7XHJcbiAgLypsZWZ0OiBjYWxjKDUwJSAtIDQ0NXB4LzIgLSAwLjVweCk7XHJcbiAgdG9wOiBjYWxjKDUwJSAtIDEwMS4xNnB4LzIgLSAxNzEuNThweCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcblxyXG59XHJcblxyXG4jc3Rvcnlib29rLXBhc3Mge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAwLCAwLCAwLjExKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG59XHJcblxyXG4jcGFyZW50MSB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDFweDtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qYm9yZGVyOiAxcHggc29saWQgI2MwMDc3ZjsqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbn1cclxuXHJcbiNwYXJlbnQzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xyXG4gIC8qaGVpZ2h0OiAxNjBweCA7XHJcbiAgIGJvcmRlcjogMXB4IHNvbGlkICMwNzJjYzA7XHJcbm1hcmdpbi1ib3R0b206IDNweDsqL1xyXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTsqL1xyXG59XHJcblxyXG4vKlxyXG5zcGFuLmFic29sdXRlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjOEFDMDA3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbn1cclxuKi9cclxuXHJcblxyXG4udXNlci1uYW1lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBsZWZ0OiAwJTtcclxuICByaWdodDogODIuNyU7XHJcbiAgdG9wOiAxMCU7XHJcbiAgYm90dG9tOiA2OC4zNyU7XHJcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDIyMyUgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMWVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG5cclxuLyogRCBDYXBzIFJlZ3VsYXIgKi9cclxuLkQtQ2Fwcy1SZWd1bGFyIHtcclxuICBmb250LWZhbWlseTogTm90byBTYW5zLCB1aS1zZXJpZjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbn1cclxuXHJcbi5Vc2VyTmFtZVR5cGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjI4cHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIG1hcmdpbjogNC4ycHggMXB4IDIuOHB4IDA7XHJcblxyXG4gIC8qIEQgUmVndWxhciAqL1xyXG5cclxuICBmb250LWZhbWlseTogTm90byBTYW5zLCB1aS1zZXJpZjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDE4MyUgKi9cclxuXHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IHNlbGYtc3RhcnQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMWVtO1xyXG5cclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLmlucHV0RmllbGQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDIyOHB4O1xyXG4gIGxlZnQ6IDM1cHg7XHJcbiAgYm90dG9tOiAtNXB4O1xyXG4gIG1hcmdpbjogNC4ycHggMXB4IDIuOHB4IDIwLjNweDtcclxuXHJcbiAgLyogRCBFeGFtcGxlIEl0YWxpYyAqL1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgZm9udC1mYW1pbHk6IE5vdG8gU2FucywgdWktc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0OCU7XHJcbiAgLyogb3IgNjUlICovXHJcblxyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4xOXB4O1xyXG5cclxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5FbmFibGVQcm9maWxlUGljdHVyZXtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogNC4ycHggMXB4IDIuOHB4IDA7XHJcblxyXG5cclxuICAvKiBEIFJlZ3VsYXIgKi9cclxuXHJcbiAgZm9udC1mYW1pbHk6IE5vdG8gU2FucywgdWktc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxODMlICovXHJcblxyXG5cclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDExZW07XHJcblxyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4udXNlci1jaGVja2JveC1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMXB4O1xyXG4gIHRvcDogNTBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NSwgMTQ4LCA1NSwgMCk7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuXHJcbn1cclxuXHJcblxyXG4uaWNvbi1pbnB1dC1lZGl0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDE4LjRweDtcclxuICBoZWlnaHQ6IDE5LjUxcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgYm90dG9tOiAxMXB4O1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ1LCAxNDgsIDU1LCAwKTtcclxufVxyXG5cclxuaW1nLmljb24taW5wdXQtZWRpdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMXB4O1xyXG4gIHJpZ2h0OiAxcHg7XHJcbiAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW46IDBweDtcclxuICAvKm9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSg2MSwgMTQyLCAyMDcsIDAuMTUpOyovXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmltZy5pY29uLWlucHV0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDIyLjcycHg7XHJcbiAgaGVpZ2h0OiAyNi43NHB4O1xyXG4gIGxlZnQ6IDE3cHg7XHJcbiAgYm90dG9tOiA3cHg7XHJcblxyXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6ICM5OTk5OTkwMDtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4ICM5OTk5OTkwMDtcclxuICBib3JkZXItdG9wLWNvbG9yOiAjOTk5OTk5MDA7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICM5OTk5OTkwMDtcclxuICBib3JkZXItcmlnaHQtY29sb3I6ICM5OTk5OTkwMDtcclxufVxyXG5cclxuXHJcbmlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNDOEM4Qzg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBiYWNrZ3JvdW5kOiAjOTk5OTk5MDA7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjOTk5OTk5MDA7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzk5OTk5OTAwO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjOTk5OTk5MDA7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjOTk5OTk5MDA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGVsXTpmb2N1cyB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgYmFja2dyb3VuZDogIzk5OTk5OTAwO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggIzk5OTk5OTAwO1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICM5OTk5OTkwMDtcclxuICBib3JkZXItbGVmdC1jb2xvcjogIzk5OTk5OTAwO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzk5OTk5OTAwO1xyXG59XHJcblxyXG4uVmVjdG9yMiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy93aWR0aDogMTAwJTtcclxuXHJcbiAgbGVmdDogMC4yJTtcclxuICByaWdodDogMTAuMDMlO1xyXG4gIHRvcDogNDIuNjYlO1xyXG4gIGJvdHRvbTogMDtcclxuXHJcbiAgLyogQmx1ZSAqL1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICMzRDhFQ0Y7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5CdXR0b24tQXBwLUxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzM3B4O1xyXG4gIGhvcml6LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcblxyXG4uc3Rvcnlib29rLWlucHV0LS1hZGRTdHJlbmd0aCB7XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG5cclxuXHJcblxyXG59XHJcblxyXG4uc3Rvcnlib29rLWlucHV0LS1jbGVhclN0cmVuZ3RoIHtcclxuXHJcblxyXG4gICAgaGVpZ2h0OiAxMTBweDtcclxuXHJcblxyXG59XHJcblxyXG5cclxuIl19 */"]
      });
      /***/
    },

    /***/
    95341:
    /*!**********************************************************************!*\
      !*** ./src/stories/inputs/code-input/code-input.component.config.ts ***!
      \**********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CodeInputComponentConfigToken": function CodeInputComponentConfigToken() {
          return (
            /* binding */
            _CodeInputComponentConfigToken
          );
        },

        /* harmony export */
        "defaultComponentConfig": function defaultComponentConfig() {
          return (
            /* binding */
            _defaultComponentConfig
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _CodeInputComponentConfigToken = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CodeInputComponentConfig');

      var _defaultComponentConfig = {
        codeLength: 4,
        inputType: 'tel',
        inputMode: 'numeric',
        initialFocusField: undefined,
        isCharsCode: false,
        isCodeHidden: false,
        isPrevFocusableAfterClearing: true,
        isFocusingOnLastByClickIfFilled: false,
        code: undefined,
        disabled: false,
        autocapitalize: undefined
      };
      /***/
    },

    /***/
    16027:
    /*!***************************************************************!*\
      !*** ./src/stories/inputs/code-input/code-input.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CodeInputComponent": function CodeInputComponent() {
          return (
            /* binding */
            _CodeInputComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var C_niv_web_AccGate2_AccGateFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */
      16304);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _code_input_component_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./code-input.component.config */
      95341);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _digitcode_input_digitcode_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../digitcode-input/digitcode-input.component */
      13026);

      var _c0 = ["storyInput"];

      function CodeInputComponent_span_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "storybook-digitcode-input", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function CodeInputComponent_span_0_Template_storybook_digitcode_input_onClick_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r6.onClick($event);
          })("onPaste", function CodeInputComponent_span_0_Template_storybook_digitcode_input_onPaste_1_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var i_r2 = restoredCtx.index;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r8.onPaste($event, i_r2);
          })("onInput", function CodeInputComponent_span_0_Template_storybook_digitcode_input_onInput_1_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var i_r2 = restoredCtx.index;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r9.onInput($event, i_r2);
          })("onKeydown", function CodeInputComponent_span_0_Template_storybook_digitcode_input_onKeydown_1_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var i_r2 = restoredCtx.index;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r10.onKeydown($event, i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var first_r3 = ctx.first;
          var last_r4 = ctx.last;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("code-hidden", ctx_r0.isCodeHidden);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("inputType", ctx_r0.inputType)("disabled", ctx_r0.disabled)("inputMode", ctx_r0.inputMode)("autocapitalize", ctx_r0.autocapitalize)("isFirst", first_r3)("isLast", last_r4);
        }
      }

      var InputState;

      (function (InputState) {
        InputState[InputState["ready"] = 0] = "ready";
        InputState[InputState["reset"] = 1] = "reset";
      })(InputState || (InputState = {}));

      var _CodeInputComponent = /*#__PURE__*/function () {
        function _CodeInputComponent(config) {
          _classCallCheck(this, _CodeInputComponent);

          /** @deprecated Use isCharsCode prop instead. */
          this.isNonDigitsCode = false;
          this.codeChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          this.codeCompleted = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          this.placeholders = [];
          this.inputs = [];
          this.inputsStates = [];
          this.state = {
            isFocusingAfterAppearingCompleted: false,
            isInitialFocusFieldEnabled: false
          };
          Object.assign(this, _code_input_component_config__WEBPACK_IMPORTED_MODULE_1__.defaultComponentConfig);

          if (!config) {
            return;
          } // filtering for only valid config props


          for (var prop in config) {
            if (!config.hasOwnProperty(prop)) {
              continue;
            }

            if (!_code_input_component_config__WEBPACK_IMPORTED_MODULE_1__.defaultComponentConfig.hasOwnProperty(prop)) {
              continue;
            } // @ts-ignore


            this[prop] = config[prop];
          }
        }
        /**
         * Life cycle
         */


        _createClass(_CodeInputComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // defining the state
            this.state.isInitialFocusFieldEnabled = !this.isEmpty(this.initialFocusField); // initiating the code

            this.onCodeLengthChanges();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            // initiation of the inputs
            this.inputsListSubscription = this.inputsList.changes.subscribe(this.onInputsListChanges.bind(this));
            this.onInputsListChanges(this.inputsList);
          }
        }, {
          key: "ngAfterViewChecked",
          value: function ngAfterViewChecked() {
            this.focusOnInputAfterAppearing();
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (changes.code) {
              this.onInputCodeChanges();
            }

            if (changes.codeLength) {
              this.onCodeLengthChanges();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.inputsListSubscription) {
              this.inputsListSubscription.unsubscribe();
            }
          }
          /**
           * Methods
           */

        }, {
          key: "reset",
          value: function reset() {
            var isChangesEmitting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            // resetting the code to its initial value or to an empty value
            this.onInputCodeChanges();

            if (this.state.isInitialFocusFieldEnabled) {
              // tslint:disable-next-line:no-non-null-assertion
              this.focusOnField(this.initialFocusField);
            }

            if (isChangesEmitting) {
              this.emitChanges();
            }
          }
        }, {
          key: "focusOnField",
          value: function focusOnField(index) {
            if (index >= this._codeLength) {
              throw new Error('The index of the focusing input box should be less than the codeLength.');
            }

            this.inputs[index].focus();
          }
        }, {
          key: "onClick",
          value: function onClick(e) {
            // handle click events only if the the prop is enabled
            if (!this.isFocusingOnLastByClickIfFilled) {
              return;
            }

            var target = e.target;
            var last = this.inputs[this._codeLength - 1]; // already focused

            if (target === last) {
              return;
            } // check filling


            var isFilled = this.getCurrentFilledCode().length >= this._codeLength;

            if (!isFilled) {
              return;
            } // focusing on the last input if is filled


            setTimeout(function () {
              return last.focus();
            });
          }
        }, {
          key: "onInput",
          value: function onInput(e, i) {
            var target = e.target;
            var value =
            /*e.data ||*/
            target.value;

            if (this.isEmpty(value)) {
              return;
            } // only digits are allowed if isCharsCode flag is absent/false


            if (!this.canInputValue(value)) {
              e.preventDefault();
              e.stopPropagation();
              this.setInputValue(target, null);
              this.setStateForInput(target, InputState.reset);
              return;
            }

            var values = value.toString().trim().split('');

            for (var j = 0; j < values.length; j++) {
              var index = j + i;

              if (index > this._codeLength - 1) {
                break;
              }

              this.setInputValue(this.inputs[index], values[j]);
            }

            this.emitChanges();
            var next = i + values.length;

            if (next > this._codeLength - 1) {
              target.blur();
              return;
            }

            this.inputs[next].focus();
          }
        }, {
          key: "onPaste",
          value: function onPaste(e, i) {
            e.preventDefault();
            e.stopPropagation();
            var data = e.clipboardData ? e.clipboardData.getData('text').trim() : undefined;

            if (this.isEmpty(data)) {
              return;
            } // Convert paste text into iterable
            // tslint:disable-next-line:no-non-null-assertion


            var values = data.split('');
            var valIndex = 0;

            for (var j = i; j < this.inputs.length; j++) {
              // The values end is reached. Loop exit
              if (valIndex === values.length) {
                break;
              }

              var input = this.inputs[j];
              var val = values[valIndex]; // Cancel the loop when a value cannot be used

              if (!this.canInputValue(val)) {
                this.setInputValue(input, null);
                this.setStateForInput(input, InputState.reset);
                return;
              }

              this.setInputValue(input, val.toString());
              valIndex++;
            }

            this.inputs[i].blur();
            this.emitChanges();
          }
        }, {
          key: "onKeydown",
          value: function onKeydown(e, i) {
            var _this = this;

            return (0, C_niv_web_AccGate2_AccGateFrontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
              var target, isTargetEmpty, prev, isBackspaceKey, isDeleteKey;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      target = e.target;
                      isTargetEmpty = _this.isEmpty(target.value);
                      prev = i - 1; // processing only the backspace and delete key events

                      _context5.next = 5;
                      return _this.isBackspaceKey(e);

                    case 5:
                      isBackspaceKey = _context5.sent;
                      isDeleteKey = _this.isDeleteKey(e);

                      if (!(!isBackspaceKey && !isDeleteKey)) {
                        _context5.next = 9;
                        break;
                      }

                      return _context5.abrupt("return");

                    case 9:
                      e.preventDefault();

                      _this.setInputValue(target, null);

                      if (!isTargetEmpty) {
                        _this.emitChanges();
                      } // preventing to focusing on the previous field if it does not exist or the delete key has been pressed


                      if (!(prev < 0 || isDeleteKey)) {
                        _context5.next = 14;
                        break;
                      }

                      return _context5.abrupt("return");

                    case 14:
                      if (isTargetEmpty || _this.isPrevFocusableAfterClearing) {
                        _this.inputs[prev].focus();
                      }

                    case 15:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5);
            }))();
          }
        }, {
          key: "onInputCodeChanges",
          value: function onInputCodeChanges() {
            var _this32 = this;

            if (!this.inputs.length) {
              return;
            }

            if (this.isEmpty(this.code)) {
              this.inputs.forEach(function (input) {
                _this32.setInputValue(input, null);
              });
              return;
            } // tslint:disable-next-line:no-non-null-assertion


            var chars = this.code.toString().trim().split(''); // checking if all the values are correct

            var isAllCharsAreAllowed = true;

            var _iterator = _createForOfIteratorHelper(chars),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var _char = _step.value;

                if (!this.canInputValue(_char)) {
                  isAllCharsAreAllowed = false;
                  break;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.inputs.forEach(function (input, index) {
              var value = isAllCharsAreAllowed ? chars[index] : null;

              _this32.setInputValue(input, value);
            });
          }
        }, {
          key: "onCodeLengthChanges",
          value: function onCodeLengthChanges() {
            if (!this.codeLength) {
              return;
            }

            this._codeLength = this.codeLength;

            if (this._codeLength > this.placeholders.length) {
              var _this$placeholders;

              var numbers = Array(this._codeLength - this.placeholders.length).fill(1);

              (_this$placeholders = this.placeholders).splice.apply(_this$placeholders, [this.placeholders.length - 1, 0].concat(_toConsumableArray(numbers)));
            } else if (this._codeLength < this.placeholders.length) {
              this.placeholders.splice(this._codeLength);
            }
          }
        }, {
          key: "onInputsListChanges",
          value: function onInputsListChanges(list) {
            var _this33 = this;

            if (list.length > this.inputs.length) {
              var _this$inputs, _this$inputsStates;

              var inputsToAdd = list.filter(function (item, index) {
                return index > _this33.inputs.length - 1;
              });

              (_this$inputs = this.inputs).splice.apply(_this$inputs, [this.inputs.length, 0].concat(_toConsumableArray(inputsToAdd.map(function (item) {
                return item.input.nativeElement;
              }))));

              var states = Array(inputsToAdd.length).fill(InputState.ready);

              (_this$inputsStates = this.inputsStates).splice.apply(_this$inputsStates, [this.inputsStates.length, 0].concat(_toConsumableArray(states)));
            } else if (list.length < this.inputs.length) {
              this.inputs.splice(list.length);
              this.inputsStates.splice(list.length);
            } // filling the inputs after changing of their count


            this.onInputCodeChanges();
          }
        }, {
          key: "focusOnInputAfterAppearing",
          value: function focusOnInputAfterAppearing() {
            if (!this.state.isInitialFocusFieldEnabled) {
              return;
            }

            if (this.state.isFocusingAfterAppearingCompleted) {
              return;
            } // tslint:disable-next-line:no-non-null-assertion


            this.focusOnField(this.initialFocusField); // tslint:disable-next-line:no-non-null-assertion
            //this.state.isFocusingAfterAppearingCompleted = (document.activeElement === this.inputs[this.initialFocusField!]);
          }
        }, {
          key: "emitChanges",
          value: function emitChanges() {
            var _this34 = this;

            setTimeout(function () {
              return _this34.emitCode();
            }, 50);
          }
        }, {
          key: "emitCode",
          value: function emitCode() {
            var code = this.getCurrentFilledCode();
            this.codeChanged.emit(code);

            if (code.length >= this._codeLength) {
              this.codeCompleted.emit(code);
            }
          }
        }, {
          key: "getCurrentFilledCode",
          value: function getCurrentFilledCode() {
            var code = '';

            var _iterator2 = _createForOfIteratorHelper(this.inputs),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var input = _step2.value;

                if (!this.isEmpty(input.value)) {
                  code += input.value;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            return code;
          }
        }, {
          key: "isBackspaceKey",
          value: function isBackspaceKey(e) {
            var _this35 = this;

            var isBackspace = e.key && e.key.toLowerCase() === 'backspace' || e.keyCode && e.keyCode === 8;

            if (isBackspace) {
              return Promise.resolve(true);
            } // process only key with placeholder keycode on android devices


            if (!e.keyCode || e.keyCode !== 229) {
              return Promise.resolve(false);
            }

            return new Promise(function (resolve) {
              setTimeout(function () {
                var input = e.target;
                var isReset = _this35.getStateForInput(input) === InputState.reset;

                if (isReset) {
                  _this35.setStateForInput(input, InputState.ready);
                } // if backspace key pressed the caret will have position 0 (for single value field)


                resolve(input.selectionStart === 0 && !isReset);
              });
            });
          }
        }, {
          key: "isDeleteKey",
          value: function isDeleteKey(e) {
            return e.key && e.key.toLowerCase() === 'delete' || e.keyCode && e.keyCode === 46;
          }
        }, {
          key: "setInputValue",
          value: function setInputValue(input, value) {
            var isEmpty = this.isEmpty(value);
            var valueClassCSS = 'has-value';
            var emptyClassCSS = 'empty';

            if (isEmpty) {
              input.value = '';
              input.classList.remove(valueClassCSS); // tslint:disable-next-line:no-non-null-assertion

              input.parentElement.classList.add(emptyClassCSS);
            } else {
              input.value = value;
              input.classList.add(valueClassCSS); // tslint:disable-next-line:no-non-null-assertion

              input.parentElement.classList.remove(emptyClassCSS);
            }
          }
        }, {
          key: "canInputValue",
          value: function canInputValue(value) {
            if (this.isEmpty(value)) {
              return false;
            }

            var isDigitsValue = /^[0-9]+$/.test(value.toString());
            return isDigitsValue || this.isCharsCode || this.isNonDigitsCode;
          }
        }, {
          key: "setStateForInput",
          value: function setStateForInput(input, state) {
            var index = this.inputs.indexOf(input);

            if (index < 0) {
              return;
            }

            this.inputsStates[index] = state;
          }
        }, {
          key: "getStateForInput",
          value: function getStateForInput(input) {
            var index = this.inputs.indexOf(input);
            return this.inputsStates[index];
          }
        }, {
          key: "isEmpty",
          value: function isEmpty(value) {
            return value === null || value === undefined || !value.toString().length;
          }
        }]);

        return _CodeInputComponent;
      }();

      _CodeInputComponent.ɵfac = function CodeInputComponent_Factory(t) {
        return new (t || _CodeInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_code_input_component_config__WEBPACK_IMPORTED_MODULE_1__.CodeInputComponentConfigToken, 8));
      };

      _CodeInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _CodeInputComponent,
        selectors: [["code-input"]],
        viewQuery: function CodeInputComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.storyInputsList = _t);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.inputsList = _t);
          }
        },
        inputs: {
          codeLength: "codeLength",
          inputType: "inputType",
          inputMode: "inputMode",
          initialFocusField: "initialFocusField",
          isNonDigitsCode: "isNonDigitsCode",
          isCharsCode: "isCharsCode",
          isCodeHidden: "isCodeHidden",
          isPrevFocusableAfterClearing: "isPrevFocusableAfterClearing",
          isFocusingOnLastByClickIfFilled: "isFocusingOnLastByClickIfFilled",
          code: "code",
          disabled: "disabled",
          autocapitalize: "autocapitalize"
        },
        outputs: {
          codeChanged: "codeChanged",
          codeCompleted: "codeCompleted"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]],
        decls: 1,
        vars: 1,
        consts: [[3, "code-hidden", 4, "ngFor", "ngForOf"], [3, "inputType", "disabled", "inputMode", "autocapitalize", "isFirst", "isLast", "onClick", "onPaste", "onInput", "onKeydown"], ["storyInput", ""]],
        template: function CodeInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, CodeInputComponent_span_0_Template, 3, 8, "span", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.placeholders);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _digitcode_input_digitcode_input_component__WEBPACK_IMPORTED_MODULE_2__.DigitcodeInputComponent],
        styles: ["[_nghost-%COMP%] {\n  --text-security-type: disc;\n  --item-spacing: 0;\n  --item-height: 91px;\n  --item-border: 1px solid #dddddd;\n  --item-border-bottom: 1px solid #dddddd;\n  --item-border-has-value: 1px solid #dddddd;\n  --item-border-bottom-has-value: 1px solid #dddddd;\n  --item-border-focused: 1px solid #dddddd;\n  --item-border-bottom-focused: 1px solid #dddddd;\n  --item-shadow-focused: 0px 1px 5px rgba(221, 221, 221, 1);\n  --item-border-radius: 5px;\n  --item-background: transparent;\n  --item-font-weight: 300;\n  --color: #171516;\n  display: flex;\n  transform: translate3d(0, 0, 0);\n  font-size: inherit;\n  color: var(--color);\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  flex: 1;\n  padding-right: var(--item-spacing);\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  padding-left: var(--item-spacing);\n}\n[_nghost-%COMP%]   span.code-hidden[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  text-security: var(--text-security-type);\n  -webkit-text-security: var(--text-security-type);\n  -moz-text-security: var(--text-security-type);\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: var(--item-height);\n  color: inherit;\n  background: var(--item-background);\n  text-align: center;\n  font-size: inherit;\n  font-weight: var(--item-font-weight);\n  border: var(--item-border);\n  border-bottom: var(--item-border-bottom);\n  border-radius: var(--item-border-radius);\n  -webkit-appearance: none;\n  transform: translate3d(0, 0, 0);\n  -webkit-transform: translate3d(0, 0, 0);\n  outline: none;\n}\n[_nghost-%COMP%]   input.has-value[_ngcontent-%COMP%] {\n  border: var(--item-border-has-value);\n  border-bottom: var(--item-border-bottom-has-value);\n}\n[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border: var(--item-border-focused);\n  border-bottom: var(--item-border-bottom-focused);\n  box-shadow: var(--item-shadow-focused);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZGUtaW5wdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7RUFDQSxpREFBQTtFQUNBLHdDQUFBO0VBQ0EsK0NBQUE7RUFDQSx5REFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBRUEsYUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFGO0FBRUU7RUFDRSxjQUFBO0VBQ0EsT0FBQTtFQUNBLGtDQUFBO0FBQUo7QUFFSTtFQUNFLGlDQUFBO0FBQU47QUFHSTtFQUNFLHdDQUFBO0VBQ0EsZ0RBQUE7RUFDQSw2Q0FBQTtBQUROO0FBS0U7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQkFBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxhQUFBO0FBSEo7QUFLSTtFQUNFLG9DQUFBO0VBQ0Esa0RBQUE7QUFITjtBQU1JO0VBQ0Usa0NBQUE7RUFDQSxnREFBQTtFQUNBLHNDQUFBO0FBSk4iLCJmaWxlIjoiY29kZS1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLS10ZXh0LXNlY3VyaXR5LXR5cGU6IGRpc2M7XG4gIC0taXRlbS1zcGFjaW5nOiAwO1xuICAtLWl0ZW0taGVpZ2h0OiA5MXB4O1xuICAtLWl0ZW0tYm9yZGVyOiAxcHggc29saWQgI2RkZGRkZDtcbiAgLS1pdGVtLWJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkZGRkO1xuICAtLWl0ZW0tYm9yZGVyLWhhcy12YWx1ZTogMXB4IHNvbGlkICNkZGRkZGQ7XG4gIC0taXRlbS1ib3JkZXItYm90dG9tLWhhcy12YWx1ZTogMXB4IHNvbGlkICNkZGRkZGQ7XG4gIC0taXRlbS1ib3JkZXItZm9jdXNlZDogMXB4IHNvbGlkICNkZGRkZGQ7XG4gIC0taXRlbS1ib3JkZXItYm90dG9tLWZvY3VzZWQ6IDFweCBzb2xpZCAjZGRkZGRkO1xuICAtLWl0ZW0tc2hhZG93LWZvY3VzZWQ6IDBweCAxcHggNXB4IHJnYmEoMjIxLCAyMjEsIDIyMSwgMSk7XG4gIC0taXRlbS1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC0taXRlbS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgLS1pdGVtLWZvbnQtd2VpZ2h0OiAzMDA7XG4gIC0tY29sb3I6ICMxNzE1MTY7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBjb2xvcjogdmFyKC0tY29sb3IpO1xuXG4gIHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZy1yaWdodDogdmFyKC0taXRlbS1zcGFjaW5nKTtcblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1pdGVtLXNwYWNpbmcpO1xuICAgIH1cblxuICAgICYuY29kZS1oaWRkZW4gaW5wdXQge1xuICAgICAgdGV4dC1zZWN1cml0eTogdmFyKC0tdGV4dC1zZWN1cml0eS10eXBlKTtcbiAgICAgIC13ZWJraXQtdGV4dC1zZWN1cml0eTogdmFyKC0tdGV4dC1zZWN1cml0eS10eXBlKTtcbiAgICAgIC1tb3otdGV4dC1zZWN1cml0eTogdmFyKC0tdGV4dC1zZWN1cml0eS10eXBlKTtcbiAgICB9XG4gIH1cblxuICBpbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiB2YXIoLS1pdGVtLWhlaWdodCk7XG4gICAgY29sb3I6IGluaGVyaXQ7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taXRlbS1iYWNrZ3JvdW5kKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1pdGVtLWZvbnQtd2VpZ2h0KTtcbiAgICBib3JkZXI6IHZhcigtLWl0ZW0tYm9yZGVyKTtcbiAgICBib3JkZXItYm90dG9tOiB2YXIoLS1pdGVtLWJvcmRlci1ib3R0b20pO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWl0ZW0tYm9yZGVyLXJhZGl1cyk7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICAmLmhhcy12YWx1ZSB7XG4gICAgICBib3JkZXI6IHZhcigtLWl0ZW0tYm9yZGVyLWhhcy12YWx1ZSk7XG4gICAgICBib3JkZXItYm90dG9tOiB2YXIoLS1pdGVtLWJvcmRlci1ib3R0b20taGFzLXZhbHVlKTtcbiAgICB9XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgIGJvcmRlcjogdmFyKC0taXRlbS1ib3JkZXItZm9jdXNlZCk7XG4gICAgICBib3JkZXItYm90dG9tOiB2YXIoLS1pdGVtLWJvcmRlci1ib3R0b20tZm9jdXNlZCk7XG4gICAgICBib3gtc2hhZG93OiB2YXIoLS1pdGVtLXNoYWRvdy1mb2N1c2VkKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"]
      });
      /***/
    },

    /***/
    13026:
    /*!*************************************************************************!*\
      !*** ./src/stories/inputs/digitcode-input/digitcode-input.component.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DigitcodeInputComponent": function DigitcodeInputComponent() {
          return (
            /* binding */
            _DigitcodeInputComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = ["input"];

      var _c1 = function _c1(a0, a1) {
        return {
          "margin-left": a0,
          "margin-right": a1
        };
      };

      var _DigitcodeInputComponent = /*#__PURE__*/function () {
        function _DigitcodeInputComponent() {
          _classCallCheck(this, _DigitcodeInputComponent);

          this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.onPaste = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.onInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.onKeydown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.value = '';
        }

        _createClass(_DigitcodeInputComponent, [{
          key: "classes",
          get: function get() {
            //const isFirst = (this.index === 1) ? 'storybook-digitcode-input--first' : 'storybook-digitcode-input--notFirst';
            return ['storybook-digitcode-input'];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _DigitcodeInputComponent;
      }();

      _DigitcodeInputComponent.ɵfac = function DigitcodeInputComponent_Factory(t) {
        return new (t || _DigitcodeInputComponent)();
      };

      _DigitcodeInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _DigitcodeInputComponent,
        selectors: [["storybook-digitcode-input"]],
        viewQuery: function DigitcodeInputComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
          }
        },
        inputs: {
          digitInput: "digitInput",
          inputType: "inputType",
          inputMode: "inputMode",
          disabled: "disabled",
          autocapitalize: "autocapitalize",
          isFirst: "isFirst",
          isLast: "isLast"
        },
        outputs: {
          onClick: "onClick",
          onPaste: "onPaste",
          onInput: "onInput",
          onKeydown: "onKeydown"
        },
        decls: 3,
        vars: 9,
        consts: [[1, "Vector2", 3, "ngStyle"], ["autocomplete", "one-time-code", 1, "digit", 3, "type", "disabled", "value", "click", "paste", "input", "keydown"], ["input", ""]],
        template: function DigitcodeInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DigitcodeInputComponent_Template_input_click_1_listener($event) {
              return ctx.onClick.emit($event);
            })("paste", function DigitcodeInputComponent_Template_input_paste_1_listener($event) {
              return ctx.onPaste.emit($event);
            })("input", function DigitcodeInputComponent_Template_input_input_1_listener($event) {
              return ctx.onInput.emit($event);
            })("keydown", function DigitcodeInputComponent_Template_input_keydown_1_listener($event) {
              return ctx.onKeydown.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](6, _c1, ctx.isFirst ? "0" : "10px", ctx.isLast ? "0" : "10px"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.inputType)("disabled", ctx.disabled)("value", ctx.value);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("inputmode", ctx.inputMode)("autocapitalize", ctx.autocapitalize);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
        styles: [".Vector2[_ngcontent-%COMP%] {\n  position: static;\n  box-sizing: border-box;\n  margin-right: 10px;\n  margin-left: 13px;\n  width: 95px;\n  height: 95px;\n  \n  top: 2px;\n  \n  \n  border: 2px solid #3D8ECF;\n  border-radius: 10px;\n  display: inline-block;\n  vertical-align: middle;\n}\n\ninput.digit[_ngcontent-%COMP%] {\n  --item-border: 1px solid white;\n  --item-border-bottom: 1px solid white;\n  --item-border-has-value: 1px solid white;\n  --item-border-bottom-has-value: 1px solid white;\n  --item-border-focused: 1px solid white;\n  --item-border-bottom-focused: 1px solid white;\n  --item-shadow-focused: 0px 1px 5px white;\n  position: relative;\n  width: 44px;\n  height: 54px;\n  left: 23px;\n  top: 18px;\n  border: 0;\n  background-color: rgba(255, 255, 255, 0);\n  border-color: rgba(255, 255, 255, 0);\n  box-shadow: var(--item-shadow-focused);\n  font-family: Noto Sans, ui-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 40px;\n  line-height: 54px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: -0.011em;\n  color: #000000;\n}\n\ninput.digit.has-value[_ngcontent-%COMP%] {\n  border: var(--item-border-has-value);\n  border-bottom: var(--item-border-bottom-has-value);\n  box-shadow: var(--item-shadow-focused);\n}\n\ninput.digit[_ngcontent-%COMP%]:focus {\n  border: var(--item-border-focused);\n  border-bottom: var(--item-border-bottom-focused);\n  box-shadow: var(--item-shadow-focused);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpZ2l0Y29kZS1pbnB1dC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtFQUNBO2dCQUFBO0VBRUEsUUFBQTtFQUNBLGFBQUE7RUFFQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFMRjs7QUFhQTtFQUVFLDhCQUFBO0VBQ0EscUNBQUE7RUFDQSx3Q0FBQTtFQUNBLCtDQUFBO0VBQ0Esc0NBQUE7RUFDQSw2Q0FBQTtFQUNBLHdDQUFBO0VBR0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBRUEsU0FBQTtFQUNBLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQ0FBQTtFQUdBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFFQSxjQUFBO0FBakJGOztBQW9CRTtFQUNFLG9DQUFBO0VBQ0Esa0RBQUE7RUFDQSxzQ0FBQTtBQWxCSjs7QUFxQkU7RUFDRSxrQ0FBQTtFQUNBLGdEQUFBO0VBQ0Esc0NBQUE7QUFuQkoiLCJmaWxlIjoiZGlnaXRjb2RlLWlucHV0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG5cclxuLlZlY3RvcjIge1xyXG4gIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEzcHg7XHJcblxyXG4gIHdpZHRoOiA5NXB4O1xyXG4gIGhlaWdodDogOTVweDtcclxuICAvKmxlZnQ6IDFweDtcclxuICByaWdodDogMC4wMyU7Ki9cclxuICB0b3A6IDJweDtcclxuICAvKmJvdHRvbTogMDsqL1xyXG5cclxuICAvKiBCbHVlICovXHJcbiAgYm9yZGVyOiAycHggc29saWQgIzNEOEVDRjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXHJcbn1cclxuXHJcbmlucHV0IHtcclxuXHJcblxyXG59XHJcblxyXG5pbnB1dC5kaWdpdCB7XHJcblxyXG4gIC0taXRlbS1ib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcclxuICAtLWl0ZW0tYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIC0taXRlbS1ib3JkZXItaGFzLXZhbHVlOiAxcHggc29saWQgd2hpdGU7XHJcbiAgLS1pdGVtLWJvcmRlci1ib3R0b20taGFzLXZhbHVlOiAxcHggc29saWQgd2hpdGU7XHJcbiAgLS1pdGVtLWJvcmRlci1mb2N1c2VkOiAxcHggc29saWQgd2hpdGU7XHJcbiAgLS1pdGVtLWJvcmRlci1ib3R0b20tZm9jdXNlZDogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIC0taXRlbS1zaGFkb3ctZm9jdXNlZDogMHB4IDFweCA1cHggd2hpdGU7XHJcblxyXG5cclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDQ0cHg7XHJcbiAgaGVpZ2h0OiA1NHB4O1xyXG4gIGxlZnQ6IDIzcHg7XHJcbiAgdG9wOiAxOHB4O1xyXG5cclxuICBib3JkZXI6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0taXRlbS1zaGFkb3ctZm9jdXNlZCk7XHJcblxyXG5cclxuICBmb250LWZhbWlseTogTm90byBTYW5zLCB1aS1zZXJpZjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDU0cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDExZW07XHJcblxyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG5cclxuXHJcbiAgJi5oYXMtdmFsdWUge1xyXG4gICAgYm9yZGVyOiB2YXIoLS1pdGVtLWJvcmRlci1oYXMtdmFsdWUpO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogdmFyKC0taXRlbS1ib3JkZXItYm90dG9tLWhhcy12YWx1ZSk7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1pdGVtLXNoYWRvdy1mb2N1c2VkKTtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgYm9yZGVyOiB2YXIoLS1pdGVtLWJvcmRlci1mb2N1c2VkKTtcclxuICAgIGJvcmRlci1ib3R0b206IHZhcigtLWl0ZW0tYm9yZGVyLWJvdHRvbS1mb2N1c2VkKTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLWl0ZW0tc2hhZG93LWZvY3VzZWQpO1xyXG4gIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    50899:
    /*!***********************************************************!*\
      !*** ./src/stories/inputs/input/story-input.component.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "StoryInputComponent": function StoryInputComponent() {
          return (
            /* binding */
            _StoryInputComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_stories_actions_action_input_action_input_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/stories/actions/action-input/action-input.component */
      61410);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _directive_bubble_input_popover_input_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../directive/bubble-input/popover-input.directive */
      40019);
      /* harmony import */


      var _pass_strength_pass_strength_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../pass-strength/pass-strength.component */
      479);

      function StoryInputComponent_button_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function StoryInputComponent_button_11_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r4.showPassChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function StoryInputComponent_span_14_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r6.storyInput == null ? null : ctx_r6.storyInput.state, " is required!");
        }
      }

      function StoryInputComponent_span_14_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r7.storyInput == null ? null : ctx_r7.storyInput.state, " is required! ");
        }
      }

      function StoryInputComponent_span_14_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r8.storyInput == null ? null : ctx_r8.storyInput.state, " is required!");
        }
      }

      function StoryInputComponent_span_14_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r9.storyInput == null ? null : ctx_r9.storyInput.state, " is required!");
        }
      }

      function StoryInputComponent_span_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, StoryInputComponent_span_14_span_1_Template, 3, 1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, StoryInputComponent_span_14_span_2_Template, 3, 1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, StoryInputComponent_span_14_span_3_Template, 3, 1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, StoryInputComponent_span_14_span_4_Template, 3, 1, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "username");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "password");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "phone");
        }
      }

      function StoryInputComponent_div_15_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "ok!");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function StoryInputComponent_div_15_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "ok!");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function StoryInputComponent_div_15_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "ok!");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function StoryInputComponent_div_15_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "ok!");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function StoryInputComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, StoryInputComponent_div_15_div_1_Template, 2, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, StoryInputComponent_div_15_div_2_Template, 2, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, StoryInputComponent_div_15_div_3_Template, 2, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, StoryInputComponent_div_15_div_4_Template, 2, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "username");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "password");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitchCase", "phone");
        }
      }

      function StoryInputComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "storybook-pass-strength", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("passwordToCheck", ctx_r3.password == null ? null : ctx_r3.password.value);
        }
      }

      var _StoryInputComponent = /*#__PURE__*/function () {
        function _StoryInputComponent() {
          _classCallCheck(this, _StoryInputComponent);

          var _a;

          this.popover = {
            content: src_stories_actions_action_input_action_input_component__WEBPACK_IMPORTED_MODULE_0__.ActionInputComponent
          }; // tslint:disable-next-line: no-output-on-prefix

          this.onPinInput = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter(); // tslint:disable-next-line: no-output-on-prefix

          this.onArchiveInput = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          this.hideInput = false;
          this.isStrength = ((_a = this.storyInput) === null || _a === void 0 ? void 0 : _a.state) === 'NEW PASSWORD' ? 'storybook-input--addStrength' : 'storybook-input--clearStrength';
          this.isPasswordTextHide = false;
          this.conditionList = [];
        }

        _createClass(_StoryInputComponent, [{
          key: "showPassChange",
          value: function showPassChange() {
            var _a;

            this.storyInput.type = ((_a = this.storyInput) === null || _a === void 0 ? void 0 : _a.type) == 'password' ? 'text' : 'password';
          }
          /*registerForm = new FormGroup({
            username: new FormControl('', Validators.minLength(2)),
            password: new FormControl('zaqwsx', Validators.minLength(2))
          });
            
          get username2(): FormControl  {
            return this.currentForm?.controls.username.get();
          }*/

        }, {
          key: "username",
          get: function get() {
            return this.currentForm.get('username');
          }
        }, {
          key: "password",
          get: function get() {
            return this.currentForm.get('password');
          }
        }, {
          key: "getErrorHeader",
          value: function getErrorHeader(controllerType) {
            var header = '';

            switch (controllerType) {
              case "phone":
                header = 'Must contain phone:';
                break;

              case "email":
                header = 'Must contain email:';
                break;

              case "oldPassword":
              case "confirmPassword":
              case "password":
                header = 'The password must contain:';
                break;

              default:
                header = controllerType;
            }

            return header;
          }
        }, {
          key: "getErrorList",
          value: function getErrorList(conditionList) {
            var _this36 = this;

            var passConditions = [];
            var actionInputs = [];
            conditionList.forEach(function (condition) {
              switch (condition) {
                case "minLength":
                  actionInputs.push({
                    "conditionName": "minLengthValid",
                    "presentingMessage": ' A minimum of 8 characters',
                    "isFulfilled": !(_this36.minLengthValid || !(_this36.formControler.value.length > 0))
                  });
                  break;

                case "requiresUppercase":
                  actionInputs.push({
                    "conditionName": "requiresUppercaseValid",
                    "presentingMessage": ' At least 1 Uppercase letters',
                    "isFulfilled": !(_this36.requiresUppercaseValid || !(_this36.formControler.value.length > 0))
                  });
                  break;

                case "requiresLowercase":
                  actionInputs.push({
                    "conditionName": "requiresLowercaseValid",
                    "presentingMessage": ' At least 1 lowercase letters',
                    "isFulfilled": !(_this36.requiresLowercaseValid || !(_this36.formControler.value.length > 0))
                  });
                  break;

                case "requiresDigit":
                  actionInputs.push({
                    "conditionName": "requiresDigitValid",
                    "presentingMessage": ' A number',
                    "isFulfilled": !(_this36.requiresDigitValid || !(_this36.formControler.value.length > 0))
                  });
                  break;

                case "requiresSpecialChars":
                  actionInputs.push({
                    "conditionName": "requiresSpecialCharsValid",
                    "presentingMessage": ' At least 1 special character',
                    "isFulfilled": !(_this36.requiresSpecialCharsValid || !(_this36.formControler.value.length > 0))
                  });
                  break;

                case "requiresEmail":
                  actionInputs.push({
                    "conditionName": "requiresEmailValid",
                    "presentingMessage": ' A well-formed email address',
                    "isFulfilled": !(_this36.requiresEmailValid || !(_this36.formControler.value.length > 0))
                  });
                  break;

                case "requiresPhone":
                  actionInputs.push({
                    "conditionName": "requiresPhoneValid",
                    "presentingMessage": ' A well-formed phone number',
                    "isFulfilled": !(_this36.requiresPhoneValid || !(_this36.formControler.value.length > 0))
                  });
                  break;
              }
            });
            return actionInputs;
          }
        }, {
          key: "passwordValid",
          get: function get() {
            return this.formControler.errors === null;
          }
        }, {
          key: "requiredValid",
          get: function get() {
            return this.formControler.hasError("required");
          }
        }, {
          key: "minLengthValid",
          get: function get() {
            return this.formControler.hasError("minlength");
          }
        }, {
          key: "requiresDigitValid",
          get: function get() {
            return this.formControler.hasError("requiresDigit");
          }
        }, {
          key: "requiresUppercaseValid",
          get: function get() {
            return this.formControler.hasError("requiresUppercase");
          }
        }, {
          key: "requiresLowercaseValid",
          get: function get() {
            return this.formControler.hasError("requiresLowercase");
          }
        }, {
          key: "requiresSpecialCharsValid",
          get: function get() {
            return this.formControler.hasError("requiresSpecialChars");
          }
        }, {
          key: "requiresEmailValid",
          get: function get() {
            return this.formControler.hasError("email");
          }
        }, {
          key: "requiresPhoneValid",
          get: function get() {
            return this.formControler.hasError("requiresPhoneChars");
          }
        }, {
          key: "formControler",
          get: function get() {
            var _a;

            return this.currentForm.get((_a = this.storyInput) === null || _a === void 0 ? void 0 : _a.title.toString());
          }
          /**
           * Component method to trigger the onPin event
           * @param id string
           */

        }, {
          key: "onPin",
          value: function onPin(id) {
            this.onPinInput.emit(id);
          }
          /**
           * Component method to trigger the onArchive event
           * @param id string
           */

        }, {
          key: "onArchive",
          value: function onArchive(id) {
            this.onArchiveInput.emit(id);
          }
        }, {
          key: "classes",
          get: function get() {
            var _a;

            this.isStrength = ((_a = this.storyInput) === null || _a === void 0 ? void 0 : _a.state) === 'NEW PASSWORD' ? 'storybook-input--addStrength' : 'storybook-input--clearStrength';
            return ['storybook-input-strength', this.isStrength];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _a;

            this.isPasswordTextHide = (_a = this.storyInput) === null || _a === void 0 ? void 0 : _a.state.includes('PASSWORD');
          }
        }]);

        return _StoryInputComponent;
      }();

      _StoryInputComponent.ɵfac = function StoryInputComponent_Factory(t) {
        return new (t || _StoryInputComponent)();
      };

      _StoryInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _StoryInputComponent,
        selectors: [["storybook-input"]],
        inputs: {
          storyInput: "storyInput",
          hideInput: "hideInput",
          currentForm: "currentForm",
          conditionList: "conditionList"
        },
        outputs: {
          onPinInput: "onPinInput",
          onArchiveInput: "onArchiveInput"
        },
        decls: 17,
        vars: 21,
        consts: [["id", "parent3", 3, "hidden", "ngClass"], ["id", "parent1"], [1, "main", 3, "formGroup"], [1, "user-name", "D-Caps-Regular"], [1, "Vector2", 3, "for"], ["alt", "icon input userName", 1, "icon-input", 3, "src", "name"], [3, "inputPopover", "data", "header"], ["required", "", 1, "DanK203", 3, "type", "id", "name", "formControlName", "placeholder"], ["class", "icon-input-showpass", "type", "button", 3, "click", 4, "ngIf"], ["hidden", "", 1, "D-Caps-Regular", 2, "line-height", "0", 3, "ngSwitch"], ["class", "position-absolute", 4, "ngIf"], [4, "ngIf"], ["id", "parent2", 4, "ngIf"], ["type", "button", 1, "icon-input-showpass", 3, "click"], ["src", "./assets/images/EyeIcon.png", "alt", "icon input type", 1, "icon-input-showpass"], [1, "position-absolute"], [4, "ngSwitchCase"], ["id", "parent2"], [1, "absolute"], ["id", "pass-strength", 3, "passwordToCheck"]],
        template: function StoryInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, StoryInputComponent_button_11_Template, 2, 0, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, StoryInputComponent_span_14_Template, 5, 4, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, StoryInputComponent_div_15_Template, 5, 4, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, StoryInputComponent_div_16_Template, 3, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx.storyInput == null ? null : ctx.storyInput.hide)("ngClass", ctx.classes);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.currentForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.storyInput == null ? null : ctx.storyInput.state);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("for", ctx.storyInput == null ? null : ctx.storyInput.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("aria-label", (ctx.storyInput == null ? null : ctx.storyInput.id) + "");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.storyInput == null ? null : ctx.storyInput.icon, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("name", ctx.storyInput == null ? null : ctx.storyInput.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("inputPopover", ctx.popover)("data", ctx.getErrorList(ctx.conditionList))("header", ctx.getErrorHeader(ctx.storyInput.title));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("type", ctx.storyInput == null ? null : ctx.storyInput.type);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("id", ctx.storyInput == null ? null : ctx.storyInput.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("name", ctx.storyInput == null ? null : ctx.storyInput.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("formControlName", ctx.storyInput == null ? null : ctx.storyInput.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("placeholder", ctx.storyInput == null ? null : ctx.storyInput.placeholder);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isPasswordTextHide);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngSwitch", ctx.storyInput == null ? null : ctx.storyInput.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.formControler == null ? null : ctx.formControler.invalid) && ((ctx.formControler == null ? null : ctx.formControler.dirty) || (ctx.formControler == null ? null : ctx.formControler.touched)));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.formControler == null ? null : ctx.formControler.valid) && ((ctx.formControler == null ? null : ctx.formControler.dirty) || (ctx.formControler == null ? null : ctx.formControler.touched)));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx.storyInput == null ? null : ctx.storyInput.state) === "NEW PASSWORD");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _directive_bubble_input_popover_input_directive__WEBPACK_IMPORTED_MODULE_1__.PopoverInputDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgSwitchCase, _pass_strength_pass_strength_component__WEBPACK_IMPORTED_MODULE_2__["default"]],
        styles: [".main[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 102px;\n  top: 0;\n  \n  background-color: rgba(255, 255, 255, 0);\n}\n\n#storybook-pass[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 0, 0, 0.11);\n  background-color: rgba(255, 255, 255, 0);\n}\n\n#parent1[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 1px;\n  height: 100px;\n  width: 100%;\n  \n  background-color: rgba(255, 255, 255, 0);\n}\n\n#parent2[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 45px;\n  width: 100%;\n  margin-top: 3px;\n  \n  bottom: 0;\n  \n}\n\n#parent3[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  \n  \n}\n\n\n\n.user-name[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 300px;\n  height: 35px;\n  left: 0%;\n  right: 82.7%;\n  top: 10%;\n  bottom: 68.37%;\n  \n  display: flex;\n  align-items: center;\n  letter-spacing: -0.011em;\n  text-transform: uppercase;\n  color: #000000;\n}\n\n\n\n.D-Caps-Regular[_ngcontent-%COMP%] {\n  font-family: Noto Sans, ui-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 31px;\n}\n\nimg.icon-input[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 22.72px;\n  height: 26.74px;\n  left: 17px;\n  bottom: 7px;\n  transform: rotate(0deg);\n  background-position: bottom;\n}\n\n.DanK203[_ngcontent-%COMP%] {\n  position: relative;\n  height: 25px;\n  width: 228px;\n  left: 35px;\n  bottom: -5px;\n  margin: 4.2px 1px 2.8px 20.3px;\n  \n  -o-object-fit: contain;\n     object-fit: contain;\n  font-family: Noto Sans, ui-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 48%;\n  \n  box-shadow: none;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.19px;\n  border-color: rgba(255, 255, 255, 0);\n  color: #000000;\n}\n\n.icon-input-showpass[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 33px;\n  height: 20px;\n  right: 10px;\n  bottom: 11px;\n  padding: 0px;\n  margin: 0;\n  border-bottom-width: 0px;\n  background-color: rgba(45, 148, 55, 0);\n}\n\nimg.icon-input-showpass[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1px;\n  right: 1px;\n  width: inherit;\n  height: inherit;\n  padding: 0px;\n  margin: 0px;\n  \n}\n\ninput[_ngcontent-%COMP%]:focus {\n  background: #99999900;\n  box-shadow: 0 0 5px #99999900;\n  border-top-color: #99999900;\n  border-left-color: #99999900;\n  border-right-color: #99999900;\n}\n\ninput[_ngcontent-%COMP%]:focus-visible {\n  background: #99999900;\n  box-shadow: 0 0 5px #99999900;\n  border-top-color: #99999900;\n  border-left-color: #99999900;\n  border-right-color: #99999900;\n}\n\ninput[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #C8C8C8;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  color: #C8C8C8;\n}\n\ninput[type=password][_ngcontent-%COMP%]:focus {\n  color: #000000;\n  background: #99999900;\n  box-shadow: 0 0 5px #99999900;\n  border-top-color: #99999900;\n  border-left-color: #99999900;\n  border-right-color: #99999900;\n}\n\ninput[type=tel][_ngcontent-%COMP%]:focus {\n  color: #000000;\n  background: #99999900;\n  box-shadow: 0 0 5px #99999900;\n  border-top-color: #99999900;\n  border-left-color: #99999900;\n  border-right-color: #99999900;\n}\n\n.Vector2[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  position: absolute;\n  left: 0.2%;\n  right: 0.03%;\n  top: 42.66%;\n  bottom: 0;\n  \n  border: 2px solid #3D8ECF;\n  border-radius: 10px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n}\n\n.Button-App-Label[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 33px;\n  horiz-align: center;\n}\n\n.storybook-input--addStrength[_ngcontent-%COMP%] {\n  height: 160px;\n}\n\n.storybook-input--clearStrength[_ngcontent-%COMP%] {\n  height: 110px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3J5LWlucHV0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBOzt1QkFBQTtFQUdBLHdDQUFBO0FBSkY7O0FBUUE7RUFDRSx1Q0FBQTtFQUNBLHdDQUFBO0FBTEY7O0FBUUE7RUFDRSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esd0NBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0E7NENBQUE7QUFKRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBOztzQkFBQTtFQUdBLDRDQUFBO0FBTEY7O0FBUUE7Ozs7Ozs7OztDQUFBOztBQVlBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFFQSxjQUFBO0FBUkY7O0FBWUEsbUJBQUE7O0FBQ0E7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFURjs7QUFhQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUVBLHVCQUFBO0VBQ0EsMkJBQUE7QUFYRjs7QUFlQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBRUEscUJBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUVBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxvQ0FBQTtFQUNBLGNBQUE7QUFmRjs7QUFtQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0NBQUE7QUFoQkY7O0FBbUJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQTtvREFBQTtBQWZGOztBQW9CQTtFQUNFLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFqQkY7O0FBb0JBO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQWpCRjs7QUFvQkE7RUFDRSxjQUFBO0FBakJGOztBQWdCQTtFQUNFLGNBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFqQkY7O0FBb0JBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUdBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFFQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQXBCRjs7QUF1QkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFwQkY7O0FBdUJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBcEJGOztBQXdCQTtFQUNJLGFBQUE7QUFyQko7O0FBMkJBO0VBR0ksYUFBQTtBQTFCSiIsImZpbGUiOiJzdG9yeS1pbnB1dC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuJHRvdHRhbC1oZWlnaHQ6IDE2MHB4ICFkZWZhdWx0O1xyXG5cclxuLm1haW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMnB4O1xyXG4gIHRvcDogMDtcclxuICAvKmxlZnQ6IGNhbGMoNTAlIC0gNDQ1cHgvMiAtIDAuNXB4KTtcclxuICB0b3A6IGNhbGMoNTAlIC0gMTAxLjE2cHgvMiAtIDE3MS41OHB4KTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4OyovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuXHJcbn1cclxuXHJcbiNzdG9yeWJvb2stcGFzcyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDAsIDAsIDAuMTEpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbn1cclxuXHJcbiNwYXJlbnQxIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMXB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLypib3JkZXI6IDFweCBzb2xpZCAjYzAwNzdmOyovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxufVxyXG5cclxuI3BhcmVudDIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG4gIC8qbWFyZ2luLWJvdHRvbTogM3B4OyovXHJcbiAgYm90dG9tOiAwO1xyXG4gIC8qYm9yZGVyOiAxcHggc29saWQgIzhBQzAwNztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApOyovXHJcbn1cclxuXHJcbiNwYXJlbnQzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLypoZWlnaHQ6IDE2MHB4IDtcclxuICAgYm9yZGVyOiAxcHggc29saWQgIzA3MmNjMDtcclxubWFyZ2luLWJvdHRvbTogM3B4OyovXHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApOyovXHJcbn1cclxuXHJcbi8qXHJcbnNwYW4uYWJzb2x1dGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4QUMwMDc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxufVxyXG4qL1xyXG5cclxuXHJcbi51c2VyLW5hbWUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGxlZnQ6IDAlO1xyXG4gIHJpZ2h0OiA4Mi43JTtcclxuICB0b3A6IDEwJTtcclxuICBib3R0b206IDY4LjM3JTtcclxuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMjIzJSAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDExZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcblxyXG4vKiBEIENhcHMgUmVndWxhciAqL1xyXG4uRC1DYXBzLVJlZ3VsYXIge1xyXG4gIGZvbnQtZmFtaWx5OiBOb3RvIFNhbnMsIHVpLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMzFweDtcclxufVxyXG5cclxuXHJcbmltZy5pY29uLWlucHV0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDIyLjcycHg7XHJcbiAgaGVpZ2h0OiAyNi43NHB4O1xyXG4gIGxlZnQ6IDE3cHg7XHJcbiAgYm90dG9tOiA3cHg7XHJcblxyXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcclxufVxyXG5cclxuXHJcbi5EYW5LMjAzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyMjhweDtcclxuICBsZWZ0OiAzNXB4O1xyXG4gIGJvdHRvbTogLTVweDtcclxuICBtYXJnaW46IDQuMnB4IDFweCAyLjhweCAyMC4zcHg7XHJcblxyXG4gIC8qIEQgRXhhbXBsZSBJdGFsaWMgKi9cclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIGZvbnQtZmFtaWx5OiBOb3RvIFNhbnMsIHVpLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogNDglO1xyXG4gIC8qIG9yIDY1JSAqL1xyXG5cclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMTlweDtcclxuXHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG5cclxuLmljb24taW5wdXQtc2hvd3Bhc3Mge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMzNweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgYm90dG9tOiAxMXB4O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW46IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDUsIDE0OCwgNTUsIDApO1xyXG59XHJcblxyXG5pbWcuaWNvbi1pbnB1dC1zaG93cGFzcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMXB4O1xyXG4gIHJpZ2h0OiAxcHg7XHJcbiAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW46IDBweDtcclxuICAvKm9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMXB4IDAgcmdiYSg2MSwgMTQyLCAyMDcsIDAuMTUpOyovXHJcblxyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZDogIzk5OTk5OTAwO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggIzk5OTk5OTAwO1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICM5OTk5OTkwMDtcclxuICBib3JkZXItbGVmdC1jb2xvcjogIzk5OTk5OTAwO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzk5OTk5OTAwO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cy12aXNpYmxlIHtcclxuICBiYWNrZ3JvdW5kOiAjOTk5OTk5MDA7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjOTk5OTk5MDA7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzk5OTk5OTAwO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjOTk5OTk5MDA7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjOTk5OTk5MDA7XHJcbn1cclxuXHJcbmlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNDOEM4Qzg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBiYWNrZ3JvdW5kOiAjOTk5OTk5MDA7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjOTk5OTk5MDA7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzk5OTk5OTAwO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjOTk5OTk5MDA7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjOTk5OTk5MDA7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGVsXTpmb2N1cyB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgYmFja2dyb3VuZDogIzk5OTk5OTAwO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggIzk5OTk5OTAwO1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICM5OTk5OTkwMDtcclxuICBib3JkZXItbGVmdC1jb2xvcjogIzk5OTk5OTAwO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzk5OTk5OTAwO1xyXG59XHJcblxyXG4uVmVjdG9yMiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG5cclxuICBsZWZ0OiAwLjIlO1xyXG4gIHJpZ2h0OiAwLjAzJTtcclxuICB0b3A6IDQyLjY2JTtcclxuICBib3R0b206IDA7XHJcblxyXG4gIC8qIEJsdWUgKi9cclxuICBib3JkZXI6IDJweCBzb2xpZCAjM0Q4RUNGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uQnV0dG9uLUFwcC1MYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzNweDtcclxuICBob3Jpei1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLnN0b3J5Ym9vay1pbnB1dC0tYWRkU3RyZW5ndGgge1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuXHJcblxyXG5cclxufVxyXG5cclxuLnN0b3J5Ym9vay1pbnB1dC0tY2xlYXJTdHJlbmd0aCB7XHJcblxyXG5cclxuICAgIGhlaWdodDogMTEwcHg7XHJcblxyXG5cclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    23839:
    /*!***************************************************************!*\
      !*** ./src/stories/pages/background1/background1Component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            Background1Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _buttons_button_language_button_language_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../buttons/button-language/button-language.component */
      5001);
      /* harmony import */


      var _buttons_button_tadiran_button_tadiran_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../buttons/button-tadiran/button-tadiran.component */
      54104);
      /* harmony import */


      var _buttons_button_globe_button_globe_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../buttons/button-globe/button-globe.component */
      16867);

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };

      var Background1Component = /*#__PURE__*/function () {
        function Background1Component() {
          _classCallCheck(this, Background1Component);

          /**
           * Is this the principal call to action on the login-main?
           */
          this.primary = true;
          /**
           * Button contents
           *
           * @required
           */

          this.label = 'Page2Component';
        }
        /*user: User | null = null;
            doLogout() {
          this.user = null;
        }
            doLogin() {
          this.user = { name: 'Jane Doe' };
        }
            doCreateAccount() {
          this.user = { name: 'Jane Doe' };
            }*/


        _createClass(Background1Component, [{
          key: "classes",
          get: function get() {
            var mode = this.primary ? 'storybook-background1--primary' : 'storybook-background1--secondary';
            return ['storybook-background1', mode];
          }
        }]);

        return Background1Component;
      }();

      Background1Component.ɵfac = function Background1Component_Factory(t) {
        return new (t || Background1Component)();
      };

      Background1Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: Background1Component,
        selectors: [["storybook-background1"]],
        inputs: {
          primary: "primary",
          backgroundColor: "backgroundColor",
          background: "background",
          label: "label"
        },
        decls: 6,
        vars: 4,
        consts: [[1, "Desktop-1Login-1", 3, "ngClass", "ngStyle"], ["src", "assets/images/icon-1.webp", "srcset", "./assets/images/icon-1@2x.webp 2x, /assets/images/icon-1@3x.webp 3x", "alt", "icon-1"], ["src", "assets/images/icon-2.webp", "srcset", "./assets/images/icon-2@2x.webp 2x, /assets/images/icon-2@3x.webp 3x", "alt", "icon-2fdf", 1, "icon-2"], ["size", "large"], ["hidden", ""]],
        template: function Background1Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "figure", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "storybook-button-language", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "storybook-button-tadiran");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "storybook-button-globe", 4);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.classes)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, ctx.background));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgStyle, _buttons_button_language_button_language_component__WEBPACK_IMPORTED_MODULE_0__.ButtonLanguageComponent, _buttons_button_tadiran_button_tadiran_component__WEBPACK_IMPORTED_MODULE_1__.ButtonTadiranComponent, _buttons_button_globe_button_globe_component__WEBPACK_IMPORTED_MODULE_2__.ButtonGlobeComponent],
        styles: [".storybook-background1[_ngcontent-%COMP%] {\n  position: absolute;\n  width: inherit;\n  height: inherit;\n}\n\n.Desktop-1Login-1[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  flex-grow: 0;\n}\n\ndiv.relative[_ngcontent-%COMP%] {\n  position: relative;\n  width: inherit;\n  height: inherit;\n}\n\n.Frame-1[_ngcontent-%COMP%] {\n  width: 1920px;\n  height: 1080px;\n  flex-grow: 0;\n}\n\n.fa-pull-left[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.fa-pull-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\nimg.icon-1[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 305.7px;\n  height: 309px;\n  transform: rotate(0deg);\n  background-position: bottom;\n}\n\nimg.icon-2[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 372px;\n  height: 343px;\n  flex-grow: 0;\n}\n\n.storybook-background1--primary[_ngcontent-%COMP%] {\n  background: linear-gradient(228.37deg, #EFF8FF 22.25%, #B0DCFF 88.18%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhY2tncm91bmQxQ29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFBRjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFERjs7QUFPQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUpGOztBQU9BO0VBQWUsV0FBQTtBQUhmOztBQUtBO0VBQWdCLFlBQUE7QUFEaEI7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUlBO0VBRUUsc0VBQUE7QUFGRiIsImZpbGUiOiJiYWNrZ3JvdW5kMUNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zdG9yeWJvb2stYmFja2dyb3VuZDEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5EZXNrdG9wLTFMb2dpbi0xIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZmxleC1ncm93OiAwO1xyXG59XHJcblxyXG5cclxuZGl2LnJlbGF0aXZlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uRnJhbWUtMSB7XHJcbiAgd2lkdGg6IDE5MjBweDtcclxuICBoZWlnaHQ6IDEwODBweDtcclxuICBmbGV4LWdyb3c6IDA7XHJcbn1cclxuXHJcbi5mYS1wdWxsLWxlZnQge2Zsb2F0OmxlZnR9XHJcblxyXG4uZmEtcHVsbC1yaWdodCB7ZmxvYXQ6cmlnaHR9XHJcblxyXG5pbWcuaWNvbi0xIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDMwNS43cHg7XHJcbiAgaGVpZ2h0OiAzMDlweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbn1cclxuXHJcbmltZy5pY29uLTIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDM3MnB4O1xyXG4gIGhlaWdodDogMzQzcHg7XHJcbiAgZmxleC1ncm93OiAwO1xyXG59XHJcblxyXG5cclxuLnN0b3J5Ym9vay1iYWNrZ3JvdW5kMS0tcHJpbWFyeSB7XHJcblxyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjguMzdkZWcsICNFRkY4RkYgMjIuMjUlLCAjQjBEQ0ZGIDg4LjE4JSk7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    479:
    /*!**************************************************************!*\
      !*** ./src/stories/pass-strength/pass-strength.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            PassStrengthComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var PassStrengthComponent = /*#__PURE__*/function () {
        function PassStrengthComponent() {
          _classCallCheck(this, PassStrengthComponent);

          /**
           * Is this the principal call to action on the login-main?
           */
          this.primary = false;
          /**
           * The password strength in percentage.
           */

          this.strength = 0;
        }

        _createClass(PassStrengthComponent, [{
          key: "strengthColor",
          value: function strengthColor(strength) {
            if (strength < 10) return 0;
            if (strength < 20) return 10;
            if (strength < 30) return 20;
            if (strength < 40) return 30;
            if (strength < 50) return 40;
            if (strength < 60) return 50;
            if (strength < 70) return 60;
            if (strength < 90) return 70;
            if (strength < 99) return 90;
            return 100;
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            var password = changes['passwordToCheck'].currentValue;

            if (password) {
              this.strength = PassStrengthComponent.measureStrength(password);
            }
          }
        }, {
          key: "classes",
          get: function get() {
            var mode = this.primary ? 'storybook-pass-strength--primary' : 'storybook-pass-strength--secondary';
            return ['storybook-pass-strength', "storybook-pass-strength--".concat(this.strengthColor(this.strength)), mode];
          }
        }], [{
          key: "measureStrength",
          value: function measureStrength(pass) {
            var score = 0; // award every unique letter until 5 repetitions

            var letters = {};

            for (var i = 0; i < pass.length; i++) {
              letters[pass[i]] = (letters[pass[i]] || 0) + 1;
              score += 5.0 / letters[pass[i]];
            } // bonus points for mixing it up


            var variations = {
              digits: /\d/.test(pass),
              lower: /[a-z]/.test(pass),
              upper: /[A-Z]/.test(pass),
              nonWords: /\W/.test(pass)
            };
            var variationCount = 0;

            for (var check in variations) {
              variationCount += variations[check] ? 1 : 0;
            }

            score += (variationCount - 1) * 10;
            return Math.trunc(score);
          }
        }]);

        return PassStrengthComponent;
      }();

      PassStrengthComponent.ɵfac = function PassStrengthComponent_Factory(t) {
        return new (t || PassStrengthComponent)();
      };

      PassStrengthComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PassStrengthComponent,
        selectors: [["storybook-pass-strength"]],
        inputs: {
          primary: "primary",
          strength: "strength",
          backgroundColor: "backgroundColor",
          passwordToCheck: "passwordToCheck"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 4,
        vars: 2,
        consts: [["id", "PassStrength", 1, "storybook-pass-strength", 3, "ngClass"], [1, "center"], [1, "mfont"]],
        template: function PassStrengthComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classes);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Strength : ", ctx.strength == null ? null : ctx.strength.toString(), "%");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
        styles: [".storybook-pass-strength[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 28px;\n  margin-bottom: 20px;\n  horiz-align: center;\n  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);\n  \n  text-align: center;\n  background: linear-gradient(to right, #ff2f00, #ff9f00) #ff2f00;\n}\n\n.center[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 20%;\n  \n  text-align: center;\n  height: 24px;\n  \n  left: calc(50% - 20%/2);\n}\n\n.mfont[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  \n  text-align: center;\n  \n  font-family: \"Noto Sans\", ui-serif;\n  font-style: italic;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 15px;\n  \n  \n  display: flex;\n  align-items: center;\n  letter-spacing: -0.011em;\n  text-transform: capitalize;\n  color: #000000;\n}\n\n\n\n.storybook-pass-strength--primary[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, yellow 0%, #afd700 100%) yellow;\n}\n\n.storybook-pass-strength--0[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #b6d5ee 0%, #d7e4ee 100%) #b6d5ee;\n}\n\n.storybook-pass-strength--10[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #c9dcec 0%, #e8dbdb 100%) #c9dcec;\n}\n\n.storybook-pass-strength--20[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #f8d1d1 0%, #fdd1a6 100%) #f8d1d1;\n}\n\n.storybook-pass-strength--30[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #fcc6a5 0%, #ffef00 100%) #fcc6a5;\n}\n\n.storybook-pass-strength--40[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #fcec84 0%, #cfe700 100%) #fcec84;\n}\n\n.storybook-pass-strength--50[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, yellow 0%, #afd700 100%) yellow;\n}\n\n.storybook-pass-strength--60[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #dfef00 0%, #8fc700 100%) #dfef00;\n}\n\n.storybook-pass-strength--70[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #bfdf00 0%, #6fbf00 100%) #bfdf00;\n}\n\n.storybook-pass-strength--90[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #7fbf00 0%, #2f9700 100%) #7fbf00;\n}\n\n.storybook-pass-strength--100[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #5fbf00 0%, green 100%) #5fbf00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3Mtc3RyZW5ndGguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUVBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0RBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBRUEsa0JBQUE7RUFFQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsR0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQyxrQ0FBQTtFQUNDLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFBcUIsb0NBQUE7RUFFdEIsR0FBQTtFQUFJLGFBQUE7RUFDSCxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFFRCxjQUFBO0FBTEg7O0FBb0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUFBOztBQXFCQTtFQUVFLHFFQTVCYTtBQVVmOztBQXNCQTtFQUE2Qix1RUFyQ2Q7QUFtQmY7O0FBbUJBO0VBQThCLHVFQXJDZjtBQXNCZjs7QUFnQkE7RUFBOEIsdUVBckNmO0FBeUJmOztBQWFBO0VBQThCLHVFQXJDZjtBQTRCZjs7QUFVQTtFQUE4Qix1RUFyQ2Y7QUErQmY7O0FBT0E7RUFBOEIscUVBckNmO0FBa0NmOztBQUlBO0VBQThCLHVFQXJDZjtBQXFDZjs7QUFDQTtFQUE4Qix1RUFyQ2Y7QUF3Q2Y7O0FBRkE7RUFBOEIsdUVBckNmO0FBMkNmOztBQUxBO0VBQStCLHFFQXJDaEI7QUE4Q2YiLCJmaWxlIjoicGFzcy1zdHJlbmd0aC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuLnN0b3J5Ym9vay1wYXNzLXN0cmVuZ3RoIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gIGhvcml6LWFsaWduOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgLypyZ2IoMTkxLCAxOTEsIDE5MSk7Ki9cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMjU1LCA0NywgMCksIHJnYigyNTUsIDE1OSwgMCkpIHJnYigyNTUsIDQ3LCAwKTtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgLyptYXJnaW46IGF1dG87Ki9cclxuXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgLyp0b3A6IGNhbGMoNTAlIC0gMjRweC8yKTsqL1xyXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjAlLzIpO1xyXG59XHJcblxyXG4ubWZvbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVweDtcclxuICAvKiovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8qICBEIFN0cm9uZyBQYXNzd29yZCAqL1xyXG4gICBmb250LWZhbWlseTogJ05vdG8gU2FucycsIHVpLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4OyAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAyNDAlKi9cclxuXHJcbiAgIC8qKi9kaXNwbGF5OiBmbGV4IDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDExZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHJcbiAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG5cclxuXHJcbiAgJHN0cmVuZ3RoMDogIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDE4MiwgMjEzLCAyMzgpIDAlLCAgcmdiKDIxNSwgMjI4LCAyMzgpICAxMDAlKSAgcmdiKDE4MiwgMjEzLCAyMzgpO1xyXG4gJHN0cmVuZ3RoMTA6ICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigyMDEsIDIyMCwgMjM2KSAwJSwgIHJnYigyMzIsIDIxOSwgMjE5KSAgMTAwJSkgIHJnYigyMDEsIDIyMCwgMjM2KTtcclxuICRzdHJlbmd0aDIwOiAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMjQ4LCAyMDksIDIwOSkgMCUsICByZ2IoMjUzLCAyMDksIDE2NikgIDEwMCUpICByZ2IoMjQ4LCAyMDksIDIwOSk7XHJcbiAkc3RyZW5ndGgzMDogIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDI1MiwgMTk4LCAxNjUpIDAlLCAgcmdiKDI1NSwgMjM5LCAwICApICAxMDAlKSAgcmdiKDI1MiwgMTk4LCAxNjUpO1xyXG4gJHN0cmVuZ3RoNDA6ICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigyNTIsIDIzNiwgMTMyKSAwJSwgIHJnYigyMDcsIDIzMSwgMCAgKSAgMTAwJSkgIHJnYigyNTIsIDIzNiwgMTMyKTtcclxuICRzdHJlbmd0aDUwOiAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMjU1LCAyNTUsIDAgICkgMCUsICByZ2IoMTc1LCAyMTUsIDAgICkgIDEwMCUpICByZ2IoMjU1LCAyNTUsIDAgICk7XHJcbiAkc3RyZW5ndGg2MDogIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDIyMywgMjM5LCAwICApIDAlLCAgcmdiKDE0MywgMTk5LCAwICApICAxMDAlKSAgcmdiKDIyMywgMjM5LCAwICApO1xyXG4gJHN0cmVuZ3RoNzA6ICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigxOTEsIDIyMywgMCAgKSAwJSwgIHJnYigxMTEsIDE5MSwgMCAgKSAgMTAwJSkgIHJnYigxOTEsIDIyMywgMCAgKTtcclxuICRzdHJlbmd0aDkwOiAgbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMTI3LCAxOTEsIDAgICkgMCUsICByZ2IoIDQ3LCAxNTEsIDAgICkgIDEwMCUpICByZ2IoMTI3LCAxOTEsIDAgICk7XHJcbiRzdHJlbmd0aDEwMDogIGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKCA5NSwgMTkxLCAwICApIDAlLCAgcmdiKCAgMCwgMTI4LCAwICApICAxMDAlKSAgcmdiKCA5NSwgMTkxLCAwICApO1xyXG4vKlxyXG4kdmVoaWNsZVNlYXRpbmc6ICRzdHJlbmd0aDA7XHJcblxyXG4kc3RyZW5ndGg6IDM1O1xyXG5cclxuXHJcbkBpZiAoJHN0cmVuZ3RoIDwgMzApIHsgJHZlaGljbGVTZWF0aW5nOiAkc3RyZW5ndGgwO31cclxuQGVsc2UgaWYgKCRzdHJlbmd0aCA8IDQwKSB7JHZlaGljbGVTZWF0aW5nOiAkc3RyZW5ndGgzMDt9XHJcbkBlbHNlIGlmICgkc3RyZW5ndGggPCA1MCkgeyR2ZWhpY2xlU2VhdGluZzogJHN0cmVuZ3RoNDA7fVxyXG5AZWxzZSBpZiAoJHN0cmVuZ3RoIDwgNjApIHskdmVoaWNsZVNlYXRpbmc6ICRzdHJlbmd0aDUwO31cclxuQGVsc2UgaWYgKCRzdHJlbmd0aCA8IDcwKSB7JHZlaGljbGVTZWF0aW5nOiAkc3RyZW5ndGg2MDt9XHJcbkBlbHNlIGlmICgkc3RyZW5ndGggPCA5MCkgeyR2ZWhpY2xlU2VhdGluZzogJHN0cmVuZ3RoNzA7fVxyXG5AZWxzZSBpZiAoJHN0cmVuZ3RoIDwgOTkpIHskdmVoaWNsZVNlYXRpbmc6ICRzdHJlbmd0aDkwO31cclxuQGVsc2UgeyR2ZWhpY2xlU2VhdGluZzogJHN0cmVuZ3RoMTAwO31cclxuXHJcblxyXG4kdmVoaWNsZVNlYXRpbmc6IG1hcC1nZXQoKFxyXG4gIDM6ICRzdHJlbmd0aDYwLFxyXG4gIGJ1cyA6IDIwLFxyXG4pLCAkc3RyZW5ndGgpO1xyXG4qL1xyXG4uc3Rvcnlib29rLXBhc3Mtc3RyZW5ndGgtLXByaW1hcnkge1xyXG5cclxuICBiYWNrZ3JvdW5kOiAkc3RyZW5ndGg1MDtcclxuXHJcbn1cclxuXHJcbi5zdG9yeWJvb2stcGFzcy1zdHJlbmd0aC0tMHsgYmFja2dyb3VuZDogJHN0cmVuZ3RoMDsgfVxyXG4uc3Rvcnlib29rLXBhc3Mtc3RyZW5ndGgtLTEweyBiYWNrZ3JvdW5kOiAkc3RyZW5ndGgxMDsgfVxyXG4uc3Rvcnlib29rLXBhc3Mtc3RyZW5ndGgtLTIweyBiYWNrZ3JvdW5kOiAkc3RyZW5ndGgyMDsgfVxyXG4uc3Rvcnlib29rLXBhc3Mtc3RyZW5ndGgtLTMweyBiYWNrZ3JvdW5kOiAkc3RyZW5ndGgzMDsgfVxyXG4uc3Rvcnlib29rLXBhc3Mtc3RyZW5ndGgtLTQweyBiYWNrZ3JvdW5kOiAkc3RyZW5ndGg0MDsgfVxyXG4uc3Rvcnlib29rLXBhc3Mtc3RyZW5ndGgtLTUweyBiYWNrZ3JvdW5kOiAkc3RyZW5ndGg1MDsgfVxyXG4uc3Rvcnlib29rLXBhc3Mtc3RyZW5ndGgtLTYweyBiYWNrZ3JvdW5kOiAkc3RyZW5ndGg2MDsgfVxyXG4uc3Rvcnlib29rLXBhc3Mtc3RyZW5ndGgtLTcweyBiYWNrZ3JvdW5kOiAkc3RyZW5ndGg3MDsgfVxyXG4uc3Rvcnlib29rLXBhc3Mtc3RyZW5ndGgtLTkweyBiYWNrZ3JvdW5kOiAkc3RyZW5ndGg5MDsgfVxyXG4uc3Rvcnlib29rLXBhc3Mtc3RyZW5ndGgtLTEwMHsgYmFja2dyb3VuZDogJHN0cmVuZ3RoMTAwOyB9XHJcblxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    79899:
    /*!*************************************************************!*\
      !*** ./src/stories/spinners/spinner1/spinner1.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Spinner1Component": function Spinner1Component() {
          return (
            /* binding */
            _Spinner1Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };

      var _Spinner1Component = /*#__PURE__*/function () {
        function _Spinner1Component() {
          _classCallCheck(this, _Spinner1Component);

          /**
           * Is this the principal call to action on the login-main?
           */
          this.primary = false;
          /**
           * How large should the button be?
           */

          this.size = 'medium';
          /**
           * Button contents
           *
           * @required
           */

          this.label = 'accGateButton2';
          /**
           * Optional click handler
           */

          this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(_Spinner1Component, [{
          key: "classes",
          get: function get() {
            var mode = this.primary ? 'storybook-button-ex--primary' : 'storybook-button-ex--secondary';
            return ['storybook-button-ex', "storybook-button-ex--".concat(this.size), mode];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _Spinner1Component;
      }();

      _Spinner1Component.ɵfac = function Spinner1Component_Factory(t) {
        return new (t || _Spinner1Component)();
      };

      _Spinner1Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _Spinner1Component,
        selectors: [["storybook-spinner1"]],
        inputs: {
          primary: "primary",
          backgroundColor: "backgroundColor",
          size: "size",
          label: "label"
        },
        outputs: {
          onClick: "onClick"
        },
        decls: 2,
        vars: 4,
        consts: [[1, "Vector", 3, "click"], ["src", "./assets/images/Spinner1.gif", "alt", "Ex-Icon", 1, "Ex-Icon", 3, "ngClass", "ngStyle"]],
        template: function Spinner1Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Spinner1Component_Template_button_click_0_listener($event) {
              return ctx.onClick.emit($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classes)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.backgroundColor));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
        styles: ["button.Vector[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 70px;\r\n  height: 70px;\r\n  padding: 0;\r\n  margin: 0;\r\n  background: rgba(255, 255, 255, 0);\r\n}\r\n\r\nimg.Ex-Icon[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 1px;\r\n  right: 1px;\r\n  width: 69px;\r\n  height: 69px;\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  box-shadow: 0 1px 1px 0 rgba(61, 142, 207, 0.15);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNwaW5uZXIxLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixVQUFVO0VBQ1YsU0FBUztFQUNULGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQW1CO0tBQW5CLG1CQUFtQjtFQUNuQixnREFBZ0Q7QUFDbEQiLCJmaWxlIjoic3Bpbm5lcjEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbi5WZWN0b3Ige1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNzBweDtcclxuICBoZWlnaHQ6IDcwcHg7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxufVxyXG5cclxuaW1nLkV4LUljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDFweDtcclxuICByaWdodDogMXB4O1xyXG4gIHdpZHRoOiA2OXB4O1xyXG4gIGhlaWdodDogNjlweDtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoNjEsIDE0MiwgMjA3LCAwLjE1KTtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    25557:
    /*!******************************************************!*\
      !*** ./src/stories/task-list/task-list.component.ts ***!
      \******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TaskListComponent": function TaskListComponent() {
          return (
            /* binding */
            _TaskListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var src_stories_task_task_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/stories/task/task.component */
      48262);

      function TaskListComponent_storybook_task_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "storybook-task", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("onArchiveTask", function TaskListComponent_storybook_task_1_Template_storybook_task_onArchiveTask_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.onArchiveTask.emit($event);
          })("onPinTask", function TaskListComponent_storybook_task_1_Template_storybook_task_onPinTask_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r6.onPinTask.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var task_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("task", task_r3);
        }
      }

      function TaskListComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "You have no tasks");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Sit back and relax");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function TaskListComponent_div_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Loading");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "cool");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "state");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return [1, 2, 3, 4, 5, 6];
      };

      function TaskListComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TaskListComponent_div_3_div_1_Template, 9, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
        }
      }

      var _TaskListComponent = /*#__PURE__*/function () {
        function _TaskListComponent() {
          _classCallCheck(this, _TaskListComponent);

          /**
           * @ignore
           * Component property to define ordering of tasks
           */
          this.tasksInOrder = [];
          this.loading = false; // tslint:disable-next-line: no-output-on-prefix

          this.onPinTask = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(); // tslint:disable-next-line: no-output-on-prefix

          this.onArchiveTask = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        }

        _createClass(_TaskListComponent, [{
          key: "tasks",
          set: function set(arr) {
            var initialTasks = [].concat(_toConsumableArray(arr.filter(function (t) {
              return t.state === 'TASK_PINNED';
            })), _toConsumableArray(arr.filter(function (t) {
              return t.state !== 'TASK_PINNED';
            })));
            var filteredTasks = initialTasks.filter(function (t) {
              return t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED';
            });
            this.tasksInOrder = filteredTasks.filter(function (t) {
              return t.state === 'TASK_INBOX' || t.state === 'TASK_PINNED';
            });
          }
        }]);

        return _TaskListComponent;
      }();

      _TaskListComponent.ɵfac = function TaskListComponent_Factory(t) {
        return new (t || _TaskListComponent)();
      };

      _TaskListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _TaskListComponent,
        selectors: [["app-task-list"]],
        inputs: {
          loading: "loading",
          tasks: "tasks"
        },
        outputs: {
          onPinTask: "onPinTask",
          onArchiveTask: "onArchiveTask"
        },
        decls: 4,
        vars: 3,
        consts: [[1, "list-items"], [3, "task", "onArchiveTask", "onPinTask", 4, "ngFor", "ngForOf"], ["class", "wrapper-message", 4, "ngIf"], [4, "ngIf"], [3, "task", "onArchiveTask", "onPinTask"], [1, "wrapper-message"], [1, "icon-check"], [1, "title-message"], [1, "subtitle-message"], ["class", "loading-item", 4, "ngFor", "ngForOf"], [1, "loading-item"], [1, "glow-checkbox"], [1, "glow-text"]],
        template: function TaskListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, TaskListComponent_storybook_task_1_Template, 1, 1, "storybook-task", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TaskListComponent_div_2_Template, 6, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TaskListComponent_div_3_Template, 2, 2, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tasksInOrder);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.tasksInOrder.length === 0 && !ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, src_stories_task_task_component__WEBPACK_IMPORTED_MODULE_0__.TaskComponent],
        encapsulation: 2
      });
      /***/
    },

    /***/
    48262:
    /*!********************************************!*\
      !*** ./src/stories/task/task.component.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TaskComponent": function TaskComponent() {
          return (
            /* binding */
            _TaskComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function TaskComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.onPin(ctx_r2.task.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "pinTask-" + ctx_r0.task.id);
        }
      }

      function TaskComponent_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_button_13_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.onPin(ctx_r4.task.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "pinTask-" + ctx_r1.task.id);
        }
      }

      var _TaskComponent = /*#__PURE__*/function () {
        function _TaskComponent() {
          _classCallCheck(this, _TaskComponent);

          // tslint:disable-next-line: no-output-on-prefix
          this.onPinTask = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // tslint:disable-next-line: no-output-on-prefix

          this.onArchiveTask = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }
        /**
         * Component method to trigger the onPin event
         * @param id string
         */


        _createClass(_TaskComponent, [{
          key: "onPin",
          value: function onPin(id) {
            this.onPinTask.emit(id);
          }
          /**
           * Component method to trigger the onArchive event
           * @param id string
           */

        }, {
          key: "onArchive",
          value: function onArchive(id) {
            this.onArchiveTask.emit(id);
          }
        }]);

        return _TaskComponent;
      }();

      _TaskComponent.ɵfac = function TaskComponent_Factory(t) {
        return new (t || _TaskComponent)();
      };

      _TaskComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _TaskComponent,
        selectors: [["storybook-task"]],
        inputs: {
          task: "task"
        },
        outputs: {
          onPinTask: "onPinTask",
          onArchiveTask: "onArchiveTask"
        },
        decls: 14,
        vars: 28,
        consts: [[1, "checkbox", 3, "for"], ["type", "checkbox", "disabled", "true", 3, "defaultChecked", "name", "id"], [1, "checkbox-custom", 3, "click"], [1, "title", 3, "for"], ["type", "text", "readonly", "true", "placeholder", "Input title", 3, "value", "id", "name"], ["class", "pin-button", 3, "click", 4, "ngIf"], [1, "pin-button", 3, "click"], [1, "icon-star"]],
        template: function TaskComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_span_click_3_listener() {
              return ctx.onArchive(ctx.task.id);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TaskComponent_button_6_Template, 2, 1, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_span_click_10_listener() {
              return ctx.onArchive(ctx.task.id);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TaskComponent_button_13_Template, 2, 1, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("list-item ", ctx.task == null ? null : ctx.task.state, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "checked-", ctx.task == null ? null : ctx.task.id, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "archiveTask-" + ctx.task.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "checked-", ctx.task == null ? null : ctx.task.id, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "checked-", ctx.task == null ? null : ctx.task.id, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultChecked", (ctx.task == null ? null : ctx.task.state) === "TASK_ARCHIVED");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "title-", ctx.task == null ? null : ctx.task.id, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.task.title + "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "title-", ctx.task == null ? null : ctx.task.id, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "title-", ctx.task == null ? null : ctx.task.id, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.task.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.task == null ? null : ctx.task.state) !== "TASK_ARCHIVED");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("list-item ", ctx.task == null ? null : ctx.task.state, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "checked-", ctx.task == null ? null : ctx.task.id, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "archiveTask-" + ctx.task.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "checked-", ctx.task == null ? null : ctx.task.id, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "checked-", ctx.task == null ? null : ctx.task.id, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("defaultChecked", (ctx.task == null ? null : ctx.task.state) === "TASK_ARCHIVED");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "title-", ctx.task == null ? null : ctx.task.id, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.task.title + "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "title-", ctx.task == null ? null : ctx.task.id, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "title-", ctx.task == null ? null : ctx.task.id, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.task.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.task == null ? null : ctx.task.state) !== "TASK_ARCHIVED");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
        styles: [".list-item.TASK_ARCHIVED[_ngcontent-%COMP%]   input[type=\"text\"][_ngcontent-%COMP%] {\r\n  color: #4a5568;\r\n  text-decoration: line-through;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhc2suY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLDZCQUE2QjtBQUMvQiIsImZpbGUiOiJ0YXNrLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWl0ZW0uVEFTS19BUkNISVZFRCBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgY29sb3I6ICM0YTU1Njg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuIl19 */"]
      });
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map