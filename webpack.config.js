const path = require("path");

const config = {
  mode: "developement",
  entry: path.resolve(__dirname, "."),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },

  resolve: { extensions: [".js", ".json", ".jsx", ".css"] },
  globalObject: "this",
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      { test: /\.(js)x?$/, loader: "babel-loader", exclude: /node_modules/ },
    ],
  },
};

module.exports = () => config;
