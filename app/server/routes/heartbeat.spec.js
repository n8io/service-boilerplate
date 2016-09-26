import test from 'ava';
import request from 'supertest-as-promised';
import app from '../../server';

test.cb('GET should return a 200', t => {
  request(app)
    .get('/heartbeat')
    .expect(200)
    .then(res => t.end())
    ;
});

test.cb('GET should return a json body with OK message prop', t => {
  request(app)
    .get('/heartbeat')
    .expect('Content-Type', /json/)
    .then(res => {
      t.is(res.body.message, 'OK');
      t.end();
    })
    ;
});
