import recipes from "./recipes.mjs";

console.log(recipes);

function getRandomIndex(maxNum) {
    return Math.floor(Math.random() * maxNum)
}

alert(getRandomIndex(12))