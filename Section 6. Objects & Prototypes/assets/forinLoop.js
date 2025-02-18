// JavaScript for…in Loop;

let person = {
  firstName: "Devil",
  lastName: "Doe",
  age: 31,
};

// Loop for...in
for (let prop in person) {
  //   console.log(prop); // get Property;
  console.log(person[prop]); // get Property Value;
}

//  The for...in loop & Inheritance;

let decoration = {
  color: "red",
};

let circle = Object.create(decoration);
circle.radius = 10;
console.log(circle.color);
console.log(circle.radius);

for (let prop in circle) {
  if (circle.hasOwnProperty(prop)) {
    console.log(prop);
  }
  console.log(prop, "out of condition");
}

// The for...in loop and Array;

const items = [10, 20, 30];
let total = 0;

for (let item of items) {
  total += item;
}
console.log(total);

Array.prototype.first = 100;
let numbers = [10, 20, 30];
let sum = 0;
for (let number in numbers) {
  console.log({ number, value: numbers[number] });

  sum += numbers[number];
}
console.log(sum);
