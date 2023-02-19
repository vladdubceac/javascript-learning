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

/*
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

if (favourite !== 23) {
  console.log("Why not 23?");
}
*/

/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log(`Sarah is able to drive`);
// } else {
//   console.log(`Someone else should drive...`);
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log(`Sarah is able to drive`);
} else {
  console.log(`Someone else should drive...`);
}
*/

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

/*
// SOLUTION to Challenge 3
//// TEST DATA
// const dolphinsScore1 = 96;
// const dolphinsScore2 = 108;
// const dolphinsScore3 = 89;
// const koalasScore1 = 88;
// const koalasScore2 = 91;
// const koalasScore3 = 110;

//// TEST DATA BONUS 1
// const dolphinsScore1 = 97;
// const dolphinsScore2 = 112;
// const dolphinsScore3 = 101;
// const koalasScore1 = 109;
// const koalasScore2 = 95;
// const koalasScore3 = 123;

//// TEST DATA BONUS 2
const dolphinsScore1 = 97;
const dolphinsScore2 = 112;
const dolphinsScore3 = 81 + 20; // 101;
const koalasScore1 = 109;
const koalasScore2 = 95;
const koalasScore3 = 86 + 20; // 106;

const dolphinsAverage = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3) / 3;
const koalasAverage = (koalasScore1 + koalasScore2 + koalasScore3) / 3;
console.log(
  `Dolphins score = ${dolphinsAverage}, Koalas score = ${koalasAverage}`
);

// if (dolphinsAverage > koalasAverage) {
//   console.log(
//     `Dolphins win with the score ${dolphinsAverage} vs. ${koalasAverage}`
//   );
// } else if (dolphinsAverage < koalasAverage) {
//   console.log(
//     `Koalas win with the score ${koalasAverage} vs. ${dolphinsAverage}`
//   );
// } else if (dolphinsAverage === koalasAverage) {
//   console.log(`Draw ! ${dolphinsAverage} vs. ${koalasAverage}`);
// }

// BONUS 1 + BONUS 2
const isDolphinsScoreValid = dolphinsAverage >= 100;
const isKoalasScoreValid = koalasAverage >= 100;
if (dolphinsAverage > koalasAverage && isDolphinsScoreValid) {
  console.log(
    `Dolphins win with the score ${dolphinsAverage} vs. ${koalasAverage}`
  );
} else if (koalasAverage > dolphinsAverage && isKoalasScoreValid) {
  console.log(
    `Koalas win with the score ${koalasAverage} vs. ${dolphinsAverage}`
  );
} else if (
  dolphinsAverage === koalasAverage &&
  isDolphinsScoreValid &&
  isKoalasScoreValid
) {
  console.log(
    `Draw! Both teams win the trophy! ${dolphinsAverage} vs. ${koalasAverage}`
  );
} else {
  console.log("Nobody wins the tropy");
}
*/

/*
const day = "monday";

switch (day) {
  case "monday":
    console.log("Plan week");
    break;
  case "tuesday":
    console.log("Prepare for commit");
    break;
  case "wednesday":
  case "thursday":
    console.log("Do commit");
    console.log("Write code");
    break;
  case "friday":
    console.log("Complete tasks");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan week");
} else if (day === "tuesday") {
  console.log("Prepare for commit");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Do commit");
  console.log("Write code");
} else if (day === "friday") {
  console.log("Complete tasks");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day!");
}
*/

/*
if (23 > 10) {
  const str = "23 is bigger";
}

const me = "Vlad";
console.log(`I'm ${2023 - 1990} years old ${me}`);
*/

/*
const age = 23;
// age >= 18
//   ? console.log("I like to drink wine")
//   : console.log("I like to drink water");

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);
*/

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

// SOLUTION to CHALLENGE #4
/*
const bill = 275; // 40, 430
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`
);
*/
