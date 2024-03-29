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
  return new Date().getFullYear() - birthYear;
}
const age1 = calcAge1(1990);

// Function expression
const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};
const age2 = calcAge2(1990);

console.log(age1, age2);
*/

/*
// Arrow function
const calcAge3 = (birthYear) => new Date().getFullYear() - birthYear;
const age3 = calcAge3(1990);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = new Date().getFullYear() - birthYear;
  const retirement = 63 - age;
  //   return retirement;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1990, "Vlad"));
console.log(yearsUntilRetirement(1980, "Ion"));
*/

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

/*
const calcAge = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 63 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years.`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired ${-retirement} years ago`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1990, "Vlad"));
console.log(yearsUntilRetirement(1970, "Mike"));
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

/*
//// TEST DATA 1
// const dolphinsScore1 = 44;
// const dolphinsScore2 = 23;
// const dolphinsScore3 = 71;
// const koalasScore1 = 65;
// const koalasScore2 = 54;
// const koalasScore3 = 49;

//// TEST DATA 2
const dolphinsScore1 = 85;
const dolphinsScore2 = 54;
const dolphinsScore3 = 41;

const koalasScore1 = 23;
const koalasScore2 = 34;
const koalasScore3 = 27;

const calcAverage = (a, b, c) => {
  return (a + b + c) / 3;
};

const dolphinsAverage = calcAverage(
  dolphinsScore1,
  dolphinsScore2,
  dolphinsScore3
);
const koalasAverage = calcAverage(koalasScore1, koalasScore2, koalasScore3);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log(
      `No team wins (Dolphins ${avgDolphins} vs. Koalas ${avgKoalas})`
    );
  }
}

checkWinner(dolphinsAverage, koalasAverage);
*/

/*
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1990, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

const firstName = "Vlad";
const vlad = [firstName, "Dubceac", 2023 - 1990, "programmer", friends];
console.log(vlad);
console.log(vlad.length);

// Exercise
const calcAge = function (birthYear) {
  return new Date().getFullYear() - birthYear;
};
const years = [1990, 1967, 2002, 2010, 2018, 2020];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[years.length - 1]),
];
*/

/*
const friends = ["Michael", "Steven", "Peter"];

// Add elements
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("Vlad");
console.log(friends);

// Remove elements
friends.pop(); // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven"));
console.log(friends.indexOf("Bob"));

friends.push(23);
console.log(friends.includes("Steven"));
console.log(friends.includes("Bob"));
console.log(friends.includes(23));

if (friends.includes("Steven")) {
  console.log("You have a friend called Steven");
}
*/

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

/*
const calcTip = function (billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
};

// console.log(calcTip(100));

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(`Bills = `, bills);
console.log(`Tips = `, tips);
console.log(`Totals = `, totals);
*/

/*
const vladArray = [
  "Vlad",
  "Dubceac",
  new Date().getFullYear() - 1990,
  "programmer",
  ["Andrew", "Val", "Peter"],
];

const vlad = {
  firstName: "Vlad",
  lastName: "Dubceac",
  age: new Date().getFullYear() - 1990,
  job: "programmer",
  friends: ["Andrei", "Petru", "Valeriu", "Vadim"],
};
*/

/*
const vlad = {
  firstName: "Vlad",
  lastName: "Dubceac",
  age: new Date().getFullYear() - 1990,
  job: "programmer",
  friends: ["Andrei", "Petru", "Valeriu", "Vadim"],
};
console.log(vlad);

console.log(vlad.lastName);
console.log(vlad["lastName"]);

const nameKey = "Name";
console.log(vlad["first" + nameKey]);
console.log(vlad["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Vlad? Choose between firstName, lastName, job and friends"
);

if (vlad[interestedIn]) {
  console.log(vlad[interestedIn]);
} else {
  console.log(
    "Wrong request! Choose between firstName, lastName, job and friends"
  );
}

vlad.location = "Moldova";
vlad["twitter"] = "@vladdubceac";
console.log(vlad);

// Challenge
// "Vlad has 4 friends, and his best friend is Andrei"
console.log(
  `${vlad.firstName} has ${vlad.friends.length} friends, and his best friend is ${vlad.friends[0]}`
);
*/

/*
const vlad = {
  firstName: "Vlad",
  lastName: "Dubceac",
  birthYear: 1990,
  job: "programmer",
  friends: ["Andrei", "Petru", "Valeriu", "Vadim"],
  hasDriversLicense: true,
  // calcAge: function (birthYear) {
  //   return new Date().getFullYear() - birthYear;
  // },

  // calcAge: function () {
  //   console.log(this);
  //   return new Date().getFullYear() - this.birthYear;
  // },

  calcAge: function () {
    this.age = new Date().getFullYear() - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
  },
};

console.log(vlad.calcAge());

console.log(vlad.age);
console.log(vlad.age);
console.log(vlad.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has no driver's license"

console.log(vlad.getSummary());
*/
///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

/*
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

if (john.calcBMI() > mark.calcBMI()) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
  );
} else if (john.bmi < mark.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
  );
} else {
  console.log(
    `${john.fullName} and ${mark.fullName} have equal BMIs (${john.bmi})`
  );
}
*/

// for loop keeps running while condition is TRUE
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}
*/

/*
const vladArray = [
  "Vlad",
  "Dubceac",
  new Date().getFullYear() - 1990,
  "programmer",
  ["Andrei", "Valeriu", "Vadim"],
  true,
];

const types = [];

for (let i = 0; i < vladArray.length; i++) {
  // Reading from vladArray
  console.log(vladArray[i], typeof vladArray[i]);

  // Filling types array
  // types[i] = typeof vladArray[i];
  // types[i] = typeof vladArray[i];
  types.push(typeof vladArray[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(new Date().getFullYear() - years[i]);
}

console.log(ages);

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < vladArray.length; i++) {
  if (typeof vladArray[i] !== "string") continue;
  console.log(vladArray[i], typeof vladArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < vladArray.length; i++) {
  if (typeof vladArray[i] === "number") break;
  console.log(vladArray[i], typeof vladArray[i]);
}
*/

/*
const vlad = [
  "Vlad",
  "Dubceac",
  new Date().getFullYear() - 1990,
  "programmer",
  ["Andrei", "Valeriu", "Vadim"],
  true,
];

for (let i = vlad.length - 1; i >= 0; i--) {
  console.log(i, vlad[i], typeof vlad[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`--- Starting exercise ${exercise} ---`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise} , repetition ${rep}`);
  }
}
*/

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

/*
let rep = 1;
while (rep <= 10) {
  console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) {
    console.log(`Loop is about to end...`);
  }
}
*/

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

/*
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (billValue) {
  if (billValue >= 50 && billValue <= 300) {
    return billValue * 0.15;
  } else {
    return billValue * 0.2;
  }
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}
console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/
