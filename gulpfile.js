var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    myth = require('gulp-myth'),
    concat = require('gulp-concat'),
    includeHtml = require('gulp-include-html'),
    updateFontello = require('fontello-update'),
    less = require('gulp-less'),
    path = require('path'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect'),
    batch = require('gulp-batch'),
    iconfont = require('gulp-iconfont'),
    rename = require("gulp-rename"),
    consolidate = require('gulp-consolidate'),

    runTimestamp = Math.round(Date.now()/1000);

var fontName = 'symbols'; // set name of your symbol font
var template = 'fontawesome-style'; // you can also choose 'foundation-style'

// Get fontello icons
gulp.task('fontello', function() {
    updateFontello({
        config: './fontello.json',
        fonts: './build/font',
        css: './build/css'
    });
});

gulp.task('iconfont', function(){
    return gulp.src(['assets/font-icons/*.svg'])
        .pipe(iconfont({
            fontName: fontName, // required
            appendUnicode: true, // recommended option
            formats: ['ttf', 'eot', 'woff', 'svg'], // default, 'woff2' and 'svg' are available
            timestamp: runTimestamp, // recommended to get consistent builds when watching files
        }))
        .on('glyphs', function(glyphs) {
            var options = {
                glyphs: glyphs.map(function(glyph) {
                    // this line is needed because gulp-iconfont has changed the api from 2.0
                    return { name: glyph.name, codepoint: glyph.unicode[0].charCodeAt(0) }
                }),
                fontName: fontName,
                fontPath: '../font/', // set path to font (from your CSS file if relative)
                className: 's' // set class name in your CSS
            };
            gulp.src('./assets/templates/' + template + '.css')
                .pipe(consolidate('lodash', options))
                .pipe(rename({ basename: fontName }))
                .pipe(gulp.dest('./build/css/')); // set path to export your CSS

            // if you don't need sample.html, remove next 4 lines
            gulp.src('./assets/templates/' + template + '.html')
                .pipe(consolidate('lodash', options))
                .pipe(rename({ basename:'sample' }))
                .pipe(gulp.dest('./build/')); // set path to export your sample HTML
        })
        .pipe(gulp.dest('./build/font/'));
});

// Optimization images
gulp.task('images', function() {
    gulp.src('./assets/img/**/*')
        .pipe(watch('./assets/img/**/*'))
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img'));

    gulp.src('./assets/pic/**/*')
        .pipe(watch('./assets/pic/**/*'))
        .pipe(imagemin())
        .pipe(gulp.dest('./build/pic'));
});

// Build pages
gulp.task('pages', function() {
    gulp.src('./assets/tmpl/*.html')
        .pipe(watch('./assets/tmpl/**/*.html'))
        .pipe(includeHtml())
        .pipe(gulp.dest('build/'))
        .pipe(connect.reload());
});

// CSS
gulp.task('css', function() {
    gulp.src('./assets/css/**/*.less')
        .pipe(watch('./assets/css/**/*.less'))
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(myth())
        .pipe(gulp.dest('./build/css/'))
        .pipe(connect.reload());
});

// JS
gulp.task('js', function() {
    gulp.src(['./assets/js/**/*.js'])
        .pipe(watch('./assets/js/**/*.js'))
        .pipe(gulp.dest('./build/js'))
        .pipe(connect.reload());
});

/* * */

// Start web-server
gulp.task('connect', function() {
    connect.server({
        //root: ['build'],
        port: 8000,
        livereload: true
    });
});

gulp.task('watch', ['build', 'connect']);

gulp.task('build', ['fontello', 'iconfont', 'images', 'pages', 'css', 'js']);