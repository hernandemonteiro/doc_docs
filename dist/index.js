"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ComponentOrDocs;
exports.initialProps = initialProps;
var _react = _interopRequireDefault(require("react"));
var _Template = _interopRequireDefault(require("./components/Template"));
var _readDir = require("./core/readDir");
var _ColorProvider = _interopRequireDefault(require("./provider/ColorProvider"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ComponentOrDocs(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props.route.route.match("/docs") ? /*#__PURE__*/_react["default"].createElement(_ColorProvider["default"], null, /*#__PURE__*/_react["default"].createElement(_Template["default"], {
    configDirs: props.configDirs,
    projectLogo: props.projectLogo,
    disabledIndexMenu: props.disabledIndexMenu,
    customFooter: props.customFooter,
    customHeader: props.customHeader,
    github: props.github,
    facebook: props.facebook,
    instagram: props.instagram,
    linkedin: props.linkedin,
    discord: props.discord,
    website: props.website
  }, /*#__PURE__*/_react["default"].createElement(props.Component, props.pageProps))) : /*#__PURE__*/_react["default"].createElement(props.Component, props.pageProps));
}
function initialProps() {
  var subDirs = (0, _readDir.readDirs)("./src/pages/docs/");
  var dirs = (0, _readDir.readNavDir)("./src/pages/docs");
  return {
    subDirs: subDirs,
    dirs: dirs
  };
}