"use strict";
exports.id = 486;
exports.ids = [486];
exports.modules = {

/***/ 1486:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ellipse__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4284);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2947);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9648);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6555);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_4__, uuid__WEBPACK_IMPORTED_MODULE_5__]);
([axios__WEBPACK_IMPORTED_MODULE_4__, uuid__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Contact_us = ()=>{
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [phone, setphone] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [success, setSuccess] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [onTime, setOneTime] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        var $inputs = jquery__WEBPACK_IMPORTED_MODULE_2___default()(".input-wrapper-second input");
        $inputs.on("focus", function() {
            var $self = $inputs;
            $self.prev().addClass("active");
        });
        $inputs.on("focusout", function() {
            var $self = $inputs;
            $self.val() == "" ? $self.prev().removeClass("active") : "";
        });
    }, []);
    const sendInfo = ()=>{
        if (email !== "" && phone !== "" && name !== "" && onTime === false) {
            setOneTime(true);
            axios__WEBPACK_IMPORTED_MODULE_4__["default"].post("http://localhost:3004/feedback", {
                id: (0,uuid__WEBPACK_IMPORTED_MODULE_5__.v4)(),
                email: email,
                name: name,
                phone: phone
            }).then((res)=>{
                console.log(res.data);
                setSuccess(true);
            }).catch((error)=>{
                console.log(error);
            });
            setTimeout(()=>{
                setSuccess(false);
            }, 1000);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "Contact_us",
        id: "Contact_us",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: success ? {
                    opacity: 1
                } : {
                    opacity: 0
                },
                className: "messageSuccess",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: "Success"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "Contact_us__block",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_ellipse__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        children: "Contact us"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "p-1",
                        children: "Do you have any kind of help please contact with us."
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-wrapper-second",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                children: "Name"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "name",
                                onChange: (e)=>setName(e.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-wrapper-second",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                children: "Phone"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "phone",
                                onChange: (e)=>setphone(e.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "input-wrapper-second",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                children: "E-mail"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "email",
                                onChange: (e)=>setEmail(e.target.value)
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        type: "button",
                        onClick: sendInfo,
                        style: email === "" && phone === "" && name === "" ? {
                            pointerEvents: "none"
                        } : {
                            pointerEvents: "all"
                        },
                        children: "Send"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contact_us);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;