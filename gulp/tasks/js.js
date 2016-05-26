/*
 * Created by Kluev A. V. <andrey.kluev@gmail.com>
 */

var
    gulp = require('gulp'),
    watch = require('gulp-watch'),
    batch = require('gulp-batch'),
    config = require('../config').makeup;

gulp.task('js', function() {
    gulp.src([config.jsDir + '/**/*.js'])
        .pipe(gulp.dest(config.destJsDir));
});

gulp.task('watch-js', function(){
    watch(config.jsDir + '/**/*.js', batch(function (events, done) {
        gulp.start('js', done);
    }));
});