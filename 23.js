const prompt = require("prompt-sync")();
class TwoDArray {
  constructor(size) {
    this.size = size;
    this.array = [];
  }

  getArray() {
    console.log("Enter the array values:");
    for (var i = 0; i < this.size; i++) {
      this.array.push([]);
      for (var j = 0; j < this.size; j++) {
        this.array[i][j] = parseInt(prompt());
      }
    }
  }

  displayArray() {
    console.log("Array elements are:");
    for (var i = 0; i < this.size; i++) {
      console.log(this.array[i].join(" "));
    }
  }
}

function main() {
  var size = parseInt(prompt("Enter the size of array:"));
  var twoDArray = new TwoDArray(size);
  
  twoDArray.getArray();
  twoDArray.displayArray();
}

// Calling the main function
main();
