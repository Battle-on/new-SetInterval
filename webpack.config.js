const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins

module.exports = {
  entry: {
    app: './index.js',
  },
  mode: 'production',
  output: {
    filename: '[name].js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' }
    ]
  }
  // plugins: [
  //   new HtmlWebpackPlugin({template: './src/index.html'})
  // ]
};

