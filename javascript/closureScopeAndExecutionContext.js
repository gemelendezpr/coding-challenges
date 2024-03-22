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