export default function FormatStringToKebabCase(str: string): string {
  return str.split(/[-_ ]/).join('-');
}
