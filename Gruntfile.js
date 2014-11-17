module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    path: {
      src: './src',
      tmp: './.tmp',
      components: './bower_components',
      dist: './build'
    },
    includes: {
      js: {
        options: {
          includeRegexp: /<!--\s*include\s+['"]?([^'"]+)['"]?\s*-->/
        },
        files: [
          {
            cwd: '<%= path.src %>/js/',
            src: '**/*.js',
            dest: '<%= path.dist %>'
          }
        ]
      }
    },
    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          '<%= path.tmp %>/templates/index.html': '<%= path.src %>/templates/index.html'
        }
      }
    },
    cssmin: {
      dist: {
        files: {
          '<%= path.tmp %>/css/styles.css': '<%= path.src %>/css/styles.css'
        }
      }
    },
    uglify: {
      dist: {
        src: '<%= path.dist %>/embed.js',
        dest: '<%= path.dist %>/embed.js'
      }
    },
    clean: ['<%= path.dist %>', '<%= path.tmp %>'],
    watch: {
      src: {
        files: '<%= path.src %>/**/*.*',
        tasks: 'default'
      }
    }
  });

  grunt.registerTask('default', [
    'clean',
    'cssmin',
    'htmlmin',
    'includes',
    'watch',
  ]);

  grunt.registerTask('prod', [
    'clean',
    'cssmin',
    'htmlmin',
    'includes',
    'uglify'
  ]);
};