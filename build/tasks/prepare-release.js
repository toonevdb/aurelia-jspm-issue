var gulp = require('gulp');
var runSequence = require('run-sequence');
var paths = require('../paths');
var changelog = require('gulp-conventional-changelog');
var fs = require('fs');
var bump = require('gulp-bump');
var args = require('../args');
var git = require('gulp-git');
//var tag_version = require('gulp-tag-version');
var pkg = require('../../package.json');

// utilizes the bump plugin to bump the
// semver for the repo
gulp.task('bump-version', function() {
  return gulp.src(['./package.json'])
    .pipe(bump({type: args.bump})) //major|minor|patch|prerelease
    .pipe(gulp.dest('./'));
});

// generates the CHANGELOG.md file based on commit
// from git commit messages
gulp.task('changelog', function(callback) {
  return gulp.src('./CHANGELOG.md')
    .pipe(changelog())
    .pipe(gulp.dest('.'));
});

gulp.task('commit-and-tag-version', function() {
  const version = 'v' + pkg.version;
  const versionMsg = 'Release: ' + version;
  
  return gulp.src(['./package.json', './CHANGELOG.md'])
    .pipe(git.add({quiet: true}))
    .pipe(git.commit(versionMsg, {quiet: true}))
    .pipe(git.tag(version, versionMsg));
});

gulp.task('check-branch', function() {
  return git.revParse({args:'--abbrev-ref HEAD'}, function (err, branch) {  
    if (branch !== 'master') {
      throw new Error('Not on master branch!');
    }

    return true;
  });
});

// calls the listed sequence of tasks in order
gulp.task('prepare-release', function(callback) {
  return runSequence(
    //'build',
    //'lint', // TODO: Reenable build and lint build step on prepare-release before bumping version
    'check-branch',
    'bump-version',
    'changelog',
    'commit-and-tag-version',
    callback
  );
});
