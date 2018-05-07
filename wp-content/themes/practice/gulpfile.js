/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-cssnano gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */

// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    // livereload = require('gulp-livereload'),
    del = require('del');

// Styles
gulp.task('styles', function() {
  return sass('build/css/style.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/styles'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Vendor Styles
gulp.task('vendor-styles', function() {
  return gulp.src('build/css/vendor/*.css')
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest('dist/styles'))
    .pipe(notify({ message: 'Vendor styles task complete' }));

});

//Scripts
gulp.task('scripts', function() {
  return gulp.src([
    'build/js/*.js',

    ])
    // .pipe(jshint('.jshintrc'))
    // .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

//Vendor Scripts
gulp.task('vendor-scripts', function() {
  return gulp.src('build/js/vendor/*.js')
    // .pipe(jshint('.jshintrc'))
    // .pipe(jshint.reporter('default'))
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(notify({ message: 'Vendor scripts task complete' }));
});

// Images
gulp.task('images', function() {
  return gulp.src('build/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images'))
    .pipe(notify({ message: 'Images task complete' }));
});

// Clean
gulp.task('clean', function() {
  return del(['dist/styles', 'dist/scripts', 'dist/images']);
});




gulp.task('serve', function() {

  // Watch .scss files
  gulp.watch('build/css/*.scss', ['styles']);

  // Watch vendor styles
  gulp.watch('build/css/vendor/*.css', ['vendor-styles']);

  // Watch .js files
  gulp.watch('build/js/*.js', ['scripts']);

  gulp.watch('build/js/vendor/*.js', ['vendor-scripts']);

  // Watch image files
  gulp.watch('build/images/*', ['images']);

  // Watch any files in dist/, reload on change
  // gulp.watch(['build/dist/**']).on('change', livereload.changed);

});

// Automagical

gulp.task('default', ['serve']);