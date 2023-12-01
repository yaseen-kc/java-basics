const prompt = require("prompt-sync")();
function calculateIncomeTax(annualIncome) {
  if (annualIncome <= 250000) {
    return 0;
  } 
  else if (annualIncome <= 500000) {
    return (annualIncome - 250000) * 0.05;
  } 
  else if (annualIncome <= 1000000) {
    return 250000 * 0.05 + (annualIncome - 500000) * 0.2;
  } 
  else if (annualIncome <= 5000000) {
    return 250000 * 0.05 + 500000 * 0.2 + (annualIncome - 1000000) * 0.3;
  } 
  else {
    return 250000 * 0.05 + 500000 * 0.2 + 9000000 * 0.3;
  }
}

var annualIncome = parseFloat(prompt("Enter the annual income:"));

var taxAmount = calculateIncomeTax(annualIncome);

console.log("Income tax amount = " + taxAmount);
