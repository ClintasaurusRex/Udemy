```js
/// More ways of creating and filling arrays

const arr = [1, 2, 3, 4, 5, 6, 7];

// Empty arrays + fill method
const x = new Array(7);
console.log(x);

// x.fill(1);
x.fill(1, 3, 5); // [empty × 3, 1, 1, empty × 2]
console.log(x);

arr.fill(23, 4, 6);
console.log(arr); // [1, 2, 3, 4, 23, 23, 7] mutates original array

// Array.from()
const y = Array.from({ length: 7 }, () => 1);
console.log(y); // [1, 1, 1, 1, 1, 1, 1]

const z = Array.from({ length: 7 }, (cur, i) => i + 1);
console.log(z); // [1, 2, 3, 4, 5, 6, 7] use _ where cur goes as its a throw away parameter

const randomDiceRoll = Array.from(
  { length: 10 },
  cur => Math.trunc(Math.random(cur) * 20) + 1
);
console.log(randomDiceRoll); // [5, 5, 5, 1, 2, 6, 6, 5, 1, 3]

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  console.log(movementsUI); // [1300, 70, -130, -650, 3000, -400, 450, 200]

  // const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  // console.log(movementsUI2);
});
```
