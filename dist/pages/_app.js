"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _image = _interopRequireDefault(require("next/image"));
var _react = _interopRequireDefault(require("react"));
var _index = _interopRequireDefault(require("../index"));
require("./_app.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function MyApp(_ref) {
  var Component = _ref.Component,
    pageProps = _ref.pageProps,
    router = _ref.router;
  return /*#__PURE__*/_react["default"].createElement(_index["default"], {
    configDirs: {
      dirs: ["api", "env"],
      subDirs: {
        api: ["user", "auth"]
      }
    },
    Component: Component,
    pageProps: pageProps,
    route: router,
    projectLogo: /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        flexDirection: "row"
      }
    }, /*#__PURE__*/_react["default"].createElement("img", {
      width: 50,
      height: 50,
      src: "https://preview-hernandemonteiro.vercel.app/favicon.png"
    }), /*#__PURE__*/_react["default"].createElement("h3", null, "Doc Docs - Documents")),
    github: "https://github.com/hernandemonteiro/personal_blog",
    website: "https://hernandemonteiro.vercel.app",
    instagram: "https://instagram.com/monteiro.ops"
  });
}
var _default = MyApp;
exports["default"] = _default;