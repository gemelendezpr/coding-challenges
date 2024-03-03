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

  //2. Create a function subtractTwo that accepts a number and returns that number minus 2.

// Then create a function map that takes two inputs -

// an array of numbers (a list of numbers)
// a 'callback' function - this function is applied to each element of the array (inside of the function 'map')
// Have your map function return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. Please do not use the native map or forEach method.

// map([3,4,5], subtractTwo); //-> [1,2,3]
// subtractTwo(10); //-> 8
// subtractTwo(12); //-> 10

//  Solution:

// ADD CODE HERE
function subtractTwo(number) {
    return number - 2;
  }
  
  function map(array, callback) {
    // Initialize an empty array to store the result
    const mappedArray = [];
  
    // Iterate through each element in the input array
    for (let i = 0; i < array.length; i++) {
      // Apply the 'callback' function to each element and push the result to the result array
      mappedArray.push(callback(array[i]));
    }
  
    // Return the result array
    return mappedArray;
  }
  // Uncomment these to check your work!
  console.log(typeof subtractTwo); // should log: 'function'
  console.log(typeof map); // should log: 'function'
  console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]

// 3.  Challenge: forEach

// Part 1
// Create a function forEach which takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything. Please do not use the native forEach or map method.

// let alphabet = '';
// const letters = ['a', 'b', 'c', 'd'];
// forEach(letters, function(char) {
//   alphabet += char;
// });
// console.log(alphabet); //prints 'abcd'
// Part 2
// Now let's rebuild map from the previous challenge. This time instead of using a for loop, you're going to use the forEach we just created.

// Solution

// ADD CODE HERE
// Part 1
function forEach(array, callback) {
    // Run the callback on each element of the array
    for (let i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  }
  
  // Part 2
  function map(array, callback) {
    // Initialize an empty array to store the result
    const mappedArray = [];
  
    // Use the forEach function to apply the callback on each element
    forEach(array, function(element) {
      // Push the result to the result array
      mappedArray.push(callback(element));
    });
  
    // Return the result array
    return mappedArray;
  }
  
  // Uncomment these to check your work!
  console.log(typeof forEach); // should log: 'function'
  forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
  console.log(typeof map); // should log: 'function'
  console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]

  //4. Challenge: filterArray

// Add code to the functions func1 and func2 in the places marked "ADD CODE HERE" in order to achieve the desired console logs.

function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i])) newArray.push(array[i]);
  }
  return newArray;
}

const arrOfNums = [1, 2, 3, 4, 5];

function func1(num) {
  // ADD CODE HERE
  return num % 2 === 0;
}

function func2(num) {
  // ADD CODE HERE
  return num % 2 !== 0;
}
  // Uncomment these to check your work!
  console.log(filterArray(arrOfNums, func1)); // should log: [2, 4]
  console.log(filterArray(arrOfNums, func2)); // should log: [1, 3, 5]

  //5. Challenge: eitherFilter

// Add code to the function eitherFilter in the place marked "ADD CODE HERE" in order to achieve the desired console logs. 
//The array returned from eitherFilter should contain all elements in the passed-in array that yield a truthy return value when passed into EITHER of the two callbacks passed into eitherFilter.

function eitherFilter(array, callback1, callback2) {
  // ADD CODE HERE
const filteredArray = array.filter((element) => callback1(element) || callback2(element));
  return filteredArray;
}

// Uncomment these to check your work!
const arrayOfNums = [10, 35, 105, 9];
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
const over100 = n => n > 100;
console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]

//6. Challenge: eitherCallback

// Add code to the function eitherCallback in the place marked "ADD CODE HERE" in order to achieve the desired console logs. 
//Notice that the lines of code testing your work are using functions and an array from previous challenges. 
//The result of using eitherCallback to combine two callbacks into one callback and then passing that one callback into filterArray should match the results of simply passing the two callbacks into eitherFilter in the previous challenge.

function eitherCallback(callback1, callback2) {
  // ADD CODE HERE
  return function (value, index, array) {
    return callback1(value, index, array) || callback2(value, index, array);
  };
}

// Uncomment these to check your work!
function filterArray(array, callback) {
  const newArray = [];
  for (let i = 0; i < array.length; i += 1) {
    if (callback(array[i], i, array)) newArray.push(array[i]);
  }
  return newArray;
}

const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]

//7. Challenge: reduce

// The function reduce takes an array and reduces the elements to a single value.

// The reduce function loops through the array and applies any operation that you can put into a function to each element in the array while keeping track of the outcome of each loop. In this way, we could use reduce to do things like sum all the numbers in an array or multiply them all together.

// const nums = [4, 1, 3];
// const add = function(a, b) { return a + b; }
// reduce(nums, add, 0); //-> 8
// Here's how it works:

// The function has an "accumulator value". Its job is to keep track of the accumulated output of each loop. It starts out equal to the initialValue.
// The array is iterated over, passing the accumulator and the next array element as arguments to the callback, and in that order.
// The callback's return value becomes the new accumulator value.
// The next loop executes with this new accumulator value.
// In the example above, the accumulator begins at 0. add(0,4) is called. The accumulator's value is now 4. Then add(4, 1) makes it 5. Finally add(5, 3) brings it to 8, which is returned.

// Construct your own reduce function that accepts an array, a callback, and an initial value and returns a single value.

function reduce(array, callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }

  return accumulator;
}

const nums = [4, 1, 3];
const add = function(a, b) { return a + b; }
console.log(reduce(nums, add, 0)); // should log 8