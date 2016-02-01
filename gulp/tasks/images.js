/*
 * Created by Kluev A. V. <andrey.kluev@gmail.com>
 */

var gulp = require('gulp'),
    imagemin = require('gulp-imagemin');

var config = require('../config').makeup;

gulp.task('images', function() {
    gulp.src(config.imgDir + '/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest(config.destImgDir));
});