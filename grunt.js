module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-recess');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-contrib-less');

	var recessOptions = function(bool) {
		bool = ((typeof bool === 'undefined')? false : bool);
		var config = {
			compile: true,
			compress: bool,
			noIDs: false,
			noJSPrefix: false,
			noOverqualifying: false,
			noUnderscores: false,
			noUniversalSelectors: false,
			prefixWhitespace: false,
			strictPropertyOrder: false,
			zeroUnits: false
		};

		return config;
	}

	grunt.initConfig({
		pkg: '<json:package.json>',
		meta: {},
		files: {
			js: [
				'assets/js/frontpage.js',
				'assets/js/base.js'
			],
			less: [
				'assets/less/base.less'
			],
			html: [
				'*.html'
			]
		},
		concat: {
			js: {
				src: '<config:files.js>',
				dest: 'assets/js/app.js'
			}
		},
		min: {
			js: {
				src: '<config:files.js>',
				dest: 'assets/js/app.js'
			}
		},
		recess: {
			min: {
				src: '<config:files.less>',
				dest: 'assets/css/style.css',
				options: recessOptions(true)
			},
			max: {
				src: '<config:files.less>',
				dest: 'assets/css/style.css',
				options: recessOptions(false)
			}
		},
		watch: {
			less: {
				files: ['assets/less/*.less', 'assets/less/**/*.less'],
				tasks: 'concat recess:max'
			},
			js: {
				files: '<config:files.js>',
				tasks: 'concat recess:max'
			},
			html: {
				files: '<config:files.html>',
				tasks: 'concat recess:max'
			}
		},
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				latedef: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				boss: true,
				eqnull: true,
				browser: true
			}
		},
		uglify: {}
	});

	// Default task.
	grunt.registerTask('default', 'concat recess:max');
  	grunt.registerTask('deploy', 'min recess:min');
};
