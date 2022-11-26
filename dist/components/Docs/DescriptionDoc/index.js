"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = DescriptionDoc;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function DescriptionDoc(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "descriptionDocs",
    style: {
      margin: "1%",
      borderRadius: "5px",
      border: "0.5px solid gray",
      padding: "3%"
    }
  }, props.description);
}