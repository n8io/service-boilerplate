import express from 'express';

import controller from '../controllers/root';

const routes = app => {
  const router = express.Router(); // eslint-disable-line new-cap

  router
    .get('/', get);

  app.use('/', router);
};

function get(req, res) {
  const data = controller.get();

  return res.send(data);
}

export default routes;
