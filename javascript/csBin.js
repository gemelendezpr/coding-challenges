/* ========== *
* Challenge 1 *
* =========== */

// Replace the blank underscores inside the console logs with the data type (i.e. 'string') you think each value will be. (Leave the quotes)

//Uncomment the lines below to test your code
// console.log(typeof 7.0 === "number")
// console.log(typeof 22 === "number")
// console.log(typeof true === "boolean")

// var myVar;
// console.log(typeof myVar === "undefined")

// myVar = "Gerard"
// console.log(typeof myVar === "string")

//Comment them back out with two forward slashes at the beginning once you have finished


/* ========== *
* Challenge 2 *
* =========== */

//Create a functon buildSentence that takes three words (strings) and adds them together and console.logs the whole sentence (string) complete with capitalization and punctuation.

// function buildSentence(word1, word2, word3) {
//   //your code goes here...
// 	let sentence = word1.charAt(0).toUpperCase() + word1.slice(1) + " "+ word2 + " " + word3.charAt(0).toUpperCase() + word3.slice(1) + ".";
  
//   console.log(sentence);
// }

// buildSentence("coding", "is", "awesome") //=> "Coding is awesome."
// buildSentence("we're", "number", "1") //=> "We're number 1."


/* ========== *
* Challenge 3 *
* =========== */

//Create a function lastLetter that takes a word (string) and console.logs the last character/letter of that word.
// Hint: Remember that each character/letter in a string has an index position that you can access with brackets: []

// function lastLetter(word) {
//   //your code goes here...
//   // Access the last character of the word using its index position
// 	let lastChar = word[word.length - 1];
//   // Output the last character
//   console.log(lastChar);
// }

// //Uncomment the lines below to test your code
// lastLetter("hello") //=> "o"
// lastLetter("goodbye!") //=> "!"
// lastLetter("ZeltoiD") //=> "D"


/* ========== *
* Challenge 4 *
* =========== */

// Create a function buildGreeting that takes a time (integer) and a name (string) and print a greeting based on the following rules:
// If time is between 0 (inclusive) and 11 (inclusive): "Good Morning, <name>!
// If time is between 12 (inclusive) and 16 (inclusive): "Good Afternoon, <name>!
// If time is between 17 (inclusive) and 23 (inclusive): "Good Evening, <name>!
// If time is anything else: "That's not a real time, <name>. Maybe you need some sleep!

// function buildGreeting(time, name) {
//   //your code goes here...
//  // Check if time is between 0 and 11 (inclusive)
//   if (time >= 0 && time <= 11) {
//     // If true, print "Good Morning, <name>!"
//     console.log("Good Morning, " + name + "!");
//   }
//   // Check if time is between 12 and 16 (inclusive)
//   else if (time >= 12 && time <= 16) {
//     // If true, print "Good Afternoon, <name>!"
//     console.log("Good Afternoon, " + name + "!");
//   }
//   // Check if time is between 17 and 23 (inclusive)
//   else if (time >= 17 && time <= 23) {
//     // If true, print "Good Evening, <name>!"
//     console.log("Good Evening, " + name + "!");
//   }
//   // If time is anything else
//   else {
//     // Print "That's not a real time, <name>. Maybe you need some sleep!"
//     console.log("That's not a real time, " + name + ". Maybe you need some sleep!");
//   }
// }


// buildGreeting(8, "Maggie") //=> "Good Morning, Maggie!"
// buildGreeting(12, "John") //=> "Good Afternoon, John!"
// buildGreeting(22, "Stacey") //=> "Good Evening, Stacey!"
// buildGreeting(31, "Derrick") //=> "That's not a real time, Derrick. Maybe you need some sleep!"

// Challenge 5
// indexOf is a function that you can call on a string (string1) and accepts another string (string2) as an argument.
// It searches through string1 from left to right checking each character to see if it can find string2.
// If it finds string2 it returns the index position of the FIRST character that matches string2. If it cannot find string2 it returns negative one: -1.
// Enter the index position you think indexOf will return for each below.

/* ========== *
* Challenge 5 *
* =========== */

// function indexOf(string1, string2) {
//     // Loop through each character of string1
//     for (var i = 0; i < string1.length; i++) {
//       // Check if the current character matches the first character of string2
//       if (string1[i] === string2[0]) {
//         // Check if the substring starting from the current index matches string2
//         if (string1.substring(i, i + string2.length) === string2) {
//           // If true, return the index position
//           return i;
//         }
//       }
//     }
//     // If string2 is not found, return -1
//     return -1;
//   }
  
  // Uncomment the lines below to test your code
  // console.log( indexOf("CodeSmith", "o") === 1 ) //=> true
  // console.log( indexOf("hello", "ll") === 2 ) //=> true
  // console.log( indexOf("zebra", "z") === 0 ) //=> true
  // console.log( indexOf("banana", "B") === -1 ) //=> true
  
  //Challenge 6
// Create a function letterExists that takes a word (string) and a character (string), and console.logs whether that letter can be found inside that word.

// function letterExists(word, letter) {
//     //your code goes here...
//     // Loop through each character of the word
//     for (var i = 0; i < word.length; i++) {
//       // Check if the current character matches the letter
//       if (word[i] === letter) {
//         // If true, the letter exists in the word, so return true
//         console.log(true);
//         return;
//       }
//     }
//     // If the loop finishes without finding the letter, it does not exist in the word, so return false
//     console.log(false);
  
//   }
  
//   letterExists("superman", "e") //=> true
//   letterExists("starship", "S") //=> false
//   letterExists("th1s", "1") //=> true
//   letterExists("he!lo", "!") //=> true

// Challenge 7
// Create a function isPrime that console.logs a boolean indicating if `number` is prime or not.

/* =========== *
* Challenge 7 *
* ============ */

// function isPrime(number) {
//     // your code here...
//     // Check if number is less than 2
//     if (number < 2) {
//       // If true, number is not prime, so return false
//       console.log(false);
//       return;
//     }
    
//     // Check for divisibility by numbers from 2 to the square root of number
//     for (var i = 2; i <= Math.sqrt(number); i++) {
//       // If number is divisible by any number other than 1 and itself, it is not prime
//       if (number % i === 0) {
//         // If true, number is not prime, so return false
//         console.log(false);
//         return;
//       }
//     }
    
//     // If the loop finishes without finding any divisors, number is prime, so return true
//     console.log(true);
//   }
  
//   isPrime(-7); // => false
//   isPrime(2); // => true
//   isPrime(11); // => true
//   isPrime(15); // => false

// Challenge 8
// Create a function range that console.logs all numbers between 'start' and 'end' in sequential order.

/* ========== *
* Challenge 8 *
* =========== */


// function range(start, end) {
//     //your code goes here...
//    let result = ''; // Initialize an empty string to store the output
    
//     // Check if start is less than or equal to end
//     if (start <= end) {
//       // Loop from start to end, inclusive
//       for (var i = start; i <= end; i++) {
//         // Append the current number to the result string
//         result += i.toString();
        
//         // Append a comma and space if it's not the last number
//         if (i !== end) {
//           result += ", ";
//         }
//       }
//     } else {
//       // Loop from start to end, inclusive
//       for (var i = start; i >= end; i--) {
//         // Append the current number to the result string
//         result += i.toString();
        
//         // Append a comma and space if it's not the last number
//         if (i !== end) {
//           result += ", ";
//         }
//       }
//     }
    
//     // Print the result string
//     console.log(result);
//   }
  
//   //Uncomment the lines below to test your code
//   range(1,4) //=> 1, 2, 3, 4
//   range(4,2) //=> '4, 3, 2'


// Group Meetings CSBin 
/* =========== *
* Challenge 9 *
* ============ */
// Return the number of times that the string "hi" appears anywhere in the given string.

// countHi("abc hi ho") → 1
// countHi("ABChi hi") → 2
// countHi("hihi") → 2

function countHi(str) {
  // Step 1: Initialize a counter to keep track of the number of "hi" occurrences
  let count = 0;

  // Step 2: Loop through the string to check for "hi" occurrences
  for (let i = 0; i < str.length - 1; i++) {
    // Step 3: Check if the current character and the next character form the substring "hi"
    if (str.substring(i, i + 2) === 'hi') {
      // If "hi" is found, increment the counter
      count++;
    }
  }

  // Step 4: Return the final count of "hi" occurrences
  return count;
}

// Test cases to check the function
console.log(countHi("abc hi ho")); // Output: 1 (one occurrence of "hi")
console.log(countHi("ABChi hi")); // Output: 2 (two occurrences of "hi")
console.log(countHi("hihi")); // Output: 2 (two occurrences of "hi")

// <<< ---------------------------------------------------------------------- Live Challenges ---------------------------------------------------------------------- >>>
/* =========== *
* Challenge 10 *
* ============ */

/* 
Declare a variable 'animals' and set it an array containing the strings 'dog', 'frog', 'armadillo', 'parrot', and 'cow'.
*/

let animals = ['dog', 'frog', 'armadillo', 'parrot', 'cow']

console.log(animals);

/* 
Declare a function called 'capitalize', which takes in a string as an argument.
If the string contains 5 or more characters, 'capitalize' should return that string with the first letter capitalized.
If the string contains fewer than 5 characters, return a lowercase version of the entire string.
*/

// Define the capitalize function
function capitalize(str) {
  let newStr = '';
  let remainingStr = '';
  
  // If the string contains 5 or more characters, capitalize the first letter
  if (str.length > 5) {
    newStr = str[0].toUpperCase();
    remainingStr = str.slice(1).toLowerCase();
  } else {
    // Otherwise, convert the string to lowercase
    return str.toLowerCase();
  }
  
  // Return the capitalized string
  return newStr + remainingStr;
}



console.log(capitalize('gerardo')) //=> Gerardo 
console.log(capitalize('JOSE')) //=> jose
console.log(capitalize('Juan')) //=> juan
console.log(capitalize('SANPEDRO')) //=> Sanpedro

 // <<< ---------------------------------------------------------------------- Next Challenge ---------------------------------------------------------------------- >>>

/* =========== *
* Challenge 11 *
* ============ */
/* 
Declare a function 'changeElements' which takes an array and a callback as arguments.
'changeElements' should iterate through the array run the callback on each element. It should *replace* each array element with the result of running the callback on that element - i.e., the array should be modified in place rather than creating a copy.
When finished, return the updated array.
*/

// Declare a function 'changeElements' which takes an array and a callback as arguments.
function changeElements(array, callback){
  // Iterate through the array
  for (let i = 0; i < array.length; i++) {
    // Run the callback function on each element and replace the array element with the result
    array[i] = callback(array[i]);
  }
  
  // Return the updated array
  return array;
}

console.log(changeElements(animals, capitalize));

 // <<< ---------------------------------------------------------------------- Next Challenge ---------------------------------------------------------------------- >>>

 /* =========== *
* Challenge 12 *
* ============ */
/*
Declare a function 'NumberedList', which returns a new instance of a 'NumberedList' object when invoked with the 'new keyword.
NumberedList objects should function similarly to arrays - i.e. they store values at number indexes, starting at 0. Any arguments passed into the 'NumberedList' constructor should be sequentially added to the NumberedList when it is instantiated.
NumberedList objects should also contain a length property, which keeps track of the number of elements in the list.

Example:
Creating a Numbered ist from "dog", "bird", dat, Lenth: "dog', 1: "bird', 2: 'cat', Length: 3 }
*/

function NumberedList(...values) {
  this.length = 0;
// set the length as key = arg as parameter
  for (const value of values) {
    this [this.length] = value;
    this.length++
  }
}
const list = new NumberedList('dog', " cat", "snake");
console.log(list); // => NumberedList { 0: 'dog', 1: 'cat', 2: 'snake', 3: 'koala', length: 4 }

 // <<< ---------------------------------------------------------------------- Next Challenge ---------------------------------------------------------------------- >>>
/* =========== *
* Challenge 13 *
* ============ */
/*
Create a function "between50And500" that takes a number as an argument.
"between50And500" should return true if the number passed to it is between 50 and 500 exclusive.
For example, if the input is 45 then your function should return false and if the input is 472 it should return true.
*/



/* Arrow Function Solution

const between20And500 = (num) => (num <= 50) ? false : num < 500;

or

const between20And500 = (num) => num > 50 && num < 500; 

*/

console.log(between50And500(45)) // false
console.log(between50And500(50)) // false
console.log(between50And500(472)) // true
console.log(between50And500(500)) // false

 // <<< ---------------------------------------------------------------------- Next Challenge ---------------------------------------------------------------------- >>>

/* =========== *
* Challenge 14*
* ============ */
/*
Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

filterArray([1, 2, "a", "b"]) ➞ [1, 2]

filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]

filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
*/



function filterArray (array) {
  const result = [];
  for (const elem of array) {  // for (let i = 0) (other option)
    if (typeof elem === 'number') {
      result.push(elem);
    }
  }
  return result;
}


// Arrow Function Solution  

// const filterArray = array => array.filter((item) => typeof item !== "string");

console.log(filterArray([1, 2, "a", "b"])) //➞ [1, 2]

console.log(filterArray([1, "a", "b", 0, 15])) //➞ [1, 0, 15]

console.log(filterArray([1, 2, "aasf", "1", "123", 123])) //➞ [1, 2, 123]

// <<< ---------------------------------------------------------------------- Next Challenge ---------------------------------------------------------------------- >>>

/* =========== *
* Challenge 15 *
* ============ */

// In each input array, every number repeats at least once, except for two. Write a function that returns the two unique numbers.


const returnUnique = (arr) => {
  const dic = {} // { number: rep,  number2: rep2,  number3: rep3 }
  
  arr.forEach(num => {
    //  if (!dic[num]) {
    //    dic[num] = 0
    //  } 
    //  dic[num]++;
    // })

    // or 

    dic[num] = (dic[num] || 0) + 1
    
  })
  
  return arr.filter(num => dic[num] === 1)
    
}


console.log(returnUnique([1, 9, 8, 8, 7, 6, 1, 6])); // ➞ [9, 7]
// 
sole.log(returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1])); // ➞ [2, 1]
// 
sole.log(returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8])); // ➞ [5, 6]

// <<< ---------------------------------------------------------------------- Next Challenge ---------------------------------------------------------------------- >>>

/* =========== *
* Challenge 16 *
* ============ */