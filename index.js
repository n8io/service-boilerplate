/* eslint-disable no-process-env */
import app from './app/server';
import config from './app/config';

const {
  name: appName,
  version: appVersion,
  host,
  port
} = config.app;

const server = app.listen(port, host, () => {
  const actualHost = server.address().address;
  const actualPort = server.address().port;

  console.log('%s@%s listening at http://%s:%s on Node', // eslint-disable-line no-console
    appName,
    appVersion,
    actualHost,
    actualPort,
    config.node.version
  );
});
