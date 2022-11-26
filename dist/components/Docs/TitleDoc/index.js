"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TitleDoc;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function TitleDoc(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "titleDocs"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    style: {
      marginLeft: "2%"
    }
  }, props.title), /*#__PURE__*/_react["default"].createElement("hr", null));
}