'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    cssmin = require('gulp-minify-css'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    concat = require("gulp-concat"),
    reload = browserSync.reload,
    cssbeautify = require('gulp-cssbeautify');

var path = {
    build: {
        jade: './build',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/img/'
    },
    src: { 
        jade: 'src/*.jade',
        js: 'src/js/**/*.js',
        style: 'src/style/main.scss',
        img: 'src/img/**/*'
    },
    watch: {
        jade: 'src/**/*.jade',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        img: 'src/img/**/*'
    },
    clean: './build'
};


var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "gulp-project"
};

gulp.task('jade', function() {
    gulp.src('src/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .on('error', console.log)
    .pipe(gulp.dest(path.build.jade))
    .pipe(reload({stream: true}));
}); 

gulp.task('jsbuild', function () {
    gulp.src(path.src.js)
        // .pipe(uglify())
        //.pipe(concat('app.min.js'))
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

gulp.task('stylebuild', function () {
    gulp.src(path.src.style)
        .pipe(sass())
        .pipe(prefixer())
        // .pipe(cssmin())
        .pipe(concat('style.min.css'))  
        .pipe(cssbeautify())     
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

gulp.task('imagebuild', function () {
    gulp.src(path.src.img)
        .pipe(gulp.dest(path.build.img))
        .pipe(reload({stream: true}));
});

gulp.task('fonts', function () {
    gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('build/fonts/'))
        .pipe(reload({stream: true}));
});

gulp.task('vendor', function () {
    gulp.src('src/vendor/**/*')
        .pipe(gulp.dest('build/vendor/'))
        .pipe(reload({stream: true}));
});

gulp.task('build', [
    'jade',
    'jsbuild',
    'stylebuild',
    'imagebuild',
    'fonts',
    'vendor'
]);

gulp.task('watch', function(){
    watch([path.watch.jade], function () {
        gulp.start('jade');
    });
    watch([path.watch.style], function() {
        gulp.start('stylebuild');
    });
    watch([path.watch.js], function() {
        gulp.start('jsbuild');
    });
    watch([path.watch.img], function() {
        gulp.start('imagebuild');
    });
});

gulp.task('webserver', function () {
    browserSync(config);
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('default', ['build', 'webserver', 'watch']);