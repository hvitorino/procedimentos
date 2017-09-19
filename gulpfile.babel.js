import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import path from 'path';

const plugins = loadPlugins();

gulp.task('babel', () => {
    const paths = {
        js: [
            'app.js',
            './src/api/**/*.js',
            '!build/**',
            '!node_modules/**'
        ]
    };

    return gulp.src(paths.js, { base: '.' })
        .pipe(plugins.babel())
        .pipe(gulp.dest('build'));
})

gulp.task('run', ['babel'], () => {
    plugins.nodemon({
        script: path.join('build', 'app.js'),
        ext: 'js',
        ignore: ['node_modules/**/*.js', 'dist/**/*.js'],
        tasks: ['babel']
    });
});

gulp.task('debug', ['babel'], () => {
    plugins.nodemon({
        exec: 'node --debug',
        script: path.join('build', 'app.js'),
        ext: 'js',
        ignore: ['node_modules/**/*.js', 'dist/**/*.js'],
        tasks: ['babel']
    });
});

gulp.task('test', ['babel'], () => {
    const paths = {
        js: [
            './build/**/*.js',
            '!./build/app.js',
            '!node_modules/**'
        ]
    };

    gulp
        .src(paths.js, { read: false })
        .pipe(plugins.mocha({ reporter: 'nyan' }));
})