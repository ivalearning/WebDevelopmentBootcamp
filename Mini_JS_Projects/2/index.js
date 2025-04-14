const input = document.getElementById("input")

function reverseString(str){
    return str.split("").reverse().join("")    
}

function checkText() {
    const text = input.value;
    const reverse = reverseString(text)

    if (text===reverse) {
        alert("This is PALINDROME")
    } else {
        alert("Not a palidrome")
    }
    alert(text + " vs " + reverse);
    input.value = "";
}