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
// const friends = ["Michael", "Steven", "Peter"];
// const newLenght = friends.push("Jay");
// console.log(newLenght);

// // Unshift = add elements to the beginning of the array
// friends.unshift("John");
// console.log(friends);

// // Pop = remove the last element of the array
// friends.pop();
// console.log(friends);

// // Shift = remove the first element of the array
// friends.shift();
// console.log(friends);

// // Indexof = return the position of the element
// console.log(friends.indexOf("Steven"));

// // Includes = return true if the element is in the array, false if its not
// console.log(friends.includes("Steven")); //true
// console.log(friends.includes("Bob")); //false

// if (friends.includes("Peter")) {
//   console.log("You have a friend called Peter");
// }

// Objects x Arrays

// Array
// const pedroArray = [
//   "Pedro Henrique",
//   "Oldoni",
//   2024 - 2005,
//   "Software Engineer",
//   ["Gabriel", "Alex", "Juliano"],
// ];

// // Object
// const pedro = {
//   firstName: "Pedro Henrique",
//   lastName: "Oldoni",
//   age: 2024 - 2005,
//   job: "Software Engineer",
//   friends: ["Gabriel", "Alex", "Juliano"],
// };

// console.log(pedro);

// // Dot vs Bracket notation
// console.log(pedro.lastName);
// console.log(pedro["lastName"]);

// const nameKey = "Name";
// console.log(pedro["first" + nameKey]);
// console.log(pedro["last" + nameKey]);

// const pedro = {
//   firstName: "Pedro Henrique",
//   lastName: "Oldoni",
//   birthYear: 2005,
//   job: "Software Engineer",
//   friends: ["Gabriel", "Alex", "Juliano"],
//   hasDriversLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // },

//   // calcAge: function () {
//   //   return 2037 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()} year old ${
//       pedro.job
//     }, and he has ${this.hasDriversLicense ? "a" : "no"} driver´s license.`;
//   },
// };

// console.log(pedro.calcAge(2005));
// console.log(pedro.age);

// Iteration: For Loop

// for loop keeps running while condition is TRUE
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

const pedroArray = [
  "Pedro Henrique",
  "Oldoni",
  2037 - 2005,
  "Software Engineer",
  ["Gabriel", "Alex", "Juliano"],
];

// Dont do this
// for (let i = 0; i < 5; i++) {
//   console.log(pedroArray[i]);
// }

// Best way
for (let i = 0; i < pedroArray.length; i++) {
  console.log(pedroArray[i]);
}

// Calculate age with loop and array
const years = [1991, 2007, 1969, 2020];
const age = [];

for (let i = 0; i < years.length; i++) {
  age.push(2037 - years[i]);
}

// Continue and break

// console.log ONLY strings
for (let i = 0; i < pedroArray.length; i++) {
  if (typeof pedroArray[i] !== "string") continue;

  console.log(pedroArray[i], typeof pedroArray[i]);
}

// break with NUMBER
for (let i = 0; i < pedroArray.length; i++) {
  if (typeof pedroArray[i] === "number") break;

  console.log(pedroArray[i], typeof pedroArray[i]);
}
