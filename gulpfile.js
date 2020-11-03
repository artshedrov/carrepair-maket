const gulp = require('gulp');
const serve = require('./gulp/tasks/serve');
const pug2html = require('./gulp/tasks/pug2html');
const scripts = require('./gulp/tasks/scripts');
const style = require('./gulp/tasks/style')

module.exports.start = gulp.series(pug2html, style, scripts,serve);