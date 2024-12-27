```js
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd'] the 4 tells js where to stop
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['e']
console.log(arr.slice(1, -2)); // ['b', 'c']
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

// SPLICE - this mutates the original array
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
