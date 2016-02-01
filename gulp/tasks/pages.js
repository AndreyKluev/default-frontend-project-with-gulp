/*
 * Created by Kluev A. V. <andrey.kluev@gmail.com>
 */

var gulp = require('gulp'),
    includeHtml = require('gulp-include-html');

var config = require('../config').makeup;

gulp.task('pages', function() {
    gulp.src(config.pagesDir + '/*.html')
        .pipe(includeHtml())
        .pipe(gulp.dest(config.destPagesDir));
});
