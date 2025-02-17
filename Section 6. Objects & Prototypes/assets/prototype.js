// let person = {
//   name: "Devil",
// };

console.log(Object.prototype.constructor === Object);

// Constructor function;
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

console.log(Person.prototype);

// Defining methods in the JavaScript prototype object

Person.prototype.greet = function () {
  return `${this.firstName} ${this.lastName}`;
};

let person = new Person("Devil", "Doe");
console.log(person.greet());
