const prompt = require("prompt-sync")();

function getArray(size) {
  var array = [];

  console.log("Enter the values of array:");
  for (var i = 0; i < size; i++) {
    array.push([]);
    for (var j = 0; j < size; j++) {
      array[i][j] = parseInt(prompt());
    }
  }

  return array;
}

function addArray(array1, array2, size) {
  var sumArray = [];

  for (var i = 0; i < size; i++) {
    sumArray.push([]);
    for (var j = 0; j < size; j++) {
      sumArray[i][j] = array1[i][j] + array2[i][j];
    }
  }

  return sumArray;
}

function displayArray(array, size) {
  console.log("Sum of array 1 and array 2:");
  for (var i = 0; i < size; i++) {
    console.log(array[i].join(" "));
  }
}

function main() {
  var size = parseInt(prompt("Enter the size of array:"));

  var array1 = getArray(size);
  var array2 = getArray(size);

  var sumArray = addArray(array1, array2, size);

  displayArray(sumArray, size);
}

// Calling the main function
main();
