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

console.log(vlad.__proto__);
// Object.prototype (top of prototype chain)
console.log(vlad.__proto__.__proto__);
console.log(vlad.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 6, 4, 5, 6, 9, 9, 9]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  if (this.speed < 5) {
    this.speed = 0;
  } else {
    this.speed -= 5;
  }
  if (this.speed === 0) {
    console.log(`The ${this.make} is stopped`);
    return;
  }
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const BMW = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);

BMW.accelerate();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
BMW.brake();
console.log('------------');
Mercedes.brake();
Mercedes.brake();
Mercedes.brake();
Mercedes.brake();
Mercedes.brake();
Mercedes.brake();
Mercedes.brake();
Mercedes.brake();
Mercedes.brake();
Mercedes.brake();
Mercedes.brake();
Mercedes.brake();
Mercedes.brake();
Mercedes.brake();
Mercedes.brake();
Mercedes.brake();
Mercedes.brake();
Mercedes.brake();
Mercedes.brake();
Mercedes.brake();
Mercedes.brake();
