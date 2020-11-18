const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');
const minify = require('gulp-minify-css');
const merge = require('merge-stream');
const watch = require('gulp-watch');
const plumber = require('gulp-plumber');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const clean = require('gulp-contrib-clean');
const browser = require('browser-sync').create();
const imageMin = require('gulp-imagemin');
const html = require('gulp-posthtml');



gulp.task('copy', async function () {
  await gulp.src([
    'src/fonts/**/*.{woff, woff2}',
    'src/img/**',
    'src/js/**',
    'src/*.html',
    'src/css/**'
  ], {
    base: 'src'
  })
    .pipe(plumber())
    .pipe(gulp.dest('build'));
});

gulp.task('clean', async function () {
  return gulp.src('build')
    .pipe(clean());
});

gulp.task('miniCss', function () {
  return gulp.src('build/css/*.css')
    .pipe(minify())
    .pipe(gulp.dest('build/css'));
});

gulp.task('miniPic', function () {
  return gulp.src('build/img/*.{png,jpg,svg}')
    .pipe(imageMin([
      imageMin.optipng({optimizationLevel: 3}),
      imageMin.mozjpeg({progressive: true}),
      imageMin.svgo()
    ]))
    .pipe(gulp.dest('build/img'));
});

gulp.task('browser-sync', function () {
  browser.init({
    server: {
      baseDir: './src'
    }
  });
  return gulp.watch('src/*.html')
    .on('change', browser.reload);
});

gulp.task('watcher', function () {
  return watch('src/less/*.less', function () {
    let lessStream = gulp.src(['src/less/*.less'])
      .pipe(plumber())
      .pipe(less())
      .pipe(concat('less-files.less'));

    return merge(lessStream)
      .pipe(concat('style.css'))
      .pipe(postcss([autoprefixer]))
      .pipe(minify())
      .pipe(gulp.dest('src/css'))
      .pipe(browser.reload({stream: true}));
  });
});

gulp.task('sync', gulp.parallel('watcher', 'browser-sync'));
gulp.task('build', gulp.series('clean', 'copy', 'miniCss', 'miniPic'));