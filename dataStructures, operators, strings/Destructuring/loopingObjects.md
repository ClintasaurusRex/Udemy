```js
/////////////////////////////// Looping Objects: Object Keys, Values and Entries

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
```
