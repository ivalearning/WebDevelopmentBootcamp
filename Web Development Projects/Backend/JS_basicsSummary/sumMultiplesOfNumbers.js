
function sum(limit) {
    let total = 0;
    
    for (let i = 1; i <= limit; i++) {
        if (i % 3 === 0 || i % 5 === 0) total += i;      
    }

    return total;
};

console.log(sum(10));
