"use strict";
exports.id = 425;
exports.ids = [425];
exports.modules = {

/***/ 4425:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4287);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(gsap__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4965);
/* harmony import */ var gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_locomotive_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2966);
/* harmony import */ var react_locomotive_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_locomotive_scroll__WEBPACK_IMPORTED_MODULE_3__);




const ScrollTriggerProxy = ()=>{
    const { scroll  } = (0,react_locomotive_scroll__WEBPACK_IMPORTED_MODULE_3__.useLocomotiveScroll)();
    gsap__WEBPACK_IMPORTED_MODULE_0___default().registerPlugin((gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1___default()));
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (scroll) {
            const element = scroll?.el;
            scroll.on("scroll", (gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1___default().update));
            gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1___default().scrollerProxy(element, {
                scrollTop (value) {
                    return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
                },
                getBoundingClientRect () {
                    return {
                        top: 0,
                        left: 0,
                        width: window.innerWidth,
                        height: window.innerHeight
                    };
                },
                pinType: element.style.transform ? "transform" : "fixed"
            });
        }
        return ()=>{
            gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1___default().addEventListener("refresh", ()=>scroll?.update());
            gsap_dist_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1___default().refresh();
        };
    }, [
        scroll
    ]);
    return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollTriggerProxy);


/***/ })

};
;