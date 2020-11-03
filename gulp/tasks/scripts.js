const gulp = require('gulp');

module.exports = function scripts() {
  return gulp.src('src/js/*.js')
    .pipe(gulp.dest('build/js'))
}

