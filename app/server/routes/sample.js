import express from 'express';

const routes = app => {
  const router = express.Router();

  router
    .get('/', get)
    ;

  app.use('/sample', router);
};

function get(req, res, next) {
  next();
}

export default routes;
