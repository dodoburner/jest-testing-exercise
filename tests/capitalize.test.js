const capitalize = require('../functions/capitalize')


test('return capitalized string', () => {
  expect(capitalize('word')).toBe('Word')
  expect(capitalize(2)).toBe('Not a string')
})