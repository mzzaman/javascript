let sum = 10 + 20;
console.log(sum); // 30

let netPrice = 9.99,
  shippingFee = 1.99;
let grossPrice = netPrice + shippingFee;

console.log(grossPrice);

let x = "10",
  y = "20";
let result = Number(x) + Number(y);

console.log(result);

let result2 = 20 / 10;

console.log(result2); // 2

let result3 = "20" / 2;
console.log(result3); // 10;

let energy = {
  valueOf() {
    return 100;
  },
};

let currentEnergy = energy - 10;
console.log(currentEnergy);

currentEnergy = energy + 100;
console.log(currentEnergy);

currentEnergy = energy / 2;
console.log(currentEnergy);

currentEnergy = energy * 1.5;
console.log(currentEnergy);

let energy2 = {
  toString() {
    return 50;
  },
};

let currentEnergy2 = energy2 - 10;
console.log(currentEnergy2);

currentEnergy2 = energy2 + 100;
console.log(currentEnergy2);

currentEnergy2 = energy2 / 2;
console.log(currentEnergy2);

currentEnergy2 = energy2 * 1.5;
console.log(currentEnergy2);
