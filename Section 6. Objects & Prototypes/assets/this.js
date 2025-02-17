// Demystifying the JavaScript this Keyword;
"use strict";
let counter = {
  counter: 0,
  next: function () {
    return ++this.counter;
  },
  info: function () {
    return this;
  },
};

console.log(counter.info());

// Global context
console.log(this === window); // true;
this.color = "Red";
console.log(window.color); // Red;

// Function context

// Function invocation
// Method invocation
// Constructor invocation
// Indirect invocation

// 1) Simple function invocation
function show() {
  console.log(this === window); // true;
}

// show();
window.show();

function simpleShow() {
  console.log(this === undefined);
}
simpleShow(); // false

function checkTrueOrFalse() {
  "use strict";
  console.log(this === undefined);

  function display() {
    console.log(this === undefined); // false
  }
  display(); // false;
}
checkTrueOrFalse();

// 2) Method invocation
let car = {
  brand: "Honda",
  getBrand: function () {
    return this.brand;
  },
};

console.log(car.getBrand()); // Honda;
// let brand = car.getBrand;
// console.log(brand()); // undefined;

let brand = car.getBrand.bind(car);
console.log(brand()); // Honda;

let bike = {
  brand: "Yamaha R15",
};

let bikeBrand = car.getBrand.bind(bike);
console.log(bikeBrand()); // Yamaha R15;

// 3) Constructor invocation;

function Car(brand) {
  this.brand = brand;
}
Car.prototype.getBrand = function () {
  return this.brand;
};

let carOne = new Car("Audi");
console.log(carOne.getBrand());

// var bmw = Car("BMW"); // missing new keyword;
// console.log(bmw.brand); // TypeError : Cannot read property 'brand' of undefined;

function CarTwo(brand) {
  if (!(this instanceof CarTwo)) {
    throw Error("Must use the new operator to call the function");
  }
  this.brand = brand;
}

// 4) Indirect Invocation;

function getBrand(prefix) {
  console.log(prefix + this.brand);
}

let hondaTwo = {
  brand: "Suzuki",
};

let audi = {
  brand: "Audi",
};

getBrand.call(hondaTwo, "It's a ");
getBrand.call(audi, "It's an ");
