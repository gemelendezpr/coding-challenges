//1. Challenge: fizzbuzz
// Use a loop to iterate through the numbers 1 through 16. Push each number into fb, but push the string "fizz" in place of numbers divisible by 3, "buzz" in place of numbers divisible by 5, and "fizzbuzz" in place of numbers divisible by both 3 and 5.

// Log fb to the console to see the output.

// Hint: Check out the remainder/modulo operator: %.

// Is it working? Check my answer
// fb should be an array
// fb should have a length of 16
// fb should equal [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]

// BRUTE FORCE 

const fb = [];
// ADD CODE HERE

// Initialize a for loop to iterate through the numbers 1 through 16
// Push each number into fb
// if number is divisible by 3 push the string 'fizz'
// if number is divisible by 5 push the string 'buzz'
// if number is divisible by 3 & 5 push the string 'fizzbuzz'

for (let i = 1; i <= 16; i++){
  if (i % 3 === 0 && i % 5 === 0 ){
    fb.push('fizzbuzz');
  } else if (i % 5 === 0) {
    fb.push('buzz');
  } else if (i % 3 === 0) {
    fb.push('fizz');
  } else {
    fb.push(i);
  }
}

console.log(fb);

// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]

// **Time Complexity:**
// - The time complexity of this solution is \( O(n) \), where \( n \) is the number of iterations in the loop (from `1` to `16` in this case).
// - Within each iteration of the loop, we perform a constant number of operations (e.g., modulus operations and conditional checks), which are independent of the input size. Therefore, the time complexity is linear with respect to the number of iterations in the loop, which is \( 16 \) in this specific case.

// **Space Complexity:**
// - The space complexity of this solution is also \( O(n) \), where \( n \) is the length of the `fb` array (i.e., `16` in this case).
// - We are using the `fb` array to store the output values (`numbers`, `'fizz'`, `'buzz'`, `'fizzbuzz'`) based on the conditions evaluated in each iteration of the loop.
// - Since the space required to store the output (`fb` array) scales linearly with the number of iterations in the loop (i.e., the input size `16`), the space complexity is \( O(n) \).

// In summary:
// - Time Complexity: \( O(n) \) where \( n \) is the number of iterations (in this case, `16`).
// - Space Complexity: \( O(n) \) where \( n \) is the length of the output array (`fb`), also `16` in this case.

// The time and space complexity of this solution are efficient for the given problem size (`1` to `16`), as both complexities scale linearly with the input size. The solution involves a single pass through the loop with constant-time operations per iteration, resulting in \( O(n) \) time complexity. Similarly, the space complexity is \( O(n) \) due to the linear space required to store the output array `fb`.

// If the input range were to change (e.g., iterating from `1` to `n`), the time and space complexities would remain \( O(n) \), where \( n \) is the number of iterations or the size of the input range.