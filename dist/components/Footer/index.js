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
      display: "flex",
      alignItems: "center",
      backgroundColor: "#3d3333" || "#070708",
      width: "100%",
      height: "100px",
      borderTop: "2px solid rgba(0,0,0,0.5)"
    }
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
  }, "Hernande Monteiro")));
}