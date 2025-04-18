// console.log("hello world")

let games = [
  "Clue",
  "Uno",
  "Call of Duty",
  "Mario",
  "World of Warcraft",
  "Trouble",
  "Dragon Quest",
  "Tetris",
  "Portal Knights",
];

// console.log(games); //gets us the entire array

// games[0] // Clue

// Does the same thing, less customizable
// for (let game of games) {
//     console.log(game)
// }

// iterate forward through the array with a for loop
for (let i = 0; i < games.length; i++) {
  // console.log(games[i]) //lists the name of the item instead of the index number
}

// iterate in reverse
for (let i = games.length - 1; i >= 0; i--) {
//   console.log(games[i])
}

games.reverse(); //reverse the array in place

// console.log(games);


// Objects
let clue = {
    gameName: "Clue",
    videoGame: false,
    players: 5,
    "board game": true,
    difficulty: "easy"
}
 console.log(clue)

 // can get a single property value by using dot notation or bracket notation

 console.log(clue.difficulty)
 console.log(clue["players"])

 // when to use bracket notation
 // when there's a space in the property name
 console.log(clue["board game"])

 // when the property name starts with a number
