// avaScript call() Method;

//  Introduction to the JavaScript call() method;

function add(x, y) {
  return x + y;
}

console.log(add instanceof Function); // true;

console.log(add(15, 25)); // 40;

let result = add.call(this, 10, 20);
console.log(result);

let messenger = {
  greeting: "Hello",
};

const sayHello = function (name) {
  return `${this.greeting} ${name}`;
};

console.log(sayHello.call(messenger, "Devil"));

//  Using the JavaScript call() method to chain constructors for an object;

function Box(width, height) {
  this.width = width;
  this.height = height;
}

function Widget(width, height, color) {
  Box.call(this, width, height);
  this.color = color;
}

let widget = new Widget(100, 100, "red");
console.log(widget);

// Using the JavaScript call() method for function borrowing;

const car = {
  name: "car",
  start() {
    console.log("Start the " + this.name);
  },
  speedUp() {
    console.log("Speed up the " + this.name);
  },
  stop() {
    console.log("Stop the " + this.name);
  },
};

const aircraft = {
  name: "aircraft",
  fly() {
    console.log("Fly");
  },
};

car.start.call(aircraft);
car.speedUp.call(aircraft);
aircraft.fly();

function isOdd(number) {
  return number % 2;
}

function getOddNumbers() {
  return Array.prototype.filter.call(arguments, isOdd);
}

let results = getOddNumbers(10, 1, 3, 4, 8, 9);
console.log(results);
