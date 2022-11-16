"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialProps = initialProps;
var _readDir = require("./readDir");
function initialProps() {
  var subDirs = (0, _readDir.readDirs)("./src/pages/docs/");
  var dirs = (0, _readDir.readNavDir)("./src/pages/docs");
  return {
    subDirs: subDirs,
    dirs: dirs
  };
}