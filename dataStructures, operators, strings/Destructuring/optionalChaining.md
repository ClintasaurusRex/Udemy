```js
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
```
