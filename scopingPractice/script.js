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

// Scoping Practice script end

// Variables

console.log(me);
// console.log(job);
// console.log(year);

var me = 'Clint';
let job = 'student';
const year = 1992;

console.log(addDecl(2, 3));
console.log(addArrow);
// console.log(addExpr(2, 2));
// console.log(addArrow(1, 2));

//functions
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example when hoisting goes wrong

console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);

// Varibales End
