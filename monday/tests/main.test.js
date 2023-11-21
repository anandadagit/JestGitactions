const { describe } = require('node:test');
const main = require('../src/main.js');

describe('my first suite', () => { 
  test('this is my first test', () => {
    expect(main.sum(2,3)).toBe(4);
    expect(main.sum(1,1)).toBe(2);
    expect(main.sum(1,1)).not.toBe(3);
  });
});

describe('my second suite', () => { 
  test('this is my second test', () => {
    expect(main.subtract(10,5)).toBe(5);
    expect(main.subtract(100,50)).toBe(50);
    expect(main.subtract(15,5)).not.toBe(15);
  });
});
  