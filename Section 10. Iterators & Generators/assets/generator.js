//   JavaScript Generators

function foo() {
  console.log("I");
  console.log("cannot");
  console.log("pause");
}
foo();

// ES6 generator function;
function* generator() {
  console.log("Invoked 1st time");
  yield 1;
  console.log("Invoked 2nd time");
  yield 2;
}

let gen = generator();
let result = gen.next();
// console.log(result);

console.log(gen.next());
