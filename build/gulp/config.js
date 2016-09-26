/* eslint-disable no-process-env */
import cwd from 'cwd';

const buildDir = cwd('build');
const srcDir = cwd('app');

const cfg = {
  eslint: {
    src: {
      src: [
        cwd(srcDir, '**/*.js')
      ],
      build: [
        cwd(buildDir, '**/*.js')
      ]
    },
    opts: {
      config: cwd('.eslintrc.js'),
      formatter: 'stylish',
      fix: true
    }
  },
  nodemon: {
    opts: {
      exec: 'babel-node',
      script: cwd(process.env['npm_package_main']),
      ext: 'js',
      watch: [
        cwd(srcDir, '**/*.js'),
        cwd('.env*'),
        cwd('.eslint*')
      ]
    }
  },
  test: {
    src: [
      cwd('**/*.spec.js')
    ]
  }
};

cfg.env = {
  isLocal: process.env.NODE_ENV === 'local',
  isVerbose: !!process.env.GULP_DEBUG
};

cfg.dirs = {
  build: buildDir,
  src: srcDir
};

export default cfg;
