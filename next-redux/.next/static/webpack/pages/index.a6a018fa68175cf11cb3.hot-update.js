webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
false,

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
false,

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _features_counter_counterSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../features/counter/counterSlice */ \"./src/features/counter/counterSlice.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/yonatanmk/projects/next/next-redux/src/pages/index.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nvar Index = function Index(props) {\n  _s();\n\n  var count = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"])(_features_counter_counterSlice__WEBPACK_IMPORTED_MODULE_3__[\"selectCount\"]);\n  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(\"2\"),\n      incrementAmount = _useState[0],\n      setIncrementAmount = _useState[1];\n\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, \"MobX and Next.js example\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, count), __jsx(\"button\", {\n    onClick: function onClick() {\n      return dispatch(Object(_features_counter_counterSlice__WEBPACK_IMPORTED_MODULE_3__[\"decrement\"])());\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }\n  }, \"+\"), __jsx(\"button\", {\n    onClick: function onClick() {\n      return dispatch(Object(_features_counter_counterSlice__WEBPACK_IMPORTED_MODULE_3__[\"increment\"])());\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, \"-\"));\n};\n\n_s(Index, \"UdgHxGQHCVyk74Fz0RUWHAaaunk=\", false, function () {\n  return [react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useSelector\"], react_redux__WEBPACK_IMPORTED_MODULE_2__[\"useDispatch\"]];\n});\n\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index); // export function getStaticProps(context) {\n//   const { params } = context;\n//   console.log(\"CONTEXT\");\n//   console.log(context);\n//   return {\n//     props: {\n//       xxx: \"xxx\",\n//     },\n//   };\n// }\n\nvar _c;\n\n$RefreshReg$(_c, \"Index\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQ1NzAiXSwibmFtZXMiOlsiSW5kZXgiLCJwcm9wcyIsImNvdW50IiwidXNlU2VsZWN0b3IiLCJzZWxlY3RDb3VudCIsImRpc3BhdGNoIiwidXNlRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImluY3JlbWVudEFtb3VudCIsInNldEluY3JlbWVudEFtb3VudCIsImRlY3JlbWVudCIsImluY3JlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBU0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3ZCLE1BQU1DLEtBQUssR0FBR0MsK0RBQVcsQ0FBQ0MsMEVBQUQsQ0FBekI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLCtEQUFXLEVBQTVCOztBQUNBLGtCQUE4Q0Msc0RBQVEsQ0FBQyxHQUFELENBQXREO0FBQUEsTUFBT0MsZUFBUDtBQUFBLE1BQXdCQyxrQkFBeEI7O0FBRUEsU0FDRSxtRUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJUCxLQUFKLENBRkYsRUFHRTtBQUFRLFdBQU8sRUFBRTtBQUFBLGFBQU1HLFFBQVEsQ0FBQ0ssZ0ZBQVMsRUFBVixDQUFkO0FBQUEsS0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUhGLEVBSUU7QUFBUSxXQUFPLEVBQUU7QUFBQSxhQUFNTCxRQUFRLENBQUNNLGdGQUFTLEVBQVYsQ0FBZDtBQUFBLEtBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FKRixDQURGO0FBUUQsQ0FiRDs7R0FBTVgsSztVQUNVRyx1RCxFQUNHRyx1RDs7O0tBRmJOLEs7QUFlU0Esb0VBQWYsRSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7XG4gIGRlY3JlbWVudCxcbiAgaW5jcmVtZW50LFxuICBpbmNyZW1lbnRCeUFtb3VudCxcbiAgaW5jcmVtZW50QXN5bmMsXG4gIGluY3JlbWVudElmT2RkLFxuICBzZWxlY3RDb3VudCxcbn0gZnJvbSBcIi4uL2ZlYXR1cmVzL2NvdW50ZXIvY291bnRlclNsaWNlXCI7XG5cbmNvbnN0IEluZGV4ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IGNvdW50ID0gdXNlU2VsZWN0b3Ioc2VsZWN0Q291bnQpO1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IFtpbmNyZW1lbnRBbW91bnQsIHNldEluY3JlbWVudEFtb3VudF0gPSB1c2VTdGF0ZShcIjJcIik7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxPk1vYlggYW5kIE5leHQuanMgZXhhbXBsZTwvaDE+XG4gICAgICA8cD57Y291bnR9PC9wPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBkaXNwYXRjaChkZWNyZW1lbnQoKSl9Pis8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGlzcGF0Y2goaW5jcmVtZW50KCkpfT4tPC9idXR0b24+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcblxuLy8gZXhwb3J0IGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbi8vICAgY29uc3QgeyBwYXJhbXMgfSA9IGNvbnRleHQ7XG4vLyAgIGNvbnNvbGUubG9nKFwiQ09OVEVYVFwiKTtcbi8vICAgY29uc29sZS5sb2coY29udGV4dCk7XG5cbi8vICAgcmV0dXJuIHtcbi8vICAgICBwcm9wczoge1xuLy8gICAgICAgeHh4OiBcInh4eFwiLFxuLy8gICAgIH0sXG4vLyAgIH07XG4vLyB9XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ })

})