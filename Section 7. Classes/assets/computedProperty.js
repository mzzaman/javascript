// Javascript Computed Property;

//  Introduction to JavaScript Computed Properties;

// syntax
/*

let propertyName = 'dynamicPropertyName';
const obj = {
    [propertyName] : value
}

*/

//  JavaScript Computed Property examples;
let propertyName = "c";

let rank = {
  a: 1,
  b: 2,
  [propertyName]: 3,
};

console.log(typeof rank);

//2) Using a computed property in a class

let name = "fullName";
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get [name]() {
    return `Welcome ${this.firstName} ${this.lastName}`;
  }
}

let devil = new Person("Devil", "Doe");
console.log(devil.fullName);
