import SumOfNumbers from '../index';

describe('SumOfNumbers', () => {
  it('should return sum of numbers', () => {
    expect(SumOfNumbers([1, 2, 3])).toBe(6);
    expect(SumOfNumbers([1, 2, 3, 4, 5])).toBe(15);
  });
});
