import express from 'express';

const routes = app => {
  const router = express.Router(); // eslint-disable-line new-cap

  router
    .get('/', get);

  app.use('/', router);
};

function get(req, res) { // eslint-disable-line no-unused-vars
  return res.send('OK');
}

export default routes;
