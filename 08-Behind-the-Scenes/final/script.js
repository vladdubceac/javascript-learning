'use strict';

/*
function calcAge(birthYear) {
  const age = new Date().getFullYear() - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      const output = 'NEW OUTPUT';

      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // add(2, 3);
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = 'Vlad';
calcAge(1990);
*/

/*
// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Vlad';
let job = 'teacher';
const year = 1990;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log(`All products deleted!`);
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
*/

/*
console.log(this);

const calcAge = function (birthYear) {
  console.log(new Date().getFullYear() - birthYear);
  console.log(this);
};
calcAge(1990);

const calcAgeArrow = birthYear => {
  console.log(new Date().getFullYear() - birthYear);
  console.log(this);
};
calcAgeArrow(1990);

const vlad = {
  year: 1990,
  calcAge: function () {
    console.log(this);
    console.log(new Date().getFullYear() - this.year);
  },
};
vlad.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = vlad.calcAge;
matilda.calcAge();

const f = vlad.calcAge;
f();
*/

/*
// var firstName = 'Matilda';

const vlad = {
  firstName: 'Vlad',
  year: 1990,
  calcAge: function () {
    // console.log(this);
    console.log(new Date().getFullYear() - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && self.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
vlad.greet();
vlad.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
*/

/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Vlad',
  age: 33,
};
const friend = me;
friend.age = 30;
console.log('Friend: ', friend);
console.log('Me ', me);
*/

// Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');

console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);
