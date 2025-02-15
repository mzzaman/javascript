// JavaScript break statement;

// The JavaScript break statement is used to exit a loop or switch case statement. It is used to terminate the loop immediately without executing the remaining code.
// Syntax:
// break;
// The label statement is used to exit a loop with a label. The label statement is used with the break statement.
// Syntax:
// label: break;
// Example 1: Using the JavaScript break statement with a for loop

console.log("Example 1: Using the JavaScript break statement with a for loop");

for (let i = 1; i <= 5; i++) {
  console.log(i);
  if (i === 3) {
    break;
  }
}

// Using the break statement to terminate a nested loop

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(i, j);
  }
}

console.log("Loop Finished");

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i + j == 4) {
      break;
    }
    console.log(i, j);
  }
}
console.log("Loop Finished");

//Using JavaScript break statement in a while loop
let i = 0;
while (i <= 5) {
  i++;
  console.log(i);
  if (i === 3) {
    break;
  }
}
console.log("Loop Finished");
