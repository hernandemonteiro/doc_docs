"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MainReactDocs;
var _react = _interopRequireWildcard(require("react"));
var _ColorContext = _interopRequireDefault(require("../../provider/ColorContext"));
var _Menu = _interopRequireDefault(require("../Menu"));
var _head = _interopRequireDefault(require("next/head"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function MainReactDocs(props) {
  var _useContext = (0, _react.useContext)(_ColorContext["default"]),
    theme = _useContext.theme;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n        .Main {\n          display: flex;\n          min-height: 85vh;\n          background-color: white;\n        }\n\n        .Main[data-theme=\"dark\"] {\n          background-color: rgb(37, 37, 37);\n          color: white;\n        }\n\n        .ContentMain {\n          width: 77%;\n          height: 100%;\n          padding: 2%;\n          margin-bottom: 7%;\n        }\n\n        @media (max-width: 800px) {\n          .Main {\n            display: block;\n            /* padding: 0%; */\n            /* margin: 0%; */\n            padding: 3%;\n          }\n\n          .ContentMain {\n            width: 100%;\n            padding: 0%;\n          }\n        }\n      s")), /*#__PURE__*/_react["default"].createElement("main", {
    className: "Main",
    "data-theme": theme
  }, props.disabledIndexMenu === true ? "" : /*#__PURE__*/_react["default"].createElement(_Menu["default"], {
    configDirs: props.configDirs
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "ContentMain"
  }, props.children)));
}