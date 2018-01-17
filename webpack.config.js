"use strict";
/* jshint node: true */

const webpack = require('webpack');
const Path = require('path');

const outputPath = 'dist';

const paths = {
    build: Path.resolve(__dirname, outputPath + '/js'),
    web: Path.join(__dirname, '')
};

module.exports = {
  entry: './app.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'bundle.js',
    path: Path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: paths.web,
    compress: true
  }
};