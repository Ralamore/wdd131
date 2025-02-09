const PI = 3.14;
const radius = 3;
let area = 0;

function circleArea(radius) {
    return radius * radius * PI;
}

area = circleArea(3)
console.log("Area 1: ", area)

area = circleArea(4);
console.log("Area 2: " + area);