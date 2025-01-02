```js
// Non- Destructive alternatives toReversed, toSorted, toSpliced

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements); // [200, 450, -400, 3000, -650, -130, 70, 1300]

// reversed method is destructive so if a slice method is in front of it the original will be untouched

// toReversed method
const reversedMovements = movements.toReversed();
console.log(reversedMovements);

// toSorted Mehtod (sort), toSpliced (splice)

// movements[1] = 2000;
const newMovements = movements.with(1, 2000);
console.log(newMovements);
// console.log(movements); // [200, 2000, -400, 3000, -650, -130, 70, 1300]
```
