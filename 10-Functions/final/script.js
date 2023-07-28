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
