var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function(){
    browserSync({
        server: './',
        notify: false
    });

    gulp.watch('less/**/*.less', ['less']);
    gulp.watch('*.html', browserSync.reload)
});

gulp.task('less', function(){
    return gulp.src('less/**/*.less')
    .pipe(less())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream())
});