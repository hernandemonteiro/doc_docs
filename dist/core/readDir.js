"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readDirs = readDirs;
exports.readNavDir = readNavDir;
var fs = _interopRequireWildcard(require("fs"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function readNavDir(dir) {
  var structSubDirs = {};
  fs.readdirSync(dir).sort(function (a, b) {
    return fs.statSync(dir + "/" + a).mtime.getTime() - fs.statSync(dir + "/" + b).mtime.getTime();
  }).forEach(function (file) {
    if (fs.lstatSync(dir + "/" + file).isFile()) {
      structSubDirs[file] = null;
    } else if (fs.lstatSync(dir + "/" + file).isDirectory()) {
      structSubDirs[file] = readDirs(dir + "/" + file);
    }
  });
  var arrayDirs = [];
  for (var _dir in structSubDirs) {
    !_dir.match(".tsx" || ".ts" || ".js" || ".jsx" || ".md" || ".mdx") && arrayDirs.push(_dir);
  }
  return arrayDirs;
}
function readDirs(dir) {
  var struct = {};
  fs.readdirSync(dir).sort(function (a, b) {
    return fs.statSync(dir + "/" + a).mtime.getTime() - fs.statSync(dir + "/" + b).mtime.getTime();
  }).forEach(function (file) {
    if (fs.lstatSync(dir + "/" + file).isFile()) {
      struct[file] = null;
    } else if (fs.lstatSync(dir + "/" + file).isDirectory()) {
      struct[file] = readDirs(dir + "/" + file);
    }
  });
  return struct;
}