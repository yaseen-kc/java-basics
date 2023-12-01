const prompt = require("prompt-sync")();
var size = parseInt(prompt("Enter the size of an array:"));


  var numbers = [];

  console.log("Enter the values of array:");
  for (var i = 0; i < size; i++) {
    numbers.push(parseInt(prompt()));
  }

  var evenCount = 0;

  for (var i = 0; i < size; i++) {
    if (numbers[i] % 2 === 0) {
      evenCount++;
    }
  }

  console.log("Even numbers in array: " + evenCount);

