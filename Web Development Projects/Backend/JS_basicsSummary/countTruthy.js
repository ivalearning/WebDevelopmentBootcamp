const array = [1,2,3, '', 'item', null, 0, true];

function countTruthy(array) {
    console.log(array);
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (item) {
            console.log(i, 'truthy');
            count++;    
        } 
    }
    console.log(count); 
}

//countTruthy(array);
countTruthy2(array);

function countTruthy2(array) {
    let count = 0;

    for(let value of array)
        if (value)
            count++;
    return count;
}

console.log(countTruthy2(array));

