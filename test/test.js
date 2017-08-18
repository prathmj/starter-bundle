import test from 'ava';
import View from '../src/scripts/view.js';

test('fnRandomImage is expected', t => {
	const view = new View();
	const actual = view.fnRandomImage(0,1,0);
	const expected = 0;

	t.is(actual, expected);
});