//1. 840. Magic Squares In Grid
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