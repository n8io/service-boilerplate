/* eslint-disable no-process-env */
import express from 'express';
import dotenv from 'dotenv-safe';
import cwd from 'cwd';

import middleware from './middleware';
import routes from './routes';

const app = express();

// Load config
dotenv.load({
  path: cwd(__dirname, '../../..', '.env'),
  sample: cwd(__dirname, '../../..', '.env.example'),
  silent: true
});

// Bind middleware
middleware(app);

// Bind route handlers
routes(app);

export default app;
