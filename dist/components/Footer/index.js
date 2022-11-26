"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FooterReactDocs;
var _react = _interopRequireWildcard(require("react"));
var _ColorContext = _interopRequireDefault(require("../../provider/ColorContext"));
var _head = _interopRequireDefault(require("next/head"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function FooterReactDocs(props) {
  var _useContext = (0, _react.useContext)(_ColorContext["default"]),
    theme = _useContext.theme;
  return props.customFooter ? props.customFooter : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n          .Footer {\n            display: flex;\n            align-items: center;\n            background-color: #3d3333;\n            width: 100%;\n            height: 100px;\n            border-top: 2px solid rgba(0, 0, 0, 0.5);\n          }\n\n          .Footer[data-theme=\"dark\"] {\n            background-color: black;\n          }\n        ")), /*#__PURE__*/_react["default"].createElement("footer", {
    className: "Footer",
    "data-theme": theme
  }, /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      width: "100%",
      color: "white",
      textAlign: "center"
    }
  }, "Designed with ", /*#__PURE__*/_react["default"].createElement("b", null, "doc_docs"), ", created by", " ", /*#__PURE__*/_react["default"].createElement("a", {
    style: {
      color: "white"
    },
    target: "_blank",
    rel: "noreferrer",
    href: "https://github.com/hernandemonteiro/doc_docs"
  }, "Hernande Monteiro"))));
}