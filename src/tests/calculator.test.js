/**
 * Unit tests for the calculator functions (add, subtract, multiply, divide,
 * modulo, power, squareRoot).
 *
 * Basic examples are derived from images/calc-basic-operations.png:
 *   2 + 3 = 5
 *   10 - 4 = 6
 *   45 * 2 = 90
 *   20 / 5 = 4
 *
 * Extended examples are derived from images/calc-extended-operations.png:
 *   5 % 2 = 1
 *   2 ^ 3 = 8
 *   √16 = 4
 */

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require("../calculator");

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
  test("returns the remainder of two positive numbers (5 % 2 = 1)", () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test("returns 0 when evenly divisible", () => {
    expect(modulo(10, 5)).toBe(0);
  });

  test("handles a negative dividend", () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test("handles a negative divisor", () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test("handles decimal numbers", () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  // Edge case: modulo by zero must throw an error.
  test("throws an error when modulo by zero", () => {
    expect(() => modulo(5, 0)).toThrow("Modulo by zero is not allowed.");
  });
});

describe("power", () => {
  test("raises a number to a positive exponent (2 ^ 3 = 8)", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("raises a number to the power of zero", () => {
    expect(power(5, 0)).toBe(1);
  });

  test("raises a number to a negative exponent", () => {
    expect(power(2, -2)).toBeCloseTo(0.25);
  });

  test("raises a negative number to an even exponent", () => {
    expect(power(-2, 2)).toBe(4);
  });

  test("raises a negative number to an odd exponent", () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test("handles decimal bases", () => {
    expect(power(1.5, 2)).toBeCloseTo(2.25);
  });
});

describe("squareRoot", () => {
  test("computes the square root of a perfect square (√16 = 4)", () => {
    expect(squareRoot(16)).toBe(4);
  });

  test("computes the square root of zero", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("computes the square root of a non-perfect square", () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142);
  });

  test("computes the square root of a decimal number", () => {
    expect(squareRoot(6.25)).toBeCloseTo(2.5);
  });

  // Edge case: square root of a negative number must throw an error.
  test("throws an error for negative numbers", () => {
    expect(() => squareRoot(-4)).toThrow(
      "Cannot compute the square root of a negative number."
    );
  });
});
