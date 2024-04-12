//1. Challenge: Repeater

// Write a function that takes an input character and returns that character repeated 5 times using recursion. For example, if the input is 'g', then the output should be 'ggggg'.

// Input: {String} char
// Output: {String}
// Is it working? Check my answer
// repeater should be a function

// repeater(g) should return ggggg

// repeater(j) should return jjjjj

console.log('Hello, world!'); // => 'Hello, world!'

function repeater(char) {
let repeatedString = '';
  
  // Iterate 5 times to concatenate the character to the result string
  for (let i = 0; i < 5; i++) {
    repeatedString += char;
  }
  
  return repeatedString;
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(repeater('g')); // => 'ggggg'
console.log(repeater('j')); // => 'jjjjj'
