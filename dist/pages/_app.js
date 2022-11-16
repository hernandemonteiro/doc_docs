"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../../index"));
require("./style.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function MyApp(_ref) {
  var Component = _ref.Component,
    pageProps = _ref.pageProps,
    router = _ref.router;
  return /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: "100"
    }
  }, /*#__PURE__*/_react["default"].createElement(_index["default"], {
    Component: Component,
    pageProps: pageProps,
    route: router,
    projectLogo: "Doc Docs - Documentation",
    github: "https://github.com/hernandemonteiro/personal_blog",
    website: "https://hernandemonteiro.vercel.app",
    instagram: "https://instagram.com/monteiro.ops"
  }));
}
var _default = MyApp;
exports["default"] = _default;