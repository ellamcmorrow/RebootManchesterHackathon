"use strict";
exports.id = 869;
exports.ids = [869];
exports.modules = {

/***/ 869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   theme: () => (/* binding */ theme)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(893);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);


// you can extend the theme and add custom colors, font styles, etc.
const colors = {
    greenDark: "#003d2d",
    greenLight: "#2f7d66",
    white: "#ffffff",
    offWhite: "#f8f8f8",
    darkGray: "#333333",
    black: "#000000"
};
const fontWeights = {
    normal: 400,
    medium: 600,
    bold: 800
};
const fontFamily = {
    base: "GT Ultra Standard",
    bold: "GT Ultra Median"
};
const breakpoints = {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px"
};
const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.extendTheme)({
    colors,
    fontWeights,
    fontFamily,
    breakpoints
});
function MyApp({ Component, pageProps }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
        theme: theme,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);


/***/ })

};
;