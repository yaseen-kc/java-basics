const prompt = require("prompt-sync")();

class Area {
  circle(radius) {
    return Math.PI * radius * radius;
  }

  square(side) {
    return side * side;
  }

  rectangle(length, width) {
    return length * width;
  }

  triangle(base, height) {
    return 0.5 * base * height;
  }
}

class MyClass extends Area {
  main() {
    console.log("Enter your choice");
    console.log("1. Circle");
    console.log("2. Square");
    console.log("3. Rectangle");
    console.log("4. Triangle");

    var choice = parseInt(prompt());

    switch (choice) {
      case 1:
        var radius = parseFloat(prompt("Enter the radius:"));
        console.log("Area of the circle is: " + this.circle(radius));
        break;
      case 2:
        var side = parseFloat(prompt("Enter the side length:"));
        console.log("Area of the square is: " + this.square(side));
        break;
      case 3:
        var length = parseFloat(prompt("Enter the length:"));
        var width = parseFloat(prompt("Enter the width:"));
        console.log(
          "Area of the rectangle is: " + this.rectangle(length, width)
        );
        break;
      case 4:
        var base = parseFloat(prompt("Enter the base length:"));
        var height = parseFloat(prompt("Enter the height:"));
        console.log("Area of the triangle is: " + this.triangle(base, height));
        break;
      default:
        console.log("Invalid choice");
    }
  }
}

var myObject = new MyClass();
myObject.main();
