/*eslint-disable*/
import test from 'ava';
import View from '../src/scripts/view.js';
import Loggly from '../src/scripts/loggly.js';

import nock from 'nock';
import request from 'request';

nock.disableNetConnect();

let body = {};
let objPostParams = {
	method: 'POST',
	uri: 'https://logs-01.loggly.com/inputs/',
	body: JSON.stringify(body),
	headers: {
		'user-agent': 'some-user-agent'
	}
};


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

test.cb('Loggly API endpoint returns 204 response with success', t => {
	let serverMock = nock('https://logs-01.loggly.com').post('/inputs/', {}).reply(204, 'Success');
	const req = request(objPostParams).on('response', function(response) {
		let actual = response.statusCode;
		const expected = 204;
   	t.is(actual, expected);
    t.end(); 
  });
});

test.cb('Loggly API endpoint returns 404 response with Bad Request', t => {
	let serverMock = nock('https://logs-01.loggly.com').post('/inputs/', {}).reply(404, 'Bad Request');
	const req = request(objPostParams).on('response', function(response) {
		let actual = response.statusCode;
		const expected = 404;
   	t.is(actual, expected);
    t.end();
  });
});
