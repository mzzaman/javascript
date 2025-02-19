// JavaScript bind() Method;

// Introduction to JavaScript bind() method;

//  Using JavaScript bind() for function binding;

let person = {
  name: "John Doe",
  getName: function () {
    console.log(this.name);
  },
};

setTimeout(person.getName, 1000);

// Using bind() to borrow methods from a different object;

let runner = {
  name: "Runner",
  run: function (speed) {
    console.log(this.name + " runs at " + speed + " mph.");
  },
};

let flyer = {
  name: "Flyer",
  fly: function (speed) {
    console.log(this.name + " flies at " + speed + " mph.");
  },
};

let run = runner.run.bind(flyer);
run(150);
