// //1. Challenge: pluralize
// // Create a function pluralize that takes an array of strings as input and returns a new array with an "s" added to the end of each string in the input array. 
// //For example, if the string "carrot" is in the input array, it should become the string "carrots" in the output array.
// // The body of the pluralize function should employ a single for loop that pluralizes each string in the input array.

// // Solution
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

//   //2. Create a function subtractTwo that accepts a number and returns that number minus 2.

// // Then create a function map that takes two inputs -

// // an array of numbers (a list of numbers)
// // a 'callback' function - this function is applied to each element of the array (inside of the function 'map')
// // Have your map function return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array. Please do not use the native map or forEach method.

// // map([3,4,5], subtractTwo); //-> [1,2,3]
// // subtractTwo(10); //-> 8
// // subtractTwo(12); //-> 10

// //  Solution:

// // ADD CODE HERE
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

// // 3.  Challenge: forEach

// // Part 1
// // Create a function forEach which takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything. Please do not use the native forEach or map method.

let alphabet = '';
const letters = ['a', 'b', 'c', 'd'];
forEach(letters, function(char) {
  alphabet += char;
});
console.log(alphabet); //prints 'abcd'
// // Part 2
// // Now let's rebuild map from the previous challenge. This time instead of using a for loop, you're going to use the forEach we just created.

// // Solution

// // ADD CODE HERE
// // Part 1
function forEach(array, callback) {
    // Run the callback on each element of the array
    for (let i = 0; i < array.length; i++) {
      callback(array[i]);
    }
  }
  
//   // Part 2
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

//   //4. Challenge: filterArray

// // Add code to the functions func1 and func2 in the places marked "ADD CODE HERE" in order to achieve the desired console logs.

// Define the function filterArray that takes an array and a callback function as parameters
function filterArray(array, callback) {
  // Initialize an empty array to store filtered elements
  const newArray = [];
  // Iterate through each element of the input array using a for loop
  for (let i = 0; i < array.length; i += 1) {
    // Check if the callback function returns true for the current element
    if (callback(array[i])) {
      // If the callback returns true, push the element into the new array
      newArray.push(array[i]);
    }
  }
  // Return the new array containing filtered elements
  return newArray;
}

// Define an array of numbers
const arrOfNums = [1, 2, 3, 4, 5];

// Define the callback function func1 to filter even numbers
function func1(num) {
  // Check if the number is even by checking if the remainder of division by 2 is 0
  return num % 2 === 0;
}

// Define the callback function func2 to filter odd numbers
function func2(num) {
  // Check if the number is odd by checking if the remainder of division by 2 is not 0
  return num % 2 !== 0;
}

// Uncomment these to check your work!
// Filter even numbers using func1 and log the result
console.log(filterArray(arrOfNums, func1)); // should log: [2, 4]
// Filter odd numbers using func2 and log the result
console.log(filterArray(arrOfNums, func2)); // should log: [1, 3, 5]

//   //5. Challenge: eitherFilter

// // Add code to the function eitherFilter in the place marked "ADD CODE HERE" in order to achieve the desired console logs. 
// //The array returned from eitherFilter should contain all elements in the passed-in array that yield a truthy return value when passed into EITHER of the two callbacks passed into eitherFilter.

// Define the function eitherFilter that takes an array and two callback functions as parameters
function eitherFilter(array, callback1, callback2) {
  // Use the filter method to create a new array containing elements that yield a truthy value
  // when passed into either callback1 or callback2
  const filteredArray = array.filter((element) => callback1(element) || callback2(element));
  // Return the filtered array
  return filteredArray;
}

// Uncomment these to check your work!
// Define the array of numbers
// const arrOfNums = [10, 35, 105, 9];
// // Define the callback function to check if the number is an integer square root
// const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
// Define the call

// //6. Challenge: eitherCallback

// // Add code to the function eitherCallback in the place marked "ADD CODE HERE" in order to achieve the desired console logs. 
// //Notice that the lines of code testing your work are using functions and an array from previous challenges. 
// //The result of using eitherCallback to combine two callbacks into one callback and then passing that one callback into filterArray should match the results of simply passing the two callbacks into eitherFilter in the previous challenge.

// Define the function eitherCallback that takes two callback functions as parameters
function eitherCallback(callback1, callback2) {
  // Return a new function that takes value, index, and array as parameters
  return function (value, index, array) {
    // Return true if either callback1 or callback2 returns true for the given value, index, and array
    return callback1(value, index, array) || callback2(value, index, array);
  };
}

// Define the function filterArray that takes an array and a callback as parameters
function filterArray(array, callback) {
  // Initialize an empty array to store filtered elements
  const newArray = [];
  // Loop through each element of the array
  for (let i = 0; i < array.length; i += 1) {
    // If the callback returns true for the current element, push it to the newArray
    if (callback(array[i], i, array)) newArray.push(array[i]);
  }
  // Return the filtered array
  return newArray;
}

/* Define the array of numbers
const arrOfNums = [10, 35, 105, 9];
// Define the callback function to check if the number is an integer square root
const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
// Define the callback function to check if the number is over 100
const over100 = n => n > 100;
// Create a new callback function that combines integerSquareRoot and over100 using eitherCallback
const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
// Log the result of filtering arrOfNums using the combined callback function
console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]
*/


// //7. Challenge: reduce

// // The function reduce takes an array and reduces the elements to a single value.

// // The reduce function loops through the array and applies any operation that you can put into a function to each element in the array while keeping track of the outcome of each loop. In this way, we could use reduce to do things like sum all the numbers in an array or multiply them all together.

// // const nums = [4, 1, 3];
// // const add = function(a, b) { return a + b; }
// // reduce(nums, add, 0); //-> 8
// // Here's how it works:

// // The function has an "accumulator value". Its job is to keep track of the accumulated output of each loop. It starts out equal to the initialValue.
// // The array is iterated over, passing the accumulator and the next array element as arguments to the callback, and in that order.
// // The callback's return value becomes the new accumulator value.
// // The next loop executes with this new accumulator value.
// // In the example above, the accumulator begins at 0. add(0,4) is called. The accumulator's value is now 4. Then add(4, 1) makes it 5. Finally add(5, 3) brings it to 8, which is returned.

// // Construct your own reduce function that accepts an array, a callback, and an initial value and returns a single value.

// Define the function reduce that takes an array, a callback, and an initial value as parameters
function reduce(array, callback, initialValue) {
  // Initialize an accumulator with the initial value
  let accumulator = initialValue;

  // Loop through each element of the array
  for (let i = 0; i < array.length; i++) {
    // Update the accumulator by applying the callback function to the current accumulator and array element
    accumulator = callback(accumulator, array[i]);
  }

  // Return the final accumulator value
  return accumulator;
}

// Uncomment these to check your work!
// // Define an array of numbers
// const nums = [4, 1, 3];
// // Define a callback function to add two numbers
// const add = function(a, b) { return a + b; }
// // Log the result of reducing the nums array using the add callback and an initial value of 0
// console.log(reduce(nums, add, 0)); // should log 8

// //8. Challenge: intersection

// // Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!

// // Is it working? Check my answer
// // intersection should be a function

// // intersection should return an array

// // intersection should find common elements in two arrays

// // intersection should find common elements in many arrays

// Define the function intersection that takes an array of arrays as its parameter
function intersection(arrays) {
  // Use the reduce method to iterate over the arrays and find common elements
  return arrays.reduce((commonElements, currentArray) => {
    // Filter the commonElements array to keep only elements that are present in the currentArray
    return commonElements.filter(element => currentArray.includes(element));
  });
}

// Uncomment these to check your work!
// Define three arrays
// const arr1 = [5, 10, 15, 20];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [1, 10, 15, 5, 20];
// // Log the result of finding the intersection of the three arrays
// console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]


// //9. Challenge: union

// Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. If there are duplicate elements, only add it once to the new array.
// Preserve the order of the elements starting from the first element of the first input array. BONUS - Use reduce!

// ADD CODE HERE
// Define the function union that takes an array of arrays as its parameter
function union(arrays) {
  // Use the reduce method to flatten the arrays and remove duplicates
  return arrays.reduce((flatArray, currentArray) => {
    // Iterate over the currentArray
    currentArray.forEach(element => {
      // Check if the flatArray does not already include the current element
      if (!flatArray.includes(element)) {
        // If not included, push the element to the flatArray
        flatArray.push(element);
      }
    });
    // Return the flattened array
    return flatArray;
  }, []); // Start with an empty array as the initial value for the flatArray
}

// Uncomment these to check your work!
// Define three arrays
// const arr1 = [5, 10, 15];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [100, 15, 10, 1, 5];
// // Log the result of finding the union of the three arrays
// console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]


//10. Challenge: objOfMatches

// Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. 
//If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.

// ADD CODE HERE
// Define the function objOfMatches that takes three parameters: arr1, arr2, and callback
function objOfMatches(arr1, arr2, callback) {
  // Initialize an empty object to store the result
  const resultObj = {};

  // Loop through each element in arr1 using a for loop
  for (let i = 0; i < arr1.length; i++) {
    // Get the current key from arr1
    const key = arr1[i];
    // Get the corresponding value from arr2
    const value = arr2[i];

    // Check if the result of applying the callback to the key matches the value
    if (callback(key) === value) {
      // If there's a match, add the key-value pair to the resultObj
      resultObj[key] = value;
    }
  }

  // Return the populated resultObj
  return resultObj;
}

// Uncomment these to check your work!
// Define two arrays
const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
// Define the callback function
function uppercaser(str) { return str.toUpperCase(); }
// Log the result of objOfMatches using the arrays and callback
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }


//11. Challenge: arrToObj

// Add code to the function arrToObj in the place marked "ADD CODE HERE" in order to achieve the desired console logs. arrToObj should return an object that has elements from the passed-in array as keys, and the outputs from the callback (when those elements are passed in) as the corresponding values.

// Is it working? Check my answer
// arrToObj should be a function

// arrToObj(arrOfStrings, capitalize) should return { beer: 'BEER', glue: 'GLUE' }

// Define the function arrToObj that takes an array and a callback function as parameters
function arrToObj(array, callback) {
  // Use the reduce method on the array to transform it into an object
  return array.reduce((obj, element) => {
    // For each element in the array, apply the callback function and assign the result as the value to the element key in the object
    obj[element] = callback(element);
    // Return the updated object
    return obj;
  }, {}); // Initialize the accumulator as an empty object
}

// Uncomment these to check your work!
// Define an array of strings
const arrOfStrings = ['beer', 'glue'];
// Define the callback function to capitalize each string
const capitalize = str => str.toUpperCase();
// Log the result of arrToObj using the array and callback
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }


//12. Challenge: joinAndMap

// Construct a function joinAndMap with three parameters: array1, array2, and a callback function. The function should combine the two arrays then invoke the callback function on each element, returning the resulting array. This function should not mutate the passed-in arrays.

// Is it working? Check my answer
// joinAndMap should be a function

// joinAndMap should return an empty array when called with two empty arrays

// joinAndMap should not mutate either input array

// joinAndMap should join and map the items in the input array


// Define the function joinAndMap that takes two arrays and a callback function as parameters
function joinAndMap(array1, array2, callback) {
  // Concatenate the two input arrays into a single array
  const combinedArray = array1.concat(array2);
  // Map over the combined array and apply the callback function to each element
  // Return the resulting array
  return combinedArray.map(element => callback(element));
}

// Uncomment these to check your work!
// Define the arrays
const arrRed = ['strawberry', 'cherry', 'wine'];
const arrBlue = ['blueberry', 'sky', 'ocean'];
// Define the callback function to capitalize each element
const capitalize = str => str.toUpperCase();
// Call the joinAndMap function with the arrays and the capitalize callback function
console.log(joinAndMap(arrRed, arrBlue, capitalize)); // should log: ['STRAWBERRY', 'CHERRY', 'WINE', 'BLUEBERRY', 'SKY', 'OCEAN']



//13. Challenge: multiMap

// Construct a function multiMap that will accept two arrays - an array of values and an array of callbacks. multiMap will return an object whose keys match the elements in the array of values. 
//The corresponding values that are assigned to the keys will be arrays consisting of outputs from the array of callbacks, where the input to each callback is the key.

// ADD CODE HERE
// Defines a function named multiMap that takes two parameters, values and callbacks.
function multiMap(values, callbacks) {
  // Initializes an empty object resultObj to store the final result.
  const resultObj = {};
  // Utilizes the forEach method to iterate through each element (value) in the values array.
  values.forEach(value => {
    // Inside the loop, it uses the map method on the callbacks array to apply each callback to the current value.
    // The result of each map operation (an array of callback results) is assigned as the value for the current value key in the resultObj.
    resultObj[value] = callbacks.map(callback => callback(value));
  });
  // After the loop completes, the function returns the resultObj, which now contains keys from the values array and corresponding values as arrays generated by applying each callback.
  return resultObj;
}

// Uncomment these to check your work!
// // Define callback functions to uppercase, capitalize, and repeat the strings
// function uppercaser(str) { return str.toUpperCase(); }
// function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
// function repeater(str) { return str + str; }
// // Define an array of strings to be processed
// const items = ['catfood', 'glue', 'beer'];
// // Define an array of callback functions
// const functions = [uppercaser, capitalize, repeater];
// // Call the multiMap function with the items array and the functions array
// console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }


//Without arrow function:

// ADD CODE HERE
// Defines a function named multiMap that takes two parameters, values and callbacks.
function multiMap(values, callbacks) {
  // Initializes an empty object resultObj to store the final result.
  const resultObj = {};
  // Utilizes the forEach method to iterate through each element (value) in the values array.
  values.forEach(value => {
    // Inside the loop, it uses the map method on the callbacks array to apply each callback to the current value.
    // The result of each map operation (an array of callback results) is assigned as the value for the current value key in the resultObj.
    resultObj[value] = callbacks.map(callback => callback(value));
  });
  // After the loop completes, the function returns the resultObj, which now contains keys from the values array and corresponding values as arrays generated by applying each callback.
  return resultObj;
}

// Uncomment these to check your work!
// Define callback functions to uppercase, capitalize, and repeat the strings
function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
// Define an array of strings to be processed
const items = ['catfood', 'glue', 'beer'];
// Define an array of callback functions
const functions = [uppercaser, capitalize, repeater];
// Call the multiMap function with the items array and the functions array
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

//14. Challenge: majority

// Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true.
// If the number of true returns is equal to the number of false returns, majority should return false.

// ADD CODE HERE

// Defines a function named majority that takes two parameters, array and callback.
function majority(array, callback) {
  // Initializes counters for true and false results.
  let trueCount = 0;
  let falseCount = 0;

  // Iterates through each element in the array.
  array.forEach(element => {
    // Checks if the callback returns true for the current element.
    if (callback(element)) {
      // If true, increments the trueCount.
      trueCount++;
    } else {
      // If false, increments the falseCount.
      falseCount++;
    }
  });

  // Returns true if the trueCount is greater than falseCount, indicating a majority of true results.
  return trueCount > falseCount;
}

// Uncomment these to check your work!
// Defines a callback function to check if a number is odd.
const isOdd = function(num) { return num % 2 === 1; };
// Checks if there is a majority of odd numbers in the array [1, 2, 3, 4, 5].
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// Checks if there is a majority of odd numbers in the array [2, 3, 4, 5].
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false


//15. Challenge: prioritize

// Create a function prioritize that accepts an array and a callback. 
//The callback will return either true or false. prioritize will iterate through the array and perform the callback on each element, and return a new array, where all the elements that yielded a return value of true come first in the array, and the rest of the elements come second.

// ADD CODE HERE
function prioritize(array, callback) {
  // Create an empty array to store elements that yield true returns from the callback
  const trueArray = [];
  // Create an empty array to store elements that yield false returns from the callback
  const falseArray = [];

  // Iterate through each element in the array
  array.forEach(element => {
    // Check if the callback returns true for the current element
    if (callback(element)) {
      // If true, push the element into the trueArray
      trueArray.push(element);
    } else {
      // If false, push the element into the falseArray
      falseArray.push(element);
    }
  });

  // Concatenate trueArray and falseArray to create a new array
  // where elements yielding true values come first
  return trueArray.concat(falseArray);
}

// Uncomment these to check your work!
// Define a callback function that checks if a string starts with 's'
function startsWithS(str) { return str[0].toLowerCase() === 's'; }
// Define an array of TV shows
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends'];
// Call prioritize function with tvShows array and startsWithS callback
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']

//16.Challenge: countBy

// Create a function countBy that accepts an array and a callback, and returns an object. countBy will iterate through the array and perform the callback on each element. 
//Each return value from the callback will be saved as a key on the object. The value associated with each key will be the number of times that particular return value was returned.

// ADD CODE HERE
function countBy(array, callback) {
  // Create an empty object to store counts of each return value from the callback
  const counts = {};

  // Iterate through each element in the array
  array.forEach(element => {
    // Apply the callback to the current element to get the key
    const key = callback(element);
    // Increment the count associated with the key in the counts object
    // If the key doesn't exist yet, set its count to 1
    counts[key] = (counts[key] || 0) + 1;
  });

  // Return the counts object containing the counts of each return value
  return counts;
}

// Uncomment these to check your work!
// Define a callback function that returns 'even' for even numbers and 'odd' for odd numbers
function evenOdd(n) {
  if (n % 2 === 0) return 'even';
  else return 'odd';
}
// Define an array of numbers
const nums = [1, 2, 3, 4, 5];
// Call countBy function with nums array and evenOdd callback
console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }

//17. Challenge: groupBy

// Create a function groupBy that accepts an array and a callback, and returns an object. groupBy will iterate through the array and perform the callback on each element. 
//Each return value from the callback will be saved as a key on the object. The value associated with each key will be an array consisting of all the elements that resulted in that return value when passed into the callback.

// ADD CODE HERE
function groupBy(array, callback) {
  // Initialize an empty object to store the grouped elements
  const grouped = {};

  // Iterate through each element in the array
  array.forEach(element => {
    // Apply the callback to the current element to get the key
    const key = callback(element);

    // Check if the key already exists in the grouped object
    if (!grouped[key]) {
      // If the key doesn't exist, create a new array with the current element
      grouped[key] = [element];
    } else {
      // If the key already exists, push the current element to the existing array
      grouped[key].push(element);
    }
  });

  // Return the grouped object
  return grouped;
}
// Uncomment these to check your work!
// Define an array of decimals
const decimals = [1.3, 2.1, 2.4];
// Define a callback function that floors each decimal number
const floored = function(num) { return Math.floor(num); };
// Call groupBy function with decimals array and floored callback
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

//18. Challenge: goodKeys

//Create a function goodKeys that accepts an object and a callback.
//The callback will return either true or false. goodKeys will iterate through the object and perform the callback on each value. goodKeys will then return an array consisting only the keys whose associated values yielded a true return value from the callback.

// ADD CODE HERE
function goodKeys(object, callback) {
  // Initialize an empty array to store keys with true return values
  const keys = [];

  // Iterate through each key-value pair in the object
  for (const key in object) {
    // Check if the callback returns true for the value associated with the current key
    if (callback(object[key])) {
      // If the callback returns true, push the current key to the keys array
      keys.push(key);
    }
  }

  // Return the array of keys with true return values from the callback
  return keys;
}
// Uncomment these to check your work!
// Define an object with various key-value pairs
const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// Define a callback function that returns true if the value starts with 'bird'
function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// Call goodKeys function with sunny object and startsWithBird callback
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']