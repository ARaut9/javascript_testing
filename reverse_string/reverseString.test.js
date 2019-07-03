const reverseString = require('./reverseString');

test('reverses a string', () => {
    expect(reverseString('bat')).toBe('tab');
});