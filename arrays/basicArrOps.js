"use strict";

const { log } = require("console");

// Push adds an element to the end of the array
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends); // ["Michael", "Steven", "Peter", "Jay"]
console.log(newLength); // 4

// Unshift adds an element to the beginning of the array
friends.unshift("John");
console.log(friends); // ["John", "Michael", "Steven", "Peter", "Jay"]

// Remove elements

friends.pop();
const popped = friends.pop();
console.log(popped); // Peter
console.log(friends); // ["John", "Michael", "Steven", "Peter"]

// Remove the first element
friends.shift();
console.log(friends); // ["Michael", "Steven"]

// indexOf method returns the index of the element in the array or -1 if the element is not in the array

console.log(friends.indexOf("Steven")); // 1
console.log(friends.indexOf("Bob")); // -1

// includes method returns a boolean value if the element is in the array or not in the array (true or false)
console.log(friends.includes("Steven")); // true
console.log(friends.includes("Bob")); // false

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
} else {
  console.log("You do not have a friend called Steven");
}
