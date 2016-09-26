/* eslint-disable no-process-env */
import express from 'express';
import dotenv from 'dotenv-safe';
import cwd from 'cwd';

import middleware from './middleware';
import routes from './routes';

const app = express();

// Load config
dotenv.load({
  path: cwd(__dirname, '../../.env'),
  sample: cwd(__dirname, '../../.env.example'),
  silent: true
});

// Bind middleware
middleware(app);

// Bind route handlers
routes(app);

const server = app.listen(process.env.PORT, process.env.HOST, () => {
  const actualHost = server.address().address;
  const actualPort = server.address().port;

  console.log('%s@%s listening at http://%s:%s on Node', // eslint-disable-line no-console
    process.env.npm_package_name,
    process.env.npm_package_version,
    actualHost,
    actualPort,
    process.version
  );
});

export default server;
