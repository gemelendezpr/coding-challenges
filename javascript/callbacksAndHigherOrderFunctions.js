// //1. Challenge: pluralize
// // Create a function pluralize that takes an array of strings as input and returns a new array with an "s" added to the end of each string in the input array. 
// //For example, if the string "carrot" is in the input array, it should become the string "carrots" in the output array.
// // The body of the pluralize function should employ a single for loop that pluralizes each string in the input array.

// // Solution
// function pluralize(array) {
//     // Initialize an empty array to store the result
//     const pluralizedArray = [];
  
//     // Iterate through each string in the input array
//     for (let i = 0; i < array.length; i++) {
//       // Add an "s" to the end of each string and push it to the result array
//       pluralizedArray.push(array[i] + 's');
//     }
  
//     // Return the result array
//     return pluralizedArray;
//   }
//   // Uncomment these to check your work!
//   const animals = ["dog", "cat", "tree frog"];
//   console.log(pluralize(animals)); // should log: ["dogs", "cats", "tree frogs"]

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
// function subtractTwo(number) {
//     return number - 2;
//   }
  
//   function map(array, callback) {
//     // Initialize an empty array to store the result
//     const mappedArray = [];
  
//     // Iterate through each element in the input array
//     for (let i = 0; i < array.length; i++) {
//       // Apply the 'callback' function to each element and push the result to the result array
//       mappedArray.push(callback(array[i]));
//     }
  
//     // Return the result array
//     return mappedArray;
//   }
//   // Uncomment these to check your work!
//   console.log(typeof subtractTwo); // should log: 'function'
//   console.log(typeof map); // should log: 'function'
//   console.log(map([3,4,5], subtractTwo)); // should log: [ 1, 2, 3 ]

// // 3.  Challenge: forEach

// // Part 1
// // Create a function forEach which takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything. Please do not use the native forEach or map method.

// // let alphabet = '';
// // const letters = ['a', 'b', 'c', 'd'];
// // forEach(letters, function(char) {
// //   alphabet += char;
// // });
// // console.log(alphabet); //prints 'abcd'
// // Part 2
// // Now let's rebuild map from the previous challenge. This time instead of using a for loop, you're going to use the forEach we just created.

// // Solution

// // ADD CODE HERE
// // Part 1
// function forEach(array, callback) {
//     // Run the callback on each element of the array
//     for (let i = 0; i < array.length; i++) {
//       callback(array[i]);
//     }
//   }
  
//   // Part 2
//   function map(array, callback) {
//     // Initialize an empty array to store the result
//     const mappedArray = [];
  
//     // Use the forEach function to apply the callback on each element
//     forEach(array, function(element) {
//       // Push the result to the result array
//       mappedArray.push(callback(element));
//     });
  
//     // Return the result array
//     return mappedArray;
//   }
  
//   // Uncomment these to check your work!
//   console.log(typeof forEach); // should log: 'function'
//   forEach(['a','b','c'], i => console.log(i)); // should log: 'a', 'b', 'c'
//   console.log(typeof map); // should log: 'function'
//   console.log(map([3,4,5], n => n - 2)); // should log: [1, 2, 3]

//   //4. Challenge: filterArray

// // Add code to the functions func1 and func2 in the places marked "ADD CODE HERE" in order to achieve the desired console logs.

// function filterArray(array, callback) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (callback(array[i])) newArray.push(array[i]);
//   }
//   return newArray;
// }

// const arrOfNums = [1, 2, 3, 4, 5];

// function func1(num) {
//   // ADD CODE HERE
//   return num % 2 === 0;
// }

// function func2(num) {
//   // ADD CODE HERE
//   return num % 2 !== 0;
// }
//   // Uncomment these to check your work!
//   console.log(filterArray(arrOfNums, func1)); // should log: [2, 4]
//   console.log(filterArray(arrOfNums, func2)); // should log: [1, 3, 5]

//   //5. Challenge: eitherFilter

// // Add code to the function eitherFilter in the place marked "ADD CODE HERE" in order to achieve the desired console logs. 
// //The array returned from eitherFilter should contain all elements in the passed-in array that yield a truthy return value when passed into EITHER of the two callbacks passed into eitherFilter.

// function eitherFilter(array, callback1, callback2) {
//   // ADD CODE HERE
// const filteredArray = array.filter((element) => callback1(element) || callback2(element));
//   return filteredArray;
// }

// // Uncomment these to check your work!
// const arrayOfNums = [10, 35, 105, 9];
// const integerSquareRoot = n => Math.sqrt(n) % 1 === 0;
// const over100 = n => n > 100;
// console.log(eitherFilter(arrOfNums, integerSquareRoot, over100)); // should log: [105, 9]

// //6. Challenge: eitherCallback

// // Add code to the function eitherCallback in the place marked "ADD CODE HERE" in order to achieve the desired console logs. 
// //Notice that the lines of code testing your work are using functions and an array from previous challenges. 
// //The result of using eitherCallback to combine two callbacks into one callback and then passing that one callback into filterArray should match the results of simply passing the two callbacks into eitherFilter in the previous challenge.

// function eitherCallback(callback1, callback2) {
//   // ADD CODE HERE
//   return function (value, index, array) {
//     return callback1(value, index, array) || callback2(value, index, array);
//   };
// }

// // Uncomment these to check your work!
// function filterArray(array, callback) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (callback(array[i], i, array)) newArray.push(array[i]);
//   }
//   return newArray;
// }

// const intSqRtOrOver100 = eitherCallback(integerSquareRoot, over100);
// console.log(filterArray(arrOfNums, intSqRtOrOver100)); // should log: [105, 9]

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

// function reduce(array, callback, initialValue) {
//   let accumulator = initialValue;

//   for (let i = 0; i < array.length; i++) {
//     accumulator = callback(accumulator, array[i]);
//   }

//   return accumulator;
// }

// const nums = [4, 1, 3];
// const add = function(a, b) { return a + b; }
// console.log(reduce(nums, add, 0)); // should log 8

// //8. Challenge: intersection

// // Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS - Use reduce!

// // Is it working? Check my answer
// // intersection should be a function

// // intersection should return an array

// // intersection should find common elements in two arrays

// // intersection should find common elements in many arrays

// function intersection(arrays) {
//   return arrays.reduce((commonElements, currentArray) => {
//     return commonElements.filter(element => currentArray.includes(element));
//   });
// }
// // Uncomment these to check your work!
// const arr1 = [5, 10, 15, 20];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [1, 10, 15, 5, 20];
// console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

// //9. Challenge: union

// Construct a function union that takes an input array of arrays, compares each array, and returns a new flat array that contains all elements. If there are duplicate elements, only add it once to the new array.
// Preserve the order of the elements starting from the first element of the first input array. BONUS - Use reduce!

// ADD CODE HERE
function union(arrays) {
  return arrays.reduce((flatArray, currentArray) => {
    currentArray.forEach(element => {
      if (!flatArray.includes(element)) {
        flatArray.push(element);
      }
    });
    return flatArray;
  }, []);
}
// Uncomment these to check your work!
const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]

//10. Challenge: objOfMatches

// Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. 
//If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.

// ADD CODE HERE
function objOfMatches(arr4, arr5, callback) {

  const resultObj = {};

  for (let i = 0; i < arr4.length; i++) {
    const key = arr4[i];
    const value = arr5[i];

    if (callback(key) === value) {
      resultObj[key] = value;
    }
  }

  return resultObj;
}
// Uncomment these to check your work!
const arr4 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr5 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }

//11. Challenge: arrToObj

// Add code to the function arrToObj in the place marked "ADD CODE HERE" in order to achieve the desired console logs. arrToObj should return an object that has elements from the passed-in array as keys, and the outputs from the callback (when those elements are passed in) as the corresponding values.

// Is it working? Check my answer
// arrToObj should be a function

// arrToObj(arrOfStrings, capitalize) should return { beer: 'BEER', glue: 'GLUE' }

function arrToObj(array, callback) {
  // ADD CODE HERE
    return array.reduce((obj, element) => {
    obj[element] = callback(element);
    return obj;
  }, {});
}

// Uncomment these to check your work!
const arrOfStrings = ['beer', 'glue'];
const capitalize = str => str.toUpperCase();
console.log(arrToObj(arrOfStrings, capitalize)); // should log: { beer: 'BEER', glue: 'GLUE' }

//12. Challenge: joinAndMap

// Construct a function joinAndMap with three parameters: array1, array2, and a callback function. The function should combine the two arrays then invoke the callback function on each element, returning the resulting array. This function should not mutate the passed-in arrays.

// Is it working? Check my answer
// joinAndMap should be a function

// joinAndMap should return an empty array when called with two empty arrays

// joinAndMap should not mutate either input array

// joinAndMap should join and map the items in the input array


function joinAndMap(array1, array2, callback) {
  const combinedArray = array1.concat(array2);
  return combinedArray.map(element => callback(element));
}
// Uncomment these to check your work!
const arrRed = ['strawberry', 'cherry', 'wine'];
const arrBlue = ['blueberry', 'sky', 'ocean'];
const capitalize = str => str.toUpperCase();
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
// Inside the loop, it uses the map method on the callbacks array to apply each callback to the current value.
// The result of each map operation (an array of callback results) is assigned as the value for the current value key in the resultObj.
  values.forEach(value => {
    resultObj[value] = callbacks.map(callback => callback(value));
  });
// After the loop completes, the function returns the resultObj, which now contains keys from the values array and corresponding values as arrays generated by applying each callback.
  return resultObj;
}

//Without arrow function:

// ADD CODE HERE
// Defines a function named multiMap that takes two parameters, values and callbacks.
function multiMap(values, callbacks) {
  // Initializes an empty object resultObj to store the final result.
  const resultObj = {};
// Utilizes the forEach method to iterate through each element (value) in the values array.
// Inside the loop, it uses the map method on the callbacks array to apply each callback to the current value.
// The result of each map operation (an array of callback results) is assigned as the value for the current value key in the resultObj.
  values.forEach(value => {
    resultObj[value] = callbacks.map(callback => callback(value));
  });
// After the loop completes, the function returns the resultObj, which now contains keys from the values array and corresponding values as arrays generated by applying each callback.
  return resultObj;
}

// Uncomment these to check your work!
function uppercaser(str) { return str.toUpperCase(); }
function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
function repeater(str) { return str + str; }
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

//14. Challenge: majority

// Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true.
// If the number of true returns is equal to the number of false returns, majority should return false.

// ADD CODE HERE
//trueCount and falseCount variables are used to keep track of the number of true and false returns, respectively.
//The forEach loop iterates through each element in the array and increments the appropriate count based on the result of the callback.
//The function returns true if the majority of returns are true; otherwise, it returns false.
function majority(array, callback) {
  let trueCount = 0;
  let falseCount = 0;

  array.forEach(element => {
    if (callback(element)) {
      trueCount++;
    } else {
      falseCount++;
    }
  });

  return trueCount > falseCount;
}
// Uncomment these to check your work!
const isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
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
