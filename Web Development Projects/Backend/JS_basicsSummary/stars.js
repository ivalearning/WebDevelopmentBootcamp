showStars(11);

function showStars(rows) {
    
    for (let i = 1; i <= rows; i++) {
        nrOfStars = '';

        for (let index = 0; index < i; index++) {
            nrOfStars += '*'  
        }
        console.log(nrOfStars);   
    }  
}