"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ComponentDoc;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function ComponentDoc(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "elementDescription",
    style: {
      margin: "1%"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: props.background || "black",
      padding: "2%"
    }
  }, props.element), /*#__PURE__*/_react["default"].createElement("div", {
    className: "descriptionDocs",
    style: {
      padding: "1%",
      borderBottom: "0.5px solid gray",
      borderLeft: "0.5px solid gray",
      borderRight: "0.5px solid gray"
    }
  }, props.options && /*#__PURE__*/_react["default"].createElement("table", {
    style: {
      width: "100%",
      textAlign: "center",
      padding: "2%"
    }
  }, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("th", {
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
  }, "Accept")), /*#__PURE__*/_react["default"].createElement("tbody", null, Object.keys(props.options).map(function (element) {
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
    }, "`$", element.accept, "`"));
  }))), /*#__PURE__*/_react["default"].createElement("p", {
    style: {
      padding: "2%"
    }
  }, props.description)));
}