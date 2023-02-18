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

/*
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
*/

/*
const age = 15;

if (age >= 18) {
  console.log(`Sarah can start driving license 🚗`);
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 1990;
let century;
if (birthYear <= 2000 && birthYear > 1900) {
  century = 20;
} else if (birthYear > 2000) {
  century = 21;
} else {
  century = Math.ceil(birthYear / 100);
}
console.log(century);
*/

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

/*
// SOLUTION 2
// TEST DATA 1
let johnMass = 92;
let johnHeight = 1.95;
let markMass = 78;
let markHeight = 1.69;

// TEST DATA 2
// let johnMass = 85;
// let johnHeight = 1.76;
// let markMass = 95;
// let markHeight = 1.88;

const johnBMI = johnMass / johnHeight ** 2;
const markBMI = markMass / (markHeight * markHeight);

if (markBMI > johnBMI) {
  console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})`);
} else if (johnBMI < markBMI) {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
} else {
  console.log(`Mark and John have the same BMI (${markBMI}, ${johnBMI})`);
}
*/

/*
// Type conversion
const inputYear = "1990";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Vlad"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 33 + " years old");
console.log("23" - "10" - 3); // 10
console.log("23" + "10" + 3);
console.log("23" * "2");
console.log("23" / "2");

let n = "1" + 1;
n = n - 1;
console.log(n);
*/

/*
// 5 FALSY values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Vlad"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 123;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}
*/

const age = "18";
if (age === 18) {
  console.log(`You just became an adult :D (strict)`);
}

if (age == 18) {
  console.log(`You just became an adult :D (loose)`);
}

const favourite = Number(prompt("What's your favourite number ? "));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7");
}

if (favourite !== 23) console.log("Why not 23?");
