const stringLength = require('./stringLength')

test('cat has 3 charachters', () => {
  expect(stringLength('cat')).toBe(3)
})