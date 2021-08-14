const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "../dist"),
    filename: "[name].[contenthash].js",
    publicPath: ""
  },
  devServer: {
    open: true
  },
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.(js|jsx)$/,
        exclude: /node_modules/
      },
      {
        use: ["style-loader", "css-loader", "sass-loader"],
        test: /\.(css|scss|sass)$/
      },
      {
        type: "asset",
        test: /\.(png|svg|jpg|jpeg|gif)$/i
      }
    ]
  },
  stats: {
    children: true
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".ejs"]
  },
  plugins: [new CleanWebpackPlugin()]
};
