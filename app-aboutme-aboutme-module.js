(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-aboutme-aboutme-module"],{

/***/ "./src/app/aboutme/aboutme-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/aboutme/aboutme-routing.module.ts ***!
  \***************************************************/
/*! exports provided: AboutmeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutmeRoutingModule", function() { return AboutmeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _aboutme_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutme.component */ "./src/app/aboutme/aboutme.component.ts");





const routes = [
    {
        path: '',
        component: _aboutme_component__WEBPACK_IMPORTED_MODULE_2__["AboutmeComponent"],
    },
    {
        path: '**',
        component: _aboutme_component__WEBPACK_IMPORTED_MODULE_2__["AboutmeComponent"],
    }
];
class AboutmeRoutingModule {
}
AboutmeRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutmeRoutingModule });
AboutmeRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutmeRoutingModule_Factory(t) { return new (t || AboutmeRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutmeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutmeRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/aboutme/aboutme.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutme/aboutme.component.ts ***!
  \**********************************************/
/*! exports provided: AboutmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutmeComponent", function() { return AboutmeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _base_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-page.component */ "./src/app/base-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_state_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.state.service */ "./src/app/app.state.service.ts");
/* harmony import */ var _share_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../share/footer/footer.component */ "./src/share/footer/footer.component.ts");






class AboutmeComponent extends _base_page_component__WEBPACK_IMPORTED_MODULE_1__["BasePageComponent"] {
    constructor(route, router, baseState) {
        super(router, baseState);
        this.route = route;
        this.year = new Date().getFullYear() - new Date(2018, 7).getFullYear();
        this.old = new Date().getFullYear() - new Date(1995, 10, 25).getFullYear();
    }
    ngOnInit() { }
    openToLink(url) {
        window.open(url);
    }
}
AboutmeComponent.ɵfac = function AboutmeComponent_Factory(t) { return new (t || AboutmeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_state_service__WEBPACK_IMPORTED_MODULE_3__["AppStateService"])); };
AboutmeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutmeComponent, selectors: [["app-aboutme"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 105, vars: 2, consts: [[1, "h-full", "grid", "grid-cols-2", "grid-rows-5", "gap-0"], [1, "col-span-2", "grid", "grid-cols-11"], [1, "col-span-1"], [1, "flex", "col-span-10"], ["id", "all-about-me", 1, "black-text-color"], [1, "green-text-color"], [1, "col-span-2", "row-span-3", "grid", "grid-cols-9"], ["id", "ava-container", 1, "col-span-3"], [1, "relative", "h-2/3"], ["src", "../../assets/img/avatar.jpg", "alt", "Avatar", 1, "square", "avatar", "object-scale-down", "w-3/5"], ["id", "name", 1, "text-center"], ["id", "se", 1, "text-center"], [1, "relative", "flex", "justify-center", "contact"], ["src", "../../assets/img/facebook.png", 3, "click"], ["src", "../../assets/img/linkedin.png", 3, "click"], ["src", "../../assets/img/github.png", 3, "click"], ["src", "../../assets/img/acclaim.png", 3, "click"], [1, "col-span-4", "flex-col", "items-center", "relative"], [1, "show-up-content", "black-text-color"], ["align", "justify"], [1, "flex", "flex-col", "relative"], [1, "text-center", "font-semibold", "italic", "green-text-color"], [1, "ml-auto", "italic"], [1, "green-text-color", "cursor-pointer", "underline", 3, "click"], [1, "col-span-10", "relative"]], template: function AboutmeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "#ALL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "ABOUT ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "VU HIEU");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " NGUYEN\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\n                    SOFTWARE ENGINEER\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutmeComponent_Template_img_click_42_listener() { return ctx.openToLink("https://www.facebook.com/raiysaii/"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutmeComponent_Template_img_click_44_listener() { return ctx.openToLink("https://www.linkedin.com/in/nhvu95/"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutmeComponent_Template_img_click_46_listener() { return ctx.openToLink("https://github.com/HieuNguyenVu"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutmeComponent_Template_img_click_48_listener() { return ctx.openToLink("https://www.credly.com/badges/dea6395f-3313-4867-9713-372cc2b61815"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\n                    My name is ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Vu Hieu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "I have a big 'DREAM'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " to become a piece of a big thing or building it by myself. I don't clear about\n                    it. I have no idea, I don't think and try looking for it.\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\"What is coming will come and we'll meet it when\n                            it does\".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\n                        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "- J.K. Rowling -");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "\n                    So what I can do is try my best, keep learning from the good ones, look what they do, and waiting\n                    for an opportunity. The opportunity will come for who prepared.\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\n\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\n                    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "If you ask me about 'GOAL'");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, ", my GOAL is to make the dream become true. But I know, to catch my dream. I must\n                    climb on the top of the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutmeComponent_Template_span_click_85_listener() { return ctx.openToLink("./../../assets/img/triangle.png"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Pyramid");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, ". Only on top, I can see the opportunity,\n                    and touch on it. This isn't my last target, but It's my first step.\n                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "\n            ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\n        ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\n    ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Nguyen, I am ", ctx.old, " years old. I work as a Software Engineer. Up to now, I have done\n                    this job for ", ctx.year, " years. I was married and got a lovely boy. As the other software engineer, my\n                    hobby\n                    is the technology and video game. Moreover, I also have an interest in art and design. Sometimes,\n                    when everything becomes hard (because of bug and issue with stuck), I draw, design, or make some art to\n                    take the balance.\n                ");
    } }, directives: [_share_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: [".square {\n  margin: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-right: -50%;\n  transform: translate(-50%, -50%);\n}\n\n.avatar {\n  border-radius: 50%;\n  border: #008888 3px solid;\n}\n\n#name {\n  margin-bottom: 0px;\n  font-size: 28px;\n  line-height: 1.5;\n  font-weight: 400;\n}\n\n#se {\n  font-weight: 400;\n  font-size: 23px;\n  line-height: 1.5;\n  font-weight: 300;\n}\n\n.name-title {\n  margin: 0;\n  position: absolute;\n  /* 2 */\n  top: 50%;\n  /* 3 */\n  transform: translate(0, -50%);\n}\n\n.name-title h1:nth-child(1) {\n  font-size: 3vw;\n  line-height: 1;\n}\n\n.name-title h1:nth-child(2) {\n  font-size: 4vw;\n  line-height: 1;\n}\n\n.name-title h1:nth-child(3) {\n  font-size: 3.5vw;\n  line-height: 1;\n}\n\n.name-title h1:nth-child(4) {\n  font-size: 1.5vw;\n  line-height: 1.5;\n}\n\n/* 4 */\n\n.border-black {\n  border-color: #2d3034;\n}\n\n.contact img {\n  object-fit: scale-down;\n  width: 2.5vw;\n  min-width: 40px;\n  margin: 5px;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXRtZS9hYm91dG1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBTEY7O0FBUUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0FBTEY7O0FBUUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTEY7O0FBUUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBTEY7O0FBY0E7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7RUFBb0IsTUFBQTtFQUNwQixRQUFBO0VBQVUsTUFBQTtFQUNWLDZCQUFBO0FBVEY7O0FBVUU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQVJKOztBQVVFO0VBQ0UsY0FBQTtFQUNBLGNBQUE7QUFSSjs7QUFVRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQVJKOztBQVVFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQVJKOztBQVlBLE1BQUE7O0FBRUE7RUFDRSxxQkFsRWlCO0FBd0RuQjs7QUFhQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVZGIiwiZmlsZSI6InNyYy9hcHAvYWJvdXRtZS9hYm91dG1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJsYWNrLXRleHQtY29sb3I6ICMyZDMwMzQ7XG5cbiRncmVlbi10ZXh0LWNvbG9yOiAjMDA3MTdiO1xuXG4kaW1hZ2U6ICMwMDcxN2I7XG5cbi5zcXVhcmUge1xuICBtYXJnaW46IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAtNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmF2YXRhciB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAjMDA4ODg4IDNweCBzb2xpZDtcbn1cblxuI25hbWUge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuI3NlIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBsaW5lLWhlaWdodDogMS41O1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4vLyAjYXZhLWNvbnRhaW5lciA+IGRpdntcblxuLy8gICBoZWlnaHQ6IDR2aDtcblxuLy8gfVxuXG4ubmFtZS10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgcG9zaXRpb246IGFic29sdXRlOyAvKiAyICovXG4gIHRvcDogNTAlOyAvKiAzICovXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xuICBoMTpudGgtY2hpbGQoMSkge1xuICAgIGZvbnQtc2l6ZTogM3Z3O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG4gIGgxOm50aC1jaGlsZCgyKSB7XG4gICAgZm9udC1zaXplOiA0dnc7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cbiAgaDE6bnRoLWNoaWxkKDMpIHtcbiAgICBmb250LXNpemU6IDMuNXZ3O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG4gIGgxOm50aC1jaGlsZCg0KSB7XG4gICAgZm9udC1zaXplOiAxLjV2dztcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICB9XG59XG5cbi8qIDQgKi9cblxuLmJvcmRlci1ibGFjayB7XG4gIGJvcmRlci1jb2xvcjogJGJsYWNrLXRleHQtY29sb3I7XG59XG5cbi5jb250YWN0IGltZyB7XG4gIG9iamVjdC1maXQ6IHNjYWxlLWRvd247XG4gIHdpZHRoOiAyLjV2dztcbiAgbWluLXdpZHRoOiA0MHB4O1xuICBtYXJnaW46IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutmeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutme',
                templateUrl: './aboutme.component.html',
                styleUrls: ['./aboutme.component.scss'],
                preserveWhitespaces: true,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _app_state_service__WEBPACK_IMPORTED_MODULE_3__["AppStateService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/aboutme/aboutme.module.ts":
/*!*******************************************!*\
  !*** ./src/app/aboutme/aboutme.module.ts ***!
  \*******************************************/
/*! exports provided: AboutmeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutmeModule", function() { return AboutmeModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @scullyio/ng-lib */ "./node_modules/@scullyio/ng-lib/__ivy_ngcc__/fesm2015/scullyio-ng-lib.js");
/* harmony import */ var src_share_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/share/footer/footer.module */ "./src/share/footer/footer.module.ts");
/* harmony import */ var _aboutme_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./aboutme-routing.module */ "./src/app/aboutme/aboutme-routing.module.ts");
/* harmony import */ var _aboutme_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./aboutme.component */ "./src/app/aboutme/aboutme.component.ts");







class AboutmeModule {
}
AboutmeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AboutmeModule });
AboutmeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AboutmeModule_Factory(t) { return new (t || AboutmeModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _aboutme_routing_module__WEBPACK_IMPORTED_MODULE_4__["AboutmeRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], src_share_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__["FooterModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutmeModule, { declarations: [_aboutme_component__WEBPACK_IMPORTED_MODULE_5__["AboutmeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _aboutme_routing_module__WEBPACK_IMPORTED_MODULE_4__["AboutmeRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], src_share_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__["FooterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AboutmeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_aboutme_component__WEBPACK_IMPORTED_MODULE_5__["AboutmeComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _aboutme_routing_module__WEBPACK_IMPORTED_MODULE_4__["AboutmeRoutingModule"], _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_2__["ScullyLibModule"], src_share_footer_footer_module__WEBPACK_IMPORTED_MODULE_3__["FooterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=app-aboutme-aboutme-module.js.map