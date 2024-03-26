//1. Challenge: checkPalindrome
//Given the string, check if it is a palindrome.

// Example

// For inputString = "aabaa", the output should be
// solution(inputString) = true;
// For inputString = "abac", the output should be
// solution(inputString) = false;
// For inputString = "a", the output should be
// solution(inputString) = true.

// word -> palindrome 
// str -> letters, all lower, no special charcater
// return true o false 

function solution(inputString) {
    // split(convert str into an array), reverse(reversed the array), join(join it into a string again)
    // compare rev === word
    let reversedWord = inputString.split('').reverse().join('')
    return reversedWord === inputString
    }
    
console.log(solution('racecar'), 'true')
console.log(solution('spongebob'), 'flase')


//2. Challenge: centuryFromYear

// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

// Example

// For year = 1905, the output should be
// solution(year) = 20;
// For year = 1700, the output should be
// solution(year) = 17.

function solution(year) {
    // calculate the century by divinding the year by 100 and rounding up to the nearest integer.
    let century = Math.ceil(year/100); 
    // Return the calculated century
    return century;
}

// Example usage:
// Call the solution function with year = 1905 and log the result.
console.log(solution(1905)); // Output: 20
// Call the solution function with year = 1700 and log the result.
console.log(solution(1700)); // Output: 17

//3. Challenge: add

// Write a function that returns the sum of two numbers.

// Example

// For param1 = 1 and param2 = 2, the output should be
// solution(param1, param2) = 3.

function solution(param1, param2) {
    // Return the sum of param1 and param2
    return param1 + param2;
}

//Call the solution function wuti param1 = 1 and param2 = 2 and log the result. 
console.log(solution(1, 2)); //Output:3

