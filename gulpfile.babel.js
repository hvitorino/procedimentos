import gulp from 'gulp';
import clean from 'gulp-clean';
import loadPlugins from 'gulp-load-plugins';
import path from 'path';

const plugins = loadPlugins();

const BUILD_PATH = 'build';

gulp.task('clean', () => {
    return gulp.src(BUILD_PATH, {read: false})
        .pipe(clean());
});

gulp.task('babel', ['clean'], () => {
    const paths = {
        js: [
            'app.js',
            './src/api/**/*.js',
            `!${BUILD_PATH}/**`,
            '!node_modules/**'
        ]
    };

    return gulp.src(paths.js, { base: '.' })
        .pipe(plugins.babel())
        .pipe(gulp.dest(BUILD_PATH));
})

gulp.task('run', ['babel'], () => {
    plugins.nodemon({
        script: path.join(BUILD_PATH, 'app.js'),
        ext: 'js',
        ignore: ['node_modules/**/*.js'],
        tasks: ['babel']
    });
});

gulp.task('debug', ['babel'], () => {
    plugins.nodemon({
        exec: 'node --debug',
        script: path.join(BUILD_PATH, 'app.js'),
        ext: 'js',
        ignore: ['node_modules/**/*.js'],
        tasks: ['babel']
    });
});

gulp.task('test', ['babel'], () => {
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
})