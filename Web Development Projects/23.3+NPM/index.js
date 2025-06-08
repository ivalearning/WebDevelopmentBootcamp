/* CJS
var generateName = require('sillyname');
var sillyName = generateName();

console.log("My name is: " + sillyName);
console.log(`My name is ${sillyName}.`);
*/

// kdyz pouziju module EM

//var generateName = require('sillyname'); toto nahrazuje import

import generateName  from "sillyName";
var sillyName = generateName();

console.log("My name is: " + sillyName);
console.log(`My name is ${sillyName}.`);

import { randomSuperhero }  from "superheroes"

var hero = randomSuperhero();
console.log("I am " + hero);

