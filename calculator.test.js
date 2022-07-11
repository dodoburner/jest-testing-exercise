const calculator = require('./calculator')

describe('adding', () => {
  test('2 + 2 is 4', () => {
    expect(calculator.add(2, 2)).toBe(4)
  });

  test('8 + 22 is 30', () => {
    expect(calculator.add(8, 22)).toBe(30)
  });

  test('90 + 180 is 270', () => {
    expect(calculator.add(90, 180)).toBe(270)
  });
})

describe('subtracting', () => {
  test('2 - 2 is 0', () => {
    expect(calculator.subtract(2, 2)).toBe(0)
  });

  test('20 - 4 is 16', () => {
    expect(calculator.subtract(20, 4)).toBe(16)
  });

  test('90 - 18 is 72', () => {
    expect(calculator.subtract(90, 18)).toBe(72)
  });
})

describe('multiplying', () => {
  test('2 * 3 is 6', () => {
    expect(calculator.multiply(2, 3)).toBe(6)
  });

  test('20 * 4 is 80', () => {
    expect(calculator.multiply(20, 4)).toBe(80)
  });

  test('90 * 10 is 900', () => {
    expect(calculator.multiply(90, 10)).toBe(900)
  });
})

describe('dividing', () => {
  test('6 / 2 is 3', () => {
    expect(calculator.divide(6, 2)).toBe(3)
  });

  test('20 * 4 is 5', () => {
    expect(calculator.divide(20, 4)).toBe(5)
  });

  test('90 / 10 is 9', () => {
    expect(calculator.divide(90, 10)).toBe(9)
  });
})