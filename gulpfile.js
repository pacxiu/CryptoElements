// gulp modules
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var cleanCSS = require('gulp-clean-css');
var bourbon = require('node-bourbon');

// path to source directory
var sourcePATH = './src/styles/';

// create CSS from SASS + minify CSS + create sourcemap
gulp.task('css', function() {
    gulp.src(sourcePATH + 'sass/main.sass')
        .pipe(sass({
                includePaths: bourbon.includePaths
            }).on('error', function(e) {
              console.log(e);
        }))
        .pipe(autoprefixer())
        .pipe(gulp.dest(sourcePATH + 'css'))
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src/dist'));

    gulp.src(sourcePATH + 'css/normalize.css')
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./src/dist'));
})


//task for browser sync
gulp.task('serve',  function () {

    gulp.watch(sourcePATH + 'sass/**', ['css']);

});

// default task
gulp.task('default', ['css', 'serve']);
