"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = FooterReactDocs;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function FooterReactDocs(props) {
  return props.customFooter ? props.customFooter : /*#__PURE__*/_react["default"].createElement("footer", {
    style: {
      backgroundColor: "#3d3333" || "#070708",
      width: "100%",
      textAlign: "center",
      padding: "2%",
      borderTop: "2px solid rgba(0,0,0,0.5)"
    }
  }, /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      color: "white"
    }
  }, "Designed with ", /*#__PURE__*/_react["default"].createElement("b", null, "NextDocs"), ", created by", " ", /*#__PURE__*/_react["default"].createElement("a", {
    style: {
      color: "white"
    },
    target: "_blank",
    rel: "noreferrer",
    href: "https://github.com/hernandemonteiro"
  }, "Hernande Monteiro")));
}