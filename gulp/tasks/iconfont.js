/*
 * Created by Kluev A. V. <andrey.kluev@gmail.com>
 */

var
    gulp = require('gulp'),
    iconfont = require('gulp-iconfont'),
    rename = require("gulp-rename"),
    consolidate = require('gulp-consolidate'),
    watch = require('gulp-watch'),
    batch = require('gulp-batch'),
    config = require('../config').iconfont,
    runTimestamp = Math.round(Date.now()/1000);

gulp.task('iconfont', function(){
    return gulp.src([config.srcIconsDir + '/*.svg'])
        .pipe(iconfont({
            fontName: config.fontName,
            appendUnicode: true,
            normalize: true,
            formats: config.fontFormats,
            timestamp: runTimestamp // recommended to get consistent builds when watching files
        }))
        .on('glyphs', function(glyphs) {
            var options = {
                glyphs: glyphs.map(function(glyph) {
                    return { name: glyph.name, codepoint: glyph.unicode[0].charCodeAt(0) }
                }),
                fontName: config.fontName,
                fontPath: config.incFontsDir,//'../font/',
                className: config.iconClassName
            };

            gulp.src(config.templatesDir + '/' + config.cssTemplate + '.css')
                .pipe(consolidate('lodash', options))
                .pipe(rename({ basename: config.fontName }))
                .pipe(gulp.dest(config.destStylesDir));

            gulp.src(config.templatesDir + '/' + config.sampleTemplate + '.html')
                .pipe(consolidate('lodash', options))
                .pipe(rename({basename: config.sampleFile}))
                .pipe(gulp.dest(config.sampleDir));
        })
        .pipe(gulp.dest(config.destFontsDir));
});

gulp.task('watch-iconfont', function(){
    watch(config.srcIconsDir + '/*.svg', batch(function (events, done) {
        gulp.start('iconfont', done);
    }));
});