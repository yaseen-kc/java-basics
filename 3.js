const prompt = require("prompt-sync")();

var principal = parseFloat(prompt("Principal amount:"));

var rateOfInterest = parseFloat(prompt("Interest Rate:"));

var timePeriod = parseFloat(prompt("Numbers of years:"));

var simpleInterest = (principal * rateOfInterest * timePeriod) / 100;

console.log("Simple Interest: " + simpleInterest);
