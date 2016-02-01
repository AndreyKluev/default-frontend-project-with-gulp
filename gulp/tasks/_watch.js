/*
 * Created by Kluev A. V. <andrey.kluev@gmail.com>
 */

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    batch = require('gulp-batch');

var config = require('../config');

gulp.task('watch', function () {
    watch(config.makeup.lessDir + '/**/*.less', batch(function (events, done) {
        gulp.start('less', done);
    }));

    watch(config.makeup.cssDir + '/**/*.css', batch(function (events, done) {
        gulp.start('css', done);
    }));

    watch(config.makeup.jsDir + '/**/*.js', batch(function (events, done) {
        gulp.start('js', done);
    }));

    watch(config.makeup.imgDir + '/**/*', batch(function (events, done) {
        gulp.start('images', done);
    }));

    watch(config.fontello.configFile, batch(function (events, done) {
        gulp.start('fontello', done);
    }));

    watch(config.iconfont.srcIconsDir + '/*.svg', batch(function (events, done) {
        gulp.start('iconfont', done);
    }));

    watch(config.makeup.pagesDir + '/**/*.html', batch(function (events, done) {
        gulp.start('pages', done);
    }));
});