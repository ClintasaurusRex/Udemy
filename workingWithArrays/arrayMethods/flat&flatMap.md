```js
// Flat and FlatMap ***********************

// The flat method is used to flatten an array of arrays into a single array. It is used to flatten an array of arrays into a single array.

// The flatMap method is used to flatten an array of arrays into a single array. It is used to flatten an array of arrays into a single array.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

console.log(arr.flat()); // [1, 2, 3, 4, 5, 6, 7, 8]

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2)); // The 2 in this map tells js to go 2 levels deep into the array

const accountMovements = accounts.map(acc => acc.movements);
console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overallBalance = allMovements.reduce((acc, cur) => acc + cur, 0);

// flat Method
const overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, cur) => acc + cur, 0);
console.log(overallBalance);

// flatMap method
const overallBalance2 = accounts
  .flatMap(acc => acc.movements) // Same result as about - flatMap can only go one level deep
  .reduce((acc, cur) => acc + cur, 0);
console.log(overallBalance);
```
