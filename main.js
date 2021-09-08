(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Angular\scully-personal-website\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
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

/***/ "O5fe":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/not-found/not-found.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group mat-align-tabs=\"center\" dynamicHeight (selectedTabChange)=\"tabChanged($event)\">\r\n    <mat-tab label=\"ABOUT ME\"></mat-tab>\r\n    <mat-tab label=\"PORTFOLIO\"></mat-tab>\r\n    <mat-tab label=\"AFTER WORK\"></mat-tab>\r\n</mat-tab-group>\r\n<div class=\"bounds\" id=\"not-found\">\r\n    <div class=\"content\"   >\r\n        <h1  class=\"header\">\r\n            <span>#PAGE </span><span>NOT FOUND</span>\r\n        </h1>\r\n        <div  class=\"content\" >\r\n            <div style=\"justify-content: center; height: 100%; margin-top: auto\" >\r\n                <div class=\"not-found\"></div>\r\n                <h1 class=\"e404\">404</h1>\r\n            </div>\r\n            <a style=\"text-align: center;margin-bottom: auto; margin-top: 20px; font-style: italic; text-decoration: underline; font-size: 20px;\"\r\n                class=\"main-color\" href=\"/\">Back to homepage</a>\r\n        </div>\r\n        <div   class=\"footer\"  >\r\n            <div class=\"icon-container\" id=\"footer-contact\"  \r\n                >\r\n                <div >\r\n                    <a class=\"gmail\"\r\n                        href=\"https://mail.google.com/mail/?view=cm&fs=1&to=nhvu.95@gmail.com&su=HOW%20CAN%20I%20HELP%20U%3F\"\r\n                        target=\"_blank\"></a>\r\n                </div>\r\n                <div >\r\n                    <h3><span>VU HIEU</span><span> NGUYEN</span></h3>\r\n                    <h3>nhvu.95@gmail.com</h3>\r\n                </div>\r\n            </div>\r\n            <div   style=\"justify-content: flex-end;\"\r\n                >\r\n                <div class=\"download\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>");

/***/ }),

/***/ "OoyU":
/*!*********************************************************!*\
  !*** ./src/app/shared/not-found/not-found.component.ts ***!
  \*********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./not-found.component.html */ "O5fe");
/* harmony import */ var _not_found_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found.component.scss */ "yONB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let NotFoundComponent = class NotFoundComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    tabChanged(tabChangeEvent) {
        let index = tabChangeEvent.index;
        switch (index) {
            case 0:
                this.router.navigateByUrl('/?index=0');
                break;
            case 1:
                this.router.navigateByUrl('/?index=1');
                break;
            case 2:
                this.router.navigateByUrl('/?index=2');
                break;
        }
    }
};
NotFoundComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
NotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-not-found',
        template: _raw_loader_not_found_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_not_found_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NotFoundComponent);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'portfolio';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/not-found/not-found.component */ "OoyU");










let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_6__["ScullyLibModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: BlogGuard, MainGuard, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogGuard", function() { return BlogGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainGuard", function() { return MainGuard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/not-found/not-found.component */ "OoyU");





let BlogGuard = class BlogGuard {
    constructor(router, scully) {
        this.router = router;
        this.scully = scully;
    }
    canActivate(route, state) {
        if (!route.firstChild || Object.keys(route.firstChild.params).length == 0) {
            this.router.navigateByUrl('/404');
            return false;
        }
        else {
            let url = state.url;
            this.scully.allRoutes$.subscribe(routes => {
                if (!routes.map(rout => rout.route).includes(url)) {
                    this.router.navigateByUrl('/404');
                    return false;
                }
            });
        }
        return true;
    }
};
BlogGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__["ScullyRoutesService"] }
];
BlogGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], BlogGuard);

let MainGuard = class MainGuard {
    constructor(router, scully) {
        this.router = router;
        this.scully = scully;
    }
    canActivate(route, state) {
        let url = state.url.replace(/\?.*$/, '');
        this.scully.allRoutes$.subscribe(routes => {
            if (!routes.map(rout => rout.route).includes(url)) {
                this.router.navigateByUrl('/404');
                return false;
            }
        });
        return true;
    }
};
MainGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__["ScullyRoutesService"] }
];
MainGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], MainGuard);

const routes = [
    {
        path: '', loadChildren: () => __webpack_require__.e(/*! import() | main-screen-main-screen-module */ "main-screen-main-screen-module").then(__webpack_require__.bind(null, /*! ./main-screen/main-screen.module */ "+FOH")).then(m => m.MainScreenModule),
        canActivate: [MainGuard]
    },
    {
        path: 'blog', loadChildren: () => __webpack_require__.e(/*! import() | blog-blog-module */ "blog-blog-module").then(__webpack_require__.bind(null, /*! ./blog/blog.module */ "U4+L")).then(m => m.BlogModule),
        canActivate: [BlogGuard]
    },
    {
        path: '**',
        redirectTo: '404'
    },
    {
        path: '404',
        component: _shared_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__["NotFoundComponent"],
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
                initialNavigation: 'enabled'
            })],
        providers: [BlogGuard, MainGuard],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "yONB":
/*!***********************************************************!*\
  !*** ./src/app/shared/not-found/not-found.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bounds#not-found {\n  background: white;\n  background: linear-gradient(130deg, white 0%, rgba(0, 113, 123, 0.05) 50%, rgba(0, 113, 123, 0.05) 100%);\n  padding: 2rem 5rem !important;\n  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;\n  max-width: 1600px;\n  display: flex;\n  flex-direction: row;\n  margin: auto;\n  margin-bottom: 30px;\n}\n.bounds#not-found ::ng-deep h2,\n.bounds#not-found ::ng-deep h3 {\n  margin: 0 !important;\n}\n.bounds#not-found .icon .icon-container div,\n.bounds#not-found .footer .icon-container div {\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n.bounds#not-found .footer .icon-container div:last-child {\n  display: flex !important;\n  flex-direction: column !important;\n  align-items: flex-start !important;\n}\n.bounds#not-found .footer .icon-container div:last-child h3 {\n  font-weight: lighter !important;\n  font-size: 24px !important;\n}\n.bounds#not-found .footer .icon-container div:last-child h3:first-child {\n  font-size: 30px !important;\n  font-weight: normal !important;\n}\n.bounds#not-found .footer .icon-container div:last-child h3:first-child span:last-child {\n  font-weight: lighter !important;\n}\n.bounds#not-found .footer > div {\n  margin-top: 1rem !important;\n}\n.bounds#not-found .strong {\n  font-weight: bold !important;\n}\n.bounds#not-found p {\n  text-align: justify;\n  font-weight: normal !important;\n}\n.bounds#not-found .center-item {\n  justify-content: center !important;\n}\n.bounds#not-found .e404 {\n  font-size: 100px !important;\n  margin-bottom: 0px;\n  line-height: 1em;\n  height: 1em;\n}\n.bounds#not-found .not-found {\n  width: 100px;\n  min-width: 100px;\n  height: 100px;\n  min-height: 100px;\n  margin-right: 10px;\n  background-image: url(\"/assets/images/not-found.svg\");\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n}\n.bounds-xs#not-found {\n  padding: 1rem 2rem !important;\n}\n.bounds-xs#not-found .ava-container .avatar {\n  width: 230px !important;\n  height: 230px !important;\n}\n.bounds-xs#not-found .icon-container > div > div {\n  min-width: 65px !important;\n  width: 65px !important;\n  min-height: 65px !important;\n  height: 65px !important;\n}\n.bounds-xs#not-found .icon-container#footer-contact h3:first-child {\n  font-size: 24px !important;\n}\n.bounds-xs#not-found .icon-container#footer-contact h3:last-child {\n  font-size: 20px !important;\n}\n.bounds-xs#not-found .icon-container#footer-contact > div:first-child {\n  min-width: 65px !important;\n  max-width: 65px !important;\n  min-height: 65px !important;\n  max-height: 65px !important;\n  margin-right: 10px;\n}\n.bounds-xs#not-found .image-container .name#h2 {\n  font-size: 35px !important;\n}\n.bounds-xs#not-found .image-container .role#h3 {\n  font-size: 30px !important;\n}\n.bounds-xs#not-found .introduce {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxpQkFBQTtFQUNBLHdHQUFBO0VBTUEsNkJBQUE7RUFDQSw0RUFBQTtFQUVBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBUEo7QUFTSTs7RUFFSSxvQkFBQTtBQVBSO0FBVUk7O0VBRUksd0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0FBUlI7QUFVSTtFQUNJLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtBQVJSO0FBU1E7RUFDSSwrQkFBQTtFQUNBLDBCQUFBO0FBUFo7QUFTUTtFQUNJLDBCQUFBO0VBQ0EsOEJBQUE7QUFQWjtBQVFZO0VBQ0ksK0JBQUE7QUFOaEI7QUFVSTtFQUNJLDJCQUFBO0FBUlI7QUFXSTtFQUNJLDRCQUFBO0FBVFI7QUFXSTtFQUNJLG1CQUFBO0VBQ0EsOEJBQUE7QUFUUjtBQVdJO0VBQ0ksa0NBQUE7QUFUUjtBQVdJO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQVRSO0FBV0k7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLHFEQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0FBVlI7QUFjQTtFQUNJLDZCQUFBO0FBWEo7QUFjUTtFQUNJLHVCQUFBO0VBQ0Esd0JBQUE7QUFaWjtBQWVJO0VBQ0ksMEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsdUJBQUE7QUFiUjtBQWVJO0VBQ0ksMEJBQUE7QUFiUjtBQWVJO0VBQ0ksMEJBQUE7QUFiUjtBQWVJO0VBQ0ksMEJBQUE7RUFDQSwwQkFBQTtFQUNBLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQWJSO0FBaUJRO0VBQ0ksMEJBQUE7QUFmWjtBQWlCUTtFQUNJLDBCQUFBO0FBZlo7QUFrQkk7RUFDSSxnQkFBQTtBQWhCUiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3R5bGVzL2dsb2JhbC12YXIuc2Nzc1wiO1xyXG5cclxuLmJvdW5kcyNub3QtZm91bmQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIDEzMGRlZyxcclxuICAgICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDAlLFxyXG4gICAgICAgIHJnYmEoMCwgMTEzLCAxMjMsIDAuMDUpIDUwJSxcclxuICAgICAgICByZ2JhKDAsIDExMywgMTIzLCAwLjA1KSAxMDAlXHJcbiAgICApO1xyXG4gICAgcGFkZGluZzogMnJlbSA1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTYpIDBweCAzcHggNnB4LCByZ2JhKDAsIDAsIDAsIDAuMjMpIDBweCAzcHggNnB4O1xyXG5cclxuICAgIG1heC13aWR0aDogMTYwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG5cclxuICAgIDo6bmctZGVlcCBoMixcclxuICAgIDo6bmctZGVlcCBoMyB7XHJcbiAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmljb24gLmljb24tY29udGFpbmVyIGRpdixcclxuICAgIC5mb290ZXIgLmljb24tY29udGFpbmVyIGRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmZvb3RlciAuaWNvbi1jb250YWluZXIgZGl2Omxhc3QtY2hpbGQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMzpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZvb3RlciA+IGRpdiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIC5zdHJvbmcge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5jZW50ZXItaXRlbSB7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5lNDA0IHtcclxuICAgICAgICBmb250LXNpemU6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgaGVpZ2h0OiAxZW07XHJcbiAgICB9XHJcbiAgICAubm90LWZvdW5kIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvbm90LWZvdW5kLnN2Z1wiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ib3VuZHMteHMjbm90LWZvdW5kIHtcclxuICAgIHBhZGRpbmc6IDFyZW0gMnJlbSAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5hdmEtY29udGFpbmVyIHtcclxuICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgd2lkdGg6IDIzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjMwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaWNvbi1jb250YWluZXIgPiBkaXYgPiBkaXYge1xyXG4gICAgICAgIG1pbi13aWR0aDogNjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHdpZHRoOiA2NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogNjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGhlaWdodDogNjVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmljb24tY29udGFpbmVyI2Zvb3Rlci1jb250YWN0IGgzOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBmb250LXNpemU6IDI0cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5pY29uLWNvbnRhaW5lciNmb290ZXItY29udGFjdCBoMzpsYXN0LWNoaWxkIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5pY29uLWNvbnRhaW5lciNmb290ZXItY29udGFjdCA+IGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgbWluLXdpZHRoOiA2NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2NXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDogNjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDY1cHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLm5hbWUjaDIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDM1cHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJvbGUjaDMge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHggIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW50cm9kdWNlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map