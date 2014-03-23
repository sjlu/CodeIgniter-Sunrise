module.exports = function (grunt) {
  grunt.initConfig({

    files: {
      js: [
        'assets/js/**/*.js'
      ],
      less: ['assets/less/**/*.less']
    },

    /**
     * JS compilation
     * All this does is smush and minify.
     */
    concat: {
      options: {
        separator: ';'
      },
      default: {
        src: '<%= files.js %>',
        dest: 'assets/scripts.js'
      }
    },

    /**
     * LESS compilation
     * If you are creating any new files they
     * should all be referenced in base.less
     * and not here as this is only a compiler.
     */
    less: {
      options: {
        paths: [
          'assets/less'
        ]
      },
      default: {
        files: {
          "assets/styles.css": "assets/less/base.less"
        }
      }
    },

    /**
     * Watch
     * Watch the filesystem and auto-run these commands
     */
    watch: {
      options: {
        livereload: false,
        debounceDelay: 100,
        spawn: false
      },
      js: {
        files: '<%= files.js %>',
        tasks: ['concat']
      },
      less: {
        files: '<%= files.less %>',
        tasks: ['less']
      }
    }

  });

  /**
   * Plugins
   * We load the necessary Grunt plugins that
   * help us run our compilation. You will also
   * need to reference this in package.json
   */
  require("matchdep").filterDev([
    "grunt-*",
    "!grunt-template-jasmine-requirejs"
  ]).forEach(grunt.loadNpmTasks);
 
  /*
   * Tasks
   */
  grunt.registerTask('default', ['concat', 'less', 'watch']);
};
