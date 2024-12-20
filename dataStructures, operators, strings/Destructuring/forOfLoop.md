```js
//////////////////////////// The for of loop

// The for of loops are used to iterate over arrays, strings, maps, sets, and other iterable objects.
// It works by iterating over the values of an iterable object and executing a block of code for each value.
// your can use break and continue statements in for of loops

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);
// this is the old way
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
console.log('--------Old way above----New below');
// New way
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

// the entries method returns an array of arrays, each array is a key-value pair
// the first value is the index and the second value is the value

// console.log([...menu.entries()]);
```
