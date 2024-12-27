```js
// The forEach Method - This is a method that is used to iterate over an array and perform a function on each element in the array. It is a higher order function.

// Continue and Break functions dont work with forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited: $${movement}`);
  } else {
    console.log(`You withdrew: $${Math.abs(movement)}`);
  }
}
console.log('------------------- forEACH -------------------------');

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited: $${movement}`);
  } else {
    console.log(`You withdrew: $${Math.abs(movement)}`);
  }
});
/* You deposited: $200
You deposited: $450
You withdrew: $400 ... and so on and so on
*/
console.log(
  '----------------------- Counter entries -----------------------------------'
);
// // .entries() returns an array of [key, value] pairs, allowing us to destructure both the index and movement values in the for...of loop

for (const [index, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited: $${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew: $${Math.abs(movement)}`);
  }
}

console.log('-------------- forEach with counter ----------------------------');
// First param ALWAYS needs to be current element
// Second will ALWAYS be the index
// Third will ALWAYS be the entire array we are looping over

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited: $${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew: $${Math.abs(movement)}`);
  }
});
```
