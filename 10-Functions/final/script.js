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
