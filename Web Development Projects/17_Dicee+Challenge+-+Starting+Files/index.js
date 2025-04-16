
var randomNumber1 = Math.ceil(Math.random() * 6);
var randomNumber2 = Math.ceil(Math.random() * 6);

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

const text1 = "./images/dice"
const text2 = ".png"
const textP1 = text1.concat(randomNumber1,text2);
const textP2 = text1.concat(randomNumber2,text2); 

image1.setAttribute("src", textP1);
image2.setAttribute("src", textP2);

if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML ="&#x1F609; Player 1 wins."
}
else if (randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins. &#9996;"
} else { 
    document.querySelector("h1").textContent = "Draw"
}


