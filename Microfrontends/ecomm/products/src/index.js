import faker from 'faker';

let products = '';

for (let index = 0; index < 5; index++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
}
console.log(products);

document.querySelector('#dev-products').innerHTML = products;


