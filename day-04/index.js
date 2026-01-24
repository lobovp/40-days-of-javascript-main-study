console.log("Day 04: Advent of Code");
let day = "Monday";

switch (day) {
  case "monday":
    console.log("It's the start of the week.");
    break;
  default:
    console.log("It's a normal day.");
}
// TASK 2
let cash = 550;
if (cash % 100 === 0) {
  console.log("Withdrawal successful");
} else {
  console.log("Invalid amount");
}
// TASK 3
//Write a simple calculator that takes an operator (+, -, , /, %) as input,
// and performs the operation on two numbers. Print the output on the console.
let number1;
let number2;
let operator = "+";
number1 = 20;
number2 = 10;

switch (operator) {
  case "+":
    console.log("Addition:", number1 + number2);
    break;
  case "-":
    console.log("Subtraction:", number1 - number2);
}
// TASK4. Pay for your movie ticket
// Imagine, the INOX charges ticket prices based on age:
// - Children (<18 years): $3
// - Adults (18 - 60 years): $10
// - Seniors (60+ years): $8

// Write a program that prints the ticket price based on the person’s age.
let age = 5;

if (age < 18) {
  console.log("Ticket Price: $3");
} else if (age >= 18 && age <= 60) {
  console.log("Ticket Price: $10");
} else {
  console.log("Ticket Price: $8");
}
