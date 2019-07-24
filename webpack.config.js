const path = require("path");

module.exports = {
  mode: "production", // development https://webpack.js.org/configuration/mode/#mode-development
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.bundle.js" // default main.js
  }
};
