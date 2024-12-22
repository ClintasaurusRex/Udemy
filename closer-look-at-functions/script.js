'use strict';

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/

const poll = {
  question: 'What is you favorite programming language',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],

  answers: new Array(4).fill(0),

  registerNewAnswer: function () {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n (Write option number)`
      )
    );
    typeof answer === 'number' && // Is it a number? (yes)
      answer < this.answers.length && // Is it less than the total number of possible answers? (yes)
      this.answers[answer]++; // Then it adds 1 to the count at position 2 in the answers array

    // console.log(this.answers);
    this.displayResults();
    // this.displayResults('string');
  },
  displayResults: function () {
    console.log(`Poll results are ${this.answers.join(', ')}`);
  },
};
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

/*
const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0,0,0,0] Moring the the next section

  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')} (Write a option number)`
      )
    );
    console.log(answer);
    // Register the answer

    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    // console.log(this.answers);
    this.displayResults();
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll Results are ${this.answers.join(', ')}`);
    }
  },
};

// poll.registerNewAnswer();
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
/*
//////////////////////////////// The call and apply methods
const lufthanasa = {
  airline: 'Lufthanasa',
  iataCode: 'LH',
  bookings: [],
  book: function (flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}-${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthanasa.book(239, 'Clint Hiles');
lufthanasa.book(456, 'Jonas Smedthman');
console.log(lufthanasa.bookings);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthanasa.book; // taking the book function from luftanasa and placing it inside a variable for use
// book(12, 'Steben choip'); // doesnt work because it doesnt have access to the this..

book.call(eurowings, 23, 'Jackie Q');
console.log(eurowings.bookings);

book.call(lufthanasa, 239, 'Mary Cooper');
console.log(lufthanasa.bookings);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss.bookings);

// Apply Method

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss.bookings);

book.call(swiss, ...flightData); // this is the same as: book.apply(swiss, flightData);
console.log(swiss.bookings);

////////////////////////////////// Bind method
// this wont return the function it will return a new function
// This code creates a new function by using the bind method on the book function, setting it to always use eurowings as its this context.

// The purpose of this code is to create a permanent connection between the book function and the eurowings object. Think of it like creating a dedicated booking function specifically for Eurowings airline

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthanasa);
const bookLS = book.bind(swiss);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23); // this allows us too change things as needed
bookEW23('Clinton Arneson-Hiles');
bookEW23('Martha Cooper');

// With Event Listeners

lufthanasa.planes = 300;
lufthanasa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthanasa.buyPlane.bind(lufthanasa));

// Partial Application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// const addTax = (rate, value) => value + value * rate; < this is what this func is doing meow

console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const VAT2 = addTaxRate(0.23);
console.log(VAT2(100));

///////////////////// Functions returning functions
/*
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Clint');
greeterHey('Steven');

greet('Hello')('Jonas');

// Challenge

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('You');
/*
///////////////////// Functions accepting callback functions
/*
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
*/
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

// const person = {
//   name: 'Clint',
//   greet: function (age) {
//     console.log(`Hi, I'm ${this.name} and I'm ${age} years old`);
//   },
// };

// const lateGreet = person.greet;

// const greetLater = lateGreet.bind(person);
// greetLater(32); // Always says: Hi, I'm Clint and I'm 32 years old
