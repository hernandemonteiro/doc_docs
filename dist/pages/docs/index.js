"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HomeDocs;
var _react = _interopRequireDefault(require("react"));
var _components = require("../../components/");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function HomeDocs() {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_components.TitleDoc, {
    title: "DescriptionDoc Component"
  }), /*#__PURE__*/_react["default"].createElement(_components.DescriptionDoc, {
    description: "this is a description for this project"
  }), /*#__PURE__*/_react["default"].createElement(_components.TitleDoc, {
    title: "ComponentDoc Component"
  }), /*#__PURE__*/_react["default"].createElement(_components.ComponentDoc, {
    background: "grey",
    element: /*#__PURE__*/_react["default"].createElement("button", {
      onClick: function onClick() {
        return alert("hello");
      },
      style: {
        width: "100%",
        padding: "2%"
      }
    }, "ALERT \"hello\""),
    options: [{
      prop: "OnClick",
      "default": "none",
      accept: "() => void"
    }, {
      prop: "children",
      "default": "none",
      accept: "string"
    }],
    description: "this is an component description used to show this resource"
  }), /*#__PURE__*/_react["default"].createElement(_components.TitleDoc, {
    title: "Code Component"
  }), /*#__PURE__*/_react["default"].createElement(_components.Code, {
    language: "js",
    code: function testCode() {
      return "is running!";
    }
  }), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      marginTop: "2%"
    }
  }, "Aqui foi uma div que eu criei"));
}