'use strict';

const gulp       = require('gulp');
const stylus     = require('gulp-stylus');
const watch      = require('gulp-watch');
const batch      = require('gulp-batch');
const jeet       = require('jeet');
const nib        = require('nib');
const browserify = require('browserify')
const source     = require('vinyl-source-stream');

gulp.task('stylus', () => {
  return gulp.src('./src/stylus/main.styl')
    .pipe(stylus({
      use: [jeet(), nib()],
      import: ['jeet', 'nib']
    }))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('browserify', () => {
  return browserify('./src/js/main.js')
    .transform('babelify', { presets: ['es2015'] })
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./assets/js'));
});

gulp.task('watch', ['stylus', 'browserify'], () => {
  watch([
    './assets/stylus/**/*.styl',
    './assets/js/**/*.js'
  ], batch((events, done) => {
    gulp.start('stylus', () => {
      gulp.start('browserify', done);
    });
  }));
});

gulp.task('default', ['stylus', 'browserify']);