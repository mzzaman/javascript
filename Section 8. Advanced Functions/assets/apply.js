// JavaScript apply() method;

//  Introduction to the JavaScript apply() method;
let person = {
  name: "Moniruzzaman",
};

function greet(greeting, message) {
  return `${greeting} ${this.name}, ${message}`;
}

let result = greet.apply(person, ["Hello", "How are you?"]);
console.log(result);

// 2) Function borrowing;

const computer = {
  name: "MacBook",
  isOn: false,
  turnOn() {
    this.isOn = true;
    return `The ${this.name} is On`;
  },
  turnOff() {
    this.isOn = false;
    return `The ${this.name} is Off`;
  },
};

const server = {
  name: "Dell PowerEdge T30",
  isOn: false,
};

let resultOn = computer.turnOn.apply(server);
console.log(resultOn);

let resultOff = computer.turnOff.apply(server);
console.log(resultOff);

// 3) Using the apply() method to append an array to another;

let arr = [1, 2, 3];
let numbers = [4, 5, 6];

arr.push.apply(arr, numbers);

console.log(arr);
