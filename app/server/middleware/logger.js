import loggerMiddleware from 'morgan';
import config from '../../config';

const logger = app => {
  const {
    enabled, // Kill switch
    format, // 'tiny', 'dev', etc (A Morgan defined key or custom string)
    minimumHttpStatusCode // The minimum status code that should log
  } = config.express.log;

  const options = {
    skip: (req, res) => res.statusCode < minimumHttpStatusCode || !enabled
  };

  app.use(loggerMiddleware(format, options));
};

export default logger;
