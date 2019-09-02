webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_guard__ = __webpack_require__("../../../../../src/app/core/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ui_user_login_user_login_component__ = __webpack_require__("../../../../../src/app/ui/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__items_news_page_news_page_component__ = __webpack_require__("../../../../../src/app/items/news-page/news-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notes_notes_list_notes_list_component__ = __webpack_require__("../../../../../src/app/notes/notes-list/notes-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_readme_page_readme_page_component__ = __webpack_require__("../../../../../src/app/ui/readme-page/readme-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/profile/user-profile/user-profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__ui_readme_page_readme_page_component__["a" /* ReadmePageComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__ui_user_login_user_login_component__["a" /* UserLoginComponent */], },
    { path: 'items', component: __WEBPACK_IMPORTED_MODULE_4__items_news_page_news_page_component__["a" /* NewsPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_auth_guard__["a" /* AuthGuard */]] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_7__profile_user_profile_user_profile_component__["a" /* UserProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_auth_guard__["a" /* AuthGuard */]] },
    { path: 'notes', component: __WEBPACK_IMPORTED_MODULE_5__notes_notes_list_notes_list_component__["a" /* NotesListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__core_auth_guard__["a" /* AuthGuard */]] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        providers: [__WEBPACK_IMPORTED_MODULE_2__core_auth_guard__["a" /* AuthGuard */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\n<top-nav></top-nav>\n  <div class=\"content columns\">\n\n    <main class=\"column is-8\">\n      <router-outlet></router-outlet>\n    </main>\n\n</div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn {\n  position: relative;\n  padding: 0;\n  overflow: hidden;\n  border-width: 0;\n  outline: none;\n  border-radius: 2px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.6);\n  width: 24%;\n  background-color: #2ecc71;\n  color: #ecf0f1;\n  transition: background-color .3s; }\n\n.btn:hover, .btn:focus {\n  background-color: #27ae60; }\n\n.btn > * {\n  position: relative; }\n\n.btn span {\n  display: block;\n  padding: 12px 24px; }\n\n.btn:before {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 0;\n  padding-top: 0;\n  border-radius: 100%;\n  background-color: rgba(236, 240, 241, 0.3);\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%); }\n\n.btn:active:before {\n  width: 120%;\n  padding-top: 120%;\n  transition: width .2s ease-out, padding-top .2s ease-out; }\n\n/* Styles, not important */\n*, *:before, *:after {\n  box-sizing: border-box; }\n\nhtml {\n  position: relative;\n  height: 100%; }\n\nbody {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  background-color: #ecf0f1;\n  color: #34495e;\n  font-family: Trebuchet, Arial, sans-serif;\n  text-align: center; }\n\nh2 {\n  font-weight: normal; }\n\n.btn.orange {\n  background-color: #e67e22; }\n\n.btn.orange:hover, .btn.orange:focus {\n  background-color: #d35400; }\n\n.btn.red {\n  background-color: #e74c3c; }\n\n.btn.red:hover, .btn.red:focus {\n  background-color: #c0392b; }\n\n.footer {\n  height: 12px;\n  width: 100%;\n  min-height: 50px;\n  background-image: none;\n  background-repeat: repeat;\n  background-attachment: scroll;\n  background-position: 0% 0%;\n  position: fixed;\n  bottom: 0pt;\n  left: 0pt;\n  text-align: unset;\n  background-color: white;\n  padding: 0.5rem 0.5rem 3.5rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(auth) {
        this.auth = auth;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_sharebuttons__ = __webpack_require__("../../../../ngx-sharebuttons/ngx-sharebuttons.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ui_shared_ui_module__ = __webpack_require__("../../../../../src/app/ui/shared/ui.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__notes_notes_module__ = __webpack_require__("../../../../../src/app/notes/notes.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__("../../../../angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__profile_shared_profile_module__ = __webpack_require__("../../../../../src/app/profile/shared/profile.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__items_shared_item_module__ = __webpack_require__("../../../../../src/app/items/shared/item.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__news_api_service__ = __webpack_require__("../../../../../src/app/news-api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





///// Start FireStarter
// Core

// Shared/Widget

// Feature Modules




///// End FireStarter



var firebaseConfig = __WEBPACK_IMPORTED_MODULE_11__environments_environment__["a" /* environment */].firebaseConfig;



var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientJsonpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8_ngx_sharebuttons__["a" /* ShareButtonsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_14__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_15__items_shared_item_module__["a" /* ItemModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_5__core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_13__profile_shared_profile_module__["a" /* ProfileModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_9__ui_shared_ui_module__["a" /* UiModule */],
            __WEBPACK_IMPORTED_MODULE_10__notes_notes_module__["a" /* NotesModule */],
            __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_16__news_api_service__["a" /* NewsApiService */]],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/core/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_take__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthGuard = (function () {
    function AuthGuard(afAuth, router) {
        this.afAuth = afAuth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.afAuth.authState
            .take(1)
            .map(function (user) { return !!user; })
            .do(function (loggedIn) {
            if (!loggedIn) {
                console.log('access denied');
                _this.router.navigate(['/login']);
            }
        });
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/core/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__("../../../../firebase/app/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// export function createListValueChanges<T>(query: DatabaseQuery) {
//   return function valueChanges<T>(events?: ChildEvent[]): Observable<T[]> {
//     events = validateEventsArray(events);
//     return listChanges<T>(query, events!)
//       .map(changes => changes.map(change => {
//         console.log(changes)
//         const data = change.payload.snapshot!.val()
//         return  { $key: change.key, ...data }
//       }))
//   }
// }
var AuthService = (function () {
    function AuthService(afAuth, db, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.db = db;
        this.router = router;
        this.authState = null;
        this.afAuth.authState.subscribe(function (auth) {
            _this.authState = auth;
        });
    }
    Object.defineProperty(AuthService.prototype, "authenticated", {
        // Returns true if user is logged in
        get: function () {
            return this.authState !== null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUser", {
        // Returns current user data
        get: function () {
            return this.authenticated ? this.authState : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserObservable", {
        // Returns
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserId", {
        // Returns current user UID
        get: function () {
            return this.authenticated ? this.authState.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserAnonymous", {
        // Anonymous User
        get: function () {
            return this.authenticated ? this.authState.isAnonymous : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "currentUserDisplayName", {
        // Returns current user display name or Guest
        get: function () {
            if (!this.authState) {
                return 'Guest';
            }
            else if (this.currentUserAnonymous) {
                return 'Anonymous';
            }
            else {
                return this.authState['displayName'] || 'User without a Name';
            }
        },
        enumerable: true,
        configurable: true
    });
    //// Social Auth ////
    AuthService.prototype.githubLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GithubAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.googleLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GoogleAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.facebookLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.twitterLogin = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].TwitterAuthProvider();
        return this.socialSignIn(provider);
    };
    AuthService.prototype.socialSignIn = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (credential) {
            _this.authState = credential.user;
            _this.updateUserData();
        })
            .catch(function (error) { return console.log(error); });
    };
    //// Anonymous Auth ////
    AuthService.prototype.anonymousLogin = function () {
        var _this = this;
        return this.afAuth.auth.signInAnonymously()
            .then(function (user) {
            _this.authState = user;
        })
            .catch(function (error) { return console.log(error); });
    };
    //// Email/Password Auth ////
    AuthService.prototype.emailSignUp = function (email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            _this.updateUserData();
        })
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.emailLogin = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            _this.updateUserData();
        })
            .catch(function (error) { return console.log(error); });
    };
    // Sends email allowing user to reset password
    AuthService.prototype.resetPassword = function (email) {
        var fbAuth = __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]();
        return fbAuth.sendPasswordResetEmail(email)
            .then(function () { return console.log('email sent'); })
            .catch(function (error) { return console.log(error); });
    };
    //// Sign Out ////
    AuthService.prototype.signOut = function () {
        this.afAuth.auth.signOut();
        this.router.navigate(['/']);
    };
    //// Helpers ////
    AuthService.prototype.updateUserData = function () {
        // Writes user name and email to realtime db
        // useful if your app displays information about users or for admin features
        var path = "users/" + this.currentUserId; // Endpoint on firebase
        var userRef = this.db.object(path);
        var data = {
            email: this.authState.email,
            name: this.authState.displayName
        };
        userRef.update(data)
            .catch(function (error) { return console.log(error); });
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        providers: [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["b" /* AngularFireAuthModule */]]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "../../../../../src/app/items/courses-list/courses-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Montserrat);", ""]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);

// module
exports.push([module.i, "div.scrollmenu {\n  background-color: white;\n  overflow: auto;\n  text-align: center;\n  white-space: nowrap;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  overflow-x: scroll;\n  position: relative;\n  padding-top: 30px;\n}\n\n.scrollmenu p.title {\n  position: absolute;\n  left: 50%;\n  top: 0;\n  font-size: 16px;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n}\n\n.content li {\n  margin-top: 20em;\n}\n\nmain.column.is-8 {\n  width: 100%;\n}\n\n.card {\n  transition: 0.3s;\n  margin: 20px;\n  background: transparent;\n  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.30), 0 15px 12px rgba(0, 0, 0, 0.22);\n  max-width: 280px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  height: 300px;\n  overflow: hidden;\n  border-radius: 10px !important;\n}\n\n.card-holder {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\n.card img {\n  height: 100%;\n  max-width: 500px !important;\n}\n\n.card h3 {\n  /* font-size: 50%; */\n}\n\n#category0 {\n  display: none;\n}\n\np {\n  color: #96ACB7;\n}\n\nh3 {\n  color: #214F4B;\n}\n\nul[_ngcontent-c3] {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.text_container {\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  color: white;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: self-start;\n      -ms-flex-align: self-start;\n          align-items: self-start;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: #00000045;\n  width: 100%;\n  padding: 10px;\n}\n\n.card .container {\n  padding: 0 !important;\n  width: 100% !important;\n}\n\n.card .container,\n.card img\n.text_container {\n  border-radius: 10px !important;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.text_container h3,\n.text_container span,\n.text_container p {\n  color: white;\n  font-family: 'Roboto', sans-serif;\n  font-size: 14px;\n  font-weight: normal;\n}\n\n.text_container h3 {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}\n\n.container {\n  padding: 2px 16px;\n}\n\ndiv.scrollmenu button {\n  display: inline-block;\n  text-align: center;\n  padding: 14px;\n  text-decoration: none;\n}\n\n::-webkit-scrollbar {\n  width: 0px;\n}\n\n::-webkit-scrollbar-track-piece {\n  background-color: transparent;\n  -webkit-border-radius: 6px;\n}\n\n.btn {\n  font-family: 'Montserrat', sans-serif;\n  overflow: hidden;\n  cursor: pointer;\n  background: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 12%;\n  transition: all 150ms linear;\n  text-align: center;\n  text-decoration: none !important;\n  text-transform: none;\n  border-radius: 45px;\n\n  font-size: 2vh;\n  font-weight: 500;\n  line-height: 1.3;\n\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n\n  -webkit-box-pack: center;\n\n      -ms-flex-pack: center;\n\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 160px;\n          flex: 0 0 160px;\n\n  box-shadow: 1px 5px 6px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease 0s;\n  cursor: pointer;\n  outline: none;\n  font-family: 'Roboto', sans-serif;\n  font-size: 11px;\n  text-transform: uppercase;\n  letter-spacing: 2.5px;\n  font-weight: 500;\n  color: #000;\n  background-color: #fff;\n  border: none;\n  margin: 1%;\n  white-space: normal;\n  padding: 10px;\n}\n\n\n.btn:hover {\n  background-color: #2EE59D;\n  box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);\n  color: #fff;\n  -webkit-transform: translateY(-7px);\n          transform: translateY(-7px);\n}\n\n.btn>* {\n  position: relative;\n}\n\n.btn.action {\n  margin:2% auto; \n  background: #2EE59D;\n  color: white;\n}\n\n.scrollmenu.block {\n  display: block;\n}\n\n.btn span {\n  display: block;\n}\n\nul {\n  list-style-type: none;\n}\n\n.btn:before {\n  content: \"\";\n\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  display: block;\n  width: 0;\n  padding-top: 0;\n\n  border-radius: 100%;\n\n  background-color: rgba(236, 240, 241, .3);\n\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n\n.btn:active:before {\n  width: 120%;\n  padding-top: 120%;\n\n  transition: width .2s ease-out, padding-top .2s ease-out;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/items/courses-list/courses-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n    <div class=\"scrollmenu\">\n        <button class=\"btn\" (click)=\"filterBy('')\" type=\"button\"><span>All</span></button>\n        <button class=\"btn\" (click)=\"searchArticles('news')\" type=\"button\"><span>News</span></button>\n        <button class=\"btn\" (click)=\"searchArticles('politic')\" type=\"button\"><span>Politic</span></button>\n        <button class=\"btn\" (click)=\"searchArticles('health')\" type=\"button\"><span>Sanatate</span></button>\n        <button class=\"btn\" (click)=\"searchArticles('IT')\" type=\"button\"><span>IT</span></button>\n        <button class=\"btn\" (click)=\"searchArticles('sport')\" type=\"button\"><span>Sport</span></button>\n        <button class=\"btn\" (click)=\"searchArticles('monden')\" type=\"button\"><span>Monden</span></button>\n        <button class=\"btn\" (click)=\"searchArticles('life')\" type=\"button\"><span>Life</span></button>\n    </div>\n    <button class=\"btn\" type=\"button\" (click)=\"showOptions = !showOptions\">\n        <span *ngIf=\"!showOptions\">More Options</span>\n        <span *ngIf=\"showOptions\">Less Options</span>\n    </button>\n    <div class=\"scrollmenu\"  *ngIf=\"showOptions\">\n        <p class=\"title\">Sursele stirilor</p>\n        <button class=\"btn\" *ngFor=\"let source of mSources\" (click)=\"searchArticles(source.id);\" type=\"button\">\n            <span>{{source.name}}</span>\n        </button>\n    </div>\n    \n    <div class=\"scrollmenu\" *ngIf=\"showOptions\">\n        <p class=\"title\">Cuvintele tale cheie</p>\n        <a class=\"btn\" type=\"button\" (click)=\"goToWatchlist()\">\n            <span>Edit Options</span>\n        </a>\n        <button *ngFor = \"let saved of saved$ ; let i = index\" class=\"btn\" (click)=\"searchArticles(saved);\" id=\"category{{ i }}\" type=\"button\">\n            <span>{{saved}}</span>\n        </button>\n        \n    </div>\n    <button class=\"btn\" (click)=\"add()\" type=\"button\" hidden>\n        <span>Add</span>\n    </button>\n    <div *ngIf=\"mArticles\">\n      <div class=\"scrollmenu block\">\n        <button class=\"btn action\" (click)=\"startSpeaking()\" type=\"button\"><i class=\"fa fa-microphone\" aria-hidden=\"true\"> Speak</i></button>\n        <button class=\"btn action\" (click)=\"stopSpeaking()\" type=\"button\"><i class=\"fa fa-stop-circle\" aria-hidden=\"true\"> Stop</i></button>\n\n        <!-- <div [hidden]=\"!waitCommand\">Waiting voice commands, say 'more' or 'stop'</div> -->\n      </div>\n      <div class=\"card-holder\">\n        <div class=\"card\" *ngFor=\"let article of mArticles\" #courseList >\n            <div class=\"container\" *ngIf=\"article.urlToImage\">\n                <a href=\"{{article.url}}\" target=\"_blank\">\n                    <img class=\"img-article\" src={{article.urlToImage}} alt=\"\">\n                    <div class=\"text_container\">\n                        <h3>{{article.title}}</h3>\n                        <span>{{article.source.name}}</span>\n                        <p>{{article.description}}</p>\n                    </div>\n                </a>\n                <!-- <share-buttons [include]=\"['facebook', 'twitter', 'whatsapp']\" [url]=\"item.payload.val().Link\"></share-buttons> -->\n            </div>\n        </div>\n      </div>\n            \n        \n        <!-- <div *ngIf=\"items.length === 0\">Niciun rezultat</div> -->\n    </div>\n    <ng-template #loading>Loading&hellip;</ng-template>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/items/courses-list/courses-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoursesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_concatMap__ = __webpack_require__("../../../../rxjs/add/operator/concatMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_concatMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_concatMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_speech_speech_service__ = __webpack_require__("../../../../../src/app/shared/speech/speech.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_timeout__ = __webpack_require__("../../../../rxjs/add/operator/timeout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__news_api_service__ = __webpack_require__("../../../../../src/app/news-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var CoursesListComponent = (function () {
    function CoursesListComponent(db, speech, http, newsapi, router) {
        var _this = this;
        this.db = db;
        this.speech = speech;
        this.http = http;
        this.newsapi = newsapi;
        this.router = router;
        this.check = ''; //global variable
        this.waitCommand = false;
        this.size$ = new __WEBPACK_IMPORTED_MODULE_3_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        var user = __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser;
        var uid;
        uid = user.uid;
        this.items$ = this.size$.switchMap(function (Category) {
            return db.list('/users/' + uid, function (ref) { return ref; }).snapshotChanges();
        });
        db.list('/users/' + uid + '/saved/' + uid).valueChanges().subscribe(function (list) {
            _this.saved$ = list;
            console.log(list);
        });
    }
    CoursesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.newsapi.initArticles().subscribe(function (data) { return _this.mArticles = data['articles']; });
        this.newsapi.initSources().subscribe(function (data) { return _this.mSources = data['sources']; });
    };
    CoursesListComponent.prototype.getInputVal = function (id) {
        return document.getElementById(id).value;
    };
    CoursesListComponent.prototype.add = function () {
        var user = __WEBPACK_IMPORTED_MODULE_6_firebase__["auth"]().currentUser;
        var uid;
        uid = user.uid;
        __WEBPACK_IMPORTED_MODULE_6_firebase__["database"]().ref('/users/' + uid + '/saved').child(uid).push({
            uid: uid
        });
    };
    CoursesListComponent.prototype.goToWatchlist = function () {
        this.router.navigate(['/notes']);
    };
    CoursesListComponent.prototype.searchArticles = function (source) {
        var _this = this;
        console.log("selected source is: " + source);
        this.newsapi.getArticlesByID(source).subscribe(function (data) { return _this.mArticles = data['articles']; });
    };
    CoursesListComponent.prototype.filterBy = function (Category) {
        this.size$.next(Category);
    };
    CoursesListComponent.prototype.stopSpeaking = function () {
        this.check = "test";
        console.log(this.check);
        this.waitCommand = true;
        this.courseList.forEach(function (elem) { return elem.nativeElement.style.border = null; });
    };
    CoursesListComponent.prototype.startSpeaking = function () {
        var _this = this;
        this.waitCommand = false;
        this.courseList.forEach(function (elem) { return elem.nativeElement.style.border = null; });
        // this.check = "test1";
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of.apply(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"], this.courseList.toArray()).concatMap(function (elem) {
            elem.nativeElement.style.border = '3px groove rgba(65, 109, 234, 0.5)';
            var title = elem.nativeElement.querySelector('h3').textContent;
            var description = elem.nativeElement.querySelector('p').textContent;
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
                _this.speech.speak(title)
                    .subscribe(function () {
                    observer.next();
                    _this.waitCommand = true;
                    if (_this.check == "test") {
                        _this.waitCommand = true;
                        _this.check = "test2";
                        return;
                    }
                    _this.speech.record().timeout(7000).subscribe(function (event) {
                        var command = event.results[0][0].transcript;
                        _this.waitCommand = false;
                        console.log('User may have said:', command);
                        console.log(_this.check);
                        console.log('User may have said:', command);
                        if (command === 'more') {
                            _this.speech.speak(description).subscribe(function () { return observer.complete(); });
                        }
                        else if (command === 'stop' || command === 'stop stop') {
                            _this.waitCommand = true;
                            _this.courseList.forEach(function (elem) { return elem.nativeElement.style.border = null; });
                        }
                        else {
                            observer.complete();
                        }
                    }, function (error) {
                        _this.waitCommand = false;
                        observer.complete();
                    });
                });
            });
        })
            .subscribe(function () { return _this.waitCommand = false; });
    };
    return CoursesListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChildren */])('courseList'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* QueryList */]) === "function" && _a || Object)
], CoursesListComponent.prototype, "courseList", void 0);
CoursesListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-list',
        template: __webpack_require__("../../../../../src/app/items/courses-list/courses-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/items/courses-list/courses-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__shared_speech_speech_service__["a" /* SpeechService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_speech_speech_service__["a" /* SpeechService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HttpClient */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_10__news_api_service__["a" /* NewsApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__news_api_service__["a" /* NewsApiService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_11__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__angular_router__["a" /* Router */]) === "function" && _f || Object])
], CoursesListComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=courses-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/items/news-page/news-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"starter-template\">\n    <h3 style=\"text-align: center; margin-top: 5%;\">Today's news</h3>\n    <app-list></app-list>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/items/news-page/news-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/items/news-page/news-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsPageComponent = (function () {
    function NewsPageComponent() {
    }
    NewsPageComponent.prototype.ngOnInit = function () {
    };
    return NewsPageComponent;
}());
NewsPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'news-page',
        template: __webpack_require__("../../../../../src/app/items/news-page/news-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/items/news-page/news-page.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NewsPageComponent);

//# sourceMappingURL=news-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/items/shared/item.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__item_service__ = __webpack_require__("../../../../../src/app/items/shared/item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__news_page_news_page_component__ = __webpack_require__("../../../../../src/app/items/news-page/news-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__courses_list_courses_list_component__ = __webpack_require__("../../../../../src/app/items/courses-list/courses-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_sharebuttons__ = __webpack_require__("../../../../ngx-sharebuttons/ngx-sharebuttons.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_speech_speech_service__ = __webpack_require__("../../../../../src/app/shared/speech/speech.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var ItemModule = (function () {
    function ItemModule() {
    }
    return ItemModule;
}());
ItemModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_9_ngx_sharebuttons__["a" /* ShareButtonsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabaseModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__courses_list_courses_list_component__["a" /* CoursesListComponent */],
            __WEBPACK_IMPORTED_MODULE_6__news_page_news_page_component__["a" /* NewsPageComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__item_service__["a" /* ItemService */],
            __WEBPACK_IMPORTED_MODULE_11__shared_speech_speech_service__["a" /* SpeechService */]
        ]
    })
], ItemModule);

//# sourceMappingURL=item.module.js.map

/***/ }),

/***/ "../../../../../src/app/items/shared/item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemService = (function () {
    function ItemService(db) {
        this.db = db;
        this.basePath = '/items';
        this.itemsRef = db.list('/items');
    }
    // Return an observable list with optional query
    // You will usually call this from OnInit in a component
    ItemService.prototype.getItemsList = function (query) {
        // const itemsRef = afDb.list('/items')
        // return this.itemsRef.valueChanges()
        return this.itemsRef.snapshotChanges().map(function (arr) {
            return arr.map(function (snap) { return Object.assign(snap.payload.val(), { $key: snap.key }); });
        });
    };
    // Return a single observable item
    ItemService.prototype.getItem = function (key) {
        var itemPath = this.basePath + "/" + key;
        this.item = this.db.object(itemPath).valueChanges();
        return this.item;
    };
    // Create a bramd new item
    ItemService.prototype.createItem = function (item) {
        this.itemsRef.push(item);
    };
    // Update an exisiting item
    ItemService.prototype.updateItem = function (key, value) {
        this.itemsRef.update(key, value);
    };
    // Deletes a single item
    ItemService.prototype.deleteItem = function (key) {
        this.itemsRef.remove(key);
    };
    // Deletes the entire list of items
    ItemService.prototype.deleteAll = function () {
        this.itemsRef.remove();
    };
    ItemService.prototype.filterBy = function (category) {
        this.category.next(category);
    };
    // Default error handling for all actions
    ItemService.prototype.handleError = function (error) {
        console.log(error);
    };
    return ItemService;
}());
ItemService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], ItemService);

var _a;
//# sourceMappingURL=item.service.js.map

/***/ }),

/***/ "../../../../../src/app/news-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsApiService = (function () {
    function NewsApiService(http) {
        this.http = http;
        this.api_key = '6b798a0e47fe4476bb686761f754b983';
    }
    NewsApiService.prototype.initSources = function () {
        return this.http.get('https://newsapi.org/v2/sources?apiKey=' + this.api_key);
    };
    NewsApiService.prototype.initArticles = function () {
        return this.http.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=' + this.api_key);
    };
    NewsApiService.prototype.getArticlesByID = function (source) {
        return this.http.get('https://newsapi.org/v2/everything?q=' + source + '&sortBy=publishedAt&apiKey=' + this.api_key);
    };
    return NewsApiService;
}());
NewsApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], NewsApiService);

var _a;
//# sourceMappingURL=news-api.service.js.map

/***/ }),

/***/ "../../../../../src/app/notes/note.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoteService = (function () {
    function NoteService(db) {
        this.db = db;
        this.basePath = '/items';
        this.itemsRef = db.list('/items');
    }
    // Return an observable list with optional query
    // You will usually call this from OnInit in a component
    NoteService.prototype.getItemsList = function (query) {
        // const itemsRef = afDb.list('/items')
        // return this.itemsRef.valueChanges()
        return this.itemsRef.snapshotChanges().map(function (arr) {
            return arr.map(function (snap) { return Object.assign(snap.payload.val(), { $key: snap.key }); });
        });
    };
    // Return a single observable item
    NoteService.prototype.getItem = function (key) {
        var itemPath = this.basePath + "/" + key;
        this.item = this.db.object(itemPath).valueChanges();
        return this.item;
    };
    // Create a bramd new item
    NoteService.prototype.createItem = function (item) {
        this.itemsRef.push(item);
    };
    // Update an exisiting item
    NoteService.prototype.updateItem = function (key, value) {
        this.itemsRef.update(key, value);
    };
    // Deletes a single item
    NoteService.prototype.deleteItem = function (key) {
        this.itemsRef.remove(key);
    };
    // Deletes the entire list of items
    NoteService.prototype.deleteAll = function () {
        this.itemsRef.remove();
    };
    NoteService.prototype.filterBy = function (category) {
        this.category.next(category);
    };
    // Default error handling for all actions
    NoteService.prototype.handleError = function (error) {
        console.log(error);
    };
    return NoteService;
}());
NoteService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], NoteService);

var _a;
//# sourceMappingURL=note.service.js.map

/***/ }),

/***/ "../../../../../src/app/notes/notes-list/notes-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.scrollmenu {\n  background-color: white;\n  overflow: auto;\n  white-space: nowrap;\n}\n.content li {\n  margin-top: 20em;\n}\nmain.column.is-8 {\n  width: 100%;\n}\n\n.card {\n  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\n  transition: 0.3s;\n  border-radius: 5px;\n}\np{\n  color: #96ACB7;\n}\nh3{\n  color: #214F4B;\n}\nul[_ngcontent-c3] {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\n}\n.container {\n  padding: 2px 16px;\n}\n\ndiv.scrollmenu button {\n  display: inline-block;\n  color: white;\n  text-align: center;\n  padding: 14px;\n  text-decoration: none;\n}\n\ndiv.scrollmenu button:hover {\n  background-color: #777;\n}\n\n::-webkit-scrollbar\n{\n  width: 0px;\n}\n::-webkit-scrollbar-track-piece\n{\n  background-color: transparent;\n  -webkit-border-radius: 6px;\n}\n\n.btn {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  overflow: hidden;\n  background: #416dea;\n  padding: 12px 12px;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  width: 12%;\n  transition: all 150ms linear;\n  text-align: center;\n  white-space: nowrap;\n  text-decoration: none !important;\n  text-transform: none;\n  text-transform: capitalize;\n\n  color: #fff;\n  border: 0 none;\n  border-radius: 4px;\n\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 1.3;\n\n  -webkit-appearance: none;\n  -moz-appearance:    none;\n  appearance:         none;\n\n  -webkit-box-pack: center;\n\n      -ms-flex-pack: center;\n\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 160px;\n          flex: 0 0 160px;\n\n  box-shadow: 2px 5px 10px var(--color-smoke);\n}\n\n.btn:hover {\n  background-color: #27ae60;\n}\n\n.btn > * {\n  position: relative;\n}\n\n.btn span {\n  display: block;\n}\n\nul {\n  list-style-type: none;\n}\n\n.btn:before {\n  content: \"\";\n\n  position: absolute;\n  top: 50%;\n  left: 50%;\n\n  display: block;\n  width: 0;\n  padding-top: 0;\n\n  border-radius: 100%;\n\n  background-color: rgba(236, 240, 241, .3);\n\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n\n.btn:active:before {\n  width: 120%;\n  padding-top: 120%;\n\n  transition: width .2s ease-out, padding-top .2s ease-out;\n}\n\n\n#category0 {\n  display: none;\n}\n\n*,\n:before,\n:after {\n  box-sizing: border-box;\n}\nform {\n  width: 320px;\n  margin: 45px auto;\n}\nform h1 {\n  font-size: 3em;\n  font-weight: 300;\n  text-align: center;\n  color: #2196F3;\n}\nform h5 {\n  text-align: center;\n  text-transform: uppercase;\n  color: #c6c6c6;\n}\nform hr.sep {\n  background: #2196F3;\n  box-shadow: none;\n  border: none;\n  height: 2px;\n  width: 25%;\n  margin: 0px auto 45px auto;\n}\nform .emoji {\n  font-size: 1.2em;\n}\n\n.group {\n  position: relative;\n  margin: 45px 0;\n}\n\ntextarea {\n  resize: none;\n}\n\ninput,\ntextarea {\n  background: none;\n  color: #c6c6c6;\n  font-size: 18px;\n  padding: 10px 10px 10px 5px;\n  display: block;\n  width: 320px;\n  border: none;\n  border-radius: 0;\n  border-bottom: 1px solid #c6c6c6;\n  margin: 0 auto;\n}\ninput:focus,\ntextarea:focus {\n  outline: none;\n}\ninput:focus ~ label, input:valid ~ label,\ntextarea:focus ~ label,\ntextarea:valid ~ label {\n  top: -14px;\n  font-size: 12px;\n  color: #2196F3;\n}\ninput:focus ~ .bar:before,\ntextarea:focus ~ .bar:before {\n  width: 320px;\n}\n\ninput[type=\"password\"] {\n  letter-spacing: 0.3em;\n}\n\nlabel {\n  color: #c6c6c6;\n  font-size: 16px;\n  font-weight: normal;\n  position: absolute;\n  pointer-events: none;\n  left: 5px;\n  top: 10px;\n  transition: 300ms ease all;\n}\n\n.bar {\n  position: relative;\n  display: block;\n  width: 320px;\n}\n.bar:before {\n  content: '';\n  height: 2px;\n  width: 0;\n  bottom: 0px;\n  position: absolute;\n  background: #2196F3;\n  transition: 300ms ease all;\n  left: 0%;\n}\n\n.btn {\n  background: #fff;\n  color: #959595;\n  border: none;\n  padding: 10px 20px;\n  border-radius: 3px;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  text-decoration: none;\n  outline: none;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);\n  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);\n  margin: 20px auto;\n}\n.btn:hover {\n  color: #8b8b8b;\n  box-shadow: 0 7px 14px rgba(0, 0, 0, 0.18), 0 5px 5px rgba(0, 0, 0, 0.12);\n}\n.btn.btn-link {\n  background: #2196F3;\n  color: #d3eafd;\n}\n.btn.btn-link:hover {\n  background: #0d8aee;\n  color: #deeffd;\n}\n.btn.btn-submit {\n  background: #2196F3;\n  color: #bce0fb;\n}\n.btn.btn-submit:hover {\n  background: #0d8aee;\n  color: #deeffd;\n}\n.btn.btn-cancel {\n  background: #eee;\n}\n.btn.btn-cancel:hover {\n  background: #e1e1e1;\n  color: #8b8b8b;\n}\n\n.btn-box {\n  text-align: center;\n  margin: 50px 0;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/notes/notes-list/notes-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <h3 style=\"text-align: center; margin-top: 5%;\">Edit your favorite news</h3>\n  <div id=\"uform\" class=\"col-md-4\" >\n      <input *ngFor = \"let saved of saved$ ; let i = index\" class=\"form-control col-md-3\" value={{saved}} type=\"text\" placeholder=\"{{saved}}\" id=\"category{{ i }}\"  name=\"name\">    \n  </div>\n  <button class=\"btn btn-primary\" (click) = update()>Update</button>\n  <ng-template #loading>Loading&hellip;</ng-template>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/notes/notes-list/notes-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__("../../../../firebase/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotesListComponent = (function () {
    function NotesListComponent(db) {
        var _this = this;
        var user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
        var uid;
        uid = user.uid;
        db.list('/users/' + uid + '/saved/' + uid).valueChanges().subscribe(function (list) {
            _this.saved$ = list;
            console.log(list);
        });
    }
    NotesListComponent.prototype.getInputVal = function (id) {
        return document.getElementById(id).value;
    };
    NotesListComponent.prototype.update = function () {
        //Get Values
        var category1 = this.getInputVal('category1');
        var category2 = this.getInputVal('category2');
        var category3 = this.getInputVal('category3');
        var category4 = this.getInputVal('category4');
        var category5 = this.getInputVal('category5');
        var user = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().currentUser;
        var uid;
        uid = user.uid;
        // this.updateF(category1, category2);
        var ref = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('/users/' + uid + '/saved');
        ref.child(uid).update({
            category1: category1,
            category2: category2,
            category3: category3,
            category4: category4,
            category5: category5
        });
        console.log(ref);
    };
    return NotesListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChildren */])('courseList'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* QueryList */]) === "function" && _a || Object)
], NotesListComponent.prototype, "courseList", void 0);
NotesListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'notes-list',
        template: __webpack_require__("../../../../../src/app/notes/notes-list/notes-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/notes/notes-list/notes-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _b || Object])
], NotesListComponent);

var _a, _b;
//# sourceMappingURL=notes-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/notes/notes.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__note_service__ = __webpack_require__("../../../../../src/app/notes/note.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notes_list_notes_list_component__ = __webpack_require__("../../../../../src/app/notes/notes-list/notes-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_sharebuttons__ = __webpack_require__("../../../../ngx-sharebuttons/ngx-sharebuttons.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var NotesModule = (function () {
    function NotesModule() {
    }
    return NotesModule;
}());
NotesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_7_ngx_sharebuttons__["a" /* ShareButtonsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabaseModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__notes_list_notes_list_component__["a" /* NotesListComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__note_service__["a" /* NoteService */]
        ]
    })
], NotesModule);

//# sourceMappingURL=notes.module.js.map

/***/ }),

/***/ "../../../../../src/app/profile/shared/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profile_service__ = __webpack_require__("../../../../../src/app/profile/shared/profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/profile/user-profile/user-profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProfileModule = (function () {
    function ProfileModule() {
    }
    return ProfileModule;
}());
ProfileModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["b" /* AngularFireDatabaseModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__user_profile_user_profile_component__["a" /* UserProfileComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__profile_service__["a" /* ItemService */]
        ]
    })
], ProfileModule);

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ "../../../../../src/app/profile/shared/profile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__("../../../../angularfire2/database/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemService = (function () {
    function ItemService(db) {
        this.db = db;
        this.basePath = '/items';
        this.itemsRef = db.list('/items');
    }
    // Return an observable list with optional query
    // You will usually call this from OnInit in a component
    ItemService.prototype.getItemsList = function (query) {
        // const itemsRef = afDb.list('/items')
        // return this.itemsRef.valueChanges()
        return this.itemsRef.snapshotChanges().map(function (arr) {
            return arr.map(function (snap) { return Object.assign(snap.payload.val(), { $key: snap.key }); });
        });
    };
    // Return a single observable item
    ItemService.prototype.getItem = function (key) {
        var itemPath = this.basePath + "/" + key;
        this.item = this.db.object(itemPath).valueChanges();
        return this.item;
    };
    // Create a bramd new item
    ItemService.prototype.createItem = function (item) {
        this.itemsRef.push(item);
    };
    // Update an exisiting item
    ItemService.prototype.updateItem = function (key, value) {
        this.itemsRef.update(key, value);
    };
    // Deletes a single item
    ItemService.prototype.deleteItem = function (key) {
        this.itemsRef.remove(key);
    };
    // Deletes the entire list of items
    ItemService.prototype.deleteAll = function () {
        this.itemsRef.remove();
    };
    // Default error handling for all actions
    ItemService.prototype.handleError = function (error) {
        console.log(error);
    };
    return ItemService;
}());
ItemService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _a || Object])
], ItemService);

var _a;
//# sourceMappingURL=profile.service.js.map

/***/ }),

/***/ "../../../../../src/app/profile/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n    <!-- User logged in -->\n    <div  *ngIf=\"auth.currentUser\">\n        <h3 style=\"margin: 2% 0 2% 0;\">Howdy, {{ auth.currentUserDisplayName }}</h3>\n        <img class=\"card-img-top\" [src]=\"auth.currentUser.photoURL || 'https://api.adorable.io/avatars/109/fire.png'\" width=50%>\n    </div>\n\n\n\n    <!-- User NOT logged in -->\n    <div style=\"margin: 2% 0 2% 0;\" class=\"box\" *ngIf=\"!auth.currentUser\">\n        <h3>Howdy, {{ auth.currentUserDisplayName }}</h3>\n        <p class=\"card-text\">Login to get started...</p>\n        <button class=\"button\" routerLink=\"/login\">Login</button>\n\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/profile/user-profile/user-profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-img-top {\n  border-radius: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProfileComponent = (function () {
    function UserProfileComponent(auth) {
        this.auth = auth;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent.prototype.logout = function () {
        this.auth.signOut();
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user-profile',
        template: __webpack_require__("../../../../../src/app/profile/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/user-profile/user-profile.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], UserProfileComponent);

var _a;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ui_loading_spinner_loading_spinner_component__ = __webpack_require__("../../../../../src/app/ui/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__speech_speech_service__ = __webpack_require__("../../../../../src/app/shared/speech/speech.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__ui_loading_spinner_loading_spinner_component__["a" /* LoadingSpinnerComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__ui_loading_spinner_loading_spinner_component__["a" /* LoadingSpinnerComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__speech_speech_service__["a" /* SpeechService */]
        ],
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/app/shared/speech/speech.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeechService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SpeechService = (function () {
    function SpeechService(zone) {
        this.zone = zone;
    }
    SpeechService.prototype.speak = function (text) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            var _a = window, speechSynthesis = _a.speechSynthesis, SpeechSynthesisUtterance = _a.SpeechSynthesisUtterance;
            _this.speechSynthesis = speechSynthesis;
            var utterText = new SpeechSynthesisUtterance(text);
            utterText.onend = function (e) {
                observer.next(e);
                observer.complete();
            };
            _this.speechSynthesis.speak(utterText);
        });
    };
    SpeechService.prototype.record = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].create(function (observer) {
            var webkitSpeechRecognition = window.webkitSpeechRecognition;
            var speechRecognition = new webkitSpeechRecognition();
            speechRecognition.onresult = function (event) {
                observer.next(event);
                observer.complete();
            };
            speechRecognition.start();
            return function () {
                speechRecognition.stop();
            };
        });
    };
    SpeechService.prototype.stop = function () {
        var webkitSpeechRecognition = window.webkitSpeechRecognition;
        var speechRecognition = new webkitSpeechRecognition();
        speechRecognition.stop();
        console.log(123);
    };
    return SpeechService;
}());
SpeechService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* NgZone */]) === "function" && _a || Object])
], SpeechService);

var _a;
//# sourceMappingURL=speech.service.js.map

/***/ }),

/***/ "../../../../../src/app/ui/footer-nav/footer-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    Angular + Firebase PWA Starter App <br>\n    Build me from scratch at <a href=\"https://angularfirebase.com\">AngularFirebase.com</a><br>\n    <br>Open Source | MIT License | Created by <a href=\"https://jeffdelaney.me\">Jeff Delaney</a>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/ui/footer-nav/footer-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/footer-nav/footer-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterNavComponent = (function () {
    function FooterNavComponent() {
    }
    FooterNavComponent.prototype.ngOnInit = function () {
    };
    return FooterNavComponent;
}());
FooterNavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'footer-nav',
        template: __webpack_require__("../../../../../src/app/ui/footer-nav/footer-nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui/footer-nav/footer-nav.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterNavComponent);

//# sourceMappingURL=footer-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/loading-spinner/loading-spinner.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\n  <div class=\"rect1\"></div>\n  <div class=\"rect2\"></div>\n  <div class=\"rect3\"></div>\n  <div class=\"rect4\"></div>\n  <div class=\"rect5\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui/loading-spinner/loading-spinner.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".spinner {\n  margin: 100px auto;\n  width: 50px;\n  height: 40px;\n  text-align: center;\n  font-size: 10px; }\n\n.spinner > div {\n  background-color: #333;\n  height: 100%;\n  width: 6px;\n  display: inline-block;\n  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n  animation: sk-stretchdelay 1.2s infinite ease-in-out; }\n\n.spinner .rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s; }\n\n.spinner .rect3 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s; }\n\n.spinner .rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s; }\n\n.spinner .rect5 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s; }\n\n@-webkit-keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    -webkit-transform: scaleY(1); } }\n\n@keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4); }\n  20% {\n    transform: scaleY(1);\n    -webkit-transform: scaleY(1); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/loading-spinner/loading-spinner.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingSpinnerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingSpinnerComponent = (function () {
    function LoadingSpinnerComponent() {
    }
    LoadingSpinnerComponent.prototype.ngOnInit = function () {
    };
    return LoadingSpinnerComponent;
}());
LoadingSpinnerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'loading-spinner',
        template: __webpack_require__("../../../../../src/app/ui/loading-spinner/loading-spinner.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui/loading-spinner/loading-spinner.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LoadingSpinnerComponent);

//# sourceMappingURL=loading-spinner.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/readme-page/readme-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 style=\"margin: 2% 0 2% 0;\">Howdy, {{ auth.currentUserDisplayName }}</h2>\n<p>I am a Progressive Web App (PWA) built with Angular and Firebase.</p>\n\n\n <p>Voice settings are here</p>\n"

/***/ }),

/***/ "../../../../../src/app/ui/readme-page/readme-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/readme-page/readme-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReadmePageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReadmePageComponent = (function () {
    function ReadmePageComponent(auth) {
        this.auth = auth;
    }
    ReadmePageComponent.prototype.ngOnInit = function () {
    };
    return ReadmePageComponent;
}());
ReadmePageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'readme-page',
        template: __webpack_require__("../../../../../src/app/ui/readme-page/readme-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui/readme-page/readme-page.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], ReadmePageComponent);

var _a;
//# sourceMappingURL=readme-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/shared/ui.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UiModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__readme_page_readme_page_component__ = __webpack_require__("../../../../../src/app/ui/readme-page/readme-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_login_user_login_component__ = __webpack_require__("../../../../../src/app/ui/user-login/user-login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/ui/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_form_user_form_component__ = __webpack_require__("../../../../../src/app/ui/user-form/user-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__top_nav_top_nav_component__ = __webpack_require__("../../../../../src/app/ui/top-nav/top-nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__footer_nav_footer_nav_component__ = __webpack_require__("../../../../../src/app/ui/footer-nav/footer-nav.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var UiModule = (function () {
    function UiModule() {
    }
    return UiModule;
}());
UiModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__user_login_user_login_component__["a" /* UserLoginComponent */],
            __WEBPACK_IMPORTED_MODULE_8__user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_10__top_nav_top_nav_component__["a" /* TopNavComponent */],
            __WEBPACK_IMPORTED_MODULE_11__footer_nav_footer_nav_component__["a" /* FooterNavComponent */],
            __WEBPACK_IMPORTED_MODULE_9__user_form_user_form_component__["a" /* UserFormComponent */],
            __WEBPACK_IMPORTED_MODULE_6__readme_page_readme_page_component__["a" /* ReadmePageComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_10__top_nav_top_nav_component__["a" /* TopNavComponent */],
            __WEBPACK_IMPORTED_MODULE_11__footer_nav_footer_nav_component__["a" /* FooterNavComponent */],
            __WEBPACK_IMPORTED_MODULE_8__user_profile_user_profile_component__["a" /* UserProfileComponent */],
        ]
    })
], UiModule);

//# sourceMappingURL=ui.module.js.map

/***/ }),

/***/ "../../../../../src/app/ui/top-nav/top-nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bot\">\n  <ul id=\"menu\">\n    <div *ngIf=\"auth.currentUser\">\n      <a>\n          <img class=\"card-img-top\" [src]=\"auth.currentUser.photoURL || 'https://api.adorable.io/avatars/109/fire.png'\"\n         >\n        {{ auth.currentUserDisplayName }}</a>\n      <a routerLink=\"/items\">\n        <li>News</li>\n      </a>\n      <a routerLink=\"/notes\">\n        <li>Watchlist</li>\n      </a>\n      <a (click)=\"logout()\">\n        <li>Logout</li>\n      </a>\n    </div>\n    <div *ngIf=\"!auth.currentUser\">\n      <a routerLink=\"/login\">\n        <li>Login</li>\n      </a>\n    </div>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/ui/top-nav/top-nav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bot {\n  height: 60px;\n  background: #55595d;\n  position: fixed;\n  z-index: 20;\n  width: 100%;\n  bottom: 0; }\n\n.card-img-top {\n  border-radius: 50%;\n  max-width: 20px; }\n\nnav {\n  top: 0;\n  padding: 0 1%;\n  padding-right: 60px; }\n  nav .nav-item {\n    color: gray;\n    font-weight: normal;\n    transition: color 0.3s ease; }\n    nav .nav-item:hover {\n      font-color: #1c90f3; }\n\na:hover {\n  color: tomato; }\n\n#menuToggle {\n  display: block;\n  position: fixed;\n  top: 10px;\n  z-index: 1;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n   -ms-user-select: none;\n       user-select: none; }\n\n#menuToggle input {\n  display: block;\n  width: 40px;\n  height: 32px;\n  position: fixed;\n  top: 10px;\n  cursor: pointer;\n  opacity: 0;\n  /* hide this */\n  z-index: 2;\n  /* and place it over the hamburger */\n  -webkit-touch-callout: none; }\n\n/*\n * Just a quick hamburger\n */\n#menuToggle span {\n  display: block;\n  width: 33px;\n  height: 2px;\n  margin-bottom: 5px;\n  position: relative;\n  background: #818b96;\n  z-index: 1;\n  -webkit-transform-origin: 4px 0px;\n          transform-origin: 4px 0px;\n  transition: background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease, -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;\n  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease, -webkit-transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1); }\n\n#menuToggle span:first-child {\n  -webkit-transform-origin: 0% 0%;\n          transform-origin: 0% 0%; }\n\n#menuToggle span:nth-last-child(2) {\n  -webkit-transform-origin: 0% 100%;\n          transform-origin: 0% 100%; }\n\n/*\n * Transform all the slices of hamburger\n * into a crossmark.\n */\n#menuToggle input:checked ~ span {\n  opacity: 1;\n  -webkit-transform: rotate(45deg) translate(-2px, -1px);\n          transform: rotate(45deg) translate(-2px, -1px);\n  background: #232323; }\n\n/*\n * But let's hide the middle one.\n */\n#menuToggle input:checked ~ span:nth-last-child(3) {\n  opacity: 0;\n  -webkit-transform: rotate(0deg) scale(0.2, 0.2);\n          transform: rotate(0deg) scale(0.2, 0.2); }\n\n/*\n * Ohyeah and the last one should go the other direction\n */\n#menuToggle input:checked ~ span:nth-last-child(2) {\n  -webkit-transform: rotate(-45deg) translate(0, -1px);\n          transform: rotate(-45deg) translate(0, -1px); }\n\n/*\n * Make this absolute positioned\n * at the top left of the screen\n */\n#menu {\n  width: 100%;\n  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);\n  background: white;\n  height: 100%; }\n\n#menu > div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n\n#menu a {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n\n#menu li {\n  padding: 10px 0;\n  font-size: 22px; }\n\n/*\n * And let's slide it in from the left\n */\n#menuToggle input:checked ~ ul {\n  -webkit-transform: none;\n          transform: none; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  /* make it look decent enough */\n  background: #232323;\n  color: #cdcdcd;\n  font-family: \"Avenir Next\", \"Avenir\", sans-serif; }\n\na {\n  text-decoration: none;\n  color: #232323;\n  transition: color 0.3s ease; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/top-nav/top-nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TopNavComponent = (function () {
    function TopNavComponent(auth) {
        this.auth = auth;
        this.show = false;
    }
    TopNavComponent.prototype.toggleCollapse = function () {
        this.show = !this.show;
    };
    TopNavComponent.prototype.logout = function () {
        this.auth.signOut();
    };
    return TopNavComponent;
}());
TopNavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'top-nav',
        template: __webpack_require__("../../../../../src/app/ui/top-nav/top-nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui/top-nav/top-nav.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], TopNavComponent);

var _a;
//# sourceMappingURL=top-nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/user-form/user-form.component.html":
/***/ (function(module, exports) {

module.exports = "\n<form [formGroup]=\"userForm\"  *ngIf=\"newUser\"  (ngSubmit)=\"signup()\">\n\n\n</form>\n\n\n<form [formGroup]=\"userForm\"  *ngIf=\"!newUser\"  (ngSubmit)=\"login()\">\n\n  <h3>Existing User Login</h3>\n  <p class=\"btn button is-small\" (click)=\"toggleForm()\">New User?</p>\n  <hr>\n\n  <label for=\"email\">Email</label>\n  <input type=\"email\" id=\"email\" class=\"input\"\n         formControlName=\"email\" required >\n\n  <div *ngIf=\"formErrors.email\" class=\"help is-danger\">\n    {{ formErrors.email }}\n  </div>\n\n  <label for=\"password\">Password</label>\n  <input type=\"password\" id=\"password\" class=\"input\"\n         formControlName=\"password\" required >\n\n  <div *ngIf=\"formErrors.password\" class=\"help is-danger\">\n    {{ formErrors.password }}\n  </div>\n\n  <button type=\"submit\" class=\"button\" [disabled]=\"!userForm.valid\">Submit</button>\n\n  <span *ngIf=\"userForm.valid\" class=\"help is-success\">Form Looks Valid</span>\n\n  <a *ngIf=\"!passReset && userForm.controls.email.valid\" class=\"help is-info\" (click)=\"resetPassword()\">Reset Password for {{userForm.value.email}}?</a>\n  <p *ngIf=\"passReset\" class=\"help is-info\">Reset requested. Check your email instructions.</p>\n\n\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/ui/user-form/user-form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/user-form/user-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserFormComponent = (function () {
    function UserFormComponent(fb, auth) {
        this.fb = fb;
        this.auth = auth;
        this.newUser = true; // to toggle login or signup form
        this.passReset = false; // set to true when password reset is triggered
        this.formErrors = {
            'email': '',
            'password': ''
        };
        this.validationMessages = {
            'email': {
                'required': 'Email is required.',
                'email': 'Email must be a valid email'
            },
            'password': {
                'required': 'Password is required.',
                'pattern': 'Password must be include at one letter and one number.',
                'minlength': 'Password must be at least 4 characters long.',
                'maxlength': 'Password cannot be more than 40 characters long.',
            }
        };
    }
    UserFormComponent.prototype.ngOnInit = function () {
        this.buildForm();
    };
    UserFormComponent.prototype.toggleForm = function () {
        this.newUser = !this.newUser;
    };
    UserFormComponent.prototype.signup = function () {
        this.auth.emailSignUp(this.userForm.value['email'], this.userForm.value['password']);
    };
    UserFormComponent.prototype.login = function () {
        this.auth.emailLogin(this.userForm.value['email'], this.userForm.value['password']);
    };
    UserFormComponent.prototype.resetPassword = function () {
        var _this = this;
        this.auth.resetPassword(this.userForm.value['email'])
            .then(function () { return _this.passReset = true; });
    };
    UserFormComponent.prototype.buildForm = function () {
        var _this = this;
        this.userForm = this.fb.group({
            'email': ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].email
                ]
            ],
            'password': ['', [
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].minLength(6),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* Validators */].maxLength(25)
                ]
            ],
        });
        this.userForm.valueChanges.subscribe(function (data) { return _this.onValueChanged(data); });
        this.onValueChanged(); // reset validation messages
    };
    // Updates validation state on form changes.
    UserFormComponent.prototype.onValueChanged = function (data) {
        if (!this.userForm) {
            return;
        }
        var form = this.userForm;
        for (var field in this.formErrors) {
            if (Object.prototype.hasOwnProperty.call(this.formErrors, field)) {
                // clear previous error message (if any)
                this.formErrors[field] = '';
                var control = form.get(field);
                if (control && control.dirty && !control.valid) {
                    var messages = this.validationMessages[field];
                    for (var key in control.errors) {
                        if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                            this.formErrors[field] += messages[key] + ' ';
                        }
                    }
                }
            }
        }
    };
    return UserFormComponent;
}());
UserFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user-form',
        template: __webpack_require__("../../../../../src/app/ui/user-form/user-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui/user-form/user-form.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], UserFormComponent);

var _a, _b;
//# sourceMappingURL=user-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/user-login/user-login.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!auth.currentUser; else login\">\n\n  <h3 style=\"margin: 2% 0 2% 0;\">Social Login</h3>\n\n\n    <button (click)=\"signInWithGoogle()\"  style=\"background-color: #dd4b39; color: white\"  class=\"button button-info\">\n      <i class=\"fa fa-google-plus fa-lg fa-fw\"></i> Connect Google\n    </button>\n\n    <button style=\"background-color: #24292E; color: white\" (click)=\"signInWithGithub()\" class=\"button button-info\">\n      <i class=\"fa fa-github fa-lg fa-fw\"></i> Connect GitHub\n    </button>\n\n    <button style=\"background-color: #3B5998; color: white\" (click)=\"signInWithFacebook()\" class=\"button button-info\">\n      <i class=\"fa fa-facebook fa-lg fa-fw\"></i> Connect Facebook\n    </button>\n\n    <button style=\"background-color: #24292E; color: white\" (click)=\"signInWithTwitter()\" class=\"button button-info\" disabled>\n      <i class=\"fa fa-twitter fa-lg fa-fw\"></i> Connect Twitter\n    </button>\n\n    <hr>\n\n\n    <user-form></user-form>\n\n</div>\n\n\n\n\n<ng-template #alreadyLoggedIn>\n  <p style=\"margin-top: 2%;\" class=\"text-success\">\n    Already logged in!\n  </p>\n</ng-template>\n"

/***/ }),

/***/ "../../../../../src/app/ui/user-login/user-login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-facebook {\n  backround-color: #3B5998; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/user-login/user-login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserLoginComponent = (function () {
    function UserLoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    UserLoginComponent.prototype.ngOnInit = function () {
    };
    /// Social Login
    UserLoginComponent.prototype.signInWithGithub = function () {
        var _this = this;
        this.auth.githubLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    UserLoginComponent.prototype.signInWithGoogle = function () {
        var _this = this;
        this.auth.googleLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    UserLoginComponent.prototype.signInWithFacebook = function () {
        var _this = this;
        this.auth.facebookLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    UserLoginComponent.prototype.signInWithTwitter = function () {
        var _this = this;
        this.auth.twitterLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    /// Anonymous Sign In
    UserLoginComponent.prototype.signInAnonymously = function () {
        var _this = this;
        this.auth.anonymousLogin()
            .then(function () { return _this.afterSignIn(); });
    };
    /// Shared
    UserLoginComponent.prototype.afterSignIn = function () {
        // Do after login stuff here, such router redirects, toast messages, etc.
        this.router.navigate(['/items']);
    };
    return UserLoginComponent;
}());
UserLoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user-login',
        template: __webpack_require__("../../../../../src/app/ui/user-login/user-login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui/user-login/user-login.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], UserLoginComponent);

var _a, _b;
//# sourceMappingURL=user-login.component.js.map

/***/ }),

/***/ "../../../../../src/app/ui/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n    <!-- User logged in -->\n    <div class=\"box\" *ngIf=\"auth.currentUser\">\n        <h3>Howdy, {{ auth.currentUserDisplayName }}</h3>\n        <img class=\"card-img-top\" [src]=\"auth.currentUser.photoURL || 'https://api.adorable.io/avatars/109/fire.png'\" width=60%>\n        <button class=\"button\" (click)=\"logout()\">Logout</button>\n\n   </div>\n\n    <!-- User NOT logged in -->\n    <div class=\"box\" *ngIf=\"!auth.currentUser\">\n        <h3>Howdy, {{ auth.currentUserDisplayName }}</h3>\n        <p class=\"card-text\">Login to get started...</p>\n        <button class=\"button\" routerLink=\"/login\">Login</button>\n\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/ui/user-profile/user-profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/ui/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_auth_service__ = __webpack_require__("../../../../../src/app/core/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserProfileComponent = (function () {
    function UserProfileComponent(auth) {
        this.auth = auth;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent.prototype.logout = function () {
        this.auth.signOut();
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'user-profile',
        template: __webpack_require__("../../../../../src/app/ui/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/ui/user-profile/user-profile.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], UserProfileComponent);

var _a;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyBQbFUoyb1XkXo0NAiNAgtQcjEBOQMsBHQ",
        authDomain: "licenta-rss.firebaseapp.com",
        databaseURL: "https://licenta-rss.firebaseio.com",
        projectId: "licenta-rss",
        storageBucket: "licenta-rss.appspot.com",
        messagingSenderId: "73085306149"
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map