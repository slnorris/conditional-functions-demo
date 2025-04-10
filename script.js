console.log("hello world")

//Movie Budget
//You have $40. A movie ticket costs $9.50
//How many tickets can you buy, and what is your leftover amount?

//operators we've covered: +, -, *, /, **, %

let budget = 40;
let ticket = 9.5;
let ticketsBought = Math.floor (budget / ticket);
let leftoverAmount = budget % ticket;

console.log("Tickets bought:", ticketsBought);
console.log("Leftover amount:", leftoverAmount);






//boolean statements / conditional logic
//boolean means true or false
let isHungry = true;
let isThirsty = false;

//if user is hungry tell them to eat
//if not hungry tell them to go for a walk

if (isHungry) {
    console.log("Well eat then!")
} else if (isThirsty) {
    console.log("Take a drink!")
} else (!isHungry) //! sign before variable means the opposite of its value
    console.log("Well go for a walk!")


// the code compiler runs through the conditional statement, until it reaches a true and then stops
if (true) {
    console.log("This is the 'if' part");
} else if (false) {
    console.log("This is the 'else if' part" );
} else {
    console.log("This is the 'else' part");
}

//Logical operators
//how we can create boolean statements

//=== means "is equal to"
let five = (3+2) === 5;
console.log(five);

//!== & !=== means "not equal to"
let four = (3+2) !== 4;
console.log(four)

let someWord = "potato" === "Potato" //capital letters MATTER!!!
console.log(someWord)
