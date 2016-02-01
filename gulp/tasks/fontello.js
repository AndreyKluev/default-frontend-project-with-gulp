/*
 * Created by Kluev A. V. <andrey.kluev@gmail.com>
 */

var gulp = require('gulp'),
    updateFontello = require('fontello-update');

var config = require('../config').fontello;

gulp.task('fontello', function() {
    updateFontello({
        config: config.configFile,
        fonts: config.destFontsDir,
        css: config.destStylesDir
    });
});