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
subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

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

// Problem Statement Recap:
// Given an array of positive integers nums and a positive integer target, we need to find the minimal length of a subarray whose sum is greater than or equal to target. If no such subarray exists, return 0.

// <<< -------------------- BRUTE FORCE SOLUTION -------------------- >>>

/*
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */

/*

var minSubArrayLen = function(target, nums) {
    // Initialize the minimum length of the subarray to be a large number.
    // This will be updated as we find valid subarrays.
    let minLength = Infinity;
    
    // Iterate over the starting index of the subarray.
    for (let start = 0; start < nums.length; start++) {
        // Initialize the sum for the current subarray and its length.
        let sum = 0;
        
        // Iterate over the ending index of the subarray from the starting index.
        for (let end = start; end < nums.length; end++) {
            // Add the current element to the sum.
            sum += nums[end];
            
            // Check if the current sum is greater than or equal to the target.
            if (sum >= target) {
                // Update the minimum length if the current subarray length is smaller.
                minLength = Math.min(minLength, end - start + 1);
                // Break out of the inner loop as we have found a valid subarray.
                break;
            }
        }
    }
    
    // If no valid subarray was found, return 0; otherwise, return the minimum length.
    return minLength === Infinity ? 0 : minLength;
};

*/

// Explanation of the Code:

// 1. Initialization:
// minLength is initialized to Infinity to ensure that any valid subarray found will update it to a smaller value.
// 2. Outer Loop (Starting Index):
// The outer loop iterates over each possible starting index of the subarray (start).
// 3. Inner Loop (Ending Index):
// For each starting index, the inner loop calculates the sum of the subarray starting at start and ending at end.
// If the sum of the current subarray is greater than or equal to target, update minLength to the smaller value between minLength and the current subarray length.
// Break out of the inner loop as we have found a valid subarray.
// 4. Return Result:
// After checking all possible subarrays, return 0 if no valid subarray was found (i.e., minLength is still Infinity); otherwise, return minLength.

// Time Complexity:
// Brute Force Complexity: The outer loop runs n times, and for each iteration, the inner loop may run up to n times, resulting in a time complexity of O(n^2), where n is the length of the array nums.

// Space Complexity:
// Space Complexity: The space complexity is O(1) because we only use a few extra variables regardless of the input size.

// Potential Improvements:
// Sliding Window Approach: A more efficient approach would be to use a sliding window technique which can reduce the time complexity to O(n). The sliding window approach maintains a window with a sum greater than or equal to the target and dynamically adjusts the window size to find the minimum length subarray.

// <<< -------------------- OPTIMIZE SOLUTION -------------------- >>>

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let minLength = Infinity;  // Initialize minLength to a very large value
    let left = 0;              // Left pointer of the sliding window
    let sum = 0;               // Variable to store the sum of the current window

    // Iterate through the array with the right pointer
    for (let right = 0; right < nums.length; right++) {
        sum += nums[right];  // Add the current element to the sum

        // Shrink the window as small as possible while the sum is still >= target
        while (sum >= target) {
            // Update the minimum length
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left];  // Subtract the element at the left pointer from the sum
            left++;  // Move the left pointer to the right to reduce the window size
        }
    }

    // Return 0 if no valid subarray was found, otherwise return the minLength
    return minLength === Infinity ? 0 : minLength;
};

// // Test case 1: Basic example with a valid subarray
// console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); 
// // Output: 2 (subarray [4, 3] has sum >= 7 and length 2)

// // Test case 2: Single element array equal to target
// console.log(minSubArrayLen(4, [1, 4, 4])); 
// // Output: 1 (subarray [4] has sum >= 4 and length 1)

// // Test case 3: Array with no subarray that meets the target
// console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])); 
// // Output: 0 (no subarray has sum >= 11)

// // Test case 4: Array with multiple valid subarrays
// console.log(minSubArrayLen(8, [1, 2, 3, 4, 5])); 
// // Output: 2 (subarray [3, 5] has sum >= 8 and length 2)

// // Test case 5: Array where the minimum length subarray is the entire array
// console.log(minSubArrayLen(15, [1, 2, 3, 4, 5])); 
// // Output: 5 (the entire array has sum >= 15 and length 5)

// Test cases
const testCases = [
    { input: { target: 7, nums: [2, 3, 1, 2, 4, 3] }, expected: 2 },
    { input: { target: 4, nums: [1, 4, 4] }, expected: 1 },
    { input: { target: 11, nums: [1, 1, 1, 1, 1, 1, 1, 1] }, expected: 0 },
    { input: { target: 8, nums: [1, 2, 3, 4, 5] }, expected: 2 },
    { input: { target: 15, nums: [1, 2, 3, 4, 5] }, expected: 5 },
];

// Run and log the test cases
testCases.forEach(({ input, expected }, index) => {
    const result = minSubArrayLen(input.target, input.nums);
    console.log(`Test Case ${index + 1}`);
    console.log(`Input: "target=${input.target}, nums=${input.nums}"`);
    console.log(`Expected Output: ${expected}`);
    console.log(`Actual Output: ${result}`);
    console.log(result === expected ? "Test Passed\n" : "Test Failed\n");
});

/*
### Explanation:
- **Test Cases Structure:**
  - Each test case is an object containing `input` (with `target` and `nums` array) and `expected` output.
  - The `input` property holds an object with the `target` value and the `nums` array.

- **Running Test Cases:**
  - The `forEach` loop iterates through each test case, extracts the `target` and `nums`, and calls the `minSubArrayLen` function.
  - It then compares the function's result with the `expected` output.
  - It logs the results, including whether the test passed or failed.

This code structure is useful for organizing and running multiple test cases systematically. 
*/

/*
### Explanation of the Sliding Window Approach:
1. **Initialize Variables:**
   - `minLength` is set to `Infinity` to store the minimum length of any subarray that meets the condition.
   - `left` is the left boundary of the sliding window.
   - `sum` keeps track of the sum of the current window.

2. **Expand the Window:**
   - The `right` pointer iterates over the array, expanding the window by adding the current element (`nums[right]`) to the `sum`.

3. **Shrink the Window:**
   - Once the sum of the current window is greater than or equal to the target, start shrinking the window from the left by moving the `left` pointer to the right.
   - After moving `left`, subtract the element at the `left` pointer from the `sum` to maintain the window's sum.
   - During each shrinkage, update `minLength` with the smaller value between `minLength` and the current window size (`right - left + 1`).

4. **Return Result:**
   - If no valid subarray is found, `minLength` will remain `Infinity`, so return `0` in that case.
   - Otherwise, return the smallest subarray length found.

### Time Complexity:
- **Time Complexity:** The time complexity is \( O(n) \) because each element in the array is processed at most twice — once when expanding the window and once when shrinking the window.

### Space Complexity:
- **Space Complexity:** The space complexity is \( O(1) \) since we are using only a few extra variables, regardless of the input size.

This approach is significantly more efficient than the brute-force method, making it well-suited for large input sizes. 
*/