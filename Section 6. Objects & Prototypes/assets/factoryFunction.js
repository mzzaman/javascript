// JavaScript Factory Functions;

// Introduction to the factory functions in JavaScript;

let person = {
  name: "Devil",
  age: 31,
  detail() {
    return `${this.name} is ${this.age} year old now`;
  },
};

console.log(person.detail());

function createPerson(name, age) {
  return {
    name: name,
    age: age,
    detail() {
      return `${this.name} is ${this.age} year old now`;
    },
  };
}

let john = createPerson("John", 31);
console.log(john.detail());

let jane = createPerson("Jane", 31);
console.log(jane.detail());
