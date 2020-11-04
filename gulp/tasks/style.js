const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');

module.exports = function style() {
  return gulp.src('src/styles/*.scss')
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest('build/css'))
}