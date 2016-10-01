const task = (gulp, plugins, cfg) => {
  const opts = cfg.nodemon.opts;

  opts.tasks = ['lint'];

  function nodemon() {
    const monitor = plugins.nodemon(opts);

    // Required to handle bug when attempting to quit with Cmd + C
    monitor.on('quit', () => {
      process.exit(); // eslint-disable-line no-process-exit
    });
  }

  gulp.task('nodemon', nodemon);
};

export default task;
