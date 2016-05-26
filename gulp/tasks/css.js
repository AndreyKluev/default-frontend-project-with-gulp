/*
 * Created by Kluev A. V. <andrey.kluev@gmail.com>
 */

var
    gulp = require('gulp'),
    myth = require('gulp-myth'),
    path = require('path'),
    watch = require('gulp-watch'),
    batch = require('gulp-batch'),
    config = require('../config').makeup;

gulp.task('css', function(){
    return gulp.src(config.cssDir + '/**/*.css')
        .pipe(myth())
        .pipe(gulp.dest(config.destCssDir));
});

gulp.task('watch-css', function(){
    watch(config.lessDir + '/**/*.css', batch(function (events, done) {
        gulp.start('css', done);
    }));
});