'use strict';

module.exports = function(grunt) {


	// Project Configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

        watch: {
            css: {
                files: ['**/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: true
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'sass/Style.css' : 'sass/sassCSS.scss'
                }
            }
        }


});

	// Load NPM tasks
	require('load-grunt-tasks')(grunt);


	// Default task(s).
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.registerTask('default',['watch']);

};