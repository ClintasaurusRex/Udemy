```js
/////////////////////////// Logical assignment operator

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
```
