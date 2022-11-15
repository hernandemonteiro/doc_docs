"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MenuReactDocs;
var _react = _interopRequireDefault(require("react"));
var _PrimaryElementMenu = _interopRequireDefault(require("./PrimaryElementMenu"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function MenuReactDocs(props) {
  return /*#__PURE__*/_react["default"].createElement("nav", {
    style: {
      display: "flex",
      flexDirection: "column",
      width: "23%",
      padding: "1%",
      borderRight: "1px solid rgba(0,0,0,0.5)"
    }
  }, /*#__PURE__*/_react["default"].createElement(_PrimaryElementMenu["default"], {
    path: "/docs",
    name: "GETTING STARTED!"
  }), props.dirs.map(function (dir) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: dir
    }, subDirsIsFileOrObject(props.subDirs[dir]) > 1 ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("details", null, /*#__PURE__*/_react["default"].createElement("summary", {
      style: {
        margin: "5%",
        fontWeight: "bold",
        cursor: "pointer",
        color: "black"
      }
    }, dir.toUpperCase()), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, Object.keys(props.subDirs[dir]).map(function (elementSub) {
      return elementSub === "index.tsx" || elementSub === "index.jsx" ? /*#__PURE__*/_react["default"].createElement(_PrimaryElementMenu["default"], {
        key: elementSub,
        path: "/docs/".concat(dir),
        name: "INTRO"
      }) : /*#__PURE__*/_react["default"].createElement(_PrimaryElementMenu["default"], {
        key: elementSub,
        path: "/docs/".concat(dir, "/").concat(elementSub),
        name: removeExtensionAndFormateName(elementSub)
      });
    }))), /*#__PURE__*/_react["default"].createElement("hr", null)) : dir.match("index") ? "" : /*#__PURE__*/_react["default"].createElement(_PrimaryElementMenu["default"], {
      path: "/docs/".concat(dir),
      name: removeExtensionAndFormateName(dir),
      margin: "5%"
    }));
  }));
}
function subDirsIsFileOrObject(obj) {
  return obj ? Object.keys(obj).length : 0;
}
function removeExtensionAndFormateName(fileName) {
  var newName;
  fileName.match(".tsx") ? newName = fileName.replace(".tsx", "") : newName = fileName;
  fileName.match(".ts") ? newName = fileName.replace(".ts", "") : newName = fileName;
  fileName.match(".js") ? newName = fileName.replace(".js", ".") : newName = fileName;
  fileName.match(".jsx") ? newName = fileName.replace(".jsx", ".") : newName = fileName;
  fileName.match("_") ? newName = fileName.replace("_", " ") : newName = fileName;
  return newName.toUpperCase();
}