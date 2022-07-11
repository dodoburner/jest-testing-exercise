const stringLength = require('./stringLength')

test('cat has 3 charachters', () => {
  expect(stringLength('cat')).toBe(3)
})

test('string length is >= 1 and <= 10', () => {
  expect(stringLength('cat')).toBeGreaterThan(0);
  expect(stringLength('cat')).toBeLessThan(11);
})