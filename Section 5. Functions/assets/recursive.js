//JavaScript Recursive Function;

function countDown(fromNumber) {
  console.log(fromNumber);
  countDown(fromNumber - 1);
}
// countDown(10); // Infinity Recursion, Uncaught RangeError: Maximum call stack size exceeded.;

function countDown2(fromNumber) {
  console.log(fromNumber);
  let nextNumber = fromNumber - 1;
  if (nextNumber > 0) {
    countDown2(nextNumber);
  }
}
countDown2(10);

function sum(n) {
  if (n <= 1) {
    return n;
  }
  return n + sum(n - 1);
}

console.log(sum(10)); // 55
