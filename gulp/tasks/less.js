/*
 * Created by Kluev A. V. <andrey.kluev@gmail.com>
 */

var
    gulp = require('gulp'),
    myth = require('gulp-myth'),
    path = require('path'),
    less = require('gulp-less'),
    watch = require('gulp-watch'),
    batch = require('gulp-batch'),
    config = require('../config').makeup;

gulp.task('less', function(){
    return gulp.src(config.lessDir + '/**/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(myth())
        .pipe(gulp.dest(config.destCssDir));
});

gulp.task('watch-less', function(){
    watch(config.lessDir + '/**/*.less', batch(function (events, done) {
        gulp.start('less', done);
    }));
});