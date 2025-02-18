// Understanding Own Properties of an Object in JavaScript;

const person = {
  firstName: "Devil",
  lastName: "Doe",
};
// Create Another Object using Object.create() method;

let employee = Object.create(person, {
  job: {
    enumerable: true,
    value: "Js Developer",
  },
});

console.log(employee.job);

// Check employee Object property;

console.log(employee.hasOwnProperty("job")); // true;

console.log(employee.hasOwnProperty("firstName")); // false;

console.log(employee.hasOwnProperty("lastName")); // false;
