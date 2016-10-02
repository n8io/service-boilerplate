import cwd from 'cwd';

const eslintTasks = (gulp, plugins, cfg) => {
  gulp.task('eslint:src', () => {
    return gulp.src(cfg.eslint.src.src)
      .pipe(plugins.eslint(cfg.eslint.opts))
      .pipe(plugins.eslint.format())
      .pipe(plugins.if(cfg.env.isVerbose, plugins.debug()))
      .pipe(plugins.if(!cfg.env.isLocal, plugins.eslint.failAfterError()))
      .pipe(plugins.if(cfg.env.isLocal && isFixed, gulp.dest(cwd(`${cfg.dirs.src}/`))));
  });

  gulp.task('eslint:build', () => {
    return gulp.src(cfg.eslint.src.build)
      .pipe(plugins.eslint(cfg.eslint.opts))
      .pipe(plugins.eslint.format())
      .pipe(plugins.if(cfg.env.isVerbose, plugins.debug()))
      .pipe(plugins.if(!cfg.env.isLocal, plugins.eslint.failAfterError()))
      .pipe(plugins.if(cfg.env.isLocal && isFixed, gulp.dest(cwd(`${cfg.dirs.build}/`))));
  });

  gulp.task('eslint', plugins.sequence('eslint:build', 'eslint:src'));

  // Helper function for determining if a file's lint error/warning was automatically fixed
  function isFixed(file) {
    return file.eslint && file.eslint.fixed;
  }
};

export default eslintTasks;
