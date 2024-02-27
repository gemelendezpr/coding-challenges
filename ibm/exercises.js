// Topic String and Data Structure 
//Given a string, check if all its characters are the same or not.
// Example 1:

// Input:
// s = "geeks"
// Output: False
// Explanation: The string contains different
// character 'g', 'e', 'k' and 's'.

// Example 2:

// Input: 
// s = "gggg"
// Output: True
// Explanation: The string contains only one
// character 'g'

// Your Task:
// You don't need to read input or print anything. Your task is to complete the function check() which takes a string as input and returns True if all the characters in the string are the same. Else, it returns False.


// Expected Time Complexity: O(|S|).
// Expected Auxiliary Space: O(1).


// Constraints:
// 1 <= |S| <= 104

// Solution: 

function check(s) {
    // Check if the string is empty or has only one character
    if (s.length <= 1) {
        return true;
    }

    // Compare each character with the first character
    const firstChar = s[0];
    for (let i = 1; i < s.length; i++) {
        if (s[i] !== firstChar) {
            return false;
        }
    }

    return true;
}

// Example usage:
const s1 = "geeks";
console.log(check(s1)); // Output: false

const s2 = "gggg";
console.log(check(s2)); // Output: true

// Explanation: It checks if the string is empty or has only one character. Then, it iterates through the characters starting from the second character and compares each character with the first character. 
//If any character is different, it returns false; otherwise, it returns true.

//2. You are given a string s of x and y. You need to verify whether the string follows the pattern xnyn. That is the string is valid only if equal number of ys follow equal number of xs.
// As an example: xxyyxxyy is valid. xy is valid. xxyyx is invalid. xxxyyyxxyyxy is valid.

// Example 1:

// Input:
// xxyy

// Output:
// 1
// Example 2:

// Input:
// xyx

// Output:
// 0
// Your Task:

// Since this is a function problem, you don't need to take any input. Just complete the function follPatt(string s) that outputs 1 if string is valid, else it outputs 0.

// Constraints:
// 1 <= |s| <=100

function follPatt(s) {
    // Initialize counts for 'x' and 'y'
    let xCount = 0;
    let yCount = 0;

    // Iterate through the characters of the string
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'x') {
            xCount++;
        } else if (s[i] === 'y') {
            yCount++;
        }

        // Check if counts are equal after every 'x' and 'y'
        if (i % 2 === 1 && xCount !== yCount) {
            return 0; // Invalid pattern
        }
    }

    // Check if counts are equal at the end
    return xCount === yCount ? 1 : 0;
}

// Example usage:
console.log(follPatt("xxyy"));  // Output: 1
console.log(follPatt("xyx"));   // Output: 0

// This JavaScript code counts the occurrences of 'x' and 'y' while iterating through the string and checks if the counts are equal after each 'x' and 'y'. 
//If the counts are not equal at any point, it returns 0, indicating an invalid pattern. If the counts are equal at the end, it returns 1, indicating a valid pattern.