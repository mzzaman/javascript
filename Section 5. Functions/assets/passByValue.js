//JavaScript pass-by-value or pass-by-reference

//Pass-by-value of primitives values

function square(a) {
  return a ** 2;
}
let y = 10;
let result = square(y);

console.log(result); // 100;
console.log(y); //10 --no change;

//Pass-by-value of reference values
let person = {
  name: "John",
  age: 25,
};

function increaseAge(obj) {
  obj.age += 1;
}

increaseAge(person);
console.log(person);

let person2 = {
  name: "Devil",
  age: 30,
};

function increaseAge2(obj) {
  obj.age += 10;

  // reference another object;
  obj = { name: "moniruzzaman", age: 31 };
}

increaseAge2(person2);
console.log(person2);
