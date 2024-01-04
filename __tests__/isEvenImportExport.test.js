// __tests__/isEvenImportExport.test.js
import { isEven } from '../dist/isEven';

describe('isEven function (using import/export)', () => {
  test('should return true for even numbers', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(4)).toBe(true);
  });

  test('should return false for odd numbers', () => {
    expect(isEven(1)).toBe(false);
    expect(isEven(3)).toBe(false);
  });
});
