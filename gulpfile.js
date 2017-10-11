(function() {

'use strict';

/**
 * Gulp Modules
 */
var gulp = require('gulp');
var opn = require('opn');
var plumber = require('gulp-plumber');
var pug = require('gulp-pug')
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var watch = require('gulp-watch');
var webserver = require('gulp-webserver');


/**
 * Configurations vars
 */
var server = {
  host: 'localhost',
  port: '8001'
}


/**
 * Style
 */
gulp.task('sass', function() {
  return gulp.src('./src/sass/**/*.sass')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(gulp.dest('./dist/assets/css'));
});


/**
 * Views
 */
gulp.task('views', function buildHTML() {
  return gulp.src('./src/views/**/*.pug')
    .pipe(pug({}))
    .pipe(gulp.dest('./dist/'));
});

/**
 * Watch
 */
gulp.task('watch', function() {
  gulp.watch('./src/views/**/*.pug', ['views']);
  gulp.watch('./src/sass/**/*.sass', ['sass']);
});


/**
 * TASK: Webserver
 */
gulp.task('webserver', function() {
  gulp.src('./dist')
    .pipe(webserver({
      host: server.host,
      port: server.port,
      livereload: true,
      directoryListing: false
    }));
});


/**
 * TASK: Open Browser
 */
gulp.task('openbrowser', function() {
  opn('http://' + server.host + ':' + server.port);
});


/**
 * Default
 */
  gulp.task('default', [
    'sass',
    'views',
    'webserver',
    'watch',
    'openbrowser'
    ]);

})();
