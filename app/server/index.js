/* eslint-disable no-process-env */
import path from 'path';
import express from 'express';
import dotenv from 'dotenv-safe';

import middleware from './middleware';
import routes from './routes';

const app = express();

// Load config
dotenv.load({
  path: path.join(__dirname, '../../.env'),
  sample: path.join(__dirname, '../../.env.example'),
  silent: true
});

// Bind middleware
middleware(app);

// Bind route handlers
routes(app);

export default app;