"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MainReactDocs;
var _react = _interopRequireDefault(require("react"));
var _Menu = _interopRequireDefault(require("../Menu"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function MainReactDocs(props) {
  return /*#__PURE__*/_react["default"].createElement("main", {
    style: {
      display: "flex",
      width: "100%",
      height: "92vh",
      zIndex: 1,
      backgroundColor: "white" || "#0e0f12"
    }
  }, props.disabledIndexMenu === true ? "" : /*#__PURE__*/_react["default"].createElement(_Menu["default"], {
    subDirs: props.subDirs,
    dirs: props.dirs
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: props.disabledIndexMenu === true ? "100%" : "77%",
      minHeight: "90vh",
      overflow: "auto",
      padding: "2%"
    }
  }, props.children));
}