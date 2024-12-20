```js
/////////////////////////// SETS

////New ops with SETS
const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// intersection finds common elements in side and array
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:------ ', commonFoods);

const foodsArr = [...commonFoods];
for (const [i, common] of [...foodsArr].entries()) {
  console.log(`${i + 1}: ${common}`);
}

const italianMexicanFusion = italianFoods.union(mexicanFoods); // merges the two arrays
console.log('Union:------ ', italianMexicanFusion);

console.log([new Set([...italianFoods, ...mexicanFoods])]); // merged arrays without duplicates

const uniqueItalianFoods = italianFoods.difference(mexicanFoods); // Shows the difference between arrays
console.log('Difference italian ', uniqueItalianFoods);

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods); // Shows the difference between arrays
console.log('Difference Mexican ', uniqueMexicanFoods);

const uniqueItalianAndMexicanFoods =
  italianFoods.symmetricDifference(mexicanFoods); // This will give both unique elements in each array
console.log(uniqueItalianAndMexicanFoods);

console.log(italianFoods.isDisjointFrom(mexicanFoods)); // this will check if the array has no elements in common
*/
/*
const ordersSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pizza']);

console.log(ordersSet);
console.log(new Set('Clint'));
console.log(ordersSet.size); // size not length in this case
console.log(ordersSet.has('Pizza')); // use .has to find an element in a set
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

const staffUnique = [...new Set(staff)]; // [] turns the set into an actual array
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

console.log(new Set('Clint Arneson-Hiles').size);

// console.log(ordersSet);
// for (const [i, set] of [...ordersSet].entries()) {
//   console.log(`${i + 1}: ${set}`);
// }
```
