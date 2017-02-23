'use strict';
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');
const FlowWebpackPlugin = require('flow-webpack-plugin');
module.exports = {
  entry: './source/index.js',
  output: {
  	path: __dirname+'/dist',
  	filename: 'index.js'
  },
  module: {
  	loaders: [
 		{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' } 	
  	]
  }
};