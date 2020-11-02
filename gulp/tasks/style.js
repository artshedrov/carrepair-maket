const gulp = require('gulp');
const sass = require('gulp-sass');

module.exports = function style() {
  return gulp.src('src/styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('build/css'))
}