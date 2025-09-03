const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 5.3},
    {title: 'd', year: 2017, rating: 4.5},
];

function filterByYear(record) {
    if (record.year === 2018 && record.rating > 4)  return true
}

let m = movies.filter(filterByYear).sort((a,b) => a.rating - b.rating).reverse();
m = m.map( item => item.title)

const filtered = movies.filter( item =>  {
    return item.year === 2018 && item.rating > 4
} ).sort((a,b) => a.rating - b.rating)
.reverse()
.map(item => item.title)

console.log(m);
console.log(filtered);

