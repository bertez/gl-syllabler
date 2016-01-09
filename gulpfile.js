'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');


gulp.task('watch', function() {
    gulp.watch(['**/*.js', '!node_modules/**'], ['lint']);
});

gulp.task('test', ['lint'], () => {
    gulp.src('test/*.js')
        .pipe(mocha());
});

gulp.task('lint', () => {
    gulp.src(['**/*.js','!node_modules/**'])
    .pipe(eslint())
    .pipe(eslint.format());
});

gulp.task('default', ['test']);