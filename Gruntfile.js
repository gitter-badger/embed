module.exports = function (grunt) {
  'use strict';

  require('time-grunt')(grunt);

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    includes: {
      js: {
        options: {
          includeRegexp: /<!--\s*include\s+['"]?([^'"]+)['"]?\s*-->/
        },

        files: [{
          cwd: 'src',
          src: '**/*.js',
          dest: 'build'
        }]
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },

        files: {
          'build/template.html': 'src/template.html'
        }
      }
    },

    cssmin: {
      dist: {
        files: {
          'build/style.css': 'src/style.css'
        }
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("yyyy/mm/dd") %> */\n'
      },

      dist: {
        files: {
          'build/docs.js': 'build/docs.js'
        }
      }
    },

    'gh-pages': {
      options: {
        base: 'build',
        message: 'Auto-generated commit, see "master" branch for details.',
        clone: '.gh-pages'
      },

      src: '**/*'
    },

    cloudflare: {
      options: {
        a: 'fpurge_ts',
        tkn: process.env.CLOUDFLARE_API_KEY,
        email: process.env.CLOUDFLARE_EMAIL,
        z: 'embed.mashape.com'
      }
    },

    clean: {
      src: ['build']
    },

    watch: {
      src: {
        files: 'src/**/*.*',
        tasks: 'default'
      }
    }
  });

  grunt.registerTask('build', [
    'clean',
    'cssmin',
    'htmlmin',
    'includes',
    'uglify'
  ]);

  grunt.registerTask('default', [
    'build',
    'watch',
  ]);

  grunt.registerTask('deploy', [
    'build',
    'gh-pages',
    //'cloudflare'
  ]);
};
