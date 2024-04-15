// Activating Strict Mode
// "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("i can drive");

// Functions
// function logger() {
//   console.log("My name is Pedro");
// }

// // calling / running / invoking the function
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);

// // function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// Arrow function

// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(1991, "Pedro"));
// console.log(yearsUntilRetirement(1991, "Bob"));

// Calling other functions

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// Arrays

// most used
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// // other way
// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]); //michael
// console.log(friends[1]); //steven

// console.log(friends.length);
// console.log(friends.length - 1); //last data inside a array

// // changing the data inside a array
// friends[2] = "Jay"; //peter > jay
// console.log(friends);

//Array Operations (Methods)

// Push = add elements to the end of the array
const friends = ["Michael", "Steven", "Peter"];
const newLenght = friends.push("Jay");
console.log(newLenght);

// Unshift = add elements to the beginning of the array
friends.unshift("John");
console.log(friends);

// Pop = remove the last element of the array
friends.pop();
console.log(friends);

// Shift = remove the first element of the array
friends.shift();
console.log(friends);

// Indexof = return the position of the element
console.log(friends.indexOf("Steven"));

// Includes = return true if the element is in the array, false if its not
console.log(friends.includes("Steven")); //true
console.log(friends.includes("Bob")); //false

if (friends.includes("Peter")) {
  console.log("You have a friend called Peter");
}
