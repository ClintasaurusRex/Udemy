```js
// NEW at() METHOD - returns the element at the specified index in the array without mutating the original array
const arr = [23, 11, 64];
console.log(arr[0]); // 23
console.log(arr.at(0)); // 23

// Getting the last element
console.log(arr[arr.length - 1]); // 64 - always subtract 1 from the length
console.log(arr.slice(-1)); // [64] - copies the array with only the last number
console.log(arr.at(-1)); // 64

console.log('Clint'.at(0)); // C
```
