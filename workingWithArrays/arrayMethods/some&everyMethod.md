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

// SOME:The some() method is an iterative method. It calls a provided callbackFn function once for each element in an array, until the callbackFn returns a truthy value. If such an element is found, some() immediately returns true and stops iterating through the array. Otherwise, if callbackFn returns a falsy value for all elements, some() returns false. Read the iterative methods section for more information about how these methods work in general

// Syntax:
some(callbackFn);
some(callbackFn, thisArg);

console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY: The every() method is an iterative method. It calls a provided callbackFn function once for each element in an array, until the callbackFn returns a falsy value. If such an element is found, every() immediately returns false and stops iterating through the array. Otherwise, if callbackFn returns a truthy value for all elements, every() returns true. Read the iterative methods section for more information about how these methods work in general.

// Syntax:
every(callbackFn);
every(callbackFn, thisArg);

function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10); // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true

const isBelowThreshold = currentValue => currentValue < 40;

/////////////////////// EVERY METHOD

// Every Method:

// The every() method is an iterative method. It calls a provided callbackFn function once for each element in an array, until the callbackFn returns a falsy value. If such an element is found, every() immediately returns false and stops iterating through the array. Otherwise, if callbackFn returns a truthy value for all elements, every() returns true. Read the iterative methods section for more information about how these methods work in general.

Syntax: every(callbackFn);
every(callbackFn, thisArg);

//--------------------------------------------
const isBelowThreshold = currentValue => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true

// Check if one array is a subset of another array
// The following example tests if all the elements of an array are present in another array.

//------------------------------------------
const isSubset = (array1, array2) =>
  array2.every(element => array1.includes(element));

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false

// only returns true if every elements in the array satisfies the condition
console.log(movements.every(mov => mov > 0)); // false
console.log(account4.movements.every(mov => mov > 0)); // true

// Seperate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit)); // true
console.log(movements.every(deposit)); // false
console.log(movements.filter(deposit)); //  [200, 450, 3000, 70, 1300]
```
