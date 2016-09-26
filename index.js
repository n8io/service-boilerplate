/* eslint-disable no-process-env */
import app from './app/server';

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
