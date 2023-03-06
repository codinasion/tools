import FormatStringToPathCase from '../index';

test('FormatStringToPathCase', () => {
  expect(FormatStringToPathCase('foo bar-baz_qux quux')).toBe('foo/bar/baz/qux/quux');
  expect(FormatStringToPathCase('foo bar-baz_qux_sdf-quux')).toBe('foo/bar/baz/qux/sdf/quux');
});
