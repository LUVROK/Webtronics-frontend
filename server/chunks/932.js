"use strict";
exports.id = 932;
exports.ids = [932];
exports.modules = {

/***/ 4932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ steps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/ellipse.tsx
var ellipse = __webpack_require__(4284);
;// CONCATENATED MODULE: ./components/steps/step_line.tsx

const Step_Line = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "104",
        height: "24",
        viewBox: "0 0 104 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M104 12C104 18.6274 98.6274 24 92 24C85.3726 24 80 18.6274 80 12C80 5.37258 85.3726 0 92 0C98.6274 0 104 5.37258 104 12Z",
                fill: "#3B48D0"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M5.9375 15L-6.22886e-07 12L5.9375 9L5.9375 11.4804L8.63636 11.4804L8.63636 12.5196L5.9375 12.5196L5.9375 15ZM15.5455 12.5196L12.0909 12.5196L12.0909 11.4804L15.5455 11.4804L15.5455 12.5196ZM22.4545 12.5196L19 12.5196L19 11.4804L22.4545 11.4804L22.4545 12.5196ZM29.3636 12.5196L25.9091 12.5196L25.9091 11.4804L29.3636 11.4804L29.3636 12.5196ZM36.2727 12.5196L32.8182 12.5196L32.8182 11.4804L36.2727 11.4804L36.2727 12.5196ZM43.1818 12.5196L39.7273 12.5196L39.7273 11.4804L43.1818 11.4804L43.1818 12.5196ZM50.0909 12.5196L46.6364 12.5196L46.6364 11.4804L50.0909 11.4804L50.0909 12.5196ZM57 12.5196L53.5455 12.5196L53.5455 11.4804L57 11.4804L57 12.5196ZM63.9091 12.5196L60.4546 12.5196L60.4546 11.4804L63.9091 11.4804L63.9091 12.5196ZM70.8182 12.5196L67.3637 12.5196L67.3637 11.4804L70.8182 11.4804L70.8182 12.5196ZM76 12.5196L74.2728 12.5196L74.2728 11.4804L76 11.4804L76 12.5196Z",
                fill: "url(#paint0_linear_51_437)",
                fillOpacity: "0.7"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("defs", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                    id: "paint0_linear_51_437",
                    x1: "8.36",
                    y1: "9.56479",
                    x2: "8.70401",
                    y2: "17.8083",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            stopColor: "#15BFFD"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("stop", {
                            offset: "1",
                            stopColor: "#9C37FD"
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const step_line = (Step_Line);

;// CONCATENATED MODULE: ./pages/steps.tsx




const Steps = ()=>{
    (0,external_react_.useEffect)(()=>{
        document.querySelector(".steps__info-middle").style.height = `${document.querySelector(".steps__info-right").clientHeight.toString()}px`;
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "steps",
        id: "steps",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ellipse/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "steps__block",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        children: "Steps"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "steps__info",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "steps__info-left",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "steps__info_block steps__info_1",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "steps__info_title",
                                                children: "Steps 1"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "steps__info_discription",
                                                children: "Introduction to Front-End"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "p-1",
                                                children: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(step_line, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "steps__info_block steps__info_3",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "steps__info_title",
                                                children: "Steps 2"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "steps__info_discription",
                                                children: "Overview of Development"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "p-1",
                                                children: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(step_line, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "steps__info_block steps__info_5",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "steps__info_title",
                                                children: "Steps 3"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "steps__info_discription",
                                                children: "Introduction to Front-End "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "p-1",
                                                children: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(step_line, {})
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "steps__info-middle",
                                style: {
                                    height: "auto"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "middle-line"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "steps__info-right",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "steps__info_block steps__info_2",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "steps__info_title",
                                                children: "Steps 4"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "steps__info_discription",
                                                children: "Overview of Development"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "p-1",
                                                children: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(step_line, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "steps__info_block steps__info_4",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "steps__info_title",
                                                children: "Steps 5"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "steps__info_discription",
                                                children: "Introduction to Front-End "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "p-1",
                                                children: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(step_line, {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "steps__info_block steps__info_6",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                className: "steps__info_title",
                                                children: "Steps 6"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                className: "steps__info_discription",
                                                children: "Overview of Development"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "p-1",
                                                children: "Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. "
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(step_line, {})
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const steps = (Steps);


/***/ })

};
;