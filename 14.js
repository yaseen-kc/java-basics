const prompt = require("prompt-sync")();

var size = parseInt(prompt("Enter the size of arrays:"));

var array1 = [];
var array2 = [];

console.log("Enter the values of array 1:");
for (var i = 0; i < size; i++) {
  array1.push([]);
  for (var j = 0; j < size; j++) {
    array1[i][j] = parseInt(prompt());
  }
}

console.log("Enter the values of array 2:");
for (var i = 0; i < size; i++) {
  array2.push([]);
  for (var j = 0; j < size; j++) {
    array2[i][j] = parseInt(prompt());
  }
}

var sumArray = [];

for (var i = 0; i < size; i++) {
  var row = [];
  for (var j = 0; j < size; j++) {
    row.push(array1[i][j] + array2[i][j]);
  }
  sumArray.push(row);
}

console.log("Sum of 2 arrays is:");
for (var i = 0; i < size; i++) {
  console.log(sumArray[i].join(" "));
}
