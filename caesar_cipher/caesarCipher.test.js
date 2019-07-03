const caesar = require('./caesarCipher');

test('converts a single word', () => {
    expect(caesar('hello')).toBe('khoor');
});

test('converts a sentence', () => {
    expect(caesar('hello world')).toBe('khoor zruog');
});

test('converts a sentence with punctuation', () => {
    expect(caesar('hello, world')).toBe('khoor, zruog');
});