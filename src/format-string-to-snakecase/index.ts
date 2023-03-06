export default function FormatStringToSnakeCase(str: string): string {
  return str
    .split(/[-_ ]/)
    .map((word) => {
      return word.toLowerCase();
    })
    .join('_');
}
