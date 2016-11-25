var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var combineLoaders = require('webpack-combine-loaders');

module.exports = {
	context: path.join(__dirname),
	entry: {
		bundle: './src/index.jsx',
		// styles: './src/main.scss'
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
				test: /\.jsx$|\.js$/,
				loader: 'babel',
				query: {
					presets: ['es2015', 'react', 'stage-0', 'stage-1', 'react-hmre']
				},
				exclude: /node_modules/,
			},
			{
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]') },
            {
                test: /\.node$/,
                loader: "node-loader"
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=/fonts/[name].[ext]'
            }
		]
	},
	plugins: [
		new ExtractTextPlugin('/css/styles.css', {
			allChunks: true
		})
	]
}