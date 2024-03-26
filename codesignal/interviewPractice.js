//1. Challenge: firstDuplicate

// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

// Example

// For a = [2, 1, 3, 5, 3, 2], the output should be solution(a) = 3.

// There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.

// For a = [2, 2], the output should be solution(a) = 2;

// For a = [2, 4, 3, 5, 1], the output should be solution(a) = -1.

//SOLUTION

// Defines a function named solution that takes one parameter, a.
function solution(a) {
    // Initializes an empty object named seen to keep track of encountered numbers.
    const seen = {};
    
    // Iterates through each element of the array a.
    for (let i = 0; i < a.length; i++) {
      // Assigns the current element of the array to the variable num.
      const num = a[i];
      
      // Checks if the current number num has been encountered before.
      if (seen[num] !== undefined) {
        // If the number is already in the seen object, it's a duplicate, so we return it.
        return num;
      }
      
      // Marks the current number num as seen by adding it to the seen object.
      seen[num] = true;
    }
    
    // If no duplicates are found, returns -1 as per the requirements.
    return -1;
  }
  
  // Example usage:
  // Define an array a with duplicate numbers.
  const a1 = [2, 1, 3, 5, 3, 2];
  // Call the solution function with array a1 and log the result.
  console.log(solution(a1)); // Output: 3
  
  // Define an array a with no duplicate numbers.
  const a2 = [2, 4, 3, 5, 1];
  // Call the solution function with array a2 and log the result.
  console.log(solution(a2)); // Output: -1

  //This solution iterates through the array a, keeping track of encountered numbers in the seen object. If a number is encountered again, it's a duplicate, and the function returns that number. If no duplicates are found, the function returns -1.
  