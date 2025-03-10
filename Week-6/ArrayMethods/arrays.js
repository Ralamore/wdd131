//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>` //the html string made from step
}
const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
//document.querySelector("#myList").innerHTML = stepsHtml.join(""); // set the innerHTML

const grades = ['A', 'B', 'A'];
function convertGradeToNum(grade) {
    let point = 0;
    if (grade === 'A') {
        point = 4;
    } else if (grade === 'B') {
        point = 3;
    }
    return point;
}

const gpaPoints = grades.map(convertGradeToNum);
//
console.log("gpa points: " + gpaPoints);

const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;
//

const foods = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const filFoods = foods.filter((foods) => foods.length < 6);
//

const nums = [12, 34, 21, 54];
const lucky = 12;
const twelveLocation = nums.indexOf(lucky);