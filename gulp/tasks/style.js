const gulp = require('gulp');
const scss = require('gulp-sass');
const concat = require('gulp-concat');
const cleanCss = require('gulp-clean-css');

module.exports = function style() {
  return gulp.src(['src/css/*.scss'])
    .pipe(scss())
    //.pipe(concat('style.css'))
    .pipe(cleanCss())
    .pipe(gulp.dest('build/css'))
}