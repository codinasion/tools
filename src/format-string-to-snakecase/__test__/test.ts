import FormatStringToSnakecase from '../index';

test('FormatStringToSnakecase', () => {
  expect(FormatStringToSnakecase('foo bar-baz_qux quux')).toBe('foo_bar_baz_qux_quux');
  expect(FormatStringToSnakecase('foo bar-baz_qux_sdf-quux')).toBe('foo_bar_baz_qux_sdf_quux');
});
