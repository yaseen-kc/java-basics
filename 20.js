const prompt = require("prompt-sync")();
var n = 4; // Number of rows

var num = 1;
for (var i = 1; i <= n; i++) {
  var rowPattern = "";
  for (var j = 1; j <= i; j++) {
    rowPattern += num++ + " ";
  }
  console.log(rowPattern);
}
