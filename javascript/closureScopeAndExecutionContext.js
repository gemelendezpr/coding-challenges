//1. Challenge: createFunction

// Create a function createFunction that creates and returns a function. When that newly created function is called, it should return the string 'hello world'.

// const myFunction = createFunction();
//  // Let's call the function we created and log its return value
// console.log(myFunction()); //should log: 'hello world'
// When you think you completed createFunction, un-comment out those lines in the code and run it to see if it works.

// ADD CODE HERE
// This function named createFunction creates and returns a new function.
function createFunction() {
    // The new function doesn't accept any arguments.
    return function() {
      // This inner function returns the string 'hello world' when called.
      return 'hello world';
    };
  }
  
  // Uncomment these to check your work!
  const myFunction = createFunction();
  console.log(myFunction()); //should log: 'hello world'

  //2. Challenge: createFunctionWithInput

// Create a function createFunctionWithInput that accepts one input and returns a function. When that created function is called, it should return the input that was passed to createFunctionWithInput when it was created.

// const sampleFunc = createFunctionWithInput('sample');
// const helloFunc = createFunctionWithInput('hello');

// // Now we'll call the functions we created and log the result
// console.log(sampleFunc()); 
// // should log 'sample' to the console
// console.log(helloFunc());
// // should log 'hello' to the console

// Solution
// ADD CODE HERE
// Define a function named createFunctionWithInput that accepts one parameter, input.
function createFunctionWithInput(input) {
    // Inside the function, return another function that takes no parameters.
    return function() {
      // This inner function returns the value of the input parameter passed to createFunctionWithInput.
      return input;
    };
  }
  // UNCOMMENT THESE TO TEST YOUR WORK!
  const sampleFunc = createFunctionWithInput('sample');
  console.log(sampleFunc()); // should log: 'sample'
  const helloFunc = createFunctionWithInput('hello');
  console.log(helloFunc()); // should log: 'hello'

  //3. Challenge: Scoping

// Examine the code for the outer function. Notice that we are returning a function and that function is using variables that are outside of its scope. Uncomment those lines of code. Try to deduce the output before executing.

// Defines a function named outer, which encloses another function named incrementCounter.
function outer() {
    // Declares a variable counter with initial value 0 inside the outer function's scope.
    let counter = 0; // this variable is outside incrementCounter's scope
    
    // Defines an inner function named incrementCounter that increments the counter variable and logs its value.
    function incrementCounter() {
      counter++;
      console.log('counter', counter);
    }
    
    // Returns the incrementCounter function.
    return incrementCounter;
  }
  
  // Assigns the result of calling outer function to the variable willCounter.
  const willCounter = outer();
  
  // Assigns the result of calling outer function to the variable jasCounter.
  const jasCounter = outer();
  
  // Calls the function assigned to willCounter. Since it's the first time it's being called, the counter value will be 1.
  willCounter(); // counter 1
  
  // Calls the function assigned to willCounter again. The counter value will increment to 2.
  willCounter(); // counter 2
  
  // Calls the function assigned to willCounter again. The counter value will increment to 3.
  willCounter(); // counter 3
  
  // Calls the function assigned to jasCounter. Since it's a new instance of the outer function, it will have its own counter variable starting from 1.
  jasCounter(); // counter 1
  
  // Calls the function assigned to willCounter again. It continues incrementing the counter from where it left off, so the counter value will be 4.
  willCounter(); // counter 4

  //4. Challenge: addByX

// Now we are going to create a function addByX that returns a function that will add an input by x.

// const addByTwo = addByX(2);
// addByTwo(1); //should return 3
// addByTwo(2); //should return 4
// addByTwo(3); //should return 5

// const addByThree = addByX(3);
// addByThree(1); //should return 4
// addByThree(2); //should return 5

// const addByFour = addByX(4);
// addByFour(4); //should return 8
// addByFour(10); //should return 14

// ADD CODE HERE
// Defines a function named addByX that takes one parameter x.
function addByX(x) {
    // Returns an inner function that takes one parameter num and returns the sum of x and num.
    return function(num) {
      return x + num;
    };
  }
  
  // Assigns the result of calling addByX with argument 2 to the variable addByTwo.
  const addByTwo = addByX(2);
  
  // Now call addByTwo with an input of 1 and log the output
  // Calls addByTwo with an input of 1 and logs the output, which should be 2 + 1 = 3.
  console.log(addByTwo(1)); // should return 3
  
  // Now call addByTwo with an input of 2 and log the output
  // Calls addByTwo with an input of 1 and logs the output, which should be 2 + 1 = 3.
  console.log(addByTwo(1)); // should return 3
  
  //5. Challenge: once

// Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.

// Is it working? Check my answer
// once should create and return a function

// A function returned from once should run the callback the first time it is called

// A function returned from once should return the output of the first call on subsequent calls

// ADD CODE HERE
// Defines a function named once that takes one parameter callback.
function once(callback) {
    let result; // Declares a variable to store the result of the first function call.
  
    // Returns an inner function that takes any number of parameters.
    return function(...args) {
      // Checks if result is undefined, indicating that the callback hasn't been called yet.
      if (result === undefined) {
        // Calls the callback with the provided arguments and stores the result.
        result = callback(...args);
      }
      // Returns the stored result.
      return result;
    };
  }
  
  const addByTwoOnce = once(function(num) {
    return num + 2;
  });
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  console.log(addByTwoOnce(5));  //should log 7
  console.log(addByTwoOnce(10));  //should log 7
  console.log(addByTwoOnce(9001));  //should log 7

  //6. Challenge: after

// Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.

// ADD CODE HERE
// Defines a function named after that takes two parameters: times and callback.
function after(times, callback) {
    // Declares a variable to keep track of how many times the callback has been called.
    let counter = 0;
  
    // Returns an inner function that takes any number of parameters.
    return function(...args) {
      // Increments the counter each time the inner function is called.
      counter++;
  
      // Checks if the counter is greater than or equal to the specified times.
      if (counter >= times) {
        // Calls the callback with the provided arguments and returns its result.
        return callback(...args);
      } else {
        // If the counter is less than the specified times, returns undefined.
        return undefined;
      }
    };
  }
  
  // Defines a callback function called called.
  const called = function(string) { return('hello ' + string); };
  // Calls the after function with 3 as the number of times and the callback called.
  const afterCalled = after(3, called);
  
  // UNCOMMENT THESE LINES TO TEST YOUR WORK
  console.log(afterCalled('world')); // -> undefined is printed
  console.log(afterCalled('world')); // -> undefined is printed
  console.log(afterCalled('world')); // -> 'hello world' is printed

  //7. Challenge: delay

// Write a function delay that accepts two arguments, a callback and the wait time in milliseconds. Delay should return a function that, when invoked waits for the specified amount of time before executing. HINT - research setTimeout();

// Is it working? Check my answer
// delay should create and return a function

// The function returned from delay should only execute the callback after the specified wait time

  // ADD CODE HERE
function delay(callback, waitTime) {
    // Define a function that will be returned by delay
    return function() {
      // Inside the returned function, use setTimeout to delay the execution of the callback
      setTimeout(callback, waitTime);
    };
  }
  
  // UNCOMMENT THE CODE BELOW TO TEST DELAY
  let count = 0;
  const delayedFunc = delay(() => count++, 1000);
  delayedFunc();
  console.log(count); 												 // should print '0'
  setTimeout(() => console.log(count), 1000); // should print '1' after 1 second

  //8. Challenge: saveOutput

// Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values.

// ADD CODE HERE
function saveOutput(func, password) {
    // Initialize an empty object to store the function outputs
    const outputs = {};
    
    // Return a function that behaves like the passed-in function
    return function(arg) {
      // Check if the argument matches the password
      if (arg === password) {
        // If the argument matches the password, return the outputs object
        return outputs;
      } else {
        // If the argument is not the password, call the original function and store the output
        const output = func(arg);
        outputs[arg] = output; // Store the output in the outputs object with the argument as the key
        return output; // Return the output
      }
    };
  }
  
  // Uncomment these to check your work!
  const multiplyBy2 = function(num) { return num * 2; };
  const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
  console.log(multBy2AndLog(2)); // should log: 4
  console.log(multBy2AndLog(9)); // should log: 18
  console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }

  //9. Challenge: cycleIterator

// Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.

// cycleIterator should create and return a function

// The function returned from cycleIterator should return the first element of the array the first time it is called

// The function returned from cycleIterator should return the second element of the array the second time it is called

// The function returned from cycleIterator should return the third element of the array the third time it is called

// The function returned from cycleIterator should cycle back to the first element after returning the last element of the array

function cycleIterator(array) {
  // Initialize index variable to keep track of current element
  let index = 0;

  // Return a function that will iterate through the array elements
  return function() {
    // Get the current element from the array
    const currentElement = array[index];

    // Increment the index for the next invocation
    index++;

    // If index reaches the end of array, reset it to 0 to start from the beginning
    if (index === array.length) {
      index = 0;
    }

    // Return the current element
    return currentElement;
  };
}

// Uncomment these to check your work!
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // should log: 'Fri'
console.log(getDay()); // should log: 'Sat'
console.log(getDay()); // should log: 'Sun'
console.log(getDay()); // should log: 'Fri'

//10. Challenge: defineFirstArg

// Create a function defineFirstArg that accepts a function and an argument. Also, the function being passed in will accept at least one argument. defineFirstArg will return a new function that invokes the passed-in function with the passed-in argument as the passed-in function's first argument. Additional arguments needed by the passed-in function will need to be passed into the returned function.

// Is it working? Check my answer
// defineFirstArg should create and return a function

// The function returned from defineFirstArg should invoke the passed-in function with the passed-in argument as its first argument

// The function returned from defineFirstArg should accept additional arguments and invoke the passed-in function with them

// ADD CODE HERE
function defineFirstArg(func, arg) {
  // Return a new function that accepts additional arguments
  return function(...args) {
    // Invoke the passed-in function with the passed-in argument as the first argument
    return func(arg, ...args);
  };
}

// Uncomment these to check your work!
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // should log: 15

//11. Challenge: hobbyTracker

// Create a function hobbyTracker that takes an array of hobbies as a parameter and creates a cache object with each hobby as a key. hobbyTracker should return a function that takes a string representing the hobby and an integer representing how many hours practiced as parameters.

// When the returned function is invoked, it should update the cache object adding the value of the passed in integer to the cache at the key corresponding with the passed in 'hobby' then should return the updated cache object. If the returned function is invoked with no arguments, it should reset all values in the cache object to zero and return the string 'tracker has been reset!'

// hobbyTracker hobbyTracker should create and return a function

// hobbyTracker updateHobbies('piano', 2) should return an object: { yoga: 3, baking: 4, piano: 2 }

// hobbyTracker updateHobbies() should return string: 'tracker has been reset'

// hobbyTracker updateHobbies('baking', 1) should return an object: { yoga: 0, baking: 1, piano: 0 }

function hobbyTracker(hobbies) {
  // Create a cache object with each hobby as a key initialized to 0
   const cache = {};
   hobbies.forEach(hobby => {
     cache[hobby] = 0;
   });
 
   // Return a function that updates the cache based on passed parameters
   return function(hobby, hours) {
     // If no arguments are provided, reset all values in the cache to zero
     if (hobby === undefined && hours === undefined) {
       Object.keys(cache).forEach(key => {
         cache[key] = 0;
       });
       return 'tracker has been reset!';
     }
 
     // Update the cache with the passed-in hobby and hours
     cache[hobby] += hours;
 
     // Return the updated cache object
     return cache;
   };
 }
 
 
 
 
 // Uncomment the code below to check your code:
 const updateHobbies = hobbyTracker(['yoga', 'baking', 'piano']);
 updateHobbies('yoga', 2);
 updateHobbies('baking', 4);
 updateHobbies('yoga', 1);
 console.log(updateHobbies('piano', 2)); // --> { yoga: 3, baking: 4, piano: 2 }
 console.log(updateHobbies()); // --> 'tracker has been reset!'
 console.log(updateHobbies('baking', 1)); // --> { yoga: 0, baking: 1, piano: 0}

//12. Challenge: dateStamp

// Create a function dateStamp that accepts a function and returns a function. The returned function will accept whatever arguments the passed-in function accepts and return an object with a date key whose value is today's date (not including the time) represented as a human-readable string (see the Date object for conversion methods), and an output key that contains the result from invoking the passed-in function.

// Is it working? Check my answer
// dateStamp should create and return a function

// The function returned from dateStamp should return an object

// The returned object should have a date key and an output key

// The date key on the returned object should have today's date as its value

// expected '04/07/2024' to equal 'Sun Apr 07 2024'
// The output key on the returned object should contain the result from invoking the passed-in function

// ADD CODE HERE
function dateStamp(func) {
  // Return a new function that accepts any number of arguments using the rest parameter syntax
  return function(...args) {
    // Get today's date in a human-readable string format (e.g., "YYYY-MM-DD")
    const today = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });

    // Invoke the passed-in function with the provided arguments
    const output = func(...args);

    // Return an object containing the date and output
    return {
      date: today,
      output: output
    };
  };
}


// Uncomment these to check your work!
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // should log: { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // should log: { date: (today's date), output: 12 }

//13. Challenge: censor

// Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned function will return the same string, except all instances of a first string (of a saved pair) will be replaced with the second string (of a saved pair).

// Is it working? Check my answer
// censor should create and return a function

// The function returned from censor should not return anything when two strings are given

// The function returned from censor should return a string when one string is given

// The returned string should be the same as the input string, with all instances of a first string in a saved pair replaced with the second string

// ADD CODE HERE
function censor() {
  // Initialize an empty object to hold pairs of strings
  const pairs = {};

  // Define and return the inner function
  return function(arg1, arg2) {
    // Check the number of arguments passed to the inner function
    if (arguments.length === 2) {
      // If two arguments are provided, save them as a pair in the 'pairs' object
      pairs[arg1] = arg2;
    } else if (arguments.length === 1) {
      // If one argument is provided, replace instances of the first string in saved pairs
      let result = arg1;
      // Iterate over each pair in 'pairs' object
      for (const key in pairs) {
        if (pairs.hasOwnProperty(key)) {
          // Replace all instances of 'key' with its corresponding value in 'pairs'
          result = result.split(key).join(pairs[key]);
        }
      }
      // Return the modified string
      return result;
    }
  };
}

// Uncomment these to check your work!
const changeScene = censor();
changeScene('dogs', 'cats');
changeScene('quick', 'slow');
console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // should log: 'The slow, brown fox jumps over the lazy cats.'


// Explanation:

// 1. `function censor() { ... }`: Defines a function named `censor` that accepts no arguments. This function will return another function.

// 2. `const pairs = {};`: Initializes an empty object `pairs` to store pairs of strings. Each pair consists of a first string and its replacement string.

// 3. `return function(arg1, arg2) { ... }`: Returns an inner function that accepts either one or two arguments.

// 4. `if (arguments.length === 2) { ... }`: Checks if the inner function is called with two arguments. This scenario is used to save a pair of strings (`arg1` as key and `arg2` as value) into the `pairs` object.

// 5. `else if (arguments.length === 1) { ... }`: Checks if the inner function is called with only one argument. This scenario is used to replace instances of the first string (of a saved pair) with the second string (of the same pair) in the provided argument.

// 6. `let result = arg1;`: Initializes `result` variable with the provided string (`arg1`).

// 7. `for (const key in pairs) { ... }`: Iterates over each pair in the `pairs` object using a `for...in` loop.

// 8. `result = result.split(key).join(pairs[key]);`: Uses the `split()` method to split `result` into an array of substrings at each occurrence of `key` (the first string of a saved pair), and then uses `join()` method to join the array back into a string using the corresponding value from `pairs` (the second string of the same pair) to replace `key`.

// 9. `return result;`: Returns the modified string after replacing all instances of saved pairs.

// 10. Finally, we create an instance of the `censor` function named `changeScene`. We use `changeScene` to save pairs of strings ('dogs' and 'cats', 'quick' and 'slow') and then apply the string replacement logic to a given input string using the `changeScene` function.

// When you run this code, the `console.log(changeScene('The quick, brown fox jumps over the lazy dogs.'));` statement will output: `'The slow, brown fox jumps over the lazy cats.'` This demonstrates the successful replacement of strings based on the saved pairs using the `censor` function.