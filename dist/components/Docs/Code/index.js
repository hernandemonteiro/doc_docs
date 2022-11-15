"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Code;
var _react = _interopRequireDefault(require("react"));
var _highlight = _interopRequireDefault(require("highlight.js"));
var _javascript = _interopRequireDefault(require("highlight.js/lib/languages/javascript"));
var _typescript = _interopRequireDefault(require("highlight.js/lib/languages/typescript"));
require("highlight.js/styles/github-dark.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_highlight["default"].registerLanguage("javascript", _javascript["default"]);
_highlight["default"].registerLanguage("typescript", _typescript["default"]);
function Code(props) {
  setTimeout(function () {
    return _highlight["default"].highlightAll();
  }, 300);
  return /*#__PURE__*/_react["default"].createElement("pre", {
    style: {
      margin: "1%"
    }
  }, /*#__PURE__*/_react["default"].createElement("code", {
    style: {
      borderRadius: "7px"
    },
    className: props.language
  }, "".concat(props.code)));
}