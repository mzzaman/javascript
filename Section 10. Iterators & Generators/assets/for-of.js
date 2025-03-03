// JavaScript for…of Loop;

// JavaScript for of loop examples;

// 1) Iterating over arrays;
let scores = [80, 90, 70];

for (let score of scores) {
  score = score + 5;
  console.log(score);
}

let colors = ["Red", "Green", "Blue"];

for (const [index, color] of colors.entries()) {
  console.log(`${color} is at index ${index + 1}`);
}

// 2) In-place object destructuring with for…of;

const ratings = [
  { user: "John", score: 3 },
  { user: "Jane", score: 4 },
  { user: "David", score: 5 },
  { user: "Peter", score: 2 },
];

let sum = 0;
for (const { score } of ratings) {
  sum += score;
}
console.log(`Total Score: ${sum}`);

// 3) Iterating over strings;
let str = "Moniruzzaman";
for (const s of str) {
  console.log(s);
}

// 3) Iterating over Map objects;

let color = new Map();

color.set("red", "#ff0000");
color.set("green", "#00ff00");
color.set("blue", "#0000ff");

for (const col of color) {
  console.log(col);
}

// 4) Iterating over set objects;
let nums = new Set([1, 2, 3]);
for (const num of nums) {
  console.log(num);
}

//  for...of vs. for...in;
let scoress = [10, 20, 30];
scoress.message = "Hi";

console.log("for...in:");
for (let score in scoress) {
  console.log(score);
}

console.log("for...of:");
for (let score of scoress) {
  console.log(score);
}
