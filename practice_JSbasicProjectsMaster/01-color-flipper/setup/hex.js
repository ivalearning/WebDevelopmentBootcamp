const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    let hexColor ="#";
    for (let index = 0; index < 6; index++) {
        const element = getRandomArrayItem();
        hexColor += hex[element]            //+= pridava ke stringu
    }
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;
})
function getRandomArrayItem() {
    return Math.floor(Math.random() * hex.length);
}