const reverseString = require('../functions/reverseString')

test('successfully reversed', () => {
  expect(reverseString('cat')).toBe('tac')
})