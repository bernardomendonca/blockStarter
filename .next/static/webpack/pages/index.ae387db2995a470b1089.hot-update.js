"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./ethereum/factory.js":
/*!*****************************!*\
  !*** ./ethereum/factory.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web3 */ "./ethereum/web3.js");
/* harmony import */ var _build_campaignFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./build/campaignFactory */ "./ethereum/build/campaignFactory.json");
/* module decorator */ module = __webpack_require__.hmd(module);
// Getting the instance that was created in web3.js (NOT THE LIBRARY!)
 // importing the campaign Factory ABI

 // Creating the campaignFactory instance
// For that, it will be necessary to bring in the ABI and bytecode

var instance = new _web3__WEBPACK_IMPORTED_MODULE_0__.default.eth.Contract( // This particular contract has been exported as a JSON, therefore, it will be parsed as so:
JSON.parse(_build_campaignFactory__WEBPACK_IMPORTED_MODULE_1__.interface), // The address previously generated when running deploy.js
'0xE389fD00FCb7E14F3c660547311c6c95FBF0B9eA');
/* harmony default export */ __webpack_exports__["default"] = (instance);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWUzODdkYjI5OTVhNDcwYjEwODkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Q0FFQTs7Q0FHQTtBQUNBOztBQUNBLElBQU1FLFFBQVEsR0FBRyxJQUFJRix1REFBSixFQUNiO0FBQ0FLLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCw2REFBWCxDQUZhLEVBR2I7QUFDQSw0Q0FKYSxDQUFqQjtBQU9BLCtEQUFlQyxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2V0aGVyZXVtL2ZhY3RvcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gR2V0dGluZyB0aGUgaW5zdGFuY2UgdGhhdCB3YXMgY3JlYXRlZCBpbiB3ZWIzLmpzIChOT1QgVEhFIExJQlJBUlkhKVxyXG5pbXBvcnQgd2ViMyBmcm9tICcuL3dlYjMnXHJcbi8vIGltcG9ydGluZyB0aGUgY2FtcGFpZ24gRmFjdG9yeSBBQklcclxuaW1wb3J0IGNhbXBhaWduRmFjdG9yeSBmcm9tICcuL2J1aWxkL2NhbXBhaWduRmFjdG9yeSc7XHJcblxyXG4vLyBDcmVhdGluZyB0aGUgY2FtcGFpZ25GYWN0b3J5IGluc3RhbmNlXHJcbi8vIEZvciB0aGF0LCBpdCB3aWxsIGJlIG5lY2Vzc2FyeSB0byBicmluZyBpbiB0aGUgQUJJIGFuZCBieXRlY29kZVxyXG5jb25zdCBpbnN0YW5jZSA9IG5ldyB3ZWIzLmV0aC5Db250cmFjdChcclxuICAgIC8vIFRoaXMgcGFydGljdWxhciBjb250cmFjdCBoYXMgYmVlbiBleHBvcnRlZCBhcyBhIEpTT04sIHRoZXJlZm9yZSwgaXQgd2lsbCBiZSBwYXJzZWQgYXMgc286XHJcbiAgICBKU09OLnBhcnNlKGNhbXBhaWduRmFjdG9yeS5pbnRlcmZhY2UpLFxyXG4gICAgLy8gVGhlIGFkZHJlc3MgcHJldmlvdXNseSBnZW5lcmF0ZWQgd2hlbiBydW5uaW5nIGRlcGxveS5qc1xyXG4gICAgJzB4RTM4OWZEMDBGQ2I3RTE0RjNjNjYwNTQ3MzExYzZjOTVGQkYwQjllQSdcclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluc3RhbmNlOyJdLCJuYW1lcyI6WyJ3ZWIzIiwiY2FtcGFpZ25GYWN0b3J5IiwiaW5zdGFuY2UiLCJldGgiLCJDb250cmFjdCIsIkpTT04iLCJwYXJzZSJdLCJzb3VyY2VSb290IjoiIn0=