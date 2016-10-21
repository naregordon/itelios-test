var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var del = require('del');

gulp.task('sass', function(){
  return gulp.src('scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
});

gulp.task('clean', function() {
  return del(['css/styles.css']);
});

gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch('index.html', browserSync.reload); 
  gulp.watch('js/**/*.js', browserSync.reload); 
});

gulp.task('build', ['clean', 'sass'], function (){
  console.log('Building files');
})

gulp.task('default', ['build']);