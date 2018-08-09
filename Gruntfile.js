module.exports = function (grunt) {

    grunt.initConfig({
        includeSource: {
            options: {
                basePath: 'src/app',
                templates: {
                    html: {
                        js: '<script src="{filePath}"></script>',
                        css: '<link rel="stylesheet" type="text/css" href="{filePath}" />'
                    }
                }
            },
            myTarget: {
                files: {
                    'src/app/index.html': 'src/app/index.tpl.html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-include-source');

    // Tell Grunt what to do when we type "grunt" into the terminal
    grunt.registerTask('build', [
        'includeSource'
    ]);
};