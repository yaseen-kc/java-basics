const prompt = require("prompt-sync")();

var number1 = parseInt(prompt("Enter an integer:"));

var number2 = parseFloat(prompt("Enter a float:"));

var sum = number1 + number2;

console.log("The sum is: " + sum);
