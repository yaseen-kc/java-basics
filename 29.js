const prompt = require("prompt-sync")();

// myFilter function that takes an array and a callback function
function myFilter(myArray, callback) {
  // Initialize sum to 0
  let sum = 0;

  // Iterate through each element in the array
  for (let i = 0; i < myArray.length; i++) {
    // Check if the sum of the current element is even or odd using the callback
    if (callback(myArray[i])) {
      // If even, add the element to the sum
      sum += myArray[i];
    }
  }

  // Return the sum
  return sum;
}

// Example callback function: Check if the sum of a number is even
function isSumEven(number) {
  return number % 2 === 0;
}

// Example usage:
// Sample Input: Array of numbers [1, 2, 3, 4, 5]
var myArray = [1, 2, 3, 4, 5];

// Call myFilter with the array and the callback function
var result = myFilter(myArray, isSumEven);

// Output the result
console.log(result);
