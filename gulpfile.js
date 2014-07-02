'use strict';

var gulp = require('gulp'),
    nodemon = require('gulp-nodemon');

gulp.task('serve', function() {
    nodemon({
        script: 'server.js',
   })
   .on('restart', function() {
        console.log('restarted');
   });
});

gulp.task('default',function(){

});
