const prompt = require("prompt-sync")();

var totalMarkPercentage = parseFloat(prompt("Mark in percentage:"));

if (totalMarkPercentage > 90) {
  console.log("Grade: A");
} else if (totalMarkPercentage >= 80 && totalMarkPercentage <= 89) {
  console.log("Grade: B");
} else if (totalMarkPercentage >= 70 && totalMarkPercentage <= 79) {
  console.log("Grade: C");
} else if (totalMarkPercentage >= 60 && totalMarkPercentage <= 69) {
  console.log("Grade: D");
} else if (totalMarkPercentage >= 50 && totalMarkPercentage <= 59) {
  console.log("Grade: E");
} else {
  console.log("Failed");
}
