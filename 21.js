const prompt = require("prompt-sync")();

var limit = parseInt(prompt("Enter the array limit:"));

var originalArray = [];
var resultArray = [];

console.log("Enter the values of array:");
for (var i = 0; i < limit; i++) {
  originalArray.push(parseInt(prompt()));
}

for (var i = 0; i < limit - 1; i++) {
  resultArray.push(originalArray[i] * originalArray[i + 1]);
}

console.log("Output:");
console.log(resultArray.join(" "));
