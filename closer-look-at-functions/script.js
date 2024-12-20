'use strict';

///////////////////// Functions accepting callback functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher order function because it takes in a function fn
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('High Five 🖐️');
};
document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);

//////////////////////// First class and High order functions
//                                   FIRST CLASS FUNCTIONS
// JS treats functions as first-class citizens
// This means that functions are simply values
// Functions are just another type of object
// Store functions in variables or properties
// Pass functions as arguments to OTHER functions
// Return functions FROM functions
// Call methods on functions

//                                  HIGHER ORDER FUNCTIONS

// A function that receives another functions as an argument, that returns a new functions or both
// This is only possible because of first-class functions

///////////////////////// How passing arguments wors: Value vs Reference
/*
const flight = 'LH234';
const clint = {
  name: 'Clint Arneson-Hiles',
  passport: 3930293945,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'Lh999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 3930293945) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};
// checkIn(flight, clint);
// console.log(flight);
// console.log(clint);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(clint);
checkIn(flight, clint);
*/
///////////////////////////// Default Values
/*
const bookings = [];

const createBooking = function (
  flightNum,
  numOfPassengers = 1,
  price = 199 * numOfPassengers
) {
  // numOfPassengers = numOfPassengers || 1; ES5 way, ugly
  // price = price | 199;

  const booking = {
    flightNum,
    numOfPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000); // {flightNum: 'LH123', numOfPassengers: 1, price: 1000}
*/
/*
for (const booking of bookings) {
  // console.log(booking.flightNum, booking.numOfPassengers, booking.price);
  console.log(
    `Flight:${booking.flightNum} has ${booking.numOfPassengers} passengers. $${booking.price}`
  );
}
for (const [key, value] of Object.entries(bookings[0])) {
  console.log(key, ':', value);
}
*/
