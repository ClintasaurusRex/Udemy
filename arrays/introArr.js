// Intro to arrays

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

// Array like a big container that holds data in it and we can have multiple elements in it

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

// Another way to create an array
// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

console.log(friends[0]); // Michael
console.log(friends[2]); // Peter

console.log(friends.length); // 3

console.log(friends[friends.length - 1]); // Peter

console.log("Steven is at index:", friends.indexOf("Steven")); // 1
const peterIndex = friends.indexOf("Peter");
console.log("Peter is at index:", peterIndex); // 2`) can also be done with template literals;

friends[2] = "Jay";
console.log(friends); // ["Michael", "Steven", "Jay"] this will replace Peter with Jay

// friends = ["Bob", "Alice"]; // This will give an error because we are trying to assign a new array to a constant variable

// Arrays can hold different data types
const firstName = "Clint";
const clint = new Array(firstName, "Arneson-Hiles", 2024 - 1992, "developer", friends);
console.log(clint);
console.log("The length of the array is:", clint.length);

// Exercise

const calcAge = function (birthYear) {
  return 2024 - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
