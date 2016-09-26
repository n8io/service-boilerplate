const tests = (gulp, plugins, cfg) => {
  gulp.task('test:src', () => {
    return gulp.src(cfg.ava.src)
      .pipe(plugins.ava(cfg.ava.opts))
      ;
  });

  gulp.task('test', plugins.sequence('lint', 'test:src'));
};

export default tests;
