const merge = require("webpack-merge");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const baseConfig = require("./webpack.config.base");

module.exports = merge(baseConfig, {
  mode: "production",
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static", // in static mode single HTML file with bundle report will be generated
      openAnalyzer: false, // default: true -> automatically open report in default browser.
      reportFilename: "bundle_sizes.html" // default report.html
    })
  ]
});
