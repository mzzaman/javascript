// The Logical NOT operator (!)

let eligible = false,
  required = true;

console.log(!eligible); //true;
console.log(!required); //false;

console.log(!undefined); // true
console.log(!null); // true
console.log(!20); //false
console.log(!0); //true
console.log(!NaN); //true
console.log(!{}); // false
console.log(!""); //true
console.log(!"OK"); //false
console.log(!false); //true
console.log(!true); //false

// Double-negation (!!)

let counter = 10;
console.log(!!counter); // true;

// The Logical AND operator (&&)

console.log(eligible && required); // false

let b = true;
let result = b && 1 / 0;
console.log(result); // Infinity

let b1 = false;
let result_1 = b && 1 / 0;
console.log(result_1); // false

// The Logical OR operator (||)
console.log(eligible || required); // true

console.log(eligible || required); // false
