"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readDirs = readDirs;
exports.readNavDir = readNavDir;
var _fs = _interopRequireDefault(require("fs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function readNavDir(dir) {
  var structSubDirs = {};
  _fs["default"].readdirSync(dir).sort(function (a, b) {
    return _fs["default"].statSync(dir + "/" + a).mtime.getTime() - _fs["default"].statSync(dir + "/" + b).mtime.getTime();
  }).forEach(function (file) {
    if (_fs["default"].lstatSync(dir + "/" + file).isFile()) {
      structSubDirs[file] = null;
    } else if (_fs["default"].lstatSync(dir + "/" + file).isDirectory()) {
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
  _fs["default"].readdirSync(dir).sort(function (a, b) {
    return _fs["default"].statSync(dir + "/" + a).mtime.getTime() - _fs["default"].statSync(dir + "/" + b).mtime.getTime();
  }).forEach(function (file) {
    if (_fs["default"].lstatSync(dir + "/" + file).isFile()) {
      struct[file] = null;
    } else if (_fs["default"].lstatSync(dir + "/" + file).isDirectory()) {
      struct[file] = readDirs(dir + "/" + file);
    }
  });
  return struct;
}