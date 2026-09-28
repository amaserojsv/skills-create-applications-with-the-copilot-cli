#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supports the four basic math operations:
 *   - Addition (+, add)
 *   - Subtraction (-, subtract)
 *   - Multiplication (*, multiply)
 *   - Division (/, divide)
 *   - Modulo (%, mod, modulo)
 *   - Exponentiation (^, **, pow, power)
 *   - Square root (sqrt, √)
 *
 * Usage:
 *   Binary operations: node calculator.js <num1> <operation> <num2>
 *   Square root:       node calculator.js <operation> <num>
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

/** Returns the remainder of division. Throws on modulo by zero. */
function modulo(a, b) {
  if (b === 0) {
    throw new Error("Modulo by zero is not allowed.");
  }
  return a % b;
}

/** Raises the first number to the power of the second. */
function exponentiate(a, b) {
  return a ** b;
}

/** Returns the square root of a number. Throws on negative input. */
function squareRoot(a) {
  if (a < 0) {
    throw new Error("Square root of a negative number is not allowed.");
  }
  return Math.sqrt(a);
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
  "%": modulo,
  mod: modulo,
  modulo: modulo,
  "^": exponentiate,
  "**": exponentiate,
  pow: exponentiate,
  power: exponentiate,
  sqrt: squareRoot,
  "√": squareRoot,
};

function printUsage() {
  console.log("Usage:");
  console.log("  Binary: node calculator.js <num1> <operation> <num2>");
  console.log("  Unary:  node calculator.js <operation> <num>");
  console.log(
    "Operations: + (add), - (subtract), * (multiply), / (divide), % (mod, modulo), ^/** (pow, power), sqrt (√)"
  );
}

function main() {
  const args = process.argv.slice(2);
  const unaryOperations = new Set(["sqrt", "√"]);

  if (args.length === 2 && unaryOperations.has(args[0])) {
    const [operationArg, numArg] = args;
    const num = Number(numArg);

    if (Number.isNaN(num)) {
      console.error("Error: Operand must be a valid number.");
      process.exit(1);
    }

    try {
      const result = operations[operationArg](num);
      console.log(result);
      return;
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  }

  const [num1Arg, operationArg, num2Arg] = args;

  if (num1Arg === undefined || operationArg === undefined || num2Arg === undefined) {
    printUsage();
    process.exit(1);
  }

  if (unaryOperations.has(operationArg)) {
    console.error(`Error: Operation "${operationArg}" expects one operand.`);
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

module.exports = { add, subtract, multiply, divide, modulo, exponentiate, squareRoot };
