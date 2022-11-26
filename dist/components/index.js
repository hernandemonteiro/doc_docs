"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Code = Code;
exports.ComponentDoc = ComponentDoc;
exports.DescriptionDoc = DescriptionDoc;
exports.TitleDoc = TitleDoc;
var _head = _interopRequireDefault(require("next/head"));
var _react = _interopRequireWildcard(require("react"));
var _ColorContext = _interopRequireDefault(require("../provider/ColorContext"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Code(props) {
  return /*#__PURE__*/_react["default"].createElement("pre", {
    style: {
      backgroundColor: props.backgroundColor || "black",
      borderRadius: "7px",
      padding: "2%",
      margin: "1%"
    }
  }, /*#__PURE__*/_react["default"].createElement("code", {
    style: {
      color: props.textColor || "white",
      fontSize: "1.2em",
      fontWeight: "bold"
    },
    className: props.language
  }, "".concat(props.code)));
}
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
function TitleDoc(props) {
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n          .TitleDoc {\n            margin: 4% 0 4%;\n            font-size: 1.4rem;\n            border-bottom: 1px solid gray;\n          }\n        ")), /*#__PURE__*/_react["default"].createElement("h1", {
    className: "TitleDoc"
  }, props.title));
}
function ComponentDoc(props) {
  var _useContext = (0, _react.useContext)(_ColorContext["default"]),
    theme = _useContext.theme;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "elementDescription",
    style: {
      margin: "1%",
      border: "0.5px solid gray",
      borderRadius: "7px"
    }
  }, /*#__PURE__*/_react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n          .td {\n            border: 1px solid black;\n            padding: 1%;\n          }\n\n          .td[data-theme=\"dark\"] {\n            border: 1px solid gray;\n          }\n        ")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2%",
      backgroundColor: props.background || "black"
    }
  }, props.element), props.options && /*#__PURE__*/_react["default"].createElement("table", {
    style: {
      width: "100%",
      textAlign: "center",
      padding: "2%"
    }
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", {
    className: "td",
    "data-theme": theme
  }, "Prop"), /*#__PURE__*/_react["default"].createElement("th", {
    className: "td",
    "data-theme": theme
  }, "Default"), /*#__PURE__*/_react["default"].createElement("th", {
    className: "td",
    "data-theme": theme
  }, "Accept"))), /*#__PURE__*/_react["default"].createElement("tbody", null, props.options.map(function (element) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: element.prop
    }, /*#__PURE__*/_react["default"].createElement("td", {
      className: "td",
      "data-theme": theme
    }, element.prop), /*#__PURE__*/_react["default"].createElement("td", {
      className: "td",
      "data-theme": theme
    }, element["default"]), /*#__PURE__*/_react["default"].createElement("td", {
      className: "td",
      "data-theme": theme
    }, "".concat(element.accept)));
  }))), props.description && /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      padding: "2%"
    }
  }, props.description));
}