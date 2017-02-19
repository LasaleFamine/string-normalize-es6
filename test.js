import test from 'ava';
import fn from './src';

test('`null` if not a string', t => {
	const res = fn(123);
	t.is(res, null);
});

test('correctly normalize string', t => {
	const res = fn('Crème Brulée');
	t.is(res, 'Creme Brulee');
});
