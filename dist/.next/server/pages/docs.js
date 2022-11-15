/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
  var exports = {};
  exports.id = "pages/docs";
  exports.ids = ["pages/docs"];
  exports.modules = {
    /***/"./dist/components/Docs/Code/index.js":
    /*!********************************************!*\
      !*** ./dist/components/Docs/Code/index.js ***!
      \********************************************/
    /***/
    (__unused_webpack_module, exports, __webpack_require__) => {
      "use strict";

      eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = Code;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _highlight = _interopRequireDefault(__webpack_require__(/*! highlight.js */ \"highlight.js\"));\n\nvar _javascript = _interopRequireDefault(__webpack_require__(/*! highlight.js/lib/languages/javascript */ \"highlight.js/lib/languages/javascript\"));\n\nvar _typescript = _interopRequireDefault(__webpack_require__(/*! highlight.js/lib/languages/typescript */ \"highlight.js/lib/languages/typescript\"));\n\n__webpack_require__(/*! highlight.js/styles/github-dark.css */ \"./node_modules/highlight.js/styles/github-dark.css\");\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : {\n    \"default\": obj\n  };\n}\n\n_highlight[\"default\"].registerLanguage(\"javascript\", _javascript[\"default\"]);\n\n_highlight[\"default\"].registerLanguage(\"typescript\", _typescript[\"default\"]);\n\nfunction Code(props) {\n  setTimeout(function () {\n    return _highlight[\"default\"].highlightAll();\n  }, 300);\n  return /*#__PURE__*/_react[\"default\"].createElement(\"pre\", {\n    style: {\n      margin: \"1%\"\n    }\n  }, /*#__PURE__*/_react[\"default\"].createElement(\"code\", {\n    style: {\n      borderRadius: \"7px\"\n    },\n    className: props.language\n  }, \"\".concat(props.code)));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9kaXN0L2NvbXBvbmVudHMvRG9jcy9Db2RlL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViQSw4Q0FBNkM7RUFDM0NHLEtBQUssRUFBRTtBQURvQyxDQUE3QztBQUdBRCxrQkFBQSxHQUFxQkUsSUFBckI7O0FBQ0EsSUFBSUMsTUFBTSxHQUFHQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvQkFBRCxDQUFSLENBQW5DOztBQUNBLElBQUlDLFVBQVUsR0FBR0Ysc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsa0NBQUQsQ0FBUixDQUF2Qzs7QUFDQSxJQUFJRSxXQUFXLEdBQUdILHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLG9GQUFELENBQVIsQ0FBeEM7O0FBQ0EsSUFBSUcsV0FBVyxHQUFHSixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyxvRkFBRCxDQUFSLENBQXhDOztBQUNBQSxtQkFBTyxDQUFDLCtGQUFELENBQVA7O0FBQ0EsU0FBU0Qsc0JBQVQsQ0FBZ0NLLEdBQWhDLEVBQXFDO0VBQUUsT0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCO0lBQUUsV0FBV0E7RUFBYixDQUFyQztBQUEwRDs7QUFDakdILFVBQVUsQ0FBQyxTQUFELENBQVYsQ0FBc0JLLGdCQUF0QixDQUF1QyxZQUF2QyxFQUFxREosV0FBVyxDQUFDLFNBQUQsQ0FBaEU7O0FBQ0FELFVBQVUsQ0FBQyxTQUFELENBQVYsQ0FBc0JLLGdCQUF0QixDQUF1QyxZQUF2QyxFQUFxREgsV0FBVyxDQUFDLFNBQUQsQ0FBaEU7O0FBQ0EsU0FBU04sSUFBVCxDQUFjVSxLQUFkLEVBQXFCO0VBQ25CQyxVQUFVLENBQUMsWUFBWTtJQUNyQixPQUFPUCxVQUFVLENBQUMsU0FBRCxDQUFWLENBQXNCUSxZQUF0QixFQUFQO0VBQ0QsQ0FGUyxFQUVQLEdBRk8sQ0FBVjtFQUdBLE9BQU8sYUFBYVgsTUFBTSxDQUFDLFNBQUQsQ0FBTixDQUFrQlksYUFBbEIsQ0FBZ0MsS0FBaEMsRUFBdUM7SUFDekRDLEtBQUssRUFBRTtNQUNMQyxNQUFNLEVBQUU7SUFESDtFQURrRCxDQUF2QyxFQUlqQixhQUFhZCxNQUFNLENBQUMsU0FBRCxDQUFOLENBQWtCWSxhQUFsQixDQUFnQyxNQUFoQyxFQUF3QztJQUN0REMsS0FBSyxFQUFFO01BQ0xFLFlBQVksRUFBRTtJQURULENBRCtDO0lBSXREQyxTQUFTLEVBQUVQLEtBQUssQ0FBQ1E7RUFKcUMsQ0FBeEMsRUFLYixHQUFHQyxNQUFILENBQVVULEtBQUssQ0FBQ1UsSUFBaEIsQ0FMYSxDQUpJLENBQXBCO0FBVUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2NfZG9jcy8uL2Rpc3QvY29tcG9uZW50cy9Eb2NzL0NvZGUvaW5kZXguanM/ZmVmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQ29kZTtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2hpZ2hsaWdodCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImhpZ2hsaWdodC5qc1wiKSk7XG52YXIgX2phdmFzY3JpcHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJoaWdobGlnaHQuanMvbGliL2xhbmd1YWdlcy9qYXZhc2NyaXB0XCIpKTtcbnZhciBfdHlwZXNjcmlwdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcImhpZ2hsaWdodC5qcy9saWIvbGFuZ3VhZ2VzL3R5cGVzY3JpcHRcIikpO1xucmVxdWlyZShcImhpZ2hsaWdodC5qcy9zdHlsZXMvZ2l0aHViLWRhcmsuY3NzXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5faGlnaGxpZ2h0W1wiZGVmYXVsdFwiXS5yZWdpc3Rlckxhbmd1YWdlKFwiamF2YXNjcmlwdFwiLCBfamF2YXNjcmlwdFtcImRlZmF1bHRcIl0pO1xuX2hpZ2hsaWdodFtcImRlZmF1bHRcIl0ucmVnaXN0ZXJMYW5ndWFnZShcInR5cGVzY3JpcHRcIiwgX3R5cGVzY3JpcHRbXCJkZWZhdWx0XCJdKTtcbmZ1bmN0aW9uIENvZGUocHJvcHMpIHtcbiAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF9oaWdobGlnaHRbXCJkZWZhdWx0XCJdLmhpZ2hsaWdodEFsbCgpO1xuICB9LCAzMDApO1xuICByZXR1cm4gLyojX19QVVJFX18qL19yZWFjdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChcInByZVwiLCB7XG4gICAgc3R5bGU6IHtcbiAgICAgIG1hcmdpbjogXCIxJVwiXG4gICAgfVxuICB9LCAvKiNfX1BVUkVfXyovX3JlYWN0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiY29kZVwiLCB7XG4gICAgc3R5bGU6IHtcbiAgICAgIGJvcmRlclJhZGl1czogXCI3cHhcIlxuICAgIH0sXG4gICAgY2xhc3NOYW1lOiBwcm9wcy5sYW5ndWFnZVxuICB9LCBcIlwiLmNvbmNhdChwcm9wcy5jb2RlKSkpO1xufSJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIkNvZGUiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9oaWdobGlnaHQiLCJfamF2YXNjcmlwdCIsIl90eXBlc2NyaXB0Iiwib2JqIiwiX19lc01vZHVsZSIsInJlZ2lzdGVyTGFuZ3VhZ2UiLCJwcm9wcyIsInNldFRpbWVvdXQiLCJoaWdobGlnaHRBbGwiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJjbGFzc05hbWUiLCJsYW5ndWFnZSIsImNvbmNhdCIsImNvZGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./dist/components/Docs/Code/index.js\n");

      /***/
    },

    /***/"./src/pages/docs/index.jsx":
    /*!**********************************!*\
      !*** ./src/pages/docs/index.jsx ***!
      \**********************************/
    /***/
    (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
      "use strict";

      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomeDocs)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dist_components_Docs_Code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../dist/components/Docs/Code */ \"./dist/components/Docs/Code/index.js\");\n\n\nfunction HomeDocs() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_dist_components_Docs_Code__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    language: \"js\",\n    code: \"\\n      <h1>Hernande</h1>\"\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZG9jcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTRSxRQUFULEdBQW9CO0VBQ2pDLG9CQUNFLDJEQUFDLGtFQUFEO0lBQ0UsUUFBUSxFQUFDLElBRFg7SUFFRSxJQUFJO0VBRk4sRUFERjtBQU9EIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9jX2RvY3MvLi9zcmMvcGFnZXMvZG9jcy9pbmRleC5qc3g/ZTFhNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQ29kZSBmcm9tIFwiLi4vLi4vLi4vZGlzdC9jb21wb25lbnRzL0RvY3MvQ29kZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lRG9jcygpIHtcbiAgcmV0dXJuIChcbiAgICA8Q29kZVxuICAgICAgbGFuZ3VhZ2U9XCJqc1wiXG4gICAgICBjb2RlPXtgXG4gICAgICA8aDE+SGVybmFuZGU8L2gxPmB9XG4gICAgLz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvZGUiLCJIb21lRG9jcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/docs/index.jsx\n");

      /***/
    },

    /***/"./node_modules/highlight.js/styles/github-dark.css":
    /*!**********************************************************!*\
      !*** ./node_modules/highlight.js/styles/github-dark.css ***!
      \**********************************************************/
    /***/
    () => {

      /***/},
    /***/"highlight.js":
    /*!*******************************!*\
      !*** external "highlight.js" ***!
      \*******************************/
    /***/
    module => {
      "use strict";

      module.exports = require("highlight.js");

      /***/
    },

    /***/"highlight.js/lib/languages/javascript":
    /*!********************************************************!*\
      !*** external "highlight.js/lib/languages/javascript" ***!
      \********************************************************/
    /***/
    module => {
      "use strict";

      module.exports = require("highlight.js/lib/languages/javascript");

      /***/
    },

    /***/"highlight.js/lib/languages/typescript":
    /*!********************************************************!*\
      !*** external "highlight.js/lib/languages/typescript" ***!
      \********************************************************/
    /***/
    module => {
      "use strict";

      module.exports = require("highlight.js/lib/languages/typescript");

      /***/
    },

    /***/"react":
    /*!************************!*\
      !*** external "react" ***!
      \************************/
    /***/
    module => {
      "use strict";

      module.exports = require("react");

      /***/
    }
  };

  ;

  // load runtime
  var __webpack_require__ = require("../webpack-runtime.js");
  __webpack_require__.C(exports);
  var __webpack_exec__ = moduleId => __webpack_require__(__webpack_require__.s = moduleId);
  var __webpack_exports__ = __webpack_exec__("./src/pages/docs/index.jsx");
  module.exports = __webpack_exports__;
})();