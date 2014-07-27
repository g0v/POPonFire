'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');

gulp.task('jshint', function() {
  return gulp.src(['./public/js/*.js', './config/*.js', './app/controllers/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default', { verbose: true }));
});

gulp.task('serve',['jshint'], function() {
    nodemon({
        script: 'server.js',
   })
   .on('restart', function() {
        console.log('restarted');
   });
});


gulp.task('default', ['jshint'], function(){

});
