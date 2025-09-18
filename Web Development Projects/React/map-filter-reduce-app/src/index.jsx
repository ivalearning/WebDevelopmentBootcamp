//var numbers = [3, 56, 2, 48, 5];

//Map napr. 
// function double(x) { return x * 2};
// const doubleNumbers = numbers.map(double);
// console.log(doubleNumbers);

// let doubleNumbers2 = numbers.map(function (x) { return x * 2}); 
// console.log(doubleNumbers2);


// let newNumbers = [];
// let newNumbers2 = [];
// function double2(x) { newNumbers.push(x*2) }
// numbers.forEach(double2) ;
// console.log(newNumbers);

// numbers.forEach(function (x) { newNumbers2.push(x*2)}) ;  // removing name=anonymous
// console.log(newNumbers2);

// Filter napr.

//numbers.filter(funkce)
// const overTen = numbers.filter(function(n) {
//     return n>10;
// });
// console.log(overTen);

// let overTenArray =[];
// numbers.forEach(function (n){
//     if (n>10) { overTenArray.push(n)   
//     }
// });
// console.log(overTenArray);

// Reduce napr. secist vsechna cisla

// let sum = 0;
// numbers.forEach(function (n) {
//     sum += n;
// });
// console.log(sum);

// let sum2 = numbers.reduce(function (accumulator,n) {
//     console.log("accumulator = " + accumulator);
//     console.log("currentNumber = " + n);    
//     return accumulator + n
// });
// console.log(sum2);

// Find napr.

// const firstOverTenNumber = numbers.find(function (n) {  // skonci po nalezeni prvniho true
//    return  n>10;
// });
// console.log(firstOverTenNumber);

// // FindIndex napr
// const firstLowerThreeNumberIndex = numbers.findIndex(function (n) {  // skonci po nalezeni prvniho true
//    return  n<3;
// });
// console.log(firstLowerThreeNumberIndex);


//Map -Create a new array by doing something with each item in an array.
//Filter - Create a new array by keeping the items that return true.
//Reduce - Accumulate a value by doing something to each item in an array.
//Find - find the first item that matches from an array.
//FindIndex - find the index of the first item that matches.

// If you're running this locally in VS Code use the commands:
// npm install
// to install the node modules and
// npm run dev
// to launch your react project in your browser

import emojipedia from "./emojipedia";

//console.log(emojipedia);

let desc = emojipedia.map(function (record)  { 
    return record.meaning.substring(0,100)
});
//console.log(desc);

let desc2 = emojipedia.map( record => 
    record.meaning.substring(0,100));
//console.log(desc2);



var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const newNumbersMap = numbers.map(function (x) {
  return x * 2;
});
const newNumbersMap2 = numbers.map(x => x * 2);
console.log(newNumbersMap);
console.log(newNumbersMap2);

////Filter - Create a new array by keeping the items that return true.
const newNumbersFilter = numbers.filter(function(num) {
  return num < 10;
});
const newNumbersFilter2 = numbers.filter(num => num < 10);
console.log(newNumbersFilter);
console.log(newNumbersFilter2);

//Reduce - Accumulate a value by doing something to each item in an array.
var newNumberReduce = numbers.reduce(function (accumulator, currentNumber) {
    return accumulator + currentNumber;
});
var newNumberReduce2 = numbers.reduce( (accumulator, currentNumber) => accumulator + currentNumber);
console.log(newNumberReduce);
console.log(newNumberReduce2);

//Find - find the first item that matches from an array.
const newNumberFind = numbers.find(function (num) {
  return num > 10;
});
const newNumberFind2 = numbers.find( num =>  num > 10);
console.log(newNumberFind);
console.log(newNumberFind2);

//FindIndex - find the index of the first item that matches.
const newNumberFindIndex = numbers.findIndex(function (num) {
  return num > 10;
});
const newNumberFindIndex2 = numbers.findIndex( num => num > 10);
console.log(newNumberFindIndex);
console.log(newNumberFindIndex2);





