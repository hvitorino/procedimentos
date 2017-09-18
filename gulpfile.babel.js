import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import path from 'path';

const plugins = loadPlugins();

const paths = {
    js: [
        'app.js',
        './src/api/**/*.js',
        '!build/**',
        '!node_modules/**'
    ]
};

gulp.task('babel', () => {
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