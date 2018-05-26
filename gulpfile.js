const gulp = require('gulp');
const spawn = require('child_process').spawn;
const browser = require('browser-sync').create();

// Сборка проекта в папку _site
gulp.task('jekyll-build', function(done) {
  return spawn('jekyll', ['build'], {
    shell: true,
    stdio: 'inherit'
  }).on('close', done);
});

//Запуск сервера из папки _site
gulp.task('browser-sync', ['jekyll-build'], function() {
  browser.init({
    server: {
      baseDir: "_site"
    }
  });
});

//Следим за изменениями исходных файлов, при изменении перезапускаем сервер и сборку
gulp.task('jekyll-rebuild', ['jekyll-build'], function() {
  browser.reload();
})

gulp.task('watch', function() {
  gulp.watch('*.html', ['jekyll-rebuild']),
  gulp.watch('_includes/*.html', ['jekyll-rebuild']),
  gulp.watch('_layouts/*.html', ['jekyll-rebuild']),
  gulp.watch('_posts/*.md', ['jekyll-rebuild']),
  gulp.watch('_sass/*.scss', ['jekyll-rebuild']),
  gulp.watch('assets/**', ['jekyll-rebuild']),
  gulp.watch('css/*.scss', ['jekyll-rebuild']),
  gulp.watch('js/*.js', ['jekyll-rebuild']);
});

gulp.task('start', ['browser-sync', 'watch']);