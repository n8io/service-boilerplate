import fs from 'fs';
import cwd from 'cwd';

const projRoot = cwd();

const allRoutes = app => {
  const prioritizedRoutes = [
    'heartbeat'
  ];

  // Normalize to absolute paths
  const routes = prioritizedRoutes.map(rte => cwd(__dirname, rte));

  fs
    .readdirSync(__dirname)
    .filter(file => !file.match(/(index.js|\w+.spec.js)/, 'ig'))
    .forEach(file => {
      const filePath  = cwd(__dirname, file.split('.js').join(''));

      // If route isn't in the list already, lets add it to the list
      if (routes.indexOf(filePath) === -1) {
        routes.push(filePath);
      }
    })
    ;

  // Finally register the routes with the app
  routes.forEach(rte => require(rte).default(app));
};

export default allRoutes;
