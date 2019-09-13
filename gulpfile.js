const { src, dest } = require('gulp');
const rm = require('gulp-rm');

gulp.task( 'clean:tmp', function() {
  return gulp.src( 'app/tmp/**/*', { read: false })
    .pipe( rm() )
})

// const files = [
//   'src/styles/one.scss',
//   'src/styles/two.scss'
// ]
function copy() {
  return src('src/**/*.scss').pipe(dest('dist'))
}


exports.copy = copy
