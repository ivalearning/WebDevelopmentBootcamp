
function checkSpeed(speed) {
const speedLimit = 70;

if (speed <= speedLimit) {
    console.log('OK');
} else  {
    let overLimit = speed - speedLimit;
    console.log('Over the limit: ' + overLimit + ' km/h');

    const points = Math.floor( overLimit / 5   );
        if (points === 0) {
            console.log('OK');       
        } else if (points > 0 && points < 12) {
            console.log('Points: ' + points); 
        } else console.log('Number of points: ' + points + '. Licence suspended.');   
}
}

checkSpeed(183);

