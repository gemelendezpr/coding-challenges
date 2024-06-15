//1. Challenge: fizzbuzz
// Use a loop to iterate through the numbers 1 through 16. Push each number into fb, but push the string "fizz" in place of numbers divisible by 3, "buzz" in place of numbers divisible by 5, and "fizzbuzz" in place of numbers divisible by both 3 and 5.

// Log fb to the console to see the output.

// Hint: Check out the remainder/modulo operator: %.

// Is it working? Check my answer
// fb should be an array
// fb should have a length of 16
// fb should equal [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]

// <<< ---------------------------------------------------------------------- BRUTE FORCE SOLUTION ---------------------------------------------------------------------- >>>

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

// console.log(fb);

// should log: [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16]
/*
**Time Complexity:**
- The time complexity of this solution is \( O(n) \), where \( n \) is the number of iterations in the loop (from `1` to `16` in this case).
- Within each iteration of the loop, we perform a constant number of operations (e.g., modulus operations and conditional checks), which are independent of the input size. Therefore, the time complexity is linear with respect to the number of iterations in the loop, which is \( 16 \) in this specific case.

**Space Complexity:**
- The space complexity of this solution is also \( O(n) \), where \( n \) is the length of the `fb` array (i.e., `16` in this case).
- We are using the `fb` array to store the output values (`numbers`, `'fizz'`, `'buzz'`, `'fizzbuzz'`) based on the conditions evaluated in each iteration of the loop.
- Since the space required to store the output (`fb` array) scales linearly with the number of iterations in the loop (i.e., the input size `16`), the space complexity is \( O(n) \).

In summary:
- Time Complexity: \( O(n) \) where \( n \) is the number of iterations (in this case, `16`).
- Space Complexity: \( O(n) \) where \( n \) is the length of the output array (`fb`), also `16` in this case.

The time and space complexity of this solution are efficient for the given problem size (`1` to `16`), as both complexities scale linearly with the input size. The solution involves a single pass through the loop with constant-time operations per iteration, resulting in \( O(n) \) time complexity. Similarly, the space complexity is \( O(n) \) due to the linear space required to store the output array `fb`.

If the input range were to change (e.g., iterating from `1` to `n`), the time and space complexities would remain \( O(n) \), where \( n \) is the number of iterations or the size of the input range.
*/

// <<< ---------------------------------------------------------------------- OPTIMIZE SOLUTION ---------------------------------------------------------------------- >>>

/**
 * Print the fizzbuzz sequence for numbers from 1 to n.
 * @param {number} n - The upper limit of the sequence (inclusive).
 */
function fizzBuzz(n) {
    // Iterate from 1 to n
    for (let i = 1; i <= n; i++) {
        let output = '';

        // Check divisibility by 3
        if (i % 3 === 0) {
            output += 'fizz';
        }

        // Check divisibility by 5
        if (i % 5 === 0) {
            output += 'buzz';
        }

        // If output is still empty, use the number itself
        if (output === '') {
            output = i;
        }

        // Print the current output
        console.log(output);
    }
}

// Test the fizzBuzz function with an upper limit of 16
// fizzBuzz(16);


/*

**Optimizations and Explanations:**

1. **Single Iteration with Conditional Checks:**
   - We iterate through numbers from `1` to `n` using a single loop (`for (let i = 1; i <= n; i++)`).
   - Within each iteration, we build the output string (`output`) based on divisibility checks.

2. **Direct Output Generation:**
   - Instead of storing the output values in an array (`fb`), we directly generate and print the output string (`output`) for each number.
   - This approach avoids the overhead of array operations and reduces space complexity.

3. **Conditional Output Construction:**
   - We construct the `output` string by checking divisibility:
     - If the current number (`i`) is divisible by `3`, we append `'fizz'` to `output`.
     - If the current number (`i`) is divisible by `5`, we append `'buzz'` to `output`.
     - If `output` remains empty after the divisibility checks, we use the number itself (`i`) as the `output`.

4. **Efficient Time and Space Complexity:**
   - The optimized solution reduces unnecessary array operations and uses direct output generation within the loop.
   - The time complexity of this optimized solution remains \( O(n) \), where \( n \) is the upper limit (`16` in this case).
   - The space complexity is also reduced to \( O(1) \) because we only use a constant amount of space (`output` string) regardless of the input size.

By adopting these optimizations, we achieve a more efficient implementation of the "fizzbuzz" problem with improved time and space complexity compared to the initial solution using an array (`fb`). This streamlined approach directly generates and prints the output for each number within a single loop iteration, leading to better performance and reduced memory usage.

Feel free to test this optimized solution with different values of `n` to generate and print the fizzbuzz sequence efficiently. If you have any further questions or need additional clarifications, please let me know!
*/ 

// ====================================================================================================================================================
