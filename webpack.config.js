const path = require("path");

const APP_PATH = ".";
const config = {
  mode: "production",
  entry: path.resolve(__dirname, APP_PATH),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },

  resolve: { extensions: [".js", ".json", ".jsx", ".css"] },

  module: {
    rules: [
      { test: /\.(js)x?$/, loader: "babel-loader", exclude: /node_modules/ },
    ],
  },
};

module.exports = () => config;
