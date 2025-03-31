import recipes from "./recipes.mjs";

function getRandomIndex(maxNum) {
    return Math.floor(Math.random() * maxNum)
}

function getEntry(list) {
    const listLength = list.length;
    return list[getRandomIndex(listLength)]
}

function recipeTemplate(recipe) {
	return `<article class="recipe">
                <img class="recipe-image" src=${recipe.image} alt=${recipe.image}>
                    <section class="recipe-info">
                    ${tagsTemplate(recipe.tags)}
                        <h2>${recipe.name}</h2>
                        ${ratingTemplate(recipe.rating)}
                        <p class="recipe-description">${recipe.description}</p>
                    </section>
                </article>`;
}

function tagsTemplate(tags) {
	// loop through the tags list and transform the strings to HTML
    if (!tags || tags.length === 0) {
        return `<div class="tag-row"><span class="tag">No tags available</span></div>`;
    }
    let html = ``
    for(let i = 0; i < tags.length; i++) {
        html += `<div class="tag-row">
                    <span class="tag">${tags[i]}</span>
                </div>`
    }
	return html;
}

function ratingTemplate(rating) {
	// begin building an html string using the ratings HTML written earlier as a model.
	let html = `<span
	class="rating"
	role="img"
	aria-label="Rating: ${rating} out of 5 stars"
    >`
// our ratings are always out of 5, so create a for loop from 1 to 5
    for(let i = 0; i < 5; i++) {
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

const recipe = getEntry(recipes);
console.log(recipeTemplate(recipes));

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const parent = document.querySelector(".recipe-container");
	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    const replacment = recipeList.map(recipe => recipeTemplate(recipe)).join('');
	// Set the HTML strings as the innerHTML of our output element.
    parent.innerHTML = replacment;
}

function init() {
  // get a random recipe
  const recipe = getEntry(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();

function filterRecipes(query){
    // In that function use Array.filter to filter our recipes. 
    // You should check to see if the search term (query) shows up in the name, or the descriptions, or the tag list, or the ingredients list.
    const filtered = recipes.filter((recipe) => {
        const name = recipe.name.toLowerCase(); 
        const description = recipe.description.toLowerCase();
        const tags = recipe.tags.map((query) => query.toLowerCase());
        const ingredients = recipe.recipeIngredient.map((query) => query.toLowerCase());

        return name.includes(query) || 
            description.includes(query) || 
            tags.includes(query) || 
            ingredients.includes(query);
    
    });
    // Sort the list of recipes by name alphabetically.
    const sorted = filtered.sort((a,b) => a.name.localeCompare(b.name));
		return sorted
}

function searchHandler(e) {
    e.preventDefault()
    // Get whatever was typed into the search input and convert it all to lowercase. (Javascript comparing is case sensitive)
    const query = document.querySelector("input").value.toLowerCase();
    // Pass the query string into a filterRecipes(query) function.
    const filtered_results = filterRecipes(query); 
    // Render the filtered list of recipes to the page.
    renderRecipes(filtered_results);
}

document.querySelector(".search").addEventListener("click", searchHandler);