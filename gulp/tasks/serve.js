const gulp = require('gulp');
const style = require('./style');
const html = require('./html')
const scripts = require('./scripts');
const image = require('./image');

const server = require('browser-sync').create();

module.exports = function serve() {
  server.init({
    server: { baseDir: 'build/'},
    notify: false
  });
  gulp.watch('src/css/*.scss', gulp.series(style)).on('change', server.reload)
  //gulp.watch('src/pages/**/*.pug', gulp.series(pug2html))
  gulp.watch('src/*.html', gulp.series(html))
  gulp.watch('src/img/*.{png,jpg,svg}', gulp.series(image)).on('change', server.reload)
  gulp.watch('src/js/*.js', gulp.series(scripts)).on('change', server.reload)
  gulp.watch('build/*.html').on('change', server.reload)
}
