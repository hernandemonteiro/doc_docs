"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Code;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Code(props) {
  return /*#__PURE__*/_react["default"].createElement("pre", {
    style: {
      backgroundColor: "gray",
      borderRadius: "7px",
      padding: "2%",
      margin: "1%"
    }
  }, /*#__PURE__*/_react["default"].createElement("code", {
    style: {
      color: "black",
      fontSize: "1.2em",
      fontWeight: "bold"
    },
    className: props.language
  }, "".concat(props.code)));
}