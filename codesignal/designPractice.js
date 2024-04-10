// 1. TicTacToe board 

// Here are two ways we can figure out whether any row of a TicTacToe board has the same character in all its positions:

// Function to check if any row of a TicTacToe board has the same character in all its positions (Complex Version)
// Function to check if any row of a TicTacToe board has the same character in all its positions (Complex Version)
function sameRowComplex(board) {
    // Iterate over each row in the board
    for (const row of board) {
        // Check if all elements in the row are equal to the first element of the row
        if (row.every(val => val === row[0])) {
            return true; // Return true if all elements are equal
        }
    }
    return false; // Return false if no row has all equal elements
}

// Explanation:

// In this revised version:
// We use a for...of loop to iterate over each row in the board array.
// Within each iteration, we use the every method on the row array to check if all elements (val) in the row are equal to the first element (row[0]).
// If every element in the row is equal to row[0], we return true indicating that there is a row with all equal elements.
// If no such row is found after iterating through all rows, we return false.

// Function to check if any row of a TicTacToe board has the same character in all its positions (Simpler Version)
function sameRowSimpler(board) {
    // Explanation: Iterate through each row in the board.
    for (const row of board) {
        // Explanation: Check if the first and second elements of the row are equal,
        // and if the second and third elements of the row are equal.
        if (row[0] === row[1] && row[1] === row[2]) {
            // Explanation: If all elements in the row are equal, return true.
            return true;
        }
    }
    // Explanation: If no row with all equal elements is found, return false.
    return false;
}

// Explanation:

// Both functions sameRowComplex and sameRowSimpler take a TicTacToe board as input and return true if any row of the board has the same character in all its positions, and false otherwise.
// sameRowSimpler uses a simpler approach with nested loops to check each row of the board for equality of elements.

//2. Sample problem: Growing Hedges
// Problem statement

// Create a function that takes in:
// . an integer that represents a number of years,
// . a 2 dimensional matrix filled with 0s and 1s that describes a garden. 1s represent hedges, and 0s represent empty spaces. 

// The function should simulate the growth of hedges over the given number of years, according to the following rules:
// 1.An empty square which is adjacent to a hedge (including diagonally) will be filled in the next year. 
// 2.A square which is filled with a hedge will be empty the following year if it is surrounded on all eight sides by other hedges, which prevents it from getting enough sun. Note that hedges on the edge squares will always get enough sun.
// 3.Any other squares will be left intact.

// The function should return the number of pairs of adjacent hedges (including diagonally) at the end of this process. We’d like you to focus on writing simple, well-structured code; you will not be graded on optimizing the performance of your solution.

// Examples:
// Example 1. If the number of years is 1, and the initial matrix is
// [[0, 0, 1],
//  [0, 0, 0]]
// the final matrix will be:
// [[0, 1, 1],
//  [0, 1, 1]]
// and the function should output 6. Here are the six pairs of adjacent hedges in this garden:
// [[0, 1, 1],    [[0, 1, 1],    [[0, 1, 1],    [[0, 1, 1],    [[0, 1, 1],    [[0, 1, 1],
//  [0, 1, 1]]     [0, 1, 1]]     [0, 1, 1]]     [0, 1, 1]]     [0, 1, 1]]     [0, 1, 1]]
// Example 2. If the number of years is 2, and the initial matrix is:
// [[1, 0, 0, 0],
//  [1, 1, 0, 0],
//  [1, 0, 0, 1]]
// the final matrix will be:
// [[1, 1, 1, 1],
//  [1, 0, 1, 1],
//  [1, 1, 1, 1]]
// And the function should output 21.

// First, we'll define the countPopulatedNeighbors function to count the number of populated (hedge) neighbors around a given cell in the garden. Then, we'll implement the simulateOneYearGrowth function to simulate the garden's growth for one year based on the given rules. Finally, we'll use these functions to create the neighborsAfterYears function to simulate growth over multiple years and count the adjacent hedge pairs.

// Function to count populated neighbors of a cell (i, j) in the garden
function countPopulatedNeighbors(garden, i, j) {
    let populatedNeighbors = 0;
    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],         [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    for (const [deltaI, deltaJ] of directions) {
        const neighborI = i + deltaI;
        const neighborJ = j + deltaJ;

        if (neighborI >= 0 && neighborI < garden.length &&
            neighborJ >= 0 && neighborJ < garden[0].length &&
            garden[neighborI][neighborJ] === 1) {
            populatedNeighbors++;
        }
    }

    return populatedNeighbors;
}

// Function to simulate garden growth for one year
function simulateOneYearGrowth(garden) {
    const newGarden = new Array(garden.length).fill(null)
                        .map(() => new Array(garden[0].length).fill(0));

    for (let i = 0; i < garden.length; i++) {
        for (let j = 0; j < garden[0].length; j++) {
            const populatedNeighbors = countPopulatedNeighbors(garden, i, j);

            if (garden[i][j] === 1 && populatedNeighbors === 8) {
                newGarden[i][j] = 0;
            } else if (garden[i][j] === 0 && populatedNeighbors > 0) {
                newGarden[i][j] = 1;
            } else {
                newGarden[i][j] = garden[i][j];
            }
        }
    }

    return newGarden;
}

// Function to count adjacent pairs of hedges in the final garden
function countAdjacentPairs(garden) {
    let adjacentPairs = 0;

    for (let i = 0; i < garden.length; i++) {
        for (let j = 0; j < garden[0].length; j++) {
            if (garden[i][j] === 1) {
                adjacentPairs += countPopulatedNeighbors(garden, i, j);
            }
        }
    }

    // Each pair was counted twice, so divide the result by 2
    return Math.floor(adjacentPairs / 2);
}

// Function to simulate garden growth over given number of years and count adjacent pairs
function neighborsAfterYears(garden, years) {
    for (let year = 0; year < years; year++) {
        garden = simulateOneYearGrowth(garden);
    }

    return countAdjacentPairs(garden);
}

// Example usage:
const initialGarden1 = [
    [0, 0, 1],
    [0, 0, 0]
];

console.log(neighborsAfterYears(initialGarden1, 1)); // Output: 6

const initialGarden2 = [
    [1, 0, 0, 0],
    [1, 1, 0, 0],
    [1, 0, 0, 1]
];

console.log(neighborsAfterYears(initialGarden2, 2)); // Output: 21

// In this implementation:

// countPopulatedNeighbors: Counts the number of populated (hedge) neighbors around a given cell.
// simulateOneYearGrowth: Simulates the garden's growth for one year based on the rules provided.
// countAdjacentPairs: Counts the number of adjacent pairs of hedges in the final garden.
// neighborsAfterYears: Simulates garden growth over the given number of years and counts adjacent pairs of hedges in the final garden.
// We used nested loops to iterate over the garden cells and implemented the rules specified in the problem to update the garden state accordingly. Finally, we applied these functions to the provided examples to verify correctness.

// General Explanation:

// The code snippet you provided is a call to the neighborsAfterYears function, which simulates the growth of a garden over a given number of years and counts the number of adjacent pairs of hedges in the final garden. The initialGarden1 variable is a 2D array that represents the initial state of the garden, with 1s representing hedges and 0s representing empty spaces.

// The neighborsAfterYears function takes two arguments: the initial garden and the number of years to simulate growth. It works by repeatedly calling the simulateOneYearGrowth function to update the state of the garden each year. The simulateOneYearGrowth function counts the number of populated neighbors for each cell in the garden and updates the cell's state accordingly. If a cell has 8 populated neighbors, it dies. If a cell has 0 populated neighbors, it remains empty. If a cell has 1-7 populated neighbors, it becomes a hedge.

// After simulating the growth of the garden for the given number of years, the neighborsAfterYears function calls the countAdjacentPairs function to count the number of adjacent pairs of hedges in the final garden. The countAdjacentPairs function iterates over each cell in the garden and counts the number of populated neighbors for each cell that is a hedge. It then divides the result by 2 to account for the fact that each pair of hedges was counted twice.

// In the example usage, the neighborsAfterYears function is called with the initialGarden1 variable and the number of years to simulate growth set to 1. The result is then printed to the console. In this case, the output is 6, which means that there are 6 adjacent pairs of hedges in the final garden after 1 year of growth.

//Visualization:

// To visualize the garden matrix initialGarden1 from the example usage, let's represent it as a 2-dimensional grid where 1s represent hedges and 0s represent empty spaces.

// The initialGarden1 matrix is:

// [[0, 0, 1],
//  [0, 0, 0]]

//  Let's visualize this as a grid:

//  0 0 1
//  0 0 0

//  In this grid:

// 0 represents an empty space.
// 1 represents a hedge.

// So, the garden looks like this:

// 0 1 2
// 0 [0,0,1]
// 1 [0,0,0]

// After one year of growth, the garden will evolve based on the specified rules. The function neighborsAfterYears(initialGarden1, 1) will simulate this growth and return the number of adjacent hedge pairs.

// Let's walk through the growth process:

// The 1 at position (0,2) (row 0, column 2) has one adjacent empty space, so it will fill the adjacent empty space in the next year.
// After one year, the garden will look like:

//    0 1 2
// 0 [0,1,1]
// 1 [0,1,1]


// Here, six pairs of adjacent hedges (`1`s) have formed:
// - (0,1) and (0,2)
// - (0,2) and (1,1)
// - (0,2) and (1,2)
// - (1,1) and (0,2)
// - (1,1) and (1,2)
// - (1,2) and (0,2)

// Therefore, the function `neighborsAfterYears(initialGarden1, 1)` should return `6`, which represents the number of adjacent hedge pairs after one year of growth.
