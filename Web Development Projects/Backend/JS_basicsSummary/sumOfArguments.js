
function sum(...args) {
    return args.reduce((a,b) => a + b )
}

console.log(sum(1,2,3,4,5));        // sum cisel
console.log(sum2([1,2,3,4,5]));     // sum cisel v array
console.log(sum3([1,2,3,4,5]));


function sum2(...params) {      
    
    if (params.length === 1 && Array.isArray(params[0])) {     //the rest operator vytvori array + posilam array tyn. mam array v array
        params = [...params[0]];                               // pouziju spread operator pouye nad 1. array to flatten it a nastavim jako array, s kterym pracuji
       return  params.reduce((a,b) => a + b );  
    }   
    } ;

function sum3(...params) {      
    
    if (params.length === 1 && Array.isArray(params[0])) {   
        params = [...params[0]];
        let total = 0;
        
        for (let number of params) {
             total += number    
         }
       return  total; 
    }
    } 

