import fs from 'fs';
import path from 'path';

const middleware = app => {
  const prioritizedMiddleware = [
    // the relative path to the middleware, E.g. ./my-customer-mw
  ];

  // Normalize to absolute paths
  const routes = prioritizedMiddleware.map(mw => path.join(__dirname, mw));

  fs
    .readdirSync(__dirname)
    .filter(file => !file.match(/(index.js|\w+.spec.js)/, 'ig'))
    .forEach(file => {
      const filePath = path.join(__dirname, file.split('.js').join(''));

      // If middleware isn't in the list already, lets add it to the list
      if (routes.indexOf(filePath) === -1) {
        routes.push(filePath);
      }
    });

  // Finally register the routes with the app
  routes.forEach(mw => require(mw).default(app));
};

export default middleware;
