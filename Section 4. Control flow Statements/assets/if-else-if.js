//Introduction to the JavaScript if else if statement;
//The if else if statement is used to execute multiple conditions in a program. It is similar to the if else statement, but it allows you to check multiple conditions.
//The syntax of the if else if statement is as follows:

//if (condition1) {
// code block to be executed if condition1 is true
//} else if (condition2) {
// code block to be executed if condition2 is true
//} else if (condition3) {
// code block to be executed if condition3 is true
//} else {
// code block to be executed if none of the conditions are true
//}

let month = 6;
let monthName;

if (month === 1) {
  monthName = "January";
} else if (month === 2) {
  monthName = "February";
} else if (month === 3) {
  monthName = "March";
} else if (month === 4) {
  monthName = "April";
} else if (month === 5) {
  monthName = "May";
} else if (month === 6) {
  monthName = "June";
} else if (month === 7) {
  monthName = "July";
} else if (month === 8) {
  monthName = "August";
} else if (month === 9) {
  monthName = "September";
} else if (month === 10) {
  monthName = "October";
} else if (month === 11) {
  monthName = "November";
} else if (month === 12) {
  monthName = "December";
} else {
  monthName = "Invalid month";
}
console.log(monthName); // Output: June

// Using JavaScript if…else…if statement to calculate the body mass index (BMI) of a person

let weight = 70; // in kg;
let height = 1.75; // in meters;

let bmi = weight / height ** 2;

let bmiCategory;

if (bmi < 18.5) {
  bmiCategory = "Underweight";
} else if (bmi >= 18.5 && bmi < 24.9) {
  bmiCategory = "Healthy weight";
} else if (bmi >= 25 && bmi < 29.9) {
  bmiCategory = "Overweight";
} else {
  bmiCategory = "Obese";
}

console.log(`BMI: ${bmi.toFixed(2)} BMI Category: ${bmiCategory}`);
// Output: BMI: 22.86 BMI Category: Healthy weight;
