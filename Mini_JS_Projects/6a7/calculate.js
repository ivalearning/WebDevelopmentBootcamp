// v terminalu npm install prompt-sync
const prompt = require("prompt-sync")()

function getNumber(numberString) {
    while (true) {
    const number = parseFloat(prompt("Enter the number " + numberString + ": "));
    if (isNaN(number)) {
        console.log("Invalid input")
    } else {
        return number
        }
    } 
}

const number1 = getNumber("one");
const number2 = getNumber("two");
const operator = prompt("Enter the operator: ");

let result;
let valid = true;
switch(operator) {
    case "+":
        result = number1 + number2
        break;
    case "-":
        result = number1-number2
        break;
    case "*":
        result = number1*number2
        break;   
    case "/":
        if (number2===0) {
            valid = false;
            console.log("Zero division error")
        }
        result = number1/number2
        break;
    default:
        console.log("Invalid");
        valid = false;
        break;
}
if (valid) console.log(number1 + operator + number2 + "=" + result)





