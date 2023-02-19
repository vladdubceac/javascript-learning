"use strict";
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true;
}

if (hasDriversLicense) {
  console.log("I can drive :D");
}
// const interface = "Audio";
// const private = 534;
*/

/*
function logger() {
  console.log(`My name is Vlad`);
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
console.log(num, typeof num);
*/

/*
// Function declaration
function calcAge1(birthYear) {
  return 2023 - birthYear;
}
const age1 = calcAge1(1990);

// Function expression
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calcAge2(1990);

console.log(age1, age2);
*/

// Arrow function
const calcAge3 = (birthYear) => 2023 - birthYear;
const age3 = calcAge3(1990);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 63 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1990, "Vlad"));
console.log(yearsUntilRetirement(1980, "Ion"));
