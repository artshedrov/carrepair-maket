const gulp = require('gulp');
const serve = require('./gulp/tasks/serve');
const pug2html = require('./gulp/tasks/pug2html');

module.exports.start = gulp.series(pug2html,serve);