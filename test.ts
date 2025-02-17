// test.ts (CommonJS version)
const test = require('node:test');
const assert = require('node:assert');
const { FibRecursive, FibIterative } = require('./index');


test('FibRecursive returns correct sequence for 5', () => {
    const expected = [0, 1, 1, 2, 3];
    const result = FibRecursive(5);
    assert.deepStrictEqual(result, expected);
  });
  
  test('FibRecursive returns an empty array when input is 0', () => {
    const result = FibRecursive(0);
    assert.deepStrictEqual(result, []);
  });
  
  test('fibrecursive returns an array of length 1 when input is 1 with a output of 0', () => {
    const result = FibRecursive(1);
    assert.deepStrictEqual(result, [0]);
  });
  
  test('fibiterative returns the correct Fibonacci number for 5', () => {
    const expected = 3;
    const result = FibIterative(5);
    assert.strictEqual(result, expected);
  });
  
  test('fibiterative returns 0 when input is 1', () => {
    const result = FibIterative(1);
    assert.strictEqual(result, 0);
  });
