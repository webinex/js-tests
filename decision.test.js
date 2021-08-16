/**
 * WHEN args null
 * THEN throw error with string 'args could not be null'
 *
 * WHEN x or y isn't numbers
 * THEN throw error with string 'invalid types'
 *
 * WHEN operation not string
 * THEN throw error with string 'invalid types'
 *
 * WHEN operation = 'sum'
 * THEN return x + y
 *
 * WHEN operation = 'subtract'
 * THEN return x - y
 *
 * WHEN operation = 'pow'
 * THEN return x^y
 *
 * WHEN operation unknown
 * THEN throw error with string 'unknown operation'
 */
const process = (args) => {
  const { x, y, operation } = args;

  // TODO: write your code here...
};

const VALID_INPUT = {
  x: 1,
  y: 1,
  operation: "sum",
};

describe("decision", () => {
  describe("args", () => {
    it("should throw when args null", () => {
      expect(() => process(null)).toThrowError("args could not be null");
    });

    it.each(["x", {}, null, undefined])(
      "should throw when x isn't number",
      (x) => {
        expect(() => process({ ...VALID_INPUT, x })).toThrowError(
          "invalid types"
        );
      }
    );

    it.each(["x", {}, null, undefined])(
      "should throw when y isn't number",
      (y) => {
        expect(() => process({ ...VALID_INPUT, y })).toThrowError(
          "invalid types"
        );
      }
    );

    it.each([1, {}, null, undefined])(
      "should throw when operation isn't string",
      (operation) => {
        expect(() => process({ ...VALID_INPUT, operation })).toThrowError(
          "invalid types"
        );
      }
    );

    it.each(["x", null, "y"])(
      "should throw when operation unknown",
      (operation) => {
        expect(() => process({ ...VALID_INPUT, operation })).toThrowError(
          "unknown operation"
        );
      }
    );
  });

  it("should return sum when operation sum", () => {
    const args = { x: 10, y: 11, operation: "sum" };
    const result = process(args);
    expect(result).toBe(21);
  });

  it("should return subtraction when operation subtract", () => {
    const args = { x: 10, y: 11, operation: "subtract" };
    const result = process(args);
    expect(result).toBe(-1);
  });

  it("should return pow when operation pow", () => {
    const args = { x: 3, y: 4, operation: "pow" };
    const result = process(args);
    expect(result).toBe(81);
  });
});
