import test from 'ava';
import View from '../src/scripts/view.js';
import Loggly from '../src/scripts/loggly.js';

test('fnRandomImage is expected', t => {
	const actual = View.prototype.fnRandomImage(0,1,0);
	const expected = 0;

	t.is(actual, expected);
});

test('Loggly logs correctly', t => {
	const actual = Loggly.prototype.log('something wrong');
	const expected = SyntaxError("Loggly.log only accepts a custom object, 'setData', 'render', or 'updateView'");
	t.is(actual, expected);
})