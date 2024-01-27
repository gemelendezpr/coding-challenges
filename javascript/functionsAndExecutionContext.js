// Begginer coding challenges

// 1. Create a function sayHello that accepts a string argument and returns the string 'Hi, ' with the passed-in string added to the end.
// ADD CODE HERE
function sayHello(str) {
  return "Hi," + " " + str;
}
// Uncomment these to check your work!
console.log(sayHello("Mary")); // should log: 'Hi, Mary'
console.log(sayHello("Haley")); // should log: 'Hi, Haley'

// 2. Complete the function droids that accepts an array of strings and iterates through the array using a FOR loop. Update the variable result to "Found Droids!" if the array contains the string "Droids". Otherwise update the variable result to "These are not the droids you're looking for." Return your updated result.
function droids(arr) {
  let result = "";
  // ADD CODE HERE
  // iterate through an array using a FOR loop
  // if arr contains "Droids" push "Found Droids!"
  // if not push "These are not the droids you're looking for."
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Droids") {
      result = "Found Droids!";
    } else {
      result = "These are not the droids you're looking for.";
    }
  }
  return result;
}

// Uncomment these to check your work!
const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"];
const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"];
console.log(droids(starWars)); // should log: "Found Droids!"
console.log(droids(thrones)); // should log: "These are not the droids you're looking for."

// 3.Recreate the function droids from the previous challenge, but instead of using a FOR loop, use the built-in forEach method.
function droids(arr) {
  let result = "";

  arr.forEach(function (item) {
    if (item === "Droids") {
      result = "Found Droids!";
    }
  });
  if (result === "") {
    result = "These are not the droids you're looking for.";
  }
  return result;
}

const starWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"];
const thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"];

console.log(droids(starWars)); // should log: "Found Droids!"
console.log(droids(thrones)); //should log: "These are not the droids you're looking for."

//4. 
