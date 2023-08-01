'use strict';

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);
*/

/*
// Passing arguments
let flight = 'LH234';
const vlad = {
  name: 'Vlad Dubceac',
  passport: 2345678923456,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 2345678923456) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, vlad);
// console.log(flight);
// console.log(vlad);

// Is the same as doing...
// const flightNum = flight;
// const passenger = vlad;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(vlad);
checkIn(flight, vlad);
*/

/*
// Functions accepting callback functions
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log(`👋`);
};
document.body.addEventListener('click', high5);

['Vlad', 'Martha', 'Adam'].forEach(high5);

const sum = (a, b) => a + b;
const difference = function (a, b) {
  return a - b;
};
function multiplication(a, b) {
  return a * b;
}

const division = function (a, b) {
  if (b) {
    return a / b;
  } else {
    console.log(`Division is not possible, second number = ${b}`);
  }
};

const biFunction = function (number1, number2, fn) {
  console.log(`Number A = ${number1} , number B = ${number2}`);
  console.log(`Operation = ${fn.name}`);
  const result = fn(number1, number2);
  console.log(`Result = ${result}`);
  return result;
};

biFunction(1, 2, sum);
biFunction(1, 2, difference);
biFunction(10, 2, multiplication);
biFunction(12, 23, division);
biFunction(12, 0, division);
biFunction(12, undefined, division);
*/

/*
// Functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}`);
  };
};

const greeterHey = greet(`Hey`);
greeterHey('Vlad');
greeterHey('World');

greet('Hello')('Vlad');

// Challenge
const greet1 = greeting => name => console.log(`${greeting}, ${name}`);

greet1('Hi')('World');
*/

/*
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Vlad Dubceac');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sara Williams');

// Call method
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Vlad Dubceac');
bookEW23('Marta Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.2);
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.2);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/

//////////////////////////
// Challenge #4
/* 
Let's build a simple poll app!
A poll has a question, an array of options from which people can choose, and an
array with the number of replies for each option. This data is stored in the starter
'poll' object below.
Your tasks:
1. Create a method called 'registerNewAnswer' on the 'poll' object. The
method does 2 things:
1.1. Display a prompt window for the user to input the number of the
selected option. The prompt should look like this:
What is your favourite programming language?
0: JavaScript
1: Python
2: Rust
3: C++
(Write option number)
1.2. Based on the input number, update the 'answers' array property. For
example, if the option is 3, increase the value at position 3 of the array by
1. Make sure to check if the input is a number and if the number makes
sense (e.g. answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The
method takes a string as an input (called 'type'), which can be either 'string'
or 'array'. If type is 'array', simply display the results array as it is, using
console.log(). This should be the default option. If type is 'string', display a
string like "Poll results are 13, 2, 4, 1".
4. Run the 'displayResults' method at the end of each
'registerNewAnswer' method call.
5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?

Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section 😉
GOOD LUCK 😀

*/

// CHALLENGE #1 SOLUTION
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0,0,0,0]
  answers: new Array(4).fill(0),
  // registerNewAnswer: function () {
  //   let promptMessage = this.question;
  //   for (let option of this.options) {
  //     const [index, val] = option.split(':');
  //     promptMessage += `\n${index} : ${val}`;
  //   }
  //   promptMessage += '\n(Write option number)';

  //   let availableAnswers = [];
  //   for (let option of this.options) {
  //     availableAnswers.push(option.slice(0, option.indexOf(':')));
  //   }

  //   const minAnswer = availableAnswers[0];
  //   const maxAnswer = availableAnswers[availableAnswers.length - 1];

  //   let answer;
  //   do {
  //     answer = Number(prompt(`${promptMessage}`));
  //   } while (
  //     (!answer && answer !== 0) ||
  //     !(answer >= minAnswer && answer <= maxAnswer)
  //   );
  //   this.answers[answer]++;
  //   this.displayResults();
  // },
  registerNewAnswer() {
    // Get answer
    const answer = Number(
      prompt(
        `$this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);
    // Register answer
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;
    this.displayResults();
    this.displayResults('string');
  },

  // displayResults: function (type = 'array') {
  //   let output = '';
  //   if (type === 'string') {
  //     output = 'The results of the poll are ';
  //     for (const [index, result] of this.answers.entries()) {
  //       output += `${result}${index < this.answers.length - 1 ? ', ' : ''}`;
  //     }
  //   } else {
  //     output = this.answers;
  //   }
  //   console.log(output);
  // },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

// poll.registerNewAnswer();

// const pollRegisterNewAnswer = poll.registerNewAnswer;
// document
//   .querySelector('.poll')
//   .addEventListener('click', pollRegisterNewAnswer.bind(poll));

// const test = {};
// test.answers = [5, 2, 3];
// const testDisplayResults = poll.displayResults.bind(test);
// testDisplayResults();
// testDisplayResults('string');
// testDisplayResults('array');

// test.answers = [1, 5, 3, 9, 6, 1];
// testDisplayResults();
// testDisplayResults('string');
// testDisplayResults('array');

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
*/

// IIFE
/*
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE (Immediately Invoked Function Expressions)
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
*/

/*
const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);
*/

// Closure examples
/*
// Example 1
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

// setTimeout(function () {
//   console.log('TIMER');
// }, 1000);

const perGroup = 1000;
boardPassengers(180, 3);
*/

// CHALLENGE #2
/* This is more of a thinking challenge than a coding challenge 🤓
Your tasks:
1. Take the IIFE below and at the end of the function, attach an event listener that
changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself (or someone around you) why this worked! Take all
the time you need. Think about when exactly the callback function is executed,
and what that means for the variables involved in this example.
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  let counter = 0;
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
