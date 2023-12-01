const prompt = require("prompt-sync")();
var inputString = prompt("Enter a string:");

if (inputString === inputString.split("").reverse().join("")) {
  console.log("Entered string is a palindrome");
} else {
  console.log("Entered string is not a palindrome");
}
