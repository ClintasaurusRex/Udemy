'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// let arr = ['a', 'b', 'c', 'd', 'e'];
/*
// SLICE
console.log(arr.slice(2)); // ['c', 'd', 'e']
console.log(arr.slice(2, 4)); // ['c', 'd'] the 4 tells js where to stop
console.log(arr.slice(-2)); // ['d', 'e']
console.log(arr.slice(-1)); // ['e']
console.log(arr.slice(1, -2)); // ['b', 'c']
console.log(arr.slice()); // ['a', 'b', 'c', 'd', 'e']
console.log([...arr]); // ['a', 'b', 'c', 'd', 'e']

// SPLICE - this mutates the original array
// console.log(arr.splice(2)); // ['c', 'd', 'e']
arr.splice(-1);
arr.splice(1, 2); // The second argument is how many elements we want to delete
console.log(arr); // ['a', 'b', 'c', 'd']
// REVERSE --  This mutates the original array as well
let arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse()); // ['f', 'g', 'h', 'i', 'j']
console.log(arr2);

// CONCAT - Joins two arrays together and returns a new array without mutating the original array
const letters = arr.concat(arr2);
console.log(letters); // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
console.log([...arr, ...arr2]); // same result - store in a variable if needed

// JOIN - Joins all elements of an array into a string and returns the string without mutating the original array
console.log(letters.join(' - ')); // a - b - c - d - e - f - g - h - i - j

/////////////////////////////////////////////////////////////////////////////////

// NEW at() METHOD - returns the element at the specified index in the array without mutating the original array
const arr = [23, 11, 64];
console.log(arr[0]); // 23
console.log(arr.at(0)); // 23

// Getting the last element
console.log(arr[arr.length - 1]); // 64 - always subtract 1 from the length
console.log(arr.slice(-1)); // [64] - copies the array with only the last number
console.log(arr.at(-1)); // 64

console.log('Clint'.at(0)); // C


////////////////////////////////////////////////////////////////

// The forEach Method - This is a method that is used to iterate over an array and perform a function on each element in the array. It is a higher order function.

// Continue and Break functions dont work with forEach

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited: $${movement}`);
  } else {
    console.log(`You withdrew: $${Math.abs(movement)}`);
}
}
console.log('------------------- forEACH -------------------------');

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited: $${movement}`);
  } else {
    console.log(`You withdrew: $${Math.abs(movement)}`);
}
});
// You deposited: $200
// You deposited: $450
// You withdrew: $400 ... and so on and so on

console.log(
  '----------------------- Counter entries -----------------------------------'
);
// // .entries() returns an array of [key, value] pairs, allowing us to destructure both the index and movement values in the for...of loop

for (const [index, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited: $${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew: $${Math.abs(movement)}`);
  }
}

console.log('-------------- forEach with counter ----------------------------');
// First param ALWAYS needs to be current element
// Second will ALWAYS be the index
// Third will ALWAYS be the entire array we are looping over

movements.forEach(function (movement, index, array) {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited: $${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew: $${Math.abs(movement)}`);
  }
});

*/

//////////////////////////////////////////////////////////////////////////

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
