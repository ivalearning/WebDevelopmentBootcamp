
const numbers = (1,2); // [1, 2, 3, 4, 1, 5, 1]
try {
        const count = countOccurrences(numbers, 1); 
        console.log(count); 
} catch (error) {
    console.log(error.message);    
}

const count = countOccurrences(numbers, 1); 
console.log(count); 

function countOccurrences(array, searchElement) {
  // let count = 0; 
  // for (let element of array)
  //   if (element === searchElement)
  //     count++;
  // return count;

    if(!Array.isArray(array)) {
        throw new Error("Not a valid array");        
    } 

  return array.reduce((accumulator, current) => {
    const occurrence = (current === searchElement) ? 1 : 0;
    //console.log(accumulator, current, searchElement);
    return accumulator + occurrence;
  }, 0);
}