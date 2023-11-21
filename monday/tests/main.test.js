const { describe } = require('node:test');
const main = require('../src/main.js');

describe('my first suite', () => { 
  test('this is my first test', () => {
    expect(main.sum(2,3)).toBe(4);
    expect(main.sum(1,1)).toBe(2);
    expect(main.sum(1,1)).not.toBe(3);
  });
});
  