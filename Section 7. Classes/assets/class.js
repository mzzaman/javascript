// JavaScript Class;

// Classes before ES6 revisited;

// Before ES6

// Constructor Method
function Person(name) {
  this.name = name;
}

// Added Property on Object;

Person.prototype.getName = function () {
  return this.name;
};

// Instance of Constructor Function;
let devil = new Person("Devil");
console.log(devil.getName());

// ES6 class declaration
class Teacher {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}
// Instance of Class
let moniruzzaman = new Teacher("Moniruzzaman");
console.log(moniruzzaman.getName());
