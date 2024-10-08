//1. Two Sum

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

//Test Cases -> Test Results (Use them as Test cases tu run the code). 
Input
nums =
[2,7,11,15]
target =
9
Output
[0,1]
Expected
[0,1]
