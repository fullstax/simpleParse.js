'use strict';
const webpack = require('webpack'),
	isDIST = process.env.DIST,
	uglifyConfig = {
		cacheFolder: __dirname
	};

console.log(isDIST === 'true')
module.exports = {
  entry: './source/index.js',
  output: {
  	path: __dirname+'/dist',
  	filename: `index.${isDIST === 'true' ? 'min.' : ''}js`
  },
  module: {
  	loaders: [
 		{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' } 	
  	]
  },
  plugins: [
  	(isDIST === 'true' ? new webpack.optimize.UglifyJsPlugin() : null)
  ]
};