const marks = [80, 80, 50, 90];

// calculate average a porovnej se stupnici
// 1-59 F, 60-69 D, 70-79 C, 80-89 B, 90-100 A

//calculateGrade(marks);

// function calculateGrade(marks) {
//     let count = 0;
//     let sum = 0;

//     for (let i = 0; i < marks.length; i++) {
//         sum += marks[i];
//         count++;
//     }
//     console.log(sum);
//     console.log(count);

//     const average = sum / count;
//     console.log(average);

//     if (average < 60) console.log('F');
//     else if (average < 70) console.log('D');
//     else if (average < 80) console.log('C');
//     else if (average < 90) console.log('B');
//     else console.log('A');
//     }

    function calculateGrade2(marks) {
    let sum = 0;

    for (let mark of marks) 
        sum += mark;
    
    let average = sum / marks.length;

    if (average < 60)  return 'F';
    if (average < 70)  return 'D';
    if (average < 80)  return 'C';
    if (average < 90)  return 'B';
    return 'A';
}
//console.log('Grade: ', calculateGrade2(marks));

// lepsi je rozdelit na 2 funkce focused on 1 thing

function calculateAverage(array) {
    let sum = 0;

    for (let value of array) 
        sum += value;
    
    let average = sum / array.length;

    return average;    
}

function calculateGrade3(marks) {
    const average =  calculateAverage(marks);

    if (average < 60)  return 'F';
    if (average < 70)  return 'D';
    if (average < 80)  return 'C';
    if (average < 90)  return 'B';
    return 'A';
}

console.log('Grade3: ', calculateGrade3(marks));


