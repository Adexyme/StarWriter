const path = require("path");

module.exports = (env, argv) => {
  return {
    entry: {
      index: path.resolve(__dirname, "./dist/esm/index.js"),
    },
    mode: "development",
    output: {
      path: path.resolve(__dirname, "./dist/umd"), // builds to ./dist/umd/
      filename: "[name].js", // index.js
      library: "myLibrary", // aka window.myLibrary
      libraryTarget: "umd", // supports commonjs, amd and web browsers
      globalObject: "this",
    },
    module: {
      rules: [
        {
          test: /\.t|js$/,
          use: ["babel-loader"],
        },
      ],
    },
    externals: {
      // only define the dependencies you are NOT using as externals!
      canvg: "canvg",
      //html2canvas: "html2canvas",
      //dompurify: "dompurify",
    },
  };
};
