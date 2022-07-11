const capitalize = require('../functions/capitalize')


test('return capitalized string', () => {
  expect(capitalize('word')).toBe('Word')
})