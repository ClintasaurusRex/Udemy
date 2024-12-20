```js
//                                  HIGHER ORDER FUNCTIONS

// A function that receives another functions as an argument, that returns a new functions or both
// This is only possible because of first-class functions

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
```
