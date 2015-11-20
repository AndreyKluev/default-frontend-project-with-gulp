var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    myth = require('gulp-myth'),
    uglify = require('gulp-uglify'),
    csso = require('gulp-csso'),
    concat = require('gulp-concat'),
    includeHtml = require('gulp-include-html'),
    updateFontello = require('fontello-update');

gulp.task('build', function() {
    // Get fontello
    updateFontello({
        config: './fontello.json',
        fonts: './build/font',
        css: './build/css'
    });

    // CSS
    gulp.src('./assets/css/*.css')
        .pipe(myth())
        .pipe(csso())
        .pipe(gulp.dest('./build/css/'));

    // JS
    gulp.src(['./assets/js/**/*.js'])
        .pipe(gulp.dest('./public/js'));

    // Compress images
    gulp.src('./assets/img/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/img'));

    // Build pages
    gulp.src('./assets/tmpl/*.html')
        .pipe(includeHtml())
        .pipe(gulp.dest('build/'));
});