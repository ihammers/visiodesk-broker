(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\WORK\mriya\_tmp\visio\v12\src\main.ts */"zUnb");


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

/***/ "GANb":
/*!*****************************************************!*\
  !*** ./src/app/components/chats/chats.component.ts ***!
  \*****************************************************/
/*! exports provided: ChatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatsComponent", function() { return ChatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ChatsComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChatsComponent.ɵfac = function ChatsComponent_Factory(t) { return new (t || ChatsComponent)(); };
ChatsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatsComponent, selectors: [["app-chats"]], decls: 213, vars: 0, consts: [[1, "chats"], [1, "chats__header"], [1, "search"], ["src", "../../../assets/icons/search.svg", "alt", "search"], ["type", "search", "placeholder", "\u041F\u043E\u0438\u0441\u043A", 1, "search-input"], ["href", "#", 1, "chats__header_icon", "write"], ["src", "../../../assets/icons/edit.svg", "alt", "write message"], ["href", "#", 1, "chats__header_icon", "more-info"], ["src", "../../../assets/icons/more.svg", "alt", "more"], [1, "chats__list"], [1, "chats__list__messages"], [1, "preview-chat", "personal-chat"], [1, "person"], ["src", "../../../assets/img/users/igor.png", "alt", "\u0418\u0433\u043E\u0440\u044C", 1, "chat-user-photo"], [1, "chat-user-date"], [1, "chat-user-name"], [1, "chat-user-message", "your-last-message"], [1, "info-about-chat"], [1, "time", "writed"], [1, "chat-item__notification"], [1, "notification", "anchor"], ["src", "../../../assets/icons/anchor.svg", "alt", "anchor"], ["src", "../../../assets/img/users/valera.png", "alt", "\u0412\u0430\u043B\u0435\u0440\u0430", 1, "chat-user-photo"], [1, "chat-user-message"], [1, "time"], [1, "notification", "disable"], ["src", "../../../assets/img/users/max.png", "alt", "\u041C\u0430\u043A\u0441\u0438\u043C \u0420\u0435\u0434\u044C\u043A\u0438\u043D", 1, "chat-user-photo"], [1, "chat-user-message", "white"], [1, "time", "white"], ["src", "../../../assets/img/users/pavel.png", "alt", "\u041F\u0430\u0432\u0435\u043B \u0414\u0443\u0440\u043E\u0432", 1, "chat-user-photo"], [1, "chat-user-message", "draft"], [1, "chat-user-photo", "no-photo"], [1, "chat-user-name", "group"], [1, "chat-user-message", "group-username"], [1, "notification"], [1, "notification", "orange"], [1, "notification", "red"], ["src", "../../../assets/img/users/polina.png", "alt", "\u041F\u043E\u043B\u0438\u043D\u0430 \u0413\u0430\u0433\u0430\u0440\u0438\u043D\u0430", 1, "chat-user-photo"], [1, "chat-user-name", "muted"], ["src", "../../../assets/img/users/alex.png", "alt", "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u041E\u0431\u0443\u0445\u043E\u0432", 1, "chat-user-photo"], [1, "time", "no-writed"]], template: function ChatsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0418\u0433\u043E\u0440\u044C \u0428\u0435\u0432\u0447\u0435\u043D\u043A\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u0414\u0430, \u0442\u0430\u043A \u043D\u0430\u0445\u043E\u0434\u0438\u0442 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "15:54");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0412\u0430\u043B\u0435\u0440\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u0418\u043D\u0434\u0438\u0439\u0441\u043A\u0438\u0439 \u043E\u0431\u0437\u043E\u0440 \u043F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u043B, \u0442\u0430\u043C.. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "13:17");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u041C\u0430\u043A\u0441\u0438\u043C \u0420\u0435\u0434\u044C\u043A\u0438\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " \u0414\u0430, \u0445\u043E\u0440\u0432\u0430\u0442\u044B \u0441\u0435\u0439\u0447\u0430\u0441 \u043D\u0435 \u0442\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "17:47");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u041F\u0430\u0432\u0435\u043B \u0414\u0443\u0440\u043E\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u0421\u0445\u043E\u0434\u0438 \u043A \u0414\u0443\u0434\u044E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "12:40");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u042D\u041B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "\u042D\u043B\u0435\u043A\u0442\u0440\u0438\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " \u0422\u043E\u0432\u0430\u0440\u0438\u0449\u0438 \u043F\u043E\u0434\u0441\u043A\u0430\u0436\u0438... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "16:10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "\u041F\u043E\u043B\u0438\u043D\u0430 \u0413\u0430\u0433\u0430\u0440\u0438\u043D\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "\u041A\u043E\u0433\u043E \u0438\u043C\u0435\u043D\u043D\u043E?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "18:02");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "\u0410\u043B\u0435\u043A\u0441\u0430\u043D\u0434\u0440 \u041E\u0431\u0443\u0445\u043E\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "\u041E\u043A");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "15:54");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "\u0421\u0410");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "\u0421\u0430\u043D\u0442\u0435\u0445\u043D\u0438\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " \u0422\u043E\u0432\u0430\u0440\u0438\u0449\u0438 \u043F\u043E\u0434\u0441\u043A\u0430\u0436\u0438... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "16:10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "\u041F\u041B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, "\u041F\u043B\u043E\u0442\u043D\u0438\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " \u0422\u043E\u0432\u0430\u0440\u0438\u0449\u0438 \u043F\u043E\u0434\u0441\u043A\u0430\u0436\u0438... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "16:10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "\u0411\u0415");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u0438\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " \u0422\u043E\u0432\u0430\u0440\u0438\u0449\u0438 \u043F\u043E\u0434\u0441\u043A\u0430\u0436\u0438... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "16:10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](172, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "\u041A\u0410");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "\u041A\u0430\u043C\u0435\u043D\u044C\u0449\u0438\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " \u0422\u043E\u0432\u0430\u0440\u0438\u0449\u0438 \u043F\u043E\u0434\u0441\u043A\u0430\u0436\u0438... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, "16:10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, "\u0420\u0410");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, " \u0422\u043E\u0432\u0430\u0440\u0438\u0449\u0438 \u043F\u043E\u0434\u0441\u043A\u0430\u0436\u0438... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "16:10");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@charset \"UTF-8\";\n\n.chats[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 27vw;\n  overflow: hidden;\n}\n.chats__list__messages[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: calc(100vh - 66px);\n}\n.preview-chat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 16px;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.preview-chat[_ngcontent-%COMP%]:hover {\n  background-color: #555657;\n  transition: 0.2s;\n}\n.preview-chat[_ngcontent-%COMP%]:active {\n  background-color: #125bc8;\n}\n.person[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.chat-user-photo[_ngcontent-%COMP%] {\n  height: 48px;\n  width: 48px;\n  border-radius: 24px;\n  object-fit: cover;\n}\n.chat-user-photo.no-photo[_ngcontent-%COMP%] {\n  background-color: #6fa5f6;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n.chat-user-date[_ngcontent-%COMP%] {\n  margin-left: 12px;\n}\n.chat-user-name[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.chat-user-name.group[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: inline-block;\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n  background: url('group.svg');\n  vertical-align: bottom;\n}\n.chat-user-name.muted[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: inline-block;\n  height: 16px;\n  width: 16px;\n  margin-left: 4px;\n  background: url('mute.svg');\n  vertical-align: bottom;\n}\n.chat-user-message[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: #afb4bb;\n}\n.chat-user-message.group-username[_ngcontent-%COMP%]::before {\n  content: \"\u0421\u0435\u0440\u0433\u0435\u0439: \";\n  color: #6fa5f6;\n}\n.your-last-message[_ngcontent-%COMP%]::before {\n  content: \"\u0412\u044B: \";\n  color: #6fa5f6;\n}\n.draft[_ngcontent-%COMP%]::before {\n  content: \"\u0427\u0435\u0440\u043D\u043E\u0432\u0438\u043A: \";\n  color: #e83657;\n}\n.info-about-chat[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  font-weight: 400;\n  opacity: 0.7;\n  margin-bottom: 5px;\n  text-align: end;\n}\n.info-about-chat[_ngcontent-%COMP%]   .time.writed[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: inline-block;\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n  background: url('read.svg');\n  vertical-align: bottom;\n}\n.info-about-chat[_ngcontent-%COMP%]   .time.no-writed[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: inline-block;\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n  background: url('not-read.svg');\n  vertical-align: bottom;\n}\n.info-about-chat[_ngcontent-%COMP%]   .time.white[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGF0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFVaEIsV0FBQTtBQUtBO0VBQ0UsYUFBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtBQWJGO0FBZ0JBO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0FBYkY7QUFnQkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBYkY7QUFlRTtFQUNFLHlCQWpDUztFQWtDVCxnQkFBQTtBQWJKO0FBZ0JFO0VBQ0UseUJBekNTO0FBMkJiO0FBa0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBZkY7QUFrQkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFmRjtBQWlCRTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBZko7QUFtQkE7RUFDRSxpQkFBQTtBQWhCRjtBQW1CQTtFQUNFLGtCQUFBO0FBaEJGO0FBbUJJO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFqQk47QUFzQkk7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQXBCTjtBQXlCQTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQXRCRjtBQXlCSTtFQUNFLG1CQUFBO0VBQ0EsY0FqR1M7QUEwRWY7QUE2QkU7RUFDRSxlQUFBO0VBQ0EsY0F6R1c7QUErRWY7QUErQkU7RUFDRSxxQkFBQTtFQUNBLGNBL0dHO0FBbUZQO0FBaUNFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBOUJKO0FBaUNNO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUEvQlI7QUFvQ007RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtBQWxDUjtBQXNDSTtFQUNFLFVBQUE7QUFwQ04iLCJmaWxlIjoiY2hhdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiBkaWFsb2cgKi9cbi5jaGF0cyB7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAyN3Z3O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uY2hhdHNfX2xpc3RfX21lc3NhZ2VzIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDY2cHgpO1xufVxuXG4ucHJldmlldy1jaGF0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuLnByZXZpZXctY2hhdDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU2NTc7XG4gIHRyYW5zaXRpb246IDAuMnM7XG59XG4ucHJldmlldy1jaGF0OmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjViYzg7XG59XG5cbi5wZXJzb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uY2hhdC11c2VyLXBob3RvIHtcbiAgaGVpZ2h0OiA0OHB4O1xuICB3aWR0aDogNDhweDtcbiAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4uY2hhdC11c2VyLXBob3RvLm5vLXBob3RvIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzZmYTVmNjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmNoYXQtdXNlci1kYXRlIHtcbiAgbWFyZ2luLWxlZnQ6IDEycHg7XG59XG5cbi5jaGF0LXVzZXItbmFtZSB7XG4gIG1hcmdpbi1ib3R0b206IDRweDtcbn1cbi5jaGF0LXVzZXItbmFtZS5ncm91cDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pY29ucy9ncm91cC5zdmcpO1xuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xufVxuLmNoYXQtdXNlci1uYW1lLm11dGVkOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pY29ucy9tdXRlLnN2Zyk7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG5cbi5jaGF0LXVzZXItbWVzc2FnZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjYWZiNGJiO1xufVxuLmNoYXQtdXNlci1tZXNzYWdlLmdyb3VwLXVzZXJuYW1lOjpiZWZvcmUge1xuICBjb250ZW50OiBcItCh0LXRgNCz0LXQuTogXCI7XG4gIGNvbG9yOiAjNmZhNWY2O1xufVxuXG4ueW91ci1sYXN0LW1lc3NhZ2U6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi0JLRizogXCI7XG4gIGNvbG9yOiAjNmZhNWY2O1xufVxuXG4uZHJhZnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi0KfQtdGA0L3QvtCy0LjQujogXCI7XG4gIGNvbG9yOiAjZTgzNjU3O1xufVxuXG4uaW5mby1hYm91dC1jaGF0IC50aW1lIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgb3BhY2l0eTogMC43O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cbi5pbmZvLWFib3V0LWNoYXQgLnRpbWUud3JpdGVkOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ljb25zL3JlYWQuc3ZnKTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbn1cbi5pbmZvLWFib3V0LWNoYXQgLnRpbWUubm8td3JpdGVkOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIG1hcmdpbi1yaWdodDogNHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ljb25zL25vdC1yZWFkLnN2Zyk7XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG59XG4uaW5mby1hYm91dC1jaGF0IC50aW1lLndoaXRlIHtcbiAgb3BhY2l0eTogMTtcbn0iXX0= */"] });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _components_chats_chats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/chats/chats.component */ "GANb");
/* harmony import */ var _components_chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/chat-area/chat-area.component */ "W6Nd");
/* harmony import */ var _components_help_desk_help_desk_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/help-desk/help-desk.component */ "U1Tm");





class AppComponent {
    constructor() {
        this.title = 'visio';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-chats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-chat-area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-help-desk");
    } }, directives: [_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"], _components_chats_chats_component__WEBPACK_IMPORTED_MODULE_2__["ChatsComponent"], _components_chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_3__["ChatAreaComponent"], _components_help_desk_help_desk_component__WEBPACK_IMPORTED_MODULE_4__["HelpDeskComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFBLFdBQUEiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJG1haW4tY29sb3I6ICMxMjViYzg7XHJcbiRkYXJrLWJsdWU6ICMzMTQ4NmQ7XHJcbiRiYWNrZ3JvdW5kLWNvbG9yOiAjMWMxZTIwO1xyXG4kbGlnaHQtZ3JheTogIzU1NTY1NztcclxuJGdyYXk6ICMyZjMxMzY7XHJcbiRkYXJrLWdyYXk6ICMzMzM0MzY7XHJcbiR0ZXh0OiAjZmZmO1xyXG5cclxuLyogZGlhbG9nICovXHJcbiRyZWQ6ICNmZjNiMzA7XHJcbiRvcmFuZ2U6ICNmZjhkMzY7XHJcbiRncmVlbjogIzRjZDk2NDsiXX0= */"] });


/***/ }),

/***/ "U1Tm":
/*!*************************************************************!*\
  !*** ./src/app/components/help-desk/help-desk.component.ts ***!
  \*************************************************************/
/*! exports provided: HelpDeskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpDeskComponent", function() { return HelpDeskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HelpDeskComponent {
    constructor() { }
    ngOnInit() {
    }
}
HelpDeskComponent.ɵfac = function HelpDeskComponent_Factory(t) { return new (t || HelpDeskComponent)(); };
HelpDeskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpDeskComponent, selectors: [["app-help-desk"]], decls: 76, vars: 0, consts: [[1, "help-desk"], [1, "help-desk__header"], [1, "search"], ["src", "../../../assets/icons/search.svg", "alt", "search"], ["type", "search", "placeholder", "\u041F\u043E\u0438\u0441\u043A", 1, "search-input"], ["href", "#", 1, "chats__header_icon", "write"], ["src", "../../../assets/icons/plus.svg", "alt", "add"], ["href", "#", 1, "chats__header_icon", "more-info"], ["src", "../../../assets/icons/more.svg", "alt", "more"], [1, "help-desk__content"], [1, "help__block", "gray"], [1, "help__block__title"], [1, "help__block__username"], [1, "help__block__status", "new"], [1, "help__block__info"], [1, "time"], [1, "help__block", "orange"], [1, "help__block__status", "in-work"], [1, "help__block", "red"], [1, "help__block__status", "done"], [1, "help__block"]], template: function HelpDeskComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "TP-3 QF17 Dormun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0418\u0433\u043E\u0440\u044C \u0428\u0435\u0432\u0447\u0435\u043D\u043A\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u041D\u043E\u0432\u0430\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u0410\u0432\u0430\u0440\u0438\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0430. Site:Novoaltaysk/RP _3.QF_1_17 \u0442\u0443\u0442 \u0441\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D.... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "8:19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "TP-3 QF17 Dormun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0418\u0433\u043E\u0440\u044C \u0428\u0435\u0432\u0447\u0435\u043D\u043A\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0412 \u0440\u0430\u0431\u043E\u0442\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u0410\u0432\u0430\u0440\u0438\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0430. Site:Novoaltaysk/RP _3.QF_1_17 \u0442\u0443\u0442 \u0441\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D.... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "8:19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "TP-3 QF17 Dormun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u0418\u0433\u043E\u0440\u044C \u0428\u0435\u0432\u0447\u0435\u043D\u043A\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u0410\u0432\u0430\u0440\u0438\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0430. Site:Novoaltaysk/RP _3.QF_1_17 \u0442\u0443\u0442 \u0441\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D.... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "8:19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "TP-3 QF17 Dormun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "\u0418\u0433\u043E\u0440\u044C \u0428\u0435\u0432\u0447\u0435\u043D\u043A\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " \u0410\u0432\u0430\u0440\u0438\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0430. Site:Novoaltaysk/RP _3.QF_1_17 \u0442\u0443\u0442 \u0441\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D.... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "8:19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "TP-3 QF17 Dormun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u0418\u0433\u043E\u0440\u044C \u0428\u0435\u0432\u0447\u0435\u043D\u043A\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " \u0410\u0432\u0430\u0440\u0438\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0430. Site:Novoaltaysk/RP _3.QF_1_17 \u0442\u0443\u0442 \u0441\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D.... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "8:19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "TP-3 QF17 Dormun");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "\u0418\u0433\u043E\u0440\u044C \u0428\u0435\u0432\u0447\u0435\u043D\u043A\u043E");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u0412 \u0440\u0430\u0431\u043E\u0442\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " \u0410\u0432\u0430\u0440\u0438\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0430. Site:Novoaltaysk/RP _3.QF_1_17 \u0442\u0443\u0442 \u0441\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u043D\u044B\u0439 \u0442\u0435\u043A\u0441\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D.... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "8:19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".help-desk[_ngcontent-%COMP%] {\n  width: 27vw;\n}\n.help-desk__content[_ngcontent-%COMP%] {\n  height: calc(100vh - 66px);\n  overflow: auto;\n}\n.help__block[_ngcontent-%COMP%] {\n  padding: 12px 8px 8px 16px;\n  margin: 0 12px 20px 6px;\n  border-radius: 6px;\n  background-color: #333436;\n  position: relative;\n  transition: 0.2s;\n}\n.help__block[_ngcontent-%COMP%]:first-child {\n  margin-top: 8px;\n}\n.help__block[_ngcontent-%COMP%]:hover {\n  background-color: #555657;\n}\n.help__block[_ngcontent-%COMP%]:active {\n  background-color: #125bc8;\n}\n.help__block[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  border: 10px solid transparent;\n  border-bottom: 10px solid #333436;\n  border-left: 10px solid #333436;\n}\n.help__block.gray[_ngcontent-%COMP%]::after {\n  border-bottom: 10px solid #979797;\n  border-left: 10px solid #979797;\n}\n.help__block.orange[_ngcontent-%COMP%]::after {\n  border-bottom: 10px solid #ff8d36;\n  border-left: 10px solid #ff8d36;\n}\n.help__block.red[_ngcontent-%COMP%]::after {\n  border-bottom: 10px solid #ff3b30;\n  border-left: 10px solid #ff3b30;\n}\n.help__block__title[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 18px;\n  line-height: 22px;\n}\n.help__block__username[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 18px;\n}\n.help__block__status[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8px;\n  top: 10px;\n  font-weight: 400;\n}\n.help__block__status.new[_ngcontent-%COMP%] {\n  border-radius: 50px;\n  background-color: #ff3b30;\n  padding: 2px 14px;\n  font-weight: 500;\n}\n.help__block__status.in-work[_ngcontent-%COMP%] {\n  color: #55a2ee;\n}\n.help__block__status.done[_ngcontent-%COMP%] {\n  color: #27ae60;\n}\n.help__block__info[_ngcontent-%COMP%] {\n  padding: 16px 0 13px 0;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 22px;\n}\n.time[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #afb4bb;\n  text-align: end;\n}\n.time[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: inline-block;\n  height: 16px;\n  width: 16px;\n  margin-left: 8px;\n  background: url('read.svg');\n  vertical-align: top;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWxwLWRlc2suY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUEsV0FBQTtBQUtBLFNBQUE7QUFJQSxXQUFBO0FBTUE7RUFFRSxXQUFBO0FBdEJGO0FBeUJBO0VBQ0ksMEJBQUE7RUFDQSxjQUFBO0FBdEJKO0FBeUJBO0VBQ0UsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBbENVO0VBbUNWLGtCQUFBO0VBQ0EsZ0JBQUE7QUF0QkY7QUF3QkU7RUFDRSxlQUFBO0FBdEJKO0FBeUJFO0VBQ0UseUJBN0NTO0FBc0JiO0FBMEJFO0VBQ0UseUJBcERTO0FBNEJiO0FBMkJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLGlDQUFBO0VBQ0EsK0JBQUE7QUF6Qko7QUE0QkU7RUFDRSxpQ0FBQTtFQUNBLCtCQUFBO0FBMUJKO0FBNkJFO0VBQ0UsaUNBQUE7RUFDQSwrQkFBQTtBQTNCSjtBQThCRTtFQUNFLGlDQUFBO0VBQ0EsK0JBQUE7QUE1Qko7QUFnQ0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQTdCRjtBQWdDQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBN0JGO0FBZ0NBO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBN0JGO0FBK0JFO0VBQ0UsbUJBQUE7RUFDQSx5QkExRkU7RUEyRkYsaUJBQUE7RUFDQSxnQkFBQTtBQTdCSjtBQWdDRTtFQUNFLGNBdEZNO0FBd0RWO0FBaUNFO0VBQ0UsY0F6Rkc7QUEwRFA7QUFtQ0E7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBaENGO0FBbUNBO0VBQ0UsZUFBQTtFQUNBLGNBM0dhO0VBNEdiLGVBQUE7QUFoQ0Y7QUFrQ0U7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQWhDSiIsImZpbGUiOiJoZWxwLWRlc2suY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWFpbi1jb2xvcjogIzEyNWJjODtcclxuJGRhcmstYmx1ZTogIzMxNDg2ZDtcclxuJGJhY2tncm91bmQtY29sb3I6ICMxYzFlMjA7XHJcbiRsaWdodC1ncmF5OiAjNTU1NjU3O1xyXG4kZ3JheTogIzJmMzEzNjtcclxuJGRhcmstZ3JheTogIzMzMzQzNjtcclxuJHRleHQ6ICNmZmY7XHJcbiR5b3VyLW1lc3NhZ2U6ICM2ZmE1ZjY7XHJcbiRwaW5rOiAjZTgzNjU3O1xyXG5cclxuLyogZGlhbG9nICovXHJcbiRyZWQ6ICNmZjNiMzA7XHJcbiRvcmFuZ2U6ICNmZjhkMzY7XHJcbiRncmVlbjogIzRjZDk2NDtcclxuXHJcbi8qIGNoYXQgKi9cclxuJG1lc3NhZ2U6ICMyNjMyNDc7XHJcbiR0aW1lLWluLWNoYXQ6ICNhZmI0YmI7XHJcblxyXG4vKiBTdGF0dXMgKi9cclxuXHJcbiRpbi13b3JrOiAjNTVhMmVlO1xyXG4kZG9uZTogIzI3YWU2MDtcclxuJHN0YXR1cy1ncmF5OiAjOTc5Nzk3O1xyXG5cclxuLmhlbHAtZGVzayB7XHJcbiAgLy8gd2lkdGg6IDM3MHB4O1xyXG4gIHdpZHRoOiAyN3Z3O1xyXG59XHJcblxyXG4uaGVscC1kZXNrX19jb250ZW50IHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDY2cHgpO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbn1cclxuXHJcbi5oZWxwX19ibG9jayB7XHJcbiAgcGFkZGluZzogMTJweCA4cHggOHB4IDE2cHg7XHJcbiAgbWFyZ2luOiAwIDEycHggMjBweCA2cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWdyYXk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcblxyXG4gICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JheTtcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xyXG4gIH1cclxuXHJcbiAgJjo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICRkYXJrLWdyYXk7XHJcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAkZGFyay1ncmF5O1xyXG4gIH1cclxuXHJcbiAgJi5ncmF5OjphZnRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICRzdGF0dXMtZ3JheTtcclxuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICRzdGF0dXMtZ3JheTtcclxuICB9XHJcblxyXG4gICYub3JhbmdlOjphZnRlciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICRvcmFuZ2U7XHJcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCAkb3JhbmdlO1xyXG4gIH1cclxuXHJcbiAgJi5yZWQ6OmFmdGVyIHtcclxuICAgIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgJHJlZDtcclxuICAgIGJvcmRlci1sZWZ0OiAxMHB4IHNvbGlkICRyZWQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaGVscF9fYmxvY2tfX3RpdGxlIHtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxufVxyXG5cclxuLmhlbHBfX2Jsb2NrX191c2VybmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbn1cclxuXHJcbi5oZWxwX19ibG9ja19fc3RhdHVzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDhweDtcclxuICB0b3A6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHJcbiAgJi5uZXcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRyZWQ7XHJcbiAgICBwYWRkaW5nOiAycHggMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG5cclxuICAmLmluLXdvcmsge1xyXG4gICAgY29sb3I6ICRpbi13b3JrO1xyXG4gIH1cclxuXHJcbiAgJi5kb25lIHtcclxuICAgIGNvbG9yOiAkZG9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5oZWxwX19ibG9ja19faW5mbyB7XHJcbiAgcGFkZGluZzogMTZweCAwIDEzcHggMDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxufVxyXG5cclxuLnRpbWUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogJHRpbWUtaW4tY2hhdDtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICB3aWR0aDogMTZweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ljb25zL3JlYWQuc3ZnKTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "W6Nd":
/*!*************************************************************!*\
  !*** ./src/app/components/chat-area/chat-area.component.ts ***!
  \*************************************************************/
/*! exports provided: ChatAreaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatAreaComponent", function() { return ChatAreaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class ChatAreaComponent {
    constructor() { }
    ngOnInit() {
    }
}
ChatAreaComponent.ɵfac = function ChatAreaComponent_Factory(t) { return new (t || ChatAreaComponent)(); };
ChatAreaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChatAreaComponent, selectors: [["app-chat-area"]], decls: 113, vars: 0, consts: [[1, "chat-area"], [1, "header__chat"], [1, "person-chat"], [1, "username"], [1, "last-visit"], [1, "chat__control__panel"], ["href", "#", 1, "chat__control__panel__link"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M5.88235 4H9.64706L11.5294 8.70588L9.17647 10.1176C10.1844 12.1614 11.8386 13.8156 13.8824 14.8235L15.2941 12.4706L20 14.3529V18.1176C20 18.6169 19.8017 19.0957 19.4487 19.4487C19.0957 19.8017 18.6169 20 18.1176 20C14.4464 19.7769 10.9837 18.2179 8.3829 15.6171C5.78212 13.0163 4.22311 9.55363 4 5.88235C4 5.38312 4.19832 4.90434 4.55133 4.55133C4.90434 4.19832 5.38312 4 5.88235 4", "fill", "transparent", "stroke", "#AFB4BB", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M16.25 9.5C16.25 12.6756 13.6756 15.25 10.5 15.25C7.32436 15.25 4.75 12.6756 4.75 9.5C4.75 6.32436 7.32436 3.75 10.5 3.75C13.6756 3.75 16.25 6.32436 16.25 9.5Z", "fill", "transparent", "stroke", "#AFB4BB", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M15 14L20 19", "stroke", "#AFB4BB", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["width", "12", "height", "24", "viewBox", "0 0 12 24", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13Z", "stroke", "#AFB4BB", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M6 20C6.55228 20 7 19.5523 7 19C7 18.4477 6.55228 18 6 18C5.44772 18 5 18.4477 5 19C5 19.5523 5.44772 20 6 20Z", "stroke", "#AFB4BB", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M6 6C6.55228 6 7 5.55228 7 5C7 4.44772 6.55228 4 6 4C5.44772 4 5 4.44772 5 5C5 5.55228 5.44772 6 6 6Z", "stroke", "#AFB4BB", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "chat__content"], [1, "date-in-chat"], [1, "date"], [1, "message-block"], ["src", "../../../assets/img/users/eugene.jfif", "alt", "\u0415\u0432\u0433\u0435\u043D\u0438\u0439", 1, "photo-user"], [1, "message", "your-message", "writed"], [1, "time"], ["src", "../../../assets/img/users/max.png", "alt", "\u041C\u0430\u043A\u0441\u0438\u043C", 1, "photo-user"], [1, "message"], [1, "message-block", "not-last"], [1, "message", "not-last", "your-message", "writed"], [1, "message", "not-last"], [1, "send__message"], ["href", "#", 1, "send__message-icon"], ["d", "M14.9999 6.99996L8.49995 13.5C8.10212 13.8978 7.87863 14.4374 7.87863 15C7.87863 15.5626 8.10212 16.1021 8.49995 16.5C8.89777 16.8978 9.43734 17.1213 9.99995 17.1213C10.5626 17.1213 11.1021 16.8978 11.4999 16.5L17.9999 9.99996C18.7956 9.20432 19.2426 8.12518 19.2426 6.99996C19.2426 5.87475 18.7956 4.79561 17.9999 3.99996C17.2043 3.20432 16.1252 2.75732 14.9999 2.75732C13.8747 2.75732 12.7956 3.20432 11.9999 3.99996L5.49995 10.5C4.30647 11.6934 3.63599 13.3121 3.63599 15C3.63599 16.6878 4.30647 18.3065 5.49995 19.5C6.69342 20.6934 8.31212 21.3639 9.99995 21.3639C11.6878 21.3639 13.3065 20.6934 14.4999 19.5L20.9999 13", "stroke", "#AFB4BB", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["type", "text", "placeholder", "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435...", 1, "write-message-input"], ["href", "#", "id", "smile", 1, "send__message-icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z", "stroke", "#AFB4BB", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M9.00049 10H9.00949", "stroke", "#AFB4BB", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M14.9995 10H15.0085", "stroke", "#AFB4BB", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M9.50049 15C9.82637 15.3326 10.2153 15.5968 10.6446 15.7772C11.0739 15.9576 11.5349 16.0505 12.0005 16.0505C12.4661 16.0505 12.9271 15.9576 13.3564 15.7772C13.7856 15.5968 14.1746 15.3326 14.5005 15", "stroke", "#AFB4BB", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["width", "24", "height", "24", "fill", "none", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6V11C9 12.6569 10.3431 14 12 14C13.6569 14 15 12.6569 15 11V6Z", "stroke", "#AFB4BB", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M5 11C5 12.8565 5.7375 14.637 7.05025 15.9497C8.36301 17.2625 10.1435 18 12 18C13.8565 18 15.637 17.2625 16.9497 15.9497C18.2625 14.637 19 12.8565 19 11", "stroke", "#AFB4BB", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 18V22", "stroke", "#AFB4BB", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"]], template: function ChatAreaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u041C\u0430\u043A\u0441\u0438\u043C \u0420\u0435\u0434\u044C\u043A\u0438\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0431\u044B\u043B \u0432 \u0441\u0435\u0442\u0438 \u0432 12:39");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "15 \u0434\u0435\u043A\u0430\u0431\u0440\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0421\u043F\u043E\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "8:19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0421\u043F\u043E\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "8:19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u0412\u0447\u0435\u0440\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " \u041F\u0435\u0441\u043A\u043E\u0432 \u0432\u0440\u0435\u043C\u0435\u043D\u043D\u043E \u043E\u0442\u043C\u0435\u043D\u0438\u043B \u0435\u0436\u0435\u0434\u043D\u0435\u0432\u043D\u044B\u0439 \u0431\u0440\u0438\u0444\u0438\u043D\u0433 \u0441 \u0436\u0443\u0440\u043D\u0430\u043B\u0438\u0441\u0442\u0430\u043C\u0438. \u041E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E \u0435\u0433\u043E \u0431\u0443\u0434\u0443\u0442 \u0441\u043F\u0440\u0430\u0448\u0438\u0432\u0430\u0442\u044C \u043E\u0431 \u043E\u0442\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0438 \u041D\u0430\u0432\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430\u043C\u0438 \u0424\u0421\u0411 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "8:19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " \u041F\u0435\u0440\u0435\u0437\u0432\u043E\u043D\u0438 \u043C\u043D\u0435, \u043D\u0430\u043C \u043D\u0443\u0436\u043D\u043E \u043F\u043E\u0433\u043E\u0432\u043E\u0440\u0438\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "8:19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "\u0421\u043F\u043E\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "8:19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u0427\u0442\u043E \u0434\u0443\u043C\u0430\u0435\u0448\u044C \u043F\u043E \u043F\u043E\u0432\u043E\u0434\u0443 \u0441\u0435\u0433\u043E\u0434\u043D\u044F\u0448\u043D\u0435\u0433\u043E \u043C\u0430\u0442\u0447\u0430?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "8:19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, " \u0414\u0443\u043C\u0430\u044E, \u0442\u0443\u0442 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0431\u0435\u0436\u0434\u0430\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "8:19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u0414\u0430, \u0445\u043E\u0440\u0432\u0430\u0442\u044B \u0441\u0435\u0439\u0447\u0430\u0441 \u043D\u0435 \u0442\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "8:19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "\u041F\u043E\u0431\u043E\u0440\u0435\u043C\u0441\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "8:19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "\u0412\u043F\u0435\u0440\u0451\u0434 \u0420\u043E\u0441\u0441\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "8:19");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "path", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](101, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "a", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "svg", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "path", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "path", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "path", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "path", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "svg", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "path", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "path", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "path", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".chat-area[_ngcontent-%COMP%] {\n  height: 100vh;\n  width: 28vw;\n  display: flex;\n  flex-direction: column;\n  border-left: 1px solid #555657;\n  border-right: 1px solid #555657;\n}\n.header__chat[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background-color: #333436;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.person-chat[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-bottom: 2px;\n}\n.person-chat[_ngcontent-%COMP%]   .last-visit[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #afb4bb;\n}\n.chat__control__panel__link[_ngcontent-%COMP%] {\n  margin-left: 16px;\n}\n.chat__control__panel__link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: 0.2s;\n}\n.chat__control__panel__link[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover   path[_ngcontent-%COMP%] {\n  transition: 0.2s;\n  stroke: #fff;\n}\n.chat__content[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  overflow: auto;\n  padding: 0 16px;\n  vertical-align: bottom;\n}\n.date-in-chat[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.date-in-chat[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  display: inline-block;\n  border-radius: 15px;\n  margin-bottom: 16px;\n  margin-top: 8px;\n  font-size: 12px;\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.message-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  margin-bottom: 8px;\n}\n.message-block.not-last[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.message-block.not-last[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n.message-block[_ngcontent-%COMP%]   .photo-user[_ngcontent-%COMP%] {\n  height: 32px;\n  width: 32px;\n  object-fit: cover;\n  border-radius: 16px;\n}\n.message-block[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%] {\n  display: flex;\n  background-color: #263247;\n  max-width: 275px;\n  border-radius: 8px;\n  padding: 8px 12px;\n  font-size: 14px;\n  line-height: 18px;\n  font-weight: 400;\n  margin-left: 8px;\n  position: relative;\n}\n.message-block[_ngcontent-%COMP%]   .message.not-last[_ngcontent-%COMP%]::before {\n  content: \"\";\n  border: none;\n}\n.message-block[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: -7px;\n  bottom: 0px;\n  border: 7px solid transparent;\n  border-bottom: 10px solid #263247;\n}\n.message-block[_ngcontent-%COMP%]   .message.your-message[_ngcontent-%COMP%] {\n  background-color: #31486d;\n}\n.message-block[_ngcontent-%COMP%]   .message.your-message[_ngcontent-%COMP%]::before {\n  border-bottom: 10px solid #31486d;\n}\n.message-block[_ngcontent-%COMP%]   .message.your-message.writed[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: inline-block;\n  height: 16px;\n  width: 16px;\n  margin-left: 8px;\n  background: url('read.svg');\n  vertical-align: top;\n}\n.message-block[_ngcontent-%COMP%]   .message[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  margin-left: 8px;\n  font-size: 12px;\n  color: #afb4bb;\n  margin-top: 4px;\n}\n.send__message[_ngcontent-%COMP%] {\n  background-color: #333436;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 20px 12px 16px;\n}\n.send__message-icon[_ngcontent-%COMP%] {\n  transition: 0.2s;\n}\n.send__message-icon[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  stroke: #fff;\n  transition: 0.2s;\n}\n.send__message-icon[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 16px;\n}\n.send__message-icon[_ngcontent-%COMP%]:first-child {\n  margin-right: 16px;\n}\n.write-message-input[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: transparent;\n  border: none;\n  color: #fff;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGF0LWFyZWEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBVUEsV0FBQTtBQUtBLFNBQUE7QUFJQSxXQUFBO0FBTUE7RUFFRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7QUF0QkY7QUF5QkE7RUFDRSxrQkFBQTtFQUNBLHlCQWhDVTtFQWlDVixhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQXRCRjtBQTBCRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtBQXZCSjtBQTBCRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBeEJKO0FBMkJBO0VBQ0UsaUJBQUE7QUF4QkY7QUF5QkU7RUFDRSxnQkFBQTtBQXZCSjtBQXdCSTtFQUNFLGdCQUFBO0VBQ0EsWUF0REM7QUFnQ1A7QUE0QkE7RUFFRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQTFCRjtBQTZCQTtFQUNFLGtCQUFBO0FBMUJGO0FBNEJFO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLDJDQUFBO0FBMUJKO0FBOEJBO0VBQ0UsYUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUEzQkY7QUE2QkU7RUFDRSxrQkFBQTtBQTNCSjtBQTRCSTtFQUNFLGtCQUFBO0FBMUJOO0FBOEJFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBNUJKO0FBK0JFO0VBQ0UsYUFBQTtFQUNBLHlCQS9GTTtFQWdHTixnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUE3Qko7QUFnQ007RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQTlCUjtBQWlDSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQ0FBQTtBQS9CTjtBQWtDSTtFQUNFLHlCQXhJTTtBQXdHWjtBQWlDTTtFQUNFLGlDQUFBO0FBL0JSO0FBa0NRO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFoQ1Y7QUFxQ0k7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQTlJUztFQStJVCxlQUFBO0FBbkNOO0FBd0NBO0VBQ0UseUJBaktVO0VBa0tWLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsNEJBQUE7QUFyQ0Y7QUF3Q0E7RUFDRSxnQkFBQTtBQXJDRjtBQXVDSTtFQUNFLFlBM0tDO0VBNEtELGdCQUFBO0FBckNOO0FBMENBO0VBQ0UsaUJBQUE7QUF2Q0Y7QUEwQ0E7RUFDRSxrQkFBQTtBQXZDRjtBQTBDQTtFQUNFLFdBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQXZDRiIsImZpbGUiOiJjaGF0LWFyZWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkbWFpbi1jb2xvcjogIzEyNWJjODtcclxuJGRhcmstYmx1ZTogIzMxNDg2ZDtcclxuJGJhY2tncm91bmQtY29sb3I6ICMxYzFlMjA7XHJcbiRsaWdodC1ncmF5OiAjNTU1NjU3O1xyXG4kZ3JheTogIzJmMzEzNjtcclxuJGRhcmstZ3JheTogIzMzMzQzNjtcclxuJHRleHQ6ICNmZmY7XHJcbiR5b3VyLW1lc3NhZ2U6ICM2ZmE1ZjY7XHJcbiRwaW5rOiAjZTgzNjU3O1xyXG5cclxuLyogZGlhbG9nICovXHJcbiRyZWQ6ICNmZjNiMzA7XHJcbiRvcmFuZ2U6ICNmZjhkMzY7XHJcbiRncmVlbjogIzRjZDk2NDtcclxuXHJcbi8qIGNoYXQgKi9cclxuJG1lc3NhZ2U6ICMyNjMyNDc7XHJcbiR0aW1lLWluLWNoYXQ6ICNhZmI0YmI7XHJcblxyXG4vKiBTdGF0dXMgKi9cclxuXHJcbiRpbi13b3JrOiAjNTVhMmVlO1xyXG4kZG9uZTogIzI3YWU2MDtcclxuJHN0YXR1cy1ncmF5OiAjOTc5Nzk3O1xyXG5cclxuLmNoYXQtYXJlYSB7XHJcbiAgLy8gd2lkdGg6IDM3MHB4O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDI4dnc7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgJGxpZ2h0LWdyYXk7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGxpZ2h0LWdyYXk7XHJcbn1cclxuXHJcbi5oZWFkZXJfX2NoYXQge1xyXG4gIHBhZGRpbmc6IDEycHggMTZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1ncmF5O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5wZXJzb24tY2hhdCB7XHJcbiAgLnVzZXJuYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICB9XHJcblxyXG4gIC5sYXN0LXZpc2l0IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiAjYWZiNGJiO1xyXG4gIH1cclxufVxyXG4uY2hhdF9fY29udHJvbF9fcGFuZWxfX2xpbmsge1xyXG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xyXG4gIHN2ZyB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgJjpob3ZlciBwYXRoIHtcclxuICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgc3Ryb2tlOiAkdGV4dDtcclxuICAgICAgLy8gZmlsbDogJHRleHQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2hhdF9fY29udGVudCB7XHJcbiAgLy8gaGVpZ2h0OiAxMDBweDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBvdmVyZmxvdzogYXV0bztcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxufVxyXG5cclxuLmRhdGUtaW4tY2hhdCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAuZGF0ZSB7XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcclxuICB9XHJcbn1cclxuXHJcbi5tZXNzYWdlLWJsb2NrIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG4gICYubm90LWxhc3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgaW1nIHtcclxuICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBob3RvLXVzZXIge1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgfVxyXG5cclxuICAubWVzc2FnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1lc3NhZ2U7XHJcbiAgICBtYXgtd2lkdGg6IDI3NXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICYubm90LWxhc3Qge1xyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IC03cHg7XHJcbiAgICAgIGJvdHRvbTogMHB4O1xyXG4gICAgICBib3JkZXI6IDdweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAkbWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICAmLnlvdXItbWVzc2FnZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWJsdWU7XHJcbiAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAkZGFyay1ibHVlO1xyXG4gICAgICB9XHJcbiAgICAgICYud3JpdGVkIHtcclxuICAgICAgICAudGltZTo6YWZ0ZXIge1xyXG4gICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgIHdpZHRoOiAxNnB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvaWNvbnMvcmVhZC5zdmcpO1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGltZSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogJHRpbWUtaW4tY2hhdDtcclxuICAgICAgbWFyZ2luLXRvcDogNHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNlbmRfX21lc3NhZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWdyYXk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAxMnB4IDIwcHggMTJweCAxNnB4O1xyXG59XHJcblxyXG4uc2VuZF9fbWVzc2FnZS1pY29uIHtcclxuICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICY6aG92ZXIge1xyXG4gICAgc3ZnIHBhdGgge1xyXG4gICAgICBzdHJva2U6ICR0ZXh0O1xyXG4gICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNlbmRfX21lc3NhZ2UtaWNvbjpub3QoOmZpcnN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbn1cclxuXHJcbi5zZW5kX19tZXNzYWdlLWljb246Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1yaWdodDogMTZweDtcclxufVxyXG5cclxuLndyaXRlLW1lc3NhZ2UtaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuIl19 */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _components_chats_chats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/chats/chats.component */ "GANb");
/* harmony import */ var _components_chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/chat-area/chat-area.component */ "W6Nd");
/* harmony import */ var _components_help_desk_help_desk_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/help-desk/help-desk.component */ "U1Tm");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"],
        _components_chats_chats_component__WEBPACK_IMPORTED_MODULE_4__["ChatsComponent"],
        _components_chat_area_chat_area_component__WEBPACK_IMPORTED_MODULE_5__["ChatAreaComponent"],
        _components_help_desk_help_desk_component__WEBPACK_IMPORTED_MODULE_6__["HelpDeskComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"]] }); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class SidebarComponent {
    constructor() { }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], decls: 82, vars: 0, consts: [[1, "sidebar"], [1, "sidebar__navigation"], [1, "sidebar__header"], ["href", "#", 1, "sidebar__menu"], ["src", "../assets/icons/menu.svg", "alt", "menu"], [1, "nav__chats"], [1, "nav__chat-item"], ["href", "#", 1, "nav__chat-item__link"], [1, "chat-item__content"], ["src", "../assets/icons/favourites.svg", "alt", "favorites"], [1, "nav__chat-item__link__name"], [1, "chat-item__notification"], [1, "nav__chat-item", "active"], ["src", "../assets/icons/chats.svg", "alt", "chats"], [1, "notification"], [1, "notification", "orange"], [1, "notification", "red"], ["src", "../assets/icons/calls.svg", "alt", "calls"], ["src", "../assets/icons/orders.svg", "alt", "orders"], [1, "notification", "disable"], ["src", "../assets/icons/map.svg", "alt", "persone-on-map"], ["src", "../assets/icons/camera.svg", "alt", "cameras"], ["src", "../assets/icons/administration.svg", "alt", "administration"], [1, "sidebar__footer"], ["href", "#", 1, "user-profile"], ["src", "../assets/img/users/eugene.jfif", "alt", "user-photo", 1, "user-photo"], [1, "username"], [1, "settings"], ["href", "#"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 1, "hovered-icon"], ["d", "M10.325 4.317C10.751 2.561 13.249 2.561 13.675 4.317C13.7389 4.5808 13.8642 4.82578 14.0407 5.032C14.2172 5.23822 14.4399 5.39985 14.6907 5.50375C14.9414 5.60764 15.2132 5.65085 15.4838 5.62987C15.7544 5.60889 16.0162 5.5243 16.248 5.383C17.791 4.443 19.558 6.209 18.618 7.753C18.4769 7.98466 18.3924 8.24634 18.3715 8.51677C18.3506 8.78721 18.3938 9.05877 18.4975 9.30938C18.6013 9.55999 18.7627 9.78258 18.9687 9.95905C19.1747 10.1355 19.4194 10.2609 19.683 10.325C21.439 10.751 21.439 13.249 19.683 13.675C19.4192 13.7389 19.1742 13.8642 18.968 14.0407C18.7618 14.2172 18.6001 14.4399 18.4963 14.6907C18.3924 14.9414 18.3491 15.2132 18.3701 15.4838C18.3911 15.7544 18.4757 16.0162 18.617 16.248C19.557 17.791 17.791 19.558 16.247 18.618C16.0153 18.4769 15.7537 18.3924 15.4832 18.3715C15.2128 18.3506 14.9412 18.3938 14.6906 18.4975C14.44 18.6013 14.2174 18.7627 14.0409 18.9687C13.8645 19.1747 13.7391 19.4194 13.675 19.683C13.249 21.439 10.751 21.439 10.325 19.683C10.2611 19.4192 10.1358 19.1742 9.95929 18.968C9.7828 18.7618 9.56011 18.6001 9.30935 18.4963C9.05859 18.3924 8.78683 18.3491 8.51621 18.3701C8.24559 18.3911 7.98375 18.4757 7.752 18.617C6.209 19.557 4.442 17.791 5.382 16.247C5.5231 16.0153 5.60755 15.7537 5.62848 15.4832C5.64942 15.2128 5.60624 14.9412 5.50247 14.6906C5.3987 14.44 5.23726 14.2174 5.03127 14.0409C4.82529 13.8645 4.58056 13.7391 4.317 13.675C2.561 13.249 2.561 10.751 4.317 10.325C4.5808 10.2611 4.82578 10.1358 5.032 9.95929C5.23822 9.7828 5.39985 9.56011 5.50375 9.30935C5.60764 9.05859 5.65085 8.78683 5.62987 8.51621C5.60889 8.24559 5.5243 7.98375 5.383 7.752C4.443 6.209 6.209 4.442 7.753 5.382C8.753 5.99 10.049 5.452 10.325 4.317Z", "stroke", "#BDBDBD", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z", "stroke", "#BDBDBD", "stroke-width", "1.5", "stroke-linecap", "round", "stroke-linejoin", "round"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "VISIO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u0418\u0437\u0431\u0440\u0430\u043D\u043D\u043E\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u0427\u0430\u0442\u044B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "245");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "23");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u0417\u0432\u043E\u043D\u043A\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " \u0417\u0430\u043A\u0430\u0437\u044B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "23");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " \u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B \u043D\u0430 \u043A\u0430\u0440\u0442\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " \u041A\u0430\u043C\u0435\u0440\u044B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " \u0410\u0434\u043C\u0438\u043D\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "\u0415\u0432\u0433\u0435\u043D\u0438\u0439 \u0415\u043B\u0438\u0441\u0435\u0435\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "svg", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "path", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "path", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".sidebar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 20px 16px;\n  background-color: #2f3136;\n  border-right: 1px solid #555657;\n  width: 18vw;\n  height: 100vh;\n}\n.sidebar__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 26px;\n}\n.sidebar__menu[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.nav__chats[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.nav__chat-item[_ngcontent-%COMP%] {\n  padding: 8px;\n  border-radius: 8px;\n  transition: 0.2s;\n}\n.nav__chat-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 16px;\n}\n.nav__chat-item[_ngcontent-%COMP%]:hover {\n  background-color: #555657;\n  transition: 0.2s;\n}\n.nav__chat-item[_ngcontent-%COMP%]:active {\n  background-color: #125bc8;\n  transition: 0.2s;\n}\n.nav__chat-item.active[_ngcontent-%COMP%] {\n  background-color: #125bc8;\n}\n.nav__chat-item.active[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.nav__chat-item.active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  fill: #fff;\n}\n.nav__chat-item__link[_ngcontent-%COMP%] {\n  color: #fff;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  text-decoration: none;\n  transition: 0.2s;\n  opacity: 0.7;\n}\n.chat-item__content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.sidebar__footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.sidebar__footer[_ngcontent-%COMP%]   .user-profile[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: #fff;\n  text-decoration: none;\n}\n.sidebar__footer[_ngcontent-%COMP%]   .user-photo[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  object-fit: cover;\n  border-radius: 16px;\n  border: 2px solid #fff;\n}\n.sidebar__footer[_ngcontent-%COMP%]   .user-photo[_ngcontent-%COMP%]:hover {\n  transform: scale(1.03);\n  transition: 0.2s;\n}\n.sidebar__footer[_ngcontent-%COMP%]   .username[_ngcontent-%COMP%] {\n  opacity: 0.7;\n  margin-left: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBLFdBQUE7QUFLQSxZQUFBO0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBbEJHO0VBbUJILCtCQUFBO0VBRUEsV0FBQTtFQUNBLGFBQUE7QUFmSjtBQWtCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBZko7QUFrQkE7RUFDSSxrQkFBQTtBQWZKO0FBa0JBO0VBQ0kscUJBQUE7QUFmSjtBQWtCQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBZko7QUFpQkk7RUFDSSxrQkFBQTtBQWZSO0FBa0JJO0VBQ0kseUJBbERLO0VBbURMLGdCQUFBO0FBaEJSO0FBbUJJO0VBQ0kseUJBMURLO0VBMkRMLGdCQUFBO0FBakJSO0FBb0JJO0VBQ0kseUJBL0RLO0FBNkNiO0FBbUJRO0VBQ0ksVUFBQTtBQWpCWjtBQW1CUTtFQUNJLFVBOURMO0FBNkNQO0FBdUJBO0VBQ0ksV0FyRUc7RUFzRUgsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQXBCSjtBQXVCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQXBCSjtBQXdCQTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBdEJKO0FBd0JJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0E3RkQ7RUE4RkMscUJBQUE7QUF0QlI7QUF5Qkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQXZCUjtBQXlCUTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7QUF2Qlo7QUEyQkk7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7QUF6QlI7QUE4QkEsZ0JBQUEiLCJmaWxlIjoic2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRtYWluLWNvbG9yOiAjMTI1YmM4O1xyXG4kZGFyay1ibHVlOiAjMzE0ODZkO1xyXG4kYmFja2dyb3VuZC1jb2xvcjogIzFjMWUyMDtcclxuJGxpZ2h0LWdyYXk6ICM1NTU2NTc7XHJcbiRncmF5OiAjMmYzMTM2O1xyXG4kZGFyay1ncmF5OiAjMzMzNDM2O1xyXG4kdGV4dDogI2ZmZjtcclxuJHlvdXItbWVzc2FnZTogIzZmYTVmNjtcclxuJHBpbms6ICNlODM2NTc7XHJcblxyXG4vKiBkaWFsb2cgKi9cclxuJHJlZDogI2ZmM2IzMDtcclxuJG9yYW5nZTogI2ZmOGQzNjtcclxuJGdyZWVuOiAjNGNkOTY0O1xyXG5cclxuLyogc2lkZWJhciAqL1xyXG5cclxuLnNpZGViYXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBwYWRkaW5nOiAyMHB4IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JheTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICRsaWdodC1ncmF5O1xyXG4gICAgLy8gd2lkdGg6IDI1NnB4O1xyXG4gICAgd2lkdGg6IDE4dnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uc2lkZWJhcl9faGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjZweDtcclxufVxyXG5cclxuLnNpZGViYXJfX21lbnUge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG59XHJcblxyXG4ubmF2X19jaGF0cyB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5uYXZfX2NoYXQtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0LWdyYXk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogLjJzO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWN0aXZlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWFpbi1jb2xvcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtYWluLWNvbG9yO1xyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBmaWxsOiAkdGV4dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4ubmF2X19jaGF0LWl0ZW1fX2xpbmsge1xyXG4gICAgY29sb3I6ICR0ZXh0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi5jaGF0LWl0ZW1fX2NvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4uc2lkZWJhcl9fZm9vdGVyIHtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAudXNlci1wcm9maWxlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICR0ZXh0O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAudXNlci1waG90byB7XHJcbiAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHRleHQ7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAuMnM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC51c2VybmFtZSB7XHJcbiAgICAgICAgb3BhY2l0eTogLjc7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKiBzaWRlYmFyIGVuZCAqL1xyXG4iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


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