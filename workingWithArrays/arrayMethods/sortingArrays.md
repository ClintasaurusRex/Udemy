```js
// Sorting arrays
// sortting arrays is not a good idea with numbers because it will sort the numbers as strings
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];

console.log(owners.sort()); // This mutates the original array BE CAREFUL
console.log(owners);

// numbers
console.log(movements);

// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(movements);
// Ascending order
const sorted1 = movements.sort((a, b) => a - b);
console.log(sorted); //[-650, -400, -130, 70, 200, 450, 1300, 3000]

// Descending order

// console.log(movements.sort((a, b) => b - a)); // [3000, 1300, 450, 200, 70, -130, -400, -650]
```
