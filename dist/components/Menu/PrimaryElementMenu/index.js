"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = PrimaryElementMenu;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function PrimaryElementMenu(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("hr", {
    style: {
      marginTop: "7%",
      marginBottom: "7%"
    }
  }), /*#__PURE__*/_react["default"].createElement("a", {
    href: props.path,
    style: {
      width: "100%",
      color: "black",
      margin: "7%",
      textDecoration: "none"
    }
  }, props.name), /*#__PURE__*/_react["default"].createElement("hr", {
    style: {
      marginTop: "7%",
      marginBottom: "7%"
    }
  }));
}