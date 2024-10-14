// Intro To Objects

// const clint = {
//   firstName: "Clint",
//   lastName: "Arneson-Hiles",
//   age: 2024 - 1992,
//   job: "developer",
//   friends: ["Michael", "Steven", "Jay"],
// };
// Objects are key value pairs and the keys are called properties and the values are called values or data values or data

// Dot notation vs bracket notation

// Dot notation is the most common way to access properties in an object and it is used most of the time but bracket notation is also used when we want to access properties dynamically or when we want to access properties that have special characters in them or when we want to access properties that are stored in a variable or when we want to compute the property name before accessing it

const clint = {
  firstName: "Clint",
  lastName: "Arneson-Hiles",
  age: 2024 - 1992,
  job: "developer",
  friends: ["Michael", "Steven", "Jay"],
};

// The big difference here is that we can use expressions in bracket notation but we can't use expressions in dot notation

console.log(clint.lastName); // Arneson-Hiles
console.log(clint["lastName"]); // Arneson-Hiles

const nameKey = "Name";
console.log(clint["first" + nameKey]); // Clint
console.log(clint["last" + nameKey]); // Arneson-Hiles

// const interestedIn = prompt(
//   // this only works in the browser
//   "What do you want to know about Clint? Choose between firstName, lastName, age, job, and friends"
// );
// console.log(interestedIn);

// add a property to an object using bracket notation or dot notation and we can also update a property using bracket notation or dot notation and we can also delete a property using the delete keyword and we can also check if a property exists in an object using the in operator and we can also use the in operator to check if a property exists in an object

clint.location = "Canada";
clint["twitter"] = "@clintah";
console.log(clint);

console.log(
  `${clint.firstName} has ${clint.friends.length} friends and his best friend is ${clint.friends[0]}`
); // you can also put the clint.name or clint.friends.length in a variable and then use that variable in the string

const myName = clint.firstName;
const numOfFriends = clint.friends.length;
const bestFriend = clint.friends[0];

console.log(`${myName} has ${numOfFriends} friends and his best friend is ${bestFriend}`);
