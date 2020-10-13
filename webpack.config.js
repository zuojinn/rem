var webpack = require('webpack');
var path = require('path');
module.exports = {
	entry: [
		'./app.js'
	],
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'bundle.js'
	},
	module:{
		rules:[
			{test:/\.css$/, use: ['style-loader','css-loader']},
			{test:/\.scss$/,use: ['style-loader','css-loader','sass-loader']},
			{test:/\.(png|jpg)$/,use: ['url-loader']}
		]
	}
} 

//webpack --watch 