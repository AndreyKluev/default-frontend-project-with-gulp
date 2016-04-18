/*
 * Created by Kluev A. V. <andrey.kluev@gmail.com>
 */

var
    gulp = require('gulp'),
    del = require('del'),
    zip = require('gulp-zip'),
    config = require('../config').zip;

gulp.task('zip', function() {
    // Удаляем старый архив
    del(config.destDir + '/' + config.zipFile);

    // Упаковываем новый
    return gulp.src(config.srcFiles, {base: "."})
        .pipe(zip(config.zipFile))
        .pipe(gulp.dest(config.destDir));
});