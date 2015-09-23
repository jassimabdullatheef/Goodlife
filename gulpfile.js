var gulp = require('gulp'),
    webserver = require('gulp-webserver'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass');

// webserver
gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      //directoryListing: true,
      open: true
    }));
});

// Sass
gulp.task('sass', function () {
  gulp.src('dev/sass/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('asset/styles'));
  gulp.src(['asset/styles/01-tools/*.css','asset/styles/02-basics/*.css','asset/styles/03-modules/*.css','asset/styles/04-pages/*.css'])
    .pipe(concat('style.min.css'))
    .pipe(gulp.dest('asset/styles'));
});

// Watch
gulp.task('watch', function () {
  gulp.watch('./sass/**/*.scss', ['scss']);
});

// Default
gulp.task('default', ['webserver','sass','watch']);
