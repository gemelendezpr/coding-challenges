//1. Create a functon buildSentence that takes three words (strings) 
// and adds them together and console.logs the whole sentence (string) complete with capitalization and punctuation.
function buildSentence(word1, word2, word3) {
    //your code goes here...
    let capitalizedWord1 = word1.charAt(0).toUpperCase() + word1.slice(1);
    
    let sentence = `${capitalizedWord1} ${word2} ${word3}.`;
    console.log(sentence);
  
  }
  
  buildSentence("coding", "is", "awesome") //=> "Coding is awesome."
  buildSentence("we're", "number", "1") //=> "We're number 1."

  //2. Create a function lastLetter that takes a word (string) and console.logs the last character/letter of that word. 
// Hint: Remember that each character/letter in a string has an index position that you can access with brackets: []

function lastLetter(word) {
    //your code goes here...
     const lastChar = word[word.length - 1];
    
    // Log the last character to the console
    console.log(lastChar);
    
  }
  
  //Uncomment the lines below to test your code
  lastLetter("hello") //=> "o"
  lastLetter("goodbye!") //=> "!"
  lastLetter("ZeltoiD") //=> "D"

  //3. Create a function buildGreeting that takes a time (integer) and a name (string) and print a greeting based on the following rules: 
// If time is between 0 (inclusive) and 11 (inclusive): "Good Morning, <name>!
// If time is between 12 (inclusive) and 16 (inclusive): "Good Afternoon, <name>!
// If time is between 17 (inclusive) and 23 (inclusive): "Good Evening, <name>!
// If time is anything else: "That's not a real time, <name>. Maybe you need some sleep!

function buildGreeting(time, name) {
    //your code goes here...
    if ( time >= 0 && time <= 11) {
      console.log(`Good Morning, ${name}!`)
    } else if ( time >=12 && time <= 16 ) {
      console.log(`Good Afternoon, ${name}!`)
    } else if ( time >=17 && time <= 23 ) {
      console.log(`Good Evening, ${name}!`)
    } else {
      console.log(`That's not a real time, ${name}. Maybe you need some sleep!`) 
    }
  }
  
  
  buildGreeting(8, "Maggie") //=> "Good Morning, Maggie!"
  buildGreeting(12, "John") //=> "Good Afternoon, John!"
  buildGreeting(22, "Stacey") //=> "Good Evening, Stacey!"
  buildGreeting(31, "Derrick") //=> "That's not a real time, Derrick. Maybe you need some sleep!"

  //4. indexOf is a function that you can call on a string (string1) and accepts another string (string2) as an argument. 
// It searches through string1 from left to right checking each character to see if it can find string2. 
// If it finds string2 it returns the index position of the FIRST character that matches string2. If it cannot find string2 it returns negative one: -1. 
// Enter the index position you think indexOf will return for each below.

  function indexOf(string1, string2) {
    for (let i = 0; i < string1.length; i++) {
      if (string1[i] === string2) {
        return i; // Return the index of the first character that matches string2
      }
    }
    return -1; // Return -1 if string2 is not found in string1
  }
  
  console.log(indexOf("CodeSmith", "o") === 1);
  console.log(indexOf("hello", "ll") === 2);
  console.log(indexOf("zebra", "z") === 0);
  console.log(indexOf("banana", "B") === -1);