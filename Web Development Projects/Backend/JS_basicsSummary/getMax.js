const numbers = [1,8,2,3,4];
const max = getMax3(numbers);

console.log(max);

function getMax(array) {
    let maxNr = array[0];

    if (array.length === 0) return undefined;

    for (let i = 0; i < array.length; i++) {
       if (array[i] > maxNr) {
        maxNr = array[i];

        return maxNr;        
       }
    }
};


function getMax2(array) {
    const maxNr = console.log(Math.max(...array));
    return maxNr;   
}

function getMax3(array) {
    if (array.length === 0) return undefined;

    return maxNr = array.reduce((a,b) => {
        if (a > b) return a;
        return b;  
    }); 
}

// da se prepsat na
//return array.reduce((a,b) => (a>b) ? a : b);