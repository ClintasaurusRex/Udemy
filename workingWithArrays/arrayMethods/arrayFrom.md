```js
/// More ways of creating and filling arrays

const arr = [1, 2, 3, 4, 5, 6, 7];

// Empty arrays + fill method
const x = new Array(7);
console.log(x);

// x.fill(1);
x.fill(1, 3, 5); // [empty × 3, 1, 1, empty × 2]
console.log(x);

arr.fill(23, 4, 6);
console.log(arr); // [1, 2, 3, 4, 23, 23, 7] mutates original array

// Array.from()
const y = Array.from({ length: 7 }, () => 1);
console.log(y); // [1, 1, 1, 1, 1, 1, 1]

const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(z); // [1, 2, 3, 4, 5, 6, 7] use _ where cur goes as its a throw away parameter

const randomDiceRoll = Array.from(
  { length: 10 },
  cur => Math.trunc(Math.random(cur) * 20) + 1
);
console.log(randomDiceRoll); // [5, 5, 5, 1, 2, 6, 6, 5, 1, 3]

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI); // [1300, 70, -130, -650, 3000, -400, 450, 200]

  // const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  // console.log(movementsUI2);
});

// Array.from
Purpose:

// Creates new array instances from array-like objects
// Converts iterables into arrays
// Perfect for shallow copying arrays
// Parameters:

// arrayLike: Required - The object to convert
// mapFn: Optional - Map function for each element
// thisArg: Optional - Value to use as 'this' in mapFn
// Common Use Cases:

// Converting DOM collections
// Creating numeric sequences
// Array manipulation with mapping
// Converting Sets and Maps
// String to array conversion
// Benefits:

// Clean syntax
// Supports mapping during creation
// Works with any iterable
// Creates true array copies
// Performance Tips:

// More efficient than spread for large collections
// Great for fixed-length array creation
// Optimal for DOM element collections
// Modern JavaScript Features:

// Works well with arrow functions
// Integrates with other array methods
// Supports iterables from ES6
// This method is a fundamental tool in JavaScript array manipulation and data structure conversion.

Array.from() is a powerful and versatile method that creates a new Array instance from array-like or iterable objects. Here are the key things it does:

Converts array-like objects (objects with length property and indexed elements) into real arrays:

const arrayLike = { 0: 'hello', 1: 'world', length: 2 };
const newArray = Array.from(arrayLike);
// newArray = ['hello', 'world']


Creates arrays from iterables like strings, Sets, or Maps:
// From string
const stringArray = Array.from('hello');
// stringArray = ['h', 'e', 'l', 'l', 'o']

// From Set
const set = new Set(['foo', 'bar']);
const setArray = Array.from(set);
// setArray = ['foo', 'bar']


Accepts a mapping function as second argument to transform elements:
// Create array of numbers and double them
const numbers = Array.from([1, 2, 3], x => x * 2);
// numbers = [2, 4, 6]


Creates arrays from NodeLists (useful when working with DOM elements):
const divs = document.querySelectorAll('div');
const divArray = Array.from(divs);
// Now you can use array methods like map, filter, etc.

// 1. Basic Syntax
Array.from(arrayLike, mapFn?, thisArg?)

// 2. Creating arrays from strings
Array.from('Hello')  // ['H', 'e', 'l', 'l', 'o']

// 3. Creating arrays with numbers
Array.from({length: 5}, (_, i) => i + 1)  // [1, 2, 3, 4, 5]

// 4. Converting NodeList to Array
Array.from(document.querySelectorAll('div'))

// 5. Converting Set to Array
Array.from(new Set([1, 2, 3]))  // [1, 2, 3]

// 6. Converting Map to Array
Array.from(new Map([[1, 'one'], [2, 'two']]))  // [[1, 'one'], [2, 'two']]


```
