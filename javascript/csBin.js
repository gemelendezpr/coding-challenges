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