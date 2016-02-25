let gulp   = require('gulp');
let stylus = require('gulp-stylus');
let watch  = require('gulp-watch');
let batch  = require('gulp-batch');

gulp.task('stylus', () => {
  return gulp.src('./assets/stylus/**/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest('./assets/css'));
});

gulp.task('watch', ['stylus'], () => {
  watch('./assets/stylus/**/*.styl', batch((events, done) => {
    gulp.start('stylus', done);
  }));
});

gulp.task('default', ['stylus']);