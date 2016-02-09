/*
 * Created by Kluev A. V. <andrey.kluev@gmail.com>
 */

var
    gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    config = require('../config');

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: config.destDir,
            directory: true
        }
    });

    browserSync.watch(config.destDir + '/**/*.*').on('change', browserSync.reload);
});