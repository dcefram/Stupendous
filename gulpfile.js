'use strict';

const gulp       = require('gulp');
const stylus     = require('gulp-stylus');
const watch      = require('gulp-watch');
const batch      = require('gulp-batch');
const babel      = require('gulp-babel');
const uglify     = require('gulp-uglify');
const jeet       = require('jeet');
const nib        = require('nib');

gulp.task('stylus', () => {
  return gulp.src('./src/stylus/main.styl')
    .pipe(stylus({
      use: [jeet(), nib()],
      import: ['jeet', 'nib']
    }))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('babel', () => {
  return gulp.src('./src/js/main.js')
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(uglify())
    .pipe(gulp.dest('./assets/js'));
});

gulp.task('watch', ['stylus', 'babel'], () => {
  watch([
    './src/stylus/**/*.styl',
    './src/js/**/*.js'
  ], batch((events, done) => {
    gulp.start('stylus', () => {
      gulp.start('babel', done);
    });
  }));
});

gulp.task('default', ['stylus', 'babel']);
