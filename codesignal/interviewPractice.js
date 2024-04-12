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
  
//2. Two Sum (Easy)

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

//Solution

// Define a function named twoSum that takes an array of integers nums and an integer target.
var twoSum = function(nums, target) {
    // Create an empty object to store the indices of visited numbers.
    const visited = {};

    // Iterate through each element and its index in the nums array.
    for (let i = 0; i < nums.length; i++) {
        // Calculate the difference between the target and the current number.
        const complement = target - nums[i];
        
        // Check if the complement exists in the visited object.
        if (visited.hasOwnProperty(complement)) {
            // If the complement exists, return the indices of the current number and its complement.
            return [visited[complement], i];
        }
        
        // Store the index of the current number in the visited object.
        visited[nums[i]] = i;
    }
    
    // If no solution is found, return an empty array.
    return [];
};

// Example cases to test the solution
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(twoSum(nums1, target1)); // Output: [0, 1]

const nums2 = [3, 2, 4];
const target2 = 6;
console.log(twoSum(nums2, target2)); // Output: [1, 2]

const nums3 = [3, 3];
const target3 = 6;
console.log(twoSum(nums3, target3)); // Output: [0, 1]

  //3. Challenge: Rotate List (Medium)

// Given the head of a linked list, rotate the list to the right by k places.
// Example 1:  Input: head = [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3] 
// Example 2: Input: head = [0,1,2], k = 4
// Output: [2,0,1] Constraints:

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // If the linked list is empty or has only one node, or if k is 0, return the head as it is.
    if (!head || !head.next || k === 0) {
        return head;
    }
    
    // Count the number of nodes in the linked list.
    let count = 1;
    let current = head;
    while (current.next) {
        count++;
        current = current.next;
    }
    
    // Calculate the actual value of k taking modulo operation to handle large values of k.
    k = k % count;
    
    // If k is 0 after taking the modulo operation, the list remains unchanged, so return the head.
    if (k === 0) {
        return head;
    }
    
    // Calculate the number of steps to move to reach the new head after rotation.
    let stepsToNewHead = count - k;
    
    // Make the linked list circular by connecting the last node to the head.
    current.next = head;
    
    // Move 'current' pointer to the node just before the new head.
    for (let i = 0; i < stepsToNewHead; i++) {
        current = current.next;
    }
    
    // Set the new head and break the link to make it the last node.
    let newHead = current.next;
    current.next = null;
    
    // Return the new head of the rotated linked list.
    return newHead;

};

// Example 1
const head1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const k1 = 2;
console.log(rotateRight(head1, k1)); // Output: [4,5,1,2,3]

// Example 2
const head2 = new ListNode(0, new ListNode(1, new ListNode(2)));
const k2 = 4;
console.log(rotateRight(head2, k2)); // Output: [2,0,1]

//4. Magic Squares In Grid (Medium)
// A 3 x 3 magic square is a 3 x 3 grid filled with distinct numbers from 1 to 9 such that each row, column, and both diagonals all have the same sum.

// Given a row x col grid of integers, how many 3 x 3 "magic square" subgrids are there?  (Each subgrid is contiguous).

// Example 1:

//Input: grid = [[4,3,8,4],[9,5,1,9],[2,7,6,2]]
// Output: 1

// Example 2:

// Input: grid = [[8]]
// Output: 0

/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    // Get the number of rows and columns in the grid
    const numRows = grid.length;
    const numCols = grid[0].length;

    // Initialize a counter to keep track of the number of magic squares found
    let count = 0;

    // Helper function to check if a 3x3 subgrid is a magic square
    const isMagicSquare = (subgrid) => {
        // Array to keep track of seen digits (1 to 9), initialized to false
        const digits = Array(10).fill(false);

        // Check if all numbers from 1 to 9 are present exactly once in the subgrid
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                const num = subgrid[i][j];

                // Check for invalid number or duplicate in the subgrid
                if (num < 1 || num > 9 || digits[num]) {
                    return false;
                }

                // Mark the current number as seen
                digits[num] = true;
            }
        }

        // Calculate the target sum (sum of first row) for comparison
        const targetSum = subgrid[0][0] + subgrid[0][1] + subgrid[0][2];

        // Check row and column sums
        for (let i = 0; i < 3; i++) {
            let rowSum = 0;
            let colSum = 0;
            for (let j = 0; j < 3; j++) {
                rowSum += subgrid[i][j];
                colSum += subgrid[j][i];
            }
            if (rowSum !== targetSum || colSum !== targetSum) {
                return false; // Row or column sum does not match
            }
        }

        // Check diagonal sums
        const diag1Sum = subgrid[0][0] + subgrid[1][1] + subgrid[2][2];
        const diag2Sum = subgrid[0][2] + subgrid[1][1] + subgrid[2][0];
        if (diag1Sum !== targetSum || diag2Sum !== targetSum) {
            return false; // Diagonal sums do not match
        }

        // If all checks pass, it's a valid magic square
        return true;
    };

    // Iterate through each possible starting position of a 3x3 subgrid
    for (let i = 0; i <= numRows - 3; i++) {
        for (let j = 0; j <= numCols - 3; j++) {
            // Extract the current 3x3 subgrid
            const subgrid = [
                [grid[i][j], grid[i][j + 1], grid[i][j + 2]],
                [grid[i + 1][j], grid[i + 1][j + 1], grid[i + 1][j + 2]],
                [grid[i + 2][j], grid[i + 2][j + 1], grid[i + 2][j + 2]]
            ];

            // Check if the current subgrid is a magic square
            if (isMagicSquare(subgrid)) {
                count++; // Increment the count if it's a magic square
            }
        }
    }

    // Return the total count of magic squares found
    return count;
};

// Test case input 1:
const grid = [
  [4, 3, 8, 4],
  [9, 5, 1, 9],
  [2, 7, 6, 2]
];

// Call the function with the test case input
const result = numMagicSquaresInside(grid);

// Log the result
console.log("Number of 3x3 magic square subgrids:", result); // => Number of 3x3 magic square subgrids: 1

// Test case input 2:

// const grid = [
//     [8]
//   ];
// 
  
// // Call the function with the test case input
// const result = numMagicSquaresInside(grid);

// // Log the result
// console.log("Number of 3x3 magic square subgrids:", result); // => Number of 3x3 magic square subgrids: 0