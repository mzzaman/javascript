// JavaScript Object Destructuring;

// Introduction to the JavaScript object destructuring assignment;

let person = {
  firstName: "Devil",
  lastName: "Doe",
  age: 31,
};

let { firstName, lastName, age } = person;
console.log(firstName); // Devil

// Nested object destructuring;

let employee = {
  id: 1001,
  name: {
    fName: "John",
    lName: "Doe",
  },
};

let {
  id,
  name: { fName, lName },
  name,
} = employee;

console.log(id);
console.log(fName); // John
console.log(lName); // Doe
// console.log(name); // { firstName: 'John', lastName: 'Doe' }

// Destructuring function arguments;

let display = (person) => console.log(`${person.firstName} ${person.lastName}`);
display(person);

let displayStudent = (student) =>
  console.log(`${student.name} ${student.age} ${student.education}`);

let student = {
  name: "Devil",
  age: 31,
  education: "HSC",
};

// Function Argument Destructuring;
displayStudent(student);
