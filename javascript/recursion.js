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

//3. Challenge: getLength

// Get the length of an array using recursion without accessing its length property.

// Input: {Array} array - array whose length is sought
// Output: {Number}
// Is it working? Check my answer
// getLength should be a function

// getLength([1]) should return 1

// getLength([1,2]) should return 2

// getLength([1]) should return 1

// getLength([]) should return 0

function getLength(array) {
    // Base case: If the array is empty, return 0 (length is 0)
      if (array.length === 0) {
        return 0;
      } else {
        // Recursive case: Remove one element from the array and recursively call getLength
        // The length of the array can be determined by adding 1 to the length of the remaining array
        array.pop(); // Remove the last element from the array
        return 1 + getLength(array); // Recursively call getLength on the modified array
      }
    }
    
    // To check if you've completed the challenge, uncomment these console.logs!
    console.log(getLength([1])); // -> 1
    console.log(getLength([1, 2])); // -> 2
    console.log(getLength([1, 2, 3, 4, 5])); // -> 5
    console.log(getLength([])); // -> 0
    
//     Explanation:

// Base Case:
// if (array.length === 0) { return 0; }: This is the base case of our recursive function. If the input array array is empty (length 0), we return 0 to signify that the length is 0.
// Recursive Case:
// else { array.pop(); return 1 + getLength(array); }:
// In the recursive case, we remove one element from the array using array.pop(), which modifies the array by removing the last element.
// We then recursively call getLength(array) on the modified array (with one less element).
// The length of the original array can be determined by adding 1 to the length of the modified array (since we removed one element).
// Recursion Process:
// Each recursive call reduces the size of the array until the base case is reached (empty array), at which point the recursion stops.
// As we return from each recursive call, we add 1 to the count of elements (since we're removing one element in each recursive step).
// Return the Length:
// The final result of getLength(array) is the length of the original array, determined by recursively counting the number of elements.
// This implementation demonstrates how to compute the length of an array using recursion without directly accessing the array's length property. Instead, we simulate the process of counting elements by recursively removing elements until the array becomes empty, and then counting the number of removals (which corresponds to the length of the original array). The provided test cases verify the correctness of the function by checking against expected outputs for arrays of different lengths, including empty arrays.

//4. Challenge: POW

// Write a function that takes two inputs, a base and an exponent, and returns the expected value of base ^ exponent. For instance, if our base is 2 and our exponent is 3, then return 8 because 2^3 = 2*2*2 = 8.

function pow(base, exponent) {
    // Base case: If exponent is 0, return 1 (base^0 is 1)
    if (exponent === 0) {
      return 1;
    } else if (exponent > 0) {
      // Recursive case: Calculate base^exponent using recursion
      return base * pow(base, exponent - 1);
    } else {
      // Handle negative exponents by taking the reciprocal of the positive power
      return 1 / pow(base, -exponent);
    }
  }
  
  // To check if you've completed the challenge, uncomment these console.logs!
  console.log(pow(2, 4)); // Output: 16 (2^4 = 2 * 2 * 2 * 2 = 16)
  console.log(pow(3, 5)); // Output: 243 (3^5 = 3 * 3 * 3 * 3 * 3 = 243)
  console.log(pow(5, 0)); // Output: 1 (5^0 = 1)
  console.log(pow(2, -3)); // Output: 0.125 (2^(-3) = 1 / (2^3) = 1 / 8 = 0.125)
  