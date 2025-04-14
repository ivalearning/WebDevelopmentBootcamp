const time = document.getElementById("time");

let secondsPassed = 0;
let interval = null;

function timer() {
    secondsPassed++; /* prida sekundu */
    setTime();       /* a nastavi stopky */
}
function padStart(value) {
    return String(value).padStart(2,"0"); /* 2 znaky, pokud je jen 1, tak prida 0 na zacatek, 
                                            String() proto, ze se tak da pouzit pad funkce */
}

function setTime() {
    const minutes = Math.floor(secondsPassed / 60);
    const seconds = secondsPassed % 60;                 /* zbytek po deleni 60ti */
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;
}

function startTimer() {
    if (interval)  stopTimer()         /* pokud existuje inteval, tak ho zastavi */
    interval = setInterval(timer,1000) /* vytvori interval, vola funkci timer kazdych 1000ms */ 
}

function stopTimer() {
    clearInterval(interval) /* zrusi interval, nenastavuje novou hodnotu na pocitadle (secondsPassed+setTime()) */
}

function resetTimer() {
    stopTimer();
    secondsPassed = 0; /* zmeni hodnotu zpet na nulu */
    setTime();         /* a zobrazi na stopkach */
}