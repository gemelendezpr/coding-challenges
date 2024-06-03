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

// Assessment 
/*
TEST
Note: This assessment is intended to be worked on independently, and all work submitted must be strictly your own. While you may feel free to research and reference documentation online if stuck, do not consult with your cohortmates on any of the problems.

Challenge 1:
You have a list of songs you want to play in an array “songs”. Define a function musicPlayer that takes one argument, an array of objects, where each object is a song. musicPlayer will iterate/loop through the array and print all the songs and artists to the console in the following format: 'Now playing: by '.

Challenge 2:
Create a function called findOddNumbers that takes one argument called “numArray", which is an array of numbers. When findOddNumbers is invoked it will return a new array with all of the numbers that are odd.

Challenge 3:
Our design team wants to get more attraction to our page and decided to experiment with the title of our page. We want to capitalized the first three character of each title.

Create a function capitalizeThreeLetters that takes in one parameter, a string representation of a word, and outputs the same string with the first three characters capitalized.

CS PREP ADMISSIONS CHALLENGE:
If you are interested in attending CS Prep after this course and have not already been accepted, you will need to complete and pass the following challenge in order to receive a fast-track code granting you automatic acceptance into CS Prep. Once your assessment has been graded, if you have passed, the Prep Program Coordinator will send you the fast-track code to use for your application. If you have already applied to CS Prep but have not yet been accepted, you can complete the following challenge to expedite your enrollment.

Create a function applyAll that takes an array and a callback as arguments. applyAll will return a new array where each element from the original array will have had the callback applied to it.
*/