'use strict';

let gulp   = require('gulp');
let stylus = require('gulp-stylus');
let watch  = require('gulp-watch');
let batch  = require('gulp-batch');
let jeet   = require('jeet');
let nib    = require('nib');

gulp.task('stylus', () => {
  return gulp.src('./src/stylus/**/*.styl')
    .pipe(stylus({
      use: [jeet(), nib()],
      import: ['jeet', 'nib']
    }))
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', ['stylus'], () => {
  watch('./assets/stylus/**/*.styl', batch((events, done) => {
    gulp.start('stylus', done);
  }));
});

gulp.task('default', ['stylus']);