// for loops are used to iterate over a sequence of values.

// The for loop has the following syntax:

// for (initialization; condition; final-expression) {
//   // code to be executed
// }
// The initialization statement is executed only once at the beginning. It is used to initialize the loop variable. The condition is evaluated before each iteration, and if it is true, the code inside the loop is executed. The final-expression is executed at the end of each iteration. It is usually used to increment or decrement the loop variable. The loop continues until the condition evaluates to false. Here is an example of a for loop that prints the numbers from 1 to 5:

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lift weights repetition ${rep}`);
// }

// Looping Arrays, Breaking and Continuing Loop Iteration with for Loop in JavaScript - Example

const clint = [
  "Clint",
  "Arneson-Hiles",
  2024 - 1992,
  "developer",
  ["Michael", "Steven", "Jay"],
  true,
];

const types = [];

for (let i = 0; i < clint.length; i++) {
  // reading from clint
  console.log(clint[i], typeof clint[i]);

  // filling types array
  //   types[i] = typeof clint[i];

  types.push(typeof clint[i]);
}

console.log(types);

const years = [1992, 2000, 2005, 2010, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2024 - years[i]);

  //   console.log(ages);
}
console.log(ages);

// Continue and Break in for Loop in JavaScript - Example

// Continue statement is used to skip the current iteration of the loop and continue with the next iteration. Break statement is used to exit the loop immediately. Here is an example of using continue and break statements in a for loop:

console.log("--- ONLY STRINGS ---");

for (let i = 0; i < clint.length; i++) {
  if (typeof clint[i] !== "string") continue;

  console.log(clint[i], typeof clint[i]);
}
console.log("--- ONLY NUMBERS ---");

for (let i = 0; i < clint.length; i++) {
  if (typeof clint[i] !== "boolean") continue;

  console.log(clint[i], typeof clint[i]);
}

console.log("--- BREAK WITH NUMBER ---");

for (let i = 0; i < clint.length; i++) {
  if (typeof clint[i] === "number") break;

  console.log(clint[i], typeof clint[i]);
}
// The continue statement skips the current iteration if the element is not a string. The break statement exits the loop immediately when it encounters a number.
