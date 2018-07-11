var gulp = require('gulp');

gulp.task('copy_dist', function(){
	gulp.src('./dist/**/*')
	.pipe(gulp.dest('../../server/AccountNode/public'))
});