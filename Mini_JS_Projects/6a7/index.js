v terminalu npm install prompt-sync

const prompt = require("prompt-sync")()
const name = prompt("Whats your name? ")  mezera na konci je schvalne, aby zustal kurzor pro zapis odpovedi
console.log("Hello" , name, ", welcome") -- prida mezery
nebo
console.log("Hello " + name + " welcome") -- je potreba pridat mezery

const shouldWePlay = prompt('Do u wanna play? ')