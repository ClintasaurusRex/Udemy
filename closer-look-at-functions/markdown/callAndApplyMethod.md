```js
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
```
