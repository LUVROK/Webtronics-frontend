"use strict";
exports.id = 695;
exports.ids = [695];
exports.modules = {

/***/ 2695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ellipse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4284);



const Questions = ()=>{
    const faq_full = [
        {
            summary: "What is the price?",
            details: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."
        },
        {
            summary: "What is the price?",
            details: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."
        },
        {
            summary: "What is the price?",
            details: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."
        },
        {
            summary: "What is the price?",
            details: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."
        },
        {
            summary: "What is the price?",
            details: "Front-end engineers work closely with designers to make websites beautiful, functional, and fast. This Career Path will teach you not only the necessary languages and technologies, but how to think like a front-end engineer, too."
        }
    ];
    const changeActive = (i)=>{
        if (document.querySelector(`.faq-full:nth-of-type(${i}) svg`).style.height === "62px") {
            document.querySelector(`.faq-full:nth-of-type(${i}) svg`).style.height = "166px";
        // (document.querySelector(`.faq-full:not(:nth-of-type(${i})) svg`) as HTMLElement).style.height = "62px";
        // (document.querySelector(`.faq-full summary:before`) as HTMLElement).style.content = "-";
        } else {
            document.querySelector(`.faq-full:nth-of-type(${i}) svg`).style.height = "62px";
        // (document.querySelector(`.faq-full summary:before`) as HTMLElement).style.content = "+";
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "Questions",
        id: "Questions",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "Questions__block",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ellipse__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                    children: [
                        "Frequently Asked",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                        "Questions"
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "Questions__content",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "Questions__content-left",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    className: "p-1",
                                    children: [
                                        "Do you have any kind of questions?",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        "We are here to help."
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "Questions__mark",
                                    children: "?"
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "Questions__content-right",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "faq-block",
                                children: faq_full.map((data, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "faq-full",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                style: {
                                                    height: "62px",
                                                    width: "100%"
                                                },
                                                viewBox: "0 0 703 166",
                                                fill: "none",
                                                preserveAspectRatio: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M0 158V31.6623L31.6623 0H695C699.418 0 703 3.58172 703 8V129.418L666.418 166H7.99998C3.58171 166 0 162.418 0 158Z",
                                                        fill: "white",
                                                        fillOpacity: "0.05"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                        d: "M0.5 158V31.8694L31.8694 0.5H695C699.142 0.5 702.5 3.85786 702.5 8V129.211L666.211 165.5H7.99998C3.85785 165.5 0.5 162.142 0.5 158Z",
                                                        stroke: "url(#paint0_linear_141_56)",
                                                        strokeOpacity: "0.7"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("defs", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
                                                            id: "paint0_linear_141_56",
                                                            x1: "77.33",
                                                            y1: "15.6259",
                                                            x2: "105.409",
                                                            y2: "240.589",
                                                            gradientUnits: "userSpaceOnUse",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                                    stopColor: "#15BFFD"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("stop", {
                                                                    offset: "1",
                                                                    stopColor: "#9C37FD"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("details", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("summary", {
                                                        onClick: ()=>changeActive(i + 1),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                                                            children: data.summary
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: "faq-details-bottom p-1",
                                                        children: data.details
                                                    })
                                                ]
                                            })
                                        ]
                                    }, i))
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Questions);


/***/ })

};
;