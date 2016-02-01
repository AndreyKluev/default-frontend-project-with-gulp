/*
 * Created by Kluev A. V. <andrey.kluev@gmail.com>
 */

var gulp = require('gulp');

var config = require('../config').makeup;

gulp.task('js', function() {
    gulp.src([config.jsDir + '/**/*.js'])
        .pipe(gulp.dest(config.destJsDir));
});