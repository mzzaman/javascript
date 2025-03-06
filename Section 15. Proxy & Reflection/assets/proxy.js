// Javascript Proxy

let user = {
  name: "Devil Doe",
  age: 30,
  job: "Learning Javascript",
};

let handler = {
  get(target, property) {
    console.log(`Property ${property} has been read`);
    return target[property];
  },
};

const proxy = new Proxy(user, handler);
// console.log(proxy); // { name: 'Devil Doe', age: 30, job: 'Learning Javascript' }
// console.log(proxy.name); //

// Proxy Traps

const person = {
  name: "Moniruzzaman",
  age: 30,
  job: "Learning Javascript",
};

const personHandler = {
  get(target, property) {
    return property === "name"
      ? `${target.name} ${target.age} ${target.job}`
      : target[property];
  },
};

const personProxy = new Proxy(person, personHandler);
console.log(personProxy.name);

// The set() trap

const student = {
  name: "Devil Doe",
  age: 30,
  department: "Physic",
};

const studentHandler = {
  set(target, property, value) {
    if (property === "age") {
      if (typeof value !== "number") {
        throw new Error("Age must be a number.");
      }

      if (value < 18) {
        throw new Error("The user must be 18 or older.");
      }
    }
    target[property] = value;
  },
};

const studentProxy = new Proxy(student, studentHandler);

console.log((studentProxy.age = 19));

// The apply() trap

// let proxy2 = new Proxy(target, {
//   apply: function (target, thisArg, args) {},
// });

const devil = {
  name: "Devil",
  age: 30,
};

const showBio = function (devil) {
  return `Hello I'm ${devil.name} and I'm ${devil.age} years old`;
};

const getFullNameProxy = new Proxy(showBio, {
  apply(target, thisArg, args) {
    return target(...args).toUpperCase();
  },
});

console.log(getFullNameProxy(devil));
