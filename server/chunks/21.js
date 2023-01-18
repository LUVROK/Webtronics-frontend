"use strict";
exports.id = 21;
exports.ids = [21];
exports.modules = {

/***/ 6021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Programming_technologies)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/ellipse.tsx
var ellipse = __webpack_require__(4284);
;// CONCATENATED MODULE: ./components/pentagon/pentagon.tsx


const Pentagon = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: "181",
        height: "230",
        viewBox: "0 0 181 230",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("g", {
                filter: "url(#filter0_b_36_86)",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M174.694 196.301C178.668 193.275 181 188.567 181 183.573L181 16C181 7.16344 173.837 0 165 0L16 0C7.16344 0 0 7.16345 0 16L0 214C0 222.837 7.16346 230 16 230L125.049 230C128.551 230 131.957 228.851 134.743 226.729L174.694 196.301Z",
                        fill: "white",
                        fillOpacity: "0.05"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("path", {
                        d: "M180.5 16L180.5 183.573C180.5 188.411 178.241 192.972 174.391 195.904L134.44 226.331C131.741 228.387 128.442 229.5 125.049 229.5L16 229.5C7.43961 229.5 0.5 222.56 0.5 214L0.5 16C0.5 7.43959 7.43959 0.5 16 0.5L165 0.5C173.56 0.5 180.5 7.43959 180.5 16Z",
                        stroke: "url(#paint0_linear_36_86)",
                        strokeOpacity: "0.7"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("defs", {
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("filter", {
                        id: "filter0_b_36_86",
                        x: "-10",
                        y: "-10",
                        width: "201",
                        height: "250",
                        filterUnits: "userSpaceOnUse",
                        colorInterpolationFilters: "sRGB",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("feFlood", {
                                floodOpacity: "0",
                                result: "BackgroundImageFix"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feGaussianBlur", {
                                in: "BackgroundImageFix",
                                stdDeviation: "5"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feComposite", {
                                in2: "SourceAlpha",
                                operator: "in",
                                result: "effect1_backgroundBlur_36_86"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_backgroundBlur_36_86",
                                result: "shape"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("linearGradient", {
                        id: "paint0_linear_36_86",
                        x1: "161.09",
                        y1: "208.35",
                        x2: "14.5698",
                        y2: "-9.78639",
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
                ]
            })
        ]
    });
};
/* harmony default export */ const pentagon = (Pentagon);

// EXTERNAL MODULE: ./media/images/index.tsx + 13 modules
var media_images = __webpack_require__(6542);
;// CONCATENATED MODULE: ./pages/Programming_technologies.tsx





const Programming_technologies = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "Programming-technologies",
        id: "Programming-technologies",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ellipse/* default */.Z, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "Programming-technologies__block",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                        children: [
                            "Programming",
                            /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                            "technologies"
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "Programming_technologies__discription",
                        children: "By the end, you’ll have the portfolio and interview skills you need to start your new career."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "Programming_technologies__technologiesList",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "Programming_technologies__technologiesList_element Programming_technologies__Angular",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(pentagon, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: media_images/* Angular.src */.jh.src,
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "Angular"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "Programming_technologies__technologiesList_element Programming_technologies__React",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(pentagon, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: media_images/* vue.src */.Lm.src,
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "React"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "Programming_technologies__technologiesList_element Programming_technologies__Vue.js",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(pentagon, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: media_images/* react.src */.Ym.src,
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "Vue.js"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "Programming_technologies__technologiesList_element Programming_technologies__JavaScript",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(pentagon, {}),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: media_images.js.src,
                                        alt: ""
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                        children: "JavaScript"
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
/* harmony default export */ const pages_Programming_technologies = (Programming_technologies);


/***/ })

};
;