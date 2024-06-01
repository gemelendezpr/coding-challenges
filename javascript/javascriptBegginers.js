//HomeWork

//14. BONUS Create a for loop that iterates over an array. On the first iteration the loop will log to the console the fist element in the array and the last element. On the second iteration the loop will log to the console the 2nd element in the array and the second to the last element. This process will continue until all the element in the array are logged.

// Use your for loop to print the text from "mySpecialArray"
//ex. if you used this loop on the array ['p','o','r','m','s','a','g','r'] you would see the text logged to the console that spelled "programs"

const mySpecialArray = ["I", "L", "v", " ", "o", "e", "m", "t", "h", "i", "s", "d", "C", "e", "o", " "];

function logSpecialArray(array) {
  // Initialize an empty string to store the result
  let result = '';

  // Calculate the midpoint of the array to know when to stop the loop
  const midpoint = Math.ceil(array.length / 2);

  // Iterate over the array until the midpoint
  for (let i = 0; i < midpoint; i++) {
    // Add the current element from the start of the array
    result += array[i];

    // Add the corresponding element from the end of the array if it's not the same as the current element
    const mirrorIndex = array.length - 1 - i;
    if (i !== mirrorIndex) {
      result += array[mirrorIndex];
    }
  }

  // Log the final result
  console.log(result);
}

// Call the function to check your work
logSpecialArray(mySpecialArray); // Expected log: "I Love Codesmith"

/*
Time & Space Complexity:
The time and space complexity remain unchanged:

Time Complexity: O(n), where n is the length of the array.
Space Complexity: O(1), aside from the input and output, the extra space used is constant.
*/