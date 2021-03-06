/**
 * Grunt-Browserify
 * @description Grunt task for node-browserify.
 * @docs https://github.com/jmreidy/grunt-browserify
 */

var config = require('../Config'),
	externals = config.JavaScripts.externals,
	headFiles = {},
	vendorFile = {},
	files = {};

// Set the key for the main js application which should be compiled with browserify.
headFiles[config.JavaScripts.paths.distDir + '/Head.min.js'] = [config.JavaScripts.paths.devDir + '/Head.js'];
files[config.JavaScripts.paths.distDir + '/App.min.js'] = [config.JavaScripts.paths.devDir + '/App.js'];
vendorFile[config.JavaScripts.paths.distDir + '/Vendor.min.js'] = ['Vendor.js'];

module.exports = {
	options: {
		bundleOptions: {
			debug: true // Create a sourcemap.
		}
	},
	dev: {
		files: files
	},
	deploy: {
		options: {
			transform: ['stripify'] // Strip console.logs and uglify the build on deploy.
		},
		files: files
	},
	head: {
		files: headFiles
	}
};
