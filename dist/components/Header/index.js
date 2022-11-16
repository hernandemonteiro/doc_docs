"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = HeaderNextDocs;
var _react = _interopRequireDefault(require("react"));
var _ai = require("react-icons/ai");
var _fa = require("react-icons/fa");
var _go = require("react-icons/go");
var _fi = require("react-icons/fi");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function HeaderNextDocs(props) {
  return props.customHeader ? props.customHeader : /*#__PURE__*/_react["default"].createElement("header", {
    style: {
      display: "flex",
      // criar lógica paa mudar de cor conforme theme
      backgroundColor: "#3d3333" || "#070708",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "2%",
      borderBottom: "1px solid rgba(0,0,0,0.3)"
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: "50%"
    }
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: "/docs",
    style: {
      color: "white",
      textTransform: "uppercase",
      textDecoration: "none"
    }
  }, props.logo || "Your app name!")), /*#__PURE__*/_react["default"].createElement("div", {
    style: {
      width: "50%",
      textAlign: "right",
      color: "white",
      fontSize: "1.5em"
    }
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
  }))));
}