var gulp = require('gulp');
var jshint = require('gulp-jshint');

gulp.task('analisar', function () {
	gulp.src('src/app/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

gulp.task('default', function() {
	gulp.run('analisar');
	gulp.watch('src/app/**/*.js', function (evt) {
		gulp.run('analisar');
	});
});