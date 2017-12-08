/* eslint no-console: 0, no-bitwise: 0, no-mixed-operators: 0, function-paren-newline: ["error", "never"] */
const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const gutil = require('gulp-util');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
// const runSequence = require('run-sequence');
// const merge = require('merge-stream');
const chalk = require('chalk');

const host = 'localhost';
const port = 3000;
const URI = `http://${host}:${port}/`;

function logDevelopment() {
	const str = `
  ████████  ████████ ██     ██  
  ██     ██ ██       ██     ██  
  ██     ██ ██       ██     ██  
  ██     ██ ██████   ██     ██  
  ██     ██ ██        ██   ██   
  ██     ██ ██         ██ ██    
  ████████  ████████    ███     `;
	console.log(chalk.black.bgYellow(str));
}
function logProduction() {
	const str = `
  ████████  ████████   ███████    
  ██     ██ ██     ██ ██     ██   
  ██     ██ ██     ██ ██     ██   
  ████████  ████████  ██     ██   
  ██        ██   ██   ██     ██   
  ██        ██    ██  ██     ██   
  ██        ██     ██  ███████    `;
	console.log(chalk.bgCyan.white.bold(str));
}

gulp.task('d',(cb)=>{
	logDevelopment();
	process.env.NODE_ENV = 'development';
	const config = require('./webpack.config');
	const { entry } = config;
	
	Object.keys(entry).forEach((key) => {
		if (key !== 'vendor') {
			entry[key].unshift(`webpack-dev-server/client?${URI}`, 'webpack/hot/dev-server');
		}
	});
	
	config.plugins.push(new webpack.HotModuleReplacementPlugin());
	const server = new WebpackDevServer(webpack(config), config.devServer);
	server.listen(port, host, (err) => {
		if (err) { console.log(err); }
		gutil.log('[webpack-dev-server]', URI);
		cb();
	});
});

gulp.task('p',(cb)=>{
	logProduction();
	process.env.NODE_ENV = 'production';
	const config = require('./webpack.config');
	// config.plugins.push(new webpack.optimize.UglifyJsPlugin(),
	// 	new webpack.LoaderOptionsPlugin({
	// 		test: /\.(css|scss|styl)$/,
	// 		minimize: true,
	// 	}));
	const compiler = webpack(config);
	compiler.apply(new webpack.ProgressPlugin());
	compiler.run((err, stats) => {
		if (err) {
			throw new gutil.PluginError('webpack:build', err);
		}
		if (stats.hasErrors()) {
			console.error(stats.toString('errors-only'));
			return;
		}
		console.log(chalk.bgCyan.white.bold('[webpack:build]'), stats.toString({
			colors: true,
			children: false,
			modules: false,
		}));
		cb();
	});
});