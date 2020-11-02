const gulp = require('gulp');
const style = require('./style');
const pug2html = require('./pug2html');

const server = require('browser-sync').create();

module.exports = function serve() {
  server.init({
    server: { baseDir: 'build/'},
    notify: false
  });
  gulp.watch('src/styles/**/*.scss', gulp.series(style))
  gulp.watch('src/pages/**/*.pug', gulp.series(pug2html))
  gulp.watch('build/*.html').on('change', server.reload)
}
