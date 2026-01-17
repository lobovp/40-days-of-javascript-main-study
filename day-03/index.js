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
