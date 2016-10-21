const anagram = require('./anagram');

it('should return true if two words are an anagram', () => {
  expect(anagram('abc', 'cba')).toBe(true);
});

it('should return false if two words are an anagram', () => {
  expect(anagram('hello', 'heyoo')).toBe(false);
});

it('should ignore the white space in the anagram', () => {
  expect(anagram('potatoe', 'po tatoe')).toBe(true);
});

it('should ignore the numbers in the anagram', () => {
  expect(anagram('p8otatoe', 'potato8e')).toBe(true);
});
