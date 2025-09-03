//list prime numbers

showPrimes(15);

function showPrimes(limit) {

    for (let nr = 2; nr < limit; nr++) {
        let isPrime = checkPrime(nr);    
    if (isPrime) console.log(nr);
    }
}

function checkPrime(number) {
    for (let factor = 2; factor < number; factor++) {
        if (number % factor === 0) {
        return false;
        }                         
    }
    return true;
}


