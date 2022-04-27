const { src, dest, watch, series } = require('gulp');

// Sass compiler
const sass = require('gulp-sass')(require('sass'));

// Minifier JS
const minify = require('gulp-uglify');

// Minify CSS
const cleanCSS = require('gulp-clean-css');

// Renamer
const rename = require('gulp-rename');

function buildStyles() {
    return src('resources/scss/**/*.scss')
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(
            rename(function (path) {
                // Get the file name
                // path.basename += '-goodbye';
                // Change file extension
                path.extname = '.min.css';
            })
        )
        .pipe(dest('public/css'));
}

function watchTask() {
    // watch(['*/**/*.scss'], { delay: 500 }, buildStyles);
    watch(['*/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
