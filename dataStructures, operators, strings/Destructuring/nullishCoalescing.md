```js
/////////////////////////////////// Nullish Coalescing operator

// The way this works is that it only works with null and undefined values so if the value is 0 or '' it will still return the value

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

// Nullish: null and undefined (NOT 0 or ')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
```
