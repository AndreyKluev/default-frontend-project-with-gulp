/*
 * Created by Kluev A. V. <andrey.kluev@gmail.com>
 */

var gulp = require('gulp'),
    myth = require('gulp-myth'),
    path = require('path'),
    less = require('gulp-less');

var config = require('../config').makeup;

gulp.task('less', function(){
    return gulp.src(config.lessDir + '/**/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(myth())
        .pipe(gulp.dest(config.destCssDir));
});