'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(__dirname, 'client')
  ],
  output: {
    path: path.join(__dirname, '/dist/'),
    filename: '[name].js',
    publicPath: '/'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'client/views/index.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    rules: [
      {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
         loader: 'babel-loader',
         options: { presets: ["react", "es2015", "stage-0", "react-hmre"] }
       }]
    },
     {
      test: /\.json?$/,
      use: [{
        loader : 'json-loader'
      }]
    },
    { test: /\.(css)$/, use: [ 'style-loader','css-loader'] }
  ]
 }
};
