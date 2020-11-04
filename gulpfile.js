const gulp = require('gulp');
const serve = require('./gulp/tasks/serve');
const pug2html = require('./gulp/tasks/pug2html');
const scripts = require('./gulp/tasks/scripts');
const style = require('./gulp/tasks/style');
const image = require('./gulp/tasks/image');
const html = require('./gulp/tasks/html')

module.exports.start = gulp.series(html, style, scripts, image, serve);