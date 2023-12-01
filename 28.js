const prompt = require("prompt-sync")();

function Car(name, mileage, max_speed) {
  this.name = name;
  this.mileage = mileage;
  this.max_speed = max_speed;
}

var myCar = new Car("Toyota", 30, 120);

console.log("Car Name: " + myCar.name);
console.log("Mileage: " + myCar.mileage);
console.log("Max Speed: " + myCar.max_speed);
