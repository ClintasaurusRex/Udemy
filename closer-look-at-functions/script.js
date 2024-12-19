'use strict';

///////////////////////// How passing arguments wors: Value vs Reference

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
