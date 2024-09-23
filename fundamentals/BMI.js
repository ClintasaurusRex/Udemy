const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIJohn = massJohn / (heightJohn * heightJohn);
const BMIMark = massMark / (heightMark * heightMark);
const markHigherBMI = BMIMark > BMIJohn;
console.log("Is Mark's BMI higher than John's? ", markHigherBMI);

console.log("Test Data 1: ");
console.log("BMI of Mark is ", BMIMark);
console.log("BMI of John is ", BMIJohn);
