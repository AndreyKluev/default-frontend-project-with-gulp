/*
 * Created by Kluev A. V. <andrey.kluev@gmail.com>
 */

var
    gulp = require('gulp'),
    del = require('del'),
    config = require('../config');

gulp.task('clear', function(){
    return del(config.destDir);
});