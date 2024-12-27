```js
// forEach with maps and sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// USD: United States dollar
// EUR: Euro
// GBP: Pound sterling

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`); // Set(3) {'USD', 'GBP', 'EUR'}
});

// SET -- dont have keys or indexs so dont try to get em
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${_}: ${value}`);
});
```
