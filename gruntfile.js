module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    includePaths: require('node-neat').includePaths
                },
                files: {
                    'style.css': '_assets/scss/style.scss'
                }
            } 
        },
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            }
        },
        connect: {
            server: {
                options: {
                    port: 8080,
                    base: '_site'
                }
            }
        },
        watch: {
          scripts: {
            files: ['_assets/scss/*.scss'],
            tasks: ['sass'],
            options: {
              spawn: false,
            },
          },
          livereload: {
            files: [
                '_config.yml',
                'index.html',
                '_layouts/**',
                '_posts/**',
                '_includes/**',
                '**.css',
                '_assets/scss/**'
            ],
            tasks: ['shell:jekyllBuild'],
            options: {
              livereload: true
            },
          },
        },
        cssmin: {
          my_target: {
            files: [{
              expand: true,
              cwd: '',
              src: ['*.css', '!*.min.css'],
              dest: 'build/',
              ext: '.min.css'
            }]
          }
        },
        concat: {
            options: {
              separator: ';',
            },
            dist: {
              src: ['js/**.js'],
              dest: 'build/production.js',
            },
          },
        uglify: {
            my_target: {
              files: {
                'build/production.min.js': ['build/production.js']
              }
            }
          },
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
//    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['sass','cssmin','concat','uglify','shell','connect','watch']);

};