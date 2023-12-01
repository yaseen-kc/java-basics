const prompt = require("prompt-sync")();

var userInput = parseInt(prompt("Enter a number:"));

console.log("Multiplication Table for " + userInput + ":");
for (var i = 1; i <= 10; i++) {
  console.log(i + " x " + userInput + " = " + i * userInput);
}
