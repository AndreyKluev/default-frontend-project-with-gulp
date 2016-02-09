/*
 * Created by Kluev A. V. <andrey.kluev@gmail.com>
 */

var
    gulp = require('gulp'),
    del = require('del'),
    newer = require('gulp-newer'),
    imagemin = require('gulp-imagemin'),
    path = require('path'),
    watch = require('gulp-watch'),
    batch = require('gulp-batch'),
    config = require('../config').makeup;

gulp.task('images', function() {
    gulp.src(config.imgDir + '/**/*')
        .pipe(newer(config.destImgDir)) // Отфильтровывает только изменившиеся файлы
        .pipe(imagemin())
        .pipe(gulp.dest(config.destImgDir));
});

gulp.task('watch-images', function(){
    var watcher = watch(config.imgDir + '/**/*', batch(function (events, done) {
        gulp.start('images', done);
    }));

    // При удалении файла, удаляем его и в dest-папке
    watcher.on('unlink', function(filepath){
        var filePathFromSrc = path.relative(path.resolve(config.imgDir), filepath);
        var destFilePath = path.resolve(config.destImgDir, filePathFromSrc);
        del.sync(destFilePath);
    });
});