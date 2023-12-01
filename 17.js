const prompt = require("prompt-sync")();

class Calculator {
  addition(a, b) {
    return a + b;
  }

  subtraction(a, b) {
    return a - b;
  }

  multiplication(a, b) {
    return a * b;
  }

  division(a, b) {
    if (b !== 0) {
      return a / b;
    } else {
      return "Cannot divide by zero";
    }
  }
}

function main() {
  var calculator = new Calculator();

  console.log("Select an operation:");
  console.log("1. Addition");
  console.log("2. Subtraction");
  console.log("3. Multiplication");
  console.log("4. Division");

  var choice = parseInt(prompt("Enter your choice (1-4):"));

  var num1 = parseFloat(prompt("Enter the first number:"));
  var num2 = parseFloat(prompt("Enter the second number:"));

  if (choice === 1) {
    console.log("Result: " + calculator.addition(num1, num2));
  } else if (choice === 2) {
    console.log("Result: " + calculator.subtraction(num1, num2));
  } else if (choice === 3) {
    console.log("Result: " + calculator.multiplication(num1, num2));
  } else if (choice === 4) {
    console.log("Result: " + calculator.division(num1, num2));
  } else {
    console.log("Invalid choice. Please enter a number between 1 and 4.");
  }
}

main();
