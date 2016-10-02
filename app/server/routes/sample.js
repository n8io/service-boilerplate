import express from 'express';

const routes = app => {
  const router = express.Router(); // eslint-disable-line new-cap

  router
    .get('/', get);

  app.use('/sample', router);
};

function get(req, res, next) {
  next();
}

export default routes;
