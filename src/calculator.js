#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supports the following math operations:
 *   - Addition (+, add)
 *   - Subtraction (-, subtract)
 *   - Multiplication (*, multiply)
 *   - Division (/, divide)
 *   - Modulo (%, mod)
 *   - Exponentiation/power (^, pow)
 *   - Square root (sqrt) - unary operation
 *
 * Usage:
 *   node calculator.js <num1> <operation> [num2]
 *
 * Examples:
 *   node calculator.js 5 + 3
 *   node calculator.js 10 divide 2
 *   node calculator.js 10 mod 3
 *   node calculator.js 2 pow 8
 *   node calculator.js 16 sqrt
 */

/** Adds two numbers. */
function add(a, b) {
  return a + b;
}

/** Subtracts the second number from the first. */
function subtract(a, b) {
  return a - b;
}

/** Multiplies two numbers. */
function multiply(a, b) {
  return a * b;
}

/** Divides the first number by the second. Throws on division by zero. */
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

/** Returns the remainder of a divided by b. Throws on modulo by zero. */
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed.");
  }
  return a % b;
}

/** Returns base raised to the exponent power. */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/** Returns the square root of n. Throws for negative numbers. */
function squareRoot(n) {
  if (n < 0) {
    throw new Error("Cannot compute the square root of a negative number.");
  }
  return Math.sqrt(n);
}

// Operations that take two operands.
const binaryOperations = {
  "+": add,
  add: add,
  "-": subtract,
  subtract: subtract,
  "*": multiply,
  multiply: multiply,
  "/": divide,
  divide: divide,
  "%": modulo,
  mod: modulo,
  modulo: modulo,
  "^": power,
  pow: power,
  power: power,
};

// Operations that take a single operand.
const unaryOperations = {
  sqrt: squareRoot,
  squareRoot: squareRoot,
};

function printUsage() {
  console.log("Usage: node calculator.js <num1> <operation> [num2]");
  console.log(
    "Operations: + (add), - (subtract), * (multiply), / (divide), % (mod), ^ (pow), sqrt <num1>"
  );
}

function main() {
  const [num1Arg, operationArg, num2Arg] = process.argv.slice(2);

  if (num1Arg === undefined || operationArg === undefined) {
    printUsage();
    process.exit(1);
  }

  const num1 = Number(num1Arg);

  if (Number.isNaN(num1)) {
    console.error("Error: Operand must be a valid number.");
    process.exit(1);
  }

  const unaryFn = unaryOperations[operationArg];

  try {
    if (unaryFn) {
      const result = unaryFn(num1);
      console.log(result);
      return;
    }

    const binaryFn = binaryOperations[operationArg];

    if (!binaryFn) {
      console.error(`Error: Unsupported operation "${operationArg}".`);
      printUsage();
      process.exit(1);
    }

    if (num2Arg === undefined) {
      printUsage();
      process.exit(1);
    }

    const num2 = Number(num2Arg);

    if (Number.isNaN(num2)) {
      console.error("Error: Both operands must be valid numbers.");
      process.exit(1);
    }

    const result = binaryFn(num1, num2);
    console.log(result);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };
