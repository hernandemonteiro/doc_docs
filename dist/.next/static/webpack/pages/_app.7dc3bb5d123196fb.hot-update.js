"use strict";

/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app", {
  /***/"./core/readDir.js":
  /*!*************************!*\
    !*** ./core/readDir.js ***!
    \*************************/
  /***/
  function (module, __webpack_exports__, __webpack_require__) {
    eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"readDirs\": function() { return /* binding */ readDirs; },\n/* harmony export */   \"readNavDir\": function() { return /* binding */ readNavDir; }\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"?14ca\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction readNavDir(dir) {\n  var fs = new (fs__WEBPACK_IMPORTED_MODULE_0___default())();\n  var structSubDirs = {};\n  fs.readdirSync(dir).sort(function (a, b) {\n    return fs.statSync(dir + \"/\" + a).mtime.getTime() - fs.statSync(dir + \"/\" + b).mtime.getTime();\n  }).forEach(function (file) {\n    if (fs.lstatSync(dir + \"/\" + file).isFile()) {\n      structSubDirs[file] = null;\n    } else if (fs.lstatSync(dir + \"/\" + file).isDirectory()) {\n      structSubDirs[file] = readDirs(dir + \"/\" + file);\n    }\n  });\n  var arrayDirs = [];\n\n  for (var _dir in structSubDirs) {\n    !_dir.match(\".tsx\" || 0 || 0 || 0 || 0 || 0) && arrayDirs.push(_dir);\n  }\n\n  return arrayDirs;\n}\nfunction readDirs(dir) {\n  var struct = {};\n  var fs = new (fs__WEBPACK_IMPORTED_MODULE_0___default())();\n  fs.readdirSync(dir).sort(function (a, b) {\n    return fs.statSync(dir + \"/\" + a).mtime.getTime() - fs.statSync(dir + \"/\" + b).mtime.getTime();\n  }).forEach(function (file) {\n    if (fs.lstatSync(dir + \"/\" + file).isFile()) {\n      struct[file] = null;\n    } else if (fs.lstatSync(dir + \"/\" + file).isDirectory()) {\n      struct[file] = readDirs(dir + \"/\" + file);\n    }\n  });\n  return struct;\n}\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb3JlL3JlYWREaXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ08sU0FBU0MsVUFBVCxDQUFvQkMsR0FBcEIsRUFBeUI7RUFDOUIsSUFBTUMsRUFBRSxHQUFHLElBQUlILDJDQUFKLEVBQVg7RUFDQSxJQUFJSSxhQUFhLEdBQUcsRUFBcEI7RUFDQUQsRUFBRSxDQUFDRSxXQUFILENBQWVILEdBQWYsRUFDR0ksSUFESCxDQUVJLFVBQUNDLENBQUQsRUFBSUMsQ0FBSjtJQUFBLE9BQ0VMLEVBQUUsQ0FBQ00sUUFBSCxDQUFZUCxHQUFHLEdBQUcsR0FBTixHQUFZSyxDQUF4QixFQUEyQkcsS0FBM0IsQ0FBaUNDLE9BQWpDLEtBQ0FSLEVBQUUsQ0FBQ00sUUFBSCxDQUFZUCxHQUFHLEdBQUcsR0FBTixHQUFZTSxDQUF4QixFQUEyQkUsS0FBM0IsQ0FBaUNDLE9BQWpDLEVBRkY7RUFBQSxDQUZKLEVBTUdDLE9BTkgsQ0FNVyxVQUFDQyxJQUFELEVBQVU7SUFDakIsSUFBSVYsRUFBRSxDQUFDVyxTQUFILENBQWFaLEdBQUcsR0FBRyxHQUFOLEdBQVlXLElBQXpCLEVBQStCRSxNQUEvQixFQUFKLEVBQTZDO01BQzNDWCxhQUFhLENBQUNTLElBQUQsQ0FBYixHQUFzQixJQUF0QjtJQUNELENBRkQsTUFFTyxJQUFJVixFQUFFLENBQUNXLFNBQUgsQ0FBYVosR0FBRyxHQUFHLEdBQU4sR0FBWVcsSUFBekIsRUFBK0JHLFdBQS9CLEVBQUosRUFBa0Q7TUFDdkRaLGFBQWEsQ0FBQ1MsSUFBRCxDQUFiLEdBQXNCSSxRQUFRLENBQUNmLEdBQUcsR0FBRyxHQUFOLEdBQVlXLElBQWIsQ0FBOUI7SUFDRDtFQUNGLENBWkg7RUFhQSxJQUFNSyxTQUFTLEdBQUcsRUFBbEI7O0VBQ0EsS0FBSyxJQUFNaEIsSUFBWCxJQUFrQkUsYUFBbEIsRUFBaUM7SUFDL0IsQ0FBQ0YsSUFBRyxDQUFDaUIsS0FBSixDQUFVLFVBQVUsQ0FBVixJQUFtQixDQUFuQixJQUE0QixDQUE1QixJQUFzQyxDQUF0QyxJQUErQyxDQUF6RCxDQUFELElBQ0VELFNBQVMsQ0FBQ0UsSUFBVixDQUFlbEIsSUFBZixDQURGO0VBRUQ7O0VBQ0QsT0FBT2dCLFNBQVA7QUFDRDtBQUVNLFNBQVNELFFBQVQsQ0FBa0JmLEdBQWxCLEVBQXVCO0VBQzVCLElBQUltQixNQUFNLEdBQUcsRUFBYjtFQUNBLElBQU1sQixFQUFFLEdBQUcsSUFBSUgsMkNBQUosRUFBWDtFQUNBRyxFQUFFLENBQUNFLFdBQUgsQ0FBZUgsR0FBZixFQUNHSSxJQURILENBRUksVUFBQ0MsQ0FBRCxFQUFJQyxDQUFKO0lBQUEsT0FDRUwsRUFBRSxDQUFDTSxRQUFILENBQVlQLEdBQUcsR0FBRyxHQUFOLEdBQVlLLENBQXhCLEVBQTJCRyxLQUEzQixDQUFpQ0MsT0FBakMsS0FDQVIsRUFBRSxDQUFDTSxRQUFILENBQVlQLEdBQUcsR0FBRyxHQUFOLEdBQVlNLENBQXhCLEVBQTJCRSxLQUEzQixDQUFpQ0MsT0FBakMsRUFGRjtFQUFBLENBRkosRUFNR0MsT0FOSCxDQU1XLFVBQUNDLElBQUQsRUFBVTtJQUNqQixJQUFJVixFQUFFLENBQUNXLFNBQUgsQ0FBYVosR0FBRyxHQUFHLEdBQU4sR0FBWVcsSUFBekIsRUFBK0JFLE1BQS9CLEVBQUosRUFBNkM7TUFDM0NNLE1BQU0sQ0FBQ1IsSUFBRCxDQUFOLEdBQWUsSUFBZjtJQUNELENBRkQsTUFFTyxJQUFJVixFQUFFLENBQUNXLFNBQUgsQ0FBYVosR0FBRyxHQUFHLEdBQU4sR0FBWVcsSUFBekIsRUFBK0JHLFdBQS9CLEVBQUosRUFBa0Q7TUFDdkRLLE1BQU0sQ0FBQ1IsSUFBRCxDQUFOLEdBQWVJLFFBQVEsQ0FBQ2YsR0FBRyxHQUFHLEdBQU4sR0FBWVcsSUFBYixDQUF2QjtJQUNEO0VBQ0YsQ0FaSDtFQWFBLE9BQU9RLE1BQVA7QUFDRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb3JlL3JlYWREaXIuanM/ZDkyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZjJzIGZyb20gXCJmc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIHJlYWROYXZEaXIoZGlyKSB7XG4gIGNvbnN0IGZzID0gbmV3IGYycygpO1xuICBsZXQgc3RydWN0U3ViRGlycyA9IHt9O1xuICBmcy5yZWFkZGlyU3luYyhkaXIpXG4gICAgLnNvcnQoXG4gICAgICAoYSwgYikgPT5cbiAgICAgICAgZnMuc3RhdFN5bmMoZGlyICsgXCIvXCIgKyBhKS5tdGltZS5nZXRUaW1lKCkgLVxuICAgICAgICBmcy5zdGF0U3luYyhkaXIgKyBcIi9cIiArIGIpLm10aW1lLmdldFRpbWUoKVxuICAgIClcbiAgICAuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgaWYgKGZzLmxzdGF0U3luYyhkaXIgKyBcIi9cIiArIGZpbGUpLmlzRmlsZSgpKSB7XG4gICAgICAgIHN0cnVjdFN1YkRpcnNbZmlsZV0gPSBudWxsO1xuICAgICAgfSBlbHNlIGlmIChmcy5sc3RhdFN5bmMoZGlyICsgXCIvXCIgKyBmaWxlKS5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgIHN0cnVjdFN1YkRpcnNbZmlsZV0gPSByZWFkRGlycyhkaXIgKyBcIi9cIiArIGZpbGUpO1xuICAgICAgfVxuICAgIH0pO1xuICBjb25zdCBhcnJheURpcnMgPSBbXTtcbiAgZm9yIChjb25zdCBkaXIgaW4gc3RydWN0U3ViRGlycykge1xuICAgICFkaXIubWF0Y2goXCIudHN4XCIgfHwgXCIudHNcIiB8fCBcIi5qc1wiIHx8IFwiLmpzeFwiIHx8IFwiLm1kXCIgfHwgXCIubWR4XCIpICYmXG4gICAgICBhcnJheURpcnMucHVzaChkaXIpO1xuICB9XG4gIHJldHVybiBhcnJheURpcnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFkRGlycyhkaXIpIHtcbiAgbGV0IHN0cnVjdCA9IHt9O1xuICBjb25zdCBmcyA9IG5ldyBmMnMoKTtcbiAgZnMucmVhZGRpclN5bmMoZGlyKVxuICAgIC5zb3J0KFxuICAgICAgKGEsIGIpID0+XG4gICAgICAgIGZzLnN0YXRTeW5jKGRpciArIFwiL1wiICsgYSkubXRpbWUuZ2V0VGltZSgpIC1cbiAgICAgICAgZnMuc3RhdFN5bmMoZGlyICsgXCIvXCIgKyBiKS5tdGltZS5nZXRUaW1lKClcbiAgICApXG4gICAgLmZvckVhY2goKGZpbGUpID0+IHtcbiAgICAgIGlmIChmcy5sc3RhdFN5bmMoZGlyICsgXCIvXCIgKyBmaWxlKS5pc0ZpbGUoKSkge1xuICAgICAgICBzdHJ1Y3RbZmlsZV0gPSBudWxsO1xuICAgICAgfSBlbHNlIGlmIChmcy5sc3RhdFN5bmMoZGlyICsgXCIvXCIgKyBmaWxlKS5pc0RpcmVjdG9yeSgpKSB7XG4gICAgICAgIHN0cnVjdFtmaWxlXSA9IHJlYWREaXJzKGRpciArIFwiL1wiICsgZmlsZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIHJldHVybiBzdHJ1Y3Q7XG59XG4iXSwibmFtZXMiOlsiZjJzIiwicmVhZE5hdkRpciIsImRpciIsImZzIiwic3RydWN0U3ViRGlycyIsInJlYWRkaXJTeW5jIiwic29ydCIsImEiLCJiIiwic3RhdFN5bmMiLCJtdGltZSIsImdldFRpbWUiLCJmb3JFYWNoIiwiZmlsZSIsImxzdGF0U3luYyIsImlzRmlsZSIsImlzRGlyZWN0b3J5IiwicmVhZERpcnMiLCJhcnJheURpcnMiLCJtYXRjaCIsInB1c2giLCJzdHJ1Y3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./core/readDir.js\n"));

    /***/
  }
});