const stringLength = require('../functions/stringLength')

test('cat has 3 charachters', () => {
  expect(stringLength('cat')).toBe(3)
})

test('string length is >= 1 and <= 10', () => {
  expect(stringLength('somewordsome')).toBeGreaterThan(0);
  expect(stringLength('cat')).toBeLessThan(11);
})