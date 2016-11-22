var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: path.join(__dirname),
	entry: {
		bundle: './src/index.js',
		styles: './src/main.scss'
	},
	output: {
		filename: '[name].js',
		path: './build',
		library: '[name]'
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	devtool: '#cheap-module-source-map',
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react', 'stage-0', 'stage-1']
				},
				exclude: [/node_modules/],
			},
			{
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css!resolve-url!sass?sourceMap')
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css')
            },
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css', {
			allChunks: true
		})
	]
}