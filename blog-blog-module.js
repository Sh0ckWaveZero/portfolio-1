(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["blog-blog-module"],{

/***/ "9ilz":
/*!*********************************************!*\
  !*** ./src/app/blog/blog-routing.module.ts ***!
  \*********************************************/
/*! exports provided: BlogRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogRoutingModule", function() { return BlogRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog.component */ "LgBW");




const routes = [
    {
        path: ':slug',
        component: _blog_component__WEBPACK_IMPORTED_MODULE_3__["BlogComponent"],
        canActivate: []
    }
];
let BlogRoutingModule = class BlogRoutingModule {
};
BlogRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BlogRoutingModule);



/***/ }),

/***/ "F7z0":
/*!******************************************!*\
  !*** ./src/app/blog/blog.component.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bounds .inner-bounds {\n  width: 100%;\n}\n.bounds .header {\n  margin-bottom: 2rem !important;\n  font-weight: 500 !important;\n  max-width: 1000px;\n  width: 1000px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.bounds .main-content {\n  max-width: 1000px;\n  width: 1000px;\n  margin-top: 0px;\n  max-height: -webkit-fit-content;\n  max-height: -moz-fit-content;\n  max-height: fit-content;\n}\n.bounds .main-content > div {\n  justify-content: center;\n  width: 100%;\n}\n.bounds h3.author {\n  font-size: 25px;\n  font-weight: 600;\n}\n.bounds h3.author .sur-name {\n  font-weight: lighter;\n}\n@media screen and (max-width: 1279px) {\n  .bounds {\n    flex-direction: column;\n  }\n\n  .header {\n    max-width: 80% !important;\n  }\n\n  .main-content {\n    max-width: 80% !important;\n  }\n  .main-content .author {\n    text-align: center;\n  }\n  .main-content .yellow-line {\n    width: 100% !important;\n  }\n}\n@media screen and (max-width: 539px) {\n  .header {\n    max-width: 95% !important;\n  }\n\n  .header-sub-wrapper {\n    display: flex;\n    flex: 1 1 100%;\n    flex-direction: column;\n  }\n\n  .main-content {\n    max-width: 95% !important;\n  }\n  .main-content .post-date,\n.main-content .post-thank {\n    text-align: center !important;\n  }\n\n  #mainTab ::ng-deep .mat-tab-label {\n    padding: 0 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0U7RUFDRSxXQUFBO0FBRko7QUFJRTtFQUNFLDhCQUFBO0VBQ0EsMkJBQUE7RUFFQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSEo7QUFNRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUFBLDRCQUFBO0VBQUEsdUJBQUE7QUFKSjtBQU1JO0VBQ0UsdUJBQUE7RUFDQSxXQUFBO0FBSk47QUFRRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQU5KO0FBT0k7RUFDRSxvQkFBQTtBQUxOO0FBVUE7RUFDRTtJQUNFLHNCQUFBO0VBUEY7O0VBU0E7SUFDRSx5QkFBQTtFQU5GOztFQVFBO0lBQ0UseUJBQUE7RUFMRjtFQU1FO0lBQ0Usa0JBQUE7RUFKSjtFQU1FO0lBQ0Usc0JBQUE7RUFKSjtBQUNGO0FBT0E7RUFDRTtJQUNFLHlCQUFBO0VBTEY7O0VBT0E7SUFDRSxhQUFBO0lBQ0EsY0FBQTtJQUNBLHNCQUFBO0VBSkY7O0VBTUE7SUFDRSx5QkFBQTtFQUhGO0VBSUU7O0lBRUUsNkJBQUE7RUFGSjs7RUFPRTtJQUNJLGVBQUE7RUFKTjtBQUNGIiwiZmlsZSI6ImJsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3R5bGVzL2dsb2JhbC12YXIuc2Nzc1wiO1xyXG5cclxuLmJvdW5kcyB7XHJcbiAgLmlubmVyLWJvdW5kc3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuaGVhZGVyIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW0gIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuXHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIHdpZHRoOiAxMDAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB9XHJcblxyXG4gIC5tYWluLWNvbnRlbnQge1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICB3aWR0aDogMTAwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgbWF4LWhlaWdodDogZml0LWNvbnRlbnQ7XHJcblxyXG4gICAgPiBkaXYge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoMy5hdXRob3Ige1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIC5zdXItbmFtZSB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XHJcbiAgLmJvdW5kcyB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAuaGVhZGVyIHtcclxuICAgIG1heC13aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5tYWluLWNvbnRlbnQge1xyXG4gICAgbWF4LXdpZHRoOiA4MCUgIWltcG9ydGFudDtcclxuICAgIC5hdXRob3Ige1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAueWVsbG93LWxpbmUge1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MzlweCkge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgbWF4LXdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmhlYWRlci1zdWItd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMSAxIDEwMCU7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuICAubWFpbi1jb250ZW50IHtcclxuICAgIG1heC13aWR0aDogOTUlICFpbXBvcnRhbnQ7XHJcbiAgICAucG9zdC1kYXRlLFxyXG4gICAgLnBvc3QtdGhhbmsge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICNtYWluVGFiIHtcclxuICAgIDo6bmctZGVlcCAubWF0LXRhYi1sYWJlbCB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgfVxyXG59XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "LgBW":
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_blog_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./blog.component.html */ "iJX/");
/* harmony import */ var _blog_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blog.component.scss */ "F7z0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








let BlogComponent = class BlogComponent {
    constructor(router, route, scully) {
        this.router = router;
        this.route = route;
        this.scully = scully;
        // links$: Observable<ScullyRoute[]> = this.scully.available$;
        this.scroll$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(true);
        this.current = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
        this.title = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])("WHY YOU SHOUDN'T RUSH BRANDING");
        this.title1 = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])("WHY YOU SHOUDN'T");
        this.title2 = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])("RUSH BRANDING");
        this.startDate$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])("________");
        this.endDate$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])("________");
        this.displayControl = false;
        this.activeTabIndex = 0;
    }
    ngAfterViewInit() {
    }
    // @HostListener('window:scroll', ['$event']) // for window scroll events
    // @debounce()
    // onScroll(event) {
    //   if (window.pageYOffset > window.innerHeight * 3) {
    //     this.displayControl = true;
    //   } else {
    //     this.displayControl = false;
    //   }
    // }
    ngOnInit() {
        // debug current pages
        this.current = this.scully.getCurrent().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["share"])());
        this.startDate$ = this.current.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(res => {
            if (res)
                return res.date_start;
            return "";
        }));
        this.endDate$ = this.current.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(res => {
            if (res)
                return res.date_end;
            return "";
        }));
        let sharedTitle$ = this.current.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(res => {
            if (res)
                return res.title;
            return "";
        }));
        this.title = sharedTitle$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(title => title.replace("<br>", " ")));
        this.title1 = sharedTitle$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(title => title.split("<br>")[0]));
        this.title2 = sharedTitle$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(title => title.split("<br>").slice(1).join()));
    }
    tabChanged(tabChangeEvent) {
        let index = tabChangeEvent.index;
        this.router.navigateByUrl(`/?index=${index}`);
    }
    onTabGroupClicked() {
        this.router.navigateByUrl(`/?index=${this.activeTabIndex}`);
    }
    scrollToTop() {
        window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    }
    scrollToBottom() {
        window.scrollTo({ left: 0, top: document.body.clientHeight, behavior: 'smooth' });
    }
};
BlogComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_5__["ScullyRoutesService"] }
];
BlogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-blog',
        template: _raw_loader_blog_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        preserveWhitespaces: true,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].Emulated,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_blog_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BlogComponent);



/***/ }),

/***/ "U4+L":
/*!*************************************!*\
  !*** ./src/app/blog/blog.module.ts ***!
  \*************************************/
/*! exports provided: BlogModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var _blog_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blog-routing.module */ "9ilz");
/* harmony import */ var _blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog.component */ "LgBW");







let BlogModule = class BlogModule {
};
BlogModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"]],
        providers: [],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _blog_routing_module__WEBPACK_IMPORTED_MODULE_5__["BlogRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyLibModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_3__["MatTabsModule"]],
    })
], BlogModule);



/***/ }),

/***/ "iJX/":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog/blog.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group id=\"mainTab\" mat-align-tabs=\"center\" dynamicHeight [(selectedIndex)]=\"activeTabIndex\" (click)=\"onTabGroupClicked()\">\r\n    <mat-tab label=\"ABOUT ME\"></mat-tab>\r\n    <mat-tab label=\"PORTFOLIO\"></mat-tab>\r\n    <mat-tab label=\"AFTER WORK\"></mat-tab>\r\n</mat-tab-group>\r\n<div class=\"bounds\">\r\n    <div class=\"inner-bounds\">\r\n        <div class=\"content\">\r\n            <h1 class=\"header\">\r\n                <span class=\"header-sub-wrapper\"><span>{{title1| async}}</span><span>{{title2| async}}</span></span>\r\n            </h1>\r\n            <div class=\"main-content\">\r\n                <div>\r\n                    <!-- <div>\r\n                    <div *ngIf=\"displayControl\" style=\"width: 170px; align-items: center; position: fixed;\">\r\n                        <div class=\"down-arrow\" style=\"transform: rotate(180deg);\" (click)=\"scrollToTop()\"></div>\r\n                        <h3 style=\"margin-bottom: 0px; font-weight: 600; text-align: center;\">{{title |async}}</h3>\r\n                        <div style=\"width: 130px; height: 0px; border-bottom: 2px solid #f29e03; margin-bottom: 10px;\">\r\n                        </div>\r\n                        <h3 style=\"font-size: 20px;\"><span style=\"font-weight: 500;\">VU HIEU</span><span\r\n                                class=\"sur-name\"> NGUYEN</span></h3>\r\n                        <div class=\"down-arrow\" (click)=\"scrollToBottom()\"></div>\r\n                    </div>\r\n                </div> -->\r\n                    <div>\r\n                        <h3 class=\"author\"><span>VU HIEU</span><span class=\"sur-name\"> NGUYEN</span></h3>\r\n                        <div style=\"width: 50px; height: 20px; border-bottom: 3px solid #f29e03; margin-bottom: 50px;\"\r\n                            class=\"yellow-line\">\r\n                        </div>\r\n                        <div style=\"min-height: 350px;\">\r\n                            <scully-content></scully-content>\r\n                        </div>\r\n                        <div class=\"post-date\" style=\"text-align: right;\">{{startDate$ | async}} - {{endDate$ | async}}\r\n                        </div>\r\n                        <div class=\"post-thank\" style=\"text-align: right; font-style: italic;\">Thank for reading!</div>\r\n                    </div>\r\n                    <div></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"footer\">\r\n                <div id=\"footer-contact\">\r\n                    <div id=\"m-icon\">\r\n                        <a class=\"m-icon gmail\"\r\n                            href=\"https://mail.google.com/mail/?view=cm&fs=1&to=nhvu.95@gmail.com&su=HOW%20CAN%20I%20HELP%20U%3F\"\r\n                            target=\"_blank\"></a>\r\n                    </div>\r\n                    <div id=\"m-contact\">\r\n                        <h3><span class=\"fname\">VU HIEU</span><span class=\"sname\"> NGUYEN</span></h3>\r\n                        <h3 class=\"email\">nhvu.95@gmail.com</h3>\r\n                    </div>\r\n                </div>\r\n                <div id=\"footer-download-cv\">\r\n                    <div class=\"download\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ })

}]);
//# sourceMappingURL=blog-blog-module.js.map