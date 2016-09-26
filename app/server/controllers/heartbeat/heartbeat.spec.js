import test from 'ava';
import controller from '../heartbeat';

test('get() should return a 200', t => {
  t.deepEqual(controller.get(), {message: 'OK'});
});
