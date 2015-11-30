var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    myth = require('gulp-myth'),
    concat = require('gulp-concat'),
    includeHtml = require('gulp-include-html'),
    updateFontello = require('fontello-update'),
    less = require('gulp-less'),
    path = require('path'),
    watch = require('gulp-watch');

// Get fontello icons
gulp.task('fontello', function() {
    updateFontello({
        config: './fontello.json',
        fonts: './build/font',
        css: './build/css'
    });
});

// Optimization images
gulp.task('images', function() {
    gulp.src('./assets/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img'));
});

// Build pages
gulp.task('pages', function() {
    gulp.src('./assets/tmpl/**/*.html')
        .pipe(includeHtml())
        .pipe(gulp.dest('build/'));
});

// CSS
gulp.task('css', function() {
    gulp.src('./assets/css/**/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(myth())
        .pipe(gulp.dest('./build/css/'));
});

// JS
gulp.task('js', function() {
    gulp.src(['./assets/js/**/*.js'])
        .pipe(gulp.dest('./build/js'));
});

/* * */

gulp.task('watch', function() {
    watch('./assets/tmpl/**/*.html', function(event) {
        gulp.run('pages');
    });

    watch('./assets/css/**/*.less', function(event) {
        gulp.run('css');
    });

    watch('./assets/js/**/*.js', function(event) {
        gulp.run('js');
    });
});

gulp.task('build', function() {
    gulp.run('fontello');
    gulp.run('images');
    gulp.run('pages');
    gulp.run('css');
    gulp.run('js');
});