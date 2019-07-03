const capitalize = require('./capitalize');

test('capitalizes a completely lowercase string', () => {
    expect(capitalize('apple')).toBe('Apple');
});

test('capitalizes a completely uppercase string', () => {
    expect(capitalize('DOG')).toBe('Dog');
});

test('capitalizes a string with some lowercase and some uppercase characters', () => {
    expect(capitalize('baTTlE')).toBe('Battle');
});