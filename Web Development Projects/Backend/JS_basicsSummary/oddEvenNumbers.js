showNumbers(10);

function showNumbers(limit) {
    console.log(limit);

    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0) {
            console.log(i, 'EVEN');
        } else {
            console.log(i, "ODD");           
        }
    }
}

showNumbers2(15);  // bez zavorek
showNumbers3(15);  // pouziti podminky v log funkci + obe moznosti

function showNumbers2(limit) {
    
    for (let i = 0; i <= limit; i++) {
        if (i % 2 === 0) console.log(i, 'EVEN');
        else console.log(i, "ODD");
    }
}

function showNumbers3(limit) {
    
    for (let i = 0; i <= limit; i++) {

    const msg = (i % 2 === 0 ? 'EVEN' : 'ODD');
    console.log(i, msg);
    }
}