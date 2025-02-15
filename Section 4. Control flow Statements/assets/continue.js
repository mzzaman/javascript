// Javascript Continue Statement;

//Using the continue statement in a for loop

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`Even: ${i}`);
    continue;
  }
  console.log(`ODD: ${i}`);
}
console.log("For Loop Finished");

// Using the continue statement in a while loop;

let i = 0;
while (i <= 10) {
  i++;
  if (i % 2 === 0) {
    console.log(`Even: ${i}`);
    continue;
  }
  console.log(`ODD: ${i}`);
}
console.log("While Loop Finished");

outer: for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    if (i + j === 5) continue outer;
    console.log(i, j);
  }
}
console.log("Using the continue statement with a label example");
