import test from 'ava';
import request from 'supertest-as-promised';
import app from '../../server';

test('GET should return a 404', t => {
  return request(app)
    .get('/sample')
    .expect(404)
    ;
});
