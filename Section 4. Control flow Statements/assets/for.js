// Introduction to the JavaScript for loop statement;
// JavaScript for loop is used to execute a block of code repeatedly. It is an entry-controlled loop. The for loop has three parts: initialization, condition, and increment/decrement.
// TODO: Syntax:

// for (initialization; condition; increment/decrement) {
//   code block
// }

// Example 1: Print numbers from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
// Output: 1 2 3 4 5
console.log("End of the loop");

//Using the JavaScript for loop without the initializer example
let i = 1;
for (; i <= 5; i++) {
  console.log(i);
}
// Output: 1 2 3 4 5
console.log("End of the loop");

// Using the JavaScript for loop without the condition example
for (let i = 1; ; i++) {
  console.log(i);
  if (i > 5) {
    break;
  }
}
console.log("End of the loop");
// Output: 1 2 3 4 5 6;

// Using the JavaScript for loop without the expression example;
for (let i = 1; i <= 5; ) {
  console.log(i);
  i++;
}
console.log("End of the loop");
// Output: 1 2 3 4 5;

//Using the JavaScript for loop without the loop body example;
let sum = 0;
for (let i = 0; i <= 9; i++, sum += i);
console.log(sum); // Output: 45
