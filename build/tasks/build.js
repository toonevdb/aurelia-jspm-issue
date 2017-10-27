var gulp = require('gulp');
var runSequence = require('run-sequence');
var changed = require('gulp-changed');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var assign = Object.assign || require('object.assign');
var modify = require('gulp-modify');
var notify = require('gulp-notify');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var htmlmin = require('gulp-htmlmin');
var jspm = require('jspm');
var sass = require('gulp-sass');
var typescript = require('gulp-typescript');

var systemJS = new jspm.Loader();

// transpiles changed es6 files to SystemJS format
// the plumber() call prevents 'pipe breaking' caused
// by errors from other gulp plugins
// https://www.npmjs.com/package/gulp-plumber
var typescriptCompiler = typescriptCompiler || null;
gulp.task('build-system', function() {
  if(!typescriptCompiler) {
    typescriptCompiler = typescript.createProject('tsconfig.json', {
      "typescript": require('typescript')
    });
  }

  return gulp.src(paths.dtsSrc.concat(paths.source))
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(changed(paths.output, {extension: '.ts'}))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(typescriptCompiler())
    .pipe(sourcemaps.write('.', {includeContent: false, sourceRoot: '/src'}))
    .pipe(gulp.dest(paths.output));
});

// copies changed html files to the output directory
gulp.task('build-html', function() {
  return gulp.src(paths.html)
    .pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
    .pipe(changed(paths.output, {extension: '.html'}))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest(paths.output));
});

gulp.task('build-styles', function() {
  return gulp.src([paths.appStyles, paths.themeStyles])
    .pipe(modify({
      fileModifier: function (file, content) {
        var regex = /jspm:([a-zA-Z\/_.-]*)/g;

        while (match = regex.exec(content)) {
          var normalized = systemJS.resolveSync(match[1]);

          content = content.replace('jspm:' + match[1], normalized.replace('file://', ''));
        }

        return content;
    }}))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.output));
});

gulp.task('copy-assets', function() {
  return gulp.src(paths.assets)
    .pipe(gulp.dest(paths.assetsOutput));
});

// this task calls the clean task (located
// in ./clean.js), then runs the build-system
// and build-html tasks in parallel
// https://www.npmjs.com/package/gulp-run-sequence
gulp.task('build', function(callback) {
  return runSequence(
    'clean',
    ['build-system', 'build-html', 'build-styles', 'copy-assets'],
    callback
  );
});
