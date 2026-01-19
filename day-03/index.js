// 1. Operators - Arithmetic Operators  Symbols  + - * / % ++ --
// 1.1  Arithmetic operators perform mathematical operations on numeric operands.
// 1.2  Assignments Operators  = += -= *= /= %=
// 1.3  Comparison Operators  == === != !== > < >= <=
// 1.4  Relational Operators  instanceof in
// 1.5  Logical Operators  && || !
// 1.6  Bitwise Operators  & | ^ ~ << >> >>>
// 1.7  Conditional (Ternary) Operator  ? :
// Examples:
let x = 10;
let y = 5;
// 2. Operands: The values on which operators perform operations.
// x + y, x and y are operands, + is the operator
// 3. Expression: A combination of operands and operators that evaluates to a value.
// let a = 10 / 2 + 5 * 3; // Expression

//## 1. Odd or Even?

//- [ ] Take a number and find if the number is an odd or even number.
//- [ ] Print the number and result in the console.
console.log("x is an odd", x % 2 == 0);
console.log("y is an even", y % 2 !== 0);

// ## 2. Do you have a Driving License?

// Let's check if you are eligible to get a driving license. The eligibility to get a driving licence is 18 years.

// - [ ] Manage `age` as a variable.
// - [ ] Check if the age is elligible for a driving license and print it on the console accordingly.
let age = 20;
console.log("Eligible for driving license:", age >= 18);

//## 3. Calculate CTC with a Bonus

//Let's calculate how much you earn from your office.

//- [ ] You get 12,300 rupees as your monthly salary.
//- [ ] You get a 20% bonus on your annual salary.
//- [ ] How much money do you make per annum as a CTC?
let monthlySalary = 12300;
let bonusPercentage = 0.2;
let annualSalary = monthlySalary * 12;
let bonus = annualSalary * bonusPercentage;
let ctc = annualSalary + bonus;
console.log("Annual Salary:", annualSalary);
console.log("Bonus:", bonus);
console.log("CTC:", ctc);

// ## 4. Write a program for the Traffic Light Simulation.

// Red Light... Green Light... Let's Play!

// - [ ] Create a `color` variable.
// - [ ] Based on the color variable's value print in the console if a traveller needs to STOP or GO. The Red color is for STOP and the Green color is for GO.
let color = "Green";
console.log(
  "Traffic Light:",
  color === "Red" ? "STOP" : color === "Green" ? "GO" : "Invalid Color",
);

// ## 5. Electricity Bill Calculation
// Let's calculate how much you pay for electricity bills per month and annually.

// - [ ] Create a `units` variable. Based on this value you will calculate the total electricity bill for a months.
// - [ ] If each day you consume the `units` and each unit cost 150 rupees, how much will you be charged per month?
// - [ ] If there is a 20% discount on the annual payment, how much will you be charged for an annual payment?
let units = 15; // units consumed per day
let costPerUnit = 150; // cost per unit in rupees
let daysInMonth = 30;
let monthlyBill = units * costPerUnit * daysInMonth;
let discountPercentage = 0.2;
let monthlyBillWithDiscount = monthlyBill * (1 - discountPercentage);
console.log("Monthly Electricity Bill:", monthlyBill);
console.log(
  "Annual Electricity Bill with 20% discount:",
  monthlyBillWithDiscount * 12,
);
// ## 6. Leap Year Checker

// Is 2025 a Leap Year?

// - [ ] Take `year` as input.
// - [ ] Use the arithmetic operator and ternary operator to print if a year is a leap year or not.
let year = 2028;
console.log(
  "Leap Year:" + year,
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? "Yes" : "No",
);

// ## 8. Bitwise Doubling

// A tricky one for you

// - [ ] Create a variable `count` and assign a value, say, 5.
// - [ ] Now use the Bitwise shift operator to make the number double.
// - [ ] Print it on the console.
let count = 5;
let doubledCount = count << 1;
console.log("Doubled Count:", doubledCount);
