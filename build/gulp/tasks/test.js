const cwd = require('cwd');

const tests = (gulp, plugins, cfg) => {
  gulp.task('test:src', () => {
    return gulp.src(cfg.test.src)
      .pipe(plugins.ava({verbose: cfg.env.isVerbose}))
      ;
  });

  gulp.task('test', plugins.sequence('test:src'));
};

export default tests;
