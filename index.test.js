var moment = require('moment');
var imoment = require('./index.js');

test('instantiates imoment', () => {
  expect(imoment()).toBeDefined();
});

test('does not mutate #1', () => {
	var m = moment.unix(100);
	var im1 = imoment(m);
	im1.add(7, 'days');
  expect(im1.unix()).toBe(100);
});

test('does not mutate #2', () => {
	var m = moment.unix(100);
	var im1 = imoment(m);
	m.add(7, 'days');
  expect(im1.unix()).toBe(100);
});

test('does not mutate #3', () => {
	var m = moment.unix(100);
	var im1 = imoment(m);
	var im2 = im1.add(7, 'days');
  expect(im1.isSame(im2)).toBe(false);
});