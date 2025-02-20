// JavaScript Getters and Setters;

// Introduction to the JavaScript getters and setters;

class Person {
  constructor(name) {
    this.setName(name);
  }

  getName() {
    return this.name;
  }

  setName(newName) {
    newName = newName.trim();
    if (!newName) {
      throw new Error("Name can not be Empty");
    }
    this.name = newName;
  }
}

let devil = new Person("Devil");
// console.log(devil.getName());

// Using getter in an object literal;
let meeting = {
  attendees: [],
  add(attendee) {
    console.log(`${attendee} Joined The Meeting`);
    this.attendees.push(attendee);
    return this;
  },

  get latest() {
    let count = this.attendees.length;
    return count === 0 ? undefined : this.attendees[count - 1];
  },
};

meeting.add("Moniruzzaman").add("Milon").add("Devil");

console.log(`The latest attendee is ${meeting.latest}`);
