/*
 * Created by Kluev A. V. <andrey.kluev@gmail.com>
 */

var gulp = require('gulp');

var config = require('../config');

gulp.task('build', function () {
    gulp.start('less');

    gulp.start('css');

    gulp.start('js');

    gulp.start('images');

    gulp.start('fontello');

    gulp.start('iconfont');

    gulp.start('pages');
});