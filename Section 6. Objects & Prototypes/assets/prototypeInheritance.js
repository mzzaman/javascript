// JavaScript Prototypal Inheritance

// JavaScript prototypal inheritance and __proto__;

let person = {
  name: "John Doe",
  greet: function () {
    return `Hello I'm ${this.name}`;
  },
};
// console.log(person.toString());

console.log(person.__proto__ === Object.prototype);

// let teacher = {
//   teach: function (subject) {
//     return `I can teach ${subject}`;
//   },
// };

// teacher.__proto__ = person;

// console.log(teacher.name); // John Doe;
// console.log(teacher.teach("Javascript"));

// A standard way to implement prototypal inheritance in ES5

let teacher = Object.create(person);
teacher.name = "Devil";
teacher.teach = function (subject) {
  return `I can teach ${subject}`;
};

console.log(teacher.name);
console.log(Object.getPrototypeOf(teacher) === person);
