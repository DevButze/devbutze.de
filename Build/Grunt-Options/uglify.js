/**
 * Grunt-Contrib-Uglify
 * @description Minify files with UglifyJS.
 * @docs https://github.com/gruntjs/grunt-contrib-uglify
 */

var config = require('../Config');

module.exports = {
    all: {
        files: [{
            expand: true,
            cwd: config.JavaScripts.paths.distDir,
            src: '**/*.js',
            dest: config.JavaScripts.paths.distDir
        }]
    }
};
