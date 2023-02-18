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
