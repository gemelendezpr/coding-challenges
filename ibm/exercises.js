// Given a string, check if all its characters are the same or not.
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

// It checks if the string is empty or has only one character. Then, it iterates through the characters starting from the second character and compares each character with the first character. 
//If any character is different, it returns false; otherwise, it returns true.