'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var gulpLiveScript = require('gulp-livescript');

gulp.task('build', ['jshint'], function () {
  return gulp.src(['./public/js/*.ls'])
    .pipe(gulpLiveScript({bare: true}))
    .pipe(gulp.dest('./public/js'));
});

gulp.task('jshint', function() {
  return gulp.src(['./public/js/*.js', './config/*.js', './app/controllers/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default', { verbose: true }));
});

gulp.task('serve', ['build'], function() {
    nodemon({
        script: 'server.js',
   })
   .on('restart', function() {
        console.log('restarted');
   });
});


gulp.task('default', ['build'], function(){

});
