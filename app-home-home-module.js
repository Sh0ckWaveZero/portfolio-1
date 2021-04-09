(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-home-home-module"],{

/***/ "./src/app/home/home-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");





const routes = [{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }];
class HomeRoutingModule {
}
HomeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _base_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-page.component */ "./src/app/base-page.component.ts");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.state.service */ "./src/app/app.state.service.ts");







const _c0 = ["container"];
class HomeComponent extends _base_page_component__WEBPACK_IMPORTED_MODULE_2__["BasePageComponent"] {
    constructor(scullyRoutesService, router, appState) {
        super(router, appState);
        this.scullyRoutesService = scullyRoutesService;
        this.widthImage = 0;
        this.routes$ = this.scullyRoutesService.available$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((routes) => routes.filter((route) => route.route.includes('/home'))));
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__["ScullyRoutesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_state_service__WEBPACK_IMPORTED_MODULE_5__["AppStateService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], viewQuery: function HomeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imgContain = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 22, vars: 0, consts: [[1, "h-full", "grid", "grid-cols-9", "grid-rows-5", "gap-0"], [1, "col-span-9"], [1, "col-span-9", "row-span-3", "grid", "grid-cols-9"], [1, "col-span-3", "relative"], ["container", ""], ["src", "../../assets/img/avatar.jpg", "alt", "Avatar", 1, "square", "avatar", "object-scale-down", "w-2/3"], [1, "col-span-4", "flex-col", "items-center", "relative"], [1, "name-title"], [1, "font-light"], [1, "font-normal", "green-text-color"], [1, "border-t-4", "border-black", "black-text-color"], [1, "green-text-color"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " I'M ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h1", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " VU HIEU ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " NGUYEN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " SOFTWARE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "ENGINEER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " - FRONT END DEVELOPER ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".square[_ngcontent-%COMP%] {\n  margin: 0;\n  background: white;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n}\n\n.avatar[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: #008888 3px solid;\n}\n\n.name-title[_ngcontent-%COMP%] {\n  margin: 0;\n  position: absolute;\n  \n  top: 50%;\n  \n  transform: translate(0, -50%);\n}\n\n.name-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:nth-child(1) {\n  font-size: 3vw;\n  line-height: 1;\n}\n\n.name-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:nth-child(2) {\n  font-size: 4vw;\n  line-height: 1;\n  letter-spacing: 0.2vw;\n}\n\n.name-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:nth-child(3) {\n  font-size: 3.5vw;\n  line-height: 1;\n  letter-spacing: 0.5vw;\n}\n\n.name-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]:nth-child(4) {\n  font-size: 1.5vw;\n  line-height: 1.5;\n}\n\n\n\n.border-black[_ngcontent-%COMP%] {\n  border-color: #2d3034;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7QUFMRjs7QUFRQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUFvQixNQUFBO0VBQ3BCLFFBQUE7RUFBVSxNQUFBO0VBQ1YsNkJBQUE7QUFIRjs7QUFJRTtFQUNFLGNBQUE7RUFDQSxjQUFBO0FBRko7O0FBSUU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBRko7O0FBSUU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUZKOztBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUZKOztBQU1BLE1BQUE7O0FBRUE7RUFDRSxxQkFqRGlCO0FBNkNuQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRibGFjay10ZXh0LWNvbG9yOiAjMmQzMDM0O1xuXG4kZ3JlZW4tdGV4dC1jb2xvcjogIzAwNzE3YjtcblxuJGltYWdlOiAjMDA3MTdiO1xuXG4uc3F1YXJlIHtcbiAgbWFyZ2luOiAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tcmlnaHQ6IC01MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uYXZhdGFyIHtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6ICMwMDg4ODggM3B4IHNvbGlkO1xufVxuXG4ubmFtZS10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlOyAvKiAyICovXG4gIHRvcDogNTAlOyAvKiAzICovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICBoMTpudGgtY2hpbGQoMSl7XG4gICAgZm9udC1zaXplOiAzdnc7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cbiAgaDE6bnRoLWNoaWxkKDIpe1xuICAgIGZvbnQtc2l6ZTogNHZ3O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjJ2dztcbiAgfVxuICBoMTpudGgtY2hpbGQoMyl7XG4gICAgZm9udC1zaXplOiAzLjV2dztcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC41dnc7XG4gIH1cbiAgaDE6bnRoLWNoaWxkKDQpe1xuICAgIGZvbnQtc2l6ZTogMS41dnc7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgfVxufVxuXG4vKiA0ICovXG5cbi5ib3JkZXItYmxhY2t7XG4gIGJvcmRlci1jb2xvcjogJGJsYWNrLXRleHQtY29sb3I7XG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_3__["ScullyRoutesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _app_state_service__WEBPACK_IMPORTED_MODULE_5__["AppStateService"] }]; }, { imgContain: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container']
        }] }); })();


/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");






class HomeModule {
}
HomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HomeModule_Factory(t) { return new (t || HomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
            _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyLibModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
        _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyLibModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
                    _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyLibModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=app-home-home-module.js.map