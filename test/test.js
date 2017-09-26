import test from 'ava';
import View from '../src/scripts/view.js';
import Loggly from '../src/scripts/loggly.js';

test('fnRandomImage is expected', t => {
	const actual = View.prototype.fnRandomImage(0,1,0);
	const expected = 0;

	t.is(actual, expected);
});

const loggly = new Loggly();
test('Loggly custom params are set', t => {
	loggly.log({my: 'object'});
	const actual = loggly.params
	const expected = {my: 'object'};
	t.deepEqual(actual, expected);
})

test('Loggly lifecycle params are set for render', t => {
	loggly.log('render');
	const actual = loggly.params
	const expected = {
    device_id: 'unknown',
    lifecycles_without_reset: 0,
    method: 'render',
    lifecycle_id: loggly.params.lifecycle_id
  };

	t.deepEqual(actual, expected);
})

test('Loggly lifecycle params are set for updateView', t => {
	loggly.log('updateView');
	const actual = loggly.params
	const expected = {
    device_id: 'unknown',
    lifecycles_without_reset: 1,
    method: 'updateView',
    lifecycle_id: loggly.params.lifecycle_id
  };

	t.deepEqual(actual, expected);
})

test('Loggly sets device ID', t => {
	loggly.setDevice('MN-12-345567-R')
	const actual = loggly.device_id
	const expected = 'MN-12-345567-R'
	t.is(actual, expected)
})

test('Loggly throws syntax error', t => {
		const error = loggly.log('notALifecycleMethod');
		t.is(error.message, "Loggly.log only accepts a custom object, 'setData', 'render', or 'updateView'")
	})