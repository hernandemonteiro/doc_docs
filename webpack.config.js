const path = require("path");

const APP_PATH = ".";
const config = {
  mode: "production",
  entry: path.resolve(__dirname, APP_PATH),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    library: "default",
    libraryTarget: "umd",
  },

  resolve: { extensions: [".js", ".json"] },
  
  module: {
    rules: [
      { test: /\.(js)x?$/, loader: "babel-loader", exclude: /node_modules/ },
    ],
  },
};

module.exports = () => config;
