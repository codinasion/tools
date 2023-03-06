import FormatStringToCamelCase from '../index';

test('FormatStringToCamelCase', () => {
  expect(FormatStringToCamelCase('foo-bar')).toBe('fooBar');
  expect(FormatStringToCamelCase('foo bar_baz-foo bar-baz')).toBe('fooBarBazFooBarBaz');
});
