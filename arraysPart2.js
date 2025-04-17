// console.log("Hello World");

let movies = ["Lion King", "Grease", "Sonic", "V for Vendetta"];

// log the whole array
console.log(movies);

//log the length of the array
console.log(movies.length);

// log first value of array
console.log(movies[0]);

// log last value of array
console.log(movies[3]);
console.log(movies[movies.length - 1]);

// we can add a value to the end of an array with .push, takes a parameter
movies.push("Moana", "Ninja Turtles");

// .shift removes the first element of an array, no parameters required
movies.shift();

// .pop removes the last element of an array, no parameters required
movies.pop();

console.log(movies);

let musicians = [
  "Prince",
  "Beyonce",
  "JCole",
  "Michael Jackson",
  "Garbage",
  "Violent Femmes",
  "Gorillaz",
];

// iterating through an array
for (musician of musicians) {
  console.log(musician + " is great!");
}

// we can do a known or unknown amount of tasks with a standard for loop
for (let i = 0; i < 10; i++) {
  console.log("I is now: " + i);
}
// code will not run with false condition
// for (let i = 0; false; i++)


// code will create infinite loop with true condition
// for (let i = 0; true; i++)
