const path = require("path");

// loader = an action each time a file is treated
// babel-core is the equivalent of babel-cli

module.exports = {
  entry:  "./src/app.js",
  output: {
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      // This rule is to use babel only on some files
      loader: "babel-loader",
      // $ is to be sure that we are at the end
      test: /\.js$/,
      exclude: /node_modules/
    }]
  }
};