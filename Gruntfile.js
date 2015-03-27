/* globals module, require */

module.exports = function(grunt)
{
    'use strict';

    // Le Configuration
    grunt.initConfig(
    {
        stylus:
        {
            compile:
            {
                options:
                {
                    compress: false,
                    use:
                    [
                        require('jeet')
                    ],
                    paths:
                    [
                        './node_modules/jeet/stylus'
                    ]
                },
                files:
                {
                    'assets/css/style.css': 'assets/css/style.styl'
                }
            }
        },
        watch:
        {
            stylus:
            {
                files: ['assets/css/*.styl'],
                tasks: ['newer:stylus']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-newer');

    grunt.registerTask('default', ['newer:stylus','watch']);
};