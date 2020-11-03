const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

module.exports = function style() {
  return gulp.src('src/styles/*.scss')
    .pipe(sass()).pipe(concat('style.css'))
    .pipe(gulp.dest('build/css'))
}