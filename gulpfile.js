const gulp = require('gulp'),
  webpack = require('webpack'),
  webpackStream = require('webpack-stream'),
  webpackConfig = require('./webpack.config.js');

gulp.task('copy', () => {
  gulp.src('./src/index.html')
  .pipe(gulp.dest('./dist'))
});

gulp.task('js', () => {
  gulp.src('./src/scripts/index.js')
    .pipe(webpackStream(webpackConfig), webpack)
    .pipe(gulp.dest('./dist'));
});


gulp.task('default', ['copy', 'js']);
gulp.watch('src/scripts/**', ['js']);
