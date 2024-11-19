// Quick challeges to practice with out following specific order. Can be deleted, modified, etc. (Informal File)
//1.

function addTwo(num) {
  return num + 2;
}

// console.log(typeof addTwo); // should log: 'function'
// console.log(addTwo(10)); // Should log 12

// Test Cases

// const testCases = [
//     {input: [10], expected: 12},
//     {input: [2], expected: 4},
//     {input: [-2], expected: 0},     // Edge case: negative number
//     {input: ['a'], expected: 'a2'}, // Edge case: string as an Input
//     {input: [], expected: NaN},     // Edge case: empty input
//     {input: [0], expected: 2}
// ]

// testCases.forEach(({input, expected}, index) => {
//     const [num] = input;
//     const result = addTwo(num);
//     console.log(`Test case ${index + 1}`);
//     console.log(`Input: num = [${num}]`);
//     console.log(`Expected Output: ${expected}`);
//     console.log(`Actual Output: ${result}`);

//     const testPassed =
//     (Number.isNaN(result) && Number.isNaN(expected)) ||
//     result === expected;

//     console.log(testPassed ? "Test Passed\n" : "Test Failed\n");
// });

//2.

function addS(str) {
  return str + "s";
}

// Test Cases

// const testCases = [
//     {input: 'bird', expected: 'birds'},
//     {input: 'dog', expected: 'dogs'},
//     {input: 5, expected: '5s'}
// ];

// testCases.forEach(({ input, expected }, index) => {
//     const str = input;
//     const result = addS(str);
//     console.log(`Test case ${index + 1}`);
//     console.log(`Input: str = [${str}]`);
//     console.log(`Expected Output: ${expected}`);
//     console.log(`Actual Output: ${result}`);
//     console.log(result === expected ? "Test Passed\n" : "Test Failed\n");
// });

// console.log(typeof addS);
// console.log(addS("cat"));

//3. Create a function sayHello that accepts a string argument and returns the string 'Hi, ' with the passed-in string added to the end.

function sayHello(str) {
  return "Hi, " + " " + str;
}

// console.log(sayHello('Mary'));
// console.log(sayHello('harley'));

//4. Challenge: wereAwesome
// Write a function wereAwesome that takes you and your pair programming partner's name and returns the string "[your buddy's name] and [you] are awesome!"
// If you are coding on your own, get creative! Instead of a pair programming partner, it could be the name of your friend, your pet, or even your rubber ducky!

function wereAwesome(you, yourBuddy) {
  return yourBuddy + " and " + you + " are awesome!";
}

// console.log(wereAwesome('Dave', 'Will'));
// console.log(wereAwesome('Jose', 'Sam'));

//5. Create a function lastLetter that takes a word (string) and returns the last character/letter of that string.

// Hint- Remember that each character/letter in a string has an index position that you can access with brackets- '[]'

function lastLetter(word) {
  // return the last letter of that string(word)

  if (word.length == 0) {
    return "Empty string, no last letter";
  } else {
    let lastIndex = word.length - 1;
    return word[lastIndex];
  }

  // let lastIndex = word.length - 1;
  // return word[lastIndex];
}

// console.log(lastLetter("hello")); // => "o"
// console.log(lastLetter("goodbye")); // => "e"
// console.log(lastLetter("ZeltoiD")); // => "D"
// console.log(lastLetter(" I love Javascript")); // => "t"
// console.log(lastLetter(" ")); // => " Empty string, no last letter"

//6.
let calls = "";

function jerry(str) {
  //concat str with jerry
  str += "Jerry";
  // return this invocation of kramer method
  return kramer(str);
}

function george(str) {
  // concat the str with george
  str += "George";
  // return the invocation of elaine
  return elaine(str);
}

function elaine(str) {
  // concat the str with elaine
  str += "Elaine";
  // return str
  return str;
}

function kramer(str) {
  // concat str with kramer
  str += "Kramer";
  // return invocation of george
  return george(str);
}

// Uncomment these to check your work!
//  calls = jerry(calls);
//  console.log(calls); // should log: 'JerryKramerGeorgeElaine'

//7. Create a function isOdd that accepts a number argument. isOdd will return true if the number is odd and false if the number is even.

function isOdd(num) {
  return num % 2 !== 0;
}

// console.log(isOdd(5)); // => True
// console.log(isOdd(2000)); // => False

//8. Challenge: Control Flow - if statements & remainders
// Write a function iLoveEvenNumbers that takes a number argument and returns 'Oh Yeah Evens!' if the argument is even or 'I am too normal for odd numbers' if the argument is odd.

function iLoveEvenNumbers(num) {
  if (num % 2 === 0) {
    return "Oh Yeah Evens!";
  } else {
    return "I am too normal for odd numbers";
  }
}

// console.log(iLoveEvenNumbers(42)); // => 'Oh Yeah Evens!'
// console.log(iLoveEvenNumbers(17)); // => 'I am too normal for odd numbers'

//9. Challenge: getRemainder
// Create a function getRemainder that takes two numbers and returns the remainder (value left over from division) of dividing the larger number by the smaller one.
// Hint- You have no guarantee which number will be the bigger number, how can you determine which is which?

function getRemainder(num1, num2) {
  if (num1 > num2) {
    return num1 % num2;
  } else {
    return num2 % num1;
  }
}

// console.log(getRemainder(20, 5)); // => 0
// console.log(getRemainder(8, 22)); // => 6
// console.log(getRemainder(17, 5)); // => 2

//10. Challenge: Control Flow - if statements & multiple conditions
// Using an IF/ELSE statement, write a function greetings which returns 'Good Morning!' if the hour is before 12, 'Good Afternoon!' if the hour is before 15, or 'Good Night!' if the hour is 15 or after.

function greetings(hour) {
  if (hour < 12) {
    return "Good Morning!";
  } else if (hour < 15) {
    return "Good Afternoon!";
  } else {
    return "Good Night!";
  }
}

// console.log(greetings(8)); // => 'Good Morning!'
// console.log(greetings(13)); // => 'Good Afternoon!'
// console.log(greetings(18)); // => 'Good Night!'

//11. Challenge: gradeCalculator
// Create a function gradeCalculator which takes a grade (number) and returns its letter grade.
// grades 90 and above should return "A"
// grades 80 to 89 should return "B"
// grades 70 to 79 should return "C"
// grades 60 to 69 should return "D"
// 59 and below should return "F"

function gradeCalculator(grade) {
  if (grade >= 90) {
    return "A";
  } else if (grade >= 80) {
    return "B";
  } else if (grade >= 70) {
    return "C";
  } else if (grade >= 60) {
    return "D";
  } else if (grade <= 59) {
    return "F";
  }
}

// console.log(gradeCalculator(91)); // => "A"
// console.log(gradeCalculator(84)); // => "B"
// console.log(gradeCalculator(76)); // => "C"
// console.log(gradeCalculator(64)); // => "D"
// console.log(gradeCalculator(54)); // => "F"
// console.log(gradeCalculator(45)); // => "F"

//12. Challenge: droids
// Complete the function droids that accepts an array of strings and iterates through the array using a FOR loop. Update the variable result to "Found Droids!" if the array contains the string "Droids". Otherwise update the variable result to "These are not the droids you're looking for." Return your updated result.

function droids1(arr) {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Droids") {
      result = "Found Droids!";
    } else {
      result = "These are not the droids you're looking for.";
    }
  }
  return result;
}

const starWars1 = ["Luke", "Finn", "Rey", "Kylo", "Droids"];
const thrones1 = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"];

// console.log(droids1(starWars1)); // => "Found Droids!"
// console.log(droids1(thrones1)); // => "These are not the droids you're looking for."

//13. Challenge: Using forEach method
// Recreate the function droids from the previous challenge, but instead of using a FOR loop, use the built-in forEach method.

function droids2(arr) {
  let result = "";

  arr.forEach(function (item) {
    if (item === "Droids") {
      result = "Found Droids!";
    }
  });
  if (result === "") {
    result = "These are not the droids you're looking for.";
  }
  return result;
}

const starWars2 = ["Luke", "Finn", "Rey", "Kylo", "Droids"];
const thrones2 = ["Jon", "Danny", "Tyrion", "The Mountain", "Cersei"];

// console.log(droids2(starWars2)); // => "Found Droids!"
// console.log(droids2(thrones2)); // => "These are not the droids you're looking for."
