const path = require("path");

const config = {
  mode: "developement",
  entry: path.resolve(__dirname, "."),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },

  resolve: { extensions: [".js", ".json", ".jsx", ".css"] },
  module: {
    rules: [
      { test: /\.(js)x?$/, loader: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        include: /\.module\.css$/,
      },
    ],
  },
};

module.exports = () => config;
