const { HotModuleReplacementPlugin } = require("webpack");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

/** @type {import('webpack').Configuration} */
const devConfig = {
  mode: "development",
  devServer: {
    port: 3000,
    contentBase: "../dist",
    open: "chrome",
    hot: true,
  },
  target: "web",
  plugins: [new HotModuleReplacementPlugin()],
  devtool: "eval-source-map",
};

module.exports = merge(common, devConfig);
