// JavaScript Private Fields

// Introduction to the JavaScript private fields;

class Circle {
  // Private Fields;
  #radius = 0;
  constructor(radius) {
    this.#radius = radius; // calling setter;
  }
  get area() {
    return Math.PI * Math.pow(this.#radius, 2);
  }

  set radius(value) {
    if (typeof value === "number" && value > 0) {
      this.#radius = value;
    } else {
      throw new Error("The radius must be a positive number");
    }
  }

  get radius() {
    return this.#radius;
  }
}

let circle = new Circle(10);
console.log(circle.area); // 314.1592653589793;

// Using getter and setter to access private fields;

class Cylinder extends Circle {
  #height;
  constructor(radius, height) {
    super(radius);
    this.#height = height;
  }
}
