const assert = require('chai').assert;
const expect = require('chai').expect;

const app = require('../src/app');

describe('App', function () {
  describe('sayHello()', function () {
    it('app should return hello', function () {
      let result = app.sayHello();
      assert.equal(result, 'hello');
    });

    it('app should return type string', function () {
      let result = app.sayHello();
      assert.typeOf(result, 'string');
    });
  });

  describe('addNumbers()', function () {
    it('addNumbers should be above 5', function () {
      let result = app.addNumbers(1, 5);
      assert.isAbove(result, 5);
    });

    it('addNumbers should return type number', function () {
      let result = app.addNumbers(1, 5);
      assert.typeOf(result, 'number');
    });
  });

  describe('divide()', function () {
    it('divide should return NaN if numbers in string form', function () {
      let result = app.divide('4a', '1a');
      assert.isNaN(result);
    });

    it('divide should return Infinity if the denominator is 0', function () {
      let result = app.divide(4, 0);
      assert.isFalse(isFinite(result));
    });

    it('divide should return type number', function () {
      let result = app.divide(4, 2);
      assert.typeOf(result, 'number');
    });

    it('divide should return correct -4 divide 2', function () {
      let result = app.divide(-4, 2);
      assert.equal(result, -2);
    });

    it('divide should return positive number if input have one positive number', function () {
      let result = app.divide(-4, 2);
      assert.isBelow(result, 0);
    });
  });
});
