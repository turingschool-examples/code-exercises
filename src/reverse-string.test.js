const reverseString = require('./reverse-string');

it('should reverse a string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('abc')).toBe('cba');
});
