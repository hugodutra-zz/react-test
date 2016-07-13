"use strict";

const gulp = require('gulp');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');

gulp.task('babel', () =>
    gulp.src('src/app.js')
        .pipe(babel({
            presets: ['es2015', 'react']
        }))
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest('dist'))
);