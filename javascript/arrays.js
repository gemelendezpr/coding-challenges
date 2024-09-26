// <<< ---------------------------------------------------------------------- Array cheatsheet (techinterviewhandbook) ---------------------------------------------------------------------- >>>

// <<< ---------------------------------------------------------------------- Sliding Window Technique ---------------------------------------------------------------------- >>>

// Concept: In a sliding window, the two pointers usually move in the same direction will never overtake each other. This ensures that each value is only visited at most twice and the time complexity is still O(n).

/* ========== * * ========== * * ========== * * ========== * * ========== *
* Challenge 1 * * Challenge 1 * * Challenge 1 * * Challenge 1 * * Challenge 1 *
* =========== * * =========== * * =========== * * =========== * * ========== */

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

/* ========== * * ========== * * ========== * * ========== * * ========== *
* Challenge 2 * * Challenge 2 * * Challenge 2 * * Challenge 2 * * Challenge 2 *
* =========== * * =========== * * =========== * * =========== * * ========== */


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

/*
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
*/

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


/* ========== * * ========== * * ========== * * ========== * * ========== *
* Challenge 3 * * Challenge 3 * * Challenge 3 * * Challenge 3 * * Challenge 3 *
* =========== * * =========== * * =========== * * =========== * * ========== */


/*
76. Minimum Window Substring (Hard)

Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

The testcases will be generated such that the answer is unique.

Example 1:
Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

Example 2:
Input: s = "a", t = "a"
Output: "a"
Explanation: The entire string s is the minimum window.

Example 3:
Input: s = "a", t = "aa"
Output: ""
Explanation: Both 'a's from t must be included in the window.

Since the largest window of s only has one 'a', return empty string.
*/

// Problem Statement Recap:
//To solve the problem of finding the minimum window substring that contains all characters of string `t` in string `s`, we can use a brute-force approach first.
// We can generate all possible substrings of `s`, check if they contain all characters of `t`, and then keep track of the smallest such substring.

// <<< -------------------- BRUTE FORCE SOLUTION -------------------- >>>

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {string}
//  */

var minWindow = function(s, t) {
    // Function to check if all characters of 't' are present in the substring
    function containsAllChars(subStr, t) {
        const tCharCount = {}; // Character count for string t
        for (let char of t) {
            tCharCount[char] = (tCharCount[char] || 0) + 1; // Count frequency of characters in t
        }

        const subStrCharCount = {}; // Character count for substring
        for (let char of subStr) {
            subStrCharCount[char] = (subStrCharCount[char] || 0) + 1; // Count frequency of characters in subStr
        }

        // Check if all characters in tCharCount are in subStrCharCount with at least the same frequency
        for (let char in tCharCount) {
            if (!subStrCharCount[char] || subStrCharCount[char] < tCharCount[char]) {
                return false;
            }
        }
        return true;
    }

    let minLength = Infinity; // Initialize with a large value
    let minWindowStr = "";    // Store the minimum window substring

    // Generate all substrings of s
    for (let i = 0; i < s.length; i++) {
        for (let j = i + 1; j <= s.length; j++) {
            const subStr = s.slice(i, j); // Get substring from index i to j

            // Check if substring contains all characters from t
            if (containsAllChars(subStr, t)) {
                if (subStr.length < minLength) {  // Update minimum if found
                    minLength = subStr.length;
                    minWindowStr = subStr;
                }
            }
        }
    }

    return minWindowStr;
};

/*
### Explanation of the Code:
1. **containsAllChars(subStr, t)**:
   - This helper function checks if all characters in `t` (including their frequencies) are present in the substring `subStr`.
   - It does this by building character frequency maps for both `subStr` and `t`, then comparing them.

2. **Main Function**:
   - We initialize `minLength` to a large value (`Infinity`) and `minWindowStr` to an empty string.
   - The two nested loops generate all possible substrings of `s`. For each substring, we use the helper function `containsAllChars` to check if it contains all the characters of `t`.
   - If it does, and its length is smaller than the current `minLength`, we update `minLength` and `minWindowStr`.

3. **Return**:
   - Finally, we return the smallest valid substring found.
*/

// ### Test Cases:

// console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"
// console.log(minWindow("a", "a"));               // Output: "a"
// console.log(minWindow("a", "aa"));              // Output: ""

/*
### Time Complexity:
- The brute-force solution generates all possible substrings, which takes **O(n^3)** in the worst case (`O(n^2)` for generating the substrings and `O(n)` to check if they contain all characters of `t`).
  
  Therefore, **Time Complexity**: **O(n^3)**, where `n` is the length of string `s`.

### Space Complexity:
- The space complexity is **O(n + m)**, where `n` is the length of `s` and `m` is the length of `t`. This is because of the storage used for the substring and the character frequency maps.

### Optimized Approach: Sliding Window
This brute-force solution is inefficient for large inputs. It can be improved using a **sliding window** technique, which reduces the time complexity significantly. We'll discuss that in the next step.
*/

// <<< -------------------- OPTIMIZE SOLUTION -------------------- >>>
/*
Here's the optimized solution for the **Minimum Window Substring** problem using the **sliding window technique**. The sliding window approach efficiently tracks the current window and moves the window boundaries to find the minimum window.

### Sliding Window Approach:
We maintain a window that expands and contracts while keeping track of whether all characters from `t` are contained in the window. Once a valid window is found, we try to minimize it by contracting the window from the left side.

### Optimized Solution:
*/

// /**
//  * @param {string} s
//  * @param {string} t
//  * @return {string}
//  */
var minWindow = function(s, t) {
    if (s.length === 0 || t.length === 0) return "";  // Edge case

    // Step 1: Build the frequency map for the string 't'
    const tCharCount = {};
    for (let char of t) {
        tCharCount[char] = (tCharCount[char] || 0) + 1;
    }

    // Step 2: Initialize variables for the sliding window
    let required = Object.keys(tCharCount).length;  // Number of unique characters in 't'
    let left = 0, right = 0;  // Window boundaries
    let formed = 0;  // Tracks how many unique characters match the required count
    const windowCounts = {};  // Count of characters in the current window

    // Step 3: Variables to track the minimum window
    let minLength = Infinity;
    let minWindowStart = 0;

    // Step 4: Expand the window by moving the right pointer
    while (right < s.length) {
        let char = s[right];
        windowCounts[char] = (windowCounts[char] || 0) + 1;

        // If this character is in t and its count matches the required count in t, increment `formed`
        if (tCharCount[char] && windowCounts[char] === tCharCount[char]) {
            formed++;
        }

        // Step 5: Contract the window by moving the left pointer to minimize the window
        while (left <= right && formed === required) {
            char = s[left];

            // Update the result if this window is smaller than the previous best
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minWindowStart = left;
            }

            // Contract the window
            windowCounts[char]--;
            if (tCharCount[char] && windowCounts[char] < tCharCount[char]) {
                formed--;
            }
            left++;
        }

        // Expand the window by moving the right pointer
        right++;
    }

    // Step 6: Return the result
    return minLength === Infinity ? "" : s.substring(minWindowStart, minWindowStart + minLength);
};

/*
### Explanation:
1. **Frequency Map of `t`**:
   - We first build a frequency map `tCharCount` to keep track of the required count for each character in `t`.
   
2. **Sliding Window Variables**:
   - `left` and `right` are pointers for the window's boundaries.
   - `windowCounts` keeps track of the counts of characters in the current window.
   - `required` is the number of unique characters in `t` that must appear in the window.
   - `formed` is the number of unique characters that meet the required frequency in the current window.

3. **Sliding the Right Pointer**:
   - We expand the window by moving the `right` pointer and include the character in the window. We update its count in `windowCounts`.
   - If the count of the character in the current window matches its count in `t`, we increment `formed`.

4. **Sliding the Left Pointer**:
   - When the current window contains all characters of `t` (i.e., `formed === required`), we try to minimize the window by moving the `left` pointer. We also check if the current window is smaller than the previous minimum and update the result accordingly.

5. **Return the Minimum Window**:
   - If a valid window is found, we return the substring from `minWindowStart` to `minWindowStart + minLength`. If no valid window is found, we return an empty string.
*/

// Test cases
const testCases = [
    { input: { s: "ADOBECODEBANC", t: "ABC" }, expected: "BANC" },
    { input: { s: "a", t: "a" }, expected: "a" },
    { input: { s: "a", t: "aa" }, expected: "" },
    { input: { s: "", t: "ABC" }, expected: "" },           // Edge case: empty string 's', no window can be found
    { input: { s: "ABC", t: "" }, expected: "" },           // Edge case: empty string 't', return an empty string since 't' is empty
    { input: { s: "ABC", t: "D" }, expected: "" },          // Edge case: character in 't' is not in 's'
    { input: { s: "ABBC", t: "BB" }, expected: "BB" },      // Edge case: 't' contains duplicate characters and 's' has them
    { input: { s: "aabbcc", t: "abc" }, expected: "abbc" }, // Edge case: multiple occurrences of target characters
    { input: { s: "a".repeat(1000) + "b".repeat(1000) + "c".repeat(1000), t: "abc" }, expected: "a" + "b".repeat(1000) + "c" }, // Edge case: very large string 's' with repeating characters
];

// Run and log the test cases
testCases.forEach(({ input, expected }, index) => {
    const result = minWindow(input.s, input.t);
    // Ensure `s` is a string before applying slice
    const slicedInputS = typeof input.s === "string" ? input.s.slice(0, 20) + "..." : input.s;
    
    console.log(`Test Case ${index + 1}`);
    console.log(`Input: "s=${slicedInputS}, t=${input.t}"`); // Slice 's' for readability if it's too long
    console.log(`Expected Output: ${expected}`);
    console.log(`Actual Output: ${result}`);
    console.log(result === expected ? "Test Passed\n" : "Test Failed\n");
});


/*
### Time Complexity:
- **Time Complexity**: **O(m + n)**, where `m` is the length of `s` and `n` is the length of `t`. Both pointers (left and right) traverse the string `s` at most once, so the time complexity is linear in terms of the size of `s`. Constructing and checking the frequency map for `t` takes linear time as well.
  
### Space Complexity:
- **Space Complexity**: **O(m + n)**, where `m` is the length of `s` and `n` is the length of `t`. We use space for the frequency maps and some extra variables.

### Optimization Insight:
- The sliding window technique optimizes the brute-force approach by not generating all possible substrings and only expanding and contracting the window when necessary. This drastically reduces the time complexity from **O(m^3)** to **O(m + n)**.

This solution is optimal for the given problem constraints.
*/

// <<< ---------------------------------------------------------------------- Two pointers Technique ---------------------------------------------------------------------- >>>

//Concept: Two pointers is a more general version of sliding window where the pointers can cross each other and can be on different arrays.

/* ========== * * ========== * * ========== * * ========== * * ========== *
* Challenge 1 * * Challenge 1 * * Challenge 1 * * Challenge 1 * * Challenge 1 *
* =========== * * =========== * * =========== * * =========== * * ========== */

/*
75. Sort Colors (Medium)

Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

 

Example 1:
Input: nums = [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]

Example 2:
Input: nums = [2,0,1]
Output: [0,1,2]
*/
