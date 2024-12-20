```js
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// console.log(flights.split('+')); 🛑

const getCode = str => str.slice(0, 3).toUpperCase(); // only take the first 3 elements(Arrow function)

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');

  const delayedType = `${type.startsWith('_Delayed') ? '🛑' : ''}`; // Removes underscore _
  const replaceUnderscore = `${type.replaceAll('_', ' ')}`; // space for Delayed Departure
  const replaceTime = `${time.replace(':', 'h')}`; // Replace : with h

  const formatFrom = `${getCode(from)}`; // use getCode function to replace first 3 elements
  const formatTo = `${getCode(to)}`;

  const output =
    `${delayedType} ${replaceUnderscore} ${formatFrom} to ${formatTo} (${replaceTime})`.padStart(
      35
    );
  console.log(output);
}


// underscore_case => unerscoreCase
//  first_name
// Some_Variable
// calculate_AGE
// delayed_departure
///////////////////////////// STRINGS PART 3

// The Split method: The split method splits a string into an array of substrings and returns the new array.

console.log('a+very+nice+string'.split('+'));
console.log('Clint Hiles'.split(' ')); // ['Clint', 'Hiles']

const [firstName, lastName] = 'Clint Hiles'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davies');
capitalizeName('clint hiles');

// Padding a string: Adding a number of characters until the desired length is reached

const message = 'Go to gate 23';
console.log(message.padStart(25, '+')); // ++++++++++++Go to gate 23
console.log('clint'.padStart(25, '+')); // ++++++++++++++++++++clint
console.log(message.padStart(25, '+').padEnd(35, '+')); // ++++++++++++Go to gate 23++++++++++

const maskCreditCard = function (number) {
  const str = number + ''; // Turns number into a string
  const last = str.slice(-4); // takes the last 4 numbers
  return last.padStart(str.length, '*'); // changes the old numbers with *
};

console.log(maskCreditCard(46736278)); // ****6278
console.log(maskCreditCard(1234567890123456)); // ************3456
console.log(maskCreditCard('1234567890123456123123')); // ******************3123

// Repeat method: Allows us to repeat the same string multiple times

const message2 = 'Bad weather... All departures Delayed ';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} in line ${'✈️'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
*/
/*
///////////////////////// STRINGS PART 2
const airline = 'TAP Air Portugal';

console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

// Fix the capitalization of a passenger name

const passenger = 'cLiNt';
const passengerLower = passenger.toLowerCase();
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
```
