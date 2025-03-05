// Javascript Map Object;
let devil = { name: "Devil Doe" };
john = { name: "John Doe" };
lily = { name: "Lily Bush" };
peter = { name: "Peter Drucker" };

let userRoles = new Map();
console.log(typeof userRoles);
console.log(userRoles instanceof Map);

// Add elements to a Map

userRoles.set(devil, "Admin").set(john, "editor").set(peter, "subscriber");

//Initialize a map with an iterable object;
let userRoles2 = new Map([
  [devil, "Admin"],
  [lily, "editor"],
  [peter, "subscriber"],
]);

// Get an element from a map by key
console.log(userRoles2.get(devil));

// Trying POJO
let foo = { name: "Foo" };
console.log(userRoles2.get(foo)); // undefined;
console.log(userRoles2.has(foo)); // false;
console.log(userRoles2.has(devil)); // true;

// Get the number of elements in the map
console.log(userRoles2.size);

// Iterate over map keys;
for (const user of userRoles.keys()) {
  console.log(user.name);
}

// Iterate over map values;
for (const user of userRoles.values()) {
  console.log(user);
}

// Iterate over map elements
for (const role of userRoles.entries()) {
  console.log(role);
  console.log(`${role[0].name}: ${role[1]}`);
}
userRoles.forEach((role, user) => console.log(`${user.name}: ${role}`));

// Convert map keys or values to an array
let keys = [...userRoles.keys()];
console.log(keys);

let values = [...userRoles.values()];
console.log(values);

// Delete an element by key
// userRoles.delete(john);
console.log(userRoles);
console.log(userRoles.size);
