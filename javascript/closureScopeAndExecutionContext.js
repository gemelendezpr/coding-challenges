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