var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    myth = require('gulp-myth'),
    concat = require('gulp-concat'),
    includeHtml = require('gulp-include-html'),
    updateFontello = require('fontello-update'),
    less = require('gulp-less'),
    path = require('path'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect');

 // Start web-server
gulp.task('connect', function() {
  connect.server({
    root: 'build',
    livereload: true
  });
});

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
        .pipe(gulp.dest('./build/img'))
	.pipe(connect.reload());
});

// Build pages
gulp.task('pages', function() {
    gulp.src('./assets/tmpl/*.html')
        .pipe(includeHtml())
        .pipe(gulp.dest('build/'))
	.pipe(connect.reload());
});

// CSS
gulp.task('css', function() {
    gulp.src('./assets/css/**/*.less')
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
        .pipe(gulp.dest('./build/js'))
	.pipe(connect.reload());
});

/* * */

gulp.task('watch', ['connect'], function() {
 
    gulp.watch('./assets/tmpl/**/*.html', ['pages']);

    gulp.watch('./assets/css/**/*.less', ['css']);

    gulp.watch('./assets/js/**/*.js', ['js']);
});

gulp.task('build', [
    'fontello', 
    'images',
    'pages',
    'css',
    'js'
]);