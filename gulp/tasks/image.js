const gulp = require('gulp');
const miniPic = require('gulp-imagemin');

module.exports = function image() {
  return gulp.src('src/img/*.{png,jpg,svg}')
    .pipe(miniPic([
      miniPic.optipng({optimizationLevel: 3}),
      miniPic.mozjpeg({progressive: true}),
      miniPic.svgo()
  ]))
    .pipe(gulp.dest('build/img'))
}