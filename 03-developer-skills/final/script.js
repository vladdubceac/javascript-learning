// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// PROBLEM:
// We work for a company building a smart home thermometer.  Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

/*
const x = '23';

if (x === 23) console.log(23);

const calcAge = birthYear => new Date().getFullYear() - birthYear;

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
*/

// 1) Understanding the problem
// - What is temp amplitude ? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// = What's a sensor error ? And what to do?

// 2) Breaking up into sub-problem
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

/*
const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') {
      continue;
    }

    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);
*/

// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - How to merge 2 arrays?

/*
const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') {
      continue;
    }

    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew);
*/

/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C) FIX
    value: Number(prompt('Degrees celsius:')),
    // value: 10,
  };

  // B) FIND
  console.table(measurement);

  console.log(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};
// A) IDENTIFY
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);

  //   let max = 0;
  let max = temps[0];
  //   let min = 0;
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') {
      continue;
    }

    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A) IDENTIFY the bug
console.log(amplitudeBug);
*/

///////////////////////////////////////
// Coding Challenge #1

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1) Understanding the proble Function transforms array into a string
// What is X days
// - use array elements for temperatures : arr[0] - temperature for day 1, arr[1] - temperature for day 2 ...
// - log '... ${arr[0]} C in 0+1 days ... ${arr[1]} C in 1+1 days ...'

// 2) Breaking up into sub-problem
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... betweem elements and start and end of string
// if the array is empty ? log error message
// if the array is null or undefined ?  log error message

const printForecast = function (arr) {
  if (arr === null || arr === undefined) {
    console.error(
      'Not an valid parameter ! Please give a non-empty array with numbers !'
    );
    return;
  }
  if (arr.length == 0) {
    console.error('Empty array !');
    return;
  }
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += ` ${arr[i]}ºC in ${i + 1} days ...`;
  }
  if (str !== '') {
    str = '...' + str;
  }
  console.log(str);
};

printForecast(null); // test with 'null'
var test;
printForecast(test); // test with 'undefined'
let test1 = [];
printForecast(test1); // test with empty array

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
printForecast(data1);
printForecast(data2);
