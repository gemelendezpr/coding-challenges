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
