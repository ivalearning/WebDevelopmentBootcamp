const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const dateItems = document.querySelectorAll('.deadline-format h4');

//console.log(dateItems);

// zadani konkretniho datumu rucne
//let futureDate = new Date(2025,5,19,18,48,0); //  mesic je od 0
//console.log(futureDate);

// zadani datumu automaticky jako now + 10 days
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();
let tempHour = tempDate.getHours();
let tempMinute = tempDate.getMinutes();
let tempSecs = tempDate.getSeconds();

const futureDate = new Date(tempYear, tempMonth, tempDay + 10, tempHour, tempMinute,tempSecs)
console.log(futureDate);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

let month = futureDate.getMonth();
month = months[month];

const day = futureDate.getDate();
let dayName = weekdays[futureDate.getDay()];


giveaway.textContent = `giveaway ends on ${dayName}  ${day} ${month} ${year}, ${hours}:${mins}          `

// future time in miliseconds
const futureTime = futureDate.getTime();
//console.log(futureTime);


function getRemainingTime() {
  const currentTime = new Date().getTime();
  //console.log(currentTime);

  const timeDiff = futureTime - currentTime;
  //console.log(timeDiff);

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all values

  let days = Math.floor(timeDiff / oneDay);
  let hrs =  Math.floor((timeDiff % oneDay) / oneHour);         // Math.floor((timeDiff - (days * oneDay)) / oneHour);
  let minutes = Math.floor((timeDiff % oneHour) / oneMinute);   // Math.floor((timeDiff - (days * oneDay) - (hrs * oneHour)) / oneMinute);
  let secs = Math.floor((timeDiff % oneMinute) / 1000);         // Math.floor((timeDiff - (days * oneDay) - (hrs * oneHour) - (minutes * oneMinute)) /1000);

   // set value array
  const values = [days, hrs, minutes, secs];
  //console.log(values);

  // prida nulu na zacatek pro cisla mensi nez 10
  function format(item) {
    if (item < 10) {
      return item = `0${item}`
    }
    return item
  }

  dateItems.forEach( function(item,index) {
    item.innerHTML = format(values[index]);       //<--------------------------? index hodnot se bude rovnat indexu dateItems?
  })
    if (timeDiff<0) {
      clearInterval(countdown);
      deadline.innerHTML = `<h4 class="expired">Sorry, already expired</h4>`;
    }
}

// countdown

let countdown = setInterval(getRemainingTime, 1000); // 2 parametry - callback funkci a jak casto se ma volat (1000=kazdou sekundu)

getRemainingTime();
//console.log(days);


