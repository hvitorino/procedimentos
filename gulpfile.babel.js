import gulp from 'gulp';
import sourcemaps from 'gulp-sourcemaps';
import clean from 'gulp-clean';
import FileCache from 'gulp-file-cache';
import loadPlugins from 'gulp-load-plugins';
import path from 'path';

const plugins = loadPlugins();

const BUILD_PATH = './dist';

gulp.task('clean', () => {
    return gulp.src(BUILD_PATH, { read: false })
        .pipe(clean());
});

gulp.task('compile', ['clean'], () => {
    const paths = {
        js: [
            'app.js',
            './api/**/*.js',
            '!./api/**/*.test.js'
        ]
    };

    return gulp.src(paths.js, { base: '.' })
        .pipe(sourcemaps.init())
        .pipe(plugins.babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(BUILD_PATH));
});

gulp.task('compile-test', ['clean'], () => {
    const paths = {
        js: [
            '!app.js',
            './api/**/*.js'
        ]
    };

    return gulp.src(paths.js, { base: '.' })
        .pipe(sourcemaps.init())
        .pipe(plugins.babel())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(BUILD_PATH));
});

gulp.task('run', ['compile'], () => {
    plugins.nodemon({
        script: path.join(BUILD_PATH, 'app.js'),
        watch : './api',
        tasks : ['compile']
    });
});

gulp.task('debug', ['compile'], () => {
    plugins.nodemon({
        exec  : 'node --debug',
        script: path.join(BUILD_PATH, 'app.js'),
        watch : './api',
        tasks : ['compile']
    });
});

gulp.task('test', ['compile-test'], () => {
    const paths = {
        js: [
            `./${BUILD_PATH}/**/*.js`,
            `!./${BUILD_PATH}/app.js`,
            '!node_modules/**'
        ]
    };

    gulp
        .src(paths.js, { read: false })
        .pipe(plugins.mocha({ reporter: 'spec' }));
});

gulp.task('debug-test', ['compile-test'], () => {
    const paths = {
        js: [
            `./${BUILD_PATH}/**/*.test.js`
        ]
    };

    gulp
        .src(paths.js, { read: false })
        .pipe(plugins.mocha({ 
            debugBrk: true,
            reporter: 'spec' 
        }));
});