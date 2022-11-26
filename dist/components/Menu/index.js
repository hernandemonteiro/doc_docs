"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = MenuReactDocs;
var _react = _interopRequireWildcard(require("react"));
var _PrimaryElementMenu = _interopRequireWildcard(require("./PrimaryElementMenu"));
var _ColorContext = _interopRequireDefault(require("../../provider/ColorContext"));
var _head = _interopRequireDefault(require("next/head"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function MenuReactDocs(props) {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    menu = _useState2[0],
    setMenu = _useState2[1];
  var _useContext = (0, _react.useContext)(_ColorContext["default"]),
    theme = _useContext.theme;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_head["default"], null, " ", /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n          .Nav {\n            width: 23%;\n            padding: 1%;\n            border-right: 1px solid rgba(0, 0, 0, 0.5);\n            text-align: center;\n          }\n\n          .Nav[data-theme=\"dark\"] {\n            background-color: rgb(37, 37, 37);\n            border-right: 1px solid gray;\n          }\n\n          .Summary {\n            margin: 5%;\n            font-weight: bold;\n            cursor: pointer;\n            color: black;\n            user-select: none;\n          }\n\n          .Summary[data-theme=\"dark\"] {\n            color: white;\n          }\n\n          .btnMenuHide {\n            display: none;\n          }\n\n          @media (max-width: 800px) {\n            .Summary {\n              margin: 3%;\n            }\n\n            .Nav {\n              width: 100%;\n              padding: 0px;\n              text-align: center;\n              border-right: none;\n            }\n            .Nav[data-theme=\"dark\"] {\n              border-right: none;\n            }\n\n            .hide {\n              display: none;\n            }\n\n            .btnMenuHide {\n              display: block;\n              width: 100%;\n              background: gray;\n              color: white;\n              border: none;\n              padding: 2%;\n              font-size: 1.3rem;\n            }\n          }\n        ")), /*#__PURE__*/_react["default"].createElement("nav", {
    className: "Nav",
    "data-theme": theme
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      menu ? setMenu(false) : setMenu(true);
    },
    className: "btnMenuHide"
  }, "MENU"), /*#__PURE__*/_react["default"].createElement("div", {
    className: !menu ? "hide" : ""
  }, /*#__PURE__*/_react["default"].createElement(_PrimaryElementMenu["default"], {
    path: "/docs",
    name: "GETTING STARTED!"
  }), props.configDirs.dirs.filter(function (dir) {
    return dir != "[options]";
  }).filter(function (dir) {
    return dir != "[langs]";
  }).map(function (dir) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: dir
    }, subDirsIsFileOrObject(props.configDirs.subDirs[dir]) > 1 ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("hr", null), /*#__PURE__*/_react["default"].createElement("details", null, /*#__PURE__*/_react["default"].createElement("summary", {
      className: "Summary",
      "data-theme": theme
    }, dir.toUpperCase()), /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props.configDirs.subDirs[dir].map(function (elementSub) {
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
  }))));
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