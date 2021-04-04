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
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





const routes = [
    {
        path: '',
        component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        children: [
            { path: '', redirectTo: 'home', pathMatch: "full" },
            { path: 'home', loadChildren: () => __webpack_require__.e(/*! import() | home-home-module */ "home-home-module").then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then(m => m.HomeModule) },
            { path: 'about-me', loadChildren: () => Promise.all(/*! import() | aboutme-aboutme-module */[__webpack_require__.e("common"), __webpack_require__.e("aboutme-aboutme-module")]).then(__webpack_require__.bind(null, /*! ./aboutme/aboutme.module */ "./src/app/aboutme/aboutme.module.ts")).then(m => m.AboutmeModule) },
            { path: 'experience', loadChildren: () => Promise.all(/*! import() | exp-exp-module */[__webpack_require__.e("common"), __webpack_require__.e("exp-exp-module")]).then(__webpack_require__.bind(null, /*! ./exp/exp.module */ "./src/app/exp/exp.module.ts")).then(m => m.ExpModule) },
            { path: 'mana', loadChildren: () => __webpack_require__.e(/*! import() | mana-mana-module */ "mana-mana-module").then(__webpack_require__.bind(null, /*! ./mana/mana.module */ "./src/app/mana/mana.module.ts")).then(m => m.ManaModule) },
            { path: 'portfolio', loadChildren: () => Promise.all(/*! import() | portfolio-portfolio-module */[__webpack_require__.e("common"), __webpack_require__.e("portfolio-portfolio-module")]).then(__webpack_require__.bind(null, /*! ./portfolio/portfolio.module */ "./src/app/portfolio/portfolio.module.ts")).then(m => m.PortfolioModule) }
        ]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function AppComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const link_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.activeLink = link_r1.route; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", link_r1.route)("active", ctx_r0.activeLink == link_r1.route);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", link_r1.title, " ");
} }
class AppComponent {
    constructor(scully, router) {
        this.scully = scully;
        this.router = router;
        this.links$ = this.scully.available$;
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
        this.calculateWH();
        const self = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500))
            .subscribe((event) => {
            this.calculateWH();
        });
        router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(val => val instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"] && val.urlAfterRedirects.startsWith("/home"))).subscribe((val) => {
            // see also 
            setTimeout(() => {
                self.navigatePage("/about-me");
            }, 2000);
        });
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
        let width = this.innerWidth - 100;
        let height = (this.innerWidth / 1.8) - 100;
        if (height > this.innerHeight) {
            width = (this.innerHeight * 1.8) - 100;
            height = this.innerHeight - 100;
        }
        this.containerH = height;
        this.containerW = width;
    }
    ngOnInit() {
        // debug current pages
        this.links$.subscribe((links) => {
            console.log(links);
        });
    }
    navigatePage(pageUrl) {
        this.activeLink = pageUrl;
        this.router.navigateByUrl(pageUrl);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyRoutesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root1"]], decls: 10, vars: 8, consts: [[1, "h-full"], ["mat-tab-nav-bar", "", "mat-align-tabs", "center", "animationDuration", "2000ms", 3, "backgroundColor"], ["mat-tab-link", "", 3, "routerLink", "active", "click", 4, "ngFor", "ngForOf"], ["id", "container", 1, "back-ground", "mx-auto"], [1, "bg-white", "out-box"], [1, "inner-box"], [1, "overflow-hidden", "w-full", "h-full", "relative"], [1, "main-container"], ["mat-tab-link", "", 3, "routerLink", "active", "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AppComponent_a_2_Template, 2, 3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("backgroundColor", "white");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 6, ctx.links$));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", ctx.containerW, "px")("height", ctx.containerH, "px");
    } }, directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabNav"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: [".main-container[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: rgba(235, 243, 249, 0.5);\n  top: 50%;\n  bottom: -50%;\n  left: -9%;\n  right: 0;\n  z-index: 1;\n  transform: rotate(152.4deg);\n  width: 130%;\n}\n\n.out-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  box-shadow: 18px 21px 32px rgba(0, 0, 0, 0.4);\n}\n\n  #all-about-me {\n  margin-top: auto;\n  font-size: 48px;\n  line-height: 1;\n}\n\n  #all-about-me * {\n  font-size: 48px;\n}\n\n  mat-ink-bar {\n  background-color: #00717b !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0Usa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBTEY7O0FBUUE7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7QUFORjs7QUFTQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUlBLGNBQUE7QUFURjs7QUFNRTtFQUNFLGVBQUE7QUFKSjs7QUFTQTtFQUNFLG9DQUFBO0FBTkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmxhY2stdGV4dC1jb2xvcjogIzJkMzAzNDtcblxuJGdyZWVuLXRleHQtY29sb3I6ICMwMDcxN2I7XG5cbiRpbWFnZTogIzAwNzE3YjtcblxuLm1haW4tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyNDMsIDI0OSwgMC41KTtcbiAgdG9wOiA1MCU7XG4gIGJvdHRvbTogLTUwJTtcbiAgbGVmdDogLTklO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTUyLjRkZWcpO1xuICB3aWR0aDogMTMwJTtcbn1cblxuLm91dC1ib3gge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMThweCAyMXB4IDMycHggcmdiKDAgMCAwIC8gNDAlKTtcbn1cblxuOjpuZy1kZWVwICNhbGwtYWJvdXQtbWUge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBmb250LXNpemU6IDQ4cHg7XG4gICoge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgfVxuICBsaW5lLWhlaWdodDogMTtcbn1cblxuOjpuZy1kZWVwIG1hdC1pbmstYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLXRleHQtY29sb3IgIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root1',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyRoutesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


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
/* harmony import */ var _entry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entry.component */ "./src/app/entry.component.ts");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_entry_component__WEBPACK_IMPORTED_MODULE_4__["EntryComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabNav"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_5__["ScullyLibModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_entry_component__WEBPACK_IMPORTED_MODULE_4__["EntryComponent"],
        _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_5__["ScullyLibModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _entry_component__WEBPACK_IMPORTED_MODULE_4__["EntryComponent"],
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_5__["ScullyLibModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"]
                ],
                providers: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabNav"]],
                bootstrap: [_entry_component__WEBPACK_IMPORTED_MODULE_4__["EntryComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/entry.component.ts":
/*!************************************!*\
  !*** ./src/app/entry.component.ts ***!
  \************************************/
/*! exports provided: EntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntryComponent", function() { return EntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class EntryComponent {
}
EntryComponent.ɵfac = function EntryComponent_Factory(t) { return new (t || EntryComponent)(); };
EntryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EntryComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function EntryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".main-container[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: rgba(235, 243, 249, 0.5);\n  top: 50%;\n  bottom: -50%;\n  left: -9%;\n  right: 0;\n  z-index: 1;\n  transform: rotate(152.4deg);\n  width: 130%;\n}\n\n.out-box[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  box-shadow: 18px 21px 32px rgba(0, 0, 0, 0.4);\n}\n\n  #all-about-me {\n  margin-top: auto;\n  font-size: 48px;\n  line-height: 1;\n}\n\n  #all-about-me * {\n  font-size: 48px;\n}\n\n  mat-ink-bar {\n  background-color: #00717b !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0Usa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBTEY7O0FBUUE7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7QUFORjs7QUFTQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUlBLGNBQUE7QUFURjs7QUFNRTtFQUNFLGVBQUE7QUFKSjs7QUFTQTtFQUNFLG9DQUFBO0FBTkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmxhY2stdGV4dC1jb2xvcjogIzJkMzAzNDtcblxuJGdyZWVuLXRleHQtY29sb3I6ICMwMDcxN2I7XG5cbiRpbWFnZTogIzAwNzE3YjtcblxuLm1haW4tY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM1LCAyNDMsIDI0OSwgMC41KTtcbiAgdG9wOiA1MCU7XG4gIGJvdHRvbTogLTUwJTtcbiAgbGVmdDogLTklO1xuICByaWdodDogMDtcbiAgei1pbmRleDogMTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTUyLjRkZWcpO1xuICB3aWR0aDogMTMwJTtcbn1cblxuLm91dC1ib3gge1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogMThweCAyMXB4IDMycHggcmdiKDAgMCAwIC8gNDAlKTtcbn1cblxuOjpuZy1kZWVwICNhbGwtYWJvdXQtbWUge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBmb250LXNpemU6IDQ4cHg7XG4gICoge1xuICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgfVxuICBsaW5lLWhlaWdodDogMTtcbn1cblxuOjpuZy1kZWVwIG1hdC1pbmstYmFyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuLXRleHQtY29sb3IgIWltcG9ydGFudDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EntryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: '<router-outlet></router-outlet>',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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