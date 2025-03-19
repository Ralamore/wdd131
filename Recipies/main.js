import recipes from "./recipes.mjs";

console.log(recipes);

function getRandomIndex(maxNum) {
    return Math.floor(Math.random() * maxNum)
}

function getEntry(list) {
    const listLength = list.length;
    return list[getRandomIndex(listLength)];
}

alert(getEntry(recipes).author);

function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML

	return html;
}

function recipeTemplate(recipe) {
	return `<article class="recipe">
            <img class="recipe-image" src="images/apple-crisp.jpg" alt="a bowl of apple crisp with ice cream">
            <section id="rec-info">
                <div class="tag-row">
                    <span class="tag">dessert</span>
                </div>
                <h2>${recipe.name}</h2>
                <span class="rating" role="img" aria-label="Rating: 4 out of 5 stars">
                    <span aria-hidden="true" class="icon-star">⭐</span>
                    <span aria-hidden="true" class="icon-star">⭐</span>
                    <span aria-hidden="true" class="icon-star">⭐</span>
                    <span aria-hidden="true" class="icon-star">⭐</span>
                    <span aria-hidden="true" class="icon-star-empty">☆</span>
                </span>
            </section>
        </article>`;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
    >`
// our ratings are always out of 5, so create a for loop from 1 to 5
    for(i = 0; i < 5; i++) {
		// check to see if the current index of the loop is less than our rating
        if (i < rating) {
           // if so then output a filled star 
            html += `⭐`;
        } else {
            // else output an empty star
            html += `☆`;
        }
    }
		
	// after the loop, add the closing tag to our string
	html += `</span>`
	// return the html string
	return html
}

const recipe = getRandomListEntry(recipes);
console.log(recipeTemplate(recipe));