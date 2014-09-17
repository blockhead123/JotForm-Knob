module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        replace: {
            dist: {
                src: ['src/index.html'],             // source files array (supports minimatch)
                dest: 'dist/',             // destination directory or file
                replacements: [{
                    from: 'jotform-knob.js',                   // string replacement
                    to: 'jotform-knob.min.js'
                },{
                    from: 'jotform-knob.css',                   // string replacement
                    to: 'jotform-knob.min.css'
                },
                {
                    from: 'http://jotform-widget-knob.zholpe.com/src/',
                    to: 'http://jotform-widget-knob.zholpe.com/dist/'
                }
                ]
            }
        },
        concat: {
            options: {
                separator: ';'
            }
        },
        uglify: {
            dist: {
                files: {
                    'dist/js/jotform-knob.min.js': ['src/js/jotform-knob.js']
                }
            }
        },
        cssmin : {
            styles: {
                src: ['src/css/jotform-knob.css'],
                dest: 'dist/css/jotform-knob.min.css'
            }
        }
    });
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['concat', 'replace', 'uglify', 'cssmin']);

};