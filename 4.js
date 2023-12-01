const prompt = require("prompt-sync")();

var studentMark = parseFloat(prompt("Mark:"));

if (studentMark >= 50) {
  console.log("Passed");
} else {
  console.log("Failed");
}
