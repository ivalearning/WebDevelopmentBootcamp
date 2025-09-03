
const numbers = [1,2,8, 3,4,1];
const exclude = [1, 2];
const output = except(numbers, exclude )

console.log(output);

function except(array, excluded) {
    const output = [];

    for (let n = 0; n < array.length; n++) {
        if (!excluded.includes(array[n])) {
            output.push(array[n])
        } 
    }
return output;
}


function except2(array, excluded) {
    const output = [];

    for (let element of array) {  
     if (!excluded.includes(element)) {
            output.push(element);
        }    
    }
return output;
}

