console.log("Hello World");

// JS has 8 Data Types
// String
// Number
// Bigint
// Boolean
// Undefined
// Null
// Symbol
// Object

console.log(typeof 3); //number
console.log(typeof "hello"); //string
console.log(typeof true); //boolean
console.log(typeof []); //object(array, is an object)
console.log(typeof "20"); //string

let grade = 100;
let dog = "labrador";

if (grade === 100) {
  console.log("You got an A");
} else if (typeof grade != "number") {
  console.log("Hey! You need to enter a number!");
}

console.log(dog);

// JS distinct syntax pattern
// if (){}
// else if () {}
// function () {}
// etc.

//ARRAYS
let car1 = "saab";
let car2 = "volvo";
let car3 = "bmw";
// if you find yourself doing this, you likely need an array

//array literal
let cars = ["saab", "volvo", "bmw"];

console.log(cars.length);

// we can find the value of a particular index with arrayName[<index>]
// variable name with a set of square braces in the () is an array
// keep same data types in an array
console.log(cars[0]);

// we can also find the very last value of an array
console.log(cars[cars.length - 1]); //bmw

let grades = [99, 40, 50, 60, 28, 88]; //number data type in an array

console.log(grades);

let mixedArray = [99, "mountain", true]; //acceptable in some cases, but best practice is to keep the same data type within an array

// nested array
// array matrix
let nested = [
  [99, 40, 50, 60, 28, 88],
  [99, 40, 50, 60, 28, 88],
  [99, 40, 50, 60, 28, 88],
  [99, 40, 50, 60, 28, 88],
  [99, 40, 50, 60, 28, 88],
  [99, 40, 50, 60, 28, 88],
  [99, 40, 50, 60, 28, 88],
  [99, 40, 50, 60, 28, 88],
];

console.log(nested);

let dogs = ["labrador", "chihuahua", "dalmatian"];

dogs.push("pug"); //PUSH adds a value to the end of an array

console.log(dogs);
