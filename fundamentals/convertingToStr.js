// Converting to Number
const inputYear = "1992";
console.log(Number(inputYear), inputYear); // 1992 '1992'
console.log(Number(inputYear) + 18); // 2010

// Converting to String
const age = 30;
console.log(String(age), age); // '30' 30

// Converting to BooleanSS
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean("Hello")); // true
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false

// Implicit Type Coercion
console.log("I am " + 23 + " years old"); // 'I am 23 years old'
console.log("23" - "10" - 3); // 10
console.log("23" + "10" + 3); // '23103'
console.log("23" * "2"); // 46
console.log("23" / "2"); // 11.5

// Parsing integers and floats
const strNumber = "123.45";
console.log(parseInt(strNumber)); // 123
console.log(parseFloat(strNumber)); // 123.45

// Using the unary plus operator to convert to number
const str = "456";
console.log(+str); // 456

// Converting boolean to string
const isTrue = true;
console.log(String(isTrue)); // 'true'

// Converting string to boolean
const strBool = "true";
console.log(strBool === "true"); // true
