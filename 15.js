const prompt = require("prompt-sync")();

function main() {
  var myArray = [];
  getArray(myArray);
  displayArray(myArray);
}

function getArray(arr) {
  var size = parseInt(prompt("Enter the size of the array:"));
  console.log("Enter the values of the array:");
  for (var i = 0; i < size; i++) {
    arr.push(parseInt(prompt()));
  }
}

function displayArray(arr) {
  console.log("Array values:");
  console.log(arr.join(", "));
}

main();
