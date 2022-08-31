const path = require('path');

module.exports = {
  mode: "development",
  entry: './js/res.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
  },
  watch: true,
  devtool: 'source-map',
  module: {}
};