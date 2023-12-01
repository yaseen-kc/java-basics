const prompt = require("prompt-sync")();
var rows = 5;

for (var i = 1; i <= rows; i++) {
  var rowPattern = "";
  for (var j = 1; j <= i; j++) {
    rowPattern += j + " ";
  }
  console.log(rowPattern.trim());
}
