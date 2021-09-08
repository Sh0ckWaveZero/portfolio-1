(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-screen-main-screen-module"],{

/***/ "+FOH":
/*!***************************************************!*\
  !*** ./src/app/main-screen/main-screen.module.ts ***!
  \***************************************************/
/*! exports provided: MainScreenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainScreenModule", function() { return MainScreenModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _after_work_after_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./after-work/after-work.component */ "ZnMm");
/* harmony import */ var _after_work_afterwork_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./after-work/afterwork-item.component */ "0B5F");
/* harmony import */ var _hello_hello_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hello/hello.component */ "zdOv");
/* harmony import */ var _main_screen_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-screen-routing.module */ "cOjA");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/main.component */ "nMcE");
/* harmony import */ var _portfolio_portfolio_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./portfolio/portfolio-item.component */ "m5AT");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "JNpy");













let MainScreenModule = class MainScreenModule {
};
MainScreenModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _hello_hello_component__WEBPACK_IMPORTED_MODULE_8__["HelloComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
            _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_12__["PortfolioComponent"],
            _portfolio_portfolio_item_component__WEBPACK_IMPORTED_MODULE_11__["PortfolioItemComponent"],
            _after_work_after_work_component__WEBPACK_IMPORTED_MODULE_6__["AfterWorkComponent"],
            _after_work_afterwork_item_component__WEBPACK_IMPORTED_MODULE_7__["AfterWorkItemComponent"]
        ],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _main_screen_routing_module__WEBPACK_IMPORTED_MODULE_9__["MainRoutingModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
        providers: [],
    })
], MainScreenModule);



/***/ }),

/***/ "/KT2":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-screen/after-work/after-work.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bounds\">\r\n    <div class=\"inner-bounds\">\r\n        <div class=\"content\">\r\n            <h1 class=\"header\">\r\n                <span class=\"header-sub-wrapper\"><span>#AFTER</span><span>WORK</span></span>\r\n                <mat-tab-group *ngIf=\"currentNavIndex == 2\" #afterwork mat-align-tabs=\"end\" [selectedIndex]=\"2\"\r\n                    style=\"margin-left: auto;\">\r\n                    <mat-tab [disabled]='true' label=\"Tech\"></mat-tab>\r\n                    <mat-tab [disabled]='true' label=\"Non-Tech\"></mat-tab>\r\n                    <mat-tab label=\"All\"></mat-tab>\r\n                </mat-tab-group>\r\n            </h1>\r\n\r\n            <div class=\"main-content\">\r\n                <!-- First part -->\r\n                <div *ngIf=\"projects$ |async as projects\" class=\"first-part\">\r\n                    <div class=\"first-part-column1_1\">\r\n                        <div class=\"first-part-column1\">\r\n                            <div>\r\n                                <app-afterwork-item [project]=\"projects[1]\"></app-afterwork-item>\r\n                                <app-afterwork-item [project]=\"projects[2]\"></app-afterwork-item>\r\n                            </div>\r\n                            <div class=\"row-note\">\r\n                                <div class=\"note-container\">\r\n                                    <div class=\"note-headline\"></div>\r\n                                    <div class=\"note-wraper\">\r\n                                        <div class=\"note\"></div>\r\n                                    </div>\r\n                                    <div class=\"note-content\">\r\n                                        <p style=\"font-style: italic;\" class=\"main-color\">Hi there!<br>So glad you are\r\n                                            here.\r\n                                            I\r\n                                            write\r\n                                            these not to show my experience, knowledge or the\r\n                                            same like that. I write to tell my stories. Maybe In some post, you will see\r\n                                            a\r\n                                            stupid\r\n                                            man with a silly doing. But I believe that's fine cause the mistake makes\r\n                                            experience,\r\n                                            and the experience makes a man. You will see me better day by day, and I\r\n                                            hope\r\n                                            you\r\n                                            enjoy\r\n                                            them.</p>\r\n                                    </div>\r\n                                </div>\r\n                                <app-afterwork-item [project]=\"projects[0]\" class=\"newest-topic\"></app-afterwork-item>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"first-part-column2\">\r\n                        <app-afterwork-item [project]=\"projects[3]\"></app-afterwork-item>\r\n                        <app-afterwork-item [project]=\"projects[4]\"></app-afterwork-item>\r\n                    </div>\r\n                </div>\r\n                <!-- Second part -->\r\n                <ng-container *ngIf=\"projectsMore$ | async as projectsMore;\">\r\n                    <ng-container *ngIf=\"projectsMore.length > 0\">\r\n                        <div *ngFor=\"let triple of projectsMore\" class=\"second-part\">\r\n                            <div>\r\n                                <app-afterwork-item [project]=\"triple[0]\"></app-afterwork-item>\r\n                            </div>\r\n                            <div style=\"margin-left: 10px; margin-right: 10px;\">\r\n                                <app-afterwork-item [project]=\"triple[1]\"></app-afterwork-item>\r\n                            </div>\r\n                            <div>\r\n                                <app-afterwork-item [project]=\"triple[2]\"></app-afterwork-item>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n            </div>\r\n            <div class=\"footer\">\r\n                <div id=\"footer-contact\">\r\n                    <div id=\"m-icon\">\r\n                        <a class=\"m-icon gmail\"\r\n                            href=\"https://mail.google.com/mail/?view=cm&fs=1&to=nhvu.95@gmail.com&su=HOW%20CAN%20I%20HELP%20U%3F\"\r\n                            target=\"_blank\"></a>\r\n                    </div>\r\n                    <div id=\"m-contact\">\r\n                        <h3><span class=\"fname\">VU HIEU</span><span class=\"sname\"> NGUYEN</span></h3>\r\n                        <h3 class=\"email\">nhvu.95@gmail.com</h3>\r\n                    </div>\r\n                </div>\r\n                <div id=\"footer-download-cv\">\r\n                    <div class=\"download\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "0B5F":
/*!********************************************************************!*\
  !*** ./src/app/main-screen/after-work/afterwork-item.component.ts ***!
  \********************************************************************/
/*! exports provided: AfterWorkItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterWorkItemComponent", function() { return AfterWorkItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _afterwork_item_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./afterwork-item.component.scss */ "IVvx");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let AfterWorkItemComponent = class AfterWorkItemComponent {
    constructor() { }
    ngOnInit() {
    }
};
AfterWorkItemComponent.ctorParameters = () => [];
AfterWorkItemComponent.propDecorators = {
    project: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
AfterWorkItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-afterwork-item',
        template: `
  <div *ngIf="project && project.exist" class="topic-container" >
      <div class="topic-image" style="background-image: url('{{project.image}}');">
      </div>
      <div class="topic">
          <h3 class="title">{{project.title}}</h3>
          <p class="description">
              {{project.description}}
          </p>
          <div class="topic-footer">
              <div class="date">
                  {{project.date_start}} - {{project.date_end}}
              </div>
              <div class="topic-link">
                  <a href="{{project.link}}" target="_blank">Read More</a>
              </div>
          </div>
      </div>
  </div>`,
        styles: [_afterwork_item_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], AfterWorkItemComponent);



/***/ }),

/***/ "IVvx":
/*!**********************************************************************!*\
  !*** ./src/app/main-screen/after-work/afterwork-item.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".topic-container {\n  background-color: rgba(0, 113, 123, 0.05);\n  min-height: 280px;\n  margin-bottom: 18px;\n  border: 1px solid #f29e03;\n  border-radius: 10px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.topic-image {\n  width: 100%;\n  height: 250px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-right: 10px;\n}\n\n.topic {\n  display: flex;\n  flex-direction: column;\n  height: 90%;\n  width: calc(100% - 20px);\n  padding: 10px 10px;\n}\n\n.topic .title {\n  font-size: 30px;\n  font-weight: 500;\n  line-height: 1;\n}\n\n.topic .description {\n  margin-top: 10px;\n  margin-bottom: 0px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.topic .topic-footer {\n  margin-top: auto;\n  text-align: right;\n}\n\n.topic .topic-footer .topic-link a {\n  color: #00717b !important;\n  margin-right: 10px;\n}\n\n.topic-container-xs {\n  margin-right: 0px;\n  margin-left: 0px;\n}\n\n.topic-container-xs .topic {\n  padding-right: 10px;\n}\n\n.topic-container-xs .topic .title {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZnRlcndvcmstaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtBQUZKOztBQUtBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFGSjs7QUFLQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSx3QkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBSUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRlI7O0FBSUk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtBQUZSOztBQUlJO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQUZSOztBQUlZO0VBQ0kseUJBQUE7RUFDQSxrQkFBQTtBQUZoQjs7QUFRQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFMSjs7QUFPSTtFQUNJLG1CQUFBO0FBTFI7O0FBT0k7RUFDSSxlQUFBO0FBTFIiLCJmaWxlIjoiYWZ0ZXJ3b3JrLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwic3R5bGVzL2dsb2JhbC12YXIuc2Nzc1wiO1xyXG5cclxuLnRvcGljLWNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogJG1haW4tY29sb3IsICRhbHBoYTogMC4wNSk7XHJcbiAgICBtaW4taGVpZ2h0OiAyODBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkbWFpbi1jb2xvcjI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnRvcGljLWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4udG9waWMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgfVxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcclxuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgfVxyXG4gICAgLnRvcGljLWZvb3RlciB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAudG9waWMtbGluayB7XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRtYWluLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi50b3BpYy1jb250YWluZXIteHMge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG5cclxuICAgIC50b3BpYyB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIH1cclxuICAgIC50b3BpYyAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIH1cclxufSJdfQ== */");

/***/ }),

/***/ "JNpy":
/*!**************************************************************!*\
  !*** ./src/app/main-screen/portfolio/portfolio.component.ts ***!
  \**************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_portfolio_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./portfolio.component.html */ "LvIF");
/* harmony import */ var _portfolio_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portfolio.component.scss */ "NoYr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _main_screen_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../main-screen.service */ "KdA0");






let PortfolioComponent = class PortfolioComponent {
    constructor(service) {
        this.service = service;
        this.currentNavIndex = 0;
        this.listProjects = [];
    }
    ngOnInit() {
        this.service.getProjectList().subscribe(res => {
            while (res.length > 0) {
                let chunk = res.splice(0, 2);
                this.listProjects.push(chunk);
            }
        });
    }
};
PortfolioComponent.ctorParameters = () => [
    { type: _main_screen_service__WEBPACK_IMPORTED_MODULE_4__["MainScreenService"] }
];
PortfolioComponent.propDecorators = {
    currentNavIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PortfolioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-portfolio',
        template: _raw_loader_portfolio_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_portfolio_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PortfolioComponent);



/***/ }),

/***/ "KdA0":
/*!****************************************************!*\
  !*** ./src/app/main-screen/main-screen.service.ts ***!
  \****************************************************/
/*! exports provided: MainScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainScreenService", function() { return MainScreenService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let MainScreenService = class MainScreenService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getProjectList() {
        return this.httpClient.get("/assets/configs/portfolio.json");
    }
    getBlogList() {
        return this.httpClient.get("/assets/configs/blogs.json");
    }
};
MainScreenService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MainScreenService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], MainScreenService);



/***/ }),

/***/ "LvIF":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-screen/portfolio/portfolio.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bounds\">\r\n    <div class=\"inner-bounds\">\r\n        <div class=\"content\">\r\n            <h1 class=\"header\">\r\n                <span class=\"header-sub-wrapper\"><span>#MY</span><span>PORTFOLIO</span></span>\r\n                <mat-tab-group *ngIf=\"currentNavIndex == 1\" #portfolio mat-align-tabs=\"end\" [selectedIndex]=\"3\"\r\n                    style=\"margin-left: auto;\">\r\n                    <mat-tab [disabled]='true' label=\"Frontend\"></mat-tab>\r\n                    <mat-tab [disabled]='true' label=\"Backend\"></mat-tab>\r\n                    <mat-tab [disabled]='true' label=\"Tool & App\"></mat-tab>\r\n                    <mat-tab label=\"All\"></mat-tab>\r\n                </mat-tab-group>\r\n            </h1>\r\n\r\n            <div class=\"main-content\">\r\n                <div class=\"topic-wrapper\">\r\n                    <div *ngFor=\"let pair of listProjects\" class=\"topic-container-row\">\r\n                        <app-portfolio-item [project]=\"pair[0]\" class=\"topic-container-left\"></app-portfolio-item>\r\n                        <app-portfolio-item [project]=\"pair[1]\" class=\"topic-container-right\"></app-portfolio-item>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"footer\">\r\n                <div id=\"footer-contact\">\r\n                    <div id=\"m-icon\">\r\n                        <a class=\"m-icon gmail\"\r\n                            href=\"https://mail.google.com/mail/?view=cm&fs=1&to=nhvu.95@gmail.com&su=HOW%20CAN%20I%20HELP%20U%3F\"\r\n                            target=\"_blank\"></a>\r\n                    </div>\r\n                    <div id=\"m-contact\">\r\n                        <h3><span class=\"fname\">VU HIEU</span><span class=\"sname\"> NGUYEN</span></h3>\r\n                        <h3 class=\"email\">nhvu.95@gmail.com</h3>\r\n                    </div>\r\n                </div>\r\n                <div id=\"footer-download-cv\">\r\n                    <div class=\"download\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "M819":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-screen/main/main.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-tab-group mat-align-tabs=\"center\" dynamicHeight (selectedTabChange)=\"tabChanged($event)\" [selectedIndex]=\"defaultSelect\" id=\"mainTab\">\r\n    <mat-tab label=\"ABOUT ME\"><app-hello></app-hello></mat-tab>\r\n    <mat-tab label=\"PORTFOLIO\"><app-portfolio [currentNavIndex]=\"navIndex\"></app-portfolio></mat-tab>\r\n    <mat-tab label=\"AFTER WORK\"><app-after-work [currentNavIndex]=\"navIndex\"></app-after-work></mat-tab>\r\n  </mat-tab-group>");

/***/ }),

/***/ "NoYr":
/*!****************************************************************!*\
  !*** ./src/app/main-screen/portfolio/portfolio.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".topic-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n.topic-wrapper .topic-container-row {\n  display: flex;\n  flex: 1 1 100%;\n  width: 100%;\n}\n.topic-wrapper .topic-container-row app-portfolio-item {\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-bottom: 10px;\n  max-width: calc(50% - 10px);\n}\n@media screen and (max-width: 1279px) {\n  .bounds .header {\n    flex-direction: column;\n    align-items: center;\n  }\n  .bounds .header mat-tab-group {\n    margin-left: 0px !important;\n  }\n\n  .topic-wrapper .topic-container-row {\n    flex-direction: column;\n  }\n  .topic-wrapper .topic-container-row app-portfolio-item {\n    max-width: unset !important;\n  }\n}\n@media screen and (max-width: 539px) {\n  .bounds .content .header .header-sub-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .bounds .content ::ng-deep .mat-tab-label {\n    padding: 0 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFBSjtBQUVJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBQVI7QUFDUTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBQ1o7QUFHQTtFQUVRO0lBQ0ksc0JBQUE7SUFDQSxtQkFBQTtFQURWO0VBRVU7SUFDSSwyQkFBQTtFQUFkOztFQU1NO0lBQ0ksc0JBQUE7RUFIVjtFQUlVO0lBQ0ksMkJBQUE7RUFGZDtBQUNGO0FBT0E7RUFHWTtJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLG1CQUFBO0VBUGQ7RUFTVTtJQUNJLGVBQUE7RUFQZDtBQUNGIiwiZmlsZSI6InBvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzdHlsZXMvZ2xvYmFsLXZhci5zY3NzXCI7XHJcbi50b3BpYy13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC50b3BpYy1jb250YWluZXItcm93IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXg6IDEgMSAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGFwcC1wb3J0Zm9saW8taXRlbSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xyXG4gICAgLmJvdW5kcyB7XHJcbiAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hdC10YWItZ3JvdXAge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50b3BpYy13cmFwcGVyIHtcclxuICAgICAgICAudG9waWMtY29udGFpbmVyLXJvdyB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFwcC1wb3J0Zm9saW8taXRlbSB7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUzOXB4KSB7XHJcbiAgICAuYm91bmRzIHtcclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIC5oZWFkZXIgLmhlYWRlci1zdWItd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "XbIb":
/*!******************************************************!*\
  !*** ./src/app/main-screen/main/main.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (max-width: 539px) {\n  #mainTab ::ng-deep .mat-tab-label {\n    padding: 0 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBRVE7SUFDSSxlQUFBO0VBRFY7QUFDRiIsImZpbGUiOiJtYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQ1VTVE9NIE1BVCBUQUJcclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTM5cHgpIHtcclxuICAgICNtYWluVGFiIHtcclxuICAgICAgICA6Om5nLWRlZXAgLm1hdC10YWItbGFiZWwge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "Z2zd":
/*!******************************************************************!*\
  !*** ./src/app/main-screen/after-work/after-work.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main-content {\n  max-height: -webkit-fit-content !important;\n  max-height: -moz-fit-content !important;\n  max-height: fit-content !important;\n  flex-direction: column;\n}\n.main-content .first-part {\n  display: flex;\n  flex-direction: row;\n  flex: 1 1 100%;\n}\n.main-content .first-part .first-part-column1_1 {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 100%;\n  width: 100%;\n  max-width: 66.66%;\n  margin-right: 10px;\n}\n.main-content .first-part .first-part-column1 {\n  display: flex;\n  flex-direction: row;\n  flex: 1 1 100%;\n}\n.main-content .first-part .first-part-column1 > div {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  max-width: calc(50% - 5px);\n}\n.main-content .first-part .first-part-column1 .row-note {\n  margin-left: 10px;\n}\n.main-content .first-part .first-part-column1 .row-note .note-container {\n  background-color: rgba(0, 113, 123, 0.05);\n  min-height: 230px;\n  margin-bottom: 18px;\n  border: 1px solid #f29e03;\n  border-radius: 10px;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n}\n.main-content .first-part .first-part-column1 .row-note .note-container .note {\n  width: 70px;\n  min-width: 70px;\n  height: 70px;\n  min-height: 70px;\n}\n.main-content .first-part .first-part-column1 .row-note .note-container .note-headline {\n  height: 100%;\n  width: 10px;\n  background-color: #f29e03;\n}\n.main-content .first-part .first-part-column1 .row-note .note-container .note-content {\n  width: calc(100% - 85px);\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.main-content .first-part .first-part-column1 .row-note > app-afterwork-item {\n  height: 100%;\n}\n.main-content .first-part .first-part-column1 .row-note > app-afterwork-item ::ng-deep .topic-image {\n  height: 355px;\n}\n.main-content .first-part .first-part-column1 .row-note > app-afterwork-item ::ng-deep .topic-container {\n  min-height: calc(100% - 20px);\n}\n.main-content .first-part .first-part-column1 .row-note > app-afterwork-item ::ng-deep .topic-container .topic .description {\n  -webkit-line-clamp: unset;\n}\n.main-content .first-part .first-part-column2 {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 100%;\n  width: 100%;\n  max-width: calc(33.33% - 7px);\n}\n.main-content .second-part {\n  display: flex;\n  flex: 1 1 100%;\n  flex-direction: row;\n}\n.main-content .second-part > div {\n  min-width: calc(33.33% - 7px);\n  max-width: calc(33.33% - 7px);\n}\n.main-content .topic-wrapper {\n  display: flex;\n  flex-direction: column;\n}\n.main-content .topic-wrapper .topic-container-row {\n  display: flex;\n  flex: 1 1 100%;\n  width: 100%;\n}\n.main-content .topic-wrapper .topic-container-row app-portfolio-item {\n  margin-left: 5px;\n  margin-right: 5px;\n  margin-bottom: 10px;\n}\n@media screen and (max-width: 1279px) {\n  .bounds .header {\n    flex-direction: column;\n    align-items: center;\n  }\n  .bounds .header mat-tab-group {\n    margin-left: 0px !important;\n  }\n  .bounds .main-content .first-part {\n    flex-direction: column;\n    align-items: center;\n  }\n  .bounds .main-content .first-part-column1_1 {\n    max-width: 80%;\n    margin-right: 0px;\n  }\n  .bounds .main-content .first-part-column1 {\n    flex-direction: column-reverse;\n    max-width: 100%;\n  }\n  .bounds .main-content .first-part-column1 > div {\n    max-width: 100%;\n  }\n  .bounds .main-content .first-part-column1 .row-note {\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n  .bounds .main-content .first-part-column1 .row-note .note-container {\n    min-height: 160px;\n  }\n  .bounds .main-content .first-part-column2 {\n    max-width: 80%;\n  }\n  .bounds .main-content .second-part {\n    flex-direction: column;\n    width: 100%;\n    max-width: 80%;\n    align-items: center;\n  }\n  .bounds .main-content .second-part > div {\n    margin-left: 0px !important;\n    margin-right: 0px !important;\n    max-width: 100%;\n  }\n\n  .topic-wrapper .topic-container-row {\n    flex-direction: column;\n  }\n}\n@media screen and (max-width: 539px) {\n  .bounds .content .main-content .first-part-column1_1 {\n    max-width: 95%;\n  }\n  .bounds .content .main-content .first-part-column1 .row-note .note-container {\n    min-height: 220px;\n  }\n  .bounds .content .main-content .first-part-column1 .row-note .note-container .note-content p {\n    margin-bottom: 0px;\n  }\n  .bounds .content .main-content .first-part-column1 .row-note > app-afterwork-item ::ng-deep .topic-image {\n    height: 250px;\n  }\n  .bounds .content .main-content .first-part-column1 .row-note > app-afterwork-item ::ng-deep .topic-container {\n    min-height: 280px;\n  }\n  .bounds .content .main-content .first-part-column1 .row-note > app-afterwork-item ::ng-deep .topic-container .topic .description {\n    -webkit-line-clamp: 3;\n  }\n  .bounds .content .main-content .first-part-column2, .bounds .content .main-content .second-part {\n    max-width: 95%;\n  }\n  .bounds .content .header .header-sub-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .bounds .content ::ng-deep .mat-tab-label {\n    padding: 0 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhZnRlci13b3JrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksMENBQUE7RUFBQSx1Q0FBQTtFQUFBLGtDQUFBO0VBQ0Esc0JBQUE7QUFBSjtBQUVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUFSO0FBQ1E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFDWjtBQUNRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUNaO0FBQVk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0FBRWhCO0FBQ1k7RUFDSSxpQkFBQTtBQUNoQjtBQUNnQjtFQUNJLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtBQUFwQjtBQUVvQjtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQXhCO0FBRW9CO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQUF4QjtBQUVvQjtFQUNJLHdCQUFBO0VBQ0EsMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0FBQXhCO0FBR2dCO0VBQ0ksWUFBQTtBQURwQjtBQUVvQjtFQUNJLGFBQUE7QUFBeEI7QUFFb0I7RUFDSSw2QkFBQTtBQUF4QjtBQUN3QjtFQUNJLHlCQUFBO0FBQzVCO0FBS1E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FBSFo7QUFNSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFKUjtBQUtRO0VBQ0ksNkJBQUE7RUFDQSw2QkFBQTtBQUhaO0FBT0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFMUjtBQU9RO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBTFo7QUFNWTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUpoQjtBQVVBO0VBRVE7SUFDSSxzQkFBQTtJQUNBLG1CQUFBO0VBUlY7RUFTVTtJQUNJLDJCQUFBO0VBUGQ7RUFXVTtJQUNJLHNCQUFBO0lBQ0EsbUJBQUE7RUFUZDtFQVdVO0lBQ0ksY0FBQTtJQUNBLGlCQUFBO0VBVGQ7RUFXVTtJQUNJLDhCQUFBO0lBQ0EsZUFBQTtFQVRkO0VBVWM7SUFDSSxlQUFBO0VBUmxCO0VBVWM7SUFDSSxnQkFBQTtJQUNBLGlCQUFBO0VBUmxCO0VBU2tCO0lBQ0ksaUJBQUE7RUFQdEI7RUFXVTtJQUNJLGNBQUE7RUFUZDtFQVdVO0lBQ0ksc0JBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtJQUNBLG1CQUFBO0VBVGQ7RUFVYztJQUNJLDJCQUFBO0lBQ0EsNEJBQUE7SUFDQSxlQUFBO0VBUmxCOztFQWVNO0lBQ0ksc0JBQUE7RUFaVjtBQUNGO0FBZ0JBO0VBSWdCO0lBQ0ksY0FBQTtFQWpCbEI7RUFvQmtCO0lBQ0ksaUJBQUE7RUFsQnRCO0VBb0JrQjtJQUNJLGtCQUFBO0VBbEJ0QjtFQXFCc0I7SUFDSSxhQUFBO0VBbkIxQjtFQXFCc0I7SUFDSSxpQkFBQTtFQW5CMUI7RUFvQjBCO0lBQ0kscUJBQUE7RUFsQjlCO0VBdUJjO0lBQ0ksY0FBQTtFQXJCbEI7RUF5QlU7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQXZCZDtFQXlCVTtJQUNJLGVBQUE7RUF2QmQ7QUFDRiIsImZpbGUiOiJhZnRlci13b3JrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInN0eWxlcy9nbG9iYWwtdmFyLnNjc3NcIjtcclxuLm1haW4tY29udGVudCB7XHJcbiAgICBtYXgtaGVpZ2h0OiBmaXQtY29udGVudCAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAuZmlyc3QtcGFydCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGZsZXg6IDEgMSAxMDAlO1xyXG4gICAgICAgIC5maXJzdC1wYXJ0LWNvbHVtbjFfMSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXg6IDEgMSAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2Ni42NiU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZpcnN0LXBhcnQtY29sdW1uMSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgIGZsZXg6IDEgMSAxMDAlO1xyXG4gICAgICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDUwJSAtIDVweCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5yb3ctbm90ZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgIC8vIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgIC5ub3RlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICRtYWluLWNvbG9yLCAkYWxwaGE6IDAuMDUpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDIzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJG1haW4tY29sb3IyO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAubm90ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNzBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm5vdGUtaGVhZGxpbmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI5ZTAzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAubm90ZS1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDg1cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgID4gYXBwLWFmdGVyd29yay1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgOjpuZy1kZWVwIC50b3BpYy1pbWFnZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzU1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDo6bmctZGVlcCAudG9waWMtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50b3BpYyAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiB1bnNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuZmlyc3QtcGFydC1jb2x1bW4yIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleDogMSAxIDEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMzMuMzMlIC0gN3B4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2Vjb25kLXBhcnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleDogMSAxIDEwMCU7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogY2FsYygzMy4zMyUgLSA3cHgpO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoMzMuMzMlIC0gN3B4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRvcGljLXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICAgICAgLnRvcGljLWNvbnRhaW5lci1yb3cge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4OiAxIDEgMTAwJTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGFwcC1wb3J0Zm9saW8taXRlbSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjc5cHgpIHtcclxuICAgIC5ib3VuZHMge1xyXG4gICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXQtdGFiLWdyb3VwIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgICAgLmZpcnN0LXBhcnQge1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZpcnN0LXBhcnQtY29sdW1uMV8xIHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZpcnN0LXBhcnQtY29sdW1uMSB7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnJvdy1ub3RlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIC5ub3RlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZmlyc3QtcGFydC1jb2x1bW4yIHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDogODAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZWNvbmQtcGFydCB7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICA+IGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50b3BpYy13cmFwcGVyIHtcclxuICAgICAgICAudG9waWMtY29udGFpbmVyLXJvdyB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MzlweCkge1xyXG4gICAgLmJvdW5kcyB7XHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAubWFpbi1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIC5maXJzdC1wYXJ0LWNvbHVtbjFfMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZmlyc3QtcGFydC1jb2x1bW4xIHtcclxuICAgICAgICAgICAgICAgICAgICAucm93LW5vdGUgLm5vdGUtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5yb3ctbm90ZSAubm90ZS1jb250YWluZXIgLm5vdGUtY29udGVudCBwIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAucm93LW5vdGUgPiBhcHAtYWZ0ZXJ3b3JrLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA6Om5nLWRlZXAgLnRvcGljLWltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgOjpuZy1kZWVwIC50b3BpYy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMjgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAudG9waWMgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZmlyc3QtcGFydC1jb2x1bW4yLCAuc2Vjb25kLXBhcnR7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA5NSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5oZWFkZXIgLmhlYWRlci1zdWItd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "ZnMm":
/*!****************************************************************!*\
  !*** ./src/app/main-screen/after-work/after-work.component.ts ***!
  \****************************************************************/
/*! exports provided: AfterWorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterWorkComponent", function() { return AfterWorkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_after_work_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./after-work.component.html */ "/KT2");
/* harmony import */ var _after_work_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./after-work.component.scss */ "Z2zd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @scullyio/ng-lib */ "sbAP");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _main_screen_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../main-screen.service */ "KdA0");








let AfterWorkComponent = class AfterWorkComponent {
    constructor(service, scullyService) {
        this.service = service;
        this.scullyService = scullyService;
        this.currentNavIndex = 0;
        this.projects$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
        this.projectsMore$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])([]);
    }
    ngOnInit() {
        let links$ = this.scullyService.allRoutes$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(scullyRoutes => scullyRoutes.filter(scullyRoute => scullyRoute.route.startsWith("/blog"))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["share"])());
        this.projects$ = links$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(links => links.slice(0, 6)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(links => this.scullyRouteTopProject(links)));
        this.projectsMore$ = links$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(links => links.slice(6)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(links => this.scullyRouteTopProject(links)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(projects => {
            let projs = projects;
            let tripleProj = [];
            while (true) {
                let takeData = projs.splice(0, 3);
                if (takeData.length == 0) {
                    break;
                }
                for (let i = 0; i < 3 - takeData.length; i++) {
                    takeData.push({ exist: false });
                }
                tripleProj.push(takeData);
            }
            return tripleProj;
        }));
    }
    scullyRouteTopProject(scullyRoutes) {
        return scullyRoutes.map(scullyRoute => {
            return {
                title: scullyRoute.title.replace("<br>", " "),
                image: scullyRoute.image,
                description: scullyRoute.description,
                date_start: scullyRoute.date_start,
                date_end: scullyRoute.date_end,
                link: scullyRoute.route,
                exist: scullyRoute.published
            };
        });
    }
};
AfterWorkComponent.ctorParameters = () => [
    { type: _main_screen_service__WEBPACK_IMPORTED_MODULE_7__["MainScreenService"] },
    { type: _scullyio_ng_lib__WEBPACK_IMPORTED_MODULE_4__["ScullyRoutesService"] }
];
AfterWorkComponent.propDecorators = {
    currentNavIndex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
AfterWorkComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-after-work',
        template: _raw_loader_after_work_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_after_work_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AfterWorkComponent);



/***/ }),

/***/ "cGa3":
/*!********************************************************!*\
  !*** ./src/app/main-screen/hello/hello.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bounds .main-content .image-container {\n  display: flex;\n  flex: 1 1 100%;\n  height: 100%;\n  width: 100%;\n  max-width: 30%;\n  flex-direction: column;\n  margin-left: 30px;\n  margin-right: 30px;\n}\n.bounds .main-content .image-container .ava {\n  margin-bottom: 2rem;\n}\n.bounds .main-content .image-container .ava .ava-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.bounds .main-content .image-container .ava .ava-container .avatar {\n  border-radius: 50%;\n  background-color: #c4c4c4;\n  width: 300px;\n  height: 300px;\n  border: 3px solid #00717b;\n  background-image: url(\"https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/139663994_2740155776249913_4875674446048621486_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ftkX2cvVE-wAX_TR7N_&tn=2nvC_Nrx0Gp4vWzc&_nc_ht=scontent.fhan14-2.fna&oh=ee1997af12d081058dc40f6f714fb20f&oe=61542B62\");\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.bounds .main-content .image-container .name {\n  text-align: center;\n}\n.bounds .main-content .image-container .name .first-name {\n  color: #00717b !important;\n}\n.bounds .main-content .image-container .name h2 {\n  font-weight: 400;\n}\n.bounds .main-content .image-container .name .role {\n  font-weight: 300;\n}\n.bounds .main-content .image-container .icon-container {\n  display: flex;\n  flex-direction: row;\n  flex: 1 1 100%;\n  justify-content: center;\n}\n.bounds .main-content .image-container .icon-container > div > div {\n  width: 50px;\n  min-width: 50px;\n  height: 50px;\n  min-height: 50px;\n  margin: 10px;\n}\n@media screen and (max-width: 1279px) {\n  .main-content .image-container {\n    max-width: 100% !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWxsby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJUTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSFo7QUFLWTtFQUNJLG1CQUFBO0FBSGhCO0FBSWdCO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUZwQjtBQUdvQjtFQUNJLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsaVNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBRHhCO0FBTVk7RUFVSSxrQkFBQTtBQWJoQjtBQUlnQjtFQUNJLHlCQUFBO0FBRnBCO0FBSWdCO0VBQ0ksZ0JBQUE7QUFGcEI7QUFJZ0I7RUFDSSxnQkFBQTtBQUZwQjtBQU9ZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBTGhCO0FBT2dCO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBTHBCO0FBWUE7RUFFUTtJQUNJLDBCQUFBO0VBVlY7QUFDRiIsImZpbGUiOiJoZWxsby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzdHlsZXMvZ2xvYmFsLXZhci5zY3NzXCI7XHJcblxyXG4uYm91bmRzIHtcclxuICAgIC5tYWluLWNvbnRlbnQge1xyXG4gICAgICAgIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4OiAxIDEgMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcblxyXG4gICAgICAgICAgICAuYXZhIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgICAgICAgICAuYXZhLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAuYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5Ni4wMDAwMDM1MTY2NzQwNCwgMTk2LjAwMDAwMzUxNjY3NDA0LCAxOTYuMDAwMDAzNTE2Njc0MDQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICRtYWluLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3Njb250ZW50LmZoYW4xNC0yLmZuYS5mYmNkbi5uZXQvdi90MS42NDM1LTkvMTM5NjYzOTk0XzI3NDAxNTU3NzYyNDk5MTNfNDg3NTY3NDQ0NjA0ODYyMTQ4Nl9uLmpwZz9fbmNfY2F0PTExMSZjY2I9MS01Jl9uY19zaWQ9MDljYmZlJl9uY19vaGM9ZnRrWDJjdlZFLXdBWF9UUjdOXyZ0bj0ybnZDX05yeDBHcDR2V3pjJl9uY19odD1zY29udGVudC5maGFuMTQtMi5mbmEmb2g9ZWUxOTk3YWYxMmQwODEwNThkYzQwZjZmNzE0ZmIyMGYmb2U9NjE1NDJCNjJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgICAgICAuZmlyc3QtbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRtYWluLWNvbG9yICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yb2xlIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAuaWNvbi1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDEgMTAwJTtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgLy8gVGhlIGljb24gYmVsbG93IGF2YXRhclxyXG4gICAgICAgICAgICAgICAgPiBkaXYgPiBkaXYge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyNzlweCkge1xyXG4gICAgLm1haW4tY29udGVudCB7XHJcbiAgICAgICAgLmltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "cOjA":
/*!***********************************************************!*\
  !*** ./src/app/main-screen/main-screen-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MainRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainRoutingModule", function() { return MainRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/main.component */ "nMcE");




const routes = [
    { path: '', component: _main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] }
];
let MainRoutingModule = class MainRoutingModule {
};
MainRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MainRoutingModule);



/***/ }),

/***/ "m5AT":
/*!*******************************************************************!*\
  !*** ./src/app/main-screen/portfolio/portfolio-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: PortfolioItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioItemComponent", function() { return PortfolioItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _portfolio_item_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portfolio-item.component.scss */ "tsyz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let PortfolioItemComponent = class PortfolioItemComponent {
    constructor() { }
    ngOnInit() {
    }
};
PortfolioItemComponent.ctorParameters = () => [];
PortfolioItemComponent.propDecorators = {
    project: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }]
};
PortfolioItemComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-portfolio-item',
        template: `
  <div *ngIf="project" [ngClass]="project.exist ? 'topic-container' : 'topic-container topic-container-invisible'"
                     [ngClass.xs]="project.exist ? 'topic-container  topic-container-xs': 'topic-container-hiden'" >
    <ng-container *ngIf="project.exist; then existCase else unExist"></ng-container>
    <ng-template #existCase>
      <div class="topic-image" style="background-image: url('{{project.image}}');">
        </div>
        <div class="topic">
          <h3 class="title">{{project.title}}</h3>
          <p class="description">
              {{project.description}}
          </p>
          <div class="topic-footer">
              <div class="date">
                  {{project.date_start}} - {{project.date_end}}
              </div>
              <div class="topic-link">
                  <a href="{{project.link}}" target="_blank">Link</a>
                  <a href="{{project.link_source}}" target="_blank">Source</a>
                  <a href="{{project.guide}}" target="_blank">Guide</a>
              </div>
          </div>
        </div>
    </ng-template>
    <ng-template #unExist>
      <div class="update-next-time">
        <div class="note-undone"></div>
      </div>
    </ng-template>
  </div>`,
        styles: [_portfolio_item_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
    })
], PortfolioItemComponent);



/***/ }),

/***/ "nMcE":
/*!****************************************************!*\
  !*** ./src/app/main-screen/main/main.component.ts ***!
  \****************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_main_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./main.component.html */ "M819");
/* harmony import */ var _main_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.component.scss */ "XbIb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let MainComponent = class MainComponent {
    constructor(route, router) {
        this.route = route;
        this.router = router;
        this.navIndex = 0;
        this.defaultSelect = 0;
    }
    ngOnInit() {
        console.log('WINDOW', window);
        let param = this.route.snapshot.queryParams;
        if (param && !isNaN(parseInt(param['index']))) {
            this.defaultSelect = parseInt(param['index']);
            this.router.navigate([], {
                queryParams: {
                    'index': null
                },
                queryParamsHandling: 'merge'
            });
        }
    }
    tabChanged(tabChangeEvent) {
        this.navIndex = tabChangeEvent.index;
    }
};
MainComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
MainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-main',
        template: _raw_loader_main_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_main_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MainComponent);



/***/ }),

/***/ "tsyz":
/*!*********************************************************************!*\
  !*** ./src/app/main-screen/portfolio/portfolio-item.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".topic-container {\n  background-color: rgba(0, 113, 123, 0.05);\n  min-height: 170px;\n  margin-bottom: 18px;\n  border: 1px solid #f29e03;\n  border-radius: 10px;\n  overflow: hidden;\n  display: flex;\n}\n\n.topic-image {\n  width: 250px;\n  height: 170px;\n  background-repeat: no-repeat;\n  background-size: cover;\n  margin-right: 10px;\n}\n\n.topic {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: calc(100%);\n  padding-right: 20px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n\n.topic .title {\n  font-size: 30px;\n  font-weight: 500;\n}\n\n.topic .description {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n\n.topic .topic-footer {\n  margin-top: auto;\n}\n\n.topic .topic-footer .topic-link a {\n  color: #00717b !important;\n  margin-right: 10px;\n}\n\n.topic-container-invisible {\n  visibility: hidden;\n}\n\n.topic-container-hiden {\n  display: none !important;\n}\n\n.update-next-time {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: center;\n}\n\n.update-next-time div {\n  margin: auto;\n}\n\n@media screen and (max-width: 959px) {\n  .topic-container {\n    flex-direction: column;\n  }\n  .topic-container .topic-image {\n    width: 100%;\n  }\n  .topic-container .topic {\n    width: calc(100% - 20px);\n    padding-left: 10px;\n  }\n\n  .topic-container-invisible {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwb3J0Zm9saW8taXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUVBLGFBQUE7QUFGSjs7QUFLQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFGSjs7QUFHSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQURSOztBQUdJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7QUFEUjs7QUFHSTtFQUNJLGdCQUFBO0FBRFI7O0FBR1k7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FBRGhCOztBQU9BO0VBQ0ksa0JBQUE7QUFKSjs7QUFNQTtFQUNJLHdCQUFBO0FBSEo7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFGSjs7QUFHSTtFQUNJLFlBQUE7QUFEUjs7QUFLQTtFQUNJO0lBQ0ksc0JBQUE7RUFGTjtFQUdNO0lBQ0ksV0FBQTtFQURWO0VBR007SUFDSSx3QkFBQTtJQUNBLGtCQUFBO0VBRFY7O0VBSUU7SUFDSSxhQUFBO0VBRE47QUFDRiIsImZpbGUiOiJwb3J0Zm9saW8taXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJzdHlsZXMvZ2xvYmFsLXZhci5zY3NzXCI7XHJcblxyXG4udG9waWMtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAkbWFpbi1jb2xvciwgJGFscGhhOiAwLjA1KTtcclxuICAgIG1pbi1oZWlnaHQ6IDE3MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICRtYWluLWNvbG9yMjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi50b3BpYy1pbWFnZSB7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi50b3BpYyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUpO1xyXG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDM7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIH1cclxuICAgIC50b3BpYy1mb290ZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICAgICAgLnRvcGljLWxpbmsge1xyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkbWFpbi1jb2xvciAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4udG9waWMtY29udGFpbmVyLWludmlzaWJsZSB7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLnRvcGljLWNvbnRhaW5lci1oaWRlbiB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLnVwZGF0ZS1uZXh0LXRpbWUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGl2IHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1OXB4KSB7XHJcbiAgICAudG9waWMtY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIC50b3BpYy1pbWFnZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudG9waWMge1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudG9waWMtY29udGFpbmVyLWludmlzaWJsZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "v+OB":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-screen/hello/hello.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bounds\">\r\n    <div class=\"inner-bounds\">\r\n        <div class=\"content\">\r\n            <h1 class=\"header\">\r\n                <span>#ALL</span><span>ABOUT ME</span>\r\n            </h1>\r\n            <div class=\"main-content\">\r\n                <div class=\"image-container\">\r\n                    <div class=\"ava\">\r\n                        <div class=\"ava-container\">\r\n                            <div class=\"avatar\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"name\">\r\n                        <h2><span class=\"first-name\">VU HIEU </span><span>NGUYEN</span></h2>\r\n                        <h3><span class=\"role\">SOFTWARE ENGINEER</span></h3>\r\n                    </div>\r\n                    <div class=\"icon\">\r\n                        <div class=\"icon-container\">\r\n                            <div></div>\r\n                            <div>\r\n                                <div class=\"facebook\"></div>\r\n                            </div>\r\n                            <div>\r\n                                <div class=\"linkedin\"></div>\r\n                            </div>\r\n                            <div>\r\n                                <div class=\"github\"></div>\r\n                            </div>\r\n                            <div>\r\n                                <div class=\"cclaim\"></div>\r\n                            </div>\r\n                            <div></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"introduce\">\r\n                    <p>\r\n                        My name is <span class=\"strong\"><span class=\"main-color\">Vu Hieu</span><span> Nguyen</span>\r\n                        </span>,\r\n                        I am 26 years old. I work as a Software Engineer.\r\n                        Up to now, I have done this job for 3 years. I was married and got a lovely boy. As the other\r\n                        software engineer, my hobby is the technology and video game. Moreover, I also have an interest\r\n                        in\r\n                        art and design. Sometimes, when everything becomes hard (because of bug and issue with stuck), I\r\n                        draw, design, or make some art to take the balance.\r\n                    </p>\r\n                    <p>\r\n                        <span class=\"strong\">I have a big 'DREAM'</span> to become a piece of a big thing or building it\r\n                        by\r\n                        myself. I don't clear about\r\n                        it. I have no idea, I don't think and try looking for it.\r\n                    </p>\r\n\r\n                    <p>\r\n                        <span class=\"strong itatic main-color\">\"What is coming will come and we'll meet it when it\r\n                            does\".</span>\r\n                        <br>\r\n                        <span class=\"italic\">- J.K. Rowling -</span>\r\n                    </p>\r\n                    <p>\r\n                        So what I can do is try my best, keep learning from the good ones, look what they do, and\r\n                        waiting\r\n                        for an opportunity. The opportunity will come for who prepared.\r\n                    </p>\r\n                    <p>\r\n                        <span class=\"strong\">If you ask me about 'GOAL'</span>, my GOAL is to make the dream become\r\n                        true.\r\n                        But I know, to catch my dream.\r\n                        I must climb on the top of the Pyramid. Only on top, I can see the opportunity, and touch on it.\r\n                        This isn't my last target, but It's my first step.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"footer\">\r\n                <div id=\"footer-contact\">\r\n                    <div id=\"m-icon\">\r\n                        <a class=\"m-icon gmail\"\r\n                            href=\"https://mail.google.com/mail/?view=cm&fs=1&to=nhvu.95@gmail.com&su=HOW%20CAN%20I%20HELP%20U%3F\"\r\n                            target=\"_blank\"></a>\r\n                    </div>\r\n                    <div id=\"m-contact\">\r\n                        <h3><span class=\"fname\">VU HIEU</span><span class=\"sname\"> NGUYEN</span></h3>\r\n                        <h3 class=\"email\">nhvu.95@gmail.com</h3>\r\n                    </div>\r\n                </div>\r\n                <div id=\"footer-download-cv\">\r\n                    <div class=\"download\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "zdOv":
/*!******************************************************!*\
  !*** ./src/app/main-screen/hello/hello.component.ts ***!
  \******************************************************/
/*! exports provided: HelloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloComponent", function() { return HelloComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_hello_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./hello.component.html */ "v+OB");
/* harmony import */ var _hello_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hello.component.scss */ "cGa3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HelloComponent = class HelloComponent {
    constructor() { }
    ngOnInit() {
    }
};
HelloComponent.ctorParameters = () => [];
HelloComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-hello',
        template: _raw_loader_hello_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_hello_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HelloComponent);



/***/ }),

/***/ "zkoq":
/*!***************************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js ***!
  \***************************************************************************/
/*! exports provided: MatGridAvatarCssMatStyler, MatGridList, MatGridListModule, MatGridTile, MatGridTileFooterCssMatStyler, MatGridTileHeaderCssMatStyler, MatGridTileText, ɵTileCoordinator, ɵangular_material_src_material_grid_list_grid_list_a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridAvatarCssMatStyler", function() { return MatGridAvatarCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridList", function() { return MatGridList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridListModule", function() { return MatGridListModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridTile", function() { return MatGridTile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridTileFooterCssMatStyler", function() { return MatGridTileFooterCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridTileHeaderCssMatStyler", function() { return MatGridTileHeaderCssMatStyler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatGridTileText", function() { return MatGridTileText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵTileCoordinator", function() { return ɵTileCoordinator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵangular_material_src_material_grid_list_grid_list_a", function() { return MAT_GRID_LIST; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/coercion */ "8LU1");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/bidi */ "cH1L");





/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
 * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
 * because the tiles can have a rowspan.
 *
 * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
 * large enough to accommodate it so that the tiles still render in the same order in which they
 * are given.
 *
 * The basis of the algorithm is the use of an array to track the already placed tiles. Each
 * element of the array corresponds to a column, and the value indicates how many cells in that
 * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
 * decrements each value in the tracking array (indicating that the column is one cell closer to
 * being free).
 *
 * @docs-private
 */



const _c0 = ["*"];
const _c1 = [[["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], [["", "mat-line", ""], ["", "matLine", ""]], "*"];
const _c2 = ["[mat-grid-avatar], [matGridAvatar]", "[mat-line], [matLine]", "*"];
const _c3 = ".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n";
class TileCoordinator {
    constructor() {
        /** Index at which the search for the next gap will start. */
        this.columnIndex = 0;
        /** The current row index. */
        this.rowIndex = 0;
    }
    /** Gets the total number of rows occupied by tiles */
    get rowCount() { return this.rowIndex + 1; }
    /**
     * Gets the total span of rows occupied by tiles.
     * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2.
     */
    get rowspan() {
        const lastRowMax = Math.max(...this.tracker);
        // if any of the tiles has a rowspan that pushes it beyond the total row count,
        // add the difference to the rowcount
        return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
    }
    /**
     * Updates the tile positions.
     * @param numColumns Amount of columns in the grid.
     * @param tiles Tiles to be positioned.
     */
    update(numColumns, tiles) {
        this.columnIndex = 0;
        this.rowIndex = 0;
        this.tracker = new Array(numColumns);
        this.tracker.fill(0, 0, this.tracker.length);
        this.positions = tiles.map(tile => this._trackTile(tile));
    }
    /** Calculates the row and col position of a tile. */
    _trackTile(tile) {
        // Find a gap large enough for this tile.
        const gapStartIndex = this._findMatchingGap(tile.colspan);
        // Place tile in the resulting gap.
        this._markTilePosition(gapStartIndex, tile);
        // The next time we look for a gap, the search will start at columnIndex, which should be
        // immediately after the tile that has just been placed.
        this.columnIndex = gapStartIndex + tile.colspan;
        return new TilePosition(this.rowIndex, gapStartIndex);
    }
    /** Finds the next available space large enough to fit the tile. */
    _findMatchingGap(tileCols) {
        if (tileCols > this.tracker.length && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`mat-grid-list: tile with colspan ${tileCols} is wider than ` +
                `grid with cols="${this.tracker.length}".`);
        }
        // Start index is inclusive, end index is exclusive.
        let gapStartIndex = -1;
        let gapEndIndex = -1;
        // Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.
        do {
            // If we've reached the end of the row, go to the next row.
            if (this.columnIndex + tileCols > this.tracker.length) {
                this._nextRow();
                gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                gapEndIndex = this._findGapEndIndex(gapStartIndex);
                continue;
            }
            gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
            // If there are no more empty spaces in this row at all, move on to the next row.
            if (gapStartIndex == -1) {
                this._nextRow();
                gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
                gapEndIndex = this._findGapEndIndex(gapStartIndex);
                continue;
            }
            gapEndIndex = this._findGapEndIndex(gapStartIndex);
            // If a gap large enough isn't found, we want to start looking immediately after the current
            // gap on the next iteration.
            this.columnIndex = gapStartIndex + 1;
            // Continue iterating until we find a gap wide enough for this tile. Since gapEndIndex is
            // exclusive, gapEndIndex is 0 means we didn't find a gap and should continue.
        } while ((gapEndIndex - gapStartIndex < tileCols) || (gapEndIndex == 0));
        // If we still didn't manage to find a gap, ensure that the index is
        // at least zero so the tile doesn't get pulled out of the grid.
        return Math.max(gapStartIndex, 0);
    }
    /** Move "down" to the next row. */
    _nextRow() {
        this.columnIndex = 0;
        this.rowIndex++;
        // Decrement all spaces by one to reflect moving down one row.
        for (let i = 0; i < this.tracker.length; i++) {
            this.tracker[i] = Math.max(0, this.tracker[i] - 1);
        }
    }
    /**
     * Finds the end index (exclusive) of a gap given the index from which to start looking.
     * The gap ends when a non-zero value is found.
     */
    _findGapEndIndex(gapStartIndex) {
        for (let i = gapStartIndex + 1; i < this.tracker.length; i++) {
            if (this.tracker[i] != 0) {
                return i;
            }
        }
        // The gap ends with the end of the row.
        return this.tracker.length;
    }
    /** Update the tile tracker to account for the given tile in the given space. */
    _markTilePosition(start, tile) {
        for (let i = 0; i < tile.colspan; i++) {
            this.tracker[start + i] = tile.rowspan;
        }
    }
}
/**
 * Simple data structure for tile position (row, col).
 * @docs-private
 */
class TilePosition {
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Injection token used to provide a grid list to a tile and to avoid circular imports.
 * @docs-private
 */
const MAT_GRID_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_GRID_LIST');

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatGridTile {
    constructor(_element, _gridList) {
        this._element = _element;
        this._gridList = _gridList;
        this._rowspan = 1;
        this._colspan = 1;
    }
    /** Amount of rows that the grid tile takes up. */
    get rowspan() { return this._rowspan; }
    set rowspan(value) { this._rowspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)); }
    /** Amount of columns that the grid tile takes up. */
    get colspan() { return this._colspan; }
    set colspan(value) { this._colspan = Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)); }
    /**
     * Sets the style of the grid-tile element.  Needs to be set manually to avoid
     * "Changed after checked" errors that would occur with HostBinding.
     */
    _setStyle(property, value) {
        this._element.nativeElement.style[property] = value;
    }
}
MatGridTile.ɵfac = function MatGridTile_Factory(t) { return new (t || MatGridTile)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MAT_GRID_LIST, 8)); };
MatGridTile.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatGridTile, selectors: [["mat-grid-tile"]], hostAttrs: [1, "mat-grid-tile"], hostVars: 2, hostBindings: function MatGridTile_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("rowspan", ctx.rowspan)("colspan", ctx.colspan);
    } }, inputs: { rowspan: "rowspan", colspan: "colspan" }, exportAs: ["matGridTile"], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "mat-figure"]], template: function MatGridTile_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "figure", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [_c3], encapsulation: 2, changeDetection: 0 });
MatGridTile.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [MAT_GRID_LIST,] }] }
];
MatGridTile.propDecorators = {
    rowspan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    colspan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTile, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-grid-tile',
                exportAs: 'matGridTile',
                host: {
                    'class': 'mat-grid-tile',
                    // Ensures that the "rowspan" and "colspan" input value is reflected in
                    // the DOM. This is needed for the grid-tile harness.
                    '[attr.rowspan]': 'rowspan',
                    '[attr.colspan]': 'colspan'
                },
                template: "<!-- TODO(kara): Revisit why this is a figure.-->\n<figure class=\"mat-figure\">\n  <ng-content></ng-content>\n</figure>",
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [MAT_GRID_LIST]
            }] }]; }, { rowspan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], colspan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class MatGridTileText {
    constructor(_element) {
        this._element = _element;
    }
    ngAfterContentInit() {
        Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["setLines"])(this._lines, this._element);
    }
}
MatGridTileText.ɵfac = function MatGridTileText_Factory(t) { return new (t || MatGridTileText)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
MatGridTileText.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatGridTileText, selectors: [["mat-grid-tile-header"], ["mat-grid-tile-footer"]], contentQueries: function MatGridTileText_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._lines = _t);
    } }, ngContentSelectors: _c2, decls: 4, vars: 0, consts: [[1, "mat-grid-list-text"]], template: function MatGridTileText_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](3, 2);
    } }, encapsulation: 2, changeDetection: 0 });
MatGridTileText.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
];
MatGridTileText.propDecorators = {
    _lines: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], { descendants: true },] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileText, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-grid-tile-header, mat-grid-tile-footer',
                template: "<ng-content select=\"[mat-grid-avatar], [matGridAvatar]\"></ng-content>\n<div class=\"mat-grid-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div>\n<ng-content></ng-content>\n",
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { _lines: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"], { descendants: true }]
        }] }); })();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
class MatGridAvatarCssMatStyler {
}
MatGridAvatarCssMatStyler.ɵfac = function MatGridAvatarCssMatStyler_Factory(t) { return new (t || MatGridAvatarCssMatStyler)(); };
MatGridAvatarCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatGridAvatarCssMatStyler, selectors: [["", "mat-grid-avatar", ""], ["", "matGridAvatar", ""]], hostAttrs: [1, "mat-grid-avatar"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridAvatarCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[mat-grid-avatar], [matGridAvatar]',
                host: { 'class': 'mat-grid-avatar' }
            }]
    }], null, null); })();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
class MatGridTileHeaderCssMatStyler {
}
MatGridTileHeaderCssMatStyler.ɵfac = function MatGridTileHeaderCssMatStyler_Factory(t) { return new (t || MatGridTileHeaderCssMatStyler)(); };
MatGridTileHeaderCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatGridTileHeaderCssMatStyler, selectors: [["mat-grid-tile-header"]], hostAttrs: [1, "mat-grid-tile-header"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileHeaderCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-grid-tile-header',
                host: { 'class': 'mat-grid-tile-header' }
            }]
    }], null, null); })();
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * @docs-private
 */
class MatGridTileFooterCssMatStyler {
}
MatGridTileFooterCssMatStyler.ɵfac = function MatGridTileFooterCssMatStyler_Factory(t) { return new (t || MatGridTileFooterCssMatStyler)(); };
MatGridTileFooterCssMatStyler.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatGridTileFooterCssMatStyler, selectors: [["mat-grid-tile-footer"]], hostAttrs: [1, "mat-grid-tile-footer"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridTileFooterCssMatStyler, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: 'mat-grid-tile-footer',
                host: { 'class': 'mat-grid-tile-footer' }
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * RegExp that can be used to check whether a value will
 * be allowed inside a CSS `calc()` expression.
 */
const cssCalcAllowedValue = /^-?\d+((\.\d+)?[A-Za-z%$]?)+$/;
/**
 * Sets the style properties for an individual tile, given the position calculated by the
 * Tile Coordinator.
 * @docs-private
 */
class TileStyler {
    constructor() {
        this._rows = 0;
        this._rowspan = 0;
    }
    /**
     * Adds grid-list layout info once it is available. Cannot be processed in the constructor
     * because these properties haven't been calculated by that point.
     *
     * @param gutterSize Size of the grid's gutter.
     * @param tracker Instance of the TileCoordinator.
     * @param cols Amount of columns in the grid.
     * @param direction Layout direction of the grid.
     */
    init(gutterSize, tracker, cols, direction) {
        this._gutterSize = normalizeUnits(gutterSize);
        this._rows = tracker.rowCount;
        this._rowspan = tracker.rowspan;
        this._cols = cols;
        this._direction = direction;
    }
    /**
     * Computes the amount of space a single 1x1 tile would take up (width or height).
     * Used as a basis for other calculations.
     * @param sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
     * @param gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
     * @return The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
     */
    getBaseTileSize(sizePercent, gutterFraction) {
        // Take the base size percent (as would be if evenly dividing the size between cells),
        // and then subtracting the size of one gutter. However, since there are no gutters on the
        // edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
        // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
        // edge evenly among the cells).
        return `(${sizePercent}% - (${this._gutterSize} * ${gutterFraction}))`;
    }
    /**
     * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
     * @param offset Number of tiles that have already been rendered in the row/column.
     * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @return Position of the tile as a CSS calc() expression.
     */
    getTilePosition(baseSize, offset) {
        // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
        // row/column (offset).
        return offset === 0 ? '0' : calc(`(${baseSize} + ${this._gutterSize}) * ${offset}`);
    }
    /**
     * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
     * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @param span The tile's rowspan or colspan.
     * @return Size of the tile as a CSS calc() expression.
     */
    getTileSize(baseSize, span) {
        return `(${baseSize} * ${span}) + (${span - 1} * ${this._gutterSize})`;
    }
    /**
     * Sets the style properties to be applied to a tile for the given row and column index.
     * @param tile Tile to which to apply the styling.
     * @param rowIndex Index of the tile's row.
     * @param colIndex Index of the tile's column.
     */
    setStyle(tile, rowIndex, colIndex) {
        // Percent of the available horizontal space that one column takes up.
        let percentWidthPerTile = 100 / this._cols;
        // Fraction of the vertical gutter size that each column takes up.
        // For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.
        let gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
        this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
        this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
    }
    /** Sets the horizontal placement of the tile in the list. */
    setColStyles(tile, colIndex, percentWidth, gutterWidth) {
        // Base horizontal size of a column.
        let baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth);
        // The width and horizontal position of each tile is always calculated the same way, but the
        // height and vertical position depends on the rowMode.
        let side = this._direction === 'rtl' ? 'right' : 'left';
        tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));
        tile._setStyle('width', calc(this.getTileSize(baseTileWidth, tile.colspan)));
    }
    /**
     * Calculates the total size taken up by gutters across one axis of a list.
     */
    getGutterSpan() {
        return `${this._gutterSize} * (${this._rowspan} - 1)`;
    }
    /**
     * Calculates the total size taken up by tiles across one axis of a list.
     * @param tileHeight Height of the tile.
     */
    getTileSpan(tileHeight) {
        return `${this._rowspan} * ${this.getTileSize(tileHeight, 1)}`;
    }
    /**
     * Calculates the computed height and returns the correct style property to set.
     * This method can be implemented by each type of TileStyler.
     * @docs-private
     */
    getComputedHeight() { return null; }
}
/**
 * This type of styler is instantiated when the user passes in a fixed row height.
 * Example `<mat-grid-list cols="3" rowHeight="100px">`
 * @docs-private
 */
class FixedTileStyler extends TileStyler {
    constructor(fixedRowHeight) {
        super();
        this.fixedRowHeight = fixedRowHeight;
    }
    init(gutterSize, tracker, cols, direction) {
        super.init(gutterSize, tracker, cols, direction);
        this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);
        if (!cssCalcAllowedValue.test(this.fixedRowHeight) &&
            (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`Invalid value "${this.fixedRowHeight}" set as rowHeight.`);
        }
    }
    setRowStyles(tile, rowIndex) {
        tile._setStyle('top', this.getTilePosition(this.fixedRowHeight, rowIndex));
        tile._setStyle('height', calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
    }
    getComputedHeight() {
        return [
            'height', calc(`${this.getTileSpan(this.fixedRowHeight)} + ${this.getGutterSpan()}`)
        ];
    }
    reset(list) {
        list._setListStyle(['height', null]);
        if (list._tiles) {
            list._tiles.forEach(tile => {
                tile._setStyle('top', null);
                tile._setStyle('height', null);
            });
        }
    }
}
/**
 * This type of styler is instantiated when the user passes in a width:height ratio
 * for the row height.  Example `<mat-grid-list cols="3" rowHeight="3:1">`
 * @docs-private
 */
class RatioTileStyler extends TileStyler {
    constructor(value) {
        super();
        this._parseRatio(value);
    }
    setRowStyles(tile, rowIndex, percentWidth, gutterWidth) {
        let percentHeightPerTile = percentWidth / this.rowHeightRatio;
        this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth);
        // Use padding-top and margin-top to maintain the given aspect ratio, as
        // a percentage-based value for these properties is applied versus the *width* of the
        // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties
        tile._setStyle('marginTop', this.getTilePosition(this.baseTileHeight, rowIndex));
        tile._setStyle('paddingTop', calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
    }
    getComputedHeight() {
        return [
            'paddingBottom', calc(`${this.getTileSpan(this.baseTileHeight)} + ${this.getGutterSpan()}`)
        ];
    }
    reset(list) {
        list._setListStyle(['paddingBottom', null]);
        list._tiles.forEach(tile => {
            tile._setStyle('marginTop', null);
            tile._setStyle('paddingTop', null);
        });
    }
    _parseRatio(value) {
        const ratioParts = value.split(':');
        if (ratioParts.length !== 2 && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`mat-grid-list: invalid ratio given for row-height: "${value}"`);
        }
        this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
    }
}
/**
 * This type of styler is instantiated when the user selects a "fit" row height mode.
 * In other words, the row height will reflect the total height of the container divided
 * by the number of rows.  Example `<mat-grid-list cols="3" rowHeight="fit">`
 *
 * @docs-private
 */
class FitTileStyler extends TileStyler {
    setRowStyles(tile, rowIndex) {
        // Percent of the available vertical space that one row takes up.
        let percentHeightPerTile = 100 / this._rowspan;
        // Fraction of the horizontal gutter size that each column takes up.
        let gutterHeightPerTile = (this._rows - 1) / this._rows;
        // Base vertical size of a column.
        let baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);
        tile._setStyle('top', this.getTilePosition(baseTileHeight, rowIndex));
        tile._setStyle('height', calc(this.getTileSize(baseTileHeight, tile.rowspan)));
    }
    reset(list) {
        if (list._tiles) {
            list._tiles.forEach(tile => {
                tile._setStyle('top', null);
                tile._setStyle('height', null);
            });
        }
    }
}
/** Wraps a CSS string in a calc function */
function calc(exp) {
    return `calc(${exp})`;
}
/** Appends pixels to a CSS string if no units are given. */
function normalizeUnits(value) {
    return value.match(/([A-Za-z%]+)$/) ? value : `${value}px`;
}

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// TODO(kara): Conditional (responsive) column count / row size.
// TODO(kara): Re-layout on window resize / media change (debounced).
// TODO(kara): gridTileHeader and gridTileFooter.
const MAT_FIT_MODE = 'fit';
class MatGridList {
    constructor(_element, _dir) {
        this._element = _element;
        this._dir = _dir;
        /** The amount of space between tiles. This will be something like '5px' or '2em'. */
        this._gutter = '1px';
    }
    /** Amount of columns in the grid list. */
    get cols() { return this._cols; }
    set cols(value) {
        this._cols = Math.max(1, Math.round(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value)));
    }
    /** Size of the grid list's gutter in pixels. */
    get gutterSize() { return this._gutter; }
    set gutterSize(value) { this._gutter = `${value == null ? '' : value}`; }
    /** Set internal representation of row height from the user-provided value. */
    get rowHeight() { return this._rowHeight; }
    set rowHeight(value) {
        const newValue = `${value == null ? '' : value}`;
        if (newValue !== this._rowHeight) {
            this._rowHeight = newValue;
            this._setTileStyler(this._rowHeight);
        }
    }
    ngOnInit() {
        this._checkCols();
        this._checkRowHeight();
    }
    /**
     * The layout calculation is fairly cheap if nothing changes, so there's little cost
     * to run it frequently.
     */
    ngAfterContentChecked() {
        this._layoutTiles();
    }
    /** Throw a friendly error if cols property is missing */
    _checkCols() {
        if (!this.cols && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            throw Error(`mat-grid-list: must pass in number of columns. ` +
                `Example: <mat-grid-list cols="3">`);
        }
    }
    /** Default to equal width:height if rowHeight property is missing */
    _checkRowHeight() {
        if (!this._rowHeight) {
            this._setTileStyler('1:1');
        }
    }
    /** Creates correct Tile Styler subtype based on rowHeight passed in by user */
    _setTileStyler(rowHeight) {
        if (this._tileStyler) {
            this._tileStyler.reset(this);
        }
        if (rowHeight === MAT_FIT_MODE) {
            this._tileStyler = new FitTileStyler();
        }
        else if (rowHeight && rowHeight.indexOf(':') > -1) {
            this._tileStyler = new RatioTileStyler(rowHeight);
        }
        else {
            this._tileStyler = new FixedTileStyler(rowHeight);
        }
    }
    /** Computes and applies the size and position for all children grid tiles. */
    _layoutTiles() {
        if (!this._tileCoordinator) {
            this._tileCoordinator = new TileCoordinator();
        }
        const tracker = this._tileCoordinator;
        const tiles = this._tiles.filter(tile => !tile._gridList || tile._gridList === this);
        const direction = this._dir ? this._dir.value : 'ltr';
        this._tileCoordinator.update(this.cols, tiles);
        this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);
        tiles.forEach((tile, index) => {
            const pos = tracker.positions[index];
            this._tileStyler.setStyle(tile, pos.row, pos.col);
        });
        this._setListStyle(this._tileStyler.getComputedHeight());
    }
    /** Sets style on the main grid-list element, given the style name and value. */
    _setListStyle(style) {
        if (style) {
            this._element.nativeElement.style[style[0]] = style[1];
        }
    }
}
MatGridList.ɵfac = function MatGridList_Factory(t) { return new (t || MatGridList)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], 8)); };
MatGridList.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MatGridList, selectors: [["mat-grid-list"]], contentQueries: function MatGridList_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MatGridTile, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._tiles = _t);
    } }, hostAttrs: [1, "mat-grid-list"], hostVars: 1, hostBindings: function MatGridList_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("cols", ctx.cols);
    } }, inputs: { cols: "cols", gutterSize: "gutterSize", rowHeight: "rowHeight" }, exportAs: ["matGridList"], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
                provide: MAT_GRID_LIST,
                useExisting: MatGridList
            }])], ngContentSelectors: _c0, decls: 2, vars: 0, template: function MatGridList_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [_c3], encapsulation: 2, changeDetection: 0 });
MatGridList.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
    { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }] }
];
MatGridList.propDecorators = {
    _tiles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"], args: [MatGridTile, { descendants: true },] }],
    cols: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    gutterSize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    rowHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }]
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridList, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mat-grid-list',
                exportAs: 'matGridList',
                template: "<div>\n  <ng-content></ng-content>\n</div>",
                host: {
                    'class': 'mat-grid-list',
                    // Ensures that the "cols" input value is reflected in the DOM. This is
                    // needed for the grid-list harness.
                    '[attr.cols]': 'cols'
                },
                providers: [{
                        provide: MAT_GRID_LIST,
                        useExisting: MatGridList
                    }],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                styles: [".mat-grid-list{display:block;position:relative}.mat-grid-tile{display:block;position:absolute;overflow:hidden}.mat-grid-tile .mat-figure{top:0;left:0;right:0;bottom:0;position:absolute;display:flex;align-items:center;justify-content:center;height:100%;padding:0;margin:0}.mat-grid-tile .mat-grid-tile-header,.mat-grid-tile .mat-grid-tile-footer{display:flex;align-items:center;height:48px;color:#fff;background:rgba(0,0,0,.38);overflow:hidden;padding:0 16px;position:absolute;left:0;right:0}.mat-grid-tile .mat-grid-tile-header>*,.mat-grid-tile .mat-grid-tile-footer>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-tile-header.mat-2-line,.mat-grid-tile .mat-grid-tile-footer.mat-2-line{height:68px}.mat-grid-tile .mat-grid-list-text{display:flex;flex-direction:column;flex:auto;box-sizing:border-box;overflow:hidden}.mat-grid-tile .mat-grid-list-text>*{margin:0;padding:0;font-weight:normal;font-size:inherit}.mat-grid-tile .mat-grid-list-text:empty{display:none}.mat-grid-tile .mat-grid-tile-header{top:0}.mat-grid-tile .mat-grid-tile-footer{bottom:0}.mat-grid-tile .mat-grid-avatar{padding-right:16px}[dir=rtl] .mat-grid-tile .mat-grid-avatar{padding-right:0;padding-left:16px}.mat-grid-tile .mat-grid-avatar:empty{display:none}\n"]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Directionality"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, { cols: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], gutterSize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rowHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], _tiles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
            args: [MatGridTile, { descendants: true }]
        }] }); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class MatGridListModule {
}
MatGridListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatGridListModule });
MatGridListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatGridListModule_Factory(t) { return new (t || MatGridListModule)(); }, imports: [[_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatGridListModule, { declarations: function () { return [MatGridList, MatGridTile, MatGridTileText, MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]; }, imports: function () { return [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]]; }, exports: function () { return [MatGridList, MatGridTile, MatGridTileText, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"], MatGridTileHeaderCssMatStyler, MatGridTileFooterCssMatStyler, MatGridAvatarCssMatStyler]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatGridListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"]],
                exports: [
                    MatGridList,
                    MatGridTile,
                    MatGridTileText,
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLineModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatCommonModule"],
                    MatGridTileHeaderCssMatStyler,
                    MatGridTileFooterCssMatStyler,
                    MatGridAvatarCssMatStyler
                ],
                declarations: [
                    MatGridList,
                    MatGridTile,
                    MatGridTileText,
                    MatGridTileHeaderCssMatStyler,
                    MatGridTileFooterCssMatStyler,
                    MatGridAvatarCssMatStyler
                ]
            }]
    }], null, null); })();

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Privately exported for the grid-list harness.
const ɵTileCoordinator = TileCoordinator;

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=grid-list.js.map

/***/ })

}]);
//# sourceMappingURL=main-screen-main-screen-module.js.map