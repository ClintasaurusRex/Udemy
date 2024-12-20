```js
/////////////////////// Short circuiting (&& and ||)
console.log('------------OR------------------');

// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Clint');
console.log('' || 'Clint');
console.log(true || 0);
console.log(undefined || null);

// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('--------------------AND-------------');
// If the first value is truthy then the last value is returned. Opposite the ||
// If the first value is falst then that means the rest of the eval is also false
console.log(0 && 'Clint');
console.log(7 && 'Clint');

// Hello is truthy so the eval contiues to 23 which is truthy but breaks at null so the eval stops
console.log('Hello' && 23 && null && 'Clint');

// Practical example: this if block checks if resturaunt.orderPizza exists and if it does then it returns it
if (restaurant.orderPizza) {
  restaurant.orderPizza('MEAT', 'MORE MEAT');
}
// This does the same as the if block
restaurant.orderPizza && restaurant.orderPizza('Meaty', 'Onions');

////////////////////////////// Rest pattern and Parameters

// SPREAD, because on the right side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects REST

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// REST Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 7, 5, 6, 4, 3, 7);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('MEAT', 'onion', 'mushrooms');
```
