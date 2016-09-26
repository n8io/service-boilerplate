import express from 'express';
import cwd from 'cwd';

import controller from '../controllers/heartbeat';

const routes = app => {
  const router = express.Router();

  router
    .get('/', get)
    ;

  app.use('/heartbeat', router);
};

function get(req, res) {
  const data = controller.get();

  return res.json(data);
}

export default routes;
