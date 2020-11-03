const gulp = require('gulp');

module.exports = function html() {
  return gulp.src('src/pages/*.html')
    .pipe(gulp.dest('build'))
}