/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Vlad");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "Jonas";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Developer";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); // object
*/

/*
let age = 30;
age = 31;

const birthYear = 1990;
// birthYear = 1991; //  Uncaught TypeError: Assignment to constant variable.
// const job; // Uncaught SyntaxError: Missing initializer in const declaration

var job = "programmer";
job = "teacher";

lastName = "Dubceac";
console.log(lastName);
*/

/*
// Math operators
const now = 2023;
const ageVlad = now - 1990;
const ageSarah = now - 2018;
console.log(ageVlad, ageSarah);

console.log(ageVlad * 2, ageVlad / 2, 2 ** 3);
// 2**3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Vlad";
const lastName = "Dubceac";
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5;
console.log(x);
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1;
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageVlad > ageSarah); // >, <, >=, <=, ==
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1990 > now - 2018);
*/

/*
const now = 2023;
const ageVlad = now - 1990;
const ageSarah = now - 2018;
console.log(now - 1990 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageVlad + ageSarah) / 2;
console.log(ageVlad, ageSarah, averageAge);
*/

// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

/*  // SOLUTION 1
// TEST DATA 1
// let johnMass = 92;
// let johnHeight = 1.95;
// let markMass = 78;
// let markHeight = 1.69;

// TEST DATA 2
let johnMass = 85;
let johnHeight = 1.76;
let markMass = 95;
let markHeight = 1.88;

const johnBMI = johnMass / johnHeight ** 2;
const markBMI = markMass / (markHeight * markHeight);

const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI);
console.log("Mark higher BMI = " + markHigherBMI); // TEST DATA 1 - true ; TEST DATA 2 - false
*/

const firstName = "Vlad";
const job = "software developer";
const birthYear = 1990;
const year = 2023;

const vlad =
  "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "! ";
console.log(vlad);

const vladNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(vladNew);

console.log(`Just a regular string...`);

console.log(
  "String with \n\
multiple \n\
lines"
);
console.log(`String 
with
multiple
lines`);
