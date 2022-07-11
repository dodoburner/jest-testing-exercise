const reverseString = require('./reverseString')

test('successfully reversed', () => {
  expect(reverseString('cat')).toBe('tac')
})