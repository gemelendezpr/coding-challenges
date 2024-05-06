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

//2. Challenge: Objects - Examining Properties
/*
Objects are data structures used to store related data represented with keys and associated values. Keys are also referred to as properties. Keys give us an easy way to reference the values, so they are almost always descriptive strings. Values can be any valid data type: a number, string, array, even other objects that contain even more objects!

We can iterate through an object's properties in much the same way we iterate through the elements of an array, though the implementation is a bit different. Research for... in and Object.keys before continuing with these challenges.

Challenge
You are provided with an object called checkObj. Using a for... in loop, determine if the object contains the property foundNum. If it exists, reassign the value of found to 1. 
*/