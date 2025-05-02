const colors = ["green", "red", "rgba(133,122,200)", "#f150FF"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const colorsCount = colors.length;
console.log(colorsCount);

btn.addEventListener("click", function() {

    const randomNumber = Math.floor(Math.random() * colorsCount) ;
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
    }
)