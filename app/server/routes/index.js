import fs from 'fs';
import path from 'path';

const routes = app => {
  const prioritizedRoutes = [
    './heartbeat' // the relative path to the middleware
  ];

  // Normalize to absolute paths
  const routePaths = prioritizedRoutes.map(routePath => path.join(__dirname, routePath));

  fs
    .readdirSync(__dirname)
    .filter(file => !file.match(/(index.js|\w+.spec.js)/, 'ig'))
    .forEach(file => {
      const filePath  = path.join(__dirname, file.split('.js').join(''));

      // If route isn't in the list already, lets add it to the list
      if (routePaths.indexOf(filePath) === -1) {
        routePaths.push(filePath);
      }
    })
    ;

  // Finally register the routes with the app
  routePaths.forEach(routePath => require(routePath).default(app));
};

export default routes;
