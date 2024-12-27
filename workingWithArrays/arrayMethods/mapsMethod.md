```js
// The Map method is a method that takes an array and transforms it into a new array. It takes a callback function as an argument and applies that callback function to each element in the array. The callback function can take up to three arguments: the current element, the index of the current element, and the array itself. The callback function returns the new value for the current element in the new array.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// Without arrow function
// const movementsUSD = movements.map(function (movement) {
//   return (movement * eurToUsd).toFixed(2);
// });

// With arrow function
const movementsUSDarrow = movements.map(movement => movement * eurToUsd);

console.log(movements);
console.log('arrow', movementsUSDarrow);

const movementUSDfor = [];
for (const mov of movements) movementUSDfor.push(mov * eurToUsd);
console.log(movementUSDfor);

const movmentDescriptions = movements.map((mov, i, arr) => {
  // With ternary operator
  return `Movement ${i + 1}: You ${
    mov > 0 ? 'deposited' : 'withdrew'
  } $${Math.abs(mov)}`;

  // Without ternary operator
  // if (mov > 0) {
  //   return `Movement ${i + 1}: You deposited $${mov}`;
  // } else {
  //   return `Movement ${i + 1}: You withdrew $${Math.abs(mov)}`;
  // }
});
console.log(movmentDescriptions);

// movementsUSD.forEach(converted =>
//   console.log(`The coverted amount is $${converted}`)
// );
```
