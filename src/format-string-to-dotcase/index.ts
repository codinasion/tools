export default function FormatStringToDotCase(str: string): string {
  return str.split(/[-_ ]/).join('.');
}
