// JavaScript Object Properties

// Object Property types;

// 1) Data property;
"use strict";
let person = {
  firstName: "Devil",
  lastName: "Doe",
};

person.age = 31;
console.log(person);
delete person.age;
console.log(person);

Object.defineProperty(person, "age", {
  configurable: false,
  value: 31,
});

delete person.age;
console.log(person);

// Trying To redeclare object property;
Object.defineProperty(person, "age", {
  configurable: true,
});

console.log(person.age); // Uncaught TypeError: Cannot redefine property:age;

// By default enumerable = true;
for (let property in person) {
  console.log(property);
}

let student = {
  name: "Devil",
};

student.roll = 14;
student.section = "A";

Object.defineProperty(student, "section", {
  configurable: false,
});

for (let property in student) {
  console.log(property);
}

// 2) Accessor properties;

Object.defineProperty(person, "fullName", {
  get: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  set: function (value) {
    let parts = value.split(" "); // string to array;
    if (parts.length === 2) {
      this.firstName = parts[0];
      this.lastName = parts[1];
    } else {
      throw error("Invalid name format");
    }
  },
});
console.log(person.fullName);

// Define multiple properties: Object.defineProperties();

let product = {}; // empty object;
Object.defineProperties(product, {
  name: {
    value: "Smartphone",
  },
  price: {
    value: 799,
  },
  tax: {
    value: 0.1,
  },
  netPrice: {
    get: function () {
      return this.price * (1 + this.tax);
    },
  },
});

let productName = product.name;
let fixedPrice = product.netPrice.toFixed(2);
console.log(`The net price of a ${productName} is ${fixedPrice} USD`);

// JavaScript object property descriptor;

let computer = {
  cpu: "intel/amd",
  ram: "Asus/Adata/Corsiar",
};

let descriptor = Object.getOwnPropertyDescriptor(computer, "cpu");
console.log(descriptor);
