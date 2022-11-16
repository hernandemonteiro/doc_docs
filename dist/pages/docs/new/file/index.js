"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = newSubFolderDocs;
var _react = _interopRequireDefault(require("react"));
var _components = require("../../../../../dist/components");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function newSubFolderDocs() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_components.TitleDoc, {
    title: "Folder File into New folder"
  }), /*#__PURE__*/_react["default"].createElement(_components.DescriptionDoc, {
    description: "This is a file index.js inside new/file/ folder!"
  }));
}