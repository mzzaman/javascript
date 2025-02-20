// JavaScript Inheritance Using extends & super;

// Implementing JavaScript inheritance using extends and super

function Animal(legs) {
  this.legs = legs;
}

Animal.prototype.walk = function () {
  console.log(`Walking on ${this.legs} legs`);
};

function Bird(legs) {
  Animal.call(this, legs);
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Animal;

Bird.prototype.fly = function () {
  console.log("flying");
};

let pigeon = new Bird(2);
pigeon.walk();

pigeon.fly();

// Using ES6;

class Teacher {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

// Extend Using Class Constructor
class Student extends Teacher {
  constructor(name, department) {
    super(name);
    this.department = department;
  }
}

let devil = new Student("Devil", "Physics");
console.log(devil.getName());
