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
  
//   Explanation:

// Base Case (if (exponent === 0) { return 1; }):
// If the exponent is 0, we return 1 because any number raised to the power of 0 is 1 (base^0 = 1).
// Recursive Case (else if (exponent > 0) { return base * pow(base, exponent - 1); }):
// If the exponent is positive (exponent > 0), we recursively compute base^exponent by multiplying base with the result of pow(base, exponent - 1).
// Each recursive call reduces the exponent by 1 until reaching the base case (exponent === 0).
// Handling Negative Exponents (else { return 1 / pow(base, -exponent); }):
// If the exponent is negative (exponent < 0), we handle it by taking the reciprocal of the positive power (base^-exponent is equivalent to 1 / (base^exponent)).
// Return the Result:
// The final result of pow(base, exponent) is computed using recursion based on the specified rules for positive, zero, and negative exponents.
// This implementation demonstrates how to compute the power of a base raised to an exponent using recursion. The recursive approach efficiently breaks down the problem into smaller subproblems, leading to a solution that computes the expected value of base^exponent according to the specified rules. The provided test cases verify the correctness of the function by checking against expected outputs for different combinations of base and exponent values, including zero and negative exponents.

//5. Challenge: flow

// Write a function that takes an array of functions and a number that will be piped through all those functions. The input number passes through the first function, whose output is passed as input to the second function, whose output is passed as input to the third function, and so on. Use recursion to return the final output of the last function in the array.

// Input 1: {Number} input - number flowing through all functions
// Input 2: {Array} funcArray - array of functions to pass input through
// Output: {Number} - final output of final function


function flow(input, funcArray) {
    // Base case: if there are no functions left to apply, return the input
    if (funcArray.length === 0) {
        return input;
    } else {
        // Get the first function from the array
        const currentFunction = funcArray[0];
        // Apply the current function to the input
        const output = currentFunction(input);
        // Recursively call flow with the remaining functions and the output of the current function
        return flow(output, funcArray.slice(1));
    }
}

// To check if you've completed the challenge, uncomment this code!
function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num % 4; }
function subtract10(num) { return num - 10; }
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions)); // -> -7


// Explanation:
// - In the `flow` function, we first check the base case. If `funcArray` (array of functions) is empty, meaning there are no functions left to apply, we return the `input` unchanged.
// - Otherwise, we take the first function `currentFunction` from `funcArray`.
// - We apply `currentFunction` to the `input`, which gives us the `output`.
// - Then, we recursively call `flow` with this `output` as the new `input` and with the rest of the functions (`funcArray.slice(1)`) to continue applying the remaining functions.
// - This recursion continues until we've applied all functions in `funcArray`, and finally, we return the result.

//6. Challenge: shuffleCards

// You are creating a card game application with your friend.

// She already wrote a function that divides the deck of cards into top and bottom halves, but needs help writing a function that shuffles the two halves together again.

// Challenge
// Write a function that takes two arrays as inputs, representing the top and bottom halves of a deck of cards, and shuffles them together. The function will return a single array containing the elements from both input arrays interleaved, like so:

// the first element should be the first element of the first input array,

// the second element should be the first element of the second input array,

// the third element should be the second element of the first input array,

// the fourth element should be the second element of the second array,

// and so on.

// The arrays may be of different lengths. After interleaving the elements of the input arrays, any remaining elements should be appended to the end of the array.

// This problem can be solved in many ways, but try to solve it with recursion!

/**
 * Interleave two arrays recursively to shuffle the cards.
 * @param {Array} topHalf - Cards in the top half of the deck.
 * @param {Array} bottomHalf - Cards in the bottom half of the deck.
 * @returns {Array} - The shuffled deck of cards.
 */
function shuffleCards(topHalf, bottomHalf) {
    // Base case: If both arrays are empty, return an empty array
    if (topHalf.length === 0 && bottomHalf.length === 0) {
        return [];
    }

    // Initialize result array
    const result = [];

    // If topHalf is not empty, add its first element to the result
    if (topHalf.length > 0) {
        result.push(topHalf[0]);
        topHalf = topHalf.slice(1); // Remove the first element from topHalf
    }

    // If bottomHalf is not empty, add its first element to the result
    if (bottomHalf.length > 0) {
        result.push(bottomHalf[0]);
        bottomHalf = bottomHalf.slice(1); // Remove the first element from bottomHalf
    }

    // Recursively shuffle the remaining parts of topHalf and bottomHalf
    const remainingCards = shuffleCards(topHalf, bottomHalf);

    // Concatenate the remaining cards to the result
    return result.concat(remainingCards);
}

// Test the shuffleCards function
const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];

const shuffledDeck = shuffleCards(topHalf, bottomHalf);
console.log(shuffledDeck);
// Output:
// ['Queen of Diamonds', 'Jack of Hearts', 'Five of Hearts', 'Ten of Spades', 'Ace of Spades', 'Eight of Clubs']


// In this updated implementation:

// - We use `result.push(topHalf[0])` and `result.push(bottomHalf[0])` to add the first elements of `topHalf` and `bottomHalf` arrays to the `result` array respectively.

// - After pushing the first elements, we use `topHalf = topHalf.slice(1)` and `bottomHalf = bottomHalf.slice(1)` to remove the first elements from `topHalf` and `bottomHalf` arrays. This ensures that we progress to the next elements in each recursive call.

// - We recursively call `shuffleCards` with the remaining parts of `topHalf` and `bottomHalf` arrays (`topHalf.slice(1)` and `bottomHalf.slice(1)`).

// - The recursive calls continue until both `topHalf` and `bottomHalf` arrays are empty, at which point an empty array (`[]`) is returned to terminate the recursion.

// - Finally, we concatenate `result` with `remainingCards` (result of the recursive call) using `result.concat(remainingCards)`, ensuring that the shuffled deck is correctly constructed with interleaved elements from `topHalf` and `bottomHalf`, with any remaining elements appended to the end.

// This updated approach should correctly handle the interleaving of elements and appending of remaining elements, resulting in the shuffled deck of cards as expected. You can test this implementation with various input arrays to verify its correctness.