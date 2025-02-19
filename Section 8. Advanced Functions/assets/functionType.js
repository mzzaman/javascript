// JavaScript Function Type;

// Introduction to the JavaScript Function type;

// Functions properties 1) length, 2) prototype

function add(x, y) {
  return x + y;
}

console.log(add(10, 20)); // 30;

// length;
console.log(add.length);

// prototype

console.log(add.prototype);

// new.target

let addTwoNumber = new add(15, 25);
console.log(addTwoNumber);

function sayName(firstName, lastName) {
  console.log(new.target); // undefined on Regular Function;
  return `Hello ${firstName} ${lastName}`;
}

console.log(sayName("Devil", "Doe"));

// Throw an error;

function showUndefined(name) {
  if (new.target) {
    throw new Error("new.target do not work on Regular Function");
  }
  return name;
}

console.log(showUndefined("Devil"));

// Function methods: apply, call, and bind;

// The apply() and call() methods;

let cat = {
  type: "Cat",
  sound: "Meow",
};

let dog = {
  type: "Dog",
  sound: "Woof",
};

const say = function (message) {
  console.log(message);
  console.log(`${this.type} Says ${this.sound}`);
};
// apply();

say.apply(cat, ["what does a cat say ?"]);
say.apply(dog, ["what does a dog say ?"]);

// call();
say.call(cat, "What does a Cat Say ?");
say.call(dog, "What does a Dog Say ?");

function showDetails(question) {
  console.log(question);
  console.log(
    `Hi, I'm ${this.name}, I'm ${this.age} years old, And I'm  ${this.education}`
  );
}

let devil = {
  name: "Devil",
  age: 31,
  education: "Not a Graduate Person",
};

showDetails.apply(devil, ["Who are you?"]);
showDetails.call(devil, "Who are you ?");
let moniruzzaman = {
  name: "Moniruzzaman",
  age: 31,
  education: "Not a Graduate Person",
};

showDetails.apply(moniruzzaman, ["Who are you ?"]);
showDetails.call(moniruzzaman, "Who are you ?");

//  The bind() method;

let car = {
  speed: 5,
  start: function () {
    console.log("Start with " + this.speed + " km/h");
  },
};

let aircraft = {
  speed: 10,
  fly: function () {
    console.log("Flying");
  },
};
let taxiing = car.start.bind(aircraft);
taxiing();

let flyingCar = aircraft.fly.bind(car);
flyingCar();
