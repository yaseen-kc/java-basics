const prompt = require("prompt-sync")();

var size = parseInt(prompt("Enter the size of arrays:"));

var array1 = [];
var array2 = [];

console.log("Enter the values of Array 1:");
for (var i = 0; i < size; i++) {
  array1.push(parseInt(prompt()));
}

console.log("Enter the values of Array 2:");
for (var i = 0; i < size; i++) {
  array2.push(parseInt(prompt()));
}

for (var i = 0; i < size; i++) {
  var temp = array1[i];
  array1[i] = array2[i];
  array2[i] = temp;
}

console.log("Arrays after swapping:");
console.log("Array1: " + array1.join(", "));
console.log("Array2: " + array2.join(", "));
