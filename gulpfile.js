var gulp = require('gulp');
var less = require('gulp-less');
var connect = require('gulp-connect');
var open = require('gulp-open');

var config = {
    baseUrl: 'http://localhost',
    port: 3000,
    paths: {
        html: './src/*.html',
        js: './src/scripts/*.js',
        less: './src/less/*.less',
        images: './src/images/**/*',
        dist: './dist'
    }
}

gulp.task('html', function () {
    return gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
})

gulp.task('less', function () {
    return gulp.src(config.paths.less)
        .pipe(less())
        .pipe(gulp.dest(config.paths.dist + '/css'))
        .pipe(connect.reload());
})

gulp.task('js', function () {
    return gulp.src(config.paths.js)
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
})

gulp.task('images', function () {
    return gulp.src(config.paths.images)
        .pipe(gulp.dest(config.paths.dist + '/images'))
        .pipe(connect.reload());
})

gulp.task('connect', function () {
    return connect.server({
        root: ['dist'],
        port: config.port,
        base: config.baseUrl,
        livereload: true
    })
})

gulp.task('open', gulp.series('connect', function () {
    return gulp.src('dist/index.html')
        .pipe(open({ uri: config.baseUrl + ':' + config.port + '/' }));
}))


gulp.task('default', gulp.series('images', 'html', 'less', 'js', 'open'));