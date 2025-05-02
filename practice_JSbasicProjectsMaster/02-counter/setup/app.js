//set initial count
let count = 0;

//select and buttons
const counter = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");
//console.log(buttons);

buttons.forEach( function(btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else if (styles.contains("reset")) {
            count=0; 
        }
        counter.textContent = count;

        if (count < 0) {
            counter.style.color = "red"; 
        } else if (count > 0) {
            counter.style.color = "green";
        } else {
            counter.style.color = "black"
        }
    });
}) ;
    