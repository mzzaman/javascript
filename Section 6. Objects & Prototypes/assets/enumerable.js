// A Basic Guide to Enumerable Properties of an Object in JavaScript;

// Introduction to JavaScript enumerable properties;

const person = {
  firstName: "Devil",
  lastName: "Doe",
};

person.age = 31;

for (const key in person) {
  console.log(key);
}
console.log("Previous Property");

Object.defineProperty(person, "education", {
  enumerable: false,
  value: "HSC",
});

for (const key in person) {
  console.log(key);
}
console.log("Next Property");

// ES6 provides propertyIsEnumerable();
console.log(person.propertyIsEnumerable("firstName")); // true;
console.log(person.propertyIsEnumerable("lastName")); // true;
console.log(person.propertyIsEnumerable("age")); // true;
console.log(person.propertyIsEnumerable("education")); // false;
