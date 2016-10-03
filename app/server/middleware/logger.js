/* eslint-disable no-process-env */
import loggerMiddleware from 'morgan';

const logger = app => {
  const isEnabled = ['false', '0'].indexOf(process.env.EXPRESS_LOG_ENABLE || 'false') === -1;
  const logFormat = process.env.EXPRESS_LOG_FORMAT || 'tiny';
  const options = {
    skip: (req, res) => res.statusCode < 400 || !isEnabled
  };

  app.use(loggerMiddleware(logFormat, options));
};

export default logger;
