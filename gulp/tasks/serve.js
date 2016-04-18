/*
 * Created by Kluev A. V. <andrey.kluev@gmail.com>
 */

var
    gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    config = require('../config');

gulp.task('serve', function() {
    browserSync.init({
        logLevel: "debug",
        server: {
            baseDir: './', // Здесь должен быть корень проекта, иначе скрипты и стили из 'vendor' не будут подгружаться
            directory: true
        },
        startPath: config.destDir, // Открываем сразу папку со скомпиленными страницами
        reloadDelay: 500,
        reloadDebounce: 500
    });

    // Наблюдаем только за папками с css, js и html.
    // Нет необходимости обновлять страницы при изменении картинок или шрифтов
    browserSync.watch([
        config.makeup.destCssDir + '/**/*',
        config.makeup.destJsDir + '/**/*',
        config.makeup.destPagesDir + '/**/*'
    ]).on('all', browserSync.reload);
});