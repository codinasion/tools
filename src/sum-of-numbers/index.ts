export default function SumOfNumbers(numbers: number[]): number {
  return numbers.reduce((a, b) => a + b, 0);
}
