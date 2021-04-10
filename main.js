(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: StateGuard, MAIN_ROUTES, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateGuard", function() { return StateGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_ROUTES", function() { return MAIN_ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_state_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.state.service */ "./src/app/app.state.service.ts");






class StateGuard {
    constructor(router, appState) {
        this.router = router;
        this.appState = appState;
    }
    canActivate(route) {
        //ask if he really wants to route.
        this.appState.accessRoute(route.url.map(item => item.path).join('/'));
        return true;
    }
}
StateGuard.ɵfac = function StateGuard_Factory(t) { return new (t || StateGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_state_service__WEBPACK_IMPORTED_MODULE_2__["AppStateService"])); };
StateGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StateGuard, factory: StateGuard.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StateGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: "root" }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _app_state_service__WEBPACK_IMPORTED_MODULE_2__["AppStateService"] }]; }, null); })();
const MAIN_ROUTES = [
    { path: '', data: { title: '' }, redirectTo: 'home', pathMatch: "full" },
    { path: 'home', canActivate: [StateGuard], data: { title: 'Home' }, loadChildren: () => Promise.all(/*! import() | app-home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("app-home-home-module")]).then(__webpack_require__.bind(null, /*! ./../app/home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomeModule) },
    { path: 'about-me', canActivate: [StateGuard], data: { title: 'About-me' }, loadChildren: () => Promise.all(/*! import() | app-aboutme-aboutme-module */[__webpack_require__.e("common"), __webpack_require__.e("app-aboutme-aboutme-module")]).then(__webpack_require__.bind(null, /*! ./../app/aboutme/aboutme.module */ "./src/app/aboutme/aboutme.module.ts")).then(m => m.AboutmeModule) },
    { path: 'experience', canActivate: [StateGuard], data: { title: 'Experience' }, loadChildren: () => Promise.all(/*! import() | app-exp-exp-module */[__webpack_require__.e("common"), __webpack_require__.e("app-exp-exp-module")]).then(__webpack_require__.bind(null, /*! ./../app//exp/exp.module */ "./src/app/exp/exp.module.ts")).then(m => m.ExpModule) },
    { path: 'portfolio', canActivate: [StateGuard], data: { title: 'Portfolio' }, loadChildren: () => Promise.all(/*! import() | app-portfolio-portfolio-module */[__webpack_require__.e("common"), __webpack_require__.e("app-portfolio-portfolio-module")]).then(__webpack_require__.bind(null, /*! ./../app//portfolio/portfolio.module */ "./src/app/portfolio/portfolio.module.ts")).then(m => m.PortfolioModule) },
    { path: 'post', canActivate: [StateGuard], data: { title: 'Post' }, loadChildren: () => Promise.all(/*! import() | app-mana-mana-module */[__webpack_require__.e("common"), __webpack_require__.e("app-mana-mana-module")]).then(__webpack_require__.bind(null, /*! ./../app/mana/mana.module */ "./src/app/mana/mana.module.ts")).then(m => m.ManaModule) }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(MAIN_ROUTES)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(MAIN_ROUTES)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.state.service */ "./src/app/app.state.service.ts");
/* harmony import */ var _share_header_sysnav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../share/header/sysnav.component */ "./src/share/header/sysnav.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








class AppComponent {
    constructor(router, route, appState, cdRef) {
        this.router = router;
        this.route = route;
        this.appState = appState;
        this.cdRef = cdRef;
        this.isPostScreen = false;
        this.bgStyle = {};
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
        this.calculateWH();
        const self = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500))
            .subscribe((event) => {
            this.calculateWH();
        });
        this.appState.getCurrentUrl$.subscribe(link => this.checkIsPostScr(link));
    }
    calculateWH() {
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
        if (this.innerWidth < 1230)
            this.innerWidth = 1230;
        if (this.innerHeight < 683)
            this.innerHeight = 683;
        this.setWH();
    }
    setWH() {
        // this.bgStyle = {};
        let width = this.innerWidth - 100;
        let height = (this.innerWidth / 1.8) - 100;
        if (height > this.innerHeight) {
            width = (this.innerHeight * 1.8) - 100;
            height = this.innerHeight - 100;
        }
        this.containerH = height;
        this.containerW = width;
        this.bgStyle['width.px'] = this.containerW;
        if (!this.isPostScreen) {
            this.bgStyle['height.px'] = this.containerH;
            this.bgStyle['min-height.px'] = this.containerH;
        }
    }
    ngOnInit() {
    }
    navigatePage(pageUrl) {
        this.activeLink = pageUrl;
        this.router.navigateByUrl(pageUrl);
    }
    // This fucntion born cause the <route-outlet> is dynamic from url, if check from NavigateEvent => make conflict
    checkIsPostScr(link) {
        const self = this;
        self.isPostScreen = false;
        if (/home/.test(link)) {
            setTimeout(() => {
                if (this.router.url === '/home') {
                    self.navigatePage("/about-me");
                }
            }, 2000);
        }
        else if (/post/.test(link)) {
            self.isPostScreen = true;
        }
        self.calculateWH();
        console.log(self.isPostScreen);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_state_service__WEBPACK_IMPORTED_MODULE_4__["AppStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], inputs: { trigger: "trigger" }, decls: 8, vars: 2, consts: [[1, "h-full"], ["id", "container", 1, "back-ground", "mx-auto", 3, "ngStyle"], [1, "bg-white", "out-box"], [3, "ngClass"], [1, "overflow-hidden", "w-full", "h-full", "relative"], [1, "main-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-sys-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", ctx.bgStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", !ctx.isPostScreen ? "inner-box" : "");
    } }, directives: [_share_header_sysnav_component__WEBPACK_IMPORTED_MODULE_5__["SysNavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".main-container[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: rgba(235, 243, 249, 0.5);\n  top: 50%;\n  bottom: -50%;\n  left: -9%;\n  right: 0;\n  z-index: 1;\n  transform: rotate(152.4deg);\n  width: 130%;\n}\n\n.out-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  box-shadow: 18px 21px 32px rgba(0, 0, 0, 0.4);\n}\n\n  #all-about-me {\n  margin-top: auto;\n  font-size: 48px;\n  line-height: 1;\n}\n\n  #all-about-me * {\n  font-size: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0Usa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBTEY7O0FBUUE7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7QUFORjs7QUFTQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUlBLGNBQUE7QUFURjs7QUFNRTtFQUNFLGVBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibGFjay10ZXh0LWNvbG9yOiAjMmQzMDM0O1xuXG4kZ3JlZW4tdGV4dC1jb2xvcjogIzAwNzE3YjtcblxuJGltYWdlOiAjMDA3MTdiO1xuXG4ubWFpbi1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzUsIDI0MywgMjQ5LCAwLjUpO1xuICB0b3A6IDUwJTtcbiAgYm90dG9tOiAtNTAlO1xuICBsZWZ0OiAtOSU7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgxNTIuNGRlZyk7XG4gIHdpZHRoOiAxMzAlO1xufVxuXG4ub3V0LWJveCB7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3gtc2hhZG93OiAxOHB4IDIxcHggMzJweCByZ2IoMCAwIDAgLyA0MCUpO1xufVxuXG46Om5nLWRlZXAgI2FsbC1hYm91dC1tZSB7XG4gIG1hcmdpbi10b3A6IGF1dG87XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgKiB7XG4gICAgZm9udC1zaXplOiA0OHB4O1xuICB9XG4gIGxpbmUtaGVpZ2h0OiAxO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _app_state_service__WEBPACK_IMPORTED_MODULE_4__["AppStateService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { trigger: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _share_header_sysnav_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../share/header/sysnav.module */ "./src/share/header/sysnav.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _app_state_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.state.service */ "./src/app/app.state.service.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabNav"], _app_state_service__WEBPACK_IMPORTED_MODULE_9__["AppStateService"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyLibModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
            _share_header_sysnav_module__WEBPACK_IMPORTED_MODULE_7__["SysNavModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyLibModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
        _share_header_sysnav_module__WEBPACK_IMPORTED_MODULE_7__["SysNavModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyLibModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
                    _share_header_sysnav_module__WEBPACK_IMPORTED_MODULE_7__["SysNavModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]
                ],
                providers: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabNav"], _app_state_service__WEBPACK_IMPORTED_MODULE_9__["AppStateService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.state.service.ts":
/*!**************************************!*\
  !*** ./src/app/app.state.service.ts ***!
  \**************************************/
/*! exports provided: AppStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStateService", function() { return AppStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/BehaviorSubject */ "./node_modules/rxjs/internal/BehaviorSubject.js");
/* harmony import */ var rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppStateService {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.state = new rxjs_internal_BehaviorSubject__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.state.next({ currentUrl: router.url });
    }
    accessRoute(link) {
        if (!link)
            return;
        console.log('link', link);
        if (link) {
            this.state.next({ currentUrl: link });
        }
        else {
            this.state.next({ currentUrl: this.router.url });
        }
    }
    get getCurrentUrl$() {
        return this.state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(stateModel => stateModel.currentUrl));
    }
}
AppStateService.ɵfac = function AppStateService_Factory(t) { return new (t || AppStateService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
AppStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppStateService, factory: AppStateService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppStateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: "root" }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/share/app.constants.ts":
/*!************************************!*\
  !*** ./src/share/app.constants.ts ***!
  \************************************/
/*! exports provided: MAIN_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAIN_ROUTES", function() { return MAIN_ROUTES; });
const MAIN_ROUTES = [
    { path: 'home', data: { title: 'Home' } },
    { path: 'about-me', data: { title: 'About-me' } },
    { path: 'experience', data: { title: 'Experience' } },
    { path: 'portfolio', data: { title: 'Portfolio' } }
];


/***/ }),

/***/ "./src/share/header/sysnav.component.ts":
/*!**********************************************!*\
  !*** ./src/share/header/sysnav.component.ts ***!
  \**********************************************/
/*! exports provided: SysNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysNavComponent", function() { return SysNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.constants */ "./src/share/app.constants.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_app_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.state.service */ "./src/app/app.state.service.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function SysNavComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SysNavComponent_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const link_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r2.activeLink = link_r1.path; return ctx_r2.navToScreen(link_r1.path); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", link_r1.path)("active", ctx_r0.activeLink == link_r1.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", link_r1.data.title, " ");
} }
class SysNavComponent {
    constructor(router, appState) {
        this.router = router;
        this.appState = appState;
        this.links$ = _app_constants__WEBPACK_IMPORTED_MODULE_2__["MAIN_ROUTES"];
        this.switchTab = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.appState.getCurrentUrl$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(url => url !== this.activeLink)).subscribe(url => {
            this.activeLink = url;
        });
    }
    navToScreen(link) {
        this.router.navigateByUrl(link);
    }
}
SysNavComponent.ɵfac = function SysNavComponent_Factory(t) { return new (t || SysNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_app_state_service__WEBPACK_IMPORTED_MODULE_4__["AppStateService"])); };
SysNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SysNavComponent, selectors: [["app-sys-nav"]], outputs: { switchTab: "switchTab" }, decls: 2, vars: 2, consts: [["mat-tab-nav-bar", "", "mat-align-tabs", "center", "animationDuration", "2000ms", 3, "backgroundColor"], ["mat-tab-link", "", 3, "routerLink", "active", "click", 4, "ngFor", "ngForOf"], ["mat-tab-link", "", 3, "routerLink", "active", "click"]], template: function SysNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SysNavComponent_a_1_Template, 2, 3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("backgroundColor", "white");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.links$);
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabNav"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabLink"]], styles: ["mat-ink-bar {\n  background-color: #00717b !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zaGFyZS9oZWFkZXIvc3lzbmF2LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0Usb0NBQUE7QUFMRiIsImZpbGUiOiJzcmMvc2hhcmUvaGVhZGVyL3N5c25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibGFjay10ZXh0LWNvbG9yOiAjMmQzMDM0O1xuXG4kZ3JlZW4tdGV4dC1jb2xvcjogIzAwNzE3YjtcblxuJGltYWdlOiAjMDA3MTdiO1xuXG46Om5nLWRlZXAgbWF0LWluay1iYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW4tdGV4dC1jb2xvciAhaW1wb3J0YW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SysNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sys-nav',
                templateUrl: 'sysnav.component.html',
                styleUrls: ['sysnav.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_app_state_service__WEBPACK_IMPORTED_MODULE_4__["AppStateService"] }]; }, { switchTab: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/share/header/sysnav.module.ts":
/*!*******************************************!*\
  !*** ./src/share/header/sysnav.module.ts ***!
  \*******************************************/
/*! exports provided: SysNavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SysNavModule", function() { return SysNavModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sysnav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sysnav.component */ "./src/share/header/sysnav.component.ts");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
// Angular Imports

// This Module's Components




class SysNavModule {
}
SysNavModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SysNavModule });
SysNavModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SysNavModule_Factory(t) { return new (t || SysNavModule)(); }, providers: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabNav"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SysNavModule, { declarations: [_sysnav_component__WEBPACK_IMPORTED_MODULE_1__["SysNavComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"]], exports: [_sysnav_component__WEBPACK_IMPORTED_MODULE_1__["SysNavComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SysNavModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"]
                ],
                declarations: [
                    _sysnav_component__WEBPACK_IMPORTED_MODULE_1__["SysNavComponent"]
                ],
                exports: [
                    _sysnav_component__WEBPACK_IMPORTED_MODULE_1__["SysNavComponent"],
                ],
                providers: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_2__["MatTabNav"]]
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular\portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map