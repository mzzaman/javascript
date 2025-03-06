// Javascript Reflection

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let args = ["Devil", "Doe"];

let devil = Reflect.construct(Person, args);

console.log(devil instanceof Person);
console.log(devil.fullName);

// Calling a function: Reflect.apply()
let result = Function.prototype.apply.call(Math.max, Math, [10, 20, 30]);
console.log(result);

let person = {
  name: "Devil Doe",
};
if (
  Reflect.defineProperty(person, "age", {
    writable: true,
    configurable: true,
    enumerable: false,
    value: 30,
  })
) {
  console.log(person.age);
} else {
  console.log("Cannot define the age property on the person object.");
}
