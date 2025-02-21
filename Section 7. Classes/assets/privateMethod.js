// Javascript Private Method;

class MyClass {
  #field;

  get #myField() {
    return this.#field;
  }

  set #myField(value) {
    this.#field = value;
  }
}

// JavaScript private method examples;

// 1) Private instance method example;
class Person {
  #firstName;
  #lastName;

  constructor(firstName, lastName) {
    this.#firstName = firstName;
    this.#lastName = lastName;
  }

  getFullName(format = true) {
    return format ? this.#firstLast() : this.#lastFirst();
  }

  #firstLast() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  #lastFirst() {
    return `${this.#lastName} ${this.#firstLast}`;
  }
}

let person = new Person("Devil", "Doe");
console.log(person.getFullName());

class Teacher {
  #firstName;
  #lastName;

  constructor(firstName, lastName) {
    this.#firstName = Teacher.#validate(firstName);
    this.#lastName = Teacher.#validate(lastName);
  }

  getFullName(format = true) {
    return format ? this.#firstLast() : this.#lastFirst();
  }

  #firstLast() {
    return `${this.#firstName} ${this.#lastName}`;
  }

  #lastFirst() {
    return `${this.#lastName} ${this.#firstName}`;
  }

  static #validate(name) {
    if (typeof name === "string") {
      let str = name.trim();
      if (str.length >= 3) {
        return str;
      }
    }
    throw new Error("The name must be a string with at least 3 characters");
  }
}

let teacher = new Teacher("Devil", "Doe");
console.log(teacher.getFullName());
