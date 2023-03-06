export default function FormatStringToPathCase(input: string): string {
  return input
    .split(/[-_ ]/)
    .map((word) => {
      return word.toLowerCase();
    })
    .join('/');
}
