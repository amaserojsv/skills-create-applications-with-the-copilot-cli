/**
 * Unit tests for the calculator functions (add, subtract, multiply, divide).
 *
 * Basic examples are derived from images/calc-basic-operations.png:
 *   2 + 3 = 5
 *   10 - 4 = 6
 *   45 * 2 = 90
 *   20 / 5 = 4
 */

const { add, subtract, multiply, divide, modulo, exponentiate, squareRoot } = require("../calculator");

describe("add", () => {
  test("adds two positive numbers (2 + 3 = 5)", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds a positive and a negative number", () => {
    expect(add(5, -3)).toBe(2);
  });

  test("adds two negative numbers", () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test("adds with zero", () => {
    expect(add(0, 7)).toBe(7);
  });

  test("adds decimal numbers", () => {
    expect(add(1.5, 2.25)).toBeCloseTo(3.75);
  });
});

describe("subtract", () => {
  test("subtracts two positive numbers (10 - 4 = 6)", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtracts resulting in a negative number", () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test("subtracts a negative number", () => {
    expect(subtract(5, -5)).toBe(10);
  });

  test("subtracts with zero", () => {
    expect(subtract(9, 0)).toBe(9);
  });

  test("subtracts decimal numbers", () => {
    expect(subtract(5.5, 1.2)).toBeCloseTo(4.3);
  });
});

describe("multiply", () => {
  test("multiplies two positive numbers (45 * 2 = 90)", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("multiplies by zero", () => {
    expect(multiply(8, 0)).toBe(0);
  });

  test("multiplies two negative numbers", () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test("multiplies a positive and a negative number", () => {
    expect(multiply(-3, 4)).toBe(-12);
  });

  test("multiplies decimal numbers", () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10);
  });
});

describe("divide", () => {
  test("divides two positive numbers (20 / 5 = 4)", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("divides resulting in a decimal", () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test("divides a negative number by a positive number", () => {
    expect(divide(-10, 5)).toBe(-2);
  });

  test("divides zero by a number", () => {
    expect(divide(0, 5)).toBe(0);
  });

  // Edge case: division by zero must throw an error.
  test("throws an error when dividing by zero", () => {
    expect(() => divide(20, 0)).toThrow("Division by zero is not allowed.");
  });
});

describe("modulo", () => {
  test("returns the remainder for positive numbers", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test("returns zero when evenly divisible", () => {
    expect(modulo(20, 5)).toBe(0);
  });

  test("throws an error when modulo by zero", () => {
    expect(() => modulo(10, 0)).toThrow("Modulo by zero is not allowed.");
  });
});

describe("exponentiate", () => {
  test("raises a number to a positive integer power", () => {
    expect(exponentiate(2, 4)).toBe(16);
  });

  test("raises a number to a fractional power", () => {
    expect(exponentiate(9, 0.5)).toBeCloseTo(3);
  });
});

describe("squareRoot", () => {
  test("returns the square root of a positive number", () => {
    expect(squareRoot(25)).toBe(5);
  });

  test("returns the square root of zero", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("throws an error for a negative number", () => {
    expect(() => squareRoot(-4)).toThrow("Square root of a negative number is not allowed.");
  });
});
