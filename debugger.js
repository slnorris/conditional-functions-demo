console.log("let's try the debugger");

let counter = 2;

for (let i = 0; i < 5; i++) {
  //   console.log("iteration", i + 1);
  counter = counter * 2;
}

// We want to create an array of super hero objects
// We will prompt the user using prompt() for a name, power, weakness
// Create an object from the user input
// Add the objects to the superhero array

let superHeroes = [];

for (let i = 0; i < 5; i++) {
  let newHero = {};

  let heroName = prompt("Give me a super hero name");

  newHero.heroName = heroName; // assign a heroName property to our object

  let superPower = prompt("What is their super power?");
  newHero.superPower = superPower;

  let weakness = prompt("What is their weakness?");
  newHero.weakness = weakness;

  superHeroes.push(newHero);
}

console.log(superHeroes);
