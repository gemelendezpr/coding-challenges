// <<< ---------------------------------------------------------------------- JavaScript Algorithms and Data Structures Masterclass ---------------------------------------------------------------------- >>>
// By Colt Steele

// <<< ---------------------------------------------------------------------- Big O Notation ---------------------------------------------------------------------- >>>
/* ========== *
* Exmample 1 *
* =========== */

// Suppose we want to write a function that calculates the sum of all numbers from 1 up to(and including) some number n.

// <<< -------------------- BRUTE FORCE SOLUTION -------------------- >>>
// //Solution(1)
// function addUpTo(n) {
//     let total = 0; 

// for (let i = 1; i <= n; i++) {
//     total += i;
// } 
//    return total;
// }

// <<< -------------------- OPTIMIZE SOLUTION -------------------- >>>

//Solution(2)
function addUpTo(n) {
   return n * (n + 1) / 2;
}



// // Test cases
// const testCases = [
//     { input: 3, expected: 6 },
//     { input: 6, expected: 21 },
//     { input: 100, expected: 5050 },
// ];

// // Run and log the test cases
// testCases.forEach(({ input, expected }, index) => {
//     const result = addUpTo(input);
//     console.log(`Test Case ${index + 1}`);
//     console.log(`Input: "${input}"`);
//     console.log(`Expected Output: ${expected}`);
//     console.log(`Actual Output: ${result}`);
//     console.log(result === expected ? "Test Passed\n" : "Test Failed\n");
// });

// Speed test
// let t1 = performance.now();
// addUpTo(1000000000);
// let t2 = performance.now();
// console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`)

// Speed Results
// Solution(1) = Time Elapsed: 0.950936334013939 seconds
// Solution(2) = Time Elapsed: 0.000015582919120788574 seconds

// Explanation: This speed time would be an aproximation but is not the most effective test to identify the most effective solution. The problem with time is: different machine will record different times, the same machince will record different times, for fast algorithms, speed measurements may not be precise enough. That's where Big O Notation comes in. 
// Rather than counting seconds, which are so variable... Let's count the number of simple operations the computer has to perform (Because thar remain constant not matter the computer your on). Like "Counting Operations"

/* ========== *
* Exmample 2 *
* =========== */

function countUpAndDown(n) {
    console.log("Going up!");
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log("Back down. Bye!");
}

// // Test cases
// const testCases = [
//     { input: 2 },
//     { input: 4 },
//     { input: 6 },
// ];

// // Run and log the test cases
// testCases.forEach(({input}, index) =>{
//     const result = countUpAndDown(input);
//     console.log(`Test case ${index + 1}`);
//     console.log(`Input: "${input}"`)
// });


// Big O is O(n). Each loop is O(n) so there's two O(n). But the big picture is O(n). Because the number of operations is ( eventually) bounded by a multiple of n(say, 10n)
// <<< ---------------------------------------------------------------------- Problem Solving ---------------------------------------------------------------------- >>>

// Step 1: Understand the problem
// Step 2: Explore Concrete Examples 
// Step 3: Break it down 
// Step 4: Solve/ Simplify 
// Step 5: Look back and refactor

/* ========== *
* Exmample 1 *
* =========== */

// Write a function which takes two numbers and return their sum.

// 1. Can I restate the problem in my own words?
// "Implement addition"
// 2. What are the inputs that go into the problem?
    // - integers?
    // - floats?
    // - what about for larger numbers? 
// 3. What are the outputs that should come from the solution to the problem?
    // - int? float? string?
// 4. Can the outputs be determine from the inputs? In other words, do I have enough information to solve the problem? (You may not be able to answer this question until you set about solving the problem. Thats okay; its still worth considering the question early at this stage.)
    // - What happen if we only receive one number? Do we add o or undefined etc
// 5. How should I label the important pieces of data that are a part of the problem?
    // - add -num1 - num2 -sum 
    
// <<< -------------------- (regular expression) SOLUTION -------------------- >>>


    function charCount(str) {
        // Make an object to return at the end
    let result = {};
    // Loop over string, for each character...
    for (let char of str) {
        // Convert to lowercase
        char = char.toLowerCase();
        // If the char is a letter/number AND is a key in object, add one to count
        if (/[a-z0-9]/.test(char)) {
            result[char] = (result[char] || 0) + 1;
        }
        // If character is something else (space, period, etc.) don't do anything
    }
    // Return object at end
    return result;
    }

// <<< -------------------- (characater code is faster (Non-regular expression) OPTIMIZE SOLUTION -------------------- >>>

    function charCount(str) {
        // Make an object to return at the end
    let result = {};
    // Loop over string, for each character...
    for (let char of str) {
        if (isAlphaNumeric(char)) {
            // Convert to lowercase
            char = char.toLowerCase();
            // If the char is a letter/number AND is a key in object, add one to count
            result[char] = (result[char] || 0) + 1;
        }
    }
    // Return object at end
    return result;
    }

    function isAlphaNumeric(char){
        let code = char.charCodeAt (0);
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // numeric (0-9)
            !(code > 96 && code < 123)) { // numeric (0-9)
          return false;
        }
        return true;
    }


    // Test Cases
    // const testCases = [
    //     { input: "hello", expected: {h:1, e:1, l:2, o:1} },
    //     { input: "BYE", expected: {b:1, y:1, e:1 } },
    //     { input: "H e l l o", expected: {h: 1, e: 1, l: 2, o: 1} },
    //     { input: " ", expected: {}},
    //     { input: "Hello, World! 123", expected: { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1, "1": 1, "2": 1, "3": 1 } }
    // ]

    // testCases.forEach(({ input, expected }, index) => {
    //     const result = charCount(input);
    //     console.log(`Test case ${index + 1}`);
    //     console.log(`Input: "${input}"`);
    //     console.log(`Expected Output:`, expected);
    //     console.log(`Actual Output:`, result);
    //     console.log(JSON.stringify(result) === JSON.stringify(expected) ? "Test Passed\n" : "Test Failed\n");
    // });

    // <<< ---------------------------------------------------------------------- Problem Solving Patterns ---------------------------------------------------------------------- >>>

    // <<< -------------------- 1st Pattern "FREQUENCY COUNTER" -------------------- >>>

    // This pattern uses objects or sets to collect values/ frequencies of values. This can often avoid the need for nested loops or O(N^2) operations with arrays / strings.

    // Write a function called same, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second arrays. The frequency of values must be the same. 
    
    /*
    Here’s the solution:

    1. Check Array Lengths: If the arrays don’t have the same length, we can return false immediately since they can't have corresponding squared values in equal frequency.
    2. Use Frequency Counters: Create two frequency counters (objects) for each array:
    - One counter will count the frequency of each number in the first array.
    - The other will count the frequency of each squared value in the second array.
    3. Compare Counters: Check that:
    - Every key in the first counter has its squared key in the second counter.
    - The frequency of each key in the first counter matches the frequency of its squared key in the second counter. */

    function same(arr1, arr2) {
        // Step 1: Check if arrays have the same length
        if (arr1.length !== arr2.length) return false;
    
        // Step 2: Initialize frequency counters for both arrays
        const frequencyCounter1 = {};
        const frequencyCounter2 = {};
    
        // Step 3: Populate frequencyCounter1 with counts of values in arr1
        for (let val of arr1) {
            frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
        }
    
        // Step 4: Populate frequencyCounter2 with counts of values in arr2
        for (let val of arr2) {
            frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
        }
    
        // Step 5: Check if each value in arr1 has a corresponding squared value in arr2
        for (let key in frequencyCounter1) {
            const squaredKey = key ** 2;
            if (!(squaredKey in frequencyCounter2)) {
                return false; // No corresponding squared value
            }
            if (frequencyCounter2[squaredKey] !== frequencyCounter1[key]) {
                return false; // Frequency mismatch
            }
        }
    
        return true;
    }

    // Test Cases
// const testCases = [
//     { input: [[1, 2, 3], [1, 4, 9]], expected: true },
//     { input: [[1, 2, 3], [1, 9]], expected: false },
//     { input: [[1, 2, 1], [4, 4, 1]], expected: false },
//     { input: [[2, 3, 4], [9, 4, 16]], expected: true },
//     { input: [[], []], expected: true },                  // Edge case: both arrays empty
//     { input: [[1, 2, 3], []], expected: false },          // Edge case: one array empty
//     { input: [[1, 1, 1], [1, 1, 1]], expected: false }    // Edge case: values without squares
// ];

// testCases.forEach(({ input, expected }, index) => {
//     const [arr1, arr2] = input;
//     const result = same(arr1, arr2);
//     console.log(`Test case ${index + 1}`);
//     console.log(`Input: arr1 = [${arr1}], arr2 = [${arr2}]`);
//     console.log(`Expected Output: ${expected}`);
//     console.log(`Actual Output: ${result}`);
//     console.log(result === expected ? "Test Passed\n" : "Test Failed\n");
// });

    