const prompt = require("prompt-sync")();

var limit = parseInt(prompt("Enter a limit:"));
var sum = 0;

for (var i = 1; i <= limit; i += 2) {
  sum += i;
}
console.log("Sum of odd numbers = " + sum);
