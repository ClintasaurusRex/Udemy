"use strict";
// Funtions Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 4;
}

const foodProcessor = function (apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
};

console.log(foodProcessor(2, 3));
// Juice with 8 apples and 12 oranges.
// In the code above, the foodProcessor function calls the cutFruitPieces function to process the apples and oranges. The cutFruitPieces function is called twice, once for the apples and once for the oranges. The foodProcessor function then uses the processed fruit to create a juice string. This is an example of a function calling another function. This is a common pattern in programming, where functions are used to break down a complex problem into smaller, more manageable parts. This makes the code easier to read, understand, and maintain.
