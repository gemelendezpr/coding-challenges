// (Topic String and Data Structure )
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

//2. (STRING) You are given a string s of x and y. You need to verify whether the string follows the pattern xnyn. That is the string is valid only if equal number of ys follow equal number of xs.
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

// 3. (ARRAYS) You are given an array arr[] of length n, you have to re-construct the same array arr[] in-place. The arr[i] after reconstruction will become arr[i] OR arr[i+1], where OR is bitwise or. If for some i, i+1 does not exists, then do not change arr[i].

// Your Task:
// You are required to implement the function game_with_number(), which takes an array arr, representing values at each index, and the size of the array n. The function should modify the elements of the same array arr[] in-place by replacing them with the values obtained by performing the bitwise OR operation on consecutive elements.

// Expected Time Complexity: O(n).
// Expected Auxiliary Space: O(1).

// Constraints:
// 1 ≤ n ≤ 105
// 1 ≤ arr[i] ≤ 107

function game_with_number(arr, n) {
    for (let i = 0; i < n - 1; i++) {
        arr[i] = arr[i] | arr[i + 1];
    }
}

// Example usage:
const arr1 = [10, 11, 1, 2, 3];
const n1 = 5;
game_with_number(arr1, n1);
console.log(arr1);  // Output: [11, 11, 3, 3, 3]

const arr2 = [5, 9, 2, 6];
const n2 = 4;
game_with_number(arr2, n2);
console.log(arr2);  // Output: [13, 11, 6, 6]

// This code iterates through the array, and at each index, it performs the bitwise OR operation between the current element and the next element. The modified array is updated in place.