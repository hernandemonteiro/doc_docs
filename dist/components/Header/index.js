"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HeaderNextDocs;
var _react = _interopRequireWildcard(require("react"));
var _ai = require("react-icons/ai");
var _fa = require("react-icons/fa");
var _go = require("react-icons/go");
var _fi = require("react-icons/fi");
var _nookies = require("nookies");
var _ColorContext = _interopRequireDefault(require("../../provider/ColorContext"));
var _head = _interopRequireDefault(require("next/head"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function HeaderNextDocs(props) {
  var cookies = (0, _nookies.parseCookies)();
  var _useContext = (0, _react.useContext)(_ColorContext["default"]),
    theme = _useContext.theme,
    setTheme = _useContext.setTheme;
  (0, _react.useEffect)(function () {
    if (cookies.theme) {
      setTheme(cookies.theme);
    }
  }, []);
  return props.customHeader ? props.customHeader : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("style", {
    jsx: true
  }, "\n          .header {\n            display: flex;\n            background-color: #3d3333;\n            flex-direction: row;\n            width: 100%;\n            min-height: 100px;\n            align-items: center;\n            justify-content: space-between;\n            border-bottom: 1px solid rgba(0, 0, 0, 0.3);\n            flex-wrap: wrap;\n          }\n\n          .header[data-theme=\"dark\"] {\n            background-color: black;\n          }\n\n          .HeaderSocials {\n            width: 50%;\n            text-align: right;\n            color: white;\n            font-size: 1.5em;\n            margin-right: 2%;\n          }\n\n          .LogoHeader {\n            display: flex;\n            width: 40%;\n            color: white;\n            text-transform: uppercase;\n            text-decoration: none;\n            margin: 2%;\n          }\n\n          @media (max-width: 800px) {\n            .HeaderSocials {\n              width: 100%;\n              text-align: center;\n              margin: 2%;\n            }\n\n            .LogoHeader {\n              display: flex;\n              align-items: center;\n              justify-content: center;\n              flex-direction: row;\n              width: 100%;\n              text-align: center;\n              margin: 4%;\n            }\n          }\n        ")), /*#__PURE__*/_react["default"].createElement("header", {
    className: "header",
    "data-theme": theme
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "LogoHeader"
  }, props.logo || "Your app name!"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "HeaderSocials"
  }, props.github && /*#__PURE__*/_react["default"].createElement("a", {
    href: props.github,
    style: {
      color: "white"
    },
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/_react["default"].createElement(_ai.AiFillGithub, {
    style: {
      margin: "1%"
    }
  })), props.facebook && /*#__PURE__*/_react["default"].createElement("a", {
    href: props.facebook,
    style: {
      color: "white"
    },
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/_react["default"].createElement(_ai.AiFillFacebook, {
    style: {
      margin: "1%"
    }
  })), props.instagram && /*#__PURE__*/_react["default"].createElement("a", {
    href: props.instagram,
    style: {
      color: "white"
    },
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/_react["default"].createElement(_ai.AiFillInstagram, {
    style: {
      margin: "1%"
    }
  })), props.linkedin && /*#__PURE__*/_react["default"].createElement("a", {
    href: props.linkedin,
    style: {
      color: "white"
    },
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/_react["default"].createElement(_ai.AiFillLinkedin, {
    style: {
      margin: "1%"
    }
  })), props.discord && /*#__PURE__*/_react["default"].createElement("a", {
    href: props.discord,
    style: {
      color: "white"
    },
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaDiscord, {
    style: {
      margin: "1%"
    }
  })), props.website && /*#__PURE__*/_react["default"].createElement("a", {
    href: props.website,
    style: {
      color: "white"
    },
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/_react["default"].createElement(_go.GoBrowser, {
    style: {
      margin: "1%"
    }
  })), theme === "dark" && /*#__PURE__*/_react["default"].createElement(_fi.FiMoon, {
    style: {
      margin: "1%",
      cursor: "pointer"
    },
    onClick: function onClick() {
      setTheme("light");
      (0, _nookies.setCookie)(null, "theme", "light");
    }
  }), theme === "light" && /*#__PURE__*/_react["default"].createElement(_fi.FiSun, {
    style: {
      margin: "1%",
      cursor: "pointer"
    },
    onClick: function onClick() {
      setTheme("dark");
      (0, _nookies.setCookie)(null, "theme", "dark");
    }
  }))));
}