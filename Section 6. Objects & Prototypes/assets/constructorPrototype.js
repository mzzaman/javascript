// JavaScript Constructor/Prototype Pattern;

// The Constructor Pattern defines the object properties.
// The Prototype Pattern defines the object Methods.

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};
let devil = new Person("Devil", "Doe");
console.log(devil.getFullName());

let jane = new Person("Jane", "Doe");
console.log(jane.getFullName());

// Classes in ES6

class Teacher {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let moniruzzaman = new Teacher("Md", "Moniruzzaman");
console.log(moniruzzaman.getFullName());

let milon = new Teacher("Md", "Milon");
console.log(milon.getFullName());
