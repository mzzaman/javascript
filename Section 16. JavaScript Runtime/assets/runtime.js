// JavaScript Execution Context;

let x = 10;
function timesTen(a) {
  return a * 10;
}

let y = timesTen(x);
console.log(y); // 100;

// JavaScript Call Stack
function add(a, b) {
  return a + b;
}

function average(a, b) {
  return add(a, b) / 2;
}

let a = average(10, 20);
console.log(a);

// JavaScript Event Loop;

function task(message) {
  // emulate time consuming task
  let n = 10000000000;
  while (n > 0) {
    n--;
  }
  console.log(message);
}
console.log("Start script....");
// task("Call an API");
setTimeout(() => {
  task("Download a file");
}, 1000);
console.log("Done!");

console.log("HI");
setTimeout(() => {
  console.log("Execute immediately.");
}, 0);
console.log("Bye!");
