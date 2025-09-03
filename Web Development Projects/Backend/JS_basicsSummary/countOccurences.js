
const numbers = [1,2,3,4,1,1];
const count = countNr2(numbers, 1);

console.log(count);

function countNr(array, searched) {
    let count = 0;
    
    for(nr of array) {
        if (nr === searched) 
            count++;            
    }
   return count; 
}

function countNr2(array, searched) {
    let initialCount = 0;
    
    return array.reduce((accumulator, currentValue) => {
        const occurence = (currentValue === searched) ? 1 : 0;
        return accumulator + occurence;
     },0);
   }