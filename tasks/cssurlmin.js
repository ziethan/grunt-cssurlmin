/*
 * grunt-cssurlmin
 * http://mcgrenere.com/grunt-cssurlmin
 *
 * Copyright (c) 2013 Zach McGrenere
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('cssurlmin', 'Your task description goes here.', function() {
        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
            var src = f.src.filter(function(filepath) {
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            };
            src = removeURL(src);
            grunt.file.write(f.dest, src);
            grunt.log.writeln('File "' + f.dest + '" urls have been minified.');
        });
    });
    
    var removeURL = function(css) {
        css = css.replace(/(\(('|"))(?:.+[\/])/g, '$1');
        return css;
    };
};