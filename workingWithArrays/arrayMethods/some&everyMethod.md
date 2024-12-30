```js
// some AND every METHOD

// some method checks if at least one element in the array satisfies the condition
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements);

// EQUALITY
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
