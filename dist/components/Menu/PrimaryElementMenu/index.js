"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrimaryElementMenuWithoutLink = PrimaryElementMenuWithoutLink;
exports["default"] = PrimaryElementMenu;
var _head = _interopRequireDefault(require("next/head"));
var _react = _interopRequireWildcard(require("react"));
var _ColorContext = _interopRequireDefault(require("../../../provider/ColorContext"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function PrimaryElementMenu(props) {
  var _useContext = (0, _react.useContext)(_ColorContext["default"]),
    theme = _useContext.theme;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_head["default"], null, " ", /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n          .LinkMenu {\n            width: 100%;\n            color: black;\n            text-decoration: none;\n          }\n\n          .LinkMenu[data-theme=\"dark\"] {\n            color: white;\n          }\n\n          .hrMargin {\n            margin-top: 7%;\n            margin-bottom: 7%;\n          }\n\n          @media (max-width: 800px) {\n            .LinkMenu {\n              text-align: center;\n            }\n\n            .hrMargin {\n              margin-top: 3%;\n              margin-bottom: 3%;\n            }\n          }\n        ")), /*#__PURE__*/_react["default"].createElement("hr", {
    className: "hrMargin"
  }), /*#__PURE__*/_react["default"].createElement("a", {
    href: props.path,
    className: "LinkMenu",
    "data-theme": theme
  }, props.name), /*#__PURE__*/_react["default"].createElement("hr", {
    className: "hrMargin"
  }));
}
function PrimaryElementMenuWithoutLink(props) {
  var _useContext2 = (0, _react.useContext)(_ColorContext["default"]),
    theme = _useContext2.theme;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_head["default"], null, " ", /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n          .LinkMenu {\n            width: 100%;\n            color: black;\n            text-decoration: none;\n          }\n\n          .LinkMenu[data-theme=\"dark\"] {\n            color: white;\n          }\n\n          .hrMargin {\n            margin-top: 7%;\n            margin-bottom: 7%;\n          }\n\n          @media (max-width: 800px) {\n            .LinkMenu {\n              text-align: center;\n            }\n\n            .hrMargin {\n              margin-top: 3%;\n              margin-bottom: 3%;\n            }\n          }\n        ")), /*#__PURE__*/_react["default"].createElement("hr", {
    className: "hrMargin"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "LinkMenu",
    "data-theme": theme
  }, props.name), /*#__PURE__*/_react["default"].createElement("hr", {
    className: "hrMargin"
  }));
}