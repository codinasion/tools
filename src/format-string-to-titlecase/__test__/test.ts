import FormatStringToTitleCase from '../index';

test('FormatStringToTitleCase', () => {
  expect(FormatStringToTitleCase('foo bar-baz_qux quux')).toBe('Foo Bar Baz Qux Quux');
  expect(FormatStringToTitleCase('foo bar-baz_qux_sdf-quux')).toBe('Foo Bar Baz Qux Sdf Quux');
});
