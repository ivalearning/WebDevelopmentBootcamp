function add(num1, num2) {
    return num1 + num2
}
function multiply(num1, num2) {
    return num1 * num2
}
function deduct(num1, num2) {
    return num1 - num2
}
function divide(num1, num2) {
    return num1 / num2
}

function calculator(num1, num2, operator) {
    return operator(num1,num2)
}
calculator(5,5,add);
debugger;
calculator(5,5,add); //shift+enter