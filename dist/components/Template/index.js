"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TemplateReactDocs;
var _react = _interopRequireDefault(require("react"));
var _Footer = _interopRequireDefault(require("../Footer"));
var _Header = _interopRequireDefault(require("../Header"));
var _Main = _interopRequireDefault(require("../Main"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function TemplateReactDocs(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: "100%",
      height: "100vh"
    }
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    logo: props.projectLogo,
    customHeader: props.customHeader,
    github: props.github,
    facebook: props.facebook,
    instagram: props.instagram,
    linkedin: props.linkedin,
    discord: props.discord,
    website: props.website
  }), /*#__PURE__*/_react["default"].createElement(_Main["default"], {
    dirs: props.dirs,
    subDirs: props.subDirs,
    disabledIndexMenu: props.disabledIndexMenu
  }, props.children), /*#__PURE__*/_react["default"].createElement(_Footer["default"], {
    customFooter: props.customFooter
  }));
}