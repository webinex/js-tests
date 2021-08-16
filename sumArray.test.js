/**
 * WHEN numbers null
 * THEN throw 'numbers might not be null'
 *
 * WHEN numbers empty
 * THEN return 0
 *
 * WHEN numbers contains not numbers
 * THEN throw 'invalid types'
 *
 * WHEN valid
 * THEN return sum of numbers
 */
const sum = (numbers) => {
  // TODO: write your code here...
};

describe("sumArray", () => {
  it.each([undefined, null])("should throw when numbers null")((args) => {
    expect(() => sum(args)).toThrowError("numbers might not be null");
  });

  it.each([
    [2, ""],
    [2, null],
    [2, undefined],
    [2, NaN],
    [2, {}],
  ])("should throw when numbers contains not a number")((args) => {
    expect(() => sum(args)).toThrowError("invalid types");
  });

  it("should return 0 when numbers empty", () => {
    expect(sum([])).toBe(0);
  });

  it.each([
    { args: [1, 2, 3], expected: 6 },
    { args: [3, 2, 3], expected: 8 },
    { args: [11, 21, 31], expected: 63 },
  ])("should return 0 when numbers empty", ({ args, expected }) => {
    expect(sum(args)).toBe(expected);
  });
});
