```js
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd'] the 4 tells js where to stop
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['e']
console.log(arr.slice(1, -2)); // ['b', 'c']
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

// SPLICE - this mutates the original array

//T he splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

// To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice().

// Syntax
// splice(start), splice(start, deleteCount), splice(start, deleteCount, item1)

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

// console.log(arr.splice(2)); // ['c', 'd', 'e']
arr.splice(-1);
arr.splice(1, 2); // The second argument is how many elements we want to delete
console.log(arr); // ['a', 'b', 'c', 'd']

// REVERSE --  This mutates the original array as well
let arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
console.log(arr2);

// CONCAT - Joins two arrays together and returns a new array without mutating the original array
const letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([...arr, ...arr2]); // same result - store in a variable if needed

// JOIN - Joins all elements of an array into a string and returns the string without mutating the original array
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j
```
