const prompt = require("prompt-sync")();
function calculateGrade(writtenTest, labExams, assignments) {
  var writtenTestWeight = 70;
  var labExamsWeight = 20;
  var assignmentsWeight = 10;

  var overallGrade =
    (writtenTest * writtenTestWeight) / 100 +
    (labExams * labExamsWeight) / 100 +
    (assignments * assignmentsWeight) / 100;

  return overallGrade;
}

var writtenTestScore = parseFloat(prompt("Written Test: "));
var labExamsScore = parseFloat(prompt("Lab Exams: "));
var assignmentsScore = parseFloat(prompt("Assignments: "));

var result = calculateGrade(writtenTestScore, labExamsScore, assignmentsScore);
console.log("Grade: " + result);
