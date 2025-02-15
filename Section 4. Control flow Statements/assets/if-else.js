// if-else Statement;
// if-else statement is used to execute a block of code if a condition is true. If the condition is false, another block of code can be executed.

let age = 18;

if (age >= 18) {
  console.log(`You are ${age} Years old and eligible to vote`);
} else {
  console.log(`You are ${age} Years old and not eligible to vote`);
}

// Output: You are 18 Years old and eligible to vote;

let ageTwo = 12;
if (ageTwo >= 18) {
  console.log(` You Can Sign Up for a New Account`);
} else {
  console.log(`You are ${ageTwo} Years old and not eligible to sign up`);
}

// Output: You are 12 Years old and not eligible to sign up;

let ageThree = 18;
city = "Rangpur";

if (ageThree >= 18 && city === "Rangpur") {
  console.log(`You Can Drive Now`);
} else {
  console.log(
    `Your age is ${ageThree} and You are not eligible to get a driving license`
  );
}
