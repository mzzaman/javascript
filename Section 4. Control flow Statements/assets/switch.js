//JavaScript switch case statement
// Javascript switch case statement is used to execute one block of code from multiple conditions. It is an alternative to the if-else statement.
// The switch case statement evaluates an expression, then executes the matching case statement. If no case matches, it executes the default statement.
// Syntax:
// switch(expression) {
//     case value1:
// code block
//         break;
//     case value2:
// code block
//         break;
//     default:
// code block
// }

// Example:
let day = 3;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}
console.log(dayName); // Output: Wednesday

// In the above example, the switch case statement evaluates the day variable. If the value of the day variable is 3, it executes the case 3 statement and assigns the dayName variable to Wednesday.
// If the value of the day variable is not 1, 2, 3, 4, 5, 6, or 7, it executes the default statement and assigns the dayName variable to Invalid day.
// The break statement is used to exit the switch case statement after executing the matching case statement. If the break statement is not used, the switch case statement will continue to execute the next case statement.
// The default statement is optional. If no case matches the expression, the default statement is executed.

// Example 1:
let month = 6;
let monthName;

switch (month) {
  case 1:
    monthName = "January";
    break;
  case 2:
    monthName = "February";
    break;
  case 3:
    monthName = "March";
    break;
  case 4:
    monthName = "April";
    break;
  case 5:
    monthName = "May";
    break;
  case 6:
    monthName = "June";
    break;
  case 7:
    monthName = "July";
    break;
  case 8:
    monthName = "August";
    break;
  case 9:
    monthName = "September";
    break;
  case 10:
    monthName = "October";
    break;
  case 11:
    monthName = "November";
    break;
  case 12:
    monthName = "December";
    break;
  default:
    monthName = "Invalid month";
}
console.log(monthName); // Output: June

// Example 2:
let year = 2016;
month = 2;
let daysInMonth;

switch (month) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    daysInMonth = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    daysInMonth = 30;
    break;
  case 2:
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      daysInMonth = 29;
    } else {
      daysInMonth = 28;
    }
    break;
  default:
    daysInMonth = -1; // Invalid month
}
console.log(daysInMonth); // Output: 29

let yearTwo = 2017;
monthTwo = 2;
let daysInMonthTwo;

switch (monthTwo) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    daysInMonthTwo = 31;
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    daysInMonthTwo = 30;
    break;
  case 2:
    if ((yearTwo % 4 == 0 && yearTwo % 100 != 0) || yearTwo % 400 == 0) {
      daysInMonthTwo = 29;
    } else {
      daysInMonthTwo = 28;
    }

    break;
  default:
    daysInMonthTwo = -1; // Invalid month
}
console.log(daysInMonthTwo); // Output: 28
