//JavaScript Ternary Operator
//The ternary operator is the only JavaScript operator that takes three operands. This operator is frequently used as a shortcut for the if statement.

//Syntax
//condition ? expr1 : expr2

//Example
//The following example shows how to use the ternary operator in JavaScript.
let city = "Rangpur";
let locationName =
  city === "Rangpur"
    ? `${city} is a city in Bangladesh`
    : `${city} is not a city in Bangladesh`;
console.log(locationName);

// Output: Rangpur is a city in Bangladesh;

//Example 1
//The following example shows how to use the ternary operator in JavaScript.

let age = 26;
let beverage = age >= 21 ? "Beer" : "Juice";
console.log(beverage); // Output: Beer

//Example 2
//The following example shows how to use the ternary operator in JavaScript.
let ageTwo = 16;
let drivingLicense =
  ageTwo >= 18
    ? "You Can Drive Now"
    : `Your age is ${ageTwo} and you are not eligible for driving license`;
console.log(drivingLicense); // Output: You Can Drive Now

//Example 3
//The following example shows how to use the ternary operator in JavaScript.

let authenticated = true;
let nextUrl = authenticated
  ? (alert(`You will redirect to the admin area`), `/admin`)
  : (alert`Access denied`, `/403`);
console.log(nextUrl); // Output: /admin

//Example 4
//The following example shows how to use the ternary operator in JavaScript.
let speed = 90;
let message = speed >= 120 ? "Too Fast" : speed >= 80 ? "Fast" : "OK";

console.log(message); // Output: Fast
