(function () {
  var _templateObject;

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

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
            var _this = this;

            var authReq = req;
            var token = this.tokenService.getToken();

            if (token != null) {
              authReq = this.addTokenHeader(req, token); // for Spring Boot back-end
              // authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + token) });
              // for Node.js Express back-end
              //authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, token) });
            }

            return next.handle(authReq).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (error) {
              if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpErrorResponse && !authReq.url.includes('auth/signin') && error.status === 401) {
                return _this.handle401Error(authReq, next);
              }

              return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(error);
            }));
          }
        }, {
          key: "handle401Error",
          value: function handle401Error(request, next) {
            var _this2 = this;

            if (!this.isRefreshing) {
              this.isRefreshing = true;
              this.refreshTokenSubject.next(null);
              var token = this.tokenService.getRefreshToken();
              if (token) return this.authService.refreshToken(token).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(function (token) {
                _this2.isRefreshing = false;

                _this2.tokenService.saveToken(token.accessToken);

                _this2.tokenService.saveRefreshToken(token.refreshToken);

                _this2.refreshTokenSubject.next(token.accessToken);

                return next.handle(_this2.addTokenHeader(request, token.accessToken));
              }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (err) {
                _this2.isRefreshing = false;

                _this2.tokenService.signOut();

                return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(err);
              }));
            }

            return this.refreshTokenSubject.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.filter)(function (token) {
              return token !== null;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.take)(1), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.switchMap)(function (token) {
              return next.handle(_this2.addTokenHeader(request, token));
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
            var _this3 = this;

            var token = this.tokenService.getRefreshToken();
            if (token) this.authService.refreshToken(token).subscribe(function (data) {
              _this3.isRefreshing = false;

              _this3.tokenService.saveToken(data.accessToken);

              _this3.refreshTokenSubject.next(data.accessToken);
            }, function (err) {
              _this3.isRefreshing = false;

              _this3.tokenService.signOut();

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
          } // login, register

        }, {
          key: "webapptab",
          value: function webapptab(token, webapp) {
            return this.http.post(AUTH_API + 'webapptab', {
              refreshToken: token,
              webApp: webapp
            }, httpOptions).toPromise();
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


      var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../app.config */
      49670);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      91841);

      var API_URL = _app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.accServer.ACCWEBServers + '/accGate/test/';

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
        }]);

        return _UserService;
      }();

      _UserService.ɵfac = function UserService_Factory(t) {
        return new (t || _UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _UserService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login/login.component */
      98458);
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home/home.component */
      45067);
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile/profile.component */
      96630);
      /* harmony import */


      var _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./board-user/board-user.component */
      14652);
      /* harmony import */


      var _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./board-moderator/board-moderator.component */
      49586);
      /* harmony import */


      var _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./board-admin/board-admin.component */
      5838);
      /* harmony import */


      var _profile2_profile2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile2/profile2.component */
      6592);
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./register/register.component */
      29087);
      /* harmony import */


      var _login_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./login/register-form/register-form.component */
      70996);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716); //import { Login2RoutingModule } from "./login-main/login-main-routing.module";
      //import { Register2Component } from "./register2/register2.component";


      var routes = [{
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
      }, {
        path: 'login2',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(__webpack_require__,
          /*! ./login2/login2.module */
          81490)).then(function (m) {
            return m.Login2Module;
          });
        }
      }, {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__.RegisterComponent
      }, //{ path: 'register2', component: Register2Component },
      {
        path: 'registeform',
        component: _login_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_8__.RegisterFormComponent
      }, //{ path: 'registerform2', component: RegisterForm2Component },
      {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__.ProfileComponent
        /*, canActivate: [AppRoutingGuard] */

      }, {
        path: 'profile2',
        component: _profile2_profile2_component__WEBPACK_IMPORTED_MODULE_6__["default"]
        /*, canActivate: [AppRoutingGuard] */

      }, {
        path: 'user',
        component: _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_3__.BoardUserComponent
      }, {
        path: 'mod',
        component: _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_4__.BoardModeratorComponent
      }, {
        path: 'admin',
        component: _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_5__.BoardAdminComponent
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

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes
        /*, {useHash: true}*/
        )], _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./_services/token-storage.service */
      93590);
      /* harmony import */


      var _shared_event_bus_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./_shared/event-bus.service */
      98097);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(tokenStorageService, eventBusService) {
          _classCallCheck(this, _AppComponent);

          this.tokenStorageService = tokenStorageService;
          this.eventBusService = eventBusService;
          this.roles = [];
          this.isLoggedIn = false;
          this.showAdminBoard = false;
          this.showModeratorBoard = false;
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.isLoggedIn = !!this.tokenStorageService.getToken();

            if (this.isLoggedIn) {
              var user = this.tokenStorageService.getUser();
              this.roles = user.roles;
              this.showAdminBoard = this.roles.includes('Admin') || this.roles.includes('SupervisorAdmin');
              this.showModeratorBoard = this.roles.includes('SupervisorMonitor');
              this.username = user.username;
            }

            this.eventBusSub = this.eventBusService.on('logout', function () {
              _this4.logout();
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

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_event_bus_service__WEBPACK_IMPORTED_MODULE_1__.EventBusService));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        consts: [["id", "app"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "router-outlet", 0);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
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


      var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login/login.component */
      98458);
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./register/register.component */
      29087);
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./home/home.component */
      45067);
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile/profile.component */
      96630);
      /* harmony import */


      var _profile2_profile2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile2/profile2.component */
      6592);
      /* harmony import */


      var _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./board-admin/board-admin.component */
      5838);
      /* harmony import */


      var _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./board-moderator/board-moderator.component */
      49586);
      /* harmony import */


      var _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./board-user/board-user.component */
      14652);
      /* harmony import */


      var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./_helpers/auth.interceptor */
      19230);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      72075);
      /* harmony import */


      var mdb_angular_ui_kit_accordion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! mdb-angular-ui-kit/accordion */
      60415);
      /* harmony import */


      var mdb_angular_ui_kit_carousel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! mdb-angular-ui-kit/carousel */
      41692);
      /* harmony import */


      var mdb_angular_ui_kit_checkbox__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! mdb-angular-ui-kit/checkbox */
      85176);
      /* harmony import */


      var mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! mdb-angular-ui-kit/collapse */
      82785);
      /* harmony import */


      var mdb_angular_ui_kit_dropdown__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! mdb-angular-ui-kit/dropdown */
      90210);
      /* harmony import */


      var mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! mdb-angular-ui-kit/forms */
      95095);
      /* harmony import */


      var mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! mdb-angular-ui-kit/modal */
      25303);
      /* harmony import */


      var mdb_angular_ui_kit_popover__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! mdb-angular-ui-kit/popover */
      69147);
      /* harmony import */


      var mdb_angular_ui_kit_radio__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! mdb-angular-ui-kit/radio */
      38754);
      /* harmony import */


      var mdb_angular_ui_kit_range__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! mdb-angular-ui-kit/range */
      10434);
      /* harmony import */


      var mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! mdb-angular-ui-kit/ripple */
      7116);
      /* harmony import */


      var mdb_angular_ui_kit_scrollspy__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! mdb-angular-ui-kit/scrollspy */
      74803);
      /* harmony import */


      var mdb_angular_ui_kit_tabs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! mdb-angular-ui-kit/tabs */
      78141);
      /* harmony import */


      var mdb_angular_ui_kit_tooltip__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! mdb-angular-ui-kit/tooltip */
      64433);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      75835);
      /* harmony import */


      var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! angular-bootstrap-md */
      49260);
      /* harmony import */


      var _login_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./login/register-form/register-form.component */
      70996);
      /* harmony import */


      var _login_replace_pass_form_replace_pass_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./login/replace-pass-form/replace-pass-form.component */
      4959);
      /* harmony import */


      var _pipes_api_error_message_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./pipes/api-error-message.pipe */
      81582);
      /* harmony import */


      var _pipes_login_error_message_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./pipes/login-error-message.pipe */
      74164);
      /* harmony import */


      var _login2_login2_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./login2/login2.module */
      81490);
      /* harmony import */


      var _storybook_storybook_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./storybook/storybook.module */
      18322);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/core */
      37716); //import {FormsModule, ReactiveFormsModule} from '@angular/forms';
      //import {TaskListComponent} from '../stories/task-list/task-list.component'


      var _AppModule = /*#__PURE__*/_createClass(function _AppModule() {
        _classCallCheck(this, _AppModule);
      });

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
        providers: [_helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_10__.authInterceptorProviders],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbDatepickerModule, mdb_angular_ui_kit_accordion__WEBPACK_IMPORTED_MODULE_21__.MdbAccordionModule, mdb_angular_ui_kit_carousel__WEBPACK_IMPORTED_MODULE_22__.MdbCarouselModule, mdb_angular_ui_kit_checkbox__WEBPACK_IMPORTED_MODULE_23__.MdbCheckboxModule, mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_24__.MdbCollapseModule, mdb_angular_ui_kit_dropdown__WEBPACK_IMPORTED_MODULE_25__.MdbDropdownModule, mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_26__.MdbFormsModule, mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_27__.MdbModalModule, mdb_angular_ui_kit_popover__WEBPACK_IMPORTED_MODULE_28__.MdbPopoverModule, mdb_angular_ui_kit_radio__WEBPACK_IMPORTED_MODULE_29__.MdbRadioModule, mdb_angular_ui_kit_range__WEBPACK_IMPORTED_MODULE_30__.MdbRangeModule, mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_31__.MdbRippleModule, mdb_angular_ui_kit_scrollspy__WEBPACK_IMPORTED_MODULE_32__.MdbScrollspyModule, mdb_angular_ui_kit_tabs__WEBPACK_IMPORTED_MODULE_33__.MdbTabsModule, mdb_angular_ui_kit_tooltip__WEBPACK_IMPORTED_MODULE_34__.MdbTooltipModule, //MdbValidationModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__.BrowserAnimationsModule, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_36__.ModalModule, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_36__.ButtonsModule, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_36__.MDBBootstrapModule.forRoot(), _login2_login2_module__WEBPACK_IMPORTED_MODULE_15__.Login2Module, _storybook_storybook_module__WEBPACK_IMPORTED_MODULE_16__.StorybookModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent, //Register2Component,
          _home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__.ProfileComponent, _profile2_profile2_component__WEBPACK_IMPORTED_MODULE_6__["default"], _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_7__.BoardAdminComponent, _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_8__.BoardModeratorComponent, _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_9__.BoardUserComponent, _login_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_11__.RegisterFormComponent, _login_replace_pass_form_replace_pass_form_component__WEBPACK_IMPORTED_MODULE_12__.ReplacePassFormComponent, _pipes_api_error_message_pipe__WEBPACK_IMPORTED_MODULE_13__.ApiErrorMessagePipe, _pipes_login_error_message_pipe__WEBPACK_IMPORTED_MODULE_14__.LoginErrorMessagePipe],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_20__.NgbDatepickerModule, mdb_angular_ui_kit_accordion__WEBPACK_IMPORTED_MODULE_21__.MdbAccordionModule, mdb_angular_ui_kit_carousel__WEBPACK_IMPORTED_MODULE_22__.MdbCarouselModule, mdb_angular_ui_kit_checkbox__WEBPACK_IMPORTED_MODULE_23__.MdbCheckboxModule, mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_24__.MdbCollapseModule, mdb_angular_ui_kit_dropdown__WEBPACK_IMPORTED_MODULE_25__.MdbDropdownModule, mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_26__.MdbFormsModule, mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_27__.MdbModalModule, mdb_angular_ui_kit_popover__WEBPACK_IMPORTED_MODULE_28__.MdbPopoverModule, mdb_angular_ui_kit_radio__WEBPACK_IMPORTED_MODULE_29__.MdbRadioModule, mdb_angular_ui_kit_range__WEBPACK_IMPORTED_MODULE_30__.MdbRangeModule, mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_31__.MdbRippleModule, mdb_angular_ui_kit_scrollspy__WEBPACK_IMPORTED_MODULE_32__.MdbScrollspyModule, mdb_angular_ui_kit_tabs__WEBPACK_IMPORTED_MODULE_33__.MdbTabsModule, mdb_angular_ui_kit_tooltip__WEBPACK_IMPORTED_MODULE_34__.MdbTooltipModule, //MdbValidationModule,
          _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_35__.BrowserAnimationsModule, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_36__.ModalModule, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_36__.ButtonsModule, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_36__.MDBRootModule, _login2_login2_module__WEBPACK_IMPORTED_MODULE_15__.Login2Module, _storybook_storybook_module__WEBPACK_IMPORTED_MODULE_16__.StorybookModule]
        });
      })();
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
            var _this5 = this;

            this.userService.getAdminBoard().subscribe(function (data) {
              _this5.content = data;
            }, function (err) {
              _this5.content = JSON.parse(err.error).message;
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this6 = this;

            var _this$form = this.form,
                username = _this$form.username,
                email = _this$form.email,
                password = _this$form.password,
                roles = _this$form.roles;
            this.rolesList.push(roles);
            this.authService.register(username, email, password, this.rolesList).subscribe(function (data) {
              console.log(data);
              _this6.isSuccessful = true;
              _this6.isSignUpFailed = false;
            }, function (err) {
              _this6.errorMessage = err.error.message;
              _this6.isSignUpFailed = true;
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
            var _this7 = this;

            this.userService.getModeratorBoard().subscribe(function (data) {
              _this7.content = data;
            }, function (err) {
              _this7.content = JSON.parse(err.error).message;
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
            var _this8 = this;

            this.userService.getUserBoard().subscribe(function (data) {
              _this8.content = data;
            }, function (err) {
              _this8.content = err.error.message || err.error || err.message;
              if (err.status === 403) _this8.eventBusService.emit(new _shared_event_class__WEBPACK_IMPORTED_MODULE_0__.EventData('logout', null));
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
        styles: [".font_0[_ngcontent-%COMP%] {\r\n  font-size:44px;\r\n  text-align:left;\r\n  color:#FFFFFF;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%], .alert-success[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n}\r\n\r\n.background[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n  background-origin: border-box;\r\n  background-image: url('Background.webp');\r\n  \r\n  background-repeat: no-repeat;\r\n  background-position: top left;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFHQTtFQUNFLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0Isd0NBQWlFO0VBQ2pFLDJFQUEyRTtFQUMzRSw0QkFBNEI7RUFDNUIsNkJBQTZCOztBQUUvQjs7QUFFQTs7Ozs7Ozs7O0NBU0MiLCJmaWxlIjoiYm9hcmQtdXNlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb250XzAge1xyXG4gIGZvbnQtc2l6ZTo0NHB4O1xyXG4gIHRleHQtYWxpZ246bGVmdDtcclxuICBjb2xvcjojRkZGRkZGO1xyXG59XHJcblxyXG4uYWxlcnQsIC5hbGVydC1zdWNjZXNzIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG5cclxuLmJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1vcmlnaW46IGJvcmRlci1ib3g7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL19zZXJ2aWNlcy9hc3NldHMvaW1hZ2VzL0JhY2tncm91bmQud2VicCk7XHJcbiAgLypsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMzAsIDc1LCAxMTUsIDEpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTsqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XHJcblxyXG59XHJcblxyXG4vKlxyXG5pZnJhbWUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ub3V0cHV0IHtcclxuICBiYWNrZ3JvdW5kOiAjZWVlO1xyXG59XHJcbiovXHJcbiJdfQ== */"]
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
            var _this9 = this;

            this.userService.getPublicContent().subscribe(function (data) {
              _this9.content = data;
            }, function (err) {
              _this9.content = JSON.parse(err.error).message;
            });
            this.userService.getAccVersion().subscribe(function (data) {
              _this9.ACC_VERSION = data;
            }, function (err) {
              _this9.ACC_VERSION = JSON.parse(err.error).message;
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
        styles: ["._1Q9if[_ngcontent-%COMP%], ._2Hij5[_ngcontent-%COMP%] {\r\n  word-wrap: break-word;\r\n  overflow-wrap: break-word;\r\n  text-align: start;\r\n  pointer-events: none;\r\n}\r\n\r\n._3SQN-[_ngcontent-%COMP%], ._3wnIc[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.multi-bg-example[_ngcontent-%COMP%] {\r\n  width: 980px;\r\n  height: 289px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  -o-object-position: 50% 50%;\r\n     object-position: 50% 50%;\r\n}\r\n\r\n.font_0[_ngcontent-%COMP%] {\r\n  font-size:44px;\r\n  text-align:left;\r\n  color:#FFFFFF;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%], .alert-success[_ngcontent-%COMP%] {\r\n  width: 48%;\r\n}\r\n\r\n.background[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n  background-origin: border-box;\r\n  background-image: url('Background.webp');\r\n  \r\n  background-repeat: no-repeat;\r\n  background-position: top left;\r\n\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%] {\r\n  background-image: url('contact-center.jpg');\r\n  background-position: top right;\r\n  padding-bottom: 100px;\r\n}\r\n\r\naside[_ngcontent-%COMP%] {\r\n  width: 48%;\r\n  padding-left: .1rem;\r\n  margin-left: .1rem;\r\n  float: right;\r\n  box-shadow: inset 5px 0 5px -5px #29627e;\r\n  font-style: italic;\r\n  color: #29627e;\r\n\r\n}\r\n\r\naside[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n  margin: .20rem;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-family: 'Fira Sans', sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQiwyQkFBd0I7S0FBeEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBR0E7RUFDRSxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLHdDQUFpRTtFQUNqRSwyRUFBMkU7RUFDM0UsNEJBQTRCO0VBQzVCLDZCQUE2Qjs7QUFFL0I7O0FBRUE7RUFDRSwyQ0FBb0U7RUFDcEUsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGNBQWM7O0FBRWhCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0QyIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuXzFROWlmLCAuXzJIaWo1IHtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLl8zU1FOLSwgLl8zd25JYyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tdWx0aS1iZy1leGFtcGxlIHtcclxuICB3aWR0aDogOTgwcHg7XHJcbiAgaGVpZ2h0OiAyODlweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBvYmplY3QtcG9zaXRpb246IDUwJSA1MCU7XHJcbn1cclxuXHJcbi5mb250XzAge1xyXG4gIGZvbnQtc2l6ZTo0NHB4O1xyXG4gIHRleHQtYWxpZ246bGVmdDtcclxuICBjb2xvcjojRkZGRkZGO1xyXG59XHJcblxyXG4uYWxlcnQsIC5hbGVydC1zdWNjZXNzIHtcclxuICB3aWR0aDogNDglO1xyXG59XHJcblxyXG5cclxuLmJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1vcmlnaW46IGJvcmRlci1ib3g7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL19zZXJ2aWNlcy9hc3NldHMvaW1hZ2VzL0JhY2tncm91bmQud2VicCk7XHJcbiAgLypsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMzAsIDc1LCAxMTUsIDEpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTsqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XHJcblxyXG59XHJcblxyXG4uYmctaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9fc2VydmljZXMvYXNzZXRzL2ltYWdlcy9jb250YWN0LWNlbnRlci5qcGcpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbmFzaWRlIHtcclxuICB3aWR0aDogNDglO1xyXG4gIHBhZGRpbmctbGVmdDogLjFyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IC4xcmVtO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBib3gtc2hhZG93OiBpbnNldCA1cHggMCA1cHggLTVweCAjMjk2MjdlO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBjb2xvcjogIzI5NjI3ZTtcclxuXHJcbn1cclxuYXNpZGUgPiBwIHtcclxuICBtYXJnaW46IC4yMHJlbTtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbiJdfQ== */"]
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/_services/auth.service */
      88368);
      /* harmony import */


      var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/_services/token-storage.service */
      93590);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _stories_pages_background1_background1Component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../stories/pages/background1/background1Component */
      23839);
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/button */
      51095);
      /* harmony import */


      var _stories_forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../stories/forms/login-form/login-form-component */
      73824);

      var _c0 = ["formHeader"];

      var _LoginMainComponent = /*#__PURE__*/function () {
        function _LoginMainComponent(renderer, registerFormDialog, replacePassFormDialog, authService, tokenStorage, router) {
          _classCallCheck(this, _LoginMainComponent);

          this.renderer = renderer;
          this.registerFormDialog = registerFormDialog;
          this.replacePassFormDialog = replacePassFormDialog;
          this.authService = authService;
          this.tokenStorage = tokenStorage;
          this.router = router;
          this.isLoggedIn = false;
          this.isLoginFailed = false;
          this.loginErrorMessage = '';
          this.roles = [];
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
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2)),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('123456', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(2))
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
            var registerFormDialogRef = this.registerFormDialog.open(_register_form2_register_form2_component__WEBPACK_IMPORTED_MODULE_0__["default"], {
              data: {
                username: this.getUsernameCurrentFieldValue,
                password: this.getPasswordCurrentFieldValue
              }
            });
            registerFormDialogRef.afterClosed().subscribe(function (result) {
              console.log('The register form dialog was closed');
            });
            return registerFormDialogRef.afterClosed().toPromise();
          }
        }, {
          key: "openReplacePassForm",
          value: function openReplacePassForm() {
            var _this10 = this;

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
              console.log("Dialog result: ".concat(result));
              console.log("Dialog result: ".concat(result.message));
              console.log("Dialog result: ".concat(result.message.toString()));

              if (result.message === 'Replace Password Complete') {
                _this10.setUsernameCurrentFieldValue(result.data.username);

                _this10.setPasswordCurrentFieldValue(result.data.password.toString());
              }
            });
            return replacePassFormDialogRef.afterClosed().toPromise();
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
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
          /*
            openRegisterForm() {
              return this.registerFormService.open(RegisterFormComponent).onClose.toPromise();
            }
          
            openReplacePassword() {
              this.replacePassFormService.open(ReplacePassForm2Component);
            }
          */

        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this11 = this;

            console.warn('Login Request from login-main!');
            var _this$loginForm$value = this.loginForm.value,
                username = _this$loginForm$value.username,
                password = _this$loginForm$value.password;
            this.authService.login(username, password).subscribe(function (data) {
              _this11.tokenStorage.saveToken(data.accessToken);

              _this11.tokenStorage.saveRefreshToken(data.refreshToken);

              _this11.tokenStorage.saveUser(data);

              _this11.isLoginFailed = false;
              _this11.isLoggedIn = true;
              _this11.roles = _this11.tokenStorage.getUser().roles;

              _this11.profile2();
            }, function (err) {
              switch (err.error.message) {
                case "Error: A registry process should be made!":
                  //this.openRegisterForm().then(() => {this.openReplacePassword()});
                  //toPromise((data) => {this.openReplacePassword()});
                  _this11.openRegisterForm().then(function (val) {
                    console.log(val);

                    switch (val) {
                      case "xbutton":
                        break;

                      case "Registration Complete":
                        _this11.onSubmit();

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
                  _this11.openReplacePassForm().then(function (val) {
                    console.log(val);

                    switch (val.message) {
                      case "xbutton":
                        break;

                      case "Replace Password Complete":
                        _this11.onSubmit();

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

                default:
                  _this11.loginErrorMessage = err.error.message;
              }

              _this11.isLoginFailed = true;
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
        return new (t || _LoginMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
      };

      _LoginMainComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: _LoginMainComponent,
        selectors: [["login-main"]],
        viewQuery: function LoginMainComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.mainHeader = _t.first);
          }
        },
        inputs: {
          primary: "primary",
          backgroundColor: "backgroundColor",
          background: "background",
          label: "label"
        },
        decls: 12,
        vars: 3,
        consts: [["mat-raised-button", "", 3, "click"], [3, "isLoggedIn", "mForm", "storyInputs", "sendLoginReq"]],
        template: function LoginMainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "html");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "storybook-background1");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LoginMainComponent_Template_button_click_5_listener() {
              return ctx.openReplacePassForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "ReplacePassForm");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LoginMainComponent_Template_button_click_7_listener() {
              return ctx.openRegisterForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "RegisterForm");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function LoginMainComponent_Template_button_click_9_listener() {
              return ctx.profile2();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "profile2");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "storybook-login-form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("sendLoginReq", function LoginMainComponent_Template_storybook_login_form_sendLoginReq_11_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isLoggedIn", false)("mForm", ctx.loginForm)("storyInputs", ctx.storyInputsInOrder);
          }
        },
        directives: [_stories_pages_background1_background1Component__WEBPACK_IMPORTED_MODULE_4__["default"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _stories_forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_5__["default"]],
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/_services/auth.service */
      88368);
      /* harmony import */


      var _stories_forms_registry_form_registry_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
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
          this.errorMessage = '';
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
            type: 'phone',
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
          this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data.username.toString(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data.password.toString(), _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(2)),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data.username.toString() + '@domain.com', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('123123131321', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.pattern(new RegExp("[0-9 ]{12}")))
          });
          this.empList.push("admin");
        }

        _createClass(RegisterForm2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this12 = this;

            if (this.isRegSuccess) {
              this.dialogRef.close('Registration Complete');
            } else {
              this.submitted = true;

              var _this$registerForm$ge = this.registerForm.getRawValue(),
                  username = _this$registerForm$ge.username,
                  password = _this$registerForm$ge.password,
                  email = _this$registerForm$ge.email,
                  phone = _this$registerForm$ge.phone;

              this.authService.registerForm(username, email, password, phone).subscribe(function (data) {
                console.log(data);
                _this12.isRegSuccess = true;
                _this12.isRegFailed = false;
                _this12.errorFieldSubmitted = {};
                _this12.apiResponse.error = false;
                _this12.apiResponse.message = 'Successful registration';
              }, function (error) {
                var errorResponse = JSON.parse(error.error);
                _this12.apiResponse.error = true;
                _this12.apiResponse.message = 'Registration error';
                _this12.errorMessage = error.error.message;
                _this12.isRegFailed = true;

                if (errorResponse.error && errorResponse.message === 'VALIDATION_FAILED') {
                  _this12.errorFieldSubmitted = errorResponse.data;
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
        return new (t || RegisterForm2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA));
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
        decls: 2,
        vars: 3,
        consts: [[3, "isRegSuccess", "storyInputs", "mForm", "sendRegReq", "clickXButton"], ["form", ""]],
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
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("isRegSuccess", ctx.isRegSuccess)("storyInputs", ctx.storyInputsInOrder)("mForm", ctx.registerForm);
          }
        },
        directives: [_stories_forms_registry_form_registry_form_component__WEBPACK_IMPORTED_MODULE_1__["default"]],
        styles: [".cdk-overlay-container[_ngcontent-%COMP%]   .mat-dialog-container[_ngcontent-%COMP%] {\r\n  width: 200%;\r\n}\r\n\r\n.fa[_ngcontent-%COMP%], .fab[_ngcontent-%COMP%], .fad[_ngcontent-%COMP%], .fal[_ngcontent-%COMP%], .far[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%] {\r\n  -moz-osx-font-smoothing:grayscale;\r\n  -webkit-font-smoothing:antialiased;\r\n  display:inline-block;\r\n  font-style:normal;\r\n  font-feature-settings:normal;\r\n  font-variant:normal;\r\n  text-rendering:auto;line-height:1\r\n}\r\n\r\n.fa-lg[_ngcontent-%COMP%] {\r\n  font-size:1.33333em;\r\n  line-height:.75em;\r\n  vertical-align:-.0667em\r\n}\r\n\r\n\r\n\r\n.fa-xs[_ngcontent-%COMP%] {font-size:.75em}\r\n\r\n.fa-sm[_ngcontent-%COMP%] {font-size:.875em}\r\n\r\n.fa-1x[_ngcontent-%COMP%] {font-size:1em}\r\n\r\n.fa-2x[_ngcontent-%COMP%] {font-size:2em}\r\n\r\n.fa-3x[_ngcontent-%COMP%] {font-size:3em}\r\n\r\n.fa-4x[_ngcontent-%COMP%] {font-size:4em}\r\n\r\n.fa-5x[_ngcontent-%COMP%] {font-size:5em}\r\n\r\n.fa-6x[_ngcontent-%COMP%] {font-size:6em}\r\n\r\n.fa-7x[_ngcontent-%COMP%] {font-size:7em}\r\n\r\n.fa-8x[_ngcontent-%COMP%] {font-size:8em}\r\n\r\n.fa-9x[_ngcontent-%COMP%] {font-size:9em}\r\n\r\n.fa-10x[_ngcontent-%COMP%] {font-size:10em}\r\n\r\n.fa-fw[_ngcontent-%COMP%] {text-align:center;width:1.25em}\r\n\r\n.fa-ul[_ngcontent-%COMP%] {list-style-type:none;margin-left:2.5em;padding-left:0}\r\n\r\n.fa-ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {position:relative}\r\n\r\n.fa-li[_ngcontent-%COMP%] {left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}\r\n\r\n.fa-border[_ngcontent-%COMP%] {border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}\r\n\r\n.fa-pull-left[_ngcontent-%COMP%] {float:left}\r\n\r\n.fa-pull-right[_ngcontent-%COMP%] {float:right}\r\n\r\n.fa.fa-pull-left[_ngcontent-%COMP%], .fab.fa-pull-left[_ngcontent-%COMP%], .fal.fa-pull-left[_ngcontent-%COMP%], .far.fa-pull-left[_ngcontent-%COMP%], .fas.fa-pull-left[_ngcontent-%COMP%] {\r\n  margin-right:.3em\r\n}\r\n\r\n.input-with-pre-icon[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {left:36px;right:auto;right:initial}\r\n\r\n.fa.fa-pull-right[_ngcontent-%COMP%], .fab.fa-pull-right[_ngcontent-%COMP%], .fal.fa-pull-right[_ngcontent-%COMP%], .far.fa-pull-right[_ngcontent-%COMP%], .fas.fa-pull-right[_ngcontent-%COMP%] {\r\n  margin-left:.3em\r\n}\r\n\r\n.fa-spin[_ngcontent-%COMP%] {\r\n  animation:fa-spin 2s linear infinite\r\n}\r\n\r\n.fa[_ngcontent-%COMP%], .far[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%] {\r\n  font-family: \"Font Awesome 5 Free\", serif\r\n}\r\n\r\n.fa[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%] {\r\n  font-weight:900\r\n}\r\n\r\n.v-btn__content[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  color: inherit;\r\n  display: flex;\r\n  flex: 1 0 auto;\r\n  justify-content: inherit;\r\n  line-height: normal;\r\n  position: relative;\r\n  transition: inherit;\r\n}\r\n\r\n.form-outline[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus    ~ .form-label[_ngcontent-%COMP%], .form-outline[_ngcontent-%COMP%]   .form-control.active[_ngcontent-%COMP%]    ~ .form-label[_ngcontent-%COMP%] {\r\n  transform: translateY(-1.5rem) translateY(0.1rem) scale(0.8);\r\n}\r\n\r\n\r\n\r\n.v-btn__content[_ngcontent-%COMP%] {\r\n  letter-spacing: normal;\r\n}\r\n\r\nbody#registerFormDialogContainer[_ngcontent-%COMP%] {\r\n  background: #0000ff00;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLWZvcm0yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxrQ0FBa0M7RUFDbEMsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQiw0QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLG1CQUFtQixDQUFDO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQjtBQUNGOztBQUNBLEdBQUc7O0FBQ0gsUUFBUSxlQUFlOztBQUV2QixRQUFRLGdCQUFnQjs7QUFFeEIsUUFBUSxhQUFhOztBQUVyQixRQUFRLGFBQWE7O0FBRXJCLFFBQVEsYUFBYTs7QUFFckIsUUFBUSxhQUFhOztBQUVyQixRQUFRLGFBQWE7O0FBRXJCLFFBQVEsYUFBYTs7QUFFckIsUUFBUSxhQUFhOztBQUVyQixRQUFRLGFBQWE7O0FBRXJCLFFBQVEsYUFBYTs7QUFFckIsU0FBUyxjQUFjOztBQUV2QixRQUFRLGlCQUFpQixDQUFDLFlBQVk7O0FBRXRDLFFBQVEsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsY0FBYzs7QUFFN0QsV0FBVyxpQkFBaUI7O0FBRTVCLFFBQVEsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxtQkFBbUI7O0FBRW5GLFlBQVksdUJBQXVCLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCOztBQUUvRSxlQUFlLFVBQVU7O0FBRXpCLGdCQUFnQixXQUFXOztBQUUzQjtFQUNFO0FBQ0Y7O0FBRUEsNEJBQTRCLFNBQVMsQ0FBQyxVQUFZLENBQVosYUFBYTs7QUFHbkQ7RUFDRTtBQUNGOztBQUVBO0VBRUU7QUFDRjs7QUFJQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUdBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDREQUE0RDtBQUM5RDs7QUFHQTs7Ozs7OztDQU9DOztBQUNEO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InJlZ2lzdGVyLWZvcm0yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi5jZGstb3ZlcmxheS1jb250YWluZXIgLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcclxuICB3aWR0aDogMjAwJTtcclxufVxyXG5cclxuLmZhLC5mYWIsLmZhZCwuZmFsLC5mYXIsLmZhcyB7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zdHlsZTpub3JtYWw7XHJcbiAgZm9udC12YXJpYW50Om5vcm1hbDtcclxuICB0ZXh0LXJlbmRlcmluZzphdXRvO2xpbmUtaGVpZ2h0OjFcclxufVxyXG5cclxuLmZhLWxnIHtcclxuICBmb250LXNpemU6MS4zMzMzM2VtO1xyXG4gIGxpbmUtaGVpZ2h0Oi43NWVtO1xyXG4gIHZlcnRpY2FsLWFsaWduOi0uMDY2N2VtXHJcbn1cclxuLyoqL1xyXG4uZmEteHMge2ZvbnQtc2l6ZTouNzVlbX1cclxuXHJcbi5mYS1zbSB7Zm9udC1zaXplOi44NzVlbX1cclxuXHJcbi5mYS0xeCB7Zm9udC1zaXplOjFlbX1cclxuXHJcbi5mYS0yeCB7Zm9udC1zaXplOjJlbX1cclxuXHJcbi5mYS0zeCB7Zm9udC1zaXplOjNlbX1cclxuXHJcbi5mYS00eCB7Zm9udC1zaXplOjRlbX1cclxuXHJcbi5mYS01eCB7Zm9udC1zaXplOjVlbX1cclxuXHJcbi5mYS02eCB7Zm9udC1zaXplOjZlbX1cclxuXHJcbi5mYS03eCB7Zm9udC1zaXplOjdlbX1cclxuXHJcbi5mYS04eCB7Zm9udC1zaXplOjhlbX1cclxuXHJcbi5mYS05eCB7Zm9udC1zaXplOjllbX1cclxuXHJcbi5mYS0xMHgge2ZvbnQtc2l6ZToxMGVtfVxyXG5cclxuLmZhLWZ3IHt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxLjI1ZW19XHJcblxyXG4uZmEtdWwge2xpc3Qtc3R5bGUtdHlwZTpub25lO21hcmdpbi1sZWZ0OjIuNWVtO3BhZGRpbmctbGVmdDowfVxyXG5cclxuLmZhLXVsPmxpIHtwb3NpdGlvbjpyZWxhdGl2ZX1cclxuXHJcbi5mYS1saSB7bGVmdDotMmVtO3Bvc2l0aW9uOmFic29sdXRlO3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjJlbTtsaW5lLWhlaWdodDppbmhlcml0fVxyXG5cclxuLmZhLWJvcmRlciB7Ym9yZGVyOi4wOGVtIHNvbGlkICNlZWU7Ym9yZGVyLXJhZGl1czouMWVtO3BhZGRpbmc6LjJlbSAuMjVlbSAuMTVlbX1cclxuXHJcbi5mYS1wdWxsLWxlZnQge2Zsb2F0OmxlZnR9XHJcblxyXG4uZmEtcHVsbC1yaWdodCB7ZmxvYXQ6cmlnaHR9XHJcblxyXG4uZmEuZmEtcHVsbC1sZWZ0LC5mYWIuZmEtcHVsbC1sZWZ0LC5mYWwuZmEtcHVsbC1sZWZ0LC5mYXIuZmEtcHVsbC1sZWZ0LC5mYXMuZmEtcHVsbC1sZWZ0IHtcclxuICBtYXJnaW4tcmlnaHQ6LjNlbVxyXG59XHJcblxyXG4uaW5wdXQtd2l0aC1wcmUtaWNvbiBsYWJlbCB7bGVmdDozNnB4O3JpZ2h0OmluaXRpYWx9XHJcblxyXG5cclxuLmZhLmZhLXB1bGwtcmlnaHQsLmZhYi5mYS1wdWxsLXJpZ2h0LC5mYWwuZmEtcHVsbC1yaWdodCwuZmFyLmZhLXB1bGwtcmlnaHQsLmZhcy5mYS1wdWxsLXJpZ2h0IHtcclxuICBtYXJnaW4tbGVmdDouM2VtXHJcbn1cclxuXHJcbi5mYS1zcGluIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjpmYS1zcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb246ZmEtc3BpbiAycyBsaW5lYXIgaW5maW5pdGVcclxufVxyXG5cclxuXHJcblxyXG4uZmEsLmZhciwuZmFzIHtcclxuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCIsIHNlcmlmXHJcbn1cclxuXHJcbi5mYSwuZmFzIHtcclxuICBmb250LXdlaWdodDo5MDBcclxufVxyXG5cclxuXHJcbi52LWJ0bl9fY29udGVudCB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDEgMCBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiBpbmhlcml0O1xyXG59XHJcblxyXG4uZm9ybS1vdXRsaW5lIC5mb3JtLWNvbnRyb2w6Zm9jdXMgfiAuZm9ybS1sYWJlbCwgLmZvcm0tb3V0bGluZSAuZm9ybS1jb250cm9sLmFjdGl2ZSB+IC5mb3JtLWxhYmVsIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNXJlbSkgdHJhbnNsYXRlWSgwLjFyZW0pIHNjYWxlKDAuOCk7XHJcbn1cclxuXHJcblxyXG4vKlxyXG4uZm9ybS1vdXRsaW5lIC5mb3JtLWNvbnRyb2wgfiAuZm9ybS1ub3RjaCBkaXYge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gIGJvcmRlci1jb2xvcjogIzM5YzBlZDtcclxufVxyXG5cclxuKi9cclxuLnYtYnRuX19jb250ZW50IHtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcblxyXG5ib2R5I3JlZ2lzdGVyRm9ybURpYWxvZ0NvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZDogIzAwMDBmZjAwO1xyXG59XHJcblxyXG5cclxuIl19 */"]
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
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      22238);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/_services/auth.service */
      88368);
      /* harmony import */


      var _stories_forms_replace_pass_form_replace_pass_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../stories/forms/replace-pass-form/replace-pass-form.component */
      29085);

      var _ReplacePassForm2Component = /*#__PURE__*/function () {
        function _ReplacePassForm2Component(authService, renderer, dialogRef, data) {
          _classCallCheck(this, _ReplacePassForm2Component);

          this.authService = authService;
          this.renderer = renderer;
          this.dialogRef = dialogRef;
          this.data = data;
          this.status = {
            isRepSuccess: false,
            isSignUpFailed: false,
            submitted: false,
            errorMessage: '',
            apiResponse: {
              message: '',
              error: false
            },
            errorFieldSubmitted: {},
            closeResult: ''
          };
          this.isRepSuccess = false;
          this.isSignUpFailed = false;
          this.submitted = false;
          this.errorMessage = '';
          this.empList = [];
          this.apiResponse = {
            message: '',
            error: false
          };
          this.errorFieldSubmitted = {};
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
          this.replacePassForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data.username, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required),
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(data.password, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(1)),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3)),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3))
          });
        }

        _createClass(_ReplacePassForm2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this13 = this;

            if (this.isRepSuccess) {
              this.dialogRef.close({
                message: 'Replace Password Complete',
                data: this.data
              });
            } else {
              this.status.submitted = true;
              var _this$replacePassForm = this.replacePassForm.value,
                  userName = _this$replacePassForm.userName,
                  oldPassword = _this$replacePassForm.oldPassword,
                  password = _this$replacePassForm.password,
                  confirmPassword = _this$replacePassForm.confirmPassword;
              this.authService.replacePassForm(userName, oldPassword, password, confirmPassword).subscribe(function (data) {
                console.log(data);
                _this13.isRepSuccess = true;
                _this13.isSignUpFailed = false;
                _this13.status.errorFieldSubmitted = {};
                _this13.apiResponse.error = false;
                _this13.apiResponse.message = 'Successful registration';
                _this13.data.password = password;
              }, function (error) {
                var errorResponse = JSON.parse(error.error);
                _this13.apiResponse.error = true;
                _this13.apiResponse.message = 'Replace password error';
                _this13.errorMessage = error.error.message;
                _this13.isSignUpFailed = true;

                if (errorResponse.error && errorResponse.message === 'VALIDATION_FAILED') {
                  _this13.errorFieldSubmitted = errorResponse.data;
                }
              }, function () {
                console.log('Replace Password closed');
              });
            }
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
        return new (t || _ReplacePassForm2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MAT_DIALOG_DATA));
      };

      _ReplacePassForm2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ReplacePassForm2Component,
        selectors: [["app-modal"]],
        decls: 2,
        vars: 4,
        consts: [[3, "status", "isRepSuccess", "storyInputs", "mForm", "sendRegReq", "clickXButton"], ["form", ""]],
        template: function ReplacePassForm2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "storybook-replace-pass-form", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("sendRegReq", function ReplacePassForm2Component_Template_storybook_replace_pass_form_sendRegReq_0_listener() {
              return ctx.onSubmit();
            })("clickXButton", function ReplacePassForm2Component_Template_storybook_replace_pass_form_clickXButton_0_listener() {
              return ctx.dialogRef.close({
                message: "xbutton"
              });
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("status", ctx.status)("isRepSuccess", ctx.isRepSuccess)("storyInputs", ctx.storyInputsInOrder)("mForm", ctx.replacePassForm);
          }
        },
        directives: [_stories_forms_replace_pass_form_replace_pass_form_component__WEBPACK_IMPORTED_MODULE_1__["default"]],
        styles: [".fa[_ngcontent-%COMP%], .fab[_ngcontent-%COMP%], .fad[_ngcontent-%COMP%], .fal[_ngcontent-%COMP%], .far[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%] {\r\n  -moz-osx-font-smoothing:grayscale;\r\n  -webkit-font-smoothing:antialiased;\r\n  display:inline-block;\r\n  font-style:normal;\r\n  font-feature-settings:normal;\r\n  font-variant:normal;\r\n  text-rendering:auto;line-height:1\r\n}\r\n\r\n.fa-lg[_ngcontent-%COMP%] {\r\n  font-size:1.33333em;\r\n  line-height:.75em;\r\n  vertical-align:-.0667em\r\n}\r\n\r\n\r\n\r\n.fa-xs[_ngcontent-%COMP%] {font-size:.75em}\r\n\r\n.fa-sm[_ngcontent-%COMP%] {font-size:.875em}\r\n\r\n.fa-1x[_ngcontent-%COMP%] {font-size:1em}\r\n\r\n.fa-2x[_ngcontent-%COMP%] {font-size:2em}\r\n\r\n.fa-3x[_ngcontent-%COMP%] {font-size:3em}\r\n\r\n.fa-4x[_ngcontent-%COMP%] {font-size:4em}\r\n\r\n.fa-5x[_ngcontent-%COMP%] {font-size:5em}\r\n\r\n.fa-6x[_ngcontent-%COMP%] {font-size:6em}\r\n\r\n.fa-7x[_ngcontent-%COMP%] {font-size:7em}\r\n\r\n.fa-8x[_ngcontent-%COMP%] {font-size:8em}\r\n\r\n.fa-9x[_ngcontent-%COMP%] {font-size:9em}\r\n\r\n.fa-10x[_ngcontent-%COMP%] {font-size:10em}\r\n\r\n.fa-fw[_ngcontent-%COMP%] {text-align:center;width:1.25em}\r\n\r\n.fa-ul[_ngcontent-%COMP%] {list-style-type:none;margin-left:2.5em;padding-left:0}\r\n\r\n.fa-ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {position:relative}\r\n\r\n.fa-li[_ngcontent-%COMP%] {left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}\r\n\r\n.fa-border[_ngcontent-%COMP%] {border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}\r\n\r\n.fa-pull-left[_ngcontent-%COMP%] {float:left}\r\n\r\n.fa-pull-right[_ngcontent-%COMP%] {float:right}\r\n\r\n.fa.fa-pull-left[_ngcontent-%COMP%], .fab.fa-pull-left[_ngcontent-%COMP%], .fal.fa-pull-left[_ngcontent-%COMP%], .far.fa-pull-left[_ngcontent-%COMP%], .fas.fa-pull-left[_ngcontent-%COMP%] {\r\n  margin-right:.3em\r\n}\r\n\r\n.input-with-pre-icon[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {left:36px;right:auto;right:initial}\r\n\r\n.fa.fa-pull-right[_ngcontent-%COMP%], .fab.fa-pull-right[_ngcontent-%COMP%], .fal.fa-pull-right[_ngcontent-%COMP%], .far.fa-pull-right[_ngcontent-%COMP%], .fas.fa-pull-right[_ngcontent-%COMP%] {\r\n  margin-left:.3em\r\n}\r\n\r\n.fa-spin[_ngcontent-%COMP%] {\r\n  animation:fa-spin 2s linear infinite\r\n}\r\n\r\n.fa[_ngcontent-%COMP%], .far[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%] {\r\n  font-family: \"Font Awesome 5 Free\", serif\r\n}\r\n\r\n.fa[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%] {\r\n  font-weight:900\r\n}\r\n\r\n.v-btn__content[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  color: inherit;\r\n  display: flex;\r\n  flex: 1 0 auto;\r\n  justify-content: inherit;\r\n  line-height: normal;\r\n  position: relative;\r\n  transition: inherit;\r\n}\r\n\r\n.v-btn__content[_ngcontent-%COMP%] {\r\n  letter-spacing: normal;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGxhY2UtcGFzcy1mb3JtMi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsa0NBQWtDO0VBQ2xDLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsNEJBQW1CO0VBQW5CLG1CQUFtQjtFQUNuQixtQkFBbUIsQ0FBQztBQUN0Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakI7QUFDRjs7QUFDQSxHQUFHOztBQUNILFFBQVEsZUFBZTs7QUFFdkIsUUFBUSxnQkFBZ0I7O0FBRXhCLFFBQVEsYUFBYTs7QUFFckIsUUFBUSxhQUFhOztBQUVyQixRQUFRLGFBQWE7O0FBRXJCLFFBQVEsYUFBYTs7QUFFckIsUUFBUSxhQUFhOztBQUVyQixRQUFRLGFBQWE7O0FBRXJCLFFBQVEsYUFBYTs7QUFFckIsUUFBUSxhQUFhOztBQUVyQixRQUFRLGFBQWE7O0FBRXJCLFNBQVMsY0FBYzs7QUFFdkIsUUFBUSxpQkFBaUIsQ0FBQyxZQUFZOztBQUV0QyxRQUFRLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLGNBQWM7O0FBRTdELFdBQVcsaUJBQWlCOztBQUU1QixRQUFRLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsbUJBQW1COztBQUVuRixZQUFZLHVCQUF1QixDQUFDLGtCQUFrQixDQUFDLHdCQUF3Qjs7QUFFL0UsZUFBZSxVQUFVOztBQUV6QixnQkFBZ0IsV0FBVzs7QUFFM0I7RUFDRTtBQUNGOztBQUVBLDRCQUE0QixTQUFTLENBQUMsVUFBWSxDQUFaLGFBQWE7O0FBR25EO0VBQ0U7QUFDRjs7QUFFQTtFQUVFO0FBQ0Y7O0FBSUE7RUFDRTtBQUNGOztBQUVBO0VBQ0U7QUFDRjs7QUFHQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsYUFBYTtFQUNiLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBR0E7RUFDRSxzQkFBc0I7QUFDeEI7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBeVhDIiwiZmlsZSI6InJlcGxhY2UtcGFzcy1mb3JtMi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uZmEsLmZhYiwuZmFkLC5mYWwsLmZhciwuZmFzIHtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICBmb250LXN0eWxlOm5vcm1hbDtcclxuICBmb250LXZhcmlhbnQ6bm9ybWFsO1xyXG4gIHRleHQtcmVuZGVyaW5nOmF1dG87bGluZS1oZWlnaHQ6MVxyXG59XHJcblxyXG4uZmEtbGcge1xyXG4gIGZvbnQtc2l6ZToxLjMzMzMzZW07XHJcbiAgbGluZS1oZWlnaHQ6Ljc1ZW07XHJcbiAgdmVydGljYWwtYWxpZ246LS4wNjY3ZW1cclxufVxyXG4vKiovXHJcbi5mYS14cyB7Zm9udC1zaXplOi43NWVtfVxyXG5cclxuLmZhLXNtIHtmb250LXNpemU6Ljg3NWVtfVxyXG5cclxuLmZhLTF4IHtmb250LXNpemU6MWVtfVxyXG5cclxuLmZhLTJ4IHtmb250LXNpemU6MmVtfVxyXG5cclxuLmZhLTN4IHtmb250LXNpemU6M2VtfVxyXG5cclxuLmZhLTR4IHtmb250LXNpemU6NGVtfVxyXG5cclxuLmZhLTV4IHtmb250LXNpemU6NWVtfVxyXG5cclxuLmZhLTZ4IHtmb250LXNpemU6NmVtfVxyXG5cclxuLmZhLTd4IHtmb250LXNpemU6N2VtfVxyXG5cclxuLmZhLTh4IHtmb250LXNpemU6OGVtfVxyXG5cclxuLmZhLTl4IHtmb250LXNpemU6OWVtfVxyXG5cclxuLmZhLTEweCB7Zm9udC1zaXplOjEwZW19XHJcblxyXG4uZmEtZncge3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjEuMjVlbX1cclxuXHJcbi5mYS11bCB7bGlzdC1zdHlsZS10eXBlOm5vbmU7bWFyZ2luLWxlZnQ6Mi41ZW07cGFkZGluZy1sZWZ0OjB9XHJcblxyXG4uZmEtdWw+bGkge3Bvc2l0aW9uOnJlbGF0aXZlfVxyXG5cclxuLmZhLWxpIHtsZWZ0Oi0yZW07cG9zaXRpb246YWJzb2x1dGU7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MmVtO2xpbmUtaGVpZ2h0OmluaGVyaXR9XHJcblxyXG4uZmEtYm9yZGVyIHtib3JkZXI6LjA4ZW0gc29saWQgI2VlZTtib3JkZXItcmFkaXVzOi4xZW07cGFkZGluZzouMmVtIC4yNWVtIC4xNWVtfVxyXG5cclxuLmZhLXB1bGwtbGVmdCB7ZmxvYXQ6bGVmdH1cclxuXHJcbi5mYS1wdWxsLXJpZ2h0IHtmbG9hdDpyaWdodH1cclxuXHJcbi5mYS5mYS1wdWxsLWxlZnQsLmZhYi5mYS1wdWxsLWxlZnQsLmZhbC5mYS1wdWxsLWxlZnQsLmZhci5mYS1wdWxsLWxlZnQsLmZhcy5mYS1wdWxsLWxlZnQge1xyXG4gIG1hcmdpbi1yaWdodDouM2VtXHJcbn1cclxuXHJcbi5pbnB1dC13aXRoLXByZS1pY29uIGxhYmVsIHtsZWZ0OjM2cHg7cmlnaHQ6aW5pdGlhbH1cclxuXHJcblxyXG4uZmEuZmEtcHVsbC1yaWdodCwuZmFiLmZhLXB1bGwtcmlnaHQsLmZhbC5mYS1wdWxsLXJpZ2h0LC5mYXIuZmEtcHVsbC1yaWdodCwuZmFzLmZhLXB1bGwtcmlnaHQge1xyXG4gIG1hcmdpbi1sZWZ0Oi4zZW1cclxufVxyXG5cclxuLmZhLXNwaW4ge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOmZhLXNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjpmYS1zcGluIDJzIGxpbmVhciBpbmZpbml0ZVxyXG59XHJcblxyXG5cclxuXHJcbi5mYSwuZmFyLC5mYXMge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIiwgc2VyaWZcclxufVxyXG5cclxuLmZhLC5mYXMge1xyXG4gIGZvbnQtd2VpZ2h0OjkwMFxyXG59XHJcblxyXG5cclxuLnYtYnRuX19jb250ZW50IHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMSAwIGF1dG87XHJcbiAganVzdGlmeS1jb250ZW50OiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IGluaGVyaXQ7XHJcbn1cclxuXHJcblxyXG4udi1idG5fX2NvbnRlbnQge1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbn1cclxuXHJcblxyXG4vKlxyXG5AdXNlICdtZGItYW5ndWxhci11aS1raXQvYXNzZXRzL3Njc3MvZnJlZS9jYXJkcy9fZm9ybS1jb250cm9sJztcclxuXHJcbm1kYi1mb3JtLWNvbnRyb2wge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG5cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy10b3A6IDRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMy4yOHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGxpbmVhcjtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XHJcbiAgICBib3JkZXItY29sb3I6ICMxMjY2ZjE7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggIzEyNjZmMTtcclxuICB9XHJcbiAgJi5mb3JtLWNvbnRyb2wtc20ge1xyXG4gICAgZm9udC1zaXplOiAwLjc3NXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgfVxyXG4gICYuZm9ybS1jb250cm9sLWxnIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjE1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5zZWxlY3Qge1xyXG4gIH4gLmZvcm0tbGFiZWwge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogJGZvcm0tbGFiZWwtbGVmdDtcclxuICAgIHBhZGRpbmctdG9wOiAkZm9ybS1sYWJlbC1wYWRkaW5nLXRvcDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG4gICAgdHJhbnNpdGlvbjogJGZvcm0tbGFiZWwtdHJhbnNpdGlvbjtcclxuICAgIGNvbG9yOiAkZm9ybS1sYWJlbC1jb2xvcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG4gIH4gLmZvcm0tbm90Y2gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGRpdiB7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICBib3JkZXI6ICRib3JkZXItd2lkdGggc29saWQ7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogJGZvcm0tbm90Y2gtZGl2LWJvcmRlci1jb2xvcjtcclxuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1ub3RjaC1sZWFkaW5nIHtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAkZm9ybS1ub3RjaC1sZWFkaW5nLXdpZHRoO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6ICRmb3JtLW5vdGNoLWxlYWRpbmctYm9yZGVyLXJhZGl1cyAwIDAgJGZvcm0tbm90Y2gtbGVhZGluZy1ib3JkZXItcmFkaXVzO1xyXG4gICAgfVxyXG4gICAgLmZvcm0tbm90Y2gtbWlkZGxlIHtcclxuICAgICAgZmxleDogMCAwIGF1dG87XHJcbiAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtICN7JGZvcm0tbm90Y2gtbWlkZGxlLW1heC13aWR0aH0pO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuZm9ybS1ub3RjaC10cmFpbGluZyB7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMCAkZm9ybS1ub3RjaC10cmFpbGluZy1ib3JkZXItcmFkaXVzICRmb3JtLW5vdGNoLXRyYWlsaW5nLWJvcmRlci1yYWRpdXMgMDtcclxuICAgIH1cclxuICB9XHJcbiAgJi5mb3JtLWNvbnRyb2w6bm90KC5wbGFjZWhvbGRlci1hY3RpdmUpOjpwbGFjZWhvbGRlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gIH1cclxuICAmIC5mb3JtLWNvbnRyb2w6Zm9jdXMsXHJcbiAgJi5hY3RpdmUge1xyXG4gICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICAmIC5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAvLyAmOmZvY3VzIH4gLmZvcm0tbGFiZWwsXHJcbiAgJi5hY3RpdmUgfiAuZm9ybS1sYWJlbCB7XHJcbiAgICB0cmFuc2Zvcm06ICRpbnB1dC1mb2N1cy1hY3RpdmUtbGFiZWwtdHJhbnNmb3JtO1xyXG4gIH1cclxuICAmIC5mb3JtLWNvbnRyb2w6Zm9jdXMgfiAuZm9ybS1sYWJlbCB7XHJcbiAgICBjb2xvcjogJGlucHV0LWZvY3VzLWxhYmVsLWNvbG9yO1xyXG4gIH1cclxuICAmIC5mb3JtLWNvbnRyb2w6Zm9jdXMgfiAuZm9ybS1ub3RjaCAuZm9ybS1ub3RjaC1taWRkbGUsXHJcbiAgJiAuZm9ybS1jb250cm9sLmFjdGl2ZSB+IC5mb3JtLW5vdGNoIC5mb3JtLW5vdGNoLW1pZGRsZSB7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAkaW5wdXQtdHJhbnNpdGlvbjtcclxuICB9XHJcbiAgJjpmb2N1cyB+IC5mb3JtLW5vdGNoIC5mb3JtLW5vdGNoLW1pZGRsZSB7XHJcbiAgICBib3JkZXItYm90dG9tOiAkaW5wdXQtZm9jdXMtYm9yZGVyLXdpZHRoIHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yO1xyXG4gIH1cclxuICAmOmZvY3VzIH4gLmZvcm0tbm90Y2ggLmZvcm0tbm90Y2gtbGVhZGluZyxcclxuICAmLmFjdGl2ZSB+IC5mb3JtLW5vdGNoIC5mb3JtLW5vdGNoLWxlYWRpbmcge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogJGlucHV0LXRyYW5zaXRpb247XHJcbiAgfVxyXG4gICY6Zm9jdXMgfiAuZm9ybS1ub3RjaCAuZm9ybS1ub3RjaC1sZWFkaW5nIHtcclxuICAgIGJvcmRlci10b3A6ICRpbnB1dC1mb2N1cy1ib3JkZXItd2lkdGggc29saWQgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1ib3R0b206ICRpbnB1dC1mb2N1cy1ib3JkZXItd2lkdGggc29saWQgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjtcclxuICAgIGJvcmRlci1sZWZ0OiAkaW5wdXQtZm9jdXMtYm9yZGVyLXdpZHRoIHNvbGlkICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I7XHJcbiAgfVxyXG4gICY6Zm9jdXMgfiAuZm9ybS1ub3RjaCAuZm9ybS1ub3RjaC10cmFpbGluZyxcclxuICAmLmFjdGl2ZSB+IC5mb3JtLW5vdGNoIC5mb3JtLW5vdGNoLXRyYWlsaW5nIHtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogJGlucHV0LXRyYW5zaXRpb247XHJcbiAgfVxyXG4gICY6Zm9jdXMgfiAuZm9ybS1ub3RjaCAuZm9ybS1ub3RjaC10cmFpbGluZyB7XHJcbiAgICBib3JkZXItdG9wOiAkaW5wdXQtZm9jdXMtYm9yZGVyLXdpZHRoIHNvbGlkO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogJGlucHV0LWZvY3VzLWJvcmRlci13aWR0aCBzb2xpZDtcclxuICAgIGJvcmRlci1yaWdodDogJGlucHV0LWZvY3VzLWJvcmRlci13aWR0aCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjtcclxuICB9XHJcbiAgJjpkaXNhYmxlZCxcclxuICAmLmRpc2FibGVkLFxyXG4gICZbcmVhZG9ubHldIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gIH1cclxuICAmLmZvcm0tY29udHJvbC1sZyB7XHJcbiAgICBmb250LXNpemU6ICRpbnB1dC1mb250LXNpemUtbGc7XHJcbiAgICBsaW5lLWhlaWdodDogJGlucHV0LWxpbmUtaGVpZ2h0LWxnO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAkaW5wdXQtcGFkZGluZy1sZWZ0LWxnO1xyXG4gICAgcGFkZGluZy1yaWdodDogJGlucHV0LXBhZGRpbmctcmlnaHQtbGc7XHJcbiAgICB+IC5mb3JtLWxhYmVsIHtcclxuICAgICAgcGFkZGluZy10b3A6ICRmb3JtLWxhYmVsLXBhZGRpbmctdG9wLWxnO1xyXG4gICAgfVxyXG4gICAgJjpmb2N1cyB+IC5mb3JtLWxhYmVsLFxyXG4gICAgJi5hY3RpdmUgfiAuZm9ybS1sYWJlbCB7XHJcbiAgICAgIHRyYW5zZm9ybTogJGlucHV0LWZvY3VzLWFjdGl2ZS1sYWJlbC10cmFuc2Zvcm0tbGc7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYuZm9ybS1jb250cm9sLXNtIHtcclxuICAgIHBhZGRpbmctbGVmdDogJGlucHV0LXBhZGRpbmctbGVmdC1zbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6ICRpbnB1dC1wYWRkaW5nLXJpZ2h0LXNtO1xyXG4gICAgcGFkZGluZy10b3A6ICRpbnB1dC1wYWRkaW5nLXRvcC1zbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAkaW5wdXQtcGFkZGluZy1ib3R0b20tc207XHJcbiAgICBmb250LXNpemU6ICRpbnB1dC1mb250LXNpemUtc207XHJcbiAgICBsaW5lLWhlaWdodDogJGlucHV0LWxpbmUtaGVpZ2h0LXNtO1xyXG4gICAgfiAuZm9ybS1sYWJlbCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAkZm9ybS1sYWJlbC1wYWRkaW5nLXRvcC1zbTtcclxuICAgICAgZm9udC1zaXplOiAkZm9ybS1sYWJlbC1mb250LXNpemUtc207XHJcbiAgICB9XHJcbiAgICAmOmZvY3VzIH4gLmZvcm0tbGFiZWwsXHJcbiAgICAmLmFjdGl2ZSB+IC5mb3JtLWxhYmVsIHtcclxuICAgICAgdHJhbnNmb3JtOiAkaW5wdXQtZm9jdXMtYWN0aXZlLWxhYmVsLXRyYW5zZm9ybS1zbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiRmb3JtLWxhYmVsLWxlZnQ6IDEuNzVyZW07XHJcblxyXG5cclxuLmZvcm0tb3V0bGluZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAuZm9ybS1oZWxwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDAuODc1ZW07XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICAgIC5mb3JtLWNvdW50ZXIge1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50cmFpbGluZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIGxlZnQ6IGluaXRpYWw7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmZvcm0taWNvbi10cmFpbGluZyB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZm9ybS1jb250cm9sIHtcclxuICAgIG1pbi1oZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDogJGlucHV0LXBhZGRpbmctdG9wO1xyXG4gICAgcGFkZGluZy1ib3R0b206ICRpbnB1dC1wYWRkaW5nLWJvdHRvbTtcclxuICAgIHBhZGRpbmctbGVmdDogJGlucHV0LXBhZGRpbmctbGVmdDtcclxuICAgIHBhZGRpbmctcmlnaHQ6ICRpbnB1dC1wYWRkaW5nLXJpZ2h0O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAkaW5wdXQtdHJhbnNpdGlvbjtcclxuICAgIH4gLmZvcm0tbGFiZWwge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbWF4LXdpZHRoOiA5MCU7XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICBsZWZ0OiAkZm9ybS1sYWJlbC1sZWZ0O1xyXG4gICAgICBwYWRkaW5nLXRvcDogJGZvcm0tbGFiZWwtcGFkZGluZy10b3A7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDA7XHJcbiAgICAgIHRyYW5zaXRpb246ICRmb3JtLWxhYmVsLXRyYW5zaXRpb247XHJcbiAgICAgIGNvbG9yOiAkZm9ybS1sYWJlbC1jb2xvcjtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgIH4gLmZvcm0tbm90Y2gge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgZGl2IHtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICBib3JkZXI6ICRib3JkZXItd2lkdGggc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkZm9ybS1ub3RjaC1kaXYtYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgIH1cclxuICAgICAgLmZvcm0tbm90Y2gtbGVhZGluZyB7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAkZm9ybS1ub3RjaC1sZWFkaW5nLXdpZHRoO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAkZm9ybS1ub3RjaC1sZWFkaW5nLWJvcmRlci1yYWRpdXMgMCAwICRmb3JtLW5vdGNoLWxlYWRpbmctYm9yZGVyLXJhZGl1cztcclxuICAgICAgfVxyXG4gICAgICAuZm9ybS1ub3RjaC1taWRkbGUge1xyXG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gI3skZm9ybS1ub3RjaC1taWRkbGUtbWF4LXdpZHRofSk7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgfVxyXG4gICAgICAuZm9ybS1ub3RjaC10cmFpbGluZyB7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwICRmb3JtLW5vdGNoLXRyYWlsaW5nLWJvcmRlci1yYWRpdXMgJGZvcm0tbm90Y2gtdHJhaWxpbmctYm9yZGVyLXJhZGl1cyAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmOm5vdCgucGxhY2Vob2xkZXItYWN0aXZlKTo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgJjpmb2N1cyxcclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAmOmZvY3VzIH4gLmZvcm0tbGFiZWwsXHJcbiAgICAmLmFjdGl2ZSB+IC5mb3JtLWxhYmVsIHtcclxuICAgICAgdHJhbnNmb3JtOiAkaW5wdXQtZm9jdXMtYWN0aXZlLWxhYmVsLXRyYW5zZm9ybTtcclxuICAgIH1cclxuICAgICY6Zm9jdXMgfiAuZm9ybS1sYWJlbCB7XHJcbiAgICAgIGNvbG9yOiAkaW5wdXQtZm9jdXMtbGFiZWwtY29sb3I7XHJcbiAgICB9XHJcbiAgICAmOmZvY3VzIH4gLmZvcm0tbm90Y2ggLmZvcm0tbm90Y2gtbWlkZGxlLFxyXG4gICAgJi5hY3RpdmUgfiAuZm9ybS1ub3RjaCAuZm9ybS1ub3RjaC1taWRkbGUge1xyXG4gICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgICB0cmFuc2l0aW9uOiAkaW5wdXQtdHJhbnNpdGlvbjtcclxuICAgIH1cclxuICAgICY6Zm9jdXMgfiAuZm9ybS1ub3RjaCAuZm9ybS1ub3RjaC1taWRkbGUge1xyXG4gICAgICBib3JkZXItYm90dG9tOiAkaW5wdXQtZm9jdXMtYm9yZGVyLXdpZHRoIHNvbGlkO1xyXG4gICAgICBib3JkZXItY29sb3I6ICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I7XHJcbiAgICB9XHJcbiAgICAmOmZvY3VzIH4gLmZvcm0tbm90Y2ggLmZvcm0tbm90Y2gtbGVhZGluZyxcclxuICAgICYuYWN0aXZlIH4gLmZvcm0tbm90Y2ggLmZvcm0tbm90Y2gtbGVhZGluZyB7XHJcbiAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgdHJhbnNpdGlvbjogJGlucHV0LXRyYW5zaXRpb247XHJcbiAgICB9XHJcbiAgICAmOmZvY3VzIH4gLmZvcm0tbm90Y2ggLmZvcm0tbm90Y2gtbGVhZGluZyB7XHJcbiAgICAgIGJvcmRlci10b3A6ICRpbnB1dC1mb2N1cy1ib3JkZXItd2lkdGggc29saWQgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogJGlucHV0LWZvY3VzLWJvcmRlci13aWR0aCBzb2xpZCAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yO1xyXG4gICAgICBib3JkZXItbGVmdDogJGlucHV0LWZvY3VzLWJvcmRlci13aWR0aCBzb2xpZCAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yO1xyXG4gICAgfVxyXG4gICAgJjpmb2N1cyB+IC5mb3JtLW5vdGNoIC5mb3JtLW5vdGNoLXRyYWlsaW5nLFxyXG4gICAgJi5hY3RpdmUgfiAuZm9ybS1ub3RjaCAuZm9ybS1ub3RjaC10cmFpbGluZyB7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgICB0cmFuc2l0aW9uOiAkaW5wdXQtdHJhbnNpdGlvbjtcclxuICAgIH1cclxuICAgICY6Zm9jdXMgfiAuZm9ybS1ub3RjaCAuZm9ybS1ub3RjaC10cmFpbGluZyB7XHJcbiAgICAgIGJvcmRlci10b3A6ICRpbnB1dC1mb2N1cy1ib3JkZXItd2lkdGggc29saWQgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogJGlucHV0LWZvY3VzLWJvcmRlci13aWR0aCBzb2xpZCAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yO1xyXG4gICAgICBib3JkZXItcmlnaHQ6ICRpbnB1dC1mb2N1cy1ib3JkZXItd2lkdGggc29saWQgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjtcclxuICAgIH1cclxuICAgIDpkaXNhYmxlZCxcclxuICAgICYuZGlzYWJsZWQsXHJcbiAgICAmW3JlYWRvbmx5XSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRpbnB1dC1kaXNhYmxlZC1iYWNrZ3JvdW5kLWNvbG9yO1xyXG4gICAgfVxyXG4gICAgJi5mb3JtLWNvbnRyb2wtbGcge1xyXG4gICAgICBmb250LXNpemU6ICRpbnB1dC1mb250LXNpemUtbGc7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAkaW5wdXQtbGluZS1oZWlnaHQtbGc7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogJGlucHV0LXBhZGRpbmctbGVmdC1sZztcclxuICAgICAgcGFkZGluZy1yaWdodDogJGlucHV0LXBhZGRpbmctcmlnaHQtbGc7XHJcbiAgICAgIH4gLmZvcm0tbGFiZWwge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAkZm9ybS1sYWJlbC1wYWRkaW5nLXRvcC1sZztcclxuICAgICAgfVxyXG4gICAgICAmOmZvY3VzIH4gLmZvcm0tbGFiZWwsXHJcbiAgICAgICYuYWN0aXZlIH4gLmZvcm0tbGFiZWwge1xyXG4gICAgICAgIHRyYW5zZm9ybTogJGlucHV0LWZvY3VzLWFjdGl2ZS1sYWJlbC10cmFuc2Zvcm0tbGc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgICYuZm9ybS1jb250cm9sLXNtIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAkaW5wdXQtcGFkZGluZy1sZWZ0LXNtO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAkaW5wdXQtcGFkZGluZy1yaWdodC1zbTtcclxuICAgICAgcGFkZGluZy10b3A6ICRpbnB1dC1wYWRkaW5nLXRvcC1zbTtcclxuICAgICAgcGFkZGluZy1ib3R0b206ICRpbnB1dC1wYWRkaW5nLWJvdHRvbS1zbTtcclxuICAgICAgZm9udC1zaXplOiAkaW5wdXQtZm9udC1zaXplLXNtO1xyXG4gICAgICBsaW5lLWhlaWdodDogJGlucHV0LWxpbmUtaGVpZ2h0LXNtO1xyXG4gICAgICB+IC5mb3JtLWxhYmVsIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogJGZvcm0tbGFiZWwtcGFkZGluZy10b3Atc207XHJcbiAgICAgICAgZm9udC1zaXplOiAkZm9ybS1sYWJlbC1mb250LXNpemUtc207XHJcbiAgICAgIH1cclxuICAgICAgOmZvY3VzIH4gLmZvcm0tbGFiZWwsXHJcbiAgICAgICYuYWN0aXZlIH4gLmZvcm0tbGFiZWwge1xyXG4gICAgICAgIHRyYW5zZm9ybTogJGlucHV0LWZvY3VzLWFjdGl2ZS1sYWJlbC10cmFuc2Zvcm0tc207XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICYuZm9ybS13aGl0ZSB7XHJcbiAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgY29sb3I6ICRmb3JtLXdoaXRlLWlucHV0LWNvbG9yO1xyXG4gICAgICB+IC5mb3JtLWxhYmVsIHtcclxuICAgICAgICBjb2xvcjogJGZvcm0td2hpdGUtbGFiZWwtY29sb3I7XHJcbiAgICAgIH1cclxuICAgICAgfiAuZm9ybS1ub3RjaCB7XHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogJGZvcm0td2hpdGUtbm90Y2gtZGl2LWJvcmRlci1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgJjpmb2N1cyB+IC5mb3JtLWxhYmVsIHtcclxuICAgICAgICBjb2xvcjogJGZvcm0td2hpdGUtaW5wdXQtZm9jdXMtbGFiZWwtY29sb3I7XHJcbiAgICAgIH1cclxuICAgICAgJjpmb2N1cyB+IC5mb3JtLW5vdGNoIC5mb3JtLW5vdGNoLW1pZGRsZSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkZm9ybS13aGl0ZS1pbnB1dC1mb2N1cy1ib3JkZXItY29sb3I7XHJcbiAgICAgIH1cclxuICAgICAgJjpmb2N1cyB+IC5mb3JtLW5vdGNoIC5mb3JtLW5vdGNoLWxlYWRpbmcge1xyXG4gICAgICAgIGJvcmRlci10b3A6ICRpbnB1dC1mb2N1cy1ib3JkZXItd2lkdGggc29saWQgJGZvcm0td2hpdGUtaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206ICRpbnB1dC1mb2N1cy1ib3JkZXItd2lkdGggc29saWQgJGZvcm0td2hpdGUtaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAkaW5wdXQtZm9jdXMtYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLXdoaXRlLWlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgICAmOmZvY3VzIH4gLmZvcm0tbm90Y2ggLmZvcm0tbm90Y2gtdHJhaWxpbmcge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGZvcm0td2hpdGUtaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4qL1xyXG4iXX0= */"]
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
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


      var _logtest_logtest_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./logtest/logtest.component */
      71387);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: 'login-main',
        component: _login_main_login_main_component__WEBPACK_IMPORTED_MODULE_1__.LoginMainComponent
      }, {
        path: 'logtest',
        component: _logtest_logtest_component__WEBPACK_IMPORTED_MODULE_2__.LogtestComponent
      },
      /*{ path: 'login2', component: Login2Component },*/
      //{ path: 'storybook-button-fortest', component: ButtonFortestComponent },
      {
        path: 'register-form2',
        component: _login_main_register_form2_register_form2_component__WEBPACK_IMPORTED_MODULE_0__["default"]
      },
      /*{ path: 'register-form2', component: RegisterForm2Component },*/
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
        redirectTo: 'logtest'
      }];

      var _Login2RoutingModule = /*#__PURE__*/_createClass(function _Login2RoutingModule() {
        _classCallCheck(this, _Login2RoutingModule);
      });

      _Login2RoutingModule.ɵfac = function Login2RoutingModule_Factory(t) {
        return new (t || _Login2RoutingModule)();
      };

      _Login2RoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _Login2RoutingModule
      });
      _Login2RoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_Login2RoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
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
            var _this14 = this;

            this.isLoggedIn = !!this.tokenStorageService.getToken();

            if (this.isLoggedIn) {
              var user = this.tokenStorageService.getUser();
              this.roles = user.roles;
              this.showAdminBoard = this.roles.includes('Admin') || this.roles.includes('SupervisorAdmin');
              this.showModeratorBoard = this.roles.includes('SupervisorMonitor');
              this.username = user.username;
            }

            this.eventBusSub = this.eventBusService.on('logout', function () {
              _this14.logout();
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


      var _logtest_logtest_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./logtest/logtest.component */
      71387);
      /* harmony import */


      var _login_main_login_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login-main/login-main.component */
      69157);
      /* harmony import */


      var src_stories_task_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/stories/task/task.component */
      48262);
      /* harmony import */


      var _stories_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../stories/task-list/task-list.component */
      25557);
      /* harmony import */


      var _login2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./login2.component */
      54634);
      /* harmony import */


      var _storybook_storybook_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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


      var _login_main_replace_pass_form2_replace_pass_form2_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./login-main/replace-pass-form2/replace-pass-form2.component */
      25504);
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
        bootstrap: [_login2_component__WEBPACK_IMPORTED_MODULE_6__.Login2Component]
      });
      _Login2Module.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        imports: [[_login2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Login2RoutingModule, _storybook_storybook_module__WEBPACK_IMPORTED_MODULE_7__.StorybookModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](_Login2Module, {
          declarations: [_login_main_replace_pass_form2_replace_pass_form2_component__WEBPACK_IMPORTED_MODULE_8__.ReplacePassForm2Component, _login_main_register_form2_register_form2_component__WEBPACK_IMPORTED_MODULE_1__["default"], src_stories_task_task_component__WEBPACK_IMPORTED_MODULE_4__.TaskComponent, _stories_task_list_task_list_component__WEBPACK_IMPORTED_MODULE_5__.TaskListComponent, _logtest_logtest_component__WEBPACK_IMPORTED_MODULE_2__.LogtestComponent, _login2_component__WEBPACK_IMPORTED_MODULE_6__.Login2Component, _login_main_login_main_component__WEBPACK_IMPORTED_MODULE_3__.LoginMainComponent],
          imports: [_login2_routing_module__WEBPACK_IMPORTED_MODULE_0__.Login2RoutingModule, _storybook_storybook_module__WEBPACK_IMPORTED_MODULE_7__.StorybookModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__.MatDialogModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButtonModule]
        });
      })();
      /***/

    },

    /***/
    71387:
    /*!*****************************************************!*\
      !*** ./src/app/login2/logtest/logtest.component.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LogtestComponent": function LogtestComponent() {
          return (
            /* binding */
            _LogtestComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _stories_pages_background1_background1Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../../stories/pages/background1/background1Component */
      23839);
      /* harmony import */


      var _stories_buttons_button_fortest_button_fortest_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../stories/buttons/button-fortest/button-fortest.component */
      65028);

      var _LogtestComponent = /*#__PURE__*/function () {
        function _LogtestComponent() {
          _classCallCheck(this, _LogtestComponent);
        }

        _createClass(_LogtestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _LogtestComponent;
      }();

      _LogtestComponent.ɵfac = function LogtestComponent_Factory(t) {
        return new (t || _LogtestComponent)();
      };

      _LogtestComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _LogtestComponent,
        selectors: [["logtest"]],
        decls: 2,
        vars: 0,
        template: function LogtestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "storybook-background1");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "storybook-button-fortest");
          }
        },
        directives: [_stories_pages_background1_background1Component__WEBPACK_IMPORTED_MODULE_0__["default"], _stories_buttons_button_fortest_button_fortest_component__WEBPACK_IMPORTED_MODULE_1__.ButtonFortestComponent],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2d0ZXN0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    98458:
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginComponent": function LoginComponent() {
          return (
            /* binding */
            _LoginComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _register_form_register_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register-form/register-form.component */
      70996);
      /* harmony import */


      var _replace_pass_form_replace_pass_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./replace-pass-form/replace-pass-form.component */
      4959);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/auth.service */
      88368);
      /* harmony import */


      var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../_services/token-storage.service */
      93590);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! mdb-angular-ui-kit/modal */
      25303);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular-bootstrap-md */
      49260);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      function LoginComponent_form_6_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Username is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_form_6_div_22_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_form_6_div_22_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Password must be at least 1 characters");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_form_6_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LoginComponent_form_6_div_22_div_1_Template, 2, 0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, LoginComponent_form_6_div_22_div_2_Template, 2, 0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r5.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r5.errors.minlength);
        }
      }

      function LoginComponent_form_6_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Login failed: ", ctx_r7.loginErrorMessage, " ");
        }
      }

      function LoginComponent_form_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_6_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return _r2.form.valid && ctx_r10.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "USER NAME");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "input", 15, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LoginComponent_form_6_Template_input_ngModelChange_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r12.form.userName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, LoginComponent_form_6_div_10_Template, 2, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "PASSWORD");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "input", 21, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LoginComponent_form_6_Template_input_ngModelChange_18_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r13.form.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_form_6_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r14.showPassChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, LoginComponent_form_6_div_22_Template, 3, 2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_form_6_Template_a_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r15.openReplacePassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, " Forgot password? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Continue");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](32, LoginComponent_form_6_div_32_Template, 2, 1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](9);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](19);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", "userName");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", "DanK203")("ngModel", ctx_r0.form.userName);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r3.errors && _r2.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-label", "password");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("type", ctx_r0.showPass);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", "DanK203")("ngModel", ctx_r0.form.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r5.errors && _r2.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r2.submitted && ctx_r0.isLoginFailed);
        }
      }

      function LoginComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Logged in as ", ctx_r1.roles, ". ");
        }
      } //import {  Router } from '@angular/router';


      var _LoginComponent = /*#__PURE__*/function () {
        function _LoginComponent(authService, tokenStorage, router, registerFormService, replacePassFormService) {
          _classCallCheck(this, _LoginComponent);

          this.authService = authService;
          this.tokenStorage = tokenStorage;
          this.router = router;
          this.registerFormService = registerFormService;
          this.replacePassFormService = replacePassFormService;
          this.registerFormRef = null;
          this.replacePassFormRef = null;
          this.form = {
            username: null,
            password: null //new FormControl('zaqwsx', Validators.min(2))

          };
          this.isLoggedIn = false;
          this.isLoginFailed = false;
          this.loginErrorMessage = '';
          this.roles = [];
          this.showPass = 'password';
          /**
           * Is this the principal call to action on the login-main?
           */

          this.primary = true;
        }

        _createClass(_LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.tokenStorage.getToken()) {
              this.isLoggedIn = true;
              this.roles = this.tokenStorage.getUser().roles;
            }
          }
        }, {
          key: "showPassChange",
          value: function showPassChange() {
            this.showPass = this.showPass == 'password' ? 'text' : 'password';
          }
        }, {
          key: "test",
          value: function test() {
            var _this15 = this;

            console.log("test start");
            this.openRegisterForm().then(function () {
              _this15.openReplacePassword();

              console.log("test end");
            });
            this.openRegisterForm().then(function (val) {
              console.log(val);

              switch (val) {
                case "xbutton":
                  break;

                case undefined:
                  _this15.openReplacePassword();

                  break;

                default:
              }

              return 'done2';
            }, function (err) {
              return console.error(err);
            });
          }
        }, {
          key: "openRegisterForm",
          value: function openRegisterForm() {
            return this.registerFormService.open(_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_0__.RegisterFormComponent).onClose.toPromise();
            /*var promise = new Promise<void>((resolve, reject)  => {
              let newRegisterFormService = this.registerFormService.open(RegisterForm2Component);
              setTimeout(() => {
                console.log("Async Work Complete");
                newRegisterFormService.close();
                resolve();//() => {resolve();}
              }, 5000);
            });
            return promise;*/
          }
        }, {
          key: "openReplacePassword",
          value: function openReplacePassword() {
            this.replacePassFormService.open(_replace_pass_form_replace_pass_form_component__WEBPACK_IMPORTED_MODULE_1__.ReplacePassFormComponent);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this16 = this;

            var _this$form2 = this.form,
                username = _this$form2.username,
                password = _this$form2.password;
            this.authService.login(username, password).subscribe(function (data) {
              _this16.tokenStorage.saveToken(data.accessToken);

              _this16.tokenStorage.saveRefreshToken(data.refreshToken);

              _this16.tokenStorage.saveUser(data);

              _this16.isLoginFailed = false;
              _this16.isLoggedIn = true;
              _this16.roles = _this16.tokenStorage.getUser().roles;

              _this16.reloadPage();
            }, function (err) {
              switch (err.error.message) {
                case "Error: A registry process should be made!":
                  //this.openRegisterForm().then(() => {this.openReplacePassword()});
                  //toPromise((data) => {this.openReplacePassword()});
                  _this16.openRegisterForm().then(function (val) {
                    console.log(val);

                    switch (val) {
                      case "xbutton":
                        break;

                      case "Registration Complete":
                        _this16.openReplacePassword();

                        break;

                      case undefined:
                        _this16.openReplacePassword();

                        break;

                      default:
                    }

                    return 'done2';
                  }, function (err) {
                    return console.error(err);
                  });

                  break;

                default:
                  _this16.loginErrorMessage = err.error.message;
              }

              _this16.isLoginFailed = true;
            });
          }
        }, {
          key: "reloadPage",
          value: function reloadPage() {
            //window.location.reload();
            this.router.navigate(['/profile']).then(function () {
              window.location.reload();
            }); //var URL = window.location.mainHeader+"/profile"; //'http://localhost:4200/user';
            ///window.open(URL);
            //this.router.navigate([]).then(result => {  window.open(window.location.toString(), 'user'); });
          }
        }]);

        return _LoginComponent;
      }();

      _LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || _LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_3__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_6__.MdbModalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_6__.MdbModalService));
      };

      _LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _LoginComponent,
        selectors: [["app-login"]],
        inputs: {
          primary: "primary"
        },
        decls: 21,
        vars: 2,
        consts: [["id", "main-login-card", 1, "col-md-12"], [1, "card", "h-100", "d-flex", "align-items-center", "justify-content-center"], [1, "Aeonix-App-Center"], ["name", "form", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["id", "tests", 1, "form-check-label", "white-text", "border-bottom-0"], ["for", "tests", 1, "form-check-label", "white-text", 2, "margin-bottom", "1px", "padding", "1px"], [1, "green-text", "font-weight-bold", 3, "click"], ["href", "#/login", 1, "green-text", "font-weight-bold", "pl-2", 3, "click"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "list-item", "storybook-input", "Frame-3"], [1, "user-name", "D-Caps-Regular"], ["for", "userName", 1, "Vector2"], ["src", "./assets/images/User2ldpi.png", "alt", "icon input userName", 1, "icon-input-userName"], ["type", "text", "id", "userName", "name", "userName", "placeholder", "Ex. Saul Ramirez", "required", "", 1, "DanK203", 3, "value", "ngModel", "ngModelChange"], ["userName", "ngModel"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "storybook-input", "Frame-3"], ["for", "password", 1, "Vector2"], ["src", "./assets/images/LockIcon2ldpi.png", "alt", "icon input password", 1, "icon-input-password"], ["id", "password", "name", "password", "placeholder", "password", "required", "", 1, "DanK203", 3, "type", "value", "ngModel", "ngModelChange"], ["password", "ngModel"], ["type", "button", 1, "icon-input-showpass", 3, "click"], ["src", "./assets/images/EyeIcon.png", "alt", "icon input type", 1, "icon-input-showpass"], [1, "thematic-break"], [1, "form-group"], ["href", "#/login", 1, "forgot-password", 3, "click"], [1, "login-button"], ["role", "alert", 1, "alert", "alert-danger"], [4, "ngIf"], [1, "alert", "alert-success"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Aeonix App Center");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, LoginComponent_form_6_Template, 33, 10, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, LoginComponent_div_7_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mdb-card-footer", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "R&D test: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_11_listener() {
              return ctx.openRegisterForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "RegistrationForm");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " ,");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_15_listener() {
              return ctx.openReplacePassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "ReplacePassForm");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, " ,");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_19_listener() {
              return ctx.test();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "test");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__.MdbCardFooterComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel],
        styles: [".storybook-input[_ngcontent-%COMP%] {\n  position: relative;\n  width: 445px;\n  height: 102px;\n  left: calc(50% - 445px/2 - 0.5px);\n  top: calc(50% - 101.16px/2 - 171.58px);\n  padding: 0.8px 0 0;\n  background-color: #FFFFFF;\n}\n\n.storybook-input[_ngcontent-%COMP%]   .Frame-3[_ngcontent-%COMP%] {\n  width: 445px;\n  height: 102px;\n  left: calc(50% - 445px/2 - 0.5px);\n  top: calc(50% - 101.16px/2 - 171.58px);\n  padding: 0.8px 0 0;\n  background-color: #fff;\n}\n\n.user-name[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 82px;\n  height: 35px;\n  left: 0%;\n  right: 82.7%;\n  top: 10%;\n  bottom: 68.37%;\n  \n  display: flex;\n  align-items: center;\n  letter-spacing: -0.011em;\n  text-transform: uppercase;\n  color: #000000;\n}\n\n\n\n.D-Caps-Regular[_ngcontent-%COMP%] {\n  font-family: Noto Sans, ui-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 31px;\n}\n\nimg.icon-input-username[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 22.72px;\n  height: 26.74px;\n  left: 20px;\n  bottom: 8px;\n  transform: rotate(0deg);\n  background-position: bottom;\n}\n\nimg.icon-input-password[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 22.72px;\n  height: 26.74px;\n  left: 20px;\n  bottom: 8px;\n  transform: rotate(0deg);\n  background-position: bottom;\n}\n\n.DanK203[_ngcontent-%COMP%] {\n  position: relative;\n  height: 25px;\n  width: 228px;\n  left: 35px;\n  bottom: -5px;\n  margin: 4.2px 1px 2.8px 20.3px;\n  \n  -o-object-fit: contain;\n     object-fit: contain;\n  font-family: Noto Sans, ui-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 48%;\n  \n  box-shadow: none;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.19px;\n  border-color: rgba(255, 255, 255, 0);\n  color: #000000;\n}\n\n.icon-input-showpass[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 33px;\n  height: 20px;\n  right: 10px;\n  bottom: 11px;\n  padding: 0px;\n  margin: 0;\n  border-bottom-width: 0px;\n  \n  background-color: rgba(45, 148, 55, 0);\n}\n\nimg.icon-input-showpass[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1px;\n  right: 1px;\n  width: inherit;\n  height: inherit;\n  padding: 0px;\n  margin: 0px;\n  \n}\n\ninput[type=text][_ngcontent-%COMP%]:focus {\n  background: #99999900;\n  box-shadow: 0 0 5px #99999900;\n  border-top-color: #99999900;\n  border-left-color: #99999900;\n  border-right-color: #99999900;\n}\n\ninput[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #C8C8C8;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  color: #C8C8C8;\n}\n\ninput[type=password][_ngcontent-%COMP%]:focus {\n  color: #000000;\n  background: #99999900;\n  box-shadow: 0 0 5px #99999900;\n  border-top-color: #99999900;\n  border-left-color: #99999900;\n  border-right-color: #99999900;\n}\n\n.Vector2[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  position: absolute;\n  left: 0.2%;\n  right: 0.03%;\n  top: 42.66%;\n  bottom: 0;\n  \n  background: #FFFFFF;\n  \n  border: 2px solid #3D8ECF;\n  border-radius: 10px;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  width: 446px;\n  height: 63px;\n  margin: 26px 0 0 1px;\n  padding: 17px 136px 17px 139px;\n  border-radius: 7px;\n  background-image: linear-gradient(180deg, #3D8ECF 0%, #58A6E4 100%);\n  font-family: \"Noto Sans\", ui-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 21px;\n  line-height: 11px;\n}\n\n.thematic-break[_ngcontent-%COMP%] {\n  margin: 45px 2px 71px 2.5px;\n  background-color: #3d8ecf;\n  border-top-width: 1px;\n  border-top-color: #3d8ecf;\n  border-top-style: solid;\n}\n\n.forgot-password[_ngcontent-%COMP%] {\n  \n  font-family: \"Noto Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 31px;\n  \n  display: flex;\n  align-items: center;\n  text-align: center;\n  letter-spacing: -0.011em;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #000000;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n}\n\n.card-container.card[_ngcontent-%COMP%] {\n  max-width: 400px !important;\n  padding: 10px 10px;\n}\n\n.col-md-12[_ngcontent-%COMP%] {\n  position: center;\n  width: 637.5px;\n  height: 819px;\n  left: calc(50% - 637.5px/2 - 0.25px);\n  top: calc(50% - 819px/2 - 20.5px);\n}\n\n.card[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 5.18%;\n  right: 4.78%;\n  top: 0;\n  bottom: 0;\n  border-radius: 14px;\n  box-shadow: -4px 4px 10px 0 rgba(88, 166, 228, 0.3);\n  background-color: #fff;\n}\n\n.Aeonix-App-Center[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 12.94%;\n  bottom: 77.05%;\n  width: 447px;\n  height: 82px;\n  flex-grow: 0;\n  margin: 0 0 19.8px;\n  font-family: \"Noto Sans\", ui-serif;\n  font-size: 40px;\n  font-weight: bolder;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: 45px;\n  letter-spacing: -0.011px;\n  text-align: left;\n  color: #000000;\n}\n\n._1Q9if[_ngcontent-%COMP%], ._2Hij5[_ngcontent-%COMP%] {\n  word-wrap: break-word;\n  overflow-wrap: break-word;\n  text-align: start;\n  pointer-events: none;\n}\n\n._3SQN-[_ngcontent-%COMP%], ._3wnIc[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.multi-bg-example[_ngcontent-%COMP%] {\n  width: 980px;\n  height: 289px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: 50% 50%;\n     object-position: 50% 50%;\n}\n\n.font_0[_ngcontent-%COMP%] {\n  font-size: 44px;\n  text-align: left;\n  color: #FFFFFF;\n}\n\n.alert[_ngcontent-%COMP%], .alert-success[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.background[_ngcontent-%COMP%] {\n  background-size: cover;\n  background-origin: border-box;\n  background-image: url('Background.webp');\n  \n  background-repeat: no-repeat;\n  background-position: top left;\n}\n\n.card-footer[_ngcontent-%COMP%] {\n  padding-top: 0.1rem;\n  padding-right: 0.1rem;\n  padding-bottom: 0.1rem;\n  padding-left: 0.1rem;\n  border-top: 0.1rem solid rgba(0, 0, 0, 0.125);\n  border-bottom: 0.1rem;\n  background-color: rgba(0, 0, 0, 0.03);\n}\n\n.footer[_ngcontent-%COMP%]   ul.footer-menu[_ngcontent-%COMP%]   li.bold[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLHFDQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUVBLGNBQUE7QUFKRjs7QUFTQSxtQkFBQTs7QUFDQTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQU5GOztBQVNBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQU5GOztBQVNBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQU5GOztBQVNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFFQSxxQkFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBRUEsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLG9DQUFBO0VBQ0EsY0FBQTtBQVRGOztBQVlBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSx3QkFBQTtFQUdBOytCQUFBO0VBRUEsc0NBQUE7QUFYRjs7QUFnQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBO29EQUFBO0FBWkY7O0FBa0JBO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQWZGOztBQW1CQTtFQUNFLGNBQUE7QUFoQkY7O0FBZUE7RUFDRSxjQUFBO0FBaEJGOztBQW1CQTtFQUNFLGNBQUE7RUFDQSxxQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBaEJGOztBQW1CQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFHQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBRUEsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFuQkY7O0FBc0JBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtRUFBQTtFQUVBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQXBCRjs7QUF1QkE7RUFDRSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0FBcEJGOztBQXVCQTtFQUNFLHdCQUFBO0VBRUEsd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUNBQUE7VUFBQSwrQkFBQTtFQUVBLGNBQUE7QUF2QkY7O0FBMEJBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBdkJGOztBQTBCQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7QUF2QkY7O0FBMEJBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7QUF2QkY7O0FBNEJBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxtREFBQTtFQUNBLHNCQUFBO0FBekJGOztBQTZCQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFFQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUEzQkY7O0FBOEJBO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUEzQkY7O0FBOEJBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUEzQkY7O0FBOEJBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtLQUFBLGlCQUFBO0VBQ0EsMkJBQUE7S0FBQSx3QkFBQTtBQTNCRjs7QUE4QkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBM0JGOztBQThCQTtFQUNFLFVBQUE7QUEzQkY7O0FBK0JBO0VBQ0Usc0JBQUE7RUFDQSw2QkFBQTtFQUNBLHdDQUFBO0VBQ0EsMkVBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FBNUJGOztBQWdDQTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBRUEsNkNBQUE7RUFFQSxxQkFBQTtFQUNBLHFDQUFBO0FBL0JGOztBQW1DQTtFQUNFLGdCQUFBO0FBaENGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuXHJcbi5zdG9yeWJvb2staW5wdXQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNDQ1cHg7XHJcbiAgaGVpZ2h0OiAxMDJweDtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDQ0NXB4LzIgLSAwLjVweCk7XHJcbiAgdG9wOiBjYWxjKDUwJSAtIDEwMS4xNnB4LzIgLSAxNzEuNThweCk7XHJcbiAgcGFkZGluZzogMC44cHggMCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi5zdG9yeWJvb2staW5wdXQgLkZyYW1lLTMge1xyXG4gIHdpZHRoOiA0NDVweDtcclxuICBoZWlnaHQ6IDEwMnB4O1xyXG4gIGxlZnQ6IGNhbGMoNTAlIC0gNDQ1cHgvMiAtIDAuNXB4KTtcclxuICB0b3A6IGNhbGMoNTAlIC0gMTAxLjE2cHgvMiAtIDE3MS41OHB4KTtcclxuICBwYWRkaW5nOiAwLjhweCAwIDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnVzZXItbmFtZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA4MnB4O1xyXG4gIGhlaWdodDogMzVweDtcclxuICBsZWZ0OiAwJTtcclxuICByaWdodDogODIuNyU7XHJcbiAgdG9wOiAxMCU7XHJcbiAgYm90dG9tOiA2OC4zNyU7XHJcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDIyMyUgKi9cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMWVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIEQgQ2FwcyBSZWd1bGFyICovXHJcbi5ELUNhcHMtUmVndWxhciB7XHJcbiAgZm9udC1mYW1pbHk6IE5vdG8gU2FucywgdWktc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG59XHJcblxyXG5pbWcuaWNvbi1pbnB1dC11c2VybmFtZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAyMi43MnB4O1xyXG4gIGhlaWdodDogMjYuNzRweDtcclxuICBsZWZ0OiAyMHB4O1xyXG4gIGJvdHRvbTogOHB4O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTtcclxufVxyXG5cclxuaW1nLmljb24taW5wdXQtcGFzc3dvcmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMjIuNzJweDtcclxuICBoZWlnaHQ6IDI2Ljc0cHg7XHJcbiAgbGVmdDogMjBweDtcclxuICBib3R0b206IDhweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbn1cclxuXHJcbi5EYW5LMjAzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyMjhweDtcclxuICBsZWZ0OiAzNXB4O1xyXG4gIGJvdHRvbTogLTVweDtcclxuICBtYXJnaW46IDQuMnB4IDFweCAyLjhweCAyMC4zcHg7XHJcblxyXG4gIC8qIEQgRXhhbXBsZSBJdGFsaWMgKi9cclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIGZvbnQtZmFtaWx5OiBOb3RvIFNhbnMsIHVpLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogNDglO1xyXG4gIC8qIG9yIDY1JSAqL1xyXG5cclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMTlweDtcclxuXHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4uaWNvbi1pbnB1dC1zaG93cGFzcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAzM3B4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICByaWdodDogMTBweDtcclxuICBib3R0b206IDExcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwcHg7XHJcblxyXG5cclxuICAvKnRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbTsqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDUsIDE0OCwgNTUsIDApO1xyXG59XHJcblxyXG5cclxuXHJcbmltZy5pY29uLWlucHV0LXNob3dwYXNzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxcHg7XHJcbiAgcmlnaHQ6IDFweDtcclxuICB3aWR0aDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIC8qb2JqZWN0LWZpdDogY29udGFpbjtcclxuICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDYxLCAxNDIsIDIwNywgMC4xNSk7Ki9cclxufVxyXG5cclxuXHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiAjOTk5OTk5MDA7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjOTk5OTk5MDA7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzk5OTk5OTAwO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjOTk5OTk5MDA7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjOTk5OTk5MDA7XHJcbn1cclxuXHJcblxyXG5pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjQzhDOEM4O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1cyB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgYmFja2dyb3VuZDogIzk5OTk5OTAwO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggIzk5OTk5OTAwO1xyXG4gIGJvcmRlci10b3AtY29sb3I6ICM5OTk5OTkwMDtcclxuICBib3JkZXItbGVmdC1jb2xvcjogIzk5OTk5OTAwO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogIzk5OTk5OTAwO1xyXG59XHJcblxyXG4uVmVjdG9yMiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG5cclxuICBsZWZ0OiAwLjIlO1xyXG4gIHJpZ2h0OiAwLjAzJTtcclxuICB0b3A6IDQyLjY2JTtcclxuICBib3R0b206IDA7XHJcblxyXG4gIC8qIFdoaXRlICovXHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAvKiBCbHVlICovXHJcbiAgYm9yZGVyOiAycHggc29saWQgIzNEOEVDRjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4ubG9naW4tYnV0dG9uIHtcclxuICB3aWR0aDogNDQ2cHg7XHJcbiAgaGVpZ2h0OiA2M3B4O1xyXG4gIG1hcmdpbjogMjZweCAwIDAgMXB4O1xyXG4gIHBhZGRpbmc6IDE3cHggMTM2cHggMTdweCAxMzlweDtcclxuICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzNEOEVDRiAwJSwgIzU4QTZFNCAxMDAlKTtcclxuXHJcbiAgZm9udC1mYW1pbHk6ICdOb3RvIFNhbnMnLCB1aS1zZXJpZjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDIxcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDExcHg7XHJcbn1cclxuXHJcbi50aGVtYXRpYy1icmVhayB7XHJcbiAgbWFyZ2luOiA0NXB4IDJweCA3MXB4IDIuNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDhlY2Y7XHJcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYig2MSwgMTQyLCAyMDcpO1xyXG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xyXG59XHJcblxyXG4uZm9yZ290LXBhc3N3b3JkIHtcclxuICAvKiBEIFVuZGVyTGluZSBSZWd1bGFyICovXHJcblxyXG4gIGZvbnQtZmFtaWx5OiAnTm90byBTYW5zJztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDE4MyUgKi9cclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDExZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxuXHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uY2FyZC1jb250YWluZXIuY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcclxuXHJcbn1cclxuLmNvbC1tZC0xMntcclxuICBwb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiA2MzcuNXB4O1xyXG4gIGhlaWdodDogODE5cHg7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSA2MzcuNXB4LzIgLSAwLjI1cHgpO1xyXG4gIHRvcDogY2FsYyg1MCUgLSA4MTlweC8yIC0gMjAuNXB4KTtcclxuXHJcbn1cclxuXHJcblxyXG4uY2FyZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUuMTglO1xyXG4gIHJpZ2h0OiA0Ljc4JTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgYm94LXNoYWRvdzogLTRweCA0cHggMTBweCAwIHJnYmEoODgsIDE2NiwgMjI4LCAwLjMpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG4uQWVvbml4LUFwcC1DZW50ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEyLjk0JTtcclxuICBib3R0b206IDc3LjA1JTtcclxuXHJcbiAgd2lkdGg6IDQ0N3B4O1xyXG4gIGhlaWdodDogODJweDtcclxuICBmbGV4LWdyb3c6IDA7XHJcbiAgbWFyZ2luOiAwIDAgMTkuOHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiLCB1aS1zZXJpZjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5fMVE5aWYsIC5fMkhpajUge1xyXG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG59XHJcblxyXG4uXzNTUU4tLCAuXzN3bkljIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm11bHRpLWJnLWV4YW1wbGUge1xyXG4gIHdpZHRoOiA5ODBweDtcclxuICBoZWlnaHQ6IDI4OXB4O1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG9iamVjdC1wb3NpdGlvbjogNTAlIDUwJTtcclxufVxyXG5cclxuLmZvbnRfMCB7XHJcbiAgZm9udC1zaXplOjQ0cHg7XHJcbiAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gIGNvbG9yOiNGRkZGRkY7XHJcbn1cclxuXHJcbi5hbGVydCwgLmFsZXJ0LXN1Y2Nlc3Mge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcblxyXG4uYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLW9yaWdpbjogYm9yZGVyLWJveDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vX3NlcnZpY2VzL2Fzc2V0cy9pbWFnZXMvQmFja2dyb3VuZC53ZWJwKTtcclxuICAvKmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgzMCwgNzUsIDExNSwgMSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpOyovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcclxuXHJcbn1cclxuXHJcbi5jYXJkLWZvb3RlciB7XHJcbiAgcGFkZGluZy10b3A6IDAuMXJlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAwLjFyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDAuMXJlbTtcclxuICBwYWRkaW5nLWxlZnQ6IDAuMXJlbTtcclxuXHJcbiAgYm9yZGVyLXRvcDogMC4xcmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xyXG5cclxuICBib3JkZXItYm90dG9tOiAwLjFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjAzKTtcclxuXHJcbn1cclxuXHJcbi5mb290ZXIgdWwuZm9vdGVyLW1lbnUgbGkuYm9sZCBhIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    70996:
    /*!****************************************************************!*\
      !*** ./src/app/login/register-form/register-form.component.ts ***!
      \****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterFormComponent": function RegisterFormComponent() {
          return (
            /* binding */
            _RegisterFormComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! mdb-angular-ui-kit/modal */
      25303);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../_services/auth.service */
      88368);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! mdb-angular-ui-kit/forms */
      95095);
      /* harmony import */


      var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular-bootstrap-md */
      49260);
      /* harmony import */


      var _pipes_api_error_message_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../pipes/api-error-message.pipe */
      81582);

      function RegisterFormComponent_form_11_mdb_error_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mdb-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " First name is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RegisterFormComponent_form_11_mdb_success_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mdb-success");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RegisterFormComponent_form_11_mdb_error_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mdb-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Email is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RegisterFormComponent_form_11_mdb_success_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mdb-success");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RegisterFormComponent_form_11_mdb_error_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mdb-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RegisterFormComponent_form_11_mdb_success_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mdb-success");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RegisterFormComponent_form_11_span_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "apiErrorMessage");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, ctx_r8.errorFieldSubmitted["password"]), " ");
        }
      }

      function RegisterFormComponent_form_11_mdb_error_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mdb-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Phone is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RegisterFormComponent_form_11_mdb_success_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mdb-success");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RegisterFormComponent_form_11_div_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterFormComponent_form_11_div_33_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);

            return ctx_r12.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Register");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function RegisterFormComponent_form_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mdb-form-control", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "UserName input");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, RegisterFormComponent_form_11_mdb_error_6_Template, 2, 0, "mdb-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, RegisterFormComponent_form_11_mdb_success_7_Template, 2, 0, "mdb-success", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "mdb-form-control", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Email input");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, RegisterFormComponent_form_11_mdb_error_14_Template, 2, 0, "mdb-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, RegisterFormComponent_form_11_mdb_success_15_Template, 2, 0, "mdb-success", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "mdb-form-control", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Password input");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, RegisterFormComponent_form_11_mdb_error_22_Template, 2, 0, "mdb-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, RegisterFormComponent_form_11_mdb_success_23_Template, 2, 0, "mdb-success", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, RegisterFormComponent_form_11_span_24_Template, 5, 3, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "mdb-form-control", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "label", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Phone number input");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, RegisterFormComponent_form_11_mdb_error_31_Template, 2, 0, "mdb-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](32, RegisterFormComponent_form_11_mdb_success_32_Template, 2, 0, "mdb-success", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, RegisterFormComponent_form_11_div_33_Template, 4, 0, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.validationForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mdbValidate", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.userName == null ? null : ctx_r0.userName.invalid) && ((ctx_r0.userName == null ? null : ctx_r0.userName.dirty) || (ctx_r0.userName == null ? null : ctx_r0.userName.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.userName == null ? null : ctx_r0.userName.valid) && ((ctx_r0.userName == null ? null : ctx_r0.userName.dirty) || (ctx_r0.userName == null ? null : ctx_r0.userName.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mdbValidate", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.email == null ? null : ctx_r0.email.invalid) && ((ctx_r0.email == null ? null : ctx_r0.email.dirty) || (ctx_r0.email == null ? null : ctx_r0.email.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.email == null ? null : ctx_r0.email.valid) && ((ctx_r0.email == null ? null : ctx_r0.email.dirty) || (ctx_r0.email == null ? null : ctx_r0.email.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mdbValidate", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.password == null ? null : ctx_r0.password.invalid) && ((ctx_r0.password == null ? null : ctx_r0.password.dirty) || (ctx_r0.password == null ? null : ctx_r0.password.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.password == null ? null : ctx_r0.password.valid) && ((ctx_r0.password == null ? null : ctx_r0.password.dirty) || (ctx_r0.password == null ? null : ctx_r0.password.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.errorFieldSubmitted["password"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mdbValidate", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.phone == null ? null : ctx_r0.phone.invalid) && ((ctx_r0.phone == null ? null : ctx_r0.phone.dirty) || (ctx_r0.phone == null ? null : ctx_r0.phone.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx_r0.phone == null ? null : ctx_r0.phone.valid) && ((ctx_r0.phone == null ? null : ctx_r0.phone.dirty) || (ctx_r0.phone == null ? null : ctx_r0.phone.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r0.isSuccessful);
        }
      }

      function RegisterFormComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Your registration is successful! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _RegisterFormComponent = /*#__PURE__*/function () {
        function _RegisterFormComponent(modalRef, authService) {
          _classCallCheck(this, _RegisterFormComponent);

          this.modalRef = modalRef;
          this.authService = authService;
          this.isSuccessful = false;
          this.isSignUpFailed = false;
          this.submitted = false;
          this.errorMessage = '';
          this.empList = [];
          this.apiResponse = {
            message: '',
            error: false
          };
          this.errorFieldSubmitted = {};
          this.closeResult = '';
          this.validationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(1)),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(new RegExp("[0-9 ]{12}")))
          });
          this.empList.push("admin");
        }

        _createClass(_RegisterFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this17 = this;

            this.submitted = true;
            var _this$validationForm$ = this.validationForm.value,
                userName = _this$validationForm$.userName,
                email = _this$validationForm$.email,
                password = _this$validationForm$.password,
                phone = _this$validationForm$.phone;
            this.authService.registerForm(userName, email, password, phone).subscribe(function (data) {
              console.log(data);
              _this17.isSuccessful = true;
              _this17.isSignUpFailed = false;
              _this17.errorFieldSubmitted = {};
              _this17.apiResponse.error = false;
              _this17.apiResponse.message = 'Successful registration';
            }, function (error) {
              var errorResponse = JSON.parse(error.error);
              _this17.apiResponse.error = true;
              _this17.apiResponse.message = 'Registration error';
              _this17.errorMessage = error.error.message;
              _this17.isSignUpFailed = true;

              if (errorResponse.error && errorResponse.message === 'VALIDATION_FAILED') {
                _this17.errorFieldSubmitted = errorResponse.data;
              }
            }, function () {
              console.log("Registration Complete");

              _this17.modalRef.close("Registration Complete");
            });
          }
        }, {
          key: "userName",
          get: function get() {
            return this.validationForm.get('userName');
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

        return _RegisterFormComponent;
      }();

      _RegisterFormComponent.ɵfac = function RegisterFormComponent_Factory(t) {
        return new (t || _RegisterFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_4__.MdbModalRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };

      _RegisterFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _RegisterFormComponent,
        selectors: [["app-modal"]],
        decls: 24,
        vars: 2,
        consts: [[1, "modal-header"], [1, "white-text", "mb-2", "mt-2", "font-weight-bold", "fas"], [1, "green-text", "font-weight-bold"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body", "py-4", "text-center", "expansionCard"], ["id", "profile-img", "src", "./assets/images/T.png", "alt", "", 1, "profile-img-card"], [1, "text-white", "rgba-stylish-strong", "py-5", "px-5", "z-depth-2"], [3, "formGroup", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["hidden", "", 1, "list-group-horizontal", "mb-4", "col-md-12"], ["type", "button", 1, "fa-pull-left", "btn", "btn-primary"], [1, "modal-content"], [1, "modal-footer", "fal"], ["type", "checkbox", "id", "checkbox7", 1, "form-check-input"], ["for", "checkbox7", 1, "form-check-label", "white-text"], ["href", "#", 1, "green-text", "font-weight-bold"], [3, "formGroup"], [1, "form-outline"], ["mdbInput", "", "type", "text", "id", "typeText", "formControlName", "userName", "required", "", 1, "form-control", 3, "mdbValidate"], ["for", "typeText", 1, "form-label"], [4, "ngIf"], ["mdbInput", "", "type", "email", "id", "typeEmail", "formControlName", "email", "required", "", 1, "form-control", 3, "mdbValidate"], ["mdbLabel", "", "for", "typeEmail", 1, "form-label", "form-white"], ["mdbInput", "", "type", "password", "id", "typePassword", "formControlName", "password", "required", "", "minlength", "1", 1, "form-control", 3, "mdbValidate"], ["mdbLabel", "", "for", "typePassword", 1, "form-label", "form-white"], ["class", "text-danger error-input", "style", "white-space: pre-line;  font-size: 14px;", 4, "ngIf"], ["mdbInput", "", "type", "tel", "id", "typePhone", "formControlName", "phone", "required", "", 1, "form-control", 3, "mdbValidate"], ["mdbLabel", "", "for", "typePhone", 1, "form-label", "form-white"], ["class", "row d-flex align-items-lg-center ", 4, "ngIf"], [1, "text-danger", "error-input", 2, "white-space", "pre-line", "font-size", "14px"], [1, "row", "d-flex", "align-items-lg-center"], [1, "form-group", "text-center", "mb-2", "col-md-12"], ["type", "button", 1, "btn", "btn-success", "btn-block", "btn-rounded", "z-depth-1", "waves-effect", "waves-light", 3, "click"], [1, "alert", "alert-success"]],
        template: function RegisterFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "REGISTRATION");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " FORM");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterFormComponent_Template_button_click_7_listener() {
              return ctx.modalRef.close("xbutton");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, RegisterFormComponent_form_11_Template, 34, 15, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, RegisterFormComponent_div_12_Template, 2, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Save changes");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Subscribe to our ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, " newsletter?");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isSuccessful);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isSuccessful);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_6__.MdbFormControlComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_6__.MdbInputDirective, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__.MdbInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__.MdbValidateDirective, mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_6__.MdbLabelDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__.MdbErrorDirective, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__.MdbSuccessDirective],
        pipes: [_pipes_api_error_message_pipe__WEBPACK_IMPORTED_MODULE_1__.ApiErrorMessagePipe],
        styles: [".fa[_ngcontent-%COMP%], .fab[_ngcontent-%COMP%], .fad[_ngcontent-%COMP%], .fal[_ngcontent-%COMP%], .far[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%] {\r\n  -moz-osx-font-smoothing:grayscale;\r\n  -webkit-font-smoothing:antialiased;\r\n  display:inline-block;\r\n  font-style:normal;\r\n  font-feature-settings:normal;\r\n  font-variant:normal;\r\n  text-rendering:auto;line-height:1\r\n}\r\n\r\n.fa-lg[_ngcontent-%COMP%] {\r\n  font-size:1.33333em;\r\n  line-height:.75em;\r\n  vertical-align:-.0667em\r\n}\r\n\r\n\r\n\r\n.fa-xs[_ngcontent-%COMP%] {font-size:.75em}\r\n\r\n.fa-sm[_ngcontent-%COMP%] {font-size:.875em}\r\n\r\n.fa-1x[_ngcontent-%COMP%] {font-size:1em}\r\n\r\n.fa-2x[_ngcontent-%COMP%] {font-size:2em}\r\n\r\n.fa-3x[_ngcontent-%COMP%] {font-size:3em}\r\n\r\n.fa-4x[_ngcontent-%COMP%] {font-size:4em}\r\n\r\n.fa-5x[_ngcontent-%COMP%] {font-size:5em}\r\n\r\n.fa-6x[_ngcontent-%COMP%] {font-size:6em}\r\n\r\n.fa-7x[_ngcontent-%COMP%] {font-size:7em}\r\n\r\n.fa-8x[_ngcontent-%COMP%] {font-size:8em}\r\n\r\n.fa-9x[_ngcontent-%COMP%] {font-size:9em}\r\n\r\n.fa-10x[_ngcontent-%COMP%] {font-size:10em}\r\n\r\n.fa-fw[_ngcontent-%COMP%] {text-align:center;width:1.25em}\r\n\r\n.fa-ul[_ngcontent-%COMP%] {list-style-type:none;margin-left:2.5em;padding-left:0}\r\n\r\n.fa-ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {position:relative}\r\n\r\n.fa-li[_ngcontent-%COMP%] {left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}\r\n\r\n.fa-border[_ngcontent-%COMP%] {border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}\r\n\r\n.fa-pull-left[_ngcontent-%COMP%] {float:left}\r\n\r\n.fa-pull-right[_ngcontent-%COMP%] {float:right}\r\n\r\n.fa.fa-pull-left[_ngcontent-%COMP%], .fab.fa-pull-left[_ngcontent-%COMP%], .fal.fa-pull-left[_ngcontent-%COMP%], .far.fa-pull-left[_ngcontent-%COMP%], .fas.fa-pull-left[_ngcontent-%COMP%] {\r\n  margin-right:.3em\r\n}\r\n\r\n.input-with-pre-icon[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {left:36px;right:auto;right:initial}\r\n\r\n.fa.fa-pull-right[_ngcontent-%COMP%], .fab.fa-pull-right[_ngcontent-%COMP%], .fal.fa-pull-right[_ngcontent-%COMP%], .far.fa-pull-right[_ngcontent-%COMP%], .fas.fa-pull-right[_ngcontent-%COMP%] {\r\n  margin-left:.3em\r\n}\r\n\r\n.fa-spin[_ngcontent-%COMP%] {\r\n  animation:fa-spin 2s linear infinite\r\n}\r\n\r\n.fa[_ngcontent-%COMP%], .far[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%] {\r\n  font-family: \"Font Awesome 5 Free\", serif\r\n}\r\n\r\n.fa[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%] {\r\n  font-weight:900\r\n}\r\n\r\n.v-btn__content[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  color: inherit;\r\n  display: flex;\r\n  flex: 1 0 auto;\r\n  justify-content: inherit;\r\n  line-height: normal;\r\n  position: relative;\r\n  transition: inherit;\r\n}\r\n\r\n.form-outline[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus    ~ .form-label[_ngcontent-%COMP%], .form-outline[_ngcontent-%COMP%]   .form-control.active[_ngcontent-%COMP%]    ~ .form-label[_ngcontent-%COMP%] {\r\n  transform: translateY(-1.5rem) translateY(0.1rem) scale(0.8);\r\n}\r\n\r\n\r\n\r\n.v-btn__content[_ngcontent-%COMP%] {\r\n  letter-spacing: normal;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGtDQUFrQztFQUNsQyxvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLDRCQUFtQjtFQUFuQixtQkFBbUI7RUFDbkIsbUJBQW1CLENBQUM7QUFDdEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCO0FBQ0Y7O0FBQ0EsR0FBRzs7QUFDSCxRQUFRLGVBQWU7O0FBRXZCLFFBQVEsZ0JBQWdCOztBQUV4QixRQUFRLGFBQWE7O0FBRXJCLFFBQVEsYUFBYTs7QUFFckIsUUFBUSxhQUFhOztBQUVyQixRQUFRLGFBQWE7O0FBRXJCLFFBQVEsYUFBYTs7QUFFckIsUUFBUSxhQUFhOztBQUVyQixRQUFRLGFBQWE7O0FBRXJCLFFBQVEsYUFBYTs7QUFFckIsUUFBUSxhQUFhOztBQUVyQixTQUFTLGNBQWM7O0FBRXZCLFFBQVEsaUJBQWlCLENBQUMsWUFBWTs7QUFFdEMsUUFBUSxvQkFBb0IsQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjOztBQUU3RCxXQUFXLGlCQUFpQjs7QUFFNUIsUUFBUSxTQUFTLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLG1CQUFtQjs7QUFFbkYsWUFBWSx1QkFBdUIsQ0FBQyxrQkFBa0IsQ0FBQyx3QkFBd0I7O0FBRS9FLGVBQWUsVUFBVTs7QUFFekIsZ0JBQWdCLFdBQVc7O0FBRTNCO0VBQ0U7QUFDRjs7QUFFQSw0QkFBNEIsU0FBUyxDQUFDLFVBQVksQ0FBWixhQUFhOztBQUduRDtFQUNFO0FBQ0Y7O0FBRUE7RUFFRTtBQUNGOztBQUlBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBR0E7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsNERBQTREO0FBQzlEOztBQUdBOzs7Ozs7O0NBT0M7O0FBQ0Q7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoicmVnaXN0ZXItZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4uZmEsLmZhYiwuZmFkLC5mYWwsLmZhciwuZmFzIHtcclxuICAtbW96LW9zeC1mb250LXNtb290aGluZzpncmF5c2NhbGU7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICBmb250LXN0eWxlOm5vcm1hbDtcclxuICBmb250LXZhcmlhbnQ6bm9ybWFsO1xyXG4gIHRleHQtcmVuZGVyaW5nOmF1dG87bGluZS1oZWlnaHQ6MVxyXG59XHJcblxyXG4uZmEtbGcge1xyXG4gIGZvbnQtc2l6ZToxLjMzMzMzZW07XHJcbiAgbGluZS1oZWlnaHQ6Ljc1ZW07XHJcbiAgdmVydGljYWwtYWxpZ246LS4wNjY3ZW1cclxufVxyXG4vKiovXHJcbi5mYS14cyB7Zm9udC1zaXplOi43NWVtfVxyXG5cclxuLmZhLXNtIHtmb250LXNpemU6Ljg3NWVtfVxyXG5cclxuLmZhLTF4IHtmb250LXNpemU6MWVtfVxyXG5cclxuLmZhLTJ4IHtmb250LXNpemU6MmVtfVxyXG5cclxuLmZhLTN4IHtmb250LXNpemU6M2VtfVxyXG5cclxuLmZhLTR4IHtmb250LXNpemU6NGVtfVxyXG5cclxuLmZhLTV4IHtmb250LXNpemU6NWVtfVxyXG5cclxuLmZhLTZ4IHtmb250LXNpemU6NmVtfVxyXG5cclxuLmZhLTd4IHtmb250LXNpemU6N2VtfVxyXG5cclxuLmZhLTh4IHtmb250LXNpemU6OGVtfVxyXG5cclxuLmZhLTl4IHtmb250LXNpemU6OWVtfVxyXG5cclxuLmZhLTEweCB7Zm9udC1zaXplOjEwZW19XHJcblxyXG4uZmEtZncge3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjEuMjVlbX1cclxuXHJcbi5mYS11bCB7bGlzdC1zdHlsZS10eXBlOm5vbmU7bWFyZ2luLWxlZnQ6Mi41ZW07cGFkZGluZy1sZWZ0OjB9XHJcblxyXG4uZmEtdWw+bGkge3Bvc2l0aW9uOnJlbGF0aXZlfVxyXG5cclxuLmZhLWxpIHtsZWZ0Oi0yZW07cG9zaXRpb246YWJzb2x1dGU7dGV4dC1hbGlnbjpjZW50ZXI7d2lkdGg6MmVtO2xpbmUtaGVpZ2h0OmluaGVyaXR9XHJcblxyXG4uZmEtYm9yZGVyIHtib3JkZXI6LjA4ZW0gc29saWQgI2VlZTtib3JkZXItcmFkaXVzOi4xZW07cGFkZGluZzouMmVtIC4yNWVtIC4xNWVtfVxyXG5cclxuLmZhLXB1bGwtbGVmdCB7ZmxvYXQ6bGVmdH1cclxuXHJcbi5mYS1wdWxsLXJpZ2h0IHtmbG9hdDpyaWdodH1cclxuXHJcbi5mYS5mYS1wdWxsLWxlZnQsLmZhYi5mYS1wdWxsLWxlZnQsLmZhbC5mYS1wdWxsLWxlZnQsLmZhci5mYS1wdWxsLWxlZnQsLmZhcy5mYS1wdWxsLWxlZnQge1xyXG4gIG1hcmdpbi1yaWdodDouM2VtXHJcbn1cclxuXHJcbi5pbnB1dC13aXRoLXByZS1pY29uIGxhYmVsIHtsZWZ0OjM2cHg7cmlnaHQ6aW5pdGlhbH1cclxuXHJcblxyXG4uZmEuZmEtcHVsbC1yaWdodCwuZmFiLmZhLXB1bGwtcmlnaHQsLmZhbC5mYS1wdWxsLXJpZ2h0LC5mYXIuZmEtcHVsbC1yaWdodCwuZmFzLmZhLXB1bGwtcmlnaHQge1xyXG4gIG1hcmdpbi1sZWZ0Oi4zZW1cclxufVxyXG5cclxuLmZhLXNwaW4ge1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uOmZhLXNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIGFuaW1hdGlvbjpmYS1zcGluIDJzIGxpbmVhciBpbmZpbml0ZVxyXG59XHJcblxyXG5cclxuXHJcbi5mYSwuZmFyLC5mYXMge1xyXG4gIGZvbnQtZmFtaWx5OiBcIkZvbnQgQXdlc29tZSA1IEZyZWVcIiwgc2VyaWZcclxufVxyXG5cclxuLmZhLC5mYXMge1xyXG4gIGZvbnQtd2VpZ2h0OjkwMFxyXG59XHJcblxyXG5cclxuLnYtYnRuX19jb250ZW50IHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMSAwIGF1dG87XHJcbiAganVzdGlmeS1jb250ZW50OiBpbmhlcml0O1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5mb3JtLW91dGxpbmUgLmZvcm0tY29udHJvbDpmb2N1cyB+IC5mb3JtLWxhYmVsLCAuZm9ybS1vdXRsaW5lIC5mb3JtLWNvbnRyb2wuYWN0aXZlIH4gLmZvcm0tbGFiZWwge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS41cmVtKSB0cmFuc2xhdGVZKDAuMXJlbSkgc2NhbGUoMC44KTtcclxufVxyXG5cclxuXHJcbi8qXHJcbi5mb3JtLW91dGxpbmUgLmZvcm0tY29udHJvbCB+IC5mb3JtLW5vdGNoIGRpdiB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjMzljMGVkO1xyXG59XHJcblxyXG4qL1xyXG4udi1idG5fX2NvbnRlbnQge1xyXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    4959:
    /*!************************************************************************!*\
      !*** ./src/app/login/replace-pass-form/replace-pass-form.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReplacePassFormComponent": function ReplacePassFormComponent() {
          return (
            /* binding */
            _ReplacePassFormComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! mdb-angular-ui-kit/modal */
      25303);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../_services/auth.service */
      88368);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! mdb-angular-ui-kit/forms */
      95095);
      /* harmony import */


      var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular-bootstrap-md */
      49260);
      /* harmony import */


      var _pipes_login_error_message_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../pipes/login-error-message.pipe */
      74164);
      /* harmony import */


      var _pipes_api_error_message_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../pipes/api-error-message.pipe */
      81582);

      function ReplacePassFormComponent_form_14_mdb_error_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mdb-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Username is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ReplacePassFormComponent_form_14_mdb_success_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mdb-success");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ReplacePassFormComponent_form_14_mdb_error_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mdb-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Current password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ReplacePassFormComponent_form_14_mdb_success_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mdb-success");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ReplacePassFormComponent_form_14_span_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "loginErrorMessage");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r6.errorFieldSubmitted["oldPassword"]), " ");
        }
      }

      function ReplacePassFormComponent_form_14_mdb_error_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mdb-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ReplacePassFormComponent_form_14_mdb_success_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mdb-success");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ReplacePassFormComponent_form_14_span_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "apiErrorMessage");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r9.errorFieldSubmitted["password"]), " ");
        }
      }

      function ReplacePassFormComponent_form_14_mdb_error_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mdb-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Retype password is required ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ReplacePassFormComponent_form_14_mdb_success_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mdb-success");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Looks good! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ReplacePassFormComponent_form_14_span_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "apiErrorMessage");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, ctx_r12.errorFieldSubmitted["confirmPassword"]), " ");
        }
      }

      function ReplacePassFormComponent_form_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mdb-form-control", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Username input");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ReplacePassFormComponent_form_14_mdb_error_6_Template, 2, 0, "mdb-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ReplacePassFormComponent_form_14_mdb_success_7_Template, 2, 0, "mdb-success", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "mdb-form-control", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Current Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ReplacePassFormComponent_form_14_mdb_error_14_Template, 2, 0, "mdb-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ReplacePassFormComponent_form_14_mdb_success_15_Template, 2, 0, "mdb-success", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ReplacePassFormComponent_form_14_span_16_Template, 5, 3, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "hr", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "mdb-form-control", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, ReplacePassFormComponent_form_14_mdb_error_25_Template, 2, 0, "mdb-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, ReplacePassFormComponent_form_14_mdb_success_26_Template, 2, 0, "mdb-success", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, ReplacePassFormComponent_form_14_span_27_Template, 5, 3, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "mdb-form-control", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "label", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, ReplacePassFormComponent_form_14_mdb_error_34_Template, 2, 0, "mdb-error", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, ReplacePassFormComponent_form_14_mdb_success_35_Template, 2, 0, "mdb-success", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, ReplacePassFormComponent_form_14_span_36_Template, 5, 3, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r0.replacePassForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mdbValidate", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r0.userName == null ? null : ctx_r0.userName.invalid) && ((ctx_r0.userName == null ? null : ctx_r0.userName.dirty) || (ctx_r0.userName == null ? null : ctx_r0.userName.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r0.userName == null ? null : ctx_r0.userName.valid) && ((ctx_r0.userName == null ? null : ctx_r0.userName.dirty) || (ctx_r0.userName == null ? null : ctx_r0.userName.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mdbValidate", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r0.oldPassword == null ? null : ctx_r0.oldPassword.invalid) && ((ctx_r0.oldPassword == null ? null : ctx_r0.oldPassword.dirty) || (ctx_r0.oldPassword == null ? null : ctx_r0.oldPassword.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r0.oldPassword == null ? null : ctx_r0.oldPassword.valid) && ((ctx_r0.oldPassword == null ? null : ctx_r0.oldPassword.dirty) || (ctx_r0.oldPassword == null ? null : ctx_r0.oldPassword.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.errorFieldSubmitted["oldPassword"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mdbValidate", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r0.password == null ? null : ctx_r0.password.invalid) && ((ctx_r0.password == null ? null : ctx_r0.password.dirty) || (ctx_r0.password == null ? null : ctx_r0.password.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r0.password == null ? null : ctx_r0.password.valid) && ((ctx_r0.password == null ? null : ctx_r0.password.dirty) || (ctx_r0.password == null ? null : ctx_r0.password.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.errorFieldSubmitted["password"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("mdbValidate", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r0.confirmPassword == null ? null : ctx_r0.confirmPassword.invalid) && ((ctx_r0.confirmPassword == null ? null : ctx_r0.confirmPassword.dirty) || (ctx_r0.confirmPassword == null ? null : ctx_r0.confirmPassword.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (ctx_r0.confirmPassword == null ? null : ctx_r0.confirmPassword.valid) && ((ctx_r0.confirmPassword == null ? null : ctx_r0.confirmPassword.dirty) || (ctx_r0.confirmPassword == null ? null : ctx_r0.confirmPassword.touched)));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.errorFieldSubmitted["confirmPassword"]);
        }
      }

      function ReplacePassFormComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReplacePassFormComponent_div_15_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r13.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Replace Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _ReplacePassFormComponent = /*#__PURE__*/function () {
        function _ReplacePassFormComponent(modalRef, authService) {
          _classCallCheck(this, _ReplacePassFormComponent);

          this.modalRef = modalRef;
          this.authService = authService;
          this.isSuccessful = false;
          this.isSignUpFailed = false;
          this.submitted = false;
          this.errorMessage = '';
          this.empList = [];
          this.apiResponse = {
            message: '',
            error: false
          };
          this.errorFieldSubmitted = {};
          this.closeResult = '';
          this.replacePassForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required),
            oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(1)),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3)),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl(null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3))
          });
        }

        _createClass(_ReplacePassFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this18 = this;

            this.submitted = true;
            var _this$replacePassForm2 = this.replacePassForm.value,
                userName = _this$replacePassForm2.userName,
                oldPassword = _this$replacePassForm2.oldPassword,
                password = _this$replacePassForm2.password,
                confirmPassword = _this$replacePassForm2.confirmPassword;
            this.authService.replacePassForm(userName, oldPassword, password, confirmPassword).subscribe(function (data) {
              console.log(data);
              _this18.isSuccessful = true;
              _this18.isSignUpFailed = false;
              _this18.errorFieldSubmitted = {};
              _this18.apiResponse.error = false;
              _this18.apiResponse.message = 'Successful registration';
            }, function (error) {
              var errorResponse = JSON.parse(error.error);
              _this18.apiResponse.error = true;
              _this18.apiResponse.message = 'Registration error';
              _this18.errorMessage = error.error.message;
              _this18.isSignUpFailed = true;

              if (errorResponse.error && errorResponse.message === 'VALIDATION_FAILED') {
                _this18.errorFieldSubmitted = errorResponse.data;
              }
            }, function () {
              _this18.modalRef.close();
            });
          }
        }, {
          key: "userName",
          get: function get() {
            return this.replacePassForm.get('userName');
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

        return _ReplacePassFormComponent;
      }();

      _ReplacePassFormComponent.ɵfac = function ReplacePassFormComponent_Factory(t) {
        return new (t || _ReplacePassFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_5__.MdbModalRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };

      _ReplacePassFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ReplacePassFormComponent,
        selectors: [["app-modal"]],
        decls: 28,
        vars: 2,
        consts: [[1, "modal-header"], [1, "white-text", "mb-2", "mt-2", "font-weight-bold", "fas"], [1, "green-text", "font-weight-bold"], ["type", "button", "aria-label", "Close", 1, "btn", "btn-close", "white-text", 3, "click"], [1, "modal-body", "py-4", "text-center", "expansionCard"], [1, "figure"], ["aria-setsize", "20", "id", "profile-img", "src", "./assets/images/T.png", "alt", "", 1, "profile-img-card", "img-fluid", "rounded"], [1, "figure-caption", "text-center", "text-capitalize"], [1, "text-white", "rgba-stylish-strong", "py-4", "px-5", "z-depth-2", 2, "border-bottom", "2rem"], [3, "formGroup", 4, "ngIf"], ["class", "row d-flex align-items-lg-center border-bottom-0 ", 4, "ngIf"], ["hidden", "", 1, "list-group-horizontal", "mb-4", "col-md-12"], ["type", "button", 1, "fa-pull-left", "btn", "btn-primary"], ["type", "button", 1, "fa-pull-right", "btn", "btn-secondary", 3, "click"], [1, "modal-content"], [1, "modal-footer", "fal"], ["type", "checkbox", "id", "checkbox7", 1, "form-check-input"], ["for", "checkbox7", 1, "form-check-label", "white-text"], ["href", "#", 1, "green-text", "font-weight-bold"], [3, "formGroup"], [1, "form-outline"], ["mdbInput", "", "type", "text", "id", "typeText", "formControlName", "userName", "required", "", 1, "form-control", 3, "mdbValidate"], ["for", "typeText", 1, "form-label"], [4, "ngIf"], ["mdbInput", "", "type", "password", "id", "typeOldPassword", "formControlName", "oldPassword", "required", "", "minlength", "1", 1, "form-control", 3, "mdbValidate"], ["for", "typeOldPassword", 1, "form-label"], ["class", "text-danger error-input", "style", "white-space: pre-line;  font-size: 14px;", 4, "ngIf"], [1, "my-1", "text-black-50"], [1, "form-outline", "text-black-50"], ["mdbInput", "", "type", "password", "id", "typePassword", "formControlName", "password", "required", "", "minlength", "3", 1, "form-control", 3, "mdbValidate"], ["mdbLabel", "", "for", "typePassword", 1, "form-label", "form-white"], ["mdbInput", "", "type", "password", "id", "typeConfirmPassword", "formControlName", "confirmPassword", "required", "", "minlength", "3", 1, "form-control", 3, "mdbValidate"], ["mdbLabel", "", "for", "typeConfirmPassword", 1, "form-label", "form-white"], [1, "text-danger", "error-input", 2, "white-space", "pre-line", "font-size", "14px"], [1, "row", "d-flex", "align-items-lg-center", "border-bottom-0"], [1, "text-center", "mb-2", "col-md-12", "border-bottom-0"], ["type", "button", 1, "btn", "btn-success", "btn-block", "btn-rounded", "z-depth-1", "waves-effect", "waves-light", "border-bottom-0", 2, "margin-bottom", "0", 3, "click"]],
        template: function ReplacePassFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "REPLACE PASSWORD");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "strong");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " FORM");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReplacePassFormComponent_Template_button_click_7_listener() {
              return ctx.modalRef.close("xbutton");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "figure", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "img", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "figcaption", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Tadiran Telecom");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, ReplacePassFormComponent_form_14_Template, 37, 16, "form", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, ReplacePassFormComponent_div_15_Template, 4, 0, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Save changes");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ReplacePassFormComponent_Template_button_click_19_listener() {
              return ctx.modalRef.close();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Close");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Subscribe to our ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, " newsletter?");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isSuccessful);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isSuccessful);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_7__.MdbFormControlComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_7__.MdbInputDirective, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__.MdbInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__.MdbValidateDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_7__.MdbLabelDirective, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__.MdbErrorDirective, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__.MdbSuccessDirective],
        pipes: [_pipes_login_error_message_pipe__WEBPACK_IMPORTED_MODULE_1__.LoginErrorMessagePipe, _pipes_api_error_message_pipe__WEBPACK_IMPORTED_MODULE_2__.ApiErrorMessagePipe],
        styles: [".fa[_ngcontent-%COMP%], .fab[_ngcontent-%COMP%], .fad[_ngcontent-%COMP%], .fal[_ngcontent-%COMP%], .far[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%] {\r\n  -moz-osx-font-smoothing:grayscale;\r\n  -webkit-font-smoothing:antialiased;\r\n  display:inline-block;\r\n  font-style:normal;\r\n  font-feature-settings:normal;\r\n  font-variant:normal;\r\n  text-rendering:auto;line-height:1\r\n}\r\n\r\n.fa-lg[_ngcontent-%COMP%] {\r\n  font-size:1.33333em;\r\n  line-height:.75em;\r\n  vertical-align:-.0667em\r\n}\r\n\r\n\r\n\r\n.fa-xs[_ngcontent-%COMP%] {font-size:.75em}\r\n\r\n.fa-sm[_ngcontent-%COMP%] {font-size:.875em}\r\n\r\n.fa-1x[_ngcontent-%COMP%] {font-size:1em}\r\n\r\n.fa-2x[_ngcontent-%COMP%] {font-size:2em}\r\n\r\n.fa-3x[_ngcontent-%COMP%] {font-size:3em}\r\n\r\n.fa-4x[_ngcontent-%COMP%] {font-size:4em}\r\n\r\n.fa-5x[_ngcontent-%COMP%] {font-size:5em}\r\n\r\n.fa-6x[_ngcontent-%COMP%] {font-size:6em}\r\n\r\n.fa-7x[_ngcontent-%COMP%] {font-size:7em}\r\n\r\n.fa-8x[_ngcontent-%COMP%] {font-size:8em}\r\n\r\n.fa-9x[_ngcontent-%COMP%] {font-size:9em}\r\n\r\n.fa-10x[_ngcontent-%COMP%] {font-size:10em}\r\n\r\n.fa-fw[_ngcontent-%COMP%] {text-align:center;width:1.25em}\r\n\r\n.fa-ul[_ngcontent-%COMP%] {list-style-type:none;margin-left:2.5em;padding-left:0}\r\n\r\n.fa-ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%] {position:relative}\r\n\r\n.fa-li[_ngcontent-%COMP%] {left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}\r\n\r\n.fa-border[_ngcontent-%COMP%] {border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}\r\n\r\n.fa-pull-left[_ngcontent-%COMP%] {float:left}\r\n\r\n.fa-pull-right[_ngcontent-%COMP%] {float:right}\r\n\r\n.fa.fa-pull-left[_ngcontent-%COMP%], .fab.fa-pull-left[_ngcontent-%COMP%], .fal.fa-pull-left[_ngcontent-%COMP%], .far.fa-pull-left[_ngcontent-%COMP%], .fas.fa-pull-left[_ngcontent-%COMP%] {\r\n  margin-right:.3em\r\n}\r\n\r\n.input-with-pre-icon[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {left:36px;right:auto;right:initial}\r\n\r\n.fa.fa-pull-right[_ngcontent-%COMP%], .fab.fa-pull-right[_ngcontent-%COMP%], .fal.fa-pull-right[_ngcontent-%COMP%], .far.fa-pull-right[_ngcontent-%COMP%], .fas.fa-pull-right[_ngcontent-%COMP%] {\r\n  margin-left:.3em\r\n}\r\n\r\n.fa-spin[_ngcontent-%COMP%] {\r\n  animation:fa-spin 2s linear infinite\r\n}\r\n\r\n.fa[_ngcontent-%COMP%], .far[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%] {\r\n  font-family: \"Font Awesome 5 Free\", serif\r\n}\r\n\r\n.fa[_ngcontent-%COMP%], .fas[_ngcontent-%COMP%] {\r\n  font-weight:900\r\n}\r\n\r\n.v-btn__content[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n  color: inherit;\r\n  display: flex;\r\n  flex: 1 0 auto;\r\n  justify-content: inherit;\r\n  line-height: normal;\r\n  position: relative;\r\n  transition: inherit;\r\n}\r\n\r\n.v-btn__content[_ngcontent-%COMP%] {\r\n  letter-spacing: normal;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGxhY2UtcGFzcy1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLGlDQUFpQztFQUNqQyxrQ0FBa0M7RUFDbEMsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQiw0QkFBbUI7RUFBbkIsbUJBQW1CO0VBQ25CLG1CQUFtQixDQUFDO0FBQ3RCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQjtBQUNGOztBQUNBLEdBQUc7O0FBQ0gsUUFBUSxlQUFlOztBQUV2QixRQUFRLGdCQUFnQjs7QUFFeEIsUUFBUSxhQUFhOztBQUVyQixRQUFRLGFBQWE7O0FBRXJCLFFBQVEsYUFBYTs7QUFFckIsUUFBUSxhQUFhOztBQUVyQixRQUFRLGFBQWE7O0FBRXJCLFFBQVEsYUFBYTs7QUFFckIsUUFBUSxhQUFhOztBQUVyQixRQUFRLGFBQWE7O0FBRXJCLFFBQVEsYUFBYTs7QUFFckIsU0FBUyxjQUFjOztBQUV2QixRQUFRLGlCQUFpQixDQUFDLFlBQVk7O0FBRXRDLFFBQVEsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsY0FBYzs7QUFFN0QsV0FBVyxpQkFBaUI7O0FBRTVCLFFBQVEsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixDQUFDLFNBQVMsQ0FBQyxtQkFBbUI7O0FBRW5GLFlBQVksdUJBQXVCLENBQUMsa0JBQWtCLENBQUMsd0JBQXdCOztBQUUvRSxlQUFlLFVBQVU7O0FBRXpCLGdCQUFnQixXQUFXOztBQUUzQjtFQUNFO0FBQ0Y7O0FBRUEsNEJBQTRCLFNBQVMsQ0FBQyxVQUFZLENBQVosYUFBYTs7QUFHbkQ7RUFDRTtBQUNGOztBQUVBO0VBRUU7QUFDRjs7QUFJQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRTtBQUNGOztBQUdBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBYztFQUNkLHdCQUF3QjtFQUN4QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFHQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0F5WEMiLCJmaWxlIjoicmVwbGFjZS1wYXNzLWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmZhLC5mYWIsLmZhZCwuZmFsLC5mYXIsLmZhcyB7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlO1xyXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zdHlsZTpub3JtYWw7XHJcbiAgZm9udC12YXJpYW50Om5vcm1hbDtcclxuICB0ZXh0LXJlbmRlcmluZzphdXRvO2xpbmUtaGVpZ2h0OjFcclxufVxyXG5cclxuLmZhLWxnIHtcclxuICBmb250LXNpemU6MS4zMzMzM2VtO1xyXG4gIGxpbmUtaGVpZ2h0Oi43NWVtO1xyXG4gIHZlcnRpY2FsLWFsaWduOi0uMDY2N2VtXHJcbn1cclxuLyoqL1xyXG4uZmEteHMge2ZvbnQtc2l6ZTouNzVlbX1cclxuXHJcbi5mYS1zbSB7Zm9udC1zaXplOi44NzVlbX1cclxuXHJcbi5mYS0xeCB7Zm9udC1zaXplOjFlbX1cclxuXHJcbi5mYS0yeCB7Zm9udC1zaXplOjJlbX1cclxuXHJcbi5mYS0zeCB7Zm9udC1zaXplOjNlbX1cclxuXHJcbi5mYS00eCB7Zm9udC1zaXplOjRlbX1cclxuXHJcbi5mYS01eCB7Zm9udC1zaXplOjVlbX1cclxuXHJcbi5mYS02eCB7Zm9udC1zaXplOjZlbX1cclxuXHJcbi5mYS03eCB7Zm9udC1zaXplOjdlbX1cclxuXHJcbi5mYS04eCB7Zm9udC1zaXplOjhlbX1cclxuXHJcbi5mYS05eCB7Zm9udC1zaXplOjllbX1cclxuXHJcbi5mYS0xMHgge2ZvbnQtc2l6ZToxMGVtfVxyXG5cclxuLmZhLWZ3IHt0ZXh0LWFsaWduOmNlbnRlcjt3aWR0aDoxLjI1ZW19XHJcblxyXG4uZmEtdWwge2xpc3Qtc3R5bGUtdHlwZTpub25lO21hcmdpbi1sZWZ0OjIuNWVtO3BhZGRpbmctbGVmdDowfVxyXG5cclxuLmZhLXVsPmxpIHtwb3NpdGlvbjpyZWxhdGl2ZX1cclxuXHJcbi5mYS1saSB7bGVmdDotMmVtO3Bvc2l0aW9uOmFic29sdXRlO3RleHQtYWxpZ246Y2VudGVyO3dpZHRoOjJlbTtsaW5lLWhlaWdodDppbmhlcml0fVxyXG5cclxuLmZhLWJvcmRlciB7Ym9yZGVyOi4wOGVtIHNvbGlkICNlZWU7Ym9yZGVyLXJhZGl1czouMWVtO3BhZGRpbmc6LjJlbSAuMjVlbSAuMTVlbX1cclxuXHJcbi5mYS1wdWxsLWxlZnQge2Zsb2F0OmxlZnR9XHJcblxyXG4uZmEtcHVsbC1yaWdodCB7ZmxvYXQ6cmlnaHR9XHJcblxyXG4uZmEuZmEtcHVsbC1sZWZ0LC5mYWIuZmEtcHVsbC1sZWZ0LC5mYWwuZmEtcHVsbC1sZWZ0LC5mYXIuZmEtcHVsbC1sZWZ0LC5mYXMuZmEtcHVsbC1sZWZ0IHtcclxuICBtYXJnaW4tcmlnaHQ6LjNlbVxyXG59XHJcblxyXG4uaW5wdXQtd2l0aC1wcmUtaWNvbiBsYWJlbCB7bGVmdDozNnB4O3JpZ2h0OmluaXRpYWx9XHJcblxyXG5cclxuLmZhLmZhLXB1bGwtcmlnaHQsLmZhYi5mYS1wdWxsLXJpZ2h0LC5mYWwuZmEtcHVsbC1yaWdodCwuZmFyLmZhLXB1bGwtcmlnaHQsLmZhcy5mYS1wdWxsLXJpZ2h0IHtcclxuICBtYXJnaW4tbGVmdDouM2VtXHJcbn1cclxuXHJcbi5mYS1zcGluIHtcclxuICAtd2Via2l0LWFuaW1hdGlvbjpmYS1zcGluIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb246ZmEtc3BpbiAycyBsaW5lYXIgaW5maW5pdGVcclxufVxyXG5cclxuXHJcblxyXG4uZmEsLmZhciwuZmFzIHtcclxuICBmb250LWZhbWlseTogXCJGb250IEF3ZXNvbWUgNSBGcmVlXCIsIHNlcmlmXHJcbn1cclxuXHJcbi5mYSwuZmFzIHtcclxuICBmb250LXdlaWdodDo5MDBcclxufVxyXG5cclxuXHJcbi52LWJ0bl9fY29udGVudCB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXg6IDEgMCBhdXRvO1xyXG4gIGp1c3RpZnktY29udGVudDogaW5oZXJpdDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2l0aW9uOiBpbmhlcml0O1xyXG59XHJcblxyXG5cclxuLnYtYnRuX19jb250ZW50IHtcclxuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG59XHJcblxyXG5cclxuLypcclxuQHVzZSAnbWRiLWFuZ3VsYXItdWkta2l0L2Fzc2V0cy9zY3NzL2ZyZWUvY2FyZHMvX2Zvcm0tY29udHJvbCc7XHJcblxyXG5tZGItZm9ybS1jb250cm9sIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuXHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmctdG9wOiA0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDMuMjhweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBsaW5lYXI7XHJcblxyXG4gICY6Zm9jdXMge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgbGluZWFyO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMTI2NmYxO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDAgMXB4ICMxMjY2ZjE7XHJcbiAgfVxyXG4gICYuZm9ybS1jb250cm9sLXNtIHtcclxuICAgIGZvbnQtc2l6ZTogMC43NzVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gIH1cclxuICAmLmZvcm0tY29udHJvbC1sZyB7XHJcbiAgICBsaW5lLWhlaWdodDogMi4xNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uc2VsZWN0IHtcclxuICB+IC5mb3JtLWxhYmVsIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6ICRmb3JtLWxhYmVsLWxlZnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogJGZvcm0tbGFiZWwtcGFkZGluZy10b3A7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcclxuICAgIHRyYW5zaXRpb246ICRmb3JtLWxhYmVsLXRyYW5zaXRpb247XHJcbiAgICBjb2xvcjogJGZvcm0tbGFiZWwtY29sb3I7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuICB+IC5mb3JtLW5vdGNoIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBkaXYge1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgYm9yZGVyOiAkYm9yZGVyLXdpZHRoIHNvbGlkO1xyXG4gICAgICBib3JkZXItY29sb3I6ICRmb3JtLW5vdGNoLWRpdi1ib3JkZXItY29sb3I7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gICAgLmZvcm0tbm90Y2gtbGVhZGluZyB7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogJGZvcm0tbm90Y2gtbGVhZGluZy13aWR0aDtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAkZm9ybS1ub3RjaC1sZWFkaW5nLWJvcmRlci1yYWRpdXMgMCAwICRmb3JtLW5vdGNoLWxlYWRpbmctYm9yZGVyLXJhZGl1cztcclxuICAgIH1cclxuICAgIC5mb3JtLW5vdGNoLW1pZGRsZSB7XHJcbiAgICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gICAgICB3aWR0aDogYXV0bztcclxuICAgICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAjeyRmb3JtLW5vdGNoLW1pZGRsZS1tYXgtd2lkdGh9KTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmZvcm0tbm90Y2gtdHJhaWxpbmcge1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAgJGZvcm0tbm90Y2gtdHJhaWxpbmctYm9yZGVyLXJhZGl1cyAkZm9ybS1ub3RjaC10cmFpbGluZy1ib3JkZXItcmFkaXVzIDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYuZm9ybS1jb250cm9sOm5vdCgucGxhY2Vob2xkZXItYWN0aXZlKTo6cGxhY2Vob2xkZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgJiAuZm9ybS1jb250cm9sOmZvY3VzLFxyXG4gICYuYWN0aXZlIHtcclxuICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuICB9XHJcbiAgJiAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLy8gJjpmb2N1cyB+IC5mb3JtLWxhYmVsLFxyXG4gICYuYWN0aXZlIH4gLmZvcm0tbGFiZWwge1xyXG4gICAgdHJhbnNmb3JtOiAkaW5wdXQtZm9jdXMtYWN0aXZlLWxhYmVsLXRyYW5zZm9ybTtcclxuICB9XHJcbiAgJiAuZm9ybS1jb250cm9sOmZvY3VzIH4gLmZvcm0tbGFiZWwge1xyXG4gICAgY29sb3I6ICRpbnB1dC1mb2N1cy1sYWJlbC1jb2xvcjtcclxuICB9XHJcbiAgJiAuZm9ybS1jb250cm9sOmZvY3VzIH4gLmZvcm0tbm90Y2ggLmZvcm0tbm90Y2gtbWlkZGxlLFxyXG4gICYgLmZvcm0tY29udHJvbC5hY3RpdmUgfiAuZm9ybS1ub3RjaCAuZm9ybS1ub3RjaC1taWRkbGUge1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogJGlucHV0LXRyYW5zaXRpb247XHJcbiAgfVxyXG4gICY6Zm9jdXMgfiAuZm9ybS1ub3RjaCAuZm9ybS1ub3RjaC1taWRkbGUge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogJGlucHV0LWZvY3VzLWJvcmRlci13aWR0aCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjtcclxuICB9XHJcbiAgJjpmb2N1cyB+IC5mb3JtLW5vdGNoIC5mb3JtLW5vdGNoLWxlYWRpbmcsXHJcbiAgJi5hY3RpdmUgfiAuZm9ybS1ub3RjaCAuZm9ybS1ub3RjaC1sZWFkaW5nIHtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgIHRyYW5zaXRpb246ICRpbnB1dC10cmFuc2l0aW9uO1xyXG4gIH1cclxuICAmOmZvY3VzIH4gLmZvcm0tbm90Y2ggLmZvcm0tbm90Y2gtbGVhZGluZyB7XHJcbiAgICBib3JkZXItdG9wOiAkaW5wdXQtZm9jdXMtYm9yZGVyLXdpZHRoIHNvbGlkICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItYm90dG9tOiAkaW5wdXQtZm9jdXMtYm9yZGVyLXdpZHRoIHNvbGlkICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I7XHJcbiAgICBib3JkZXItbGVmdDogJGlucHV0LWZvY3VzLWJvcmRlci13aWR0aCBzb2xpZCAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yO1xyXG4gIH1cclxuICAmOmZvY3VzIH4gLmZvcm0tbm90Y2ggLmZvcm0tbm90Y2gtdHJhaWxpbmcsXHJcbiAgJi5hY3RpdmUgfiAuZm9ybS1ub3RjaCAuZm9ybS1ub3RjaC10cmFpbGluZyB7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIHRyYW5zaXRpb246ICRpbnB1dC10cmFuc2l0aW9uO1xyXG4gIH1cclxuICAmOmZvY3VzIH4gLmZvcm0tbm90Y2ggLmZvcm0tbm90Y2gtdHJhaWxpbmcge1xyXG4gICAgYm9yZGVyLXRvcDogJGlucHV0LWZvY3VzLWJvcmRlci13aWR0aCBzb2xpZDtcclxuICAgIGJvcmRlci1ib3R0b206ICRpbnB1dC1mb2N1cy1ib3JkZXItd2lkdGggc29saWQ7XHJcbiAgICBib3JkZXItcmlnaHQ6ICRpbnB1dC1mb2N1cy1ib3JkZXItd2lkdGggc29saWQ7XHJcbiAgICBib3JkZXItY29sb3I6ICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I7XHJcbiAgfVxyXG4gICY6ZGlzYWJsZWQsXHJcbiAgJi5kaXNhYmxlZCxcclxuICAmW3JlYWRvbmx5XSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjtcclxuICB9XHJcbiAgJi5mb3JtLWNvbnRyb2wtbGcge1xyXG4gICAgZm9udC1zaXplOiAkaW5wdXQtZm9udC1zaXplLWxnO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRpbnB1dC1saW5lLWhlaWdodC1sZztcclxuICAgIHBhZGRpbmctbGVmdDogJGlucHV0LXBhZGRpbmctbGVmdC1sZztcclxuICAgIHBhZGRpbmctcmlnaHQ6ICRpbnB1dC1wYWRkaW5nLXJpZ2h0LWxnO1xyXG4gICAgfiAuZm9ybS1sYWJlbCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAkZm9ybS1sYWJlbC1wYWRkaW5nLXRvcC1sZztcclxuICAgIH1cclxuICAgICY6Zm9jdXMgfiAuZm9ybS1sYWJlbCxcclxuICAgICYuYWN0aXZlIH4gLmZvcm0tbGFiZWwge1xyXG4gICAgICB0cmFuc2Zvcm06ICRpbnB1dC1mb2N1cy1hY3RpdmUtbGFiZWwtdHJhbnNmb3JtLWxnO1xyXG4gICAgfVxyXG4gIH1cclxuICAmLmZvcm0tY29udHJvbC1zbSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6ICRpbnB1dC1wYWRkaW5nLWxlZnQtc207XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAkaW5wdXQtcGFkZGluZy1yaWdodC1zbTtcclxuICAgIHBhZGRpbmctdG9wOiAkaW5wdXQtcGFkZGluZy10b3Atc207XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogJGlucHV0LXBhZGRpbmctYm90dG9tLXNtO1xyXG4gICAgZm9udC1zaXplOiAkaW5wdXQtZm9udC1zaXplLXNtO1xyXG4gICAgbGluZS1oZWlnaHQ6ICRpbnB1dC1saW5lLWhlaWdodC1zbTtcclxuICAgIH4gLmZvcm0tbGFiZWwge1xyXG4gICAgICBwYWRkaW5nLXRvcDogJGZvcm0tbGFiZWwtcGFkZGluZy10b3Atc207XHJcbiAgICAgIGZvbnQtc2l6ZTogJGZvcm0tbGFiZWwtZm9udC1zaXplLXNtO1xyXG4gICAgfVxyXG4gICAgJjpmb2N1cyB+IC5mb3JtLWxhYmVsLFxyXG4gICAgJi5hY3RpdmUgfiAuZm9ybS1sYWJlbCB7XHJcbiAgICAgIHRyYW5zZm9ybTogJGlucHV0LWZvY3VzLWFjdGl2ZS1sYWJlbC10cmFuc2Zvcm0tc207XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4kZm9ybS1sYWJlbC1sZWZ0OiAxLjc1cmVtO1xyXG5cclxuXHJcbi5mb3JtLW91dGxpbmUge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLmZvcm0taGVscGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NWVtO1xyXG4gICAgY29sb3I6ICM3NTc1NzU7XHJcbiAgICAuZm9ybS1jb3VudGVyIHtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAudHJhaWxpbmcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBsZWZ0OiBpbml0aWFsO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB9XHJcblxyXG4gIC5mb3JtLWljb24tdHJhaWxpbmcge1xyXG4gICAgcGFkZGluZy1yaWdodDogMnJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmZvcm0tY29udHJvbCB7XHJcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6ICRpbnB1dC1wYWRkaW5nLXRvcDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAkaW5wdXQtcGFkZGluZy1ib3R0b207XHJcbiAgICBwYWRkaW5nLWxlZnQ6ICRpbnB1dC1wYWRkaW5nLWxlZnQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAkaW5wdXQtcGFkZGluZy1yaWdodDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgdHJhbnNpdGlvbjogJGlucHV0LXRyYW5zaXRpb247XHJcbiAgICB+IC5mb3JtLWxhYmVsIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIG1heC13aWR0aDogOTAlO1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgbGVmdDogJGZvcm0tbGFiZWwtbGVmdDtcclxuICAgICAgcGFkZGluZy10b3A6ICRmb3JtLWxhYmVsLXBhZGRpbmctdG9wO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogMCAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiAkZm9ybS1sYWJlbC10cmFuc2l0aW9uO1xyXG4gICAgICBjb2xvcjogJGZvcm0tbGFiZWwtY29sb3I7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICB+IC5mb3JtLW5vdGNoIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiAkYm9yZGVyLXdpZHRoIHNvbGlkO1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGZvcm0tbm90Y2gtZGl2LWJvcmRlci1jb2xvcjtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgICB9XHJcbiAgICAgIC5mb3JtLW5vdGNoLWxlYWRpbmcge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogJGZvcm0tbm90Y2gtbGVhZGluZy13aWR0aDtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJGZvcm0tbm90Y2gtbGVhZGluZy1ib3JkZXItcmFkaXVzIDAgMCAkZm9ybS1ub3RjaC1sZWFkaW5nLWJvcmRlci1yYWRpdXM7XHJcbiAgICAgIH1cclxuICAgICAgLmZvcm0tbm90Y2gtbWlkZGxlIHtcclxuICAgICAgICBmbGV4OiAwIDAgYXV0bztcclxuICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtICN7JGZvcm0tbm90Y2gtbWlkZGxlLW1heC13aWR0aH0pO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgICAgLmZvcm0tbm90Y2gtdHJhaWxpbmcge1xyXG4gICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAkZm9ybS1ub3RjaC10cmFpbGluZy1ib3JkZXItcmFkaXVzICRmb3JtLW5vdGNoLXRyYWlsaW5nLWJvcmRlci1yYWRpdXMgMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJjpub3QoLnBsYWNlaG9sZGVyLWFjdGl2ZSk6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgIH1cclxuICAgICY6Zm9jdXMsXHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgJjpmb2N1cyB+IC5mb3JtLWxhYmVsLFxyXG4gICAgJi5hY3RpdmUgfiAuZm9ybS1sYWJlbCB7XHJcbiAgICAgIHRyYW5zZm9ybTogJGlucHV0LWZvY3VzLWFjdGl2ZS1sYWJlbC10cmFuc2Zvcm07XHJcbiAgICB9XHJcbiAgICAmOmZvY3VzIH4gLmZvcm0tbGFiZWwge1xyXG4gICAgICBjb2xvcjogJGlucHV0LWZvY3VzLWxhYmVsLWNvbG9yO1xyXG4gICAgfVxyXG4gICAgJjpmb2N1cyB+IC5mb3JtLW5vdGNoIC5mb3JtLW5vdGNoLW1pZGRsZSxcclxuICAgICYuYWN0aXZlIH4gLmZvcm0tbm90Y2ggLmZvcm0tbm90Y2gtbWlkZGxlIHtcclxuICAgICAgYm9yZGVyLXRvcDogbm9uZTtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgdHJhbnNpdGlvbjogJGlucHV0LXRyYW5zaXRpb247XHJcbiAgICB9XHJcbiAgICAmOmZvY3VzIH4gLmZvcm0tbm90Y2ggLmZvcm0tbm90Y2gtbWlkZGxlIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogJGlucHV0LWZvY3VzLWJvcmRlci13aWR0aCBzb2xpZDtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAkaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yO1xyXG4gICAgfVxyXG4gICAgJjpmb2N1cyB+IC5mb3JtLW5vdGNoIC5mb3JtLW5vdGNoLWxlYWRpbmcsXHJcbiAgICAmLmFjdGl2ZSB+IC5mb3JtLW5vdGNoIC5mb3JtLW5vdGNoLWxlYWRpbmcge1xyXG4gICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgIHRyYW5zaXRpb246ICRpbnB1dC10cmFuc2l0aW9uO1xyXG4gICAgfVxyXG4gICAgJjpmb2N1cyB+IC5mb3JtLW5vdGNoIC5mb3JtLW5vdGNoLWxlYWRpbmcge1xyXG4gICAgICBib3JkZXItdG9wOiAkaW5wdXQtZm9jdXMtYm9yZGVyLXdpZHRoIHNvbGlkICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I7XHJcbiAgICAgIGJvcmRlci1ib3R0b206ICRpbnB1dC1mb2N1cy1ib3JkZXItd2lkdGggc29saWQgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjtcclxuICAgICAgYm9yZGVyLWxlZnQ6ICRpbnB1dC1mb2N1cy1ib3JkZXItd2lkdGggc29saWQgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjtcclxuICAgIH1cclxuICAgICY6Zm9jdXMgfiAuZm9ybS1ub3RjaCAuZm9ybS1ub3RjaC10cmFpbGluZyxcclxuICAgICYuYWN0aXZlIH4gLmZvcm0tbm90Y2ggLmZvcm0tbm90Y2gtdHJhaWxpbmcge1xyXG4gICAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgICAgdHJhbnNpdGlvbjogJGlucHV0LXRyYW5zaXRpb247XHJcbiAgICB9XHJcbiAgICAmOmZvY3VzIH4gLmZvcm0tbm90Y2ggLmZvcm0tbm90Y2gtdHJhaWxpbmcge1xyXG4gICAgICBib3JkZXItdG9wOiAkaW5wdXQtZm9jdXMtYm9yZGVyLXdpZHRoIHNvbGlkICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I7XHJcbiAgICAgIGJvcmRlci1ib3R0b206ICRpbnB1dC1mb2N1cy1ib3JkZXItd2lkdGggc29saWQgJGlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiAkaW5wdXQtZm9jdXMtYm9yZGVyLXdpZHRoIHNvbGlkICRpbnB1dC1mb2N1cy1ib3JkZXItY29sb3I7XHJcbiAgICB9XHJcbiAgICA6ZGlzYWJsZWQsXHJcbiAgICAmLmRpc2FibGVkLFxyXG4gICAgJltyZWFkb25seV0ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkaW5wdXQtZGlzYWJsZWQtYmFja2dyb3VuZC1jb2xvcjtcclxuICAgIH1cclxuICAgICYuZm9ybS1jb250cm9sLWxnIHtcclxuICAgICAgZm9udC1zaXplOiAkaW5wdXQtZm9udC1zaXplLWxnO1xyXG4gICAgICBsaW5lLWhlaWdodDogJGlucHV0LWxpbmUtaGVpZ2h0LWxnO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6ICRpbnB1dC1wYWRkaW5nLWxlZnQtbGc7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6ICRpbnB1dC1wYWRkaW5nLXJpZ2h0LWxnO1xyXG4gICAgICB+IC5mb3JtLWxhYmVsIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogJGZvcm0tbGFiZWwtcGFkZGluZy10b3AtbGc7XHJcbiAgICAgIH1cclxuICAgICAgJjpmb2N1cyB+IC5mb3JtLWxhYmVsLFxyXG4gICAgICAmLmFjdGl2ZSB+IC5mb3JtLWxhYmVsIHtcclxuICAgICAgICB0cmFuc2Zvcm06ICRpbnB1dC1mb2N1cy1hY3RpdmUtbGFiZWwtdHJhbnNmb3JtLWxnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmLmZvcm0tY29udHJvbC1zbSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogJGlucHV0LXBhZGRpbmctbGVmdC1zbTtcclxuICAgICAgcGFkZGluZy1yaWdodDogJGlucHV0LXBhZGRpbmctcmlnaHQtc207XHJcbiAgICAgIHBhZGRpbmctdG9wOiAkaW5wdXQtcGFkZGluZy10b3Atc207XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAkaW5wdXQtcGFkZGluZy1ib3R0b20tc207XHJcbiAgICAgIGZvbnQtc2l6ZTogJGlucHV0LWZvbnQtc2l6ZS1zbTtcclxuICAgICAgbGluZS1oZWlnaHQ6ICRpbnB1dC1saW5lLWhlaWdodC1zbTtcclxuICAgICAgfiAuZm9ybS1sYWJlbCB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6ICRmb3JtLWxhYmVsLXBhZGRpbmctdG9wLXNtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogJGZvcm0tbGFiZWwtZm9udC1zaXplLXNtO1xyXG4gICAgICB9XHJcbiAgICAgIDpmb2N1cyB+IC5mb3JtLWxhYmVsLFxyXG4gICAgICAmLmFjdGl2ZSB+IC5mb3JtLWxhYmVsIHtcclxuICAgICAgICB0cmFuc2Zvcm06ICRpbnB1dC1mb2N1cy1hY3RpdmUtbGFiZWwtdHJhbnNmb3JtLXNtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLmZvcm0td2hpdGUge1xyXG4gICAgLmZvcm0tY29udHJvbCB7XHJcbiAgICAgIGNvbG9yOiAkZm9ybS13aGl0ZS1pbnB1dC1jb2xvcjtcclxuICAgICAgfiAuZm9ybS1sYWJlbCB7XHJcbiAgICAgICAgY29sb3I6ICRmb3JtLXdoaXRlLWxhYmVsLWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICAgIH4gLmZvcm0tbm90Y2gge1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICRmb3JtLXdoaXRlLW5vdGNoLWRpdi1ib3JkZXItY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICY6Zm9jdXMgfiAuZm9ybS1sYWJlbCB7XHJcbiAgICAgICAgY29sb3I6ICRmb3JtLXdoaXRlLWlucHV0LWZvY3VzLWxhYmVsLWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICAgICY6Zm9jdXMgfiAuZm9ybS1ub3RjaCAuZm9ybS1ub3RjaC1taWRkbGUge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJGZvcm0td2hpdGUtaW5wdXQtZm9jdXMtYm9yZGVyLWNvbG9yO1xyXG4gICAgICB9XHJcbiAgICAgICY6Zm9jdXMgfiAuZm9ybS1ub3RjaCAuZm9ybS1ub3RjaC1sZWFkaW5nIHtcclxuICAgICAgICBib3JkZXItdG9wOiAkaW5wdXQtZm9jdXMtYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLXdoaXRlLWlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAkaW5wdXQtZm9jdXMtYm9yZGVyLXdpZHRoIHNvbGlkICRmb3JtLXdoaXRlLWlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjtcclxuICAgICAgICBib3JkZXItbGVmdDogJGlucHV0LWZvY3VzLWJvcmRlci13aWR0aCBzb2xpZCAkZm9ybS13aGl0ZS1pbnB1dC1mb2N1cy1ib3JkZXItY29sb3I7XHJcbiAgICAgIH1cclxuICAgICAgJjpmb2N1cyB+IC5mb3JtLW5vdGNoIC5mb3JtLW5vdGNoLXRyYWlsaW5nIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRmb3JtLXdoaXRlLWlucHV0LWZvY3VzLWJvcmRlci1jb2xvcjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuKi9cclxuIl19 */"]
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


      var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../app.config */
      49670);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      40205);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/auth.service */
      88368);
      /* harmony import */


      var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/token-storage.service */
      93590);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _stories_pages_background1_background1Component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../stories/pages/background1/background1Component */
      23839);
      /* harmony import */


      var _stories_app_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../stories/app-menu/app-menu.component */
      72751);

      var Profile2Component = /*#__PURE__*/function () {
        function Profile2Component(authService, token, router) {
          _classCallCheck(this, Profile2Component);

          this.authService = authService;
          this.token = token;
          this.router = router;
          this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__.BehaviorSubject(null);
          this.isRefreshing = false;
          this.TOKEN_KEY = _app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.endpoints.TOKEN_KEY;
        }

        _createClass(Profile2Component, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = this.token.getUser();
            this.accessToken = this.currentUser.accessToken;
            this.refreshToken = this.currentUser.refreshToken;
          }
        }, {
          key: "openapp",
          value: function openapp() {
            var _this19 = this;

            console.log('window.location.origin.toString():  ' + window.location.origin.toString());
            this.router.navigate([]).then(function (result) {
              _this19.windowObjectReference = window.open(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.accServer.ACCWEBServers + '/accGCCS/'
              /*window.location.origin.toString()+"/profile"*/
              );
            });
            console.log('window.location.origin.toString():  ' + this.windowObjectReference.window.document.getElementById("profile_title").innerHTML);
            var promise = new Promise(function (resolve, reject) {
              _this19.windowObjectReference.window.document.getElementById("profile_title").innerHTML = "new title";
            });
            console.log('window.location.origin.toString():  ' + this.windowObjectReference.window.document.getElementById("profile_title").innerHTML);
          }
        }, {
          key: "forseRefreshToken",
          value: function forseRefreshToken() {
            var _this20 = this;

            if (!this.isRefreshing) {
              var token = this.token.getRefreshToken();
              if (token) this.authService.refreshToken(token).subscribe(function (data) {
                _this20.isRefreshing = false;

                _this20.token.saveToken(data.accessToken);

                _this20.token.saveRefreshToken(data.refreshToken);

                _this20.refreshTokenSubject.next(data.accessToken);

                _this20.currentUser = _this20.token.getUser();
                _this20.accessToken = _this20.token.getToken();
                _this20.refreshToken = _this20.token.getRefreshToken();
              }, function (err) {
                _this20.isRefreshing = false;

                _this20.token.signOut();

                return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err);
              });
            }
          }
        }, {
          key: "openNewTabForApp",
          value: function openNewTabForApp(appRequest) {
            var _this21 = this;

            var _appRequest$values = appRequest.values(),
                _appRequest$values2 = _slicedToArray(_appRequest$values, 2),
                webapp = _appRequest$values2[0],
                webappURLPrefix = _appRequest$values2[1];

            var newAccessToken = "";
            var newRefreshToken = "";
            var newCurrentUser = "";

            if (!this.isRefreshing) {
              var token = this.token.getRefreshToken();
              if (token) this.authService.webapptab(token, webapp).then(function (data) {
                _this21.isRefreshing = false;
                newAccessToken = data.accessToken;
                newRefreshToken = data.refreshToken;
                newCurrentUser = data;
              }, function (reject) {
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(reject.error);
              }).then(function () {
                _this21.router.navigate([]).then(function (result) {
                  _this21.windowObjectReference = window.open(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.accServer.ACCWEBServers + webappURLPrefix);
                }).then(function (result) {
                  _this21.windowObjectReference.window.sessionStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.endpoints.TOKEN_KEY, newAccessToken);

                  _this21.windowObjectReference.window.sessionStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.endpoints.REFRESHTOKEN_KEY, newRefreshToken);

                  _this21.windowObjectReference.window.sessionStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.endpoints.USER_KEY, JSON.stringify(newCurrentUser));
                }, function (err) {
                  _this21.isRefreshing = false;
                  return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err);
                });
              });
            }
          }
        }, {
          key: "openNewWinForApp",
          value: function openNewWinForApp(appRequest) {
            var _this22 = this;

            /*webapp: string, webappURLPrefix: string*/
            var _appRequest$values3 = appRequest.values(),
                _appRequest$values4 = _slicedToArray(_appRequest$values3, 2),
                webapp = _appRequest$values4[0],
                webappURLPrefix = _appRequest$values4[1];

            var newAccessToken = "";
            var newRefreshToken = "";
            var newCurrentUser = "";

            if (!this.isRefreshing) {
              var token = this.token.getRefreshToken();
              if (token) this.authService.webapptab(token, webapp).then(function (data) {
                _this22.isRefreshing = false;
                newAccessToken = data.accessToken;
                newRefreshToken = data.refreshToken;
                newCurrentUser = data;
              }, function (reject) {
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(reject.error);
              }).then(function (result) {
                _this22.windowObjectReference = window.open(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.accServer.ACCWEBServers + webappURLPrefix + 'start.html', 'C-Sharpcorner', 'scrollbars=no');
              }).then(function (result) {
                _this22.windowObjectReference.window.sessionStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.endpoints.TOKEN_KEY, newAccessToken);

                _this22.windowObjectReference.window.sessionStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.endpoints.REFRESHTOKEN_KEY, newRefreshToken);

                _this22.windowObjectReference.window.sessionStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.endpoints.USER_KEY, JSON.stringify(newCurrentUser));
              }, function (err) {
                _this22.isRefreshing = false;
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_6__.throwError)(err);
              });
            }
          }
        }]);

        return Profile2Component;
      }();

      Profile2Component.ɵfac = function Profile2Component_Factory(t) {
        return new (t || Profile2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
      };

      Profile2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: Profile2Component,
        selectors: [["profile2"]],
        decls: 8,
        vars: 0,
        consts: [["lang", "en"], ["charset", "UTF-8"], [3, "openNewWinForApp", "openNewTabForApp"]],
        template: function Profile2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "html", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "head");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "meta", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "title");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "body");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "storybook-background1");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "storybook-app-menu", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("openNewWinForApp", function Profile2Component_Template_storybook_app_menu_openNewWinForApp_7_listener($event) {
              return ctx.openNewWinForApp($event);
            })("openNewTabForApp", function Profile2Component_Template_storybook_app_menu_openNewTabForApp_7_listener($event) {
              return ctx.openNewTabForApp($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }
        },
        directives: [_stories_pages_background1_background1Component__WEBPACK_IMPORTED_MODULE_3__["default"], _stories_app_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_4__.AppMenuComponent],
        styles: [".storybook-profile2[_ngcontent-%COMP%] {\n  position: absolute;\n  width: inherit;\n  height: inherit;\n}\n\n.Desktop-1Login-1[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  flex-grow: 0;\n}\n\n\n\n\n\ndiv.relative[_ngcontent-%COMP%] {\n  position: relative;\n  width: inherit;\n  height: inherit;\n}\n\n.Frame-1[_ngcontent-%COMP%] {\n  width: 1920px;\n  height: 1080px;\n  flex-grow: 0;\n}\n\n.fa-pull-left[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.fa-pull-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\nimg.icon-1[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 305.7px;\n  height: 309px;\n  transform: rotate(0deg);\n  background-position: bottom;\n}\n\nimg.icon-2[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 372px;\n  height: 343px;\n  flex-grow: 0;\n}\n\n.storybook-profile2--primary[_ngcontent-%COMP%] {\n  background: linear-gradient(228.37deg, #EFF8FF 22.25%, #B0DCFF 88.18%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBQUY7O0FBS0EsK0VBQUE7O0FBRUE7Ozs7O0VBQUE7O0FBT0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBSkY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFQRjs7QUFVQTtFQUFlLFdBQUE7QUFOZjs7QUFRQTtFQUFnQixZQUFBO0FBSmhCOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFIRjs7QUFPQTtFQUVFLHNFQUFBO0FBTEYiLCJmaWxlIjoicHJvZmlsZTIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnN0b3J5Ym9vay1wcm9maWxlMiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxufVxyXG5cclxuLkRlc2t0b3AtMUxvZ2luLTEge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBmbGV4LWdyb3c6IDA7XHJcbn1cclxuXHJcblxyXG5cclxuLypiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjI4LjM3ZGVnLCAjRUZGOEZGIDIyLjI1JSwgI0IwRENGRiA4OC4xOCUpKi9cclxuXHJcbi8qLkRlc2t0b3AtMUxvZ2luLTEge1xyXG4gIHdpZHRoOiAxOTIwcHg7XHJcbiAgaGVpZ2h0OiAxMDgwcHg7XHJcbiAgZmxleC1ncm93OiAwO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgyMjguMzdkZWcsICNFRkY4RkYgMjIuMjUlLCAjQjBEQ0ZGIDg4LjE4JSk7XHJcbn0qL1xyXG5cclxuZGl2LnJlbGF0aXZlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IGluaGVyaXQ7XHJcbiAgaGVpZ2h0OiBpbmhlcml0O1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uRnJhbWUtMSB7XHJcbiAgd2lkdGg6IDE5MjBweDtcclxuICBoZWlnaHQ6IDEwODBweDtcclxuICBmbGV4LWdyb3c6IDA7XHJcbn1cclxuXHJcbi5mYS1wdWxsLWxlZnQge2Zsb2F0OmxlZnR9XHJcblxyXG4uZmEtcHVsbC1yaWdodCB7ZmxvYXQ6cmlnaHR9XHJcblxyXG5pbWcuaWNvbi0xIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDMwNS43cHg7XHJcbiAgaGVpZ2h0OiAzMDlweDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbn1cclxuXHJcbmltZy5pY29uLTIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDM3MnB4O1xyXG4gIGhlaWdodDogMzQzcHg7XHJcbiAgZmxleC1ncm93OiAwO1xyXG59XHJcblxyXG5cclxuLnN0b3J5Ym9vay1wcm9maWxlMi0tcHJpbWFyeSB7XHJcblxyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjguMzdkZWcsICNFRkY4RkYgMjIuMjUlLCAjQjBEQ0ZGIDg4LjE4JSk7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    96630:
    /*!**********************************************!*\
      !*** ./src/app/profile/profile.component.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileComponent": function ProfileComponent() {
          return (
            /* binding */
            _ProfileComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      26215);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      40205);
      /* harmony import */


      var _app_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../app.config */
      49670);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../_services/token-storage.service */
      93590);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../_services/auth.service */
      88368);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function ProfileComponent_div_0_li_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var role_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", role_r4, " ");
        }
      }

      function ProfileComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "header", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "accessToken:");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "refreshToken:");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProfileComponent_div_0_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r5.forseRefreshToken();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Refresh");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProfileComponent_div_0_Template_button_click_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r7.openNewTabForApp("GCCS", "/accGCCS/");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Open new tab for GCCS");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProfileComponent_div_0_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r8.openNewWinForApp("AGENT", "/accAgent/");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Open new tab for Vee");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProfileComponent_div_0_Template_button_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r9.openNewTabForApp("ACCREALTIME", "/accRealTime/");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Open new tab for WebRT");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Email:");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "ID:");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Web App:");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Roles:");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, ProfileComponent_div_0_li_40_Template, 2, 1, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Tadiran Azure");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "aeonix4cloud");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](47, "iframe", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "ul", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](51, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "h5", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "aeonix - SERVER");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, " Aeonix is a software only communications solution that consolidates disparate business applications into a single, fault tolerant platform. The Aeonix Unified Communications platform, Aeonix Contact Center(ACC), and Aeonix Dispatch Console (ADC), all reside in one virtual instance or COTS server. Aeonix runs on any virtualization platform including VMware, Hyper-V and cloud platforms such as AWS, and can easily port from one platform to another. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProfileComponent_div_0_Template_button_click_57_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r6);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r10.openapp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "h5", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "AccGCCS - SERVER");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](65, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "h5", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "AccGCCS - LOCAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "li", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "a", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](72, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "h5", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "AccWebRT - LOCAL");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "li", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "a", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](79, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "h5", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "AccAgent - SERVER");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, " Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.currentUser.username, " Profile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.accessToken, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.refreshToken, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.currentUser.email, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.currentUser.id, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.currentUser.webApp, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.currentUser.roles);
        }
      }

      function ProfileComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](0, " Please login.\n");
        }
      }

      var _ProfileComponent = /*#__PURE__*/function () {
        function _ProfileComponent(token, router, authService) {
          _classCallCheck(this, _ProfileComponent);

          this.token = token;
          this.router = router;
          this.authService = authService;
          this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
          this.isRefreshing = false;
          this.TOKEN_KEY = _app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.endpoints.TOKEN_KEY;
        }

        _createClass(_ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = this.token.getUser();
            this.accessToken = this.currentUser.accessToken;
            this.refreshToken = this.currentUser.refreshToken;
          }
        }, {
          key: "openapp",
          value: function openapp() {
            var _this23 = this;

            console.log('window.location.origin.toString():  ' + window.location.origin.toString());
            this.router.navigate([]).then(function (result) {
              _this23.windowObjectReference = window.open(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.accServer.ACCWEBServers + '/accGCCS/'
              /*window.location.origin.toString()+"/profile"*/
              );
            }); //console.log('window.location.origin.toString():  '+ this.windowObjectReference

            console.log('window.location.origin.toString():  ' + this.windowObjectReference.window.document.getElementById("profile_title").innerHTML);
            var promise = new Promise(function (resolve, reject) {
              _this23.windowObjectReference.window.document.getElementById("profile_title").innerHTML = "new title";
            }); //this.windowObjectReference.window.document.getElementById("profile_title").innerHTML = "new title";
            //this.windowObjectReference.window.document.done.

            console.log('window.location.origin.toString():  ' + this.windowObjectReference.window.document.getElementById("profile_title").innerHTML); //let { username, password } = this.loginForm.value;
            //username = this.loginForm.get(['username'])?.value.toString();
            //let password = this.loginForm.get(['password'])?.value.toString();
            //this.authenticationService.logout();
          }
        }, {
          key: "forseRefreshToken",
          value: function forseRefreshToken() {
            var _this24 = this;

            //@Value("${bezkoder.app.jwtExpirationMs}")
            if (!this.isRefreshing) {
              var token = this.token.getRefreshToken();
              if (token) this.authService.refreshToken(token).subscribe(function (data) {
                _this24.isRefreshing = false;

                _this24.token.saveToken(data.accessToken);

                _this24.token.saveRefreshToken(data.refreshToken);

                _this24.refreshTokenSubject.next(data.accessToken);

                _this24.currentUser = _this24.token.getUser();
                _this24.accessToken = _this24.token.getToken();
                _this24.refreshToken = _this24.token.getRefreshToken();
              }, function (err) {
                _this24.isRefreshing = false;

                _this24.token.signOut();

                return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(err);
              });
            }
          }
        }, {
          key: "openNewTabForApp",
          value: function openNewTabForApp(webapp, webappURLPrefix) {
            var _this25 = this;

            var newAccessToken = "";
            var newRefreshToken = "";
            var newCurrentUser = "";

            if (!this.isRefreshing) {
              var token = this.token.getRefreshToken();
              if (token) this.authService.webapptab(token, webapp).then(function (data) {
                _this25.isRefreshing = false;
                newAccessToken = data.accessToken;
                newRefreshToken = data.refreshToken;
                newCurrentUser = data;
              }, function (reject) {
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(reject.error);
              }).then(function () {
                _this25.router.navigate([]).then(function (result) {
                  _this25.windowObjectReference = window.open(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.accServer.ACCWEBServers + webappURLPrefix);
                }).then(function (result) {
                  _this25.windowObjectReference.window.sessionStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.endpoints.TOKEN_KEY, newAccessToken);

                  _this25.windowObjectReference.window.sessionStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.endpoints.REFRESHTOKEN_KEY, newRefreshToken);

                  _this25.windowObjectReference.window.sessionStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.endpoints.USER_KEY, JSON.stringify(newCurrentUser));
                }, function (err) {
                  _this25.isRefreshing = false;
                  return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(err);
                });
              });
            }
          }
        }, {
          key: "openNewWinForApp",
          value: function openNewWinForApp(webapp, webappURLPrefix) {
            var _this26 = this;

            var newAccessToken = "";
            var newRefreshToken = "";
            var newCurrentUser = "";

            if (!this.isRefreshing) {
              var token = this.token.getRefreshToken();
              if (token) this.authService.webapptab(token, webapp).then(function (data) {
                _this26.isRefreshing = false;
                newAccessToken = data.accessToken;
                newRefreshToken = data.refreshToken;
                newCurrentUser = data;
              }, function (reject) {
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(reject.error);
              }).then(function (result) {
                _this26.windowObjectReference = window.open(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.accServer.ACCWEBServers + webappURLPrefix + 'start.html', 'C-Sharpcorner', 'scrollbars=no');
              }).then(function (result) {
                _this26.windowObjectReference.window.sessionStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.endpoints.TOKEN_KEY, newAccessToken);

                _this26.windowObjectReference.window.sessionStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.endpoints.REFRESHTOKEN_KEY, newRefreshToken);

                _this26.windowObjectReference.window.sessionStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.endpoints.USER_KEY, JSON.stringify(newCurrentUser));
              }, function (err) {
                _this26.isRefreshing = false;
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(err);
              });
            }
          }
        }]);

        return _ProfileComponent;
      }();

      _ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || _ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
      };

      _ProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ProfileComponent,
        selectors: [["app-profile"]],
        decls: 3,
        vars: 2,
        consts: [["class", "container", 4, "ngIf", "ngIfElse"], ["loggedOut", ""], [1, "container"], [1, "background", "jumbotron"], ["id", "profile_title", 1, "font_0"], ["id", "forseRefreshToken", 2, "text-align", "left", "width", "auto", "cursor", "pointer", 3, "click"], ["id", "openNewGccsTab", 2, "text-align", "left", "width", "auto", "cursor", "pointer", 3, "click"], ["id", "openNewAgentTab", 2, "text-align", "left", "width", "auto", "cursor", "pointer", 3, "click"], ["id", "openNewWebRTTab", 2, "text-align", "left", "width", "auto", "cursor", "pointer", 3, "click"], [4, "ngFor", "ngForOf"], ["href", "http://tadiran2014.azurewebsites.net/en/products/unified-communications/aeonix/", "id", "testid2", "target", "iframe_a"], ["href", "https://www.tadirantele.com/aeonix4cloud", "id", "testid4", "target", "iframe_a"], ["src", "https://www.tadirantele.com/aeonix4cloud", "sandbox", "allow-same-origin allow-scripts allow-popups allow-forms", "name", "iframe_a", "height", "550px", "width", "100%", "title", "Iframe Example"], [1, "list-unstyled"], [1, "media"], ["href", "https://172.28.8.245:8443/aeonix/mainForm.jsf", "target", "_blank", "aria-current", "true", 1, "app-icon-wide"], ["src", "./assets/images/aeonix_logo_72.png", "alt", "Icon app number 1", 1, ""], [1, "media-body"], [1, "mt-0", "mb-1"], [1, "media", "my-4"], [1, "app-icon", 3, "click"], ["src", "./assets/images/dashboard.png", "alt", "Icon app number 2", 1, "app-icon"], ["href", "https://localhost:8445/accGCCS/", "id", "testid3", "target", "iframe_a", "rel", "noopener", "aria-current", "false"], ["src", "./assets/images/management.png", "alt", "Icon app number 3", 1, "app-icon"], ["href", "http://localhost:8080/accWebRT/", "id", "testid5", "target", "iframe_a", "rel", "noopener", "aria-current", "false"], ["src", "./assets/images/dashboard.png", "alt", "Icon app number 4", 1, "app-icon"], ["href", "https://172.28.8.245:8445/accAgent/", "id", "testid6", "target", "iframe_a", "rel", "noopener", "aria-current", "false"], ["src", "./assets/images/management.png", "alt", "Icon app number 5", 1, "app-icon"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, ProfileComponent_div_0_Template, 84, 7, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProfileComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.currentUser)("ngIfElse", _r1);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf],
        styles: [".app-icon[_ngcontent-%COMP%] {\r\n  width: 64px;\r\n  height: 64px;\r\n}\r\n\r\n.app-icon-wide[_ngcontent-%COMP%] {\r\n  width: 181px;\r\n  height: 65px;\r\n}\r\n\r\n\r\n\r\n.media[_ngcontent-%COMP%] {margin:10px;}\r\n\r\n.media[_ngcontent-%COMP%], .media-body[_ngcontent-%COMP%] {overflow:hidden; _overflow:visible; zoom:1;}\r\n\r\n.media[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%] {float:left; margin-right: 20px;}\r\n\r\n.media[_ngcontent-%COMP%]   .app-icon-wide[_ngcontent-%COMP%] {float:left; margin-right: 10px;}\r\n\r\n.media[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{display:block;}\r\n\r\n.media[_ngcontent-%COMP%]   .imgExt[_ngcontent-%COMP%]{float:right; margin-left: 10px;}\r\n\r\n.mr-2[_ngcontent-%COMP%] {\r\n  width: 64px;\r\n  height: 64px;\r\n  \r\n  background-repeat: round;\r\n  background-position: top left;\r\n  \r\n  alt: \"jh,hgj,hjk\";\r\n}\r\n\r\n.mr-3[_ngcontent-%COMP%] {\r\n  width: 64px;\r\n  height: 64px;\r\n  background-image: url('management.png');\r\n  background-repeat: round;\r\n  background-position: top left;\r\n  \r\n  alt: \"jh,hgj,hjk\";\r\n}\r\n\r\n.font_0[_ngcontent-%COMP%] {\r\n  font-size:44px;\r\n  text-align:center;\r\n  color:#FFFFFF;\r\n}\r\n\r\n.background[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n  background-origin: border-box;\r\n  background-image: url('Background.webp');\r\n  \r\n  background-repeat: no-repeat;\r\n  background-position: top left;\r\n\r\n}\r\n\r\na[_ngcontent-%COMP%]:link {\r\n  color: green;\r\n  background-color: transparent;\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:visited {\r\n  color: pink;\r\n  background-color: transparent;\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  color: red;\r\n  background-color: transparent;\r\n  text-decoration: underline;\r\n}\r\n\r\na[_ngcontent-%COMP%]:active {\r\n  color: yellow;\r\n  background-color: transparent;\r\n  text-decoration: underline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUdBLHdCQUF3Qjs7QUFDeEIsUUFBUSxXQUFXLENBQUM7O0FBQ3BCLHFCQUFxQixlQUFlLEdBQUUsZ0JBQWlCLEVBQUUsTUFBTSxDQUFDOztBQUNoRSxrQkFBa0IsVUFBVSxFQUFFLGtCQUFrQixDQUFDOztBQUNqRCx1QkFBdUIsVUFBVSxFQUFFLGtCQUFrQixDQUFDOztBQUN0RCwwQkFBMEIsYUFBYSxDQUFDOztBQUN4QyxlQUFlLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQzs7QUFFOUM7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDBEQUEwRDtFQUMxRCx3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLCtDQUErQztFQUMvQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVDQUFnRTtFQUNoRSx3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLCtDQUErQztFQUMvQyxpQkFBaUI7QUFDbkI7O0FBR0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFJQTtFQUNFLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0Isd0NBQWlFO0VBQ2pFLDJFQUEyRTtFQUMzRSw0QkFBNEI7RUFDNUIsNkJBQTZCOztBQUUvQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsNkJBQTZCO0VBQzdCLDBCQUEwQjtBQUM1Qjs7QUFDQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtaWNvbiB7XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG59XHJcblxyXG4uYXBwLWljb24td2lkZSB7XHJcbiAgd2lkdGg6IDE4MXB4O1xyXG4gIGhlaWdodDogNjVweDtcclxufVxyXG5cclxuXHJcbi8qID09PT09PSBtZWRpYSA9PT09PT0gKi9cclxuLm1lZGlhIHttYXJnaW46MTBweDt9XHJcbi5tZWRpYSwgLm1lZGlhLWJvZHkge292ZXJmbG93OmhpZGRlbjsgX292ZXJmbG93OnZpc2libGU7IHpvb206MTt9XHJcbi5tZWRpYSAuYXBwLWljb24ge2Zsb2F0OmxlZnQ7IG1hcmdpbi1yaWdodDogMjBweDt9XHJcbi5tZWRpYSAuYXBwLWljb24td2lkZSB7ZmxvYXQ6bGVmdDsgbWFyZ2luLXJpZ2h0OiAxMHB4O31cclxuLm1lZGlhIC5hcHAtaWNvbiBhcHAtaWNvbntkaXNwbGF5OmJsb2NrO31cclxuLm1lZGlhIC5pbWdFeHR7ZmxvYXQ6cmlnaHQ7IG1hcmdpbi1sZWZ0OiAxMHB4O31cclxuXHJcbi5tci0yIHtcclxuICB3aWR0aDogNjRweDtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vYXNzZXRzL2ltYWdlcy9tYW5hZ2VtZW50LnBuZyk7Ki9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XHJcbiAgLypiYWNrZ3JvdW5kLW9yaWdpbjogcGFkZGluZy1ib3gsIGNvbnRlbnQtYm94OyovXHJcbiAgYWx0OiBcImpoLGhnaixoamtcIjtcclxufVxyXG5cclxuLm1yLTMge1xyXG4gIHdpZHRoOiA2NHB4O1xyXG4gIGhlaWdodDogNjRweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vX3NlcnZpY2VzL2Fzc2V0cy9pbWFnZXMvbWFuYWdlbWVudC5wbmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcclxuICAvKmJhY2tncm91bmQtb3JpZ2luOiBwYWRkaW5nLWJveCwgY29udGVudC1ib3g7Ki9cclxuICBhbHQ6IFwiamgsaGdqLGhqa1wiO1xyXG59XHJcblxyXG5cclxuLmZvbnRfMCB7XHJcbiAgZm9udC1zaXplOjQ0cHg7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgY29sb3I6I0ZGRkZGRjtcclxufVxyXG5cclxuXHJcblxyXG4uYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLW9yaWdpbjogYm9yZGVyLWJveDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vX3NlcnZpY2VzL2Fzc2V0cy9pbWFnZXMvQmFja2dyb3VuZC53ZWJwKTtcclxuICAvKmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgzMCwgNzUsIDExNSwgMSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpOyovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcclxuXHJcbn1cclxuXHJcbmE6bGluayB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5hOnZpc2l0ZWQge1xyXG4gIGNvbG9yOiBwaW5rO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbmE6YWN0aXZlIHtcclxuICBjb2xvcjogeWVsbG93O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    29087:
    /*!************************************************!*\
      !*** ./src/app/register/register.component.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterComponent": function RegisterComponent() {
          return (
            /* binding */
            _RegisterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_services/auth.service */
      88368);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);

      function RegisterComponent_form_3_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Username is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_form_3_div_7_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Username must be at least 3 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_form_3_div_7_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Username must be at most 20 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_form_3_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_form_3_div_7_div_1_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterComponent_form_3_div_7_div_2_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RegisterComponent_form_3_div_7_div_3_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.errors.minlength);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.errors.maxlength);
        }
      }

      function RegisterComponent_form_3_div_13_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Email is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_form_3_div_13_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Email must be a valid email address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_form_3_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_form_3_div_13_div_1_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterComponent_form_3_div_13_div_2_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r5.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r5.errors.email);
        }
      }

      function RegisterComponent_form_3_div_19_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_form_3_div_19_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Password must be at least 6 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_form_3_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_form_3_div_19_div_1_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RegisterComponent_form_3_div_19_div_2_Template, 2, 0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r7.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r7.errors.minlength);
        }
      }

      function RegisterComponent_form_3_div_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Signup failed!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r9.errorMessage, " ");
        }
      }

      function RegisterComponent_form_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_form_3_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return _r2.form.valid && ctx_r17.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "label", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "input", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_form_3_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r19.form.userName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, RegisterComponent_form_3_div_7_Template, 4, 3, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_form_3_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r20.form.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, RegisterComponent_form_3_div_13_Template, 3, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "input", 16, 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function RegisterComponent_form_3_Template_input_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r21.form.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, RegisterComponent_form_3_div_19_Template, 3, 2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, RegisterComponent_form_3_div_23_Template, 4, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.form.userName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r3.errors && _r2.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.form.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r5.errors && _r2.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.form.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r7.errors && _r2.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _r2.submitted && ctx_r0.isSignUpFailed);
        }
      }

      function RegisterComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Your registration is successful! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _RegisterComponent = /*#__PURE__*/function () {
        function _RegisterComponent(authService) {
          _classCallCheck(this, _RegisterComponent);

          this.authService = authService;
          this.form = {
            username: null,
            email: null
            /*new FormControl('', Validators.email)*/
            ,
            password: null
          };
          this.isSuccessful = false;
          this.isSignUpFailed = false;
          this.errorMessage = '';
          this.empList = [];
          this.closeResult = '';
          this.empList.push("admin");
        }

        _createClass(_RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this27 = this;

            var _this$form3 = this.form,
                username = _this$form3.username,
                email = _this$form3.email,
                password = _this$form3.password;
            this.authService.register(username, email, password, this.empList).subscribe(function (data) {
              console.log(data);
              _this27.isSuccessful = true;
              _this27.isSignUpFailed = false;
            }, function (err) {
              _this27.errorMessage = err.error.message;
              _this27.isSignUpFailed = true;
            });
          }
        }]);

        return _RegisterComponent;
      }();

      _RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || _RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };

      _RegisterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _RegisterComponent,
        selectors: [["app-register"]],
        decls: 5,
        vars: 2,
        consts: [[1, "col-md-12"], [1, "card", "card-container"], ["id", "profile-img", "src", "//ssl.gstatic.com/accounts/ui/avatar_2x.png", 1, "profile-img-card"], ["name", "form", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "userName"], ["type", "text", "name", "userName", "required", "", "minlength", "3", "maxlength", "20", 1, "form-control", 3, "ngModel", "ngModelChange"], ["userName", "ngModel"], ["class", "alert-danger", 4, "ngIf"], ["for", "email"], ["type", "email", "name", "email", "required", "", "email", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "password"], ["type", "password", "name", "password", "required", "", "minlength", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "btn", "btn-primary", "btn-block"], ["class", "alert alert-warning", 4, "ngIf"], [1, "alert-danger"], [4, "ngIf"], [1, "alert", "alert-warning"], [1, "alert", "alert-success"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RegisterComponent_form_3_Template, 24, 7, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RegisterComponent_div_4_Template, 2, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isSuccessful);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isSuccessful);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.EmailValidator],
        styles: ["label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-top: 10px;\r\n}\r\n\r\n.card-container.card[_ngcontent-%COMP%] {\r\n  max-width: 400px !important;\r\n  padding: 40px 40px;\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  background-color: #f7f7f7;\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.profile-img-card[_ngcontent-%COMP%] {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUdoQixrQkFBa0I7RUFHbEIsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsY0FBYztFQUdkLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRhaW5lci5jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogNDBweCA0MHB4O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICBwYWRkaW5nOiAyMHB4IDI1cHggMzBweDtcclxuICBtYXJnaW46IDAgYXV0byAyNXB4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLnByb2ZpbGUtaW1nLWNhcmQge1xyXG4gIHdpZHRoOiA5NnB4O1xyXG4gIGhlaWdodDogOTZweDtcclxuICBtYXJnaW46IDAgYXV0byAxMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufSJdfQ== */"]
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ApiErrorMessagePipe2 = /*#__PURE__*/function () {
        function _ApiErrorMessagePipe2() {
          _classCallCheck(this, _ApiErrorMessagePipe2);
        }

        _createClass(_ApiErrorMessagePipe2, [{
          key: "transform",
          value: function transform(message) {
            var dataToArray = message.split(',').map(function (item) {
              return item.trim();
            }); // convert array to string replacing comma with new line

            return dataToArray.join('\n');
          }
        }]);

        return _ApiErrorMessagePipe2;
      }();

      _ApiErrorMessagePipe2.ɵfac = function ApiErrorMessagePipe_Factory(t) {
        return new (t || _ApiErrorMessagePipe2)();
      };

      _ApiErrorMessagePipe2.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "apiErrorMessage",
        type: _ApiErrorMessagePipe2,
        pure: true
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
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
      /*! ../../stories/forms/login-form/login-form-component */
      73824);
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


      var _stories_inputs_story_input_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../../stories/inputs/story-input.component */
      83168);
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


      var _storybook_pipes_api_error_message_pipe__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../storybook/pipes/api-error-message.pipe */
      57074);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/core */
      37716); //import { BrowserModule } from '@angular/platform-browser';


      var _StorybookModule = /*#__PURE__*/_createClass(function _StorybookModule() {
        _classCallCheck(this, _StorybookModule);
      });

      _StorybookModule.ɵfac = function StorybookModule_Factory(t) {
        return new (t || _StorybookModule)();
      };

      _StorybookModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({
        type: _StorybookModule
      });
      _StorybookModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule], _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](_StorybookModule, {
          declarations: [_stories_buttons_button_globe_button_globe_component__WEBPACK_IMPORTED_MODULE_2__.ButtonGlobeComponent, _stories_pages_background1_background1Component__WEBPACK_IMPORTED_MODULE_3__["default"], _stories_buttons_button_tadiran_button_tadiran_component__WEBPACK_IMPORTED_MODULE_4__.ButtonTadiranComponent, _stories_buttons_button_language_button_language_component__WEBPACK_IMPORTED_MODULE_0__.ButtonLanguageComponent, _stories_buttons_button_fortest_button_fortest_component__WEBPACK_IMPORTED_MODULE_1__.ButtonFortestComponent, _stories_cards_card_component__WEBPACK_IMPORTED_MODULE_5__["default"], _stories_forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__["default"], _stories_forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__["default"], _stories_forms_registry_form_registry_form_component__WEBPACK_IMPORTED_MODULE_7__["default"], _stories_buttons_button_continue_button_continue_component__WEBPACK_IMPORTED_MODULE_8__.ButtonContinueComponent, _stories_buttons_button_ex_button_ex_component__WEBPACK_IMPORTED_MODULE_9__.ButtonExComponent, _stories_buttons_button_apps_button_apps_component__WEBPACK_IMPORTED_MODULE_10__.ButtonAppsComponent, _stories_buttons_button_successfully_button_successfully_component__WEBPACK_IMPORTED_MODULE_11__.ButtonSuccessfullyComponent, _stories_buttons_button_example_button_component__WEBPACK_IMPORTED_MODULE_12__["default"], _stories_app_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_13__.AppMenuComponent, _stories_inputs_story_input_component__WEBPACK_IMPORTED_MODULE_14__.StoryInputComponent, src_stories_buttons_button_fortest_custom_directive_Highlight_directive__WEBPACK_IMPORTED_MODULE_15__.HighlightDirective, _stories_forms_replace_pass_form_replace_pass_form_component__WEBPACK_IMPORTED_MODULE_16__["default"], _stories_pass_strength_pass_strength_component__WEBPACK_IMPORTED_MODULE_17__["default"], _storybook_pipes_api_error_message_pipe__WEBPACK_IMPORTED_MODULE_18__.ApiErrorMessagePipe],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule],
          exports: [_stories_buttons_button_globe_button_globe_component__WEBPACK_IMPORTED_MODULE_2__.ButtonGlobeComponent, _stories_pages_background1_background1Component__WEBPACK_IMPORTED_MODULE_3__["default"], _stories_buttons_button_tadiran_button_tadiran_component__WEBPACK_IMPORTED_MODULE_4__.ButtonTadiranComponent, _stories_buttons_button_language_button_language_component__WEBPACK_IMPORTED_MODULE_0__.ButtonLanguageComponent, _stories_buttons_button_fortest_button_fortest_component__WEBPACK_IMPORTED_MODULE_1__.ButtonFortestComponent, _stories_cards_card_component__WEBPACK_IMPORTED_MODULE_5__["default"], _stories_forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__["default"], _stories_forms_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__["default"], _stories_forms_registry_form_registry_form_component__WEBPACK_IMPORTED_MODULE_7__["default"], _stories_buttons_button_continue_button_continue_component__WEBPACK_IMPORTED_MODULE_8__.ButtonContinueComponent, _stories_buttons_button_ex_button_ex_component__WEBPACK_IMPORTED_MODULE_9__.ButtonExComponent, _stories_buttons_button_apps_button_apps_component__WEBPACK_IMPORTED_MODULE_10__.ButtonAppsComponent, _stories_buttons_button_successfully_button_successfully_component__WEBPACK_IMPORTED_MODULE_11__.ButtonSuccessfullyComponent, _stories_buttons_button_example_button_component__WEBPACK_IMPORTED_MODULE_12__["default"], _stories_app_menu_app_menu_component__WEBPACK_IMPORTED_MODULE_13__.AppMenuComponent, _stories_inputs_story_input_component__WEBPACK_IMPORTED_MODULE_14__.StoryInputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_20__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_21__.ReactiveFormsModule, src_stories_buttons_button_fortest_custom_directive_Highlight_directive__WEBPACK_IMPORTED_MODULE_15__.HighlightDirective, _stories_forms_replace_pass_form_replace_pass_form_component__WEBPACK_IMPORTED_MODULE_16__["default"], _stories_pass_strength_pass_strength_component__WEBPACK_IMPORTED_MODULE_17__["default"]]
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _cards_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../cards/card.component */
      56970);
      /* harmony import */


      var _buttons_button_apps_button_apps_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../buttons/button-apps/button-apps.component */
      83318);

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

          this.onPinInput = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter(); // tslint:disable-next-line: no-output-on-prefix

          this.onArchiveInput = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.openNewWinForApp = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.openNewTabForApp = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          this.validationForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('Telecom2', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(2)),
            //email: new FormControl(null, Validators.email),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('T@diran2022', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(2)) //phone: new FormControl(null, Validators.pattern(new RegExp("[0-9 ]{12}")))

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

      _AppMenuComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AppMenuComponent,
        selectors: [["storybook-app-menu"]],
        inputs: {
          formService: "formService",
          isLoggedIn: "isLoggedIn",
          storyInputs: "storyInputs"
        },
        outputs: {
          onPinInput: "onPinInput",
          onArchiveInput: "onArchiveInput",
          openNewWinForApp: "openNewWinForApp",
          openNewTabForApp: "openNewTabForApp"
        },
        decls: 17,
        vars: 0,
        consts: [["id", "main-login-card", 1, "col-md-12"], [1, "card-container"], [1, "h-100", "d-flex", "align-items-center", "justify-content-center"], [1, "Aeonix-App-Center"], [1, "grid-container"], [1, "item1"], ["application", "Agent", "label", "Continue", "type", "button", "id", "openNewAgentTab", 3, "click"], [1, "item2"], ["application", "WebRT", "label", "Continue", "type", "button", "id", "openNewWebRTTab", 3, "click"], [1, "item3"], ["application", "GCCS", "label", "Continue", "type", "button", "id", "openNewGccsTab", 3, "click"], [1, "item4"], ["application", "Admin", "label", "Continue", "type", "button"], [1, "item5"], ["application", "GCCS", "label", "Continue", "type", "button", "id", "openNewGccsTab2", 3, "click"]],
        template: function AppMenuComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "storybook-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Aeonix App Center");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "storybook-button-apps", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppMenuComponent_Template_storybook_button_apps_click_8_listener() {
              return ctx.openNewWinForApp.emit(["AGENT", "/accAgent/"]);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "storybook-button-apps", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppMenuComponent_Template_storybook_button_apps_click_10_listener() {
              return ctx.openNewTabForApp.emit(["ACCREALTIME", "/accRealTime/"]);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "storybook-button-apps", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppMenuComponent_Template_storybook_button_apps_click_12_listener() {
              return ctx.openNewTabForApp.emit(["GCCS", "/accGCCS/"]);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "storybook-button-apps", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "storybook-button-apps", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppMenuComponent_Template_storybook_button_apps_click_16_listener() {
              return ctx.openNewTabForApp.emit(["GCCS", "/accGCCS/"]);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        },
        directives: [_cards_card_component__WEBPACK_IMPORTED_MODULE_0__["default"], _buttons_button_apps_button_apps_component__WEBPACK_IMPORTED_MODULE_1__.ButtonAppsComponent],
        styles: [".card-container.card[_ngcontent-%COMP%] {\r\n  max-width: 1000px !important;\r\n  padding: 10px 10px;\r\n  \r\n\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%] {\r\n  display: grid;\r\n  justify-content: center;\r\n  grid-template-columns: auto auto auto auto auto auto;\r\n  grid-gap: 10%;\r\n  gap: 10%;\r\n  background-color: #2196F3;\r\n  padding: 0px;\r\n}\r\n\r\n.grid-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\r\n  background-color: rgba(255, 255, 255, 0.8);\r\n  text-align: center;\r\n  padding: 0 0;\r\n  font-size: 30px;\r\n}\r\n\r\n.item1[_ngcontent-%COMP%] {\r\n  grid-area: 1 / 1 / span 1 / span 2;\r\n}\r\n\r\n.item2[_ngcontent-%COMP%] {\r\n  grid-area: 1 / 3 / span 1 / span 2;\r\n}\r\n\r\n.item3[_ngcontent-%COMP%] {\r\n  grid-area: 1 / 5 / span 1 / span 2;\r\n}\r\n\r\n.item4[_ngcontent-%COMP%] {\r\n  grid-area: 2 / 2 / span 1 / span 2;\r\n}\r\n\r\n.item5[_ngcontent-%COMP%] {\r\n  grid-area: 2 / 4 / span 1 / span 2;\r\n}\r\n\r\n\r\n\r\n.col-md-12[_ngcontent-%COMP%]{\r\n  position: center;\r\n  width: 965px;\r\n  height: 819px;\r\n  left: calc(50% - 965px/2 - 0.25px);\r\n  top: calc(50% - 819px/2 - 0.5px);\r\n  border-radius: 32px;\r\n\r\n}\r\n\r\n.Aeonix-App-Center[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 12.94%;\r\n  bottom: 77.05%;\r\n\r\n  \r\n  height: 82px;\r\n  flex-grow: 0;\r\n  margin: 0 0 19.8px;\r\n  font-family: \"Noto Sans\", ui-serif;\r\n  font-size: 40px;\r\n  font-weight: bolder;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: 45px;\r\n  letter-spacing: -0.011px;\r\n  text-align: left;\r\n  color: #000000;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC1tZW51LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Ozs7Ozs7Ozs7OztDQVlDOztBQUVEO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQjtpQkFDZTs7QUFFakI7O0FBSUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG9EQUFvRDtFQUNwRCxhQUFRO0VBQVIsUUFBUTtFQUNSLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUNBO0VBQ0Usa0NBQWtDO0FBQ3BDOztBQUNBOzs7Ozs7OztDQVFDOztBQUVEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLGdDQUFnQztFQUNoQyxtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxjQUFjOztFQUVkLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEIiLCJmaWxlIjoiYXBwLW1lbnUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qXHJcbi5mb3JtIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMy4xOCU7XHJcbiAgcmlnaHQ6IDE0Ljc4JTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgYm94LXNoYWRvdzogLTRweCA0cHggMTBweCAwIHJnYmEoODgsIDE2NiwgMjI4LCAwLjMpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbiovXHJcblxyXG4uY2FyZC1jb250YWluZXIuY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiAxMDAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgLyp0b3A6IDUuMTglO1xyXG4gIGJvdHRvbTogNC43OCU7Ki9cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLmdyaWQtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvIGF1dG8gYXV0byBhdXRvIGF1dG87XHJcbiAgZ2FwOiAxMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbi5ncmlkLWNvbnRhaW5lciA+IGRpdiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDA7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG59XHJcblxyXG4uaXRlbTEge1xyXG4gIGdyaWQtYXJlYTogMSAvIDEgLyBzcGFuIDEgLyBzcGFuIDI7XHJcbn1cclxuLml0ZW0yIHtcclxuICBncmlkLWFyZWE6IDEgLyAzIC8gc3BhbiAxIC8gc3BhbiAyO1xyXG59XHJcbi5pdGVtMyB7XHJcbiAgZ3JpZC1hcmVhOiAxIC8gNSAvIHNwYW4gMSAvIHNwYW4gMjtcclxufVxyXG5cclxuLml0ZW00IHtcclxuICBncmlkLWFyZWE6IDIgLyAyIC8gc3BhbiAxIC8gc3BhbiAyO1xyXG59XHJcbi5pdGVtNSB7XHJcbiAgZ3JpZC1hcmVhOiAyIC8gNCAvIHNwYW4gMSAvIHNwYW4gMjtcclxufVxyXG4vKlxyXG4uY29sLW1kLTEye1xyXG4gIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDQyLjY1JTtcclxuICBoZWlnaHQ6IDg5LjM1JTtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDQyLjY1JS8yIC0gMHB4KTtcclxuICB0b3A6IGNhbGMoNTAlIC0gODkuMzUlLzIgLSAwcHgpO1xyXG59XHJcbiovXHJcblxyXG4uY29sLW1kLTEye1xyXG4gIHBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDk2NXB4O1xyXG4gIGhlaWdodDogODE5cHg7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSA5NjVweC8yIC0gMC4yNXB4KTtcclxuICB0b3A6IGNhbGMoNTAlIC0gODE5cHgvMiAtIDAuNXB4KTtcclxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xyXG5cclxufVxyXG5cclxuLkFlb25peC1BcHAtQ2VudGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMi45NCU7XHJcbiAgYm90dG9tOiA3Ny4wNSU7XHJcblxyXG4gIC8qd2lkdGg6IDQ0N3B4OyovXHJcbiAgaGVpZ2h0OiA4MnB4O1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBtYXJnaW46IDAgMCAxOS44cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zXCIsIHVpLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICBsaW5lLWhlaWdodDogNDVweDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDExcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuIl19 */"]
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
        vars: 6,
        consts: [["id", "button-apps", 1, "container"], [1, "circle"], ["alt", "apps-button-icon", 1, "Apps-Button-Icon", "center", 3, "ngClass", "ngStyle", "src", "click"], [1, "Button-App-Label"], [1, "center", "mfont"]],
        template: function ButtonAppsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

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
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "./assets/images/", ctx.application == null ? null : ctx.application.toString(), ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classes)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.backgroundColor));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.application.toString(), " ");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle],
        styles: ["[_ngcontent-%COMP%]:root {\r\n  --label_width: 30px;\r\n  --white: #ffffff;\r\n}\r\n\r\n#button-successfully[_ngcontent-%COMP%] {\r\n  max-width: 155.09px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  max-width: 155.09px;\r\n  height: 189.09px;\r\n  float: left;\r\n  padding: 0;\r\n}\r\n\r\nimg.Apps-Button-Icon[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 65.54px;\r\n  height: 82.79px;\r\n  left: calc(50% - 65.54px/2);\r\n  top: calc(50% - 82.79px/2);\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  \r\n}\r\n\r\n.circle[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 155.09px;\r\n  width: 155.09px;\r\n  background: linear-gradient(151.78deg, #74C1FF 13.27%, #3D8ECF 83.89%);\r\n  border-radius: 50%;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n\r\n  text-align: center;\r\n\r\n\r\n}\r\n\r\n.mfont[_ngcontent-%COMP%] {\r\n  \r\n  font-family: \"Noto Sans\", ui-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 17px;\r\n  line-height: 31px;\r\n  letter-spacing: -0.011em;\r\n  color: #000000;\r\n}\r\n\r\n.Button-App-Label[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 100%;\r\n  height: 33px;\r\n  horiz-align: center;\r\n\r\n}\r\n\r\n.a[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 129px;\r\n  height: 33px;\r\n  \r\n  font-family: \"Noto Sans\", ui-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 17px;\r\n  line-height: 31px;\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  letter-spacing: -0.011em;\r\n  color: #000000;\r\n}\r\n\r\n.storybook-button-apps--Agent[_ngcontent-%COMP%] {\r\n  width: 154.09px;\r\n  height: 154.09px;\r\n}\r\n\r\n.storybook-button-apps--WebRT[_ngcontent-%COMP%] {\r\n  width: 152.94px;\r\n  height: 197px;\r\n}\r\n\r\n.storybook-button-apps--Admin[_ngcontent-%COMP%] {\r\n  width: 154.09px;\r\n  height: 154.09px;\r\n}\r\n\r\n.storybook-button-apps--GCCS[_ngcontent-%COMP%] {\r\n  width: 154.09px;\r\n  height: 152.94px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi1hcHBzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLDJCQUEyQjtFQUMzQiwwQkFBMEI7RUFDMUIsc0JBQW1CO0tBQW5CLG1CQUFtQjtFQUNuQixvREFBb0Q7QUFDdEQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixzRUFBc0U7RUFDdEUsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTs7RUFFWixrQkFBa0I7OztBQUdwQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1COztBQUVyQjs7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHdCQUF3QjtFQUN4QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJidXR0b24tYXBwcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOnJvb3Qge1xyXG4gIC0tbGFiZWxfd2lkdGg6IDMwcHg7XHJcbiAgLS13aGl0ZTogI2ZmZmZmZjtcclxufVxyXG5cclxuI2J1dHRvbi1zdWNjZXNzZnVsbHkge1xyXG4gIG1heC13aWR0aDogMTU1LjA5cHg7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDE1NS4wOXB4O1xyXG4gIGhlaWdodDogMTg5LjA5cHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaW1nLkFwcHMtQnV0dG9uLUljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogNjUuNTRweDtcclxuICBoZWlnaHQ6IDgyLjc5cHg7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSA2NS41NHB4LzIpO1xyXG4gIHRvcDogY2FsYyg1MCUgLSA4Mi43OXB4LzIpO1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgLypib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDYxLCAxNDIsIDIwNywgMC4xNSk7Ki9cclxufVxyXG5cclxuLmNpcmNsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTU1LjA5cHg7XHJcbiAgd2lkdGg6IDE1NS4wOXB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTEuNzhkZWcsICM3NEMxRkYgMTMuMjclLCAjM0Q4RUNGIDgzLjg5JSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY2VudGVyIHtcclxuICBtYXJnaW46IGF1dG87XHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcblxyXG59XHJcblxyXG4ubWZvbnQge1xyXG4gIC8qd2lkdGg6IDQ0N3B4OyovXHJcbiAgZm9udC1mYW1pbHk6IFwiTm90byBTYW5zXCIsIHVpLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogMzFweDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDExZW07XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5CdXR0b24tQXBwLUxhYmVsIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAzM3B4O1xyXG4gIGhvcml6LWFsaWduOiBjZW50ZXI7XHJcblxyXG59XHJcbi5hIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEyOXB4O1xyXG4gIGhlaWdodDogMzNweDtcclxuICAvKndpZHRoOiA0NDdweDsqL1xyXG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiLCB1aS1zZXJpZjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDExZW07XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5zdG9yeWJvb2stYnV0dG9uLWFwcHMtLUFnZW50IHtcclxuICB3aWR0aDogMTU0LjA5cHg7XHJcbiAgaGVpZ2h0OiAxNTQuMDlweDtcclxufVxyXG4uc3Rvcnlib29rLWJ1dHRvbi1hcHBzLS1XZWJSVCB7XHJcbiAgd2lkdGg6IDE1Mi45NHB4O1xyXG4gIGhlaWdodDogMTk3cHg7XHJcbn1cclxuLnN0b3J5Ym9vay1idXR0b24tYXBwcy0tQWRtaW4ge1xyXG4gIHdpZHRoOiAxNTQuMDlweDtcclxuICBoZWlnaHQ6IDE1NC4wOXB4O1xyXG59XHJcbi5zdG9yeWJvb2stYnV0dG9uLWFwcHMtLUdDQ1Mge1xyXG4gIHdpZHRoOiAxNTQuMDlweDtcclxuICBoZWlnaHQ6IDE1Mi45NHB4O1xyXG59XHJcbiJdfQ== */"]
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
        consts: [[1, "login-button", 3, "ngClass", "ngStyle", "click"]],
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
        styles: [".storybook-button-continue[_ngcontent-%COMP%] {\n  width: 446px;\n  height: 63px;\n  margin: 26px 0 0 1px;\n  padding: 17px 136px 17px 139px;\n  border-radius: 7px;\n  background-image: linear-gradient(180deg, #3D8ECF 0%, #58A6E4 100%);\n  font-family: \"Noto Sans\", ui-serif;\n  font-style: normal;\n  font-weight: 700;\n  font-size: 21px;\n  line-height: 11px;\n}\n\n\n\n.storybook-button-continue--small[_ngcontent-%COMP%] {\n  font-size: 20.7945px;\n  padding: 10px 16px;\n}\n\n.storybook-button-continue--medium[_ngcontent-%COMP%] {\n  font-size: 21px;\n  padding: 17px 136px 17px 139px;\n}\n\n.storybook-button-continue--large[_ngcontent-%COMP%] {\n  font-size: 28px;\n  padding: 17px 136px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi1jb250aW51ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUVBQUE7RUFFQSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTs7Ozs7Ozs7Ozs7O0NBQUE7O0FBY0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsOEJBQUE7QUFBRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQUNGIiwiZmlsZSI6ImJ1dHRvbi1jb250aW51ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdG9yeWJvb2stYnV0dG9uLWNvbnRpbnVlIHtcclxuICAgIHdpZHRoOiA0NDZweDtcclxuICAgIGhlaWdodDogNjNweDtcclxuICAgIG1hcmdpbjogMjZweCAwIDAgMXB4O1xyXG4gICAgcGFkZGluZzogMTdweCAxMzZweCAxN3B4IDEzOXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgIzNEOEVDRiAwJSwgIzU4QTZFNCAxMDAlKTtcclxuXHJcbiAgICBmb250LWZhbWlseTogJ05vdG8gU2FucycsIHVpLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxMXB4O1xyXG59XHJcblxyXG4vKlxyXG4uc3Rvcnlib29rLWJ1dHRvbi1jb250aW51ZS0tcHJpbWFyeSB7XHJcbiAgdG9wOiA1MHB4O1xyXG4gIGJvdHRvbTogdW5zZXQ7XHJcbiAgbGVmdDogMzBweDtcclxufVxyXG5cclxuLnN0b3J5Ym9vay1idXR0b24tY29udGludWUtLXNlY29uZGFyeSB7XHJcbiAgdG9wOiB1bnNldDtcclxuICBib3R0b206IDUwcHg7XHJcbiAgbGVmdDogMzBweDtcclxufVxyXG4qL1xyXG5cclxuLnN0b3J5Ym9vay1idXR0b24tY29udGludWUtLXNtYWxsIHtcclxuICBmb250LXNpemU6IDIwLjc5NDVweDtcclxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbn1cclxuLnN0b3J5Ym9vay1idXR0b24tY29udGludWUtLW1lZGl1bSB7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG4gIHBhZGRpbmc6IDE3cHggMTM2cHggMTdweCAxMzlweDtcclxufVxyXG4uc3Rvcnlib29rLWJ1dHRvbi1jb250aW51ZS0tbGFyZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxuICBwYWRkaW5nOiAxN3B4IDEzNnB4O1xyXG59XHJcbiJdfQ== */"]
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
        consts: [[1, "Vector"], ["src", "./assets/images/GlobeIcon.png", "alt", "language-desktop-icon", 1, "Language-Desktop-Icon", 3, "ngClass", "ngStyle", "click"]],
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
            var mode = this.primary ? 'storybook-button-language--primary' : 'storybook-button-language--secondary';
            return ['storybook-button-language', "storybook-language-icon--".concat(this.size), mode];
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
        consts: [[1, "Vector"], ["src", "./assets/images/language-desktop-icon.png", "srcset", "./assets/images/language-desktop-icon@2x.png 2x,\n             /assets/images/language-desktop-icon@3x.png 3x", "alt", "language-desktop-icon", 1, "Language-Desktop-Icon", 3, "ngClass", "ngStyle", "click"]],
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
        styles: ["[_ngcontent-%COMP%]:root {\r\n  --label_width: 30px;\r\n  --white: #ffffff;\r\n}\r\n\r\n#button-successfully[_ngcontent-%COMP%] {\r\n  max-width: 155.09px;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  max-width: 155.09px;\r\n  height: 189.09px;\r\n  float: left;\r\n  padding: 0;\r\n}\r\n\r\nimg.Vee-Icon[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 83.98px;\r\n  height: 62.42px;\r\n  left: calc(50% - 83.98px/2);\r\n  top: calc(50% - 62.42px/2);\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  \r\n}\r\n\r\n.circle[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  height: 142px;\r\n  width: 142px;\r\n  background: linear-gradient(180deg, #63EAA1 41.15%, #53CE8C 100%);\r\n  border-radius: 50%;\r\n}\r\n\r\n.center[_ngcontent-%COMP%] {\r\n  margin: auto;\r\n\r\n  text-align: center;\r\n\r\n\r\n}\r\n\r\n.storybook-button-successfully--medium[_ngcontent-%COMP%] {\r\n  width: 154.09px;\r\n  height: 154.09px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi1zdWNjZXNzZnVsbHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUMxQixzQkFBbUI7S0FBbkIsbUJBQW1CO0VBQ25CLG9EQUFvRDtBQUN0RDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGlFQUFpRTtFQUNqRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxZQUFZOztFQUVaLGtCQUFrQjs7O0FBR3BCOztBQUlBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJidXR0b24tc3VjY2Vzc2Z1bGx5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XHJcbiAgLS1sYWJlbF93aWR0aDogMzBweDtcclxuICAtLXdoaXRlOiAjZmZmZmZmO1xyXG59XHJcblxyXG4jYnV0dG9uLXN1Y2Nlc3NmdWxseSB7XHJcbiAgbWF4LXdpZHRoOiAxNTUuMDlweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1heC13aWR0aDogMTU1LjA5cHg7XHJcbiAgaGVpZ2h0OiAxODkuMDlweDtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5pbWcuVmVlLUljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogODMuOThweDtcclxuICBoZWlnaHQ6IDYyLjQycHg7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSA4My45OHB4LzIpO1xyXG4gIHRvcDogY2FsYyg1MCUgLSA2Mi40MnB4LzIpO1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgLypib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDYxLCAxNDIsIDIwNywgMC4xNSk7Ki9cclxufVxyXG5cclxuLmNpcmNsZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGhlaWdodDogMTQycHg7XHJcbiAgd2lkdGg6IDE0MnB4O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICM2M0VBQTEgNDEuMTUlLCAjNTNDRThDIDEwMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG4uc3Rvcnlib29rLWJ1dHRvbi1zdWNjZXNzZnVsbHktLW1lZGl1bSB7XHJcbiAgd2lkdGg6IDE1NC4wOXB4O1xyXG4gIGhlaWdodDogMTU0LjA5cHg7XHJcbn1cclxuIl19 */"]
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
    73824:
    /*!**************************************************************!*\
      !*** ./src/stories/forms/login-form/login-form-component.ts ***!
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _cards_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../../cards/card.component */
      56970);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _buttons_button_continue_button_continue_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../buttons/button-continue/button-continue.component */
      34591);
      /* harmony import */


      var _inputs_story_input_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../inputs/story-input.component */
      83168);

      function LoginFormComponent_div_8_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "isRegSuccess");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function LoginFormComponent_div_8_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function LoginFormComponent_div_8_storybook_input_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "storybook-input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onArchiveInput", function LoginFormComponent_div_8_storybook_input_4_Template_storybook_input_onArchiveInput_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r6.onArchiveInput.emit($event);
          })("onPinInput", function LoginFormComponent_div_8_storybook_input_4_Template_storybook_input_onPinInput_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r8.onPinInput.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var storyInput_r5 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("storyInput", storyInput_r5)("currentForm", ctx_r4.mForm);
        }
      }

      function LoginFormComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, LoginFormComponent_div_8_div_2_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, LoginFormComponent_div_8_div_3_Template, 2, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, LoginFormComponent_div_8_storybook_input_4_Template, 1, 2, "storybook-input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginFormComponent_div_8_Template_a_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r9.openReplacePassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, " Forgot password? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "storybook-button-continue", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function LoginFormComponent_div_8_Template_storybook_button_continue_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r11.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.isLoggedIn);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r0.isLoggedIn && ctx_r0.storyInputsInOrder.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.storyInputsInOrder);
        }
      }

      function LoginFormComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Login failed: ", ctx_r1.loginErrorMessage, " ");
        }
      }

      var LoginFormComponent = /*#__PURE__*/function () {
        function LoginFormComponent() {
          _classCallCheck(this, LoginFormComponent);

          this.isLoginFailed = false;
          this.loginErrorMessage = '';
          /**
           * @ignore
           * Component property to define ordering of tasks
           */

          this.storyInputsInOrder = [];
          this.mForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({});
          /* = new FormGroup({
          username: new FormControl('Telecom4', Validators.minLength(2)),
          password: new FormControl('T@diran2022', Validators.minLength(2)),
          });*/

          /*
            validationFormInOrder: { [p: string]: AbstractControl } =[];
            @Input()
            set registerForm(arr: FormGroup) {
              this.validationFormInOrder = arr.controls
            }*/

          this.isLoggedIn = false; // tslint:disable-next-line: no-output-on-prefix

          this.onPinInput = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter(); // tslint:disable-next-line: no-output-on-prefix

          this.onArchiveInput = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
          this.sendLoginReq = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
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

      LoginFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: LoginFormComponent,
        selectors: [["storybook-login-form"]],
        inputs: {
          formService: "formService",
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
        consts: [["id", "main-login-card", 1, "col-md-12"], [1, "card-container"], [1, "h-100", "d-flex", "align-items-center", "justify-content-center"], [1, "form-header"], ["name", "currentForm", 3, "formGroup"], ["class", "Vector", 4, "ngIf"], [1, "form-group"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "Vector"], [1, "login-button"], [4, "ngIf"], [3, "storyInput", "currentForm", "onArchiveInput", "onPinInput", 4, "ngFor", "ngForOf"], [1, "thematic-break"], ["href", "#/login", 1, "forgot-password", 3, "click"], ["size", "medium", "label", "Continue", "type", "button", 3, "click"], [3, "storyInput", "currentForm", "onArchiveInput", "onPinInput"], ["role", "alert", 1, "alert", "alert-danger"]],
        template: function LoginFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "storybook-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Aeonix App Center");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, LoginFormComponent_div_8_Template, 10, 3, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, LoginFormComponent_div_10_Template, 2, 1, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.mForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoginFailed);
          }
        },
        directives: [_cards_card_component__WEBPACK_IMPORTED_MODULE_0__["default"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _buttons_button_continue_button_continue_component__WEBPACK_IMPORTED_MODULE_1__.ButtonContinueComponent, _inputs_story_input_component__WEBPACK_IMPORTED_MODULE_2__.StoryInputComponent],
        styles: [".Vector[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 637.5px;\r\n  height: 819px;\r\n  left: calc(50% - 637.5px/2 - 1.25px);\r\n  top: calc(50% - 819px/2 - 0.5px);\r\n}\r\n\r\n.form[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 3.18%;\r\n  right: 14.78%;\r\n  top: 0;\r\n  bottom: 0;\r\n  border-radius: 14px;\r\n  box-shadow: -4px 4px 10px 0 rgba(88, 166, 228, 0.3);\r\n  background-color: #fff;\r\n}\r\n\r\n.card-container.card[_ngcontent-%COMP%] {\r\n  max-width: 400px !important;\r\n  padding: 10px 10px;\r\n}\r\n\r\n.col-md-12[_ngcontent-%COMP%]{\r\n  position: center;\r\n  width: 637.5px;\r\n  height: 819px;\r\n  left: calc(50% - 637.5px/2 - 0.25px);\r\n  top: calc(50% - 819px/2 - 0.5px);\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 5.18%;\r\n  right: 4.78%;\r\n  top: 0;\r\n  bottom: 0;\r\n  border-radius: 14px;\r\n  box-shadow: -4px 4px 10px 0 rgba(88, 166, 228, 0.3);\r\n  background-color: #fff;\r\n}\r\n\r\n.form-header[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 12.94%;\r\n  bottom: 77.05%;\r\n\r\n  width: 447px;\r\n  height: 82px;\r\n  flex-grow: 0;\r\n  margin: 0 0 19.8px;\r\n  font-family: \"Noto Sans\", ui-serif;\r\n  font-size: 40px;\r\n  font-weight: bolder;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: 45px;\r\n  letter-spacing: -0.011px;\r\n  text-align: left;\r\n  color: #000000;\r\n}\r\n\r\n.login-button[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 445px;\r\n  height: 102px;\r\n  left: calc(50% - 445px/2 - 0.5px);\r\n  top: calc(50% - 101.16px/2 - 171.58px);\r\n}\r\n\r\n.forgot-password[_ngcontent-%COMP%] {\r\n  \r\n\r\n  font-family: \"Noto Sans\", ui-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 17px;\r\n  line-height: 31px;\r\n  \r\n\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  letter-spacing: -0.011em;\r\n  -webkit-text-decoration-line: underline;\r\n          text-decoration-line: underline;\r\n\r\n  color: #000000;\r\n}\r\n\r\n.thematic-break[_ngcontent-%COMP%] {\r\n  margin: 45px 2px 71px 2.5px;\r\n  background-color: #3d8ecf;\r\n  border-top-width: 1px;\r\n  border-top-color: rgb(61, 142, 207);\r\n  border-top-style: solid;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWZvcm0uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLE1BQU07RUFDTixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLG1EQUFtRDtFQUNuRCxzQkFBc0I7QUFDeEI7O0FBSUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLG1EQUFtRDtFQUNuRCxzQkFBc0I7QUFDeEI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWM7O0VBRWQsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxzQ0FBc0M7QUFDeEM7O0FBR0E7RUFDRSx3QkFBd0I7O0VBRXhCLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUNBQXFDOztFQUVyQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsdUNBQStCO1VBQS9CLCtCQUErQjs7RUFFL0IsY0FBYztBQUNoQjs7QUFJQTtFQUNFLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyx1QkFBdUI7QUFDekIiLCJmaWxlIjoibG9naW4tZm9ybS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuVmVjdG9yIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDYzNy41cHg7XHJcbiAgaGVpZ2h0OiA4MTlweDtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDYzNy41cHgvMiAtIDEuMjVweCk7XHJcbiAgdG9wOiBjYWxjKDUwJSAtIDgxOXB4LzIgLSAwLjVweCk7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMy4xOCU7XHJcbiAgcmlnaHQ6IDE0Ljc4JTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgYm94LXNoYWRvdzogLTRweCA0cHggMTBweCAwIHJnYmEoODgsIDE2NiwgMjI4LCAwLjMpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5cclxuLmNhcmQtY29udGFpbmVyLmNhcmQge1xyXG4gIG1heC13aWR0aDogNDAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbn1cclxuLmNvbC1tZC0xMntcclxuICBwb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiA2MzcuNXB4O1xyXG4gIGhlaWdodDogODE5cHg7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSA2MzcuNXB4LzIgLSAwLjI1cHgpO1xyXG4gIHRvcDogY2FsYyg1MCUgLSA4MTlweC8yIC0gMC41cHgpO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUuMTglO1xyXG4gIHJpZ2h0OiA0Ljc4JTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgYm94LXNoYWRvdzogLTRweCA0cHggMTBweCAwIHJnYmEoODgsIDE2NiwgMjI4LCAwLjMpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEyLjk0JTtcclxuICBib3R0b206IDc3LjA1JTtcclxuXHJcbiAgd2lkdGg6IDQ0N3B4O1xyXG4gIGhlaWdodDogODJweDtcclxuICBmbGV4LWdyb3c6IDA7XHJcbiAgbWFyZ2luOiAwIDAgMTkuOHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiLCB1aS1zZXJpZjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5sb2dpbi1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogNDQ1cHg7XHJcbiAgaGVpZ2h0OiAxMDJweDtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDQ0NXB4LzIgLSAwLjVweCk7XHJcbiAgdG9wOiBjYWxjKDUwJSAtIDEwMS4xNnB4LzIgLSAxNzEuNThweCk7XHJcbn1cclxuXHJcblxyXG4uZm9yZ290LXBhc3N3b3JkIHtcclxuICAvKiBEIFVuZGVyTGluZSBSZWd1bGFyICovXHJcblxyXG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiLCB1aS1zZXJpZjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDE4MyUgKi9cclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDExZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxuXHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcblxyXG5cclxuLnRoZW1hdGljLWJyZWFrIHtcclxuICBtYXJnaW46IDQ1cHggMnB4IDcxcHggMi41cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkOGVjZjtcclxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiKDYxLCAxNDIsIDIwNyk7XHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XHJcbn1cclxuXHJcbiJdfQ== */"]
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


      var _buttons_button_ex_button_ex_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../buttons/button-ex/button-ex.component */
      94874);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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


      var _inputs_story_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../inputs/story-input.component */
      83168);

      var _c0 = ["formHeader"];
      var _c1 = ["storybook-input"];

      function RegistryFormComponent_a_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "complete the registration by filling the missing info:");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function RegistryFormComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "storybook-button-successfully", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function RegistryFormComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function RegistryFormComponent_div_16_storybook_input_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "storybook-input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onArchiveInput", function RegistryFormComponent_div_16_storybook_input_1_Template_storybook_input_onArchiveInput_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r9.onArchiveInput.emit($event);
          })("onPinInput", function RegistryFormComponent_div_16_storybook_input_1_Template_storybook_input_onPinInput_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r11.onPinInput.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var storyInput_r8 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("storyInput", storyInput_r8)("currentForm", ctx_r7.mForm);
        }
      }

      function RegistryFormComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, RegistryFormComponent_div_16_storybook_input_1_Template, 1, 2, "storybook-input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r4.storyInputsInOrder);
        }
      }

      function RegistryFormComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "div", 22);
        }
      }

      function RegistryFormComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Login failed: ", ctx_r6.loginErrorMessage, " ");
        }
      } //import {BehaviorSubject} from "rxjs";
      //import {StoryInputComponent} from "../../inputs/story-input.component";

      /*
      @Directive({selector: 'storybook-input'})
      export class StoryInput {
        @Input() storyInput!: StoryInput;
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
          this.isLoginFailed = false;
          this.loginErrorMessage = '';
          /**
           * @ignore
           * Component property to define ordering of tasks
           */

          this.storyInputsInOrder = [];
          this.mForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({});
          /*username: new FormControl('', Validators.minLength(2)),
          password: new FormControl('T@diran2022', Validators.minLength(2)),
          email: new FormControl('', Validators.email),
          phone: new FormControl(null, Validators.pattern(new RegExp("[0-9 ]{12}")))*/

          this.changeLog = [];
          this.isRegSuccess = false; // tslint:disable-next-line: no-output-on-prefix

          this.onPinInput = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter(); // tslint:disable-next-line: no-output-on-prefix

          this.onArchiveInput = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
          this.sendRegReq = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
          this.clickXButton = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
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
        return new (t || RegistryFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2));
      };

      RegistryFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: RegistryFormComponent,
        selectors: [["storybook-registry-form"]],
        viewQuery: function RegistryFormComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.mainHeader = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.storybookInput = _t.first);
          }
        },
        inputs: {
          formService: "formService",
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
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]],
        decls: 21,
        vars: 8,
        consts: [["id", "main-login-card", 1, "col-md-12"], [1, "card-container"], [1, "h-100", "d-flex", "align-items-center", "justify-content-center"], ["id", "button-ex", 3, "click"], [1, "form-header"], [1, "main-form-header"], ["formHeader", ""], ["class", "sub-form-header", 4, "ngIf"], ["name", "currentForm", 3, "formGroup"], [1, "Vector"], ["style", "margin-top: 50px", 4, "ngIf"], [1, "login-button"], [4, "ngIf"], ["class", "thematic-break", 4, "ngIf"], ["size", "small", "label", "Continue", "type", "button", 3, "label", "click"], [1, "form-group"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [1, "sub-form-header"], [2, "margin-top", "50px"], ["id", "button-successfully", 2, "position", "relative", "margin-top", "50px"], [3, "storyInput", "currentForm", "onArchiveInput", "onPinInput", 4, "ngFor", "ngForOf"], [3, "storyInput", "currentForm", "onArchiveInput", "onPinInput"], [1, "thematic-break"], ["role", "alert", 1, "alert", "alert-danger"]],
        template: function RegistryFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "storybook-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "storybook-button-ex", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistryFormComponent_Template_storybook_button_ex_click_3_listener() {
              return ctx.clickXButton.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Complete Registration");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, RegistryFormComponent_a_9_Template, 2, 0, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, RegistryFormComponent_div_13_Template, 2, 0, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, RegistryFormComponent_div_15_Template, 2, 0, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, RegistryFormComponent_div_16_Template, 2, 1, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, RegistryFormComponent_div_17_Template, 1, 0, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "storybook-button-continue", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RegistryFormComponent_Template_storybook_button_continue_click_18_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, RegistryFormComponent_div_20_Template, 2, 1, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isRegSuccess);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.mForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isRegSuccess);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isRegSuccess && ctx.storyInputsInOrder.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isRegSuccess);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.isRegSuccess);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("label", ctx.isRegSuccess ? "Continue" : "Complete Rgistration");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLoginFailed);
          }
        },
        directives: [_cards_card_component__WEBPACK_IMPORTED_MODULE_0__["default"], _buttons_button_ex_button_ex_component__WEBPACK_IMPORTED_MODULE_1__.ButtonExComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _buttons_button_continue_button_continue_component__WEBPACK_IMPORTED_MODULE_2__.ButtonContinueComponent, _buttons_button_successfully_button_successfully_component__WEBPACK_IMPORTED_MODULE_3__.ButtonSuccessfullyComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _inputs_story_input_component__WEBPACK_IMPORTED_MODULE_4__.StoryInputComponent],
        styles: [".Vector[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 637.5px;\r\n  height: 430px;\r\n  left: calc(50% - 637.5px/2 - 1.25px);\r\n  top: calc(50% - 479px/2 - 0.5px);\r\n}\r\n\r\n.form[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 3.18%;\r\n  right: 14.78%;\r\n  top: 0;\r\n  bottom: 0;\r\n  border-radius: 14px;\r\n  box-shadow: -4px 4px 10px 0 rgba(88, 166, 228, 0.3);\r\n  background-color: #fff;\r\n}\r\n\r\n.card-container.card[_ngcontent-%COMP%] {\r\n  max-width: 400px !important;\r\n  padding: 10px 10px;\r\n}\r\n\r\n.col-md-12[_ngcontent-%COMP%]{\r\n  position: center;\r\n  width: 637.5px;\r\n  height: 819px;\r\n  left: calc(50% - 637.5px/2 - 0.25px);\r\n  top: calc(50% - 819px/2 - 0.5px);\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 5.18%;\r\n  right: 4.78%;\r\n  top: 0;\r\n  bottom: 0;\r\n  border-radius: 14px;\r\n  box-shadow: -4px 4px 10px 0 rgba(88, 166, 228, 0.3);\r\n  background-color: #fff;\r\n}\r\n\r\n.form-header[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 12.94%;\r\n  bottom: 77.05%;\r\n\r\n  width: 460px;\r\n  height: 92px;\r\n  flex-grow: 0;\r\n  margin: 0 0 19.8px;\r\n  font-family: \"Noto Sans\", ui-serif;\r\n  font-size: 40px;\r\n  font-weight: bolder;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: 45px;\r\n  letter-spacing: -0.011px;\r\n  text-align: left;\r\n  color: #000000;\r\n}\r\n\r\n.main-form-header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 447px;\r\n  height: 52px;\r\n  flex-grow: 0;\r\n  margin: 0 0 0 0;\r\n  font-family: \"Noto Sans\", ui-serif;\r\n  font-size: 40px;\r\n  font-weight: bolder;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: 45px;\r\n  letter-spacing: -0.011px;\r\n  text-align: left;\r\n  color: #000000;\r\n}\r\n\r\n.sub-form-header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n\r\n\r\n  width: 446px;\r\n  height: 32px;\r\n  flex-grow: 0;\r\n  margin: 0 0 0 0;\r\n  font-family: \"Noto Sans\", ui-serif;\r\n  font-size: 17px;\r\n  font-weight: bolder;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: 31px;\r\n  letter-spacing: -0.011px;\r\n  text-align: left;\r\n  color: #000000;\r\n}\r\n\r\n.login-button[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 445px;\r\n  height: 102px;\r\n  left: calc(50% - 445px/2 - 0.5px);\r\n  top: calc(50% - 101.16px/2 - 171.58px);\r\n}\r\n\r\n.forgot-password[_ngcontent-%COMP%] {\r\n  \r\n\r\n  font-family: \"Noto Sans\", ui-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 17px;\r\n  line-height: 31px;\r\n  \r\n\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  letter-spacing: -0.011em;\r\n  -webkit-text-decoration-line: underline;\r\n          text-decoration-line: underline;\r\n\r\n  color: #000000;\r\n}\r\n\r\n.thematic-break[_ngcontent-%COMP%] {\r\n  margin: 20px 2px 38px 2.5px;\r\n  background-color: #3d8ecf;\r\n  border-top-width: 1px;\r\n  border-top-color: rgb(61, 142, 207);\r\n  border-top-style: solid;\r\n}\r\n\r\n#button-successfully[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: 240px;\r\n}\r\n\r\n#button-ex[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 48px;\r\n  left: 99px;\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJ5LWZvcm0uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLE1BQU07RUFDTixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLG1EQUFtRDtFQUNuRCxzQkFBc0I7QUFDeEI7O0FBSUE7RUFDRSwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLG1EQUFtRDtFQUNuRCxzQkFBc0I7QUFDeEI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGNBQWM7O0VBRWQsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCOzs7RUFHbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGlDQUFpQztFQUNqQyxzQ0FBc0M7QUFDeEM7O0FBR0E7RUFDRSx3QkFBd0I7O0VBRXhCLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUNBQXFDOztFQUVyQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsdUNBQStCO1VBQS9CLCtCQUErQjs7RUFFL0IsY0FBYztBQUNoQjs7QUFJQTtFQUNFLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLG1DQUFtQztFQUNuQyx1QkFBdUI7QUFDekI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0FBQ1giLCJmaWxlIjoicmVnaXN0cnktZm9ybS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuVmVjdG9yIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDYzNy41cHg7XHJcbiAgaGVpZ2h0OiA0MzBweDtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDYzNy41cHgvMiAtIDEuMjVweCk7XHJcbiAgdG9wOiBjYWxjKDUwJSAtIDQ3OXB4LzIgLSAwLjVweCk7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMy4xOCU7XHJcbiAgcmlnaHQ6IDE0Ljc4JTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgYm94LXNoYWRvdzogLTRweCA0cHggMTBweCAwIHJnYmEoODgsIDE2NiwgMjI4LCAwLjMpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5cclxuLmNhcmQtY29udGFpbmVyLmNhcmQge1xyXG4gIG1heC13aWR0aDogNDAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbn1cclxuLmNvbC1tZC0xMntcclxuICBwb3NpdGlvbjogY2VudGVyO1xyXG4gIHdpZHRoOiA2MzcuNXB4O1xyXG4gIGhlaWdodDogODE5cHg7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSA2MzcuNXB4LzIgLSAwLjI1cHgpO1xyXG4gIHRvcDogY2FsYyg1MCUgLSA4MTlweC8yIC0gMC41cHgpO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUuMTglO1xyXG4gIHJpZ2h0OiA0Ljc4JTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgYm94LXNoYWRvdzogLTRweCA0cHggMTBweCAwIHJnYmEoODgsIDE2NiwgMjI4LCAwLjMpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEyLjk0JTtcclxuICBib3R0b206IDc3LjA1JTtcclxuXHJcbiAgd2lkdGg6IDQ2MHB4O1xyXG4gIGhlaWdodDogOTJweDtcclxuICBmbGV4LWdyb3c6IDA7XHJcbiAgbWFyZ2luOiAwIDAgMTkuOHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiLCB1aS1zZXJpZjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5tYWluLWZvcm0taGVhZGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDQ0N3B4O1xyXG4gIGhlaWdodDogNTJweDtcclxuICBmbGV4LWdyb3c6IDA7XHJcbiAgbWFyZ2luOiAwIDAgMCAwO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiLCB1aS1zZXJpZjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcbi5zdWItZm9ybS1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcblxyXG4gIHdpZHRoOiA0NDZweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgZmxleC1ncm93OiAwO1xyXG4gIG1hcmdpbjogMCAwIDAgMDtcclxuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIiwgdWktc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMTFweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4ubG9naW4tYnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDQ0NXB4O1xyXG4gIGhlaWdodDogMTAycHg7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSA0NDVweC8yIC0gMC41cHgpO1xyXG4gIHRvcDogY2FsYyg1MCUgLSAxMDEuMTZweC8yIC0gMTcxLjU4cHgpO1xyXG59XHJcblxyXG5cclxuLmZvcmdvdC1wYXNzd29yZCB7XHJcbiAgLyogRCBVbmRlckxpbmUgUmVndWxhciAqL1xyXG5cclxuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIiwgdWktc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMXB4O1xyXG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAxODMlICovXHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMWVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcblxyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG5cclxuXHJcbi50aGVtYXRpYy1icmVhayB7XHJcbiAgbWFyZ2luOiAyMHB4IDJweCAzOHB4IDIuNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDhlY2Y7XHJcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xyXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYig2MSwgMTQyLCAyMDcpO1xyXG4gIGJvcmRlci10b3Atc3R5bGU6IHNvbGlkO1xyXG59XHJcblxyXG5cclxuI2J1dHRvbi1zdWNjZXNzZnVsbHkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAyNDBweDtcclxufVxyXG5cclxuXHJcbiNidXR0b24tZXgge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDQ4cHg7XHJcbiAgbGVmdDogOTlweDtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbiJdfQ== */"]
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


      var _inputs_story_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../inputs/story-input.component */
      83168);
      /* harmony import */


      var _app_storybook_pipes_api_error_message_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../app/storybook/pipes/api-error-message.pipe */
      57074);

      var _c0 = ["formHeader"];
      var _c1 = ["storybook-input"];

      function ReplacePassFormComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "storybook-button-successfully", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ReplacePassFormComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "empty");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }
      }

      function ReplacePassFormComponent_div_15_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 20);
        }
      }

      function ReplacePassFormComponent_div_15_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "apiErrorMessage");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r6.status == null ? null : ctx_r6.status.errorFieldSubmitted["password"]), " ");
        }
      }

      function ReplacePassFormComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "storybook-input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onArchiveInput", function ReplacePassFormComponent_div_15_Template_storybook_input_onArchiveInput_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r7.onArchiveInput.emit($event);
          })("onPinInput", function ReplacePassFormComponent_div_15_Template_storybook_input_onPinInput_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r9.onPinInput.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ReplacePassFormComponent_div_15_div_2_Template, 1, 0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "storybook-input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onArchiveInput", function ReplacePassFormComponent_div_15_Template_storybook_input_onArchiveInput_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r10.onArchiveInput.emit($event);
          })("onPinInput", function ReplacePassFormComponent_div_15_Template_storybook_input_onPinInput_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r11.onPinInput.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ReplacePassFormComponent_div_15_span_4_Template, 5, 3, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "storybook-input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onArchiveInput", function ReplacePassFormComponent_div_15_Template_storybook_input_onArchiveInput_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r12.onArchiveInput.emit($event);
          })("onPinInput", function ReplacePassFormComponent_div_15_Template_storybook_input_onPinInput_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

            return ctx_r13.onPinInput.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("storyInput", ctx_r3.storyInputsInOrder[0])("currentForm", ctx_r3.mForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r3.isRepSuccess);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("storyInput", ctx_r3.storyInputsInOrder[1])("currentForm", ctx_r3.mForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.status.submitted && ctx_r3.status.errorFieldSubmitted["password"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("storyInput", ctx_r3.storyInputsInOrder[2])("currentForm", ctx_r3.mForm);
        }
      }

      function ReplacePassFormComponent_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Login failed: ", ctx_r4.loginErrorMessage, " ");
        }
      } //import {BehaviorSubject} from "rxjs";
      //import {StoryInputComponent} from "../../inputs/story-input.component";

      /*
      @Directive({selector: 'storybook-input'})
      export class StoryInput {
        @Input() storyInput!: StoryInput;
      }
      */


      var ReplacePassFormComponent = /*#__PURE__*/function () {
        function ReplacePassFormComponent(renderer) {
          _classCallCheck(this, ReplacePassFormComponent);

          this.renderer = renderer;
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
          this.mForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({});
          /*username: new FormControl('', Validators.minLength(2)),
          password: new FormControl('T@diran2022', Validators.minLength(2)),
          email: new FormControl('', Validators.email),
          phone: new FormControl(null, Validators.pattern(new RegExp("[0-9 ]{12}")))*/

          this.changeLog = [];
          this.isRepSuccess = false; // tslint:disable-next-line: no-output-on-prefix

          this.onPinInput = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter(); // tslint:disable-next-line: no-output-on-prefix

          this.onArchiveInput = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
          this.sendRegReq = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
          this.clickXButton = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
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
        return new (t || ReplacePassFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.Renderer2));
      };

      ReplacePassFormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
        type: ReplacePassFormComponent,
        selectors: [["storybook-replace-pass-form"]],
        viewQuery: function ReplacePassFormComponent_Query(rf, ctx) {
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
          mForm: "mForm",
          status: "status",
          isRepSuccess: "isRepSuccess",
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
        vars: 6,
        consts: [["id", "main-login-card", 1, "col-md-12"], [1, "card-container"], [1, "h-100", "d-flex", "align-items-center", "justify-content-center"], ["id", "button-ex", 3, "click"], [1, "form-header"], [1, "main-form-header"], ["formHeader", ""], ["name", "currentForm", 3, "formGroup"], [1, "Vector"], ["style", "margin-top: 50px", 4, "ngIf"], [1, "login-button"], [4, "ngIf"], ["size", "small", "label", "Continue", "type", "button", 3, "label", "click"], [1, "form-group"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], [2, "margin-top", "50px"], ["id", "button-successfully", 2, "position", "relative", "margin-top", "50px"], [3, "storyInput", "currentForm", "onArchiveInput", "onPinInput"], ["class", "thematic-break", 4, "ngIf"], ["class", "text-danger error-input", "style", "white-space: pre-line;  font-size: 14px;", 4, "ngIf"], [1, "thematic-break"], [1, "text-danger", "error-input", 2, "white-space", "pre-line", "font-size", "14px"], ["role", "alert", 1, "alert", "alert-danger"]],
        template: function ReplacePassFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "storybook-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "storybook-button-ex", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ReplacePassFormComponent_Template_storybook_button_ex_click_3_listener() {
              return ctx.clickXButton.emit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "a", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Change Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ReplacePassFormComponent_div_12_Template, 2, 0, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ReplacePassFormComponent_div_14_Template, 2, 0, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ReplacePassFormComponent_div_15_Template, 6, 8, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "storybook-button-continue", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ReplacePassFormComponent_Template_storybook_button_continue_click_18_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, ReplacePassFormComponent_div_20_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.mForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isRepSuccess);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isRepSuccess && ctx.storyInputsInOrder.length === 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.isRepSuccess);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("label", ctx.isRepSuccess ? "Continue" : "Change Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoginFailed);
          }
        },
        directives: [_cards_card_component__WEBPACK_IMPORTED_MODULE_0__["default"], _buttons_button_ex_button_ex_component__WEBPACK_IMPORTED_MODULE_1__.ButtonExComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _buttons_button_continue_button_continue_component__WEBPACK_IMPORTED_MODULE_2__.ButtonContinueComponent, _buttons_button_successfully_button_successfully_component__WEBPACK_IMPORTED_MODULE_3__.ButtonSuccessfullyComponent, _inputs_story_input_component__WEBPACK_IMPORTED_MODULE_4__.StoryInputComponent],
        pipes: [_app_storybook_pipes_api_error_message_pipe__WEBPACK_IMPORTED_MODULE_5__.ApiErrorMessagePipe],
        styles: [".Vector[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 637.5px;\r\n  height: 430px;\r\n  left: calc(50% - 637.5px/2 - 1.25px);\r\n  top: calc(50% - 479px/2 - 0.5px);\r\n}\r\n\r\n.form[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 3.18%;\r\n  right: 14.78%;\r\n  top: 0;\r\n  bottom: 0;\r\n  border-radius: 14px;\r\n  box-shadow: -4px 4px 10px 0 rgba(88, 166, 228, 0.3);\r\n  background-color: #fff;\r\n}\r\n\r\n.card-container.card[_ngcontent-%COMP%] {\r\n  max-width: 400px !important;\r\n  padding: 10px 10px;\r\n}\r\n\r\n.col-md-12[_ngcontent-%COMP%]{\r\n  position: center;\r\n  width: 637.5px;\r\n  height: 819px;\r\n  left: calc(50% - 637.5px/2 - 0.25px);\r\n  top: calc(50% - 819px/2 - 0.5px);\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 5.18%;\r\n  right: 4.78%;\r\n  top: 0;\r\n  bottom: 0;\r\n  border-radius: 14px;\r\n  box-shadow: -4px 4px 10px 0 rgba(88, 166, 228, 0.3);\r\n  background-color: #fff;\r\n}\r\n\r\n.form-header[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 12.94%;\r\n  bottom: 77.05%;\r\n\r\n  width: 460px;\r\n  height: 92px;\r\n  flex-grow: 0;\r\n  margin: 0 0 19.8px;\r\n  font-family: \"Noto Sans\", ui-serif;\r\n  font-size: 40px;\r\n  font-weight: bolder;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: 45px;\r\n  letter-spacing: -0.011px;\r\n  text-align: left;\r\n  color: #000000;\r\n}\r\n\r\n.main-form-header[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 447px;\r\n  height: 52px;\r\n  flex-grow: 0;\r\n  margin: 0 0 0 0;\r\n  font-family: \"Noto Sans\", ui-serif;\r\n  font-size: 40px;\r\n  font-weight: bolder;\r\n  font-style: normal;\r\n  font-stretch: normal;\r\n  line-height: 45px;\r\n  letter-spacing: -0.011px;\r\n  text-align: left;\r\n  color: #000000;\r\n}\r\n\r\n.login-button[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  width: 445px;\r\n  height: 100%;\r\n  left: calc(50% - 445px/2 - 0.5px);\r\n  top: calc(50% - 101.16px/2 - 171.58px);\r\n}\r\n\r\n.forgot-password[_ngcontent-%COMP%] {\r\n  \r\n\r\n  font-family: \"Noto Sans\", ui-serif;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 17px;\r\n  line-height: 31px;\r\n  \r\n\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  letter-spacing: -0.011em;\r\n  -webkit-text-decoration-line: underline;\r\n          text-decoration-line: underline;\r\n\r\n  color: #000000;\r\n}\r\n\r\n.thematic-break[_ngcontent-%COMP%] {\r\n  margin: 20px 2px 10px 2.5px;\r\n  background-color: #3d8ecf;\r\n  border-top-width: 1px;\r\n  border-top-color: #3d8ecf;\r\n  border-top-style: solid;\r\n}\r\n\r\n#button-successfully[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: 240px;\r\n}\r\n\r\n#button-ex[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 48px;\r\n  left: 99px;\r\n  width: 20px;\r\n  height: 20px;\r\n  margin: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcGxhY2UtcGFzcy1mb3JtLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixNQUFNO0VBQ04sU0FBUztFQUNULG1CQUFtQjtFQUNuQixtREFBbUQ7RUFDbkQsc0JBQXNCO0FBQ3hCOztBQUlBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixNQUFNO0VBQ04sU0FBUztFQUNULG1CQUFtQjtFQUNuQixtREFBbUQ7RUFDbkQsc0JBQXNCO0FBQ3hCOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxjQUFjOztFQUVkLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFLQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLGlDQUFpQztFQUNqQyxzQ0FBc0M7QUFDeEM7O0FBR0E7RUFDRSx3QkFBd0I7O0VBRXhCLGtDQUFrQztFQUNsQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIscUNBQXFDOztFQUVyQyxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix3QkFBd0I7RUFDeEIsdUNBQStCO1VBQS9CLCtCQUErQjs7RUFFL0IsY0FBYztBQUNoQjs7QUFJQTtFQUNFLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFDekIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6Qix1QkFBdUI7QUFDekI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0FBQ1giLCJmaWxlIjoicmVwbGFjZS1wYXNzLWZvcm0uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlZlY3RvciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA2MzcuNXB4O1xyXG4gIGhlaWdodDogNDMwcHg7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSA2MzcuNXB4LzIgLSAxLjI1cHgpO1xyXG4gIHRvcDogY2FsYyg1MCUgLSA0NzlweC8yIC0gMC41cHgpO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDMuMTglO1xyXG4gIHJpZ2h0OiAxNC43OCU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIGJveC1zaGFkb3c6IC00cHggNHB4IDEwcHggMCByZ2JhKDg4LCAxNjYsIDIyOCwgMC4zKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuXHJcbi5jYXJkLWNvbnRhaW5lci5jYXJkIHtcclxuICBtYXgtd2lkdGg6IDQwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG59XHJcbi5jb2wtbWQtMTJ7XHJcbiAgcG9zaXRpb246IGNlbnRlcjtcclxuICB3aWR0aDogNjM3LjVweDtcclxuICBoZWlnaHQ6IDgxOXB4O1xyXG4gIGxlZnQ6IGNhbGMoNTAlIC0gNjM3LjVweC8yIC0gMC4yNXB4KTtcclxuICB0b3A6IGNhbGMoNTAlIC0gODE5cHgvMiAtIDAuNXB4KTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiA1LjE4JTtcclxuICByaWdodDogNC43OCU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIGJveC1zaGFkb3c6IC00cHggNHB4IDEwcHggMCByZ2JhKDg4LCAxNjYsIDIyOCwgMC4zKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLmZvcm0taGVhZGVyIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMi45NCU7XHJcbiAgYm90dG9tOiA3Ny4wNSU7XHJcblxyXG4gIHdpZHRoOiA0NjBweDtcclxuICBoZWlnaHQ6IDkycHg7XHJcbiAgZmxleC1ncm93OiAwO1xyXG4gIG1hcmdpbjogMCAwIDE5LjhweDtcclxuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIiwgdWktc2VyaWY7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMTFweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG4ubWFpbi1mb3JtLWhlYWRlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA0NDdweDtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgZmxleC1ncm93OiAwO1xyXG4gIG1hcmdpbjogMCAwIDAgMDtcclxuICBmb250LWZhbWlseTogXCJOb3RvIFNhbnNcIiwgdWktc2VyaWY7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMTFweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4ubG9naW4tYnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDQ0NXB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsZWZ0OiBjYWxjKDUwJSAtIDQ0NXB4LzIgLSAwLjVweCk7XHJcbiAgdG9wOiBjYWxjKDUwJSAtIDEwMS4xNnB4LzIgLSAxNzEuNThweCk7XHJcbn1cclxuXHJcblxyXG4uZm9yZ290LXBhc3N3b3JkIHtcclxuICAvKiBEIFVuZGVyTGluZSBSZWd1bGFyICovXHJcblxyXG4gIGZvbnQtZmFtaWx5OiBcIk5vdG8gU2Fuc1wiLCB1aS1zZXJpZjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbiAgLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQsIG9yIDE4MyUgKi9cclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDExZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxuXHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcblxyXG5cclxuLnRoZW1hdGljLWJyZWFrIHtcclxuICBtYXJnaW46IDIwcHggMnB4IDEwcHggMi41cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNkOGVjZjtcclxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzNkOGVjZjtcclxuICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcclxufVxyXG5cclxuXHJcbiNidXR0b24tc3VjY2Vzc2Z1bGx5IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMjQwcHg7XHJcbn1cclxuXHJcblxyXG4jYnV0dG9uLWV4IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA0OHB4O1xyXG4gIGxlZnQ6IDk5cHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4iXX0= */"]
      });
      /***/
    },

    /***/
    83168:
    /*!*****************************************************!*\
      !*** ./src/stories/inputs/story-input.component.ts ***!
      \*****************************************************/

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


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _pass_strength_pass_strength_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../pass-strength/pass-strength.component */
      479);

      function StoryInputComponent_button_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function StoryInputComponent_button_11_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r4.showPassChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function StoryInputComponent_span_14_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r6.storyInput == null ? null : ctx_r6.storyInput.state, " is required!");
        }
      }

      function StoryInputComponent_span_14_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r7.storyInput == null ? null : ctx_r7.storyInput.state, " is required!");
        }
      }

      function StoryInputComponent_span_14_span_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r8.storyInput == null ? null : ctx_r8.storyInput.state, " is required!");
        }
      }

      function StoryInputComponent_span_14_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r9.storyInput == null ? null : ctx_r9.storyInput.state, " is required!");
        }
      }

      function StoryInputComponent_span_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, StoryInputComponent_span_14_span_1_Template, 3, 1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StoryInputComponent_span_14_span_2_Template, 3, 1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, StoryInputComponent_span_14_span_3_Template, 3, 1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, StoryInputComponent_span_14_span_4_Template, 3, 1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "username");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "phone");
        }
      }

      function StoryInputComponent_div_15_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "ok!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function StoryInputComponent_div_15_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "ok!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function StoryInputComponent_div_15_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "ok!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function StoryInputComponent_div_15_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "ok!");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function StoryInputComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, StoryInputComponent_div_15_div_1_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, StoryInputComponent_div_15_div_2_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, StoryInputComponent_div_15_div_3_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, StoryInputComponent_div_15_div_4_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "username");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "password");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "phone");
        }
      }

      function StoryInputComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "storybook-pass-strength", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("passwordToCheck", ctx_r3.password == null ? null : ctx_r3.password.value)("strength", 10);
        }
      }

      var _StoryInputComponent = /*#__PURE__*/function () {
        function _StoryInputComponent() {
          _classCallCheck(this, _StoryInputComponent);

          var _a; // tslint:disable-next-line: no-output-on-prefix


          this.onPinInput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter(); // tslint:disable-next-line: no-output-on-prefix

          this.onArchiveInput = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
          this.hideInput = false;
          this.isStrength = ((_a = this.storyInput) === null || _a === void 0 ? void 0 : _a.state) === 'NEW PASSWORD' ? 'storybook-input--addStrength' : 'storybook-input--clearStrength';
          this.isPasswordTextHide = false;
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
          key: "formControler",
          get: function get() {
            var _a;
            /*
                let alertType = this.storyInput?.title.toString();
            
                switch (alertType) {
                  case "username":
                    return this.currentForm.get('username')!;
                  case "password":
                    return this.currentForm.get('password')!;
                  case "username":
                    return this.currentForm.get('username')!;
                  case "password":
                    return this.currentForm.get('password')!;
                  default:
                    break;
                }*/


            return this.currentForm.get((_a = this.storyInput) === null || _a === void 0 ? void 0 : _a.title.toString());
          }
          /*
          */

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

      _StoryInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _StoryInputComponent,
        selectors: [["storybook-input"]],
        inputs: {
          storyInput: "storyInput",
          hideInput: "hideInput",
          currentForm: "currentForm"
        },
        outputs: {
          onPinInput: "onPinInput",
          onArchiveInput: "onArchiveInput"
        },
        decls: 17,
        vars: 18,
        consts: [["id", "parent3", 3, "hidden", "ngClass"], ["id", "parent1"], [1, "main", 3, "formGroup"], [1, "user-name", "D-Caps-Regular"], [1, "Vector2", 3, "for"], ["alt", "icon input userName", 1, "icon-input", 3, "src", "name"], ["required", "", 1, "DanK203", 3, "type", "id", "name", "formControlName", "placeholder"], ["class", "icon-input-showpass", "type", "button", 3, "click", 4, "ngIf"], ["hidden", "", 1, "D-Caps-Regular", 2, "line-height", "0", 3, "ngSwitch"], ["class", "position-absolute", 4, "ngIf"], [4, "ngIf"], ["id", "parent2", 4, "ngIf"], ["type", "button", 1, "icon-input-showpass", 3, "click"], ["src", "./assets/images/EyeIcon.png", "alt", "icon input type", 1, "icon-input-showpass"], [1, "position-absolute"], [4, "ngSwitchCase"], ["id", "parent2"], [1, "absolute"], ["id", "pass-strength", 3, "passwordToCheck", "strength"]],
        template: function StoryInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, StoryInputComponent_button_11_Template, 2, 0, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, StoryInputComponent_span_14_Template, 5, 4, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, StoryInputComponent_div_15_Template, 5, 4, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, StoryInputComponent_div_16_Template, 3, 2, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", ctx.storyInput == null ? null : ctx.storyInput.hide)("ngClass", ctx.classes);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.currentForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.storyInput == null ? null : ctx.storyInput.state);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("for", ctx.storyInput == null ? null : ctx.storyInput.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-label", (ctx.storyInput == null ? null : ctx.storyInput.id) + "");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.storyInput == null ? null : ctx.storyInput.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", ctx.storyInput == null ? null : ctx.storyInput.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("type", ctx.storyInput == null ? null : ctx.storyInput.type);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("id", ctx.storyInput == null ? null : ctx.storyInput.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", ctx.storyInput == null ? null : ctx.storyInput.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("formControlName", ctx.storyInput == null ? null : ctx.storyInput.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("placeholder", ctx.storyInput == null ? null : ctx.storyInput.placeholder);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isPasswordTextHide);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.storyInput == null ? null : ctx.storyInput.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.formControler == null ? null : ctx.formControler.invalid) && ((ctx.formControler == null ? null : ctx.formControler.dirty) || (ctx.formControler == null ? null : ctx.formControler.touched)));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.formControler == null ? null : ctx.formControler.valid) && ((ctx.formControler == null ? null : ctx.formControler.dirty) || (ctx.formControler == null ? null : ctx.formControler.touched)));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.storyInput == null ? null : ctx.storyInput.state) === "NEW PASSWORD");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchCase, _pass_strength_pass_strength_component__WEBPACK_IMPORTED_MODULE_0__["default"]],
        styles: [".main[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 102px;\n  top: 0;\n  \n  background-color: rgba(255, 255, 255, 0);\n}\n\n#storybook-pass[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 0, 0, 0.11);\n  background-color: rgba(255, 255, 255, 0);\n}\n\n#parent1[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 1px;\n  height: 100px;\n  width: 100%;\n  \n  background-color: rgba(255, 255, 255, 0);\n}\n\n#parent2[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 45px;\n  width: 100%;\n  margin-top: 3px;\n  \n  bottom: 0;\n  \n}\n\n#parent3[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  \n  \n}\n\n\n\n.user-name[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 300px;\n  height: 35px;\n  left: 0%;\n  right: 82.7%;\n  top: 10%;\n  bottom: 68.37%;\n  \n  display: flex;\n  align-items: center;\n  letter-spacing: -0.011em;\n  text-transform: uppercase;\n  color: #000000;\n}\n\n\n\n.D-Caps-Regular[_ngcontent-%COMP%] {\n  font-family: Noto Sans, ui-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 31px;\n}\n\nimg.icon-input[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 22.72px;\n  height: 26.74px;\n  left: 20px;\n  bottom: 8px;\n  transform: rotate(0deg);\n  background-position: bottom;\n}\n\n.DanK203[_ngcontent-%COMP%] {\n  position: relative;\n  height: 25px;\n  width: 228px;\n  left: 35px;\n  bottom: -5px;\n  margin: 4.2px 1px 2.8px 20.3px;\n  \n  -o-object-fit: contain;\n     object-fit: contain;\n  font-family: Noto Sans, ui-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 17px;\n  line-height: 48%;\n  \n  box-shadow: none;\n  display: flex;\n  align-items: center;\n  letter-spacing: -0.19px;\n  border-color: rgba(255, 255, 255, 0);\n  color: #000000;\n}\n\n.icon-input-showpass[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 33px;\n  height: 20px;\n  right: 10px;\n  bottom: 11px;\n  padding: 0px;\n  margin: 0;\n  border-bottom-width: 0px;\n  background-color: rgba(45, 148, 55, 0);\n}\n\nimg.icon-input-showpass[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1px;\n  right: 1px;\n  width: inherit;\n  height: inherit;\n  padding: 0px;\n  margin: 0px;\n  \n}\n\ninput[type=text][_ngcontent-%COMP%]:focus {\n  background: #99999900;\n  box-shadow: 0 0 5px #99999900;\n  border-top-color: #99999900;\n  border-left-color: #99999900;\n  border-right-color: #99999900;\n}\n\ninput[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #C8C8C8;\n}\n\ninput[_ngcontent-%COMP%]::placeholder {\n  color: #C8C8C8;\n}\n\ninput[type=password][_ngcontent-%COMP%]:focus {\n  color: #000000;\n  background: #99999900;\n  box-shadow: 0 0 5px #99999900;\n  border-top-color: #99999900;\n  border-left-color: #99999900;\n  border-right-color: #99999900;\n}\n\n.Vector2[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  position: absolute;\n  left: 0.2%;\n  right: 0.03%;\n  top: 42.66%;\n  bottom: 0;\n  \n  border: 2px solid #3D8ECF;\n  border-radius: 10px;\n}\n\nlabel[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 10px;\n}\n\n.Button-App-Label[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 33px;\n  horiz-align: center;\n}\n\n.storybook-input--addStrength[_ngcontent-%COMP%] {\n  height: 160px;\n}\n\n.storybook-input--clearStrength[_ngcontent-%COMP%] {\n  height: 110px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3J5LWlucHV0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBOzt1QkFBQTtFQUdBLHdDQUFBO0FBSkY7O0FBUUE7RUFDRSx1Q0FBQTtFQUNBLHdDQUFBO0FBTEY7O0FBUUE7RUFDRSxnQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esd0NBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0E7NENBQUE7QUFKRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBOztzQkFBQTtFQUdBLDRDQUFBO0FBTEY7O0FBUUE7Ozs7Ozs7OztDQUFBOztBQVlBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFFQSxjQUFBO0FBUkY7O0FBWUEsbUJBQUE7O0FBQ0E7RUFDRSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFURjs7QUFhQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7QUFWRjs7QUFjQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBRUEscUJBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUVBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFFQSxvQ0FBQTtFQUNBLGNBQUE7QUFkRjs7QUFrQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHdCQUFBO0VBQ0Esc0NBQUE7QUFmRjs7QUFrQkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBO29EQUFBO0FBZEY7O0FBbUJBO0VBQ0UscUJBQUE7RUFDQSw2QkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQWhCRjs7QUFvQkE7RUFDRSxjQUFBO0FBakJGOztBQWdCQTtFQUNFLGNBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7QUFqQkY7O0FBcUJBO0VBQ0Usc0JBQUE7RUFDQSxrQkFBQTtFQUdBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFFQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQXJCRjs7QUF3QkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFyQkY7O0FBd0JBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBckJGOztBQXlCQTtFQUNJLGFBQUE7QUF0Qko7O0FBNEJBO0VBR0ksYUFBQTtBQTNCSiIsImZpbGUiOiJzdG9yeS1pbnB1dC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuJHRvdHRhbC1oZWlnaHQ6IDE2MHB4ICFkZWZhdWx0O1xyXG5cclxuLm1haW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMnB4O1xyXG4gIHRvcDogMDtcclxuICAvKmxlZnQ6IGNhbGMoNTAlIC0gNDQ1cHgvMiAtIDAuNXB4KTtcclxuICB0b3A6IGNhbGMoNTAlIC0gMTAxLjE2cHgvMiAtIDE3MS41OHB4KTtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4OyovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuXHJcbn1cclxuXHJcbiNzdG9yeWJvb2stcGFzcyB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDAsIDAsIDAuMTEpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbn1cclxuXHJcbiNwYXJlbnQxIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMXB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLypib3JkZXI6IDFweCBzb2xpZCAjYzAwNzdmOyovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxufVxyXG5cclxuI3BhcmVudDIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG4gIC8qbWFyZ2luLWJvdHRvbTogM3B4OyovXHJcbiAgYm90dG9tOiAwO1xyXG4gIC8qYm9yZGVyOiAxcHggc29saWQgIzhBQzAwNztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApOyovXHJcbn1cclxuXHJcbiNwYXJlbnQzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLypoZWlnaHQ6IDE2MHB4IDtcclxuICAgYm9yZGVyOiAxcHggc29saWQgIzA3MmNjMDtcclxubWFyZ2luLWJvdHRvbTogM3B4OyovXHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApOyovXHJcbn1cclxuXHJcbi8qXHJcbnNwYW4uYWJzb2x1dGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4QUMwMDc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxufVxyXG4qL1xyXG5cclxuXHJcbi51c2VyLW5hbWUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGxlZnQ6IDAlO1xyXG4gIHJpZ2h0OiA4Mi43JTtcclxuICB0b3A6IDEwJTtcclxuICBib3R0b206IDY4LjM3JTtcclxuICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCwgb3IgMjIzJSAqL1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDExZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcblxyXG4vKiBEIENhcHMgUmVndWxhciAqL1xyXG4uRC1DYXBzLVJlZ3VsYXIge1xyXG4gIGZvbnQtZmFtaWx5OiBOb3RvIFNhbnMsIHVpLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMzFweDtcclxufVxyXG5cclxuXHJcbmltZy5pY29uLWlucHV0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDIyLjcycHg7XHJcbiAgaGVpZ2h0OiAyNi43NHB4O1xyXG4gIGxlZnQ6IDIwcHg7XHJcbiAgYm90dG9tOiA4cHg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG59XHJcblxyXG5cclxuLkRhbksyMDMge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDIyOHB4O1xyXG4gIGxlZnQ6IDM1cHg7XHJcbiAgYm90dG9tOiAtNXB4O1xyXG4gIG1hcmdpbjogNC4ycHggMXB4IDIuOHB4IDIwLjNweDtcclxuXHJcbiAgLyogRCBFeGFtcGxlIEl0YWxpYyAqL1xyXG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgZm9udC1mYW1pbHk6IE5vdG8gU2FucywgdWktc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0OCU7XHJcbiAgLyogb3IgNjUlICovXHJcblxyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4xOXB4O1xyXG5cclxuICBib3JkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMCk7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcblxyXG4uaWNvbi1pbnB1dC1zaG93cGFzcyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAzM3B4O1xyXG4gIGhlaWdodDogMjBweDtcclxuICByaWdodDogMTBweDtcclxuICBib3R0b206IDExcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NSwgMTQ4LCA1NSwgMCk7XHJcbn1cclxuXHJcbmltZy5pY29uLWlucHV0LXNob3dwYXNzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAxcHg7XHJcbiAgcmlnaHQ6IDFweDtcclxuICB3aWR0aDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IGluaGVyaXQ7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIC8qb2JqZWN0LWZpdDogY29udGFpbjtcclxuICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDYxLCAxNDIsIDIwNywgMC4xNSk7Ki9cclxuXHJcbn1cclxuXHJcbmlucHV0W3R5cGU9dGV4dF06Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6ICM5OTk5OTkwMDtcclxuICBib3gtc2hhZG93OiAwIDAgNXB4ICM5OTk5OTkwMDtcclxuICBib3JkZXItdG9wLWNvbG9yOiAjOTk5OTk5MDA7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6ICM5OTk5OTkwMDtcclxuICBib3JkZXItcmlnaHQtY29sb3I6ICM5OTk5OTkwMDtcclxufVxyXG5cclxuXHJcbmlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3I6ICNDOEM4Qzg7XHJcbn1cclxuXHJcbmlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3VzIHtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBiYWNrZ3JvdW5kOiAjOTk5OTk5MDA7XHJcbiAgYm94LXNoYWRvdzogMCAwIDVweCAjOTk5OTk5MDA7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzk5OTk5OTAwO1xyXG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjOTk5OTk5MDA7XHJcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjOTk5OTk5MDA7XHJcbn1cclxuXHJcblxyXG4uVmVjdG9yMiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG5cclxuICBsZWZ0OiAwLjIlO1xyXG4gIHJpZ2h0OiAwLjAzJTtcclxuICB0b3A6IDQyLjY2JTtcclxuICBib3R0b206IDA7XHJcblxyXG4gIC8qIEJsdWUgKi9cclxuICBib3JkZXI6IDJweCBzb2xpZCAjM0Q4RUNGO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uQnV0dG9uLUFwcC1MYWJlbCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzNweDtcclxuICBob3Jpei1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLnN0b3J5Ym9vay1pbnB1dC0tYWRkU3RyZW5ndGgge1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuXHJcblxyXG5cclxufVxyXG5cclxuLnN0b3J5Ym9vay1pbnB1dC0tY2xlYXJTdHJlbmd0aCB7XHJcblxyXG5cclxuICAgIGhlaWdodDogMTEwcHg7XHJcblxyXG5cclxufVxyXG4iXX0= */"]
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
        consts: [[1, "Desktop-1Login-1", 3, "ngClass", "ngStyle"], ["src", "assets/images/icon-1.webp", "srcset", "./assets/images/icon-1@2x.webp 2x, /assets/images/icon-1@3x.webp 3x", "alt", "icon-1"], ["src", "assets/images/icon-2.webp", "srcset", "./assets/images/icon-2@2x.webp 2x, /assets/images/icon-2@3x.webp 3x", "alt", "icon-2fdf", 1, "icon-2"], ["size", "large"]],
        template: function Background1Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "figure", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "storybook-button-language", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "storybook-button-tadiran");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "storybook-button-globe");
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

          this.strength = 10;
        }

        _createClass(PassStrengthComponent, [{
          key: "strengthColor",
          value: function strengthColor(strength) {
            //let strength=this.strength;
            if (strength < 30) return 0;
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
              this.strength = this.strengthColor(PassStrengthComponent.measureStrength(password));
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
        styles: [".storybook-pass-strength[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 28px;\n  \n  margin-bottom: 20px;\n  \n  horiz-align: center;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  \n  text-align: center;\n  background: linear-gradient(to right, #ff2f00, #ff9f00) #ff2f00;\n}\n\n.center[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 20%;\n  \n  text-align: center;\n  height: 24px;\n  \n  left: calc(50% - 20%/2);\n}\n\n.mfont[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  \n  text-align: center;\n  \n  font-family: \"Noto Sans\", ui-serif;\n  font-style: italic;\n  font-weight: 400;\n  font-size: 13px;\n  line-height: 15px;\n  \n  \n  display: flex;\n  align-items: center;\n  letter-spacing: -0.011em;\n  text-transform: capitalize;\n  color: #000000;\n}\n\n\n\n.storybook-pass-strength--primary[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, yellow, #afd700) yellow;\n}\n\n.storybook-pass-strength--10[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #ff2f00, #ff9f00) #ff2f00;\n}\n\n.storybook-pass-strength--10[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #ff5f00, #ffef00) #ff5f00;\n}\n\n.storybook-pass-strength--40[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #ff8f00, #cfe700) #ff8f00;\n}\n\n.storybook-pass-strength--50[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, yellow, #afd700) yellow;\n}\n\n.storybook-pass-strength--60[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #dfef00, #8fc700) #dfef00;\n}\n\n.storybook-pass-strength--70[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #bfdf00, #6fbf00) #bfdf00;\n}\n\n.storybook-pass-strength--90[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #7fbf00, #2f9700) #7fbf00;\n}\n\n.storybook-pass-strength--100[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #5fbf00, green) #5fbf00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3Mtc3RyZW5ndGguc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUdBLFlBQUE7RUFFRixHQUFBO0VBQUssbUJBQUE7RUFFSCxHQUFBO0VBQUksbUJBQUE7RUFDSiwyQ0FBQTtFQUNDLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQywrREFBQTtBQUpKOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUVBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLHVCQUFBO0FBTkY7O0FBU0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxHQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNDLGtDQUFBO0VBQ0Msa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUFxQixvQ0FBQTtFQUV0QixHQUFBO0VBQUksYUFBQTtFQUNILG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUVELGNBQUE7QUFOSDs7QUFnQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQUE7O0FBcUJBO0VBRUUsNkRBNUJXO0FBY2I7O0FBa0JBO0VBQThCLCtEQW5DakI7QUFxQmI7O0FBZUE7RUFBOEIsK0RBbkNqQjtBQXdCYjs7QUFZQTtFQUE4QiwrREFuQ2pCO0FBMkJiOztBQVNBO0VBQThCLDZEQW5DakI7QUE4QmI7O0FBTUE7RUFBOEIsK0RBbkNqQjtBQWlDYjs7QUFHQTtFQUE4QiwrREFuQ2pCO0FBb0NiOztBQUFBO0VBQThCLCtEQW5DakI7QUF1Q2I7O0FBSEE7RUFBK0IsNkRBbkNqQjtBQTBDZCIsImZpbGUiOiJwYXNzLXN0cmVuZ3RoLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcblxyXG4uc3Rvcnlib29rLXBhc3Mtc3RyZW5ndGgge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcblxyXG4gIGhlaWdodDogMjhweDtcclxuXHJcbi8qKi8gbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgLyoqL2hvcml6LWFsaWduOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCA0cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgLypyZ2IoMTkxLCAxOTEsIDE5MSk7Ki9cclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMjU1LCA0NywgMCksIHJnYigyNTUsIDE1OSwgMCkpIHJnYigyNTUsIDQ3LCAwKTtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgLyptYXJnaW46IGF1dG87Ki9cclxuXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgLyp0b3A6IGNhbGMoNTAlIC0gMjRweC8yKTsqL1xyXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMjAlLzIpO1xyXG59XHJcblxyXG4ubWZvbnQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDVweDtcclxuICAvKiovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8qICBEIFN0cm9uZyBQYXNzd29yZCAqL1xyXG4gICBmb250LWZhbWlseTogJ05vdG8gU2FucycsIHVpLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNXB4OyAgIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAyNDAlKi9cclxuXHJcbiAgIC8qKi9kaXNwbGF5OiBmbGV4IDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDExZW07XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHJcbiAgIGNvbG9yOiAjMDAwMDAwO1xyXG59XHJcbiRzdHJlbmd0aDA6ICBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigyNTUsIDQ3LCAwKSwgcmdiKDI1NSwgMTU5LCAwKSkgcmdiKDI1NSwgNDcsIDApO1xyXG4kc3RyZW5ndGgzMDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMjU1LCA5NSwgMCksICByZ2IoMjU1LCAyMzksIDApKSByZ2IoMjU1LCA5NSwgMCk7XHJcbiRzdHJlbmd0aDQwOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigyNTUsIDE0MywgMCksIHJnYigyMDcsIDIzMSwgMCkpIHJnYigyNTUsIDE0MywgMCk7XHJcbiRzdHJlbmd0aDUwOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigyNTUsIDI1NSwgMCksIHJnYigxNzUsIDIxNSwgMCkpIHJnYigyNTUsIDI1NSwgMCk7XHJcbiRzdHJlbmd0aDYwOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigyMjMsIDIzOSwgMCksIHJnYigxNDMsIDE5OSwgMCkpIHJnYigyMjMsIDIzOSwgMCk7XHJcbiRzdHJlbmd0aDcwOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigxOTEsIDIyMywgMCksIHJnYigxMTEsIDE5MSwgMCkpIHJnYigxOTEsIDIyMywgMCk7XHJcbiRzdHJlbmd0aDkwOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigxMjcsIDE5MSwgMCksIHJnYig0NywgMTUxLCAwKSkgIHJnYigxMjcsIDE5MSwgMCk7XHJcbiRzdHJlbmd0aDEwMDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoOTUsIDE5MSwgMCksICByZ2IoMCwgMTI4LCAwKSkgICByZ2IoOTUsIDE5MSwgMCk7XHJcbi8qXHJcbiR2ZWhpY2xlU2VhdGluZzogJHN0cmVuZ3RoMDtcclxuXHJcbiRzdHJlbmd0aDogMzU7XHJcblxyXG5cclxuQGlmICgkc3RyZW5ndGggPCAzMCkgeyAkdmVoaWNsZVNlYXRpbmc6ICRzdHJlbmd0aDA7fVxyXG5AZWxzZSBpZiAoJHN0cmVuZ3RoIDwgNDApIHskdmVoaWNsZVNlYXRpbmc6ICRzdHJlbmd0aDMwO31cclxuQGVsc2UgaWYgKCRzdHJlbmd0aCA8IDUwKSB7JHZlaGljbGVTZWF0aW5nOiAkc3RyZW5ndGg0MDt9XHJcbkBlbHNlIGlmICgkc3RyZW5ndGggPCA2MCkgeyR2ZWhpY2xlU2VhdGluZzogJHN0cmVuZ3RoNTA7fVxyXG5AZWxzZSBpZiAoJHN0cmVuZ3RoIDwgNzApIHskdmVoaWNsZVNlYXRpbmc6ICRzdHJlbmd0aDYwO31cclxuQGVsc2UgaWYgKCRzdHJlbmd0aCA8IDkwKSB7JHZlaGljbGVTZWF0aW5nOiAkc3RyZW5ndGg3MDt9XHJcbkBlbHNlIGlmICgkc3RyZW5ndGggPCA5OSkgeyR2ZWhpY2xlU2VhdGluZzogJHN0cmVuZ3RoOTA7fVxyXG5AZWxzZSB7JHZlaGljbGVTZWF0aW5nOiAkc3RyZW5ndGgxMDA7fVxyXG5cclxuXHJcbiR2ZWhpY2xlU2VhdGluZzogbWFwLWdldCgoXHJcbiAgMzogJHN0cmVuZ3RoNjAsXHJcbiAgYnVzIDogMjAsXHJcbiksICRzdHJlbmd0aCk7XHJcbiovXHJcbi5zdG9yeWJvb2stcGFzcy1zdHJlbmd0aC0tcHJpbWFyeSB7XHJcblxyXG4gIGJhY2tncm91bmQ6ICRzdHJlbmd0aDUwO1xyXG5cclxufVxyXG5cclxuLnN0b3J5Ym9vay1wYXNzLXN0cmVuZ3RoLS0xMHsgYmFja2dyb3VuZDogJHN0cmVuZ3RoMDsgfVxyXG4uc3Rvcnlib29rLXBhc3Mtc3RyZW5ndGgtLTEweyBiYWNrZ3JvdW5kOiAkc3RyZW5ndGgzMDsgfVxyXG4uc3Rvcnlib29rLXBhc3Mtc3RyZW5ndGgtLTQweyBiYWNrZ3JvdW5kOiAkc3RyZW5ndGg0MDsgfVxyXG4uc3Rvcnlib29rLXBhc3Mtc3RyZW5ndGgtLTUweyBiYWNrZ3JvdW5kOiAkc3RyZW5ndGg1MDsgfVxyXG4uc3Rvcnlib29rLXBhc3Mtc3RyZW5ndGgtLTYweyBiYWNrZ3JvdW5kOiAkc3RyZW5ndGg2MDsgfVxyXG4uc3Rvcnlib29rLXBhc3Mtc3RyZW5ndGgtLTcweyBiYWNrZ3JvdW5kOiAkc3RyZW5ndGg3MDsgfVxyXG4uc3Rvcnlib29rLXBhc3Mtc3RyZW5ndGgtLTkweyBiYWNrZ3JvdW5kOiAkc3RyZW5ndGg5MDsgfVxyXG4uc3Rvcnlib29rLXBhc3Mtc3RyZW5ndGgtLTEwMHsgYmFja2dyb3VuZDogJHN0cmVuZ3RoMTAwOyB9XHJcblxyXG4iXX0= */"]
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