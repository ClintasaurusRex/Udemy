```js
// The reduce method is a method that takes an array and reduces it to a single value. It takes a callback function as an argument and applies that callback function to each element in the array. The callback function can take up to four arguments: the accumulator, the current element, the index of the current element, and the array itself. The callback function returns the new value for the accumulator. The reduce method can also take an optional initial value for the accumulator.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Accumulator -> Snowball
const balence = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc}`);
  const total = acc + cur;
  return total;
}, 0);
console.log(balence); // 3840

// In arrow function
const balenceArrow = movements.reduce((acc, cur) => acc + cur, 0);
console.log('Arrow function:', balenceArrow);

let balence2 = 0;
for (const mov of movements) balence2 += mov;
console.log(balence2);

// Maximum value of the movements array

const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);
console.log(max); // 3000
```
