const prompt = require("prompt-sync")();
var my_height = prompt("Enter your height:");

try {
  var heightNumber = parseFloat(my_height);

  if (isNaN(heightNumber)) {
    throw new Error("notANumberError");
  }

  if (heightNumber > 100) {
    throw new Error("hugeHeightError");
  }

  if (heightNumber < 1) {
    throw new Error("tinyHeightError");
  }

  console.log("Height: " + heightNumber);
} catch (error) {
  console.log(error.message);
}
