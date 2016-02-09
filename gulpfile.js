'use strict';

/*
 gulpfile.js
 ===========
 Rather than manage one giant configuration file responsible
 for creating multiple tasks, each task has been broken out into
 its own file in gulp/tasks. Any files in that directory get
 automatically required below.
 To add a new task, simply add a new task file that directory.
 gulp/tasks/default.js specifies the default set of tasks to run
 when you run `gulp`.
 */

var
    requireDir = require('require-dir'),
    gulp = require('gulp');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });

// Основная задача для сборки проекта
gulp.task('build', ['clear'], function(){
    gulp.start('less');
    gulp.start('css');
    gulp.start('js');
    gulp.start('fontello');
    gulp.start('iconfont');
    gulp.start('images');
    gulp.start('pages');
});

// Здача для наблюдения за изменением
gulp.task('watch', ['watch-less', 'watch-css', 'watch-js', 'watch-fontello', 'watch-iconfont', 'watch-images', 'watch-pages']);

// Дефолтная задача = задаче 'build'
gulp.task('default', ['build']);

// Дев-режим = наблюдение и обновление в браузерах
gulp.task('dev', ['watch', 'serve']);