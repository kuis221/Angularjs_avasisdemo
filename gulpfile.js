var gulp = require('gulp');
var gutil = require('gulp-util');
var gsass = require('gulp-sass');
var server = require('gulp-express');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
    sass: ['public/content/sass/**/*.scss', '!public/content/sass/mixins.scss', '!public/content/sass/variables.scss']
};

gulp.task('sass', function() {
    gulp.src(paths.sass)
        .pipe(sourcemaps.init())
        .pipe(gsass())
        .pipe(sourcemaps.write('../maps'))
        .pipe(gulp.dest('public/content/css'));
});

gulp.task('default', ['sass']);

gulp.task('watch', function() {
    gulp.watch(paths.sass, ['sass']);
})

gulp.task('serve', function() {
    server.run(['server.js']);
    gulp.run('default');
    gulp.run('watch');
});
