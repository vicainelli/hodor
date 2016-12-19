(function() {

  'use strict';

  // Gulp modules
  // ====================================
  var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    sourcemaps = require('gulp-sourcemaps'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    pug = require('gulp-pug');


  // TASK: Stylesheet
  // ====================================
  gulp.task('sass', function() {
    return gulp.src('./src/sass/**/*.sass')
      .pipe(sourcemaps.init())
      .pipe(plumber())
      .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
      .pipe(gulp.dest('./dist/css'));
  });


  // TASK: Views
  // ====================================
  gulp.task('views', function buildHTML() {
    return gulp.src('./src/views/**/*.pug')
      .pipe(pug({}))
      .pipe(gulp.dest('./dist/'));
  });

  // TASK: Watch
  // ====================================
  gulp.task('watch', function() {
    gulp.watch('./src/views/**/*.pug', ['views']);
    gulp.watch('./src/sass/**/*.sass', ['sass']);
  });


  // TASK: Default
  // ====================================
  gulp.task('default', ['sass', 'views']);

})();