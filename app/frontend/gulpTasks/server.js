const gulp = require('gulp')
const watch = require('gulp-watch')
const webserver = require('gulp-webserver')

gulp.task('watch', () => {
    watch('billingCycleApp/**/*.html', () => gulp.start('app.html'))
    watch('billingCycleApp/**/*.css', () => gulp.start('app.css'))
    watch('billingCycleApp/**/*.js', () => gulp.start('app.js'))
    watch('assets/**/*.*', () => gulp.start('app.assets'))
})

gulp.task('server', ['watch'], () => {
    return gulp.src('public').pipe(webserver({
        livereload: true,
        port: 3000,
        open: true,
    }))
})