//1. Challenge: makePerson

/*
Create a function that accepts two inputs (name and age) and returns an object. Let's call this function makePerson. This function will:
1.Create an empty object
2.Add a name property to the newly created object with its value being the name argument passed into the function
3.Add an age property to the newly created object with its value being the "age" argument passed into the function
4.Return the object
*/

// <<< ---------------------------------------------------------------------- BRUTE FORCE SOLUTION ---------------------------------------------------------------------- >>>

/**
 * Create a person object with name and age properties.
 * @param {string} name - The name of the person.
 * @param {number} age - The age of the person.
 * @returns {Object} - An object representing a person with name and age properties.
 */
function makePerson(name, age) {
    // Create an empty object
    let person = {};

    // Add a 'name' property to the object with the provided 'name' argument
    person.name = name;

    // Add an 'age' property to the object with the provided 'age' argument
    person.age = age;

    // Return the created person object
    return person;
}

// Create a person object using the makePerson function
const vicky = makePerson('Vicky', 24);

// Test the created person object
console.log(vicky.name); // Output: 'Vicky'
console.log(vicky.age); // Output: 24


/* ### Explanation:

1. **Function Definition:**
   - We define a function named `makePerson` that takes two parameters: `name` (a string) and `age` (a number).

2. **Create an Empty Object:**
   - Inside the function, we create an empty object `person` using an object literal `{}`.

3. **Add Name Property:**
   - We add a `name` property to the `person` object by assigning `person.name = name;`.
   - Here, `name` is the argument passed to the `makePerson` function.

4. **Add Age Property:**
   - Similarly, we add an `age` property to the `person` object by assigning `person.age = age;`.
   - Here, `age` is the argument passed to the `makePerson` function.

5. **Return the Object:**
   - Finally, we return the `person` object from the function, which now contains `name` and `age` properties set based on the arguments passed to the function.

6. **Usage Example:**
   - We create a new person object named `vicky` by calling `makePerson('Vicky', 24);`.
   - The returned `vicky` object will have `name` set to `'Vicky'` and `age` set to `24`.

7. **Testing:**
   - We use `console.log` to output `vicky.name` and `vicky.age` to verify that the properties were correctly assigned to the `vicky` object.

This solution demonstrates a straightforward way to create and initialize an object (`person`) with specified properties (`name` and `age`) based on the arguments passed to the function (`makePerson`). The function encapsulates the object creation logic, making it reusable for creating person objects with different name and age values.

The current approach has a time complexity of \( O(1) \) and a space complexity of \( O(1) \), which are both optimal for creating a single object with fixed properties.
*/

// <<< ---------------------------------------------------------------------- OPTIMIZE SOLUTION ---------------------------------------------------------------------- >>>

// We can consider a few minor adjustments for clarity and style:

// ### Refactored Solution:

/**
 * Create a person object with name and age properties.
 * @param {string} name - The name of the person.
 * @param {number} age - The age of the person.
 * @returns {Object} - An object representing a person with name and age properties.
 */
function makePerson(name, age) {
    // Return an object with name and age properties
    return { name, age };
}

// Usage example:
const vicky2 = makePerson('Vicky2', 24);

// Test the created person object
console.log(vicky2.name); // Output: 'Vicky2'
console.log(vicky2.age); // Output: 24

/*
### Explanation of Refactoring:

1. **Object Literal Shorthand:**
   - JavaScript allows for object literal shorthand when property names match variable names.
   - Instead of explicitly adding `name` and `age` properties, we can directly return `{ name, age }`, which is equivalent to `{ name: name, age: age }`.

2. **Simplification:**
   - By directly returning the object `{ name, age }`, we eliminate the need to create an empty object and manually add properties.

3. **Readability:**
   - The refactored solution is more concise and easier to read, emphasizing the direct creation and return of the person object.

4. **Efficiency:**
   - The refactored solution maintains the same time and space complexity as the original approach, as both involve creating a single object with fixed properties (`name` and `age`).

In summary, while the original solution was already efficient, the refactored version leverages JavaScript's object literal shorthand to achieve greater simplicity and readability without sacrificing performance. This refactoring primarily focuses on coding style and best practices rather than significant optimization of time or space complexity, which was already optimal for this particular task.
*/

// <<< ---------------------------------------------------------------------- Next Challenge ---------------------------------------------------------------------- >>>

//2. Challenge: Objects - Examining Properties
/*
Challenge: personStore

Inside personStore object, create a property greet where the value is a function that logs "hello".
*/

// <<< ---------------------------------------------------------------------- BRUTE FORCE SOLUTION ---------------------------------------------------------------------- >>>

/*
const personStore = {
    // Add the 'greet' property with a function that logs "hello"
    greet: function() {
        console.log("hello");
    }
};

// Uncomment this line to check your work!
personStore.greet(); // Output: Logs 'hello'

*/

/*
### Explanation:

1. **Object Initialization:**
   - We initialize the `personStore` object using an object literal `{}`.

2. **Adding the 'greet' Property:**
   - Within the `personStore` object, we add a property named `greet`.
   - The value assigned to this property is a function expression that logs "hello" to the console.

3. **Defining the greet Function:**
   - The `greet` property's value is defined as a function using the `function` keyword.
   - This function is an anonymous function that doesn't take any arguments.

4. **Logging "hello":**
   - Inside the `greet` function body, we use `console.log("hello")` to output "hello" to the console when the function is called.

5. **Calling the greet Function:**
   - Finally, we invoke the `greet` function using `personStore.greet()`.
   - This triggers the function to execute, resulting in the output "hello" being logged to the console.

The `personStore` object now has a `greet` property containing a function that can be called to perform the specific action of logging "hello". This approach demonstrates how to use object properties to store functions (methods) within JavaScript objects, allowing for encapsulation of behavior and functionality within object structures. The code snippet provided achieves the desired behavior of logging "hello" when `personStore.greet()` is called.
*/

// <<< ---------------------------------------------------------------------- Next Challenge ---------------------------------------------------------------------- >>>

// 3. Challenge: personFromPersonStore

// Create a function personFromPersonStore that takes as input a name and an age. When called, the function will create person objects using the Object.create method on the personStore object.

/*
const personStore = {
  greet: function() {
    console.log('hello');
  }
};

function personFromPersonStore(name, age) {
  // Create a new object using Object.create and set its prototype to personStore
  const newPerson = Object.create(personStore);

  // Add name and age properties to the new object
  newPerson.name = name;
  newPerson.age = age;

  // Return the new object
  return newPerson;
}

const sandra = personFromPersonStore('Sandra', 26);

// Uncomment these lines to check your work!
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age);  // -> Logs 26
sandra.greet();            // -> Logs 'hello'
*/

/*
Explanation:
- We start by defining the `personStore` object with a `greet` method.
- The `personFromPersonStore` function takes `name` and `age` as parameters.
- Inside `personFromPersonStore`, we create a new object named `newPerson` using `Object.create(personStore)`. This ensures that `newPerson` inherits properties and methods from `personStore`.
- We then add `name` and `age` properties to `newPerson` using dot notation.
- Finally, we return `newPerson`.
- When we call `personFromPersonStore('Sandra', 26)`, it creates a new object named `sandra` with the name 'Sandra' and age 26.
- We can access the `name` and `age` properties of `sandra` using dot notation (`sandra.name`, `sandra.age`) and call the `greet` method (`sandra.greet()`).
*/

// <<< ---------------------------------------------------------------------- Next Challenge ---------------------------------------------------------------------- >>>

//4. Challenge: personFromPersonStore

// Create a function personFromPersonStore that takes as input a name and an age. When called, the function will create person objects using the Object.create method on the personStore object.

// The personStore object which contains a greet method

/*
const personStore = {
  greet: function() {
    console.log('hello');
  }
}

// Function to create a new person object from personStore
function personFromPersonStore(name, age) {
  // Use Object.create to create a new object that inherits from personStore
  const newPerson = Object.create(personStore);
  // Add name property to the new object
  newPerson.name = name;
  // Add age property to the new object
  newPerson.age = age;
  // Return the newly created object
  return newPerson;
}

const sandra = personFromPersonStore('Sandra', 26);

// Uncomment these lines to check your work!
console.log(sandra.name); // -> Logs 'Sandra'
console.log(sandra.age); // -> Logs 26
sandra.greet(); // -> Logs 'hello'

*/

/*

**Explanation**:
1.  This object contains a 'greet' method that logs "hello" to the console.

2. **Define `personFromPersonStore` Function**:

   - `Object.create(personStore)` creates a new object that has `personStore` as its prototype.
   - `newPerson.name = name` adds a `name` property to the new object.
   - `newPerson.age = age` adds an `age` property to the new object.
   - Finally, the new object is returned.

3. **Create a new person and test the function**:

    const sandra = personFromPersonStore('Sandra', 26);

    console.log(sandra.name); // -> Logs 'Sandra'
    console.log(sandra.age); // -> Logs 26
    sandra.greet(); // -> Logs 'hello'
    ```
   - A new person object `sandra` is created with the name "Sandra" and age 26.
   - The `name` and `age` properties are logged to the console.
   - The `greet` method is called, which logs "hello" to the console.

**Time & Space Complexity**:
- **Time Complexity**: O(1) - Creating an object and adding properties are constant-time operations.
- **Space Complexity**: O(1) - The space used is constant and does not depend on the size of the input.

This solution efficiently creates a new person object that inherits from `personStore` and adds the provided `name` and `age` properties.
*/

// <<< ---------------------------------------------------------------------- Next Challenge ---------------------------------------------------------------------- >>>

//5. Challenge: introduce

// Without editing the code you've already written, add an introduce method to the personStore object that logs "Hi, my name is [name]".

const personStore = {
    greet: function() {
      console.log('hello');
    }
  }
  
  function personFromPersonStore(name, age) {
      const person = Object.create(personStore);
    person.name = name;
    person.age = age;
    return person;
  }
  
  const sandra = personFromPersonStore('Sandra', 26);
  
  // add code here
  // Add the introduce method to the personStore object
  personStore.introduce = function() {
    console.log(`Hi, my name is ${this.name}`);
  }
  
  
  // Uncomment this line to check your work!
  sandra.introduce(); // -> Logs 'Hi, my name is Sandra'

  /*
Time & Space Complexity:

Time Complexity: O(1) - Adding a method to an object and calling the method are constant-time operations.
Space Complexity: O(1) - The space used is constant and does not depend on the size of the input.
This solution efficiently adds an introduce method to the personStore object and allows person objects to introduce themselves by logging their name to the console.
*/

//6. Challenge: PersonConstructor

// Create a function PersonConstructor that uses the this keyword to save a single property onto its scope called greet. greet should be a function that logs the string "hello".

// Define the PersonConstructor function
function PersonConstructor() {
  // Use the 'this' keyword to attach a greet method to the new object being created
  this.greet = function() {
    // The greet method logs 'hello' to the console
    console.log('hello');
  }
}

// Create a new instance of PersonConstructor
const simon = new PersonConstructor();

// Uncomment this line to check your work!
simon.greet(); // -> Logs 'hello'

/*
**Explanation**:

1. **Define the `PersonConstructor` Function**:
   
    function PersonConstructor() {
    
   - This function will serve as a constructor to create new person objects.

2. **Attach the `greet` Method Using `this`**:
   
    this.greet = function() {
      console.log('hello');
    }
    
   - `this` refers to the new object being created by the constructor function.
   - `this.greet` sets a new property `greet` on the new object, which is a function that logs "hello" to the console.

3. **Create a New Instance of `PersonConstructor`**:
    
    const simon = new PersonConstructor();
    
   - This line creates a new instance of `PersonConstructor` and assigns it to the variable `simon`.
   - The `new` keyword creates a new object, sets its prototype to the constructor's prototype, and calls the constructor function with `this` set to the new object.

4. **Call the `greet` Method**:
    
    simon.greet(); // -> Logs 'hello'
  
   - This line calls the `greet` method on the `simon` object, which logs "hello" to the console.

**Time & Space Complexity**:
- **Time Complexity**: O(1) - Both the creation of the method and its invocation are constant-time operations.
- **Space Complexity**: O(1) - The space used is constant and does not depend on the size of the input.

This solution ensures that every instance created using `PersonConstructor` will have its own `greet` method, which logs "hello" when called.
*/ 