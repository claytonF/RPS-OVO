var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
//var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css')

gulp.task('styles',function(){
	gulp.src('app/sass/styles.scss')
		.pipe(sass().on('error',sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 20 versions']

		}))
		.pipe(cleanCSS())
		.pipe(gulp.dest('./app/css/'))
})

gulp.task('sass:watch', function () {
  gulp.watch('./app/sass/*.scss', ['styles']);
});
