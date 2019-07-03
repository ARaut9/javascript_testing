const calc = require('./calculator');

test('adds 3 + 2 to equal 5', () => {
    expect(calc.add(3, 2)).toBe(5);
});

test('subtracts 5 - 3 to equal 2', () => {
    expect(calc.subtract(5, 3)).toBe(2);
});

test('divids 16 / 2 to equal 8', () => {
    expect(calc.divide(16, 2)).toBe(8);
});

test('multiplies 4 * 5 to equal 20', () => {
    expect(calc.multiply(4, 5)).toBe(20);
});