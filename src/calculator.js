#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supports the four basic math operations:
 *   - Addition (+, add)
 *   - Subtraction (-, subtract)
 *   - Multiplication (*, multiply)
 *   - Division (/, divide)
 *
 * Usage:
 *   node calculator.js <num1> <operation> <num2>
 *
 * Examples:
 *   node calculator.js 5 + 3
 *   node calculator.js 10 divide 2
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

// Maps supported operation symbols/aliases to their functions.
const operations = {
  "+": add,
  add: add,
  "-": subtract,
  subtract: subtract,
  "*": multiply,
  multiply: multiply,
  "/": divide,
  divide: divide,
};

function printUsage() {
  console.log("Usage: node calculator.js <num1> <operation> <num2>");
  console.log("Operations: + (add), - (subtract), * (multiply), / (divide)");
}

function main() {
  const [num1Arg, operationArg, num2Arg] = process.argv.slice(2);

  if (num1Arg === undefined || operationArg === undefined || num2Arg === undefined) {
    printUsage();
    process.exit(1);
  }

  const num1 = Number(num1Arg);
  const num2 = Number(num2Arg);

  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    console.error("Error: Both operands must be valid numbers.");
    process.exit(1);
  }

  const operationFn = operations[operationArg];

  if (!operationFn) {
    console.error(`Error: Unsupported operation "${operationArg}".`);
    printUsage();
    process.exit(1);
  }

  try {
    const result = operationFn(num1, num2);
    console.log(result);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide };
