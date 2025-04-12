// console.log("hello world")

// //Movie Budget
// //You have $40. A movie ticket costs $9.50
// //How many tickets can you buy, and what is your leftover amount?

// //operators we've covered: +, -, *, /, **, %

// let budget = 40;
// let ticket = 9.5;
// let ticketsBought = Math.floor (budget / ticket);
// let leftoverAmount = budget % ticket;

// console.log("Tickets bought:", ticketsBought);
// console.log("Leftover amount:", leftoverAmount);

// //boolean statements / conditional logic
// //boolean means true or false
// let isHungry = true;
// let isThirsty = false;

// //if user is hungry tell them to eat
// //if not hungry tell them to go for a walk

// if (isHungry) {
//     console.log("Well eat then!")
// } else if (isThirsty) {
//     console.log("Take a drink!")
// } else (!isHungry) //! sign before variable means the opposite of its value
//     console.log("Well go for a walk!")

// // the code compiler runs through the conditional statement, until it reaches a true and then stops
// if (true) {
//     console.log("This is the 'if' part");
// } else if (false) {
//     console.log("This is the 'else if' part" );
// } else {
//     console.log("This is the 'else' part");
// }

// //Logical operators
// //how we can create boolean statements

// //=== means "is equal to"
// let five = (3+2) === 5;
// console.log(five);

// //!== & !=== means "not equal to"
// let four = (3+2) !== 4;
// console.log(four)

// let someWord = "potato" === "Potato" //capital letters MATTER!!!
// console.log(someWord)

// //Create Variables for your name, favorite food, and a hobby
// //Print a sentence using all 3.

// let fullName = "Michael Jordan"
// let food = "tacos"
// let hobby = "golf"
// let sentence = "Hi, my name is "
// + fullName
// + ". My favorite food is "
// + food
// + " and my favorite hobby is "
// + hobby
// + ".";

// console.log(sentence)

//template literals
//string interpolation
//string interpolation using $( )

// let templateSentence = `Hi, my name is ${fullName}. My favorite food is ${food} and my favorite hobby is ${hobby}.`
// console.log(templateSentence)

// let isEqual = (2 + 2) === 4
// console.log(isEqual)

// let isGreaterThan = 10 >= 10
// console.log(isGreaterThan)

// && evaluates two statements;
// if they are BOTH truthy, the statement evaluates to true
// console.log(1 > 5 && 10 < 100); //false
// console.log(1 < 5 && 10 < 100); //true

// ||operator also evaluates 2 statements
// if one is truthy the statement evaluates as true
// console.log(1 < 5 || 10 < 100); //true
// console.log(1 > 5 || 10 < 100); //true
// console.log(1 > 5 || 10 > 100); //false

//syntax for defining a function
//parameters go inside () in function definition
// function greetUser( firstName, lastName ){
//     return `Hello, ${firstName} ${lastName}`
// }
//calling/invoking our function
//arguments are in the function invocation
//greetUser "Shelby" "Norris"
// console.log(
//     greetUser("Shelby", "Norris"),
// );

//write a function that takes two parameters to get the perimeter of a square
// function getPerimeter(width, height){
//     let perimeter = width * 2 + height * 2;
//     return perimeter
// }

//

//Three keywords used to declare variables:
//let, const, var
//var is outdated; behaves just like 'let'

//With let, you can change value of variable
// let animal = "hippo";
// //reassignment
// animal = "dog";
// console.log(animal)
// animal = "cat";
// console.log(animal)
// animal = "mouse";
// console.log(animal)
// animal = "kangaroo"
// console.log(animal)

// //const is a constant variable, the value cannot be changed
// const sport = "soccer";
// //sport = "football"; //Uncaught TypeError: Assignment to constant variable
// console.log(sport);

function doubleNumber() {
  let doublerElement = document.getElementById("doubler-p");
  let doublerTextContent = doublerElement.innerHTML;
  doublerElement.innerHTML = doublerTextContent * 2
}

function clearNumber () {
    let doublerElement = document.getElementById("doubler-p");
    doublerElement.innerHTML = '3';
}

