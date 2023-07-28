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
