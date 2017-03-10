// var debug = process.env.NODE_ENV !== "production";
// var webpack = require('webpack');
//
// module.exports = {
//   context: __dirname,
//   devtool: debug ? "inline-sourcemap" : null,
//   entry: "./js/scripts.js",
//   output: {
//     path: __dirname + "/js",
//     filename: "scripts.min.js"
//   },
//   plugins: debug ? [] : [
//     new webpack.optimize.DedupePlugin(),
//     new webpack.optimize.OccurenceOrderPlugin(),
//     new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
//   ],
// };

var path = require('path');

module.exports = {
  entry: './js/scripts.js',
  output: {
    filename: 'js/scripts.min.js',
    path: path.resolve(__dirname, 'dist')
  }
};
