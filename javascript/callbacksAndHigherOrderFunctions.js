//1. Challenge: pluralize
// Create a function pluralize that takes an array of strings as input and returns a new array with an "s" added to the end of each string in the input array. 
//For example, if the string "carrot" is in the input array, it should become the string "carrots" in the output array.
// The body of the pluralize function should employ a single for loop that pluralizes each string in the input array.

// Solution
function pluralize(array) {
    // Initialize an empty array to store the result
    const pluralizedArray = [];
  
    // Iterate through each string in the input array
    for (let i = 0; i < array.length; i++) {
      // Add an "s" to the end of each string and push it to the result array
      pluralizedArray.push(array[i] + 's');
    }
  
    // Return the result array
    return pluralizedArray;
  }
  // Uncomment these to check your work!
  const animals = ["dog", "cat", "tree frog"];
  console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]