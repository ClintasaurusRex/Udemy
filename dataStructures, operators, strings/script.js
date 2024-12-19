'use strict';

const weekdays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
// you can change the days below in opening hours to [weekdays[3]: ]
const openingHours = {
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
};

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literals, if the object is outside you can bring it inside this way
  openingHours,

  // openingHours: {
  //   thu: {
  //     open: 12,
  //     close: 22,
  //   },
  //   fri: {
  //     open: 11,
  //     close: 23,
  //   },
  //   sat: {
  //     open: 0, // Open 24 hours
  //     close: 24,
  //   },
  // },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // you can write methods like this

  // order(starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

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

///////////////////////////// STRINGS PART 3

/*
///////////////////////// STRINGS PART 2
const airline = 'TAP Air Portugal';

console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

// Fix the capitalization of a passenger name

const passenger = 'cLiNt';
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect1 =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);

console.log(passengerCorrect1); // Clint

function passengerCorrect(name) {
  const passengerLower = name.toLocaleLowerCase();
  const pUpper = passengerLower[0].toUpperCase() + passengerLower.slice(1);
  console.log(pUpper);
}
passengerCorrect('jOnAs');

// Compare Email

const email = 'hello@jonas.io';
const loginEmail = '  Hello@jonas.Io \n';

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail); // hello@jonas.io

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(email === normalizedEmail); // hello@jonas.io

function checkEmail(email) {
  const normalizedEmail = email.toLowerCase().trim();
  console.log(email === normalizedEmail);
}
checkEmail(email);
checkEmail(loginEmail);

// Replacing Strings: .replace will replace the first occurance of an element. on left side of parathesis put what you want replaced and on the right side what you want to replace it with

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23, Boarding door 23';

console.log(announcement.replace('door', 'gate')); // Will only replace the first instance
console.log(announcement.replaceAll('door', 'gate')); // This replaces all instances of the element

// Regular expressions

console.log(announcement.replace(/door/g, 'gate')); // This will also replace all of the instances, the g stands for global

// Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320')); // true
console.log(plane.includes('Boeing')); // false
console.log(plane.startsWith('Air')); // true

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log(plane, 'Part of the new airbus family');
} else console.log('Not part of the new family');

// Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard');
  }
};
checkBaggage('I have a laptop, some Food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
/*
/*
////////////////////////// STRINGS PART 1

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); // A
console.log(plane[1]); // 3
console.log(plane[2]); // 2
console.log('B737'[0]); // B

console.log(airline.length); // 16
console.log('B737'.length); // 4

console.log(airline.indexOf('r')); // 6
console.log(airline.lastIndexOf('r')); // 10
console.log(airline.indexOf('Portugal')); // 8

console.log(...plane); // A 3 2 0

console.log(airline.slice(4)); // Air Portugal
console.log(airline.slice(4, 7)); // Air - Stops indexing as soon as position 7 is reached

console.log(airline.slice(0, airline.indexOf(' '))); // TAP -- use this if you dont know the index of the element
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal -- opposite of above

console.log(airline.slice(-2)); // al
console.log(airline.slice(1, -1)); // AP Air Portuga

const checkMiddleSeat = function (seat) {
  // B and E are the middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat :(');
  else console.log('You got lucky');
};
checkMiddleSeat('11B'); // You got the middle seat :(
checkMiddleSeat('23C'); // You got lucky
checkMiddleSeat('3E'); // You got the middle seat :(

console.log(new String('Clint'));
console.log(typeof new String('Clint').slice(1));
*/
//////////////////////////// MAPS iteration
/*
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct :)'],
  [false, 'Try again'],
]);
console.log(question);

// convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(question.get('question'));

for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log([...question]);
// console.log(question.entries());
console.log(...question.keys());
console.log(...question.values());
*/
/////////////////////////// MAPS

/*
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

// Use .get() to retreive data
console.log(rest.get('name')); // Classico Italiano
console.log(rest.get(true)); // We are open

const time = 8;
const isOpen = rest.get(time > rest.get('open') && time < rest.get('close'));
console.log(isOpen); // We are closed

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
const arr = [1, 2];
rest.set(arr, 'Test'); // you can use and array as a key
rest.set(document.querySelector('h1'), 'Heading');
console.log(rest); // Lisbon has a key of 2 which was selected and deleted
console.log(rest.size); // 7 items

console.log(rest.get(arr));
*/
/////////////////////////// SETS
/*
////New ops with SETS
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

// intersection finds common elements in side and array
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:------ ', commonFoods);

const foodsArr = [...commonFoods];
for (const [i, common] of [...foodsArr].entries()) {
  console.log(`${i + 1}: ${common}`);
}

const italianMexicanFusion = italianFoods.union(mexicanFoods); // merges the two arrays
console.log('Union:------ ', italianMexicanFusion);

console.log([new Set([...italianFoods, ...mexicanFoods])]); // merged arrays without duplicates

const uniqueItalianFoods = italianFoods.difference(mexicanFoods); // Shows the difference between arrays
console.log('Difference italian ', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods); // Shows the difference between arrays
console.log('Difference Mexican ', uniqueMexicanFoods);

const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods); // This will give both unique elements in each array
console.log(uniqueItalianAndMexicanFoods);

console.log(italianFoods.isDisjointFrom(mexicanFoods)); // this will check if the array has no elements in common
*/
/*
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pizza']);

console.log(ordersSet);
console.log(new Set('Clint'));
console.log(ordersSet.size); // size not length in this case
console.log(ordersSet.has('Pizza')); // use .has to find an element in a set
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)]; // [] turns the set into an actual array
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('Clint Arneson-Hiles').size);

// console.log(ordersSet);
// for (const [i, set] of [...ordersSet].entries()) {
//   console.log(`${i + 1}: ${set}`);
// }
*/
/////////////////////////////// Looping Objects: Object Keys, Values and Entries
/*
// Property names: Object Keys loops only the keys of the object
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Properties values: Object.values loops over just the values
const values = Object.values(openingHours);
console.log(values);

// Property Entries Loops over the entire object keys and values, transforms into array

const entries = Object.entries(openingHours);
// console.log(entries);

// This destructures the object very neatley
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
  // On thu we open at 12 and close at 22
  // On fri we open at 11 and close at 23
  // On sat we open at 0 and close at 24
}
*/
/*
///////////////////////////////// Optional Chaining

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

///////////// With optional chaining

// optional chaining is a way to access properties of an object that may or may not exist.
// it is a way to avoid getting errors when accessing properties of an object that may not exist.
// the ? mark is used to check if the property exists before accessing it. and if it does not exist, it will return undefined.
// Checks if the value on the left exists
// ALWAYS USE WITH NULLISH OPERATOR ??

console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours.fri?.open);

// Example
const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  const open = restaurant.openingHours[day]?.open ?? `Closed`; // Nullish ?? operator
  console.log(`On ${day}, we are open at ${open}`);
}

// Methods

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRissoto?.(0, 1) ?? 'Method does not exist');

// Arrays

const users = [
  {
    name: 'Clint',
    email: 'hello@gmail.com',
  },
];
console.log(users[0]?.name ?? 'User is an empty array');
console.log(users[0]?.address ?? 'Does not exist');

const user = [];
console.log(user[0]?.name ?? 'Array is empty');

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);
*/
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
console.log(main, secondary); // Italian Vegitarian

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
