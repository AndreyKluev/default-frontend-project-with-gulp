/*
 * Created by Kluev A. V. <andrey.kluev@gmail.com>
 */

var
    gulp = require('gulp'),
    updateFontello = require('fontello-update'),
    watch = require('gulp-watch'),
    batch = require('gulp-batch'),
    config = require('../config').fontello;

gulp.task('fontello', function() {
    updateFontello({
        config: config.configFile,
        fonts: config.destFontsDir,
        css: config.destStylesDir
    });
});

gulp.task('watch-fontello', function(){
    watch(config.configFile, batch(function (events, done) {
        gulp.start('fontello', done);
    }));
});