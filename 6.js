const prompt = require("prompt-sync")();

var userInput = parseInt(prompt("Enter a number:"));

switch (userInput) {
  case 1:
    console.log("Day: Sunday");
    break;
  case 2:
    console.log("Day: Monday");
    break;
  case 3:
    console.log("Day: Tuesday");
    break;
  case 4:
    console.log("Day: Wednesday");
    break;
  case 5:
    console.log("Day: Thursday");
    break;
  case 6:
    console.log("Day: Friday");
    break;
  case 7:
    console.log("Day: Saturday");
    break;
  default:
    console.log("Invalid Entry");
    break;
}
