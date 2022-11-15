"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Code = Code;
exports.ComponentDoc = ComponentDoc;
exports.DescriptionDoc = DescriptionDoc;
exports.TitleDoc = TitleDoc;
var _react = _interopRequireDefault(require("react"));
var _highlight = _interopRequireDefault(require("highlight.js"));
var _javascript = _interopRequireDefault(require("highlight.js/lib/languages/javascript"));
var _typescript = _interopRequireDefault(require("highlight.js/lib/languages/typescript"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_highlight["default"].registerLanguage("javascript", _javascript["default"]);
_highlight["default"].registerLanguage("typescript", _typescript["default"]);
function Code(props) {
  setTimeout(function () {
    return _highlight["default"].highlightAll();
  }, 300);
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
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "titleDocs",
    style: {
      marginBottom: "2%"
    }
  }, /*#__PURE__*/_react["default"].createElement("h1", null, props.title), /*#__PURE__*/_react["default"].createElement("hr", null));
}
function ComponentDoc(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "elementDescription",
    style: {
      margin: "1%",
      border: "0.5px solid gray",
      borderRadius: "7px"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: props.background || "black",
      padding: "2%"
    }
  }, props.element), props.options && /*#__PURE__*/_react["default"].createElement("table", {
    style: {
      width: "100%",
      textAlign: "center",
      padding: "2%"
    }
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", {
    style: {
      border: "1px solid black",
      padding: "1%"
    }
  }, "Prop"), /*#__PURE__*/_react["default"].createElement("th", {
    style: {
      border: "1px solid black",
      padding: "1%"
    }
  }, "Default"), /*#__PURE__*/_react["default"].createElement("th", {
    style: {
      border: "1px solid black",
      padding: "1%"
    }
  }, "Accept"))), /*#__PURE__*/_react["default"].createElement("tbody", null, props.options.map(function (element) {
    return /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", {
      style: {
        border: "1px solid black",
        padding: "1%",
        fontWeight: "bold"
      }
    }, element.prop), /*#__PURE__*/_react["default"].createElement("td", {
      style: {
        border: "1px solid black",
        padding: "1%"
      }
    }, element["default"]), /*#__PURE__*/_react["default"].createElement("td", {
      style: {
        border: "1px solid black",
        padding: "1%"
      }
    }, "".concat(element.accept)));
  }))), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      padding: "2%"
    }
  }, props.description));
}