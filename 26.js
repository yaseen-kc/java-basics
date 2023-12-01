const prompt = require("prompt-sync")();
var userInput = prompt("Enter a string or a number:");

try {
  var my_string = String(userInput);
  var reversedString = my_string.split("").reverse().join("");

  console.log(`Reversed string is : ${reversedString}`);
} catch (err) {
  console.log(`Error : ${err.message}`);
} finally {
  console.log(`Type of my_string is : ${typeof my_string}`);
}
