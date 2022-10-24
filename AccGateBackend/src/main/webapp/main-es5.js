(function () {
  var _templateObject;

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


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register/register.component */
      29087);
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login/login.component */
      98458);
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home/home.component */
      45067);
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile/profile.component */
      96630);
      /* harmony import */


      var _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./board-user/board-user.component */
      14652);
      /* harmony import */


      var _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./board-moderator/board-moderator.component */
      49586);
      /* harmony import */


      var _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./board-admin/board-admin.component */
      5838);
      /* harmony import */


      var _page_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./page/page.component */
      61527);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var routes = [{
        path: 'page',
        component: _page_page_component__WEBPACK_IMPORTED_MODULE_7__["default"]
      }, {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent
      }, {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
      }, {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_0__.RegisterComponent
      }, {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent
        /*, canActivate: [AppRoutingGuard] */

      }, {
        path: 'user',
        component: _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_4__.BoardUserComponent
      }, {
        path: 'mod',
        component: _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_5__.BoardModeratorComponent
      }, {
        path: 'admin',
        component: _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_6__.BoardAdminComponent
      }, {
        path: '',
        redirectTo: 'home',
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
        redirectTo: 'home'
      }];

      var _AppRoutingModule = /*#__PURE__*/_createClass(function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      });

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(routes, {
          useHash: true
        })], _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule]
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


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
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


      var _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./board-admin/board-admin.component */
      5838);
      /* harmony import */


      var _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./board-moderator/board-moderator.component */
      49586);
      /* harmony import */


      var _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./board-user/board-user.component */
      14652);
      /* harmony import */


      var _helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./_helpers/auth.interceptor */
      19230);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      72075);
      /* harmony import */


      var mdb_angular_ui_kit_accordion__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! mdb-angular-ui-kit/accordion */
      60415);
      /* harmony import */


      var mdb_angular_ui_kit_carousel__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! mdb-angular-ui-kit/carousel */
      41692);
      /* harmony import */


      var mdb_angular_ui_kit_checkbox__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! mdb-angular-ui-kit/checkbox */
      85176);
      /* harmony import */


      var mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! mdb-angular-ui-kit/collapse */
      82785);
      /* harmony import */


      var mdb_angular_ui_kit_dropdown__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! mdb-angular-ui-kit/dropdown */
      90210);
      /* harmony import */


      var mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! mdb-angular-ui-kit/forms */
      95095);
      /* harmony import */


      var mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! mdb-angular-ui-kit/modal */
      25303);
      /* harmony import */


      var mdb_angular_ui_kit_popover__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! mdb-angular-ui-kit/popover */
      69147);
      /* harmony import */


      var mdb_angular_ui_kit_radio__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! mdb-angular-ui-kit/radio */
      38754);
      /* harmony import */


      var mdb_angular_ui_kit_range__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! mdb-angular-ui-kit/range */
      10434);
      /* harmony import */


      var mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
      /*! mdb-angular-ui-kit/ripple */
      7116);
      /* harmony import */


      var mdb_angular_ui_kit_scrollspy__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
      /*! mdb-angular-ui-kit/scrollspy */
      74803);
      /* harmony import */


      var mdb_angular_ui_kit_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
      /*! mdb-angular-ui-kit/tabs */
      78141);
      /* harmony import */


      var mdb_angular_ui_kit_tooltip__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
      /*! mdb-angular-ui-kit/tooltip */
      64433);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      75835);
      /* harmony import */


      var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
      /*! angular-bootstrap-md */
      49260);
      /* harmony import */


      var _login_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./login/register-form/register-form.component */
      70996);
      /* harmony import */


      var _login_replace_pass_form_replace_pass_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./login/replace-pass-form/replace-pass-form.component */
      4959);
      /* harmony import */


      var _pipes_api_error_message_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./pipes/api-error-message.pipe */
      81582);
      /* harmony import */


      var _pipes_login_error_message_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./pipes/login-error-message.pipe */
      74164);
      /* harmony import */


      var _page_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./page/page.component */
      61527);
      /* harmony import */


      var _stories_task_task_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../stories/task/task.component */
      48262);
      /* harmony import */


      var _page_language_icon_language_icon_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./page/button-language/button-language.component */
      18007);
      /* harmony import */


      var _page_tadiran_icon_tadiran_icon_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./page/button-tadiran/button-tadiran.component */
      48365);
      /* harmony import */


      var _stories_buttons_button_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! ../stories/buttons/button.component */
      2439);
      /* harmony import */


      var _stories_cards_card_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../stories/cards/card.component */
      56970);
      /* harmony import */


      var _stories_inputs_story_input_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ../stories/inputs/story-input.component */
      83168);
      /* harmony import */


      var _stories_forms_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ../stories/forms/form.component */
      98776);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _AppModule = /*#__PURE__*/_createClass(function _AppModule() {
        _classCallCheck(this, _AppModule);
      });

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({
        providers: [_helpers_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__.authInterceptorProviders],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_25__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbDatepickerModule, mdb_angular_ui_kit_accordion__WEBPACK_IMPORTED_MODULE_27__.MdbAccordionModule, mdb_angular_ui_kit_carousel__WEBPACK_IMPORTED_MODULE_28__.MdbCarouselModule, mdb_angular_ui_kit_checkbox__WEBPACK_IMPORTED_MODULE_29__.MdbCheckboxModule, mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_30__.MdbCollapseModule, mdb_angular_ui_kit_dropdown__WEBPACK_IMPORTED_MODULE_31__.MdbDropdownModule, mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_32__.MdbFormsModule, mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_33__.MdbModalModule, mdb_angular_ui_kit_popover__WEBPACK_IMPORTED_MODULE_34__.MdbPopoverModule, mdb_angular_ui_kit_radio__WEBPACK_IMPORTED_MODULE_35__.MdbRadioModule, mdb_angular_ui_kit_range__WEBPACK_IMPORTED_MODULE_36__.MdbRangeModule, mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_37__.MdbRippleModule, mdb_angular_ui_kit_scrollspy__WEBPACK_IMPORTED_MODULE_38__.MdbScrollspyModule, mdb_angular_ui_kit_tabs__WEBPACK_IMPORTED_MODULE_39__.MdbTabsModule, mdb_angular_ui_kit_tooltip__WEBPACK_IMPORTED_MODULE_40__.MdbTooltipModule, //MdbValidationModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_42__.ModalModule, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_42__.ButtonsModule, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_42__.MDBBootstrapModule.forRoot()]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent, _register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _profile_profile_component__WEBPACK_IMPORTED_MODULE_5__.ProfileComponent, _board_admin_board_admin_component__WEBPACK_IMPORTED_MODULE_6__.BoardAdminComponent, _board_moderator_board_moderator_component__WEBPACK_IMPORTED_MODULE_7__.BoardModeratorComponent, _board_user_board_user_component__WEBPACK_IMPORTED_MODULE_8__.BoardUserComponent, _login_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_10__.RegisterFormComponent, _login_replace_pass_form_replace_pass_form_component__WEBPACK_IMPORTED_MODULE_11__.ReplacePassFormComponent, _pipes_api_error_message_pipe__WEBPACK_IMPORTED_MODULE_12__.ApiErrorMessagePipe, _pipes_login_error_message_pipe__WEBPACK_IMPORTED_MODULE_13__.LoginErrorMessagePipe, _page_page_component__WEBPACK_IMPORTED_MODULE_14__["default"], _page_language_icon_language_icon_component__WEBPACK_IMPORTED_MODULE_16__.LanguageIconComponent, _page_tadiran_icon_tadiran_icon_component__WEBPACK_IMPORTED_MODULE_17__.TadiranIconComponent, _stories_buttons_button_component__WEBPACK_IMPORTED_MODULE_18__["default"], _stories_cards_card_component__WEBPACK_IMPORTED_MODULE_19__["default"], _stories_inputs_story_input_component__WEBPACK_IMPORTED_MODULE_20__.StoryInputComponent, _stories_forms_form_component__WEBPACK_IMPORTED_MODULE_21__["default"], _stories_task_task_component__WEBPACK_IMPORTED_MODULE_15__.TaskComponent],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_25__.HttpClientModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_26__.NgbDatepickerModule, mdb_angular_ui_kit_accordion__WEBPACK_IMPORTED_MODULE_27__.MdbAccordionModule, mdb_angular_ui_kit_carousel__WEBPACK_IMPORTED_MODULE_28__.MdbCarouselModule, mdb_angular_ui_kit_checkbox__WEBPACK_IMPORTED_MODULE_29__.MdbCheckboxModule, mdb_angular_ui_kit_collapse__WEBPACK_IMPORTED_MODULE_30__.MdbCollapseModule, mdb_angular_ui_kit_dropdown__WEBPACK_IMPORTED_MODULE_31__.MdbDropdownModule, mdb_angular_ui_kit_forms__WEBPACK_IMPORTED_MODULE_32__.MdbFormsModule, mdb_angular_ui_kit_modal__WEBPACK_IMPORTED_MODULE_33__.MdbModalModule, mdb_angular_ui_kit_popover__WEBPACK_IMPORTED_MODULE_34__.MdbPopoverModule, mdb_angular_ui_kit_radio__WEBPACK_IMPORTED_MODULE_35__.MdbRadioModule, mdb_angular_ui_kit_range__WEBPACK_IMPORTED_MODULE_36__.MdbRangeModule, mdb_angular_ui_kit_ripple__WEBPACK_IMPORTED_MODULE_37__.MdbRippleModule, mdb_angular_ui_kit_scrollspy__WEBPACK_IMPORTED_MODULE_38__.MdbScrollspyModule, mdb_angular_ui_kit_tabs__WEBPACK_IMPORTED_MODULE_39__.MdbTabsModule, mdb_angular_ui_kit_tooltip__WEBPACK_IMPORTED_MODULE_40__.MdbTooltipModule, //MdbValidationModule,
          _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_41__.BrowserAnimationsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_42__.ModalModule, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_42__.ButtonsModule, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_42__.MDBRootModule]
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

            return ctx_r20.form.username = $event;
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

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.form.username);

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
        consts: [[1, "container"], [1, "jumbotron"], [1, "col-md-12"], [1, "card", "card-container"], ["id", "profile-img", "src", "//ssl.gstatic.com/accounts/ui/avatar_2x.png", 1, "profile-img-card"], ["name", "form", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "username"], ["type", "text", "name", "username", "required", "", "minlength", "3", "maxlength", "20", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["class", "alert-danger", 4, "ngIf"], ["for", "email"], ["type", "email", "name", "email", "required", "", "email", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "password"], ["type", "password", "name", "password", "required", "", "minlength", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], ["for", "privilege"], ["type", "privilege", "name", "privilege", "id", "pet-select", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["roles", "ngModel"], ["value", ""], ["value", "admin"], ["value", "mod"], ["value", "user"], [1, "btn", "btn-primary", "btn-block"], [1, "alert", "alert-warning"], ["class", "alert alert-warning", 4, "ngIf"], [1, "alert-danger"], [4, "ngIf"], [1, "alert", "alert-success"]],
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../_services/user.service */
      55089);

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
        return new (t || _HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService));
      };

      _HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: _HomeComponent,
        selectors: [["app-home"]],
        decls: 29,
        vars: 2,
        consts: [[1, "container"], [1, "background", "jumbotron"], [1, "font_0"], [1, "", 2, "font-size", "44px"], [1, "fa-pull-right", "bg-image", "card", "shadow-1-strong", "card-img"], [1, "card-body", "text-white"], [1, "card-title"], [1, "card-text"], ["href", "#!", 1, "btn", "btn-outline-light"], ["role", "alert", 1, "alert", "alert-success"], [1, "alert-heading"], [1, "mb-0"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "dl");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "dt");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "dd");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "aside");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Card title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "p", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Some quick example text to build on the card title and make up the bulk of the card's content. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "Button");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "h4", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Well done!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "hr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Whenever you need to, be sure to use margin utilities to keep things nice and tidy.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.content);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.ACC_VERSION);
          }
        },
        styles: ["._1Q9if[_ngcontent-%COMP%], ._2Hij5[_ngcontent-%COMP%] {\r\n  word-wrap: break-word;\r\n  overflow-wrap: break-word;\r\n  text-align: start;\r\n  pointer-events: none;\r\n}\r\n\r\n._3SQN-[_ngcontent-%COMP%], ._3wnIc[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.multi-bg-example[_ngcontent-%COMP%] {\r\n  width: 980px;\r\n  height: 289px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  -o-object-position: 50% 50%;\r\n     object-position: 50% 50%;\r\n}\r\n\r\n.font_0[_ngcontent-%COMP%] {\r\n  font-size:44px;\r\n  text-align:left;\r\n  color:#FFFFFF;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%], .alert-success[_ngcontent-%COMP%] {\r\n  width: 48%;\r\n}\r\n\r\n.background[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n  background-origin: border-box;\r\n  background-image: url('Background.webp');\r\n  \r\n  background-repeat: no-repeat;\r\n  background-position: top left;\r\n\r\n}\r\n\r\n.bg-image[_ngcontent-%COMP%] {\r\n  background-image: url('contact-center.jpg');\r\n  background-position: top right;\r\n  padding-bottom: 100px;\r\n}\r\n\r\naside[_ngcontent-%COMP%] {\r\n  width: 48%;\r\n  padding-left: .1rem;\r\n  margin-left: .1rem;\r\n  float: right;\r\n  box-shadow: inset 5px 0 5px -5px #29627e;\r\n  font-style: italic;\r\n  color: #29627e;\r\n\r\n}\r\n\r\naside[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\r\n  margin: .20rem;\r\n}\r\n\r\np[_ngcontent-%COMP%] {\r\n  font-family: 'Fira Sans', sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQWlCO0tBQWpCLGlCQUFpQjtFQUNqQiwyQkFBd0I7S0FBeEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBR0E7RUFDRSxzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLHdDQUFpRTtFQUNqRSwyRUFBMkU7RUFDM0UsNEJBQTRCO0VBQzVCLDZCQUE2Qjs7QUFFL0I7O0FBRUE7RUFDRSwyQ0FBb0U7RUFDcEUsOEJBQThCO0VBQzlCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLGNBQWM7O0FBRWhCOztBQUNBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG9DQUFvQztBQUN0QyIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuXzFROWlmLCAuXzJIaWo1IHtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxufVxyXG5cclxuLl8zU1FOLSwgLl8zd25JYyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5tdWx0aS1iZy1leGFtcGxlIHtcclxuICB3aWR0aDogOTgwcHg7XHJcbiAgaGVpZ2h0OiAyODlweDtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBvYmplY3QtcG9zaXRpb246IDUwJSA1MCU7XHJcbn1cclxuXHJcbi5mb250XzAge1xyXG4gIGZvbnQtc2l6ZTo0NHB4O1xyXG4gIHRleHQtYWxpZ246bGVmdDtcclxuICBjb2xvcjojRkZGRkZGO1xyXG59XHJcblxyXG4uYWxlcnQsIC5hbGVydC1zdWNjZXNzIHtcclxuICB3aWR0aDogNDglO1xyXG59XHJcblxyXG5cclxuLmJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1vcmlnaW46IGJvcmRlci1ib3g7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL19zZXJ2aWNlcy9hc3NldHMvaW1hZ2VzL0JhY2tncm91bmQud2VicCk7XHJcbiAgLypsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMzAsIDc1LCAxMTUsIDEpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApKTsqL1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XHJcblxyXG59XHJcblxyXG4uYmctaW1hZ2Uge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9fc2VydmljZXMvYXNzZXRzL2ltYWdlcy9jb250YWN0LWNlbnRlci5qcGcpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbmFzaWRlIHtcclxuICB3aWR0aDogNDglO1xyXG4gIHBhZGRpbmctbGVmdDogLjFyZW07XHJcbiAgbWFyZ2luLWxlZnQ6IC4xcmVtO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBib3gtc2hhZG93OiBpbnNldCA1cHggMCA1cHggLTVweCAjMjk2MjdlO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBjb2xvcjogIzI5NjI3ZTtcclxuXHJcbn1cclxuYXNpZGUgPiBwIHtcclxuICBtYXJnaW46IC4yMHJlbTtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1mYW1pbHk6ICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbiJdfQ== */"]
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
      /* harmony import */


      var mdb_angular_ui_kit_popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! mdb-angular-ui-kit/popover */
      69147);

      function LoginComponent_form_3_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Username is required! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_form_3_div_13_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Password is required");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_form_3_div_13_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Password must be at least 1 characters ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_form_3_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, LoginComponent_form_3_div_13_div_1_Template, 2, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, LoginComponent_form_3_div_13_div_2_Template, 2, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r5.errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r5.errors.minlength);
        }
      }

      function LoginComponent_form_3_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Login failed: ", ctx_r8.loginErrorMessage, " ");
        }
      }

      function LoginComponent_form_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "form", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function LoginComponent_form_3_Template_form_ngSubmit_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return _r2.form.valid && ctx_r11.onSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Username");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "input", 13, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LoginComponent_form_3_Template_input_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r13.form.username = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, LoginComponent_form_3_div_7_Template, 2, 0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "input", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LoginComponent_form_3_Template_input_ngModelChange_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r14.form.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, LoginComponent_form_3_div_13_Template, 3, 2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "a", 20, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("mouseover", function LoginComponent_form_3_Template_a_mouseover_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](19);

            return _r7.show();
          })("mouseleave", function LoginComponent_form_3_Template_a_mouseleave_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](19);

            return _r7.hide();
          })("click", function LoginComponent_form_3_Template_a_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r17.openReplacePassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " Forgot password? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, LoginComponent_form_3_div_22_Template, 2, 1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](1);

          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](6);

          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.form.username);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r3.errors && _r2.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r0.form.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r5.errors && _r2.submitted);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _r2.submitted && ctx_r0.isLoginFailed);
        }
      }

      function LoginComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24);

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
          key: "test",
          value: function test() {
            var _this10 = this;

            console.log("test start");
            /*this.openRegisterForm().then(() => {
              this.openReplacePassword();
              console.log("test end");});*/

            this.openRegisterForm().then(function (val) {
              console.log(val);

              switch (val) {
                case "xbutton":
                  break;

                case undefined:
                  _this10.openReplacePassword();

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
              let newRegisterFormService = this.registerFormService.open(RegisterFormComponent);
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
            var _this11 = this;

            var _this$form2 = this.form,
                username = _this$form2.username,
                password = _this$form2.password;
            this.authService.login(username, password).subscribe(function (data) {
              _this11.tokenStorage.saveToken(data.accessToken);

              _this11.tokenStorage.saveRefreshToken(data.refreshToken);

              _this11.tokenStorage.saveUser(data);

              _this11.isLoginFailed = false;
              _this11.isLoggedIn = true;
              _this11.roles = _this11.tokenStorage.getUser().roles;

              _this11.reloadPage();
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
                        _this11.openReplacePassword();

                        break;

                      case undefined:
                        _this11.openReplacePassword();

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
            //window.location.reload();
            this.router.navigate(['/profile']).then(function () {
              window.location.reload();
            }); //var URL = window.location.host+"/profile"; //'http://localhost:4200/user';
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
        decls: 18,
        vars: 2,
        consts: [[1, "col-md-12"], ["id", "main-login-card", 1, "card", "card-container"], ["id", "profile-img", "src", "//ssl.gstatic.com/accounts/ui/avatar_2x.png", 1, "profile-img-card"], ["name", "form", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["id", "tests", 1, "form-check-label", "white-text", "border-bottom-0"], ["for", "tests", 1, "form-check-label", "white-text", 2, "margin-bottom", "1px", "padding", "1px"], ["href", "#/login", 1, "green-text", "font-weight-bold", 3, "click"], ["href", "#/login", 1, "green-text", "font-weight-bold", "pl-2", 3, "click"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "username"], ["type", "text", "name", "username", "placeholder", "ea2", "required", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["class", "alert alert-danger", "role", "alert", 4, "ngIf"], ["for", "password"], ["type", "password", "name", "password", "placeholder", "e1996", "required", "", "minlength", "1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "btn", "btn-primary", "btn-block"], ["href", "#/login", "mdbPopoverTitle", "Account recovery", "mdbPopover", "To help keep your account safe, we will make sure that it\u2019s really you trying to sign in", 1, "form-check-label", "white-text", 3, "mouseover", "mouseleave", "click"], ["popover", "mdbPopover"], ["role", "alert", 1, "alert", "alert-danger"], [4, "ngIf"], [1, "alert", "alert-success"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, LoginComponent_form_3_Template, 23, 5, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, LoginComponent_div_4_Template, 2, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mdb-card-footer", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "R&D test: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_8_listener() {
              return ctx.openRegisterForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "RegistrationForm");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, " ,");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_12_listener() {
              return ctx.openReplacePassword();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "ReplacePassForm");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "b");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, " ,");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LoginComponent_Template_a_click_16_listener() {
              return ctx.test();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "test");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__.MdbCardFooterComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MinLengthValidator, mdb_angular_ui_kit_popover__WEBPACK_IMPORTED_MODULE_10__.MdbPopoverDirective, angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_8__.PopoverDirective],
        styles: ["label[_ngcontent-%COMP%] {\r\n  display: block;\r\n  margin-top: 10px;\r\n}\r\n\r\n.card-container.card[_ngcontent-%COMP%] {\r\n  max-width: 400px !important;\r\n  padding: 10px 10px;\r\n\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  background-color: #f7f7f7;\r\n  padding: 20px 25px 30px;\r\n  margin: 0 auto 25px;\r\n  margin-top: 50px;\r\n  border-radius: 2px;\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n}\r\n\r\n.profile-img-card[_ngcontent-%COMP%] {\r\n  width: 96px;\r\n  height: 96px;\r\n  margin: 0 auto 10px;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n\r\n._1Q9if[_ngcontent-%COMP%], ._2Hij5[_ngcontent-%COMP%] {\r\n  word-wrap: break-word;\r\n  overflow-wrap: break-word;\r\n  text-align: start;\r\n  pointer-events: none;\r\n}\r\n\r\n._3SQN-[_ngcontent-%COMP%], ._3wnIc[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.multi-bg-example[_ngcontent-%COMP%] {\r\n  width: 980px;\r\n  height: 289px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  -o-object-position: 50% 50%;\r\n     object-position: 50% 50%;\r\n}\r\n\r\n.font_0[_ngcontent-%COMP%] {\r\n  font-size:44px;\r\n  text-align:left;\r\n  color:#FFFFFF;\r\n}\r\n\r\n.alert[_ngcontent-%COMP%], .alert-success[_ngcontent-%COMP%] {\r\n  width: 50%;\r\n}\r\n\r\n.background[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n  background-origin: border-box;\r\n  background-image: url('Background.webp');\r\n  \r\n  background-repeat: no-repeat;\r\n  background-position: top left;\r\n\r\n}\r\n\r\n.card-footer[_ngcontent-%COMP%] {\r\n  padding-top: 0.1rem;\r\n  padding-right: 0.1rem;\r\n  padding-bottom: 0.1rem;\r\n  padding-left: 0.1rem;\r\n\r\n  border-top: 0.1rem solid rgba(0, 0, 0, 0.125);\r\n\r\n  border-bottom: 0.1rem;\r\n  background-color: rgba(0, 0, 0, 0.03);\r\n\r\n}\r\n\r\n.footer[_ngcontent-%COMP%]   ul.footer-menu[_ngcontent-%COMP%]   li.bold[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-weight: 700;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGtCQUFrQjs7QUFFcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFHaEIsa0JBQWtCO0VBR2xCLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGNBQWM7RUFHZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG9CQUFpQjtLQUFqQixpQkFBaUI7RUFDakIsMkJBQXdCO0tBQXhCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUdBO0VBQ0Usc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3Qix3Q0FBaUU7RUFDakUsMkVBQTJFO0VBQzNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7O0FBRS9COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsb0JBQW9COztFQUVwQiw2Q0FBNkM7O0VBRTdDLHFCQUFxQjtFQUNyQixxQ0FBcUM7O0FBRXZDOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJsYWJlbCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNhcmQtY29udGFpbmVyLmNhcmQge1xyXG4gIG1heC13aWR0aDogNDAwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcblxyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICBwYWRkaW5nOiAyMHB4IDI1cHggMzBweDtcclxuICBtYXJnaW46IDAgYXV0byAyNXB4O1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgLW1vei1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLnByb2ZpbGUtaW1nLWNhcmQge1xyXG4gIHdpZHRoOiA5NnB4O1xyXG4gIGhlaWdodDogOTZweDtcclxuICBtYXJnaW46IDAgYXV0byAxMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLl8xUTlpZiwgLl8ySGlqNSB7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcbi5fM1NRTi0sIC5fM3duSWMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubXVsdGktYmctZXhhbXBsZSB7XHJcbiAgd2lkdGg6IDk4MHB4O1xyXG4gIGhlaWdodDogMjg5cHg7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgNTAlO1xyXG59XHJcblxyXG4uZm9udF8wIHtcclxuICBmb250LXNpemU6NDRweDtcclxuICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgY29sb3I6I0ZGRkZGRjtcclxufVxyXG5cclxuLmFsZXJ0LCAuYWxlcnQtc3VjY2VzcyB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuXHJcbi5iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtb3JpZ2luOiBib3JkZXItYm94O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9fc2VydmljZXMvYXNzZXRzL2ltYWdlcy9CYWNrZ3JvdW5kLndlYnApO1xyXG4gIC8qbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDMwLCA3NSwgMTE1LCAxKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSk7Ki9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCBsZWZ0O1xyXG5cclxufVxyXG5cclxuLmNhcmQtZm9vdGVyIHtcclxuICBwYWRkaW5nLXRvcDogMC4xcmVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAuMXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC4xcmVtO1xyXG4gIHBhZGRpbmctbGVmdDogMC4xcmVtO1xyXG5cclxuICBib3JkZXItdG9wOiAwLjFyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcblxyXG4gIGJvcmRlci1ib3R0b206IDAuMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDMpO1xyXG5cclxufVxyXG5cclxuLmZvb3RlciB1bC5mb290ZXItbWVudSBsaS5ib2xkIGEge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuIl19 */"]
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
            var _this12 = this;

            this.submitted = true;
            var _this$validationForm$ = this.validationForm.value,
                userName = _this$validationForm$.userName,
                email = _this$validationForm$.email,
                password = _this$validationForm$.password,
                phone = _this$validationForm$.phone;
            this.authService.registerForm(userName, email, password, phone).subscribe(function (data) {
              console.log(data);
              _this12.isSuccessful = true;
              _this12.isSignUpFailed = false;
              _this12.errorFieldSubmitted = {};
              _this12.apiResponse.error = false;
              _this12.apiResponse.message = 'Successful registration';
            }, function (error) {
              var errorResponse = JSON.parse(error.error);
              _this12.apiResponse.error = true;
              _this12.apiResponse.message = 'Registration error';
              _this12.errorMessage = error.error.message;
              _this12.isSignUpFailed = true;

              if (errorResponse.error && errorResponse.message === 'VALIDATION_FAILED') {
                _this12.errorFieldSubmitted = errorResponse.data;
              }
            }, function () {
              console.log("Registration Complete");

              _this12.modalRef.close("Registration Complete");
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
        consts: [[1, "modal-header"], [1, "white-text", "mb-2", "mt-2", "font-weight-bold", "fas"], [1, "green-text", "font-weight-bold"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body", "py-4", "text-center", "expansionCard"], ["id", "profile-img", "src", "../../../AccGate/assets/images/T.png", "alt", "", 1, "profile-img-card"], [1, "text-white", "rgba-stylish-strong", "py-5", "px-5", "z-depth-2"], [3, "formGroup", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["hidden", "", 1, "list-group-horizontal", "mb-4", "col-md-12"], ["type", "button", 1, "fa-pull-left", "btn", "btn-primary"], [1, "modal-content"], [1, "modal-footer", "fal"], ["type", "checkbox", "id", "checkbox7", 1, "form-check-input"], ["for", "checkbox7", 1, "form-check-label", "white-text"], ["href", "#", 1, "green-text", "font-weight-bold"], [3, "formGroup"], [1, "form-outline"], ["mdbInput", "", "type", "text", "id", "typeText", "formControlName", "userName", "required", "", 1, "form-control", 3, "mdbValidate"], ["for", "typeText", 1, "form-label"], [4, "ngIf"], ["mdbInput", "", "type", "email", "id", "typeEmail", "formControlName", "email", "required", "", 1, "form-control", 3, "mdbValidate"], ["mdbLabel", "", "for", "typeEmail", 1, "form-label", "form-white"], ["mdbInput", "", "type", "password", "id", "typePassword", "formControlName", "password", "required", "", "minlength", "1", 1, "form-control", 3, "mdbValidate"], ["mdbLabel", "", "for", "typePassword", 1, "form-label", "form-white"], ["class", "text-danger error-input", "style", "white-space: pre-line;  font-size: 14px;", 4, "ngIf"], ["mdbInput", "", "type", "tel", "id", "typePhone", "formControlName", "phone", "required", "", 1, "form-control", 3, "mdbValidate"], ["mdbLabel", "", "for", "typePhone", 1, "form-label", "form-white"], ["class", "row d-flex align-items-lg-center ", 4, "ngIf"], [1, "text-danger", "error-input", 2, "white-space", "pre-line", "font-size", "14px"], [1, "row", "d-flex", "align-items-lg-center"], [1, "form-group", "text-center", "mb-2", "col-md-12"], ["type", "button", 1, "btn", "btn-success", "btn-block", "btn-rounded", "z-depth-1", "waves-effect", "waves-light", 3, "click"], [1, "alert", "alert-success"]],
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
            var _this13 = this;

            this.submitted = true;
            var _this$replacePassForm = this.replacePassForm.value,
                userName = _this$replacePassForm.userName,
                oldPassword = _this$replacePassForm.oldPassword,
                password = _this$replacePassForm.password,
                confirmPassword = _this$replacePassForm.confirmPassword;
            this.authService.replacePassForm(userName, oldPassword, password, confirmPassword).subscribe(function (data) {
              console.log(data);
              _this13.isSuccessful = true;
              _this13.isSignUpFailed = false;
              _this13.errorFieldSubmitted = {};
              _this13.apiResponse.error = false;
              _this13.apiResponse.message = 'Successful registration';
            }, function (error) {
              var errorResponse = JSON.parse(error.error);
              _this13.apiResponse.error = true;
              _this13.apiResponse.message = 'Registration error';
              _this13.errorMessage = error.error.message;
              _this13.isSignUpFailed = true;

              if (errorResponse.error && errorResponse.message === 'VALIDATION_FAILED') {
                _this13.errorFieldSubmitted = errorResponse.data;
              }
            }, function () {
              _this13.modalRef.close();
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
        consts: [[1, "modal-header"], [1, "white-text", "mb-2", "mt-2", "font-weight-bold", "fas"], [1, "green-text", "font-weight-bold"], ["type", "button", "aria-label", "Close", 1, "btn", "btn-close", "white-text", 3, "click"], [1, "modal-body", "py-4", "text-center", "expansionCard"], [1, "figure"], ["aria-setsize", "20", "id", "profile-img", "src", "../../../AccGate/assets/images/T.png", "alt", "", 1, "profile-img-card", "img-fluid", "rounded"], [1, "figure-caption", "text-center", "text-capitalize"], [1, "text-white", "rgba-stylish-strong", "py-4", "px-5", "z-depth-2", 2, "border-bottom", "2rem"], [3, "formGroup", 4, "ngIf"], ["class", "row d-flex align-items-lg-center border-bottom-0 ", 4, "ngIf"], ["hidden", "", 1, "list-group-horizontal", "mb-4", "col-md-12"], ["type", "button", 1, "fa-pull-left", "btn", "btn-primary"], ["type", "button", 1, "fa-pull-right", "btn", "btn-secondary", 3, "click"], [1, "modal-content"], [1, "modal-footer", "fal"], ["type", "checkbox", "id", "checkbox7", 1, "form-check-input"], ["for", "checkbox7", 1, "form-check-label", "white-text"], ["href", "#", 1, "green-text", "font-weight-bold"], [3, "formGroup"], [1, "form-outline"], ["mdbInput", "", "type", "text", "id", "typeText", "formControlName", "userName", "required", "", 1, "form-control", 3, "mdbValidate"], ["for", "typeText", 1, "form-label"], [4, "ngIf"], ["mdbInput", "", "type", "password", "id", "typeOldPassword", "formControlName", "oldPassword", "required", "", "minlength", "1", 1, "form-control", 3, "mdbValidate"], ["for", "typeOldPassword", 1, "form-label"], ["class", "text-danger error-input", "style", "white-space: pre-line;  font-size: 14px;", 4, "ngIf"], [1, "my-1", "text-black-50"], [1, "form-outline", "text-black-50"], ["mdbInput", "", "type", "password", "id", "typePassword", "formControlName", "password", "required", "", "minlength", "3", 1, "form-control", 3, "mdbValidate"], ["mdbLabel", "", "for", "typePassword", 1, "form-label", "form-white"], ["mdbInput", "", "type", "password", "id", "typeConfirmPassword", "formControlName", "confirmPassword", "required", "", "minlength", "3", 1, "form-control", 3, "mdbValidate"], ["mdbLabel", "", "for", "typeConfirmPassword", 1, "form-label", "form-white"], [1, "text-danger", "error-input", 2, "white-space", "pre-line", "font-size", "14px"], [1, "row", "d-flex", "align-items-lg-center", "border-bottom-0"], [1, "text-center", "mb-2", "col-md-12", "border-bottom-0"], ["type", "button", 1, "btn", "btn-success", "btn-block", "btn-rounded", "z-depth-1", "waves-effect", "waves-light", "border-bottom-0", 2, "margin-bottom", "0", 3, "click"]],
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
    18007:
    /*!***************************************************************!*\
      !*** ./src/app/page/button-language/button-language.component.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LanguageIconComponent": function LanguageIconComponent() {
          return (
            /* binding */
            _LanguageIconComponent
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

      var _LanguageIconComponent = /*#__PURE__*/function () {
        function _LanguageIconComponent() {
          _classCallCheck(this, _LanguageIconComponent);

          /**
           * Is this the principal call to action on the page?
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

        _createClass(_LanguageIconComponent, [{
          key: "classes",
          get: function get() {
            var mode = this.primary ? 'storybook-button-language--primary' : 'storybook-button-language--secondary';
            return ['storybook-button-language', "storybook-button-language--".concat(this.size), mode];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _LanguageIconComponent;
      }();

      _LanguageIconComponent.ɵfac = function LanguageIconComponent_Factory(t) {
        return new (t || _LanguageIconComponent)();
      };

      _LanguageIconComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _LanguageIconComponent,
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
        consts: [[1, "Vector"], ["src", "/assets/images/language-desktop-icon.png", "srcset", "/assets/images/language-desktop-icon@2x.png 2x,\n             /assets/images/language-desktop-icon@3x.png 3x", "alt", "language-desktop-icon", 1, "Language-Desktop-Icon", 3, "ngClass", "ngStyle", "click"]],
        template: function LanguageIconComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LanguageIconComponent_Template_img_click_1_listener($event) {
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
        styles: [".Vector[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 54px;\r\n  right: 68px;\r\n  width: 26px;\r\n  height: 26px;\r\n}\r\n\r\nimg.Language-Desktop-Icon[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 1px;\r\n  right: 1px;\r\n  width: 26px;\r\n  height: 26px;\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  box-shadow: 0 1px 1px 0 rgba(61, 142, 207, 0.15);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmd1YWdlLWljb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFtQjtLQUFuQixtQkFBbUI7RUFDbkIsZ0RBQWdEO0FBQ2xEIiwiZmlsZSI6Imxhbmd1YWdlLWljb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5WZWN0b3Ige1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDU0cHg7XHJcbiAgcmlnaHQ6IDY4cHg7XHJcbiAgd2lkdGg6IDI2cHg7XHJcbiAgaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG5pbWcuTGFuZ3VhZ2UtRGVza3RvcC1JY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxcHg7XHJcbiAgcmlnaHQ6IDFweDtcclxuICB3aWR0aDogMjZweDtcclxuICBoZWlnaHQ6IDI2cHg7XHJcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICBib3gtc2hhZG93OiAwIDFweCAxcHggMCByZ2JhKDYxLCAxNDIsIDIwNywgMC4xNSk7XHJcbn1cclxuIl19 */"]
      });
      /***/
    },

    /***/
    61527:
    /*!****************************************!*\
      !*** ./src/app/page/page.component.ts ***!
      \****************************************/

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
            Page2Component
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _language_icon_language_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./button-language/button-language.component */
      18007);
      /* harmony import */


      var _tadiran_icon_tadiran_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./button-tadiran/button-tadiran.component */
      48365);
      /* harmony import */


      var _stories_forms_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../stories/forms/form.component */
      98776);
      /* harmony import */


      var _stories_task_task_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../stories/task/task.component */
      48262);
      /* harmony import */


      var _stories_cards_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../stories/cards/card.component */
      56970);
      /* harmony import */


      var _stories_buttons_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../stories/buttons/button.component */
      2439);
      /* harmony import */


      var _stories_inputs_story_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../stories/inputs/story-input.component */
      83168);

      var _c0 = function _c0(a0) {
        return {
          "background-color": a0
        };
      };

      var Page2Component = /*#__PURE__*/function () {
        function Page2Component() {
          _classCallCheck(this, Page2Component);

          /**
           * Is this the principal call to action on the page?
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


        _createClass(Page2Component, [{
          key: "classes",
          get: function get() {
            var mode = this.primary ? 'storybook-page2--primary' : 'storybook-page2--secondary';
            return ['storybook-page2', mode];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return Page2Component;
      }();

      Page2Component.ɵfac = function Page2Component_Factory(t) {
        return new (t || Page2Component)();
      };

      Page2Component.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
        type: Page2Component,
        selectors: [["storybook-page2"]],
        inputs: {
          primary: "primary",
          backgroundColor: "backgroundColor",
          background: "background",
          label: "label"
        },
        decls: 10,
        vars: 5,
        consts: [[1, "Desktop-1Login-1", 3, "ngClass", "ngStyle"], ["src", "assets/images/icon-1.webp", "srcset", "/assets/images/icon-1@2x.webp 2x, /assets/images/icon-1@3x.webp 3x", "alt", "icon-1"], ["src", "assets/images/icon-2.webp", "srcset", "/assets/images/icon-2@2x.webp 2x, /assets/images/icon-2@3x.webp 3x", "alt", "icon-2fdf", 1, "icon-2"], ["size", "large"], ["hidden", "", "label", "Button", 3, "primary"]],
        template: function Page2Component_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "figure", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "storybook-button-language", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "storybook-button-tadiran");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "storybook-form");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "storybook-task");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "storybook-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "storybook-button");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](9, "storybook-input");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", ctx.classes)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](3, _c0, ctx.background));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("primary", true);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle, _language_icon_language_icon_component__WEBPACK_IMPORTED_MODULE_0__.LanguageIconComponent, _tadiran_icon_tadiran_icon_component__WEBPACK_IMPORTED_MODULE_1__.TadiranIconComponent, _stories_forms_form_component__WEBPACK_IMPORTED_MODULE_2__["default"], _stories_task_task_component__WEBPACK_IMPORTED_MODULE_3__.TaskComponent, _stories_cards_card_component__WEBPACK_IMPORTED_MODULE_4__["default"], _stories_buttons_button_component__WEBPACK_IMPORTED_MODULE_5__["default"], _stories_inputs_story_input_component__WEBPACK_IMPORTED_MODULE_6__.StoryInputComponent],
        styles: [".storybook-page2[_ngcontent-%COMP%] {\n  position: absolute;\n  width: inherit;\n  height: inherit;\n}\n\n.Desktop-1Login-1[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  flex-grow: 0;\n}\n\n\n\n\n\ndiv.relative[_ngcontent-%COMP%] {\n  position: relative;\n  width: inherit;\n  height: inherit;\n}\n\n.Frame-1[_ngcontent-%COMP%] {\n  width: 1920px;\n  height: 1080px;\n  flex-grow: 0;\n}\n\n.fa-pull-left[_ngcontent-%COMP%] {\n  float: left;\n}\n\n.fa-pull-right[_ngcontent-%COMP%] {\n  float: right;\n}\n\nimg.icon-1[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 305.7px;\n  height: 309px;\n  transform: rotate(0deg);\n  background-position: bottom;\n}\n\nimg.icon-2[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  width: 372px;\n  height: 343px;\n  flex-grow: 0;\n}\n\n.storybook-page2--primary[_ngcontent-%COMP%] {\n  background: linear-gradient(228.37deg, #EFF8FF 22.25%, #B0DCFF 88.18%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFBRjs7QUFHQSwrRUFBQTs7QUFFQTs7Ozs7RUFBQTs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFGRjs7QUFRQTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUxGOztBQVFBO0VBQWUsV0FBQTtBQUpmOztBQU1BO0VBQWdCLFlBQUE7QUFGaEI7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQURGOztBQUtBO0VBRUUsc0VBQUE7QUFIRiIsImZpbGUiOiJwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zdG9yeWJvb2stcGFnZTIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogaW5oZXJpdDtcclxuICBoZWlnaHQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5EZXNrdG9wLTFMb2dpbi0xIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZmxleC1ncm93OiAwXHJcbn1cclxuXHJcbi8qYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDIyOC4zN2RlZywgI0VGRjhGRiAyMi4yNSUsICNCMERDRkYgODguMTglKSovXHJcblxyXG4vKi5EZXNrdG9wLTFMb2dpbi0xIHtcclxuICB3aWR0aDogMTkyMHB4O1xyXG4gIGhlaWdodDogMTA4MHB4O1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMjI4LjM3ZGVnLCAjRUZGOEZGIDIyLjI1JSwgI0IwRENGRiA4OC4xOCUpO1xyXG59Ki9cclxuXHJcbmRpdi5yZWxhdGl2ZSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG4gIGhlaWdodDogaW5oZXJpdDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLkZyYW1lLTEge1xyXG4gIHdpZHRoOiAxOTIwcHg7XHJcbiAgaGVpZ2h0OiAxMDgwcHg7XHJcbiAgZmxleC1ncm93OiAwO1xyXG59XHJcblxyXG4uZmEtcHVsbC1sZWZ0IHtmbG9hdDpsZWZ0fVxyXG5cclxuLmZhLXB1bGwtcmlnaHQge2Zsb2F0OnJpZ2h0fVxyXG5cclxuaW1nLmljb24tMSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAzMDUuN3B4O1xyXG4gIGhlaWdodDogMzA5cHg7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogYm90dG9tO1xyXG59XHJcblxyXG5pbWcuaWNvbi0yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAzNzJweDtcclxuICBoZWlnaHQ6IDM0M3B4O1xyXG4gIGZsZXgtZ3JvdzogMDtcclxufVxyXG5cclxuXHJcbi5zdG9yeWJvb2stcGFnZTItLXByaW1hcnkge1xyXG5cclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI4LjM3ZGVnLCAjRUZGOEZGIDIyLjI1JSwgI0IwRENGRiA4OC4xOCUpO1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    48365:
    /*!*************************************************************!*\
      !*** ./src/app/page/button-tadiran/button-tadiran.component.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TadiranIconComponent": function TadiranIconComponent() {
          return (
            /* binding */
            _TadiranIconComponent
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

      var _TadiranIconComponent = /*#__PURE__*/function () {
        function _TadiranIconComponent() {
          _classCallCheck(this, _TadiranIconComponent);

          /**
           * Is this the principal call to action on the page?
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

        _createClass(_TadiranIconComponent, [{
          key: "classes",
          get: function get() {
            var mode = this.primary ? 'storybook-button-tadiran--primary' : 'storybook-button-tadiran--secondary';
            return ['storybook-button-tadiran', "storybook-button-tadiran--".concat(this.size), mode];
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _TadiranIconComponent;
      }();

      _TadiranIconComponent.ɵfac = function TadiranIconComponent_Factory(t) {
        return new (t || _TadiranIconComponent)();
      };

      _TadiranIconComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _TadiranIconComponent,
        selectors: [["storybook-button-tadiran"]],
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
        consts: [[1, "Vector"], ["src", "/assets/images/aeonix_logo_150.png", "srcset", "/assets/images/aeonix_logo_150.png 2x,\n             /assets/images/language-desktop-icon@3x.png 3x", "alt", "language-desktop-icon", 1, "Language-Desktop-Icon", 3, "ngClass", "ngStyle", "click"]],
        template: function TadiranIconComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TadiranIconComponent_Template_img_click_1_listener($event) {
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
        styles: [".Vector[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  bottom: 50px;\r\n  left: 30px;\r\n  width: 151px;\r\n  height: 39px;\r\n}\r\n\r\nimg.Language-Desktop-Icon[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 1px;\r\n  right: 1px;\r\n  width: 151px;\r\n  height: 39px;\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  box-shadow: 0 1px 1px 0 rgba(61, 142, 207, 0.15);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhZGlyYW4taWNvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1YsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQW1CO0tBQW5CLG1CQUFtQjtFQUNuQixnREFBZ0Q7QUFDbEQiLCJmaWxlIjoidGFkaXJhbi1pY29uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuVmVjdG9yIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiA1MHB4O1xyXG4gIGxlZnQ6IDMwcHg7XHJcbiAgd2lkdGg6IDE1MXB4O1xyXG4gIGhlaWdodDogMzlweDtcclxufVxyXG5cclxuaW1nLkxhbmd1YWdlLURlc2t0b3AtSWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMXB4O1xyXG4gIHJpZ2h0OiAxcHg7XHJcbiAgd2lkdGg6IDE1MXB4O1xyXG4gIGhlaWdodDogMzlweDtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoNjEsIDE0MiwgMjA3LCAwLjE1KTtcclxufVxyXG4iXX0= */"]
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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Open new tab for Agent");

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
            var _this14 = this;

            console.log('window.location.origin.toString():  ' + window.location.origin.toString());
            this.router.navigate([]).then(function (result) {
              _this14.windowObjectReference = window.open(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.accServer.ACCWEBServers + '/accGCCS/'
              /*window.location.origin.toString()+"/profile"*/
              );
            }); //console.log('window.location.origin.toString():  '+ this.windowObjectReference

            console.log('window.location.origin.toString():  ' + this.windowObjectReference.window.document.getElementById("profile_title").innerHTML);
            var promise = new Promise(function (resolve, reject) {
              _this14.windowObjectReference.window.document.getElementById("profile_title").innerHTML = "new title";
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
            var _this15 = this;

            //@Value("${bezkoder.app.jwtExpirationMs}")
            if (!this.isRefreshing) {
              var token = this.token.getRefreshToken();
              if (token) this.authService.refreshToken(token).subscribe(function (data) {
                _this15.isRefreshing = false;

                _this15.token.saveToken(data.accessToken);

                _this15.token.saveRefreshToken(data.refreshToken);

                _this15.refreshTokenSubject.next(data.accessToken);

                _this15.currentUser = _this15.token.getUser();
                _this15.accessToken = _this15.token.getToken();
                _this15.refreshToken = _this15.token.getRefreshToken();
              }, function (err) {
                _this15.isRefreshing = false;

                _this15.token.signOut();

                return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(err);
              });
            }
          }
        }, {
          key: "openNewTabForApp",
          value: function openNewTabForApp(webapp, webappURLPrefix) {
            var _this16 = this;

            var newAccessToken = "";
            var newRefreshToken = "";
            var newCurrentUser = "";

            if (!this.isRefreshing) {
              var token = this.token.getRefreshToken();
              if (token) this.authService.webapptab(token, webapp).then(function (data) {
                _this16.isRefreshing = false;
                newAccessToken = data.accessToken;
                newRefreshToken = data.refreshToken;
                newCurrentUser = data;
              }, function (reject) {
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(reject.error);
              }).then(function () {
                _this16.router.navigate([]).then(function (result) {
                  _this16.windowObjectReference = window.open(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.accServer.ACCWEBServers + webappURLPrefix);
                }).then(function (result) {
                  _this16.windowObjectReference.window.sessionStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.endpoints.TOKEN_KEY, newAccessToken);

                  _this16.windowObjectReference.window.sessionStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.endpoints.REFRESHTOKEN_KEY, newRefreshToken);

                  _this16.windowObjectReference.window.sessionStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.endpoints.USER_KEY, JSON.stringify(newCurrentUser));
                }, function (err) {
                  _this16.isRefreshing = false;
                  return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(err);
                });
              });
            }
          }
        }, {
          key: "openNewWinForApp",
          value: function openNewWinForApp(webapp, webappURLPrefix) {
            var _this17 = this;

            var newAccessToken = "";
            var newRefreshToken = "";
            var newCurrentUser = "";

            if (!this.isRefreshing) {
              var token = this.token.getRefreshToken();
              if (token) this.authService.webapptab(token, webapp).then(function (data) {
                _this17.isRefreshing = false;
                newAccessToken = data.accessToken;
                newRefreshToken = data.refreshToken;
                newCurrentUser = data;
              }, function (reject) {
                return (0, rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(reject.error);
              }).then(function (result) {
                _this17.windowObjectReference = window.open(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.accServer.ACCWEBServers + webappURLPrefix + 'start.html', 'C-Sharpcorner', 'scrollbars=no');
              }).then(function (result) {
                _this17.windowObjectReference.window.sessionStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.endpoints.TOKEN_KEY, newAccessToken);

                _this17.windowObjectReference.window.sessionStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.endpoints.REFRESHTOKEN_KEY, newRefreshToken);

                _this17.windowObjectReference.window.sessionStorage.setItem(_app_config__WEBPACK_IMPORTED_MODULE_0__.AppConfig.endpoints.USER_KEY, JSON.stringify(newCurrentUser));
              }, function (err) {
                _this17.isRefreshing = false;
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
        consts: [["class", "container", 4, "ngIf", "ngIfElse"], ["loggedOut", ""], [1, "container"], [1, "background", "jumbotron"], ["id", "profile_title", 1, "font_0"], ["id", "forseRefreshToken", 2, "text-align", "left", "width", "auto", "cursor", "pointer", 3, "click"], ["id", "openNewGccsTab", 2, "text-align", "left", "width", "auto", "cursor", "pointer", 3, "click"], ["id", "openNewAgentTab", 2, "text-align", "left", "width", "auto", "cursor", "pointer", 3, "click"], ["id", "openNewWebRTTab", 2, "text-align", "left", "width", "auto", "cursor", "pointer", 3, "click"], [4, "ngFor", "ngForOf"], ["href", "http://tadiran2014.azurewebsites.net/en/products/unified-communications/aeonix/", "id", "testid2", "target", "iframe_a"], ["href", "https://www.tadirantele.com/aeonix4cloud", "id", "testid4", "target", "iframe_a"], ["src", "https://www.tadirantele.com/aeonix4cloud", "sandbox", "allow-same-origin allow-scripts allow-popups allow-forms", "name", "iframe_a", "height", "550px", "width", "100%", "title", "Iframe Example"], [1, "list-unstyled"], [1, "media"], ["href", "https://172.28.8.245:8443/aeonix/mainForm.jsf", "target", "_blank", "aria-current", "true", 1, "app-icon-wide"], ["src", "../../AccGate/assets/images/aeonix_logo_72.png", "alt", "Icon app number 1", 1, ""], [1, "media-body"], [1, "mt-0", "mb-1"], [1, "media", "my-4"], [1, "app-icon", 3, "click"], ["src", "../../AccGate/assets/images/dashboard.png", "alt", "Icon app number 2", 1, "app-icon"], ["href", "https://localhost:8445/accGCCS/", "id", "testid3", "target", "iframe_a", "rel", "noopener", "aria-current", "false"], ["src", "../../AccGate/assets/images/management.png", "alt", "Icon app number 3", 1, "app-icon"], ["href", "http://localhost:8080/accWebRT/", "id", "testid5", "target", "iframe_a", "rel", "noopener", "aria-current", "false"], ["src", "../../AccGate/assets/images/dashboard.png", "alt", "Icon app number 4", 1, "app-icon"], ["href", "https://172.28.8.245:8445/accAgent/", "id", "testid6", "target", "iframe_a", "rel", "noopener", "aria-current", "false"], ["src", "../../AccGate/assets/images/management.png", "alt", "Icon app number 5", 1, "app-icon"]],
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
        styles: [".app-icon[_ngcontent-%COMP%] {\r\n  width: 64px;\r\n  height: 64px;\r\n}\r\n\r\n.app-icon-wide[_ngcontent-%COMP%] {\r\n  width: 181px;\r\n  height: 65px;\r\n}\r\n\r\n\r\n\r\n.media[_ngcontent-%COMP%] {margin:10px;}\r\n\r\n.media[_ngcontent-%COMP%], .media-body[_ngcontent-%COMP%] {overflow:hidden; _overflow:visible; zoom:1;}\r\n\r\n.media[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%] {float:left; margin-right: 20px;}\r\n\r\n.media[_ngcontent-%COMP%]   .app-icon-wide[_ngcontent-%COMP%] {float:left; margin-right: 10px;}\r\n\r\n.media[_ngcontent-%COMP%]   .app-icon[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%]{display:block;}\r\n\r\n.media[_ngcontent-%COMP%]   .imgExt[_ngcontent-%COMP%]{float:right; margin-left: 10px;}\r\n\r\n.mr-2[_ngcontent-%COMP%] {\r\n  width: 64px;\r\n  height: 64px;\r\n  \r\n  background-repeat: round;\r\n  background-position: top left;\r\n  \r\n  alt: \"jh,hgj,hjk\";\r\n}\r\n\r\n.mr-3[_ngcontent-%COMP%] {\r\n  width: 64px;\r\n  height: 64px;\r\n  background-image: url('management.png');\r\n  background-repeat: round;\r\n  background-position: top left;\r\n  \r\n  alt: \"jh,hgj,hjk\";\r\n}\r\n\r\n.font_0[_ngcontent-%COMP%] {\r\n  font-size:44px;\r\n  text-align:center;\r\n  color:#FFFFFF;\r\n}\r\n\r\n.background[_ngcontent-%COMP%] {\r\n  background-size: cover;\r\n  background-origin: border-box;\r\n  background-image: url('Background.webp');\r\n  \r\n  background-repeat: no-repeat;\r\n  background-position: top left;\r\n\r\n}\r\n\r\na[_ngcontent-%COMP%]:link {\r\n  color: green;\r\n  background-color: transparent;\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:visited {\r\n  color: pink;\r\n  background-color: transparent;\r\n  text-decoration: none;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover {\r\n  color: red;\r\n  background-color: transparent;\r\n  text-decoration: underline;\r\n}\r\n\r\na[_ngcontent-%COMP%]:active {\r\n  color: yellow;\r\n  background-color: transparent;\r\n  text-decoration: underline;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUdBLHdCQUF3Qjs7QUFDeEIsUUFBUSxXQUFXLENBQUM7O0FBQ3BCLHFCQUFxQixlQUFlLEdBQUUsZ0JBQWlCLEVBQUUsTUFBTSxDQUFDOztBQUNoRSxrQkFBa0IsVUFBVSxFQUFFLGtCQUFrQixDQUFDOztBQUNqRCx1QkFBdUIsVUFBVSxFQUFFLGtCQUFrQixDQUFDOztBQUN0RCwwQkFBMEIsYUFBYSxDQUFDOztBQUN4QyxlQUFlLFdBQVcsRUFBRSxpQkFBaUIsQ0FBQzs7QUFFOUM7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLDZEQUE2RDtFQUM3RCx3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLCtDQUErQztFQUMvQyxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVDQUFnRTtFQUNoRSx3QkFBd0I7RUFDeEIsNkJBQTZCO0VBQzdCLCtDQUErQztFQUMvQyxpQkFBaUI7QUFDbkI7O0FBR0E7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFJQTtFQUNFLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0Isd0NBQWlFO0VBQ2pFLDJFQUEyRTtFQUMzRSw0QkFBNEI7RUFDNUIsNkJBQTZCOztBQUUvQjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsNkJBQTZCO0VBQzdCLDBCQUEwQjtBQUM1Qjs7QUFDQTtFQUNFLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtaWNvbiB7XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG59XHJcblxyXG4uYXBwLWljb24td2lkZSB7XHJcbiAgd2lkdGg6IDE4MXB4O1xyXG4gIGhlaWdodDogNjVweDtcclxufVxyXG5cclxuXHJcbi8qID09PT09PSBtZWRpYSA9PT09PT0gKi9cclxuLm1lZGlhIHttYXJnaW46MTBweDt9XHJcbi5tZWRpYSwgLm1lZGlhLWJvZHkge292ZXJmbG93OmhpZGRlbjsgX292ZXJmbG93OnZpc2libGU7IHpvb206MTt9XHJcbi5tZWRpYSAuYXBwLWljb24ge2Zsb2F0OmxlZnQ7IG1hcmdpbi1yaWdodDogMjBweDt9XHJcbi5tZWRpYSAuYXBwLWljb24td2lkZSB7ZmxvYXQ6bGVmdDsgbWFyZ2luLXJpZ2h0OiAxMHB4O31cclxuLm1lZGlhIC5hcHAtaWNvbiBhcHAtaWNvbntkaXNwbGF5OmJsb2NrO31cclxuLm1lZGlhIC5pbWdFeHR7ZmxvYXQ6cmlnaHQ7IG1hcmdpbi1sZWZ0OiAxMHB4O31cclxuXHJcbi5tci0yIHtcclxuICB3aWR0aDogNjRweDtcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgLypiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy9tYW5hZ2VtZW50LnBuZyk7Ki9cclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGxlZnQ7XHJcbiAgLypiYWNrZ3JvdW5kLW9yaWdpbjogcGFkZGluZy1ib3gsIGNvbnRlbnQtYm94OyovXHJcbiAgYWx0OiBcImpoLGhnaixoamtcIjtcclxufVxyXG5cclxuLm1yLTMge1xyXG4gIHdpZHRoOiA2NHB4O1xyXG4gIGhlaWdodDogNjRweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vX3NlcnZpY2VzL2Fzc2V0cy9pbWFnZXMvbWFuYWdlbWVudC5wbmcpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcclxuICAvKmJhY2tncm91bmQtb3JpZ2luOiBwYWRkaW5nLWJveCwgY29udGVudC1ib3g7Ki9cclxuICBhbHQ6IFwiamgsaGdqLGhqa1wiO1xyXG59XHJcblxyXG5cclxuLmZvbnRfMCB7XHJcbiAgZm9udC1zaXplOjQ0cHg7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgY29sb3I6I0ZGRkZGRjtcclxufVxyXG5cclxuXHJcblxyXG4uYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLW9yaWdpbjogYm9yZGVyLWJveDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vX3NlcnZpY2VzL2Fzc2V0cy9pbWFnZXMvQmFja2dyb3VuZC53ZWJwKTtcclxuICAvKmxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSgzMCwgNzUsIDExNSwgMSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkpOyovXHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgbGVmdDtcclxuXHJcbn1cclxuXHJcbmE6bGluayB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5hOnZpc2l0ZWQge1xyXG4gIGNvbG9yOiBwaW5rO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5hOmhvdmVyIHtcclxuICBjb2xvcjogcmVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbmE6YWN0aXZlIHtcclxuICBjb2xvcjogeWVsbG93O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcbiJdfQ== */"]
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

            return ctx_r19.form.username = $event;
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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx_r0.form.username);

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
            var _this18 = this;

            var _this$form3 = this.form,
                username = _this$form3.username,
                email = _this$form3.email,
                password = _this$form3.password;
            this.authService.register(username, email, password, this.empList).subscribe(function (data) {
              console.log(data);
              _this18.isSuccessful = true;
              _this18.isSignUpFailed = false;
            }, function (err) {
              _this18.errorMessage = err.error.message;
              _this18.isSignUpFailed = true;
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
        consts: [[1, "col-md-12"], [1, "card", "card-container"], ["id", "profile-img", "src", "//ssl.gstatic.com/accounts/ui/avatar_2x.png", 1, "profile-img-card"], ["name", "form", "novalidate", "", 3, "ngSubmit", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["name", "form", "novalidate", "", 3, "ngSubmit"], ["f", "ngForm"], [1, "form-group"], ["for", "username"], ["type", "text", "name", "username", "required", "", "minlength", "3", "maxlength", "20", 1, "form-control", 3, "ngModel", "ngModelChange"], ["username", "ngModel"], ["class", "alert-danger", 4, "ngIf"], ["for", "email"], ["type", "email", "name", "email", "required", "", "email", "", 1, "form-control", 3, "ngModel", "ngModelChange"], ["email", "ngModel"], ["for", "password"], ["type", "password", "name", "password", "required", "", "minlength", "6", 1, "form-control", 3, "ngModel", "ngModelChange"], ["password", "ngModel"], [1, "btn", "btn-primary", "btn-block"], ["class", "alert alert-warning", 4, "ngIf"], [1, "alert-danger"], [4, "ngIf"], [1, "alert", "alert-warning"], [1, "alert", "alert-success"]],
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
    2439:
    /*!*************************************************!*\
      !*** ./src/stories/buttons/button.component.ts ***!
      \*************************************************/

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
           * Is this the principal call to action on the page?
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
      37716); //import {  Router } from '@angular/router';


      var CardComponent = /*#__PURE__*/function () {
        function CardComponent() {
          _classCallCheck(this, CardComponent);

          this.registerFormRef = null; //replacePassFormRef: MdbModalRef<ReplacePassFormComponent> | null = null;

          this.form = {
            username: null,
            password: null //new FormControl('zaqwsx', Validators.min(2))

          };
          this.isLoggedIn = false;
          this.isLoginFailed = false;
          this.loginErrorMessage = '';
          this.roles = [];
          /**
           * Is this the principal call to action on the page?
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
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "test",
          value: function test() {
            console.log("test start");
            /*this.openRegisterForm().then(() => {
              this.openReplacePassword();
              console.log("test end");});*/

            /*this.openRegisterForm().then(
              (val) => {
                console.log(val);
                switch (val) {
                  case "xbutton":
                    break;
                  case undefined:
                    this.openReplacePassword();
                    break;
                  default:
                      }
                return 'done2';
              },
              (err) => console.error(err));*/
          }
        }, {
          key: "openRegisterForm",
          value: function openRegisterForm() {
            return; //this.registerFormService.open(RegisterFormComponent).onClose.toPromise();

            /*var promise = new Promise<void>((resolve, reject)  => {
              let newRegisterFormService = this.registerFormService.open(RegisterFormComponent);
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
          value: function openReplacePassword() {//this.replacePassFormService.open(ReplacePassFormComponent);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {}
        }, {
          key: "reloadPage",
          value: function reloadPage() {}
        }, {
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
        styles: [".Vector[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 637.5px;\r\n  height: 819px;\r\n  left: calc(50% - 637.5px/2 - 1.25px);\r\n  top: calc(50% - 819px/2 - 0.5px);\r\n}\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 5.18%;\r\n  right: 4.78%;\r\n  top: 0;\r\n  bottom: 0;\r\n  border-radius: 14px;\r\n  box-shadow: -4px 4px 10px 0 rgba(88, 166, 228, 0.3);\r\n  background-color: #fff;\r\n}\r\n\r\n.storybook-card[_ngcontent-%COMP%] {\r\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n  border: 0;\r\n  border-radius: 3em;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  line-height: 1;\r\n}\r\n\r\n.storybook-card--primary[_ngcontent-%COMP%] {\r\n  color: white;\r\n  background-color: #1ea7fd;\r\n}\r\n\r\n.storybook-card--secondary[_ngcontent-%COMP%] {\r\n  color: #333;\r\n  background-color: transparent;\r\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\r\n}\r\n\r\n.storybook-card--small[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  padding: 10px 16px;\r\n}\r\n\r\n.storybook-card--medium[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  padding: 11px 20px;\r\n}\r\n\r\n.storybook-card--large[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  padding: 12px 24px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLG1EQUFtRDtFQUNuRCxzQkFBc0I7QUFDeEI7O0FBS0E7RUFDRSwwRUFBMEU7RUFDMUUsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IscURBQXFEO0FBQ3ZEOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImNhcmQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlZlY3RvciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA2MzcuNXB4O1xyXG4gIGhlaWdodDogODE5cHg7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSA2MzcuNXB4LzIgLSAxLjI1cHgpO1xyXG4gIHRvcDogY2FsYyg1MCUgLSA4MTlweC8yIC0gMC41cHgpO1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDUuMTglO1xyXG4gIHJpZ2h0OiA0Ljc4JTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgYm94LXNoYWRvdzogLTRweCA0cHggMTBweCAwIHJnYmEoODgsIDE2NiwgMjI4LCAwLjMpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5zdG9yeWJvb2stY2FyZCB7XHJcbiAgZm9udC1mYW1pbHk6ICdOdW5pdG8gU2FucycsICdIZWx2ZXRpY2EgTmV1ZScsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBib3JkZXI6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogM2VtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuLnN0b3J5Ym9vay1jYXJkLS1wcmltYXJ5IHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFlYTdmZDtcclxufVxyXG4uc3Rvcnlib29rLWNhcmQtLXNlY29uZGFyeSB7XHJcbiAgY29sb3I6ICMzMzM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjE1KSAwcHggMHB4IDBweCAxcHggaW5zZXQ7XHJcbn1cclxuLnN0b3J5Ym9vay1jYXJkLS1zbWFsbCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMTZweDtcclxufVxyXG4uc3Rvcnlib29rLWNhcmQtLW1lZGl1bSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDExcHggMjBweDtcclxufVxyXG4uc3Rvcnlib29rLWNhcmQtLWxhcmdlIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgcGFkZGluZzogMTJweCAyNHB4O1xyXG59XHJcbiJdfQ== */"]
      });
      /***/
    },

    /***/
    98776:
    /*!*********************************************!*\
      !*** ./src/stories/forms/form.component.ts ***!
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
            FormComponent
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


      var _inputs_story_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../inputs/story-input.component */
      83168); //import {  Router } from '@angular/router';


      var FormComponent = /*#__PURE__*/function () {
        function FormComponent() {
          _classCallCheck(this, FormComponent);

          /**
           * Is this the principal call to action on the page?
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

          this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        }

        _createClass(FormComponent, [{
          key: "classes",
          get: function get() {
            var mode = this.primary ? 'storybook-form--primary' : 'storybook-form--secondary';
            return ['storybook-form', "storybook-form--".concat(this.size), mode];
          }
        }]);

        return FormComponent;
      }();

      FormComponent.ɵfac = function FormComponent_Factory(t) {
        return new (t || FormComponent)();
      };

      FormComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: FormComponent,
        selectors: [["storybook-form"]],
        inputs: {
          primary: "primary",
          backgroundColor: "backgroundColor",
          size: "size",
          label: "label"
        },
        outputs: {
          onClick: "onClick"
        },
        decls: 11,
        vars: 0,
        consts: [[1, "Vector"], ["hidden", ""]],
        template: function FormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "storybook-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "storybook-input");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "storybook-input");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _cards_card_component__WEBPACK_IMPORTED_MODULE_0__["default"], _inputs_story_input_component__WEBPACK_IMPORTED_MODULE_1__.StoryInputComponent],
        styles: [".Vector[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 637.5px;\r\n  height: 819px;\r\n  left: calc(50% - 637.5px/2 - 1.25px);\r\n  top: calc(50% - 819px/2 - 0.5px);\r\n}\r\n\r\n.form[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 3.18%;\r\n  right: 14.78%;\r\n  top: 0;\r\n  bottom: 0;\r\n  border-radius: 14px;\r\n  box-shadow: -4px 4px 10px 0 rgba(88, 166, 228, 0.3);\r\n  background-color: #fff;\r\n}\r\n\r\n.storybook-card[_ngcontent-%COMP%] {\r\n  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;\r\n  font-weight: 700;\r\n  border: 0;\r\n  border-radius: 3em;\r\n  cursor: pointer;\r\n  display: inline-block;\r\n  line-height: 1;\r\n}\r\n\r\n.storybook-card--primary[_ngcontent-%COMP%] {\r\n  color: white;\r\n  background-color: #1ea7fd;\r\n}\r\n\r\n.storybook-card--secondary[_ngcontent-%COMP%] {\r\n  color: #333;\r\n  background-color: transparent;\r\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;\r\n}\r\n\r\n.storybook-card--small[_ngcontent-%COMP%] {\r\n  font-size: 12px;\r\n  padding: 10px 16px;\r\n}\r\n\r\n.storybook-card--medium[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  padding: 11px 20px;\r\n}\r\n\r\n.storybook-card--large[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  padding: 12px 24px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0uY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLE1BQU07RUFDTixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLG1EQUFtRDtFQUNuRCxzQkFBc0I7QUFDeEI7O0FBS0E7RUFDRSwwRUFBMEU7RUFDMUUsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IscURBQXFEO0FBQ3ZEOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCIiwiZmlsZSI6ImZvcm0uY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLlZlY3RvciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA2MzcuNXB4O1xyXG4gIGhlaWdodDogODE5cHg7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSA2MzcuNXB4LzIgLSAxLjI1cHgpO1xyXG4gIHRvcDogY2FsYyg1MCUgLSA4MTlweC8yIC0gMC41cHgpO1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDMuMTglO1xyXG4gIHJpZ2h0OiAxNC43OCU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIGJveC1zaGFkb3c6IC00cHggNHB4IDEwcHggMCByZ2JhKDg4LCAxNjYsIDIyOCwgMC4zKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4uc3Rvcnlib29rLWNhcmQge1xyXG4gIGZvbnQtZmFtaWx5OiAnTnVuaXRvIFNhbnMnLCAnSGVsdmV0aWNhIE5ldWUnLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG59XHJcbi5zdG9yeWJvb2stY2FyZC0tcHJpbWFyeSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxZWE3ZmQ7XHJcbn1cclxuLnN0b3J5Ym9vay1jYXJkLS1zZWNvbmRhcnkge1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xNSkgMHB4IDBweCAwcHggMXB4IGluc2V0O1xyXG59XHJcbi5zdG9yeWJvb2stY2FyZC0tc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBwYWRkaW5nOiAxMHB4IDE2cHg7XHJcbn1cclxuLnN0b3J5Ym9vay1jYXJkLS1tZWRpdW0ge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiAxMXB4IDIwcHg7XHJcbn1cclxuLnN0b3J5Ym9vay1jYXJkLS1sYXJnZSB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDEycHggMjRweDtcclxufVxyXG4iXX0= */"]
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      38583);

      function StoryInputComponent_button_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoryInputComponent_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.onPin(ctx_r1.storyInput.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "pinInput-" + ctx_r0.storyInput.id);
        }
      }

      var _StoryInputComponent = /*#__PURE__*/function () {
        function _StoryInputComponent() {
          _classCallCheck(this, _StoryInputComponent);

          // tslint:disable-next-line: no-output-on-prefix
          this.onPinInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter(); // tslint:disable-next-line: no-output-on-prefix

          this.onArchiveInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }
        /**
         * Component method to trigger the onPin event
         * @param id string
         */


        _createClass(_StoryInputComponent, [{
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
        }]);

        return _StoryInputComponent;
      }();

      _StoryInputComponent.ɵfac = function StoryInputComponent_Factory(t) {
        return new (t || _StoryInputComponent)();
      };

      _StoryInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _StoryInputComponent,
        selectors: [["storybook-input"]],
        inputs: {
          storyInput: "storyInput"
        },
        outputs: {
          onPinInput: "onPinInput",
          onArchiveInput: "onArchiveInput"
        },
        decls: 7,
        vars: 11,
        consts: [[1, "user-name", 3, "for"], [1, "User-Name", "D-Caps-Regular"], [1, "Rectangle-17", 3, "for"], ["type", "text", "readonly", "true", "placeholder", "Input title", 1, "", 3, "value", "id", "name"], ["class", "pin-button", 3, "click", 4, "ngIf"], [1, "pin-button", 3, "click"], [1, "icon-star"]],
        template: function StoryInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "User Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StoryInputComponent_button_6_Template, 2, 1, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("list-item ", ctx.storyInput == null ? null : ctx.storyInput.state, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "checked-", ctx.storyInput == null ? null : ctx.storyInput.id, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "archiveInput-" + ctx.storyInput.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "title-", ctx.storyInput == null ? null : ctx.storyInput.id, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.storyInput.title + "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "title-", ctx.storyInput == null ? null : ctx.storyInput.id, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "title-", ctx.storyInput == null ? null : ctx.storyInput.id, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.storyInput.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.storyInput == null ? null : ctx.storyInput.state) !== "INPUT_ARCHIVED");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf],
        styles: [".storybook-input[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  width: 444.88px;\r\n  height: 101.16px;\r\n}\r\n\r\n\r\n\r\n.user-name[_ngcontent-%COMP%] {\r\n  \r\n\r\n  display: flex;\r\n  align-items: center;\r\n  letter-spacing: -0.011em;\r\n  text-transform: uppercase;\r\n\r\n  color: #000000;\r\n}\r\n\r\n\r\n\r\n.user-name[_ngcontent-%COMP%]   .User-Name[_ngcontent-%COMP%] {\r\n\r\n  width: 97px;\r\n  height: 32px;\r\n  left: 0;\r\n  top: 0;\r\n\r\n  display: flex;\r\n  align-items: center;\r\n  letter-spacing: -0.011em;\r\n  text-transform: uppercase;\r\n\r\n  color: #000000;\r\n\r\n\r\n  \r\n\r\n  flex: none;\r\n  order: 0;\r\n  flex-grow: 0;\r\n\r\n\r\n\r\n}\r\n\r\n\r\n\r\n.D-Caps-Regular[_ngcontent-%COMP%] {\r\n  \r\n\r\n  font-family: NotoSans;\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n  line-height: 31px;\r\n}\r\n\r\n\r\n\r\n.user-name[_ngcontent-%COMP%]   .Ex-Saul-Ramirez[_ngcontent-%COMP%] {\r\n  width: 153px;\r\n  height: 32px;\r\n  margin: 0 0 1.2px 25.3px;\r\n  padding: 12.2px 49px 7.8px 48px;\r\n  font-family: Inter;\r\n  font-size: 20px;\r\n  font-weight: normal;\r\n  font-stretch: normal;\r\n  font-style: italic;\r\n  line-height: 1.56;\r\n  letter-spacing: -0.22px;\r\n  text-align: left;\r\n  color: #c8c8c8;\r\n}\r\n\r\n\r\n\r\n.user-name[_ngcontent-%COMP%]   img.Ex-Saul-Ramirez[_ngcontent-%COMP%] {\r\n  width: 56px;\r\n  height: 12px;\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  font-family: NotoSans;\r\n  font-size: 7.3px;\r\n  font-weight: normal;\r\n  font-stretch: normal;\r\n  font-style: normal;\r\n  line-height: 1.5;\r\n  letter-spacing: -0.08px;\r\n  text-align: left;\r\n  color: #c8c8c8;\r\n}\r\n\r\n\r\n\r\n.user-name[_ngcontent-%COMP%]   img.User2ldpi-1[_ngcontent-%COMP%] {\r\n  width: 22.7px;\r\n  height: 26.7px;\r\n  margin: 2.2px 20.3px 4.3px 0;\r\n  -o-object-fit: contain;\r\n     object-fit: contain;\r\n  box-shadow: 0 1px 1px 0 rgba(61, 142, 207, 0.15);\r\n}\r\n\r\n\r\n\r\n.user-name[_ngcontent-%COMP%]   .DanK203[_ngcontent-%COMP%] {\r\n  width: 72px;\r\n  height: 32px;\r\n  margin: 1.2px 86px 0 20.3px;\r\n  font-family: NotoSans;\r\n  font-size: 17px;\r\n  font-weight: normal;\r\n  font-stretch: normal;\r\n  font-style: normal;\r\n  line-height: 1.83;\r\n  letter-spacing: -0.19px;\r\n  text-align: left;\r\n  color: var(#000000);\r\n}\r\n\r\n\r\n\r\n.Rectangle-17[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: 0.2%;\r\n  right: 0%;\r\n  top: 42.66%;\r\n  bottom: 0%;\r\n  padding: 11.8px 218px 13px 25px;\r\n  border-radius: 10px;\r\n  border: solid 1.5px var(#3d8ecf);\r\n  background-color: #fff;\r\n}\r\n\r\n\r\n\r\n.User-Name[_ngcontent-%COMP%] {\r\n  width: 77px;\r\n  height: 32px;\r\n  \r\n  font-size: 14px;\r\n  font-weight: normal;\r\n  font-stretch: normal;\r\n  font-style: normal;\r\n  line-height: 2.23;\r\n  letter-spacing: -0.15px;\r\n  text-align: left;\r\n  color: var(#000);\r\n}\r\n\r\n\r\n\r\n.Vector2[_ngcontent-%COMP%] {\r\n  box-sizing: border-box;\r\n\r\n  width: 444px;\r\n  height: 58px;\r\n  left: calc(50% - 444px/2);\r\n  top: calc(50% - 58px/2 - 3px);\r\n\r\n  \r\n\r\n  background: #FFFFFF;\r\n  \r\n\r\n  border: 1.5px solid #3D8ECF;\r\n  border-radius: 10px;\r\n}\r\n\r\n\r\n\r\n.Vector[_ngcontent-%COMP%] {\r\n  width: 22.7px;\r\n  height: 12.5px;\r\n  flex-grow: 0;\r\n  background-image: linear-gradient(to bottom, var(#3d8ecf) 0%, #58a6e4 100%);\r\n}\r\n\r\n\r\n\r\n.card[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 6.18%;\r\n  right: 45.78%;\r\n  top: 0;\r\n  bottom: 0;\r\n  border-radius: 14px;\r\n  box-shadow: -4px 4px 10px 0 rgba(88, 166, 228, 0.3);\r\n  background-color: #3d8ecf;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3J5LWlucHV0LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7Ozs7QUFJQTtFQUNFLHFDQUFxQzs7RUFFckMsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIseUJBQXlCOztFQUV6QixjQUFjO0FBQ2hCOzs7O0FBSUE7O0VBRUUsV0FBVztFQUNYLFlBQVk7RUFDWixPQUFPO0VBQ1AsTUFBTTs7RUFFTixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4Qix5QkFBeUI7O0VBRXpCLGNBQWM7OztFQUdkLHVCQUF1Qjs7RUFFdkIsVUFBVTtFQUNWLFFBQVE7RUFDUixZQUFZOzs7O0FBSWQ7Ozs7QUFFQTtFQUNFLG1CQUFtQjs7RUFFbkIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7OztBQUdBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsK0JBQStCO0VBQy9CLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7OztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBbUI7S0FBbkIsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCw0QkFBNEI7RUFDNUIsc0JBQW1CO0tBQW5CLG1CQUFtQjtFQUNuQixnREFBZ0Q7QUFDbEQ7Ozs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOzs7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxXQUFXO0VBQ1gsVUFBVTtFQUNWLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsZ0NBQWdDO0VBQ2hDLHNCQUFzQjtBQUN4Qjs7OztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7OztBQUdBO0VBQ0Usc0JBQXNCOztFQUV0QixZQUFZO0VBQ1osWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qiw2QkFBNkI7O0VBRTdCLFVBQVU7O0VBRVYsbUJBQW1CO0VBQ25CLFNBQVM7O0VBRVQsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7OztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxZQUFZO0VBQ1osMkVBQTJFO0FBQzdFOzs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixNQUFNO0VBQ04sU0FBUztFQUNULG1CQUFtQjtFQUNuQixtREFBbUQ7RUFDbkQseUJBQXlCO0FBQzNCIiwiZmlsZSI6InN0b3J5LWlucHV0LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLnN0b3J5Ym9vay1pbnB1dCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiA0NDQuODhweDtcclxuICBoZWlnaHQ6IDEwMS4xNnB4O1xyXG59XHJcblxyXG5cclxuXHJcbi51c2VyLW5hbWUge1xyXG4gIC8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0LCBvciAyMjMlICovXHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDExZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbn1cclxuXHJcblxyXG5cclxuLnVzZXItbmFtZSAuVXNlci1OYW1lIHtcclxuXHJcbiAgd2lkdGg6IDk3cHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxMWVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gIGNvbG9yOiAjMDAwMDAwO1xyXG5cclxuXHJcbiAgLyogSW5zaWRlIGF1dG8gbGF5b3V0ICovXHJcblxyXG4gIGZsZXg6IG5vbmU7XHJcbiAgb3JkZXI6IDA7XHJcbiAgZmxleC1ncm93OiAwO1xyXG5cclxuXHJcblxyXG59XHJcblxyXG4uRC1DYXBzLVJlZ3VsYXIge1xyXG4gIC8qIEQgQ2FwcyBSZWd1bGFyICovXHJcblxyXG4gIGZvbnQtZmFtaWx5OiBOb3RvU2FucztcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMxcHg7XHJcbn1cclxuXHJcblxyXG4udXNlci1uYW1lIC5FeC1TYXVsLVJhbWlyZXoge1xyXG4gIHdpZHRoOiAxNTNweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgbWFyZ2luOiAwIDAgMS4ycHggMjUuM3B4O1xyXG4gIHBhZGRpbmc6IDEyLjJweCA0OXB4IDcuOHB4IDQ4cHg7XHJcbiAgZm9udC1mYW1pbHk6IEludGVyO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBsaW5lLWhlaWdodDogMS41NjtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMjJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiAjYzhjOGM4O1xyXG59XHJcblxyXG4udXNlci1uYW1lIGltZy5FeC1TYXVsLVJhbWlyZXoge1xyXG4gIHdpZHRoOiA1NnB4O1xyXG4gIGhlaWdodDogMTJweDtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIGZvbnQtZmFtaWx5OiBOb3RvU2FucztcclxuICBmb250LXNpemU6IDcuM3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA4cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogI2M4YzhjODtcclxufVxyXG5cclxuLnVzZXItbmFtZSBpbWcuVXNlcjJsZHBpLTEge1xyXG4gIHdpZHRoOiAyMi43cHg7XHJcbiAgaGVpZ2h0OiAyNi43cHg7XHJcbiAgbWFyZ2luOiAyLjJweCAyMC4zcHggNC4zcHggMDtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCAwIHJnYmEoNjEsIDE0MiwgMjA3LCAwLjE1KTtcclxufVxyXG5cclxuLnVzZXItbmFtZSAuRGFuSzIwMyB7XHJcbiAgd2lkdGg6IDcycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG4gIG1hcmdpbjogMS4ycHggODZweCAwIDIwLjNweDtcclxuICBmb250LWZhbWlseTogTm90b1NhbnM7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjgzO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4xOXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6IHZhcigjMDAwMDAwKTtcclxufVxyXG5cclxuXHJcbi5SZWN0YW5nbGUtMTcge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiAwLjIlO1xyXG4gIHJpZ2h0OiAwJTtcclxuICB0b3A6IDQyLjY2JTtcclxuICBib3R0b206IDAlO1xyXG4gIHBhZGRpbmc6IDExLjhweCAyMThweCAxM3B4IDI1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3JkZXI6IHNvbGlkIDEuNXB4IHZhcigjM2Q4ZWNmKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uVXNlci1OYW1lIHtcclxuICB3aWR0aDogNzdweDtcclxuICBoZWlnaHQ6IDMycHg7XHJcbiAgLypmb250LWZhbWlseTogTm90b1NhbnM7Ki9cclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgbGluZS1oZWlnaHQ6IDIuMjM7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjE1cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogdmFyKCMwMDApO1xyXG59XHJcblxyXG5cclxuLlZlY3RvcjIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gIHdpZHRoOiA0NDRweDtcclxuICBoZWlnaHQ6IDU4cHg7XHJcbiAgbGVmdDogY2FsYyg1MCUgLSA0NDRweC8yKTtcclxuICB0b3A6IGNhbGMoNTAlIC0gNThweC8yIC0gM3B4KTtcclxuXHJcbiAgLyogV2hpdGUgKi9cclxuXHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAvKiBCbHVlICovXHJcblxyXG4gIGJvcmRlcjogMS41cHggc29saWQgIzNEOEVDRjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uVmVjdG9yIHtcclxuICB3aWR0aDogMjIuN3B4O1xyXG4gIGhlaWdodDogMTIuNXB4O1xyXG4gIGZsZXgtZ3JvdzogMDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCB2YXIoIzNkOGVjZikgMCUsICM1OGE2ZTQgMTAwJSk7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNi4xOCU7XHJcbiAgcmlnaHQ6IDQ1Ljc4JTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgYm94LXNoYWRvdzogLTRweCA0cHggMTBweCAwIHJnYmEoODgsIDE2NiwgMjI4LCAwLjMpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZDhlY2Y7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"]
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
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_button_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.onPin(ctx_r1.task.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "pinTask-" + ctx_r0.task.id);
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
        decls: 7,
        vars: 14,
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
