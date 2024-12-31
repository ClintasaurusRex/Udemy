```js
// Array Grouping: Grouping data based on some criteria and then performing operations on that data. This is useful for analyzing and summarizing data.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// groupBy() works like the groupBy() function in SQL databases. It takes an array of objects and a key, and returns an object where the keys are the unique values of the specified key, and the values are arrays of objects that have that key-value pair. example: groupBy(movements, 'type');

const groupedMovements = Object.groupBy(movements, movement =>
  movement > 0 ? 'deposits' : 'withdrawal'
); // {deposits: Array(5), withdrawal: Array(3)}

console.log(groupedMovements);

const groupedByActivity = Object.groupBy(accounts, account => {
  const movementCount = account.movements.length;

  if (movementCount >= 8) return 'very active';

  if (movementCount >= 4) return 'active';

  if (movementCount >= 1) return 'moderate';
  return 'inactive';
});
console.log(groupedByActivity); // {very active: Array(3), active: Array(1)}

// const groupedByType = Object.groupBy(accounts, acc => acc.type);
const groupedByType = Object.groupBy(accounts, ({ type }) => type); // with destructing
console.log(groupedByType); // {premium: Array(2), standard: Array(1), basic: Array(1)}
```
