/*
 * Created by Kluev A. V. <andrey.kluev@gmail.com>
 */

var
    gulp = require('gulp'),
    del = require('del'),
    path = require('path'),
    includeHtml = require('gulp-include-html'),
    watch = require('gulp-watch'),
    batch = require('gulp-batch'),
    config = require('../config').makeup;

gulp.task('pages', function() {
    gulp.src(config.pagesDir + '/*.html')
        .pipe(includeHtml())
        .pipe(gulp.dest(config.destPagesDir));
});

gulp.task('watch-pages', function(){
    watch(config.pagesDir + '/**/*.html', batch(function (events, done) {
        gulp.start('pages', done);
    }));
});