'use strict';

// This is a form of lexical scoping where the function is defined within another function
// The inner function has access to the outer functions variables
// The outer function does not have access to the inner functions variables
// The inner function has access to the outer functions variables because of the scope chain
// This is also a closure because the inner function has access to the outer functions variables even after the outer function has returned

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     // The reason why first name can be used ius because its global
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;
//       // Creatin NEW variable with same name as outer scopes variable
//       const firstName = 'Steven'; // This is closest in the scope so shows first

//       // Reassigning outer scopes variable
//       output = 'NEW OUTPUT';

//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//     // console.log(add(2, 3));
//     console.log(output);
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Clint';
// calcAge(1992);
// console.log('hello');

// document.querySelector('h1').addEventListener('click', function () {
//   const h1 = document.querySelector('h1');
//   const greeting1 = 'How JavaScript Works Behind the Scenes';
//   const greeting2 = 'Javascript is amazing';
//   if (h1.textContent === greeting1) {
//     h1.textContent = greeting2;
//   } else {
//     h1.textContent = greeting1;
//   }
// });

// Scoping Practice script end ---------------------------------------------------

// --------------------------------------Variables

// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Clint';
// let job = 'student';
// const year = 1992;

// console.log(addDecl(2, 3));
// console.log(addArrow);
// // console.log(addExpr(2, 2));
// // console.log(addArrow(1, 2));

// //functions
// function addDecl(a, b) {
//   return a + b;
// }

// arguments keyword
// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// // Example when hoisting goes wrong

// console.log(undefined);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(x === window.y);
// console.log(x === window.z);

// Varibales End

// --------------------------------The This Keyword

// The this keyword/variable: Special variable that is created for every execution context (every function)
// Takes the value of (points to) the "owner" of the function in which the this keyword is used (this is not static)
// The value of this is not static, it depends on how the function is called, and its value is only assigned when the function is actually called (runtime)

// Method -> this = <Object that is calling the method>
// a method is a function that is a property of an object

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   // console.log(this);
// };

// calcAge(1992);

// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   // console.log(this);
// };

// calcAgeArrow(1980);

// const clint = {
//   name: 'clint',
//   year: 1992,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// clint.calcAge();

// const kritin = {
//   year: 2017,
// };

// kritin.calcAge = clint.calcAge; // This copies the calcAge into the kristin object (method borrowing)
// kritin.calcAge();

// const f = clint.calcAge;
// f();

//------------------------------------ This keyword end

//------------------------------------ Regular vs Arrow functions

// const clint = {
//   firstName: 'Clint',
//   year: 1992,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // Solution 1
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(self);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };
//     // //   console.log(this.year >= 1981 && this.year <= 1996);
//     // // };

//     // Solution 2
//     // The arrow function inherits the this keyword
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   // Wrong way - this comes up as undefined
//   greet: () => console.log(`Hey ${this.firstName}`),

//   // Right way
//   // greet: function () {
//   //   console.log(`Hey ${this.firstName}`);
//   // },
// };

// clint.greet();
// clint.calcAge();

// // arguments keywork
// const addExpr = function (a, b, c, d) {
//   console.log(arguments);
//   return console.log(a + b);
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 12);

// // argument keyword doesnt work with arrow functions

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// // addArrow(2, 5, 8);

// -------------------------------Regular vs Arrow end

// --------------------------Memory Management: Primitives vs objects
// How memory is managed in JavaScript
// Memory heap: Where memory allocation happens (store variables) - where the data is stored
// Call stack: Where the code is executed (store the code)

// Primitives: Numbers, strings, booleans, undefined, null, symbol, bigInt
// Objects: Arrays, objects, functions

// Primitives are stored in the call stack and objects are stored in the heap
// object reference is stored in the call stack and the object itself is stored in the heap

// -----------------------------Object referances (shallow and deep copies)

const kristin1 = {
  firstName: 'Kristin',
  lastName: 'Arneson',
  age: 32,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedKristin = marryPerson(kristin1, 'Arneson-Hiles');

// const marriedKristin = kristin1; // this doesnt create a copy
// marriedKristin.lastName = 'Arneson-Hiles';

console.log('Before:', kristin1);
console.log('After:', marriedKristin);

// How to create a true copy of the object using spread operator

const kristin = {
  firstName: 'Kristin',
  lastName: 'Arneson',
  age: 32,
  family: ['Karen', 'Brent'],
};

// Shallow copy
const kristinCopy = { ...kristin }; // this only copies the first 3 in kristin not the nested family object
kristinCopy.lastName = 'Arneson-Hiles';

console.log(kristin, kristinCopy);

// kristinCopy.family.push('Lyndsey');
// kristinCopy.family.push('Maria');

// // This will add to both arrays
// console.log('Before:', kristin);
// console.log('After:', kristinCopy);

// Deep copy or Deep Clone same ting

const kristinClone = structuredClone(kristin);
kristinClone.family.push('Lyndsey');
kristinClone.family.push('Maria');

console.log('Before clone:', kristin);
console.log('After clone:', kristinClone);

// -----------------------------Object referances (shallow and deep copies)END

// ----------------------------Memory management: Garbage Collection

// The memory life cycle in JavaScript is managed automatically
// The garbage collector removes the variables that are no longer needed in the memory heap (variables that are not reachable)

// How is memory freed up after we no longer need a value? (Garbage collection)
// 1. Remove a value from the memory heap (when the value is no longer needed)
// 2. Remove a value from the call stack (when the function is done executing)
// 3. Release memory that is no longer needed (when the value is no longer reachable)

// mark and sweep algorithm - the garbage collector goes through the memory heap and marks the values that are still being used and then sweeps away the values that are not being used (removes them from the memory heap)

// sweep phase - the garbage collector goes through the memory heap and removes the values that are not being used

// Memory leak - when the garbage collector fails to remove a value from the memory heap that is no longer needed

// Memory leak example - when we have a closure that is not being used but is still in the memory heap (the closure is still reachable) - this is a memory leak because the closure is still in the memory heap even though it is not being used (the closure is still reachable) - this is a memory leak because the closure is still in the memory heap even though it is not being used

// ----------------------------Memory management: Garbage Collection END
