// <<< ---------------------------------------------------------------------- Array cheatsheet ---------------------------------------------------------------------- >>>

// <<< ---------------------------------------------------------------------- Sliding Window Technique ---------------------------------------------------------------------- >>>

/* ========== *
* Challenge 1 *
* =========== */

/* 
1. Longest Substring Without Repeating Characters (Medium)

Given a string s, find the length of the longest substring without repeating characters.

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.

Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
 
Constraints:
0 <= s.length <= 5 * 104
s consists of English letters, digits, symbols and spaces.
*/

// <<< -------------------- BRUTE FORCE SOLUTION -------------------- >>>

/*
 * @param {string} s
 * @return {number}
 */

/* 
var lengthOfLongestSubstring = function(s) {
    // Initialize the maximum length to 0, which will hold the result.
    let maxLength = 0;

    // Outer loop that starts from the first character to the last character of the string
    for (let i = 0; i < s.length; i++) {
        // Initialize an empty set to track unique characters in the current substring
        let charSet = new Set();

        // Inner loop that checks for substrings starting from index 'i' to the end of the string
        for (let j = i; j < s.length; j++) {
            // If the character is already in the set, break out of the loop
            if (charSet.has(s[j])) {
                break;
            }
            // Otherwise, add the character to the set
            charSet.add(s[j]);
            
            // Update the maximum length if the current substring is longer
            maxLength = Math.max(maxLength, j - i + 1);
        }
    }

    // Return the maximum length of the substring without repeating characters
    return maxLength;
};

// Test cases
const testCases = [
    { input: "abcabcbb", expected: 3 },
    { input: "bbbbb", expected: 1 },
    { input: "pwwkew", expected: 3 },
    { input: "", expected: 0 },
    { input: "au", expected: 2 },
    { input: "dvdf", expected: 3 },
    { input: "ohvhjdml", expected: 6 },
];

// Run and log the test cases
testCases.forEach(({ input, expected }, index) => {
    try {
        const result = lengthOfLongestSubstring(input);
        console.log(`Test Case ${index + 1}`);
        console.log(`Input: "${input}"`);
        console.log(`Expected Output: ${expected}`);
        console.log(`Actual Output: ${result}`);
        console.log(result === expected ? "Test Passed\n" : "Test Failed\n");
    } catch (error) {
        console.error(`Error in Test Case ${index + 1}:`, error);
    }
});

*/

// <<< -------------------- OPTIMIZE SOLUTION -------------------- >>>

/*
var lengthOfLongestSubstring = function(s) {
    let charIndexMap = new Map();
    let maxLength = 0;
    let start = 0;
    
    for (let end = 0; end < s.length; end++) {
        if (charIndexMap.has(s[end])) {
            start = Math.max(start, charIndexMap.get(s[end]) + 1);
        }
        charIndexMap.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }
    
    return maxLength;
};

// Test cases
const testCases = [
    { input: "abcabcbb", expected: 3 },
    { input: "bbbbb", expected: 1 },
    { input: "pwwkew", expected: 3 },
    { input: "", expected: 0 },
    { input: "au", expected: 2 },
    { input: "dvdf", expected: 3 },
    { input: "ohvhjdml", expected: 6 },
];

// Run and log the test cases
testCases.forEach(({ input, expected }, index) => {
    const result = lengthOfLongestSubstring(input);
    console.log(`Test Case ${index + 1}`);
    console.log(`Input: "${input}"`);
    console.log(`Expected Output: ${expected}`);
    console.log(`Actual Output: ${result}`);
    console.log(result === expected ? "Test Passed\n" : "Test Failed\n");
});

*/

/* ========== *
* Challenge 2 *
* =========== */

/*

2. Minimum Size Subarray Sum

Given an array of positive integers nums and a positive integer target, return the minimal length of a 
subarray
 whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0

*/