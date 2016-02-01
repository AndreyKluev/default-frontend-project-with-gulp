/*
 * Created by Kluev A. V. <andrey.kluev@gmail.com>
 */

var gulp = require('gulp'),
    myth = require('gulp-myth'),
    path = require('path');

var config = require('../config').makeup;

gulp.task('css', function(){
    return gulp.src(config.cssDir + '/**/*.css')
        .pipe(myth())
        .pipe(gulp.dest(config.destCssDir));
});