import FormatStringToDotcase from '../index';

test('FormatStringToDotcase', () => {
  expect(FormatStringToDotcase('foo-bar')).toBe('foo.bar');
  expect(FormatStringToDotcase('foo bar_baz-foo bar-baz')).toBe('foo.bar.baz.foo.bar.baz');
});
