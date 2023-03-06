import FormatStringToConstantCase from '../index';

test('FormatStringToConstantCase', () => {
  expect(FormatStringToConstantCase('foo-bar')).toBe('FOO_BAR');
  expect(FormatStringToConstantCase('foo bar_baz-foo bar-baz')).toBe('FOO_BAR_BAZ_FOO_BAR_BAZ');
});
