```js
// some AND every METHOD

// SOME METHOD: The some() method is an iterative method. It calls a provided callbackFn function once for each element in an array, until the callbackFn returns a truthy value. If such an element is found, some() immediately returns true and stops iterating through the array. Otherwise, if callbackFn returns a falsy value for all elements, some() returns false. Read the iterative methods section for more information about how these methods work in general.

const fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal);
}

checkAvailability(fruits, 'grapefruit'); // false
checkAvailability(fruits, 'banana'); // true

// some method checks if at least one element in the array satisfies the condition
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// Includes method: The includes() method compares searchElement to elements of the array using the SameValueZero algorithm. Values of zero are all considered to be equal, regardless of sign. (That is, -0 is equal to 0), but false is not considered to be the same as 0. NaN can be correctly searched for.

// Syntax:
includes(searchElement);
includes(searchElement, fromIndex);

console.log(movements.includes(-130));

// SOME: CONDITION
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY
// only returns true if every elements in the array satisfies the condition
console.log(movements.every(mov => mov > 0)); // false
console.log(account4.movements.every(mov => mov > 0)); // true

// Seperate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit)); // true
console.log(movements.every(deposit)); // false
console.log(movements.filter(deposit)); //  [200, 450, 3000, 70, 1300]
```
