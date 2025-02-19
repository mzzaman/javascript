// Returning Multiple Values from a Function;

// Returning multiple values from a function using an array;

// function getName() {
//   // get names form the database or API

//   let firstName = "Devil";
//   lastName = "Doe";

//   // return as an Array;
//   return [firstName, lastName];
// }

// let names = getName();
// console.log(names);
// let [fname, lname] = getName();
// console.log(fname);
// console.log(lname);

// Returning multiple values from a function using an object;

function getNames() {
  // get names from the database or API

  let firstName = "Moniru";
  let lastName = "zzaman";

  // return as an Object;
  return {
    firstName,
    lastName,
  };
}

// Correct destructuring
let { firstName, lastName } = getNames();
console.log(firstName); // Moniru
console.log(lastName); // zzaman
