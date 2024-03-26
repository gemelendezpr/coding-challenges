//1. Given the string, check if it is a palindrome.

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
