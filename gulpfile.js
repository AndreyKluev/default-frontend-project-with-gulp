var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    myth = require('gulp-myth'),
    uglify = require('gulp-uglify'),
    csso = require('gulp-csso'),
    concat = require('gulp-concat'),
    includeHtml = require('gulp-include-html'),
    updateFontello = require('fontello-update'),
    less = require('gulp-less'),
    path = require('path');

gulp.task('build', function() {
    // Get fontello icons
    updateFontello({
        config: './fontello.json',
        fonts: './build/font',
        css: './build/css'
    });

    // CSS
    gulp.src('./assets/css/*.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less', 'includes') ]
        }))
        .pipe(myth())
        .pipe(csso())
        .pipe(gulp.dest('./build/css/'));

    // JS
    gulp.src(['./assets/js/**/*.js'])
        .pipe(gulp.dest('./build/js'));

    // Optimization images
    gulp.src('./assets/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img'));

    // Build pages
    gulp.src('./assets/tmpl/*.html')
        .pipe(includeHtml())
        .pipe(gulp.dest('build/'));
});