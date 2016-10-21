const uniqueCharacter = require('./unique-character');

it('should return true if all the characters in a string are unique', () => {
  expect(uniqueCharacter('abcd')).toBe(true);
});

it('should return false if not all the characters in a string are unique', () => {
  expect(uniqueCharacter('aacd')).toBe(false);
});
