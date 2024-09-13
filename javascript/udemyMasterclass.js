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
const testCases = [
    { input: 2 },
    { input: 4 },
    { input: 6 },
];

// // Run and log the test cases
// testCases.forEach(({input}, index) =>{
//     const result = countUpAndDown(input);
//     console.log(`Test case ${index + 1}`);
//     console.log(`Input: "${input}"`)
// });


// Big O is O(n). Each loop is O(n) so there's two O(n). But the big picture is O(n). Because the number of operations is ( eventually) bounded by a multiple of n(say, 10n)