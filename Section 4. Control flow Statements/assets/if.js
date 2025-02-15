let age = 18;
if (age >= 18) {
  console.log("You are eligible to vote");
}

let ageTwo = 12;
if (ageTwo >= 12) {
  console.log(
    `You are ${ageTwo} Years old Now and eligible to Create a Gmail Account`
  );
}

// Nested if statement
let ageThree = 18;
city = "Rangpur";
if (city === "Rangpur") {
  if (ageThree >= 18) {
    console.log("You can Drive Now");
  }
}

// Add into One Line;
if (city === "Rangpur" && ageThree >= 18) {
  console.log("You can Drive Now");
}
