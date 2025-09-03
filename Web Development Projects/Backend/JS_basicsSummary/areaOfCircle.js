// area je read only property, radius muzu nastavit, ale area property ne

// const circle = {
//     radius: 2,
//     get area() {
//         return Math.PI * this.radius * this.radius
//     },
// }

//console.log(circle.area);

function createCircle(radius) {
    return {
    radius: radius,
    get area() {
        return Math.PI * this.radius * this.radius
    }
}
};

console.log(createCircle(2).area);

