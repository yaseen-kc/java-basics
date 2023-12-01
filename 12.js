const prompt = require("prompt-sync")();
var size = parseInt(prompt("Size of an array:"));

var numbers = [];

console.log("Enter the values of array:");
for (var i = 0; i < size; i++) {
  numbers.push(parseInt(prompt()));
}

// numbers.sort(function (a, b) {
//     return b - a;
//   });

for (var i = 0; i < size - 1; i++) {
  for (var j = i + 1; j < size; j++) {
    if (numbers[i] < numbers[j]) {
      var temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
    }
  }
}

console.log("Sorted array:");
console.log(numbers.join(", "));
