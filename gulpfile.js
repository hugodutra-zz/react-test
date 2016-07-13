"use strict";

const gulp = require('gulp');
const browserify = require('browserify');
const connect = require('gulp-connect');
const babel = require('gulp-babel');

gulp.task('build-server', (done) => {
    glob('./src/*.js', (err, files) => {
        if (err) done(err)

        let tasks = files.map((entry) => {
            return gulp.src(entry)
                .pipe(babel({ presets: ['es2015'] }))
                .pipe(gulp.dest('./build'));
        });
    });
});

gulp.task('build', ['build-client', 'build-server'])

gulp.task('watch-client', () => {
    gulp.watch('./app/**/*', ['build-client'], (e) => {
        console.log('Client file ' + e.path + ' was ' + e.type + ', rebuilding...')
    })
})

gulp.task('watch-server', () => {
    gulp.watch('./src/**/*', ['build-server'], (e) => {
        console.log('Server file ' + e.path + ' was ' + e.type + ', rebuilding...')
    })
})

gulp.task('watch', ['watch-client', 'watch-server'])