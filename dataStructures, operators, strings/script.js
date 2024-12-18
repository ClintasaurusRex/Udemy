'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // orderDelivery: function (obj) {
  //   console.table(obj);
  // },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otherIngrediants) {
    console.log(mainIngredient);
    console.log(otherIngrediants);
  },
};

//////////////////////////// The for of loop
/*
// The for of loops are used to iterate over arrays, strings, maps, sets, and other iterable objects.
// It works by iterating over the values of an iterable object and executing a block of code for each value.
// your can use break and continue statements in for of loops

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);
// this is the old way
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
console.log('--------Old way above----New below');
// New way
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// the entries method returns an array of arrays, each array is a key-value pair
// the first value is the index and the second value is the value

// console.log([...menu.entries()]);
*/

/////////////////////////// Logical assignment operator
/*
const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0, // 0 is falsy so we know from the console that ||= is working
};
const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// Or assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// This is the same as above but better
// OR assignment operator
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// Nullish assignment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
rest1.owner &&= '<ANONYMOUS>'; // {name: 'Capri', numGuests: 0}
rest2.owner &&= '<ANONYMOUS>'; // {name: 'La Piazza', owner: '<ANONYMOUS>', numGuests: 10}

console.log(rest1);
console.log(rest2);
*/

/////////////////////////////////// Nullish Coalescing operator
/*
// The way this works is that it only works with null and undefined values so if the value is 0 or '' it will still return the value

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// Nullish: null and undefined (NOT 0 or ')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/
/*
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
*/
////////////////////////////// Rest pattern and Parameters
/*
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
*/
////////////////////////////// Spread Operator

/*

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Clint';
const letters = [...str, ' ', 'S.'];
console.log(letters);

// //////////////////////////Real world example
// const ingredients = [
//   prompt('Lets make pasta! Ingredient 1'),
//   prompt('Ingredient 2'),
//   prompt('Ingredient 3'),
// ];
// console.log(ingredients);
// restaurant.orderPasta(...ingredients);

// Objects
const newResturant = { foundedIn: 1998, ...restaurant, founder: 'Rocky' };
console.log(newResturant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/////////////////////////////////// Destructuing Objects
/*
restaurant.orderDelivery({
  time: '23:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
});

// console.table(restaurant);
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested Objects

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
// ------------------------------------- Destructuring arrays
/*
// Destructuring Arrays: Destructuring is a way to unpack values from an array or an object into separate variables
// Destructuring arrays like this is called destructuring assignment because we assign values to variables when we destructure an array or an object and we can also use destructuring to assign values to variables from nested arrays or objects

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(c, b, a);

// The space between commas skips over the element in the middle of the array.object
// Switching variables

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

[secondary, main] = [secondary, main];
console.log(main, secondary);

// Receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

// Nested destructuring
const nested = [2, 3, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);
// Destructuring inside destructuring
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values - if a value doesnt exist this gives it a default value
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
