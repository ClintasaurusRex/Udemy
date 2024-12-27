```js
///////////////////////////////// Closures ///////////////////////////////////////

// a closure is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone
// A closure gives you access to an outer function's scope from an inner function
// A closure makes that outer function's scope live on for later use

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passnegers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);

///////////////////// More closures
// Example 1
let f;

const g = function () {
  const a = 23;

  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // 46
console.dir(f);
// Reassigning f function
h();
f(); // 1554
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding ${n} passengers`);
    console.log(`There are 3 groups each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
```
