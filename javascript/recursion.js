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

//2. Challenge: Factorial

// Write a function that returns the factorial of a number.

// EXAMPLE4! = 4 * 3 * 2 * 1 = 24, so calling factorial(4) should return 24.

// Input: {Number} num - number whose factorial is sought
// Output: {Number}

function factorial(num) {
    // Base case: If num is 0 or 1, return 1 (0! = 1! = 1)
     if (num === 0 || num === 1) {
       return 1;
     } else {
       // Recursive case: Return num multiplied by factorial of (num - 1)
       return num * factorial(num - 1);
     }
   }
   
   // To check if you've completed the challenge, uncomment these console.logs!
   console.log(factorial(4)); // -> 24
   console.log(factorial(6)); // -> 720
   
//    Explanation:

// Base Case:
// if (num === 0 || num === 1) { return 1; }: This is the base case of our recursive function. If the input num is 0 or 1, the factorial is 1 (0! = 1! = 1). So, we directly return 1.
// Recursive Case:
// else { return num * factorial(num - 1); }: This is the recursive case. For any num greater than 1, we calculate the factorial of num by multiplying num with the factorial of (num - 1). This recursively reduces the problem until reaching the base case.
// Recursion Process:
// For example, factorial(4) is computed as follows:
// factorial(4) = 4 * factorial(3)
// factorial(3) = 3 * factorial(2)
// factorial(2) = 2 * factorial(1)
// factorial(1) = 1
// Therefore, factorial(2) = 2 * 1 = 2, factorial(3) = 3 * 2 = 6, and factorial(4) = 4 * 6 = 24.
// Output:
// When factorial(4) is invoked, it returns 24 because 4! (4 factorial) is 24.
// When factorial(6) is invoked, it returns 720 because 6! (6 factorial) is 720.
// This solution demonstrates the use of recursion to calculate the factorial of a number. Each recursive call reduces the problem size by computing the factorial of a smaller number until reaching the base case (num === 0 or num === 1). The result is then computed back up the recursive calls to get the final factorial value.