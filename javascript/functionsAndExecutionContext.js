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

//8. Write a function mergingElements which adds each element in array1 to the corresponding element of array2 and returns the new array.

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

//9. Write a function mergingTripletsAndQuints which takes in two arrays as arguments. 
//This function will return a new array replacing the elements in array1 if they are divisible by 3 or 5. 
//The number should be replaced with the sum of itself added to the element at the corresponding index in array2.

function mergingTripletsAndQuints(array1, array2) {
  // ADD CODE HERE
   // Initialize an empty array to store the merged elements
   let newArray =[]
   for (let i = 0; i < array1.length; i++) {
     // If the element is divisible by 3 or 5, replace it with the sum of itself and the corresponding element in array2.
     if (array1[i] % 3 === 0 || array1[i] % 5 === 0) {
       newArray.push(array1[i] + array2[i]);
     } else {
       // Otherwise, keep the original element from array1.
       newArray.push(array1[i]);
     }
   }
   // After the loop, return the newArray containing the modified or original elements.
   return newArray;
 }
 
 // Uncomment these to check your work!
  console.log(mergingTripletsAndQuints([1, 2, 3, 4, 5, 15], [1, 3, 6, 7, 8, 9])); // expected log [1, 2, 9, 4, 13, 24]
  console.log(mergingTripletsAndQuints([1, 1, 3, 9, 5, 15], [1, 2, 3, 4, 5, 6])); // expected log [1, 1, 6, 13, 10, 21]

  //10. Using a WHILE loop, write a function imAboutToExplodeWithExcitement which prints a countdown from n. 
  //When the countdown gets to 5, print 'Oh wow, I can't handle the anticipation!' When it's at 3, print 'I'm about to explode with excitement!'
  // When the counter is finished, print 'That was kind of a let down'.

  // Define a function called imAboutToExplodeWithExcitement that takes an integer n as a parameter.
function imAboutToExplodeWithExcitement(n){
  // ADD CODE HERE

	//  Start a while loop that runs as long as n is greater than 0. This loop will print the countdown.
  while (n > 0) {
    //If n is equal to 5, print the message "Oh wow, I can't handle the anticipation!"
    if (n === 5) {
      console.log('Oh wow, I can \'t handle the anticipation!');
    	// If n is equal to 3, print the message "I'm about to explode with excitement!"
    } else if (n === 3) {
      console.log('I \'m about to explode with excitement!');
      // For any other value of n, simply print the current value of n.
    } else {
      console.log(n);
    }
    //After each iteration, decrement the value of n by 1.
    n--; // Decrement the countdown
   }
  // After the loop is finished (when n becomes 0), print the message "That was kind of a let down."
  console.log('That was kind of a let down');
}

// Uncomment the line below to check your work!
// Function Invocation: Finally, call the imAboutToExplodeWithExcitement function with an initial value of 10 to start the countdown.
imAboutToExplodeWithExcitement(10); // expected log 10, 9, 8, 7, 6, 'Oh wow, I can't handle the anticipation!', 4, I'm about to explode with excitement!', 2, 1, 'That was kind of a let down'

//11. Using an IF/ELSE statement, write a function closestToTheMark that takes two player inputs as number arguments. The function will return 'Player 1 is closest' or 'Player 2 is closest' depending on which player input is closest to the randomly generated number.
//Note: Due to the output being based off of a random factor, the tests provided below cannot determine if you have solved the prompt exactly. The test cases for this challenge check for the correct data types only.

// Define a function called closestToTheMark that takes two player inputs as number arguments
function closestToTheMark(player1, player2){
  //Generate a random number between 0 and 99 (inclusive) and assign it to the variable theMark.
  const theMark = Math.floor(Math.random() * 100)
  console.log(`If theMark is ${theMark}...`);
  // ADD CODE HERE
   // Calculate the absolute differences between theMark and the player inputs and store it in diff1, diff
  const diff1 = Math.abs(theMark - player1);
  const diff2 = Math.abs(theMark - player2);

  // Compare the differences and return the result
  if (diff1 < diff2) {
    return 'Player 1 is closest';
  } else {
    return 'Player 2 is closest';
  }
}

// Uncomment the line below to check your work!
console.log(closestToTheMark(25, 75));

//12.Using a loop, write a function getTheRange which finds the range (difference between high and low) of arr. 
//The value returned should be an array with the low, high, and range.

function getTheRange(arr){
  // ADD CODE HERE
  if (arr.length === 0) {
    return [null, null, 0];
  }

  let low = arr[0];
  let high = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < low) {
      low = arr[i];
    } else if (arr[i] > high) {
      high = arr[i];
    }
  }

  const range = high - low;

  return [low, high, range];
}
// Uncomment these to check your work!
console.log(getTheRange([3, 2, 5, 4, 7, 9, 10])); // expect log [2, 10, 8]

//13. Write a function addingAllTheWeirdStuff which adds the sum of all the odd numbers in array2 to each element under 10 in array1. 
//Similarly, addingAllTheWeirdStuff should also add the sum of all the even numbers in array2 to those elements over 10 in array1.
//BONUS: If any element in array2 is greater than 20, add 1 to every element in array1.

function addingAllTheWeirdStuff(array1, array2){
  // ADD CODE HERE
  // adds the sum of all odd numbers in array2 to each element under 10 in array1
  // add the sum of all even numbers in array2 to those elements over 10 in array1
  // If any element in array2 is greater than 20, add 1 to every element in array1

  let oddSum = 0;
  let evenSum = 0;
  let isOverThen20 = false;

  array2.forEach(ele=>{
    if(ele % 2 !== 0){
      oddSum += ele;
    } else {
      evenSum += ele;
    }
    
    if(ele >20) {
      isOverThen20 = true;
    }
  })
  
  array1.forEach((ele,i)=>{
    if(ele < 10){
      array1[i] = oddSum + ele;
    }else if(ele > 10){
      array1[i] = evenSum + ele;
    }
    if(isOverThen20){
      array1[i] = array1[i]+1;
    }
  });
  // return array
  return array1;
  }

// Uncomment these to check your work!

 console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15], [1, 2, 3, 4, 5])); // expected log [10, 12, 14, 23, 21]
 console.log(addingAllTheWeirdStuff([1, 3, 5, 17, 15, 1], [1, 2, 3, 4, 5, 22])); // expected log [11, 13, 15, 46, 44, 11]

 //14. Write a function disemvowel that takes in a string and returns a new string with all vowels removed.

 function disemvowel(string) {
  // Use a regular expression to match vowels (case-insensitive)
  const vowelRegex = /[aeiou]/gi;

  // Use replace method to remove all vowels from the input string
  const resultString = string.replace(vowelRegex, '');

  return resultString;
}


// Uncomment these to check your work!
console.log(disemvowel('CodeSmith')); // => 'CdSmth'
console.log(disemvowel('BANANA')); // => 'BNN'
console.log(disemvowel('hello world')); // => 'hll wrld'

//15. Challenge: addWaldo
//Create a function addWaldo that accepts an object with keys being first names and values being last names. 
//For example addWaldo({'Luke': 'Skywalker', 'Harley': 'Quinn', 'Ryan': 'Reynolds'}) should add the key 'Waldo' with the value 'unknown' to the object and return the mutated object.

// ADD CODE HERE 
function addWaldo(namesObject) {
  // Add 'Waldo' with the value 'unknown' to the original object
  namesObject['Waldo'] = 'unknown';

  // Return the mutated object (not necessary, but follows the original pattern)
  return namesObject;
}

// Uncomment these to check your work!
const siliconValley = {'Richard': 'Hendricks', 'Erlich': 'Bachman', 'Bertram': 'Gilfoyle'}
console.log(addWaldo(siliconValley)) // should log:{ Richard: 'Hendricks', Erlich: 'Bachman', Bertram: 'Gilfoyle', Waldo: 'unknown' }

//16. Create a function findWaldo that accepts an object and returns the value associated with the key 'Waldo'. 
//If the key 'Waldo' is not found, the function should return 'Where's Waldo?'

// ADD CODE HERE
function findWaldo(object) {
  // Check if 'Waldo' key exists in the object
  if ('Waldo' in object) {
    // Return the value associated with the key 'Waldo'
    return object['Waldo'];
  } else {
    // Return 'Where's Waldo?' if the key is not found
    return "Where's Waldo?";
  }
}
// Uncomment these to check your work!
const DC = {'Bruce': 'Wayne', 'Harley': 'Quinn'}
const supernatural = {'Sam': 'Winchester', 'Dean': 'Winchester', 'Waldo': 'unknown'}
console.log(findWaldo(DC)) // should log: 'Where's Waldo?'
console.log(findWaldo(supernatural)) // should log: 'unknown'

//17. Write a function arrayBuilder that takes in a count object and returns an array filled with the appropriate numbers of elements. 
//The order of the elements in the array does not matter, but repeated elements should be grouped.
// Brute Force Solution. In this approach, we manually loop through the keys and push each element into the result array the specified number of times.

function arrayBuilder(obj) {
  // Initialize an empty array to store the result
  const resultArray = [];

  // Iterate through the keys of the object
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) { // Check if the key is a direct property of the object
      // Loop to push each element the specified number of times
      for (let i = 0; i < obj[key]; i++) {
        resultArray.push(key);
      }
    }
  }

  return resultArray;
}

// Uncomment these to check your work!
console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
console.log(arrayBuilder({})); // => []

// More Efficient Solution

function arrayBuilder(obj) {
  const resultArray = [];
 
   // Iterate through the keys of the object
   for (const key in obj) {
     if (obj.hasOwnProperty(key)) { // Check if the key is a direct property of the object
       // Use Array.fill and Array.concat to build the result array
       resultArray.push(...Array(obj[key]).fill(key));
     }
   }
 
   return resultArray;
 }
 
 // Uncomment these to check your work!
 console.log(arrayBuilder({'cats': 2, 'dogs': 1})); // => ['cats', 'cats', 'dogs']
 console.log(arrayBuilder({})); // => []

 //18. Convert the function named functionDeclaration to an anonymous function expression and assign it to a variable called myFunc.
 //first

// MODIFY THE CODE BELOW 
function functionDeclaration() {
  return "Hi there!";
}

// console.log(myFunc()) //should log: "Hi there!"

//after solving:
// MODIFY THE CODE BELOW 
function myFunc() {
  return "Hi there!";
}

console.log(myFunc()) //should log: "Hi there!"

//19. For this challenge, convert the function myJob from ES5 syntax to arrow function syntax.
function myJob (name, profession) {
  return `Hi, my name is ${name} and I'm a ${profession}.`
}

console.log(myJob("Jon", "Knights Watchman"));

//Solution

const myJob = (name, profession) => `Hi, my name is ${name} and I'm a ${profession}.`;

console.log(myJob("Jon", "Knights Watchman"));

//20. Challenge: lastLetter
// Create a function lastLetter that takes a word (string) and returns the last character/letter of that string.

// Hint- Remember that each character/letter in a string has an index position that you can access with brackets- '[]'

function lastLetter(word){
  // Check if the word is a non-empty string
  if (word === 'string' && word.length > 0){
    // Return the last character of the string using the word.length -1 as the index
    return word[word.length -1];
  } else {
    //Return null for invalid input (empty string or non-string)
    return null;
  } 
}

// test code

 console.log(lastLetter("hello")); // => o
 console.log(lastLetter("goodbye!")); // => !
 console.log(lastLetter("ZeltoiD")); // => D
 console.log(lastLetter("i love Javascript")); // => t

/*
### Time Complexity:
- The time complexity of this function is \( O(1) \) because accessing the last character of a string by index (`word[word.length - 1]`) is a constant-time operation.

### Space Complexity:
- The space complexity of this function is \( O(1) \) because it only uses a constant amount of additional space regardless of the input size (`word`). The function does not create any new data structures that grow with the input size.

### Summary:
- The `lastLetter` function efficiently returns the last character of a given string using basic string manipulation techniques.
- It handles edge cases such as empty strings or non-string inputs by returning `null`.
- The function is simple, straightforward, and has a constant time and space complexity, making it efficient for practical use cases.
*/
