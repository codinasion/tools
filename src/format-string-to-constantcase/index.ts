export default function FormatStringToConstantCase(str: string): string {
  return str
    .split(/[-_ ]+/)
    .map((word) => word.toUpperCase())
    .join('_');
}
