// JavaScript Immediately Invoked Function Expression;

let sum = function (a, b) {
  return a + b;
};

console.log(sum(10, 15));

let sum2 = (function (a, b) {
  return a + b;
})(10, 15);
console.log(sum2);

(function () {
  let counter = 0;
  function add(a, b) {
    return a + b;
  }
  console.log(add(10, 15)); // 25
})();
