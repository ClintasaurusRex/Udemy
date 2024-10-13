// Arrow functions

// Arrow functions are a more concise way to write function expressions. They utilize the => syntax, which is why they are sometimes called "fat arrow" functions. Arrow functions are always anonymous and effectively turn function expressions into function values.

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

// Arrow function
(birthYear) => 2037 - birthYear;
// Arrow functions are always anonymous and effectively turn function expressions into function values. The arrow function above is equivalent to the function expression below:

const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);
// The arrow function above is equivalent to the function expression below:

const calcAge4 = function (birthYear) {
  return 2037 - birthYear;
};

// calculate how many years until retirement

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(1992, "Clint"));

// Arrow functions are especially useful for one-liners. They are more concise and easier to read than function expressions. Arrow functions are also useful when working with higher-order functions, such as map, filter, and reduce.
