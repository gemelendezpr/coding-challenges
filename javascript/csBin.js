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
// console.log(countHi("abc hi ho")); // Output: 1 (one occurrence of "hi")
// console.log(countHi("ABChi hi")); // Output: 2 (two occurrences of "hi")
// console.log(countHi("hihi")); // Output: 2 (two occurrences of "hi")

// <<< ---------------------------------------------------------------------- Live Challenges ---------------------------------------------------------------------- >>>
/* =========== *
* Challenge 10 *
* ============ */

/* 
Declare a variable 'animals' and set it an array containing the strings 'dog', 'frog', 'armadillo', 'parrot', and 'cow'.
*/

// let animals = ['dog', 'frog', 'armadillo', 'parrot', 'cow']

// console.log(animals);

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



// console.log(capitalize('gerardo')) //=> Gerardo 
// console.log(capitalize('JOSE')) //=> jose
// console.log(capitalize('Juan')) //=> juan
// console.log(capitalize('SANPEDRO')) //=> Sanpedro

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

// console.log(changeElements(animals, capitalize));

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
// console.log(list); // => NumberedList { 0: 'dog', 1: 'cat', 2: 'snake', 3: 'koala', length: 4 }

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

// console.log(between50And500(45)) // false
// console.log(between50And500(50)) // false
// console.log(between50And500(472)) // true
// console.log(between50And500(500)) // false

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

// console.log(filterArray([1, 2, "a", "b"])) //➞ [1, 2]

// console.log(filterArray([1, "a", "b", 0, 15])) //➞ [1, 0, 15]

// console.log(filterArray([1, 2, "aasf", "1", "123", 123])) //➞ [1, 2, 123]

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


// console.log(returnUnique([1, 9, 8, 8, 7, 6, 1, 6])); // ➞ [9, 7]
// // 
// console.log(returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1])); // ➞ [2, 1]
// // 
// console.log(returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8])); // ➞ [5, 6]

// <<< ---------------------------------------------------------------------- Next Challenge ---------------------------------------------------------------------- >>>

/* =========== *
* Challenge 16 *
* ============ */


// Write a function called repeatStr which repeats the given string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


function repeatStr(n, string) {
  // base case 
  if (n === 1) return string;
  // recursive call
  return string + repeatStr(n - 1, string);
}


// console.log(repeatStr(6, "I")) // "IIIIII"
// console.log(repeatStr(5, "Hello")) // "HelloHelloHelloHelloHello"

// <<< ---------------------------------------------------------------------- Next Challenge ---------------------------------------------------------------------- >>>

/* =========== *
* Challenge 17 *
* ============ */ 

// Declare a function 'NumArray', which takes in at most two arguments (length and initialValue) and returns an instance of a 'NumArray' object when invoked with the 'new' keyword. NumArray should function similarly to arrays - i.e. they will store values at numbered indexes, starting at 0. All NumArray objects should contain their own 'length' property to keep track of the number of elements in the array. When a NumArray is first created, 

// it should initialize the length property to the length passed-in and set all values to the initial value passed-in (if the initial value is not provided, initialize all values to 0), and if the length is not passed-in, initialize the length property to 0.

// - Task 1: Declare a function 'addAt', which is accessible to ALL instances of 'NumArray'. 'addAt' should take in two arguments (an index and a value), and when invoked on a NumArray instance, should add the value to that NumArray at the passed-in index. Update the NumArray's length property appropriately and return the length of the NumArray.

// - Task 2: Declare a function 'applyFunc', which is accessible to ALL instances of 'NumArray'. 'applyFunc' should take in a callback function as a single argument, and when invoked on a NumArray instance, should run the callback on every element in the NumArray (except the length) and return an instance of NumArray.

// - (Needs Solving)Task 3: Declare a function 'removeFrom', which is accessible to ALL instances of 'NumArray'. 'removeFrom' should take in at most two arguments (an index and a number K), and when invoked on a NumArray instance, should remove K elements from the NumArray starting from the index (inclusive). If the number K is not passed-in, remove only one element at the index. Remember to update the length property properly.


function NumArray(length, initialValue) {
  if (length) {
    this.length = length;
  } else {
    this.length = 0;
  }
  for (let i = 0; i < this.length; i++) {
    if (initialValue) {
      this[i] = initialValue;
    } else {
      this[i] = 0;
    }
  }
}

NumArray.prototype.removeFrom = function (start, end) {

  //Needs Solving
}

NumArray.prototype.applyFunc = function (callback) {
  for (let i = 0; i < this.length; i++) {
    this[i] = callback(this[i]);
  }
  return this;
}

NumArray.prototype.addAt = function(index, value) {
  if (index > this.length - 1){
    this[this.length] = value; 
  } else {
  	for (let i = this.length - 1; index <= i; i--){
    	this[i + 1] = this[i];  
  	}
    this[index] = value;
  }
  return ++this.length;
}

const NewNumArray = new NumArray();

// <<< ---------------------------------------------------------------------- Extra Next Challenge ---------------------------------------------------------------------- >>>

// All OrderedList objects should contain their own 'length' property, which keeps track of the number of items they contain. An OrderedList should also keep track of whether it is sorted in reverse order with a isReversed property. When an OrderedList is first created, it should have a length of 0 and an isReversed value of false.
// - Task 1: Declare a function, 'add', which is accessible to ALL instances of 'OrderedList'. 'add' should take in a number as a single argument, and when invoked on an OrderedList instance, should add the number to that OrderedList in descending order if the list is not reversed, or ascending order if the list is reversed. Update the OrderedList's length property appropriately, and return the length of the OrderedList.
// - Task 2: Declare a function, 'reverse', which is accessible to ALL instances of 'OrderedList'. 'reverse' should take in no arguments, and when invoked on an OrderedList instance, should reverse the order of all elements in that OrderedList (except the 'length' property), and change the value of isReversed.
// - Task 3: Declare a function, 'getMax', which is accessible to ALL instances of 'OrderedList'. 'getMax' should take in no arguments, and when invoked on an OrderedList instance, should return the maximum number in the instance.

// Declare a function 'NumArray', which takes in at most two arguments (length and initialValue) and returns an instance of a 'NumArray' object when invoked with the 'new' keyword. NumArray should function similarly to arrays - i.e. they will store values at numbered indexes, starting at 0. All NumArray objects should contain their own 'length' property to keep track of the number of elements in the array. When a NumArray is first created, 
// it should initialize the length property to the length passed-in and set all values to the initial value passed-in (if the initial value is not provided, initialize all values to 0), and if the length is not passed-in, initialize the length property to 0.
// - Task 1: Declare a function 'addAt', which is accessible to ALL instances of 'NumArray'. 'addAt' should take in two arguments (an index and a value), and when invoked on a NumArray instance, should add the value to that NumArray at the passed-in index. Update the NumArray's length property appropriately and return the length of the NumArray.
// - Task 2: Declare a function 'applyFunc', which is accessible to ALL instances of 'NumArray'. 'applyFunc' should take in a callback function as a single argument, and when invoked on a NumArray instance, should run the callback on every element in the NumArray (except the length) and return an instance of NumArray.
// - Task 3: Declare a function 'removeFrom', which is accessible to ALL instances of 'NumArray'. 'removeFrom' should take in at most two arguments (an index and a number K), and when invoked on a NumArray instance, should remove K elements from the NumArray starting from the index (inclusive). If the number K is not passed-in, remove only one element at the index. Remember to update the length property properly.

// <<< ---------------------------------------------------------------------- CS Prep Cohort 122 (2024) Challenges ---------------------------------------------------------------------- >>>

////////////////////////////
//     Challenge 1
////////////////////////////

// ADD CODE HERE
// function printDriverHeight() {
// 	console.log('The driver is 6 feet tall');  
// }

// // Uncomment the line below to test your code
//  printDriverHeight();
// should print the driver's height


////////////////////////////
//     Challenge 2
////////////////////////////

// // ADD CODE HERE
// function printNavigatorName() {
//   console.log('Jasen')
// }
// // Uncomment the line below to test your code
// printNavigatorName();
// // should print the navigator's name


////////////////////////////
//     Challenge 3
////////////////////////////

// // ADD CODE HERE
// function printName (name) {
//  console.log(name);  
// }
// // When you run your code, it should print the driver's name followed by the navigator's name

// printName('Jasen');
////////////////////////////
//     Challenge 4
////////////////////////////

// ADD CODE HERE
// function printGroupName(driverName, navigatorName) {
//   console.log(`${driverName} and ${navigatorName}`);
// }
// // // Uncomment the line below to test your code
//  printGroupName('Sonny', 'Cher')
// should print 'Sonny and Cher'


////////////////////////////
//     Challenge 5
////////////////////////////

// ADD CODE HERE
// function name should be multiplyHeight
// function multiplyHeight(driverHeight, navigatorHeight) {
//   return driverHeight * navigatorHeight;
// }
// // Uncomment the line below to test your code
// console.log('Challenge 5:', multiplyHeight(66, 72) === 4752)
// // should print 'Challenge 5: true'


////////////////////////////
//     Challenge 6
////////////////////////////

// function square(num){
//   return num ** 2;
// }

// // Uncomment the line below to test your code
// console.log('Challenge 6:', square(3) === 9 && square(-4) === 16)
// // should print 'Challenge 6: true'


////////////////////////////
//     Challenge 7
////////////////////////////

// ADD CODE HERE

// Uncomment the line below to test your code
//  console.log('Challenge 7:', getArea(5) === 78.5)
// should print 'Challenge 7: true'


////////////////////////////
//     Challenge 8
////////////////////////////

// ADD CODE HERE

// When you run it, it should print the following:
// Hey followed by the navigator's name
// Hello followed by the driver's name


////////////////////////////
//     Challenge 9
////////////////////////////

// ADD CODE HERE

// Uncomment the lines below to test your code
// isCodesmithOpen(10);
// isCodesmithOpen(9);
// should print 'Codesmith is open.'
// followed by 'Sorry, Codesmith is closed.'


////////////////////////////
//     Challenge 10
////////////////////////////

// ADD CODE HERE

// Uncomment the lines below to test your code
// smallMediumOrLarge(5);
// smallMediumOrLarge(4);
// smallMediumOrLarge(3);
// smallMediumOrLarge(2);
// smallMediumOrLarge(1);
// should print 'Large please!'
// followed by 'Medium please!' twice
// followed by 'Small please!' twice


////////////////////////////
//     Challenge 11
////////////////////////////

// ADD CODE HERE

// Uncomment the lines below to test your code
// isAGoodBoy(true, true);
// isAGoodBoy(true, false);
// isAGoodBoy(false, true);
// isAGoodBoy(false, false);
// Should print pet, train, train, train


////////////////////////////
//     Challenge 12
////////////////////////////

// ADD CODE HERE

// Uncomment the lines below to test your code
// shouldEatBanana('yellow', true);
// shouldEatBanana('yellow', false);
// shouldEatBanana('green', true);
// shouldEatBanana('green', false);
// shouldEatBanana('red', true);
// Should print 'eat', "don't eat", 'wait', 'wait', "don't eat"


////////////////////////////
//     Challenge 13
////////////////////////////

// ADD CODE HERE

// Uncomment the line below to test your code
// countTo5();
// should print '1, 2, 3, 4, 5'


////////////////////////////
//     Challenge 14
////////////////////////////

// ADD CODE HERE

// Uncomment the line below to test your code
// countMost();
// should print '1, 2, 4, 5'

// <<< ---------------------------------------------------------------------- CS Prep Cohort 122 (2024) CSBIN Saturday Jun 15 Challenges ---------------------------------------------------------------------- >>>

/*
Big Data
Using Higher Order Functions to Reduce Large Amounts of Data
Let's use higher order functions like map, filter, and reduce to gather information and manipulate some data. Here we are importing historical Bitcoin data from 2013 to 2015. Each object contains information like price, market cap, fees, and much more. Let’s see what information we can extract using higher order functions!

To begin scroll down to line 8034 - click and drag the scrollbar that appears on the right as you begin scrolling to get there quickly.

First, let's log the bitcoinData object to investigate the structure of our data.
What is the data type of bitcoinData? Let’s say we just want to look at bitcoin information on May 1st, 2013. How can we do that?
Let’s say we want to create an array containing only the date and price of each day. Use the built-in map method to create an array containing that information.
Let’s create an array that only includes days when exchange volume was not 0. Which method should we use?
Everyday, new Bitcoins are generated. If we want to find out how many were generated all together during the time that’s provided in the dataset, can you figure out how to calculate it using reduce?
Bitcoin price fluctuates a lot. Let’s combine some array methods to find the total number of days when bitcoin price was over $100!
And finally, let’s find the average bitcoin transaction fees between 2013 and 2015. Be sure to floor this value.
## Bonus Challenges
Move onto these challenges only if you have finished the main challenges

1. dayMapper (follow up to challenge 3)

- Write a function called dayMapper. It will accept three parameters: arr (bitcoinData), property1, property2.
- It should use map to return a new array of objects with only the passed in properties on each object.
- If the passed in properties are not present in arr's objects, then it should ignore that property name and it should not appear in the returned array.
2. averageValueOf________ (follow up to challenge 7)

- for each property that has numeric values in bitcoin data, write a function that takes in an array (bitcoinData in this case) and a property name and will return the property's average value in the array.
3. averageValueBonus (double follow up to challenge 7)

- write a function called generalAverageValue that takes two parameters: arr and property.
- arr will be bitcoinData and property will be a property name from the array of objets.
- your function should check to make sure that property's values are numeric. if they're not, it should return an error message of your choosing. If you'd like, you can research throw new Error() and do that instead
- your function should return an array of the form [property, avgValue]
4. Tally bitcoin prices by range

- write a function called priceRangeTally which accepts one argument, arr. Your function should do the following:
- find the maximum bitcoin price
- find the minimum bitcoin price
- choose an arbitrary interval to create ranges (you can do this dynamically or hard code it, up to you)
- Tally how many days of bitcoin prices fall into each range
- console.log a nicely formatted string of each interval and how many days fall into each interval.
- you don't have to return anything, but you can return a tally object or array of your choosing.
5. write a function that will accept an array (bitcoin data) as a param, and return an object with keys that are the names of all the numerical properties of the bitcoindata objects, and whose values are the max values of those properties

5.5. do the same thing, but for minimum values

6. write a function that compares the two objects from number 5 and creates a new object with the same keys, but the values are the ranges of Max - Min

EXAMPLE OF THE DATA
const bitcoinData = [
  {
    "date": "2013-05-01",
    "txVolume(USD)": 108659660.293,
    "txCount": 52443,
    "marketcap(USD)": 1542820000,
    "price(USD)": 139,
    "exchangeVolume(USD)": 0,
    "generatedCoins": 3575,
    "fees": 36.80599998,
    "activeAddresses": null
  },
  {
    "date": "2013-05-02",
    "txVolume(USD)": 96958519.0041,
    "txCount": 55169,
    "marketcap(USD)": 1292190000,
    "price(USD)": 116.38,
    "exchangeVolume(USD)": 0,
    "generatedCoins": 3425,
    "fees": 54.40791613,
    "activeAddresses": null
  },
  {
    "date": "2013-05-03",
    "txVolume(USD)": 84459697.3245,
    "txCount": 55636,
    "marketcap(USD)": 1180070000,
    "price(USD)": 106.25,
    "exchangeVolume(USD)": 0,
    "generatedCoins": 3650,
    "fees": 48.52677208,
    "activeAddresses": null
  },
  {
    "date": "2013-05-04",
    "txVolume(USD)": 41545844.5296,
    "txCount": 48595,
    "marketcap(USD)": 1089890000,
    "price(USD)": 98.1,
    "exchangeVolume(USD)": 0,
    "generatedCoins": 3900,
    "fees": 43.41969441,
    "activeAddresses": null
  },
  {
    "date": "2013-05-05",
    "txVolume(USD)": 56205929.5508,
    "txCount": 49907,
    "marketcap(USD)": 1254760000,
    "price(USD)": 112.9,
    "exchangeVolume(USD)": 0,
    "generatedCoins": 3875,
    "fees": 38.40895622,
    "activeAddresses": null
  },
};

*/





/*
//1. First, let's log the bitcoinData object to investigate the structure of our data.
// console.log(bitcoinData);

//2. What is the data type of bitcoinData? Let’s say we just want to look at bitcoin information on May 1st, 2013. How can we do that?
//const dateFiltered = bitcoinData.filter(el => el.date === "2013-05-01");
// console.log("dateFiltered - ", dateFiltered);

//3. Let’s say we want to create an array containing only the date and price of each day. Use the built-in map method to create an array containing that information.
//const dateAndPrice = bitcoinData.map(el => {
//  return  {date: el.date, price: el["price(USD)"]}; 
//}); 
//console.log(dateAndPrice);

//4. Let’s create an array that only includes days when exchange volume was not 0. Which method should we use?
const volumeFiltered = bitcoinData.filter(el => el["exchangeVolume(USD)"] !== 0);
//console.log("volumeFiltered - ", volumeFiltered);

const zeroVolumeFiltered = bitcoinData.filter(el => el["exchangeVolume(USD)"] === 0);
//console.log("zeroVolumeFiltered - ", zeroVolumeFiltered);

console.log(volumeFiltered.length, zeroVolumeFiltered.length);

//5. Everyday, new Bitcoins are generated. If we want to find out how many were generated all together during the time that’s provided in the dataset, can you figure out how to calculate it using reduce?
const totalGeneratedCoins = bitcoinData.reduce((total, el) => {
  return total + el.generatedCoins;
}, 0);

let generatedSum = 0;
for(let i = 0; i < bitcoinData.length; i++) {
  generatedSum += bitcoinData[i].generatedCoins;
}

console.log("Reduced - ", totalGeneratedCoins);
console.log("For Loop - ", generatedSum);

//6. Bitcoin price fluctuates a lot. Let’s combine some array methods to find the total number of days when bitcoin price was over $100!
const totalDays =  bitcoinData.filter(el => el["price(USD)"] > 100).length
console.log("total days over $100 -", totalDays);

//7. And finally, let’s find the average bitcoin transaction fees between 2013 and 2015. Be sure to floor this value.

const totalTransactionFees = bitcoinData.reduce ((total, el) => {
  return total + el.fees;
}, 0);

const averageTransactionFees = Math.floor(totalTransactionFees / bitcoinData.length);

console.log(averageTransactionFees);

// Bonus 1
function dayMapper(arr, property1, property2) {
  const newArray = arr.map(function(el) {
    const tempItem = {};
    if(el[property1] !== undefined) {
      tempItem[property1] = el[property1];
    }
    if(el[property2] !== undefined) {
      tempItem[property2] = el[property2];
    }
    
    return tempItem;
  });
    
  return newArray;
}

const mappedArray = dayMapper(bitcoinData, "date", "price(USD)");

console.log(mappedArray);

// Bonus 2

function averageValueOf(arr, property) {
  const numValues = arr.filter(el => typeof el[property] === 'number');
  const total = numValues.reduce((sum, el) => sum + el[property], 0);
  return total / numValues.length;
}

const averagePrice = averageValueOf(bitcoinData, 'price(USD)');
const averageFees = averageValueOf(bitcoinData, 'fees');
console.log(averagePrice);
console.log(averageFees);

// **** BONUS ANSWERS PROVIDED BY INSTRUCTOR 

// BONUS
// 1.
function dayMapper(arr, property1, property2) {
  return arr.map((data) => {
    const newObj = {};
    if (data.hasOwnProperty(property1)) {
      newObj[property1] = data[property1];
    }
    if (data.hasOwnProperty(property2)) {
      newObj[property2] = data[property2];
    }
    return newObj;
  });
}

// 2.
function averageValueOfTxVolume(arr) {
  const propValues = arr.map((data) => data["txVolume(USD)"]);
  const total = propValues.reduce((acc, curr) => acc + curr, 0);
  return total / propValues.length;
}

function averageValueOfTxCount(arr) {
  const propValues = arr.map((data) => data["txCount"]);
  const total = propValues.reduce((acc, curr) => acc + curr, 0);
  return total / propValues.length;
}

function averageValueOfMarketcap(arr) {
  const propValues = arr.map((data) => data["marketcap(USD)"]);
  const total = propValues.reduce((acc, curr) => acc + curr, 0);
  return total / propValues.length;
}

function averageValueOfPrice(arr) {
  const propValues = arr.map((data) => data["price(USD)"]);
  const total = propValues.reduce((acc, curr) => acc + curr, 0);
  return total / propValues.length;
}

function averageValueOfExchangeVolume(arr) {
  const propValues = arr.map((data) => data["exchangeVolume(USD)"]);
  const total = propValues.reduce((acc, curr) => acc + curr, 0);
  return total / propValues.length;
}

function averageValueOfGeneratedCoins(arr) {
  const propValues = arr.map((data) => data["generatedCoins"]);
  const total = propValues.reduce((acc, curr) => acc + curr, 0);
  return total / propValues.length;
}

function averageValueOfFees(arr) {
  const propValues = arr.map((data) => data["fees"]);
  const total = propValues.reduce((acc, curr) => acc + curr, 0);
  return total / propValues.length;
}

// 3.
function generalAverageValue(arr, property) {
  const propValues = arr.map((data) => data[property]);
  const numValues = propValues.filter((value) => typeof value === "number");
  if (numValues.length === 0) {
    throw new Error(`Property ${property} does not have numeric values`);
  }
  const total = numValues.reduce((acc, curr) => acc + curr, 0);
  const avgValue = total / numValues.length;
  return [property, avgValue];
}

// 4.
function priceRangeTally(arr) {
  const prices = arr.map((data) => data["price(USD)"]);
  const max = Math.max(...prices);
  const min = Math.min(...prices);
  const interval = 100;
  const numRanges = Math.ceil((max - min) / interval);
  const tally = Array(numRanges).fill(0);
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    const rangeIndex = Math.floor((price - min) / interval);
    tally[rangeIndex]++;
  }
  for (let i = 0; i < numRanges; i++) {
    const rangeMin = min + i * interval;
    const rangeMax = Math.min(rangeMin + interval, max);
    const rangeLabel = `$${rangeMin.toFixed(2)} - $${rangeMax.toFixed(2)}`;
    console.log(`${rangeLabel}: ${tally[i]} days`);
  }
}

// 5.
function max(arr) {
  const numericalProperties = Object.keys(arr[0]).filter(
    (key) => typeof arr[0][key] === "number",
  );
  const result = {};

  for (const property of numericalProperties) {
    const max = Math.max(...arr.map((item) => item[property]));
    result[property] = max;
  }

  return result;
}

// 5.5
function min(arr) {
  const numericalProperties = Object.keys(arr[0]).filter(
    (key) => typeof arr[0][key] === "number",
  );
  const result = {};

  for (const property of numericalProperties) {
    const min = Math.min(...arr.map((item) => item[property]));
    result[property] = min;
  }

  return result;
}

// 6
function ranges(maxObj, minObj) {
  const result = {};

  for (const key of Object.keys(maxObj)) {
    const range = `${minObj[key]} - ${maxObj[key]}`;
    result[key] = range;
  }

  return result;
}


*/


// <<< ---------------------------------------------------------------------- CS Prep Cohort 122 (2024) POD  ---------------------------------------------------------------------- >>>
/*
POD Day 3 (Jun 12) - Regular - LargestAndSmallest -
The function largestAndSmallest should take one parameter, an array, and return a new array containing the largest and smallest elements from the original array.

EX:

[1, 2, 3, 4, 5] --> [1, 5]
[90, 30, 44, 66, 10] --> [10, 90]
[16, -70, 122] --> [-70, 122]
*/

function largestAndSmallest(array) {
  // If array is empty return the empty array
  // Initialize two variables, one to keep track of the smallest element in the array and other one for the largest element in the array
  // Iterate through the array 
  // Update the largest element if its larger than the current element in the variable
  // Update the smallest element if its the smaller element in the variable 
  // Return the new array containing the smallest and largest elements 

  if (array.length === 0) {
    return [];
  }

  let smallestInArray = array[0];
  let largestInArray = array[0];

    for (let i = 1; i < array.length; i++) {
      if (array[i] > smallestInArray) {
        smallestInArray = array[i];
      } 
      else if (array[i] < largestInArray) {
        largestInArray = array[i];
      }
    }
  return [smallestInArray, largestInArray];

  //   or

  // return [Math.min(...array), Math.max(...array)];
}

// console.log(largestAndSmallest([1, 2, 3, 4, 5])); // should log [1, 5]
// console.log(largestAndSmallest([90, 30, 44, 66, 10])); // should log [10, 90]
// console.log(largestAndSmallest([16, -70, 122])); // should log [-70, 122]
//                    or with a message (down below): 
// const inputArray = [1, 2, 3, 4, 5];
// const result = largestAndSmallest(inputArray);
// console.log("Result of finding the smallest and largest elements in array:", result); // should return [1, 5]


function twoSum(arr, target) {
  // Create an empty object to store the complement values
  // iterate over the element in the array
  // calculate the complement of the current element
  // check if the complement exists in the map
  // if the complement is found, return true
  // otherwise, add the complement to the map with the current element as the key
  // if no pair is found, return false
  const complementMap = {};
  for (let i = 0; i < arr.length; i++) {
      const complement = target - arr[i];
      if (complementMap[arr[i]] !== undefined) {   
          return true;
      }   
      complementMap[complement] = i;
  }
  return false;
}

// console.log(twoSum([1, 2, 3, 4, 5], 9));  // should return true (4 + 5)
// console.log(twoSum([1, 2, 3, 4, 5], 10)); // should return false


function reverseInt(int) {
  // Initialize a variable to hold the reversed number
  // Iterate until the number is zero
  // Get the last digit of the number
  // Add the last digit to the reversed number
  // Remove the last digit from the number
  // Return the reversed number
  let reversed = 0;

  while (int > 0) {
      let lastDigit = int % 10;
      
      reversed = reversed * 10 + lastDigit;
      
      int = Math.floor(int / 10);
  }
  return reversed;
}

function reverseIntTests() {
  console.log(reverseInt(1234), ' -> ', 4321); // should return 4321
  console.log(reverseInt(1), ' -> ', 1);       // should return 1
  console.log(reverseInt(87654), ' -> ', 45678); // should return 45678
  console.log(reverseInt(13542), ' -> ', 24531); // should return 24531
}

reverseIntTests();

// <<< ---------------------------------------------------------------------- CS Prep Cohort 122 (2024) CSBIN In Class  ---------------------------------------------------------------------- >>>


////////////////////////////
//     Challenge 1
////////////////////////////

/*
Challenge 1
Mode

Given an array, return its mode (the number that appears most often)

If there is a tie, return the greater number of tied modes.

ex. mode([1,1,1,2,2,3]) -> returns 1

ex. mode([1,3,1,3,1,3]) -> returns 3

*/

// FIND MODE

// Given an array, return its mode (the number that appears most often)
// If there is a tie, return the greater number of tied modes.
// ex. mode([1,1,2,2,3,3,2,4,5]) === 2 // true because 2 appears most often in the array (the number 2 appears 3 times)
// ex. mode([1,1,1,3,3,3]) === 3 // true, because 3 and 1 are tied as the mode, but 3 > 1 and the mode function will return the greater of the mode values
function mode(array) {
  // Goal: how many times each number appears?
  // Initialize the mode with the first element of the array and count the max with its frequency 
  // In each number if its frequency is greater than the max count store lets upgrade the mode and the maximus count 
  // But if the frequency are equal to the max count but the number is greater than the current mode, we update the mode to the current number 
  // First initialize an variable to an empty object to track the number that has been iterated 
  const frequency = {};
  // Count the frequency of each number inside the array 
  for (let num of array) {
    if (frequency[num]) {
      frequency[num]++;
    } else {
      frequency[num] = 1;
    }
    console.log(`Processing ${num}, frequency:`, frequency);
  }
  // Initialize other variables to store the element and its frequency
  let mode = array[0];
  let maxCount = frequency[mode];

  console.log(`Initial mode: ${mode}, Initial maxCount: ${maxCount}`);
  // iterate through the frequency object to find the mode 
  for (let num in frequency) {
    console.log(`Check number ${num} with the frequency ${frequency[num]}`);
    if (frequency[num] > maxCount || (frequency[num] === maxCount && Number(num) > mode)) {
      mode = Number(num);
      maxCount = frequency[num];
      console.log('New mode:', mode, 'New maxCount:', maxCount);
    }
  } 
  // 
  return mode;
}

// Extension: solve this in 0(n) time

function modeTests() {
  console.log(mode([1,2,2,1,1,3, 7, 3]), ' -> 1');
  console.log(mode([1]), '1');
  console.log(mode([2, 2, 2, 2, 3, 3, 3]), ' -> 2');
}

// 

