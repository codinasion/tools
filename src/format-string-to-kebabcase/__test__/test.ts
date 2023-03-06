import FormatStringToKebabCase from '../index';

test('FormatStringToKebabCase', () => {
  expect(FormatStringToKebabCase('foo-bar')).toBe('foo-bar');
  expect(FormatStringToKebabCase('foo bar_baz-foo bar-baz')).toBe('foo-bar-baz-foo-bar-baz');
});
