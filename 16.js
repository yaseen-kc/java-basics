const prompt = require("prompt-sync")();

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

var userInput = parseInt(prompt("Enter a number:"));

if (isPrime(userInput)) {
  console.log("Entered number is a Prime number");
} else {
  console.log("Entered number is not a Prime number");
}
