'use strict';

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this
  //   this.calcAge = function () {
  //     2037 - this.birthYear;
  //   };
};

const vlad = new Person('Vlad', 1990);
console.log(vlad);

// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(vlad instanceof Person);

// Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

vlad.calcAge();
matilda.calcAge();

console.log(vlad.__proto__);
console.log(vlad.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(vlad));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

// .prototypeOfLinkedObject

Person.prototype.species = 'Homo Sapiens';
console.log(vlad, matilda);
console.log(vlad.species, matilda.species);

console.log(vlad.hasOwnProperty('firstName'));
console.log(vlad.hasOwnProperty('species'));
