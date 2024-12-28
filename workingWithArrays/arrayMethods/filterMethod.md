```js
// The filter method is a method that takes an array and returns a new array with only the elements that pass a certain condition. It takes a callback function as an argument and applies that callback function to each element in the array. The callback function can take up to three arguments: the current element, the index of the current element, and the array itself. The callback function returns a boolean value that determines whether the current element should be included in the new array.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function (movement, index) {
  return movement > 0;
});
console.log(movements);
console.log(deposits);

const depositFor = [];
for (const mov of movements) if (mov > 0) depositFor.push(mov);
console.log(depositFor);

const withdrawls = movements.filter(mov => mov < 0);
// .forEach(withdrawl => console.log(`You withdrew ${withdrawl}`));
console.log(withdrawls);
```
