import FormatStringToPascalCase from '../index';

test('FormatToPascalCase', () => {
  expect(FormatStringToPascalCase('foo-bar')).toBe('FooBar');
  expect(FormatStringToPascalCase('foo bar_baz-foo bar-baz')).toBe('FooBarBazFooBarBaz');
});
