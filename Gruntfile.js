'use strict';

module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);
	require('time-grunt')(grunt);

	grunt.initConfig({});

	grunt.registerTask('default', function () {
		console.log('Grunt is working');
	});
};
