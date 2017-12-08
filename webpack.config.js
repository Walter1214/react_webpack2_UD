
// const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
// const webpack = require('webpack');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const moment = require('moment');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const DEV_MODE = process.env.NODE_ENV === 'development';

const toFilename = (name, ext = 'js') => {
	let filename = `${name}.${ext}`;
	if (!DEV_MODE) {
		filename += (ext === 'css' ? '?[contenthash]' : '?[chunkhash]');
	}
	return filename;
};

const config = {
	context: path.resolve('src'),
	entry: {
		app: ['./js/app.js'],
	},
	output: {
		filename: toFilename('asset/js/[name]'),
		chunkFilename: toFilename('asset/js/[name].chunk'),
		path: path.resolve('dist'),
		publicPath: '',
	},
	resolve: {
		modules: [
			path.resolve('src/js'),
			path.resolve('src/css'),
			path.resolve('src/asset/'),
			path.resolve('src'),
			path.resolve('node_modules'),
		],
		alias: {
			'~': path.resolve('./src'),
			'@': path.resolve('./src/js'),
			img: path.resolve('./src/asset/img'),
		},
		extensions: ['.js'],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				use: 'babel-loader',
				include: path.resolve('src/js'),
				exclude: /node_modules/,
			},
			{
				test: /\.(png|jpg|gif|svg|ico)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 1024,
						name: '[path][name].[ext]?[hash:8]',
					},
				},
				include: path.resolve('src/asset'),
				exclude: /node_modules/,
			},
			{
				test: /\.pug$/,
				use: {
					loader: 'pug-loader',
					options: {
						self: true,
						pretty: !DEV_MODE,
					},
				},
			},
			{
				test: /\.scss$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader' 
				}, {
					loader: 'sass-loader'
				}]
			},
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './html/index.template.pug',
			data: {
				DEV_MODE,
				dateTime: moment().format('YYYY_MM_DD_hh_mm'),
			},
		}),
		new ScriptExtHtmlWebpackPlugin({
			defaultAttribute: 'defer',
		}),
		new CopyWebpackPlugin([
			{ from: 'asset/copy', to: './asset/copy/' },
		]),
		...DEV_MODE ? [
			new FriendlyErrorsPlugin(),
		] : [
			new CleanWebpackPlugin('./dist'),
		],
	]
};
config.devServer = {
	historyApiFallback: true,
	noInfo: true,
	hot: true,
	port: 3000,
	stats: {
		colors: true,
		hash: false,
		chunks: false,
	},
	host: '0.0.0.0',
	disableHostCheck: true,
	proxy: {
		// '/api': 'http://localhost:3000',
	},
};
module.exports = config;