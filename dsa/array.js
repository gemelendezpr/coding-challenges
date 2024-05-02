//1. 121. Best Time to Buy and Sell Stock
/*Easy

Topics
Companies
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104 
*/

// <<< ---------------------------------------------------------------------- BRUTE FORCE SOLUTION ---------------------------------------------------------------------- >>>

/**
 * Given an array of stock prices, find the maximum profit achievable by buying on one day
 * and selling on a future day. If no profit can be made, return 0.
 * @param {number[]} prices - Array of stock prices for each day.
 * @return {number} - Maximum profit achievable.
 */
var maxProfit = function(prices) {
    // Initialize variables to keep track of minimum price and maximum profit
    let minPrice = Infinity; // Start with a high value for minimum price
    let maxProfit = 0; // Start with 0 profit
    
    // Iterate through each price in the array
    for (let price of prices) {
        // Update the minimum price encountered so far
        if (price < minPrice) {
            minPrice = price;
        }
        
        // Calculate potential profit if we sell at the current price
        let currentProfit = price - minPrice;
        
        // Update the maximum profit if the current profit is higher
        if (currentProfit > maxProfit) {
            maxProfit = currentProfit;
        }
    }
    
    // Return the maximum profit achievable
    return maxProfit;
};

// Test cases
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0


/* Explanation:

1. **Initialization:**
   - We start by initializing `minPrice` to `Infinity` because we want to track the lowest price encountered so far.
   - `maxProfit` is initialized to `0` since we are initially assuming no profit can be made.

2. **Loop through Prices:**
   - We iterate through each price in the `prices` array using a `for...of` loop.
   
3. **Update Minimum Price:**
   - During each iteration, we update `minPrice` if the current price is lower than the previously recorded `minPrice`.
   - This ensures that `minPrice` always represents the lowest price encountered up to the current day.

4. **Calculate Current Profit:**
   - For each day (`price`), we calculate the potential profit if we sell at this `price` by subtracting `minPrice` from `price`.
   - This gives us `currentProfit`.

5. **Update Maximum Profit:**
   - We update `maxProfit` if `currentProfit` (profit from selling at the current `price`) is greater than the previously recorded `maxProfit`.
   - This helps us track the maximum profit achievable by selling at any future day after buying at the lowest price encountered so far.

6. **Return Maximum Profit:**
   - After iterating through all prices, we return `maxProfit`, which represents the maximum profit achievable by buying at one day and selling at a future day.

This approach ensures that we find the maximum profit with a single transaction (buying and selling once) while iterating through the `prices` array in a single pass, resulting in an efficient \(O(n)\) time complexity, where \(n\) is the length of the `prices` array. The space complexity is \(O(1)\) as we are using a constant amount of additional space for tracking variables (`minPrice` and `maxProfit`).
*/

// <<< ---------------------------------------------------------------------- ALTERNATIVE/OPTIMIZE SOLUTION ---------------------------------------------------------------------- >>>

/*The solution provided for the "Best Time to Buy and Sell Stock" problem is already quite efficient with a time complexity of \( O(n) \) and a space complexity of \( O(1) \), where \( n \) is the length of the `prices` array. However, we can explore an alternative approach using a more concise and efficient algorithm known as Kadane's algorithm, which is typically used for solving maximum subarray sum problems but can be adapted for this stock profit problem.

### Refactored Solution using Kadane's Algorithm:

Kadane's algorithm is a dynamic programming approach that efficiently finds the maximum sum of a contiguous subarray within a one-dimensional numeric array. We can adapt this algorithm to find the maximum profit achievable by buying and selling stocks.

Here's the refactored solution:
*/

/**
 * Given an array of stock prices, find the maximum profit achievable by buying on one day
 * and selling on a future day. If no profit can be made, return 0.
 * @param {number[]} prices - Array of stock prices for each day.
 * @return {number} - Maximum profit achievable.
 */
var maxProfit = function(prices) {
    if (prices.length === 0) {
        return 0;
    }
    
    let maxProfit = 0;
    let minPrice = prices[0]; // Initialize minimum price to the first day's price
    
    for (let i = 1; i < prices.length; i++) {
        // Calculate the potential profit if we sell at the current day's price
        let currentProfit = prices[i] - minPrice;
        
        // Update the maximum profit if the current profit is greater
        if (currentProfit > maxProfit) {
            maxProfit = currentProfit;
        }
        
        // Update the minimum price encountered so far
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
    }
    
    return maxProfit;
};

// Test cases
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0


/* Optimizations and Explanation:

1. **Edge Case Handling:**
   - We first handle the edge case where if the `prices` array is empty, the maximum profit achievable is `0`.

2. **Iterative Approach:**
   - Instead of using a `for...of` loop, we use a traditional `for` loop starting from the second day (`i = 1`).
   - This allows us to track the minimum price (`minPrice`) and calculate potential profits (`currentProfit`) as we iterate through the array.

3. **Dynamic Profit Calculation:**
   - For each day (`i`), we calculate the potential profit (`currentProfit`) if we sell at the current day's price (`prices[i]`) after buying at the `minPrice` encountered so far.
   - If `currentProfit` is greater than the `maxProfit` encountered so far, we update `maxProfit`.

4. **Update Minimum Price:**
   - We update `minPrice` if the current day's price (`prices[i]`) is lower than the `minPrice` encountered so far.
   - This ensures that `minPrice` always represents the lowest price encountered up to the current day.

5. **Return Maximum Profit:**
   - After iterating through all days in the `prices` array, we return `maxProfit`, which represents the maximum profit achievable by buying and selling stocks based on the optimal strategy.

This refactored solution leverages Kadane's algorithm to efficiently calculate the maximum profit achievable with a single pass through the `prices` array, resulting in a concise and optimized implementation. The time complexity remains \( O(n) \) and the space complexity is \( O(1) \), making this approach both time and space efficient for solving the problem.
*/
