//JavaScript while loop examples
// JavaScript while loop is used to execute a block of code repeatedly as long as the specified condition is true. It is an entry-controlled loop.
// Syntax:
// while (condition) {
// code block
// }

// Example 1: Print numbers from 1 to 5
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

// Output: 1 2 3 4 5;

let total = 0;
let number = 100;
i = 1;
while (i <= number) {
  total += i;
  i++;
}
console.log(total); // Output: 5050

// while loop with an array;
let fruits = ["Apple", "Banana", "Orange"];
let firstItem = 0;
while (firstItem < fruits.length) {
  console.log(`${firstItem + 1} ${fruits[firstItem]}`);
  firstItem++;
}
console.log("End of fruits list");
