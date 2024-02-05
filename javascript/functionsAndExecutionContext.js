// Begginer coding challenges

// 1. Create a function sayHello that accepts a string argument and returns the string 'Hi, ' with the passed-in string added to the end.
// ADD CODE HERE
function sayHello(str) {
  return "Hi," + " " + str;
}
// Uncomment these to check your work!
console.log(sayHello("Mary")); // should log: 'Hi, Mary'
console.log(sayHello("Haley")); // should log: 'Hi, Haley'

// 2. Complete the function droids that accepts an array of strings and iterates through the array using a FOR loop.
//  Update the variable result to "Found Droids!" if the array contains the string "Droids". 
// Otherwise update the variable result to "These are not the droids you're looking for." Return your updated result.

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
const StarWars = ["Luke", "Finn", "Rey", "Kylo", "Droids"];
const Thrones = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"];
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

//4. Challenge: For Loops - Updating Array Elements -> Using a FOR loop,
//  write a function addN which adds the argument n to each number in the array arr and returns the updated arr.

//Function to add n to each element in the array
function addN(arr, n){
  // ADD CODE HERE
  // Loop through the array using a for loop  
  for (let i = 0; i < arr.length; i++) {
    // Inside the loop, add n to the current element in the array
    arr[i] += n;
  }
  // Return the updated array
  return arr;
} 

// Uncomment these to check your work!
 console.log(addN([1, 2, 3], 3)); // expected log [4, 5, 6]
 console.log(addN([3, 4, 5], 2)); // expected log [5, 6, 7]

 //5. Challenge: makePlural -> Create a function makePlural that accepts an array argument. 
//  makePlural will iterate through the array, add an 's' to the end of each array element, and return the mutated array.

// Function to make plural by adding 's' to the end of each element
function makePlural(arr){
  // ADD CODE HERE
  // Initialize a for loop to iterate through the array
for (let i = 0; i < arr.length; i++) {
  // inside the loop add an "s" to the end of each array element
	arr[i] += "s";
}
  // return the modified array
  return arr;
} 


const arr1 = ['lion', 'tiger', 'bear']
const arr2 = ['computer', 'video game', 'system']

// Uncomment these to check your work!
 console.log(makePlural(arr1)); // should log: ['lions', 'tigers', 'bears']
 console.log(makePlural(arr2)); // should log: ['computers', 'video games', 'systems']

 //6. Using a FOR loop, write a function getTheSum which adds each element in arr to find the array total.

 // function to get the sum of each element in the array
function getTheSum(arr){
  // ADD CODE HERE
   // Declare a variable total and set it to 0.
  let total = 0;
  // Initialized a for loop to iterate through the array 
  for (let i = 0; i < arr.length; i ++){
   // Add the current element to the total
   // In each iteration, add the current element to the total.
   total += arr[i];
  }
  // Return the calculated total 
  return total;
}

// Uncomment these to check your work!
console.log(getTheSum([3, 6, 9])); // expected log 18
console.log(getTheSum([10, 11, 12])); // expected log 33

//7. Write a function mergingElements which adds each element in array1 to the corresponding element of array2 and returns the new array.
function mergingElements(array1, array2){
  // ADD CODE HERE
  
  let newArray =[]
   // iterate through arrays
  for (let i = 0; i < array1.length; i++) {
    // add the corresponding elemnt in the array 1 to the correspongind element in the array 2
    newArray.push(array1[i] += array2[i]);
  }
  // return the new array
  return newArray;
}

// Uncomment these to check your work!
console.log(mergingElements([1, 2, 3, 4], [5, 6, 7, 8])); // expected log [6, 8, 10, 12]
console.log(mergingElements([7, 3, 6, 0], [3, 9, 17, 81])); // expected log [10, 12, 23, 81]