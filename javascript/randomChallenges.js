
////////////////////////////
//     Challenge 1
////////////////////////////


// Declare a function 'circleSort' that takes in an array as its single argument and returns another array. 
// The returned array should arrange the elements from the original array in a clockwise order, starting from the first element and sorting them by decreasing 'radius'.

// declare a function circleSort
// the function takes an array as a single argument 
// the function return a new array
// the returned array re-arranged the original elements ina a clockwise order

function circleSort (arr) {
    newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr = arr.push[i] + arr.push[i--]
        // takes the first element and last element and push it into the new array
        // repeat the same intruction until theres no element left in the array 
        // return the new array
    }

    return newArr; 
}

console.log(circleSort([1, 2, 3, 4, 5, 6]));	// [1, 6, 2, 5, 3, 4]
console.log(circleSort([1, 4, 5, 2, 8, 2]));	// [1, 2, 4, 8, 5, 2]
/*

		·-------------------·
		|   ·-----------·   |
		|   |   ·---·   |   |
		|   |   |   |   |   |
        |   |   |   v   v   v
	 ->	1   4   5   2   8   2
            ^   ^       |   |
            |   |       |   |
            |   |       |   |
            |   ·-------·   |
            ·---------------·
    
*/