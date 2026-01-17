console.log("Day 02: Adventure in the Code Forest");
// Variables:Variables are used to store data values. In JavaScript, you can declare a variable using var, let, or const.
// - var: 'var' is function-scoped and can be redeclared and updated.
// - let: 'let' is block-scoped and can be updated but not redeclared within the same scope.
// - const: 'const' is block-scoped and cannot be updated or redeclared. It must be initialized at the time of declaration.

// var address = "Kharkov, Ukraine"; // 'var' declares a variable with function scope.
// console.log("Address:", address);

// let city = "Kharkov";
// console.log("City:", city);

let address;
console.log("Address:", address);

address = "Odessa, Ukraine";
console.log("Updated Address:", address);

/* Data Types in JavaScript:
    - **primitive data types:**
        1. String: Represents textual data enclosed in single or double quotes. ('hello', "world")
        2. Number: Represents both integer and floating-point numbers. (123, 45.67)
        3. Boolean: Represents logical values, either true or false. (true, false)
        4. Undefined: Represents a variable that has been declared but not assigned a value. ( let x ;)
        5. Null: Represents the intentional absence of any object value. ( let y = null; )
        6. Symbol: Represents a unique and immutable identifier, often used as object property keys. ( Symbol('id') )
        7. BigInt: Represents integers with arbitrary precision, allowing for the representation of very large numbers beyond the safe integer limit of the Number type. ( 9007199254741991n )
    - **non-primitive data types:**
        1. Object: A collection of key-value pairs, where keys are strings (or Symbols) and values can be of any data type, including other objects. ( { name: "John", age: 30 } )
        2. Array: A special type of object used to store ordered collections of values, accessible by their index. ( [1, 2, 3] )    
        3. Function: A block of reusable code that can be defined and invoked, often treated as first-class objects in JavaScript.  ( function greet() { console.log("Hello!"); } )
*/

//TASK 2: Create variables of different data types (string, number, boolean) using let and const, and log their values to the console.
let userName = "Alice"; // String
console.log("User Name:", userName);
let age = 30; // Number
age = 54; // Updating the value
console.log("Age:", age);
let isStudent = true; // Boolean
isStudent = false; // Boolean
console.log("Is Student:", isStudent);
const favoriteLanguage = "JavaScript"; // String
// favoriteLanguage = "Java"; // String
console.log("Favorite Language:", favoriteLanguage);
//TASK 4: Declare a object and an array using const, and log their contents to the console.

let person = {
  name: userName,
  age: age,
  isStudent: isStudent,
};
console.log("Person Object:", person);
let colors = ["red", "green", "blue"];
console.log("Colors Array:", colors);
